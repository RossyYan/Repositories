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
/**
 * Route jump.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Route jump.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare enum NavigationType {
    /**
     * Jump to the next page.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Jump to the next page.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    Push,
    /**
     * Return to the previous page.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Return to the previous page.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    Back,
    /**
     * Replace page.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Replace page.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    Replace
}
/**
 * Create route
 *
 * @interface NavigatorInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Create route
 *
 * @interface NavigatorInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
interface NavigatorInterface {
    /**
     * Called when the route jumps.
     *
     * @param { object } value
     * @returns { NavigatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the route jumps.
     *
     * @param { object } value
     * @returns { NavigatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    (value?: {
        target: string;
        type?: NavigationType;
    }): NavigatorAttribute;
    /**
     * Called when using the navigator.
     *
     * @returns { NavigatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when using the navigator.
     *
     * @returns { NavigatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    (): NavigatorAttribute;
}
/**
 * Declare navigator properties.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Declare navigator properties.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare class NavigatorAttribute extends CommonMethod<NavigatorAttribute> {
    /**
     * Called when determining whether the routing component is active.
     *
     * @param { boolean } value
     * @returns { NavigatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when determining whether the routing component is active.
     *
     * @param { boolean } value
     * @returns { NavigatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    active(value: boolean): NavigatorAttribute;
    /**
     * Called when determining whether the routing component is active.
     *
     * @param { NavigationType } value
     * @returns { NavigatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when determining whether the routing component is active.
     *
     * @param { NavigationType } value
     * @returns { NavigatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    type(value: NavigationType): NavigatorAttribute;
    /**
     * Called when the path to the specified jump target page is set.
     *
     * @param { string } value
     * @returns { NavigatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the path to the specified jump target page is set.
     *
     * @param { string } value
     * @returns { NavigatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    target(value: string): NavigatorAttribute;
    /**
     * Called when data is passed to the target page at the same time during jump.
     *
     * @param { object } value
     * @returns { NavigatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when data is passed to the target page at the same time during jump.
     *
     * @param { object } value
     * @returns { NavigatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    params(value: object): NavigatorAttribute;
}
/**
 * Defines Navigator Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Navigator Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare const Navigator: NavigatorInterface;
/**
 * Defines Navigator Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Navigator Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare const NavigatorInstance: NavigatorAttribute;