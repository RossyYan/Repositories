/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
/**
 * The result of requestPermissionsFromUser with asynchronous callback.
 *
 * @syscap SystemCapability.Security.AccessToken
 * @StageModelOnly
 * @since 9
 */
/**
 * The result of requestPermissionsFromUser with asynchronous callback.
 *
 * @syscap SystemCapability.Security.AccessToken
 * @StageModelOnly
 * @crossplatform
 * @since 10
 */
export default class PermissionRequestResult {
    /**
     * The permissions passed in by the user.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @StageModelOnly
     * @since 9
     */
    /**
     * The permissions passed in by the user.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    permissions: Array<string>;
    /**
     * The results for the corresponding request permissions. The value 0 indicates that a
     * permission is granted, and the value -1 indicates not.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @StageModelOnly
     * @since 9
     */
    /**
     * The results for the corresponding request permissions. The value 0 indicates that a
     * permission is granted, and the value -1 indicates not.
     *
     * @syscap SystemCapability.Security.AccessToken
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    authResults: Array<number>;
}
