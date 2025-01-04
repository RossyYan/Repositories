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
/**
 * Defines the FormLink options.
 *
 * @interface FormLinkOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 * @form
*/
declare interface FormLinkOptions {
    /**
     * Action types: "router" and "message".
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     * @form
     */
    action: string;
    /**
     * Module name of destination UIAbility.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     * @form
     */
    moduleName?: string;
    /**
     * Bundle name of destination UIAbility.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     * @form
     */
    bundleName?: string;
    /**
     * Name of destination UIAbility.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     * @form
     */
    abilityName: string;
    /**
     * The additional parameters, use JSON format key value pairs for content.
     *
     * @type { ?Object }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     * @form
     */
    params?: Object;
}
/**
 * Defines the FormLink interface.
 *
 * @interface FormLinkInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 * @form
 */
interface FormLinkInterface {
    /**
     * Init FormLink component with options.
     *
     * @param { FormLinkOptions } options
     * @returns { FormLinkAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     * @form
     */
    (options: FormLinkOptions): FormLinkAttribute;
}
/**
 * Defines the FormLink attribute.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 * @form
 */
declare class FormLinkAttribute extends CommonMethod<FormLinkAttribute> {
}
/**
 * Defines FormLink component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 * @form
 */
declare const FormLink: FormLinkInterface;
/**
 * Defines FormLink component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 * @form
 */
declare const FormLinkInstance: FormLinkAttribute;
