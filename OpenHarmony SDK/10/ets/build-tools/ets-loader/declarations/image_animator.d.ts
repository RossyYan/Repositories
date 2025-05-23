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
 * Defines the ImageAnimator Interface.
 *
 * @interface ImageAnimatorInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the ImageAnimator Interface.
 *
 * @interface ImageAnimatorInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
interface ImageAnimatorInterface {
    /**
     * ImageAnimator is returned.
     *
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * ImageAnimator is returned.
     *
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    (): ImageAnimatorAttribute;
}
/**
 * Defines the ImageFrameInfo Interface.
 *
 * @interface ImageFrameInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the ImageFrameInfo Interface.
 *
 * @interface ImageFrameInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
interface ImageFrameInfo {
    /**
     * Image path
     *
     * @type { string | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Image path
     *
     * @type { string | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Image path
     *
     * @type { string | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    src: string | Resource;
    /**
     * Image width
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Image width
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    width?: number | string;
    /**
     * Image height
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Image height
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    height?: number | string;
    /**
     * Vertical coordinate of the image relative to the upper left corner of the component
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Vertical coordinate of the image relative to the upper left corner of the component
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    top?: number | string;
    /**
     * Horizontal coordinate of the image relative to the upper left corner of the component
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Horizontal coordinate of the image relative to the upper left corner of the component
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    left?: number | string;
    /**
     * Playback duration of this image frame, in milliseconds.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Playback duration of this image frame, in milliseconds.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    duration?: number;
}
/**
 * inheritance CommonMethod
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * inheritance CommonMethod
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare class ImageAnimatorAttribute extends CommonMethod<ImageAnimatorAttribute> {
    /**
     * list images
     *
     * @param { Array<ImageFrameInfo> } value
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * list images
     *
     * @param { Array<ImageFrameInfo> } value
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    images(value: Array<ImageFrameInfo>): ImageAnimatorAttribute;
    /**
     * The default value is the initial state, which is used to control the playback status.
     *
     * @param { AnimationStatus } value
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * The default value is the initial state, which is used to control the playback status.
     *
     * @param { AnimationStatus } value
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    state(value: AnimationStatus): ImageAnimatorAttribute;
    /**
     * The unit is millisecond.
     *
     * @param { number } value
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * The unit is millisecond.
     *
     * @param { number } value
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    duration(value: number): ImageAnimatorAttribute;
    /**
     * Set the playback sequence.
     *
     * @param { boolean } value
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Set the playback sequence.
     *
     * @param { boolean } value
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    reverse(value: boolean): ImageAnimatorAttribute;
    /**
     * Sets whether the image size is fixed to the component size.
     *
     * @param { boolean } value
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Sets whether the image size is fixed to the component size.
     *
     * @param { boolean } value
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    fixedSize(value: boolean): ImageAnimatorAttribute;
    /**
     * Indicates whether to enable pre-decoding.
     *
     * @param { number } value
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     * @deprecated since 9
     */
    preDecode(value: number): ImageAnimatorAttribute;
    /**
     * Sets the state before and after the animation starts
     *
     * @param { FillMode } value
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Sets the state before and after the animation starts
     *
     * @param { FillMode } value
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    fillMode(value: FillMode): ImageAnimatorAttribute;
    /**
     * Played once by default
     *
     * @param { number } value
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Played once by default
     *
     * @param { number } value
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    iterations(value: number): ImageAnimatorAttribute;
    /**
     * Status callback, which is triggered when the animation starts to play.
     *
     * @param { function } event
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Status callback, which is triggered when the animation starts to play.
     *
     * @param { function } event
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    onStart(event: () => void): ImageAnimatorAttribute;
    /**
     * Status callback, which is triggered when the animation pauses.
     *
     * @param { function } event
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Status callback, which is triggered when the animation pauses.
     *
     * @param { function } event
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    onPause(event: () => void): ImageAnimatorAttribute;
    /**
     * Status callback, triggered when the animation is replayed
     *
     * @param { function } event
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Status callback, triggered when the animation is replayed
     *
     * @param { function } event
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    onRepeat(event: () => void): ImageAnimatorAttribute;
    /**
     * Status callback, which is triggered when the animation is canceled.
     *
     * @param { function } event
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Status callback, which is triggered when the animation is canceled.
     *
     * @param { function } event
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    onCancel(event: () => void): ImageAnimatorAttribute;
    /**
     * Status callback, which is triggered when the animation playback is complete.
     *
     * @param { function } event
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Status callback, which is triggered when the animation playback is complete.
     *
     * @param { function } event
     * @returns { ImageAnimatorAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    onFinish(event: () => void): ImageAnimatorAttribute;
}
/**
 * Defines ImageAnimator Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines ImageAnimator Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare const ImageAnimator: ImageAnimatorInterface;
/**
 * Defines ImageAnimator Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines ImageAnimator Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare const ImageAnimatorInstance: ImageAnimatorAttribute;
