import { mount } from "@vue/test-utils";
import { test, expect } from "vitest";

// Mock Component
import {
  FeatureWrapper,
  OverrideBehaviour,
  createFlagOverridesFromMap,
} from "../../src";
import ConfigCatPlugin, {
  type PluginOptions,
} from "../../src/plugins/ConfigCatPlugin";
import {
  SimpleValueConfigCatClientMock,
} from "../mocks/ConfigCatClientMocks";

test("The default slot should render when the isFeatureFlagEnabled value is true", () => {
  const featureFlagKey = "isFeatureFlagEnabled";

  const pluginOptions: PluginOptions = {
    sdkKey: "local-only",
    clientOptions: {
      flagOverrides: createFlagOverridesFromMap(
        { [featureFlagKey]: true },
        OverrideBehaviour.LocalOnly
      ),
    },
  };

  const wrapper = mount(FeatureWrapper, {
    global: {
      plugins: [[ConfigCatPlugin, pluginOptions]],
    },
    props: {
      featureKey: featureFlagKey,
    },
    slots: {
      default: "<div>the new feature</div>",
      else: "<div>feature is not enabled</div>",
      loading: "<div>component is loading</div>",
    },
  });

  try {
    // Assert the rendered text of the component
    expect(wrapper.html()).toContain("<div>the new feature</div>");
  } finally {
    wrapper.unmount();
  }
});

test("The else slot should render when the isFeatureFlagEnabled value is false", () => {
  const featureFlagKey = "isFeatureFlagEnabled";

  const pluginOptions: PluginOptions = {
    sdkKey: "local-only",
    clientOptions: {
      flagOverrides: createFlagOverridesFromMap(
        { [featureFlagKey]: false },
        OverrideBehaviour.LocalOnly
      ),
    },
  };

  const wrapper = mount(FeatureWrapper, {
    global: {
      plugins: [[ConfigCatPlugin, pluginOptions]],
    },
    props: {
      featureKey: featureFlagKey,
    },
    slots: {
      default: "<div>the new feature</div>",
      else: "<div>feature is not enabled</div>",
      loading: "<div>component is loading</div>",
    },
  });

  try {
    // Assert the rendered text of the component
    expect(wrapper.html()).toContain("<div>feature is not enabled</div>");
  } finally {
    wrapper.unmount();
  }
});

test("The loading slot should render when the client is still initializing", () => {
  const featureFlagKey = "isFeatureFlagEnabled";

  // To test this scenario, we can't use flag overrides because there's no initialization period in that case,
  // feature flag values provided by flag overrides are available immediately.
  // So, we have to take the hard way: we need to provide a mock implementation of `IConfigCatClient` to the component.
  const clientMock = new SimpleValueConfigCatClientMock(featureFlagKey);

  // We don't call `clientMock.setReady()`, so it will never get past the initialization state and provide a feature flag value.

  const wrapper = mount(FeatureWrapper, {
    global: {
      provide: {
        configCatClient: clientMock,
      },
    },
    props: {
      featureKey: featureFlagKey,
    },
    slots: {
      default: "<div>the new feature</div>",
      else: "<div>feature is not enabled</div>",
      loading: "<div>component is loading</div>",
    },
  });

  try {
    // Assert the rendered text of the component
    expect(wrapper.html()).toContain("<div>component is loading</div>");
  } finally {
    wrapper.unmount();
  }
});

test("The FeatureWrapper component should throw an exception when the plugin is not installed", () => {
  const featureFlagKey = "isFeatureFlagEnabled";

  try {
    const wrapper = mount(FeatureWrapper, {
      props: {
        featureKey: featureFlagKey,
      },
      slots: {
        default: "<div>the new feature</div>",
        else: "<div>feature is not enabled</div>",
        loading: "<div>component is loading</div>",
      },
    });
    try {
      // If the component was created successfully, fail the test
      expect(wrapper.exists()).toBe(false);
    }
    finally {
      wrapper.unmount();
    }
  } catch (error) {
    // Check if the error thrown contains the expected text
    expect(error.message).toContain("ConfigCatPlugin was not installed.");
  }
});

