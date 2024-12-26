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
 * Declare enum ItemState
 * @enum { ItemState }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
export declare enum ItemState {
  /**
   * Enable type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  ENABLE = 1,
  /**
   * Disable type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  DISABLE = 2,
  /**
   * Activate type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  ACTIVATE = 3
}

/**
 * Declare type ToolBarOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
@Observed
export declare class ToolBarOption {
  /**
  * Define text content.
  * @type { ResourceStr }.
  * @since 10
  */
  content: ResourceStr;
  /**
   * Define the action event.
   * @since 10
   */
  action?: () => void;
  /**
   * Define icon resource.
   * @type { Resource }.
   * @since 10
   */
  icon?: Resource;
  /**
   * Define item type.
   * @type { Resource }.
   * @since 10
   */
  state?: ItemState;
}

/**
 * Declare ToolBarOptions use in ToolBar
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
@Observed
export declare class ToolBarOptions extends Array<ToolBarOption> {
}

/**
 * Declare Component ToolBar
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
@Component
export declare struct ToolBar {
  /**
   * Define toolbar list array.
   * @type { ToolBarOptions }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  @ObjectLink toolBarList: ToolBarOptions;
  /**
   * Define toolbar activate item index, default is -1.
   * @type { number }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  @Prop activateIndex?: number;
  /**
   * Define toolbar controller.
   * @type { TabsController }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  controller: TabsController;
}