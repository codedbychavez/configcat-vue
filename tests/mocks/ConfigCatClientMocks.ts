import { ClientCacheState, HookEvents, IConfig, IConfigCatClient, IConfigCatClientSnapshot, IEvaluationDetails, RefreshResult, SettingKeyValue, SettingTypeOf, SettingValue, User } from "../../src";

export class ConfigCatClientMockBase implements IConfigCatClient {
    constructor(
        public isOffline = false) {
    }

    getValueAsync<T extends SettingValue>(key: string, defaultValue: T, user?: User | undefined): Promise<SettingTypeOf<T>> {
        throw new Error("Method not implemented.");
    }
    getValueDetailsAsync<T extends SettingValue>(key: string, defaultValue: T, user?: User | undefined): Promise<IEvaluationDetails<SettingTypeOf<T>>> {
        throw new Error("Method not implemented.");
    }
    getAllKeysAsync(): Promise<string[]> {
        throw new Error("Method not implemented.");
    }
    getAllValuesAsync(user?: User | undefined): Promise<SettingKeyValue<SettingValue>[]> {
        throw new Error("Method not implemented.");
    }
    getAllValueDetailsAsync(user?: User | undefined): Promise<IEvaluationDetails<SettingValue>[]> {
        throw new Error("Method not implemented.");
    }
    getKeyAndValueAsync(variationId: string): Promise<SettingKeyValue<SettingValue> | null> {
        throw new Error("Method not implemented.");
    }
    forceRefreshAsync(): Promise<RefreshResult> {
        throw new Error("Method not implemented.");
    }
    waitForReady(): Promise<ClientCacheState> {
        throw new Error("Method not implemented.");
    }
    snapshot(): IConfigCatClientSnapshot {
        throw new Error("Method not implemented.");
    }
    setDefaultUser(defaultUser: User): void {
        throw new Error("Method not implemented.");
    }
    clearDefaultUser(): void {
        throw new Error("Method not implemented.");
    }
    setOnline(): void {
        throw new Error("Method not implemented.");
    }
    setOffline(): void {
        throw new Error("Method not implemented.");
    }
    dispose(): void {
        throw new Error("Method not implemented.");
    }
    addListener<TEventName extends keyof HookEvents>(eventName: TEventName, listener: (...args: HookEvents[TEventName]) => void): this {
        throw new Error("Method not implemented.");
    }
    on<TEventName extends keyof HookEvents>(eventName: TEventName, listener: (...args: HookEvents[TEventName]) => void): this {
        throw new Error("Method not implemented.");
    }
    once<TEventName extends keyof HookEvents>(eventName: TEventName, listener: (...args: HookEvents[TEventName]) => void): this {
        throw new Error("Method not implemented.");
    }
    removeListener<TEventName extends keyof HookEvents>(eventName: TEventName, listener: (...args: HookEvents[TEventName]) => void): this {
        throw new Error("Method not implemented.");
    }
    off<TEventName extends keyof HookEvents>(eventName: TEventName, listener: (...args: HookEvents[TEventName]) => void): this {
        throw new Error("Method not implemented.");
    }
    removeAllListeners(eventName?: keyof HookEvents | undefined): this {
        throw new Error("Method not implemented.");
    }
    listeners(eventName: keyof HookEvents): Function[] {
        throw new Error("Method not implemented.");
    }
    listenerCount(eventName: keyof HookEvents): number {
        throw new Error("Method not implemented.");
    }
    eventNames(): (keyof HookEvents)[] {
        throw new Error("Method not implemented.");
    }
}

export class ConfigCatClientSnapshotMockBase implements IConfigCatClientSnapshot {
    constructor(
        public cacheState = ClientCacheState.NoFlagData,
        public fetchedConfig: IConfig | null = null) {
    }

    getAllKeys(): readonly string[] {
        throw new Error("Method not implemented.");
    }
    getValue<T extends SettingValue>(key: string, defaultValue: T, user?: User | undefined): SettingTypeOf<T> {
        throw new Error("Method not implemented.");
    }
    getValueDetails<T extends SettingValue>(key: string, defaultValue: T, user?: User | undefined): IEvaluationDetails<SettingTypeOf<T>> {
        throw new Error("Method not implemented.");
    }
}