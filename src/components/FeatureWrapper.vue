<template>
  <div v-if="isFeatureFlagEnabled">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    featureKey: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isFeatureFlagEnabled: false,
    };
  },
  mounted() {
    // Check if feature flag is enabled
    this.configCatClient.getValueAsync(this.featureKey, false).then((value) => {
      this.isFeatureFlagEnabled = value;
    });
  },
  unmounted() {
    this.configCatClient.dispose();
  }
};
</script>
