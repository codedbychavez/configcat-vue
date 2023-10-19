import FeatureWrapper from "./components/FeatureWrapper.vue";
import ConfigCatPlugin from "./plugins/ConfigCatPlugin";

import {
  SettingValue,
  FlagOverrides,
  MapOverrideDataSource,
  OverrideBehaviour,
  createConsoleLogger,
} from "configcat-common";

// These exports should be kept in sync with the exports listed in the section "Public types for end users" of common-js/src/index.ts!
export type {
  IOptions,
  IAutoPollOptions,
  IManualPollOptions,
  ILazyLoadingOptions,
  IConfigCatLogger,
  LogEventId,
  LogMessage,
  IConfigCatCache,
  IConfig,
  ISetting,
  ITargetingRule,
  IPercentageOption,
  SettingValue,
  VariationIdValue,
  IConfigCatClient,
  IConfigCatClientSnapshot,
  IEvaluationDetails,
  SettingTypeOf,
  FlagOverrides,
  IProvidesHooks,
  HookEvents,
} from "configcat-common";

export {
  PollingMode,
  DataGovernance,
  LogLevel,
  FormattableLogMessage,
  SettingType,
  Comparator,
  SettingKeyValue,
  User,
  OverrideBehaviour,
  RefreshResult,
  ClientReadyState,
} from "configcat-common";

export function createFlagOverridesFromMap(
  map: { [name: string]: NonNullable<SettingValue> },
  behaviour: OverrideBehaviour
) {
  return new FlagOverrides(new MapOverrideDataSource(map), behaviour);
}

export { FeatureWrapper, ConfigCatPlugin, createConsoleLogger };
