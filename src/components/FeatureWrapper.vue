<template>
  <div>
    <div v-if="$configCat.ready && isFeatureFlagEnabled">
      <slot />
    </div>
    <div v-else-if="$configCat.ready && !isFeatureFlagEnabled">
      <slot name="else" />
    </div>
    <div v-else>
      <slot name="loading" />
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
    this.$configCat.client.getValueAsync(this.featureKey, false, this.userObject).then((value) => {
      this.isFeatureFlagEnabled = value;
    });
    this.$configCat.client.on('configChanged', this.listener);
  },
  unmounted() {
    this.$configCat.client.removeListener('configChanged', this.listener);
  },
  methods: {
    listener(newConfig) {
      this.$configCat.client.getValueAsync(this.featureKey, false, this.userObject).then((value) => {
        this.isFeatureFlagEnabled = value;
        this.$emit('flagValueChanged', value);
      })
    }
  }
};
</script>
