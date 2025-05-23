/*
* Copyright (C) 2023-2023 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/// <reference path="../component/units.d.ts" />

import { ResourceStr } from 'GlobalResource';

/**
 * Declare ButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
export declare class ButtonOptions {
  /**
   * Sets the Display Content of a Button.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  value: ResourceStr;
  /**
   * Sets the Button Callback.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  action?: () => void;
  /**
   * Sets the background color of a button.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  background?: ResourceColor;
  /**
   * Sets the Button Text Color.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  fontColor?: ResourceColor;
}
/**
 * Declare CustomDialog TipsDialog
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
@CustomDialog
export declare struct TipsDialog {
  /**
   * Sets the TipsDialog Controller.
   * @type { CustomDialogController }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  controller: CustomDialogController;
  /**
   * Sets the TipsDialog imageRes.
   * @type { Resource }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  imageRes: Resource;
  /**
   * Sets the TipsDialog image size.
   * @type { SizeOptions }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  imageSize: SizeOptions;
  /**
   * Sets the TipsDialog title.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  title: ResourceStr;
  /**
   * Sets the TipsDialog content.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  content?: ResourceStr;
  /**
   * Sets the TipsDialog checkbox tips.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  checkTips?: ResourceStr;
  /**
   * Sets the TipsDialog checkbox check state.
   * @type { boolean }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  @Prop isChecked?: boolean;
  /**
   * Sets the TipsDialog primary button.
   * @type { ButtonOptions }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  primaryButton?: ButtonOptions;
  /**
   * Sets the TipsDialog secondary button.
   * @type { ButtonOptions }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  secondaryButton?: ButtonOptions;
}

/**
 * Declare CustomDialog SelectDialog
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
@CustomDialog
export declare struct SelectDialog {
  /**
   * Sets the SelectDialog Controller.
   * @type { CustomDialogController }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  controller: CustomDialogController;
  /**
   * Sets the SelectDialog title.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  title: ResourceStr;
  /**
   * Sets the SelectDialog content.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  content?: ResourceStr;
  /**
   * Sets the SelectDialog selected index.
   * @type { number }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  selectedIndex?: number;
  /**
   * Sets the SelectDialog confirm button.
   * @type { ButtonOptions }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  confirm?: ButtonOptions;
  /**
   * Sets the SelectDialog sheets.
   * @type { Array<SheetInfo> }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  radioContent: Array<SheetInfo>;
}

/**
 * Declare CustomDialog ConfirmDialog
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
@CustomDialog
export declare struct ConfirmDialog {
  /**
   * Sets the ConfirmDialog Controller.
   * @type { CustomDialogController }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  controller: CustomDialogController;
  /**
   * Sets the ConfirmDialog title.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  title: ResourceStr;
  /**
   * Sets the ConfirmDialog content.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  content?: ResourceStr;
  /**
   * Sets the ConfirmDialog checkbox tips.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  checkTips?: ResourceStr;
  /**
   * Sets the ConfirmDialog checkbox state.
   * @type { boolean }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  @Prop isChecked?: boolean;
  /**
   * Sets the ConfirmDialog primary button.
   * @type { ButtonOptions }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  primaryButton?: ButtonOptions;
  /**
   * Sets the ConfirmDialog secondary button.
   * @type { ButtonOptions }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  secondaryButton?: ButtonOptions;
}

/**
 * Declare CustomDialog AlertDialog
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
@CustomDialog
export declare struct AlertDialog {
  /**
   * Sets the AlertDialog Controller.
   * @type { CustomDialogController }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  controller: CustomDialogController;
  /**
   * Sets the AlertDialog content.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  content: ResourceStr;
  /**
   * Sets the AlertDialog primary button.
   * @type { ButtonOptions }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  primaryButton?: ButtonOptions;
  /**
   * Sets the AlertDialog secondary button.
   * @type { ButtonOptions }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  secondaryButton?: ButtonOptions;
}

/**
 * Declare CustomDialog LoadingDialog
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
@CustomDialog
export declare struct LoadingDialog {
  /**
   * Sets the LoadingDialog Controller.
   * @type { CustomDialogController }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  Controller: CustomDialogController;
  /**
   * Sets the LoadingDialog content.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  content?: ResourceStr;
}