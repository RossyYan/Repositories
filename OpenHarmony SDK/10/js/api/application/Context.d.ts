/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
import { ApplicationInfo } from '../bundleManager/ApplicationInfo';
import type { AsyncCallback } from '../@ohos.base';
import resmgr from '../@ohos.resourceManager';
import BaseContext from './BaseContext';
import EventHub from './EventHub';
import ApplicationContext from './ApplicationContext';
import contextConstant from '../@ohos.app.ability.contextConstant';
/**
 * The base context of an ability or an application. It allows access to
 * application-specific resources.
 *
 * @extends BaseContext
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @StageModelOnly
 * @since 9
 */
/**
 * The base context of an ability or an application. It allows access to
 * application-specific resources.
 *
 * @extends BaseContext
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @StageModelOnly
 * @crossplatform
 * @since 10
 */
export default class Context extends BaseContext {
    /**
     * Indicates the capability of accessing application resources.
     *
     * @type { resmgr.ResourceManager }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * Indicates the capability of accessing application resources.
     *
     * @type { resmgr.ResourceManager }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    resourceManager: resmgr.ResourceManager;
    /**
     * Indicates configuration information about an application.
     *
     * @type { ApplicationInfo }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * Indicates configuration information about an application.
     *
     * @type { ApplicationInfo }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    applicationInfo: ApplicationInfo;
    /**
     * Indicates app cache dir.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * Indicates app cache dir.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    cacheDir: string;
    /**
     * Indicates app temp dir.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * Indicates app temp dir.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    tempDir: string;
    /**
     * Indicates app files dir.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * Indicates app files dir.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    filesDir: string;
    /**
     * Indicates app database dir.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * Indicates app database dir.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    databaseDir: string;
    /**
     * Indicates app preferences dir.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * Indicates app preferences dir.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    preferencesDir: string;
    /**
     * Indicates app bundle code dir.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * Indicates app bundle code dir.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    bundleCodeDir: string;
    /**
     * Indicates app distributed files dir.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    distributedFilesDir: string;
    /**
     * Indicates event hub.
     *
     * @type { EventHub }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    eventHub: EventHub;
    /**
     * Indicates file area.
     *
     * @type { contextConstant.AreaMode }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    area: contextConstant.AreaMode;
    /**
     * Create a module context
     *
     * @param { string } moduleName - Indicates the module name.
     * @returns { Context } Returns the application context.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * Create a module context
     *
     * @param { string } moduleName - Indicates the module name.
     * @returns { Context } Returns the application context.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    createModuleContext(moduleName: string): Context;
    /**
     * Get application context
     *
     * @returns { ApplicationContext } Returns the application context.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * Get application context
     *
     * @returns { ApplicationContext } Returns the application context.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    getApplicationContext(): ApplicationContext;
    /**
     * Get group dir by the groupId.
     *
     * @param { string } dataGroupID - Indicates the groupId.
     * @param { AsyncCallback<string> } callback - The callback of getGroupDir.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @throws { BusinessError } 16000011 - The context does not exist.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 10
     */
    getGroupDir(dataGroupID: string, callback: AsyncCallback<string>): void;
    /**
     * Get group dir by the groupId.
     *
     * @param { string } dataGroupID - Indicates the groupId.
     * @returns { Promise<string> } The promise returned by the function.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @throws { BusinessError } 16000011 - The context does not exist.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 10
     */
    getGroupDir(dataGroupID: string): Promise<string>;
}
