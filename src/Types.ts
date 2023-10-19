import {
  PollingMode,
  IAutoPollOptions,
  ILazyLoadingOptions,
  IManualPollOptions,
} from "configcat-common";

type PluginOptions = {
  sdkKey: string;
  pollingMode?: PollingMode;
  clientOptions?: IAutoPollOptions | IManualPollOptions | ILazyLoadingOptions;
};

export type { PluginOptions };
