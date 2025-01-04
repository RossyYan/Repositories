/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
import type { Callback } from './@ohos.base';
/**
 * Declares a namespace that provides APIs to report the device status.
 *
 * @since 9
 * @syscap SystemCapability.Msdp.DeviceStatus.Stationary
 */
declare namespace stationary {
    /**
     * Declares a response interface to receive the device status.
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Stationary
     * @since 9
     */
    interface ActivityResponse {
        state: ActivityState;
    }
    /**
     * Declares the device status type.
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Stationary
     * @since 9
     */
    type ActivityType = 'still' | 'relativeStill';
    /**
     * Enumerates the device status events.
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Stationary
     * @since 9
     */
    enum ActivityEvent {
        /**
         * Event indicating entering device status.
         */
        ENTER = 1,
        /**
         * Event indicating exiting device status.
         */
        EXIT = 2,
        /**
         * Event indicating entering and exiting device status.
         */
        ENTER_EXIT = 3
    }
    /**
     * Declares a response interface to receive the device status.
     *
     * @syscap SystemCapability.Msdp.DeviceStatus.Stationary
     * @since 9
     */
    enum ActivityState {
        /**
         * Entering device status.
         */
        ENTER = 1,
        /**
         * Exiting device status.
         */
        EXIT = 2
    }
    /**
     * Subscribes to the device status.
     *
     * @param activity Indicates the device status type. For details, see {@code type: ActivityType}.
     * @param event Indicates the device status event.
     * @param reportLatencyNs Indicates the event reporting period.
     * @param callback Indicates the callback for receiving reported data.
     * @syscap SystemCapability.Msdp.DeviceStatus.Stationary
     * @since 9
     */
    function on(activity: ActivityType, event: ActivityEvent, reportLatencyNs: number, callback: Callback<ActivityResponse>): void;
    /**
     * Obtains the device status.
     *
     * @param activity Indicates the device status type. For details, see {@code type: ActivityType}.
     * @param callback Indicates the callback for receiving reported data.
     * @syscap SystemCapability.Msdp.DeviceStatus.Stationary
     * @since 9
     */
    function once(activity: ActivityType, callback: Callback<ActivityResponse>): void;
    /**
     * Unsubscribes from the device status.
     *
     * @param activity Indicates the device status type. For details, see {@code type: ActivityType}.
     * @param event Indicates the device status event.
     * @param callback Indicates the callback for receiving reported data.
     * @syscap SystemCapability.Msdp.DeviceStatus.Stationary
     * @since 9
     */
    function off(activity: ActivityType, event: ActivityEvent, callback?: Callback<ActivityResponse>): void;
}
export default stationary;
