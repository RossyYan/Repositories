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
import { AsyncCallback, Callback } from "./@ohos.base";
import connection from "./@ohos.net.connection";
import Context from "./application/Context";
/**
 * Provides interfaces to discover DNS based services on a local network over Multicast DNS.
 * @namespace mdns
 * @syscap SystemCapability.Communication.NetManager.MDNS
 * @since 10
 */
declare namespace mdns {
    type NetAddress = connection.NetAddress;
    /**
     * Adds an mDNS service.
     * @param { Context } context - Indicates the context of application or capability.
     * @param { LocalServiceInfo } serviceInfo - Information about the mDNS service. {@link LocalServiceInfo}
     * @param { AsyncCallback<LocalServiceInfo> } callback - the callback of addLocalService.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @throws { BusinessError } 2204003 - Callback duplicated.
     * @throws { BusinessError } 2204008 - Service instance duplicated.
     * @throws { BusinessError } 2204010 - Send packet failed.
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @since 10
     */
    function addLocalService(context: Context, serviceInfo: LocalServiceInfo, callback: AsyncCallback<LocalServiceInfo>): void;
    /**
     * Adds an mDNS service.
     * @param { Context } context - Indicates the context of application or capability.
     * @param { LocalServiceInfo } serviceInfo - Information about the mDNS service. {@link LocalServiceInfo}
     * @returns { Promise<LocalServiceInfo> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @throws { BusinessError } 2204003 - Callback duplicated.
     * @throws { BusinessError } 2204008 - Service instance duplicated.
     * @throws { BusinessError } 2204010 - Send packet failed.
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @since 10
     */
    function addLocalService(context: Context, serviceInfo: LocalServiceInfo): Promise<LocalServiceInfo>;
    /**
     * Removes an mDNS service.
     * @param { Context } context - Indicates the context of application or capability.
     * @param { LocalServiceInfo } serviceInfo - Information about the mDNS service. {@link LocalServiceInfo}
     * @param { AsyncCallback<LocalServiceInfo> } callback - the callback of removeLocalService.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @throws { BusinessError } 2204002 - Callback not found.
     * @throws { BusinessError } 2204008 - Service instance not found.
     * @throws { BusinessError } 2204010 - Send packet failed.
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @since 10
     */
    function removeLocalService(context: Context, serviceInfo: LocalServiceInfo, callback: AsyncCallback<LocalServiceInfo>): void;
    /**
     * Removes an mDNS service.
     * @param { Context } context - Indicates the context of application or capability.
     * @param { LocalServiceInfo } serviceInfo - Information about the mDNS service. {@link LocalServiceInfo}
     * @returns { Promise<LocalServiceInfo> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @throws { BusinessError } 2204002 - Callback not found.
     * @throws { BusinessError } 2204008 - Service instance not found.
     * @throws { BusinessError } 2204010 - Send packet failed.
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @since 10
     */
    function removeLocalService(context: Context, serviceInfo: LocalServiceInfo): Promise<LocalServiceInfo>;
    /**
     * Create an mDNS based discovery service with context and serviceType.
     * @param { Context } context - Indicates the context of application or capability.
     * @param { string } serviceType - The service type being discovered.
     * @returns { DiscoveryService } the DiscoveryService of the createDiscoveryService.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @since 10
     */
    function createDiscoveryService(context: Context, serviceType: string): DiscoveryService;
    /**
     * Resolves an mDNS service.
     * @param { Context } context - Indicates the context of application or capability.
     * @param { LocalServiceInfo } serviceInfo - Information about the mDNS service. {@link LocalServiceInfo}
     * @param { AsyncCallback<LocalServiceInfo> } callback - the callback of resolveLocalService.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @throws { BusinessError } 2204003 - Callback duplicated.
     * @throws { BusinessError } 2204006 - Request timeout.
     * @throws { BusinessError } 2204010 - Send packet failed.
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @since 10
     */
    function resolveLocalService(context: Context, serviceInfo: LocalServiceInfo, callback: AsyncCallback<LocalServiceInfo>): void;
    /**
     * Resolves an mDNS service.
     * @param { Context } context - Indicates the context of application or capability.
     * @param { LocalServiceInfo } serviceInfo - Information about the mDNS service. {@link LocalServiceInfo}
     * @returns { Promise<LocalServiceInfo> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 2100002 - Operation failed. Cannot connect to service.
     * @throws { BusinessError } 2100003 - System internal error.
     * @throws { BusinessError } 2204003 - Callback duplicated.
     * @throws { BusinessError } 2204006 - Request timeout.
     * @throws { BusinessError } 2204010 - Send packet failed.
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @since 10
     */
    function resolveLocalService(context: Context, serviceInfo: LocalServiceInfo): Promise<LocalServiceInfo>;
    /**
     * Defines a DiscoveryService object for discovering mDNS services of the specified type.
     * @interface DiscoveryService
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @since 10
     */
    export interface DiscoveryService {
        /**
         * Enables listening for discoveryStart events of mDNS services.
         * @param { 'discoveryStart' } type - Indicates Event name.
         * @param { Callback<{ serviceInfo: LocalServiceInfo, errorCode?: MdnsError }> } callback - the callback used to return the result.
         * @syscap SystemCapability.Communication.NetManager.MDNS
         * @since 10
         */
        on(type: 'discoveryStart', callback: Callback<{
            serviceInfo: LocalServiceInfo;
            errorCode?: MdnsError;
        }>): void;
        /**
         * Cancels listening for discoveryStart events of mDNS services.
         * @param { 'discoveryStart' } type - Indicates Event name.
         * @param { Callback<{ serviceInfo: LocalServiceInfo, errorCode?: MdnsError }> } callback - the callback used to return the result.
         * @syscap SystemCapability.Communication.NetManager.MDNS
         * @since 10
         */
        off(type: 'discoveryStart', callback?: Callback<{
            serviceInfo: LocalServiceInfo;
            errorCode?: MdnsError;
        }>): void;
        /**
         * Enables listening for discoveryStop events of mDNS services.
         * @param { 'discoveryStop' } type - Indicates Event name.
         * @param { Callback<{ serviceInfo: LocalServiceInfo, errorCode?: MdnsError }> } callback - the callback used to return the result.
         * @syscap SystemCapability.Communication.NetManager.MDNS
         * @since 10
         */
        on(type: 'discoveryStop', callback: Callback<{
            serviceInfo: LocalServiceInfo;
            errorCode?: MdnsError;
        }>): void;
        /**
         * Cancels listening for discoveryStop events of mDNS services.
         * @param { 'discoveryStop' } type - Indicates Event name.
         * @param { Callback<{ serviceInfo: LocalServiceInfo, errorCode?: MdnsError }> } callback - the callback used to return the result.
         * @syscap SystemCapability.Communication.NetManager.MDNS
         * @since 10
         */
        off(type: 'discoveryStop', callback?: Callback<{
            serviceInfo: LocalServiceInfo;
            errorCode?: MdnsError;
        }>): void;
        /**
         * Enables listening for serviceFound events of mDNS services.
         * @param { 'serviceFound' } type - Indicates Event name.
         * @param { Callback<LocalServiceInfo> } callback - the callback used to return the result.
         * @syscap SystemCapability.Communication.NetManager.MDNS
         * @since 10
         */
        on(type: 'serviceFound', callback: Callback<LocalServiceInfo>): void;
        /**
         * Cancels listening for serviceFound events of mDNS services.
         * @param { 'serviceFound' } type - Indicates Event name.
         * @param { Callback<LocalServiceInfo> } callback - the callback used to return the result.
         * @syscap SystemCapability.Communication.NetManager.MDNS
         * @since 10
         */
        off(type: 'serviceFound', callback?: Callback<LocalServiceInfo>): void;
        /**
         * Enables listening for serviceLost events of mDNS services.
         * @param { 'serviceLost' } type - Indicates Event name.
         * @param { Callback<LocalServiceInfo> } callback - the callback used to return the result.
         * @syscap SystemCapability.Communication.NetManager.MDNS
         * @since 10
         */
        on(type: 'serviceLost', callback: Callback<LocalServiceInfo>): void;
        /**
         * Cancels listening for serviceLost events of mDNS services.
         * @param { 'serviceLost' } type - Indicates Event name.
         * @param { Callback<LocalServiceInfo> } callback - the callback used to return the result.
         * @syscap SystemCapability.Communication.NetManager.MDNS
         * @since 10
         */
        off(type: 'serviceLost', callback?: Callback<LocalServiceInfo>): void;
        /**
         * Starts searching for mDNS services on the LAN.
         * @syscap SystemCapability.Communication.NetManager.MDNS
         * @since 10
         */
        startSearchingMDNS(): void;
        /**
         * Stops searching for mDNS services on the LAN.
         * @syscap SystemCapability.Communication.NetManager.MDNS
         * @since 10
         */
        stopSearchingMDNS(): void;
    }
    /**
     * Defines the mDNS service information.
     * @interface LocalServiceInfo
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @since 10
     */
    export interface LocalServiceInfo {
        /**
         * Service type. Use an underscore (_) as the prefix, for example, _http._tcp.
         * @type {string}
         * @syscap SystemCapability.Communication.NetManager.MDNS
         * @since 10
         */
        serviceType: string;
        /**
         * Service name.
         * @type {string}
         * @syscap SystemCapability.Communication.NetManager.MDNS
         * @since 10
         */
        serviceName: string;
        /**
         * Port number.
         * @type {?number}
         * @syscap SystemCapability.Communication.NetManager.MDNS
         * @since 10
         */
        port?: number;
        /**
         * IP address of the host.
         * @type {?NetAddress}
         * @syscap SystemCapability.Communication.NetManager.MDNS
         * @since 10
         */
        host?: NetAddress;
        /**
         * DNS-SD TXT record pairs.
         * @type {?Array<ServiceAttribute>}
         * @syscap SystemCapability.Communication.NetManager.MDNS
         * @since 10
         */
        serviceAttribute?: Array<ServiceAttribute>;
    }
    /**
     * Defines the mDNS service attribute information.
     * @interface ServiceAttribute
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @since 10
     */
    export interface ServiceAttribute {
        /**
         * TXT record key.
         * @type {string}
         * @syscap SystemCapability.Communication.NetManager.MDNS
         * @since 10
         */
        key: string;
        /**
         * TXT record value.
         * @type {Array<number>}
         * @syscap SystemCapability.Communication.NetManager.MDNS
         * @since 10
         */
        value: Array<number>;
    }
    /**
     * Defines the mDNS error information.
     * @enum {number}
     * @syscap SystemCapability.Communication.NetManager.MDNS
     * @since 10
     */
    export enum MdnsError {
        /**
         * Indicates that the operation failed due to internal error.
         * @syscap SystemCapability.Communication.NetManager.MDNS
         * @since 10
         */
        INTERNAL_ERROR = 0,
        /**
         * Indicates that the operation failed because it is already active.
         * @syscap SystemCapability.Communication.NetManager.MDNS
         * @since 10
         */
        ALREADY_ACTIVE = 1,
        /**
         * <p>Indicates that the operation failed because the maximum outstanding
         * requests from the applications have reached.</p>
         * @syscap SystemCapability.Communication.NetManager.MDNS
         * @since 10
         */
        MAX_LIMIT = 2
    }
}
/**
 * @since 10
 */
export default mdns;
