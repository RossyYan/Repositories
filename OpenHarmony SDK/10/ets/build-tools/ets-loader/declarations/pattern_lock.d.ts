/*
  * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * Provides methods for control pattern lock component.
 *
 * @since 9
 */
/**
 * Provides methods for control pattern lock component.
 *
 * @crossplatform
 * @since 10
 */
declare class PatternLockController {
    /**
     * constructor.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * constructor.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    constructor();
    /**
     * Reset pattern lock.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Reset pattern lock.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    reset();
}
/**
 * Provides an interface for generating PatternLock.
 *
 * @interface PatternLockInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Provides an interface for generating PatternLock.
 *
 * @interface PatternLockInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
interface PatternLockInterface {
    (controller?: PatternLockController): PatternLockAttribute;
}
/**
 * Provides methods for attribute pattern lock component.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Provides methods for attribute pattern lock component.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare class PatternLockAttribute extends CommonMethod<PatternLockAttribute> {
    /**
     * The square side length of pattern lock component.
     *
     * @param { Length } value
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * The square side length of pattern lock component.
     *
     * @param { Length } value
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    sideLength(value: Length): PatternLockAttribute;
    /**
     * Circle radius.
     *
     * @param { Length } value
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Circle radius.
     *
     * @param { Length } value
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    circleRadius(value: Length): PatternLockAttribute;
    /**
     * The background color.
     *
     * @param { ResourceColor } value
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * The background color.
     *
     * @param { ResourceColor } value
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    backgroundColor(value: ResourceColor): PatternLockAttribute;
    /**
     * Regular color.
     *
     * @param { ResourceColor } value
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Regular color.
     *
     * @param { ResourceColor } value
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    regularColor(value: ResourceColor): PatternLockAttribute;
    /**
     * The color when cell is selected.
     *
     * @param { ResourceColor } value
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * The color when cell is selected.
     *
     * @param { ResourceColor } value
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    selectedColor(value: ResourceColor): PatternLockAttribute;
    /**
     * The color when cell is active state.
     *
     * @param { ResourceColor } value
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * The color when cell is active state.
     *
     * @param { ResourceColor } value
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    activeColor(value: ResourceColor): PatternLockAttribute;
    /**
     * The path line color.
     *
     * @param { ResourceColor } value
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * The path line color.
     *
     * @param { ResourceColor } value
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    pathColor(value: ResourceColor): PatternLockAttribute;
    /**
     * The path line stroke width.
     *
     * @param { number | string } value
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * The path line stroke width.
     *
     * @param { number | string } value
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    pathStrokeWidth(value: number | string): PatternLockAttribute;
    /**
     * Called when the pattern input completed.
     *
     * @param { function } callback
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Called when the pattern input completed.
     *
     * @param { function } callback
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    onPatternComplete(callback: (input: Array<number>) => void): PatternLockAttribute;
    /**
     * Called when judging whether the input state can be reset by touch pattern lock.
     *
     * @param { boolean } value
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Called when judging whether the input state can be reset by touch pattern lock.
     *
     * @param { boolean } value
     * @returns { PatternLockAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    autoReset(value: boolean): PatternLockAttribute;
}
/**
 * Defines PatternLock Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Defines PatternLock Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare const PatternLock: PatternLockInterface;
/**
 * Defines PatternLock Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Defines PatternLock Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare const PatternLockInstance: PatternLockAttribute;
