import { defineComponent as bt, ref as Ct, inject as Nt, onBeforeMount as Rt, onUnmounted as Ft, renderSlot as ue } from "vue";
var ve;
(function(i) {
  i[i.No = 0] = "No", i[i.Should = 1] = "Should", i[i.Force = 2] = "Force";
})(ve || (ve = {}));
var te;
(function(i) {
  i[i.Boolean = 0] = "Boolean", i[i.String = 1] = "String", i[i.Int = 2] = "Int", i[i.Double = 3] = "Double";
})(te || (te = {}));
var ye;
(function(i) {
  i[i.TextIsOneOf = 0] = "TextIsOneOf", i[i.TextIsNotOneOf = 1] = "TextIsNotOneOf", i[i.TextContainsAnyOf = 2] = "TextContainsAnyOf", i[i.TextNotContainsAnyOf = 3] = "TextNotContainsAnyOf", i[i.SemVerIsOneOf = 4] = "SemVerIsOneOf", i[i.SemVerIsNotOneOf = 5] = "SemVerIsNotOneOf", i[i.SemVerLess = 6] = "SemVerLess", i[i.SemVerLessOrEquals = 7] = "SemVerLessOrEquals", i[i.SemVerGreater = 8] = "SemVerGreater", i[i.SemVerGreaterOrEquals = 9] = "SemVerGreaterOrEquals", i[i.NumberEquals = 10] = "NumberEquals", i[i.NumberNotEquals = 11] = "NumberNotEquals", i[i.NumberLess = 12] = "NumberLess", i[i.NumberLessOrEquals = 13] = "NumberLessOrEquals", i[i.NumberGreater = 14] = "NumberGreater", i[i.NumberGreaterOrEquals = 15] = "NumberGreaterOrEquals", i[i.SensitiveTextIsOneOf = 16] = "SensitiveTextIsOneOf", i[i.SensitiveTextIsNotOneOf = 17] = "SensitiveTextIsNotOneOf", i[i.DateTimeBefore = 18] = "DateTimeBefore", i[i.DateTimeAfter = 19] = "DateTimeAfter", i[i.SensitiveTextEquals = 20] = "SensitiveTextEquals", i[i.SensitiveTextNotEquals = 21] = "SensitiveTextNotEquals", i[i.SensitiveTextStartsWithAnyOf = 22] = "SensitiveTextStartsWithAnyOf", i[i.SensitiveTextNotStartsWithAnyOf = 23] = "SensitiveTextNotStartsWithAnyOf", i[i.SensitiveTextEndsWithAnyOf = 24] = "SensitiveTextEndsWithAnyOf", i[i.SensitiveTextNotEndsWithAnyOf = 25] = "SensitiveTextNotEndsWithAnyOf", i[i.SensitiveArrayContainsAnyOf = 26] = "SensitiveArrayContainsAnyOf", i[i.SensitiveArrayNotContainsAnyOf = 27] = "SensitiveArrayNotContainsAnyOf", i[i.TextEquals = 28] = "TextEquals", i[i.TextNotEquals = 29] = "TextNotEquals", i[i.TextStartsWithAnyOf = 30] = "TextStartsWithAnyOf", i[i.TextNotStartsWithAnyOf = 31] = "TextNotStartsWithAnyOf", i[i.TextEndsWithAnyOf = 32] = "TextEndsWithAnyOf", i[i.TextNotEndsWithAnyOf = 33] = "TextNotEndsWithAnyOf", i[i.ArrayContainsAnyOf = 34] = "ArrayContainsAnyOf", i[i.ArrayNotContainsAnyOf = 35] = "ArrayNotContainsAnyOf";
})(ye || (ye = {}));
var me;
(function(i) {
  i[i.Equals = 0] = "Equals", i[i.NotEquals = 1] = "NotEquals";
})(me || (me = {}));
var Ee;
(function(i) {
  i[i.IsIn = 0] = "IsIn", i[i.IsNotIn = 1] = "IsNotIn";
})(Ee || (Ee = {}));
const Tn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get PrerequisiteFlagComparator() {
    return me;
  },
  get RedirectMode() {
    return ve;
  },
  get SegmentComparator() {
    return Ee;
  },
  get SettingType() {
    return te;
  },
  get UserComparator() {
    return ye;
  }
}, Symbol.toStringTag, { value: "Module" }));
class O {
  static equals(e, t) {
    return e.httpETag && t.httpETag ? e.httpETag === t.httpETag : e.configJson === t.configJson;
  }
  constructor(e, t, n, s) {
    this.configJson = e, this.config = t, this.timestamp = n, this.httpETag = s;
  }
  with(e) {
    return new O(this.configJson, this.config, e, this.httpETag);
  }
  get isEmpty() {
    return !this.config;
  }
  isExpired(e) {
    return this === O.empty || this.timestamp + e < O.generateTimestamp();
  }
  static generateTimestamp() {
    return (/* @__PURE__ */ new Date()).getTime();
  }
  static serialize(e) {
    var t, n;
    return e.timestamp + `
` + ((t = e.httpETag) !== null && t !== void 0 ? t : "") + `
` + ((n = e.configJson) !== null && n !== void 0 ? n : "");
  }
  static deserialize(e) {
    const t = Array(2);
    let n = 0;
    for (let u = 0; u < t.length; u++) {
      if (n = e.indexOf(`
`, n), n < 0)
        throw new Error("Number of values is fewer than expected.");
      t[u] = n++;
    }
    let s = t[0], r = e.substring(0, s);
    const o = parseInt(r);
    if (isNaN(o))
      throw new Error("Invalid fetch time: " + r);
    n = s + 1, s = t[1], r = e.substring(n, s);
    const a = r.length > 0 ? r : void 0;
    n = s + 1, r = e.substring(n);
    let l, c;
    return r.length > 0 && (l = U.deserialize(r), c = r), new O(c, l, o, a);
  }
}
O.serializationFormatVersion = "v2";
O.empty = new O(void 0, void 0, 0, void 0);
class U {
  static deserialize(e) {
    const t = JSON.parse(e);
    if (typeof t != "object" || !t)
      throw new Error("Invalid config JSON content:" + e);
    return new U(t);
  }
  constructor(e) {
    var t, n;
    this.preferences = e.p != null ? new Lt(e.p) : void 0, this.segments = (n = (t = e.s) === null || t === void 0 ? void 0 : t.map((s) => new kt(s))) !== null && n !== void 0 ? n : [], this.settings = e.f != null ? Object.entries(e.f).reduce((s, [r, o]) => (s[r] = new $(o, this), s), {}) : {};
  }
  get salt() {
    var e;
    return (e = this.preferences) === null || e === void 0 ? void 0 : e.salt;
  }
}
class Lt {
  constructor(e) {
    this.baseUrl = e.u, this.redirectMode = e.r, this.salt = e.s;
  }
}
class kt {
  constructor(e) {
    var t, n;
    this.name = e.n, this.conditions = (n = (t = e.r) === null || t === void 0 ? void 0 : t.map((s) => new ot(s))) !== null && n !== void 0 ? n : [];
  }
}
class Fe {
  constructor(e, t = !1) {
    this.value = t ? e.v : at(e.v), this.variationId = e.i;
  }
}
class $ extends Fe {
  constructor(e, t) {
    var n, s, r, o, a, l;
    super(e, e.t < 0), this.type = e.t, this.percentageOptionsAttribute = (n = e.a) !== null && n !== void 0 ? n : "Identifier", this.targetingRules = (r = (s = e.r) === null || s === void 0 ? void 0 : s.map((c) => new Dt(c, t))) !== null && r !== void 0 ? r : [], this.percentageOptions = (a = (o = e.p) === null || o === void 0 ? void 0 : o.map((c) => new rt(c))) !== null && a !== void 0 ? a : [], this.configJsonSalt = (l = t == null ? void 0 : t.salt) !== null && l !== void 0 ? l : "";
  }
  static fromValue(e) {
    return new $({
      t: -1,
      v: e
    });
  }
}
class Dt {
  constructor(e, t) {
    var n, s;
    this.conditions = (s = (n = e.c) === null || n === void 0 ? void 0 : n.map((r) => r.u != null ? new ot(r.u) : r.p != null ? new $t(r.p) : r.s != null ? new Pt(r.s, t) : void 0)) !== null && s !== void 0 ? s : [], this.then = e.p != null ? e.p.map((r) => new rt(r)) : new Fe(e.s);
  }
}
class rt extends Fe {
  constructor(e) {
    super(e), this.percentage = e.p;
  }
}
class ot {
  constructor(e) {
    var t, n;
    this.type = "UserCondition", this.comparisonAttribute = e.a, this.comparator = e.c, this.comparisonValue = (n = (t = e.s) !== null && t !== void 0 ? t : e.d) !== null && n !== void 0 ? n : e.l;
  }
}
class $t {
  constructor(e) {
    this.type = "PrerequisiteFlagCondition", this.prerequisiteFlagKey = e.f, this.comparator = e.c, this.comparisonValue = at(e.v);
  }
}
class Pt {
  constructor(e, t) {
    this.type = "SegmentCondition", this.segment = t.segments[e.s], this.comparator = e.c;
  }
}
function at(i) {
  var e, t, n;
  return (n = (t = (e = i.b) !== null && e !== void 0 ? e : i.s) !== null && t !== void 0 ? t : i.i) !== null && n !== void 0 ? n : i.d;
}
function Mt(i) {
  return te[i];
}
var Oe;
(function(i) {
  i[i.Fetched = 0] = "Fetched", i[i.NotModified = 1] = "NotModified", i[i.Errored = 2] = "Errored";
})(Oe || (Oe = {}));
class I {
  constructor(e, t, n, s) {
    this.status = e, this.config = t, this.errorMessage = n, this.errorException = s;
  }
  static success(e) {
    return new I(0, e);
  }
  static notModified(e) {
    return new I(1, e);
  }
  static error(e, t, n) {
    return new I(2, e, t ?? "Unknown error.", n);
  }
}
class b extends Error {
  constructor(e, ...t) {
    super(((n, s) => {
      switch (n) {
        case "abort":
          return "Request was aborted.";
        case "timeout":
          const [r] = s;
          return `Request timed out. Timeout value: ${r}ms`;
        case "failure":
          const [o] = s, a = "Request failed due to a network or protocol error.";
          return o ? a + " " + (o instanceof Error ? o.message : o + "") : a;
      }
    })(e, t)), this.cause = e, this instanceof b || (Object.setPrototypeOf || ((n, s) => n.__proto__ = s))(this, b.prototype), this.args = t;
  }
}
class N {
  constructor(e, t) {
    this.errorMessage = e, this.errorException = t;
  }
  get isSuccess() {
    return this.errorMessage === null;
  }
  static from(e) {
    return e.status !== 2 ? N.success() : N.failure(e.errorMessage, e.errorException);
  }
  static success() {
    return new N(null);
  }
  static failure(e, t) {
    return new N(e, t);
  }
}
var ne;
(function(i) {
  i[i.NoFlagData = 0] = "NoFlagData", i[i.HasLocalOverrideFlagDataOnly = 1] = "HasLocalOverrideFlagDataOnly", i[i.HasCachedFlagDataOnly = 2] = "HasCachedFlagDataOnly", i[i.HasUpToDateFlagData = 3] = "HasUpToDateFlagData";
})(ne || (ne = {}));
var Se;
(function(i) {
  i[i.Online = 0] = "Online", i[i.Offline = 1] = "Offline", i[i.Disposed = 2] = "Disposed";
})(Se || (Se = {}));
function Ve(i) {
  return Se[i];
}
class Le {
  constructor(e, t) {
    this.configFetcher = e, this.options = t, this.pendingFetch = null, this.cacheKey = t.getCacheKey(), this.configFetcher = e, this.options = t, this.status = t.offline ? 1 : 0;
  }
  dispose() {
    this.status = 2;
  }
  get disposed() {
    return this.status === 2;
  }
  async refreshConfigAsync() {
    const e = await this.options.cache.get(this.cacheKey);
    if (this.isOffline) {
      const t = this.options.logger.configServiceCannotInitiateHttpCalls().toString();
      return [N.failure(t), e];
    } else {
      const [t, n] = await this.refreshConfigCoreAsync(e);
      return [N.from(t), n];
    }
  }
  async refreshConfigCoreAsync(e) {
    const t = await this.fetchAsync(e);
    let n = !1;
    const s = t.status === 0;
    return (s || t.config.timestamp > e.timestamp && (!t.config.isEmpty || e.isEmpty)) && (await this.options.cache.set(this.cacheKey, t.config), n = s && !O.equals(t.config, e), e = t.config), this.onConfigFetched(t.config), n && this.onConfigChanged(t.config), [t, e];
  }
  onConfigFetched(e) {
    this.options.logger.debug("config fetched");
  }
  onConfigChanged(e) {
    var t;
    this.options.logger.debug("config changed"), this.options.hooks.emit("configChanged", (t = e.config) !== null && t !== void 0 ? t : new U({}));
  }
  fetchAsync(e) {
    var t;
    return (t = this.pendingFetch) !== null && t !== void 0 ? t : this.pendingFetch = (async () => {
      try {
        return await this.fetchLogicAsync(e);
      } finally {
        this.pendingFetch = null;
      }
    })();
  }
  async fetchLogicAsync(e) {
    var t;
    const n = this.options;
    n.logger.debug("ConfigServiceBase.fetchLogicAsync() - called.");
    let s;
    try {
      const [r, o] = await this.fetchRequestAsync((t = e.httpETag) !== null && t !== void 0 ? t : null);
      switch (r.statusCode) {
        case 200:
          return o instanceof U ? (n.logger.debug("ConfigServiceBase.fetchLogicAsync(): fetch was successful. Returning new config."), I.success(new O(r.body, o, O.generateTimestamp(), r.eTag))) : (s = n.logger.fetchReceived200WithInvalidBody(o).toString(), n.logger.debug(`ConfigServiceBase.fetchLogicAsync(): ${r.statusCode} ${r.reasonPhrase} was received but the HTTP response content was invalid. Returning null.`), I.error(e, s, o));
        case 304:
          return e.isEmpty ? (s = n.logger.fetchReceived304WhenLocalCacheIsEmpty(r.statusCode, r.reasonPhrase).toString(), n.logger.debug(`ConfigServiceBase.fetchLogicAsync(): ${r.statusCode} ${r.reasonPhrase} was received when no config is cached locally. Returning null.`), I.error(e, s)) : (n.logger.debug("ConfigServiceBase.fetchLogicAsync(): content was not modified. Returning last config with updated timestamp."), I.notModified(e.with(O.generateTimestamp())));
        case 403:
        case 404:
          return s = n.logger.fetchFailedDueToInvalidSdkKey().toString(), n.logger.debug("ConfigServiceBase.fetchLogicAsync(): fetch was unsuccessful. Returning last config (if any) with updated timestamp."), I.error(e.with(O.generateTimestamp()), s);
        default:
          return s = n.logger.fetchFailedDueToUnexpectedHttpResponse(r.statusCode, r.reasonPhrase).toString(), n.logger.debug("ConfigServiceBase.fetchLogicAsync(): fetch was unsuccessful. Returning null."), I.error(e, s);
      }
    } catch (r) {
      return s = (r instanceof b && r.cause === "timeout" ? n.logger.fetchFailedDueToRequestTimeout(r.args[0], r) : n.logger.fetchFailedDueToUnexpectedError(r)).toString(), n.logger.debug("ConfigServiceBase.fetchLogicAsync(): fetch was unsuccessful. Returning null."), I.error(e, s, r);
    }
  }
  async fetchRequestAsync(e, t = 2) {
    const n = this.options;
    n.logger.debug("ConfigServiceBase.fetchRequestAsync() - called.");
    for (let s = 0; ; s++) {
      n.logger.debug(`ConfigServiceBase.fetchRequestAsync(): calling fetchLogic()${s > 0 ? `, retry ${s}/${t}` : ""}`);
      const r = await this.configFetcher.fetchLogic(n, e);
      if (r.statusCode !== 200)
        return [r];
      if (!r.body)
        return n.logger.debug("ConfigServiceBase.fetchRequestAsync(): no response body."), [r, new Error("No response body.")];
      let o;
      try {
        o = U.deserialize(r.body);
      } catch (u) {
        return n.logger.debug("ConfigServiceBase.fetchRequestAsync(): invalid response body."), [r, u];
      }
      const a = o.preferences;
      if (!a)
        return n.logger.debug("ConfigServiceBase.fetchRequestAsync(): preferences is empty."), [r, o];
      const l = a.baseUrl;
      if (!l || l === n.baseUrl)
        return n.logger.debug("ConfigServiceBase.fetchRequestAsync(): baseUrl OK."), [r, o];
      const c = a.redirectMode;
      if (n.baseUrlOverriden && c !== 2)
        return n.logger.debug("ConfigServiceBase.fetchRequestAsync(): options.baseUrlOverriden && redirect !== 2."), [r, o];
      if (n.baseUrl = l, c === 0)
        return [r, o];
      if (c === 1 && n.logger.dataGovernanceIsOutOfSync(), s >= t)
        return n.logger.fetchFailedDueToRedirectLoop(), [r, o];
    }
  }
  get isOfflineExactly() {
    return this.status === 1;
  }
  get isOffline() {
    return this.status !== 0;
  }
  setOnlineCore() {
  }
  setOnline() {
    this.status === 1 ? (this.setOnlineCore(), this.status = 0, this.options.logger.configServiceStatusChanged(Ve(this.status))) : this.disposed && this.options.logger.configServiceMethodHasNoEffectDueToDisposedClient("setOnline");
  }
  setOfflineCore() {
  }
  setOffline() {
    this.status === 0 ? (this.setOfflineCore(), this.status = 1, this.options.logger.configServiceStatusChanged(Ve(this.status))) : this.disposed && this.options.logger.configServiceMethodHasNoEffectDueToDisposedClient("setOffline");
  }
  syncUpWithCache() {
    return this.options.cache.get(this.cacheKey);
  }
  async getReadyPromise(e, t) {
    const n = await t(e);
    return this.options.hooks.emit("clientReady", n), n;
  }
}
class he {
  constructor() {
    this.callbacks = [];
  }
  get aborted() {
    return !this.callbacks;
  }
  abort() {
    if (!this.aborted) {
      const e = this.callbacks;
      this.callbacks = null;
      for (const t of e)
        t();
    }
  }
  registerCallback(e) {
    return this.aborted ? (e(), () => {
    }) : (this.callbacks.push(e), () => {
      const t = this.callbacks;
      let n;
      t && (n = t.indexOf(e)) >= 0 && t.splice(n, 1);
    });
  }
}
function qe(i, e) {
  let t;
  return new Promise((n) => {
    const s = e == null ? void 0 : e.registerCallback(() => {
      clearTimeout(t), n(!1);
    });
    t = setTimeout(() => {
      s == null || s(), n(!0);
    }, i);
  });
}
function D(i, e = !1) {
  return i instanceof Error ? e && i.stack ? i.stack : i.toString() : i + "";
}
function Be(i) {
  throw i;
}
function x(i) {
  return Array.isArray(i);
}
function ke(i) {
  return x(i) && !i.some((e) => typeof e != "string");
}
function De(i, e = 0, t, n = ", ") {
  const s = i.length;
  if (!s)
    return "";
  let r = "";
  return e > 0 && s > e && (i = i.slice(0, e), t && (r = t(s - e))), "'" + i.join("'" + n + "'") + "'" + r;
}
function Ut(i) {
  return typeof (i == null ? void 0 : i.then) == "function";
}
function K(i) {
  function e(o, a) {
    const l = o.charCodeAt(a);
    if (55296 <= l && l < 56320) {
      const c = o.charCodeAt(a + 1);
      if (56320 <= c && c <= 57343)
        return (l << 10) + c - 56613888;
    }
    return l;
  }
  let t = "", n = 0;
  const s = String.fromCharCode;
  let r;
  for (r = 0; r < i.length; r++) {
    const o = e(i, r);
    o <= 127 || (t += i.slice(n, r), o <= 2047 ? (t += s(192 | o >> 6), t += s(128 | o & 63)) : o <= 65535 ? (t += s(224 | o >> 12), t += s(128 | o >> 6 & 63), t += s(128 | o & 63)) : (t += s(240 | o >> 18), t += s(128 | o >> 12 & 63), t += s(128 | o >> 6 & 63), t += s(128 | o & 63), ++r), n = r + 1);
  }
  return t += i.slice(n, r);
}
function $e(i) {
  return typeof i == "number" ? i : typeof i != "string" || !i.length || /^\s*$|^\s*0[^\d.e]/.test(i) ? NaN : +i;
}
const xt = 500;
class _t extends Le {
  constructor(e, t) {
    super(e, t), this.signalInitialization = () => {
    }, this.stopToken = new he(), this.pollIntervalMs = t.pollIntervalSeconds * 1e3, this.pollExpirationMs = this.pollIntervalMs - xt;
    const n = this.syncUpWithCache();
    if (t.maxInitWaitTimeSeconds !== 0) {
      this.initialized = !1;
      const s = new Promise((r) => this.signalInitialization = r);
      this.initializationPromise = this.waitForInitializationAsync(s).then((r) => (this.initialized = !0, r));
    } else
      this.initialized = !0, this.initializationPromise = Promise.resolve(!1);
    this.readyPromise = this.getReadyPromise(this.initializationPromise, async (s) => (await s, this.getCacheState(this.options.cache.getInMemory()))), t.offline || this.startRefreshWorker(n, this.stopToken);
  }
  async waitForInitializationAsync(e) {
    if (this.options.maxInitWaitTimeSeconds < 0)
      return await e, !0;
    const t = new he(), n = await Promise.race([
      e.then(() => !0),
      qe(this.options.maxInitWaitTimeSeconds * 1e3, t).then(() => !1)
    ]);
    return t.abort(), n;
  }
  async getConfig() {
    this.options.logger.debug("AutoPollConfigService.getConfig() called.");
    function e(n) {
      n.debug("AutoPollConfigService.getConfig() - returning value from cache.");
    }
    let t;
    if (!this.isOffline && !this.initialized) {
      if (t = await this.options.cache.get(this.cacheKey), !t.isExpired(this.pollIntervalMs))
        return e(this.options.logger), t;
      this.options.logger.debug("AutoPollConfigService.getConfig() - cache is empty or expired, waiting for initialization."), await this.initializationPromise;
    }
    return t = await this.options.cache.get(this.cacheKey), t.isExpired(this.pollIntervalMs) ? this.options.logger.debug("AutoPollConfigService.getConfig() - cache is empty or expired.") : e(this.options.logger), t;
  }
  refreshConfigAsync() {
    return this.options.logger.debug("AutoPollConfigService.refreshConfigAsync() called."), super.refreshConfigAsync();
  }
  dispose() {
    this.options.logger.debug("AutoPollConfigService.dispose() called."), super.dispose(), this.stopToken.aborted || this.stopRefreshWorker();
  }
  onConfigFetched(e) {
    this.signalInitialization(), super.onConfigFetched(e);
  }
  setOnlineCore() {
    this.startRefreshWorker(null, this.stopToken);
  }
  setOfflineCore() {
    this.stopRefreshWorker(), this.stopToken = new he();
  }
  async startRefreshWorker(e, t) {
    this.options.logger.debug("AutoPollConfigService.startRefreshWorker() called.");
    let n = !0;
    for (; !t.aborted; ) {
      try {
        const s = (/* @__PURE__ */ new Date()).getTime() + this.pollIntervalMs;
        try {
          await this.refreshWorkerLogic(n, e);
        } catch (o) {
          this.options.logger.autoPollConfigServiceErrorDuringPolling(o);
        }
        const r = s - (/* @__PURE__ */ new Date()).getTime();
        r > 0 && await qe(r, t);
      } catch (s) {
        this.options.logger.autoPollConfigServiceErrorDuringPolling(s);
      }
      n = !1, e = null;
    }
  }
  stopRefreshWorker() {
    this.options.logger.debug("AutoPollConfigService.stopRefreshWorker() called."), this.stopToken.abort();
  }
  async refreshWorkerLogic(e, t) {
    this.options.logger.debug("AutoPollConfigService.refreshWorkerLogic() - called.");
    const n = await (t ?? this.options.cache.get(this.cacheKey));
    n.isExpired(this.pollExpirationMs) ? (e ? !this.isOfflineExactly : !this.isOffline) && await this.refreshConfigCoreAsync(n) : e && this.signalInitialization();
  }
  getCacheState(e) {
    return e.isEmpty ? 0 : e.isExpired(this.pollIntervalMs) ? 2 : 3;
  }
}
class lt {
  constructor() {
    this.cachedConfig = O.empty;
  }
  set(e, t) {
    this.cachedConfig = t;
  }
  get(e) {
    return this.cachedConfig;
  }
  getInMemory() {
    return this.cachedConfig;
  }
}
class ae {
  constructor(e, t) {
    this.cache = e, this.logger = t, this.cachedConfig = O.empty;
  }
  async set(e, t) {
    try {
      if (!t.isEmpty)
        this.cachedSerializedConfig = O.serialize(t), this.cachedConfig = t;
      else {
        this.cachedSerializedConfig = void 0, this.cachedConfig = t;
        return;
      }
      await this.cache.set(e, this.cachedSerializedConfig);
    } catch (n) {
      this.logger.configServiceCacheWriteError(n);
    }
  }
  updateCachedConfig(e) {
    e == null || e === this.cachedSerializedConfig || (this.cachedConfig = O.deserialize(e), this.cachedSerializedConfig = e);
  }
  get(e) {
    try {
      const t = this.cache.get(e);
      if (Ut(t))
        return (async (n) => {
          try {
            this.updateCachedConfig(await n);
          } catch (s) {
            this.logger.configServiceCacheReadError(s);
          }
          return this.cachedConfig;
        })(t);
      this.updateCachedConfig(t);
    } catch (t) {
      this.logger.configServiceCacheReadError(t);
    }
    return Promise.resolve(this.cachedConfig);
  }
  getInMemory() {
    return this.cachedConfig;
  }
}
var Ae;
(function(i) {
  i[i.Debug = 4] = "Debug", i[i.Info = 3] = "Info", i[i.Warn = 2] = "Warn", i[i.Error = 1] = "Error", i[i.Off = -1] = "Off";
})(Ae || (Ae = {}));
function Vt(i) {
  return Ae[i];
}
class y {
  static from(...e) {
    return (t, ...n) => new y(t, e, n);
  }
  constructor(e, t, n) {
    this.strings = e, this.argNames = t, this.argValues = n;
  }
  get defaultFormattedMessage() {
    let e = this.cachedDefaultFormattedMessage;
    if (e === void 0) {
      e = "";
      const { strings: t, argValues: n } = this;
      let s = 0;
      for (; s < t.length - 1; s++)
        e += t[s], e += n[s];
      e += t[s], this.cachedDefaultFormattedMessage = e;
    }
    return e;
  }
  toString() {
    return this.defaultFormattedMessage;
  }
}
class qt {
  get level() {
    var e;
    return (e = this.logger.level) !== null && e !== void 0 ? e : 2;
  }
  get eol() {
    var e;
    return (e = this.logger.eol) !== null && e !== void 0 ? e : `
`;
  }
  constructor(e, t) {
    this.logger = e, this.hooks = t;
  }
  isEnabled(e) {
    return this.level >= e;
  }
  log(e, t, n, s) {
    var r;
    return this.isEnabled(e) && this.logger.log(e, t, n, s), e === 1 && ((r = this.hooks) === null || r === void 0 || r.emit("clientError", n.toString(), s)), n;
  }
  debug(e) {
    this.log(4, 0, e);
  }
  configJsonIsNotPresent(e) {
    return this.log(1, 1e3, y.from("DEFAULT_RETURN_VALUE")`Config JSON is not present. Returning ${e}.`);
  }
  configJsonIsNotPresentSingle(e, t, n) {
    return this.log(1, 1e3, y.from("KEY", "DEFAULT_PARAM_NAME", "DEFAULT_PARAM_VALUE")`Config JSON is not present when evaluating setting '${e}'. Returning the \`${t}\` parameter that you specified in your application: '${n}'.`);
  }
  settingEvaluationFailedDueToMissingKey(e, t, n, s) {
    return this.log(1, 1001, y.from("KEY", "DEFAULT_PARAM_NAME", "DEFAULT_PARAM_VALUE", "AVAILABLE_KEYS")`Failed to evaluate setting '${e}' (the key was not found in config JSON). Returning the \`${t}\` parameter that you specified in your application: '${n}'. Available keys: [${s}].`);
  }
  settingEvaluationError(e, t, n) {
    return this.log(1, 1002, y.from("METHOD_NAME", "DEFAULT_RETURN_VALUE")`Error occurred in the \`${e}\` method. Returning ${t}.`, n);
  }
  settingEvaluationErrorSingle(e, t, n, s, r) {
    return this.log(1, 1002, y.from("METHOD_NAME", "KEY", "DEFAULT_PARAM_NAME", "DEFAULT_PARAM_VALUE")`Error occurred in the \`${e}\` method while evaluating setting '${t}'. Returning the \`${n}\` parameter that you specified in your application: '${s}'.`, r);
  }
  forceRefreshError(e, t) {
    return this.log(1, 1003, y.from("METHOD_NAME")`Error occurred in the \`${e}\` method.`, t);
  }
  fetchFailedDueToInvalidSdkKey() {
    return this.log(1, 1100, "Your SDK Key seems to be wrong. You can find the valid SDK Key at https://app.configcat.com/sdkkey");
  }
  fetchFailedDueToUnexpectedHttpResponse(e, t) {
    return this.log(1, 1101, y.from("STATUS_CODE", "REASON_PHRASE")`Unexpected HTTP response was received while trying to fetch config JSON: ${e} ${t}`);
  }
  fetchFailedDueToRequestTimeout(e, t) {
    return this.log(1, 1102, y.from("TIMEOUT")`Request timed out while trying to fetch config JSON. Timeout value: ${e}ms`, t);
  }
  fetchFailedDueToUnexpectedError(e) {
    return this.log(1, 1103, "Unexpected error occurred while trying to fetch config JSON. It is most likely due to a local network issue. Please make sure your application can reach the ConfigCat CDN servers (or your proxy server) over HTTP.", e);
  }
  fetchFailedDueToRedirectLoop() {
    return this.log(1, 1104, "Redirection loop encountered while trying to fetch config JSON. Please contact us at https://configcat.com/support/");
  }
  fetchReceived200WithInvalidBody(e) {
    return this.log(1, 1105, "Fetching config JSON was successful but the HTTP response content was invalid.", e);
  }
  fetchReceived304WhenLocalCacheIsEmpty(e, t) {
    return this.log(1, 1106, y.from("STATUS_CODE", "REASON_PHRASE")`Unexpected HTTP response was received when no config JSON is cached locally: ${e} ${t}`);
  }
  autoPollConfigServiceErrorDuringPolling(e) {
    return this.log(1, 1200, "Error occurred during auto polling.", e);
  }
  settingForVariationIdIsNotPresent(e) {
    return this.log(1, 2011, y.from("VARIATION_ID")`Could not find the setting for the specified variation ID: '${e}'.`);
  }
  configServiceCacheReadError(e) {
    return this.log(1, 2200, "Error occurred while reading the cache.", e);
  }
  configServiceCacheWriteError(e) {
    return this.log(1, 2201, "Error occurred while writing the cache.", e);
  }
  clientIsAlreadyCreated(e) {
    return this.log(2, 3e3, y.from("SDK_KEY")`There is an existing client instance for the specified SDK Key. No new client instance will be created and the specified options are ignored. Returning the existing client instance. SDK Key: '${e}'.`);
  }
  userObjectIsMissing(e) {
    return this.log(2, 3001, y.from("KEY")`Cannot evaluate targeting rules and % options for setting '${e}' (User Object is missing). You should pass a User Object to the evaluation methods like \`getValueAsync()\` in order to make targeting work properly. Read more: https://configcat.com/docs/advanced/user-object/`);
  }
  dataGovernanceIsOutOfSync() {
    return this.log(2, 3002, "The `dataGovernance` parameter specified at the client initialization is not in sync with the preferences on the ConfigCat Dashboard. Read more: https://configcat.com/docs/advanced/data-governance/");
  }
  userObjectAttributeIsMissingPercentage(e, t) {
    return this.log(2, 3003, y.from("KEY", "ATTRIBUTE_NAME", "ATTRIBUTE_NAME")`Cannot evaluate % options for setting '${e}' (the User.${t} attribute is missing). You should set the User.${t} attribute in order to make targeting work properly. Read more: https://configcat.com/docs/advanced/user-object/`);
  }
  userObjectAttributeIsMissingCondition(e, t, n) {
    return this.log(2, 3003, y.from("CONDITION", "KEY", "ATTRIBUTE_NAME", "ATTRIBUTE_NAME")`Cannot evaluate condition (${e}) for setting '${t}' (the User.${n} attribute is missing). You should set the User.${n} attribute in order to make targeting work properly. Read more: https://configcat.com/docs/advanced/user-object/`);
  }
  userObjectAttributeIsInvalid(e, t, n, s) {
    return this.log(2, 3004, y.from("CONDITION", "KEY", "REASON", "ATTRIBUTE_NAME")`Cannot evaluate condition (${e}) for setting '${t}' (${n}). Please check the User.${s} attribute and make sure that its value corresponds to the comparison operator.`);
  }
  userObjectAttributeIsAutoConverted(e, t, n, s) {
    return this.log(2, 3005, y.from("CONDITION", "KEY", "ATTRIBUTE_NAME", "ATTRIBUTE_VALUE")`Evaluation of condition (${e}) for setting '${t}' may not produce the expected result (the User.${n} attribute is not a string value, thus it was automatically converted to the string value '${s}'). Please make sure that using a non-string value was intended.`);
  }
  configServiceCannotInitiateHttpCalls() {
    return this.log(2, 3200, "Client is in offline mode, it cannot initiate HTTP calls.");
  }
  configServiceMethodHasNoEffectDueToDisposedClient(e) {
    return this.log(2, 3201, y.from("METHOD_NAME")`The client object is already disposed, thus \`${e}()\` has no effect.`);
  }
  configServiceMethodHasNoEffectDueToOverrideBehavior(e, t) {
    return this.log(2, 3202, y.from("OVERRIDE_BEHAVIOR", "METHOD_NAME")`Client is configured to use the \`${e}\` override behavior, thus \`${t}()\` has no effect.`);
  }
  settingEvaluated(e) {
    return this.log(3, 5e3, y.from("EVALUATE_LOG")`${e}`);
  }
  configServiceStatusChanged(e) {
    return this.log(3, 5200, y.from("MODE")`Switched to ${e.toUpperCase()} mode.`);
  }
}
class ct {
  constructor(e = 2, t = `
`) {
    this.level = e, this.eol = t, this.SOURCE = "ConfigCat";
  }
  log(e, t, n, s) {
    const [r, o] = e === 4 ? [console.info, "DEBUG"] : e === 3 ? [console.info, "INFO"] : e === 2 ? [console.warn, "WARN"] : e === 1 ? [console.error, "ERROR"] : [console.log, Vt(e).toUpperCase()], a = s !== void 0 ? this.eol + D(s, !0) : "";
    r(`${this.SOURCE} - ${o} - [${t}] ${n}${a}`);
  }
}
class we {
  constructor() {
    this.addListener = this.on, this.off = this.removeListener;
  }
  on() {
    return this;
  }
  once() {
    return this;
  }
  removeListener() {
    return this;
  }
  removeAllListeners() {
    return this;
  }
  listeners() {
    return [];
  }
  listenerCount() {
    return 0;
  }
  eventNames() {
    return [];
  }
  emit() {
    return !1;
  }
}
function ut(i) {
  function e(F, L) {
    var J = F << L | F >>> 32 - L;
    return J;
  }
  var t, n, s, r = new Array(80), o = 1732584193, a = 4023233417, l = 2562383102, c = 271733878, u = 3285377520, h, g, f, p, m, A;
  i = K(i);
  var E = i.length, w = new Array();
  for (n = 0; n < E - 3; n += 4)
    s = i.charCodeAt(n) << 24 | i.charCodeAt(n + 1) << 16 | i.charCodeAt(n + 2) << 8 | i.charCodeAt(n + 3), w.push(s);
  switch (E % 4) {
    case 0:
      n = 2147483648;
      break;
    case 1:
      n = i.charCodeAt(E - 1) << 24 | 8388608;
      break;
    case 2:
      n = i.charCodeAt(E - 2) << 24 | i.charCodeAt(E - 1) << 16 | 32768;
      break;
    case 3:
      n = i.charCodeAt(E - 3) << 24 | i.charCodeAt(E - 2) << 16 | i.charCodeAt(E - 1) << 8 | 128;
      break;
  }
  for (w.push(n); w.length % 16 != 14; )
    w.push(0);
  for (w.push(E >>> 29), w.push(E << 3 & 4294967295), t = 0; t < w.length; t += 16) {
    for (n = 0; n < 16; n++)
      r[n] = w[t + n];
    for (n = 16; n <= 79; n++)
      r[n] = e(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1);
    for (h = o, g = a, f = l, p = c, m = u, n = 0; n <= 19; n++)
      A = e(h, 5) + (g & f | ~g & p) + m + r[n] + 1518500249 & 4294967295, m = p, p = f, f = e(g, 30), g = h, h = A;
    for (n = 20; n <= 39; n++)
      A = e(h, 5) + (g ^ f ^ p) + m + r[n] + 1859775393 & 4294967295, m = p, p = f, f = e(g, 30), g = h, h = A;
    for (n = 40; n <= 59; n++)
      A = e(h, 5) + (g & f | g & p | f & p) + m + r[n] + 2400959708 & 4294967295, m = p, p = f, f = e(g, 30), g = h, h = A;
    for (n = 60; n <= 79; n++)
      A = e(h, 5) + (g ^ f ^ p) + m + r[n] + 3395469782 & 4294967295, m = p, p = f, f = e(g, 30), g = h, h = A;
    o = o + h & 4294967295, a = a + g & 4294967295, l = l + f & 4294967295, c = c + p & 4294967295, u = u + m & 4294967295;
  }
  return gt([o, a, l, c, u]);
}
function ht(i) {
  function e(xe, _e) {
    return xe >>> _e | xe << 32 - _e;
  }
  const t = "length";
  var n = Math.pow, s = n(2, 32), r, o, a = ht, l = a.h, c = a.k;
  if (!c) {
    l = [], c = [];
    for (var u = {}, h = 2, g = 0; g < 64; h++)
      if (!u[h]) {
        for (r = 0; r < 313; r += h)
          u[r] = h;
        l[g] = n(h, 0.5) * s | 0, c[g++] = n(h, 1 / 3) * s | 0;
      }
    a.h = l = l.slice(0, 8), a.k = c;
  }
  var f = i[t] * 8;
  i += "";
  for (var p = []; i[t] % 64 - 56; )
    i += "\0";
  for (r = 0; r < i[t]; r++)
    o = i.charCodeAt(r), p[r >> 2] |= o << (3 - r) % 4 * 8;
  for (p[p[t]] = f / s | 0, p[p[t]] = f, o = 0; o < p[t]; ) {
    var m = p.slice(o, o += 16), A = l;
    for (l = l.slice(0, 8), r = 0; r < 64; r++) {
      var E = m[r - 15], w = m[r - 2], F = l[0], L = l[4], J = l[7] + (e(L, 6) ^ e(L, 11) ^ e(L, 25)) + (L & l[5] ^ ~L & l[6]) + c[r] + (m[r] = r < 16 ? m[r] : m[r - 16] + (e(E, 7) ^ e(E, 18) ^ E >>> 3) + m[r - 7] + (e(w, 17) ^ e(w, 19) ^ w >>> 10) | 0), It = (e(F, 2) ^ e(F, 13) ^ e(F, 22)) + (F & l[1] ^ F & l[2] ^ l[1] & l[2]);
      l = [J + It | 0].concat(l), l[4] = l[4] + J | 0;
    }
    for (r = 0; r < 8; r++)
      l[r] = l[r] + A[r] | 0;
  }
  return gt(l, 8);
}
function gt(i, e) {
  const t = "0123456789abcdef";
  var n = "";
  e ?? (e = i.length);
  for (let s = 0; s < e; s++)
    for (let r = 3; r >= 0; r--) {
      const o = i[s] >> (r << 3) & 255;
      n += t[o >> 4], n += t[o & 15];
    }
  return n;
}
const We = new we();
class Ke {
  constructor(e) {
    this.addListener = this.on, this.off = this.removeListener, this.eventEmitter = e;
  }
  tryDisconnect() {
    const e = this.eventEmitter;
    return this.eventEmitter = We, e !== We;
  }
  on(e, t) {
    return this.eventEmitter.on(e, t), this;
  }
  once(e, t) {
    return this.eventEmitter.once(e, t), this;
  }
  removeListener(e, t) {
    return this.eventEmitter.removeListener(e, t), this;
  }
  removeAllListeners(e) {
    return this.eventEmitter.removeAllListeners(e), this;
  }
  listeners(e) {
    return this.eventEmitter.listeners(e);
  }
  listenerCount(e) {
    return this.eventEmitter.listenerCount(e);
  }
  eventNames() {
    return this.eventEmitter.eventNames();
  }
  emit(e, ...t) {
    return this.eventEmitter.emit(e, ...t);
  }
}
function ft() {
  const i = function(e) {
    this.target = e;
  };
  return i.prototype.deref = function() {
    return this.target;
  }, i.isFallback = !0, i;
}
const dt = () => typeof WeakRef == "function";
var Te;
(function(i) {
  i[i.AutoPoll = 0] = "AutoPoll", i[i.LazyLoad = 1] = "LazyLoad", i[i.ManualPoll = 2] = "ManualPoll";
})(Te || (Te = {}));
var He;
(function(i) {
  i[i.Global = 0] = "Global", i[i.EuOnly = 1] = "EuOnly";
})(He || (He = {}));
class P {
  constructor(e, t, n, s, r) {
    var o, a, l;
    if (this.requestTimeoutMs = 3e4, this.baseUrlOverriden = !1, this.offline = !1, !e)
      throw new Error("Invalid 'sdkKey' value");
    switch (this.sdkKey = e, this.clientVersion = t, this.dataGovernance = (o = n == null ? void 0 : n.dataGovernance) !== null && o !== void 0 ? o : 0, this.dataGovernance) {
      case 1:
        this.baseUrl = "https://cdn-eu.configcat.com";
        break;
      default:
        this.baseUrl = "https://cdn-global.configcat.com";
        break;
    }
    const c = (a = r == null ? void 0 : r()) !== null && a !== void 0 ? a : new we(), u = new Ke(c), h = new (dt() ? WeakRef : ft())(u);
    this.hooks = {
      hooks: u,
      hooksWeakRef: h,
      emit(p, ...m) {
        var A, E;
        return (E = (A = this.hooksWeakRef.deref()) === null || A === void 0 ? void 0 : A.emit(p, ...m)) !== null && E !== void 0 ? E : !1;
      }
    };
    let g, f;
    if (n) {
      if (g = n.logger, f = n.cache, n.requestTimeoutMs) {
        if (n.requestTimeoutMs < 0)
          throw new Error("Invalid 'requestTimeoutMs' value");
        this.requestTimeoutMs = n.requestTimeoutMs;
      }
      n.baseUrl && (this.baseUrl = n.baseUrl, this.baseUrlOverriden = !0), n.flagOverrides && (this.flagOverrides = n.flagOverrides), n.defaultUser && (this.defaultUser = n.defaultUser), n.offline && (this.offline = n.offline), (l = n.setupHooks) === null || l === void 0 || l.call(n, u);
    }
    this.logger = new qt(g ?? new ct(), this.hooks), this.cache = f ? new ae(f, this.logger) : s ? s(this) : new lt();
  }
  yieldHooks() {
    const e = this.hooks, t = e.hooks;
    return delete e.hooks, t ?? new Ke(new we());
  }
  getUrl() {
    return this.baseUrl + "/configuration-files/" + this.sdkKey + "/" + P.configFileName + "?sdk=" + this.clientVersion;
  }
  getCacheKey() {
    return ut(`${this.sdkKey}_${P.configFileName}_${O.serializationFormatVersion}`);
  }
}
P.configFileName = "config_v6.json";
class ze extends P {
  constructor(e, t, n, s, r, o) {
    super(e, t + "/a-" + n, s, r, o), this.pollIntervalSeconds = 60, this.maxInitWaitTimeSeconds = 5, s && (s.pollIntervalSeconds != null && (this.pollIntervalSeconds = s.pollIntervalSeconds), s.maxInitWaitTimeSeconds != null && (this.maxInitWaitTimeSeconds = s.maxInitWaitTimeSeconds));
    const a = 2147483;
    if (!(typeof this.pollIntervalSeconds == "number" && 1 <= this.pollIntervalSeconds && this.pollIntervalSeconds <= a))
      throw new Error("Invalid 'pollIntervalSeconds' value");
    if (!(typeof this.maxInitWaitTimeSeconds == "number" && this.maxInitWaitTimeSeconds <= a))
      throw new Error("Invalid 'maxInitWaitTimeSeconds' value");
  }
}
class je extends P {
  constructor(e, t, n, s, r, o) {
    super(e, t + "/m-" + n, s, r, o);
  }
}
class Je extends P {
  constructor(e, t, n, s, r, o) {
    if (super(e, t + "/l-" + n, s, r, o), this.cacheTimeToLiveSeconds = 60, s && s.cacheTimeToLiveSeconds != null && (this.cacheTimeToLiveSeconds = s.cacheTimeToLiveSeconds), !(typeof this.cacheTimeToLiveSeconds == "number" && 1 <= this.cacheTimeToLiveSeconds && this.cacheTimeToLiveSeconds <= 2147483647))
      throw new Error("Invalid 'cacheTimeToLiveSeconds' value");
  }
}
var Ie;
(function(i) {
  i[i.LocalOnly = 0] = "LocalOnly", i[i.LocalOverRemote = 1] = "LocalOverRemote", i[i.RemoteOverLocal = 2] = "RemoteOverLocal";
})(Ie || (Ie = {}));
function Bt(i) {
  return Ie[i];
}
class Wt {
  constructor(e, t) {
    this.initialSettings = Ge(e), t && (this.map = e);
  }
  getOverrides() {
    return Promise.resolve(this.getOverridesSync());
  }
  getOverridesSync() {
    return this.map ? Ge(this.map) : this.initialSettings;
  }
}
function Ge(i) {
  const e = {};
  for (const t in i)
    Object.prototype.hasOwnProperty.call(i, t) && (e[t] = $.fromValue(i[t]));
  return e;
}
const Kt = "cc-", G = ";str";
class Ht {
  get currentValue() {
    if (!(typeof location > "u"))
      return location.search;
  }
}
let Y;
class zt {
  constructor(e, t, n) {
    this.watchChanges = e, this.paramPrefix = t ?? Kt, n ?? (n = Y ?? (Y = new Ht())), this.queryStringProvider = n;
    const s = n.currentValue;
    this.settings = Qe(s, this.paramPrefix), this.queryString = Ye(s);
  }
  getOverrides() {
    return Promise.resolve(this.getOverridesSync());
  }
  getOverridesSync() {
    if (this.watchChanges) {
      const e = this.queryStringProvider.currentValue, t = Ye(e);
      this.queryString !== t && (this.settings = Qe(e, this.paramPrefix), this.queryString = t);
    }
    return this.settings;
  }
}
function Ye(i) {
  if (i == null)
    return "";
  if (typeof i == "string")
    return i;
  let e = "", t = "?";
  for (const n in i) {
    if (!Object.prototype.hasOwnProperty.call(i, n))
      continue;
    const s = i[n];
    let r, o;
    if (!x(s))
      r = s, o = 1;
    else if (s.length)
      r = s[0], o = s.length;
    else
      continue;
    for (let a = 0; e += t + encodeURIComponent(n) + "=" + encodeURIComponent(r), !(++a >= o); )
      t = "&", r = s[a];
  }
  return e;
}
function Qe(i, e) {
  const t = {};
  return typeof i == "string" ? Jt(i, e, t) : i != null && jt(i, e, t), t;
}
function jt(i, e, t) {
  for (const n in i) {
    if (!Object.prototype.hasOwnProperty.call(i, n))
      continue;
    const s = i[n];
    let r, o;
    if (!x(s))
      r = s, o = 1;
    else if (s.length)
      r = s[0], o = s.length;
    else
      continue;
    for (let a = 0; pt(n, r, e, t), !(++a >= o); )
      r = s[a];
  }
}
function Jt(i, e, t) {
  if (!i || i.lastIndexOf("?", 0) < 0)
    return;
  const n = i.substring(1).split("&");
  for (let s of n) {
    s = s.replace(/\+/g, " ");
    const r = s.indexOf("="), o = decodeURIComponent(r >= 0 ? s.substring(0, r) : s), a = r >= 0 ? decodeURIComponent(s.substring(r + 1)) : "";
    pt(o, a, e, t);
  }
}
function pt(i, e, t, n) {
  if (!i || i.length <= t.length || i.lastIndexOf(t, 0) < 0)
    return;
  i = i.substring(t.length), i.length > G.length && i.indexOf(G, i.length - G.length) >= 0 ? i = i.substring(0, i.length - G.length) : e = Gt(e), n[i] = $.fromValue(e);
}
function Gt(i) {
  switch (i.toLowerCase()) {
    case "false":
      return !1;
    case "true":
      return !0;
    default:
      const e = $e(i);
      return isNaN(e) ? i : e;
  }
}
class Yt extends Le {
  constructor(e, t) {
    super(e, t), this.cacheTimeToLiveMs = t.cacheTimeToLiveSeconds * 1e3;
    const n = this.syncUpWithCache();
    this.readyPromise = this.getReadyPromise(n, async (s) => this.getCacheState(await s));
  }
  async getConfig() {
    this.options.logger.debug("LazyLoadConfigService.getConfig() called.");
    function e(n, s = "") {
      n.debug(`LazyLoadConfigService.getConfig(): cache is empty or expired${s}.`);
    }
    let t = await this.options.cache.get(this.cacheKey);
    return t.isExpired(this.cacheTimeToLiveMs) ? (this.isOffline ? e(this.options.logger) : (e(this.options.logger, ", calling refreshConfigCoreAsync()"), [, t] = await this.refreshConfigCoreAsync(t)), t) : (this.options.logger.debug("LazyLoadConfigService.getConfig(): cache is valid, returning from cache."), t);
  }
  refreshConfigAsync() {
    return this.options.logger.debug("LazyLoadConfigService.refreshConfigAsync() called."), super.refreshConfigAsync();
  }
  getCacheState(e) {
    return e.isEmpty ? 0 : e.isExpired(this.cacheTimeToLiveMs) ? 2 : 3;
  }
}
class Qt extends Le {
  constructor(e, t) {
    super(e, t);
    const n = this.syncUpWithCache();
    this.readyPromise = this.getReadyPromise(n, async (s) => this.getCacheState(await s));
  }
  getCacheState(e) {
    return e.isEmpty ? 0 : 2;
  }
  async getConfig() {
    return this.options.logger.debug("ManualPollService.getConfig() called."), await this.options.cache.get(this.cacheKey);
  }
  refreshConfigAsync() {
    return this.options.logger.debug("ManualPollService.refreshConfigAsync() called."), super.refreshConfigAsync();
  }
}
const vt = "<invalid value>", ge = "<invalid name>", Pe = "<invalid operator>", Xe = "<invalid reference>", Xt = 10;
class yt {
  constructor(e) {
    this.eol = e, this.log = "", this.indent = "";
  }
  resetIndent() {
    return this.indent = "", this;
  }
  increaseIndent() {
    return this.indent += "  ", this;
  }
  decreaseIndent() {
    return this.indent = this.indent.slice(0, -2), this;
  }
  newLine(e) {
    return this.log += this.eol + this.indent + (e ?? ""), this;
  }
  append(e) {
    return this.log += e, this;
  }
  toString() {
    return this.log;
  }
  appendUserConditionCore(e, t, n) {
    return this.append(`User.${e} ${fe(t)} '${n ?? vt}'`);
  }
  appendUserConditionString(e, t, n, s) {
    return typeof n != "string" ? this.appendUserConditionCore(e, t) : this.appendUserConditionCore(e, t, s ? "<hashed value>" : n);
  }
  appendUserConditionStringList(e, t, n, s) {
    if (!ke(n))
      return this.appendUserConditionCore(e, t);
    const r = "value", o = "values", a = fe(t);
    if (s)
      return this.append(`User.${e} ${a} [<${n.length} hashed ${n.length === 1 ? r : o}>]`);
    {
      const l = De(n, Xt, (c) => `, ... <${c} more ${c === 1 ? r : o}>`);
      return this.append(`User.${e} ${a} [${l}]`);
    }
  }
  appendUserConditionNumber(e, t, n, s) {
    if (typeof n != "number")
      return this.appendUserConditionCore(e, t);
    const r = fe(t);
    let o;
    return s && !isNaN(o = new Date(n * 1e3)) ? this.append(`User.${e} ${r} '${n}' (${o.toISOString()} UTC)`) : this.append(`User.${e} ${r} '${n}'`);
  }
  appendUserCondition(e) {
    const t = typeof e.comparisonAttribute == "string" ? e.comparisonAttribute : ge, n = e.comparator;
    switch (e.comparator) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 30:
      case 31:
      case 32:
      case 33:
      case 34:
      case 35:
        return this.appendUserConditionStringList(t, n, e.comparisonValue, !1);
      case 6:
      case 7:
      case 8:
      case 9:
      case 28:
      case 29:
        return this.appendUserConditionString(t, n, e.comparisonValue, !1);
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
        return this.appendUserConditionNumber(t, n, e.comparisonValue);
      case 16:
      case 17:
      case 22:
      case 23:
      case 24:
      case 25:
      case 26:
      case 27:
        return this.appendUserConditionStringList(t, n, e.comparisonValue, !0);
      case 18:
      case 19:
        return this.appendUserConditionNumber(t, n, e.comparisonValue, !0);
      case 20:
      case 21:
        return this.appendUserConditionString(t, n, e.comparisonValue, !0);
      default:
        return this.appendUserConditionCore(t, n, e.comparisonValue);
    }
  }
  appendPrerequisiteFlagCondition(e, t) {
    const n = typeof e.prerequisiteFlagKey != "string" ? ge : e.prerequisiteFlagKey in t ? e.prerequisiteFlagKey : Xe, s = e.comparator, r = e.comparisonValue;
    return this.append(`Flag '${n}' ${Zt(s)} '${ie(r)}'`);
  }
  appendSegmentCondition(e) {
    const t = e.segment, n = e.comparator, s = t == null ? Xe : typeof t.name != "string" || !t.name ? ge : t.name;
    return this.append(`User ${mt(n)} '${s}'`);
  }
  appendConditionResult(e) {
    return this.append(`${e}`);
  }
  appendConditionConsequence(e) {
    return this.append(" => ").appendConditionResult(e), e ? this : this.append(", skipping the remaining AND conditions");
  }
  appendTargetingRuleThenPart(e, t) {
    (t ? this.newLine() : this.append(" ")).append("THEN");
    const n = e.then;
    return this.append(x(n) ? " % options" : ` '${ie(n.value)}'`);
  }
  appendTargetingRuleConsequence(e, t, n) {
    return this.increaseIndent(), this.appendTargetingRuleThenPart(e, n).append(" => ").append(t === !0 ? "MATCH, applying rule" : t === !1 ? "no match" : t), this.decreaseIndent();
  }
}
function fe(i) {
  switch (i) {
    case 0:
    case 16:
    case 4:
      return "IS ONE OF";
    case 1:
    case 17:
    case 5:
      return "IS NOT ONE OF";
    case 2:
      return "CONTAINS ANY OF";
    case 3:
      return "NOT CONTAINS ANY OF";
    case 6:
    case 12:
      return "<";
    case 7:
    case 13:
      return "<=";
    case 8:
    case 14:
      return ">";
    case 9:
    case 15:
      return ">=";
    case 10:
      return "=";
    case 11:
      return "!=";
    case 18:
      return "BEFORE";
    case 19:
      return "AFTER";
    case 28:
    case 20:
      return "EQUALS";
    case 29:
    case 21:
      return "NOT EQUALS";
    case 30:
    case 22:
      return "STARTS WITH ANY OF";
    case 31:
    case 23:
      return "NOT STARTS WITH ANY OF";
    case 32:
    case 24:
      return "ENDS WITH ANY OF";
    case 33:
    case 25:
      return "NOT ENDS WITH ANY OF";
    case 34:
    case 26:
      return "ARRAY CONTAINS ANY OF";
    case 35:
    case 27:
      return "ARRAY NOT CONTAINS ANY OF";
    default:
      return Pe;
  }
}
function Me(i) {
  return new yt("").appendUserCondition(i).toString();
}
function Zt(i) {
  switch (i) {
    case 0:
      return "EQUALS";
    case 1:
      return "NOT EQUALS";
    default:
      return Pe;
  }
}
function mt(i) {
  switch (i) {
    case 0:
      return "IS IN SEGMENT";
    case 1:
      return "IS NOT IN SEGMENT";
    default:
      return Pe;
  }
}
function ie(i) {
  return z(i) ? i.toString() : vt;
}
const Ze = /^[0-9]+$/, _ = (i, e) => {
  const t = Ze.test(i), n = Ze.test(e);
  return t && n && (i = +i, e = +e), i === e ? 0 : t && !n ? -1 : n && !t ? 1 : i < e ? -1 : 1;
}, be = 256, Q = Number.MAX_SAFE_INTEGER || 9007199254740991, H = [], v = [], d = {};
let en = 0;
const S = (i, e) => {
  const t = en++;
  d[i] = t, v[t] = e, H[t] = new RegExp(e);
};
S("NUMERICIDENTIFIER", "0|[1-9]\\d*");
S("NUMERICIDENTIFIERLOOSE", "[0-9]+");
S("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*");
S("MAINVERSION", `(${v[d.NUMERICIDENTIFIER]})\\.(${v[d.NUMERICIDENTIFIER]})\\.(${v[d.NUMERICIDENTIFIER]})`);
S("MAINVERSIONLOOSE", `(${v[d.NUMERICIDENTIFIERLOOSE]})\\.(${v[d.NUMERICIDENTIFIERLOOSE]})\\.(${v[d.NUMERICIDENTIFIERLOOSE]})`);
S("PRERELEASEIDENTIFIER", `(?:${v[d.NUMERICIDENTIFIER]}|${v[d.NONNUMERICIDENTIFIER]})`);
S("PRERELEASEIDENTIFIERLOOSE", `(?:${v[d.NUMERICIDENTIFIERLOOSE]}|${v[d.NONNUMERICIDENTIFIER]})`);
S("PRERELEASE", `(?:-(${v[d.PRERELEASEIDENTIFIER]}(?:\\.${v[d.PRERELEASEIDENTIFIER]})*))`);
S("PRERELEASELOOSE", `(?:-?(${v[d.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${v[d.PRERELEASEIDENTIFIERLOOSE]})*))`);
S("BUILDIDENTIFIER", "[0-9A-Za-z-]+");
S("BUILD", `(?:\\+(${v[d.BUILDIDENTIFIER]}(?:\\.${v[d.BUILDIDENTIFIER]})*))`);
S("FULLPLAIN", `v?${v[d.MAINVERSION]}${v[d.PRERELEASE]}?${v[d.BUILD]}?`);
S("FULL", `^${v[d.FULLPLAIN]}$`);
S("LOOSEPLAIN", `[v=\\s]*${v[d.MAINVERSIONLOOSE]}${v[d.PRERELEASELOOSE]}?${v[d.BUILD]}?`);
S("LOOSE", `^${v[d.LOOSEPLAIN]}$`);
class T {
  constructor(e, t) {
    if ((!t || typeof t != "object") && (t = {
      loose: !!t,
      includePrerelease: !1
    }), e instanceof T) {
      if (e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease)
        return e;
      e = e.version;
    } else if (typeof e != "string")
      throw new TypeError(`Invalid Version: ${e}`);
    if (e.length > be)
      throw new TypeError(`version is longer than ${be} characters`);
    this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease;
    const n = e.trim().match(t.loose ? H[d.LOOSE] : H[d.FULL]);
    if (!n)
      throw new TypeError(`Invalid Version: ${e}`);
    if (this.raw = e, this.major = +n[1], this.minor = +n[2], this.patch = +n[3], this.major > Q || this.major < 0)
      throw new TypeError("Invalid major version");
    if (this.minor > Q || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > Q || this.patch < 0)
      throw new TypeError("Invalid patch version");
    n[4] ? this.prerelease = n[4].split(".").map((s) => {
      if (/^[0-9]+$/.test(s)) {
        const r = +s;
        if (r >= 0 && r < Q)
          return r;
      }
      return s;
    }) : this.prerelease = [], this.build = n[5] ? n[5].split(".") : [], this.format();
  }
  format() {
    return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
  }
  toString() {
    return this.version;
  }
  compare(e) {
    if (!(e instanceof T)) {
      if (typeof e == "string" && e === this.version)
        return 0;
      e = new T(e, this.options);
    }
    return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e);
  }
  compareMain(e) {
    return e instanceof T || (e = new T(e, this.options)), _(this.major, e.major) || _(this.minor, e.minor) || _(this.patch, e.patch);
  }
  comparePre(e) {
    if (e instanceof T || (e = new T(e, this.options)), this.prerelease.length && !e.prerelease.length)
      return -1;
    if (!this.prerelease.length && e.prerelease.length)
      return 1;
    if (!this.prerelease.length && !e.prerelease.length)
      return 0;
    let t = 0;
    do {
      const n = this.prerelease[t], s = e.prerelease[t];
      if (n === void 0 && s === void 0)
        return 0;
      if (s === void 0)
        return 1;
      if (n === void 0)
        return -1;
      if (n === s)
        continue;
      return _(n, s);
    } while (++t);
  }
  compareBuild(e) {
    e instanceof T || (e = new T(e, this.options));
    let t = 0;
    do {
      const n = this.build[t], s = e.build[t];
      if (n === void 0 && s === void 0)
        return 0;
      if (s === void 0)
        return 1;
      if (n === void 0)
        return -1;
      if (n === s)
        continue;
      return _(n, s);
    } while (++t);
  }
  inc(e, t) {
    switch (e) {
      case "premajor":
        this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t);
        break;
      case "preminor":
        this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t);
        break;
      case "prepatch":
        this.prerelease.length = 0, this.inc("patch", t), this.inc("pre", t);
        break;
      case "prerelease":
        this.prerelease.length === 0 && this.inc("patch", t), this.inc("pre", t);
        break;
      case "major":
        (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
        break;
      case "minor":
        (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
        break;
      case "patch":
        this.prerelease.length === 0 && this.patch++, this.prerelease = [];
        break;
      case "pre":
        if (this.prerelease.length === 0)
          this.prerelease = [0];
        else {
          let n = this.prerelease.length;
          for (; --n >= 0; )
            typeof this.prerelease[n] == "number" && (this.prerelease[n]++, n = -2);
          n === -1 && this.prerelease.push(0);
        }
        t && (this.prerelease[0] === t ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0]) : this.prerelease = [t, 0]);
        break;
      default:
        throw new Error(`invalid increment argument: ${e}`);
    }
    return this.format(), this.raw = this.version, this;
  }
}
const Ce = (i, e) => {
  if ((!e || typeof e != "object") && (e = {
    loose: !!e,
    includePrerelease: !1
  }), i instanceof T)
    return i;
  if (typeof i != "string" || i.length > be || !(e.loose ? H[d.LOOSE] : H[d.FULL]).test(i))
    return null;
  try {
    return new T(i, e);
  } catch {
    return null;
  }
};
class In {
  constructor(e, t, n, s = {}) {
    this.identifier = e, this.email = t, this.country = n, this.custom = s;
  }
}
function et(i, e) {
  var t, n;
  switch (e) {
    case "Identifier":
      return (t = i.identifier) !== null && t !== void 0 ? t : "";
    case "Email":
      return i.email;
    case "Country":
      return i.country;
    default:
      return (n = i.custom) === null || n === void 0 ? void 0 : n[e];
  }
}
function tn(i) {
  var e;
  const t = {}, n = "Identifier", s = "Email", r = "Country";
  if (t[n] = (e = i.identifier) !== null && e !== void 0 ? e : "", i.email != null && (t[s] = i.email), i.country != null && (t[r] = i.country), i.custom != null) {
    const o = [n, s, r];
    for (const [a, l] of Object.entries(i.custom))
      l != null && o.indexOf(a) < 0 && (t[a] = l);
  }
  return t;
}
class j {
  get visitedFlags() {
    var e;
    return (e = this.$visitedFlags) !== null && e !== void 0 ? e : this.$visitedFlags = [];
  }
  constructor(e, t, n, s) {
    this.key = e, this.setting = t, this.user = n, this.settings = s;
  }
  static forPrerequisiteFlag(e, t, n) {
    const s = new j(e, t, n.user, n.settings);
    return s.$visitedFlags = n.visitedFlags, s.logBuilder = n.logBuilder, s;
  }
}
const tt = "The current targeting rule is ignored and the evaluation continues with the next rule.", de = "cannot evaluate, User Object is missing", nn = (i) => `cannot evaluate, the User.${i} attribute is missing`, sn = (i, e) => `cannot evaluate, the User.${i} attribute is invalid (${e})`;
class rn {
  constructor(e) {
    this.logger = e;
  }
  evaluate(e, t) {
    this.logger.debug("RolloutEvaluator.evaluate() called.");
    let n = t.logBuilder;
    this.logger.isEnabled(3) && (t.logBuilder = n = new yt(this.logger.eol), n.append(`Evaluating '${t.key}'`), t.user && n.append(` for User '${JSON.stringify(tn(t.user))}'`), n.increaseIndent());
    let s;
    try {
      let r, o;
      if (e != null) {
        const a = t.setting.type;
        if (a >= 0 && !ln(e, a)) {
          const l = Mt(a);
          throw new TypeError(`The type of a setting must match the type of the specified default value. Setting's type was ${l} but the default value's type was ${typeof e}. Please use a default value which corresponds to the setting type ${l}. Learn more: https://configcat.com/docs/sdk-reference/js/#setting-type-mapping`);
        }
        r = this.evaluateSetting(t), s = r.selectedValue.value, o = typeof s == typeof e;
      } else
        r = this.evaluateSetting(t), s = r.selectedValue.value, o = z(s);
      return o || Re(s), r;
    } catch (r) {
      throw n == null || n.resetIndent().increaseIndent(), s = e, r;
    } finally {
      n && (n.newLine(`Returning '${s}'.`).decreaseIndent(), this.logger.settingEvaluated(n.toString()));
    }
  }
  evaluateSetting(e) {
    let t;
    const n = e.setting.targetingRules;
    if (n.length > 0 && (t = this.evaluateTargetingRules(n, e)))
      return t;
    const s = e.setting.percentageOptions;
    return s.length > 0 && (t = this.evaluatePercentageOptions(s, void 0, e)) ? t : { selectedValue: e.setting };
  }
  evaluateTargetingRules(e, t) {
    const n = t.logBuilder;
    n == null || n.newLine("Evaluating targeting rules and applying the first match if any:");
    for (let s = 0; s < e.length; s++) {
      const r = e[s], o = r.conditions, a = this.evaluateConditions(o, r, t.key, t);
      if (a !== !0) {
        V(a) && (n == null || n.increaseIndent().newLine(tt).decreaseIndent());
        continue;
      }
      if (!x(r.then))
        return { selectedValue: r.then, matchedTargetingRule: r };
      const l = r.then;
      n == null || n.increaseIndent();
      const c = this.evaluatePercentageOptions(l, r, t);
      if (c)
        return n == null || n.decreaseIndent(), c;
      n == null || n.newLine(tt).decreaseIndent();
    }
  }
  evaluatePercentageOptions(e, t, n) {
    const s = n.logBuilder;
    if (!n.user) {
      s == null || s.newLine("Skipping % options because the User Object is missing."), n.isMissingUserObjectLogged || (this.logger.userObjectIsMissing(n.key), n.isMissingUserObjectLogged = !0);
      return;
    }
    const r = n.setting.percentageOptionsAttribute, o = et(n.user, r);
    if (o == null) {
      s == null || s.newLine(`Skipping % options because the User.${r} attribute is missing.`), n.isMissingUserObjectAttributeLogged || (this.logger.userObjectAttributeIsMissingPercentage(n.key, r), n.isMissingUserObjectAttributeLogged = !0);
      return;
    }
    s == null || s.newLine(`Evaluating % options based on the User.${r} attribute:`);
    const a = ut(n.key + Ot(o)), l = parseInt(a.substring(0, 7), 16) % 100;
    s == null || s.newLine(`- Computing hash in the [0..99] range from User.${r} => ${l} (this value is sticky and consistent across all SDKs)`);
    let c = 0;
    for (let u = 0; u < e.length; u++) {
      const h = e[u];
      if (c += h.percentage, !(l >= c))
        return s == null || s.newLine(`- Hash value ${l} selects % option ${u + 1} (${h.percentage}%), '${ie(h.value)}'.`), { selectedValue: h, matchedTargetingRule: t, matchedPercentageOption: h };
    }
    throw new Error("Sum of percentage option percentages is less than 100.");
  }
  evaluateConditions(e, t, n, s) {
    let r = !0;
    const o = s.logBuilder;
    let a = !1;
    o == null || o.newLine("- ");
    for (let l = 0; l < e.length; l++) {
      const c = e[l];
      switch (o && (l ? o.increaseIndent().newLine("AND ") : o.append("IF ").increaseIndent()), c.type) {
        case "UserCondition":
          r = this.evaluateUserCondition(c, n, s), a = e.length > 1;
          break;
        case "PrerequisiteFlagCondition":
          r = this.evaluatePrerequisiteFlagCondition(c, s), a = !0;
          break;
        case "SegmentCondition":
          r = this.evaluateSegmentCondition(c, s), a = !V(r) || r !== de || e.length > 1;
          break;
        default:
          throw new Error();
      }
      const u = r === !0;
      if (o && ((!t || e.length > 1) && o.appendConditionConsequence(u), o.decreaseIndent()), !u)
        break;
    }
    return t && (o == null || o.appendTargetingRuleConsequence(t, r, a)), r;
  }
  evaluateUserCondition(e, t, n) {
    const s = n.logBuilder;
    if (s == null || s.appendUserCondition(e), !n.user)
      return n.isMissingUserObjectLogged || (this.logger.userObjectIsMissing(n.key), n.isMissingUserObjectLogged = !0), de;
    const r = e.comparisonAttribute, o = et(n.user, r);
    if (o == null || o === "")
      return this.logger.userObjectAttributeIsMissingCondition(Me(e), n.key, r), nn(r);
    let a, l, c, u;
    switch (e.comparator) {
      case 28:
      case 29:
        return a = C(r, o, e, n.key, this.logger), this.evaluateTextEquals(a, e.comparisonValue, e.comparator === 29);
      case 20:
      case 21:
        return a = C(r, o, e, n.key, this.logger), this.evaluateSensitiveTextEquals(a, e.comparisonValue, n.setting.configJsonSalt, t, e.comparator === 21);
      case 0:
      case 1:
        return a = C(r, o, e, n.key, this.logger), this.evaluateTextIsOneOf(a, e.comparisonValue, e.comparator === 1);
      case 16:
      case 17:
        return a = C(r, o, e, n.key, this.logger), this.evaluateSensitiveTextIsOneOf(a, e.comparisonValue, n.setting.configJsonSalt, t, e.comparator === 17);
      case 30:
      case 31:
        return a = C(r, o, e, n.key, this.logger), this.evaluateTextSliceEqualsAnyOf(a, e.comparisonValue, !0, e.comparator === 31);
      case 22:
      case 23:
        return a = C(r, o, e, n.key, this.logger), this.evaluateSensitiveTextSliceEqualsAnyOf(a, e.comparisonValue, n.setting.configJsonSalt, t, !0, e.comparator === 23);
      case 32:
      case 33:
        return a = C(r, o, e, n.key, this.logger), this.evaluateTextSliceEqualsAnyOf(a, e.comparisonValue, !1, e.comparator === 33);
      case 24:
      case 25:
        return a = C(r, o, e, n.key, this.logger), this.evaluateSensitiveTextSliceEqualsAnyOf(a, e.comparisonValue, n.setting.configJsonSalt, t, !1, e.comparator === 25);
      case 2:
      case 3:
        return a = C(r, o, e, n.key, this.logger), this.evaluateTextContainsAnyOf(a, e.comparisonValue, e.comparator === 3);
      case 4:
      case 5:
        return l = nt(r, o, e, n.key, this.logger), typeof l != "string" ? this.evaluateSemVerIsOneOf(l, e.comparisonValue, e.comparator === 5) : l;
      case 6:
      case 7:
      case 8:
      case 9:
        return l = nt(r, o, e, n.key, this.logger), typeof l != "string" ? this.evaluateSemVerRelation(l, e.comparator, e.comparisonValue) : l;
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
        return c = on(r, o, e, n.key, this.logger), typeof c != "string" ? this.evaluateNumberRelation(c, e.comparator, e.comparisonValue) : c;
      case 18:
      case 19:
        return c = an(r, o, e, n.key, this.logger), typeof c != "string" ? this.evaluateDateTimeRelation(c, e.comparisonValue, e.comparator === 18) : c;
      case 34:
      case 35:
        return u = it(r, o, e, n.key, this.logger), typeof u != "string" ? this.evaluateArrayContainsAnyOf(u, e.comparisonValue, e.comparator === 35) : u;
      case 26:
      case 27:
        return u = it(r, o, e, n.key, this.logger), typeof u != "string" ? this.evaluateSensitiveArrayContainsAnyOf(u, e.comparisonValue, n.setting.configJsonSalt, t, e.comparator === 27) : u;
      default:
        throw new Error();
    }
  }
  evaluateTextEquals(e, t, n) {
    return e === t !== n;
  }
  evaluateSensitiveTextEquals(e, t, n, s, r) {
    return pe(e, n, s) === t !== r;
  }
  evaluateTextIsOneOf(e, t, n) {
    return t.indexOf(e) >= 0 !== n;
  }
  evaluateSensitiveTextIsOneOf(e, t, n, s, r) {
    const o = pe(e, n, s);
    return t.indexOf(o) >= 0 !== r;
  }
  evaluateTextSliceEqualsAnyOf(e, t, n, s) {
    for (let r = 0; r < t.length; r++) {
      const o = t[r];
      if (e.length < o.length)
        continue;
      if ((n ? e.lastIndexOf(o, 0) : e.indexOf(o, e.length - o.length)) >= 0)
        return !s;
    }
    return s;
  }
  evaluateSensitiveTextSliceEqualsAnyOf(e, t, n, s, r, o) {
    const a = K(e);
    for (let l = 0; l < t.length; l++) {
      const c = t[l], u = c.indexOf("_"), h = parseInt(c.slice(0, u));
      if (a.length < h)
        continue;
      const g = r ? a.slice(0, h) : a.slice(a.length - h);
      if (Et(g, n, s) === c.slice(u + 1))
        return !o;
    }
    return o;
  }
  evaluateTextContainsAnyOf(e, t, n) {
    for (let s = 0; s < t.length; s++)
      if (e.indexOf(t[s]) >= 0)
        return !n;
    return n;
  }
  evaluateSemVerIsOneOf(e, t, n) {
    let s = !1;
    for (let r = 0; r < t.length; r++) {
      const o = t[r];
      if (!o.length)
        continue;
      const a = Ce(o.trim());
      if (!a)
        return !1;
      !s && e.compare(a) === 0 && (s = !0);
    }
    return s !== n;
  }
  evaluateSemVerRelation(e, t, n) {
    const s = Ce(n.trim());
    if (!s)
      return !1;
    const r = e.compare(s);
    switch (t) {
      case 6:
        return r < 0;
      case 7:
        return r <= 0;
      case 8:
        return r > 0;
      case 9:
        return r >= 0;
    }
  }
  evaluateNumberRelation(e, t, n) {
    switch (t) {
      case 10:
        return e === n;
      case 11:
        return e !== n;
      case 12:
        return e < n;
      case 13:
        return e <= n;
      case 14:
        return e > n;
      case 15:
        return e >= n;
    }
  }
  evaluateDateTimeRelation(e, t, n) {
    return n ? e < t : e > t;
  }
  evaluateArrayContainsAnyOf(e, t, n) {
    for (let s = 0; s < e.length; s++)
      if (t.indexOf(e[s]) >= 0)
        return !n;
    return n;
  }
  evaluateSensitiveArrayContainsAnyOf(e, t, n, s, r) {
    for (let o = 0; o < e.length; o++) {
      const a = pe(e[o], n, s);
      if (t.indexOf(a) >= 0)
        return !r;
    }
    return r;
  }
  evaluatePrerequisiteFlagCondition(e, t) {
    const n = t.logBuilder;
    n == null || n.appendPrerequisiteFlagCondition(e, t.settings);
    const s = e.prerequisiteFlagKey, r = t.settings[s];
    if (t.visitedFlags.push(t.key), t.visitedFlags.indexOf(s) >= 0) {
      t.visitedFlags.push(s);
      const u = De(t.visitedFlags, void 0, void 0, " -> ");
      throw new Error(`Circular dependency detected between the following depending flags: ${u}.`);
    }
    const o = j.forPrerequisiteFlag(s, r, t);
    n == null || n.newLine("(").increaseIndent().newLine(`Evaluating prerequisite flag '${s}':`);
    const a = this.evaluateSetting(o);
    t.visitedFlags.pop();
    const l = a.selectedValue.value;
    if (typeof l != typeof e.comparisonValue) {
      if (z(l))
        throw new Error(`Type mismatch between comparison value '${e.comparisonValue}' and prerequisite flag '${s}'.`);
      Re(l);
    }
    let c;
    switch (e.comparator) {
      case 0:
        c = l === e.comparisonValue;
        break;
      case 1:
        c = l !== e.comparisonValue;
        break;
      default:
        throw new Error();
    }
    return n == null || n.newLine(`Prerequisite flag evaluation result: '${ie(l)}'.`).newLine("Condition (").appendPrerequisiteFlagCondition(e, t.settings).append(") evaluates to ").appendConditionResult(c).append(".").decreaseIndent().newLine(")"), c;
  }
  evaluateSegmentCondition(e, t) {
    const n = t.logBuilder;
    if (n == null || n.appendSegmentCondition(e), !t.user)
      return t.isMissingUserObjectLogged || (this.logger.userObjectIsMissing(t.key), t.isMissingUserObjectLogged = !0), de;
    const s = e.segment;
    n == null || n.newLine("(").increaseIndent().newLine(`Evaluating segment '${s.name}':`);
    const r = this.evaluateConditions(s.conditions, void 0, s.name, t);
    let o = r;
    if (!V(o))
      switch (e.comparator) {
        case 0:
          break;
        case 1:
          o = !o;
          break;
        default:
          throw new Error();
      }
    return n && (n.newLine("Segment evaluation result: "), (V(o) ? n.append(o) : n.append(`User ${mt(r ? 0 : 1)}`)).append("."), n.newLine("Condition (").appendSegmentCondition(e).append(")"), (V(o) ? n.append(" failed to evaluate") : n.append(" evaluates to ").appendConditionResult(o)).append("."), n.decreaseIndent().newLine(")")), o;
  }
}
function V(i) {
  return typeof i == "string";
}
function pe(i, e, t) {
  return Et(K(i), e, t);
}
function Et(i, e, t) {
  return ht(i + K(e) + K(t));
}
function Ot(i) {
  return typeof i == "string" ? i : i instanceof Date ? i.getTime() / 1e3 + "" : ke(i) ? JSON.stringify(i) : i + "";
}
function C(i, e, t, n, s) {
  return typeof e == "string" || (e = Ot(e), s.userObjectAttributeIsAutoConverted(Me(t), n, i, e)), e;
}
function nt(i, e, t, n, s) {
  let r;
  return typeof e == "string" && (r = Ce(e.trim())) ? r : le(s, t, n, i, `'${e}' is not a valid semantic version`);
}
function on(i, e, t, n, s) {
  if (typeof e == "number")
    return e;
  let r;
  return typeof e == "string" && (!isNaN(r = $e(e.replace(",", "."))) || e.trim() === "NaN") ? r : le(s, t, n, i, `'${e}' is not a valid decimal number`);
}
function an(i, e, t, n, s) {
  if (e instanceof Date)
    return e.getTime() / 1e3;
  if (typeof e == "number")
    return e;
  let r;
  return typeof e == "string" && (!isNaN(r = $e(e.replace(",", "."))) || e.trim() === "NaN") ? r : le(s, t, n, i, `'${e}' is not a valid Unix timestamp (number of seconds elapsed since Unix epoch)`);
}
function it(i, e, t, n, s) {
  let r = e;
  if (typeof r == "string")
    try {
      r = JSON.parse(r);
    } catch {
    }
  return ke(r) ? r : le(s, t, n, i, `'${e}' is not a valid string array`);
}
function le(i, e, t, n, s) {
  return i.userObjectAttributeIsInvalid(Me(e), t, s, n), sn(n, s);
}
function St(i, e, t, n) {
  return {
    key: i,
    value: e.selectedValue.value,
    variationId: e.selectedValue.variationId,
    fetchTime: t,
    user: n,
    isDefaultValue: !1,
    matchedTargetingRule: e.matchedTargetingRule,
    matchedPercentageOption: e.matchedPercentageOption
  };
}
function M(i, e, t, n, s, r) {
  return {
    key: i,
    value: e,
    fetchTime: t,
    user: n,
    isDefaultValue: !0,
    errorMessage: s,
    errorException: r
  };
}
function se(i, e, t, n, s, r, o) {
  let a;
  if (!e)
    return a = o.configJsonIsNotPresentSingle(t, "defaultValue", n).toString(), M(t, n, R(r), s, a);
  const l = e[t];
  if (!l)
    return a = o.settingEvaluationFailedDueToMissingKey(t, "defaultValue", n, De(Object.keys(e))).toString(), M(t, n, R(r), s, a);
  const c = i.evaluate(n, new j(t, l, s, e));
  return St(t, c, R(r), s);
}
function st(i, e, t, n, s, r) {
  let o;
  if (!Ne(e, s, r))
    return [[], o];
  const a = [];
  for (const [l, c] of Object.entries(e)) {
    let u;
    try {
      const h = i.evaluate(null, new j(l, c, t, e));
      u = St(l, h, R(n), t);
    } catch (h) {
      o ?? (o = []), o.push(h), u = M(l, null, R(n), t, D(h), h);
    }
    a.push(u);
  }
  return [a, o];
}
function Ne(i, e, t) {
  return i ? !0 : (e.configJsonIsNotPresent(t), !1);
}
function z(i) {
  return typeof i == "boolean" || typeof i == "string" || typeof i == "number";
}
function ln(i, e) {
  switch (e) {
    case 0:
      return typeof i == "boolean";
    case 1:
      return typeof i == "string";
    case 2:
    case 3:
      return typeof i == "number";
    default:
      return !1;
  }
}
function Re(i) {
  throw new TypeError(i === null ? "Setting value is null." : i === void 0 ? "Setting value is undefined." : `Setting value '${i}' is of an unsupported type (${typeof i}).`);
}
function R(i) {
  return i ? new Date(i.timestamp) : void 0;
}
class cn {
  constructor() {
    this.instances = {};
  }
  getOrCreate(e, t) {
    let n;
    const s = this.instances[e.sdkKey];
    if (s) {
      const [a] = s;
      if (n = a.deref(), n)
        return [n, !0];
    }
    const r = {};
    n = new k(e, t, r);
    const o = dt() ? WeakRef : ft();
    return this.instances[e.sdkKey] = [new o(n), r], [n, !1];
  }
  remove(e, t) {
    const n = this.instances[e];
    if (n) {
      const [s, r] = n, o = !!s.deref();
      if (!o || r === t)
        return delete this.instances[e], o;
    }
    return !1;
  }
  clear() {
    const e = [];
    for (const [t, [n]] of Object.entries(this.instances)) {
      const s = n.deref();
      s && e.push(s), delete this.instances[t];
    }
    return e;
  }
}
const q = new cn();
class k {
  static get instanceCache() {
    return q;
  }
  static get(e, t, n, s) {
    var r;
    const o = "Invalid 'sdkKey' value";
    if (!e)
      throw new Error(o);
    const a = t === 0 ? ze : t === 2 ? je : t === 1 ? Je : Be(new Error("Invalid 'pollingMode' value")), l = new a(e, s.sdkType, s.sdkVersion, n, s.defaultCacheFactory, s.eventEmitterFactory);
    if (((r = l.flagOverrides) === null || r === void 0 ? void 0 : r.behaviour) !== 0 && !un(e, l.baseUrlOverriden))
      throw new Error(o);
    const [c, u] = q.getOrCreate(l, s);
    return u && n && l.logger.clientIsAlreadyCreated(e), c;
  }
  constructor(e, t, n) {
    var s;
    if (this.cacheToken = n, this.addListener = this.on, this.off = this.removeListener, !e)
      throw new Error("Invalid 'options' value");
    if (this.options = e, this.options.logger.debug("Initializing ConfigCatClient. Options: " + JSON.stringify(this.options)), !t)
      throw new Error("Invalid 'configCatKernel' value");
    if (!t.configFetcher)
      throw new Error("Invalid 'configCatKernel.configFetcher' value");
    this.hooks = e.yieldHooks(), e.defaultUser && this.setDefaultUser(e.defaultUser), this.evaluator = new rn(e.logger), ((s = e.flagOverrides) === null || s === void 0 ? void 0 : s.behaviour) !== 0 ? this.configService = e instanceof ze ? new _t(t.configFetcher, e) : e instanceof je ? new Qt(t.configFetcher, e) : e instanceof Je ? new Yt(t.configFetcher, e) : Be(new Error("Invalid 'options' value")) : this.hooks.emit("clientReady", 1), this.suppressFinalize = ee(this, { sdkKey: e.sdkKey, cacheToken: n, configService: this.configService, logger: e.logger });
  }
  static finalize(e) {
    var t;
    (t = e.logger) === null || t === void 0 || t.debug("finalize() called"), e.cacheToken && q.remove(e.sdkKey, e.cacheToken), k.close(e.configService, e.logger);
  }
  static close(e, t, n) {
    t == null || t.debug("close() called"), n == null || n.tryDisconnect(), e == null || e.dispose();
  }
  dispose() {
    const e = this.options;
    e.logger.debug("dispose() called"), this.cacheToken && q.remove(e.sdkKey, this.cacheToken), k.close(this.configService, e.logger, this.hooks), this.suppressFinalize();
  }
  static disposeAll() {
    const e = q.clear();
    let t;
    for (const n of e)
      try {
        k.close(n.configService, n.options.logger, n.hooks), n.suppressFinalize();
      } catch (s) {
        t ?? (t = []), t.push(s);
      }
    if (t)
      throw typeof AggregateError < "u" ? new AggregateError(t) : t.pop();
  }
  async getValueAsync(e, t, n) {
    this.options.logger.debug("getValueAsync() called."), re(e), oe(t);
    let s, r, o = null;
    n ?? (n = this.defaultUser);
    try {
      let a;
      [a, o] = await this.getSettingsAsync(), r = se(this.evaluator, a, e, t, n, o, this.options.logger), s = r.value;
    } catch (a) {
      this.options.logger.settingEvaluationErrorSingle("getValueAsync", e, "defaultValue", t, a), r = M(e, t, R(o), n, D(a), a), s = t;
    }
    return this.hooks.emit("flagEvaluated", r), s;
  }
  async getValueDetailsAsync(e, t, n) {
    this.options.logger.debug("getValueDetailsAsync() called."), re(e), oe(t);
    let s, r = null;
    n ?? (n = this.defaultUser);
    try {
      let o;
      [o, r] = await this.getSettingsAsync(), s = se(this.evaluator, o, e, t, n, r, this.options.logger);
    } catch (o) {
      this.options.logger.settingEvaluationErrorSingle("getValueDetailsAsync", e, "defaultValue", t, o), s = M(e, t, R(r), n, D(o), o);
    }
    return this.hooks.emit("flagEvaluated", s), s;
  }
  async getAllKeysAsync() {
    this.options.logger.debug("getAllKeysAsync() called.");
    const e = "empty array";
    try {
      const [t] = await this.getSettingsAsync();
      return Ne(t, this.options.logger, e) ? Object.keys(t) : [];
    } catch (t) {
      return this.options.logger.settingEvaluationError("getAllKeysAsync", e, t), [];
    }
  }
  async getAllValuesAsync(e) {
    this.options.logger.debug("getAllValuesAsync() called.");
    const t = "empty array";
    let n, s, r;
    e ?? (e = this.defaultUser);
    try {
      const [o, a] = await this.getSettingsAsync();
      [s, r] = st(this.evaluator, o, e, a, this.options.logger, t), n = s.map((l) => ({ settingKey: l.key, settingValue: l.value }));
    } catch (o) {
      return this.options.logger.settingEvaluationError("getAllValuesAsync", t, o), [];
    }
    r != null && r.length && this.options.logger.settingEvaluationError("getAllValuesAsync", "evaluation result", typeof AggregateError < "u" ? new AggregateError(r) : r.pop());
    for (const o of s)
      this.hooks.emit("flagEvaluated", o);
    return n;
  }
  async getAllValueDetailsAsync(e) {
    this.options.logger.debug("getAllValueDetailsAsync() called.");
    const t = "empty array";
    let n, s;
    e ?? (e = this.defaultUser);
    try {
      const [r, o] = await this.getSettingsAsync();
      [n, s] = st(this.evaluator, r, e, o, this.options.logger, t);
    } catch (r) {
      return this.options.logger.settingEvaluationError("getAllValueDetailsAsync", t, r), [];
    }
    s != null && s.length && this.options.logger.settingEvaluationError("getAllValueDetailsAsync", "evaluation result", typeof AggregateError < "u" ? new AggregateError(s) : s.pop());
    for (const r of n)
      this.hooks.emit("flagEvaluated", r);
    return n;
  }
  async getKeyAndValueAsync(e) {
    this.options.logger.debug("getKeyAndValueAsync() called.");
    const t = "null";
    try {
      const [n] = await this.getSettingsAsync();
      if (!Ne(n, this.options.logger, t))
        return null;
      for (const [s, r] of Object.entries(n)) {
        if (e === r.variationId)
          return { settingKey: s, settingValue: Z(r.value) };
        const { targetingRules: o } = r;
        if (o.length > 0)
          for (let l = 0; l < o.length; l++) {
            const c = o[l].then;
            if (x(c))
              for (let u = 0; u < c.length; u++) {
                const h = c[u];
                if (e === h.variationId)
                  return { settingKey: s, settingValue: Z(h.value) };
              }
            else if (e === c.variationId)
              return { settingKey: s, settingValue: Z(c.value) };
          }
        const { percentageOptions: a } = r;
        if (a.length > 0)
          for (let l = 0; l < a.length; l++) {
            const c = a[l];
            if (e === c.variationId)
              return { settingKey: s, settingValue: Z(c.value) };
          }
      }
      this.options.logger.settingForVariationIdIsNotPresent(e);
    } catch (n) {
      this.options.logger.settingEvaluationError("getKeyAndValueAsync", t, n);
    }
    return null;
  }
  async forceRefreshAsync() {
    if (this.options.logger.debug("forceRefreshAsync() called."), this.configService)
      try {
        const [e] = await this.configService.refreshConfigAsync();
        return e;
      } catch (e) {
        return this.options.logger.forceRefreshError("forceRefreshAsync", e), N.failure(D(e), e);
      }
    else
      return N.failure("Client is configured to use the LocalOnly override behavior, which prevents making HTTP requests.");
  }
  setDefaultUser(e) {
    this.defaultUser = e;
  }
  clearDefaultUser() {
    this.defaultUser = void 0;
  }
  get isOffline() {
    var e, t;
    return (t = (e = this.configService) === null || e === void 0 ? void 0 : e.isOffline) !== null && t !== void 0 ? t : !0;
  }
  setOnline() {
    this.configService ? this.configService.setOnline() : this.options.logger.configServiceMethodHasNoEffectDueToOverrideBehavior(Bt(0), "setOnline");
  }
  setOffline() {
    var e;
    (e = this.configService) === null || e === void 0 || e.setOffline();
  }
  waitForReady() {
    const e = this.configService;
    return e ? e.readyPromise : Promise.resolve(1);
  }
  snapshot() {
    const e = () => {
      const r = this.options.cache.getInMemory();
      return [r.isEmpty ? null : r.config.settings, r];
    };
    let t, n;
    const { flagOverrides: s } = this.options;
    if (s) {
      const r = s.dataSource.getOverridesSync();
      switch (s.behaviour) {
        case 0:
          return new X(r, null, this);
        case 1:
          return [t, n] = e(), new X(Object.assign(Object.assign({}, t ?? {}), r), n, this);
        case 2:
          return [t, n] = e(), new X(Object.assign(Object.assign({}, r), t ?? {}), n, this);
      }
    }
    return [t, n] = e(), new X(t, n, this);
  }
  async getSettingsAsync() {
    this.options.logger.debug("getSettingsAsync() called.");
    const e = async () => {
      const n = await this.configService.getConfig();
      return [n.isEmpty ? null : n.config.settings, n];
    }, { flagOverrides: t } = this.options;
    if (t) {
      let n, s;
      const r = await t.dataSource.getOverrides();
      switch (t.behaviour) {
        case 0:
          return [r, null];
        case 1:
          return [n, s] = await e(), [Object.assign(Object.assign({}, n ?? {}), r), s];
        case 2:
          return [n, s] = await e(), [Object.assign(Object.assign({}, r), n ?? {}), s];
      }
    }
    return await e();
  }
  on(e, t) {
    return this.hooks.on(e, t), this;
  }
  once(e, t) {
    return this.hooks.once(e, t), this;
  }
  removeListener(e, t) {
    return this.hooks.removeListener(e, t), this;
  }
  removeAllListeners(e) {
    return this.hooks.removeAllListeners(e), this;
  }
  listeners(e) {
    return this.hooks.listeners(e);
  }
  listenerCount(e) {
    return this.hooks.listenerCount(e);
  }
  eventNames() {
    return this.hooks.eventNames();
  }
}
class X {
  constructor(e, t, n) {
    this.mergedSettings = e, this.remoteConfig = t, this.defaultUser = n.defaultUser, this.evaluator = n.evaluator, this.options = n.options, this.cacheState = t ? n.configService.getCacheState(t) : 1;
  }
  get fetchedConfig() {
    const e = this.remoteConfig;
    return e && !e.isEmpty ? e.config : null;
  }
  getAllKeys() {
    return this.mergedSettings ? Object.keys(this.mergedSettings) : [];
  }
  getValue(e, t, n) {
    this.options.logger.debug("Snapshot.getValue() called."), re(e), oe(t);
    let s, r;
    n ?? (n = this.defaultUser);
    try {
      r = se(this.evaluator, this.mergedSettings, e, t, n, this.remoteConfig, this.options.logger), s = r.value;
    } catch (o) {
      this.options.logger.settingEvaluationErrorSingle("Snapshot.getValue", e, "defaultValue", t, o), r = M(e, t, R(this.remoteConfig), n, D(o), o), s = t;
    }
    return this.options.hooks.emit("flagEvaluated", r), s;
  }
  getValueDetails(e, t, n) {
    this.options.logger.debug("Snapshot.getValueDetails() called."), re(e), oe(t);
    let s;
    n ?? (n = this.defaultUser);
    try {
      s = se(this.evaluator, this.mergedSettings, e, t, n, this.remoteConfig, this.options.logger);
    } catch (r) {
      this.options.logger.settingEvaluationErrorSingle("Snapshot.getValueDetails", e, "defaultValue", t, r), s = M(e, t, R(this.remoteConfig), n, D(r), r);
    }
    return this.options.hooks.emit("flagEvaluated", s), s;
  }
}
function un(i, e) {
  const t = "configcat-proxy/";
  if (e && i.length > t.length && i.lastIndexOf(t, 0) === 0)
    return !0;
  const n = i.split("/"), s = 22;
  switch (n.length) {
    case 2:
      return n[0].length === s && n[1].length === s;
    case 3:
      return n[0] === "configcat-sdk-1" && n[1].length === s && n[2].length === s;
    default:
      return !1;
  }
}
function re(i) {
  if (!i)
    throw new Error("Invalid 'key' value");
}
function oe(i) {
  if (i != null && !z(i))
    throw new TypeError("The default value must be boolean, number, string, null or undefined.");
}
function Z(i) {
  return z(i) ? i : Re(i);
}
let ee = function(i, e) {
  if (typeof FinalizationRegistry < "u") {
    const t = new FinalizationRegistry((n) => k.finalize(n));
    ee = (n, s) => {
      const r = {};
      return t.register(n, s, r), () => t.unregister(r);
    };
  } else
    ee = () => () => {
    };
  return ee(i, e);
};
function At(i, e, t, n) {
  return k.get(i, e, t, n);
}
function hn() {
  k.disposeAll();
}
function gn(i, e) {
  return new ct(i, e);
}
function fn(i, e, t) {
  return { dataSource: new Wt(i, t), behaviour: e };
}
function dn(i, e, t, n) {
  return { dataSource: new zt(e, t, n), behaviour: i };
}
function B(i) {
  return !!i.fn;
}
class wt {
  constructor() {
    this.events = {}, this.eventCount = 0, this.addListener = this.on, this.off = this.removeListener;
  }
  addListenerCore(e, t, n) {
    if (typeof t != "function")
      throw new TypeError("Listener must be a function");
    const s = this.events[e], r = { fn: t, once: n };
    return s ? B(s) ? this.events[e] = [s, r] : s.push(r) : (this.events[e] = r, this.eventCount++), this;
  }
  removeListenerCore(e, t, n) {
    const s = this.events[e];
    if (!s)
      return this;
    if (B(s))
      n(s, t) && this.removeEvent(e);
    else for (let r = s.length - 1; r >= 0; r--)
      if (n(s[r], t)) {
        s.splice(r, 1), s.length ? s.length === 1 && (this.events[e] = s[0]) : this.removeEvent(e);
        break;
      }
    return this;
  }
  removeEvent(e) {
    --this.eventCount === 0 ? this.events = {} : delete this.events[e];
  }
  on(e, t) {
    return this.addListenerCore(e, t, !1);
  }
  once(e, t) {
    return this.addListenerCore(e, t, !0);
  }
  removeListener(e, t) {
    if (typeof t != "function")
      throw new TypeError("Listener must be a function");
    return this.removeListenerCore(e, t, (n, s) => n.fn === s);
  }
  removeAllListeners(e) {
    return e ? this.events[e] && this.removeEvent(e) : (this.events = {}, this.eventCount = 0), this;
  }
  listeners(e) {
    const t = this.events[e];
    if (!t)
      return [];
    if (B(t))
      return [t.fn];
    const n = t.length, s = new Array(n);
    for (let r = 0; r < n; r++)
      s[r] = t[r].fn;
    return s;
  }
  listenerCount(e) {
    const t = this.events[e];
    return t ? B(t) ? 1 : t.length : 0;
  }
  eventNames() {
    const e = [];
    if (this.eventCount === 0)
      return e;
    const t = this.events;
    for (const n in t)
      Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
    return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
  }
  emit(e, t, n, s, r, ...o) {
    let a = this.events[e];
    if (!a)
      return !1;
    let l, c;
    B(a) ? [l, c] = [a, 1] : (a = a.slice(), [l, c] = [a[0], a.length]);
    const u = arguments.length - 1;
    for (let h = 0; ; ) {
      switch (l.once && this.removeListenerCore(e, l, (g, f) => g === f), u) {
        case 0:
          l.fn.call(this);
          break;
        case 1:
          l.fn.call(this, t);
          break;
        case 2:
          l.fn.call(this, t, n);
          break;
        case 3:
          l.fn.call(this, t, n, s);
          break;
        case 4:
          l.fn.call(this, t, n, s, r);
          break;
        default:
          const g = new Array(u);
          for (let f = 0; f < u; f++)
            g[f] = arguments[f + 1];
          l.fn.apply(this, g);
          break;
      }
      if (++h >= c)
        break;
      l = a[h];
    }
    return !0;
  }
}
class ce {
  static tryGetFactory() {
    const e = pn();
    if (e)
      return (t) => new ae(new ce(e), t.logger);
  }
  constructor(e) {
    this.storage = e;
  }
  set(e, t) {
    this.storage.setItem(e, vn(t));
  }
  get(e) {
    const t = this.storage.getItem(e);
    if (t)
      return yn(t);
  }
}
function pn() {
  if (typeof localStorage < "u") {
    const i = "__configcat_localStorage_test";
    try {
      const e = localStorage;
      e.setItem(i, i);
      let t;
      try {
        t = e.getItem(i);
      } finally {
        e.removeItem(i);
      }
      if (t === i)
        return e;
    } catch {
    }
  }
}
function vn(i) {
  return i = encodeURIComponent(i), i = i.replace(/%([0-9A-F]{2})/g, (e, t) => String.fromCharCode(parseInt(t, 16))), btoa(i);
}
function yn(i) {
  return i = atob(i), i = i.replace(/[%\x80-\xFF]/g, (e) => "%" + e.charCodeAt(0).toString(16)), decodeURIComponent(i);
}
const W = "configCache";
class Ue {
  static tryGetFactory() {
    const e = mn();
    if (e)
      return (t) => new ae(new Ue(e), t.logger);
  }
  constructor(e) {
    this.dbConnectionFactory = e;
  }
  async set(e, t) {
    const n = await this.dbConnectionFactory();
    try {
      await new Promise((s, r) => {
        const o = n.transaction(W, "readwrite");
        o.oncomplete = () => s(), o.onerror = (l) => r(l.target.error), o.objectStore(W).put(t, e);
      });
    } finally {
      n.close();
    }
  }
  async get(e) {
    const t = await this.dbConnectionFactory();
    try {
      return await new Promise((n, s) => {
        const r = t.transaction(W, "readonly");
        let o;
        r.oncomplete = () => n(o), r.onerror = (c) => s(c.target.error);
        const l = r.objectStore(W).get(e);
        l.onsuccess = (c) => o = c.target.result;
      });
    } finally {
      t.close();
    }
  }
}
function mn() {
  if (typeof indexedDB < "u")
    try {
      const i = () => new Promise((e, t) => {
        const n = indexedDB.open("@configcat/sdk");
        n.onupgradeneeded = (s) => s.target.result.createObjectStore(W), n.onsuccess = (s) => e(s.target.result), n.onerror = (s) => t(s.target.error);
      });
      return i().then((e) => e.close()).catch(() => {
      }), i;
    } catch {
    }
}
class Tt {
  handleStateChange(e, t, n) {
    var s;
    try {
      if (e.readyState === 4) {
        const { status: r, statusText: o } = e;
        if (r === 200) {
          const a = (s = e.getResponseHeader("ETag")) !== null && s !== void 0 ? s : void 0;
          t({ statusCode: r, reasonPhrase: o, eTag: a, body: e.responseText });
        } else r && t({ statusCode: r, reasonPhrase: o });
      }
    } catch (r) {
      n(r);
    }
  }
  fetchLogic(e, t) {
    return new Promise((n, s) => {
      try {
        e.logger.debug("HttpConfigFetcher.fetchLogic() called.");
        const r = new XMLHttpRequest();
        r.onreadystatechange = () => this.handleStateChange(r, n, s), r.ontimeout = () => s(new b("timeout", e.requestTimeoutMs)), r.onabort = () => s(new b("abort")), r.onerror = () => s(new b("failure"));
        let o = e.getUrl();
        t && (o += "&ccetag=" + encodeURIComponent(t)), r.open("GET", o, !0), r.timeout = e.requestTimeoutMs, r.send(null);
      } catch (r) {
        s(r);
      }
    });
  }
}
class En {
  async fetchLogic(e, t) {
    var n, s;
    const r = { method: "GET" };
    let o;
    if (typeof AbortController < "u") {
      const a = new AbortController(), l = setTimeout(() => a.abort(), e.requestTimeoutMs);
      r.signal = a.signal, o = () => clearTimeout(l);
    } else
      o = () => {
      };
    try {
      let a = e.getUrl();
      t && (a += "&ccetag=" + encodeURIComponent(t));
      const l = await fetch(a, r), { status: c, statusText: u } = l;
      if (c === 200) {
        const h = await l.text(), g = (n = l.headers.get("ETag")) !== null && n !== void 0 ? n : void 0;
        return { statusCode: c, reasonPhrase: u, eTag: g, body: h };
      } else
        return { statusCode: c, reasonPhrase: u };
    } catch (a) {
      throw a instanceof DOMException && a.name === "AbortError" ? !((s = r.signal) === null || s === void 0) && s.aborted ? new b("timeout", e.requestTimeoutMs) : new b("abort") : new b("failure", a);
    } finally {
      o();
    }
  }
}
const On = $.fromValue.bind($), Sn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DefaultEventEmitter: wt,
  ExternalConfigCache: ae,
  FetchApiConfigFetcher: En,
  FetchError: b,
  FetchResult: I,
  get FetchStatus() {
    return Oe;
  },
  InMemoryConfigCache: lt,
  IndexedDBConfigCache: Ue,
  LocalStorageConfigCache: ce,
  XmlHttpRequestConfigFetcher: Tt,
  createConsoleLogger: gn,
  createFlagOverridesFromMap: fn,
  createFlagOverridesFromQueryParams: dn,
  disposeAllClients: hn,
  getClient: At,
  settingFromValue: On
}, Symbol.toStringTag, { value: "Module" })), An = "2.5.0", bn = {
  // Vue's `App.prototype.use` does not play nicely with generic `install` functions, so we resort to using a discriminated union.
  install: (i, e) => {
    const { sdkKey: t, pollingMode: n, clientOptions: s } = e, r = {
      sdkType: "ConfigCat-Vue",
      sdkVersion: An,
      configFetcher: new Tt(),
      eventEmitterFactory: () => new wt(),
      defaultCacheFactory: ce.tryGetFactory()
    }, o = At(
      t,
      n ?? Te.AutoPoll,
      s,
      r
    );
    i.provide("configCatClient", o);
    const a = i.unmount;
    i.unmount = function() {
      a.apply(arguments), o.dispose();
    };
  }
}, Cn = /* @__PURE__ */ bt({
  __name: "FeatureWrapper",
  props: {
    featureKey: {},
    userObject: {}
  },
  emits: ["flagValueChanged"],
  setup(i, { emit: e }) {
    const t = e, n = i, s = Ct(null), r = Nt("configCatClient") ?? (() => {
      throw new Error("ConfigCatPlugin was not installed.");
    })(), o = () => {
      const l = r.snapshot().getValue(n.featureKey, !1, n.userObject);
      s.value !== l && (s.value = l, t("flagValueChanged", l));
    };
    return Rt(() => {
      const a = r.snapshot(), l = a.cacheState;
      l == ne.HasUpToDateFlagData || l == ne.HasLocalOverrideFlagDataOnly ? (s.value = a.getValue(
        n.featureKey,
        !1,
        n.userObject
      ), r.on("configChanged", o)) : r.getValueAsync(n.featureKey, !1, n.userObject).then((c) => {
        const u = o;
        u && (s.value = c, r.on("configChanged", u));
      });
    }), Ft(() => {
      r.off("configChanged", o);
    }), (a, l) => s.value === !0 ? ue(a.$slots, "default", { key: 0 }) : s.value === !1 ? ue(a.$slots, "else", { key: 1 }) : ue(a.$slots, "loading", { key: 2 });
  }
}), {
  createConsoleLogger: Nn,
  createFlagOverridesFromMap: Rn,
  createFlagOverridesFromQueryParams: Fn
} = Sn;
export {
  ne as ClientCacheState,
  bn as ConfigCatPlugin,
  Tn as ConfigJson,
  He as DataGovernance,
  Cn as FeatureWrapper,
  y as FormattableLogMessage,
  Ae as LogLevel,
  Ie as OverrideBehaviour,
  Te as PollingMode,
  me as PrerequisiteFlagComparator,
  N as RefreshResult,
  Ee as SegmentComparator,
  te as SettingType,
  In as User,
  ye as UserComparator,
  Nn as createConsoleLogger,
  Rn as createFlagOverridesFromMap,
  Fn as createFlagOverridesFromQueryParams
};
