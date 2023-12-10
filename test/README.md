# Testing instructions

## 1. Setup and Unit Testing

In the root of the configcat-vue directory, run the `run.sh` script.

```bash
./test/run.sh
```

This will do the following:

- **Build the configcat-vue npm package** - Generates a `dist` folder in the root of the configcat-vue directory with any updates to the library.

- **Setup the test-sample app** - Installs the base dependencies for the test-sample as well as the `configcat-vue` npm package from the `dist` folder (which was built in the previous step).

- **Run the unit tests** - Run the unit tests for the `configcat-vue` library.

## 2. E2E Testing

In the previous step, the `run.sh` script will have installed the dependencies for the test-sample app. The section below will walk you through the steps to run the test-sample app and perform E2E testing.

1. Navigate to the test-sample directory.

2. Run the following command to start the test-sample app.

```bash
npm run dev
```

3. Click the link in the terminal to open the test-sample app in your browser.

4. Open the browser's developer tools and navigate to the console tab. You would see error messages in the console because the ConfigCat SDK key is not set.

Leave the console open for the duration of the test.

5. Navigate to the `test-sample/src/main.ts` file and add your ConfigCat SDK key to the plugin options.

```typescript
app.use(ConfigCatPlugin, {
    sdkKey: 'YOUR-CONFIGCAT-SDK-KEY',
    pollingMode: PollingMode.AutoPoll,
    clientOptions: {
        logger: createConsoleLogger(LogLevel.Info),
        pollIntervalSeconds: 5,
    },
});
```

6. Navigate to the `test-sample/src/App.vue` file and add your feature flag key to as a prop to the `<FeatureWrapper>` component.

```jsx
    <FeatureWrapper
      featureKey="YOUR-FEATURE-KEY-HERE"
      :userObject="userObject"
      @flagValueChanged="handleFlagValueChange"
    >
      <!-- ... -->
    </FeatureWrapper>
```

7. Toggling the feature flag in the [ConfigCat dashboard](https://app.configcat.com) should now update the value of the feature flag in the test-sample app after a few seconds.

That's it! You have successfully performed E2E testing for the `configcat-vue` library.
