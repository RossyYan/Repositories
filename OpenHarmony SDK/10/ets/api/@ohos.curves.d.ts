/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Contains interpolator functions such as initialization, third-order Bezier curves, and spring curves.
 *
 * @namespace curves
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Contains interpolator functions such as initialization, third-order Bezier curves, and spring curves.
 *
 * @namespace curves
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare namespace curves {
    /**
     * enum Curve.
     *
     * @enum { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * enum Curve.
     *
     * @enum { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    enum Curve {
        Linear,
        Ease,
        EaseIn,
        EaseOut,
        EaseInOut,
        FastOutSlowIn,
        LinearOutSlowIn,
        FastOutLinearIn,
        ExtremeDeceleration,
        Sharp,
        Rhythm,
        Smooth,
        Friction
    }
    /**
     * Interface for curve object.
     *
     * @typedef ICurve
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Interface for curve object.
     *
     * @typedef ICurve
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    interface ICurve {
        /**
         * Get curve value by fraction.
         *
         * @param { number } fraction
         * @returns { number }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 9
         */
        /**
         * Get curve value by fraction.
         *
         * @param { number } fraction
         * @returns { number }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @since 10
         */
        interpolate(fraction: number): number;
    }
    /**
     * Initializes the interpolator curve when called.
     *
     * @param { Curve } [curve]
     * @returns { ICurve }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Initializes the interpolator curve when called.
     *
     * @param { Curve } [curve]
     * @returns { ICurve }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    function initCurve(curve?: Curve): ICurve;
    /**
     * Initializes the interpolator curve when called.
     *
     * @param { Curve } [curve]
     * @returns { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     * @deprecated since 9
     * @useinstead initCurve
     */
    function init(curve?: Curve): string;
    /**
     * Constructs a step curve when called.
     *
     * @param { number } count
     * @param { boolean } end
     * @returns { ICurve }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Constructs a step curve when called.
     *
     * @param { number } count
     * @param { boolean } end
     * @returns { ICurve }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    function stepsCurve(count: number, end: boolean): ICurve;
    /**
     * Constructs a custom curve when called.
     *
     * @param { function } interpolate - fraction range is [0,1], the return number must between [0,1].
     * @returns { ICurve }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    function customCurve(interpolate: (fraction: number) => number): ICurve;
    /**
     * Constructs a step curve when called.
     *
     * @param { number } count
     * @param { boolean } end
     * @returns { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     * @deprecated since 9
     * @useinstead stepsCurve
     */
    function steps(count: number, end: boolean): string;
    /**
     * Constructs a third-order Bezier curve when called.
     *
     * @param { number } x1
     * @param { number } y1
     * @param { number } x2
     * @param { number } y2
     * @returns { ICurve }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Constructs a third-order Bezier curve when called.
     *
     * @param { number } x1
     * @param { number } y1
     * @param { number } x2
     * @param { number } y2
     * @returns { ICurve }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    function cubicBezierCurve(x1: number, y1: number, x2: number, y2: number): ICurve;
    /**
     * Constructs a third-order Bezier curve when called.
     *
     * @param { number } x1
     * @param { number } y1
     * @param { number } x2
     * @param { number } y2
     * @returns { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     * @deprecated since 9
     * @useinstead cubicBezierCurve
     */
    function cubicBezier(x1: number, y1: number, x2: number, y2: number): string;
    /**
     * Constructs a spring curve when called.
     *
     * @param { number } velocity
     * @param { number } mass
     * @param { number } stiffness
     * @param { number } damping
     * @returns { ICurve }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Constructs a spring curve when called.
     *
     * @param { number } velocity
     * @param { number } mass
     * @param { number } stiffness
     * @param { number } damping
     * @returns { ICurve }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    function springCurve(velocity: number, mass: number, stiffness: number, damping: number): ICurve;
    /**
     * Constructs a spring curve when called.
     *
     * @param { number } velocity
     * @param { number } mass
     * @param { number } stiffness
     * @param { number } damping
     * @returns { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     * @deprecated since 9
     * @useinstead springCurve
     */
    function spring(velocity: number, mass: number, stiffness: number, damping: number): string;
    /**
     * Constructs a spring motion when called.
     *
     * @param { number } [response]
     * @param { number } [dampingFraction]
     * @param { number } [overlapDuration]
     * @returns { ICurve }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Constructs a spring motion when called.
     *
     * @param { number } [response]
     * @param { number } [dampingFraction]
     * @param { number } [overlapDuration]
     * @returns { ICurve }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    function springMotion(response?: number, dampingFraction?: number, overlapDuration?: number): ICurve;
    /**
     * Constructs a responsive spring motion when called.
     *
     * @param { number } [response]
     * @param { number } [dampingFraction]
     * @param { number } [overlapDuration]
     * @returns { ICurve }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Constructs a responsive spring motion when called.
     *
     * @param { number } [response]
     * @param { number } [dampingFraction]
     * @param { number } [overlapDuration]
     * @returns { ICurve }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    function responsiveSpringMotion(response?: number, dampingFraction?: number, overlapDuration?: number): ICurve;
    /**
     * Constructs an interpolating spring curve when called, the animation duration can not be specified manually,
     * and is determined by parameters of the curve. It produces values change from 0 to 1, and then uses interpolator
     * to calculate the actual animation values.
     *
     * @param { number } velocity - the initial velocity of the spring, and is a normalized speed corresponding to the value changes from 0 to 1
     * @param { number } mass - the mass of object in the mass-damper-spring system
     * @param { number } stiffness - the stiffness of spring
     * @param { number } damping - the damping value of spring
     * @returns { ICurve }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    function interpolatingSpring(velocity: number, mass: number, stiffness: number, damping: number): ICurve;
}
export default curves;
