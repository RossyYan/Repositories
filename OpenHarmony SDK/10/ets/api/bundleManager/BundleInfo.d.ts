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
import { ApplicationInfo } from './ApplicationInfo';
import { HapModuleInfo } from './HapModuleInfo';
import bundleManager from './../@ohos.bundle.bundleManager';
/**
 * Obtains configuration information about a bundle
 *
 * @typedef BundleInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 9
 */
export interface BundleInfo {
    /**
     * Indicates the name of this bundle
     *
     * @type { string }
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    readonly name: string;
    /**
     * Indicates the bundle vendor
     *
     * @type { string }
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    readonly vendor: string;
    /**
     * Indicates the version code of the bundle
     *
     * @type { number }
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    readonly versionCode: number;
    /**
     * Indicates the version name of the bundle
     *
     * @type { string }
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    readonly versionName: string;
    /**
     * Indicates the **minimum ** version compatible with the bundle
     *
     * @type { number }
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    readonly minCompatibleVersionCode: number;
    /**
     * Indicates the target version number of the bundle
     *
     * @type { number }
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    readonly targetVersion: number;
    /**
     * Obtains configuration information about an application
     *
     * @type { ApplicationInfo }
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    readonly appInfo: ApplicationInfo;
    /**
     * Obtains configuration information about a module
     *
     * @type { Array<HapModuleInfo> }
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    readonly hapModulesInfo: Array<HapModuleInfo>;
    /**
     * Indicates the required permissions details defined in the bundle
     *
     * @type { Array<ReqPermissionDetail> }
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    readonly reqPermissionDetails: Array<ReqPermissionDetail>;
    /**
     * Indicates the grant state of required permissions
     *
     * @type { Array<bundleManager.PermissionGrantState> }
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    readonly permissionGrantStates: Array<bundleManager.PermissionGrantState>;
    /**
     * Indicates the SignatureInfo of the bundle
     *
     * @type { SignatureInfo }
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    readonly signatureInfo: SignatureInfo;
    /**
     * Indicates the hap install time
     *
     * @type { number }
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    readonly installTime: number;
    /**
     * Indicates the hap update time
     *
     * @type { number }
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    readonly updateTime: number;
}
/**
 * Indicates the required permissions details defined in configuration file
 *
 * @typedef ReqPermissionDetail
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 9
 */
export interface ReqPermissionDetail {
    /**
     * Indicates the name of this required permissions
     *
     * @type { string }
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    name: string;
    /**
     * Indicates the module name which the request permission belongs
     *
     * @type { string }
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 10
     */
    moduleName: string;
    /**
     * Indicates the reason of this required permissions
     *
     * @type { string }
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    reason: string;
    /**
     * Indicates the reason id of this required permissions
     *
     * @type { number }
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    reasonId: number;
    /**
     * Indicates the used scene of this required permissions
     *
     * @type { UsedScene }
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    usedScene: UsedScene;
}
/**
 * The scene which is used
 *
 * @typedef UsedScene
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 9
 */
export interface UsedScene {
    /**
     * Indicates the abilities that need the permission
     *
     * @type { Array<string> }
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    abilities: Array<string>;
    /**
     * Indicates the time when the permission is used
     *
     * @type { string }
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    when: string;
}
/**
 * Indicates SignatureInfo
 *
 * @typedef SignatureInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 9
 */
export interface SignatureInfo {
    /**
     * Indicates the ID of the application to which this bundle belongs
     * The application ID uniquely identifies an application. It is determined by the bundle name and signature
     *
     * @type { string }
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    readonly appId: string;
    /**
     * Indicates the fingerprint of the certificate
     *
     * @type { string }
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    readonly fingerprint: string;
}
