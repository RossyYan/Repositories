"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.changeFileExtension=changeFileExtension,exports.genCachePath=genCachePath,exports.genTemporaryModuleCacheDirectoryForBundle=genTemporaryModuleCacheDirectoryForBundle,exports.getEs2abcFileThreadNumber=getEs2abcFileThreadNumber,exports.isAotMode=isAotMode,exports.isCommonJsPluginVirtualFile=isCommonJsPluginVirtualFile,exports.isCurrentProjectFiles=isCurrentProjectFiles,exports.isDebug=isDebug,exports.isJsSourceFile=isJsSourceFile,exports.isJsonSourceFile=isJsonSourceFile,exports.isMasterOrPrimary=isMasterOrPrimary,exports.isSpecifiedExt=isSpecifiedExt,exports.isTsOrEtsSourceFile=isTsOrEtsSourceFile,exports.needAotCompiler=needAotCompiler,exports.shouldETSOrTSFileTransformToJS=shouldETSOrTSFileTransformToJS,exports.updateSourceMap=updateSourceMap,exports.writeFileContentToTempDir=writeFileContentToTempDir;var _cluster=_interopRequireDefault(require("cluster")),_fs=_interopRequireDefault(require("fs")),_path=_interopRequireDefault(require("path")),_os=_interopRequireDefault(require("os")),_sourceMap=_interopRequireDefault(require("source-map")),_ark_define=require("./common/ark_define"),_utils=require("../../utils"),_ark_utils=require("../../ark_utils"),_pre_define=require("../../pre_define"),_transform=require("./transform"),_process_ui_syntax=require("../../process_ui_syntax");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _newArrowCheck(e,r){if(e!==r)throw new TypeError("Cannot instantiate an arrow function")}function needAotCompiler(e){return e.compileMode===_ark_define.ESMODULE&&(e.anBuildMode===_pre_define.AOT_FULL||e.anBuildMode===_pre_define.AOT_PARTIAL)}function isAotMode(e){return e.compileMode===_ark_define.ESMODULE&&(e.anBuildMode===_pre_define.AOT_FULL||e.anBuildMode===_pre_define.AOT_PARTIAL||e.anBuildMode===_pre_define.AOT_TYPE)}function isDebug(e){return e.buildMode.toLowerCase()===_ark_define.DEBUG}function isMasterOrPrimary(){return(0,_utils.nodeLargeOrEqualTargetVersion)(16)&&_cluster.default.isPrimary||!(0,_utils.nodeLargeOrEqualTargetVersion)(16)&&_cluster.default.isMaster}function changeFileExtension(e,r,i=""){i=0===i.length?_path.default.extname(e):i;return e.substring(0,e.lastIndexOf(i))+r}function removeCacheFile(e,r){e=(0,_utils.toUnixPath)(changeFileExtension(e,r));_fs.default.existsSync(e)&&_fs.default.rmSync(e)}function shouldETSOrTSFileTransformToJS(e,r){var i=(0,_utils.toUnixPath)(e).replace((0,_utils.toUnixPath)(r.projectRootPath),""),i=_path.default.join(r.cachePath,i);return r.processTs?-1!==_process_ui_syntax.compilingEtsOrTsFiles.indexOf(e)?(removeCacheFile(i,(r=-1!==_process_ui_syntax.hasTsNoCheckOrTsIgnoreFiles.indexOf(e))?_ark_define.EXTNAME_TS:_ark_define.EXTNAME_JS),r):(i=(0,_utils.toUnixPath)(changeFileExtension(i,_ark_define.EXTNAME_JS)),_fs.default.existsSync(i)):(removeCacheFile(i,_ark_define.EXTNAME_TS),!0)}async function writeFileContentToTempDir(r,i,t,n){if(!isCommonJsPluginVirtualFile(r)&&isCurrentProjectFiles(r,t)){let e;switch(e=t.compileHar?(0,_utils.genTemporaryPath)(r,t.compileShared?t.projectRootPath:t.moduleRootPath,t.compileShared?_path.default.resolve(t.aceModuleBuild,"../etsFortgz"):t.cachePath,t,t.compileShared):(0,_utils.genTemporaryPath)(r,t.projectPath,t.cachePath,t),_path.default.extname(r)){case _ark_define.EXTNAME_ETS:case _ark_define.EXTNAME_TS:case _ark_define.EXTNAME_JS:case _ark_define.EXTNAME_MJS:case _ark_define.EXTNAME_CJS:await writeFileContent(r,e,i,t,n);break;case _ark_define.EXTNAME_JSON:(0,_utils.mkdirsSync)(_path.default.dirname(e)),_fs.default.writeFileSync(e,i,"utf-8")}}}async function writeFileContent(e,r,i,t,n){isSpecifiedExt(e,_ark_define.EXTNAME_JS)||(r=changeFileExtension(r,_ark_define.EXTNAME_JS)),(0,_utils.mkdirsSync)(_path.default.dirname(r)),t.compileHar||!isDebug(t)?(e=(0,_utils.toUnixPath)(e).replace((0,_utils.toUnixPath)(t.projectRootPath)+"/",""),await(0,_ark_utils.writeObfuscatedSourceCode)(i,r,n,t,e,_transform.newSourceMaps)):_fs.default.writeFileSync(r,i,"utf-8")}function getEs2abcFileThreadNumber(){return _os.default.cpus().length<16?_os.default.cpus().length:16}function isCommonJsPluginVirtualFile(e){return e.includes("\0")}function isCurrentProjectFiles(e,r){return 0<=e.indexOf(r.projectRootPath)}function genTemporaryModuleCacheDirectoryForBundle(e){var r=e.aceModuleBuild.split(_path.default.sep),r=r[r.length-1],e=_path.default.join(e.cachePath,_ark_define.TEMPORARY,r);return(0,_utils.mkdirsSync)(e),e}function isSpecifiedExt(e,r){return _path.default.extname(e)===r}function genCachePath(e,r,i){r=void 0!==r.cachePath?_path.default.join(r.cachePath,_ark_define.TEMPORARY,e):_path.default.join(r.aceModuleBuild,e);return(0,_utils.mkdirsSync)(_path.default.dirname(r)),(0,_utils.validateFilePathLength)(r,i),r}function isTsOrEtsSourceFile(e){return/(?<!\.d)\.[e]?ts$/.test(e)}function isJsSourceFile(e){return/\.[cm]?js$/.test(e)}function isJsonSourceFile(e){return/\.json$/.test(e)}async function updateSourceMap(e,r){var i=this;if(!e)return r;if(!r)return e;const t=await new _sourceMap.default.SourceMapConsumer(e);r=await new _sourceMap.default.SourceMapConsumer(r);const n=[];r.eachMapping(function(e){var r;_newArrowCheck(this,i),null!=e.originalLine&&null!=(r=t.originalPositionFor({line:e.originalLine,column:e.originalColumn})).source&&(e.originalLine=r.line,e.originalColumn=r.column,n.push(e))}.bind(this));r=_sourceMap.default.SourceMapGenerator.fromSourceMap(r);return r._file=e.file,r._mappings._array=n,JSON.parse(r.toString())}