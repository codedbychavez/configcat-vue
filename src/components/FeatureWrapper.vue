<template>
  <div>
    <div v-if="configCatClient.ready && isFeatureFlagEnabled">
      <slot />
    </div>
    <div v-else-if="configCatClient.ready && !isFeatureFlagEnabled">
      <slot name="else" />
    </div>
    <div v-else>
      <slot name="loading" />
  </div>
</template>

<script>
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
      isFeatureFlagEnabled: false,
    };
  },
  mounted() {
    this.configChangedHandler = () => {
      const snapshot = this.configCatClient.snapshot();
      const value = snapshot.getValue(this.featureKey, false, this.userObject);
      if (this.isFeatureFlagEnabled !== value) {
        this.isFeatureFlagEnabled = value;
        this.$emit("flagValueChanged", value);
      }
    };

    // Check if feature flag is enabled
    this.configCatClient
      .getValueAsync(this.featureKey, false, this.userObject)
      .then((value) => {
        const configChangedHandler = this.configChangedHandler;

        // Do nothing if the component was unmounted in the meantime
        if (!configChangedHandler) {
          return;
        }

        this.isFeatureFlagEnabled = value;
        this.configCatClient.on("configChanged", configChangedHandler);
      });
  },
  unmounted() {
    const configChangedHandler = this.configChangedHandler;
    delete this.configChangedHandler;
    this.configCatClient.off("configChanged", configChangedHandler);
  },
};
</script>
