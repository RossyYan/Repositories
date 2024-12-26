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
/**
 * Defines the navigation destination common title.
 *
 * @interface NavDestinationCommonTitle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Defines the navigation destination common title.
 *
 * @interface NavDestinationCommonTitle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare interface NavDestinationCommonTitle {
    /**
     * Sets the main title.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Sets the main title.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    main: string;
    /**
     * Sets the sub title.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Sets the sub title.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    sub: string;
}
/**
 * Defines the navigation destination custom title.
 *
 * @interface NavDestinationCustomTitle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Defines the navigation destination custom title.
 *
 * @interface NavDestinationCustomTitle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare interface NavDestinationCustomTitle {
    /**
     * Sets the custom title builder.
     *
     * @type { CustomBuilder }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Sets the custom title builder.
     *
     * @type { CustomBuilder }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    builder: CustomBuilder;
    /**
     * Sets the custom title height.
     *
     * @type { TitleHeight | Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Sets the custom title height.
     *
     * @type { TitleHeight | Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    height: TitleHeight | Length;
}
/**
 * The construct function of NavDestination.
 *
 * @interface NavDestinationInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * The construct function of NavDestination.
 *
 * @interface NavDestinationInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare interface NavDestinationInterface {
    /**
     * Constructor.
     *
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Constructor.
     *
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    (): NavDestinationAttribute;
}
/**
 * The attribute function of NavDestination
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * The attribute function of NavDestination
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare class NavDestinationAttribute extends CommonMethod<NavDestinationAttribute> {
    /**
     * Navigation title bar
     *
     * @param { string | CustomBuilder | NavDestinationCommonTitle | NavDestinationCustomTitle } value
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Navigation title bar
     *
     * @param { string | CustomBuilder | NavDestinationCommonTitle | NavDestinationCustomTitle } value
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    title(value: string | CustomBuilder | NavDestinationCommonTitle | NavDestinationCustomTitle): NavDestinationAttribute;
    /**
     * Hide navigation title bar
     *
     * @param { boolean } value
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Hide navigation title bar
     *
     * @param { boolean } value
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    hideTitleBar(value: boolean): NavDestinationAttribute;
    /**
     * Invoked when the navDestination page is displayed.
     *
     * @param { function } callback - Indicates callback when the navDestination page is displayed.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    onShown(callback: () => void): NavDestinationAttribute;
    /**
     * Invoked when the navDestination is hidden.
     *
     * @param { function } callback - Indicates callback when the navDestination is hidden.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    onHidden(callback: () => void): NavDestinationAttribute;
    /**
     * Invoked when the backButton is pressed.
     *
     * @param { function } callback - Indicates callback when the backButton is pressed.
     * @returns { NavDestinationAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    onBackPressed(callback: () => boolean): NavDestinationAttribute;
}
/**
 * Defines NavDestination Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Defines NavDestination Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare const NavDestination: NavDestinationInterface;
/**
 * Defines NavDestination Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Defines NavDestination Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare const NavDestinationInstance: NavDestinationAttribute;
