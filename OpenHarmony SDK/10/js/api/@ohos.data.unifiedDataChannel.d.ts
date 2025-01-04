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
import { AsyncCallback } from './@ohos.base';
/**
 * Provide methods for sharing data between different applications across unified data channels.
 *
 * @namespace unifiedDataChannel
 * @syscap SystemCapability.DistributedDataManager.UDMF.Core
 * @since 10
 */
declare namespace unifiedDataChannel {
    /**
     * Describe the unified data.
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    class UnifiedData {
        /**
         * Create unified data with a record
         *
         * @param { UnifiedRecord } record - Record will add into unified data.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        constructor(record: UnifiedRecord);
        /**
         * Add a record into unified data
         *
         * @param { UnifiedRecord } record - Record will add into unified data.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        addRecord(record: UnifiedRecord): void;
        /**
         * Get all records of unified data
         *
         * @returns { Array<UnifiedRecord> } Return the records of unified data
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        getRecords(): Array<UnifiedRecord>;
    }
    /**
     * The data abstract supported by unified data
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    class Summary {
        /**
         * A map for each type and data size, key is data type, value is the corresponding data size
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        summary: {
            [key: string]: number;
        };
        /**
         * Total data size of data in Bytes
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        totalSize: number;
    }
    /**
     * Describe the unified record
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    class UnifiedRecord {
        /**
         * Get type of unified record
         *
         * @returns { string } Return the type of unified data
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        getType(): string;
    }
    /**
     * Describe the unified text data
     *
     * @extends UnifiedRecord
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    class Text extends UnifiedRecord {
        /**
         * Indicates the details of unified text
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        details?: {
            [key: string]: string;
        };
    }
    /**
     * Describe the unified plain text data
     *
     * @extends Text
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    class PlainText extends Text {
        /**
         * Indicates the content of text
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        textContent: string;
        /**
         * Indicates the abstract of text
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        abstract?: string;
    }
    /**
     * Describe the unified link data
     *
     * @extends Text
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    class Hyperlink extends Text {
        /**
         * Indicates the url of a link
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        url: string;
        /**
         * Indicates the description of a link
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        description?: string;
    }
    /**
     * Describe the unified html data
     *
     * @extends Text
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    class HTML extends Text {
        /**
         * Indicates the content of html, with html tags
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        htmlContent: string;
        /**
         * Indicates the plain content of html
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        plainContent?: string;
    }
    /**
     * Describe the unified file data
     *
     * @extends UnifiedRecord
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    class File extends UnifiedRecord {
        /**
         * Indicates the details of unified File
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        details?: {
            [key: string]: string;
        };
        /**
         * Indicates the uri of file
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        uri: string;
    }
    /**
     * Describe the unified image data
     *
     * @extends File
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    class Image extends File {
        /**
         * Indicates the uri of image
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        imageUri: string;
    }
    /**
     * Describe the unified video data
     *
     * @extends File
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    class Video extends File {
        /**
         * Indicates the uri of video
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        videoUri: string;
    }
    /**
     * Describe the unified audio data
     *
     * @extends File
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    class Audio extends File {
        /**
         * Indicates the uri of audio
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        audioUri: string;
    }
    /**
     * Describe the unified folder data
     *
     * @extends File
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    class Folder extends File {
        /**
         * Indicates the uri of folder
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        folderUri: string;
    }
    /**
     * Describe system defined type data(this kind of data is provided and bound to OpenHarmony,
     * also can be parsed by system provided API)
     *
     * @extends UnifiedRecord
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    class SystemDefinedRecord extends UnifiedRecord {
        /**
         * Indicates the details of system defined data
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        details?: {
            [key: string]: number | string | Uint8Array;
        };
    }
    /**
     * Describe system defined form data(this kind of data is provided and bound to OpenHarmony,
     * also can be parsed by system provided API)
     *
     * @extends SystemDefinedRecord
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    class SystemDefinedForm extends SystemDefinedRecord {
        /**
         * Indicates the id of form
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        formId: number;
        /**
         * Indicates the name of form
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        formName: string;
        /**
         * Indicates the bundle name of form
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        bundleName: string;
        /**
         * Indicates the ability name of form
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        abilityName: string;
        /**
         * Indicates the module of form
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        module: string;
    }
    /**
     * Describe system defined app item data(this kind of data is provided and bound to OpenHarmony,
     * also can be parsed by system provided API)
     *
     * @extends SystemDefinedRecord
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    class SystemDefinedAppItem extends SystemDefinedRecord {
        /**
         * Indicates the app id
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        appId: string;
        /**
         * Indicates the app name
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        appName: string;
        /**
         * Indicates the id of app icon
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        appIconId: string;
        /**
         * Indicates the id of app label
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        appLabelId: string;
        /**
         * Indicates the bundle name of app
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        bundleName: string;
        /**
         * Indicates the ability name of app
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        abilityName: string;
    }
    /**
     * Describe system defined pixel map data(this kind of data is provided and bound to OpenHarmony,
     * also can be parsed by system provided API)
     *
     * @extends SystemDefinedRecord
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    class SystemDefinedPixelMap extends SystemDefinedRecord {
        /**
         * Indicates the raw data of pixel map
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        rawData: Uint8Array;
    }
    /**
     * Describe application defined data(this kind of data is provided and bound to OpenHarmony,
     * also can be parsed by system provided API)
     *
     * @extends UnifiedRecord
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    class ApplicationDefinedRecord extends UnifiedRecord {
        /**
         * Indicates the type of data, should always be started with 'ApplicationDefined.', will
         * return error otherwise
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        applicationDefinedType: string;
        /**
         * Indicates the raw data of application defined data
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        rawData: Uint8Array;
    }
    /**
     * Describe the sharing channel that UDMF support
     *
     * @enum { string }
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    enum Intention {
        /**
         * Indicates the intention of data hub
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        DATA_HUB = 'DataHub'
    }
    /**
     * Describe the optional arguments of data operation
     *
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    type Options = {
        /**
         * Indicates the target Intention
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        intention?: Intention;
        /**
         * Indicates the unique identifier of target UnifiedData
         *
         * @syscap SystemCapability.DistributedDataManager.UDMF.Core
         * @since 10
         */
        key?: string;
    };
    /**
     * Insert data into unified data channel by Intention
     *
     * @param { Options } options - fill the intention field to indicate the target {@link Intention}.
     * @param { UnifiedData } data - {@link UnifiedData} data object to insert into target intention.
     * @param { AsyncCallback<string> } callback - {string}: the unique identifier.
     * @throws { BusinessError } 201 - Permission denied..
     * @throws { BusinessError } 401 - Parameter error..
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    function insertData(options: Options, data: UnifiedData, callback: AsyncCallback<string>): void;
    /**
     * Insert data into unified data channel by Intention
     *
     * @param { Options } options - fill the intention field to indicate the target {@link Intention}.
     * @param { UnifiedData } data - {@link UnifiedData} data object to insert into target intention.
     * @returns { Promise<string> } {string}: the unique identifier.
     * @throws { BusinessError } 201 - Permission denied..
     * @throws { BusinessError } 401 - Parameter error..
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    function insertData(options: Options, data: UnifiedData): Promise<string>;
    /**
     * Update data to unified data channel by Unique Identifier
     *
     * @param { Options } options - fill the unique identifier field to indicate the target {@link UnifiedData}.
     * @param { UnifiedData } data - {@link UnifiedData} data object to update the target data.
     * @param { AsyncCallback<void> } callback - the callback of updateData.
     * @throws { BusinessError } 201 - Permission denied..
     * @throws { BusinessError } 401 - Parameter error..
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    function updateData(options: Options, data: UnifiedData, callback: AsyncCallback<void>): void;
    /**
     * Update data to unified data channel by Unique Identifier
     *
     * @param { Options } options - fill the unique identifier field to indicate the target {@link UnifiedData}.
     * @param { UnifiedData } data - {@link UnifiedData} data object to update the target data.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - Permission denied..
     * @throws { BusinessError } 401 - Parameter error..
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    function updateData(options: Options, data: UnifiedData): Promise<void>;
    /**
     * Query data of unified data channel by Intention or Unique Identifier
     *
     * @param { Options } options - fill the intention or unique identifier field to indicate the target {@link Intention} or {@link UnifiedData}.
     * @param { AsyncCallback<Array<UnifiedData>> } callback - {Array<UnifiedData>}: the target {@link UnifiedData} object array.
     * @throws { BusinessError } 201 - Permission denied..
     * @throws { BusinessError } 401 - Parameter error..
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    function queryData(options: Options, callback: AsyncCallback<Array<UnifiedData>>): void;
    /**
     * Query data of unified data channel by Intention or Unique Identifier
     *
     * @param { Options } options - fill the intention or unique identifier field to indicate the target {@link Intention} or {@link UnifiedData}.
     * @returns { Promise<Array<UnifiedData>> } {Array<UnifiedData>}: the target {@link UnifiedData} object array.
     * @throws { BusinessError } 201 - Permission denied..
     * @throws { BusinessError } 401 - Parameter error..
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    function queryData(options: Options): Promise<Array<UnifiedData>>;
    /**
     * Delete data of unified data channel by Intention or Unique Identifier
     *
     * @param { Options } options - fill the intention or unique identifier field to indicate the target {@link Intention} or {@link UnifiedData}.
     * @param { AsyncCallback<Array<UnifiedData>> } callback - {Array<UnifiedData>}: the deleted {@link UnifiedData} object array.
     * @throws { BusinessError } 201 - Permission denied..
     * @throws { BusinessError } 401 - Parameter error..
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    function deleteData(options: Options, callback: AsyncCallback<Array<UnifiedData>>): void;
    /**
     * Delete data of unified data channel by Intention or Unique Identifier
     *
     * @param { Options } options - fill the intention or unique identifier field to indicate the target {@link Intention} or {@link UnifiedData}.
     * @returns { Promise<Array<UnifiedData>> } {Array<UnifiedData>}: the deleted {@link UnifiedData} object array.
     * @throws { BusinessError } 201 - Permission denied..
     * @throws { BusinessError } 401 - Parameter error..
     * @syscap SystemCapability.DistributedDataManager.UDMF.Core
     * @since 10
     */
    function deleteData(options: Options): Promise<Array<UnifiedData>>;
}
export default unifiedDataChannel;
