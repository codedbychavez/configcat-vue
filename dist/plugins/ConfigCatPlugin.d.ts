import { PollingMode } from "configcat-common";
import type { App } from "vue";
import type { IAutoPollOptions, ILazyLoadingOptions, IManualPollOptions } from "configcat-common";
type ClientOptions<TMode extends PollingMode> = {
    [PollingMode.AutoPoll]: IAutoPollOptions;
    [PollingMode.ManualPoll]: IManualPollOptions;
    [PollingMode.LazyLoad]: ILazyLoadingOptions;
}[TMode];
export type PluginOptions<TMode extends PollingMode = PollingMode.AutoPoll> = {
    sdkKey: string;
    clientOptions?: ClientOptions<TMode>;
} & (TMode extends PollingMode.AutoPoll ? {
    pollingMode?: TMode;
} : {
    pollingMode: TMode;
});
declare const _default: {
    install: (app: App, options: PluginOptions<PollingMode.AutoPoll> | PluginOptions<PollingMode.LazyLoad> | PluginOptions<PollingMode.ManualPoll>) => void;
};
export default _default;
