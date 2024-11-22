import { Internals } from "@configcat/sdk";

export {
  default as ConfigCatPlugin,
  type PluginOptions as ConfigCatPluginOptions
} from './plugins/ConfigCatPlugin';

export { default as FeatureWrapper } from './components/FeatureWrapper.vue';

export const {
  createConsoleLogger,
  createFlagOverridesFromMap,
  createFlagOverridesFromQueryParams
} = Internals;

export type IQueryStringProvider = Internals.IQueryStringProvider;

/* Public types re-export from @configcat/sdk */

// These exports should be kept in sync with the exports listed in the `src/index.ts` module
// located in the `js-unified-sdk` repo (https://github.com/configcat/js-unified-sdk)!

export { PollingMode } from "@configcat/sdk";

export type { IAutoPollOptions, ILazyLoadingOptions, IManualPollOptions, IOptions } from "@configcat/sdk";

export { DataGovernance } from "@configcat/sdk";

export type { IConfigCatLogger, LogEventId, LogMessage } from "@configcat/sdk";

export { LogLevel } from "@configcat/sdk";

export { FormattableLogMessage } from "@configcat/sdk";

export type { IConfigCatCache } from "@configcat/sdk";

export type {
  ConditionTypeMap, ICondition, IConditionUnion, IConfig, IPercentageOption, IPrerequisiteFlagCondition,
  ISegment, ISegmentCondition, ISetting, ISettingUnion, ISettingValueContainer, ITargetingRule,
  IUserCondition, IUserConditionUnion, SettingTypeMap, SettingValue, UserConditionComparisonValueTypeMap,
  VariationIdValue
} from "@configcat/sdk";

export { PrerequisiteFlagComparator, SegmentComparator, SettingType, UserComparator } from "@configcat/sdk";

export type { IConfigCatClient, IConfigCatClientSnapshot, SettingKeyValue } from "@configcat/sdk";

export type { IEvaluationDetails, SettingTypeOf } from "@configcat/sdk";

export type { IUser, UserAttributeValue } from "@configcat/sdk";

export { User } from "@configcat/sdk";

export type { FlagOverrides } from "@configcat/sdk";

export { OverrideBehaviour } from "@configcat/sdk";

export { ClientCacheState, RefreshResult } from "@configcat/sdk";

export type { HookEvents, IProvidesHooks } from "@configcat/sdk";

export { ConfigJson } from "@configcat/sdk";
