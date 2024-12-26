/**
 * Provides information about a shortcut, including the shortcut ID and label.
 *
 * @typedef ShortcutInfo
 * @syscap SystemCapability.BundleManager.BundleFramework
 * @since 7
 * @deprecated since 9
 */
export interface ShortcutInfo {
    /**
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7
     * @deprecated since 9
     */
    readonly id: string;
    /**
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7
     * @deprecated since 9
     */
    readonly bundleName: string;
    /**
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7
     * @deprecated since 9
     */
    readonly hostAbility: string;
    /**
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7
     * @deprecated since 9
     */
    readonly icon: string;
    /**
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 8
     * @deprecated since 9
     */
    readonly iconId: number;
    /**
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7
     * @deprecated since 9
     */
    readonly label: string;
    /**
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 8
     * @deprecated since 9
     */
    readonly labelId: number;
    /**
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7
     * @deprecated since 9
     */
    readonly disableMessage: string;
    /**
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7
     * @deprecated since 9
     */
    readonly wants: Array<ShortcutWant>;
    /**
     * @default false
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7
     * @deprecated since 9
     */
    readonly isStatic?: boolean;
    /**
     * @default false
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7
     * @deprecated since 9
     */
    readonly isHomeShortcut?: boolean;
    /**
     * @default false
     * @syscap SystemCapability.BundleManager.BundleFramework
     * @since 7
     * @deprecated since 9
     */
    readonly isEnabled?: boolean;
}
