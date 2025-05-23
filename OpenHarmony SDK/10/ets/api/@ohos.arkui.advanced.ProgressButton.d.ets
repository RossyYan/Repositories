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

/**
 * Declare Component ProgressButton
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
@Component
export declare struct ProgressButton {
  /**
   * Sets the ProgressButton progress.
   * @type { number }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  @Prop progress: number;

  /**
   * Sets the ProgressButton content.
   * @type { string }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  @Prop content: string;

  /**
   * Sets the ProgressButton progressButtonWidth.
   * @type { Length }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  progressButtonWidth?: Length;

  /**
   * Sets the ProgressButton clickCallback.
   * @since 10
   */
  clickCallback: () => void;

  /**
   * Sets the ProgressButton enable state.
   * @type { boolean }.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  @Prop enable: boolean;
}