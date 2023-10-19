import type { IConfigFetcher, IFetchResponse, OptionsBase } from "configcat-common";
export declare class HttpConfigFetcher implements IConfigFetcher {
    private handleStateChange;
    fetchLogic(options: OptionsBase, _: string | null): Promise<IFetchResponse>;
}
