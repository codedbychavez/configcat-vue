/** @implements import("configcat-common").IConfigCatCache */
export class LocalStorageCache {
  set(key, value) {
    try {
      localStorage.setItem(key, btoa(value));
    }
    catch (ex) {
      // local storage is unavailable
    }
  }

  get(key) {
    try {
      const configString = localStorage.getItem(key);
      if (configString) {
        return atob(configString);
      }
    }
    catch (ex) {
      // local storage is unavailable or invalid cache value in localstorage
    }
  }
}
