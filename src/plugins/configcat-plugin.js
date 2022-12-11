import * as configcat from 'configcat-js';

export default {
  install: (app, options) => {
    // * May need other options for specifying logger etc.
    let configCatClient = configcat.createClient(options.apiKey);
    app.config.globalProperties.$configCatClient = configCatClient;
  },
};