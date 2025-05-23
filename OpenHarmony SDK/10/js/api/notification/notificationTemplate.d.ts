/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
/**
 * Describes a NotificationTemplate instance.
 *
 * @typedef NotificationTemplate
 * @syscap SystemCapability.Notification.Notification
 * @since 8
 */
export interface NotificationTemplate {
    /**
     * Obtains the type of a notification template.
     *
     * @type { string }
     * @syscap SystemCapability.Notification.Notification
     * @since 8
     */
    name: string;
    /**
     * Obtains the data of a notification template.
     *
     * @type { object }
     * @syscap SystemCapability.Notification.Notification
     * @since 8
     */
    data: {
        [key: string]: Object;
    };
}
