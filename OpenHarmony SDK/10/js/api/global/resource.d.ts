/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * Contains resource descriptor information.
 *
 * @interface Resource
 * @syscap SystemCapability.Global.ResourceManager
 * @since 9
 */
export interface Resource {
    /**
     * bundle name in hap
     *
     * @type { string }
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    bundleName: string;
    /**
     * module name in hap
     *
     * @type { string }
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    moduleName: string;
    /**
     * resource id in hap
     *
     * @type { number }
     * @syscap SystemCapability.Global.ResourceManager
     * @since 9
     */
    id: number;
    /**
     * Set params.
     *
     * @type { ?any[] }
     * @syscap SystemCapability.Global.ResourceManager
     * @since 7
     */
    params?: any[];
    /**
     * Set type.
     *
     * @type { ?number }
     * @syscap SystemCapability.Global.ResourceManager
     * @since 7
     */
    type?: number;
}
