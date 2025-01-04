/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
import { AsyncCallback } from './@ohos.base';
/**
 * This module provides the capability to control motor vibration.
 *
 * @namespace vibrator
 * @syscap SystemCapability.Sensors.MiscDevice
 * @since 8
 */
declare namespace vibrator {
    /**
     * The trigger motor vibrates for a specified length of time.
     *
     * @permission ohos.permission.VIBRATE
     * @param { number } duration Indicate the duration of the motor vibration.
     * @param { AsyncCallback<void> } callback The callback of vibrate.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 8
     * @deprecated since 9
     * @useinstead vibrator#startVibration
     */
    function vibrate(duration: number, callback?: AsyncCallback<void>): void;
    /**
     * The trigger motor vibrates for a specified length of time.
     *
     * @permission ohos.permission.VIBRATE
     * @param { number } duration Indicate the duration of the motor vibration.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 8
     * @deprecated since 9
     * @useinstead vibrator#startVibration
     */
    function vibrate(duration: number): Promise<void>;
    /**
     * The trigger motor vibrates for the specified effect of the preset.
     *
     * @permission ohos.permission.VIBRATE
     * @param { EffectId } effectId Indicate the specified effect of the preset, {@code EffectId}.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 8
     * @deprecated since 9
     * @useinstead vibrator#startVibration
     */
    function vibrate(effectId: EffectId): Promise<void>;
    /**
     * The trigger motor vibrates for the specified effect of the preset.
     *
     * @permission ohos.permission.VIBRATE
     * @param { EffectId } effectId Indicate the specified effect of the preset, {@code EffectId}.
     * @param { AsyncCallback<void> } callback The callback of vibrate.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 8
     * @deprecated since 9
     * @useinstead vibrator#startVibration
     */
    function vibrate(effectId: EffectId, callback?: AsyncCallback<void>): void;
    /**
     * Trigger vibrator vibration.
     *
     * @permission ohos.permission.VIBRATE
     * @param { VibrateEffect } effect - Indicate vibrate effect, {@code VibrateEffect}.
     * @param { VibrateAttribute } attribute - Indicate vibrate attribute, {@code VibrateAttribute}.
     * @param { AsyncCallback<void> } callback - The callback of startVibration.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14600101 - Device operation failed.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 9
     */
    function startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>): void;
    /**
     * Trigger vibrator vibration.
     *
     * @permission ohos.permission.VIBRATE
     * @param { VibrateEffect } effect - Indicate vibrate effect, {@code VibrateEffect}.
     * @param { VibrateAttribute } attribute - Indicate vibrate attribute, {@code VibrateAttribute}.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14600101 - Device operation failed.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 9
     */
    function startVibration(effect: VibrateEffect, attribute: VibrateAttribute): Promise<void>;
    /**
     * Stop the vibrator from vibrating.
     *
     * @permission ohos.permission.VIBRATE
     * @param { VibratorStopMode } stopMode - Indicate the stop mode in which the motor vibrates, {@code VibratorStopMode}.
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 9
     */
    function stopVibration(stopMode: VibratorStopMode): Promise<void>;
    /**
     * Stop the vibrator from vibrating.
     *
     * @permission ohos.permission.VIBRATE
     * @param { VibratorStopMode } stopMode - Indicate the stop mode in which the motor vibrates, {@code VibratorStopMode}.
     * @param { AsyncCallback<void> } callback - The callback of stopVibration.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 9
     */
    function stopVibration(stopMode: VibratorStopMode, callback: AsyncCallback<void>): void;
    /**
     * Stop any type of vibration.
     *
     * @permission ohos.permission.VIBRATE
     * @param { AsyncCallback<void> } callback - The callback of stopVibration.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 10
     */
    function stopVibration(callback: AsyncCallback<void>): void;
    /**
     * Stop any type of vibration.
     *
     * @permission ohos.permission.VIBRATE
     * @returns { Promise<void> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 10
     */
    function stopVibration(): Promise<void>;
    /**
     * Whether the preset vibration effect is supported.
     *
     * @param { string } effectId Indicate the specified effect of the preset, {@code EffectId}.
     * @param { AsyncCallback<boolean> } callback The callback of isSupportEffect.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 10
     */
    function isSupportEffect(effectId: string, callback: AsyncCallback<boolean>): void;
    /**
     * Whether the preset vibration effect is supported.
     *
     * @param { string } effectId Indicate the specified effect of the preset, {@code EffectId}.
     * @returns { Promise<boolean> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 10
     */
    function isSupportEffect(effectId: string): Promise<boolean>;
    /**
     * Stop the motor from vibrating.
     *
     * @permission ohos.permission.VIBRATE
     * @param { VibratorStopMode } stopMode Indicate the stop mode in which the motor vibrates, {@code VibratorStopMode}.
     * @returns { Promise<void> } Promise used to return the result.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 8
     * @deprecated since 9
     * @useinstead vibrator#stopVibration
     */
    function stop(stopMode: VibratorStopMode): Promise<void>;
    /**
     * Stop the motor from vibrating.
     *
     * @permission ohos.permission.VIBRATE
     * @param { VibratorStopMode } stopMode Indicate the stop mode in which the motor vibrates, {@code VibratorStopMode}.
     * @param { AsyncCallback<void> } callback The callback of stop.
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 8
     * @deprecated since 9
     * @useinstead vibrator#stopVibration
     */
    function stop(stopMode: VibratorStopMode, callback?: AsyncCallback<void>): void;
    /**
     * Preset vibration effect string.
     *
     * @enum { string }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 8
     */
    enum EffectId {
        /* Describes the vibration effect of the vibrator when a user adjusts the timer.*/
        EFFECT_CLOCK_TIMER = 'haptic.clock.timer'
    }
    /**
     * Vibrator vibration stop mode.
     *
     * @enum { string }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 8
     */
    enum VibratorStopMode {
        /* Indicates the mode of stopping a one-shot vibration effect.*/
        VIBRATOR_STOP_MODE_TIME = 'time',
        /* Indicates the mode of stopping a preset vibration effect.*/
        VIBRATOR_STOP_MODE_PRESET = 'preset'
    }
    /**
     * The use of vibration.
     *
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 9
     */
    type Usage = 'unknown' | 'alarm' | 'ring' | 'notification' | 'communication' | 'touch' | 'media' | 'physicalFeedback' | 'simulateReality';
    /**
     * The attribute of vibration.
     *
     * @interface VibrateAttribute
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 9
     */
    interface VibrateAttribute {
        id?: number; /** Vibrator id, default is 0. */
        usage: Usage; /** The use of vibration. */
    }
    /**
     * Describes the effect of vibration.
     *
     * @type { VibrateTime | VibratePreset }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 9
     */
    /**
     * Describes the effect of vibration.
     *
     * @type { VibrateTime | VibratePreset | VibrateFromFile }
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 10
     */
    type VibrateEffect = VibrateTime | VibratePreset | VibrateFromFile;
    /**
     * Vibrate continuously for a period of time at the default intensity of the system.
     *
     * @interface VibrateTime
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 9
     */
    interface VibrateTime {
        type: 'time';
        duration: number; /** The duration of the vibration, in ms */
    }
    /**
     * Preset vibration type vibration effect.
     *
     * @interface VibratePreset
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 9
     */
    interface VibratePreset {
        type: 'preset';
        effectId: string; /** Preset type vibration */
        count: number; /** The number of vibration repetitions */
    }
    /**
     * Custom vibration, vibrate the effect from a haptic file.
     *
     * @interface VibrateFromFile
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 10
     */
    interface VibrateFromFile {
        type: 'file';
        hapticFd: HapticFileDescriptor; /** Haptic file descriptor, some formats are supported. */
    }
    /**
     * Haptic file descriptor. The caller needs to ensure that the fd is valid and
     * the offset and length are correct.
     *
     * @interface HapticFileDescriptor
     * @syscap SystemCapability.Sensors.MiscDevice
     * @since 10
     */
    interface HapticFileDescriptor {
        /**
         * The file descriptor of haptic effect source from file system. The caller
         * is responsible to close the file descriptor.
         *
         * @syscap SystemCapability.Sensors.MiscDevice
         * @since 10
         */
        fd: number;
        /**
         * The offset into the file where the data to be read, in bytes. By default,
         * the offset is zero.
         *
         * @syscap SystemCapability.Sensors.MiscDevice
         * @since 10
         */
        offset?: number;
        /**
         * The length in bytes of the data to be read. By default, the length is the
         * rest of bytes in the file from the offset.
         *
         * @syscap SystemCapability.Sensors.MiscDevice
         * @since 10
         */
        length?: number;
    }
}
export default vibrator;
