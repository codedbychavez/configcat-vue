<template>
  <div>
    This is a sample Vue 3 application.
    <hr />
    <FeatureWrapper
      featureKey="YOUR-FEATURE-KEY-HERE"
      :userObject="userObject"
      @flagValueChanged="handleFlagValueChange"
    >
      <TheNewFeature />
      <template #else>
        <div>The feature is not enabled for this user.</div>
      </template>
      <template #loading>
        <div>Loading...</div>
      </template>
    </FeatureWrapper>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { FeatureWrapper } from "configcat-vue";
import TheNewFeature from "./components/TheNewFeature.vue";

const userObject = ref({
  identifier: "john@example.com",
});

// React to flag value changes
const handleFlagValueChange = (flagValue: boolean) => {
  console.log("Flag value changed to: ", flagValue);
};
</script>

<style scoped></style>
