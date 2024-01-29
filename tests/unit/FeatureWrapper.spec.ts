import { mount } from "@vue/test-utils";
import { test, expect } from "vitest";

// Mock Component
import { ClientCacheState, FeatureWrapper, HookEvents, OverrideBehaviour, SettingTypeOf, SettingValue, User, createFlagOverridesFromMap } from "../../src";
import ConfigCatPlugin, { type PluginOptions } from "../../src/plugins/ConfigCatPlugin";
import { ConfigCatClientMockBase, ConfigCatClientSnapshotMockBase } from "../mocks/ConfigCatClientMocks";

test("The default slot should render when the isFeatureFlagEnabled value is true", () => {
  const featureFlagKey = "isFeatureFlagEnabled";

  const pluginOptions: PluginOptions = {
    sdkKey: "local-only",
    clientOptions: {
      flagOverrides: createFlagOverridesFromMap({ [featureFlagKey]: true }, OverrideBehaviour.LocalOnly)
     }
  };

  const wrapper = mount(FeatureWrapper, {
    global: {
      plugins: [[ConfigCatPlugin, pluginOptions]]
    },
    props: {
      featureKey: featureFlagKey
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
  }
  finally {
    wrapper.unmount();
  }
});

test("The else slot should render when the isFeatureFlagEnabled value is false", () => {
  const featureFlagKey = "isFeatureFlagEnabled";

  const pluginOptions: PluginOptions = {
    sdkKey: "local-only",
    clientOptions: {
      flagOverrides: createFlagOverridesFromMap({ [featureFlagKey]: false }, OverrideBehaviour.LocalOnly)
     }
  };

  const wrapper = mount(FeatureWrapper, {
    global: {
      plugins: [[ConfigCatPlugin, pluginOptions]]
    },
    props: {
      featureKey: featureFlagKey
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
  }
  finally {
    wrapper.unmount();
  }
});

test("The loading slot should render when the client is still initializing", () => {
  const featureFlagKey = "isFeatureFlagEnabled";

  // To test this scenario, we can't use flag overrides because there's no initialization period in that case,
  // feature flag values provided by flag overrides are available immediately.
  // So, we have to take the hard way: we need to provide a mock implementation of `IConfigCatClient` to the component.

  const clientMock = new class extends ConfigCatClientMockBase {
    snapshot() {
      return new ConfigCatClientSnapshotMockBase(ClientCacheState.NoFlagData);
    }

    getValueAsync<T extends SettingValue>(key: string, defaultValue: T, user?: User | undefined): Promise<SettingTypeOf<T>> {
      if (key === featureFlagKey) {
        return new Promise(_ => {}); // by returning a Promise which never fullfils, we can make the initialization period infinite
      }

      return super.getValueAsync(key, defaultValue, user);
    }
    
    off<TEventName extends keyof HookEvents>(eventName: TEventName, listener: (...args: HookEvents[TEventName]) => void): this {
      if (eventName == "configChanged") {
        return this;
      }

      return super.off(eventName, listener);
    }
  }();

  const wrapper = mount(FeatureWrapper, {
    global: {
      provide: {
        configCatClient: clientMock
      }
    },
    props: {
      featureKey: featureFlagKey
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
  }
  finally {
    wrapper.unmount();
  }
});
