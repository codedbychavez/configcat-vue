import { openBlock as we, createElementBlock as Se, renderSlot as Ae, createCommentVNode as Oe } from "vue";
const Ve = (n, e) => {
  const t = n.__vccOpts || n;
  for (const [i, a] of e)
    t[i] = a;
  return t;
}, Te = {
  props: {
    featureKey: {
      type: String,
      required: !0
    }
  },
  data() {
    return {
      isFeatureFlagEnabled: !1
    };
  },
  mounted() {
    this.configCatClient.getValueAsync(this.featureKey, !1).then((n) => {
      this.isFeatureFlagEnabled = n;
    });
  }
}, Le = { key: 0 };
function Re(n, e, t, i, a, r) {
  return a.isFeatureFlagEnabled ? (we(), Se("div", Le, [
    Ae(n.$slots, "default")
  ])) : Oe("", !0);
}
const st = /* @__PURE__ */ Ve(Te, [["render", Re]]);
var he = function() {
  function n(e) {
    this.SOURCE = "ConfigCat", this.level = V.Warn, e && (this.level = e);
  }
  return n.prototype.log = function(e) {
    this.info(e);
  }, n.prototype.debug = function(e) {
    this.isLogLevelEnabled(V.Debug) && console.info(this.SOURCE + " - DEBUG - " + e);
  }, n.prototype.info = function(e) {
    this.isLogLevelEnabled(V.Info) && console.info(this.SOURCE + " - INFO - " + e);
  }, n.prototype.warn = function(e) {
    this.isLogLevelEnabled(V.Warn) && console.warn(this.SOURCE + " - WARN - " + e);
  }, n.prototype.error = function(e) {
    this.isLogLevelEnabled(V.Error) && console.error(this.SOURCE + " - ERROR - " + e);
  }, n.prototype.isLogLevelEnabled = function(e) {
    return this.level >= e;
  }, n;
}(), _e = function() {
  function n() {
    this.cache = {};
  }
  return n.prototype.set = function(e, t) {
    this.cache[e] = t;
  }, n.prototype.get = function(e) {
    return this.cache[e];
  }, n;
}(), X = globalThis && globalThis.__extends || function() {
  var n = function(e, t) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, a) {
      i.__proto__ = a;
    } || function(i, a) {
      for (var r in a)
        Object.prototype.hasOwnProperty.call(a, r) && (i[r] = a[r]);
    }, n(e, t);
  };
  return function(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    n(e, t);
    function i() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (i.prototype = t.prototype, new i());
  };
}(), x;
(function(n) {
  n[n.Global = 0] = "Global", n[n.EuOnly = 1] = "EuOnly";
})(x || (x = {}));
var H = function() {
  function n(e, t, i, a) {
    var r;
    if (this.configFileName = "config_v5", this.logger = new he(V.Warn), this.requestTimeoutMs = 3e4, this.baseUrlOverriden = !1, this.proxy = "", !e)
      throw new Error("Invalid 'apiKey' value");
    switch (a || (a = new _e()), this.apiKey = e, this.clientVersion = t, this.dataGovernance = (r = i == null ? void 0 : i.dataGovernance) !== null && r !== void 0 ? r : x.Global, this.cache = a, this.dataGovernance) {
      case x.EuOnly:
        this.baseUrl = "https://cdn-eu.configcat.com";
        break;
      default:
        this.baseUrl = "https://cdn-global.configcat.com";
        break;
    }
    if (i) {
      if (i.logger && (this.logger = i.logger), i.requestTimeoutMs) {
        if (i.requestTimeoutMs < 0)
          throw new Error("Invalid 'requestTimeoutMs' value");
        this.requestTimeoutMs = i.requestTimeoutMs;
      }
      i.baseUrl && (this.baseUrl = i.baseUrl, this.baseUrlOverriden = !0), i.proxy && (this.proxy = i.proxy), i.cache && (this.cache = i.cache), i.flagOverrides && (this.flagOverrides = i.flagOverrides), i.defaultUser && (this.defaultUser = i.defaultUser);
    }
  }
  return n.prototype.getUrl = function() {
    return this.baseUrl + "/configuration-files/" + this.apiKey + "/" + this.configFileName + ".json?sdk=" + this.clientVersion;
  }, n.prototype.getCacheKey = function() {
    return "js_" + this.configFileName + "_" + this.apiKey;
  }, n;
}(), ge = function(n) {
  X(e, n);
  function e(t, i, a, r, s) {
    var l = n.call(this, t, i + "/a-" + a, r, s) || this;
    if (l.pollIntervalSeconds = 60, l.configChanged = function() {
    }, l.maxInitWaitTimeSeconds = 5, r && (r.pollIntervalSeconds !== void 0 && r.pollIntervalSeconds !== null && (l.pollIntervalSeconds = r.pollIntervalSeconds), r.configChanged && (l.configChanged = r.configChanged), r.maxInitWaitTimeSeconds !== void 0 && r.maxInitWaitTimeSeconds !== null && (l.maxInitWaitTimeSeconds = r.maxInitWaitTimeSeconds)), l.pollIntervalSeconds < 1)
      throw new Error("Invalid 'pollIntervalSeconds' value");
    if (l.maxInitWaitTimeSeconds < 0)
      throw new Error("Invalid 'maxInitWaitTimeSeconds' value");
    return l;
  }
  return e;
}(H), de = function(n) {
  X(e, n);
  function e(t, i, a, r, s) {
    return n.call(this, t, i + "/m-" + a, r, s) || this;
  }
  return e;
}(H), ve = function(n) {
  X(e, n);
  function e(t, i, a, r, s) {
    var l = n.call(this, t, i + "/l-" + a, r, s) || this;
    if (l.cacheTimeToLiveSeconds = 60, r && r.cacheTimeToLiveSeconds && (l.cacheTimeToLiveSeconds = r.cacheTimeToLiveSeconds), !l.cacheTimeToLiveSeconds || l.cacheTimeToLiveSeconds < 1)
      throw new Error("Invalid 'cacheTimeToLiveSeconds' value. Value must be greater than zero.");
    return l;
  }
  return e;
}(H), W = function() {
  function n(e, t, i) {
    this.Timestamp = e, this.ConfigJSON = JSON.parse(t), this.HttpETag = i;
  }
  return n.equals = function(e, t) {
    return !e || !t ? !1 : this.compareEtags(e.HttpETag, t.HttpETag);
  }, n.compareEtags = function(e, t) {
    return this.ensureStrictEtag(e) === this.ensureStrictEtag(t);
  }, n.ensureStrictEtag = function(e) {
    return e ? e.length > 2 && e.substr(0, 2).toLocaleUpperCase() === "W/" ? e.substring(2) : e : "";
  }, n;
}(), Y = function() {
  function n() {
  }
  return n.Preferences = "p", n.FeatureFlags = "f", n;
}(), ne = function() {
  function n() {
  }
  return n.BaseUrl = "u", n.Redirect = "r", n;
}(), Ne = function() {
  function n(e, t, i, a) {
    this.value = e, this.rolloutPercentageItems = t, this.rolloutRules = i, this.variationId = a;
  }
  return n.fromJson = function(e) {
    var t, i, a, r;
    return new n(e[this.Value], (i = (t = e[this.RolloutPercentageItems]) === null || t === void 0 ? void 0 : t.map(function(s) {
      return xe.fromJson(s);
    })) !== null && i !== void 0 ? i : [], (r = (a = e[this.RolloutRules]) === null || a === void 0 ? void 0 : a.map(function(s) {
      return Pe.fromJson(s);
    })) !== null && r !== void 0 ? r : [], e[this.VariationId]);
  }, n.Value = "v", n.SettingType = "t", n.RolloutPercentageItems = "p", n.RolloutRules = "r", n.VariationId = "i", n;
}(), Pe = function() {
  function n(e, t, i, a, r) {
    this.comparisonAttribute = e, this.comparator = t, this.comparisonValue = i, this.value = a, this.variationId = r;
  }
  return n.fromJson = function(e) {
    return new n(e[this.ComparisonAttribute], e[this.Comparator], e[this.ComparisonValue], e[this.Value], e[this.VariationId]);
  }, n.Order = "o", n.ComparisonAttribute = "a", n.Comparator = "t", n.ComparisonValue = "c", n.Value = "v", n.VariationId = "i", n;
}(), xe = function() {
  function n(e, t, i) {
    this.percentage = e, this.value = t, this.variationId = i;
  }
  return n.fromJson = function(e) {
    return new n(e[this.Percentage], e[this.Value], e[this.VariationId]);
  }, n.Order = "o", n.Value = "v", n.Percentage = "p", n.VariationId = "i", n;
}(), Fe = globalThis && globalThis.__awaiter || function(n, e, t, i) {
  function a(r) {
    return r instanceof t ? r : new t(function(s) {
      s(r);
    });
  }
  return new (t || (t = Promise))(function(r, s) {
    function l(u) {
      try {
        o(i.next(u));
      } catch (h) {
        s(h);
      }
    }
    function c(u) {
      try {
        o(i.throw(u));
      } catch (h) {
        s(h);
      }
    }
    function o(u) {
      u.done ? r(u.value) : a(u.value).then(l, c);
    }
    o((i = i.apply(n, e || [])).next());
  });
}, ke = globalThis && globalThis.__generator || function(n, e) {
  var t = { label: 0, sent: function() {
    if (r[0] & 1)
      throw r[1];
    return r[1];
  }, trys: [], ops: [] }, i, a, r, s;
  return s = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function l(o) {
    return function(u) {
      return c([o, u]);
    };
  }
  function c(o) {
    if (i)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (i = 1, a && (r = o[0] & 2 ? a.return : o[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, o[1])).done)
          return r;
        switch (a = 0, r && (o = [o[0] & 2, r.value]), o[0]) {
          case 0:
          case 1:
            r = o;
            break;
          case 4:
            return t.label++, { value: o[1], done: !1 };
          case 5:
            t.label++, a = o[1], o = [0];
            continue;
          case 7:
            o = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (r = t.trys, !(r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
              t = 0;
              continue;
            }
            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
              t.label = o[1];
              break;
            }
            if (o[0] === 6 && t.label < r[1]) {
              t.label = r[1], r = o;
              break;
            }
            if (r && t.label < r[2]) {
              t.label = r[2], t.ops.push(o);
              break;
            }
            r[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        o = e.call(n, t);
      } catch (u) {
        o = [6, u], a = 0;
      } finally {
        i = r = 0;
      }
    if (o[0] & 5)
      throw o[1];
    return { value: o[0] ? o[1] : void 0, done: !0 };
  }
}, Z = function() {
  function n(e, t) {
    this.fetchLogicCallbacks = [], this.configFetcher = e, this.baseConfig = t;
  }
  return n.prototype.refreshLogicBaseAsync = function(e, t) {
    var i = this;
    return t === void 0 && (t = !0), this.baseConfig.logger.debug("ConfigServiceBase.refreshLogicBaseAsync() - called."), new Promise(function(a) {
      var r;
      i.fetchLogic(i.baseConfig, (r = e == null ? void 0 : e.HttpETag) !== null && r !== void 0 ? r : null, 0, function(s) {
        return Fe(i, void 0, void 0, function() {
          return ke(this, function(l) {
            switch (l.label) {
              case 0:
                return s && s.ConfigJSON ? (this.baseConfig.logger.debug("ConfigServiceBase.refreshLogicBaseAsync() - fetchLogic() success, returning config."), [4, this.baseConfig.cache.set(this.baseConfig.getCacheKey(), s)]) : [3, 2];
              case 1:
                return l.sent(), a(s), [3, 5];
              case 2:
                return t && e && e.ConfigJSON ? (this.baseConfig.logger.debug("ConfigServiceBase.refreshLogicBaseAsync() - fetchLogic() didn't return a config, setting the cache with last config with new timestamp, returning last config."), e.Timestamp = new Date().getTime(), [4, this.baseConfig.cache.set(this.baseConfig.getCacheKey(), e)]) : [3, 4];
              case 3:
                return l.sent(), a(e), [3, 5];
              case 4:
                this.baseConfig.logger.debug("ConfigServiceBase.refreshLogicBaseAsync() - fetchLogic() didn't return a config, returing last config."), a(e), l.label = 5;
              case 5:
                return [2];
            }
          });
        });
      });
    });
  }, n.prototype.fetchLogic = function(e, t, i, a) {
    var r = this;
    this.baseConfig.logger.debug("ConfigServiceBase.fetchLogic() - called.");
    var s = this.baseConfig.baseUrl;
    this.fetchLogicInternal(this.baseConfig, t, i, function(l) {
      if (r.baseConfig.logger.debug("ConfigServiceBase.fetchLogic(): result.status: " + (l == null ? void 0 : l.status)), !l || l.status != P.Fetched || W.compareEtags(t ?? "", l.eTag)) {
        r.baseConfig.logger.debug("ConfigServiceBase.fetchLogic(): result.status != FetchStatus.Fetched or etags are the same. Returning null."), a(null);
        return;
      }
      if (!l.responseBody) {
        r.baseConfig.logger.debug("ConfigServiceBase.fetchLogic(): no response body. Returning null."), a(null);
        return;
      }
      var c = new W(new Date().getTime(), l.responseBody, l.eTag), o = c.ConfigJSON[Y.Preferences];
      if (!o) {
        r.baseConfig.logger.debug("ConfigServiceBase.fetchLogic(): preferences is empty. Returning newConfig."), a(c);
        return;
      }
      var u = o[ne.BaseUrl];
      if (!u || u == s) {
        r.baseConfig.logger.debug("ConfigServiceBase.fetchLogic(): baseUrl OK. Returning newConfig."), a(c);
        return;
      }
      var h = o[ne.Redirect];
      if (e.baseUrlOverriden && h !== 2) {
        r.baseConfig.logger.debug("ConfigServiceBase.fetchLogic(): options.baseUrlOverriden && redirect !== 2."), a(c);
        return;
      }
      if (e.baseUrl = u, h === 0) {
        a(c);
        return;
      }
      if (h === 1 && e.logger.warn("Your dataGovernance parameter at ConfigCatClient initialization is not in sync with your preferences on the ConfigCat Dashboard: https://app.configcat.com/organization/data-governance. Only Organization Admins can access this preference."), i >= 2) {
        e.logger.error("Redirect loop during config.json fetch. Please contact support@configcat.com."), a(c);
        return;
      }
      r.fetchLogic(e, t, ++i, a);
    });
  }, n.prototype.fetchLogicInternal = function(e, t, i, a) {
    var r = this;
    if (this.baseConfig.logger.debug("ConfigServiceBase.fetchLogicInternal(): called."), i === 0) {
      if (this.fetchLogicCallbacks.push(a), this.fetchLogicCallbacks.length > 1) {
        this.baseConfig.logger.debug("ConfigServiceBase.fetchLogicInternal(): The first fetchLogic call is already in progress. this.fetchLogicCallbacks.length = " + this.fetchLogicCallbacks.length);
        return;
      }
      this.baseConfig.logger.debug("ConfigServiceBase.fetchLogicInternal(): Calling fetchLogic"), this.configFetcher.fetchLogic(e, t, function(s) {
        for (r.baseConfig.logger.debug("ConfigServiceBase.fetchLogicInternal(): fetchLogic() success, calling callbacks. this.fetchLogicCallbacks.length = " + r.fetchLogicCallbacks.length); r.fetchLogicCallbacks.length; ) {
          var l = r.fetchLogicCallbacks.pop();
          l && (r.baseConfig.logger.debug("ConfigServiceBase.fetchLogicInternal(): fetchLogic() success, calling callback."), l(s));
        }
      });
    } else
      this.baseConfig.logger.debug("ConfigServiceBase.fetchLogicInternal(): calling fetchLogic(), recursive call. retries = " + i), this.configFetcher.fetchLogic(e, t, a);
  }, n;
}(), Ue = globalThis && globalThis.__extends || function() {
  var n = function(e, t) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, a) {
      i.__proto__ = a;
    } || function(i, a) {
      for (var r in a)
        Object.prototype.hasOwnProperty.call(a, r) && (i[r] = a[r]);
    }, n(e, t);
  };
  return function(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    n(e, t);
    function i() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (i.prototype = t.prototype, new i());
  };
}(), $ = globalThis && globalThis.__awaiter || function(n, e, t, i) {
  function a(r) {
    return r instanceof t ? r : new t(function(s) {
      s(r);
    });
  }
  return new (t || (t = Promise))(function(r, s) {
    function l(u) {
      try {
        o(i.next(u));
      } catch (h) {
        s(h);
      }
    }
    function c(u) {
      try {
        o(i.throw(u));
      } catch (h) {
        s(h);
      }
    }
    function o(u) {
      u.done ? r(u.value) : a(u.value).then(l, c);
    }
    o((i = i.apply(n, e || [])).next());
  });
}, K = globalThis && globalThis.__generator || function(n, e) {
  var t = { label: 0, sent: function() {
    if (r[0] & 1)
      throw r[1];
    return r[1];
  }, trys: [], ops: [] }, i, a, r, s;
  return s = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function l(o) {
    return function(u) {
      return c([o, u]);
    };
  }
  function c(o) {
    if (i)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (i = 1, a && (r = o[0] & 2 ? a.return : o[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, o[1])).done)
          return r;
        switch (a = 0, r && (o = [o[0] & 2, r.value]), o[0]) {
          case 0:
          case 1:
            r = o;
            break;
          case 4:
            return t.label++, { value: o[1], done: !1 };
          case 5:
            t.label++, a = o[1], o = [0];
            continue;
          case 7:
            o = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (r = t.trys, !(r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
              t = 0;
              continue;
            }
            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
              t.label = o[1];
              break;
            }
            if (o[0] === 6 && t.label < r[1]) {
              t.label = r[1], r = o;
              break;
            }
            if (r && t.label < r[2]) {
              t.label = r[2], t.ops.push(o);
              break;
            }
            r[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        o = e.call(n, t);
      } catch (u) {
        o = [6, u], a = 0;
      } finally {
        i = r = 0;
      }
    if (o[0] & 5)
      throw o[1];
    return { value: o[0] ? o[1] : void 0, done: !0 };
  }
}, ie = function(n) {
  Ue(e, n);
  function e(t, i) {
    var a = n.call(this, t, i) || this;
    return a.disposed = !1, a.configChanged = i.configChanged, a.autoPollConfig = i, a.startRefreshWorker(i.pollIntervalSeconds * 1e3), a.maxInitWaitTimeStamp = new Date().getTime() + i.maxInitWaitTimeSeconds * 1e3, a;
  }
  return e.prototype.getConfig = function() {
    return $(this, void 0, void 0, function() {
      var t;
      return K(this, function(i) {
        switch (i.label) {
          case 0:
            return this.autoPollConfig.logger.debug("AutoPollConfigService.getConfig() called."), [4, this.tryReadFromCache(0)];
          case 1:
            return t = i.sent(), t ? (this.autoPollConfig.logger.debug("AutoPollConfigService.getConfig() - returning value from cache."), [2, new Promise(function(a) {
              return a(t);
            })]) : (this.autoPollConfig.logger.debug("AutoPollConfigService.getConfig() - cache is empty, refreshing the cache."), [2, this.refreshLogic(!0)]);
        }
      });
    });
  }, e.prototype.refreshConfigAsync = function() {
    return this.autoPollConfig.logger.debug("AutoPollConfigService.refreshConfigAsync() called."), this.refreshLogic(!0);
  }, e.prototype.dispose = function() {
    this.autoPollConfig.logger.debug("AutoPollConfigService.dispose() called."), this.disposed = !0, this.timerId && (this.autoPollConfig.logger.debug("AutoPollConfigService.dispose() - clearing setTimeout."), clearTimeout(this.timerId));
  }, e.prototype.refreshLogic = function(t) {
    var i = this;
    return this.autoPollConfig.logger.debug("AutoPollConfigService.refreshLogic() - called."), new Promise(function(a) {
      return $(i, void 0, void 0, function() {
        var r, s, l, c;
        return K(this, function(o) {
          switch (o.label) {
            case 0:
              return [4, this.baseConfig.cache.get(this.baseConfig.getCacheKey())];
            case 1:
              return r = o.sent(), [4, this.refreshLogicBaseAsync(r, t)];
            case 2:
              return s = o.sent(), l = !r && s, c = r && s && !W.equals(r, s), this.autoPollConfig.logger.debug("AutoPollConfigService.refreshLogic() - weDontHaveCachedYetButHaveNew: ." + l + ". weHaveBothButTheyDiffers: " + c + "."), (l || c) && this.configChanged(), a(s), [2];
          }
        });
      });
    });
  }, e.prototype.startRefreshWorker = function(t) {
    var i = this;
    this.autoPollConfig.logger.debug("AutoPollConfigService.startRefreshWorker() called."), this.refreshLogic(!0).then(function(a) {
      i.autoPollConfig.logger.debug("AutoPollConfigService.startRefreshWorker() - calling refreshWorkerLogic()'s setTimeout."), setTimeout(function() {
        return i.refreshWorkerLogic(t);
      }, t);
    });
  }, e.prototype.refreshWorkerLogic = function(t) {
    var i = this;
    if (this.disposed) {
      this.autoPollConfig.logger.debug("AutoPollConfigService.refreshWorkerLogic() - called on a disposed client.");
      return;
    }
    this.autoPollConfig.logger.debug("AutoPollConfigService.refreshWorkerLogic() - called."), this.refreshLogic(!1).then(function(a) {
      i.autoPollConfig.logger.debug("AutoPollConfigService.refreshWorkerLogic() - calling refreshWorkerLogic()'s setTimeout."), i.timerId = setTimeout(function() {
        i.refreshWorkerLogic(t);
      }, t);
    });
  }, e.prototype.tryReadFromCache = function(t) {
    return $(this, void 0, void 0, function() {
      var i, a, r;
      return K(this, function(s) {
        switch (s.label) {
          case 0:
            return this.autoPollConfig.logger.debug("AutoPollConfigService.tryReadFromCache() - called. Tries: " + t + "."), [4, this.baseConfig.cache.get(this.baseConfig.getCacheKey())];
          case 1:
            return i = s.sent(), this.maxInitWaitTimeStamp > new Date().getTime() && (!i || i.Timestamp < new Date().getTime() - this.autoPollConfig.pollIntervalSeconds * 1e3) ? (i ? this.autoPollConfig.logger.debug("AutoPollConfigService.tryReadFromCache() - waiting for maxInitWaitTimeStamp because cache is expired.") : this.autoPollConfig.logger.debug("AutoPollConfigService.tryReadFromCache() - waiting for maxInitWaitTimeStamp because cache is empty."), a = this.maxInitWaitTimeStamp - new Date().getTime(), r = 30 + t * t * 20, [4, this.sleep(Math.min(a, r))]) : [3, 3];
          case 2:
            return s.sent(), t++, [2, this.tryReadFromCache(t)];
          case 3:
            return this.autoPollConfig.logger.debug("AutoPollConfigService.tryReadFromCache() - returning value from cache."), [2, new Promise(function(l) {
              return l(i);
            })];
        }
      });
    });
  }, e.prototype.sleep = function(t) {
    return new Promise(function(i) {
      return setTimeout(i, t);
    });
  }, e;
}(Z), De = globalThis && globalThis.__extends || function() {
  var n = function(e, t) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, a) {
      i.__proto__ = a;
    } || function(i, a) {
      for (var r in a)
        Object.prototype.hasOwnProperty.call(a, r) && (i[r] = a[r]);
    }, n(e, t);
  };
  return function(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    n(e, t);
    function i() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (i.prototype = t.prototype, new i());
  };
}(), ae = globalThis && globalThis.__awaiter || function(n, e, t, i) {
  function a(r) {
    return r instanceof t ? r : new t(function(s) {
      s(r);
    });
  }
  return new (t || (t = Promise))(function(r, s) {
    function l(u) {
      try {
        o(i.next(u));
      } catch (h) {
        s(h);
      }
    }
    function c(u) {
      try {
        o(i.throw(u));
      } catch (h) {
        s(h);
      }
    }
    function o(u) {
      u.done ? r(u.value) : a(u.value).then(l, c);
    }
    o((i = i.apply(n, e || [])).next());
  });
}, oe = globalThis && globalThis.__generator || function(n, e) {
  var t = { label: 0, sent: function() {
    if (r[0] & 1)
      throw r[1];
    return r[1];
  }, trys: [], ops: [] }, i, a, r, s;
  return s = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function l(o) {
    return function(u) {
      return c([o, u]);
    };
  }
  function c(o) {
    if (i)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (i = 1, a && (r = o[0] & 2 ? a.return : o[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, o[1])).done)
          return r;
        switch (a = 0, r && (o = [o[0] & 2, r.value]), o[0]) {
          case 0:
          case 1:
            r = o;
            break;
          case 4:
            return t.label++, { value: o[1], done: !1 };
          case 5:
            t.label++, a = o[1], o = [0];
            continue;
          case 7:
            o = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (r = t.trys, !(r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
              t = 0;
              continue;
            }
            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
              t.label = o[1];
              break;
            }
            if (o[0] === 6 && t.label < r[1]) {
              t.label = r[1], r = o;
              break;
            }
            if (r && t.label < r[2]) {
              t.label = r[2], t.ops.push(o);
              break;
            }
            r[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        o = e.call(n, t);
      } catch (u) {
        o = [6, u], a = 0;
      } finally {
        i = r = 0;
      }
    if (o[0] & 5)
      throw o[1];
    return { value: o[0] ? o[1] : void 0, done: !0 };
  }
}, Me = function(n) {
  De(e, n);
  function e(t, i) {
    var a = n.call(this, t, i) || this;
    return a.cacheTimeToLiveSeconds = i.cacheTimeToLiveSeconds, a;
  }
  return e.prototype.getConfig = function() {
    return ae(this, void 0, void 0, function() {
      var t;
      return oe(this, function(i) {
        switch (i.label) {
          case 0:
            return this.baseConfig.logger.debug("LazyLoadConfigService.getConfig() called."), [4, this.baseConfig.cache.get(this.baseConfig.getCacheKey())];
          case 1:
            return t = i.sent(), t && t.Timestamp + this.cacheTimeToLiveSeconds * 1e3 > new Date().getTime() ? (this.baseConfig.logger.debug("LazyLoadConfigService.getConfig(): cache is valid, returning from cache."), [2, t]) : (this.baseConfig.logger.debug("LazyLoadConfigService.getConfig(): cache is empty or expired, calling refreshLogicBaseAsync()."), [2, this.refreshLogicBaseAsync(t)]);
        }
      });
    });
  }, e.prototype.refreshConfigAsync = function() {
    return ae(this, void 0, void 0, function() {
      var t;
      return oe(this, function(i) {
        switch (i.label) {
          case 0:
            return this.baseConfig.logger.debug("LazyLoadConfigService.refreshConfigAsync() called."), [4, this.baseConfig.cache.get(this.baseConfig.getCacheKey())];
          case 1:
            return t = i.sent(), [2, this.refreshLogicBaseAsync(t)];
        }
      });
    });
  }, e;
}(Z), Be = globalThis && globalThis.__extends || function() {
  var n = function(e, t) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, a) {
      i.__proto__ = a;
    } || function(i, a) {
      for (var r in a)
        Object.prototype.hasOwnProperty.call(a, r) && (i[r] = a[r]);
    }, n(e, t);
  };
  return function(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    n(e, t);
    function i() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (i.prototype = t.prototype, new i());
  };
}(), se = globalThis && globalThis.__awaiter || function(n, e, t, i) {
  function a(r) {
    return r instanceof t ? r : new t(function(s) {
      s(r);
    });
  }
  return new (t || (t = Promise))(function(r, s) {
    function l(u) {
      try {
        o(i.next(u));
      } catch (h) {
        s(h);
      }
    }
    function c(u) {
      try {
        o(i.throw(u));
      } catch (h) {
        s(h);
      }
    }
    function o(u) {
      u.done ? r(u.value) : a(u.value).then(l, c);
    }
    o((i = i.apply(n, e || [])).next());
  });
}, le = globalThis && globalThis.__generator || function(n, e) {
  var t = { label: 0, sent: function() {
    if (r[0] & 1)
      throw r[1];
    return r[1];
  }, trys: [], ops: [] }, i, a, r, s;
  return s = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function l(o) {
    return function(u) {
      return c([o, u]);
    };
  }
  function c(o) {
    if (i)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (i = 1, a && (r = o[0] & 2 ? a.return : o[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, o[1])).done)
          return r;
        switch (a = 0, r && (o = [o[0] & 2, r.value]), o[0]) {
          case 0:
          case 1:
            r = o;
            break;
          case 4:
            return t.label++, { value: o[1], done: !1 };
          case 5:
            t.label++, a = o[1], o = [0];
            continue;
          case 7:
            o = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (r = t.trys, !(r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
              t = 0;
              continue;
            }
            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
              t.label = o[1];
              break;
            }
            if (o[0] === 6 && t.label < r[1]) {
              t.label = r[1], r = o;
              break;
            }
            if (r && t.label < r[2]) {
              t.label = r[2], t.ops.push(o);
              break;
            }
            r[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        o = e.call(n, t);
      } catch (u) {
        o = [6, u], a = 0;
      } finally {
        i = r = 0;
      }
    if (o[0] & 5)
      throw o[1];
    return { value: o[0] ? o[1] : void 0, done: !0 };
  }
}, We = function(n) {
  Be(e, n);
  function e(t, i) {
    return n.call(this, t, i) || this;
  }
  return e.prototype.getConfig = function() {
    return se(this, void 0, void 0, function() {
      return le(this, function(t) {
        switch (t.label) {
          case 0:
            return this.baseConfig.logger.debug("ManualPollService.getConfig() called."), [4, this.baseConfig.cache.get(this.baseConfig.getCacheKey())];
          case 1:
            return [2, t.sent()];
        }
      });
    });
  }, e.prototype.refreshConfigAsync = function() {
    return se(this, void 0, void 0, function() {
      var t;
      return le(this, function(i) {
        switch (i.label) {
          case 0:
            return this.baseConfig.logger.debug("ManualPollService.refreshConfigAsync() called."), [4, this.baseConfig.cache.get(this.baseConfig.getCacheKey())];
          case 1:
            return t = i.sent(), [2, this.refreshLogicBaseAsync(t)];
        }
      });
    });
  }, e;
}(Z);
function G(n) {
  function e(O, C) {
    var L = O << C | O >>> 32 - C;
    return L;
  }
  function t(O) {
    for (var C = "", L, E = 7; E >= 0; E--)
      L = O >>> E * 4 & 15, C += L.toString(16);
    return C;
  }
  function i(O) {
    O = O.replace(/\r\n/g, `
`);
    for (var C = "", L = 0; L < O.length; L++) {
      var E = O.charCodeAt(L);
      E < 128 ? C += String.fromCharCode(E) : E > 127 && E < 2048 ? (C += String.fromCharCode(E >> 6 | 192), C += String.fromCharCode(E & 63 | 128)) : (C += String.fromCharCode(E >> 12 | 224), C += String.fromCharCode(E >> 6 & 63 | 128), C += String.fromCharCode(E & 63 | 128));
    }
    return C;
  }
  var a, r, s, l = new Array(80), c = 1732584193, o = 4023233417, u = 2562383102, h = 271733878, A = 3285377520, v, f, y, p, m, I;
  n = i(n);
  var w = n.length, T = new Array();
  for (r = 0; r < w - 3; r += 4)
    s = n.charCodeAt(r) << 24 | n.charCodeAt(r + 1) << 16 | n.charCodeAt(r + 2) << 8 | n.charCodeAt(r + 3), T.push(s);
  switch (w % 4) {
    case 0:
      r = 2147483648;
      break;
    case 1:
      r = n.charCodeAt(w - 1) << 24 | 8388608;
      break;
    case 2:
      r = n.charCodeAt(w - 2) << 24 | n.charCodeAt(w - 1) << 16 | 32768;
      break;
    case 3:
      r = n.charCodeAt(w - 3) << 24 | n.charCodeAt(w - 2) << 16 | n.charCodeAt(w - 1) << 8 | 128;
      break;
  }
  for (T.push(r); T.length % 16 != 14; )
    T.push(0);
  for (T.push(w >>> 29), T.push(w << 3 & 4294967295), a = 0; a < T.length; a += 16) {
    for (r = 0; r < 16; r++)
      l[r] = T[a + r];
    for (r = 16; r <= 79; r++)
      l[r] = e(l[r - 3] ^ l[r - 8] ^ l[r - 14] ^ l[r - 16], 1);
    for (v = c, f = o, y = u, p = h, m = A, r = 0; r <= 19; r++)
      I = e(v, 5) + (f & y | ~f & p) + m + l[r] + 1518500249 & 4294967295, m = p, p = y, y = e(f, 30), f = v, v = I;
    for (r = 20; r <= 39; r++)
      I = e(v, 5) + (f ^ y ^ p) + m + l[r] + 1859775393 & 4294967295, m = p, p = y, y = e(f, 30), f = v, v = I;
    for (r = 40; r <= 59; r++)
      I = e(v, 5) + (f & y | f & p | y & p) + m + l[r] + 2400959708 & 4294967295, m = p, p = y, y = e(f, 30), f = v, v = I;
    for (r = 60; r <= 79; r++)
      I = e(v, 5) + (f ^ y ^ p) + m + l[r] + 3395469782 & 4294967295, m = p, p = y, y = e(f, 30), f = v, v = I;
    c = c + v & 4294967295, o = o + f & 4294967295, u = u + y & 4294967295, h = h + p & 4294967295, A = A + m & 4294967295;
  }
  return (t(c) + t(o) + t(u) + t(h) + t(A)).toLowerCase();
}
var ue = /^[0-9]+$/, U = function(n, e) {
  var t = ue.test(n), i = ue.test(e);
  return t && i && (n = +n, e = +e), n === e ? 0 : t && !i ? -1 : i && !t ? 1 : n < e ? -1 : 1;
}, z = 256, M = Number.MAX_SAFE_INTEGER || 9007199254740991, D = [], d = [], g = {}, je = 0, b = function(n, e) {
  var t = je++;
  g[n] = t, d[t] = e, D[t] = new RegExp(e, void 0);
};
b("NUMERICIDENTIFIER", "0|[1-9]\\d*");
b("NUMERICIDENTIFIERLOOSE", "[0-9]+");
b("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*");
b("MAINVERSION", "(".concat(d[g.NUMERICIDENTIFIER], ")\\.") + "(".concat(d[g.NUMERICIDENTIFIER], ")\\.") + "(".concat(d[g.NUMERICIDENTIFIER], ")"));
b("MAINVERSIONLOOSE", "(".concat(d[g.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(d[g.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(d[g.NUMERICIDENTIFIERLOOSE], ")"));
b("PRERELEASEIDENTIFIER", "(?:".concat(d[g.NUMERICIDENTIFIER], "|").concat(d[g.NONNUMERICIDENTIFIER], ")"));
b("PRERELEASEIDENTIFIERLOOSE", "(?:".concat(d[g.NUMERICIDENTIFIERLOOSE], "|").concat(d[g.NONNUMERICIDENTIFIER], ")"));
b("PRERELEASE", "(?:-(".concat(d[g.PRERELEASEIDENTIFIER], "(?:\\.").concat(d[g.PRERELEASEIDENTIFIER], ")*))"));
b("PRERELEASELOOSE", "(?:-?(".concat(d[g.PRERELEASEIDENTIFIERLOOSE], "(?:\\.").concat(d[g.PRERELEASEIDENTIFIERLOOSE], ")*))"));
b("BUILDIDENTIFIER", "[0-9A-Za-z-]+");
b("BUILD", "(?:\\+(".concat(d[g.BUILDIDENTIFIER], "(?:\\.").concat(d[g.BUILDIDENTIFIER], ")*))"));
b("FULLPLAIN", "v?".concat(d[g.MAINVERSION]).concat(d[g.PRERELEASE], "?").concat(d[g.BUILD], "?"));
b("FULL", "^".concat(d[g.FULLPLAIN], "$"));
b("LOOSEPLAIN", "[v=\\s]*".concat(d[g.MAINVERSIONLOOSE]).concat(d[g.PRERELEASELOOSE], "?").concat(d[g.BUILD], "?"));
b("LOOSE", "^".concat(d[g.LOOSEPLAIN], "$"));
var j = function() {
  function n(e, t) {
    if ((!t || typeof t != "object") && (t = {
      loose: !!t,
      includePrerelease: !1
    }), e instanceof n) {
      if (e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease)
        return e;
      e = e.version;
    } else if (typeof e != "string")
      throw new TypeError("Invalid Version: ".concat(e));
    if (e.length > z)
      throw new TypeError("version is longer than ".concat(z, " characters"));
    this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease;
    var i = e.trim().match(t.loose ? D[g.LOOSE] : D[g.FULL]);
    if (!i)
      throw new TypeError("Invalid Version: ".concat(e));
    if (this.raw = e, this.major = +i[1], this.minor = +i[2], this.patch = +i[3], this.major > M || this.major < 0)
      throw new TypeError("Invalid major version");
    if (this.minor > M || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > M || this.patch < 0)
      throw new TypeError("Invalid patch version");
    i[4] ? this.prerelease = i[4].split(".").map(function(a) {
      if (/^[0-9]+$/.test(a)) {
        var r = +a;
        if (r >= 0 && r < M)
          return r;
      }
      return a;
    }) : this.prerelease = [], this.build = i[5] ? i[5].split(".") : [], this.format();
  }
  return n.prototype.format = function() {
    return this.version = "".concat(this.major, ".").concat(this.minor, ".").concat(this.patch), this.prerelease.length && (this.version += "-".concat(this.prerelease.join("."))), this.version;
  }, n.prototype.toString = function() {
    return this.version;
  }, n.prototype.compare = function(e) {
    if (!(e instanceof n)) {
      if (typeof e == "string" && e === this.version)
        return 0;
      e = new n(e, this.options);
    }
    return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e);
  }, n.prototype.compareMain = function(e) {
    return e instanceof n || (e = new n(e, this.options)), U(this.major, e.major) || U(this.minor, e.minor) || U(this.patch, e.patch);
  }, n.prototype.comparePre = function(e) {
    if (e instanceof n || (e = new n(e, this.options)), this.prerelease.length && !e.prerelease.length)
      return -1;
    if (!this.prerelease.length && e.prerelease.length)
      return 1;
    if (!this.prerelease.length && !e.prerelease.length)
      return 0;
    var t = 0;
    do {
      var i = this.prerelease[t], a = e.prerelease[t];
      if (i === void 0 && a === void 0)
        return 0;
      if (a === void 0)
        return 1;
      if (i === void 0)
        return -1;
      if (i === a)
        continue;
      return U(i, a);
    } while (++t);
  }, n.prototype.compareBuild = function(e) {
    e instanceof n || (e = new n(e, this.options));
    var t = 0;
    do {
      var i = this.build[t], a = e.build[t];
      if (i === void 0 && a === void 0)
        return 0;
      if (a === void 0)
        return 1;
      if (i === void 0)
        return -1;
      if (i === a)
        continue;
      return U(i, a);
    } while (++t);
  }, n.prototype.inc = function(e, t) {
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
          for (var i = this.prerelease.length; --i >= 0; )
            typeof this.prerelease[i] == "number" && (this.prerelease[i]++, i = -2);
          i === -1 && this.prerelease.push(0);
        }
        t && (this.prerelease[0] === t ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0]) : this.prerelease = [t, 0]);
        break;
      default:
        throw new Error("invalid increment argument: ".concat(e));
    }
    return this.format(), this.raw = this.version, this;
  }, n;
}(), He = function(n, e) {
  if ((!e || typeof e != "object") && (e = {
    loose: !!e,
    includePrerelease: !1
  }), n instanceof j)
    return n;
  if (typeof n != "string" || n.length > z)
    return null;
  var t = e.loose ? D[g.LOOSE] : D[g.FULL];
  if (!t.test(n))
    return null;
  try {
    return new j(n, e);
  } catch {
    return null;
  }
}, k = function(n, e, t) {
  return new j(n, t).compare(new j(e, t));
}, N = function(n) {
  var e = He(n, !1);
  return e ? e.version : null;
}, $e = function(n, e) {
  return k(n, e, !0) === 0;
}, Ke = function(n, e) {
  return k(n, e, !1) === 0;
}, Ge = function(n, e) {
  return k(n, e, !1) < 0;
}, Je = function(n, e) {
  return k(n, e, !1) <= 0;
}, ze = function(n, e) {
  return k(n, e, !1) > 0;
}, qe = function(n, e) {
  return k(n, e, !1) >= 0;
}, J = function(n) {
  return n === void 0;
};
function ce(n) {
  return n ? Object.fromEntries(Object.entries(n[Y.FeatureFlags]).map(function(e) {
    var t = e[0], i = e[1];
    return [t, Ne.fromJson(i)];
  })) : {};
}
var Xe = function() {
  function n(e, t, i, a) {
    this.custom = {}, this.identifier = e, this.email = t, this.country = i, this.custom = a || {};
  }
  return n;
}(), Ye = function() {
  function n(e) {
    this.logger = e;
  }
  return n.prototype.Evaluate = function(e, t, i, a, r) {
    if (this.logger.debug("RolloutEvaluator.Evaluate() called."), !e[t]) {
      var s = "Evaluating getValue('" + t + "') failed. Returning default value: '" + i + "'.";
      return s += " Here are the available keys: {" + Object.keys(e).join() + "}.", this.logger.error(s), { Value: i, VariationId: r };
    }
    var l = e[t], c = new Ze();
    c.User = a, c.KeyName = t, c.ReturnValue = i;
    var o = new fe();
    if (o.EvaluateLog = c, a)
      o = this.EvaluateRules(l.rolloutRules, a, c), o.ValueAndVariationId == null && (o.ValueAndVariationId = this.EvaluateVariations(l.rolloutPercentageItems, t, a), o.ValueAndVariationId && (o.EvaluateLog.ReturnValue = o.ValueAndVariationId.Value), l.rolloutPercentageItems.length > 0 && o.EvaluateLog.OpAppendLine("Evaluating % options => " + (o.ValueAndVariationId == null ? "user not targeted" : "user targeted")));
    else if (l.rolloutRules && l.rolloutRules.length > 0 || l.rolloutPercentageItems && l.rolloutPercentageItems.length > 0) {
      var s = "Evaluating getValue('" + t + "'). ";
      s += "UserObject missing! You should pass a UserObject to getValue(), in order to make targeting work properly. ", s += "Read more: https://configcat.com/docs/advanced/user-object", this.logger.warn(s);
    }
    return o.ValueAndVariationId == null && (o.ValueAndVariationId = {
      Value: l.value,
      VariationId: l.variationId
    }, o.EvaluateLog.ReturnValue = o.ValueAndVariationId.Value), this.logger.info(o.EvaluateLog.GetLog()), o.ValueAndVariationId;
  }, n.prototype.EvaluateRules = function(e, t, i) {
    this.logger.debug("RolloutEvaluator.EvaluateRules() called.");
    var a = new fe();
    if (a.ValueAndVariationId = null, e && e.length > 0)
      for (var r = function(o) {
        var u = e[o], h = s.GetUserAttribute(t, u.comparisonAttribute), A = u.comparator, v = u.comparisonValue, f = "Evaluating rule: '" + h + "' " + s.RuleToString(A) + " '" + v + "' => ";
        if (!h)
          return f += "NO MATCH (Attribute is not defined on the user object)", i.OpAppendLine(f), "continue";
        switch (A) {
          case 0:
            for (var y = v.split(","), p = 0; p < y.length; p++)
              if (y[p].trim() === h)
                return f += "MATCH", i.OpAppendLine(f), a.ValueAndVariationId = {
                  Value: u.value,
                  VariationId: u.variationId
                }, i.ReturnValue = a.ValueAndVariationId.Value, a.EvaluateLog = i, { value: a };
            f += "no match";
            break;
          case 1:
            if (!v.split(",").some(function(I) {
              return I.trim() === h;
            }))
              return f += "MATCH", i.OpAppendLine(f), a.ValueAndVariationId = {
                Value: u.value,
                VariationId: u.variationId
              }, i.ReturnValue = a.ValueAndVariationId.Value, a.EvaluateLog = i, { value: a };
            f += "no match";
            break;
          case 2:
            if (h.indexOf(v) !== -1)
              return f += "MATCH", i.OpAppendLine(f), a.ValueAndVariationId = {
                Value: u.value,
                VariationId: u.variationId
              }, i.ReturnValue = a.ValueAndVariationId.Value, a.EvaluateLog = i, { value: a };
            f += "no match";
            break;
          case 3:
            if (h.indexOf(v) === -1)
              return f += "MATCH", i.OpAppendLine(f), a.ValueAndVariationId = {
                Value: u.value,
                VariationId: u.variationId
              }, i.ReturnValue = a.ValueAndVariationId.Value, a.EvaluateLog = i, { value: a };
            f += "no match";
            break;
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
            if (s.EvaluateSemver(h, v, A))
              return f += "MATCH", i.OpAppendLine(f), a.ValueAndVariationId = {
                Value: u.value,
                VariationId: u.variationId
              }, i.ReturnValue = a.ValueAndVariationId.Value, a.EvaluateLog = i, { value: a };
            f += "no match";
            break;
          case 10:
          case 11:
          case 12:
          case 13:
          case 14:
          case 15:
            if (s.EvaluateNumber(h, v, A))
              return f += "MATCH", i.OpAppendLine(f), a.ValueAndVariationId = {
                Value: u.value,
                VariationId: u.variationId
              }, i.ReturnValue = a.ValueAndVariationId.Value, a.EvaluateLog = i, { value: a };
            f += "no match";
            break;
          case 16:
            for (var m = v.split(","), p = 0; p < m.length; p++)
              if (m[p].trim() === G(h))
                return f += "MATCH", i.OpAppendLine(f), a.ValueAndVariationId = {
                  Value: u.value,
                  VariationId: u.variationId
                }, i.ReturnValue = a.ValueAndVariationId.Value, a.EvaluateLog = i, { value: a };
            f += "no match";
            break;
          case 17:
            if (!v.split(",").some(function(I) {
              return I.trim() === G(h);
            }))
              return f += "MATCH", i.OpAppendLine(f), a.ValueAndVariationId = {
                Value: u.value,
                VariationId: u.variationId
              }, i.ReturnValue = a.ValueAndVariationId.Value, a.EvaluateLog = i, { value: a };
            f += "no match";
            break;
        }
        i.OpAppendLine(f);
      }, s = this, l = 0; l < e.length; l++) {
        var c = r(l);
        if (typeof c == "object")
          return c.value;
      }
    return a.EvaluateLog = i, a;
  }, n.prototype.EvaluateVariations = function(e, t, i) {
    if (this.logger.debug("RolloutEvaluator.EvaluateVariations() called."), e && e.length > 0)
      for (var a = t + (i.identifier === null || i.identifier === void 0 ? "" : i.identifier), r = G(a).substring(0, 7), s = parseInt(r, 16) % 100, l = 0, c = 0; c < e.length; c++) {
        var o = e[c];
        if (l += +o.percentage, s < l)
          return {
            Value: o.value,
            VariationId: o.variationId
          };
      }
    return null;
  }, n.prototype.EvaluateNumber = function(e, t, i) {
    this.logger.debug("RolloutEvaluator.EvaluateNumber() called.");
    var a, r;
    if (e && !Number.isNaN(Number.parseFloat(e.replace(",", "."))))
      a = Number.parseFloat(e.replace(",", "."));
    else
      return !1;
    if (t && !Number.isNaN(Number.parseFloat(t.replace(",", "."))))
      r = Number.parseFloat(t.replace(",", "."));
    else
      return !1;
    switch (i) {
      case 10:
        return a == r;
      case 11:
        return a != r;
      case 12:
        return a < r;
      case 13:
        return a <= r;
      case 14:
        return a > r;
      case 15:
        return a >= r;
    }
    return !1;
  }, n.prototype.EvaluateSemver = function(e, t, i) {
    if (this.logger.debug("RolloutEvaluator.EvaluateSemver() called."), N(e) == null || J(t))
      return !1;
    switch (t = t.trim(), i) {
      case 4:
        for (var a = t.split(","), r = !1, s = 0; s < a.length; s++)
          if (!(!a[s] || J(a[s]) || a[s].trim() === "")) {
            if (N(a[s].trim()) == null)
              return !1;
            r || (r = $e(e, a[s].trim()));
          }
        return r;
      case 5:
        return !t.split(",").some(function(l) {
          return !l || J(l) || l.trim() === "" || (l = N(l.trim()), l == null) ? !1 : Ke(e, l);
        });
      case 6:
        return N(t) == null ? !1 : Ge(e, t);
      case 7:
        return N(t) == null ? !1 : Je(e, t);
      case 8:
        return N(t) == null ? !1 : ze(e, t);
      case 9:
        return N(t) == null ? !1 : qe(e, t);
    }
    return !1;
  }, n.prototype.GetUserAttribute = function(e, t) {
    switch (t) {
      case "Identifier":
        return e.identifier;
      case "Email":
        return e.email;
      case "Country":
        return e.country;
      default:
        return (e.custom || {})[t];
    }
  }, n.prototype.RuleToString = function(e) {
    switch (e) {
      case 0:
        return "IS ONE OF";
      case 1:
        return "IS NOT ONE OF";
      case 2:
        return "CONTAINS";
      case 3:
        return "DOES NOT CONTAIN";
      case 4:
        return "IS ONE OF (SemVer)";
      case 5:
        return "IS NOT ONE OF (SemVer)";
      case 6:
        return "< (SemVer)";
      case 7:
        return "<= (SemVer)";
      case 8:
        return "> (SemVer)";
      case 9:
        return ">= (SemVer)";
      case 10:
        return "= (Number)";
      case 11:
        return "!= (Number)";
      case 12:
        return "< (Number)";
      case 13:
        return "<= (Number)";
      case 14:
        return "> (Number)";
      case 15:
        return ">= (Number)";
      case 16:
        return "IS ONE OF (Sensitive)";
      case 17:
        return "IS NOT ONE OF (Sensitive)";
      default:
        return e;
    }
  }, n;
}(), fe = function() {
  function n() {
  }
  return n;
}(), Ze = function() {
  function n() {
    this.Operations = "";
  }
  return n.prototype.OpAppendLine = function(e) {
    this.Operations += " " + e + `
`;
  }, n.prototype.GetLog = function() {
    return "Evaluate '" + this.KeyName + `'
 User : ` + JSON.stringify(this.User) + `
` + this.Operations + " Returning value : " + this.ReturnValue;
  }, n;
}(), S;
(function(n) {
  n[n.LocalOnly = 0] = "LocalOnly", n[n.LocalOverRemote = 1] = "LocalOverRemote", n[n.RemoteOverLocal = 2] = "RemoteOverLocal";
})(S || (S = {}));
var pe = function() {
  function n(e) {
    this.map = {}, this.map = Object.fromEntries(Object.entries(e).map(function(t) {
      var i = t[0], a = t[1];
      return [i, {
        value: a,
        variationId: "",
        rolloutRules: [],
        rolloutPercentageItems: []
      }];
    }));
  }
  return n.prototype.getOverrides = function() {
    return Promise.resolve(this.map);
  }, n;
}(), ye = function() {
  function n(e, t) {
    this.dataSource = e, this.behaviour = t;
  }
  return n;
}(), F = globalThis && globalThis.__assign || function() {
  return F = Object.assign || function(n) {
    for (var e, t = 1, i = arguments.length; t < i; t++) {
      e = arguments[t];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
    }
    return n;
  }, F.apply(this, arguments);
}, R = globalThis && globalThis.__awaiter || function(n, e, t, i) {
  function a(r) {
    return r instanceof t ? r : new t(function(s) {
      s(r);
    });
  }
  return new (t || (t = Promise))(function(r, s) {
    function l(u) {
      try {
        o(i.next(u));
      } catch (h) {
        s(h);
      }
    }
    function c(u) {
      try {
        o(i.throw(u));
      } catch (h) {
        s(h);
      }
    }
    function o(u) {
      u.done ? r(u.value) : a(u.value).then(l, c);
    }
    o((i = i.apply(n, e || [])).next());
  });
}, _ = globalThis && globalThis.__generator || function(n, e) {
  var t = { label: 0, sent: function() {
    if (r[0] & 1)
      throw r[1];
    return r[1];
  }, trys: [], ops: [] }, i, a, r, s;
  return s = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function l(o) {
    return function(u) {
      return c([o, u]);
    };
  }
  function c(o) {
    if (i)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (i = 1, a && (r = o[0] & 2 ? a.return : o[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, o[1])).done)
          return r;
        switch (a = 0, r && (o = [o[0] & 2, r.value]), o[0]) {
          case 0:
          case 1:
            r = o;
            break;
          case 4:
            return t.label++, { value: o[1], done: !1 };
          case 5:
            t.label++, a = o[1], o = [0];
            continue;
          case 7:
            o = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (r = t.trys, !(r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
              t = 0;
              continue;
            }
            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
              t.label = o[1];
              break;
            }
            if (o[0] === 6 && t.label < r[1]) {
              t.label = r[1], r = o;
              break;
            }
            if (r && t.label < r[2]) {
              t.label = r[2], t.ops.push(o);
              break;
            }
            r[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        o = e.call(n, t);
      } catch (u) {
        o = [6, u], a = 0;
      } finally {
        i = r = 0;
      }
    if (o[0] & 5)
      throw o[1];
    return { value: o[0] ? o[1] : void 0, done: !0 };
  }
}, Q = function() {
  function n(e, t) {
    var i;
    if (!e)
      throw new Error("Invalid 'options' value");
    if (this.options = e, this.options.logger.debug("Initializing ConfigCatClient. Options: " + JSON.stringify(this.options)), !t)
      throw new Error("Invalid 'configCatKernel' value");
    if (!t.configFetcher)
      throw new Error("Invalid 'configCatKernel.configFetcher' value");
    if (e != null && e.defaultUser && this.setDefaultUser(e.defaultUser), this.evaluator = new Ye(e.logger), ((i = e == null ? void 0 : e.flagOverrides) === null || i === void 0 ? void 0 : i.behaviour) != S.LocalOnly)
      if (e && e instanceof ve)
        this.configService = new Me(t.configFetcher, e);
      else if (e && e instanceof de)
        this.configService = new We(t.configFetcher, e);
      else if (e && e instanceof ge)
        this.configService = new ie(t.configFetcher, e);
      else
        throw new Error("Invalid 'options' value");
  }
  return n.prototype.dispose = function() {
    this.options.logger.debug("dispose() called"), this.configService instanceof ie && (this.options.logger.debug("Disposing AutoPollConfigService"), this.configService.dispose());
  }, n.prototype.getValue = function(e, t, i, a) {
    this.options.logger.debug("getValue() called."), this.getValueAsync(e, t, a).then(function(r) {
      i(r);
    });
  }, n.prototype.getValueAsync = function(e, t, i) {
    var a = this;
    return this.options.logger.debug("getValueAsync() called."), new Promise(function(r) {
      return R(a, void 0, void 0, function() {
        var s, l;
        return _(this, function(c) {
          switch (c.label) {
            case 0:
              return [4, this.getSettingsAsync()];
            case 1:
              return s = c.sent(), s ? (l = this.evaluator.Evaluate(s, e, t, i ?? this.defaultUser).Value, r(l), [2]) : (this.options.logger.error("config.json is not present. Returning default value: '" + t + "'."), r(t), [2]);
          }
        });
      });
    });
  }, n.prototype.forceRefresh = function(e) {
    this.options.logger.debug("forceRefresh() called."), this.forceRefreshAsync().then(function() {
      e();
    });
  }, n.prototype.forceRefreshAsync = function() {
    var e = this;
    return this.options.logger.debug("forceRefreshAsync() called."), new Promise(function(t) {
      return R(e, void 0, void 0, function() {
        var i;
        return _(this, function(a) {
          switch (a.label) {
            case 0:
              return [4, (i = this.configService) === null || i === void 0 ? void 0 : i.refreshConfigAsync()];
            case 1:
              return a.sent(), t(), [2];
          }
        });
      });
    });
  }, n.prototype.getAllKeys = function(e) {
    this.options.logger.debug("getAllKeys() called."), this.getAllKeysAsync().then(function(t) {
      e(t);
    });
  }, n.prototype.getAllKeysAsync = function() {
    var e = this;
    return this.options.logger.debug("getAllKeysAsync() called."), new Promise(function(t) {
      return R(e, void 0, void 0, function() {
        var i;
        return _(this, function(a) {
          switch (a.label) {
            case 0:
              return [4, this.getSettingsAsync()];
            case 1:
              return i = a.sent(), i ? (t(Object.keys(i)), [2]) : (this.options.logger.error("config.json is not present, returning empty array"), t([]), [2]);
          }
        });
      });
    });
  }, n.prototype.getVariationId = function(e, t, i, a) {
    this.options.logger.debug("getVariationId() called."), this.getVariationIdAsync(e, t, a).then(function(r) {
      i(r);
    });
  }, n.prototype.getVariationIdAsync = function(e, t, i) {
    var a = this;
    return this.options.logger.debug("getVariationIdAsync() called."), new Promise(function(r) {
      return R(a, void 0, void 0, function() {
        var s, l;
        return _(this, function(c) {
          switch (c.label) {
            case 0:
              return [4, this.getSettingsAsync()];
            case 1:
              return s = c.sent(), s ? (l = this.evaluator.Evaluate(s, e, null, i ?? this.defaultUser, t).VariationId, r(l), [2]) : (this.options.logger.error("config.json is not present. Returning default variationId: '" + t + "'."), r(t), [2]);
          }
        });
      });
    });
  }, n.prototype.getAllVariationIds = function(e, t) {
    this.options.logger.debug("getAllVariationIds() called."), this.getAllVariationIdsAsync(t).then(function(i) {
      e(i);
    });
  }, n.prototype.getAllVariationIdsAsync = function(e) {
    var t = this;
    return this.options.logger.debug("getAllVariationIdsAsync() called."), new Promise(function(i) {
      return R(t, void 0, void 0, function() {
        var a, r, s, l = this;
        return _(this, function(c) {
          switch (c.label) {
            case 0:
              return [4, this.getAllKeysAsync()];
            case 1:
              return a = c.sent(), a.length === 0 ? (i([]), [2]) : (r = a.map(function(o) {
                return l.getVariationIdAsync(o, null, e);
              }), [4, Promise.all(r)]);
            case 2:
              return s = c.sent(), i(s), [2];
          }
        });
      });
    });
  }, n.prototype.getKeyAndValue = function(e, t) {
    this.options.logger.debug("getKeyAndValue() called."), this.getKeyAndValueAsync(e).then(function(i) {
      t(i);
    });
  }, n.prototype.getKeyAndValueAsync = function(e) {
    var t = this;
    return this.options.logger.debug("getKeyAndValueAsync() called."), new Promise(function(i) {
      return R(t, void 0, void 0, function() {
        var a, r, s, o, l, c, o, u;
        return _(this, function(h) {
          switch (h.label) {
            case 0:
              return [4, this.getSettingsAsync()];
            case 1:
              if (a = h.sent(), !a)
                return this.options.logger.error("config.json is not present, returning empty array"), i(null), [2];
              for (r in a) {
                if (e === a[r].variationId)
                  return i({ settingKey: r, settingValue: a[r].value }), [2];
                if (s = a[r].rolloutRules, s && s.length > 0) {
                  for (o = 0; o < s.length; o++)
                    if (l = s[o], e === l.variationId)
                      return i({ settingKey: r, settingValue: l.value }), [2];
                }
                if (c = a[r].rolloutPercentageItems, c && c.length > 0) {
                  for (o = 0; o < c.length; o++)
                    if (u = c[o], e === u.variationId)
                      return i({ settingKey: r, settingValue: u.value }), [2];
                }
              }
              return this.options.logger.error("Could not find the setting for the given variation ID: " + e), i(null), [2];
          }
        });
      });
    });
  }, n.prototype.getAllValues = function(e, t) {
    this.options.logger.debug("getAllValues() called."), this.getAllValuesAsync(t).then(function(i) {
      e(i);
    });
  }, n.prototype.getAllValuesAsync = function(e) {
    var t = this;
    return this.options.logger.debug("getAllValuesAsync() called."), new Promise(function(i) {
      return R(t, void 0, void 0, function() {
        var a, r, s, l = this;
        return _(this, function(c) {
          switch (c.label) {
            case 0:
              return [4, this.getSettingsAsync()];
            case 1:
              return a = c.sent(), a ? (r = Object.keys(a), s = [], r.forEach(function(o) {
                s.push({
                  settingKey: o,
                  settingValue: l.evaluator.Evaluate(a, o, void 0, e ?? l.defaultUser).Value
                });
              }), i(s), [2]) : (this.options.logger.error("config.json is not present, returning empty array"), i([]), [2]);
          }
        });
      });
    });
  }, n.prototype.setDefaultUser = function(e) {
    this.defaultUser = e;
  }, n.prototype.clearDefaultUser = function() {
    this.defaultUser = void 0;
  }, n.prototype.getSettingsAsync = function() {
    var e = this;
    return this.options.logger.debug("getSettingsAsync() called."), new Promise(function(t) {
      return R(e, void 0, void 0, function() {
        var i, a, r, s, l, c, o;
        return _(this, function(u) {
          switch (u.label) {
            case 0:
              return !((l = this.options) === null || l === void 0) && l.flagOverrides ? [4, this.options.flagOverrides.dataSource.getOverrides()] : [3, 3];
            case 1:
              return i = u.sent(), this.options.flagOverrides.behaviour == S.LocalOnly ? (t(i), [2]) : [4, (c = this.configService) === null || c === void 0 ? void 0 : c.getConfig()];
            case 2:
              if (a = u.sent(), r = ce(a == null ? void 0 : a.ConfigJSON), this.options.flagOverrides.behaviour == S.LocalOverRemote)
                return t(F(F({}, r), i)), [2];
              if (this.options.flagOverrides.behaviour == S.RemoteOverLocal)
                return t(F(F({}, i), r)), [2];
              u.label = 3;
            case 3:
              return [4, (o = this.configService) === null || o === void 0 ? void 0 : o.getConfig()];
            case 4:
              return s = u.sent(), !s || !s.ConfigJSON || !s.ConfigJSON[Y.FeatureFlags] ? (t(null), [2]) : (t(ce(s.ConfigJSON)), [2]);
          }
        });
      });
    });
  }, n;
}();
function Qe() {
  Object.fromEntries || (Object.fromEntries = function(n) {
    if (!n || !n[Symbol.iterator])
      throw new Error("Object.fromEntries() requires a single iterable argument");
    for (var e = {}, t = 0, i = n; t < i.length; t++) {
      var a = i[t], r = a[0], s = a[1];
      e[r] = s;
    }
    return e;
  });
}
Qe();
function be(n, e, t) {
  return new Q(new ge(n, e.sdkType, e.sdkVersion, t, e.cache), e);
}
function me(n, e, t) {
  return new Q(new de(n, e.sdkType, e.sdkVersion, t, e.cache), e);
}
function Ce(n, e, t) {
  return new Q(new ve(n, e.sdkType, e.sdkVersion, t, e.cache), e);
}
function Ee(n) {
  return new he(n);
}
var V;
(function(n) {
  n[n.Debug = 4] = "Debug", n[n.Info = 3] = "Info", n[n.Warn = 2] = "Warn", n[n.Error = 1] = "Error", n[n.Off = -1] = "Off";
})(V || (V = {}));
var P;
(function(n) {
  n[n.Fetched = 0] = "Fetched", n[n.NotModified = 1] = "NotModified", n[n.Errored = 2] = "Errored";
})(P || (P = {}));
var B = function() {
  function n(e, t, i) {
    this.status = e, this.responseBody = t, this.eTag = i;
  }
  return n.success = function(e, t) {
    return new n(P.Fetched, e, t);
  }, n.notModified = function() {
    return new n(P.NotModified, "");
  }, n.error = function() {
    return new n(P.Errored, "");
  }, n;
}();
const lt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createClientWithAutoPoll: be,
  createClientWithManualPoll: me,
  createClientWithLazyLoad: Ce,
  createConsoleLogger: Ee,
  get LogLevel() {
    return V;
  },
  get FetchStatus() {
    return P;
  },
  FetchResult: B,
  ProjectConfig: W,
  OptionsBase: H,
  get DataGovernance() {
    return x;
  },
  User: Xe,
  FlagOverrides: ye,
  MapOverrideDataSource: pe,
  get OverrideBehaviour() {
    return S;
  }
}, Symbol.toStringTag, { value: "Module" }));
var ee = function() {
  function n() {
  }
  return n.prototype.fetchLogic = function(e, t, i) {
    var a = new XMLHttpRequest();
    a.onreadystatechange = function() {
      if (a.readyState === 4) {
        var r = a.getResponseHeader("ETag");
        a.status === 200 ? i(B.success(a.responseText, r)) : a.status === 304 ? i(B.notModified()) : (e.logger.error("Failed to download feature flags & settings from ConfigCat. " + a.status + " - " + a.statusText), i(B.error()));
      }
    }, a.open("GET", e.getUrl(), !0), a.timeout = e.requestTimeoutMs, a.send(null);
  }, n;
}(), te = function() {
  function n() {
    this.cache = {};
  }
  return n.prototype.set = function(e, t) {
    this.cache[e] = t;
    try {
      localStorage.setItem(e, btoa(JSON.stringify(t)));
    } catch {
    }
  }, n.prototype.get = function(e) {
    var t = this.cache[e];
    if (t)
      return t;
    try {
      var i = localStorage.getItem(e);
      if (i) {
        var a = JSON.parse(atob(i));
        if (a)
          return this.cache[e] = a, a;
      }
    } catch {
    }
    return null;
  }, n;
}();
const re = "6.0.1";
function q(n, e) {
  return Ie(n, e);
}
function Ie(n, e) {
  return be(n, {
    configFetcher: new ee(),
    cache: new te(),
    sdkType: "ConfigCat-JS",
    sdkVersion: re
  }, e);
}
function et(n, e) {
  return me(n, {
    configFetcher: new ee(),
    cache: new te(),
    sdkType: "ConfigCat-JS",
    sdkVersion: re
  }, e);
}
function tt(n, e) {
  return Ce(n, {
    configFetcher: new ee(),
    cache: new te(),
    sdkType: "ConfigCat-JS",
    sdkVersion: re
  }, e);
}
function rt(n) {
  return Ee(n);
}
function nt(n, e) {
  return new ye(new pe(n), e);
}
var it = {
  Global: x.Global,
  EuOnly: x.EuOnly
}, at = {
  LocalOnly: S.LocalOnly,
  LocalOverRemote: S.LocalOverRemote,
  RemoteOverLocal: S.RemoteOverLocal
};
const ut = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createClient: q,
  createClientWithAutoPoll: Ie,
  createClientWithManualPoll: et,
  createClientWithLazyLoad: tt,
  createConsoleLogger: rt,
  createFlagOverridesFromMap: nt,
  DataGovernance: it,
  OverrideBehaviour: at,
  default: q
}, Symbol.toStringTag, { value: "Module" })), ct = {
  install: (n, e) => {
    let t = q(e.SDKKey, e.clientOptions);
    n.config.globalProperties.configCatClient = t;
  }
};
export {
  ct as ConfigCatPlugin,
  st as FeatureWrapper,
  lt as configCatCommon,
  ut as configCatJS
};
