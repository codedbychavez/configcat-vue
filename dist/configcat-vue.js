import { defineComponent as bt, ref as Ct, inject as Nt, onBeforeMount as Rt, onUnmounted as Ft, renderSlot as ce } from "vue";
var ve;
(function(n) {
  n[n.Fetched = 0] = "Fetched", n[n.NotModified = 1] = "NotModified", n[n.Errored = 2] = "Errored";
})(ve || (ve = {}));
class T {
  constructor(e, t, i, s) {
    this.status = e, this.config = t, this.errorMessage = i, this.errorException = s;
  }
  static success(e) {
    return new T(0, e);
  }
  static notModified(e) {
    return new T(1, e);
  }
  static error(e, t, i) {
    return new T(2, e, t ?? "Unknown error.", i);
  }
}
class b extends Error {
  constructor(e, ...t) {
    super(((i, s) => {
      switch (i) {
        case "abort":
          return "Request was aborted.";
        case "timeout":
          const [r] = s;
          return `Request timed out. Timeout value: ${r}ms`;
        case "failure":
          const [o] = s, a = "Request failed due to a network or protocol error.";
          return o ? a + " " + (o instanceof Error ? o.message : o + "") : a;
      }
    })(e, t)), this.cause = e, this instanceof b || (Object.setPrototypeOf || ((i, s) => i.__proto__ = s))(this, b.prototype), this.args = t;
  }
}
var pe;
(function(n) {
  n[n.No = 0] = "No", n[n.Should = 1] = "Should", n[n.Force = 2] = "Force";
})(pe || (pe = {}));
var te;
(function(n) {
  n[n.Boolean = 0] = "Boolean", n[n.String = 1] = "String", n[n.Int = 2] = "Int", n[n.Double = 3] = "Double";
})(te || (te = {}));
var ye;
(function(n) {
  n[n.TextIsOneOf = 0] = "TextIsOneOf", n[n.TextIsNotOneOf = 1] = "TextIsNotOneOf", n[n.TextContainsAnyOf = 2] = "TextContainsAnyOf", n[n.TextNotContainsAnyOf = 3] = "TextNotContainsAnyOf", n[n.SemVerIsOneOf = 4] = "SemVerIsOneOf", n[n.SemVerIsNotOneOf = 5] = "SemVerIsNotOneOf", n[n.SemVerLess = 6] = "SemVerLess", n[n.SemVerLessOrEquals = 7] = "SemVerLessOrEquals", n[n.SemVerGreater = 8] = "SemVerGreater", n[n.SemVerGreaterOrEquals = 9] = "SemVerGreaterOrEquals", n[n.NumberEquals = 10] = "NumberEquals", n[n.NumberNotEquals = 11] = "NumberNotEquals", n[n.NumberLess = 12] = "NumberLess", n[n.NumberLessOrEquals = 13] = "NumberLessOrEquals", n[n.NumberGreater = 14] = "NumberGreater", n[n.NumberGreaterOrEquals = 15] = "NumberGreaterOrEquals", n[n.SensitiveTextIsOneOf = 16] = "SensitiveTextIsOneOf", n[n.SensitiveTextIsNotOneOf = 17] = "SensitiveTextIsNotOneOf", n[n.DateTimeBefore = 18] = "DateTimeBefore", n[n.DateTimeAfter = 19] = "DateTimeAfter", n[n.SensitiveTextEquals = 20] = "SensitiveTextEquals", n[n.SensitiveTextNotEquals = 21] = "SensitiveTextNotEquals", n[n.SensitiveTextStartsWithAnyOf = 22] = "SensitiveTextStartsWithAnyOf", n[n.SensitiveTextNotStartsWithAnyOf = 23] = "SensitiveTextNotStartsWithAnyOf", n[n.SensitiveTextEndsWithAnyOf = 24] = "SensitiveTextEndsWithAnyOf", n[n.SensitiveTextNotEndsWithAnyOf = 25] = "SensitiveTextNotEndsWithAnyOf", n[n.SensitiveArrayContainsAnyOf = 26] = "SensitiveArrayContainsAnyOf", n[n.SensitiveArrayNotContainsAnyOf = 27] = "SensitiveArrayNotContainsAnyOf", n[n.TextEquals = 28] = "TextEquals", n[n.TextNotEquals = 29] = "TextNotEquals", n[n.TextStartsWithAnyOf = 30] = "TextStartsWithAnyOf", n[n.TextNotStartsWithAnyOf = 31] = "TextNotStartsWithAnyOf", n[n.TextEndsWithAnyOf = 32] = "TextEndsWithAnyOf", n[n.TextNotEndsWithAnyOf = 33] = "TextNotEndsWithAnyOf", n[n.ArrayContainsAnyOf = 34] = "ArrayContainsAnyOf", n[n.ArrayNotContainsAnyOf = 35] = "ArrayNotContainsAnyOf";
})(ye || (ye = {}));
var me;
(function(n) {
  n[n.Equals = 0] = "Equals", n[n.NotEquals = 1] = "NotEquals";
})(me || (me = {}));
var Ee;
(function(n) {
  n[n.IsIn = 0] = "IsIn", n[n.IsNotIn = 1] = "IsNotIn";
})(Ee || (Ee = {}));
const Ai = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get PrerequisiteFlagComparator() {
    return me;
  },
  get RedirectMode() {
    return pe;
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
  constructor(e, t, i, s) {
    this.configJson = e, this.config = t, this.timestamp = i, this.httpETag = s;
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
    var t, i;
    return e.timestamp + `
` + ((t = e.httpETag) !== null && t !== void 0 ? t : "") + `
` + ((i = e.configJson) !== null && i !== void 0 ? i : "");
  }
  static deserialize(e) {
    const t = Array(2);
    let i = 0;
    for (let u = 0; u < t.length; u++) {
      if (i = e.indexOf(`
`, i), i < 0)
        throw new Error("Number of values is fewer than expected.");
      t[u] = i++;
    }
    let s = t[0], r = e.substring(0, s);
    const o = parseInt(r);
    if (isNaN(o))
      throw new Error("Invalid fetch time: " + r);
    i = s + 1, s = t[1], r = e.substring(i, s);
    const a = r.length > 0 ? r : void 0;
    i = s + 1, r = e.substring(i);
    let l, c;
    return r.length > 0 && (l = M.deserialize(r), c = r), new O(c, l, o, a);
  }
}
O.serializationFormatVersion = "v2";
O.empty = new O(void 0, void 0, 0, void 0);
class M {
  static deserialize(e) {
    const t = JSON.parse(e);
    if (typeof t != "object" || !t)
      throw new Error("Invalid config JSON content:" + e);
    return new M(t);
  }
  constructor(e) {
    var t, i;
    this.preferences = e.p != null ? new Lt(e.p) : void 0, this.segments = (i = (t = e.s) === null || t === void 0 ? void 0 : t.map((s) => new kt(s))) !== null && i !== void 0 ? i : [], this.settings = e.f != null ? Object.entries(e.f).reduce((s, [r, o]) => (s[r] = new z(o, this), s), {}) : {};
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
    var t, i;
    this.name = e.n, this.conditions = (i = (t = e.r) === null || t === void 0 ? void 0 : t.map((s) => new rt(s))) !== null && i !== void 0 ? i : [];
  }
}
class Re {
  constructor(e, t = !1) {
    this.value = t ? e.v : ot(e.v), this.variationId = e.i;
  }
}
class z extends Re {
  constructor(e, t) {
    var i, s, r, o, a, l;
    super(e, e.t < 0), this.type = e.t;
    const c = "Identifier";
    this.percentageOptionsAttribute = (i = e.a) !== null && i !== void 0 ? i : c, this.targetingRules = (r = (s = e.r) === null || s === void 0 ? void 0 : s.map((u) => new Dt(u, t))) !== null && r !== void 0 ? r : [], this.percentageOptions = (a = (o = e.p) === null || o === void 0 ? void 0 : o.map((u) => new st(u))) !== null && a !== void 0 ? a : [], this.configJsonSalt = (l = t == null ? void 0 : t.salt) !== null && l !== void 0 ? l : "";
  }
  static fromValue(e) {
    return new z({
      t: -1,
      v: e
    });
  }
}
class Dt {
  constructor(e, t) {
    var i, s;
    this.conditions = (s = (i = e.c) === null || i === void 0 ? void 0 : i.map((r) => r.u != null ? new rt(r.u) : r.p != null ? new $t(r.p) : r.s != null ? new Pt(r.s, t) : void 0)) !== null && s !== void 0 ? s : [], this.then = e.p != null ? e.p.map((r) => new st(r)) : new Re(e.s);
  }
}
class st extends Re {
  constructor(e) {
    super(e), this.percentage = e.p;
  }
}
class rt {
  constructor(e) {
    var t, i;
    this.type = "UserCondition", this.comparisonAttribute = e.a, this.comparator = e.c, this.comparisonValue = (i = (t = e.s) !== null && t !== void 0 ? t : e.d) !== null && i !== void 0 ? i : e.l;
  }
}
class $t {
  constructor(e) {
    this.type = "PrerequisiteFlagCondition", this.prerequisiteFlagKey = e.f, this.comparator = e.c, this.comparisonValue = ot(e.v);
  }
}
class Pt {
  constructor(e, t) {
    this.type = "SegmentCondition", this.segment = t.segments[e.s], this.comparator = e.c;
  }
}
function ot(n) {
  var e, t, i;
  return (i = (t = (e = n.b) !== null && e !== void 0 ? e : n.s) !== null && t !== void 0 ? t : n.i) !== null && i !== void 0 ? i : n.d;
}
function Mt(n) {
  return te[n];
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
var ie;
(function(n) {
  n[n.NoFlagData = 0] = "NoFlagData", n[n.HasLocalOverrideFlagDataOnly = 1] = "HasLocalOverrideFlagDataOnly", n[n.HasCachedFlagDataOnly = 2] = "HasCachedFlagDataOnly", n[n.HasUpToDateFlagData = 3] = "HasUpToDateFlagData";
})(ie || (ie = {}));
var Oe;
(function(n) {
  n[n.Online = 0] = "Online", n[n.Offline = 1] = "Offline", n[n.Disposed = 2] = "Disposed";
})(Oe || (Oe = {}));
function _e(n) {
  return Oe[n];
}
class Fe {
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
      const [t, i] = await this.refreshConfigCoreAsync(e);
      return [N.from(t), i];
    }
  }
  async refreshConfigCoreAsync(e) {
    const t = await this.fetchAsync(e);
    let i = !1;
    const s = t.status === 0;
    return (s || t.config.timestamp > e.timestamp && (!t.config.isEmpty || e.isEmpty)) && (await this.options.cache.set(this.cacheKey, t.config), i = s && !O.equals(t.config, e), e = t.config), this.onConfigFetched(t.config), i && this.onConfigChanged(t.config), [t, e];
  }
  onConfigFetched(e) {
  }
  onConfigChanged(e) {
    var t;
    this.options.logger.debug("config changed"), this.options.hooks.emit("configChanged", (t = e.config) !== null && t !== void 0 ? t : new M({}));
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
    const i = this.options;
    i.logger.debug("ConfigServiceBase.fetchLogicAsync() - called.");
    let s;
    try {
      const [r, o] = await this.fetchRequestAsync((t = e.httpETag) !== null && t !== void 0 ? t : null);
      switch (r.statusCode) {
        case 200:
          return o instanceof M ? (i.logger.debug("ConfigServiceBase.fetchLogicAsync(): fetch was successful. Returning new config."), T.success(new O(r.body, o, O.generateTimestamp(), r.eTag))) : (s = i.logger.fetchReceived200WithInvalidBody(o).toString(), i.logger.debug(`ConfigServiceBase.fetchLogicAsync(): ${r.statusCode} ${r.reasonPhrase} was received but the HTTP response content was invalid. Returning null.`), T.error(e, s, o));
        case 304:
          return e ? (i.logger.debug("ConfigServiceBase.fetchLogicAsync(): content was not modified. Returning last config with updated timestamp."), T.notModified(e.with(O.generateTimestamp()))) : (s = i.logger.fetchReceived304WhenLocalCacheIsEmpty(r.statusCode, r.reasonPhrase).toString(), i.logger.debug(`ConfigServiceBase.fetchLogicAsync(): ${r.statusCode} ${r.reasonPhrase} was received when no config is cached locally. Returning null.`), T.error(e, s));
        case 403:
        case 404:
          return s = i.logger.fetchFailedDueToInvalidSdkKey().toString(), i.logger.debug("ConfigServiceBase.fetchLogicAsync(): fetch was unsuccessful. Returning last config (if any) with updated timestamp."), T.error(e.with(O.generateTimestamp()), s);
        default:
          return s = i.logger.fetchFailedDueToUnexpectedHttpResponse(r.statusCode, r.reasonPhrase).toString(), i.logger.debug("ConfigServiceBase.fetchLogicAsync(): fetch was unsuccessful. Returning null."), T.error(e, s);
      }
    } catch (r) {
      return s = (r instanceof b && r.cause === "timeout" ? i.logger.fetchFailedDueToRequestTimeout(r.args[0], r) : i.logger.fetchFailedDueToUnexpectedError(r)).toString(), i.logger.debug("ConfigServiceBase.fetchLogicAsync(): fetch was unsuccessful. Returning null."), T.error(e, s, r);
    }
  }
  async fetchRequestAsync(e, t = 2) {
    const i = this.options;
    i.logger.debug("ConfigServiceBase.fetchRequestAsync() - called.");
    for (let s = 0; ; s++) {
      i.logger.debug(`ConfigServiceBase.fetchRequestAsync(): calling fetchLogic()${s > 0 ? `, retry ${s}/${t}` : ""}`);
      const r = await this.configFetcher.fetchLogic(i, e);
      if (r.statusCode !== 200)
        return [r];
      if (!r.body)
        return i.logger.debug("ConfigServiceBase.fetchRequestAsync(): no response body."), [r, new Error("No response body.")];
      let o;
      try {
        o = M.deserialize(r.body);
      } catch (u) {
        return i.logger.debug("ConfigServiceBase.fetchRequestAsync(): invalid response body."), [r, u];
      }
      const a = o.preferences;
      if (!a)
        return i.logger.debug("ConfigServiceBase.fetchRequestAsync(): preferences is empty."), [r, o];
      const l = a.baseUrl;
      if (!l || l === i.baseUrl)
        return i.logger.debug("ConfigServiceBase.fetchRequestAsync(): baseUrl OK."), [r, o];
      const c = a.redirectMode;
      if (i.baseUrlOverriden && c !== 2)
        return i.logger.debug("ConfigServiceBase.fetchRequestAsync(): options.baseUrlOverriden && redirect !== 2."), [r, o];
      if (i.baseUrl = l, c === 0)
        return [r, o];
      if (c === 1 && i.logger.dataGovernanceIsOutOfSync(), s >= t)
        return i.logger.fetchFailedDueToRedirectLoop(), [r, o];
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
    this.status === 1 ? (this.setOnlineCore(), this.status = 0, this.options.logger.configServiceStatusChanged(_e(this.status))) : this.disposed && this.options.logger.configServiceMethodHasNoEffectDueToDisposedClient("setOnline");
  }
  setOfflineCore() {
  }
  setOffline() {
    this.status === 0 ? (this.setOfflineCore(), this.status = 1, this.options.logger.configServiceStatusChanged(_e(this.status))) : this.disposed && this.options.logger.configServiceMethodHasNoEffectDueToDisposedClient("setOffline");
  }
  syncUpWithCache() {
    return this.options.cache.get(this.cacheKey);
  }
  async getReadyPromise(e, t) {
    const i = await t(e);
    return this.options.hooks.emit("clientReady", i), i;
  }
}
class ue {
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
      let i;
      t && (i = t.indexOf(e)) >= 0 && t.splice(i, 1);
    });
  }
}
function Ve(n, e) {
  let t;
  return new Promise((i) => {
    const s = e == null ? void 0 : e.registerCallback(() => {
      clearTimeout(t), i(!1);
    });
    t = setTimeout(() => {
      s == null || s(), i(!0);
    }, n);
  });
}
function D(n, e = !1) {
  return n instanceof Error ? e && n.stack ? n.stack : n.toString() : n + "";
}
function qe(n) {
  throw n;
}
function U(n) {
  return Array.isArray(n);
}
function Le(n) {
  return U(n) && !n.some((e) => typeof e != "string");
}
function ke(n, e = 0, t, i = ", ") {
  const s = n.length;
  if (!s)
    return "";
  let r = "";
  return e > 0 && s > e && (n = n.slice(0, e), t && (r = t(s - e))), "'" + n.join("'" + i + "'") + "'" + r;
}
function Ut(n) {
  return typeof (n == null ? void 0 : n.then) == "function";
}
function B(n) {
  function e(o, a) {
    const l = o.charCodeAt(a);
    if (55296 <= l && l < 56320) {
      const c = o.charCodeAt(a + 1);
      if (56320 <= c && c <= 57343)
        return (l << 10) + c - 56613888;
    }
    return l;
  }
  let t = "", i = 0;
  const s = String.fromCharCode;
  let r;
  for (r = 0; r < n.length; r++) {
    const o = e(n, r);
    o <= 127 || (t += n.slice(i, r), o <= 2047 ? (t += s(192 | o >> 6), t += s(128 | o & 63)) : o <= 65535 ? (t += s(224 | o >> 12), t += s(128 | o >> 6 & 63), t += s(128 | o & 63)) : (t += s(240 | o >> 18), t += s(128 | o >> 12 & 63), t += s(128 | o >> 6 & 63), t += s(128 | o & 63), ++r), i = r + 1);
  }
  return t += n.slice(i, r);
}
function De(n) {
  return typeof n == "number" ? n : typeof n != "string" || !n.length || /^\s*$|^\s*0[^\d.e]/.test(n) ? NaN : +n;
}
const xt = 500;
class _t extends Fe {
  constructor(e, t) {
    super(e, t), this.signalInitialization = () => {
    }, this.stopToken = new ue(), this.pollIntervalMs = t.pollIntervalSeconds * 1e3, this.pollExpirationMs = this.pollIntervalMs - xt;
    const i = this.syncUpWithCache();
    if (t.maxInitWaitTimeSeconds !== 0) {
      this.initialized = !1;
      const s = new Promise((r) => this.signalInitialization = r);
      this.initializationPromise = this.waitForInitializationAsync(s).then((r) => (this.initialized = !0, r));
    } else
      this.initialized = !0, this.initializationPromise = Promise.resolve(!1);
    this.readyPromise = this.getReadyPromise(this.initializationPromise, async (s) => (await s, this.getCacheState(this.options.cache.getInMemory()))), t.offline || this.startRefreshWorker(i, this.stopToken);
  }
  async waitForInitializationAsync(e) {
    if (this.options.maxInitWaitTimeSeconds < 0)
      return await e, !0;
    const t = new ue(), i = await Promise.race([
      e.then(() => !0),
      Ve(this.options.maxInitWaitTimeSeconds * 1e3, t).then(() => !1)
    ]);
    return t.abort(), i;
  }
  async getConfig() {
    this.options.logger.debug("AutoPollConfigService.getConfig() called.");
    function e(i) {
      i.debug("AutoPollConfigService.getConfig() - returning value from cache.");
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
    super.onConfigFetched(e), this.signalInitialization();
  }
  setOnlineCore() {
    this.startRefreshWorker(null, this.stopToken);
  }
  setOfflineCore() {
    this.stopRefreshWorker(), this.stopToken = new ue();
  }
  async startRefreshWorker(e, t) {
    this.options.logger.debug("AutoPollConfigService.startRefreshWorker() called.");
    let i = !0;
    for (; !t.aborted; ) {
      try {
        const s = (/* @__PURE__ */ new Date()).getTime() + this.pollIntervalMs;
        try {
          await this.refreshWorkerLogic(i, e);
        } catch (o) {
          this.options.logger.autoPollConfigServiceErrorDuringPolling(o);
        }
        const r = s - (/* @__PURE__ */ new Date()).getTime();
        r > 0 && await Ve(r, t);
      } catch (s) {
        this.options.logger.autoPollConfigServiceErrorDuringPolling(s);
      }
      i = !1, e = null;
    }
  }
  stopRefreshWorker() {
    this.options.logger.debug("AutoPollConfigService.stopRefreshWorker() called."), this.stopToken.abort();
  }
  async refreshWorkerLogic(e, t) {
    this.options.logger.debug("AutoPollConfigService.refreshWorkerLogic() - called.");
    const i = await (t ?? this.options.cache.get(this.cacheKey));
    i.isExpired(this.pollExpirationMs) ? (e ? !this.isOfflineExactly : !this.isOffline) && await this.refreshConfigCoreAsync(i) : e && this.signalInitialization();
  }
  getCacheState(e) {
    return e.isEmpty ? 0 : e.isExpired(this.pollIntervalMs) ? 2 : 3;
  }
}
class at {
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
class $e {
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
    } catch (i) {
      this.logger.configServiceCacheWriteError(i);
    }
  }
  updateCachedConfig(e) {
    e == null || e === this.cachedSerializedConfig || (this.cachedConfig = O.deserialize(e), this.cachedSerializedConfig = e);
  }
  get(e) {
    try {
      const t = this.cache.get(e);
      if (Ut(t))
        return (async (i) => {
          try {
            this.updateCachedConfig(await i);
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
(function(n) {
  n[n.Debug = 4] = "Debug", n[n.Info = 3] = "Info", n[n.Warn = 2] = "Warn", n[n.Error = 1] = "Error", n[n.Off = -1] = "Off";
})(Ae || (Ae = {}));
function Vt(n) {
  return Ae[n];
}
class y {
  static from(...e) {
    return (t, ...i) => new y(t, e, i);
  }
  constructor(e, t, i) {
    this.strings = e, this.argNames = t, this.argValues = i;
  }
  get defaultFormattedMessage() {
    let e = this.cachedDefaultFormattedMessage;
    if (e === void 0) {
      e = "";
      const { strings: t, argValues: i } = this;
      let s = 0;
      for (; s < t.length - 1; s++)
        e += t[s], e += i[s];
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
  log(e, t, i, s) {
    var r;
    return this.isEnabled(e) && this.logger.log(e, t, i, s), e === 1 && ((r = this.hooks) === null || r === void 0 || r.emit("clientError", i.toString(), s)), i;
  }
  debug(e) {
    this.log(4, 0, e);
  }
  configJsonIsNotPresent(e) {
    return this.log(1, 1e3, y.from("DEFAULT_RETURN_VALUE")`Config JSON is not present. Returning ${e}.`);
  }
  configJsonIsNotPresentSingle(e, t, i) {
    return this.log(1, 1e3, y.from("KEY", "DEFAULT_PARAM_NAME", "DEFAULT_PARAM_VALUE")`Config JSON is not present when evaluating setting '${e}'. Returning the \`${t}\` parameter that you specified in your application: '${i}'.`);
  }
  settingEvaluationFailedDueToMissingKey(e, t, i, s) {
    return this.log(1, 1001, y.from("KEY", "DEFAULT_PARAM_NAME", "DEFAULT_PARAM_VALUE", "AVAILABLE_KEYS")`Failed to evaluate setting '${e}' (the key was not found in config JSON). Returning the \`${t}\` parameter that you specified in your application: '${i}'. Available keys: [${s}].`);
  }
  settingEvaluationError(e, t, i) {
    return this.log(1, 1002, y.from("METHOD_NAME", "DEFAULT_RETURN_VALUE")`Error occurred in the \`${e}\` method. Returning ${t}.`, i);
  }
  settingEvaluationErrorSingle(e, t, i, s, r) {
    return this.log(1, 1002, y.from("METHOD_NAME", "KEY", "DEFAULT_PARAM_NAME", "DEFAULT_PARAM_VALUE")`Error occurred in the \`${e}\` method while evaluating setting '${t}'. Returning the \`${i}\` parameter that you specified in your application: '${s}'.`, r);
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
  userObjectAttributeIsMissingCondition(e, t, i) {
    return this.log(2, 3003, y.from("CONDITION", "KEY", "ATTRIBUTE_NAME", "ATTRIBUTE_NAME")`Cannot evaluate condition (${e}) for setting '${t}' (the User.${i} attribute is missing). You should set the User.${i} attribute in order to make targeting work properly. Read more: https://configcat.com/docs/advanced/user-object/`);
  }
  userObjectAttributeIsInvalid(e, t, i, s) {
    return this.log(2, 3004, y.from("CONDITION", "KEY", "REASON", "ATTRIBUTE_NAME")`Cannot evaluate condition (${e}) for setting '${t}' (${i}). Please check the User.${s} attribute and make sure that its value corresponds to the comparison operator.`);
  }
  userObjectAttributeIsAutoConverted(e, t, i, s) {
    return this.log(2, 3005, y.from("CONDITION", "KEY", "ATTRIBUTE_NAME", "ATTRIBUTE_VALUE")`Evaluation of condition (${e}) for setting '${t}' may not produce the expected result (the User.${i} attribute is not a string value, thus it was automatically converted to the string value '${s}'). Please make sure that using a non-string value was intended.`);
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
class lt {
  constructor(e = 2, t = `
`) {
    this.level = e, this.eol = t, this.SOURCE = "ConfigCat";
  }
  log(e, t, i, s) {
    const [r, o] = e === 4 ? [console.info, "DEBUG"] : e === 3 ? [console.info, "INFO"] : e === 2 ? [console.warn, "WARN"] : e === 1 ? [console.error, "ERROR"] : [console.log, Vt(e).toUpperCase()], a = s !== void 0 ? this.eol + D(s, !0) : "";
    r(`${this.SOURCE} - ${o} - [${t}] ${i}${a}`);
  }
}
class Se {
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
function ct(n) {
  function e(F, L) {
    var J = F << L | F >>> 32 - L;
    return J;
  }
  var t, i, s, r = new Array(80), o = 1732584193, a = 4023233417, l = 2562383102, c = 271733878, u = 3285377520, h, g, f, v, m, S;
  n = B(n);
  var E = n.length, w = new Array();
  for (i = 0; i < E - 3; i += 4)
    s = n.charCodeAt(i) << 24 | n.charCodeAt(i + 1) << 16 | n.charCodeAt(i + 2) << 8 | n.charCodeAt(i + 3), w.push(s);
  switch (E % 4) {
    case 0:
      i = 2147483648;
      break;
    case 1:
      i = n.charCodeAt(E - 1) << 24 | 8388608;
      break;
    case 2:
      i = n.charCodeAt(E - 2) << 24 | n.charCodeAt(E - 1) << 16 | 32768;
      break;
    case 3:
      i = n.charCodeAt(E - 3) << 24 | n.charCodeAt(E - 2) << 16 | n.charCodeAt(E - 1) << 8 | 128;
      break;
  }
  for (w.push(i); w.length % 16 != 14; )
    w.push(0);
  for (w.push(E >>> 29), w.push(E << 3 & 4294967295), t = 0; t < w.length; t += 16) {
    for (i = 0; i < 16; i++)
      r[i] = w[t + i];
    for (i = 16; i <= 79; i++)
      r[i] = e(r[i - 3] ^ r[i - 8] ^ r[i - 14] ^ r[i - 16], 1);
    for (h = o, g = a, f = l, v = c, m = u, i = 0; i <= 19; i++)
      S = e(h, 5) + (g & f | ~g & v) + m + r[i] + 1518500249 & 4294967295, m = v, v = f, f = e(g, 30), g = h, h = S;
    for (i = 20; i <= 39; i++)
      S = e(h, 5) + (g ^ f ^ v) + m + r[i] + 1859775393 & 4294967295, m = v, v = f, f = e(g, 30), g = h, h = S;
    for (i = 40; i <= 59; i++)
      S = e(h, 5) + (g & f | g & v | f & v) + m + r[i] + 2400959708 & 4294967295, m = v, v = f, f = e(g, 30), g = h, h = S;
    for (i = 60; i <= 79; i++)
      S = e(h, 5) + (g ^ f ^ v) + m + r[i] + 3395469782 & 4294967295, m = v, v = f, f = e(g, 30), g = h, h = S;
    o = o + h & 4294967295, a = a + g & 4294967295, l = l + f & 4294967295, c = c + v & 4294967295, u = u + m & 4294967295;
  }
  return ht([o, a, l, c, u]);
}
function ut(n) {
  function e(Ue, xe) {
    return Ue >>> xe | Ue << 32 - xe;
  }
  const t = "length";
  var i = Math.pow, s = i(2, 32), r, o, a = ut, l = a.h, c = a.k;
  if (!c) {
    l = [], c = [];
    for (var u = {}, h = 2, g = 0; g < 64; h++)
      if (!u[h]) {
        for (r = 0; r < 313; r += h)
          u[r] = h;
        l[g] = i(h, 0.5) * s | 0, c[g++] = i(h, 1 / 3) * s | 0;
      }
    a.h = l = l.slice(0, 8), a.k = c;
  }
  var f = n[t] * 8;
  n += "";
  for (var v = []; n[t] % 64 - 56; )
    n += "\0";
  for (r = 0; r < n[t]; r++)
    o = n.charCodeAt(r), v[r >> 2] |= o << (3 - r) % 4 * 8;
  for (v[v[t]] = f / s | 0, v[v[t]] = f, o = 0; o < v[t]; ) {
    var m = v.slice(o, o += 16), S = l;
    for (l = l.slice(0, 8), r = 0; r < 64; r++) {
      var E = m[r - 15], w = m[r - 2], F = l[0], L = l[4], J = l[7] + (e(L, 6) ^ e(L, 11) ^ e(L, 25)) + (L & l[5] ^ ~L & l[6]) + c[r] + (m[r] = r < 16 ? m[r] : m[r - 16] + (e(E, 7) ^ e(E, 18) ^ E >>> 3) + m[r - 7] + (e(w, 17) ^ e(w, 19) ^ w >>> 10) | 0), Tt = (e(F, 2) ^ e(F, 13) ^ e(F, 22)) + (F & l[1] ^ F & l[2] ^ l[1] & l[2]);
      l = [J + Tt | 0].concat(l), l[4] = l[4] + J | 0;
    }
    for (r = 0; r < 8; r++)
      l[r] = l[r] + S[r] | 0;
  }
  return ht(l, 8);
}
function ht(n, e) {
  const t = "0123456789abcdef";
  var i = "";
  e ?? (e = n.length);
  for (let s = 0; s < e; s++)
    for (let r = 3; r >= 0; r--) {
      const o = n[s] >> (r << 3) & 255;
      i += t[o >> 4], i += t[o & 15];
    }
  return i;
}
const We = new Se();
class Be {
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
function gt() {
  const n = function(e) {
    this.target = e;
  };
  return n.prototype.deref = function() {
    return this.target;
  }, n.isFallback = !0, n;
}
const ft = () => typeof WeakRef == "function";
var we;
(function(n) {
  n[n.AutoPoll = 0] = "AutoPoll", n[n.LazyLoad = 1] = "LazyLoad", n[n.ManualPoll = 2] = "ManualPoll";
})(we || (we = {}));
var Ke;
(function(n) {
  n[n.Global = 0] = "Global", n[n.EuOnly = 1] = "EuOnly";
})(Ke || (Ke = {}));
class $ {
  constructor(e, t, i, s, r) {
    var o, a, l;
    if (this.requestTimeoutMs = 3e4, this.baseUrlOverriden = !1, this.proxy = "", this.offline = !1, !e)
      throw new Error("Invalid 'sdkKey' value");
    switch (this.sdkKey = e, this.clientVersion = t, this.dataGovernance = (o = i == null ? void 0 : i.dataGovernance) !== null && o !== void 0 ? o : 0, this.dataGovernance) {
      case 1:
        this.baseUrl = "https://cdn-eu.configcat.com";
        break;
      default:
        this.baseUrl = "https://cdn-global.configcat.com";
        break;
    }
    const c = (a = r == null ? void 0 : r()) !== null && a !== void 0 ? a : new Se(), u = new Be(c), h = new (ft() ? WeakRef : gt())(u);
    this.hooks = {
      hooks: u,
      hooksWeakRef: h,
      emit(v, ...m) {
        var S, E;
        return (E = (S = this.hooksWeakRef.deref()) === null || S === void 0 ? void 0 : S.emit(v, ...m)) !== null && E !== void 0 ? E : !1;
      }
    };
    let g, f;
    if (i) {
      if (g = i.logger, f = i.cache, i.requestTimeoutMs) {
        if (i.requestTimeoutMs < 0)
          throw new Error("Invalid 'requestTimeoutMs' value");
        this.requestTimeoutMs = i.requestTimeoutMs;
      }
      i.baseUrl && (this.baseUrl = i.baseUrl, this.baseUrlOverriden = !0), i.proxy && (this.proxy = i.proxy), i.flagOverrides && (this.flagOverrides = i.flagOverrides), i.defaultUser && (this.defaultUser = i.defaultUser), i.offline && (this.offline = i.offline), (l = i.setupHooks) === null || l === void 0 || l.call(i, u);
    }
    this.logger = new qt(g ?? new lt(), this.hooks), this.cache = f ? new $e(f, this.logger) : s ? s(this) : new at();
  }
  yieldHooks() {
    const e = this.hooks, t = e.hooks;
    return delete e.hooks, t ?? new Be(new Se());
  }
  getUrl() {
    return this.baseUrl + "/configuration-files/" + this.sdkKey + "/" + $.configFileName + "?sdk=" + this.clientVersion;
  }
  getCacheKey() {
    return ct(`${this.sdkKey}_${$.configFileName}_${O.serializationFormatVersion}`);
  }
}
$.configFileName = "config_v6.json";
class He extends $ {
  constructor(e, t, i, s, r, o) {
    super(e, t + "/a-" + i, s, r, o), this.pollIntervalSeconds = 60, this.maxInitWaitTimeSeconds = 5, s && (s.pollIntervalSeconds != null && (this.pollIntervalSeconds = s.pollIntervalSeconds), s.maxInitWaitTimeSeconds != null && (this.maxInitWaitTimeSeconds = s.maxInitWaitTimeSeconds));
    const a = 2147483;
    if (!(typeof this.pollIntervalSeconds == "number" && 1 <= this.pollIntervalSeconds && this.pollIntervalSeconds <= a))
      throw new Error("Invalid 'pollIntervalSeconds' value");
    if (!(typeof this.maxInitWaitTimeSeconds == "number" && this.maxInitWaitTimeSeconds <= a))
      throw new Error("Invalid 'maxInitWaitTimeSeconds' value");
  }
}
class ze extends $ {
  constructor(e, t, i, s, r, o) {
    super(e, t + "/m-" + i, s, r, o);
  }
}
class je extends $ {
  constructor(e, t, i, s, r, o) {
    if (super(e, t + "/l-" + i, s, r, o), this.cacheTimeToLiveSeconds = 60, s && s.cacheTimeToLiveSeconds != null && (this.cacheTimeToLiveSeconds = s.cacheTimeToLiveSeconds), !(typeof this.cacheTimeToLiveSeconds == "number" && 1 <= this.cacheTimeToLiveSeconds && this.cacheTimeToLiveSeconds <= 2147483647))
      throw new Error("Invalid 'cacheTimeToLiveSeconds' value");
  }
}
class dt {
  constructor(e, t) {
    this.dataSource = e, this.behaviour = t;
  }
}
var Ie;
(function(n) {
  n[n.LocalOnly = 0] = "LocalOnly", n[n.LocalOverRemote = 1] = "LocalOverRemote", n[n.RemoteOverLocal = 2] = "RemoteOverLocal";
})(Ie || (Ie = {}));
function Wt(n) {
  return Ie[n];
}
class Bt {
  constructor(e, t) {
    this.initialSettings = Je(e), t && (this.map = e);
  }
  getOverrides() {
    return Promise.resolve(this.getOverridesSync());
  }
  getOverridesSync() {
    return this.map ? Je(this.map) : this.initialSettings;
  }
}
function Je(n) {
  const e = {};
  for (const t in n)
    Object.prototype.hasOwnProperty.call(n, t) && (e[t] = z.fromValue(n[t]));
  return e;
}
const Kt = "cc-", Y = ";str";
class Ht {
  get currentValue() {
    return window == null ? void 0 : window.location.search;
  }
}
let G;
class zt {
  constructor(e, t, i) {
    this.watchChanges = e, this.paramPrefix = t ?? Kt, i ?? (i = G ?? (G = new Ht())), this.queryStringProvider = i;
    const s = i.currentValue;
    this.settings = Ge(s, this.paramPrefix), this.queryString = Ye(s);
  }
  getOverrides() {
    return Promise.resolve(this.getOverridesSync());
  }
  getOverridesSync() {
    if (this.watchChanges) {
      const e = this.queryStringProvider.currentValue, t = Ye(e);
      this.queryString !== t && (this.settings = Ge(e, this.paramPrefix), this.queryString = t);
    }
    return this.settings;
  }
}
function Ye(n) {
  if (n == null)
    return "";
  if (typeof n == "string")
    return n;
  let e = "", t = "?";
  for (const i in n) {
    if (!Object.prototype.hasOwnProperty.call(n, i))
      continue;
    const s = n[i];
    let r, o;
    if (!U(s))
      r = s, o = 1;
    else if (s.length)
      r = s[0], o = s.length;
    else
      continue;
    for (let a = 0; e += t + encodeURIComponent(i) + "=" + encodeURIComponent(r), !(++a >= o); )
      t = "&", r = s[a];
  }
  return e;
}
function Ge(n, e) {
  const t = {};
  return typeof n == "string" ? Jt(n, e, t) : n != null && jt(n, e, t), t;
}
function jt(n, e, t) {
  for (const i in n) {
    if (!Object.prototype.hasOwnProperty.call(n, i))
      continue;
    const s = n[i];
    let r, o;
    if (!U(s))
      r = s, o = 1;
    else if (s.length)
      r = s[0], o = s.length;
    else
      continue;
    for (let a = 0; vt(i, r, e, t), !(++a >= o); )
      r = s[a];
  }
}
function Jt(n, e, t) {
  if (!n || n.lastIndexOf("?", 0) < 0)
    return;
  const i = n.substring(1).split("&");
  for (let s of i) {
    s = s.replace(/\+/g, " ");
    const r = s.indexOf("="), o = decodeURIComponent(r >= 0 ? s.substring(0, r) : s), a = r >= 0 ? decodeURIComponent(s.substring(r + 1)) : "";
    vt(o, a, e, t);
  }
}
function vt(n, e, t, i) {
  if (!n || n.length <= t.length || n.lastIndexOf(t, 0) < 0)
    return;
  n = n.substring(t.length), n.length > Y.length && n.indexOf(Y, n.length - Y.length) >= 0 ? n = n.substring(0, n.length - Y.length) : e = Yt(e), i[n] = z.fromValue(e);
}
function Yt(n) {
  switch (n.toLowerCase()) {
    case "false":
      return !1;
    case "true":
      return !0;
    default:
      const e = De(n);
      return isNaN(e) ? n : e;
  }
}
class Gt extends Fe {
  constructor(e, t) {
    super(e, t), this.cacheTimeToLiveMs = t.cacheTimeToLiveSeconds * 1e3;
    const i = this.syncUpWithCache();
    this.readyPromise = this.getReadyPromise(i, async (s) => this.getCacheState(await s));
  }
  async getConfig() {
    this.options.logger.debug("LazyLoadConfigService.getConfig() called.");
    function e(i, s = "") {
      i.debug(`LazyLoadConfigService.getConfig(): cache is empty or expired${s}.`);
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
class Qt extends Fe {
  constructor(e, t) {
    super(e, t);
    const i = this.syncUpWithCache();
    this.readyPromise = this.getReadyPromise(i, async (s) => this.getCacheState(await s));
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
const pt = "<invalid value>", he = "<invalid name>", Pe = "<invalid operator>", Qe = "<invalid reference>", Xt = 10;
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
  appendUserConditionCore(e, t, i) {
    return this.append(`User.${e} ${ge(t)} '${i ?? pt}'`);
  }
  appendUserConditionString(e, t, i, s) {
    return typeof i != "string" ? this.appendUserConditionCore(e, t) : this.appendUserConditionCore(e, t, s ? "<hashed value>" : i);
  }
  appendUserConditionStringList(e, t, i, s) {
    if (!Le(i))
      return this.appendUserConditionCore(e, t);
    const r = "value", o = "values", a = ge(t);
    if (s)
      return this.append(`User.${e} ${a} [<${i.length} hashed ${i.length === 1 ? r : o}>]`);
    {
      const l = ke(i, Xt, (c) => `, ... <${c} more ${c === 1 ? r : o}>`);
      return this.append(`User.${e} ${a} [${l}]`);
    }
  }
  appendUserConditionNumber(e, t, i, s) {
    if (typeof i != "number")
      return this.appendUserConditionCore(e, t);
    const r = ge(t);
    let o;
    return s && !isNaN(o = new Date(i * 1e3)) ? this.append(`User.${e} ${r} '${i}' (${o.toISOString()} UTC)`) : this.append(`User.${e} ${r} '${i}'`);
  }
  appendUserCondition(e) {
    const t = typeof e.comparisonAttribute == "string" ? e.comparisonAttribute : he, i = e.comparator;
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
        return this.appendUserConditionStringList(t, i, e.comparisonValue, !1);
      case 6:
      case 7:
      case 8:
      case 9:
      case 28:
      case 29:
        return this.appendUserConditionString(t, i, e.comparisonValue, !1);
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
        return this.appendUserConditionNumber(t, i, e.comparisonValue);
      case 16:
      case 17:
      case 22:
      case 23:
      case 24:
      case 25:
      case 26:
      case 27:
        return this.appendUserConditionStringList(t, i, e.comparisonValue, !0);
      case 18:
      case 19:
        return this.appendUserConditionNumber(t, i, e.comparisonValue, !0);
      case 20:
      case 21:
        return this.appendUserConditionString(t, i, e.comparisonValue, !0);
      default:
        return this.appendUserConditionCore(t, i, e.comparisonValue);
    }
  }
  appendPrerequisiteFlagCondition(e, t) {
    const i = typeof e.prerequisiteFlagKey != "string" ? he : e.prerequisiteFlagKey in t ? e.prerequisiteFlagKey : Qe, s = e.comparator, r = e.comparisonValue;
    return this.append(`Flag '${i}' ${Zt(s)} '${ne(r)}'`);
  }
  appendSegmentCondition(e) {
    const t = e.segment, i = e.comparator, s = t == null ? Qe : typeof t.name != "string" || !t.name ? he : t.name;
    return this.append(`User ${mt(i)} '${s}'`);
  }
  appendConditionResult(e) {
    return this.append(`${e}`);
  }
  appendConditionConsequence(e) {
    return this.append(" => ").appendConditionResult(e), e ? this : this.append(", skipping the remaining AND conditions");
  }
  appendTargetingRuleThenPart(e, t) {
    (t ? this.newLine() : this.append(" ")).append("THEN");
    const i = e.then;
    return this.append(U(i) ? " % options" : ` '${ne(i.value)}'`);
  }
  appendTargetingRuleConsequence(e, t, i) {
    return this.increaseIndent(), this.appendTargetingRuleThenPart(e, i).append(" => ").append(t === !0 ? "MATCH, applying rule" : t === !1 ? "no match" : t), this.decreaseIndent();
  }
}
function ge(n) {
  switch (n) {
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
function Me(n) {
  return new yt("").appendUserCondition(n).toString();
}
function Zt(n) {
  switch (n) {
    case 0:
      return "EQUALS";
    case 1:
      return "NOT EQUALS";
    default:
      return Pe;
  }
}
function mt(n) {
  switch (n) {
    case 0:
      return "IS IN SEGMENT";
    case 1:
      return "IS NOT IN SEGMENT";
    default:
      return Pe;
  }
}
function ne(n) {
  return H(n) ? n.toString() : pt;
}
const Xe = /^[0-9]+$/, x = (n, e) => {
  const t = Xe.test(n), i = Xe.test(e);
  return t && i && (n = +n, e = +e), n === e ? 0 : t && !i ? -1 : i && !t ? 1 : n < e ? -1 : 1;
}, Te = 256, Q = Number.MAX_SAFE_INTEGER || 9007199254740991, K = [], p = [], d = {};
let ei = 0;
const A = (n, e) => {
  const t = ei++;
  d[n] = t, p[t] = e, K[t] = new RegExp(e);
};
A("NUMERICIDENTIFIER", "0|[1-9]\\d*");
A("NUMERICIDENTIFIERLOOSE", "[0-9]+");
A("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*");
A("MAINVERSION", `(${p[d.NUMERICIDENTIFIER]})\\.(${p[d.NUMERICIDENTIFIER]})\\.(${p[d.NUMERICIDENTIFIER]})`);
A("MAINVERSIONLOOSE", `(${p[d.NUMERICIDENTIFIERLOOSE]})\\.(${p[d.NUMERICIDENTIFIERLOOSE]})\\.(${p[d.NUMERICIDENTIFIERLOOSE]})`);
A("PRERELEASEIDENTIFIER", `(?:${p[d.NUMERICIDENTIFIER]}|${p[d.NONNUMERICIDENTIFIER]})`);
A("PRERELEASEIDENTIFIERLOOSE", `(?:${p[d.NUMERICIDENTIFIERLOOSE]}|${p[d.NONNUMERICIDENTIFIER]})`);
A("PRERELEASE", `(?:-(${p[d.PRERELEASEIDENTIFIER]}(?:\\.${p[d.PRERELEASEIDENTIFIER]})*))`);
A("PRERELEASELOOSE", `(?:-?(${p[d.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${p[d.PRERELEASEIDENTIFIERLOOSE]})*))`);
A("BUILDIDENTIFIER", "[0-9A-Za-z-]+");
A("BUILD", `(?:\\+(${p[d.BUILDIDENTIFIER]}(?:\\.${p[d.BUILDIDENTIFIER]})*))`);
A("FULLPLAIN", `v?${p[d.MAINVERSION]}${p[d.PRERELEASE]}?${p[d.BUILD]}?`);
A("FULL", `^${p[d.FULLPLAIN]}$`);
A("LOOSEPLAIN", `[v=\\s]*${p[d.MAINVERSIONLOOSE]}${p[d.PRERELEASELOOSE]}?${p[d.BUILD]}?`);
A("LOOSE", `^${p[d.LOOSEPLAIN]}$`);
class I {
  constructor(e, t) {
    if ((!t || typeof t != "object") && (t = {
      loose: !!t,
      includePrerelease: !1
    }), e instanceof I) {
      if (e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease)
        return e;
      e = e.version;
    } else if (typeof e != "string")
      throw new TypeError(`Invalid Version: ${e}`);
    if (e.length > Te)
      throw new TypeError(`version is longer than ${Te} characters`);
    this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease;
    const i = e.trim().match(t.loose ? K[d.LOOSE] : K[d.FULL]);
    if (!i)
      throw new TypeError(`Invalid Version: ${e}`);
    if (this.raw = e, this.major = +i[1], this.minor = +i[2], this.patch = +i[3], this.major > Q || this.major < 0)
      throw new TypeError("Invalid major version");
    if (this.minor > Q || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > Q || this.patch < 0)
      throw new TypeError("Invalid patch version");
    i[4] ? this.prerelease = i[4].split(".").map((s) => {
      if (/^[0-9]+$/.test(s)) {
        const r = +s;
        if (r >= 0 && r < Q)
          return r;
      }
      return s;
    }) : this.prerelease = [], this.build = i[5] ? i[5].split(".") : [], this.format();
  }
  format() {
    return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
  }
  toString() {
    return this.version;
  }
  compare(e) {
    if (!(e instanceof I)) {
      if (typeof e == "string" && e === this.version)
        return 0;
      e = new I(e, this.options);
    }
    return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e);
  }
  compareMain(e) {
    return e instanceof I || (e = new I(e, this.options)), x(this.major, e.major) || x(this.minor, e.minor) || x(this.patch, e.patch);
  }
  comparePre(e) {
    if (e instanceof I || (e = new I(e, this.options)), this.prerelease.length && !e.prerelease.length)
      return -1;
    if (!this.prerelease.length && e.prerelease.length)
      return 1;
    if (!this.prerelease.length && !e.prerelease.length)
      return 0;
    let t = 0;
    do {
      const i = this.prerelease[t], s = e.prerelease[t];
      if (i === void 0 && s === void 0)
        return 0;
      if (s === void 0)
        return 1;
      if (i === void 0)
        return -1;
      if (i === s)
        continue;
      return x(i, s);
    } while (++t);
  }
  compareBuild(e) {
    e instanceof I || (e = new I(e, this.options));
    let t = 0;
    do {
      const i = this.build[t], s = e.build[t];
      if (i === void 0 && s === void 0)
        return 0;
      if (s === void 0)
        return 1;
      if (i === void 0)
        return -1;
      if (i === s)
        continue;
      return x(i, s);
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
          let i = this.prerelease.length;
          for (; --i >= 0; )
            typeof this.prerelease[i] == "number" && (this.prerelease[i]++, i = -2);
          i === -1 && this.prerelease.push(0);
        }
        t && (this.prerelease[0] === t ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0]) : this.prerelease = [t, 0]);
        break;
      default:
        throw new Error(`invalid increment argument: ${e}`);
    }
    return this.format(), this.raw = this.version, this;
  }
}
const be = (n, e) => {
  if ((!e || typeof e != "object") && (e = {
    loose: !!e,
    includePrerelease: !1
  }), n instanceof I)
    return n;
  if (typeof n != "string" || n.length > Te || !(e.loose ? K[d.LOOSE] : K[d.FULL]).test(n))
    return null;
  try {
    return new I(n, e);
  } catch {
    return null;
  }
};
class Si {
  constructor(e, t, i, s = {}) {
    this.identifier = e, this.email = t, this.country = i, this.custom = s;
  }
}
function Ze(n, e) {
  var t, i;
  switch (e) {
    case "Identifier":
      return (t = n.identifier) !== null && t !== void 0 ? t : "";
    case "Email":
      return n.email;
    case "Country":
      return n.country;
    default:
      return (i = n.custom) === null || i === void 0 ? void 0 : i[e];
  }
}
function ti(n) {
  var e;
  const t = {}, i = "Identifier", s = "Email", r = "Country";
  if (t[i] = (e = n.identifier) !== null && e !== void 0 ? e : "", n.email != null && (t[s] = n.email), n.country != null && (t[r] = n.country), n.custom != null) {
    const o = [i, s, r];
    for (const [a, l] of Object.entries(n.custom))
      l != null && o.indexOf(a) < 0 && (t[a] = l);
  }
  return t;
}
class j {
  get visitedFlags() {
    var e;
    return (e = this.$visitedFlags) !== null && e !== void 0 ? e : this.$visitedFlags = [];
  }
  constructor(e, t, i, s) {
    this.key = e, this.setting = t, this.user = i, this.settings = s;
  }
  static forPrerequisiteFlag(e, t, i) {
    const s = new j(e, t, i.user, i.settings);
    return s.$visitedFlags = i.visitedFlags, s.logBuilder = i.logBuilder, s;
  }
}
const et = "The current targeting rule is ignored and the evaluation continues with the next rule.", fe = "cannot evaluate, User Object is missing", ii = (n) => `cannot evaluate, the User.${n} attribute is missing`, ni = (n, e) => `cannot evaluate, the User.${n} attribute is invalid (${e})`;
class si {
  constructor(e) {
    this.logger = e;
  }
  evaluate(e, t) {
    this.logger.debug("RolloutEvaluator.evaluate() called.");
    let i = t.logBuilder;
    this.logger.isEnabled(3) && (t.logBuilder = i = new yt(this.logger.eol), i.append(`Evaluating '${t.key}'`), t.user && i.append(` for User '${JSON.stringify(ti(t.user))}'`), i.increaseIndent());
    let s;
    try {
      let r, o;
      if (e != null) {
        const a = t.setting.type;
        if (a >= 0 && !ai(e, a)) {
          const l = Mt(a);
          throw new TypeError(`The type of a setting must match the type of the specified default value. Setting's type was ${l} but the default value's type was ${typeof e}. Please use a default value which corresponds to the setting type ${l}. Learn more: https://configcat.com/docs/sdk-reference/js/#setting-type-mapping`);
        }
        r = this.evaluateSetting(t), s = r.selectedValue.value, o = typeof s == typeof e;
      } else
        r = this.evaluateSetting(t), s = r.selectedValue.value, o = H(s);
      return o || Ne(s), r;
    } catch (r) {
      throw i == null || i.resetIndent().increaseIndent(), s = e, r;
    } finally {
      i && (i.newLine(`Returning '${s}'.`).decreaseIndent(), this.logger.settingEvaluated(i.toString()));
    }
  }
  evaluateSetting(e) {
    let t;
    const i = e.setting.targetingRules;
    if (i.length > 0 && (t = this.evaluateTargetingRules(i, e)))
      return t;
    const s = e.setting.percentageOptions;
    return s.length > 0 && (t = this.evaluatePercentageOptions(s, void 0, e)) ? t : { selectedValue: e.setting };
  }
  evaluateTargetingRules(e, t) {
    const i = t.logBuilder;
    i == null || i.newLine("Evaluating targeting rules and applying the first match if any:");
    for (let s = 0; s < e.length; s++) {
      const r = e[s], o = r.conditions, a = this.evaluateConditions(o, r, t.key, t);
      if (a !== !0) {
        _(a) && (i == null || i.increaseIndent().newLine(et).decreaseIndent());
        continue;
      }
      if (!U(r.then))
        return { selectedValue: r.then, matchedTargetingRule: r };
      const l = r.then;
      i == null || i.increaseIndent();
      const c = this.evaluatePercentageOptions(l, r, t);
      if (c)
        return i == null || i.decreaseIndent(), c;
      i == null || i.newLine(et).decreaseIndent();
    }
  }
  evaluatePercentageOptions(e, t, i) {
    var s;
    const r = i.logBuilder;
    if (!i.user) {
      r == null || r.newLine("Skipping % options because the User Object is missing."), i.isMissingUserObjectLogged || (this.logger.userObjectIsMissing(i.key), i.isMissingUserObjectLogged = !0);
      return;
    }
    let o = i.setting.percentageOptionsAttribute, a;
    if (o == null ? (o = "Identifier", a = (s = i.user.identifier) !== null && s !== void 0 ? s : "") : a = Ze(i.user, o), a == null) {
      r == null || r.newLine(`Skipping % options because the User.${o} attribute is missing.`), i.isMissingUserObjectAttributeLogged || (this.logger.userObjectAttributeIsMissingPercentage(i.key, o), i.isMissingUserObjectAttributeLogged = !0);
      return;
    }
    r == null || r.newLine(`Evaluating % options based on the User.${o} attribute:`);
    const l = ct(i.key + Ot(a)), c = parseInt(l.substring(0, 7), 16) % 100;
    r == null || r.newLine(`- Computing hash in the [0..99] range from User.${o} => ${c} (this value is sticky and consistent across all SDKs)`);
    let u = 0;
    for (let h = 0; h < e.length; h++) {
      const g = e[h];
      if (u += g.percentage, !(c >= u))
        return r == null || r.newLine(`- Hash value ${c} selects % option ${h + 1} (${g.percentage}%), '${ne(g.value)}'.`), { selectedValue: g, matchedTargetingRule: t, matchedPercentageOption: g };
    }
    throw new Error("Sum of percentage option percentages is less than 100.");
  }
  evaluateConditions(e, t, i, s) {
    let r = !0;
    const o = s.logBuilder;
    let a = !1;
    o == null || o.newLine("- ");
    for (let l = 0; l < e.length; l++) {
      const c = e[l];
      switch (o && (l ? o.increaseIndent().newLine("AND ") : o.append("IF ").increaseIndent()), c.type) {
        case "UserCondition":
          r = this.evaluateUserCondition(c, i, s), a = e.length > 1;
          break;
        case "PrerequisiteFlagCondition":
          r = this.evaluatePrerequisiteFlagCondition(c, s), a = !0;
          break;
        case "SegmentCondition":
          r = this.evaluateSegmentCondition(c, s), a = !_(r) || r !== fe || e.length > 1;
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
  evaluateUserCondition(e, t, i) {
    const s = i.logBuilder;
    if (s == null || s.appendUserCondition(e), !i.user)
      return i.isMissingUserObjectLogged || (this.logger.userObjectIsMissing(i.key), i.isMissingUserObjectLogged = !0), fe;
    const r = e.comparisonAttribute, o = Ze(i.user, r);
    if (o == null || o === "")
      return this.logger.userObjectAttributeIsMissingCondition(Me(e), i.key, r), ii(r);
    let a, l, c, u;
    switch (e.comparator) {
      case 28:
      case 29:
        return a = C(r, o, e, i.key, this.logger), this.evaluateTextEquals(a, e.comparisonValue, e.comparator === 29);
      case 20:
      case 21:
        return a = C(r, o, e, i.key, this.logger), this.evaluateSensitiveTextEquals(a, e.comparisonValue, i.setting.configJsonSalt, t, e.comparator === 21);
      case 0:
      case 1:
        return a = C(r, o, e, i.key, this.logger), this.evaluateTextIsOneOf(a, e.comparisonValue, e.comparator === 1);
      case 16:
      case 17:
        return a = C(r, o, e, i.key, this.logger), this.evaluateSensitiveTextIsOneOf(a, e.comparisonValue, i.setting.configJsonSalt, t, e.comparator === 17);
      case 30:
      case 31:
        return a = C(r, o, e, i.key, this.logger), this.evaluateTextSliceEqualsAnyOf(a, e.comparisonValue, !0, e.comparator === 31);
      case 22:
      case 23:
        return a = C(r, o, e, i.key, this.logger), this.evaluateSensitiveTextSliceEqualsAnyOf(a, e.comparisonValue, i.setting.configJsonSalt, t, !0, e.comparator === 23);
      case 32:
      case 33:
        return a = C(r, o, e, i.key, this.logger), this.evaluateTextSliceEqualsAnyOf(a, e.comparisonValue, !1, e.comparator === 33);
      case 24:
      case 25:
        return a = C(r, o, e, i.key, this.logger), this.evaluateSensitiveTextSliceEqualsAnyOf(a, e.comparisonValue, i.setting.configJsonSalt, t, !1, e.comparator === 25);
      case 2:
      case 3:
        return a = C(r, o, e, i.key, this.logger), this.evaluateTextContainsAnyOf(a, e.comparisonValue, e.comparator === 3);
      case 4:
      case 5:
        return l = tt(r, o, e, i.key, this.logger), typeof l != "string" ? this.evaluateSemVerIsOneOf(l, e.comparisonValue, e.comparator === 5) : l;
      case 6:
      case 7:
      case 8:
      case 9:
        return l = tt(r, o, e, i.key, this.logger), typeof l != "string" ? this.evaluateSemVerRelation(l, e.comparator, e.comparisonValue) : l;
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
        return c = ri(r, o, e, i.key, this.logger), typeof c != "string" ? this.evaluateNumberRelation(c, e.comparator, e.comparisonValue) : c;
      case 18:
      case 19:
        return c = oi(r, o, e, i.key, this.logger), typeof c != "string" ? this.evaluateDateTimeRelation(c, e.comparisonValue, e.comparator === 18) : c;
      case 34:
      case 35:
        return u = it(r, o, e, i.key, this.logger), typeof u != "string" ? this.evaluateArrayContainsAnyOf(u, e.comparisonValue, e.comparator === 35) : u;
      case 26:
      case 27:
        return u = it(r, o, e, i.key, this.logger), typeof u != "string" ? this.evaluateSensitiveArrayContainsAnyOf(u, e.comparisonValue, i.setting.configJsonSalt, t, e.comparator === 27) : u;
      default:
        throw new Error();
    }
  }
  evaluateTextEquals(e, t, i) {
    return e === t !== i;
  }
  evaluateSensitiveTextEquals(e, t, i, s, r) {
    return de(e, i, s) === t !== r;
  }
  evaluateTextIsOneOf(e, t, i) {
    return t.indexOf(e) >= 0 !== i;
  }
  evaluateSensitiveTextIsOneOf(e, t, i, s, r) {
    const o = de(e, i, s);
    return t.indexOf(o) >= 0 !== r;
  }
  evaluateTextSliceEqualsAnyOf(e, t, i, s) {
    for (let r = 0; r < t.length; r++) {
      const o = t[r];
      if (e.length < o.length)
        continue;
      if ((i ? e.lastIndexOf(o, 0) : e.indexOf(o, e.length - o.length)) >= 0)
        return !s;
    }
    return s;
  }
  evaluateSensitiveTextSliceEqualsAnyOf(e, t, i, s, r, o) {
    const a = B(e);
    for (let l = 0; l < t.length; l++) {
      const c = t[l], u = c.indexOf("_"), h = parseInt(c.slice(0, u));
      if (a.length < h)
        continue;
      const g = r ? a.slice(0, h) : a.slice(a.length - h);
      if (Et(g, i, s) === c.slice(u + 1))
        return !o;
    }
    return o;
  }
  evaluateTextContainsAnyOf(e, t, i) {
    for (let s = 0; s < t.length; s++)
      if (e.indexOf(t[s]) >= 0)
        return !i;
    return i;
  }
  evaluateSemVerIsOneOf(e, t, i) {
    let s = !1;
    for (let r = 0; r < t.length; r++) {
      const o = t[r];
      if (!o.length)
        continue;
      const a = be(o.trim());
      if (!a)
        return !1;
      !s && e.compare(a) === 0 && (s = !0);
    }
    return s !== i;
  }
  evaluateSemVerRelation(e, t, i) {
    const s = be(i.trim());
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
  evaluateNumberRelation(e, t, i) {
    switch (t) {
      case 10:
        return e === i;
      case 11:
        return e !== i;
      case 12:
        return e < i;
      case 13:
        return e <= i;
      case 14:
        return e > i;
      case 15:
        return e >= i;
    }
  }
  evaluateDateTimeRelation(e, t, i) {
    return i ? e < t : e > t;
  }
  evaluateArrayContainsAnyOf(e, t, i) {
    for (let s = 0; s < e.length; s++)
      if (t.indexOf(e[s]) >= 0)
        return !i;
    return i;
  }
  evaluateSensitiveArrayContainsAnyOf(e, t, i, s, r) {
    for (let o = 0; o < e.length; o++) {
      const a = de(e[o], i, s);
      if (t.indexOf(a) >= 0)
        return !r;
    }
    return r;
  }
  evaluatePrerequisiteFlagCondition(e, t) {
    const i = t.logBuilder;
    i == null || i.appendPrerequisiteFlagCondition(e, t.settings);
    const s = e.prerequisiteFlagKey, r = t.settings[s];
    if (t.visitedFlags.push(t.key), t.visitedFlags.indexOf(s) >= 0) {
      t.visitedFlags.push(s);
      const u = ke(t.visitedFlags, void 0, void 0, " -> ");
      throw new Error(`Circular dependency detected between the following depending flags: ${u}.`);
    }
    const o = j.forPrerequisiteFlag(s, r, t);
    i == null || i.newLine("(").increaseIndent().newLine(`Evaluating prerequisite flag '${s}':`);
    const a = this.evaluateSetting(o);
    t.visitedFlags.pop();
    const l = a.selectedValue.value;
    if (typeof l != typeof e.comparisonValue) {
      if (H(l))
        throw new Error(`Type mismatch between comparison value '${e.comparisonValue}' and prerequisite flag '${s}'.`);
      Ne(l);
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
    return i == null || i.newLine(`Prerequisite flag evaluation result: '${ne(l)}'.`).newLine("Condition (").appendPrerequisiteFlagCondition(e, t.settings).append(") evaluates to ").appendConditionResult(c).append(".").decreaseIndent().newLine(")"), c;
  }
  evaluateSegmentCondition(e, t) {
    const i = t.logBuilder;
    if (i == null || i.appendSegmentCondition(e), !t.user)
      return t.isMissingUserObjectLogged || (this.logger.userObjectIsMissing(t.key), t.isMissingUserObjectLogged = !0), fe;
    const s = e.segment;
    i == null || i.newLine("(").increaseIndent().newLine(`Evaluating segment '${s.name}':`);
    const r = this.evaluateConditions(s.conditions, void 0, s.name, t);
    let o = r;
    if (!_(o))
      switch (e.comparator) {
        case 0:
          break;
        case 1:
          o = !o;
          break;
        default:
          throw new Error();
      }
    return i && (i.newLine("Segment evaluation result: "), (_(o) ? i.append(o) : i.append(`User ${mt(r ? 0 : 1)}`)).append("."), i.newLine("Condition (").appendSegmentCondition(e).append(")"), (_(o) ? i.append(" failed to evaluate") : i.append(" evaluates to ").appendConditionResult(o)).append("."), i.decreaseIndent().newLine(")")), o;
  }
}
function _(n) {
  return typeof n == "string";
}
function de(n, e, t) {
  return Et(B(n), e, t);
}
function Et(n, e, t) {
  return ut(n + B(e) + B(t));
}
function Ot(n) {
  return typeof n == "string" ? n : n instanceof Date ? n.getTime() / 1e3 + "" : Le(n) ? JSON.stringify(n) : n + "";
}
function C(n, e, t, i, s) {
  return typeof e == "string" || (e = Ot(e), s.userObjectAttributeIsAutoConverted(Me(t), i, n, e)), e;
}
function tt(n, e, t, i, s) {
  let r;
  return typeof e == "string" && (r = be(e.trim())) ? r : ae(s, t, i, n, `'${e}' is not a valid semantic version`);
}
function ri(n, e, t, i, s) {
  if (typeof e == "number")
    return e;
  let r;
  return typeof e == "string" && (!isNaN(r = De(e.replace(",", "."))) || e.trim() === "NaN") ? r : ae(s, t, i, n, `'${e}' is not a valid decimal number`);
}
function oi(n, e, t, i, s) {
  if (e instanceof Date)
    return e.getTime() / 1e3;
  if (typeof e == "number")
    return e;
  let r;
  return typeof e == "string" && (!isNaN(r = De(e.replace(",", "."))) || e.trim() === "NaN") ? r : ae(s, t, i, n, `'${e}' is not a valid Unix timestamp (number of seconds elapsed since Unix epoch)`);
}
function it(n, e, t, i, s) {
  let r = e;
  if (typeof r == "string")
    try {
      r = JSON.parse(r);
    } catch {
    }
  return Le(r) ? r : ae(s, t, i, n, `'${e}' is not a valid string array`);
}
function ae(n, e, t, i, s) {
  return n.userObjectAttributeIsInvalid(Me(e), t, s, i), ni(i, s);
}
function At(n, e, t, i) {
  return {
    key: n,
    value: e.selectedValue.value,
    variationId: e.selectedValue.variationId,
    fetchTime: t,
    user: i,
    isDefaultValue: !1,
    matchedTargetingRule: e.matchedTargetingRule,
    matchedPercentageOption: e.matchedPercentageOption
  };
}
function P(n, e, t, i, s, r) {
  return {
    key: n,
    value: e,
    fetchTime: t,
    user: i,
    isDefaultValue: !0,
    errorMessage: s,
    errorException: r
  };
}
function se(n, e, t, i, s, r, o) {
  let a;
  if (!e)
    return a = o.configJsonIsNotPresentSingle(t, "defaultValue", i).toString(), P(t, i, R(r), s, a);
  const l = e[t];
  if (!l)
    return a = o.settingEvaluationFailedDueToMissingKey(t, "defaultValue", i, ke(Object.keys(e))).toString(), P(t, i, R(r), s, a);
  const c = n.evaluate(i, new j(t, l, s, e));
  return At(t, c, R(r), s);
}
function nt(n, e, t, i, s, r) {
  let o;
  if (!Ce(e, s, r))
    return [[], o];
  const a = [];
  for (const [l, c] of Object.entries(e)) {
    let u;
    try {
      const h = n.evaluate(null, new j(l, c, t, e));
      u = At(l, h, R(i), t);
    } catch (h) {
      o ?? (o = []), o.push(h), u = P(l, null, R(i), t, D(h), h);
    }
    a.push(u);
  }
  return [a, o];
}
function Ce(n, e, t) {
  return n ? !0 : (e.configJsonIsNotPresent(t), !1);
}
function H(n) {
  return typeof n == "boolean" || typeof n == "string" || typeof n == "number";
}
function ai(n, e) {
  switch (e) {
    case 0:
      return typeof n == "boolean";
    case 1:
      return typeof n == "string";
    case 2:
    case 3:
      return typeof n == "number";
    default:
      return !1;
  }
}
function Ne(n) {
  throw new TypeError(n === null ? "Setting value is null." : n === void 0 ? "Setting value is undefined." : `Setting value '${n}' is of an unsupported type (${typeof n}).`);
}
function R(n) {
  return n ? new Date(n.timestamp) : void 0;
}
class li {
  constructor() {
    this.instances = {};
  }
  getOrCreate(e, t) {
    let i;
    const s = this.instances[e.sdkKey];
    if (s) {
      const [a] = s;
      if (i = a.deref(), i)
        return [i, !0];
    }
    const r = {};
    i = new k(e, t, r);
    const o = ft() ? WeakRef : gt();
    return this.instances[e.sdkKey] = [new o(i), r], [i, !1];
  }
  remove(e, t) {
    const i = this.instances[e];
    if (i) {
      const [s, r] = i, o = !!s.deref();
      if (!o || r === t)
        return delete this.instances[e], o;
    }
    return !1;
  }
  clear() {
    const e = [];
    for (const [t, [i]] of Object.entries(this.instances)) {
      const s = i.deref();
      s && e.push(s), delete this.instances[t];
    }
    return e;
  }
}
const V = new li();
class k {
  static get instanceCache() {
    return V;
  }
  static get(e, t, i, s) {
    var r;
    const o = "Invalid 'sdkKey' value";
    if (!e)
      throw new Error(o);
    const a = t === 0 ? He : t === 2 ? ze : t === 1 ? je : qe(new Error("Invalid 'pollingMode' value")), l = new a(e, s.sdkType, s.sdkVersion, i, s.defaultCacheFactory, s.eventEmitterFactory);
    if (((r = l.flagOverrides) === null || r === void 0 ? void 0 : r.behaviour) !== 0 && !ci(e, l.baseUrlOverriden))
      throw new Error(o);
    const [c, u] = V.getOrCreate(l, s);
    return u && i && l.logger.clientIsAlreadyCreated(e), c;
  }
  constructor(e, t, i) {
    var s;
    if (this.cacheToken = i, this.addListener = this.on, this.off = this.removeListener, !e)
      throw new Error("Invalid 'options' value");
    if (this.options = e, this.options.logger.debug("Initializing ConfigCatClient. Options: " + JSON.stringify(this.options)), !t)
      throw new Error("Invalid 'configCatKernel' value");
    if (!t.configFetcher)
      throw new Error("Invalid 'configCatKernel.configFetcher' value");
    this.hooks = e.yieldHooks(), e.defaultUser && this.setDefaultUser(e.defaultUser), this.evaluator = new si(e.logger), ((s = e.flagOverrides) === null || s === void 0 ? void 0 : s.behaviour) !== 0 ? this.configService = e instanceof He ? new _t(t.configFetcher, e) : e instanceof ze ? new Qt(t.configFetcher, e) : e instanceof je ? new Gt(t.configFetcher, e) : qe(new Error("Invalid 'options' value")) : this.hooks.emit("clientReady", 1), this.suppressFinalize = ee(this, { sdkKey: e.sdkKey, cacheToken: i, configService: this.configService, logger: e.logger });
  }
  static finalize(e) {
    var t;
    (t = e.logger) === null || t === void 0 || t.debug("finalize() called"), e.cacheToken && V.remove(e.sdkKey, e.cacheToken), k.close(e.configService, e.logger);
  }
  static close(e, t, i) {
    t == null || t.debug("close() called"), i == null || i.tryDisconnect(), e == null || e.dispose();
  }
  dispose() {
    const e = this.options;
    e.logger.debug("dispose() called"), this.cacheToken && V.remove(e.sdkKey, this.cacheToken), k.close(this.configService, e.logger, this.hooks), this.suppressFinalize();
  }
  static disposeAll() {
    const e = V.clear();
    let t;
    for (const i of e)
      try {
        k.close(i.configService, i.options.logger, i.hooks), i.suppressFinalize();
      } catch (s) {
        t ?? (t = []), t.push(s);
      }
    if (t)
      throw typeof AggregateError < "u" ? new AggregateError(t) : t.pop();
  }
  async getValueAsync(e, t, i) {
    this.options.logger.debug("getValueAsync() called."), re(e), oe(t);
    let s, r, o = null;
    i ?? (i = this.defaultUser);
    try {
      let a;
      [a, o] = await this.getSettingsAsync(), r = se(this.evaluator, a, e, t, i, o, this.options.logger), s = r.value;
    } catch (a) {
      this.options.logger.settingEvaluationErrorSingle("getValueAsync", e, "defaultValue", t, a), r = P(e, t, R(o), i, D(a), a), s = t;
    }
    return this.hooks.emit("flagEvaluated", r), s;
  }
  async getValueDetailsAsync(e, t, i) {
    this.options.logger.debug("getValueDetailsAsync() called."), re(e), oe(t);
    let s, r = null;
    i ?? (i = this.defaultUser);
    try {
      let o;
      [o, r] = await this.getSettingsAsync(), s = se(this.evaluator, o, e, t, i, r, this.options.logger);
    } catch (o) {
      this.options.logger.settingEvaluationErrorSingle("getValueDetailsAsync", e, "defaultValue", t, o), s = P(e, t, R(r), i, D(o), o);
    }
    return this.hooks.emit("flagEvaluated", s), s;
  }
  async getAllKeysAsync() {
    this.options.logger.debug("getAllKeysAsync() called.");
    const e = "empty array";
    try {
      const [t] = await this.getSettingsAsync();
      return Ce(t, this.options.logger, e) ? Object.keys(t) : [];
    } catch (t) {
      return this.options.logger.settingEvaluationError("getAllKeysAsync", e, t), [];
    }
  }
  async getAllValuesAsync(e) {
    this.options.logger.debug("getAllValuesAsync() called.");
    const t = "empty array";
    let i, s, r;
    e ?? (e = this.defaultUser);
    try {
      const [o, a] = await this.getSettingsAsync();
      [s, r] = nt(this.evaluator, o, e, a, this.options.logger, t), i = s.map((l) => new q(l.key, l.value));
    } catch (o) {
      return this.options.logger.settingEvaluationError("getAllValuesAsync", t, o), [];
    }
    r != null && r.length && this.options.logger.settingEvaluationError("getAllValuesAsync", "evaluation result", typeof AggregateError < "u" ? new AggregateError(r) : r.pop());
    for (const o of s)
      this.hooks.emit("flagEvaluated", o);
    return i;
  }
  async getAllValueDetailsAsync(e) {
    this.options.logger.debug("getAllValueDetailsAsync() called.");
    const t = "empty array";
    let i, s;
    e ?? (e = this.defaultUser);
    try {
      const [r, o] = await this.getSettingsAsync();
      [i, s] = nt(this.evaluator, r, e, o, this.options.logger, t);
    } catch (r) {
      return this.options.logger.settingEvaluationError("getAllValueDetailsAsync", t, r), [];
    }
    s != null && s.length && this.options.logger.settingEvaluationError("getAllValueDetailsAsync", "evaluation result", typeof AggregateError < "u" ? new AggregateError(s) : s.pop());
    for (const r of i)
      this.hooks.emit("flagEvaluated", r);
    return i;
  }
  async getKeyAndValueAsync(e) {
    this.options.logger.debug("getKeyAndValueAsync() called.");
    const t = "null";
    try {
      const [i] = await this.getSettingsAsync();
      if (!Ce(i, this.options.logger, t))
        return null;
      for (const [s, r] of Object.entries(i)) {
        if (e === r.variationId)
          return new q(s, Z(r.value));
        const o = i[s].targetingRules;
        if (o && o.length > 0)
          for (let l = 0; l < o.length; l++) {
            const c = o[l].then;
            if (U(c))
              for (let u = 0; u < c.length; u++) {
                const h = c[u];
                if (e === h.variationId)
                  return new q(s, Z(h.value));
              }
            else if (e === c.variationId)
              return new q(s, Z(c.value));
          }
        const a = i[s].percentageOptions;
        if (a && a.length > 0)
          for (let l = 0; l < a.length; l++) {
            const c = a[l];
            if (e === c.variationId)
              return new q(s, Z(c.value));
          }
      }
      this.options.logger.settingForVariationIdIsNotPresent(e);
    } catch (i) {
      this.options.logger.settingEvaluationError("getKeyAndValueAsync", t, i);
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
    this.configService ? this.configService.setOnline() : this.options.logger.configServiceMethodHasNoEffectDueToOverrideBehavior(Wt(0), "setOnline");
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
    var e;
    const t = () => {
      const o = this.options.cache.getInMemory();
      return [o.isEmpty ? null : o.config.settings, o];
    };
    let i, s;
    const r = (e = this.options) === null || e === void 0 ? void 0 : e.flagOverrides;
    if (r) {
      const o = r.dataSource.getOverridesSync();
      switch (r.behaviour) {
        case 0:
          return new X(o, null, this);
        case 1:
          return [i, s] = t(), new X(Object.assign(Object.assign({}, i ?? {}), o), s, this);
        case 2:
          return [i, s] = t(), new X(Object.assign(Object.assign({}, o), i ?? {}), s, this);
      }
    }
    return [i, s] = t(), new X(i, s, this);
  }
  async getSettingsAsync() {
    var e;
    this.options.logger.debug("getSettingsAsync() called.");
    const t = async () => {
      const s = await this.configService.getConfig();
      return [s.isEmpty ? null : s.config.settings, s];
    }, i = (e = this.options) === null || e === void 0 ? void 0 : e.flagOverrides;
    if (i) {
      let s, r;
      const o = await i.dataSource.getOverrides();
      switch (i.behaviour) {
        case 0:
          return [o, null];
        case 1:
          return [s, r] = await t(), [Object.assign(Object.assign({}, s ?? {}), o), r];
        case 2:
          return [s, r] = await t(), [Object.assign(Object.assign({}, o), s ?? {}), r];
      }
    }
    return await t();
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
  constructor(e, t, i) {
    this.mergedSettings = e, this.remoteConfig = t, this.defaultUser = i.defaultUser, this.evaluator = i.evaluator, this.options = i.options, this.cacheState = t ? i.configService.getCacheState(t) : 1;
  }
  get fetchedConfig() {
    const e = this.remoteConfig;
    return e && !e.isEmpty ? e.config : null;
  }
  getAllKeys() {
    return this.mergedSettings ? Object.keys(this.mergedSettings) : [];
  }
  getValue(e, t, i) {
    this.options.logger.debug("Snapshot.getValue() called."), re(e), oe(t);
    let s, r;
    i ?? (i = this.defaultUser);
    try {
      r = se(this.evaluator, this.mergedSettings, e, t, i, this.remoteConfig, this.options.logger), s = r.value;
    } catch (o) {
      this.options.logger.settingEvaluationErrorSingle("Snapshot.getValue", e, "defaultValue", t, o), r = P(e, t, R(this.remoteConfig), i, D(o), o), s = t;
    }
    return this.options.hooks.emit("flagEvaluated", r), s;
  }
  getValueDetails(e, t, i) {
    this.options.logger.debug("Snapshot.getValueDetails() called."), re(e), oe(t);
    let s;
    i ?? (i = this.defaultUser);
    try {
      s = se(this.evaluator, this.mergedSettings, e, t, i, this.remoteConfig, this.options.logger);
    } catch (r) {
      this.options.logger.settingEvaluationErrorSingle("Snapshot.getValueDetails", e, "defaultValue", t, r), s = P(e, t, R(this.remoteConfig), i, D(r), r);
    }
    return this.options.hooks.emit("flagEvaluated", s), s;
  }
}
class q {
  constructor(e, t) {
    this.settingKey = e, this.settingValue = t;
  }
}
function ci(n, e) {
  const t = "configcat-proxy/";
  if (e && n.length > t.length && n.lastIndexOf(t, 0) === 0)
    return !0;
  const i = n.split("/"), s = 22;
  switch (i.length) {
    case 2:
      return i[0].length === s && i[1].length === s;
    case 3:
      return i[0] === "configcat-sdk-1" && i[1].length === s && i[2].length === s;
    default:
      return !1;
  }
}
function re(n) {
  if (!n)
    throw new Error("Invalid 'key' value");
}
function oe(n) {
  if (n != null && !H(n))
    throw new TypeError("The default value must be boolean, number, string, null or undefined.");
}
function Z(n) {
  return H(n) ? n : Ne(n);
}
let ee = function(n, e) {
  if (typeof FinalizationRegistry < "u") {
    const t = new FinalizationRegistry((i) => k.finalize(i));
    ee = (i, s) => {
      const r = {};
      return t.register(i, s, r), () => t.unregister(r);
    };
  } else
    ee = () => () => {
    };
  return ee(n, e);
};
function St(n, e, t, i) {
  return k.get(n, e, t, i);
}
function ui() {
  k.disposeAll();
}
function hi(n, e) {
  return new lt(n, e);
}
function gi(n, e, t) {
  return new dt(new Bt(n, t), e);
}
function fi(n, e, t, i) {
  return new dt(new zt(e, t, i), n);
}
function W(n) {
  return !!n.fn;
}
class wt {
  constructor() {
    this.events = {}, this.eventCount = 0, this.addListener = this.on, this.off = this.removeListener;
  }
  addListenerCore(e, t, i) {
    if (typeof t != "function")
      throw new TypeError("Listener must be a function");
    const s = this.events[e], r = { fn: t, once: i };
    return s ? W(s) ? this.events[e] = [s, r] : s.push(r) : (this.events[e] = r, this.eventCount++), this;
  }
  removeListenerCore(e, t, i) {
    const s = this.events[e];
    if (!s)
      return this;
    if (W(s))
      i(s, t) && this.removeEvent(e);
    else for (let r = s.length - 1; r >= 0; r--)
      if (i(s[r], t)) {
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
    return this.removeListenerCore(e, t, (i, s) => i.fn === s);
  }
  removeAllListeners(e) {
    return e ? this.events[e] && this.removeEvent(e) : (this.events = {}, this.eventCount = 0), this;
  }
  listeners(e) {
    const t = this.events[e];
    if (!t)
      return [];
    if (W(t))
      return [t.fn];
    const i = t.length, s = new Array(i);
    for (let r = 0; r < i; r++)
      s[r] = t[r].fn;
    return s;
  }
  listenerCount(e) {
    const t = this.events[e];
    return t ? W(t) ? 1 : t.length : 0;
  }
  eventNames() {
    const e = [];
    if (this.eventCount === 0)
      return e;
    const t = this.events;
    for (const i in t)
      Object.prototype.hasOwnProperty.call(t, i) && e.push(i);
    return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
  }
  emit(e, t, i, s, r, ...o) {
    let a = this.events[e];
    if (!a)
      return !1;
    let l, c;
    W(a) ? [l, c] = [a, 1] : (a = a.slice(), [l, c] = [a[0], a.length]);
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
          l.fn.call(this, t, i);
          break;
        case 3:
          l.fn.call(this, t, i, s);
          break;
        case 4:
          l.fn.call(this, t, i, s, r);
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
class le {
  static setup(e, t) {
    const i = (t ?? di)();
    return i && (e.defaultCacheFactory = (s) => new $e(new le(i), s.logger)), e;
  }
  constructor(e) {
    this.storage = e;
  }
  set(e, t) {
    this.storage.setItem(e, vi(t));
  }
  get(e) {
    const t = this.storage.getItem(e);
    if (t)
      return pi(t);
  }
}
function di() {
  const n = "__configcat_localStorage_test";
  try {
    const e = window.localStorage;
    e.setItem(n, n);
    let t;
    try {
      t = e.getItem(n);
    } finally {
      e.removeItem(n);
    }
    if (t === n)
      return e;
  } catch {
  }
  return null;
}
function vi(n) {
  return n = encodeURIComponent(n), n = n.replace(/%([0-9A-F]{2})/g, (e, t) => String.fromCharCode(parseInt(t, 16))), btoa(n);
}
function pi(n) {
  return n = atob(n), n = n.replace(/[%\x80-\xFF]/g, (e) => "%" + e.charCodeAt(0).toString(16)), decodeURIComponent(n);
}
class It {
  handleStateChange(e, t, i) {
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
      i(r);
    }
  }
  fetchLogic(e, t) {
    return new Promise((i, s) => {
      try {
        e.logger.debug("HttpConfigFetcher.fetchLogic() called.");
        const r = new XMLHttpRequest();
        r.onreadystatechange = () => this.handleStateChange(r, i, s), r.ontimeout = () => s(new b("timeout", e.requestTimeoutMs)), r.onabort = () => s(new b("abort")), r.onerror = () => s(new b("failure"));
        let o = e.getUrl();
        t && (o += "&ccetag=" + encodeURIComponent(t)), r.open("GET", o, !0), r.timeout = e.requestTimeoutMs, r.send(null);
      } catch (r) {
        s(r);
      }
    });
  }
}
class yi {
  async fetchLogic(e, t) {
    var i, s, r;
    const o = { method: "GET" };
    let a;
    if (typeof AbortController < "u") {
      const l = new AbortController(), c = setTimeout(() => l.abort(), e.requestTimeoutMs);
      o.signal = l.signal, a = () => clearTimeout(c);
    } else
      a = () => {
      };
    try {
      let l = e.getUrl();
      t && (l += "&ccetag=" + encodeURIComponent(t));
      const c = await fetch(l, o), { status: u, statusText: h } = c;
      if (u === 200) {
        const g = await c.text(), f = (s = (i = c.headers) === null || i === void 0 ? void 0 : i.get("Etag")) !== null && s !== void 0 ? s : void 0;
        return { statusCode: u, reasonPhrase: h, eTag: f, body: g };
      } else
        return { statusCode: u, reasonPhrase: h };
    } catch (l) {
      throw l instanceof DOMException && l.name === "AbortError" ? !((r = o.signal) === null || r === void 0) && r.aborted ? new b("timeout", e.requestTimeoutMs) : new b("abort") : new b("failure", l);
    } finally {
      a();
    }
  }
}
const mi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DefaultEventEmitter: wt,
  ExternalConfigCache: $e,
  FetchApiConfigFetcher: yi,
  FetchError: b,
  FetchResult: T,
  get FetchStatus() {
    return ve;
  },
  InMemoryConfigCache: at,
  LocalStorageCache: le,
  XmlHttpRequestConfigFetcher: It,
  createConsoleLogger: hi,
  createFlagOverridesFromMap: gi,
  createFlagOverridesFromQueryParams: fi,
  disposeAllClients: ui,
  getClient: St
}, Symbol.toStringTag, { value: "Module" })), Ei = "2.4.2", wi = {
  // Vue's `App.prototype.use` does not play nicely with generic `install` functions, so we resort to using a discriminated union.
  install: (n, e) => {
    const { sdkKey: t, pollingMode: i, clientOptions: s } = e, r = le.setup({
      sdkType: "ConfigCat-Vue",
      sdkVersion: Ei,
      configFetcher: new It(),
      eventEmitterFactory: () => new wt()
    }), o = St(
      t,
      i ?? we.AutoPoll,
      s,
      r
    );
    n.provide("configCatClient", o);
    const a = n.unmount;
    n.unmount = function() {
      a.apply(arguments), o.dispose();
    };
  }
}, Ii = /* @__PURE__ */ bt({
  __name: "FeatureWrapper",
  props: {
    featureKey: {},
    userObject: {}
  },
  emits: ["flagValueChanged"],
  setup(n, { emit: e }) {
    const t = e, i = n, s = Ct(null), r = Nt("configCatClient") ?? (() => {
      throw new Error("ConfigCatPlugin was not installed.");
    })(), o = () => {
      const l = r.snapshot().getValue(i.featureKey, !1, i.userObject);
      s.value !== l && (s.value = l, t("flagValueChanged", l));
    };
    return Rt(() => {
      const a = r.snapshot(), l = a.cacheState;
      l == ie.HasUpToDateFlagData || l == ie.HasLocalOverrideFlagDataOnly ? (s.value = a.getValue(
        i.featureKey,
        !1,
        i.userObject
      ), r.on("configChanged", o)) : r.getValueAsync(i.featureKey, !1, i.userObject).then((c) => {
        const u = o;
        u && (s.value = c, r.on("configChanged", u));
      });
    }), Ft(() => {
      r.off("configChanged", o);
    }), (a, l) => s.value === !0 ? ce(a.$slots, "default", { key: 0 }) : s.value === !1 ? ce(a.$slots, "else", { key: 1 }) : ce(a.$slots, "loading", { key: 2 });
  }
}), {
  createConsoleLogger: Ti,
  createFlagOverridesFromMap: bi,
  createFlagOverridesFromQueryParams: Ci
} = mi;
export {
  ie as ClientCacheState,
  wi as ConfigCatPlugin,
  Ai as ConfigJson,
  Ke as DataGovernance,
  Ii as FeatureWrapper,
  y as FormattableLogMessage,
  Ae as LogLevel,
  Ie as OverrideBehaviour,
  we as PollingMode,
  me as PrerequisiteFlagComparator,
  N as RefreshResult,
  Ee as SegmentComparator,
  q as SettingKeyValue,
  te as SettingType,
  Si as User,
  ye as UserComparator,
  Ti as createConsoleLogger,
  bi as createFlagOverridesFromMap,
  Ci as createFlagOverridesFromQueryParams
};
