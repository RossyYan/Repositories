/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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
import { AsyncCallback } from './@ohos.base';
import { Callback } from './@ohos.base';
import { Resource } from 'GlobalResource';
import cert from './@ohos.security.cert';
import image from './@ohos.multimedia.image';
/**
 * This module provides the capability to manage web modules.
 *
 * @namespace webview
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
/**
 * This module provides the capability to manage web modules.
 *
 * @namespace webview
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @since 10
 */
declare namespace webview {
    /**
     * Defines the Web's request/response header.
     *
     * @interface WebHeader
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Defines the Web's request/response header.
     *
     * @interface WebHeader
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @since 10
     */
    interface WebHeader {
        /**
         * Gets the key of the request/response header.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        /**
         * Gets the key of the request/response header.
         * @syscap SystemCapability.Web.Webview.Core
         * @crossplatform
         * @since 10
         */
        headerKey: string;
        /**
         * Gets the value of the request/response header.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        /**
         * Gets the value of the request/response header.
         * @syscap SystemCapability.Web.Webview.Core
         * @crossplatform
         * @since 9
         */
        headerValue: string;
    }
    /**
     * Enum type supplied to {@link getHitTest} for indicating the cursor node HitTest.
     * @enum {number}
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    enum WebHitTestType {
        /**
         * The edit text.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        EditText,
        /**
         * The email address.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        Email,
        /**
         * The HTML::a tag with src=http.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        HttpAnchor,
        /**
         * The HTML::a tag with src=http + HTML::img.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        HttpAnchorImg,
        /**
         * The HTML::img tag.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        Img,
        /**
         * The map address.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        Map,
        /**
         * The phone number.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        Phone,
        /**
         * Other unknown HitTest.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        Unknown
    }
    /**
     * Defines the mode for using HttpDns.
     * @enum {number}
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    enum SecureDnsMode {
        /**
         * Do not use HttpDns, can be used to revoke previously used HttpDns configuration.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        OFF = 0,
        /**
         * By default, the user-settings of HttpDns is used for dns resolution, and if it fails,
         * the system dns is used for resolution.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        AUTO = 1,
        /**
         * Use the user-settings of HttpDns for dns resolution. If it fails, it will not
         * fall back to the system dns, which will directly cause the page to fail to load.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        SECURE_ONLY = 2
    }
    /**
     * Defines the hit test value, related to {@link getHitTestValue} method.
     *
     * @interface HitTestValue
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    interface HitTestValue {
        /**
         * Get the hit test type.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        type: WebHitTestType;
        /**
         * Get the hit test extra data.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        extra: string;
    }
    /**
     * Defines the configuration of web custom scheme, related to {@link customizeSchemes} method.
     *
     * @interface WebCustomScheme
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    interface WebCustomScheme {
        /**
         * Name of the custom scheme.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        schemeName: string;
        /**
         * Whether Cross-Origin Resource Sharing is supported.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        isSupportCORS: boolean;
        /**
         * Whether fetch request is supported.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        isSupportFetch: boolean;
    }
    /**
     * Provides basic information of web storage.
     *
     * @interface WebStorageOrigin
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    interface WebStorageOrigin {
        origin: string;
        usage: number;
        quota: number;
    }
    /**
     * Subscribe to a callback of a specified type of web event once.
     *
     * @param {string} type Types of web event.
     * @param {Callback<void>} callback Indicate callback used to receive the web event.
     *
     * @throws { BusinessError } 401 - Invalid input parameter.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    function once(type: string, callback: Callback<void>): void;
    /**
     * Provides methods for managing web storage.3
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    class WebStorage {
        /**
         * Delete all the storage data.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        static deleteAllData(): void;
        /**
         * Delete the storage data with the origin.
         *
         * @param { string } origin - The origin which to be deleted.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100011 - Invalid origin.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        static deleteOrigin(origin: string): void;
        /**
         * Get current all the web storage origins.
         * @returns { Promise<Array<WebStorageOrigin>> } - returns all the WebStorageOrigin.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100012 - Invalid web storage origin.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        static getOrigins(): Promise<Array<WebStorageOrigin>>;
        /**
         * Get current all the web storage origins.
         * @param { AsyncCallback<Array<WebStorageOrigin>> } callback - callback used to return all the WebStorageOrigin.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100012 - Invalid web storage origin.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        static getOrigins(callback: AsyncCallback<Array<WebStorageOrigin>>): void;
        /**
         * Get the web storage quota with the origin.
         * @param { string } origin -  The origin which to be inquired.
         * @returns { Promise<number> } - the promise returned by the function
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100011 - Invalid origin.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        static getOriginQuota(origin: string): Promise<number>;
        /**
         * Get the web storage quota with the origin.
         * @param { string } origin -  The origin which to be inquired.
         * @param { AsyncCallback<number> } callback - the callback of getOriginQuota.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100011 - Invalid origin.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        static getOriginQuota(origin: string, callback: AsyncCallback<number>): void;
        /**
         * Get the web storage quota with the origin.
         * @param { string } origin -  The origin which to be inquired.
         * @returns { Promise<number> } - the promise returned by the function
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100011 - Invalid origin.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        static getOriginUsage(origin: string): Promise<number>;
        /**
         * Get the web storage quota with the origin.
         * @param { string } origin -  The origin which to be inquired.
         * @param { AsyncCallback<number> } callback - the callback of getOriginUsage.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100011 - Invalid origin.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        static getOriginUsage(origin: string, callback: AsyncCallback<number>): void;
    }
    /**
     * Provides methods for managing web database.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    class WebDataBase {
        /**
        * Get whether instances holds any http authentication credentials.
        * @returns { boolean } true if instances saved any http authentication credentials otherwise false.
        * @syscap SystemCapability.Web.Webview.Core
        * @since 9
        */
        static existHttpAuthCredentials(): boolean;
        /**
         * Delete all http authentication credentials.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        static deleteHttpAuthCredentials(): void;
        /**
         * Get http authentication credentials.
         * @param { string } host - The host to which the credentials apply.
         * @param { string } realm - The realm to which the credentials apply.
         * @returns { Array<string> } Return an array containing username and password.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        static getHttpAuthCredentials(host: string, realm: string): Array<string>;
        /**
         * Save http authentication credentials.
         * @param { string } host - The host to which the credentials apply.
         * @param { string } realm - The realm to which the credentials apply.
         * @param { string } username - The username.
         * @param { string } password - The password.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        static saveHttpAuthCredentials(host: string, realm: string, username: string, password: string): void;
    }
    /**
     * Provides a method for managing web geographic location permissions.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    class GeolocationPermissions {
        /**
         * Allow geolocation permissions for specifies source.
         * @param { string } origin - Url source.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100011 - Invalid origin.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        static allowGeolocation(origin: string): void;
        /**
         * Delete geolocation permissions for specifies source.
         * @param { string } origin - Url source.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100011 - Invalid origin.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        static deleteGeolocation(origin: string): void;
        /**
         * Delete all geolocation permissions.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        static deleteAllGeolocation(): void;
        /**
         * Gets the geolocation permission status of the specified source.
         * @param { string } origin - Url source.
         * @returns { Promise<boolean> } Return whether there is a saved result.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100011 - Invalid origin.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        static getAccessibleGeolocation(origin: string): Promise<boolean>;
        /**
         * Gets the geolocation permission status of the specified source.
         * @param { string } origin - Url source.
         * @param { AsyncCallback<boolean> } callback - Return to the specified source
         *                                              geographic location permission status.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100011 - Invalid origin.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        static getAccessibleGeolocation(origin: string, callback: AsyncCallback<boolean>): void;
        /**
         * Get all stored geolocation permission url source.
         * @returns { Promise<Array<string>> } Return whether there is a saved result.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        static getStoredGeolocation(): Promise<Array<string>>;
        /**
         * Get all stored geolocation permission url source.
         * @param { AsyncCallback<Array<string>> } callback - Return all source information of
         *                                              stored geographic location permission status.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        static getStoredGeolocation(callback: AsyncCallback<Array<string>>): void;
    }
    /**
     * Provides methods for managing the web cookies.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    class WebCookieManager {
        /**
         * Gets all cookies for the given URL.
         *
         * @param { string } url - The URL for which the cookies are requested.
         * @returns { string } - The cookie value for the given URL.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100002 - Invalid url.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        static getCookie(url: string): string;
        /**
         * Set a single cookie (key-value pair) for the given URL.
         *
         * @param { string } url - The URL for which the cookie is to be set.
         * @param { string } value - The cookie as a string, using the format of the 'Set-Cookie' HTTP response header.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100002 - Invalid url.
         * @throws { BusinessError } 17100005 - Invalid cookie value.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        static setCookie(url: string, value: string): void;
        /**
         * Save the cookies Asynchronously.
         * @returns { Promise<void> } - A promise resolved after the cookies have been saved.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        static saveCookieAsync(): Promise<void>;
        /**
         * Save the cookies Asynchronously.
         * @param { AsyncCallback<void> } callback - Called after the cookies have been saved.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        static saveCookieAsync(callback: AsyncCallback<void>): void;
        /**
         * Get whether the instance can send and accept cookies.
         *
         * @returns { boolean } True if the instance can send and accept cookies else false.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        static isCookieAllowed(): boolean;
        /**
         * Set whether the instance should send and accept cookies.
         * By default this is set to be true.
         *
         * @param { boolean } accept - Whether the instance should send and accept cookies.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        static putAcceptCookieEnabled(accept: boolean): void;
        /**
         * Get whether the instance can send and accept thirdparty cookies.
         *
         * @returns { boolean } True if the instance can send and accept thirdparty cookies else false.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        static isThirdPartyCookieAllowed(): boolean;
        /**
         * Set whether the instance should send and accept thirdparty cookies.
         * By default this is set to be false.
         *
         * @param { boolean } accept - Whether the instance should send and accept thirdparty cookies.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        static putAcceptThirdPartyCookieEnabled(accept: boolean): void;
        /**
         * Check whether exists any cookies.
         *
         * @returns { boolean } True if exists more than one cookie else false;
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        static existCookie(): boolean;
        /**
         * Remove all cookies.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        static deleteEntireCookie(): void;
        /**
         * Delete the session cookies.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        static deleteSessionCookie(): void;
    }
    /**
     * Enum type supplied to {@link onMessageEventExt} for indicating the type of web message.
     *
     * @enum {number}
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    enum WebMessageType {
        /**
         * Unsupported data type.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        NOT_SUPPORT,
        /**
         * The string data type.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        STRING,
        /**
         * The number data type.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        NUMBER,
        /**
         * The boolean data type.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        BOOLEAN,
        /**
         * The arraybuffer data type.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        ARRAY_BUFFER,
        /**
         * The array data type.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        ARRAY,
        /**
         * The error data type.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        ERROR
    }
    /**
     * The message received or sent from web message port.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    class WebMessageExt {
        /**
         * Get the type of the web message.
         * @returns { WebMessageType } - Returns data of WebMessageType type
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        getType(): WebMessageType;
        /**
         * Get the string value of the web message.
         * @returns { string } - Returns data of string type
         * @throws { BusinessError } 17100014 - The type does not match with the value of the web message.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        getString(): string;
        /**
         * Get the number value of the web message.
         * @returns { number } - Returns data of number type
         * @throws { BusinessError } 17100014 - The type does not match with the value of the web message.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        getNumber(): number;
        /**
         * Get the boolean value of the web message.
         * @returns { boolean } - Returns data of Boolean type
         * @throws { BusinessError } 17100014 - The type does not match with the value of the web message.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        getBoolean(): boolean;
        /**
         * Get the array buffer value of the web message.
         * @returns { ArrayBuffer } - Returns data of ArrayBuffer type
         * @throws { BusinessError } 17100014 - The type does not match with the value of the web message.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        getArrayBuffer(): ArrayBuffer;
        /**
         * Get the array value of the web message.
         * @returns { Array<string | number | boolean> } - Returns data of Array type
         * @throws { BusinessError } 17100014 - The type does not match with the value of the web message.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        getArray(): Array<string | number | boolean>;
        /**
         * Get the error value of the web message.
         * @returns { Error } - Returns data of Error type
         * @throws { BusinessError } 17100014 - The type does not match with the value of the web message.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        getError(): Error;
        /**
         * Set the type of the web message.
         * @param { WebMessageType } type - set WebMessageType type data
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100014 - The type does not match with the value of the web message.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        setType(type: WebMessageType): void;
        /**
         * Set the string value of the web message.
         * @param { string } message - set string type data
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100014 - The type does not match with the value of the web message.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        setString(message: string): void;
        /**
         * Set the number value of the web message.
         * @param { number } message - set number type data
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100014 - The type does not match with the value of the web message.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        setNumber(message: number): void;
        /**
         * Set the boolean value of the web message.
         * @param { boolean } message - set boolean type data
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100014 - The type does not match with the value of the web message.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        setBoolean(message: boolean): void;
        /**
         * Set the array buffer value of the web message.
         * @param { ArrayBuffer } message - set ArrayBuffer type data
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100014 - The type does not match with the value of the web message.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        setArrayBuffer(message: ArrayBuffer): void;
        /**
         * Set the array value of the web message.
         * @param { Array<string | number | boolean> } message - set Array type data
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100014 - The type does not match with the value of the web message.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        setArray(message: Array<string | number | boolean>): void;
        /**
         * Set the error value of the web message.
         * @param { Error } message - set Error type data
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100014 - The type does not match with the value of the web message.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        setError(message: Error): void;
    }
    type WebMessage = ArrayBuffer | string;
    /**
     * Define html web message port.
     * @interface WebMessagePort
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    interface WebMessagePort {
        /**
         * The flag indicates whether more formats are supported than string and array buffers.
         *
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        isExtentionType?: boolean;
        /**
         * Close port.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        close(): void;
        /**
         * Post a message to other port.
         * @param { WebMessage } message - Message to send.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100010 - Can not post message using this port.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        postMessageEvent(message: WebMessage): void;
        /**
         * Receive message from other port.
         * @param { function } callback - Callback function for receiving messages.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100006 - Can not register message event using this port.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        onMessageEvent(callback: (result: WebMessage) => void): void;
        /**
         * Post a message to other port.
         * @param { WebMessageExt } message - Message to send.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100010 - Can not post message using this port.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        postMessageEventExt(message: WebMessageExt): void;
        /**
         * Receive message from other port.
         * @param { function } callback - Callback function for receiving messages.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100006 - Can not register message event using this port.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        onMessageEventExt(callback: (result: WebMessageExt) => void): void;
    }
    /**
     * Provides information for history item in BackForwardList.
     * @interface HistoryItem
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    interface HistoryItem {
        /**
         * Pixelmap of icon.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        icon: image.PixelMap;
        /**
         * Url of this history item.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        historyUrl: string;
        /**
         * Original request url of this history item.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        historyRawUrl: string;
        /**
         * Title of this history item.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        title: string;
    }
    /**
     * Provides back and forward history list information method. related to {@link HistoryItem}.
     * @interface BackForwardList
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    interface BackForwardList {
        /**
         * Current index in BackForwardList.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        currentIndex: number;
        /**
         * Size of in BackForwardList.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        size: number;
        /**
         * Get history entry at given index.
         *
         * @param { number } index Index of back forward list entry.
         * @returns { HistoryItem } HistoryItem at given index in back forward list.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        getItemAtIndex(index: number): HistoryItem;
    }
    /**
     * Enum type supplied to {@link runJavaScriptExt} for indicating the result of JavaScript code execution.
     * @enum {number}
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    enum JsMessageType {
        /**
         * Unsupported data type.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        NOT_SUPPORT,
        /**
         * The string data type.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        STRING,
        /**
         * The number data type.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        NUMBER,
        /**
         * The boolean data type.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        BOOLEAN,
        /**
         * The arraybuffer data type.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        ARRAY_BUFFER,
        /**
         * The array data type.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        ARRAY
    }
    /**
     * The message for indicating the of result of JavaScript code execution.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    class JsMessageExt {
        /**
         * Get the type of the JavaScript code execution result.
         * @returns { JsMessageType } - Returns data of JsMessageType type
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        getType(): JsMessageType;
        /**
         * Get the string value of the JavaScript code execution result.
         * @returns { string } - Returns data of string type
         * @throws { BusinessError } 17100014 - The type does not match with the value of the result.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        getString(): string;
        /**
         * Get the number value of the JavaScript code execution result.
         * @returns { number } - Returns data of number type
         * @throws { BusinessError } 17100014 - The type does not match with the value of the result.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        getNumber(): number;
        /**
         * Get the boolean value of the JavaScript code execution result.
         * @returns { boolean } - Returns data of Boolean type
         * @throws { BusinessError } 17100014 - The type does not match with the value of the result.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        getBoolean(): boolean;
        /**
         * Get the array buffer value of the JavaScript code execution result.
         * @returns { ArrayBuffer } - Returns data of ArrayBuffer
         * @throws { BusinessError } 17100014 - The type does not match with the value of the result.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        getArrayBuffer(): ArrayBuffer;
        /**
         * Get the array value of the the JavaScript code execution result.
         * @returns { Array<string | number | boolean> } - Returns data of Array type
         * @throws { BusinessError } 17100014 - The type does not match with the value of the result.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        getArray(): Array<string | number | boolean>;
    }
    /**
     * Provides methods for controlling the web controller.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Provides methods for controlling the web controller.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @since 10
     */
    class WebviewController {
        /**
         * Initialize the web engine before loading the Web components.
         * This is a global static API that must be called on the UI thread, and it will have no effect if any
         * Web components are loaded.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        static initializeWebEngine(): void;
        /**
         * Set web engine to use HttpDns server to resolve dns.
         * @param { SecureDnsMode } secureDnsMode - using HttpDns.
         * @param { string } secureDnsConfig - The configuration of the HttpDns server.
         *                   Must be https protocol and only allow one server to be configured.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        static setHttpDns(secureDnsMode: SecureDnsMode, secureDnsConfig: string): void;
        /**
         * Enables debugging of web contents.
         * @param { boolean } webDebuggingAccess {@code true} enables debugging of web contents; {@code false} otherwise.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        static setWebDebuggingAccess(webDebuggingAccess: boolean): void;
        /**
         * Checks whether the web page can go forward.
         * @returns { boolean } True if the web page can go forward else false.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        accessForward(): boolean;
        /**
         * Checks whether the web page can go back.
         * @returns { boolean } True if the web page can go back else false.
         *                           The WebviewController must be associated with a Web component.
         * @throws { BusinessError } 17100001 - Init error.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        accessBackward(): boolean;
        /**
         * Checks whether the web page can go back or forward the given number of steps.
         *
         * @param { number } step - The number of steps.
         * @returns { boolean } True if the web page can go back else false.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        accessStep(step: number): boolean;
        /**
         * Goes forward in the history of the web page.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        forward(): void;
        /**
         * Goes back in the history of the web page.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        backward(): void;
        /**
         * Clears the history in the Web.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        clearHistory(): void;
        /**
         * Let the Web active.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        onActive(): void;
        /**
         * Let the Web inactive.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        onInactive(): void;
        /**
         * Refreshes the current URL.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        refresh(): void;
        /**
         * Loads the data or URL.
         *
         * @param { string } data - A string encoded according to "Base64" or "URL".
         * @param { string } mimeType - Media type. For example: "text/html".
         * @param { string } encoding - Encoding type. For example: "UTF-8".
         * @param { string } [baseUrl] - A specified URL path ("http"/"https"/"data" protocol),
         *                             which is assigned to window.origin by the Web component.
         * @param { string } [historyUrl] - History URL. When it is not empty, it can be managed by
         *                                history records to realize the back and forth function.
         *                                This property is invalid when baseUrl is empty.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @throws { BusinessError } 17100002 - Invalid url.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        loadData(data: string, mimeType: string, encoding: string, baseUrl?: string, historyUrl?: string): void;
        /**
         * Loads the data or URL.
         *
         * @param { string | Resource } url - The URL to load.
         * @param { Array<WebHeader> } [headers] - Additional HTTP request header for URL.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @throws { BusinessError } 17100002 - Invalid url.
         * @throws { BusinessError } 17100003 - Invalid resource path or file type.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        /**
         * Loads the data or URL.
         *
         * @param { string | Resource } url - The URL to load.
         * @param { Array<WebHeader> } [headers] - Additional HTTP request header for URL.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @throws { BusinessError } 17100002 - Invalid url.
         * @throws { BusinessError } 17100003 - Invalid resource path or file type.
         * @syscap SystemCapability.Web.Webview.Core
         * @crossplatform
         * @since 10
         */
        loadUrl(url: string | Resource, headers?: Array<WebHeader>): void;
        /**
         * Gets the type of HitTest.
         * @returns { WebHitTestType } The type of HitTest.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        getHitTest(): WebHitTestType;
        /**
         * Stores the current page as a web archive.
         *
         * @param { string } baseName - Where the generated offline webpage is stored, This value cannot be null.
         * @param { boolean } autoName - If it is false, the filename will be automatically generated according to
         *                               the url and the generated offline webpage will be stored in the directory
         *                               specified by baseName. If it is true, the offline webpage will be directly
         *                               stored in the path specified by baseName.
         * @returns { Promise<string> } a promise resolved after the web archive has been stored. The parameter
         *                              will either be the filename under which the file was stored, or empty
         *                              if storing the file failed.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @throws { BusinessError } 17100003 - Invalid resource path or file type.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        storeWebArchive(baseName: string, autoName: boolean): Promise<string>;
        /**
         * Stores the current page as a web archive.
         *
         * @param { string } baseName - Where the generated offline webpage is stored, This value cannot be null.
         * @param { boolean } autoName - If it is false, the filename will be automatically generated according to
         *                               the url and the generated offline webpage will be stored in the directory
         *                               specified by baseName. If it is true, the offline webpage will be directly
         *                               stored in the path specified by baseName.
         * @param { AsyncCallback<string> } callback - called after the web archive has been stored. The parameter
         *                                             will either be the filename under which the file was stored,
         *                                             or empty if storing the file failed.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @throws { BusinessError } 17100003 - Invalid resource path or file type.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        storeWebArchive(baseName: string, autoName: boolean, callback: AsyncCallback<string>): void;
        /**
         * Let the Web zoom by.
         *
         * @param { number } factor - The zoom factor.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @throws { BusinessError } 17100004 - Function not enable.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        zoom(factor: number): void;
        /**
         * Let the Web zoom in.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @throws { BusinessError } 17100004 - Function not enable.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        zoomIn(): void;
        /**
         * Let the Web zoom out.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @throws { BusinessError } 17100004 - Function not enable.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        zoomOut(): void;
        /**
         * Gets the hit test value of HitTest.
         * @returns { HitTestValue } Return the element information of the clicked area.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        getHitTestValue(): HitTestValue;
        /**
         * Gets the id for the current Web.
         * @returns { number } Returns the index value of the current Web component.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        getWebId(): number;
        /**
         * Gets the default user agent.
         * @returns { string } Return user agent information.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        getUserAgent(): string;
        /**
         * Gets the title of current Web page.
         * @returns { string } Return to File Selector Title.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        getTitle(): string;
        /**
         * Gets the content height of current Web page.
         * @returns { number } Returns the page height of the current page.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        getPageHeight(): number;
        /**
         * Goes forward or back backOrForward in the history of the web page.
         *
         * @param { number } step - Steps to go forward or backward.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        backOrForward(step: number): void;
        /**
         * Gets the request focus.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        requestFocus(): void;
        /**
         * Create web message ports
         * @returns { Array<WebMessagePort> } An array represent 2 WebMessagePort, then can use
         *                                    those ports to communication with html pages.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        /**
         * Create web message ports
         * @param { boolean } isExtentionType - Set whether the web message port supports extention type.
         * @returns { Array<WebMessagePort> } An array represent 2 WebMessagePort, then can use
         *                                    those ports to communication with html pages.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        createWebMessagePorts(isExtentionType?: boolean): Array<WebMessagePort>;
        /**
         * Post web message port to html
         *
         * @param { string } name - Data name information to send.
         * @param { Array<WebMessagePort> } ports - Port number array information to send.
         * @param { string } uri - URI to receive this information.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        postMessage(name: string, ports: Array<WebMessagePort>, uri: string): void;
        /**
         * Stops the current load.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        stop(): void;
        /**
         * Registers the JavaScript object and method list.
         *
         * @param { object } object - Application side JavaScript objects participating in registration.
         * @param { string } name - The name of the registered object, which is consistent with the
         *                          object name called in the window.
         * @param { Array<string> } methodList - Thr method of the application side JavaScript object participating
         *                                       in the registration.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        registerJavaScriptProxy(object: object, name: string, methodList: Array<string>): void;
        /**
         * Deletes a registered JavaScript object with given name.
         *
         * @param { string } name - The name of a registered JavaScript object to be deleted.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @throws { BusinessError } 17100008 - Cannot delete JavaScriptProxy.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        deleteJavaScriptRegister(name: string): void;
        /**
         * Search all instances of 'searchString' on the page and highlights them,
         * result will be notify through callback onSearchResultReceive.
         *
         * @param { string } searchString - String to be search.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                         The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        searchAllAsync(searchString: string): void;
        /**
         * Clears the highlighting surrounding text matches created by searchAllAsync.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        clearMatches(): void;
        /**
         * Highlights and scrolls to the next match search.
         *
         * @param { boolean } forward - Step of search is back or forward.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        searchNext(forward: boolean): void;
        /**
         * Clears the ssl cache in the Web.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        clearSslCache(): void;
        /**
         * Clears the client authentication certificate cache in the Web.
         *
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        clearClientAuthenticationCache(): void;
        /**
         * Loads a piece of code and execute JS code in the context of the currently displayed page.
         *
         * @param { string } script - JavaScript Script.
         * @returns { Promise<string> } A promise is solved after the JavaScript script is executed.
         *                              This parameter will be the result of JavaScript script execution.
         *                              If the JavaScript script fails to execute or has no return value,
         *                              null will be returned.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        runJavaScript(script: string): Promise<string>;
        /**
         * Loads a piece of code and execute JS code in the context of the currently displayed page.
         *
         * @param { string } script - JavaScript Script.
         * @param { AsyncCallback<string> } callback - Callbacks execute JavaScript script results.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        runJavaScript(script: string, callback: AsyncCallback<string>): void;
        /**
         * Execute JavaScript code in the context of the currently displayed page, and return the result.
         *
         * @param { string } script - JavaScript Script.
         * @returns { Promise<JsMessageExt> } A promise is solved after the JavaScript script is executed.
         *                              This parameter will be the result of JavaScript script execution.
         *                              If the JavaScript script fails to execute or has no return value,
         *                              a none type value will be returned.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        runJavaScriptExt(script: string): Promise<JsMessageExt>;
        /**
         * Execute JavaScript code in the context of the currently displayed page, and return the result.
         *
         * @param { string } script - JavaScript Script.
         * @param { AsyncCallback<JsMessageExt> } callback - Callbacks execute JavaScript script results.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        runJavaScriptExt(script: string, callback: AsyncCallback<JsMessageExt>): void;
        /**
         * Gets the url of current Web page.
         * @returns { string } Return the url of the current page.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        getUrl(): string;
        /**
         * Scroll the contents of this Webview up by half the view size.
         *
         * @param { boolean } top - Jump to the top of the page if true.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        pageUp(top: boolean): void;
        /**
         * Scroll the contents of this Webview down by half the view size.
         *
         * @param { boolean } bottom - Jump to the bottom of the page if true.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        pageDown(bottom: boolean): void;
        /**
         * Gets the original url of current Web page.
         * @returns { string } Return the original url of the current page.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        getOriginalUrl(): string;
        /**
         * Gets the favicon of current Web page.
         * @returns { image.PixelMap } Return the favicon bitmap of the current page.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        getFavicon(): image.PixelMap;
        /**
         * Put network state for web. Which is used to set window.navigator.isOnline property in
         * JavaScript.
         * @param { boolean } enable - Whether enable window.navigator.isOnline.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        setNetworkAvailable(enable: boolean): void;
        /**
         * Query if current document has image.
         *
         * @returns { Promise<boolean> } A promise resolved after query image has finished.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        hasImage(): Promise<boolean>;
        /**
         * Query if current document has image.
         *
         * @param { AsyncCallback<boolean> } callback - Called after query image has finished.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        hasImage(callback: AsyncCallback<boolean>): void;
        /**
         * Get back forward stack list from current webview.
         * @returns { BackForwardList } Back forward list for current webview.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        getBackForwardEntries(): BackForwardList;
        /**
         * Remove resource cache in application. So this method will remove all cache for all web components in the
         * same application.
         *
         * @param { boolean } clearRom - Remove cache in both rom and ram if true. Otherwise only clear cache
         *                               in ram.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        removeCache(clearRom: boolean): void;
        /**
         * Scroll to the position.
         *
         * @param { number } x - the x of the position.
         * @param { number } y - the y of the position.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        scrollTo(x: number, y: number): void;
        /**
         * Scroll by the delta position.
         *
         * @param { number } deltaX - the delta x of the position.
         * @param { number } deltaY - the delta y of the position.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        scrollBy(deltaX: number, deltaY: number): void;
        /**
         * Slide by the speed.
         *
         * @param { number } vx - the x speed of the speed.
         * @param { number } vy - the y speed of the speed.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        slideScroll(vx: number, vy: number): void;
        /**
         * Serialize the access stack of the web, that is, the history of access.
         * @returns { Uint8Array } Web access stack after serialization.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        serializeWebState(): Uint8Array;
        /**
         * Restoring the web access stack, that is, the history of access.
         * @param { Uint8Array } state - Web access stack after serialization.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        restoreWebState(state: Uint8Array): void;
        /**
         * Set whether the Web custom scheme supports cross domain and fetch requests.
         * @param { Array<WebCustomScheme> } schemes - Configuration of web custom scheme.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 9
         */
        static customizeSchemes(schemes: Array<WebCustomScheme>): void;
        /**
         * Get certificate for the current website.
         * @returns { Promise<Array<cert.X509Cert>> } the promise of the current website's certificate.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        getCertificate(): Promise<Array<cert.X509Cert>>;
        /**
         * Get certificate for the current website.
         * @param {AsyncCallback<Array<cert.X509Cert>>} callback - the callback of getCertificate.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        getCertificate(callback: AsyncCallback<Array<cert.X509Cert>>): void;
        /**
         * Set audio muted.
         * @param { boolean } mute - Set the audio muted or not.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        setAudioMuted(mute: boolean): void;
        /**
         * Prefetch the resources required by the page, but will not execute js or render the page.
         * @param { string } url - Which url to preresolve/preconnect.
         * @param { Array<WebHeader> } [additionalHeaders] - Additional HTTP request header of the URL.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @throws { BusinessError } 17100002 - Invalid url.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        prefetchPage(url: string, additionalHeaders?: Array<WebHeader>): void;
        /**
         * Preresolve or Preconnect the url. This API can be called before loading the url to make loading faster.
         * @param { string } url - Which url to preresolve/preconnect.
         * @param { boolean } preconnectable - Indicates whether to preconnect.
         * @param { number } numSockets - If preconnectable is true, this parameter indicates the number of sockets to be preconnected.
         * @throws { BusinessError } 17100002 - Invalid url.
         * @throws { BusinessError } 171000013 - The number of preconnect sockets is invalid.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        static prepareForPageLoad(url: string, preconnectable: boolean, numSockets: number): void;
        /**
         * Set custom user agent.
         * @param { string } userAgent - User custom agent information.
         * @throws { BusinessError } 401 - Invalid input parameter.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        setCustomUserAgent(userAgent: string): void;
        /**
         * Get custom user agent.
         * @returns { string } Get custom User agent information.
         * @throws { BusinessError } 17100001 - Init error.
         *                           The WebviewController must be associated with a Web component.
         * @syscap SystemCapability.Web.Webview.Core
         * @since 10
         */
        getCustomUserAgent(): string;
    }
}
export default webview;
