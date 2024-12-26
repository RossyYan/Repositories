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
export declare class ComposeTitleBarMenuItem {
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
 * Declaration of the composable title bar.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
@Component
export declare struct ComposeTitleBar {
  /**
   * Avatar resource and event callback of this title bar.
   * @type { ComposeTitleBarMenuItem }.
   * @since 10
   */
  item?: ComposeTitleBarMenuItem;

  /**
   * Title of this title bar.
   * @type { ResourceStr }.
   * @since 10
   */
  title: ResourceStr;

  /**
   * Sub-title of this title bar.
   * @type { ResourceStr }.
   * @since 10
   */
  subtitle?: ResourceStr;

  /**
   * Menu items on the right side.
   * @type { Array<ComposeTitleBarMenuItem> }.
   * @since 10
   */
  menuItems?: Array<ComposeTitleBarMenuItem>;
}
