/*
 * Copyright (C) 2023 Huawei Device Co., Ltd.
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
import type { AsyncCallback, Callback } from './@ohos.base';
import type Context from './application/Context';
import type image from './@ohos.multimedia.image';
import type dataSharePredicates from './@ohos.data.dataSharePredicates';
/**
 * Helper functions to access image and video assets
 *
 * @namespace photoAccessHelper
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @since 10
 */
declare namespace photoAccessHelper {
    /**
     * Returns an instance of PhotoAccessHelper
     *
     * @param { Context } context - Hap context information
     * @returns { PhotoAccessHelper } Instance of PhotoAccessHelper
     * @throws { BusinessError } 401 - if parameter is invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @StageModelOnly
     * @since 10
     */
    function getPhotoAccessHelper(context: Context): PhotoAccessHelper;
    /**
     * Enumeration of different types of photos
     *
     * @enum { number } PhotoType
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    enum PhotoType {
        /**
         * Image asset
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        IMAGE = 1,
        /**
         * Video asset
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        VIDEO
    }
    /**
     * Indicates the type of photo asset member.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    type MemberType = number | string | boolean;
    /**
     * Defines the photo asset
     *
     * @interface PhotoAsset
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    interface PhotoAsset {
        /**
         * uri of the asset.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        readonly uri: string;
        /**
         * Photo type, image or video
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        readonly photoType: PhotoType;
        /**
         * Display name (with a file name extension) of the asset.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        readonly displayName: string;
        /**
         * Returns the value of the specified member.
         *
         * @param { string } member - Photo asset member. for example : get(PhotoKeys.SIZE)
         * @returns { MemberType }
         * @throws { BusinessError } 401 - if parameter is invalid
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000014 - Member is not a valid PhotoKey
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        get(member: string): MemberType;
        /**
         * Set a new value to the specified member
         *
         * @param { string } member - Photo asset member
         * @param { string } value - The new value of the member.
         * @throws { BusinessError } 401 - if parameter is invalid
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000014 - Member is not a valid PhotoKey
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         * @example : set(PhotoKeys.TITLE, "newTitle"), call commitModify after set
         */
        set(member: string, value: string): void;
        /**
         * Modify metadata of the asset
         *
         * @permission ohos.permission.WRITE_IMAGEVIDEO
         * @param { AsyncCallback<void> } callback - Returns void.
         * @throws { BusinessError } 401 - if values to commit is invalid
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000001 - Invalid display name
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        commitModify(callback: AsyncCallback<void>): void;
        /**
         * Modify metadata of the asset
         *
         * @permission ohos.permission.WRITE_IMAGEVIDEO
         * @returns { Promise<void> } Returns void
         * @throws { BusinessError } 401 - if values to commit is invalid
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000001 - Invalid display name
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        commitModify(): Promise<void>;
        /**
         * Open the asset in read only mode
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { AsyncCallback<number> } callback - Returns the read only fd
         * @throws { BusinessError } 401 - if parameter is invalid
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        getReadOnlyFd(callback: AsyncCallback<number>): void;
        /**
         * Open the asset in read only mode
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @returns { Promise<number> } Returns the read only fd
         * @throws { BusinessError } 401 - if parameter is invalid
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        getReadOnlyFd(): Promise<number>;
        /**
         * Close the asset
         *
         * @param { number } fd - The opened fd of the asset.
         * @param { AsyncCallback<void> } callback - Returns void
         * @throws { BusinessError } 401 - if parameter is invalid
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        close(fd: number, callback: AsyncCallback<void>): void;
        /**
         * Close the asset
         *
         * @param { number } fd - The opened fd of the asset.
         * @returns { Promise<void> } Returns void
         * @throws { BusinessError } 401 - if parameter is invalid
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        close(fd: number): Promise<void>;
        /**
         * Get thumbnail of the asset
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { AsyncCallback<image.PixelMap> } callback - Returns the thumbnail's pixelMap.
         * @throws { BusinessError } 401 - if parameter is invalid
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        getThumbnail(callback: AsyncCallback<image.PixelMap>): void;
        /**
         * Get thumbnail of the asset
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { image.Size } size - Thumbnail's size
         * @param { AsyncCallback<image.PixelMap> } callback - Returns the thumbnail's pixelMap.
         * @throws { BusinessError } 401 - if parameter is invalid
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        getThumbnail(size: image.Size, callback: AsyncCallback<image.PixelMap>): void;
        /**
         * Get thumbnail of the asset
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { image.Size } size - Thumbnail's size
         * @returns { Promise<image.PixelMap> } Returns the thumbnail's pixelMap.
         * @throws { BusinessError } 401 - if parameter is invalid
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        getThumbnail(size?: image.Size): Promise<image.PixelMap>;
    }
    /**
     * Enumeration of photo asset members
     *
     * @enum { string } PhotoKeys
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    enum PhotoKeys {
        /**
         * Asset uri, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        URI = 'uri',
        /**
         * Photo type of the asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        PHOTO_TYPE = 'media_type',
        /**
         * Asset name, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        DISPLAY_NAME = 'display_name',
        /**
         * Size of the asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        SIZE = 'size',
        /**
         * Creation date of the asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        DATE_ADDED = 'date_added',
        /**
         * Modified date of the asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        DATE_MODIFIED = 'date_modified',
        /**
         * Duration of video files, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        DURATION = 'duration',
        /**
         * Width of the image asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        WIDTH = 'width',
        /**
         * Height of the image asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        HEIGHT = 'height',
        /**
         * Date taken of the asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        DATE_TAKEN = 'date_taken',
        /**
         * Orientation of the image asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        ORIENTATION = 'orientation',
        /**
         * Favorite state of the asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        FAVORITE = 'is_favorite',
        /**
         * Title of the asset
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        TITLE = 'title'
    }
    /**
     * Enumeration of photo album members.
     *
     * @enum { string } AlbumKeys
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    enum AlbumKeys {
        /**
         * Album uri
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        URI = 'uri',
        /**
         * Album name
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        ALBUM_NAME = 'album_name'
    }
    /**
     * Options to fetch assets or albums
     *
     * @interface FetchOptions
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    interface FetchOptions {
        /**
         * Indicates the members to query.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        fetchColumns: Array<string>;
        /**
         * Predicates to query
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        predicates: dataSharePredicates.DataSharePredicates;
    }
    /**
     * Options to create a photo asset
     *
     * @interface CreateOptions
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    interface CreateOptions {
        /**
         * Title of the asset
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        title?: string;
    }
    /**
     * The fetch result of assets or albums
     *
     * @interface FetchResult
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    interface FetchResult<T> {
        /**
         * Obtains the total number of objects in the fetch result.
         *
         * @returns { number } Total number of objects.
         * @throws { BusinessError } 401 - if parameter is invalid
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        getCount(): number;
        /**
         * Checks whether the result set points to the last row.
         * You need to check whether the object is the last one before calling getNextObject.
         *
         * @returns { boolean } Whether the object is the last one in the fetch result.
         * @throws { BusinessError } 401 - if parameter is invalid
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        isAfterLast(): boolean;
        /**
         * Obtains the first object in the fetch result.
         *
         * @param { AsyncCallback<T> } callback - Returns the first object in the fetch result.
         * @throws { BusinessError } 401 - if parameter is invalid
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        getFirstObject(callback: AsyncCallback<T>): void;
        /**
         * Obtains the first object in the fetch result.
         *
         * @returns { Promise<T> } Returns the first object in the fetch result.
         * @throws { BusinessError } 401 - if parameter is invalid
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        getFirstObject(): Promise<T>;
        /**
         * Obtains the next object in the fetch result.
         * Before calling this method, you must use isAfterLast() to check whether the current position is the last row
         * in the fetch result. This method only works when the current position is not the last row.
         *
         * @param { AsyncCallback<T> } callback - Returns the next object
         * @throws { BusinessError } 401 - if parameter is invalid
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        getNextObject(callback: AsyncCallback<T>): void;
        /**
         * Obtains the next object in the fetch result.
         * Before calling this method, you must use isAfterLast() to check whether the current position is the last row
         * in the fetch result. This method only works when the current position is not the last row.
         *
         * @returns { Promise<T> } Returns the next object
         * @throws { BusinessError } 401 - if parameter is invalid
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        getNextObject(): Promise<T>;
        /**
         * Obtains the last object in the fetch result
         *
         * @param { AsyncCallback<T> } callback - Returns the last object
         * @throws { BusinessError } 401 - if parameter is invalid
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        getLastObject(callback: AsyncCallback<T>): void;
        /**
         * Obtains the last object in the fetch result
         *
         * @returns { Promise<T> } Returns the last object
         * @throws { BusinessError } 401 - if parameter is invalid
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        getLastObject(): Promise<T>;
        /**
         * Obtains the object with the specified index in the fetch result.
         *
         * @param { number } index - Index of the object to obtain.
         * @param { AsyncCallback<T> } callback - Returns the object
         * @throws { BusinessError } 401 - if type index is not number
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        getObjectByPosition(index: number, callback: AsyncCallback<T>): void;
        /**
         * Obtains the object with the specified index in the fetch result.
         *
         * @param { number } index - Index of the asset to obtain.
         * @returns { Promise<T> } Returns the object
         * @throws { BusinessError } 401 - if type index is not number
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        getObjectByPosition(index: number): Promise<T>;
        /**
         * Obtains all objects in the fetch result.
         *
         * @param { AsyncCallback<Array<T>> } callback - Returns all the objects
         * @throws { BusinessError } 401 - if parameter is invalid
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        getAllObjects(callback: AsyncCallback<Array<T>>): void;
        /**
         * Obtains all objects in the fetch result.
         *
         * @returns { Promise<Array<T>> } Returns all the objects
         * @throws { BusinessError } 401 - if parameter is invalid
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        getAllObjects(): Promise<Array<T>>;
        /**
         * Releases the fetch result.
         *
         * @throws { BusinessError } 401 - if parameter is invalid
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        close(): void;
    }
    /**
     * Album type.
     *
     * @enum { number } AlbumType
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    enum AlbumType {
        /**
         * Album created by user.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        USER = 0,
        /**
         * Album created by system, which metadata cannot be modified.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        SYSTEM = 1024
    }
    /**
     * Album subtype
     *
     * @enum { number } AlbumSubtype
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    enum AlbumSubtype {
        /**
         * Generic user-created albums.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        USER_GENERIC = 1,
        /**
         * Favorite album, which assets are marked as favorite.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        FAVORITE = 1025,
        /**
         * Video album, which contains all video assets.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        VIDEO,
        /**
         * Any album
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        ANY = 2147483647
    }
    /**
     * Defines the abstract interface of albums.
     *
     * @interface AbsAlbum
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    interface AbsAlbum {
        /**
         * Album type
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        readonly albumType: AlbumType;
        /**
         * Album subtype
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        readonly albumSubtype: AlbumSubtype;
        /**
         * Album name.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        albumName: string;
        /**
         * Album uri.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        readonly albumUri: string;
        /**
         * Number of assets in the album
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        readonly count: number;
        /**
         * Cover uri for the album
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        readonly coverUri: string;
        /**
         * Fetch assets in an album.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { FetchOptions } options - Fetch options.
         * @param { AsyncCallback<FetchResult<PhotoAsset>> } callback - Returns the fetch result
         * @throws { BusinessError } 401 - if type options is not FetchOptions
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        getAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<PhotoAsset>>): void;
        /**
         * Fetch assets in an album.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { FetchOptions } options - Fetch options.
         * @returns { Promise<FetchResult<PhotoAsset>> } Returns the fetch result
         * @throws { BusinessError } 401 - if type options is not FetchOptions
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        getAssets(options: FetchOptions): Promise<FetchResult<PhotoAsset>>;
    }
    /**
     * Defines the album.
     *
     * @interface Album
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    interface Album extends AbsAlbum {
        /**
         * Modify metadata for the album
         *
         * @permission ohos.permission.WRITE_IMAGEVIDEO
         * @param { AsyncCallback<void> } callback - Returns void
         * @throws { BusinessError } 401 - if value to modify is invalid
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        commitModify(callback: AsyncCallback<void>): void;
        /**
         * Modify metadata for the album
         *
         * @permission ohos.permission.WRITE_IMAGEVIDEO
         * @returns { Promise<void> } Returns void
         * @throws { BusinessError } 401 - if value to modify is invalid
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        commitModify(): Promise<void>;
        /**
         * Add assets to the album.
         *
         * @permission ohos.permission.WRITE_IMAGEVIDEO
         * @param { Array<PhotoAsset> } assets - Assets to add
         * @param { AsyncCallback<void> } callback - Returns void
         * @throws { BusinessError } 401 - if PhotoAssets is invalid
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        addAssets(assets: Array<PhotoAsset>, callback: AsyncCallback<void>): void;
        /**
         * Add assets to the album.
         *
         * @permission ohos.permission.WRITE_IMAGEVIDEO
         * @param { Array<PhotoAsset> } assets - Assets to add
         * @returns { Promise<void> } Returns void
         * @throws { BusinessError } 401 - if PhotoAssets is invalid
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        addAssets(assets: Array<PhotoAsset>): Promise<void>;
        /**
         * Remove assets from the album.
         *
         * @permission ohos.permission.WRITE_IMAGEVIDEO
         * @param { Array<PhotoAsset> } assets - Assets to remove
         * @param { AsyncCallback<void> } callback - Returns void
         * @throws { BusinessError } 401 - if PhotoAssets is invalid
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        removeAssets(assets: Array<PhotoAsset>, callback: AsyncCallback<void>): void;
        /**
         * Remove assets from the album.
         *
         * @permission ohos.permission.WRITE_IMAGEVIDEO
         * @param { Array<PhotoAsset> } assets - Assets to remove
         * @returns { Promise<void> } Returns the promise
         * @throws { BusinessError } 401 - if PhotoAssets is invalid
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        removeAssets(assets: Array<PhotoAsset>): Promise<void>;
    }
    /**
     * Helper functions to access photos and albums.
     *
     * @interface PhotoAccessHelper
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    interface PhotoAccessHelper {
        /**
         * Fetch photo assets
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { FetchOptions } options - Fetch options.
         * @param { AsyncCallback<FetchResult<PhotoAsset>> } callback - Returns the fetch result.
         * @throws { BusinessError } 401 - if type options is not FetchOptions
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        getAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<PhotoAsset>>): void;
        /**
         * Fetch photo assets
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { FetchOptions } options - Retrieval options.
         * @returns { Promise<FetchResult<PhotoAsset>> } Returns the fetch result.
         * @throws { BusinessError } 401 - if type options is not FetchOptions
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        getAssets(options: FetchOptions): Promise<FetchResult<PhotoAsset>>;
        /**
         * Create a photo asset:
         *   1. (Suggested)Integrate security component without WRITE_IMAGEVIDEO permission;
         *   2. Get WRITE_IMAGEVIDEO permission by ACL;
         *
         * @permission ohos.permission.WRITE_IMAGEVIDEO
         * @param { PhotoType } photoType - Photo asset type
         * @param { string } extension - Asset extension
         * @param { CreateOptions } options - Asset create option
         * @param { AsyncCallback<string> } callback - Returns the uri of the newly created asset
         * @throws { BusinessError } 401 - if type createOption is wrong
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        createAsset(photoType: PhotoType, extension: string, options: CreateOptions, callback: AsyncCallback<string>): void;
        /**
         * Create a photo asset:
         *   1. (Suggested)Integrate security component without WRITE_IMAGEVIDEO permission;
         *   2. Get WRITE_IMAGEVIDEO permission by ACL;
         *
         * @permission ohos.permission.WRITE_IMAGEVIDEO
         * @param { PhotoType } photoType - Photo asset type
         * @param { string } extension - Asset extension
         * @param { AsyncCallback<string> } callback - Returns the uri of the newly created asset
         * @throws { BusinessError } 401 - if type createOption is wrong
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        createAsset(photoType: PhotoType, extension: string, callback: AsyncCallback<string>): void;
        /**
         * Create a photo asset:
         *   1. (Suggested)Integrate security component without WRITE_IMAGEVIDEO permission;
         *   2. Get WRITE_IMAGEVIDEO permission by ACL;
         *
         * @permission ohos.permission.WRITE_IMAGEVIDEO
         * @param { PhotoType } photoType - Photo asset type
         * @param { string } extension - Asset extension
         * @param { CreateOptions } [options] - Optional asset create option
         * @returns { Promise<string> } Returns the uri of the newly created asset
         * @throws { BusinessError } 401 - if type createOption is wrong
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        createAsset(photoType: PhotoType, extension: string, options?: CreateOptions): Promise<string>;
        /**
         * Fetch albums.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { AlbumType } type - Album type.
         * @param { AlbumSubtype } subtype - Album subtype.
         * @param { FetchOptions } options - options to fetch albums
         * @param { AsyncCallback<FetchResult<Album>> } callback - Returns the fetch result
         * @throws { BusinessError } 401 - if type options is not FetchOption
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        getAlbums(type: AlbumType, subtype: AlbumSubtype, options: FetchOptions, callback: AsyncCallback<FetchResult<Album>>): void;
        /**
         * Fetch albums.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { AlbumType } type - Album type.
         * @param { AlbumSubtype } subtype - Album subtype.
         * @param { AsyncCallback<FetchResult<Album>> } callback - Returns the fetch result
         * @throws { BusinessError } 401 - if type options is not FetchOption
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        getAlbums(type: AlbumType, subtype: AlbumSubtype, callback: AsyncCallback<FetchResult<Album>>): void;
        /**
         * Fetch albums.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { AlbumType } type - Album type.
         * @param { AlbumSubtype } subtype - Album subtype.
         * @param { FetchOptions } [options] - options to fetch albums
         * @returns { Promise<FetchResult<Album>> } - Returns the fetch result
         * @throws { BusinessError } 401 - if type options is not FetchOption
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        getAlbums(type: AlbumType, subtype: AlbumSubtype, options?: FetchOptions): Promise<FetchResult<Album>>;
        /**
         * Register change notify for the specified uri.
         *
         * @param { string } uri - PhotoAsset's uri, album's uri or DefaultChangeUri
         * @param { boolean } forChildUris - Monitor the child uris.
         * @param { Callback<ChangeData> } callback - Returns the changed data
         * @throws { BusinessError } 401 - if parameter is invalid
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        registerChange(uri: string, forChildUris: boolean, callback: Callback<ChangeData>): void;
        /**
         * Unregister change notify for the specified uri.
         *
         * @param { string } uri - PhotoAsset's uri, album's uri or DefaultChangeUri
         * @param { Callback<ChangeData> } [callback] - The callback function to unregister.
         * @throws { BusinessError } 401 - if parameter is invalid
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        unRegisterChange(uri: string, callback?: Callback<ChangeData>): void;
        /**
         * Create a pop-up box to delete photos
         *
         * @permission ohos.permission.WRITE_IMAGEVIDEO
         * @param { Array<string> } uriList - List of the asset uris to be deleted
         * @param { AsyncCallback<void> } callback - Returns void
         * @throws { BusinessError } 401 - if parameter is invalid
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        createDeleteRequest(uriList: Array<string>, callback: AsyncCallback<void>): void;
        /**
         * Create a pop-up box to delete photos
         *
         * @permission ohos.permission.WRITE_IMAGEVIDEO
         * @param { Array<string> } uriList - List of the asset uris to be deleted
         * @returns { Promise<void> } - Returns void
         * @throws { BusinessError } 401 - if parameter is invalid
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        createDeleteRequest(uriList: Array<string>): Promise<void>;
        /**
         * Release PhotoAccessHelper instance
         *
         * @param { AsyncCallback<void> } callback - Returns void
         * @throws { BusinessError } 401 - if parameter is invalid
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        release(callback: AsyncCallback<void>): void;
        /**
         * Release PhotoAccessHelper instance
         *
         * @returns { Promise<void> } Returns void
         * @throws { BusinessError } 401 - if parameter is invalid
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        release(): Promise<void>;
    }
    /**
     * Enumeration types of data change.
     *
     * @enum { number } NotifyType
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    enum NotifyType {
        /**
         * Data(assets or albums) have been newly created
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        NOTIFY_ADD,
        /**
         * Data(assets or albums) have been modified
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        NOTIFY_UPDATE,
        /**
         * Data(assets or albums) have been removed
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        NOTIFY_REMOVE,
        /**
         * Assets have been added to an album.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        NOTIFY_ALBUM_ADD_ASSET,
        /**
         * Assets have been removed from an album.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        NOTIFY_ALBUM_REMOVE_ASSET
    }
    /**
     * Enumeration uris for registerChange.
     *
     * @enum { string } DefaultChangeUri
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    enum DefaultChangeUri {
        /**
         * Uri for default PhotoAsset, use with forDescendant{true}, will receive all PhotoAsset's change notifications
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        DEFAULT_PHOTO_URI = 'file://media/Photo',
        /**
         * Uri for default Album, use with forDescendant{true}, will receive all Album's change notifications
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        DEFAULT_ALBUM_URI = 'file://media/PhotoAlbum'
    }
    /**
     * Defines the change data
     *
     * @interface ChangeData
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    interface ChangeData {
        /**
         * The NotifyType of ChangeData
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        type: NotifyType;
        /**
         * The changed uris
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        uris: Array<string>;
        /**
         * Change details of the asset uris to an album.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        extraUris: Array<string>;
    }
    /**
     * PhotoViewMIMETypes represents the type of media resource that photo picker selects.
     *
     * @enum { string } PhotoViewMIMETypes
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    export enum PhotoViewMIMETypes {
        /**
         * IMAGE_TYPE indicates that the selected media resources are images.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        IMAGE_TYPE = 'image/*',
        /**
         * VIDEO_TYPE indicates that the selected media resources are videos.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        VIDEO_TYPE = 'video/*',
        /**
         * IMAGE_VIDEO_TYPE indicates that the selected media resources are images and videos.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        IMAGE_VIDEO_TYPE = '*/*'
    }
    /**
     * PhotoSelectOptions Object
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    class PhotoSelectOptions {
        /**
         * The Type of the file in the picker window.
         *
         * @type { ?PhotoViewMIMETypes }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        MIMEType?: PhotoViewMIMETypes;
        /**
         * Maximum number of images for a single selection.
         *
         * @type { ?number }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        maxSelectNumber?: number;
    }
    /**
     * PhotoSelectResult Object
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    class PhotoSelectResult {
        /**
         * The uris for the selected files.
         *
         * @type { Array<string> }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        photoUris: Array<string>;
        /**
         * Original option.
         *
         * @type { boolean }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        isOriginalPhoto: boolean;
    }
    /**
     * PhotoViewPicker Object
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    class PhotoViewPicker {
        /**
         * Pull up the photo picker based on the selection mode.
         *
         * @param { PhotoSelectOptions } option - represents the options provided in select mode.
         * @returns { Promise<PhotoSelectResult> } Returns the uris for the selected files.
         * @throws { BusinessError } 401 - if parameter is invalid
         * @throws { BusinessError } 13900042 - Unknown error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        select(option?: PhotoSelectOptions): Promise<PhotoSelectResult>;
        /**
         * Pull up the photo picker based on the selection mode.
         *
         * @param { PhotoSelectOptions } option - represents the options provided in select mode.
         * @param { AsyncCallback<PhotoSelectResult> } callback - callback
         * @throws { BusinessError } 401 - if parameter is invalid
         * @throws { BusinessError } 13900042 - Unknown error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        select(option: PhotoSelectOptions, callback: AsyncCallback<PhotoSelectResult>): void;
        /**
         * Pull up the photo picker based on the selection mode.
         *
         * @param { AsyncCallback<PhotoSelectResult> } callback - callback
         * @throws { BusinessError } 401 - if parameter is invalid
         * @throws { BusinessError } 13900042 - Unknown error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        select(callback: AsyncCallback<PhotoSelectResult>): void;
    }
}
export default photoAccessHelper;
