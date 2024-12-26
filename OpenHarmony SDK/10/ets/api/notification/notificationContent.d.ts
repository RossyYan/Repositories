/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import notification from '../@ohos.notification';
import image from '../@ohos.multimedia.image';
/**
 * Describes a normal text notification.
 *
 * @typedef NotificationBasicContent
 * @syscap SystemCapability.Notification.Notification
 * @since 7
 */
export interface NotificationBasicContent {
    /**
     * Title of the normal text notification.
     *
     * @type { string }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     */
    title: string;
    /**
     * Content of the normal text notification.
     *
     * @type { string }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     */
    text: string;
    /**
     * Additional information of the normal text notification.
     *
     * @type { ?string }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     */
    additionalText?: string;
}
/**
 * Describes a long text notification.
 *
 * @typedef NotificationLongTextContent
 * @syscap SystemCapability.Notification.Notification
 * @since 7
 */
export interface NotificationLongTextContent extends NotificationBasicContent {
    /**
     * Long text content of the notification.
     *
     * @type { string }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     */
    longText: string;
    /**
     * Brief text of the long text notification.
     *
     * @type { string }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     */
    briefText: string;
    /**
     * Title that will be displayed for the long text notification when it is expanded.
     *
     * @type { string }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     */
    expandedTitle: string;
}
/**
 * Describes a multi-line text notification.
 *
 * @typedef NotificationMultiLineContent
 * @syscap SystemCapability.Notification.Notification
 * @since 7
 */
export interface NotificationMultiLineContent extends NotificationBasicContent {
    /**
     * Brief text of the multi-line text notification.
     *
     * @type { string }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     */
    briefText: string;
    /**
     * Brief text of the multi-line text notification.
     *
     * @type { string }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     */
    longTitle: string;
    /**
     * Multi-line content of the multi-line text notification.
     *
     * @type { Array<string> }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     */
    lines: Array<string>;
}
/**
 * Describes a picture-attached notification.
 *
 * @typedef NotificationPictureContent
 * @syscap SystemCapability.Notification.Notification
 * @since 7
 */
export interface NotificationPictureContent extends NotificationBasicContent {
    /**
     * Multi-line content of the multi-line text notification.
     *
     * @type { string }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     */
    briefText: string;
    /**
     * Title that will be displayed for the picture-attached notification when it is expanded.
     *
     * @type { string }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     */
    expandedTitle: string;
    /**
     * Picture to be included in a notification.
     *
     * @type { image.PixelMap }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     */
    picture: image.PixelMap;
}
/**
 * Describes notification types.
 *
 * @typedef NotificationContent
 * @syscap SystemCapability.Notification.Notification
 * @since 7
 */
export interface NotificationContent {
    /**
     * Notification content type.
     *
     * @type { notification.ContentType }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     */
    contentType: notification.ContentType;
    /**
     * Normal text notification.
     *
     * @type { ?NotificationBasicContent }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     */
    normal?: NotificationBasicContent;
    /**
     * Long text notification.
     *
     * @type { ?NotificationLongTextContent }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     */
    longText?: NotificationLongTextContent;
    /**
     * Multi-line text notification.
     *
     * @type { ?NotificationMultiLineContent }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     */
    multiLine?: NotificationMultiLineContent;
    /**
     * Picture-attached notification.
     *
     * @type { ?NotificationPictureContent }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     */
    picture?: NotificationPictureContent;
}
