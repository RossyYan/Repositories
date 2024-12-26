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
import { Callback } from './@ohos.base';
/**
 * Used to do mediaquery operations.
 *
 * @namespace mediaquery
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Used to do mediaquery operations.
 *
 * @namespace mediaquery
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare namespace mediaquery {
    interface MediaQueryResult {
        /**
         * Whether the match condition is met.
         * This parameter is read-only.
         *
         * @type { boolean }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 7
         */
        /**
         * Whether the match condition is met.
         * This parameter is read-only.
         *
         * @type { boolean }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @since 10
         */
        readonly matches: boolean;
        /**
         * Matching condition of a media event.
         * This parameter is read-only.
         *
         * @type { string }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 7
         */
        /**
         * Matching condition of a media event.
         * This parameter is read-only.
         *
         * @type { string }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @since 10
         */
        readonly media: string;
    }
    interface MediaQueryListener extends MediaQueryResult {
        /**
         * Registers a callback with the corresponding query condition by using the handle.
         * This callback is triggered when the media attributes change.
         *
         * @param { 'change' } type
         * @param { Callback<MediaQueryResult> } callback
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 7
         */
        /**
         * Registers a callback with the corresponding query condition by using the handle.
         * This callback is triggered when the media attributes change.
         *
         * @param { 'change' } type
         * @param { Callback<MediaQueryResult> } callback
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @since 10
         */
        on(type: 'change', callback: Callback<MediaQueryResult>): void;
        /**
         * Deregisters a callback with the corresponding query condition by using the handle.
         * This callback is not triggered when the media attributes chang.
         *
         * @param { 'change' } type
         * @param { Callback<MediaQueryResult> } callback
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 7
         */
        /**
         * Deregisters a callback with the corresponding query condition by using the handle.
         * This callback is not triggered when the media attributes chang.
         *
         * @param { 'change' } type
         * @param { Callback<MediaQueryResult> } callback
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @since 10
         */
        off(type: 'change', callback?: Callback<MediaQueryResult>): void;
    }
    /**
     * Sets the media query criteria and returns the corresponding listening handle
     *
     * @param { string } condition
     * @returns { MediaQueryListener }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Sets the media query criteria and returns the corresponding listening handle
     *
     * @param { string } condition
     * @returns { MediaQueryListener }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    function matchMediaSync(condition: string): MediaQueryListener;
}
export default mediaquery;
