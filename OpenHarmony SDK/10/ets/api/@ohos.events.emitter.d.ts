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
import { Callback } from './@ohos.base';
/**
 * Provides methods for sending and processing in-process events.
 *
 * @namespace emitter
 * @syscap SystemCapability.Notification.Emitter
 * @since 7
 */
declare namespace emitter {
    /**
     * Subscribe to a certain event in persistent manner and receives the event callback.
     *
     * @param { InnerEvent } event - indicate event to subscribe to.
     * @param { Callback<EventData> } callback - indicate callback used to receive the event.
     * @syscap SystemCapability.Notification.Emitter
     * @since 7
     */
    function on(event: InnerEvent, callback: Callback<EventData>): void;
    /**
     * Subscribe to a certain event in one-shot manner and unsubscribe from it
     * after the event callback is received.
     *
     * @param { InnerEvent } event - indicate event to subscribe to in one shot.
     * @param { Callback<EventData> } callback - indicate callback used to receive the event.
     * @syscap SystemCapability.Notification.Emitter
     * @since 7
     */
    function once(event: InnerEvent, callback: Callback<EventData>): void;
    /**
     * Unsubscribe from an event.
     *
     * @param { number } eventId - indicate ID of the event to unsubscribe from.
     * @syscap SystemCapability.Notification.Emitter
     * @since 7
     */
    function off(eventId: number): void;
    /**
     * Unsubscribe from an event.
     *
     * @param { number } eventId - indicates ID of the event to unsubscribe from.
     * @param { Callback<EventData> } callback - indicates callback used to receive the event.
     * @syscap SystemCapability.Notification.Emitter
     * @since 10
     */
    function off(eventId: number, callback: Callback<EventData>): void;
    /**
     * Emits an event to the event queue.
     *
     * @param { InnerEvent } event - indicate event to emit.
     * @param { EventData } [data] - indicate data carried by the event.
     * @syscap SystemCapability.Notification.Emitter
     * @since 7
     */
    function emit(event: InnerEvent, data?: EventData): void;
    /**
     * Describes data passed in the event.
     *
     * @typedef EventData
     * @syscap SystemCapability.Notification.Emitter
     * @since 7
     */
    export interface EventData {
        /**
         * Data carried by the event.
         *
         * @type { ?object }
         * @syscap SystemCapability.Notification.Emitter
         * @since 7
         */
        data?: {
            [key: string]: any;
        };
    }
    /**
     * Describes an intra-process event.
     *
     * @typedef InnerEvent
     * @syscap SystemCapability.Notification.Emitter
     * @since 7
     */
    export interface InnerEvent {
        /**
         * Event ID, which is used to identify an event.
         *
         * @type { number }
         * @syscap SystemCapability.Notification.Emitter
         * @since 7
         */
        eventId: number;
        /**
         * Emit priority of the event. The default priority is {@link EventPriority.LOW}.
         *
         * @type { ?EventPriority }
         * @syscap SystemCapability.Notification.Emitter
         * @since 7
         */
        priority?: EventPriority;
    }
    /**
     * Indicates the emit priority of the event.
     *
     * @enum { number }
     * @syscap SystemCapability.Notification.Emitter
     * @since 7
     */
    export enum EventPriority {
        /**
         * Indicates that the event will be emitted immediately.
         *
         * @syscap SystemCapability.Notification.Emitter
         * @since 7
         */
        IMMEDIATE = 0,
        /**
         * Indicates that the event will be emitted before low-priority events.
         *
         * @syscap SystemCapability.Notification.Emitter
         * @since 7
         */
        HIGH,
        /**
         * Indicates that the event will be emitted before idle-priority events. By default, an event is in LOW priority.
         *
         * @syscap SystemCapability.Notification.Emitter
         * @since 7
         */
        LOW,
        /**
         * Indicates that the event will be emitted after all the other events.
         *
         * @syscap SystemCapability.Notification.Emitter
         * @since 7
         */
        IDLE
    }
}
export default emitter;
