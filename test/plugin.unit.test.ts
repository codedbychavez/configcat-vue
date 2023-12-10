import { createApp, h } from "vue";
import { test, expect } from "vitest";

import { ConfigCatPlugin } from "../src";
import { PollingMode, createConsoleLogger, LogLevel } from "../src";

test("plugin installs without errors", () => {
  const app = createApp({
    render: () => h("div"),
  });

  expect(() => {
    app.use(ConfigCatPlugin, {
      sdkKey: "YOUR-CONFIGCAT-SDK-KEY",
    });
  }).not.toThrow();
});

test("throws error when sdkKey is not provided", () => {
  const app = createApp({
    render: () => h("div"),
  });
  expect(() => {
    app.use(ConfigCatPlugin, {});
  }).toThrow();
});

test("the plugin installs when a polling mode is specified", () => {
  const app = createApp({
    render: () => h("div"),
  });

  expect(() => {
    app.use(ConfigCatPlugin, {
      sdkKey: "YOUR-CONFIGCAT-SDK-KEY",
      pollingMode: PollingMode.AutoPoll,
    });
  }).not.toThrow();
});

test("the plugin installs when a logger is specified", () => {
  const app = createApp({
    render: () => h("div"),
  });

  expect(() => {
    app.use(ConfigCatPlugin, {
      sdkKey: "YOUR-CONFIGCAT-SDK-KEY",
      pollingMode: PollingMode.AutoPoll,
      clientOptions: {
        logger: createConsoleLogger(LogLevel.Info),
      },
    });
  }).not.toThrow();
});

test("the plugin installs when a pollingIntervalSeconds is specified", () => {
  const app = createApp({
    render: () => h("div"),
  });

  expect(() => {
    app.use(ConfigCatPlugin, {
      sdkKey: "YOUR-CONFIGCAT-SDK-KEY",
      pollingMode: PollingMode.AutoPoll,
      clientOptions: {
        logger: createConsoleLogger(LogLevel.Info),
        pollIntervalSeconds: 5,
      },
    });
  }).not.toThrow();
});
