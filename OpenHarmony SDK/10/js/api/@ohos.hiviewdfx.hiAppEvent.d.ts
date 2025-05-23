/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
import type { AsyncCallback } from './@ohos.base';
/**
 * Provides the event logging function for applications to log the fault, statistical, security,
 * and user behavior events reported during running. Based on event information,
 * you will be able to analyze the running status of applications.
 *
 * @namespace hiAppEvent
 * @syscap SystemCapability.HiviewDFX.HiAppEvent
 * @since 9
 */
declare namespace hiAppEvent {
    /**
     * Enumerate application event types.
     *
     * @enum { number }
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @since 9
     */
    enum EventType {
        /**
         * Fault event.
         *
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         * @since 9
         */
        FAULT = 1,
        /**
         * Statistic event.
         *
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         * @since 9
         */
        STATISTIC = 2,
        /**
         * Security event.
         *
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         * @since 9
         */
        SECURITY = 3,
        /**
         * User behavior event.
         *
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         * @since 9
         */
        BEHAVIOR = 4
    }
    /**
     * Preset event.
     *
     * @namespace event
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @since 9
     */
    namespace event {
        /**
         * User login event.
         *
         * @constant
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         * @since 9
         */
        const USER_LOGIN: string;
        /**
         * User logout event.
         *
         * @constant
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         * @since 9
         */
        const USER_LOGOUT: string;
        /**
         * Distributed service event.
         *
         * @constant
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         * @since 9
         */
        const DISTRIBUTED_SERVICE_START: string;
    }
    /**
     * Preset param.
     *
     * @namespace param
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @since 9
     */
    namespace param {
        /**
         * User id.
         *
         * @constant
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         * @since 9
         */
        const USER_ID: string;
        /**
         * Distributed service name.
         *
         * @constant
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         * @since 9
         */
        const DISTRIBUTED_SERVICE_NAME: string;
        /**
         * Distributed service instance id.
         *
         * @constant
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         * @since 9
         */
        const DISTRIBUTED_SERVICE_INSTANCE_ID: string;
    }
    /**
     * Application event logging configuration interface.
     *
     * @param { ConfigOption } config Application event logging configuration item object.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 11103001 - Invalid max storage quota value.
     * @static
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @since 9
     */
    function configure(config: ConfigOption): void;
    /**
     * Describe the options for the configuration.
     *
     * @interface ConfigOption
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @since 9
     */
    interface ConfigOption {
        /**
         * Configuration item: application event logging switch.
         *
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         * @since 9
         */
        disable?: boolean;
        /**
         * Configuration item: event file directory storage quota size.
         *
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         * @since 9
         */
        maxStorage?: string;
    }
    /**
     * Definition of written application event information.
     *
     * @interface AppEventInfo
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @since 9
     */
    interface AppEventInfo {
        /**
         * The domain of the event.
         *
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         * @since 9
         */
        domain: string;
        /**
         * The name of the event.
         *
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         * @since 9
         */
        name: string;
        /**
         * The type of the event.
         *
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         * @since 9
         */
        eventType: EventType;
        /**
         * The params of the event.
         *
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         * @since 9
         */
        params: object;
    }
    /**
     * Write application event.
     *
     * @param { AppEventInfo } info Application event information to be written.
     * @returns { Promise<void> } Return Promise.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 11100001 - Function is disabled.
     * @throws { BusinessError } 11101001 - Invalid event domain.
     * @throws { BusinessError } 11101002 - Invalid event name.
     * @throws { BusinessError } 11101003 - Invalid number of event parameters.
     * @throws { BusinessError } 11101004 - Invalid string length of the event parameter.
     * @throws { BusinessError } 11101005 - Invalid event parameter name.
     * @throws { BusinessError } 11101006 - Invalid array length of the event parameter.
     * @static
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @since 9
     */
    function write(info: AppEventInfo): Promise<void>;
    /**
     * Write application event.
     *
     * @param { AppEventInfo } info Application event information to be written.
     * @param { AsyncCallback<void> } callback Callback function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 11100001 - Function is disabled.
     * @throws { BusinessError } 11101001 - Invalid event domain.
     * @throws { BusinessError } 11101002 - Invalid event name.
     * @throws { BusinessError } 11101003 - Invalid number of event parameters.
     * @throws { BusinessError } 11101004 - Invalid string length of the event parameter.
     * @throws { BusinessError } 11101005 - Invalid event parameter name.
     * @throws { BusinessError } 11101006 - Invalid array length of the event parameter.
     * @static
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @since 9
     */
    function write(info: AppEventInfo, callback: AsyncCallback<void>): void;
    /**
     * Definition of the read event package.
     *
     * @interface AppEventPackage
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @since 9
     */
    interface AppEventPackage {
        /**
         * The id of the package.
         *
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         * @since 9
         */
        packageId: number;
        /**
         * The number of events contained in the package.
         *
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         * @since 9
         */
        row: number;
        /**
         * The total size of events contained in the package.
         *
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         * @since 9
         */
        size: number;
        /**
         * The events data contained in the package.
         *
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         * @since 9
         */
        data: string[];
    }
    /**
     * Definition of event holder object, which is used to read the event data monitored by the watcher.
     *
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @since 9
     */
    class AppEventPackageHolder {
        /**
         * Constructor for AppEventPackageHolder.
         *
         * @param { string } watcherName Name of the watcher to read.
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         * @since 9
         */
        constructor(watcherName: string);
        /**
         * Set the threshold size per read.
         *
         * @param { number } size Threshold size.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 11104001 - Invalid size value.
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         * @since 9
         */
        setSize(size: number): void;
        /**
         * Read the event data monitored by the watcher.
         *
         * @returns { AppEventPackage } The read event package.
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         * @since 9
         */
        takeNext(): AppEventPackage;
    }
    /**
     * Definition of the condition for triggering callback when the watcher monitors event data.
     *
     * @interface TriggerCondition
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @since 9
     */
    interface TriggerCondition {
        /**
         * The number of write events that trigger callback.
         *
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         * @since 9
         */
        row?: number;
        /**
         * The size of write events that trigger callback.
         *
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         * @since 9
         */
        size?: number;
        /**
         * The interval for triggering callback.
         *
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         * @since 9
         */
        timeOut?: number;
    }
    /**
     * Definition of event filter object, which is used to filter events monitored by the watcher.
     *
     * @interface AppEventFilter
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @since 9
     */
    interface AppEventFilter {
        /**
         * The name of the event domain to be monitored by the watcher.
         *
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         * @since 9
         */
        domain: string;
        /**
         * The types of the events to be monitored by the watcher.
         *
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         * @since 9
         */
        eventTypes?: EventType[];
    }
    /**
     * Definition of event watcher object, which is used to monitor written event data.
     *
     * @interface Watcher
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @since 9
     */
    interface Watcher {
        /**
         * The name of watcher.
         *
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         * @since 9
         */
        name: string;
        /**
         * The condition for triggering callback.
         *
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         * @since 9
         */
        triggerCondition?: TriggerCondition;
        /**
         * The event filters for monitoring events.
         *
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         * @since 9
         */
        appEventFilters?: AppEventFilter[];
        /**
         * The callback function of watcher.
         *
         * @syscap SystemCapability.HiviewDFX.HiAppEvent
         * @since 9
         */
        onTrigger?: (curRow: number, curSize: number, holder: AppEventPackageHolder) => void;
    }
    /**
     * Add event watcher.
     *
     * @param { Watcher } watcher Watcher object for monitoring events.
     * @returns { AppEventPackageHolder } Holder object, which is used to read the monitoring data of the watcher.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 11102001 - Invalid watcher name.
     * @throws { BusinessError } 11102002 - Invalid filtering event domain.
     * @throws { BusinessError } 11102003 - Invalid row value.
     * @throws { BusinessError } 11102004 - Invalid size value.
     * @throws { BusinessError } 11102005 - Invalid timeout value.
     * @static
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @since 9
     */
    function addWatcher(watcher: Watcher): AppEventPackageHolder;
    /**
     * Remove event watcher.
     *
     * @param { Watcher } watcher Watcher object for monitoring events.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 11102001 - Invalid watcher name.
     * @static
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @since 9
     */
    function removeWatcher(watcher: Watcher): void;
    /**
     * Clear all local logging data of the application.
     *
     * @static
     * @syscap SystemCapability.HiviewDFX.HiAppEvent
     * @since 9
     */
    function clearData(): void;
}
export default hiAppEvent;
