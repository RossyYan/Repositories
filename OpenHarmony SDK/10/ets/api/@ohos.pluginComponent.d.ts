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
import { AsyncCallback } from './@ohos.base';
import Want from './@ohos.app.ability.Want';
/**
 * Plugin component template property.
 *
 * @interface PluginComponentTemplate
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
interface PluginComponentTemplate {
    source: string;
    ability: string;
}
/**
 * Plugin component manager interface.
 *
 * @namespace pluginComponentManager
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
declare namespace pluginComponentManager {
    type KVObject = {
        [key: string]: number | string | boolean | [
        ] | KVObject;
    };
    /**
     * Plugin component push parameters.
     *
     * @interface PushParameters
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    interface PushParameters {
        want: Want;
        name: string;
        data: KVObject;
        extraData: KVObject;
        jsonPath?: string;
    }
    /**
     * Plugin component request parameters.
     *
     * @interface RequestParameters
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    interface RequestParameters {
        want: Want;
        name: string;
        data: KVObject;
        jsonPath?: string;
    }
    /**
     * Plugin component request callback parameters.
     *
     * @interface RequestCallbackParameters
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    interface RequestCallbackParameters {
        componentTemplate: PluginComponentTemplate;
        data: KVObject;
        extraData: KVObject;
    }
    /**
     * Plugin component request event result value.
     *
     * @interface RequestEventResult
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    interface RequestEventResult {
        template?: string;
        data?: KVObject;
        extraData?: KVObject;
    }
    /**
     * Plugin component push event callback.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    type OnPushEventCallback = (source: Want, template: PluginComponentTemplate, data: KVObject, extraData: KVObject) => void;
    /**
     * Plugin component request event callback.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    type OnRequestEventCallback = (source: Want, name: string, data: KVObject) => RequestEventResult;
    /**
     * Plugin component push method.
     *
     * @param { PushParameters } param
     * @param { AsyncCallback<void> } callback
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    function push(param: PushParameters, callback: AsyncCallback<void>): void;
    /**
     * Plugin component request method.
     *
     * @param { RequestParameters } param
     * @param { AsyncCallback<RequestCallbackParameters> } callback
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    function request(param: RequestParameters, callback: AsyncCallback<RequestCallbackParameters>): void;
    /**
     * Plugin component event listener.
     *
     * @param { string } eventType
     * @param { OnPushEventCallback | OnRequestEventCallback } callback
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    function on(eventType: string, callback: OnPushEventCallback | OnRequestEventCallback): void;
}
export default pluginComponentManager;
