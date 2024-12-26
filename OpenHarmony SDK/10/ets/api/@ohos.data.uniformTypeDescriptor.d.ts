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
 * Provide methods for uniform data type definition and query.
 *
 * @namespace uniformTypeDescriptor
 * @syscap SystemCapability.DistributedDataManager.UDMF.Core
 * @since 10
 */
declare namespace uniformTypeDescriptor {
    /**
     * The data type supported by uniform type descriptor
     *
     * @enum { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    enum UniformDataType {
        /**
         * Indicate the data type is text
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        TEXT = 'general.text',
        /**
         * Indicate the data type is plain text
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        PLAIN_TEXT = 'general.plain-text',
        /**
         * Indicate the data type is hyperlink
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        HYPERLINK = 'general.hyperlink',
        /**
         * Indicate the data type is html
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        HTML = 'general.html',
        /**
         * Indicate the data type is File
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        FILE = 'general.file',
        /**
         * Indicate the data type is image
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        IMAGE = 'general.image',
        /**
         * Indicate the data type is video
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        VIDEO = 'general.video',
        /**
         * Indicate the data type is audio
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        AUDIO = 'general.audio',
        /**
         * Indicate the data type is Folder
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        FOLDER = 'general.folder',
        /**
         * Indicate the data type is OpenHarmony system defined form(the data is provided and bound to OpenHarmony system)
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        OPENHARMONY_FORM = 'openharmony.form',
        /**
         * Indicate the data type is OpenHarmony system defined app item(the data is provided and bound to OpenHarmony system)
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        OPENHARMONY_APP_ITEM = 'openharmony.app-item',
        /**
         * Indicate the data type is OpenHarmony system defined pixel map(the data is provided and bound to OpenHarmony system)
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        OPENHARMONY_PIXEL_MAP = 'openharmony.pixel-map'
    }
}
export default uniformTypeDescriptor;
