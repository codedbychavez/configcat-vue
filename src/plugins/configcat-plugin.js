import * as configcat from "configcat-js";  
import {ref} from "vue";

export default {
  install: (app, options) => {
    const ready = ref(false)
    const configCat = {
      client: undefined,
      ready,
    };
    const clientOptions = {
      setupHooks: (hooks) =>
        hooks.on("clientReady", () => (configCat.ready.value = true)),
      ...options.clientOptions,
    };

    // Auto poll is default
    if (options.pollingMode == "auto") {
      configCat.client = configcat.getClient(
        options.SDKKey,
        configcat.PollingMode.AutoPoll,
        clientOptions
      );
    }

    else if (options.pollingMode == "manual") {
      // https://configcat.com/docs/sdk-reference/js/#manual-polling
      configCat.client = configcat.getClient(
        options.SDKKey,
        configcat.PollingMode.AutoPoll,
        clientOptions
      );
    }

    else if (options.pollingMode == "lazy") {
      // https://configcat.com/docs/sdk-reference/js/#lazy-loading
      configCat.client = configcat.getClient(
        options.SDKKey,
        configcat.PollingMode.AutoPoll,
        clientOptions
      );
    }

    else { // auto
      configCat.client = configcat.getClient(
        options.SDKKey,
        configcat.PollingMode.AutoPoll,
        clientOptions
      );
    }

    app.config.globalProperties.$configCat = configCat;
  },
};
