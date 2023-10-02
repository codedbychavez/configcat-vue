import * as configcat from 'configcat-common';
import { HttpConfigFetcher } from './config-fetcher';
import { LocalStorageCache } from './local-storage-cache';
import CONFIGCAT_SDK_VERSION from './version';

export default {
  install: (app, options) => {
    const configCat = {
      client: undefined,
      clientReadyState: undefined,
    }

    // We need to subscribe to the `clientReady` hook but also want to preserve the hook subscriptions of the caller,
    // so we clone the options object and "override" the `setupHooks` property.

    const originalSetupHooks = options.clientOptions?.setupHooks;
    const clientOptions = {
      ...options.clientOptions,
      setupHooks: (hooks) => {
        hooks.once('clientReady', (state) => configCat.clientReadyState = state);
        originalSetupHooks?.(hooks);
      }
    }

    let pollingMode =
      // https://configcat.com/docs/sdk-reference/js/#manual-polling
      options.pollingMode === 'manual' ? configcat.PollingMode.ManualPoll :
      // https://configcat.com/docs/sdk-reference/js/#lazy-loading
      options.pollingMode === 'lazy' ? configcat.PollingMode.LazyLoad :
      // Auto poll is default
      configcat.PollingMode.AutoPoll;

    configCat.client = configcat.getClient(
      options.SDKKey,
      pollingMode,
      clientOptions,
      {
        sdkType: "ConfigCat-Vue",
        sdkVersion: CONFIGCAT_SDK_VERSION,
        configFetcher: new HttpConfigFetcher(),
        defaultCacheFactory: options => new configcat.ExternalConfigCache(new LocalStorageCache(), options.logger)
      }
    );

    app.config.globalProperties.$configCat = configCat;

    // The acquired `configCatClient` object should be active as long as the Vue app is alive (but no longer than that).
    // However, Vue doesn't expose an API currently which would allow us to hook into the lifecycle of the app component.
    // The recommended workaround is to wrap its `unmount` method
    // (see https://github.com/vuejs/core/issues/4516#issuecomment-913231053).

    const originalAppUnmount = app.unmount;
    app.unmount = function () {
      originalAppUnmount.apply(this, arguments);
      configCatClient.close();
    };
  },
};