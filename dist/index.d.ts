import { SettingValue, FlagOverrides, OverrideBehaviour, createConsoleLogger } from "configcat-common";
export { default as ConfigCatPlugin, type PluginOptions as ConfigCatPluginOptions } from './plugins/ConfigCatPlugin';
export { default as FeatureWrapper } from './components/FeatureWrapper.vue';
export { createConsoleLogger };
export declare function createFlagOverridesFromMap(map: {
    [name: string]: NonNullable<SettingValue>;
}, behaviour: OverrideBehaviour): FlagOverrides;
export type { IOptions, IAutoPollOptions, IManualPollOptions, ILazyLoadingOptions, IConfigCatLogger, LogEventId, LogMessage, IConfigCatCache, IConfig, ISetting, ITargetingRule, IPercentageOption, SettingValue, VariationIdValue, IConfigCatClient, IConfigCatClientSnapshot, IEvaluationDetails, SettingTypeOf, FlagOverrides, IProvidesHooks, HookEvents, } from "configcat-common";
export { PollingMode, DataGovernance, LogLevel, FormattableLogMessage, SettingType, Comparator, SettingKeyValue, User, OverrideBehaviour, RefreshResult, ClientReadyState, } from "configcat-common";
