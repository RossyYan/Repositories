/*
* Copyright (C) 2021 Huawei Device Co., Ltd.
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
import { ErrorCallback, AsyncCallback, Callback } from './@ohos.base';
import audio from "./@ohos.multimedia.audio";
import type { SoundPool as _SoundPool } from './multimedia/soundPool';
import type { PlayParameters as _PlayParameters } from './multimedia/soundPool';
/**
 * @namespace media
 * @since 6
 */
declare namespace media {
    /**
     * Creates an AVPlayer instance.
     * @param { AsyncCallback<AVPlayer> } callback - used to return AVPlayer instance if the operation is successful; returns null otherwise.
     * @throws { BusinessError } 5400101 - No memory. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 9
     */
    function createAVPlayer(callback: AsyncCallback<AVPlayer>): void;
    /**
     * Creates an AVPlayer instance.
     * @returns { Promise<AVPlayer> } A Promise instance used to return AVPlayer instance if the operation is successful; returns null otherwise.
     * @throws { BusinessError } 5400101 - No memory. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 9
     */
    function createAVPlayer(): Promise<AVPlayer>;
    /**
     * Creates an AVRecorder instance.
     * @param { AsyncCallback<AVRecorder> } callback - used to return AVRecorder instance if the operation is successful; returns null otherwise.
     * @throws { BusinessError } 5400101 - No memory. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 9
     */
    function createAVRecorder(callback: AsyncCallback<AVRecorder>): void;
    /**
     * Creates an AVRecorder instance.
     * @returns { Promise<AVRecorder> } A Promise instance used to return AVRecorder instance if the operation is successful; returns null otherwise.
     * @throws { BusinessError } 5400101 - No memory. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 9
     */
    function createAVRecorder(): Promise<AVRecorder>;
    /**
     * Creates an AudioPlayer instance.
     * @returns { AudioPlayer } Returns an AudioPlayer instance if the operation is successful; returns null otherwise.
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 6
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media#createAVPlayer
     */
    function createAudioPlayer(): AudioPlayer;
    /**
     * Creates an AudioRecorder instance.
     * @returns { AudioRecorder } Returns an AudioRecorder instance if the operation is successful; returns null otherwise.
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media#createAVRecorder
     */
    function createAudioRecorder(): AudioRecorder;
    /**
     * Creates an VideoPlayer instance.
     * @param { AsyncCallback<VideoPlayer> } callback - used to return AudioPlayer instance if the operation is successful; returns null otherwise.
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media#createAVPlayer
     */
    function createVideoPlayer(callback: AsyncCallback<VideoPlayer>): void;
    /**
     * Creates an VideoPlayer instance.
     * @returns { Promise<VideoPlayer> } A Promise instance used to return VideoPlayer instance if the operation is successful; returns null otherwise.
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media#createAVPlayer
     */
    function createVideoPlayer(): Promise<VideoPlayer>;
    /**
     * Creates a soundPool instance.
     *
     * @param {number} maxStreams The maximum number of simultaneous streams for this soundPool instance
     * @param {audio.AudioRendererInfo} audioRenderInfo Audio renderer information
     * @param {AsyncCallback<SoundPool>} callback Callback used to return soundPool instance if the operation is successful; returns null otherwise.
     * @throws { BusinessError } 5400101 - No memory. Return by callback.
     * @syscap SystemCapability.Multimedia.Media.SoundPool
     * @since 10
     */
    function createSoundPool(maxStreams: number, audioRenderInfo: audio.AudioRendererInfo, callback: AsyncCallback<SoundPool>): void;
    /**
     * Creates a soundPool instance.
     *
     * @param {number} maxStreams The maximum number of simultaneous streams for this soundPool instance
     * @param {audio.AudioRendererInfo} audioRenderInfo Audio renderer information
     * @returns {Promise<SoundPool>} A Promise instance used to return SoundPool instance if the operation is successful; returns null otherwise.
     * @throws { BusinessError } 5400101 - No memory. Return by promise.
     * @syscap SystemCapability.Multimedia.Media.SoundPool
     * @since 10
     */
    function createSoundPool(maxStreams: number, audioRenderInfo: audio.AudioRendererInfo): Promise<SoundPool>;
    /**
     * Manages and plays sound. Before calling an SoundPool method, you must use createSoundPool()
     * to create an SoundPool instance.
     *
     * @syscap SystemCapability.Multimedia.Media.SoundPool
     * @since 10
     */
    type SoundPool = _SoundPool;
    /**
     * Describes play parameters.
     *
     * @syscap SystemCapability.Multimedia.Media.SoundPool
     * @since 10
     */
    type PlayParameters = _PlayParameters;
    /**
     * Enumerates state change reason.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 9
     */
    enum StateChangeReason {
        /**
         * State changed by user operation.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 9
         */
        USER = 1,
        /**
         * State changed by background action.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 9
         */
        BACKGROUND = 2
    }
    /**
      * Enumerates ErrorCode types, return in BusinessError::code.
      *
      * @enum { number }
      * @syscap SystemCapability.Multimedia.Media.Core
      * @since 9
      */
    enum AVErrorCode {
        /**
         * Operation success.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 9
         */
        AVERR_OK = 0,
        /**
         * Permission denied.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 9
         */
        AVERR_NO_PERMISSION = 201,
        /**
         * Invalid parameter.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 9
         */
        AVERR_INVALID_PARAMETER = 401,
        /**
         * The api is not supported in the current version.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 9
         */
        AVERR_UNSUPPORT_CAPABILITY = 801,
        /**
         * The system memory is insufficient or the number of services reaches the upper limit.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 9
         */
        AVERR_NO_MEMORY = 5400101,
        /**
         * Current status does not allow or do not have permission to perform this operation.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 9
         */
        AVERR_OPERATE_NOT_PERMIT = 5400102,
        /**
         * Data flow exception information.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 9
         */
        AVERR_IO = 5400103,
        /**
         * System or network response timeout.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 9
         */
        AVERR_TIMEOUT = 5400104,
        /**
         * Service process died.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 9
         */
        AVERR_SERVICE_DIED = 5400105,
        /**
         * Unsupported media format.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 9
         */
        AVERR_UNSUPPORT_FORMAT = 5400106
    }
    /**
     * Describes AVPlayer states.
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 9
  
     */
    type AVPlayerState = 'idle' | 'initialized' | 'prepared' | 'playing' | 'paused' | 'completed' | 'stopped' | 'released' | 'error';
    /**
     * Manages and plays media. Before calling an AVPlayer method, you must use createAVPlayer()
     * to create an AVPlayer instance.
     *
     * @typedef AVPlayer
     * @syscap SystemCapability.Multimedia.Media.AVPlayer
     * @since 9
     */
    interface AVPlayer {
        /**
         * Prepare audio/video playback, it will request resource for playing.
         * @param { AsyncCallback<void> } callback - instance used to return when prepare completed.
         * @throws { BusinessError } 5400102 - Operation not allowed. Return by callback.
         * @throws { BusinessError } 5400106 - Unsupport format. Return by callback.
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 9
         */
        prepare(callback: AsyncCallback<void>): void;
        /**
         * Prepare audio/video playback, it will request resource for playing.
         * @returns { Promise<void> } A Promise instance used to return when prepare completed.
         * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
         * @throws { BusinessError } 5400106 - Unsupport format. Return by promise.
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 9
         */
        prepare(): Promise<void>;
        /**
         * Play audio/video playback.
         * @param { AsyncCallback<void> } callback - instance used to return when play completed.
         * @throws { BusinessError } 5400102 - Operation not allowed. Return by callback.
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 9
         */
        play(callback: AsyncCallback<void>): void;
        /**
         * Play audio/video playback.
         * @returns { Promise<void> } A Promise instance used to return when play completed.
         * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 9
         */
        play(): Promise<void>;
        /**
         * Pause audio/video playback.
         * @param { AsyncCallback<void> } callback - instance used to return when pause completed.
         * @throws { BusinessError } 5400102 - Operation not allowed. Return by callback.
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 9
         */
        pause(callback: AsyncCallback<void>): void;
        /**
         * Pause audio/video playback.
         * @returns { Promise<void> } A Promise instance used to return when pause completed.
         * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 9
         */
        pause(): Promise<void>;
        /**
         * Stop audio/video playback.
         * @param { AsyncCallback<void> } callback - instance used to return when stop completed.
         * @throws { BusinessError } 5400102 - Operation not allowed. Return by callback.
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 9
         */
        stop(callback: AsyncCallback<void>): void;
        /**
         * Stop audio/video playback.
         * @returns { Promise<void> } A Promise instance used to return when stop completed.
         * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 9
         */
        stop(): Promise<void>;
        /**
         * Reset AVPlayer, it will to idle state and can set src again.
         * @param { AsyncCallback<void> } callback - instance used to return when reset completed.
         * @throws { BusinessError } 5400102 - Operation not allowed. Return by callback.
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 9
         */
        reset(callback: AsyncCallback<void>): void;
        /**
         * Reset AVPlayer, it will to idle state and can set src again.
         * @returns { Promise<void> } A Promise instance used to return when reset completed.
         * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 9
         */
        reset(): Promise<void>;
        /**
         * Releases resources used for AVPlayer.
         * @param { AsyncCallback<void> } callback - instance used to return when release completed.
         * @throws { BusinessError } 5400102 - Operation not allowed. Return by callback.
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 9
         */
        release(callback: AsyncCallback<void>): void;
        /**
         * Releases resources used for AVPlayer.
         * @returns { Promise<void> } A Promise instance used to return when release completed.
         * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 9
         */
        release(): Promise<void>;
        /**
         * Jumps to the specified playback position.
         * @param { number } timeMs - Playback position to jump, should be in [0, duration].
         * @param { SeekMode } mode - See @SeekMode .
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 9
         */
        seek(timeMs: number, mode?: SeekMode): void;
        /**
         * Sets the volume.
         * @param { number } volume - Relative volume. The value ranges from 0.00 to 1.00. The value 1 indicates the maximum volume (100%).
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 9
         */
        setVolume(volume: number): void;
        /**
         * Get all track infos in MediaDescription, should be called after data loaded callback.
         * @param { AsyncCallback<Array<MediaDescription>> } callback - Async callback return track info in MediaDescription.
         * @throws { BusinessError } 5400102 - Operation not allowed. Return by callback.
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 9
         */
        getTrackDescription(callback: AsyncCallback<Array<MediaDescription>>): void;
        /**
         * Get all track infos in MediaDescription, should be called after data loaded callback.
         * @returns { Promise<Array<MediaDescription>> } A Promise instance used to return the track info in MediaDescription.
         * @throws { BusinessError } 5400102 - Operation not allowed. Return by promise.
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 9
         */
        getTrackDescription(): Promise<Array<MediaDescription>>;
        /**
         * Media URI. Mainstream media formats are supported.
         * Network:http://xxx
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 9
         */
        url?: string;
        /**
         * Media file descriptor. Mainstream media formats are supported.
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 9
         */
        fdSrc?: AVFileDescriptor;
        /**
         * DataSource descriptor. Supports mainstream media formats.
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 10
         */
        dataSrc?: AVDataSrcDescriptor;
        /**
         * Whether to loop media playback.
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 9
         */
        loop: boolean;
        /**
         * Describes audio interrupt mode, refer to {@link #audio.InterruptMode}. If it is not
         * set, the default mode will be used. Set it before calling the {@link #play()} in the
         * first time in order for the interrupt mode to become effective thereafter.
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 9
         */
        audioInterruptMode?: audio.InterruptMode;
        /**
         * Describes audio renderer info, refer to {@link #audio.AudioRendererInfo}. Set it before
         * calling the {@link #prepare()} in the first time in order for the audio renderer info to
         * become effective thereafter.
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 10
         */
        audioRendererInfo?: audio.AudioRendererInfo;
        /**
         * Obtains the current audio effect mode, refer to {@link #audio.AudioEffectMode}.
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 10
         */
        audioEffectMode?: audio.AudioEffectMode;
        /**
         * Current playback position.
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 9
         */
        readonly currentTime: number;
        /**
         * Playback duration, When the data source does not support seek, it returns - 1, such as a live broadcast scenario.
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 9
         */
        readonly duration: number;
        /**
         * Playback state.
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 9
         */
        readonly state: AVPlayerState;
        /**
         * Video player will use this id get a surface instance.
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 9
         */
        surfaceId?: string;
        /**
         * Video width, valid after prepared.
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 9
         */
        readonly width: number;
        /**
         * Video height, valid after prepared.
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 9
         */
        readonly height: number;
        /**
         * Video scale type. By default, the {@link #VIDEO_SCALE_TYPE_FIT_CROP} will be used, for more
         * information, refer to {@link #VideoScaleType} .
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 9
         */
        videoScaleType?: VideoScaleType;
        /**
         * Set payback speed.
         * @param { PlaybackSpeed } speed - playback speed, see @PlaybackSpeed .
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 9
         */
        setSpeed(speed: PlaybackSpeed): void;
        /**
         * select a specified bitrate to playback, only valid for HLS protocol network stream. By default, the
         * player will select the appropriate bitrate according to the network connection speed. The
         * available bitrate list reported by {@link #on('availableBitrates')}. Set it to select
         * a specified bitrate. If the specified bitrate is not in the list of available bitrate, the player
         * will select the minimal and closest one from the available bitrate list.
         * @param { number } bitrate - the playback bitrate must be expressed in bits per second.
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 9
         */
        setBitrate(bitrate: number): void;
        /**
         * Register or unregister listens for media playback events.
         * @param { 'stateChange' } type - Type of the playback event to listen for.
         * @param { function } callback - Callback used to listen for the playback stateChange event.
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 9
         */
        on(type: 'stateChange', callback: (state: AVPlayerState, reason: StateChangeReason) => void): void;
        off(type: 'stateChange'): void;
        /**
         * Register or unregister listens for media playback events.
         * @param { 'volumeChange' } type - Type of the playback event to listen for.
         * @param { Callback<number> } callback - Callback used to listen for the playback volume event.
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 9
         */
        on(type: 'volumeChange', callback: Callback<number>): void;
        off(type: 'volumeChange'): void;
        /**
         * Register or unregister listens for media playback events.
         * @param { 'endOfStream' } type - Type of the playback event to listen for.
         * @param { Callback<void> } callback - Callback used to listen for the playback end of stream.
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 9
         */
        on(type: 'endOfStream', callback: Callback<void>): void;
        off(type: 'endOfStream'): void;
        /**
         * Register or unregister listens for media playback events.
         * @param { 'seekDone' } type - Type of the playback event to listen for.
         * @param { Callback<number> } callback - Callback used to listen for the playback seekDone event.
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 9
         */
        on(type: 'seekDone', callback: Callback<number>): void;
        off(type: 'seekDone'): void;
        /**
         * Register or unregister listens for media playback events.
         * @param { 'speedDone' } type - Type of the playback event to listen for.
         * @param { Callback<number> } callback - Callback used to listen for the playback speedDone event.
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 9
         */
        on(type: 'speedDone', callback: Callback<number>): void;
        off(type: 'speedDone'): void;
        /**
         * Register or unregister listens for media playback events.
         * @param { 'bitrateDone' } type - Type of the playback event to listen for.
         * @param { Callback<number> } callback - Callback used to listen for the playback setBitrateDone event.
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 9
         */
        on(type: 'bitrateDone', callback: Callback<number>): void;
        off(type: 'bitrateDone'): void;
        /**
         * Register or unregister listens for media playback events.
         * @param { 'timeUpdate' } type - Type of the playback event to listen for.
         * @param { Callback<number> } callback - Callback used to listen for the playback timeUpdate event.
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 9
         */
        on(type: 'timeUpdate', callback: Callback<number>): void;
        off(type: 'timeUpdate'): void;
        /**
         * Register or unregister listens for media playback events.
         * @param { 'durationUpdate' } type - Type of the playback event to listen for.
         * @param { Callback<number> } callback - Callback used to listen for the playback durationUpdate event.
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 9
         */
        on(type: 'durationUpdate', callback: Callback<number>): void;
        off(type: 'durationUpdate'): void;
        /**
         * Register or unregister listens for video playback buffering events.
         * @param { 'bufferingUpdate' } type - Type of the playback buffering update event to listen for.
         * @param { function } callback - Callback used to listen for the buffering update event,
         * return BufferingInfoType and the value.
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 9
         */
        on(type: 'bufferingUpdate', callback: (infoType: BufferingInfoType, value: number) => void): void;
        off(type: 'bufferingUpdate'): void;
        /**
         * Register or unregister listens for start render video frame events.
         * @param { 'startRenderFrame' } type - Type of the playback event to listen for.
         * @param { Callback<void> } callback - Callback used to listen for the playback event return .
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 9
         */
        on(type: 'startRenderFrame', callback: Callback<void>): void;
        off(type: 'startRenderFrame'): void;
        /**
         * Register or unregister listens for video size change event.
         * @param { 'videoSizeChange' } type - Type of the playback event to listen for.
         * @param { function } callback - Callback used to listen for the playback event return video size.
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 9
         */
        on(type: 'videoSizeChange', callback: (width: number, height: number) => void): void;
        off(type: 'videoSizeChange'): void;
        /**
         * Register or unregister listens for audio interrupt event, refer to {@link #audio.InterruptEvent}
         * @param { 'audioInterrupt' } type - Type of the playback event to listen for.
         * @param { function } callback - Callback used to listen for the playback event return audio interrupt info.
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 9
         */
        on(type: 'audioInterrupt', callback: (info: audio.InterruptEvent) => void): void;
        off(type: 'audioInterrupt'): void;
        /**
         * Register or unregister listens for available bitrate list collect completed events for HLS protocol stream playback.
         * This event will be reported after the {@link #prepare} called.
         * @param { 'availableBitrates' } type - Type of the playback event to listen for.
         * @param { function } callback - Callback used to listen for the playback event return available bitrate list.
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 9
         */
        on(type: 'availableBitrates', callback: (bitrates: Array<number>) => void): void;
        off(type: 'availableBitrates'): void;
        /**
         * Register or unregister listens for playback error events.
         * @param { 'error' } type - Type of the playback error event to listen for.
         * @param { ErrorCallback } callback - Callback used to listen for the playback error event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - The parameter check failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 5400101 - No memory.
         * @throws { BusinessError } 5400102 - Operation not allowed.
         * @throws { BusinessError } 5400103 - I/O error.
         * @throws { BusinessError } 5400104 - Time out.
         * @throws { BusinessError } 5400105 - Service died.
         * @throws { BusinessError } 5400106 - Unsupport format.
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 9
         */
        on(type: 'error', callback: ErrorCallback): void;
        off(type: 'error'): void;
    }
    /**
     * Enumerates ErrorCode types, return in BusinessError::code
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 8
     */
    enum MediaErrorCode {
        /**
         * operation success.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 8
         */
        MSERR_OK = 0,
        /**
         * malloc or new memory failed. maybe system have no memory.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 8
         */
        MSERR_NO_MEMORY = 1,
        /**
         * no permission for the operation.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 8
         */
        MSERR_OPERATION_NOT_PERMIT = 2,
        /**
         * invalid argument.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 8
         */
        MSERR_INVALID_VAL = 3,
        /**
         * an I/O error occurred.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 8
         */
        MSERR_IO = 4,
        /**
         * operation time out.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 8
         */
        MSERR_TIMEOUT = 5,
        /**
         * unknown error.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 8
         */
        MSERR_UNKNOWN = 6,
        /**
         * media service died.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 8
         */
        MSERR_SERVICE_DIED = 7,
        /**
         * operation is not permit in current state.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 8
         */
        MSERR_INVALID_STATE = 8,
        /**
         * operation is not supported in current version.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 8
         */
        MSERR_UNSUPPORTED = 9
    }
    /**
     * Enumerates buffering info type, for network playback.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 8
     */
    enum BufferingInfoType {
        /**
         * begin to buffering
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 8
         */
        BUFFERING_START = 1,
        /**
         * end to buffering
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 8
         */
        BUFFERING_END = 2,
        /**
         * buffering percent
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 8
         */
        BUFFERING_PERCENT = 3,
        /**
         * cached duration in milliseconds
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 8
         */
        CACHED_DURATION = 4
    }
    /**
     * Media file descriptor. The caller needs to ensure that the fd is valid and
     * the offset and length are correct.
     *
     * @typedef AVFileDescriptor
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 9
     */
    interface AVFileDescriptor {
        /**
         * The file descriptor of audio or video source from file system. The caller
         * is responsible to close the file descriptor.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 9
         */
        fd: number;
        /**
         * The offset into the file where the data to be read, in bytes. By default,
         * the offset is zero.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 9
         */
        offset?: number;
        /**
         * The length in bytes of the data to be read. By default, the length is the
         * rest of bytes in the file from the offset.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 9
         */
        length?: number;
    }
    /**
      * DataSource descriptor. The caller needs to ensure that the fileSize and
      * callback is valid.
      *
      * @typedef AVDataSrcDescriptor
      * @syscap SystemCapability.Multimedia.Media.AVPlayer
      * @since 10
      */
    interface AVDataSrcDescriptor {
        /**
         * Size of the file, -1 means the file size is unknown, in this case,
         * seek and setSpeed can't be executed, loop can't be set, and can't replay.
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 10
         */
        fileSize: number;
        /**
         * Callback function implemented by users, which is used to fill data.
         * buffer - The buffer need to fill.
         * length - The stream length player want to get.
         * pos - The stream position player want get start, and is an optional parameter.
         * When fileSize set to -1, this parameter is not used.
         * Returns length of the data to be filled.
         * @syscap SystemCapability.Multimedia.Media.AVPlayer
         * @since 10
         */
        callback: (buffer: ArrayBuffer, length: number, pos?: number) => number;
    }
    /**
     * Describes audio playback states.
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 6
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVPlayerState
     */
    type AudioState = 'idle' | 'playing' | 'paused' | 'stopped' | 'error';
    /**
     * Manages and plays audio. Before calling an AudioPlayer method, you must use createAudioPlayer()
     * to create an AudioPlayer instance.
     *
     * @typedef AudioPlayer
     * @syscap SystemCapability.Multimedia.Media.AudioPlayer
     * @since 6
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVPlayer
     */
    interface AudioPlayer {
        /**
         * Starts audio playback.
         * @syscap SystemCapability.Multimedia.Media.AudioPlayer
         * @since 6
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#play
         */
        play(): void;
        /**
         * Pauses audio playback.
         * @syscap SystemCapability.Multimedia.Media.AudioPlayer
         * @since 6
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#pause
         */
        pause(): void;
        /**
         * Stops audio playback.
         * @syscap SystemCapability.Multimedia.Media.AudioPlayer
         * @since 6
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#stop
         */
        stop(): void;
        /**
         * Resets audio playback.
         * @syscap SystemCapability.Multimedia.Media.AudioPlayer
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#reset
         */
        reset(): void;
        /**
         * Jumps to the specified playback position.
         * @param { number } timeMs - Playback position to jump
         * @syscap SystemCapability.Multimedia.Media.AudioPlayer
         * @since 6
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#seek
         */
        seek(timeMs: number): void;
        /**
         * Sets the volume.
         * @param { number } vol - Relative volume. The value ranges from 0.00 to 1.00. The value 1 indicates the maximum volume (100%).
         * @syscap SystemCapability.Multimedia.Media.AudioPlayer
         * @since 6
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#setVolume
         */
        setVolume(vol: number): void;
        /**
         * Releases resources used for audio playback.
         * @syscap SystemCapability.Multimedia.Media.AudioPlayer
         * @since 6
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#release
         */
        release(): void;
        /**
         * Get all track infos in MediaDescription, should be called after data loaded callback.
         * @param { AsyncCallback<Array<MediaDescription>> } callback - async callback return track info in MediaDescription.
         * @syscap SystemCapability.Multimedia.Media.AudioPlayer
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#getTrackDescription
         */
        getTrackDescription(callback: AsyncCallback<Array<MediaDescription>>): void;
        /**
         * Get all track infos in MediaDescription, should be called after data loaded callback.
         * @returns { Promise<Array<MediaDescription>> } A Promise instance used to return the track info in MediaDescription.
         * @syscap SystemCapability.Multimedia.Media.AudioPlayer
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#getTrackDescription
         */
        getTrackDescription(): Promise<Array<MediaDescription>>;
        /**
         * Listens for audio playback buffering events.
         * @param { 'bufferingUpdate' } type - Type of the playback buffering update event to listen for.
         * @param { function } callback - Callback used to listen for the buffering update event,
         * return BufferingInfoType and the value.
         * @syscap SystemCapability.Multimedia.Media.AudioPlayer
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#event:bufferingUpdate
         */
        on(type: 'bufferingUpdate', callback: (infoType: BufferingInfoType, value: number) => void): void;
        /**
         * Audio media URI. Mainstream audio formats are supported.
         * local:fd://XXX, file://XXX. network:http://xxx
         * @permission ohos.permission.READ_MEDIA or ohos.permission.INTERNET
         * @syscap SystemCapability.Multimedia.Media.AudioPlayer
         * @since 6
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#url
         */
        src: string;
        /**
         * Audio file descriptor. Mainstream audio formats are supported.
         * @syscap SystemCapability.Multimedia.Media.AudioPlayer
         * @since 9
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#fdSrc
         */
        fdSrc: AVFileDescriptor;
        /**
         * Whether to loop audio playback. The value true means to loop playback.
         * @syscap SystemCapability.Multimedia.Media.AudioPlayer
         * @since 6
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#loop
         */
        loop: boolean;
        /**
         * Describes audio interrupt mode, refer to {@link #audio.InterruptMode}. If it is not
         * set, the default mode will be used. Set it before calling the {@link #play()} in the
         * first time in order for the interrupt mode to become effective thereafter.
         * @syscap SystemCapability.Multimedia.Media.AudioPlayer
         * @since 9
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#audioInterruptMode
         */
        audioInterruptMode?: audio.InterruptMode;
        /**
         * Current playback position.
         * @syscap SystemCapability.Multimedia.Media.AudioPlayer
         * @since 6
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#currentTime
         */
        readonly currentTime: number;
        /**
         * Playback duration, When the data source does not support seek, it returns - 1, such as a live broadcast scenario.
         * @syscap SystemCapability.Multimedia.Media.AudioPlayer
         * @since 6
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#duration
         */
        readonly duration: number;
        /**
         * Playback state.
         * @syscap SystemCapability.Multimedia.Media.AudioPlayer
         * @since 6
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#state
         */
        readonly state: AudioState;
        /**
         * Listens for audio playback events.
         * @param { 'play' | 'pause' | 'stop' | 'reset' | 'dataLoad' | 'finish' | 'volumeChange' } type - Type of the playback event to listen for.
         * @param { function } callback - Callback used to listen for the playback event.
         * @syscap SystemCapability.Multimedia.Media.AudioPlayer
         * @since 6
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#event:stateChange
         */
        on(type: 'play' | 'pause' | 'stop' | 'reset' | 'dataLoad' | 'finish' | 'volumeChange', callback: () => void): void;
        /**
         * Listens for audio playback events.
         * @param { 'timeUpdate' } type - Type of the playback event to listen for.
         * @param { Callback<number> } callback - Callback used to listen for the playback event.
         * @syscap SystemCapability.Multimedia.Media.AudioPlayer
         * @since 6
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#event:timeUpdate
         */
        on(type: 'timeUpdate', callback: Callback<number>): void;
        /**
         * Listens for audio interrupt event, refer to {@link #audio.InterruptEvent}
         * @param { 'audioInterrupt' } type - Type of the playback event to listen for.
         * @param { function } callback - Callback used to listen for the playback event return audio interrupt info.
         * @syscap SystemCapability.Multimedia.Media.AudioPlayer
         * @since 9
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#event:audioInterrupt
         */
        on(type: 'audioInterrupt', callback: (info: audio.InterruptEvent) => void): void;
        /**
         * Listens for playback error events.
         * @param { 'error' } type - Type of the playback error event to listen for.
         * @param { ErrorCallback } callback - Callback used to listen for the playback error event.
         * @syscap SystemCapability.Multimedia.Media.AudioPlayer
         * @since 6
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#event:error
         */
        on(type: 'error', callback: ErrorCallback): void;
    }
    /**
    * Describes media recorder states.
    * @syscap SystemCapability.Multimedia.Media.AVRecorder
    * @since 9
    */
    type AVRecorderState = 'idle' | 'prepared' | 'started' | 'paused' | 'stopped' | 'released' | 'error';
    /**
     * Manages and record audio/video. Before calling an AVRecorder method, you must use createAVRecorder()
     * to create an AVRecorder instance.
     *
     * @typedef AVRecorder
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 9
     */
    interface AVRecorder {
        /**
         * Prepares for recording.
         * @permission ohos.permission.MICROPHONE
         * @param { AVRecorderConfig } config - Recording parameters.
         * @param { AsyncCallback<void> } callback - A callback instance used to return when prepare completed.
         * @throws { BusinessError } 201 - Permission denied. Return by callback.
         * @throws { BusinessError } 401 - Parameter error. Return by callback.
         * @throws { BusinessError } 5400102 - Operate not permit. Return by callback.
         * @throws { BusinessError } 5400105 - Service died. Return by callback.
         * @syscap SystemCapability.Multimedia.Media.AVRecorder
         * @since 9
         */
        prepare(config: AVRecorderConfig, callback: AsyncCallback<void>): void;
        /**
         * Prepares for recording.
         * @permission ohos.permission.MICROPHONE
         * @param { AVRecorderConfig } config - Recording parameters.
         * @returns { Promise<void> } A Promise instance used to return when prepare completed.
         * @throws { BusinessError } 201 - Permission denied. Return by promise.
         * @throws { BusinessError } 401 - Parameter error. Return by promise.
         * @throws { BusinessError } 5400102 - Operate not permit. Return by promise.
         * @throws { BusinessError } 5400105 - Service died. Return by promise.
         * @syscap SystemCapability.Multimedia.Media.AVRecorder
         * @since 9
         */
        prepare(config: AVRecorderConfig): Promise<void>;
        /**
         * Get input surface.it must be called between prepare completed and start.
         * @param { AsyncCallback<string> } callback - Callback used to return the input surface id in string.
         * @throws { BusinessError } 5400102 - Operate not permit. Return by callback.
         * @throws { BusinessError } 5400103 - IO error. Return by callback.
         * @throws { BusinessError } 5400105 - Service died. Return by callback.
         * @syscap SystemCapability.Multimedia.Media.AVRecorder
         * @since 9
         */
        getInputSurface(callback: AsyncCallback<string>): void;
        /**
         * Get input surface. it must be called between prepare completed and start.
         * @returns { Promise<string> } A Promise instance used to return the input surface id in string.
         * @throws { BusinessError } 5400102 - Operate not permit. Return by promise.
         * @throws { BusinessError } 5400103 - IO error. Return by promise.
         * @throws { BusinessError } 5400105 - Service died. Return by promise.
         * @syscap SystemCapability.Multimedia.Media.AVRecorder
         * @since 9
         */
        getInputSurface(): Promise<string>;
        /**
         * Start AVRecorder, it will to started state.
         * @param { AsyncCallback<void> } callback - A callback instance used to return when start completed.
         * @throws { BusinessError } 5400102 - Operate not permit. Return by callback.
         * @throws { BusinessError } 5400103 - IO error. Return by callback.
         * @throws { BusinessError } 5400105 - Service died. Return by callback.
         * @syscap SystemCapability.Multimedia.Media.AVRecorder
         * @since 9
         */
        start(callback: AsyncCallback<void>): void;
        /**
         * Start AVRecorder, it will to started state.
         * @returns { Promise<void> } A Promise instance used to return when start completed.
         * @throws { BusinessError } 5400102 - Operate not permit. Return by promise.
         * @throws { BusinessError } 5400103 - IO error. Return by promise.
         * @throws { BusinessError } 5400105 - Service died. Return by promise.
         * @syscap SystemCapability.Multimedia.Media.AVRecorder
         * @since 9
         */
        start(): Promise<void>;
        /**
         * Start AVRecorder, it will to paused state.
         * @param { AsyncCallback<void> } callback - A callback instance used to return when pause completed.
         * @throws { BusinessError } 5400102 - Operate not permit. Return by callback.
         * @throws { BusinessError } 5400103 - IO error. Return by callback.
         * @throws { BusinessError } 5400105 - Service died. Return by callback.
         * @syscap SystemCapability.Multimedia.Media.AVRecorder
         * @since 9
         */
        pause(callback: AsyncCallback<void>): void;
        /**
         * Start AVRecorder, it will to paused state.
         * @returns { Promise<void> } A Promise instance used to return when pause completed.
         * @throws { BusinessError } 5400102 - Operate not permit. Return by promise.
         * @throws { BusinessError } 5400103 - IO error. Return by promise.
         * @throws { BusinessError } 5400105 - Service died. Return by promise.
         * @syscap SystemCapability.Multimedia.Media.AVRecorder
         * @since 9
         */
        pause(): Promise<void>;
        /**
         * Resume AVRecorder, it will to started state.
         * @param { AsyncCallback<void> } callback - A callback instance used to return when resume completed.
         * @throws { BusinessError } 5400102 - Operate not permit. Return by callback.
         * @throws { BusinessError } 5400103 - IO error. Return by callback.
         * @throws { BusinessError } 5400105 - Service died. Return by callback.
         * @syscap SystemCapability.Multimedia.Media.AVRecorder
         * @since 9
         */
        resume(callback: AsyncCallback<void>): void;
        /**
         * Resume AVRecorder, it will to started state.
         * @returns { Promise<void> } A Promise instance used to return when resume completed.
         * @throws { BusinessError } 5400102 - Operate not permit. Return by promise.
         * @throws { BusinessError } 5400103 - IO error. Return by promise.
         * @throws { BusinessError } 5400105 - Service died. Return by promise.
         * @syscap SystemCapability.Multimedia.Media.AVRecorder
         * @since 9
         */
        resume(): Promise<void>;
        /**
         * Stop AVRecorder, it will to stopped state.
         * @param { AsyncCallback<void> } callback - A callback instance used to return when stop completed.
         * @throws { BusinessError } 5400102 - Operate not permit. Return by callback.
         * @throws { BusinessError } 5400103 - IO error. Return by callback.
         * @throws { BusinessError } 5400105 - Service died. Return by callback.
         * @syscap SystemCapability.Multimedia.Media.AVRecorder
         * @since 9
         */
        stop(callback: AsyncCallback<void>): void;
        /**
         * Stop AVRecorder, it will to stopped state.
         * @returns { Promise<void> } A Promise instance used to return when stop completed.
         * @throws { BusinessError } 5400102 - Operate not permit. Return by promise.
         * @throws { BusinessError } 5400103 - IO error. Return by promise.
         * @throws { BusinessError } 5400105 - Service died. Return by promise.
         * @syscap SystemCapability.Multimedia.Media.AVRecorder
         * @since 9
         */
        stop(): Promise<void>;
        /**
         * Reset AVRecorder, it will to idle state.
         * @param { AsyncCallback<void> } callback - A callback instance used to return when reset completed.
         * @throws { BusinessError } 5400103 - IO error. Return by callback.
         * @throws { BusinessError } 5400105 - Service died. Return by callback.
         * @syscap SystemCapability.Multimedia.Media.AVRecorder
         * @since 9
         */
        reset(callback: AsyncCallback<void>): void;
        /**
         * Reset AVRecorder, it will to idle state.
         * @returns { Promise<void> } A Promise instance used to return when reset completed.
         * @throws { BusinessError } 5400103 - IO error. Return by promise.
         * @throws { BusinessError } 5400105 - Service died. Return by promise.
         * @syscap SystemCapability.Multimedia.Media.AVRecorder
         * @since 9
         */
        reset(): Promise<void>;
        /**
         * Releases resources used for AVRecorder, it will to released state.
         * @param { AsyncCallback<void> } callback - A callback instance used to return when release completed.
         * @throws { BusinessError } 5400105 - Service died. Return by callback.
         * @syscap SystemCapability.Multimedia.Media.AVRecorder
         * @since 9
         */
        release(callback: AsyncCallback<void>): void;
        /**
         * Releases resources used for AVRecorder, it will to released state.
         * @returns { Promise<void> } A Promise instance used to return when release completed.
         * @throws { BusinessError } 5400105 - Service died. Return by callback.
         * @syscap SystemCapability.Multimedia.Media.AVRecorder
         * @since 9
         */
        release(): Promise<void>;
        /**
         * Recorder state.
         * @syscap SystemCapability.Multimedia.Media.AVRecorder
         * @since 9
         */
        readonly state: AVRecorderState;
        /**
         * Listens for recording stateChange events.
         * @param { 'stateChange' } type - Type of the recording event to listen for.
         * @param { function } callback - Callback used to listen for the recorder stateChange event.
         * @throws { BusinessError } 5400103 - IO error. Return by callback.
         * @throws { BusinessError } 5400105 - Service died. Return by callback.
         * @syscap SystemCapability.Multimedia.Media.AVRecorder
         * @since 9
         */
        on(type: 'stateChange', callback: (state: AVRecorderState, reason: StateChangeReason) => void): void;
        /**
         * Listens for recording error events.
         * @param { 'error' } type - Type of the recording error event to listen for.
         * @param { ErrorCallback } callback - Callback used to listen for the recorder error event.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - The parameter check failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 5400101 - No memory.
         * @throws { BusinessError } 5400102 - Operation not allowed.
         * @throws { BusinessError } 5400103 - I/O error.
         * @throws { BusinessError } 5400104 - Time out.
         * @throws { BusinessError } 5400105 - Service died.
         * @throws { BusinessError } 5400106 - Unsupport format.
         * @syscap SystemCapability.Multimedia.Media.AVRecorder
         * @since 9
         */
        on(type: 'error', callback: ErrorCallback): void;
        /**
         * Cancel Listens for recording stateChange events.
         * @param { 'stateChange' } type - Type of the recording stateChange event to listen for.
         * @syscap SystemCapability.Multimedia.Media.AVRecorder
         * @since 9
         */
        off(type: 'stateChange'): void;
        /**
         * Cancel Listens for recording error events.
         * @param { 'error' } type - Type of the recording error event to listen for.
         * @syscap SystemCapability.Multimedia.Media.AVRecorder
         * @since 9
         */
        off(type: 'error'): void;
    }
    /**
     * Enumerates audio encoding formats, it will be deprecated after API8, use @CodecMimeType to replace.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6
     * @deprecated since 8
     * @useinstead ohos.multimedia.media/media.CodecMimeType
     */
    enum AudioEncoder {
        /**
         * Default audio encoding format, which is AMR-NB.
         * @syscap SystemCapability.Multimedia.Media.AudioRecorder
         * @since 6
         * @deprecated since 8
         */
        DEFAULT = 0,
        /**
         * Indicates the AMR-NB audio encoding format.
         * @syscap SystemCapability.Multimedia.Media.AudioRecorder
         * @since 6
         * @deprecated since 8
         */
        AMR_NB = 1,
        /**
         * Indicates the AMR-WB audio encoding format.
         * @syscap SystemCapability.Multimedia.Media.AudioRecorder
         * @since 6
         * @deprecated since 8
         */
        AMR_WB = 2,
        /**
         * Advanced Audio Coding Low Complexity (AAC-LC).
         * @syscap SystemCapability.Multimedia.Media.AudioRecorder
         * @since 6
         * @deprecated since 8
         */
        AAC_LC = 3,
        /**
         * High-Efficiency Advanced Audio Coding (HE-AAC).
         * @syscap SystemCapability.Multimedia.Media.AudioRecorder
         * @since 6
         * @deprecated since 8
         */
        HE_AAC = 4
    }
    /**
     * Enumerates audio output formats, it will be deprecated after API8, use @ContainerFormatType to replace.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6
     * @deprecated since 8
     * @useinstead ohos.multimedia.media/media.ContainerFormatType
     */
    enum AudioOutputFormat {
        /**
         * Default audio output format, which is Moving Pictures Expert Group 4 (MPEG-4).
         * @syscap SystemCapability.Multimedia.Media.AudioRecorder
         * @since 6
         * @deprecated since 8
         */
        DEFAULT = 0,
        /**
         * Indicates the Moving Picture Experts Group-4 (MPEG4) media format.
         * @syscap SystemCapability.Multimedia.Media.AudioRecorder
         * @since 6
         * @deprecated since 8
         */
        MPEG_4 = 2,
        /**
         * Indicates the Adaptive Multi-Rate Narrowband (AMR-NB) media format.
         * @syscap SystemCapability.Multimedia.Media.AudioRecorder
         * @since 6
         * @deprecated since 8
         */
        AMR_NB = 3,
        /**
         * Indicates the Adaptive Multi-Rate Wideband (AMR-WB) media format.
         * @syscap SystemCapability.Multimedia.Media.AudioRecorder
         * @since 6
         * @deprecated since 8
         */
        AMR_WB = 4,
        /**
         * Audio Data Transport Stream (ADTS), a transmission stream format of Advanced Audio Coding (AAC) audio.
         * @syscap SystemCapability.Multimedia.Media.AudioRecorder
         * @since 6
         * @deprecated since 8
         */
        AAC_ADTS = 6
    }
    /**
     * Provides the geographical location definitions for media resources.
     *
     * @typedef Location
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 6
     */
    interface Location {
        /**
         * Latitude.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 6
         */
        latitude: number;
        /**
         * Longitude.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 6
         */
        longitude: number;
    }
    /**
     * Provides the audio recorder configuration definitions.
     *
     * @typedef AudioRecorderConfig
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVRecorderConfig
     */
    interface AudioRecorderConfig {
        /**
         * Audio encoding format. The default value is DEFAULT, it will be deprecated after API8.
         * use "audioEncoderMime" instead.
         * @syscap SystemCapability.Multimedia.Media.AudioRecorder
         * @since 6
         * @deprecated since 8
         * @useinstead ohos.multimedia.media/media.AudioRecorderConfig.audioEncoderMime
         */
        audioEncoder?: AudioEncoder;
        /**
         * Audio encoding bit rate.
         * @syscap SystemCapability.Multimedia.Media.AudioRecorder
         * @since 6
         * @deprecated since 9
         */
        audioEncodeBitRate?: number;
        /**
         * Audio sampling rate.
         * @syscap SystemCapability.Multimedia.Media.AudioRecorder
         * @since 6
         * @deprecated since 9
         */
        audioSampleRate?: number;
        /**
         * Number of audio channels.
         * @syscap SystemCapability.Multimedia.Media.AudioRecorder
         * @since 6
         * @deprecated since 9
         */
        numberOfChannels?: number;
        /**
         * Audio output format. The default value is DEFAULT, it will be deprecated after API8.
         * it will be replaced with "fileFormat".
         * @syscap SystemCapability.Multimedia.Media.AudioRecorder
         * @since 6
         * @deprecated since 8
         * @useinstead ohos.multimedia.media/media.AudioRecorderConfig.fileFormat
         */
        format?: AudioOutputFormat;
        /**
         * Audio output uri.support two kind of uri now.
         * format like: scheme + "://" + "context".
         * file:  file://path
         * fd:    fd://fd
         * @syscap SystemCapability.Multimedia.Media.AudioRecorder
         * @since 6
         * @deprecated since 9
         */
        uri: string;
        /**
         * Geographical location information.
         * @syscap SystemCapability.Multimedia.Media.AudioRecorder
         * @since 6
         * @deprecated since 9
         */
        location?: Location;
        /**
         * audio encoding format MIME. it used to replace audioEncoder.
         * @syscap SystemCapability.Multimedia.Media.AudioRecorder
         * @since 8
         * @deprecated since 9
         */
        audioEncoderMime?: CodecMimeType;
        /**
         * output file format. see @ContainerFormatType , it used to replace "format".
         * @syscap SystemCapability.Multimedia.Media.AudioRecorder
         * @since 8
         * @deprecated since 9
         */
        fileFormat?: ContainerFormatType;
    }
    /**
     * Manages and record audio. Before calling an AudioRecorder method, you must use createAudioRecorder()
     * to create an AudioRecorder instance.
     *
     * @typedef AudioRecorder
     * @syscap SystemCapability.Multimedia.Media.AudioRecorder
     * @since 6
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVRecorder
     */
    interface AudioRecorder {
        /**
         * Prepares for recording.
         * @permission ohos.permission.MICROPHONE
         * @param { AudioRecorderConfig } config - Recording parameters.
         * @syscap SystemCapability.Multimedia.Media.AudioRecorder
         * @since 6
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVRecorder#prepare
         */
        prepare(config: AudioRecorderConfig): void;
        /**
         * Starts audio recording.
         * @syscap SystemCapability.Multimedia.Media.AudioRecorder
         * @since 6
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVRecorder#start
         */
        start(): void;
        /**
         * Pauses audio recording.
         * @syscap SystemCapability.Multimedia.Media.AudioRecorder
         * @since 6
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVRecorder#pause
         */
        pause(): void;
        /**
         * Resumes audio recording.
         * @syscap SystemCapability.Multimedia.Media.AudioRecorder
         * @since 6
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVRecorder#resume
         */
        resume(): void;
        /**
         * Stops audio recording.
         * @syscap SystemCapability.Multimedia.Media.AudioRecorder
         * @since 6
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVRecorder#stop
         */
        stop(): void;
        /**
         * Releases resources used for audio recording.
         * @syscap SystemCapability.Multimedia.Media.AudioRecorder
         * @since 6
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVRecorder#release
         */
        release(): void;
        /**
         * Resets audio recording.
         * Before resetting audio recording, you must call stop() to stop recording. After audio recording is reset,
         * you must call prepare() to set the recording configurations for another recording.
         * @syscap SystemCapability.Multimedia.Media.AudioRecorder
         * @since 6
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVRecorder#reset
         */
        reset(): void;
        /**
         * Listens for audio recording events.
         * @param { 'prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset' } type - Type of the audio recording event to listen for.
         * @param { function } callback - Callback used to listen for the audio recording event.
         * @syscap SystemCapability.Multimedia.Media.AudioRecorder
         * @since 6
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVRecorder#on
         */
        on(type: 'prepare' | 'start' | 'pause' | 'resume' | 'stop' | 'release' | 'reset', callback: () => void): void;
        /**
         * Listens for audio recording error events.
         * @param { 'error' } type - Type of the audio recording error event to listen for.
         * @param { ErrorCallback } callback - Callback used to listen for the audio recording error event.
         * @syscap SystemCapability.Multimedia.Media.AudioRecorder
         * @since 6
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVRecorder#on
         */
        on(type: 'error', callback: ErrorCallback): void;
    }
    /**
     * Describes video playback states.
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVPlayerState
     */
    type VideoPlayState = 'idle' | 'prepared' | 'playing' | 'paused' | 'stopped' | 'error';
    /**
     * Enumerates playback speed.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8
     */
    enum PlaybackSpeed {
        /**
         * playback at 0.75x normal speed
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 8
         */
        SPEED_FORWARD_0_75_X = 0,
        /**
         * playback at normal speed
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 8
         */
        SPEED_FORWARD_1_00_X = 1,
        /**
         * playback at 1.25x normal speed
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 8
         */
        SPEED_FORWARD_1_25_X = 2,
        /**
         * playback at 1.75x normal speed
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 8
         */
        SPEED_FORWARD_1_75_X = 3,
        /**
         * playback at 2.0x normal speed
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 8
         */
        SPEED_FORWARD_2_00_X = 4
    }
    /**
     * Manages and plays video. Before calling an video method, you must use createVideoPlayer() to create an VideoPlayer
     * instance.
     *
     * @typedef VideoPlayer
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.multimedia.media/media.AVPlayer
     */
    interface VideoPlayer {
        /**
         * Set display surface.
         * @param {string} surfaceId - surface id, video player will use this id get a surface instance.
         * @param { AsyncCallback<void> } callback - A callback instance used to return when release output buffer completed.
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#surfaceId
         */
        setDisplaySurface(surfaceId: string, callback: AsyncCallback<void>): void;
        /**
         * Set display surface.
         * @param {string} surfaceId - surface id, video player will use this id get a surface instance.
         * @returns { Promise<void> } A Promise instance used to return when release output buffer completed.
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#surfaceId
         */
        setDisplaySurface(surfaceId: string): Promise<void>;
        /**
         * Prepare video playback, it will request resource for playing.
         * @param { AsyncCallback<void> } callback - A callback instance used to return when prepare completed.
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#prepare
         */
        prepare(callback: AsyncCallback<void>): void;
        /**
         * Prepare video playback, it will request resource for playing.
         * @returns { Promise<void> } A Promise instance used to return when prepare completed.
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#prepare
         */
        prepare(): Promise<void>;
        /**
         * Starts video playback.
         * @param { AsyncCallback<void> } callback - A callback instance used to return when start completed.
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#play
         */
        play(callback: AsyncCallback<void>): void;
        /**
         * Starts video playback.
         * @returns { Promise<void> } A Promise instance used to return when start completed.
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#play
         */
        play(): Promise<void>;
        /**
         * Pauses video playback.
         * @param { AsyncCallback<void> } callback - A callback instance used to return when pause completed.
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#pause
         */
        pause(callback: AsyncCallback<void>): void;
        /**
         * Pauses video playback.
         * @returns { Promise<void> } A Promise instance used to return when pause completed.
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#pause
         */
        pause(): Promise<void>;
        /**
         * Stops video playback.
         * @param { AsyncCallback<void> } callback - A callback instance used to return when stop completed.
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#stop
         */
        stop(callback: AsyncCallback<void>): void;
        /**
         * Stops video playback.
         * @returns { Promise<void> } A Promise instance used to return when stop completed.
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#stop
         */
        stop(): Promise<void>;
        /**
         * Resets video playback, it will release the resource.
         * @param { AsyncCallback<void> } callback - A callback instance used to return when reset completed.
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#reset
         */
        reset(callback: AsyncCallback<void>): void;
        /**
         * Resets video playback, it will release the resource.
         * @returns { Promise<void> } A Promise instance used to return when reset completed.
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#reset
         */
        reset(): Promise<void>;
        /**
         * Jumps to the specified playback position by default SeekMode(SEEK_PREV_SYNC),
         * the performance may be not the best.
         * @param { number } timeMs - Playback position to jump
         * @param { AsyncCallback<number> } callback - A callback instance used to return when seek completed
         * and return the seeking position result.
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#seek
         */
        seek(timeMs: number, callback: AsyncCallback<number>): void;
        /**
         * Jumps to the specified playback position.
         * @param { number } timeMs - Playback position to jump
         * @param { SeekMode } mode - seek mode, see @SeekMode .
         * @param { AsyncCallback<number> } callback - A callback instance used to return when seek completed
         * and return the seeking position result.
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#seek
         */
        seek(timeMs: number, mode: SeekMode, callback: AsyncCallback<number>): void;
        /**
         * Jumps to the specified playback position.
         * @param { number } timeMs - Playback position to jump
         * @param { SeekMode } mode - seek mode, see @SeekMode .
         * @returns { Promise<number> } A Promise instance used to return when seek completed
         * and return the seeking position result.
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#seek
         */
        seek(timeMs: number, mode?: SeekMode): Promise<number>;
        /**
         * Sets the volume.
         * @param { number } vol - Relative volume. The value ranges from 0.00 to 1.00. The value 1 indicates the maximum volume (100%).
         * @param { AsyncCallback<void> } callback - A callback instance used to return when set volume completed.
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#setVolume
         */
        setVolume(vol: number, callback: AsyncCallback<void>): void;
        /**
         * Sets the volume.
         * @param { number } vol - Relative volume. The value ranges from 0.00 to 1.00. The value 1 indicates the maximum volume (100%).
         * @returns { Promise<void> } A Promise instance used to return when set volume completed.
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#setVolume
         */
        setVolume(vol: number): Promise<void>;
        /**
         * Releases resources used for video playback.
         * @param { AsyncCallback<void> } callback - A callback instance used to return when release completed.
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#release
         */
        release(callback: AsyncCallback<void>): void;
        /**
         * Releases resources used for video playback.
         * @returns { Promise<void> } A Promise instance used to return when release completed.
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#release
         */
        release(): Promise<void>;
        /**
         * Get all track infos in MediaDescription, should be called after data loaded callback.
         * @param { AsyncCallback<Array<MediaDescription>> } callback - async callback return track info in MediaDescription.
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#getTrackDescription
         */
        getTrackDescription(callback: AsyncCallback<Array<MediaDescription>>): void;
        /**
         * Get all track infos in MediaDescription, should be called after data loaded callback.
         * @returns { Promise<Array<MediaDescription>> } A Promise instance used to return the track info in MediaDescription.
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#getTrackDescription
         */
        getTrackDescription(): Promise<Array<MediaDescription>>;
        /**
         * media url. Mainstream video formats are supported.
         * local:fd://XXX, file://XXX. network:http://xxx
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#url
         */
        url: string;
        /**
         * Video file descriptor. Mainstream video formats are supported.
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 9
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#fdSrc
         */
        fdSrc: AVFileDescriptor;
        /**
         * Whether to loop video playback. The value true means to loop playback.
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#loop
         */
        loop: boolean;
        /**
         * Current playback position.
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#currentTime
         */
        readonly currentTime: number;
        /**
         * Playback duration, if -1 means cannot seek.
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#duration
         */
        readonly duration: number;
        /**
         * Playback state.
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#state
         */
        readonly state: VideoPlayState;
        /**
         * video width, valid after prepared.
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#width
         */
        readonly width: number;
        /**
         * video height, valid after prepared.
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#height
         */
        readonly height: number;
        /**
         * Describes audio interrupt mode, refer to {@link #audio.InterruptMode}. If it is not
         * set, the default mode will be used. Set it before calling the {@link #play()} in the
         * first time in order for the interrupt mode to become effective thereafter.
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 9
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#audioInterruptMode
         */
        audioInterruptMode?: audio.InterruptMode;
        /**
         * video scale type. By default, the {@link #VIDEO_SCALE_TYPE_FIT_CROP} will be used, for more
         * information, refer to {@link #VideoScaleType}
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 9
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#videoScaleType
         */
        videoScaleType?: VideoScaleType;
        /**
         * set payback speed.
         * @param { number } speed - playback speed, see @PlaybackSpeed .
         * @param { AsyncCallback<number> } callback Callback used to return actually speed.
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#setSpeed
         */
        setSpeed(speed: number, callback: AsyncCallback<number>): void;
        /**
         * set output surface.
         * @param { number } speed - playback speed, see @PlaybackSpeed .
         * @returns { Promise<number> } A Promise instance used to return actually speed.
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#setSpeed
         */
        setSpeed(speed: number): Promise<number>;
        /**
         * Listens for video playback completed events.
         * @param { 'playbackCompleted' } type - Type of the playback event to listen for.
         * @param { Callback<void> } callback - Callback used to listen for the playback event return.
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#event:stateChange
         */
        on(type: 'playbackCompleted', callback: Callback<void>): void;
        /**
         * Listens for video playback buffering events.
         * @param { 'bufferingUpdate' } type - Type of the playback buffering update event to listen for.
         * @param { function } callback - Callback used to listen for the buffering update event,
         * return BufferingInfoType and the value.
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#event:bufferingUpdate
         */
        on(type: 'bufferingUpdate', callback: (infoType: BufferingInfoType, value: number) => void): void;
        /**
         * Listens for start render video frame events.
         * @param { 'startRenderFrame' } type - Type of the playback event to listen for.
         * @param { Callback<void> } callback - Callback used to listen for the playback event return.
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#event:startRenderFrame
         */
        on(type: 'startRenderFrame', callback: Callback<void>): void;
        /**
         * Listens for video size changed event.
         * @param { 'videoSizeChanged' } type - Type of the playback event to listen for.
         * @param { function } callback - Callback used to listen for the playback event return video size.
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#event:videoSizeChange
         */
        on(type: 'videoSizeChanged', callback: (width: number, height: number) => void): void;
        /**
         * Listens for audio interrupt event, refer to {@link #audio.InterruptEvent}
         * @param { 'audioInterrupt' } type - Type of the playback event to listen for.
         * @param { function } callback - Callback used to listen for the playback event return audio interrupt info.
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 9
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#event:audioInterrupt
         */
        on(type: 'audioInterrupt', callback: (info: audio.InterruptEvent) => void): void;
        /**
         * Listens for playback error events.
         * @param { 'error' } type - Type of the playback error event to listen for.
         * @param { ErrorCallback } callback - Callback used to listen for the playback error event.
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.multimedia.media/media.AVPlayer#event:error
         */
        on(type: 'error', callback: ErrorCallback): void;
    }
    /**
     * Enumerates video scale type.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Media.VideoPlayer
     * @since 9
     */
    enum VideoScaleType {
        /**
         * The content is stretched to the fit the display surface rendering area. When
         * the aspect ratio of the content is not same as the display surface, the aspect
         * of the content is not maintained. This is the default scale type.
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 9
         */
        VIDEO_SCALE_TYPE_FIT = 0,
        /**
         * The content is stretched to the fit the display surface rendering area. When
         * the aspect ratio of the content is not the same as the display surface, content's
         * aspect ratio is maintained and the content is cropped to fit the display surface.
         * @syscap SystemCapability.Multimedia.Media.VideoPlayer
         * @since 9
         */
        VIDEO_SCALE_TYPE_FIT_CROP = 1
    }
    /**
     * Enumerates container format type(The abbreviation for 'container format type' is CFT).
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 8
     */
    enum ContainerFormatType {
        /**
         * A video container format type mp4.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 8
         */
        CFT_MPEG_4 = 'mp4',
        /**
         * A audio container format type m4a.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 8
         */
        CFT_MPEG_4A = 'm4a'
    }
    /**
     * Enumerates media data type.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 8
     */
    enum MediaType {
        /**
         * track is audio.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 8
         */
        MEDIA_TYPE_AUD = 0,
        /**
         * track is video.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 8
         */
        MEDIA_TYPE_VID = 1
    }
    /**
     * Enumerates media description key.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 8
     */
    enum MediaDescriptionKey {
        /**
         * key for track index, value type is number.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 8
         */
        MD_KEY_TRACK_INDEX = 'track_index',
        /**
         * key for track type, value type is number, see @MediaType.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 8
         */
        MD_KEY_TRACK_TYPE = 'track_type',
        /**
         * key for codec mime type, value type is string.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 8
         */
        MD_KEY_CODEC_MIME = 'codec_mime',
        /**
         * key for duration, value type is number.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 8
         */
        MD_KEY_DURATION = 'duration',
        /**
         * key for bitrate, value type is number.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 8
         */
        MD_KEY_BITRATE = 'bitrate',
        /**
         * key for video width, value type is number.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 8
         */
        MD_KEY_WIDTH = 'width',
        /**
         * key for video height, value type is number.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 8
         */
        MD_KEY_HEIGHT = 'height',
        /**
         * key for video frame rate, value type is number.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 8
         */
        MD_KEY_FRAME_RATE = 'frame_rate',
        /**
         * key for audio channel count, value type is number
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 8
         */
        MD_KEY_AUD_CHANNEL_COUNT = 'channel_count',
        /**
         * key for audio sample rate, value type is number
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 8
         */
        MD_KEY_AUD_SAMPLE_RATE = 'sample_rate'
    }
    /**
     * Enumerates audio source type for recorder.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
      * @since 9
     */
    enum AudioSourceType {
        /**
         * Default audio source type.
         * @syscap SystemCapability.Multimedia.Media.AVRecorder
         * @since 9
         */
        AUDIO_SOURCE_TYPE_DEFAULT = 0,
        /**
         * Source type mic.
         * @syscap SystemCapability.Multimedia.Media.AVRecorder
         * @since 9
         */
        AUDIO_SOURCE_TYPE_MIC = 1
    }
    /**
     * Enumerates video source type for recorder.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 9
     */
    enum VideoSourceType {
        /**
         * Surface raw data.
         * @syscap SystemCapability.Multimedia.Media.AVRecorder
         * @since 9
         */
        VIDEO_SOURCE_TYPE_SURFACE_YUV = 0,
        /**
         * Surface ES data.
         * @syscap SystemCapability.Multimedia.Media.AVRecorder
         * @since 9
         */
        VIDEO_SOURCE_TYPE_SURFACE_ES = 1
    }
    /**
     * Provides the media recorder profile definitions.
     *
     * @typedef AVRecorderProfile
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 9
     */
    interface AVRecorderProfile {
        /**
         * Indicates the audio bitrate.
         * @syscap SystemCapability.Multimedia.Media.AVRecorder
         * @since 9
         */
        audioBitrate?: number;
        /**
         * Indicates the number of audio channels.
         * @syscap SystemCapability.Multimedia.Media.AVRecorder
         * @since 9
         */
        audioChannels?: number;
        /**
         * Indicates the audio encoding format.
         * @syscap SystemCapability.Multimedia.Media.AVRecorder
         * @since 9
         */
        audioCodec?: CodecMimeType;
        /**
         * Indicates the audio sampling rate.
         * @syscap SystemCapability.Multimedia.Media.AVRecorder
         * @since 9
         */
        audioSampleRate?: number;
        /**
         * Indicates the output file format.
         * @syscap SystemCapability.Multimedia.Media.AVRecorder
         * @since 9
         */
        fileFormat: ContainerFormatType;
        /**
         * Indicates the video bitrate.
         * @syscap SystemCapability.Multimedia.Media.AVRecorder
         * @since 9
         */
        videoBitrate?: number;
        /**
         * Indicates the video encoding format.
         * @syscap SystemCapability.Multimedia.Media.AVRecorder
         * @since 9
         */
        videoCodec?: CodecMimeType;
        /**
         * Indicates the video width.
         * @syscap SystemCapability.Multimedia.Media.AVRecorder
         * @since 9
         */
        videoFrameWidth?: number;
        /**
         * Indicates the video height.
         * @syscap SystemCapability.Multimedia.Media.AVRecorder
         * @since 9
         */
        videoFrameHeight?: number;
        /**
         * Indicates the video frame rate.
         * @syscap SystemCapability.Multimedia.Media.AVRecorder
         * @since 9
         */
        videoFrameRate?: number;
    }
    /**
     * Provides the media recorder configuration definitions.
     *
     * @typedef AVRecorderConfig
     * @syscap SystemCapability.Multimedia.Media.AVRecorder
     * @since 9
     */
    interface AVRecorderConfig {
        /**
         * Audio source type, details see @AudioSourceType .
         * @syscap SystemCapability.Multimedia.Media.AVRecorder
         * @since 9
         */
        audioSourceType?: AudioSourceType;
        /**
         * Video source type, details see @VideoSourceType .
         * @syscap SystemCapability.Multimedia.Media.AVRecorder
         * @since 9
         */
        videoSourceType?: VideoSourceType;
        /**
         * Video recorder profile, details see @AVRecorderProfile .
         * @syscap SystemCapability.Multimedia.Media.AVRecorder
         * @since 9
         */
        profile: AVRecorderProfile;
        /**
         * File output uri, support a kind of uri now.
         * format like: "fd://" + "context".
         * @syscap SystemCapability.Multimedia.Media.AVRecorder
         * @since 9
         */
        url: string;
        /**
         * Sets the video rotation angle in output file, and for the file to playback, mp4 support
         * the range of rotation angle should be {0, 90, 180, 270}, default is 0.
         * @syscap SystemCapability.Multimedia.Media.AVRecorder
         * @since 9
         */
        rotation?: number;
        /**
         * Geographical location information.
         * @syscap SystemCapability.Multimedia.Media.AVRecorder
         * @since 9
         */
        location?: Location;
    }
    /**
     * Provides the container definition for media description key-value pairs.
     *
     * @typedef MediaDescription
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 8
     */
    interface MediaDescription {
        /**
         * key:value pair, key see @MediaDescriptionKey .
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 8
         */
        [key: string]: Object;
    }
    /**
     * Enumerates seek mode.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 8
     */
    enum SeekMode {
        /**
         * seek to the next sync frame of the given timestamp
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 8
         */
        SEEK_NEXT_SYNC = 0,
        /**
         * seek to the previous sync frame of the given timestamp
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 8
         */
        SEEK_PREV_SYNC = 1
    }
    /**
     * Enumerates Codec MIME types.
     *
     * @enum { string }
     * @syscap SystemCapability.Multimedia.Media.Core
     * @since 8
     */
    enum CodecMimeType {
        /**
         * H.263 codec MIME type.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 8
         */
        VIDEO_H263 = 'video/h263',
        /**
         * H.264 codec MIME type.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 8
         */
        VIDEO_AVC = 'video/avc',
        /**
         * MPEG2 codec MIME type.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 8
         */
        VIDEO_MPEG2 = 'video/mpeg2',
        /**
         * MPEG4 codec MIME type
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 8
         */
        VIDEO_MPEG4 = 'video/mp4v-es',
        /**
         * VP8 codec MIME type
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 8
         */
        VIDEO_VP8 = 'video/x-vnd.on2.vp8',
        /**
         * AAC codec MIME type.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 8
         */
        AUDIO_AAC = 'audio/mp4a-latm',
        /**
         * vorbis codec MIME type.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 8
         */
        AUDIO_VORBIS = 'audio/vorbis',
        /**
         * flac codec MIME type.
         * @syscap SystemCapability.Multimedia.Media.Core
         * @since 8
         */
        AUDIO_FLAC = 'audio/flac'
    }
}
export default media;
