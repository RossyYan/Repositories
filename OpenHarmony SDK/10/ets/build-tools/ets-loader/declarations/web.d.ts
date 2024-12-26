/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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
declare type WebviewController = import('../../../api/@ohos.web.webview').default.WebviewController;
/**
 * Enum type supplied to {@link getMessageLevel} for receiving the console log level of JavaScript.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
declare enum MessageLevel {
    /**
     * Debug level.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    Debug,
    /**
     * Error level.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    Error,
    /**
     * Info level.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    Info,
    /**
     * Log level.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    Log,
    /**
     * Warn level.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    Warn
}
/**
 * The Web's behavior to load from HTTP or HTTPS. Defaults to MixedMode.None.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
declare enum MixedMode {
    /**
     * Allows all sources.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    All,
    /**
     * Allows sources Compatibly.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    Compatible,
    /**
     * Don't allow unsecure sources from a secure origin.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    None
}
/**
 * Enum type supplied to {@link getHitTest} for indicating the cursor node HitTest.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
declare enum HitTestType {
    /**
     * The edit text.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    EditText,
    /**
     * The email address.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    Email,
    /**
     * The HTML::a tag with src=http.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    HttpAnchor,
    /**
     * The HTML::a tag with src=http + HTML::img.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    HttpAnchorImg,
    /**
     * The HTML::img tag.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    Img,
    /**
     * The map address.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    Map,
    /**
     * The phone number.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    Phone,
    /**
     * Other unknown HitTest.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    Unknown
}
/**
 * Enum type supplied to {@link cacheMode} for setting the Web cache mode.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
declare enum CacheMode {
    /**
     * load cache when they are available and not expired, otherwise load online.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    Default,
    /**
     * load cache when they are available, otherwise load online.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    None,
    /**
     * Load cache first, then online.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    Online,
    /**
     * load cache and not online.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    Only
}
/**
 * Enum type supplied to {@link darkMode} for setting the web dark mode.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
declare enum WebDarkMode {
    /**
     * Disable the web dark mode.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    Off,
    /**
     * Enable the web dark mode.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    On,
    /**
     * Make web dark mode follow the system.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    Auto
}
/**
 * Enum type supplied to {@link captureMode} for setting the web capture mode.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 10
 */
