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
 * Defines the option of MenuItemGroup.
 *
 * @interface MenuItemGroupOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Defines the option of MenuItemGroup.
 *
 * @interface MenuItemGroupOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare interface MenuItemGroupOptions {
    /**
     * Defines the header display info.
     *
     * @type { ?(ResourceStr | CustomBuilder) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Defines the header display info.
     *
     * @type { ?(ResourceStr | CustomBuilder) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    header?: ResourceStr | CustomBuilder;
    /**
     * Defines the footer display info.
     *
     * @type { ?(ResourceStr | CustomBuilder) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Defines the footer display info.
     *
     * @type { ?(ResourceStr | CustomBuilder) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    footer?: ResourceStr | CustomBuilder;
}
/**
 * Defines the MenuItemGroup Component.
 *
 * @interface MenuItemGroupInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Defines the MenuItemGroup Component.
 *
 * @interface MenuItemGroupInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
interface MenuItemGroupInterface {
    /**
     * Creates the MenuItemGroup component.
     *
     * @param { MenuItemGroupOptions } value
     * @returns { MenuItemGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Creates the MenuItemGroup component.
     *
     * @param { MenuItemGroupOptions } value
     * @returns { MenuItemGroupAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    (value?: MenuItemGroupOptions): MenuItemGroupAttribute;
}
/**
 * Defines the MenuItemGroup component attribute functions.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Defines the MenuItemGroup component attribute functions.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare class MenuItemGroupAttribute extends CommonMethod<MenuItemGroupAttribute> {
}
/**
 * Defines MenuItemGroup Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Defines MenuItemGroup Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare const MenuItemGroup: MenuItemGroupInterface;
/**
 * Defines MenuItemGroup Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Defines MenuItemGroup Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare const MenuItemGroupInstance: MenuItemGroupAttribute;