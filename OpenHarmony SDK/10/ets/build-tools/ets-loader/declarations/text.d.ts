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
 * Provides an interface for writing texts.
 *
 * @interface TextInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Provides an interface for writing texts.
 *
 * @interface TextInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Provides an interface for writing texts.
 *
 * @interface TextInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
interface TextInterface {
    /**
     * Called when writing text.
     *
     * @param { string | Resource } content
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when writing text.
     *
     * @param { string | Resource } content
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     * @form
     */
    /**
     * Called when writing text.
     *
     * @param { string | Resource } content
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    (content?: string | Resource): TextAttribute;
}
/**
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare class TextAttribute extends CommonMethod<TextAttribute> {
    /**
     * Called when the font is set.
     *
     * @param { Font } value - the text font size and weight and family and style.
     * @returns { TextAttribute } The attribute of the text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    font(value: Font): TextAttribute;
    /**
     * Called when the font color is set.
     *
     * @param { ResourceColor } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the font color is set.
     *
     * @param { ResourceColor } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     * @form
     */
    /**
     * Called when the font color is set.
     *
     * @param { ResourceColor } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    fontColor(value: ResourceColor): TextAttribute;
    /**
     * Called when the font size is set.
     *
     * @param { number | string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the font size is set.
     *
     * @param { number | string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     * @form
     */
    /**
     * Called when the font size is set.
     *
     * @param { number | string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    fontSize(value: number | string | Resource): TextAttribute;
    /**
     * Called when the minimum font size of the font is set.
     *
     * @param { number | string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the minimum font size of the font is set.
     *
     * @param { number | string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     * @form
     */
    /**
     * Called when the minimum font size of the font is set.
     *
     * @param { number | string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    minFontSize(value: number | string | Resource): TextAttribute;
    /**
     * Called when the maximum font size of the font is set.
     *
     * @param { number | string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the maximum font size of the font is set.
     *
     * @param { number | string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     * @form
     */
    /**
     * Called when the maximum font size of the font is set.
     *
     * @param { number | string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    maxFontSize(value: number | string | Resource): TextAttribute;
    /**
     * Called when the font style of a font is set.
     *
     * @param { FontStyle } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the font style of a font is set.
     *
     * @param { FontStyle } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     * @form
     */
    /**
     * Called when the font style of a font is set.
     *
     * @param { FontStyle } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    fontStyle(value: FontStyle): TextAttribute;
    /**
     * Called when the font weight is set.
     *
     * @param { number | FontWeight | string } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the font weight is set.
     *
     * @param { number | FontWeight | string } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     * @form
     */
    /**
     * Called when the font weight is set.
     *
     * @param { number | FontWeight | string } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    fontWeight(value: number | FontWeight | string): TextAttribute;
    /**
     * Called when the horizontal center mode of the font is set.
     *
     * @param { TextAlign } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the horizontal center mode of the font is set.
     *
     * @param { TextAlign } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     * @form
     */
    /**
     * Called when the horizontal center mode of the font is set.
     *
     * @param { TextAlign } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    textAlign(value: TextAlign): TextAttribute;
    /**
     * Called when the vertical center mode of the font is set.
     *
     * @param { number | string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the vertical center mode of the font is set.
     *
     * @param { number | string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     * @form
     */
    /**
     * Called when the vertical center mode of the font is set.
     *
     * @param { number | string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    lineHeight(value: number | string | Resource): TextAttribute;
    /**
     * Called when the overflow mode of the font is set.
     *
     * @param { object } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the overflow mode of the font is set.
     *
     * @param { object } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     * @form
     */
    /**
     * Called when the overflow mode of the font is set.
     *
     * @param { object } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    textOverflow(value: {
        overflow: TextOverflow;
    }): TextAttribute;
    /**
     * Called when the font list of text is set.
     *
     * @param { string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the font list of text is set.
     *
     * @param { string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     * @form
     */
    /**
     * Called when the font list of text is set.
     *
     * @param { string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    fontFamily(value: string | Resource): TextAttribute;
    /**
     * Called when the maximum number of lines of text is set.
     *
     * @param { number } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the maximum number of lines of text is set.
     *
     * @param { number } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     * @form
     */
    /**
     * Called when the maximum number of lines of text is set.
     *
     * @param { number } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    maxLines(value: number): TextAttribute;
    /**
     * Called when the text decoration of the text is set.
     *
     * @param { object } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the text decoration of the text is set.
     *
     * @param { object } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     * @form
     */
    /**
     * Called when the text decoration of the text is set.
     *
     * @param { object } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    decoration(value: {
        type: TextDecorationType;
        color?: ResourceColor;
    }): TextAttribute;
    /**
     * Called when the distance between text fonts is set.
     *
     * @param { number | string } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the distance between text fonts is set.
     *
     * @param { number | string } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     * @form
     */
    /**
     * Called when the distance between text fonts is set.
     *
     * @param { number | string } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    letterSpacing(value: number | string): TextAttribute;
    /**
     * Called when the type of letter in the text font is set.
     *
     * @param { TextCase } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the type of letter in the text font is set.
     *
     * @param { TextCase } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     * @form
     */
    /**
     * Called when the type of letter in the text font is set.
     *
     * @param { TextCase } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    textCase(value: TextCase): TextAttribute;
    /**
     * Called when the baseline offset is set.
     *
     * @param { number | string } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the baseline offset is set.
     *
     * @param { number | string } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     * @form
     */
    /**
     * Called when the baseline offset is set.
     *
     * @param { number | string } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    baselineOffset(value: number | string): TextAttribute;
    /**
     * Allow replication.
     *
     * @param { CopyOptions } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     * @form
     */
    /**
     * Allow replication.
     *
     * @param { CopyOptions } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    copyOption(value: CopyOptions): TextAttribute;
    /**
     * Enable the selectable area can be dragged.
     *
     * @param { boolean } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    draggable(value: boolean): TextAttribute;
    /**
     * Called when the text shadow is set.
     *
     * @param { ShadowOptions } value - The shadow options.
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    textShadow(value: ShadowOptions): TextAttribute;
    /**
     * Called when the height adaptive policy is set.
     *
     * @param { TextHeightAdaptivePolicy } value - The height adaptive policy.
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    heightAdaptivePolicy(value: TextHeightAdaptivePolicy): TextAttribute;
    /**
     * Specify the indentation of the first line in a text-block.
     *
     * @param { Length } value - The length of text indent.
     * @returns { TextAttribute } The attribute of the text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    textIndent(value: Length): TextAttribute;
}
/**
 * Defines Text Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Text Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Defines Text Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare const TextInstance: TextAttribute;
/**
 * Defines Text Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Text Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Defines Text Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare const Text: TextInterface;
