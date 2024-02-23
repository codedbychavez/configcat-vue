import { isAllowedValue } from "configcat-common/lib/RolloutEvaluator";
import { ClientCacheState, HookEvents, IConfig, IConfigCatClient, IConfigCatClientSnapshot, IEvaluationDetails, RefreshResult, SettingKeyValue, SettingTypeOf, SettingValue, User } from "../../src";
import { DefaultEventEmitter } from "configcat-common/lib/DefaultEventEmitter";
import { IEventEmitter } from "configcat-common";
import * as ConfigJson from "configcat-common/lib/ConfigJson";
import { Config } from "configcat-common/lib/ProjectConfig";

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

export class SimpleValueConfigCatClientMock extends ConfigCatClientMockBase {
    private readonly eventEmitter = new DefaultEventEmitter();
    private readonly readyPromise: Promise<ClientCacheState>;
    private signalReady: (value: NonNullable<SettingValue>) => void;
    private cacheState = ClientCacheState.NoFlagData;
    private currentValue: NonNullable<SettingValue>;
    private currentConfig: Config | null = null;
    
    constructor(private key: string) {
      super();

      this.readyPromise = new Promise<NonNullable<SettingValue>>(resolve => this.signalReady = resolve)
        .then(initialValue => {
            this.currentValue = initialValue;
            this.currentConfig = createConfigFromValue(this.key, initialValue);
            this.cacheState = ClientCacheState.HasUpToDateFlagData;
            (this.eventEmitter as IEventEmitter<HookEvents>).emit("clientReady", this.cacheState);
            return this.cacheState;
        });
    }

    /** Call this method to simulate the `clientReady` event and to provide an initial feature flag value. */
    async setReady(initialValue: NonNullable<SettingValue>): Promise<void> {
        this.signalReady(initialValue);

        // Allow async continuations to run.
        await new Promise<void>(resolve => setTimeout(() => resolve(), 0));
    }

    /** Call this method to simulate the `configChanged` event and to update the current feature flag value. */
    changeValue(newValue: NonNullable<SettingValue>): void {
        if (this.currentValue === newValue) {
            return;
        }

        this.currentValue = newValue;
        this.currentConfig = createConfigFromValue(this.key, newValue);
        (this.eventEmitter as IEventEmitter<HookEvents>).emit("configChanged", this.currentConfig);
    }

    async getValueAsync<T extends SettingValue>(key: string, defaultValue: T, user?: User | undefined): Promise<SettingTypeOf<T>> {
        await this.readyPromise;
        
        if (key === this.key) {
            return (isValidSettingValue(this.currentValue, defaultValue) ? this.currentValue : defaultValue) as SettingTypeOf<T>;
        }

        return super.getValueAsync(key, defaultValue, user);
    }

    snapshot() {
      const client = this;

      return new (class extends ConfigCatClientSnapshotMockBase {
        getValue<T extends SettingValue>(key: string, defaultValue: T, user?: User | undefined): SettingTypeOf<T> {
          if (key === client.key) {
            return (isValidSettingValue(client.currentValue, defaultValue) ? client.currentValue : defaultValue) as SettingTypeOf<T>;
          }

          return super.getValue(key, defaultValue, user);
        }
      })(this.cacheState, this.currentConfig);
    }

    waitForReady(): Promise<ClientCacheState> {
        return this.readyPromise;
    }

    on<TEventName extends keyof HookEvents>(eventName: TEventName, listener: (...args: HookEvents[TEventName]) => void): this {
      this.eventEmitter.on(eventName, listener as (...args: any[]) => void);
      return this;
    }

    off<TEventName extends keyof HookEvents>(eventName: TEventName, listener: (...args: HookEvents[TEventName]) => void): this {
      this.eventEmitter.off(eventName, listener as (...args: any[]) => void);
      return this;
    }
  };

function createConfigFromValue(key: string, value: NonNullable<SettingValue>): Config {
    const [settingType, settingValue]: [ConfigJson.SettingType, ConfigJson.SettingValue] =
    typeof value === "boolean" ? [ConfigJson.SettingType.Boolean, { b: value }] :
    typeof value === "string" ? [ConfigJson.SettingType.String, { s: value }] :
    Number.isInteger(this.changeValue) ? [ConfigJson.SettingType.Int, { i: value }] :
    [ConfigJson.SettingType.Double, { d: value }];

    const configJson: Omit<ConfigJson.Config, "p"> = {
        f: { [key]: { t: settingType, v: settingValue } as ConfigJson.SettingUnion }
    };

    return new Config(configJson);
}

function isValidSettingValue(settingValue: NonNullable<SettingValue>, defaultValue: SettingValue) {
    return defaultValue == null
        ? isAllowedValue(settingValue)
        : typeof settingValue === typeof defaultValue;
}