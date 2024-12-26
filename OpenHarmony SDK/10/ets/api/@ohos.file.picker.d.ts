/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * Provide the capabilities to use different pickers.
 *
 * @namespace picker
 * @syscap SystemCapability.FileManagement.UserFileService
 * @since 9
 */
declare namespace picker {
    /**
     * PhotoViewMIMETypes represents the type of media resource that photo picker selects.
     *
     * @enum { string } PhotoViewMIMETypes
     * @syscap SystemCapability.FileManagement.UserFileService
     * @since 9
     */
    export enum PhotoViewMIMETypes {
        IMAGE_TYPE = 'image/*',
        VIDEO_TYPE = 'video/*',
        IMAGE_VIDEO_TYPE = '*/*'
    }
    /**
     * PhotoSelectOptions Object
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @since 9
     */
    class PhotoSelectOptions {
        /**
         * The Type of the file in the picker window.
         *
         * @type { ?PhotoViewMIMETypes }
         * @syscap SystemCapability.FileManagement.UserFileService
         * @since 9
         */
        MIMEType?: PhotoViewMIMETypes;
        /**
         * Maximum number of images for a single selection.
         *
         * @type { ?number }
         * @syscap SystemCapability.FileManagement.UserFileService
         * @since 9
         */
        maxSelectNumber?: number;
    }
    /**
     * PhotoSelectResult Object
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @since 9
     */
    class PhotoSelectResult {
        /**
         * The uris for the selected files.
         *
         * @type { Array<string> }
         * @syscap SystemCapability.FileManagement.UserFileService
         * @since 9
         */
        photoUris: Array<string>;
        /**
         * Original option.
         *
         * @type { boolean }
         * @syscap SystemCapability.FileManagement.UserFileService
         * @since 9
         */
        isOriginalPhoto: boolean;
    }
    /**
     * PhotoSaveOptions Object
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @since 9
     */
    class PhotoSaveOptions {
        /**
         * The names of the files to be saved.
         *
         * @type { ?Array<string> }
         * @syscap SystemCapability.FileManagement.UserFileService
         * @since 9
         */
        newFileNames?: Array<string>;
    }
    /**
     * PhotoViewPicker Object
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @since 9
     */
    class PhotoViewPicker {
        /**
         * Pull up the photo picker based on the selection mode.
         *
         * @param { PhotoSelectOptions } option - represents the options provided in select mode.
         * @returns { Promise<PhotoSelectResult> } Returns the uris for the selected files.
         * @syscap SystemCapability.FileManagement.UserFileService
         * @since 9
         */
        select(option?: PhotoSelectOptions): Promise<PhotoSelectResult>;
        /**
         * Pull up the photo picker based on the selection mode.
         *
         * @param { PhotoSelectOptions } option - represents the options provided in select mode.
         * @param { AsyncCallback<PhotoSelectResult> } callback - callback
         * @syscap SystemCapability.FileManagement.UserFileService
         * @since 9
         */
        select(option: PhotoSelectOptions, callback: AsyncCallback<PhotoSelectResult>): void;
        /**
         * Pull up the photo picker based on the selection mode.
         *
         * @param { AsyncCallback<PhotoSelectResult> } callback - callback
         * @syscap SystemCapability.FileManagement.UserFileService
         * @since 9
         */
        select(callback: AsyncCallback<PhotoSelectResult>): void;
        /**
         * Pull up the photo picker based on the save mode.
         *
         * @param { PhotoSaveOptions } option - represents the options provided in save mode.
         * @returns { Promise<Array<string>> } Returns the uris for the saved files.
         * @syscap SystemCapability.FileManagement.UserFileService
         * @since 9
         */
        save(option?: PhotoSaveOptions): Promise<Array<string>>;
        /**
         * Pull up the photo picker based on the save mode.
         *
         * @param { PhotoSaveOptions } option - represents the options provided in save mode.
         * @param { AsyncCallback<Array<string>> } callback - callback
         * @syscap SystemCapability.FileManagement.UserFileService
         * @since 9
         */
        save(option: PhotoSaveOptions, callback: AsyncCallback<Array<string>>): void;
        /**
         * Pull up the photo picker based on the save mode.
         *
         * @param { AsyncCallback<Array<string>> } callback - callback
         * @syscap SystemCapability.FileManagement.UserFileService
         * @since 9
         */
        save(callback: AsyncCallback<Array<string>>): void;
    }
    /**
     * DocumentSelectOptions Object.
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @since 9
     */
    class DocumentSelectOptions {
        /**
         * The default opening uri of the picker window.
         *
         * @type { ?string }
         * @syscap SystemCapability.FileManagement.UserFileService
         * @since 10
         */
        defaultFilePathUri?: string;
        /**
         * Suffixes for file selected.
         *
         * @type { ?Array<string> }
         * @syscap SystemCapability.FileManagement.UserFileService
         * @since 10
         */
        fileSuffixFilters?: Array<string>;
        /**
         * Maximum number of files for a single selection.
         *
         * @type { ?number }
         * @syscap SystemCapability.FileManagement.UserFileService
         * @since 10
         */
        maxSelectNumber?: number;
    }
    /**
     * DocumentSaveOptions Object
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @since 9
     */
    class DocumentSaveOptions {
        /**
         * The names of the files to be saved.
         * Currently, only single file is supported.
         *
         * @type { ?Array<string> }
         * @syscap SystemCapability.FileManagement.UserFileService
         * @since 9
         */
        newFileNames?: Array<string>;
        /**
         * The default opening uri of the picker window.
         *
         * @type { ?string }
         * @syscap SystemCapability.FileManagement.UserFileService
         * @since 10
         */
        defaultFilePathUri?: string;
        /**
         * Suffixes for file saved.
         *
         * @type { ?Array<string> }
         * @syscap SystemCapability.FileManagement.UserFileService
         * @since 10
         */
        fileSuffixChoices?: Array<string>;
    }
    /**
     * DocumentViewPicker Object
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @since 9
     */
    class DocumentViewPicker {
        /**
         * Pull up the document picker based on the selection mode.
         * Currently, only single file is supported.
         *
         * @param { DocumentSelectOptions } option - represents the options provided in select mode.
         * @returns { Promise<Array<string>> } Returns the uris for the selected files.
         * @syscap SystemCapability.FileManagement.UserFileService
         * @since 9
         */
        select(option?: DocumentSelectOptions): Promise<Array<string>>;
        /**
         * Pull up the document picker based on the selection mode.
         * Currently, only single file is supported.
         *
         * @param { DocumentSelectOptions } option - represents the options provided in select mode.
         * @param { AsyncCallback<Array<string>> } callback - callback
         * @syscap SystemCapability.FileManagement.UserFileService
         * @since 9
         */
        select(option: DocumentSelectOptions, callback: AsyncCallback<Array<string>>): void;
        /**
         * Pull up the document picker based on the selection mode.
         * Currently, only single file is supported.
         *
         * @param { AsyncCallback<Array<string>> } callback - callback
         * @syscap SystemCapability.FileManagement.UserFileService
         * @since 9
         */
        select(callback: AsyncCallback<Array<string>>): void;
        /**
         * Pull up the document picker based on the save mode.
         * Currently, only single file is supported.
         *
         * @param { DocumentSaveOptions } option - represents the options provided in save mode.
         * @returns { Promise<Array<string>> } Returns the uris for the saved files.
         * @syscap SystemCapability.FileManagement.UserFileService
         * @since 9
         */
        save(option?: DocumentSaveOptions): Promise<Array<string>>;
        /**
         * Pull up the document picker based on the save mode.
         * Currently, only single file is supported.
         *
         * @param { DocumentSaveOptions } option - represents the options provided in save mode.
         * @param { AsyncCallback<Array<string>> } callback - callback
         * @syscap SystemCapability.FileManagement.UserFileService
         * @since 9
         */
        save(option: DocumentSaveOptions, callback: AsyncCallback<Array<string>>): void;
        /**
         * Pull up the document picker based on the save mode.
         * Currently, only single file is supported.
         *
         * @param { AsyncCallback<Array<string>> } callback - callback
         * @syscap SystemCapability.FileManagement.UserFileService
         * @since 9
         */
        save(callback: AsyncCallback<Array<string>>): void;
    }
    /**
     * AudioSelectOptions Object. Currently not supported.
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @since 9
     */
    class AudioSelectOptions {
    }
    /**
     * AudioSaveOptions Object
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @since 9
     */
    class AudioSaveOptions {
        /**
         * The names of the files to be saved.
         * Currently, only single file is supported.
         *
         * @type { ?Array<string> }
         * @syscap SystemCapability.FileManagement.UserFileService
         * @since 9
         */
        newFileNames?: Array<string>;
    }
    /**
     * AudioViewPicker Object
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @since 9
     */
    class AudioViewPicker {
        /**
         * Pull up the audio picker based on the selection mode.
         * Currently, only single file is supported.
         *
         * @param { AudioSelectOptions } option - represents the options provided in select mode.
         * @returns { Promise<Array<string>> } Returns the uris for the selected files.
         * @syscap SystemCapability.FileManagement.UserFileService
         * @since 9
         */
        select(option?: AudioSelectOptions): Promise<Array<string>>;
        /**
         * Pull up the audio picker based on the selection mode.
         * Currently, only single file is supported.
         *
         * @param { AudioSelectOptions } option - represents the options provided in select mode.
         * @param { AsyncCallback<Array<string>> } callback - callback
         * @syscap SystemCapability.FileManagement.UserFileService
         * @since 9
         */
        select(option: AudioSelectOptions, callback: AsyncCallback<Array<string>>): void;
        /**
         * Pull up the audio picker based on the selection mode.
         * Currently, only single file is supported.
         *
         * @param { AsyncCallback<Array<string>> } callback - callback
         * @syscap SystemCapability.FileManagement.UserFileService
         * @since 9
         */
        select(callback: AsyncCallback<Array<string>>): void;
        /**
         * Pull up the audio picker based on the save mode.
         * Currently, only single file is supported.
         *
         * @param { AudioSaveOptions } option - represents the options provided in save mode.
         * @returns { Promise<Array<string>> } Returns the uris for the saved files.
         * @syscap SystemCapability.FileManagement.UserFileService
         * @since 9
         */
        save(option?: AudioSaveOptions): Promise<Array<string>>;
        /**
         * Pull up the audio picker based on the save mode.
         * Currently, only single file is supported.
         *
         * @param { AudioSaveOptions } option - represents the options provided in save mode.
         * @param { AsyncCallback<Array<string>> } callback - callback
         * @syscap SystemCapability.FileManagement.UserFileService
         * @since 9
         */
        save(option: AudioSaveOptions, callback: AsyncCallback<Array<string>>): void;
        /**
         * Pull up the audio picker based on the save mode.
         * Currently, only single file is supported.
         *
         * @param { AsyncCallback<Array<string>> } callback - callback
         * @syscap SystemCapability.FileManagement.UserFileService
         * @since 9
         */
        save(callback: AsyncCallback<Array<string>>): void;
    }
}
export default picker;
