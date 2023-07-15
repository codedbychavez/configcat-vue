import { openBlock as se, createElementBlock as ae, renderSlot as de } from "vue";
const Be = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, i] of e)
    r[n] = i;
  return r;
}, Ge = {
  emits: ["flagValueChanged"],
  props: {
    featureKey: {
      type: String,
      required: !0
    },
    userObject: {
      type: Object,
      required: !1,
      default: {}
    }
  },
  data() {
    return {
      isFeatureFlagEnabled: !1
    };
  },
  mounted() {
    this.configCatClient.getValueAsync(this.featureKey, !1, this.userObject).then((t) => {
      this.isFeatureFlagEnabled = t;
    }), this.configCatClient.on("configChanged", (t) => {
      const e = t.settings[this.featureKey].value;
      this.isFeatureFlagEnabled = e, this.$emit("flagValueChanged", e);
    });
  },
  unmounted() {
    this.configCatClient.dispose();
  }
}, Je = { key: 0 }, $e = { key: 1 };
function Ye(t, e, r, n, i, o) {
  return se(), ae("div", null, [
    i.isFeatureFlagEnabled ? (se(), ae("div", Je, [
      de(t.$slots, "default")
    ])) : (se(), ae("div", $e, [
      de(t.$slots, "else")
    ]))
  ]);
}
const Ut = /* @__PURE__ */ Be(Ge, [["render", Ye]]);
var ue = function(t, e) {
  return ue = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n)
      Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, ue(t, e);
};
function z(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  ue(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var q = function() {
  return q = Object.assign || function(e) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, q.apply(this, arguments);
};
function S(t, e, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(s) {
      s(o);
    });
  }
  return new (r || (r = Promise))(function(o, s) {
    function a(l) {
      try {
        c(n.next(l));
      } catch (g) {
        s(g);
      }
    }
    function u(l) {
      try {
        c(n.throw(l));
      } catch (g) {
        s(g);
      }
    }
    function c(l) {
      l.done ? o(l.value) : i(l.value).then(a, u);
    }
    c((n = n.apply(t, e || [])).next());
  });
}
function O(t, e) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(c) {
    return function(l) {
      return u([c, l]);
    };
  }
  function u(c) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, c[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (o = c[0] & 2 ? i.return : c[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, c[1])).done)
          return o;
        switch (i = 0, o && (c = [c[0] & 2, o.value]), c[0]) {
          case 0:
          case 1:
            o = c;
            break;
          case 4:
            return r.label++, { value: c[1], done: !1 };
          case 5:
            r.label++, i = c[1], c = [0];
            continue;
          case 7:
            c = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              r = 0;
              continue;
            }
            if (c[0] === 3 && (!o || c[1] > o[0] && c[1] < o[3])) {
              r.label = c[1];
              break;
            }
            if (c[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = c;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(c);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        c = e.call(t, r);
      } catch (l) {
        c = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function Xe(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = e.length, o; n < i; n++)
      (o || !(n in e)) && (o || (o = Array.prototype.slice.call(e, 0, n)), o[n] = e[n]);
  return t.concat(o || Array.prototype.slice.call(e));
}
function A(t, e) {
  return Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : t.raw = e, t;
}
var K;
(function(t) {
  t[t.Fetched = 0] = "Fetched", t[t.NotModified = 1] = "NotModified", t[t.Errored = 2] = "Errored";
})(K || (K = {}));
var x = function() {
  function t(e, r, n, i) {
    this.status = e, this.config = r, this.errorMessage = n, this.errorException = i;
  }
  return t.success = function(e) {
    return new t(K.Fetched, e);
  }, t.notModified = function(e) {
    return new t(K.NotModified, e);
  }, t.error = function(e, r, n) {
    return new t(K.Errored, e, r ?? "Unknown error.", n);
  }, t;
}(), ee = function(t) {
  z(e, t);
  function e(r) {
    for (var n = [], i = 1; i < arguments.length; i++)
      n[i - 1] = arguments[i];
    var o = this, s;
    switch (r) {
      case "abort":
        s = "Request was aborted.";
        break;
      case "timeout":
        var a = n[0];
        s = "Request timed out. Timeout value: ".concat(a, "ms");
        break;
      case "failure":
        var u = n[0];
        s = "Request failed due to a network or protocol error.", u && (s += " " + (u instanceof Error ? u.message : u + ""));
        break;
    }
    return o = t.call(this, s) || this, o.cause = r, o instanceof e || (Object.setPrototypeOf || function(c, l) {
      return c.__proto__ = l;
    })(o, e.prototype), o.args = n, o;
  }
  return e;
}(Error), P = function() {
  function t(e, r, n, i) {
    this.configJson = e, this.config = r, this.timestamp = n, this.httpETag = i;
  }
  return t.prototype.with = function(e) {
    return new t(this.configJson, this.config, e, this.httpETag);
  }, Object.defineProperty(t.prototype, "isEmpty", {
    get: function() {
      return !this.config;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.isExpired = function(e) {
    return this === t.empty || this.timestamp + e < t.generateTimestamp();
  }, t.generateTimestamp = function() {
    return new Date().getTime();
  }, t.serialize = function(e) {
    var r, n;
    return e.timestamp + `
` + ((r = e.httpETag) !== null && r !== void 0 ? r : "") + `
` + ((n = e.configJson) !== null && n !== void 0 ? n : "");
  }, t.deserialize = function(e) {
    for (var r = Array(2), n = 0, i = 0; i < r.length; i++) {
      if (n = e.indexOf(`
`, n), n < 0)
        throw new Error("Number of values is fewer than expected.");
      r[i] = n++;
    }
    var o = r[0], s = e.substring(0, o), a = parseInt(s);
    if (isNaN(a))
      throw new Error("Invalid fetch time: " + s);
    n = o + 1, o = r[1], s = e.substring(n, o);
    var u = s.length > 0 ? s : void 0;
    n = o + 1, s = e.substring(n);
    var c, l;
    if (s.length > 0) {
      try {
        c = new le(JSON.parse(s));
      } catch {
        throw new Error("Invalid config JSON content: " + s);
      }
      l = s;
    }
    return new t(l, c, a, u);
  }, t.serializationFormatVersion = "v2", t.empty = new t(void 0, void 0, 0, void 0), t;
}(), le = function() {
  function t(e) {
    this.settings = e.f ? Object.fromEntries(Object.entries(e.f).map(function(r) {
      var n = r[0], i = r[1];
      return [n, new Qe(i)];
    })) : {}, this.preferences = e.p ? new Ze(e.p) : void 0;
  }
  return t;
}(), J;
(function(t) {
  t[t.No = 0] = "No", t[t.Should = 1] = "Should", t[t.Force = 2] = "Force";
})(J || (J = {}));
var Ze = function() {
  function t(e) {
    this.baseUrl = e.u, this.redirectMode = e.r;
  }
  return t;
}(), ye;
(function(t) {
  t[t.Boolean = 0] = "Boolean", t[t.String = 1] = "String", t[t.Int = 2] = "Int", t[t.Double = 3] = "Double";
})(ye || (ye = {}));
var Qe = function() {
  function t(e) {
    var r, n, i, o;
    this.value = e.v, this.type = e.t, this.percentageOptions = (n = (r = e.p) === null || r === void 0 ? void 0 : r.map(function(s) {
      return new tt(s);
    })) !== null && n !== void 0 ? n : [], this.targetingRules = (o = (i = e.r) === null || i === void 0 ? void 0 : i.map(function(s) {
      return new et(s);
    })) !== null && o !== void 0 ? o : [], this.variationId = e.i;
  }
  return t.fromValue = function(e) {
    return new t({
      t: -1,
      v: e
    });
  }, t;
}(), h;
(function(t) {
  t[t.In = 0] = "In", t[t.NotIn = 1] = "NotIn", t[t.Contains = 2] = "Contains", t[t.NotContains = 3] = "NotContains", t[t.SemVerIn = 4] = "SemVerIn", t[t.SemVerNotIn = 5] = "SemVerNotIn", t[t.SemVerLessThan = 6] = "SemVerLessThan", t[t.SemVerLessThanEqual = 7] = "SemVerLessThanEqual", t[t.SemVerGreaterThan = 8] = "SemVerGreaterThan", t[t.SemVerGreaterThanEqual = 9] = "SemVerGreaterThanEqual", t[t.NumberEqual = 10] = "NumberEqual", t[t.NumberNotEqual = 11] = "NumberNotEqual", t[t.NumberLessThan = 12] = "NumberLessThan", t[t.NumberLessThanEqual = 13] = "NumberLessThanEqual", t[t.NumberGreaterThan = 14] = "NumberGreaterThan", t[t.NumberGreaterThanEqual = 15] = "NumberGreaterThanEqual", t[t.SensitiveOneOf = 16] = "SensitiveOneOf", t[t.SensitiveNotOneOf = 17] = "SensitiveNotOneOf";
})(h || (h = {}));
var et = function() {
  function t(e) {
    this.order = e.o, this.comparisonAttribute = e.a, this.comparator = e.t, this.comparisonValue = e.c, this.value = e.v, this.variationId = e.i;
  }
  return t;
}(), tt = function() {
  function t(e) {
    this.order = e.o, this.percentage = e.p, this.value = e.v, this.variationId = e.i;
  }
  return t;
}(), ne = function() {
  function t(e, r) {
    this.errorMessage = e, this.errorException = r;
  }
  return Object.defineProperty(t.prototype, "isSuccess", {
    get: function() {
      return this.errorMessage === null;
    },
    enumerable: !1,
    configurable: !0
  }), t.from = function(e) {
    return e.status !== K.Errored ? t.success() : t.failure(e.errorMessage, e.errorException);
  }, t.success = function() {
    return new t(null);
  }, t.failure = function(e, r) {
    return new t(e, r);
  }, t;
}(), I;
(function(t) {
  t[t.Online = 0] = "Online", t[t.Offline = 1] = "Offline", t[t.Disposed = 2] = "Disposed";
})(I || (I = {}));
var ge = function() {
  function t(e, r) {
    this.configFetcher = e, this.options = r, this.pendingFetch = null, this.cacheKey = r.getCacheKey(), this.configFetcher = e, this.options = r, this.status = r.offline ? I.Offline : I.Online;
  }
  return t.prototype.dispose = function() {
    this.status = I.Disposed;
  }, Object.defineProperty(t.prototype, "disposed", {
    get: function() {
      return this.status === I.Disposed;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.refreshConfigAsync = function() {
    return S(this, void 0, void 0, function() {
      var e, r, n, i, o;
      return O(this, function(s) {
        switch (s.label) {
          case 0:
            return [4, this.options.cache.get(this.cacheKey)];
          case 1:
            return e = s.sent(), this.isOffline ? [3, 3] : [4, this.refreshConfigCoreAsync(e)];
          case 2:
            return r = s.sent(), n = r[0], i = r[1], [2, [ne.from(n), i]];
          case 3:
            return o = this.options.logger.configServiceCannotInitiateHttpCalls().toString(), [2, [ne.failure(o), e]];
        }
      });
    });
  }, t.prototype.refreshConfigCoreAsync = function(e) {
    return S(this, void 0, void 0, function() {
      var r, n;
      return O(this, function(i) {
        switch (i.label) {
          case 0:
            return [4, this.fetchAsync(e)];
          case 1:
            return r = i.sent(), n = r.status === K.Fetched, n || r.config.timestamp > e.timestamp && (!r.config.isEmpty || e.isEmpty) ? [4, this.options.cache.set(this.cacheKey, r.config)] : [3, 3];
          case 2:
            i.sent(), this.onConfigUpdated(r.config), n && (r.config.httpETag != e.httpETag || r.config.configJson != e.configJson) && this.onConfigChanged(r.config), e = r.config, i.label = 3;
          case 3:
            return [2, [r, e]];
        }
      });
    });
  }, t.prototype.onConfigUpdated = function(e) {
  }, t.prototype.onConfigChanged = function(e) {
    var r;
    this.options.logger.debug("config changed"), this.options.hooks.emit("configChanged", (r = e.config) !== null && r !== void 0 ? r : new le({}));
  }, t.prototype.fetchAsync = function(e) {
    var r = this, n;
    return (n = this.pendingFetch) !== null && n !== void 0 ? n : this.pendingFetch = function() {
      return S(r, void 0, void 0, function() {
        return O(this, function(i) {
          switch (i.label) {
            case 0:
              return i.trys.push([0, , 2, 3]), [4, this.fetchLogicAsync(e)];
            case 1:
              return [2, i.sent()];
            case 2:
              return this.pendingFetch = null, [7];
            case 3:
              return [2];
          }
        });
      });
    }();
  }, t.prototype.fetchLogicAsync = function(e) {
    var r;
    return S(this, void 0, void 0, function() {
      var n, i, o, s, a, u;
      return O(this, function(c) {
        switch (c.label) {
          case 0:
            n = this.options, n.logger.debug("ConfigServiceBase.fetchLogicAsync() - called."), c.label = 1;
          case 1:
            return c.trys.push([1, 3, , 4]), [4, this.fetchRequestAsync((r = e.httpETag) !== null && r !== void 0 ? r : null)];
          case 2:
            switch (o = c.sent(), s = o[0], a = o[1], s.statusCode) {
              case 200:
                return a ? (n.logger.debug("ConfigServiceBase.fetchLogicAsync(): fetch was successful. Returning new config."), [2, x.success(new P(s.body, a, P.generateTimestamp(), s.eTag))]) : (i = n.logger.fetchReceived200WithInvalidBody().toString(), n.logger.debug("ConfigServiceBase.fetchLogicAsync(): ".concat(s.statusCode, " ").concat(s.reasonPhrase, " was received but the HTTP response content was invalid. Returning null.")), [2, x.error(e, i)]);
              case 304:
                return e ? (n.logger.debug("ConfigServiceBase.fetchLogicAsync(): content was not modified. Returning last config with updated timestamp."), [2, x.notModified(e.with(P.generateTimestamp()))]) : (i = n.logger.fetchReceived304WhenLocalCacheIsEmpty(s.statusCode, s.reasonPhrase).toString(), n.logger.debug("ConfigServiceBase.fetchLogicAsync(): ".concat(s.statusCode, " ").concat(s.reasonPhrase, " was received when no config is cached locally. Returning null.")), [2, x.error(e, i)]);
              case 403:
              case 404:
                return i = n.logger.fetchFailedDueToInvalidSdkKey().toString(), n.logger.debug("ConfigServiceBase.fetchLogicAsync(): fetch was unsuccessful. Returning last config (if any) with updated timestamp."), [2, x.error(e.with(P.generateTimestamp()), i)];
              default:
                return i = n.logger.fetchFailedDueToUnexpectedHttpResponse(s.statusCode, s.reasonPhrase).toString(), n.logger.debug("ConfigServiceBase.fetchLogicAsync(): fetch was unsuccessful. Returning null."), [2, x.error(e, i)];
            }
            return [3, 4];
          case 3:
            return u = c.sent(), i = (u instanceof ee && u.cause === "timeout" ? n.logger.fetchFailedDueToRequestTimeout(u.args[0], u) : n.logger.fetchFailedDueToUnexpectedError(u)).toString(), n.logger.debug("ConfigServiceBase.fetchLogicAsync(): fetch was unsuccessful. Returning null."), [2, x.error(e, i, u)];
          case 4:
            return [2];
        }
      });
    });
  }, t.prototype.fetchRequestAsync = function(e, r) {
    return r === void 0 && (r = 2), S(this, void 0, void 0, function() {
      var n, i, o, s, a, u, c;
      return O(this, function(l) {
        switch (l.label) {
          case 0:
            n = this.options, n.logger.debug("ConfigServiceBase.fetchRequestAsync() - called."), i = 0, l.label = 1;
          case 1:
            return n.logger.debug("ConfigServiceBase.fetchRequestAsync(): calling fetchLogic()".concat(i > 0 ? ", retry ".concat(i, "/").concat(r) : "")), [4, this.configFetcher.fetchLogic(n, e)];
          case 2:
            if (o = l.sent(), o.statusCode !== 200)
              return [2, [o]];
            if (!o.body)
              return n.logger.debug("ConfigServiceBase.fetchRequestAsync(): no response body."), [2, [o]];
            s = void 0;
            try {
              s = new le(JSON.parse(o.body));
            } catch {
              return n.logger.debug("ConfigServiceBase.fetchRequestAsync(): invalid response body."), [2, [o]];
            }
            if (a = s.preferences, !a)
              return n.logger.debug("ConfigServiceBase.fetchRequestAsync(): preferences is empty."), [2, [o, s]];
            if (u = a.baseUrl, !u || u === n.baseUrl)
              return n.logger.debug("ConfigServiceBase.fetchRequestAsync(): baseUrl OK."), [2, [o, s]];
            if (c = a.redirectMode, n.baseUrlOverriden && c !== J.Force)
              return n.logger.debug("ConfigServiceBase.fetchRequestAsync(): options.baseUrlOverriden && redirect !== 2."), [2, [o, s]];
            if (n.baseUrl = u, c === J.No)
              return [2, [o, s]];
            if (c === J.Should && n.logger.dataGovernanceIsOutOfSync(), i >= r)
              return n.logger.fetchFailedDueToRedirectLoop(), [2, [o, s]];
            l.label = 3;
          case 3:
            return i++, [3, 1];
          case 4:
            return [2];
        }
      });
    });
  }, Object.defineProperty(t.prototype, "isOfflineExactly", {
    get: function() {
      return this.status === I.Offline;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "isOffline", {
    get: function() {
      return this.status !== I.Online;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.setOnlineCore = function() {
  }, t.prototype.setOnline = function() {
    this.status === I.Offline ? (this.setOnlineCore(), this.status = I.Online, this.options.logger.configServiceStatusChanged(I[this.status])) : this.disposed && this.options.logger.configServiceMethodHasNoEffectDueToDisposedClient("setOnline");
  }, t.prototype.setOfflineCore = function() {
  }, t.prototype.setOffline = function() {
    this.status === I.Online ? (this.setOfflineCore(), this.status = I.Offline, this.options.logger.configServiceStatusChanged(I[this.status])) : this.disposed && this.options.logger.configServiceMethodHasNoEffectDueToDisposedClient("setOffline");
  }, t;
}();
function rt(t, e) {
  var r, n = new Promise(function(i) {
    return r = setTimeout(i, t);
  });
  return e == null || e(function() {
    return clearTimeout(r);
  }), n;
}
function $(t, e) {
  return e === void 0 && (e = !1), t instanceof Error ? e && t.stack ? t.stack : t.toString() : t + "";
}
var nt = function(t) {
  z(e, t);
  function e(r, n) {
    var i = t.call(this, r, n) || this;
    return i.signalInitialization = function() {
    }, i.pollIntervalMs = n.pollIntervalSeconds * 1e3, n.maxInitWaitTimeSeconds !== 0 ? (i.initialized = !1, i.initialization = new Promise(function(o) {
      return i.signalInitialization = function() {
        i.initialized = !0, o();
      };
    }), i.initialization.then(function() {
      return !i.disposed && n.hooks.emit("clientReady");
    }), n.maxInitWaitTimeSeconds > 0 && setTimeout(function() {
      return i.signalInitialization();
    }, n.maxInitWaitTimeSeconds * 1e3)) : (i.initialized = !0, i.initialization = Promise.resolve(), n.hooks.emit("clientReady")), n.offline || i.startRefreshWorker(), i;
  }
  return e.prototype.waitForInitializationAsync = function() {
    return S(this, void 0, void 0, function() {
      var r, n, i = this;
      return O(this, function(o) {
        switch (o.label) {
          case 0:
            return this.options.maxInitWaitTimeSeconds < 0 ? [4, this.initialization] : [3, 2];
          case 1:
            return o.sent(), [2, !0];
          case 2:
            return [4, Promise.race([
              function() {
                return S(i, void 0, void 0, function() {
                  return O(this, function(s) {
                    switch (s.label) {
                      case 0:
                        return [4, this.initialization];
                      case 1:
                        return s.sent(), [2, !0];
                    }
                  });
                });
              }(),
              rt(this.options.maxInitWaitTimeSeconds * 1e3, function(s) {
                return r = s;
              })
            ])];
          case 3:
            return n = o.sent(), r(), [2, !!n];
        }
      });
    });
  }, e.prototype.getConfig = function() {
    return S(this, void 0, void 0, function() {
      function r(i) {
        i.debug("AutoPollConfigService.getConfig() - returning value from cache.");
      }
      var n;
      return O(this, function(i) {
        switch (i.label) {
          case 0:
            return this.options.logger.debug("AutoPollConfigService.getConfig() called."), !this.isOffline && !this.initialized ? [4, this.options.cache.get(this.cacheKey)] : [3, 3];
          case 1:
            return n = i.sent(), n.isExpired(this.pollIntervalMs) ? (this.options.logger.debug("AutoPollConfigService.getConfig() - cache is empty or expired, waiting for initialization."), [4, this.waitForInitializationAsync()]) : (r(this.options.logger), [2, n]);
          case 2:
            i.sent(), i.label = 3;
          case 3:
            return [4, this.options.cache.get(this.cacheKey)];
          case 4:
            return n = i.sent(), n.isExpired(this.pollIntervalMs) ? this.options.logger.debug("AutoPollConfigService.getConfig() - cache is empty or expired.") : r(this.options.logger), [2, n];
        }
      });
    });
  }, e.prototype.refreshConfigAsync = function() {
    return this.options.logger.debug("AutoPollConfigService.refreshConfigAsync() called."), t.prototype.refreshConfigAsync.call(this);
  }, e.prototype.dispose = function() {
    this.options.logger.debug("AutoPollConfigService.dispose() called."), t.prototype.dispose.call(this), this.timerId && this.stopRefreshWorker();
  }, e.prototype.onConfigUpdated = function(r) {
    t.prototype.onConfigUpdated.call(this, r), this.signalInitialization();
  }, e.prototype.setOnlineCore = function() {
    this.startRefreshWorker();
  }, e.prototype.setOfflineCore = function() {
    this.stopRefreshWorker();
  }, e.prototype.startRefreshWorker = function() {
    return S(this, void 0, void 0, function() {
      var r, n, i = this;
      return O(this, function(o) {
        switch (o.label) {
          case 0:
            return this.options.logger.debug("AutoPollConfigService.startRefreshWorker() called."), r = this.pollIntervalMs, [4, this.options.cache.get(this.cacheKey)];
          case 1:
            return n = o.sent(), n.isExpired(this.pollIntervalMs) ? this.isOfflineExactly ? [3, 3] : [4, this.refreshConfigCoreAsync(n)] : [3, 4];
          case 2:
            o.sent(), o.label = 3;
          case 3:
            return [3, 5];
          case 4:
            this.signalInitialization(), o.label = 5;
          case 5:
            return this.options.logger.debug("AutoPollConfigService.startRefreshWorker() - calling refreshWorkerLogic()'s setTimeout."), this.timerId = setTimeout(function(s) {
              return i.refreshWorkerLogic(s);
            }, r, r), [2];
        }
      });
    });
  }, e.prototype.stopRefreshWorker = function() {
    this.options.logger.debug("AutoPollConfigService.stopRefreshWorker() - clearing setTimeout."), clearTimeout(this.timerId);
  }, e.prototype.refreshWorkerLogic = function(r) {
    return S(this, void 0, void 0, function() {
      var n, i = this;
      return O(this, function(o) {
        switch (o.label) {
          case 0:
            return this.disposed ? (this.options.logger.debug("AutoPollConfigService.refreshWorkerLogic() - called on a disposed client."), [2]) : (this.options.logger.debug("AutoPollConfigService.refreshWorkerLogic() - called."), this.isOffline ? [3, 3] : [4, this.options.cache.get(this.cacheKey)]);
          case 1:
            return n = o.sent(), [4, this.refreshConfigCoreAsync(n)];
          case 2:
            o.sent(), o.label = 3;
          case 3:
            return this.options.logger.debug("AutoPollConfigService.refreshWorkerLogic() - calling refreshWorkerLogic()'s setTimeout."), this.timerId = setTimeout(function(s) {
              return i.refreshWorkerLogic(s);
            }, r, r), [2];
        }
      });
    });
  }, e;
}(ge), it = function() {
  function t() {
    this.cachedConfig = P.empty;
  }
  return t.prototype.set = function(e, r) {
    this.cachedConfig = r;
  }, t.prototype.get = function(e) {
    return this.cachedConfig;
  }, t;
}(), qe = function() {
  function t(e, r) {
    this.cache = e, this.logger = r, this.cachedConfig = P.empty;
  }
  return t.prototype.set = function(e, r) {
    return S(this, void 0, void 0, function() {
      var n;
      return O(this, function(i) {
        switch (i.label) {
          case 0:
            if (i.trys.push([0, 2, , 3]), !r.isEmpty)
              this.cachedSerializedConfig = P.serialize(r), this.cachedConfig = r;
            else
              return this.cachedSerializedConfig = void 0, this.cachedConfig = r, [2];
            return [4, this.cache.set(e, this.cachedSerializedConfig)];
          case 1:
            return i.sent(), [3, 3];
          case 2:
            return n = i.sent(), this.logger.configServiceCacheWriteError(n), [3, 3];
          case 3:
            return [2];
        }
      });
    });
  }, t.prototype.get = function(e) {
    return S(this, void 0, void 0, function() {
      var r, n;
      return O(this, function(i) {
        switch (i.label) {
          case 0:
            return i.trys.push([0, 2, , 3]), [4, this.cache.get(e)];
          case 1:
            return r = i.sent(), r == null || r === this.cachedSerializedConfig ? [2, this.cachedConfig] : (this.cachedConfig = P.deserialize(r), this.cachedSerializedConfig = r, [3, 3]);
          case 2:
            return n = i.sent(), this.logger.configServiceCacheReadError(n), [3, 3];
          case 3:
            return [2, this.cachedConfig];
        }
      });
    });
  }, t;
}(), d;
(function(t) {
  t[t.Debug = 4] = "Debug", t[t.Info = 3] = "Info", t[t.Warn = 2] = "Warn", t[t.Error = 1] = "Error", t[t.Off = -1] = "Off";
})(d || (d = {}));
var C = function() {
  function t(e, r, n) {
    this.strings = e, this.argNames = r, this.argValues = n;
  }
  return t.from = function() {
    for (var e = [], r = 0; r < arguments.length; r++)
      e[r] = arguments[r];
    return function(n) {
      for (var i = [], o = 1; o < arguments.length; o++)
        i[o - 1] = arguments[o];
      return new t(n, e, i);
    };
  }, Object.defineProperty(t.prototype, "defaultFormattedMessage", {
    get: function() {
      var e = this.cachedDefaultFormattedMessage;
      if (e === void 0) {
        e = "";
        for (var r = this, n = r.strings, i = r.argValues, o = 0; o < n.length - 1; o++)
          e += n[o], e += i[o];
        e += n[o], this.cachedDefaultFormattedMessage = e;
      }
      return e;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.toString = function() {
    return this.defaultFormattedMessage;
  }, t;
}(), ot = function() {
  function t(e, r) {
    this.logger = e, this.hooks = r;
  }
  return Object.defineProperty(t.prototype, "level", {
    get: function() {
      var e;
      return (e = this.logger.level) !== null && e !== void 0 ? e : d.Warn;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.isLogLevelEnabled = function(e) {
    return this.level >= e;
  }, t.prototype.log = function(e, r, n, i) {
    var o;
    return this.isLogLevelEnabled(e) && this.logger.log(e, r, n, i), e === d.Error && ((o = this.hooks) === null || o === void 0 || o.emit("clientError", n.toString(), i)), n;
  }, t.prototype.debug = function(e) {
    this.log(d.Debug, 0, e);
  }, t.prototype.configJsonIsNotPresent = function(e) {
    return this.log(d.Error, 1e3, C.from("DEFAULT_RETURN_VALUE")(me || (me = A(["Config JSON is not present. Returning ", "."], ["Config JSON is not present. Returning ", "."])), e));
  }, t.prototype.configJsonIsNotPresentSingle = function(e, r, n) {
    return this.log(d.Error, 1e3, C.from("KEY", "DEFAULT_PARAM_NAME", "DEFAULT_PARAM_VALUE")(Ee || (Ee = A(["Config JSON is not present when evaluating setting '", "'. Returning the `", "` parameter that you specified in your application: '", "'."], ["Config JSON is not present when evaluating setting '", "'. Returning the \\`", "\\` parameter that you specified in your application: '", "'."])), e, r, n));
  }, t.prototype.settingEvaluationFailedDueToMissingKey = function(e, r, n, i) {
    return this.log(d.Error, 1001, C.from("KEY", "DEFAULT_PARAM_NAME", "DEFAULT_PARAM_VALUE", "AVAILABLE_KEYS")(be || (be = A(["Failed to evaluate setting '", "' (the key was not found in config JSON). Returning the `", "` parameter that you specified in your application: '", "'. Available keys: [", "]."], ["Failed to evaluate setting '", "' (the key was not found in config JSON). Returning the \\`", "\\` parameter that you specified in your application: '", "'. Available keys: [", "]."])), e, r, n, i));
  }, t.prototype.settingEvaluationError = function(e, r, n) {
    return this.log(d.Error, 1002, C.from("METHOD_NAME", "DEFAULT_RETURN_VALUE")(Se || (Se = A(["Error occurred in the `", "` method. Returning ", "."], ["Error occurred in the \\`", "\\` method. Returning ", "."])), e, r), n);
  }, t.prototype.settingEvaluationErrorSingle = function(e, r, n, i, o) {
    return this.log(d.Error, 1002, C.from("METHOD_NAME", "KEY", "DEFAULT_PARAM_NAME", "DEFAULT_PARAM_VALUE")(Oe || (Oe = A(["Error occurred in the `", "` method while evaluating setting '", "'. Returning the `", "` parameter that you specified in your application: '", "'."], ["Error occurred in the \\`", "\\` method while evaluating setting '", "'. Returning the \\`", "\\` parameter that you specified in your application: '", "'."])), e, r, n, i), o);
  }, t.prototype.forceRefreshError = function(e, r) {
    return this.log(d.Error, 1003, C.from("METHOD_NAME")(Ae || (Ae = A(["Error occurred in the `", "` method."], ["Error occurred in the \\`", "\\` method."])), e), r);
  }, t.prototype.fetchFailedDueToInvalidSdkKey = function() {
    return this.log(d.Error, 1100, "Your SDK Key seems to be wrong. You can find the valid SDK Key at https://app.configcat.com/sdkkey");
  }, t.prototype.fetchFailedDueToUnexpectedHttpResponse = function(e, r) {
    return this.log(d.Error, 1101, C.from("STATUS_CODE", "REASON_PHRASE")(Ce || (Ce = A(["Unexpected HTTP response was received while trying to fetch config JSON: ", " ", ""], ["Unexpected HTTP response was received while trying to fetch config JSON: ", " ", ""])), e, r));
  }, t.prototype.fetchFailedDueToRequestTimeout = function(e, r) {
    return this.log(d.Error, 1102, C.from("TIMEOUT")(we || (we = A(["Request timed out while trying to fetch config JSON. Timeout value: ", "ms"], ["Request timed out while trying to fetch config JSON. Timeout value: ", "ms"])), e), r);
  }, t.prototype.fetchFailedDueToUnexpectedError = function(e) {
    return this.log(d.Error, 1103, "Unexpected error occurred while trying to fetch config JSON.", e);
  }, t.prototype.fetchFailedDueToRedirectLoop = function() {
    return this.log(d.Error, 1104, "Redirection loop encountered while trying to fetch config JSON. Please contact us at https://configcat.com/support/");
  }, t.prototype.fetchReceived200WithInvalidBody = function() {
    return this.log(d.Error, 1105, "Fetching config JSON was successful but the HTTP response content was invalid.");
  }, t.prototype.fetchReceived304WhenLocalCacheIsEmpty = function(e, r) {
    return this.log(d.Error, 1106, C.from("STATUS_CODE", "REASON_PHRASE")(Ie || (Ie = A(["Unexpected HTTP response was received when no config JSON is cached locally: ", " ", ""], ["Unexpected HTTP response was received when no config JSON is cached locally: ", " ", ""])), e, r));
  }, t.prototype.settingForVariationIdIsNotPresent = function(e) {
    return this.log(d.Error, 2011, C.from("VARIATION_ID")(Te || (Te = A(["Could not find the setting for the specified variation ID: '", "'."], ["Could not find the setting for the specified variation ID: '", "'."])), e));
  }, t.prototype.configServiceCacheReadError = function(e) {
    return this.log(d.Error, 2200, "Error occurred while reading the cache.", e);
  }, t.prototype.configServiceCacheWriteError = function(e) {
    return this.log(d.Error, 2201, "Error occurred while writing the cache.", e);
  }, t.prototype.clientIsAlreadyCreated = function(e) {
    return this.log(d.Warn, 3e3, C.from("SDK_KEY")(Ne || (Ne = A(["There is an existing client instance for the specified SDK Key. No new client instance will be created and the specified options are ignored. Returning the existing client instance. SDK Key: '", "'."], ["There is an existing client instance for the specified SDK Key. No new client instance will be created and the specified options are ignored. Returning the existing client instance. SDK Key: '", "'."])), e));
  }, t.prototype.targetingIsNotPossible = function(e) {
    return this.log(d.Warn, 3001, C.from("KEY")(Le || (Le = A(["Cannot evaluate targeting rules and % options for setting '", "' (User Object is missing). You should pass a User Object to the evaluation methods like `getValueAsync()` in order to make targeting work properly. Read more: https://configcat.com/docs/advanced/user-object/"], ["Cannot evaluate targeting rules and % options for setting '", "' (User Object is missing). You should pass a User Object to the evaluation methods like \\`getValueAsync()\\` in order to make targeting work properly. Read more: https://configcat.com/docs/advanced/user-object/"])), e));
  }, t.prototype.dataGovernanceIsOutOfSync = function() {
    return this.log(d.Warn, 3002, "The `dataGovernance` parameter specified at the client initialization is not in sync with the preferences on the ConfigCat Dashboard. Read more: https://configcat.com/docs/advanced/data-governance/");
  }, t.prototype.configServiceCannotInitiateHttpCalls = function() {
    return this.log(d.Warn, 3200, "Client is in offline mode, it cannot initiate HTTP calls.");
  }, t.prototype.configServiceMethodHasNoEffectDueToDisposedClient = function(e) {
    return this.log(d.Warn, 3201, C.from("METHOD_NAME")(Re || (Re = A(["The client object is already disposed, thus `", "()` has no effect."], ["The client object is already disposed, thus \\`", "()\\` has no effect."])), e));
  }, t.prototype.configServiceMethodHasNoEffectDueToOverrideBehavior = function(e, r) {
    return this.log(d.Warn, 3202, C.from("OVERRIDE_BEHAVIOR", "METHOD_NAME")(De || (De = A(["Client is configured to use the `", "` override behavior, thus `", "()` has no effect."], ["Client is configured to use the \\`", "\\` override behavior, thus \\`", "()\\` has no effect."])), e, r));
  }, t.prototype.settingEvaluated = function(e) {
    return this.log(d.Info, 5e3, C.from("EVALUATE_LOG")(Fe || (Fe = A(["", ""], ["", ""])), e));
  }, t.prototype.configServiceStatusChanged = function(e) {
    return this.log(d.Info, 5200, C.from("MODE")(ke || (ke = A(["Switched to ", " mode."], ["Switched to ", " mode."])), e.toUpperCase()));
  }, t;
}(), st = function() {
  function t(e) {
    e === void 0 && (e = d.Warn), this.level = e, this.SOURCE = "ConfigCat";
  }
  return t.prototype.log = function(e, r, n, i) {
    var o = e === d.Debug ? [console.info, "DEBUG"] : e === d.Info ? [console.info, "INFO"] : e === d.Warn ? [console.warn, "WARN"] : e === d.Error ? [console.error, "ERROR"] : [console.log, d[e].toUpperCase()], s = o[0], a = o[1], u = i !== void 0 ? `
` + $(i, !0) : "";
    s("".concat(this.SOURCE, " - ").concat(a, " - [").concat(r, "] ").concat(n).concat(u));
  }, t;
}(), me, Ee, be, Se, Oe, Ae, Ce, we, Ie, Te, Ne, Le, Re, De, Fe, ke;
function _(t) {
  return !!t.fn;
}
var at = function() {
  function t() {
    this.events = {}, this.eventCount = 0, this.addListener = this.on, this.off = this.removeListener;
  }
  return t.prototype.addListenerCore = function(e, r, n) {
    if (typeof r != "function")
      throw new TypeError("Listener must be a function");
    var i = this.events[e], o = { fn: r, once: n };
    return i ? _(i) ? this.events[e] = [i, o] : i.push(o) : (this.events[e] = o, this.eventCount++), this;
  }, t.prototype.removeListenerCore = function(e, r, n) {
    var i = this.events[e];
    if (!i)
      return this;
    if (_(i))
      n(i, r) && this.removeEvent(e);
    else
      for (var o = i.length - 1; o >= 0; o--)
        if (n(i[o], r)) {
          i.splice(o, 1), i.length ? i.length === 1 && (this.events[e] = i[0]) : this.removeEvent(e);
          break;
        }
    return this;
  }, t.prototype.removeEvent = function(e) {
    --this.eventCount === 0 ? this.events = {} : delete this.events[e];
  }, t.prototype.on = function(e, r) {
    return this.addListenerCore(e, r, !1);
  }, t.prototype.once = function(e, r) {
    return this.addListenerCore(e, r, !0);
  }, t.prototype.removeListener = function(e, r) {
    if (typeof r != "function")
      throw new TypeError("Listener must be a function");
    return this.removeListenerCore(e, r, function(n, i) {
      return n.fn === i;
    });
  }, t.prototype.removeAllListeners = function(e) {
    return e ? this.events[e] && this.removeEvent(e) : (this.events = {}, this.eventCount = 0), this;
  }, t.prototype.listeners = function(e) {
    var r = this.events[e];
    if (!r)
      return [];
    if (_(r))
      return [r.fn];
    for (var n = r.length, i = new Array(n), o = 0; o < n; o++)
      i[o] = r[o].fn;
    return i;
  }, t.prototype.listenerCount = function(e) {
    var r = this.events[e];
    return r ? _(r) ? 1 : r.length : 0;
  }, t.prototype.eventNames = function() {
    var e = [];
    if (this.eventCount === 0)
      return e;
    var r = this.events;
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && e.push(n);
    return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(r)) : e;
  }, t.prototype.emit = function(e, r, n, i, o) {
    var s, a, u = this.events[e];
    if (!u)
      return !1;
    var c, l;
    _(u) ? (s = [u, 1], c = s[0], l = s[1]) : (u = u.slice(), a = [u[0], u.length], c = a[0], l = a[1]);
    for (var g = arguments.length - 1, v = 0; ; ) {
      switch (c.once && this.removeListenerCore(e, c, function(y, E) {
        return y === E;
      }), g) {
        case 0:
          c.fn.call(this);
          break;
        case 1:
          c.fn.call(this, r);
          break;
        case 2:
          c.fn.call(this, r, n);
          break;
        case 3:
          c.fn.call(this, r, n, i);
          break;
        case 4:
          c.fn.call(this, r, n, i, o);
          break;
        default:
          for (var f = new Array(g), p = 0; p < g; p++)
            f[p] = arguments[p + 1];
          c.fn.apply(this, f);
          break;
      }
      if (++v >= l)
        break;
      c = u[v];
    }
    return !0;
  }, t;
}(), ct = function() {
  function t() {
    this.addListener = this.on, this.off = this.removeListener;
  }
  return t.prototype.on = function() {
    return this;
  }, t.prototype.once = function() {
    return this;
  }, t.prototype.removeListener = function() {
    return this;
  }, t.prototype.removeAllListeners = function() {
    return this;
  }, t.prototype.listeners = function() {
    return [];
  }, t.prototype.listenerCount = function() {
    return 0;
  }, t.prototype.eventNames = function() {
    return [];
  }, t.prototype.emit = function() {
    return !1;
  }, t;
}(), Pe = new ct(), ut = function() {
  function t(e) {
    this.addListener = this.on, this.off = this.removeListener, this.eventEmitter = e;
  }
  return t.prototype.tryDisconnect = function() {
    var e = this.eventEmitter;
    return this.eventEmitter = Pe, e !== Pe;
  }, t.prototype.on = function(e, r) {
    return this.eventEmitter.on(e, r), this;
  }, t.prototype.once = function(e, r) {
    return this.eventEmitter.once(e, r), this;
  }, t.prototype.removeListener = function(e, r) {
    return this.eventEmitter.removeListener(e, r), this;
  }, t.prototype.removeAllListeners = function(e) {
    return this.eventEmitter.removeAllListeners(e), this;
  }, t.prototype.listeners = function(e) {
    return this.eventEmitter.listeners(e);
  }, t.prototype.listenerCount = function(e) {
    return this.eventEmitter.listenerCount(e);
  }, t.prototype.eventNames = function() {
    return this.eventEmitter.eventNames();
  }, t.prototype.emit = function(e) {
    for (var r, n = [], i = 1; i < arguments.length; i++)
      n[i - 1] = arguments[i];
    return (r = this.eventEmitter).emit.apply(r, Xe([e], n, !1));
  }, t;
}();
function te(t) {
  function e(k, N) {
    var V = k << N | k >>> 32 - N;
    return V;
  }
  function r(k) {
    for (var N = "", V, L = 7; L >= 0; L--)
      V = k >>> L * 4 & 15, N += V.toString(16);
    return N;
  }
  function n(k) {
    k = k.replace(/\r\n/g, `
`);
    for (var N = "", V = 0; V < k.length; V++) {
      var L = k.charCodeAt(V);
      L < 128 ? N += String.fromCharCode(L) : L > 127 && L < 2048 ? (N += String.fromCharCode(L >> 6 | 192), N += String.fromCharCode(L & 63 | 128)) : (N += String.fromCharCode(L >> 12 | 224), N += String.fromCharCode(L >> 6 & 63 | 128), N += String.fromCharCode(L & 63 | 128));
    }
    return N;
  }
  var i, o, s, a = new Array(80), u = 1732584193, c = 4023233417, l = 2562383102, g = 271733878, v = 3285377520, f, p, y, E, T, F;
  t = n(t);
  var R = t.length, D = new Array();
  for (o = 0; o < R - 3; o += 4)
    s = t.charCodeAt(o) << 24 | t.charCodeAt(o + 1) << 16 | t.charCodeAt(o + 2) << 8 | t.charCodeAt(o + 3), D.push(s);
  switch (R % 4) {
    case 0:
      o = 2147483648;
      break;
    case 1:
      o = t.charCodeAt(R - 1) << 24 | 8388608;
      break;
    case 2:
      o = t.charCodeAt(R - 2) << 24 | t.charCodeAt(R - 1) << 16 | 32768;
      break;
    case 3:
      o = t.charCodeAt(R - 3) << 24 | t.charCodeAt(R - 2) << 16 | t.charCodeAt(R - 1) << 8 | 128;
      break;
  }
  for (D.push(o); D.length % 16 != 14; )
    D.push(0);
  for (D.push(R >>> 29), D.push(R << 3 & 4294967295), i = 0; i < D.length; i += 16) {
    for (o = 0; o < 16; o++)
      a[o] = D[i + o];
    for (o = 16; o <= 79; o++)
      a[o] = e(a[o - 3] ^ a[o - 8] ^ a[o - 14] ^ a[o - 16], 1);
    for (f = u, p = c, y = l, E = g, T = v, o = 0; o <= 19; o++)
      F = e(f, 5) + (p & y | ~p & E) + T + a[o] + 1518500249 & 4294967295, T = E, E = y, y = e(p, 30), p = f, f = F;
    for (o = 20; o <= 39; o++)
      F = e(f, 5) + (p ^ y ^ E) + T + a[o] + 1859775393 & 4294967295, T = E, E = y, y = e(p, 30), p = f, f = F;
    for (o = 40; o <= 59; o++)
      F = e(f, 5) + (p & y | p & E | y & E) + T + a[o] + 2400959708 & 4294967295, T = E, E = y, y = e(p, 30), p = f, f = F;
    for (o = 60; o <= 79; o++)
      F = e(f, 5) + (p ^ y ^ E) + T + a[o] + 3395469782 & 4294967295, T = E, E = y, y = e(p, 30), p = f, f = F;
    u = u + f & 4294967295, c = c + p & 4294967295, l = l + y & 4294967295, g = g + E & 4294967295, v = v + T & 4294967295;
  }
  return (r(u) + r(c) + r(l) + r(g) + r(v)).toLowerCase();
}
var U;
(function(t) {
  t[t.AutoPoll = 0] = "AutoPoll", t[t.LazyLoad = 1] = "LazyLoad", t[t.ManualPoll = 2] = "ManualPoll";
})(U || (U = {}));
var ie;
(function(t) {
  t[t.Global = 0] = "Global", t[t.EuOnly = 1] = "EuOnly";
})(ie || (ie = {}));
var pe = function() {
  function t(e, r, n, i, o) {
    var s, a, u;
    if (this.requestTimeoutMs = 3e4, this.baseUrlOverriden = !1, this.proxy = "", this.offline = !1, !e)
      throw new Error("Invalid 'apiKey' value");
    switch (this.apiKey = e, this.clientVersion = r, this.dataGovernance = (s = n == null ? void 0 : n.dataGovernance) !== null && s !== void 0 ? s : ie.Global, this.dataGovernance) {
      case ie.EuOnly:
        this.baseUrl = "https://cdn-eu.configcat.com";
        break;
      default:
        this.baseUrl = "https://cdn-global.configcat.com";
        break;
    }
    var c = (a = o == null ? void 0 : o()) !== null && a !== void 0 ? a : new at();
    this.hooks = new ut(c);
    var l, g;
    if (n) {
      if (l = n.logger, g = n.cache, n.requestTimeoutMs) {
        if (n.requestTimeoutMs < 0)
          throw new Error("Invalid 'requestTimeoutMs' value");
        this.requestTimeoutMs = n.requestTimeoutMs;
      }
      n.baseUrl && (this.baseUrl = n.baseUrl, this.baseUrlOverriden = !0), n.proxy && (this.proxy = n.proxy), n.flagOverrides && (this.flagOverrides = n.flagOverrides), n.defaultUser && (this.defaultUser = n.defaultUser), n.offline && (this.offline = n.offline), (u = n.setupHooks) === null || u === void 0 || u.call(n, this.hooks);
    }
    this.logger = new ot(l ?? new st(), this.hooks), this.cache = g ? new qe(g, this.logger) : i ? i(this) : new it();
  }
  return t.prototype.getUrl = function() {
    return this.baseUrl + "/configuration-files/" + this.apiKey + "/" + t.configFileName + "?sdk=" + this.clientVersion;
  }, t.prototype.getCacheKey = function() {
    return te("".concat(this.apiKey, "_").concat(t.configFileName, "_").concat(P.serializationFormatVersion));
  }, t.configFileName = "config_v5.json", t;
}(), Ue = function(t) {
  z(e, t);
  function e(r, n, i, o, s, a) {
    var u = t.call(this, r, n + "/a-" + i, o, s, a) || this;
    u.pollIntervalSeconds = 60, u.maxInitWaitTimeSeconds = 5, o && (o.pollIntervalSeconds !== void 0 && o.pollIntervalSeconds !== null && (u.pollIntervalSeconds = o.pollIntervalSeconds), o.maxInitWaitTimeSeconds !== void 0 && o.maxInitWaitTimeSeconds !== null && (u.maxInitWaitTimeSeconds = o.maxInitWaitTimeSeconds));
    var c = 2147483;
    if (!(typeof u.pollIntervalSeconds == "number" && 1 <= u.pollIntervalSeconds && u.pollIntervalSeconds <= c))
      throw new Error("Invalid 'pollIntervalSeconds' value");
    if (!(typeof u.maxInitWaitTimeSeconds == "number" && u.maxInitWaitTimeSeconds <= c))
      throw new Error("Invalid 'maxInitWaitTimeSeconds' value");
    return u;
  }
  return e;
}(pe), Ve = function(t) {
  z(e, t);
  function e(r, n, i, o, s, a) {
    return t.call(this, r, n + "/m-" + i, o, s, a) || this;
  }
  return e;
}(pe), Me = function(t) {
  z(e, t);
  function e(r, n, i, o, s, a) {
    var u = t.call(this, r, n + "/l-" + i, o, s, a) || this;
    if (u.cacheTimeToLiveSeconds = 60, o && o.cacheTimeToLiveSeconds !== void 0 && o.cacheTimeToLiveSeconds !== null && (u.cacheTimeToLiveSeconds = o.cacheTimeToLiveSeconds), !(typeof u.cacheTimeToLiveSeconds == "number" && 1 <= u.cacheTimeToLiveSeconds && u.cacheTimeToLiveSeconds <= 2147483647))
      throw new Error("Invalid 'cacheTimeToLiveSeconds' value");
    return u;
  }
  return e;
}(pe), M;
(function(t) {
  t[t.LocalOnly = 0] = "LocalOnly", t[t.LocalOverRemote = 1] = "LocalOverRemote", t[t.RemoteOverLocal = 2] = "RemoteOverLocal";
})(M || (M = {}));
var lt = function(t) {
  z(e, t);
  function e(r, n) {
    var i = t.call(this, r, n) || this;
    return i.cacheTimeToLiveMs = n.cacheTimeToLiveSeconds * 1e3, n.hooks.emit("clientReady"), i;
  }
  return e.prototype.getConfig = function() {
    return S(this, void 0, void 0, function() {
      function r(o, s) {
        s === void 0 && (s = ""), o.debug("LazyLoadConfigService.getConfig(): cache is empty or expired".concat(s, "."));
      }
      var n, i;
      return O(this, function(o) {
        switch (o.label) {
          case 0:
            return this.options.logger.debug("LazyLoadConfigService.getConfig() called."), [4, this.options.cache.get(this.cacheKey)];
          case 1:
            return n = o.sent(), n.isExpired(this.cacheTimeToLiveMs) ? this.isOffline ? [3, 3] : (r(this.options.logger, ", calling refreshConfigCoreAsync()"), [4, this.refreshConfigCoreAsync(n)]) : [3, 5];
          case 2:
            return i = o.sent(), n = i[1], [3, 4];
          case 3:
            r(this.options.logger), o.label = 4;
          case 4:
            return [2, n];
          case 5:
            return this.options.logger.debug("LazyLoadConfigService.getConfig(): cache is valid, returning from cache."), [2, n];
        }
      });
    });
  }, e.prototype.refreshConfigAsync = function() {
    return this.options.logger.debug("LazyLoadConfigService.refreshConfigAsync() called."), t.prototype.refreshConfigAsync.call(this);
  }, e;
}(ge), ft = function(t) {
  z(e, t);
  function e(r, n) {
    var i = t.call(this, r, n) || this;
    return n.hooks.emit("clientReady"), i;
  }
  return e.prototype.getConfig = function() {
    return S(this, void 0, void 0, function() {
      return O(this, function(r) {
        switch (r.label) {
          case 0:
            return this.options.logger.debug("ManualPollService.getConfig() called."), [4, this.options.cache.get(this.cacheKey)];
          case 1:
            return [2, r.sent()];
        }
      });
    });
  }, e.prototype.refreshConfigAsync = function() {
    return this.options.logger.debug("ManualPollService.refreshConfigAsync() called."), t.prototype.refreshConfigAsync.call(this);
  }, e;
}(ge);
function ht() {
  typeof Object.values > "u" && (Object.values = gt), typeof Object.entries > "u" && (Object.entries = pt), typeof Object.fromEntries > "u" && (Object.fromEntries = vt);
}
function gt(t) {
  for (var e = [], r = 0, n = Object.keys(t); r < n.length; r++) {
    var i = n[r];
    e.push(t[i]);
  }
  return e;
}
function pt(t) {
  for (var e = [], r = 0, n = Object.keys(t); r < n.length; r++) {
    var i = n[r];
    e.push([i, t[i]]);
  }
  return e;
}
function vt(t) {
  var e, r = {};
  if (Array.isArray(t))
    for (var n = 0, i = t; n < i.length; n++) {
      var o = i[n], s = o[0], a = o[1];
      r[s] = a;
    }
  else if (typeof Symbol < "u" && (t == null ? void 0 : t[Symbol.iterator]))
    for (var u = t[Symbol.iterator](), c = void 0, l = void 0; e = u.next(), c = e.value, l = e.done, !l; ) {
      var s = c[0], a = c[1];
      r[s] = a;
    }
  else
    throw new TypeError("Object.fromEntries() requires a single iterable argument");
  return r;
}
function dt() {
  var t = function(e) {
    this.target = e;
  };
  return t.prototype.deref = function() {
    return this.target;
  }, t.isFallback = !0, t;
}
var yt = function() {
  return typeof WeakRef == "function";
}, xe = /^[0-9]+$/, B = function(t, e) {
  var r = xe.test(t), n = xe.test(e);
  return r && n && (t = +t, e = +e), t === e ? 0 : r && !n ? -1 : n && !r ? 1 : t < e ? -1 : 1;
}, fe = 256, Z = Number.MAX_SAFE_INTEGER || 9007199254740991, Y = [], b = [], m = {}, mt = 0, w = function(t, e) {
  var r = mt++;
  m[t] = r, b[r] = e, Y[r] = new RegExp(e);
};
w("NUMERICIDENTIFIER", "0|[1-9]\\d*");
w("NUMERICIDENTIFIERLOOSE", "[0-9]+");
w("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*");
w("MAINVERSION", "(".concat(b[m.NUMERICIDENTIFIER], ")\\.") + "(".concat(b[m.NUMERICIDENTIFIER], ")\\.") + "(".concat(b[m.NUMERICIDENTIFIER], ")"));
w("MAINVERSIONLOOSE", "(".concat(b[m.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(b[m.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(b[m.NUMERICIDENTIFIERLOOSE], ")"));
w("PRERELEASEIDENTIFIER", "(?:".concat(b[m.NUMERICIDENTIFIER], "|").concat(b[m.NONNUMERICIDENTIFIER], ")"));
w("PRERELEASEIDENTIFIERLOOSE", "(?:".concat(b[m.NUMERICIDENTIFIERLOOSE], "|").concat(b[m.NONNUMERICIDENTIFIER], ")"));
w("PRERELEASE", "(?:-(".concat(b[m.PRERELEASEIDENTIFIER], "(?:\\.").concat(b[m.PRERELEASEIDENTIFIER], ")*))"));
w("PRERELEASELOOSE", "(?:-?(".concat(b[m.PRERELEASEIDENTIFIERLOOSE], "(?:\\.").concat(b[m.PRERELEASEIDENTIFIERLOOSE], ")*))"));
w("BUILDIDENTIFIER", "[0-9A-Za-z-]+");
w("BUILD", "(?:\\+(".concat(b[m.BUILDIDENTIFIER], "(?:\\.").concat(b[m.BUILDIDENTIFIER], ")*))"));
w("FULLPLAIN", "v?".concat(b[m.MAINVERSION]).concat(b[m.PRERELEASE], "?").concat(b[m.BUILD], "?"));
w("FULL", "^".concat(b[m.FULLPLAIN], "$"));
w("LOOSEPLAIN", "[v=\\s]*".concat(b[m.MAINVERSIONLOOSE]).concat(b[m.PRERELEASELOOSE], "?").concat(b[m.BUILD], "?"));
w("LOOSE", "^".concat(b[m.LOOSEPLAIN], "$"));
var oe = function() {
  function t(e, r) {
    if ((!r || typeof r != "object") && (r = {
      loose: !!r,
      includePrerelease: !1
    }), e instanceof t) {
      if (e.loose === !!r.loose && e.includePrerelease === !!r.includePrerelease)
        return e;
      e = e.version;
    } else if (typeof e != "string")
      throw new TypeError("Invalid Version: ".concat(e));
    if (e.length > fe)
      throw new TypeError("version is longer than ".concat(fe, " characters"));
    this.options = r, this.loose = !!r.loose, this.includePrerelease = !!r.includePrerelease;
    var n = e.trim().match(r.loose ? Y[m.LOOSE] : Y[m.FULL]);
    if (!n)
      throw new TypeError("Invalid Version: ".concat(e));
    if (this.raw = e, this.major = +n[1], this.minor = +n[2], this.patch = +n[3], this.major > Z || this.major < 0)
      throw new TypeError("Invalid major version");
    if (this.minor > Z || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > Z || this.patch < 0)
      throw new TypeError("Invalid patch version");
    n[4] ? this.prerelease = n[4].split(".").map(function(i) {
      if (/^[0-9]+$/.test(i)) {
        var o = +i;
        if (o >= 0 && o < Z)
          return o;
      }
      return i;
    }) : this.prerelease = [], this.build = n[5] ? n[5].split(".") : [], this.format();
  }
  return t.prototype.format = function() {
    return this.version = "".concat(this.major, ".").concat(this.minor, ".").concat(this.patch), this.prerelease.length && (this.version += "-".concat(this.prerelease.join("."))), this.version;
  }, t.prototype.toString = function() {
    return this.version;
  }, t.prototype.compare = function(e) {
    if (!(e instanceof t)) {
      if (typeof e == "string" && e === this.version)
        return 0;
      e = new t(e, this.options);
    }
    return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e);
  }, t.prototype.compareMain = function(e) {
    return e instanceof t || (e = new t(e, this.options)), B(this.major, e.major) || B(this.minor, e.minor) || B(this.patch, e.patch);
  }, t.prototype.comparePre = function(e) {
    if (e instanceof t || (e = new t(e, this.options)), this.prerelease.length && !e.prerelease.length)
      return -1;
    if (!this.prerelease.length && e.prerelease.length)
      return 1;
    if (!this.prerelease.length && !e.prerelease.length)
      return 0;
    var r = 0;
    do {
      var n = this.prerelease[r], i = e.prerelease[r];
      if (n === void 0 && i === void 0)
        return 0;
      if (i === void 0)
        return 1;
      if (n === void 0)
        return -1;
      if (n === i)
        continue;
      return B(n, i);
    } while (++r);
  }, t.prototype.compareBuild = function(e) {
    e instanceof t || (e = new t(e, this.options));
    var r = 0;
    do {
      var n = this.build[r], i = e.build[r];
      if (n === void 0 && i === void 0)
        return 0;
      if (i === void 0)
        return 1;
      if (n === void 0)
        return -1;
      if (n === i)
        continue;
      return B(n, i);
    } while (++r);
  }, t.prototype.inc = function(e, r) {
    switch (e) {
      case "premajor":
        this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", r);
        break;
      case "preminor":
        this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", r);
        break;
      case "prepatch":
        this.prerelease.length = 0, this.inc("patch", r), this.inc("pre", r);
        break;
      case "prerelease":
        this.prerelease.length === 0 && this.inc("patch", r), this.inc("pre", r);
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
          for (var n = this.prerelease.length; --n >= 0; )
            typeof this.prerelease[n] == "number" && (this.prerelease[n]++, n = -2);
          n === -1 && this.prerelease.push(0);
        }
        r && (this.prerelease[0] === r ? isNaN(this.prerelease[1]) && (this.prerelease = [r, 0]) : this.prerelease = [r, 0]);
        break;
      default:
        throw new Error("invalid increment argument: ".concat(e));
    }
    return this.format(), this.raw = this.version, this;
  }, t;
}(), Et = function(t, e) {
  if ((!e || typeof e != "object") && (e = {
    loose: !!e,
    includePrerelease: !1
  }), t instanceof oe)
    return t;
  if (typeof t != "string" || t.length > fe)
    return null;
  var r = e.loose ? Y[m.LOOSE] : Y[m.FULL];
  if (!r.test(t))
    return null;
  try {
    return new oe(t, e);
  } catch {
    return null;
  }
}, H = function(t, e, r) {
  return new oe(t, r).compare(new oe(e, r));
}, j = function(t) {
  var e = Et(t, !1);
  return e ? e.version : null;
}, bt = function(t, e) {
  return H(t, e, !0) === 0;
}, St = function(t, e) {
  return H(t, e, !1) === 0;
}, Ot = function(t, e) {
  return H(t, e, !1) < 0;
}, At = function(t, e) {
  return H(t, e, !1) <= 0;
}, Ct = function(t, e) {
  return H(t, e, !1) > 0;
}, wt = function(t, e) {
  return H(t, e, !1) >= 0;
}, It = function() {
  function t(e) {
    this.logger = e;
  }
  return t.prototype.evaluate = function(e, r, n, i, o) {
    if (this.logger.debug("RolloutEvaluator.Evaluate() called."), e.type < 0 && !_e(e.value))
      throw new TypeError(e.value === null ? "Setting value is null." : e.value === void 0 ? "Setting value is undefined." : "Setting value '".concat(e.value, "' is of an unsupported type (").concat(typeof e.value, ")."));
    var s = new Tt();
    s.user = i, s.keyName = r, s.returnValue = n;
    var a;
    try {
      if (i) {
        if (a = this.evaluateRules(e.targetingRules, i, s), a !== null || (a = this.evaluatePercentageRules(e.percentageOptions, r, i), e.percentageOptions && e.percentageOptions.length > 0 && s.opAppendLine("Evaluating % options => " + (a ? "user targeted" : "user not targeted")), a !== null))
          return s.returnValue = a.value, a;
      } else
        (e.targetingRules && e.targetingRules.length > 0 || e.percentageOptions && e.percentageOptions.length > 0) && this.logger.targetingIsNotPossible(r);
      return a = {
        value: e.value,
        variationId: e.variationId
      }, s.returnValue = a.value, a;
    } finally {
      this.logger.settingEvaluated(s);
    }
  }, t.prototype.evaluateRules = function(e, r, n) {
    if (this.logger.debug("RolloutEvaluator.EvaluateRules() called."), e && e.length > 0)
      for (var i = function(u) {
        var c = e[u], l = o.getUserAttribute(r, c.comparisonAttribute), g = c.comparator, v = c.comparisonValue, f = "Evaluating rule: '" + l + "' " + o.ruleToString(g) + " '" + v + "' => ";
        if (!l)
          return f += "NO MATCH (Attribute is not defined on the user object)", n.opAppendLine(f), "continue";
        var p = {
          value: c.value,
          variationId: c.variationId,
          matchedTargetingRule: c
        };
        switch (g) {
          case h.In:
            for (var y = v.split(","), E = 0; E < y.length; E++)
              if (y[E].trim() === l)
                return f += "MATCH", n.opAppendLine(f), { value: p };
            f += "no match";
            break;
          case h.NotIn:
            if (!v.split(",").some(function(D) {
              return D.trim() === l;
            }))
              return f += "MATCH", n.opAppendLine(f), { value: p };
            f += "no match";
            break;
          case h.Contains:
            if (l.indexOf(v) !== -1)
              return f += "MATCH", n.opAppendLine(f), { value: p };
            f += "no match";
            break;
          case h.NotContains:
            if (l.indexOf(v) === -1)
              return f += "MATCH", n.opAppendLine(f), { value: p };
            f += "no match";
            break;
          case h.SemVerIn:
          case h.SemVerNotIn:
          case h.SemVerLessThan:
          case h.SemVerLessThanEqual:
          case h.SemVerGreaterThan:
          case h.SemVerGreaterThanEqual:
            if (o.evaluateSemver(l, v, g))
              return f += "MATCH", n.opAppendLine(f), { value: p };
            f += "no match";
            break;
          case h.NumberEqual:
          case h.NumberNotEqual:
          case h.NumberLessThan:
          case h.NumberLessThanEqual:
          case h.NumberGreaterThan:
          case h.NumberGreaterThanEqual:
            if (o.evaluateNumber(l, v, g))
              return f += "MATCH", n.opAppendLine(f), { value: p };
            f += "no match";
            break;
          case h.SensitiveOneOf: {
            for (var T = v.split(","), F = te(l), E = 0; E < T.length; E++)
              if (T[E].trim() === F)
                return f += "MATCH", n.opAppendLine(f), { value: p };
            f += "no match";
            break;
          }
          case h.SensitiveNotOneOf: {
            var R = te(l);
            if (!v.split(",").some(function(D) {
              return D.trim() === R;
            }))
              return f += "MATCH", n.opAppendLine(f), { value: p };
            f += "no match";
            break;
          }
        }
        n.opAppendLine(f);
      }, o = this, s = 0; s < e.length; s++) {
        var a = i(s);
        if (typeof a == "object")
          return a.value;
      }
    return null;
  }, t.prototype.evaluatePercentageRules = function(e, r, n) {
    if (this.logger.debug("RolloutEvaluator.EvaluateVariations() called."), e && e.length > 0)
      for (var i = r + (n.identifier === null || n.identifier === void 0 ? "" : n.identifier), o = te(i).substring(0, 7), s = parseInt(o, 16) % 100, a = 0, u = 0; u < e.length; u++) {
        var c = e[u];
        if (a += +c.percentage, s < a)
          return {
            value: c.value,
            variationId: c.variationId,
            matchedPercentageOption: c
          };
      }
    return null;
  }, t.prototype.evaluateNumber = function(e, r, n) {
    this.logger.debug("RolloutEvaluator.EvaluateNumber() called.");
    var i, o;
    if (e && !Number.isNaN(Number.parseFloat(e.replace(",", "."))))
      i = Number.parseFloat(e.replace(",", "."));
    else
      return !1;
    if (r && !Number.isNaN(Number.parseFloat(r.replace(",", "."))))
      o = Number.parseFloat(r.replace(",", "."));
    else
      return !1;
    switch (n) {
      case h.NumberEqual:
        return i === o;
      case h.NumberNotEqual:
        return i !== o;
      case h.NumberLessThan:
        return i < o;
      case h.NumberLessThanEqual:
        return i <= o;
      case h.NumberGreaterThan:
        return i > o;
      case h.NumberGreaterThanEqual:
        return i >= o;
    }
    return !1;
  }, t.prototype.evaluateSemver = function(e, r, n) {
    if (this.logger.debug("RolloutEvaluator.EvaluateSemver() called."), j(e) == null || r === void 0)
      return !1;
    switch (r = r.trim(), n) {
      case h.SemVerIn:
        for (var i = r.split(","), o = !1, s = 0; s < i.length; s++)
          if (!(!i[s] || i[s].trim() === "")) {
            if (j(i[s].trim()) == null)
              return !1;
            o || (o = bt(e, i[s].trim()));
          }
        return o;
      case h.SemVerNotIn:
        return !r.split(",").some(function(a) {
          return !a || a.trim() === "" || (a = j(a.trim()), a == null) ? !1 : St(e, a);
        });
      case h.SemVerLessThan:
        return j(r) == null ? !1 : Ot(e, r);
      case h.SemVerLessThanEqual:
        return j(r) == null ? !1 : At(e, r);
      case h.SemVerGreaterThan:
        return j(r) == null ? !1 : Ct(e, r);
      case h.SemVerGreaterThanEqual:
        return j(r) == null ? !1 : wt(e, r);
    }
    return !1;
  }, t.prototype.getUserAttribute = function(e, r) {
    switch (r) {
      case "Identifier":
        return e.identifier;
      case "Email":
        return e.email;
      case "Country":
        return e.country;
      default:
        return (e.custom || {})[r];
    }
  }, t.prototype.ruleToString = function(e) {
    switch (e) {
      case h.In:
        return "IS ONE OF";
      case h.NotIn:
        return "IS NOT ONE OF";
      case h.Contains:
        return "CONTAINS";
      case h.NotContains:
        return "DOES NOT CONTAIN";
      case h.SemVerIn:
        return "IS ONE OF (SemVer)";
      case h.SemVerNotIn:
        return "IS NOT ONE OF (SemVer)";
      case h.SemVerLessThan:
        return "< (SemVer)";
      case h.SemVerLessThanEqual:
        return "<= (SemVer)";
      case h.SemVerGreaterThan:
        return "> (SemVer)";
      case h.SemVerGreaterThanEqual:
        return ">= (SemVer)";
      case h.NumberEqual:
        return "= (Number)";
      case h.NumberNotEqual:
        return "!= (Number)";
      case h.NumberLessThan:
        return "< (Number)";
      case h.NumberLessThanEqual:
        return "<= (Number)";
      case h.NumberGreaterThan:
        return "> (Number)";
      case h.NumberGreaterThanEqual:
        return ">= (Number)";
      case h.SensitiveOneOf:
        return "IS ONE OF (Sensitive)";
      case h.SensitiveNotOneOf:
        return "IS NOT ONE OF (Sensitive)";
      default:
        return e + "";
    }
  }, t;
}(), Tt = function() {
  function t() {
    this.operations = "";
  }
  return t.prototype.opAppendLine = function(e) {
    this.operations += " " + e + `
`;
  }, t.prototype.toString = function() {
    return "Evaluate '" + this.keyName + `'
 User : ` + JSON.stringify(this.user) + `
` + this.operations + " Returning value : " + this.returnValue;
  }, t;
}();
function He(t, e, r, n) {
  return {
    key: t,
    value: e.value,
    variationId: e.variationId,
    fetchTime: r,
    user: n,
    isDefaultValue: !1,
    matchedEvaluationRule: e.matchedTargetingRule,
    matchedEvaluationPercentageRule: e.matchedPercentageOption
  };
}
function X(t, e, r, n, i, o) {
  return {
    key: t,
    value: e,
    fetchTime: r,
    user: n,
    isDefaultValue: !0,
    errorMessage: i,
    errorException: o
  };
}
function je(t, e, r, n, i, o, s) {
  var a;
  if (!e)
    return a = s.configJsonIsNotPresentSingle(r, "defaultValue", n).toString(), X(r, n, W(o), i, a);
  var u = e[r];
  if (!u)
    return a = s.settingEvaluationFailedDueToMissingKey(r, "defaultValue", n, Nt(e)).toString(), X(r, n, W(o), i, a);
  var c = t.evaluate(u, r, n, i, o);
  if (n != null && typeof n != typeof c.value)
    throw new TypeError(`The type of a setting must match the type of the given default value.
The setting's type was `.concat(typeof n, ", the given default value's type was ").concat(typeof c.value, `.
Please pass a corresponding default value type.`));
  return He(r, c, W(o), i);
}
function Ke(t, e, r, n, i, o) {
  var s;
  if (!he(e, i, o))
    return [[], s];
  for (var a = [], u = 0, c = Object.entries(e); u < c.length; u++) {
    var l = c[u], g = l[0], v = l[1], f = void 0;
    try {
      var p = t.evaluate(v, g, null, r, n);
      f = He(g, p, W(n), r);
    } catch (y) {
      s ?? (s = []), s.push(y), f = X(g, null, W(n), r, $(y), y);
    }
    a.push(f);
  }
  return [a, s];
}
function he(t, e, r) {
  return t ? !0 : (e.configJsonIsNotPresent(r), !1);
}
function _e(t) {
  return t == null || typeof t == "boolean" || typeof t == "number" || typeof t == "string";
}
function W(t) {
  return t ? new Date(t.timestamp) : void 0;
}
function Nt(t) {
  return Object.keys(t).map(function(e) {
    return "'".concat(e, "'");
  }).join(", ");
}
var Lt = function() {
  function t() {
    this.instances = {};
  }
  return t.prototype.getOrCreate = function(e, r) {
    var n, i = this.instances[e.apiKey];
    if (i) {
      var o = i[0];
      if (n = o.deref(), n)
        return [n, !0];
    }
    var s = {};
    n = new ve(e, r, s);
    var a = yt() ? WeakRef : dt();
    return this.instances[e.apiKey] = [new a(n), s], [n, !1];
  }, t.prototype.remove = function(e, r) {
    var n = this.instances[e];
    if (n) {
      var i = n[0], o = n[1], s = !!i.deref();
      if (!s || o === r)
        return delete this.instances[e], s;
    }
    return !1;
  }, t.prototype.clear = function() {
    for (var e = [], r = 0, n = Object.entries(this.instances); r < n.length; r++) {
      var i = n[r], o = i[0], s = i[1][0], a = s.deref();
      a && e.push(a), delete this.instances[o];
    }
    return e;
  }, t;
}(), G = new Lt(), ve = function() {
  function t(e, r, n) {
    var i;
    if (this.cacheToken = n, this.addListener = this.on, this.off = this.removeListener, !e)
      throw new Error("Invalid 'options' value");
    if (this.options = e, this.options.logger.debug("Initializing ConfigCatClient. Options: " + JSON.stringify(this.options)), !r)
      throw new Error("Invalid 'configCatKernel' value");
    if (!r.configFetcher)
      throw new Error("Invalid 'configCatKernel.configFetcher' value");
    if (e.defaultUser && this.setDefaultUser(e.defaultUser), this.evaluator = new It(e.logger), ((i = e.flagOverrides) === null || i === void 0 ? void 0 : i.behaviour) !== M.LocalOnly) {
      var o = e instanceof Ue ? nt : e instanceof Ve ? ft : e instanceof Me ? lt : function() {
        throw new Error("Invalid 'options' value");
      }();
      this.configService = new o(r.configFetcher, e);
    } else
      this.options.hooks.emit("clientReady");
    this.suppressFinalize = re(this, { sdkKey: e.apiKey, cacheToken: n, configService: this.configService, logger: e.logger });
  }
  return Object.defineProperty(t, "instanceCache", {
    get: function() {
      return G;
    },
    enumerable: !1,
    configurable: !0
  }), t.get = function(e, r, n, i) {
    if (!e)
      throw new Error("Invalid 'sdkKey' value");
    var o = r === U.AutoPoll ? Ue : r === U.ManualPoll ? Ve : r === U.LazyLoad ? Me : function() {
      throw new Error("Invalid 'pollingMode' value");
    }(), s = new o(e, i.sdkType, i.sdkVersion, n, i.defaultCacheFactory, i.eventEmitterFactory), a = G.getOrCreate(s, i), u = a[0], c = a[1];
    return c && n && s.logger.clientIsAlreadyCreated(e), u;
  }, t.finalize = function(e) {
    var r;
    (r = e.logger) === null || r === void 0 || r.debug("finalize() called"), e.cacheToken && G.remove(e.sdkKey, e.cacheToken), t.close(e.configService, e.logger);
  }, t.close = function(e, r, n) {
    r == null || r.debug("close() called"), n == null || n.tryDisconnect(), e == null || e.dispose();
  }, t.prototype.dispose = function() {
    var e = this.options;
    e.logger.debug("dispose() called"), this.cacheToken && G.remove(e.apiKey, this.cacheToken), t.close(this.configService, e.logger, e.hooks), this.suppressFinalize();
  }, t.disposeAll = function() {
    for (var e = G.clear(), r, n = 0, i = e; n < i.length; n++) {
      var o = i[n];
      try {
        t.close(o.configService, o.options.logger, o.options.hooks), o.suppressFinalize();
      } catch (s) {
        r ?? (r = []), r.push(s);
      }
    }
    if (r)
      throw typeof AggregateError < "u" ? new AggregateError(r) : r.pop();
  }, t.prototype.getValueAsync = function(e, r, n) {
    return S(this, void 0, void 0, function() {
      var i, o, s, a, u, c;
      return O(this, function(l) {
        switch (l.label) {
          case 0:
            this.options.logger.debug("getValueAsync() called."), We(e), ze(r), s = null, n ?? (n = this.defaultUser), l.label = 1;
          case 1:
            return l.trys.push([1, 3, , 4]), a = void 0, [4, this.getSettingsAsync()];
          case 2:
            return c = l.sent(), a = c[0], s = c[1], o = je(this.evaluator, a, e, r, n, s, this.options.logger), i = o.value, [3, 4];
          case 3:
            return u = l.sent(), this.options.logger.settingEvaluationErrorSingle("getValueAsync", e, "defaultValue", r, u), o = X(e, r, W(s), n, $(u), u), i = r, [3, 4];
          case 4:
            return this.options.hooks.emit("flagEvaluated", o), [2, i];
        }
      });
    });
  }, t.prototype.getValueDetailsAsync = function(e, r, n) {
    return S(this, void 0, void 0, function() {
      var i, o, s, a, u;
      return O(this, function(c) {
        switch (c.label) {
          case 0:
            this.options.logger.debug("getValueDetailsAsync() called."), We(e), ze(r), o = null, n ?? (n = this.defaultUser), c.label = 1;
          case 1:
            return c.trys.push([1, 3, , 4]), s = void 0, [4, this.getSettingsAsync()];
          case 2:
            return u = c.sent(), s = u[0], o = u[1], i = je(this.evaluator, s, e, r, n, o, this.options.logger), [3, 4];
          case 3:
            return a = c.sent(), this.options.logger.settingEvaluationErrorSingle("getValueDetailsAsync", e, "defaultValue", r, a), i = X(e, r, W(o), n, $(a), a), [3, 4];
          case 4:
            return this.options.hooks.emit("flagEvaluated", i), [2, i];
        }
      });
    });
  }, t.prototype.getAllKeysAsync = function() {
    return S(this, void 0, void 0, function() {
      var e, r, n;
      return O(this, function(i) {
        switch (i.label) {
          case 0:
            this.options.logger.debug("getAllKeysAsync() called."), e = "empty array", i.label = 1;
          case 1:
            return i.trys.push([1, 3, , 4]), [4, this.getSettingsAsync()];
          case 2:
            return r = i.sent()[0], he(r, this.options.logger, e) ? [2, Object.keys(r)] : [2, []];
          case 3:
            return n = i.sent(), this.options.logger.settingEvaluationError("getAllKeysAsync", e, n), [2, []];
          case 4:
            return [2];
        }
      });
    });
  }, t.prototype.getAllValuesAsync = function(e) {
    return S(this, void 0, void 0, function() {
      var r, n, i, o, s, a, u, c, l, g, v, f;
      return O(this, function(p) {
        switch (p.label) {
          case 0:
            this.options.logger.debug("getAllValuesAsync() called."), r = "empty array", e ?? (e = this.defaultUser), p.label = 1;
          case 1:
            return p.trys.push([1, 3, , 4]), [4, this.getSettingsAsync()];
          case 2:
            if (i = p.sent(), o = i[0], s = i[1], a = void 0, f = Ke(this.evaluator, o, e, s, this.options.logger, r), n = f[0], a = f[1], a != null && a.length)
              throw typeof AggregateError < "u" ? new AggregateError(a) : a.pop();
            return [3, 4];
          case 3:
            return u = p.sent(), this.options.logger.settingEvaluationError("getAllValuesAsync", r, u), n ?? (n = []), [3, 4];
          case 4:
            for (c = n.map(function(y) {
              return new Q(y.key, y.value);
            }), l = 0, g = n; l < g.length; l++)
              v = g[l], this.options.hooks.emit("flagEvaluated", v);
            return [2, c];
        }
      });
    });
  }, t.prototype.getAllValueDetailsAsync = function(e) {
    return S(this, void 0, void 0, function() {
      var r, n, i, o, s, a, u, c, l, g, v;
      return O(this, function(f) {
        switch (f.label) {
          case 0:
            this.options.logger.debug("getAllValueDetailsAsync() called."), r = "empty array", e ?? (e = this.defaultUser), f.label = 1;
          case 1:
            return f.trys.push([1, 3, , 4]), [4, this.getSettingsAsync()];
          case 2:
            if (i = f.sent(), o = i[0], s = i[1], a = void 0, v = Ke(this.evaluator, o, e, s, this.options.logger, r), n = v[0], a = v[1], a != null && a.length)
              throw typeof AggregateError < "u" ? new AggregateError(a) : a.pop();
            return [3, 4];
          case 3:
            return u = f.sent(), this.options.logger.settingEvaluationError("getAllValueDetailsAsync", r, u), n ?? (n = []), [3, 4];
          case 4:
            for (c = 0, l = n; c < l.length; c++)
              g = l[c], this.options.hooks.emit("flagEvaluated", g);
            return [2, n];
        }
      });
    });
  }, t.prototype.getKeyAndValueAsync = function(e) {
    return S(this, void 0, void 0, function() {
      var r, n, i, o, s, a, u, c, v, l, g, v, f, p;
      return O(this, function(y) {
        switch (y.label) {
          case 0:
            this.options.logger.debug("getKeyAndValueAsync() called."), r = "null", y.label = 1;
          case 1:
            return y.trys.push([1, 3, , 4]), [4, this.getSettingsAsync()];
          case 2:
            if (n = y.sent()[0], !he(n, this.options.logger, r))
              return [2, null];
            for (i = 0, o = Object.entries(n); i < o.length; i++) {
              if (s = o[i], a = s[0], u = s[1], e === u.variationId)
                return [2, new Q(a, u.value)];
              if (c = n[a].targetingRules, c && c.length > 0) {
                for (v = 0; v < c.length; v++)
                  if (l = c[v], e === l.variationId)
                    return [2, new Q(a, l.value)];
              }
              if (g = n[a].percentageOptions, g && g.length > 0) {
                for (v = 0; v < g.length; v++)
                  if (f = g[v], e === f.variationId)
                    return [2, new Q(a, f.value)];
              }
            }
            return this.options.logger.settingForVariationIdIsNotPresent(e), [3, 4];
          case 3:
            return p = y.sent(), this.options.logger.settingEvaluationError("getKeyAndValueAsync", r, p), [3, 4];
          case 4:
            return [2, null];
        }
      });
    });
  }, t.prototype.forceRefreshAsync = function() {
    return S(this, void 0, void 0, function() {
      var e, r;
      return O(this, function(n) {
        switch (n.label) {
          case 0:
            if (this.options.logger.debug("forceRefreshAsync() called."), !this.configService)
              return [3, 5];
            n.label = 1;
          case 1:
            return n.trys.push([1, 3, , 4]), [4, this.configService.refreshConfigAsync()];
          case 2:
            return e = n.sent()[0], [2, e];
          case 3:
            return r = n.sent(), this.options.logger.forceRefreshError("forceRefreshAsync", r), [2, ne.failure($(r), r)];
          case 4:
            return [3, 6];
          case 5:
            return [2, ne.failure("Client is configured to use the LocalOnly override behavior, which prevents making HTTP requests.")];
          case 6:
            return [2];
        }
      });
    });
  }, t.prototype.setDefaultUser = function(e) {
    this.defaultUser = e;
  }, t.prototype.clearDefaultUser = function() {
    this.defaultUser = void 0;
  }, Object.defineProperty(t.prototype, "isOffline", {
    get: function() {
      var e, r;
      return (r = (e = this.configService) === null || e === void 0 ? void 0 : e.isOffline) !== null && r !== void 0 ? r : !0;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.setOnline = function() {
    this.configService ? this.configService.setOnline() : this.options.logger.configServiceMethodHasNoEffectDueToOverrideBehavior(M[M.LocalOnly], "setOnline");
  }, t.prototype.setOffline = function() {
    var e;
    (e = this.configService) === null || e === void 0 || e.setOffline();
  }, t.prototype.getSettingsAsync = function() {
    var e;
    return S(this, void 0, void 0, function() {
      var r, n, i, o, s, a, u, c, l = this;
      return O(this, function(g) {
        switch (g.label) {
          case 0:
            return this.options.logger.debug("getSettingsAsync() called."), r = function() {
              return S(l, void 0, void 0, function() {
                var v, f;
                return O(this, function(p) {
                  switch (p.label) {
                    case 0:
                      return [4, this.configService.getConfig()];
                    case 1:
                      return v = p.sent(), f = v.isEmpty ? null : v.config.settings, [2, [f, v]];
                  }
                });
              });
            }, n = (e = this.options) === null || e === void 0 ? void 0 : e.flagOverrides, n ? (i = void 0, o = void 0, [4, n.dataSource.getOverrides()]) : [3, 7];
          case 1:
            switch (s = g.sent(), a = n.behaviour, a) {
              case M.LocalOnly:
                return [3, 2];
              case M.LocalOverRemote:
                return [3, 3];
              case M.RemoteOverLocal:
                return [3, 5];
            }
            return [3, 7];
          case 2:
            return [2, [s, null]];
          case 3:
            return [4, r()];
          case 4:
            return u = g.sent(), i = u[0], o = u[1], [2, [q(q({}, i ?? {}), s), o]];
          case 5:
            return [4, r()];
          case 6:
            return c = g.sent(), i = c[0], o = c[1], [2, [q(q({}, s), i ?? {}), o]];
          case 7:
            return [4, r()];
          case 8:
            return [2, g.sent()];
        }
      });
    });
  }, t.prototype.on = function(e, r) {
    return this.options.hooks.on(e, r), this;
  }, t.prototype.once = function(e, r) {
    return this.options.hooks.once(e, r), this;
  }, t.prototype.removeListener = function(e, r) {
    return this.options.hooks.removeListener(e, r), this;
  }, t.prototype.removeAllListeners = function(e) {
    return this.options.hooks.removeAllListeners(e), this;
  }, t.prototype.listeners = function(e) {
    return this.options.hooks.listeners(e);
  }, t.prototype.listenerCount = function(e) {
    return this.options.hooks.listenerCount(e);
  }, t.prototype.eventNames = function() {
    return this.options.hooks.eventNames();
  }, t;
}(), Q = function() {
  function t(e, r) {
    this.settingKey = e, this.settingValue = r;
  }
  return t;
}();
function We(t) {
  if (!t)
    throw new Error("Invalid 'key' value");
}
function ze(t) {
  if (!_e(t))
    throw new TypeError("The default value must be boolean, number, string, null or undefined.");
}
var re = function(t, e) {
  if (typeof FinalizationRegistry < "u") {
    var r = new FinalizationRegistry(function(n) {
      return ve.finalize(n);
    });
    re = function(n, i) {
      var o = {};
      return r.register(n, i, o), function() {
        return r.unregister(o);
      };
    };
  } else
    re = function() {
      return function() {
      };
    };
  return re(t, e);
};
ht();
function Rt(t, e, r, n) {
  return ve.get(t, e, r, n);
}
var Dt = function() {
  function t() {
  }
  return t.prototype.set = function(e, r) {
    try {
      localStorage.setItem(e, btoa(r));
    } catch {
    }
  }, t.prototype.get = function(e) {
    try {
      var r = localStorage.getItem(e);
      if (r)
        return atob(r);
    } catch {
    }
  }, t;
}(), Ft = function() {
  function t() {
  }
  return t.prototype.handleStateChange = function(e, r, n) {
    var i;
    try {
      if (e.readyState === 4) {
        var o = e.status, s = e.statusText;
        if (o === 200) {
          var a = (i = e.getResponseHeader("ETag")) !== null && i !== void 0 ? i : void 0;
          r({ statusCode: o, reasonPhrase: s, eTag: a, body: e.responseText });
        } else
          o && r({ statusCode: o, reasonPhrase: s });
      }
    } catch (u) {
      n(u);
    }
  }, t.prototype.fetchLogic = function(e, r) {
    var n = this;
    return new Promise(function(i, o) {
      try {
        e.logger.debug("HttpConfigFetcher.fetchLogic() called.");
        var s = new XMLHttpRequest();
        s.onreadystatechange = function() {
          return n.handleStateChange(s, i, o);
        }, s.ontimeout = function() {
          return o(new ee("timeout", e.requestTimeoutMs));
        }, s.onabort = function() {
          return o(new ee("abort"));
        }, s.onerror = function() {
          return o(new ee("failure"));
        }, s.open("GET", e.getUrl(), !0), s.timeout = e.requestTimeoutMs, s.send(null);
      } catch (a) {
        o(a);
      }
    });
  }, t;
}();
const kt = "8.0.2";
function ce(t, e, r) {
  return Rt(t, e ?? U.AutoPoll, r, {
    configFetcher: new Ft(),
    sdkType: "ConfigCat-JS",
    sdkVersion: kt,
    defaultCacheFactory: function(n) {
      return new qe(new Dt(), n.logger);
    }
  });
}
const Vt = {
  install: (t, e) => {
    let r = ce(
      e.SDKKey,
      U.AutoPoll,
      e.clientOptions
    );
    e.pollingMode == "manual" && (r = ce(
      e.SDKKey,
      U.ManualPoll,
      e.clientOptions
    )), e.pollingMode == "lazy" && (r = ce(
      e.SDKKey,
      U.LazyLoad,
      e.clientOptions
    )), t.config.globalProperties.configCatClient = r;
  }
};
export {
  Vt as ConfigCatPlugin,
  Ut as FeatureWrapper
};
