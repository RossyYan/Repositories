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
 * The declare of selectOption.
 *
 * @interface SelectOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * The declare of selectOption.
 *
 * @interface SelectOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare interface SelectOption {
    /**
     * Option string.
     *
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Option string.
     *
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    value: ResourceStr;
    /**
     * Option icon.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Option icon.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    icon?: ResourceStr;
}
/**
 * Provides the select interface.
 *
 * @interface SelectInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Provides the select interface.
 *
 * @interface SelectInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
interface SelectInterface {
    /**
     * Called when the select is set.
     *
     * @param { Array<SelectOption> } options
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Called when the select is set.
     *
     * @param { Array<SelectOption> } options
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    (options: Array<SelectOption>): SelectAttribute;
}
/**
 * The enum for arrow position in the select
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare enum ArrowPosition {
    /**
     * The value of arrow position end
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    END = 0,
    /**
     * The value of arrow position start
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    START = 1
}
/**
 * The type of alignment between select and menu.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare enum MenuAlignType {
    /**
     * The value of menu align type start.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    START,
    /**
     * The value of menu align type center.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    CENTER,
    /**
     * The value of menu align type end.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    END
}
/**
 * The commonMethod of select.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * The commonMethod of select.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare class SelectAttribute extends CommonMethod<SelectAttribute> {
    /**
     * Sets the serial number of the select item, starting from 0.
     *
     * @param { number } value
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Sets the serial number of the select item, starting from 0.
     *
     * @param { number } value
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    selected(value: number): SelectAttribute;
    /**
     * Sets the text display of the select button itself.
     *
     * @param { string } value
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Sets the text display of the select button itself.
     *
     * @param { string } value
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    value(value: string): SelectAttribute;
    /**
     * Sets the text properties of the select button itself.
     *
     * @param { Font } value
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Sets the text properties of the select button itself.
     *
     * @param { Font } value
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    font(value: Font): SelectAttribute;
    /**
     * Sets the text color of the select button itself.
     *
     * @param { ResourceColor } value
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Sets the text color of the select button itself.
     *
     * @param { ResourceColor } value
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    fontColor(value: ResourceColor): SelectAttribute;
    /**
     * Sets the background color of the selected items in the select.
     *
     * @param { ResourceColor } value
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Sets the background color of the selected items in the select.
     *
     * @param { ResourceColor } value
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    selectedOptionBgColor(value: ResourceColor): SelectAttribute;
    /**
     * Sets the text style of the selected items in the select.
     *
     * @param { Font } value
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Sets the text style of the selected items in the select.
     *
     * @param { Font } value
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    selectedOptionFont(value: Font): SelectAttribute;
    /**
     * Sets the text color of the selected item in the select.
     *
     * @param { ResourceColor } value
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Sets the text color of the selected item in the select.
     *
     * @param { ResourceColor } value
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    selectedOptionFontColor(value: ResourceColor): SelectAttribute;
    /**
     * Sets the background color of the select item.
     *
     * @param { ResourceColor } value
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Sets the background color of the select item.
     *
     * @param { ResourceColor } value
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    optionBgColor(value: ResourceColor): SelectAttribute;
    /**
     * Sets the text style for select items.
     *
     * @param { Font } value
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Sets the text style for select items.
     *
     * @param { Font } value
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    optionFont(value: Font): SelectAttribute;
    /**
     * Sets the text color for select items.
     *
     * @param { ResourceColor } value
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Sets the text color for select items.
     *
     * @param { ResourceColor } value
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    optionFontColor(value: ResourceColor): SelectAttribute;
    /**
     * Callback for selecting an item from the select.
     *
     * @param { function } callback
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Callback for selecting an item from the select.
     *
     * @param { function } callback
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    onSelect(callback: (index: number, value: string) => void): SelectAttribute;
    /**
     * Set the space for text and icon in select
     *
     * @param { Length } value - indicates the length of the space
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    space(value: Length): SelectAttribute;
    /**
     * Set the layout direction for text and arrow in select
     *
     * @param { ArrowPosition } value - indicates the arrow position in the select
     * @returns { SelectAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    arrowPosition(value: ArrowPosition): SelectAttribute;
    /**
     * Set the alignment between select and menu.
     *
     * @param { MenuAlignType } alignType - The type of alignment between select and menu.
     * @param { Offset } offset - The offset between select and menu.
     * @returns { SelectAttribute } the attribute of the select.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    menuAlign(alignType: MenuAlignType, offset?: Offset): SelectAttribute;
}
/**
 * Defines Select Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines Select Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare const Select: SelectInterface;
/**
 * Defines Select Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines Select Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare const SelectInstance: SelectAttribute;
