/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * The definition of AbilityConstant.
 *
 * @namespace AbilityConstant
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @StageModelOnly
 * @since 9
 */
/**
 * The definition of AbilityConstant.
 *
 * @namespace AbilityConstant
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @StageModelOnly
 * @crossplatform
 * @since 10
 */
declare namespace AbilityConstant {
    /**
     * Interface of launch param.
     *
     * @typedef LaunchParam
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * Interface of launch param.
     *
     * @typedef LaunchParam
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    export interface LaunchParam {
        /**
         * Indicates launch reason.
         *
         * @type { LaunchReason }
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @StageModelOnly
         * @since 9
         */
        /**
         * Indicates launch reason.
         *
         * @type { LaunchReason }
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @StageModelOnly
         * @crossplatform
         * @since 10
         */
        launchReason: LaunchReason;
        /**
         * Indicates last exit reason.
         *
         * @type { LastExitReason }
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @StageModelOnly
         * @since 9
         */
        /**
         * Indicates last exit reason.
         *
         * @type { LastExitReason }
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @StageModelOnly
         * @crossplatform
         * @since 10
         */
        lastExitReason: LastExitReason;
    }
    /**
     * Type of launch reason.
     *
     * @enum { number }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * Type of launch reason.
     *
     * @enum { number }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    export enum LaunchReason {
        /**
         * Unknown reason.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @StageModelOnly
         * @since 9
         */
        /**
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @StageModelOnly
         * @crossplatform
         * @since 10
         */
        UNKNOWN = 0,
        /**
         * Start ability through the startAbility interface.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @StageModelOnly
         * @since 9
         */
        START_ABILITY = 1,
        /**
         * Start ability through the startAbilityByCall interface.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @StageModelOnly
         * @since 9
         */
        CALL = 2,
        /**
         * Start ability through cross-end device migration.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @StageModelOnly
         * @since 9
         */
        CONTINUATION = 3,
        /**
         * After the application is restored, the ability is automatically restored and started when the application fails.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @StageModelOnly
         * @since 9
         */
        APP_RECOVERY = 4,
        /**
         * Start ability through the acquireShareData interface.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @StageModelOnly
         * @since 10
         */
        SHARE = 5
    }
    /**
     * Type of last exit reason.
     *
     * @enum { number }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * Type of last exit reason.
     *
     * @enum { number }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    export enum LastExitReason {
        /**
         * Exit reason : Unknown. The reason for the last exit of the target application is not recorded in the application
         *               framework.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @StageModelOnly
         * @since 9
         */
        /**
         * Exit reason : Unknown. The reason for the last exit of the target application is not recorded in the application
         *               framework.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @StageModelOnly
         * @crossplatform
         * @since 10
         */
        UNKNOWN = 0,
        /**
         * Exit reason : Ability is not responding.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @StageModelOnly
         * @since 9
         * @deprecated since 10
         * @useinstead AbilityConstant.LastExitReason#APP_FREEZE
         */
        ABILITY_NOT_RESPONDING = 1,
        /**
         * Exit reason : normally. App exit due to user active close.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @StageModelOnly
         * @since 9
         */
        NORMAL = 2,
        /**
         * Exit reason : cpp crash. The app exit due to native exception signal.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @StageModelOnly
         * @since 10
         */
        CPP_CRASH = 3,
        /**
         * Exit reason : js error. App exit due to js error.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @StageModelOnly
         * @since 10
         */
        JS_ERROR = 4,
        /**
         * Exit reason : app freeze. App exit due to appFreeze error.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @StageModelOnly
         * @since 10
         */
        APP_FREEZE = 5,
        /**
         * Exit reason : performance control. App exit due to system performance issues, such as device low memory.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @StageModelOnly
         * @since 10
         */
        PERFORMANCE_CONTROL = 6,
        /**
         * Exit reason : resource control. App exit due to resource usage violation, such as exceed cpu/io/memory usage.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @StageModelOnly
         * @since 10
         */
        RESOURCE_CONTROL = 7,
        /**
         * Exit reason : upgrade. App exit due to upgrade.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @StageModelOnly
         * @since 10
         */
        UPGRADE = 8
    }
    /**
     * Type of onContinue result.
     *
     * @enum { number }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    export enum OnContinueResult {
        /**
         * Agree to the result of Ability migration.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @StageModelOnly
         * @since 9
         */
        AGREE = 0,
        /**
         * Reject to the result of Ability migration.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @StageModelOnly
         * @since 9
         */
        REJECT = 1,
        /**
         * Mismatch to the result of Ability migration.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @StageModelOnly
         * @since 9
         */
        MISMATCH = 2
    }
    /**
     * Type of memory level.
     *
     * @enum { number }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    export enum MemoryLevel {
        /**
         * Memory footprint is moderate.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @StageModelOnly
         * @since 9
         */
        MEMORY_LEVEL_MODERATE = 0,
        /**
         * Low memory footprint.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @StageModelOnly
         * @since 9
         */
        MEMORY_LEVEL_LOW = 1,
        /**
         * High memory footprint.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @StageModelOnly
         * @since 9
         */
        MEMORY_LEVEL_CRITICAL = 2
    }
    /**
     * Type of onSave result.
     *
     * @enum { number }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    export enum OnSaveResult {
        /**
         * Always agree to save the state.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @StageModelOnly
         * @since 9
         */
        ALL_AGREE = 0,
        /**
         * Refuse to migrate the saved state.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @StageModelOnly
         * @since 9
         */
        CONTINUATION_REJECT = 1,
        /**
         * Migration mismatch.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @StageModelOnly
         * @since 9
         */
        CONTINUATION_MISMATCH = 2,
        /**
         * Agree to restore the saved state.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @StageModelOnly
         * @since 9
         */
        RECOVERY_AGREE = 3,
        /**
         * Refuse to restore the saved state.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @StageModelOnly
         * @since 9
         */
        RECOVERY_REJECT = 4,
        /**
         * Always refuses to save the state.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @StageModelOnly
         * @since 9
         */
        ALL_REJECT
    }
    /**
     * Type of save state.
     *
     * @enum { number }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    export enum StateType {
        /**
         * Migrate and save the state.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @StageModelOnly
         * @since 9
         */
        CONTINUATION = 0,
        /**
         * App recovery to restore the saved state.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @StageModelOnly
         * @since 9
         */
        APP_RECOVERY = 1
    }
    /**
     * Continue state.
     *
     * @enum { number }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 10
     */
    export enum ContinueState {
        /**
         * Mission continuable active.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @StageModelOnly
         * @since 10
         */
        ACTIVE = 0,
        /**
         * Mission continuable inactive.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @StageModelOnly
         * @since 10
         */
        INACTIVE = 1
    }
}
export default AbilityConstant;