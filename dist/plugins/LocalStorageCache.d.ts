import type { IConfigCatCache } from "configcat-common";
export declare class LocalStorageCache implements IConfigCatCache {
    set(key: string, value: string): void;
    get(key: string): string | undefined;
}
