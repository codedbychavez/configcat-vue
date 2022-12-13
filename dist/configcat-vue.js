import { openBlock as le, createElementBlock as ue, renderSlot as ce, createCommentVNode as fe } from "vue";
const he = (i, t) => {
  const e = i.__vccOpts || i;
  for (const [n, a] of t)
    e[n] = a;
  return e;
}, ge = {
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
    this.configCatClient.getValueAsync(this.featureKey, !1, this.userObject).then((i) => {
      this.isFeatureFlagEnabled = i;
    });
  },
  unmounted() {
    this.configCatClient.dispose();
  }
}, de = { key: 0 };
function ve(i, t, e, n, a, r) {
  return a.isFeatureFlagEnabled ? (le(), ue("div", de, [
    ce(i.$slots, "default")
  ])) : fe("", !0);
}
const ze = /* @__PURE__ */ he(ge, [["render", ve]]);
var pe = function() {
  function i(t) {
    this.SOURCE = "ConfigCat", this.level = _.Warn, t && (this.level = t);
  }
  return i.prototype.log = function(t) {
    this.info(t);
  }, i.prototype.debug = function(t) {
    this.isLogLevelEnabled(_.Debug) && console.info(this.SOURCE + " - DEBUG - " + t);
  }, i.prototype.info = function(t) {
    this.isLogLevelEnabled(_.Info) && console.info(this.SOURCE + " - INFO - " + t);
  }, i.prototype.warn = function(t) {
    this.isLogLevelEnabled(_.Warn) && console.warn(this.SOURCE + " - WARN - " + t);
  }, i.prototype.error = function(t) {
    this.isLogLevelEnabled(_.Error) && console.error(this.SOURCE + " - ERROR - " + t);
  }, i.prototype.isLogLevelEnabled = function(t) {
    return this.level >= t;
  }, i;
}(), ye = function() {
  function i() {
    this.cache = {};
  }
  return i.prototype.set = function(t, e) {
    this.cache[t] = e;
  }, i.prototype.get = function(t) {
    return this.cache[t];
  }, i;
}(), q = globalThis && globalThis.__extends || function() {
  var i = function(t, e) {
    return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, a) {
      n.__proto__ = a;
    } || function(n, a) {
      for (var r in a)
        Object.prototype.hasOwnProperty.call(a, r) && (n[r] = a[r]);
    }, i(t, e);
  };
  return function(t, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    i(t, e);
    function n() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  };
}(), F;
(function(i) {
  i[i.Global = 0] = "Global", i[i.EuOnly = 1] = "EuOnly";
})(F || (F = {}));
var z = function() {
  function i(t, e, n, a) {
    var r;
    if (this.configFileName = "config_v5", this.logger = new pe(_.Warn), this.requestTimeoutMs = 3e4, this.baseUrlOverriden = !1, this.proxy = "", !t)
      throw new Error("Invalid 'apiKey' value");
    switch (a || (a = new ye()), this.apiKey = t, this.clientVersion = e, this.dataGovernance = (r = n == null ? void 0 : n.dataGovernance) !== null && r !== void 0 ? r : F.Global, this.cache = a, this.dataGovernance) {
      case F.EuOnly:
        this.baseUrl = "https://cdn-eu.configcat.com";
        break;
      default:
        this.baseUrl = "https://cdn-global.configcat.com";
        break;
    }
    if (n) {
      if (n.logger && (this.logger = n.logger), n.requestTimeoutMs) {
        if (n.requestTimeoutMs < 0)
          throw new Error("Invalid 'requestTimeoutMs' value");
        this.requestTimeoutMs = n.requestTimeoutMs;
      }
      n.baseUrl && (this.baseUrl = n.baseUrl, this.baseUrlOverriden = !0), n.proxy && (this.proxy = n.proxy), n.cache && (this.cache = n.cache), n.flagOverrides && (this.flagOverrides = n.flagOverrides), n.defaultUser && (this.defaultUser = n.defaultUser);
    }
  }
  return i.prototype.getUrl = function() {
    return this.baseUrl + "/configuration-files/" + this.apiKey + "/" + this.configFileName + ".json?sdk=" + this.clientVersion;
  }, i.prototype.getCacheKey = function() {
    return "js_" + this.configFileName + "_" + this.apiKey;
  }, i;
}(), se = function(i) {
  q(t, i);
  function t(e, n, a, r, s) {
    var l = i.call(this, e, n + "/a-" + a, r, s) || this;
    if (l.pollIntervalSeconds = 60, l.configChanged = function() {
    }, l.maxInitWaitTimeSeconds = 5, r && (r.pollIntervalSeconds !== void 0 && r.pollIntervalSeconds !== null && (l.pollIntervalSeconds = r.pollIntervalSeconds), r.configChanged && (l.configChanged = r.configChanged), r.maxInitWaitTimeSeconds !== void 0 && r.maxInitWaitTimeSeconds !== null && (l.maxInitWaitTimeSeconds = r.maxInitWaitTimeSeconds)), l.pollIntervalSeconds < 1)
      throw new Error("Invalid 'pollIntervalSeconds' value");
    if (l.maxInitWaitTimeSeconds < 0)
      throw new Error("Invalid 'maxInitWaitTimeSeconds' value");
    return l;
  }
  return t;
}(z), be = function(i) {
  q(t, i);
  function t(e, n, a, r, s) {
    return i.call(this, e, n + "/m-" + a, r, s) || this;
  }
  return t;
}(z), me = function(i) {
  q(t, i);
  function t(e, n, a, r, s) {
    var l = i.call(this, e, n + "/l-" + a, r, s) || this;
    if (l.cacheTimeToLiveSeconds = 60, r && r.cacheTimeToLiveSeconds && (l.cacheTimeToLiveSeconds = r.cacheTimeToLiveSeconds), !l.cacheTimeToLiveSeconds || l.cacheTimeToLiveSeconds < 1)
      throw new Error("Invalid 'cacheTimeToLiveSeconds' value. Value must be greater than zero.");
    return l;
  }
  return t;
}(z), J = function() {
  function i(t, e, n) {
    this.Timestamp = t, this.ConfigJSON = JSON.parse(e), this.HttpETag = n;
  }
  return i.equals = function(t, e) {
    return !t || !e ? !1 : this.compareEtags(t.HttpETag, e.HttpETag);
  }, i.compareEtags = function(t, e) {
    return this.ensureStrictEtag(t) === this.ensureStrictEtag(e);
  }, i.ensureStrictEtag = function(t) {
    return t ? t.length > 2 && t.substr(0, 2).toLocaleUpperCase() === "W/" ? t.substring(2) : t : "";
  }, i;
}(), X = function() {
  function i() {
  }
  return i.Preferences = "p", i.FeatureFlags = "f", i;
}(), Z = function() {
  function i() {
  }
  return i.BaseUrl = "u", i.Redirect = "r", i;
}(), Ce = function() {
  function i(t, e, n, a) {
    this.value = t, this.rolloutPercentageItems = e, this.rolloutRules = n, this.variationId = a;
  }
  return i.fromJson = function(t) {
    var e, n, a, r;
    return new i(t[this.Value], (n = (e = t[this.RolloutPercentageItems]) === null || e === void 0 ? void 0 : e.map(function(s) {
      return Ie.fromJson(s);
    })) !== null && n !== void 0 ? n : [], (r = (a = t[this.RolloutRules]) === null || a === void 0 ? void 0 : a.map(function(s) {
      return Ee.fromJson(s);
    })) !== null && r !== void 0 ? r : [], t[this.VariationId]);
  }, i.Value = "v", i.SettingType = "t", i.RolloutPercentageItems = "p", i.RolloutRules = "r", i.VariationId = "i", i;
}(), Ee = function() {
  function i(t, e, n, a, r) {
    this.comparisonAttribute = t, this.comparator = e, this.comparisonValue = n, this.value = a, this.variationId = r;
  }
  return i.fromJson = function(t) {
    return new i(t[this.ComparisonAttribute], t[this.Comparator], t[this.ComparisonValue], t[this.Value], t[this.VariationId]);
  }, i.Order = "o", i.ComparisonAttribute = "a", i.Comparator = "t", i.ComparisonValue = "c", i.Value = "v", i.VariationId = "i", i;
}(), Ie = function() {
  function i(t, e, n) {
    this.percentage = t, this.value = e, this.variationId = n;
  }
  return i.fromJson = function(t) {
    return new i(t[this.Percentage], t[this.Value], t[this.VariationId]);
  }, i.Order = "o", i.Value = "v", i.Percentage = "p", i.VariationId = "i", i;
}(), we = globalThis && globalThis.__awaiter || function(i, t, e, n) {
  function a(r) {
    return r instanceof e ? r : new e(function(s) {
      s(r);
    });
  }
  return new (e || (e = Promise))(function(r, s) {
    function l(u) {
      try {
        o(n.next(u));
      } catch (h) {
        s(h);
      }
    }
    function c(u) {
      try {
        o(n.throw(u));
      } catch (h) {
        s(h);
      }
    }
    function o(u) {
      u.done ? r(u.value) : a(u.value).then(l, c);
    }
    o((n = n.apply(i, t || [])).next());
  });
}, Se = globalThis && globalThis.__generator || function(i, t) {
  var e = { label: 0, sent: function() {
    if (r[0] & 1)
      throw r[1];
    return r[1];
  }, trys: [], ops: [] }, n, a, r, s;
  return s = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function l(o) {
    return function(u) {
      return c([o, u]);
    };
  }
  function c(o) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; e; )
      try {
        if (n = 1, a && (r = o[0] & 2 ? a.return : o[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, o[1])).done)
          return r;
        switch (a = 0, r && (o = [o[0] & 2, r.value]), o[0]) {
          case 0:
          case 1:
            r = o;
            break;
          case 4:
            return e.label++, { value: o[1], done: !1 };
          case 5:
            e.label++, a = o[1], o = [0];
            continue;
          case 7:
            o = e.ops.pop(), e.trys.pop();
            continue;
          default:
            if (r = e.trys, !(r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
              e = 0;
              continue;
            }
            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
              e.label = o[1];
              break;
            }
            if (o[0] === 6 && e.label < r[1]) {
              e.label = r[1], r = o;
              break;
            }
            if (r && e.label < r[2]) {
              e.label = r[2], e.ops.push(o);
              break;
            }
            r[2] && e.ops.pop(), e.trys.pop();
            continue;
        }
        o = t.call(i, e);
      } catch (u) {
        o = [6, u], a = 0;
      } finally {
        n = r = 0;
      }
    if (o[0] & 5)
      throw o[1];
    return { value: o[0] ? o[1] : void 0, done: !0 };
  }
}, Y = function() {
  function i(t, e) {
    this.fetchLogicCallbacks = [], this.configFetcher = t, this.baseConfig = e;
  }
  return i.prototype.refreshLogicBaseAsync = function(t, e) {
    var n = this;
    return e === void 0 && (e = !0), this.baseConfig.logger.debug("ConfigServiceBase.refreshLogicBaseAsync() - called."), new Promise(function(a) {
      var r;
      n.fetchLogic(n.baseConfig, (r = t == null ? void 0 : t.HttpETag) !== null && r !== void 0 ? r : null, 0, function(s) {
        return we(n, void 0, void 0, function() {
          return Se(this, function(l) {
            switch (l.label) {
              case 0:
                return s && s.ConfigJSON ? (this.baseConfig.logger.debug("ConfigServiceBase.refreshLogicBaseAsync() - fetchLogic() success, returning config."), [4, this.baseConfig.cache.set(this.baseConfig.getCacheKey(), s)]) : [3, 2];
              case 1:
                return l.sent(), a(s), [3, 5];
              case 2:
                return e && t && t.ConfigJSON ? (this.baseConfig.logger.debug("ConfigServiceBase.refreshLogicBaseAsync() - fetchLogic() didn't return a config, setting the cache with last config with new timestamp, returning last config."), t.Timestamp = new Date().getTime(), [4, this.baseConfig.cache.set(this.baseConfig.getCacheKey(), t)]) : [3, 4];
              case 3:
                return l.sent(), a(t), [3, 5];
              case 4:
                this.baseConfig.logger.debug("ConfigServiceBase.refreshLogicBaseAsync() - fetchLogic() didn't return a config, returing last config."), a(t), l.label = 5;
              case 5:
                return [2];
            }
          });
        });
      });
    });
  }, i.prototype.fetchLogic = function(t, e, n, a) {
    var r = this;
    this.baseConfig.logger.debug("ConfigServiceBase.fetchLogic() - called.");
    var s = this.baseConfig.baseUrl;
    this.fetchLogicInternal(this.baseConfig, e, n, function(l) {
      if (r.baseConfig.logger.debug("ConfigServiceBase.fetchLogic(): result.status: " + (l == null ? void 0 : l.status)), !l || l.status != P.Fetched || J.compareEtags(e ?? "", l.eTag)) {
        r.baseConfig.logger.debug("ConfigServiceBase.fetchLogic(): result.status != FetchStatus.Fetched or etags are the same. Returning null."), a(null);
        return;
      }
      if (!l.responseBody) {
        r.baseConfig.logger.debug("ConfigServiceBase.fetchLogic(): no response body. Returning null."), a(null);
        return;
      }
      var c = new J(new Date().getTime(), l.responseBody, l.eTag), o = c.ConfigJSON[X.Preferences];
      if (!o) {
        r.baseConfig.logger.debug("ConfigServiceBase.fetchLogic(): preferences is empty. Returning newConfig."), a(c);
        return;
      }
      var u = o[Z.BaseUrl];
      if (!u || u == s) {
        r.baseConfig.logger.debug("ConfigServiceBase.fetchLogic(): baseUrl OK. Returning newConfig."), a(c);
        return;
      }
      var h = o[Z.Redirect];
      if (t.baseUrlOverriden && h !== 2) {
        r.baseConfig.logger.debug("ConfigServiceBase.fetchLogic(): options.baseUrlOverriden && redirect !== 2."), a(c);
        return;
      }
      if (t.baseUrl = u, h === 0) {
        a(c);
        return;
      }
      if (h === 1 && t.logger.warn("Your dataGovernance parameter at ConfigCatClient initialization is not in sync with your preferences on the ConfigCat Dashboard: https://app.configcat.com/organization/data-governance. Only Organization Admins can access this preference."), n >= 2) {
        t.logger.error("Redirect loop during config.json fetch. Please contact support@configcat.com."), a(c);
        return;
      }
      r.fetchLogic(t, e, ++n, a);
    });
  }, i.prototype.fetchLogicInternal = function(t, e, n, a) {
    var r = this;
    if (this.baseConfig.logger.debug("ConfigServiceBase.fetchLogicInternal(): called."), n === 0) {
      if (this.fetchLogicCallbacks.push(a), this.fetchLogicCallbacks.length > 1) {
        this.baseConfig.logger.debug("ConfigServiceBase.fetchLogicInternal(): The first fetchLogic call is already in progress. this.fetchLogicCallbacks.length = " + this.fetchLogicCallbacks.length);
        return;
      }
      this.baseConfig.logger.debug("ConfigServiceBase.fetchLogicInternal(): Calling fetchLogic"), this.configFetcher.fetchLogic(t, e, function(s) {
        for (r.baseConfig.logger.debug("ConfigServiceBase.fetchLogicInternal(): fetchLogic() success, calling callbacks. this.fetchLogicCallbacks.length = " + r.fetchLogicCallbacks.length); r.fetchLogicCallbacks.length; ) {
          var l = r.fetchLogicCallbacks.pop();
          l && (r.baseConfig.logger.debug("ConfigServiceBase.fetchLogicInternal(): fetchLogic() success, calling callback."), l(s));
        }
      });
    } else
      this.baseConfig.logger.debug("ConfigServiceBase.fetchLogicInternal(): calling fetchLogic(), recursive call. retries = " + n), this.configFetcher.fetchLogic(t, e, a);
  }, i;
}(), Ae = globalThis && globalThis.__extends || function() {
  var i = function(t, e) {
    return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, a) {
      n.__proto__ = a;
    } || function(n, a) {
      for (var r in a)
        Object.prototype.hasOwnProperty.call(a, r) && (n[r] = a[r]);
    }, i(t, e);
  };
  return function(t, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    i(t, e);
    function n() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  };
}(), j = globalThis && globalThis.__awaiter || function(i, t, e, n) {
  function a(r) {
    return r instanceof e ? r : new e(function(s) {
      s(r);
    });
  }
  return new (e || (e = Promise))(function(r, s) {
    function l(u) {
      try {
        o(n.next(u));
      } catch (h) {
        s(h);
      }
    }
    function c(u) {
      try {
        o(n.throw(u));
      } catch (h) {
        s(h);
      }
    }
    function o(u) {
      u.done ? r(u.value) : a(u.value).then(l, c);
    }
    o((n = n.apply(i, t || [])).next());
  });
}, W = globalThis && globalThis.__generator || function(i, t) {
  var e = { label: 0, sent: function() {
    if (r[0] & 1)
      throw r[1];
    return r[1];
  }, trys: [], ops: [] }, n, a, r, s;
  return s = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function l(o) {
    return function(u) {
      return c([o, u]);
    };
  }
  function c(o) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; e; )
      try {
        if (n = 1, a && (r = o[0] & 2 ? a.return : o[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, o[1])).done)
          return r;
        switch (a = 0, r && (o = [o[0] & 2, r.value]), o[0]) {
          case 0:
          case 1:
            r = o;
            break;
          case 4:
            return e.label++, { value: o[1], done: !1 };
          case 5:
            e.label++, a = o[1], o = [0];
            continue;
          case 7:
            o = e.ops.pop(), e.trys.pop();
            continue;
          default:
            if (r = e.trys, !(r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
              e = 0;
              continue;
            }
            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
              e.label = o[1];
              break;
            }
            if (o[0] === 6 && e.label < r[1]) {
              e.label = r[1], r = o;
              break;
            }
            if (r && e.label < r[2]) {
              e.label = r[2], e.ops.push(o);
              break;
            }
            r[2] && e.ops.pop(), e.trys.pop();
            continue;
        }
        o = t.call(i, e);
      } catch (u) {
        o = [6, u], a = 0;
      } finally {
        n = r = 0;
      }
    if (o[0] & 5)
      throw o[1];
    return { value: o[0] ? o[1] : void 0, done: !0 };
  }
}, Q = function(i) {
  Ae(t, i);
  function t(e, n) {
    var a = i.call(this, e, n) || this;
    return a.disposed = !1, a.configChanged = n.configChanged, a.autoPollConfig = n, a.startRefreshWorker(n.pollIntervalSeconds * 1e3), a.maxInitWaitTimeStamp = new Date().getTime() + n.maxInitWaitTimeSeconds * 1e3, a;
  }
  return t.prototype.getConfig = function() {
    return j(this, void 0, void 0, function() {
      var e;
      return W(this, function(n) {
        switch (n.label) {
          case 0:
            return this.autoPollConfig.logger.debug("AutoPollConfigService.getConfig() called."), [4, this.tryReadFromCache(0)];
          case 1:
            return e = n.sent(), e ? (this.autoPollConfig.logger.debug("AutoPollConfigService.getConfig() - returning value from cache."), [2, new Promise(function(a) {
              return a(e);
            })]) : (this.autoPollConfig.logger.debug("AutoPollConfigService.getConfig() - cache is empty, refreshing the cache."), [2, this.refreshLogic(!0)]);
        }
      });
    });
  }, t.prototype.refreshConfigAsync = function() {
    return this.autoPollConfig.logger.debug("AutoPollConfigService.refreshConfigAsync() called."), this.refreshLogic(!0);
  }, t.prototype.dispose = function() {
    this.autoPollConfig.logger.debug("AutoPollConfigService.dispose() called."), this.disposed = !0, this.timerId && (this.autoPollConfig.logger.debug("AutoPollConfigService.dispose() - clearing setTimeout."), clearTimeout(this.timerId));
  }, t.prototype.refreshLogic = function(e) {
    var n = this;
    return this.autoPollConfig.logger.debug("AutoPollConfigService.refreshLogic() - called."), new Promise(function(a) {
      return j(n, void 0, void 0, function() {
        var r, s, l, c;
        return W(this, function(o) {
          switch (o.label) {
            case 0:
              return [4, this.baseConfig.cache.get(this.baseConfig.getCacheKey())];
            case 1:
              return r = o.sent(), [4, this.refreshLogicBaseAsync(r, e)];
            case 2:
              return s = o.sent(), l = !r && s, c = r && s && !J.equals(r, s), this.autoPollConfig.logger.debug("AutoPollConfigService.refreshLogic() - weDontHaveCachedYetButHaveNew: ." + l + ". weHaveBothButTheyDiffers: " + c + "."), (l || c) && this.configChanged(), a(s), [2];
          }
        });
      });
    });
  }, t.prototype.startRefreshWorker = function(e) {
    var n = this;
    this.autoPollConfig.logger.debug("AutoPollConfigService.startRefreshWorker() called."), this.refreshLogic(!0).then(function(a) {
      n.autoPollConfig.logger.debug("AutoPollConfigService.startRefreshWorker() - calling refreshWorkerLogic()'s setTimeout."), setTimeout(function() {
        return n.refreshWorkerLogic(e);
      }, e);
    });
  }, t.prototype.refreshWorkerLogic = function(e) {
    var n = this;
    if (this.disposed) {
      this.autoPollConfig.logger.debug("AutoPollConfigService.refreshWorkerLogic() - called on a disposed client.");
      return;
    }
    this.autoPollConfig.logger.debug("AutoPollConfigService.refreshWorkerLogic() - called."), this.refreshLogic(!1).then(function(a) {
      n.autoPollConfig.logger.debug("AutoPollConfigService.refreshWorkerLogic() - calling refreshWorkerLogic()'s setTimeout."), n.timerId = setTimeout(function() {
        n.refreshWorkerLogic(e);
      }, e);
    });
  }, t.prototype.tryReadFromCache = function(e) {
    return j(this, void 0, void 0, function() {
      var n, a, r;
      return W(this, function(s) {
        switch (s.label) {
          case 0:
            return this.autoPollConfig.logger.debug("AutoPollConfigService.tryReadFromCache() - called. Tries: " + e + "."), [4, this.baseConfig.cache.get(this.baseConfig.getCacheKey())];
          case 1:
            return n = s.sent(), this.maxInitWaitTimeStamp > new Date().getTime() && (!n || n.Timestamp < new Date().getTime() - this.autoPollConfig.pollIntervalSeconds * 1e3) ? (n ? this.autoPollConfig.logger.debug("AutoPollConfigService.tryReadFromCache() - waiting for maxInitWaitTimeStamp because cache is expired.") : this.autoPollConfig.logger.debug("AutoPollConfigService.tryReadFromCache() - waiting for maxInitWaitTimeStamp because cache is empty."), a = this.maxInitWaitTimeStamp - new Date().getTime(), r = 30 + e * e * 20, [4, this.sleep(Math.min(a, r))]) : [3, 3];
          case 2:
            return s.sent(), e++, [2, this.tryReadFromCache(e)];
          case 3:
            return this.autoPollConfig.logger.debug("AutoPollConfigService.tryReadFromCache() - returning value from cache."), [2, new Promise(function(l) {
              return l(n);
            })];
        }
      });
    });
  }, t.prototype.sleep = function(e) {
    return new Promise(function(n) {
      return setTimeout(n, e);
    });
  }, t;
}(Y), Oe = globalThis && globalThis.__extends || function() {
  var i = function(t, e) {
    return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, a) {
      n.__proto__ = a;
    } || function(n, a) {
      for (var r in a)
        Object.prototype.hasOwnProperty.call(a, r) && (n[r] = a[r]);
    }, i(t, e);
  };
  return function(t, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    i(t, e);
    function n() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  };
}(), ee = globalThis && globalThis.__awaiter || function(i, t, e, n) {
  function a(r) {
    return r instanceof e ? r : new e(function(s) {
      s(r);
    });
  }
  return new (e || (e = Promise))(function(r, s) {
    function l(u) {
      try {
        o(n.next(u));
      } catch (h) {
        s(h);
      }
    }
    function c(u) {
      try {
        o(n.throw(u));
      } catch (h) {
        s(h);
      }
    }
    function o(u) {
      u.done ? r(u.value) : a(u.value).then(l, c);
    }
    o((n = n.apply(i, t || [])).next());
  });
}, te = globalThis && globalThis.__generator || function(i, t) {
  var e = { label: 0, sent: function() {
    if (r[0] & 1)
      throw r[1];
    return r[1];
  }, trys: [], ops: [] }, n, a, r, s;
  return s = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function l(o) {
    return function(u) {
      return c([o, u]);
    };
  }
  function c(o) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; e; )
      try {
        if (n = 1, a && (r = o[0] & 2 ? a.return : o[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, o[1])).done)
          return r;
        switch (a = 0, r && (o = [o[0] & 2, r.value]), o[0]) {
          case 0:
          case 1:
            r = o;
            break;
          case 4:
            return e.label++, { value: o[1], done: !1 };
          case 5:
            e.label++, a = o[1], o = [0];
            continue;
          case 7:
            o = e.ops.pop(), e.trys.pop();
            continue;
          default:
            if (r = e.trys, !(r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
              e = 0;
              continue;
            }
            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
              e.label = o[1];
              break;
            }
            if (o[0] === 6 && e.label < r[1]) {
              e.label = r[1], r = o;
              break;
            }
            if (r && e.label < r[2]) {
              e.label = r[2], e.ops.push(o);
              break;
            }
            r[2] && e.ops.pop(), e.trys.pop();
            continue;
        }
        o = t.call(i, e);
      } catch (u) {
        o = [6, u], a = 0;
      } finally {
        n = r = 0;
      }
    if (o[0] & 5)
      throw o[1];
    return { value: o[0] ? o[1] : void 0, done: !0 };
  }
}, Ve = function(i) {
  Oe(t, i);
  function t(e, n) {
    var a = i.call(this, e, n) || this;
    return a.cacheTimeToLiveSeconds = n.cacheTimeToLiveSeconds, a;
  }
  return t.prototype.getConfig = function() {
    return ee(this, void 0, void 0, function() {
      var e;
      return te(this, function(n) {
        switch (n.label) {
          case 0:
            return this.baseConfig.logger.debug("LazyLoadConfigService.getConfig() called."), [4, this.baseConfig.cache.get(this.baseConfig.getCacheKey())];
          case 1:
            return e = n.sent(), e && e.Timestamp + this.cacheTimeToLiveSeconds * 1e3 > new Date().getTime() ? (this.baseConfig.logger.debug("LazyLoadConfigService.getConfig(): cache is valid, returning from cache."), [2, e]) : (this.baseConfig.logger.debug("LazyLoadConfigService.getConfig(): cache is empty or expired, calling refreshLogicBaseAsync()."), [2, this.refreshLogicBaseAsync(e)]);
        }
      });
    });
  }, t.prototype.refreshConfigAsync = function() {
    return ee(this, void 0, void 0, function() {
      var e;
      return te(this, function(n) {
        switch (n.label) {
          case 0:
            return this.baseConfig.logger.debug("LazyLoadConfigService.refreshConfigAsync() called."), [4, this.baseConfig.cache.get(this.baseConfig.getCacheKey())];
          case 1:
            return e = n.sent(), [2, this.refreshLogicBaseAsync(e)];
        }
      });
    });
  }, t;
}(Y), Te = globalThis && globalThis.__extends || function() {
  var i = function(t, e) {
    return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, a) {
      n.__proto__ = a;
    } || function(n, a) {
      for (var r in a)
        Object.prototype.hasOwnProperty.call(a, r) && (n[r] = a[r]);
    }, i(t, e);
  };
  return function(t, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    i(t, e);
    function n() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  };
}(), re = globalThis && globalThis.__awaiter || function(i, t, e, n) {
  function a(r) {
    return r instanceof e ? r : new e(function(s) {
      s(r);
    });
  }
  return new (e || (e = Promise))(function(r, s) {
    function l(u) {
      try {
        o(n.next(u));
      } catch (h) {
        s(h);
      }
    }
    function c(u) {
      try {
        o(n.throw(u));
      } catch (h) {
        s(h);
      }
    }
    function o(u) {
      u.done ? r(u.value) : a(u.value).then(l, c);
    }
    o((n = n.apply(i, t || [])).next());
  });
}, ne = globalThis && globalThis.__generator || function(i, t) {
  var e = { label: 0, sent: function() {
    if (r[0] & 1)
      throw r[1];
    return r[1];
  }, trys: [], ops: [] }, n, a, r, s;
  return s = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function l(o) {
    return function(u) {
      return c([o, u]);
    };
  }
  function c(o) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; e; )
      try {
        if (n = 1, a && (r = o[0] & 2 ? a.return : o[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, o[1])).done)
          return r;
        switch (a = 0, r && (o = [o[0] & 2, r.value]), o[0]) {
          case 0:
          case 1:
            r = o;
            break;
          case 4:
            return e.label++, { value: o[1], done: !1 };
          case 5:
            e.label++, a = o[1], o = [0];
            continue;
          case 7:
            o = e.ops.pop(), e.trys.pop();
            continue;
          default:
            if (r = e.trys, !(r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
              e = 0;
              continue;
            }
            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
              e.label = o[1];
              break;
            }
            if (o[0] === 6 && e.label < r[1]) {
              e.label = r[1], r = o;
              break;
            }
            if (r && e.label < r[2]) {
              e.label = r[2], e.ops.push(o);
              break;
            }
            r[2] && e.ops.pop(), e.trys.pop();
            continue;
        }
        o = t.call(i, e);
      } catch (u) {
        o = [6, u], a = 0;
      } finally {
        n = r = 0;
      }
    if (o[0] & 5)
      throw o[1];
    return { value: o[0] ? o[1] : void 0, done: !0 };
  }
}, Le = function(i) {
  Te(t, i);
  function t(e, n) {
    return i.call(this, e, n) || this;
  }
  return t.prototype.getConfig = function() {
    return re(this, void 0, void 0, function() {
      return ne(this, function(e) {
        switch (e.label) {
          case 0:
            return this.baseConfig.logger.debug("ManualPollService.getConfig() called."), [4, this.baseConfig.cache.get(this.baseConfig.getCacheKey())];
          case 1:
            return [2, e.sent()];
        }
      });
    });
  }, t.prototype.refreshConfigAsync = function() {
    return re(this, void 0, void 0, function() {
      var e;
      return ne(this, function(n) {
        switch (n.label) {
          case 0:
            return this.baseConfig.logger.debug("ManualPollService.refreshConfigAsync() called."), [4, this.baseConfig.cache.get(this.baseConfig.getCacheKey())];
          case 1:
            return e = n.sent(), [2, this.refreshLogicBaseAsync(e)];
        }
      });
    });
  }, t;
}(Y);
function K(i) {
  function t(A, C) {
    var T = A << C | A >>> 32 - C;
    return T;
  }
  function e(A) {
    for (var C = "", T, E = 7; E >= 0; E--)
      T = A >>> E * 4 & 15, C += T.toString(16);
    return C;
  }
  function n(A) {
    A = A.replace(/\r\n/g, `
`);
    for (var C = "", T = 0; T < A.length; T++) {
      var E = A.charCodeAt(T);
      E < 128 ? C += String.fromCharCode(E) : E > 127 && E < 2048 ? (C += String.fromCharCode(E >> 6 | 192), C += String.fromCharCode(E & 63 | 128)) : (C += String.fromCharCode(E >> 12 | 224), C += String.fromCharCode(E >> 6 & 63 | 128), C += String.fromCharCode(E & 63 | 128));
    }
    return C;
  }
  var a, r, s, l = new Array(80), c = 1732584193, o = 4023233417, u = 2562383102, h = 271733878, S = 3285377520, v, f, y, p, m, I;
  i = n(i);
  var w = i.length, V = new Array();
  for (r = 0; r < w - 3; r += 4)
    s = i.charCodeAt(r) << 24 | i.charCodeAt(r + 1) << 16 | i.charCodeAt(r + 2) << 8 | i.charCodeAt(r + 3), V.push(s);
  switch (w % 4) {
    case 0:
      r = 2147483648;
      break;
    case 1:
      r = i.charCodeAt(w - 1) << 24 | 8388608;
      break;
    case 2:
      r = i.charCodeAt(w - 2) << 24 | i.charCodeAt(w - 1) << 16 | 32768;
      break;
    case 3:
      r = i.charCodeAt(w - 3) << 24 | i.charCodeAt(w - 2) << 16 | i.charCodeAt(w - 1) << 8 | 128;
      break;
  }
  for (V.push(r); V.length % 16 != 14; )
    V.push(0);
  for (V.push(w >>> 29), V.push(w << 3 & 4294967295), a = 0; a < V.length; a += 16) {
    for (r = 0; r < 16; r++)
      l[r] = V[a + r];
    for (r = 16; r <= 79; r++)
      l[r] = t(l[r - 3] ^ l[r - 8] ^ l[r - 14] ^ l[r - 16], 1);
    for (v = c, f = o, y = u, p = h, m = S, r = 0; r <= 19; r++)
      I = t(v, 5) + (f & y | ~f & p) + m + l[r] + 1518500249 & 4294967295, m = p, p = y, y = t(f, 30), f = v, v = I;
    for (r = 20; r <= 39; r++)
      I = t(v, 5) + (f ^ y ^ p) + m + l[r] + 1859775393 & 4294967295, m = p, p = y, y = t(f, 30), f = v, v = I;
    for (r = 40; r <= 59; r++)
      I = t(v, 5) + (f & y | f & p | y & p) + m + l[r] + 2400959708 & 4294967295, m = p, p = y, y = t(f, 30), f = v, v = I;
    for (r = 60; r <= 79; r++)
      I = t(v, 5) + (f ^ y ^ p) + m + l[r] + 3395469782 & 4294967295, m = p, p = y, y = t(f, 30), f = v, v = I;
    c = c + v & 4294967295, o = o + f & 4294967295, u = u + y & 4294967295, h = h + p & 4294967295, S = S + m & 4294967295;
  }
  return (e(c) + e(o) + e(u) + e(h) + e(S)).toLowerCase();
}
var ie = /^[0-9]+$/, k = function(i, t) {
  var e = ie.test(i), n = ie.test(t);
  return e && n && (i = +i, t = +t), i === t ? 0 : e && !n ? -1 : n && !e ? 1 : i < t ? -1 : 1;
}, $ = 256, B = Number.MAX_SAFE_INTEGER || 9007199254740991, D = [], d = [], g = {}, Re = 0, b = function(i, t) {
  var e = Re++;
  g[i] = e, d[e] = t, D[e] = new RegExp(t, void 0);
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
var M = function() {
  function i(t, e) {
    if ((!e || typeof e != "object") && (e = {
      loose: !!e,
      includePrerelease: !1
    }), t instanceof i) {
      if (t.loose === !!e.loose && t.includePrerelease === !!e.includePrerelease)
        return t;
      t = t.version;
    } else if (typeof t != "string")
      throw new TypeError("Invalid Version: ".concat(t));
    if (t.length > $)
      throw new TypeError("version is longer than ".concat($, " characters"));
    this.options = e, this.loose = !!e.loose, this.includePrerelease = !!e.includePrerelease;
    var n = t.trim().match(e.loose ? D[g.LOOSE] : D[g.FULL]);
    if (!n)
      throw new TypeError("Invalid Version: ".concat(t));
    if (this.raw = t, this.major = +n[1], this.minor = +n[2], this.patch = +n[3], this.major > B || this.major < 0)
      throw new TypeError("Invalid major version");
    if (this.minor > B || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > B || this.patch < 0)
      throw new TypeError("Invalid patch version");
    n[4] ? this.prerelease = n[4].split(".").map(function(a) {
      if (/^[0-9]+$/.test(a)) {
        var r = +a;
        if (r >= 0 && r < B)
          return r;
      }
      return a;
    }) : this.prerelease = [], this.build = n[5] ? n[5].split(".") : [], this.format();
  }
  return i.prototype.format = function() {
    return this.version = "".concat(this.major, ".").concat(this.minor, ".").concat(this.patch), this.prerelease.length && (this.version += "-".concat(this.prerelease.join("."))), this.version;
  }, i.prototype.toString = function() {
    return this.version;
  }, i.prototype.compare = function(t) {
    if (!(t instanceof i)) {
      if (typeof t == "string" && t === this.version)
        return 0;
      t = new i(t, this.options);
    }
    return t.version === this.version ? 0 : this.compareMain(t) || this.comparePre(t);
  }, i.prototype.compareMain = function(t) {
    return t instanceof i || (t = new i(t, this.options)), k(this.major, t.major) || k(this.minor, t.minor) || k(this.patch, t.patch);
  }, i.prototype.comparePre = function(t) {
    if (t instanceof i || (t = new i(t, this.options)), this.prerelease.length && !t.prerelease.length)
      return -1;
    if (!this.prerelease.length && t.prerelease.length)
      return 1;
    if (!this.prerelease.length && !t.prerelease.length)
      return 0;
    var e = 0;
    do {
      var n = this.prerelease[e], a = t.prerelease[e];
      if (n === void 0 && a === void 0)
        return 0;
      if (a === void 0)
        return 1;
      if (n === void 0)
        return -1;
      if (n === a)
        continue;
      return k(n, a);
    } while (++e);
  }, i.prototype.compareBuild = function(t) {
    t instanceof i || (t = new i(t, this.options));
    var e = 0;
    do {
      var n = this.build[e], a = t.build[e];
      if (n === void 0 && a === void 0)
        return 0;
      if (a === void 0)
        return 1;
      if (n === void 0)
        return -1;
      if (n === a)
        continue;
      return k(n, a);
    } while (++e);
  }, i.prototype.inc = function(t, e) {
    switch (t) {
      case "premajor":
        this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", e);
        break;
      case "preminor":
        this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", e);
        break;
      case "prepatch":
        this.prerelease.length = 0, this.inc("patch", e), this.inc("pre", e);
        break;
      case "prerelease":
        this.prerelease.length === 0 && this.inc("patch", e), this.inc("pre", e);
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
        e && (this.prerelease[0] === e ? isNaN(this.prerelease[1]) && (this.prerelease = [e, 0]) : this.prerelease = [e, 0]);
        break;
      default:
        throw new Error("invalid increment argument: ".concat(t));
    }
    return this.format(), this.raw = this.version, this;
  }, i;
}(), _e = function(i, t) {
  if ((!t || typeof t != "object") && (t = {
    loose: !!t,
    includePrerelease: !1
  }), i instanceof M)
    return i;
  if (typeof i != "string" || i.length > $)
    return null;
  var e = t.loose ? D[g.LOOSE] : D[g.FULL];
  if (!e.test(i))
    return null;
  try {
    return new M(i, t);
  } catch {
    return null;
  }
}, U = function(i, t, e) {
  return new M(i, e).compare(new M(t, e));
}, N = function(i) {
  var t = _e(i, !1);
  return t ? t.version : null;
}, Ne = function(i, t) {
  return U(i, t, !0) === 0;
}, xe = function(i, t) {
  return U(i, t, !1) === 0;
}, Pe = function(i, t) {
  return U(i, t, !1) < 0;
}, Fe = function(i, t) {
  return U(i, t, !1) <= 0;
}, Ue = function(i, t) {
  return U(i, t, !1) > 0;
}, ke = function(i, t) {
  return U(i, t, !1) >= 0;
}, H = function(i) {
  return i === void 0;
};
function ae(i) {
  return i ? Object.fromEntries(Object.entries(i[X.FeatureFlags]).map(function(t) {
    var e = t[0], n = t[1];
    return [e, Ce.fromJson(n)];
  })) : {};
}
var De = function() {
  function i(t) {
    this.logger = t;
  }
  return i.prototype.Evaluate = function(t, e, n, a, r) {
    if (this.logger.debug("RolloutEvaluator.Evaluate() called."), !t[e]) {
      var s = "Evaluating getValue('" + e + "') failed. Returning default value: '" + n + "'.";
      return s += " Here are the available keys: {" + Object.keys(t).join() + "}.", this.logger.error(s), { Value: n, VariationId: r };
    }
    var l = t[e], c = new Be();
    c.User = a, c.KeyName = e, c.ReturnValue = n;
    var o = new oe();
    if (o.EvaluateLog = c, a)
      o = this.EvaluateRules(l.rolloutRules, a, c), o.ValueAndVariationId == null && (o.ValueAndVariationId = this.EvaluateVariations(l.rolloutPercentageItems, e, a), o.ValueAndVariationId && (o.EvaluateLog.ReturnValue = o.ValueAndVariationId.Value), l.rolloutPercentageItems.length > 0 && o.EvaluateLog.OpAppendLine("Evaluating % options => " + (o.ValueAndVariationId == null ? "user not targeted" : "user targeted")));
    else if (l.rolloutRules && l.rolloutRules.length > 0 || l.rolloutPercentageItems && l.rolloutPercentageItems.length > 0) {
      var s = "Evaluating getValue('" + e + "'). ";
      s += "UserObject missing! You should pass a UserObject to getValue(), in order to make targeting work properly. ", s += "Read more: https://configcat.com/docs/advanced/user-object", this.logger.warn(s);
    }
    return o.ValueAndVariationId == null && (o.ValueAndVariationId = {
      Value: l.value,
      VariationId: l.variationId
    }, o.EvaluateLog.ReturnValue = o.ValueAndVariationId.Value), this.logger.info(o.EvaluateLog.GetLog()), o.ValueAndVariationId;
  }, i.prototype.EvaluateRules = function(t, e, n) {
    this.logger.debug("RolloutEvaluator.EvaluateRules() called.");
    var a = new oe();
    if (a.ValueAndVariationId = null, t && t.length > 0)
      for (var r = function(o) {
        var u = t[o], h = s.GetUserAttribute(e, u.comparisonAttribute), S = u.comparator, v = u.comparisonValue, f = "Evaluating rule: '" + h + "' " + s.RuleToString(S) + " '" + v + "' => ";
        if (!h)
          return f += "NO MATCH (Attribute is not defined on the user object)", n.OpAppendLine(f), "continue";
        switch (S) {
          case 0:
            for (var y = v.split(","), p = 0; p < y.length; p++)
              if (y[p].trim() === h)
                return f += "MATCH", n.OpAppendLine(f), a.ValueAndVariationId = {
                  Value: u.value,
                  VariationId: u.variationId
                }, n.ReturnValue = a.ValueAndVariationId.Value, a.EvaluateLog = n, { value: a };
            f += "no match";
            break;
          case 1:
            if (!v.split(",").some(function(I) {
              return I.trim() === h;
            }))
              return f += "MATCH", n.OpAppendLine(f), a.ValueAndVariationId = {
                Value: u.value,
                VariationId: u.variationId
              }, n.ReturnValue = a.ValueAndVariationId.Value, a.EvaluateLog = n, { value: a };
            f += "no match";
            break;
          case 2:
            if (h.indexOf(v) !== -1)
              return f += "MATCH", n.OpAppendLine(f), a.ValueAndVariationId = {
                Value: u.value,
                VariationId: u.variationId
              }, n.ReturnValue = a.ValueAndVariationId.Value, a.EvaluateLog = n, { value: a };
            f += "no match";
            break;
          case 3:
            if (h.indexOf(v) === -1)
              return f += "MATCH", n.OpAppendLine(f), a.ValueAndVariationId = {
                Value: u.value,
                VariationId: u.variationId
              }, n.ReturnValue = a.ValueAndVariationId.Value, a.EvaluateLog = n, { value: a };
            f += "no match";
            break;
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
            if (s.EvaluateSemver(h, v, S))
              return f += "MATCH", n.OpAppendLine(f), a.ValueAndVariationId = {
                Value: u.value,
                VariationId: u.variationId
              }, n.ReturnValue = a.ValueAndVariationId.Value, a.EvaluateLog = n, { value: a };
            f += "no match";
            break;
          case 10:
          case 11:
          case 12:
          case 13:
          case 14:
          case 15:
            if (s.EvaluateNumber(h, v, S))
              return f += "MATCH", n.OpAppendLine(f), a.ValueAndVariationId = {
                Value: u.value,
                VariationId: u.variationId
              }, n.ReturnValue = a.ValueAndVariationId.Value, a.EvaluateLog = n, { value: a };
            f += "no match";
            break;
          case 16:
            for (var m = v.split(","), p = 0; p < m.length; p++)
              if (m[p].trim() === K(h))
                return f += "MATCH", n.OpAppendLine(f), a.ValueAndVariationId = {
                  Value: u.value,
                  VariationId: u.variationId
                }, n.ReturnValue = a.ValueAndVariationId.Value, a.EvaluateLog = n, { value: a };
            f += "no match";
            break;
          case 17:
            if (!v.split(",").some(function(I) {
              return I.trim() === K(h);
            }))
              return f += "MATCH", n.OpAppendLine(f), a.ValueAndVariationId = {
                Value: u.value,
                VariationId: u.variationId
              }, n.ReturnValue = a.ValueAndVariationId.Value, a.EvaluateLog = n, { value: a };
            f += "no match";
            break;
        }
        n.OpAppendLine(f);
      }, s = this, l = 0; l < t.length; l++) {
        var c = r(l);
        if (typeof c == "object")
          return c.value;
      }
    return a.EvaluateLog = n, a;
  }, i.prototype.EvaluateVariations = function(t, e, n) {
    if (this.logger.debug("RolloutEvaluator.EvaluateVariations() called."), t && t.length > 0)
      for (var a = e + (n.identifier === null || n.identifier === void 0 ? "" : n.identifier), r = K(a).substring(0, 7), s = parseInt(r, 16) % 100, l = 0, c = 0; c < t.length; c++) {
        var o = t[c];
        if (l += +o.percentage, s < l)
          return {
            Value: o.value,
            VariationId: o.variationId
          };
      }
    return null;
  }, i.prototype.EvaluateNumber = function(t, e, n) {
    this.logger.debug("RolloutEvaluator.EvaluateNumber() called.");
    var a, r;
    if (t && !Number.isNaN(Number.parseFloat(t.replace(",", "."))))
      a = Number.parseFloat(t.replace(",", "."));
    else
      return !1;
    if (e && !Number.isNaN(Number.parseFloat(e.replace(",", "."))))
      r = Number.parseFloat(e.replace(",", "."));
    else
      return !1;
    switch (n) {
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
  }, i.prototype.EvaluateSemver = function(t, e, n) {
    if (this.logger.debug("RolloutEvaluator.EvaluateSemver() called."), N(t) == null || H(e))
      return !1;
    switch (e = e.trim(), n) {
      case 4:
        for (var a = e.split(","), r = !1, s = 0; s < a.length; s++)
          if (!(!a[s] || H(a[s]) || a[s].trim() === "")) {
            if (N(a[s].trim()) == null)
              return !1;
            r || (r = Ne(t, a[s].trim()));
          }
        return r;
      case 5:
        return !e.split(",").some(function(l) {
          return !l || H(l) || l.trim() === "" || (l = N(l.trim()), l == null) ? !1 : xe(t, l);
        });
      case 6:
        return N(e) == null ? !1 : Pe(t, e);
      case 7:
        return N(e) == null ? !1 : Fe(t, e);
      case 8:
        return N(e) == null ? !1 : Ue(t, e);
      case 9:
        return N(e) == null ? !1 : ke(t, e);
    }
    return !1;
  }, i.prototype.GetUserAttribute = function(t, e) {
    switch (e) {
      case "Identifier":
        return t.identifier;
      case "Email":
        return t.email;
      case "Country":
        return t.country;
      default:
        return (t.custom || {})[e];
    }
  }, i.prototype.RuleToString = function(t) {
    switch (t) {
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
        return t;
    }
  }, i;
}(), oe = function() {
  function i() {
  }
  return i;
}(), Be = function() {
  function i() {
    this.Operations = "";
  }
  return i.prototype.OpAppendLine = function(t) {
    this.Operations += " " + t + `
`;
  }, i.prototype.GetLog = function() {
    return "Evaluate '" + this.KeyName + `'
 User : ` + JSON.stringify(this.User) + `
` + this.Operations + " Returning value : " + this.ReturnValue;
  }, i;
}(), O;
(function(i) {
  i[i.LocalOnly = 0] = "LocalOnly", i[i.LocalOverRemote = 1] = "LocalOverRemote", i[i.RemoteOverLocal = 2] = "RemoteOverLocal";
})(O || (O = {}));
var x = globalThis && globalThis.__assign || function() {
  return x = Object.assign || function(i) {
    for (var t, e = 1, n = arguments.length; e < n; e++) {
      t = arguments[e];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (i[a] = t[a]);
    }
    return i;
  }, x.apply(this, arguments);
}, L = globalThis && globalThis.__awaiter || function(i, t, e, n) {
  function a(r) {
    return r instanceof e ? r : new e(function(s) {
      s(r);
    });
  }
  return new (e || (e = Promise))(function(r, s) {
    function l(u) {
      try {
        o(n.next(u));
      } catch (h) {
        s(h);
      }
    }
    function c(u) {
      try {
        o(n.throw(u));
      } catch (h) {
        s(h);
      }
    }
    function o(u) {
      u.done ? r(u.value) : a(u.value).then(l, c);
    }
    o((n = n.apply(i, t || [])).next());
  });
}, R = globalThis && globalThis.__generator || function(i, t) {
  var e = { label: 0, sent: function() {
    if (r[0] & 1)
      throw r[1];
    return r[1];
  }, trys: [], ops: [] }, n, a, r, s;
  return s = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function l(o) {
    return function(u) {
      return c([o, u]);
    };
  }
  function c(o) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; e; )
      try {
        if (n = 1, a && (r = o[0] & 2 ? a.return : o[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, o[1])).done)
          return r;
        switch (a = 0, r && (o = [o[0] & 2, r.value]), o[0]) {
          case 0:
          case 1:
            r = o;
            break;
          case 4:
            return e.label++, { value: o[1], done: !1 };
          case 5:
            e.label++, a = o[1], o = [0];
            continue;
          case 7:
            o = e.ops.pop(), e.trys.pop();
            continue;
          default:
            if (r = e.trys, !(r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
              e = 0;
              continue;
            }
            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
              e.label = o[1];
              break;
            }
            if (o[0] === 6 && e.label < r[1]) {
              e.label = r[1], r = o;
              break;
            }
            if (r && e.label < r[2]) {
              e.label = r[2], e.ops.push(o);
              break;
            }
            r[2] && e.ops.pop(), e.trys.pop();
            continue;
        }
        o = t.call(i, e);
      } catch (u) {
        o = [6, u], a = 0;
      } finally {
        n = r = 0;
      }
    if (o[0] & 5)
      throw o[1];
    return { value: o[0] ? o[1] : void 0, done: !0 };
  }
}, Me = function() {
  function i(t, e) {
    var n;
    if (!t)
      throw new Error("Invalid 'options' value");
    if (this.options = t, this.options.logger.debug("Initializing ConfigCatClient. Options: " + JSON.stringify(this.options)), !e)
      throw new Error("Invalid 'configCatKernel' value");
    if (!e.configFetcher)
      throw new Error("Invalid 'configCatKernel.configFetcher' value");
    if (t != null && t.defaultUser && this.setDefaultUser(t.defaultUser), this.evaluator = new De(t.logger), ((n = t == null ? void 0 : t.flagOverrides) === null || n === void 0 ? void 0 : n.behaviour) != O.LocalOnly)
      if (t && t instanceof me)
        this.configService = new Ve(e.configFetcher, t);
      else if (t && t instanceof be)
        this.configService = new Le(e.configFetcher, t);
      else if (t && t instanceof se)
        this.configService = new Q(e.configFetcher, t);
      else
        throw new Error("Invalid 'options' value");
  }
  return i.prototype.dispose = function() {
    this.options.logger.debug("dispose() called"), this.configService instanceof Q && (this.options.logger.debug("Disposing AutoPollConfigService"), this.configService.dispose());
  }, i.prototype.getValue = function(t, e, n, a) {
    this.options.logger.debug("getValue() called."), this.getValueAsync(t, e, a).then(function(r) {
      n(r);
    });
  }, i.prototype.getValueAsync = function(t, e, n) {
    var a = this;
    return this.options.logger.debug("getValueAsync() called."), new Promise(function(r) {
      return L(a, void 0, void 0, function() {
        var s, l;
        return R(this, function(c) {
          switch (c.label) {
            case 0:
              return [4, this.getSettingsAsync()];
            case 1:
              return s = c.sent(), s ? (l = this.evaluator.Evaluate(s, t, e, n ?? this.defaultUser).Value, r(l), [2]) : (this.options.logger.error("config.json is not present. Returning default value: '" + e + "'."), r(e), [2]);
          }
        });
      });
    });
  }, i.prototype.forceRefresh = function(t) {
    this.options.logger.debug("forceRefresh() called."), this.forceRefreshAsync().then(function() {
      t();
    });
  }, i.prototype.forceRefreshAsync = function() {
    var t = this;
    return this.options.logger.debug("forceRefreshAsync() called."), new Promise(function(e) {
      return L(t, void 0, void 0, function() {
        var n;
        return R(this, function(a) {
          switch (a.label) {
            case 0:
              return [4, (n = this.configService) === null || n === void 0 ? void 0 : n.refreshConfigAsync()];
            case 1:
              return a.sent(), e(), [2];
          }
        });
      });
    });
  }, i.prototype.getAllKeys = function(t) {
    this.options.logger.debug("getAllKeys() called."), this.getAllKeysAsync().then(function(e) {
      t(e);
    });
  }, i.prototype.getAllKeysAsync = function() {
    var t = this;
    return this.options.logger.debug("getAllKeysAsync() called."), new Promise(function(e) {
      return L(t, void 0, void 0, function() {
        var n;
        return R(this, function(a) {
          switch (a.label) {
            case 0:
              return [4, this.getSettingsAsync()];
            case 1:
              return n = a.sent(), n ? (e(Object.keys(n)), [2]) : (this.options.logger.error("config.json is not present, returning empty array"), e([]), [2]);
          }
        });
      });
    });
  }, i.prototype.getVariationId = function(t, e, n, a) {
    this.options.logger.debug("getVariationId() called."), this.getVariationIdAsync(t, e, a).then(function(r) {
      n(r);
    });
  }, i.prototype.getVariationIdAsync = function(t, e, n) {
    var a = this;
    return this.options.logger.debug("getVariationIdAsync() called."), new Promise(function(r) {
      return L(a, void 0, void 0, function() {
        var s, l;
        return R(this, function(c) {
          switch (c.label) {
            case 0:
              return [4, this.getSettingsAsync()];
            case 1:
              return s = c.sent(), s ? (l = this.evaluator.Evaluate(s, t, null, n ?? this.defaultUser, e).VariationId, r(l), [2]) : (this.options.logger.error("config.json is not present. Returning default variationId: '" + e + "'."), r(e), [2]);
          }
        });
      });
    });
  }, i.prototype.getAllVariationIds = function(t, e) {
    this.options.logger.debug("getAllVariationIds() called."), this.getAllVariationIdsAsync(e).then(function(n) {
      t(n);
    });
  }, i.prototype.getAllVariationIdsAsync = function(t) {
    var e = this;
    return this.options.logger.debug("getAllVariationIdsAsync() called."), new Promise(function(n) {
      return L(e, void 0, void 0, function() {
        var a, r, s, l = this;
        return R(this, function(c) {
          switch (c.label) {
            case 0:
              return [4, this.getAllKeysAsync()];
            case 1:
              return a = c.sent(), a.length === 0 ? (n([]), [2]) : (r = a.map(function(o) {
                return l.getVariationIdAsync(o, null, t);
              }), [4, Promise.all(r)]);
            case 2:
              return s = c.sent(), n(s), [2];
          }
        });
      });
    });
  }, i.prototype.getKeyAndValue = function(t, e) {
    this.options.logger.debug("getKeyAndValue() called."), this.getKeyAndValueAsync(t).then(function(n) {
      e(n);
    });
  }, i.prototype.getKeyAndValueAsync = function(t) {
    var e = this;
    return this.options.logger.debug("getKeyAndValueAsync() called."), new Promise(function(n) {
      return L(e, void 0, void 0, function() {
        var a, r, s, o, l, c, o, u;
        return R(this, function(h) {
          switch (h.label) {
            case 0:
              return [4, this.getSettingsAsync()];
            case 1:
              if (a = h.sent(), !a)
                return this.options.logger.error("config.json is not present, returning empty array"), n(null), [2];
              for (r in a) {
                if (t === a[r].variationId)
                  return n({ settingKey: r, settingValue: a[r].value }), [2];
                if (s = a[r].rolloutRules, s && s.length > 0) {
                  for (o = 0; o < s.length; o++)
                    if (l = s[o], t === l.variationId)
                      return n({ settingKey: r, settingValue: l.value }), [2];
                }
                if (c = a[r].rolloutPercentageItems, c && c.length > 0) {
                  for (o = 0; o < c.length; o++)
                    if (u = c[o], t === u.variationId)
                      return n({ settingKey: r, settingValue: u.value }), [2];
                }
              }
              return this.options.logger.error("Could not find the setting for the given variation ID: " + t), n(null), [2];
          }
        });
      });
    });
  }, i.prototype.getAllValues = function(t, e) {
    this.options.logger.debug("getAllValues() called."), this.getAllValuesAsync(e).then(function(n) {
      t(n);
    });
  }, i.prototype.getAllValuesAsync = function(t) {
    var e = this;
    return this.options.logger.debug("getAllValuesAsync() called."), new Promise(function(n) {
      return L(e, void 0, void 0, function() {
        var a, r, s, l = this;
        return R(this, function(c) {
          switch (c.label) {
            case 0:
              return [4, this.getSettingsAsync()];
            case 1:
              return a = c.sent(), a ? (r = Object.keys(a), s = [], r.forEach(function(o) {
                s.push({
                  settingKey: o,
                  settingValue: l.evaluator.Evaluate(a, o, void 0, t ?? l.defaultUser).Value
                });
              }), n(s), [2]) : (this.options.logger.error("config.json is not present, returning empty array"), n([]), [2]);
          }
        });
      });
    });
  }, i.prototype.setDefaultUser = function(t) {
    this.defaultUser = t;
  }, i.prototype.clearDefaultUser = function() {
    this.defaultUser = void 0;
  }, i.prototype.getSettingsAsync = function() {
    var t = this;
    return this.options.logger.debug("getSettingsAsync() called."), new Promise(function(e) {
      return L(t, void 0, void 0, function() {
        var n, a, r, s, l, c, o;
        return R(this, function(u) {
          switch (u.label) {
            case 0:
              return !((l = this.options) === null || l === void 0) && l.flagOverrides ? [4, this.options.flagOverrides.dataSource.getOverrides()] : [3, 3];
            case 1:
              return n = u.sent(), this.options.flagOverrides.behaviour == O.LocalOnly ? (e(n), [2]) : [4, (c = this.configService) === null || c === void 0 ? void 0 : c.getConfig()];
            case 2:
              if (a = u.sent(), r = ae(a == null ? void 0 : a.ConfigJSON), this.options.flagOverrides.behaviour == O.LocalOverRemote)
                return e(x(x({}, r), n)), [2];
              if (this.options.flagOverrides.behaviour == O.RemoteOverLocal)
                return e(x(x({}, n), r)), [2];
              u.label = 3;
            case 3:
              return [4, (o = this.configService) === null || o === void 0 ? void 0 : o.getConfig()];
            case 4:
              return s = u.sent(), !s || !s.ConfigJSON || !s.ConfigJSON[X.FeatureFlags] ? (e(null), [2]) : (e(ae(s.ConfigJSON)), [2]);
          }
        });
      });
    });
  }, i;
}();
function je() {
  Object.fromEntries || (Object.fromEntries = function(i) {
    if (!i || !i[Symbol.iterator])
      throw new Error("Object.fromEntries() requires a single iterable argument");
    for (var t = {}, e = 0, n = i; e < n.length; e++) {
      var a = n[e], r = a[0], s = a[1];
      t[r] = s;
    }
    return t;
  });
}
je();
function We(i, t, e) {
  return new Me(new se(i, t.sdkType, t.sdkVersion, e, t.cache), t);
}
var _;
(function(i) {
  i[i.Debug = 4] = "Debug", i[i.Info = 3] = "Info", i[i.Warn = 2] = "Warn", i[i.Error = 1] = "Error", i[i.Off = -1] = "Off";
})(_ || (_ = {}));
var P;
(function(i) {
  i[i.Fetched = 0] = "Fetched", i[i.NotModified = 1] = "NotModified", i[i.Errored = 2] = "Errored";
})(P || (P = {}));
var G = function() {
  function i(t, e, n) {
    this.status = t, this.responseBody = e, this.eTag = n;
  }
  return i.success = function(t, e) {
    return new i(P.Fetched, t, e);
  }, i.notModified = function() {
    return new i(P.NotModified, "");
  }, i.error = function() {
    return new i(P.Errored, "");
  }, i;
}(), Ke = function() {
  function i() {
  }
  return i.prototype.fetchLogic = function(t, e, n) {
    var a = new XMLHttpRequest();
    a.onreadystatechange = function() {
      if (a.readyState === 4) {
        var r = a.getResponseHeader("ETag");
        a.status === 200 ? n(G.success(a.responseText, r)) : a.status === 304 ? n(G.notModified()) : (t.logger.error("Failed to download feature flags & settings from ConfigCat. " + a.status + " - " + a.statusText), n(G.error()));
      }
    }, a.open("GET", t.getUrl(), !0), a.timeout = t.requestTimeoutMs, a.send(null);
  }, i;
}(), He = function() {
  function i() {
    this.cache = {};
  }
  return i.prototype.set = function(t, e) {
    this.cache[t] = e;
    try {
      localStorage.setItem(t, btoa(JSON.stringify(e)));
    } catch {
    }
  }, i.prototype.get = function(t) {
    var e = this.cache[t];
    if (e)
      return e;
    try {
      var n = localStorage.getItem(t);
      if (n) {
        var a = JSON.parse(atob(n));
        if (a)
          return this.cache[t] = a, a;
      }
    } catch {
    }
    return null;
  }, i;
}();
const Ge = "6.0.1";
function Je(i, t) {
  return $e(i, t);
}
function $e(i, t) {
  return We(i, {
    configFetcher: new Ke(),
    cache: new He(),
    sdkType: "ConfigCat-JS",
    sdkVersion: Ge
  }, t);
}
F.Global, F.EuOnly;
O.LocalOnly, O.LocalOverRemote, O.RemoteOverLocal;
const Xe = {
  install: (i, t) => {
    let e = Je(t.SDKKey, t.clientOptions);
    i.config.globalProperties.configCatClient = e;
  }
};
export {
  Xe as ConfigCatPlugin,
  ze as FeatureWrapper
};
