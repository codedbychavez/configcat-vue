import * as configcat from 'configcat-js';

export default {
  install: (app, options) => {

     // Auto poll is default
     let configCatClient = configcat.getClient(
      options.SDKKey,
      configcat.PollingMode.AutoPoll, 
      options.clientOptions
    )

    if (options.pollingMode == 'manual') {
      // https://configcat.com/docs/sdk-reference/js/#manual-polling
      configCatClient = configcat.getClient(
        options.SDKKey,
        configcat.PollingMode.ManualPoll, 
        options.clientOptions
      );
    }

    if (options.pollingMode == 'lazy') {
      // https://configcat.com/docs/sdk-reference/js/#lazy-loading
      configCatClient = configcat.getClient(
        options.SDKKey,
        configcat.PollingMode.LazyLoad, 
        options.clientOptions
      );
    }

    app.config.globalProperties.configCatClient = configCatClient;
  },
};