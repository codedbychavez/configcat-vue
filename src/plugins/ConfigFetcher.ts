import type {
  IConfigFetcher,
  IFetchResponse,
  OptionsBase,
} from "configcat-common";
import { FetchError } from "configcat-common";

export class HttpConfigFetcher implements IConfigFetcher {
  private handleStateChange(
    httpRequest: XMLHttpRequest,
    resolve: (value: IFetchResponse) => void,
    reject: (reason?: any) => void
  ) {
    try {
      if (httpRequest.readyState === 4) {
        const { status: statusCode, statusText: reasonPhrase } = httpRequest;

        if (statusCode === 200) {
          const eTag: string | undefined =
            httpRequest.getResponseHeader("ETag") ?? void 0;
          resolve({
            statusCode,
            reasonPhrase,
            eTag,
            body: httpRequest.responseText,
          });
        } else if (statusCode) {
          resolve({ statusCode, reasonPhrase });
        }
      }
    } catch (err) {
      reject(err);
    }
  }

  fetchLogic(options: OptionsBase, _: string | null): Promise<IFetchResponse> {
    return new Promise<IFetchResponse>((resolve, reject) => {
      try {
        options.logger.debug("HttpConfigFetcher.fetchLogic() called.");

        const httpRequest: XMLHttpRequest = new XMLHttpRequest();

        httpRequest.onreadystatechange = () =>
          this.handleStateChange(httpRequest, resolve, reject);
        httpRequest.ontimeout = () =>
          reject(new FetchError("timeout", options.requestTimeoutMs));
        httpRequest.onabort = () => reject(new FetchError("abort"));
        httpRequest.onerror = () => reject(new FetchError("failure"));

        httpRequest.open("GET", options.getUrl(), true);
        httpRequest.timeout = options.requestTimeoutMs;

        httpRequest.send(null);
      } catch (err) {
        reject(err);
      }
    });
  }
}
