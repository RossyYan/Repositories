/*
 * Copyright (c) 2023-2023 Huawei Device Co., Ltd.
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

import { ResourceStr } from 'GlobalResource';

/**
 * Declaration of the menu item on the right side.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
export declare class EditableTitleBarMenuItem {
  /**
   * Icon resource for this menu item.
   * @type { ResourceStr }.
   * @since 10
   */
  value: ResourceStr;

  /**
   * Whether to enable this menu item.
   * @type { boolean }.
   * @since 10
   */
  isEnabled?: boolean;

  /**
   * Callback function when click on this menu item.
   * @type { () => void }.
   * @since 10
   */
  action?: () => void;
}

/**
 * Declaration of the left icon type.
 * @enum { EditableLeftIconType }.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
export declare enum EditableLeftIconType {
  /**
   * The back type.
   * @since 10
   */
  Back = 0,

  /**
   * The cancel type.
   * @since 10
   */
  Cancel = 1
}

/**
 * Declaration of the editable title bar.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
@Component
export declare struct EditableTitleBar {
  /**
   * Style of the left icon.
   * @type { EditableLeftIconType }.
   * @since 10
   */
  leftIconStyle: EditableLeftIconType;

  /**
   * Title of this title bar.
   * @type { ResourceStr }.
   * @since 10
   */
  title: ResourceStr;

  /**
   * Menu items on the right side.
   * @type { Array<EditableTitleBarMenuItem> }.
   * @since 10
   */
  menuItems?: Array<EditableTitleBarMenuItem>;

  /**
   * Callback function when click on the save icon at the right side.
   * @type { () => void }.
   * @since 10
   */
  onSave?: () => void;

  /**
   * Callback function when click on the cancel icon at the left side.
   * @type { () => void }.
   * @since 10
   */
  onCancel?: () => void;
}
