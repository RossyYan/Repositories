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
 * Control style of operation element
 * @enum { OperationStyle }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
export declare enum OperationType {
  /**
   * The TextArrow style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  TEXT_ARROW = 0,

  /**
   * The Button style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  BUTTON = 1,

  /**
   * The IconGroup style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  ICON_GROUP = 2,

  /**
   * The LoadingProgress style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  LOADING = 3
}

/**
 * Declare type OperationOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
export declare class OperationOption {
  /**
   * The content of text or the address of icon.
   * @type { ResourceStr }.
   * @since 10
   */
  value: ResourceStr;

  /**
   * callback function when operate the text or icon.
   * @type { () => void }.
   * @since 10
   */
  action?: () => void;
}

/**
 * Declare type SelectOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
export declare class SelectOptions {
  /**
   * SubOption array of the select.
   * @type { Array<SelectSubOption> }.
   * @since 10
   */
  options: Array<SelectOption>;

  /**
   * The default selected index.
   * @type { number }.
   * @since 10
   */
  selected?: number;
  
  /**
   * The default text value.
   * @type { string }.
   * @since 10
   */
  value?: string;

 /**
  * Callback when the select is selected.
  * @type { (index: number, value?: string) => void }.
  * @since 10
  */
  onSelect?: (index: number, value?: string) => void;
}

/**
 * Declare struct SubHeader
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
@Component
export declare struct SubHeader {

  /**
   * Icon resource of content area.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  @Prop icon?: ResourceStr;

  /**
   * The first line text of content area.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  @Prop primaryTitle?: ResourceStr;

  /**
   * The secondary line text of content area.
   * @type { ResourceStr }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  @Prop secondaryTitle?: ResourceStr;

  /**
   * Select option of content area.
   * @type { SelectOptions }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  select?: SelectOptions;

  /**
   * Operation style of SubHeader.
   * @type { OperationStyle }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  @Prop operationType?: OperationType;

  /**
   * operation item.
   * @type { Array<OperationOption> }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  operationItem?: Array<OperationOption>;
}