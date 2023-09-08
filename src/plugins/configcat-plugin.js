import * as configcat from "configcat-js";

export default {
  install: (app, options) => {
    const configCat = {
      client: undefined,
      ready: false,
    };
    const clientOptions = {
      setupHooks: (hooks) =>
        hooks.on("clientReady", () => (configCat.ready = true)),
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
