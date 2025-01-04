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
import type { Callback } from './@ohos.base';
import type constant from './@ohos.bluetooth.constant';
/**
 * Provides basic profile methods.
 *
 * @namespace baseProfile
 * @syscap SystemCapability.Communication.Bluetooth.Core
 * @since 10
 */
declare namespace baseProfile {
    /**
     * Indicate the profile connection state.
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    type ProfileConnectionState = constant.ProfileConnectionState;
    /**
     * Profile state change parameters.
     *
     * @typedef StateChangeParam
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    export interface StateChangeParam {
        /**
         * The address of device
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        deviceId: string;
        /**
         * Profile state value
         *
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        state: ProfileConnectionState;
    }
    /**
     * Base interface of profile.
     *
     * @typedef BaseProfile
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @since 10
     */
    export interface BaseProfile {
        /**
         * Obtains the connected devices list of profile.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @returns { Array<string> } Returns the address of connected devices list.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth switch is off.
         * @throws { BusinessError } 2900004 - Profile is not supported.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        getConnectedDevices(): Array<string>;
        /**
         * Obtains the profile connection state.
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
         * @returns { ProfileConnectionState } Returns the connection state.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 2900001 - Service stopped.
         * @throws { BusinessError } 2900003 - Bluetooth switch is off.
         * @throws { BusinessError } 2900004 - Profile is not supported.
         * @throws { BusinessError } 2900099 - Operation failed.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        getConnectionState(deviceId: string): ProfileConnectionState;
        /**
         * Subscribe the event reported when the profile connection state changes .
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'connectionStateChange' } type - Type of the profile connection state changes event to listen for.
         * @param { Callback<StateChangeParam> } callback - Callback used to listen for event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        on(type: 'connectionStateChange', callback: Callback<StateChangeParam>): void;
        /**
         * Unsubscribe the event reported when the profile connection state changes .
         *
         * @permission ohos.permission.ACCESS_BLUETOOTH
         * @param { 'connectionStateChange' } type - Type of the profile connection state changes event to listen for.
         * @param { Callback<StateChangeParam> } callback - Callback used to listen for event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Invalid parameter.
         * @throws { BusinessError } 801 - Capability not supported.
         * @syscap SystemCapability.Communication.Bluetooth.Core
         * @since 10
         */
        off(type: 'connectionStateChange', callback?: Callback<StateChangeParam>): void;
    }
}
export default baseProfile;
