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

## Using the FeatureWrapper component

The **FeatureWrapper** component allows you to wrap features/components/HTML within your Vue3 app. This allows you to render the wrapped components when its feature flag is enabled/ switched on.

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

2. Use it in your template by passing your feature key to the **featureKey** prop:

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

3. Thats it! Need to know more, check out the **Advanced usage** section below.

## Advanced usage

### Using the plugin with a logger

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
### Using the FeatureWrapper with a user object

As mentioned in the ConfigCat docs, the [**User Object**](https://configcat.com/docs/advanced/user-object/) can be used when you need to pass potential Targeting rules variables. It also allows you represent a user in your application.

The User Object can be passed as prop to the **Feature Wrapper** component.

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

2. Pass it to **userObject** prop:

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

## References

### Logging
- [https://configcat.com/docs/sdk-reference/js/#user-object](https://configcat.com/docs/sdk-reference/js/#user-object)

### Polling modes
- [https://configcat.com/docs/sdk-reference/js/#user-object](https://configcat.com/docs/sdk-reference/js/#user-object)

### User Object 

- [https://configcat.com/docs/advanced/user-object](https://configcat.com/docs/advanced/user-object/)

- [https://configcat.com/docs/sdk-reference/js/#user-object](https://configcat.com/docs/sdk-reference/js/#user-object)





