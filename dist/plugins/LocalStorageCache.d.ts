import type { IConfigCatCache, IConfigCatKernel } from "configcat-common";
export declare class LocalStorageCache implements IConfigCatCache {
    private readonly storage;
    static setup(kernel: IConfigCatKernel, localStorageGetter?: () => Storage | null): IConfigCatKernel;
    constructor(storage: Storage);
    set(key: string, value: string): void;
    get(key: string): string | undefined;
}
export declare function getLocalStorage(): Storage | null;
export declare function toUtf8Base64(str: string): string;
export declare function fromUtf8Base64(str: string): string;
