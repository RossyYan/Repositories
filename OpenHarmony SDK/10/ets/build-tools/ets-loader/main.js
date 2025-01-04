/*
 * Copyright (c) 2020 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const JSON5 = require('json5');

const {
  readFile,
  writeFileSync,
  resourcesRawfile,
  storedFileInfo
} = require('./lib/utils');

const {
  WORKERS_DIR,
  TEST_RUNNER_DIR_SET,
  TS2ABC,
  ES2ABC,
  FAIL
} = require('./lib/pre_define');

const {
  checkAotConfig
} = require('./lib/gen_aot');

const {
  configure,
  getLogger
} = require('log4js');

configure({
  appenders: { 'ETS': {type: 'stderr', layout: {type: 'messagePassThrough'}}},
  categories: {'default': {appenders: ['ETS'], level: 'info'}}
});
const logger = getLogger('ETS');

const staticPreviewPage = process.env.aceStaticPreview;
const aceCompileMode = process.env.aceCompileMode || 'page';
const abilityConfig = {
  abilityType: process.env.abilityType || 'page',
  abilityEntryFile: null,
  projectAbilityPath: [],
  testRunnerFile: []
};
const projectConfig = {};
const resources = {
  app: {},
  sys: {}
};
const systemModules = [];
const abilityPagesFullPath = [];
const globalModulePaths = [];
let sdkConfigs = [];
let defaultSdkConfigs = [];
const extendSdkConfigs = [];
let sdkConfigPrefix = 'ohos|system';
let ohosSystemModulePaths = [];

function initProjectConfig(projectConfig) {
  projectConfig.entryObj = {};
  projectConfig.cardObj = {};
  projectConfig.projectPath = projectConfig.projectPath || process.env.aceModuleRoot ||
    path.join(process.cwd(), 'sample');
  projectConfig.buildPath = projectConfig.buildPath || process.env.aceModuleBuild ||
    path.resolve(projectConfig.projectPath, 'build');
  projectConfig.aceModuleBuild = projectConfig.buildPath; // To be compatible with both webpack and rollup
  projectConfig.manifestFilePath = projectConfig.manifestFilePath || process.env.aceManifestPath ||
    path.join(projectConfig.projectPath, 'manifest.json');
  projectConfig.aceProfilePath = projectConfig.aceProfilePath || process.env.aceProfilePath;
  projectConfig.aceModuleJsonPath = projectConfig.aceModuleJsonPath || process.env.aceModuleJsonPath;
  projectConfig.aceSuperVisualPath = projectConfig.aceSuperVisualPath ||
    process.env.aceSuperVisualPath;
  projectConfig.hashProjectPath = projectConfig.hashProjectPath ||
    hashProjectPath(projectConfig.projectPath);
  projectConfig.aceBuildJson = projectConfig.aceBuildJson || process.env.aceBuildJson;
  projectConfig.cachePath = projectConfig.cachePath || process.env.cachePath ||
    path.resolve(__dirname, 'node_modules/.cache');
  projectConfig.aceSoPath = projectConfig.aceSoPath || process.env.aceSoPath;
  projectConfig.xtsMode = /ets_loader_ark$/.test(__dirname);
  projectConfig.localPropertiesPath = projectConfig.localPropertiesPath || process.env.localPropertiesPath;
  projectConfig.projectProfilePath = projectConfig.projectProfilePath || process.env.projectProfilePath;
  projectConfig.isPreview = projectConfig.isPreview || process.env.isPreview === 'true';
  projectConfig.compileMode = projectConfig.compileMode || 'jsbundle';
  projectConfig.runtimeOS = projectConfig.runtimeOS || process.env.runtimeOS || 'default';
  projectConfig.sdkInfo = projectConfig.sdkInfo || process.env.sdkInfo || 'default';
  projectConfig.compileHar = false;
  projectConfig.compileShared = false;
  projectConfig.splitCommon = false;
  projectConfig.checkEntry = projectConfig.checkEntry || process.env.checkEntry;
  projectConfig.obfuscateHarType = projectConfig.obfuscateHarType || process.env.obfuscate;
  projectConfig.packageDir = 'node_modules';
  projectConfig.packageJson = 'package.json';
  projectConfig.packageManagerType = 'npm';
  projectConfig.cardEntryObj = {};
  projectConfig.compilerTypes = [];
  projectConfig.isCrossplatform = projectConfig.isCrossplatform || false;
}

function loadEntryObj(projectConfig) {
  let manifest = {};
  initProjectConfig(projectConfig);
  loadBuildJson();
  if (process.env.aceManifestPath && aceCompileMode === 'page') {
    setEntryFile(projectConfig);
    setFaTestRunnerFile(projectConfig);
  }
  if (process.env.aceModuleJsonPath) {
    setAbilityPages(projectConfig);
    setStageTestRunnerFile(projectConfig);
  }

  if (staticPreviewPage) {
    projectConfig.entryObj['./' + staticPreviewPage] = projectConfig.projectPath + path.sep +
      staticPreviewPage + '.ets?entry';
  } else if (abilityConfig.abilityType === 'page') {
    if (fs.existsSync(projectConfig.manifestFilePath)) {
      const jsonString = fs.readFileSync(projectConfig.manifestFilePath).toString();
      manifest = JSON.parse(jsonString);
      if (manifest && manifest.minPlatformVersion) {
        process.env.minPlatformVersion = manifest.minPlatformVersion;
        partialUpdateController(manifest.minPlatformVersion);
      }
      projectConfig.pagesJsonFileName = 'config.json';
    } else if (projectConfig.aceModuleJsonPath && fs.existsSync(projectConfig.aceModuleJsonPath)) {
      process.env.compileMode = 'moduleJson';
      buildManifest(manifest, projectConfig.aceModuleJsonPath);
    } else {
      throw Error('\u001b[31m ERROR: the manifest file ' + projectConfig.manifestFilePath.replace(/\\/g, '/') +
        ' or module.json is lost or format is invalid. \u001b[39m').message;
    }
    if (!projectConfig.compileHar) {
      if (manifest.pages) {
        const pages = manifest.pages;
        pages.forEach((element) => {
          const sourcePath = element.replace(/^\.\/ets\//, '');
          const fileName = path.resolve(projectConfig.projectPath, sourcePath + '.ets');
          if (fs.existsSync(fileName)) {
            projectConfig.entryObj['./' + sourcePath] = fileName + '?entry';
          } else {
            throw Error(`\u001b[31m ERROR: page '${fileName.replace(/\\/g, '/')}' does not exist. \u001b[39m`)
              .message;
          }
        });
      } else {
        throw Error('\u001b[31m ERROR: missing pages attribute in ' +
          projectConfig.manifestFilePath.replace(/\\/g, '/') +
          '. \u001b[39m').message;
      }
    }
  }
}

function buildManifest(manifest, aceConfigPath) {
  try {
    const moduleConfigJson = JSON.parse(fs.readFileSync(aceConfigPath).toString());
    manifest.type = process.env.abilityType;
    if (moduleConfigJson && moduleConfigJson.app && moduleConfigJson.app.minAPIVersion) {
      if (moduleConfigJson.module && moduleConfigJson.module.metadata) {
        partialUpdateController(moduleConfigJson.app.minAPIVersion, moduleConfigJson.module.metadata);
        stageOptimization(moduleConfigJson.module.metadata);
      } else {
        partialUpdateController(moduleConfigJson.app.minAPIVersion);
      }
    }
    if (moduleConfigJson.module) {
      switch (moduleConfigJson.module.type) {
        case 'har':
          projectConfig.compileHar = true;
          getPackageJsonEntryPath();
          break;
        case 'shared':
          projectConfig.compileShared = true;
          getPackageJsonEntryPath();
          manifest.pages = getPages(moduleConfigJson);
          break;
        default:
          manifest.pages = getPages(moduleConfigJson);
          break;
      }
    } else {
      throw Error('\u001b[31m' +
        'BUIDERROR: the config.json file miss key word module || module[abilities].' +
        '\u001b[39m').message;
    }
  } catch (e) {
    if (/BUIDERROR/.test(e)) {
      throw Error(e.replace('BUIDERROR', 'ERROR')).message;
    } else {
      throw Error('\x1B[31m' + 'ERROR: the module.json file is lost or format is invalid.' +
        '\x1B[39m').message;
    }
  }
}

function getPackageJsonEntryPath() {
  const rootPackageJsonPath = path.resolve(projectConfig.projectPath, '../../../' + projectConfig.packageJson);
  if (fs.existsSync(rootPackageJsonPath)) {
    let rootPackageJsonContent;
    try {
      rootPackageJsonContent = (projectConfig.packageManagerType === 'npm' ?
        JSON : JSON5).parse(fs.readFileSync(rootPackageJsonPath, 'utf-8'));
    } catch (e) {
      throw Error('\u001b[31m' + 'BUIDERROR: ' + rootPackageJsonPath + ' format is invalid.' + '\u001b[39m').message;
    }
    if (rootPackageJsonContent) {
      if (rootPackageJsonContent.module) {
        getEntryPath(rootPackageJsonContent.module, rootPackageJsonPath);
      } else if (rootPackageJsonContent.main) {
        getEntryPath(rootPackageJsonContent.main, rootPackageJsonPath);
      } else {
        getEntryPath('', rootPackageJsonPath);
      }
    } else if (projectConfig.compileHar) {
      throw Error('\u001b[31m' + 'BUIDERROR: lack message in ' + projectConfig.packageJson + '.' +
        '\u001b[39m').message;
    }
  }
}

function supportSuffix(mainEntryPath) {
  if (fs.existsSync(path.join(mainEntryPath, 'index.ets'))) {
    mainEntryPath = path.join(mainEntryPath, 'index.ets');
  } else if (fs.existsSync(path.join(mainEntryPath, 'index.ts'))) {
    mainEntryPath = path.join(mainEntryPath, 'index.ts');
  } else if (fs.existsSync(path.join(mainEntryPath, 'index.js'))) {
    mainEntryPath = path.join(mainEntryPath, 'index.js');
  } else if (projectConfig.compileHar) {
    throw Error('\u001b[31m' + 'BUIDERROR: not find entry file in ' + projectConfig.packageJson +
      '.' + '\u001b[39m').message;
  }
  return mainEntryPath;
}

function supportExtName(mainEntryPath) {
  if (path.extname(mainEntryPath) === '') {
    if (fs.existsSync(mainEntryPath + '.ets')) {
      mainEntryPath = mainEntryPath + '.ets';
    } else if (fs.existsSync(mainEntryPath + '.ts')) {
      mainEntryPath = mainEntryPath + '.ts';
    } else if (fs.existsSync(mainEntryPath + '.js')) {
      mainEntryPath = mainEntryPath + '.js';
    }
  }
  return mainEntryPath;
}

function getEntryPath(entryPath, rootPackageJsonPath) {
  let mainEntryPath = path.resolve(rootPackageJsonPath, '../', entryPath);
  if (fs.existsSync(mainEntryPath) && fs.statSync(mainEntryPath).isDirectory()) {
    mainEntryPath = supportSuffix(mainEntryPath);
  } else {
    mainEntryPath = supportExtName(mainEntryPath);
  }
  if (fs.existsSync(mainEntryPath) && fs.statSync(mainEntryPath).isFile()) {
    const entryKey = path.relative(projectConfig.projectPath, mainEntryPath);
    projectConfig.entryObj[entryKey] = mainEntryPath;
    abilityPagesFullPath.push(path.resolve(mainEntryPath).toLowerCase());
  } else if (projectConfig.compileHar) {
    throw Error('\u001b[31m' + `BUIDERROR: not find entry file in ${rootPackageJsonPath}.` + '\u001b[39m').message;
  }
}

function stageOptimization(metadata) {
  if (Array.isArray(metadata) && metadata.length) {
    metadata.some(item => {
      if (item.name && item.name === 'USE_COMMON_CHUNK' &&
        item.value && item.value === 'true') {
        projectConfig.splitCommon = true;
        return true;
      }
    });
  }
}

function getPages(configJson) {
  const pages = [];
  let pagesJsonFileName = '';
  // pages is not necessary in stage
  if (process.env.compileMode === 'moduleJson' && configJson.module && configJson.module.pages) {
    pagesJsonFileName = `${configJson.module.pages.replace(/\$profile\:/, '')}.json`;
  } else {
    return pages;
  }
  const modulePagePath = path.resolve(projectConfig.aceProfilePath, pagesJsonFileName);
  if (fs.existsSync(modulePagePath)) {
    try {
      const pagesConfig = JSON.parse(fs.readFileSync(modulePagePath, 'utf-8'));
      if (pagesConfig && pagesConfig.src) {
        projectConfig.pagesJsonFileName = pagesJsonFileName;
        return pagesConfig.src;
      }
    } catch (e) {
      throw Error("\x1B[31m" + `BUIDERROR: the ${modulePagePath} file format is invalid.` +
        "\x1B[39m").message;
    }
  }
  return pages;
}

function setEntryFile(projectConfig) {
  const entryFileName = abilityConfig.abilityType === 'page' ? 'app' : abilityConfig.abilityType;
  const extendFile = entryFileName === 'app' ? '.ets' : '.ts';
  const entryFileRealPath = entryFileName + extendFile;
  const entryFilePath = path.resolve(projectConfig.projectPath, entryFileRealPath);
  abilityConfig.abilityEntryFile = entryFilePath;
  if (!fs.existsSync(entryFilePath) && aceCompileMode === 'page') {
    throw Error(`\u001b[31m ERROR: missing ${entryFilePath.replace(/\\/g, '/')}. \u001b[39m`).message;
  }
  projectConfig.entryObj[`./${entryFileName}`] = entryFilePath + '?entry';
}

function setAbilityPages(projectConfig) {
  let abilityPages = [];
  if (projectConfig.aceModuleJsonPath && fs.existsSync(projectConfig.aceModuleJsonPath)) {
    const moduleJson = JSON.parse(fs.readFileSync(projectConfig.aceModuleJsonPath).toString());
    abilityPages = readAbilityEntrance(moduleJson);
    setAbilityFile(projectConfig, abilityPages);
    setBundleModuleInfo(projectConfig, moduleJson);
  }
}

function setTestRunnerFile(projectConfig, isStageBased) {
  const index = projectConfig.projectPath.split(path.sep).join('/').lastIndexOf('\/');
  TEST_RUNNER_DIR_SET.forEach((dir) => {
    const projectPath = isStageBased ? projectConfig.projectPath : projectConfig.projectPath.substring(0, index + 1);
    const testRunnerPath = path.resolve(projectPath, dir);
    if (fs.existsSync(testRunnerPath)) {
      const testRunnerFiles = [];
      readFile(testRunnerPath, testRunnerFiles);
      testRunnerFiles.forEach((item) => {
        if (/\.(ts|js|ets)$/.test(item)) {
          if (/\.ets$/.test(item)) {
            abilityPagesFullPath.push(path.resolve(item).toLowerCase());
          }
          const relativePath = path.relative(testRunnerPath, item).replace(/\.(ts|js|ets)$/, '');
          if (isStageBased) {
            projectConfig.entryObj[`./${dir}/${relativePath}`] = item;
          } else {
            projectConfig.entryObj[`../${dir}/${relativePath}`] = item;
          }
          abilityConfig.testRunnerFile.push(item);
        }
      });
    }
  });
}

function setFaTestRunnerFile(projectConfig) {
  setTestRunnerFile(projectConfig, false);
}

function setStageTestRunnerFile(projectConfig) {
  setTestRunnerFile(projectConfig, true);
}

function setBundleModuleInfo(projectConfig, moduleJson) {
  if (moduleJson.module) {
    projectConfig.moduleName = moduleJson.module.name;
  }
  if (moduleJson.app) {
    projectConfig.bundleName = moduleJson.app.bundleName;
  }
}

function setAbilityFile(projectConfig, abilityPages) {
  abilityPages.forEach(abilityPath => {
    const projectAbilityPath = path.resolve(projectConfig.projectPath, '../', abilityPath);
    if (path.isAbsolute(abilityPath)) {
      abilityPath = '.' + abilityPath.slice(projectConfig.projectPath.length);
    }
    const entryPageKey = abilityPath.replace(/^\.\/ets\//, './').replace(/\.ts$/, '').replace(/\.ets$/, '');
    if (fs.existsSync(projectAbilityPath)) {
      abilityConfig.projectAbilityPath.push(projectAbilityPath);
      projectConfig.entryObj[entryPageKey] = projectAbilityPath + '?entry';
    } else {
      throw Error(
        `\u001b[31m ERROR: srcEntry file '${projectAbilityPath.replace(/\\/g, '/')}' does not exist. \u001b[39m`
      ).message;
    }
  });
}

function readAbilityEntrance(moduleJson) {
  const abilityPages = [];
  if (moduleJson.module) {
    const moduleSrcEntrance = moduleJson.module.srcEntrance;
    const moduleSrcEntry = moduleJson.module.srcEntry;
    if (moduleSrcEntry) {
      abilityPages.push(moduleSrcEntry);
      abilityPagesFullPath.push(getAbilityFullPath(projectConfig.projectPath, moduleSrcEntry));
    } else if (moduleSrcEntrance) {
      abilityPages.push(moduleSrcEntrance);
      abilityPagesFullPath.push(getAbilityFullPath(projectConfig.projectPath, moduleSrcEntrance));
    }
    if (moduleJson.module.abilities && moduleJson.module.abilities.length > 0) {
      setEntrance(moduleJson.module.abilities, abilityPages);
    }
    if (moduleJson.module.extensionAbilities && moduleJson.module.extensionAbilities.length > 0) {
      setEntrance(moduleJson.module.extensionAbilities, abilityPages);
      setCardPages(moduleJson.module.extensionAbilities);
    }
  }
  return abilityPages;
}

function setEntrance(abilityConfig, abilityPages) {
  if (abilityConfig && abilityConfig.length > 0) {
    abilityConfig.forEach(ability => {
      if (ability.srcEntry) {
        abilityPages.push(ability.srcEntry)
        abilityPagesFullPath.push(getAbilityFullPath(projectConfig.projectPath, ability.srcEntry))
      } else if (ability.srcEntrance) {
        abilityPages.push(ability.srcEntrance);
        abilityPagesFullPath.push(getAbilityFullPath(projectConfig.projectPath, ability.srcEntrance));
      }
    });
  }
}

function setCardPages(extensionAbilities) {
  if (extensionAbilities && extensionAbilities.length > 0) {
    extensionAbilities.forEach(extensionAbility => {
      if (extensionAbility.metadata) {
        extensionAbility.metadata.forEach(metadata => {
          if (metadata.resource) {
            readCardResource(metadata.resource);
          }
        });
      }
    });
  }
}

function readCardResource(resource) {
  const cardJsonFileName = `${resource.replace(/\$profile\:/, '')}.json`;
  const modulePagePath = path.resolve(projectConfig.aceProfilePath, cardJsonFileName);
  if (fs.existsSync(modulePagePath)) {
    const cardConfig = JSON.parse(fs.readFileSync(modulePagePath, 'utf-8'));
    if (cardConfig.forms) {
      cardConfig.forms.forEach(form => {
        readCardForm(form);
      });
    }
  }
}

function readCardForm(form) {
  if ((form.type && form.type === 'eTS') ||
    (form.uiSyntax && form.uiSyntax === 'arkts')) {
    const sourcePath = form.src.replace(/\.ets$/, '');
    const cardPath = path.resolve(projectConfig.projectPath, '..', sourcePath + '.ets');
    if (cardPath && fs.existsSync(cardPath)) {
      projectConfig.entryObj['../' + sourcePath] = cardPath + '?entry';
      projectConfig.cardEntryObj['../' + sourcePath] = cardPath;
      projectConfig.cardObj[cardPath] = sourcePath.replace(/^\.\//, '');
    }
  }
}

function getAbilityFullPath(projectPath, abilityPath) {
  const finalPath = path.resolve(path.resolve(projectPath, '../'), abilityPath);
  if (fs.existsSync(finalPath)) {
    return finalPath.toLowerCase();
  } else {
    return path.resolve(abilityPath).toLowerCase();
  }
}

function loadWorker(projectConfig, workerFileEntry) {
  if (workerFileEntry) {
    projectConfig.entryObj = Object.assign(projectConfig.entryObj, workerFileEntry);
  } else {
    const workerPath = path.resolve(projectConfig.projectPath, WORKERS_DIR);
    if (fs.existsSync(workerPath)) {
      const workerFiles = [];
      readFile(workerPath, workerFiles);
      workerFiles.forEach((item) => {
        if (/\.(ts|js|ets)$/.test(item)) {
          const relativePath = path.relative(workerPath, item)
            .replace(/\.(ts|js|ets)$/, '').replace(/\\/g, '/');
          projectConfig.entryObj[`./${WORKERS_DIR}/` + relativePath] = item;
          abilityPagesFullPath.push(path.resolve(item).toLowerCase());
        }
      });
    }
  }
}

let aceBuildJson = {};
function loadBuildJson() {
  if (projectConfig.aceBuildJson && fs.existsSync(projectConfig.aceBuildJson)) {
    aceBuildJson = JSON.parse(fs.readFileSync(projectConfig.aceBuildJson).toString());
  }
  if (aceBuildJson.packageManagerType === 'ohpm') {
    projectConfig.packageManagerType = 'ohpm';
    projectConfig.packageDir = 'oh_modules';
    projectConfig.packageJson = 'oh-package.json5';
  }
}

function initBuildInfo() {
  projectConfig.projectRootPath = aceBuildJson.projectRootPath;
  if (projectConfig.compileHar && aceBuildJson.moduleName &&
    aceBuildJson.modulePathMap[aceBuildJson.moduleName]) {
    projectConfig.moduleRootPath = aceBuildJson.modulePathMap[aceBuildJson.moduleName];
  }
}

function readWorkerFile() {
  const workerFileEntry = {};
  if (aceBuildJson.workers) {
    aceBuildJson.workers.forEach(worker => {
      if (!/\.(ts|js|ets)$/.test(worker)) {
        throw Error(
          '\u001b[31mArkTS:ERROR: File: ' + worker + '.' + '\n' +
          "  The worker file can only be an '.ets', '.ts', or '.js' file.\u001b[39m"
        ).message;
      }
      const relativePath = path.relative(projectConfig.projectPath, worker);
      if (filterWorker(relativePath)) {
        const workerKey = relativePath.replace(/\.(ts|js)$/, '').replace(/\\/g, '/');
        if (workerFileEntry[workerKey]) {
          throw Error(
            '\u001b[31m ERROR: The worker file cannot use the same file name: \n' +
            workerFileEntry[workerKey] + '\n' + worker + '\u001b[39m'
          ).message;
        } else {
          workerFileEntry[workerKey] = worker;
          abilityPagesFullPath.push(path.resolve(workerFileEntry[workerKey]).toLowerCase());
        }
      }
    });
    return workerFileEntry;
  }
  return null;
}

function readPatchConfig() {
  if (aceBuildJson.patchConfig) {
    projectConfig.hotReload = process.env.watchMode === 'true' && !projectConfig.isPreview;
    projectConfig.patchAbcPath = aceBuildJson.patchConfig.patchAbcPath;
    projectConfig.changedFileList = aceBuildJson.patchConfig.changedFileList ?
      aceBuildJson.patchConfig.changedFileList : path.join(projectConfig.cachePath, 'changedFileList.json');
    if (projectConfig.hotReload) {
      writeFileSync(projectConfig.changedFileList, JSON.stringify({
        modifiedFiles: [],
        removedFiles: []
      }));
    }
  }
}

function filterWorker(workerPath) {
  return /\.(ts|js|ets)$/.test(workerPath);
}

;(function initSystemResource() {
  const sysResourcePath = path.resolve(__dirname, './sysResource.js');
  if (fs.existsSync(sysResourcePath)) {
    resources.sys = require(sysResourcePath).sys;
  }
})();

;(function readSystemModules() {
  const systemModulesPath = path.resolve(__dirname, '../../api');
  if (fs.existsSync(systemModulesPath)) {
    globalModulePaths.push(systemModulesPath);
    const modulePaths = [];
    readFile(systemModulesPath, modulePaths);
    systemModules.push(...fs.readdirSync(systemModulesPath));
    ohosSystemModulePaths.push(...modulePaths);
    defaultSdkConfigs = [
      {
        'apiPath': systemModulesPath,
        'prefix': '@ohos'
      }, {
        'apiPath': systemModulesPath,
        'prefix': '@system'
      }
    ];
  }
  const externalApiPathStr = process.env.externalApiPaths || '';
  const externalApiPaths = externalApiPathStr.split(path.delimiter);
  externalApiPaths.forEach(sdkPath => {
    const sdkConfigPath = path.resolve(sdkPath, 'sdkConfig.json');
    if (fs.existsSync(sdkConfigPath)) {
      const sdkConfig = JSON.parse(fs.readFileSync(sdkConfigPath, "utf-8"));
      sdkConfig.apiPath = path.resolve(sdkPath, sdkConfig.apiPath);
      if (fs.existsSync(sdkConfig.apiPath)) {
        globalModulePaths.push(sdkConfig.apiPath);
        systemModules.push(...fs.readdirSync(sdkConfig.apiPath));
        sdkConfigPrefix += `|${sdkConfig.prefix.replace(/^@/, '')}`;
        extendSdkConfigs.push(sdkConfig);
      }
    }
  });
  sdkConfigs = [...defaultSdkConfigs, ...extendSdkConfigs];
})()

function readAppResource(filePath) {
  if (fs.existsSync(filePath)) {
    const appResource = fs.readFileSync(filePath, 'utf-8');
    const resourceArr = appResource.split(/\n/);
    const resourceMap = new Map();
    processResourceArr(resourceArr, resourceMap, filePath);
    for (let [key, value] of resourceMap) {
      resources.app[key] = value;
    }
  }
  if (process.env.rawFileResource && process.env.compileMode === 'moduleJson') {
    resourcesRawfile(process.env.rawFileResource, storedFileInfo.resourcesArr);
  }
}

function processResourceArr(resourceArr, resourceMap, filePath) {
  for (let i = 0; i < resourceArr.length; i++) {
    if (!resourceArr[i].length) {
      continue;
    }
    const resourceData = resourceArr[i].split(/\s/);
    if (resourceData.length === 3 && !isNaN(Number(resourceData[2]))) {
      if (resourceMap.get(resourceData[0])) {
        const resourceKeys = resourceMap.get(resourceData[0]);
        if (!resourceKeys[resourceData[1]] || resourceKeys[resourceData[1]] !== Number(resourceData[2])) {
          resourceKeys[resourceData[1]] = Number(resourceData[2]);
        }
      } else {
        let obj = {};
        obj[resourceData[1]] = Number(resourceData[2]);
        resourceMap.set(resourceData[0], obj);
      }
      if (process.env.compileTool === 'rollup' && process.env.compileMode === 'moduleJson') {
        storedFileInfo.updateResourceList(resourceData[0] + '_' + resourceData[1]);
      }
    } else {
      logger.warn(`\u001b[31m ArkTS:WARN The format of file '${filePath}' is incorrect. \u001b[39m`);
      break;
    }
  }
}

function hashProjectPath(projectPath) {
  const hash = crypto.createHash('sha256');
  hash.update(projectPath.toString());
  process.env.hashProjectPath = "_" + hash.digest('hex');
  return process.env.hashProjectPath;
}

function loadModuleInfo(projectConfig, envArgs) {
  if (projectConfig.aceBuildJson && fs.existsSync(projectConfig.aceBuildJson)) {
    const buildJsonInfo = JSON.parse(fs.readFileSync(projectConfig.aceBuildJson).toString());
    if (buildJsonInfo.compileMode) {
      projectConfig.compileMode = buildJsonInfo.compileMode;
    }
    projectConfig.projectRootPath = buildJsonInfo.projectRootPath;
    projectConfig.modulePathMap = buildJsonInfo.modulePathMap;
    projectConfig.isOhosTest = buildJsonInfo.isOhosTest;
    let faultHandler = function (error) {
      // rollup's error will be handled in fast build
      if (process.env.compileTool === 'rollup') {
        return;
      }
      logger.error(error);
      process.exit(FAIL);
    }
    projectConfig.es2abcCompileTsInAotMode = true;
    projectConfig.es2abcCompileTsInNonAotMode = false;
    const compileMode = process.env.compileTool === 'rollup' ? projectConfig.compileMode : buildJsonInfo.compileMode;
    if (checkAotConfig(compileMode, buildJsonInfo, faultHandler)) {
      projectConfig.processTs = true;
      projectConfig.pandaMode = TS2ABC;
      projectConfig.anBuildOutPut = buildJsonInfo.anBuildOutPut;
      projectConfig.anBuildMode = buildJsonInfo.anBuildMode;
      projectConfig.apPath = buildJsonInfo.apPath;
      if (projectConfig.es2abcCompileTsInAotMode) {
        projectConfig.pandaMode = ES2ABC;
      }
    } else {
      projectConfig.processTs = false;
      projectConfig.pandaMode = buildJsonInfo.pandaMode;
      if (projectConfig.es2abcCompileTsInNonAotMode) {
        projectConfig.pandaMode = ES2ABC;
        projectConfig.processTs = true;
      }
    }
    if (envArgs !== undefined) {
      projectConfig.buildArkMode = envArgs.buildMode;
    }
    if (compileMode === 'esmodule') {
      projectConfig.nodeModulesPath = buildJsonInfo.nodeModulesPath;
      projectConfig.harNameOhmMap = buildJsonInfo.harNameOhmMap;
    }
    if (projectConfig.compileHar && buildJsonInfo.moduleName &&
      buildJsonInfo.modulePathMap[buildJsonInfo.moduleName]) {
      projectConfig.moduleRootPath = buildJsonInfo.modulePathMap[buildJsonInfo.moduleName];
    }
  }
}

function checkAppResourcePath(appResourcePath, config) {
  if (appResourcePath) {
    readAppResource(appResourcePath);
    if (fs.existsSync(appResourcePath) && config.cache) {
      config.cache.buildDependencies.config.push(appResourcePath);
    }
    if (!projectConfig.xtsMode) {
      const appResourcePathSavePath = path.resolve(projectConfig.cachePath, 'resource_path.txt');
      saveAppResourcePath(appResourcePath, appResourcePathSavePath);
      if (fs.existsSync(appResourcePathSavePath) && config.cache) {
        config.cache.buildDependencies.config.push(appResourcePathSavePath);
      }
    }
  }
}

function saveAppResourcePath(appResourcePath, appResourcePathSavePath) {
  let isSave = false;
  if (fs.existsSync(appResourcePathSavePath)) {
    const saveContent = fs.readFileSync(appResourcePathSavePath);
    if (appResourcePath !== saveContent) {
      isSave = true;
    }
  } else {
    isSave = true;
  }
  if (isSave) {
    fs.writeFileSync(appResourcePathSavePath, appResourcePath);
  }
}

function addSDKBuildDependencies(config) {
  if (projectConfig.localPropertiesPath &&
    fs.existsSync(projectConfig.localPropertiesPath) && config.cache) {
    config.cache.buildDependencies.config.push(projectConfig.localPropertiesPath)
  }
  if (projectConfig.projectProfilePath &&
    fs.existsSync(projectConfig.projectProfilePath) && config.cache) {
    config.cache.buildDependencies.config.push(projectConfig.projectProfilePath)
  }
}

function getCleanConfig(workerFile) {
  const cleanPath = [];
  if (projectConfig.compileMode === 'esmodule') {
    return cleanPath;
  }
  cleanPath.push(projectConfig.buildPath);
  if (workerFile) {
    const workerFilesPath = Object.keys(workerFile);
    for (const workerFilePath of workerFilesPath) {
      cleanPath.push(path.join(projectConfig.buildPath, workerFilePath, '..'));
    }
  }
  return cleanPath;
}

function isPartialUpdate(metadata) {
  if (Array.isArray(metadata) && metadata.length) {
    metadata.some(item => {
      if (item.name && item.name === 'ArkTSPartialUpdate' &&
        item.value && item.value === 'false') {
        partialUpdateConfig.partialUpdateMode = false;
        if (projectConfig.aceModuleJsonPath) {
          logger.warn('\u001b[33m ArkTS:WARN File: ' + projectConfig.aceModuleJsonPath + '.' + '\n' +
          " The 'ArkTSPartialUpdate' field will no longer be supported in the future. \u001b[39m");
        }
      }
      if (item.name && item.name === 'ArkTSBuilderCheck' &&
        item.value && item.value === 'false') {
        partialUpdateConfig.builderCheck = false;
      }
      if (item.name && item.name === 'ArkTSCheck' &&
        item.value && item.value === 'SkipArkTSCheck') {
        partialUpdateConfig.executeArkTSLinter = false;
      }
      if (item.name && item.name === 'ArkTSCheckMode' &&
        item.value && item.value === 'DoArkTSCheckInCompatibleMode') {
        partialUpdateConfig.standardArkTSLinter = false;
      }
      return !partialUpdateConfig.partialUpdateMode && !partialUpdateConfig.builderCheck &&
        !partialUpdateConfig.executeArkTSLinter && !partialUpdateConfig.standardArkTSLinter;
    });
  }
}

function applicationConfig() {
  const localProperties = path.resolve(aceBuildJson.projectRootPath, 'local.properties');
  if (fs.existsSync(localProperties)) {
    try {
      const localPropertiesFile = fs.readFileSync(localProperties, {encoding: 'utf-8'}).split(/\r?\n/);
      localPropertiesFile.some((item) => {
        const builderCheckValue = item.replace(/\s+|;/g, '');
        if (builderCheckValue === 'ArkTSConfig.ArkTSBuilderCheck=false') {
          partialUpdateConfig.builderCheck = false;
          return true;
        }
      });
    } catch (err) {
    }
  }
}

function partialUpdateController(minAPIVersion, metadata = null) {
  projectConfig.minAPIVersion = minAPIVersion;
  if (minAPIVersion >= 9) {
    partialUpdateConfig.partialUpdateMode = true;
  }
  if (minAPIVersion < 10) {
    partialUpdateConfig.optimizeComponent = false;
  }
  if (metadata) {
    isPartialUpdate(metadata);
  }
  if (aceBuildJson.projectRootPath) {
    applicationConfig();
  }
}

const globalProgram = {
  program: null,
  watchProgram: null,
  checker: null,
};

const partialUpdateConfig = {
  partialUpdateMode: false,
  builderCheck: true,
  executeArkTSLinter: true,
  standardArkTSLinter: true,
  optimizeComponent: true,
};

exports.globalProgram = globalProgram;
exports.projectConfig = projectConfig;
exports.loadEntryObj = loadEntryObj;
exports.readAppResource = readAppResource;
exports.resources = resources;
exports.loadWorker = loadWorker;
exports.abilityConfig = abilityConfig;
exports.readWorkerFile = readWorkerFile;
exports.abilityPagesFullPath = abilityPagesFullPath;
exports.loadModuleInfo = loadModuleInfo;
exports.systemModules = systemModules;
exports.checkAppResourcePath = checkAppResourcePath;
exports.addSDKBuildDependencies = addSDKBuildDependencies;
exports.partialUpdateConfig = partialUpdateConfig;
exports.readPatchConfig = readPatchConfig;
exports.initBuildInfo = initBuildInfo;
exports.getCleanConfig = getCleanConfig;
exports.globalModulePaths = globalModulePaths;
exports.defaultSdkConfigs = defaultSdkConfigs;
exports.extendSdkConfigs = extendSdkConfigs;
exports.sdkConfigs = sdkConfigs;
exports.sdkConfigPrefix = sdkConfigPrefix;
exports.ohosSystemModulePaths = ohosSystemModulePaths;
