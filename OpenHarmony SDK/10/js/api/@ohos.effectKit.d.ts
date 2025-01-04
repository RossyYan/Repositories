/*
* Copyright (c) 2022 Huawei Device Co., Ltd.
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
import { AsyncCallback } from './@ohos.base';
import image from './@ohos.multimedia.image';
/**
 * @name  effectKit
 * @since 9
 */
declare namespace effectKit {
    /**
     * The Filter of FilterChain.
     * @since 9
     * @syscap SystemCapability.Multimedia.Image.Core
     */
    interface Filter {
        /**
        * A blur effect is added to the image.
        * @since 9
        * @syscap SystemCapability.Multimedia.Image.Core
        * @param radius The degree of blur, the value is measured in pixels.
        * @returns Filters for the current effect have been added.
        */
        blur(radius: number): Filter;
        /**
        * A Brightness effect is added to the image.
        * @since 9
        * @syscap SystemCapability.Multimedia.Image.Core
        * @param bright The degree of light and darkness,the value range is 0 to 1.
        * @returns Filters for the current effect have been added.
        */
        brightness(bright: number): Filter;
        /**
        * A Grayscale effect is added to the image.
        * @since 9
        * @syscap SystemCapability.Multimedia.Image.Core
        * @returns Filters for the current effect have been added.
        */
        grayscale(): Filter;
        /**
        * Gets the PixelMap where all filter effects have been added to the image.
        * @since 9
        * @syscap SystemCapability.Multimedia.Image.Core
        * @returns image.PixelMap.
        */
        getPixelMap(): image.PixelMap;
    }
    /**
     * The color picker of an image.
     * @since 9
     * @syscap SystemCapability.Multimedia.Image.Core
     */
    interface ColorPicker {
        /**
         * get main color of an image
         * @since 9
         * @syscap SystemCapability.Multimedia.Image.Core
         */
        getMainColor(): Promise<Color>;
        /**
         * get main color of an image
         * @since 9
         * @syscap SystemCapability.Multimedia.Image.Core
         */
        getMainColorSync(): Color;
        /**
         * Get largest proportion color of an image
         * @since 10
         * @syscap SystemCapability.Multimedia.Image.Core
         * @returns {Color} Largest proportion color picked in the image.
         */
        getLargestProportionColor(): Color;
        /**
         * Get highest saturation color of an image
         * @since 10
         * @syscap SystemCapability.Multimedia.Image.Core
         * @returns {Color} Highest saturation color picked in the image.
         */
        getHighestSaturationColor(): Color;
        /**
         * Get average color of an image
         * @since 10
         * @syscap SystemCapability.Multimedia.Image.Core
         * @returns {Color} Average color calculated in the image.
         */
        getAverageColor(): Color;
        /**
         * Determine whether the color is black or white or gray
         * @since 10
         * @syscap SystemCapability.Multimedia.Image.Core
         * @param {color} number The 32 bit ARGB color to discriminate.
         * @returns {boolean} Result of judging black, white and gray.
         */
        isBlackOrWhiteOrGrayColor(color: number): boolean;
    }
    /**
     * The color param.
     * @since 9
     * @syscap SystemCapability.Multimedia.Image.Core
     */
    interface Color {
        /**
         * Red
         * @since 9
         * @syscap SystemCapability.Multimedia.Image.Core
         */
        red: number;
        /**
         * Green
         * @since 9
         * @syscap SystemCapability.Multimedia.Image.Core
         */
        green: number;
        /**
         * Blue
         * @since 9
         * @syscap SystemCapability.Multimedia.Image.Core
         */
        blue: number;
        /**
         * Alpha
         * @since 9
         * @syscap SystemCapability.Multimedia.Image.Core
         */
        alpha: number;
    }
    /**
     * Create a FilterChain to add multiple effects to an image.
     * @since 9
     * @syscap SystemCapability.Multimedia.Image.Core
     * @param image.PixelMap.
     * @returns Returns the head node of FilterChain.
     */
    function createEffect(source: image.PixelMap): Filter;
    /**
     * Create a color picker to get color of an image.
     * @param { image.PixelMap } source - the source pixelmap.
     * @returns { Promise<ColorPicker> } - returns the ColorPicker generated.
     * @throws { BusinessError } 401 - Input parameter error.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    function createColorPicker(source: image.PixelMap): Promise<ColorPicker>;
    /**
     * Create a color picker to get color of an image.
     * @param { image.PixelMap } source - the source pixelmap.
     * @param { Array<number> } region - contains 4 elements, represents the region's left, top, right, bottom coordinates,
     * default is [0, 0, 1, 1], represents the region of color picker is the whole pixelMap.
     * @returns { Promise<ColorPicker> } - returns the ColorPicker generated.
     * @throws { BusinessError } 401 - Input parameter error.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10
     */
    function createColorPicker(source: image.PixelMap, region: Array<number>): Promise<ColorPicker>;
    /**
     * Create a color picker to get color of an image.
     * @param { image.PixelMap } source - the source pixelmap.
     * @param { AsyncCallback<ColorPicker> } callback - the callback of createColorPicker.
     * @throws { BusinessError } 401 - Input parameter error.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    function createColorPicker(source: image.PixelMap, callback: AsyncCallback<ColorPicker>): void;
    /**
     * Create a color picker to get color of an image.
     * @param { image.PixelMap } source - the source pixelmap.
     * @param { Array<number> } region - contains 4 elements, represents the region's left, top, right, bottom coordinates,
     * default is [0, 0, 1, 1], represents the region of color picker is the whole pixelMap.
     * @param { AsyncCallback<ColorPicker> } callback - the callback of createColorPicker.
     * @throws { BusinessError } 401 - Input parameter error.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10
     */
    function createColorPicker(source: image.PixelMap, region: Array<number>, callback: AsyncCallback<ColorPicker>): void;
}
export default effectKit;
