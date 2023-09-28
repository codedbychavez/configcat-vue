import * as configcatcommon from 'configcat-common';
import FeatureWrapper from './components/FeatureWrapper.vue';
import ConfigCatPlugin from './plugins/configcat-plugin';

/**
 * Creates an instance of `ConfigCatConsoleLogger`.
 * @param {configcatcommon.LogLevel} logLevel Log level (the minimum level to use for filtering log events).
 * @returns {configcatcommon.IConfigCatLogger}
 */
export function createConsoleLogger(logLevel) {
  return configcatcommon.createConsoleLogger(logLevel);
}

/**
 * Creates an instance of `FlagOverrides` that uses a map data source.
 * @param {{ [name: string]: NonNullable<configcatcommon.SettingValue> }} map The map that contains the overrides.
 * @param {configcatcommon.OverrideBehaviour} behaviour The override behaviour.
 * Specifies whether the local values should override the remote values
 * or local values should only be used when a remote value doesn't exist
 * or the local values should be used only.
 * @returns {configcatcommon.FlagOverrides}
 */
export function createFlagOverridesFromMap(map, behaviour) {
  return new configcatcommon.FlagOverrides(new configcatcommon.MapOverrideDataSource(map), behaviour);
}

export { FeatureWrapper, ConfigCatPlugin };

/* Public types re-export from configcat-common */

// These exports should be kept in sync with the exports listed in the section
// "Public types for end users" of https://github.com/configcat/common-js/blob/master/src/index.ts

export { PollingMode } from "configcat-common";

export { DataGovernance } from "configcat-common";

export { LogLevel } from "configcat-common";

export { FormattableLogMessage } from "configcat-common";

export { SettingType, Comparator } from "configcat-common";

export { SettingKeyValue } from "configcat-common";

export { User } from "configcat-common";

export { OverrideBehaviour } from "configcat-common";

export { RefreshResult } from "configcat-common";

export { ClientReadyState } from "configcat-common";
