import { defineComponent as kn, ref as $n, inject as Un, onBeforeMount as Mn, onUnmounted as Pn, renderSlot as _e } from "vue";
class He {
  constructor() {
    this.callbacks = [];
  }
  get aborted() {
    return !this.callbacks;
  }
  abort() {
    if (!this.aborted) {
      const e = this.callbacks;
      this.callbacks = void 0;
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
function bt(n, e) {
  let t;
  return new Promise((i) => {
    const s = e?.registerCallback(() => {
      clearTimeout(t), i(!1);
    });
    t = setTimeout(() => {
      s?.(), i(!0);
    }, n);
  });
}
const wt = typeof performance < "u" && P(performance?.now) ? () => performance.now() : () => (/* @__PURE__ */ new Date()).getTime();
function Yt(n) {
  return new xn(n);
}
const xn = typeof WeakRef == "function" ? WeakRef : _n();
function _n() {
  const n = function(e) {
    this.target = e;
  };
  return n.prototype.deref = function() {
    return this.target;
  }, n.isFallback = !0, n;
}
function F(n) {
  try {
    return typeof n == "symbol" ? "[symbol]" : typeof n == "object" && n !== null && !P(n.toString) ? Object.prototype.toString.call(n) : String(n);
  } catch {
    return "[unknown]";
  }
}
function z(n, e = !1) {
  return n instanceof Error ? t(n, "") : F(n);
  function t(i, s, r) {
    const o = i.toString();
    let a = (s && s.substring(4) + "--> ") + o;
    if (e && i.stack) {
      let l = i.stack.trim();
      l.lastIndexOf(o, 0) === 0 && (l = l.substring(o.length).trim()), a += `
` + l.replace(/^\s*(?:at\s)?/gm, s + "    at ");
    }
    if (typeof AggregateError == "function" && i instanceof AggregateError) {
      (r ?? (r = [])).push(i);
      for (const l of i.errors)
        if (l instanceof Error) {
          if (r.indexOf(l) >= 0)
            continue;
          a += `
` + t(l, s + "    ", r);
        } else
          a += `
` + s + "--> " + F(l);
      r.pop();
    }
    return a;
  }
}
function N() {
  return /* @__PURE__ */ Object.create(null);
}
const Gt = P(Object.setPrototypeOf) ? Object.setPrototypeOf : (n, e) => (n.__proto__ = e, n);
function rt(n, e) {
  n instanceof e || Gt(n, e.prototype);
}
function L(n, e) {
  return Object.prototype.hasOwnProperty.call(n, e);
}
function ot(n) {
  return typeof n == "boolean";
}
function W(n) {
  return typeof n == "number";
}
function Qt(n, e, t) {
  return W(n) && e <= n && n <= t;
}
const at = P(Number.isSafeInteger) ? Number.isSafeInteger : (n) => W(n) && isFinite(n) && Math.floor(n) === n && Math.abs(n) <= 9007199254740991;
function lt(n, e, t) {
  return at(n) && e <= n && n <= t;
}
function S(n) {
  return typeof n == "string";
}
function Ce(n) {
  return typeof n == "object" && n !== null && !M(n);
}
function M(n) {
  return Array.isArray(n);
}
function Xt(n) {
  return M(n) && !n.some((e) => !S(e));
}
function P(n) {
  return typeof n == "function";
}
function Zt(n) {
  return P(n?.then);
}
function ct(n, e, t) {
  return ot(n) || ve(n, e, "boolean", t), n;
}
function en(n, e, t) {
  return W(n) || ve(n, e, "number", t), n;
}
function Te(n, e, t, i, s) {
  return en(n, e, s), i(n) || Q(e, `Expected a value ${t}, got ${n}.`, s, RangeError), n;
}
function Z(n, e, t, i, s) {
  return en(n, e, s), i(n) || Q(e, `Expected a valid \`${t}\` value, got '${n}'.`, s, RangeError), n;
}
function G(n, e, t, i) {
  return S(n) || ve(n, e, "string", i), n.length || !t || Q(e, "Expected a non-empty string.", i), n;
}
function Rt(n, e, t) {
  return P(n) || ve(n, e, "function", t), n;
}
function $(n, e, t, i) {
  if (Ce(n) || ve(n, e, "object", i), t)
    for (const s in t) {
      const r = t[s];
      (!(s in n) || r && !P(n[s])) && Q(e, `Expected an object with ${r ? "method" : "property"} \`${s}\`.`, i, TypeError);
    }
  return n;
}
function ve(n, e, t, i) {
  Q(e, `Expected a value of type ${t}, got ${n === null ? "null" : typeof n}.`, i, TypeError);
}
function Q(n, e, t, i) {
  const s = t ? "property" : (t = "", "argument");
  throw (i ?? Error)(`Invalid ${s} \`${n}${t}\`. ${e}`);
}
function ut(n, e = 0, t, i = ", ") {
  const s = n.length;
  if (!s)
    return "";
  let r = "";
  return e > 0 && s > e && (n = n.slice(0, e), t && (r = t(s - e))), "'" + n.join("'" + i + "'") + "'" + r;
}
function ue(n) {
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
function Hn(n) {
  if (!n.length || !/^\s*[+-]?\d+\s*$/.test(n))
    return NaN;
  const e = +n;
  return at(e) ? e : NaN;
}
function ft(n) {
  return !n.length || /^\s*$|^\s*0[^\d.eE]/.test(n) ? NaN : +n;
}
function Nt(n, e) {
  const t = {};
  for (const i in n)
    if (L(n, i)) {
      const s = n[i];
      t[i] = e ? e(i, s) : s;
    }
  return t;
}
class pe {
  constructor(e, t) {
    this.state = e, this.factoryOrValue = t;
  }
  toString() {
    let { factoryOrValue: e } = this;
    return S(e) || (this.factoryOrValue = e = e(this.state), this.state = void 0), e;
  }
}
class tn {
  constructor() {
    this.events = N(), this.eventCount = 0;
  }
  addListenerCore(e, t, i) {
    if (!P(t))
      throw TypeError("Listener must be a function");
    const s = this.events[e], r = { fn: t, once: i };
    return s ? M(s) ? s.push(r) : this.events[e] = [s, r] : (this.events[e] = r, this.eventCount++), this;
  }
  removeListenerCore(e, t, i) {
    const s = this.events[e];
    if (!s)
      return this;
    if (M(s)) {
      for (let r = s.length - 1; r >= 0; r--)
        if (i(s[r], t)) {
          s.splice(r, 1), s.length ? s.length === 1 && (this.events[e] = s[0]) : this.removeEvent(e);
          break;
        }
    } else i(s, t) && this.removeEvent(e);
    return this;
  }
  removeEvent(e) {
    --this.eventCount === 0 ? this.events = N() : delete this.events[e];
  }
  on(e, t) {
    return this.addListenerCore(e, t, !1);
  }
  once(e, t) {
    return this.addListenerCore(e, t, !0);
  }
  removeListener(e, t) {
    if (!P(t))
      throw TypeError("Listener must be a function");
    return this.removeListenerCore(e, t, (i, s) => i.fn === s);
  }
  removeAllListeners(e) {
    return arguments.length ? this.events[e] && this.removeEvent(e) : (this.events = N(), this.eventCount = 0), this;
  }
  listeners(e) {
    const t = this.events[e];
    if (!t)
      return [];
    if (!M(t))
      return [t.fn];
    const i = t.length, s = new Array(i);
    for (let r = 0; r < i; r++)
      s[r] = t[r].fn;
    return s;
  }
  listenerCount(e) {
    const t = this.events[e];
    return t ? M(t) ? t.length : 1 : 0;
  }
  eventNames() {
    const e = [];
    if (this.eventCount === 0)
      return e;
    const t = this.events;
    for (const i in t)
      e.push(i);
    return P(Object.getOwnPropertySymbols) ? e.concat(Object.getOwnPropertySymbols(t)) : e;
  }
  emit(e, t, i, s, r, ...o) {
    let a = this.events[e];
    if (!a)
      return !1;
    let l, c;
    M(a) ? (a = a.slice(), [l, c] = [a[0], a.length]) : [l, c] = [a, 1];
    const f = arguments.length - 1;
    for (let u = 0; ; ) {
      switch (l.once && this.removeListenerCore(e, l, (h, g) => h === g), f) {
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
          const h = new Array(f);
          for (let g = 0; g < f; g++)
            h[g] = arguments[g + 1];
          l.fn.apply(this, h);
          break;
      }
      if (++u >= c)
        break;
      l = a[u];
    }
    return !0;
  }
}
const Ie = tn.prototype;
Ie.addListener = Ie.on;
Ie.off = Ie.removeListener;
var Ke;
(function(n) {
  n[n.No = 0] = "No", n[n.Should = 1] = "Should", n[n.Force = 2] = "Force";
})(Ke || (Ke = {}));
var be;
(function(n) {
  n[n.Boolean = 0] = "Boolean", n[n.String = 1] = "String", n[n.Int = 2] = "Int", n[n.Double = 3] = "Double";
})(be || (be = {}));
var We;
(function(n) {
  n[n.TextIsOneOf = 0] = "TextIsOneOf", n[n.TextIsNotOneOf = 1] = "TextIsNotOneOf", n[n.TextContainsAnyOf = 2] = "TextContainsAnyOf", n[n.TextNotContainsAnyOf = 3] = "TextNotContainsAnyOf", n[n.SemVerIsOneOf = 4] = "SemVerIsOneOf", n[n.SemVerIsNotOneOf = 5] = "SemVerIsNotOneOf", n[n.SemVerLess = 6] = "SemVerLess", n[n.SemVerLessOrEquals = 7] = "SemVerLessOrEquals", n[n.SemVerGreater = 8] = "SemVerGreater", n[n.SemVerGreaterOrEquals = 9] = "SemVerGreaterOrEquals", n[n.NumberEquals = 10] = "NumberEquals", n[n.NumberNotEquals = 11] = "NumberNotEquals", n[n.NumberLess = 12] = "NumberLess", n[n.NumberLessOrEquals = 13] = "NumberLessOrEquals", n[n.NumberGreater = 14] = "NumberGreater", n[n.NumberGreaterOrEquals = 15] = "NumberGreaterOrEquals", n[n.SensitiveTextIsOneOf = 16] = "SensitiveTextIsOneOf", n[n.SensitiveTextIsNotOneOf = 17] = "SensitiveTextIsNotOneOf", n[n.DateTimeBefore = 18] = "DateTimeBefore", n[n.DateTimeAfter = 19] = "DateTimeAfter", n[n.SensitiveTextEquals = 20] = "SensitiveTextEquals", n[n.SensitiveTextNotEquals = 21] = "SensitiveTextNotEquals", n[n.SensitiveTextStartsWithAnyOf = 22] = "SensitiveTextStartsWithAnyOf", n[n.SensitiveTextNotStartsWithAnyOf = 23] = "SensitiveTextNotStartsWithAnyOf", n[n.SensitiveTextEndsWithAnyOf = 24] = "SensitiveTextEndsWithAnyOf", n[n.SensitiveTextNotEndsWithAnyOf = 25] = "SensitiveTextNotEndsWithAnyOf", n[n.SensitiveArrayContainsAnyOf = 26] = "SensitiveArrayContainsAnyOf", n[n.SensitiveArrayNotContainsAnyOf = 27] = "SensitiveArrayNotContainsAnyOf", n[n.TextEquals = 28] = "TextEquals", n[n.TextNotEquals = 29] = "TextNotEquals", n[n.TextStartsWithAnyOf = 30] = "TextStartsWithAnyOf", n[n.TextNotStartsWithAnyOf = 31] = "TextNotStartsWithAnyOf", n[n.TextEndsWithAnyOf = 32] = "TextEndsWithAnyOf", n[n.TextNotEndsWithAnyOf = 33] = "TextNotEndsWithAnyOf", n[n.ArrayContainsAnyOf = 34] = "ArrayContainsAnyOf", n[n.ArrayNotContainsAnyOf = 35] = "ArrayNotContainsAnyOf";
})(We || (We = {}));
var ze;
(function(n) {
  n[n.Equals = 0] = "Equals", n[n.NotEquals = 1] = "NotEquals";
})(ze || (ze = {}));
var Je;
(function(n) {
  n[n.IsIn = 0] = "IsIn", n[n.IsNotIn = 1] = "IsNotIn";
})(Je || (Je = {}));
const Xi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get PrerequisiteFlagComparator() {
    return ze;
  },
  get RedirectMode() {
    return Ke;
  },
  get SegmentComparator() {
    return Je;
  },
  get SettingType() {
    return be;
  },
  get UserComparator() {
    return We;
  }
}, Symbol.toStringTag, { value: "Module" }));
class I {
  static contentEquals(e, t) {
    return e.httpETag && t.httpETag ? e.httpETag === t.httpETag : e.configJson === t.configJson;
  }
  constructor(e, t, i, s) {
    this.configJson = e, this.config = t, this.timestamp = i, this.httpETag = s;
  }
  with(e) {
    return new I(this.configJson, this.config, e, this.httpETag);
  }
  get isEmpty() {
    return !this.config;
  }
  isExpired(e) {
    return this === I.empty || this.timestamp + e < I.generateTimestamp();
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
    for (let f = 0; f < t.length; f++) {
      if (i = e.indexOf(`
`, i), i < 0)
        throw Error("Number of values is fewer than expected.");
      t[f] = i++;
    }
    let s = t[0], r = e.substring(0, s);
    const o = parseInt(r);
    if (isNaN(o))
      throw Error("Invalid fetch time: " + r);
    i = s + 1, s = t[1], r = e.substring(i, s);
    const a = r.length > 0 ? r : void 0;
    i = s + 1, r = e.substring(i);
    let l, c;
    return r.length > 0 && (l = nn(r), c = r), new I(c, l, o, a);
  }
}
I.serializationFormatVersion = "v2";
I.empty = new I(void 0, void 0, 0, void 0);
function V(n) {
  return n ? new Date(n.timestamp) : void 0;
}
function nn(n) {
  G(n, "configJson", !0);
  const e = JSON.parse(n);
  return sn(e);
}
function sn(n) {
  var e;
  qn(n, ["$"]);
  const t = n.f;
  if (t) {
    const i = (e = n.p) === null || e === void 0 ? void 0 : e.s, s = n.s;
    for (const r in t)
      if (L(t, r)) {
        const o = t[r];
        o._configJsonSalt = i, o._configSegments = s;
      }
  }
  return n;
}
function rn(n) {
  const e = Object.create(ht);
  return e.t = -1, e.v = n, e;
}
const ht = /* @__PURE__ */ Object.create(null);
ht.toString = function() {
  return Object.prototype.toString.call(this);
};
function qn(n, e) {
  n == null && dt(e), D(n, e), v(n, "p", e, jn), v(n, "s", e, Vn), v(n, "f", e, Kn);
}
function jn(n, e) {
  D(n, e), v(n, "r", e, K), v(n, "u", e, H), v(n, "s", e, H);
}
function Vn(n, e) {
  te(n, e);
  for (let t = 0; t < n.length; t++)
    ee(n, t, e, Bn);
}
function Bn(n, e) {
  D(n, e), v(n, "n", e, H, !0), v(n, "r", e, Gn);
}
function Kn(n, e) {
  D(n, e);
  for (const t in n)
    L(n, t) && v(n, t, e, Wn, !0);
}
function Wn(n, e) {
  D(n, e), v(n, "t", e, K, !0), v(n, "a", e, H), v(n, "r", e, zn), v(n, "p", e, an), gt(n, e);
}
function zn(n, e) {
  te(n, e);
  for (let t = 0; t < n.length; t++)
    ee(n, t, e, Jn);
}
function Jn(n, e) {
  D(n, e), v(n, "c", e, Yn), v(n, "s", e, gt), v(n, "p", e, an);
}
function Yn(n, e) {
  te(n, e);
  for (let t = 0; t < n.length; t++)
    ee(n, t, e, Qn);
}
function Gn(n, e) {
  te(n, e);
  for (let t = 0; t < n.length; t++)
    ee(n, t, e, on);
}
function Qn(n, e) {
  D(n, e), v(n, "u", e, on), v(n, "p", e, Zn), v(n, "s", e, ei);
}
function on(n, e) {
  D(n, e), v(n, "a", e, H, !0), v(n, "c", e, K, !0), v(n, "s", e, H), v(n, "d", e, cn), v(n, "l", e, Xn);
}
function Xn(n, e) {
  te(n, e);
  for (let t = 0; t < n.length; t++)
    ee(n, t, e, H);
}
function Zn(n, e) {
  D(n, e), v(n, "f", e, H, !0), v(n, "c", e, K, !0), v(n, "v", e, ln, !0);
}
function ei(n, e) {
  D(n, e), v(n, "s", e, K, !0), v(n, "c", e, K, !0);
}
function an(n, e) {
  te(n, e);
  for (let t = 0; t < n.length; t++)
    ee(n, t, e, ti);
}
function ti(n, e) {
  D(n, e), v(n, "p", e, K, !0), gt(n, e);
}
function gt(n, e) {
  D(n, e), v(n, "v", e, ln, !0), v(n, "i", e, H);
}
function ln(n, e) {
  D(n, e), v(n, "b", e, ni), v(n, "s", e, H), v(n, "i", e, K), v(n, "d", e, cn);
}
function ee(n, e, t, i) {
  const s = n[e];
  t.push(`[${e}]`), s == null && dt(t), i(s, t), t.pop();
}
function v(n, e, t, i, s) {
  const r = n[e];
  t.push(`.${e}`), r == null ? s && dt(t) : i(r, t), t.pop();
}
function te(n, e) {
  M(n) || ne(e);
}
function D(n, e) {
  Ce(n) || ne(e), Gt(n, ht);
}
function ni(n, e) {
  ot(n) || ne(e);
}
function H(n, e) {
  S(n) || ne(e);
}
function K(n, e) {
  at(n) || ne(e);
}
function cn(n, e) {
  W(n) || ne(e);
}
function dt(n) {
  throw TypeError(`Invalid config JSON content. Missing required value at ${n.join("")}`);
}
function ne(n) {
  throw TypeError(`Invalid config JSON content. Type mismatch at ${n.join("")}`);
}
function ii(n) {
  return be[n];
}
function vt(n) {
  const e = n.t;
  if (lt(e, 0, 3) || e === -1 && ri(n))
    return e;
  T("Setting type is invalid.");
}
function Ye(n) {
  switch (typeof n) {
    case "boolean":
      return 0;
    case "string":
      return 1;
    case "number":
      return 3;
  }
}
function si(n, e) {
  switch (e) {
    case 0:
      return ot(n);
    case 1:
      return S(n);
    case 2:
    case 3:
      return W(n);
    default:
      return !1;
  }
}
function pt(n) {
  return Ye(n) !== void 0;
}
function ri(n) {
  var e, t;
  return !(!((e = n.r) === null || e === void 0) && e.length) && !(!((t = n.p) === null || t === void 0) && t.length);
}
function yt(n, e) {
  const t = n.s, i = n.p;
  if (t != null) {
    if (i == null)
      return !1;
  } else if (i?.length)
    return !0;
  e || T("Targeting rule THEN part is missing or invalid.");
}
function oi(n) {
  let e, t;
  return t = n.u, t != null && (e = "u"), t = n.p, t != null && (e = e ? !1 : "p"), t = n.s, t != null && (e = e ? !1 : "s"), e || T("Condition is missing or invalid."), e;
}
function U(n, e, t) {
  switch (e) {
    case 0: {
      const i = n.b;
      if (i != null)
        return i;
      break;
    }
    case 1: {
      const i = n.s;
      if (i != null)
        return i;
      break;
    }
    case 2: {
      const i = n.i;
      if (i != null)
        return i;
      break;
    }
    case 3: {
      const i = n.d;
      if (i != null)
        return i;
      break;
    }
    case -1:
      if (pt(n))
        return n;
    default:
      t || T(n === null ? "Setting value is null." : n === void 0 ? "Setting value is undefined." : `Setting value '${F(n)}' is of an unsupported type (${typeof n}).`);
      return;
  }
  t || T("Setting value is missing or invalid.");
}
function T(n) {
  throw new fe(n);
}
class fe extends Error {
  constructor(e) {
    super(e), this.message = e, this.name = fe.name, rt(this, fe);
  }
}
class un {
  constructor() {
    this.cachedConfig = I.empty;
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
class Me {
  constructor(e, t) {
    this.cache = e, this.logger = t, this.cachedConfig = I.empty, this.cachedSerializedConfig = void 0;
  }
  async set(e, t) {
    try {
      if (!t.isEmpty)
        this.cachedSerializedConfig = I.serialize(t), this.cachedConfig = t;
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
    if (e == null || e === this.cachedSerializedConfig)
      return this.cachedConfig;
    const t = I.deserialize(e), i = !I.contentEquals(t, this.cachedConfig);
    return this.cachedConfig = t, this.cachedSerializedConfig = e, i ? [this.cachedConfig] : this.cachedConfig;
  }
  get(e) {
    let t;
    try {
      const i = this.cache.get(e);
      if (Zt(i))
        return (async (s) => {
          let r;
          try {
            r = this.updateCachedConfig(await s);
          } catch (o) {
            r = this.cachedConfig, this.logger.configServiceCacheReadError(o);
          }
          return r;
        })(i);
      t = this.updateCachedConfig(i);
    } catch (i) {
      t = this.cachedConfig, this.logger.configServiceCacheReadError(i);
    }
    return t;
  }
  getInMemory() {
    return this.cachedConfig;
  }
}
var Ge;
(function(n) {
  n[n.Debug = 4] = "Debug", n[n.Info = 3] = "Info", n[n.Warn = 2] = "Warn", n[n.Error = 1] = "Error", n[n.Off = -1] = "Off";
})(Ge || (Ge = {}));
function fn(n) {
  return Ge[n];
}
class y {
  static from(...e) {
    return (t, ...i) => new y(t, e, i);
  }
  constructor(e, t, i) {
    this.strings = e, this.argNames = t, this.argValues = i, this.cachedDefaultFormattedMessage = void 0;
  }
  get defaultFormattedMessage() {
    let e = this.cachedDefaultFormattedMessage;
    if (!S(e)) {
      e = "";
      const { strings: t, argValues: i } = this;
      let s = 0;
      for (; s < t.length - 1; s++)
        e += t[s], e += F(i[s]);
      e += t[s], this.cachedDefaultFormattedMessage = e;
    }
    return e;
  }
  toString() {
    return this.defaultFormattedMessage;
  }
}
function j(n) {
  var e;
  return S(n) ? n : (e = n.cachedDefaultFormattedMessage) !== null && e !== void 0 ? e : new pe(n, (t) => t.defaultFormattedMessage);
}
class ai {
  get level() {
    var e;
    return (e = this.logger.level) !== null && e !== void 0 ? e : 2;
  }
  get eol() {
    var e;
    return (e = this.logger.eol) !== null && e !== void 0 ? e : `
`;
  }
  constructor(e, t, i) {
    this.logger = e, this.filter = t, this.hooks = i;
  }
  isEnabled(e) {
    return this.level >= e;
  }
  log(e, t, i, s) {
    var r;
    return this.isEnabled(e) && (!this.filter || this.filter(e, t, i, s)) && this.logger.log(e, t, i, s), e === 1 && ((r = this.hooks) === null || r === void 0 || r.emit("clientError", j(i), s)), i;
  }
  debug(e, t) {
    this.log(4, 0, e, t);
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
  clientMethodError(e, t) {
    return this.log(1, 1003, y.from("METHOD_NAME")`Error occurred in the \`${e}\` method.`, t);
  }
  fetchFailedDueToInvalidSdkKey(e, t) {
    return e = Ft(e), this.log(1, 1100, t == null ? y.from("SDK_KEY")`Your SDK Key seems to be wrong: '${e}'. You can find the valid SDK Key at https://app.configcat.com/sdkkey` : y.from("SDK_KEY", "RAY_ID")`Your SDK Key seems to be wrong: '${e}'. You can find the valid SDK Key at https://app.configcat.com/sdkkey (Ray ID: ${t})`);
  }
  fetchFailedDueToUnexpectedHttpResponse(e, t, i) {
    return this.log(1, 1101, i == null ? y.from("STATUS_CODE", "REASON_PHRASE")`Unexpected HTTP response was received while trying to fetch config JSON: ${e} ${t}` : y.from("STATUS_CODE", "REASON_PHRASE", "RAY_ID")`Unexpected HTTP response was received while trying to fetch config JSON: ${e} ${t} (Ray ID: ${i})`);
  }
  fetchFailedDueToRequestTimeout(e, t) {
    return this.log(1, 1102, y.from("TIMEOUT")`Request timed out while trying to fetch config JSON. Timeout value: ${e}ms`, t);
  }
  fetchFailedDueToUnexpectedError(e) {
    return this.log(1, 1103, "Unexpected error occurred while trying to fetch config JSON. It is most likely due to a local network issue. Please make sure your application can reach the ConfigCat CDN servers (or your proxy server) over HTTP.", e);
  }
  fetchFailedDueToRedirectLoop(e) {
    return this.log(1, 1104, e == null ? "Redirection loop encountered while trying to fetch config JSON. Please contact us at https://configcat.com/support/" : y.from("RAY_ID")`Redirection loop encountered while trying to fetch config JSON. Please contact us at https://configcat.com/support/ (Ray ID: ${e})`);
  }
  fetchReceived200WithInvalidBody(e, t) {
    return this.log(1, 1105, e == null ? "Fetching config JSON was successful but the HTTP response content was invalid." : y.from("RAY_ID")`Fetching config JSON was successful but the HTTP response content was invalid. (Ray ID: ${e})`, t);
  }
  fetchReceived304WhenLocalCacheIsEmpty(e, t, i) {
    return this.log(1, 1106, i == null ? y.from("STATUS_CODE", "REASON_PHRASE")`Unexpected HTTP response was received when no config JSON is cached locally: ${e} ${t}` : y.from("STATUS_CODE", "REASON_PHRASE", "RAY_ID")`Unexpected HTTP response was received when no config JSON is cached locally: ${e} ${t} (Ray ID: ${i})`);
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
    return e = Ft(e), this.log(2, 3e3, y.from("SDK_KEY")`There is an existing client instance for the specified SDK Key. No new client instance will be created and the specified options are ignored. Returning the existing client instance. SDK Key: '${e}'.`);
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
class hn {
  constructor(e = 2, t = `
`) {
    this.level = e, this.eol = t, this.SOURCE = "ConfigCat";
  }
  log(e, t, i, s) {
    const [r, o] = e === 4 ? [console.info, "DEBUG"] : e === 3 ? [console.info, "INFO"] : e === 2 ? [console.warn, "WARN"] : e === 1 ? [console.error, "ERROR"] : [console.log, fn(e).toUpperCase()], a = s !== void 0 ? this.eol + z(s, !0) : "";
    r(`${this.SOURCE} - ${o} - [${t}] ${i}${a}`);
  }
}
function Ft(n) {
  return n.substring(0, n.length - 6).replace(/[^/]/g, "*") + n.substring(n.length - 6);
}
var Lt;
(function(n) {
  n[n.Fetched = 0] = "Fetched", n[n.NotModified = 1] = "NotModified", n[n.Errored = 2] = "Errored";
})(Lt || (Lt = {}));
function li(n) {
  return { status: 0, config: n, errorCode: 0 };
}
function ci(n) {
  return { status: 1, config: n, errorCode: 0 };
}
function ie(n, e, t, i) {
  return { status: 2, config: n, errorCode: e, errorMessage: t, errorException: i };
}
class ui {
  constructor(e, t, i, s) {
    this.url = e, this.lastETag = t, this.headers = i, this.timeoutMs = s;
  }
}
class gn {
  constructor(e, t, i, s) {
    this.statusCode = e, this.reasonPhrase = t, this.body = s, this.eTag = void 0, this.rayId = void 0;
    let r, o;
    for (const [a, l] of i) {
      const c = a.toLowerCase();
      if (r == null && c === "etag") {
        if (this.eTag = r = l, o != null)
          break;
      } else if (o == null && c === "cf-ray" && (this.rayId = o = l, r != null))
        break;
    }
  }
}
class _ extends Error {
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
          return o ? a + " " + (o instanceof Error ? o.message : F(o)) : a;
      }
    })(e, t)), this.cause = e, this.name = _.name, rt(this, _), this.args = t;
  }
}
var Dt;
(function(n) {
  n[n.UnexpectedError = -1] = "UnexpectedError", n[n.None = 0] = "None", n[n.LocalOnlyClient = 1] = "LocalOnlyClient", n[n.OfflineClient = 3200] = "OfflineClient", n[n.InvalidSdkKey = 1100] = "InvalidSdkKey", n[n.UnexpectedHttpResponse = 1101] = "UnexpectedHttpResponse", n[n.HttpRequestTimeout = 1102] = "HttpRequestTimeout", n[n.HttpRequestFailure = 1103] = "HttpRequestFailure", n[n.InvalidHttpResponseContent = 1105] = "InvalidHttpResponseContent", n[n.InvalidHttpResponseWhenLocalCacheIsEmpty = 1106] = "InvalidHttpResponseWhenLocalCacheIsEmpty";
})(Dt || (Dt = {}));
function dn() {
  return { isSuccess: !0, errorCode: 0 };
}
function we(n, e, t) {
  return {
    isSuccess: !1,
    errorCode: n,
    _errorMessage: e,
    get errorMessage() {
      var i;
      return (i = this._errorMessage) === null || i === void 0 ? void 0 : i.toString();
    },
    errorException: t
  };
}
function kt(n) {
  return n.status !== 2 ? dn() : we(n.errorCode, n.errorMessage, n.errorException);
}
var Re;
(function(n) {
  n[n.NoFlagData = 0] = "NoFlagData", n[n.HasLocalOverrideFlagDataOnly = 1] = "HasLocalOverrideFlagDataOnly", n[n.HasCachedFlagDataOnly = 2] = "HasCachedFlagDataOnly", n[n.HasUpToDateFlagData = 3] = "HasUpToDateFlagData";
})(Re || (Re = {}));
var Qe;
(function(n) {
  n[n.Online = 0] = "Online", n[n.Offline = 1] = "Offline", n[n.Disposed = 2] = "Disposed";
})(Qe || (Qe = {}));
function $t(n) {
  return Qe[n];
}
class mt {
  constructor(e) {
    this.options = e, this.pendingCacheSyncUp = null, this.pendingConfigRefresh = null, this.cacheKey = e.getCacheKey(), this.configFetcher = e.configFetcher, this.requestHeaders = [
      ["User-Agent", e.clientVersion],
      ["X-ConfigCat-UserAgent", e.clientVersion]
    ], this.status = e.offline ? 1 : 0;
  }
  prepareClientForEvents() {
    var e;
    const t = (e = this.options.hooks.unwrap()) === null || e === void 0 ? void 0 : e.configCatClient, i = t?.initConfigService;
    P(i) && i.call(t, this);
  }
  dispose() {
    this.status = 2;
  }
  get disposed() {
    return this.status === 2;
  }
  async refreshConfigAsync() {
    const e = await this.syncUpWithCache();
    if (this.isOffline) {
      if (this.options.cache instanceof Me)
        return [dn(), e];
      {
        const t = this.options.logger.configServiceCannotInitiateHttpCalls();
        return [we(3200, j(t)), e];
      }
    } else {
      const [t, i] = await this.refreshConfigCoreAsync(e, !0);
      return [kt(t), i];
    }
  }
  refreshConfigCoreAsync(e, t) {
    if (this.pendingConfigRefresh)
      return this.pendingConfigRefresh;
    const i = (async (s) => {
      const r = await this.fetchAsync(s);
      return (r.status === 0 || r.status === 1 || r.config.timestamp > s.timestamp && (!r.config.isEmpty || this.options.cache.getInMemory().isEmpty)) && (await this.options.cache.set(this.cacheKey, r.config), s = r.config), this.onConfigFetched(r, t), r.status === 0 && this.onConfigChanged(r.config), [r, s];
    })(e);
    this.pendingConfigRefresh = i;
    try {
      i.finally(() => this.pendingConfigRefresh = null);
    } catch (s) {
      throw this.pendingConfigRefresh = null, s;
    }
    return i;
  }
  onConfigFetched(e, t) {
    this.options.logger.debug("config fetched"), this.options.hooks.emit("configFetched", kt(e), t);
  }
  onConfigChanged(e) {
    var t;
    this.options.logger.debug("config changed"), this.options.hooks.emit("configChanged", (t = e.config) !== null && t !== void 0 ? t : sn({}));
  }
  async fetchAsync(e) {
    const t = this.options;
    t.logger.debug("ConfigServiceBase.fetchAsync() called.");
    let i;
    try {
      const [s, r, o] = await this.fetchRequestAsync(e.httpETag);
      switch (s.statusCode) {
        case 200:
          return r ? (t.logger.debug("ConfigServiceBase.fetchAsync(): fetch was successful. Returning new config."), li(new I(s.body, r, I.generateTimestamp(), s.eTag))) : (i = t.logger.fetchReceived200WithInvalidBody(s.rayId, o), t.logger.debug(`ConfigServiceBase.fetchAsync(): ${s.statusCode} ${s.reasonPhrase} was received but the HTTP response content was invalid. Returning null.`), ie(e, 1105, j(i), o));
        case 304:
          return e.isEmpty ? (i = t.logger.fetchReceived304WhenLocalCacheIsEmpty(s.statusCode, s.reasonPhrase, s.rayId), t.logger.debug(`ConfigServiceBase.fetchAsync(): ${s.statusCode} ${s.reasonPhrase} was received when no config is cached locally. Returning null.`), ie(e, 1106, j(i))) : (t.logger.debug("ConfigServiceBase.fetchAsync(): content was not modified. Returning last config with updated timestamp."), ci(e.with(I.generateTimestamp())));
        case 403:
        case 404:
          return i = t.logger.fetchFailedDueToInvalidSdkKey(t.sdkKey, s.rayId), t.logger.debug("ConfigServiceBase.fetchAsync(): fetch was unsuccessful. Returning last config (if any) with updated timestamp."), ie(e.with(I.generateTimestamp()), 1100, j(i));
        default:
          return i = t.logger.fetchFailedDueToUnexpectedHttpResponse(s.statusCode, s.reasonPhrase, s.rayId), t.logger.debug("ConfigServiceBase.fetchAsync(): fetch was unsuccessful. Returning null."), ie(e, 1101, j(i));
      }
    } catch (s) {
      let r;
      return [r, i] = s instanceof _ && s.cause === "timeout" ? [1102, t.logger.fetchFailedDueToRequestTimeout(s.args[0], s)] : [1103, t.logger.fetchFailedDueToUnexpectedError(s)], t.logger.debug("ConfigServiceBase.fetchAsync(): fetch was unsuccessful. Returning null."), ie(e, r, j(i), s);
    }
  }
  async fetchRequestAsync(e, t = 2) {
    const i = this.options;
    i.logger.debug("ConfigServiceBase.fetchRequestAsync() called.");
    for (let s = 0; ; s++) {
      i.logger.debug(`ConfigServiceBase.fetchRequestAsync(): calling fetchLogic()${s > 0 ? `, retry ${s}/${t}` : ""}.`);
      const r = new ui(i.getUrl(), e, this.requestHeaders, i.requestTimeoutMs), o = await this.configFetcher.fetchAsync(r);
      if (o.statusCode !== 200)
        return [o];
      if (!o.body)
        return i.logger.debug("ConfigServiceBase.fetchRequestAsync(): no response body."), [o, void 0, Error("No response body.")];
      let a;
      try {
        a = nn(o.body);
      } catch (u) {
        return i.logger.debug("ConfigServiceBase.fetchRequestAsync(): invalid response body."), [o, void 0, u];
      }
      const l = a.p;
      if (!l)
        return i.logger.debug("ConfigServiceBase.fetchRequestAsync(): preferences are missing or invalid."), [o, a];
      const c = l.u;
      if (c == null || c === i.baseUrl)
        return i.logger.debug("ConfigServiceBase.fetchRequestAsync(): baseUrl OK."), [o, a];
      const f = l.r;
      if (i.baseUrlOverriden && f !== 2)
        return i.logger.debug("ConfigServiceBase.fetchRequestAsync(): options.baseUrlOverriden && redirect !== 2."), [o, a];
      if (i.baseUrl = c, f === 0)
        return [o, a];
      if (f === 1 && i.logger.dataGovernanceIsOutOfSync(), s >= t)
        return i.logger.fetchFailedDueToRedirectLoop(o.rayId), [o, a];
    }
  }
  get isOfflineExactly() {
    return this.status === 1;
  }
  get isOffline() {
    return this.status !== 0;
  }
  goOnline() {
  }
  setOnline() {
    this.status === 1 ? (this.goOnline(), this.status = 0, this.options.logger.configServiceStatusChanged($t(this.status))) : this.disposed && this.options.logger.configServiceMethodHasNoEffectDueToDisposedClient("setOnline");
  }
  setOffline() {
    this.status === 0 ? (this.status = 1, this.options.logger.configServiceStatusChanged($t(this.status))) : this.disposed && this.options.logger.configServiceMethodHasNoEffectDueToDisposedClient("setOffline");
  }
  syncUpWithCache() {
    const { cache: e } = this.options;
    if (e instanceof un)
      return e.get(this.cacheKey);
    if (this.pendingCacheSyncUp)
      return this.pendingCacheSyncUp;
    const t = e.get(this.cacheKey);
    if (!Zt(t))
      return this.onCacheSynced(t);
    const i = t.then((s) => this.onCacheSynced(s));
    this.pendingCacheSyncUp = i;
    try {
      i.finally(() => this.pendingCacheSyncUp = null);
    } catch (s) {
      throw this.pendingCacheSyncUp = null, s;
    }
    return i;
  }
  onCacheSynced(e) {
    if (!M(e))
      return e;
    const [t] = e;
    return t.isEmpty || this.onConfigChanged(t), t;
  }
  async waitForReadyAsync(e) {
    return this.getCacheState(await e);
  }
  getReadyPromise(e) {
    return this.waitForReadyAsync(e).then((t) => (this.options.hooks.emit("clientReady", t), t));
  }
}
const fi = 500;
class hi extends mt {
  constructor(e) {
    super(e), this.signalInitialization = () => {
    }, this.stopToken = new He(), this.pollIntervalMs = e.pollIntervalSeconds * 1e3, this.pollExpirationMs = this.pollIntervalMs - fi, this.prepareClientForEvents();
    const t = this.syncUpWithCache();
    if (e.maxInitWaitTimeSeconds !== 0) {
      this.initialized = !1;
      const i = new Promise((s) => this.signalInitialization = s);
      this.initializationPromise = this.waitForInitializationAsync(i).then((s) => (this.initialized = !0, s));
    } else
      this.initialized = !0, this.initializationPromise = Promise.resolve(!1);
    this.readyPromise = this.getReadyPromise(t), this.startRefreshWorker(t, this.stopToken);
  }
  async waitForInitializationAsync(e) {
    if (this.options.maxInitWaitTimeSeconds < 0)
      return await e, !0;
    const t = new He(), i = await Promise.race([
      e.then(() => !0),
      bt(this.options.maxInitWaitTimeSeconds * 1e3, t).then(() => !1)
    ]);
    return t.abort(), i;
  }
  async waitForReadyAsync() {
    return await this.initializationPromise, this.getCacheState(this.options.cache.getInMemory());
  }
  async getConfigAsync() {
    this.options.logger.debug("AutoPollConfigService.getConfigAsync() called.");
    let e = await this.syncUpWithCache();
    if (!e.isExpired(this.pollIntervalMs))
      this.signalInitialization();
    else if (!this.isOffline && !this.initialized)
      this.options.logger.debug("AutoPollConfigService.getConfigAsync() - cache is empty or expired, waiting for initialization."), await this.initializationPromise, e = this.options.cache.getInMemory();
    else
      return this.options.logger.debug("AutoPollConfigService.getConfigAsync() - cache is empty or expired."), e;
    return this.options.logger.debug("AutoPollConfigService.getConfigAsync() - returning value from cache."), e;
  }
  refreshConfigAsync() {
    return this.options.logger.debug("AutoPollConfigService.refreshConfigAsync() called."), super.refreshConfigAsync();
  }
  dispose() {
    this.options.logger.debug("AutoPollConfigService.dispose() called."), super.dispose(), this.stopToken.aborted || this.stopRefreshWorker();
  }
  onConfigFetched(e, t) {
    this.signalInitialization(), super.onConfigFetched(e, t);
  }
  goOnline() {
    this.stopRefreshWorker(), this.stopToken = new He(), this.startRefreshWorker(null, this.stopToken);
  }
  async startRefreshWorker(e, t) {
    for (this.options.logger.debug("AutoPollConfigService.startRefreshWorker() called."); !t.aborted; ) {
      try {
        const i = wt() + this.pollIntervalMs;
        try {
          await this.refreshWorkerLogic(e);
        } catch (r) {
          this.options.logger.autoPollConfigServiceErrorDuringPolling(r);
        }
        const s = i - wt();
        s > 0 && await bt(s, t);
      } catch (i) {
        this.options.logger.autoPollConfigServiceErrorDuringPolling(i);
      }
      e = null;
    }
  }
  stopRefreshWorker() {
    this.options.logger.debug("AutoPollConfigService.stopRefreshWorker() called."), this.stopToken.abort();
  }
  async refreshWorkerLogic(e) {
    this.options.logger.debug("AutoPollConfigService.refreshWorkerLogic() called.");
    const t = await (e ?? this.syncUpWithCache());
    if (t.isExpired(this.pollExpirationMs) && (e ? !this.isOfflineExactly : !this.isOffline)) {
      await this.refreshConfigCoreAsync(t, !1);
      return;
    }
    this.signalInitialization();
  }
  getCacheState(e) {
    return e.isEmpty ? 0 : e.isExpired(this.pollIntervalMs) ? 2 : 3;
  }
}
class Ne {
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
const Fe = Ne.prototype;
Fe.addListener = Fe.on;
Fe.off = Fe.removeListener;
var Xe;
(function(n) {
  n[n.LocalOnly = 0] = "LocalOnly", n[n.LocalOverRemote = 1] = "LocalOverRemote", n[n.RemoteOverLocal = 2] = "RemoteOverLocal";
})(Xe || (Xe = {}));
function Pe(n) {
  return Xe[n];
}
class gi {
  constructor(e, t) {
    this.initialSettings = Ut(e), this.map = t ? e : null;
  }
  getOverrides() {
    return this.map ? Ut(this.map) : this.initialSettings;
  }
}
function Ut(n) {
  const e = {};
  for (const t in n)
    L(n, t) && (e[t] = rn(n[t]));
  return e;
}
const di = "cc-", Ee = ";str";
class vi {
  get currentValue() {
    if (!(typeof location > "u" || location === null))
      return location.search;
  }
}
let Se;
class pi {
  constructor(e, t, i) {
    this.watchChanges = !!e, this.paramPrefix = t ?? di, i ?? (i = Se ?? (Se = new vi())), this.queryStringProvider = i;
    const s = i.currentValue;
    this.settings = Pt(s, this.paramPrefix), this.queryString = Mt(s);
  }
  getOverrides() {
    if (this.watchChanges) {
      const e = this.queryStringProvider.currentValue, t = Mt(e);
      this.queryString !== t && (this.settings = Pt(e, this.paramPrefix), this.queryString = t);
    }
    return this.settings;
  }
}
function Mt(n) {
  if (n == null)
    return "";
  if (S(n))
    return n;
  let e = "", t = "?";
  for (const i in n) {
    if (!L(n, i))
      continue;
    const s = n[i];
    let r, o;
    if (!M(s))
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
function Pt(n, e) {
  const t = {};
  return S(n) ? mi(n, e, t) : n != null && yi(n, e, t), t;
}
function yi(n, e, t) {
  for (const i in n) {
    if (!L(n, i))
      continue;
    const s = n[i];
    let r, o;
    if (!M(s))
      r = s, o = 1;
    else if (s.length)
      r = s[0], o = s.length;
    else
      continue;
    for (let a = 0; vn(i, r, e, t), !(++a >= o); )
      r = s[a];
  }
}
function mi(n, e, t) {
  if (!n || n.lastIndexOf("?", 0) < 0)
    return;
  const i = n.substring(1).split("&");
  for (let s of i) {
    s = s.replace(/\+/g, " ");
    const r = s.indexOf("="), o = decodeURIComponent(r >= 0 ? s.substring(0, r) : s), a = r >= 0 ? decodeURIComponent(s.substring(r + 1)) : "";
    vn(o, a, e, t);
  }
}
function vn(n, e, t, i) {
  if (!n || n.length <= t.length || n.lastIndexOf(t, 0) < 0)
    return;
  n = n.substring(t.length), n.length > Ee.length && n.indexOf(Ee, n.length - Ee.length) >= 0 ? n = n.substring(0, n.length - Ee.length) : e = Ei(e), i[n] = rn(e);
}
function Ei(n) {
  switch (n.toLowerCase()) {
    case "false":
      return !1;
    case "true":
      return !0;
    default:
      const e = ft(n);
      return isNaN(e) ? n : e;
  }
}
function pn(n) {
  function e(b, x) {
    var me = b << x | b >>> 32 - x;
    return me;
  }
  var t, i, s, r = new Array(80), o = 1732584193, a = 4023233417, l = 2562383102, c = 271733878, f = 3285377520, u, h, g, d, E, A;
  n = ue(n);
  var p = n.length, C = new Array();
  for (i = 0; i < p - 3; i += 4)
    s = n.charCodeAt(i) << 24 | n.charCodeAt(i + 1) << 16 | n.charCodeAt(i + 2) << 8 | n.charCodeAt(i + 3), C.push(s);
  switch (p % 4) {
    case 0:
      i = 2147483648;
      break;
    case 1:
      i = n.charCodeAt(p - 1) << 24 | 8388608;
      break;
    case 2:
      i = n.charCodeAt(p - 2) << 24 | n.charCodeAt(p - 1) << 16 | 32768;
      break;
    case 3:
      i = n.charCodeAt(p - 3) << 24 | n.charCodeAt(p - 2) << 16 | n.charCodeAt(p - 1) << 8 | 128;
      break;
  }
  for (C.push(i); C.length % 16 != 14; )
    C.push(0);
  for (C.push(p >>> 29), C.push(p << 3 & 4294967295), t = 0; t < C.length; t += 16) {
    for (i = 0; i < 16; i++)
      r[i] = C[t + i];
    for (i = 16; i <= 79; i++)
      r[i] = e(r[i - 3] ^ r[i - 8] ^ r[i - 14] ^ r[i - 16], 1);
    for (u = o, h = a, g = l, d = c, E = f, i = 0; i <= 19; i++)
      A = e(u, 5) + (h & g | ~h & d) + E + r[i] + 1518500249 & 4294967295, E = d, d = g, g = e(h, 30), h = u, u = A;
    for (i = 20; i <= 39; i++)
      A = e(u, 5) + (h ^ g ^ d) + E + r[i] + 1859775393 & 4294967295, E = d, d = g, g = e(h, 30), h = u, u = A;
    for (i = 40; i <= 59; i++)
      A = e(u, 5) + (h & g | h & d | g & d) + E + r[i] + 2400959708 & 4294967295, E = d, d = g, g = e(h, 30), h = u, u = A;
    for (i = 60; i <= 79; i++)
      A = e(u, 5) + (h ^ g ^ d) + E + r[i] + 3395469782 & 4294967295, E = d, d = g, g = e(h, 30), h = u, u = A;
    o = o + u & 4294967295, a = a + h & 4294967295, l = l + g & 4294967295, c = c + d & 4294967295, f = f + E & 4294967295;
  }
  return yn([o, a, l, c, f]);
}
const Si = /* @__PURE__ */ Object.create(null);
function Ai(n) {
  function e(Tt, It) {
    return Tt >>> It | Tt << 32 - It;
  }
  const t = "length";
  var i = Math.pow, s = i(2, 32), r, o, a = Si, l = a.h, c = a.k;
  if (!c) {
    l = [], c = [];
    for (var f = N(), u = 2, h = 0; h < 64; u++)
      if (!f[u]) {
        for (r = 0; r < 313; r += u)
          f[r] = u;
        l[h] = i(u, 0.5) * s | 0, c[h++] = i(u, 1 / 3) * s | 0;
      }
    a.h = l = l.slice(0, 8), a.k = c;
  }
  var g = n[t] * 8;
  n += "";
  for (var d = []; n[t] % 64 - 56; )
    n += "\0";
  for (r = 0; r < n[t]; r++)
    o = n.charCodeAt(r), d[r >> 2] |= o << (3 - r) % 4 * 8;
  for (d[d[t]] = g / s | 0, d[d[t]] = g, o = 0; o < d[t]; ) {
    var E = d.slice(o, o += 16), A = l;
    for (l = l.slice(0, 8), r = 0; r < 64; r++) {
      var p = E[r - 15], C = E[r - 2], b = l[0], x = l[4], me = l[7] + (e(x, 6) ^ e(x, 11) ^ e(x, 25)) + (x & l[5] ^ ~x & l[6]) + c[r] + (E[r] = r < 16 ? E[r] : E[r - 16] + (e(p, 7) ^ e(p, 18) ^ p >>> 3) + E[r - 7] + (e(C, 17) ^ e(C, 19) ^ C >>> 10) | 0), Dn = (e(b, 2) ^ e(b, 13) ^ e(b, 22)) + (b & l[1] ^ b & l[2] ^ l[1] & l[2]);
      l = [me + Dn | 0].concat(l), l[4] = l[4] + me | 0;
    }
    for (r = 0; r < 8; r++)
      l[r] = l[r] + A[r] | 0;
  }
  return yn(l, 8);
}
function yn(n, e) {
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
const xt = new Ne();
class Ze {
  constructor(e) {
    this.eventEmitter = e;
    const t = /* @__PURE__ */ Object.create(null);
    t.get = () => this.configCatClient, t.enumerable = !0, Object.defineProperty(e, "configCatClient", t);
  }
  tryDisconnect() {
    const e = this.eventEmitter;
    return this.eventEmitter = xt, e !== xt;
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
const Le = Ze.prototype;
Le.addListener = Le.on;
Le.off = Le.removeListener;
class Oi extends mt {
  constructor(e) {
    super(e), this.cacheTimeToLiveMs = e.cacheTimeToLiveSeconds * 1e3, this.prepareClientForEvents();
    const t = this.syncUpWithCache();
    this.readyPromise = this.getReadyPromise(t);
  }
  async getConfigAsync() {
    this.options.logger.debug("LazyLoadConfigService.getConfigAsync() called.");
    function e(i, s = "") {
      i.debug(`LazyLoadConfigService.getConfigAsync(): cache is empty or expired${s}.`);
    }
    let t = await this.syncUpWithCache();
    return t.isExpired(this.cacheTimeToLiveMs) ? (this.isOffline ? e(this.options.logger) : (e(this.options.logger, ", calling refreshConfigCoreAsync()"), [, t] = await this.refreshConfigCoreAsync(t, !1)), t) : (this.options.logger.debug("LazyLoadConfigService.getConfigAsync(): cache is valid, returning from cache."), t);
  }
  refreshConfigAsync() {
    return this.options.logger.debug("LazyLoadConfigService.refreshConfigAsync() called."), super.refreshConfigAsync();
  }
  getCacheState(e) {
    return e.isEmpty ? 0 : e.isExpired(this.cacheTimeToLiveMs) ? 2 : 3;
  }
}
class Ci extends mt {
  constructor(e) {
    super(e), this.prepareClientForEvents();
    const t = this.syncUpWithCache();
    this.readyPromise = this.getReadyPromise(t);
  }
  getCacheState(e) {
    return e.isEmpty ? 0 : 2;
  }
  async getConfigAsync() {
    return this.options.logger.debug("ManualPollService.getConfigAsync() called."), await this.syncUpWithCache();
  }
  refreshConfigAsync() {
    return this.options.logger.debug("ManualPollService.refreshConfigAsync() called."), super.refreshConfigAsync();
  }
}
const et = "configcat-proxy/";
var tt;
(function(n) {
  n[n.AutoPoll = 0] = "AutoPoll", n[n.LazyLoad = 1] = "LazyLoad", n[n.ManualPoll = 2] = "ManualPoll";
})(tt || (tt = {}));
var nt;
(function(n) {
  n[n.Global = 0] = "Global", n[n.EuOnly = 1] = "EuOnly";
})(nt || (nt = {}));
function Ti(n) {
  return nt[n];
}
class J {
  constructor(e, t, i, s) {
    var r, o, a, l;
    this.requestTimeoutMs = 3e4, this.dataGovernance = 0, this.flagOverrides = null, this.defaultUser = void 0, this.offline = !1, this.sdkKey = e, this.clientVersion = i;
    const c = (o = (r = t.eventEmitterFactory) === null || r === void 0 ? void 0 : r.call(t)) !== null && o !== void 0 ? o : new Ne(), f = new Ze(c);
    this.hooks = {
      hooks: f,
      unwrap() {
        return this.hooks;
      },
      emit(A, ...p) {
        var C, b;
        return (b = (C = this.unwrap()) === null || C === void 0 ? void 0 : C.emit(A, ...p)) !== null && b !== void 0 ? b : !1;
      }
    };
    let u, h, g, d, E;
    if (s) {
      const A = "options";
      if (s.logFilter != null && (u = Rt(s.logFilter, A, ".logFilter")), s.logger != null) {
        const p = N();
        p.log = !0, h = $(s.logger, A, p, ".logger");
      }
      if (s.cache != null) {
        const p = N();
        p.get = p.set = !0, g = $(s.cache, A, p, ".cache");
      }
      if (s.configFetcher != null) {
        const p = N();
        p.fetchAsync = !0, d = $(s.configFetcher, A, p, ".configFetcher");
      }
      if (s.requestTimeoutMs != null && (this.requestTimeoutMs = Te(s.requestTimeoutMs, A, "greater than 0", (p) => p > 0, ".requestTimeoutMs")), s.dataGovernance != null && (this.dataGovernance = Z(s.dataGovernance, A, "DataGovernance", (p) => Ti(p) !== void 0, ".dataGovernance")), s.baseUrl != null && (E = G(s.baseUrl, A, !0, ".baseUrl")), s.flagOverrides != null) {
        const p = N();
        p.behaviour = p.dataSource = !1;
        const C = $(s.flagOverrides, A, p, ".flagOverrides");
        Z(C.behaviour, A, "OverrideBehaviour", (x) => Pe(x) !== void 0, ".flagOverrides.behaviour");
        const b = N();
        b.getOverrides = !0, $(C.dataSource, A, b, ".flagOverrides.dataSource"), this.flagOverrides = C;
      }
      s.defaultUser != null && (this.defaultUser = $(s.defaultUser, A, void 0, ".defaultUser")), s.offline != null && (this.offline = ct(s.offline, A, ".offline")), s.setupHooks != null && Rt(s.setupHooks, A, ".setupHooks")(f);
    }
    (this.baseUrlOverriden = E != null) ? this.baseUrl = E : this.baseUrl = this.dataGovernance === 1 ? "https://cdn-eu.configcat.com" : "https://cdn-global.configcat.com", this.logger = new ai(h ?? new hn(), u, this.hooks), this.cache = g ? new Me(g, this.logger) : (l = (a = t.defaultCacheFactory) === null || a === void 0 ? void 0 : a.call(t, this)) !== null && l !== void 0 ? l : new un(), this.configFetcher = d ?? t.configFetcherFactory(this);
  }
  yieldHooks() {
    var e;
    const t = this.hooks, i = (e = t.unwrap()) !== null && e !== void 0 ? e : new Ze(new Ne());
    return t.hooks = Yt(i), t.unwrap = function() {
      return this.hooks.deref();
    }, i;
  }
  getUrl() {
    const { baseUrl: e } = this;
    return e + (e.charCodeAt(e.length - 1) !== 47 ? "/" : "") + "configuration-files/" + this.sdkKey + "/" + J.configFileName + "?sdk=" + this.clientVersion;
  }
  getCacheKey() {
    return pn(`${this.sdkKey}_${J.configFileName}_${I.serializationFormatVersion}`);
  }
}
J.configFileName = "config_v6.json";
const _t = "/" + et, Ii = /^https?:\/\/(?:[a-z0-9-]+\.)+configcat\.com\.?(?:[:/]|$)/i;
function mn(n) {
  if (!Ii.test(n))
    return !1;
  let e = n.indexOf("?");
  return e = n.lastIndexOf(_t, (e >= 0 ? e : n.length) - _t.length), e < 0;
}
class bi extends J {
  constructor(e, t, i) {
    if (super(e, t, t.sdkType + "/a-" + t.sdkVersion, i), this.pollIntervalSeconds = 60, this.maxInitWaitTimeSeconds = 5, i) {
      const s = "options";
      i.pollIntervalSeconds != null && (this.pollIntervalSeconds = Te(i.pollIntervalSeconds, s, "between 1 and 2147483", (l) => Qt(l, 1, 2147483), ".pollIntervalSeconds")), i.maxInitWaitTimeSeconds != null && (this.maxInitWaitTimeSeconds = Te(i.maxInitWaitTimeSeconds, s, "less than or equal to 2147483", (a) => a <= 2147483, ".maxInitWaitTimeSeconds"));
    }
  }
  createConfigService() {
    return new hi(this);
  }
}
class wi extends J {
  constructor(e, t, i) {
    super(e, t, t.sdkType + "/m-" + t.sdkVersion, i);
  }
  createConfigService() {
    return new Ci(this);
  }
}
class Ri extends J {
  constructor(e, t, i) {
    if (super(e, t, t.sdkType + "/l-" + t.sdkVersion, i), this.cacheTimeToLiveSeconds = 60, i) {
      const s = "options";
      i.cacheTimeToLiveSeconds != null && (this.cacheTimeToLiveSeconds = Te(i.cacheTimeToLiveSeconds, s, "between 1 and 2147483647", (a) => Qt(a, 1, 2147483647), ".cacheTimeToLiveSeconds")), i.cacheTimeToLiveSeconds != null && (this.cacheTimeToLiveSeconds = i.cacheTimeToLiveSeconds);
    }
  }
  createConfigService() {
    return new Oi(this);
  }
}
const En = "<invalid value>", Ni = "<invalid name>", Et = "<invalid operator>", Ht = "<invalid reference>", Fi = 10;
class Sn {
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
    return this.append(`User.${e} ${qe(t)} '${i ?? En}'`);
  }
  appendUserConditionString(e, t, i, s) {
    return i == null ? this.appendUserConditionCore(e, t) : this.appendUserConditionCore(e, t, s ? "<hashed value>" : i);
  }
  appendUserConditionStringList(e, t, i, s) {
    if (i == null)
      return this.appendUserConditionCore(e, t);
    const r = "value", o = "values", a = qe(t);
    if (s)
      return this.append(`User.${e} ${a} [<${i.length} hashed ${i.length === 1 ? r : o}>]`);
    {
      const l = ut(i, Fi, (c) => `, ... <${c} more ${c === 1 ? r : o}>`);
      return this.append(`User.${e} ${a} [${l}]`);
    }
  }
  appendUserConditionNumber(e, t, i, s) {
    if (i == null)
      return this.appendUserConditionCore(e, t);
    const r = qe(t);
    let o;
    return s && !isNaN(o = new Date(i * 1e3)) ? this.append(`User.${e} ${r} '${i}' (${o.toISOString()} UTC)`) : this.append(`User.${e} ${r} '${i}'`);
  }
  appendUserCondition(e) {
    const t = e.a, i = e.c;
    switch (i) {
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
        return this.appendUserConditionStringList(t, i, e.l, !1);
      case 6:
      case 7:
      case 8:
      case 9:
      case 28:
      case 29:
        return this.appendUserConditionString(t, i, e.s, !1);
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
        return this.appendUserConditionNumber(t, i, e.d);
      case 16:
      case 17:
      case 22:
      case 23:
      case 24:
      case 25:
      case 26:
      case 27:
        return this.appendUserConditionStringList(t, i, e.l, !0);
      case 18:
      case 19:
        return this.appendUserConditionNumber(t, i, e.d, !0);
      case 20:
      case 21:
        return this.appendUserConditionString(t, i, e.s, !0);
      default: {
        const s = Di(e);
        return S(s) ? this.appendUserConditionString(t, i, s, !1) : W(s) ? this.appendUserConditionNumber(t, i, s) : s ? this.appendUserConditionCore(t, i) : this.appendUserConditionStringList(t, i, s, !1);
      }
    }
  }
  appendPrerequisiteFlagCondition(e, t) {
    const i = L(t, e.f) ? e.f : Ht, s = e.c, r = On(e.v);
    return this.append(`Flag '${i}' ${Li(s)} '${ce(r)}'`);
  }
  appendSegmentCondition(e, t) {
    const i = e.s;
    let s;
    t && lt(i, 0, t.length - 1) ? (s = t[i].n, s.length || (s = Ni)) : s = Ht;
    const r = e.c;
    return this.append(`User ${An(r)} '${s}'`);
  }
  appendConditionResult(e) {
    return this.append(`${e}`);
  }
  appendConditionConsequence(e) {
    return this.append(" => ").appendConditionResult(e), e ? this : this.append(", skipping the remaining AND conditions");
  }
  appendTargetingRuleThenPart(e, t, i) {
    if ((i ? this.newLine() : this.append(" ")).append("THEN"), !yt(e, !0)) {
      const s = e.s, r = U(s.v, t, !0);
      return this.append(` '${ce(r)}'`);
    }
    return this.append(" % options");
  }
  appendTargetingRuleConsequence(e, t, i, s) {
    return this.increaseIndent(), this.appendTargetingRuleThenPart(e, t, s).append(" => ").append(i === !0 ? "MATCH, applying rule" : i === !1 ? "no match" : i), this.decreaseIndent();
  }
}
function qe(n) {
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
      return Et;
  }
}
function St(n) {
  return new Sn("").appendUserCondition(n).toString();
}
function Li(n) {
  switch (n) {
    case 0:
      return "EQUALS";
    case 1:
      return "NOT EQUALS";
    default:
      return Et;
  }
}
function An(n) {
  switch (n) {
    case 0:
      return "IS IN SEGMENT";
    case 1:
      return "IS NOT IN SEGMENT";
    default:
      return Et;
  }
}
function ce(n) {
  return pt(n) ? n.toString() : En;
}
function On(n) {
  let e, t;
  if (e = n.b, t = n.s, t != null) {
    if (e != null)
      return;
    e = t;
  }
  if (t = n.i, t != null) {
    if (e != null)
      return;
    e = t;
  }
  if (t = n.d, t != null) {
    if (e != null)
      return;
    e = t;
  }
  return e ?? void 0;
}
function Di(n) {
  let e, t;
  if (e = n.s, t = n.d, t != null) {
    if (e != null)
      return;
    e = t;
  }
  if (t = n.l, t != null) {
    if (e != null)
      return;
    e = t;
  }
  return e ?? void 0;
}
const qt = /^[0-9]+$/, se = (n, e) => {
  const t = qt.test(n), i = qt.test(e);
  return t && i && (n = +n, e = +e), n === e ? 0 : t && !i ? -1 : i && !t ? 1 : n < e ? -1 : 1;
}, it = 256, Ae = Number.MAX_SAFE_INTEGER || 9007199254740991, he = [], O = [], m = {};
let ki = 0;
const R = (n, e) => {
  const t = ki++;
  m[n] = t, O[t] = e, he[t] = new RegExp(e);
};
R("NUMERICIDENTIFIER", "0|[1-9]\\d*");
R("NUMERICIDENTIFIERLOOSE", "[0-9]+");
R("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*");
R("MAINVERSION", `(${O[m.NUMERICIDENTIFIER]})\\.(${O[m.NUMERICIDENTIFIER]})\\.(${O[m.NUMERICIDENTIFIER]})`);
R("MAINVERSIONLOOSE", `(${O[m.NUMERICIDENTIFIERLOOSE]})\\.(${O[m.NUMERICIDENTIFIERLOOSE]})\\.(${O[m.NUMERICIDENTIFIERLOOSE]})`);
R("PRERELEASEIDENTIFIER", `(?:${O[m.NUMERICIDENTIFIER]}|${O[m.NONNUMERICIDENTIFIER]})`);
R("PRERELEASEIDENTIFIERLOOSE", `(?:${O[m.NUMERICIDENTIFIERLOOSE]}|${O[m.NONNUMERICIDENTIFIER]})`);
R("PRERELEASE", `(?:-(${O[m.PRERELEASEIDENTIFIER]}(?:\\.${O[m.PRERELEASEIDENTIFIER]})*))`);
R("PRERELEASELOOSE", `(?:-?(${O[m.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${O[m.PRERELEASEIDENTIFIERLOOSE]})*))`);
R("BUILDIDENTIFIER", "[0-9A-Za-z-]+");
R("BUILD", `(?:\\+(${O[m.BUILDIDENTIFIER]}(?:\\.${O[m.BUILDIDENTIFIER]})*))`);
R("FULLPLAIN", `v?${O[m.MAINVERSION]}${O[m.PRERELEASE]}?${O[m.BUILD]}?`);
R("FULL", `^${O[m.FULLPLAIN]}$`);
R("LOOSEPLAIN", `[v=\\s]*${O[m.MAINVERSIONLOOSE]}${O[m.PRERELEASELOOSE]}?${O[m.BUILD]}?`);
R("LOOSE", `^${O[m.LOOSEPLAIN]}$`);
class k {
  constructor(e, t) {
    if ((!t || typeof t != "object") && (t = {
      loose: !!t,
      includePrerelease: !1
    }), e instanceof k) {
      if (e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease)
        return e;
      e = e.version;
    } else if (typeof e != "string")
      throw TypeError(`Invalid Version: ${e}`);
    if (e.length > it)
      throw TypeError(`version is longer than ${it} characters`);
    this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease;
    const i = e.trim().match(t.loose ? he[m.LOOSE] : he[m.FULL]);
    if (!i)
      throw TypeError(`Invalid Version: ${e}`);
    if (this.raw = e, this.major = +i[1], this.minor = +i[2], this.patch = +i[3], this.major > Ae || this.major < 0)
      throw TypeError("Invalid major version");
    if (this.minor > Ae || this.minor < 0)
      throw TypeError("Invalid minor version");
    if (this.patch > Ae || this.patch < 0)
      throw TypeError("Invalid patch version");
    i[4] ? this.prerelease = i[4].split(".").map((s) => {
      if (/^[0-9]+$/.test(s)) {
        const r = +s;
        if (r >= 0 && r < Ae)
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
    if (!(e instanceof k)) {
      if (typeof e == "string" && e === this.version)
        return 0;
      e = new k(e, this.options);
    }
    return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e);
  }
  compareMain(e) {
    return e instanceof k || (e = new k(e, this.options)), se(this.major, e.major) || se(this.minor, e.minor) || se(this.patch, e.patch);
  }
  comparePre(e) {
    if (e instanceof k || (e = new k(e, this.options)), this.prerelease.length && !e.prerelease.length)
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
      return se(i, s);
    } while (++t);
  }
  compareBuild(e) {
    e instanceof k || (e = new k(e, this.options));
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
      return se(i, s);
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
        throw Error(`invalid increment argument: ${e}`);
    }
    return this.format(), this.raw = this.version, this;
  }
}
const st = (n, e) => {
  if ((!e || typeof e != "object") && (e = {
    loose: !!e,
    includePrerelease: !1
  }), n instanceof k)
    return n;
  if (typeof n != "string" || n.length > it || !(e.loose ? he[m.LOOSE] : he[m.FULL]).test(n))
    return null;
  try {
    return new k(n, e);
  } catch {
    return null;
  }
};
class Zi {
  constructor(e, t, i, s = {}) {
    this.identifier = e, this.email = t, this.country = i, this.custom = s;
  }
}
function Cn(n) {
  var e;
  return (e = n.identifier) !== null && e !== void 0 ? e : "";
}
function jt(n, e) {
  switch (e) {
    case "Identifier":
      return Cn(n);
    case "Email":
      return n.email;
    case "Country":
      return n.country;
    default:
      return n.custom && L(n.custom, e) ? n.custom[e] : void 0;
  }
}
function Tn(n) {
  var e;
  const t = N(), i = "Identifier", s = "Email", r = "Country";
  if (t[i] = (e = n.identifier) !== null && e !== void 0 ? e : "", n.email != null && (t[s] = n.email), n.country != null && (t[r] = n.country), n.custom != null) {
    const o = [i, s, r];
    for (const a in n.custom) {
      let l;
      L(n.custom, a) && (l = n.custom[a]) != null && o.indexOf(a) < 0 && (t[a] = l);
    }
  }
  return t;
}
class ye {
  get settingType() {
    var e;
    return (e = this._settingType) !== null && e !== void 0 ? e : this._settingType = vt(this.setting);
  }
  get visitedFlags() {
    var e;
    return (e = this._visitedFlags) !== null && e !== void 0 ? e : this._visitedFlags = [];
  }
  constructor(e, t, i, s) {
    this.key = e, this.setting = t, this.user = i, this.settings = s, this._settingType = void 0, this._visitedFlags = void 0, this.isMissingUserObjectLogged = !1, this.isMissingUserObjectAttributeLogged = !1;
  }
  static forPrerequisiteFlag(e, t, i) {
    const s = new ye(e, t, i.user, i.settings);
    return s._visitedFlags = i.visitedFlags, s.logBuilder = i.logBuilder, s;
  }
}
const Vt = "The current targeting rule is ignored and the evaluation continues with the next rule.", je = "cannot evaluate, User Object is missing", $i = (n) => `cannot evaluate, the User.${n} attribute is missing`, Ui = (n, e) => `cannot evaluate, the User.${n} attribute is invalid (${e})`;
class Mi {
  constructor(e) {
    this.logger = e;
  }
  evaluate(e, t) {
    this.logger.debug("RolloutEvaluator.evaluate() called.");
    const i = t.logBuilder = this.logger.isEnabled(3) ? new Sn(this.logger.eol) : null;
    i && (i.append(`Evaluating '${t.key}'`), t.user && i.append(` for User '${JSON.stringify(Tn(t.user))}'`), i.increaseIndent());
    let s;
    try {
      const r = t.settingType, o = r !== -1 ? r : Ye(t.setting.v);
      if (e != null && o !== void 0 && !si(e, o)) {
        const l = ii(o);
        throw new ge(2, `The type of a setting must match the type of the specified default value. Setting's type was ${l} but the default value's type was ${typeof e}. Please use a default value which corresponds to the setting type ${l}. Learn more: https://configcat.com/docs/sdk-reference/js/overview/#setting-type-mapping`);
      }
      const a = this.evaluateSetting(t);
      return a.returnValue = s = U(a.selectedValue.v, r), a;
    } catch (r) {
      throw i?.resetIndent().increaseIndent(), s = e, r;
    } finally {
      i && (i.newLine(`Returning '${s}'.`).decreaseIndent(), this.logger.settingEvaluated(i.toString()));
    }
  }
  evaluateSetting(e) {
    let t;
    const i = e.setting.r;
    if (i?.length && (t = this.evaluateTargetingRules(i, e)))
      return t;
    const s = e.setting.p;
    return s?.length && (t = this.evaluatePercentageOptions(s, void 0, e)) ? t : Ve(e.setting);
  }
  evaluateTargetingRules(e, t) {
    const i = t.logBuilder;
    i?.newLine("Evaluating targeting rules and applying the first match if any:");
    for (let s = 0; s < e.length; s++) {
      const r = e[s], o = r.c, a = this.evaluateConditions(o, void 0, r, t.key, t);
      if (a !== !0) {
        S(a) && i?.increaseIndent().newLine(Vt).decreaseIndent();
        continue;
      }
      if (!yt(r))
        return Ve(r.s, r);
      const l = r.p;
      i?.increaseIndent();
      const c = this.evaluatePercentageOptions(l, r, t);
      if (c)
        return i?.decreaseIndent(), c;
      i?.newLine(Vt).decreaseIndent();
    }
  }
  evaluatePercentageOptions(e, t, i) {
    const s = i.logBuilder;
    if (!i.user) {
      s?.newLine("Skipping % options because the User Object is missing."), i.isMissingUserObjectLogged || (this.logger.userObjectIsMissing(i.key), i.isMissingUserObjectLogged = !0);
      return;
    }
    let r = i.setting.a, o;
    if (r == null ? (r = "Identifier", o = Cn(i.user)) : o = jt(i.user, r), o == null) {
      s?.newLine(`Skipping % options because the User.${r} attribute is missing.`), i.isMissingUserObjectAttributeLogged || (this.logger.userObjectAttributeIsMissingPercentage(i.key, r), i.isMissingUserObjectAttributeLogged = !0);
      return;
    }
    s?.newLine(`Evaluating % options based on the User.${r} attribute:`);
    const a = pn(i.key + bn(o)), l = parseInt(a.substring(0, 7), 16) % 100;
    s?.newLine(`- Computing hash in the [0..99] range from User.${r} => ${l} (this value is sticky and consistent across all SDKs)`);
    let c = 0;
    for (let f = 0; f < e.length; f++) {
      const u = e[f], h = u.p;
      if (h < 0 && T("Percentage option percentage is invalid."), c += h, !(l >= c)) {
        if (s) {
          const g = U(u.v, i.settingType, !0);
          s.newLine(`- Hash value ${l} selects % option ${f + 1} (${h}%), '${ce(g)}'.`);
        }
        return Ve(u, t, u);
      }
    }
    T("Sum of percentage option percentages is less than 100.");
  }
  evaluateConditions(e, t, i, s, r) {
    var o;
    let a = !0;
    const l = r.logBuilder;
    let c = !1;
    l?.newLine("- ");
    const f = !t;
    for (let u = 0, h = (o = e?.length) !== null && o !== void 0 ? o : 0; u < h; u++) {
      let g;
      if (f) {
        const E = e[u];
        t = oi(E), g = E[t];
      } else
        g = e[u];
      switch (l && (u ? l.increaseIndent().newLine("AND ") : l.append("IF ").increaseIndent()), t) {
        case "u":
          a = this.evaluateUserCondition(g, s, r), c = h > 1;
          break;
        case "p":
          a = this.evaluatePrerequisiteFlagCondition(g, r), c = !0;
          break;
        case "s":
          a = this.evaluateSegmentCondition(g, r), c = !S(a) || a !== je || h > 1;
          break;
        default:
          throw Error();
      }
      const d = a === !0;
      if (l && ((!i || h > 1) && l.appendConditionConsequence(d), l.decreaseIndent()), !d)
        break;
    }
    return i && l?.appendTargetingRuleConsequence(i, r.settingType, a, c), a;
  }
  evaluateUserCondition(e, t, i) {
    const s = i.logBuilder;
    if (s?.appendUserCondition(e), !i.user)
      return i.isMissingUserObjectLogged || (this.logger.userObjectIsMissing(i.key), i.isMissingUserObjectLogged = !0), je;
    const r = e.a, o = jt(i.user, r);
    if (o == null || o === "") {
      const h = new pe(e, (g) => St(g));
      return this.logger.userObjectAttributeIsMissingCondition(h, i.key, r), $i(r);
    }
    let a, l, c, f;
    const u = e.c;
    switch (u) {
      case 28:
      case 29:
        return a = q(r, o, e, i.key, this.logger), this.evaluateTextEquals(a, w(e.s), u === 29);
      case 20:
      case 21:
        return a = q(r, o, e, i.key, this.logger), this.evaluateSensitiveTextEquals(a, w(e.s), re(i.setting), t, u === 21);
      case 0:
      case 1:
        return a = q(r, o, e, i.key, this.logger), this.evaluateTextIsOneOf(a, w(e.l), u === 1);
      case 16:
      case 17:
        return a = q(r, o, e, i.key, this.logger), this.evaluateSensitiveTextIsOneOf(a, w(e.l), re(i.setting), t, u === 17);
      case 30:
      case 31:
        return a = q(r, o, e, i.key, this.logger), this.evaluateTextSliceEqualsAnyOf(a, w(e.l), !0, u === 31);
      case 22:
      case 23:
        return a = q(r, o, e, i.key, this.logger), this.evaluateSensitiveTextSliceEqualsAnyOf(a, w(e.l), re(i.setting), t, !0, u === 23);
      case 32:
      case 33:
        return a = q(r, o, e, i.key, this.logger), this.evaluateTextSliceEqualsAnyOf(a, w(e.l), !1, u === 33);
      case 24:
      case 25:
        return a = q(r, o, e, i.key, this.logger), this.evaluateSensitiveTextSliceEqualsAnyOf(a, w(e.l), re(i.setting), t, !1, u === 25);
      case 2:
      case 3:
        return a = q(r, o, e, i.key, this.logger), this.evaluateTextContainsAnyOf(a, w(e.l), u === 3);
      case 4:
      case 5:
        return l = Bt(r, o, e, i.key, this.logger), S(l) ? l : this.evaluateSemVerIsOneOf(l, w(e.l), u === 5);
      case 6:
      case 7:
      case 8:
      case 9:
        return l = Bt(r, o, e, i.key, this.logger), S(l) ? l : this.evaluateSemVerRelation(l, u, w(e.s));
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
        return c = Pi(r, o, e, i.key, this.logger), S(c) ? c : this.evaluateNumberRelation(c, u, w(e.d));
      case 18:
      case 19:
        return c = xi(r, o, e, i.key, this.logger), S(c) ? c : this.evaluateDateTimeRelation(c, w(e.d), u === 18);
      case 34:
      case 35:
        return f = Kt(r, o, e, i.key, this.logger), S(f) ? f : this.evaluateArrayContainsAnyOf(f, w(e.l), u === 35);
      case 26:
      case 27:
        return f = Kt(r, o, e, i.key, this.logger), S(f) ? f : this.evaluateSensitiveArrayContainsAnyOf(f, w(e.l), re(i.setting), t, u === 27);
      default:
        T("Comparison operator is invalid.");
    }
  }
  evaluateTextEquals(e, t, i) {
    return e === t !== i;
  }
  evaluateSensitiveTextEquals(e, t, i, s, r) {
    return Be(e, i, s) === t !== r;
  }
  evaluateTextIsOneOf(e, t, i) {
    return t.indexOf(e) >= 0 !== i;
  }
  evaluateSensitiveTextIsOneOf(e, t, i, s, r) {
    const o = Be(e, i, s);
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
    const a = ue(e);
    for (let l = 0; l < t.length; l++) {
      const c = t[l];
      let f, u;
      const h = c.indexOf("_");
      if ((h < 0 || isNaN(f = Hn(c.slice(0, h))) || f < 0 || !(u = c.slice(h + 1))) && T("Comparison value is invalid."), a.length < f)
        continue;
      const g = r ? a.slice(0, f) : a.slice(a.length - f);
      if (In(g, i, s) === u)
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
      const a = st(o.trim());
      if (!a)
        return !1;
      !s && e.compare(a) === 0 && (s = !0);
    }
    return s !== i;
  }
  evaluateSemVerRelation(e, t, i) {
    const s = st(i.trim());
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
      const a = Be(e[o], i, s);
      if (t.indexOf(a) >= 0)
        return !r;
    }
    return r;
  }
  evaluatePrerequisiteFlagCondition(e, t) {
    const i = t.logBuilder;
    i?.appendPrerequisiteFlagCondition(e, t.settings);
    const s = e.f, r = L(t.settings, s) ? t.settings[s] : T("Prerequisite flag is missing."), o = vt(r);
    let a, l;
    if (o !== -1)
      a = o, l = U(e.v, o, !0);
    else if (a = Ye(r.v), a !== void 0 && (l = U(e.v, a, !0), a === 3)) {
      const d = U(e.v, 2, !0);
      l === void 0 ? l = d : d !== void 0 && (l = void 0);
    }
    l === void 0 && a !== void 0 && (l = On(e.v), T(`Type mismatch between comparison value '${ce(l)}' and prerequisite flag '${s}'.`));
    const c = t.visitedFlags;
    if (c.push(t.key), c.indexOf(s) >= 0) {
      c.push(s);
      const d = ut(c, void 0, void 0, " -> ");
      T(`Circular dependency detected between the following depending flags: ${d}.`);
    }
    const f = ye.forPrerequisiteFlag(s, r, t);
    i?.newLine("(").increaseIndent().newLine(`Evaluating prerequisite flag '${s}':`);
    const u = this.evaluateSetting(f);
    c.pop();
    const h = U(u.selectedValue.v, o);
    let g;
    switch (e.c) {
      case 0:
        g = h === l;
        break;
      case 1:
        g = h !== l;
        break;
      default:
        T("Comparison operator is invalid.");
    }
    return i?.newLine(`Prerequisite flag evaluation result: '${ce(h)}'.`).newLine("Condition (").appendPrerequisiteFlagCondition(e, t.settings).append(") evaluates to ").appendConditionResult(g).append(".").decreaseIndent().newLine(")"), g;
  }
  evaluateSegmentCondition(e, t) {
    const i = t.setting._configSegments, s = t.logBuilder;
    if (s?.appendSegmentCondition(e, i), !t.user)
      return t.isMissingUserObjectLogged || (this.logger.userObjectIsMissing(t.key), t.isMissingUserObjectLogged = !0), je;
    const r = e?.s;
    (!i || !lt(r, 0, i.length - 1)) && T("Segment reference is invalid.");
    const o = i[r], a = o?.n;
    a.length || T("Segment name is missing."), s?.newLine("(").increaseIndent().newLine(`Evaluating segment '${a}':`);
    const l = o?.r, c = this.evaluateConditions(l, "u", void 0, a, t);
    let f = c;
    if (!S(f))
      switch (e.c) {
        case 0:
          break;
        case 1:
          f = !f;
          break;
        default:
          T("Comparison operator is invalid.");
      }
    return s && (s.newLine("Segment evaluation result: "), (S(f) ? s.append(f) : s.append(`User ${An(c ? 0 : 1)}`)).append("."), s.newLine("Condition (").appendSegmentCondition(e, i).append(")"), (S(f) ? s.append(" failed to evaluate") : s.append(" evaluates to ").appendConditionResult(f)).append("."), s.decreaseIndent().newLine(")")), f;
  }
}
function Ve(n, e, t) {
  return { selectedValue: n, matchedTargetingRule: e, matchedPercentageOption: t };
}
function Be(n, e, t) {
  return In(ue(n), e, t);
}
function In(n, e, t) {
  return Ai(n + ue(e) + ue(t));
}
function bn(n) {
  return S(n) ? n : n instanceof Date ? String(n.getTime() / 1e3) : Xt(n) ? JSON.stringify(n) : F(n);
}
function q(n, e, t, i, s) {
  if (S(e))
    return e;
  e = bn(e);
  const r = new pe(t, (o) => St(o));
  return s.userObjectAttributeIsAutoConverted(r, i, n, e), e;
}
function Bt(n, e, t, i, s) {
  let r;
  return S(e) && (r = st(e.trim())) ? r : xe(s, t, i, n, `'${F(e)}' is not a valid semantic version`);
}
function Pi(n, e, t, i, s) {
  if (W(e))
    return e;
  let r;
  return S(e) && (!isNaN(r = ft(e.replace(",", "."))) || e.trim() === "NaN") ? r : xe(s, t, i, n, `'${F(e)}' is not a valid decimal number`);
}
function xi(n, e, t, i, s) {
  if (e instanceof Date)
    return e.getTime() / 1e3;
  if (W(e))
    return e;
  let r;
  return S(e) && (!isNaN(r = ft(e.replace(",", "."))) || e.trim() === "NaN") ? r : xe(s, t, i, n, `'${F(e)}' is not a valid Unix timestamp (number of seconds elapsed since Unix epoch)`);
}
function Kt(n, e, t, i, s) {
  let r = e;
  if (S(r))
    try {
      r = JSON.parse(r);
    } catch {
    }
  return Xt(r) ? r : xe(s, t, i, n, `'${F(e)}' is not a valid string array`);
}
function xe(n, e, t, i, s) {
  const r = new pe(e, (o) => St(o));
  return n.userObjectAttributeIsInvalid(r, t, s, i), Ui(i, s);
}
function re(n) {
  var e;
  return (e = n._configJsonSalt) !== null && e !== void 0 ? e : T("Config JSON salt is missing.");
}
function w(n) {
  return n ?? T("Comparison value is missing.");
}
var Wt;
(function(n) {
  n[n.UnexpectedError = -1] = "UnexpectedError", n[n.None = 0] = "None", n[n.InvalidConfigModel = 1] = "InvalidConfigModel", n[n.SettingValueTypeMismatch = 2] = "SettingValueTypeMismatch", n[n.ConfigJsonNotAvailable = 1e3] = "ConfigJsonNotAvailable", n[n.SettingKeyMissing = 1001] = "SettingKeyMissing";
})(Wt || (Wt = {}));
function wn(n, e, t, i) {
  return {
    key: n,
    value: e.returnValue,
    variationId: e.selectedValue.i,
    fetchTime: t,
    user: i,
    isDefaultValue: !1,
    matchedTargetingRule: e.matchedTargetingRule,
    matchedPercentageOption: e.matchedPercentageOption,
    errorCode: 0
  };
}
function Y(n, e, t, i, s, r, o = -1) {
  return {
    key: n,
    value: e,
    fetchTime: t,
    user: i,
    isDefaultValue: !0,
    errorCode: o,
    _errorMessage: s,
    get errorMessage() {
      var a;
      return (a = this._errorMessage) === null || a === void 0 ? void 0 : a.toString();
    },
    errorException: r
  };
}
function De(n, e, t, i, s, r, o) {
  let a;
  if (!e)
    return a = o.configJsonIsNotPresentSingle(t, "defaultValue", i), Y(t, i, V(r), s, j(a), void 0, 1e3);
  if (!L(e, t)) {
    const c = new pe(e, (f) => ut(Object.keys(f)));
    return a = o.settingEvaluationFailedDueToMissingKey(t, "defaultValue", i, c), Y(t, i, V(r), s, j(a), void 0, 1001);
  }
  const l = n.evaluate(i, new ye(t, e[t], s, e));
  return wn(t, l, V(r), s);
}
function zt(n, e, t, i, s, r) {
  let o;
  if (!At(e, s, r))
    return [[], o];
  const a = [];
  for (const l in e) {
    if (!L(e, l))
      continue;
    const c = e[l];
    let f;
    try {
      const u = n.evaluate(null, new ye(l, c, t, e));
      f = wn(l, u, V(i), t);
    } catch (u) {
      o ?? (o = []), o.push(u), f = Y(l, null, V(i), t, z(u), u, de(u));
    }
    a.push(f);
  }
  return [a, o];
}
function At(n, e, t) {
  return n ? !0 : (e.configJsonIsNotPresent(t), !1);
}
function Rn(n, e, t, i) {
  if (!At(n, t, i))
    return null;
  for (const s in n) {
    if (!L(n, s))
      continue;
    const r = n[s], o = vt(r);
    if (e === r.i)
      return { settingKey: s, settingValue: U(r.v, o) };
    const a = r.r;
    if (a?.length)
      for (let c = 0; c < a.length; c++) {
        const f = a[c];
        if (yt(f)) {
          const u = f.p;
          for (let h = 0; h < u.length; h++) {
            const g = u[h];
            if (e === g.i)
              return { settingKey: s, settingValue: U(g.v, o) };
          }
        } else {
          const u = f.s;
          if (e === u.i)
            return { settingKey: s, settingValue: U(u.v, o) };
        }
      }
    const l = r.p;
    if (l?.length)
      for (let c = 0; c < l.length; c++) {
        const f = l[c];
        if (e === f.i)
          return { settingKey: s, settingValue: U(f.v, o) };
      }
  }
  return t.settingForVariationIdIsNotPresent(e), null;
}
class ge extends Error {
  constructor(e, t) {
    super(t), this.errorCode = e, this.message = t, this.name = ge.name, rt(this, ge);
  }
}
function de(n) {
  return n instanceof Error ? n instanceof ge ? n.errorCode : n instanceof fe ? 1 : -1 : -1;
}
class _i {
  constructor() {
    this.instances = N();
  }
  getOrCreate(e) {
    let t;
    const i = this.instances[e.sdkKey];
    if (i) {
      const [r] = i;
      if (t = r.deref(), t)
        return [t, !0];
    }
    const s = {};
    return t = new B(e, s), this.instances[e.sdkKey] = [Yt(t), s], [t, !1];
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
    for (const t in this.instances) {
      const [i] = this.instances[t], s = i.deref();
      s && e.push(s), delete this.instances[t];
    }
    return e;
  }
}
const oe = new _i();
class B {
  static get instanceCache() {
    return oe;
  }
  static get(e, t, i, s) {
    var r;
    G(e, "sdkKey", !0), i == null || $(i, "options");
    const o = t === 0 ? new bi(e, s, i) : t === 2 ? new wi(e, s, i) : t === 1 ? new Ri(e, s, i) : Z(t, "pollingMode", "PollingMode", () => !1);
    ((r = o.flagOverrides) === null || r === void 0 ? void 0 : r.behaviour) !== 0 && !Hi(e, o.baseUrlOverriden) && Q("sdkKey", `Expected a string matching the SDK Key format, got '${F(e)}'.`);
    const [a, l] = oe.getOrCreate(o);
    return l && i && o.logger.clientIsAlreadyCreated(e), a;
  }
  constructor(e, t) {
    var i;
    this.cacheToken = t, this.options = e, e.logger.isEnabled(4) && e.logger.debug(y.from("OPTIONS")`Initializing ConfigCatClient. Options: ${JSON.stringify(qi(e))}`), this.hooks = e.yieldHooks(), this.hooks.configCatClient = this, this.defaultUser = e.defaultUser, this.evaluator = new Mi(e.logger), ((i = e.flagOverrides) === null || i === void 0 ? void 0 : i.behaviour) !== 0 ? this.configService = e.createConfigService() : (this.configService = null, this.hooks.emit("clientReady", 1)), this.suppressFinalize = Oe(this, { sdkKey: e.sdkKey, cacheToken: t, configService: this.configService, logger: e.logger });
  }
  initConfigService(e) {
    this.configService = e;
  }
  static finalize(e) {
    var t;
    (t = e.logger) === null || t === void 0 || t.debug("finalize() called."), e.cacheToken && oe.remove(e.sdkKey, e.cacheToken), B.close(e.configService, e.logger);
  }
  static close(e, t, i) {
    t?.debug("close() called."), i?.tryDisconnect(), e?.dispose();
  }
  dispose() {
    const e = this.options;
    e.logger.debug("dispose() called."), this.cacheToken && oe.remove(e.sdkKey, this.cacheToken), B.close(this.configService, e.logger, this.hooks), this.suppressFinalize();
  }
  static disposeAll() {
    const e = oe.clear();
    let t;
    for (const i of e)
      try {
        B.close(i.configService, i.options.logger, i.hooks), i.suppressFinalize();
      } catch (s) {
        t ?? (t = []), t.push(s);
      }
    if (t)
      throw typeof AggregateError == "function" ? AggregateError(t) : t.pop();
  }
  async getValueAsync(e, t, i) {
    this.options.logger.debug("getValueAsync() called."), $e(e), Ue(t), X(i);
    let s, r, o = null;
    i ?? (i = this.defaultUser);
    try {
      let a;
      [a, o] = await this.getSettingsAsync(), r = De(this.evaluator, a, e, t, i, o, this.options.logger), s = r.value;
    } catch (a) {
      this.options.logger.settingEvaluationErrorSingle("getValueAsync", e, "defaultValue", t, a), r = Y(e, t, V(o), i, z(a), a, de(a)), s = t;
    }
    return this.hooks.emit("flagEvaluated", r), s;
  }
  async getValueDetailsAsync(e, t, i) {
    this.options.logger.debug("getValueDetailsAsync() called."), $e(e), Ue(t), X(i);
    let s, r = null;
    i ?? (i = this.defaultUser);
    try {
      let o;
      [o, r] = await this.getSettingsAsync(), s = De(this.evaluator, o, e, t, i, r, this.options.logger);
    } catch (o) {
      this.options.logger.settingEvaluationErrorSingle("getValueDetailsAsync", e, "defaultValue", t, o), s = Y(e, t, V(r), i, z(o), o, de(o));
    }
    return this.hooks.emit("flagEvaluated", s), s;
  }
  async getAllKeysAsync() {
    this.options.logger.debug("getAllKeysAsync() called.");
    const e = "empty array";
    try {
      const [t] = await this.getSettingsAsync();
      return At(t, this.options.logger, e) ? Object.keys(t) : [];
    } catch (t) {
      return this.options.logger.settingEvaluationError("getAllKeysAsync", e, t), [];
    }
  }
  async getAllValuesAsync(e) {
    this.options.logger.debug("getAllValuesAsync() called."), X(e);
    const t = "empty array";
    let i, s, r;
    e ?? (e = this.defaultUser);
    try {
      const [o, a] = await this.getSettingsAsync();
      [s, r] = zt(this.evaluator, o, e, a, this.options.logger, t), i = s.map((l) => ({ settingKey: l.key, settingValue: l.value }));
    } catch (o) {
      return this.options.logger.settingEvaluationError("getAllValuesAsync", t, o), [];
    }
    r?.length && this.options.logger.settingEvaluationError("getAllValuesAsync", "evaluation result", typeof AggregateError == "function" ? AggregateError(r) : r.pop());
    for (const o of s)
      this.hooks.emit("flagEvaluated", o);
    return i;
  }
  async getAllValueDetailsAsync(e) {
    this.options.logger.debug("getAllValueDetailsAsync() called."), X(e);
    const t = "empty array";
    let i, s;
    e ?? (e = this.defaultUser);
    try {
      const [r, o] = await this.getSettingsAsync();
      [i, s] = zt(this.evaluator, r, e, o, this.options.logger, t);
    } catch (r) {
      return this.options.logger.settingEvaluationError("getAllValueDetailsAsync", t, r), [];
    }
    s?.length && this.options.logger.settingEvaluationError("getAllValueDetailsAsync", "evaluation result", typeof AggregateError == "function" ? AggregateError(s) : s.pop());
    for (const r of i)
      this.hooks.emit("flagEvaluated", r);
    return i;
  }
  async getKeyAndValueAsync(e) {
    this.options.logger.debug("getKeyAndValueAsync() called."), Nn(e);
    const t = "null";
    try {
      const [i] = await this.getSettingsAsync();
      return Rn(i, e, this.options.logger, t);
    } catch (i) {
      return this.options.logger.settingEvaluationError("getKeyAndValueAsync", t, i), null;
    }
  }
  async forceRefreshAsync() {
    if (this.options.logger.debug("forceRefreshAsync() called."), this.configService)
      try {
        const [e] = await this.configService.refreshConfigAsync();
        return e;
      } catch (e) {
        return this.options.logger.clientMethodError("forceRefreshAsync", e), we(-1, z(e), e);
      }
    else
      return we(1, "Client is configured to use the LocalOnly override behavior, which prevents synchronization with external cache and making HTTP requests.");
  }
  setDefaultUser(e) {
    this.defaultUser = $(e, "defaultUser");
  }
  clearDefaultUser() {
    this.defaultUser = void 0;
  }
  get isOffline() {
    var e, t;
    return (t = (e = this.configService) === null || e === void 0 ? void 0 : e.isOffline) !== null && t !== void 0 ? t : !0;
  }
  setOnline() {
    this.configService ? this.configService.setOnline() : this.options.logger.configServiceMethodHasNoEffectDueToOverrideBehavior(Pe(0), "setOnline");
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
      var s;
      const r = this.options.cache.getInMemory();
      return [r.isEmpty ? null : (s = r.config.f) !== null && s !== void 0 ? s : N(), r];
    };
    let t, i;
    try {
      const { flagOverrides: s } = this.options;
      if (s) {
        const r = s.dataSource.getOverrides();
        switch (s.behaviour) {
          case 0:
            return new ae(r, null, this);
          case 1:
            return [t, i] = e(), new ae(Object.assign(Object.assign({}, t), r), i, this);
          case 2:
            return [t, i] = e(), new ae(Object.assign(Object.assign({}, r), t), i, this);
        }
      }
      return [t, i] = e(), new ae(t, i, this);
    } catch (s) {
      return this.options.logger.clientMethodError("snapshot", s), new ae(N(), null, this);
    }
  }
  async getSettingsAsync() {
    this.options.logger.debug("getSettingsAsync() called.");
    const e = async () => {
      var i;
      const s = await this.configService.getConfigAsync();
      return [s.isEmpty ? null : (i = s.config.f) !== null && i !== void 0 ? i : N(), s];
    }, { flagOverrides: t } = this.options;
    if (t) {
      let i, s;
      const r = t.dataSource.getOverrides();
      switch (t.behaviour) {
        case 0:
          return [r, null];
        case 1:
          return [i, s] = await e(), [Object.assign(Object.assign({}, i), r), s];
        case 2:
          return [i, s] = await e(), [Object.assign(Object.assign({}, r), i), s];
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
const ke = B.prototype;
ke.addListener = ke.on;
ke.off = ke.removeListener;
class ae {
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
    this.options.logger.debug("Snapshot.getValue() called."), $e(e), Ue(t), X(i);
    let s, r;
    i ?? (i = this.defaultUser);
    try {
      r = De(this.evaluator, this.mergedSettings, e, t, i, this.remoteConfig, this.options.logger), s = r.value;
    } catch (o) {
      this.options.logger.settingEvaluationErrorSingle("Snapshot.getValue", e, "defaultValue", t, o), r = Y(e, t, V(this.remoteConfig), i, z(o), o, de(o)), s = t;
    }
    return this.options.hooks.emit("flagEvaluated", r), s;
  }
  getValueDetails(e, t, i) {
    this.options.logger.debug("Snapshot.getValueDetails() called."), $e(e), Ue(t), X(i);
    let s;
    i ?? (i = this.defaultUser);
    try {
      s = De(this.evaluator, this.mergedSettings, e, t, i, this.remoteConfig, this.options.logger);
    } catch (r) {
      this.options.logger.settingEvaluationErrorSingle("Snapshot.getValueDetails", e, "defaultValue", t, r), s = Y(e, t, V(this.remoteConfig), i, z(r), r, de(r));
    }
    return this.options.hooks.emit("flagEvaluated", s), s;
  }
  getKeyAndValue(e) {
    this.options.logger.debug("Snapshot.getKeyAndValue() called."), Nn(e);
    const t = "null";
    try {
      return Rn(this.mergedSettings, e, this.options.logger, t);
    } catch (i) {
      return this.options.logger.settingEvaluationError("Snapshot.getKeyAndValue", t, i), null;
    }
  }
}
function Hi(n, e) {
  if (e && n.length > et.length && n.lastIndexOf(et, 0) === 0)
    return !0;
  const t = n.split("/"), i = 22;
  switch (t.length) {
    case 2:
      return t[0].length === i && t[1].length === i;
    case 3:
      return t[0] === "configcat-sdk-1" && t[1].length === i && t[2].length === i;
    default:
      return !1;
  }
}
function $e(n) {
  G(n, "key", !0);
}
function Ue(n) {
  n != null && !pt(n) && Q("defaultValue", "The default value must be boolean, number, string, null or undefined.", void 0, TypeError);
}
function X(n) {
  n == null || $(n, "user");
}
function Nn(n) {
  G(n, "variationId", !0);
}
function qi(n) {
  return Nt(n, (e, t) => t == null ? t : e === "defaultUser" ? Tn(t) : e === "flagOverrides" ? Nt(t, (i, s) => Ce(s) ? F(s) : s) : Ce(t) ? F(t) : t);
}
let Oe = function(n, e) {
  if (typeof FinalizationRegistry == "function") {
    const t = new FinalizationRegistry((i) => B.finalize(i));
    Oe = (i, s) => {
      const r = {};
      return t.register(i, s, r), () => t.unregister(r);
    };
  } else
    Oe = () => () => {
    };
  return Oe(n, e);
};
function ji(n, e, t, i) {
  return B.get(n, e, t, i);
}
function es(n, e) {
  return Z(n, "logLevel", "LogLevel", (t) => fn(t) !== void 0), e == null || G(e, "eol", !0), new hn(n, e);
}
function ts(n, e, t) {
  return $(n, "map"), Z(e, "behaviour", "OverrideBehaviour", (i) => Pe(i) !== void 0), t == null || ct(t, "watchChanges"), { dataSource: new gi(n, t), behaviour: e };
}
function ns(n, e, t, i) {
  return Z(n, "behaviour", "OverrideBehaviour", (s) => Pe(s) !== void 0), e == null || ct(e, "watchChanges"), t == null || G(t, "paramPrefix"), i == null || $(i, "queryStringProvider"), { dataSource: new pi(e, t, i), behaviour: n };
}
const le = "configCache";
class Fn {
  static tryGetFactory() {
    const e = Vi();
    if (e)
      return (t) => new Me(new Fn(e), t.logger);
  }
  constructor(e) {
    this.dbConnectionFactory = e;
  }
  async set(e, t) {
    const i = await this.dbConnectionFactory();
    try {
      await new Promise((s, r) => {
        const o = i.transaction(le, "readwrite");
        o.oncomplete = () => s(), o.onerror = (l) => r(l.target.error), o.objectStore(le).put(t, e);
      });
    } finally {
      i.close();
    }
  }
  async get(e) {
    const t = await this.dbConnectionFactory();
    try {
      return await new Promise((i, s) => {
        const r = t.transaction(le, "readonly");
        let o;
        r.oncomplete = () => i(o), r.onerror = (c) => s(c.target.error);
        const l = r.objectStore(le).get(e);
        l.onsuccess = (c) => o = c.target.result;
      });
    } finally {
      t.close();
    }
  }
}
function Vi() {
  if (typeof indexedDB < "u")
    try {
      const n = () => new Promise((e, t) => {
        const i = indexedDB.open("@configcat/sdk");
        i.onupgradeneeded = (s) => s.target.result.createObjectStore(le), i.onsuccess = (s) => e(s.target.result), i.onerror = (s) => t(s.target.error);
      });
      return n().then((e) => e.close()).catch(() => {
      }), n;
    } catch {
    }
}
class Ot {
  static tryGetFactory() {
    const e = Bi();
    if (e)
      return (t) => new Me(new Ot(e), t.logger);
  }
  constructor(e) {
    this.storage = e;
  }
  set(e, t) {
    this.storage.setItem(e, Ki(t));
  }
  get(e) {
    const t = this.storage.getItem(e);
    if (t)
      return Wi(t);
  }
}
function Bi() {
  if (typeof localStorage < "u") {
    const n = "__configcat_localStorage_test";
    try {
      const e = localStorage;
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
  }
}
function Ki(n) {
  return n = encodeURIComponent(n), n = n.replace(/%([0-9A-F]{2})/g, (e, t) => String.fromCharCode(parseInt(t, 16))), btoa(n);
}
function Wi(n) {
  return n = atob(n), n = n.replace(/[%\x80-\xFF]/g, (e) => "%" + e.charCodeAt(0).toString(16)), decodeURIComponent(n);
}
class Ct {
  constructor() {
    this.logger = null;
  }
  static getFactory() {
    return (e) => {
      const t = new Ct();
      return t.logger = e.logger, t;
    };
  }
  handleStateChange(e, t, i) {
    try {
      if (e.readyState === 4) {
        const { status: s, statusText: r } = e;
        if (s) {
          const o = zi(e), a = s === 200 ? e.responseText : void 0;
          t(new gn(s, r, o, a));
        }
      }
    } catch (s) {
      i(s);
    }
  }
  fetchAsync(e) {
    return new Promise((t, i) => {
      var s;
      try {
        (s = this.logger) === null || s === void 0 || s.debug("XmlHttpRequestConfigFetcher.fetchAsync() called.");
        let { url: r } = e;
        const o = !mn(r), { lastETag: a, timeoutMs: l } = e;
        a && (r += "&ccetag=" + encodeURIComponent(a));
        const c = new XMLHttpRequest();
        c.onreadystatechange = () => this.handleStateChange(c, t, i), c.ontimeout = () => i(new _("timeout", l)), c.onabort = () => i(new _("abort")), c.onerror = () => i(new _("failure")), c.open("GET", r, !0), c.timeout = l, o && this.setRequestHeaders(c, e.headers), c.send(null);
      } catch (r) {
        i(r);
      }
    });
  }
  setRequestHeaders(e, t) {
  }
}
function zi(n) {
  const e = [];
  return t("ETag", n, e), t("CF-RAY", n, e), e;
  function t(i, s, r) {
    const o = s.getResponseHeader(i);
    o != null && r.push([i, o]);
  }
}
class Ji {
  constructor(e) {
    this.runsOnServerSide = e, this.logger = null;
  }
  async fetchAsync(e) {
    var t, i, s;
    (t = this.logger) === null || t === void 0 || t.debug("FetchApiConfigFetcher.fetchAsync() called.");
    let { url: r } = e;
    const o = !mn(r), { lastETag: a, timeoutMs: l } = e, c = /* @__PURE__ */ Object.create(null);
    c.method = "GET", o ? this.setRequestHeaders(c, e.headers) : this.runsOnServerSide && Jt(c, e.headers), a && (this.runsOnServerSide ? ((i = c.headers) !== null && i !== void 0 ? i : c.headers = []).push(["If-None-Match", a]) : r += "&ccetag=" + encodeURIComponent(a));
    let f;
    if (typeof AbortController == "function") {
      const u = new AbortController(), h = setTimeout(() => u.abort(), l);
      c.signal = u.signal, f = () => clearTimeout(h);
    }
    try {
      const u = await fetch(r, c), { status: h, statusText: g } = u, d = Yi(u), E = h === 200 ? await u.text() : void 0;
      return new gn(h, g, d, E);
    } catch (u) {
      throw u instanceof DOMException && u.name === "AbortError" ? !((s = c.signal) === null || s === void 0) && s.aborted ? new _("timeout", l) : new _("abort") : new _("failure", u);
    } finally {
      f?.();
    }
  }
  setRequestHeaders(e, t) {
    this.runsOnServerSide && Jt(e, t);
  }
}
function Jt(n, e) {
  var t;
  for (const [i, s] of e)
    ((t = n.headers) !== null && t !== void 0 ? t : n.headers = []).push([i, s]);
}
function Yi(n) {
  const e = [];
  return t("ETag", n, e), t("CF-RAY", n, e), e;
  function t(i, s, r) {
    const o = s.headers.get(i);
    o != null && r.push([i, o]);
  }
}
class Ln extends Ji {
  static getFactory() {
    return (e) => {
      const t = new Ln();
      return t.logger = e.logger, t;
    };
  }
}
const Gi = "2.6.3", is = {
  // Vue's `App.prototype.use` does not play nicely with generic `install` functions, so we resort to using a discriminated union.
  install: (n, e) => {
    const { sdkKey: t, pollingMode: i, clientOptions: s } = e, r = {
      sdkType: "ConfigCat-Vue",
      sdkVersion: Gi,
      eventEmitterFactory: () => new tn(),
      defaultCacheFactory: Ot.tryGetFactory(),
      configFetcherFactory: Ct.getFactory()
    }, o = ji(
      t,
      i ?? tt.AutoPoll,
      s,
      r
    );
    n.provide("configCatClient", o);
    const a = n.unmount;
    n.unmount = function() {
      a.apply(arguments), o.dispose();
    };
  }
}, ss = /* @__PURE__ */ kn({
  __name: "FeatureWrapper",
  props: {
    featureKey: {},
    userObject: {}
  },
  emits: ["flagValueChanged"],
  setup(n, { emit: e }) {
    const t = e, i = n, s = $n(null), r = Un("configCatClient") ?? (() => {
      throw new Error("ConfigCatPlugin was not installed.");
    })(), o = () => {
      const l = r.snapshot().getValue(i.featureKey, !1, i.userObject);
      s.value !== l && (s.value = l, t("flagValueChanged", l));
    };
    return Mn(() => {
      const a = r.snapshot(), l = a.cacheState;
      l == Re.HasUpToDateFlagData || l == Re.HasLocalOverrideFlagDataOnly ? (s.value = a.getValue(
        i.featureKey,
        !1,
        i.userObject
      ), r.on("configChanged", o)) : r.getValueAsync(i.featureKey, !1, i.userObject).then((c) => {
        const f = o;
        f && (s.value = c, r.on("configChanged", f));
      });
    }), Pn(() => {
      r.off("configChanged", o);
    }), (a, l) => s.value === !0 ? _e(a.$slots, "default", { key: 0 }) : s.value === !1 ? _e(a.$slots, "else", { key: 1 }) : _e(a.$slots, "loading", { key: 2 });
  }
});
export {
  Re as ClientCacheState,
  Ln as ClientSideFetchApiConfigFetcher,
  is as ConfigCatPlugin,
  Xi as ConfigJson,
  nt as DataGovernance,
  Wt as EvaluationErrorCode,
  ss as FeatureWrapper,
  _ as FetchError,
  ui as FetchRequest,
  gn as FetchResponse,
  y as FormattableLogMessage,
  Fn as IndexedDBConfigCache,
  Ot as LocalStorageConfigCache,
  Ge as LogLevel,
  Xe as OverrideBehaviour,
  tt as PollingMode,
  ze as PrerequisiteFlagComparator,
  Dt as RefreshErrorCode,
  Je as SegmentComparator,
  be as SettingType,
  Zi as User,
  We as UserComparator,
  Ct as XmlHttpRequestConfigFetcher,
  es as createConsoleLogger,
  ts as createFlagOverridesFromMap,
  ns as createFlagOverridesFromQueryParams,
  rn as createSettingFromValue,
  nn as deserializeConfig,
  sn as prepareConfig
};
