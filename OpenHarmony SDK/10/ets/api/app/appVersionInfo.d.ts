/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * Defines an AppVersionInfo object.
 *
 * @typedef AppVersionInfo
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 7
 */
export interface AppVersionInfo {
    /**
     * Application name.
     *
     * @type { string }
     * @default appName
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 7
     */
    readonly appName: string;
    /**
     * Application version number.
     *
     * @type { number }
     * @default versionCode
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 7
     */
    readonly versionCode: number;
    /**
     * Application version name.
     *
     * @type { string }
     * @default versionName
     * @readonly
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 7
     */
    readonly versionName: string;
}
