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
 * indexer align property.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * indexer align property.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare enum IndexerAlign {
    /**
     * A dialog box is displayed on the right of the index bar.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * A dialog box is displayed on the right of the index bar.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    Left,
    /**
     * A dialog box is displayed on the left of the index bar.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * A dialog box is displayed on the left of the index bar.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    Right
}
/**
 * Alphabet index bar.
 *
 * @interface AlphabetIndexerInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Alphabet index bar.
 *
 * @interface AlphabetIndexerInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
interface AlphabetIndexerInterface {
    /**
     * ArrayValue: Alphabetical index string array.
     * selected: ID of the selected item.
     *
     * @param { object } value
     * @returns { AlphabetIndexerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * ArrayValue: Alphabetical index string array.
     * selected: ID of the selected item.
     *
     * @param { object } value
     * @returns { AlphabetIndexerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    (value: {
        arrayValue: Array<string>;
        selected: number;
    }): AlphabetIndexerAttribute;
}
/**
 * Defines the alphabet index bar attribute functions.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the alphabet index bar attribute functions.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare class AlphabetIndexerAttribute extends CommonMethod<AlphabetIndexerAttribute> {
    /**
     * Index bar selection callback.
     *
     * @param { function } callback
     * @returns { AlphabetIndexerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     * @deprecated since 8
     * @useinstead onSelect
     */
    onSelected(callback: (index: number) => void): AlphabetIndexerAttribute;
    /**
     * Definitions color.
     *
     * @param { ResourceColor } value
     * @returns { AlphabetIndexerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Definitions color.
     *
     * @param { ResourceColor } value
     * @returns { AlphabetIndexerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    color(value: ResourceColor): AlphabetIndexerAttribute;
    /**
     * Select the text color.
     *
     * @param { ResourceColor } value
     * @returns { AlphabetIndexerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Select the text color.
     *
     * @param { ResourceColor } value
     * @returns { AlphabetIndexerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    selectedColor(value: ResourceColor): AlphabetIndexerAttribute;
    /**
     * Font color of the pop-up prompt text.
     *
     * @param { ResourceColor } value
     * @returns { AlphabetIndexerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Font color of the pop-up prompt text.
     *
     * @param { ResourceColor } value
     * @returns { AlphabetIndexerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    popupColor(value: ResourceColor): AlphabetIndexerAttribute;
    /**
     * Select the text background color.
     *
     * @param { ResourceColor } value
     * @returns { AlphabetIndexerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Select the text background color.
     *
     * @param { ResourceColor } value
     * @returns { AlphabetIndexerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    selectedBackgroundColor(value: ResourceColor): AlphabetIndexerAttribute;
    /**
     * Background color of the pop-up window index.
     *
     * @param { ResourceColor } value
     * @returns { AlphabetIndexerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Background color of the pop-up window index.
     *
     * @param { ResourceColor } value
     * @returns { AlphabetIndexerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    popupBackground(value: ResourceColor): AlphabetIndexerAttribute;
    /**
     * Set the selected font color of non-alphabetic part of the pop-up window.
     *
     * @param { ResourceColor } value - indicates the color of the selected font.
     * @returns { AlphabetIndexerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Set the selected font color of non-alphabetic part of the pop-up window.
     *
     * @param { ResourceColor } value - indicates the color of the selected font.
     * @returns { AlphabetIndexerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    popupSelectedColor(value: ResourceColor): AlphabetIndexerAttribute;
    /**
     * Set the unselected font color of non-alphabetic part of the pop-up window.
     *
     * @param { ResourceColor } value - indicates the color of the unselected font.
     * @returns { AlphabetIndexerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    popupUnselectedColor(value: ResourceColor): AlphabetIndexerAttribute;
    /**
     * Set the background color of non-alphabetic part of the pop-up window.
     *
     * @param { ResourceColor } value - indicates the color of background.
     * @returns { AlphabetIndexerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    popupItemBackgroundColor(value: ResourceColor): AlphabetIndexerAttribute;
    /**
     * Whether to use pop-up index hints.
     *
     * @param { boolean } value
     * @returns { AlphabetIndexerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Whether to use pop-up index hints.
     *
     * @param { boolean } value
     * @returns { AlphabetIndexerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    usingPopup(value: boolean): AlphabetIndexerAttribute;
    /**
     * Select the text text style,
     *
     * @param { Font } value
     * @returns { AlphabetIndexerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Select the text text style,
     *
     * @param { Font } value
     * @returns { AlphabetIndexerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    selectedFont(value: Font): AlphabetIndexerAttribute;
    /**
     * Select the text background color.
     *
     * @param { Font } value
     * @returns { AlphabetIndexerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Select the text background color.
     *
     * @param { Font } value
     * @returns { AlphabetIndexerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    popupFont(value: Font): AlphabetIndexerAttribute;
    /**
     * Set the font style of non-alphabetic part of the prompt pop-up window.
     * Family and style are not supported currently and will be fixed in future.
     *
     * @param { Font } value - indicates the style of the font.
     * @returns { AlphabetIndexerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    popupItemFont(value: Font): AlphabetIndexerAttribute;
    /**
     * Size of the letter area on the letter index bar. The letter area is a square. Set the length of the square side.
     *
     * @param { string | number } value
     * @returns { AlphabetIndexerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Size of the letter area on the letter index bar. The letter area is a square. Set the length of the square side.
     *
     * @param { string | number } value
     * @returns { AlphabetIndexerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    itemSize(value: string | number): AlphabetIndexerAttribute;
    /**
     * Definitions fonts.
     *
     * @param { Font } value
     * @returns { AlphabetIndexerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Definitions fonts.
     *
     * @param { Font } value
     * @returns { AlphabetIndexerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    font(value: Font): AlphabetIndexerAttribute;
    /**
     * Alphabet index bar alignment style. The left and right alignment styles are supported,
     * which affects the pop-up position of the pop-up window.
     *
     * @param { IndexerAlign } value - indicates the alignment style of Alphabet index.
     * @param { Length } offset
     * @returns { AlphabetIndexerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Alphabet index bar alignment style. The left and right alignment styles are supported,
     * which affects the pop-up position of the pop-up window.
     *
     * @param { IndexerAlign } value - indicates the alignment style of Alphabet index.
     * @param { Length } offset - indicates the horizontal space between pop-up window and indexer bar.
     * @returns { AlphabetIndexerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    alignStyle(value: IndexerAlign, offset?: Length): AlphabetIndexerAttribute;
    /**
     * Index bar selection callback.
     *
     * @param { function } callback
     * @returns { AlphabetIndexerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Index bar selection callback.
     *
     * @param { function } callback
     * @returns { AlphabetIndexerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    onSelect(callback: (index: number) => void): AlphabetIndexerAttribute;
    /**
     * Index bar selection callback and return the strings which display on pop-up.
     *
     * @param { function } callback
     * @returns { AlphabetIndexerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Index bar selection callback and return the strings which display on pop-up.
     *
     * @param { function } callback
     * @returns { AlphabetIndexerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    onRequestPopupData(callback: (index: number) => Array<string>): AlphabetIndexerAttribute;
    /**
     * Pop-up selection callback.
     *
     * @param { function } callback
     * @returns { AlphabetIndexerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Pop-up selection callback.
     *
     * @param { function } callback
     * @returns { AlphabetIndexerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    onPopupSelect(callback: (index: number) => void): AlphabetIndexerAttribute;
    /**
     * Sets the selected index.
     *
     * @param { number } index
     * @returns { AlphabetIndexerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Sets the selected index.
     *
     * @param { number } index
     * @returns { AlphabetIndexerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    selected(index: number): AlphabetIndexerAttribute;
    /**
     * Position of the pop-up windows, relative to the midpoint of the top border of the indexer bar.
     *
     * @param { Position } value
     * @returns { AlphabetIndexerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Position of the pop-up windows, relative to the midpoint of the top border of the indexer bar.
     *
     * @param { Position } value
     * @returns { AlphabetIndexerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    popupPosition(value: Position): AlphabetIndexerAttribute;
}
/**
 * Defines AlphabetIndexer Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines AlphabetIndexer Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare const AlphabetIndexer: AlphabetIndexerInterface;
/**
 * Defines AlphabetIndexer Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines AlphabetIndexer Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare const AlphabetIndexerInstance: AlphabetIndexerAttribute;
