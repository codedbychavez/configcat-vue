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
    userObject: {
      type: Object,
      required: false,
      default: {},
    }
  },
  data() {
    return {
      isFeatureFlagEnabled: false,
    };
  },
  mounted() {
    // Check if feature flag is enabled
    this.configCatClient.getValueAsync(this.featureKey, false, this.userObject).then((value) => {
      this.isFeatureFlagEnabled = value;
    });
  },
  unmounted() {
    this.configCatClient.dispose();
  }
};
</script>
