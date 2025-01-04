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

import * as _UIAbilityContext from './application/UIAbilityContext';
import type * as _UIExtensionContext from './application/UIExtensionContext';
import * as _AbilityStageContext from './application/AbilityStageContext';
import * as _ApplicationContext from './application/ApplicationContext';
import * as _BaseContext from './application/BaseContext';
import * as _Context from './application/Context';
import * as _ExtensionContext from './application/ExtensionContext';
import * as _FormExtensionContext from './application/FormExtensionContext';
import * as _ServiceExtensionContext from './application/ServiceExtensionContext';
import * as _EventHub from './application/EventHub';
import { PacMap as _PacMap } from './ability/dataAbilityHelper';
import { AbilityResult as _AbilityResult } from './ability/abilityResult';
import { ConnectOptions as _ConnectOptions } from './ability/connectOptions';

/**
 * This module provides application context classes and common data structures.
 *
 * @namespace common
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @StageModelOnly
 * @since 9
 */
/**
 * This module provides application context classes and common data structures.
 *
 * @namespace common
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @StageModelOnly
 * @crossplatform
 * @since 10
 */
declare namespace common {
  /**
   * The context of an ability. It allows access to ability-specific resources.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 9
   */
  /**
   * The context of an ability. It allows access to ability-specific resources.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @crossplatform
   * @since 10
   */
  export type UIAbilityContext = _UIAbilityContext.default;

  /**
   * The context of an abilityStage. It allows access to abilityStage-specific resources.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 9
   */
  /**
   * The context of an abilityStage. It allows access to abilityStage-specific resources.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @crossplatform
   * @since 10
   */
  export type AbilityStageContext = _AbilityStageContext.default;

  /**
   * The context of an application. It allows access to application-specific resources.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 9
   */
  /**
   * The context of an application. It allows access to application-specific resources.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @crossplatform
   * @since 10
   */
  export type ApplicationContext = _ApplicationContext.default;

  /**
   * The base context of 'app.Context' for FA Mode or 'application.Context' for Stage Mode.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 9
   */
  /**
   * The base context of 'app.Context' for FA Mode or 'application.Context' for Stage Mode.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @crossplatform
   * @since 10
   */
  export type BaseContext = _BaseContext.default;

  /**
   * The base context of an ability or an application. It allows access to
   * application-specific resources.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 9
   */
  /**
   * The base context of an ability or an application. It allows access to
   * application-specific resources.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @crossplatform
   * @since 10
   */
  export type Context = _Context.default;

  /**
   * The context of an extension. It allows access to extension-specific resources.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 9
   */
  export type ExtensionContext = _ExtensionContext.default;

  /**
   * The context of form extension. It allows access to
   * formExtension-specific resources.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 9
   */
  export type FormExtensionContext = _FormExtensionContext.default;

  /**
   * The context of service extension. It allows access to
   * serviceExtension-specific resources.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 9
   */
  export type ServiceExtensionContext = _ServiceExtensionContext.default;

  /**
   * The event center of a context, support the subscription and publication of events.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 9
   */
  export type EventHub = _EventHub.default;

  /**
   * Defines a PacMap object for storing a series of values.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 9
   */
  export type PacMap = _PacMap;

  /**
   * Indicates the result of startAbility.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 9
   */
  export type AbilityResult = _AbilityResult;

  /**
   * Indicates the callback of connection
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 9
   */
  export type ConnectOptions = _ConnectOptions;

  /**
   * The context of UI extension. It allows access to
   * UIExtension-specific resources.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 10
   */
  export type UIExtensionContext = _UIExtensionContext.default;
}

export default common;
