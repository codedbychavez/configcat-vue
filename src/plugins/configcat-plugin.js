import * as configcat from 'configcat-js';
import { ref } from 'vue';

export default {
  install: (app, options) => {
    const ready = ref(false);
    const configCat = {
      client: undefined,
      ready,
    }

    const clientOptions = {
      setupHooks: (hooks) => 
      hooks.on('ready', () => {
        ready.value = true;
      }),
      ...options.clientOptions,
    };

    let pollingMode = 
    // https://configcat.com/docs/sdk-reference/js/#manual-polling
      options.pollingMode === 'manual' ? configcat.PollingMode.ManualPoll :
      // https://configcat.com/docs/sdk-reference/js/#lazy-loading
      options.pollingMode === 'lazy' ? configcat.PollingMode.LazyLoad :
      // Auto poll is default
      configcat.PollingMode.AutoPoll;

     configCat.client = configcat.getClients(
      options.SDKKey,
      pollingMode,
      clientOptions
    );

    app.config.globalProperties.configCatClient = configCatClient;

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