test("The FeatureWrapper component should emit flagValueChanged when the feature flag value changes", async () => {
  const featureFlagKey = "isFeatureFlagEnabled";

  const clientMock = new SimpleValueConfigCatClientMock(featureFlagKey);
  await clientMock.setReady(false);

  const wrapper = mount(FeatureWrapper, {
    global: {
      provide: {
        configCatClient: clientMock,
      },
    },
    props: {
      featureKey: featureFlagKey,
    },
    slots: {
      default: "<div>the new feature</div>",
      else: "<div>feature is not enabled</div>",
      loading: "<div>component is loading</div>",
    },
  });

  // Check if the wrapper emitted
  try {
    expect(wrapper.emitted().flagValueChanged).toBeUndefined();

    clientMock.changeValue(true);

    expect(wrapper.emitted().flagValueChanged).toBeDefined();
  } finally {
    wrapper.unmount();
  }
});

// Transitions

test("The FeatureWrapper component should transition from loading to default", async () => {
  const featureFlagKey = "isFeatureFlagEnabled";

  const clientMock = new SimpleValueConfigCatClientMock(featureFlagKey);

  const wrapper = mount(FeatureWrapper, {
    global: {
      provide: {
        configCatClient: clientMock,
      },
    },
    props: {
      featureKey: featureFlagKey,
    },
    slots: {
      default: "<div>the new feature</div>",
      else: "<div>feature is not enabled</div>",
      loading: "<div>component is loading</div>",
    },
  });

  try {
    // The loading slot should be displayed
    expect(wrapper.html()).toContain("<div>component is loading</div>");

    // Simulate client getting ready, with the initial feature flag value set to true
    await clientMock.setReady(true);

    // The default slot should be displayed
    expect(wrapper.html()).toContain("<div>the new feature</div>");
  } finally {
    wrapper.unmount();
  }
});

test("The FeatureWrapper should transition from loading to else", async () => {
  const featureFlagKey = "isFeatureFlagEnabled";

  const clientMock = new SimpleValueConfigCatClientMock(featureFlagKey);

  const wrapper = mount(FeatureWrapper, {
    global: {
      provide: {
        configCatClient: clientMock,
      },
    },
    props: {
      featureKey: featureFlagKey,
    },
    slots: {
      default: "<div>the new feature</div>",
      else: "<div>feature is not enabled</div>",
      loading: "<div>component is loading</div>",
    },
  });

  try {
    // The loading slot should be displayed
    expect(wrapper.html()).toContain("<div>component is loading</div>");

    // Simulate client getting ready, with the initial feature flag value set to false
    await clientMock.setReady(false);

    // The else slot should be displayed
    expect(wrapper.html()).toContain("<div>feature is not enabled</div>");
  } finally {
    wrapper.unmount();
  }
});

test("The FeatureWrapper should transition from default to else", async () => {
  const featureFlagKey = "isFeatureFlagEnabled";

  const clientMock = new SimpleValueConfigCatClientMock(featureFlagKey);
  await clientMock.setReady(true);

  const wrapper = mount(FeatureWrapper, {
    global: {
      provide: {
        configCatClient: clientMock,
      },
    },
    props: {
      featureKey: featureFlagKey,
    },
    slots: {
      default: "<div>the new feature</div>",
      else: "<div>feature is not enabled</div>",
      loading: "<div>component is loading</div>",
    },
  });

  try {
    // The default slot should be displayed
    expect(wrapper.html()).toContain("<div>the new feature</div>");

    // Simulate config change, with the feature flag value set to false
    await clientMock.changeValue(false);

    // The else slot should be displayed
    expect(wrapper.html()).toContain("<div>feature is not enabled</div>");
  } finally {
    wrapper.unmount();
  }
});

test("The FeatureWrapper should transition from else to default", async () => {
  const featureFlagKey = "isFeatureFlagEnabled";

  const clientMock = new SimpleValueConfigCatClientMock(featureFlagKey);
  await clientMock.setReady(false);

  const wrapper = mount(FeatureWrapper, {
    global: {
      provide: {
        configCatClient: clientMock,
      },
    },
    props: {
      featureKey: featureFlagKey,
    },
    slots: {
      default: "<div>the new feature</div>",
      else: "<div>feature is not enabled</div>",
      loading: "<div>component is loading</div>",
    },
  });

  try {
    // The else slot should be displayed
    expect(wrapper.html()).toContain("<div>feature is not enabled</div>");

    // Simulate config change, with the feature flag value set to true
    await clientMock.changeValue(true);

    // The default slot should be displayed
    expect(wrapper.html()).toContain("<div>the new feature</div>");
  } finally {
    wrapper.unmount();
  }
});
