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
 * Provides the method of switching the cursor position.
 *
 * @extends TextContentControllerBase
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Provides the method of switching the cursor position.
 *
 * @extends TextContentControllerBase
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare class SearchController extends TextContentControllerBase {
    /**
     * constructor.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * constructor.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    constructor();
    /**
     * Called when the position of the insertion cursor is set.
     *
     * @param { number } value
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Called when the position of the insertion cursor is set.
     *
     * @param { number } value
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    caretPosition(value: number): void;
    /**
     * Exit edit state.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    stopEditing(): void;
}
/**
 * Enum for the style of cancel button
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare enum CancelButtonStyle {
    /**
     * The value of button style constant
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    CONSTANT,
    /**
     * The value of button style invisible
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    INVISIBLE,
    /**
     * The value of button style input
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    INPUT
}
/**
 * The construct function of search
 *
 * @interface SearchInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * The construct function of search
 *
 * @interface SearchInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
interface SearchInterface {
    (options?: {
        /**
         * Text input in the search text box
         *
         * @type { ?string }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 8
         */
        value?: string;
        /**
         * Text displayed when there is no input
         *
         * @type { string }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 8
         */
        /**
         * Text displayed when there is no input
         *
         * @type { ?ResourceStr }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 10
         */
        placeholder?: ResourceStr;
        /**
         * Path to the search icon
         *
         * @type { ?string }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 8
         */
        icon?: string;
        /**
         * Controller of the <Search> component
         *
         * @type { ?SearchController }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 8
         */
        controller?: SearchController;
    }): SearchAttribute;
}
/**
 * Defines the icon options
 *
 * @interface IconOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
interface IconOptions {
    /**
     * Set the icon size
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    size?: Length;
    /**
     * Set the icon color
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    color?: ResourceColor;
    /**
     * Set the icon resource
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    src?: ResourceStr;
}
/**
 * Defines the cursor style
 *
 * @interface CaretStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
interface CaretStyle {
    /**
     * Set the cursor width
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    width?: Length;
    /**
     * Set the cursor color
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    color?: ResourceColor;
}
/**
 * Defines the SearchButton options
 *
 * @interface SearchButtonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
interface SearchButtonOptions {
    /**
     * Set the SearchButton fontSize
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    fontSize?: Length;
    /**
     * Set the SearchButton fontColor
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    fontColor?: ResourceColor;
}
/**
 * The attribute function of search
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * The attribute function of search
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare class SearchAttribute extends CommonMethod<SearchAttribute> {
    /**
     * Set the search button text
     *
     * @param { string } value - indicates the text of the search button.
     * @param { SearchButtonOption } option
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Set the search button text, fontSize and fontColor
     *
     * @param { string } value - indicates the text of the search button.
     * @param { SearchButtonOptions } option - indicates the fontSize and fontColor of the search button.
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    searchButton(value: string, option?: SearchButtonOptions): SearchAttribute;
    /**
     * Set the text Color
     *
     * @param { ResourceColor } value - indicates the color of the text.
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    fontColor(value: ResourceColor): SearchAttribute;
    /**
     * Set the search icon style
     *
     * @param { IconOptions } value - indicates the style of the search icon.
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    searchIcon(value: IconOptions): SearchAttribute;
    /**
     * Set the cancel button style
     *
     * @param { object } value - indicates the style of the cancel button.
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    cancelButton(value: {
        style?: CancelButtonStyle;
        icon?: IconOptions;
    }): SearchAttribute;
    /**
     * Set the cursor style
     *
     * @param { CaretStyle } value - indicates the style of the cursor.
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    caretStyle(value: CaretStyle): SearchAttribute;
    /**
     * Set the place hold text color
     *
     * @param { ResourceColor } value
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Set the place hold text color
     *
     * @param { ResourceColor } value
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    placeholderColor(value: ResourceColor): SearchAttribute;
    /**
     * Set the font used for place holder text
     *
     * @param { Font } value
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Set the font used for place holder text
     *
     * @param { Font } value
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    placeholderFont(value?: Font): SearchAttribute;
    /**
     * Set the font used for input text
     *
     * @param { Font } value
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Set the font used for input text
     *
     * @param { Font } value
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    textFont(value?: Font): SearchAttribute;
    /**
     * Call the function when clicked the search button
     *
     * @param { function } callback
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Call the function when clicked the search button
     *
     * @param { function } callback
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    onSubmit(callback: (value: string) => void): SearchAttribute;
    /**
     * Call the function when editing the input text
     *
     * @param { function } callback
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Call the function when editing the input text
     *
     * @param { function } callback
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    onChange(callback: (value: string) => void): SearchAttribute;
    /**
     * Called when the text selection changes.
     *
     * @param { function } callback - callback of the listened event.
     * @returns { SearchAttribute } returns the instance of the SearchAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    onTextSelectionChange(callback: (selectionStart: number, selectionEnd: number) => void): SearchAttribute;
    /**
     * Called when the content scrolls.
     *
     * @param { function } callback - callback of the listened event.
     * @returns { SearchAttribute } returns the instance of the SearchAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    onContentScroll(callback: (totalOffsetX: number, totalOffsetY: number) => void): SearchAttribute;
    /**
     * Called when using the Clipboard menu
     *
     * @param { function } callback
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Called when using the Clipboard menu
     *
     * @param { function } callback
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    onCopy(callback: (value: string) => void): SearchAttribute;
    /**
     * Called when using the Clipboard menu
     *
     * @param { function } callback
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Called when using the Clipboard menu
     *
     * @param { function } callback
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    onCut(callback: (value: string) => void): SearchAttribute;
    /**
     * Called when using the Clipboard menu
     *
     * @param { function } callback
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Called when using the Clipboard menu
     *
     * @param { function } callback
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    onPaste(callback: (value: string) => void): SearchAttribute;
    /**
     * Called when the copy option is set.
     *
     * @param { CopyOptions } value
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Called when the copy option is set.
     *
     * @param { CopyOptions } value
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    copyOption(value: CopyOptions): SearchAttribute;
    /**
     * Called when the text align is set.
     *
     * @param { TextAlign } value
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Called when the text align is set.
     *
     * @param { TextAlign } value
     * @returns { SearchAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    textAlign(value: TextAlign): SearchAttribute;
    /**
     * Sets whether request keyboard or not when on focus.
     *
     * @param { boolean } value
     * @returns { SearchAttribute } Returns the instance of the SearchAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    enableKeyboardOnFocus(value: boolean): SearchAttribute;
    /**
     * Controls whether the selection menu pops up.
     *
     * @param { boolean } value
     * @returns { SearchAttribute } returns the instance of the SearchAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    selectionMenuHidden(value: boolean): SearchAttribute;
    /**
     * Define custom keyboard.
     *
     * @param { CustomBuilder } value
     * @returns { SearchAttribute } returns the instance of the SearchAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    customKeyboard(value: CustomBuilder): SearchAttribute;
}
/**
 * Defines Search Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines Search Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare const Search: SearchInterface;
/**
 * Defines Search Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines Search Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare const SearchInstance: SearchAttribute;
