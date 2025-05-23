/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * Provide image decoration in the text component.
 *
 * @interface ImageSpanInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
interface ImageSpanInterface {
    /**
     * Called when image is entered in span.
     *
     * @param { ResourceStr | PixelMap } value - The image resource.
     * @returns { ImageSpanAttribute } The attribute of the image span.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    (value: ResourceStr | PixelMap): ImageSpanAttribute;
}
/**
 * Define the ImageSpan attribute functions.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare class ImageSpanAttribute extends CommonMethod<ImageSpanAttribute> {
    /**
     * Called when the alignment of image span is set.
     *
     * @param { ImageSpanAlignment } value - The alignment type of image span.
     * @returns { ImageSpanAttribute } The attribute of the image span.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    verticalAlign(value: ImageSpanAlignment): ImageSpanAttribute;
    /**
     * Sets the zoom type of an image.
     *
     * @param { ImageFit } value - Image display mode.
     * @returns { ImageSpanAttribute } The attribute of the image span.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    objectFit(value: ImageFit): ImageSpanAttribute;
}
/**
 * Defines ImageSpan Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare const ImageSpan: ImageSpanInterface;
/**
 * Defines ImageSpan Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare const ImageSpanInstance: ImageSpanAttribute;
