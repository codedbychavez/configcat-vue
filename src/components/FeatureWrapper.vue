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

<script setup lang="ts">
import { ref, onBeforeMount, onUnmounted, inject } from "vue";
import type { Ref } from "vue";
import {
  ClientCacheState,
  type IConfigCatClient,
  type User,
} from "configcat-common";

const emits = defineEmits(["flagValueChanged"]);

const props = defineProps<{
  featureKey: string;
  userObject?: User;
}>();

const isFeatureFlagEnabled: Ref<null | boolean> = ref(null);

const configCatClient = inject("configCatClient") as IConfigCatClient;

const configChangedHandler = () => {
  const snapshot = configCatClient?.snapshot();
  const value = snapshot?.getValue(props.featureKey, false, props.userObject);
  if (isFeatureFlagEnabled.value !== value) {
    isFeatureFlagEnabled.value = value;
    emits("flagValueChanged", value);
  }
};

onBeforeMount(() => {
  const snapshot = configCatClient?.snapshot();
  const clientCacheState = snapshot?.cacheState;

  if (
    clientCacheState == ClientCacheState.HasUpToDateFlagData ||
    clientCacheState == ClientCacheState.HasLocalOverrideFlagDataOnly
  ) {
    isFeatureFlagEnabled.value = snapshot?.getValue(
      props.featureKey,
      false,
      props.userObject
    );
    configCatClient?.on("configChanged", configChangedHandler);
  }
  // Otherwise take the async path to get the feature flag value
  else {
    configCatClient
      ?.getValueAsync(props.featureKey, false, props.userObject)
      .then((value) => {
        const configChangedHandlerResult = configChangedHandler;

        if (!configChangedHandlerResult) {
          return;
        }

        isFeatureFlagEnabled.value = value;
        configCatClient.on("configChanged", configChangedHandlerResult);
      });
  }
});

onUnmounted(() => {
  configCatClient?.off("configChanged", configChangedHandler);
});
</script>
