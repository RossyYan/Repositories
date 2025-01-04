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
 * Defines the ColorMode of device.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
declare enum ColorMode {
    /**
     * Light mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    LIGHT = 0,
    /**
     * Dark mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    DARK
}
/**
 * Defines the LayoutDirection of device.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
declare enum LayoutDirection {
    /**
     * Elements are laid out from left to right.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    LTR,
    /**
     * Elements are laid out from right to left.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    RTL,
    /**
     * Elements are laid out from auto.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    Auto
}
