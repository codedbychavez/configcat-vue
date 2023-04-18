# configcat-vue

[![npm - configcat-vue](https://img.shields.io/badge/npm-configcat--vue-green?logo=npm&logoColor=white)](https://www.npmjs.com/package/configcat-vue)

## Pre-requisites

- [Vue 3](https://vuejs.org/)

## Installation

1. Install the npm package:

```sh
npm install configcat-vue
```

## Usage

In your `main.js` file:

1. Import the plugin

```js
import { ConfigCatPlugin } from 'configcat-vue';
```

2. Use the plugin:

```js
app.use(ConfigCatPlugin, {
  SDKKey: "YOUR-CONFIGCAT-SDK-KEY", // SDKKey is required
  clientOptions: { // clientOptions is optional
    pollIntervalSeconds: 95,
  }
});
```

## Using the FeatureWrapper component

The **FeatureWrapper** component allows you to wrap features, components, and HTML within your Vue3 app. When the feature flag is enabled, the wrapped components are rendered.

1. In your `.vue` file import the **FeatureWrapper** component:

```js
<script>
import { FeatureWrapper } from "configcat-vue";

export default {
  components: {
    FeatureWrapper,
  },
};
</script>
```

2. You can use it in your template by passing your feature key to the **featureKey** prop:

```js
<template>
  <div class="my-app">
    <FeatureWrapper featureKey="featurekey">
      <p>
        This will show if the feature flag with <b>featurekey</b> is enabled in
        ConfigCat
      </p>
    </FeatureWrapper>
  </div>
</template>
```

3. That's it! Need to know more? check out the [**Advanced usage**](https://github.com/codedbychavez/configcat-vue#advanced-usage) section below.

## Advanced usage

### Using the plugin with a logger

The plugin can also be used with a logger, as explained in the [ConfigCat Docs](https://configcat.com/docs/sdk-reference/js/#logging).

1. Install the `configcat-js` npm package:

```sh
npm install configcat-js
```

Then in `main.js`:

2. Import ConfigCat:

```js
import * as configcat from 'configcat-js';
```

3. Create the logger:

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
### Using the FeatureWrapper with a User Object

According to the documentation for ConfigCat, the [User Object](https://configcat.com/docs/advanced/user-object/) can be used to pass potential Targeting rules variables. In addition, it allows you to represent a user in your application.

A User Object can be passed as a prop to the **Feature Wrapper** component.

1. Define the User Object as a **data** property

```js
<script>
import { FeatureWrapper } from "configcat-vue";

export default {
  components: {
    FeatureWrapper,
  },
  data() {
    return {
      userObject: { // Passing userObject as a prop to the FeatureWrapper is optional
        identifier: 'john@example.com',
      }
    }
  }
};
</script>
```

2. Pass it to the **userObject** prop:

```js
<template>
  <div class="my-app">
    <FeatureWrapper featureKey="featurekey" :userObject="userObject">
      <p>
        This will show if the feature flag with <b>featurekey</b> is enabled in
        ConfigCat
      </p>
    </FeatureWrapper>
  </div>
</template>
```

## Sample app

**[https://github.com/codedbychavez/configcat-vue-sample](https://github.com/codedbychavez/configcat-vue-sample)**

## References

### Logging

- [https://configcat.com/docs/sdk-reference/js/#user-object](https://configcat.com/docs/sdk-reference/js/#user-object)

### Polling modes

- [https://configcat.com/docs/sdk-reference/js/#user-object](https://configcat.com/docs/sdk-reference/js/#user-object)

### User Object

- [https://configcat.com/docs/advanced/user-object](https://configcat.com/docs/advanced/user-object/)

- [https://configcat.com/docs/sdk-reference/js/#user-object](https://configcat.com/docs/sdk-reference/js/#user-object)