declare enum WebCaptureMode {
    /**
     * The home screen.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    HOME_SCREEN = 0
}
/**
 * Defines the Media Options.
 *
 * @interface WebMediaOptions
 * @syscap SystemCapability.Web.Webview.Core
 * @since 10
 */
declare interface WebMediaOptions {
    /**
     * The time interval for audio playback to resume.
     *
     * @type { ?number }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    resumeInterval?: number;
    /**
     * Whether the audio of each web is exclusive.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    audioExclusive?: boolean;
}
/**
 * Defines the screen capture configuration.
 *
 * @interface ScreenCaptureConfig
 * @syscap SystemCapability.Web.Webview.Core
 * @since 10
 */
declare interface ScreenCaptureConfig {
    /**
     * The mode for selecting the recording area.
     *
     * @type { WebCaptureMode }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    captureMode: WebCaptureMode;
}
/**
 * Define the handler to exit the full screen mode, related to the {@link onFullScreenEnter} event.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
declare class FullScreenExitHandler {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    constructor();
    /**
     * Exit the full screen mode.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    exitFullScreen(): void;
}
/**
 * Enum type supplied to {@link renderExitReason} when onRenderExited being called.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
declare enum RenderExitReason {
    /**
     * Render process non-zero exit status.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    ProcessAbnormalTermination,
    /**
     * SIGKILL or task manager kill.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    ProcessWasKilled,
    /**
     * Segmentation fault.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    ProcessCrashed,
    /**
     * Out of memory.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    ProcessOom,
    /**
     * Unknown reason.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    ProcessExitUnknown
}
/**
 * Enum type supplied to {@link error} when onSslErrorEventReceive being called.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
declare enum SslError {
    /**
     * General error.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    Invalid,
    /**
     * Hostname mismatch.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    HostMismatch,
    /**
     * The certificate date is invalid.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    DateInvalid,
    /**
     * The certificate authority is not trusted.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    Untrusted
}
/**
 * Enum type supplied to {@link FileSelectorParam} when onFileSelectorShow being called.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
declare enum FileSelectorMode {
    /**
     * Allows single file to be selected.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    FileOpenMode,
    /**
     * Allows multiple files to be selected.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    FileOpenMultipleMode,
    /**
     * Allows file folders to be selected.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    FileOpenFolderMode,
    /**
     * Allows select files to save.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    FileSaveMode
}
/**
 * Encompassed message information as parameters to {@link onFileSelectorShow} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
declare class FileSelectorParam {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    constructor();
    /**
      * Gets the title of this file selector.
      * @returns { string } Return the title of this file selector.
      * @syscap SystemCapability.Web.Webview.Core
      * @since 9
      */
    getTitle(): string;
    /**
      * Gets the FileSelectorMode of this file selector.
      * @returns { FileSelectorMode } Return the FileSelectorMode of this file selector.
      * @syscap SystemCapability.Web.Webview.Core
      * @since 9
      */
    getMode(): FileSelectorMode;
    /**
      * Gets an array of acceptable MMIE type.
      * @returns { Array<string> } Return an array of acceptable MMIE type.
      * @syscap SystemCapability.Web.Webview.Core
      * @since 9
      */
    getAcceptType(): Array<string>;
    /**
     * Gets whether this file selector use a live media captured value.
     *
     * @returns { boolean } Return {@code true} if captured media; return {@code false} otherwise.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    isCapture(): boolean;
}
/**
 * Defines the js result.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
declare class JsResult {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    constructor();
    /**
     * Handle the user's JavaScript result if cancel the dialog.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    handleCancel(): void;
    /**
     * Handle the user's JavaScript result if confirm the dialog.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    handleConfirm(): void;
    /**
     * Handle the user's JavaScript result if confirm the prompt dialog.
     *
     * @param { string } result
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    handlePromptConfirm(result: string): void;
}
/**
 * Defines the file selector result, related to {@link onFileSelectorShow} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
declare class FileSelectorResult {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    constructor();
    /**
     * select a list of files.
     *
     * @param { Array<string> } fileList
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    handleFileList(fileList: Array<string>): void;
}
/**
 * Defines the http auth request result, related to {@link onHttpAuthRequest} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
declare class HttpAuthHandler {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    constructor();
    /**
     * confirm.
     *
     * @param { string } userName
     * @param { string } password
     * @returns { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    confirm(userName: string, password: string): boolean;
    /**
     * cancel.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    cancel(): void;
    /**
     * isHttpAuthInfoSaved.
     *
     * @returns { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    isHttpAuthInfoSaved(): boolean;
}
/**
 * Defines the ssl error request result, related to {@link onSslErrorEventReceive} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
declare class SslErrorHandler {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    constructor();
    /**
     * Confirm to use the SSL certificate.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    handleConfirm(): void;
    /**
     * Cancel this request.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    handleCancel(): void;
}
/**
 * Defines the client certificate request result, related to {@link onClientAuthenticationRequest} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
declare class ClientAuthenticationHandler {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    constructor();
    /**
     * Confirm to use the specified private key and client certificate chain.
     *
     * @param { string } priKeyFile - The file that store private key.
     * @param { string } certChainFile - The file that store client certificate chain.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    confirm(priKeyFile: string, certChainFile: string): void;
    /**
     * Confirm to use the authUri.The authUri can be obtained from certificate management.
     *
     * @param { string } authUri is the key of credentials.The credentials contain sign info and client certificates info.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    confirm(authUri: string): void;
    /**
     * Cancel this certificate request.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    cancel(): void;
    /**
     * Ignore this certificate request temporarily.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    ignore(): void;
}
/**
 * Defines the accessible resource type, related to {@link onPermissionRequest} method.
 *
 * @enum { string }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
declare enum ProtectedResourceType {
    /**
     * The MidiSysex resource.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    MidiSysex = 'TYPE_MIDI_SYSEX',
    /**
     * The video capture resource, such as camera.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    VIDEO_CAPTURE = 'TYPE_VIDEO_CAPTURE',
    /**
     * The audio capture resource, such as microphone.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    AUDIO_CAPTURE = 'TYPE_AUDIO_CAPTURE'
}
/**
 * Defines the onPermissionRequest callback, related to {@link onPermissionRequest} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
declare class PermissionRequest {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    constructor();
    /**
     * Reject the request.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    deny(): void;
    /**
     * Gets the source if the webpage that attempted to access the restricted resource.
     *
     * @returns { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    getOrigin(): string;
    /**
     * Gets the resource that the webpage is trying to access.
     *
     * @returns { Array<string> }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    getAccessibleResource(): Array<string>;
    /**
     * Grant origin access to a given resource.
     *
     * @param { Array<string> } resources
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    grant(resources: Array<string>): void;
}
/**
 * Defines the onScreenCapture callback, related to {@link onScreenCapture} method.
 * @syscap SystemCapability.Web.Webview.Core
 * @since 10
 */
declare class ScreenCaptureHandler {
    /**
     * Constructor.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    constructor();
    /**
     * Gets the source of the webpage that attempted to access the restricted resource.
     *
     * @returns { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    getOrigin(): string;
    /**
     * Grant origin access to a given resource.
     * @param { ScreenCaptureConfig } config The screen capture configuration.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    grant(config: ScreenCaptureConfig): void;
    /**
     * Reject the request.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    deny(): void;
}
/**
 * Defines the onDataResubmission callback, related to {@link onDataResubmission} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
declare class DataResubmissionHandler {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    constructor();
    /**
     * Resend related form data.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    resend(): void;
    /**
     * Do not resend related form data.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    cancel(): void;
}
/**
 * Defines the onWindowNew callback, related to {@link onWindowNew} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
declare class ControllerHandler {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    constructor();
    /**
     * Set WebController object.
     *
     * @param { WebviewController } controller
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    setWebController(controller: WebviewController): void;
}
/**
 * Defines the context menu source type, related to {@link onContextMenuShow} method.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
declare enum ContextMenuSourceType {
    /**
     * Other source types.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    None,
    /**
     * Mouse.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    Mouse,
    /**
     * Long press.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    LongPress
}
/**
 * Defines the context menu media type, related to {@link onContextMenuShow} method.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
declare enum ContextMenuMediaType {
    /**
     * Not a special node or other media types.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    None,
    /**
     * Image.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    Image
}
/**
 * Defines the context menu input field type, related to {@link onContextMenuShow} method.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
declare enum ContextMenuInputFieldType {
    /**
     * Not an input field.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    None,
    /**
     * The plain text type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    PlainText,
    /**
     * The password type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    Password,
    /**
     * The number type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    Number,
    /**
     * The telephone type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    Telephone,
    /**
     * Other types.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    Other
}
/**
 * Defines the context menu supported event bit flags, related to {@link onContextMenuShow} method.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
declare enum ContextMenuEditStateFlags {
    NONE = 0,
    CAN_CUT = 1 << 0,
    CAN_COPY = 1 << 1,
    CAN_PASTE = 1 << 2,
    CAN_SELECT_ALL = 1 << 3
}
/**
 * Defines the context menu param, related to {@link WebContextMenuParam} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
declare class WebContextMenuParam {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    constructor();
    /**
     * Horizontal offset coordinates of the menu within the Web component.
     *
     * @returns { number } The context menu x coordinate.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    x(): number;
    /**
     * Vertical offset coordinates for the menu within the Web component.
     *
     * @returns { number } The context menu y coordinate.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    y(): number;
    /**
     * If the long-press location is the link returns the link's security-checked URL.
     *
     * @returns { string } If relate to a link return link url, else return null.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    getLinkUrl(): string;
    /**
     * If the long-press location is the link returns the link's original URL.
     *
     * @returns { string } If relate to a link return unfiltered link url, else return null.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    getUnfilteredLinkUrl(): string;
    /**
     * Returns the SRC URL if the selected element has a SRC attribute.
     *
     * @returns { string } If this context menu is "src" attribute, return link url, else return null.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    getSourceUrl(): string;
    /**
     * Long press menu location has image content.
     *
     * @returns { boolean } Return whether this context menu has image content.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    existsImageContents(): boolean;
    /**
     * Returns the type of context node.
     *
     * @returns { ContextMenuMediaType } Returns the type of context node.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    getMediaType(): ContextMenuMediaType;
    /**
     * Returns the text of the selection.
     *
     * @returns { string } Returns the text of the selection.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    getSelectionText(): string;
    /**
     * Returns the context menu source type.
     *
     * @returns { ContextMenuSourceType }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    getSourceType(): ContextMenuSourceType;
    /**
     * Returns input field type if the context menu was invoked on an input field.
     *
     * @returns { ContextMenuInputFieldType } Input field type if the context menu was invoked on an input field.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    getInputFieldType(): ContextMenuInputFieldType;
    /**
     * Returns whether the context is editable.
     *
     * @returns { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    isEditable(): boolean;
    /**
     * Returns the context editable flags {@link ContextMenuEditStateFlags}.
     *
     * @returns { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    getEditStateFlags(): number;
}
/**
 * Defines the context menu result, related to {@link WebContextMenuResult} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
declare class WebContextMenuResult {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    constructor();
    /**
     * When close context menu without other call in WebContextMenuResult,
     * User should call this function to close menu
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    closeContextMenu(): void;
    /**
     * If WebContextMenuParam has image content, this function will copy image related to this context menu.
     * If WebContextMenuParam has no image content, this function will do nothing.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    copyImage(): void;
    /**
     * Executes the copy operation related to this context menu.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    copy(): void;
    /**
     * Executes the paste operation related to this context menu.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    paste(): void;
    /**
     * Executes the cut operation related to this context menu.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    cut(): void;
    /**
     * Executes the selectAll operation related to this context menu.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    selectAll(): void;
}
/**
 * Encompassed message information as parameters to {@link onConsole} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
declare class ConsoleMessage {
    /**
     * Constructor.
     *
     * @param { string } message - The console message.
     * @param { string } sourceId - The Web source file's path and name.
     * @param { number } lineNumber - The line number of the console message.
     * @param { MessageLevel } messageLevel - The console log level.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.ConsoleMessage#constructor
     */
    constructor(message: string, sourceId: string, lineNumber: number, messageLevel: MessageLevel);
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    constructor();
    /**
     * Gets the message of a console message.
     *
     * @returns { string } Return the message of a console message.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    getMessage(): string;
    /**
     * Gets the Web source file's path and name of a console message.
     *
     * @returns { string } Return the Web source file's path and name of a console message.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    getSourceId(): string;
    /**
     * Gets the line number of a console message.
     *
     * @returns { number } Return the line number of a console message.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    getLineNumber(): number;
    /**
     * Gets the message level of a console message.
     *
     * @returns { MessageLevel } Return the message level of a console message, which can be {@link MessageLevel}.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    getMessageLevel(): MessageLevel;
}
/**
 * Encompassed message information as parameters to {@link onConsole} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
/**
 * Defines the Web resource request.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
/**
 * Defines the Web resource request.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @since 10
 */
declare class WebResourceRequest {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @since 10
     */
    constructor();
    /**
     * Gets request headers.
     *
     * @returns { Array<Header> } Return the request headers
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    getRequestHeader(): Array<Header>;
    /**
     * Gets the request URL.
     *
     * @returns { string } Return the request URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Gets the request URL.
     *
     * @returns { string } Return the request URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @since 10
     */
    getRequestUrl(): string;
    /**
     * Check whether the request is associated with gesture.
     *
     * @returns { boolean } Return {@code true} if the request is associated with gesture;return {@code false} otherwise.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    isRequestGesture(): boolean;
    /**
     * Check whether the request is for getting the main frame.
     *
     * @returns { boolean } Return {@code true} if the request is associated with gesture for getting the main frame; return {@code false} otherwise.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    isMainFrame(): boolean;
    /**
     * Check whether the request redirects.
     *
     * @returns { boolean } Return {@code true} if the request redirects; return {@code false} otherwise.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    isRedirect(): boolean;
    /**
     * Get request method.
     *
     * @returns { string } Return the request method.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    getRequestMethod(): string;
}
/**
 * Defines the Web resource response.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
declare class WebResourceResponse {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    constructor();
    /**
     * Gets the response data.
     *
     * @returns { string } Return the response data.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    getResponseData(): string;
    /**
     * Gets the response encoding.
     *
     * @returns { string } Return the response encoding.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    getResponseEncoding(): string;
    /**
     * Gets the response MIME type.
     *
     * @returns { string } Return the response MIME type.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    getResponseMimeType(): string;
    /**
     * Gets the reason message.
     *
     * @returns { string } Return the reason message.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    getReasonMessage(): string;
    /**
     * Gets the response headers.
     *
     * @returns { Array<Header> } Return the response headers.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    getResponseHeader(): Array<Header>;
    /**
     * Gets the response code.
     *
     * @returns { number } Return the response code.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    getResponseCode(): number;
    /**
     * Sets the response data.
     *
     * @param { string | number | Resource } data - the response data.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Sets the response data.
     * Sets the response data.
     * Sets the response data.
     * Number represents file handle
     *
     * @param { string | number | Resource } data - the response data.
     *                                              string type indicate strings in HTML format.
     *                                              number type indicate file handle.
     *                                              Resource type indicate $rawfile resource.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    setResponseData(data: string | number | Resource);
    /**
     * Sets the response encoding.
     *
     * @param { string } encoding the response encoding.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    setResponseEncoding(encoding: string);
    /**
     * Sets the response MIME type.
     *
     * @param { string } mimeType the response MIME type.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    setResponseMimeType(mimeType: string);
    /**
     * Sets the reason message.
     *
     * @param { string } reason the reason message.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    setReasonMessage(reason: string);
    /**
     * Sets the response headers.
     *
     * @param { Array<Header> } header the response headers.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    setResponseHeader(header: Array<Header>);
    /**
     * Sets the response code.
     *
     * @param { number } code the response code.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    setResponseCode(code: number);
    /**
     * Sets the response is ready or not.
     *
     * @param { boolean } IsReady whether the response is ready.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    setResponseIsReady(IsReady: boolean);
}
/**
 * Defines the Web's request/response header.
 *
 * @interface Header
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
declare interface Header {
    /**
     * Gets the key of the request/response header.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    headerKey: string;
    /**
     * Gets the value of the request/response header.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    headerValue: string;
}
/**
 * Defines the Web resource error.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
/**
 * Defines the Web resource error.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @since 10
 */
declare class WebResourceError {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @since 10
     */
    constructor();
    /**
     * Gets the info of the Web resource error.
     *
     * @returns { string } Return the info of the Web resource error.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Gets the info of the Web resource error.
     *
     * @returns { string } Return the info of the Web resource error.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @since 10
     */
    getErrorInfo(): string;
    /**
     * Gets the code of the Web resource error.
     *
     * @returns { number } Return the code of the Web resource error.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Gets the code of the Web resource error.
     *
     * @returns { number } Return the code of the Web resource error.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @since 10
     */
    getErrorCode(): number;
}
/**
 * Defines the js geolocation request.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
declare class JsGeolocation {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    constructor();
    /**
     * Report the geolocation permission status from users.
     *
     * @param { string } origin - The origin that ask for the geolocation permission.
     * @param { boolean } allow - The geolocation permission status.
     * @param { boolean } retain - Whether to allow the geolocation permission status to be saved to the system.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    invoke(origin: string, allow: boolean, retain: boolean): void;
}
/**
 * Defines the Web cookie.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
declare class WebCookie {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    constructor();
    /**
     * Sets the cookie.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.webview.webview.WebCookieManager#setCookie
     */
    setCookie();
    /**
     * Saves the cookies.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.webview.webview.WebCookieManager#saveCookieAsync
     */
    saveCookie();
}
/**
 * Defines the Web controller.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 * @deprecated since 9
 * @useinstead ohos.web.webview.webview.WebviewController
 */
declare class WebController {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     */
    constructor();
    /**
     * Let the Web inactive.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.webview.webview.WebviewController#onInactive
     */
    onInactive(): void;
    /**
     * Let the Web active.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.webview.webview.WebviewController#onActive
     */
    onActive(): void;
    /**
     * Let the Web zoom by.
     *
     * @param { number } factor The zoom factor.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.webview.webview.WebviewController#zoom
     */
    zoom(factor: number): void;
    /**
     * Clears the history in the Web.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.webview.webview.WebviewController#clearHistory
     */
    clearHistory(): void;
    /**
     * Loads a piece of code and execute JS code in the context of the currently displayed page.
     *
     * @param { object } options The options with a piece of code and a callback.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.webview.webview.WebviewController#runJavaScript
     */
    runJavaScript(options: {
        script: string;
        callback?: (result: string) => void;
    });
    /**
     * Loads the data or URL.
     *
     * @param { object } options The options with the data or URL and other information.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.webview.webview.WebviewController#loadData
     */
    loadData(options: {
        data: string;
        mimeType: string;
        encoding: string;
        baseUrl?: string;
        historyUrl?: string;
    });
    /**
     * Loads the given URL.
     *
     * @param { object } options The options with the URL and other information.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.webview.webview.WebviewController#loadUrl
     */
    loadUrl(options: {
        url: string | Resource;
        headers?: Array<Header>;
    });
    /**
     * refreshes the current URL.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.webview.webview.WebviewController#refresh
     */
    refresh();
    /**
     * Stops the current load.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.webview.webview.WebviewController#stop
     */
    stop();
    /**
     * Registers the JavaScript object and method list.
     *
     * @param { object } options - The option with the JavaScript object and method list.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.webview.webview.WebviewController#registerJavaScriptProxy
     */
    registerJavaScriptProxy(options: {
        object: object;
        name: string;
        methodList: Array<string>;
    });
    /**
     * Deletes a registered JavaScript object with given name.
     *
     * @param { string } name - The name of a registered JavaScript object to be deleted.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.webview.webview.WebviewController#deleteJavaScriptRegister
     */
    deleteJavaScriptRegister(name: string);
    /**
     * Gets the type of HitTest.
     *
     * @returns { HitTestType } The type of HitTest.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.webview.webview.WebviewController#getHitTest
     */
    getHitTest(): HitTestType;
    /**
     * Gets the request focus.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.webview.webview.WebviewController#requestFocus
     */
    requestFocus();
    /**
     * Checks whether the web page can go back.
     *
     * @returns { boolean } Whether the web page can go back.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.webview.webview.WebviewController#accessBackward
     */
    accessBackward(): boolean;
    /**
     * Checks whether the web page can go forward.
     *
     * @returns { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.webview.webview.WebviewController#accessForward
     */
    accessForward(): boolean;
    /**
     * Checks whether the web page can go back or forward the given number of steps.
     *
     * @param { number } step The number of steps.
     * @returns { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.webview.webview.WebviewController#accessStep
     */
    accessStep(step: number): boolean;
    /**
     * Goes back in the history of the web page.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.webview.webview.WebviewController#backward
     */
    backward();
    /**
     * Goes forward in the history of the web page.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.webview.webview.WebviewController#forward
     */
    forward();
    /**
     * Gets network cookie manager
     *
     * @returns { WebCookie }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     * @deprecated since 9
     */
    getCookieManager(): WebCookie;
}
/**
 * Defines the Web options.
 *
 * @interface WebOptions
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
/**
 * Defines the Web options.
 *
 * @interface WebOptions
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @since 10
 */
declare interface WebOptions {
    /**
     * Sets the address of the web page to be displayed.
     *
     * @type { string | Resource }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Sets the address of the web page to be displayed.
     *
     * @type { string | Resource }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @since 10
     */
    src: string | Resource;
    /**
     * Sets the controller of the Web.
     *
     * @type { WebController | WebviewController }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Sets the controller of the Web.
     *
     * @type { WebController | WebviewController }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
    */
    /**
     * Sets the controller of the Web.
     *
     * @type { WebController | WebviewController }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @since 10
    */
    controller: WebController | WebviewController;
}
/**
 * Defines the Web interface.
 *
 * @interface WebInterface
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
/**
 * Defines the Web interface.
 *
 * @interface WebInterface
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @since 8
 */
interface WebInterface {
    /**
     * Sets Value.
     *
     * @param { WebOptions } value
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Sets Value.
     *
     * @param { WebOptions } value
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @since 10
     */
    (value: WebOptions): WebAttribute;
}
/**
 * Defines the Web attribute functions.
 *
 * @extends CommonMethod<WebAttribute>
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
/**
 * Defines the Web attribute functions.
 *
 * @extends CommonMethod<WebAttribute>
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @since 8
 */
declare class WebAttribute extends CommonMethod<WebAttribute> {
    /**
     * Sets whether the Web allows JavaScript scripts to execute.
     *
     * @param { boolean } javaScriptAccess - {@code true} means the Web can allows JavaScript scripts to execute; {@code false} otherwise.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Sets whether the Web allows JavaScript scripts to execute.
     *
     * @param { boolean } javaScriptAccess - {@code true} means the Web can allows JavaScript scripts to execute; {@code false} otherwise.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @since 10
     */
    javaScriptAccess(javaScriptAccess: boolean): WebAttribute;
    /**
     * Sets whether enable local file system access in Web.
     *
     * @param { boolean } fileAccess - {@code true} means enable local file system access in Web; {@code false} otherwise.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    fileAccess(fileAccess: boolean): WebAttribute;
    /**
     * Sets whether to allow image resources to be loaded from the network.
     *
     * @param { boolean } onlineImageAccess - {@code true} means the Web can allow image resources to be loaded from the network;
     * {@code false} otherwise.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    onlineImageAccess(onlineImageAccess: boolean): WebAttribute;
    /**
     * Sets whether to enable the DOM Storage API permission.
     *
     * @param { boolean } domStorageAccess - {@code true} means enable the DOM Storage API permission in Web; {@code false} otherwise.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    domStorageAccess(domStorageAccess: boolean): WebAttribute;
    /**
     * Sets whether the Web can automatically load image resources.
     *
     * @param { boolean } imageAccess - {@code true} means the Web can automatically load image resources; {@code false} otherwise.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    imageAccess(imageAccess: boolean): WebAttribute;
    /**
     * Sets how to load HTTP and HTTPS content.
     *
     * @param { MixedMode } mixedMode - The mixed mode, which can be {@link MixedMode}.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    mixedMode(mixedMode: MixedMode): WebAttribute;
    /**
     * Sets whether the Web supports zooming using gestures.
     *
     * @param { boolean } zoomAccess {@code true} means the Web supports zooming using gestures; {@code false} otherwise.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Sets whether the Web supports zooming using gestures.
     *
     * @param { boolean } zoomAccess {@code true} means the Web supports zooming using gestures; {@code false} otherwise.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @since 10
     */
    zoomAccess(zoomAccess: boolean): WebAttribute;
    /**
     * Sets whether to allow access to geographical locations.
     *
     * @param { boolean } geolocationAccess - {@code true} means the Web allows access to geographical locations; {@code false} otherwise.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    geolocationAccess(geolocationAccess: boolean): WebAttribute;
    /**
     * Injects the JavaScript object into window and invoke the function in window.
     *
     * @param { object } javaScriptProxy - The JavaScript object to be injected.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Injects the JavaScript object into window and invoke the function in window.
     *
     * @param { object } javaScriptProxy - The JavaScript object to be injected.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    javaScriptProxy(javaScriptProxy: {
        object: object;
        name: string;
        methodList: Array<string>;
        controller: WebController | WebviewController;
    }): WebAttribute;
    /**
     * Sets whether the Web should save the password.
     *
     * @param { boolean } password - {@code true} means the Web can save the password; {@code false} otherwise.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 10
     */
    password(password: boolean): WebAttribute;
    /**
     * Sets the mode of cache in Web.
     *
     * @param { CacheMode } cacheMode - The cache mode, which can be {@link CacheMode}.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    cacheMode(cacheMode: CacheMode): WebAttribute;
    /**
     * Sets the dark mode of Web.
     *
     * @param { WebDarkMode } mode - The dark mode, which can be {@link WebDarkMode}.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    darkMode(mode: WebDarkMode): WebAttribute;
    /**
     * Sets whether to enable forced dark algorithm when the web is in dark mode
     *
     * @param { boolean } access {@code true} means enable the force dark algorithm; {@code false} otherwise.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    forceDarkAccess(access: boolean): WebAttribute;
    /**
     * Sets the media options.
     *
     * @param { WebMediaOptions } options The media options, which can be {@link WebMediaOptions}.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    mediaOptions(options: WebMediaOptions): WebAttribute;
    /**
     * Sets whether the Web should save the table data.
     *
     * @param { boolean } tableData {@code true} means the Web can save the table data; {@code false} otherwise.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 10
     */
    tableData(tableData: boolean): WebAttribute;
    /**
     * Sets whether the Web access meta 'viewport' in HTML.
     *
     * @param { boolean } wideViewModeAccess {@code true} means the Web access meta 'viewport' in HTML; {@code false} otherwise.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 10
     */
    wideViewModeAccess(wideViewModeAccess: boolean): WebAttribute;
    /**
     * Sets whether the Web access overview mode.
     *
     * @param { boolean } overviewModeAccess {@code true} means the Web access overview mode; {@code false} otherwise.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    overviewModeAccess(overviewModeAccess: boolean): WebAttribute;
    /**
     * Sets the ratio of the text zoom.
     *
     * @param { number } textZoomAtio The ratio of the text zoom.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.WebAttribute#textZoomRatio
     */
    textZoomAtio(textZoomAtio: number): WebAttribute;
    /**
     * Sets the ratio of the text zoom.
     *
     * @param { number } textZoomRatio The ratio of the text zoom.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    textZoomRatio(textZoomRatio: number): WebAttribute;
    /**
     * Sets whether the Web access the database.
     *
     * @param { boolean } databaseAccess {@code true} means the Web access the database; {@code false} otherwise.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    databaseAccess(databaseAccess: boolean): WebAttribute;
    /**
     * Sets the initial scale for the Web.
     *
     * @param { number } percent the initial scale for the Web.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    initialScale(percent: number): WebAttribute;
    /**
     * Sets the Web's user agent.
     *
     * @param { string } userAgent The Web's user agent.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 10
     * @useinstead ohos.web.webview.webview.WebviewController#setCustomUserAgent
     */
    userAgent(userAgent: string): WebAttribute;
    /**
     * Triggered at the end of web page loading.
     *
     * @param { function } callback The triggered function at the end of web page loading.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Triggered at the end of web page loading.
     *
     * @param { function } callback The triggered function at the end of web page loading.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @since 10
     */
    onPageEnd(callback: (event?: {
        /**
         * The url of page.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @crossplatform
         * @since 10
         */
        url: string;
    }) => void): WebAttribute;
    /**
     * Triggered at the begin of web page loading.
     *
     * @param { function } callback The triggered function at the begin of web page loading.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Triggered at the begin of web page loading.
     *
     * @param { function } callback The triggered function at the begin of web page loading.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @since 10
     */
    onPageBegin(callback: (event?: {
        /**
         * The url of page.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @crossplatform
         * @since 10
         */
        url: string;
    }) => void): WebAttribute;
    /**
     * Triggered when the page loading progress changes.
     *
     * @param { function } callback The triggered function when the page loading progress changes.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    onProgressChange(callback: (event?: {
        newProgress: number;
    }) => void): WebAttribute;
    /**
     * Triggered when the title of the main application document changes.
     *
     * @param { function } callback The triggered function when the title of the main application document changes.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    onTitleReceive(callback: (event?: {
        title: string;
    }) => void): WebAttribute;
    /**
     * Triggered when requesting to hide the geolocation.
     *
     * @param { function } callback The triggered function when requesting to hide the geolocation permission.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    onGeolocationHide(callback: () => void): WebAttribute;
    /**
     * Triggered when requesting to show the geolocation permission.
     *
     * @param { function } callback The triggered function when requesting to show the geolocation permission.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    onGeolocationShow(callback: (event?: {
        origin: string;
        geolocation: JsGeolocation;
    }) => void): WebAttribute;
    /**
     * Triggered when the Web gets the focus.
     *
     * @param { function } callback The triggered function when the Web gets the focus.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    onRequestSelected(callback: () => void): WebAttribute;
    /**
     * Triggered when the Web wants to display a JavaScript alert() dialog.
     *
     * @param { function } callback The triggered function when the web page wants to display a JavaScript alert() dialog.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    onAlert(callback: (event?: {
        url: string;
        message: string;
        result: JsResult;
    }) => boolean): WebAttribute;
    /**
     * Triggered when the Web wants to confirm navigation from JavaScript onbeforeunload.
     *
     * @param { function } callback The triggered function when the web page wants to confirm navigation from JavaScript onbeforeunload.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    onBeforeUnload(callback: (event?: {
        url: string;
        message: string;
        result: JsResult;
    }) => boolean): WebAttribute;
    /**
     * Triggered when the web page wants to display a JavaScript confirm() dialog.
     *
     * @param { function } callback The Triggered function when the web page wants to display a JavaScript confirm() dialog.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    onConfirm(callback: (event?: {
        url: string;
        message: string;
        result: JsResult;
    }) => boolean): WebAttribute;
    /**
     * Triggered when the web page wants to display a JavaScript prompt() dialog.
     *
     * @param { function } callback The Triggered function when the web page wants to display a JavaScript prompt() dialog.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    onPrompt(callback: (event?: {
        url: string;
        message: string;
        value: string;
        result: JsResult;
    }) => boolean): WebAttribute;
    /**
     * Triggered when the web page receives a JavaScript console message.
     *
     * @param { function } callback The triggered function when the web page receives a JavaScript console message.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    onConsole(callback: (event?: {
        message: ConsoleMessage;
    }) => boolean): WebAttribute;
    /**
     * Triggered when the web page receives a web resource loading error.
     *
     * @param { function } callback The triggered function when the web page receives a web resource loading error.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Triggered when the web page receives a web resource loading error.
     *
     * @param { function } callback The triggered function when the web page receives a web resource loading error.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @since 10
     */
    onErrorReceive(callback: (event?: {
        /**
         * The url of error event.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @crossplatform
         * @since 10
         */
        request: WebResourceRequest;
        /**
         * The information of error event.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @crossplatform
         * @since 10
         */
        error: WebResourceError;
    }) => void): WebAttribute;
    /**
     * Triggered when the web page receives a web resource loading HTTP error.
     *
     * @param { function } callback The triggered function when the web page receives a web resource loading HTTP error.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    onHttpErrorReceive(callback: (event?: {
        request: WebResourceRequest;
        response: WebResourceResponse;
    }) => void): WebAttribute;
    /**
     * Triggered when starting to download.
     *
     * @param { function } callback The triggered function when starting to download.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    onDownloadStart(callback: (event?: {
        url: string;
        userAgent: string;
        contentDisposition: string;
        mimetype: string;
        contentLength: number;
    }) => void): WebAttribute;
    /**
     * Triggered when the Web page refreshes accessed history.
     *
     * @param { function } callback The triggered callback when the Web page refreshes accessed history.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    onRefreshAccessedHistory(callback: (event?: {
        url: string;
        isRefreshed: boolean;
    }) => void): WebAttribute;
    /**
     * Triggered when the URL loading is intercepted.
     *
     * @param { function } callback The triggered callback when the URL loading is intercepted.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 10
     * @useinstead ohos.web.WebAttribute#onLoadIntercept
     */
    onUrlLoadIntercept(callback: (event?: {
        data: string | WebResourceRequest;
    }) => boolean): WebAttribute;
    /**
     * Triggered when the Web page receives an ssl Error.
     *
     * @param { function } callback The triggered callback when the Web page receives an ssl Error.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.WebAttribute#onSslErrorEventReceive
     */
    onSslErrorReceive(callback: (event?: {
        handler: Function;
        error: object;
    }) => void): WebAttribute;
    /**
     * Triggered when the render process exits.
     *
     * @param { function } callback The triggered when the render process exits.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    onRenderExited(callback: (event?: {
        renderExitReason: RenderExitReason;
    }) => void): WebAttribute;
    /**
     * Triggered when the file selector shows.
     *
     * @param { function } callback The triggered when the file selector shows.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    onShowFileSelector(callback: (event?: {
        result: FileSelectorResult;
        fileSelector: FileSelectorParam;
    }) => boolean): WebAttribute;
    /**
     * Triggered when the render process exits.
     *
     * @param { function } callback The triggered when the render process exits.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.WebAttribute#onRenderExited
     */
    onRenderExited(callback: (event?: {
        detail: object;
    }) => boolean): WebAttribute;
    /**
     * Triggered when the file selector shows.
     *
     * @param { function } callback The triggered when the file selector shows.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.WebAttribute#onShowFileSelector
     */
    onFileSelectorShow(callback: (event?: {
        callback: Function;
        fileSelector: object;
    }) => void): WebAttribute;
    /**
     * Triggered when the url loading.
     *
     * @param { function } callback The triggered when the url loading.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    onResourceLoad(callback: (event: {
        url: string;
    }) => void): WebAttribute;
    /**
     * Triggered when the web component exit the full screen mode.
     *
     * @param { function } callback The triggered function when the web component exit the full screen mode.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    onFullScreenExit(callback: () => void): WebAttribute;
    /**
     * Triggered when the web component enter the full screen mode.
     *
     * @param { function } callback The triggered function when the web component enter the full screen mode.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    onFullScreenEnter(callback: (event: {
        handler: FullScreenExitHandler;
    }) => void): WebAttribute;
    /**
     * Triggered when the scale of WebView changed.
     *
     * @param { function } callback The triggered when the scale of WebView changed.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    onScaleChange(callback: (event: {
        oldScale: number;
        newScale: number;
    }) => void): WebAttribute;
    /**
     * Triggered when the browser needs credentials from the user.
     *
     * @param { function } callback The triggered when the browser needs credentials from the user.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    onHttpAuthRequest(callback: (event?: {
        handler: HttpAuthHandler;
        host: string;
        realm: string;
    }) => boolean): WebAttribute;
    /**
     * Triggered when the resources loading is intercepted.
     *
     * @param { function } callback The triggered callback when the resources loading is intercepted.
     * @returns { WebAttribute } If the response value is null, the Web will continue to load the resources. Otherwise, the response value will be used
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    onInterceptRequest(callback: (event?: {
        request: WebResourceRequest;
    }) => WebResourceResponse): WebAttribute;
    /**
     * Triggered when the host application that web content from the specified origin is attempting to access the resources.
     *
     * @param { function } callback The triggered callback when the host application that web content from the specified origin is
     *     attempting to access the resources.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    onPermissionRequest(callback: (event?: {
        request: PermissionRequest;
    }) => void): WebAttribute;
    /**
     * Triggered when the host application that web content from the specified origin is requesting to capture screen.
     * @param { function } callback The triggered callback when the host application that web content from the specified origin is
     *     requesting to capture screen.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    onScreenCaptureRequest(callback: (event?: {
        handler: ScreenCaptureHandler;
    }) => void): WebAttribute;
    /**
     * Triggered when called to allow custom display of the context menu.
     *
     * @param { function } callback The triggered callback when called to allow custom display of the context menu.
     * @returns { WebAttribute } If custom display return true.Otherwise, default display return false.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    onContextMenuShow(callback: (event?: {
        param: WebContextMenuParam;
        result: WebContextMenuResult;
    }) => boolean): WebAttribute;
    /**
     * Set whether media playback needs to be triggered by user gestures.
     *
     * @param { boolean } access True if it needs to be triggered manually by the user else false.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    mediaPlayGestureAccess(access: boolean): WebAttribute;
    /**
     * Notify search result to host application through onSearchResultReceive.
     *
     * @param { function } callback Function Triggered when the host application call searchAllAsync
     * or searchNext api on WebController and the request is valid.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    onSearchResultReceive(callback: (event?: {
        activeMatchOrdinal: number;
        numberOfMatches: number;
        isDoneCounting: boolean;
    }) => void): WebAttribute;
    /**
     * Triggered when the scroll bar slides to the specified position.
     *
     * @param { function } callback Function Triggered when the scroll bar slides to the specified position.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    onScroll(callback: (event: {
        xOffset: number;
        yOffset: number;
    }) => void): WebAttribute;
    /**
     * Triggered when the Web page receives an ssl Error.
     *
     * @param { function } callback The triggered callback when the Web page receives an ssl Error.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    onSslErrorEventReceive(callback: (event: {
        handler: SslErrorHandler;
        error: SslError;
    }) => void): WebAttribute;
    /**
     * Triggered when the Web page needs ssl client certificate from the user.
     *
     * @param { function } callback The triggered callback when needs ssl client certificate from the user.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    onClientAuthenticationRequest(callback: (event: {
        handler: ClientAuthenticationHandler;
        host: string;
        port: number;
        keyTypes: Array<string>;
        issuers: Array<string>;
    }) => void): WebAttribute;
    /**
     * Triggered when web page requires the user to create a window.
     *
     * @param { function } callback The triggered callback when web page requires the user to create a window.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    onWindowNew(callback: (event: {
        isAlert: boolean;
        isUserTrigger: boolean;
        targetUrl: string;
        handler: ControllerHandler;
    }) => void): WebAttribute;
    /**
     * Triggered when web page requires the user to close a window.
     *
     * @param { function } callback The triggered callback when web page requires the user to close a window.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    onWindowExit(callback: () => void): WebAttribute;
    /**
     * Set whether multiple windows are supported.
     *
     * @param { boolean } multiWindow True if it needs to be triggered manually by the user else false.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    multiWindowAccess(multiWindow: boolean): WebAttribute;
    /**
     * Key events notify the application before the WebView consumes them.
     *
     * @param { function } callback Key event info.
     * @returns { WebAttribute } True if the application consumes key events else false.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    onInterceptKeyEvent(callback: (event: KeyEvent) => boolean): WebAttribute;
    /**
     * Set the font of webview standard font library. The default font is "sans serif".
     *
     * @param { string } family Standard font set series.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    webStandardFont(family: string): WebAttribute;
    /**
     * Set the font of webview serif font library. The default font is "serif".
     *
     * @param { string } family Serif font set series.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    webSerifFont(family: string): WebAttribute;
    /**
     * Set the font of webview sans serif font library. The default font is "sans-serif".
     *
     * @param { string } family Sans serif font set series.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    webSansSerifFont(family: string): WebAttribute;
    /**
     * Set the font of webview fixed font library. The default font is "monospace".
     *
     * @param { string } family Fixed font set series.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    webFixedFont(family: string): WebAttribute;
    /**
     * Set the font of webview fantasy font library. The default font is "fantasy".
     *
     * @param { string } family fantasy font set series.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    webFantasyFont(family: string): WebAttribute;
    /**
     * Set the font of webview cursive font library. The default font is "cursive".
     *
     * @param { string } family Cursive font set series.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    webCursiveFont(family: string): WebAttribute;
    /**
     * Set the default fixed font value of webview. The default value is 13, ranging from 1 to 72.
     *
     * @param { number } size Font size.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    defaultFixedFontSize(size: number): WebAttribute;
    /**
    * Set the default font value of webview. The default value is 16, ranging from 1 to 72.
     *
     * @param { number } size Font size.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    defaultFontSize(size: number): WebAttribute;
    /**
    * Set the minimum value of webview font. The default value is 8, ranging from 1 to 72.
     *
     * @param { number } size Font size.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    minFontSize(size: number): WebAttribute;
    /**
    * Set the logical minimum value of webview font. The default value is 8, ranging from 1 to 72.
     *
     * @param { number } size Font size.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    minLogicalFontSize(size: number): WebAttribute;
    /**
     * Whether web component can load resource from network.
     *
     * @param { boolean } block {@code true} means it can't load resource from network; {@code false} otherwise.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    blockNetwork(block: boolean): WebAttribute;
    /**
     * Set whether paint horizontal scroll bar.
     *
     * @param { boolean } horizontalScrollBar True if it needs to paint horizontal scroll bar.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    horizontalScrollBarAccess(horizontalScrollBar: boolean): WebAttribute;
    /**
     * Set whether paint vertical scroll bar.
     *
     * @param { boolean } verticalScrollBar True if it needs to paint vertical scroll bar.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    verticalScrollBarAccess(verticalScrollBar: boolean): WebAttribute;
    /**
     * Triggered when the application receive the url of an apple-touch-icon.
     *
     * @param { function } callback The triggered callback when the application receive an new url of an
     * apple-touch-icon.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    onTouchIconUrlReceived(callback: (event: {
        url: string;
        precomposed: boolean;
    }) => void): WebAttribute;
    /**
     * Triggered when the application receive a new favicon for the current web page.
     *
     * @param { function } callback The triggered callback when the application receive a new favicon for the
     * current web page.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    onFaviconReceived(callback: (event: {
        favicon: PixelMap;
    }) => void): WebAttribute;
    /**
     * Triggered when previous page will no longer be drawn and next page begin to draw.
     *
     * @param { function } callback The triggered callback when previous page will no longer be drawn and next
     * page begin to draw.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    onPageVisible(callback: (event: {
        url: string;
    }) => void): WebAttribute;
    /**
     * Triggered when the form could be resubmitted.
     *
     * @param { function } callback The triggered callback to decision whether resend form data or not.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    onDataResubmitted(callback: (event: {
        handler: DataResubmissionHandler;
    }) => void): WebAttribute;
    /**
     * Set whether enable pinch smooth mode.
     *
     * @param { boolean } isEnabled True if it needs to enable smooth mode.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    pinchSmooth(isEnabled: boolean): WebAttribute;
    /**
     * Whether the window can be open automatically through JavaScript.
     *
     * @param { boolean } flag If it is true, the window can be opened automatically through JavaScript.
     * If it is false and user behavior, the window can be opened automatically through JavaScript.
     * Otherwise, the window cannot be opened.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    allowWindowOpenMethod(flag: boolean): WebAttribute;
    /**
     * Triggered when the playing state of audio on web page changed.
     *
     * @param { function } callback The playing state of audio on web page.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    onAudioStateChanged(callback: (event: {
        playing: boolean;
    }) => void): WebAttribute;
    /**
     * Triggered when the first content rendering of web page.
     *
     * @param { function } callback
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    onFirstContentfulPaint(callback: (event?: {
        navigationStartTick: number;
        firstContentfulPaintMs: number;
    }) => void): WebAttribute;
    /**
     * Triggered when the resources loading is intercepted.
     *
     * @param { function } callback The triggered callback when the resources loading is intercepted.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    onLoadIntercept(callback: (event: {
        data: WebResourceRequest;
    }) => boolean): WebAttribute;
    /**
     * Triggered when The controller is bound to the web component, this controller must be a WebviewController.
     * This callback can not use the interface about manipulating web pages.
     * @param { function } callback The triggered callback when web controller initialization success.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    onControllerAttached(callback: () => void): WebAttribute;
    /**
     * Triggered when the over scrolling.
     * @param { function } callback Function Triggered when the over scrolling.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    onOverScroll(callback: (event: {
        xOffset: number;
        yOffset: number;
    }) => void): WebAttribute;
}
/**
 * Defines Web Component.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
/**
 * Defines Web Component.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @since 10
 */
declare const Web: WebInterface;
/**
 * Defines Web Component instance.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
declare const WebInstance: WebAttribute;
