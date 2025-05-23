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

module.exports = function(api) {
  api.cache(true);

  const presets = ['@babel/preset-env'];
  const plugins = [
    [
      '@babel/plugin-transform-modules-commonjs',
      {'allowTopLevelThis': true}
    ],
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-runtime'
  ];
  if (process.env.DEVICE_LEVEL === 'lite') {
    const liteArray = [
      [
        '@babel/plugin-transform-arrow-functions',
        {spec: true},
      ]
    ]
    plugins.push(...liteArray);
  }
  return {
    presets,
    plugins,
    comments: false
  };
};

