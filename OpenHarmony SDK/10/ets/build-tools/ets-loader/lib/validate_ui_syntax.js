"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CollectImportNames=CollectImportNames,exports.builderParamObjectCollection=exports.builderParamInitialization=void 0,exports.checkAllNode=checkAllNode,exports.enumCollection=exports.dollarCollection=exports.consumeCollection=exports.componentCollection=exports.classMethodCollection=void 0,exports.getComponentSet=getComponentSet,exports.getLocalStorageCollection=getLocalStorageCollection,exports.getObservedPropertyCollection=getObservedPropertyCollection,exports.isCustomDialogClass=isCustomDialogClass,exports.isObservedClass=isObservedClass,exports.originalImportNamesMap=exports.observedClassCollection=exports.objectLinkCollection=exports.localStoragePropCollection=exports.localStorageLinkCollection=exports.linkCollection=exports.isStaticViewCollection=void 0,exports.preprocessExtend=preprocessExtend,exports.preprocessNewExtend=preprocessNewExtend,exports.processSystemApi=processSystemApi,exports.regularCollection=exports.provideCollection=exports.propertyCollection=exports.propInitialization=exports.propCollection=void 0,exports.resetComponentCollection=resetComponentCollection,exports.sourceReplace=sourceReplace,exports.useOSFiles=exports.storagePropCollection=exports.storageLinkCollection=exports.stateCollection=exports.sourcemapNamesCollection=void 0,exports.validateUISyntax=validateUISyntax;var _typescript=_interopRequireDefault(require("typescript")),_path=_interopRequireDefault(require("path")),_pre_define=require("./pre_define"),_component_map=require("./component_map"),_utils=require("./utils"),_ark_utils=require("./ark_utils"),_main=require("../main"),_process_ui_syntax=require("./process_ui_syntax"),_process_component_member=require("./process_component_member"),_compile_info=require("./compile_info");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _newArrowCheck(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}const componentCollection={localStorageName:null,localStorageNode:null,entryComponentPos:null,entryComponent:null,previewComponent:new Array,customDialogs:new Set([]),customComponents:new Set([]),currentClassName:null},observedClassCollection=(exports.componentCollection=componentCollection,new Set),enumCollection=(exports.observedClassCollection=observedClassCollection,new Set),classMethodCollection=(exports.enumCollection=enumCollection,new Map),dollarCollection=(exports.classMethodCollection=classMethodCollection,new Set),propertyCollection=(exports.dollarCollection=dollarCollection,new Map),stateCollection=(exports.propertyCollection=propertyCollection,new Map),linkCollection=(exports.stateCollection=stateCollection,new Map),propCollection=(exports.linkCollection=linkCollection,new Map),regularCollection=(exports.propCollection=propCollection,new Map),storagePropCollection=(exports.regularCollection=regularCollection,new Map),storageLinkCollection=(exports.storagePropCollection=storagePropCollection,new Map),provideCollection=(exports.storageLinkCollection=storageLinkCollection,new Map),consumeCollection=(exports.provideCollection=provideCollection,new Map),objectLinkCollection=(exports.consumeCollection=consumeCollection,new Map),builderParamObjectCollection=(exports.objectLinkCollection=objectLinkCollection,new Map),localStorageLinkCollection=(exports.builderParamObjectCollection=builderParamObjectCollection,new Map),localStoragePropCollection=(exports.localStorageLinkCollection=localStorageLinkCollection,new Map),builderParamInitialization=(exports.localStoragePropCollection=localStoragePropCollection,new Map),propInitialization=(exports.builderParamInitialization=builderParamInitialization,new Map),isStaticViewCollection=(exports.propInitialization=propInitialization,new Map),useOSFiles=(exports.isStaticViewCollection=isStaticViewCollection,new Set),sourcemapNamesCollection=(exports.useOSFiles=useOSFiles,new Map),originalImportNamesMap=(exports.sourcemapNamesCollection=sourcemapNamesCollection,new Map);function validateUISyntax(e,t,o,n,r=null){var i=this;let s=[];return"moduleJson"!==process.env.compileMode&&_path.default.resolve(o)===_path.default.resolve(_main.projectConfig.projectPath||"","app.ets")||((e=checkComponentDecorator(e,o,n,r))&&(s=s.concat(e)),checkUISyntax(o,new Set([..._component_map.INNER_COMPONENT_NAMES,...componentCollection.customComponents]),t,s,r,n),componentCollection.customComponents.forEach(function(e){return _newArrowCheck(this,i),_utils.componentInfo.componentNames.add(e)}.bind(this))),s}function checkComponentDecorator(e,t,o,r){var i=this;const s=[];if((r=r||_typescript.default.createSourceFile(t,e,_typescript.default.ScriptTarget.Latest,!0,_typescript.default.ScriptKind.ETS))&&r.statements&&r.statements.length){const a={entryCount:0,previewCount:0};r.statements.forEach(function(t,e,o){if(_newArrowCheck(this,i),isObservedClass(t)&&observedClassCollection.add(t.name.getText()),_typescript.default.isEnumDeclaration(t)&&t.name&&enumCollection.add(t.name.getText()),_typescript.default.isStructDeclaration(t)&&(t.name&&_typescript.default.isIdentifier(t.name)?t.decorators&&t.decorators.length?checkDecorators(t.decorators,a,t.name,s,r,t):(0,_utils.addLog)(_utils.LogType.WARN,"A struct should use decorator '@Component'.",t.getStart(),s,r):(0,_utils.addLog)(_utils.LogType.ERROR,"A struct must have a name.",t.getStart(),s,r)),_typescript.default.isMissingDeclaration(t)){var n=t.decorators;for(let e=0;e<n.length;e++)if(n[e]&&/struct/.test(n[e].getText())){(0,_utils.addLog)(_utils.LogType.ERROR,"Please use a valid decorator.",t.getStart(),s,r);break}}}.bind(this)),"rollup"===process.env.compileTool&&(0<a.entryCount?_utils.storedFileInfo.wholeFileInfo[_path.default.resolve(r.fileName)].hasEntry=!0:_utils.storedFileInfo.wholeFileInfo[_path.default.resolve(r.fileName)].hasEntry=!1),validateEntryAndPreviewCount(a,o,r.fileName,_main.projectConfig.isPreview,!!_main.projectConfig.checkEntry,s)}return s.length?s:null}function validateEntryAndPreviewCount(e,t,o,n,r,i){10<e.previewCount&&("?entry"===t||"true"===process.env.watchMode)&&i.push({type:_utils.LogType.ERROR,message:"A page can contain at most 10 '@Preview' decorators.",fileName:o}),1<e.entryCount&&"?entry"===t&&i.push({type:_utils.LogType.ERROR,message:"A page can't contain more than one '@Entry' decorator",fileName:o}),n&&!r&&e.previewCount<1&&1!==e.entryCount&&"?entry"===t?i.push({type:_utils.LogType.ERROR,message:"A page which is being previewed must have one and only one '@Entry' decorator, or at least one '@Preview' decorator.",fileName:o}):n&&!r||1===e.entryCount||"?entry"!==t||_main.abilityPagesFullPath.includes(_path.default.resolve(o).toLowerCase())||i.push({type:_utils.LogType.ERROR,message:`A page configured in '${_main.projectConfig.pagesJsonFileName}' must have one and only one '@Entry' `+"decorator.",fileName:o})}function isObservedClass(e){return!(!_typescript.default.isClassDeclaration(e)||!(0,_utils.hasDecorator)(e,_pre_define.COMPONENT_OBSERVED_DECORATOR))}function isCustomDialogClass(e){return!(!_typescript.default.isStructDeclaration(e)||!(0,_utils.hasDecorator)(e,_pre_define.COMPONENT_DECORATOR_CUSTOM_DIALOG))}function checkDecorators(e,r,t,i,s,a){var l=this;let c=!1;const p=t.getText();e.forEach(function(e){_newArrowCheck(this,l);let t=e.getText().replace(/\([^\(\)]*\)/,"").trim();if(e.expression&&e.expression.expression&&_typescript.default.isIdentifier(e.expression.expression)&&(t="@"+e.expression.expression.getText()),_pre_define.INNER_COMPONENT_DECORATORS.has(t))switch(componentCollection.customComponents.add(p),t){case _pre_define.COMPONENT_DECORATOR_ENTRY:checkEntryComponent(a,i,s),r.entryCount++,componentCollection.entryComponent=p,componentCollection.entryComponentPos=a.getStart(),collectLocalStorageName(e);break;case _pre_define.COMPONENT_DECORATOR_PREVIEW:r.previewCount++,componentCollection.previewComponent.push(p);break;case _pre_define.COMPONENT_DECORATOR_COMPONENT:c=!0;break;case _pre_define.COMPONENT_DECORATOR_CUSTOM_DIALOG:componentCollection.customDialogs.add(p),c=!0;break;case _pre_define.COMPONENT_DECORATOR_REUSEABLE:_utils.storedFileInfo.getCurrentArkTsFile().recycleComponents.add(p),c=!0}else{var o=(e.expression||e).pos,n=`The struct '${p}' use invalid decorator.`;(0,_utils.addLog)(_utils.LogType.WARN,n,o,i,s)}}.bind(this)),c||(e=`The struct '${p}' should use decorator '@Component'.`,(0,_utils.addLog)(_utils.LogType.WARN,e,t.pos,i,s)),_component_map.BUILDIN_STYLE_NAMES.has(p)&&(e=`The struct '${p}' cannot have the same name `+`as the built-in attribute '${p}'.`,(0,_utils.addLog)(_utils.LogType.ERROR,e,t.pos,i,s)),_component_map.INNER_COMPONENT_NAMES.has(p)&&(e=`The struct '${p}' cannot have the same name `+`as the built-in component '${p}'.`,(0,_utils.addLog)(_utils.LogType.ERROR,e,t.pos,i,s))}function checkConcurrentDecorator(t,o,n){var r=this;if(_main.projectConfig.compileMode===_pre_define.JSBUNDLE&&(0,_utils.addLog)(_utils.LogType.ERROR,"@Concurrent can only be used in ESMODULE compile mode.",t.decorators.pos,o,n),_typescript.default.isMethodDeclaration(t)&&(0,_utils.addLog)(_utils.LogType.ERROR,"@Concurrent can not be used on method. please use it on function declaration.",t.decorators.pos,o,n),t.asteriskToken){let e=!1;var i=function(e){return _newArrowCheck(this,r),e.kind===_typescript.default.SyntaxKind.AsyncKeyword}.bind(this),i=(e=t.modifiers?t.modifiers.some(i):e)?"Async generator":"Generator";(0,_utils.addLog)(_utils.LogType.ERROR,`@Concurrent can not be used on ${i} function declaration.`,t.decorators.pos,o,n)}}function collectLocalStorageName(e){var o=this;e&&e.expression&&_typescript.default.isCallExpression(e.expression)?e.expression.arguments&&e.expression.arguments.length&&e.expression.arguments.forEach(function(e,t){_newArrowCheck(this,o),_typescript.default.isIdentifier(e)&&0===t?(componentCollection.localStorageName=e.getText(),componentCollection.localStorageNode=e):_typescript.default.isObjectLiteralExpression(e)&&0===t&&(componentCollection.localStorageName=null,componentCollection.localStorageNode=e)}.bind(this)):(componentCollection.localStorageName=null,componentCollection.localStorageNode=null)}function checkUISyntax(e,t,o,n,r,i){visitAllNode(r=r||_typescript.default.createSourceFile(e,o,_typescript.default.ScriptTarget.Latest,!0,_typescript.default.ScriptKind.ETS),r,t,n,!1,i)}function propertyInitializeInEntry(e,t){return"?entry"===e&&t===componentCollection.entryComponent}function visitAllNode(e,t,o,n,r,i){var s,a=this;_typescript.default.isStructDeclaration(e)&&e.name&&_typescript.default.isIdentifier(e.name)&&(r=!0,collectComponentProps(e,propertyInitializeInEntry(i,e.name.escapedText.toString()))),(_typescript.default.isMethodDeclaration(e)||_typescript.default.isFunctionDeclaration(e))&&(s={decoratorName:"",componentName:""},(0,_utils.hasDecorator)(e,_pre_define.COMPONENT_BUILDER_DECORATOR)?(_component_map.CUSTOM_BUILDER_METHOD.add(e.name.getText()),(_typescript.default.isFunctionDeclaration(e)?_component_map.GLOBAL_CUSTOM_BUILDER_METHOD:_component_map.INNER_CUSTOM_BUILDER_METHOD).add(e.name.getText())):_typescript.default.isFunctionDeclaration(e)&&(0,_process_ui_syntax.isExtendFunction)(e,s)?(s.decoratorName===_pre_define.CHECK_COMPONENT_EXTEND_DECORATOR&&(0,_process_ui_syntax.collectExtend)(_component_map.EXTEND_ATTRIBUTE,s.componentName,e.name.getText()),s.decoratorName===_pre_define.CHECK_COMPONENT_ANIMATABLE_EXTEND_DECORATOR&&(0,_process_ui_syntax.collectExtend)(_utils.storedFileInfo.getCurrentArkTsFile().animatableExtendAttribute,s.componentName,e.name.getText())):(0,_utils.hasDecorator)(e,_pre_define.COMPONENT_STYLES_DECORATOR)&&_typescript.default.isBlock(e.body)&&e.body.statements&&((_typescript.default.isFunctionDeclaration(e)?_component_map.GLOBAL_STYLE_FUNCTION:_component_map.INNER_STYLE_FUNCTION).set(e.name.getText(),e.body),_component_map.STYLES_ATTRIBUTE.add(e.name.getText()),_component_map.BUILDIN_STYLE_NAMES.add(e.name.getText())),(0,_utils.hasDecorator)(e,_pre_define.COMPONENT_CONCURRENT_DECORATOR))&&checkConcurrentDecorator(e,n,t),_typescript.default.isIdentifier(e)&&(_typescript.default.isDecorator(e.parent)||_typescript.default.isCallExpression(e.parent)&&_typescript.default.isDecorator(e.parent.parent))&&(s=e.escapedText.toString(),validateStructDecorator(t,e,n,r,s),validateMethodDecorator(t,e,n,r,s)),e.getChildren().forEach(function(e){return _newArrowCheck(this,a),visitAllNode(e,t,o,n,r,i)}.bind(this)),r=!1}function validateStructDecorator(e,t,o,n,r){!n&&_pre_define.STRUCT_DECORATORS.has("@"+r)&&(0,_utils.addLog)(_utils.LogType.ERROR,`The '@${r}' decorator can only be used with 'struct'.`,t.pos,o,e)}function validateMethodDecorator(e,t,o,n,r){let i;(_typescript.default.isMethodDeclaration(t.parent.parent)||_typescript.default.isDecorator(t.parent.parent)&&_typescript.default.isMethodDeclaration(t.parent.parent.parent))&&(!n&&_pre_define.STRUCT_CONTEXT_METHOD_DECORATORS.has("@"+r)&&(i=`The '@${r}' decorator can only be used in 'struct'.`),i=_pre_define.CHECK_EXTEND_DECORATORS.includes(r)?`The '@${r}' decorator can not be a member property method of a 'class' or 'struct'.`:i)&&(0,_utils.addLog)(_utils.LogType.ERROR,i,t.pos,o,e)}function checkAllNode(e,t,o,n){_typescript.default.isIdentifier(e.expression)&&(checkNoChildComponent(e,o,n),checkOneChildComponent(e,t,o,n),checkSpecificChildComponent(e,t,o,n))}function checkNoChildComponent(e,t,o){var n,r={name:null,value:null};hasChild(e,r)&&(n=e.expression.escapedText.toString(),e=e.expression.getStart(),(0,_utils.addLog)(_utils.LogType.ERROR,null===r.name?`The component '${n}' can't have any child.`:`When the component '${n}' set '${r.name}' is '${r.value}'`+", can't have any child.",e,o,t))}function hasChild(e,t){var o=e.expression;return!(!_component_map.AUTOMIC_COMPONENT.has(o.escapedText.toString())&&!judgeComponentType(o,e,t)||!getNextNode(e))}function judgeComponentType(e,t,o){return _pre_define.COMPONENT_TOGGLE===e.escapedText.toString()&&t.arguments&&t.arguments[0]&&_typescript.default.isObjectLiteralExpression(t.arguments[0])&&t.arguments[0].getText()&&judgeToggleComponentParamType(t.arguments[0].getText(),o)}function judgeToggleComponentParamType(e,t){if(-1<e.indexOf(_pre_define.RESOURCE_NAME_TYPE)){t.name=_pre_define.RESOURCE_NAME_TYPE;e=e.match(/\b(Checkbox|Switch|Button)\b/);if(e&&e.length)return t.value=e[0],t.value!==_pre_define.COMPONENT_BUTTON}return!1}function getNextNode(e){if(e.body&&_typescript.default.isBlock(e.body))return e.body}function checkOneChildComponent(e,t,o,n){var r={name:null,value:null};hasNonSingleChild(e,t,r)&&(t=e.expression.escapedText.toString(),e=e.expression.getStart(),(0,_utils.addLog)(_utils.LogType.ERROR,null===r.name?`The component '${t}' can only have a single child component.`:`When the component '${t}' set '${r.name}' is `+`'${r.value}', can only have a single child component.`,e,n,o))}function hasNonSingleChild(e,t,o){var n=e.expression,r=getNextNode(e);if(_component_map.SINGLE_CHILD_COMPONENT.has(n.escapedText.toString())||!judgeComponentType(n,e,o)&&o.value===_pre_define.COMPONENT_BUTTON){if(!r)return!1;if(r&&r.statements){n=r.statements.length;if(!n)return!1;if(3<n)return!0;if(1<getBlockChildrenCount(r,t))return!0}}return!1}function getBlockChildrenCount(t,o){let n=0;var r=t.statements.length;for(let e=0;e<r;++e){var i=t.statements[e];if(_typescript.default.isExpressionStatement(i)&&_typescript.default.isCallExpression(i.expression)&&isForEachComponent(i.expression)&&(n+=2),_typescript.default.isIfStatement(i)&&(n+=getIfChildrenCount(i,o)),_typescript.default.isExpressionStatement(i)&&_typescript.default.isEtsComponentExpression(i.expression)&&(n+=1),_typescript.default.isExpressionStatement(i)&&_typescript.default.isCallExpression(i.expression)){let e=i.expression;for(;e.expression;)(_typescript.default.isEtsComponentExpression(e)||_typescript.default.isCallExpression(e)&&isComponent(e,o))&&(n+=1),e=e.expression}if(1<n)break}return n}function isComponent(e,t){return!(!_typescript.default.isIdentifier(e.expression)||!t.has(e.expression.escapedText.toString()))}function isForEachComponent(e){return!!_typescript.default.isIdentifier(e.expression)&&((e=e.expression.escapedText.toString())===_pre_define.COMPONENT_FOREACH||e===_pre_define.COMPONENT_LAZYFOREACH)}function getIfChildrenCount(e,t){return Math.max(getStatementCount(e.thenStatement,t),getStatementCount(e.elseStatement,t))}function getStatementCount(e,t){let o=0;return e&&(_typescript.default.isBlock(e)?o=getBlockChildrenCount(e,t):_typescript.default.isIfStatement(e)?o=getIfChildrenCount(e,t):_typescript.default.isExpressionStatement(e)&&_typescript.default.isEtsComponentExpression(e.expression)&&isForEachComponent(e.expression)?o=2:_typescript.default.isExpressionStatement(e)&&_typescript.default.isEtsComponentExpression(e.expression)&&!isForEachComponent(e.expression)&&isComponent(e.expression,t)&&(o=1)),o}function checkSpecificChildComponent(e,t,o,n){var r;hasNonspecificChild(e,t)&&(t=e.expression.escapedText.toString(),e=e.expression.getStart(),r=Array.from(_component_map.SPECIFIC_CHILD_COMPONENT.get(t)).join(" and "),(0,_utils.addLog)(_utils.LogType.ERROR,`The component '${t}' can only have the child component ${r}.`,e,n,o))}function hasNonspecificChild(e,t){var o=e.expression.escapedText.toString(),e=getNextNode(e);let n=!1;if(_component_map.SPECIFIC_CHILD_COMPONENT.has(o)&&e){o=_component_map.SPECIFIC_CHILD_COMPONENT.get(o);if(n=isNonspecificChildBlock(e,o,t));}return n}function isNonspecificChildBlock(o,n,r){if(o.statements){var i=o.statements.length;for(let t=0;t<i;++t){var s=o.statements[t];if(_typescript.default.isIfStatement(s)&&isNonspecificChildIf(s,n,r))return!0;if(_typescript.default.isExpressionStatement(s)&&_typescript.default.isCallExpression(s.expression)&&isForEachComponent(s.expression)&&isNonspecificChildForEach(s.expression,n,r))return!0;if(_typescript.default.isBlock(s)&&isNonspecificChildBlock(s,n,r))return!0;if(_typescript.default.isExpressionStatement(s)){let e=s.expression;for(;e.expression;){if(_typescript.default.isEtsComponentExpression(e)&&_typescript.default.isIdentifier(e.expression)&&!isForEachComponent(e)&&isComponent(e,r)){var a=isNonspecificChildNonForEach(e,n);if(a)return a;t+1<i&&_typescript.default.isBlock(o.statements[t+1])&&++t}e=e.expression}}}}return!1}function isNonspecificChildIf(e,t,o){return isNonspecificChildIfStatement(e.thenStatement,t,o)||isNonspecificChildIfStatement(e.elseStatement,t,o)}function isNonspecificChildForEach(e,t,o){if(_typescript.default.isCallExpression(e)&&e.arguments&&1<e.arguments.length&&_typescript.default.isArrowFunction(e.arguments[1])){e=e.arguments[1].body;if(!e)return!1;if(_typescript.default.isBlock(e)&&isNonspecificChildBlock(e,t,o))return!0;if(_typescript.default.isIfStatement(e)&&isNonspecificChildIf(e,t,o))return!0;if(_typescript.default.isCallExpression(e)&&isForEachComponent(e)&&isNonspecificChildForEach(e,t,o))return!0;if(_typescript.default.isEtsComponentExpression(e)&&!isForEachComponent(e)&&isComponent(e,o)&&isNonspecificChildNonForEach(e,t))return!0}return!1}function isNonspecificChildNonForEach(e,t){return!(!_typescript.default.isIdentifier(e.expression)||t.has(e.expression.escapedText.toString()))}function isNonspecificChildIfStatement(e,t,o){return!!e&&!!(_typescript.default.isBlock(e)&&isNonspecificChildBlock(e,t,o)||_typescript.default.isIfStatement(e)&&isNonspecificChildIf(e,t,o)||_typescript.default.isExpressionStatement(e)&&_typescript.default.isEtsComponentExpression(e.expression)&&isForEachComponent(e.expression)&&isNonspecificChildForEach(e.expression,t,o)||_typescript.default.isExpressionStatement(e)&&_typescript.default.isEtsComponentExpression(e.expression)&&!isForEachComponent(e.expression)&&isComponent(e.expression,o)&&isNonspecificChildNonForEach(e.expression,t))}function collectComponentProps(e,t){var o=e.name.getText(),e=getComponentSet(e,t);propertyCollection.set(o,e.properties),stateCollection.set(o,e.states),linkCollection.set(o,e.links),propCollection.set(o,e.props),regularCollection.set(o,e.regulars),storagePropCollection.set(o,e.storageProps),storageLinkCollection.set(o,e.storageLinks),provideCollection.set(o,e.provides),consumeCollection.set(o,e.consumes),objectLinkCollection.set(o,e.objectLinks),localStorageLinkCollection.set(o,e.localStorageLink),localStoragePropCollection.set(o,e.localStorageProp),builderParamObjectCollection.set(o,e.builderParams),builderParamInitialization.set(o,e.builderParamData),propInitialization.set(o,e.propData)}function getComponentSet(e,t){var o=new Set,n=new Set,r=new Set,i=new Set,s=new Set,a=new Set,l=new Set,c=new Set,p=new Set,d=new Set,u=new Set,_=new Map,m=new Map,C=new Set,f=new Set;return traversalComponentProps(e,t,o,s,n,r,i,a,l,c,p,d,_,m,u,C,f),{properties:o,regulars:s,states:n,links:r,props:i,storageProps:a,storageLinks:l,provides:c,consumes:p,objectLinks:d,localStorageLink:_,localStorageProp:m,builderParams:u,builderParamData:C,propData:f}}function traversalComponentProps(e,r,i,s,a,l,c,p,d,u,_,m,C,f,h,g,E){var S=this;let O=!0;if(e.members){const N=new Set;e.members.forEach(function(t){if(_newArrowCheck(this,S),_typescript.default.isPropertyDeclaration(t)&&_typescript.default.isIdentifier(t.name)){var o=t.name.getText();if(i.add(o),t.decorators&&t.decorators.length){O=!1;for(let e=0;e<t.decorators.length;e++){var n=t.decorators[e].getText().replace(/\(.*\)$/,"").trim();_pre_define.INNER_COMPONENT_MEMBER_DECORATORS.has(n)&&(dollarCollection.add("$"+o),collectionStates(t.decorators[e],r,n,o,a,l,c,p,d,u,_,m,C,f,h,t.initializer,g,E))}}else s.add(o)}_typescript.default.isMethodDeclaration(t)&&t.name&&_typescript.default.isIdentifier(t.name)&&(validateStateVariable(t),N.add(t.name.getText()))}.bind(this)),classMethodCollection.set(e.name.getText(),N)}isStaticViewCollection.set(e.name.getText(),O)}function collectionStates(e,t,o,n,r,i,s,a,l,c,p,d,u,_,m,C,f,h){switch(o){case _pre_define.COMPONENT_STATE_DECORATOR:r.add(n);break;case _pre_define.COMPONENT_LINK_DECORATOR:i.add(n);break;case _pre_define.COMPONENT_PROP_DECORATOR:C&&h.add(n),s.add(n);break;case _pre_define.COMPONENT_STORAGE_PROP_DECORATOR:a.add(n);break;case _pre_define.COMPONENT_STORAGE_LINK_DECORATOR:l.add(n);break;case _pre_define.COMPONENT_PROVIDE_DECORATOR:c.add(n);break;case _pre_define.COMPONENT_CONSUME_DECORATOR:p.add(n);break;case _pre_define.COMPONENT_OBJECT_LINK_DECORATOR:d.add(n);break;case _pre_define.COMPONENT_BUILDERPARAM_DECORATOR:C?f.add(n):t&&_process_ui_syntax.transformLog.errors.push({type:_utils.LogType.WARN,message:`'${n}' should be initialized in @Entry Component`,pos:e.getStart()}),m.add(n);break;case _pre_define.COMPONENT_LOCAL_STORAGE_LINK_DECORATOR:collectionlocalStorageParam(e,n,u);break;case _pre_define.COMPONENT_LOCAL_STORAGE_PROP_DECORATOR:collectionlocalStorageParam(e,n,_)}}function collectionlocalStorageParam(e,t,o){var n=new Set;e&&_typescript.default.isCallExpression(e.expression)&&e.expression.arguments&&e.expression.arguments.length&&_typescript.default.isStringLiteral(e.expression.arguments[0])&&o.set(t,n.add(e.expression.arguments[0].getText().replace(/\"|'/g,"")))}function sourceReplace(e,t){return CollectImportNames(e=processSystemApi(preprocessNewExtend(preprocessExtend(e)),!1,t),t),{content:e,log:[]}}function preprocessExtend(e,r){var i=this;return e.replace(/@Extend(\s+)([^\.\s]+)\.([^\(]+)\(/gm,function(e,t,o,n){return _newArrowCheck(this,i),(0,_process_ui_syntax.collectExtend)(_component_map.EXTEND_ATTRIBUTE,o,"__"+o+"__"+n),(0,_process_ui_syntax.collectExtend)(_component_map.EXTEND_ATTRIBUTE,o,n),r&&r.add(n),`@Extend(${o})${t}function __${o}__${n}(`}.bind(this))}function preprocessNewExtend(e,o){var n=this;return e.replace(/@Extend\s*\([^\)]+\)\s*function\s+([^\(\s]+)\s*\(/gm,function(e,t){return _newArrowCheck(this,n),o&&o.add(t),e}.bind(this))}function replaceSystemApi(e,t,o,n){return _pre_define.NATIVE_MODULE.has(o+"."+n)?e=`var ${t} = globalThis.requireNativeModule('${o}.${n}')`:o!==_pre_define.SYSTEM_PLUGIN&&o!==_pre_define.OHOS_PLUGIN||(e=`var ${t} = globalThis.requireNapi('${n}')`),e}function replaceLibSo(e,t,o=null){return o&&useOSFiles.add(o),_main.projectConfig.bundleName&&_main.projectConfig.moduleName?`var ${e} = globalThis.requireNapi("${t}", true, "${_main.projectConfig.bundleName}/${_main.projectConfig.moduleName}");`:`var ${e} = globalThis.requireNapi("${t}", true);`}function replaceOhmStartsWithBundle(e,t,o,n,r){e=e.match(/^(\S+)\/(\S+)\/(\S+)\/(\S+)$/);return t=e&&"lib"===e[3]?replaceLibSo(o,e[4],r):t}function replaceOhmStartsWithModule(e,t,o,n,r){var i,s,e=e.match(/^(\S+)\/(\S+)\/(\S+)$/);return e&&_main.projectConfig.aceModuleJsonPath&&(i=e[1],s=e[2],e=e[3],n=`@bundle:${(0,_ark_utils.getPackageInfo)(_main.projectConfig.aceModuleJsonPath)[0]}/${i}/${s}/`+e,t="lib"===s?replaceLibSo(o,e,r):t.replace(/['"](\S+)['"]/,'"'+n+'"')),t}function replaceOhmStartsWithOhos(e,t,o,n,r){var i=(e=e.replace("/",".")).match(/^system\.(\S+)/);return n=i?"@"+e:"@ohos."+e,t=r?replaceSystemApi(t,o,i?"system":"ohos",i?e.substring(7):e):t.replace(/['"](\S+)['"]/,'"'+n+'"')}function replaceOhmStartsWithLocal(e,t,o,n,r){var i,s;return r.match(/(\S+)(\/|\\)src(\/|\\)(?:main|ohosTest)(\/|\\)(ets|js)(\/|\\)(\S+)/)&&_main.projectConfig.aceModuleJsonPath&&(i=(0,_ark_utils.getPackageInfo)(_main.projectConfig.aceModuleJsonPath),e=e.match(/^\/(ets|js|lib|node_modules)\/(\S+)$/))&&(s=e[1],e=e[2],t="lib"===s?replaceLibSo(o,e,r):"node_modules"===s?t.replace(/['"](\S+)['"]/,'"'+(n=""+e)+'"'):(n=`@bundle:${i[0]}/${i[1]}/${s}/`+e,t.replace(/['"](\S+)['"]/,'"'+n+'"'))),t}function replaceOhmUrl(e,t,o,n,r=null){var i=n.match(/^@(\S+):(\S+)$/),s=i[1],a=i[2];switch(s){case"bundle":t=replaceOhmStartsWithBundle(a,t,o,n,r);break;case"module":t=replaceOhmStartsWithModule(a,t,o,n,r);break;case"ohos":t=replaceOhmStartsWithOhos(a,t,o,n,e);break;case"lib":t=replaceLibSo(o,a,r);break;case"local":t=replaceOhmStartsWithLocal(a,t,o,n,r);break;default:_compile_info.logger.error("[31m","ArkTS:ERROR Incorrect OpenHarmony module kind: "+s,"[39m")}return t}function processSystemApi(e,a=!1,l=null,c=!1){var p=this,t=(a&&_main.projectConfig.compileMode===_pre_define.ESMODULE&&(e=e.replace(/import(?:\s*)['"]@(system|ohos)\.(\S+)['"]/g,"")),a?_main.projectConfig.compileMode===_pre_define.ESMODULE?/import\s+(.+)\s+from\s+['"]@(system|ohos)\.(\S+)['"]/g:/(import|const)\s+(.+)\s*=\s*(\_\_importDefault\()?require\(\s*['"]@(system|ohos)\.(\S+)['"]\s*\)(\))?/g:/(import|export)\s+(?:(.+)|\{([\s\S]+)\})\s+from\s+['"](\S+)['"]|import\s+(.+)\s*=\s*require\(\s*['"](\S+)['"]\s*\)/g);const d=new Set;return processInnerModule(e.replace(t,function(e,t,o,n,r,i,s){_newArrowCheck(this,p);t=a?_main.projectConfig.compileMode===_pre_define.ESMODULE?t:o:o||i;return a?(d.add(t),_main.projectConfig.compileMode!==_pre_define.ESMODULE?(collectSourcemapNames(l,t,i),replaceSystemApi(e,t,r,i)):(collectSourcemapNames(l,t,n),replaceSystemApi(e,t,o,n))):/^@(system|ohos)\./.test(i=r||s)?c?replaceSystemApi(e,t,(o=i.match(/^@(system|ohos)\.(\S+)$/))[1],o[2]):e:/^lib(\S+)\.so$/.test(i)?replaceLibSo(t,i.match(/^lib(\S+)\.so$/)[1],l):e}.bind(this)),d)}function collectSourcemapNames(e,t,o){if(null!=e){var n=e.replace(".ets",".js").replace(".ts",".js");if(sourcemapNamesCollection.has(n)){var r=sourcemapNamesCollection.get(n);if(!r.has(t))for(var i of originalImportNamesMap.entries()){var s=i[0],i=i[1];if(i==="@ohos."+o||i==="@system."+o){r.set(t.trim(),s),sourcemapNamesCollection.set(n,r),originalImportNamesMap.delete(s);break}}}}}function CollectImportNames(e,t=null){var o=this,e=e.match(/(import|export)\s+(.+)\s+from\s+['"](\S+)['"]|import\s+(.+)\s*=\s*require\(\s*['"](\S+)['"]\s*\)/g);null!=e&&e.forEach(function(e){_newArrowCheck(this,o);e=e.split(" ");4!==e.length||"import"!==e[0]||"from"!==e[2]||e[3].includes(".so")||originalImportNamesMap.set(e[1],e[3].replace(/'/g,""))}.bind(this)),t&&null!=t&&(e=t.replace(".ets",".js").replace(".ts",".js"),sourcemapNamesCollection.has(e)||sourcemapNamesCollection.set(e,new Map))}function processInnerModule(o,e){var n=this;return e.forEach(function(e){_newArrowCheck(this,n);for(var t=e.trim()+".default";o.includes(t);)o=o.replace(t,e.trim())}.bind(this)),o}exports.originalImportNamesMap=originalImportNamesMap;const VALIDATE_MODULE_REG=new RegExp("^("+_pre_define.VALIDATE_MODULE.join("|")+")");function validateAllowListModule(e,t){return"ohos"===e&&VALIDATE_MODULE_REG.test(t)}function resetComponentCollection(){componentCollection.entryComponent=null,componentCollection.entryComponentPos=null,componentCollection.previewComponent=new Array,_process_component_member.stateObjectCollection.clear(),builderParamInitialization.clear(),propInitialization.clear(),propCollection.clear(),objectLinkCollection.clear(),linkCollection.clear()}function checkEntryComponent(t,o,n){if(t.modifiers)for(let e=0;e<t.modifiers.length;e++)if(t.modifiers[e].kind===_typescript.default.SyntaxKind.ExportKeyword){(0,_utils.addLog)(_utils.LogType.WARN,"It's not a recommended way to export struct with @Entry decorator, which may cause ACE Engine error in component preview mode.",t.getStart(),o,n);break}}function validateStateVariable(t){if(t.decorators&&t.decorators.length)for(let e=0;e<t.decorators.length;e++){var o=t.decorators[e].getText().replace(/\(.*\)$/,"").trim();_pre_define.CARD_ENABLE_DECORATORS[o]&&(0,_process_ui_syntax.validatorCard)(_process_ui_syntax.transformLog.errors,_pre_define.CARD_LOG_TYPE_DECORATORS,t.decorators[e].getStart(),o),_pre_define.INNER_COMPONENT_MEMBER_DECORATORS.has(o)&&_process_ui_syntax.transformLog.errors.push({type:_utils.LogType.ERROR,message:`'${t.decorators[e].getText()}' can not decorate the method.`,pos:t.decorators[e].getStart()})}}function getObservedPropertyCollection(e){var t=new Set([...stateCollection.get(e),...linkCollection.get(e),...propCollection.get(e),...storageLinkCollection.get(e),...storageLinkCollection.get(e),...provideCollection.get(e),...consumeCollection.get(e),...objectLinkCollection.get(e)]);return getLocalStorageCollection(e,t),t}function getLocalStorageCollection(e,t){if(localStorageLinkCollection.get(e))for(const o of localStorageLinkCollection.get(e).keys())t.add(o);if(localStoragePropCollection.get(e))for(const n of localStoragePropCollection.get(e).keys())t.add(n)}