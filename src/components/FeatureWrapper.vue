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
    this.$configCatClient.on('configChanged', this.listener);
  },
  unmounted() {
    this.$configCatClient.removeListener('configChanged', this.listener);
  },
  methods: {
    listener(newConfig) {
      this.$configCatClient.getValueAsync(this.featureKey, false, this.userObject).then((value) => {
        this.isFeatureFlagEnabled = value;
        this.$emit('flagValueChanged', value);
      })
    }
  }
};
</script>
