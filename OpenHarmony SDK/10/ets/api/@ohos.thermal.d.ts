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
import { AsyncCallback, Callback } from './@ohos.base';
/**
 * Provides thermal level-related callback and query APIs to obtain the information required for
 * temperature control. The APIs are as follows:
 * {@link registerThermalLevelCallback}: subscribes to callbacks of thermal level changes.
 * {@link getLevel}: obtains the thermal level of the system in real time.
 *
 * @namespace thermal
 * @syscap SystemCapability.PowerManager.ThermalManager
 * @since 8
 */
declare namespace thermal {
    /**
     * Enumerates the {@link ThermalLevel} types.
     *
     * @enum {number}
     * @syscap SystemCapability.PowerManager.ThermalManager
     * @since 8
     */
    export enum ThermalLevel {
        /**
         * The device is cool, and services are not restricted.
         *
         * @syscap SystemCapability.PowerManager.ThermalManager
         * @since 8
         */
        COOL = 0,
        /**
         * The device is operational but is not cool. You need to pay attention to its heating.
         *
         * @syscap SystemCapability.PowerManager.ThermalManager
         * @since 8
         */
        NORMAL = 1,
        /**
         * The device is warm. You need to stop or delay some imperceptible services.
         *
         * @syscap SystemCapability.PowerManager.ThermalManager
         * @since 8
         */
        WARM = 2,
        /**
         * The device is heating up. You need to stop all imperceptible services and downgrade
         * or reduce the load of other services.
         *
         * @syscap SystemCapability.PowerManager.ThermalManager
         * @since 8
         */
        HOT = 3,
        /**
         * The device is overheated. You need to stop all imperceptible services and downgrade
         * or reduce the load of major services.
         *
         * @syscap SystemCapability.PowerManager.ThermalManager
         * @since 8
         */
        OVERHEATED = 4,
        /**
         * The device is overheated and is about to enter the emergency state. You need to stop
         * all imperceptible services and downgrade major services to the maximum extent.
         *
         * @syscap SystemCapability.PowerManager.ThermalManager
         * @since 8
         */
        WARNING = 5,
        /**
         * The device has entered the emergency state. You need to stop all services except those
         * for the emergency help purposes.
         *
         * @syscap SystemCapability.PowerManager.ThermalManager
         * @since 8
         */
        EMERGENCY = 6
    }
    /**
     * Subscribes to callbacks of thermal level changes.
     *
     * @param { AsyncCallback<ThermalLevel> } callback Callback of thermal level changes. Returns the thermal level.
     * @syscap SystemCapability.PowerManager.ThermalManager
     * @since 8
     * @deprecated since 9
     * @useinstead thermal#registerThermalLevelCallback
     */
    function subscribeThermalLevel(callback: AsyncCallback<ThermalLevel>): void;
    /**
     * Registers to callbacks of thermal level changes.
     *
     * @param { Callback<ThermalLevel> } callback Callback of thermal level changes.
     * @throws { BusinessError } 401 - If callback is not valid.
     * @throws { BusinessError } 4800101 If connecting to the service failed.
     * @syscap SystemCapability.PowerManager.ThermalManager
     * @since 9
     */
    function registerThermalLevelCallback(callback: Callback<ThermalLevel>): void;
    /**
     * Unsubscribes from the callbacks of thermal level changes.
     *
     * @param { AsyncCallback<void> } callback Callback of thermal level changes.
     * @syscap SystemCapability.PowerManager.ThermalManager
     * @since 8
     * @deprecated since 9
     * @useinstead thermal#unregisterThermalLevelCallback
     */
    function unsubscribeThermalLevel(callback?: AsyncCallback<void>): void;
    /**
     * Unregisters from the callbacks of thermal level changes.
     *
     * @param { Callback<void> } callback Callback of thermal level changes.
     * @throws { BusinessError } 401 - If callback is not valid.
     * @throws { BusinessError } 4800101 If connecting to the service failed.
     * @syscap SystemCapability.PowerManager.ThermalManager
     * @since 9
     */
    function unregisterThermalLevelCallback(callback?: Callback<void>): void;
    /**
     * Obtains the current thermal level.
     *
     * @returns { ThermalLevel } Returns the thermal level.
     * @syscap SystemCapability.PowerManager.ThermalManager
     * @since 8
     * @deprecated since 9
     * @useinstead thermal#getLevel
     */
    function getThermalLevel(): ThermalLevel;
    /**
     * Obtains the current thermal level.
     *
     * @returns { ThermalLevel } The thermal level.
     * @throws { BusinessError } 4800101 If connecting to the service failed.
     * @syscap SystemCapability.PowerManager.ThermalManager
     * @since 9
     */
    function getLevel(): ThermalLevel;
}
export default thermal;