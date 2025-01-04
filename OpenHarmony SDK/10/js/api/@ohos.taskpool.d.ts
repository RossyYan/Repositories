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
/**
 * JS cross-thread task executor.
 *
 * @namespace taskpool
 * @syscap SystemCapability.Utils.Lang
 * @since 9
 */
/**
 * JS cross-thread task executor.
 *
 * @namespace taskpool
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 10
 */
declare namespace taskpool {
    /**
     * The Priority defines the task priority.
     *
     * @enum { number } Priority
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * The Priority defines the task priority.
     *
     * @enum { number } Priority
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    enum Priority {
        /**
         * set task priority to high.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 9
         */
        /**
         * set task priority to high.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        HIGH = 0,
        /**
         * set task priority to medium.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 9
         */
        /**
         * set task priority to medium.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        MEDIUM = 1,
        /**
         * set task priority to low.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 9
         */
        /**
         * set task priority to low.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        LOW = 2
    }
    /**
     * The Task class provides an interface to create a task.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * The Task class provides an interface to create a task.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    class Task {
        /**
         * Create a Task instance.
         *
         * @param { Function } func - func func Concurrent function to execute in taskpool.
         * @param { unknown[] } args - args args The concurrent function arguments.
         * @throws { BusinessError } 401 - The input parameters are invalid.
         * @throws { BusinessError } 10200014 - The function is not mark as concurrent.
         * @syscap SystemCapability.Utils.Lang
         * @since 9
         */
        /**
         * Create a Task instance.
         *
         * @param { Function } func - func func Concurrent function to execute in taskpool.
         * @param { unknown[] } args - args args The concurrent function arguments.
         * @throws { BusinessError } 401 - The input parameters are invalid.
         * @throws { BusinessError } 10200014 - The function is not mark as concurrent.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        constructor(func: Function, ...args: unknown[]);
        /**
         * Check current running Task is canceled or not.
         *
         * @returns { boolean } Returns {@code true} if current running task is canceled; returns {@code false} otherwise.
         * @static
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        static isCanceled(): boolean;
        /**
         * Set transfer list for this task.
         *
         * @param { ArrayBuffer[] } transfer - transfer Transfer list of this task, empty array is default.
         * @throws { BusinessError } 401 - The input parameters are invalid.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        setTransferList(transfer?: ArrayBuffer[]): void;
        /**
         * Concurrent function to execute in taskpool.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 9
         */
        /**
         * Concurrent function to execute in taskpool.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        function: Function;
        /**
         * The concurrent function arguments.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 9
         */
        /**
         * The concurrent function arguments.
         *
         * @type { ?unknown[] }
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        arguments?: unknown[];
    }
    /**
     * The TaskGroup class provides an interface to create a task group.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    class TaskGroup {
        /**
         * Create a TaskGroup instance.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        constructor();
        /**
         * Add a Concurrent function into task group.
         *
         * @param { Function } func - func func Concurrent function to add in task group.
         * @param { unknown[] } args - args args The concurrent function arguments.
         * @throws { BusinessError } 401 - The input parameters are invalid.
         * @throws { BusinessError } 10200014 - The function is not mark as concurrent.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        addTask(func: Function, ...args: unknown[]): void;
        /**
         * Add a Task into TaskGroup.
         *
         * @param { Task } task - task task The task want to add in task group.
         * @throws { BusinessError } 401 - The input parameters are invalid.
         * @throws { BusinessError } 10200014 - The function is not mark as concurrent.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        addTask(task: Task): void;
    }
    /**
     * The State defines the task state.
     *
     * @enum { number } State
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    enum State {
        /**
         * the task state is waiting.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        WAITING = 1,
        /**
         * the task state is running.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        RUNNING = 2,
        /**
         * the task state is canceled.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        CANCELED = 3
    }
    /**
     * Indicates the internal information of the worker thread.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    class TaskInfo {
        /**
         * Task identity.
         *
         * @type { number }
         * @default 0
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        taskId: number;
        /**
         * Task state.
         *
         * @type { State }
         * @default State::WAITING
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        state: State;
        /**
         * Duration of task execution.
         *
         * @type { ?number }
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        duration?: number;
    }
    /**
     * Indicates the internal information of the worker thread.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    class ThreadInfo {
        /**
         * Thread id.
         *
         * @type { number }
         * @default 0
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        tid: number;
        /**
         * Task id list that running on current thread.
         *
         * @type { ?number[] }
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        taskIds?: number[];
        /**
         * Thread priority.
         *
         * @type { ?Priority }
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        priority?: Priority;
    }
    /**
     * Indicates the internal information of the taskpool.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    class TaskPoolInfo {
        /**
         * An array of taskpool thread information.
         *
         * @type { ThreadInfo[] }
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        threadInfos: ThreadInfo[];
        /**
         * An array of taskpool task information.
         *
         * @type { TaskInfo[] }
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        taskInfos: TaskInfo[];
    }
    /**
     * Execute a concurrent function.
     *
     * @param { Function } func - func func Concurrent function want to execute.
     * @param { unknown[] } args - args args The concurrent function arguments.
     * @returns { Promise<unknown> }
     * @throws { BusinessError } 401 - The input parameters are invalid.
     * @throws { BusinessError } 10200003 - Worker initialization failure.
     * @throws { BusinessError } 10200006 - An exception occurred during serialization.
     * @throws { BusinessError } 10200014 - The function is not mark as concurrent.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Execute a concurrent function.
     *
     * @param { Function } func - func func Concurrent function want to execute.
     * @param { unknown[] } args - args args The concurrent function arguments.
     * @returns { Promise<unknown> }
     * @throws { BusinessError } 401 - The input parameters are invalid.
     * @throws { BusinessError } 10200003 - Worker initialization failure.
     * @throws { BusinessError } 10200006 - An exception occurred during serialization.
     * @throws { BusinessError } 10200014 - The function is not mark as concurrent.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    function execute(func: Function, ...args: unknown[]): Promise<unknown>;
    /**
     * Execute a concurrent task.
     *
     * @param { Task } task - task task The task want to execute.
     * @param { Priority } priority - priority priority Task priority, MEDIUM is default.
     * @returns { Promise<unknown> }
     * @throws { BusinessError } 401 - The input parameters are invalid.
     * @throws { BusinessError } 10200003 - Worker initialization failure.
     * @throws { BusinessError } 10200006 - An exception occurred during serialization.
     * @throws { BusinessError } 10200014 - The function is not mark as concurrent.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Execute a concurrent task.
     *
     * @param { Task } task - task task The task want to execute.
     * @param { Priority } priority - priority priority Task priority, MEDIUM is default.
     * @returns { Promise<unknown> }
     * @throws { BusinessError } 401 - The input parameters are invalid.
     * @throws { BusinessError } 10200003 - Worker initialization failure.
     * @throws { BusinessError } 10200006 - An exception occurred during serialization.
     * @throws { BusinessError } 10200014 - The function is not mark as concurrent.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    function execute(task: Task, priority?: Priority): Promise<unknown>;
    /**
     * Execute a concurrent task group.
     *
     * @param { TaskGroup } group - group group The task group want to execute.
     * @param { Priority } priority - priority priority Task group priority, MEDIUM is default.
     * @returns { Promise<unknown[]> }
     * @throws { BusinessError } 401 - The input parameters are invalid.
     * @throws { BusinessError } 10200006 - An exception occurred during serialization.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    function execute(group: TaskGroup, priority?: Priority): Promise<unknown[]>;
    /**
     * Cancel a concurrent task.
     *
     * @param { Task } task - task task The task want to cancel.
     * @throws { BusinessError } 401 - The input parameters are invalid.
     * @throws { BusinessError } 10200015 - The task does not exist when it is canceled.
     * @throws { BusinessError } 10200016 - The task is executing when it is canceled.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Cancel a concurrent task.
     *
     * @param { Task } task - task task The task want to cancel.
     * @throws { BusinessError } 401 - The input parameters are invalid.
     * @throws { BusinessError } 10200015 - The task does not exist when it is canceled.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    function cancel(task: Task): void;
    /**
     * Cancel a concurrent task group.
     *
     * @param { TaskGroup } group - group group The task group want to cancel.
     * @throws { BusinessError } 401 - The input parameters are invalid.
     * @throws { BusinessError } 10200018 - The task group does not exist when it is canceled.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    function cancel(group: TaskGroup): void;
    /**
     * Get task pool internal information.
     *
     * @returns { TaskPoolInfo }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    function getTaskPoolInfo(): TaskPoolInfo;
}
export default taskpool;
