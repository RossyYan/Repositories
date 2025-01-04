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
export declare class TabTitleBarMenuItem {
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
 * Declaration of the tab item.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
export declare class TabTitleBarTabItem {
  /**
   * Text description for this tab item.
   * @type { ResourceStr }.
   * @since 10
   */
  title: ResourceStr;

  /**
   * Icon resource for this tab item.
   * @type { ResourceStr }.
   * @since 10
   */
  icon?: ResourceStr;
}

/**
 * Declaration of the tabbed title bar.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
@Component
export declare struct TabTitleBar {
  /**
   * Tab items on the left side.
   * @type { Array<TabTitleBarItem> }.
   * @since 10
   */
  tabItems: Array<TabTitleBarTabItem>;

  /**
   * Menu items on the right side.
   * @type { Array<OperationOptions> }.
   * @since 10
   */
  menuItems?: Array<TabTitleBarMenuItem>;

  /**
   * Content builder. Each component corresponds to a tab item.
   * The builder needs to be transferred.
   * @type { () => void }.
   * @since 10
   */
  @BuilderParam
  swiperContent: () => void;
}
