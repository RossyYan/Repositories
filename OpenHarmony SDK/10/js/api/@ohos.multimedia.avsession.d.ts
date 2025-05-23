/*
* Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
import type { ErrorCallback, AsyncCallback, Callback } from './@ohos.base';
import { WantAgent } from './@ohos.wantAgent';
import { KeyEvent } from './@ohos.multimodalInput.keyEvent';
import image from './@ohos.multimedia.image';
import type media from './@ohos.multimedia.media';
import type Context from './application/BaseContext';
/**
 * @namespace avSession
 * @syscap SystemCapability.Multimedia.AVSession.Core
 * @since 9
 */
declare namespace avSession {
    /**
     * Create an AVSession instance. An ability can only create one AVSession
     * @param { Context } context - The context of application
     * @param { string } tag - A user-defined name for this session
     * @param { AVSessionType } type - The type of session {@link AVSessionType}
     * @param { AsyncCallback<AVSession> } callback - async callback for AVSession.
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - Session service exception.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    function createAVSession(context: Context, tag: string, type: AVSessionType, callback: AsyncCallback<AVSession>): void;
    /**
     * Create an AVSession instance. An ability can only create one AVSession
     * @param { Context } context - The context of application
     * @param { string } tag - A user-defined name for this session
     * @param { AVSessionType } type - The type of session {@link AVSessionType}
     * @returns { Promise<AVSession> } Promise for AVSession
     * @throws { BusinessError } 401 - parameter check failed
     * @throws { BusinessError } 6600101 - Session service exception.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    function createAVSession(context: Context, tag: string, type: AVSessionType): Promise<AVSession>;
    /**
     * session type.
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    type AVSessionType = 'audio' | 'video';
    /**
     * AVSession object.
     * @interface AVSession
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    interface AVSession {
        /**
         * unique session Id
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        readonly sessionId: string;
        /**
         * Get current session type
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        readonly sessionType: AVSessionType;
        /**
         * Set the metadata of this session.
         * In addition to the required properties, users can fill in partially supported properties
         * @param { AVMetadata } data {@link AVMetadata}
         * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        setAVMetadata(data: AVMetadata, callback: AsyncCallback<void>): void;
        /**
         * Set the metadata of this session.
         * In addition to the required properties, users can fill in partially supported properties
         * @param { AVMetadata } data {@link AVMetadata}
         * @returns { Promise<void> } void promise when executed successfully
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        setAVMetadata(data: AVMetadata): Promise<void>;
        /**
         * Set the playback state of this session.
         * @param { AVPlaybackState } state {@link AVPlaybackState}
         * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        setAVPlaybackState(state: AVPlaybackState, callback: AsyncCallback<void>): void;
        /**
         * Set the playback state of this session.
         * @param { AVPlaybackState } state {@link AVPlaybackState}
         * @returns { Promise<void> } void promise when executed successfully
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        setAVPlaybackState(state: AVPlaybackState): Promise<void>;
        /**
         * Set the ability to start the session corresponding to
         * @param { WantAgent } ability - The WantAgent for launch the ability
         * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        setLaunchAbility(ability: WantAgent, callback: AsyncCallback<void>): void;
        /**
         * Set the ability to start the session corresponding to
         * @param { WantAgent } ability - The WantAgent for launch the ability
         * @returns { Promise<void> } void promise when executed successfully
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        setLaunchAbility(ability: WantAgent): Promise<void>;
        /**
         * Dispatch the session event of this session.
         * @param { string } event - Session event name to dispatch
         * @param { object } args - The parameters of session event
         * @param { AsyncCallback<void>} callback - The asyncCallback triggered when the command is executed successfully
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        dispatchSessionEvent(event: string, args: {
            [key: string]: Object;
        }, callback: AsyncCallback<void>): void;
        /**
         * Dispatch the session event of this session.
         * @param { string } event - Session event name to dispatch
         * @param { object } args - The parameters of session event
         * @returns { Promise<void> } void promise when executed successfully
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        dispatchSessionEvent(event: string, args: {
            [key: string]: Object;
        }): Promise<void>;
        /**
         * Set the playlist of queueItem. Identifies the content of the playlist presented by this session.
         * @param { Array<AVQueueItem> } items - An array of the AVQueueItem
         * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully.
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        setAVQueueItems(items: Array<AVQueueItem>, callback: AsyncCallback<void>): void;
        /**
         * Set the playlist of queueItem. Identifies the content of the playlist presented by this session.
         * @param { Array<AVQueueItem> } items - An array of the AVQueueItem
         * @returns { Promise<void> } void promise when executed successfully
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        setAVQueueItems(items: Array<AVQueueItem>): Promise<void>;
        /**
         * Set the name of the playlist presented by this session.
         * @param { string } title - The name of the playlist
         * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully.
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        setAVQueueTitle(title: string, callback: AsyncCallback<void>): void;
        /**
         * Set the name of the playlist presented by this session.
         * @param { string } title - The name of the playlist
         * @returns { Promise<void> } void promise when executed successfully
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        setAVQueueTitle(title: string): Promise<void>;
        /**
         * Set the custom media packets for this session.
         * @param { object } extras - The custom media packets
         * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully.
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        setExtras(extras: {
            [key: string]: Object;
        }, callback: AsyncCallback<void>): void;
        /**
         * Set the custom media packets for this session.
         * @param { object } extras - The custom media packets
         * @returns { Promise<void> } void promise when executed successfully
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        setExtras(extras: {
            [key: string]: Object;
        }): Promise<void>;
        /**
         * Get the current session's own controller
         * @param { AsyncCallback<AVSessionController> } callback - async callback for the AVSessionController.
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        getController(callback: AsyncCallback<AVSessionController>): void;
        /**
         * Get the current session's own controller
         * @returns { Promise<AVSessionController> } Promise for the AVSessionController
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        getController(): Promise<AVSessionController>;
        /**
         * Get the cast controller when the session is casted to remote device.
         * If the avsession is not under casting state, the controller will return null.
         * @param { AsyncCallback<AVCastController> } callback - async callback for the AVCastController.
         * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} - session does not exist
         * @throws {BusinessError} 6600110 - 6600109 - remote connection does not exist
         * @syscap SystemCapability.Multimedia.AVSession.AVCast
         * @since 10
         */
        getAVCastController(callback: AsyncCallback<AVCastController>): void;
        /**
         * Get the cast controller when the session is casted to remote device.
         * If the avsession is not under casting state, the controller will return null.
         * @returns { Promise<AVCastController> } Promise for the AVCastController
         * @throws {BusinessError} 6600102 - {@link #ERR_CODE_SESSION_NOT_EXIST} session does not exist
         * @throws {BusinessError} 6600110 - 6600109 - remote connection does not exist
         * @syscap SystemCapability.Multimedia.AVSession.AVCast
         * @since 10
         */
        getAVCastController(): Promise<AVCastController>;
        /**
         * Get output device information
         * @param { AsyncCallback<OutputDeviceInfo> } callback - async callback for the OutputDeviceInfo.
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        getOutputDevice(callback: AsyncCallback<OutputDeviceInfo>): void;
        /**
         * Get output device information
         * @returns { Promise<OutputDeviceInfo> } Promise for the OutputDeviceInfo
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        getOutputDevice(): Promise<OutputDeviceInfo>;
        /**
         * Get output device information
         * @returns { OutputDeviceInfo } the OutputDeviceInfo
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        getOutputDeviceSync(): OutputDeviceInfo;
        /**
         * Register play command callback.
         * As long as it is registered, it means that the ability supports this command.
         * If you cancel the callback, you need to call off {@link off}
         * When canceling the callback, need to update the supported commands list.
         * Each playback command only supports registering one callback,
         * and the new callback will replace the previous one.
         * @param { 'play' } type - Command to register 'play'.
         * @param { function } callback - Used to handle ('play') command
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        on(type: 'play', callback: () => void): void;
        /**
         * Register pause command callback.
         * As long as it is registered, it means that the ability supports this command.
         * If you cancel the callback, you need to call off {@link off}
         * When canceling the callback, need to update the supported commands list.
         * Each playback command only supports registering one callback,
         * and the new callback will replace the previous one.
         * @param { 'pause' } type - Command to register 'pause'.
         * @param { function } callback - Used to handle ('pause') command
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        on(type: 'pause', callback: () => void): void;
        /**
         * Register stop command callback.
         * As long as it is registered, it means that the ability supports this command.
         * If you cancel the callback, you need to call off {@link off}
         * When canceling the callback, need to update the supported commands list.
         * Each playback command only supports registering one callback,
         * and the new callback will replace the previous one.
         * @param { 'stop' } type - Command to register 'stop'.
         * @param { function } callback - Used to handle ('stop') command
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        on(type: 'stop', callback: () => void): void;
        /**
         * Register playNext command callback.
         * As long as it is registered, it means that the ability supports this command.
         * If you cancel the callback, you need to call off {@link off}
         * When canceling the callback, need to update the supported commands list.
         * Each playback command only supports registering one callback,
         * and the new callback will replace the previous one.
         * @param { 'playNext' } type - Command to register 'playNext'.
         * @param { function } callback - Used to handle ('playNext') command
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        on(type: 'playNext', callback: () => void): void;
        /**
         * Register playPrevious command callback.
         * As long as it is registered, it means that the ability supports this command.
         * If you cancel the callback, you need to call off {@link off}
         * When canceling the callback, need to update the supported commands list.
         * Each playback command only supports registering one callback,
         * and the new callback will replace the previous one.
         * @param { 'playPrevious' } type - Command to register 'playPrevious'.
         * @param { function } callback - Used to handle ('playPrevious') command
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        on(type: 'playPrevious', callback: () => void): void;
        /**
         * Register fastForward command callback.
         * As long as it is registered, it means that the ability supports this command.
         * If you cancel the callback, you need to call off {@link off}
         * When canceling the callback, need to update the supported commands list.
         * Each playback command only supports registering one callback,
         * and the new callback will replace the previous one.
         * @param { 'fastForward' } type - Command to register 'fastForward'.
         * @param { function } callback - Used to handle ('fastForward') command
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        on(type: 'fastForward', callback: () => void): void;
        /**
         * Register rewind command callback.
         * As long as it is registered, it means that the ability supports this command.
         * If you cancel the callback, you need to call off {@link off}
         * When canceling the callback, need to update the supported commands list.
         * Each playback command only supports registering one callback,
         * and the new callback will replace the previous one.
         * @param { 'rewind' } type - Command to register 'rewind'.
         * @param { function } callback - Used to handle ('rewind') command
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        on(type: 'rewind', callback: () => void): void;
        /**
         * Unregister play command callback.
         * When canceling the callback, need to update the supported commands list.
         * @param { 'play' } type - Command to register 'play'.
         * @param { function } callback - Used to handle ('play') command
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        off(type: 'play', callback?: () => void): void;
        /**
         * Unregister pause command callback.
         * When canceling the callback, need to update the supported commands list.
         * @param { 'pause' } type - Command to register 'pause'.
         * @param { function } callback - Used to handle ('pause') command
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        off(type: 'pause', callback?: () => void): void;
        /**
         * Unregister stop command callback.
         * When canceling the callback, need to update the supported commands list.
         * @param { 'stop' } type - Command to register 'stop'.
         * @param { function } callback - Used to handle ('stop') command
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        off(type: 'stop', callback?: () => void): void;
        /**
         * Unregister playNext command callback.
         * When canceling the callback, need to update the supported commands list.
         * @param { 'playNext' } type - Command to register 'playNext'.
         * @param { function } callback - Used to handle ('playNext') command
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        off(type: 'playNext', callback?: () => void): void;
        /**
         * Unregister playPrevious command callback.
         * When canceling the callback, need to update the supported commands list.
         * @param { 'playPrevious' } type - Command to register 'playPrevious'.
         * @param { function } callback - Used to handle ('playPrevious') command
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        off(type: 'playPrevious', callback?: () => void): void;
        /**
         * Unregister fastForward command callback.
         * When canceling the callback, need to update the supported commands list.
         * @param { 'fastForward' } type - Command to register 'fastForward'.
         * @param { function } callback - Used to handle ('fastForward') command
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        off(type: 'fastForward', callback?: () => void): void;
        /**
         * Unregister rewind command callback.
         * When canceling the callback, need to update the supported commands list.
         * @param { 'rewind' } type - Command to register 'rewind'.
         * @param { function } callback - Used to handle ('rewind') command
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        off(type: 'rewind', callback?: () => void): void;
        /**
         * Register seek command callback
         * @param { 'seek' } type - Registration Type 'seek'
         * @param { function } callback - Used to handle seek command.The callback provides the seek time(ms)
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        on(type: 'seek', callback: (time: number) => void): void;
        /**
         * Unregister seek command callback
         * @param { 'seek' } type - Registration Type 'seek'
         * @param { function } callback - Used to handle seek command.The callback provides the seek time(ms)
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        off(type: 'seek', callback?: (time: number) => void): void;
        /**
         * Register setSpeed command callback
         * @param { 'setSpeed' } type - Registration Type 'setSpeed'
         * @param { function } callback - Used to handle setSpeed command.The callback provides the speed value
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        on(type: 'setSpeed', callback: (speed: number) => void): void;
        /**
         * Unregister setSpeed command callback
         * @param { 'setSpeed' } type - Registration Type 'setSpeed'
         * @param { function } callback - Used to handle setSpeed command.The callback provides the speed value
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        off(type: 'setSpeed', callback?: (speed: number) => void): void;
        /**
         * Register setLoopMode command callback
         * @param { 'setLoopMode' } type - Registration Type 'setLoopMode'
         * @param { function } callback - Used to handle setLoopMode command.The callback provides the {@link LoopMode}
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        on(type: 'setLoopMode', callback: (mode: LoopMode) => void): void;
        /**
         * Unregister setLoopMode command callback
         * @param { 'setLoopMode' } type - Registration Type 'setLoopMode'
         * @param { function } callback - Used to handle setLoopMode command.The callback provides the {@link LoopMode}
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        off(type: 'setLoopMode', callback?: (mode: LoopMode) => void): void;
        /**
         * Register toggle favorite command callback
         * @param { 'toggleFavorite' } type - Registration Type 'toggleFavorite'
         * @param { function } callback - Used to handle toggleFavorite command.The callback provides
         * the assetId for which the favorite status needs to be switched.
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        on(type: 'toggleFavorite', callback: (assetId: string) => void): void;
        /**
         * Unregister toggle favorite command callback
         * @param { 'toggleFavorite' } type - Registration Type 'toggleFavorite'
         * @param { function } callback - Used to handle toggleFavorite command.The callback provides
         * the assetId for which the favorite status needs to be switched.
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        off(type: 'toggleFavorite', callback?: (assetId: string) => void): void;
        /**
         * Register media key handling callback
         * @param { 'handleKeyEvent' } type - Registration Type 'handleKeyEvent'
         * @param { function } callback - Used to handle key events.The callback provides the KeyEvent
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        on(type: 'handleKeyEvent', callback: (event: KeyEvent) => void): void;
        /**
         * Unregister media key handling callback
         * @param { 'handleKeyEvent' } type - Registration Type 'handleKeyEvent'
         * @param { function } callback - Used to handle key events.The callback provides the KeyEvent
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        off(type: 'handleKeyEvent', callback?: (event: KeyEvent) => void): void;
        /**
         * Register session output device change callback
         * @param { 'outputDeviceChange' } type - Registration Type 'outputDeviceChange'
         * @param { function } callback - Used to handle output device changed.
         * The callback provide the new device info {@link OutputDeviceInfo} and related connection state {@link ConnectionState}.
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception
         * @throws { BusinessError } 6600102 - The session does not exist
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        on(type: 'outputDeviceChange', callback: (state: ConnectionState, device: OutputDeviceInfo) => void): void;
        /**
         * Unregister session output device change callback
         * @param { 'outputDeviceChange' } type - Registration Type 'outputDeviceChange'
         * @param { function } callback - Used to handle output device changed.
         * The callback provide the new device info {@link OutputDeviceInfo} and related connection state {@link ConnectionState}.
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception
         * @throws { BusinessError } 6600102 - The session does not exist
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        off(type: 'outputDeviceChange', callback?: (state: ConnectionState, device: OutputDeviceInfo) => void): void;
        /**
         * Register session custom command change callback
         * @param { 'commonCommand' } type - Registration Type 'commonCommand'
         * @param { function } callback - Used to handle event when the common command is received
         * The callback provide the command name and command args
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        on(type: 'commonCommand', callback: (command: string, args: {
            [key: string]: Object;
        }) => void): void;
        /**
         * Unregister session custom command change callback
         * @param { 'commonCommand' } type - Registration Type 'commonCommand'
         * @param { function } callback - Used to cancel a specific listener
         * The callback provide the command name and command args
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        off(type: 'commonCommand', callback?: (command: string, args: {
            [key: string]: Object;
        }) => void): void;
        /**
         * Register the item to play from the playlist change callback
         * @param { 'skipToQueueItem' } type - Registration Type 'skipToQueueItem'
         * @param { function } callback - Used to handle the item to be played.
         * The callback provide the new device info {@link OutputDeviceInfo}
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        on(type: 'skipToQueueItem', callback: (itemId: number) => void): void;
        /**
         * Unregister the item to play from the playlist change callback
         * @param { 'skipToQueueItem' } type - Registration Type 'skipToQueueItem'
         * @param { function } callback - Used to handle the item to be played.
         * The callback provide the new device info {@link OutputDeviceInfo}
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        off(type: 'skipToQueueItem', callback?: (itemId: number) => void): void;
        /**
         * Stop current cast and disconnect device connection.
         * @param { AsyncCallback<void> } callback A callback instance used to return when cast stopped completed.
         * @throws { BusinessError } 6600109 - The remote connection is not established
         * @syscap SystemCapability.Multimedia.AVSession.AVCast
         * @since 10
         */
        stopCasting(callback: AsyncCallback<void>): void;
        /**
         * Stop current cast and disconnect device connection.
         * @returns { Promise<void> } void result promise when executed successfully
         * @throws { BusinessError } 6600109 - The remote connection is not established
         * @syscap SystemCapability.Multimedia.AVSession.AVCast
         * @since 10
         */
        stopCasting(): Promise<void>;
        /**
         * Activate the session, indicating that the session can accept control commands
         * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the session is activated.
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        activate(callback: AsyncCallback<void>): void;
        /**
         * Activate the session, indicating that the session can accept control commands
         * @returns { Promise<void> } void result promise when executed successfully
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        activate(): Promise<void>;
        /**
         * Deactivate the session, indicating that the session not ready to accept control commands
         * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the session is deactivated.
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        deactivate(callback: AsyncCallback<void>): void;
        /**
         * Deactivate the session, indicating that the session not ready to accept control commands
         * @returns { Promise<void> } void promise when executed successfully
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        deactivate(): Promise<void>;
        /**
         * Destroy this session, the server will clean up the session resources
         * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        destroy(callback: AsyncCallback<void>): void;
        /**
         * Destroy this session, the server will clean up the session resources
         * @returns { Promise<void> } void promise when executed successfully
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        destroy(): Promise<void>;
    }
    /**
     * The type of control command
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 10
     */
    type AVCastControlCommandType = 'play' | 'pause' | 'stop' | 'playNext' | 'playPrevious' | 'fastForward' | 'rewind' | 'seek' | 'setVolume' | 'setSpeed' | 'setLoopMode' | 'toggleFavorite';
    /**
     * The definition of command to be sent to the session
     * @interface AVCastControlCommand
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 10
     */
    interface AVCastControlCommand {
        /**
         * The command value {@link AVCastControlCommandType}
         * @syscap SystemCapability.Multimedia.AVSession.AVCast
         * @since 10
         */
        command: AVCastControlCommandType;
        /**
         * Parameter carried in the command.
         * The seek command must carry the number parameter.
         * The setVolume command must carry the number parameter.
         * The toggleFavorite command must carry the {@link AVMediaDescription.assetId} parameter.
         * The setSpeed command must carry the {@link #media.PlaybackSpeed} parameter.
         * The setLoopMode command must carry the {@link LoopMode} parameter.
         * Other commands do not need to carry parameters.
         * @syscap SystemCapability.Multimedia.AVSession.AVCast
         * @since 10
         */
        parameter?: media.PlaybackSpeed | number | string | LoopMode;
    }
    /**
     * AVCastController definition used to implement a remote control when a cast is connected
     * @interface AVCastController
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 10
     */
    interface AVCastController {
        /**
         * Get the playback status of the current player
         * @param { AsyncCallback<AVPlaybackState> } callback - The triggered asyncCallback when (getAVPlaybackState).
         * @throws { BusinessError } 6600101 - Session service exception
         * @syscap SystemCapability.Multimedia.AVSession.AVCast
         * @since 10
         */
        getAVPlaybackState(callback: AsyncCallback<AVPlaybackState>): void;
        /**
         * Get the playback status of the current player
         * @returns { Promise<AVPlaybackState> } (AVPlaybackState) returned through promise
         * @throws { BusinessError } 6600101 - Session service exception
         * @syscap SystemCapability.Multimedia.AVSession.AVCast
         * @since 10
         */
        getAVPlaybackState(): Promise<AVPlaybackState>;
        /**
         * Send control commands to remote player
         * @param { AVCastControlCommand } command The command to be send.
         * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception
         * @throws { BusinessError } 6600105 - Invalid session command
         * @throws { BusinessError } 6600109 - The remote connection is not established
         * @syscap SystemCapability.Multimedia.AVSession.AVCast
         * @since 10
         */
        sendControlCommand(command: AVCastControlCommand, callback: AsyncCallback<void>): void;
        /**
         * Send control commands to remote player
         * @param { AVCastControlCommand } command The command to be send.
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception
         * @throws { BusinessError } 6600105 - Invalid session command
         * @throws { BusinessError } 6600109 - The remote connection is not established
         * @syscap SystemCapability.Multimedia.AVSession.AVCast
         * @since 10
         */
        sendControlCommand(command: AVCastControlCommand): Promise<void>;
        /**
         * Play the current item, should contain mediaUri otherwise the playback will fail.
         * @param { AVQueueItem } item media item info.
         * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully
         * @throws {BusinessError} 401 - parameter check failed
         * @throws {BusinessError} 6600101 - Session service exception
         * @throws {BusinessError} 6600109 - The remote connection is not established
         * @syscap SystemCapability.Multimedia.AVSession.AVCast
         * @since 10
         */
        start(item: AVQueueItem, callback: AsyncCallback<void>): void;
        /**
         * Play the current item, should contain mediaUri otherwise the playback will fail.
         * @param { AVQueueItem } item media item info.
         * @returns { Promise<void> } Promise used to return the result.
         * @throws {BusinessError} 401 - parameter check failed
         * @throws {BusinessError} 6600101 - Session service exception
         * @throws {BusinessError} 6600109 - The remote connection is not established
         * @syscap SystemCapability.Multimedia.AVSession.AVCast
         * @since 10
         */
        start(item: AVQueueItem): Promise<void>;
        /**
         * Load the current item and mediaUri can be null, this is needed for sink media information displaying
         * @param { AVQueueItem } item media item info.
         * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully
         * @throws {BusinessError} 401 - parameter check failed
         * @throws {BusinessError} 6600101 - Session service exception
         * @throws {BusinessError} 6600109 - The remote connection is not established
         * @syscap SystemCapability.Multimedia.AVSession.AVCast
         * @since 10
         */
        prepare(item: AVQueueItem, callback: AsyncCallback<void>): void;
        /**
         * Load the current item and mediaUri can be null, this is needed for sink media information displaying
         * @param { AVQueueItem } item media item info.
         * @returns { Promise<void> } Promise used to return the result.
         * @throws {BusinessError} 401 - parameter check failed
         * @throws {BusinessError} 6600101 - Session service exception
         * @throws {BusinessError} 6600109 - The remote connection is not established
         * @syscap SystemCapability.Multimedia.AVSession.AVCast
         * @since 10
         */
        prepare(item: AVQueueItem): Promise<void>;
        /**
         * Get the current playing item
         * @param { AsyncCallback<AVQueueItem> } callback - The triggered asyncCallback.
         * @throws { BusinessError } 6600101 - Session service exception
         * @syscap SystemCapability.Multimedia.AVSession.AVCast
         * @since 10
         */
        getCurrentItem(callback: AsyncCallback<AVQueueItem>): void;
        /**
         * Get the current playing item
         * @returns { Promise<AVQueueItem> } (AVQueueItem) returned through promise
         * @throws { BusinessError } 6600101 - Session service exception
         * @syscap SystemCapability.Multimedia.AVSession.AVCast
         * @since 10
         */
        getCurrentItem(): Promise<AVQueueItem>;
        /**
         * Register playback state changed callback
         * @param { 'playbackStateChange' } type
         * @param { Array<keyof AVPlaybackState> | 'all' } filter - The properties of {@link AVPlaybackState} that you cared about
         * @param { function } callback - The callback used to handle playback state changed event.
         * The callback function provides the {@link AVPlaybackState} parameter.
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception
         * @syscap SystemCapability.Multimedia.AVSession.AVCast
         * @since 10
         */
        on(type: 'playbackStateChange', filter: Array<keyof AVPlaybackState> | 'all', callback: (state: AVPlaybackState) => void): void;
        /**
         * Unregister playback state changed callback
         * @param { 'playbackStateChange' } type
         * @param { function } callback - The callback used to handle playback state changed event.
         * The callback function provides the {@link AVPlaybackState} parameter.
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception
         * @syscap SystemCapability.Multimedia.AVSession.AVCast
         * @since 10
         */
        off(type: 'playbackStateChange', callback?: (state: AVPlaybackState) => void): void;
        /**
         * Register listener for current media item playback events.
         * @param { 'mediaItemChange' } type Type of the playback event to listen for.
         * @param { Callback<AVQueueItem> } callback Callback used to listen for current item changed.
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception
         * @syscap SystemCapability.Multimedia.AVSession.AVCast
         * @since 10
         */
        on(type: 'mediaItemChange', callback: Callback<AVQueueItem>): void;
        /**
         * Unregister listener for current media item playback events.
         * @param { 'mediaItemChange' } type Type of the playback event to listen for.
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception
         * @syscap SystemCapability.Multimedia.AVSession.AVCast
         * @since 10
         */
        off(type: 'mediaItemChange'): void;
        /**
         * Register playback command callback sent by remote side or media center.
         * Application needs update the new media resource when receive these commands by using playItem.
         * @param { 'playNext' } type - Type of the 'playback' event to listen for.
         * @param { Callback<void> } callback - Used to handle 'playNext' command
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception
         * @syscap SystemCapability.Multimedia.AVSession.AVCast
         * @since 10
         */
        on(type: 'playNext', callback: Callback<void>): void;
        /**
         * Unregister playback command callback sent by remote side or media center.
         * When canceling the callback, need to update the supported commands list.
         * @param { 'playNext' } type - Type of the 'playback' event to listen for.
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception
         * @syscap SystemCapability.Multimedia.AVSession.AVCast
         * @since 10
         */
        off(type: 'playNext'): void;
        /**
         * Register playback command callback sent by remote side or media center.
         * Application needs update the new media resource when receive these commands by using playItem.
         * @param { 'playPrevious' } type - Type of the 'playPrevious' to listen for.
         * @param { Callback<void> } callback - Used to handle 'playPrevious' command
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception
         * @syscap SystemCapability.Multimedia.AVSession.AVCast
         * @since 10
         */
        on(type: 'playPrevious', callback: Callback<void>): void;
        /**
         * Unregister playback command callback sent by remote side or media center.
         * When canceling the callback, need to update the supported commands list.
         * @param { 'playPrevious' } type - Type of the 'playPrevious' to listen for.
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception
         * @syscap SystemCapability.Multimedia.AVSession.AVCast
         * @since 10
         */
        off(type: 'playPrevious'): void;
        /**
         * Register listens for playback events.
         * @param { 'seekDone' } type - Type of the 'seekDone' to listen for.
         * @param { Callback<number> } callback - Callback used to listen for the playback seekDone event.
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception
         * @syscap SystemCapability.Multimedia.AVSession.AVCast
         * @since 10
         */
        on(type: 'seekDone', callback: Callback<number>): void;
        /**
         * Unregister listens for playback events.
         * @param { 'seekDone' } type - Type of the 'seekDone' to listen for.
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception
         * @syscap SystemCapability.Multimedia.AVSession.AVCast
         * @since 10
         */
        off(type: 'seekDone'): void;
        /**
         * Register listeners for playback error events.
         * @param { 'error' } type Type of the 'error' to listen for.
         * @param { ErrorCallback } callback Callback used to listen for the playback error event.
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 5400101 - No memory.
         * @throws { BusinessError } 5400102 - Operation not allowed.
         * @throws { BusinessError } 5400103 - I/O error.
         * @throws { BusinessError } 5400104 - Time out.
         * @throws { BusinessError } 5400105 - Service died.
         * @throws { BusinessError } 5400106 - Unsupport format.
         * @throws { BusinessError } 6600101 - Session service exception
         * @syscap SystemCapability.Multimedia.AVSession.AVCast
         * @since 10
         */
        on(type: 'error', callback: ErrorCallback): void;
        /**
         * Unregister listens for playback error events.
         * @param { 'error' } type Type of the 'error' to listen for.
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 5400101 - No memory.
         * @throws { BusinessError } 5400102 - Operation not allowed.
         * @throws { BusinessError } 5400103 - I/O error.
         * @throws { BusinessError } 5400104 - Time out.
         * @throws { BusinessError } 5400105 - Service died.
         * @throws { BusinessError } 5400106 - Unsupport format.
         * @throws { BusinessError } 6600101 - Session service exception
         * @syscap SystemCapability.Multimedia.AVSession.AVCast
         * @since 10
         */
        off(type: 'error'): void;
    }
    /**
     * Define the device connection state.
     * @enum { number }
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    enum ConnectionState {
        /**
         * A connection state indicating the device is in the process of connecting.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        STATE_CONNECTING = 0,
        /**
         * A connection state indicating the device is connected.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        STATE_CONNECTED = 1,
        /**
         * The default connection state indicating the device is disconnected.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        STATE_DISCONNECTED = 6
    }
    /*
     * The metadata of the current media.Used to set the properties of the current media file
     * @interface AVMetadata
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    interface AVMetadata {
        /**
         * Unique ID used to represent this media.
         * @type { string }
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        assetId: string;
        /**
         * The title of this media, for display in media center.
         * @type { ?string }
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        title?: string;
        /**
         * The artist of this media
         * @type { ?string }
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        artist?: string;
        /**
         * The author of this media
         * @type { ?string }
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        author?: string;
        /**
         * The album of this media
         * @type { ?string }
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        album?: string;
        /**
         * The writer of this media
         * @type { ?string }
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        writer?: string;
        /**
         * The composer of this media
         * @type { ?string }
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        composer?: string;
        /**
         * The duration of this media, used to automatically calculate playback position
         * @type { ?number }
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        duration?: number;
        /**
         * The image of the media as a {@link PixelMap} or an uri formatted String,
         * used to display in media center.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        mediaImage?: image.PixelMap | string;
        /**
         * The publishDate of the media
         * @type { ?Date }
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        publishDate?: Date;
        /**
         * The subtitle of the media, used for display
         * @type { ?string }
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        subtitle?: string;
        /**
         * The discription of the media, used for display
         * @type { ?string }
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        description?: string;
        /**
         * The lyric of the media, it should be in standard lyric format
         * @type { ?string }
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        lyric?: string;
        /**
         * The previous playable media id.
         * Used to tell the controller if there is a previous playable media
         * @type { ?string }
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        previousAssetId?: string;
        /**
         * The next playable media id.
         * Used to tell the controller if there is a next playable media
         * @type { ?string }
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        nextAssetId?: string;
    }
    /**
     * The description of the media for an item in the playlist of the session
     * @interface AVMediaDescription
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    interface AVMediaDescription {
        /**
         * Unique ID used to represent this media.
         * @type { string }
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        assetId: string;
        /**
         * The title of this media, for display in media center.
         * @type { ?string }
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        title?: string;
        /**
         * The subtitle of the media, used for display
         * @type { ?string }
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        subtitle?: string;
        /**
         * The description of this media
         * @type { ?string }
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        description?: string;
        /**
         * The image of this media asset displayed in the media center.
         * It can be a {@link PixelMap} or a URI formatted string,
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        mediaImage?: image.PixelMap | string;
        /**
         * Any additional attributes that can be represented as key-value pairs
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        extras?: {
            [key: string]: Object;
        };
        /**
         * The type of this media, such as video, audio and so on.
         * @type { ?string }
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        mediaType?: string;
        /**
         * The size of this media.
         * @type { ?number }
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        mediaSize?: number;
        /**
         * The album title of this media
         * @type { ?string }
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        albumTitle?: string;
        /**
         * The album cover uri of this media
         * @type { ?string }
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        albumCoverUri?: string;
        /**
         * The lyric content of the media, it should be in standard lyric format
         * @type { ?string }
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        lyricContent?: string;
        /**
         * The lyric uri of the media.
         * @type { ?string }
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        lyricUri?: string;
        /**
         * The artist of this media.
         * @type { ?string }
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        artist?: string;
        /**
         * The uri of the media, used to locate the media in some special cases
         * @type { ?string }
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        mediaUri?: string;
        /**
         * Media file descriptor.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        fdSrc?: media.AVFileDescriptor;
        /**
         * The duration of this media
         * @type { ?number }
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        duration?: number;
        /**
         * Media start position, described by milliseconds.
         * @type { ?number }
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        startPosition?: number;
        /**
         * Media credits position, described by milliseconds.
         * @type { ?number }
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        creditsPosition?: number;
        /**
         * Application name.
         * @type { ?string }
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        appName?: string;
    }
    /**
     * The item in the playlist of the session
     * @interface AVQueueItem
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    interface AVQueueItem {
        /**
         * Sequence number of the item in the playlist.
         * @type { number }
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        itemId: number;
        /**
         * The media description of the item in the playlist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        description?: AVMediaDescription;
    }
    /**
     * Used to indicate the playback state of the current media.
     * If the playback state of the media changes, it needs to be updated synchronously
     * @interface AVPlaybackState
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    interface AVPlaybackState {
        /**
         * Current playback state. See {@link PlaybackState}
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        state?: PlaybackState;
        /**
         * Current playback speed
         * @type { ?number }
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        speed?: number;
        /**
         * Current playback position of this media. See {@link PlaybackPosition}
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        position?: PlaybackPosition;
        /**
         * The current buffered time, the maximum playable position
         * @type { ?number }
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        bufferedTime?: number;
        /**
         * Current playback loop mode. See {@link LoopMode}
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        loopMode?: LoopMode;
        /**
         * Current Favorite Status
         * @type { ?boolean }
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        isFavorite?: boolean;
        /**
         * Current active item id
         * @type { ?number }
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        activeItemId?: number;
        /**
         * Current player volume
         * @type { ?number }
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        volume?: number;
        /**
         * Current custom media packets
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        extras?: {
            [key: string]: Object;
        };
    }
    /**
     * Playback position definition
     * @interface PlaybackPosition
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    interface PlaybackPosition {
        /**
         * Elapsed time(position) of this media set by the app.
         * @type { number }
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        elapsedTime: number;
        /**
         * Record the system time when elapsedTime is set.
         * @type { number }
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        updateTime: number;
    }
    /**
     * cast category indicating different playback scenes
     * @enum { number }
     * @syscap SystemCapability.Multimedia.AVSession.AVCast
     * @since 10
     */
    enum AVCastCategory {
        /**
         * The default cast type "local", media can be routed on the same device,
         * including internal speakers or audio jack on the device itself, A2DP devices.
         * @syscap SystemCapability.Multimedia.AVSession.AVCast
         * @since 10
         */
        CATEGORY_LOCAL = 0,
        /**
         * The remote category indicating the media is presenting on a remote device,
         * the application needs to get an AVCastController to control remote playback.
         * @syscap SystemCapability.Multimedia.AVSession.AVCast
         * @since 10
         */
        CATEGORY_REMOTE = 1
    }
    /**
     * Device type definition
     * @enum { number }
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    enum DeviceType {
        /**
         * A device type indicating the route is on internal speakers or audio jack on the device itself.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        DEVICE_TYPE_LOCAL = 0,
        /**
         * A device type indicating the route is on a TV.
         * @syscap SystemCapability.Multimedia.AVSession.AVCast
         * @since 10
         */
        DEVICE_TYPE_TV = 2,
        /**
         * A device type indicating the route is on a smart speaker.
         * @syscap SystemCapability.Multimedia.AVSession.AVCast
         * @since 10
         */
        DEVICE_TYPE_SMART_SPEAKER = 3,
        /**
         * A device type indicating the route is on a bluetooth device.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        DEVICE_TYPE_BLUETOOTH = 10
    }
    /**
     * Device Information Definition
     * @interface DeviceInfo
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    interface DeviceInfo {
        /**
         * The playback type supported by the device. See {@link AVCastCategory}
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        castCategory: AVCastCategory;
        /**
         * Audio device id.The length of the audioDeviceId array is greater than 1
         * if output to multiple devices at the same time.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        deviceId: string;
        /**
         * Device name. The length of the deviceName array is greater than 1
         * if output to multiple devices at the same time.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        deviceName: string;
        /**
         * device type.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        deviceType: DeviceType;
    }
    /**
     * Target Device Information Definition
     * @interface OutputDeviceInfo
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    interface OutputDeviceInfo {
        /**
         * Arrays of device information
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        devices: Array<DeviceInfo>;
    }
    /**
     * Loop Play Mode Definition
     * @enum { number }
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    enum LoopMode {
        /**
         * The default mode is sequential playback
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        LOOP_MODE_SEQUENCE = 0,
        /**
         * Single loop mode
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        LOOP_MODE_SINGLE = 1,
        /**
         * List loop mode
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        LOOP_MODE_LIST = 2,
        /**
         * Shuffle playback mode
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        LOOP_MODE_SHUFFLE = 3
    }
    /**
     * Definition of current playback state
     * @enum { number }
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    enum PlaybackState {
        /**
         * Initial state. The initial state of media file
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        PLAYBACK_STATE_INITIAL = 0,
        /**
         * Preparing state. Indicates that the media file is not ready to play,
         * the media is loading or buffering
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        PLAYBACK_STATE_PREPARE = 1,
        /**
         * Playing state.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        PLAYBACK_STATE_PLAY = 2,
        /**
         * Paused state.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        PLAYBACK_STATE_PAUSE = 3,
        /**
         * Fast forwarding state.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        PLAYBACK_STATE_FAST_FORWARD = 4,
        /**
         * Rewinding state.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        PLAYBACK_STATE_REWIND = 5,
        /**
         * Stopped state.The server will clear the media playback position and other information.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        PLAYBACK_STATE_STOP = 6,
        /**
         * Completed state.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        PLAYBACK_STATE_COMPLETED = 7,
        /**
         * Released state.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        PLAYBACK_STATE_RELEASED = 8,
        /**
         * error state.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        PLAYBACK_STATE_ERROR = 9
    }
    /**
     * Session controller,used to control media playback and get media information
     * @interface AVSessionController
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    interface AVSessionController {
        /**
         * Unique session Id
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        readonly sessionId: string;
        /**
         * Get the playback status of the current session
         * @param { AsyncCallback<AVPlaybackState> } callback - The triggered asyncCallback when (getAVPlaybackState).
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        getAVPlaybackState(callback: AsyncCallback<AVPlaybackState>): void;
        /**
         * Get the playback status of the current session
         * @returns { Promise<AVPlaybackState> } (AVPlaybackState) returned through promise
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        getAVPlaybackState(): Promise<AVPlaybackState>;
        /**
         * Get the playback status of the current session
         * @returns { AVPlaybackState } (AVPlaybackState) returned
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        getAVPlaybackStateSync(): AVPlaybackState;
        /**
         * Get the metadata of the current session
         * @param { AsyncCallback<AVMetadata> } callback - The triggered asyncCallback when (getAVMetadata).
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        getAVMetadata(callback: AsyncCallback<AVMetadata>): void;
        /**
         * Get the metadata of the current session
         * @returns { Promise<AVMetadata> } (AVMetadata) returned through promise
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        getAVMetadata(): Promise<AVMetadata>;
        /**
         * Get the metadata of the current session
         * @returns { AVMetadata } (AVMetadata) returned
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        getAVMetadataSync(): AVMetadata;
        /**
         * Get the name of the playlist of the current session
         * @param { AsyncCallback<string> } callback - The triggered asyncCallback when (getAVQueueTitle).
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        getAVQueueTitle(callback: AsyncCallback<string>): void;
        /**
         * Get the name of the playlist of the current session
         * @returns { Promise<string> } (string) returned through promise
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        getAVQueueTitle(): Promise<string>;
        /**
         * Get the name of the playlist of the current session
         * @returns { string } (string) returned
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        getAVQueueTitleSync(): string;
        /**
         * Get the playlist of the current session
         * @param { AsyncCallback<Array<AVQueueItem>> } callback - The triggered asyncCallback when (getAVQueueItems).
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        getAVQueueItems(callback: AsyncCallback<Array<AVQueueItem>>): void;
        /**
         * Get the playlist of the current session
         * @returns { Promise<Array<AVQueueItem>> } (Array<AVQueueItem>) returned through promise
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        getAVQueueItems(): Promise<Array<AVQueueItem>>;
        /**
         * Get the playlist of the current session
         * @returns { Array<AVQueueItem> } (Array<AVQueueItem>) returned
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        getAVQueueItemsSync(): Array<AVQueueItem>;
        /**
         * Set the item in the playlist to be played
         * @param { number } itemId - The serial number of the item to be played
         * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        skipToQueueItem(itemId: number, callback: AsyncCallback<void>): void;
        /**
         * Set the item in the playlist to be played
         * @param { number } itemId - The serial number of the item to be played
         * @returns { Promise<void> } void promise when executed successfully
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        skipToQueueItem(itemId: number): Promise<void>;
        /**
         * Get output device information
         * @param { AsyncCallback<OutputDeviceInfo> } callback - The triggered asyncCallback when (getOutputDevice).
         * @throws { BusinessError } 600101 - Session service exception.
         * @throws { BusinessError } 600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        getOutputDevice(callback: AsyncCallback<OutputDeviceInfo>): void;
        /**
         * Get output device information
         * @returns { Promise<OutputDeviceInfo> } (OutputDeviceInfo) returned through promise
         * @throws { BusinessError } 600101 - Session service exception.
         * @throws { BusinessError } 600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        getOutputDevice(): Promise<OutputDeviceInfo>;
        /**
         * Get output device information
         * @returns { OutputDeviceInfo } (OutputDeviceInfo) returned
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        getOutputDeviceSync(): OutputDeviceInfo;
        /**
         * Send media key event to this session
         * @param { KeyEvent } event - The KeyEvent
         * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully.
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 600101 - Session service exception.
         * @throws { BusinessError } 600102 - The session does not exist.
         * @throws { BusinessError } 600103 - The session controller does not exist.
         * @throws { BusinessError } 600105 - Invalid session command.
         * @throws { BusinessError } 600106 - The session is not activated.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        sendAVKeyEvent(event: KeyEvent, callback: AsyncCallback<void>): void;
        /**
         * Send media key event to this session
         * @param { KeyEvent } event - The KeyEvent
         * @returns { Promise<void> } void promise when executed successfully
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 600101 - Session service exception.
         * @throws { BusinessError } 600102 - The session does not exist.
         * @throws { BusinessError } 600103 - The session controller does not exist.
         * @throws { BusinessError } 600105 - Invalid session command.
         * @throws { BusinessError } 600106 - The session is not activated.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        sendAVKeyEvent(event: KeyEvent): Promise<void>;
        /**
         * Get the {@link WantAgent} of this session that can launch the session ability
         * @param { AsyncCallback<WantAgent> } callback - The asyncCallback triggered when getting the WantAgent.
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        getLaunchAbility(callback: AsyncCallback<WantAgent>): void;
        /**
         * Get the {@link WantAgent} of this session that can launch the session ability
         * @returns { Promise<WantAgent> } WantAgent promise
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        getLaunchAbility(): Promise<WantAgent>;
        /**
         * Get the adjusted playback position. The time automatically calculated by the system
         * taking into account factors such as playback status, playback speed, and application update time.
         * @returns { number } current playback position in ms.Note that the returns value of each call will be different.
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        getRealPlaybackPositionSync(): number;
        /**
         * Check if the current session is active
         * @param { AsyncCallback<boolean> } callback - The triggered asyncCallback when (isActive).
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        isActive(callback: AsyncCallback<boolean>): void;
        /**
         * Check if the current session is active
         * @returns { Promise<boolean> } boolean promise
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        isActive(): Promise<boolean>;
        /**
         * Check if the current session is active
         * @returns { boolean } boolean
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        isActiveSync(): boolean;
        /**
         * Destroy the server controller
         * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully.
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        destroy(callback: AsyncCallback<void>): void;
        /**
         * Destroy the server controller
         * @returns { Promise<void> } void promise when executed successfully
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        destroy(): Promise<void>;
        /**
         * Get commands supported by the current session
         * @param { AsyncCallback<Array<AVControlCommandType>> } callback - The triggered asyncCallback when (getValidCommands).
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        getValidCommands(callback: AsyncCallback<Array<AVControlCommandType>>): void;
        /**
         * Get commands supported by the current session
         * @returns { Promise<Array<AVControlCommandType>> } array of AVControlCommandType promise
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        getValidCommands(): Promise<Array<AVControlCommandType>>;
        /**
         * Get commands supported by the current session
         * @returns {Array<AVControlCommandType> } array of AVControlCommandType
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        getValidCommandsSync(): Array<AVControlCommandType>;
        /**
         * Send control commands to this session
         * @param { AVControlCommand } command - The command to be sent. See {@link AVControlCommand}
         * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully.
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @throws { BusinessError } 6600105 - Invalid session command.
         * @throws { BusinessError } 6600106 - The session is not activated.
         * @throws { BusinessError } 6600107 - Too many commands or events.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        sendControlCommand(command: AVControlCommand, callback: AsyncCallback<void>): void;
        /**
         * Send control commands to this session
         * @param { AVControlCommand } command - The command to be sent. See {@link AVControlCommand}
         * @returns { Promise<void> } void promise when executed successfully
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @throws { BusinessError } 6600105 - Invalid session command.
         * @throws { BusinessError } 6600106 - The session is not activated.
         * @throws { BusinessError } 6600107 - Too many commands or events.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        sendControlCommand(command: AVControlCommand): Promise<void>;
        /**
         * Send common commands to this session
         * @param { string } command - The command name to be sent.
         * @param { object } args - The parameters of session event
         * @param { AsyncCallback<void> } callback - The asyncCallback triggered when the command is executed successfully.
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @throws { BusinessError } 6600105 - Invalid session command.
         * @throws { BusinessError } 6600106 - The session is not activated.
         * @throws { BusinessError } 6600107 - Too many commands or events.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        sendCommonCommand(command: string, args: {
            [key: string]: Object;
        }, callback: AsyncCallback<void>): void;
        /**
         * Send common commands to this session
         * @param { string } command - The command name to be sent.
         * @param { object } args - The parameters of session event
         * @returns { Promise<void> } void promise when executed successfully
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @throws { BusinessError } 6600105 - Invalid session command.
         * @throws { BusinessError } 6600106 - The session is not activated.
         * @throws { BusinessError } 6600107 - Too many commands or events.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        sendCommonCommand(command: string, args: {
            [key: string]: Object;
        }): Promise<void>;
        /**
         * Get custom media packets provided by the corresponding session
         * @param { AsyncCallback<{[key: string]: Object}> } callback - The triggered asyncCallback when (getExtras).
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @throws { BusinessError } 6600105 - Invalid session command.
         * @throws { BusinessError } 6600107 - Too many commands or events.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        getExtras(callback: AsyncCallback<{
            [key: string]: Object;
        }>): void;
        /**
         * Get custom media packets provided by the corresponding session
         * @returns { Promise<{[key: string]: Object}> } the parameters of extras
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600102 - The session does not exist.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @throws { BusinessError } 6600105 - Invalid session command.
         * @throws { BusinessError } 6600107 - Too many commands or events.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        getExtras(): Promise<{
            [key: string]: Object;
        }>;
        /**
         * Register metadata changed callback
         * @param { 'metadataChange' } type
         * @param { Array<keyof AVMetadata> | 'all' } filter - The properties of {@link AVMetadata} that you cared about
         * @param { function } callback - The callback used to handle metadata changed event.
         * The callback function provides the {@link AVMetadata} parameter.
         * It only contains the properties set in the filter.
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        on(type: 'metadataChange', filter: Array<keyof AVMetadata> | 'all', callback: (data: AVMetadata) => void);
        /**
         * Unregister metadata changed callback
         * @param { 'metadataChange' } type
         * @param { function } callback - The callback used to handle metadata changed event.
         * The callback function provides the {@link AVMetadata} parameter.
         * It only contains the properties set in the filter.
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        off(type: 'metadataChange', callback?: (data: AVMetadata) => void);
        /**
         * Register playback state changed callback
         * @param { 'playbackStateChange' } type
         * @param { Array<keyof AVPlaybackState> | 'all' } filter - The properties of {@link AVPlaybackState} that you cared about
         * @param { function } callback - The callback used to handle playback state changed event.
         * The callback function provides the {@link AVPlaybackState} parameter.
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        on(type: 'playbackStateChange', filter: Array<keyof AVPlaybackState> | 'all', callback: (state: AVPlaybackState) => void);
        /**
         * Unregister playback state changed callback
         * @param { 'playbackStateChange' } type
         * @param { function } callback - The callback used to handle playback state changed event.
         * The callback function provides the {@link AVPlaybackState} parameter.
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        off(type: 'playbackStateChange', callback?: (state: AVPlaybackState) => void);
        /**
         * Register current session destroyed callback
         * @param { 'sessionDestroy' } type
         * @param { function } callback - The callback used to handle current session destroyed event.
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        on(type: 'sessionDestroy', callback: () => void);
        /**
         * Unregister current session destroyed callback
         * @param { 'sessionDestroy' } type - 'sessionDestroy'
         * @param { function } callback - The callback used to handle current session destroyed event.
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        off(type: 'sessionDestroy', callback?: () => void);
        /**
         * Register the active state of this session changed callback
         * @param { 'activeStateChange' } type - 'activeStateChange'
         * @param { function } callback - The callback used to handle the active state of this session changed event.
         * The callback function provides the changed session state.
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        on(type: 'activeStateChange', callback: (isActive: boolean) => void);
        /**
         * Unregister the active state of this session changed callback
         * @param { 'activeStateChange' } type - 'activeStateChange'
         * @param { function } callback - The callback used to handle the active state of this session changed event.
         * The callback function provides the changed session state.
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        off(type: 'activeStateChange', callback?: (isActive: boolean) => void);
        /**
         * Register the valid commands of the session changed callback
         * @param { 'validCommandChange' } type - 'validCommandChange'
         * @param { function } callback - The callback used to handle the changes.
         * The callback function provides an array of AVControlCommandType.
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        on(type: 'validCommandChange', callback: (commands: Array<AVControlCommandType>) => void);
        /**
         * Unregister the valid commands of the session changed callback
         * @param { 'validCommandChange' } type - 'validCommandChange'
         * @param { function } callback - The callback used to handle the changes.
         * The callback function provides an array of AVControlCommandType.
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        off(type: 'validCommandChange', callback?: (commands: Array<AVControlCommandType>) => void);
        /**
         * Register session output device change callback
         * @param { 'outputDeviceChange' } type - Registration Type 'outputDeviceChange'
         * @param { function } callback - Used to handle output device changed.
         * The callback provide the new device info {@link OutputDeviceInfo} and related connection state {@link ConnectionState}.
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception
         * @throws { BusinessError } 6600103 - The session controller does not exist
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        on(type: 'outputDeviceChange', callback: (state: ConnectionState, device: OutputDeviceInfo) => void): void;
        /**
         * Unregister session output device change callback
         * @param { 'outputDeviceChange' } type - Registration Type 'outputDeviceChange'
         * @param { function } callback - Used to handle output device changed.
         * The callback provide the new device info {@link OutputDeviceInfo} and related connection state {@link ConnectionState}.
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception
         * @throws { BusinessError } 6600103 - The session controller does not exist
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        off(type: 'outputDeviceChange', callback?: (state: ConnectionState, device: OutputDeviceInfo) => void): void;
        /**
         * Register session event callback
         * @param { 'sessionEvent' } type - 'sessionEvent'
         * @param { function } callback - The callback used to handle session event changed event.
         * The callback function provides the event string and key-value pair parameters.
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        on(type: 'sessionEvent', callback: (sessionEvent: string, args: {
            [key: string]: Object;
        }) => void): void;
        /**
         * Unregister session event callback
         * @param { 'sessionEvent' } type - 'sessionEvent'
         * @param { function } callback - Used to cancel a specific listener
         * The callback function provides the event string and key-value pair parameters.
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        off(type: 'sessionEvent', callback?: (sessionEvent: string, args: {
            [key: string]: Object;
        }) => void): void;
        /**
         * Register session playlist change callback
         * @param { 'queueItemsChange' } type - Registration Type 'queueItemsChange'
         * @param { function } callback - Used to handle playlist changed.
         * The callback provides the new array of AVQueueItem {@link AVQueueItem}
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        on(type: 'queueItemsChange', callback: (items: Array<AVQueueItem>) => void): void;
        /**
         * Unregister session playlist change callback
         * @param { 'queueItemsChange' } type - Registration Type 'queueItemsChange'
         * @param { function } callback - Used to handle playlist changed.
         * The callback provides the new array of AVQueueItem {@link AVQueueItem}
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        off(type: 'queueItemsChange', callback?: (items: Array<AVQueueItem>) => void): void;
        /**
         * Register the name of session playlist change callback
         * @param { 'queueTitleChange' } type - Registration Type 'queueTitleChange'
         * @param { function } callback - Used to handle name of playlist changed.
         * The callback provides the new name.
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        on(type: 'queueTitleChange', callback: (title: string) => void): void;
        /**
         * Unregister the name of session playlist change callback
         * @param { 'queueTitleChange' } type - Registration Type 'queueTitleChange'
         * @param { function } callback - Used to handle name of playlist changed.
         * The callback provides the new name.
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        off(type: 'queueTitleChange', callback?: (title: string) => void): void;
        /**
         * Register the custom media packets change callback
         * @param { 'extrasChange' } type - Registration Type 'extrasChange'
         * @param { function } callback - Used to handle custom media packets changed.
         * The callback provides the new media packets.
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        on(type: 'extrasChange', callback: (extras: {
            [key: string]: Object;
        }) => void): void;
        /**
         * Unregister the custom media packets change callback
         * @param { 'extrasChange' } type - Registration Type 'extrasChange'
         * @param { function } callback - Used to handle custom media packets changed.
         * The callback provides the new media packets.
         * @throws { BusinessError } 401 - parameter check failed
         * @throws { BusinessError } 6600101 - Session service exception.
         * @throws { BusinessError } 6600103 - The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        off(type: 'extrasChange', callback?: (extras: {
            [key: string]: Object;
        }) => void): void;
    }
    /**
     * The type of control command
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    type AVControlCommandType = 'play' | 'pause' | 'stop' | 'playNext' | 'playPrevious' | 'fastForward' | 'rewind' | 'seek' | 'setSpeed' | 'setLoopMode' | 'toggleFavorite';
    /**
     * The definition of command to be sent to the session
     * @interface AVControlCommand
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    interface AVControlCommand {
        /**
         * The command value {@link AVControlCommandType}
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        command: AVControlCommandType;
        /**
         * parameter of the command. Whether this command requires parameters, see {@link AVSessionCommand}
         * seek command requires a number parameter
         * setSpeed command requires a number parameter
         * setLoopMode command requires a {@link LoopMode} parameter.
         * toggleFavorite command requires assetId {@link AVMetadata.assetId} parameter
         * other commands need no parameter
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        parameter?: LoopMode | string | number;
    }
    /**
     * Enumerates ErrorCode types, returns in BusinessError.code.
     * @enum { number }
     * @syscap SystemCapability.Multimedia.AVSession.Core
     * @since 10
     */
    enum AVSessionErrorCode {
        /**
         * Session service exception.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        ERR_CODE_SERVICE_EXCEPTION = 6600101,
        /**
         * The session does not exist
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        ERR_CODE_SESSION_NOT_EXIST = 6600102,
        /**
         * The session controller does not exist.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        ERR_CODE_CONTROLLER_NOT_EXIST = 6600103,
        /**
         * The remote session connection failed.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        ERR_CODE_REMOTE_CONNECTION_ERR = 6600104,
        /**
         * Invalid session command.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        ERR_CODE_COMMAND_INVALID = 6600105,
        /**
         * The session is not activated.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        ERR_CODE_SESSION_INACTIVE = 6600106,
        /**
         * Too many commands or events.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        ERR_CODE_MESSAGE_OVERLOAD = 6600107,
        /**
         * Device connecting failed.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        ERR_CODE_DEVICE_CONNECTION_FAILED = 6600108,
        /**
         * The remote connection is not established.
         * @syscap SystemCapability.Multimedia.AVSession.Core
         * @since 10
         */
        ERR_CODE_REMOTE_CONNECTION_NOT_EXIST = 6600109
    }
}
export default avSession;
