import { HttpConfigFetcher } from "./ConfigFetcher";
import { LocalStorageCache } from "./LocalStorageCache";
import { PollingMode, getClient } from "configcat-common";
import CONFIGCAT_SDK_VERSION from "./Version";
// Types
import type { App } from "vue";
import type { IAutoPollOptions, IConfigCatKernel, ILazyLoadingOptions, IManualPollOptions } from "configcat-common";

type ClientOptions<TMode extends PollingMode> = {
  [PollingMode.AutoPoll]: IAutoPollOptions,
  [PollingMode.ManualPoll]: IManualPollOptions,
  [PollingMode.LazyLoad]: ILazyLoadingOptions,
}[TMode];

export type PluginOptions<TMode extends PollingMode = PollingMode.AutoPoll> = {
  sdkKey: string;
  clientOptions?: ClientOptions<TMode>
} & (TMode extends PollingMode.AutoPoll ? { pollingMode?: TMode } : { pollingMode: TMode });

export default {
  // Vue's `App.prototype.use` does not play nicely with generic `install` functions, so we resort to using a discriminated union.
  install: (app: App, options: PluginOptions<PollingMode.AutoPoll> | PluginOptions<PollingMode.LazyLoad> | PluginOptions<PollingMode.ManualPoll>): void => {
    const { sdkKey, pollingMode, clientOptions } = options;
    const configCatKernel: IConfigCatKernel = LocalStorageCache.setup({
      sdkType: "ConfigCat-Vue",
      sdkVersion: CONFIGCAT_SDK_VERSION,
      configFetcher: new HttpConfigFetcher(),
    });

    const configCatClient = getClient(
      sdkKey,
      pollingMode ?? PollingMode.AutoPoll,
      clientOptions,
      configCatKernel
    );

    app.provide("configCatClient", configCatClient);

    // The acquired `configCatClient` object should be active as long as the Vue app is alive (but no longer than that).
    // However, Vue doesn't expose an API currently which would allow us to hook into the lifecycle of the app component.
    // The recommended workaround is to wrap its `unmount` method
    // (see https://github.com/vuejs/core/issues/4516#issuecomment-913231053).

    const originalAppUnmount = app.unmount;
    app.unmount = function () {
      originalAppUnmount.apply(arguments);
      configCatClient.dispose();
    };
  },
};
