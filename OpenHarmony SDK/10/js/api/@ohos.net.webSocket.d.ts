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
import type { AsyncCallback, ErrorCallback } from './@ohos.base';
/**
 * Provides WebSocket APIs.
 * @namespace webSocket
 * @syscap SystemCapability.Communication.NetStack
 * @since 6
 */
/**
 * Provides WebSocket APIs.
 * @namespace webSocket
 * @syscap SystemCapability.Communication.NetStack
 * @crossplatform
 * @since 10
 */
declare namespace webSocket {
    /**
     * Creates a web socket connection.
     * @returns { WebSocket } the WebSocket of the createWebSocket.
     * @syscap SystemCapability.Communication.NetStack
     * @since 6
     */
    /**
     * Creates a web socket connection.
     * @returns { WebSocket } the WebSocket of the createWebSocket.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10
     */
    function createWebSocket(): WebSocket;
    /**
     * Defines the optional parameters carried in the request for establishing a WebSocket connection.
     * @interface WebSocketRequestOptions
     * @syscap SystemCapability.Communication.NetStack
     * @since 6
     */
    /**
     * Defines the optional parameters carried in the request for establishing a WebSocket connection.
     * @interface WebSocketRequestOptions
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10
     */
    export interface WebSocketRequestOptions {
        /**
         * HTTP request header.
         * @type {?Object}
         * @syscap SystemCapability.Communication.NetStack
         * @since 6
         */
        /**
         * HTTP request header.
         * @type {?Object}
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        header?: Object;
    }
    /**
     * Defines the optional parameters carried in the request for closing a WebSocket connection.
     * @interface WebSocketCloseOptions
     * @syscap SystemCapability.Communication.NetStack
     * @since 6
     */
    /**
     * Defines the optional parameters carried in the request for closing a WebSocket connection.
     * @interface WebSocketCloseOptions
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10
     */
    export interface WebSocketCloseOptions {
        /**
         * Error code.
         * @type {?number}
         * @syscap SystemCapability.Communication.NetStack
         * @since 6
         */
        /**
         * Error code.
         * @type {?number}
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        code?: number;
        /**
         * Error cause.
         * @type {?string}
         * @syscap SystemCapability.Communication.NetStack
         * @since 6
         */
        /**
         * Error cause.
         * @type {?string}
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        reason?: string;
    }
    /**
     * The result for closing a WebSocket connection.
     * @interface CloseResult
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10
     */
    export interface CloseResult {
        /**
         * Error code.
         * @type {number}
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        code: number;
        /**
         * Error cause.
         * @type {string}
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        reason: string;
    }
    /**
     * <p>Defines a WebSocket object. Before invoking WebSocket APIs,
     * you need to call webSocket.createWebSocket to create a WebSocket object.</p>
     * @interface WebSocket
     * @syscap SystemCapability.Communication.NetStack
     * @since 6
     */
    /**
     * <p>Defines a WebSocket object. Before invoking WebSocket APIs,
     * you need to call webSocket.createWebSocket to create a WebSocket object.</p>
     * @interface WebSocket
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10
     */
    export interface WebSocket {
        /**
         * Initiates a WebSocket request to establish a WebSocket connection to a given URL.
         * @permission ohos.permission.INTERNET
         * @param { string } url - URL for establishing a WebSocket connection.
         * @param { AsyncCallback<boolean> } callback - the callback of connect.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @since 6
         */
        /**
         * Initiates a WebSocket request to establish a WebSocket connection to a given URL.
         * @permission ohos.permission.INTERNET
         * @param { string } url URL for establishing a WebSocket connection.
         * @param { AsyncCallback<boolean> } callback - the callback of connect.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        connect(url: string, callback: AsyncCallback<boolean>): void;
        /**
         * Initiates a WebSocket request to establish a WebSocket connection to a given URL.
         * @permission ohos.permission.INTERNET
         * @param { string } url URL for establishing a WebSocket connection.
         * @param { WebSocketRequestOptions } options - Optional parameters {@link WebSocketRequestOptions}.
         * @param { AsyncCallback<boolean> } callback - the callback of connect.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @since 6
         */
        /**
         * Initiates a WebSocket request to establish a WebSocket connection to a given URL.
         * @permission ohos.permission.INTERNET
         * @param { string } url URL for establishing a WebSocket connection.
         * @param { WebSocketRequestOptions } options - Optional parameters {@link WebSocketRequestOptions}.
         * @param { AsyncCallback<boolean> } callback - the callback of connect.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        connect(url: string, options: WebSocketRequestOptions, callback: AsyncCallback<boolean>): void;
        /**
         * Initiates a WebSocket request to establish a WebSocket connection to a given URL.
         * @permission ohos.permission.INTERNET
         * @param { string } url URL for establishing a WebSocket connection.
         * @param { WebSocketRequestOptions } options - Optional parameters {@link WebSocketRequestOptions}.
         * @returns { Promise<boolean> } The promise returned by the function.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @since 6
         */
        /**
         * Initiates a WebSocket request to establish a WebSocket connection to a given URL.
         * @permission ohos.permission.INTERNET
         * @param { string } url URL for establishing a WebSocket connection.
         * @param { WebSocketRequestOptions } options - Optional parameters {@link WebSocketRequestOptions}.
         * @returns { Promise<boolean> } The promise returned by the function.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        connect(url: string, options?: WebSocketRequestOptions): Promise<boolean>;
        /**
         * Sends data through a WebSocket connection.
         * @permission ohos.permission.INTERNET
         * @param { string | ArrayBuffer } data - Data to send. It can be a string(API 6) or an ArrayBuffer(API 8).
         * @param { AsyncCallback<boolean> } callback - the callback of send.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @since 6
         */
        /**
         * Sends data through a WebSocket connection.
         * @permission ohos.permission.INTERNET
         * @param { string | ArrayBuffer } data - Data to send. It can be a string(API 6) or an ArrayBuffer(API 8).
         * @param { AsyncCallback<boolean> } callback - the callback of send.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        send(data: string | ArrayBuffer, callback: AsyncCallback<boolean>): void;
        /**
         * Sends data through a WebSocket connection.
         * @permission ohos.permission.INTERNET
         * @param { string | ArrayBuffer } data - Data to send. It can be a string(API 6) or an ArrayBuffer(API 8).
         * @returns { Promise<boolean> } The promise returned by the function.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @since 6
         */
        /**
         * Sends data through a WebSocket connection.
         * @permission ohos.permission.INTERNET
         * @param { string | ArrayBuffer } data - Data to send. It can be a string(API 6) or an ArrayBuffer(API 8).
         * @returns { Promise<boolean> } The promise returned by the function.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        send(data: string | ArrayBuffer): Promise<boolean>;
        /**
         * Closes a WebSocket connection.
         * @permission ohos.permission.INTERNET
         * @param { AsyncCallback<boolean> } callback - the callback of close.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @since 6
         */
        /**
         * Closes a WebSocket connection.
         * @permission ohos.permission.INTERNET
         * @param { AsyncCallback<boolean> } callback - the callback of close.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        close(callback: AsyncCallback<boolean>): void;
        /**
         * Closes a WebSocket connection.
         * @permission ohos.permission.INTERNET
         * @param { WebSocketCloseOptions } options - Optional parameters {@link WebSocketCloseOptions}.
         * @param { AsyncCallback<boolean> } callback - the callback of close.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @since 6
         */
        /**
         * Closes a WebSocket connection.
         * @permission ohos.permission.INTERNET
         * @param { WebSocketCloseOptions } options - Optional parameters {@link WebSocketCloseOptions}.
         * @param { AsyncCallback<boolean> } callback - the callback of close.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        close(options: WebSocketCloseOptions, callback: AsyncCallback<boolean>): void;
        /**
         * Closes a WebSocket connection.
         * @permission ohos.permission.INTERNET
         * @param { WebSocketCloseOptions } options - Optional parameters {@link WebSocketCloseOptions}.
         * @returns { Promise<boolean> } The promise returned by the function.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @since 6
         */
        /**
         * Closes a WebSocket connection.
         * @permission ohos.permission.INTERNET
         * @param { WebSocketCloseOptions } options - Optional parameters {@link WebSocketCloseOptions}.
         * @returns { Promise<boolean> } The promise returned by the function.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        close(options?: WebSocketCloseOptions): Promise<boolean>;
        /**
         * Enables listening for the open events of a WebSocket connection.
         * @param { 'open' } type - event indicating that a WebSocket connection has been opened.
         * @param { AsyncCallback<Object> } callback - the callback used to return the result.
         * @syscap SystemCapability.Communication.NetStack
         * @since 6
         */
        /**
         * Enables listening for the open events of a WebSocket connection.
         * @param { 'open' } type - event indicating that a WebSocket connection has been opened.
         * @param { AsyncCallback<Object> } callback - the callback used to return the result.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        on(type: 'open', callback: AsyncCallback<Object>): void;
        /**
         * Cancels listening for the open events of a WebSocket connection.
         * @param { 'open' } type - event indicating that a WebSocket connection has been opened.
         * @param { AsyncCallback<Object> } callback - the callback used to return the result.
         * @syscap SystemCapability.Communication.NetStack
         * @since 6
         */
        /**
         * Cancels listening for the open events of a WebSocket connection.
         * @param { 'open' } type - event indicating that a WebSocket connection has been opened.
         * @param { AsyncCallback<Object> } callback the callback used to return the result.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        off(type: 'open', callback?: AsyncCallback<Object>): void;
        /**
         * Enables listening for the message events of a WebSocket connection.
         * data in AsyncCallback can be a string(API 6) or an ArrayBuffer(API 8).
         * @param { 'message' } type - event indicating that a message has been received from the server.
         * @param { AsyncCallback<string | ArrayBuffer> } callback - the callback used to return the result.
         * @syscap SystemCapability.Communication.NetStack
         * @since 6
         */
        /**
         * Enables listening for the message events of a WebSocket connection.
         * data in AsyncCallback can be a string(API 6) or an ArrayBuffer(API 8).
         * @param { 'message' } type - event indicating that a message has been received from the server.
         * @param { AsyncCallback<string | ArrayBuffer> } callback - the callback used to return the result.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        on(type: 'message', callback: AsyncCallback<string | ArrayBuffer>): void;
        /**
         * Cancels listening for the message events of a WebSocket connection.
         * data in AsyncCallback can be a string(API 6) or an ArrayBuffer(API 8).
         * @param { 'message' } type - event indicating that a message has been received from the server.
         * @param { AsyncCallback<string | ArrayBuffer> } callback - the callback used to return the result.
         * @syscap SystemCapability.Communication.NetStack
         * @since 6
         */
        /**
         * Cancels listening for the message events of a WebSocket connection.
         * data in AsyncCallback can be a string(API 6) or an ArrayBuffer(API 8).
         * @param { 'message' } type - event indicating that a message has been received from the server.
         * @param { AsyncCallback<string | ArrayBuffer> } callback - the callback used to return the result.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        off(type: 'message', callback?: AsyncCallback<string | ArrayBuffer>): void;
        /**
         * Enables listening for the close events of a WebSocket connection.
         * @param { 'close' } type - event indicating that a WebSocket connection has been closed.
         * @param { AsyncCallback<CloseResult> } callback - the callback used to return the result.
         * <br>close indicates the close error code and reason indicates the error code description.
         * @syscap SystemCapability.Communication.NetStack
         * @since 6
         */
        /**
         * Enables listening for the close events of a WebSocket connection.
         * @param { 'close' } type - event indicating that a WebSocket connection has been closed.
         * @param { AsyncCallback<CloseResult> } callback - the callback used to return the result.
         * <br>close indicates the close error code and reason indicates the error code description.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        on(type: 'close', callback: AsyncCallback<CloseResult>): void;
        /**
         * Cancels listening for the close events of a WebSocket connection.
         * @param { 'close' } type - event indicating that a WebSocket connection has been closed.
         * @param { AsyncCallback<CloseResult> } callback - the callback used to return the result.
         * <br>close indicates the close error code and reason indicates the error code description.
         * @syscap SystemCapability.Communication.NetStack
         * @since 6
         */
        /**
         * Cancels listening for the close events of a WebSocket connection.
         * @param { 'close' } type - event indicating that a WebSocket connection has been closed.
         * @param { AsyncCallback<CloseResult> } callback - the callback used to return the result.
         * <br>close indicates the close error code and reason indicates the error code description.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        off(type: 'close', callback?: AsyncCallback<CloseResult>): void;
        /**
         * Enables listening for the error events of a WebSocket connection.
         * @param { 'error' } type - event indicating the WebSocket connection has encountered an error.
         * @param { ErrorCallback } callback - the callback used to return the result.
         * @syscap SystemCapability.Communication.NetStack
         * @since 6
         */
        /**
         * Enables listening for the error events of a WebSocket connection.
         * @param { 'error' } type - event indicating the WebSocket connection has encountered an error.
         * @param { ErrorCallback } callback - the callback used to return the result.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        on(type: 'error', callback: ErrorCallback): void;
        /**
         * Cancels listening for the error events of a WebSocket connection.
         * @param { 'error' } type - event indicating the WebSocket connection has encountered an error.
         * @param { ErrorCallback } callback - the callback used to return the result.
         * @syscap SystemCapability.Communication.NetStack
         * @since 6
         */
        /**
         * Cancels listening for the error events of a WebSocket connection.
         * @param { 'error' } type - event indicating the WebSocket connection has encountered an error.
         * @param { ErrorCallback } callback - the callback used to return the result.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        off(type: 'error', callback?: ErrorCallback): void;
    }
}
export default webSocket;
