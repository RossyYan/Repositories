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
 * Declare sliderstyle
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Declare sliderstyle
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Declare sliderstyle
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare enum SliderStyle {
    /**
     * The slider is on the slide rail.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * The slider is on the slide rail.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     * @form
     */
    /**
     * The slider is on the slide rail.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    OutSet,
    /**
     * The slider is in the slide rail.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * The slider is in the slide rail.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     * @form
     */
    /**
     * The slider is in the slide rail.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    InSet
}
/**
 * Declare SliderChangeMode
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Declare SliderChangeMode
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Declare SliderChangeMode
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare enum SliderChangeMode {
    /**
     * Start dragging the slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Start dragging the slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     * @form
     */
    /**
     * Start dragging the slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    Begin,
    /**
     * Drag the slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Drag the slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     * @form
     */
    /**
     * Drag the slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    Moving,
    /**
     * End dragging the slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * End dragging the slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     * @form
     */
    /**
     * End dragging the slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    End,
    /**
     * Click the slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Click the slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     * @form
     */
    /**
     * Click the slider.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    Click
}
/**
 * Defines the options of Slider.
 *
 * @interface SliderOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the options of Slider.
 *
 * @interface SliderOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Defines the options of Slider.
 *
 * @interface SliderOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare interface SliderOptions {
    /**
     * Current value of Slider.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Current value of Slider.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     * @form
     */
    /**
     * Current value of Slider.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    value?: number;
    /**
     * Sets the min value of Slider.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Sets the min value of Slider.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     * @form
     */
    /**
     * Sets the min value of Slider.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    min?: number;
    /**
     * Sets the max value of Slider.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Sets the max value of Slider.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     * @form
     */
    /**
     * Sets the max value of Slider.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    max?: number;
    /**
     * Sets the step of each slide value.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Sets the step of each slide value.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     * @form
     */
    /**
     * Sets the step of each slide value.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    step?: number;
    /**
     * Sets the slider style.
     *
     * @type { ?SliderStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Sets the slider style.
     *
     * @type { ?SliderStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     * @form
     */
    /**
     * Sets the slider style.
     *
     * @type { ?SliderStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    style?: SliderStyle;
    /**
     * Sets the slider direction style.
     *
     * @type { ?Axis }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Sets the slider direction style.
     *
     * @type { ?Axis }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     * @form
     */
    /**
     * Sets the slider direction style.
     *
     * @type { ?Axis }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    direction?: Axis;
    /**
     * Set whether the direction of the slider needs to be reversed.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Set whether the direction of the slider needs to be reversed.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     * @form
     */
    /**
     * Set whether the direction of the slider needs to be reversed.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    reverse?: boolean;
}
/**
 * Declare SliderBlockType
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare enum SliderBlockType {
    /**
     * Use the default block.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    DEFAULT,
    /**
     * Use an image as the slider block.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    IMAGE,
    /**
     * Use a shape as the slider block.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    SHAPE
}
/**
 * Defines the style of slider block.
 *
 * @interface SliderBlockStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare interface SliderBlockStyle {
    /**
     * Sets the type of slider block.
     *
     * @type { SliderBlockType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    type: SliderBlockType;
    /**
     * Sets the image of slider block while the type is set to SliderBlockType.Image.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    image?: ResourceStr;
    /**
     * Sets the shape of slider block while the type is set to SliderBlockType.Shape.
     *
     * @type { ?(CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    shape?: CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute;
}
/**
 * Provides an interface for the slide bar component.
 *
 * @interface SliderInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Provides an interface for the slide bar component.
 *
 * @interface SliderInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Provides an interface for the slide bar component.
 *
 * @interface SliderInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
interface SliderInterface {
    /**
     * Called when the slider bar component is used.
     *
     * @param { SliderOptions } options
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the slider bar component is used.
     *
     * @param { SliderOptions } options
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     * @form
     */
    /**
     * Called when the slider bar component is used.
     *
     * @param { SliderOptions } options
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    (options?: SliderOptions): SliderAttribute;
}
/**
 * Defines the attribute functions of Slider.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the attribute functions of Slider.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Defines the attribute functions of Slider.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare class SliderAttribute extends CommonMethod<SliderAttribute> {
    /**
     * Called when the slider color of the slider bar is set.
     *
     * @param { ResourceColor } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the slider color of the slider bar is set.
     *
     * @param { ResourceColor } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     * @form
     */
    /**
     * Called when the slider color of the slider bar is set.
     *
     * @param { ResourceColor } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    blockColor(value: ResourceColor): SliderAttribute;
    /**
     * Called when the track color of the slider is set.
     *
     * @param { ResourceColor } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the track color of the slider is set.
     *
     * @param { ResourceColor } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     * @form
     */
    /**
     * Called when the track color of the slider is set.
     *
     * @param { ResourceColor } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    trackColor(value: ResourceColor): SliderAttribute;
    /**
     * Called when the slider of the slider bar is set to slide over the area color.
     *
     * @param { ResourceColor } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the slider of the slider bar is set to slide over the area color.
     *
     * @param { ResourceColor } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     * @form
     */
    /**
     * Called when the slider of the slider bar is set to slide over the area color.
     *
     * @param { ResourceColor } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    selectedColor(value: ResourceColor): SliderAttribute;
    /**
     * Called when the minimum label is set.
     *
     * @param { string } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     * @deprecated since 9
     * @useinstead min
     */
    minLabel(value: string): SliderAttribute;
    /**
     * Called when the maximum label is set.
     *
     * @param { string } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     * @deprecated since 9
     * @useinstead max
     */
    maxLabel(value: string): SliderAttribute;
    /**
     * Called when setting whether to display step size.
     *
     * @param { boolean } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when setting whether to display step size.
     *
     * @param { boolean } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     * @form
     */
    /**
     * Called when setting whether to display step size.
     *
     * @param { boolean } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    showSteps(value: boolean): SliderAttribute;
    /**
     * Called when the percentage of bubble prompt is set when sliding.
     *
     * @param { boolean } value
     * @param { ResourceStr } content
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the percentage of bubble prompt is set when sliding.
     *
     * @param { boolean } value
     * @param { ResourceStr } content
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     * @form
     */
    /**
     * Called when the percentage of bubble prompt is set when sliding.
     *
     * @param { boolean } value - Whether to display the bubble.
     * @param { ResourceStr } content - Text content in the bubble. If the content is not specified, the current
     *                                  percentage is displayed by default.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    showTips(value: boolean, content?: ResourceStr): SliderAttribute;
    /**
     * Called when the thickness of track is set.
     *
     * @param { Length } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Called when the thickness of track is set.
     *
     * @param { Length } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     * @form
     */
    /**
     * Called when the thickness of track is set.
     *
     * @param { Length } value
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    trackThickness(value: Length): SliderAttribute;
    /**
     * Called when the selection value changes.
     *
     * @param { function } callback
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the selection value changes.
     *
     * @param { function } callback
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     * @form
     */
    /**
     * Called when the selection value changes.
     *
     * @param { function } callback
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     * @form
     */
    onChange(callback: (value: number, mode: SliderChangeMode) => void): SliderAttribute;
    /**
     * Called when the border color of block is set.
     *
     * @param { ResourceColor } value - the border color of block.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    blockBorderColor(value: ResourceColor): SliderAttribute;
    /**
     * Called when the border width of block is set.
     *
     * @param { Length } value - the border width of block.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    blockBorderWidth(value: Length): SliderAttribute;
    /**
     * Called when the color of step is set.
     *
     * @param { ResourceColor } value - the color of step.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    stepColor(value: ResourceColor): SliderAttribute;
    /**
     * Called when the radius of track border is set.
     *
     * @param { Length } value - the radius of track border.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    trackBorderRadius(value: Length): SliderAttribute;
    /**
     * Called when the size of block is set.
     *
     * @param { SizeOptions } value - the size of block.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    blockSize(value: SizeOptions): SliderAttribute;
    /**
     * Called when the style of block is set.
     *
     * @param { SliderBlockStyle } value - the style of block.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    blockStyle(value: SliderBlockStyle): SliderAttribute;
    /**
     * Called when the diameter of step is set.
     *
     * @param { Length } value - the diameter of step.
     * @returns { SliderAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    stepSize(value: Length): SliderAttribute;
}
/**
 * Defines Slider Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Slider Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Defines Slider Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare const Slider: SliderInterface;
/**
 * Defines Slider Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Slider Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Defines Slider Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare const SliderInstance: SliderAttribute;
