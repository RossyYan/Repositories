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
 * Content scroll direction.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Content scroll direction.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare enum ScrollDirection {
    /**
     * Vertical scrolling is supported.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Vertical scrolling is supported.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    Vertical,
    /**
     * Horizontal scrolling is supported.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Horizontal scrolling is supported.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    Horizontal,
    /**
     * Free scrolling is supported.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     * @deprecated since 9
     */
    Free,
    /**
     * Non-scrollable.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Non-scrollable.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    None
}
/**
 * ScrollAlign.
 *
 * @enum { number } ScrollAlign
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare enum ScrollAlign {
    /**
     * Start position alignment.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    START,
    /**
     * Center alignment.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    CENTER,
    /**
     * End position alignment.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    END,
    /**
     * Scroll the minimum distance to fully display the specified item.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    AUTO
}
/**
 * @since 7
 */
/**
 * @crossplatform
 * @since 10
 */
declare class Scroller {
    /**
     * constructor.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
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
     * Called when the setting slides to the specified position.
     *
     * @param { object } value
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the setting slides to the specified position.
     *
     * @param { object } value
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    scrollTo(value: {
        /**
         * The X-axis offset.
         *
         * @type { number | string }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @since 10
         */
        xOffset: number | string;
        /**
         * The Y-axis offset.
         *
         * @type { number | string }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @since 10
         */
        yOffset: number | string;
        /**
         * Descriptive animation.
         *
         * @type { ?object } The object type provides custom animation parameters
         * and the boolean type enables default spring animation.
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @since 10
         */
        animation?: {
            duration?: number;
            curve?: Curve | ICurve;
        } | boolean;
    });
    /**
     * Called when scrolling to the edge of the container.
     *
     * @param { Edge } value
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when scrolling to the edge of the container.
     *
     * @param { Edge } value
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    scrollEdge(value: Edge);
    /**
     * Called when page turning mode is set.
     *
     * @param { object } value
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Called when page turning mode is set.
     *
     * @param { object } value
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    scrollPage(value: {
        next: boolean;
    });
    /**
     * Called when page turning mode is set.
     *
     * @param { object } value
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     * @deprecated since 9
     */
    scrollPage(value: {
        next: boolean;
        direction?: Axis;
    });
    /**
     * Called when viewing the scroll offset.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when viewing the scroll offset.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    currentOffset();
    /**
     * Called when sliding to the specified index.
     *
     * @param { number } value
     * @param { boolean } smooth
     * @param { ScrollAlign } align
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when sliding to the specified index.
     *
     * @param { number } value - Index to jump to.
     * @param { boolean } smooth - If true, scroll to index item with animation. If false, scroll to index item without animation.
     * @param { ScrollAlign } align - Sets the alignment mode of a specified index.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    scrollToIndex(value: number, smooth?: boolean, align?: ScrollAlign);
    /**
     * Called when the setting slides by offset.
     *
     * @param { Length } dx
     * @param { Length } dy
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Called when the setting slides by offset.
     *
     * @param { Length } dx
     * @param { Length } dy
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    scrollBy(dx: Length, dy: Length);
    /**
     * Indicates whether the component scrolls to the end position.
     *
     * @returns { boolean } Returns whether the component scrolls to the end position.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    isAtEnd(): boolean;
}
/*
 * Define scroll snap options
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface ScrollSnapOptions {
    /**
     * Set scroll snap alignment.
     *
     * @type { ScrollSnapAlign }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    snapAlign: ScrollSnapAlign;
    /**
     * Set snap positions. When the type of snapPositions is Dimension, Scroll content is paginated by an integer
     * multiple of snapPositions. When the type of snapPositions is Array<number>, Scroll content is paginated based
     * on the array of snapPositions.
     *
     * @type { ?(Dimension | Array<Dimension>) }
     * @default 100%
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    snapPagination?: Dimension | Array<Dimension>;
    /**
     * Set whether the beginning of the Scroll content counts an a snap.
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    enableSnapToStart?: boolean;
    /**
     * Set whether the end of the Scroll content counts an a snap.
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    enableSnapToEnd?: boolean;
}
/**
 * Provides interfaces for scrollable containers.
 *
 * @interface ScrollInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Provides interfaces for scrollable containers.
 *
 * @interface ScrollInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
interface ScrollInterface {
    /**
     * Called when a scrollable container is set.
     *
     * @param { Scroller } scroller
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when a scrollable container is set.
     *
     * @param { Scroller } scroller
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    (scroller?: Scroller): ScrollAttribute;
}
/**
 * Defines the scroll attribute functions.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the scroll attribute functions.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare class ScrollAttribute extends CommonMethod<ScrollAttribute> {
    /**
     * Called when the scroll method is slid.
     *
     * @param { ScrollDirection } value
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the scroll method is slid.
     *
     * @param { ScrollDirection } value
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    scrollable(value: ScrollDirection): ScrollAttribute;
    /**
     * Called when the setting slides to the specified position.
     *
     * @param { function } event
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the setting slides to the specified position.
     *
     * @param { function } event
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    onScroll(event: (xOffset: number, yOffset: number) => void): ScrollAttribute;
    /**
     * Called when scrolling to the edge of the container.
     *
     * @param { function } event
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when scrolling to the edge of the container.
     *
     * @param { function } event
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    onScrollEdge(event: (side: Edge) => void): ScrollAttribute;
    /**
     * Called when scrolling start.
     *
     * @param { function } event
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Called when scrolling start.
     *
     * @param { function } event
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    onScrollStart(event: () => void): ScrollAttribute;
    /**
     * Called when scrolling has stopped.
     *
     * @param { function } event
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     * @deprecated since 9
     * @useinstead scroll/Scroll#onScrollStop
     */
    onScrollEnd(event: () => void): ScrollAttribute;
    /**
     * Called when scrolling has stopped.
     *
     * @param { function } event
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Called when scrolling has stopped.
     *
     * @param { function } event
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    onScrollStop(event: () => void): ScrollAttribute;
    /**
     * Called when the status of the scroll bar is set.
     *
     * @param { BarState } barState
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the status of the scroll bar is set.
     *
     * @param { BarState } barState
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    scrollBar(barState: BarState): ScrollAttribute;
    /**
     * Called when the color of the scroll bar is set.
     *
     * @param { Color | number | string } color
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the color of the scroll bar is set.
     *
     * @param { Color | number | string } color
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    scrollBarColor(color: Color | number | string): ScrollAttribute;
    /**
     * Called when the width of the scroll bar is set.
     *
     * @param { number | string } value
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the width of the scroll bar is set.
     *
     * @param { number | string } value
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    scrollBarWidth(value: number | string): ScrollAttribute;
    /**
     * Called when the sliding effect is set.
     *
     * @param { EdgeEffect } edgeEffect
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the sliding effect is set.
     *
     * @param { EdgeEffect } edgeEffect
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    edgeEffect(edgeEffect: EdgeEffect): ScrollAttribute;
    /**
     * Called when scrolling begin each frame.
     *
     * @param { function } event
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Called when scrolling begin each frame.
     *
     * @param { function } event
     * @returns { ScrollAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    onScrollFrameBegin(event: (offset: number, state: ScrollState) => {
        offsetRemain: number;
    }): ScrollAttribute;
    /**
     * Called to setting the nested scroll options.
     *
     * @param { NestedScrollOptions } value - options for nested scrolling.
     * @returns { ScrollAttribute } the attribute of the scroll.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    nestedScroll(value: NestedScrollOptions): ScrollAttribute;
    /**
     * Called when setting whether to enable scroll by gesture or mouse.
     *
     * @param { boolean } value
     * @returns { ScrollAttribute } The attribute of the scroll
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    enableScrollInteraction(value: boolean): ScrollAttribute;
    /**
     * Called to setting the friction.
     *
     * @param { number | Resource } value - options for scrolling friction.
     * @returns { ScrollAttribute } the attribute of the scroll.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    friction(value: number | Resource): ScrollAttribute;
    /**
     * Called to setting the scroll snap options.
     *
     * @param { ScrollSnapOptions } value - options for scroll snap.
     * @returns { ScrollAttribute } the attribute of the scroll.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    scrollSnap(value: ScrollSnapOptions): ScrollAttribute;
}
/**
 * Defines Scroll Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Scroll Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare const Scroll: ScrollInterface;
/**
 * Defines Scroll Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Scroll Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare const ScrollInstance: ScrollAttribute;
