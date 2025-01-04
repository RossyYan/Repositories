/*
* Copyright (C) 2023-2023 Huawei Device Co., Ltd.
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

/// <reference path="../component/units.d.ts" />

import { ResourceStr } from 'GlobalResource';

/**
 * Declare FilterType
 * @enum { FilterType }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
export declare enum FilterType {
    MULTI_LINE_FILTER = 0,
    LIST_FILTER = 1
}

/**
 * This parameter is used to define the input of each filtering dimension.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
export declare class FilterParams {
    /**
     * filter item name.
     * type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    name: ResourceStr;
    /**
     * filter options.
     * type { Array<ResourceStr> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    options: Array<ResourceStr>;
}

/**
 * This parameter specifies the selection result of a filtering dimension.
 * The index starts from 0.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
export declare class FilterResult {
    /**
     * result name.
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    name: ResourceStr;
    /**
     * result index.
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    index: number;
    /**
     * result value.
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    value: ResourceStr;
}

/**
 * Declare Filter.The Filter is used in scenarios where multi-dimensional filtering is required.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
@Component
export declare struct Filter {
    /**
     * Container in the user-defined filtering result display area.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    @BuilderParam container: () => void;

    /**
     * Multi-dimensional filtering parameters.
     * @type { Array<FilterParams> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    @Prop multiFilters: Array<FilterParams>;

    /**
     * FilterParams, Additional filter item parameter. The filter item name is displayed and can be deselected.
     * @type { FilterParams }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    @Prop additionFilters?: FilterParams;

    /**
     * FilterParams, Callback method after a user clicks a filter item.
     * @param {filterType} FilterType, Filter display style type.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    onFilterChanged: (filterResults: Array<FilterResult>) => void;

    /**
     * FilterType, Filter display style type.
     * @type { FilterType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    @Prop filterType?: FilterType;
}