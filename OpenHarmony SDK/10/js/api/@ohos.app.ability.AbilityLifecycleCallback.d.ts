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
import UIAbility from './@ohos.app.ability.UIAbility';
import window from './@ohos.window';
/**
 * The ability lifecycle callback.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @StageModelOnly
 * @since 9
 */
/**
 * The ability lifecycle callback.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @StageModelOnly
 * @crossplatform
 * @since 10
 */
export default class AbilityLifecycleCallback {
    /**
     * Called back when an ability is started for initialization.
     *
     * @param { UIAbility } ability - Indicates the ability to register for listening.
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @StageModelOnly
     * @since 9
     */
    /**
     * Called back when an ability is started for initialization.
     *
     * @param { UIAbility } ability - Indicates the ability to register for listening.
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    onAbilityCreate(ability: UIAbility): void;
    /**
     * Called back when a window stage is created.
     *
     * @param { UIAbility } ability - Indicates the ability to register for listening.
     * @param { window.WindowStage } windowStage - window stage to create
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @StageModelOnly
     * @since 9
     */
    /**
     * Called back when a window stage is created.
     *
     * @param { UIAbility } ability - Indicates the ability to register for listening.
     * @param { window.WindowStage } windowStage - window stage to create
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    onWindowStageCreate(ability: UIAbility, windowStage: window.WindowStage): void;
    /**
     * Called back when a window stage is active.
     *
     * @param { UIAbility } ability - Indicates the ability to register for listening.
     * @param { window.WindowStage } windowStage - window stage to active
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @StageModelOnly
     * @since 9
     */
    onWindowStageActive(ability: UIAbility, windowStage: window.WindowStage): void;
    /**
     * Called back when a window stage is inactive.
     *
     * @param { UIAbility } ability - Indicates the ability to register for listening.
     * @param { window.WindowStage } windowStage - window stage to inactive
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @StageModelOnly
     * @since 9
     */
    onWindowStageInactive(ability: UIAbility, windowStage: window.WindowStage): void;
    /**
     * Called back when a window stage is destroyed.
     *
     * @param { UIAbility } ability - Indicates the ability to register for listening.
     * @param { window.WindowStage } windowStage - window stage to destroy
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @StageModelOnly
     * @since 9
     */
    /**
     * Called back when a window stage is destroyed.
     *
     * @param { UIAbility } ability - Indicates the ability to register for listening.
     * @param { window.WindowStage } windowStage - window stage to destroy
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    onWindowStageDestroy(ability: UIAbility, windowStage: window.WindowStage): void;
    /**
     * Called back when an ability is destroyed.
     *
     * @param { UIAbility } ability - Indicates the ability to register for listening.
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @StageModelOnly
     * @since 9
     */
    /**
     * Called back when an ability is destroyed.
     *
     * @param { UIAbility } ability - Indicates the ability to register for listening.
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    onAbilityDestroy(ability: UIAbility): void;
    /**
     * Called back when the state of an ability changes to foreground.
     *
     * @param { UIAbility } ability - Indicates the ability to register for listening.
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @StageModelOnly
     * @since 9
     */
    /**
     * Called back when the state of an ability changes to foreground.
     *
     * @param { UIAbility } ability - Indicates the ability to register for listening.
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    onAbilityForeground(ability: UIAbility): void;
    /**
     * Called back when the state of an ability changes to background.
     *
     * @param { UIAbility } ability - Indicates the ability to register for listening.
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @StageModelOnly
     * @since 9
     */
    /**
     * Called back when the state of an ability changes to background.
     *
     * @param { UIAbility } ability - Indicates the ability to register for listening.
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    onAbilityBackground(ability: UIAbility): void;
    /**
     * Called back when an ability prepares to continue.
     *
     * @param { UIAbility } ability - Indicates the ability to register for listening.
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @StageModelOnly
     * @since 9
     */
    onAbilityContinue(ability: UIAbility): void;
}
