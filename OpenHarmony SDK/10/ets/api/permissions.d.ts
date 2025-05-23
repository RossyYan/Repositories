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

export type Permissions =
  /**
   * @since 9
   */
  'ohos.permission.ANSWER_CALL'
  /**
   * @since 8
   */
  | 'ohos.permission.USE_BLUETOOTH'
  /**
   * @since 8
   */
  | 'ohos.permission.DISCOVER_BLUETOOTH'
  /**
   * @since 7
   */
  | 'ohos.permission.MANAGE_BLUETOOTH'
  /**
   * @since 10
   */
  | 'ohos.permission.ACCESS_BLUETOOTH'
  /**
   * @since 9
   */
  | 'ohos.permission.INTERNET'
  /**
   * @since 8
   */
  | 'ohos.permission.MODIFY_AUDIO_SETTINGS'
  /**
   * @since 7
   */
  | 'ohos.permission.ACCESS_NOTIFICATION_POLICY'
  /**
   * @since 8
   */
  | 'ohos.permission.READ_CALENDAR'
  /**
   * @since 8
   */
  | 'ohos.permission.READ_CALL_LOG'
  /**
   * @since 8
   */
  | 'ohos.permission.READ_CELL_MESSAGES'
  /**
   * @since 8
   */
  | 'ohos.permission.READ_CONTACTS'
  /**
   * @since 8
   */
  | 'ohos.permission.GET_TELEPHONY_STATE'
  /**
   * @since 10
   */
  | 'ohos.permission.GET_PHONE_NUMBERS'
  /**
   * @since 8
   */
  | 'ohos.permission.READ_MESSAGES'
  /**
   * @since 8
   */
  | 'ohos.permission.RECEIVE_MMS'
  /**
   * @since 8
   */
  | 'ohos.permission.RECEIVE_SMS'
  /**
   * @since 8
   */
  | 'ohos.permission.RECEIVE_WAP_MESSAGES'
  /**
   * @since 8
   */
  | 'ohos.permission.MICROPHONE'
  /**
   * @since 8
   */
  | 'ohos.permission.SEND_MESSAGES'
  /**
   * @since 8
   */
  | 'ohos.permission.WRITE_CALENDAR'
  /**
   * @since 8
   */
  | 'ohos.permission.WRITE_CALL_LOG'
  /**
   * @since 8
   */
  | 'ohos.permission.WRITE_CONTACTS'
  /**
   * @since 7
   */
  | 'ohos.permission.DISTRIBUTED_DATASYNC'
  /**
   * @since 9
   */
  | 'ohos.permission.DISTRIBUTED_SOFTBUS_CENTER'
  /**
   * @since 8
   */
  | 'ohos.permission.MANAGE_VOICEMAIL'
  /**
   * @since 7
   */
  | 'ohos.permission.REQUIRE_FORM'
  /**
   * @since 7
   */
  | 'ohos.permission.LOCATION_IN_BACKGROUND'
  /**
   * @since 7
   */
  | 'ohos.permission.LOCATION'
  /**
   * @since 9
   */
  | 'ohos.permission.APPROXIMATELY_LOCATION'
  /**
   * @since 7
   */
  | 'ohos.permission.MEDIA_LOCATION'
  /**
   * @since 8
   */
  | 'ohos.permission.GET_NETWORK_INFO'
  /**
   * @since 8
   */
  | 'ohos.permission.PLACE_CALL'
  /**
   * @since 9
   */
  | 'ohos.permission.CAMERA'
  /**
   * @since 8
   */
  | 'ohos.permission.SET_NETWORK_INFO'
  /**
   * @since 7
   */
  | 'ohos.permission.REMOVE_CACHE_FILES'
  /**
   * @since 7
   */
  | 'ohos.permission.READ_MEDIA'
  /**
   * @since 7
   */
  | 'ohos.permission.REBOOT'
  /**
   * @since 7
   */
  | 'ohos.permission.RUNNING_LOCK'
  /**
   * @since 7
   */
  | 'ohos.permission.WRITE_MEDIA'
  /**
   * @since 7
   */
  | 'ohos.permission.SET_TIME'
  /**
   * @since 7
   */
  | 'ohos.permission.SET_TIME_ZONE'
  /**
   * @since 7
   */
  | 'ohos.permission.DOWNLOAD_SESSION_MANAGER'
  /**
   * @since 7
   */
  | 'ohos.permission.COMMONEVENT_STICKY'
  /**
   * @since 7
   */
  | 'ohos.permission.SYSTEM_FLOAT_WINDOW'
  /**
   * @since 9
   */
  | 'ohos.permission.PRIVACY_WINDOW'
  /**
   * @since 7
   */
  | 'ohos.permission.POWER_MANAGER'
  /**
   * @since 7
   */
  | 'ohos.permission.REFRESH_USER_ACTION'
  /**
   * @since 7
   */
  | 'ohos.permission.POWER_OPTIMIZATION'
  /**
   * @since 7
   */
  | 'ohos.permission.REBOOT_RECOVERY'
  /**
   * @since 7
   */
  | 'ohos.permission.MANAGE_LOCAL_ACCOUNTS'
  /**
   * @since 7
   */
  | 'ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS'
  /**
   * @since 7
   */
  | 'ohos.permission.VIBRATE'
  /**
   * @since 7
   */
  | 'ohos.permission.ACTIVITY_MOTION'
  /**
   * @since 7
   */
  | 'ohos.permission.READ_HEALTH_DATA'
  /**
   * @since 7
   */
  | 'ohos.permission.CONNECT_IME_ABILITY'
  /**
   * @since 7
   */
  | 'ohos.permission.CONNECT_SCREEN_SAVER_ABILITY'
  /**
   * @since 7
   */
  | 'ohos.permission.READ_SCREEN_SAVER'
  /**
   * @since 7
   */
  | 'ohos.permission.WRITE_SCREEN_SAVER'
  /**
   * @since 7
   */
  | 'ohos.permission.SET_WALLPAPER'
  /**
   * @since 7
   */
  | 'ohos.permission.GET_WALLPAPER'
  /**
   * @since 7
   */
  | 'ohos.permission.CHANGE_ABILITY_ENABLED_STATE'
  /**
   * @since 7
   * @deprecated since 9
   */
  | 'ohos.permission.ACCESS_MISSIONS'
  /**
   * @since 7
   */
  | 'ohos.permission.CLEAN_BACKGROUND_PROCESSES'
  /**
   * @since 8
   */
  | 'ohos.permission.KEEP_BACKGROUND_RUNNING'
  /**
   * @since 7
   */
  | 'ohos.permission.UPDATE_CONFIGURATION'
  /**
   * @since 8
   */
  | 'ohos.permission.UPDATE_SYSTEM'
  /**
   * @since 8
   */
  | 'ohos.permission.FACTORY_RESET'
  /**
   * @since 10
   */
  | 'ohos.permission.UPDATE_MIGRATE'
  /**
   * @since 8
   */
  | 'ohos.permission.GRANT_SENSITIVE_PERMISSIONS'
  /**
   * @since 8
   */
  | 'ohos.permission.REVOKE_SENSITIVE_PERMISSIONS'
  /**
   * @since 8
   */
  | 'ohos.permission.GET_SENSITIVE_PERMISSIONS'
  /**
   * @since 7
   */
  | 'ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION'
  /**
   * @since 7
   */
  | 'ohos.permission.LISTEN_BUNDLE_CHANGE'
  /**
   * @since 7
   */
  | 'ohos.permission.GET_BUNDLE_INFO'
  /**
   * @since 7
   */
  | 'ohos.permission.ACCELEROMETER'
  /**
   * @since 7
   */
  | 'ohos.permission.GYROSCOPE'
  /**
   * @since 7
   */
  | 'ohos.permission.GET_BUNDLE_INFO_PRIVILEGED'
  /**
   * @since 7
   */
  | 'ohos.permission.INSTALL_BUNDLE'
  /**
   * @since 7
   */
  | 'ohos.permission.MANAGE_SHORTCUTS'
  /**
   * @since 7
   */
  | 'ohos.permission.radio.ACCESS_FM_AM'
  /**
   * @since 8
   */
  | 'ohos.permission.SET_TELEPHONY_STATE'
  /**
   * @since 7
   * @deprecated since 9
   */
  | 'ohos.permission.START_ABILIIES_FROM_BACKGROUND'
  /**
   * @since 9
   */
  | 'ohos.permission.START_ABILITIES_FROM_BACKGROUND'
  /**
   * @since 7
   */
  | 'ohos.permission.BUNDLE_ACTIVE_INFO'
  /**
   * @since 9
   */
  | 'ohos.permission.START_INVISIBLE_ABILITY'
  /**
   * @since 7
   */
  | 'ohos.permission.sec.ACCESS_UDID'
  /**
   * @since 7
   */
  | 'ohos.permission.LAUNCH_DATA_PRIVACY_CENTER'
  /**
   * @since 9
   */
  | 'ohos.permission.MANAGE_MEDIA_RESOURCES'
  /**
   * @since 7
   */
  | 'ohos.permission.PUBLISH_AGENT_REMINDER'
  /**
   * @since 7
   */
  | 'ohos.permission.CONTROL_TASK_SYNC_ANIMATOR'
  /**
   * @since 7
   */
  | 'ohos.permission.INPUT_MONITORING'
  /**
   * @since 9
   */
  | 'ohos.permission.MANAGE_MISSIONS'
  /**
   * @since 8
   */
  | 'ohos.permission.NOTIFICATION_CONTROLLER'
  /**
   * @since 8
   */
  | 'ohos.permission.CONNECTIVITY_INTERNAL'
  /**
   * @since 10
   */
  | 'ohos.permission.MANAGE_NET_STRATEGY'
  /**
   * @since 10
   */
  | 'ohos.permission.GET_NETWORK_STATS'
  /**
   * @since 10
   */
  | 'ohos.permission.MANAGE_VPN'
  /**
   * @since 9
   */
  | 'ohos.permission.SET_ABILITY_CONTROLLER'
  /**
   * @since 8
   */
  | 'ohos.permission.USE_USER_IDM'
  /**
   * @since 8
   */
  | 'ohos.permission.MANAGE_USER_IDM'
  /**
   * @since 10
   */
  | 'ohos.permission.NETSYS_INTERNAL'
  /**
   * @since 6
   */
  | 'ohos.permission.ACCESS_BIOMETRIC'
  /**
   * @since 8
   */
  | 'ohos.permission.ACCESS_USER_AUTH_INTERNAL'
  /**
   * @since 8
   */
  | 'ohos.permission.ACCESS_PIN_AUTH'
  /**
   * @since 9
   */
  | 'ohos.permission.ACCESS_AUTH_RESPOOL'
  /**
   * @since 9
   */
  | 'ohos.permission.ENFORCE_USER_IDM'
  /**
   * @since 7
   */
  | 'ohos.permission.GET_RUNNING_INFO'
  /**
   * @since 7
   */
  | 'ohos.permission.CLEAN_APPLICATION_DATA'
  /**
   * @since 7
   */
  | 'ohos.permission.RUNNING_STATE_OBSERVER'
  /**
   * @since 7
   */
  | 'ohos.permission.CAPTURE_SCREEN'
  /**
   * @since 8
   */
  | 'ohos.permission.GET_WIFI_INFO'
  /**
   * @since 8
   */
  | 'ohos.permission.GET_WIFI_INFO_INTERNAL'
  /**
   * @since 8
   */
  | 'ohos.permission.SET_WIFI_INFO'
  /**
   * @since 8
   */
  | 'ohos.permission.GET_WIFI_PEERS_MAC'
  /**
   * @since 8
   */
  | 'ohos.permission.GET_WIFI_LOCAL_MAC'
  /**
   * @since 8
   */
  | 'ohos.permission.GET_WIFI_CONFIG'
  /**
   * @since 8
   */
  | 'ohos.permission.SET_WIFI_CONFIG'
  /**
   * @since 8
   */
  | 'ohos.permission.MANAGE_WIFI_CONNECTION'
  /**
   * @since 9
   */
  | 'ohos.permission.DUMP'
  /**
   * @since 8
   */
  | 'ohos.permission.MANAGE_WIFI_HOTSPOT'
  /**
   * @since 7
   */
  | 'ohos.permission.GET_ALL_APP_ACCOUNTS'
  /**
   * @since 7
   */
  | 'ohos.permission.MANAGE_SECURE_SETTINGS'
  /**
   * @since 8
   */
  | 'ohos.permission.READ_DFX_SYSEVENT'
  /**
   * @since 10
   */
  | 'ohos.permission.READ_HIVIEW_SYSTEM'
  /**
   * @since 10
   */
  | 'ohos.permission.WRITE_HIVIEW_SYSTEM'
  /**
   * @since 9
   */
  | 'ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN'
  /**
   * @since 9
   */
  | 'ohos.permission.SET_ENTERPRISE_INFO'
  /**
   * @since 9
   */
  | 'ohos.permission.ACCESS_BUNDLE_DIR'
  /**
   * @since 9
   */
  | 'ohos.permission.ENTERPRISE_SUBSCRIBE_MANAGED_EVENT'
  /**
   * @since 9
   */
  | 'ohos.permission.ENTERPRISE_SET_DATETIME'
  /**
   * @since 10
   */
  | 'ohos.permission.ENTERPRISE_GET_DEVICE_INFO'
  /**
   * @since 10
   */
  | 'ohos.permission.ENTERPRISE_RESET_DEVICE'
  /**
   * @since 10
   */
  | 'ohos.permission.ENTERPRISE_SET_WIFI'
  /**
   * @since 10
   */
  | 'ohos.permission.ENTERPRISE_GET_NETWORK_INFO'
  /**
   * @since 10
   */
  | 'ohos.permission.ENTERPRISE_SET_ACCOUNT_POLICY'
  /**
   * @since 10
   */
  | 'ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY'
  /**
   * @since 10
   */
  | 'ohos.permission.ENTERPRISE_SET_NETWORK'
  /**
   * @since 10
   */
  | 'ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY'
  /**
   * @since 10
   */
  | 'ohos.permission.ENTERPRISE_SET_SCREENOFF_TIME'
  /**
   * @since 10
   */
  | 'ohos.permission.ENTERPRISE_GET_SETTINGS'
  /**
   * @since 10
   */
  | 'ohos.permission.ENTERPRISE_INSTALL_BUNDLE'
  /**
   * @since 10
   */
  | 'ohos.permission.ENTERPRISE_MANAGE_CERTIFICATE'
  /**
   * @since 10
   */
  | 'ohos.permission.ENTERPRISE_RESTRICT_POLICY'
  /**
   * @since 10
   */
  | 'ohos.permission.ENTERPRISE_MANAGE_USB'
  /**
   * @since 10
   */
  | 'ohos.permission.ENTERPRISE_MANAGE_NETWORK'
  /**
   * @since 10
   */
  | 'ohos.permission.ENTERPRISE_SET_BROWSER_POLICY'
  /**
   * @since 7
   */
  | 'ohos.permission.NFC_TAG'
  /**
   * @since 8
   */
  | 'ohos.permission.NFC_CARD_EMULATION'
  /**
   * @since 9
   */
  | 'ohos.permission.PERMISSION_USED_STATS'
  /**
   * @since 9
   */
  | 'ohos.permission.NOTIFICATION_AGENT_CONTROLLER'
  /**
   * @since 9
   */
  | 'ohos.permission.MOUNT_UNMOUNT_MANAGER'
  /**
   * @since 9
   */
  | 'ohos.permission.MOUNT_FORMAT_MANAGER'
  /**
   * @since 9
   */
  | 'ohos.permission.STORAGE_MANAGER'
  /**
   * @since 9
   */
  | 'ohos.permission.BACKUP'
  /**
   * @since 10
   */
  | 'ohos.permission.CLOUDFILE_SYNC_MANAGER'
  /**
   * @since 10
   */
  | 'ohos.permission.CLOUDFILE_SYNC'
  /**
   * @since 9
   */
  | 'ohos.permission.FILE_ACCESS_MANAGER'
  /**
   * @since 9
   */
  | 'ohos.permission.GET_DEFAULT_APPLICATION'
  /**
   * @since 9
   */
  | 'ohos.permission.SET_DEFAULT_APPLICATION'
  /**
   * @since 9
   */
  | 'ohos.permission.ACCESS_IDS'
  /**
   * @since 9
   */
  | 'ohos.permission.MANAGE_DISPOSED_APP_STATUS'
  /**
   * @since 9
   */
  | 'ohos.permission.ACCESS_DLP_FILE'
  /**
   * @since 9
   */
  | 'ohos.permission.PROVISIONING_MESSAGE'
  /**
   * @since 9
   */
  | 'ohos.permission.ACCESS_SYSTEM_SETTINGS'
  /**
   * @since 9
   */
  | 'ohos.permission.READ_IMAGEVIDEO'
  /**
   * @since 9
   */
  | 'ohos.permission.READ_AUDIO'
  /**
   * @since 9
   */
  | 'ohos.permission.READ_DOCUMENT'
  /**
   * @since 9
   */
  | 'ohos.permission.WRITE_IMAGEVIDEO'
  /**
   * @since 9
   */
  | 'ohos.permission.WRITE_AUDIO'
  /**
   * @since 9
   */
  | 'ohos.permission.WRITE_DOCUMENT'
  /**
   * @since 9
   */
  | 'ohos.permission.ABILITY_BACKGROUND_COMMUNICATION'
  /**
   * @since 9
   */
  | 'ohos.permission.securityguard.REPORT_SECURITY_INFO'
  /**
   * @since 9
   */
  | 'ohos.permission.securityguard.REQUEST_SECURITY_MODEL_RESULT'
  /**
   * @since 9
   */
  | 'ohos.permission.securityguard.REQUEST_SECURITY_EVENT_INFO'
  /**
   * @since 9
   */
  | 'ohos.permission.ACCESS_CERT_MANAGER_INTERNAL'
  /**
   * @since 9
   */
  | 'ohos.permission.ACCESS_CERT_MANAGER'
  /**
   * @since 9
   */
  | 'ohos.permission.GET_LOCAL_ACCOUNTS'
  /**
   * @since 9
   */
  | 'ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS'
  /**
   * @since 9
   */
  | 'ohos.permission.GET_DISTRIBUTED_ACCOUNTS'
  /**
   * @since 9
   */
  | 'ohos.permission.READ_ACCESSIBILITY_CONFIG'
  /**
   * @since 9
   */
  | 'ohos.permission.WRITE_ACCESSIBILITY_CONFIG'
  /**
   * @since 9
   */
  | 'ohos.permission.ACCESS_PUSH_SERVICE'
  /**
   * @since 10
   */
  | 'ohos.permission.READ_APP_PUSH_DATA'
  /**
   * @since 10
   */
  | 'ohos.permission.WRITE_APP_PUSH_DATA'
  /**
   * @since 9
   */
  | 'ohos.permission.MANAGE_AUDIO_CONFIG'
  /**
   * @since 9
   */
  | 'ohos.permission.MANAGE_CAMERA_CONFIG'
  /**
   * @since 9
   */
  | 'ohos.permission.RECEIVER_STARTUP_COMPLETED'
  /**
   * @since 9
   */
  | 'ohos.permission.READ_WHOLE_CALENDAR'
  /**
   * @since 9
   */
  | 'ohos.permission.WRITE_WHOLE_CALENDAR'
  /**
   * @since 10
   */
  | 'ohos.permission.ACCESS_SERVICE_DM'
  /**
   * @since 10
   */
  | 'ohos.permission.RUN_ANY_CODE'
  /**
   * @since 9
   */
  | 'ohos.permission.APP_TRACKING_CONSENT'
  /**
   * @since 10
   */
  | 'ohos.permission.PUBLISH_SYSTEM_COMMON_EVENT'
  /**
   * @since 10
   */
  | 'ohos.permission.ACCESS_SCREEN_LOCK_INNER'
  /**
   * @since 10
   */
  | 'ohos.permission.PRINT'
  /**
   * @since 10
   */
  | 'ohos.permission.MANAGE_PRINT_JOB'
  /**
   * @since 10
   */
  | 'ohos.permission.CHANGE_OVERLAY_ENABLED_STATE'
  /**
   * @since 10
   */
  | 'ohos.permission.CONNECT_CELLULAR_CALL_SERVICE'
  /**
   * @since 10
   */
  | 'ohos.permission.CONNECT_IMS_SERVICE'
  /**
   * @since 10
   */
  | 'ohos.permission.ACCESS_SENSING_WITH_ULTRASOUND'
  /**
   * @since 10
   */
  | 'ohos.permission.PROXY_AUTHORIZATION_URI'
  /**
   * @since 10
   */
  | 'ohos.permission.INSTALL_ENTERPRISE_BUNDLE'
  /**
   * @since 10
   */
  | 'ohos.permission.GET_INSTALLED_BUNDLE_LIST'
  /**
   * @since 10
   */
  | 'ohos.permission.ACCESS_CAST_ENGINE_MIRROR'
  /**
   * @since 10
   */
  | 'ohos.permission.ACCESS_CAST_ENGINE_STREAM'
  /**
   * @since 10
   */
  | 'ohos.permission.CLOUDDATA_CONFIG'
  /**
   * @since 10
   */
  | 'ohos.permission.DEVICE_STANDBY_EXEMPTION'
  /**
   * @since 10
   */
  | 'ohos.permission.RESTRICT_APPLICATION_ACTIVE'
  /**
   * @since 10
   */
  | 'ohos.permission.MANAGE_SENSOR'
  /**
   * @since 10
   */
  | 'ohos.permission.UPLOAD_SESSION_MANAGER'
  /**
   * @since 10
   */
  | 'ohos.permission.PREPARE_APP_TERMINATE'
  /**
   * @since 10
   */
  | 'ohos.permission.MANAGE_ECOLOGICAL_RULE'
  /**
   * @since 10
   */
  | 'ohos.permission.GET_SCENE_CODE'
  /**
   * @since 10
   */
  | 'ohos.permission.FILE_GUARD_MANAGER'
  /**
   * @since 10
   */
  | 'ohos.permission.SET_FILE_GUARD_POLICY'
  /**
   * @since 10
   */
  | 'ohos.permission.securityguard.SET_MODEL_STATE'
  /**
   * @since 10
   */
  | 'ohos.permission.hsdr.HSDR_ACCESS'
  /**
   * @since 10
   */
  | 'ohos.permission.SUPPORT_USER_AUTH'
  /**
   * @since 10
   */
  | 'ohos.permission.CAPTURE_VOICE_DOWNLINK_AUDIO'
  /**
   * @since 10
   */
  | 'ohos.permission.MANAGE_INTELLIGENT_VOICE'
  /**
   * @since 10
   */
  | 'ohos.permission.INSTALL_ENTERPRISE_MDM_BUNDLE'
  /**
   * @since 10
   */
  | 'ohos.permission.INSTALL_ENTERPRISE_NORMAL_BUNDLE'
  /**
   * @since 10
   */
  | 'ohos.permission.INSTALL_SELF_BUNDLE'
  /**
   * @since 10
   */
  | 'ohos.permission.OBSERVE_FORM_RUNNING'
  /**
   * @since 10
   */
  | 'ohos.permission.MANAGE_DEVICE_AUTH_CRED'
  /**
   * @since 10
   */
  | 'ohos.permission.UNINSTALL_BUNDLE'
  /**
   * @since 10
   */
  | 'ohos.permission.RECOVER_BUNDLE'
  /**
   * @since 10
   */
  | 'ohos.permission.GET_DOMAIN_ACCOUNTS';