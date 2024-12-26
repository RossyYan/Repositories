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
import type { AsyncCallback } from './@ohos.base';
import type unifiedDataChannel from './@ohos.data.unifiedDataChannel';
import type { CustomBuilder, DragItemInfo, DragEvent } from 'DragControllerParam';
/**
 * This module allows developers to trigger a drag event.
 * @namespace dragController
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare namespace dragController {
    /**
     * DragInfo object description
     *
     * @interface DragInfo
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    interface DragInfo {
        /**
         * A unique identifier to identify which touch point.
         * @type { number }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 10
         */
        pointerId: number;
        /**
        * Drag data.
        * @type { ?unifiedDataChannel.UnifiedData }
        * @syscap SystemCapability.ArkUI.ArkUI.Full
        * @since 10
        */
        data?: unifiedDataChannel.UnifiedData;
        /**
        * Additional information about the drag info.
        * @type { ?string }
        * @syscap SystemCapability.ArkUI.ArkUI.Full
        * @since 10
        */
        extraParams?: string;
    }
    /**
     * Execute a drag event.
     * @param { CustomBuilder | DragItemInfo } custom - Object used for prompts displayed when the object is dragged.
     * @param { DragInfo } dragInfo - Information about the drag event.
     * @param { AsyncCallback<{ event: DragEvent, extraParams: string }> } callback - Callback that contains the drag event information.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    function executeDrag(custom: CustomBuilder | DragItemInfo, dragInfo: DragInfo, callback: AsyncCallback<{
        event: DragEvent;
        extraParams: string;
    }>): void;
    /**
     * Execute a drag event.
     * @param { CustomBuilder | DragItemInfo } custom - Object used for prompts displayed when the object is dragged.
     * @param { DragInfo } dragInfo - Information about the drag event.
     * @returns { Promise<{ event: DragEvent, extraParams: string }> } A Promise with the drag event information.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    function executeDrag(custom: CustomBuilder | DragItemInfo, dragInfo: DragInfo): Promise<{
        event: DragEvent;
        extraParams: string;
    }>;
}
export default dragController;
