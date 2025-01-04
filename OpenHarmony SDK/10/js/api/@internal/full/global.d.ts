/*
 * Copyright (c) 2020 Huawei Device Co., Ltd.
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
import { OffscreenCanvasRenderingContext2D } from './viewmodel';
/**
 * Sets the interval for repeatedly calling a function.
 *
 * @param { Function | string } handler - Indicates the function to be called after the timer goes off.
 * For devices of "tv", "phone, tablet", and "wearable" types, this parameter can be a function or string.
 * For devices of "lite wearable" and "smartVision" types, this parameter must be a function.
 * @param { number } delay - Indicates the interval between each two calls, in milliseconds. The function will be called after this delay.
 * @param { any[] } arguments - Indicates additional arguments to pass to "handler" when the timer goes off.
 * @returns { number } Returns the timer ID.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 3
 */
export declare function setInterval(handler: Function | string, delay: number, ...arguments: any[]): number;
/**
 * Sets a timer after which a function will be executed.
 *
 * @param { Function | string } handler - Indicates the function to be called after the timer goes off.
 * For devices of "tv", "phone, tablet", and "wearable" types, this parameter can be a function or string.
 * For devices of "lite wearable" and "smartVision" types, this parameter must be a function.
 * @param { number } [delay] - Indicates the delay (in milliseconds) after which the function will be called.
 * If this parameter is left empty, default value "0" will be used, which means that the function will be called immediately or as soon as possible.
 * @param { any[] } arguments - Indicates additional arguments to pass to "handler" when the timer goes off.
 * @returns { number } Returns the timer ID.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 3
 */
export declare function setTimeout(handler: Function | string, delay?: number, ...arguments: any[]): number;
/**
 * Sets a vsync after which a function will be executed.
 *
 * @param { Function } handler - Indicates the function to be called when the vsync trigger.
 * @returns { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 3
 */
export declare function requestAnimationFrame(handler: Function): number;
/**
 * Cancels the vsync callback set by "requestAnimationFrame()".
 *
 * @param { number } requestId - Indicates the vsync callback ID returned by "requestAnimationFrame()".
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 3
 */
export declare function cancelAnimationFrame(requestId: number): void;
/**
 * Cancels the interval set by " setInterval()".
 *
 * @param { number } [intervalID] - Indicates the timer ID returned by "setInterval()".
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 3
 */
export declare function clearInterval(intervalID?: number): void;
/**
 * Cancels the timer set by "setTimeout()".
 *
 * @param { number } [timeoutID] - Indicates the timer ID returned by "setTimeout()".
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 3
 */
export declare function clearTimeout(timeoutID?: number): void;
/**
 * Get the java interface instance. The java instance needs to register, otherwise it cannot be obtained.
 * After obtaining the instance, you can call the function with the same name on the Java side.
 *
 * @param { string } [name] - Java interface name, including package path, such as com.example.test.timeinterfaceimpl.
 * @returns { any } A promise object is returned. The resolve callback is the object of PA.
 * The reject callback returns the object containing code and error data.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 5
 * @deprecated since 8
 */
export declare function createLocalParticleAbility(name?: string): any;
/**
 * Defining syscap function.
 *
 * @param { string } syscap
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
export declare function canIUse(syscap: string): boolean;
/**
 * Obtain the objects exposed in app.js
 *
 * @returns { object }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 6
 */
export declare function getApp(): object;
/**
 * You can create an Image object by calling new Image().
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 4
 */
export declare class Image {
    /**
     * Network address or local resource. The internal URI is supported.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 4
     */
    src: string;
    /**
     * Image width.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 4
     */
    width?: number;
    /**
     * Image height.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 4
     */
    height?: number;
    /**
     * Called when an image is successfully loaded. This function has no parameter.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 4
     */
    onload?: () => void;
    /**
     * Called when an image fails to be loaded. This function has no parameter.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 4
     */
    onerror?: () => void;
}
/**
 * An ImageData object is a common object that stores the actual pixel data of a Canvas object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 4
 */
export declare class ImageData {
    /**
     * Actual width of the ImageData object, in pixels.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 4
     */
    width: number;
    /**
     * Actual height of the ImageData object, in pixels.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 4
     */
    height: number;
    /**
     * A one-dimensional array of color values. The color values are sorted in the RGBA order and represented by integers from 0 to 255.
     *
     * @type { Uint8ClampedArray }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 4
     */
    data: Uint8ClampedArray;
}
/**
 * OffscreenCanvas provides a Canvas object that can be rendered off-screen.
 * It works in both window and Web worker environments.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
export declare class OffscreenCanvas {
    /**
     * The width of the offScreen Canvas object
     * The height of the offScreen Canvas object
     *
     * @param { number } width
     * @param { number } height
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    constructor(width: number, height: number);
    /**
     * The width of the offScreen Canvas object
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    width: number;
    /**
     * The height of the offScreen Canvas object
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    height: number;
    /**
     * Gets the context object for off-screen drawing.
     *
     * @param { "2d" } contextId - creates a CanvasRenderingContext2D object representing a two-dimensional rendering context.
     * @param { CanvasRenderingContext2DSettings } [options] - object representing a three-dimensional rendering context.
     * @returns { OffscreenCanvasRenderingContext2D } a render canvas for the offScreen Canvas object.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    getContext(contextId: "2d", options?: CanvasRenderingContext2DSettings): OffscreenCanvasRenderingContext2D;
    /**
     * Converts the draw contents of the current off-screen draw object to a string in the form of a Blob.
     *
     * @param { string } [type] - indicating the image format.
     * @param { number } [quality] - between 0 and 1 indicating image quality if the type option is image/jpeg or image/webp.
     * @returns { string } A Promise returning a Blob object representing the image contained in the canvas.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    toDataURL(type?: string, quality?: number): string;
    /**
     * Converts the draw content in the current off-screen draw object to a Bitmap object.
     *
     * @returns { ImageBitmap } Returns An ImageBitmap object.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    transferToImageBitmap(): ImageBitmap;
}
/**
 * Defines the ImageBitmap.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
export declare class ImageBitmap {
    /**
     * The height of the Image Bitmap object.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    readonly height: number;
    /**
     * The width of the Image Bitmap object.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    readonly width: number;
}
