import * as configcat from 'configcat-js';

export default {
  install: (app, options) => {
    let configCatClient = configcat.createClient(options.SDKKey, options.clientOptions);
    app.config.globalProperties.configCatClient = configCatClient;
  },
};