/**
 * Describes a NotificationFlags instance.
 *
 * @typedef NotificationFlags
 * @syscap SystemCapability.Notification.Notification
 * @since 8
 */
export interface NotificationFlags {
    /**
     * Whether to enable sound reminder.
     *
     * @type { ?NotificationFlagStatus }
     * @readonly
     * @syscap SystemCapability.Notification.Notification
     * @since 8
     */
    readonly soundEnabled?: NotificationFlagStatus;
    /**
     * Whether to enable vibration reminder.
     *
     * @type { ?NotificationFlagStatus }
     * @readonly
     * @syscap SystemCapability.Notification.Notification
     * @since 8
     */
    readonly vibrationEnabled?: NotificationFlagStatus;
}
