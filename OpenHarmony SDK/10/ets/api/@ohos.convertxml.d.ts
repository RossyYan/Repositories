/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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
 * The convertxml module provides utilities for converting XML text to Javascript object.
 *
 * @namespace xml
 * @syscap SystemCapability.Utils.Lang
 * @since 8
 */
/**
 * The convertxml module provides utilities for converting XML text to Javascript object.
 *
 * @namespace xml
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 10
 */
declare namespace xml {
    interface ConvertOptions {
        /**
         * Whether to trim whitespace characters that may exist before and after the text, default false.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * Whether to trim whitespace characters that may exist before and after the text, default false.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        trim: boolean;
        /**
         * Whether to ignore writing declaration directives of xml.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * Whether to ignore writing declaration directives of xml.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        ignoreDeclaration?: boolean;
        /**
         * Whether to ignore writing processing instruction of xml.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * Whether to ignore writing processing instruction of xml.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        ignoreInstruction?: boolean;
        /**
         * Whether to print attributes across multiple lines and indent them.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * Whether to print attributes across multiple lines and indent them.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        ignoreAttributes?: boolean;
        /**
         * Whether to ignore writing comments of the elements.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * Whether to ignore writing comments of the elements.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        ignoreComment?: boolean;
        /**
         * Whether to ignore writing CDATA of the elements.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * Whether to ignore writing CDATA of the elements.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        ignoreCDATA?: boolean;
        /**
         * Whether to ignore writing Doctype of the elements.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * Whether to ignore writing Doctype of the elements.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        ignoreDoctype?: boolean;
        /**
         * Whether to ignore writing texts of the elements.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * Whether to ignore writing texts of the elements.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        ignoreText?: boolean;
        /**
         * Name of the property key which will be used for the declaration.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * Name of the property key which will be used for the declaration.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        declarationKey: string;
        /**
         * Name of the property key which will be used for the processing instruction.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * Name of the property key which will be used for the processing instruction.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        instructionKey: string;
        /**
         * Name of the property key which will be used for the attributes.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * Name of the property key which will be used for the attributes.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        attributesKey: string;
        /**
         * Name of the property key which will be used for the text.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * Name of the property key which will be used for the text.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        textKey: string;
        /**
         * Name of the property key which will be used for the cdata.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * Name of the property key which will be used for the cdata.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        cdataKey: string;
        /**
         * Name of the property key which will be used for the doctype.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * Name of the property key which will be used for the doctype.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        doctypeKey: string;
        /**
         * Name of the property key which will be used for the comment.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * Name of the property key which will be used for the comment.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        commentKey: string;
        /**
         * Name of the property key which will be used for the parent.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * Name of the property key which will be used for the parent.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        parentKey: string;
        /**
         * Name of the property key which will be used for the type.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * Name of the property key which will be used for the type.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        typeKey: string;
        /**
         * Name of the property key which will be used for the name.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * Name of the property key which will be used for the name.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        nameKey: string;
        /**
         * Name of the property key which will be used for the elements.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * Name of the property key which will be used for the elements.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        elementsKey: string;
    }
    /**
     * ConvertXML representation refers to extensible markup language.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @name ConvertXML
     */
    /**
     * ConvertXML representation refers to extensible markup language.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     * @name ConvertXML
     */
    class ConvertXML {
        /**
         * To convert XML text to JavaScript object.
         *
         * @param { string } xml - xml xml The xml text to be converted.
         * @param { ConvertOptions } options - options option Option Inputted by user to set.
         * @returns { Object } Returns a JavaScript object converting from XML text.
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.convertxml.ConvertXML.convertToJSObject
         */
        convert(xml: string, options?: ConvertOptions): Object;
        /**
         * To convert XML text to JavaScript object.
         *
         * @param { string } xml - xml xml The xml text to be converted.
         * @param { ConvertOptions } options - options option Option Inputted by user to set.
         * @returns { Object } Returns a JavaScript object converting from XML text.
         * @throws { BusinessError } 401 - if the input parameters are invalid.
         * @throws { BusinessError } 10200002 - Invalid xml string.
         * @syscap SystemCapability.Utils.Lang
         * @since 9
         */
        /**
         * To convert XML text to JavaScript object.
         *
         * @param { string } xml - xml xml The xml text to be converted.
         * @param { ConvertOptions } options - options option Option Inputted by user to set.
         * @returns { Object } Returns a JavaScript object converting from XML text.
         * @throws { BusinessError } 401 - if the input parameters are invalid.
         * @throws { BusinessError } 10200002 - Invalid xml string.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        convertToJSObject(xml: string, options?: ConvertOptions): Object;
    }
}
export default xml;
