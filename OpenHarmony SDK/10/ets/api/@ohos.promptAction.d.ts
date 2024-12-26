/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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

/// <reference path="../component/units.d.ts" />
import { AsyncCallback } from './@ohos.base';
import { Resource } from 'GlobalResource';
/**
 * @namespace promptAction
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * @namespace promptAction
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare namespace promptAction {
    /**
     * @typedef ShowToastOptions
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * @typedef ShowToastOptions
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    interface ShowToastOptions {
        /**
         * Text to display.
         *
         * @type { string | Resource }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 9
         */
        /**
         * Text to display.
         *
         * @type { string | Resource }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @since 10
         */
        message: string | Resource;
        /**
         * Duration of toast dialog box. The default value is 1500.
         * The recommended value ranges from 1500ms to 10000ms.
         * NOTE: A value less than 1500 is automatically changed to 1500. The maximum value is 10000ms.
         *
         * @type { ?number }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 9
         */
        /**
         * Duration of toast dialog box. The default value is 1500.
         * The recommended value ranges from 1500ms to 10000ms.
         * NOTE: A value less than 1500 is automatically changed to 1500. The maximum value is 10000ms.
         *
         * @type { ?number }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @since 10
         */
        duration?: number;
        /**
         * The distance between toast dialog box and the bottom of screen.
         *
         * @type { ?string | number }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 9
         */
        /**
         * The distance between toast dialog box and the bottom of screen.
         *
         * @type { ?string | number }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @since 10
         */
        bottom?: string | number;
    }
    /**
     * @typedef Button
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * @typedef Button
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    interface Button {
        /**
         * The text displayed in the button.
         *
         * @type { string | Resource }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 9
         */
        /**
         * The text displayed in the button.
         *
         * @type { string | Resource }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @since 10
         */
        text: string | Resource;
        /**
         * The foreground color of button.
         *
         * @type { string | Resource }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 9
         */
        /**
         * The foreground color of button.
         *
         * @type { string | Resource }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @since 10
         */
        color: string | Resource;
    }
    /**
     * @typedef ShowDialogSuccessResponse
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * @typedef ShowDialogSuccessResponse
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    interface ShowDialogSuccessResponse {
        /**
         * Index of the selected button, starting from 0.
         *
         * @type { number }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 9
         */
        /**
         * Index of the selected button, starting from 0.
         *
         * @type { number }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @since 10
         */
        index: number;
    }
    /**
     * @typedef ShowDialogOptions
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * @typedef ShowDialogOptions
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    interface ShowDialogOptions {
        /**
         * Title of the text to display.
         *
         * @type { ?string | Resource }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 9
         */
        /**
         * Title of the text to display.
         *
         * @type { ?string | Resource }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @since 10
         */
        title?: string | Resource;
        /**
         * Text body.
         *
         * @type { ?string | Resource }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 9
         */
        /**
         * Text body.
         *
         * @type { ?string | Resource }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @since 10
         */
        message?: string | Resource;
        /**
         * Array of buttons in the dialog box.
         * The array structure is {text:'button', color: '#666666'}.
         * One to three buttons are supported.
         * The first button is of the positiveButton type, the second is of the negativeButton type, and the third is of the neutralButton type.
         *
         * @type { ?Array<Button> }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 9
         */
        /**
         * Array of buttons in the dialog box.
         * The array structure is {text:'button', color: '#666666'}.
         * More than one buttons are supported.
         *
         * @type { ?Array<Button> }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @since 10
         */
        buttons?: Array<Button>;
        /**
         * Mask Region of dialog. The size can't exceed the main window.
         *
         * @type { ?Rectangle }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @since 10
         */
        maskRect?: Rectangle;
        /**
         * Defines the dialog alignment of the screen.
         *
         * @type { ?DialogAlignment }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @since 10
         */
        alignment?: DialogAlignment;
        /**
         * Defines the dialog offset.
         *
         * @type { ?Offset }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @since 10
         */
        offset?: Offset;
    }
    /**
     * @typedef ActionMenuSuccessResponse
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * @typedef ActionMenuSuccessResponse
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    interface ActionMenuSuccessResponse {
        /**
         * Index of the selected button, starting from 0.
         *
         * @type { number }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 9
         */
        /**
         * Index of the selected button, starting from 0.
         *
         * @type { number }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @since 10
         */
        index: number;
    }
    /**
     * @typedef ActionMenuOptions
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * @typedef ActionMenuOptions
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    interface ActionMenuOptions {
        /**
         * Title of the text to display.
         *
         * @type { ?string | Resource }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 9
         */
        /**
         * Title of the text to display.
         *
         * @type { ?string | Resource }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @since 10
         */
        title?: string | Resource;
        /**
         * Array of buttons in the dialog box.
         * The array structure is {text:'button', color: '#666666'}.
         * One to six buttons are supported.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 9
         */
        /**
         * Array of buttons in the dialog box.
         * The array structure is {text:'button', color: '#666666'}.
         * One to six buttons are supported.
         *
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @since 10
         */
        buttons: [
            Button,
            Button?,
            Button?,
            Button?,
            Button?,
            Button?
        ];
    }
    /**
     * Displays the notification text.
     *
     * @param { ShowToastOptions } options - Options.
     * @throws { BusinessError } 401 - if the type of message is incorrect.
     * @throws { BusinessError } 100001 - if UI execution context not found.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Displays the notification text.
     *
     * @param { ShowToastOptions } options - Options.
     * @throws { BusinessError } 401 - if the type of message is incorrect.
     * @throws { BusinessError } 100001 - if UI execution context not found.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    function showToast(options: ShowToastOptions): void;
    /**
     * Displays the dialog box.
     *
     * @param { ShowDialogOptions } options - Options.
     * @param { AsyncCallback<ShowDialogSuccessResponse> } callback - the callback of showDialog.
     * @throws { BusinessError } 401 - if the number of parameters is not 1 or the type of parameters is incorrect.
     * @throws { BusinessError } 100001 - if UI execution context not found.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Displays the dialog box.
     *
     * @param { ShowDialogOptions } options - Options.
     * @param { AsyncCallback<ShowDialogSuccessResponse> } callback - the callback of showDialog.
     * @throws { BusinessError } 401 - if the number of parameters is not 1 or the type of parameters is incorrect.
     * @throws { BusinessError } 100001 - if UI execution context not found.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    function showDialog(options: ShowDialogOptions, callback: AsyncCallback<ShowDialogSuccessResponse>): void;
    /**
     * Displays the dialog box.
     *
     * @param { ShowDialogOptions } options - Options.
     * @returns { Promise<ShowDialogSuccessResponse> } the promise returned by the function.
     * @throws { BusinessError } 401 - if the number of parameters is not 1 or the type of parameters is incorrect.
     * @throws { BusinessError } 100001 - if UI execution context not found.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Displays the dialog box.
     *
     * @param { ShowDialogOptions } options - Options.
     * @returns { Promise<ShowDialogSuccessResponse> } the promise returned by the function.
     * @throws { BusinessError } 401 - if the number of parameters is not 1 or the type of parameters is incorrect.
     * @throws { BusinessError } 100001 - if UI execution context not found.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    function showDialog(options: ShowDialogOptions): Promise<ShowDialogSuccessResponse>;
    /**
     * Displays the menu.
     *
     * @param { ActionMenuOptions } options - Options.
     * @param { AsyncCallback<ActionMenuSuccessResponse> } callback - the callback of showActionMenu.
     * @throws { BusinessError } 401 - if the number of parameters is not 1 or the type of parameters is incorrect.
     * @throws { BusinessError } 100001 - if UI execution context not found.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Displays the menu.
     *
     * @param { ActionMenuOptions } options - Options.
     * @param { AsyncCallback<ActionMenuSuccessResponse> } callback - the callback of showActionMenu.
     * @throws { BusinessError } 401 - if the number of parameters is not 1 or the type of parameters is incorrect.
     * @throws { BusinessError } 100001 - if UI execution context not found.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    function showActionMenu(options: ActionMenuOptions, callback: AsyncCallback<ActionMenuSuccessResponse>): void;
    /**
     * Displays the dialog box.
     *
     * @param { ActionMenuOptions } options - Options.
     * @returns { Promise<ActionMenuSuccessResponse> } the promise returned by the function.
     * @throws { BusinessError } 401 - if the number of parameters is not 1 or the type of parameters is incorrect.
     * @throws { BusinessError } 100001 - if UI execution context not found.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Displays the dialog box.
     *
     * @param { ActionMenuOptions } options - Options.
     * @returns { Promise<ActionMenuSuccessResponse> } the promise returned by the function.
     * @throws { BusinessError } 401 - if the number of parameters is not 1 or the type of parameters is incorrect.
     * @throws { BusinessError } 100001 - if UI execution context not found.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    function showActionMenu(options: ActionMenuOptions): Promise<ActionMenuSuccessResponse>;
}
export default promptAction;
