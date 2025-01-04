/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
import type { AsyncCallback, Callback } from './@ohos.base';
/**
 * System print
 *
 * @namespace print
 * @syscap SystemCapability.Print.PrintFramework
 * @since 10
 */
declare namespace print {
    /**
     * PrintTask provide event callback.
     * @interface PrintTask
     * @syscap SystemCapability.Print.PrintFramework
     * @since 10
     */
    interface PrintTask {
        /**
         * Register event callback when the current print task is in process.
         * @permission ohos.permission.PRINT
         * @param { 'block' } type - Indicates the print task has been blocked.
         * @param { Callback<void> } callback - The callback function for print task change event
         * @throws { BusinessError } 201 - the application does not have permission to call this function.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 10
         */
        on(type: 'block', callback: Callback<void>): void;
        /**
         * Register event callback when the current print task is in process.
         * @permission ohos.permission.PRINT
         * @param { 'succeed' } type - Indicates the print task succeed.
         * @param { Callback<void> } callback - The callback function for print task change event
         * @throws { BusinessError } 201 - the application does not have permission to call this function.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 10
         */
        on(type: 'succeed', callback: Callback<void>): void;
        /**
         * Register event callback when the current print task is in process.
         * @permission ohos.permission.PRINT
         * @param { 'fail' } type - Indicates the print task has completed with failure.
         * @param { Callback<void> } callback - The callback function for print task change event
         * @throws { BusinessError } 201 - the application does not have permission to call this function.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 10
         */
        on(type: 'fail', callback: Callback<void>): void;
        /**
         * Register event callback when the current print task is in process.
         * @permission ohos.permission.PRINT
         * @param { 'cancel' } type - Indicates the print task has been cancelled.
         * @param { Callback<void> } callback - The callback function for print task change event
         * @throws { BusinessError } 201 - the application does not have permission to call this function.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 10
         */
        on(type: 'cancel', callback: Callback<void>): void;
        /**
         * Unregister event callback when the current print task is in process.
         * @permission ohos.permission.PRINT
         * @param { 'block' } type - Indicates the print task has been blocked.
         * @param { Callback<void> } callback - The callback function for print task change event
         * @throws { BusinessError } 201 - the application does not have permission to call this function.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 10
         */
        off(type: 'block', callback?: Callback<void>): void;
        /**
         * Unregister event callback when the current print task is in process.
         * @permission ohos.permission.PRINT
         * @param { 'succeed' } type - Indicates the print task succeed.
         * @param { Callback<void> } callback - The callback function for print task change event
         * @throws { BusinessError } 201 - the application does not have permission to call this function.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 10
         */
        off(type: 'succeed', callback?: Callback<void>): void;
        /**
         * Unregister event callback when the current print task is in process.
         * @permission ohos.permission.PRINT
         * @param { 'fail' } type - Indicates the print task has completed with failure.
         * @param { Callback<void> } callback - The callback function for print task change event
         * @throws { BusinessError } 201 - the application does not have permission to call this function.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 10
         */
        off(type: 'fail', callback?: Callback<void>): void;
        /**
         * Unregister event callback when the current print task is in process.
         * @permission ohos.permission.PRINT
         * @param { 'cancel' } type - Indicates the print task has been cancelled.
         * @param { Callback<void> } callback - The callback function for print task change event
         * @throws { BusinessError } 201 - the application does not have permission to call this function.
         * @syscap SystemCapability.Print.PrintFramework
         * @since 10
         */
        off(type: 'cancel', callback?: Callback<void>): void;
    }
    /**
     * Start new print task for App.
     * @permission ohos.permission.PRINT
     * @param { Array<string> } files - Indicates the filepath list to be printed. Only pdf and picture filetype are supported.
     * @param { AsyncCallback<PrintTask> } callback - The callback function for print task.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 10
     */
    function print(files: Array<string>, callback: AsyncCallback<PrintTask>): void;
    /**
     * Start new print task for App.
     * @permission ohos.permission.PRINT
     * @param { Array<string> } files - Indicates the filepath list to be printed. Only pdf and picture filetype are supported.
     * @returns { Promise<PrintTask> } the promise returned by the function.
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @syscap SystemCapability.Print.PrintFramework
     * @since 10
     */
    function print(files: Array<string>): Promise<PrintTask>;
}
export default print;
