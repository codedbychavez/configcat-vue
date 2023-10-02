<template>
  <div>
    <div v-if="isFeatureFlagEnabled === true">
      <slot />
    </div>
    <div v-else-if="isFeatureFlagEnabled === false">
      <slot name="else" />
    </div>
    <div v-else>
      <slot name="loading" />
  </div>
  </div>
</template>

<script>
import { ClientReadyState } from 'configcat-common';

export default {
  emits: ["flagValueChanged"],
  props: {
    featureKey: {
      type: String,
      required: true,
    },
    userObject: {
      type: Object,
      required: false,
      default: {},
    },
  },
  data() {
    return {
      isFeatureFlagEnabled: null, // `null` indicates that the feature flag value is not available yet
    };
  },
  beforeMount() {
    this.configChangedHandler = () => {
      const snapshot = this.$configCat.client.snapshot();
      const value = snapshot.getValue(this.featureKey, false, this.userObject);
      if (this.isFeatureFlagEnabled !== value) {
        this.isFeatureFlagEnabled = value;
        this.$emit("flagValueChanged", value);
      }
    };

    const clientReadyState = this.$configCat.clientReadyState;

    // Before the initial render of the component, initialize `isFeatureFlagEnabled`
    // if the feature flag value is already available in the cache.
    if (clientReadyState == ClientReadyState.HasUpToDateFlagData || clientReadyState == ClientReadyState.HasLocalOverrideFlagDataOnly) {
      const snapshot = this.$configCat.client.snapshot();
      this.isFeatureFlagEnabled = snapshot.getValue(this.featureKey, false, this.userObject);
      this.$configCat.client.on("configChanged", this.configChangedHandler);
    }
    // Otherwise, take the async path to get the feature flag value.
    else {
      this.$configCat.client
        .getValueAsync(this.featureKey, false, this.userObject)
        .then((value) => {
          const configChangedHandler = this.configChangedHandler;

          // Do nothing if the component was unmounted in the meantime
          if (!configChangedHandler) {
            return;
          }

          this.isFeatureFlagEnabled = value;
          this.$configCat.client.on("configChanged", configChangedHandler);
        });
    }
  },
  unmounted() {
    const configChangedHandler = this.configChangedHandler;
    delete this.configChangedHandler;
    this.$configCat.client.off("configChanged", configChangedHandler);
  },
};
</script>
