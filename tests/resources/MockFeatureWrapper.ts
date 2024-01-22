import { defineComponent } from "vue";
// Types
import type { TFeatureFlagValue } from "./Types";

export const MockFeatureWrapper = defineComponent({
  data() {
    return {
      isFeatureFlagEnabled: null as TFeatureFlagValue,
    };
  },
  template: `
    <slot v-if="isFeatureFlagEnabled === true" />
    <slot v-else-if="isFeatureFlagEnabled === false" name="else" />
    <slot v-else name="loading" />
    `,
});
