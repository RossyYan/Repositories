"use strict";function _newArrowCheck(e,T){if(e!==T)throw new TypeError("Cannot instantiate an arrow function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.forbiddenUseStateType=exports.STYLES_ATTRIBUTE=exports.SPECIFIC_CHILD_COMPONENT=exports.SINGLE_CHILD_COMPONENT=exports.NO_DEBUG_LINE_COMPONENT=exports.NEEDPOP_COMPONENT=exports.JS_BIND_COMPONENTS=exports.INTERFACE_NODE_SET=exports.INNER_STYLE_FUNCTION=exports.INNER_CUSTOM_BUILDER_METHOD=exports.INNER_COMPONENT_NAMES=exports.ID_ATTRS=exports.GLOBAL_STYLE_FUNCTION=exports.GLOBAL_CUSTOM_BUILDER_METHOD=exports.GESTURE_TYPE_NAMES=exports.GESTURE_ATTRS=exports.FORM_MAP=exports.EXTEND_ATTRIBUTE=exports.CUSTOM_BUILDER_PROPERTIES_WITHOUTKEY=exports.CUSTOM_BUILDER_PROPERTIES=exports.CUSTOM_BUILDER_METHOD=exports.CUSTOM_BUILDER_CONSTRUCTORS=exports.COMPONENT_MAP=exports.COMMON_ATTRS=exports.BUILDIN_STYLE_NAMES=exports.BUILDIN_CONTAINER_COMPONENT=exports.AUTOMIC_COMPONENT=void 0;const fs=require("fs"),path=require("path"),COMPONENTS="components",FORM_COMPONENTS="form_components",COMPONENT_MAP={},FORM_MAP=(exports.COMPONENT_MAP=COMPONENT_MAP,{});exports.FORM_MAP=FORM_MAP;let COMMON_ATTRS=new Set([]);exports.COMMON_ATTRS=COMMON_ATTRS,function(){for(const[E,e]of new Map([[""+COMPONENTS,"../"+COMPONENTS],[""+FORM_COMPONENTS,"../"+FORM_COMPONENTS]]).entries()){const N=path.join(__dirname,e);fs.readdirSync(N).forEach(function(e){var e=path.join(N,e),T=require(e);fs.statSync(e).isFile()&&(T.name?(e=T.name,delete T.name,E===COMPONENTS?COMPONENT_MAP[e]=T:E===FORM_COMPONENTS&&(FORM_MAP[e]=T)):E===COMPONENTS&&(exports.COMMON_ATTRS=COMMON_ATTRS=new Set(T.attrs)))})}}();const TRANSITION_COMMON_ATTRS=new Set(["slide","translate","scale","opacity"]),GESTURE_ATTRS=new Set(["gesture","parallelGesture","priorityGesture"]),ID_ATTRS=(exports.GESTURE_ATTRS=GESTURE_ATTRS,new Map),forbiddenUseStateType=(exports.ID_ATTRS=ID_ATTRS,new Set(["Scroller","SwiperScroller","VideoController","WebController","CustomDialogController","SwiperController","TabsController","CalendarController","AbilityController","XComponentController","CanvasRenderingContext2D","CanvasGradient","ImageBitmap","ImageData","Path2D","RenderingContextSettings","OffscreenCanvasRenderingContext2D","PatternLockController","TextAreaController","TextInputController","TextTimerController","SearchController"])),INNER_COMPONENT_NAMES=(exports.forbiddenUseStateType=forbiddenUseStateType,new Set),NO_DEBUG_LINE_COMPONENT=(exports.INNER_COMPONENT_NAMES=INNER_COMPONENT_NAMES,new Set),BUILDIN_CONTAINER_COMPONENT=(exports.NO_DEBUG_LINE_COMPONENT=NO_DEBUG_LINE_COMPONENT,new Set),BUILDIN_STYLE_NAMES=(exports.BUILDIN_CONTAINER_COMPONENT=BUILDIN_CONTAINER_COMPONENT,new Set([...COMMON_ATTRS,...GESTURE_ATTRS,...TRANSITION_COMMON_ATTRS])),AUTOMIC_COMPONENT=(exports.BUILDIN_STYLE_NAMES=BUILDIN_STYLE_NAMES,new Set),SINGLE_CHILD_COMPONENT=(exports.AUTOMIC_COMPONENT=AUTOMIC_COMPONENT,new Set),SPECIFIC_CHILD_COMPONENT=(exports.SINGLE_CHILD_COMPONENT=SINGLE_CHILD_COMPONENT,new Map),GESTURE_TYPE_NAMES=(exports.SPECIFIC_CHILD_COMPONENT=SPECIFIC_CHILD_COMPONENT,new Set(["TapGesture","LongPressGesture","PanGesture","PinchGesture","RotationGesture","GestureGroup","SwipeGesture"])),CUSTOM_BUILDER_METHOD=(exports.GESTURE_TYPE_NAMES=GESTURE_TYPE_NAMES,new Set),INNER_STYLE_FUNCTION=(exports.CUSTOM_BUILDER_METHOD=CUSTOM_BUILDER_METHOD,new Map),GLOBAL_STYLE_FUNCTION=(exports.INNER_STYLE_FUNCTION=INNER_STYLE_FUNCTION,new Map),EXTEND_ATTRIBUTE=(exports.GLOBAL_STYLE_FUNCTION=GLOBAL_STYLE_FUNCTION,new Map),STYLES_ATTRIBUTE=(exports.EXTEND_ATTRIBUTE=EXTEND_ATTRIBUTE,new Set),INTERFACE_NODE_SET=(exports.STYLES_ATTRIBUTE=STYLES_ATTRIBUTE,new Set),INNER_CUSTOM_BUILDER_METHOD=(exports.INTERFACE_NODE_SET=INTERFACE_NODE_SET,new Set),GLOBAL_CUSTOM_BUILDER_METHOD=(exports.INNER_CUSTOM_BUILDER_METHOD=INNER_CUSTOM_BUILDER_METHOD,new Set),JS_BIND_COMPONENTS=(exports.GLOBAL_CUSTOM_BUILDER_METHOD=GLOBAL_CUSTOM_BUILDER_METHOD,new Set(["ForEach","LazyForEach",...GESTURE_TYPE_NAMES,"Gesture","PanGestureOption","CustomDialogController","Storage","Scroller","SwiperController","TabsController","CalendarController","AbilityController","VideoController","WebController","XComponentController","CanvasRenderingContext2D","CanvasGradient","ImageBitmap","ImageData","Path2D","RenderingContextSettings","OffscreenCanvasRenderingContext2D","DatePickerDialog","TextPickerDialog","AlertDialog","ContextMenu","ActionSheet","PatternLockController","TimePickerDialog","CalendarPickerDialog"])),NEEDPOP_COMPONENT=(exports.JS_BIND_COMPONENTS=JS_BIND_COMPONENTS,new Set(["Blank","Search"])),CUSTOM_BUILDER_PROPERTIES=(exports.NEEDPOP_COMPONENT=NEEDPOP_COMPONENT,new Set(["background","bindPopup","bindMenu","bindContextMenu","title","menus","toolBar","tabBar","onDragStart","onItemDragStart","swipeAction","bindContentCover","bindSheet","navDestination","overlay","toolbarConfiguration","showUnit","customKeyboard","create"])),CUSTOM_BUILDER_PROPERTIES_WITHOUTKEY=(exports.CUSTOM_BUILDER_PROPERTIES=CUSTOM_BUILDER_PROPERTIES,new Set(["showUnit","create"])),CUSTOM_BUILDER_CONSTRUCTORS=(exports.CUSTOM_BUILDER_PROPERTIES_WITHOUTKEY=CUSTOM_BUILDER_PROPERTIES_WITHOUTKEY,new Set(["MenuItem","MenuItemGroup","Refresh","WaterFlow"]));exports.CUSTOM_BUILDER_CONSTRUCTORS=CUSTOM_BUILDER_CONSTRUCTORS,function(){var E=this;Object.keys(COMPONENT_MAP).forEach(function(e){var T=this;_newArrowCheck(this,E),INNER_COMPONENT_NAMES.add(e),JS_BIND_COMPONENTS.add(e),(COMPONENT_MAP[e].atomic?AUTOMIC_COMPONENT:BUILDIN_CONTAINER_COMPONENT).add(e),COMPONENT_MAP[e].single&&SINGLE_CHILD_COMPONENT.add(e),COMPONENT_MAP[e].children&&SPECIFIC_CHILD_COMPONENT.set(e,new Set([...COMPONENT_MAP[e].children])),COMPONENT_MAP[e].attrs&&COMPONENT_MAP[e].attrs.length&&COMPONENT_MAP[e].attrs.forEach(function(e){_newArrowCheck(this,T),BUILDIN_STYLE_NAMES.add(e)}.bind(this)),COMPONENT_MAP[e].noDebugLine&&NO_DEBUG_LINE_COMPONENT.add(e)}.bind(this))}();