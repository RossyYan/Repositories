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
 * Want is the basic communication component of the system.
 *
 * @syscap SystemCapability.Ability.AbilityBase
 * @since 9
 */
/**
 * Want is the basic communication component of the system.
 *
 * @syscap SystemCapability.Ability.AbilityBase
 * @crossplatform
 * @since 10
 */
export default class Want {
    /**
     * bundle name
     *
     * @type { ?string }
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    /**
     * bundle name
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @crossplatform
     * @since 10
     */
    bundleName?: string;
    /**
     * ability name
     *
     * @type { ?string }
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    /**
     * ability name
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @crossplatform
     * @since 10
     */
    abilityName?: string;
    /**
     * device id
     *
     * @type { ?string }
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    deviceId?: string;
    /**
     * The description of a URI in a Want.
     *
     * @type { ?string }
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    uri?: string;
    /**
     * The description of the type in this Want.
     *
     * @type { ?string }
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    type?: string;
    /**
     * The options of the flags in this Want.
     *
     * @type { ?number }
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    flags?: number;
    /**
     * The description of an action in an want.
     *
     * @type { ?string }
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    action?: string;
    /**
     * The description of the WantParams object in an Want
     *
     * @type { ?object }
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    /**
     * The description of the WantParams object in an Want
     *
     * @type { ?object }
     * @syscap SystemCapability.Ability.AbilityBase
     * @crossplatform
     * @since 10
     */
    parameters?: {
        [key: string]: Object;
    };
    /**
     * The description of a entities in a Want.
     *
     * @type { ?Array<string> }
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    entities?: Array<string>;
    /**
     * The description of an module name in an want.
     *
     * @type { ?string }
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    /**
     * The description of an module name in an want.
     *
     * @syscap SystemCapability.Ability.AbilityBase
     * @crossplatform
     * @since 10
     */
    moduleName?: string;
}
