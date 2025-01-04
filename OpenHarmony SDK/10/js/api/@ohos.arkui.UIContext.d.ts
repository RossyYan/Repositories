/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

/// <reference path="../component/common.d.ts" />
/// <reference path="../component/action_sheet.d.ts" />
/// <reference path="../component/alert_dialog.d.ts" />
/// <reference path="../component/date_picker.d.ts" />
/// <reference path="../component/time_picker.d.ts" />
/// <reference path="../component/text_picker.d.ts" />
import font from './@ohos.font';
import mediaQuery from './@ohos.mediaquery';
import type inspector from './@ohos.arkui.inspector';
import promptAction from './@ohos.promptAction';
import router from './@ohos.router';
import type componentUtils from './@ohos.arkui.componentUtils';
import type { AnimatorOptions, AnimatorResult } from './@ohos.animator';
import type { AsyncCallback } from './@ohos.base';
import { AnimateParam } from 'AnimateToParam';
import { ActionSheetOptions } from 'actionSheetParam';
import { AlertDialogParamWithConfirm, AlertDialogParamWithButtons, AlertDialogParamWithOptions } from 'AlertDialogParam';
import { DatePickerDialogOptions } from 'DatePickerDialogParam';
import { TimePickerDialogOptions } from 'TimePickerDialogParam';
import { TextPickerDialogOptions } from 'textPickerDialogParam';
/**
 * class Font
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
export class Font {
    /**
     * Register a customized font in the FontManager.
     *
     * @param { font.FontOptions } options - FontOptions
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    registerFont(options: font.FontOptions): void;
    /**
     * Gets a list of fonts supported by system.
     * @returns { Array<string> } A list of font names
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    getSystemFontList(): Array<string>;
    /**
     * Get font details according to the font name.
     * @param { string } fontName - font name
     * @returns { font.FontInfo } Returns the font info
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    getFontByName(fontName: string): font.FontInfo;
}
/**
 * class MediaQuery
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
export class MediaQuery {
    /**
     * Sets the media query criteria and returns the corresponding listening handle
     *
     * @param { string } condition - media conditions
     * @returns { mediaQuery.MediaQueryListener } the corresponding listening handle
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    matchMediaSync(condition: string): mediaQuery.MediaQueryListener;
}
/**
 * class UIInspector
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
export class UIInspector {
    /**
     * Sets the component after layout or draw criteria and returns the corresponding listening handle
     * @param { string } id - component id.
     * @returns { inspector.ComponentObserver } create listener for observer component event.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    createComponentObserver(id: string): inspector.ComponentObserver;
}
/**
 * class Router
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
export class Router {
    /**
     * Navigates to a specified page in the application based on the page URL and parameters.
     *
     * @param { router.RouterOptions } options - Options.
     * @param { AsyncCallback<void> } callback - the callback of pushUrl.
     * @throws { BusinessError } 401 - if the number of parameters is less than 1 or the type of the url parameter is not string.
     * @throws { BusinessError } 100001 - if UI execution context not found.
     * @throws { BusinessError } 100002 - if the uri is not exist.
     * @throws { BusinessError } 100003 - if the pages are pushed too much.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    pushUrl(options: router.RouterOptions, callback: AsyncCallback<void>): void;
    /**
     * Navigates to a specified page in the application based on the page URL and parameters.
     *
     * @param { router.RouterOptions } options - Options.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - if the number of parameters is less than 1 or the type of the url parameter is not string.
     * @throws { BusinessError } 100001 - if UI execution context not found.
     * @throws { BusinessError } 100002 - if the uri is not exist.
     * @throws { BusinessError } 100003 - if the pages are pushed too much.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    pushUrl(options: router.RouterOptions): Promise<void>;
    /**
     * Navigates to a specified page in the application based on the page URL and parameters.
     *
     * @param { router.RouterOptions } options - Options.
     * @param { router.RouterMode } mode - RouterMode.
     * @param { AsyncCallback<void> } callback - the callback of pushUrl.
     * @throws { BusinessError } 401 - if the number of parameters is less than 1 or the type of the url parameter is not string.
     * @throws { BusinessError } 100001 - if UI execution context not found.
     * @throws { BusinessError } 100002 - if the uri is not exist.
     * @throws { BusinessError } 100003 - if the pages are pushed too much.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    pushUrl(options: router.RouterOptions, mode: router.RouterMode, callback: AsyncCallback<void>): void;
    /**
     * Navigates to a specified page in the application based on the page URL and parameters.
     *
     * @param { router.RouterOptions } options - Options.
     * @param { router.RouterMode } mode - RouterMode.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - if the number of parameters is less than 1 or the type of the url parameter is not string.
     * @throws { BusinessError } 100001 - if UI execution context not found.
     * @throws { BusinessError } 100002 - if the uri is not exist.
     * @throws { BusinessError } 100003 - if the pages are pushed too much.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    pushUrl(options: router.RouterOptions, mode: router.RouterMode): Promise<void>;
    /**
     * Replaces the current page with another one in the application. The current page is destroyed after replacement.
     *
     * @param { router.RouterOptions } options - Options.
     * @param { AsyncCallback<void> } callback - the callback of replaceUrl.
     * @throws { BusinessError } 401 - if the number of parameters is less than 1 or the type of the url parameter is not string.
     * @throws { BusinessError } 100001 - if UI execution context not found, only throw in standard system.
     * @throws { BusinessError } 200002 - if the uri is not exist.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    replaceUrl(options: router.RouterOptions, callback: AsyncCallback<void>): void;
    /**
     * Replaces the current page with another one in the application. The current page is destroyed after replacement.
     *
     * @param { router.RouterOptions } options - Options.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - if the number of parameters is less than 1 or the type of the url parameter is not string.
     * @throws { BusinessError } 100001 - if UI execution context not found, only throw in standard system.
     * @throws { BusinessError } 200002 - if the uri is not exist.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    replaceUrl(options: router.RouterOptions): Promise<void>;
    /**
     * Replaces the current page with another one in the application. The current page is destroyed after replacement.
     *
     * @param { router.RouterOptions } options - Options.
     * @param { router.RouterMode } mode - RouterMode.
     * @param { AsyncCallback<void> } callback - the callback of replaceUrl.
     * @throws { BusinessError } 401 - if the number of parameters is less than 1 or the type of the url parameter is not string.
     * @throws { BusinessError } 100001 - if UI execution context not found, only throw in standard system.
     * @throws { BusinessError } 200002 - if the uri is not exist.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    replaceUrl(options: router.RouterOptions, mode: router.RouterMode, callback: AsyncCallback<void>): void;
    /**
     * Replaces the current page with another one in the application. The current page is destroyed after replacement.
     *
     * @param { router.RouterOptions } options - Options.
     * @param { router.RouterMode } mode - RouterMode.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - if the number of parameters is less than 1 or the type of the url parameter is not string.
     * @throws { BusinessError } 100001 - if can not get the delegate, only throw in standard system.
     * @throws { BusinessError } 200002 - if the uri is not exist.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    replaceUrl(options: router.RouterOptions, mode: router.RouterMode): Promise<void>;
    /**
     * Returns to the previous page or a specified page.
     *
     * @param { router.RouterOptions } options - Options.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    back(options?: router.RouterOptions): void;
    /**
     * Clears all historical pages and retains only the current page at the top of the stack.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    clear(): void;
    /**
     * Obtains the number of pages in the current stack.
     *
     * @returns { string } Number of pages in the stack. The maximum value is 32.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    getLength(): string;
    /**
     * Obtains information about the current page state.
     *
     * @returns { router.RouterState } Page state.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    getState(): router.RouterState;
    /**
     * Pop up alert dialog to ask whether to back.
     *
     * @param { router.EnableAlertOptions } options - Options.
     * @throws { BusinessError } 401 - if the type of the parameter is not object or the type of the message is not string.
     * @throws { BusinessError } 100001 - if UI execution context not found.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    showAlertBeforeBackPage(options: router.EnableAlertOptions): void;
    /**
     * Hide alert before back page.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    hideAlertBeforeBackPage(): void;
    /**
     * Obtains information about the current page params.
     *
     * @returns { Object } Page params.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    getParams(): Object;
    /**
     * Navigates to a specified page in the application based on the page URL and parameters.
     * @param { router.NamedRouterOptions } options - Options.
     * @param { AsyncCallback<void> } callback - the callback of pushNamedRoute.
     * @throws { BusinessError } 401 - if the number of parameters is less than 1 or the type of the url parameter is not string.
     * @throws { BusinessError } 100001 - if UI execution context not found.
     * @throws { BusinessError } 100003 - if the pages are pushed too much.
     * @throws { BusinessError } 100004 - if the named route is not exist.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    pushNamedRoute(options: router.NamedRouterOptions, callback: AsyncCallback<void>): void;
    /**
     * Navigates to a specified page in the application based on the page URL and parameters.
     * @param { router.NamedRouterOptions } options - Options.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - if the number of parameters is less than 1 or the type of the url parameter is not string.
     * @throws { BusinessError } 100001 - if UI execution context not found.
     * @throws { BusinessError } 100003 - if the pages are pushed too much.
     * @throws { BusinessError } 100004 - if the named route is not exist.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    pushNamedRoute(options: router.NamedRouterOptions): Promise<void>;
    /**
     * Navigates to a specified page in the application based on the page URL and parameters.
     * @param { router.NamedRouterOptions } options - Options.
     * @param { router.RouterMode } mode - RouterMode.
     * @param { AsyncCallback<void> } callback - the callback of pushNamedRoute.
     * @throws { BusinessError } 401 - if the number of parameters is less than 1 or the type of the url parameter is not string.
     * @throws { BusinessError } 100001 - if UI execution context not found.
     * @throws { BusinessError } 100003 - if the pages are pushed too much.
     * @throws { BusinessError } 100004 - if the named route is not exist.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
    */
    pushNamedRoute(options: router.NamedRouterOptions, mode: router.RouterMode, callback: AsyncCallback<void>): void;
    /**
     * Navigates to a specified page in the application based on the page URL and parameters.
     * @param { router.NamedRouterOptions } options - Options.
     * @param { router.RouterMode } mode - RouterMode.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - if the number of parameters is less than 1 or the type of the url parameter is not string.
     * @throws { BusinessError } 100001 - if UI execution context not found.
     * @throws { BusinessError } 100003 - if the pages are pushed too much.
     * @throws { BusinessError } 100004 - if the named route is not exist.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
    */
    pushNamedRoute(options: router.NamedRouterOptions, mode: router.RouterMode): Promise<void>;
    /**
     * Replaces the current page with another one in the application. The current page is destroyed after replacement.
     * @param { router.NamedRouterOptions } options - Options.
     * @param { AsyncCallback<void> } callback - the callback of replaceNamedRoute.
     * @throws { BusinessError } 401 - if the number of parameters is less than 1 or the type of the url parameter is not string.
     * @throws { BusinessError } 100001 - if UI execution context not found, only throw in standard system.
     * @throws { BusinessError } 100004 - if the named route is not exist.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    replaceNamedRoute(options: router.NamedRouterOptions, callback: AsyncCallback<void>): void;
    /**
     * Replaces the current page with another one in the application. The current page is destroyed after replacement.
     * @param { router.NamedRouterOptions } options - Options.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - if the number of parameters is less than 1 or the type of the url parameter is not string.
     * @throws { BusinessError } 100001 - if UI execution context not found, only throw in standard system.
     * @throws { BusinessError } 100004 - if the named route is not exist.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    replaceNamedRoute(options: router.NamedRouterOptions): Promise<void>;
    /**
     * Replaces the current page with another one in the application. The current page is destroyed after replacement.
     * @param { router.NamedRouterOptions } options - Options.
     * @param { router.RouterMode } mode - RouterMode.
     * @param { AsyncCallback<void> } callback - the callback of replaceNamedRoute.
     * @throws { BusinessError } 401 - if the number of parameters is less than 1 or the type of the url parameter is not string.
     * @throws { BusinessError } 100001 - if UI execution context not found, only throw in standard system.
     * @throws { BusinessError } 100004 - if the named route is not exist.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    replaceNamedRoute(options: router.NamedRouterOptions, mode: router.RouterMode, callback: AsyncCallback<void>): void;
    /**
     * Replaces the current page with another one in the application. The current page is destroyed after replacement.
     * @param { router.NamedRouterOptions } options - Options.
     * @param { router.RouterMode } mode - RouterMode.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - if the number of parameters is less than 1 or the type of the url parameter is not string.
     * @throws { BusinessError } 100001 - if can not get the delegate, only throw in standard system.
     * @throws { BusinessError } 100004 - if the named route is not exist.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    replaceNamedRoute(options: router.NamedRouterOptions, mode: router.RouterMode): Promise<void>;
}
/**
 * class PromptAction
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
export class PromptAction {
    /**
     * Displays the notification text.
     *
     * @param { promptAction.ShowToastOptions } options - Options.
     * @throws { BusinessError } 401 - if the type of message is incorrect.
     * @throws { BusinessError } 100001 - if UI execution context not found.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    showToast(options: promptAction.ShowToastOptions): void;
    /**
     * Displays the dialog box.
     *
     * @param { promptAction.ShowDialogOptions } options - Options.
     * @param { AsyncCallback<promptAction.ShowDialogSuccessResponse> } callback - the callback of showDialog.
     * @throws { BusinessError } 401 - if the number of parameters is not 1 or the type of parameters is incorrect.
     * @throws { BusinessError } 100001 - if UI execution context not found.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    showDialog(options: promptAction.ShowDialogOptions, callback: AsyncCallback<promptAction.ShowDialogSuccessResponse>): void;
    /**
     * Displays the dialog box.
     *
     * @param { promptAction.ShowDialogOptions } options - Options.
     * @returns { Promise<promptAction.ShowDialogSuccessResponse> } the promise returned by the function.
     * @throws { BusinessError } 401 - if the number of parameters is not 1 or the type of parameters is incorrect.
     * @throws { BusinessError } 100001 - if UI execution context not found.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    showDialog(options: promptAction.ShowDialogOptions): Promise<promptAction.ShowDialogSuccessResponse>;
    /**
     * Displays the menu.
     *
     * @param { promptAction.ActionMenuOptions } options - Options.
     * @param { promptAction.ActionMenuSuccessResponse } callback - the callback of showActionMenu.
     * @throws { BusinessError } 401 - if the number of parameters is not 1 or the type of parameters is incorrect.
     * @throws { BusinessError } 100001 - if UI execution context not found.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    showActionMenu(options: promptAction.ActionMenuOptions, callback: promptAction.ActionMenuSuccessResponse): void;
    /**
     * Displays the menu.
     *
     * @param { promptAction.ActionMenuOptions } options - Options.
     * @returns { Promise<promptAction.ActionMenuSuccessResponse> } callback - the callback of showActionMenu.
     * @throws { BusinessError } 401 - if the number of parameters is not 1 or the type of parameters is incorrect.
     * @throws { BusinessError } 100001 - if UI execution context not found.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    showActionMenu(options: promptAction.ActionMenuOptions): Promise<promptAction.ActionMenuSuccessResponse>;
}
/**
 * class ComponentUtils
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
export class ComponentUtils {
    /**
     * Provide the ability to obtain the coordinates and size of component drawing areas.
     *
     * @param { string } id - ID of the component whose attributes are to be obtained.
     * @returns { componentUtils.ComponentInfo } the object of ComponentInfo.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    getRectangleById(id: string): componentUtils.ComponentInfo;
}
/**
 * class UIContext
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
export class UIContext {
    /**
     * get object font.
     *
     * @returns { Font } object Font.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    getFont(): Font;
    /**
     * get object mediaQuery.
     *
     * @returns { MediaQuery } object MediaQuery.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    getMediaQuery(): MediaQuery;
    /**
     * get object UIInspector.
     * @returns { UIInspector } object UIInspector.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    getUIInspector(): UIInspector;
    /**
     * get object router.
     *
     * @returns { Router } object Router.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    getRouter(): Router;
    /**
     * get object PromptAction.
     *
     * @returns { PromptAction } object PromptAction.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    getPromptAction(): PromptAction;
    /**
     * get object ComponentUtils.
     * @returns { ComponentUtils } object ComponentUtils.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    getComponentUtils(): ComponentUtils;
    /**
     * Create an animator object for custom animation.
     *
     * @param { AnimatorOptions } options - Options.
     * @returns { AnimatorResult }
     * @throws { BusinessError } 401 - if parameter error.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    createAnimator(options: AnimatorOptions): AnimatorResult;
    /**
     * Defining animation function
     *
     * @param { AnimateParam } value - animateTo parameters.
     * @param { function } event
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    animateTo(value: AnimateParam, event: () => void): void;
    /**
     * alertDialog display.
     *
     * @param { AlertDialogParamWithConfirm | AlertDialogParamWithButtons | AlertDialogParamWithOptions } options - Options.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    showAlertDialog(options: AlertDialogParamWithConfirm | AlertDialogParamWithButtons | AlertDialogParamWithOptions): void;
    /**
     * actionSheet display.
     *
     * @param { ActionSheetOptions } value - Options.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    showActionSheet(value: ActionSheetOptions): void;
    /**
     * datePickerDialog display.
     *
     * @param { DatePickerDialogOptions } options - Options.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    showDatePickerDialog(options: DatePickerDialogOptions): void;
    /**
     * timePickerDialog display.
     *
     * @param { TimePickerDialogOptions } options - Options.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    showTimePickerDialog(options: TimePickerDialogOptions): void;
    /**
     * textPickerDialog display.
     *
     * @param { TextPickerDialogOptions } options - Options.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    showTextPickerDialog(options: TextPickerDialogOptions): void;
    /**
     * Run custom functions inside the UIContext scope.
     *
     * @param { function } callback - The function called through UIContext.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    runScopedTask(callback: () => void): void;
}
