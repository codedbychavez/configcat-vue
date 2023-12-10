import { createApp } from 'vue'
import App from './App.vue'

// REQUIRED - Import the plugin
// OPTIONAL - Import PollingMode, createConsoleLogger, LogLevel
import { ConfigCatPlugin, PollingMode, createConsoleLogger, LogLevel } from 'configcat-vue';

const app = createApp(App)

app.use(ConfigCatPlugin, {
    sdkKey: 'YOUR-CONFIGCAT-SDK-KEY',
    pollingMode: PollingMode.AutoPoll,
    clientOptions: {
        logger: createConsoleLogger(LogLevel.Info),
        pollIntervalSeconds: 5,
    },
});

app.mount('#app')
