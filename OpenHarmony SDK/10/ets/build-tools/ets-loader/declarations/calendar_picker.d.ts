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
 * The type of alignment between entry and calendar.
 * @enum {number}
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare enum CalendarAlign {
    /**
     * The value of calendar align type start.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    START = 0,
    /**
     * The value of calendar align type center.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    CENTER = 1,
    /**
     * The value of calendar align type end.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    END = 2
}
/**
 * Defines the options of CalendarPicker.
 * @interface CalendarOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare interface CalendarOptions {
    /**
     * Specifies the radius of the background of the day in calendar.
     * @type { ?(number | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    hintRadius?: number | Resource;
    /**
     * Specifies the date selector check date.
     * @type { ?Date }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    selected?: Date;
}
/**
 * Defines the CalendarPicker Component.
 * @interface CalendarPickerInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
interface CalendarPickerInterface {
    /**
     * Defines the CalendarPicker constructor.
     * @param { CalendarOptions } options - the option of th calendarPicker.
     * @returns { CalendarPickerAttribute } the attribute of the CalendarPicker.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    (options?: CalendarOptions): CalendarPickerAttribute;
}
/**
 * Defines the CalendarPicker attribute functions.
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare class CalendarPickerAttribute extends CommonMethod<CalendarPickerAttribute> {
    /**
     * Set the alignment between entry and calendar dialog.
     * @param { CalendarAlign } alignType - The type of alignment between entry and calendar dialog.
     * @param { Offset } offset - The offset between entry and calendar dialog.
     * @returns { CalendarPickerAttribute } the attribute of the CalendarPicker.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    edgeAlign(alignType: CalendarAlign, offset?: Offset): CalendarPickerAttribute;
    /**
     * Sets the text style of entry
     * @param { PickerTextStyle } value - indicates the text style of entry.
     * @returns { CalendarPickerAttribute } the attribute of the CalendarPicker.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    textStyle(value: PickerTextStyle): CalendarPickerAttribute;
    /**
     * Callback for selected date changed.
     * @param { function } callback - Callback for selected date changed.
     * @returns { CalendarPickerAttribute } the attribute of the CalendarPicker.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    onChange(callback: (value: Date) => void): CalendarPickerAttribute;
}
/**
 * Defines the DatePickerDialogOptions for Calendar Picker Dialog.
 * @interface CalendarDialogOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare interface CalendarDialogOptions extends CalendarOptions {
    /**
     * Called when the OK button in the dialog is clicked.
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    onAccept?: (value: Date) => void;
    /**
     * Called when the Cancel button in the dialog is clicked.
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    onCancel?: () => void;
    /**
     * This event is triggered when a date is selected in dialog.
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    onChange?: (value: Date) => void;
}
/**
 * Defines CalendarPickerDialog which uses show method to show CalendarPicker dialog.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare class CalendarPickerDialog {
    /**
     * Invoking method display.
     * @param { CalendarDialogOptions } options - the option of th calendarPicker.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    static show(options?: CalendarDialogOptions): void;
}
/**
 * Defines CalendarPicker Component.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare const CalendarPicker: CalendarPickerInterface;
/**
 * Defines CalendarPicker Component instance.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare const CalendarPickerInstance: CalendarPickerAttribute;
