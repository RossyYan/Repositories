"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CommonMode=void 0;var _fs=_interopRequireDefault(require("fs")),_path=_interopRequireDefault(require("path")),_ark_define=require("./ark_define"),_process_ark_config=require("./process_ark_config"),_utils=require("../../../utils"),_ark_utils=require("../../../ark_utils"),_utils2=require("../utils");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _defineProperty(e,i,r){return(i=_toPropertyKey(i))in e?Object.defineProperty(e,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[i]=r,e}function _toPropertyKey(e){e=_toPrimitive(e,"string");return"symbol"==typeof e?e:String(e)}function _toPrimitive(e,i){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0===r)return("string"===i?String:Number)(e);r=r.call(e,i||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}class CommonMode{constructor(e){_defineProperty(this,"projectConfig",void 0),_defineProperty(this,"arkConfig",void 0),_defineProperty(this,"cmdArgs",[]),_defineProperty(this,"logger",void 0),_defineProperty(this,"throwArkTsCompilerError",void 0),_defineProperty(this,"hashJsonFilePath",void 0),_defineProperty(this,"genAbcScriptPath",void 0),_defineProperty(this,"triggerAsync",void 0),_defineProperty(this,"triggerEndSignal",void 0),this.projectConfig=Object.assign(e.share.arkProjectConfig,e.share.projectConfig),this.arkConfig=(0,_process_ark_config.initArkConfig)(this.projectConfig),this.cmdArgs=this.initCmdEnv(),this.logger=e.share.getLogger(_ark_define.GEN_ABC_PLUGIN_NAME),this.throwArkTsCompilerError=e.share.throwArkTsCompilerError,this.hashJsonFilePath=this.genHashJsonFilePath(),this.genAbcScriptPath=_path.default.resolve(__dirname,_ark_define.GEN_ABC_SCRIPT),this.triggerAsync=e.async,this.triggerEndSignal=e.signal}initCmdEnv(){let e=[];var i;return(0,_ark_utils.isTs2Abc)(this.projectConfig)?(i=this.arkConfig.ts2abcPath,(0,_utils.validateFilePathLength)(i,this.logger),e=[""+this.arkConfig.nodePath,"--expose-gc",i='"'+i+'"'],this.arkConfig.isDebug&&e.push("--debug"),(0,_ark_utils.isOhModules)(this.projectConfig)&&e.push("--oh-modules")):(0,_ark_utils.isEs2Abc)(this.projectConfig)?(i=this.arkConfig.es2abcPath,(0,_utils.validateFilePathLength)(i,this.logger),e=['"'+i+'"'],this.arkConfig.isDebug&&e.push("--debug-info")):this.throwArkTsCompilerError("ArkTS:ERROR please set panda mode"),e}genHashJsonFilePath(){var e;return this.projectConfig.cachePath?_fs.default.existsSync(this.projectConfig.cachePath)&&_fs.default.statSync(this.projectConfig.cachePath).isDirectory()?(e=_path.default.join((0,_utils2.genTemporaryModuleCacheDirectoryForBundle)(this.projectConfig),_ark_define.HASH_FILE_NAME),(0,_utils.validateFilePathLength)(e,this.logger),(0,_utils.mkdirsSync)(_path.default.dirname(e)),e):(this.logger.debug(_ark_define.blue,"ArkTS:WARN cache path does bit exist or is not directory",_ark_define.reset),""):(this.logger.debug(_ark_define.blue,"ArkTS:WARN cache path not specified",_ark_define.reset),"")}setupCluster(e){e.removeAllListeners("exit"),(0,_utils.nodeLargeOrEqualTargetVersion)(16)?e.setupPrimary({exec:this.genAbcScriptPath,windowsHide:!0}):e.setupMaster({exec:this.genAbcScriptPath,windowsHide:!0})}needRemoveCacheInfo(e){return e.cache.get(_ark_define.IS_CACHE_INVALID)||void 0===e.cache.get(_ark_define.IS_CACHE_INVALID)}removeCacheInfo(e){this.needRemoveCacheInfo(e)&&this.removeCompilationCache(),e.cache.set(_ark_define.IS_CACHE_INVALID,!1)}}exports.CommonMode=CommonMode;