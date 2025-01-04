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
 * Declare enum IconType
 * @enum { IconType }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
export declare enum IconType {
  /**
   * Badge type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  BADGE = 1,
  /**
   * Normal icon type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  NORMAL_ICON = 2,
  /**
   * System icon type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  SYSTEM_ICON = 3,
  /**
   * HeadSculpture type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  HEAD_SCULPTURE = 4,
  /**
   * App icon type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  APP_ICON = 5,
  /**
   * Preview type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  PREVIEW = 6,
  /**
   * Longitudinal type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  LONGITUDINAL = 7,
  /**
   * Vertical type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  VERTICAL = 8
}

/**
 * Declare type OperateIcon
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
export declare class OperateIcon {
  /**
   * The content of text or the address of icon.
   * @type { ResourceStr }.
   * @since 10
   */
  value: ResourceStr;

  /**
   * Callback function when operate the icon.
   * @type { () => void }.
   * @since 10
   */
  action?: () => void;
}

/**
 * Declare type OperateCheck
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
export declare class OperateCheck {
  /**
   * Whether is checked on default.
   * @type { boolean }.
   * @since 10
   */
  isCheck?: boolean;

  /**
   * Callback function when operate the checkbox/switch/radio.
   * @type { () => void }.
   * @since 10
   */
  onChange?: (value: boolean) => void;
}

/**
 * Declare type OperateButton
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
export declare class OperateButton {
  /**
   * The text on the button.
   * @type { ResourceStr }.
   * @since 10
   */
  text?: ResourceStr;
}

/**
 * Declare ContentItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
export declare class ContentItem {
  /**
   * The type of icon.
   * type { IconType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  iconStyle?: IconType;

  /**
   * Sets the icon.
   * type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  icon?: ResourceStr;

  /**
   * Sets the primaryText.
   * type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  primaryText?: ResourceStr;

  /**
   * Sets the secondaryText.
   * type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  secondaryText?: ResourceStr;

  /**
   * Sets the description.
   * type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  description?: ResourceStr;
}

/**
 * Declare OperateItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
export declare class OperateItem {
  /**
   * Sets the icon.
   * type { OperateIcon }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  icon?: OperateIcon;

  /**
   * Sets the subIcon.
   * type { OperateIcon }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  subIcon?: OperateIcon;

  /**
   * Sets the button.
   * type { OperateButton }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  button?: OperateButton;

  /**
   * Sets the switch.
   * type { OperateCheck }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  switch?: OperateCheck;

  /**
   * Sets the checkBox.
   * type { OperateCheck }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  checkbox?: OperateCheck;

  /**
   * Sets the radio.
   * type { OperateCheck }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  radio?: OperateCheck;

  /**
   * Sets the image.
   * type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  image?: ResourceStr;

  /**
   * Sets the text.
   * type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  text?: ResourceStr;

  /**
   * Sets the arrow.
   * type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  arrow?: OperateIcon;
}

/**
 * Declare ComposeListItem
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
@Component
export declare struct ComposeListItem {
  /**
   * The ContentItem.
   * type { ContentItem }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  @Prop contentItem?: ContentItem;

  /**
   * The OperateItem.
   * type { OperateItem }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  @Prop operateItem?: OperateItem;
}