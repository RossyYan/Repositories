"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=processImport,exports.processImportModule=processImportModule;var _typescript=_interopRequireDefault(require("typescript")),_fs=_interopRequireDefault(require("fs")),_path=_interopRequireDefault(require("path")),_json=_interopRequireDefault(require("json5")),_pre_define=require("./pre_define"),_validate_ui_syntax=require("./validate_ui_syntax"),_utils=require("./utils"),_main=require("../main"),_component_map=require("./component_map"),_ets_checker=require("./ets_checker");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _newArrowCheck(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}const IMPORT_FILE_ASTCACHE="true"===process.env.watchMode?new Map:_ets_checker.SOURCE_FILES;function processImport(e,t,a,i=new Map,n=!0,o=new Set){var s=this;let r,l;_typescript.default.isImportDeclaration(e)||_typescript.default.isExportDeclaration(e)?(r=e.moduleSpecifier.getText().replace(/'|"/g,""),_typescript.default.isImportDeclaration(e)&&e.importClause&&e.importClause.name&&_typescript.default.isIdentifier(e.importClause.name)&&(l=e.importClause.name.escapedText.toString(),n)&&i.set(l,l),_typescript.default.isImportDeclaration(e)&&e.importClause&&e.importClause.namedBindings&&_typescript.default.isNamedImports(e.importClause.namedBindings)&&e.importClause.namedBindings.elements&&n&&e.importClause.namedBindings.elements.forEach(function(e){_newArrowCheck(this,s),e.name&&_typescript.default.isIdentifier(e.name)&&(validateModuleName(e.name,a),e.propertyName&&_typescript.default.isIdentifier(e.propertyName)&&i?i.set(e.propertyName.escapedText.toString(),e.name.escapedText.toString()):i.set(e.name.escapedText.toString(),e.name.escapedText.toString()))}.bind(this))):e.moduleReference&&_typescript.default.isExternalModuleReference(e.moduleReference)&&e.moduleReference.expression&&_typescript.default.isStringLiteral(e.moduleReference.expression)&&(r=e.moduleReference.expression.text,l=e.name.escapedText.toString(),n)&&i.set(l,l);try{var _=getFileFullPath(r,t);if(_fs.default.existsSync(_)&&_fs.default.statSync(_).isFile()&&!o.has(_)){let e;o.add(_),IMPORT_FILE_ASTCACHE.has(_)?e=IMPORT_FILE_ASTCACHE.get(_):(e=generateSourceFileAST(_,r),IMPORT_FILE_ASTCACHE[_]=e),visitAllNode(e,e,l,i,_path.default.dirname(_),a,new Set,new Set,new Set,new Map,o,_,/\.d\.ets$/.test(_))}}catch(e){}}function generateSourceFileAST(e,t){var a=_fs.default.readFileSync(e,{encoding:"utf-8"}),a=_path.default.extname(e)===_pre_define.EXTNAME_ETS?(0,_validate_ui_syntax.preprocessNewExtend)((0,_validate_ui_syntax.preprocessExtend)((0,_validate_ui_syntax.processSystemApi)(a))):a;return _typescript.default.createSourceFile(e,a,_typescript.default.ScriptTarget.Latest,!0,_typescript.default.ScriptKind.ETS)}function visitAllNode(e,i,t,n,a,o,s,r,l,_,d,p,c){var u,f=this;(0,_validate_ui_syntax.isObservedClass)(e)&&(collectSpecialFunctionNode(e,n,t,l,_,_validate_ui_syntax.observedClassCollection),_validate_ui_syntax.observedClassCollection.add(e.name.getText())),(0,_validate_ui_syntax.isCustomDialogClass)(e)&&(collectSpecialFunctionNode(e,n,t,l,_,_validate_ui_syntax.componentCollection.customDialogs),_validate_ui_syntax.componentCollection.customDialogs.add(e.name.getText())),_typescript.default.isEnumDeclaration(e)&&e.name&&_validate_ui_syntax.enumCollection.add(e.name.getText());const m={hasRecycle:!1};if(_typescript.default.isStructDeclaration(e)&&_typescript.default.isIdentifier(e.name)&&isCustomComponent(e,m)&&(addDependencies(e,t,n,c,m),isExportEntry(e,o,s,r,l,p,i),_.has(e.name.getText())&&(_validate_ui_syntax.componentCollection.customComponents.add(_.get(e.name.getText())),c&&_utils.storedFileInfo.getCurrentArkTsFile().compFromDETS.add(_.get(e.name.getText())),m.hasRecycle)&&_utils.storedFileInfo.getCurrentArkTsFile().recycleComponents.add(_.get(e.name.getText())),e.modifiers&&2<=e.modifiers.length&&e.modifiers[0]&&e.modifiers[0].kind===_typescript.default.SyntaxKind.ExportKeyword&&e.modifiers[1]&&e.modifiers[1].kind===_typescript.default.SyntaxKind.DefaultKeyword&&(!t&&hasCollection(e.name)?addDefaultExport(e,c,m):t&&n.has(t)&&(_validate_ui_syntax.componentCollection.customComponents.add(n.get(t)),c&&_utils.storedFileInfo.getCurrentArkTsFile().compFromDETS.add(n.get(t)),m.hasRecycle)&&_utils.storedFileInfo.getCurrentArkTsFile().recycleComponents.add(n.get(t))),l.has(e.name.getText()))&&(_validate_ui_syntax.componentCollection.customComponents.add(_pre_define.CUSTOM_COMPONENT_DEFAULT),c&&_utils.storedFileInfo.getCurrentArkTsFile().compFromDETS.add(_pre_define.CUSTOM_COMPONENT_DEFAULT),m.hasRecycle)&&_utils.storedFileInfo.getCurrentArkTsFile().recycleComponents.add(_pre_define.CUSTOM_COMPONENT_DEFAULT),_typescript.default.isFunctionDeclaration(e)&&(0,_utils.hasDecorator)(e,_pre_define.COMPONENT_BUILDER_DECORATOR)&&(collectSpecialFunctionNode(e,n,t,l,_,_component_map.CUSTOM_BUILDER_METHOD),collectSpecialFunctionNode(e,n,t,l,_,_component_map.GLOBAL_CUSTOM_BUILDER_METHOD)),_typescript.default.isExportAssignment(e)&&e.expression&&_typescript.default.isIdentifier(e.expression)&&hasCollection(e.expression)&&(t&&(u=e.expression.escapedText.toString(),setDependencies(t,_validate_ui_syntax.linkCollection.get(u),_validate_ui_syntax.propertyCollection.get(u),_validate_ui_syntax.propCollection.get(u),_validate_ui_syntax.builderParamObjectCollection.get(u),_validate_ui_syntax.stateCollection.get(u),_validate_ui_syntax.regularCollection.get(u),_validate_ui_syntax.storagePropCollection.get(u),_validate_ui_syntax.storageLinkCollection.get(u),_validate_ui_syntax.provideCollection.get(u),_validate_ui_syntax.consumeCollection.get(u),_validate_ui_syntax.objectLinkCollection.get(u),_validate_ui_syntax.localStorageLinkCollection.get(u),_validate_ui_syntax.localStoragePropCollection.get(u),_validate_ui_syntax.builderParamInitialization.get(u),_validate_ui_syntax.propInitialization.get(u),c,m)),addDefaultExport(e,c,m)),_typescript.default.isExportAssignment(e)&&e.expression&&_typescript.default.isIdentifier(e.expression)&&(t&&n.set(e.expression.getText(),n.get(t)),l.add(e.expression.getText())),_typescript.default.isExportDeclaration(e)&&e.exportClause&&_typescript.default.isNamedExports(e.exportClause)&&e.exportClause.elements&&e.exportClause.elements.forEach(function(t){if(_newArrowCheck(this,f),"true"===process.env.watchMode&&r.add((t.propertyName||t.name).escapedText.toString()),t.name&&_typescript.default.isIdentifier(t.name))if(t.propertyName){if(t.propertyName&&_typescript.default.isIdentifier(t.propertyName)){if(validateModuleName(t.name,o,i,p),hasCollection(t.propertyName)){let e=t.name.escapedText.toString();var a=t.propertyName.escapedText.toString();setDependencies(e=n.has(e)?n.get(e):e,_validate_ui_syntax.linkCollection.get(a),_validate_ui_syntax.propertyCollection.get(a),_validate_ui_syntax.propCollection.get(a),_validate_ui_syntax.builderParamObjectCollection.get(a),_validate_ui_syntax.stateCollection.get(a),_validate_ui_syntax.regularCollection.get(a),_validate_ui_syntax.storagePropCollection.get(a),_validate_ui_syntax.storageLinkCollection.get(a),_validate_ui_syntax.provideCollection.get(a),_validate_ui_syntax.consumeCollection.get(a),_validate_ui_syntax.objectLinkCollection.get(a),_validate_ui_syntax.localStorageLinkCollection.get(a),_validate_ui_syntax.localStoragePropCollection.get(a),_validate_ui_syntax.builderParamInitialization.get(a),_validate_ui_syntax.propInitialization.get(a),c,m)}_.set(t.propertyName.escapedText.toString(),t.name.escapedText.toString())}}else _.set(t.name.escapedText.toString(),t.name.escapedText.toString());t.name&&_typescript.default.isIdentifier(t.name)&&n.has(t.name.escapedText.toString())&&t.propertyName&&_typescript.default.isIdentifier(t.propertyName)&&n.set(t.propertyName.escapedText.toString(),n.get(t.name.escapedText.toString()))}.bind(this)),_typescript.default.isExportDeclaration(e)&&e.moduleSpecifier&&_typescript.default.isStringLiteral(e.moduleSpecifier)&&("true"===process.env.watchMode&&e.exportClause&&_typescript.default.isNamedExports(e.exportClause)&&e.exportClause.elements&&e.exportClause.elements.forEach(function(e){_newArrowCheck(this,f),r.add((e.propertyName||e.name).escapedText.toString()),e.propertyName&&_typescript.default.isIdentifier(e.propertyName)&&e.name&&_typescript.default.isIdentifier(e.name)&&n.has(e.name.escapedText.toString())&&(n.set(e.propertyName.escapedText.toString(),n.get(e.name.escapedText.toString())),l.add(e.name.escapedText.toString()))}.bind(this)),processImport(e,a,o,n,!0,new Set(d))),_typescript.default.isImportDeclaration(e))if(e.importClause&&e.importClause.name&&_typescript.default.isIdentifier(e.importClause.name)&&n.has(e.importClause.name.getText()))processImport(e,a,o,n,!1,new Set(d));else if(e.importClause&&e.importClause.namedBindings&&_typescript.default.isNamedImports(e.importClause.namedBindings)&&e.importClause.namedBindings.elements){let t=!1;e.importClause.namedBindings.elements.forEach(function(e){_newArrowCheck(this,f),e.name&&_typescript.default.isIdentifier(e.name)&&n.has(e.name.escapedText.toString())&&(t=!0,e.propertyName)&&_typescript.default.isIdentifier(e.propertyName)&&n.set(e.propertyName.escapedText.toString(),n.get(e.name.escapedText.toString()))}.bind(this)),t&&processImport(e,a,o,n,!1,new Set(d))}e.getChildren().reverse().forEach(function(e){return _newArrowCheck(this,f),visitAllNode(e,i,t,n,a,o,s,r,l,_,d,p,c)}.bind(this))}function collectSpecialFunctionNode(e,t,a,i,n,o){var s=e.name.getText();t.has(s)?o.add(t.get(s)):e.modifiers&&1<=e.modifiers.length&&e.modifiers[0]&&e.modifiers[0].kind===_typescript.default.SyntaxKind.ExportKeyword?1==e.modifiers.length?o.add(s):2<=e.modifiers.length&&e.modifiers[1]&&e.modifiers[1].kind===_typescript.default.SyntaxKind.DefaultKeyword&&(o.add(_pre_define.CUSTOM_COMPONENT_DEFAULT),a)&&t.has(a)&&o.add(t.get(a)):i.has(s)?o.add(_pre_define.CUSTOM_COMPONENT_DEFAULT):n.has(s)&&o.add(n.get(s))}function isExportEntry(t,e,a,i,n,o,s){if("true"===process.env.watchMode&&t&&t.decorators){if(t.modifiers)for(let e=0;e<t.modifiers.length&&t.modifiers[e].kind!==_typescript.default.SyntaxKind.ExportKeyword;e++);for(let e=0;e<t.decorators.length;e++)if(t.decorators[e].getText()===_pre_define.COMPONENT_DECORATOR_ENTRY){a.add(t.name.escapedText.toString());break}}}function remindExportEntryComponent(e,t,a,i){var i=i.getLineAndCharacterOfPosition(e.getStart()),n=i.line+1,i=i.character+1,e={type:_utils.LogType.WARN,message:"It's not a recommended way to export struct with @Entry decorator, which may cause ACE Engine error in component preview mode.",pos:e.getStart(),fileName:a,line:n,column:i};_utils.repeatLog.has(a)||(t.push(e),_utils.repeatLog.set(a,e))}function addDependencies(e,t,a,i,n){var o=e.name.getText(),s=(0,_validate_ui_syntax.getComponentSet)(e,!1);t&&e.modifiers&&2<=e.modifiers.length&&e.modifiers[0]&&e.modifiers[1]&&e.modifiers[0].kind===_typescript.default.SyntaxKind.ExportKeyword&&e.modifiers[1].kind===_typescript.default.SyntaxKind.DefaultKeyword?setDependencies(t,s.links,s.properties,s.props,s.builderParams,s.states,s.regulars,s.storageProps,s.storageLinks,s.provides,s.consumes,s.objectLinks,s.localStorageLink,s.localStorageProp,s.builderParamData,s.propData,i,n):a.has(o)?setDependencies(a.get(o),s.links,s.properties,s.props,s.builderParams,s.states,s.regulars,s.storageProps,s.storageLinks,s.provides,s.consumes,s.objectLinks,s.localStorageLink,s.localStorageProp,s.builderParamData,s.propData,i,n):setDependencies(o,s.links,s.properties,s.props,s.builderParams,s.states,s.regulars,s.storageProps,s.storageLinks,s.provides,s.consumes,s.objectLinks,s.localStorageLink,s.localStorageProp,s.builderParamData,s.propData,i,n)}function addDefaultExport(e,t,a){let i;if(_typescript.default.isStructDeclaration(e)&&e.name&&_typescript.default.isIdentifier(e.name))i=e.name.escapedText.toString();else{if(!(_typescript.default.isExportAssignment(e)&&e.expression&&_typescript.default.isIdentifier(e.expression)))return;i=e.expression.escapedText.toString()}setDependencies(_pre_define.CUSTOM_COMPONENT_DEFAULT,_validate_ui_syntax.linkCollection.has(_pre_define.CUSTOM_COMPONENT_DEFAULT)?new Set([..._validate_ui_syntax.linkCollection.get(_pre_define.CUSTOM_COMPONENT_DEFAULT),..._validate_ui_syntax.linkCollection.get(i)]):_validate_ui_syntax.linkCollection.get(i),_validate_ui_syntax.propertyCollection.has(_pre_define.CUSTOM_COMPONENT_DEFAULT)?new Set([..._validate_ui_syntax.propertyCollection.get(_pre_define.CUSTOM_COMPONENT_DEFAULT),..._validate_ui_syntax.propertyCollection.get(i)]):_validate_ui_syntax.propertyCollection.get(i),_validate_ui_syntax.propCollection.has(_pre_define.CUSTOM_COMPONENT_DEFAULT)?new Set([..._validate_ui_syntax.propCollection.get(_pre_define.CUSTOM_COMPONENT_DEFAULT),..._validate_ui_syntax.propCollection.get(i)]):_validate_ui_syntax.propCollection.get(i),_validate_ui_syntax.builderParamObjectCollection.has(_pre_define.CUSTOM_COMPONENT_DEFAULT)?new Set([..._validate_ui_syntax.builderParamObjectCollection.get(_pre_define.CUSTOM_COMPONENT_DEFAULT),..._validate_ui_syntax.builderParamObjectCollection.get(i)]):_validate_ui_syntax.builderParamObjectCollection.get(i),_validate_ui_syntax.stateCollection.has(_pre_define.CUSTOM_COMPONENT_DEFAULT)?new Set([..._validate_ui_syntax.stateCollection.get(_pre_define.CUSTOM_COMPONENT_DEFAULT),..._validate_ui_syntax.stateCollection.get(i)]):_validate_ui_syntax.stateCollection.get(i),_validate_ui_syntax.regularCollection.has(_pre_define.CUSTOM_COMPONENT_DEFAULT)?new Set([..._validate_ui_syntax.regularCollection.get(_pre_define.CUSTOM_COMPONENT_DEFAULT),..._validate_ui_syntax.regularCollection.get(i)]):_validate_ui_syntax.regularCollection.get(i),_validate_ui_syntax.storagePropCollection.has(_pre_define.CUSTOM_COMPONENT_DEFAULT)?new Set([..._validate_ui_syntax.storagePropCollection.get(_pre_define.CUSTOM_COMPONENT_DEFAULT),..._validate_ui_syntax.storagePropCollection.get(i)]):_validate_ui_syntax.storagePropCollection.get(i),_validate_ui_syntax.storageLinkCollection.has(_pre_define.CUSTOM_COMPONENT_DEFAULT)?new Set([..._validate_ui_syntax.storageLinkCollection.get(_pre_define.CUSTOM_COMPONENT_DEFAULT),..._validate_ui_syntax.storageLinkCollection.get(i)]):_validate_ui_syntax.storageLinkCollection.get(i),_validate_ui_syntax.provideCollection.has(_pre_define.CUSTOM_COMPONENT_DEFAULT)?new Set([..._validate_ui_syntax.provideCollection.get(_pre_define.CUSTOM_COMPONENT_DEFAULT),..._validate_ui_syntax.provideCollection.get(i)]):_validate_ui_syntax.provideCollection.get(i),_validate_ui_syntax.consumeCollection.has(_pre_define.CUSTOM_COMPONENT_DEFAULT)?new Set([..._validate_ui_syntax.consumeCollection.get(_pre_define.CUSTOM_COMPONENT_DEFAULT),..._validate_ui_syntax.consumeCollection.get(i)]):_validate_ui_syntax.consumeCollection.get(i),_validate_ui_syntax.objectLinkCollection.has(_pre_define.CUSTOM_COMPONENT_DEFAULT)?new Set([..._validate_ui_syntax.objectLinkCollection.get(_pre_define.CUSTOM_COMPONENT_DEFAULT),..._validate_ui_syntax.objectLinkCollection.get(i)]):_validate_ui_syntax.objectLinkCollection.get(i),getNewLocalStorageMap(_validate_ui_syntax.localStorageLinkCollection,i),getNewLocalStorageMap(_validate_ui_syntax.localStoragePropCollection,i),_validate_ui_syntax.builderParamInitialization.has(_pre_define.CUSTOM_COMPONENT_DEFAULT)?new Set([..._validate_ui_syntax.builderParamInitialization.get(_pre_define.CUSTOM_COMPONENT_DEFAULT),..._validate_ui_syntax.builderParamInitialization.get(i)]):_validate_ui_syntax.builderParamInitialization.get(i),_validate_ui_syntax.propInitialization.has(_pre_define.CUSTOM_COMPONENT_DEFAULT)?new Set([..._validate_ui_syntax.propInitialization.get(_pre_define.CUSTOM_COMPONENT_DEFAULT),..._validate_ui_syntax.propInitialization.get(i)]):_validate_ui_syntax.propInitialization.get(i),t,a)}function getNewLocalStorageMap(e,t){let a=new Map;if(e.has(_pre_define.CUSTOM_COMPONENT_DEFAULT)){var i=new Set;if(e.get(_pre_define.CUSTOM_COMPONENT_DEFAULT))for(const n of e.get(_pre_define.CUSTOM_COMPONENT_DEFAULT).keys())i.add(n);if(e.get(t))for(const o of e.get(t).keys())i.add(o);a.set(t,i)}else a=e.get(t);return a}function setDependencies(e,t,a,i,n,o,s,r,l,_,d,p,c,u,f,m,g,y){_validate_ui_syntax.linkCollection.set(e,t),_validate_ui_syntax.propertyCollection.set(e,a),_validate_ui_syntax.propCollection.get(e)||_validate_ui_syntax.propCollection.set(e,i),_validate_ui_syntax.builderParamObjectCollection.set(e,n),_validate_ui_syntax.componentCollection.customComponents.add(e),g&&_utils.storedFileInfo.getCurrentArkTsFile().compFromDETS.add(e),y.hasRecycle&&_utils.storedFileInfo.getCurrentArkTsFile().recycleComponents.add(e),_validate_ui_syntax.stateCollection.set(e,o),_validate_ui_syntax.regularCollection.set(e,s),_validate_ui_syntax.storagePropCollection.set(e,r),_validate_ui_syntax.storageLinkCollection.set(e,l),_validate_ui_syntax.provideCollection.set(e,_),_validate_ui_syntax.consumeCollection.set(e,d),_validate_ui_syntax.objectLinkCollection.set(e,p),_validate_ui_syntax.localStorageLinkCollection.set(e,c),_validate_ui_syntax.localStoragePropCollection.set(e,u),_validate_ui_syntax.builderParamInitialization.get(e)||_validate_ui_syntax.builderParamInitialization.set(e,f),_validate_ui_syntax.propInitialization.get(e)||_validate_ui_syntax.propInitialization.set(e,m)}function hasCollection(e){e=e.escapedText.toString();return _validate_ui_syntax.linkCollection.has(e)||_validate_ui_syntax.propCollection.has(e)||_validate_ui_syntax.propertyCollection.has(e)||_validate_ui_syntax.builderParamObjectCollection.has(e)||_validate_ui_syntax.stateCollection.has(e)||_validate_ui_syntax.regularCollection.has(e)||_validate_ui_syntax.storagePropCollection.has(e)||_validate_ui_syntax.storageLinkCollection.has(e)||_validate_ui_syntax.provideCollection.has(e)||_validate_ui_syntax.consumeCollection.has(e)||_validate_ui_syntax.objectLinkCollection.has(e)||_validate_ui_syntax.localStorageLinkCollection.has(e)||_validate_ui_syntax.localStoragePropCollection.has(e)}function isModule(e){return!/^(\.|\.\.)?\//.test(e)||-1<e.indexOf(_main.projectConfig.packageDir)}function isCustomComponent(t,a){let i=!1;if(t.decorators&&t.decorators.length)for(let e=0;e<t.decorators.length;++e){var n=t.decorators[e].expression;_typescript.default.isIdentifier(n)&&(n=n.escapedText.toString(),_pre_define.CUSTOM_DECORATOR_NAME.has(n)&&(i=!0),n===_pre_define.DECORATOR_REUSEABLE)&&(a.hasRecycle=!0)}return i}let packageJsonEntry="";function isPackageJsonEntry(a){var i=_path.default.join(a,_main.projectConfig.packageJson);if(_fs.default.existsSync(i)){let e,t;try{var n=("npm"===_main.projectConfig.packageManagerType?JSON:_json.default).parse(_fs.default.readFileSync(i).toString());e=n.types,t=n.main}catch(e){return!1}return entryExist(a,e)?(packageJsonEntry=_path.default.resolve(a,e),!0):entryExist(a,t)?(packageJsonEntry=_path.default.resolve(a,t),!0):void 0}}function entryExist(e,t){return"string"==typeof t&&_fs.default.existsSync(_path.default.resolve(e,t))&&_fs.default.statSync(_path.default.resolve(e,t)).isFile()}function getModuleFilePath(e){return e&&_path.default.extname(e)!==_pre_define.EXTNAME_ETS&&isModule(e)&&(e+=_pre_define.EXTNAME_ETS),e}function getFileResolvePath(e,t,a,i){var n=getModuleFilePath(a),o=_path.default.join(i,n);if(_fs.default.existsSync(o))return o;let s,r;if(new RegExp(`^@(${_main.sdkConfigPrefix})\\.`).test(a.trim()))for(let e=0;e<_main.sdkConfigs.length;e++){var l=_path.default.resolve(_main.sdkConfigs[e].apiPath,a+".d.ets");if(_fs.default.existsSync(l))return l}if(r=_main.projectConfig.aceModuleJsonPath?(s=_path.default.join(i,"../../../../",n),_path.default.join(i,"../",n)):(s=_path.default.join(i,"../../../../../",n),_path.default.join(i,"../../",n)),_fs.default.existsSync(s))return s;if(_fs.default.existsSync(r))return r;let _=t;for(;!_fs.default.existsSync(e)&&(e=-1<a.indexOf(_main.projectConfig.packageDir)?_path.default.join(_,a):_path.default.join(_,_main.projectConfig.packageDir,a),_fs.default.existsSync(e+_pre_define.EXTNAME_ETS)?e+=_pre_define.EXTNAME_ETS:isPackageJsonEntry(e)&&(e=packageJsonEntry,!_fs.default.statSync(e).isDirectory())||(_fs.default.existsSync(_path.default.join(e,_pre_define.INDEX_ETS))?e=_path.default.join(e,_pre_define.INDEX_ETS):_fs.default.existsSync(_path.default.join(e,_pre_define.INDEX_TS))&&(e=_path.default.join(e,_pre_define.INDEX_TS))),_!==_path.default.parse(_).root);)_=_path.default.dirname(_);return e}function getFileFullPath(e,t){var a,i;e&&_path.default.extname(e)!==_pre_define.EXTNAME_ETS&&_path.default.extname(e)!==_pre_define.EXTNAME_TS&&!isModule(e)&&(a=_path.default.resolve(_path.default.resolve(t,e),_pre_define.INDEX_ETS),i=_path.default.resolve(_path.default.resolve(t,e),_pre_define.INDEX_TS),/^(\.|\.\.)\//.test(e)&&!_fs.default.existsSync(_path.default.resolve(t,e+_pre_define.EXTNAME_ETS))&&_fs.default.existsSync(a)?e=a:/^(\.|\.\.)\//.test(e)&&!_fs.default.existsSync(_path.default.resolve(t,e+_pre_define.EXTNAME_TS))&&_fs.default.existsSync(i)?e=i:e+=(0,_utils.getExtensionIfUnfullySpecifiedFilepath)(_path.default.resolve(t,e)));let n;return n=/^(\.|\.\.)\//.test(e)&&e.indexOf(_main.projectConfig.packageDir)<0?_path.default.resolve(t,e):/^\//.test(e)&&e.indexOf(_main.projectConfig.packageDir)<0||_fs.default.existsSync(e)&&_fs.default.statSync(e).isFile()?e:getFileResolvePath(n,t,e,_main.projectConfig.projectPath)}function validateModuleName(e,t,a,i){var n=e.escapedText.toString();_component_map.INNER_COMPONENT_NAMES.has(n)&&(n={type:_utils.LogType.ERROR,message:`The module name '${n}' can not be the same as the inner component name.`,pos:e.getStart()},a&&i&&(e=(a=a.getLineAndCharacterOfPosition(e.getStart())).line+1,a=a.character+1,Object.assign(n,{fileName:i,line:e,column:a})),t.push(n))}function processImportModule(e){var t=this;let a,i,n;e.importClause&&e.importClause.name&&_typescript.default.isIdentifier(e.importClause.name)&&getDefinedNode(a,i,n,e.importClause.name),e.importClause&&e.importClause.namedBindings&&_typescript.default.isNamedImports(e.importClause.namedBindings)&&e.importClause.namedBindings.elements&&e.importClause.namedBindings.elements.forEach(function(e){_newArrowCheck(this,t),_typescript.default.isImportSpecifier(e)&&e.name&&_typescript.default.isIdentifier(e.name)&&getDefinedNode(a,i,n,e.name)}.bind(this)),e.importClause&&e.importClause.namedBindings&&_typescript.default.isNamespaceImport(e.importClause.namedBindings)&&e.importClause.namedBindings.name&&_typescript.default.isIdentifier(e.importClause.namedBindings.name)&&getDefinedNode(a,i,n,e.importClause.namedBindings.name)}function getDefinedNode(e,t,a,i){if(a=(t=(e=_main.globalProgram.checker.getSymbolAtLocation(i))?_main.globalProgram.checker.getAliasedSymbol(e):null)&&t.declarations?t.declarations[0]:null){if(_typescript.default.isSourceFile(a)&&t.escapedName){e=t.escapedName.toString().replace(/^("|')/,"").replace(/("|')$/,"");if(_fs.default.existsSync(e+".ets")||_fs.default.existsSync(e+".ts")&&t.exports&&t.exports instanceof Map)return void getIntegrationNodeInfo(a,i,t.exports)}processImportNode(a,i,!1,null)}}function getIntegrationNodeInfo(t,e,a){for(const i of a){try{t=_main.globalProgram.checker.getAliasedSymbol(i[1]).declarations[0]}catch(e){i[1]&&i[1].declarations&&(t=i[1].declarations[0])}processImportNode(t,e,!0,i[0])}}function processImportNode(t,a,e,i){var n={hasRecycle:!1};let o,s=(o=e?i:a.escapedText.toString(),!0);e=t.getSourceFile()?t.getSourceFile().fileName:void 0,i=a.getSourceFile()?a.getSourceFile().fileName:void 0;if(_typescript.default.isStructDeclaration(t)&&_typescript.default.isIdentifier(t.name)){if((0,_validate_ui_syntax.isCustomDialogClass)(t)&&_validate_ui_syntax.componentCollection.customDialogs.add(o),isCustomComponent(t,n)){let e=!1;_validate_ui_syntax.componentCollection.customComponents.add(o);for(a=(0,_validate_ui_syntax.getComponentSet)(t,!1);t;)_typescript.default.isSourceFile(t)&&/\.d\.ets$/.test(t.fileName)&&(e=!0),t=t.parent;e&&_utils.storedFileInfo.getCurrentArkTsFile().compFromDETS.add(o),n.hasRecycle&&_utils.storedFileInfo.getCurrentArkTsFile().recycleComponents.add(o),setDependencies(o,a.links,a.properties,a.props,a.builderParams,a.states,a.regulars,a.storageProps,a.storageLinks,a.provides,a.consumes,a.objectLinks,a.localStorageLink,a.localStorageProp,a.builderParamData,a.propData,e,n)}}else(0,_validate_ui_syntax.isObservedClass)(t)?_validate_ui_syntax.observedClassCollection.add(o):_typescript.default.isFunctionDeclaration(t)&&(0,_utils.hasDecorator)(t,_pre_define.COMPONENT_BUILDER_DECORATOR)?(_component_map.CUSTOM_BUILDER_METHOD.add(o),_component_map.GLOBAL_CUSTOM_BUILDER_METHOD.add(o)):_typescript.default.isEnumDeclaration(t)&&t.name?_validate_ui_syntax.enumCollection.add(o):s=!1;s&&i&&e&&_utils.storedFileInfo.transformCacheFiles[i].children.push({fileName:e,mtimeMs:_fs.default.existsSync(e)?_fs.default.statSync(e).mtimeMs:0})}