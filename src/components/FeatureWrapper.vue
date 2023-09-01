<template>
  <div>
    <div v-if="isFeatureFlagEnabled">
      <slot />
    </div>
    <div v-else>
      <slot name="else" />
    </div>

  </div>
</template>

<script>
const listener = (newConfig) => {
  this.$configCatClient.getValueAsync(this.featureKey, false, this.userObject).then((value) => {
    this.isFeatureFlagEnabled = value;
    this.$emit('flagValueChanged', value);
  });
};
export default {
  emits: ['flagValueChanged'],
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
    this.$configCatClient.getValueAsync(this.featureKey, false, this.userObject).then((value) => {
      this.isFeatureFlagEnabled = value;
    });
    this.$configCatClient.on('configChanged', listener);
  },
  unmounted() {
    this.$configCatClient.removeListener('configChanged', listener);
  }
};
</script>
