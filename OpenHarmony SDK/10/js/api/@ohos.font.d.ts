/*
 * Copyright (c) 2022 Shenzhen Kaihong Digital Industry Development Co., Ltd.
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
 * @namespace font
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
declare namespace font {
    /**
     * @typedef FontOptions
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    interface FontOptions {
        /**
         * The font name to register.
         *
         * @type { string | Resource }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 9
         */
        /**
         * The font name to register.
         *
         * @type { string | Resource }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 10
         */
        familyName: string | Resource;
        /**
         * The path of the font file.
         *
         * @type { string | Resource }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 9
         */
        /**
         * The path of the font file.
         *
         * @type { string | Resource }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 10
         */
        familySrc: string | Resource;
    }
    /**
     * @typedef FontInfo
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    interface FontInfo {
        /**
         * The path of the font file.
         *
         * @type { string }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 10
         */
        path: string;
        /**
         * The name of postscript.
         *
         * @type { string }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 10
         */
        postScriptName: string;
        /**
         * The font name.
         *
         * @type { string }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 10
         */
        fullName: string;
        /**
         * A set of fonts with a common design.
         *
         * @type { string }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 10
         */
        family: string;
        /**
         * A subset of the font family.
         *
         * @type { string }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 10
         */
        subfamily: string;
        /**
         * The weight of the font.
         *
         * @type { number }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 10
         */
        weight: number;
        /**
         * The width of the font style.
         *
         * @type { number }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 10
         */
        width: number;
        /**
         * Whether it is italic.
         *
         * @type { boolean }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 10
         */
        italic: boolean;
        /**
         * Whether it is compact.
         *
         * @type { boolean }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 10
         */
        monoSpace: boolean;
        /**
         * Whether symbol fonts are supported.
         *
         * @type { boolean }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 10
         */
        symbolic: boolean;
    }
    /**
     * Register a customized font in the FontManager.
     *
     * @param { FontOptions } options - FontOptions
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    function registerFont(options: FontOptions): void;
    /**
     * Gets a list of fonts supported by system.
     *
     * @returns { Array<string> } A list of font names
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    function getSystemFontList(): Array<string>;
    /**
     * Get font details according to the font name.
     *
     * @param { string } fontName - font name
     * @returns { FontInfo } Returns the font info
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    function getFontByName(fontName: string): FontInfo;
}
export default font;
