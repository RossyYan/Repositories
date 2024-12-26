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
 * Sets the initial state of the slidable panel.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Sets the initial state of the slidable panel.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare enum PanelMode {
    /**
     * Minimum state.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Minimum state.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    Mini,
    /**
     * SHalf-screen-like status
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * SHalf-screen-like status
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    Half,
    /**
     * Class Full Screen Status.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Class Full Screen Status.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    Full
}
/**
 * Sets the type of sliding panel.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Sets the type of sliding panel.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare enum PanelType {
    /**
     * The switch between the minibar and full-screen display is provided.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * The switch between the minibar and full-screen display is provided.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    Minibar = 0,
    /**
     * Permanent content display class.
     * The switchover effect is provided in three sizes: large (full-screen), medium (half-screen), and small.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Permanent content display class.
     * The switchover effect is provided in three sizes: large (full-screen), medium (half-screen), and small.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    Foldable = 1,
    /**
     * Temporary content display area.
     * The switchover effect is provided in three sizes: large (full-screen), medium (half-screen), and small.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Temporary content display area.
     * The switchover effect is provided in three sizes: large (full-screen), medium (half-screen), and small.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    Temporary = 2,
    /**
     * Custom content display area.
     * The switchover effect is provided in three sizes: large (full-screen), medium (half-screen), and small.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    CUSTOM = 3
}
/**
 * Enum for custom content display area.
 *
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare enum PanelHeight {
    /**
     * The Panel adapts to the content height.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    WRAP_CONTENT = 'wrapContent'
}
/**
 * Provides a sliding panel interface.
 *
 * @interface PanelInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Provides a sliding panel interface.
 *
 * @interface PanelInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
interface PanelInterface {
    /**
     * Called when the panel slidable panel pops up.
     *
     * @param { boolean } show
     * @returns { PanelAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the panel slidable panel pops up.
     *
     * @param { boolean } show
     * @returns { PanelAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    (show: boolean): PanelAttribute;
}
/**
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Pane Attribute.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare class PanelAttribute extends CommonMethod<PanelAttribute> {
    /**
     * Called when the initial state of the slidable panel is set.
     *
     * @param { PanelMode } value
     * @returns { PanelAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the initial state of the slidable panel is set.
     *
     * @param { PanelMode } value
     * @returns { PanelAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    mode(value: PanelMode): PanelAttribute;
    /**
     * Called when the slidable panel type is set.
     *
     * @param { PanelType } value
     * @returns { PanelAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the slidable panel type is set.
     *
     * @param { PanelType } value
     * @returns { PanelAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    type(value: PanelType): PanelAttribute;
    /**
     * Called when determining whether dragbar exists.
     *
     * @param { boolean } value
     * @returns { PanelAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when determining whether dragbar exists.
     *
     * @param { boolean } value
     * @returns { PanelAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    dragBar(value: boolean): PanelAttribute;
    /**
     * Sets the height. It is valid only when PanelType is set to Custom.
     * @param {Dimension | PanelHeight} value - value - Content height to set.
     * @returns { PanelAttribute } Returns the component attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    customHeight(value: Dimension | PanelHeight): PanelAttribute;
    /**
     * Called when the height in the full state is specified.
     *
     * @param { number | string } value
     * @returns { PanelAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the height in the full state is specified.
     *
     * @param { number | string } value
     * @returns { PanelAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    fullHeight(value: number | string): PanelAttribute;
    /**
     * Called when the height in the half state is specified.
     *
     * @param { number | string } value
     * @returns { PanelAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the height in the half state is specified.
     *
     * @param { number | string } value
     * @returns { PanelAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    halfHeight(value: number | string): PanelAttribute;
    /**
     * Called when the height in the mini state is specified.
     *
     * @param { number | string } value
     * @returns { PanelAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the height in the mini state is specified.
     *
     * @param { number | string } value
     * @returns { PanelAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    miniHeight(value: number | string): PanelAttribute;
    /**
     * Called when the panel slidable panel pops up.
     *
     * @param { boolean } value
     * @returns { PanelAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the panel slidable panel pops up.
     *
     * @param { boolean } value
     * @returns { PanelAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    show(value: boolean): PanelAttribute;
    /**
     * Called when the panel background mask is requested.
     *
     * @param { ResourceColor } color
     * @returns { PanelAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Called when the panel background mask is requested.
     *
     * @param { ResourceColor } color
     * @returns { PanelAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    backgroundMask(color: ResourceColor): PanelAttribute;
    /**
     * Called when the panel show close icon.
     *
     * @param { boolean } value - used to set whether to display the close icon.
     * @returns { PanelAttribute } return the component attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    showCloseIcon(value: boolean): PanelAttribute;
    /**
     * Called when the state of the slidable panel changes.
     *
     * @param { function } event
     * @returns { PanelAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the state of the slidable panel changes.
     *
     * @param { function } event
     * @returns { PanelAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    onChange(event: (
    /**
     * Width of content area.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    width: number, 
    /**
     * Height of content area.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    height: number, 
    /**
     * Initial state.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    mode: PanelMode) => void): PanelAttribute;
    /**
     * Called when height of the panel is changed
     *
     * @param { function } callback
     * @returns { PanelAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Called when height of the panel is changed
     *
     * @param { function } callback
     * @returns { PanelAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    onHeightChange(callback: (value: number) => void): PanelAttribute;
}
/**
 * Defines Panel Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Panel Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare const Panel: PanelInterface;
/**
 * Defines Panel Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Panel Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare const PanelInstance: PanelAttribute;
