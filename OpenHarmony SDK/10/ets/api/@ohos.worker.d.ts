/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
/**
 * @typedef WorkerOptions
 * Provides options that can be set for the worker to create.
 * @syscap SystemCapability.Utils.Lang
 * @since 7
 */
/**
 * @typedef WorkerOptions
 * Provides options that can be set for the worker to create.
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 10
 */
export interface WorkerOptions {
    /**
     * Mode in which the worker executes the script.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     */
    /**
     * Mode in which the worker executes the script.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    type?: 'classic' | 'module';
    /**
     * Name of the worker.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     */
    /**
     * Name of the worker.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    name?: string;
    /**
     * Whether the worker is shared.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     */
    /**
     * Whether the worker is shared.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    shared?: boolean;
}
/**
 * @typedef Event
 * Defines the event.
 * @syscap SystemCapability.Utils.Lang
 * @since 7
 */
/**
 * @typedef Event
 * Defines the event.
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 10
 */
export interface Event {
    /**
     * Type of the Event.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     */
    /**
     * Type of the Event.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    readonly type: string;
    /**
     * Timestamp(accurate to millisecond) when the event is created.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     */
    /**
     * Timestamp(accurate to millisecond) when the event is created.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    readonly timeStamp: number;
}
/**
 * @typedef ErrorEvent
 * Provides detailed information about the exception occurred during worker execution.
 * @syscap SystemCapability.Utils.Lang
 * @since 7
 */
/**
 * @typedef ErrorEvent
 * Provides detailed information about the exception occurred during worker execution.
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 10
 */
export interface ErrorEvent extends Event {
    /**
     * Information about the exception.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     */
    /**
     * Information about the exception.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    readonly message: string;
    /**
     * File where the exception is located.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     */
    /**
     * File where the exception is located.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    readonly filename: string;
    /**
     * Number of the line where the exception is located.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     */
    /**
     * Number of the line where the exception is located.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    readonly lineno: number;
    /**
     * Number of the column where the exception is located.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     */
    /**
     * Number of the column where the exception is located.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    readonly colno: number;
    /**
     * Type of the exception.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     */
    /**
     * Type of the exception.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    readonly error: Object;
}
/**
 * @typedef MessageEvent
 * Holds the data transferred between worker threads.
 * @syscap SystemCapability.Utils.Lang
 * @since 7
 */
/**
 * @typedef MessageEvent
 * Holds the data transferred between worker threads.
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 10
 */
export interface MessageEvent<T> extends Event {
    /**
     * Data transferred when an exception occurs.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     */
    /**
     * Data transferred when an exception occurs.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    readonly data: T;
}
/**
 * @typedef MessageEvents
 * Saves the data transferred between worker thread and host thread.
 * @syscap SystemCapability.Utils.Lang
 * @since 9
 */
/**
 * @typedef MessageEvents
 * Saves the data transferred between worker thread and host thread.
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 10
 */
export interface MessageEvents extends Event {
    /**
     * Data transferred when an exception occurs.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Data transferred when an exception occurs.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    readonly data;
}
/**
 * @typedef PostMessageOptions
 * Specifies the object whose ownership need to be transferred during data transfer.
 * The object must be ArrayBuffer.
 * @syscap SystemCapability.Utils.Lang
 * @since 7
 */
/**
 * @typedef PostMessageOptions
 * Specifies the object whose ownership need to be transferred during data transfer.
 * The object must be ArrayBuffer.
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 10
 */
export interface PostMessageOptions {
    /**
     * ArrayBuffer array used to transfer the ownership.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     */
    /**
     * ArrayBuffer array used to transfer the ownership.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    transfer?: Object[];
}
/**
 * @typedef EventListener
 * Implements event listening.
 * @syscap SystemCapability.Utils.Lang
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.worker.WorkerEventListener
 */
export interface EventListener {
    /**
     * Specifies the callback to invoke.
     *
     * @param { Event } evt - evt evt Event class for the callback to invoke.
     * @returns { void | Promise<void> }
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.worker.WorkerEventListener.(event: Event)
     */
    (evt: Event): void | Promise<void>;
}
/**
 * @typedef WorkerEventListener
 * Implements event listening.
 * @syscap SystemCapability.Utils.Lang
 * @since 9
 */
/**
 * @typedef WorkerEventListener
 * Implements event listening.
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 10
 */
export interface WorkerEventListener {
    /**
     * Specifies the callback function to be invoked.
     *
     * @param { Event } event - event Event class for the callback to invoke.
     * @returns { void | Promise<void> }
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @throws { BusinessError } 10200004 - Worker instance is not running.
     * @throws { BusinessError } 10200005 - The invoked API is not supported in workers.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Specifies the callback function to be invoked.
     *
     * @param { Event } event - event Event class for the callback to invoke.
     * @returns { void | Promise<void> }
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @throws { BusinessError } 10200004 - Worker instance is not running.
     * @throws { BusinessError } 10200005 - The invoked API is not supported in workers.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    (event: Event): void | Promise<void>;
}
/**
 * Type of message, only "message" and "messageerror".
 *
 * @syscap SystemCapability.Utils.Lang
 * @since 7
 */
/**
 * Type of message, only "message" and "messageerror".
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 10
 */
type MessageType = 'message' | 'messageerror';
/**
 * @typedef EventTarget
 * Specific event features.
 * @syscap SystemCapability.Utils.Lang
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.worker.WorkerEventTarget
 */
export interface EventTarget {
    /**
     * Adds an event listener to the worker.
     *
     * @param { string } type - type Type of the event to listen for.
     * @param { EventListener } listener - listener Callback to invoke when an event of the specified type occurs.
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.worker.WorkerEventTarget.addEventListener
     */
    addEventListener(type: string, listener: EventListener): void;
    /**
     * Dispatches the event defined for the worker.
     *
     * @param { Event } event - event Event to dispatch.
     * @returns { boolean }
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.worker.WorkerEventTarget.dispatchEvent
     */
    dispatchEvent(event: Event): boolean;
    /**
     * Removes an event defined for the worker.
     *
     * @param { string } type - type Type of the event for which the event listener is removed.
     * @param { EventListener } callback - callback Callback of the event listener to remove.
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.worker.WorkerEventTarget.removeEventListener
     */
    removeEventListener(type: string, callback?: EventListener): void;
    /**
     * Removes all event listeners for the worker.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.worker.WorkerEventTarget.removeAllListener
     */
    removeAllListener(): void;
}
/**
 * @typedef WorkerEventTarget
 * Specific worker event features.
 * @syscap SystemCapability.Utils.Lang
 * @since 9
 */
/**
 * @typedef WorkerEventTarget
 * Specific worker event features.
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 10
 */
export interface WorkerEventTarget {
    /**
     * Adds an event listener to the worker.
     *
     * @param { string } type - type Type of the event to listen for.
     * @param { WorkerEventListener } listener - listener Callback to invoke when an event of the specified type occurs.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @throws { BusinessError } 10200004 - Worker instance is not running.
     * @throws { BusinessError } 10200005 - The invoked API is not supported in workers.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Adds an event listener to the worker.
     *
     * @param { string } type - type Type of the event to listen for.
     * @param { WorkerEventListener } listener - listener Callback to invoke when an event of the specified type occurs.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @throws { BusinessError } 10200004 - Worker instance is not running.
     * @throws { BusinessError } 10200005 - The invoked API is not supported in workers.
     * @syscap SystemCapability.Utils.Lang
     * @since 10
     */
    addEventListener(type: string, listener: WorkerEventListener): void;
    /**
     * Handle the event defined for the worker.
     *
     * @param { Event } event - event Event to dispatch.
     * @returns { boolean }
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @throws { BusinessError } 10200004 - Worker instance is not running.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Handle the event defined for the worker.
     *
     * @param { Event } event - event Event to dispatch.
     * @returns { boolean }
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @throws { BusinessError } 10200004 - Worker instance is not running.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    dispatchEvent(event: Event): boolean;
    /**
     * Remove an event defined for the worker.
     *
     * @param { string } type - type Type of the event for which the event listener is cancelled.
     * @param { WorkerEventListener } callback - callback Callback of the event listener to remove.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @throws { BusinessError } 10200004 - Worker instance is not running.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Remove an event defined for the worker.
     *
     * @param { string } type - type Type of the event for which the event listener is cancelled.
     * @param { WorkerEventListener } callback - callback Callback of the event listener to remove.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @throws { BusinessError } 10200004 - Worker instance is not running.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    removeEventListener(type: string, callback?: WorkerEventListener): void;
    /**
     * Remove all event listeners for the worker.
     *
     * @throws { BusinessError } 10200004 - Worker instance is not running.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Remove all event listeners for the worker.
     *
     * @throws { BusinessError } 10200004 - Worker instance is not running.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    removeAllListener(): void;
}
/**
 * @typedef WorkerGlobalScope
 * Specifies the worker thread running environment, which is isolated from the host thread environment.
 * @syscap SystemCapability.Utils.Lang
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.worker.GlobalScope
 */
declare interface WorkerGlobalScope extends EventTarget {
    /**
     * Worker name specified when there is a new worker.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.worker.GlobalScope.name
     */
    readonly name: string;
    /**
     * The onerror attribute of parentPort specifies
     * the event handler to be called when an exception occurs during worker execution.
     * The event handler is executed in the worker thread.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.worker.GlobalScope.onerror
     */
    onerror?: (ev: ErrorEvent) => void;
    readonly self: WorkerGlobalScope & typeof globalThis;
}
/**
 * @typedef GlobalScope
 * The environment Specified in which worker threads run, which is isolated from the host thread environment.
 * @syscap SystemCapability.Utils.Lang
 * @since 9
 */
/**
 * @typedef GlobalScope
 * The environment Specified in which worker threads run, which is isolated from the host thread environment.
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 10
 */
declare interface GlobalScope extends WorkerEventTarget {
    /**
     * Name of Worker specified when there is a new worker.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Name of Worker specified when there is a new worker.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    readonly name: string;
    /**
     * The onerror attribute of parentPort specified.
     * the event handler to be called when an exception occurs during worker execution.
     * The event handler is executed in the worker thread.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * The onerror attribute of parentPort specified.
     * the event handler to be called when an exception occurs during worker execution.
     * The event handler is executed in the worker thread.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    onerror?: (ev: ErrorEvent) => void;
    /**
     * Specify the type attribute for self.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Specify the type attribute for self.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    readonly self: GlobalScope & typeof globalThis;
}
/**
 * @typedef DedicatedWorkerGlobalScope
 * Specifies the worker thread running environment, which is isolated from the host thread environment
 * @syscap SystemCapability.Utils.Lang
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.worker.ThreadWorkerGlobalScope
 */
export interface DedicatedWorkerGlobalScope extends WorkerGlobalScope {
    /**
     * The onmessage attribute of parentPort specifies the event handler
     * to be called then the worker thread receives a message sent by
     * the host thread through worker postMessage.
     * The event handler is executed in the worker thread.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.worker.ThreadWorkerGlobalScope.onmessage
     */
    onmessage?: (this: DedicatedWorkerGlobalScope, ev: MessageEvent) => void;
    /**
     * The onmessage attribute of parentPort specifies the event handler
     * to be called then the worker receives a message that cannot be deserialized.
     * The event handler is executed in the worker thread.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.worker.ThreadWorkerGlobalScope.onmessageerror
     */
    onmessageerror?: (this: DedicatedWorkerGlobalScope, ev: MessageEvent) => void;
    /**
     * Close the worker thread to stop the worker from receiving messages
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.worker.ThreadWorkerGlobalScope.close
     */
    close(): void;
    /**
     * Send a message to be host thread from the worker
     *
     * @param { Object } messageObject - messageObject Data to be sent to the worker
     * @param { Transferable[] } transfer - transfer array cannot contain null.
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.worker.ThreadWorkerGlobalScope.postMessage
     */
    postMessage(messageObject: Object, transfer: Transferable[]): void;
    postMessage(messageObject: Object, options?: PostMessageOptions): void;
    /**
     * Send a message to host thread from the worker
     *
     * @param { Object } messageObject - messageObject Data to be sent to the worker
     * @param { ArrayBuffer[] } transfer - transfer array cannot contain null.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     * @deprecated since 9
     */
    postMessage(messageObject: Object, transfer: ArrayBuffer[]): void;
}
/**
 * @typedef ThreadWorkerGlobalScope
 * Specifies the thread-worker running environment, which is isolated from the host-thread environment
 * @syscap SystemCapability.Utils.Lang
 * @since 9
 */
/**
 * @typedef ThreadWorkerGlobalScope
 * Specifies the thread-worker running environment, which is isolated from the host-thread environment
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 10
 */
export interface ThreadWorkerGlobalScope extends GlobalScope {
    /**
     * The onmessage attribute of parentPort specifies the event handler
     * to be called then the worker thread receives a message sent by
     * the host thread through worker postMessage.
     * The event handler is executed in the worker thread.
     *
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @throws { BusinessError } 10200004 - Worker instance is not running.
     * @throws { BusinessError } 10200005 - The invoked API is not supported in workers.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * The onmessage attribute of parentPort specifies the event handler
     * to be called then the worker thread receives a message sent by
     * the host thread through worker postMessage.
     * The event handler is executed in the worker thread.
     *
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @throws { BusinessError } 10200004 - Worker instance is not running.
     * @throws { BusinessError } 10200005 - The invoked API is not supported in workers.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    onmessage?: (this: ThreadWorkerGlobalScope, ev: MessageEvents) => void;
    /**
     * The onmessage attribute of parentPort specifies the event handler
     * to be called then the worker receives a message that cannot be deserialized.
     * The event handler is executed in the worker thread.
     *
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @throws { BusinessError } 10200004 - Worker instance is not running.
     * @throws { BusinessError } 10200005 - The invoked API is not supported in workers.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * The onmessage attribute of parentPort specifies the event handler
     * to be called then the worker receives a message that cannot be deserialized.
     * The event handler is executed in the worker thread.
     *
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @throws { BusinessError } 10200004 - Worker instance is not running.
     * @throws { BusinessError } 10200005 - The invoked API is not supported in workers.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    onmessageerror?: (this: ThreadWorkerGlobalScope, ev: MessageEvents) => void;
    /**
     * Close the worker thread to stop the worker from receiving messages
     *
     * @throws { BusinessError } 10200004 - Worker instance is not running.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Close the worker thread to stop the worker from receiving messages
     *
     * @throws { BusinessError } 10200004 - Worker instance is not running.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    close(): void;
    /**
     * Send a message to host thread from the worker
     *
     * @param { Object } messageObject - messageObject Data to be sent to the worker
     * @param { ArrayBuffer[] } transfer - transfer array cannot contain null.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @throws { BusinessError } 10200004 - Worker instance is not running.
     * @throws { BusinessError } 10200006 - An exception occurred during serialization.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Send a message to host thread from the worker
     *
     * @param { Object } messageObject - messageObject Data to be sent to the worker
     * @param { ArrayBuffer[] } transfer - transfer array cannot contain null.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @throws { BusinessError } 10200004 - Worker instance is not running.
     * @throws { BusinessError } 10200006 - An exception occurred during serialization.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    postMessage(messageObject: Object, transfer: ArrayBuffer[]): void;
    /**
     * Send a message to be host thread from the worker
     *
     * @param { Object } messageObject - messageObject Data to be sent to the worker
     * @param { PostMessageOptions } options - options Option can be set for postmessage.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @throws { BusinessError } 10200004 - Worker instance is not running.
     * @throws { BusinessError } 10200006 - An exception occurred during serialization.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Send a message to be host thread from the worker
     *
     * @param { Object } messageObject - messageObject Data to be sent to the worker
     * @param { PostMessageOptions } options - options Option can be set for postmessage.
     * @throws { BusinessError } 401 - if the input parameters are invalid.
     * @throws { BusinessError } 10200004 - Worker instance is not running.
     * @throws { BusinessError } 10200006 - An exception occurred during serialization.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    postMessage(messageObject: Object, options?: PostMessageOptions): void;
}
/**
 * JS cross-thread communication tool
 *
 * @namespace worker
 * @syscap SystemCapability.Utils.Lang
 * @since 7
 */
/**
 * JS cross-thread communication tool
 *
 * @namespace worker
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 10
 */
declare namespace worker {
    /**
     * The ThreadWorker class contains all Worker functions.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * The ThreadWorker class contains all Worker functions.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    class ThreadWorker implements WorkerEventTarget {
        /**
         * Creates a worker instance
         *
         * @param { string } scriptURL - scriptURL URL of the script to be executed by the worker
         * @param { WorkerOptions } options - options Options that can be set for the worker
         * @throws { BusinessError } 401 - if the input parameters are invalid.
         * @throws { BusinessError } 10200003 - Worker initialization failure.
         * @throws { BusinessError } 10200007 - The worker file patch is invalid path.
         * @syscap SystemCapability.Utils.Lang
         * @since 9
         */
        /**
         * Creates a worker instance
         *
         * @param { string } scriptURL - scriptURL URL of the script to be executed by the worker
         * @param { WorkerOptions } options - options Options that can be set for the worker
         * @throws { BusinessError } 401 - if the input parameters are invalid.
         * @throws { BusinessError } 10200003 - Worker initialization failure.
         * @throws { BusinessError } 10200007 - The worker file patch is invalid path.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        constructor(scriptURL: string, options?: WorkerOptions);
        /**
         * The onexit attribute of the worker specifies the event handler to be called
         * when the worker exits. The handler is executed in the host thread.
         *
         * @throws { BusinessError } 401 - if the input parameters are invalid.
         * @throws { BusinessError } 10200004 - Worker instance is not running.
         * @throws { BusinessError } 10200005 - The invoked API is not supported in workers.
         * @syscap SystemCapability.Utils.Lang
         * @since 9
         */
        /**
         * The onexit attribute of the worker specifies the event handler to be called
         * when the worker exits. The handler is executed in the host thread.
         *
         * @throws { BusinessError } 401 - if the input parameters are invalid.
         * @throws { BusinessError } 10200004 - Worker instance is not running.
         * @throws { BusinessError } 10200005 - The invoked API is not supported in workers.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        onexit?: (code: number) => void;
        /**
         * The onerror attribute of the worker specifies the event handler to be called
         * when an exception occurs during worker execution.
         * The event handler is executed in the host thread.
         *
         * @throws { BusinessError } 401 - if the input parameters are invalid.
         * @throws { BusinessError } 10200004 - Worker instance is not running.
         * @throws { BusinessError } 10200005 - The invoked API is not supported in workers.
         * @syscap SystemCapability.Utils.Lang
         * @since 9
         */
        /**
         * The onerror attribute of the worker specifies the event handler to be called
         * when an exception occurs during worker execution.
         * The event handler is executed in the host thread.
         *
         * @throws { BusinessError } 401 - if the input parameters are invalid.
         * @throws { BusinessError } 10200004 - Worker instance is not running.
         * @throws { BusinessError } 10200005 - The invoked API is not supported in workers.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        onerror?: (err: ErrorEvent) => void;
        /**
         * The onmessage attribute of the worker specifies the event handler
         * to be called then the host thread receives a message created by itself
         * and sent by the worker through the parentPort.postMessage.
         * The event handler is executed in the host thread.
         *
         * @throws { BusinessError } 401 - if the input parameters are invalid.
         * @throws { BusinessError } 10200004 - Worker instance is not running.
         * @throws { BusinessError } 10200005 - The invoked API is not supported in workers.
         * @syscap SystemCapability.Utils.Lang
         * @since 9
         */
        /**
         * The onmessage attribute of the worker specifies the event handler
         * to be called then the host thread receives a message created by itself
         * and sent by the worker through the parentPort.postMessage.
         * The event handler is executed in the host thread.
         *
         * @throws { BusinessError } 401 - if the input parameters are invalid.
         * @throws { BusinessError } 10200004 - Worker instance is not running.
         * @throws { BusinessError } 10200005 - The invoked API is not supported in workers.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        onmessage?: (event: MessageEvents) => void;
        /**
         * The onmessage attribute of the worker specifies the event handler
         * when the worker receives a message that cannot be serialized.
         * The event handler is executed in the host thread.
         *
         * @throws { BusinessError } 401 - if the input parameters are invalid.
         * @throws { BusinessError } 10200004 - Worker instance is not running.
         * @throws { BusinessError } 10200005 - The invoked API is not supported in workers.
         * @syscap SystemCapability.Utils.Lang
         * @since 9
         */
        /**
         * The onmessage attribute of the worker specifies the event handler
         * when the worker receives a message that cannot be serialized.
         * The event handler is executed in the host thread.
         *
         * @throws { BusinessError } 401 - if the input parameters are invalid.
         * @throws { BusinessError } 10200004 - Worker instance is not running.
         * @throws { BusinessError } 10200005 - The invoked API is not supported in workers.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        onmessageerror?: (event: MessageEvents) => void;
        /**
         * Sends a message to the worker thread.
         * The data is transferred using the structured clone algorithm.
         *
         * @param { Object } message - message Data to be sent to the worker
         * @param { ArrayBuffer[] } transfer - transfer ArrayBuffer instance that can be transferred.
         * The transferList array cannot contain null.
         * @throws { BusinessError } 401 - if the input parameters are invalid.
         * @throws { BusinessError } 10200004 - Worker instance is not running.
         * @throws { BusinessError } 10200006 - An exception occurred during serialization.
         * @syscap SystemCapability.Utils.Lang
         * @since 9
         */
        /**
         * Sends a message to the worker thread.
         * The data is transferred using the structured clone algorithm.
         *
         * @param { Object } message - message Data to be sent to the worker
         * @param { ArrayBuffer[] } transfer - transfer ArrayBuffer instance that can be transferred.
         * The transferList array cannot contain null.
         * @throws { BusinessError } 401 - if the input parameters are invalid.
         * @throws { BusinessError } 10200004 - Worker instance is not running.
         * @throws { BusinessError } 10200006 - An exception occurred during serialization.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        postMessage(message: Object, transfer: ArrayBuffer[]): void;
        /**
         * Sends a message to the worker thread.
         * The data is transferred using the structured clone algorithm.
         *
         * @param { Object } message - message Data to be sent to the worker
         * @param { PostMessageOptions } options - options
         * @throws { BusinessError } 401 - if the input parameters are invalid.
         * @throws { BusinessError } 10200004 - Worker instance is not running.
         * @throws { BusinessError } 10200006 - An exception occurred during serialization.
         * @syscap SystemCapability.Utils.Lang
         * @since 9
         */
        /**
         * Sends a message to the worker thread.
         * The data is transferred using the structured clone algorithm.
         *
         * @param { Object } message - message Data to be sent to the worker
         * @param { PostMessageOptions } options - options
         * @throws { BusinessError } 401 - if the input parameters are invalid.
         * @throws { BusinessError } 10200004 - Worker instance is not running.
         * @throws { BusinessError } 10200006 - An exception occurred during serialization.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        postMessage(message: Object, options?: PostMessageOptions): void;
        /**
         * Adds an event listener to the worker.
         *
         * @param { string } type - type Adds an event listener to the worker.
         * @param { WorkerEventListener } listener - listener Callback to invoke when an event of the specified type occurs.
         * @throws { BusinessError } 401 - if the input parameters are invalid.
         * @throws { BusinessError } 10200004 - Worker instance is not running.
         * @throws { BusinessError } 10200005 - The invoked API is not supported in workers.
         * @syscap SystemCapability.Utils.Lang
         * @since 9
         */
        /**
         * Adds an event listener to the worker.
         *
         * @param { string } type - type Adds an event listener to the worker.
         * @param { WorkerEventListener } listener - listener Callback to invoke when an event of the specified type occurs.
         * @throws { BusinessError } 401 - if the input parameters are invalid.
         * @throws { BusinessError } 10200004 - Worker instance is not running.
         * @throws { BusinessError } 10200005 - The invoked API is not supported in workers.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        on(type: string, listener: WorkerEventListener): void;
        /**
         * Adds an event listener to the worker
         * and removes the event listener automatically after it is invoked once.
         *
         * @param { string } type - type Type of the event to listen for
         * @param { WorkerEventListener } listener - listener Callback to invoke when an event of the specified type occurs
         * @throws { BusinessError } 401 - if the input parameters are invalid.
         * @throws { BusinessError } 10200004 - Worker instance is not running.
         * @throws { BusinessError } 10200005 - The invoked API is not supported in workers.
         * @syscap SystemCapability.Utils.Lang
         * @since 9
         */
        /**
         * Adds an event listener to the worker
         * and removes the event listener automatically after it is invoked once.
         *
         * @param { string } type - type Type of the event to listen for
         * @param { WorkerEventListener } listener - listener Callback to invoke when an event of the specified type occurs
         * @throws { BusinessError } 401 - if the input parameters are invalid.
         * @throws { BusinessError } 10200004 - Worker instance is not running.
         * @throws { BusinessError } 10200005 - The invoked API is not supported in workers.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        once(type: string, listener: WorkerEventListener): void;
        /**
         * Removes an event listener to the worker.
         *
         * @param { string } type - type Type of the event for which the event listener is removed.
         * @param { WorkerEventListener } listener - listener Callback of the event listener to remove.
         * @throws { BusinessError } 401 - if the input parameters are invalid.
         * @throws { BusinessError } 10200004 - Worker instance is not running.
         * @throws { BusinessError } 10200005 - The invoked API is not supported in workers.
         * @syscap SystemCapability.Utils.Lang
         * @since 9
         */
        /**
         * Removes an event listener to the worker.
         *
         * @param { string } type - type Type of the event for which the event listener is removed.
         * @param { WorkerEventListener } listener - listener Callback of the event listener to remove.
         * @throws { BusinessError } 401 - if the input parameters are invalid.
         * @throws { BusinessError } 10200004 - Worker instance is not running.
         * @throws { BusinessError } 10200005 - The invoked API is not supported in workers.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        off(type: string, listener?: WorkerEventListener): void;
        /**
         * Terminates the worker thread to stop the worker from receiving messages
         *
         * @throws { BusinessError } 10200004 - Worker instance is not running.
         * @syscap SystemCapability.Utils.Lang
         * @since 9
         */
        /**
         * Terminates the worker thread to stop the worker from receiving messages
         *
         * @throws { BusinessError } 10200004 - Worker instance is not running.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        terminate(): void;
        /**
         * Adds an event listener to the worker.
         *
         * @param { string } type - type Type of the event to listen for.
         * @param { WorkerEventListener } listener Callback to invoke when an event of the specified type occurs.
         * @throws { BusinessError } 401 - if the input parameters are invalid.
         * @throws { BusinessError } 10200004 - Worker instance is not running.
         * @throws { BusinessError } 10200005 - The invoked API is not supported in workers.
         * @syscap SystemCapability.Utils.Lang
         * @since 9
         */
        /**
         * Adds an event listener to the worker.
         *
         * @param { string } type - type Type of the event to listen for.
         * @param { WorkerEventListener } listener Callback to invoke when an event of the specified type occurs.
         * @throws { BusinessError } 401 - if the input parameters are invalid.
         * @throws { BusinessError } 10200004 - Worker instance is not running.
         * @throws { BusinessError } 10200005 - The invoked API is not supported in workers.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        addEventListener(type: string, listener: WorkerEventListener): void;
        /**
         * Handle the event defined for the worker.
         *
         * @param { Event } event - event Event to dispatch.
         * @returns { boolean }
         * @throws { BusinessError } 401 - if the input parameters are invalid.
         * @throws { BusinessError } 10200004 - Worker instance is not running.
         * @syscap SystemCapability.Utils.Lang
         * @since 9
         */
        /**
         * Handle the event defined for the worker.
         *
         * @param { Event } event - event Event to dispatch.
         * @returns { boolean }
         * @throws { BusinessError } 401 - if the input parameters are invalid.
         * @throws { BusinessError } 10200004 - Worker instance is not running.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        dispatchEvent(event: Event): boolean;
        /**
         * Remove an event defined for the worker.
         *
         * @param { string } type - type Type of the event for which the event listener is cancelled.
         * @param { WorkerEventListener } callback - callback Callback of the event listener to remove.
         * @throws { BusinessError } 401 - if the input parameters are invalid.
         * @throws { BusinessError } 10200004 - Worker instance is not running.
         * @syscap SystemCapability.Utils.Lang
         * @since 9
         */
        /**
         * Remove an event defined for the worker.
         *
         * @param { string } type - type Type of the event for which the event listener is cancelled.
         * @param { WorkerEventListener } callback - callback Callback of the event listener to remove.
         * @throws { BusinessError } 401 - if the input parameters are invalid.
         * @throws { BusinessError } 10200004 - Worker instance is not running.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        removeEventListener(type: string, callback?: WorkerEventListener): void;
        /**
         * Remove all event listeners for the worker.
         *
         * @throws { BusinessError } 10200004 - Worker instance is not running.
         * @syscap SystemCapability.Utils.Lang
         * @since 9
         */
        /**
         * Remove all event listeners for the worker.
         *
         * @throws { BusinessError } 10200004 - Worker instance is not running.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        removeAllListener(): void;
    }
    /**
     * The Worker class contains all Worker functions.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.worker.ThreadWorker
     */
    class Worker implements EventTarget {
        /**
         * Creates a worker instance
         *
         * @param { string } scriptURL - scriptURL URL of the script to be executed by the worker
         * @param { WorkerOptions } options - options Options that can be set for the worker
         * @syscap SystemCapability.Utils.Lang
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.worker.ThreadWorker.constructor
         */
        constructor(scriptURL: string, options?: WorkerOptions);
        /**
         * The onexit attribute of the worker specifies the event handler to be called
         * when the worker exits. The handler is executed in the host thread.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.worker.ThreadWorker.onexit
         */
        onexit?: (code: number) => void;
        /**
         * The onerror attribute of the worker specifies the event handler to be called
         * when an exception occurs during worker execution.
         * The event handler is executed in the host thread.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.worker.ThreadWorker.onerror
         */
        onerror?: (err: ErrorEvent) => void;
        /**
         * The onmessage attribute of the worker specifies the event handler
         * to be called then the host thread receives a message created by itself
         * and sent by the worker through the parentPort.postMessage.
         * The event handler is executed in the host thread.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.worker.ThreadWorker.onmessage
         */
        onmessage?: (event: MessageEvent) => void;
        /**
         * The onmessage attribute of the worker specifies the event handler
         * when the worker receives a message that cannot be serialized.
         * The event handler is executed in the host thread.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.worker.ThreadWorker.onmessageerror
         */
        onmessageerror?: (event: MessageEvent) => void;
        /**
         * Sends a message to the worker thread.
         * The data is transferred using the structured clone algorithm.
         *
         * @param { Object } message - message - message Data to be sent to the worker
         * @param { ArrayBuffer[] } transfer - transfer ArrayBuffer instance that can be transferred.
         * The transferList array cannot contain null.
         * @syscap SystemCapability.Utils.Lang
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.worker.ThreadWorker.postMessage
         */
        postMessage(message: Object, transfer: ArrayBuffer[]): void;
        postMessage(message: Object, options?: PostMessageOptions): void;
        /**
         * Adds an event listener to the worker.
         *
         * @param { string } type - type Adds an event listener to the worker.
         * @param { EventListener } listener - listener Callback to invoke when an event of the specified type occurs.
         * @syscap SystemCapability.Utils.Lang
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.worker.ThreadWorker.on
         */
        on(type: string, listener: EventListener): void;
        /**
         * Adds an event listener to the worker
         * and removes the event listener automatically after it is invoked once.
         *
         * @param { string } type - type Type of the event to listen for
         * @param { EventListener } listener - listener Callback to invoke when an event of the specified type occurs
         * @syscap SystemCapability.Utils.Lang
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.worker.ThreadWorker.once
         */
        once(type: string, listener: EventListener): void;
        /**
         * Removes an event listener to the worker.
         *
         * @param { string } type - type Type of the event for which the event listener is removed.
         * @param { EventListener } listener - listener Callback of the event listener to remove.
         * @syscap SystemCapability.Utils.Lang
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.worker.ThreadWorker.off
         */
        off(type: string, listener?: EventListener): void;
        /**
         * Terminates the worker thread to stop the worker from receiving messages
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.worker.ThreadWorker.terminate
         */
        terminate(): void;
    }
    /**
     * The object used by the worker thread to communicate with the host thread.
     *
     * @constant
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.worker.workerPort
     */
    const parentPort: DedicatedWorkerGlobalScope;
    /**
     * The object used by the worker thread to communicate with the host thread.
     *
     * @constant
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * The object used by the worker thread to communicate with the host thread.
     *
     * @constant
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    const workerPort: ThreadWorkerGlobalScope;
}
export default worker;
