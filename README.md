# configcat-vue

## Pre-requisites

- [Vue 3](https://vuejs.org/)

## Installation

1. Install the npm package

```sh
npm install configcat-vue
```

## Usage

In your `main.js` file:

1. import the plugin

```js
import { ConfigCatPlugin } from 'configcat-vue';
```

2. Use the plugin

```js
app.use(ConfigCatPlugin, {
  SDKKey: "YOUR-CONFIGCAT-SDK-KEY", // SDKKey is required
  clientOptions: { // clientOptions is optional
    pollIntervalSeconds: 95,
  }
});
```

## Advanced usage

### Using with a logger

As mentioned in the [ConfigCat Docs](https://configcat.com/docs/sdk-reference/js/#logging), you can also use the plugin with a logger.

1. Install the `configcat-js` npm package:

```sh
npm install configcat-js
```

Then in `main.js`:

2. Import ConfigCat:

```js
import * as configcat from 'configcat-js';
```

3. Create the logger

```js
const logger = configcat.createConsoleLogger(3);
```

4. Use the logger in `clientOptions`:

```js
app.use(ConfigCatPlugin, {
  SDKKey: "YOUR-CONFIGCAT-SDK-KEY", // SDKKey is required
  clientOptions: { // clientOptions is optional
    pollIntervalSeconds: 95,
    logger: logger,
  }
});
```

## Using the FeatureWrapper component



