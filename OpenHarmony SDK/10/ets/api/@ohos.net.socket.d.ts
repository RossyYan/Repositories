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
import type { AsyncCallback, Callback, ErrorCallback } from './@ohos.base';
import connection from "./@ohos.net.connection";
import type cert from './@ohos.security.cert';
/**
 * Provides TCP and UDP Socket APIs.
 * @namespace socket
 * @syscap SystemCapability.Communication.NetStack
 * @since 7
 */
/**
 * Provides TCP and UDP Socket APIs.
 * @namespace socket
 * @syscap SystemCapability.Communication.NetStack
 * @crossplatform
 * @since 10
 */
declare namespace socket {
    export import NetAddress = connection.NetAddress;
    /**
     * Deposit certificate
     * @syscap SystemCapability.Communication.NetStack
     * @since 9
     */
    /**
     * Deposit certificate
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10
     */
    export type X509CertRawData = cert.EncodingBlob;
    /**
     * Creates a UDPSocket object.
     * @returns { UDPSocket } the UDPSocket of the constructUDPSocketInstance.
     * @syscap SystemCapability.Communication.NetStack
     * @since 7
     */
    /**
     * Creates a UDPSocket object.
     * @returns { UDPSocket } the UDPSocket of the constructUDPSocketInstance.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10
     */
    function constructUDPSocketInstance(): UDPSocket;
    /**
     * Creates a TCPSocket object.
     * @returns { TCPSocket } the TCPSocket of the constructTCPSocketInstance.
     * @syscap SystemCapability.Communication.NetStack
     * @since 7
     */
    /**
     * Creates a TCPSocket object.
     * @returns { TCPSocket } the TCPSocket of the constructTCPSocketInstance.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10
     */
    function constructTCPSocketInstance(): TCPSocket;
    /**
     * Creates a TLSSocket object.
     * @returns { TLSSocket } the TLSSocket of the constructTLSSocketInstance.
     * @syscap SystemCapability.Communication.NetStack
     * @since 9
     */
    /**
     * Creates a TLSSocket object.
     * @returns { TLSSocket } the TLSSocket of the constructTLSSocketInstance.
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10
     */
    function constructTLSSocketInstance(): TLSSocket;
    /**
     * Creates a TCPSocketServer object.
     * @returns { TCPSocketServer } the TCPSocketServer of the constructTCPSocketServerInstance.
     * @syscap SystemCapability.Communication.NetStack
     * @since 10
     */
    function constructTCPSocketServerInstance(): TCPSocketServer;
    /**
     * Creates a TLSSocketServer object.
     * @returns { TLSSocketServer } the TLSSocketServer of the constructTLSSocketServerInstance.
     * @syscap SystemCapability.Communication.NetStack
     * @since 10
     */
    function constructTLSSocketServerInstance(): TLSSocketServer;
    /**
     * Defines the parameters for sending data over the UDPSocket connection.
     * @interface UDPSendOptions
     * @syscap SystemCapability.Communication.NetStack
     * @since 7
     */
    /**
     * Defines the parameters for sending data over the UDPSocket connection.
     * @interface UDPSendOptions
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10
     */
    export interface UDPSendOptions {
        /**
         * Data to send.
         * @type {string | ArrayBuffer}
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Data to send.
         * @type {string | ArrayBuffer}
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        data: string | ArrayBuffer;
        /**
         * Destination address.
         * @type {NetAddress}
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Destination address.
         * @type {NetAddress}
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        address: NetAddress;
    }
    /**
     * @interface ExtraOptionsBase
     * @syscap SystemCapability.Communication.NetStack
     * @since 7
     */
    /**
     * @interface ExtraOptionsBase
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10
     */
    export interface ExtraOptionsBase {
        /**
         * Size of the receive buffer, in MBS.
         * @type {?number}
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Size of the receive buffer, in MBS.
         * @type {?number}
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        receiveBufferSize?: number;
        /**
         * Size of the send buffer, in MBS.
         * @type {?number}
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Size of the send buffer, in MBS.
         * @type {?number}
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        sendBufferSize?: number;
        /**
         * Whether to reuse addresses. The default value is false.
         * @type {?boolean}
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Whether to reuse addresses. The default value is false.
         * @type {?boolean}
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        reuseAddress?: boolean;
        /**
         * Timeout duration of the UDPSocket connection, in milliseconds.
         * @type {?number}
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Timeout duration of the UDPSocket connection, in milliseconds.
         * @type {?number}
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        socketTimeout?: number;
    }
    /**
     * Defines other properties of the UDPSocket connection.
     * @interface UDPExtraOptions
     * @syscap SystemCapability.Communication.NetStack
     * @since 7
     */
    /**
     * Defines other properties of the UDPSocket connection.
     * @interface UDPExtraOptions
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10
     */
    export interface UDPExtraOptions extends ExtraOptionsBase {
        /**
         * Whether to send broadcast messages. The default value is false.
         * @type {?boolean}
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Whether to send broadcast messages. The default value is false.
         * @type {?boolean}
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        broadcast?: boolean;
    }
    /**
     * Defines the status of the socket connection.
     * @interface SocketStateBase
     * @syscap SystemCapability.Communication.NetStack
     * @since 7
     */
    /**
     * Defines the status of the socket connection.
     * @interface SocketStateBase
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10
     */
    export interface SocketStateBase {
        /**
         * Whether the connection is in the bound state.
         * @type {boolean}
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Whether the connection is in the bound state.
         * @type {boolean}
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        isBound: boolean;
        /**
         * Whether the connection is in the closed state.
         * @type {boolean}
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Whether the connection is in the closed state.
         * @type {boolean}
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        isClose: boolean;
        /**
         * Whether the connection is in the connected state.
         * @type {boolean}
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Whether the connection is in the connected state.
         * @type {boolean}
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        isConnected: boolean;
    }
    /**
     * Defines information about the socket connection.
     * @interface SocketRemoteInfo
     * @syscap SystemCapability.Communication.NetStack
     * @since 7
     */
    /**
     * Defines information about the socket connection.
     * @interface SocketRemoteInfo
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10
     */
    export interface SocketRemoteInfo {
        /**
         * Bound IP address.
         * @type {string}
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Bound IP address.
         * @type {string}
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        address: string;
        /**
         * Network protocol type. The options are as follows: IPv4, IPv6.
         * @type {'IPv4' | 'IPv6'}
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Network protocol type. The options are as follows: IPv4, IPv6.
         * @type {'IPv4' | 'IPv6'}
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        family: 'IPv4' | 'IPv6';
        /**
         * Port number. The value ranges from 0 to 65535.
         * @type {number}
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Port number. The value ranges from 0 to 65535.
         * @type {number}
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        port: number;
        /**
         * Length of the server response message, in bytes.
         * @type {number}
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Length of the server response message, in bytes.
         * @type {number}
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        size: number;
    }
    /**
     * Defines a UDPSocket connection.
     * @interface UDPSocket
     * @syscap SystemCapability.Communication.NetStack
     * @since 7
     */
    /**
     * Defines a UDPSocket connection.
     * @interface UDPSocket
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10
     */
    export interface UDPSocket {
        /**
         * Binds the IP address and port number. The port number can be specified or randomly allocated by the system.
         * @permission ohos.permission.INTERNET
         * @param { NetAddress } address - Destination address. {@link NetAddress}
         * @param { AsyncCallback<void> } callback - the callback of bind.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Binds the IP address and port number. The port number can be specified or randomly allocated by the system.
         * @permission ohos.permission.INTERNET
         * @param { NetAddress } address - Destination address. {@link NetAddress}
         * @param { AsyncCallback<void> } callback - the callback of bind.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        bind(address: NetAddress, callback: AsyncCallback<void>): void;
        /**
         * Binds the IP address and port number. The port number can be specified or randomly allocated by the system.
         * @permission ohos.permission.INTERNET
         * @param { NetAddress } address - Destination address. {@link NetAddress}
         * @returns { Promise<void> } The promise returned by the function.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Binds the IP address and port number. The port number can be specified or randomly allocated by the system.
         * @permission ohos.permission.INTERNET
         * @param { NetAddress } address - Destination address. {@link NetAddress}
         * @returns { Promise<void> } The promise returned by the function.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        bind(address: NetAddress): Promise<void>;
        /**
         * Sends data over a UDPSocket connection.
         * @permission ohos.permission.INTERNET
         * @param { UDPSendOptions } options - Optional parameters {@link UDPSendOptions}.
         * @param { AsyncCallback<void> } callback - the callback of send.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Sends data over a UDPSocket connection.
         * @permission ohos.permission.INTERNET
         * @param { UDPSendOptions } options - Optional parameters {@link UDPSendOptions}.
         * @param { AsyncCallback<void> } callback - the callback of send.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        send(options: UDPSendOptions, callback: AsyncCallback<void>): void;
        /**
         * Sends data over a UDPSocket connection.
         * @permission ohos.permission.INTERNET
         * @param { UDPSendOptions } options - Optional parameters {@link UDPSendOptions}.
         * @returns { Promise<void> } The promise returned by the function.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Sends data over a UDPSocket connection.
         * @permission ohos.permission.INTERNET
         * @param { UDPSendOptions } options - Optional parameters {@link UDPSendOptions}.
         * @returns { Promise<void> } The promise returned by the function.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        send(options: UDPSendOptions): Promise<void>;
        /**
         * Closes a UDPSocket connection.
         * @permission ohos.permission.INTERNET
         * @param { AsyncCallback<void> } callback - the callback of close.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Closes a UDPSocket connection.
         * @permission ohos.permission.INTERNET
         * @param { AsyncCallback<void> } callback - the callback of close.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        close(callback: AsyncCallback<void>): void;
        /**
         * Closes a UDPSocket connection.
         * @permission ohos.permission.INTERNET
         * @returns { Promise<void> } The promise returned by the function.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Closes a UDPSocket connection.
         * @permission ohos.permission.INTERNET
         * @returns { Promise<void> } The promise returned by the function.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        close(): Promise<void>;
        /**
         * Obtains the status of the UDPSocket connection.
         * @permission ohos.permission.INTERNET
         * @param { AsyncCallback<SocketStateBase> } callback - the callback of getState. {@link SocketStateBase}.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Obtains the status of the UDPSocket connection.
         * @permission ohos.permission.INTERNET
         * @param { AsyncCallback<SocketStateBase> } callback - the callback of getState. {@link SocketStateBase}.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        getState(callback: AsyncCallback<SocketStateBase>): void;
        /**
         * Obtains the status of the UDPSocket connection.
         * @permission ohos.permission.INTERNET
         * @returns { Promise<SocketStateBase> } The promise returned by the function.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Obtains the status of the UDPSocket connection.
         * @permission ohos.permission.INTERNET
         * @returns { Promise<SocketStateBase> } The promise returned by the function.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        getState(): Promise<SocketStateBase>;
        /**
         * Sets other attributes of the UDPSocket connection.
         * @permission ohos.permission.INTERNET
         * @param { UDPExtraOptions } options - Optional parameters {@link UDPExtraOptions}.
         * @param { AsyncCallback<void> }callback - the callback of setExtraOptions.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Sets other attributes of the UDPSocket connection.
         * @permission ohos.permission.INTERNET
         * @param { UDPExtraOptions } options - Optional parameters {@link UDPExtraOptions}.
         * @param { AsyncCallback<void> }callback - the callback of setExtraOptions.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        setExtraOptions(options: UDPExtraOptions, callback: AsyncCallback<void>): void;
        /**
         * Sets other attributes of the UDPSocket connection.
         * @permission ohos.permission.INTERNET
         * @param { UDPExtraOptions } options - Optional parameters {@link UDPExtraOptions}.
         * @returns { Promise<void> } The promise returned by the function.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Sets other attributes of the UDPSocket connection.
         * @permission ohos.permission.INTERNET
         * @param { UDPExtraOptions } options - Optional parameters {@link UDPExtraOptions}.
         * @returns { Promise<void> } The promise returned by the function.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        setExtraOptions(options: UDPExtraOptions): Promise<void>;
        /**
         * Listens for message receiving events of the UDPSocket connection.
         * @param { 'message' } type - Indicates Event name.
         * @param { Callback<{ message: ArrayBuffer, remoteInfo: SocketRemoteInfo }> } callback - the callback used to return the result.
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Listens for message receiving events of the UDPSocket connection.
         * @param { 'message' } type - Indicates Event name.
         * @param { Callback<{ message: ArrayBuffer, remoteInfo: SocketRemoteInfo }> } callback - the callback used to return the result.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        on(type: 'message', callback: Callback<{
            message: ArrayBuffer;
            remoteInfo: SocketRemoteInfo;
        }>): void;
        /**
         * Cancels listening for message receiving events of the UDPSocket connection.
         * @param { 'message' } type - Indicates Event name.
         * @param { Callback<{ message: ArrayBuffer, remoteInfo: SocketRemoteInfo }> } callback - the callback used to return the result.
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Cancels listening for message receiving events of the UDPSocket connection.
         * @param { 'message' } type - Indicates Event name.
         * @param { Callback<{ message: ArrayBuffer, remoteInfo: SocketRemoteInfo }> } callback - the callback used to return the result.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        off(type: 'message', callback?: Callback<{
            message: ArrayBuffer;
            remoteInfo: SocketRemoteInfo;
        }>): void;
        /**
         * Listens for data packet message events or close events of the UDPSocket connection.
         * @param { 'listening' | 'close' } type - Indicates Event name.
         * @param { Callback<void> } callback - the callback used to return the result.
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Listens for data packet message events or close events of the UDPSocket connection.
         * @param { 'listening' | 'close' } type - Indicates Event name.
         * @param { Callback<void> } callback - the callback used to return the result.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        on(type: 'listening' | 'close', callback: Callback<void>): void;
        /**
         * Cancels listening for data packet message events or close events of the UDPSocket connection.
         * @param { 'listening' | 'close' } type - Indicates Event name.
         * @param { Callback<void> } callback - the callback used to return the result.
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Cancels listening for data packet message events or close events of the UDPSocket connection.
         * @param { 'listening' | 'close' } type - Indicates Event name.
         * @param { Callback<void> } callback - the callback used to return the result.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        off(type: 'listening' | 'close', callback?: Callback<void>): void;
        /**
         * Listens for error events of the UDPSocket connection.
         * @param { 'error' } type - Indicates Event name.
         * @param { ErrorCallback } callback - the callback used to return the result.
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Listens for error events of the UDPSocket connection.
         * @param { 'error' } type - Indicates Event name.
         * @param { ErrorCallback } callback - the callback used to return the result.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        on(type: 'error', callback: ErrorCallback): void;
        /**
         * Cancels listening for error events of the UDPSocket connection.
         * @param { 'error' } type - Indicates Event name.
         * @param { ErrorCallback } callback - the callback used to return the result.
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Cancels listening for error events of the UDPSocket connection.
         * @param { 'error' } type - Indicates Event name.
         * @param { ErrorCallback } callback - the callback used to return the result.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        off(type: 'error', callback?: ErrorCallback): void;
    }
    /**
     * Defines TCPSocket connection parameters.
     * @interface TCPConnectOptions
     * @syscap SystemCapability.Communication.NetStack
     * @since 7
     */
    /**
     * Defines TCPSocket connection parameters.
     * @interface TCPConnectOptions
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10
     */
    export interface TCPConnectOptions {
        /**
         * Bound IP address and port number.
         * @type { NetAddress }
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Bound IP address and port number.
         * @type { NetAddress }
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        address: NetAddress;
        /**
         * Timeout duration of the TCPSocket connection, in milliseconds.
         * @type { ?number }
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Timeout duration of the TCPSocket connection, in milliseconds.
         * @type { ?number }
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        timeout?: number;
    }
    /**
     * Defines the parameters for sending data over the TCPSocket connection.
     * @interface TCPSendOptions
     * @syscap SystemCapability.Communication.NetStack
     * @since 7
     */
    /**
     * Defines the parameters for sending data over the TCPSocket connection.
     * @interface TCPSendOptions
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10
     */
    export interface TCPSendOptions {
        /**
         * Data to send.
         * @type { string | ArrayBuffer }
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Data to send.
         * @type { string | ArrayBuffer }
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        data: string | ArrayBuffer;
        /**
         * Character encoding format.
         * @type { ?string }
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Character encoding format.
         * @type { ?string }
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        encoding?: string;
    }
    /**
     * Defines other properties of the TCPSocket connection.
     * @interface TCPExtraOptions
     * @syscap SystemCapability.Communication.NetStack
     * @since 7
     */
    /**
     * Defines other properties of the TCPSocket connection.
     * @interface TCPExtraOptions
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10
     */
    export interface TCPExtraOptions extends ExtraOptionsBase {
        /**
         * Whether to keep the connection alive. The default value is false.
         * @type { ?boolean }
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Whether to keep the connection alive. The default value is false.
         * @type { ?boolean }
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        keepAlive?: boolean;
        /**
         * Whether to enable OOBInline. The default value is false.
         * @type { ?boolean }
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Whether to enable OOBInline. The default value is false.
         * @type { ?boolean }
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        OOBInline?: boolean;
        /**
         * Whether to enable no-delay on the TCPSocket connection. The default value is false.
         * @type { ?boolean }
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Whether to enable no-delay on the TCPSocket connection. The default value is false.
         * @type { ?boolean }
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        TCPNoDelay?: boolean;
        /**
         * Socket linger.
         * @type { ?object }
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 7
         */
        /**
         * Socket linger.
         * @type { ?object }
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        socketLinger?: {
            on: boolean;
            linger: number;
        };
    }
    /**
     * Defines a TCPSocket connection.
     * @interface TCPSocket
     * @syscap SystemCapability.Communication.NetStack
     * @since 7
     */
    /**
     * Defines a TCPSocket connection.
     * @interface TCPSocket
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10
     */
    export interface TCPSocket {
        /**
         * Binds the IP address and port number. The port number can be specified or randomly allocated by the system.
         * @permission ohos.permission.INTERNET
         * @param { NetAddress } address - Destination address. {@link NetAddress}
         * @param { AsyncCallback<void> } callback - Return the callback of bind.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Binds the IP address and port number. The port number can be specified or randomly allocated by the system.
         * @permission ohos.permission.INTERNET
         * @param { NetAddress } address - Destination address. {@link NetAddress}
         * @param { AsyncCallback<void> } callback - the callback of bind.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        bind(address: NetAddress, callback: AsyncCallback<void>): void;
        /**
         * Binds the IP address and port number. The port number can be specified or randomly allocated by the system.
         * @permission ohos.permission.INTERNET
         * @param { NetAddress } address - Destination address. {@link NetAddress}
         * @returns { Promise<void> } The promise returned by the function.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Binds the IP address and port number. The port number can be specified or randomly allocated by the system.
         * @permission ohos.permission.INTERNET
         * @param { NetAddress } address - Destination address. {@link NetAddress}
         * @returns { Promise<void> } The promise returned by the function.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        bind(address: NetAddress): Promise<void>;
        /**
         * Sets up a connection to the specified IP address and port number.
         * @permission ohos.permission.INTERNET
         * @param { TCPConnectOptions } options - Optional parameters {@link TCPConnectOptions}.
         * @param { AsyncCallback<void> } callback - the callback of connect.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Sets up a connection to the specified IP address and port number.
         * @permission ohos.permission.INTERNET
         * @param { TCPConnectOptions } options - Optional parameters {@link TCPConnectOptions}.
         * @param { AsyncCallback<void> } callback - the callback of connect.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        connect(options: TCPConnectOptions, callback: AsyncCallback<void>): void;
        /**
         * Sets up a connection to the specified IP address and port number.
         * @permission ohos.permission.INTERNET
         * @param { TCPConnectOptions } options - Optional parameters {@link TCPConnectOptions}.
         * @returns { Promise<void> } The promise returned by the function.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Sets up a connection to the specified IP address and port number.
         * @permission ohos.permission.INTERNET
         * @param { TCPConnectOptions } options - Optional parameters {@link TCPConnectOptions}.
         * @returns { Promise<void> } The promise returned by the function.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        connect(options: TCPConnectOptions): Promise<void>;
        /**
         * Sends data over a TCPSocket connection.
         * @permission ohos.permission.INTERNET
         * @param { TCPSendOptions } options - Optional parameters {@link TCPSendOptions}.
         * @param { AsyncCallback<void> } callback - the callback of send.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Sends data over a TCPSocket connection.
         * @permission ohos.permission.INTERNET
         * @param { TCPSendOptions } options - Optional parameters {@link TCPSendOptions}.
         * @param { AsyncCallback<void> } callback - the callback of send.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        send(options: TCPSendOptions, callback: AsyncCallback<void>): void;
        /**
         * Sends data over a TCPSocket connection.
         * @permission ohos.permission.INTERNET
         * @param { TCPSendOptions } options - Optional parameters {@link TCPSendOptions}.
         * @returns { Promise<void> } The promise returned by the function.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Sends data over a TCPSocket connection.
         * @permission ohos.permission.INTERNET
         * @param { TCPSendOptions } options - Optional parameters {@link TCPSendOptions}.
         * @returns { Promise<void> } The promise returned by the function.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        send(options: TCPSendOptions): Promise<void>;
        /**
         * Closes a TCPSocket connection.
         * @permission ohos.permission.INTERNET
         * @param { AsyncCallback<void> } callback - the callback of close.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Closes a TCPSocket connection.
         * @permission ohos.permission.INTERNET
         * @param { AsyncCallback<void> } callback - the callback of close.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        close(callback: AsyncCallback<void>): void;
        /**
         * Closes a TCPSocket connection.
         * @permission ohos.permission.INTERNET
         * @returns { Promise<void> } The promise returned by the function.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Closes a TCPSocket connection.
         * @permission ohos.permission.INTERNET
         * @returns { Promise<void> } The promise returned by the function.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        close(): Promise<void>;
        /**
         * Obtains the peer address of a TCPSocket connection.
         * @permission ohos.permission.INTERNET
         * @param { AsyncCallback<NetAddress> } callback - the callback of getRemoteAddress. {@link NetAddress}
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Obtains the peer address of a TCPSocket connection.
         * @permission ohos.permission.INTERNET
         * @param { AsyncCallback<NetAddress> } callback - the callback of getRemoteAddress. {@link NetAddress}
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        getRemoteAddress(callback: AsyncCallback<NetAddress>): void;
        /**
         * Obtains the peer address of a TCPSocket connection.
         * @permission ohos.permission.INTERNET
         * @returns { Promise<NetAddress> } The promise returned by the function.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Obtains the peer address of a TCPSocket connection.
         * @permission ohos.permission.INTERNET
         * @returns { Promise<NetAddress> } The promise returned by the function.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        getRemoteAddress(): Promise<NetAddress>;
        /**
         * Obtains the status of the TCPSocket connection.
         * @permission ohos.permission.INTERNET
         * @param { AsyncCallback<SocketStateBase> } callback - the callback of getState. {@link SocketStateBase}
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Obtains the status of the TCPSocket connection.
         * @permission ohos.permission.INTERNET
         * @param { AsyncCallback<SocketStateBase> } callback - the callback of getState. {@link SocketStateBase}
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        getState(callback: AsyncCallback<SocketStateBase>): void;
        /**
         * Obtains the status of the TCPSocket connection.
         * @permission ohos.permission.INTERNET
         * @returns { Promise<SocketStateBase> } The promise returned by the function.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Obtains the status of the TCPSocket connection.
         * @permission ohos.permission.INTERNET
         * @returns { Promise<SocketStateBase> } The promise returned by the function.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        getState(): Promise<SocketStateBase>;
        /**
         * Obtains the file descriptor of the TCPSocket connection.
         * @param { AsyncCallback<number> } callback - The callback returns the file descriptor of the TCPSocket connection.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        getSocketFd(callback: AsyncCallback<number>): void;
        /**
         * Obtains the file descriptor of the TCPSocket connection.
         * @returns { Promise<number> } The promise returns the file descriptor of the TCPSocket connection.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        getSocketFd(): Promise<number>;
        /**
         * Sets other attributes of the TCPSocket connection.
         * @permission ohos.permission.INTERNET
         * @param { TCPExtraOptions } options - Optional parameters {@link TCPExtraOptions}.
         * @param { AsyncCallback<void> } callback - the callback of setExtraOptions.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Sets other attributes of the TCPSocket connection.
         * @permission ohos.permission.INTERNET
         * @param { TCPExtraOptions } options - Optional parameters {@link TCPExtraOptions}.
         * @param { AsyncCallback<void> } callback - the callback of setExtraOptions.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        setExtraOptions(options: TCPExtraOptions, callback: AsyncCallback<void>): void;
        /**
         * Sets other attributes of the TCPSocket connection.
         * @permission ohos.permission.INTERNET
         * @param { TCPExtraOptions } options - Optional parameters {@link TCPExtraOptions}.
         * @returns { Promise<void> } The promise returned by the function.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Sets other attributes of the TCPSocket connection.
         * @permission ohos.permission.INTERNET
         * @param { TCPExtraOptions } options - Optional parameters {@link TCPExtraOptions}.
         * @returns { Promise<void> } The promise returned by the function.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        setExtraOptions(options: TCPExtraOptions): Promise<void>;
        /**
         * Listens for message receiving events of the TCPSocket connection.
         * @param { 'message' } type - Indicates Event name.
         * @param { Callback<{ message: ArrayBuffer, remoteInfo: SocketRemoteInfo }> } callback - the callback used to return the result.
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Listens for message receiving events of the TCPSocket connection.
         * @param { 'message' } type Indicates Event name.
         * @param { Callback<{ message: ArrayBuffer, remoteInfo: SocketRemoteInfo }> } callback - the callback used to return the result.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        on(type: 'message', callback: Callback<{
            message: ArrayBuffer;
            remoteInfo: SocketRemoteInfo;
        }>): void;
        /**
         * Cancels listening for message receiving events of the TCPSocket connection.
         * @param { 'message' } type Indicates Event name.
         * @param { Callback<{ message: ArrayBuffer, remoteInfo: SocketRemoteInfo }> } callback - the callback used to return the result.
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Cancels listening for message receiving events of the TCPSocket connection.
         * @param { 'message' } type Indicates Event name.
         * @param { Callback<{ message: ArrayBuffer, remoteInfo: SocketRemoteInfo }> } callback - the callback used to return the result.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        off(type: 'message', callback?: Callback<{
            message: ArrayBuffer;
            remoteInfo: SocketRemoteInfo;
        }>): void;
        /**
         * Listens for connection or close events of the TCPSocket connection.
         * @param { 'connect' | 'close' } type - Indicates Event name.
         * @param { Callback<void> } callback - the callback used to return the result.
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Listens for connection or close events of the TCPSocket connection.
         * @param { 'connect' | 'close' } type - Indicates Event name.
         * @param { Callback<void> } callback - the callback used to return the result.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        on(type: 'connect' | 'close', callback: Callback<void>): void;
        /**
         * Cancels listening for connection or close events of the TCPSocket connection.
         * @param { 'connect' | 'close' } type - Indicates Event name.
         * @param { Callback<void> } callback - the callback used to return the result.
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Cancels listening for connection or close events of the TCPSocket connection.
         * @param { 'connect' | 'close' } type - Indicates Event name.
         * @param { Callback<void> } callback - the callback used to return the result.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        off(type: 'connect' | 'close', callback?: Callback<void>): void;
        /**
         * Listens for error events of the TCPSocket connection.
         * @param { 'error' } type - Indicates Event name.
         * @param { ErrorCallback } callback - the callback used to return the result.
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Listens for error events of the TCPSocket connection.
         * @param { 'error' } type - Indicates Event name.
         * @param { ErrorCallback } callback - the callback used to return the result.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        on(type: 'error', callback: ErrorCallback): void;
        /**
         * Cancels listening for error events of the TCPSocket connection.
         * @param { 'error' } type - Indicates Event name.
         * @param { ErrorCallback } callback - the callback used to return the result.
         * @syscap SystemCapability.Communication.NetStack
         * @since 7
         */
        /**
         * Cancels listening for error events of the TCPSocket connection.
         * @param { 'error' } type - Indicates Event name.
         * @param { ErrorCallback } callback - the callback used to return the result.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        off(type: 'error', callback?: ErrorCallback): void;
    }
    /**
     * Defines a TLSSocket connection.
     * @interface TLSSocket
     * @syscap SystemCapability.Communication.NetStack
     * @since 9
     */
    /**
     * Defines a TLSSocket connection.
     * @interface TLSSocket
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10
     */
    export interface TLSSocket {
        /**
         * Binds the IP address and port number. The port number can be specified or randomly allocated by the system.
         * @permission ohos.permission.INTERNET
         * @param { NetAddress } address - Destination address. {@link NetAddress}
         * @param { AsyncCallback<void> } callback - the callback of bind.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 2303198 - Address already in use.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 9
         */
        /**
         * Binds the IP address and port number. The port number can be specified or randomly allocated by the system.
         * @permission ohos.permission.INTERNET
         * @param { NetAddress } address - Destination address. {@link NetAddress}
         * @param { AsyncCallback<void> } callback - the callback of bind.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 2303198 - Address already in use.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        bind(address: NetAddress, callback: AsyncCallback<void>): void;
        /**
         * Binds the IP address and port number. The port number can be specified or randomly allocated by the system.
         * @permission ohos.permission.INTERNET
         * @param { NetAddress } address - Destination address. {@link NetAddress}
         * @returns { Promise<void> } The promise returned by the function.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 2303198 - Address already in use.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 9
         */
        /**
         * Binds the IP address and port number. The port number can be specified or randomly allocated by the system.
         * @permission ohos.permission.INTERNET
         * @param { NetAddress } address - Destination address. {@link NetAddress}
         * @returns { Promise<void> } The promise returned by the function.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 2303198 - Address already in use.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        bind(address: NetAddress): Promise<void>;
        /**
         * Obtains the peer address of a TLSSocket connection.
         * @param { AsyncCallback<NetAddress> } callback - the callback of getRemoteAddress.
         * @throws { BusinessError } 2303188 - Socket operation on non-socket.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 9
         */
        /**
         * Obtains the peer address of a TLSSocket connection.
         * @param { AsyncCallback<NetAddress> } callback - the callback of getRemoteAddress.
         * @throws { BusinessError } 2303188 - Socket operation on non-socket.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        getRemoteAddress(callback: AsyncCallback<NetAddress>): void;
        /**
         * Obtains the peer address of a TLSSocket connection.
         * @returns { Promise<NetAddress> } The promise returned by the function.
         * @throws { BusinessError } 2303188 - Socket operation on non-socket.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 9
         */
        /**
         * Obtains the peer address of a TLSSocket connection.
         * @returns { Promise<NetAddress> } The promise returned by the function.
         * @throws { BusinessError } 2303188 - Socket operation on non-socket.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        getRemoteAddress(): Promise<NetAddress>;
        /**
         * Obtains the status of the TLSSocket connection.
         * @param { AsyncCallback<SocketStateBase> } callback - the callback of getState.
         * @throws { BusinessError } 2303188 - Socket operation on non-socket.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 9
         */
        /**
         * Obtains the status of the TLSSocket connection.
         * @param { AsyncCallback<SocketStateBase> } callback - the callback of getState.
         * @throws { BusinessError } 2303188 - Socket operation on non-socket.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        getState(callback: AsyncCallback<SocketStateBase>): void;
        /**
         * Obtains the status of the TLSSocket connection.
         * @returns { Promise<SocketStateBase> } The promise returned by the function.
         * @throws { BusinessError } 2303188 - Socket operation on non-socket.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 9
         */
        /**
         * Obtains the status of the TLSSocket connection.
         * @returns { Promise<SocketStateBase> } The promise returned by the function.
         * @throws { BusinessError } 2303188 - Socket operation on non-socket.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        getState(): Promise<SocketStateBase>;
        /**
         * Sets other attributes of the TLSSocket connection.
         * @param { TCPExtraOptions } options - Optional parameters {@link TCPExtraOptions}.
         * @param { AsyncCallback<void> } callback - the callback of setExtraOptions.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 2303188 - Socket operation on non-socket.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 9
         */
        /**
         * Sets other attributes of the TLSSocket connection.
         * @param { TCPExtraOptions } options - Optional parameters {@link TCPExtraOptions}.
         * @param { AsyncCallback<void> } callback - the callback of setExtraOptions.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 2303188 - Socket operation on non-socket.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        setExtraOptions(options: TCPExtraOptions, callback: AsyncCallback<void>): void;
        /**
         * Sets other attributes of the TLSSocket connection.
         * @param { TCPExtraOptions } options - Optional parameters {@link TCPExtraOptions}.
         * @returns { Promise<void> } The promise returned by the function.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 2303188 - Socket operation on non-socket.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 9
         */
        /**
         * Sets other attributes of the TLSSocket connection.
         * @param { TCPExtraOptions } options - Optional parameters {@link TCPExtraOptions}.
         * @returns { Promise<void> } The promise returned by the function.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 2303188 - Socket operation on non-socket.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        setExtraOptions(options: TCPExtraOptions): Promise<void>;
        /**
         * Listens for message receiving events of the TLSSocket connection.
         * @param { 'message' } type - Indicates Event name.
         * @param { Callback<{ message: ArrayBuffer, remoteInfo: SocketRemoteInfo }> } callback - the callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 9
         */
        /**
         * Listens for message receiving events of the TLSSocket connection.
         * @param { 'message' } type Indicates Event name.
         * @param { Callback<{ message: ArrayBuffer, remoteInfo: SocketRemoteInfo }> } callback - the callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        on(type: 'message', callback: Callback<{
            message: ArrayBuffer;
            remoteInfo: SocketRemoteInfo;
        }>): void;
        /**
         * Cancels listening for message receiving events of the TLSSocket connection.
         * @param { 'message' } type - Indicates Event name.
         * @param { Callback<{ message: ArrayBuffer, remoteInfo: SocketRemoteInfo }> } callback - the callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 9
         */
        /**
         * Cancels listening for message receiving events of the TLSSocket connection.
         * @param { 'message' } type Indicates Event name.
         * @param { Callback<{ message: ArrayBuffer, remoteInfo: SocketRemoteInfo }> } callback - the callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        off(type: 'message', callback?: Callback<{
            message: ArrayBuffer;
            remoteInfo: SocketRemoteInfo;
        }>): void;
        /**
         * Listens for connection or close events of the TLSSocket connection.
         * @param { 'connect' | 'close' } type - Indicates Event name.
         * @param {Callback<void> } callback - the callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 9
         */
        /**
         * Listens for connection or close events of the TLSSocket connection.
         * @param { 'connect' | 'close' } type - Indicates Event name.
         * @param {Callback<void> } callback - the callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        on(type: 'connect' | 'close', callback: Callback<void>): void;
        /**
         * Cancels listening for connection or close events of the TLSSocket connection.
         * @param { 'connect' | 'close' } type - Indicates Event name.
         * @param {Callback<void> } callback - the callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 9
         */
        /**
         * Cancels listening for connection or close events of the TLSSocket connection.
         * @param { 'connect' | 'close' } type - Indicates Event name.
         * @param {Callback<void> } callback - the callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        off(type: 'connect' | 'close', callback?: Callback<void>): void;
        /**
         * Listens for error events of the TLSSocket connection.
         * @param { 'error' } type - Indicates Event name.
         * @param { ErrorCallback } callback - the callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 9
         */
        /**
         * Listens for error events of the TLSSocket connection.
         * @param { 'error' } type - Indicates Event name.
         * @param { ErrorCallback } callback - the callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        on(type: 'error', callback: ErrorCallback): void;
        /**
         * Cancels listening for error events of the TLSSocket connection.
         * @param { 'error' } type - Indicates Event name.
         * @param { ErrorCallback } callback - the callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 9
         */
        /**
         * Cancels listening for error events of the TLSSocket connection.
         * @param { 'error' } type - Indicates Event name.
         * @param { ErrorCallback } callback - the callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        off(type: 'error', callback?: ErrorCallback): void;
        /**
         * Returns an object representing a local certificate.
         * @param { AsyncCallback<X509CertRawData> } callback - the callback of getCertificate.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2303504 - Error looking up x509
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 9
         */
        /**
         * Returns an object representing a local certificate.
         * @param { AsyncCallback<X509CertRawData> } callback - the callback of getCertificate.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2303504 - Error looking up x509
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        getCertificate(callback: AsyncCallback<X509CertRawData>): void;
        /**
         * Returns an object representing a local certificate.
         * @returns { Promise<X509CertRawData> } The promise returned by the function.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2303504 - Error looking up x509
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 9
         */
        /**
         * Returns an object representing a local certificate.
         * @returns { Promise<X509CertRawData> } The promise returned by the function.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2303504 - Error looking up x509
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        getCertificate(): Promise<X509CertRawData>;
        /**
         * <p>Returns an object representing the peer certificate. If the peer does not provide a certificate,
         * <p>an empty object will be returned. If the socket is destroyed, null is returned.</p>
         * It only contains the peer's certificate.
         * @param { AsyncCallback<X509CertRawData> } callback - the callback of getRemoteCertificate.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 9
         */
        /**
         * <p>Returns an object representing the peer certificate. If the peer does not provide a certificate,
         * <p>an empty object will be returned. If the socket is destroyed, null is returned.</p>
         * It only contains the peer's certificate.
         * @param { AsyncCallback<X509CertRawData> } callback - the callback of getRemoteCertificate.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        getRemoteCertificate(callback: AsyncCallback<X509CertRawData>): void;
        /**
         * <p>Returns an object representing the peer certificate. If the peer does not provide a certificate,
         * <p>an empty object will be returned. If the socket is destroyed, null is returned.</p>
         * It only contains the peer's certificate.
         * @returns { Promise<X509CertRawData> } The promise returned by the function.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 9
         */
        /**
         * <p>Returns an object representing the peer certificate. If the peer does not provide a certificate,
         * <p>an empty object will be returned. If the socket is destroyed, null is returned.</p>
         * It only contains the peer's certificate.
         * @returns { Promise<X509CertRawData> } The promise returned by the function.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        getRemoteCertificate(): Promise<X509CertRawData>;
        /**
         * Returns a string containing the negotiated SSL/TLS protocol version of the current connection.
         * For connected sockets that have not completed the handshake process, the value 'unknown' will be returned.
         * Server sockets or disconnected client sockets will return a value of null.
         * @param { AsyncCallback<string> } callback - the callback of getProtocol.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2303505 - Error occurred in the tls system call.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 9
         */
        /**
         * Returns a string containing the negotiated SSL/TLS protocol version of the current connection.
         * For connected sockets that have not completed the handshake process, the value 'unknown' will be returned.
         * Server sockets or disconnected client sockets will return a value of null.
         * @param { AsyncCallback<string> } callback - the callback of getProtocol.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2303505 - Error occurred in the tls system call.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        getProtocol(callback: AsyncCallback<string>): void;
        /**
         * Returns a string containing the negotiated SSL/TLS protocol version of the current connection.
         * For connected sockets that have not completed the handshake process, the value 'unknown' will be returned.
         * Server sockets or disconnected client sockets will return a value of null.
         * @returns { Promise<string> } The promise returned by the function.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2303505 - Error occurred in the tls system call.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 9
         */
        /**
         * Returns a string containing the negotiated SSL/TLS protocol version of the current connection.
         * For connected sockets that have not completed the handshake process, the value 'unknown' will be returned.
         * Server sockets or disconnected client sockets will return a value of null.
         * @returns { Promise<string> } The promise returned by the function.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2303505 - Error occurred in the tls system call.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        getProtocol(): Promise<string>;
        /**
         * Returns a list containing the negotiated cipher suite information.
         * For example:{"TLS_RSA_WITH_AES_128_CBC_SHA256", "TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256"}
         * @param { AsyncCallback<Array<string>> } callback - the callback of getCipherSuite.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2303502 - Error in tls reading.
         * @throws { BusinessError } 2303505 - Error occurred in the tls system call.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 9
         */
        /**
         * Returns a list containing the negotiated cipher suite information.
         * For example:{"TLS_RSA_WITH_AES_128_CBC_SHA256", "TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256"}
         * @param { AsyncCallback<Array<string>> } callback - the callback of getCipherSuite.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2303502 - Error in tls reading.
         * @throws { BusinessError } 2303505 - Error occurred in the tls system call.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        getCipherSuite(callback: AsyncCallback<Array<string>>): void;
        /**
         * Returns a list containing the negotiated cipher suite information.
         * For example:{"TLS_RSA_WITH_AES_128_CBC_SHA256", "TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256"}
         * @returns { Promise<Array<string>> } The promise returned by the function.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2303502 - Error in tls reading.
         * @throws { BusinessError } 2303505 - Error occurred in the tls system call.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 9
         */
        /**
         * Returns a list containing the negotiated cipher suite information.
         * For example:{"TLS_RSA_WITH_AES_128_CBC_SHA256", "TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256"}
         * @returns { Promise<Array<string>> } The promise returned by the function.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2303502 - Error in tls reading.
         * @throws { BusinessError } 2303505 - Error occurred in the tls system call.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        getCipherSuite(): Promise<Array<string>>;
        /**
         * <p>The list of signature algorithms shared between the server and the client,
         * in descending order of priority.</p>
         * @param { AsyncCallback<Array<string>> } callback - the callback of getSignatureAlgorithms.@see https://www.openssl.org/docs/man1.1.1/man3/SSL_get_shared_sigalgs.html
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 9
         */
        /**
         * <p>The list of signature algorithms shared between the server and the client,
         * in descending order of priority.</p>
         * @param { AsyncCallback<Array<string>> } callback - the callback of getSignatureAlgorithms.@see https://www.openssl.org/docs/man1.1.1/man3/SSL_get_shared_sigalgs.html
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        getSignatureAlgorithms(callback: AsyncCallback<Array<string>>): void;
        /**
         * <p>The list of signature algorithms shared between the server and the client,
         * in descending order of priority.</p>
         * @returns { Promise<Array<string>> } The promise returned by the function.@see https://www.openssl.org/docs/man1.1.1/man3/SSL_get_shared_sigalgs.html
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 9
         */
        /**
         * <p>The list of signature algorithms shared between the server and the client,
         * in descending order of priority.</p>
         * @returns { Promise<Array<string>> } The promise returned by the function.@see https://www.openssl.org/docs/man1.1.1/man3/SSL_get_shared_sigalgs.html
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        getSignatureAlgorithms(): Promise<Array<string>>;
        /**
         * Sets up a connection to the specified IP address and port number.
         * Only TCP is supported.
         * @param { TLSConnectOptions } options - Optional parameters {@link TLSConnectOptions}.
         * @param { AsyncCallback<void> } callback - the callback of connect.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 2303104 - Interrupted system call.
         * @throws { BusinessError } 2303109 - Bad file number.
         * @throws { BusinessError } 2303111 - Resource temporarily unavailable try again.
         * @throws { BusinessError } 2303188 - Socket operation on non-socket.
         * @throws { BusinessError } 2303191 - Protocol wrong type for socket.
         * @throws { BusinessError } 2303198 - Address already in use.
         * @throws { BusinessError } 2303199 - Cannot assign requested address.
         * @throws { BusinessError } 2303210 - Connection timed out.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2303502 - Error in tls reading.
         * @throws { BusinessError } 2303503 - Error in tls writing
         * @throws { BusinessError } 2303505 - Error occurred in the tls system call.
         * @throws { BusinessError } 2303506 - Error clearing tls connection.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 9
         */
        /**
         * Sets up a connection to the specified IP address and port number.
         * Only TCP is supported.
         * @param { TLSConnectOptions } options - Optional parameters {@link TLSConnectOptions}.
         * @param { AsyncCallback<void> } callback - the callback of connect.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 2303104 - Interrupted system call.
         * @throws { BusinessError } 2303109 - Bad file number.
         * @throws { BusinessError } 2303111 - Resource temporarily unavailable try again.
         * @throws { BusinessError } 2303188 - Socket operation on non-socket.
         * @throws { BusinessError } 2303191 - Protocol wrong type for socket.
         * @throws { BusinessError } 2303198 - Address already in use.
         * @throws { BusinessError } 2303199 - Cannot assign requested address.
         * @throws { BusinessError } 2303210 - Connection timed out.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2303502 - Error in tls reading.
         * @throws { BusinessError } 2303503 - Error in tls writing
         * @throws { BusinessError } 2303505 - Error occurred in the tls system call.
         * @throws { BusinessError } 2303506 - Error clearing tls connection.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        connect(options: TLSConnectOptions, callback: AsyncCallback<void>): void;
        /**
         * Sets up a connection to the specified IP address and port number.
         * Only TCP is supported.
         * @param { TLSConnectOptions } options - Optional parameters {@link TLSConnectOptions}.
         * @returns { Promise<void> } The promise returned by the function.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 2303104 - Interrupted system call.
         * @throws { BusinessError } 2303109 - Bad file number.
         * @throws { BusinessError } 2303111 - Resource temporarily unavailable try again.
         * @throws { BusinessError } 2303188 - Socket operation on non-socket.
         * @throws { BusinessError } 2303191 - Protocol wrong type for socket.
         * @throws { BusinessError } 2303198 - Address already in use.
         * @throws { BusinessError } 2303199 - Cannot assign requested address.
         * @throws { BusinessError } 2303210 - Connection timed out.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2303502 - Error in tls reading.
         * @throws { BusinessError } 2303503 - Error in tls writing
         * @throws { BusinessError } 2303505 - Error occurred in the tls system call.
         * @throws { BusinessError } 2303506 - Error clearing tls connection.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 9
         */
        /**
         * Sets up a connection to the specified IP address and port number.
         * Only TCP is supported.
         * @param { TLSConnectOptions } options - Optional parameters {@link TLSConnectOptions}.
         * @returns { Promise<void> } The promise returned by the function.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 2303104 - Interrupted system call.
         * @throws { BusinessError } 2303109 - Bad file number.
         * @throws { BusinessError } 2303111 - Resource temporarily unavailable try again.
         * @throws { BusinessError } 2303188 - Socket operation on non-socket.
         * @throws { BusinessError } 2303191 - Protocol wrong type for socket.
         * @throws { BusinessError } 2303198 - Address already in use.
         * @throws { BusinessError } 2303199 - Cannot assign requested address.
         * @throws { BusinessError } 2303210 - Connection timed out.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2303502 - Error in tls reading.
         * @throws { BusinessError } 2303503 - Error in tls writing
         * @throws { BusinessError } 2303505 - Error occurred in the tls system call.
         * @throws { BusinessError } 2303506 - Error clearing tls connection.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        connect(options: TLSConnectOptions): Promise<void>;
        /**
         * Sends data over a TLSSocket connection.
         * @param { string } data - Optional parameters {@link string}.
         * @param { AsyncCallback<void> } callback - the callback of send.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2303503 - Error in tls writing.
         * @throws { BusinessError } 2303505 - Error occurred in the tls system call.
         * @throws { BusinessError } 2303506 - Error clearing tls connection.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 9
         */
        /**
         * Sends data over a TLSSocket connection.
         * @param { string } data - Optional parameters {@link string}.
         * @param { AsyncCallback<void> } callback - the callback of send.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2303503 - Error in tls writing.
         * @throws { BusinessError } 2303505 - Error occurred in the tls system call.
         * @throws { BusinessError } 2303506 - Error clearing tls connection.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        send(data: string, callback: AsyncCallback<void>): void;
        /**
         * Sends data over a TLSSocket connection.
         * @param { string } data - Optional parameters {@link string}.
         * @returns { Promise<void> } The promise returned by the function.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2303503 - Error in tls writing.
         * @throws { BusinessError } 2303505 - Error occurred in the tls system call.
         * @throws { BusinessError } 2303506 - Error clearing tls connection.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 9
         */
        /**
         * Sends data over a TLSSocket connection.
         * @param { string } data - Optional parameters {@link string}.
         * @returns { Promise<void> } The promise returned by the function.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2303503 - Error in tls writing.
         * @throws { BusinessError } 2303505 - Error occurred in the tls system call.
         * @throws { BusinessError } 2303506 - Error clearing tls connection.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        send(data: string): Promise<void>;
        /**
         * Closes a TLSSocket connection
         * @param { AsyncCallback<void> } callback - the callback of close.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2303505 - Error occurred in the tls system call.
         * @throws { BusinessError } 2303506 - Error clearing tls connection.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 9
         */
        /**
         * Closes a TLSSocket connection
         * @param { AsyncCallback<void> } callback - the callback of close.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2303505 - Error occurred in the tls system call.
         * @throws { BusinessError } 2303506 - Error clearing tls connection.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        close(callback: AsyncCallback<void>): void;
        /**
         * Closes a TLSSocket connection
         * @returns { Promise<void> } The promise returned by the function.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2303505 - Error occurred in the tls system call.
         * @throws { BusinessError } 2303506 - Error clearing tls connection.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 9
         */
        /**
         * Closes a TLSSocket connection
         * @returns { Promise<void> } The promise returned by the function.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2303505 - Error occurred in the tls system call.
         * @throws { BusinessError } 2303506 - Error clearing tls connection.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        close(): Promise<void>;
    }
    /**
     * Defines TLS security options. The CA certificate is mandatory, and other parameters are optional.
     * @interface TLSSecureOptions
     * @syscap SystemCapability.Communication.NetStack
     * @since 9
     */
    /**
     * Defines TLS security options. The CA certificate is mandatory, and other parameters are optional.
     * @interface TLSSecureOptions
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10
     */
    export interface TLSSecureOptions {
        /**
         * Certificate used to verify the identity of the server
         * @type {string | Array<string>}
         * @syscap SystemCapability.Communication.NetStack
         * @since 9
         */
        /**
         * Certificate used to verify the identity of the server
         * @type {string | Array<string>}
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        ca: string | Array<string>;
        /**
         * Certificate proving the identity of the client
         * @type {?string}
         * @syscap SystemCapability.Communication.NetStack
         * @since 9
         */
        /**
         * Certificate proving the identity of the client
         * @type {?string}
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        cert?: string;
        /**
         * Private key of client certificate
         * @type {?string}
         * @syscap SystemCapability.Communication.NetStack
         * @since 9
         */
        /**
         * Private key of client certificate
         * @type {?string}
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        key?: string;
        /**
         * Password of the private key
         * @type {?string}
         * @syscap SystemCapability.Communication.NetStack
         * @since 9
         */
        /**
         * Password of the private key
         * @type {?string}
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        password?: string;
        /**
         * TLS protocol version
         * @type {?Protocol | Array<Protocol>}
         * @syscap SystemCapability.Communication.NetStack
         * @since 9
         */
        /**
         * TLS protocol version
         * @type {?Protocol | Array<Protocol>}
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        protocols?: Protocol | Array<Protocol>;
        /**
         * default is false, use local cipher.
         * @type {?boolean}
         * @syscap SystemCapability.Communication.NetStack
         * @since 9
         */
        /**
         * default is false, use local cipher.
         * @type {?boolean}
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        useRemoteCipherPrefer?: boolean;
        /**
         * <P>Supported signature algorithms. This string can contain summary algorithms(SHA256,MD5,etc),Public key algorithm(RSA-PSS,ECDSA,etc),
         * Combination of the two(For example 'RSA+SHA384') or TLS v1.3 Scheme name(For example  rsa_pss_pss_sha512)</P>
         * @type {?string}
         * @syscap SystemCapability.Communication.NetStack
         * @since 9
         */
        /**
         * <P>Supported signature algorithms. This string can contain summary algorithms(SHA256,MD5,etc),Public key algorithm(RSA-PSS,ECDSA,etc),
         * Combination of the two(For example 'RSA+SHA384') or TLS v1.3 Scheme name(For example  rsa_pss_pss_sha512)</P>
         * @type {?string}
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        signatureAlgorithms?: string;
        /**
         * Crypto suite specification
         * @type {?string}
         * @syscap SystemCapability.Communication.NetStack
         * @since 9
         */
        /**
         * Crypto suite specification
         * @type {?string}
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        cipherSuite?: string;
    }
    /**
     * Defines TLS connection options.
     * @interface TLSConnectOptions
     * @syscap SystemCapability.Communication.NetStack
     * @since 9
     */
    /**
     * Defines TLS connection options.
     * @interface TLSConnectOptions
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10
     */
    export interface TLSConnectOptions {
        /**
         * Gateway address.
         * @type {NetAddress}
         * @syscap SystemCapability.Communication.NetStack
         * @since 9
         */
        /**
         * Gateway address.
         * @type {NetAddress}
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        address: NetAddress;
        /**
         * Protocol http2TLS security related operations.
         * @type {TLSSecureOptions}
         * @syscap SystemCapability.Communication.NetStack
         * @since 9
         */
        /**
         * Protocol http2TLS security related operations.
         * @type {TLSSecureOptions}
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        secureOptions: TLSSecureOptions;
        /**
         * Application layer protocol negotiation extension, such as "spdy/1", "http/1.1", "h2"
         * @type {?Array<string>}
         * @syscap SystemCapability.Communication.NetStack
         * @since 9
         */
        /**
         * Application layer protocol negotiation extension, such as "spdy/1", "http/1.1", "h2"
         * @type {?Array<string>}
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        ALPNProtocols?: Array<string>;
    }
    /**
     * Enumerates TLS protocol versions.
     * @enum {string}
     * @syscap SystemCapability.Communication.NetStack
     * @since 9
     */
    /**
     * Enumerates TLS protocol versions.
     * @enum {string}
     * @syscap SystemCapability.Communication.NetStack
     * @crossplatform
     * @since 10
     */
    export enum Protocol {
        /**
         * Use TLSv1.2 protocol for communication.
         * @syscap SystemCapability.Communication.NetStack
         * @since 9
         */
        /**
         * Use TLSv1.2 protocol for communication.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        TLSv12 = "TLSv1.2",
        /**
         * Use TLSv1.3 protocol for communication.
         * @syscap SystemCapability.Communication.NetStack
         * @since 9
         */
        /**
         * Use TLSv1.3 protocol for communication.
         * @syscap SystemCapability.Communication.NetStack
         * @crossplatform
         * @since 10
         */
        TLSv13 = "TLSv1.3"
    }
    /**
     * Defines the connection of the TCPSocket client and server.
     * @interface TCPSocketConnection
     * @syscap SystemCapability.Communication.NetStack
     * @since 10
     */
    export interface TCPSocketConnection {
        /**
         * The id of a client connects to the TCPSocketServer.
         * @type {number}
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        clientId: number;
        /**
         * Sends data over a TCPSocketServer connection to client.
         * @permission ohos.permission.INTERNET
         * @param { TCPSendOptions } options - Parameters for sending data {@link TCPSendOptions}.
         * @param { AsyncCallback<void> } callback - The callback of send.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        send(options: TCPSendOptions, callback: AsyncCallback<void>): void;
        /**
         * Sends data over a TCPSocketServer connection to client.
         * @permission ohos.permission.INTERNET
         * @param { TCPSendOptions } options - Parameters for sending data {@link TCPSendOptions}.
         * @returns { Promise<void> } The promise returned by the function.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        send(options: TCPSendOptions): Promise<void>;
        /**
         * Closes a TCPSocket client connection.
         * @permission ohos.permission.INTERNET
         * @param { AsyncCallback<void> } callback - The callback of close.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        close(callback: AsyncCallback<void>): void;
        /**
         * Closes a TCPSocket client connection.
         * @permission ohos.permission.INTERNET
         * @returns { Promise<void> } The promise returned by the function.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        close(): Promise<void>;
        /**
         * Obtains the peer address of a TCPSocketServer connection.
         * @permission ohos.permission.INTERNET
         * @param { AsyncCallback<NetAddress> } callback - The callback of getRemoteAddress.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 2300002 - System internal error.
         * @throws { BusinessError } 2303188 - Socket operation on non-socket.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        getRemoteAddress(callback: AsyncCallback<NetAddress>): void;
        /**
         * Obtains the peer address of a TCPSocketServer connection.
         * @permission ohos.permission.INTERNET
         * @returns { Promise<NetAddress> } The promise returned by the function.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 2300002 - System internal error.
         * @throws { BusinessError } 2303188 - Socket operation on non-socket.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        getRemoteAddress(): Promise<NetAddress>;
        /**
         * Listens for message receiving events of the TCPSocketConnection.
         * @param { 'message' } type - Indicates Event name.
         * @param { Callback<{ message: ArrayBuffer, remoteInfo: SocketRemoteInfo }> } callback - The callback of on.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        on(type: 'message', callback: Callback<{
            message: ArrayBuffer;
            remoteInfo: SocketRemoteInfo;
        }>): void;
        /**
         * Cancels listening for message receiving events of the TCPSocketConnection.
         * @param { 'message' } type - Indicates Event name.
         * @param { Callback<{ message: ArrayBuffer, remoteInfo: SocketRemoteInfo }> } callback - The callback of off.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        off(type: 'message', callback?: Callback<{
            message: ArrayBuffer;
            remoteInfo: SocketRemoteInfo;
        }>): void;
        /**
         * Listens for close events of the TCPSocketConnection.
         * @param { 'close' } type - Indicates Event name.
         * @param { Callback<void> } callback - The callback of on.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        on(type: 'close', callback: Callback<void>): void;
        /**
         * Cancels listening for close events of the TCPSocketConnection.
         * @param { 'close' } type - Indicates Event name.
         * @param { Callback<void> } callback - The callback of off.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        off(type: 'close', callback?: Callback<void>): void;
        /**
         * Listens for error events of the TCPSocketConnection.
         * @param { 'error' } type - Indicates Event name.
         * @param { ErrorCallback } callback - The callback of on.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        on(type: 'error', callback: ErrorCallback): void;
        /**
         * Cancels listening for error events of the TCPSocketConnection.
         * @param { 'error' } type - Indicates Event name.
         * @param { ErrorCallback } callback - The callback of off.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        off(type: 'error', callback?: ErrorCallback): void;
    }
    /**
     * Defines a TCPSocket server connection.
     * @interface TCPSocketServer
     * @syscap SystemCapability.Communication.NetStack
     * @since 10
     */
    export interface TCPSocketServer {
        /**
         * Binds the IP address and port number, the port number can be specified or randomly allocated by the system.
         * <p>Listens for a TCPSocket connection to be made to this socket and accepts it. This interface uses multiple threads
         * for accept processing and uses poll multiplex to process client connections.</p>
         * @permission ohos.permission.INTERNET
         * @param { NetAddress } address - Network address information {@link NetAddress}.
         * @param { AsyncCallback<void> } callback - The callback of listen.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 2300002 - System internal error.
         * @throws { BusinessError } 2303109 - Bad file number.
         * @throws { BusinessError } 2303111 - Resource temporarily unavailable try again.
         * @throws { BusinessError } 2303198 - Address already in use.
         * @throws { BusinessError } 2303199 - Cannot assign requested address.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        listen(address: NetAddress, callback: AsyncCallback<void>): void;
        /**
         * Binds the IP address and port number, the port number can be specified or randomly allocated by the system.
         * <p>Listens for a TCPSocket connection to be made to this socket and accepts it. This interface uses multiple threads
         * for accept processing and uses poll multiplex to process client connections.</p>
         * @permission ohos.permission.INTERNET
         * @param { NetAddress } address - Network address information {@link NetAddress}.
         * @returns { Promise<void> } The promise returned by the function.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 2300002 - System internal error.
         * @throws { BusinessError } 2303109 - Bad file number.
         * @throws { BusinessError } 2303111 - Resource temporarily unavailable try again.
         * @throws { BusinessError } 2303198 - Address already in use.
         * @throws { BusinessError } 2303199 - Cannot assign requested address.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        listen(address: NetAddress): Promise<void>;
        /**
         * Obtains the status of the TCPSocketServer connection.
         * @permission ohos.permission.INTERNET
         * @param { AsyncCallback<SocketStateBase> } callback - The callback of getState.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 2300002 - System internal error.
         * @throws { BusinessError } 2303188 - Socket operation on non-socket.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        getState(callback: AsyncCallback<SocketStateBase>): void;
        /**
         * Obtains the status of the TCPSocketServer connection.
         * @permission ohos.permission.INTERNET
         * @returns { Promise<SocketStateBase> } The promise returned by the function.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 2300002 - System internal error.
         * @throws { BusinessError } 2303188 - Socket operation on non-socket.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        getState(): Promise<SocketStateBase>;
        /**
         * Sets other attributes of the TCPSocketServer connection.
         * @permission ohos.permission.INTERNET
         * @param { TCPExtraOptions } options - Parameters of the attributes {@link TCPExtraOptions}.
         * @param { AsyncCallback<void> } callback - The callback of setExtraOptions.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 2300002 - System internal error.
         * @throws { BusinessError } 2303188 - Socket operation on non-socket.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        setExtraOptions(options: TCPExtraOptions, callback: AsyncCallback<void>): void;
        /**
         * Sets other attributes of the TCPSocketServer connection.
         * @permission ohos.permission.INTERNET
         * @param { TCPExtraOptions } options - Parameters of the attributes {@link TCPExtraOptions}.
         * @returns { Promise<void> } The promise returned by the function.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 2300002 - System internal error.
         * @throws { BusinessError } 2303188 - Socket operation on non-socket.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        setExtraOptions(options: TCPExtraOptions): Promise<void>;
        /**
         * Listens for connect events of the TCPSocketServer connection.
         * @param { 'connect' } type - Indicates Event name.
         * @param { Callback<TCPSocketConnection> } callback - The callback of on.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        on(type: 'connect', callback: Callback<TCPSocketConnection>): void;
        /**
         * Cancels listening for connect events of the TCPSocketServer connection.
         * @param { 'connect' } type - Indicates Event name.
         * @param { Callback<TCPSocketConnection> } callback - The callback of off.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        off(type: 'connect', callback?: Callback<TCPSocketConnection>): void;
        /**
         * Listens for error events of the TCPSocketServer connection.
         * @param { 'error' } type - Indicates Event name.
         * @param { ErrorCallback } callback - The callback of on.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        on(type: 'error', callback: ErrorCallback): void;
        /**
         * Cancels listening for error events of the TCPSocketServer connection.
         * @param { 'error' } type - Indicates Event name.
         * @param { ErrorCallback } callback - The callback of off.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        off(type: 'error', callback?: ErrorCallback): void;
    }
    /**
     * Defines the connection of the TLSSocket client and server.
     * @interface TLSSocketConnection
     * @syscap SystemCapability.Communication.NetStack
     * @since 10
     */
    export interface TLSSocketConnection {
        /**
         * The id of a client connects to the TLSSocketServer.
         * @type {number}
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        clientId: number;
        /**
         * Sends data over a TLSSocketServer connection to client.
         * @param { string } data - Parameters for sending data.
         * @param { AsyncCallback<void> } callback - The callback of send.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2303503 - Error in tls writing.
         * @throws { BusinessError } 2303505 - Error occurred in the tls system call.
         * @throws { BusinessError } 2303506 - Error clearing tls connection.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        send(data: string, callback: AsyncCallback<void>): void;
        /**
         * Sends data over a TLSSocketServer connection to client.
         * @param { string } data - Parameters for sending data.
         * @returns { Promise<void> } The promise returned by the function.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2303503 - Error in tls writing.
         * @throws { BusinessError } 2303505 - Error occurred in the tls system call.
         * @throws { BusinessError } 2303506 - Error clearing tls connection.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        send(data: string): Promise<void>;
        /**
         * Closes a TLSSocket client connection.
         * @param { AsyncCallback<void> } callback - The callback of close.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2303505 - Error occurred in the tls system call.
         * @throws { BusinessError } 2303506 - Error clearing tls connection.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        close(callback: AsyncCallback<void>): void;
        /**
         * Closes a TLSSocket client connection.
         * @returns { Promise<void> } The promise returned by the function.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2303505 - Error occurred in the tls system call.
         * @throws { BusinessError } 2303506 - Error clearing tls connection.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        close(): Promise<void>;
        /**
         * Obtains the peer address of a TLSSocketServer connection.
         * @param { AsyncCallback<NetAddress> } callback - The callback of getRemoteAddress.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 2300002 - System internal error.
         * @throws { BusinessError } 2303188 - Socket operation on non-socket.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        getRemoteAddress(callback: AsyncCallback<NetAddress>): void;
        /**
         * Obtains the peer address of a TLSSocketServer connection.
         * @returns { Promise<NetAddress> } The promise returned by the function.
         * @throws { BusinessError } 2300002 - System internal error.
         * @throws { BusinessError } 2303188 - Socket operation on non-socket.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        getRemoteAddress(): Promise<NetAddress>;
        /**
         * <p>Returns an object representing the peer certificate. If the peer does not provide a certificate,
         * an empty object will be returned. If the socket is destroyed, null is returned.</p>
         * It only contains the peer's certificate.
         * @param { AsyncCallback<X509CertRawData> } callback - The callback of getRemoteCertificate.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        getRemoteCertificate(callback: AsyncCallback<X509CertRawData>): void;
        /**
         * <p>Returns an object representing the peer certificate. If the peer does not provide a certificate,
         * an empty object will be returned. If the socket is destroyed, null is returned.</p>
         * It only contains the peer's certificate.
         * @returns { Promise<X509CertRawData> } The promise returned by the function.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        getRemoteCertificate(): Promise<X509CertRawData>;
        /**
         * Returns a list containing the negotiated cipher suite information.
         * For example:{"TLS_RSA_WITH_AES_128_CBC_SHA256", "TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256"}
         * @param { AsyncCallback<Array<string>> } callback - The callback of getCipherSuite.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2303502 - Error in tls reading.
         * @throws { BusinessError } 2303505 - Error occurred in the tls system call.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        getCipherSuite(callback: AsyncCallback<Array<string>>): void;
        /**
         * Returns a list containing the negotiated cipher suite information.
         * For example:{"TLS_RSA_WITH_AES_128_CBC_SHA256", "TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256"}
         * @returns { Promise<Array<string>> } The promise returned by the function.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2303502 - Error in tls reading.
         * @throws { BusinessError } 2303505 - Error occurred in the tls system call.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        getCipherSuite(): Promise<Array<string>>;
        /**
         * <p>The list of signature algorithms shared between the server and the client,
         * in descending order of priority.</p>
         * @param { AsyncCallback<Array<string>> } callback - The callback of getSignatureAlgorithms.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        getSignatureAlgorithms(callback: AsyncCallback<Array<string>>): void;
        /**
         * <p>The list of signature algorithms shared between the server and the client,
         * in descending order of priority.</p>
         * @returns { Promise<Array<string>> } The promise returned by the function.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        getSignatureAlgorithms(): Promise<Array<string>>;
        /**
         * Listens for message receiving events of the TLSSocketConnection.
         * @param { 'message' } type - Indicates Event name.
         * @param { Callback<{ message: ArrayBuffer, remoteInfo: SocketRemoteInfo }> } callback - The callback of on.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        on(type: 'message', callback: Callback<{
            message: ArrayBuffer;
            remoteInfo: SocketRemoteInfo;
        }>): void;
        /**
         * Cancels listening for message receiving events of the TLSSocketConnection.
         * @param { 'message' } type - Indicates Event name.
         * @param { Callback<{ message: ArrayBuffer, remoteInfo: SocketRemoteInfo }> } callback - The callback of off.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        off(type: 'message', callback?: Callback<{
            message: ArrayBuffer;
            remoteInfo: SocketRemoteInfo;
        }>): void;
        /**
         * Listens for close events of the TLSSocketConnection.
         * @param { 'close' } type - Indicates Event name.
         * @param { Callback<void> } callback - The callback of on.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        on(type: 'close', callback: Callback<void>): void;
        /**
         * Cancels listening for close events of the TLSSocketConnection.
         * @param { 'close' } type - Indicates Event name.
         * @param { Callback<void> } callback - The callback of off.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        off(type: 'close', callback?: Callback<void>): void;
        /**
         * Listens for error events of the TLSSocketConnection.
         * @param { 'error' } type - Indicates Event name.
         * @param { ErrorCallback } callback - The callback of on.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        on(type: 'error', callback: ErrorCallback): void;
        /**
         * Cancels listening for error events of the TLSSocketConnection.
         * @param { 'error' } type - Indicates Event name.
         * @param { ErrorCallback } callback - The callback of off.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        off(type: 'error', callback?: ErrorCallback): void;
    }
    /**
     * Defines a TLSSocketServer server connection.
     * @interface TLSSocketServer
     * @syscap SystemCapability.Communication.NetStack
     * @since 10
     */
    export interface TLSSocketServer {
        /**
         * Binds the IP address and port number, the port number can be specified or randomly allocated by the system.
         * <p>Listens for a TCPSocket connection to be made to this socket and accepts it. This interface uses multiple threads
         * for accept processing and uses poll multiplex to process client connections.</p>
         * @permission ohos.permission.INTERNET
         * @param { TLSConnectOptions } options - TLS connection options {@link TLSConnectOptions}.
         * @param { AsyncCallback<void> } callback - The callback of listen.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 2300002 - System internal error.
         * @throws { BusinessError } 2303109 - Bad file number.
         * @throws { BusinessError } 2303111 - Resource temporarily unavailable try again.
         * @throws { BusinessError } 2303198 - Address already in use.
         * @throws { BusinessError } 2303199 - Cannot assign requested address.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2303502 - Error in tls reading.
         * @throws { BusinessError } 2303503 - Error in tls writing
         * @throws { BusinessError } 2303505 - Error occurred in the tls system call.
         * @throws { BusinessError } 2303506 - Error clearing tls connection.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        listen(options: TLSConnectOptions, callback: AsyncCallback<void>): void;
        /**
         * Binds the IP address and port number, the port number can be specified or randomly allocated by the system.
         * <p>Listens for a TCPSocket connection to be made to this socket and accepts it. This interface uses multiple threads
         * for accept processing and uses poll multiplex to process client connections.</p>
         * @permission ohos.permission.INTERNET
         * @param { TLSConnectOptions } options - TLS connection options {@link TLSConnectOptions}.
         * @returns { Promise<void> } The promise returned by the function.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 2300002 - System internal error.
         * @throws { BusinessError } 2303109 - Bad file number.
         * @throws { BusinessError } 2303111 - Resource temporarily unavailable try again.
         * @throws { BusinessError } 2303198 - Address already in use.
         * @throws { BusinessError } 2303199 - Cannot assign requested address.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2303502 - Error in tls reading.
         * @throws { BusinessError } 2303503 - Error in tls writing
         * @throws { BusinessError } 2303505 - Error occurred in the tls system call.
         * @throws { BusinessError } 2303506 - Error clearing tls connection.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        listen(options: TLSConnectOptions): Promise<void>;
        /**
         * Obtains the status of the TLSSocketServer connection.
         * @param { AsyncCallback<SocketStateBase> } callback - The callback of getState.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 2303188 - Socket operation on non-socket.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        getState(callback: AsyncCallback<SocketStateBase>): void;
        /**
         * Obtains the status of the TLSSocketServer connection.
         * @returns { Promise<SocketStateBase> } The promise returned by the function.
         * @throws { BusinessError } 2303188 - Socket operation on non-socket.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        getState(): Promise<SocketStateBase>;
        /**
         * Sets other attributes of the TLSSocketServer connection.
         * @param { TCPExtraOptions } options - Parameters of the attributes {@link TCPExtraOptions}.
         * @param { AsyncCallback<void> } callback - The callback of setExtraOptions.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 2303188 - Socket operation on non-socket.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        setExtraOptions(options: TCPExtraOptions, callback: AsyncCallback<void>): void;
        /**
         * Sets other attributes of the TLSSocketServer connection.
         * @param { TCPExtraOptions } options - Parameters of the attributes {@link TCPExtraOptions}.
         * @returns { Promise<void> } The promise returned by the function.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 2303188 - Socket operation on non-socket.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        setExtraOptions(options: TCPExtraOptions): Promise<void>;
        /**
         * Returns an object representing a local certificate.
         * @param { AsyncCallback<X509CertRawData> } callback - The callback of getCertificate.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2303504 - Error looking up x509
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        getCertificate(callback: AsyncCallback<X509CertRawData>): void;
        /**
         * Returns an object representing a local certificate.
         * @returns { Promise<X509CertRawData> } The promise returned by the function.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2303504 - Error looking up x509
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        getCertificate(): Promise<X509CertRawData>;
        /**
         * Returns a string containing the negotiated SSL/TLS protocol version of the current connection.
         * For connected sockets that have not completed the handshake process, the value 'unknown' will be returned.
         * Server sockets or disconnected client sockets will return a value of null.
         * @param { AsyncCallback<string> } callback - The callback of getProtocol.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2303505 - Error occurred in the tls system call.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        getProtocol(callback: AsyncCallback<string>): void;
        /**
         * Returns a string containing the negotiated SSL/TLS protocol version of the current connection.
         * For connected sockets that have not completed the handshake process, the value 'unknown' will be returned.
         * Server sockets or disconnected client sockets will return a value of null.
         * @returns { Promise<string> } The promise returned by the function.
         * @throws { BusinessError } 2303501 - SSL is null.
         * @throws { BusinessError } 2303505 - Error occurred in the tls system call.
         * @throws { BusinessError } 2300002 - System internal error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        getProtocol(): Promise<string>;
        /**
         * Listens for connect events of the TLSSocketServer connection.
         * @param { 'connect' } type - Indicates Event name.
         * @param { Callback<TLSSocketConnection> } callback - The callback of on.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        on(type: 'connect', callback: Callback<TLSSocketConnection>): void;
        /**
         * Cancels listening for connect events of the TLSSocketServer connection.
         * @param { 'connect' } type - Indicates Event name.
         * @param { Callback<TLSSocketConnection> } callback - The callback of off.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        off(type: 'connect', callback?: Callback<TLSSocketConnection>): void;
        /**
         * Listens for error events of the TLSSocketServer connection.
         * @param { 'error' } type - Indicates Event name.
         * @param { ErrorCallback } callback - The callback of on.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        on(type: 'error', callback: ErrorCallback): void;
        /**
         * Cancels listening for error events of the TLSSocketServer connection.
         * @param { 'error' } type - Indicates Event name.
         * @param { ErrorCallback } callback - The callback of off.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.Communication.NetStack
         * @since 10
         */
        off(type: 'error', callback?: ErrorCallback): void;
    }
}
export default socket;