import { defineComponent as Ut, ref as Mt, inject as xt, onBeforeMount as Wt, onUnmounted as Vt, renderSlot as pe } from "vue";
var Oe = function(t, e) {
  return Oe = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n)
      Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, Oe(t, e);
};
function q(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Oe(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var F = function() {
  return F = Object.assign || function(e) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, F.apply(this, arguments);
};
function E(t, e, r, n) {
  function i(s) {
    return s instanceof r ? s : new r(function(o) {
      o(s);
    });
  }
  return new (r || (r = Promise))(function(s, o) {
    function a(f) {
      try {
        l(n.next(f));
      } catch (h) {
        o(h);
      }
    }
    function u(f) {
      try {
        l(n.throw(f));
      } catch (h) {
        o(h);
      }
    }
    function l(f) {
      f.done ? s(f.value) : i(f.value).then(a, u);
    }
    l((n = n.apply(t, e || [])).next());
  });
}
function O(t, e) {
  var r = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, i, s, o;
  return o = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(l) {
    return function(f) {
      return u([l, f]);
    };
  }
  function u(l) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, l[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (s = l[0] & 2 ? i.return : l[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, l[1])).done)
          return s;
        switch (i = 0, s && (l = [l[0] & 2, s.value]), l[0]) {
          case 0:
          case 1:
            s = l;
            break;
          case 4:
            return r.label++, { value: l[1], done: !1 };
          case 5:
            r.label++, i = l[1], l = [0];
            continue;
          case 7:
            l = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (s = r.trys, !(s = s.length > 0 && s[s.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              r = 0;
              continue;
            }
            if (l[0] === 3 && (!s || l[1] > s[0] && l[1] < s[3])) {
              r.label = l[1];
              break;
            }
            if (l[0] === 6 && r.label < s[1]) {
              r.label = s[1], s = l;
              break;
            }
            if (s && r.label < s[2]) {
              r.label = s[2], r.ops.push(l);
              break;
            }
            s[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        l = e.call(t, r);
      } catch (f) {
        l = [6, f], i = 0;
      } finally {
        n = s = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
function vt() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++)
    t += arguments[e].length;
  for (var n = Array(t), i = 0, e = 0; e < r; e++)
    for (var s = arguments[e], o = 0, a = s.length; o < a; o++, i++)
      n[i] = s[o];
  return n;
}
function b(t, e) {
  return Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : t.raw = e, t;
}
var j;
(function(t) {
  t[t.Fetched = 0] = "Fetched", t[t.NotModified = 1] = "NotModified", t[t.Errored = 2] = "Errored";
})(j || (j = {}));
var V = (
  /** @class */
  function() {
    function t(e, r, n, i) {
      this.status = e, this.config = r, this.errorMessage = n, this.errorException = i;
    }
    return t.success = function(e) {
      return new t(j.Fetched, e);
    }, t.notModified = function(e) {
      return new t(j.NotModified, e);
    }, t.error = function(e, r, n) {
      return new t(j.Errored, e, r ?? "Unknown error.", n);
    }, t;
  }()
), se = (
  /** @class */
  function(t) {
    q(e, t);
    function e(r) {
      for (var n = [], i = 1; i < arguments.length; i++)
        n[i - 1] = arguments[i];
      var s = t.call(this, function(o, a) {
        switch (o) {
          case "abort":
            return "Request was aborted.";
          case "timeout":
            var u = a[0];
            return "Request timed out. Timeout value: " + u + "ms";
          case "failure":
            var l = a[0], f = "Request failed due to a network or protocol error.";
            return l ? f + " " + (l instanceof Error ? l.message : l + "") : f;
        }
      }(r, n)) || this;
      return s.cause = r, s instanceof e || (Object.setPrototypeOf || function(o, a) {
        return o.__proto__ = a;
      })(s, e.prototype), s.args = n, s;
    }
    return e;
  }(Error)
), Q;
(function(t) {
  t[t.No = 0] = "No", t[t.Should = 1] = "Should", t[t.Force = 2] = "Force";
})(Q || (Q = {}));
var x;
(function(t) {
  t[t.Boolean = 0] = "Boolean", t[t.String = 1] = "String", t[t.Int = 2] = "Int", t[t.Double = 3] = "Double";
})(x || (x = {}));
var c;
(function(t) {
  t[t.IsOneOf = 0] = "IsOneOf", t[t.IsNotOneOf = 1] = "IsNotOneOf", t[t.ContainsAnyOf = 2] = "ContainsAnyOf", t[t.NotContainsAnyOf = 3] = "NotContainsAnyOf", t[t.SemVerIsOneOf = 4] = "SemVerIsOneOf", t[t.SemVerIsNotOneOf = 5] = "SemVerIsNotOneOf", t[t.SemVerLess = 6] = "SemVerLess", t[t.SemVerLessOrEquals = 7] = "SemVerLessOrEquals", t[t.SemVerGreater = 8] = "SemVerGreater", t[t.SemVerGreaterOrEquals = 9] = "SemVerGreaterOrEquals", t[t.NumberEquals = 10] = "NumberEquals", t[t.NumberNotEquals = 11] = "NumberNotEquals", t[t.NumberLess = 12] = "NumberLess", t[t.NumberLessOrEquals = 13] = "NumberLessOrEquals", t[t.NumberGreater = 14] = "NumberGreater", t[t.NumberGreaterOrEquals = 15] = "NumberGreaterOrEquals", t[t.SensitiveIsOneOf = 16] = "SensitiveIsOneOf", t[t.SensitiveIsNotOneOf = 17] = "SensitiveIsNotOneOf", t[t.DateTimeBefore = 18] = "DateTimeBefore", t[t.DateTimeAfter = 19] = "DateTimeAfter", t[t.SensitiveTextEquals = 20] = "SensitiveTextEquals", t[t.SensitiveTextNotEquals = 21] = "SensitiveTextNotEquals", t[t.SensitiveTextStartsWithAnyOf = 22] = "SensitiveTextStartsWithAnyOf", t[t.SensitiveTextNotStartsWithAnyOf = 23] = "SensitiveTextNotStartsWithAnyOf", t[t.SensitiveTextEndsWithAnyOf = 24] = "SensitiveTextEndsWithAnyOf", t[t.SensitiveTextNotEndsWithAnyOf = 25] = "SensitiveTextNotEndsWithAnyOf", t[t.SensitiveArrayContainsAnyOf = 26] = "SensitiveArrayContainsAnyOf", t[t.SensitiveArrayNotContainsAnyOf = 27] = "SensitiveArrayNotContainsAnyOf", t[t.TextEquals = 28] = "TextEquals", t[t.TextNotEquals = 29] = "TextNotEquals", t[t.TextStartsWithAnyOf = 30] = "TextStartsWithAnyOf", t[t.TextNotStartsWithAnyOf = 31] = "TextNotStartsWithAnyOf", t[t.TextEndsWithAnyOf = 32] = "TextEndsWithAnyOf", t[t.TextNotEndsWithAnyOf = 33] = "TextNotEndsWithAnyOf", t[t.ArrayContainsAnyOf = 34] = "ArrayContainsAnyOf", t[t.ArrayNotContainsAnyOf = 35] = "ArrayNotContainsAnyOf";
})(c || (c = {}));
var K;
(function(t) {
  t[t.Equals = 0] = "Equals", t[t.NotEquals = 1] = "NotEquals";
})(K || (K = {}));
var W;
(function(t) {
  t[t.IsIn = 0] = "IsIn", t[t.IsNotIn = 1] = "IsNotIn";
})(W || (W = {}));
var D = (
  /** @class */
  function() {
    function t(e, r, n, i) {
      this.configJson = e, this.config = r, this.timestamp = n, this.httpETag = i;
    }
    return t.equals = function(e, r) {
      return e.httpETag && r.httpETag ? e.httpETag === r.httpETag : e.configJson === r.configJson;
    }, t.prototype.with = function(e) {
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
      return (/* @__PURE__ */ new Date()).getTime();
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
      var s = r[0], o = e.substring(0, s), a = parseInt(o);
      if (isNaN(a))
        throw new Error("Invalid fetch time: " + o);
      n = s + 1, s = r[1], o = e.substring(n, s);
      var u = o.length > 0 ? o : void 0;
      n = s + 1, o = e.substring(n);
      var l, f;
      return o.length > 0 && (l = oe.deserialize(o), f = o), new t(f, l, a, u);
    }, t.serializationFormatVersion = "v2", t.empty = new t(void 0, void 0, 0, void 0), t;
  }()
), oe = (
  /** @class */
  function() {
    function t(e) {
      var r = this, n, i;
      this.preferences = e.p != null ? new jt(e.p) : void 0, this.segments = (i = (n = e.s) === null || n === void 0 ? void 0 : n.map(function(s) {
        return new Bt(s);
      })) !== null && i !== void 0 ? i : [], this.settings = e.f != null ? Object.fromEntries(Object.entries(e.f).map(function(s) {
        var o = s[0], a = s[1];
        return [o, new dt(a, r)];
      })) : {};
    }
    return t.deserialize = function(e) {
      var r = JSON.parse(e);
      if (typeof r != "object" || !r)
        throw new Error("Invalid config JSON content:" + e);
      return new t(r);
    }, Object.defineProperty(t.prototype, "salt", {
      get: function() {
        var e;
        return (e = this.preferences) === null || e === void 0 ? void 0 : e.salt;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }()
), jt = (
  /** @class */
  function() {
    function t(e) {
      this.baseUrl = e.u, this.redirectMode = e.r, this.salt = e.s;
    }
    return t;
  }()
), Bt = (
  /** @class */
  function() {
    function t(e) {
      var r, n;
      this.name = e.n, this.conditions = (n = (r = e.r) === null || r === void 0 ? void 0 : r.map(function(i) {
        return new yt(i);
      })) !== null && n !== void 0 ? n : [];
    }
    return t;
  }()
), Ie = (
  /** @class */
  function() {
    function t(e, r) {
      r === void 0 && (r = !1), this.value = r ? e.v : mt(e.v), this.variationId = e.i;
    }
    return t;
  }()
), dt = (
  /** @class */
  function(t) {
    q(e, t);
    function e(r, n) {
      var i, s, o, a, u, l, f = t.call(this, r, r.t < 0) || this;
      f.type = r.t;
      var h = "Identifier";
      return f.percentageOptionsAttribute = (i = r.a) !== null && i !== void 0 ? i : h, f.targetingRules = (o = (s = r.r) === null || s === void 0 ? void 0 : s.map(function(g) {
        return new _t(g, n);
      })) !== null && o !== void 0 ? o : [], f.percentageOptions = (u = (a = r.p) === null || a === void 0 ? void 0 : a.map(function(g) {
        return new pt(g);
      })) !== null && u !== void 0 ? u : [], f.configJsonSalt = (l = n == null ? void 0 : n.salt) !== null && l !== void 0 ? l : "", f;
    }
    return e.fromValue = function(r) {
      return new e({
        t: -1,
        v: r
      });
    }, e;
  }(Ie)
), _t = (
  /** @class */
  function() {
    function t(e, r) {
      var n, i;
      this.conditions = (i = (n = e.c) === null || n === void 0 ? void 0 : n.map(function(s) {
        return s.u != null ? new yt(s.u) : s.p != null ? new Ht(s.p) : s.s != null ? new Kt(s.s, r) : void 0;
      })) !== null && i !== void 0 ? i : [], this.then = e.p != null ? e.p.map(function(s) {
        return new pt(s);
      }) : new Ie(e.s);
    }
    return t;
  }()
), pt = (
  /** @class */
  function(t) {
    q(e, t);
    function e(r) {
      var n = t.call(this, r) || this;
      return n.percentage = r.p, n;
    }
    return e;
  }(Ie)
), yt = (
  /** @class */
  function() {
    function t(e) {
      var r, n;
      this.type = "UserCondition", this.comparisonAttribute = e.a, this.comparator = e.c, this.comparisonValue = (n = (r = e.s) !== null && r !== void 0 ? r : e.d) !== null && n !== void 0 ? n : e.l;
    }
    return t;
  }()
), Ht = (
  /** @class */
  function() {
    function t(e) {
      this.type = "PrerequisiteFlagCondition", this.prerequisiteFlagKey = e.f, this.comparator = e.c, this.comparisonValue = mt(e.v);
    }
    return t;
  }()
), Kt = (
  /** @class */
  function() {
    function t(e, r) {
      this.type = "SegmentCondition", this.segment = r.segments[e.s], this.comparator = e.c;
    }
    return t;
  }()
);
function mt(t) {
  var e, r, n;
  return (n = (r = (e = t.b) !== null && e !== void 0 ? e : t.s) !== null && r !== void 0 ? r : t.i) !== null && n !== void 0 ? n : t.d;
}
var ue = (
  /** @class */
  function() {
    function t(e, r) {
      this.errorMessage = e, this.errorException = r;
    }
    return Object.defineProperty(t.prototype, "isSuccess", {
      /** Indicates whether the operation was successful or not. */
      get: function() {
        return this.errorMessage === null;
      },
      enumerable: !1,
      configurable: !0
    }), t.from = function(e) {
      return e.status !== j.Errored ? t.success() : t.failure(e.errorMessage, e.errorException);
    }, t.success = function() {
      return new t(null);
    }, t.failure = function(e, r) {
      return new t(e, r);
    }, t;
  }()
), C;
(function(t) {
  t[t.NoFlagData = 0] = "NoFlagData", t[t.HasLocalOverrideFlagDataOnly = 1] = "HasLocalOverrideFlagDataOnly", t[t.HasCachedFlagDataOnly = 2] = "HasCachedFlagDataOnly", t[t.HasUpToDateFlagData = 3] = "HasUpToDateFlagData";
})(C || (C = {}));
var L;
(function(t) {
  t[t.Online = 0] = "Online", t[t.Offline = 1] = "Offline", t[t.Disposed = 2] = "Disposed";
})(L || (L = {}));
var we = (
  /** @class */
  function() {
    function t(e, r) {
      this.configFetcher = e, this.options = r, this.pendingFetch = null, this.cacheKey = r.getCacheKey(), this.configFetcher = e, this.options = r, this.status = r.offline ? L.Offline : L.Online;
    }
    return t.prototype.dispose = function() {
      this.status = L.Disposed;
    }, Object.defineProperty(t.prototype, "disposed", {
      get: function() {
        return this.status === L.Disposed;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.refreshConfigAsync = function() {
      return E(this, void 0, void 0, function() {
        var e, r, n, i, s;
        return O(this, function(o) {
          switch (o.label) {
            case 0:
              return [4, this.options.cache.get(this.cacheKey)];
            case 1:
              return e = o.sent(), this.isOffline ? [3, 3] : [4, this.refreshConfigCoreAsync(e)];
            case 2:
              return r = o.sent(), n = r[0], i = r[1], [2, [ue.from(n), i]];
            case 3:
              return s = this.options.logger.configServiceCannotInitiateHttpCalls().toString(), [2, [ue.failure(s), e]];
          }
        });
      });
    }, t.prototype.refreshConfigCoreAsync = function(e) {
      return E(this, void 0, void 0, function() {
        var r, n, i;
        return O(this, function(s) {
          switch (s.label) {
            case 0:
              return [4, this.fetchAsync(e)];
            case 1:
              return r = s.sent(), n = !1, i = r.status === j.Fetched, i || r.config.timestamp > e.timestamp && (!r.config.isEmpty || e.isEmpty) ? [4, this.options.cache.set(this.cacheKey, r.config)] : [3, 3];
            case 2:
              s.sent(), n = i && !D.equals(r.config, e), e = r.config, s.label = 3;
            case 3:
              return this.onConfigFetched(r.config), n && this.onConfigChanged(r.config), [2, [r, e]];
          }
        });
      });
    }, t.prototype.onConfigFetched = function(e) {
    }, t.prototype.onConfigChanged = function(e) {
      var r;
      this.options.logger.debug("config changed"), this.options.hooks.emit("configChanged", (r = e.config) !== null && r !== void 0 ? r : new oe({}));
    }, t.prototype.fetchAsync = function(e) {
      var r = this, n;
      return (n = this.pendingFetch) !== null && n !== void 0 ? n : this.pendingFetch = function() {
        return E(r, void 0, void 0, function() {
          return O(this, function(i) {
            switch (i.label) {
              case 0:
                return i.trys.push([0, , 2, 3]), [4, this.fetchLogicAsync(e)];
              case 1:
                return [2, i.sent()];
              case 2:
                return this.pendingFetch = null, [
                  7
                  /*endfinally*/
                ];
              case 3:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }();
    }, t.prototype.fetchLogicAsync = function(e) {
      var r;
      return E(this, void 0, void 0, function() {
        var n, i, s, o, a, u;
        return O(this, function(l) {
          switch (l.label) {
            case 0:
              n = this.options, n.logger.debug("ConfigServiceBase.fetchLogicAsync() - called."), l.label = 1;
            case 1:
              return l.trys.push([1, 3, , 4]), [4, this.fetchRequestAsync((r = e.httpETag) !== null && r !== void 0 ? r : null)];
            case 2:
              switch (s = l.sent(), o = s[0], a = s[1], o.statusCode) {
                case 200:
                  return a instanceof oe ? (n.logger.debug("ConfigServiceBase.fetchLogicAsync(): fetch was successful. Returning new config."), [2, V.success(new D(o.body, a, D.generateTimestamp(), o.eTag))]) : (i = n.logger.fetchReceived200WithInvalidBody(a).toString(), n.logger.debug("ConfigServiceBase.fetchLogicAsync(): " + o.statusCode + " " + o.reasonPhrase + " was received but the HTTP response content was invalid. Returning null."), [2, V.error(e, i, a)]);
                case 304:
                  return e ? (n.logger.debug("ConfigServiceBase.fetchLogicAsync(): content was not modified. Returning last config with updated timestamp."), [2, V.notModified(e.with(D.generateTimestamp()))]) : (i = n.logger.fetchReceived304WhenLocalCacheIsEmpty(o.statusCode, o.reasonPhrase).toString(), n.logger.debug("ConfigServiceBase.fetchLogicAsync(): " + o.statusCode + " " + o.reasonPhrase + " was received when no config is cached locally. Returning null."), [2, V.error(e, i)]);
                case 403:
                case 404:
                  return i = n.logger.fetchFailedDueToInvalidSdkKey().toString(), n.logger.debug("ConfigServiceBase.fetchLogicAsync(): fetch was unsuccessful. Returning last config (if any) with updated timestamp."), [2, V.error(e.with(D.generateTimestamp()), i)];
                default:
                  return i = n.logger.fetchFailedDueToUnexpectedHttpResponse(o.statusCode, o.reasonPhrase).toString(), n.logger.debug("ConfigServiceBase.fetchLogicAsync(): fetch was unsuccessful. Returning null."), [2, V.error(e, i)];
              }
              return [3, 4];
            case 3:
              return u = l.sent(), i = (u instanceof se && u.cause === "timeout" ? n.logger.fetchFailedDueToRequestTimeout(u.args[0], u) : n.logger.fetchFailedDueToUnexpectedError(u)).toString(), n.logger.debug("ConfigServiceBase.fetchLogicAsync(): fetch was unsuccessful. Returning null."), [2, V.error(e, i, u)];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype.fetchRequestAsync = function(e, r) {
      return r === void 0 && (r = 2), E(this, void 0, void 0, function() {
        var n, i, s, o, a, u, l;
        return O(this, function(f) {
          switch (f.label) {
            case 0:
              n = this.options, n.logger.debug("ConfigServiceBase.fetchRequestAsync() - called."), i = 0, f.label = 1;
            case 1:
              return n.logger.debug("ConfigServiceBase.fetchRequestAsync(): calling fetchLogic()" + (i > 0 ? ", retry " + i + "/" + r : "")), [4, this.configFetcher.fetchLogic(n, e)];
            case 2:
              if (s = f.sent(), s.statusCode !== 200)
                return [2, [s]];
              if (!s.body)
                return n.logger.debug("ConfigServiceBase.fetchRequestAsync(): no response body."), [2, [s, new Error("No response body.")]];
              o = void 0;
              try {
                o = oe.deserialize(s.body);
              } catch (h) {
                return n.logger.debug("ConfigServiceBase.fetchRequestAsync(): invalid response body."), [2, [s, h]];
              }
              if (a = o.preferences, !a)
                return n.logger.debug("ConfigServiceBase.fetchRequestAsync(): preferences is empty."), [2, [s, o]];
              if (u = a.baseUrl, !u || u === n.baseUrl)
                return n.logger.debug("ConfigServiceBase.fetchRequestAsync(): baseUrl OK."), [2, [s, o]];
              if (l = a.redirectMode, n.baseUrlOverriden && l !== Q.Force)
                return n.logger.debug("ConfigServiceBase.fetchRequestAsync(): options.baseUrlOverriden && redirect !== 2."), [2, [s, o]];
              if (n.baseUrl = u, l === Q.No)
                return [2, [s, o]];
              if (l === Q.Should && n.logger.dataGovernanceIsOutOfSync(), i >= r)
                return n.logger.fetchFailedDueToRedirectLoop(), [2, [s, o]];
              f.label = 3;
            case 3:
              return i++, [3, 1];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, Object.defineProperty(t.prototype, "isOfflineExactly", {
      get: function() {
        return this.status === L.Offline;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "isOffline", {
      get: function() {
        return this.status !== L.Online;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.setOnlineCore = function() {
    }, t.prototype.setOnline = function() {
      this.status === L.Offline ? (this.setOnlineCore(), this.status = L.Online, this.options.logger.configServiceStatusChanged(L[this.status])) : this.disposed && this.options.logger.configServiceMethodHasNoEffectDueToDisposedClient("setOnline");
    }, t.prototype.setOfflineCore = function() {
    }, t.prototype.setOffline = function() {
      this.status === L.Online ? (this.setOfflineCore(), this.status = L.Offline, this.options.logger.configServiceStatusChanged(L[this.status])) : this.disposed && this.options.logger.configServiceMethodHasNoEffectDueToDisposedClient("setOffline");
    }, t.prototype.syncUpWithCache = function() {
      return this.options.cache.get(this.cacheKey);
    }, t.prototype.getReadyPromise = function(e, r) {
      return E(this, void 0, void 0, function() {
        var n;
        return O(this, function(i) {
          switch (i.label) {
            case 0:
              return [4, r(e)];
            case 1:
              return n = i.sent(), this.options.hooks.emit("clientReady", n), [2, n];
          }
        });
      });
    }, t;
  }()
);
function zt(t, e) {
  var r, n = new Promise(function(i) {
    return r = setTimeout(i, t);
  });
  return e && (e.clearTimer = function() {
    return clearTimeout(r);
  }), n;
}
function B(t, e) {
  return e === void 0 && (e = !1), t instanceof Error ? e && t.stack ? t.stack : t.toString() : t + "";
}
function Ue(t) {
  throw t;
}
function ve(t) {
  return Array.isArray(t);
}
function Gt(t) {
  var e;
  return typeof ((e = t) === null || e === void 0 ? void 0 : e.then) == "function";
}
function Ce(t, e, r, n) {
  e === void 0 && (e = 0), n === void 0 && (n = ", ");
  var i = t.length;
  if (!i)
    return "";
  var s = "";
  return e > 0 && i > e && (t = t.slice(0, e), r && (s = r == null ? void 0 : r(i - e))), "'" + t.join("'" + n + "'") + "'" + s;
}
function X(t) {
  function e(a, u) {
    var l = a.charCodeAt(u);
    if (55296 <= l && l < 56320) {
      var f = a.charCodeAt(u + 1);
      if (56320 <= f && f <= 57343)
        return (l << 10) + f - 56613888;
    }
    return l;
  }
  var r = "", n = 0, i = String.fromCharCode, s;
  for (s = 0; s < t.length; s++) {
    var o = e(t, s);
    o <= 127 || (r += t.slice(n, s), o <= 2047 ? (r += i(192 | o >> 6), r += i(128 | o & 63)) : o <= 65535 ? (r += i(224 | o >> 12), r += i(128 | o >> 6 & 63), r += i(128 | o & 63)) : (r += i(240 | o >> 18), r += i(128 | o >> 12 & 63), r += i(128 | o >> 6 & 63), r += i(128 | o & 63), ++s), n = s + 1);
  }
  return r += t.slice(n, s);
}
function Et(t) {
  return typeof t == "number" ? t : typeof t != "string" || !t.length || /^\s*$|^\s*0[^\d.e]/.test(t) ? NaN : +t;
}
var Jt = (
  /** @class */
  function(t) {
    q(e, t);
    function e(r, n) {
      var i = t.call(this, r, n) || this;
      i.signalInitialization = function() {
      }, i.pollIntervalMs = n.pollIntervalSeconds * 1e3;
      var s = i.syncUpWithCache();
      if (n.maxInitWaitTimeSeconds !== 0) {
        i.initialized = !1;
        var o = new Promise(function(a) {
          return i.signalInitialization = a;
        });
        i.initializationPromise = i.waitForInitializationAsync(o).then(function(a) {
          return i.initialized = !0, a;
        });
      } else
        i.initialized = !0, i.initializationPromise = Promise.resolve(!1);
      return i.readyPromise = i.getReadyPromise(i.initializationPromise, function(a) {
        return E(i, void 0, void 0, function() {
          return O(this, function(u) {
            switch (u.label) {
              case 0:
                return [4, a];
              case 1:
                return u.sent(), [2, this.getCacheState(this.options.cache.getInMemory())];
            }
          });
        });
      }), n.offline || i.startRefreshWorker(s), i;
    }
    return e.prototype.waitForInitializationAsync = function(r) {
      return E(this, void 0, void 0, function() {
        var n, i;
        return O(this, function(s) {
          switch (s.label) {
            case 0:
              return this.options.maxInitWaitTimeSeconds < 0 ? [4, r] : [3, 2];
            case 1:
              return s.sent(), [2, !0];
            case 2:
              return n = {}, [4, Promise.race([
                r.then(function() {
                  return !0;
                }),
                zt(this.options.maxInitWaitTimeSeconds * 1e3, n).then(function() {
                  return !1;
                })
              ])];
            case 3:
              return i = s.sent(), n.clearTimer(), [2, i];
          }
        });
      });
    }, e.prototype.getConfig = function() {
      return E(this, void 0, void 0, function() {
        function r(i) {
          i.debug("AutoPollConfigService.getConfig() - returning value from cache.");
        }
        var n;
        return O(this, function(i) {
          switch (i.label) {
            case 0:
              return this.options.logger.debug("AutoPollConfigService.getConfig() called."), !this.isOffline && !this.initialized ? [4, this.options.cache.get(this.cacheKey)] : [3, 3];
            case 1:
              return n = i.sent(), n.isExpired(this.pollIntervalMs) ? (this.options.logger.debug("AutoPollConfigService.getConfig() - cache is empty or expired, waiting for initialization."), [4, this.initializationPromise]) : (r(this.options.logger), [2, n]);
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
      this.options.logger.debug("AutoPollConfigService.dispose() called."), t.prototype.dispose.call(this), this.workerTimerId && this.stopRefreshWorker();
    }, e.prototype.onConfigFetched = function(r) {
      t.prototype.onConfigFetched.call(this, r), this.signalInitialization();
    }, e.prototype.setOnlineCore = function() {
      this.startRefreshWorker();
    }, e.prototype.setOfflineCore = function() {
      this.stopRefreshWorker();
    }, e.prototype.startRefreshWorker = function(r) {
      return E(this, void 0, void 0, function() {
        var n, i, s = this;
        return O(this, function(o) {
          switch (o.label) {
            case 0:
              return this.options.logger.debug("AutoPollConfigService.startRefreshWorker() called."), n = this.pollIntervalMs, [4, r ?? this.options.cache.get(this.cacheKey)];
            case 1:
              return i = o.sent(), i.isExpired(this.pollIntervalMs) ? this.isOfflineExactly ? [3, 3] : [4, this.refreshConfigCoreAsync(i)] : [3, 4];
            case 2:
              o.sent(), o.label = 3;
            case 3:
              return [3, 5];
            case 4:
              this.signalInitialization(), o.label = 5;
            case 5:
              return this.options.logger.debug("AutoPollConfigService.startRefreshWorker() - calling refreshWorkerLogic()'s setTimeout."), this.workerTimerId = setTimeout(function(a) {
                return s.refreshWorkerLogic(a);
              }, n, n), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.stopRefreshWorker = function() {
      this.options.logger.debug("AutoPollConfigService.stopRefreshWorker() - clearing setTimeout."), clearTimeout(this.workerTimerId);
    }, e.prototype.refreshWorkerLogic = function(r) {
      return E(this, void 0, void 0, function() {
        var n, i = this;
        return O(this, function(s) {
          switch (s.label) {
            case 0:
              return this.disposed ? (this.options.logger.debug("AutoPollConfigService.refreshWorkerLogic() - called on a disposed client."), [
                2
                /*return*/
              ]) : (this.options.logger.debug("AutoPollConfigService.refreshWorkerLogic() - called."), this.isOffline ? [3, 3] : [4, this.options.cache.get(this.cacheKey)]);
            case 1:
              return n = s.sent(), [4, this.refreshConfigCoreAsync(n)];
            case 2:
              s.sent(), s.label = 3;
            case 3:
              return this.options.logger.debug("AutoPollConfigService.refreshWorkerLogic() - calling refreshWorkerLogic()'s setTimeout."), this.workerTimerId = setTimeout(function(o) {
                return i.refreshWorkerLogic(o);
              }, r, r), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.getCacheState = function(r) {
      return r.isEmpty ? C.NoFlagData : r.isExpired(this.pollIntervalMs) ? C.HasCachedFlagDataOnly : C.HasUpToDateFlagData;
    }, e;
  }(we)
), Yt = (
  /** @class */
  function() {
    function t() {
      this.cachedConfig = D.empty;
    }
    return t.prototype.set = function(e, r) {
      this.cachedConfig = r;
    }, t.prototype.get = function(e) {
      return this.cachedConfig;
    }, t.prototype.getInMemory = function() {
      return this.cachedConfig;
    }, t;
  }()
), Ot = (
  /** @class */
  function() {
    function t(e, r) {
      this.cache = e, this.logger = r, this.cachedConfig = D.empty;
    }
    return t.prototype.set = function(e, r) {
      return E(this, void 0, void 0, function() {
        var n;
        return O(this, function(i) {
          switch (i.label) {
            case 0:
              if (i.trys.push([0, 2, , 3]), !r.isEmpty)
                this.cachedSerializedConfig = D.serialize(r), this.cachedConfig = r;
              else
                return this.cachedSerializedConfig = void 0, this.cachedConfig = r, [
                  2
                  /*return*/
                ];
              return [4, this.cache.set(e, this.cachedSerializedConfig)];
            case 1:
              return i.sent(), [3, 3];
            case 2:
              return n = i.sent(), this.logger.configServiceCacheWriteError(n), [3, 3];
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype.updateCachedConfig = function(e) {
      e == null || e === this.cachedSerializedConfig || (this.cachedConfig = D.deserialize(e), this.cachedSerializedConfig = e);
    }, t.prototype.get = function(e) {
      var r = this;
      try {
        var n = this.cache.get(e);
        if (Gt(n))
          return function(i) {
            return E(r, void 0, void 0, function() {
              var s, o;
              return O(this, function(a) {
                switch (a.label) {
                  case 0:
                    return a.trys.push([0, 2, , 3]), s = this.updateCachedConfig, [4, i];
                  case 1:
                    return s.apply(this, [a.sent()]), [3, 3];
                  case 2:
                    return o = a.sent(), this.logger.configServiceCacheReadError(o), [3, 3];
                  case 3:
                    return [2, this.cachedConfig];
                }
              });
            });
          }(n);
        this.updateCachedConfig(n);
      } catch (i) {
        this.logger.configServiceCacheReadError(i);
      }
      return Promise.resolve(this.cachedConfig);
    }, t.prototype.getInMemory = function() {
      return this.cachedConfig;
    }, t;
  }()
), p;
(function(t) {
  t[t.Debug = 4] = "Debug", t[t.Info = 3] = "Info", t[t.Warn = 2] = "Warn", t[t.Error = 1] = "Error", t[t.Off = -1] = "Off";
})(p || (p = {}));
var T = (
  /** @class */
  function() {
    function t(e, r, n) {
      this.strings = e, this.argNames = r, this.argValues = n;
    }
    return t.from = function() {
      for (var e = [], r = 0; r < arguments.length; r++)
        e[r] = arguments[r];
      return function(n) {
        for (var i = [], s = 1; s < arguments.length; s++)
          i[s - 1] = arguments[s];
        return new t(n, e, i);
      };
    }, Object.defineProperty(t.prototype, "defaultFormattedMessage", {
      get: function() {
        var e = this.cachedDefaultFormattedMessage;
        if (e === void 0) {
          e = "";
          for (var r = this, n = r.strings, i = r.argValues, s = 0; s < n.length - 1; s++)
            e += n[s], e += i[s];
          e += n[s], this.cachedDefaultFormattedMessage = e;
        }
        return e;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.toString = function() {
      return this.defaultFormattedMessage;
    }, t;
  }()
), $t = (
  /** @class */
  function() {
    function t(e, r) {
      this.logger = e, this.hooks = r;
    }
    return Object.defineProperty(t.prototype, "level", {
      get: function() {
        var e;
        return (e = this.logger.level) !== null && e !== void 0 ? e : p.Warn;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.isEnabled = function(e) {
      return this.level >= e;
    }, t.prototype.log = function(e, r, n, i) {
      var s;
      return this.isEnabled(e) && this.logger.log(e, r, n, i), e === p.Error && ((s = this.hooks) === null || s === void 0 || s.emit("clientError", n.toString(), i)), n;
    }, t.prototype.debug = function(e) {
      this.log(p.Debug, 0, e);
    }, t.prototype.configJsonIsNotPresent = function(e) {
      return this.log(p.Error, 1e3, T.from("DEFAULT_RETURN_VALUE")(Me || (Me = b(["Config JSON is not present. Returning ", "."], ["Config JSON is not present. Returning ", "."])), e));
    }, t.prototype.configJsonIsNotPresentSingle = function(e, r, n) {
      return this.log(p.Error, 1e3, T.from("KEY", "DEFAULT_PARAM_NAME", "DEFAULT_PARAM_VALUE")(xe || (xe = b(["Config JSON is not present when evaluating setting '", "'. Returning the `", "` parameter that you specified in your application: '", "'."], ["Config JSON is not present when evaluating setting '", "'. Returning the \\`", "\\` parameter that you specified in your application: '", "'."])), e, r, n));
    }, t.prototype.settingEvaluationFailedDueToMissingKey = function(e, r, n, i) {
      return this.log(p.Error, 1001, T.from("KEY", "DEFAULT_PARAM_NAME", "DEFAULT_PARAM_VALUE", "AVAILABLE_KEYS")(We || (We = b(["Failed to evaluate setting '", "' (the key was not found in config JSON). Returning the `", "` parameter that you specified in your application: '", "'. Available keys: [", "]."], ["Failed to evaluate setting '", "' (the key was not found in config JSON). Returning the \\`", "\\` parameter that you specified in your application: '", "'. Available keys: [", "]."])), e, r, n, i));
    }, t.prototype.settingEvaluationError = function(e, r, n) {
      return this.log(p.Error, 1002, T.from("METHOD_NAME", "DEFAULT_RETURN_VALUE")(Ve || (Ve = b(["Error occurred in the `", "` method. Returning ", "."], ["Error occurred in the \\`", "\\` method. Returning ", "."])), e, r), n);
    }, t.prototype.settingEvaluationErrorSingle = function(e, r, n, i, s) {
      return this.log(p.Error, 1002, T.from("METHOD_NAME", "KEY", "DEFAULT_PARAM_NAME", "DEFAULT_PARAM_VALUE")(je || (je = b(["Error occurred in the `", "` method while evaluating setting '", "'. Returning the `", "` parameter that you specified in your application: '", "'."], ["Error occurred in the \\`", "\\` method while evaluating setting '", "'. Returning the \\`", "\\` parameter that you specified in your application: '", "'."])), e, r, n, i), s);
    }, t.prototype.forceRefreshError = function(e, r) {
      return this.log(p.Error, 1003, T.from("METHOD_NAME")(Be || (Be = b(["Error occurred in the `", "` method."], ["Error occurred in the \\`", "\\` method."])), e), r);
    }, t.prototype.fetchFailedDueToInvalidSdkKey = function() {
      return this.log(p.Error, 1100, "Your SDK Key seems to be wrong. You can find the valid SDK Key at https://app.configcat.com/sdkkey");
    }, t.prototype.fetchFailedDueToUnexpectedHttpResponse = function(e, r) {
      return this.log(p.Error, 1101, T.from("STATUS_CODE", "REASON_PHRASE")(_e || (_e = b(["Unexpected HTTP response was received while trying to fetch config JSON: ", " ", ""], ["Unexpected HTTP response was received while trying to fetch config JSON: ", " ", ""])), e, r));
    }, t.prototype.fetchFailedDueToRequestTimeout = function(e, r) {
      return this.log(p.Error, 1102, T.from("TIMEOUT")(He || (He = b(["Request timed out while trying to fetch config JSON. Timeout value: ", "ms"], ["Request timed out while trying to fetch config JSON. Timeout value: ", "ms"])), e), r);
    }, t.prototype.fetchFailedDueToUnexpectedError = function(e) {
      return this.log(p.Error, 1103, "Unexpected error occurred while trying to fetch config JSON. It is most likely due to a local network issue. Please make sure your application can reach the ConfigCat CDN servers (or your proxy server) over HTTP.", e);
    }, t.prototype.fetchFailedDueToRedirectLoop = function() {
      return this.log(p.Error, 1104, "Redirection loop encountered while trying to fetch config JSON. Please contact us at https://configcat.com/support/");
    }, t.prototype.fetchReceived200WithInvalidBody = function(e) {
      return this.log(p.Error, 1105, "Fetching config JSON was successful but the HTTP response content was invalid.", e);
    }, t.prototype.fetchReceived304WhenLocalCacheIsEmpty = function(e, r) {
      return this.log(p.Error, 1106, T.from("STATUS_CODE", "REASON_PHRASE")(Ke || (Ke = b(["Unexpected HTTP response was received when no config JSON is cached locally: ", " ", ""], ["Unexpected HTTP response was received when no config JSON is cached locally: ", " ", ""])), e, r));
    }, t.prototype.settingForVariationIdIsNotPresent = function(e) {
      return this.log(p.Error, 2011, T.from("VARIATION_ID")(ze || (ze = b(["Could not find the setting for the specified variation ID: '", "'."], ["Could not find the setting for the specified variation ID: '", "'."])), e));
    }, t.prototype.configServiceCacheReadError = function(e) {
      return this.log(p.Error, 2200, "Error occurred while reading the cache.", e);
    }, t.prototype.configServiceCacheWriteError = function(e) {
      return this.log(p.Error, 2201, "Error occurred while writing the cache.", e);
    }, t.prototype.clientIsAlreadyCreated = function(e) {
      return this.log(p.Warn, 3e3, T.from("SDK_KEY")(Ge || (Ge = b(["There is an existing client instance for the specified SDK Key. No new client instance will be created and the specified options are ignored. Returning the existing client instance. SDK Key: '", "'."], ["There is an existing client instance for the specified SDK Key. No new client instance will be created and the specified options are ignored. Returning the existing client instance. SDK Key: '", "'."])), e));
    }, t.prototype.userObjectIsMissing = function(e) {
      return this.log(p.Warn, 3001, T.from("KEY")(Je || (Je = b(["Cannot evaluate targeting rules and % options for setting '", "' (User Object is missing). You should pass a User Object to the evaluation methods like `getValueAsync()` in order to make targeting work properly. Read more: https://configcat.com/docs/advanced/user-object/"], ["Cannot evaluate targeting rules and % options for setting '", "' (User Object is missing). You should pass a User Object to the evaluation methods like \\`getValueAsync()\\` in order to make targeting work properly. Read more: https://configcat.com/docs/advanced/user-object/"])), e));
    }, t.prototype.dataGovernanceIsOutOfSync = function() {
      return this.log(p.Warn, 3002, "The `dataGovernance` parameter specified at the client initialization is not in sync with the preferences on the ConfigCat Dashboard. Read more: https://configcat.com/docs/advanced/data-governance/");
    }, t.prototype.userObjectAttributeIsMissingPercentage = function(e, r) {
      return this.log(p.Warn, 3003, T.from("KEY", "ATTRIBUTE_NAME", "ATTRIBUTE_NAME")(Ye || (Ye = b(["Cannot evaluate % options for setting '", "' (the User.", " attribute is missing). You should set the User.", " attribute in order to make targeting work properly. Read more: https://configcat.com/docs/advanced/user-object/"], ["Cannot evaluate % options for setting '", "' (the User.", " attribute is missing). You should set the User.", " attribute in order to make targeting work properly. Read more: https://configcat.com/docs/advanced/user-object/"])), e, r, r));
    }, t.prototype.userObjectAttributeIsMissingCondition = function(e, r, n) {
      return this.log(p.Warn, 3003, T.from("CONDITION", "KEY", "ATTRIBUTE_NAME", "ATTRIBUTE_NAME")($e || ($e = b(["Cannot evaluate condition (", ") for setting '", "' (the User.", " attribute is missing). You should set the User.", " attribute in order to make targeting work properly. Read more: https://configcat.com/docs/advanced/user-object/"], ["Cannot evaluate condition (", ") for setting '", "' (the User.", " attribute is missing). You should set the User.", " attribute in order to make targeting work properly. Read more: https://configcat.com/docs/advanced/user-object/"])), e, r, n, n));
    }, t.prototype.userObjectAttributeIsInvalid = function(e, r, n, i) {
      return this.log(p.Warn, 3004, T.from("CONDITION", "KEY", "REASON", "ATTRIBUTE_NAME")(Qe || (Qe = b(["Cannot evaluate condition (", ") for setting '", "' (", "). Please check the User.", " attribute and make sure that its value corresponds to the comparison operator."], ["Cannot evaluate condition (", ") for setting '", "' (", "). Please check the User.", " attribute and make sure that its value corresponds to the comparison operator."])), e, r, n, i));
    }, t.prototype.userObjectAttributeIsAutoConverted = function(e, r, n, i) {
      return this.log(p.Warn, 3005, T.from("CONDITION", "KEY", "ATTRIBUTE_NAME", "ATTRIBUTE_VALUE")(Xe || (Xe = b(["Evaluation of condition (", ") for setting '", "' may not produce the expected result (the User.", " attribute is not a string value, thus it was automatically converted to the string value '", "'). Please make sure that using a non-string value was intended."], ["Evaluation of condition (", ") for setting '", "' may not produce the expected result (the User.", " attribute is not a string value, thus it was automatically converted to the string value '", "'). Please make sure that using a non-string value was intended."])), e, r, n, i));
    }, t.prototype.configServiceCannotInitiateHttpCalls = function() {
      return this.log(p.Warn, 3200, "Client is in offline mode, it cannot initiate HTTP calls.");
    }, t.prototype.configServiceMethodHasNoEffectDueToDisposedClient = function(e) {
      return this.log(p.Warn, 3201, T.from("METHOD_NAME")(Ze || (Ze = b(["The client object is already disposed, thus `", "()` has no effect."], ["The client object is already disposed, thus \\`", "()\\` has no effect."])), e));
    }, t.prototype.configServiceMethodHasNoEffectDueToOverrideBehavior = function(e, r) {
      return this.log(p.Warn, 3202, T.from("OVERRIDE_BEHAVIOR", "METHOD_NAME")(et || (et = b(["Client is configured to use the `", "` override behavior, thus `", "()` has no effect."], ["Client is configured to use the \\`", "\\` override behavior, thus \\`", "()\\` has no effect."])), e, r));
    }, t.prototype.settingEvaluated = function(e) {
      return this.log(p.Info, 5e3, T.from("EVALUATE_LOG")(tt || (tt = b(["", ""], ["", ""])), e));
    }, t.prototype.configServiceStatusChanged = function(e) {
      return this.log(p.Info, 5200, T.from("MODE")(rt || (rt = b(["Switched to ", " mode."], ["Switched to ", " mode."])), e.toUpperCase()));
    }, t;
  }()
), St = (
  /** @class */
  function() {
    function t(e) {
      e === void 0 && (e = p.Warn), this.level = e, this.SOURCE = "ConfigCat";
    }
    return t.prototype.log = function(e, r, n, i) {
      var s = e === p.Debug ? [console.info, "DEBUG"] : e === p.Info ? [console.info, "INFO"] : e === p.Warn ? [console.warn, "WARN"] : e === p.Error ? [console.error, "ERROR"] : [console.log, p[e].toUpperCase()], o = s[0], a = s[1], u = i !== void 0 ? `
` + B(i, !0) : "";
      o(this.SOURCE + " - " + a + " - [" + r + "] " + n + u);
    }, t;
  }()
), Me, xe, We, Ve, je, Be, _e, He, Ke, ze, Ge, Je, Ye, $e, Qe, Xe, Ze, et, tt, rt;
function z(t) {
  return !!t.fn;
}
var Qt = (
  /** @class */
  function() {
    function t() {
      this.events = {}, this.eventCount = 0, this.addListener = this.on, this.off = this.removeListener;
    }
    return t.prototype.addListenerCore = function(e, r, n) {
      if (typeof r != "function")
        throw new TypeError("Listener must be a function");
      var i = this.events[e], s = { fn: r, once: n };
      return i ? z(i) ? this.events[e] = [i, s] : i.push(s) : (this.events[e] = s, this.eventCount++), this;
    }, t.prototype.removeListenerCore = function(e, r, n) {
      var i = this.events[e];
      if (!i)
        return this;
      if (z(i))
        n(i, r) && this.removeEvent(e);
      else
        for (var s = i.length - 1; s >= 0; s--)
          if (n(i[s], r)) {
            i.splice(s, 1), i.length ? i.length === 1 && (this.events[e] = i[0]) : this.removeEvent(e);
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
      if (z(r))
        return [r.fn];
      for (var n = r.length, i = new Array(n), s = 0; s < n; s++)
        i[s] = r[s].fn;
      return i;
    }, t.prototype.listenerCount = function(e) {
      var r = this.events[e];
      return r ? z(r) ? 1 : r.length : 0;
    }, t.prototype.eventNames = function() {
      var e = [];
      if (this.eventCount === 0)
        return e;
      var r = this.events;
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && e.push(n);
      return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(r)) : e;
    }, t.prototype.emit = function(e, r, n, i, s) {
      var o, a, u = this.events[e];
      if (!u)
        return !1;
      var l, f;
      z(u) ? (o = [u, 1], l = o[0], f = o[1]) : (u = u.slice(), a = [u[0], u.length], l = a[0], f = a[1]);
      for (var h = arguments.length - 1, g = 0; ; ) {
        switch (l.once && this.removeListenerCore(e, l, function(y, A) {
          return y === A;
        }), h) {
          case 0:
            l.fn.call(this);
            break;
          case 1:
            l.fn.call(this, r);
            break;
          case 2:
            l.fn.call(this, r, n);
            break;
          case 3:
            l.fn.call(this, r, n, i);
            break;
          case 4:
            l.fn.call(this, r, n, i, s);
            break;
          default:
            for (var v = new Array(h), d = 0; d < h; d++)
              v[d] = arguments[d + 1];
            l.fn.apply(this, v);
            break;
        }
        if (++g >= f)
          break;
        l = u[g];
      }
      return !0;
    }, t;
  }()
), At = (
  /** @class */
  function() {
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
  }()
);
function bt(t) {
  function e(U, M) {
    var te = U << M | U >>> 32 - M;
    return te;
  }
  var r, n, i, s = new Array(80), o = 1732584193, a = 4023233417, u = 2562383102, l = 271733878, f = 3285377520, h, g, v, d, y, A;
  t = X(t);
  var I = t.length, w = new Array();
  for (n = 0; n < I - 3; n += 4)
    i = t.charCodeAt(n) << 24 | t.charCodeAt(n + 1) << 16 | t.charCodeAt(n + 2) << 8 | t.charCodeAt(n + 3), w.push(i);
  switch (I % 4) {
    case 0:
      n = 2147483648;
      break;
    case 1:
      n = t.charCodeAt(I - 1) << 24 | 8388608;
      break;
    case 2:
      n = t.charCodeAt(I - 2) << 24 | t.charCodeAt(I - 1) << 16 | 32768;
      break;
    case 3:
      n = t.charCodeAt(I - 3) << 24 | t.charCodeAt(I - 2) << 16 | t.charCodeAt(I - 1) << 8 | 128;
      break;
  }
  for (w.push(n); w.length % 16 != 14; )
    w.push(0);
  for (w.push(I >>> 29), w.push(I << 3 & 4294967295), r = 0; r < w.length; r += 16) {
    for (n = 0; n < 16; n++)
      s[n] = w[r + n];
    for (n = 16; n <= 79; n++)
      s[n] = e(s[n - 3] ^ s[n - 8] ^ s[n - 14] ^ s[n - 16], 1);
    for (h = o, g = a, v = u, d = l, y = f, n = 0; n <= 19; n++)
      A = e(h, 5) + (g & v | ~g & d) + y + s[n] + 1518500249 & 4294967295, y = d, d = v, v = e(g, 30), g = h, h = A;
    for (n = 20; n <= 39; n++)
      A = e(h, 5) + (g ^ v ^ d) + y + s[n] + 1859775393 & 4294967295, y = d, d = v, v = e(g, 30), g = h, h = A;
    for (n = 40; n <= 59; n++)
      A = e(h, 5) + (g & v | g & d | v & d) + y + s[n] + 2400959708 & 4294967295, y = d, d = v, v = e(g, 30), g = h, h = A;
    for (n = 60; n <= 79; n++)
      A = e(h, 5) + (g ^ v ^ d) + y + s[n] + 3395469782 & 4294967295, y = d, d = v, v = e(g, 30), g = h, h = A;
    o = o + h & 4294967295, a = a + g & 4294967295, u = u + v & 4294967295, l = l + d & 4294967295, f = f + y & 4294967295;
  }
  return It([o, a, u, l, f]);
}
function Tt(t) {
  function e(Pe, qe) {
    return Pe >>> qe | Pe << 32 - qe;
  }
  var r = "length", n = Math.pow, i = n(2, 32), s, o, a = Tt, u = a.h, l = a.k;
  if (!l) {
    u = [], l = [];
    for (var f = {}, h = 2, g = 0; g < 64; h++)
      if (!f[h]) {
        for (s = 0; s < 313; s += h)
          f[s] = h;
        u[g] = n(h, 0.5) * i | 0, l[g++] = n(h, 1 / 3) * i | 0;
      }
    a.h = u = u.slice(0, 8), a.k = l;
  }
  var v = t[r] * 8;
  t += "";
  for (var d = []; t[r] % 64 - 56; )
    t += "\0";
  for (s = 0; s < t[r]; s++)
    o = t.charCodeAt(s), d[s >> 2] |= o << (3 - s) % 4 * 8;
  for (d[d[r]] = v / i | 0, d[d[r]] = v, o = 0; o < d[r]; ) {
    var y = d.slice(o, o += 16), A = u;
    for (u = u.slice(0, 8), s = 0; s < 64; s++) {
      var I = y[s - 15], w = y[s - 2], U = u[0], M = u[4], te = u[7] + (e(M, 6) ^ e(M, 11) ^ e(M, 25)) + (M & u[5] ^ ~M & u[6]) + l[s] + (y[s] = s < 16 ? y[s] : y[s - 16] + (e(I, 7) ^ e(I, 18) ^ I >>> 3) + y[s - 7] + (e(w, 17) ^ e(w, 19) ^ w >>> 10) | 0), qt = (e(U, 2) ^ e(U, 13) ^ e(U, 22)) + (U & u[1] ^ U & u[2] ^ u[1] & u[2]);
      u = [te + qt | 0].concat(u), u[4] = u[4] + te | 0;
    }
    for (s = 0; s < 8; s++)
      u[s] = u[s] + A[s] | 0;
  }
  return It(u, 8);
}
function It(t, e) {
  var r = "0123456789abcdef", n = "";
  e ?? (e = t.length);
  for (var i = 0; i < e; i++)
    for (var s = 3; s >= 0; s--) {
      var o = t[i] >> (s << 3) & 255;
      n += r[o >> 4], n += r[o & 15];
    }
  return n;
}
var nt = new At(), it = (
  /** @class */
  function() {
    function t(e) {
      this.addListener = this.on, this.off = this.removeListener, this.eventEmitter = e;
    }
    return t.prototype.tryDisconnect = function() {
      var e = this.eventEmitter;
      return this.eventEmitter = nt, e !== nt;
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
      return (r = this.eventEmitter).emit.apply(r, vt([e], n));
    }, t;
  }()
);
function Xt() {
  typeof Object.values > "u" && (Object.values = Zt), typeof Object.entries > "u" && (Object.entries = er), typeof Object.fromEntries > "u" && (Object.fromEntries = tr);
}
function Zt(t) {
  for (var e = [], r = 0, n = Object.keys(t); r < n.length; r++) {
    var i = n[r];
    e.push(t[i]);
  }
  return e;
}
function er(t) {
  for (var e = [], r = 0, n = Object.keys(t); r < n.length; r++) {
    var i = n[r];
    e.push([i, t[i]]);
  }
  return e;
}
function tr(t) {
  var e, r = {};
  if (Array.isArray(t))
    for (var n = 0, i = t; n < i.length; n++) {
      var s = i[n], o = s[0], a = s[1];
      r[o] = a;
    }
  else if (typeof Symbol < "u" && (t != null && t[Symbol.iterator]))
    for (var u = t[Symbol.iterator](), l = void 0, f = void 0; e = u.next(), l = e.value, f = e.done, !f; ) {
      var o = l[0], a = l[1];
      r[o] = a;
    }
  else
    throw new TypeError("Object.fromEntries() requires a single iterable argument");
  return r;
}
function wt() {
  var t = function(e) {
    this.target = e;
  };
  return t.prototype.deref = function() {
    return this.target;
  }, t.isFallback = !0, t;
}
var Ct = function() {
  return typeof WeakRef == "function";
}, H;
(function(t) {
  t[t.AutoPoll = 0] = "AutoPoll", t[t.LazyLoad = 1] = "LazyLoad", t[t.ManualPoll = 2] = "ManualPoll";
})(H || (H = {}));
var le;
(function(t) {
  t[t.Global = 0] = "Global", t[t.EuOnly = 1] = "EuOnly";
})(le || (le = {}));
var Ne = (
  /** @class */
  function() {
    function t(e, r, n, i, s) {
      var o, a, u;
      if (this.requestTimeoutMs = 3e4, this.baseUrlOverriden = !1, this.proxy = "", this.offline = !1, !e)
        throw new Error("Invalid 'sdkKey' value");
      switch (this.sdkKey = e, this.clientVersion = r, this.dataGovernance = (o = n == null ? void 0 : n.dataGovernance) !== null && o !== void 0 ? o : le.Global, this.dataGovernance) {
        case le.EuOnly:
          this.baseUrl = "https://cdn-eu.configcat.com";
          break;
        default:
          this.baseUrl = "https://cdn-global.configcat.com";
          break;
      }
      var l = (a = s == null ? void 0 : s()) !== null && a !== void 0 ? a : new Qt(), f = new it(l), h = new (Ct() ? WeakRef : wt())(f);
      this.hooks = {
        hooks: f,
        hooksWeakRef: h,
        emit: function(d) {
          for (var y, A, I = [], w = 1; w < arguments.length; w++)
            I[w - 1] = arguments[w];
          return (A = (y = this.hooksWeakRef.deref()) === null || y === void 0 ? void 0 : y.emit.apply(y, vt([d], I))) !== null && A !== void 0 ? A : !1;
        }
      };
      var g, v;
      if (n) {
        if (g = n.logger, v = n.cache, n.requestTimeoutMs) {
          if (n.requestTimeoutMs < 0)
            throw new Error("Invalid 'requestTimeoutMs' value");
          this.requestTimeoutMs = n.requestTimeoutMs;
        }
        n.baseUrl && (this.baseUrl = n.baseUrl, this.baseUrlOverriden = !0), n.proxy && (this.proxy = n.proxy), n.flagOverrides && (this.flagOverrides = n.flagOverrides), n.defaultUser && (this.defaultUser = n.defaultUser), n.offline && (this.offline = n.offline), (u = n.setupHooks) === null || u === void 0 || u.call(n, f);
      }
      this.logger = new $t(g ?? new St(), this.hooks), this.cache = v ? new Ot(v, this.logger) : i ? i(this) : new Yt();
    }
    return t.prototype.yieldHooks = function() {
      var e = this.hooks, r = e.hooks;
      return delete e.hooks, r ?? new it(new At());
    }, t.prototype.getUrl = function() {
      return this.baseUrl + "/configuration-files/" + this.sdkKey + "/" + t.configFileName + "?sdk=" + this.clientVersion;
    }, t.prototype.getCacheKey = function() {
      return bt(this.sdkKey + "_" + t.configFileName + "_" + D.serializationFormatVersion);
    }, t.configFileName = "config_v6.json", t;
  }()
), st = (
  /** @class */
  function(t) {
    q(e, t);
    function e(r, n, i, s, o, a) {
      var u = t.call(this, r, n + "/a-" + i, s, o, a) || this;
      u.pollIntervalSeconds = 60, u.maxInitWaitTimeSeconds = 5, s && (s.pollIntervalSeconds != null && (u.pollIntervalSeconds = s.pollIntervalSeconds), s.maxInitWaitTimeSeconds != null && (u.maxInitWaitTimeSeconds = s.maxInitWaitTimeSeconds));
      var l = 2147483;
      if (!(typeof u.pollIntervalSeconds == "number" && 1 <= u.pollIntervalSeconds && u.pollIntervalSeconds <= l))
        throw new Error("Invalid 'pollIntervalSeconds' value");
      if (!(typeof u.maxInitWaitTimeSeconds == "number" && u.maxInitWaitTimeSeconds <= l))
        throw new Error("Invalid 'maxInitWaitTimeSeconds' value");
      return u;
    }
    return e;
  }(Ne)
), ot = (
  /** @class */
  function(t) {
    q(e, t);
    function e(r, n, i, s, o, a) {
      return t.call(this, r, n + "/m-" + i, s, o, a) || this;
    }
    return e;
  }(Ne)
), at = (
  /** @class */
  function(t) {
    q(e, t);
    function e(r, n, i, s, o, a) {
      var u = t.call(this, r, n + "/l-" + i, s, o, a) || this;
      if (u.cacheTimeToLiveSeconds = 60, s && s.cacheTimeToLiveSeconds != null && (u.cacheTimeToLiveSeconds = s.cacheTimeToLiveSeconds), !(typeof u.cacheTimeToLiveSeconds == "number" && 1 <= u.cacheTimeToLiveSeconds && u.cacheTimeToLiveSeconds <= 2147483647))
        throw new Error("Invalid 'cacheTimeToLiveSeconds' value");
      return u;
    }
    return e;
  }(Ne)
), R;
(function(t) {
  t[t.LocalOnly = 0] = "LocalOnly", t[t.LocalOverRemote = 1] = "LocalOverRemote", t[t.RemoteOverLocal = 2] = "RemoteOverLocal";
})(R || (R = {}));
var rr = (
  /** @class */
  function() {
    function t(e, r) {
      this.initialSettings = this.constructor.getCurrentSettings(e), r && (this.map = e);
    }
    return t.getCurrentSettings = function(e) {
      return Object.fromEntries(Object.entries(e).map(function(r) {
        var n = r[0], i = r[1];
        return [n, dt.fromValue(i)];
      }));
    }, t.prototype.getOverrides = function() {
      return Promise.resolve(this.getOverridesSync());
    }, t.prototype.getOverridesSync = function() {
      return this.map ? this.constructor.getCurrentSettings(this.map) : this.initialSettings;
    }, t;
  }()
), nr = (
  /** @class */
  function() {
    function t(e, r) {
      this.dataSource = e, this.behaviour = r;
    }
    return t;
  }()
), ir = (
  /** @class */
  function(t) {
    q(e, t);
    function e(r, n) {
      var i = t.call(this, r, n) || this;
      i.cacheTimeToLiveMs = n.cacheTimeToLiveSeconds * 1e3;
      var s = i.syncUpWithCache();
      return i.readyPromise = i.getReadyPromise(s, function(o) {
        return E(i, void 0, void 0, function() {
          var a;
          return O(this, function(u) {
            switch (u.label) {
              case 0:
                return a = this.getCacheState, [4, o];
              case 1:
                return [2, a.apply(this, [u.sent()])];
            }
          });
        });
      }), i;
    }
    return e.prototype.getConfig = function() {
      return E(this, void 0, void 0, function() {
        function r(s, o) {
          o === void 0 && (o = ""), s.debug("LazyLoadConfigService.getConfig(): cache is empty or expired" + o + ".");
        }
        var n, i;
        return O(this, function(s) {
          switch (s.label) {
            case 0:
              return this.options.logger.debug("LazyLoadConfigService.getConfig() called."), [4, this.options.cache.get(this.cacheKey)];
            case 1:
              return n = s.sent(), n.isExpired(this.cacheTimeToLiveMs) ? this.isOffline ? [3, 3] : (r(this.options.logger, ", calling refreshConfigCoreAsync()"), [4, this.refreshConfigCoreAsync(n)]) : [3, 5];
            case 2:
              return i = s.sent(), n = i[1], [3, 4];
            case 3:
              r(this.options.logger), s.label = 4;
            case 4:
              return [2, n];
            case 5:
              return this.options.logger.debug("LazyLoadConfigService.getConfig(): cache is valid, returning from cache."), [2, n];
          }
        });
      });
    }, e.prototype.refreshConfigAsync = function() {
      return this.options.logger.debug("LazyLoadConfigService.refreshConfigAsync() called."), t.prototype.refreshConfigAsync.call(this);
    }, e.prototype.getCacheState = function(r) {
      return r.isEmpty ? C.NoFlagData : r.isExpired(this.cacheTimeToLiveMs) ? C.HasCachedFlagDataOnly : C.HasUpToDateFlagData;
    }, e;
  }(we)
), sr = (
  /** @class */
  function(t) {
    q(e, t);
    function e(r, n) {
      var i = t.call(this, r, n) || this, s = i.syncUpWithCache();
      return i.readyPromise = i.getReadyPromise(s, function(o) {
        return E(i, void 0, void 0, function() {
          var a;
          return O(this, function(u) {
            switch (u.label) {
              case 0:
                return a = this.getCacheState, [4, o];
              case 1:
                return [2, a.apply(this, [u.sent()])];
            }
          });
        });
      }), i;
    }
    return e.prototype.getCacheState = function(r) {
      return r.isEmpty ? C.NoFlagData : C.HasCachedFlagDataOnly;
    }, e.prototype.getConfig = function() {
      return E(this, void 0, void 0, function() {
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
  }(we)
), Nt = "<invalid value>", or = "<invalid name>", Le = "<invalid operator>", ar = "<invalid reference>", ur = 10, Lt = (
  /** @class */
  function() {
    function t() {
      this.log = "", this.indent = "";
    }
    return t.prototype.resetIndent = function() {
      return this.indent = "", this;
    }, t.prototype.increaseIndent = function() {
      return this.indent += "  ", this;
    }, t.prototype.decreaseIndent = function() {
      return this.indent = this.indent.slice(0, -2), this;
    }, t.prototype.newLine = function(e) {
      return this.log += `
` + this.indent + (e ?? ""), this;
    }, t.prototype.append = function(e) {
      return this.log += e, this;
    }, t.prototype.toString = function() {
      return this.log;
    }, t.prototype.appendEvaluationResult = function(e) {
      return this.append("" + e);
    }, t.prototype.appendUserConditionCore = function(e, r, n) {
      return this.append("User." + e + " " + ye(r) + " '" + (n ?? Nt) + "'");
    }, t.prototype.appendUserConditionString = function(e, r, n, i) {
      return this.appendUserConditionCore(e, r, i ? "<hashed value>" : n);
    }, t.prototype.appendUserConditionStringList = function(e, r, n, i) {
      if (n == null)
        return this.appendUserConditionCore(e, r);
      var s = "value", o = "values", a = ye(r);
      if (i)
        return this.append("User." + e + " " + a + " [<" + n.length + " hashed " + (n.length === 1 ? s : o) + ">]");
      var u = Ce(n, ur, function(l) {
        return ", ... <" + l + " more " + (l === 1 ? s : o) + ">";
      });
      return this.append("User." + e + " " + a + " [" + u + "]");
    }, t.prototype.appendUserConditionNumber = function(e, r, n, i) {
      if (n == null)
        return this.appendUserConditionCore(e, r);
      var s = ye(r), o;
      return i && !isNaN(o = new Date(n * 1e3)) ? this.append("User." + e + " " + s + " '" + n + "' (" + o.toISOString() + " UTC)") : this.append("User." + e + " " + s + " '" + n + "'");
    }, t.prototype.appendUserCondition = function(e) {
      var r = e.comparisonAttribute, n = e.comparator;
      switch (e.comparator) {
        case c.IsOneOf:
        case c.IsNotOneOf:
        case c.ContainsAnyOf:
        case c.NotContainsAnyOf:
        case c.SemVerIsOneOf:
        case c.SemVerIsNotOneOf:
        case c.TextStartsWithAnyOf:
        case c.TextNotStartsWithAnyOf:
        case c.TextEndsWithAnyOf:
        case c.TextNotEndsWithAnyOf:
        case c.ArrayContainsAnyOf:
        case c.ArrayNotContainsAnyOf:
          return this.appendUserConditionStringList(r, n, e.comparisonValue, !1);
        case c.SemVerLess:
        case c.SemVerLessOrEquals:
        case c.SemVerGreater:
        case c.SemVerGreaterOrEquals:
        case c.TextEquals:
        case c.TextNotEquals:
          return this.appendUserConditionString(r, n, e.comparisonValue, !1);
        case c.NumberEquals:
        case c.NumberNotEquals:
        case c.NumberLess:
        case c.NumberLessOrEquals:
        case c.NumberGreater:
        case c.NumberGreaterOrEquals:
          return this.appendUserConditionNumber(r, n, e.comparisonValue);
        case c.SensitiveIsOneOf:
        case c.SensitiveIsNotOneOf:
        case c.SensitiveTextStartsWithAnyOf:
        case c.SensitiveTextNotStartsWithAnyOf:
        case c.SensitiveTextEndsWithAnyOf:
        case c.SensitiveTextNotEndsWithAnyOf:
        case c.SensitiveArrayContainsAnyOf:
        case c.SensitiveArrayNotContainsAnyOf:
          return this.appendUserConditionStringList(r, n, e.comparisonValue, !0);
        case c.DateTimeBefore:
        case c.DateTimeAfter:
          return this.appendUserConditionNumber(r, n, e.comparisonValue, !0);
        case c.SensitiveTextEquals:
        case c.SensitiveTextNotEquals:
          return this.appendUserConditionString(r, n, e.comparisonValue, !0);
        default:
          return this.appendUserConditionCore(r, n, e.comparisonValue);
      }
    }, t.prototype.appendPrerequisiteFlagCondition = function(e) {
      var r = e.prerequisiteFlagKey, n = e.comparator, i = e.comparisonValue;
      return this.append("Flag '" + r + "' " + lr(n) + " '" + ce(i) + "'");
    }, t.prototype.appendSegmentCondition = function(e) {
      var r, n = e.segment, i = e.comparator, s = (r = n == null ? void 0 : n.name) !== null && r !== void 0 ? r : n == null ? ar : or;
      return this.append("User " + Rt(i) + " '" + s + "'");
    }, t.prototype.appendConditionConsequence = function(e) {
      return this.append(" => ").appendEvaluationResult(e), e ? this : this.append(", skipping the remaining AND conditions");
    }, t.prototype.appendTargetingRuleThenPart = function(e, r) {
      (r ? this.newLine() : this.append(" ")).append("THEN");
      var n = e.then;
      return this.append(ve(n) ? " % options" : " '" + ce(n.value) + "'");
    }, t.prototype.appendTargetingRuleConsequence = function(e, r, n) {
      return this.increaseIndent(), this.appendTargetingRuleThenPart(e, n).append(" => ").append(r === !0 ? "MATCH, applying rule" : r === !1 ? "no match" : r), this.decreaseIndent();
    }, t;
  }()
);
function ye(t) {
  switch (t) {
    case c.IsOneOf:
    case c.SensitiveIsOneOf:
    case c.SemVerIsOneOf:
      return "IS ONE OF";
    case c.IsNotOneOf:
    case c.SensitiveIsNotOneOf:
    case c.SemVerIsNotOneOf:
      return "IS NOT ONE OF";
    case c.ContainsAnyOf:
      return "CONTAINS ANY OF";
    case c.NotContainsAnyOf:
      return "NOT CONTAINS ANY OF";
    case c.SemVerLess:
    case c.NumberLess:
      return "<";
    case c.SemVerLessOrEquals:
    case c.NumberLessOrEquals:
      return "<=";
    case c.SemVerGreater:
    case c.NumberGreater:
      return ">";
    case c.SemVerGreaterOrEquals:
    case c.NumberGreaterOrEquals:
      return ">=";
    case c.NumberEquals:
      return "=";
    case c.NumberNotEquals:
      return "!=";
    case c.DateTimeBefore:
      return "BEFORE";
    case c.DateTimeAfter:
      return "AFTER";
    case c.TextEquals:
    case c.SensitiveTextEquals:
      return "EQUALS";
    case c.TextNotEquals:
    case c.SensitiveTextNotEquals:
      return "NOT EQUALS";
    case c.TextStartsWithAnyOf:
    case c.SensitiveTextStartsWithAnyOf:
      return "STARTS WITH ANY OF";
    case c.TextNotStartsWithAnyOf:
    case c.SensitiveTextNotStartsWithAnyOf:
      return "NOT STARTS WITH ANY OF";
    case c.TextEndsWithAnyOf:
    case c.SensitiveTextEndsWithAnyOf:
      return "ENDS WITH ANY OF";
    case c.TextNotEndsWithAnyOf:
    case c.SensitiveTextNotEndsWithAnyOf:
      return "NOT ENDS WITH ANY OF";
    case c.ArrayContainsAnyOf:
    case c.SensitiveArrayContainsAnyOf:
      return "ARRAY CONTAINS ANY OF";
    case c.ArrayNotContainsAnyOf:
    case c.SensitiveArrayNotContainsAnyOf:
      return "ARRAY NOT CONTAINS ANY OF";
    default:
      return Le;
  }
}
function Re(t) {
  return new Lt().appendUserCondition(t).toString();
}
function lr(t) {
  switch (t) {
    case K.Equals:
      return "EQUALS";
    case K.NotEquals:
      return "NOT EQUALS";
    default:
      return Le;
  }
}
function Rt(t) {
  switch (t) {
    case W.IsIn:
      return "IS IN SEGMENT";
    case W.IsNotIn:
      return "IS NOT IN SEGMENT";
    default:
      return Le;
  }
}
function ce(t) {
  return ee(t) ? t.toString() : Nt;
}
var ut = /^[0-9]+$/, G = function(t, e) {
  var r = ut.test(t), n = ut.test(e);
  return r && n && (t = +t, e = +e), t === e ? 0 : r && !n ? -1 : n && !r ? 1 : t < e ? -1 : 1;
}, Se = 256, re = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991, Z = [], S = [], m = {}, cr = 0, N = function(t, e) {
  var r = cr++;
  m[t] = r, S[r] = e, Z[r] = new RegExp(e);
};
N("NUMERICIDENTIFIER", "0|[1-9]\\d*");
N("NUMERICIDENTIFIERLOOSE", "[0-9]+");
N("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*");
N("MAINVERSION", "(" + S[m.NUMERICIDENTIFIER] + ")\\." + ("(" + S[m.NUMERICIDENTIFIER] + ")\\.") + ("(" + S[m.NUMERICIDENTIFIER] + ")"));
N("MAINVERSIONLOOSE", "(" + S[m.NUMERICIDENTIFIERLOOSE] + ")\\." + ("(" + S[m.NUMERICIDENTIFIERLOOSE] + ")\\.") + ("(" + S[m.NUMERICIDENTIFIERLOOSE] + ")"));
N("PRERELEASEIDENTIFIER", "(?:" + S[m.NUMERICIDENTIFIER] + "|" + S[m.NONNUMERICIDENTIFIER] + ")");
N("PRERELEASEIDENTIFIERLOOSE", "(?:" + S[m.NUMERICIDENTIFIERLOOSE] + "|" + S[m.NONNUMERICIDENTIFIER] + ")");
N("PRERELEASE", "(?:-(" + S[m.PRERELEASEIDENTIFIER] + "(?:\\." + S[m.PRERELEASEIDENTIFIER] + ")*))");
N("PRERELEASELOOSE", "(?:-?(" + S[m.PRERELEASEIDENTIFIERLOOSE] + "(?:\\." + S[m.PRERELEASEIDENTIFIERLOOSE] + ")*))");
N("BUILDIDENTIFIER", "[0-9A-Za-z-]+");
N("BUILD", "(?:\\+(" + S[m.BUILDIDENTIFIER] + "(?:\\." + S[m.BUILDIDENTIFIER] + ")*))");
N("FULLPLAIN", "v?" + S[m.MAINVERSION] + S[m.PRERELEASE] + "?" + S[m.BUILD] + "?");
N("FULL", "^" + S[m.FULLPLAIN] + "$");
N("LOOSEPLAIN", "[v=\\s]*" + S[m.MAINVERSIONLOOSE] + S[m.PRERELEASELOOSE] + "?" + S[m.BUILD] + "?");
N("LOOSE", "^" + S[m.LOOSEPLAIN] + "$");
var lt = (
  /** @class */
  function() {
    function t(e, r) {
      if ((!r || typeof r != "object") && (r = {
        loose: !!r,
        includePrerelease: !1
      }), e instanceof t) {
        if (e.loose === !!r.loose && e.includePrerelease === !!r.includePrerelease)
          return e;
        e = e.version;
      } else if (typeof e != "string")
        throw new TypeError("Invalid Version: " + e);
      if (e.length > Se)
        throw new TypeError("version is longer than " + Se + " characters");
      this.options = r, this.loose = !!r.loose, this.includePrerelease = !!r.includePrerelease;
      var n = e.trim().match(r.loose ? Z[m.LOOSE] : Z[m.FULL]);
      if (!n)
        throw new TypeError("Invalid Version: " + e);
      if (this.raw = e, this.major = +n[1], this.minor = +n[2], this.patch = +n[3], this.major > re || this.major < 0)
        throw new TypeError("Invalid major version");
      if (this.minor > re || this.minor < 0)
        throw new TypeError("Invalid minor version");
      if (this.patch > re || this.patch < 0)
        throw new TypeError("Invalid patch version");
      n[4] ? this.prerelease = n[4].split(".").map(function(i) {
        if (/^[0-9]+$/.test(i)) {
          var s = +i;
          if (s >= 0 && s < re)
            return s;
        }
        return i;
      }) : this.prerelease = [], this.build = n[5] ? n[5].split(".") : [], this.format();
    }
    return t.prototype.format = function() {
      return this.version = this.major + "." + this.minor + "." + this.patch, this.prerelease.length && (this.version += "-" + this.prerelease.join(".")), this.version;
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
      return e instanceof t || (e = new t(e, this.options)), G(this.major, e.major) || G(this.minor, e.minor) || G(this.patch, e.patch);
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
        return G(n, i);
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
        return G(n, i);
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
          throw new Error("invalid increment argument: " + e);
      }
      return this.format(), this.raw = this.version, this;
    }, t;
  }()
), Ae = function(t, e) {
  if ((!e || typeof e != "object") && (e = {
    loose: !!e,
    includePrerelease: !1
  }), t instanceof lt)
    return t;
  if (typeof t != "string" || t.length > Se)
    return null;
  var r = e.loose ? Z[m.LOOSE] : Z[m.FULL];
  if (!r.test(t))
    return null;
  try {
    return new lt(t, e);
  } catch {
    return null;
  }
}, Cr = (
  /** @class */
  function() {
    function t(e, r, n, i) {
      i === void 0 && (i = {}), this.identifier = e, this.email = r, this.country = n, this.custom = i;
    }
    return t;
  }()
);
function fr(t) {
  var e, r = {}, n = "Identifier", i = "Email", s = "Country";
  if (r[n] = (e = t.identifier) !== null && e !== void 0 ? e : "", t.email != null && (r[i] = t.email), t.country != null && (r[s] = t.country), t.custom != null)
    for (var o = [n, i, s], a = 0, u = Object.entries(t.custom); a < u.length; a++) {
      var l = u[a], f = l[0], h = l[1];
      h != null && o.indexOf(f) < 0 && (r[f] = h);
    }
  return r;
}
var Fe = (
  /** @class */
  function() {
    function t(e, r, n, i) {
      this.key = e, this.setting = r, this.user = n, this.settings = i;
    }
    return Object.defineProperty(t.prototype, "userAttributes", {
      get: function() {
        var e = this.$userAttributes;
        return e !== void 0 ? e : this.$userAttributes = this.user ? fr(this.user) : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "visitedFlags", {
      get: function() {
        var e;
        return (e = this.$visitedFlags) !== null && e !== void 0 ? e : this.$visitedFlags = [];
      },
      enumerable: !1,
      configurable: !0
    }), t.forPrerequisiteFlag = function(e, r, n) {
      var i = new t(e, r, n.user, n.settings);
      return i.$userAttributes = n.userAttributes, i.$visitedFlags = n.visitedFlags, i.logBuilder = n.logBuilder, i;
    }, t;
  }()
), ct = "The current targeting rule is ignored and the evaluation continues with the next rule.", me = "cannot evaluate, User Object is missing", hr = function(t) {
  return "cannot evaluate, the User." + t + " attribute is missing";
}, gr = function(t, e) {
  return "cannot evaluate, the User." + t + " attribute is invalid (" + e + ")";
}, vr = (
  /** @class */
  function() {
    function t(e) {
      this.logger = e;
    }
    return t.prototype.evaluate = function(e, r) {
      this.logger.debug("RolloutEvaluator.evaluate() called.");
      var n = r.logBuilder;
      this.logger.isEnabled(p.Info) && (r.logBuilder = n = new Lt(), n.append("Evaluating '" + r.key + "'"), r.userAttributes && n.append(" for User '" + JSON.stringify(r.userAttributes) + "'"), n.increaseIndent());
      var i;
      try {
        var s = void 0, o = void 0;
        if (e != null) {
          var a = r.setting.type;
          if (a >= 0 && !yr(e, a))
            throw new TypeError("The type of a setting must match the type of the specified default value. " + ("Setting's type was " + x[a] + " but the default value's type was " + typeof e + ". ") + ("Please use a default value which corresponds to the setting type " + x[a] + ". ") + "Learn more: https://configcat.com/docs/sdk-reference/js/#setting-type-mapping");
          s = this.evaluateSetting(r), i = s.selectedValue.value, o = typeof i == typeof e;
        } else
          s = this.evaluateSetting(r), i = s.selectedValue.value, o = ee(i);
        return o || Te(i), s;
      } catch (u) {
        throw n == null || n.resetIndent().increaseIndent(), i = e, u;
      } finally {
        n && (n.newLine("Returning '" + i + "'.").decreaseIndent(), this.logger.settingEvaluated(n.toString()));
      }
    }, t.prototype.evaluateSetting = function(e) {
      var r, n = e.setting.targetingRules;
      if (n.length > 0 && (r = this.evaluateTargetingRules(n, e)))
        return r;
      var i = e.setting.percentageOptions;
      return i.length > 0 && (r = this.evaluatePercentageOptions(i, void 0, e)) ? r : { selectedValue: e.setting };
    }, t.prototype.evaluateTargetingRules = function(e, r) {
      var n = r.logBuilder;
      n == null || n.newLine("Evaluating targeting rules and applying the first match if any:");
      for (var i = 0; i < e.length; i++) {
        var s = e[i], o = s.conditions, a = this.evaluateConditions(o, s, r.key, r);
        if (a !== !0) {
          J(a) && (n == null || n.increaseIndent().newLine(ct).decreaseIndent());
          continue;
        }
        if (!ve(s.then))
          return { selectedValue: s.then, matchedTargetingRule: s };
        var u = s.then;
        n == null || n.increaseIndent();
        var l = this.evaluatePercentageOptions(u, s, r);
        if (l)
          return n == null || n.decreaseIndent(), l;
        n == null || n.newLine(ct).decreaseIndent();
      }
    }, t.prototype.evaluatePercentageOptions = function(e, r, n) {
      var i = n.logBuilder;
      if (!n.userAttributes) {
        i == null || i.newLine("Skipping % options because the User Object is missing."), n.isMissingUserObjectLogged || (this.logger.userObjectIsMissing(n.key), n.isMissingUserObjectLogged = !0);
        return;
      }
      var s = n.setting.percentageOptionsAttribute, o = n.userAttributes[s];
      if (o == null) {
        i == null || i.newLine("Skipping % options because the User." + s + " attribute is missing."), n.isMissingUserObjectAttributeLogged || (this.logger.userObjectAttributeIsMissingPercentage(n.key, s), n.isMissingUserObjectAttributeLogged = !0);
        return;
      }
      i == null || i.newLine("Evaluating % options based on the User." + s + " attribute:");
      var a = bt(n.key + kt(o)), u = parseInt(a.substring(0, 7), 16) % 100;
      i == null || i.newLine("- Computing hash in the [0..99] range from User." + s + " => " + u + " (this value is sticky and consistent across all SDKs)");
      for (var l = 0, f = 0; f < e.length; f++) {
        var h = e[f];
        if (l += h.percentage, !(u >= l))
          return i == null || i.newLine("- Hash value " + u + " selects % option " + (f + 1) + " (" + h.percentage + "%), '" + ce(h.value) + "'."), { selectedValue: h, matchedTargetingRule: r, matchedPercentageOption: h };
      }
      throw new Error("Sum of percentage option percentages are less than 100.");
    }, t.prototype.evaluateConditions = function(e, r, n, i) {
      var s = !0, o = i.logBuilder, a = !1;
      o == null || o.newLine("- ");
      for (var u = 0; u < e.length; u++) {
        var l = e[u];
        switch (o && (u ? o.increaseIndent().newLine("AND ") : o.append("IF ").increaseIndent()), l.type) {
          case "UserCondition":
            s = this.evaluateUserCondition(l, n, i), a = e.length > 1;
            break;
          case "PrerequisiteFlagCondition":
            s = this.evaluatePrerequisiteFlagCondition(l, i), a = !0;
            break;
          case "SegmentCondition":
            s = this.evaluateSegmentCondition(l, i), a = !J(s) || s !== me || e.length > 1;
            break;
          default:
            throw new Error();
        }
        var f = s === !0;
        if (o && ((!r || e.length > 1) && o.appendConditionConsequence(f), o.decreaseIndent()), !f)
          break;
      }
      return r && (o == null || o.appendTargetingRuleConsequence(r, s, a)), s;
    }, t.prototype.evaluateUserCondition = function(e, r, n) {
      var i = n.logBuilder;
      if (i == null || i.appendUserCondition(e), !n.userAttributes)
        return n.isMissingUserObjectLogged || (this.logger.userObjectIsMissing(n.key), n.isMissingUserObjectLogged = !0), me;
      var s = e.comparisonAttribute, o = n.userAttributes[s];
      if (o == null || o === "")
        return this.logger.userObjectAttributeIsMissingCondition(Re(e), n.key, s), hr(s);
      var a, u, l, f;
      switch (e.comparator) {
        case c.TextEquals:
        case c.TextNotEquals:
          return a = k(s, o, e, n.key, this.logger), this.evaluateTextEquals(a, e.comparisonValue, e.comparator === c.TextNotEquals);
        case c.SensitiveTextEquals:
        case c.SensitiveTextNotEquals:
          return a = k(s, o, e, n.key, this.logger), this.evaluateSensitiveTextEquals(a, e.comparisonValue, n.setting.configJsonSalt, r, e.comparator === c.SensitiveTextNotEquals);
        case c.IsOneOf:
        case c.IsNotOneOf:
          return a = k(s, o, e, n.key, this.logger), this.evaluateIsOneOf(a, e.comparisonValue, e.comparator === c.IsNotOneOf);
        case c.SensitiveIsOneOf:
        case c.SensitiveIsNotOneOf:
          return a = k(s, o, e, n.key, this.logger), this.evaluateSensitiveIsOneOf(a, e.comparisonValue, n.setting.configJsonSalt, r, e.comparator === c.SensitiveIsNotOneOf);
        case c.TextStartsWithAnyOf:
        case c.TextNotStartsWithAnyOf:
          return a = k(s, o, e, n.key, this.logger), this.evaluateTextSliceEqualsAnyOf(a, e.comparisonValue, !0, e.comparator === c.TextNotStartsWithAnyOf);
        case c.SensitiveTextStartsWithAnyOf:
        case c.SensitiveTextNotStartsWithAnyOf:
          return a = k(s, o, e, n.key, this.logger), this.evaluateSensitiveTextSliceEqualsAnyOf(a, e.comparisonValue, n.setting.configJsonSalt, r, !0, e.comparator === c.SensitiveTextNotStartsWithAnyOf);
        case c.TextEndsWithAnyOf:
        case c.TextNotEndsWithAnyOf:
          return a = k(s, o, e, n.key, this.logger), this.evaluateTextSliceEqualsAnyOf(a, e.comparisonValue, !1, e.comparator === c.TextNotEndsWithAnyOf);
        case c.SensitiveTextEndsWithAnyOf:
        case c.SensitiveTextNotEndsWithAnyOf:
          return a = k(s, o, e, n.key, this.logger), this.evaluateSensitiveTextSliceEqualsAnyOf(a, e.comparisonValue, n.setting.configJsonSalt, r, !1, e.comparator === c.SensitiveTextNotEndsWithAnyOf);
        case c.ContainsAnyOf:
        case c.NotContainsAnyOf:
          return a = k(s, o, e, n.key, this.logger), this.evaluateContainsAnyOf(a, e.comparisonValue, e.comparator === c.NotContainsAnyOf);
        case c.SemVerIsOneOf:
        case c.SemVerIsNotOneOf:
          return u = ft(s, o, e, n.key, this.logger), typeof u != "string" ? this.evaluateSemVerIsOneOf(u, e.comparisonValue, e.comparator === c.SemVerIsNotOneOf) : u;
        case c.SemVerLess:
        case c.SemVerLessOrEquals:
        case c.SemVerGreater:
        case c.SemVerGreaterOrEquals:
          return u = ft(s, o, e, n.key, this.logger), typeof u != "string" ? this.evaluateSemVerRelation(u, e.comparator, e.comparisonValue) : u;
        case c.NumberEquals:
        case c.NumberNotEquals:
        case c.NumberLess:
        case c.NumberLessOrEquals:
        case c.NumberGreater:
        case c.NumberGreaterOrEquals:
          return l = dr(s, o, e, n.key, this.logger), typeof l != "string" ? this.evaluateNumberRelation(l, e.comparator, e.comparisonValue) : l;
        case c.DateTimeBefore:
        case c.DateTimeAfter:
          return l = pr(s, o, e, n.key, this.logger), typeof l != "string" ? this.evaluateDateTimeRelation(l, e.comparisonValue, e.comparator === c.DateTimeBefore) : l;
        case c.ArrayContainsAnyOf:
        case c.ArrayNotContainsAnyOf:
          return f = ht(s, o, e, n.key, this.logger), typeof f != "string" ? this.evaluateArrayContainsAnyOf(f, e.comparisonValue, e.comparator === c.ArrayNotContainsAnyOf) : f;
        case c.SensitiveArrayContainsAnyOf:
        case c.SensitiveArrayNotContainsAnyOf:
          return f = ht(s, o, e, n.key, this.logger), typeof f != "string" ? this.evaluateSensitiveArrayContainsAnyOf(f, e.comparisonValue, n.setting.configJsonSalt, r, e.comparator === c.SensitiveArrayNotContainsAnyOf) : f;
        default:
          throw new Error();
      }
    }, t.prototype.evaluateTextEquals = function(e, r, n) {
      return e === r !== n;
    }, t.prototype.evaluateSensitiveTextEquals = function(e, r, n, i, s) {
      var o = Ee(e, n, i);
      return o === r !== s;
    }, t.prototype.evaluateIsOneOf = function(e, r, n) {
      var i = r.indexOf(e) >= 0;
      return i !== n;
    }, t.prototype.evaluateSensitiveIsOneOf = function(e, r, n, i, s) {
      var o = Ee(e, n, i), a = r.indexOf(o) >= 0;
      return a !== s;
    }, t.prototype.evaluateTextSliceEqualsAnyOf = function(e, r, n, i) {
      for (var s = 0; s < r.length; s++) {
        var o = r[s];
        if (!(e.length < o.length)) {
          var a = (n ? e.lastIndexOf(o, 0) : e.indexOf(o, e.length - o.length)) >= 0;
          if (a)
            return !i;
        }
      }
      return i;
    }, t.prototype.evaluateSensitiveTextSliceEqualsAnyOf = function(e, r, n, i, s, o) {
      for (var a = X(e), u = 0; u < r.length; u++) {
        var l = r[u], f = l.indexOf("_"), h = parseInt(l.slice(0, f));
        if (!(a.length < h)) {
          var g = s ? a.slice(0, h) : a.slice(a.length - h), v = Dt(g, n, i), d = v === l.slice(f + 1);
          if (d)
            return !o;
        }
      }
      return o;
    }, t.prototype.evaluateContainsAnyOf = function(e, r, n) {
      for (var i = 0; i < r.length; i++)
        if (e.indexOf(r[i]) >= 0)
          return !n;
      return n;
    }, t.prototype.evaluateSemVerIsOneOf = function(e, r, n) {
      for (var i = !1, s = 0; s < r.length; s++) {
        var o = r[s];
        if (o.length) {
          var a = Ae(o.trim());
          if (!a)
            return !1;
          !i && e.compare(a) === 0 && (i = !0);
        }
      }
      return i !== n;
    }, t.prototype.evaluateSemVerRelation = function(e, r, n) {
      var i = Ae(n.trim());
      if (!i)
        return !1;
      var s = e.compare(i);
      switch (r) {
        case c.SemVerLess:
          return s < 0;
        case c.SemVerLessOrEquals:
          return s <= 0;
        case c.SemVerGreater:
          return s > 0;
        case c.SemVerGreaterOrEquals:
          return s >= 0;
      }
    }, t.prototype.evaluateNumberRelation = function(e, r, n) {
      switch (r) {
        case c.NumberEquals:
          return e === n;
        case c.NumberNotEquals:
          return e !== n;
        case c.NumberLess:
          return e < n;
        case c.NumberLessOrEquals:
          return e <= n;
        case c.NumberGreater:
          return e > n;
        case c.NumberGreaterOrEquals:
          return e >= n;
      }
    }, t.prototype.evaluateDateTimeRelation = function(e, r, n) {
      return n ? e < r : e > r;
    }, t.prototype.evaluateArrayContainsAnyOf = function(e, r, n) {
      for (var i = 0; i < e.length; i++) {
        var s = r.indexOf(e[i]) >= 0;
        if (s)
          return !n;
      }
      return n;
    }, t.prototype.evaluateSensitiveArrayContainsAnyOf = function(e, r, n, i, s) {
      for (var o = 0; o < e.length; o++) {
        var a = Ee(e[o], n, i), u = r.indexOf(a) >= 0;
        if (u)
          return !s;
      }
      return s;
    }, t.prototype.evaluatePrerequisiteFlagCondition = function(e, r) {
      var n = r.logBuilder;
      n == null || n.appendPrerequisiteFlagCondition(e);
      var i = e.prerequisiteFlagKey, s = r.settings[i];
      if (r.visitedFlags.push(r.key), r.visitedFlags.indexOf(i) >= 0) {
        r.visitedFlags.push(i);
        var o = Ce(r.visitedFlags, void 0, void 0, " -> ");
        throw new Error("Circular dependency detected between the following depending flags: " + o + ".");
      }
      var a = Fe.forPrerequisiteFlag(i, s, r);
      n == null || n.newLine("(").increaseIndent().newLine("Evaluating prerequisite flag '" + i + "':");
      var u = this.evaluateSetting(a);
      r.visitedFlags.pop();
      var l = u.selectedValue.value;
      if (typeof l != typeof e.comparisonValue) {
        if (ee(l))
          throw new Error("Type mismatch between comparison value '" + e.comparisonValue + "' and prerequisite flag '" + i + "'.");
        Te(l);
      }
      var f;
      switch (e.comparator) {
        case K.Equals:
          f = l === e.comparisonValue;
          break;
        case K.NotEquals:
          f = l !== e.comparisonValue;
          break;
        default:
          throw new Error();
      }
      return n == null || n.newLine("Prerequisite flag evaluation result: '" + ce(l) + "'.").newLine("Condition (").appendPrerequisiteFlagCondition(e).append(") evaluates to ").appendEvaluationResult(f).append(".").decreaseIndent().newLine(")"), f;
    }, t.prototype.evaluateSegmentCondition = function(e, r) {
      var n = r.logBuilder;
      if (n == null || n.appendSegmentCondition(e), !r.userAttributes)
        return r.isMissingUserObjectLogged || (this.logger.userObjectIsMissing(r.key), r.isMissingUserObjectLogged = !0), me;
      var i = e.segment;
      n == null || n.newLine("(").increaseIndent().newLine("Evaluating segment '" + i.name + "':");
      var s = this.evaluateConditions(i.conditions, void 0, i.name, r), o = s;
      if (!J(o))
        switch (e.comparator) {
          case W.IsIn:
            break;
          case W.IsNotIn:
            o = !o;
            break;
          default:
            throw new Error();
        }
      return n && (n.newLine("Segment evaluation result: "), (J(o) ? n.append(o) : n.append("User " + Rt(s ? W.IsIn : W.IsNotIn))).append("."), n.newLine("Condition (").appendSegmentCondition(e).append(")"), (J(o) ? n.append(" failed to evaluate") : n.append(" evaluates to ").appendEvaluationResult(o)).append("."), n.decreaseIndent().newLine(")")), o;
    }, t;
  }()
);
function J(t) {
  return typeof t == "string";
}
function Ft(t) {
  return ve(t) && !t.some(function(e) {
    return typeof e != "string";
  });
}
function Ee(t, e, r) {
  return Dt(X(t), e, r);
}
function Dt(t, e, r) {
  return Tt(t + X(e) + X(r));
}
function kt(t) {
  return typeof t == "string" ? t : t instanceof Date ? t.getTime() / 1e3 + "" : Ft(t) ? JSON.stringify(t) : t + "";
}
function k(t, e, r, n, i) {
  return typeof e == "string" || (e = kt(e), i.userObjectAttributeIsAutoConverted(Re(r), n, t, e)), e;
}
function ft(t, e, r, n, i) {
  var s;
  return typeof e == "string" && (s = Ae(e.trim())) ? s : de(i, r, n, t, "'" + e + "' is not a valid semantic version");
}
function dr(t, e, r, n, i) {
  if (typeof e == "number")
    return e;
  var s;
  return typeof e == "string" && (!isNaN(s = Et(e.replace(",", "."))) || e === "NaN") ? s : de(i, r, n, t, "'" + e + "' is not a valid decimal number");
}
function pr(t, e, r, n, i) {
  if (e instanceof Date)
    return e.getTime() / 1e3;
  if (typeof e == "number")
    return e;
  var s;
  return typeof e == "string" && (!isNaN(s = Et(e.replace(",", "."))) || e === "NaN") ? s : de(i, r, n, t, "'" + e + "' is not a valid Unix timestamp (number of seconds elapsed since Unix epoch)");
}
function ht(t, e, r, n, i) {
  var s = e;
  if (typeof s == "string")
    try {
      s = JSON.parse(s);
    } catch {
    }
  return Ft(s) ? s : de(i, r, n, t, "'" + e + "' is not a valid string array");
}
function de(t, e, r, n, i) {
  return t.userObjectAttributeIsInvalid(Re(e), r, i, n), gr(n, i);
}
function Pt(t, e, r, n) {
  return {
    key: t,
    value: e.selectedValue.value,
    variationId: e.selectedValue.variationId,
    fetchTime: r,
    user: n,
    isDefaultValue: !1,
    matchedTargetingRule: e.matchedTargetingRule,
    matchedPercentageOption: e.matchedPercentageOption
  };
}
function _(t, e, r, n, i, s) {
  return {
    key: t,
    value: e,
    fetchTime: r,
    user: n,
    isDefaultValue: !0,
    errorMessage: i,
    errorException: s
  };
}
function fe(t, e, r, n, i, s, o) {
  var a;
  if (!e)
    return a = o.configJsonIsNotPresentSingle(r, "defaultValue", n).toString(), _(r, n, P(s), i, a);
  var u = e[r];
  if (!u)
    return a = o.settingEvaluationFailedDueToMissingKey(r, "defaultValue", n, Ce(Object.keys(e))).toString(), _(r, n, P(s), i, a);
  var l = t.evaluate(n, new Fe(r, u, i, e));
  return Pt(r, l, P(s), i);
}
function gt(t, e, r, n, i, s) {
  var o;
  if (!be(e, i, s))
    return [[], o];
  for (var a = [], u = 0, l = Object.entries(e); u < l.length; u++) {
    var f = l[u], h = f[0], g = f[1], v = void 0;
    try {
      var d = t.evaluate(null, new Fe(h, g, r, e));
      v = Pt(h, d, P(n), r);
    } catch (y) {
      o ?? (o = []), o.push(y), v = _(h, null, P(n), r, B(y), y);
    }
    a.push(v);
  }
  return [a, o];
}
function be(t, e, r) {
  return t ? !0 : (e.configJsonIsNotPresent(r), !1);
}
function ee(t) {
  return typeof t == "boolean" || typeof t == "string" || typeof t == "number";
}
function yr(t, e) {
  switch (e) {
    case x.Boolean:
      return typeof t == "boolean";
    case x.String:
      return typeof t == "string";
    case x.Int:
    case x.Double:
      return typeof t == "number";
    default:
      return !1;
  }
}
function Te(t) {
  throw new TypeError(t === null ? "Setting value is null." : t === void 0 ? "Setting value is undefined." : "Setting value '" + t + "' is of an unsupported type (" + typeof t + ").");
}
function P(t) {
  return t ? new Date(t.timestamp) : void 0;
}
var mr = (
  /** @class */
  function() {
    function t() {
      this.instances = {};
    }
    return t.prototype.getOrCreate = function(e, r) {
      var n, i = this.instances[e.sdkKey];
      if (i) {
        var s = i[0];
        if (n = s.deref(), n)
          return [n, !0];
      }
      var o = {};
      n = new De(e, r, o);
      var a = Ct() ? WeakRef : wt();
      return this.instances[e.sdkKey] = [new a(n), o], [n, !1];
    }, t.prototype.remove = function(e, r) {
      var n = this.instances[e];
      if (n) {
        var i = n[0], s = n[1], o = !!i.deref();
        if (!o || s === r)
          return delete this.instances[e], o;
      }
      return !1;
    }, t.prototype.clear = function() {
      for (var e = [], r = 0, n = Object.entries(this.instances); r < n.length; r++) {
        var i = n[r], s = i[0], o = i[1][0], a = o.deref();
        a && e.push(a), delete this.instances[s];
      }
      return e;
    }, t;
  }()
), Y = new mr(), De = (
  /** @class */
  function() {
    function t(e, r, n) {
      var i;
      if (this.cacheToken = n, this.addListener = this.on, this.off = this.removeListener, !e)
        throw new Error("Invalid 'options' value");
      if (this.options = e, this.options.logger.debug("Initializing ConfigCatClient. Options: " + JSON.stringify(this.options)), !r)
        throw new Error("Invalid 'configCatKernel' value");
      if (!r.configFetcher)
        throw new Error("Invalid 'configCatKernel.configFetcher' value");
      this.hooks = e.yieldHooks(), e.defaultUser && this.setDefaultUser(e.defaultUser), this.evaluator = new vr(e.logger), ((i = e.flagOverrides) === null || i === void 0 ? void 0 : i.behaviour) !== R.LocalOnly ? this.configService = e instanceof st ? new Jt(r.configFetcher, e) : e instanceof ot ? new sr(r.configFetcher, e) : e instanceof at ? new ir(r.configFetcher, e) : Ue(new Error("Invalid 'options' value")) : this.hooks.emit("clientReady", C.HasLocalOverrideFlagDataOnly), this.suppressFinalize = ae(this, { sdkKey: e.sdkKey, cacheToken: n, configService: this.configService, logger: e.logger });
    }
    return Object.defineProperty(t, "instanceCache", {
      get: function() {
        return Y;
      },
      enumerable: !1,
      configurable: !0
    }), t.get = function(e, r, n, i) {
      var s, o = "Invalid 'sdkKey' value";
      if (!e)
        throw new Error(o);
      var a = r === H.AutoPoll ? st : r === H.ManualPoll ? ot : r === H.LazyLoad ? at : Ue(new Error("Invalid 'pollingMode' value")), u = new a(e, i.sdkType, i.sdkVersion, n, i.defaultCacheFactory, i.eventEmitterFactory);
      if (((s = u.flagOverrides) === null || s === void 0 ? void 0 : s.behaviour) !== R.LocalOnly && !Er(e, u.baseUrlOverriden))
        throw new Error(o);
      var l = Y.getOrCreate(u, i), f = l[0], h = l[1];
      return h && n && u.logger.clientIsAlreadyCreated(e), f;
    }, t.finalize = function(e) {
      var r;
      (r = e.logger) === null || r === void 0 || r.debug("finalize() called"), e.cacheToken && Y.remove(e.sdkKey, e.cacheToken), t.close(e.configService, e.logger);
    }, t.close = function(e, r, n) {
      r == null || r.debug("close() called"), n == null || n.tryDisconnect(), e == null || e.dispose();
    }, t.prototype.dispose = function() {
      var e = this.options;
      e.logger.debug("dispose() called"), this.cacheToken && Y.remove(e.sdkKey, this.cacheToken), t.close(this.configService, e.logger, this.hooks), this.suppressFinalize();
    }, t.disposeAll = function() {
      for (var e = Y.clear(), r, n = 0, i = e; n < i.length; n++) {
        var s = i[n];
        try {
          t.close(s.configService, s.options.logger, s.hooks), s.suppressFinalize();
        } catch (o) {
          r ?? (r = []), r.push(o);
        }
      }
      if (r)
        throw typeof AggregateError < "u" ? new AggregateError(r) : r.pop();
    }, t.prototype.getValueAsync = function(e, r, n) {
      return E(this, void 0, void 0, function() {
        var i, s, o, a, u, l;
        return O(this, function(f) {
          switch (f.label) {
            case 0:
              this.options.logger.debug("getValueAsync() called."), he(e), ge(r), o = null, n ?? (n = this.defaultUser), f.label = 1;
            case 1:
              return f.trys.push([1, 3, , 4]), a = void 0, [4, this.getSettingsAsync()];
            case 2:
              return l = f.sent(), a = l[0], o = l[1], s = fe(this.evaluator, a, e, r, n, o, this.options.logger), i = s.value, [3, 4];
            case 3:
              return u = f.sent(), this.options.logger.settingEvaluationErrorSingle("getValueAsync", e, "defaultValue", r, u), s = _(e, r, P(o), n, B(u), u), i = r, [3, 4];
            case 4:
              return this.hooks.emit("flagEvaluated", s), [2, i];
          }
        });
      });
    }, t.prototype.getValueDetailsAsync = function(e, r, n) {
      return E(this, void 0, void 0, function() {
        var i, s, o, a, u;
        return O(this, function(l) {
          switch (l.label) {
            case 0:
              this.options.logger.debug("getValueDetailsAsync() called."), he(e), ge(r), s = null, n ?? (n = this.defaultUser), l.label = 1;
            case 1:
              return l.trys.push([1, 3, , 4]), o = void 0, [4, this.getSettingsAsync()];
            case 2:
              return u = l.sent(), o = u[0], s = u[1], i = fe(this.evaluator, o, e, r, n, s, this.options.logger), [3, 4];
            case 3:
              return a = l.sent(), this.options.logger.settingEvaluationErrorSingle("getValueDetailsAsync", e, "defaultValue", r, a), i = _(e, r, P(s), n, B(a), a), [3, 4];
            case 4:
              return this.hooks.emit("flagEvaluated", i), [2, i];
          }
        });
      });
    }, t.prototype.getAllKeysAsync = function() {
      return E(this, void 0, void 0, function() {
        var e, r, n;
        return O(this, function(i) {
          switch (i.label) {
            case 0:
              this.options.logger.debug("getAllKeysAsync() called."), e = "empty array", i.label = 1;
            case 1:
              return i.trys.push([1, 3, , 4]), [4, this.getSettingsAsync()];
            case 2:
              return r = i.sent()[0], be(r, this.options.logger, e) ? [2, Object.keys(r)] : [2, []];
            case 3:
              return n = i.sent(), this.options.logger.settingEvaluationError("getAllKeysAsync", e, n), [2, []];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype.getAllValuesAsync = function(e) {
      return E(this, void 0, void 0, function() {
        var r, n, i, s, o, a, u, l, f, h, g, v;
        return O(this, function(d) {
          switch (d.label) {
            case 0:
              this.options.logger.debug("getAllValuesAsync() called."), r = "empty array", e ?? (e = this.defaultUser), d.label = 1;
            case 1:
              return d.trys.push([1, 3, , 4]), [4, this.getSettingsAsync()];
            case 2:
              return o = d.sent(), a = o[0], u = o[1], v = gt(this.evaluator, a, e, u, this.options.logger, r), i = v[0], s = v[1], n = i.map(function(y) {
                return new $(y.key, y.value);
              }), [3, 4];
            case 3:
              return l = d.sent(), this.options.logger.settingEvaluationError("getAllValuesAsync", r, l), [2, []];
            case 4:
              for (s != null && s.length && this.options.logger.settingEvaluationError("getAllValuesAsync", "evaluation result", typeof AggregateError < "u" ? new AggregateError(s) : s.pop()), f = 0, h = i; f < h.length; f++)
                g = h[f], this.hooks.emit("flagEvaluated", g);
              return [2, n];
          }
        });
      });
    }, t.prototype.getAllValueDetailsAsync = function(e) {
      return E(this, void 0, void 0, function() {
        var r, n, i, s, o, a, u, l, f, h, g;
        return O(this, function(v) {
          switch (v.label) {
            case 0:
              this.options.logger.debug("getAllValueDetailsAsync() called."), r = "empty array", e ?? (e = this.defaultUser), v.label = 1;
            case 1:
              return v.trys.push([1, 3, , 4]), [4, this.getSettingsAsync()];
            case 2:
              return s = v.sent(), o = s[0], a = s[1], g = gt(this.evaluator, o, e, a, this.options.logger, r), n = g[0], i = g[1], [3, 4];
            case 3:
              return u = v.sent(), this.options.logger.settingEvaluationError("getAllValueDetailsAsync", r, u), [2, []];
            case 4:
              for (i != null && i.length && this.options.logger.settingEvaluationError("getAllValueDetailsAsync", "evaluation result", typeof AggregateError < "u" ? new AggregateError(i) : i.pop()), l = 0, f = n; l < f.length; l++)
                h = f[l], this.hooks.emit("flagEvaluated", h);
              return [2, n];
          }
        });
      });
    }, t.prototype.getKeyAndValueAsync = function(e) {
      return E(this, void 0, void 0, function() {
        var r, n, i, s, o, a, u, l, v, f, h, d, g, v, d, y;
        return O(this, function(A) {
          switch (A.label) {
            case 0:
              this.options.logger.debug("getKeyAndValueAsync() called."), r = "null", A.label = 1;
            case 1:
              return A.trys.push([1, 3, , 4]), [4, this.getSettingsAsync()];
            case 2:
              if (n = A.sent()[0], !be(n, this.options.logger, r))
                return [2, null];
              for (i = 0, s = Object.entries(n); i < s.length; i++) {
                if (o = s[i], a = o[0], u = o[1], e === u.variationId)
                  return [2, new $(a, ie(u.value))];
                if (l = n[a].targetingRules, l && l.length > 0) {
                  for (v = 0; v < l.length; v++)
                    if (f = l[v].then, ve(f)) {
                      for (h = 0; h < f.length; h++)
                        if (d = f[h], e === d.variationId)
                          return [2, new $(a, ie(d.value))];
                    } else if (e === f.variationId)
                      return [2, new $(a, ie(f.value))];
                }
                if (g = n[a].percentageOptions, g && g.length > 0) {
                  for (v = 0; v < g.length; v++)
                    if (d = g[v], e === d.variationId)
                      return [2, new $(a, ie(d.value))];
                }
              }
              return this.options.logger.settingForVariationIdIsNotPresent(e), [3, 4];
            case 3:
              return y = A.sent(), this.options.logger.settingEvaluationError("getKeyAndValueAsync", r, y), [3, 4];
            case 4:
              return [2, null];
          }
        });
      });
    }, t.prototype.forceRefreshAsync = function() {
      return E(this, void 0, void 0, function() {
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
              return r = n.sent(), this.options.logger.forceRefreshError("forceRefreshAsync", r), [2, ue.failure(B(r), r)];
            case 4:
              return [3, 6];
            case 5:
              return [2, ue.failure("Client is configured to use the LocalOnly override behavior, which prevents making HTTP requests.")];
            case 6:
              return [
                2
                /*return*/
              ];
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
      this.configService ? this.configService.setOnline() : this.options.logger.configServiceMethodHasNoEffectDueToOverrideBehavior(R[R.LocalOnly], "setOnline");
    }, t.prototype.setOffline = function() {
      var e;
      (e = this.configService) === null || e === void 0 || e.setOffline();
    }, t.prototype.waitForReady = function() {
      var e = this.configService;
      return e ? e.readyPromise : Promise.resolve(C.HasLocalOverrideFlagDataOnly);
    }, t.prototype.snapshot = function() {
      var e, r, n, i = this, s, o = function() {
        var h = i.options.cache.getInMemory(), g = h.isEmpty ? null : h.config.settings;
        return [g, h];
      }, a, u, l = (s = this.options) === null || s === void 0 ? void 0 : s.flagOverrides;
      if (l) {
        var f = l.dataSource.getOverridesSync();
        switch (l.behaviour) {
          case R.LocalOnly:
            return new ne(f, null, this);
          case R.LocalOverRemote:
            return e = o(), a = e[0], u = e[1], new ne(F(F({}, a ?? {}), f), u, this);
          case R.RemoteOverLocal:
            return r = o(), a = r[0], u = r[1], new ne(F(F({}, f), a ?? {}), u, this);
        }
      }
      return n = o(), a = n[0], u = n[1], new ne(a, u, this);
    }, t.prototype.getSettingsAsync = function() {
      var e;
      return E(this, void 0, void 0, function() {
        var r, n, i, s, o, a, u, l, f = this;
        return O(this, function(h) {
          switch (h.label) {
            case 0:
              return this.options.logger.debug("getSettingsAsync() called."), r = function() {
                return E(f, void 0, void 0, function() {
                  var g, v;
                  return O(this, function(d) {
                    switch (d.label) {
                      case 0:
                        return [4, this.configService.getConfig()];
                      case 1:
                        return g = d.sent(), v = g.isEmpty ? null : g.config.settings, [2, [v, g]];
                    }
                  });
                });
              }, n = (e = this.options) === null || e === void 0 ? void 0 : e.flagOverrides, n ? (i = void 0, s = void 0, [4, n.dataSource.getOverrides()]) : [3, 7];
            case 1:
              switch (o = h.sent(), a = n.behaviour, a) {
                case R.LocalOnly:
                  return [3, 2];
                case R.LocalOverRemote:
                  return [3, 3];
                case R.RemoteOverLocal:
                  return [3, 5];
              }
              return [3, 7];
            case 2:
              return [2, [o, null]];
            case 3:
              return [4, r()];
            case 4:
              return u = h.sent(), i = u[0], s = u[1], [2, [F(F({}, i ?? {}), o), s]];
            case 5:
              return [4, r()];
            case 6:
              return l = h.sent(), i = l[0], s = l[1], [2, [F(F({}, o), i ?? {}), s]];
            case 7:
              return [4, r()];
            case 8:
              return [2, h.sent()];
          }
        });
      });
    }, t.prototype.on = function(e, r) {
      return this.hooks.on(e, r), this;
    }, t.prototype.once = function(e, r) {
      return this.hooks.once(e, r), this;
    }, t.prototype.removeListener = function(e, r) {
      return this.hooks.removeListener(e, r), this;
    }, t.prototype.removeAllListeners = function(e) {
      return this.hooks.removeAllListeners(e), this;
    }, t.prototype.listeners = function(e) {
      return this.hooks.listeners(e);
    }, t.prototype.listenerCount = function(e) {
      return this.hooks.listenerCount(e);
    }, t.prototype.eventNames = function() {
      return this.hooks.eventNames();
    }, t;
  }()
), ne = (
  /** @class */
  function() {
    function t(e, r, n) {
      this.mergedSettings = e, this.remoteConfig = r, this.defaultUser = n.defaultUser, this.evaluator = n.evaluator, this.options = n.options, this.cacheState = r ? n.configService.getCacheState(r) : C.HasLocalOverrideFlagDataOnly;
    }
    return Object.defineProperty(t.prototype, "fetchedConfig", {
      get: function() {
        var e = this.remoteConfig;
        return e && !e.isEmpty ? e.config : null;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.getAllKeys = function() {
      return this.mergedSettings ? Object.keys(this.mergedSettings) : [];
    }, t.prototype.getValue = function(e, r, n) {
      this.options.logger.debug("Snapshot.getValue() called."), he(e), ge(r);
      var i, s;
      n ?? (n = this.defaultUser);
      try {
        s = fe(this.evaluator, this.mergedSettings, e, r, n, this.remoteConfig, this.options.logger), i = s.value;
      } catch (o) {
        this.options.logger.settingEvaluationErrorSingle("Snapshot.getValue", e, "defaultValue", r, o), s = _(e, r, P(this.remoteConfig), n, B(o), o), i = r;
      }
      return this.options.hooks.emit("flagEvaluated", s), i;
    }, t.prototype.getValueDetails = function(e, r, n) {
      this.options.logger.debug("Snapshot.getValueDetails() called."), he(e), ge(r);
      var i;
      n ?? (n = this.defaultUser);
      try {
        i = fe(this.evaluator, this.mergedSettings, e, r, n, this.remoteConfig, this.options.logger);
      } catch (s) {
        this.options.logger.settingEvaluationErrorSingle("Snapshot.getValueDetails", e, "defaultValue", r, s), i = _(e, r, P(this.remoteConfig), n, B(s), s);
      }
      return this.options.hooks.emit("flagEvaluated", i), i;
    }, t;
  }()
), $ = (
  /** @class */
  function() {
    function t(e, r) {
      this.settingKey = e, this.settingValue = r;
    }
    return t;
  }()
);
function Er(t, e) {
  var r = "configcat-proxy/";
  if (e && t.length > r.length && t.lastIndexOf(r, 0) === 0)
    return !0;
  var n = t.split("/"), i = 22;
  switch (n.length) {
    case 2:
      return n[0].length === i && n[1].length === i;
    case 3:
      return n[0] === "configcat-sdk-1" && n[1].length === i && n[2].length === i;
    default:
      return !1;
  }
}
function he(t) {
  if (!t)
    throw new Error("Invalid 'key' value");
}
function ge(t) {
  if (t != null && !ee(t))
    throw new TypeError("The default value must be boolean, number, string, null or undefined.");
}
function ie(t) {
  return ee(t) ? t : Te(t);
}
var ae = function(t, e) {
  if (typeof FinalizationRegistry < "u") {
    var r = new FinalizationRegistry(function(n) {
      return De.finalize(n);
    });
    ae = function(n, i) {
      var s = {};
      return r.register(n, i, s), function() {
        return r.unregister(s);
      };
    };
  } else
    ae = function() {
      return function() {
      };
    };
  return ae(t, e);
};
Xt();
function Or(t, e, r, n) {
  return De.get(t, e, r, n);
}
function Nr(t) {
  return new St(t);
}
function Lr(t, e, r) {
  return new nr(new rr(t, r), e);
}
class Sr {
  handleStateChange(e, r, n) {
    try {
      if (e.readyState === 4) {
        const { status: i, statusText: s } = e;
        if (i === 200) {
          const o = e.getResponseHeader("ETag") ?? void 0;
          r({
            statusCode: i,
            reasonPhrase: s,
            eTag: o,
            body: e.responseText
          });
        } else
          i && r({ statusCode: i, reasonPhrase: s });
      }
    } catch (i) {
      n(i);
    }
  }
  fetchLogic(e, r) {
    return new Promise((n, i) => {
      try {
        e.logger.debug("HttpConfigFetcher.fetchLogic() called.");
        const s = new XMLHttpRequest();
        s.onreadystatechange = () => this.handleStateChange(s, n, i), s.ontimeout = () => i(new se("timeout", e.requestTimeoutMs)), s.onabort = () => i(new se("abort")), s.onerror = () => i(new se("failure"));
        let o = e.getUrl();
        r && (o += "&ccetag=" + encodeURIComponent(r)), s.open("GET", o, !0), s.timeout = e.requestTimeoutMs, s.send(null);
      } catch (s) {
        i(s);
      }
    });
  }
}
class ke {
  constructor(e) {
    this.storage = e;
  }
  static setup(e, r) {
    const n = (r ?? Ar)();
    return n && (e.defaultCacheFactory = (i) => new Ot(new ke(n), i.logger)), e;
  }
  set(e, r) {
    this.storage.setItem(e, br(r));
  }
  get(e) {
    const r = this.storage.getItem(e);
    if (r)
      return Tr(r);
  }
}
function Ar() {
  const t = "__configcat_localStorage_test";
  try {
    const e = window.localStorage;
    e.setItem(t, t);
    let r;
    try {
      r = e.getItem(t);
    } finally {
      e.removeItem(t);
    }
    if (r === t)
      return e;
  } catch {
  }
  return null;
}
function br(t) {
  return t = encodeURIComponent(t), t = t.replace(/%([0-9A-F]{2})/g, (e, r) => String.fromCharCode(parseInt(r, 16))), btoa(t);
}
function Tr(t) {
  return t = atob(t), t = t.replace(/[%\x80-\xFF]/g, (e) => "%" + e.charCodeAt(0).toString(16)), decodeURIComponent(t);
}
const Ir = "2.2.3", Rr = {
  // Vue's `App.prototype.use` does not play nicely with generic `install` functions, so we resort to using a discriminated union.
  install: (t, e) => {
    const { sdkKey: r, pollingMode: n, clientOptions: i } = e, s = ke.setup({
      sdkType: "ConfigCat-Vue",
      sdkVersion: Ir,
      configFetcher: new Sr()
    }), o = Or(
      r,
      n ?? H.AutoPoll,
      i,
      s
    );
    t.provide("configCatClient", o);
    const a = t.unmount;
    t.unmount = function() {
      a.apply(arguments), o.dispose();
    };
  }
}, Fr = /* @__PURE__ */ Ut({
  __name: "FeatureWrapper",
  props: {
    featureKey: {},
    userObject: {}
  },
  emits: ["flagValueChanged"],
  setup(t, { emit: e }) {
    const r = t, n = Mt(null), i = xt("configCatClient") ?? (() => {
      throw new Error("ConfigCatPlugin was not installed.");
    })(), s = () => {
      const a = i.snapshot().getValue(r.featureKey, !1, r.userObject);
      n.value !== a && (n.value = a, e("flagValueChanged", a));
    };
    return Wt(() => {
      const o = i.snapshot(), a = o.cacheState;
      a == C.HasUpToDateFlagData || a == C.HasLocalOverrideFlagDataOnly ? (n.value = o.getValue(
        r.featureKey,
        !1,
        r.userObject
      ), i.on("configChanged", s)) : i.getValueAsync(r.featureKey, !1, r.userObject).then((u) => {
        const l = s;
        l && (n.value = u, i.on("configChanged", l));
      });
    }), Vt(() => {
      i.off("configChanged", s);
    }), (o, a) => n.value === !0 ? pe(o.$slots, "default", { key: 0 }) : n.value === !1 ? pe(o.$slots, "else", { key: 1 }) : pe(o.$slots, "loading", { key: 2 });
  }
});
export {
  C as ClientCacheState,
  Rr as ConfigCatPlugin,
  le as DataGovernance,
  Fr as FeatureWrapper,
  T as FormattableLogMessage,
  p as LogLevel,
  R as OverrideBehaviour,
  H as PollingMode,
  K as PrerequisiteFlagComparator,
  ue as RefreshResult,
  W as SegmentComparator,
  $ as SettingKeyValue,
  x as SettingType,
  Cr as User,
  c as UserComparator,
  Nr as createConsoleLogger,
  Lr as createFlagOverridesFromMap
};
