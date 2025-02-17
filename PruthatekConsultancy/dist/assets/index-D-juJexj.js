function p1(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const i in n)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(n, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => n[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const l of o.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && n(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = r(i);
    fetch(i.href, o);
  }
})();
var $r =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function og(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ag = { exports: {} },
  cs = {},
  lg = { exports: {} },
  me = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sa = Symbol.for("react.element"),
  h1 = Symbol.for("react.portal"),
  m1 = Symbol.for("react.fragment"),
  v1 = Symbol.for("react.strict_mode"),
  g1 = Symbol.for("react.profiler"),
  y1 = Symbol.for("react.provider"),
  x1 = Symbol.for("react.context"),
  w1 = Symbol.for("react.forward_ref"),
  _1 = Symbol.for("react.suspense"),
  S1 = Symbol.for("react.memo"),
  E1 = Symbol.for("react.lazy"),
  Kp = Symbol.iterator;
function k1(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Kp && e[Kp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var sg = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ug = Object.assign,
  cg = {};
function Gi(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = cg),
    (this.updater = r || sg);
}
Gi.prototype.isReactComponent = {};
Gi.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Gi.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function fg() {}
fg.prototype = Gi.prototype;
function Df(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = cg),
    (this.updater = r || sg);
}
var Lf = (Df.prototype = new fg());
Lf.constructor = Df;
ug(Lf, Gi.prototype);
Lf.isPureReactComponent = !0;
var zp = Array.isArray,
  dg = Object.prototype.hasOwnProperty,
  Bf = { current: null },
  pg = { key: !0, ref: !0, __self: !0, __source: !0 };
function hg(e, t, r) {
  var n,
    i = {},
    o = null,
    l = null;
  if (t != null)
    for (n in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      dg.call(t, n) && !pg.hasOwnProperty(n) && (i[n] = t[n]);
  var s = arguments.length - 2;
  if (s === 1) i.children = r;
  else if (1 < s) {
    for (var c = Array(s), f = 0; f < s; f++) c[f] = arguments[f + 2];
    i.children = c;
  }
  if (e && e.defaultProps)
    for (n in ((s = e.defaultProps), s)) i[n] === void 0 && (i[n] = s[n]);
  return {
    $$typeof: sa,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: Bf.current,
  };
}
function C1(e, t) {
  return {
    $$typeof: sa,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Rf(e) {
  return typeof e == "object" && e !== null && e.$$typeof === sa;
}
function b1(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (r) {
      return t[r];
    })
  );
}
var Up = /\/+/g;
function hu(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? b1("" + e.key)
    : t.toString(36);
}
function yl(e, t, r, n, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (o) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case sa:
          case h1:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (i = i(l)),
      (e = n === "" ? "." + hu(l, 0) : n),
      zp(i)
        ? ((r = ""),
          e != null && (r = e.replace(Up, "$&/") + "/"),
          yl(i, t, r, "", function (f) {
            return f;
          }))
        : i != null &&
          (Rf(i) &&
            (i = C1(
              i,
              r +
                (!i.key || (l && l.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Up, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((l = 0), (n = n === "" ? "." : n + ":"), zp(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var c = n + hu(o, s);
      l += yl(o, t, r, c, i);
    }
  else if (((c = k1(e)), typeof c == "function"))
    for (e = c.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (c = n + hu(o, s++)), (l += yl(o, t, r, c, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function ja(e, t, r) {
  if (e == null) return e;
  var n = [],
    i = 0;
  return (
    yl(e, n, "", "", function (o) {
      return t.call(r, o, i++);
    }),
    n
  );
}
function N1(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = r));
        },
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = r));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var kt = { current: null },
  xl = { transition: null },
  O1 = {
    ReactCurrentDispatcher: kt,
    ReactCurrentBatchConfig: xl,
    ReactCurrentOwner: Bf,
  };
function mg() {
  throw Error("act(...) is not supported in production builds of React.");
}
me.Children = {
  map: ja,
  forEach: function (e, t, r) {
    ja(
      e,
      function () {
        t.apply(this, arguments);
      },
      r
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ja(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ja(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Rf(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
me.Component = Gi;
me.Fragment = m1;
me.Profiler = g1;
me.PureComponent = Df;
me.StrictMode = v1;
me.Suspense = _1;
me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O1;
me.act = mg;
me.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var n = ug({}, e.props),
    i = e.key,
    o = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (l = Bf.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (c in t)
      dg.call(t, c) &&
        !pg.hasOwnProperty(c) &&
        (n[c] = t[c] === void 0 && s !== void 0 ? s[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) n.children = r;
  else if (1 < c) {
    s = Array(c);
    for (var f = 0; f < c; f++) s[f] = arguments[f + 2];
    n.children = s;
  }
  return { $$typeof: sa, type: e.type, key: i, ref: o, props: n, _owner: l };
};
me.createContext = function (e) {
  return (
    (e = {
      $$typeof: x1,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: y1, _context: e }),
    (e.Consumer = e)
  );
};
me.createElement = hg;
me.createFactory = function (e) {
  var t = hg.bind(null, e);
  return (t.type = e), t;
};
me.createRef = function () {
  return { current: null };
};
me.forwardRef = function (e) {
  return { $$typeof: w1, render: e };
};
me.isValidElement = Rf;
me.lazy = function (e) {
  return { $$typeof: E1, _payload: { _status: -1, _result: e }, _init: N1 };
};
me.memo = function (e, t) {
  return { $$typeof: S1, type: e, compare: t === void 0 ? null : t };
};
me.startTransition = function (e) {
  var t = xl.transition;
  xl.transition = {};
  try {
    e();
  } finally {
    xl.transition = t;
  }
};
me.unstable_act = mg;
me.useCallback = function (e, t) {
  return kt.current.useCallback(e, t);
};
me.useContext = function (e) {
  return kt.current.useContext(e);
};
me.useDebugValue = function () {};
me.useDeferredValue = function (e) {
  return kt.current.useDeferredValue(e);
};
me.useEffect = function (e, t) {
  return kt.current.useEffect(e, t);
};
me.useId = function () {
  return kt.current.useId();
};
me.useImperativeHandle = function (e, t, r) {
  return kt.current.useImperativeHandle(e, t, r);
};
me.useInsertionEffect = function (e, t) {
  return kt.current.useInsertionEffect(e, t);
};
me.useLayoutEffect = function (e, t) {
  return kt.current.useLayoutEffect(e, t);
};
me.useMemo = function (e, t) {
  return kt.current.useMemo(e, t);
};
me.useReducer = function (e, t, r) {
  return kt.current.useReducer(e, t, r);
};
me.useRef = function (e) {
  return kt.current.useRef(e);
};
me.useState = function (e) {
  return kt.current.useState(e);
};
me.useSyncExternalStore = function (e, t, r) {
  return kt.current.useSyncExternalStore(e, t, r);
};
me.useTransition = function () {
  return kt.current.useTransition();
};
me.version = "18.3.1";
lg.exports = me;
var U = lg.exports;
const vg = og(U),
  T1 = p1({ __proto__: null, default: vg }, [U]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var D1 = U,
  L1 = Symbol.for("react.element"),
  B1 = Symbol.for("react.fragment"),
  R1 = Object.prototype.hasOwnProperty,
  M1 = D1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  I1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function gg(e, t, r) {
  var n,
    i = {},
    o = null,
    l = null;
  r !== void 0 && (o = "" + r),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (n in t) R1.call(t, n) && !I1.hasOwnProperty(n) && (i[n] = t[n]);
  if (e && e.defaultProps)
    for (n in ((t = e.defaultProps), t)) i[n] === void 0 && (i[n] = t[n]);
  return {
    $$typeof: L1,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: M1.current,
  };
}
cs.Fragment = B1;
cs.jsx = gg;
cs.jsxs = gg;
ag.exports = cs;
var v = ag.exports,
  vc = {},
  yg = { exports: {} },
  Vt = {},
  xg = { exports: {} },
  wg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(z, q) {
    var V = z.length;
    z.push(q);
    e: for (; 0 < V; ) {
      var Y = (V - 1) >>> 1,
        ae = z[Y];
      if (0 < i(ae, q)) (z[Y] = q), (z[V] = ae), (V = Y);
      else break e;
    }
  }
  function r(z) {
    return z.length === 0 ? null : z[0];
  }
  function n(z) {
    if (z.length === 0) return null;
    var q = z[0],
      V = z.pop();
    if (V !== q) {
      z[0] = V;
      e: for (var Y = 0, ae = z.length, Ee = ae >>> 1; Y < Ee; ) {
        var ve = 2 * (Y + 1) - 1,
          te = z[ve],
          ne = ve + 1,
          ue = z[ne];
        if (0 > i(te, V))
          ne < ae && 0 > i(ue, te)
            ? ((z[Y] = ue), (z[ne] = V), (Y = ne))
            : ((z[Y] = te), (z[ve] = V), (Y = ve));
        else if (ne < ae && 0 > i(ue, V)) (z[Y] = ue), (z[ne] = V), (Y = ne);
        else break e;
      }
    }
    return q;
  }
  function i(z, q) {
    var V = z.sortIndex - q.sortIndex;
    return V !== 0 ? V : z.id - q.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var l = Date,
      s = l.now();
    e.unstable_now = function () {
      return l.now() - s;
    };
  }
  var c = [],
    f = [],
    h = 1,
    g = null,
    p = 3,
    x = !1,
    w = !1,
    k = !1,
    b = typeof setTimeout == "function" ? setTimeout : null,
    S = typeof clearTimeout == "function" ? clearTimeout : null,
    _ = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function E(z) {
    for (var q = r(f); q !== null; ) {
      if (q.callback === null) n(f);
      else if (q.startTime <= z)
        n(f), (q.sortIndex = q.expirationTime), t(c, q);
      else break;
      q = r(f);
    }
  }
  function N(z) {
    if (((k = !1), E(z), !w))
      if (r(c) !== null) (w = !0), Z(L);
      else {
        var q = r(f);
        q !== null && ee(N, q.startTime - z);
      }
  }
  function L(z, q) {
    (w = !1), k && ((k = !1), S(F), (F = -1)), (x = !0);
    var V = p;
    try {
      for (
        E(q), g = r(c);
        g !== null && (!(g.expirationTime > q) || (z && !M()));

      ) {
        var Y = g.callback;
        if (typeof Y == "function") {
          (g.callback = null), (p = g.priorityLevel);
          var ae = Y(g.expirationTime <= q);
          (q = e.unstable_now()),
            typeof ae == "function" ? (g.callback = ae) : g === r(c) && n(c),
            E(q);
        } else n(c);
        g = r(c);
      }
      if (g !== null) var Ee = !0;
      else {
        var ve = r(f);
        ve !== null && ee(N, ve.startTime - q), (Ee = !1);
      }
      return Ee;
    } finally {
      (g = null), (p = V), (x = !1);
    }
  }
  var A = !1,
    K = null,
    F = -1,
    H = 5,
    P = -1;
  function M() {
    return !(e.unstable_now() - P < H);
  }
  function D() {
    if (K !== null) {
      var z = e.unstable_now();
      P = z;
      var q = !0;
      try {
        q = K(!0, z);
      } finally {
        q ? j() : ((A = !1), (K = null));
      }
    } else A = !1;
  }
  var j;
  if (typeof _ == "function")
    j = function () {
      _(D);
    };
  else if (typeof MessageChannel < "u") {
    var I = new MessageChannel(),
      G = I.port2;
    (I.port1.onmessage = D),
      (j = function () {
        G.postMessage(null);
      });
  } else
    j = function () {
      b(D, 0);
    };
  function Z(z) {
    (K = z), A || ((A = !0), j());
  }
  function ee(z, q) {
    F = b(function () {
      z(e.unstable_now());
    }, q);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (z) {
      z.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || x || ((w = !0), Z(L));
    }),
    (e.unstable_forceFrameRate = function (z) {
      0 > z || 125 < z
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (H = 0 < z ? Math.floor(1e3 / z) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(c);
    }),
    (e.unstable_next = function (z) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var q = 3;
          break;
        default:
          q = p;
      }
      var V = p;
      p = q;
      try {
        return z();
      } finally {
        p = V;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (z, q) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var V = p;
      p = z;
      try {
        return q();
      } finally {
        p = V;
      }
    }),
    (e.unstable_scheduleCallback = function (z, q, V) {
      var Y = e.unstable_now();
      switch (
        (typeof V == "object" && V !== null
          ? ((V = V.delay), (V = typeof V == "number" && 0 < V ? Y + V : Y))
          : (V = Y),
        z)
      ) {
        case 1:
          var ae = -1;
          break;
        case 2:
          ae = 250;
          break;
        case 5:
          ae = 1073741823;
          break;
        case 4:
          ae = 1e4;
          break;
        default:
          ae = 5e3;
      }
      return (
        (ae = V + ae),
        (z = {
          id: h++,
          callback: q,
          priorityLevel: z,
          startTime: V,
          expirationTime: ae,
          sortIndex: -1,
        }),
        V > Y
          ? ((z.sortIndex = V),
            t(f, z),
            r(c) === null &&
              z === r(f) &&
              (k ? (S(F), (F = -1)) : (k = !0), ee(N, V - Y)))
          : ((z.sortIndex = ae), t(c, z), w || x || ((w = !0), Z(L))),
        z
      );
    }),
    (e.unstable_shouldYield = M),
    (e.unstable_wrapCallback = function (z) {
      var q = p;
      return function () {
        var V = p;
        p = q;
        try {
          return z.apply(this, arguments);
        } finally {
          p = V;
        }
      };
    });
})(wg);
xg.exports = wg;
var j1 = xg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var A1 = U,
  qt = j1;
function W(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1;
    r < arguments.length;
    r++
  )
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var _g = new Set(),
  zo = {};
function qn(e, t) {
  $i(e, t), $i(e + "Capture", t);
}
function $i(e, t) {
  for (zo[e] = t, e = 0; e < t.length; e++) _g.add(t[e]);
}
var Ur = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  gc = Object.prototype.hasOwnProperty,
  P1 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Hp = {},
  Wp = {};
function F1(e) {
  return gc.call(Wp, e)
    ? !0
    : gc.call(Hp, e)
    ? !1
    : P1.test(e)
    ? (Wp[e] = !0)
    : ((Hp[e] = !0), !1);
}
function $1(e, t, r, n) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n
        ? !1
        : r !== null
        ? !r.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function K1(e, t, r, n) {
  if (t === null || typeof t > "u" || $1(e, t, r, n)) return !0;
  if (n) return !1;
  if (r !== null)
    switch (r.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ct(e, t, r, n, i, o, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = i),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = l);
}
var ct = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ct[e] = new Ct(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ct[t] = new Ct(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ct[e] = new Ct(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ct[e] = new Ct(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ct[e] = new Ct(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ct[e] = new Ct(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ct[e] = new Ct(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ct[e] = new Ct(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ct[e] = new Ct(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Mf = /[\-:]([a-z])/g;
function If(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Mf, If);
    ct[t] = new Ct(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Mf, If);
    ct[t] = new Ct(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Mf, If);
  ct[t] = new Ct(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ct[e] = new Ct(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ct.xlinkHref = new Ct(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ct[e] = new Ct(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function jf(e, t, r, n) {
  var i = ct.hasOwnProperty(t) ? ct[t] : null;
  (i !== null
    ? i.type !== 0
    : n ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (K1(t, r, i, n) && (r = null),
    n || i === null
      ? F1(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
      : i.mustUseProperty
      ? (e[i.propertyName] = r === null ? (i.type === 3 ? !1 : "") : r)
      : ((t = i.attributeName),
        (n = i.attributeNamespace),
        r === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (r = i === 3 || (i === 4 && r === !0) ? "" : "" + r),
            n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var Vr = A1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Aa = Symbol.for("react.element"),
  wi = Symbol.for("react.portal"),
  _i = Symbol.for("react.fragment"),
  Af = Symbol.for("react.strict_mode"),
  yc = Symbol.for("react.profiler"),
  Sg = Symbol.for("react.provider"),
  Eg = Symbol.for("react.context"),
  Pf = Symbol.for("react.forward_ref"),
  xc = Symbol.for("react.suspense"),
  wc = Symbol.for("react.suspense_list"),
  Ff = Symbol.for("react.memo"),
  rn = Symbol.for("react.lazy"),
  kg = Symbol.for("react.offscreen"),
  qp = Symbol.iterator;
function ao(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (qp && e[qp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var qe = Object.assign,
  mu;
function ko(e) {
  if (mu === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      mu = (t && t[1]) || "";
    }
  return (
    `
` +
    mu +
    e
  );
}
var vu = !1;
function gu(e, t) {
  if (!e || vu) return "";
  vu = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (f) {
          var n = f;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (f) {
          n = f;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (f) {
        n = f;
      }
      e();
    }
  } catch (f) {
    if (f && n && typeof f.stack == "string") {
      for (
        var i = f.stack.split(`
`),
          o = n.stack.split(`
`),
          l = i.length - 1,
          s = o.length - 1;
        1 <= l && 0 <= s && i[l] !== o[s];

      )
        s--;
      for (; 1 <= l && 0 <= s; l--, s--)
        if (i[l] !== o[s]) {
          if (l !== 1 || s !== 1)
            do
              if ((l--, s--, 0 > s || i[l] !== o[s])) {
                var c =
                  `
` + i[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    c.includes("<anonymous>") &&
                    (c = c.replace("<anonymous>", e.displayName)),
                  c
                );
              }
            while (1 <= l && 0 <= s);
          break;
        }
    }
  } finally {
    (vu = !1), (Error.prepareStackTrace = r);
  }
  return (e = e ? e.displayName || e.name : "") ? ko(e) : "";
}
function z1(e) {
  switch (e.tag) {
    case 5:
      return ko(e.type);
    case 16:
      return ko("Lazy");
    case 13:
      return ko("Suspense");
    case 19:
      return ko("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = gu(e.type, !1)), e;
    case 11:
      return (e = gu(e.type.render, !1)), e;
    case 1:
      return (e = gu(e.type, !0)), e;
    default:
      return "";
  }
}
function _c(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case _i:
      return "Fragment";
    case wi:
      return "Portal";
    case yc:
      return "Profiler";
    case Af:
      return "StrictMode";
    case xc:
      return "Suspense";
    case wc:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Eg:
        return (e.displayName || "Context") + ".Consumer";
      case Sg:
        return (e._context.displayName || "Context") + ".Provider";
      case Pf:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ff:
        return (
          (t = e.displayName || null), t !== null ? t : _c(e.type) || "Memo"
        );
      case rn:
        (t = e._payload), (e = e._init);
        try {
          return _c(e(t));
        } catch {}
    }
  return null;
}
function U1(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return _c(t);
    case 8:
      return t === Af ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function _n(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Cg(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function H1(e) {
  var t = Cg(e) ? "checked" : "value",
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    n = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof r < "u" &&
    typeof r.get == "function" &&
    typeof r.set == "function"
  ) {
    var i = r.get,
      o = r.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (l) {
          (n = "" + l), o.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return n;
        },
        setValue: function (l) {
          n = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Pa(e) {
  e._valueTracker || (e._valueTracker = H1(e));
}
function bg(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(),
    n = "";
  return (
    e && (n = Cg(e) ? (e.checked ? "true" : "false") : e.value),
    (e = n),
    e !== r ? (t.setValue(e), !0) : !1
  );
}
function Rl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Sc(e, t) {
  var r = t.checked;
  return qe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? e._wrapperState.initialChecked,
  });
}
function Vp(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked;
  (r = _n(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Ng(e, t) {
  (t = t.checked), t != null && jf(e, "checked", t, !1);
}
function Ec(e, t) {
  Ng(e, t);
  var r = _n(t.value),
    n = t.type;
  if (r != null)
    n === "number"
      ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
      : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? kc(e, t.type, r)
    : t.hasOwnProperty("defaultValue") && kc(e, t.type, _n(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Gp(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (
      !(
        (n !== "submit" && n !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      r || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (r = e.name),
    r !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    r !== "" && (e.name = r);
}
function kc(e, t, r) {
  (t !== "number" || Rl(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var Co = Array.isArray;
function Bi(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < r.length; i++) t["$" + r[i]] = !0;
    for (r = 0; r < e.length; r++)
      (i = t.hasOwnProperty("$" + e[r].value)),
        e[r].selected !== i && (e[r].selected = i),
        i && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + _n(r), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === r) {
        (e[i].selected = !0), n && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Cc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(W(91));
  return qe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Jp(e, t) {
  var r = t.value;
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(W(92));
      if (Co(r)) {
        if (1 < r.length) throw Error(W(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), (r = t);
  }
  e._wrapperState = { initialValue: _n(r) };
}
function Og(e, t) {
  var r = _n(t.value),
    n = _n(t.defaultValue);
  r != null &&
    ((r = "" + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = "" + n);
}
function Yp(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Tg(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function bc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Tg(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Fa,
  Dg = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, r, n, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, n, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Fa = Fa || document.createElement("div"),
          Fa.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Fa.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Uo(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Do = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  W1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Do).forEach(function (e) {
  W1.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Do[t] = Do[e]);
  });
});
function Lg(e, t, r) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : r || typeof t != "number" || t === 0 || (Do.hasOwnProperty(e) && Do[e])
    ? ("" + t).trim()
    : t + "px";
}
function Bg(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0,
        i = Lg(r, t[r], n);
      r === "float" && (r = "cssFloat"), n ? e.setProperty(r, i) : (e[r] = i);
    }
}
var q1 = qe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Nc(e, t) {
  if (t) {
    if (q1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(W(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(W(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(W(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(W(62));
  }
}
function Oc(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Tc = null;
function $f(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Dc = null,
  Ri = null,
  Mi = null;
function Qp(e) {
  if ((e = fa(e))) {
    if (typeof Dc != "function") throw Error(W(280));
    var t = e.stateNode;
    t && ((t = ms(t)), Dc(e.stateNode, e.type, t));
  }
}
function Rg(e) {
  Ri ? (Mi ? Mi.push(e) : (Mi = [e])) : (Ri = e);
}
function Mg() {
  if (Ri) {
    var e = Ri,
      t = Mi;
    if (((Mi = Ri = null), Qp(e), t)) for (e = 0; e < t.length; e++) Qp(t[e]);
  }
}
function Ig(e, t) {
  return e(t);
}
function jg() {}
var yu = !1;
function Ag(e, t, r) {
  if (yu) return e(t, r);
  yu = !0;
  try {
    return Ig(e, t, r);
  } finally {
    (yu = !1), (Ri !== null || Mi !== null) && (jg(), Mg());
  }
}
function Ho(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = ms(r);
  if (n === null) return null;
  r = n[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (n = !n.disabled) ||
        ((e = e.type),
        (n = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !n);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != "function") throw Error(W(231, t, typeof r));
  return r;
}
var Lc = !1;
if (Ur)
  try {
    var lo = {};
    Object.defineProperty(lo, "passive", {
      get: function () {
        Lc = !0;
      },
    }),
      window.addEventListener("test", lo, lo),
      window.removeEventListener("test", lo, lo);
  } catch {
    Lc = !1;
  }
function V1(e, t, r, n, i, o, l, s, c) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, f);
  } catch (h) {
    this.onError(h);
  }
}
var Lo = !1,
  Ml = null,
  Il = !1,
  Bc = null,
  G1 = {
    onError: function (e) {
      (Lo = !0), (Ml = e);
    },
  };
function J1(e, t, r, n, i, o, l, s, c) {
  (Lo = !1), (Ml = null), V1.apply(G1, arguments);
}
function Y1(e, t, r, n, i, o, l, s, c) {
  if ((J1.apply(this, arguments), Lo)) {
    if (Lo) {
      var f = Ml;
      (Lo = !1), (Ml = null);
    } else throw Error(W(198));
    Il || ((Il = !0), (Bc = f));
  }
}
function Vn(e) {
  var t = e,
    r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function Pg(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Xp(e) {
  if (Vn(e) !== e) throw Error(W(188));
}
function Q1(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Vn(e)), t === null)) throw Error(W(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var i = r.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((n = i.return), n !== null)) {
        r = n;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === r) return Xp(i), e;
        if (o === n) return Xp(i), t;
        o = o.sibling;
      }
      throw Error(W(188));
    }
    if (r.return !== n.return) (r = i), (n = o);
    else {
      for (var l = !1, s = i.child; s; ) {
        if (s === r) {
          (l = !0), (r = i), (n = o);
          break;
        }
        if (s === n) {
          (l = !0), (n = i), (r = o);
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = o.child; s; ) {
          if (s === r) {
            (l = !0), (r = o), (n = i);
            break;
          }
          if (s === n) {
            (l = !0), (n = o), (r = i);
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(W(189));
      }
    }
    if (r.alternate !== n) throw Error(W(190));
  }
  if (r.tag !== 3) throw Error(W(188));
  return r.stateNode.current === r ? e : t;
}
function Fg(e) {
  return (e = Q1(e)), e !== null ? $g(e) : null;
}
function $g(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = $g(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Kg = qt.unstable_scheduleCallback,
  Zp = qt.unstable_cancelCallback,
  X1 = qt.unstable_shouldYield,
  Z1 = qt.unstable_requestPaint,
  Ye = qt.unstable_now,
  e_ = qt.unstable_getCurrentPriorityLevel,
  Kf = qt.unstable_ImmediatePriority,
  zg = qt.unstable_UserBlockingPriority,
  jl = qt.unstable_NormalPriority,
  t_ = qt.unstable_LowPriority,
  Ug = qt.unstable_IdlePriority,
  fs = null,
  Or = null;
function r_(e) {
  if (Or && typeof Or.onCommitFiberRoot == "function")
    try {
      Or.onCommitFiberRoot(fs, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var dr = Math.clz32 ? Math.clz32 : o_,
  n_ = Math.log,
  i_ = Math.LN2;
function o_(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((n_(e) / i_) | 0)) | 0;
}
var $a = 64,
  Ka = 4194304;
function bo(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Al(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var n = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    l = r & 268435455;
  if (l !== 0) {
    var s = l & ~i;
    s !== 0 ? (n = bo(s)) : ((o &= l), o !== 0 && (n = bo(o)));
  } else (l = r & ~i), l !== 0 ? (n = bo(l)) : o !== 0 && (n = bo(o));
  if (n === 0) return 0;
  if (
    t !== 0 &&
    t !== n &&
    !(t & i) &&
    ((i = n & -n), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((n & 4 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= n; 0 < t; )
      (r = 31 - dr(t)), (i = 1 << r), (n |= e[r]), (t &= ~i);
  return n;
}
function a_(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function l_(e, t) {
  for (
    var r = e.suspendedLanes,
      n = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var l = 31 - dr(o),
      s = 1 << l,
      c = i[l];
    c === -1
      ? (!(s & r) || s & n) && (i[l] = a_(s, t))
      : c <= t && (e.expiredLanes |= s),
      (o &= ~s);
  }
}
function Rc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Hg() {
  var e = $a;
  return ($a <<= 1), !($a & 4194240) && ($a = 64), e;
}
function xu(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function ua(e, t, r) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - dr(t)),
    (e[t] = r);
}
function s_(e, t) {
  var r = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var i = 31 - dr(r),
      o = 1 << i;
    (t[i] = 0), (n[i] = -1), (e[i] = -1), (r &= ~o);
  }
}
function zf(e, t) {
  var r = (e.entangledLanes |= t);
  for (e = e.entanglements; r; ) {
    var n = 31 - dr(r),
      i = 1 << n;
    (i & t) | (e[n] & t) && (e[n] |= t), (r &= ~i);
  }
}
var Ne = 0;
function Wg(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var qg,
  Uf,
  Vg,
  Gg,
  Jg,
  Mc = !1,
  za = [],
  dn = null,
  pn = null,
  hn = null,
  Wo = new Map(),
  qo = new Map(),
  an = [],
  u_ =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function eh(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      dn = null;
      break;
    case "dragenter":
    case "dragleave":
      pn = null;
      break;
    case "mouseover":
    case "mouseout":
      hn = null;
      break;
    case "pointerover":
    case "pointerout":
      Wo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      qo.delete(t.pointerId);
  }
}
function so(e, t, r, n, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = fa(t)), t !== null && Uf(t)),
      e)
    : ((e.eventSystemFlags |= n),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function c_(e, t, r, n, i) {
  switch (t) {
    case "focusin":
      return (dn = so(dn, e, t, r, n, i)), !0;
    case "dragenter":
      return (pn = so(pn, e, t, r, n, i)), !0;
    case "mouseover":
      return (hn = so(hn, e, t, r, n, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Wo.set(o, so(Wo.get(o) || null, e, t, r, n, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), qo.set(o, so(qo.get(o) || null, e, t, r, n, i)), !0
      );
  }
  return !1;
}
function Yg(e) {
  var t = In(e.target);
  if (t !== null) {
    var r = Vn(t);
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = Pg(r)), t !== null)) {
          (e.blockedOn = t),
            Jg(e.priority, function () {
              Vg(r);
            });
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function wl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = Ic(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      (Tc = n), r.target.dispatchEvent(n), (Tc = null);
    } else return (t = fa(r)), t !== null && Uf(t), (e.blockedOn = r), !1;
    t.shift();
  }
  return !0;
}
function th(e, t, r) {
  wl(e) && r.delete(t);
}
function f_() {
  (Mc = !1),
    dn !== null && wl(dn) && (dn = null),
    pn !== null && wl(pn) && (pn = null),
    hn !== null && wl(hn) && (hn = null),
    Wo.forEach(th),
    qo.forEach(th);
}
function uo(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Mc ||
      ((Mc = !0),
      qt.unstable_scheduleCallback(qt.unstable_NormalPriority, f_)));
}
function Vo(e) {
  function t(i) {
    return uo(i, e);
  }
  if (0 < za.length) {
    uo(za[0], e);
    for (var r = 1; r < za.length; r++) {
      var n = za[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (
    dn !== null && uo(dn, e),
      pn !== null && uo(pn, e),
      hn !== null && uo(hn, e),
      Wo.forEach(t),
      qo.forEach(t),
      r = 0;
    r < an.length;
    r++
  )
    (n = an[r]), n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < an.length && ((r = an[0]), r.blockedOn === null); )
    Yg(r), r.blockedOn === null && an.shift();
}
var Ii = Vr.ReactCurrentBatchConfig,
  Pl = !0;
function d_(e, t, r, n) {
  var i = Ne,
    o = Ii.transition;
  Ii.transition = null;
  try {
    (Ne = 1), Hf(e, t, r, n);
  } finally {
    (Ne = i), (Ii.transition = o);
  }
}
function p_(e, t, r, n) {
  var i = Ne,
    o = Ii.transition;
  Ii.transition = null;
  try {
    (Ne = 4), Hf(e, t, r, n);
  } finally {
    (Ne = i), (Ii.transition = o);
  }
}
function Hf(e, t, r, n) {
  if (Pl) {
    var i = Ic(e, t, r, n);
    if (i === null) Tu(e, t, n, Fl, r), eh(e, n);
    else if (c_(i, e, t, r, n)) n.stopPropagation();
    else if ((eh(e, n), t & 4 && -1 < u_.indexOf(e))) {
      for (; i !== null; ) {
        var o = fa(i);
        if (
          (o !== null && qg(o),
          (o = Ic(e, t, r, n)),
          o === null && Tu(e, t, n, Fl, r),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && n.stopPropagation();
    } else Tu(e, t, n, null, r);
  }
}
var Fl = null;
function Ic(e, t, r, n) {
  if (((Fl = null), (e = $f(n)), (e = In(e)), e !== null))
    if (((t = Vn(e)), t === null)) e = null;
    else if (((r = t.tag), r === 13)) {
      if (((e = Pg(t)), e !== null)) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Fl = e), null;
}
function Qg(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (e_()) {
        case Kf:
          return 1;
        case zg:
          return 4;
        case jl:
        case t_:
          return 16;
        case Ug:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var sn = null,
  Wf = null,
  _l = null;
function Xg() {
  if (_l) return _l;
  var e,
    t = Wf,
    r = t.length,
    n,
    i = "value" in sn ? sn.value : sn.textContent,
    o = i.length;
  for (e = 0; e < r && t[e] === i[e]; e++);
  var l = r - e;
  for (n = 1; n <= l && t[r - n] === i[o - n]; n++);
  return (_l = i.slice(e, 1 < n ? 1 - n : void 0));
}
function Sl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ua() {
  return !0;
}
function rh() {
  return !1;
}
function Gt(e) {
  function t(r, n, i, o, l) {
    (this._reactName = r),
      (this._targetInst = i),
      (this.type = n),
      (this.nativeEvent = o),
      (this.target = l),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((r = e[s]), (this[s] = r ? r(o) : o[s]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Ua
        : rh),
      (this.isPropagationStopped = rh),
      this
    );
  }
  return (
    qe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != "unknown" && (r.returnValue = !1),
          (this.isDefaultPrevented = Ua));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
          (this.isPropagationStopped = Ua));
      },
      persist: function () {},
      isPersistent: Ua,
    }),
    t
  );
}
var Ji = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  qf = Gt(Ji),
  ca = qe({}, Ji, { view: 0, detail: 0 }),
  h_ = Gt(ca),
  wu,
  _u,
  co,
  ds = qe({}, ca, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Vf,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== co &&
            (co && e.type === "mousemove"
              ? ((wu = e.screenX - co.screenX), (_u = e.screenY - co.screenY))
              : (_u = wu = 0),
            (co = e)),
          wu);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : _u;
    },
  }),
  nh = Gt(ds),
  m_ = qe({}, ds, { dataTransfer: 0 }),
  v_ = Gt(m_),
  g_ = qe({}, ca, { relatedTarget: 0 }),
  Su = Gt(g_),
  y_ = qe({}, Ji, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  x_ = Gt(y_),
  w_ = qe({}, Ji, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  __ = Gt(w_),
  S_ = qe({}, Ji, { data: 0 }),
  ih = Gt(S_),
  E_ = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  k_ = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  C_ = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function b_(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = C_[e]) ? !!t[e] : !1;
}
function Vf() {
  return b_;
}
var N_ = qe({}, ca, {
    key: function (e) {
      if (e.key) {
        var t = E_[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Sl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? k_[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Vf,
    charCode: function (e) {
      return e.type === "keypress" ? Sl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Sl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  O_ = Gt(N_),
  T_ = qe({}, ds, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  oh = Gt(T_),
  D_ = qe({}, ca, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Vf,
  }),
  L_ = Gt(D_),
  B_ = qe({}, Ji, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  R_ = Gt(B_),
  M_ = qe({}, ds, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  I_ = Gt(M_),
  j_ = [9, 13, 27, 32],
  Gf = Ur && "CompositionEvent" in window,
  Bo = null;
Ur && "documentMode" in document && (Bo = document.documentMode);
var A_ = Ur && "TextEvent" in window && !Bo,
  Zg = Ur && (!Gf || (Bo && 8 < Bo && 11 >= Bo)),
  ah = " ",
  lh = !1;
function ey(e, t) {
  switch (e) {
    case "keyup":
      return j_.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ty(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Si = !1;
function P_(e, t) {
  switch (e) {
    case "compositionend":
      return ty(t);
    case "keypress":
      return t.which !== 32 ? null : ((lh = !0), ah);
    case "textInput":
      return (e = t.data), e === ah && lh ? null : e;
    default:
      return null;
  }
}
function F_(e, t) {
  if (Si)
    return e === "compositionend" || (!Gf && ey(e, t))
      ? ((e = Xg()), (_l = Wf = sn = null), (Si = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Zg && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var $_ = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function sh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!$_[e.type] : t === "textarea";
}
function ry(e, t, r, n) {
  Rg(n),
    (t = $l(t, "onChange")),
    0 < t.length &&
      ((r = new qf("onChange", "change", null, r, n)),
      e.push({ event: r, listeners: t }));
}
var Ro = null,
  Go = null;
function K_(e) {
  py(e, 0);
}
function ps(e) {
  var t = Ci(e);
  if (bg(t)) return e;
}
function z_(e, t) {
  if (e === "change") return t;
}
var ny = !1;
if (Ur) {
  var Eu;
  if (Ur) {
    var ku = "oninput" in document;
    if (!ku) {
      var uh = document.createElement("div");
      uh.setAttribute("oninput", "return;"),
        (ku = typeof uh.oninput == "function");
    }
    Eu = ku;
  } else Eu = !1;
  ny = Eu && (!document.documentMode || 9 < document.documentMode);
}
function ch() {
  Ro && (Ro.detachEvent("onpropertychange", iy), (Go = Ro = null));
}
function iy(e) {
  if (e.propertyName === "value" && ps(Go)) {
    var t = [];
    ry(t, Go, e, $f(e)), Ag(K_, t);
  }
}
function U_(e, t, r) {
  e === "focusin"
    ? (ch(), (Ro = t), (Go = r), Ro.attachEvent("onpropertychange", iy))
    : e === "focusout" && ch();
}
function H_(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ps(Go);
}
function W_(e, t) {
  if (e === "click") return ps(t);
}
function q_(e, t) {
  if (e === "input" || e === "change") return ps(t);
}
function V_(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var hr = typeof Object.is == "function" ? Object.is : V_;
function Jo(e, t) {
  if (hr(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var i = r[n];
    if (!gc.call(t, i) || !hr(e[i], t[i])) return !1;
  }
  return !0;
}
function fh(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function dh(e, t) {
  var r = fh(e);
  e = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (((n = e + r.textContent.length), e <= t && n >= t))
        return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = fh(r);
  }
}
function oy(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? oy(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function ay() {
  for (var e = window, t = Rl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = Rl(e.document);
  }
  return t;
}
function Jf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function G_(e) {
  var t = ay(),
    r = e.focusedElem,
    n = e.selectionRange;
  if (
    t !== r &&
    r &&
    r.ownerDocument &&
    oy(r.ownerDocument.documentElement, r)
  ) {
    if (n !== null && Jf(r)) {
      if (
        ((t = n.start),
        (e = n.end),
        e === void 0 && (e = t),
        "selectionStart" in r)
      )
        (r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length));
      else if (
        ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = r.textContent.length,
          o = Math.min(n.start, i);
        (n = n.end === void 0 ? o : Math.min(n.end, i)),
          !e.extend && o > n && ((i = n), (n = o), (o = i)),
          (i = dh(r, o));
        var l = dh(r, n);
        i &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > n
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
      (e = t[r]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var J_ = Ur && "documentMode" in document && 11 >= document.documentMode,
  Ei = null,
  jc = null,
  Mo = null,
  Ac = !1;
function ph(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  Ac ||
    Ei == null ||
    Ei !== Rl(n) ||
    ((n = Ei),
    "selectionStart" in n && Jf(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = (
          (n.ownerDocument && n.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (Mo && Jo(Mo, n)) ||
      ((Mo = n),
      (n = $l(jc, "onSelect")),
      0 < n.length &&
        ((t = new qf("onSelect", "select", null, t, r)),
        e.push({ event: t, listeners: n }),
        (t.target = Ei))));
}
function Ha(e, t) {
  var r = {};
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r["Webkit" + e] = "webkit" + t),
    (r["Moz" + e] = "moz" + t),
    r
  );
}
var ki = {
    animationend: Ha("Animation", "AnimationEnd"),
    animationiteration: Ha("Animation", "AnimationIteration"),
    animationstart: Ha("Animation", "AnimationStart"),
    transitionend: Ha("Transition", "TransitionEnd"),
  },
  Cu = {},
  ly = {};
Ur &&
  ((ly = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete ki.animationend.animation,
    delete ki.animationiteration.animation,
    delete ki.animationstart.animation),
  "TransitionEvent" in window || delete ki.transitionend.transition);
function hs(e) {
  if (Cu[e]) return Cu[e];
  if (!ki[e]) return e;
  var t = ki[e],
    r;
  for (r in t) if (t.hasOwnProperty(r) && r in ly) return (Cu[e] = t[r]);
  return e;
}
var sy = hs("animationend"),
  uy = hs("animationiteration"),
  cy = hs("animationstart"),
  fy = hs("transitionend"),
  dy = new Map(),
  hh =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function En(e, t) {
  dy.set(e, t), qn(t, [e]);
}
for (var bu = 0; bu < hh.length; bu++) {
  var Nu = hh[bu],
    Y_ = Nu.toLowerCase(),
    Q_ = Nu[0].toUpperCase() + Nu.slice(1);
  En(Y_, "on" + Q_);
}
En(sy, "onAnimationEnd");
En(uy, "onAnimationIteration");
En(cy, "onAnimationStart");
En("dblclick", "onDoubleClick");
En("focusin", "onFocus");
En("focusout", "onBlur");
En(fy, "onTransitionEnd");
$i("onMouseEnter", ["mouseout", "mouseover"]);
$i("onMouseLeave", ["mouseout", "mouseover"]);
$i("onPointerEnter", ["pointerout", "pointerover"]);
$i("onPointerLeave", ["pointerout", "pointerover"]);
qn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
qn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
qn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
qn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
qn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
qn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var No =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  X_ = new Set("cancel close invalid load scroll toggle".split(" ").concat(No));
function mh(e, t, r) {
  var n = e.type || "unknown-event";
  (e.currentTarget = r), Y1(n, t, void 0, e), (e.currentTarget = null);
}
function py(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r],
      i = n.event;
    n = n.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var l = n.length - 1; 0 <= l; l--) {
          var s = n[l],
            c = s.instance,
            f = s.currentTarget;
          if (((s = s.listener), c !== o && i.isPropagationStopped())) break e;
          mh(i, s, f), (o = c);
        }
      else
        for (l = 0; l < n.length; l++) {
          if (
            ((s = n[l]),
            (c = s.instance),
            (f = s.currentTarget),
            (s = s.listener),
            c !== o && i.isPropagationStopped())
          )
            break e;
          mh(i, s, f), (o = c);
        }
    }
  }
  if (Il) throw ((e = Bc), (Il = !1), (Bc = null), e);
}
function je(e, t) {
  var r = t[zc];
  r === void 0 && (r = t[zc] = new Set());
  var n = e + "__bubble";
  r.has(n) || (hy(t, e, 2, !1), r.add(n));
}
function Ou(e, t, r) {
  var n = 0;
  t && (n |= 4), hy(r, e, n, t);
}
var Wa = "_reactListening" + Math.random().toString(36).slice(2);
function Yo(e) {
  if (!e[Wa]) {
    (e[Wa] = !0),
      _g.forEach(function (r) {
        r !== "selectionchange" && (X_.has(r) || Ou(r, !1, e), Ou(r, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Wa] || ((t[Wa] = !0), Ou("selectionchange", !1, t));
  }
}
function hy(e, t, r, n) {
  switch (Qg(t)) {
    case 1:
      var i = d_;
      break;
    case 4:
      i = p_;
      break;
    default:
      i = Hf;
  }
  (r = i.bind(null, t, r, e)),
    (i = void 0),
    !Lc ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    n
      ? i !== void 0
        ? e.addEventListener(t, r, { capture: !0, passive: i })
        : e.addEventListener(t, r, !0)
      : i !== void 0
      ? e.addEventListener(t, r, { passive: i })
      : e.addEventListener(t, r, !1);
}
function Tu(e, t, r, n, i) {
  var o = n;
  if (!(t & 1) && !(t & 2) && n !== null)
    e: for (;;) {
      if (n === null) return;
      var l = n.tag;
      if (l === 3 || l === 4) {
        var s = n.stateNode.containerInfo;
        if (s === i || (s.nodeType === 8 && s.parentNode === i)) break;
        if (l === 4)
          for (l = n.return; l !== null; ) {
            var c = l.tag;
            if (
              (c === 3 || c === 4) &&
              ((c = l.stateNode.containerInfo),
              c === i || (c.nodeType === 8 && c.parentNode === i))
            )
              return;
            l = l.return;
          }
        for (; s !== null; ) {
          if (((l = In(s)), l === null)) return;
          if (((c = l.tag), c === 5 || c === 6)) {
            n = o = l;
            continue e;
          }
          s = s.parentNode;
        }
      }
      n = n.return;
    }
  Ag(function () {
    var f = o,
      h = $f(r),
      g = [];
    e: {
      var p = dy.get(e);
      if (p !== void 0) {
        var x = qf,
          w = e;
        switch (e) {
          case "keypress":
            if (Sl(r) === 0) break e;
          case "keydown":
          case "keyup":
            x = O_;
            break;
          case "focusin":
            (w = "focus"), (x = Su);
            break;
          case "focusout":
            (w = "blur"), (x = Su);
            break;
          case "beforeblur":
          case "afterblur":
            x = Su;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = nh;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = v_;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = L_;
            break;
          case sy:
          case uy:
          case cy:
            x = x_;
            break;
          case fy:
            x = R_;
            break;
          case "scroll":
            x = h_;
            break;
          case "wheel":
            x = I_;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = __;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = oh;
        }
        var k = (t & 4) !== 0,
          b = !k && e === "scroll",
          S = k ? (p !== null ? p + "Capture" : null) : p;
        k = [];
        for (var _ = f, E; _ !== null; ) {
          E = _;
          var N = E.stateNode;
          if (
            (E.tag === 5 &&
              N !== null &&
              ((E = N),
              S !== null && ((N = Ho(_, S)), N != null && k.push(Qo(_, N, E)))),
            b)
          )
            break;
          _ = _.return;
        }
        0 < k.length &&
          ((p = new x(p, w, null, r, h)), g.push({ event: p, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          p &&
            r !== Tc &&
            (w = r.relatedTarget || r.fromElement) &&
            (In(w) || w[Hr]))
        )
          break e;
        if (
          (x || p) &&
          ((p =
            h.window === h
              ? h
              : (p = h.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          x
            ? ((w = r.relatedTarget || r.toElement),
              (x = f),
              (w = w ? In(w) : null),
              w !== null &&
                ((b = Vn(w)), w !== b || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((x = null), (w = f)),
          x !== w)
        ) {
          if (
            ((k = nh),
            (N = "onMouseLeave"),
            (S = "onMouseEnter"),
            (_ = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = oh),
              (N = "onPointerLeave"),
              (S = "onPointerEnter"),
              (_ = "pointer")),
            (b = x == null ? p : Ci(x)),
            (E = w == null ? p : Ci(w)),
            (p = new k(N, _ + "leave", x, r, h)),
            (p.target = b),
            (p.relatedTarget = E),
            (N = null),
            In(h) === f &&
              ((k = new k(S, _ + "enter", w, r, h)),
              (k.target = E),
              (k.relatedTarget = b),
              (N = k)),
            (b = N),
            x && w)
          )
            t: {
              for (k = x, S = w, _ = 0, E = k; E; E = di(E)) _++;
              for (E = 0, N = S; N; N = di(N)) E++;
              for (; 0 < _ - E; ) (k = di(k)), _--;
              for (; 0 < E - _; ) (S = di(S)), E--;
              for (; _--; ) {
                if (k === S || (S !== null && k === S.alternate)) break t;
                (k = di(k)), (S = di(S));
              }
              k = null;
            }
          else k = null;
          x !== null && vh(g, p, x, k, !1),
            w !== null && b !== null && vh(g, b, w, k, !0);
        }
      }
      e: {
        if (
          ((p = f ? Ci(f) : window),
          (x = p.nodeName && p.nodeName.toLowerCase()),
          x === "select" || (x === "input" && p.type === "file"))
        )
          var L = z_;
        else if (sh(p))
          if (ny) L = q_;
          else {
            L = H_;
            var A = U_;
          }
        else
          (x = p.nodeName) &&
            x.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (L = W_);
        if (L && (L = L(e, f))) {
          ry(g, L, r, h);
          break e;
        }
        A && A(e, p, f),
          e === "focusout" &&
            (A = p._wrapperState) &&
            A.controlled &&
            p.type === "number" &&
            kc(p, "number", p.value);
      }
      switch (((A = f ? Ci(f) : window), e)) {
        case "focusin":
          (sh(A) || A.contentEditable === "true") &&
            ((Ei = A), (jc = f), (Mo = null));
          break;
        case "focusout":
          Mo = jc = Ei = null;
          break;
        case "mousedown":
          Ac = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ac = !1), ph(g, r, h);
          break;
        case "selectionchange":
          if (J_) break;
        case "keydown":
        case "keyup":
          ph(g, r, h);
      }
      var K;
      if (Gf)
        e: {
          switch (e) {
            case "compositionstart":
              var F = "onCompositionStart";
              break e;
            case "compositionend":
              F = "onCompositionEnd";
              break e;
            case "compositionupdate":
              F = "onCompositionUpdate";
              break e;
          }
          F = void 0;
        }
      else
        Si
          ? ey(e, r) && (F = "onCompositionEnd")
          : e === "keydown" && r.keyCode === 229 && (F = "onCompositionStart");
      F &&
        (Zg &&
          r.locale !== "ko" &&
          (Si || F !== "onCompositionStart"
            ? F === "onCompositionEnd" && Si && (K = Xg())
            : ((sn = h),
              (Wf = "value" in sn ? sn.value : sn.textContent),
              (Si = !0))),
        (A = $l(f, F)),
        0 < A.length &&
          ((F = new ih(F, e, null, r, h)),
          g.push({ event: F, listeners: A }),
          K ? (F.data = K) : ((K = ty(r)), K !== null && (F.data = K)))),
        (K = A_ ? P_(e, r) : F_(e, r)) &&
          ((f = $l(f, "onBeforeInput")),
          0 < f.length &&
            ((h = new ih("onBeforeInput", "beforeinput", null, r, h)),
            g.push({ event: h, listeners: f }),
            (h.data = K)));
    }
    py(g, t);
  });
}
function Qo(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function $l(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Ho(e, r)),
      o != null && n.unshift(Qo(e, o, i)),
      (o = Ho(e, t)),
      o != null && n.push(Qo(e, o, i))),
      (e = e.return);
  }
  return n;
}
function di(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function vh(e, t, r, n, i) {
  for (var o = t._reactName, l = []; r !== null && r !== n; ) {
    var s = r,
      c = s.alternate,
      f = s.stateNode;
    if (c !== null && c === n) break;
    s.tag === 5 &&
      f !== null &&
      ((s = f),
      i
        ? ((c = Ho(r, o)), c != null && l.unshift(Qo(r, c, s)))
        : i || ((c = Ho(r, o)), c != null && l.push(Qo(r, c, s)))),
      (r = r.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Z_ = /\r\n?/g,
  eS = /\u0000|\uFFFD/g;
function gh(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Z_,
      `
`
    )
    .replace(eS, "");
}
function qa(e, t, r) {
  if (((t = gh(t)), gh(e) !== t && r)) throw Error(W(425));
}
function Kl() {}
var Pc = null,
  Fc = null;
function $c(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Kc = typeof setTimeout == "function" ? setTimeout : void 0,
  tS = typeof clearTimeout == "function" ? clearTimeout : void 0,
  yh = typeof Promise == "function" ? Promise : void 0,
  rS =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof yh < "u"
      ? function (e) {
          return yh.resolve(null).then(e).catch(nS);
        }
      : Kc;
function nS(e) {
  setTimeout(function () {
    throw e;
  });
}
function Du(e, t) {
  var r = t,
    n = 0;
  do {
    var i = r.nextSibling;
    if ((e.removeChild(r), i && i.nodeType === 8))
      if (((r = i.data), r === "/$")) {
        if (n === 0) {
          e.removeChild(i), Vo(t);
          return;
        }
        n--;
      } else (r !== "$" && r !== "$?" && r !== "$!") || n++;
    r = i;
  } while (r);
  Vo(t);
}
function mn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function xh(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0) return e;
        t--;
      } else r === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Yi = Math.random().toString(36).slice(2),
  Nr = "__reactFiber$" + Yi,
  Xo = "__reactProps$" + Yi,
  Hr = "__reactContainer$" + Yi,
  zc = "__reactEvents$" + Yi,
  iS = "__reactListeners$" + Yi,
  oS = "__reactHandles$" + Yi;
function In(e) {
  var t = e[Nr];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if ((t = r[Hr] || r[Nr])) {
      if (
        ((r = t.alternate),
        t.child !== null || (r !== null && r.child !== null))
      )
        for (e = xh(e); e !== null; ) {
          if ((r = e[Nr])) return r;
          e = xh(e);
        }
      return t;
    }
    (e = r), (r = e.parentNode);
  }
  return null;
}
function fa(e) {
  return (
    (e = e[Nr] || e[Hr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ci(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(W(33));
}
function ms(e) {
  return e[Xo] || null;
}
var Uc = [],
  bi = -1;
function kn(e) {
  return { current: e };
}
function Ae(e) {
  0 > bi || ((e.current = Uc[bi]), (Uc[bi] = null), bi--);
}
function Re(e, t) {
  bi++, (Uc[bi] = e.current), (e.current = t);
}
var Sn = {},
  yt = kn(Sn),
  Bt = kn(!1),
  Kn = Sn;
function Ki(e, t) {
  var r = e.type.contextTypes;
  if (!r) return Sn;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in r) i[o] = t[o];
  return (
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Rt(e) {
  return (e = e.childContextTypes), e != null;
}
function zl() {
  Ae(Bt), Ae(yt);
}
function wh(e, t, r) {
  if (yt.current !== Sn) throw Error(W(168));
  Re(yt, t), Re(Bt, r);
}
function my(e, t, r) {
  var n = e.stateNode;
  if (((t = t.childContextTypes), typeof n.getChildContext != "function"))
    return r;
  n = n.getChildContext();
  for (var i in n) if (!(i in t)) throw Error(W(108, U1(e) || "Unknown", i));
  return qe({}, r, n);
}
function Ul(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Sn),
    (Kn = yt.current),
    Re(yt, e),
    Re(Bt, Bt.current),
    !0
  );
}
function _h(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(W(169));
  r
    ? ((e = my(e, t, Kn)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      Ae(Bt),
      Ae(yt),
      Re(yt, e))
    : Ae(Bt),
    Re(Bt, r);
}
var jr = null,
  vs = !1,
  Lu = !1;
function vy(e) {
  jr === null ? (jr = [e]) : jr.push(e);
}
function aS(e) {
  (vs = !0), vy(e);
}
function Cn() {
  if (!Lu && jr !== null) {
    Lu = !0;
    var e = 0,
      t = Ne;
    try {
      var r = jr;
      for (Ne = 1; e < r.length; e++) {
        var n = r[e];
        do n = n(!0);
        while (n !== null);
      }
      (jr = null), (vs = !1);
    } catch (i) {
      throw (jr !== null && (jr = jr.slice(e + 1)), Kg(Kf, Cn), i);
    } finally {
      (Ne = t), (Lu = !1);
    }
  }
  return null;
}
var Ni = [],
  Oi = 0,
  Hl = null,
  Wl = 0,
  Zt = [],
  er = 0,
  zn = null,
  Pr = 1,
  Fr = "";
function Bn(e, t) {
  (Ni[Oi++] = Wl), (Ni[Oi++] = Hl), (Hl = e), (Wl = t);
}
function gy(e, t, r) {
  (Zt[er++] = Pr), (Zt[er++] = Fr), (Zt[er++] = zn), (zn = e);
  var n = Pr;
  e = Fr;
  var i = 32 - dr(n) - 1;
  (n &= ~(1 << i)), (r += 1);
  var o = 32 - dr(t) + i;
  if (30 < o) {
    var l = i - (i % 5);
    (o = (n & ((1 << l) - 1)).toString(32)),
      (n >>= l),
      (i -= l),
      (Pr = (1 << (32 - dr(t) + i)) | (r << i) | n),
      (Fr = o + e);
  } else (Pr = (1 << o) | (r << i) | n), (Fr = e);
}
function Yf(e) {
  e.return !== null && (Bn(e, 1), gy(e, 1, 0));
}
function Qf(e) {
  for (; e === Hl; )
    (Hl = Ni[--Oi]), (Ni[Oi] = null), (Wl = Ni[--Oi]), (Ni[Oi] = null);
  for (; e === zn; )
    (zn = Zt[--er]),
      (Zt[er] = null),
      (Fr = Zt[--er]),
      (Zt[er] = null),
      (Pr = Zt[--er]),
      (Zt[er] = null);
}
var Wt = null,
  Ht = null,
  Ke = !1,
  fr = null;
function yy(e, t) {
  var r = tr(5, null, null, 0);
  (r.elementType = "DELETED"),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
}
function Sh(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (
        (t =
          t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Wt = e), (Ht = mn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Wt = e), (Ht = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r = zn !== null ? { id: Pr, overflow: Fr } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: r,
              retryLane: 1073741824,
            }),
            (r = tr(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (Wt = e),
            (Ht = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Hc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Wc(e) {
  if (Ke) {
    var t = Ht;
    if (t) {
      var r = t;
      if (!Sh(e, t)) {
        if (Hc(e)) throw Error(W(418));
        t = mn(r.nextSibling);
        var n = Wt;
        t && Sh(e, t)
          ? yy(n, r)
          : ((e.flags = (e.flags & -4097) | 2), (Ke = !1), (Wt = e));
      }
    } else {
      if (Hc(e)) throw Error(W(418));
      (e.flags = (e.flags & -4097) | 2), (Ke = !1), (Wt = e);
    }
  }
}
function Eh(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Wt = e;
}
function Va(e) {
  if (e !== Wt) return !1;
  if (!Ke) return Eh(e), (Ke = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !$c(e.type, e.memoizedProps))),
    t && (t = Ht))
  ) {
    if (Hc(e)) throw (xy(), Error(W(418)));
    for (; t; ) yy(e, t), (t = mn(t.nextSibling));
  }
  if ((Eh(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(W(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              Ht = mn(e.nextSibling);
              break e;
            }
            t--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ht = null;
    }
  } else Ht = Wt ? mn(e.stateNode.nextSibling) : null;
  return !0;
}
function xy() {
  for (var e = Ht; e; ) e = mn(e.nextSibling);
}
function zi() {
  (Ht = Wt = null), (Ke = !1);
}
function Xf(e) {
  fr === null ? (fr = [e]) : fr.push(e);
}
var lS = Vr.ReactCurrentBatchConfig;
function fo(e, t, r) {
  if (
    ((e = r.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(W(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(W(147, e));
      var i = n,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (l) {
            var s = i.refs;
            l === null ? delete s[o] : (s[o] = l);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(W(284));
    if (!r._owner) throw Error(W(290, e));
  }
  return e;
}
function Ga(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      W(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function kh(e) {
  var t = e._init;
  return t(e._payload);
}
function wy(e) {
  function t(S, _) {
    if (e) {
      var E = S.deletions;
      E === null ? ((S.deletions = [_]), (S.flags |= 16)) : E.push(_);
    }
  }
  function r(S, _) {
    if (!e) return null;
    for (; _ !== null; ) t(S, _), (_ = _.sibling);
    return null;
  }
  function n(S, _) {
    for (S = new Map(); _ !== null; )
      _.key !== null ? S.set(_.key, _) : S.set(_.index, _), (_ = _.sibling);
    return S;
  }
  function i(S, _) {
    return (S = xn(S, _)), (S.index = 0), (S.sibling = null), S;
  }
  function o(S, _, E) {
    return (
      (S.index = E),
      e
        ? ((E = S.alternate),
          E !== null
            ? ((E = E.index), E < _ ? ((S.flags |= 2), _) : E)
            : ((S.flags |= 2), _))
        : ((S.flags |= 1048576), _)
    );
  }
  function l(S) {
    return e && S.alternate === null && (S.flags |= 2), S;
  }
  function s(S, _, E, N) {
    return _ === null || _.tag !== 6
      ? ((_ = Pu(E, S.mode, N)), (_.return = S), _)
      : ((_ = i(_, E)), (_.return = S), _);
  }
  function c(S, _, E, N) {
    var L = E.type;
    return L === _i
      ? h(S, _, E.props.children, N, E.key)
      : _ !== null &&
        (_.elementType === L ||
          (typeof L == "object" &&
            L !== null &&
            L.$$typeof === rn &&
            kh(L) === _.type))
      ? ((N = i(_, E.props)), (N.ref = fo(S, _, E)), (N.return = S), N)
      : ((N = Tl(E.type, E.key, E.props, null, S.mode, N)),
        (N.ref = fo(S, _, E)),
        (N.return = S),
        N);
  }
  function f(S, _, E, N) {
    return _ === null ||
      _.tag !== 4 ||
      _.stateNode.containerInfo !== E.containerInfo ||
      _.stateNode.implementation !== E.implementation
      ? ((_ = Fu(E, S.mode, N)), (_.return = S), _)
      : ((_ = i(_, E.children || [])), (_.return = S), _);
  }
  function h(S, _, E, N, L) {
    return _ === null || _.tag !== 7
      ? ((_ = $n(E, S.mode, N, L)), (_.return = S), _)
      : ((_ = i(_, E)), (_.return = S), _);
  }
  function g(S, _, E) {
    if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
      return (_ = Pu("" + _, S.mode, E)), (_.return = S), _;
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case Aa:
          return (
            (E = Tl(_.type, _.key, _.props, null, S.mode, E)),
            (E.ref = fo(S, null, _)),
            (E.return = S),
            E
          );
        case wi:
          return (_ = Fu(_, S.mode, E)), (_.return = S), _;
        case rn:
          var N = _._init;
          return g(S, N(_._payload), E);
      }
      if (Co(_) || ao(_))
        return (_ = $n(_, S.mode, E, null)), (_.return = S), _;
      Ga(S, _);
    }
    return null;
  }
  function p(S, _, E, N) {
    var L = _ !== null ? _.key : null;
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return L !== null ? null : s(S, _, "" + E, N);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case Aa:
          return E.key === L ? c(S, _, E, N) : null;
        case wi:
          return E.key === L ? f(S, _, E, N) : null;
        case rn:
          return (L = E._init), p(S, _, L(E._payload), N);
      }
      if (Co(E) || ao(E)) return L !== null ? null : h(S, _, E, N, null);
      Ga(S, E);
    }
    return null;
  }
  function x(S, _, E, N, L) {
    if ((typeof N == "string" && N !== "") || typeof N == "number")
      return (S = S.get(E) || null), s(_, S, "" + N, L);
    if (typeof N == "object" && N !== null) {
      switch (N.$$typeof) {
        case Aa:
          return (S = S.get(N.key === null ? E : N.key) || null), c(_, S, N, L);
        case wi:
          return (S = S.get(N.key === null ? E : N.key) || null), f(_, S, N, L);
        case rn:
          var A = N._init;
          return x(S, _, E, A(N._payload), L);
      }
      if (Co(N) || ao(N)) return (S = S.get(E) || null), h(_, S, N, L, null);
      Ga(_, N);
    }
    return null;
  }
  function w(S, _, E, N) {
    for (
      var L = null, A = null, K = _, F = (_ = 0), H = null;
      K !== null && F < E.length;
      F++
    ) {
      K.index > F ? ((H = K), (K = null)) : (H = K.sibling);
      var P = p(S, K, E[F], N);
      if (P === null) {
        K === null && (K = H);
        break;
      }
      e && K && P.alternate === null && t(S, K),
        (_ = o(P, _, F)),
        A === null ? (L = P) : (A.sibling = P),
        (A = P),
        (K = H);
    }
    if (F === E.length) return r(S, K), Ke && Bn(S, F), L;
    if (K === null) {
      for (; F < E.length; F++)
        (K = g(S, E[F], N)),
          K !== null &&
            ((_ = o(K, _, F)), A === null ? (L = K) : (A.sibling = K), (A = K));
      return Ke && Bn(S, F), L;
    }
    for (K = n(S, K); F < E.length; F++)
      (H = x(K, S, F, E[F], N)),
        H !== null &&
          (e && H.alternate !== null && K.delete(H.key === null ? F : H.key),
          (_ = o(H, _, F)),
          A === null ? (L = H) : (A.sibling = H),
          (A = H));
    return (
      e &&
        K.forEach(function (M) {
          return t(S, M);
        }),
      Ke && Bn(S, F),
      L
    );
  }
  function k(S, _, E, N) {
    var L = ao(E);
    if (typeof L != "function") throw Error(W(150));
    if (((E = L.call(E)), E == null)) throw Error(W(151));
    for (
      var A = (L = null), K = _, F = (_ = 0), H = null, P = E.next();
      K !== null && !P.done;
      F++, P = E.next()
    ) {
      K.index > F ? ((H = K), (K = null)) : (H = K.sibling);
      var M = p(S, K, P.value, N);
      if (M === null) {
        K === null && (K = H);
        break;
      }
      e && K && M.alternate === null && t(S, K),
        (_ = o(M, _, F)),
        A === null ? (L = M) : (A.sibling = M),
        (A = M),
        (K = H);
    }
    if (P.done) return r(S, K), Ke && Bn(S, F), L;
    if (K === null) {
      for (; !P.done; F++, P = E.next())
        (P = g(S, P.value, N)),
          P !== null &&
            ((_ = o(P, _, F)), A === null ? (L = P) : (A.sibling = P), (A = P));
      return Ke && Bn(S, F), L;
    }
    for (K = n(S, K); !P.done; F++, P = E.next())
      (P = x(K, S, F, P.value, N)),
        P !== null &&
          (e && P.alternate !== null && K.delete(P.key === null ? F : P.key),
          (_ = o(P, _, F)),
          A === null ? (L = P) : (A.sibling = P),
          (A = P));
    return (
      e &&
        K.forEach(function (D) {
          return t(S, D);
        }),
      Ke && Bn(S, F),
      L
    );
  }
  function b(S, _, E, N) {
    if (
      (typeof E == "object" &&
        E !== null &&
        E.type === _i &&
        E.key === null &&
        (E = E.props.children),
      typeof E == "object" && E !== null)
    ) {
      switch (E.$$typeof) {
        case Aa:
          e: {
            for (var L = E.key, A = _; A !== null; ) {
              if (A.key === L) {
                if (((L = E.type), L === _i)) {
                  if (A.tag === 7) {
                    r(S, A.sibling),
                      (_ = i(A, E.props.children)),
                      (_.return = S),
                      (S = _);
                    break e;
                  }
                } else if (
                  A.elementType === L ||
                  (typeof L == "object" &&
                    L !== null &&
                    L.$$typeof === rn &&
                    kh(L) === A.type)
                ) {
                  r(S, A.sibling),
                    (_ = i(A, E.props)),
                    (_.ref = fo(S, A, E)),
                    (_.return = S),
                    (S = _);
                  break e;
                }
                r(S, A);
                break;
              } else t(S, A);
              A = A.sibling;
            }
            E.type === _i
              ? ((_ = $n(E.props.children, S.mode, N, E.key)),
                (_.return = S),
                (S = _))
              : ((N = Tl(E.type, E.key, E.props, null, S.mode, N)),
                (N.ref = fo(S, _, E)),
                (N.return = S),
                (S = N));
          }
          return l(S);
        case wi:
          e: {
            for (A = E.key; _ !== null; ) {
              if (_.key === A)
                if (
                  _.tag === 4 &&
                  _.stateNode.containerInfo === E.containerInfo &&
                  _.stateNode.implementation === E.implementation
                ) {
                  r(S, _.sibling),
                    (_ = i(_, E.children || [])),
                    (_.return = S),
                    (S = _);
                  break e;
                } else {
                  r(S, _);
                  break;
                }
              else t(S, _);
              _ = _.sibling;
            }
            (_ = Fu(E, S.mode, N)), (_.return = S), (S = _);
          }
          return l(S);
        case rn:
          return (A = E._init), b(S, _, A(E._payload), N);
      }
      if (Co(E)) return w(S, _, E, N);
      if (ao(E)) return k(S, _, E, N);
      Ga(S, E);
    }
    return (typeof E == "string" && E !== "") || typeof E == "number"
      ? ((E = "" + E),
        _ !== null && _.tag === 6
          ? (r(S, _.sibling), (_ = i(_, E)), (_.return = S), (S = _))
          : (r(S, _), (_ = Pu(E, S.mode, N)), (_.return = S), (S = _)),
        l(S))
      : r(S, _);
  }
  return b;
}
var Ui = wy(!0),
  _y = wy(!1),
  ql = kn(null),
  Vl = null,
  Ti = null,
  Zf = null;
function ed() {
  Zf = Ti = Vl = null;
}
function td(e) {
  var t = ql.current;
  Ae(ql), (e._currentValue = t);
}
function qc(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
        : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
      e === r)
    )
      break;
    e = e.return;
  }
}
function ji(e, t) {
  (Vl = e),
    (Zf = Ti = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Lt = !0), (e.firstContext = null));
}
function nr(e) {
  var t = e._currentValue;
  if (Zf !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ti === null)) {
      if (Vl === null) throw Error(W(308));
      (Ti = e), (Vl.dependencies = { lanes: 0, firstContext: e });
    } else Ti = Ti.next = e;
  return t;
}
var jn = null;
function rd(e) {
  jn === null ? (jn = [e]) : jn.push(e);
}
function Sy(e, t, r, n) {
  var i = t.interleaved;
  return (
    i === null ? ((r.next = r), rd(t)) : ((r.next = i.next), (i.next = r)),
    (t.interleaved = r),
    Wr(e, n)
  );
}
function Wr(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (r = e.alternate),
      r !== null && (r.childLanes |= t),
      (r = e),
      (e = e.return);
  return r.tag === 3 ? r.stateNode : null;
}
var nn = !1;
function nd(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ey(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Kr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function vn(e, t, r) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (((n = n.shared), _e & 2)) {
    var i = n.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (n.pending = t),
      Wr(e, r)
    );
  }
  return (
    (i = n.interleaved),
    i === null ? ((t.next = t), rd(n)) : ((t.next = i.next), (i.next = t)),
    (n.interleaved = t),
    Wr(e, r)
  );
}
function El(e, t, r) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
  ) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), zf(e, r);
  }
}
function Ch(e, t) {
  var r = e.updateQueue,
    n = e.alternate;
  if (n !== null && ((n = n.updateQueue), r === n)) {
    var i = null,
      o = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var l = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        };
        o === null ? (i = o = l) : (o = o.next = l), (r = r.next);
      } while (r !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (r = {
      baseState: n.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: n.shared,
      effects: n.effects,
    }),
      (e.updateQueue = r);
    return;
  }
  (e = r.lastBaseUpdate),
    e === null ? (r.firstBaseUpdate = t) : (e.next = t),
    (r.lastBaseUpdate = t);
}
function Gl(e, t, r, n) {
  var i = e.updateQueue;
  nn = !1;
  var o = i.firstBaseUpdate,
    l = i.lastBaseUpdate,
    s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var c = s,
      f = c.next;
    (c.next = null), l === null ? (o = f) : (l.next = f), (l = c);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (s = h.lastBaseUpdate),
      s !== l &&
        (s === null ? (h.firstBaseUpdate = f) : (s.next = f),
        (h.lastBaseUpdate = c)));
  }
  if (o !== null) {
    var g = i.baseState;
    (l = 0), (h = f = c = null), (s = o);
    do {
      var p = s.lane,
        x = s.eventTime;
      if ((n & p) === p) {
        h !== null &&
          (h = h.next =
            {
              eventTime: x,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var w = e,
            k = s;
          switch (((p = t), (x = r), k.tag)) {
            case 1:
              if (((w = k.payload), typeof w == "function")) {
                g = w.call(x, g, p);
                break e;
              }
              g = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = k.payload),
                (p = typeof w == "function" ? w.call(x, g, p) : w),
                p == null)
              )
                break e;
              g = qe({}, g, p);
              break e;
            case 2:
              nn = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (p = i.effects),
          p === null ? (i.effects = [s]) : p.push(s));
      } else
        (x = {
          eventTime: x,
          lane: p,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          h === null ? ((f = h = x), (c = g)) : (h = h.next = x),
          (l |= p);
      if (((s = s.next), s === null)) {
        if (((s = i.shared.pending), s === null)) break;
        (p = s),
          (s = p.next),
          (p.next = null),
          (i.lastBaseUpdate = p),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (c = g),
      (i.baseState = c),
      (i.firstBaseUpdate = f),
      (i.lastBaseUpdate = h),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (l |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Hn |= l), (e.lanes = l), (e.memoizedState = g);
  }
}
function bh(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        i = n.callback;
      if (i !== null) {
        if (((n.callback = null), (n = r), typeof i != "function"))
          throw Error(W(191, i));
        i.call(n);
      }
    }
}
var da = {},
  Tr = kn(da),
  Zo = kn(da),
  ea = kn(da);
function An(e) {
  if (e === da) throw Error(W(174));
  return e;
}
function id(e, t) {
  switch ((Re(ea, t), Re(Zo, e), Re(Tr, da), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : bc(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = bc(t, e));
  }
  Ae(Tr), Re(Tr, t);
}
function Hi() {
  Ae(Tr), Ae(Zo), Ae(ea);
}
function ky(e) {
  An(ea.current);
  var t = An(Tr.current),
    r = bc(t, e.type);
  t !== r && (Re(Zo, e), Re(Tr, r));
}
function od(e) {
  Zo.current === e && (Ae(Tr), Ae(Zo));
}
var He = kn(0);
function Jl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (
        r !== null &&
        ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Bu = [];
function ad() {
  for (var e = 0; e < Bu.length; e++)
    Bu[e]._workInProgressVersionPrimary = null;
  Bu.length = 0;
}
var kl = Vr.ReactCurrentDispatcher,
  Ru = Vr.ReactCurrentBatchConfig,
  Un = 0,
  We = null,
  tt = null,
  it = null,
  Yl = !1,
  Io = !1,
  ta = 0,
  sS = 0;
function mt() {
  throw Error(W(321));
}
function ld(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!hr(e[r], t[r])) return !1;
  return !0;
}
function sd(e, t, r, n, i, o) {
  if (
    ((Un = o),
    (We = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (kl.current = e === null || e.memoizedState === null ? dS : pS),
    (e = r(n, i)),
    Io)
  ) {
    o = 0;
    do {
      if (((Io = !1), (ta = 0), 25 <= o)) throw Error(W(301));
      (o += 1),
        (it = tt = null),
        (t.updateQueue = null),
        (kl.current = hS),
        (e = r(n, i));
    } while (Io);
  }
  if (
    ((kl.current = Ql),
    (t = tt !== null && tt.next !== null),
    (Un = 0),
    (it = tt = We = null),
    (Yl = !1),
    t)
  )
    throw Error(W(300));
  return e;
}
function ud() {
  var e = ta !== 0;
  return (ta = 0), e;
}
function br() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return it === null ? (We.memoizedState = it = e) : (it = it.next = e), it;
}
function ir() {
  if (tt === null) {
    var e = We.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = tt.next;
  var t = it === null ? We.memoizedState : it.next;
  if (t !== null) (it = t), (tt = e);
  else {
    if (e === null) throw Error(W(310));
    (tt = e),
      (e = {
        memoizedState: tt.memoizedState,
        baseState: tt.baseState,
        baseQueue: tt.baseQueue,
        queue: tt.queue,
        next: null,
      }),
      it === null ? (We.memoizedState = it = e) : (it = it.next = e);
  }
  return it;
}
function ra(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Mu(e) {
  var t = ir(),
    r = t.queue;
  if (r === null) throw Error(W(311));
  r.lastRenderedReducer = e;
  var n = tt,
    i = n.baseQueue,
    o = r.pending;
  if (o !== null) {
    if (i !== null) {
      var l = i.next;
      (i.next = o.next), (o.next = l);
    }
    (n.baseQueue = i = o), (r.pending = null);
  }
  if (i !== null) {
    (o = i.next), (n = n.baseState);
    var s = (l = null),
      c = null,
      f = o;
    do {
      var h = f.lane;
      if ((Un & h) === h)
        c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: f.action,
              hasEagerState: f.hasEagerState,
              eagerState: f.eagerState,
              next: null,
            }),
          (n = f.hasEagerState ? f.eagerState : e(n, f.action));
      else {
        var g = {
          lane: h,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null,
        };
        c === null ? ((s = c = g), (l = n)) : (c = c.next = g),
          (We.lanes |= h),
          (Hn |= h);
      }
      f = f.next;
    } while (f !== null && f !== o);
    c === null ? (l = n) : (c.next = s),
      hr(n, t.memoizedState) || (Lt = !0),
      (t.memoizedState = n),
      (t.baseState = l),
      (t.baseQueue = c),
      (r.lastRenderedState = n);
  }
  if (((e = r.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (We.lanes |= o), (Hn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function Iu(e) {
  var t = ir(),
    r = t.queue;
  if (r === null) throw Error(W(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch,
    i = r.pending,
    o = t.memoizedState;
  if (i !== null) {
    r.pending = null;
    var l = (i = i.next);
    do (o = e(o, l.action)), (l = l.next);
    while (l !== i);
    hr(o, t.memoizedState) || (Lt = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (r.lastRenderedState = o);
  }
  return [o, n];
}
function Cy() {}
function by(e, t) {
  var r = We,
    n = ir(),
    i = t(),
    o = !hr(n.memoizedState, i);
  if (
    (o && ((n.memoizedState = i), (Lt = !0)),
    (n = n.queue),
    cd(Ty.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || o || (it !== null && it.memoizedState.tag & 1))
  ) {
    if (
      ((r.flags |= 2048),
      na(9, Oy.bind(null, r, n, i, t), void 0, null),
      ot === null)
    )
      throw Error(W(349));
    Un & 30 || Ny(r, t, i);
  }
  return i;
}
function Ny(e, t, r) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = We.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (We.updateQueue = t),
        (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
}
function Oy(e, t, r, n) {
  (t.value = r), (t.getSnapshot = n), Dy(t) && Ly(e);
}
function Ty(e, t, r) {
  return r(function () {
    Dy(t) && Ly(e);
  });
}
function Dy(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !hr(e, r);
  } catch {
    return !0;
  }
}
function Ly(e) {
  var t = Wr(e, 1);
  t !== null && pr(t, e, 1, -1);
}
function Nh(e) {
  var t = br();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ra,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = fS.bind(null, We, e)),
    [t.memoizedState, e]
  );
}
function na(e, t, r, n) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
    (t = We.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (We.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((r = t.lastEffect),
        r === null
          ? (t.lastEffect = e.next = e)
          : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
    e
  );
}
function By() {
  return ir().memoizedState;
}
function Cl(e, t, r, n) {
  var i = br();
  (We.flags |= e),
    (i.memoizedState = na(1 | t, r, void 0, n === void 0 ? null : n));
}
function gs(e, t, r, n) {
  var i = ir();
  n = n === void 0 ? null : n;
  var o = void 0;
  if (tt !== null) {
    var l = tt.memoizedState;
    if (((o = l.destroy), n !== null && ld(n, l.deps))) {
      i.memoizedState = na(t, r, o, n);
      return;
    }
  }
  (We.flags |= e), (i.memoizedState = na(1 | t, r, o, n));
}
function Oh(e, t) {
  return Cl(8390656, 8, e, t);
}
function cd(e, t) {
  return gs(2048, 8, e, t);
}
function Ry(e, t) {
  return gs(4, 2, e, t);
}
function My(e, t) {
  return gs(4, 4, e, t);
}
function Iy(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function jy(e, t, r) {
  return (
    (r = r != null ? r.concat([e]) : null), gs(4, 4, Iy.bind(null, t, e), r)
  );
}
function fd() {}
function Ay(e, t) {
  var r = ir();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && ld(t, n[1])
    ? n[0]
    : ((r.memoizedState = [e, t]), e);
}
function Py(e, t) {
  var r = ir();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && ld(t, n[1])
    ? n[0]
    : ((e = e()), (r.memoizedState = [e, t]), e);
}
function Fy(e, t, r) {
  return Un & 21
    ? (hr(r, t) || ((r = Hg()), (We.lanes |= r), (Hn |= r), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Lt = !0)), (e.memoizedState = r));
}
function uS(e, t) {
  var r = Ne;
  (Ne = r !== 0 && 4 > r ? r : 4), e(!0);
  var n = Ru.transition;
  Ru.transition = {};
  try {
    e(!1), t();
  } finally {
    (Ne = r), (Ru.transition = n);
  }
}
function $y() {
  return ir().memoizedState;
}
function cS(e, t, r) {
  var n = yn(e);
  if (
    ((r = {
      lane: n,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ky(e))
  )
    zy(t, r);
  else if (((r = Sy(e, t, r, n)), r !== null)) {
    var i = Et();
    pr(r, e, n, i), Uy(r, t, n);
  }
}
function fS(e, t, r) {
  var n = yn(e),
    i = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (Ky(e)) zy(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var l = t.lastRenderedState,
          s = o(l, r);
        if (((i.hasEagerState = !0), (i.eagerState = s), hr(s, l))) {
          var c = t.interleaved;
          c === null
            ? ((i.next = i), rd(t))
            : ((i.next = c.next), (c.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (r = Sy(e, t, i, n)),
      r !== null && ((i = Et()), pr(r, e, n, i), Uy(r, t, n));
  }
}
function Ky(e) {
  var t = e.alternate;
  return e === We || (t !== null && t === We);
}
function zy(e, t) {
  Io = Yl = !0;
  var r = e.pending;
  r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
    (e.pending = t);
}
function Uy(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), zf(e, r);
  }
}
var Ql = {
    readContext: nr,
    useCallback: mt,
    useContext: mt,
    useEffect: mt,
    useImperativeHandle: mt,
    useInsertionEffect: mt,
    useLayoutEffect: mt,
    useMemo: mt,
    useReducer: mt,
    useRef: mt,
    useState: mt,
    useDebugValue: mt,
    useDeferredValue: mt,
    useTransition: mt,
    useMutableSource: mt,
    useSyncExternalStore: mt,
    useId: mt,
    unstable_isNewReconciler: !1,
  },
  dS = {
    readContext: nr,
    useCallback: function (e, t) {
      return (br().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: nr,
    useEffect: Oh,
    useImperativeHandle: function (e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null),
        Cl(4194308, 4, Iy.bind(null, t, e), r)
      );
    },
    useLayoutEffect: function (e, t) {
      return Cl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Cl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = br();
      return (
        (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, r) {
      var n = br();
      return (
        (t = r !== void 0 ? r(t) : t),
        (n.memoizedState = n.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (n.queue = e),
        (e = e.dispatch = cS.bind(null, We, e)),
        [n.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = br();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Nh,
    useDebugValue: fd,
    useDeferredValue: function (e) {
      return (br().memoizedState = e);
    },
    useTransition: function () {
      var e = Nh(!1),
        t = e[0];
      return (e = uS.bind(null, e[1])), (br().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var n = We,
        i = br();
      if (Ke) {
        if (r === void 0) throw Error(W(407));
        r = r();
      } else {
        if (((r = t()), ot === null)) throw Error(W(349));
        Un & 30 || Ny(n, t, r);
      }
      i.memoizedState = r;
      var o = { value: r, getSnapshot: t };
      return (
        (i.queue = o),
        Oh(Ty.bind(null, n, o, e), [e]),
        (n.flags |= 2048),
        na(9, Oy.bind(null, n, o, r, t), void 0, null),
        r
      );
    },
    useId: function () {
      var e = br(),
        t = ot.identifierPrefix;
      if (Ke) {
        var r = Fr,
          n = Pr;
        (r = (n & ~(1 << (32 - dr(n) - 1))).toString(32) + r),
          (t = ":" + t + "R" + r),
          (r = ta++),
          0 < r && (t += "H" + r.toString(32)),
          (t += ":");
      } else (r = sS++), (t = ":" + t + "r" + r.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  pS = {
    readContext: nr,
    useCallback: Ay,
    useContext: nr,
    useEffect: cd,
    useImperativeHandle: jy,
    useInsertionEffect: Ry,
    useLayoutEffect: My,
    useMemo: Py,
    useReducer: Mu,
    useRef: By,
    useState: function () {
      return Mu(ra);
    },
    useDebugValue: fd,
    useDeferredValue: function (e) {
      var t = ir();
      return Fy(t, tt.memoizedState, e);
    },
    useTransition: function () {
      var e = Mu(ra)[0],
        t = ir().memoizedState;
      return [e, t];
    },
    useMutableSource: Cy,
    useSyncExternalStore: by,
    useId: $y,
    unstable_isNewReconciler: !1,
  },
  hS = {
    readContext: nr,
    useCallback: Ay,
    useContext: nr,
    useEffect: cd,
    useImperativeHandle: jy,
    useInsertionEffect: Ry,
    useLayoutEffect: My,
    useMemo: Py,
    useReducer: Iu,
    useRef: By,
    useState: function () {
      return Iu(ra);
    },
    useDebugValue: fd,
    useDeferredValue: function (e) {
      var t = ir();
      return tt === null ? (t.memoizedState = e) : Fy(t, tt.memoizedState, e);
    },
    useTransition: function () {
      var e = Iu(ra)[0],
        t = ir().memoizedState;
      return [e, t];
    },
    useMutableSource: Cy,
    useSyncExternalStore: by,
    useId: $y,
    unstable_isNewReconciler: !1,
  };
function ur(e, t) {
  if (e && e.defaultProps) {
    (t = qe({}, t)), (e = e.defaultProps);
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
function Vc(e, t, r, n) {
  (t = e.memoizedState),
    (r = r(n, t)),
    (r = r == null ? t : qe({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r);
}
var ys = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Vn(e) === e : !1;
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals;
    var n = Et(),
      i = yn(e),
      o = Kr(n, i);
    (o.payload = t),
      r != null && (o.callback = r),
      (t = vn(e, o, i)),
      t !== null && (pr(t, e, i, n), El(t, e, i));
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals;
    var n = Et(),
      i = yn(e),
      o = Kr(n, i);
    (o.tag = 1),
      (o.payload = t),
      r != null && (o.callback = r),
      (t = vn(e, o, i)),
      t !== null && (pr(t, e, i, n), El(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var r = Et(),
      n = yn(e),
      i = Kr(r, n);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = vn(e, i, n)),
      t !== null && (pr(t, e, n, r), El(t, e, n));
  },
};
function Th(e, t, r, n, i, o, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(n, o, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Jo(r, n) || !Jo(i, o)
      : !0
  );
}
function Hy(e, t, r) {
  var n = !1,
    i = Sn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = nr(o))
      : ((i = Rt(t) ? Kn : yt.current),
        (n = t.contextTypes),
        (o = (n = n != null) ? Ki(e, i) : Sn)),
    (t = new t(r, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ys),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Dh(e, t, r, n) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && ys.enqueueReplaceState(t, t.state, null);
}
function Gc(e, t, r, n) {
  var i = e.stateNode;
  (i.props = r), (i.state = e.memoizedState), (i.refs = {}), nd(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = nr(o))
    : ((o = Rt(t) ? Kn : yt.current), (i.context = Ki(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Vc(e, t, o, r), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && ys.enqueueReplaceState(i, i.state, null),
      Gl(e, r, i, n),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Wi(e, t) {
  try {
    var r = "",
      n = t;
    do (r += z1(n)), (n = n.return);
    while (n);
    var i = r;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function ju(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function Jc(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var mS = typeof WeakMap == "function" ? WeakMap : Map;
function Wy(e, t, r) {
  (r = Kr(-1, r)), (r.tag = 3), (r.payload = { element: null });
  var n = t.value;
  return (
    (r.callback = function () {
      Zl || ((Zl = !0), (af = n)), Jc(e, t);
    }),
    r
  );
}
function qy(e, t, r) {
  (r = Kr(-1, r)), (r.tag = 3);
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var i = t.value;
    (r.payload = function () {
      return n(i);
    }),
      (r.callback = function () {
        Jc(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (r.callback = function () {
        Jc(e, t),
          typeof n != "function" &&
            (gn === null ? (gn = new Set([this])) : gn.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    r
  );
}
function Lh(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new mS();
    var i = new Set();
    n.set(t, i);
  } else (i = n.get(t)), i === void 0 && ((i = new Set()), n.set(t, i));
  i.has(r) || (i.add(r), (e = TS.bind(null, e, t, r)), t.then(e, e));
}
function Bh(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Rh(e, t, r, n, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
            (r.alternate === null
              ? (r.tag = 17)
              : ((t = Kr(-1, 1)), (t.tag = 2), vn(r, t, 1))),
          (r.lanes |= 1)),
      e);
}
var vS = Vr.ReactCurrentOwner,
  Lt = !1;
function St(e, t, r, n) {
  t.child = e === null ? _y(t, null, r, n) : Ui(t, e.child, r, n);
}
function Mh(e, t, r, n, i) {
  r = r.render;
  var o = t.ref;
  return (
    ji(t, i),
    (n = sd(e, t, r, n, o, i)),
    (r = ud()),
    e !== null && !Lt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        qr(e, t, i))
      : (Ke && r && Yf(t), (t.flags |= 1), St(e, t, n, i), t.child)
  );
}
function Ih(e, t, r, n, i) {
  if (e === null) {
    var o = r.type;
    return typeof o == "function" &&
      !xd(o) &&
      o.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Vy(e, t, o, n, i))
      : ((e = Tl(r.type, null, n, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var l = o.memoizedProps;
    if (
      ((r = r.compare), (r = r !== null ? r : Jo), r(l, n) && e.ref === t.ref)
    )
      return qr(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = xn(o, n)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Vy(e, t, r, n, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Jo(o, n) && e.ref === t.ref)
      if (((Lt = !1), (t.pendingProps = n = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Lt = !0);
      else return (t.lanes = e.lanes), qr(e, t, i);
  }
  return Yc(e, t, r, n, i);
}
function Gy(e, t, r) {
  var n = t.pendingProps,
    i = n.children,
    o = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Re(Li, Ut),
        (Ut |= r);
    else {
      if (!(r & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | r : r),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Re(Li, Ut),
          (Ut |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = o !== null ? o.baseLanes : r),
        Re(Li, Ut),
        (Ut |= n);
    }
  else
    o !== null ? ((n = o.baseLanes | r), (t.memoizedState = null)) : (n = r),
      Re(Li, Ut),
      (Ut |= n);
  return St(e, t, i, r), t.child;
}
function Jy(e, t) {
  var r = t.ref;
  ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Yc(e, t, r, n, i) {
  var o = Rt(r) ? Kn : yt.current;
  return (
    (o = Ki(t, o)),
    ji(t, i),
    (r = sd(e, t, r, n, o, i)),
    (n = ud()),
    e !== null && !Lt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        qr(e, t, i))
      : (Ke && n && Yf(t), (t.flags |= 1), St(e, t, r, i), t.child)
  );
}
function jh(e, t, r, n, i) {
  if (Rt(r)) {
    var o = !0;
    Ul(t);
  } else o = !1;
  if ((ji(t, i), t.stateNode === null))
    bl(e, t), Hy(t, r, n), Gc(t, r, n, i), (n = !0);
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var c = l.context,
      f = r.contextType;
    typeof f == "object" && f !== null
      ? (f = nr(f))
      : ((f = Rt(r) ? Kn : yt.current), (f = Ki(t, f)));
    var h = r.getDerivedStateFromProps,
      g =
        typeof h == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    g ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== n || c !== f) && Dh(t, l, n, f)),
      (nn = !1);
    var p = t.memoizedState;
    (l.state = p),
      Gl(t, n, l, i),
      (c = t.memoizedState),
      s !== n || p !== c || Bt.current || nn
        ? (typeof h == "function" && (Vc(t, r, h, n), (c = t.memoizedState)),
          (s = nn || Th(t, r, s, n, p, c, f))
            ? (g ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = n),
              (t.memoizedState = c)),
          (l.props = n),
          (l.state = c),
          (l.context = f),
          (n = s))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (n = !1));
  } else {
    (l = t.stateNode),
      Ey(e, t),
      (s = t.memoizedProps),
      (f = t.type === t.elementType ? s : ur(t.type, s)),
      (l.props = f),
      (g = t.pendingProps),
      (p = l.context),
      (c = r.contextType),
      typeof c == "object" && c !== null
        ? (c = nr(c))
        : ((c = Rt(r) ? Kn : yt.current), (c = Ki(t, c)));
    var x = r.getDerivedStateFromProps;
    (h =
      typeof x == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== g || p !== c) && Dh(t, l, n, c)),
      (nn = !1),
      (p = t.memoizedState),
      (l.state = p),
      Gl(t, n, l, i);
    var w = t.memoizedState;
    s !== g || p !== w || Bt.current || nn
      ? (typeof x == "function" && (Vc(t, r, x, n), (w = t.memoizedState)),
        (f = nn || Th(t, r, f, n, p, w, c) || !1)
          ? (h ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(n, w, c),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(n, w, c)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (s === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = n),
            (t.memoizedState = w)),
        (l.props = n),
        (l.state = w),
        (l.context = c),
        (n = f))
      : (typeof l.componentDidUpdate != "function" ||
          (s === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (n = !1));
  }
  return Qc(e, t, r, n, o, i);
}
function Qc(e, t, r, n, i, o) {
  Jy(e, t);
  var l = (t.flags & 128) !== 0;
  if (!n && !l) return i && _h(t, r, !1), qr(e, t, o);
  (n = t.stateNode), (vS.current = t);
  var s =
    l && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = Ui(t, e.child, null, o)), (t.child = Ui(t, null, s, o)))
      : St(e, t, s, o),
    (t.memoizedState = n.state),
    i && _h(t, r, !0),
    t.child
  );
}
function Yy(e) {
  var t = e.stateNode;
  t.pendingContext
    ? wh(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && wh(e, t.context, !1),
    id(e, t.containerInfo);
}
function Ah(e, t, r, n, i) {
  return zi(), Xf(i), (t.flags |= 256), St(e, t, r, n), t.child;
}
var Xc = { dehydrated: null, treeContext: null, retryLane: 0 };
function Zc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Qy(e, t, r) {
  var n = t.pendingProps,
    i = He.current,
    o = !1,
    l = (t.flags & 128) !== 0,
    s;
  if (
    ((s = l) ||
      (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    Re(He, i & 1),
    e === null)
  )
    return (
      Wc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = n.children),
          (e = n.fallback),
          o
            ? ((n = t.mode),
              (o = t.child),
              (l = { mode: "hidden", children: l }),
              !(n & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = l))
                : (o = _s(l, n, 0, null)),
              (e = $n(e, n, r, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Zc(r)),
              (t.memoizedState = Xc),
              e)
            : dd(t, l))
    );
  if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
    return gS(e, t, l, n, s, i, r);
  if (o) {
    (o = n.fallback), (l = t.mode), (i = e.child), (s = i.sibling);
    var c = { mode: "hidden", children: n.children };
    return (
      !(l & 1) && t.child !== i
        ? ((n = t.child),
          (n.childLanes = 0),
          (n.pendingProps = c),
          (t.deletions = null))
        : ((n = xn(i, c)), (n.subtreeFlags = i.subtreeFlags & 14680064)),
      s !== null ? (o = xn(s, o)) : ((o = $n(o, l, r, null)), (o.flags |= 2)),
      (o.return = t),
      (n.return = t),
      (n.sibling = o),
      (t.child = n),
      (n = o),
      (o = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? Zc(r)
          : {
              baseLanes: l.baseLanes | r,
              cachePool: null,
              transitions: l.transitions,
            }),
      (o.memoizedState = l),
      (o.childLanes = e.childLanes & ~r),
      (t.memoizedState = Xc),
      n
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (n = xn(o, { mode: "visible", children: n.children })),
    !(t.mode & 1) && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((r = t.deletions),
      r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
    (t.child = n),
    (t.memoizedState = null),
    n
  );
}
function dd(e, t) {
  return (
    (t = _s({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ja(e, t, r, n) {
  return (
    n !== null && Xf(n),
    Ui(t, e.child, null, r),
    (e = dd(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function gS(e, t, r, n, i, o, l) {
  if (r)
    return t.flags & 256
      ? ((t.flags &= -257), (n = ju(Error(W(422)))), Ja(e, t, l, n))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = n.fallback),
        (i = t.mode),
        (n = _s({ mode: "visible", children: n.children }, i, 0, null)),
        (o = $n(o, i, l, null)),
        (o.flags |= 2),
        (n.return = t),
        (o.return = t),
        (n.sibling = o),
        (t.child = n),
        t.mode & 1 && Ui(t, e.child, null, l),
        (t.child.memoizedState = Zc(l)),
        (t.memoizedState = Xc),
        o);
  if (!(t.mode & 1)) return Ja(e, t, l, null);
  if (i.data === "$!") {
    if (((n = i.nextSibling && i.nextSibling.dataset), n)) var s = n.dgst;
    return (n = s), (o = Error(W(419))), (n = ju(o, n, void 0)), Ja(e, t, l, n);
  }
  if (((s = (l & e.childLanes) !== 0), Lt || s)) {
    if (((n = ot), n !== null)) {
      switch (l & -l) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (n.suspendedLanes | l) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), Wr(e, i), pr(n, e, i, -1));
    }
    return yd(), (n = ju(Error(W(421)))), Ja(e, t, l, n);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = DS.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ht = mn(i.nextSibling)),
      (Wt = t),
      (Ke = !0),
      (fr = null),
      e !== null &&
        ((Zt[er++] = Pr),
        (Zt[er++] = Fr),
        (Zt[er++] = zn),
        (Pr = e.id),
        (Fr = e.overflow),
        (zn = t)),
      (t = dd(t, n.children)),
      (t.flags |= 4096),
      t);
}
function Ph(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), qc(e.return, t, r);
}
function Au(e, t, r, n, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = n),
      (o.tail = r),
      (o.tailMode = i));
}
function Xy(e, t, r) {
  var n = t.pendingProps,
    i = n.revealOrder,
    o = n.tail;
  if ((St(e, t, n.children, r), (n = He.current), n & 2))
    (n = (n & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ph(e, r, t);
        else if (e.tag === 19) Ph(e, r, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    n &= 1;
  }
  if ((Re(He, n), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (r = t.child, i = null; r !== null; )
          (e = r.alternate),
            e !== null && Jl(e) === null && (i = r),
            (r = r.sibling);
        (r = i),
          r === null
            ? ((i = t.child), (t.child = null))
            : ((i = r.sibling), (r.sibling = null)),
          Au(t, !1, i, r, o);
        break;
      case "backwards":
        for (r = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Jl(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = r), (r = i), (i = e);
        }
        Au(t, !0, r, null, o);
        break;
      case "together":
        Au(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function bl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function qr(e, t, r) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Hn |= t.lanes),
    !(r & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(W(153));
  if (t.child !== null) {
    for (
      e = t.child, r = xn(e, e.pendingProps), t.child = r, r.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (r = r.sibling = xn(e, e.pendingProps)), (r.return = t);
    r.sibling = null;
  }
  return t.child;
}
function yS(e, t, r) {
  switch (t.tag) {
    case 3:
      Yy(t), zi();
      break;
    case 5:
      ky(t);
      break;
    case 1:
      Rt(t.type) && Ul(t);
      break;
    case 4:
      id(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context,
        i = t.memoizedProps.value;
      Re(ql, n._currentValue), (n._currentValue = i);
      break;
    case 13:
      if (((n = t.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (Re(He, He.current & 1), (t.flags |= 128), null)
          : r & t.child.childLanes
          ? Qy(e, t, r)
          : (Re(He, He.current & 1),
            (e = qr(e, t, r)),
            e !== null ? e.sibling : null);
      Re(He, He.current & 1);
      break;
    case 19:
      if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
        if (n) return Xy(e, t, r);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        Re(He, He.current),
        n)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Gy(e, t, r);
  }
  return qr(e, t, r);
}
var Zy, ef, e0, t0;
Zy = function (e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
};
ef = function () {};
e0 = function (e, t, r, n) {
  var i = e.memoizedProps;
  if (i !== n) {
    (e = t.stateNode), An(Tr.current);
    var o = null;
    switch (r) {
      case "input":
        (i = Sc(e, i)), (n = Sc(e, n)), (o = []);
        break;
      case "select":
        (i = qe({}, i, { value: void 0 })),
          (n = qe({}, n, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Cc(e, i)), (n = Cc(e, n)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof n.onClick == "function" &&
          (e.onclick = Kl);
    }
    Nc(r, n);
    var l;
    r = null;
    for (f in i)
      if (!n.hasOwnProperty(f) && i.hasOwnProperty(f) && i[f] != null)
        if (f === "style") {
          var s = i[f];
          for (l in s) s.hasOwnProperty(l) && (r || (r = {}), (r[l] = ""));
        } else
          f !== "dangerouslySetInnerHTML" &&
            f !== "children" &&
            f !== "suppressContentEditableWarning" &&
            f !== "suppressHydrationWarning" &&
            f !== "autoFocus" &&
            (zo.hasOwnProperty(f)
              ? o || (o = [])
              : (o = o || []).push(f, null));
    for (f in n) {
      var c = n[f];
      if (
        ((s = i != null ? i[f] : void 0),
        n.hasOwnProperty(f) && c !== s && (c != null || s != null))
      )
        if (f === "style")
          if (s) {
            for (l in s)
              !s.hasOwnProperty(l) ||
                (c && c.hasOwnProperty(l)) ||
                (r || (r = {}), (r[l] = ""));
            for (l in c)
              c.hasOwnProperty(l) &&
                s[l] !== c[l] &&
                (r || (r = {}), (r[l] = c[l]));
          } else r || (o || (o = []), o.push(f, r)), (r = c);
        else
          f === "dangerouslySetInnerHTML"
            ? ((c = c ? c.__html : void 0),
              (s = s ? s.__html : void 0),
              c != null && s !== c && (o = o || []).push(f, c))
            : f === "children"
            ? (typeof c != "string" && typeof c != "number") ||
              (o = o || []).push(f, "" + c)
            : f !== "suppressContentEditableWarning" &&
              f !== "suppressHydrationWarning" &&
              (zo.hasOwnProperty(f)
                ? (c != null && f === "onScroll" && je("scroll", e),
                  o || s === c || (o = []))
                : (o = o || []).push(f, c));
    }
    r && (o = o || []).push("style", r);
    var f = o;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
t0 = function (e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function po(e, t) {
  if (!Ke)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null ? (e.tail = null) : (r.sibling = null);
        break;
      case "collapsed":
        r = e.tail;
        for (var n = null; r !== null; )
          r.alternate !== null && (n = r), (r = r.sibling);
        n === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (n.sibling = null);
    }
}
function vt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    r = 0,
    n = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (r |= i.lanes | i.childLanes),
        (n |= i.subtreeFlags & 14680064),
        (n |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (r |= i.lanes | i.childLanes),
        (n |= i.subtreeFlags),
        (n |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= n), (e.childLanes = r), t;
}
function xS(e, t, r) {
  var n = t.pendingProps;
  switch ((Qf(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return vt(t), null;
    case 1:
      return Rt(t.type) && zl(), vt(t), null;
    case 3:
      return (
        (n = t.stateNode),
        Hi(),
        Ae(Bt),
        Ae(yt),
        ad(),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (Va(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), fr !== null && (uf(fr), (fr = null)))),
        ef(e, t),
        vt(t),
        null
      );
    case 5:
      od(t);
      var i = An(ea.current);
      if (((r = t.type), e !== null && t.stateNode != null))
        e0(e, t, r, n, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(W(166));
          return vt(t), null;
        }
        if (((e = An(Tr.current)), Va(t))) {
          (n = t.stateNode), (r = t.type);
          var o = t.memoizedProps;
          switch (((n[Nr] = t), (n[Xo] = o), (e = (t.mode & 1) !== 0), r)) {
            case "dialog":
              je("cancel", n), je("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              je("load", n);
              break;
            case "video":
            case "audio":
              for (i = 0; i < No.length; i++) je(No[i], n);
              break;
            case "source":
              je("error", n);
              break;
            case "img":
            case "image":
            case "link":
              je("error", n), je("load", n);
              break;
            case "details":
              je("toggle", n);
              break;
            case "input":
              Vp(n, o), je("invalid", n);
              break;
            case "select":
              (n._wrapperState = { wasMultiple: !!o.multiple }),
                je("invalid", n);
              break;
            case "textarea":
              Jp(n, o), je("invalid", n);
          }
          Nc(r, o), (i = null);
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var s = o[l];
              l === "children"
                ? typeof s == "string"
                  ? n.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      qa(n.textContent, s, e),
                    (i = ["children", s]))
                  : typeof s == "number" &&
                    n.textContent !== "" + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      qa(n.textContent, s, e),
                    (i = ["children", "" + s]))
                : zo.hasOwnProperty(l) &&
                  s != null &&
                  l === "onScroll" &&
                  je("scroll", n);
            }
          switch (r) {
            case "input":
              Pa(n), Gp(n, o, !0);
              break;
            case "textarea":
              Pa(n), Yp(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (n.onclick = Kl);
          }
          (n = i), (t.updateQueue = n), n !== null && (t.flags |= 4);
        } else {
          (l = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Tg(r)),
            e === "http://www.w3.org/1999/xhtml"
              ? r === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof n.is == "string"
                ? (e = l.createElement(r, { is: n.is }))
                : ((e = l.createElement(r)),
                  r === "select" &&
                    ((l = e),
                    n.multiple
                      ? (l.multiple = !0)
                      : n.size && (l.size = n.size)))
              : (e = l.createElementNS(e, r)),
            (e[Nr] = t),
            (e[Xo] = n),
            Zy(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = Oc(r, n)), r)) {
              case "dialog":
                je("cancel", e), je("close", e), (i = n);
                break;
              case "iframe":
              case "object":
              case "embed":
                je("load", e), (i = n);
                break;
              case "video":
              case "audio":
                for (i = 0; i < No.length; i++) je(No[i], e);
                i = n;
                break;
              case "source":
                je("error", e), (i = n);
                break;
              case "img":
              case "image":
              case "link":
                je("error", e), je("load", e), (i = n);
                break;
              case "details":
                je("toggle", e), (i = n);
                break;
              case "input":
                Vp(e, n), (i = Sc(e, n)), je("invalid", e);
                break;
              case "option":
                i = n;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!n.multiple }),
                  (i = qe({}, n, { value: void 0 })),
                  je("invalid", e);
                break;
              case "textarea":
                Jp(e, n), (i = Cc(e, n)), je("invalid", e);
                break;
              default:
                i = n;
            }
            Nc(r, i), (s = i);
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var c = s[o];
                o === "style"
                  ? Bg(e, c)
                  : o === "dangerouslySetInnerHTML"
                  ? ((c = c ? c.__html : void 0), c != null && Dg(e, c))
                  : o === "children"
                  ? typeof c == "string"
                    ? (r !== "textarea" || c !== "") && Uo(e, c)
                    : typeof c == "number" && Uo(e, "" + c)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (zo.hasOwnProperty(o)
                      ? c != null && o === "onScroll" && je("scroll", e)
                      : c != null && jf(e, o, c, l));
              }
            switch (r) {
              case "input":
                Pa(e), Gp(e, n, !1);
                break;
              case "textarea":
                Pa(e), Yp(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + _n(n.value));
                break;
              case "select":
                (e.multiple = !!n.multiple),
                  (o = n.value),
                  o != null
                    ? Bi(e, !!n.multiple, o, !1)
                    : n.defaultValue != null &&
                      Bi(e, !!n.multiple, n.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Kl);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return vt(t), null;
    case 6:
      if (e && t.stateNode != null) t0(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null) throw Error(W(166));
        if (((r = An(ea.current)), An(Tr.current), Va(t))) {
          if (
            ((n = t.stateNode),
            (r = t.memoizedProps),
            (n[Nr] = t),
            (o = n.nodeValue !== r) && ((e = Wt), e !== null))
          )
            switch (e.tag) {
              case 3:
                qa(n.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  qa(n.nodeValue, r, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
            (n[Nr] = t),
            (t.stateNode = n);
      }
      return vt(t), null;
    case 13:
      if (
        (Ae(He),
        (n = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Ke && Ht !== null && t.mode & 1 && !(t.flags & 128))
          xy(), zi(), (t.flags |= 98560), (o = !1);
        else if (((o = Va(t)), n !== null && n.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(W(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(W(317));
            o[Nr] = t;
          } else
            zi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          vt(t), (o = !1);
        } else fr !== null && (uf(fr), (fr = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = r), t)
        : ((n = n !== null),
          n !== (e !== null && e.memoizedState !== null) &&
            n &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || He.current & 1 ? rt === 0 && (rt = 3) : yd())),
          t.updateQueue !== null && (t.flags |= 4),
          vt(t),
          null);
    case 4:
      return (
        Hi(), ef(e, t), e === null && Yo(t.stateNode.containerInfo), vt(t), null
      );
    case 10:
      return td(t.type._context), vt(t), null;
    case 17:
      return Rt(t.type) && zl(), vt(t), null;
    case 19:
      if ((Ae(He), (o = t.memoizedState), o === null)) return vt(t), null;
      if (((n = (t.flags & 128) !== 0), (l = o.rendering), l === null))
        if (n) po(o, !1);
        else {
          if (rt !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = Jl(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    po(o, !1),
                    n = l.updateQueue,
                    n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    n = r,
                    r = t.child;
                  r !== null;

                )
                  (o = r),
                    (e = n),
                    (o.flags &= 14680066),
                    (l = o.alternate),
                    l === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = l.childLanes),
                        (o.lanes = l.lanes),
                        (o.child = l.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = l.memoizedProps),
                        (o.memoizedState = l.memoizedState),
                        (o.updateQueue = l.updateQueue),
                        (o.type = l.type),
                        (e = l.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (r = r.sibling);
                return Re(He, (He.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Ye() > qi &&
            ((t.flags |= 128), (n = !0), po(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!n)
          if (((e = Jl(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (n = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              po(o, !0),
              o.tail === null && o.tailMode === "hidden" && !l.alternate && !Ke)
            )
              return vt(t), null;
          } else
            2 * Ye() - o.renderingStartTime > qi &&
              r !== 1073741824 &&
              ((t.flags |= 128), (n = !0), po(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((r = o.last),
            r !== null ? (r.sibling = l) : (t.child = l),
            (o.last = l));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Ye()),
          (t.sibling = null),
          (r = He.current),
          Re(He, n ? (r & 1) | 2 : r & 1),
          t)
        : (vt(t), null);
    case 22:
    case 23:
      return (
        gd(),
        (n = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
        n && t.mode & 1
          ? Ut & 1073741824 && (vt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : vt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(W(156, t.tag));
}
function wS(e, t) {
  switch ((Qf(t), t.tag)) {
    case 1:
      return (
        Rt(t.type) && zl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Hi(),
        Ae(Bt),
        Ae(yt),
        ad(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return od(t), null;
    case 13:
      if (
        (Ae(He), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(W(340));
        zi();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Ae(He), null;
    case 4:
      return Hi(), null;
    case 10:
      return td(t.type._context), null;
    case 22:
    case 23:
      return gd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ya = !1,
  gt = !1,
  _S = typeof WeakSet == "function" ? WeakSet : Set,
  Q = null;
function Di(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (n) {
        Ge(e, t, n);
      }
    else r.current = null;
}
function tf(e, t, r) {
  try {
    r();
  } catch (n) {
    Ge(e, t, n);
  }
}
var Fh = !1;
function SS(e, t) {
  if (((Pc = Pl), (e = ay()), Jf(e))) {
    if ("selectionStart" in e)
      var r = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        r = ((r = e.ownerDocument) && r.defaultView) || window;
        var n = r.getSelection && r.getSelection();
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode;
          var i = n.anchorOffset,
            o = n.focusNode;
          n = n.focusOffset;
          try {
            r.nodeType, o.nodeType;
          } catch {
            r = null;
            break e;
          }
          var l = 0,
            s = -1,
            c = -1,
            f = 0,
            h = 0,
            g = e,
            p = null;
          t: for (;;) {
            for (
              var x;
              g !== r || (i !== 0 && g.nodeType !== 3) || (s = l + i),
                g !== o || (n !== 0 && g.nodeType !== 3) || (c = l + n),
                g.nodeType === 3 && (l += g.nodeValue.length),
                (x = g.firstChild) !== null;

            )
              (p = g), (g = x);
            for (;;) {
              if (g === e) break t;
              if (
                (p === r && ++f === i && (s = l),
                p === o && ++h === n && (c = l),
                (x = g.nextSibling) !== null)
              )
                break;
              (g = p), (p = g.parentNode);
            }
            g = x;
          }
          r = s === -1 || c === -1 ? null : { start: s, end: c };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (Fc = { focusedElem: e, selectionRange: r }, Pl = !1, Q = t; Q !== null; )
    if (((t = Q), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (Q = e);
    else
      for (; Q !== null; ) {
        t = Q;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var k = w.memoizedProps,
                    b = w.memoizedState,
                    S = t.stateNode,
                    _ = S.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : ur(t.type, k),
                      b
                    );
                  S.__reactInternalSnapshotBeforeUpdate = _;
                }
                break;
              case 3:
                var E = t.stateNode.containerInfo;
                E.nodeType === 1
                  ? (E.textContent = "")
                  : E.nodeType === 9 &&
                    E.documentElement &&
                    E.removeChild(E.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(W(163));
            }
        } catch (N) {
          Ge(t, t.return, N);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (Q = e);
          break;
        }
        Q = t.return;
      }
  return (w = Fh), (Fh = !1), w;
}
function jo(e, t, r) {
  var n = t.updateQueue;
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var i = (n = n.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && tf(t, r, o);
      }
      i = i.next;
    } while (i !== n);
  }
}
function xs(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var r = (t = t.next);
    do {
      if ((r.tag & e) === e) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== t);
  }
}
function rf(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function r0(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), r0(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Nr], delete t[Xo], delete t[zc], delete t[iS], delete t[oS])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function n0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function $h(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || n0(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function nf(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode),
      t
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(e, t)
          : r.insertBefore(e, t)
        : (r.nodeType === 8
            ? ((t = r.parentNode), t.insertBefore(e, r))
            : ((t = r), t.appendChild(e)),
          (r = r._reactRootContainer),
          r != null || t.onclick !== null || (t.onclick = Kl));
  else if (n !== 4 && ((e = e.child), e !== null))
    for (nf(e, t, r), e = e.sibling; e !== null; ) nf(e, t, r), (e = e.sibling);
}
function of(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && ((e = e.child), e !== null))
    for (of(e, t, r), e = e.sibling; e !== null; ) of(e, t, r), (e = e.sibling);
}
var lt = null,
  cr = !1;
function Xr(e, t, r) {
  for (r = r.child; r !== null; ) i0(e, t, r), (r = r.sibling);
}
function i0(e, t, r) {
  if (Or && typeof Or.onCommitFiberUnmount == "function")
    try {
      Or.onCommitFiberUnmount(fs, r);
    } catch {}
  switch (r.tag) {
    case 5:
      gt || Di(r, t);
    case 6:
      var n = lt,
        i = cr;
      (lt = null),
        Xr(e, t, r),
        (lt = n),
        (cr = i),
        lt !== null &&
          (cr
            ? ((e = lt),
              (r = r.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : lt.removeChild(r.stateNode));
      break;
    case 18:
      lt !== null &&
        (cr
          ? ((e = lt),
            (r = r.stateNode),
            e.nodeType === 8
              ? Du(e.parentNode, r)
              : e.nodeType === 1 && Du(e, r),
            Vo(e))
          : Du(lt, r.stateNode));
      break;
    case 4:
      (n = lt),
        (i = cr),
        (lt = r.stateNode.containerInfo),
        (cr = !0),
        Xr(e, t, r),
        (lt = n),
        (cr = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !gt &&
        ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
      ) {
        i = n = n.next;
        do {
          var o = i,
            l = o.destroy;
          (o = o.tag),
            l !== void 0 && (o & 2 || o & 4) && tf(r, t, l),
            (i = i.next);
        } while (i !== n);
      }
      Xr(e, t, r);
      break;
    case 1:
      if (
        !gt &&
        (Di(r, t),
        (n = r.stateNode),
        typeof n.componentWillUnmount == "function")
      )
        try {
          (n.props = r.memoizedProps),
            (n.state = r.memoizedState),
            n.componentWillUnmount();
        } catch (s) {
          Ge(r, t, s);
        }
      Xr(e, t, r);
      break;
    case 21:
      Xr(e, t, r);
      break;
    case 22:
      r.mode & 1
        ? ((gt = (n = gt) || r.memoizedState !== null), Xr(e, t, r), (gt = n))
        : Xr(e, t, r);
      break;
    default:
      Xr(e, t, r);
  }
}
function Kh(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new _S()),
      t.forEach(function (n) {
        var i = LS.bind(null, e, n);
        r.has(n) || (r.add(n), n.then(i, i));
      });
  }
}
function sr(e, t) {
  var r = t.deletions;
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var i = r[n];
      try {
        var o = e,
          l = t,
          s = l;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (lt = s.stateNode), (cr = !1);
              break e;
            case 3:
              (lt = s.stateNode.containerInfo), (cr = !0);
              break e;
            case 4:
              (lt = s.stateNode.containerInfo), (cr = !0);
              break e;
          }
          s = s.return;
        }
        if (lt === null) throw Error(W(160));
        i0(o, l, i), (lt = null), (cr = !1);
        var c = i.alternate;
        c !== null && (c.return = null), (i.return = null);
      } catch (f) {
        Ge(i, t, f);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) o0(t, e), (t = t.sibling);
}
function o0(e, t) {
  var r = e.alternate,
    n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((sr(t, e), wr(e), n & 4)) {
        try {
          jo(3, e, e.return), xs(3, e);
        } catch (k) {
          Ge(e, e.return, k);
        }
        try {
          jo(5, e, e.return);
        } catch (k) {
          Ge(e, e.return, k);
        }
      }
      break;
    case 1:
      sr(t, e), wr(e), n & 512 && r !== null && Di(r, r.return);
      break;
    case 5:
      if (
        (sr(t, e),
        wr(e),
        n & 512 && r !== null && Di(r, r.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Uo(i, "");
        } catch (k) {
          Ge(e, e.return, k);
        }
      }
      if (n & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          l = r !== null ? r.memoizedProps : o,
          s = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            s === "input" && o.type === "radio" && o.name != null && Ng(i, o),
              Oc(s, l);
            var f = Oc(s, o);
            for (l = 0; l < c.length; l += 2) {
              var h = c[l],
                g = c[l + 1];
              h === "style"
                ? Bg(i, g)
                : h === "dangerouslySetInnerHTML"
                ? Dg(i, g)
                : h === "children"
                ? Uo(i, g)
                : jf(i, h, g, f);
            }
            switch (s) {
              case "input":
                Ec(i, o);
                break;
              case "textarea":
                Og(i, o);
                break;
              case "select":
                var p = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var x = o.value;
                x != null
                  ? Bi(i, !!o.multiple, x, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Bi(i, !!o.multiple, o.defaultValue, !0)
                      : Bi(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Xo] = o;
          } catch (k) {
            Ge(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((sr(t, e), wr(e), n & 4)) {
        if (e.stateNode === null) throw Error(W(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (k) {
          Ge(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (sr(t, e), wr(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
      )
        try {
          Vo(t.containerInfo);
        } catch (k) {
          Ge(e, e.return, k);
        }
      break;
    case 4:
      sr(t, e), wr(e);
      break;
    case 13:
      sr(t, e),
        wr(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (md = Ye())),
        n & 4 && Kh(e);
      break;
    case 22:
      if (
        ((h = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((gt = (f = gt) || h), sr(t, e), (gt = f)) : sr(t, e),
        wr(e),
        n & 8192)
      ) {
        if (
          ((f = e.memoizedState !== null),
          (e.stateNode.isHidden = f) && !h && e.mode & 1)
        )
          for (Q = e, h = e.child; h !== null; ) {
            for (g = Q = h; Q !== null; ) {
              switch (((p = Q), (x = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  jo(4, p, p.return);
                  break;
                case 1:
                  Di(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (n = p), (r = p.return);
                    try {
                      (t = n),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (k) {
                      Ge(n, r, k);
                    }
                  }
                  break;
                case 5:
                  Di(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Uh(g);
                    continue;
                  }
              }
              x !== null ? ((x.return = p), (Q = x)) : Uh(g);
            }
            h = h.sibling;
          }
        e: for (h = null, g = e; ; ) {
          if (g.tag === 5) {
            if (h === null) {
              h = g;
              try {
                (i = g.stateNode),
                  f
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((s = g.stateNode),
                      (c = g.memoizedProps.style),
                      (l =
                        c != null && c.hasOwnProperty("display")
                          ? c.display
                          : null),
                      (s.style.display = Lg("display", l)));
              } catch (k) {
                Ge(e, e.return, k);
              }
            }
          } else if (g.tag === 6) {
            if (h === null)
              try {
                g.stateNode.nodeValue = f ? "" : g.memoizedProps;
              } catch (k) {
                Ge(e, e.return, k);
              }
          } else if (
            ((g.tag !== 22 && g.tag !== 23) ||
              g.memoizedState === null ||
              g === e) &&
            g.child !== null
          ) {
            (g.child.return = g), (g = g.child);
            continue;
          }
          if (g === e) break e;
          for (; g.sibling === null; ) {
            if (g.return === null || g.return === e) break e;
            h === g && (h = null), (g = g.return);
          }
          h === g && (h = null), (g.sibling.return = g.return), (g = g.sibling);
        }
      }
      break;
    case 19:
      sr(t, e), wr(e), n & 4 && Kh(e);
      break;
    case 21:
      break;
    default:
      sr(t, e), wr(e);
  }
}
function wr(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (n0(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(W(160));
      }
      switch (n.tag) {
        case 5:
          var i = n.stateNode;
          n.flags & 32 && (Uo(i, ""), (n.flags &= -33));
          var o = $h(e);
          of(e, o, i);
          break;
        case 3:
        case 4:
          var l = n.stateNode.containerInfo,
            s = $h(e);
          nf(e, s, l);
          break;
        default:
          throw Error(W(161));
      }
    } catch (c) {
      Ge(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ES(e, t, r) {
  (Q = e), a0(e);
}
function a0(e, t, r) {
  for (var n = (e.mode & 1) !== 0; Q !== null; ) {
    var i = Q,
      o = i.child;
    if (i.tag === 22 && n) {
      var l = i.memoizedState !== null || Ya;
      if (!l) {
        var s = i.alternate,
          c = (s !== null && s.memoizedState !== null) || gt;
        s = Ya;
        var f = gt;
        if (((Ya = l), (gt = c) && !f))
          for (Q = i; Q !== null; )
            (l = Q),
              (c = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? Hh(i)
                : c !== null
                ? ((c.return = l), (Q = c))
                : Hh(i);
        for (; o !== null; ) (Q = o), a0(o), (o = o.sibling);
        (Q = i), (Ya = s), (gt = f);
      }
      zh(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (Q = o)) : zh(e);
  }
}
function zh(e) {
  for (; Q !== null; ) {
    var t = Q;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              gt || xs(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !gt)
                if (r === null) n.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? r.memoizedProps
                      : ur(t.type, r.memoizedProps);
                  n.componentDidUpdate(
                    i,
                    r.memoizedState,
                    n.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && bh(t, o, n);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((r = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode;
                      break;
                    case 1:
                      r = t.child.stateNode;
                  }
                bh(t, l, r);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (r === null && t.flags & 4) {
                r = s;
                var c = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    c.autoFocus && r.focus();
                    break;
                  case "img":
                    c.src && (r.src = c.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var f = t.alternate;
                if (f !== null) {
                  var h = f.memoizedState;
                  if (h !== null) {
                    var g = h.dehydrated;
                    g !== null && Vo(g);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(W(163));
          }
        gt || (t.flags & 512 && rf(t));
      } catch (p) {
        Ge(t, t.return, p);
      }
    }
    if (t === e) {
      Q = null;
      break;
    }
    if (((r = t.sibling), r !== null)) {
      (r.return = t.return), (Q = r);
      break;
    }
    Q = t.return;
  }
}
function Uh(e) {
  for (; Q !== null; ) {
    var t = Q;
    if (t === e) {
      Q = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      (r.return = t.return), (Q = r);
      break;
    }
    Q = t.return;
  }
}
function Hh(e) {
  for (; Q !== null; ) {
    var t = Q;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            xs(4, t);
          } catch (c) {
            Ge(t, r, c);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var i = t.return;
            try {
              n.componentDidMount();
            } catch (c) {
              Ge(t, i, c);
            }
          }
          var o = t.return;
          try {
            rf(t);
          } catch (c) {
            Ge(t, o, c);
          }
          break;
        case 5:
          var l = t.return;
          try {
            rf(t);
          } catch (c) {
            Ge(t, l, c);
          }
      }
    } catch (c) {
      Ge(t, t.return, c);
    }
    if (t === e) {
      Q = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (Q = s);
      break;
    }
    Q = t.return;
  }
}
var kS = Math.ceil,
  Xl = Vr.ReactCurrentDispatcher,
  pd = Vr.ReactCurrentOwner,
  rr = Vr.ReactCurrentBatchConfig,
  _e = 0,
  ot = null,
  Xe = null,
  ut = 0,
  Ut = 0,
  Li = kn(0),
  rt = 0,
  ia = null,
  Hn = 0,
  ws = 0,
  hd = 0,
  Ao = null,
  Dt = null,
  md = 0,
  qi = 1 / 0,
  Ir = null,
  Zl = !1,
  af = null,
  gn = null,
  Qa = !1,
  un = null,
  es = 0,
  Po = 0,
  lf = null,
  Nl = -1,
  Ol = 0;
function Et() {
  return _e & 6 ? Ye() : Nl !== -1 ? Nl : (Nl = Ye());
}
function yn(e) {
  return e.mode & 1
    ? _e & 2 && ut !== 0
      ? ut & -ut
      : lS.transition !== null
      ? (Ol === 0 && (Ol = Hg()), Ol)
      : ((e = Ne),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Qg(e.type))),
        e)
    : 1;
}
function pr(e, t, r, n) {
  if (50 < Po) throw ((Po = 0), (lf = null), Error(W(185)));
  ua(e, r, n),
    (!(_e & 2) || e !== ot) &&
      (e === ot && (!(_e & 2) && (ws |= r), rt === 4 && ln(e, ut)),
      Mt(e, n),
      r === 1 && _e === 0 && !(t.mode & 1) && ((qi = Ye() + 500), vs && Cn()));
}
function Mt(e, t) {
  var r = e.callbackNode;
  l_(e, t);
  var n = Al(e, e === ot ? ut : 0);
  if (n === 0)
    r !== null && Zp(r), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((r != null && Zp(r), t === 1))
      e.tag === 0 ? aS(Wh.bind(null, e)) : vy(Wh.bind(null, e)),
        rS(function () {
          !(_e & 6) && Cn();
        }),
        (r = null);
    else {
      switch (Wg(n)) {
        case 1:
          r = Kf;
          break;
        case 4:
          r = zg;
          break;
        case 16:
          r = jl;
          break;
        case 536870912:
          r = Ug;
          break;
        default:
          r = jl;
      }
      r = h0(r, l0.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = r);
  }
}
function l0(e, t) {
  if (((Nl = -1), (Ol = 0), _e & 6)) throw Error(W(327));
  var r = e.callbackNode;
  if (Ai() && e.callbackNode !== r) return null;
  var n = Al(e, e === ot ? ut : 0);
  if (n === 0) return null;
  if (n & 30 || n & e.expiredLanes || t) t = ts(e, n);
  else {
    t = n;
    var i = _e;
    _e |= 2;
    var o = u0();
    (ot !== e || ut !== t) && ((Ir = null), (qi = Ye() + 500), Fn(e, t));
    do
      try {
        NS();
        break;
      } catch (s) {
        s0(e, s);
      }
    while (!0);
    ed(),
      (Xl.current = o),
      (_e = i),
      Xe !== null ? (t = 0) : ((ot = null), (ut = 0), (t = rt));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Rc(e)), i !== 0 && ((n = i), (t = sf(e, i)))), t === 1)
    )
      throw ((r = ia), Fn(e, 0), ln(e, n), Mt(e, Ye()), r);
    if (t === 6) ln(e, n);
    else {
      if (
        ((i = e.current.alternate),
        !(n & 30) &&
          !CS(i) &&
          ((t = ts(e, n)),
          t === 2 && ((o = Rc(e)), o !== 0 && ((n = o), (t = sf(e, o)))),
          t === 1))
      )
        throw ((r = ia), Fn(e, 0), ln(e, n), Mt(e, Ye()), r);
      switch (((e.finishedWork = i), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error(W(345));
        case 2:
          Rn(e, Dt, Ir);
          break;
        case 3:
          if (
            (ln(e, n), (n & 130023424) === n && ((t = md + 500 - Ye()), 10 < t))
          ) {
            if (Al(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & n) !== n)) {
              Et(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Kc(Rn.bind(null, e, Dt, Ir), t);
            break;
          }
          Rn(e, Dt, Ir);
          break;
        case 4:
          if ((ln(e, n), (n & 4194240) === n)) break;
          for (t = e.eventTimes, i = -1; 0 < n; ) {
            var l = 31 - dr(n);
            (o = 1 << l), (l = t[l]), l > i && (i = l), (n &= ~o);
          }
          if (
            ((n = i),
            (n = Ye() - n),
            (n =
              (120 > n
                ? 120
                : 480 > n
                ? 480
                : 1080 > n
                ? 1080
                : 1920 > n
                ? 1920
                : 3e3 > n
                ? 3e3
                : 4320 > n
                ? 4320
                : 1960 * kS(n / 1960)) - n),
            10 < n)
          ) {
            e.timeoutHandle = Kc(Rn.bind(null, e, Dt, Ir), n);
            break;
          }
          Rn(e, Dt, Ir);
          break;
        case 5:
          Rn(e, Dt, Ir);
          break;
        default:
          throw Error(W(329));
      }
    }
  }
  return Mt(e, Ye()), e.callbackNode === r ? l0.bind(null, e) : null;
}
function sf(e, t) {
  var r = Ao;
  return (
    e.current.memoizedState.isDehydrated && (Fn(e, t).flags |= 256),
    (e = ts(e, t)),
    e !== 2 && ((t = Dt), (Dt = r), t !== null && uf(t)),
    e
  );
}
function uf(e) {
  Dt === null ? (Dt = e) : Dt.push.apply(Dt, e);
}
function CS(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var i = r[n],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!hr(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
      (r.return = t), (t = r);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function ln(e, t) {
  for (
    t &= ~hd,
      t &= ~ws,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var r = 31 - dr(t),
      n = 1 << r;
    (e[r] = -1), (t &= ~n);
  }
}
function Wh(e) {
  if (_e & 6) throw Error(W(327));
  Ai();
  var t = Al(e, 0);
  if (!(t & 1)) return Mt(e, Ye()), null;
  var r = ts(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = Rc(e);
    n !== 0 && ((t = n), (r = sf(e, n)));
  }
  if (r === 1) throw ((r = ia), Fn(e, 0), ln(e, t), Mt(e, Ye()), r);
  if (r === 6) throw Error(W(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Rn(e, Dt, Ir),
    Mt(e, Ye()),
    null
  );
}
function vd(e, t) {
  var r = _e;
  _e |= 1;
  try {
    return e(t);
  } finally {
    (_e = r), _e === 0 && ((qi = Ye() + 500), vs && Cn());
  }
}
function Wn(e) {
  un !== null && un.tag === 0 && !(_e & 6) && Ai();
  var t = _e;
  _e |= 1;
  var r = rr.transition,
    n = Ne;
  try {
    if (((rr.transition = null), (Ne = 1), e)) return e();
  } finally {
    (Ne = n), (rr.transition = r), (_e = t), !(_e & 6) && Cn();
  }
}
function gd() {
  (Ut = Li.current), Ae(Li);
}
function Fn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), tS(r)), Xe !== null))
    for (r = Xe.return; r !== null; ) {
      var n = r;
      switch ((Qf(n), n.tag)) {
        case 1:
          (n = n.type.childContextTypes), n != null && zl();
          break;
        case 3:
          Hi(), Ae(Bt), Ae(yt), ad();
          break;
        case 5:
          od(n);
          break;
        case 4:
          Hi();
          break;
        case 13:
          Ae(He);
          break;
        case 19:
          Ae(He);
          break;
        case 10:
          td(n.type._context);
          break;
        case 22:
        case 23:
          gd();
      }
      r = r.return;
    }
  if (
    ((ot = e),
    (Xe = e = xn(e.current, null)),
    (ut = Ut = t),
    (rt = 0),
    (ia = null),
    (hd = ws = Hn = 0),
    (Dt = Ao = null),
    jn !== null)
  ) {
    for (t = 0; t < jn.length; t++)
      if (((r = jn[t]), (n = r.interleaved), n !== null)) {
        r.interleaved = null;
        var i = n.next,
          o = r.pending;
        if (o !== null) {
          var l = o.next;
          (o.next = i), (n.next = l);
        }
        r.pending = n;
      }
    jn = null;
  }
  return e;
}
function s0(e, t) {
  do {
    var r = Xe;
    try {
      if ((ed(), (kl.current = Ql), Yl)) {
        for (var n = We.memoizedState; n !== null; ) {
          var i = n.queue;
          i !== null && (i.pending = null), (n = n.next);
        }
        Yl = !1;
      }
      if (
        ((Un = 0),
        (it = tt = We = null),
        (Io = !1),
        (ta = 0),
        (pd.current = null),
        r === null || r.return === null)
      ) {
        (rt = 1), (ia = t), (Xe = null);
        break;
      }
      e: {
        var o = e,
          l = r.return,
          s = r,
          c = t;
        if (
          ((t = ut),
          (s.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var f = c,
            h = s,
            g = h.tag;
          if (!(h.mode & 1) && (g === 0 || g === 11 || g === 15)) {
            var p = h.alternate;
            p
              ? ((h.updateQueue = p.updateQueue),
                (h.memoizedState = p.memoizedState),
                (h.lanes = p.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var x = Bh(l);
          if (x !== null) {
            (x.flags &= -257),
              Rh(x, l, s, o, t),
              x.mode & 1 && Lh(o, f, t),
              (t = x),
              (c = f);
            var w = t.updateQueue;
            if (w === null) {
              var k = new Set();
              k.add(c), (t.updateQueue = k);
            } else w.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              Lh(o, f, t), yd();
              break e;
            }
            c = Error(W(426));
          }
        } else if (Ke && s.mode & 1) {
          var b = Bh(l);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256),
              Rh(b, l, s, o, t),
              Xf(Wi(c, s));
            break e;
          }
        }
        (o = c = Wi(c, s)),
          rt !== 4 && (rt = 2),
          Ao === null ? (Ao = [o]) : Ao.push(o),
          (o = l);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var S = Wy(o, c, t);
              Ch(o, S);
              break e;
            case 1:
              s = c;
              var _ = o.type,
                E = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof _.getDerivedStateFromError == "function" ||
                  (E !== null &&
                    typeof E.componentDidCatch == "function" &&
                    (gn === null || !gn.has(E))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var N = qy(o, s, t);
                Ch(o, N);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      f0(r);
    } catch (L) {
      (t = L), Xe === r && r !== null && (Xe = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function u0() {
  var e = Xl.current;
  return (Xl.current = Ql), e === null ? Ql : e;
}
function yd() {
  (rt === 0 || rt === 3 || rt === 2) && (rt = 4),
    ot === null || (!(Hn & 268435455) && !(ws & 268435455)) || ln(ot, ut);
}
function ts(e, t) {
  var r = _e;
  _e |= 2;
  var n = u0();
  (ot !== e || ut !== t) && ((Ir = null), Fn(e, t));
  do
    try {
      bS();
      break;
    } catch (i) {
      s0(e, i);
    }
  while (!0);
  if ((ed(), (_e = r), (Xl.current = n), Xe !== null)) throw Error(W(261));
  return (ot = null), (ut = 0), rt;
}
function bS() {
  for (; Xe !== null; ) c0(Xe);
}
function NS() {
  for (; Xe !== null && !X1(); ) c0(Xe);
}
function c0(e) {
  var t = p0(e.alternate, e, Ut);
  (e.memoizedProps = e.pendingProps),
    t === null ? f0(e) : (Xe = t),
    (pd.current = null);
}
function f0(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((r = wS(r, t)), r !== null)) {
        (r.flags &= 32767), (Xe = r);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (rt = 6), (Xe = null);
        return;
      }
    } else if (((r = xS(r, t, Ut)), r !== null)) {
      Xe = r;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Xe = t;
      return;
    }
    Xe = t = e;
  } while (t !== null);
  rt === 0 && (rt = 5);
}
function Rn(e, t, r) {
  var n = Ne,
    i = rr.transition;
  try {
    (rr.transition = null), (Ne = 1), OS(e, t, r, n);
  } finally {
    (rr.transition = i), (Ne = n);
  }
  return null;
}
function OS(e, t, r, n) {
  do Ai();
  while (un !== null);
  if (_e & 6) throw Error(W(327));
  r = e.finishedWork;
  var i = e.finishedLanes;
  if (r === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
    throw Error(W(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = r.lanes | r.childLanes;
  if (
    (s_(e, o),
    e === ot && ((Xe = ot = null), (ut = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      Qa ||
      ((Qa = !0),
      h0(jl, function () {
        return Ai(), null;
      })),
    (o = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || o)
  ) {
    (o = rr.transition), (rr.transition = null);
    var l = Ne;
    Ne = 1;
    var s = _e;
    (_e |= 4),
      (pd.current = null),
      SS(e, r),
      o0(r, e),
      G_(Fc),
      (Pl = !!Pc),
      (Fc = Pc = null),
      (e.current = r),
      ES(r),
      Z1(),
      (_e = s),
      (Ne = l),
      (rr.transition = o);
  } else e.current = r;
  if (
    (Qa && ((Qa = !1), (un = e), (es = i)),
    (o = e.pendingLanes),
    o === 0 && (gn = null),
    r_(r.stateNode),
    Mt(e, Ye()),
    t !== null)
  )
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      (i = t[r]), n(i.value, { componentStack: i.stack, digest: i.digest });
  if (Zl) throw ((Zl = !1), (e = af), (af = null), e);
  return (
    es & 1 && e.tag !== 0 && Ai(),
    (o = e.pendingLanes),
    o & 1 ? (e === lf ? Po++ : ((Po = 0), (lf = e))) : (Po = 0),
    Cn(),
    null
  );
}
function Ai() {
  if (un !== null) {
    var e = Wg(es),
      t = rr.transition,
      r = Ne;
    try {
      if (((rr.transition = null), (Ne = 16 > e ? 16 : e), un === null))
        var n = !1;
      else {
        if (((e = un), (un = null), (es = 0), _e & 6)) throw Error(W(331));
        var i = _e;
        for (_e |= 4, Q = e.current; Q !== null; ) {
          var o = Q,
            l = o.child;
          if (Q.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var c = 0; c < s.length; c++) {
                var f = s[c];
                for (Q = f; Q !== null; ) {
                  var h = Q;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      jo(8, h, o);
                  }
                  var g = h.child;
                  if (g !== null) (g.return = h), (Q = g);
                  else
                    for (; Q !== null; ) {
                      h = Q;
                      var p = h.sibling,
                        x = h.return;
                      if ((r0(h), h === f)) {
                        Q = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = x), (Q = p);
                        break;
                      }
                      Q = x;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var k = w.child;
                if (k !== null) {
                  w.child = null;
                  do {
                    var b = k.sibling;
                    (k.sibling = null), (k = b);
                  } while (k !== null);
                }
              }
              Q = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null) (l.return = o), (Q = l);
          else
            e: for (; Q !== null; ) {
              if (((o = Q), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    jo(9, o, o.return);
                }
              var S = o.sibling;
              if (S !== null) {
                (S.return = o.return), (Q = S);
                break e;
              }
              Q = o.return;
            }
        }
        var _ = e.current;
        for (Q = _; Q !== null; ) {
          l = Q;
          var E = l.child;
          if (l.subtreeFlags & 2064 && E !== null) (E.return = l), (Q = E);
          else
            e: for (l = _; Q !== null; ) {
              if (((s = Q), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      xs(9, s);
                  }
                } catch (L) {
                  Ge(s, s.return, L);
                }
              if (s === l) {
                Q = null;
                break e;
              }
              var N = s.sibling;
              if (N !== null) {
                (N.return = s.return), (Q = N);
                break e;
              }
              Q = s.return;
            }
        }
        if (
          ((_e = i), Cn(), Or && typeof Or.onPostCommitFiberRoot == "function")
        )
          try {
            Or.onPostCommitFiberRoot(fs, e);
          } catch {}
        n = !0;
      }
      return n;
    } finally {
      (Ne = r), (rr.transition = t);
    }
  }
  return !1;
}
function qh(e, t, r) {
  (t = Wi(r, t)),
    (t = Wy(e, t, 1)),
    (e = vn(e, t, 1)),
    (t = Et()),
    e !== null && (ua(e, 1, t), Mt(e, t));
}
function Ge(e, t, r) {
  if (e.tag === 3) qh(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        qh(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof n.componentDidCatch == "function" &&
            (gn === null || !gn.has(n)))
        ) {
          (e = Wi(r, e)),
            (e = qy(t, e, 1)),
            (t = vn(t, e, 1)),
            (e = Et()),
            t !== null && (ua(t, 1, e), Mt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function TS(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t),
    (t = Et()),
    (e.pingedLanes |= e.suspendedLanes & r),
    ot === e &&
      (ut & r) === r &&
      (rt === 4 || (rt === 3 && (ut & 130023424) === ut && 500 > Ye() - md)
        ? Fn(e, 0)
        : (hd |= r)),
    Mt(e, t);
}
function d0(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ka), (Ka <<= 1), !(Ka & 130023424) && (Ka = 4194304))
      : (t = 1));
  var r = Et();
  (e = Wr(e, t)), e !== null && (ua(e, t, r), Mt(e, r));
}
function DS(e) {
  var t = e.memoizedState,
    r = 0;
  t !== null && (r = t.retryLane), d0(e, r);
}
function LS(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode,
        i = e.memoizedState;
      i !== null && (r = i.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(W(314));
  }
  n !== null && n.delete(t), d0(e, r);
}
var p0;
p0 = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Bt.current) Lt = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128)) return (Lt = !1), yS(e, t, r);
      Lt = !!(e.flags & 131072);
    }
  else (Lt = !1), Ke && t.flags & 1048576 && gy(t, Wl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var n = t.type;
      bl(e, t), (e = t.pendingProps);
      var i = Ki(t, yt.current);
      ji(t, r), (i = sd(null, t, n, e, i, r));
      var o = ud();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Rt(n) ? ((o = !0), Ul(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            nd(t),
            (i.updater = ys),
            (t.stateNode = i),
            (i._reactInternals = t),
            Gc(t, n, e, r),
            (t = Qc(null, t, n, !0, o, r)))
          : ((t.tag = 0), Ke && o && Yf(t), St(null, t, i, r), (t = t.child)),
        t
      );
    case 16:
      n = t.elementType;
      e: {
        switch (
          (bl(e, t),
          (e = t.pendingProps),
          (i = n._init),
          (n = i(n._payload)),
          (t.type = n),
          (i = t.tag = RS(n)),
          (e = ur(n, e)),
          i)
        ) {
          case 0:
            t = Yc(null, t, n, e, r);
            break e;
          case 1:
            t = jh(null, t, n, e, r);
            break e;
          case 11:
            t = Mh(null, t, n, e, r);
            break e;
          case 14:
            t = Ih(null, t, n, ur(n.type, e), r);
            break e;
        }
        throw Error(W(306, n, ""));
      }
      return t;
    case 0:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : ur(n, i)),
        Yc(e, t, n, i, r)
      );
    case 1:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : ur(n, i)),
        jh(e, t, n, i, r)
      );
    case 3:
      e: {
        if ((Yy(t), e === null)) throw Error(W(387));
        (n = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Ey(e, t),
          Gl(t, n, null, r);
        var l = t.memoizedState;
        if (((n = l.element), o.isDehydrated))
          if (
            ((o = {
              element: n,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Wi(Error(W(423)), t)), (t = Ah(e, t, n, r, i));
            break e;
          } else if (n !== i) {
            (i = Wi(Error(W(424)), t)), (t = Ah(e, t, n, r, i));
            break e;
          } else
            for (
              Ht = mn(t.stateNode.containerInfo.firstChild),
                Wt = t,
                Ke = !0,
                fr = null,
                r = _y(t, null, n, r),
                t.child = r;
              r;

            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
        else {
          if ((zi(), n === i)) {
            t = qr(e, t, r);
            break e;
          }
          St(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        ky(t),
        e === null && Wc(t),
        (n = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (l = i.children),
        $c(n, i) ? (l = null) : o !== null && $c(n, o) && (t.flags |= 32),
        Jy(e, t),
        St(e, t, l, r),
        t.child
      );
    case 6:
      return e === null && Wc(t), null;
    case 13:
      return Qy(e, t, r);
    case 4:
      return (
        id(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        e === null ? (t.child = Ui(t, null, n, r)) : St(e, t, n, r),
        t.child
      );
    case 11:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : ur(n, i)),
        Mh(e, t, n, i, r)
      );
    case 7:
      return St(e, t, t.pendingProps, r), t.child;
    case 8:
      return St(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return St(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (
          ((n = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (l = i.value),
          Re(ql, n._currentValue),
          (n._currentValue = l),
          o !== null)
        )
          if (hr(o.value, l)) {
            if (o.children === i.children && !Bt.current) {
              t = qr(e, t, r);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                l = o.child;
                for (var c = s.firstContext; c !== null; ) {
                  if (c.context === n) {
                    if (o.tag === 1) {
                      (c = Kr(-1, r & -r)), (c.tag = 2);
                      var f = o.updateQueue;
                      if (f !== null) {
                        f = f.shared;
                        var h = f.pending;
                        h === null
                          ? (c.next = c)
                          : ((c.next = h.next), (h.next = c)),
                          (f.pending = c);
                      }
                    }
                    (o.lanes |= r),
                      (c = o.alternate),
                      c !== null && (c.lanes |= r),
                      qc(o.return, r, t),
                      (s.lanes |= r);
                    break;
                  }
                  c = c.next;
                }
              } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((l = o.return), l === null)) throw Error(W(341));
                (l.lanes |= r),
                  (s = l.alternate),
                  s !== null && (s.lanes |= r),
                  qc(l, r, t),
                  (l = o.sibling);
              } else l = o.child;
              if (l !== null) l.return = o;
              else
                for (l = o; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((o = l.sibling), o !== null)) {
                    (o.return = l.return), (l = o);
                    break;
                  }
                  l = l.return;
                }
              o = l;
            }
        St(e, t, i.children, r), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (n = t.pendingProps.children),
        ji(t, r),
        (i = nr(i)),
        (n = n(i)),
        (t.flags |= 1),
        St(e, t, n, r),
        t.child
      );
    case 14:
      return (
        (n = t.type),
        (i = ur(n, t.pendingProps)),
        (i = ur(n.type, i)),
        Ih(e, t, n, i, r)
      );
    case 15:
      return Vy(e, t, t.type, t.pendingProps, r);
    case 17:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : ur(n, i)),
        bl(e, t),
        (t.tag = 1),
        Rt(n) ? ((e = !0), Ul(t)) : (e = !1),
        ji(t, r),
        Hy(t, n, i),
        Gc(t, n, i, r),
        Qc(null, t, n, !0, e, r)
      );
    case 19:
      return Xy(e, t, r);
    case 22:
      return Gy(e, t, r);
  }
  throw Error(W(156, t.tag));
};
function h0(e, t) {
  return Kg(e, t);
}
function BS(e, t, r, n) {
  (this.tag = e),
    (this.key = r),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function tr(e, t, r, n) {
  return new BS(e, t, r, n);
}
function xd(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function RS(e) {
  if (typeof e == "function") return xd(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Pf)) return 11;
    if (e === Ff) return 14;
  }
  return 2;
}
function xn(e, t) {
  var r = e.alternate;
  return (
    r === null
      ? ((r = tr(e.tag, t, e.key, e.mode)),
        (r.elementType = e.elementType),
        (r.type = e.type),
        (r.stateNode = e.stateNode),
        (r.alternate = e),
        (e.alternate = r))
      : ((r.pendingProps = t),
        (r.type = e.type),
        (r.flags = 0),
        (r.subtreeFlags = 0),
        (r.deletions = null)),
    (r.flags = e.flags & 14680064),
    (r.childLanes = e.childLanes),
    (r.lanes = e.lanes),
    (r.child = e.child),
    (r.memoizedProps = e.memoizedProps),
    (r.memoizedState = e.memoizedState),
    (r.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (r.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (r.sibling = e.sibling),
    (r.index = e.index),
    (r.ref = e.ref),
    r
  );
}
function Tl(e, t, r, n, i, o) {
  var l = 2;
  if (((n = e), typeof e == "function")) xd(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case _i:
        return $n(r.children, i, o, t);
      case Af:
        (l = 8), (i |= 8);
        break;
      case yc:
        return (
          (e = tr(12, r, t, i | 2)), (e.elementType = yc), (e.lanes = o), e
        );
      case xc:
        return (e = tr(13, r, t, i)), (e.elementType = xc), (e.lanes = o), e;
      case wc:
        return (e = tr(19, r, t, i)), (e.elementType = wc), (e.lanes = o), e;
      case kg:
        return _s(r, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Sg:
              l = 10;
              break e;
            case Eg:
              l = 9;
              break e;
            case Pf:
              l = 11;
              break e;
            case Ff:
              l = 14;
              break e;
            case rn:
              (l = 16), (n = null);
              break e;
          }
        throw Error(W(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = tr(l, r, t, i)), (t.elementType = e), (t.type = n), (t.lanes = o), t
  );
}
function $n(e, t, r, n) {
  return (e = tr(7, e, n, t)), (e.lanes = r), e;
}
function _s(e, t, r, n) {
  return (
    (e = tr(22, e, n, t)),
    (e.elementType = kg),
    (e.lanes = r),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Pu(e, t, r) {
  return (e = tr(6, e, null, t)), (e.lanes = r), e;
}
function Fu(e, t, r) {
  return (
    (t = tr(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function MS(e, t, r, n, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = xu(0)),
    (this.expirationTimes = xu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = xu(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function wd(e, t, r, n, i, o, l, s, c) {
  return (
    (e = new MS(e, t, r, s, c)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = tr(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: n,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    nd(o),
    e
  );
}
function IS(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: wi,
    key: n == null ? null : "" + n,
    children: e,
    containerInfo: t,
    implementation: r,
  };
}
function m0(e) {
  if (!e) return Sn;
  e = e._reactInternals;
  e: {
    if (Vn(e) !== e || e.tag !== 1) throw Error(W(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Rt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(W(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (Rt(r)) return my(e, r, t);
  }
  return t;
}
function v0(e, t, r, n, i, o, l, s, c) {
  return (
    (e = wd(r, n, !0, e, i, o, l, s, c)),
    (e.context = m0(null)),
    (r = e.current),
    (n = Et()),
    (i = yn(r)),
    (o = Kr(n, i)),
    (o.callback = t ?? null),
    vn(r, o, i),
    (e.current.lanes = i),
    ua(e, i, n),
    Mt(e, n),
    e
  );
}
function Ss(e, t, r, n) {
  var i = t.current,
    o = Et(),
    l = yn(i);
  return (
    (r = m0(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = Kr(o, l)),
    (t.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    (e = vn(i, t, l)),
    e !== null && (pr(e, i, l, o), El(e, i, l)),
    l
  );
}
function rs(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Vh(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function _d(e, t) {
  Vh(e, t), (e = e.alternate) && Vh(e, t);
}
function jS() {
  return null;
}
var g0 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Sd(e) {
  this._internalRoot = e;
}
Es.prototype.render = Sd.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(W(409));
  Ss(e, t, null, null);
};
Es.prototype.unmount = Sd.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Wn(function () {
      Ss(null, e, null, null);
    }),
      (t[Hr] = null);
  }
};
function Es(e) {
  this._internalRoot = e;
}
Es.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Gg();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < an.length && t !== 0 && t < an[r].priority; r++);
    an.splice(r, 0, e), r === 0 && Yg(e);
  }
};
function Ed(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ks(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Gh() {}
function AS(e, t, r, n, i) {
  if (i) {
    if (typeof n == "function") {
      var o = n;
      n = function () {
        var f = rs(l);
        o.call(f);
      };
    }
    var l = v0(t, n, e, 0, null, !1, !1, "", Gh);
    return (
      (e._reactRootContainer = l),
      (e[Hr] = l.current),
      Yo(e.nodeType === 8 ? e.parentNode : e),
      Wn(),
      l
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof n == "function") {
    var s = n;
    n = function () {
      var f = rs(c);
      s.call(f);
    };
  }
  var c = wd(e, 0, !1, null, null, !1, !1, "", Gh);
  return (
    (e._reactRootContainer = c),
    (e[Hr] = c.current),
    Yo(e.nodeType === 8 ? e.parentNode : e),
    Wn(function () {
      Ss(t, c, r, n);
    }),
    c
  );
}
function Cs(e, t, r, n, i) {
  var o = r._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var s = i;
      i = function () {
        var c = rs(l);
        s.call(c);
      };
    }
    Ss(t, l, e, i);
  } else l = AS(r, t, e, i, n);
  return rs(l);
}
qg = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = bo(t.pendingLanes);
        r !== 0 &&
          (zf(t, r | 1), Mt(t, Ye()), !(_e & 6) && ((qi = Ye() + 500), Cn()));
      }
      break;
    case 13:
      Wn(function () {
        var n = Wr(e, 1);
        if (n !== null) {
          var i = Et();
          pr(n, e, 1, i);
        }
      }),
        _d(e, 1);
  }
};
Uf = function (e) {
  if (e.tag === 13) {
    var t = Wr(e, 134217728);
    if (t !== null) {
      var r = Et();
      pr(t, e, 134217728, r);
    }
    _d(e, 134217728);
  }
};
Vg = function (e) {
  if (e.tag === 13) {
    var t = yn(e),
      r = Wr(e, t);
    if (r !== null) {
      var n = Et();
      pr(r, e, t, n);
    }
    _d(e, t);
  }
};
Gg = function () {
  return Ne;
};
Jg = function (e, t) {
  var r = Ne;
  try {
    return (Ne = e), t();
  } finally {
    Ne = r;
  }
};
Dc = function (e, t, r) {
  switch (t) {
    case "input":
      if ((Ec(e, r), (t = r.name), r.type === "radio" && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (
          r = r.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < r.length;
          t++
        ) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var i = ms(n);
            if (!i) throw Error(W(90));
            bg(n), Ec(n, i);
          }
        }
      }
      break;
    case "textarea":
      Og(e, r);
      break;
    case "select":
      (t = r.value), t != null && Bi(e, !!r.multiple, t, !1);
  }
};
Ig = vd;
jg = Wn;
var PS = { usingClientEntryPoint: !1, Events: [fa, Ci, ms, Rg, Mg, vd] },
  ho = {
    findFiberByHostInstance: In,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  FS = {
    bundleType: ho.bundleType,
    version: ho.version,
    rendererPackageName: ho.rendererPackageName,
    rendererConfig: ho.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Vr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Fg(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ho.findFiberByHostInstance || jS,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Xa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Xa.isDisabled && Xa.supportsFiber)
    try {
      (fs = Xa.inject(FS)), (Or = Xa);
    } catch {}
}
Vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = PS;
Vt.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ed(t)) throw Error(W(200));
  return IS(e, t, null, r);
};
Vt.createRoot = function (e, t) {
  if (!Ed(e)) throw Error(W(299));
  var r = !1,
    n = "",
    i = g0;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = wd(e, 1, !1, null, null, r, !1, n, i)),
    (e[Hr] = t.current),
    Yo(e.nodeType === 8 ? e.parentNode : e),
    new Sd(t)
  );
};
Vt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(W(188))
      : ((e = Object.keys(e).join(",")), Error(W(268, e)));
  return (e = Fg(t)), (e = e === null ? null : e.stateNode), e;
};
Vt.flushSync = function (e) {
  return Wn(e);
};
Vt.hydrate = function (e, t, r) {
  if (!ks(t)) throw Error(W(200));
  return Cs(null, e, t, !0, r);
};
Vt.hydrateRoot = function (e, t, r) {
  if (!Ed(e)) throw Error(W(405));
  var n = (r != null && r.hydratedSources) || null,
    i = !1,
    o = "",
    l = g0;
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (i = !0),
      r.identifierPrefix !== void 0 && (o = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (l = r.onRecoverableError)),
    (t = v0(t, null, e, 1, r ?? null, i, !1, o, l)),
    (e[Hr] = t.current),
    Yo(e),
    n)
  )
    for (e = 0; e < n.length; e++)
      (r = n[e]),
        (i = r._getVersion),
        (i = i(r._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [r, i])
          : t.mutableSourceEagerHydrationData.push(r, i);
  return new Es(t);
};
Vt.render = function (e, t, r) {
  if (!ks(t)) throw Error(W(200));
  return Cs(null, e, t, !1, r);
};
Vt.unmountComponentAtNode = function (e) {
  if (!ks(e)) throw Error(W(40));
  return e._reactRootContainer
    ? (Wn(function () {
        Cs(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Hr] = null);
        });
      }),
      !0)
    : !1;
};
Vt.unstable_batchedUpdates = vd;
Vt.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
  if (!ks(r)) throw Error(W(200));
  if (e == null || e._reactInternals === void 0) throw Error(W(38));
  return Cs(e, t, r, !1, n);
};
Vt.version = "18.3.1-next-f1338f8080-20240426";
function y0() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y0);
    } catch (e) {
      console.error(e);
    }
}
y0(), (yg.exports = Vt);
var x0 = yg.exports,
  Jh = x0;
(vc.createRoot = Jh.createRoot), (vc.hydrateRoot = Jh.hydrateRoot);
const $S = () =>
  v.jsxs("footer", {
    className:
      "w-full lg:h-[300px] h-fit py-4 lg:py-0 bg-custom-gradient lg:px-10 flex lg:flex-row flex-col justify-between items-center",
    children: [
      v.jsxs("div", {
        children: [
          v.jsx("img", { src: "/images/Logo.svg" }),
          v.jsx("p", {
            className: "text-[19px] text-white font-poppins font-[500] mt-2 ",
            children: "Follow On",
          }),
          v.jsxs("div", {
            className: "flex gap-x-5 mt-2",
            children: [
              v.jsx("a", {
                href: "https://www.facebook.com/pruthatek",
                target: "_blank",
                className:
                  "w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center ",
                children: v.jsx("img", { src: "/images/fb.svg" }),
              }),
              v.jsx("a", {
                href: "",
                target: "_blank",
                className:
                  "w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center ",
                children: v.jsx("img", { src: "/images/ig.svg" }),
              }),
              v.jsx("a", {
                href: "https://www.linkedin.com/company/pruthatek/mycompany/",
                target: "_blank",
                className:
                  "w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center ",
                children: v.jsx("img", { src: "/images/in.svg" }),
              }),
              v.jsx("a", {
                href: "https://x.com/pruthatek",
                target: "_blank",
                className:
                  "w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center ",
                children: v.jsx("img", { src: "/images/X.svg" }),
              }),
            ],
          }),
        ],
      }),
      v.jsxs("div", {
        className: "md:hidden lg:block",
        children: [
          v.jsx("p", {
            className:
              "font-poppins font-[700] text-white text-[20px] mt-4 lg:mt-0",
            children: "Contacts",
          }),
          v.jsxs("div", {
            className: "flex gap-x-2 mt-6",
            children: [
              v.jsx("img", { src: "/images/Location.svg" }),
              v.jsx("address", {
                className:
                  "font-[400] text-[15px] text-white font-poppins not-italic ",
                children: "Ontario, Toronto",
              }),
            ],
          }),
          v.jsxs("div", {
            className: "flex gap-x-2 mt-4",
            children: [
              v.jsx("img", { src: "/images/Message.svg" }),
              v.jsx("a", {
                href: "mailto:Ca_sales@pruthatek.com",
                className:
                  "font-[400] text-[15px] text-white font-poppins not-italic ",
                children: "Ca_sales@pruthatek.com",
              }),
            ],
          }),
          v.jsxs("div", {
            className: "flex gap-x-2 mt-4",
            children: [
              v.jsx("img", { src: "/images/Message.svg" }),
              v.jsx("a", {
                href: "tel:+1 (705) 772-2734",
                className:
                  "font-[400] text-[15px] text-white font-poppins not-italic ",
                children: "+1 (705) 772-2734",
              }),
            ],
          }),
        ],
      }),
      v.jsxs("div", {
        className: "md:hidden lg:block",
        children: [
          v.jsxs("div", {
            className: "flex gap-x-2 md:mt-14 mt-10",
            children: [
              v.jsx("img", { src: "/images/Location.svg" }),
              v.jsx("address", {
                className:
                  "font-[400] text-[15px] text-white font-poppins not-italic ",
                children: "SEA, South East Asia",
              }),
            ],
          }),
          v.jsxs("div", {
            className: "flex gap-x-2 mt-4",
            children: [
              v.jsx("img", { src: "/images/Message.svg" }),
              v.jsx("a", {
                href: "mailto:Sea_sales@pruthatek.com",
                className:
                  "font-[400] text-[15px] text-white font-poppins not-italic ",
                children: "Sea_sales@pruthatek.com",
              }),
            ],
          }),
          v.jsxs("div", {
            className: "flex gap-x-2 mt-4",
            children: [
              v.jsx("img", { src: "/images/Message.svg" }),
              v.jsx("a", {
                href: "tel:+1 (705) 772-2734",
                className:
                  "font-[400] text-[15px] text-white font-poppins not-italic ",
                children: "+1 (705) 772-2734",
              }),
            ],
          }),
        ],
      }),
      v.jsxs("div", {
        className: "md:hidden lg:block",
        children: [
          v.jsxs("div", {
            className: "flex gap-x-2 md:mt-14 mt-10",
            children: [
              v.jsx("img", { src: "/images/Location.svg" }),
              v.jsx("address", {
                className:
                  "font-[400] text-[15px] text-white font-poppins not-italic ",
                children: "Australia",
              }),
            ],
          }),
          v.jsxs("div", {
            className: "flex gap-x-2 mt-4",
            children: [
              v.jsx("img", { src: "/images/Message.svg" }),
              v.jsx("a", {
                href: "mailto:Au_sales@pruthatek.com",
                className:
                  "font-[400] text-[15px] text-white font-poppins not-italic ",
                children: "Au_sales@pruthatek.com",
              }),
            ],
          }),
          v.jsxs("div", {
            className: "flex gap-x-2 mt-4",
            children: [
              v.jsx("img", { src: "/images/Message.svg" }),
              v.jsx("a", {
                href: "tel:+1 (705) 772-2734",
                className:
                  "font-[400] text-[15px] text-white font-poppins not-italic ",
                children: "+1 (705) 772-2734",
              }),
            ],
          }),
        ],
      }),
      v.jsxs("div", {
        className:
          "md:flex-row md:flex gap-x-8 lg:hidden hidden justify-between",
        children: [
          v.jsxs("div", {
            children: [
              v.jsx("p", {
                className:
                  "font-poppins font-[700] text-white text-[20px] mt-4 lg:mt-0",
                children: "Contacts",
              }),
              v.jsxs("div", {
                className: "flex gap-x-2 mt-6",
                children: [
                  v.jsx("img", { src: "/images/Location.svg" }),
                  v.jsx("address", {
                    className:
                      "font-[400] text-[15px] text-white font-poppins not-italic ",
                    children: "Ontario, Toronto",
                  }),
                ],
              }),
              v.jsxs("div", {
                className: "flex gap-x-2 mt-4",
                children: [
                  v.jsx("img", { src: "/images/Message.svg" }),
                  v.jsx("a", {
                    href: "mailto:Ca_sales@pruthatek.com",
                    className:
                      "font-[400] text-[15px] text-white font-poppins not-italic ",
                    children: "Ca_sales@pruthatek.com",
                  }),
                ],
              }),
              v.jsxs("div", {
                className: "flex gap-x-2 mt-4",
                children: [
                  v.jsx("img", { src: "/images/Message.svg" }),
                  v.jsx("a", {
                    href: "tel:+1 (705) 772-2734",
                    className:
                      "font-[400] text-[15px] text-white font-poppins not-italic ",
                    children: "+1 (705) 772-2734",
                  }),
                ],
              }),
            ],
          }),
          v.jsxs("div", {
            children: [
              v.jsxs("div", {
                className: "flex gap-x-2 md:mt-[70px] mt-10",
                children: [
                  v.jsx("img", { src: "/images/Location.svg" }),
                  v.jsx("address", {
                    className:
                      "font-[400] text-[15px] text-white font-poppins not-italic ",
                    children: "SEA, South East Asia",
                  }),
                ],
              }),
              v.jsxs("div", {
                className: "flex gap-x-2 mt-4",
                children: [
                  v.jsx("img", { src: "/images/Message.svg" }),
                  v.jsx("a", {
                    href: "mailto:Sea_sales@pruthatek.com",
                    className:
                      "font-[400] text-[15px] text-white font-poppins not-italic ",
                    children: "Sea_sales@pruthatek.com",
                  }),
                ],
              }),
              v.jsxs("div", {
                className: "flex gap-x-2 mt-4",
                children: [
                  v.jsx("img", { src: "/images/Message.svg" }),
                  v.jsx("a", {
                    href: "tel:+1 (705) 772-2734",
                    className:
                      "font-[400] text-[15px] text-white font-poppins not-italic ",
                    children: "+1 (705) 772-2734",
                  }),
                ],
              }),
            ],
          }),
          v.jsxs("div", {
            children: [
              v.jsxs("div", {
                className: "flex gap-x-2 md:mt-[70px] mt-10",
                children: [
                  v.jsx("img", { src: "/images/Location.svg" }),
                  v.jsx("address", {
                    className:
                      "font-[400] text-[15px] text-white font-poppins not-italic ",
                    children: "Australia",
                  }),
                ],
              }),
              v.jsxs("div", {
                className: "flex gap-x-2 mt-4",
                children: [
                  v.jsx("img", { src: "/images/Message.svg" }),
                  v.jsx("a", {
                    href: "mailto:Au_sales@pruthatek.com",
                    className:
                      "font-[400] text-[15px] text-white font-poppins not-italic ",
                    children: "Au_sales@pruthatek.com",
                  }),
                ],
              }),
              v.jsxs("div", {
                className: "flex gap-x-2 mt-4",
                children: [
                  v.jsx("img", { src: "/images/Message.svg" }),
                  v.jsx("a", {
                    href: "tel:+1 (705) 772-2734",
                    className:
                      "font-[400] text-[15px] text-white font-poppins not-italic ",
                    children: "+1 (705) 772-2734",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function oa() {
  return (
    (oa = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    oa.apply(this, arguments)
  );
}
var cn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(cn || (cn = {}));
const Yh = "popstate";
function KS(e) {
  e === void 0 && (e = {});
  function t(n, i) {
    let { pathname: o, search: l, hash: s } = n.location;
    return cf(
      "",
      { pathname: o, search: l, hash: s },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function r(n, i) {
    return typeof i == "string" ? i : ns(i);
  }
  return US(t, r, null, e);
}
function Ze(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function w0(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function zS() {
  return Math.random().toString(36).substr(2, 8);
}
function Qh(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function cf(e, t, r, n) {
  return (
    r === void 0 && (r = null),
    oa(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Qi(t) : t,
      { state: r, key: (t && t.key) || n || zS() }
    )
  );
}
function ns(e) {
  let { pathname: t = "/", search: r = "", hash: n = "" } = e;
  return (
    r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r),
    n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n),
    t
  );
}
function Qi(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
    let n = e.indexOf("?");
    n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))),
      e && (t.pathname = e);
  }
  return t;
}
function US(e, t, r, n) {
  n === void 0 && (n = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = n,
    l = i.history,
    s = cn.Pop,
    c = null,
    f = h();
  f == null && ((f = 0), l.replaceState(oa({}, l.state, { idx: f }), ""));
  function h() {
    return (l.state || { idx: null }).idx;
  }
  function g() {
    s = cn.Pop;
    let b = h(),
      S = b == null ? null : b - f;
    (f = b), c && c({ action: s, location: k.location, delta: S });
  }
  function p(b, S) {
    s = cn.Push;
    let _ = cf(k.location, b, S);
    f = h() + 1;
    let E = Qh(_, f),
      N = k.createHref(_);
    try {
      l.pushState(E, "", N);
    } catch (L) {
      if (L instanceof DOMException && L.name === "DataCloneError") throw L;
      i.location.assign(N);
    }
    o && c && c({ action: s, location: k.location, delta: 1 });
  }
  function x(b, S) {
    s = cn.Replace;
    let _ = cf(k.location, b, S);
    f = h();
    let E = Qh(_, f),
      N = k.createHref(_);
    l.replaceState(E, "", N),
      o && c && c({ action: s, location: k.location, delta: 0 });
  }
  function w(b) {
    let S = i.location.origin !== "null" ? i.location.origin : i.location.href,
      _ = typeof b == "string" ? b : ns(b);
    return (
      (_ = _.replace(/ $/, "%20")),
      Ze(
        S,
        "No window.location.(origin|href) available to create URL for href: " +
          _
      ),
      new URL(_, S)
    );
  }
  let k = {
    get action() {
      return s;
    },
    get location() {
      return e(i, l);
    },
    listen(b) {
      if (c) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Yh, g),
        (c = b),
        () => {
          i.removeEventListener(Yh, g), (c = null);
        }
      );
    },
    createHref(b) {
      return t(i, b);
    },
    createURL: w,
    encodeLocation(b) {
      let S = w(b);
      return { pathname: S.pathname, search: S.search, hash: S.hash };
    },
    push: p,
    replace: x,
    go(b) {
      return l.go(b);
    },
  };
  return k;
}
var Xh;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Xh || (Xh = {}));
function HS(e, t, r) {
  r === void 0 && (r = "/");
  let n = typeof t == "string" ? Qi(t) : t,
    i = kd(n.pathname || "/", r);
  if (i == null) return null;
  let o = _0(e);
  WS(o);
  let l = null;
  for (let s = 0; l == null && s < o.length; ++s) {
    let c = nE(i);
    l = eE(o[s], c);
  }
  return l;
}
function _0(e, t, r, n) {
  t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = "");
  let i = (o, l, s) => {
    let c = {
      relativePath: s === void 0 ? o.path || "" : s,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: l,
      route: o,
    };
    c.relativePath.startsWith("/") &&
      (Ze(
        c.relativePath.startsWith(n),
        'Absolute route path "' +
          c.relativePath +
          '" nested under path ' +
          ('"' + n + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (c.relativePath = c.relativePath.slice(n.length)));
    let f = wn([n, c.relativePath]),
      h = r.concat(c);
    o.children &&
      o.children.length > 0 &&
      (Ze(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + f + '".')
      ),
      _0(o.children, t, h, f)),
      !(o.path == null && !o.index) &&
        t.push({ path: f, score: XS(f, o.index), routesMeta: h });
  };
  return (
    e.forEach((o, l) => {
      var s;
      if (o.path === "" || !((s = o.path) != null && s.includes("?"))) i(o, l);
      else for (let c of S0(o.path)) i(o, l, c);
    }),
    t
  );
}
function S0(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...n] = t,
    i = r.endsWith("?"),
    o = r.replace(/\?$/, "");
  if (n.length === 0) return i ? [o, ""] : [o];
  let l = S0(n.join("/")),
    s = [];
  return (
    s.push(...l.map((c) => (c === "" ? o : [o, c].join("/")))),
    i && s.push(...l),
    s.map((c) => (e.startsWith("/") && c === "" ? "/" : c))
  );
}
function WS(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : ZS(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex)
        )
  );
}
const qS = /^:[\w-]+$/,
  VS = 3,
  GS = 2,
  JS = 1,
  YS = 10,
  QS = -2,
  Zh = (e) => e === "*";
function XS(e, t) {
  let r = e.split("/"),
    n = r.length;
  return (
    r.some(Zh) && (n += QS),
    t && (n += GS),
    r
      .filter((i) => !Zh(i))
      .reduce((i, o) => i + (qS.test(o) ? VS : o === "" ? JS : YS), n)
  );
}
function ZS(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, i) => n === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function eE(e, t) {
  let { routesMeta: r } = e,
    n = {},
    i = "/",
    o = [];
  for (let l = 0; l < r.length; ++l) {
    let s = r[l],
      c = l === r.length - 1,
      f = i === "/" ? t : t.slice(i.length) || "/",
      h = tE(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: c },
        f
      );
    if (!h) return null;
    Object.assign(n, h.params);
    let g = s.route;
    o.push({
      params: n,
      pathname: wn([i, h.pathname]),
      pathnameBase: lE(wn([i, h.pathnameBase])),
      route: g,
    }),
      h.pathnameBase !== "/" && (i = wn([i, h.pathnameBase]));
  }
  return o;
}
function tE(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = rE(e.path, e.caseSensitive, e.end),
    i = t.match(r);
  if (!i) return null;
  let o = i[0],
    l = o.replace(/(.)\/+$/, "$1"),
    s = i.slice(1);
  return {
    params: n.reduce((f, h, g) => {
      let { paramName: p, isOptional: x } = h;
      if (p === "*") {
        let k = s[g] || "";
        l = o.slice(0, o.length - k.length).replace(/(.)\/+$/, "$1");
      }
      const w = s[g];
      return (
        x && !w ? (f[p] = void 0) : (f[p] = (w || "").replace(/%2F/g, "/")), f
      );
    }, {}),
    pathname: o,
    pathnameBase: l,
    pattern: e,
  };
}
function rE(e, t, r) {
  t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    w0(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let n = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (l, s, c) => (
            n.push({ paramName: s, isOptional: c != null }),
            c ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (n.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), n]
  );
}
function nE(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      w0(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function kd(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length,
    n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
function iE(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: r,
    search: n = "",
    hash: i = "",
  } = typeof e == "string" ? Qi(e) : e;
  return {
    pathname: r ? (r.startsWith("/") ? r : oE(r, t)) : t,
    search: sE(n),
    hash: uE(i),
  };
}
function oE(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? r.length > 1 && r.pop() : i !== "." && r.push(i);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function $u(e, t, r, n) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(n) +
      "].  Please separate it out to the ") +
    ("`to." + r + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function aE(e) {
  return e.filter(
    (t, r) => r === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function E0(e, t) {
  let r = aE(e);
  return t
    ? r.map((n, i) => (i === e.length - 1 ? n.pathname : n.pathnameBase))
    : r.map((n) => n.pathnameBase);
}
function k0(e, t, r, n) {
  n === void 0 && (n = !1);
  let i;
  typeof e == "string"
    ? (i = Qi(e))
    : ((i = oa({}, e)),
      Ze(
        !i.pathname || !i.pathname.includes("?"),
        $u("?", "pathname", "search", i)
      ),
      Ze(
        !i.pathname || !i.pathname.includes("#"),
        $u("#", "pathname", "hash", i)
      ),
      Ze(!i.search || !i.search.includes("#"), $u("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    l = o ? "/" : i.pathname,
    s;
  if (l == null) s = r;
  else {
    let g = t.length - 1;
    if (!n && l.startsWith("..")) {
      let p = l.split("/");
      for (; p[0] === ".."; ) p.shift(), (g -= 1);
      i.pathname = p.join("/");
    }
    s = g >= 0 ? t[g] : "/";
  }
  let c = iE(i, s),
    f = l && l !== "/" && l.endsWith("/"),
    h = (o || l === ".") && r.endsWith("/");
  return !c.pathname.endsWith("/") && (f || h) && (c.pathname += "/"), c;
}
const wn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  lE = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  sE = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  uE = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function cE(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const C0 = ["post", "put", "patch", "delete"];
new Set(C0);
const fE = ["get", ...C0];
new Set(fE);
/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function aa() {
  return (
    (aa = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    aa.apply(this, arguments)
  );
}
const Cd = U.createContext(null),
  dE = U.createContext(null),
  Gn = U.createContext(null),
  bs = U.createContext(null),
  Jn = U.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  b0 = U.createContext(null);
function pE(e, t) {
  let { relative: r } = t === void 0 ? {} : t;
  pa() || Ze(!1);
  let { basename: n, navigator: i } = U.useContext(Gn),
    { hash: o, pathname: l, search: s } = O0(e, { relative: r }),
    c = l;
  return (
    n !== "/" && (c = l === "/" ? n : wn([n, l])),
    i.createHref({ pathname: c, search: s, hash: o })
  );
}
function pa() {
  return U.useContext(bs) != null;
}
function ha() {
  return pa() || Ze(!1), U.useContext(bs).location;
}
function N0(e) {
  U.useContext(Gn).static || U.useLayoutEffect(e);
}
function hE() {
  let { isDataRoute: e } = U.useContext(Jn);
  return e ? NE() : mE();
}
function mE() {
  pa() || Ze(!1);
  let e = U.useContext(Cd),
    { basename: t, future: r, navigator: n } = U.useContext(Gn),
    { matches: i } = U.useContext(Jn),
    { pathname: o } = ha(),
    l = JSON.stringify(E0(i, r.v7_relativeSplatPath)),
    s = U.useRef(!1);
  return (
    N0(() => {
      s.current = !0;
    }),
    U.useCallback(
      function (f, h) {
        if ((h === void 0 && (h = {}), !s.current)) return;
        if (typeof f == "number") {
          n.go(f);
          return;
        }
        let g = k0(f, JSON.parse(l), o, h.relative === "path");
        e == null &&
          t !== "/" &&
          (g.pathname = g.pathname === "/" ? t : wn([t, g.pathname])),
          (h.replace ? n.replace : n.push)(g, h.state, h);
      },
      [t, n, l, o, e]
    )
  );
}
function O0(e, t) {
  let { relative: r } = t === void 0 ? {} : t,
    { future: n } = U.useContext(Gn),
    { matches: i } = U.useContext(Jn),
    { pathname: o } = ha(),
    l = JSON.stringify(E0(i, n.v7_relativeSplatPath));
  return U.useMemo(() => k0(e, JSON.parse(l), o, r === "path"), [e, l, o, r]);
}
function vE(e, t) {
  return gE(e, t);
}
function gE(e, t, r, n) {
  pa() || Ze(!1);
  let { navigator: i } = U.useContext(Gn),
    { matches: o } = U.useContext(Jn),
    l = o[o.length - 1],
    s = l ? l.params : {};
  l && l.pathname;
  let c = l ? l.pathnameBase : "/";
  l && l.route;
  let f = ha(),
    h;
  if (t) {
    var g;
    let b = typeof t == "string" ? Qi(t) : t;
    c === "/" || ((g = b.pathname) != null && g.startsWith(c)) || Ze(!1),
      (h = b);
  } else h = f;
  let p = h.pathname || "/",
    x = p;
  if (c !== "/") {
    let b = c.replace(/^\//, "").split("/");
    x = "/" + p.replace(/^\//, "").split("/").slice(b.length).join("/");
  }
  let w = HS(e, { pathname: x }),
    k = SE(
      w &&
        w.map((b) =>
          Object.assign({}, b, {
            params: Object.assign({}, s, b.params),
            pathname: wn([
              c,
              i.encodeLocation
                ? i.encodeLocation(b.pathname).pathname
                : b.pathname,
            ]),
            pathnameBase:
              b.pathnameBase === "/"
                ? c
                : wn([
                    c,
                    i.encodeLocation
                      ? i.encodeLocation(b.pathnameBase).pathname
                      : b.pathnameBase,
                  ]),
          })
        ),
      o,
      r,
      n
    );
  return t && k
    ? U.createElement(
        bs.Provider,
        {
          value: {
            location: aa(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              h
            ),
            navigationType: cn.Pop,
          },
        },
        k
      )
    : k;
}
function yE() {
  let e = bE(),
    t = cE(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return U.createElement(
    U.Fragment,
    null,
    U.createElement("h2", null, "Unexpected Application Error!"),
    U.createElement("h3", { style: { fontStyle: "italic" } }, t),
    r ? U.createElement("pre", { style: i }, r) : null,
    null
  );
}
const xE = U.createElement(yE, null);
class wE extends U.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location ||
      (r.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : r.error,
          location: r.location,
          revalidation: t.revalidation || r.revalidation,
        };
  }
  componentDidCatch(t, r) {
    console.error(
      "React Router caught the following error during render",
      t,
      r
    );
  }
  render() {
    return this.state.error !== void 0
      ? U.createElement(
          Jn.Provider,
          { value: this.props.routeContext },
          U.createElement(b0.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function _E(e) {
  let { routeContext: t, match: r, children: n } = e,
    i = U.useContext(Cd);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = r.route.id),
    U.createElement(Jn.Provider, { value: t }, n)
  );
}
function SE(e, t, r, n) {
  var i;
  if (
    (t === void 0 && (t = []),
    r === void 0 && (r = null),
    n === void 0 && (n = null),
    e == null)
  ) {
    var o;
    if ((o = r) != null && o.errors) e = r.matches;
    else return null;
  }
  let l = e,
    s = (i = r) == null ? void 0 : i.errors;
  if (s != null) {
    let h = l.findIndex(
      (g) => g.route.id && (s == null ? void 0 : s[g.route.id]) !== void 0
    );
    h >= 0 || Ze(!1), (l = l.slice(0, Math.min(l.length, h + 1)));
  }
  let c = !1,
    f = -1;
  if (r && n && n.v7_partialHydration)
    for (let h = 0; h < l.length; h++) {
      let g = l[h];
      if (
        ((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (f = h),
        g.route.id)
      ) {
        let { loaderData: p, errors: x } = r,
          w =
            g.route.loader &&
            p[g.route.id] === void 0 &&
            (!x || x[g.route.id] === void 0);
        if (g.route.lazy || w) {
          (c = !0), f >= 0 ? (l = l.slice(0, f + 1)) : (l = [l[0]]);
          break;
        }
      }
    }
  return l.reduceRight((h, g, p) => {
    let x,
      w = !1,
      k = null,
      b = null;
    r &&
      ((x = s && g.route.id ? s[g.route.id] : void 0),
      (k = g.route.errorElement || xE),
      c &&
        (f < 0 && p === 0
          ? ((w = !0), (b = null))
          : f === p &&
            ((w = !0), (b = g.route.hydrateFallbackElement || null))));
    let S = t.concat(l.slice(0, p + 1)),
      _ = () => {
        let E;
        return (
          x
            ? (E = k)
            : w
            ? (E = b)
            : g.route.Component
            ? (E = U.createElement(g.route.Component, null))
            : g.route.element
            ? (E = g.route.element)
            : (E = h),
          U.createElement(_E, {
            match: g,
            routeContext: { outlet: h, matches: S, isDataRoute: r != null },
            children: E,
          })
        );
      };
    return r && (g.route.ErrorBoundary || g.route.errorElement || p === 0)
      ? U.createElement(wE, {
          location: r.location,
          revalidation: r.revalidation,
          component: k,
          error: x,
          children: _(),
          routeContext: { outlet: null, matches: S, isDataRoute: !0 },
        })
      : _();
  }, null);
}
var T0 = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(T0 || {}),
  is = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(is || {});
function EE(e) {
  let t = U.useContext(Cd);
  return t || Ze(!1), t;
}
function kE(e) {
  let t = U.useContext(dE);
  return t || Ze(!1), t;
}
function CE(e) {
  let t = U.useContext(Jn);
  return t || Ze(!1), t;
}
function D0(e) {
  let t = CE(),
    r = t.matches[t.matches.length - 1];
  return r.route.id || Ze(!1), r.route.id;
}
function bE() {
  var e;
  let t = U.useContext(b0),
    r = kE(is.UseRouteError),
    n = D0(is.UseRouteError);
  return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[n];
}
function NE() {
  let { router: e } = EE(T0.UseNavigateStable),
    t = D0(is.UseNavigateStable),
    r = U.useRef(!1);
  return (
    N0(() => {
      r.current = !0;
    }),
    U.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          r.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, aa({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function en(e) {
  Ze(!1);
}
function OE(e) {
  let {
    basename: t = "/",
    children: r = null,
    location: n,
    navigationType: i = cn.Pop,
    navigator: o,
    static: l = !1,
    future: s,
  } = e;
  pa() && Ze(!1);
  let c = t.replace(/^\/*/, "/"),
    f = U.useMemo(
      () => ({
        basename: c,
        navigator: o,
        static: l,
        future: aa({ v7_relativeSplatPath: !1 }, s),
      }),
      [c, s, o, l]
    );
  typeof n == "string" && (n = Qi(n));
  let {
      pathname: h = "/",
      search: g = "",
      hash: p = "",
      state: x = null,
      key: w = "default",
    } = n,
    k = U.useMemo(() => {
      let b = kd(h, c);
      return b == null
        ? null
        : {
            location: { pathname: b, search: g, hash: p, state: x, key: w },
            navigationType: i,
          };
    }, [c, h, g, p, x, w, i]);
  return k == null
    ? null
    : U.createElement(
        Gn.Provider,
        { value: f },
        U.createElement(bs.Provider, { children: r, value: k })
      );
}
function TE(e) {
  let { children: t, location: r } = e;
  return vE(ff(t), r);
}
new Promise(() => {});
function ff(e, t) {
  t === void 0 && (t = []);
  let r = [];
  return (
    U.Children.forEach(e, (n, i) => {
      if (!U.isValidElement(n)) return;
      let o = [...t, i];
      if (n.type === U.Fragment) {
        r.push.apply(r, ff(n.props.children, o));
        return;
      }
      n.type !== en && Ze(!1), !n.props.index || !n.props.children || Ze(!1);
      let l = {
        id: n.props.id || o.join("-"),
        caseSensitive: n.props.caseSensitive,
        element: n.props.element,
        Component: n.props.Component,
        index: n.props.index,
        path: n.props.path,
        loader: n.props.loader,
        action: n.props.action,
        errorElement: n.props.errorElement,
        ErrorBoundary: n.props.ErrorBoundary,
        hasErrorBoundary:
          n.props.ErrorBoundary != null || n.props.errorElement != null,
        shouldRevalidate: n.props.shouldRevalidate,
        handle: n.props.handle,
        lazy: n.props.lazy,
      };
      n.props.children && (l.children = ff(n.props.children, o)), r.push(l);
    }),
    r
  );
}
/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function df() {
  return (
    (df = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    df.apply(this, arguments)
  );
}
function DE(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    o;
  for (o = 0; o < n.length; o++)
    (i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function LE(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function BE(e, t) {
  return e.button === 0 && (!t || t === "_self") && !LE(e);
}
const RE = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  ME = "6";
try {
  window.__reactRouterVersion = ME;
} catch {}
const IE = "startTransition",
  em = T1[IE];
function jE(e) {
  let { basename: t, children: r, future: n, window: i } = e,
    o = U.useRef();
  o.current == null && (o.current = KS({ window: i, v5Compat: !0 }));
  let l = o.current,
    [s, c] = U.useState({ action: l.action, location: l.location }),
    { v7_startTransition: f } = n || {},
    h = U.useCallback(
      (g) => {
        f && em ? em(() => c(g)) : c(g);
      },
      [c, f]
    );
  return (
    U.useLayoutEffect(() => l.listen(h), [l, h]),
    U.createElement(OE, {
      basename: t,
      children: r,
      location: s.location,
      navigationType: s.action,
      navigator: l,
      future: n,
    })
  );
}
const AE =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  PE = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  nt = U.forwardRef(function (t, r) {
    let {
        onClick: n,
        relative: i,
        reloadDocument: o,
        replace: l,
        state: s,
        target: c,
        to: f,
        preventScrollReset: h,
        unstable_viewTransition: g,
      } = t,
      p = DE(t, RE),
      { basename: x } = U.useContext(Gn),
      w,
      k = !1;
    if (typeof f == "string" && PE.test(f) && ((w = f), AE))
      try {
        let E = new URL(window.location.href),
          N = f.startsWith("//") ? new URL(E.protocol + f) : new URL(f),
          L = kd(N.pathname, x);
        N.origin === E.origin && L != null
          ? (f = L + N.search + N.hash)
          : (k = !0);
      } catch {}
    let b = pE(f, { relative: i }),
      S = FE(f, {
        replace: l,
        state: s,
        target: c,
        preventScrollReset: h,
        relative: i,
        unstable_viewTransition: g,
      });
    function _(E) {
      n && n(E), E.defaultPrevented || S(E);
    }
    return U.createElement(
      "a",
      df({}, p, { href: w || b, onClick: k || o ? n : _, ref: r, target: c })
    );
  });
var tm;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(tm || (tm = {}));
var rm;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(rm || (rm = {}));
function FE(e, t) {
  let {
      target: r,
      replace: n,
      state: i,
      preventScrollReset: o,
      relative: l,
      unstable_viewTransition: s,
    } = t === void 0 ? {} : t,
    c = hE(),
    f = ha(),
    h = O0(e, { relative: l });
  return U.useCallback(
    (g) => {
      if (BE(g, r)) {
        g.preventDefault();
        let p = n !== void 0 ? n : ns(f) === ns(h);
        c(e, {
          replace: p,
          state: i,
          preventScrollReset: o,
          relative: l,
          unstable_viewTransition: s,
        });
      }
    },
    [f, c, h, n, i, r, e, o, l, s]
  );
}
const $E = ({ active: e, setActive: t }) =>
  v.jsx("div", {
    className: "relative z-40 font-poppins",
    children: v.jsxs("div", {
      className: "w-full lg:h-full md:h-[600px] h-[500px] relative ",
      children: [
        v.jsx("div", {
          className:
            "absolute bg-gradient-to-b top-0 left-0 right-0 bottom-0 from-black to-transparent flex flex-col justify-start items-center",
          children: v.jsxs("div", {
            className: "md:mt-40 mt-[100px]   flex flex-col items-center",
            children: [
              v.jsx("p", {
                className:
                  "font-bold lg:text-[46px] md:text-[32px] text-[24px] text-white text-center px-4 md:px-0 ",
                children: "Find The Right People For Your Team",
              }),
              v.jsx("p", {
                className:
                  "font-medium lg:text-[24px] md:[18px] text-[14px] mt-4 text-white text-center px-4 md:px-0 ",
                children:
                  "Connecting Talent with Opportunity, Fuelling Innovation with Top Tech Minds.",
              }),
              v.jsx(nt, {
                to: "/searchjobs",
                onClick: () => t("Search Jobs"),
                className: `md:w-[210px] md:h-[54px] w-[170px] h-[44px] relative bg-white rounded-full border \r
          border-transparent md:text-[20px] text-[16px] md:mt-16 mt-8 text-black font-[600] flex justify-center\r
          items-center transition-colors overflow-hidden before:absolute before:left-0 before:top-0  before:w-full \r
          before:h-full before:hover:border-white before:origin-left before:scale-x-0 before:bg-black before:rounded-full \r
          before:transition-transform before:duration-500 before:text-white hover:text-white before:-z-10 z-10 before:hover:rounded-full \r
          before:hover:scale-x-100  `,
                children: "Search Job",
              }),
            ],
          }),
        }),
        v.jsx("img", {
          src: "/images/heroImg.png",
          className: "w-full h-full  ",
        }),
      ],
    }),
  });
var L0 = { exports: {} };
(function (e, t) {
  (function (r, n) {
    e.exports = n();
  })($r, function () {
    return (function (r) {
      function n(o) {
        if (i[o]) return i[o].exports;
        var l = (i[o] = { exports: {}, id: o, loaded: !1 });
        return (
          r[o].call(l.exports, l, l.exports, n), (l.loaded = !0), l.exports
        );
      }
      var i = {};
      return (n.m = r), (n.c = i), (n.p = "dist/"), n(0);
    })([
      function (r, n, i) {
        function o(I) {
          return I && I.__esModule ? I : { default: I };
        }
        var l =
            Object.assign ||
            function (I) {
              for (var G = 1; G < arguments.length; G++) {
                var Z = arguments[G];
                for (var ee in Z)
                  Object.prototype.hasOwnProperty.call(Z, ee) &&
                    (I[ee] = Z[ee]);
              }
              return I;
            },
          s = i(1),
          c = (o(s), i(6)),
          f = o(c),
          h = i(7),
          g = o(h),
          p = i(8),
          x = o(p),
          w = i(9),
          k = o(w),
          b = i(10),
          S = o(b),
          _ = i(11),
          E = o(_),
          N = i(14),
          L = o(N),
          A = [],
          K = !1,
          F = {
            offset: 120,
            delay: 0,
            easing: "ease",
            duration: 400,
            disable: !1,
            once: !1,
            startEvent: "DOMContentLoaded",
            throttleDelay: 99,
            debounceDelay: 50,
            disableMutationObserver: !1,
          },
          H = function () {
            var I =
              arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
            if ((I && (K = !0), K))
              return (A = (0, E.default)(A, F)), (0, S.default)(A, F.once), A;
          },
          P = function () {
            (A = (0, L.default)()), H();
          },
          M = function () {
            A.forEach(function (I, G) {
              I.node.removeAttribute("data-aos"),
                I.node.removeAttribute("data-aos-easing"),
                I.node.removeAttribute("data-aos-duration"),
                I.node.removeAttribute("data-aos-delay");
            });
          },
          D = function (I) {
            return (
              I === !0 ||
              (I === "mobile" && k.default.mobile()) ||
              (I === "phone" && k.default.phone()) ||
              (I === "tablet" && k.default.tablet()) ||
              (typeof I == "function" && I() === !0)
            );
          },
          j = function (I) {
            (F = l(F, I)), (A = (0, L.default)());
            var G = document.all && !window.atob;
            return D(F.disable) || G
              ? M()
              : (F.disableMutationObserver ||
                  x.default.isSupported() ||
                  (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),
                  (F.disableMutationObserver = !0)),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-easing", F.easing),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-duration", F.duration),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-delay", F.delay),
                F.startEvent === "DOMContentLoaded" &&
                ["complete", "interactive"].indexOf(document.readyState) > -1
                  ? H(!0)
                  : F.startEvent === "load"
                  ? window.addEventListener(F.startEvent, function () {
                      H(!0);
                    })
                  : document.addEventListener(F.startEvent, function () {
                      H(!0);
                    }),
                window.addEventListener(
                  "resize",
                  (0, g.default)(H, F.debounceDelay, !0)
                ),
                window.addEventListener(
                  "orientationchange",
                  (0, g.default)(H, F.debounceDelay, !0)
                ),
                window.addEventListener(
                  "scroll",
                  (0, f.default)(function () {
                    (0, S.default)(A, F.once);
                  }, F.throttleDelay)
                ),
                F.disableMutationObserver || x.default.ready("[data-aos]", P),
                A);
          };
        r.exports = { init: j, refresh: H, refreshHard: P };
      },
      function (r, n) {},
      ,
      ,
      ,
      ,
      function (r, n) {
        (function (i) {
          function o(D, j, I) {
            function G(oe) {
              var fe = ve,
                Te = te;
              return (ve = te = void 0), (ze = oe), (ue = D.apply(Te, fe));
            }
            function Z(oe) {
              return (ze = oe), (be = setTimeout(q, j)), et ? G(oe) : ue;
            }
            function ee(oe) {
              var fe = oe - Oe,
                Te = oe - ze,
                xt = j - fe;
              return Le ? P(xt, ne - Te) : xt;
            }
            function z(oe) {
              var fe = oe - Oe,
                Te = oe - ze;
              return Oe === void 0 || fe >= j || fe < 0 || (Le && Te >= ne);
            }
            function q() {
              var oe = M();
              return z(oe) ? V(oe) : void (be = setTimeout(q, ee(oe)));
            }
            function V(oe) {
              return (be = void 0), le && ve ? G(oe) : ((ve = te = void 0), ue);
            }
            function Y() {
              be !== void 0 && clearTimeout(be),
                (ze = 0),
                (ve = Oe = te = be = void 0);
            }
            function ae() {
              return be === void 0 ? ue : V(M());
            }
            function Ee() {
              var oe = M(),
                fe = z(oe);
              if (((ve = arguments), (te = this), (Oe = oe), fe)) {
                if (be === void 0) return Z(Oe);
                if (Le) return (be = setTimeout(q, j)), G(Oe);
              }
              return be === void 0 && (be = setTimeout(q, j)), ue;
            }
            var ve,
              te,
              ne,
              ue,
              be,
              Oe,
              ze = 0,
              et = !1,
              Le = !1,
              le = !0;
            if (typeof D != "function") throw new TypeError(p);
            return (
              (j = h(j) || 0),
              s(I) &&
                ((et = !!I.leading),
                (Le = "maxWait" in I),
                (ne = Le ? H(h(I.maxWait) || 0, j) : ne),
                (le = "trailing" in I ? !!I.trailing : le)),
              (Ee.cancel = Y),
              (Ee.flush = ae),
              Ee
            );
          }
          function l(D, j, I) {
            var G = !0,
              Z = !0;
            if (typeof D != "function") throw new TypeError(p);
            return (
              s(I) &&
                ((G = "leading" in I ? !!I.leading : G),
                (Z = "trailing" in I ? !!I.trailing : Z)),
              o(D, j, { leading: G, maxWait: j, trailing: Z })
            );
          }
          function s(D) {
            var j = typeof D > "u" ? "undefined" : g(D);
            return !!D && (j == "object" || j == "function");
          }
          function c(D) {
            return !!D && (typeof D > "u" ? "undefined" : g(D)) == "object";
          }
          function f(D) {
            return (
              (typeof D > "u" ? "undefined" : g(D)) == "symbol" ||
              (c(D) && F.call(D) == w)
            );
          }
          function h(D) {
            if (typeof D == "number") return D;
            if (f(D)) return x;
            if (s(D)) {
              var j = typeof D.valueOf == "function" ? D.valueOf() : D;
              D = s(j) ? j + "" : j;
            }
            if (typeof D != "string") return D === 0 ? D : +D;
            D = D.replace(k, "");
            var I = S.test(D);
            return I || _.test(D)
              ? E(D.slice(2), I ? 2 : 8)
              : b.test(D)
              ? x
              : +D;
          }
          var g =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (D) {
                    return typeof D;
                  }
                : function (D) {
                    return D &&
                      typeof Symbol == "function" &&
                      D.constructor === Symbol &&
                      D !== Symbol.prototype
                      ? "symbol"
                      : typeof D;
                  },
            p = "Expected a function",
            x = NaN,
            w = "[object Symbol]",
            k = /^\s+|\s+$/g,
            b = /^[-+]0x[0-9a-f]+$/i,
            S = /^0b[01]+$/i,
            _ = /^0o[0-7]+$/i,
            E = parseInt,
            N =
              (typeof i > "u" ? "undefined" : g(i)) == "object" &&
              i &&
              i.Object === Object &&
              i,
            L =
              (typeof self > "u" ? "undefined" : g(self)) == "object" &&
              self &&
              self.Object === Object &&
              self,
            A = N || L || Function("return this")(),
            K = Object.prototype,
            F = K.toString,
            H = Math.max,
            P = Math.min,
            M = function () {
              return A.Date.now();
            };
          r.exports = l;
        }).call(
          n,
          (function () {
            return this;
          })()
        );
      },
      function (r, n) {
        (function (i) {
          function o(M, D, j) {
            function I(le) {
              var oe = Ee,
                fe = ve;
              return (Ee = ve = void 0), (Oe = le), (ne = M.apply(fe, oe));
            }
            function G(le) {
              return (Oe = le), (ue = setTimeout(z, D)), ze ? I(le) : ne;
            }
            function Z(le) {
              var oe = le - be,
                fe = le - Oe,
                Te = D - oe;
              return et ? H(Te, te - fe) : Te;
            }
            function ee(le) {
              var oe = le - be,
                fe = le - Oe;
              return be === void 0 || oe >= D || oe < 0 || (et && fe >= te);
            }
            function z() {
              var le = P();
              return ee(le) ? q(le) : void (ue = setTimeout(z, Z(le)));
            }
            function q(le) {
              return (ue = void 0), Le && Ee ? I(le) : ((Ee = ve = void 0), ne);
            }
            function V() {
              ue !== void 0 && clearTimeout(ue),
                (Oe = 0),
                (Ee = be = ve = ue = void 0);
            }
            function Y() {
              return ue === void 0 ? ne : q(P());
            }
            function ae() {
              var le = P(),
                oe = ee(le);
              if (((Ee = arguments), (ve = this), (be = le), oe)) {
                if (ue === void 0) return G(be);
                if (et) return (ue = setTimeout(z, D)), I(be);
              }
              return ue === void 0 && (ue = setTimeout(z, D)), ne;
            }
            var Ee,
              ve,
              te,
              ne,
              ue,
              be,
              Oe = 0,
              ze = !1,
              et = !1,
              Le = !0;
            if (typeof M != "function") throw new TypeError(g);
            return (
              (D = f(D) || 0),
              l(j) &&
                ((ze = !!j.leading),
                (et = "maxWait" in j),
                (te = et ? F(f(j.maxWait) || 0, D) : te),
                (Le = "trailing" in j ? !!j.trailing : Le)),
              (ae.cancel = V),
              (ae.flush = Y),
              ae
            );
          }
          function l(M) {
            var D = typeof M > "u" ? "undefined" : h(M);
            return !!M && (D == "object" || D == "function");
          }
          function s(M) {
            return !!M && (typeof M > "u" ? "undefined" : h(M)) == "object";
          }
          function c(M) {
            return (
              (typeof M > "u" ? "undefined" : h(M)) == "symbol" ||
              (s(M) && K.call(M) == x)
            );
          }
          function f(M) {
            if (typeof M == "number") return M;
            if (c(M)) return p;
            if (l(M)) {
              var D = typeof M.valueOf == "function" ? M.valueOf() : M;
              M = l(D) ? D + "" : D;
            }
            if (typeof M != "string") return M === 0 ? M : +M;
            M = M.replace(w, "");
            var j = b.test(M);
            return j || S.test(M)
              ? _(M.slice(2), j ? 2 : 8)
              : k.test(M)
              ? p
              : +M;
          }
          var h =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (M) {
                    return typeof M;
                  }
                : function (M) {
                    return M &&
                      typeof Symbol == "function" &&
                      M.constructor === Symbol &&
                      M !== Symbol.prototype
                      ? "symbol"
                      : typeof M;
                  },
            g = "Expected a function",
            p = NaN,
            x = "[object Symbol]",
            w = /^\s+|\s+$/g,
            k = /^[-+]0x[0-9a-f]+$/i,
            b = /^0b[01]+$/i,
            S = /^0o[0-7]+$/i,
            _ = parseInt,
            E =
              (typeof i > "u" ? "undefined" : h(i)) == "object" &&
              i &&
              i.Object === Object &&
              i,
            N =
              (typeof self > "u" ? "undefined" : h(self)) == "object" &&
              self &&
              self.Object === Object &&
              self,
            L = E || N || Function("return this")(),
            A = Object.prototype,
            K = A.toString,
            F = Math.max,
            H = Math.min,
            P = function () {
              return L.Date.now();
            };
          r.exports = o;
        }).call(
          n,
          (function () {
            return this;
          })()
        );
      },
      function (r, n) {
        function i(h) {
          var g = void 0,
            p = void 0;
          for (g = 0; g < h.length; g += 1)
            if (
              ((p = h[g]),
              (p.dataset && p.dataset.aos) || (p.children && i(p.children)))
            )
              return !0;
          return !1;
        }
        function o() {
          return (
            window.MutationObserver ||
            window.WebKitMutationObserver ||
            window.MozMutationObserver
          );
        }
        function l() {
          return !!o();
        }
        function s(h, g) {
          var p = window.document,
            x = o(),
            w = new x(c);
          (f = g),
            w.observe(p.documentElement, {
              childList: !0,
              subtree: !0,
              removedNodes: !0,
            });
        }
        function c(h) {
          h &&
            h.forEach(function (g) {
              var p = Array.prototype.slice.call(g.addedNodes),
                x = Array.prototype.slice.call(g.removedNodes),
                w = p.concat(x);
              if (i(w)) return f();
            });
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var f = function () {};
        n.default = { isSupported: l, ready: s };
      },
      function (r, n) {
        function i(p, x) {
          if (!(p instanceof x))
            throw new TypeError("Cannot call a class as a function");
        }
        function o() {
          return navigator.userAgent || navigator.vendor || window.opera || "";
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var l = (function () {
            function p(x, w) {
              for (var k = 0; k < w.length; k++) {
                var b = w[k];
                (b.enumerable = b.enumerable || !1),
                  (b.configurable = !0),
                  "value" in b && (b.writable = !0),
                  Object.defineProperty(x, b.key, b);
              }
            }
            return function (x, w, k) {
              return w && p(x.prototype, w), k && p(x, k), x;
            };
          })(),
          s =
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
          c =
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          f =
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
          h =
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          g = (function () {
            function p() {
              i(this, p);
            }
            return (
              l(p, [
                {
                  key: "phone",
                  value: function () {
                    var x = o();
                    return !(!s.test(x) && !c.test(x.substr(0, 4)));
                  },
                },
                {
                  key: "mobile",
                  value: function () {
                    var x = o();
                    return !(!f.test(x) && !h.test(x.substr(0, 4)));
                  },
                },
                {
                  key: "tablet",
                  value: function () {
                    return this.mobile() && !this.phone();
                  },
                },
              ]),
              p
            );
          })();
        n.default = new g();
      },
      function (r, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var i = function (l, s, c) {
            var f = l.node.getAttribute("data-aos-once");
            s > l.position
              ? l.node.classList.add("aos-animate")
              : typeof f < "u" &&
                (f === "false" || (!c && f !== "true")) &&
                l.node.classList.remove("aos-animate");
          },
          o = function (l, s) {
            var c = window.pageYOffset,
              f = window.innerHeight;
            l.forEach(function (h, g) {
              i(h, f + c, s);
            });
          };
        n.default = o;
      },
      function (r, n, i) {
        function o(f) {
          return f && f.__esModule ? f : { default: f };
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var l = i(12),
          s = o(l),
          c = function (f, h) {
            return (
              f.forEach(function (g, p) {
                g.node.classList.add("aos-init"),
                  (g.position = (0, s.default)(g.node, h.offset));
              }),
              f
            );
          };
        n.default = c;
      },
      function (r, n, i) {
        function o(f) {
          return f && f.__esModule ? f : { default: f };
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var l = i(13),
          s = o(l),
          c = function (f, h) {
            var g = 0,
              p = 0,
              x = window.innerHeight,
              w = {
                offset: f.getAttribute("data-aos-offset"),
                anchor: f.getAttribute("data-aos-anchor"),
                anchorPlacement: f.getAttribute("data-aos-anchor-placement"),
              };
            switch (
              (w.offset && !isNaN(w.offset) && (p = parseInt(w.offset)),
              w.anchor &&
                document.querySelectorAll(w.anchor) &&
                (f = document.querySelectorAll(w.anchor)[0]),
              (g = (0, s.default)(f).top),
              w.anchorPlacement)
            ) {
              case "top-bottom":
                break;
              case "center-bottom":
                g += f.offsetHeight / 2;
                break;
              case "bottom-bottom":
                g += f.offsetHeight;
                break;
              case "top-center":
                g += x / 2;
                break;
              case "bottom-center":
                g += x / 2 + f.offsetHeight;
                break;
              case "center-center":
                g += x / 2 + f.offsetHeight / 2;
                break;
              case "top-top":
                g += x;
                break;
              case "bottom-top":
                g += f.offsetHeight + x;
                break;
              case "center-top":
                g += f.offsetHeight / 2 + x;
            }
            return w.anchorPlacement || w.offset || isNaN(h) || (p = h), g + p;
          };
        n.default = c;
      },
      function (r, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var i = function (o) {
          for (
            var l = 0, s = 0;
            o && !isNaN(o.offsetLeft) && !isNaN(o.offsetTop);

          )
            (l += o.offsetLeft - (o.tagName != "BODY" ? o.scrollLeft : 0)),
              (s += o.offsetTop - (o.tagName != "BODY" ? o.scrollTop : 0)),
              (o = o.offsetParent);
          return { top: s, left: l };
        };
        n.default = i;
      },
      function (r, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var i = function (o) {
          return (
            (o = o || document.querySelectorAll("[data-aos]")),
            Array.prototype.map.call(o, function (l) {
              return { node: l };
            })
          );
        };
        n.default = i;
      },
    ]);
  });
})(L0);
var KE = L0.exports;
const B0 = og(KE),
  zE = () => {
    U.useEffect(() => {
      B0.init({ duration: 3e3 });
    }, []);
    const e = () => {
      window.scrollTo(0, 0);
    };
    return v.jsxs("div", {
      className: "bg-white flex flex-col justify-center  items-center my-10 ",
      children: [
        v.jsx("p", {
          className:
            "font-poppins text-black font-[700] lg:text-[38px] md:text-[24px] text-[16px] text-center px-2 md:px-8",
          "data-aos": "zoom-out",
          children:
            "Welcome to your gateway for connecting with top-tier talent in the UAE. We bridge the gap between exceptional companies and outstanding employees.",
        }),
        v.jsx("p", {
          className:
            "font-poppins text-[#B3B3B3] font-[500] lg:text-[20px] md:text-[18px] text-[12px] text-center px-2 md:px-0 mt-3 mb-[50px] md:mb-[100px]",
          "data-aos": "zoom-out",
          children:
            "Your success starts with the right connections – and we make them happen.",
        }),
        v.jsx("div", {
          className: "container w-[90%]   bg-white flex",
          children: v.jsxs("div", {
            className: "w-full flex lg:flex-row flex-col gap-x-10 gap-y-10",
            children: [
              v.jsxs("div", {
                className: "lg:w-[50%] w-full flex flex-col gap-y-10",
                children: [
                  v.jsxs("div", {
                    className:
                      "w-[100%] md:h-[692px] h-[520px] overflow-hidden md:rounded-[40px] rounded-[30px] relative z-40 group",
                    children: [
                      v.jsxs("div", {
                        className:
                          "w-full h-full absolute z-50 top-0 left-0 bottom-0 right-0 md:rounded-[40px] rounded-[30px] from-black to-transparent bg-gradient-to-b ",
                        children: [
                          v.jsx("p", {
                            className:
                              "tag md:text-[30px] text-[26px] font-[700] font-poppins text-white pt-8  md:px-14 px-7 opacity-0 transition-all duration-1500 ease-in-out transform translate-y-[-100%] group-hover:opacity-100 group-hover:translate-y-0",
                            children: "Recruitment & Outsourcing",
                          }),
                          v.jsx("p", {
                            className:
                              "md:text-[22px] text-[18px] font-[400]  text-white pt-5 md:px-14 px-7 opacity-0 transition-all duration-1500 ease-in-out transform translate-x-[-100%] group-hover:opacity-100 group-hover:translate-x-0 ",
                            children:
                              "Our recruitment and outsourcing services provide you with flexible solutions to meet your staffing needs. We handle the entire process from sourcing to onboarding, ensuring you have the right talent when you need it.  ",
                          }),
                          v.jsx("div", {
                            className: "absolute right-10 bottom-10",
                            children: v.jsx(nt, {
                              to: "/recruitment",
                              onClick: () => e(),
                              className: `w-[210px] h-[54px] text-white bg-black flex justify-center items-center opacity-0 transition-all duration-1500 ease-in-out transform -translate-x-[-100%] group-hover:opacity-100 group-hover:-translate-x-0 relative rounded-full border \r
          border-transparent text-[20px]  md:mt-16 mt-8  font-[500] \r
           overflow-hidden before:absolute before:left-0 before:top-0  before:w-full \r
          before:h-full before:hover:border-white before:origin-left before:scale-x-0 before:bg-white before:rounded-full \r
          before:transition-transform before:duration-500 before:text-white hover:text-black before:-z-10 z-10 before:hover:rounded-full \r
          before:hover:scale-x-100  `,
                              children: "Explore",
                            }),
                          }),
                        ],
                      }),
                      v.jsx("img", {
                        src: "/images/recruitment.png",
                        className:
                          "w-full h-full transition-all duration-1000 z-40 md:rounded-[40px] rounded-[30px] group-hover:scale-125",
                      }),
                    ],
                  }),
                  v.jsxs("div", {
                    className:
                      "w-[100%] md:h-[692px] h-[520px] overflow-hidden md:rounded-[40px] rounded-[30px] relative z-40 group",
                    children: [
                      v.jsxs("div", {
                        className:
                          "w-full h-full absolute z-50 top-0 left-0 bottom-0 right-0 md:rounded-[40px] rounded-[30px] from-black to-transparent bg-gradient-to-b ",
                        children: [
                          v.jsx("p", {
                            className:
                              "tag md:text-[30px] text-[26px] font-[700] font-poppins text-white pt-8 md:px-14 px-7 opacity-0 transition-all duration-1500 ease-in-out transform translate-y-[-100%] group-hover:opacity-100 group-hover:translate-y-0",
                            children: "Permanent Recruitment",
                          }),
                          v.jsx("p", {
                            className:
                              "md:text-[22px] text-[18px] font-[400]  text-white pt-5 md:px-14 px-7 opacity-0 transition-all duration-1500 ease-in-out transform translate-x-[-100%] group-hover:opacity-100 group-hover:translate-x-0 ",
                            children:
                              "Our permanent recruitment services are designed to find long-term employees who are the perfect fit for your company. We meticulously screen candidates to ensure they align with your values and goals, helping you build a strong, dedicated team.",
                          }),
                          v.jsx("div", {
                            className: "absolute right-10 bottom-10",
                            children: v.jsx(nt, {
                              to: "/recruitment",
                              onClick: () => e(),
                              className: `w-[210px] h-[54px]  text-white bg-black flex justify-center items-center opacity-0 transition-all duration-1500 ease-in-out transform -translate-x-[-100%] group-hover:opacity-100 group-hover:-translate-x-0 relative rounded-full border \r
          border-transparent text-[20px]  md:mt-16 mt-8  font-[500] \r
           overflow-hidden before:absolute before:left-0 before:top-0  before:w-full \r
          before:h-full before:hover:border-white before:origin-left before:scale-x-0 before:bg-white before:rounded-full \r
          before:transition-transform before:duration-500 before:text-white hover:text-black before:-z-10 z-10 before:hover:rounded-full \r
          before:hover:scale-x-100  `,
                              children: "Explore",
                            }),
                          }),
                        ],
                      }),
                      v.jsx("img", {
                        src: "/images/permanent.png",
                        className:
                          "w-full h-full transition-all duration-1000 z-40 md:rounded-[40px] rounded-[30px] group-hover:scale-125",
                      }),
                    ],
                  }),
                ],
              }),
              v.jsxs("div", {
                className: "lg:w-[50%] w-full lg:mt-40 flex flex-col gap-y-10",
                children: [
                  v.jsxs("div", {
                    className:
                      "w-[100%] md:h-[692px] h-[520px] overflow-hidden md:rounded-[40px] rounded-[30px] relative z-40 group",
                    children: [
                      v.jsxs("div", {
                        className:
                          "w-full h-full absolute z-50 top-0 left-0 bottom-0 right-0 md:rounded-[40px] rounded-[30px] from-black to-transparent bg-gradient-to-b ",
                        children: [
                          v.jsx("p", {
                            className:
                              "tag md:text-[30px] text-[26px] font-[700] font-poppins text-white pt-8 md:px-14 px-7 opacity-0 transition-all duration-1500 ease-in-out transform translate-y-[-100%] group-hover:opacity-100 group-hover:translate-y-0",
                            children: "HR Services",
                          }),
                          v.jsx("p", {
                            className:
                              "md:text-[22px] text-[18px] font-[400]  text-white pt-5 md:px-14 px-7 opacity-0 transition-all duration-1500 ease-in-out transform translate-x-[-100%] group-hover:opacity-100 group-hover:translate-x-0 ",
                            children:
                              "We offer tailored HR solutions to streamline your workforce management, providing expert guidance in employee relations, compliance, and development. Our goal is to empower your HR team to drive organizational success. ",
                          }),
                          v.jsx("div", {
                            className: "absolute right-10 bottom-10",
                            children: v.jsx(nt, {
                              to: "/hrservice",
                              onClick: () => e(),
                              className: `w-[210px] h-[54px]  text-white bg-black flex justify-center items-center opacity-0 transition-all duration-1500 ease-in-out transform -translate-x-[-100%] group-hover:opacity-100 group-hover:-translate-x-0 relative rounded-full border \r
          border-transparent text-[20px]  md:mt-16 mt-8  font-[500] \r
           overflow-hidden before:absolute before:left-0 before:top-0  before:w-full \r
          before:h-full before:hover:border-white before:origin-left before:scale-x-0 before:bg-white before:rounded-full \r
          before:transition-transform before:duration-500 before:text-white hover:text-black before:-z-10 z-10 before:hover:rounded-full \r
          before:hover:scale-x-100  `,
                              children: "Explore",
                            }),
                          }),
                        ],
                      }),
                      v.jsx("img", {
                        src: "/images/HRservices.png",
                        className:
                          "w-full h-full transition-all duration-1000 z-40 md:rounded-[40px] rounded-[30px] group-hover:scale-125",
                      }),
                    ],
                  }),
                  v.jsxs("div", {
                    className:
                      "w-[100%] md:h-[692px] h-[520px] overflow-hidden md:rounded-[40px] rounded-[30px] relative z-40 group",
                    children: [
                      v.jsxs("div", {
                        className:
                          "w-full h-full absolute z-50 top-0 left-0 bottom-0 right-0 md:rounded-[40px] rounded-[30px] from-black to-transparent bg-gradient-to-b ",
                        children: [
                          v.jsx("p", {
                            className:
                              "tag md:text-[30px] text-[26px] font-[700] font-poppins text-white pt-8  md:px-14 px-7 opacity-0 transition-all duration-1500 ease-in-out transform translate-y-[-100%] group-hover:opacity-100 group-hover:translate-y-0",
                            children: "Contract Recruitment",
                          }),
                          v.jsx("p", {
                            className:
                              "md:text-[22px] text-[18px] font-[400]  text-white pt-5 md:px-14 px-7 opacity-0 transition-all duration-1500 ease-in-out transform translate-x-[-100%] group-hover:opacity-100 group-hover:translate-x-0 ",
                            children:
                              "Our contract recruitment services provide you with the flexibility to meet short-term project demands. We connect you with highly skilled professionals ready to contribute immediately, ensuring your projects stay on track and on budget.",
                          }),
                          v.jsx("div", {
                            className: "absolute right-10 bottom-10",
                            children: v.jsx(nt, {
                              to: "/recruitment",
                              onClick: () => e(),
                              className: `w-[210px] h-[54px]  text-white bg-black flex justify-center items-center opacity-0 transition-all duration-1500 ease-in-out transform -translate-x-[-100%] group-hover:opacity-100 group-hover:-translate-x-0 relative rounded-full border \r
          border-transparent text-[20px]  md:mt-16 mt-8  font-[500] \r
           overflow-hidden before:absolute before:left-0 before:top-0  before:w-full \r
          before:h-full before:hover:border-white before:origin-left before:scale-x-0 before:bg-white before:rounded-full \r
          before:transition-transform before:duration-500 before:text-white hover:text-black before:-z-10 z-10 before:hover:rounded-full \r
          before:hover:scale-x-100  `,
                              children: "Explore",
                            }),
                          }),
                        ],
                      }),
                      v.jsx("img", {
                        src: "/images/contract.png",
                        className:
                          "w-full h-full transition-all duration-1000 z-40 md:rounded-[40px] rounded-[30px] group-hover:scale-125",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  UE = () => v.jsxs("div", { children: [v.jsx($E, {}), v.jsx(zE, {})] }),
  HE = () => {
    const [e, t] = U.useState("EN");
    return (
      (window.onload = function () {
        const r = () => {
          new window.google.translate.TranslateElement(
            { pageLanguage: "en", autoDisplay: !0 },
            "google_translate_element"
          );
        };
        var n = document.createElement("script");
        n.setAttribute(
          "src",
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        ),
          document.body.appendChild(n),
          (window.googleTranslateElementInit = r),
          setInterval(() => {
            try {
              (document.getElementById(":1.container").style.transform =
                "scale(0)"),
                (document.getElementById(
                  ":1.container"
                ).parentElement.style.transform = "scale(0)"),
                (document.getElementsByTagName("body")[0].style.top = "0px"),
                (document.getElementById(
                  "google_translate_element"
                ).style.transform = "scale(0)");
            } catch {}
          }, 500);
      }),
      v.jsxs("div", {
        children: [
          v.jsx("div", {
            className:
              "absolute top-0 left-0 scale-0 -translate-y-[400%] w-0 h-0",
            children: v.jsx("div", { id: "google_translate_element" }),
          }),
          v.jsxs("div", {
            className: "flex items-center gap-1 relative cursor-pointer",
            children: [
              v.jsxs("div", {
                className: "flex items-center gap-1",
                onClick: () => {
                  document
                    .getElementById("languageOverlay")
                    .classList.toggle("scale-y-0"),
                    document
                      .getElementById("languageOverlay")
                      .classList.toggle("opacity-0");
                },
                onBlur: () => {
                  document
                    .getElementById("languageOverlay")
                    .classList.add("scale-y-0"),
                    document
                      .getElementById("languageOverlay")
                      .classList.add("opacity-0");
                },
                children: [
                  v.jsx("img", {
                    src: "/images/translate.svg",
                    className: "w-[24px] h-[24px] md:w-[30px] md:h-[30px] ",
                  }),
                  v.jsx("p", {
                    className: "text-white  hidden md:block",
                    children: e,
                  }),
                  v.jsx("svg", {
                    width: "10",
                    height: "9",
                    viewBox: "0 0 11 9",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "hidden md:block",
                    children: v.jsx("path", {
                      d: "M5.55998 8.76855L10.5087 0.986159H0.61127L5.55998 8.76855Z",
                      fill: "#004B95",
                    }),
                  }),
                ],
              }),
              v.jsxs("div", {
                className:
                  "bg-white/70 backdrop-blur border absolute top-10 md:-left-[50%] -left-[170%] scale-y-0 opacity-0 origin-top transition-all duration-300 w-max min-w-[100px] rounded-lg",
                id: "languageOverlay",
                onMouseLeave: () => {
                  document
                    .getElementById("languageOverlay")
                    .classList.add("scale-y-0"),
                    document
                      .getElementById("languageOverlay")
                      .classList.add("opacity-0");
                },
                children: [
                  v.jsx("p", {
                    onClick: () => {
                      let r = "en",
                        n = document.getElementById("google_translate_element");
                      (n.getElementsByTagName("select")[0].value = r),
                        n
                          .getElementsByTagName("select")[0]
                          .dispatchEvent(new Event("change")),
                        (document.getElementById(
                          ":1.container"
                        ).style.transform = "scale(0)"),
                        (document.getElementById(
                          "google_translate_element"
                        ).style.transform = "scale(0)"),
                        t("EN");
                    },
                    className:
                      "px-4 py-2 border-b border-[rgba(166,166,166,0.3)] hover:tracking-[1px]  text-black cursor-pointer text-sm font-medium",
                    children: "English",
                  }),
                  v.jsx("p", {
                    onClick: () => {
                      let r = "ar",
                        n = document.getElementById("google_translate_element");
                      (n.getElementsByTagName("select")[0].value = r),
                        n
                          .getElementsByTagName("select")[0]
                          .dispatchEvent(new Event("change")),
                        (document.getElementById(
                          ":1.container"
                        ).style.transform = "scale(0)"),
                        (document.getElementById(
                          "google_translate_element"
                        ).style.transform = "scale(0)"),
                        t("AR");
                    },
                    className:
                      "px-4 py-2 border-b border-[rgba(166,166,166,0.3)] hover:tracking-[1px] text-black cursor-pointer text-sm font-medium",
                    children: "Arabic",
                  }),
                  v.jsx("p", {
                    onClick: () => {
                      let r = "fr",
                        n = document.getElementById("google_translate_element");
                      (n.getElementsByTagName("select")[0].value = r),
                        n
                          .getElementsByTagName("select")[0]
                          .dispatchEvent(new Event("change")),
                        (document.getElementById(
                          ":1.container"
                        ).style.transform = "scale(0)"),
                        (document.getElementById(
                          "google_translate_element"
                        ).style.transform = "scale(0)"),
                        t("FR");
                    },
                    className:
                      "px-4 py-2 border-b border-[rgba(166,166,166,0.3)] hover:tracking-[1px] text-black cursor-pointer text-sm font-medium",
                    children: "French",
                  }),
                  v.jsx("p", {
                    onClick: () => {
                      let r = "zh-CN",
                        n = document.getElementById("google_translate_element");
                      (n.getElementsByTagName("select")[0].value = r),
                        n
                          .getElementsByTagName("select")[0]
                          .dispatchEvent(new Event("change")),
                        (document.getElementById(
                          ":1.container"
                        ).style.transform = "scale(0)"),
                        (document.getElementById(
                          "google_translate_element"
                        ).style.transform = "scale(0)"),
                        t("CH");
                    },
                    className:
                      "px-4 py-2 border-b border-[rgba(166,166,166,0.3)] hover:tracking-[1px] text-black cursor-pointer text-sm font-medium",
                    children: "Chinese",
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  };
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const WE = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  R0 = (...e) => e.filter((t, r, n) => !!t && n.indexOf(t) === r).join(" ");
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var qE = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const VE = U.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: r = 2,
      absoluteStrokeWidth: n,
      className: i = "",
      children: o,
      iconNode: l,
      ...s
    },
    c
  ) =>
    U.createElement(
      "svg",
      {
        ref: c,
        ...qE,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: n ? (Number(r) * 24) / Number(t) : r,
        className: R0("lucide", i),
        ...s,
      },
      [
        ...l.map(([f, h]) => U.createElement(f, h)),
        ...(Array.isArray(o) ? o : [o]),
      ]
    )
);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bd = (e, t) => {
  const r = U.forwardRef(({ className: n, ...i }, o) =>
    U.createElement(VE, {
      ref: o,
      iconNode: t,
      className: R0(`lucide-${WE(e)}`, n),
      ...i,
    })
  );
  return (r.displayName = `${e}`), r;
};
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const GE = bd("CircleX", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }],
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const JE = bd("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const M0 = bd("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  YE = () => {
    const [e, t] = U.useState(!1);
    U.useState(!1);
    const r = ha(),
      [n, i] = U.useState("");
    return (
      U.useEffect(() => {
        switch (r.pathname) {
          case "/":
            i("Home");
            break;
          case "/searchjobs":
            i("Search Jobs");
            break;
          case "/recruitment":
            i("Recruitment");
            break;
          case "/hrservice":
            i("HR Service");
            break;
          default:
            i("");
        }
      }, [r.pathname]),
      v.jsx(v.Fragment, {
        children: v.jsxs("nav", {
          className:
            "w-full my-2 font-poppins absolute top-0  bg-transparent z-50 flex justify-between items-center px-5",
          children: [
            v.jsx(nt, {
              to: "/",
              className: "logo",
              children: v.jsx("img", {
                src: "/images/Logo.svg",
                className: "w-[120px] lg:w-[180px] ",
              }),
            }),
            v.jsxs("div", {
              className:
                "lg:flex hidden justify-between z-50 items-center gap-x-10",
              children: [
                v.jsx(nt, {
                  to: "/",
                  onClick: () => i("Home"),
                  children: v.jsx("div", {
                    className: `font-normal text-[18px] text-white ${
                      n === "Home"
                        ? "border-b-[2px] border-b-white font-medium "
                        : ""
                    } `,
                    children: "Home",
                  }),
                }),
                v.jsx(nt, {
                  to: "/searchjobs",
                  onClick: () => i("Search Jobs"),
                  children: v.jsx("div", {
                    className: `font-normal text-[18px] text-white ${
                      n === "Search Jobs"
                        ? "border-b-[2px] border-b-white font-medium "
                        : ""
                    } `,
                    children: "Search Jobs",
                  }),
                }),
                v.jsx(nt, {
                  to: "/recruitment",
                  onClick: () => i("Recruitment"),
                  children: v.jsx("div", {
                    className: `font-normal text-[18px] text-white ${
                      n === "Recruitment"
                        ? "border-b-[2px] border-b-white font-medium "
                        : ""
                    } `,
                    children: "Recruitment",
                  }),
                }),
                v.jsx(nt, {
                  to: "/hrservice",
                  onClick: () => i("HR Service"),
                  children: v.jsx("div", {
                    className: `font-normal text-[18px] text-white ${
                      n === "HR Service"
                        ? "border-b-[2px] border-b-white font-medium "
                        : ""
                    } `,
                    children: "HR Service",
                  }),
                }),
              ],
            }),
            v.jsxs("div", {
              className: "flex md:gap-x-5 gap-x-3 items-center",
              children: [
                v.jsx(HE, {}),
                v.jsxs(nt, {
                  to: "/getintouch",
                  onClick: () => i(""),
                  className:
                    "w-fit px-3 h-[30px] md:h-[40px] flex justify-center items-center gap-x-2 md:rounded-[10px] rounded-[6px] border border-transparent duration-500 transition-all bg-white cursor-pointer hover:border-white hover:bg-transparent  group",
                  children: [
                    v.jsx("div", {
                      className: "md:w-[24px] md:h-[24px] w-[20px] h-[20px] ",
                      children: v.jsx("svg", {
                        width: "full",
                        height: "full",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: v.jsx("path", {
                          "fill-rule": "evenodd",
                          "clip-rule": "evenodd",
                          d: `M19 4C20.6569 4 22 5.34315 22 7V17C22 18.6569 20.6569 20 19 20H5C3.34315 \r
              20 2 18.6569 2 17V7C2 5.34315 3.34315 4 5 4H19ZM20 7.328L12.6585 13.7526C12.3129 14.055 11.8111 14.0802 11.4394 13.8282L11.3415 \r
              13.7526L4 7.329V17C4 17.5523 4.44772 18 5 18H19C19.5523 18 20 17.5523 20 17V7.328ZM18.48 6H5.518L12 11.6712L18.48 6Z`,
                          fill: "black",
                          className:
                            "group-hover:fill-white  duration-500 transition-all ",
                        }),
                      }),
                    }),
                    v.jsx("p", {
                      className:
                        "group-hover:text-white font-semibold md:text-[14px] text-[12px] text-black duration-500 transition-all ",
                      children: "Get In Touch",
                    }),
                  ],
                }),
                v.jsx("div", {
                  onClick: () => t(!e),
                  className: "block relative lg:hidden ",
                  children: v.jsx(JE, { color: "#ffffff" }),
                }),
                e &&
                  v.jsxs("div", {
                    className:
                      "fixed h-full w-screen lg:hidden bg-black top-0 right-0 z-50",
                    children: [
                      v.jsx("div", {
                        className: "flex justify-end p-14",
                        children: v.jsx(GE, {
                          color: "#ffffff",
                          size: 30,
                          onClick: () => t(!1),
                        }),
                      }),
                      v.jsxs("div", {
                        className:
                          "flex flex-col justify-center items-center gap-y-10",
                        children: [
                          v.jsx(nt, {
                            to: "/",
                            onClick: () => t(!1),
                            className: "font-normal text-white ",
                            children: "Home",
                          }),
                          v.jsx(nt, {
                            to: "/searchjobs",
                            onClick: () => t(!1),
                            className: "font-normal text-white ",
                            children: "Search Jobs",
                          }),
                          v.jsx(nt, {
                            to: "/recruitment",
                            onClick: () => t(!1),
                            className: "font-normal text-white ",
                            children: "Recruitment",
                          }),
                          v.jsx(nt, {
                            to: "/hrservice",
                            onClick: () => t(!1),
                            className: "font-normal text-white ",
                            children: "HR Service",
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          ],
        }),
      })
    );
  },
  QE = () => {
    U.useEffect(() => {
      B0.init({ duration: 3e3 });
    }, []);
    const e = () => {
      window.scrollTo(0, 0);
    };
    return v.jsxs(v.Fragment, {
      children: [
        v.jsx("div", {
          className: "relative z-40 font-poppins",
          children: v.jsxs("div", {
            className:
              "w-full lg:h-full md:h-[600px] h-[500px] bg-black relative ",
            children: [
              v.jsx("div", {
                className:
                  "absolute bg-gradient-to-b top-0 left-0 right-0 bottom-0 from-black to-transparent flex flex-col justify-start items-center",
                children: v.jsx("div", {
                  className: "md:mt-40 mt-[100px]   flex flex-col items-center",
                  children: v.jsx("p", {
                    className:
                      "font-[500] lg:text-[24px] md:text-[20px] text-[18px]  text-[#B3B3B3]  text-center px-4 md:px-10 lg:px-20 ",
                    children:
                      "Our specialized recruitment services are designed to find the perfect fit for your company. We conduct comprehensive candidate screening to ensure top-quality hires, connecting you with skilled professionals ready to make an impact. ",
                  }),
                }),
              }),
              v.jsx("div", {
                className: "w-full h-full flex justify-end items-end ",
                children: v.jsx("img", {
                  src: "/images/recruitmentBg.jpg",
                  className: " w-full h-[80%] md:h-full ",
                }),
              }),
            ],
          }),
        }),
        v.jsxs("div", {
          className:
            "bg-white flex flex-col justify-center  items-center lg:my-40 my-20",
          children: [
            v.jsx("p", {
              className:
                "font-poppins lg:text-[46px] md:text-[32px] text-[24px] font-[700] text-black text-center px-4 md:px-10 lg:px-20 opacity-0 transition-all duration-1500 ease-in-out transform translate-x-[-100%]",
              "data-aos": "fade-left",
              children:
                "We understand the unique demands of the UAE job market and tailor our approach to meet your specific needs.",
            }),
            v.jsx("p", {
              className:
                "font-poppins lg:text-[25px] md:text-[22px] text-[18px] font-[500] text-[#B3B3B3] text-center px-4 md:px-10 lg:px-20 mt-14 opacity-0 transition-all duration-1500 ease-in-out transform translate-y-[-100%]",
              "data-aos": "fade-up",
              children:
                "Trust us to help you build a team that drives your business forward.",
            }),
          ],
        }),
        v.jsxs("div", {
          className: "flex lg:px-10 gap-x-8 gap-y-10 px-4 lg:flex-row flex-col",
          children: [
            v.jsxs("div", {
              className: "lg:w-[50%] md:mx-auto mx-0  md:w-[90%] w-[100%]",
              children: [
                v.jsx("p", {
                  className: "text-[30px] font-[600] text-black font-poppins",
                  children: "Permanent Recruitment",
                }),
                v.jsx("p", {
                  className:
                    "text-[18px] font-[400] text-black font-poppins mt-8",
                  children:
                    "Our permanent recruitment services are designed to find long-term employees who are the perfect fit for your company. We meticulously screen candidates to ensure they align with your values and goals, helping you build a strong, dedicated team. By understanding your unique needs, we tailor our search to bring you individuals who will thrive in your company culture.",
                }),
                v.jsx("p", {
                  className:
                    "text-[18px] font-[400] text-black font-poppins mt-2",
                  children:
                    " Our extensive network and industry expertise allow us to source top talent efficiently. We focus on quality over quantity, ensuring each candidate we present meets your high standards. Trust us to help you build a workforce that drives sustained success and growth for your organization.",
                }),
              ],
            }),
            v.jsx("div", {
              className: "lg:w-[50%] md:mx-auto mx-0  md:w-[90%] w-[100%]",
              children: v.jsx("img", {
                src: "/images/permanentRec.png",
                className: "w-full",
              }),
            }),
          ],
        }),
        v.jsxs("div", {
          className:
            "flex lg:px-10 gap-x-8 gap-y-10 px-4 md:mt-[100px] mt-[80px] lg:flex-row-reverse flex-col",
          children: [
            v.jsxs("div", {
              className: "lg:w-[50%] md:mx-auto mx-0  md:w-[90%] w-[100%]",
              children: [
                v.jsx("p", {
                  className: "text-[30px] font-[600] text-black font-poppins",
                  children: "Contract Recruitment",
                }),
                v.jsx("p", {
                  className:
                    "text-[18px] font-[400] text-black font-poppins mt-8",
                  children:
                    "Our contract recruitment services provide you with the flexibility to meet short-term project demands. We connect you with highly skilled professionals ready to contribute immediately, ensuring your projects stay on track and on budget. Whether you need temporary staff for a few weeks or several months, we have the resources to match you with the right talent quickly.",
                }),
                v.jsx("p", {
                  className:
                    "text-[18px] font-[400] text-black font-poppins mt-2",
                  children:
                    "Our candidates are thoroughly vetted to ensure they possess the necessary skills and experience. We handle all administrative aspects, from contracts to payroll, allowing you to focus on project execution. Rely on us to deliver reliable, adaptable professionals who can seamlessly integrate into your team.",
                }),
              ],
            }),
            v.jsx("div", {
              className: "lg:w-[50%] md:mx-auto mx-0  md:w-[90%] w-[100%]",
              children: v.jsx("img", {
                src: "/images/contractRec.png",
                className: "w-full",
              }),
            }),
          ],
        }),
        v.jsxs("div", {
          className: "my-20 lg:my-40",
          children: [
            v.jsx("p", {
              className:
                "md:text-[36px] text-[30px] font-[600] font-poppins text-black text-center ",
              children: "Do you want to uncover more about this?",
            }),
            v.jsx("p", {
              className:
                "md:text-[20px] text-[18px] px-4 lg:px-0 font-[500] font-poppins text-[#B3B3B3] text-center mt-4",
              children:
                "We extend a warm welcome to new clients seeking consultancy, contact us, and we'll happily arrange a call or meeting.",
            }),
            v.jsx("div", {
              className: "flex justify-center items-center",
              children: v.jsx(nt, {
                to: "/getintouch",
                onClick: () => e(),
                className: `md:w-[289px] md:h-[52px] w-[190px] h-[44px] relative bg-black rounded-full border \r
          border-transparent md:text-[20px] text-[16px]  mt-8 text-white font-[600] flex justify-center\r
          items-center transition-colors overflow-hidden before:absolute before:left-0 before:top-0  before:w-full \r
          before:h-full before:hover:border-black before:origin-left before:scale-x-0 before:bg-white before:rounded-full \r
          before:transition-transform before:duration-500 before:text-black hover:text-black before:-z-10 z-10 before:hover:rounded-full \r
          before:hover:scale-x-100  `,
                children: "Get In Touch",
              }),
            }),
          ],
        }),
      ],
    });
  },
  XE = () => {
    const e = [
        {
          name: "HR Strategy",
          img: "/images/hrstrategy.png",
          content:
            "Our HR strategy service is tailored to align your human resources with your business objectives. We work with you to develop a strategic HR plan that supports your company's vision and goals. Our approach involves understanding your unique challenges and opportunities, crafting solutions that drive organizational success. From talent acquisition to leadership development, we design strategies that enhance your competitive advantage.",
        },
        {
          name: "HR Analytics",
          img: "/images/hranalytics.png",
          content:
            "Harness the power of data with our HR analytics service, designed to provide you with deep insights into your workforce. We collect and analyze HR data to identify trends, measure performance, and predict future needs. Our analytics help you make informed decisions about hiring, retention, and employee development. By leveraging advanced tools and techniques, we transform raw data into actionable intelligence.",
        },
        {
          name: "HR Audit",
          img: "/images/hraudit.png",
          content:
            "Our HR audit service provides a comprehensive review of your HR policies, procedures, and practices to ensure compliance and efficiency. We identify areas of improvement and provide actionable recommendations to enhance your HR functions. By assessing your HR operations, we help you mitigate risks and align your practices with industry standards. Our audit covers all aspects of HR, from recruitment and onboarding to employee relations and performance management.",
        },
        {
          name: "Employee Survey",
          img: "/images/survey.png",
          content:
            "Our employee surveys service provides valuable insights into employee satisfaction and engagement. By gathering honest feedback, we help you identify strengths and areas for improvement within your organization. Our surveys are tailored to address your specific needs, ensuring relevant and actionable data. With our comprehensive analysis, you can implement changes that enhance workplace culture and productivity. Empower your workforce by giving them a voice and driving positive organizational change.",
        },
        {
          name: "Benefits & Compensation",
          img: "/images/benefits.png",
          content:
            "Our benefits and compensation service is designed to create competitive and attractive packages for your employees. We assess your current offerings and benchmark them against industry standards to ensure you remain competitive. Our expert team helps you design and implement benefits and compensation plans that meet the diverse needs of your workforce. By aligning your packages with your business goals, we enhance employee satisfaction and retention. Trust us to develop a comprehensive strategy that supports your company's growth and success.",
        },
        {
          name: "Policies & Procedures",
          img: "/images/policies.png",
          content:
            "Our policies and procedures service ensures your organization operates efficiently and compliantly. We help you develop clear, comprehensive, and legally sound policies that guide employee behavior and decision-making. By standardizing procedures, we minimize risks and enhance consistency across your organization. Our expertise ensures that your policies reflect best practices and align with your organizational goals. Create a stable and predictable work environment with our tailored policies and procedures service.",
        },
        {
          name: "Learning & Development",
          img: "/images/development.png",
          content:
            "Our learning and development service is designed to foster continuous growth and skill enhancement within your organization. We create customized training programs that address your specific needs and support employee career development. By investing in your workforce's skills, you enhance productivity and innovation. Our approach integrates the latest learning methodologies to ensure effective knowledge transfer. Empower your employees to reach their full potential and drive your organization's success.",
        },
        {
          name: "Succession planning",
          img: "/images/successsion.png",
          content:
            "Our succession planning service prepares your organization for future leadership transitions. We identify and develop high-potential employees to ensure a smooth and seamless succession process. By focusing on leadership development, we help you build a resilient and adaptable workforce. Our strategic approach ensures that your key positions are always filled with qualified and prepared individuals. Secure your organization's future with our comprehensive succession planning solutions.",
        },
        {
          name: "Performance Management",
          img: "/images/performance.png",
          content:
            "Our performance management service helps you create a culture of continuous improvement and accountability. We design and implement performance management systems that align with your organizational goals. By setting clear expectations and providing regular feedback, we enhance employee performance and development. Our approach includes goal setting, performance reviews, and development plans to ensure sustained employee growth. Drive organizational success with our effective performance management strategies.",
        },
      ],
      [t, r] = U.useState([]),
      n = (s) => {
        r([s]), o(!i);
      },
      [i, o] = U.useState(!1),
      l = () => {
        window.scrollTo(0, 0);
      };
    return v.jsxs(v.Fragment, {
      children: [
        v.jsx("div", {
          className: "relative z-40 font-poppins",
          children: v.jsxs("div", {
            className:
              "w-full lg:h-full md:h-[600px] h-[500px] bg-black  relative ",
            children: [
              v.jsx("div", {
                className:
                  "absolute bg-gradient-to-b top-0 left-0 right-0 bottom-0 from-black to-transparent flex flex-col justify-start items-center",
                children: v.jsx("div", {
                  className: "lg:mt-40 mt-[100px]   flex flex-col items-center",
                  children: v.jsx("p", {
                    className:
                      "font-[500] lg:text-[24px] md:text-[20px] text-[18px] text-[#B3B3B3]   text-center px-4 md:px-10 lg:px-20  lg:leading-10",
                    children:
                      "We offer tailored HR solutions to streamline your workforce management, providing expert guidance in employee relations, compliance, and development. Our goal is to empower your HR team to drive organizational success.",
                  }),
                }),
              }),
              v.jsx("div", {
                className: "w-full h-full flex justify-end items-end ",
                children: v.jsx("img", {
                  src: "/images/HRbg.jpg",
                  className: " w-full h-[80%] md:h-full ",
                }),
              }),
            ],
          }),
        }),
        v.jsx("div", {
          className: " flex flex-col relative gap-y-8 py-20 bg-white ",
          children: v.jsxs("div", {
            className:
              "column w-[100%] flex flex-row justify-center flex-wrap gap-x-8 gap-y-8",
            children: [
              e.map((s, c) =>
                v.jsxs("div", {
                  className:
                    " group lg:w-[30%] md:w-[40%] w-[90%] h-[424px] relative ",
                  children: [
                    v.jsx("div", {
                      className:
                        "absolute w-full h-full group-hover:bg-black/10 duration-500 transition-all rounded-[46px] bg-black/60 flex justify-center items-center ",
                      children: v.jsx("button", {
                        onClick: () => n(s),
                        className:
                          "w-fit h-fit px-5  py-3 rounded-[18px] border-[2px] group-hover:bg-white group-hover:text-black duration-500 transition-all border-white font-[500] lg:text-[24px] text-[22px] font-poppins text-white ",
                        children: s.name,
                      }),
                    }),
                    v.jsx("img", {
                      src: s.img,
                      className: "w-full h-full rounded-[46px] object-cover",
                    }),
                  ],
                })
              ),
              i &&
                v.jsx(v.Fragment, {
                  children: t.map((s, c) =>
                    v.jsx("div", {
                      className:
                        " fixed z-40  top-0 left-0 right-0 bottom-0 bg-black bg-opacity-20 flex justify-center items-center",
                      children: v.jsxs("div", {
                        className:
                          "lg:w-[80%] w-[90%]  h-fit py-10 md:rounded-[50px] rounded-[30px] relative  bg-white lg:px-10 md:px-6 px-4 gap-x-8 flex md:flex-row flex-col  items-center ",
                        children: [
                          v.jsx(M0, {
                            size: 28,
                            color: "#AEAEB2",
                            className:
                              "absolute md:right-8 right-4 top-8 cursor-pointer",
                            onClick: n,
                          }),
                          v.jsx("img", {
                            src: s.img,
                            className:
                              "md:w-[50%] w-[80%] h-[80%] rounded-[18px] ",
                          }),
                          v.jsxs("div", {
                            className: "",
                            children: [
                              v.jsx("p", {
                                className:
                                  "font-[600] lg:text-[35px] md:text-[30px] text-[26px] text-black font-poppins mt-4 md:mt-0",
                                children: s.name,
                              }),
                              v.jsx("p", {
                                className:
                                  "font-[400] lg:text-[20px] md:text-[18px] text-[16px] text-[#101010] font-poppins md:mt-5 mt-3 md:leading-9 leading-8",
                                children: s.content,
                              }),
                            ],
                          }),
                        ],
                      }),
                    })
                  ),
                }),
            ],
          }),
        }),
        v.jsxs("div", {
          className: "mb-20 mt-5 lg:mb-40 lg:mt-10 ",
          children: [
            v.jsx("p", {
              className:
                "md:text-[36px] text-[30px] font-[600] font-poppins text-black text-center ",
              children: "Do you want to uncover more about this?",
            }),
            v.jsx("p", {
              className:
                "md:text-[20px] text-[18px] px-4 lg:px-0 font-[500] font-poppins text-[#B3B3B3] text-center mt-4",
              children:
                "We extend a warm welcome to new clients seeking consultancy, contact us, and we'll happily arrange a call or meeting.",
            }),
            v.jsx("div", {
              className: "flex justify-center items-center",
              children: v.jsx(nt, {
                to: "/getintouch",
                onClick: () => l(),
                className: `md:w-[289px] md:h-[52px] w-[190px] h-[44px] relative bg-black rounded-full border \r
          border-transparent md:text-[20px] text-[16px]  mt-8 text-white font-[600] flex justify-center\r
          items-center transition-colors overflow-hidden before:absolute before:left-0 before:top-0  before:w-full \r
          before:h-full before:hover:border-black before:origin-left before:scale-x-0 before:bg-white before:rounded-full \r
          before:transition-transform before:duration-500 before:text-black hover:text-black before:-z-10 z-10 before:hover:rounded-full \r
          before:hover:scale-x-100  `,
                children: "Get In Touch",
              }),
            }),
          ],
        }),
      ],
    });
  },
  ZE = () => {
    const [e, t] = U.useState(),
      [r, n] = U.useState(!1),
      [i, o] = U.useState(""),
      [l, s] = U.useState({
        location: "",
        companyName: "",
        jobType: "",
        radius: "",
        km: "",
      }),
      c = [
        {
          id: 1,
          img: "/images/jobImg.png",
          companyName: "ABC",
          jobTitle: "Senior Java Developer",
          jobType: "Permanent",
          timeline: "14 Days to go",
          location: "United Arab Emirates",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur adipiscing elit.",
          task: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur amet sit adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur amet sit adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          ],
          skills: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur amet sit adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur amet sit adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          ],
        },
        {
          id: 2,
          img: "/images/jobImg.png",
          companyName: "DEF",
          jobTitle: "Junior React Developer",
          jobType: "Contract",
          timeline: "10 Days to go",
          location: "Dubai",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur adipiscing elit.",
          task: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur amet sit adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur amet sit adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          ],
          skills: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur amet sit adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur amet sit adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          ],
        },
        {
          id: 3,
          img: "/images/jobImg.png",
          companyName: "GHI",
          jobTitle: "Junior Python Developer",
          jobType: "Permanent",
          timeline: "8 Days to go",
          location: "Dubai",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur adipiscing elit.",
          task: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur amet sit adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur amet sit adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          ],
          skills: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur amet sit adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur amet sit adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          ],
        },
        {
          id: 4,
          img: "/images/jobImg.png",
          companyName: "JKL",
          jobTitle: "Senior Nextjs Developer",
          jobType: "Permanent",
          timeline: "18 Days to go",
          location: "United Arab Emirates",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur adipiscing elit.",
          task: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur amet sit adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur amet sit adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          ],
          skills: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur amet sit adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur amet sit adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          ],
        },
        {
          id: 5,
          img: "/images/jobImg.png",
          companyName: "MNO",
          jobTitle: "Senior Python Developer",
          jobType: "Permanent",
          timeline: "12 Days to go",
          location: "Dubai",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur adipiscing elit.",
          task: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur amet sit adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur amet sit adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          ],
          skills: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur amet sit adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, dolor as sit consectetur amet sit adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          ],
        },
      ],
      f = (D) => {
        e === D ? n(!r) : (t(D), n(!0));
      },
      [h, g] = U.useState(c);
    U.useState(4);
    const [p, x] = U.useState(!1),
      [w, k] = U.useState(""),
      [b, S] = U.useState(""),
      [_, E] = U.useState(),
      N = (D, j, I, G) => {
        D.stopPropagation(), E(j), x(!0), k(I), S(G);
      },
      L = (D) => {
        o(D.target.value);
      },
      A = (D) => {
        const { name: j, value: I } = D.target;
        s({ ...l, [j]: I });
      },
      K = (D) => {
        D.preventDefault();
        const j = c.filter(
          (I) =>
            (!l.location ||
              I.location.toLowerCase().includes(l.location.toLowerCase())) &&
            (!l.companyName ||
              I.companyName
                .toLowerCase()
                .includes(l.companyName.toLowerCase())) &&
            (!l.jobType ||
              I.jobType.toLowerCase().includes(l.jobType.toLowerCase()))
        );
        g(j);
      },
      F = (D) => {
        D.preventDefault();
        const j = c.filter(
          (I) =>
            I.jobTitle.toLowerCase().includes(i.toLowerCase()) ||
            I.companyName.toLowerCase().includes(i.toLowerCase())
        );
        g(j);
      },
      [H, P] = U.useState(""),
      M = async (D) => {
        D.preventDefault(), P("Sending....");
        const j = new FormData(D.target);
        j.append("access_key", "e96d8bc1-810e-4624-a292-c0d31c263aa7");
        const G = await (
          await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: j,
          })
        ).json();
        G.success
          ? (P("Form Submitted Successfully"), D.target.reset())
          : (console.log("Error", G), P(G.message)),
          setTimeout(() => {
            P("");
          }, 2e3);
      };
    return v.jsxs(v.Fragment, {
      children: [
        v.jsx("div", {
          className: "relative z-40 font-poppins",
          children: v.jsxs("div", {
            className: "w-full lg:h-full md:h-[600px] h-[500px] relative ",
            children: [
              v.jsx("div", {
                className:
                  "w-full absolute bg-gradient-to-b top-0 left-0 right-0 bottom-0 from-black to-transparent flex flex-col justify-start items-center",
                children: v.jsx("div", {
                  className:
                    "w-full absolute bottom-20   flex flex-col items-center",
                  children: v.jsxs("div", {
                    className:
                      "searchBar lg:w-[60%] md:w-[80%] w-[90%] flex md:h-[66px] h-[44px] items-center bg-white rounded-full ",
                    children: [
                      v.jsx("input", {
                        value: i,
                        onChange: L,
                        placeholder: "Search job titles, company name....",
                        className:
                          " w-[70%] h-full rounded-full px-8 outline-none focus:outline md:placeholder:text-[20px] placeholder:text-[16px] placeholder:font-[400]  placeholder:text-[#B3B3B3]  ",
                      }),
                      v.jsx("button", {
                        onClick: F,
                        className: `w-[29.7%] md:h-[62px] h-[40px] relative bg-black rounded-full border \r
          border-transparent md:text-[20px] text-[16px]  text-white font-medium flex justify-center\r
          items-center transition-colors overflow-hidden before:absolute before:left-0 before:top-0  before:w-full \r
          before:h-full before:hover:border-black before:origin-left before:scale-x-0 before:bg-white before:rounded-full \r
          before:transition-transform before:duration-500 before:text-black hover:text-black before:-z-10 z-10 before:hover:rounded-full \r
          before:hover:scale-x-100  `,
                        children: "Search",
                      }),
                    ],
                  }),
                }),
              }),
              v.jsx("img", {
                src: "/images/searchBg.png",
                className: "w-full h-full  ",
              }),
            ],
          }),
        }),
        v.jsx("div", {
          className: "w-full flex justify-center my-14 ",
          children: v.jsxs("form", {
            onSubmit: K,
            className:
              "lg:w-[75%] w-[90%] h-fit rounded-[30px] md:px-12 px-8 md:py-10 py-8 border border-[#B3B3B3] shadow-lg ",
            children: [
              v.jsxs("div", {
                className: "w-full flex md:flex-row flex-col gap-y-6 gap-x-6",
                children: [
                  v.jsxs("div", {
                    className: "flex flex-col md:w-[50%] w-full",
                    children: [
                      v.jsx("label", {
                        className:
                          "font-semibold md:text-[20px] text-[18px] font-poppins text-black ",
                        children: "Job Location",
                      }),
                      v.jsx("input", {
                        name: "location",
                        value: l.location,
                        onChange: A,
                        placeholder: "Location",
                        className:
                          " w-full h-[40px] placeholder:text-[14px] placeholder:font-normal placeholder:text-[#B3B3B3] px-4 mt-2  rounded-[5px] border border-[#B3B3B3] ",
                      }),
                    ],
                  }),
                  v.jsxs("div", {
                    className: "flex gap-x-6 md:w-[50%] w-[100%] ",
                    children: [
                      v.jsxs("div", {
                        className: "flex flex-col  w-[50%]",
                        children: [
                          v.jsx("label", {
                            className:
                              "font-semibold md:text-[20px] text-[18px]  font-poppins text-black ",
                            children: "Radius",
                          }),
                          v.jsx("input", {
                            name: "radius",
                            value: l.radius,
                            onChange: A,
                            placeholder: "Radius",
                            className:
                              " w-full h-[40px] placeholder:text-[14px] placeholder:font-normal placeholder:text-[#B3B3B3] px-4 mt-2  rounded-[5px] border border-[#B3B3B3] ",
                          }),
                        ],
                      }),
                      v.jsxs("div", {
                        className: "flex flex-col  w-[50%]",
                        children: [
                          v.jsx("label", {
                            className:
                              "font-semibold md:text-[20px] text-[18px]  font-poppins text-black ",
                            children: "KM",
                          }),
                          v.jsx("input", {
                            name: "km",
                            value: l.km,
                            onChange: A,
                            placeholder: "KM",
                            className:
                              " w-full h-[40px] placeholder:text-[14px] placeholder:font-normal placeholder:text-[#B3B3B3] px-4 mt-2  rounded-[5px] border border-[#B3B3B3] ",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              v.jsxs("div", {
                className:
                  "w-full flex md:flex-row flex-col items-center gap-x-6 md:mt-12 mt-6",
                children: [
                  v.jsxs("div", {
                    className: "flex flex-col md:w-[50%] w-[100%]",
                    children: [
                      v.jsx("label", {
                        className:
                          "font-semibold md:text-[20px] text-[18px]  font-poppins text-black ",
                        children: "Company Name",
                      }),
                      v.jsx("input", {
                        name: "companyName",
                        value: l.companyName,
                        onChange: A,
                        placeholder: "Company Name",
                        className:
                          " w-full h-[40px] placeholder:text-[14px] placeholder:font-normal placeholder:text-[#B3B3B3] px-4 mt-2  rounded-[5px] border border-[#B3B3B3] ",
                      }),
                    ],
                  }),
                  v.jsxs("div", {
                    className: " md:w-[25%] w-full mt-6 md:mt-0 ",
                    children: [
                      v.jsx("p", {
                        className:
                          "font-semibold md:text-[20px] text-[18px]  font-poppins text-black ",
                        children: "Job Type",
                      }),
                      v.jsxs("div", {
                        className: "flex gap-x-4",
                        children: [
                          v.jsxs("div", {
                            className: "flex items-center mt-2",
                            children: [
                              v.jsx("input", {
                                type: "radio",
                                name: "jobType",
                                value: "Permanent",
                                onChange: A,
                                className:
                                  " w-[20px]  h-[20px] accent-black rounded-full border border-[#B3B3B3] ",
                              }),
                              v.jsx("label", {
                                className:
                                  "text-[1rem] font-normal ml-2 font-poppins text-black ",
                                children: "Permanent",
                              }),
                            ],
                          }),
                          v.jsxs("div", {
                            className: "flex items-center mt-2",
                            children: [
                              v.jsx("input", {
                                type: "radio",
                                name: "jobType",
                                value: "Contract",
                                onChange: A,
                                className:
                                  " w-[20px]  h-[20px] accent-black rounded-full border border-[#B3B3B3] ",
                              }),
                              v.jsx("label", {
                                className:
                                  "text-[1rem] font-normal ml-2 font-poppins text-black ",
                                children: "Contract",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  v.jsx("div", {
                    className: "lg:flex hidden w-[25%]",
                    children: v.jsx("button", {
                      className: `w-full md:h-[57px] mt-3 h-[40px] relative bg-black rounded-[8px] border \r
          border-transparent md:text-[20px] text-[16px]  text-white md:font-[600] font-[500] flex justify-center\r
          items-center transition-colors overflow-hidden before:absolute before:left-0 before:top-0  before:w-full \r
          before:h-full before:hover:border-black before:origin-left before:scale-x-0 before:bg-white before:rounded-[8px] \r
          before:transition-transform before:duration-500 before:text-black hover:text-black before:-z-10 z-10 before:hover:rounded-[8px] \r
          before:hover:scale-x-100  `,
                      children: "Search",
                    }),
                  }),
                ],
              }),
              v.jsx("div", {
                className: "flex lg:hidden mx-auto mt-5 w-[50%] md:w-[25%]",
                children: v.jsx("button", {
                  className: `w-full md:h-[57px] mt-3 h-[40px] relative bg-black rounded-[8px] border \r
          border-transparent md:text-[20px] text-[16px]  text-white md:font-[600] font-[500] flex justify-center\r
          items-center transition-colors overflow-hidden before:absolute before:left-0 before:top-0  before:w-full \r
          before:h-full before:hover:border-black before:origin-left before:scale-x-0 before:bg-white before:rounded-[8px] \r
          before:transition-transform before:duration-500 before:text-black hover:text-black before:-z-10 z-10 before:hover:rounded-[8px] \r
          before:hover:scale-x-100  `,
                  children: "Search",
                }),
              }),
            ],
          }),
        }),
        v.jsxs("div", {
          className: "JOBS lg:w-[80%] w-[90%] mx-auto",
          children: [
            v.jsxs("p", {
              className: "font-medium text-[30px] text-black font-poppins ",
              children: [
                h.length,
                " ",
                h.length > 1 ? "Jobs Available" : "Job Available",
                " ",
              ],
            }),
            v.jsx("div", {
              className: "flex flex-col gap-y-5 my-6",
              children: h.map((D, j) =>
                v.jsxs(
                  "div",
                  {
                    onClick: () => f(D.id),
                    className:
                      "w-full cursor-pointer h-fit py-6 border  border-[#B3B3B3] px-6 flex flex-col  rounded-[20px] shadow-md ",
                    children: [
                      v.jsxs("div", {
                        className: "flex md:flex-row flex-col gap-x-4",
                        children: [
                          v.jsx("div", {
                            className:
                              "flex-shrink-0 w-[222px] rounded-[14px] h-[222px] mx-auto md:mx-0 mb-4 md:mb-0 ",
                            children: v.jsx("img", {
                              src: D.img,
                              className:
                                "w-full h-full rounded-[14px] object-cover ",
                            }),
                          }),
                          v.jsxs("div", {
                            className: "flex flex-col gap-y-2 flex-grow",
                            children: [
                              v.jsx("h2", {
                                className:
                                  "font-medium text-[24px] text-black font-poppins ",
                                children: D.companyName,
                              }),
                              v.jsx("h2", {
                                className:
                                  "font-medium text-[24px] text-black font-poppins ",
                                children: D.jobTitle,
                              }),
                              v.jsxs("p", {
                                className:
                                  "font-medium text-[18px] text-black font-poppins ",
                                children: [
                                  " ",
                                  v.jsx("b", {
                                    className:
                                      "font-semibold text-[18px] text-black font-poppins ",
                                    children: "Job type:",
                                  }),
                                  "  ",
                                  D.jobType,
                                ],
                              }),
                              v.jsxs("div", {
                                className: "flex gap-x-2",
                                children: [
                                  v.jsx("img", { src: "/images/Calendar.svg" }),
                                  v.jsx("p", {
                                    className:
                                      "font-normal text-[18px] text-black font-poppins ",
                                    children: D.timeline,
                                  }),
                                ],
                              }),
                              v.jsxs("div", {
                                className: "flex gap-x-2",
                                children: [
                                  v.jsx("img", {
                                    src: "/images/location2.svg",
                                  }),
                                  v.jsx("p", {
                                    className:
                                      "font-normal text-[18px] text-black font-poppins ",
                                    children: D.location,
                                  }),
                                ],
                              }),
                              v.jsx("p", {
                                className:
                                  "font-normal text-[18px] text-black font-poppins ",
                                children: D.desc,
                              }),
                            ],
                          }),
                        ],
                      }),
                      r &&
                        e === D.id &&
                        v.jsxs(v.Fragment, {
                          children: [
                            v.jsx("p", {
                              className:
                                "font-semibold mt-4 mb-2 text-[20px] text-black font-poppins ",
                              children: "Task and Responsibilities",
                            }),
                            D.task.map((I, G) =>
                              v.jsx("li", {
                                className:
                                  "font-normal text-[18px] text-black font-poppins ",
                                children: I,
                              })
                            ),
                            v.jsx("p", {
                              className:
                                "font-semibold mt-4 mb-2 text-[20px] text-black font-poppins ",
                              children: "Skills and Experience Required",
                            }),
                            D.skills.map((I, G) =>
                              v.jsx("li", {
                                className:
                                  "font-normal text-[18px] text-black font-poppins ",
                                children: I,
                              })
                            ),
                            v.jsx("div", {
                              className: "flex  mx-auto mt-5",
                              children: v.jsx("button", {
                                onClick: (I) =>
                                  N(I, D.id, D.companyName, D.jobTitle),
                                className: `w-[210px] h-[49px] mt-3  relative bg-black rounded-[37px] border \r
          border-transparent md:text-[18px] text-[16px]  text-white md:font-[600] font-[500] flex justify-center\r
          items-center transition-colors overflow-hidden before:absolute before:left-0 before:top-0  before:w-full \r
          before:h-full before:hover:border-black before:origin-left before:scale-x-0 before:bg-white before:rounded-[37px] \r
          before:transition-transform before:duration-500 before:text-black hover:text-black before:-z-10 z-10 before:hover:rounded-[37px] \r
          before:hover:scale-x-100  `,
                                children: "Apply for Job",
                              }),
                            }),
                            p &&
                              _ === D.id &&
                              v.jsx("div", {
                                className:
                                  " fixed z-40  top-0 left-0 right-0 bottom-0 bg-transparent  flex justify-center items-start py-5",
                                children: v.jsxs("div", {
                                  className:
                                    "bg-white lg:w-[40%] md:w-[80%] relative w-[90%] h-fit py-8 rounded-[30px]  border border-[#B3B3B3]",
                                  children: [
                                    v.jsx(M0, {
                                      className: "absolute right-5 ",
                                      onClick: () => x(!1),
                                    }),
                                    v.jsxs("form", {
                                      onSubmit: M,
                                      onClick: (I) => I.stopPropagation(),
                                      className:
                                        "w-full gap-y-5 flex flex-col justify-center items-center",
                                      children: [
                                        v.jsx("p", {
                                          className:
                                            "lg:text-[46px] text-[32px] text-black font-bold font-poppins mb-5",
                                          children: "Job Application",
                                        }),
                                        v.jsxs("div", {
                                          className:
                                            "flex flex-col md:w-[80%] w-[90%] gap-y-2",
                                          children: [
                                            v.jsx("label", {
                                              className:
                                                "text-[20px] font-medium font-poppins text-black ",
                                              children: "Full Name",
                                            }),
                                            v.jsx("input", {
                                              placeholder: "Full Name",
                                              name: "fullname",
                                              id: "fullname",
                                              type: "text",
                                              className: `w-full h-[45px] border px-2 border-[#B3B3B3] rounded-[5px] \r
                  placeholder:text-[#B3B3B3] placeholder:text-[14px] placeholder:font-poppins placeholder:font-normal `,
                                            }),
                                          ],
                                        }),
                                        v.jsxs("div", {
                                          className:
                                            "flex flex-col md:w-[80%] w-[90%] gap-y-2",
                                          children: [
                                            v.jsx("label", {
                                              className:
                                                "text-[20px] font-medium font-poppins text-black ",
                                              children: "Email",
                                            }),
                                            v.jsx("input", {
                                              placeholder: "Email",
                                              name: "email",
                                              id: "email",
                                              type: "email",
                                              className: `w-full h-[45px] border px-2 border-[#B3B3B3] rounded-[5px] \r
                  placeholder:text-[#B3B3B3] placeholder:text-[14px] placeholder:font-poppins placeholder:font-normal `,
                                            }),
                                          ],
                                        }),
                                        v.jsxs("div", {
                                          className:
                                            "flex flex-col md:w-[80%] w-[90%] gap-y-2",
                                          children: [
                                            v.jsx("label", {
                                              className:
                                                "text-[20px] font-medium font-poppins text-black ",
                                              children: "Location",
                                            }),
                                            v.jsx("input", {
                                              placeholder: "Location",
                                              name: "location",
                                              id: "location",
                                              type: "text",
                                              className: `w-full h-[45px] border px-2 border-[#B3B3B3] rounded-[5px] \r
                  placeholder:text-[#B3B3B3] placeholder:text-[14px] placeholder:font-poppins placeholder:font-normal `,
                                            }),
                                          ],
                                        }),
                                        v.jsxs("div", {
                                          className:
                                            "flex flex-col md:w-[80%] w-[90%] gap-y-2",
                                          children: [
                                            v.jsx("label", {
                                              className:
                                                "text-[20px] font-medium font-poppins text-black ",
                                              children: "Message",
                                            }),
                                            v.jsx("input", {
                                              placeholder: "Message",
                                              name: "message",
                                              id: "message",
                                              type: "text",
                                              className: `w-full h-[45px] border px-2 border-[#B3B3B3] rounded-[5px] \r
                  placeholder:text-[#B3B3B3] placeholder:text-[14px] placeholder:font-poppins placeholder:font-normal `,
                                            }),
                                          ],
                                        }),
                                        v.jsx("input", {
                                          type: "hidden",
                                          name: "companyName",
                                          value: D.companyName,
                                        }),
                                        v.jsx("input", {
                                          type: "hidden",
                                          name: "jobTitle",
                                          value: D.jobTitle,
                                        }),
                                        v.jsx("button", {
                                          className:
                                            "md:w-[80%] w-[90%] rounded-[8px] mt-2 text-[20px] font-medium bg-black h-[57px] text-white ",
                                          children: "Apply Now",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                          ],
                        }),
                    ],
                  },
                  D.id
                )
              ),
            }),
          ],
        }),
      ],
    });
  },
  ek = () => {
    const [e, t] = U.useState(""),
      [r, n] = U.useState(""),
      i = async (l) => {
        l.preventDefault(), t("Sending....");
        const s = new FormData(l.target);
        s.append("access_key", "e96d8bc1-810e-4624-a292-c0d31c263aa7");
        const f = await (
          await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: s,
          })
        ).json();
        f.success
          ? (t("Form Submitted Successfully"), l.target.reset())
          : (console.log("Error", f), t(f.message)),
          setTimeout(() => {
            t("");
          }, 2e3);
      },
      o = async (l) => {
        l.preventDefault(), n("Sending....");
        const s = new FormData(l.target);
        s.append("access_key", "e96d8bc1-810e-4624-a292-c0d31c263aa7");
        const f = await (
          await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: s,
          })
        ).json();
        f.success
          ? (n("Form Submitted Successfully"), l.target.reset())
          : (console.log("Error", f), n(f.message)),
          setTimeout(() => {
            n("");
          }, 2e3);
      };
    return v.jsxs(v.Fragment, {
      children: [
        v.jsx("div", {
          className: "relative z-40 font-poppins bg-black",
          children: v.jsxs("div", {
            className: "w-full lg:h-[700px] md:h-[600px] h-[500px] relative ",
            children: [
              v.jsx("div", {
                className:
                  "absolute bg-gradient-to-b top-0 left-0 right-0 bottom-0 from-black to-transparent flex flex-col justify-start items-center",
                children: v.jsxs("div", {
                  className: "md:mt-40 mt-[100px]   flex flex-col items-center",
                  children: [
                    v.jsx("p", {
                      className:
                        "font-semibold lg:text-[50px] md:text-[30px] text-[20px] text-[#B3B3B3] text-center px-4 md:px-10 lg:px-20 ",
                      children:
                        "Whether you have questions about our services or need assistance with a specific hiring need, our team is ready to provide the support you need. ",
                    }),
                    v.jsx("p", {
                      className:
                        "md:text-[22px] text-[18px] font-medium font-poppins text-[#B3B3B3] text-center px-4 md:px-10 lg:px-20 md:mt-20 mt-14 ",
                      children:
                        " Reach out to us through our contact form, email, or phone, and we'll respond promptly. Your success is our priority, and we're committed to making your recruitment process seamless and efficient.",
                    }),
                  ],
                }),
              }),
              v.jsx("img", {
                src: "/images/circles.png",
                className:
                  "w-full lg:h-[700px] md:h-[600px] h-[500px] lg:object-cover object-contain object-top ",
              }),
            ],
          }),
        }),
        v.jsxs("div", {
          className: "mt-10",
          children: [
            v.jsx("p", {
              className:
                "lg:text-[44px] md:text-[32px] text-[24px]  lg:px-[86px] md:px-10 px-5 text-black font-semibold font-poppins ",
              children: "Contact Ontario Office ",
            }),
            v.jsxs("div", {
              className:
                "flex lg:flex-row flex-col  lg:justify-center gap-x-10 md:px-10 px-5  w-full  h-fit lg:items-start items-center ",
              children: [
                v.jsx("div", {
                  className: "lg:w-[60%] md:w-[90%] w-[100%]  h-fit mt-10",
                  children: v.jsxs("form", {
                    action: "",
                    onSubmit: i,
                    className:
                      "w-full  flex flex-col gap-y-12 py-12 items-center bg-[#F5F5F5] rounded-[12px]  ",
                    children: [
                      v.jsx("input", {
                        type: "text",
                        name: "name",
                        id: "name",
                        placeholder: "Your Name*",
                        className:
                          "md:w-[70%] w-[85%] h-[40px] border-b  border-b-[#505050] bg-transparent placeholder:text-[#505050] placeholder:text-[20px] ",
                      }),
                      v.jsx("input", {
                        type: "email",
                        name: "email",
                        id: "email",
                        placeholder: "Email*",
                        className:
                          "md:w-[70%] w-[85%] h-[40px] border-b border-b-[#505050] bg-transparent placeholder:text-[#505050] placeholder:text-[20px] ",
                      }),
                      v.jsx("input", {
                        type: "number",
                        name: "number",
                        id: "number",
                        placeholder: "Mobile No*",
                        className:
                          "md:w-[70%] w-[85%] h-[40px] border-b border-b-[#505050] bg-transparent placeholder:text-[#505050] placeholder:text-[20px] ",
                      }),
                      v.jsx("input", {
                        type: "subject",
                        name: "subject",
                        id: "subject",
                        placeholder: "Subject*",
                        className:
                          "md:w-[70%] w-[85%] h-[40px] border-b border-b-[#505050] bg-transparent placeholder:text-[#505050] placeholder:text-[20px] ",
                      }),
                      v.jsx("input", {
                        type: "message",
                        name: "message",
                        id: "message",
                        placeholder: "Message*",
                        className:
                          "md:w-[70%] w-[85%] h-[40px] border-b border-b-[#505050] bg-transparent placeholder:text-[#505050] placeholder:text-[20px] ",
                      }),
                      v.jsx("div", {
                        className: "flex  mx-auto ",
                        children: v.jsx("button", {
                          type: "submit",
                          className: `w-[180px] h-[49px]   relative bg-black rounded-[37px] border \r
          border-transparent md:text-[18px] text-[16px]  text-[#F5F5F5] md:font-[600] font-[500] flex justify-center\r
          items-center transition-colors overflow-hidden before:absolute before:left-0 before:top-0  before:w-full \r
          before:h-full before:hover:border-black before:origin-left before:scale-x-0 before:bg-[#F5F5F5] before:rounded-[37px] \r
          before:transition-transform before:duration-500 before:text-black hover:text-black before:-z-10 z-10 before:hover:rounded-[37px] \r
          before:hover:scale-x-100  `,
                          children: "Submit",
                        }),
                      }),
                      e !== "" && v.jsx("p", { children: e }),
                    ],
                  }),
                }),
                v.jsxs("div", {
                  className:
                    "lg:w-[30%] md:w-[50%] w-[100%] h-fit mt-10  border-[2px] border-[#505050] rounded-[12px] px-10 py-8",
                  children: [
                    v.jsx("p", {
                      className:
                        "text-[28px] font-semibold text-black font-poppins ",
                      children: "Contact Details",
                    }),
                    v.jsxs("address", {
                      className:
                        "not-italic text-[24px] font-normal font-poppins mt-8 ",
                      children: [
                        "G-10 Arasmant flat, nr.",
                        v.jsx("br", {}),
                        "Karmachari Nagar,",
                        v.jsx("br", {}),
                        "Rannapark, Ahmedabad",
                        v.jsx("br", {}),
                        "380061",
                      ],
                    }),
                    v.jsxs("div", {
                      className: "flex flex-col",
                      children: [
                        v.jsx("a", {
                          href: "mailto:info@Pruthatek.com",
                          className: " text-[24px]  font-poppins mt-8 ",
                          children: "Info@Pruthatek.com",
                        }),
                        v.jsx("a", {
                          href: "tel:9734213467",
                          className: " text-[24px] font-poppins mt-2 ",
                          children: "9734213467",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        v.jsxs("div", {
          className: "mt-14 lg:mt-24 mb-10",
          children: [
            v.jsx("p", {
              className:
                "lg:text-[44px] md:text-[32px] text-[24px]  lg:px-[86px] md:px-10 px-5 text-black font-semibold font-poppins ",
              children: "Contact Dubai Office ",
            }),
            v.jsxs("div", {
              className:
                "flex lg:flex-row-reverse flex-col  lg:justify-center gap-x-10 md:px-10 px-5  w-full  h-fit lg:items-start items-center ",
              children: [
                v.jsx("div", {
                  className: "lg:w-[60%] md:w-[90%] w-[100%]  h-fit mt-10",
                  children: v.jsxs("form", {
                    action: "",
                    onSubmit: o,
                    className:
                      "w-full  flex flex-col gap-y-12 py-12 items-center bg-[#F5F5F5] rounded-[12px]  ",
                    children: [
                      v.jsx("input", {
                        type: "text",
                        name: "name",
                        id: "name",
                        placeholder: "Your Name*",
                        className:
                          "md:w-[70%] w-[85%] h-[40px] border-b  border-b-[#505050] bg-transparent placeholder:text-[#505050] placeholder:text-[20px] ",
                      }),
                      v.jsx("input", {
                        type: "email",
                        name: "email",
                        id: "email",
                        placeholder: "Email*",
                        className:
                          "md:w-[70%] w-[85%] h-[40px] border-b border-b-[#505050] bg-transparent placeholder:text-[#505050] placeholder:text-[20px] ",
                      }),
                      v.jsx("input", {
                        type: "number",
                        name: "number",
                        id: "number",
                        placeholder: "Mobile No*",
                        className:
                          "md:w-[70%] w-[85%] h-[40px] border-b border-b-[#505050] bg-transparent placeholder:text-[#505050] placeholder:text-[20px] ",
                      }),
                      v.jsx("input", {
                        type: "subject",
                        name: "subject",
                        id: "subject",
                        placeholder: "Subject*",
                        className:
                          "md:w-[70%] w-[85%] h-[40px] border-b border-b-[#505050] bg-transparent placeholder:text-[#505050] placeholder:text-[20px] ",
                      }),
                      v.jsx("input", {
                        type: "message",
                        name: "message",
                        id: "message",
                        placeholder: "Message*",
                        className:
                          "md:w-[70%] w-[85%] h-[40px] border-b border-b-[#505050] bg-transparent placeholder:text-[#505050] placeholder:text-[20px] ",
                      }),
                      v.jsx("div", {
                        className: "flex  mx-auto ",
                        children: v.jsx("button", {
                          type: "submit",
                          className: `w-[180px] h-[49px]   relative bg-black rounded-[37px] border \r
          border-transparent md:text-[18px] text-[16px]  text-[#F5F5F5] md:font-[600] font-[500] flex justify-center\r
          items-center transition-colors overflow-hidden before:absolute before:left-0 before:top-0  before:w-full \r
          before:h-full before:hover:border-black before:origin-left before:scale-x-0 before:bg-[#F5F5F5] before:rounded-[37px] \r
          before:transition-transform before:duration-500 before:text-black hover:text-black before:-z-10 z-10 before:hover:rounded-[37px] \r
          before:hover:scale-x-100  `,
                          children: "Submit",
                        }),
                      }),
                      r !== "" && v.jsx("p", { children: r }),
                    ],
                  }),
                }),
                v.jsxs("div", {
                  className:
                    "lg:w-[30%] md:w-[50%] w-[100%] h-fit mt-10  border-[2px] border-[#505050] rounded-[12px] px-10 py-8",
                  children: [
                    v.jsx("p", {
                      className:
                        "text-[28px] font-semibold text-black font-poppins ",
                      children: "Contact Details",
                    }),
                    v.jsxs("address", {
                      className:
                        "not-italic text-[24px] font-normal font-poppins mt-8 ",
                      children: [
                        "G-10 Arasmant flat, nr.",
                        v.jsx("br", {}),
                        "Karmachari Nagar,",
                        v.jsx("br", {}),
                        "Rannapark, Ahmedabad",
                        v.jsx("br", {}),
                        "380061",
                      ],
                    }),
                    v.jsxs("div", {
                      className: "flex flex-col",
                      children: [
                        v.jsx("a", {
                          href: "mailto:info@Pruthatek.com",
                          className: " text-[24px]  font-poppins mt-8 ",
                          children: "Info@Pruthatek.com",
                        }),
                        v.jsx("a", {
                          href: "tel:9734213467",
                          className: " text-[24px] font-poppins mt-2 ",
                          children: "9734213467",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  tk = () =>
    v.jsxs("div", {
      className: "w-full bg-black/90 h-[500px] pt-[100px]",
      children: [
        v.jsx("p", {
          className:
            "text-[40px] text-white font-poppins font-semibold text-center pb-10 ",
          children: "Admin Dashboard",
        }),
        v.jsxs("div", {
          className: "flex justify-center items-center gap-x-10 ",
          children: [
            v.jsx(nt, {
              to: "/uploadjob",
              className:
                "bg-white text-black text-[22px] w-fit h-fit px-5 py-3 rounded-[12px] flex justify-center items-center font-medium font-poppins ",
              children: "Upload Job",
            }),
            v.jsx("div", {
              className:
                "bg-white text-black text-[22px] w-fit h-fit px-5 py-3 rounded-[12px] flex justify-center items-center font-medium font-poppins ",
              children: "All Jobs",
            }),
          ],
        }),
      ],
    });
var I0 = { exports: {} };
(function (e, t) {
  (function (r, n) {
    e.exports = n();
  })($r, function () {
    var r = Array.prototype.slice;
    function n(a, u) {
      u && (a.prototype = Object.create(u.prototype)),
        (a.prototype.constructor = a);
    }
    function i(a) {
      return c(a) ? a : le(a);
    }
    n(o, i);
    function o(a) {
      return f(a) ? a : oe(a);
    }
    n(l, i);
    function l(a) {
      return h(a) ? a : fe(a);
    }
    n(s, i);
    function s(a) {
      return c(a) && !g(a) ? a : Te(a);
    }
    function c(a) {
      return !!(a && a[x]);
    }
    function f(a) {
      return !!(a && a[w]);
    }
    function h(a) {
      return !!(a && a[k]);
    }
    function g(a) {
      return f(a) || h(a);
    }
    function p(a) {
      return !!(a && a[b]);
    }
    (i.isIterable = c),
      (i.isKeyed = f),
      (i.isIndexed = h),
      (i.isAssociative = g),
      (i.isOrdered = p),
      (i.Keyed = o),
      (i.Indexed = l),
      (i.Set = s);
    var x = "@@__IMMUTABLE_ITERABLE__@@",
      w = "@@__IMMUTABLE_KEYED__@@",
      k = "@@__IMMUTABLE_INDEXED__@@",
      b = "@@__IMMUTABLE_ORDERED__@@",
      S = "delete",
      _ = 5,
      E = 1 << _,
      N = E - 1,
      L = {},
      A = { value: !1 },
      K = { value: !1 };
    function F(a) {
      return (a.value = !1), a;
    }
    function H(a) {
      a && (a.value = !0);
    }
    function P() {}
    function M(a, u) {
      u = u || 0;
      for (
        var d = Math.max(0, a.length - u), m = new Array(d), y = 0;
        y < d;
        y++
      )
        m[y] = a[y + u];
      return m;
    }
    function D(a) {
      return a.size === void 0 && (a.size = a.__iterate(I)), a.size;
    }
    function j(a, u) {
      if (typeof u != "number") {
        var d = u >>> 0;
        if ("" + d !== u || d === 4294967295) return NaN;
        u = d;
      }
      return u < 0 ? D(a) + u : u;
    }
    function I() {
      return !0;
    }
    function G(a, u, d) {
      return (
        (a === 0 || (d !== void 0 && a <= -d)) &&
        (u === void 0 || (d !== void 0 && u >= d))
      );
    }
    function Z(a, u) {
      return z(a, u, 0);
    }
    function ee(a, u) {
      return z(a, u, u);
    }
    function z(a, u, d) {
      return a === void 0
        ? d
        : a < 0
        ? Math.max(0, u + a)
        : u === void 0
        ? a
        : Math.min(u, a);
    }
    var q = 0,
      V = 1,
      Y = 2,
      ae = typeof Symbol == "function" && Symbol.iterator,
      Ee = "@@iterator",
      ve = ae || Ee;
    function te(a) {
      this.next = a;
    }
    (te.prototype.toString = function () {
      return "[Iterator]";
    }),
      (te.KEYS = q),
      (te.VALUES = V),
      (te.ENTRIES = Y),
      (te.prototype.inspect = te.prototype.toSource =
        function () {
          return this.toString();
        }),
      (te.prototype[ve] = function () {
        return this;
      });
    function ne(a, u, d, m) {
      var y = a === 0 ? u : a === 1 ? d : [u, d];
      return m ? (m.value = y) : (m = { value: y, done: !1 }), m;
    }
    function ue() {
      return { value: void 0, done: !0 };
    }
    function be(a) {
      return !!et(a);
    }
    function Oe(a) {
      return a && typeof a.next == "function";
    }
    function ze(a) {
      var u = et(a);
      return u && u.call(a);
    }
    function et(a) {
      var u = a && ((ae && a[ae]) || a[Ee]);
      if (typeof u == "function") return u;
    }
    function Le(a) {
      return a && typeof a.length == "number";
    }
    n(le, i);
    function le(a) {
      return a == null ? Nt() : c(a) ? a.toSeq() : ce(a);
    }
    (le.of = function () {
      return le(arguments);
    }),
      (le.prototype.toSeq = function () {
        return this;
      }),
      (le.prototype.toString = function () {
        return this.__toString("Seq {", "}");
      }),
      (le.prototype.cacheResult = function () {
        return (
          !this._cache &&
            this.__iterateUncached &&
            ((this._cache = this.entrySeq().toArray()),
            (this.size = this._cache.length)),
          this
        );
      }),
      (le.prototype.__iterate = function (a, u) {
        return Jt(this, a, u, !0);
      }),
      (le.prototype.__iterator = function (a, u) {
        return Pt(this, a, u, !0);
      }),
      n(oe, le);
    function oe(a) {
      return a == null
        ? Nt().toKeyedSeq()
        : c(a)
        ? f(a)
          ? a.toSeq()
          : a.fromEntrySeq()
        : pe(a);
    }
    (oe.prototype.toKeyedSeq = function () {
      return this;
    }),
      n(fe, le);
    function fe(a) {
      return a == null
        ? Nt()
        : c(a)
        ? f(a)
          ? a.entrySeq()
          : a.toIndexedSeq()
        : ge(a);
    }
    (fe.of = function () {
      return fe(arguments);
    }),
      (fe.prototype.toIndexedSeq = function () {
        return this;
      }),
      (fe.prototype.toString = function () {
        return this.__toString("Seq [", "]");
      }),
      (fe.prototype.__iterate = function (a, u) {
        return Jt(this, a, u, !1);
      }),
      (fe.prototype.__iterator = function (a, u) {
        return Pt(this, a, u, !1);
      }),
      n(Te, le);
    function Te(a) {
      return (
        a == null ? Nt() : c(a) ? (f(a) ? a.entrySeq() : a) : ge(a)
      ).toSetSeq();
    }
    (Te.of = function () {
      return Te(arguments);
    }),
      (Te.prototype.toSetSeq = function () {
        return this;
      }),
      (le.isSeq = Be),
      (le.Keyed = oe),
      (le.Set = Te),
      (le.Indexed = fe);
    var xt = "@@__IMMUTABLE_SEQ__@@";
    (le.prototype[xt] = !0), n(Ue, fe);
    function Ue(a) {
      (this._array = a), (this.size = a.length);
    }
    (Ue.prototype.get = function (a, u) {
      return this.has(a) ? this._array[j(this, a)] : u;
    }),
      (Ue.prototype.__iterate = function (a, u) {
        for (var d = this._array, m = d.length - 1, y = 0; y <= m; y++)
          if (a(d[u ? m - y : y], y, this) === !1) return y + 1;
        return y;
      }),
      (Ue.prototype.__iterator = function (a, u) {
        var d = this._array,
          m = d.length - 1,
          y = 0;
        return new te(function () {
          return y > m ? ue() : ne(a, y, d[u ? m - y++ : y++]);
        });
      }),
      n(ft, oe);
    function ft(a) {
      var u = Object.keys(a);
      (this._object = a), (this._keys = u), (this.size = u.length);
    }
    (ft.prototype.get = function (a, u) {
      return u !== void 0 && !this.has(a) ? u : this._object[a];
    }),
      (ft.prototype.has = function (a) {
        return this._object.hasOwnProperty(a);
      }),
      (ft.prototype.__iterate = function (a, u) {
        for (
          var d = this._object, m = this._keys, y = m.length - 1, C = 0;
          C <= y;
          C++
        ) {
          var O = m[u ? y - C : C];
          if (a(d[O], O, this) === !1) return C + 1;
        }
        return C;
      }),
      (ft.prototype.__iterator = function (a, u) {
        var d = this._object,
          m = this._keys,
          y = m.length - 1,
          C = 0;
        return new te(function () {
          var O = m[u ? y - C : C];
          return C++ > y ? ue() : ne(a, O, d[O]);
        });
      }),
      (ft.prototype[b] = !0),
      n(wt, fe);
    function wt(a) {
      (this._iterable = a), (this.size = a.length || a.size);
    }
    (wt.prototype.__iterateUncached = function (a, u) {
      if (u) return this.cacheResult().__iterate(a, u);
      var d = this._iterable,
        m = ze(d),
        y = 0;
      if (Oe(m))
        for (var C; !(C = m.next()).done && a(C.value, y++, this) !== !1; );
      return y;
    }),
      (wt.prototype.__iteratorUncached = function (a, u) {
        if (u) return this.cacheResult().__iterator(a, u);
        var d = this._iterable,
          m = ze(d);
        if (!Oe(m)) return new te(ue);
        var y = 0;
        return new te(function () {
          var C = m.next();
          return C.done ? C : ne(a, y++, C.value);
        });
      }),
      n(Ve, fe);
    function Ve(a) {
      (this._iterator = a), (this._iteratorCache = []);
    }
    (Ve.prototype.__iterateUncached = function (a, u) {
      if (u) return this.cacheResult().__iterate(a, u);
      for (
        var d = this._iterator, m = this._iteratorCache, y = 0;
        y < m.length;

      )
        if (a(m[y], y++, this) === !1) return y;
      for (var C; !(C = d.next()).done; ) {
        var O = C.value;
        if (((m[y] = O), a(O, y++, this) === !1)) break;
      }
      return y;
    }),
      (Ve.prototype.__iteratorUncached = function (a, u) {
        if (u) return this.cacheResult().__iterator(a, u);
        var d = this._iterator,
          m = this._iteratorCache,
          y = 0;
        return new te(function () {
          if (y >= m.length) {
            var C = d.next();
            if (C.done) return C;
            m[y] = C.value;
          }
          return ne(a, y, m[y++]);
        });
      });
    function Be(a) {
      return !!(a && a[xt]);
    }
    var bt;
    function Nt() {
      return bt || (bt = new Ue([]));
    }
    function pe(a) {
      var u = Array.isArray(a)
        ? new Ue(a).fromEntrySeq()
        : Oe(a)
        ? new Ve(a).fromEntrySeq()
        : be(a)
        ? new wt(a).fromEntrySeq()
        : typeof a == "object"
        ? new ft(a)
        : void 0;
      if (!u)
        throw new TypeError(
          "Expected Array or iterable object of [k, v] entries, or keyed object: " +
            a
        );
      return u;
    }
    function ge(a) {
      var u = ke(a);
      if (!u)
        throw new TypeError(
          "Expected Array or iterable object of values: " + a
        );
      return u;
    }
    function ce(a) {
      var u = ke(a) || (typeof a == "object" && new ft(a));
      if (!u)
        throw new TypeError(
          "Expected Array or iterable object of values, or keyed object: " + a
        );
      return u;
    }
    function ke(a) {
      return Le(a) ? new Ue(a) : Oe(a) ? new Ve(a) : be(a) ? new wt(a) : void 0;
    }
    function Jt(a, u, d, m) {
      var y = a._cache;
      if (y) {
        for (var C = y.length - 1, O = 0; O <= C; O++) {
          var T = y[d ? C - O : O];
          if (u(T[1], m ? T[0] : O, a) === !1) return O + 1;
        }
        return O;
      }
      return a.__iterateUncached(u, d);
    }
    function Pt(a, u, d, m) {
      var y = a._cache;
      if (y) {
        var C = y.length - 1,
          O = 0;
        return new te(function () {
          var T = y[d ? C - O : O];
          return O++ > C ? ue() : ne(u, m ? T[0] : O - 1, T[1]);
        });
      }
      return a.__iteratorUncached(u, d);
    }
    function xe(a, u) {
      return u ? se(u, a, "", { "": a }) : Ot(a);
    }
    function se(a, u, d, m) {
      return Array.isArray(u)
        ? a.call(
            m,
            d,
            fe(u).map(function (y, C) {
              return se(a, y, C, u);
            })
          )
        : ri(u)
        ? a.call(
            m,
            d,
            oe(u).map(function (y, C) {
              return se(a, y, C, u);
            })
          )
        : u;
    }
    function Ot(a) {
      return Array.isArray(a)
        ? fe(a).map(Ot).toList()
        : ri(a)
        ? oe(a).map(Ot).toMap()
        : a;
    }
    function ri(a) {
      return a && (a.constructor === Object || a.constructor === void 0);
    }
    function Pe(a, u) {
      if (a === u || (a !== a && u !== u)) return !0;
      if (!a || !u) return !1;
      if (typeof a.valueOf == "function" && typeof u.valueOf == "function") {
        if (
          ((a = a.valueOf()),
          (u = u.valueOf()),
          a === u || (a !== a && u !== u))
        )
          return !0;
        if (!a || !u) return !1;
      }
      return !!(
        typeof a.equals == "function" &&
        typeof u.equals == "function" &&
        a.equals(u)
      );
    }
    function $s(a, u) {
      if (a === u) return !0;
      if (
        !c(u) ||
        (a.size !== void 0 && u.size !== void 0 && a.size !== u.size) ||
        (a.__hash !== void 0 && u.__hash !== void 0 && a.__hash !== u.__hash) ||
        f(a) !== f(u) ||
        h(a) !== h(u) ||
        p(a) !== p(u)
      )
        return !1;
      if (a.size === 0 && u.size === 0) return !0;
      var d = !g(a);
      if (p(a)) {
        var m = a.entries();
        return (
          u.every(function (B, R) {
            var $ = m.next().value;
            return $ && Pe($[1], B) && (d || Pe($[0], R));
          }) && m.next().done
        );
      }
      var y = !1;
      if (a.size === void 0)
        if (u.size === void 0)
          typeof a.cacheResult == "function" && a.cacheResult();
        else {
          y = !0;
          var C = a;
          (a = u), (u = C);
        }
      var O = !0,
        T = u.__iterate(function (B, R) {
          if (d ? !a.has(B) : y ? !Pe(B, a.get(R, L)) : !Pe(a.get(R, L), B))
            return (O = !1), !1;
        });
      return O && a.size === T;
    }
    n(dt, fe);
    function dt(a, u) {
      if (!(this instanceof dt)) return new dt(a, u);
      if (
        ((this._value = a),
        (this.size = u === void 0 ? 1 / 0 : Math.max(0, u)),
        this.size === 0)
      ) {
        if (Ks) return Ks;
        Ks = this;
      }
    }
    (dt.prototype.toString = function () {
      return this.size === 0
        ? "Repeat []"
        : "Repeat [ " + this._value + " " + this.size + " times ]";
    }),
      (dt.prototype.get = function (a, u) {
        return this.has(a) ? this._value : u;
      }),
      (dt.prototype.includes = function (a) {
        return Pe(this._value, a);
      }),
      (dt.prototype.slice = function (a, u) {
        var d = this.size;
        return G(a, u, d) ? this : new dt(this._value, ee(u, d) - Z(a, d));
      }),
      (dt.prototype.reverse = function () {
        return this;
      }),
      (dt.prototype.indexOf = function (a) {
        return Pe(this._value, a) ? 0 : -1;
      }),
      (dt.prototype.lastIndexOf = function (a) {
        return Pe(this._value, a) ? this.size : -1;
      }),
      (dt.prototype.__iterate = function (a, u) {
        for (var d = 0; d < this.size; d++)
          if (a(this._value, d, this) === !1) return d + 1;
        return d;
      }),
      (dt.prototype.__iterator = function (a, u) {
        var d = this,
          m = 0;
        return new te(function () {
          return m < d.size ? ne(a, m++, d._value) : ue();
        });
      }),
      (dt.prototype.equals = function (a) {
        return a instanceof dt ? Pe(this._value, a._value) : $s(a);
      });
    var Ks;
    function Ca(a, u) {
      if (!a) throw new Error(u);
    }
    n(pt, fe);
    function pt(a, u, d) {
      if (!(this instanceof pt)) return new pt(a, u, d);
      if (
        (Ca(d !== 0, "Cannot step a Range by 0"),
        (a = a || 0),
        u === void 0 && (u = 1 / 0),
        (d = d === void 0 ? 1 : Math.abs(d)),
        u < a && (d = -d),
        (this._start = a),
        (this._end = u),
        (this._step = d),
        (this.size = Math.max(0, Math.ceil((u - a) / d - 1) + 1)),
        this.size === 0)
      ) {
        if (zs) return zs;
        zs = this;
      }
    }
    (pt.prototype.toString = function () {
      return this.size === 0
        ? "Range []"
        : "Range [ " +
            this._start +
            "..." +
            this._end +
            (this._step > 1 ? " by " + this._step : "") +
            " ]";
    }),
      (pt.prototype.get = function (a, u) {
        return this.has(a) ? this._start + j(this, a) * this._step : u;
      }),
      (pt.prototype.includes = function (a) {
        var u = (a - this._start) / this._step;
        return u >= 0 && u < this.size && u === Math.floor(u);
      }),
      (pt.prototype.slice = function (a, u) {
        return G(a, u, this.size)
          ? this
          : ((a = Z(a, this.size)),
            (u = ee(u, this.size)),
            u <= a
              ? new pt(0, 0)
              : new pt(
                  this.get(a, this._end),
                  this.get(u, this._end),
                  this._step
                ));
      }),
      (pt.prototype.indexOf = function (a) {
        var u = a - this._start;
        if (u % this._step === 0) {
          var d = u / this._step;
          if (d >= 0 && d < this.size) return d;
        }
        return -1;
      }),
      (pt.prototype.lastIndexOf = function (a) {
        return this.indexOf(a);
      }),
      (pt.prototype.__iterate = function (a, u) {
        for (
          var d = this.size - 1,
            m = this._step,
            y = u ? this._start + d * m : this._start,
            C = 0;
          C <= d;
          C++
        ) {
          if (a(y, C, this) === !1) return C + 1;
          y += u ? -m : m;
        }
        return C;
      }),
      (pt.prototype.__iterator = function (a, u) {
        var d = this.size - 1,
          m = this._step,
          y = u ? this._start + d * m : this._start,
          C = 0;
        return new te(function () {
          var O = y;
          return (y += u ? -m : m), C > d ? ue() : ne(a, C++, O);
        });
      }),
      (pt.prototype.equals = function (a) {
        return a instanceof pt
          ? this._start === a._start &&
              this._end === a._end &&
              this._step === a._step
          : $s(this, a);
      });
    var zs;
    n(Jr, i);
    function Jr() {
      throw TypeError("Abstract");
    }
    n(Xi, Jr);
    function Xi() {}
    n(ni, Jr);
    function ni() {}
    n(ba, Jr);
    function ba() {}
    (Jr.Keyed = Xi), (Jr.Indexed = ni), (Jr.Set = ba);
    var Zi =
      typeof Math.imul == "function" && Math.imul(4294967295, 2) === -2
        ? Math.imul
        : function (u, d) {
            (u = u | 0), (d = d | 0);
            var m = u & 65535,
              y = d & 65535;
            return (
              (m * y + ((((u >>> 16) * y + m * (d >>> 16)) << 16) >>> 0)) | 0
            );
          };
    function Us(a) {
      return ((a >>> 1) & 1073741824) | (a & 3221225471);
    }
    function Ft(a) {
      if (
        a === !1 ||
        a === null ||
        a === void 0 ||
        (typeof a.valueOf == "function" &&
          ((a = a.valueOf()), a === !1 || a === null || a === void 0))
      )
        return 0;
      if (a === !0) return 1;
      var u = typeof a;
      if (u === "number") {
        var d = a | 0;
        for (d !== a && (d ^= a * 4294967295); a > 4294967295; )
          (a /= 4294967295), (d ^= a);
        return Us(d);
      }
      if (u === "string") return a.length > zw ? Fw(a) : Hs(a);
      if (typeof a.hashCode == "function") return a.hashCode();
      if (u === "object") return $w(a);
      if (typeof a.toString == "function") return Hs(a.toString());
      throw new Error("Value type " + u + " cannot be hashed.");
    }
    function Fw(a) {
      var u = Js[a];
      return (
        u === void 0 &&
          ((u = Hs(a)), Gs === Uw && ((Gs = 0), (Js = {})), Gs++, (Js[a] = u)),
        u
      );
    }
    function Hs(a) {
      for (var u = 0, d = 0; d < a.length; d++)
        u = (31 * u + a.charCodeAt(d)) | 0;
      return Us(u);
    }
    function $w(a) {
      var u;
      if (
        (Ws && ((u = qs.get(a)), u !== void 0)) ||
        ((u = a[Nn]), u !== void 0) ||
        (!Yd &&
          ((u = a.propertyIsEnumerable && a.propertyIsEnumerable[Nn]),
          u !== void 0 || ((u = Kw(a)), u !== void 0)))
      )
        return u;
      if (((u = ++Vs), Vs & 1073741824 && (Vs = 0), Ws)) qs.set(a, u);
      else {
        if (Jd !== void 0 && Jd(a) === !1)
          throw new Error("Non-extensible objects are not allowed as keys.");
        if (Yd)
          Object.defineProperty(a, Nn, {
            enumerable: !1,
            configurable: !1,
            writable: !1,
            value: u,
          });
        else if (
          a.propertyIsEnumerable !== void 0 &&
          a.propertyIsEnumerable ===
            a.constructor.prototype.propertyIsEnumerable
        )
          (a.propertyIsEnumerable = function () {
            return this.constructor.prototype.propertyIsEnumerable.apply(
              this,
              arguments
            );
          }),
            (a.propertyIsEnumerable[Nn] = u);
        else if (a.nodeType !== void 0) a[Nn] = u;
        else
          throw new Error("Unable to set a non-enumerable property on object.");
      }
      return u;
    }
    var Jd = Object.isExtensible,
      Yd = (function () {
        try {
          return Object.defineProperty({}, "@", {}), !0;
        } catch {
          return !1;
        }
      })();
    function Kw(a) {
      if (a && a.nodeType > 0)
        switch (a.nodeType) {
          case 1:
            return a.uniqueID;
          case 9:
            return a.documentElement && a.documentElement.uniqueID;
        }
    }
    var Ws = typeof WeakMap == "function",
      qs;
    Ws && (qs = new WeakMap());
    var Vs = 0,
      Nn = "__immutablehash__";
    typeof Symbol == "function" && (Nn = Symbol(Nn));
    var zw = 16,
      Uw = 255,
      Gs = 0,
      Js = {};
    function $t(a) {
      Ca(a !== 1 / 0, "Cannot perform this action with an infinite size.");
    }
    n(we, Xi);
    function we(a) {
      return a == null
        ? mr()
        : Ys(a) && !p(a)
        ? a
        : mr().withMutations(function (u) {
            var d = o(a);
            $t(d.size),
              d.forEach(function (m, y) {
                return u.set(y, m);
              });
          });
    }
    (we.prototype.toString = function () {
      return this.__toString("Map {", "}");
    }),
      (we.prototype.get = function (a, u) {
        return this._root ? this._root.get(0, void 0, a, u) : u;
      }),
      (we.prototype.set = function (a, u) {
        return ep(this, a, u);
      }),
      (we.prototype.setIn = function (a, u) {
        return this.updateIn(a, L, function () {
          return u;
        });
      }),
      (we.prototype.remove = function (a) {
        return ep(this, a, L);
      }),
      (we.prototype.deleteIn = function (a) {
        return this.updateIn(a, function () {
          return L;
        });
      }),
      (we.prototype.update = function (a, u, d) {
        return arguments.length === 1 ? a(this) : this.updateIn([a], u, d);
      }),
      (we.prototype.updateIn = function (a, u, d) {
        d || ((d = u), (u = void 0));
        var m = op(this, bp(a), u, d);
        return m === L ? void 0 : m;
      }),
      (we.prototype.clear = function () {
        return this.size === 0
          ? this
          : this.__ownerID
          ? ((this.size = 0),
            (this._root = null),
            (this.__hash = void 0),
            (this.__altered = !0),
            this)
          : mr();
      }),
      (we.prototype.merge = function () {
        return Na(this, void 0, arguments);
      }),
      (we.prototype.mergeWith = function (a) {
        var u = r.call(arguments, 1);
        return Na(this, a, u);
      }),
      (we.prototype.mergeIn = function (a) {
        var u = r.call(arguments, 1);
        return this.updateIn(a, mr(), function (d) {
          return typeof d.merge == "function"
            ? d.merge.apply(d, u)
            : u[u.length - 1];
        });
      }),
      (we.prototype.mergeDeep = function () {
        return Na(this, rp, arguments);
      }),
      (we.prototype.mergeDeepWith = function (a) {
        var u = r.call(arguments, 1);
        return Na(this, np(a), u);
      }),
      (we.prototype.mergeDeepIn = function (a) {
        var u = r.call(arguments, 1);
        return this.updateIn(a, mr(), function (d) {
          return typeof d.mergeDeep == "function"
            ? d.mergeDeep.apply(d, u)
            : u[u.length - 1];
        });
      }),
      (we.prototype.sort = function (a) {
        return Je(ci(this, a));
      }),
      (we.prototype.sortBy = function (a, u) {
        return Je(ci(this, u, a));
      }),
      (we.prototype.withMutations = function (a) {
        var u = this.asMutable();
        return a(u), u.wasAltered() ? u.__ensureOwner(this.__ownerID) : this;
      }),
      (we.prototype.asMutable = function () {
        return this.__ownerID ? this : this.__ensureOwner(new P());
      }),
      (we.prototype.asImmutable = function () {
        return this.__ensureOwner();
      }),
      (we.prototype.wasAltered = function () {
        return this.__altered;
      }),
      (we.prototype.__iterator = function (a, u) {
        return new Qs(this, a, u);
      }),
      (we.prototype.__iterate = function (a, u) {
        var d = this,
          m = 0;
        return (
          this._root &&
            this._root.iterate(function (y) {
              return m++, a(y[1], y[0], d);
            }, u),
          m
        );
      }),
      (we.prototype.__ensureOwner = function (a) {
        return a === this.__ownerID
          ? this
          : a
          ? Zs(this.size, this._root, a, this.__hash)
          : ((this.__ownerID = a), (this.__altered = !1), this);
      });
    function Ys(a) {
      return !!(a && a[Qd]);
    }
    we.isMap = Ys;
    var Qd = "@@__IMMUTABLE_MAP__@@",
      ye = we.prototype;
    (ye[Qd] = !0), (ye[S] = ye.remove), (ye.removeIn = ye.deleteIn);
    function eo(a, u) {
      (this.ownerID = a), (this.entries = u);
    }
    (eo.prototype.get = function (a, u, d, m) {
      for (var y = this.entries, C = 0, O = y.length; C < O; C++)
        if (Pe(d, y[C][0])) return y[C][1];
      return m;
    }),
      (eo.prototype.update = function (a, u, d, m, y, C, O) {
        for (
          var T = y === L, B = this.entries, R = 0, $ = B.length;
          R < $ && !Pe(m, B[R][0]);
          R++
        );
        var J = R < $;
        if (J ? B[R][1] === y : T) return this;
        if ((H(O), (T || !J) && H(C), !(T && B.length === 1))) {
          if (!J && !T && B.length >= Jw) return Hw(a, B, m, y);
          var X = a && a === this.ownerID,
            de = X ? B : M(B);
          return (
            J
              ? T
                ? R === $ - 1
                  ? de.pop()
                  : (de[R] = de.pop())
                : (de[R] = [m, y])
              : de.push([m, y]),
            X ? ((this.entries = de), this) : new eo(a, de)
          );
        }
      });
    function ii(a, u, d) {
      (this.ownerID = a), (this.bitmap = u), (this.nodes = d);
    }
    (ii.prototype.get = function (a, u, d, m) {
      u === void 0 && (u = Ft(d));
      var y = 1 << ((a === 0 ? u : u >>> a) & N),
        C = this.bitmap;
      return C & y ? this.nodes[ap(C & (y - 1))].get(a + _, u, d, m) : m;
    }),
      (ii.prototype.update = function (a, u, d, m, y, C, O) {
        d === void 0 && (d = Ft(m));
        var T = (u === 0 ? d : d >>> u) & N,
          B = 1 << T,
          R = this.bitmap,
          $ = (R & B) !== 0;
        if (!$ && y === L) return this;
        var J = ap(R & (B - 1)),
          X = this.nodes,
          de = $ ? X[J] : void 0,
          he = eu(de, a, u + _, d, m, y, C, O);
        if (he === de) return this;
        if (!$ && he && X.length >= Yw) return qw(a, X, R, T, he);
        if ($ && !he && X.length === 2 && tp(X[J ^ 1])) return X[J ^ 1];
        if ($ && he && X.length === 1 && tp(he)) return he;
        var $e = a && a === this.ownerID,
          lr = $ ? (he ? R : R ^ B) : R | B,
          xr = $ ? (he ? lp(X, J, he, $e) : Gw(X, J, $e)) : Vw(X, J, he, $e);
        return $e
          ? ((this.bitmap = lr), (this.nodes = xr), this)
          : new ii(a, lr, xr);
      });
    function to(a, u, d) {
      (this.ownerID = a), (this.count = u), (this.nodes = d);
    }
    (to.prototype.get = function (a, u, d, m) {
      u === void 0 && (u = Ft(d));
      var y = (a === 0 ? u : u >>> a) & N,
        C = this.nodes[y];
      return C ? C.get(a + _, u, d, m) : m;
    }),
      (to.prototype.update = function (a, u, d, m, y, C, O) {
        d === void 0 && (d = Ft(m));
        var T = (u === 0 ? d : d >>> u) & N,
          B = y === L,
          R = this.nodes,
          $ = R[T];
        if (B && !$) return this;
        var J = eu($, a, u + _, d, m, y, C, O);
        if (J === $) return this;
        var X = this.count;
        if (!$) X++;
        else if (!J && (X--, X < Qw)) return Ww(a, R, X, T);
        var de = a && a === this.ownerID,
          he = lp(R, T, J, de);
        return de
          ? ((this.count = X), (this.nodes = he), this)
          : new to(a, X, he);
      });
    function oi(a, u, d) {
      (this.ownerID = a), (this.keyHash = u), (this.entries = d);
    }
    (oi.prototype.get = function (a, u, d, m) {
      for (var y = this.entries, C = 0, O = y.length; C < O; C++)
        if (Pe(d, y[C][0])) return y[C][1];
      return m;
    }),
      (oi.prototype.update = function (a, u, d, m, y, C, O) {
        d === void 0 && (d = Ft(m));
        var T = y === L;
        if (d !== this.keyHash)
          return T ? this : (H(O), H(C), tu(this, a, u, d, [m, y]));
        for (
          var B = this.entries, R = 0, $ = B.length;
          R < $ && !Pe(m, B[R][0]);
          R++
        );
        var J = R < $;
        if (J ? B[R][1] === y : T) return this;
        if ((H(O), (T || !J) && H(C), T && $ === 2))
          return new Lr(a, this.keyHash, B[R ^ 1]);
        var X = a && a === this.ownerID,
          de = X ? B : M(B);
        return (
          J
            ? T
              ? R === $ - 1
                ? de.pop()
                : (de[R] = de.pop())
              : (de[R] = [m, y])
            : de.push([m, y]),
          X ? ((this.entries = de), this) : new oi(a, this.keyHash, de)
        );
      });
    function Lr(a, u, d) {
      (this.ownerID = a), (this.keyHash = u), (this.entry = d);
    }
    (Lr.prototype.get = function (a, u, d, m) {
      return Pe(d, this.entry[0]) ? this.entry[1] : m;
    }),
      (Lr.prototype.update = function (a, u, d, m, y, C, O) {
        var T = y === L,
          B = Pe(m, this.entry[0]);
        if (B ? y === this.entry[1] : T) return this;
        if ((H(O), T)) {
          H(C);
          return;
        }
        return B
          ? a && a === this.ownerID
            ? ((this.entry[1] = y), this)
            : new Lr(a, this.keyHash, [m, y])
          : (H(C), tu(this, a, u, Ft(m), [m, y]));
      }),
      (eo.prototype.iterate = oi.prototype.iterate =
        function (a, u) {
          for (var d = this.entries, m = 0, y = d.length - 1; m <= y; m++)
            if (a(d[u ? y - m : m]) === !1) return !1;
        }),
      (ii.prototype.iterate = to.prototype.iterate =
        function (a, u) {
          for (var d = this.nodes, m = 0, y = d.length - 1; m <= y; m++) {
            var C = d[u ? y - m : m];
            if (C && C.iterate(a, u) === !1) return !1;
          }
        }),
      (Lr.prototype.iterate = function (a, u) {
        return a(this.entry);
      }),
      n(Qs, te);
    function Qs(a, u, d) {
      (this._type = u),
        (this._reverse = d),
        (this._stack = a._root && Xd(a._root));
    }
    Qs.prototype.next = function () {
      for (var a = this._type, u = this._stack; u; ) {
        var d = u.node,
          m = u.index++,
          y;
        if (d.entry) {
          if (m === 0) return Xs(a, d.entry);
        } else if (d.entries) {
          if (((y = d.entries.length - 1), m <= y))
            return Xs(a, d.entries[this._reverse ? y - m : m]);
        } else if (((y = d.nodes.length - 1), m <= y)) {
          var C = d.nodes[this._reverse ? y - m : m];
          if (C) {
            if (C.entry) return Xs(a, C.entry);
            u = this._stack = Xd(C, u);
          }
          continue;
        }
        u = this._stack = this._stack.__prev;
      }
      return ue();
    };
    function Xs(a, u) {
      return ne(a, u[0], u[1]);
    }
    function Xd(a, u) {
      return { node: a, index: 0, __prev: u };
    }
    function Zs(a, u, d, m) {
      var y = Object.create(ye);
      return (
        (y.size = a),
        (y._root = u),
        (y.__ownerID = d),
        (y.__hash = m),
        (y.__altered = !1),
        y
      );
    }
    var Zd;
    function mr() {
      return Zd || (Zd = Zs(0));
    }
    function ep(a, u, d) {
      var m, y;
      if (a._root) {
        var C = F(A),
          O = F(K);
        if (((m = eu(a._root, a.__ownerID, 0, void 0, u, d, C, O)), !O.value))
          return a;
        y = a.size + (C.value ? (d === L ? -1 : 1) : 0);
      } else {
        if (d === L) return a;
        (y = 1), (m = new eo(a.__ownerID, [[u, d]]));
      }
      return a.__ownerID
        ? ((a.size = y),
          (a._root = m),
          (a.__hash = void 0),
          (a.__altered = !0),
          a)
        : m
        ? Zs(y, m)
        : mr();
    }
    function eu(a, u, d, m, y, C, O, T) {
      return a
        ? a.update(u, d, m, y, C, O, T)
        : C === L
        ? a
        : (H(T), H(O), new Lr(u, m, [y, C]));
    }
    function tp(a) {
      return a.constructor === Lr || a.constructor === oi;
    }
    function tu(a, u, d, m, y) {
      if (a.keyHash === m) return new oi(u, m, [a.entry, y]);
      var C = (d === 0 ? a.keyHash : a.keyHash >>> d) & N,
        O = (d === 0 ? m : m >>> d) & N,
        T,
        B =
          C === O
            ? [tu(a, u, d + _, m, y)]
            : ((T = new Lr(u, m, y)), C < O ? [a, T] : [T, a]);
      return new ii(u, (1 << C) | (1 << O), B);
    }
    function Hw(a, u, d, m) {
      a || (a = new P());
      for (var y = new Lr(a, Ft(d), [d, m]), C = 0; C < u.length; C++) {
        var O = u[C];
        y = y.update(a, 0, void 0, O[0], O[1]);
      }
      return y;
    }
    function Ww(a, u, d, m) {
      for (
        var y = 0, C = 0, O = new Array(d), T = 0, B = 1, R = u.length;
        T < R;
        T++, B <<= 1
      ) {
        var $ = u[T];
        $ !== void 0 && T !== m && ((y |= B), (O[C++] = $));
      }
      return new ii(a, y, O);
    }
    function qw(a, u, d, m, y) {
      for (var C = 0, O = new Array(E), T = 0; d !== 0; T++, d >>>= 1)
        O[T] = d & 1 ? u[C++] : void 0;
      return (O[m] = y), new to(a, C + 1, O);
    }
    function Na(a, u, d) {
      for (var m = [], y = 0; y < d.length; y++) {
        var C = d[y],
          O = o(C);
        c(C) ||
          (O = O.map(function (T) {
            return xe(T);
          })),
          m.push(O);
      }
      return ip(a, u, m);
    }
    function rp(a, u, d) {
      return a && a.mergeDeep && c(u) ? a.mergeDeep(u) : Pe(a, u) ? a : u;
    }
    function np(a) {
      return function (u, d, m) {
        if (u && u.mergeDeepWith && c(d)) return u.mergeDeepWith(a, d);
        var y = a(u, d, m);
        return Pe(u, y) ? u : y;
      };
    }
    function ip(a, u, d) {
      return (
        (d = d.filter(function (m) {
          return m.size !== 0;
        })),
        d.length === 0
          ? a
          : a.size === 0 && !a.__ownerID && d.length === 1
          ? a.constructor(d[0])
          : a.withMutations(function (m) {
              for (
                var y = u
                    ? function (O, T) {
                        m.update(T, L, function (B) {
                          return B === L ? O : u(B, O, T);
                        });
                      }
                    : function (O, T) {
                        m.set(T, O);
                      },
                  C = 0;
                C < d.length;
                C++
              )
                d[C].forEach(y);
            })
      );
    }
    function op(a, u, d, m) {
      var y = a === L,
        C = u.next();
      if (C.done) {
        var O = y ? d : a,
          T = m(O);
        return T === O ? a : T;
      }
      Ca(y || (a && a.set), "invalid keyPath");
      var B = C.value,
        R = y ? L : a.get(B, L),
        $ = op(R, u, d, m);
      return $ === R ? a : $ === L ? a.remove(B) : (y ? mr() : a).set(B, $);
    }
    function ap(a) {
      return (
        (a = a - ((a >> 1) & 1431655765)),
        (a = (a & 858993459) + ((a >> 2) & 858993459)),
        (a = (a + (a >> 4)) & 252645135),
        (a = a + (a >> 8)),
        (a = a + (a >> 16)),
        a & 127
      );
    }
    function lp(a, u, d, m) {
      var y = m ? a : M(a);
      return (y[u] = d), y;
    }
    function Vw(a, u, d, m) {
      var y = a.length + 1;
      if (m && u + 1 === y) return (a[u] = d), a;
      for (var C = new Array(y), O = 0, T = 0; T < y; T++)
        T === u ? ((C[T] = d), (O = -1)) : (C[T] = a[T + O]);
      return C;
    }
    function Gw(a, u, d) {
      var m = a.length - 1;
      if (d && u === m) return a.pop(), a;
      for (var y = new Array(m), C = 0, O = 0; O < m; O++)
        O === u && (C = 1), (y[O] = a[O + C]);
      return y;
    }
    var Jw = E / 4,
      Yw = E / 2,
      Qw = E / 4;
    n(Ie, ni);
    function Ie(a) {
      var u = ru();
      if (a == null) return u;
      if (sp(a)) return a;
      var d = l(a),
        m = d.size;
      return m === 0
        ? u
        : ($t(m),
          m > 0 && m < E
            ? no(0, m, _, null, new Yr(d.toArray()))
            : u.withMutations(function (y) {
                y.setSize(m),
                  d.forEach(function (C, O) {
                    return y.set(O, C);
                  });
              }));
    }
    (Ie.of = function () {
      return this(arguments);
    }),
      (Ie.prototype.toString = function () {
        return this.__toString("List [", "]");
      }),
      (Ie.prototype.get = function (a, u) {
        if (((a = j(this, a)), a >= 0 && a < this.size)) {
          a += this._origin;
          var d = dp(this, a);
          return d && d.array[a & N];
        }
        return u;
      }),
      (Ie.prototype.set = function (a, u) {
        return Xw(this, a, u);
      }),
      (Ie.prototype.remove = function (a) {
        return this.has(a)
          ? a === 0
            ? this.shift()
            : a === this.size - 1
            ? this.pop()
            : this.splice(a, 1)
          : this;
      }),
      (Ie.prototype.insert = function (a, u) {
        return this.splice(a, 0, u);
      }),
      (Ie.prototype.clear = function () {
        return this.size === 0
          ? this
          : this.__ownerID
          ? ((this.size = this._origin = this._capacity = 0),
            (this._level = _),
            (this._root = this._tail = null),
            (this.__hash = void 0),
            (this.__altered = !0),
            this)
          : ru();
      }),
      (Ie.prototype.push = function () {
        var a = arguments,
          u = this.size;
        return this.withMutations(function (d) {
          Qr(d, 0, u + a.length);
          for (var m = 0; m < a.length; m++) d.set(u + m, a[m]);
        });
      }),
      (Ie.prototype.pop = function () {
        return Qr(this, 0, -1);
      }),
      (Ie.prototype.unshift = function () {
        var a = arguments;
        return this.withMutations(function (u) {
          Qr(u, -a.length);
          for (var d = 0; d < a.length; d++) u.set(d, a[d]);
        });
      }),
      (Ie.prototype.shift = function () {
        return Qr(this, 1);
      }),
      (Ie.prototype.merge = function () {
        return Oa(this, void 0, arguments);
      }),
      (Ie.prototype.mergeWith = function (a) {
        var u = r.call(arguments, 1);
        return Oa(this, a, u);
      }),
      (Ie.prototype.mergeDeep = function () {
        return Oa(this, rp, arguments);
      }),
      (Ie.prototype.mergeDeepWith = function (a) {
        var u = r.call(arguments, 1);
        return Oa(this, np(a), u);
      }),
      (Ie.prototype.setSize = function (a) {
        return Qr(this, 0, a);
      }),
      (Ie.prototype.slice = function (a, u) {
        var d = this.size;
        return G(a, u, d) ? this : Qr(this, Z(a, d), ee(u, d));
      }),
      (Ie.prototype.__iterator = function (a, u) {
        var d = 0,
          m = cp(this, u);
        return new te(function () {
          var y = m();
          return y === ro ? ue() : ne(a, d++, y);
        });
      }),
      (Ie.prototype.__iterate = function (a, u) {
        for (
          var d = 0, m = cp(this, u), y;
          (y = m()) !== ro && a(y, d++, this) !== !1;

        );
        return d;
      }),
      (Ie.prototype.__ensureOwner = function (a) {
        return a === this.__ownerID
          ? this
          : a
          ? no(
              this._origin,
              this._capacity,
              this._level,
              this._root,
              this._tail,
              a,
              this.__hash
            )
          : ((this.__ownerID = a), this);
      });
    function sp(a) {
      return !!(a && a[up]);
    }
    Ie.isList = sp;
    var up = "@@__IMMUTABLE_LIST__@@",
      _t = Ie.prototype;
    (_t[up] = !0),
      (_t[S] = _t.remove),
      (_t.setIn = ye.setIn),
      (_t.deleteIn = _t.removeIn = ye.removeIn),
      (_t.update = ye.update),
      (_t.updateIn = ye.updateIn),
      (_t.mergeIn = ye.mergeIn),
      (_t.mergeDeepIn = ye.mergeDeepIn),
      (_t.withMutations = ye.withMutations),
      (_t.asMutable = ye.asMutable),
      (_t.asImmutable = ye.asImmutable),
      (_t.wasAltered = ye.wasAltered);
    function Yr(a, u) {
      (this.array = a), (this.ownerID = u);
    }
    (Yr.prototype.removeBefore = function (a, u, d) {
      if (d === u ? 1 << u : this.array.length === 0) return this;
      var m = (d >>> u) & N;
      if (m >= this.array.length) return new Yr([], a);
      var y = m === 0,
        C;
      if (u > 0) {
        var O = this.array[m];
        if (((C = O && O.removeBefore(a, u - _, d)), C === O && y)) return this;
      }
      if (y && !C) return this;
      var T = ai(this, a);
      if (!y) for (var B = 0; B < m; B++) T.array[B] = void 0;
      return C && (T.array[m] = C), T;
    }),
      (Yr.prototype.removeAfter = function (a, u, d) {
        if (d === (u ? 1 << u : 0) || this.array.length === 0) return this;
        var m = ((d - 1) >>> u) & N;
        if (m >= this.array.length) return this;
        var y;
        if (u > 0) {
          var C = this.array[m];
          if (
            ((y = C && C.removeAfter(a, u - _, d)),
            y === C && m === this.array.length - 1)
          )
            return this;
        }
        var O = ai(this, a);
        return O.array.splice(m + 1), y && (O.array[m] = y), O;
      });
    var ro = {};
    function cp(a, u) {
      var d = a._origin,
        m = a._capacity,
        y = io(m),
        C = a._tail;
      return O(a._root, a._level, 0);
      function O(R, $, J) {
        return $ === 0 ? T(R, J) : B(R, $, J);
      }
      function T(R, $) {
        var J = $ === y ? C && C.array : R && R.array,
          X = $ > d ? 0 : d - $,
          de = m - $;
        return (
          de > E && (de = E),
          function () {
            if (X === de) return ro;
            var he = u ? --de : X++;
            return J && J[he];
          }
        );
      }
      function B(R, $, J) {
        var X,
          de = R && R.array,
          he = J > d ? 0 : (d - J) >> $,
          $e = ((m - J) >> $) + 1;
        return (
          $e > E && ($e = E),
          function () {
            do {
              if (X) {
                var lr = X();
                if (lr !== ro) return lr;
                X = null;
              }
              if (he === $e) return ro;
              var xr = u ? --$e : he++;
              X = O(de && de[xr], $ - _, J + (xr << $));
            } while (!0);
          }
        );
      }
    }
    function no(a, u, d, m, y, C, O) {
      var T = Object.create(_t);
      return (
        (T.size = u - a),
        (T._origin = a),
        (T._capacity = u),
        (T._level = d),
        (T._root = m),
        (T._tail = y),
        (T.__ownerID = C),
        (T.__hash = O),
        (T.__altered = !1),
        T
      );
    }
    var fp;
    function ru() {
      return fp || (fp = no(0, 0, _));
    }
    function Xw(a, u, d) {
      if (((u = j(a, u)), u !== u)) return a;
      if (u >= a.size || u < 0)
        return a.withMutations(function (O) {
          u < 0 ? Qr(O, u).set(0, d) : Qr(O, 0, u + 1).set(u, d);
        });
      u += a._origin;
      var m = a._tail,
        y = a._root,
        C = F(K);
      return (
        u >= io(a._capacity)
          ? (m = nu(m, a.__ownerID, 0, u, d, C))
          : (y = nu(y, a.__ownerID, a._level, u, d, C)),
        C.value
          ? a.__ownerID
            ? ((a._root = y),
              (a._tail = m),
              (a.__hash = void 0),
              (a.__altered = !0),
              a)
            : no(a._origin, a._capacity, a._level, y, m)
          : a
      );
    }
    function nu(a, u, d, m, y, C) {
      var O = (m >>> d) & N,
        T = a && O < a.array.length;
      if (!T && y === void 0) return a;
      var B;
      if (d > 0) {
        var R = a && a.array[O],
          $ = nu(R, u, d - _, m, y, C);
        return $ === R ? a : ((B = ai(a, u)), (B.array[O] = $), B);
      }
      return T && a.array[O] === y
        ? a
        : (H(C),
          (B = ai(a, u)),
          y === void 0 && O === B.array.length - 1
            ? B.array.pop()
            : (B.array[O] = y),
          B);
    }
    function ai(a, u) {
      return u && a && u === a.ownerID
        ? a
        : new Yr(a ? a.array.slice() : [], u);
    }
    function dp(a, u) {
      if (u >= io(a._capacity)) return a._tail;
      if (u < 1 << (a._level + _)) {
        for (var d = a._root, m = a._level; d && m > 0; )
          (d = d.array[(u >>> m) & N]), (m -= _);
        return d;
      }
    }
    function Qr(a, u, d) {
      u !== void 0 && (u = u | 0), d !== void 0 && (d = d | 0);
      var m = a.__ownerID || new P(),
        y = a._origin,
        C = a._capacity,
        O = y + u,
        T = d === void 0 ? C : d < 0 ? C + d : y + d;
      if (O === y && T === C) return a;
      if (O >= T) return a.clear();
      for (var B = a._level, R = a._root, $ = 0; O + $ < 0; )
        (R = new Yr(R && R.array.length ? [void 0, R] : [], m)),
          (B += _),
          ($ += 1 << B);
      $ && ((O += $), (y += $), (T += $), (C += $));
      for (var J = io(C), X = io(T); X >= 1 << (B + _); )
        (R = new Yr(R && R.array.length ? [R] : [], m)), (B += _);
      var de = a._tail,
        he = X < J ? dp(a, T - 1) : X > J ? new Yr([], m) : de;
      if (de && X > J && O < C && de.array.length) {
        R = ai(R, m);
        for (var $e = R, lr = B; lr > _; lr -= _) {
          var xr = (J >>> lr) & N;
          $e = $e.array[xr] = ai($e.array[xr], m);
        }
        $e.array[(J >>> _) & N] = de;
      }
      if ((T < C && (he = he && he.removeAfter(m, 0, T)), O >= X))
        (O -= X),
          (T -= X),
          (B = _),
          (R = null),
          (he = he && he.removeBefore(m, 0, O));
      else if (O > y || X < J) {
        for ($ = 0; R; ) {
          var Ia = (O >>> B) & N;
          if ((Ia !== X >>> B) & N) break;
          Ia && ($ += (1 << B) * Ia), (B -= _), (R = R.array[Ia]);
        }
        R && O > y && (R = R.removeBefore(m, B, O - $)),
          R && X < J && (R = R.removeAfter(m, B, X - $)),
          $ && ((O -= $), (T -= $));
      }
      return a.__ownerID
        ? ((a.size = T - O),
          (a._origin = O),
          (a._capacity = T),
          (a._level = B),
          (a._root = R),
          (a._tail = he),
          (a.__hash = void 0),
          (a.__altered = !0),
          a)
        : no(O, T, B, R, he);
    }
    function Oa(a, u, d) {
      for (var m = [], y = 0, C = 0; C < d.length; C++) {
        var O = d[C],
          T = l(O);
        T.size > y && (y = T.size),
          c(O) ||
            (T = T.map(function (B) {
              return xe(B);
            })),
          m.push(T);
      }
      return y > a.size && (a = a.setSize(y)), ip(a, u, m);
    }
    function io(a) {
      return a < E ? 0 : ((a - 1) >>> _) << _;
    }
    n(Je, we);
    function Je(a) {
      return a == null
        ? Ta()
        : pp(a)
        ? a
        : Ta().withMutations(function (u) {
            var d = o(a);
            $t(d.size),
              d.forEach(function (m, y) {
                return u.set(y, m);
              });
          });
    }
    (Je.of = function () {
      return this(arguments);
    }),
      (Je.prototype.toString = function () {
        return this.__toString("OrderedMap {", "}");
      }),
      (Je.prototype.get = function (a, u) {
        var d = this._map.get(a);
        return d !== void 0 ? this._list.get(d)[1] : u;
      }),
      (Je.prototype.clear = function () {
        return this.size === 0
          ? this
          : this.__ownerID
          ? ((this.size = 0), this._map.clear(), this._list.clear(), this)
          : Ta();
      }),
      (Je.prototype.set = function (a, u) {
        return mp(this, a, u);
      }),
      (Je.prototype.remove = function (a) {
        return mp(this, a, L);
      }),
      (Je.prototype.wasAltered = function () {
        return this._map.wasAltered() || this._list.wasAltered();
      }),
      (Je.prototype.__iterate = function (a, u) {
        var d = this;
        return this._list.__iterate(function (m) {
          return m && a(m[1], m[0], d);
        }, u);
      }),
      (Je.prototype.__iterator = function (a, u) {
        return this._list.fromEntrySeq().__iterator(a, u);
      }),
      (Je.prototype.__ensureOwner = function (a) {
        if (a === this.__ownerID) return this;
        var u = this._map.__ensureOwner(a),
          d = this._list.__ensureOwner(a);
        return a
          ? iu(u, d, a, this.__hash)
          : ((this.__ownerID = a), (this._map = u), (this._list = d), this);
      });
    function pp(a) {
      return Ys(a) && p(a);
    }
    (Je.isOrderedMap = pp),
      (Je.prototype[b] = !0),
      (Je.prototype[S] = Je.prototype.remove);
    function iu(a, u, d, m) {
      var y = Object.create(Je.prototype);
      return (
        (y.size = a ? a.size : 0),
        (y._map = a),
        (y._list = u),
        (y.__ownerID = d),
        (y.__hash = m),
        y
      );
    }
    var hp;
    function Ta() {
      return hp || (hp = iu(mr(), ru()));
    }
    function mp(a, u, d) {
      var m = a._map,
        y = a._list,
        C = m.get(u),
        O = C !== void 0,
        T,
        B;
      if (d === L) {
        if (!O) return a;
        y.size >= E && y.size >= m.size * 2
          ? ((B = y.filter(function (R, $) {
              return R !== void 0 && C !== $;
            })),
            (T = B.toKeyedSeq()
              .map(function (R) {
                return R[0];
              })
              .flip()
              .toMap()),
            a.__ownerID && (T.__ownerID = B.__ownerID = a.__ownerID))
          : ((T = m.remove(u)),
            (B = C === y.size - 1 ? y.pop() : y.set(C, void 0)));
      } else if (O) {
        if (d === y.get(C)[1]) return a;
        (T = m), (B = y.set(C, [u, d]));
      } else (T = m.set(u, y.size)), (B = y.set(y.size, [u, d]));
      return a.__ownerID
        ? ((a.size = T.size),
          (a._map = T),
          (a._list = B),
          (a.__hash = void 0),
          a)
        : iu(T, B);
    }
    n(Yt, oe);
    function Yt(a, u) {
      (this._iter = a), (this._useKeys = u), (this.size = a.size);
    }
    (Yt.prototype.get = function (a, u) {
      return this._iter.get(a, u);
    }),
      (Yt.prototype.has = function (a) {
        return this._iter.has(a);
      }),
      (Yt.prototype.valueSeq = function () {
        return this._iter.valueSeq();
      }),
      (Yt.prototype.reverse = function () {
        var a = this,
          u = ou(this, !0);
        return (
          this._useKeys ||
            (u.valueSeq = function () {
              return a._iter.toSeq().reverse();
            }),
          u
        );
      }),
      (Yt.prototype.map = function (a, u) {
        var d = this,
          m = gp(this, a, u);
        return (
          this._useKeys ||
            (m.valueSeq = function () {
              return d._iter.toSeq().map(a, u);
            }),
          m
        );
      }),
      (Yt.prototype.__iterate = function (a, u) {
        var d = this,
          m;
        return this._iter.__iterate(
          this._useKeys
            ? function (y, C) {
                return a(y, C, d);
              }
            : ((m = u ? Ep(this) : 0),
              function (y) {
                return a(y, u ? --m : m++, d);
              }),
          u
        );
      }),
      (Yt.prototype.__iterator = function (a, u) {
        if (this._useKeys) return this._iter.__iterator(a, u);
        var d = this._iter.__iterator(V, u),
          m = u ? Ep(this) : 0;
        return new te(function () {
          var y = d.next();
          return y.done ? y : ne(a, u ? --m : m++, y.value, y);
        });
      }),
      (Yt.prototype[b] = !0),
      n(li, fe);
    function li(a) {
      (this._iter = a), (this.size = a.size);
    }
    (li.prototype.includes = function (a) {
      return this._iter.includes(a);
    }),
      (li.prototype.__iterate = function (a, u) {
        var d = this,
          m = 0;
        return this._iter.__iterate(function (y) {
          return a(y, m++, d);
        }, u);
      }),
      (li.prototype.__iterator = function (a, u) {
        var d = this._iter.__iterator(V, u),
          m = 0;
        return new te(function () {
          var y = d.next();
          return y.done ? y : ne(a, m++, y.value, y);
        });
      }),
      n(si, Te);
    function si(a) {
      (this._iter = a), (this.size = a.size);
    }
    (si.prototype.has = function (a) {
      return this._iter.includes(a);
    }),
      (si.prototype.__iterate = function (a, u) {
        var d = this;
        return this._iter.__iterate(function (m) {
          return a(m, m, d);
        }, u);
      }),
      (si.prototype.__iterator = function (a, u) {
        var d = this._iter.__iterator(V, u);
        return new te(function () {
          var m = d.next();
          return m.done ? m : ne(a, m.value, m.value, m);
        });
      }),
      n(ui, oe);
    function ui(a) {
      (this._iter = a), (this.size = a.size);
    }
    (ui.prototype.entrySeq = function () {
      return this._iter.toSeq();
    }),
      (ui.prototype.__iterate = function (a, u) {
        var d = this;
        return this._iter.__iterate(function (m) {
          if (m) {
            Sp(m);
            var y = c(m);
            return a(y ? m.get(1) : m[1], y ? m.get(0) : m[0], d);
          }
        }, u);
      }),
      (ui.prototype.__iterator = function (a, u) {
        var d = this._iter.__iterator(V, u);
        return new te(function () {
          for (;;) {
            var m = d.next();
            if (m.done) return m;
            var y = m.value;
            if (y) {
              Sp(y);
              var C = c(y);
              return ne(a, C ? y.get(0) : y[0], C ? y.get(1) : y[1], m);
            }
          }
        });
      }),
      (li.prototype.cacheResult =
        Yt.prototype.cacheResult =
        si.prototype.cacheResult =
        ui.prototype.cacheResult =
          su);
    function vp(a) {
      var u = vr(a);
      return (
        (u._iter = a),
        (u.size = a.size),
        (u.flip = function () {
          return a;
        }),
        (u.reverse = function () {
          var d = a.reverse.apply(this);
          return (
            (d.flip = function () {
              return a.reverse();
            }),
            d
          );
        }),
        (u.has = function (d) {
          return a.includes(d);
        }),
        (u.includes = function (d) {
          return a.has(d);
        }),
        (u.cacheResult = su),
        (u.__iterateUncached = function (d, m) {
          var y = this;
          return a.__iterate(function (C, O) {
            return d(O, C, y) !== !1;
          }, m);
        }),
        (u.__iteratorUncached = function (d, m) {
          if (d === Y) {
            var y = a.__iterator(d, m);
            return new te(function () {
              var C = y.next();
              if (!C.done) {
                var O = C.value[0];
                (C.value[0] = C.value[1]), (C.value[1] = O);
              }
              return C;
            });
          }
          return a.__iterator(d === V ? q : V, m);
        }),
        u
      );
    }
    function gp(a, u, d) {
      var m = vr(a);
      return (
        (m.size = a.size),
        (m.has = function (y) {
          return a.has(y);
        }),
        (m.get = function (y, C) {
          var O = a.get(y, L);
          return O === L ? C : u.call(d, O, y, a);
        }),
        (m.__iterateUncached = function (y, C) {
          var O = this;
          return a.__iterate(function (T, B, R) {
            return y(u.call(d, T, B, R), B, O) !== !1;
          }, C);
        }),
        (m.__iteratorUncached = function (y, C) {
          var O = a.__iterator(Y, C);
          return new te(function () {
            var T = O.next();
            if (T.done) return T;
            var B = T.value,
              R = B[0];
            return ne(y, R, u.call(d, B[1], R, a), T);
          });
        }),
        m
      );
    }
    function ou(a, u) {
      var d = vr(a);
      return (
        (d._iter = a),
        (d.size = a.size),
        (d.reverse = function () {
          return a;
        }),
        a.flip &&
          (d.flip = function () {
            var m = vp(a);
            return (
              (m.reverse = function () {
                return a.flip();
              }),
              m
            );
          }),
        (d.get = function (m, y) {
          return a.get(u ? m : -1 - m, y);
        }),
        (d.has = function (m) {
          return a.has(u ? m : -1 - m);
        }),
        (d.includes = function (m) {
          return a.includes(m);
        }),
        (d.cacheResult = su),
        (d.__iterate = function (m, y) {
          var C = this;
          return a.__iterate(function (O, T) {
            return m(O, T, C);
          }, !y);
        }),
        (d.__iterator = function (m, y) {
          return a.__iterator(m, !y);
        }),
        d
      );
    }
    function yp(a, u, d, m) {
      var y = vr(a);
      return (
        m &&
          ((y.has = function (C) {
            var O = a.get(C, L);
            return O !== L && !!u.call(d, O, C, a);
          }),
          (y.get = function (C, O) {
            var T = a.get(C, L);
            return T !== L && u.call(d, T, C, a) ? T : O;
          })),
        (y.__iterateUncached = function (C, O) {
          var T = this,
            B = 0;
          return (
            a.__iterate(function (R, $, J) {
              if (u.call(d, R, $, J)) return B++, C(R, m ? $ : B - 1, T);
            }, O),
            B
          );
        }),
        (y.__iteratorUncached = function (C, O) {
          var T = a.__iterator(Y, O),
            B = 0;
          return new te(function () {
            for (;;) {
              var R = T.next();
              if (R.done) return R;
              var $ = R.value,
                J = $[0],
                X = $[1];
              if (u.call(d, X, J, a)) return ne(C, m ? J : B++, X, R);
            }
          });
        }),
        y
      );
    }
    function Zw(a, u, d) {
      var m = we().asMutable();
      return (
        a.__iterate(function (y, C) {
          m.update(u.call(d, y, C, a), 0, function (O) {
            return O + 1;
          });
        }),
        m.asImmutable()
      );
    }
    function e1(a, u, d) {
      var m = f(a),
        y = (p(a) ? Je() : we()).asMutable();
      a.__iterate(function (O, T) {
        y.update(u.call(d, O, T, a), function (B) {
          return (B = B || []), B.push(m ? [T, O] : O), B;
        });
      });
      var C = kp(a);
      return y.map(function (O) {
        return De(a, C(O));
      });
    }
    function au(a, u, d, m) {
      var y = a.size;
      if (
        (u !== void 0 && (u = u | 0), d !== void 0 && (d = d | 0), G(u, d, y))
      )
        return a;
      var C = Z(u, y),
        O = ee(d, y);
      if (C !== C || O !== O) return au(a.toSeq().cacheResult(), u, d, m);
      var T = O - C,
        B;
      T === T && (B = T < 0 ? 0 : T);
      var R = vr(a);
      return (
        (R.size = B === 0 ? B : (a.size && B) || void 0),
        !m &&
          Be(a) &&
          B >= 0 &&
          (R.get = function ($, J) {
            return ($ = j(this, $)), $ >= 0 && $ < B ? a.get($ + C, J) : J;
          }),
        (R.__iterateUncached = function ($, J) {
          var X = this;
          if (B === 0) return 0;
          if (J) return this.cacheResult().__iterate($, J);
          var de = 0,
            he = !0,
            $e = 0;
          return (
            a.__iterate(function (lr, xr) {
              if (!(he && (he = de++ < C)))
                return $e++, $(lr, m ? xr : $e - 1, X) !== !1 && $e !== B;
            }),
            $e
          );
        }),
        (R.__iteratorUncached = function ($, J) {
          if (B !== 0 && J) return this.cacheResult().__iterator($, J);
          var X = B !== 0 && a.__iterator($, J),
            de = 0,
            he = 0;
          return new te(function () {
            for (; de++ < C; ) X.next();
            if (++he > B) return ue();
            var $e = X.next();
            return m || $ === V
              ? $e
              : $ === q
              ? ne($, he - 1, void 0, $e)
              : ne($, he - 1, $e.value[1], $e);
          });
        }),
        R
      );
    }
    function t1(a, u, d) {
      var m = vr(a);
      return (
        (m.__iterateUncached = function (y, C) {
          var O = this;
          if (C) return this.cacheResult().__iterate(y, C);
          var T = 0;
          return (
            a.__iterate(function (B, R, $) {
              return u.call(d, B, R, $) && ++T && y(B, R, O);
            }),
            T
          );
        }),
        (m.__iteratorUncached = function (y, C) {
          var O = this;
          if (C) return this.cacheResult().__iterator(y, C);
          var T = a.__iterator(Y, C),
            B = !0;
          return new te(function () {
            if (!B) return ue();
            var R = T.next();
            if (R.done) return R;
            var $ = R.value,
              J = $[0],
              X = $[1];
            return u.call(d, X, J, O)
              ? y === Y
                ? R
                : ne(y, J, X, R)
              : ((B = !1), ue());
          });
        }),
        m
      );
    }
    function xp(a, u, d, m) {
      var y = vr(a);
      return (
        (y.__iterateUncached = function (C, O) {
          var T = this;
          if (O) return this.cacheResult().__iterate(C, O);
          var B = !0,
            R = 0;
          return (
            a.__iterate(function ($, J, X) {
              if (!(B && (B = u.call(d, $, J, X))))
                return R++, C($, m ? J : R - 1, T);
            }),
            R
          );
        }),
        (y.__iteratorUncached = function (C, O) {
          var T = this;
          if (O) return this.cacheResult().__iterator(C, O);
          var B = a.__iterator(Y, O),
            R = !0,
            $ = 0;
          return new te(function () {
            var J, X, de;
            do {
              if (((J = B.next()), J.done))
                return m || C === V
                  ? J
                  : C === q
                  ? ne(C, $++, void 0, J)
                  : ne(C, $++, J.value[1], J);
              var he = J.value;
              (X = he[0]), (de = he[1]), R && (R = u.call(d, de, X, T));
            } while (R);
            return C === Y ? J : ne(C, X, de, J);
          });
        }),
        y
      );
    }
    function r1(a, u) {
      var d = f(a),
        m = [a]
          .concat(u)
          .map(function (O) {
            return (
              c(O)
                ? d && (O = o(O))
                : (O = d ? pe(O) : ge(Array.isArray(O) ? O : [O])),
              O
            );
          })
          .filter(function (O) {
            return O.size !== 0;
          });
      if (m.length === 0) return a;
      if (m.length === 1) {
        var y = m[0];
        if (y === a || (d && f(y)) || (h(a) && h(y))) return y;
      }
      var C = new Ue(m);
      return (
        d ? (C = C.toKeyedSeq()) : h(a) || (C = C.toSetSeq()),
        (C = C.flatten(!0)),
        (C.size = m.reduce(function (O, T) {
          if (O !== void 0) {
            var B = T.size;
            if (B !== void 0) return O + B;
          }
        }, 0)),
        C
      );
    }
    function wp(a, u, d) {
      var m = vr(a);
      return (
        (m.__iterateUncached = function (y, C) {
          var O = 0,
            T = !1;
          function B(R, $) {
            var J = this;
            R.__iterate(function (X, de) {
              return (
                (!u || $ < u) && c(X)
                  ? B(X, $ + 1)
                  : y(X, d ? de : O++, J) === !1 && (T = !0),
                !T
              );
            }, C);
          }
          return B(a, 0), O;
        }),
        (m.__iteratorUncached = function (y, C) {
          var O = a.__iterator(y, C),
            T = [],
            B = 0;
          return new te(function () {
            for (; O; ) {
              var R = O.next();
              if (R.done !== !1) {
                O = T.pop();
                continue;
              }
              var $ = R.value;
              if ((y === Y && ($ = $[1]), (!u || T.length < u) && c($)))
                T.push(O), (O = $.__iterator(y, C));
              else return d ? R : ne(y, B++, $, R);
            }
            return ue();
          });
        }),
        m
      );
    }
    function n1(a, u, d) {
      var m = kp(a);
      return a
        .toSeq()
        .map(function (y, C) {
          return m(u.call(d, y, C, a));
        })
        .flatten(!0);
    }
    function i1(a, u) {
      var d = vr(a);
      return (
        (d.size = a.size && a.size * 2 - 1),
        (d.__iterateUncached = function (m, y) {
          var C = this,
            O = 0;
          return (
            a.__iterate(function (T, B) {
              return (!O || m(u, O++, C) !== !1) && m(T, O++, C) !== !1;
            }, y),
            O
          );
        }),
        (d.__iteratorUncached = function (m, y) {
          var C = a.__iterator(V, y),
            O = 0,
            T;
          return new te(function () {
            return (!T || O % 2) && ((T = C.next()), T.done)
              ? T
              : O % 2
              ? ne(m, O++, u)
              : ne(m, O++, T.value, T);
          });
        }),
        d
      );
    }
    function ci(a, u, d) {
      u || (u = Cp);
      var m = f(a),
        y = 0,
        C = a
          .toSeq()
          .map(function (O, T) {
            return [T, O, y++, d ? d(O, T, a) : O];
          })
          .toArray();
      return (
        C.sort(function (O, T) {
          return u(O[3], T[3]) || O[2] - T[2];
        }).forEach(
          m
            ? function (O, T) {
                C[T].length = 2;
              }
            : function (O, T) {
                C[T] = O[1];
              }
        ),
        m ? oe(C) : h(a) ? fe(C) : Te(C)
      );
    }
    function Da(a, u, d) {
      if ((u || (u = Cp), d)) {
        var m = a
          .toSeq()
          .map(function (y, C) {
            return [y, d(y, C, a)];
          })
          .reduce(function (y, C) {
            return _p(u, y[1], C[1]) ? C : y;
          });
        return m && m[0];
      } else
        return a.reduce(function (y, C) {
          return _p(u, y, C) ? C : y;
        });
    }
    function _p(a, u, d) {
      var m = a(d, u);
      return (m === 0 && d !== u && (d == null || d !== d)) || m > 0;
    }
    function lu(a, u, d) {
      var m = vr(a);
      return (
        (m.size = new Ue(d)
          .map(function (y) {
            return y.size;
          })
          .min()),
        (m.__iterate = function (y, C) {
          for (
            var O = this.__iterator(V, C), T, B = 0;
            !(T = O.next()).done && y(T.value, B++, this) !== !1;

          );
          return B;
        }),
        (m.__iteratorUncached = function (y, C) {
          var O = d.map(function (R) {
              return (R = i(R)), ze(C ? R.reverse() : R);
            }),
            T = 0,
            B = !1;
          return new te(function () {
            var R;
            return (
              B ||
                ((R = O.map(function ($) {
                  return $.next();
                })),
                (B = R.some(function ($) {
                  return $.done;
                }))),
              B
                ? ue()
                : ne(
                    y,
                    T++,
                    u.apply(
                      null,
                      R.map(function ($) {
                        return $.value;
                      })
                    )
                  )
            );
          });
        }),
        m
      );
    }
    function De(a, u) {
      return Be(a) ? u : a.constructor(u);
    }
    function Sp(a) {
      if (a !== Object(a)) throw new TypeError("Expected [K, V] tuple: " + a);
    }
    function Ep(a) {
      return $t(a.size), D(a);
    }
    function kp(a) {
      return f(a) ? o : h(a) ? l : s;
    }
    function vr(a) {
      return Object.create((f(a) ? oe : h(a) ? fe : Te).prototype);
    }
    function su() {
      return this._iter.cacheResult
        ? (this._iter.cacheResult(), (this.size = this._iter.size), this)
        : le.prototype.cacheResult.call(this);
    }
    function Cp(a, u) {
      return a > u ? 1 : a < u ? -1 : 0;
    }
    function bp(a) {
      var u = ze(a);
      if (!u) {
        if (!Le(a))
          throw new TypeError("Expected iterable or array-like: " + a);
        u = ze(i(a));
      }
      return u;
    }
    n(Kt, Xi);
    function Kt(a, u) {
      var d,
        m = function (O) {
          if (O instanceof m) return O;
          if (!(this instanceof m)) return new m(O);
          if (!d) {
            d = !0;
            var T = Object.keys(a);
            o1(y, T),
              (y.size = T.length),
              (y._name = u),
              (y._keys = T),
              (y._defaultValues = a);
          }
          this._map = we(O);
        },
        y = (m.prototype = Object.create(at));
      return (y.constructor = m), m;
    }
    (Kt.prototype.toString = function () {
      return this.__toString(Np(this) + " {", "}");
    }),
      (Kt.prototype.has = function (a) {
        return this._defaultValues.hasOwnProperty(a);
      }),
      (Kt.prototype.get = function (a, u) {
        if (!this.has(a)) return u;
        var d = this._defaultValues[a];
        return this._map ? this._map.get(a, d) : d;
      }),
      (Kt.prototype.clear = function () {
        if (this.__ownerID) return this._map && this._map.clear(), this;
        var a = this.constructor;
        return a._empty || (a._empty = La(this, mr()));
      }),
      (Kt.prototype.set = function (a, u) {
        if (!this.has(a))
          throw new Error('Cannot set unknown key "' + a + '" on ' + Np(this));
        var d = this._map && this._map.set(a, u);
        return this.__ownerID || d === this._map ? this : La(this, d);
      }),
      (Kt.prototype.remove = function (a) {
        if (!this.has(a)) return this;
        var u = this._map && this._map.remove(a);
        return this.__ownerID || u === this._map ? this : La(this, u);
      }),
      (Kt.prototype.wasAltered = function () {
        return this._map.wasAltered();
      }),
      (Kt.prototype.__iterator = function (a, u) {
        var d = this;
        return o(this._defaultValues)
          .map(function (m, y) {
            return d.get(y);
          })
          .__iterator(a, u);
      }),
      (Kt.prototype.__iterate = function (a, u) {
        var d = this;
        return o(this._defaultValues)
          .map(function (m, y) {
            return d.get(y);
          })
          .__iterate(a, u);
      }),
      (Kt.prototype.__ensureOwner = function (a) {
        if (a === this.__ownerID) return this;
        var u = this._map && this._map.__ensureOwner(a);
        return a
          ? La(this, u, a)
          : ((this.__ownerID = a), (this._map = u), this);
      });
    var at = Kt.prototype;
    (at[S] = at.remove),
      (at.deleteIn = at.removeIn = ye.removeIn),
      (at.merge = ye.merge),
      (at.mergeWith = ye.mergeWith),
      (at.mergeIn = ye.mergeIn),
      (at.mergeDeep = ye.mergeDeep),
      (at.mergeDeepWith = ye.mergeDeepWith),
      (at.mergeDeepIn = ye.mergeDeepIn),
      (at.setIn = ye.setIn),
      (at.update = ye.update),
      (at.updateIn = ye.updateIn),
      (at.withMutations = ye.withMutations),
      (at.asMutable = ye.asMutable),
      (at.asImmutable = ye.asImmutable);
    function La(a, u, d) {
      var m = Object.create(Object.getPrototypeOf(a));
      return (m._map = u), (m.__ownerID = d), m;
    }
    function Np(a) {
      return a._name || a.constructor.name || "Record";
    }
    function o1(a, u) {
      try {
        u.forEach(a1.bind(void 0, a));
      } catch {}
    }
    function a1(a, u) {
      Object.defineProperty(a, u, {
        get: function () {
          return this.get(u);
        },
        set: function (d) {
          Ca(this.__ownerID, "Cannot set on an immutable record."),
            this.set(u, d);
        },
      });
    }
    n(Fe, ba);
    function Fe(a) {
      return a == null
        ? fu()
        : uu(a) && !p(a)
        ? a
        : fu().withMutations(function (u) {
            var d = s(a);
            $t(d.size),
              d.forEach(function (m) {
                return u.add(m);
              });
          });
    }
    (Fe.of = function () {
      return this(arguments);
    }),
      (Fe.fromKeys = function (a) {
        return this(o(a).keySeq());
      }),
      (Fe.prototype.toString = function () {
        return this.__toString("Set {", "}");
      }),
      (Fe.prototype.has = function (a) {
        return this._map.has(a);
      }),
      (Fe.prototype.add = function (a) {
        return cu(this, this._map.set(a, !0));
      }),
      (Fe.prototype.remove = function (a) {
        return cu(this, this._map.remove(a));
      }),
      (Fe.prototype.clear = function () {
        return cu(this, this._map.clear());
      }),
      (Fe.prototype.union = function () {
        var a = r.call(arguments, 0);
        return (
          (a = a.filter(function (u) {
            return u.size !== 0;
          })),
          a.length === 0
            ? this
            : this.size === 0 && !this.__ownerID && a.length === 1
            ? this.constructor(a[0])
            : this.withMutations(function (u) {
                for (var d = 0; d < a.length; d++)
                  s(a[d]).forEach(function (m) {
                    return u.add(m);
                  });
              })
        );
      }),
      (Fe.prototype.intersect = function () {
        var a = r.call(arguments, 0);
        if (a.length === 0) return this;
        a = a.map(function (d) {
          return s(d);
        });
        var u = this;
        return this.withMutations(function (d) {
          u.forEach(function (m) {
            a.every(function (y) {
              return y.includes(m);
            }) || d.remove(m);
          });
        });
      }),
      (Fe.prototype.subtract = function () {
        var a = r.call(arguments, 0);
        if (a.length === 0) return this;
        a = a.map(function (d) {
          return s(d);
        });
        var u = this;
        return this.withMutations(function (d) {
          u.forEach(function (m) {
            a.some(function (y) {
              return y.includes(m);
            }) && d.remove(m);
          });
        });
      }),
      (Fe.prototype.merge = function () {
        return this.union.apply(this, arguments);
      }),
      (Fe.prototype.mergeWith = function (a) {
        var u = r.call(arguments, 1);
        return this.union.apply(this, u);
      }),
      (Fe.prototype.sort = function (a) {
        return gr(ci(this, a));
      }),
      (Fe.prototype.sortBy = function (a, u) {
        return gr(ci(this, u, a));
      }),
      (Fe.prototype.wasAltered = function () {
        return this._map.wasAltered();
      }),
      (Fe.prototype.__iterate = function (a, u) {
        var d = this;
        return this._map.__iterate(function (m, y) {
          return a(y, y, d);
        }, u);
      }),
      (Fe.prototype.__iterator = function (a, u) {
        return this._map
          .map(function (d, m) {
            return m;
          })
          .__iterator(a, u);
      }),
      (Fe.prototype.__ensureOwner = function (a) {
        if (a === this.__ownerID) return this;
        var u = this._map.__ensureOwner(a);
        return a
          ? this.__make(u, a)
          : ((this.__ownerID = a), (this._map = u), this);
      });
    function uu(a) {
      return !!(a && a[Op]);
    }
    Fe.isSet = uu;
    var Op = "@@__IMMUTABLE_SET__@@",
      zt = Fe.prototype;
    (zt[Op] = !0),
      (zt[S] = zt.remove),
      (zt.mergeDeep = zt.merge),
      (zt.mergeDeepWith = zt.mergeWith),
      (zt.withMutations = ye.withMutations),
      (zt.asMutable = ye.asMutable),
      (zt.asImmutable = ye.asImmutable),
      (zt.__empty = fu),
      (zt.__make = Tp);
    function cu(a, u) {
      return a.__ownerID
        ? ((a.size = u.size), (a._map = u), a)
        : u === a._map
        ? a
        : u.size === 0
        ? a.__empty()
        : a.__make(u);
    }
    function Tp(a, u) {
      var d = Object.create(zt);
      return (d.size = a ? a.size : 0), (d._map = a), (d.__ownerID = u), d;
    }
    var Dp;
    function fu() {
      return Dp || (Dp = Tp(mr()));
    }
    n(gr, Fe);
    function gr(a) {
      return a == null
        ? du()
        : Lp(a)
        ? a
        : du().withMutations(function (u) {
            var d = s(a);
            $t(d.size),
              d.forEach(function (m) {
                return u.add(m);
              });
          });
    }
    (gr.of = function () {
      return this(arguments);
    }),
      (gr.fromKeys = function (a) {
        return this(o(a).keySeq());
      }),
      (gr.prototype.toString = function () {
        return this.__toString("OrderedSet {", "}");
      });
    function Lp(a) {
      return uu(a) && p(a);
    }
    gr.isOrderedSet = Lp;
    var Ba = gr.prototype;
    (Ba[b] = !0), (Ba.__empty = du), (Ba.__make = Bp);
    function Bp(a, u) {
      var d = Object.create(Ba);
      return (d.size = a ? a.size : 0), (d._map = a), (d.__ownerID = u), d;
    }
    var Rp;
    function du() {
      return Rp || (Rp = Bp(Ta()));
    }
    n(Qe, ni);
    function Qe(a) {
      return a == null ? pu() : Mp(a) ? a : pu().unshiftAll(a);
    }
    (Qe.of = function () {
      return this(arguments);
    }),
      (Qe.prototype.toString = function () {
        return this.__toString("Stack [", "]");
      }),
      (Qe.prototype.get = function (a, u) {
        var d = this._head;
        for (a = j(this, a); d && a--; ) d = d.next;
        return d ? d.value : u;
      }),
      (Qe.prototype.peek = function () {
        return this._head && this._head.value;
      }),
      (Qe.prototype.push = function () {
        if (arguments.length === 0) return this;
        for (
          var a = this.size + arguments.length,
            u = this._head,
            d = arguments.length - 1;
          d >= 0;
          d--
        )
          u = { value: arguments[d], next: u };
        return this.__ownerID
          ? ((this.size = a),
            (this._head = u),
            (this.__hash = void 0),
            (this.__altered = !0),
            this)
          : oo(a, u);
      }),
      (Qe.prototype.pushAll = function (a) {
        if (((a = l(a)), a.size === 0)) return this;
        $t(a.size);
        var u = this.size,
          d = this._head;
        return (
          a.reverse().forEach(function (m) {
            u++, (d = { value: m, next: d });
          }),
          this.__ownerID
            ? ((this.size = u),
              (this._head = d),
              (this.__hash = void 0),
              (this.__altered = !0),
              this)
            : oo(u, d)
        );
      }),
      (Qe.prototype.pop = function () {
        return this.slice(1);
      }),
      (Qe.prototype.unshift = function () {
        return this.push.apply(this, arguments);
      }),
      (Qe.prototype.unshiftAll = function (a) {
        return this.pushAll(a);
      }),
      (Qe.prototype.shift = function () {
        return this.pop.apply(this, arguments);
      }),
      (Qe.prototype.clear = function () {
        return this.size === 0
          ? this
          : this.__ownerID
          ? ((this.size = 0),
            (this._head = void 0),
            (this.__hash = void 0),
            (this.__altered = !0),
            this)
          : pu();
      }),
      (Qe.prototype.slice = function (a, u) {
        if (G(a, u, this.size)) return this;
        var d = Z(a, this.size),
          m = ee(u, this.size);
        if (m !== this.size) return ni.prototype.slice.call(this, a, u);
        for (var y = this.size - d, C = this._head; d--; ) C = C.next;
        return this.__ownerID
          ? ((this.size = y),
            (this._head = C),
            (this.__hash = void 0),
            (this.__altered = !0),
            this)
          : oo(y, C);
      }),
      (Qe.prototype.__ensureOwner = function (a) {
        return a === this.__ownerID
          ? this
          : a
          ? oo(this.size, this._head, a, this.__hash)
          : ((this.__ownerID = a), (this.__altered = !1), this);
      }),
      (Qe.prototype.__iterate = function (a, u) {
        if (u) return this.reverse().__iterate(a);
        for (var d = 0, m = this._head; m && a(m.value, d++, this) !== !1; )
          m = m.next;
        return d;
      }),
      (Qe.prototype.__iterator = function (a, u) {
        if (u) return this.reverse().__iterator(a);
        var d = 0,
          m = this._head;
        return new te(function () {
          if (m) {
            var y = m.value;
            return (m = m.next), ne(a, d++, y);
          }
          return ue();
        });
      });
    function Mp(a) {
      return !!(a && a[Ip]);
    }
    Qe.isStack = Mp;
    var Ip = "@@__IMMUTABLE_STACK__@@",
      fi = Qe.prototype;
    (fi[Ip] = !0),
      (fi.withMutations = ye.withMutations),
      (fi.asMutable = ye.asMutable),
      (fi.asImmutable = ye.asImmutable),
      (fi.wasAltered = ye.wasAltered);
    function oo(a, u, d, m) {
      var y = Object.create(fi);
      return (
        (y.size = a),
        (y._head = u),
        (y.__ownerID = d),
        (y.__hash = m),
        (y.__altered = !1),
        y
      );
    }
    var jp;
    function pu() {
      return jp || (jp = oo(0));
    }
    function yr(a, u) {
      var d = function (m) {
        a.prototype[m] = u[m];
      };
      return (
        Object.keys(u).forEach(d),
        Object.getOwnPropertySymbols &&
          Object.getOwnPropertySymbols(u).forEach(d),
        a
      );
    }
    (i.Iterator = te),
      yr(i, {
        toArray: function () {
          $t(this.size);
          var a = new Array(this.size || 0);
          return (
            this.valueSeq().__iterate(function (u, d) {
              a[d] = u;
            }),
            a
          );
        },
        toIndexedSeq: function () {
          return new li(this);
        },
        toJS: function () {
          return this.toSeq()
            .map(function (a) {
              return a && typeof a.toJS == "function" ? a.toJS() : a;
            })
            .__toJS();
        },
        toJSON: function () {
          return this.toSeq()
            .map(function (a) {
              return a && typeof a.toJSON == "function" ? a.toJSON() : a;
            })
            .__toJS();
        },
        toKeyedSeq: function () {
          return new Yt(this, !0);
        },
        toMap: function () {
          return we(this.toKeyedSeq());
        },
        toObject: function () {
          $t(this.size);
          var a = {};
          return (
            this.__iterate(function (u, d) {
              a[d] = u;
            }),
            a
          );
        },
        toOrderedMap: function () {
          return Je(this.toKeyedSeq());
        },
        toOrderedSet: function () {
          return gr(f(this) ? this.valueSeq() : this);
        },
        toSet: function () {
          return Fe(f(this) ? this.valueSeq() : this);
        },
        toSetSeq: function () {
          return new si(this);
        },
        toSeq: function () {
          return h(this)
            ? this.toIndexedSeq()
            : f(this)
            ? this.toKeyedSeq()
            : this.toSetSeq();
        },
        toStack: function () {
          return Qe(f(this) ? this.valueSeq() : this);
        },
        toList: function () {
          return Ie(f(this) ? this.valueSeq() : this);
        },
        toString: function () {
          return "[Iterable]";
        },
        __toString: function (a, u) {
          return this.size === 0
            ? a + u
            : a +
                " " +
                this.toSeq().map(this.__toStringMapper).join(", ") +
                " " +
                u;
        },
        concat: function () {
          var a = r.call(arguments, 0);
          return De(this, r1(this, a));
        },
        includes: function (a) {
          return this.some(function (u) {
            return Pe(u, a);
          });
        },
        entries: function () {
          return this.__iterator(Y);
        },
        every: function (a, u) {
          $t(this.size);
          var d = !0;
          return (
            this.__iterate(function (m, y, C) {
              if (!a.call(u, m, y, C)) return (d = !1), !1;
            }),
            d
          );
        },
        filter: function (a, u) {
          return De(this, yp(this, a, u, !0));
        },
        find: function (a, u, d) {
          var m = this.findEntry(a, u);
          return m ? m[1] : d;
        },
        findEntry: function (a, u) {
          var d;
          return (
            this.__iterate(function (m, y, C) {
              if (a.call(u, m, y, C)) return (d = [y, m]), !1;
            }),
            d
          );
        },
        findLastEntry: function (a, u) {
          return this.toSeq().reverse().findEntry(a, u);
        },
        forEach: function (a, u) {
          return $t(this.size), this.__iterate(u ? a.bind(u) : a);
        },
        join: function (a) {
          $t(this.size), (a = a !== void 0 ? "" + a : ",");
          var u = "",
            d = !0;
          return (
            this.__iterate(function (m) {
              d ? (d = !1) : (u += a), (u += m != null ? m.toString() : "");
            }),
            u
          );
        },
        keys: function () {
          return this.__iterator(q);
        },
        map: function (a, u) {
          return De(this, gp(this, a, u));
        },
        reduce: function (a, u, d) {
          $t(this.size);
          var m, y;
          return (
            arguments.length < 2 ? (y = !0) : (m = u),
            this.__iterate(function (C, O, T) {
              y ? ((y = !1), (m = C)) : (m = a.call(d, m, C, O, T));
            }),
            m
          );
        },
        reduceRight: function (a, u, d) {
          var m = this.toKeyedSeq().reverse();
          return m.reduce.apply(m, arguments);
        },
        reverse: function () {
          return De(this, ou(this, !0));
        },
        slice: function (a, u) {
          return De(this, au(this, a, u, !0));
        },
        some: function (a, u) {
          return !this.every(Ma(a), u);
        },
        sort: function (a) {
          return De(this, ci(this, a));
        },
        values: function () {
          return this.__iterator(V);
        },
        butLast: function () {
          return this.slice(0, -1);
        },
        isEmpty: function () {
          return this.size !== void 0
            ? this.size === 0
            : !this.some(function () {
                return !0;
              });
        },
        count: function (a, u) {
          return D(a ? this.toSeq().filter(a, u) : this);
        },
        countBy: function (a, u) {
          return Zw(this, a, u);
        },
        equals: function (a) {
          return $s(this, a);
        },
        entrySeq: function () {
          var a = this;
          if (a._cache) return new Ue(a._cache);
          var u = a.toSeq().map(s1).toIndexedSeq();
          return (
            (u.fromEntrySeq = function () {
              return a.toSeq();
            }),
            u
          );
        },
        filterNot: function (a, u) {
          return this.filter(Ma(a), u);
        },
        findLast: function (a, u, d) {
          return this.toKeyedSeq().reverse().find(a, u, d);
        },
        first: function () {
          return this.find(I);
        },
        flatMap: function (a, u) {
          return De(this, n1(this, a, u));
        },
        flatten: function (a) {
          return De(this, wp(this, a, !0));
        },
        fromEntrySeq: function () {
          return new ui(this);
        },
        get: function (a, u) {
          return this.find(
            function (d, m) {
              return Pe(m, a);
            },
            void 0,
            u
          );
        },
        getIn: function (a, u) {
          for (var d = this, m = bp(a), y; !(y = m.next()).done; ) {
            var C = y.value;
            if (((d = d && d.get ? d.get(C, L) : L), d === L)) return u;
          }
          return d;
        },
        groupBy: function (a, u) {
          return e1(this, a, u);
        },
        has: function (a) {
          return this.get(a, L) !== L;
        },
        hasIn: function (a) {
          return this.getIn(a, L) !== L;
        },
        isSubset: function (a) {
          return (
            (a = typeof a.includes == "function" ? a : i(a)),
            this.every(function (u) {
              return a.includes(u);
            })
          );
        },
        isSuperset: function (a) {
          return (
            (a = typeof a.isSubset == "function" ? a : i(a)), a.isSubset(this)
          );
        },
        keySeq: function () {
          return this.toSeq().map(l1).toIndexedSeq();
        },
        last: function () {
          return this.toSeq().reverse().first();
        },
        max: function (a) {
          return Da(this, a);
        },
        maxBy: function (a, u) {
          return Da(this, u, a);
        },
        min: function (a) {
          return Da(this, a ? Ap(a) : Fp);
        },
        minBy: function (a, u) {
          return Da(this, u ? Ap(u) : Fp, a);
        },
        rest: function () {
          return this.slice(1);
        },
        skip: function (a) {
          return this.slice(Math.max(0, a));
        },
        skipLast: function (a) {
          return De(this, this.toSeq().reverse().skip(a).reverse());
        },
        skipWhile: function (a, u) {
          return De(this, xp(this, a, u, !0));
        },
        skipUntil: function (a, u) {
          return this.skipWhile(Ma(a), u);
        },
        sortBy: function (a, u) {
          return De(this, ci(this, u, a));
        },
        take: function (a) {
          return this.slice(0, Math.max(0, a));
        },
        takeLast: function (a) {
          return De(this, this.toSeq().reverse().take(a).reverse());
        },
        takeWhile: function (a, u) {
          return De(this, t1(this, a, u));
        },
        takeUntil: function (a, u) {
          return this.takeWhile(Ma(a), u);
        },
        valueSeq: function () {
          return this.toIndexedSeq();
        },
        hashCode: function () {
          return this.__hash || (this.__hash = c1(this));
        },
      });
    var ht = i.prototype;
    (ht[x] = !0),
      (ht[ve] = ht.values),
      (ht.__toJS = ht.toArray),
      (ht.__toStringMapper = Pp),
      (ht.inspect = ht.toSource =
        function () {
          return this.toString();
        }),
      (ht.chain = ht.flatMap),
      (ht.contains = ht.includes),
      (function () {
        try {
          Object.defineProperty(ht, "length", {
            get: function () {
              if (!i.noLengthWarning) {
                var a;
                try {
                  throw new Error();
                } catch (u) {
                  a = u.stack;
                }
                if (a.indexOf("_wrapObject") === -1)
                  return (
                    console &&
                      console.warn &&
                      console.warn(
                        "iterable.length has been deprecated, use iterable.size or iterable.count(). This warning will become a silent error in a future version. " +
                          a
                      ),
                    this.size
                  );
              }
            },
          });
        } catch {}
      })(),
      yr(o, {
        flip: function () {
          return De(this, vp(this));
        },
        findKey: function (a, u) {
          var d = this.findEntry(a, u);
          return d && d[0];
        },
        findLastKey: function (a, u) {
          return this.toSeq().reverse().findKey(a, u);
        },
        keyOf: function (a) {
          return this.findKey(function (u) {
            return Pe(u, a);
          });
        },
        lastKeyOf: function (a) {
          return this.findLastKey(function (u) {
            return Pe(u, a);
          });
        },
        mapEntries: function (a, u) {
          var d = this,
            m = 0;
          return De(
            this,
            this.toSeq()
              .map(function (y, C) {
                return a.call(u, [C, y], m++, d);
              })
              .fromEntrySeq()
          );
        },
        mapKeys: function (a, u) {
          var d = this;
          return De(
            this,
            this.toSeq()
              .flip()
              .map(function (m, y) {
                return a.call(u, m, y, d);
              })
              .flip()
          );
        },
      });
    var Ra = o.prototype;
    (Ra[w] = !0),
      (Ra[ve] = ht.entries),
      (Ra.__toJS = ht.toObject),
      (Ra.__toStringMapper = function (a, u) {
        return JSON.stringify(u) + ": " + Pp(a);
      }),
      yr(l, {
        toKeyedSeq: function () {
          return new Yt(this, !1);
        },
        filter: function (a, u) {
          return De(this, yp(this, a, u, !1));
        },
        findIndex: function (a, u) {
          var d = this.findEntry(a, u);
          return d ? d[0] : -1;
        },
        indexOf: function (a) {
          var u = this.toKeyedSeq().keyOf(a);
          return u === void 0 ? -1 : u;
        },
        lastIndexOf: function (a) {
          var u = this.toKeyedSeq().reverse().keyOf(a);
          return u === void 0 ? -1 : u;
        },
        reverse: function () {
          return De(this, ou(this, !1));
        },
        slice: function (a, u) {
          return De(this, au(this, a, u, !1));
        },
        splice: function (a, u) {
          var d = arguments.length;
          if (((u = Math.max(u | 0, 0)), d === 0 || (d === 2 && !u)))
            return this;
          a = Z(a, a < 0 ? this.count() : this.size);
          var m = this.slice(0, a);
          return De(
            this,
            d === 1 ? m : m.concat(M(arguments, 2), this.slice(a + u))
          );
        },
        findLastIndex: function (a, u) {
          var d = this.toKeyedSeq().findLastKey(a, u);
          return d === void 0 ? -1 : d;
        },
        first: function () {
          return this.get(0);
        },
        flatten: function (a) {
          return De(this, wp(this, a, !1));
        },
        get: function (a, u) {
          return (
            (a = j(this, a)),
            a < 0 ||
            this.size === 1 / 0 ||
            (this.size !== void 0 && a > this.size)
              ? u
              : this.find(
                  function (d, m) {
                    return m === a;
                  },
                  void 0,
                  u
                )
          );
        },
        has: function (a) {
          return (
            (a = j(this, a)),
            a >= 0 &&
              (this.size !== void 0
                ? this.size === 1 / 0 || a < this.size
                : this.indexOf(a) !== -1)
          );
        },
        interpose: function (a) {
          return De(this, i1(this, a));
        },
        interleave: function () {
          var a = [this].concat(M(arguments)),
            u = lu(this.toSeq(), fe.of, a),
            d = u.flatten(!0);
          return u.size && (d.size = u.size * a.length), De(this, d);
        },
        last: function () {
          return this.get(-1);
        },
        skipWhile: function (a, u) {
          return De(this, xp(this, a, u, !1));
        },
        zip: function () {
          var a = [this].concat(M(arguments));
          return De(this, lu(this, u1, a));
        },
        zipWith: function (a) {
          var u = M(arguments);
          return (u[0] = this), De(this, lu(this, a, u));
        },
      }),
      (l.prototype[k] = !0),
      (l.prototype[b] = !0),
      yr(s, {
        get: function (a, u) {
          return this.has(a) ? a : u;
        },
        includes: function (a) {
          return this.has(a);
        },
        keySeq: function () {
          return this.valueSeq();
        },
      }),
      (s.prototype.has = ht.includes),
      yr(oe, o.prototype),
      yr(fe, l.prototype),
      yr(Te, s.prototype),
      yr(Xi, o.prototype),
      yr(ni, l.prototype),
      yr(ba, s.prototype);
    function l1(a, u) {
      return u;
    }
    function s1(a, u) {
      return [u, a];
    }
    function Ma(a) {
      return function () {
        return !a.apply(this, arguments);
      };
    }
    function Ap(a) {
      return function () {
        return -a.apply(this, arguments);
      };
    }
    function Pp(a) {
      return typeof a == "string" ? JSON.stringify(a) : a;
    }
    function u1() {
      return M(arguments);
    }
    function Fp(a, u) {
      return a < u ? 1 : a > u ? -1 : 0;
    }
    function c1(a) {
      if (a.size === 1 / 0) return 0;
      var u = p(a),
        d = f(a),
        m = u ? 1 : 0,
        y = a.__iterate(
          d
            ? u
              ? function (C, O) {
                  m = (31 * m + $p(Ft(C), Ft(O))) | 0;
                }
              : function (C, O) {
                  m = (m + $p(Ft(C), Ft(O))) | 0;
                }
            : u
            ? function (C) {
                m = (31 * m + Ft(C)) | 0;
              }
            : function (C) {
                m = (m + Ft(C)) | 0;
              }
        );
      return f1(y, m);
    }
    function f1(a, u) {
      return (
        (u = Zi(u, 3432918353)),
        (u = Zi((u << 15) | (u >>> -15), 461845907)),
        (u = Zi((u << 13) | (u >>> -13), 5)),
        (u = ((u + 3864292196) | 0) ^ a),
        (u = Zi(u ^ (u >>> 16), 2246822507)),
        (u = Zi(u ^ (u >>> 13), 3266489909)),
        (u = Us(u ^ (u >>> 16))),
        u
      );
    }
    function $p(a, u) {
      return (a ^ (u + 2654435769 + (a << 6) + (a >> 2))) | 0;
    }
    var d1 = {
      Iterable: i,
      Seq: le,
      Collection: Jr,
      Map: we,
      OrderedMap: Je,
      List: Ie,
      Stack: Qe,
      Set: Fe,
      OrderedSet: gr,
      Record: Kt,
      Range: pt,
      Repeat: dt,
      is: Pe,
      fromJS: xe,
    };
    return d1;
  });
})(I0);
var Se = I0.exports,
  rk = Se,
  nk = rk.OrderedMap,
  ik = {
    createFromArray: function (t) {
      return nk(
        t.map(function (r) {
          return [r.getKey(), r];
        })
      );
    },
  },
  ma = ik;
function ok(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t);
}
var Nd = Se,
  pf = Nd.Map,
  hf = Nd.OrderedSet,
  ak = Nd.Record,
  j0 = hf(),
  A0 = { style: j0, entity: null },
  lk = ak(A0),
  Od = (function (e) {
    ok(t, e);
    function t() {
      return e.apply(this, arguments) || this;
    }
    var r = t.prototype;
    return (
      (r.getStyle = function () {
        return this.get("style");
      }),
      (r.getEntity = function () {
        return this.get("entity");
      }),
      (r.hasStyle = function (i) {
        return this.getStyle().includes(i);
      }),
      (t.applyStyle = function (i, o) {
        var l = i.set("style", i.getStyle().add(o));
        return t.create(l);
      }),
      (t.removeStyle = function (i, o) {
        var l = i.set("style", i.getStyle().remove(o));
        return t.create(l);
      }),
      (t.applyEntity = function (i, o) {
        var l = i.getEntity() === o ? i : i.set("entity", o);
        return t.create(l);
      }),
      (t.create = function (i) {
        if (!i) return Td;
        var o = { style: j0, entity: null },
          l = pf(o).merge(i),
          s = Ku.get(l);
        if (s) return s;
        var c = new t(l);
        return (Ku = Ku.set(l, c)), c;
      }),
      (t.fromJS = function (i) {
        var o = i.style,
          l = i.entity;
        return new t({
          style: Array.isArray(o) ? hf(o) : o,
          entity: Array.isArray(l) ? hf(l) : l,
        });
      }),
      t
    );
  })(lk),
  Td = new Od(),
  Ku = pf([[pf(A0), Td]]);
Od.EMPTY = Td;
var or = Od;
function sk(e, t, r, n) {
  if (e.size) {
    var i = 0;
    e.reduce(function (o, l, s) {
      return t(o, l) || (r(o) && n(i, s), (i = s)), l;
    }),
      r(e.last()) && n(i, e.count());
  }
}
var va = sk;
function uk(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t);
}
var ck = or,
  nm = va,
  ga = Se,
  P0 = ga.List,
  fk = ga.Map,
  dk = ga.OrderedSet,
  pk = ga.Record,
  hk = ga.Repeat,
  mk = dk(),
  vk = {
    key: "",
    type: "unstyled",
    text: "",
    characterList: P0(),
    depth: 0,
    data: fk(),
  },
  gk = pk(vk),
  yk = function (t) {
    if (!t) return t;
    var r = t.characterList,
      n = t.text;
    return n && !r && (t.characterList = P0(hk(ck.EMPTY, n.length))), t;
  },
  xk = (function (e) {
    uk(t, e);
    function t(n) {
      return e.call(this, yk(n)) || this;
    }
    var r = t.prototype;
    return (
      (r.getKey = function () {
        return this.get("key");
      }),
      (r.getType = function () {
        return this.get("type");
      }),
      (r.getText = function () {
        return this.get("text");
      }),
      (r.getCharacterList = function () {
        return this.get("characterList");
      }),
      (r.getLength = function () {
        return this.getText().length;
      }),
      (r.getDepth = function () {
        return this.get("depth");
      }),
      (r.getData = function () {
        return this.get("data");
      }),
      (r.getInlineStyleAt = function (i) {
        var o = this.getCharacterList().get(i);
        return o ? o.getStyle() : mk;
      }),
      (r.getEntityAt = function (i) {
        var o = this.getCharacterList().get(i);
        return o ? o.getEntity() : null;
      }),
      (r.findStyleRanges = function (i, o) {
        nm(this.getCharacterList(), wk, i, o);
      }),
      (r.findEntityRanges = function (i, o) {
        nm(this.getCharacterList(), _k, i, o);
      }),
      t
    );
  })(gk);
function wk(e, t) {
  return e.getStyle() === t.getStyle();
}
function _k(e, t) {
  return e.getEntity() === t.getEntity();
}
var Yn = xk;
function Sk(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t);
}
var Ek = or,
  im = va,
  ya = Se,
  mf = ya.List,
  kk = ya.Map,
  Ck = ya.OrderedSet,
  bk = ya.Record,
  Nk = ya.Repeat,
  Ok = Ck(),
  om = {
    parent: null,
    characterList: mf(),
    data: kk(),
    depth: 0,
    key: "",
    text: "",
    type: "unstyled",
    children: mf(),
    prevSibling: null,
    nextSibling: null,
  },
  Tk = function (t, r) {
    return t.getStyle() === r.getStyle();
  },
  Dk = function (t, r) {
    return t.getEntity() === r.getEntity();
  },
  Lk = function (t) {
    if (!t) return t;
    var r = t.characterList,
      n = t.text;
    return n && !r && (t.characterList = mf(Nk(Ek.EMPTY, n.length))), t;
  },
  Bk = (function (e) {
    Sk(t, e);
    function t() {
      var n =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : om;
      return e.call(this, Lk(n)) || this;
    }
    var r = t.prototype;
    return (
      (r.getKey = function () {
        return this.get("key");
      }),
      (r.getType = function () {
        return this.get("type");
      }),
      (r.getText = function () {
        return this.get("text");
      }),
      (r.getCharacterList = function () {
        return this.get("characterList");
      }),
      (r.getLength = function () {
        return this.getText().length;
      }),
      (r.getDepth = function () {
        return this.get("depth");
      }),
      (r.getData = function () {
        return this.get("data");
      }),
      (r.getInlineStyleAt = function (i) {
        var o = this.getCharacterList().get(i);
        return o ? o.getStyle() : Ok;
      }),
      (r.getEntityAt = function (i) {
        var o = this.getCharacterList().get(i);
        return o ? o.getEntity() : null;
      }),
      (r.getChildKeys = function () {
        return this.get("children");
      }),
      (r.getParentKey = function () {
        return this.get("parent");
      }),
      (r.getPrevSiblingKey = function () {
        return this.get("prevSibling");
      }),
      (r.getNextSiblingKey = function () {
        return this.get("nextSibling");
      }),
      (r.findStyleRanges = function (i, o) {
        im(this.getCharacterList(), Tk, i, o);
      }),
      (r.findEntityRanges = function (i, o) {
        im(this.getCharacterList(), Dk, i, o);
      }),
      t
    );
  })(bk(om)),
  ar = Bk,
  am = or,
  Rk = Se,
  Mk = Rk.Map,
  Ik = {
    add: function (t, r, n) {
      return lm(t, r, n, !0);
    },
    remove: function (t, r, n) {
      return lm(t, r, n, !1);
    },
  };
function lm(e, t, r, n) {
  var i = e.getBlockMap(),
    o = t.getStartKey(),
    l = t.getStartOffset(),
    s = t.getEndKey(),
    c = t.getEndOffset(),
    f = i
      .skipUntil(function (h, g) {
        return g === o;
      })
      .takeUntil(function (h, g) {
        return g === s;
      })
      .concat(Mk([[s, i.get(s)]]))
      .map(function (h, g) {
        var p, x;
        o === s
          ? ((p = l), (x = c))
          : ((p = g === o ? l : 0), (x = g === s ? c : h.getLength()));
        for (var w = h.getCharacterList(), k; p < x; )
          (k = w.get(p)),
            (w = w.set(p, n ? am.applyStyle(k, r) : am.removeStyle(k, r))),
            p++;
        return h.set("characterList", w);
      });
  return e.merge({
    blockMap: i.merge(f),
    selectionBefore: t,
    selectionAfter: t,
  });
}
var jk = Ik,
  Ak = or;
function Pk(e, t, r, n) {
  for (var i = t, o = e.getCharacterList(); i < r; )
    (o = o.set(i, Ak.applyEntity(o.get(i), n))), i++;
  return e.set("characterList", o);
}
var Fk = Pk,
  $k = Fk,
  Kk = Se;
function zk(e, t, r) {
  var n = e.getBlockMap(),
    i = t.getStartKey(),
    o = t.getStartOffset(),
    l = t.getEndKey(),
    s = t.getEndOffset(),
    c = n
      .skipUntil(function (f, h) {
        return h === i;
      })
      .takeUntil(function (f, h) {
        return h === l;
      })
      .toOrderedMap()
      .merge(Kk.OrderedMap([[l, n.get(l)]]))
      .map(function (f, h) {
        var g = h === i ? o : 0,
          p = h === l ? s : f.getLength();
        return $k(f, g, p, r);
      });
  return e.merge({
    blockMap: n.merge(c),
    selectionBefore: t,
    selectionAfter: t,
  });
}
var Uk = zk,
  Hk = {
    getRemovalRange: function (t, r, n, i, o) {
      var l = n.split(" ");
      l = l.map(function (b, S) {
        if (o === "forward") {
          if (S > 0) return " " + b;
        } else if (S < l.length - 1) return b + " ";
        return b;
      });
      for (var s = i, c, f, h = null, g = null, p = 0; p < l.length; p++) {
        if (((f = l[p]), (c = s + f.length), t < c && s < r))
          h !== null || (h = s), (g = c);
        else if (h !== null) break;
        s = c;
      }
      var x = i + n.length,
        w = h === i,
        k = g === x;
      return (
        ((!w && k) || (w && !k)) &&
          (o === "forward" ? g !== x && g++ : h !== i && h--),
        { start: h, end: g }
      );
    },
  },
  Wk = Hk;
function qk(e, t) {
  for (
    var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2;
    i < r;
    i++
  )
    n[i - 2] = arguments[i];
  if (!e) {
    var o;
    if (t === void 0)
      o = new Error(
        "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
      );
    else {
      var l = 0;
      (o = new Error(
        t.replace(/%s/g, function () {
          return String(n[l++]);
        })
      )),
        (o.name = "Invariant Violation");
    }
    throw ((o.framesToPop = 1), o);
  }
}
var Ce = qk,
  Vk = Ce;
function Gk(e, t) {
  var r = [];
  return (
    e.findEntityRanges(
      function (n) {
        return n.getEntity() === t;
      },
      function (n, i) {
        r.push({ start: n, end: i });
      }
    ),
    r.length || Vk(!1),
    r
  );
}
var Jk = Gk,
  Yk = Wk,
  Qk = Jk,
  Xk = Ce;
function Zk(e, t, r, n, i) {
  var o = n.getStartOffset(),
    l = n.getEndOffset(),
    s = t.getEntityAt(o),
    c = r.getEntityAt(l - 1);
  if (!s && !c) return n;
  var f = n;
  if (s && s === c) f = mo(e, t, f, i, s, !0, !0);
  else if (s && c) {
    var h = mo(e, t, f, i, s, !1, !0),
      g = mo(e, r, f, i, c, !1, !1);
    f = f.merge({
      anchorOffset: h.getAnchorOffset(),
      focusOffset: g.getFocusOffset(),
      isBackward: !1,
    });
  } else if (s) {
    var p = mo(e, t, f, i, s, !1, !0);
    f = f.merge({ anchorOffset: p.getStartOffset(), isBackward: !1 });
  } else if (c) {
    var x = mo(e, r, f, i, c, !1, !1);
    f = f.merge({ focusOffset: x.getEndOffset(), isBackward: !1 });
  }
  return f;
}
function mo(e, t, r, n, i, o, l) {
  var s = r.getStartOffset(),
    c = r.getEndOffset(),
    f = e.__get(i),
    h = f.getMutability(),
    g = l ? s : c;
  if (h === "MUTABLE") return r;
  var p = Qk(t, i).filter(function (k) {
    return g <= k.end && g >= k.start;
  });
  p.length != 1 && Xk(!1);
  var x = p[0];
  if (h === "IMMUTABLE")
    return r.merge({
      anchorOffset: x.start,
      focusOffset: x.end,
      isBackward: !1,
    });
  o || (l ? (c = x.end) : (s = x.start));
  var w = Yk.getRemovalRange(
    s,
    c,
    t.getText().slice(x.start, x.end),
    x.start,
    n
  );
  return r.merge({ anchorOffset: w.start, focusOffset: w.end, isBackward: !1 });
}
var eC = Zk,
  sm = {},
  tC = Math.pow(2, 24);
function rC() {
  for (var e; e === void 0 || sm.hasOwnProperty(e) || !isNaN(+e); )
    e = Math.floor(Math.random() * tC).toString(32);
  return (sm[e] = !0), e;
}
var Dr = rC,
  nC = ar,
  F0 = Dr,
  iC = Se,
  $0 = iC.OrderedMap,
  oC = function (t) {
    var r = {},
      n;
    return $0(
      t
        .withMutations(function (i) {
          i.forEach(function (o, l) {
            var s = o.getKey(),
              c = o.getNextSiblingKey(),
              f = o.getPrevSiblingKey(),
              h = o.getChildKeys(),
              g = o.getParentKey(),
              p = F0();
            if (((r[s] = p), c)) {
              var x = i.get(c);
              x
                ? i.setIn([c, "prevSibling"], p)
                : i.setIn([s, "nextSibling"], null);
            }
            if (f) {
              var w = i.get(f);
              w
                ? i.setIn([f, "nextSibling"], p)
                : i.setIn([s, "prevSibling"], null);
            }
            if (g && i.get(g)) {
              var k = i.get(g),
                b = k.getChildKeys();
              i.setIn([g, "children"], b.set(b.indexOf(o.getKey()), p));
            } else i.setIn([s, "parent"], null), n && (i.setIn([n.getKey(), "nextSibling"], p), i.setIn([s, "prevSibling"], r[n.getKey()])), (n = i.get(s));
            h.forEach(function (S) {
              var _ = i.get(S);
              _
                ? i.setIn([S, "parent"], p)
                : i.setIn(
                    [s, "children"],
                    o.getChildKeys().filter(function (E) {
                      return E !== S;
                    })
                  );
            });
          });
        })
        .toArray()
        .map(function (i) {
          return [r[i.getKey()], i.set("key", r[i.getKey()])];
        })
    );
  },
  aC = function (t) {
    return $0(
      t.toArray().map(function (r) {
        var n = F0();
        return [n, r.set("key", n)];
      })
    );
  },
  lC = function (t) {
    var r = t.first() instanceof nC;
    return r ? oC(t) : aC(t);
  },
  K0 = lC,
  sC = or,
  uC = va,
  cC = Ce;
function fC(e, t) {
  var r = e.getBlockMap(),
    n = e.getEntityMap(),
    i = {},
    o = t.getStartKey(),
    l = t.getStartOffset(),
    s = r.get(o),
    c = um(n, s, l);
  c !== s && (i[o] = c);
  var f = t.getEndKey(),
    h = t.getEndOffset(),
    g = r.get(f);
  o === f && (g = c);
  var p = um(n, g, h);
  return (
    p !== g && (i[f] = p),
    Object.keys(i).length
      ? e.merge({ blockMap: r.merge(i), selectionAfter: t })
      : e.set("selectionAfter", t)
  );
}
function dC(e, t, r) {
  var n;
  return (
    uC(
      e,
      function (i, o) {
        return i.getEntity() === o.getEntity();
      },
      function (i) {
        return i.getEntity() === t;
      },
      function (i, o) {
        i <= r && o >= r && (n = { start: i, end: o });
      }
    ),
    typeof n != "object" && cC(!1),
    n
  );
}
function um(e, t, r) {
  var n = t.getCharacterList(),
    i = r > 0 ? n.get(r - 1) : void 0,
    o = r < n.count() ? n.get(r) : void 0,
    l = i ? i.getEntity() : void 0,
    s = o ? o.getEntity() : void 0;
  if (s && s === l) {
    var c = e.__get(s);
    if (c.getMutability() !== "MUTABLE") {
      for (var f = dC(n, s, r), h = f.start, g = f.end, p; h < g; )
        (p = n.get(h)), (n = n.set(h, sC.applyEntity(p, null))), h++;
      return t.set("characterList", n);
    }
  }
  return t;
}
var z0 = fC,
  pC = K0,
  hC = z0,
  mC = function (t, r) {
    var n = r.getStartKey(),
      i = r.getStartOffset(),
      o = r.getEndKey(),
      l = r.getEndOffset(),
      s = hC(t, r),
      c = s.getBlockMap(),
      f = c.keySeq(),
      h = f.indexOf(n),
      g = f.indexOf(o) + 1;
    return pC(
      c.slice(h, g).map(function (p, x) {
        var w = p.getText(),
          k = p.getCharacterList();
        return n === o
          ? p.merge({ text: w.slice(i, l), characterList: k.slice(i, l) })
          : x === n
          ? p.merge({ text: w.slice(i), characterList: k.slice(i) })
          : x === o
          ? p.merge({ text: w.slice(0, l), characterList: k.slice(0, l) })
          : p;
      })
    );
  },
  Ns = mC;
function vC(e, t, r) {
  var n = e;
  if (r === n.count())
    t.forEach(function (l) {
      n = n.push(l);
    });
  else if (r === 0)
    t.reverse().forEach(function (l) {
      n = n.unshift(l);
    });
  else {
    var i = n.slice(0, r),
      o = n.slice(r);
    n = i.concat(t, o).toList();
  }
  return n;
}
var U0 = vC,
  gC = ma,
  H0 = ar,
  yC = Se,
  xC = U0,
  cm = Ce,
  wC = K0,
  _C = yC.List,
  SC = function (t, r, n, i, o, l) {
    var s =
        arguments.length > 6 && arguments[6] !== void 0
          ? arguments[6]
          : "REPLACE_WITH_NEW_DATA",
      c = n.get(o),
      f = c.getText(),
      h = c.getCharacterList(),
      g = o,
      p = l + i.getText().length,
      x = null;
    switch (s) {
      case "MERGE_OLD_DATA_TO_NEW_DATA":
        x = i.getData().merge(c.getData());
        break;
      case "REPLACE_WITH_NEW_DATA":
        x = i.getData();
        break;
    }
    var w = c.getType();
    f && w === "unstyled" && (w = i.getType());
    var k = c.merge({
      text: f.slice(0, l) + i.getText() + f.slice(l),
      characterList: xC(h, i.getCharacterList(), l),
      type: w,
      data: x,
    });
    return t.merge({
      blockMap: n.set(o, k),
      selectionBefore: r,
      selectionAfter: r.merge({
        anchorKey: g,
        anchorOffset: p,
        focusKey: g,
        focusOffset: p,
        isBackward: !1,
      }),
    });
  },
  EC = function (t, r, n) {
    var i = t.getText(),
      o = t.getCharacterList(),
      l = i.slice(0, r),
      s = o.slice(0, r),
      c = n.first();
    return t.merge({
      text: l + c.getText(),
      characterList: s.concat(c.getCharacterList()),
      type: l ? t.getType() : c.getType(),
      data: c.getData(),
    });
  },
  kC = function (t, r, n) {
    var i = t.getText(),
      o = t.getCharacterList(),
      l = i.length,
      s = i.slice(r, l),
      c = o.slice(r, l),
      f = n.last();
    return f.merge({
      text: f.getText() + s,
      characterList: f.getCharacterList().concat(c),
      data: f.getData(),
    });
  },
  CC = function (t, r) {
    var n = t.getKey(),
      i = t,
      o = [];
    for (r.get(n) && o.push(n); i && i.getNextSiblingKey(); ) {
      var l = i.getNextSiblingKey();
      if (!l) break;
      o.push(l), (i = r.get(l));
    }
    return o;
  },
  bC = function (t, r, n, i) {
    return t.withMutations(function (o) {
      var l = n.getKey(),
        s = i.getKey(),
        c = n.getNextSiblingKey(),
        f = n.getParentKey(),
        h = CC(i, t),
        g = h[h.length - 1];
      if (
        (o.get(s)
          ? (o.setIn([l, "nextSibling"], s), o.setIn([s, "prevSibling"], l))
          : (o.setIn([l, "nextSibling"], i.getNextSiblingKey()),
            o.setIn([i.getNextSiblingKey(), "prevSibling"], l)),
        o.setIn([g, "nextSibling"], c),
        c && o.setIn([c, "prevSibling"], g),
        h.forEach(function (S) {
          return o.setIn([S, "parent"], f);
        }),
        f)
      ) {
        var p = t.get(f),
          x = p.getChildKeys(),
          w = x.indexOf(l),
          k = w + 1,
          b = x.toArray();
        b.splice.apply(b, [k, 0].concat(h)), o.setIn([f, "children"], _C(b));
      }
    });
  },
  NC = function (t, r, n, i, o, l) {
    var s = n.first() instanceof H0,
      c = [],
      f = i.size,
      h = n.get(o),
      g = i.first(),
      p = i.last(),
      x = p.getLength(),
      w = p.getKey(),
      k = s && (!h.getChildKeys().isEmpty() || !g.getChildKeys().isEmpty());
    n.forEach(function (S, _) {
      if (_ !== o) {
        c.push(S);
        return;
      }
      k ? c.push(S) : c.push(EC(S, l, i)),
        i.slice(k ? 0 : 1, f - 1).forEach(function (E) {
          return c.push(E);
        }),
        c.push(kC(S, l, i));
    });
    var b = gC.createFromArray(c);
    return (
      s && (b = bC(b, n, h, g)),
      t.merge({
        blockMap: b,
        selectionBefore: r,
        selectionAfter: r.merge({
          anchorKey: w,
          anchorOffset: x,
          focusKey: w,
          focusOffset: x,
          isBackward: !1,
        }),
      })
    );
  },
  OC = function (t, r, n) {
    var i =
      arguments.length > 3 && arguments[3] !== void 0
        ? arguments[3]
        : "REPLACE_WITH_NEW_DATA";
    r.isCollapsed() || cm(!1);
    var o = t.getBlockMap(),
      l = wC(n),
      s = r.getStartKey(),
      c = r.getStartOffset(),
      f = o.get(s);
    return (
      f instanceof H0 && (f.getChildKeys().isEmpty() || cm(!1)),
      l.size === 1 ? SC(t, r, o, l.first(), s, c, i) : NC(t, r, o, l, s, c)
    );
  },
  TC = OC,
  DC = Se,
  LC = U0,
  BC = Ce,
  RC = DC.Repeat;
function MC(e, t, r, n) {
  t.isCollapsed() || BC(!1);
  var i = null;
  if ((r != null && (i = r.length), i == null || i === 0)) return e;
  var o = e.getBlockMap(),
    l = t.getStartKey(),
    s = t.getStartOffset(),
    c = o.get(l),
    f = c.getText(),
    h = c.merge({
      text: f.slice(0, s) + r + f.slice(s, c.getLength()),
      characterList: LC(c.getCharacterList(), RC(n, i).toList(), s),
    }),
    g = s + i;
  return e.merge({
    blockMap: o.set(l, h),
    selectionAfter: t.merge({ anchorOffset: g, focusOffset: g }),
  });
}
var IC = MC,
  jC = Se,
  AC = jC.Map;
function PC(e, t, r) {
  var n = t.getStartKey(),
    i = t.getEndKey(),
    o = e.getBlockMap(),
    l = o
      .toSeq()
      .skipUntil(function (s, c) {
        return c === n;
      })
      .takeUntil(function (s, c) {
        return c === i;
      })
      .concat(AC([[i, o.get(i)]]))
      .map(r);
  return e.merge({
    blockMap: o.merge(l),
    selectionBefore: t,
    selectionAfter: t,
  });
}
var W0 = PC,
  FC = ar,
  $C = function (t, r) {
    var n = t instanceof FC;
    if (!n) return null;
    var i = t.getNextSiblingKey();
    if (i) return i;
    var o = t.getParentKey();
    if (!o) return null;
    for (var l = r.get(o); l && !l.getNextSiblingKey(); ) {
      var s = l.getParentKey();
      l = s ? r.get(s) : null;
    }
    return l ? l.getNextSiblingKey() : null;
  },
  q0 = $C,
  KC = ar,
  vf = q0,
  V0 = Se;
V0.List;
var fm = V0.Map,
  Tt = function (t, r, n) {
    if (t) {
      var i = r.get(t);
      i && r.set(t, n(i));
    }
  },
  os = function (t, r) {
    var n = [];
    if (!t) return n;
    for (var i = r.get(t); i && i.getParentKey(); ) {
      var o = i.getParentKey();
      o && n.push(o), (i = o ? r.get(o) : null);
    }
    return n;
  },
  zC = function (t, r) {
    var n = [];
    if (!t) return n;
    for (var i = vf(t, r); i && r.get(i); ) {
      var o = r.get(i);
      n.push(i), (i = o.getParentKey() ? vf(o, r) : null);
    }
    return n;
  },
  pi = function (t, r, n) {
    if (!t) return null;
    for (var i = n.get(t.getKey()).getNextSiblingKey(); i && !r.get(i); )
      i = n.get(i).getNextSiblingKey() || null;
    return i;
  },
  hi = function (t, r, n) {
    if (!t) return null;
    for (var i = n.get(t.getKey()).getPrevSiblingKey(); i && !r.get(i); )
      i = n.get(i).getPrevSiblingKey() || null;
    return i;
  },
  UC = function (t, r, n, i) {
    return t.withMutations(function (o) {
      if (
        (Tt(r.getKey(), o, function (h) {
          return h.merge({
            nextSibling: pi(h, o, i),
            prevSibling: hi(h, o, i),
          });
        }),
        Tt(n.getKey(), o, function (h) {
          return h.merge({
            nextSibling: pi(h, o, i),
            prevSibling: hi(h, o, i),
          });
        }),
        os(r.getKey(), i).forEach(function (h) {
          return Tt(h, o, function (g) {
            return g.merge({
              children: g.getChildKeys().filter(function (p) {
                return o.get(p);
              }),
              nextSibling: pi(g, o, i),
              prevSibling: hi(g, o, i),
            });
          });
        }),
        Tt(r.getNextSiblingKey(), o, function (h) {
          return h.merge({ prevSibling: r.getPrevSiblingKey() });
        }),
        Tt(r.getPrevSiblingKey(), o, function (h) {
          return h.merge({ nextSibling: pi(h, o, i) });
        }),
        Tt(n.getNextSiblingKey(), o, function (h) {
          return h.merge({ prevSibling: hi(h, o, i) });
        }),
        Tt(n.getPrevSiblingKey(), o, function (h) {
          return h.merge({ nextSibling: n.getNextSiblingKey() });
        }),
        os(n.getKey(), i).forEach(function (h) {
          Tt(h, o, function (g) {
            return g.merge({
              children: g.getChildKeys().filter(function (p) {
                return o.get(p);
              }),
              nextSibling: pi(g, o, i),
              prevSibling: hi(g, o, i),
            });
          });
        }),
        zC(n, i).forEach(function (h) {
          return Tt(h, o, function (g) {
            return g.merge({
              nextSibling: pi(g, o, i),
              prevSibling: hi(g, o, i),
            });
          });
        }),
        t.get(r.getKey()) == null &&
          t.get(n.getKey()) != null &&
          n.getParentKey() === r.getKey() &&
          n.getPrevSiblingKey() == null)
      ) {
        var l = r.getPrevSiblingKey();
        Tt(n.getKey(), o, function (h) {
          return h.merge({ prevSibling: l });
        }),
          Tt(l, o, function (h) {
            return h.merge({ nextSibling: n.getKey() });
          });
        var s = l ? t.get(l) : null,
          c = s ? s.getParentKey() : null;
        if (
          (r.getChildKeys().forEach(function (h) {
            Tt(h, o, function (g) {
              return g.merge({ parent: c });
            });
          }),
          c != null)
        ) {
          var f = t.get(c);
          Tt(c, o, function (h) {
            return h.merge({
              children: f.getChildKeys().concat(r.getChildKeys()),
            });
          });
        }
        Tt(
          r.getChildKeys().find(function (h) {
            var g = t.get(h);
            return g.getNextSiblingKey() === null;
          }),
          o,
          function (h) {
            return h.merge({ nextSibling: r.getNextSiblingKey() });
          }
        );
      }
    });
  },
  HC = function (t, r) {
    if (r.isCollapsed()) return t;
    var n = t.getBlockMap(),
      i = r.getStartKey(),
      o = r.getStartOffset(),
      l = r.getEndKey(),
      s = r.getEndOffset(),
      c = n.get(i),
      f = n.get(l),
      h = c instanceof KC,
      g = [];
    if (h) {
      var p = f.getChildKeys(),
        x = os(l, n);
      f.getNextSiblingKey() && (g = g.concat(x)),
        p.isEmpty() || (g = g.concat(x.concat([l]))),
        (g = g.concat(os(vf(f, n), n)));
    }
    var w;
    c === f
      ? (w = WC(c.getCharacterList(), o, s))
      : (w = c
          .getCharacterList()
          .slice(0, o)
          .concat(f.getCharacterList().slice(s)));
    var k = c.merge({
        text: c.getText().slice(0, o) + f.getText().slice(s),
        characterList: w,
      }),
      b =
        h &&
        o === 0 &&
        s === 0 &&
        f.getParentKey() === i &&
        f.getPrevSiblingKey() == null,
      S = b
        ? fm([[i, null]])
        : n
            .toSeq()
            .skipUntil(function (E, N) {
              return N === i;
            })
            .takeUntil(function (E, N) {
              return N === l;
            })
            .filter(function (E, N) {
              return g.indexOf(N) === -1;
            })
            .concat(fm([[l, null]]))
            .map(function (E, N) {
              return N === i ? k : null;
            }),
      _ = n.merge(S).filter(function (E) {
        return !!E;
      });
    return (
      h && c !== f && (_ = UC(_, c, f, n)),
      t.merge({
        blockMap: _,
        selectionBefore: r,
        selectionAfter: r.merge({
          anchorKey: i,
          anchorOffset: o,
          focusKey: i,
          focusOffset: o,
          isBackward: !1,
        }),
      })
    );
  },
  WC = function (t, r, n) {
    if (r === 0) for (; r < n; ) (t = t.shift()), r++;
    else if (n === t.count()) for (; n > r; ) (t = t.pop()), n--;
    else {
      var i = t.slice(0, r),
        o = t.slice(n);
      t = i.concat(o).toList();
    }
    return t;
  },
  qC = HC,
  VC = ar,
  GC = Dr,
  G0 = Se,
  dm = Ce,
  JC = W0,
  YC = G0.List,
  QC = G0.Map,
  Za = function (t, r, n) {
    if (t) {
      var i = r.get(t);
      i && r.set(t, n(i));
    }
  },
  XC = function (t, r, n) {
    return t.withMutations(function (i) {
      var o = r.getKey(),
        l = n.getKey();
      Za(r.getParentKey(), i, function (s) {
        var c = s.getChildKeys(),
          f = c.indexOf(o) + 1,
          h = c.toArray();
        return h.splice(f, 0, l), s.merge({ children: YC(h) });
      }),
        Za(r.getNextSiblingKey(), i, function (s) {
          return s.merge({ prevSibling: l });
        }),
        Za(o, i, function (s) {
          return s.merge({ nextSibling: l });
        }),
        Za(l, i, function (s) {
          return s.merge({ prevSibling: o });
        });
    });
  },
  ZC = function (t, r) {
    r.isCollapsed() || dm(!1);
    var n = r.getAnchorKey(),
      i = t.getBlockMap(),
      o = i.get(n),
      l = o.getText();
    if (!l) {
      var s = o.getType();
      if (s === "unordered-list-item" || s === "ordered-list-item")
        return JC(t, r, function (S) {
          return S.merge({ type: "unstyled", depth: 0 });
        });
    }
    var c = r.getAnchorOffset(),
      f = o.getCharacterList(),
      h = GC(),
      g = o instanceof VC,
      p = o.merge({ text: l.slice(0, c), characterList: f.slice(0, c) }),
      x = p.merge({
        key: h,
        text: l.slice(c),
        characterList: f.slice(c),
        data: QC(),
      }),
      w = i.toSeq().takeUntil(function (S) {
        return S === o;
      }),
      k = i
        .toSeq()
        .skipUntil(function (S) {
          return S === o;
        })
        .rest(),
      b = w
        .concat(
          [
            [n, p],
            [h, x],
          ],
          k
        )
        .toOrderedMap();
    return (
      g && (o.getChildKeys().isEmpty() || dm(!1), (b = XC(b, p, x))),
      t.merge({
        blockMap: b,
        selectionBefore: r,
        selectionAfter: r.merge({
          anchorKey: h,
          anchorOffset: 0,
          focusKey: h,
          focusOffset: 0,
          isBackward: !1,
        }),
      })
    );
  },
  eb = ZC,
  tb = or,
  pm = jk,
  rb = Uk,
  nb = eC,
  ib = Ns,
  ob = Se,
  ab = TC,
  lb = IC,
  sb = Ce,
  zu = W0,
  vo = z0,
  go = qC,
  ub = eb,
  cb = ob.OrderedSet,
  Dl = {
    replaceText: function (t, r, n, i, o) {
      var l = vo(t, r),
        s = go(l, r),
        c = tb.create({ style: i || cb(), entity: o || null });
      return lb(s, s.getSelectionAfter(), n, c);
    },
    insertText: function (t, r, n, i, o) {
      return r.isCollapsed() || sb(!1), Dl.replaceText(t, r, n, i, o);
    },
    moveText: function (t, r, n) {
      var i = ib(t, r),
        o = Dl.removeRange(t, r, "backward");
      return Dl.replaceWithFragment(o, n, i);
    },
    replaceWithFragment: function (t, r, n) {
      var i =
          arguments.length > 3 && arguments[3] !== void 0
            ? arguments[3]
            : "REPLACE_WITH_NEW_DATA",
        o = vo(t, r),
        l = go(o, r);
      return ab(l, l.getSelectionAfter(), n, i);
    },
    removeRange: function (t, r, n) {
      var i, o, l, s;
      r.getIsBackward() &&
        (r = r.merge({
          anchorKey: r.getFocusKey(),
          anchorOffset: r.getFocusOffset(),
          focusKey: r.getAnchorKey(),
          focusOffset: r.getAnchorOffset(),
          isBackward: !1,
        })),
        (i = r.getAnchorKey()),
        (o = r.getFocusKey()),
        (l = t.getBlockForKey(i)),
        (s = t.getBlockForKey(o));
      var c = r.getStartOffset(),
        f = r.getEndOffset(),
        h = l.getEntityAt(c),
        g = s.getEntityAt(f - 1);
      if (i === o && h && h === g) {
        var p = nb(t.getEntityMap(), l, s, r, n);
        return go(t, p);
      }
      var x = vo(t, r);
      return go(x, r);
    },
    splitBlock: function (t, r) {
      var n = vo(t, r),
        i = go(n, r);
      return ub(i, i.getSelectionAfter());
    },
    applyInlineStyle: function (t, r, n) {
      return pm.add(t, r, n);
    },
    removeInlineStyle: function (t, r, n) {
      return pm.remove(t, r, n);
    },
    setBlockType: function (t, r, n) {
      return zu(t, r, function (i) {
        return i.merge({ type: n, depth: 0 });
      });
    },
    setBlockData: function (t, r, n) {
      return zu(t, r, function (i) {
        return i.merge({ data: n });
      });
    },
    mergeBlockData: function (t, r, n) {
      return zu(t, r, function (i) {
        return i.merge({ data: i.getData().merge(n) });
      });
    },
    applyEntity: function (t, r, n) {
      var i = vo(t, r);
      return rb(i, r, n);
    },
  },
  It = Dl;
function fb(e) {
  return Object.keys(e).map(function (t) {
    return e[t];
  });
}
var J0 = fb;
function db(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {},
      n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" &&
      (n = n.concat(
        Object.getOwnPropertySymbols(r).filter(function (i) {
          return Object.getOwnPropertyDescriptor(r, i).enumerable;
        })
      )),
      n.forEach(function (i) {
        pb(e, i, r[i]);
      });
  }
  return e;
}
function pb(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function hb(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    o;
  for (o = 0; o < n.length; o++)
    (i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Y0 = va,
  mb = J0,
  Dd = Se,
  xi = Dd.List,
  vb = Dd.Repeat,
  Q0 = Dd.Record,
  X0 = function () {
    return !0;
  },
  gb = { start: null, end: null },
  gf = Q0(gb),
  yb = { start: null, end: null, decoratorKey: null, leaves: null },
  Uu = Q0(yb),
  xb = {
    generate: function (t, r, n) {
      var i = r.getLength();
      if (!i)
        return xi.of(
          new Uu({
            start: 0,
            end: 0,
            decoratorKey: null,
            leaves: xi.of(new gf({ start: 0, end: 0 })),
          })
        );
      var o = [],
        l = n ? n.getDecorations(r, t) : xi(vb(null, i)),
        s = r.getCharacterList();
      return (
        Y0(l, Z0, X0, function (c, f) {
          o.push(
            new Uu({
              start: c,
              end: f,
              decoratorKey: l.get(c),
              leaves: wb(s.slice(c, f).toList(), c),
            })
          );
        }),
        xi(o)
      );
    },
    fromJS: function (t) {
      var r = t.leaves,
        n = hb(t, ["leaves"]);
      return new Uu(
        db({}, n, {
          leaves:
            r != null
              ? xi(Array.isArray(r) ? r : mb(r)).map(function (i) {
                  return gf(i);
                })
              : null,
        })
      );
    },
  };
function wb(e, t) {
  var r = [],
    n = e
      .map(function (i) {
        return i.getStyle();
      })
      .toList();
  return (
    Y0(n, Z0, X0, function (i, o) {
      r.push(new gf({ start: i + t, end: o + t }));
    }),
    xi(r)
  );
}
function Z0(e, t) {
  return e === t;
}
var _b = xb;
function Sb(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t);
}
var Eb = Se,
  kb = Eb.Record,
  Cb = kb({ type: "TOKEN", mutability: "IMMUTABLE", data: Object }),
  bb = (function (e) {
    Sb(t, e);
    function t() {
      return e.apply(this, arguments) || this;
    }
    var r = t.prototype;
    return (
      (r.getType = function () {
        return this.get("type");
      }),
      (r.getMutability = function () {
        return this.get("mutability");
      }),
      (r.getData = function () {
        return this.get("data");
      }),
      t
    );
  })(Cb),
  ex = bb;
function Nb() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
    var t = (Math.random() * 16) | 0,
      r = e == "x" ? t : (t & 3) | 8;
    return r.toString(16);
  });
}
var Ob = Nb;
function Tb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {},
      n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" &&
      (n = n.concat(
        Object.getOwnPropertySymbols(r).filter(function (i) {
          return Object.getOwnPropertyDescriptor(r, i).enumerable;
        })
      )),
      n.forEach(function (i) {
        Db(e, i, r[i]);
      });
  }
  return e;
}
function Db(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var Lb = ex,
  Bb = Se,
  Rb = Ce,
  yf = Ob,
  Mb = Bb.Map,
  Br = Mb(),
  yo = yf();
function mi(e, t) {
  console.warn(
    "WARNING: " +
      e +
      ` will be deprecated soon!
Please use "` +
      t +
      '" instead.'
  );
}
var Er = {
    getLastCreatedEntityKey: function () {
      return (
        mi(
          "DraftEntity.getLastCreatedEntityKey",
          "contentState.getLastCreatedEntityKey"
        ),
        Er.__getLastCreatedEntityKey()
      );
    },
    create: function (t, r, n) {
      return (
        mi("DraftEntity.create", "contentState.createEntity"),
        Er.__create(t, r, n)
      );
    },
    add: function (t) {
      return mi("DraftEntity.add", "contentState.addEntity"), Er.__add(t);
    },
    get: function (t) {
      return mi("DraftEntity.get", "contentState.getEntity"), Er.__get(t);
    },
    __getAll: function () {
      return Br;
    },
    __loadWithEntities: function (t) {
      (Br = t), (yo = yf());
    },
    mergeData: function (t, r) {
      return (
        mi("DraftEntity.mergeData", "contentState.mergeEntityData"),
        Er.__mergeData(t, r)
      );
    },
    replaceData: function (t, r) {
      return (
        mi("DraftEntity.replaceData", "contentState.replaceEntityData"),
        Er.__replaceData(t, r)
      );
    },
    __getLastCreatedEntityKey: function () {
      return yo;
    },
    __create: function (t, r, n) {
      return Er.__add(new Lb({ type: t, mutability: r, data: n || {} }));
    },
    __add: function (t) {
      return (yo = yf()), (Br = Br.set(yo, t)), yo;
    },
    __get: function (t) {
      var r = Br.get(t);
      return r || Rb(!1), r;
    },
    __mergeData: function (t, r) {
      var n = Er.__get(t),
        i = Tb({}, n.getData(), r),
        o = n.set("data", i);
      return (Br = Br.set(t, o)), o;
    },
    __replaceData: function (t, r) {
      var n = Er.__get(t),
        i = n.set("data", r);
      return (Br = Br.set(t, i)), i;
    },
  },
  Os = Er;
function Ib(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t);
}
var jb = Se,
  Ab = jb.Record,
  Pb = {
    anchorKey: "",
    anchorOffset: 0,
    focusKey: "",
    focusOffset: 0,
    isBackward: !1,
    hasFocus: !1,
  },
  Fb = Ab(Pb),
  $b = (function (e) {
    Ib(t, e);
    function t() {
      return e.apply(this, arguments) || this;
    }
    var r = t.prototype;
    return (
      (r.serialize = function () {
        return (
          "Anchor: " +
          this.getAnchorKey() +
          ":" +
          this.getAnchorOffset() +
          ", Focus: " +
          this.getFocusKey() +
          ":" +
          this.getFocusOffset() +
          ", Is Backward: " +
          String(this.getIsBackward()) +
          ", Has Focus: " +
          String(this.getHasFocus())
        );
      }),
      (r.getAnchorKey = function () {
        return this.get("anchorKey");
      }),
      (r.getAnchorOffset = function () {
        return this.get("anchorOffset");
      }),
      (r.getFocusKey = function () {
        return this.get("focusKey");
      }),
      (r.getFocusOffset = function () {
        return this.get("focusOffset");
      }),
      (r.getIsBackward = function () {
        return this.get("isBackward");
      }),
      (r.getHasFocus = function () {
        return this.get("hasFocus");
      }),
      (r.hasEdgeWithin = function (i, o, l) {
        var s = this.getAnchorKey(),
          c = this.getFocusKey();
        if (s === c && s === i) {
          var f = this.getStartOffset(),
            h = this.getEndOffset();
          return (o <= f && f <= l) || (o <= h && h <= l);
        }
        if (i !== s && i !== c) return !1;
        var g = i === s ? this.getAnchorOffset() : this.getFocusOffset();
        return o <= g && l >= g;
      }),
      (r.isCollapsed = function () {
        return (
          this.getAnchorKey() === this.getFocusKey() &&
          this.getAnchorOffset() === this.getFocusOffset()
        );
      }),
      (r.getStartKey = function () {
        return this.getIsBackward() ? this.getFocusKey() : this.getAnchorKey();
      }),
      (r.getStartOffset = function () {
        return this.getIsBackward()
          ? this.getFocusOffset()
          : this.getAnchorOffset();
      }),
      (r.getEndKey = function () {
        return this.getIsBackward() ? this.getAnchorKey() : this.getFocusKey();
      }),
      (r.getEndOffset = function () {
        return this.getIsBackward()
          ? this.getAnchorOffset()
          : this.getFocusOffset();
      }),
      (t.createEmpty = function (i) {
        return new t({
          anchorKey: i,
          anchorOffset: 0,
          focusKey: i,
          focusOffset: 0,
          isBackward: !1,
          hasFocus: !1,
        });
      }),
      t
    );
  })(Fb),
  Ts = $b,
  bn = function (e) {
    return typeof window < "u" && window.__DRAFT_GKX
      ? !!window.__DRAFT_GKX[e]
      : !1;
  },
  Kb = new RegExp("\r", "g");
function zb(e) {
  return e.replace(Kb, "");
}
var tx = zb;
function hm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {},
      n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" &&
      (n = n.concat(
        Object.getOwnPropertySymbols(r).filter(function (i) {
          return Object.getOwnPropertyDescriptor(r, i).enumerable;
        })
      )),
      n.forEach(function (i) {
        Ub(e, i, r[i]);
      });
  }
  return e;
}
function Ub(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Hb(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t);
}
var Wb = ma,
  mm = or,
  qb = Yn,
  Vb = ar,
  _r = Os,
  el = Ts,
  Gb = Dr,
  Jb = J0,
  Yb = bn,
  xa = Se,
  Qb = tx,
  vm = xa.List,
  Xb = xa.Record,
  Zb = xa.Repeat,
  eN = xa.Map,
  tN = xa.OrderedMap,
  rN = {
    entityMap: null,
    blockMap: null,
    selectionBefore: null,
    selectionAfter: null,
  },
  nN = Xb(rN),
  gm = Yb("draft_tree_data_support") ? Vb : qb,
  iN = (function (e) {
    Hb(t, e);
    function t() {
      return e.apply(this, arguments) || this;
    }
    var r = t.prototype;
    return (
      (r.getEntityMap = function () {
        return _r;
      }),
      (r.getBlockMap = function () {
        return this.get("blockMap");
      }),
      (r.getSelectionBefore = function () {
        return this.get("selectionBefore");
      }),
      (r.getSelectionAfter = function () {
        return this.get("selectionAfter");
      }),
      (r.getBlockForKey = function (i) {
        var o = this.getBlockMap().get(i);
        return o;
      }),
      (r.getKeyBefore = function (i) {
        return this.getBlockMap()
          .reverse()
          .keySeq()
          .skipUntil(function (o) {
            return o === i;
          })
          .skip(1)
          .first();
      }),
      (r.getKeyAfter = function (i) {
        return this.getBlockMap()
          .keySeq()
          .skipUntil(function (o) {
            return o === i;
          })
          .skip(1)
          .first();
      }),
      (r.getBlockAfter = function (i) {
        return this.getBlockMap()
          .skipUntil(function (o, l) {
            return l === i;
          })
          .skip(1)
          .first();
      }),
      (r.getBlockBefore = function (i) {
        return this.getBlockMap()
          .reverse()
          .skipUntil(function (o, l) {
            return l === i;
          })
          .skip(1)
          .first();
      }),
      (r.getBlocksAsArray = function () {
        return this.getBlockMap().toArray();
      }),
      (r.getFirstBlock = function () {
        return this.getBlockMap().first();
      }),
      (r.getLastBlock = function () {
        return this.getBlockMap().last();
      }),
      (r.getPlainText = function (i) {
        return this.getBlockMap()
          .map(function (o) {
            return o ? o.getText() : "";
          })
          .join(
            i ||
              `
`
          );
      }),
      (r.getLastCreatedEntityKey = function () {
        return _r.__getLastCreatedEntityKey();
      }),
      (r.hasText = function () {
        var i = this.getBlockMap();
        return (
          i.size > 1 ||
          escape(i.first().getText()).replace(/%u200B/g, "").length > 0
        );
      }),
      (r.createEntity = function (i, o, l) {
        return _r.__create(i, o, l), this;
      }),
      (r.mergeEntityData = function (i, o) {
        return _r.__mergeData(i, o), this;
      }),
      (r.replaceEntityData = function (i, o) {
        return _r.__replaceData(i, o), this;
      }),
      (r.addEntity = function (i) {
        return _r.__add(i), this;
      }),
      (r.getEntity = function (i) {
        return _r.__get(i);
      }),
      (r.getAllEntities = function () {
        return _r.__getAll();
      }),
      (r.loadWithEntities = function (i) {
        return _r.__loadWithEntities(i);
      }),
      (t.createFromBlockArray = function (i, o) {
        var l = Array.isArray(i) ? i : i.contentBlocks,
          s = Wb.createFromArray(l),
          c = s.isEmpty() ? new el() : el.createEmpty(s.first().getKey());
        return new t({
          blockMap: s,
          entityMap: o || _r,
          selectionBefore: c,
          selectionAfter: c,
        });
      }),
      (t.createFromText = function (i) {
        var o =
            arguments.length > 1 && arguments[1] !== void 0
              ? arguments[1]
              : /\r\n?|\n/g,
          l = i.split(o),
          s = l.map(function (c) {
            return (
              (c = Qb(c)),
              new gm({
                key: Gb(),
                text: c,
                type: "unstyled",
                characterList: vm(Zb(mm.EMPTY, c.length)),
              })
            );
          });
        return t.createFromBlockArray(s);
      }),
      (t.fromJS = function (i) {
        return new t(
          hm({}, i, {
            blockMap: tN(i.blockMap).map(t.createContentBlockFromJS),
            selectionBefore: new el(i.selectionBefore),
            selectionAfter: new el(i.selectionAfter),
          })
        );
      }),
      (t.createContentBlockFromJS = function (i) {
        var o = i.characterList;
        return new gm(
          hm({}, i, {
            data: eN(i.data),
            characterList:
              o != null
                ? vm(
                    (Array.isArray(o) ? o : Jb(o)).map(function (l) {
                      return mm.fromJS(l);
                    })
                  )
                : void 0,
          })
        );
      }),
      t
    );
  })(nN),
  Ld = iN,
  as = Ce,
  oN = "NEUTRAL",
  Ds = "LTR",
  rx = "RTL",
  Ll = null;
function ls(e) {
  return e === Ds || e === rx;
}
function nx(e) {
  return ls(e) || as(!1), e === Ds ? "ltr" : "rtl";
}
function aN(e, t) {
  return ls(e) || as(!1), ls(t) || as(!1), e === t ? null : nx(e);
}
function ix(e) {
  Ll = e;
}
function lN() {
  ix(Ds);
}
function sN() {
  return Ll || this.initGlobalDir(), Ll || as(!1), Ll;
}
var uN = {
    NEUTRAL: oN,
    LTR: Ds,
    RTL: rx,
    isStrong: ls,
    getHTMLDir: nx,
    getHTMLDirIfDifferent: aN,
    setGlobalDir: ix,
    initGlobalDir: lN,
    getGlobalDir: sN,
  },
  Ls = uN,
  zr = Ls,
  cN = Ce,
  Fo = {
    L: "A-Za-zªµºÀ-ÖØ-öø-ƺƻƼ-ƿǀ-ǃǄ-ʓʔʕ-ʯʰ-ʸʻ-ˁː-ˑˠ-ˤˮͰ-ͳͶ-ͷͺͻ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ҂Ҋ-ԯԱ-Ֆՙ՚-՟ա-և։ःऄ-हऻऽा-ीॉ-ौॎ-ॏॐक़-ॡ।-॥०-९॰ॱॲ-ঀং-ঃঅ-ঌএ-ঐও-নপ-রলশ-হঽা-ীে-ৈো-ৌৎৗড়-ঢ়য়-ৡ০-৯ৰ-ৱ৴-৹৺ਃਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹਾ-ੀਖ਼-ੜਫ਼੦-੯ੲ-ੴઃઅ-ઍએ-ઑઓ-નપ-રલ-ળવ-હઽા-ીૉો-ૌૐૠ-ૡ૦-૯૰ଂ-ଃଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହଽାୀେ-ୈୋ-ୌୗଡ଼-ଢ଼ୟ-ୡ୦-୯୰ୱ୲-୷ஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹா-ிு-ூெ-ைொ-ௌௐௗ௦-௯௰-௲ఁ-ఃఅ-ఌఎ-ఐఒ-నప-హఽు-ౄౘ-ౙౠ-ౡ౦-౯౿ಂ-ಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽಾಿೀ-ೄೆೇ-ೈೊ-ೋೕ-ೖೞೠ-ೡ೦-೯ೱ-ೲം-ഃഅ-ഌഎ-ഐഒ-ഺഽാ-ീെ-ൈൊ-ൌൎൗൠ-ൡ൦-൯൰-൵൹ൺ-ൿං-ඃඅ-ඖක-නඳ-රලව-ෆා-ෑෘ-ෟ෦-෯ෲ-ෳ෴ก-ะา-ำเ-ๅๆ๏๐-๙๚-๛ກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-ະາ-ຳຽເ-ໄໆ໐-໙ໜ-ໟༀ༁-༃༄-༒༓༔༕-༗༚-༟༠-༩༪-༳༴༶༸༾-༿ཀ-ཇཉ-ཬཿ྅ྈ-ྌ྾-࿅࿇-࿌࿎-࿏࿐-࿔࿕-࿘࿙-࿚က-ဪါ-ာေးျ-ြဿ၀-၉၊-၏ၐ-ၕၖ-ၗၚ-ၝၡၢ-ၤၥ-ၦၧ-ၭၮ-ၰၵ-ႁႃ-ႄႇ-ႌႎႏ႐-႙ႚ-ႜ႞-႟Ⴀ-ჅჇჍა-ჺ჻ჼჽ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፠-፨፩-፼ᎀ-ᎏᎠ-Ᏼᐁ-ᙬ᙭-᙮ᙯ-ᙿᚁ-ᚚᚠ-ᛪ᛫-᛭ᛮ-ᛰᛱ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱ᜵-᜶ᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳាើ-ៅះ-ៈ។-៖ៗ៘-៚ៜ០-៩᠐-᠙ᠠ-ᡂᡃᡄ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᤣ-ᤦᤩ-ᤫᤰ-ᤱᤳ-ᤸ᥆-᥏ᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧀᧁ-ᧇᧈ-ᧉ᧐-᧙᧚ᨀ-ᨖᨙ-ᨚ᨞-᨟ᨠ-ᩔᩕᩗᩡᩣ-ᩤᩭ-ᩲ᪀-᪉᪐-᪙᪠-᪦ᪧ᪨-᪭ᬄᬅ-ᬳᬵᬻᬽ-ᭁᭃ-᭄ᭅ-ᭋ᭐-᭙᭚-᭠᭡-᭪᭴-᭼ᮂᮃ-ᮠᮡᮦ-ᮧ᮪ᮮ-ᮯ᮰-᮹ᮺ-ᯥᯧᯪ-ᯬᯮ᯲-᯳᯼-᯿ᰀ-ᰣᰤ-ᰫᰴ-ᰵ᰻-᰿᱀-᱉ᱍ-ᱏ᱐-᱙ᱚ-ᱷᱸ-ᱽ᱾-᱿᳀-᳇᳓᳡ᳩ-ᳬᳮ-ᳱᳲ-ᳳᳵ-ᳶᴀ-ᴫᴬ-ᵪᵫ-ᵷᵸᵹ-ᶚᶛ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‎ⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℴℵ-ℸℹℼ-ℿⅅ-ⅉⅎ⅏Ⅰ-ↂↃ-ↄↅ-ↈ⌶-⍺⎕⒜-ⓩ⚬⠀-⣿Ⰰ-Ⱞⰰ-ⱞⱠ-ⱻⱼ-ⱽⱾ-ⳤⳫ-ⳮⳲ-ⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯ⵰ⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々〆〇〡-〩〮-〯〱-〵〸-〺〻〼ぁ-ゖゝ-ゞゟァ-ヺー-ヾヿㄅ-ㄭㄱ-ㆎ㆐-㆑㆒-㆕㆖-㆟ㆠ-ㆺㇰ-ㇿ㈀-㈜㈠-㈩㈪-㉇㉈-㉏㉠-㉻㉿㊀-㊉㊊-㊰㋀-㋋㋐-㋾㌀-㍶㍻-㏝㏠-㏾㐀-䶵一-鿌ꀀ-ꀔꀕꀖ-ꒌꓐ-ꓷꓸ-ꓽ꓾-꓿ꔀ-ꘋꘌꘐ-ꘟ꘠-꘩ꘪ-ꘫꙀ-ꙭꙮꚀ-ꚛꚜ-ꚝꚠ-ꛥꛦ-ꛯ꛲-꛷Ꜣ-ꝯꝰꝱ-ꞇ꞉-꞊Ꞌ-ꞎꞐ-ꞭꞰ-Ʇꟷꟸ-ꟹꟺꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꠣ-ꠤꠧ꠰-꠵꠶-꠷ꡀ-ꡳꢀ-ꢁꢂ-ꢳꢴ-ꣃ꣎-꣏꣐-꣙ꣲ-ꣷ꣸-꣺ꣻ꤀-꤉ꤊ-ꤥ꤮-꤯ꤰ-ꥆꥒ-꥓꥟ꥠ-ꥼꦃꦄ-ꦲꦴ-ꦵꦺ-ꦻꦽ-꧀꧁-꧍ꧏ꧐-꧙꧞-꧟ꧠ-ꧤꧦꧧ-ꧯ꧰-꧹ꧺ-ꧾꨀ-ꨨꨯ-ꨰꨳ-ꨴꩀ-ꩂꩄ-ꩋꩍ꩐-꩙꩜-꩟ꩠ-ꩯꩰꩱ-ꩶ꩷-꩹ꩺꩻꩽꩾ-ꪯꪱꪵ-ꪶꪹ-ꪽꫀꫂꫛ-ꫜꫝ꫞-꫟ꫠ-ꫪꫫꫮ-ꫯ꫰-꫱ꫲꫳ-ꫴꫵꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚ꭛ꭜ-ꭟꭤ-ꭥꯀ-ꯢꯣ-ꯤꯦ-ꯧꯩ-ꯪ꯫꯬꯰-꯹가-힣ힰ-ퟆퟋ-ퟻ-豈-舘並-龎ﬀ-ﬆﬓ-ﬗＡ-Ｚａ-ｚｦ-ｯｰｱ-ﾝﾞ-ﾟﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
    R: "֐־׀׃׆׈-׏א-ת׫-ׯװ-ײ׳-״׵-׿߀-߉ߊ-ߪߴ-ߵߺ߻-߿ࠀ-ࠕࠚࠤࠨ࠮-࠯࠰-࠾࠿ࡀ-ࡘ࡜-࡝࡞࡟-࢟‏יִײַ-ﬨשׁ-זּ﬷טּ-לּ﬽מּ﬿נּ-סּ﭂ףּ-פּ﭅צּ-ﭏ",
    AL: "؈؋؍؛؜؝؞-؟ؠ-ؿـف-ي٭ٮ-ٯٱ-ۓ۔ەۥ-ۦۮ-ۯۺ-ۼ۽-۾ۿ܀-܍܎܏ܐܒ-ܯ݋-݌ݍ-ޥޱ޲-޿ࢠ-ࢲࢳ-ࣣﭐ-ﮱ﮲-﯁﯂-﯒ﯓ-ﴽ﵀-﵏ﵐ-ﶏ﶐-﶑ﶒ-ﷇ﷈-﷏ﷰ-ﷻ﷼﷾-﷿ﹰ-ﹴ﹵ﹶ-ﻼ﻽-﻾",
  },
  fN = new RegExp("[" + Fo.L + Fo.R + Fo.AL + "]"),
  dN = new RegExp("[" + Fo.R + Fo.AL + "]");
function ox(e) {
  var t = fN.exec(e);
  return t == null ? null : t[0];
}
function ax(e) {
  var t = ox(e);
  return t == null ? zr.NEUTRAL : dN.exec(t) ? zr.RTL : zr.LTR;
}
function lx(e, t) {
  if (((t = t || zr.NEUTRAL), !e.length)) return t;
  var r = ax(e);
  return r === zr.NEUTRAL ? t : r;
}
function Bd(e, t) {
  return t || (t = zr.getGlobalDir()), zr.isStrong(t) || cN(!1), lx(e, t);
}
function pN(e, t) {
  return Bd(e, t) === zr.LTR;
}
function hN(e, t) {
  return Bd(e, t) === zr.RTL;
}
var mN = {
    firstStrongChar: ox,
    firstStrongCharDir: ax,
    resolveBlockDir: lx,
    getDirection: Bd,
    isDirectionLTR: pN,
    isDirectionRTL: hN,
  },
  Rd = mN;
function ym(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var vN = Rd,
  xm = Ls,
  gN = Ce,
  yN = (function () {
    function e(r) {
      ym(this, "_defaultDir", void 0),
        ym(this, "_lastDir", void 0),
        r ? xm.isStrong(r) || gN(!1) : (r = xm.getGlobalDir()),
        (this._defaultDir = r),
        this.reset();
    }
    var t = e.prototype;
    return (
      (t.reset = function () {
        this._lastDir = this._defaultDir;
      }),
      (t.getDirection = function (n) {
        return (
          (this._lastDir = vN.getDirection(n, this._lastDir)), this._lastDir
        );
      }),
      e
    );
  })(),
  xN = yN,
  wN = function (t) {
    if (t != null) return t;
    throw new Error("Got unexpected null or undefined");
  },
  jt = wN,
  _N = xN,
  sx = Se,
  SN = jt,
  EN = sx.OrderedMap,
  tl,
  kN = {
    getDirectionMap: function (t, r) {
      tl ? tl.reset() : (tl = new _N());
      var n = t.getBlockMap(),
        i = n.valueSeq().map(function (l) {
          return SN(tl).getDirection(l.getText());
        }),
        o = EN(n.keySeq().zip(i));
      return r != null && sx.is(r, o) ? r : o;
    },
  },
  CN = kN;
function wm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {},
      n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" &&
      (n = n.concat(
        Object.getOwnPropertySymbols(r).filter(function (i) {
          return Object.getOwnPropertyDescriptor(r, i).enumerable;
        })
      )),
      n.forEach(function (i) {
        ux(e, i, r[i]);
      });
  }
  return e;
}
function ux(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var Bs = _b,
  xo = Ld,
  rl = CN,
  Hu = Ts,
  wa = Se,
  cx = wa.OrderedSet,
  bN = wa.Record,
  Mn = wa.Stack,
  _m = wa.OrderedMap,
  NN = wa.List,
  ON = {
    allowUndo: !0,
    currentContent: null,
    decorator: null,
    directionMap: null,
    forceSelection: !1,
    inCompositionMode: !1,
    inlineStyleOverride: null,
    lastChangeType: null,
    nativelyRenderedContent: null,
    redoStack: Mn(),
    selection: null,
    treeMap: null,
    undoStack: Mn(),
  },
  Sm = bN(ON),
  fx = (function () {
    (t.createEmpty = function (n) {
      return this.createWithText("", n);
    }),
      (t.createWithText = function (n, i) {
        return t.createWithContent(xo.createFromText(n), i);
      }),
      (t.createWithContent = function (n, i) {
        if (n.getBlockMap().count() === 0) return t.createEmpty(i);
        var o = n.getBlockMap().first().getKey();
        return t.create({
          currentContent: n,
          undoStack: Mn(),
          redoStack: Mn(),
          decorator: i || null,
          selection: Hu.createEmpty(o),
        });
      }),
      (t.create = function (n) {
        var i = n.currentContent,
          o = n.decorator,
          l = wm({}, n, {
            treeMap: km(i, o),
            directionMap: rl.getDirectionMap(i),
          });
        return new t(new Sm(l));
      }),
      (t.fromJS = function (n) {
        return new t(
          new Sm(
            wm({}, n, {
              directionMap:
                n.directionMap != null ? _m(n.directionMap) : n.directionMap,
              inlineStyleOverride:
                n.inlineStyleOverride != null
                  ? cx(n.inlineStyleOverride)
                  : n.inlineStyleOverride,
              nativelyRenderedContent:
                n.nativelyRenderedContent != null
                  ? xo.fromJS(n.nativelyRenderedContent)
                  : n.nativelyRenderedContent,
              redoStack:
                n.redoStack != null
                  ? Mn(
                      n.redoStack.map(function (i) {
                        return xo.fromJS(i);
                      })
                    )
                  : n.redoStack,
              selection:
                n.selection != null ? new Hu(n.selection) : n.selection,
              treeMap:
                n.treeMap != null
                  ? _m(n.treeMap).map(function (i) {
                      return NN(i).map(function (o) {
                        return Bs.fromJS(o);
                      });
                    })
                  : n.treeMap,
              undoStack:
                n.undoStack != null
                  ? Mn(
                      n.undoStack.map(function (i) {
                        return xo.fromJS(i);
                      })
                    )
                  : n.undoStack,
              currentContent: xo.fromJS(n.currentContent),
            })
          )
        );
      }),
      (t.set = function (n, i) {
        var o = n.getImmutable().withMutations(function (l) {
          var s = l.get("decorator"),
            c = s;
          i.decorator === null ? (c = null) : i.decorator && (c = i.decorator);
          var f = i.currentContent || n.getCurrentContent();
          if (c !== s) {
            var h = l.get("treeMap"),
              g;
            c && s ? (g = DN(f, f.getBlockMap(), h, c, s)) : (g = km(f, c)),
              l.merge({
                decorator: c,
                treeMap: g,
                nativelyRenderedContent: null,
              });
            return;
          }
          var p = n.getCurrentContent();
          f !== p &&
            l.set("treeMap", TN(n, f.getBlockMap(), f.getEntityMap(), c)),
            l.merge(i);
        });
        return new t(o);
      });
    var e = t.prototype;
    (e.toJS = function () {
      return this.getImmutable().toJS();
    }),
      (e.getAllowUndo = function () {
        return this.getImmutable().get("allowUndo");
      }),
      (e.getCurrentContent = function () {
        return this.getImmutable().get("currentContent");
      }),
      (e.getUndoStack = function () {
        return this.getImmutable().get("undoStack");
      }),
      (e.getRedoStack = function () {
        return this.getImmutable().get("redoStack");
      }),
      (e.getSelection = function () {
        return this.getImmutable().get("selection");
      }),
      (e.getDecorator = function () {
        return this.getImmutable().get("decorator");
      }),
      (e.isInCompositionMode = function () {
        return this.getImmutable().get("inCompositionMode");
      }),
      (e.mustForceSelection = function () {
        return this.getImmutable().get("forceSelection");
      }),
      (e.getNativelyRenderedContent = function () {
        return this.getImmutable().get("nativelyRenderedContent");
      }),
      (e.getLastChangeType = function () {
        return this.getImmutable().get("lastChangeType");
      }),
      (e.getInlineStyleOverride = function () {
        return this.getImmutable().get("inlineStyleOverride");
      }),
      (t.setInlineStyleOverride = function (n, i) {
        return t.set(n, { inlineStyleOverride: i });
      }),
      (e.getCurrentInlineStyle = function () {
        var n = this.getInlineStyleOverride();
        if (n != null) return n;
        var i = this.getCurrentContent(),
          o = this.getSelection();
        return o.isCollapsed() ? BN(i, o) : RN(i, o);
      }),
      (e.getBlockTree = function (n) {
        return this.getImmutable().getIn(["treeMap", n]);
      }),
      (e.isSelectionAtStartOfContent = function () {
        var n = this.getCurrentContent().getBlockMap().first().getKey();
        return this.getSelection().hasEdgeWithin(n, 0, 0);
      }),
      (e.isSelectionAtEndOfContent = function () {
        var n = this.getCurrentContent(),
          i = n.getBlockMap(),
          o = i.last(),
          l = o.getLength();
        return this.getSelection().hasEdgeWithin(o.getKey(), l, l);
      }),
      (e.getDirectionMap = function () {
        return this.getImmutable().get("directionMap");
      }),
      (t.acceptSelection = function (n, i) {
        return Em(n, i, !1);
      }),
      (t.forceSelection = function (n, i) {
        return i.getHasFocus() || (i = i.set("hasFocus", !0)), Em(n, i, !0);
      }),
      (t.moveSelectionToEnd = function (n) {
        var i = n.getCurrentContent(),
          o = i.getLastBlock(),
          l = o.getKey(),
          s = o.getLength();
        return t.acceptSelection(
          n,
          new Hu({
            anchorKey: l,
            anchorOffset: s,
            focusKey: l,
            focusOffset: s,
            isBackward: !1,
          })
        );
      }),
      (t.moveFocusToEnd = function (n) {
        var i = t.moveSelectionToEnd(n);
        return t.forceSelection(i, i.getSelection());
      }),
      (t.push = function (n, i, o) {
        var l =
          arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0;
        if (n.getCurrentContent() === i) return n;
        var s = rl.getDirectionMap(i, n.getDirectionMap());
        if (!n.getAllowUndo())
          return t.set(n, {
            currentContent: i,
            directionMap: s,
            lastChangeType: o,
            selection: i.getSelectionAfter(),
            forceSelection: l,
            inlineStyleOverride: null,
          });
        var c = n.getSelection(),
          f = n.getCurrentContent(),
          h = n.getUndoStack(),
          g = i;
        c !== f.getSelectionAfter() || LN(n, o)
          ? ((h = h.push(f)), (g = g.set("selectionBefore", c)))
          : (o === "insert-characters" ||
              o === "backspace-character" ||
              o === "delete-character") &&
            (g = g.set("selectionBefore", f.getSelectionBefore()));
        var p = n.getInlineStyleOverride(),
          x = ["adjust-depth", "change-block-type", "split-block"];
        x.indexOf(o) === -1 && (p = null);
        var w = {
          currentContent: g,
          directionMap: s,
          undoStack: h,
          redoStack: Mn(),
          lastChangeType: o,
          selection: i.getSelectionAfter(),
          forceSelection: l,
          inlineStyleOverride: p,
        };
        return t.set(n, w);
      }),
      (t.undo = function (n) {
        if (!n.getAllowUndo()) return n;
        var i = n.getUndoStack(),
          o = i.peek();
        if (!o) return n;
        var l = n.getCurrentContent(),
          s = rl.getDirectionMap(o, n.getDirectionMap());
        return t.set(n, {
          currentContent: o,
          directionMap: s,
          undoStack: i.shift(),
          redoStack: n.getRedoStack().push(l),
          forceSelection: !0,
          inlineStyleOverride: null,
          lastChangeType: "undo",
          nativelyRenderedContent: null,
          selection: l.getSelectionBefore(),
        });
      }),
      (t.redo = function (n) {
        if (!n.getAllowUndo()) return n;
        var i = n.getRedoStack(),
          o = i.peek();
        if (!o) return n;
        var l = n.getCurrentContent(),
          s = rl.getDirectionMap(o, n.getDirectionMap());
        return t.set(n, {
          currentContent: o,
          directionMap: s,
          undoStack: n.getUndoStack().push(l),
          redoStack: i.shift(),
          forceSelection: !0,
          inlineStyleOverride: null,
          lastChangeType: "redo",
          nativelyRenderedContent: null,
          selection: o.getSelectionAfter(),
        });
      });
    function t(r) {
      ux(this, "_immutable", void 0), (this._immutable = r);
    }
    return (
      (e.getImmutable = function () {
        return this._immutable;
      }),
      t
    );
  })();
function Em(e, t, r) {
  return fx.set(e, {
    selection: t,
    forceSelection: r,
    nativelyRenderedContent: null,
    inlineStyleOverride: null,
  });
}
function km(e, t) {
  return e
    .getBlockMap()
    .map(function (r) {
      return Bs.generate(e, r, t);
    })
    .toOrderedMap();
}
function TN(e, t, r, n) {
  var i = e.getCurrentContent().set("entityMap", r),
    o = i.getBlockMap(),
    l = e.getImmutable().get("treeMap");
  return l.merge(
    t
      .toSeq()
      .filter(function (s, c) {
        return s !== o.get(c);
      })
      .map(function (s) {
        return Bs.generate(i, s, n);
      })
  );
}
function DN(e, t, r, n, i) {
  return r.merge(
    t
      .toSeq()
      .filter(function (o) {
        return n.getDecorations(o, e) !== i.getDecorations(o, e);
      })
      .map(function (o) {
        return Bs.generate(e, o, n);
      })
  );
}
function LN(e, t) {
  var r = e.getLastChangeType();
  return (
    t !== r ||
    (t !== "insert-characters" &&
      t !== "backspace-character" &&
      t !== "delete-character")
  );
}
function BN(e, t) {
  var r = t.getStartKey(),
    n = t.getStartOffset(),
    i = e.getBlockForKey(r);
  return n > 0
    ? i.getInlineStyleAt(n - 1)
    : i.getLength()
    ? i.getInlineStyleAt(0)
    : dx(e, r);
}
function RN(e, t) {
  var r = t.getStartKey(),
    n = t.getStartOffset(),
    i = e.getBlockForKey(r);
  return n < i.getLength()
    ? i.getInlineStyleAt(n)
    : n > 0
    ? i.getInlineStyleAt(n - 1)
    : dx(e, r);
}
function dx(e, t) {
  var r = e
    .getBlockMap()
    .reverse()
    .skipUntil(function (n, i) {
      return i === t;
    })
    .skip(1)
    .skipUntil(function (n, i) {
      return n.getLength();
    })
    .first();
  return r ? r.getInlineStyleAt(r.getLength() - 1) : cx();
}
var Me = fx,
  MN = ar,
  IN = q0,
  px = Se,
  nl = Ce,
  jN = px.OrderedMap,
  AN = px.List,
  On = function (t, r, n) {
    if (t) {
      var i = r.get(t);
      i && r.set(t, n(i));
    }
  },
  PN = function (t, r, n, i, o) {
    if (!o) return t;
    var l = i === "after",
      s = r.getKey(),
      c = n.getKey(),
      f = r.getParentKey(),
      h = r.getNextSiblingKey(),
      g = r.getPrevSiblingKey(),
      p = n.getParentKey(),
      x = l ? n.getNextSiblingKey() : c,
      w = l ? c : n.getPrevSiblingKey();
    return t.withMutations(function (k) {
      On(f, k, function (b) {
        var S = b.getChildKeys();
        return b.merge({ children: S.delete(S.indexOf(s)) });
      }),
        On(g, k, function (b) {
          return b.merge({ nextSibling: h });
        }),
        On(h, k, function (b) {
          return b.merge({ prevSibling: g });
        }),
        On(x, k, function (b) {
          return b.merge({ prevSibling: s });
        }),
        On(w, k, function (b) {
          return b.merge({ nextSibling: s });
        }),
        On(p, k, function (b) {
          var S = b.getChildKeys(),
            _ = S.indexOf(c),
            E = l ? _ + 1 : _ !== 0 ? _ - 1 : 0,
            N = S.toArray();
          return N.splice(E, 0, s), b.merge({ children: AN(N) });
        }),
        On(s, k, function (b) {
          return b.merge({ nextSibling: x, prevSibling: w, parent: p });
        });
    });
  },
  FN = function (t, r, n, i) {
    i === "replace" && nl(!1);
    var o = n.getKey(),
      l = r.getKey();
    l === o && nl(!1);
    var s = t.getBlockMap(),
      c = r instanceof MN,
      f = [r],
      h = s.delete(l);
    c &&
      ((f = []),
      (h = s.withMutations(function (S) {
        var _ = r.getNextSiblingKey(),
          E = IN(r, S);
        S.toSeq()
          .skipUntil(function (N) {
            return N.getKey() === l;
          })
          .takeWhile(function (N) {
            var L = N.getKey(),
              A = L === l,
              K = _ && L !== _,
              F = !_ && N.getParentKey() && (!E || L !== E);
            return !!(A || K || F);
          })
          .forEach(function (N) {
            f.push(N), S.delete(N.getKey());
          });
      })));
    var g = h.toSeq().takeUntil(function (S) {
        return S === n;
      }),
      p = h
        .toSeq()
        .skipUntil(function (S) {
          return S === n;
        })
        .skip(1),
      x = f.map(function (S) {
        return [S.getKey(), S];
      }),
      w = jN();
    if (i === "before") {
      var k = t.getBlockBefore(o);
      !k || k.getKey() !== r.getKey() || nl(!1),
        (w = g.concat([].concat(x, [[o, n]]), p).toOrderedMap());
    } else if (i === "after") {
      var b = t.getBlockAfter(o);
      !b || b.getKey() !== l || nl(!1),
        (w = g.concat([[o, n]].concat(x), p).toOrderedMap());
    }
    return t.merge({
      blockMap: PN(w, r, n, i, c),
      selectionBefore: t.getSelectionAfter(),
      selectionAfter: t
        .getSelectionAfter()
        .merge({ anchorKey: l, focusKey: l }),
    });
  },
  $N = FN;
function Cm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {},
      n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" &&
      (n = n.concat(
        Object.getOwnPropertySymbols(r).filter(function (i) {
          return Object.getOwnPropertyDescriptor(r, i).enumerable;
        })
      )),
      n.forEach(function (i) {
        KN(e, i, r[i]);
      });
  }
  return e;
}
function KN(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var zN = ma,
  UN = or,
  HN = Yn,
  WN = ar,
  vi = It,
  bm = Me,
  Nm = Dr,
  qN = bn,
  hx = Se,
  il = $N,
  mx = qN("draft_tree_data_support"),
  Om = mx ? WN : HN,
  VN = hx.List,
  GN = hx.Repeat,
  JN = {
    insertAtomicBlock: function (t, r, n) {
      var i = t.getCurrentContent(),
        o = t.getSelection(),
        l = vi.removeRange(i, o, "backward"),
        s = l.getSelectionAfter(),
        c = vi.splitBlock(l, s),
        f = c.getSelectionAfter(),
        h = vi.setBlockType(c, f, "atomic"),
        g = UN.create({ entity: r }),
        p = {
          key: Nm(),
          type: "atomic",
          text: n,
          characterList: VN(GN(g, n.length)),
        },
        x = { key: Nm(), type: "unstyled" };
      mx &&
        ((p = Cm({}, p, { nextSibling: x.key })),
        (x = Cm({}, x, { prevSibling: p.key })));
      var w = [new Om(p), new Om(x)],
        k = zN.createFromArray(w),
        b = vi.replaceWithFragment(h, f, k),
        S = b.merge({
          selectionBefore: o,
          selectionAfter: b.getSelectionAfter().set("hasFocus", !0),
        });
      return bm.push(t, S, "insert-fragment");
    },
    moveAtomicBlock: function (t, r, n, i) {
      var o = t.getCurrentContent(),
        l = t.getSelection(),
        s;
      if (i === "before" || i === "after") {
        var c = o.getBlockForKey(
          i === "before" ? n.getStartKey() : n.getEndKey()
        );
        s = il(o, r, c, i);
      } else {
        var f = vi.removeRange(o, n, "backward"),
          h = f.getSelectionAfter(),
          g = f.getBlockForKey(h.getFocusKey());
        if (h.getStartOffset() === 0) s = il(f, r, g, "before");
        else if (h.getEndOffset() === g.getLength()) s = il(f, r, g, "after");
        else {
          var p = vi.splitBlock(f, h),
            x = p.getSelectionAfter(),
            w = p.getBlockForKey(x.getFocusKey());
          s = il(p, r, w, "before");
        }
      }
      var k = s.merge({
        selectionBefore: l,
        selectionAfter: s.getSelectionAfter().set("hasFocus", !0),
      });
      return bm.push(t, k, "move-block");
    },
  },
  YN = JN;
function QN(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var XN = Se,
  ZN = XN.List,
  Wu = ".",
  eO = (function () {
    function e(r) {
      QN(this, "_decorators", void 0), (this._decorators = r.slice());
    }
    var t = e.prototype;
    return (
      (t.getDecorations = function (n, i) {
        var o = Array(n.getText().length).fill(null);
        return (
          this._decorators.forEach(function (l, s) {
            var c = 0,
              f = l.strategy,
              h = function (p, x) {
                tO(o, p, x) && (rO(o, p, x, s + Wu + c), c++);
              };
            f(n, h, i);
          }),
          ZN(o)
        );
      }),
      (t.getComponentForKey = function (n) {
        var i = parseInt(n.split(Wu)[0], 10);
        return this._decorators[i].component;
      }),
      (t.getPropsForKey = function (n) {
        var i = parseInt(n.split(Wu)[0], 10);
        return this._decorators[i].props;
      }),
      e
    );
  })();
function tO(e, t, r) {
  for (var n = t; n < r; n++) if (e[n] != null) return !1;
  return !0;
}
function rO(e, t, r, n) {
  for (var i = t; i < r; i++) e[i] = n;
}
var nO = eO;
function iO(e) {
  return typeof e == "object"
    ? Object.keys(e)
        .filter(function (t) {
          return e[t];
        })
        .map(Tm)
        .join(" ")
    : Array.prototype.map.call(arguments, Tm).join(" ");
}
function Tm(e) {
  return e.replace(/\//g, "-");
}
var Qn = iO,
  Md = U,
  Id = Qn,
  oO = Se,
  aO = oO.Map,
  lO = Md.createElement("ul", { className: Id("public/DraftStyleDefault/ul") }),
  sO = Md.createElement("ol", { className: Id("public/DraftStyleDefault/ol") }),
  uO = Md.createElement("pre", {
    className: Id("public/DraftStyleDefault/pre"),
  }),
  cO = aO({
    "header-one": { element: "h1" },
    "header-two": { element: "h2" },
    "header-three": { element: "h3" },
    "header-four": { element: "h4" },
    "header-five": { element: "h5" },
    "header-six": { element: "h6" },
    section: { element: "section" },
    article: { element: "article" },
    "unordered-list-item": { element: "li", wrapper: lO },
    "ordered-list-item": { element: "li", wrapper: sO },
    blockquote: { element: "blockquote" },
    atomic: { element: "figure" },
    "code-block": { element: "pre", wrapper: uO },
    unstyled: { element: "div", aliasedElements: ["p"] },
  }),
  jd = cO,
  vx = {
    BOLD: { fontWeight: "bold" },
    CODE: { fontFamily: "monospace", wordWrap: "break-word" },
    ITALIC: { fontStyle: "italic" },
    STRIKETHROUGH: { textDecoration: "line-through" },
    UNDERLINE: { textDecoration: "underline" },
  };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var Dm = Object.getOwnPropertySymbols,
  fO = Object.prototype.hasOwnProperty,
  dO = Object.prototype.propertyIsEnumerable;
function pO(e) {
  if (e == null)
    throw new TypeError(
      "Object.assign cannot be called with null or undefined"
    );
  return Object(e);
}
function hO() {
  try {
    if (!Object.assign) return !1;
    var e = new String("abc");
    if (((e[5] = "de"), Object.getOwnPropertyNames(e)[0] === "5")) return !1;
    for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
    var n = Object.getOwnPropertyNames(t).map(function (o) {
      return t[o];
    });
    if (n.join("") !== "0123456789") return !1;
    var i = {};
    return (
      "abcdefghijklmnopqrst".split("").forEach(function (o) {
        i[o] = o;
      }),
      Object.keys(Object.assign({}, i)).join("") === "abcdefghijklmnopqrst"
    );
  } catch {
    return !1;
  }
}
var Xn = hO()
    ? Object.assign
    : function (e, t) {
        for (var r, n = pO(e), i, o = 1; o < arguments.length; o++) {
          r = Object(arguments[o]);
          for (var l in r) fO.call(r, l) && (n[l] = r[l]);
          if (Dm) {
            i = Dm(r);
            for (var s = 0; s < i.length; s++)
              dO.call(r, i[s]) && (n[i[s]] = r[i[s]]);
          }
        }
        return n;
      },
  xf = { exports: {} };
(function (e, t) {
  (function (r, n) {
    var i = "0.7.38",
      o = "",
      l = "?",
      s = "function",
      c = "undefined",
      f = "object",
      h = "string",
      g = "major",
      p = "model",
      x = "name",
      w = "type",
      k = "vendor",
      b = "version",
      S = "architecture",
      _ = "console",
      E = "mobile",
      N = "tablet",
      L = "smarttv",
      A = "wearable",
      K = "embedded",
      F = 500,
      H = "Amazon",
      P = "Apple",
      M = "ASUS",
      D = "BlackBerry",
      j = "Browser",
      I = "Chrome",
      G = "Edge",
      Z = "Firefox",
      ee = "Google",
      z = "Huawei",
      q = "LG",
      V = "Microsoft",
      Y = "Motorola",
      ae = "Opera",
      Ee = "Samsung",
      ve = "Sharp",
      te = "Sony",
      ne = "Xiaomi",
      ue = "Zebra",
      be = "Facebook",
      Oe = "Chromium OS",
      ze = "Mac OS",
      et = function (pe, ge) {
        var ce = {};
        for (var ke in pe)
          ge[ke] && ge[ke].length % 2 === 0
            ? (ce[ke] = ge[ke].concat(pe[ke]))
            : (ce[ke] = pe[ke]);
        return ce;
      },
      Le = function (pe) {
        for (var ge = {}, ce = 0; ce < pe.length; ce++)
          ge[pe[ce].toUpperCase()] = pe[ce];
        return ge;
      },
      le = function (pe, ge) {
        return typeof pe === h ? oe(ge).indexOf(oe(pe)) !== -1 : !1;
      },
      oe = function (pe) {
        return pe.toLowerCase();
      },
      fe = function (pe) {
        return typeof pe === h ? pe.replace(/[^\d\.]/g, o).split(".")[0] : n;
      },
      Te = function (pe, ge) {
        if (typeof pe === h)
          return (
            (pe = pe.replace(/^\s\s*/, o)),
            typeof ge === c ? pe : pe.substring(0, F)
          );
      },
      xt = function (pe, ge) {
        for (var ce = 0, ke, Jt, Pt, xe, se, Ot; ce < ge.length && !se; ) {
          var ri = ge[ce],
            Pe = ge[ce + 1];
          for (ke = Jt = 0; ke < ri.length && !se && ri[ke]; )
            if (((se = ri[ke++].exec(pe)), se))
              for (Pt = 0; Pt < Pe.length; Pt++)
                (Ot = se[++Jt]),
                  (xe = Pe[Pt]),
                  typeof xe === f && xe.length > 0
                    ? xe.length === 2
                      ? typeof xe[1] == s
                        ? (this[xe[0]] = xe[1].call(this, Ot))
                        : (this[xe[0]] = xe[1])
                      : xe.length === 3
                      ? typeof xe[1] === s && !(xe[1].exec && xe[1].test)
                        ? (this[xe[0]] = Ot ? xe[1].call(this, Ot, xe[2]) : n)
                        : (this[xe[0]] = Ot ? Ot.replace(xe[1], xe[2]) : n)
                      : xe.length === 4 &&
                        (this[xe[0]] = Ot
                          ? xe[3].call(this, Ot.replace(xe[1], xe[2]))
                          : n)
                    : (this[xe] = Ot || n);
          ce += 2;
        }
      },
      Ue = function (pe, ge) {
        for (var ce in ge)
          if (typeof ge[ce] === f && ge[ce].length > 0) {
            for (var ke = 0; ke < ge[ce].length; ke++)
              if (le(ge[ce][ke], pe)) return ce === l ? n : ce;
          } else if (le(ge[ce], pe)) return ce === l ? n : ce;
        return pe;
      },
      ft = {
        "1.0": "/8",
        1.2: "/1",
        1.3: "/3",
        "2.0": "/412",
        "2.0.2": "/416",
        "2.0.3": "/417",
        "2.0.4": "/419",
        "?": "/",
      },
      wt = {
        ME: "4.90",
        "NT 3.11": "NT3.51",
        "NT 4.0": "NT4.0",
        2e3: "NT 5.0",
        XP: ["NT 5.1", "NT 5.2"],
        Vista: "NT 6.0",
        7: "NT 6.1",
        8: "NT 6.2",
        8.1: "NT 6.3",
        10: ["NT 6.4", "NT 10.0"],
        RT: "ARM",
      },
      Ve = {
        browser: [
          [/\b(?:crmo|crios)\/([\w\.]+)/i],
          [b, [x, "Chrome"]],
          [/edg(?:e|ios|a)?\/([\w\.]+)/i],
          [b, [x, "Edge"]],
          [
            /(opera mini)\/([-\w\.]+)/i,
            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
          ],
          [x, b],
          [/opios[\/ ]+([\w\.]+)/i],
          [b, [x, ae + " Mini"]],
          [/\bop(?:rg)?x\/([\w\.]+)/i],
          [b, [x, ae + " GX"]],
          [/\bopr\/([\w\.]+)/i],
          [b, [x, ae]],
          [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
          [b, [x, "Baidu"]],
          [
            /(kindle)\/([\w\.]+)/i,
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
            /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,
            /(?:ms|\()(ie) ([\w\.]+)/i,
            /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
            /(heytap|ovi)browser\/([\d\.]+)/i,
            /(weibo)__([\d\.]+)/i,
          ],
          [x, b],
          [/\bddg\/([\w\.]+)/i],
          [b, [x, "DuckDuckGo"]],
          [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
          [b, [x, "UC" + j]],
          [
            /microm.+\bqbcore\/([\w\.]+)/i,
            /\bqbcore\/([\w\.]+).+microm/i,
            /micromessenger\/([\w\.]+)/i,
          ],
          [b, [x, "WeChat"]],
          [/konqueror\/([\w\.]+)/i],
          [b, [x, "Konqueror"]],
          [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
          [b, [x, "IE"]],
          [/ya(?:search)?browser\/([\w\.]+)/i],
          [b, [x, "Yandex"]],
          [/slbrowser\/([\w\.]+)/i],
          [b, [x, "Smart Lenovo " + j]],
          [/(avast|avg)\/([\w\.]+)/i],
          [[x, /(.+)/, "$1 Secure " + j], b],
          [/\bfocus\/([\w\.]+)/i],
          [b, [x, Z + " Focus"]],
          [/\bopt\/([\w\.]+)/i],
          [b, [x, ae + " Touch"]],
          [/coc_coc\w+\/([\w\.]+)/i],
          [b, [x, "Coc Coc"]],
          [/dolfin\/([\w\.]+)/i],
          [b, [x, "Dolphin"]],
          [/coast\/([\w\.]+)/i],
          [b, [x, ae + " Coast"]],
          [/miuibrowser\/([\w\.]+)/i],
          [b, [x, "MIUI " + j]],
          [/fxios\/([-\w\.]+)/i],
          [b, [x, Z]],
          [/\bqihu|(qi?ho?o?|360)browser/i],
          [[x, "360 " + j]],
          [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],
          [[x, /(.+)/, "$1 " + j], b],
          [/samsungbrowser\/([\w\.]+)/i],
          [b, [x, Ee + " Internet"]],
          [/(comodo_dragon)\/([\w\.]+)/i],
          [[x, /_/g, " "], b],
          [/metasr[\/ ]?([\d\.]+)/i],
          [b, [x, "Sogou Explorer"]],
          [/(sogou)mo\w+\/([\d\.]+)/i],
          [[x, "Sogou Mobile"], b],
          [
            /(electron)\/([\w\.]+) safari/i,
            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
            /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i,
          ],
          [x, b],
          [/(lbbrowser)/i, /\[(linkedin)app\]/i],
          [x],
          [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
          [[x, be], b],
          [
            /(Klarna)\/([\w\.]+)/i,
            /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
            /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
            /safari (line)\/([\w\.]+)/i,
            /\b(line)\/([\w\.]+)\/iab/i,
            /(alipay)client\/([\w\.]+)/i,
            /(twitter)(?:and| f.+e\/([\w\.]+))/i,
            /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i,
          ],
          [x, b],
          [/\bgsa\/([\w\.]+) .*safari\//i],
          [b, [x, "GSA"]],
          [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
          [b, [x, "TikTok"]],
          [/headlesschrome(?:\/([\w\.]+)| )/i],
          [b, [x, I + " Headless"]],
          [/ wv\).+(chrome)\/([\w\.]+)/i],
          [[x, I + " WebView"], b],
          [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
          [b, [x, "Android " + j]],
          [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
          [x, b],
          [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
          [b, [x, "Mobile Safari"]],
          [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
          [b, x],
          [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
          [x, [b, Ue, ft]],
          [/(webkit|khtml)\/([\w\.]+)/i],
          [x, b],
          [/(navigator|netscape\d?)\/([-\w\.]+)/i],
          [[x, "Netscape"], b],
          [/mobile vr; rv:([\w\.]+)\).+firefox/i],
          [b, [x, Z + " Reality"]],
          [
            /ekiohf.+(flow)\/([\w\.]+)/i,
            /(swiftfox)/i,
            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
            /(firefox)\/([\w\.]+)/i,
            /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
            /(links) \(([\w\.]+)/i,
            /panasonic;(viera)/i,
          ],
          [x, b],
          [/(cobalt)\/([\w\.]+)/i],
          [x, [b, /master.|lts./, ""]],
        ],
        cpu: [
          [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
          [[S, "amd64"]],
          [/(ia32(?=;))/i],
          [[S, oe]],
          [/((?:i[346]|x)86)[;\)]/i],
          [[S, "ia32"]],
          [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
          [[S, "arm64"]],
          [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
          [[S, "armhf"]],
          [/windows (ce|mobile); ppc;/i],
          [[S, "arm"]],
          [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
          [[S, /ower/, o, oe]],
          [/(sun4\w)[;\)]/i],
          [[S, "sparc"]],
          [
            /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
          ],
          [[S, oe]],
        ],
        device: [
          [
            /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
          ],
          [p, [k, Ee], [w, N]],
          [
            /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
            /samsung[- ]([-\w]+)/i,
            /sec-(sgh\w+)/i,
          ],
          [p, [k, Ee], [w, E]],
          [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
          [p, [k, P], [w, E]],
          [
            /\((ipad);[-\w\),; ]+apple/i,
            /applecoremedia\/[\w\.]+ \((ipad)/i,
            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
          ],
          [p, [k, P], [w, N]],
          [/(macintosh);/i],
          [p, [k, P]],
          [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
          [p, [k, ve], [w, E]],
          [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
          [p, [k, z], [w, N]],
          [
            /(?:huawei|honor)([-\w ]+)[;\)]/i,
            /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
          ],
          [p, [k, z], [w, E]],
          [
            /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
            /\b; (\w+) build\/hm\1/i,
            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
            /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
            /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
          ],
          [
            [p, /_/g, " "],
            [k, ne],
            [w, E],
          ],
          [
            /oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,
            /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i,
          ],
          [
            [p, /_/g, " "],
            [k, ne],
            [w, N],
          ],
          [
            /; (\w+) bui.+ oppo/i,
            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
          ],
          [p, [k, "OPPO"], [w, E]],
          [/\b(opd2\d{3}a?) bui/i],
          [p, [k, "OPPO"], [w, N]],
          [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
          [p, [k, "Vivo"], [w, E]],
          [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
          [p, [k, "Realme"], [w, E]],
          [
            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
            /\bmot(?:orola)?[- ](\w*)/i,
            /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
          ],
          [p, [k, Y], [w, E]],
          [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
          [p, [k, Y], [w, N]],
          [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
          [p, [k, q], [w, N]],
          [
            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
            /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
            /\blg-?([\d\w]+) bui/i,
          ],
          [p, [k, q], [w, E]],
          [
            /(ideatab[-\w ]+)/i,
            /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
          ],
          [p, [k, "Lenovo"], [w, N]],
          [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
          [
            [p, /_/g, " "],
            [k, "Nokia"],
            [w, E],
          ],
          [/(pixel c)\b/i],
          [p, [k, ee], [w, N]],
          [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
          [p, [k, ee], [w, E]],
          [
            /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
          ],
          [p, [k, te], [w, E]],
          [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
          [
            [p, "Xperia Tablet"],
            [k, te],
            [w, N],
          ],
          [
            / (kb2005|in20[12]5|be20[12][59])\b/i,
            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
          ],
          [p, [k, "OnePlus"], [w, E]],
          [
            /(alexa)webm/i,
            /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
            /(kf[a-z]+)( bui|\)).+silk\//i,
          ],
          [p, [k, H], [w, N]],
          [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
          [
            [p, /(.+)/g, "Fire Phone $1"],
            [k, H],
            [w, E],
          ],
          [/(playbook);[-\w\),; ]+(rim)/i],
          [p, k, [w, N]],
          [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
          [p, [k, D], [w, E]],
          [
            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
          ],
          [p, [k, M], [w, N]],
          [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
          [p, [k, M], [w, E]],
          [/(nexus 9)/i],
          [p, [k, "HTC"], [w, N]],
          [
            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
            /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
          ],
          [k, [p, /_/g, " "], [w, E]],
          [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
          [p, [k, "Acer"], [w, N]],
          [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
          [p, [k, "Meizu"], [w, E]],
          [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
          [p, [k, "Ulefone"], [w, E]],
          [
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,
            /(hp) ([\w ]+\w)/i,
            /(asus)-?(\w+)/i,
            /(microsoft); (lumia[\w ]+)/i,
            /(lenovo)[-_ ]?([-\w]+)/i,
            /(jolla)/i,
            /(oppo) ?([\w ]+) bui/i,
          ],
          [k, p, [w, E]],
          [
            /(kobo)\s(ereader|touch)/i,
            /(archos) (gamepad2?)/i,
            /(hp).+(touchpad(?!.+tablet)|tablet)/i,
            /(kindle)\/([\w\.]+)/i,
            /(nook)[\w ]+build\/(\w+)/i,
            /(dell) (strea[kpr\d ]*[\dko])/i,
            /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
            /(trinity)[- ]*(t\d{3}) bui/i,
            /(gigaset)[- ]+(q\w{1,9}) bui/i,
            /(vodafone) ([\w ]+)(?:\)| bui)/i,
          ],
          [k, p, [w, N]],
          [/(surface duo)/i],
          [p, [k, V], [w, N]],
          [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
          [p, [k, "Fairphone"], [w, E]],
          [/(u304aa)/i],
          [p, [k, "AT&T"], [w, E]],
          [/\bsie-(\w*)/i],
          [p, [k, "Siemens"], [w, E]],
          [/\b(rct\w+) b/i],
          [p, [k, "RCA"], [w, N]],
          [/\b(venue[\d ]{2,7}) b/i],
          [p, [k, "Dell"], [w, N]],
          [/\b(q(?:mv|ta)\w+) b/i],
          [p, [k, "Verizon"], [w, N]],
          [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
          [p, [k, "Barnes & Noble"], [w, N]],
          [/\b(tm\d{3}\w+) b/i],
          [p, [k, "NuVision"], [w, N]],
          [/\b(k88) b/i],
          [p, [k, "ZTE"], [w, N]],
          [/\b(nx\d{3}j) b/i],
          [p, [k, "ZTE"], [w, E]],
          [/\b(gen\d{3}) b.+49h/i],
          [p, [k, "Swiss"], [w, E]],
          [/\b(zur\d{3}) b/i],
          [p, [k, "Swiss"], [w, N]],
          [/\b((zeki)?tb.*\b) b/i],
          [p, [k, "Zeki"], [w, N]],
          [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
          [[k, "Dragon Touch"], p, [w, N]],
          [/\b(ns-?\w{0,9}) b/i],
          [p, [k, "Insignia"], [w, N]],
          [/\b((nxa|next)-?\w{0,9}) b/i],
          [p, [k, "NextBook"], [w, N]],
          [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
          [[k, "Voice"], p, [w, E]],
          [/\b(lvtel\-)?(v1[12]) b/i],
          [[k, "LvTel"], p, [w, E]],
          [/\b(ph-1) /i],
          [p, [k, "Essential"], [w, E]],
          [/\b(v(100md|700na|7011|917g).*\b) b/i],
          [p, [k, "Envizen"], [w, N]],
          [/\b(trio[-\w\. ]+) b/i],
          [p, [k, "MachSpeed"], [w, N]],
          [/\btu_(1491) b/i],
          [p, [k, "Rotor"], [w, N]],
          [/(shield[\w ]+) b/i],
          [p, [k, "Nvidia"], [w, N]],
          [/(sprint) (\w+)/i],
          [k, p, [w, E]],
          [/(kin\.[onetw]{3})/i],
          [
            [p, /\./g, " "],
            [k, V],
            [w, E],
          ],
          [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
          [p, [k, ue], [w, N]],
          [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
          [p, [k, ue], [w, E]],
          [/smart-tv.+(samsung)/i],
          [k, [w, L]],
          [/hbbtv.+maple;(\d+)/i],
          [
            [p, /^/, "SmartTV"],
            [k, Ee],
            [w, L],
          ],
          [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
          [
            [k, q],
            [w, L],
          ],
          [/(apple) ?tv/i],
          [k, [p, P + " TV"], [w, L]],
          [/crkey/i],
          [
            [p, I + "cast"],
            [k, ee],
            [w, L],
          ],
          [/droid.+aft(\w+)( bui|\))/i],
          [p, [k, H], [w, L]],
          [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
          [p, [k, ve], [w, L]],
          [/(bravia[\w ]+)( bui|\))/i],
          [p, [k, te], [w, L]],
          [/(mitv-\w{5}) bui/i],
          [p, [k, ne], [w, L]],
          [/Hbbtv.*(technisat) (.*);/i],
          [k, p, [w, L]],
          [
            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
            /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
          ],
          [
            [k, Te],
            [p, Te],
            [w, L],
          ],
          [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
          [[w, L]],
          [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
          [k, p, [w, _]],
          [/droid.+; (shield) bui/i],
          [p, [k, "Nvidia"], [w, _]],
          [/(playstation [345portablevi]+)/i],
          [p, [k, te], [w, _]],
          [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
          [p, [k, V], [w, _]],
          [/((pebble))app/i],
          [k, p, [w, A]],
          [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
          [p, [k, P], [w, A]],
          [/droid.+; (glass) \d/i],
          [p, [k, ee], [w, A]],
          [/droid.+; (wt63?0{2,3})\)/i],
          [p, [k, ue], [w, A]],
          [/(quest( \d| pro)?)/i],
          [p, [k, be], [w, A]],
          [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
          [k, [w, K]],
          [/(aeobc)\b/i],
          [p, [k, H], [w, K]],
          [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
          [p, [w, E]],
          [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
          [p, [w, N]],
          [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
          [[w, N]],
          [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
          [[w, E]],
          [/(android[-\w\. ]{0,9});.+buil/i],
          [p, [k, "Generic"]],
        ],
        engine: [
          [/windows.+ edge\/([\w\.]+)/i],
          [b, [x, G + "HTML"]],
          [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
          [b, [x, "Blink"]],
          [
            /(presto)\/([\w\.]+)/i,
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
            /ekioh(flow)\/([\w\.]+)/i,
            /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
            /(icab)[\/ ]([23]\.[\d\.]+)/i,
            /\b(libweb)/i,
          ],
          [x, b],
          [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
          [b, x],
        ],
        os: [
          [/microsoft (windows) (vista|xp)/i],
          [x, b],
          [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
          [x, [b, Ue, wt]],
          [
            /windows nt 6\.2; (arm)/i,
            /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
            /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i,
          ],
          [
            [b, Ue, wt],
            [x, "Windows"],
          ],
          [
            /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
            /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
            /cfnetwork\/.+darwin/i,
          ],
          [
            [b, /_/g, "."],
            [x, "iOS"],
          ],
          [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
          [
            [x, ze],
            [b, /_/g, "."],
          ],
          [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
          [b, x],
          [
            /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
            /(blackberry)\w*\/([\w\.]*)/i,
            /(tizen|kaios)[\/ ]([\w\.]+)/i,
            /\((series40);/i,
          ],
          [x, b],
          [/\(bb(10);/i],
          [b, [x, D]],
          [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
          [b, [x, "Symbian"]],
          [
            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
          ],
          [b, [x, Z + " OS"]],
          [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
          [b, [x, "webOS"]],
          [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
          [b, [x, "watchOS"]],
          [/crkey\/([\d\.]+)/i],
          [b, [x, I + "cast"]],
          [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
          [[x, Oe], b],
          [
            /panasonic;(viera)/i,
            /(netrange)mmh/i,
            /(nettv)\/(\d+\.[\w\.]+)/i,
            /(nintendo|playstation) ([wids345portablevuch]+)/i,
            /(xbox); +xbox ([^\);]+)/i,
            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
            /(mint)[\/\(\) ]?(\w*)/i,
            /(mageia|vectorlinux)[; ]/i,
            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
            /(hurd|linux) ?([\w\.]*)/i,
            /(gnu) ?([\w\.]*)/i,
            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
            /(haiku) (\w+)/i,
          ],
          [x, b],
          [/(sunos) ?([\w\.\d]*)/i],
          [[x, "Solaris"], b],
          [
            /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
            /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
            /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
            /(unix) ?([\w\.]*)/i,
          ],
          [x, b],
        ],
      },
      Be = function (pe, ge) {
        if ((typeof pe === f && ((ge = pe), (pe = n)), !(this instanceof Be)))
          return new Be(pe, ge).getResult();
        var ce = typeof r !== c && r.navigator ? r.navigator : n,
          ke = pe || (ce && ce.userAgent ? ce.userAgent : o),
          Jt = ce && ce.userAgentData ? ce.userAgentData : n,
          Pt = ge ? et(Ve, ge) : Ve,
          xe = ce && ce.userAgent == ke;
        return (
          (this.getBrowser = function () {
            var se = {};
            return (
              (se[x] = n),
              (se[b] = n),
              xt.call(se, ke, Pt.browser),
              (se[g] = fe(se[b])),
              xe &&
                ce &&
                ce.brave &&
                typeof ce.brave.isBrave == s &&
                (se[x] = "Brave"),
              se
            );
          }),
          (this.getCPU = function () {
            var se = {};
            return (se[S] = n), xt.call(se, ke, Pt.cpu), se;
          }),
          (this.getDevice = function () {
            var se = {};
            return (
              (se[k] = n),
              (se[p] = n),
              (se[w] = n),
              xt.call(se, ke, Pt.device),
              xe && !se[w] && Jt && Jt.mobile && (se[w] = E),
              xe &&
                se[p] == "Macintosh" &&
                ce &&
                typeof ce.standalone !== c &&
                ce.maxTouchPoints &&
                ce.maxTouchPoints > 2 &&
                ((se[p] = "iPad"), (se[w] = N)),
              se
            );
          }),
          (this.getEngine = function () {
            var se = {};
            return (se[x] = n), (se[b] = n), xt.call(se, ke, Pt.engine), se;
          }),
          (this.getOS = function () {
            var se = {};
            return (
              (se[x] = n),
              (se[b] = n),
              xt.call(se, ke, Pt.os),
              xe &&
                !se[x] &&
                Jt &&
                Jt.platform &&
                Jt.platform != "Unknown" &&
                (se[x] = Jt.platform
                  .replace(/chrome os/i, Oe)
                  .replace(/macos/i, ze)),
              se
            );
          }),
          (this.getResult = function () {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.getEngine(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU(),
            };
          }),
          (this.getUA = function () {
            return ke;
          }),
          (this.setUA = function (se) {
            return (
              (ke = typeof se === h && se.length > F ? Te(se, F) : se), this
            );
          }),
          this.setUA(ke),
          this
        );
      };
    (Be.VERSION = i),
      (Be.BROWSER = Le([x, b, g])),
      (Be.CPU = Le([S])),
      (Be.DEVICE = Le([p, k, w, _, E, L, N, A, K])),
      (Be.ENGINE = Be.OS = Le([x, b])),
      e.exports && (t = e.exports = Be),
      (t.UAParser = Be);
    var bt = typeof r !== c && (r.jQuery || r.Zepto);
    if (bt && !bt.ua) {
      var Nt = new Be();
      (bt.ua = Nt.getResult()),
        (bt.ua.get = function () {
          return Nt.getUA();
        }),
        (bt.ua.set = function (pe) {
          Nt.setUA(pe);
          var ge = Nt.getResult();
          for (var ce in ge) bt.ua[ce] = ge[ce];
        });
    }
  })(typeof window == "object" ? window : $r);
})(xf, xf.exports);
var mO = xf.exports,
  vO = mO,
  Qt = "Unknown",
  gO = { "Mac OS": "Mac OS X" };
function yO(e) {
  return gO[e] || e;
}
function xO(e) {
  if (!e) return { major: "", minor: "" };
  var t = e.split(".");
  return { major: t[0], minor: t[1] };
}
var wO = new vO(),
  Xt = wO.getResult(),
  _O = xO(Xt.browser.version),
  SO = {
    browserArchitecture: Xt.cpu.architecture || Qt,
    browserFullVersion: Xt.browser.version || Qt,
    browserMinorVersion: _O.minor || Qt,
    browserName: Xt.browser.name || Qt,
    browserVersion: Xt.browser.major || Qt,
    deviceName: Xt.device.model || Qt,
    engineName: Xt.engine.name || Qt,
    engineVersion: Xt.engine.version || Qt,
    platformArchitecture: Xt.cpu.architecture || Qt,
    platformName: yO(Xt.os.name) || Qt,
    platformVersion: Xt.os.version || Qt,
    platformFullVersion: Xt.os.version || Qt,
  },
  EO = SO,
  ss = Ce,
  gx = /\./,
  kO = /\|\|/,
  CO = /\s+\-\s+/,
  bO = /^(<=|<|=|>=|~>|~|>|)?\s*(.+)/,
  Lm = /^(\d*)(.*)/;
function NO(e, t) {
  var r = e.split(kO);
  return r.length > 1
    ? r.some(function (n) {
        return _x.contains(n, t);
      })
    : ((e = r[0].trim()), OO(e, t));
}
function OO(e, t) {
  var r = e.split(CO);
  if (((r.length > 0 && r.length <= 2) || ss(!1), r.length === 1))
    return qu(r[0], t);
  var n = r[0],
    i = r[1];
  return (Bm(n) && Bm(i)) || ss(!1), qu(">=" + n, t) && qu("<=" + i, t);
}
function qu(e, t) {
  if (((e = e.trim()), e === "")) return !0;
  var r = t.split(gx),
    n = wx(e),
    i = n.modifier,
    o = n.rangeComponents;
  switch (i) {
    case "<":
      return yx(r, o);
    case "<=":
      return TO(r, o);
    case ">=":
      return xx(r, o);
    case ">":
      return LO(r, o);
    case "~":
    case "~>":
      return BO(r, o);
    default:
      return DO(r, o);
  }
}
function yx(e, t) {
  return _a(e, t) === -1;
}
function TO(e, t) {
  var r = _a(e, t);
  return r === -1 || r === 0;
}
function DO(e, t) {
  return _a(e, t) === 0;
}
function xx(e, t) {
  var r = _a(e, t);
  return r === 1 || r === 0;
}
function LO(e, t) {
  return _a(e, t) === 1;
}
function BO(e, t) {
  var r = t.slice(),
    n = t.slice();
  n.length > 1 && n.pop();
  var i = n.length - 1,
    o = parseInt(n[i], 10);
  return wf(o) && (n[i] = o + 1 + ""), xx(e, r) && yx(e, n);
}
function wx(e) {
  var t = e.split(gx),
    r = t[0].match(bO);
  return (
    r || ss(!1), { modifier: r[1], rangeComponents: [r[2]].concat(t.slice(1)) }
  );
}
function wf(e) {
  return !isNaN(e) && isFinite(e);
}
function Bm(e) {
  return !wx(e).modifier;
}
function Rm(e, t) {
  for (var r = e.length; r < t; r++) e[r] = "0";
}
function RO(e, t) {
  (e = e.slice()), (t = t.slice()), Rm(e, t.length);
  for (var r = 0; r < t.length; r++) {
    var n = t[r].match(/^[x*]$/i);
    if (n && ((t[r] = e[r] = "0"), n[0] === "*" && r === t.length - 1))
      for (var i = r; i < e.length; i++) e[i] = "0";
  }
  return Rm(t, e.length), [e, t];
}
function MO(e, t) {
  var r = e.match(Lm)[1],
    n = t.match(Lm)[1],
    i = parseInt(r, 10),
    o = parseInt(n, 10);
  return wf(i) && wf(o) && i !== o ? Mm(i, o) : Mm(e, t);
}
function Mm(e, t) {
  return typeof e != typeof t && ss(!1), e > t ? 1 : e < t ? -1 : 0;
}
function _a(e, t) {
  for (var r = RO(e, t), n = r[0], i = r[1], o = 0; o < i.length; o++) {
    var l = MO(n[o], i[o]);
    if (l) return l;
  }
  return 0;
}
var _x = {
    contains: function (t, r) {
      return NO(t.trim(), r.trim());
    },
  },
  IO = _x,
  jO = Object.prototype.hasOwnProperty;
function AO(e, t, r) {
  if (!e) return null;
  var n = {};
  for (var i in e) jO.call(e, i) && (n[i] = t.call(r, e[i], i, e));
  return n;
}
var PO = AO;
function FO(e) {
  var t = {};
  return function (r) {
    return t.hasOwnProperty(r) || (t[r] = e.call(this, r)), t[r];
  };
}
var $O = FO,
  kr = EO,
  KO = IO,
  zO = PO,
  UO = $O;
function gi(e, t, r, n) {
  if (e === r) return !0;
  if (!r.startsWith(e)) return !1;
  var i = r.slice(e.length);
  return t ? ((i = n ? n(i) : i), KO.contains(i, t)) : !1;
}
function HO(e) {
  return kr.platformName === "Windows" ? e.replace(/^\s*NT/, "") : e;
}
var WO = {
    isBrowser: function (t) {
      return gi(kr.browserName, kr.browserFullVersion, t);
    },
    isBrowserArchitecture: function (t) {
      return gi(kr.browserArchitecture, null, t);
    },
    isDevice: function (t) {
      return gi(kr.deviceName, null, t);
    },
    isEngine: function (t) {
      return gi(kr.engineName, kr.engineVersion, t);
    },
    isPlatform: function (t) {
      return gi(kr.platformName, kr.platformFullVersion, t, HO);
    },
    isPlatformArchitecture: function (t) {
      return gi(kr.platformArchitecture, null, t);
    },
  },
  At = zO(WO, UO);
function qO(e) {
  return !e || !e.ownerDocument ? document : e.ownerDocument;
}
var Rs = qO;
function VO(e) {
  return !e || !e.ownerDocument ? !1 : e.nodeType === Node.ELEMENT_NODE;
}
var Zn = VO,
  GO = Zn;
function Sx(e) {
  if (GO(e)) {
    var t = e,
      r = t.getAttribute("data-offset-key");
    if (r) return r;
    for (var n = 0; n < t.childNodes.length; n++) {
      var i = Sx(t.childNodes[n]);
      if (i) return i;
    }
  }
  return null;
}
var Ex = Sx,
  JO = Rs,
  YO = Ex;
function QO(e) {
  for (var t = e; t && t !== JO(e).documentElement; ) {
    var r = YO(t);
    if (r != null) return r;
    t = t.parentNode;
  }
  return null;
}
var Ms = QO;
function XO(e) {
  return !e || !e.ownerDocument || !e.ownerDocument.defaultView
    ? window
    : e.ownerDocument.defaultView;
}
var kx = XO;
function ol(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var ZO = At,
  eT = Ms,
  tT = kx,
  rT = Se,
  nT = Ce,
  iT = jt,
  Im = rT.Map,
  oT = {
    subtree: !0,
    characterData: !0,
    childList: !0,
    characterDataOldValue: !1,
    attributes: !1,
  },
  jm = ZO.isBrowser("IE <= 11"),
  aT = (function () {
    function e(r) {
      var n = this;
      ol(this, "observer", void 0),
        ol(this, "container", void 0),
        ol(this, "mutations", void 0),
        ol(this, "onCharData", void 0),
        (this.container = r),
        (this.mutations = Im());
      var i = tT(r);
      i.MutationObserver && !jm
        ? (this.observer = new i.MutationObserver(function (o) {
            return n.registerMutations(o);
          }))
        : (this.onCharData = function (o) {
            o.target instanceof Node || nT(!1),
              n.registerMutation({ type: "characterData", target: o.target });
          });
    }
    var t = e.prototype;
    return (
      (t.start = function () {
        this.observer
          ? this.observer.observe(this.container, oT)
          : this.container.addEventListener(
              "DOMCharacterDataModified",
              this.onCharData
            );
      }),
      (t.stopAndFlushMutations = function () {
        var n = this.observer;
        n
          ? (this.registerMutations(n.takeRecords()), n.disconnect())
          : this.container.removeEventListener(
              "DOMCharacterDataModified",
              this.onCharData
            );
        var i = this.mutations;
        return (this.mutations = Im()), i;
      }),
      (t.registerMutations = function (n) {
        for (var i = 0; i < n.length; i++) this.registerMutation(n[i]);
      }),
      (t.getMutationTextContent = function (n) {
        var i = n.type,
          o = n.target,
          l = n.removedNodes;
        if (i === "characterData") {
          if (o.textContent !== "")
            return jm
              ? o.textContent.replace(
                  `
`,
                  ""
                )
              : o.textContent;
        } else if (i === "childList") {
          if (l && l.length) return "";
          if (o.textContent !== "") return o.textContent;
        }
        return null;
      }),
      (t.registerMutation = function (n) {
        var i = this.getMutationTextContent(n);
        if (i != null) {
          var o = iT(eT(n.target));
          this.mutations = this.mutations.set(o, i);
        }
      }),
      e
    );
  })(),
  lT = aT,
  al = "-",
  sT = {
    encode: function (t, r, n) {
      return t + al + r + al + n;
    },
    decode: function (t) {
      var r = t.split(al).reverse(),
        n = r[0],
        i = r[1],
        o = r.slice(2);
      return {
        blockKey: o.reverse().join(al),
        decoratorKey: parseInt(i, 10),
        leafKey: parseInt(n, 10),
      };
    },
  },
  Gr = sT,
  Is = {
    BACKSPACE: 8,
    TAB: 9,
    RETURN: 13,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    DELETE: 46,
    COMMA: 188,
    PERIOD: 190,
    A: 65,
    Z: 90,
    ZERO: 48,
    NUMPAD_0: 96,
    NUMPAD_9: 105,
  },
  Cx = {
    logBlockedSelectionEvent: function () {
      return null;
    },
    logSelectionStateFailure: function () {
      return null;
    },
  };
function uT(e) {
  return !e || !e.ownerDocument
    ? !1
    : e.ownerDocument.defaultView
    ? e instanceof e.ownerDocument.defaultView.HTMLElement
    : e instanceof HTMLElement;
}
var Sa = uT,
  Am = Ce,
  cT = Sa;
function fT(e) {
  var t = e.editorContainer;
  t || Am(!1), cT(t.firstChild) || Am(!1);
  var r = t.firstChild;
  return r;
}
var bx = fT,
  Pm = Gr,
  dT = jt;
function pT(e, t, r, n, i) {
  var o = dT(e.getSelection());
  if (!t || !n) return o;
  var l = Pm.decode(t),
    s = l.blockKey,
    c = e.getBlockTree(s),
    f = c && c.getIn([l.decoratorKey, "leaves", l.leafKey]),
    h = Pm.decode(n),
    g = h.blockKey,
    p = e.getBlockTree(g),
    x = p && p.getIn([h.decoratorKey, "leaves", h.leafKey]);
  if (!f || !x) return o;
  var w = f.get("start"),
    k = x.get("start"),
    b = f ? w + r : null,
    S = x ? k + i : null,
    _ =
      o.getAnchorKey() === s &&
      o.getAnchorOffset() === b &&
      o.getFocusKey() === g &&
      o.getFocusOffset() === S;
  if (_) return o;
  var E = !1;
  if (s === g) {
    var N = f.get("end"),
      L = x.get("end");
    k === w && L === N ? (E = i < r) : (E = k < w);
  } else {
    var A = e
      .getCurrentContent()
      .getBlockMap()
      .keySeq()
      .skipUntil(function (K) {
        return K === s || K === g;
      })
      .first();
    E = A === g;
  }
  return o.merge({
    anchorKey: s,
    anchorOffset: b,
    focusKey: g,
    focusOffset: S,
    isBackward: E,
  });
}
var Nx = pT,
  Oo = Ms,
  $o = Ex,
  Fm = Nx,
  Vu = Ce,
  Ad = Zn,
  Pn = jt;
function hT(e, t, r, n, i, o) {
  var l = r.nodeType === Node.TEXT_NODE,
    s = i.nodeType === Node.TEXT_NODE;
  if (l && s)
    return {
      selectionState: Fm(e, Pn(Oo(r)), n, Pn(Oo(i)), o),
      needsRecovery: !1,
    };
  var c = null,
    f = null,
    h = !0;
  return (
    l
      ? ((c = { key: Pn(Oo(r)), offset: n }), (f = ll(t, i, o)))
      : s
      ? ((f = { key: Pn(Oo(i)), offset: o }), (c = ll(t, r, n)))
      : ((c = ll(t, r, n)),
        (f = ll(t, i, o)),
        r === i &&
          n === o &&
          (h = !!r.firstChild && r.firstChild.nodeName !== "BR")),
    {
      selectionState: Fm(e, c.key, c.offset, f.key, f.offset),
      needsRecovery: h,
    }
  );
}
function mT(e) {
  for (
    ;
    e.firstChild &&
    ((Ad(e.firstChild) &&
      e.firstChild.getAttribute("data-blocks") === "true") ||
      $o(e.firstChild));

  )
    e = e.firstChild;
  return e;
}
function vT(e) {
  for (
    ;
    e.lastChild &&
    ((Ad(e.lastChild) && e.lastChild.getAttribute("data-blocks") === "true") ||
      $o(e.lastChild));

  )
    e = e.lastChild;
  return e;
}
function ll(e, t, r) {
  var n = t,
    i = Oo(n);
  if (
    (i != null || (e && (e === n || e.firstChild === n)) || Vu(!1), e === n)
  ) {
    (n = n.firstChild), Ad(n) || Vu(!1);
    var o = n;
    (n = o),
      n.getAttribute("data-contents") !== "true" && Vu(!1),
      r > 0 && (r = n.childNodes.length);
  }
  if (r === 0) {
    var l = null;
    if (i != null) l = i;
    else {
      var s = mT(n);
      l = Pn($o(s));
    }
    return { key: l, offset: 0 };
  }
  var c = n.childNodes[r - 1],
    f = null,
    h = null;
  if (!$o(c)) (f = Pn(i)), (h = $m(c));
  else {
    var g = vT(c);
    (f = Pn($o(g))), (h = $m(g));
  }
  return { key: f, offset: h };
}
function $m(e) {
  var t = e.textContent;
  return t ===
    `
`
    ? 0
    : t.length;
}
var Ox = hT,
  gT = Ox;
function yT(e, t) {
  var r = t.ownerDocument.defaultView.getSelection(),
    n = r.anchorNode,
    i = r.anchorOffset,
    o = r.focusNode,
    l = r.focusOffset,
    s = r.rangeCount;
  return s === 0 || n == null || o == null
    ? {
        selectionState: e.getSelection().set("hasFocus", !1),
        needsRecovery: !1,
      }
    : gT(e, t, n, i, o, l);
}
var Tx = yT,
  xT = Cx,
  Km = Me,
  wT = bx,
  _T = Tx;
function ST(e) {
  if (e._blockSelectEvents || e._latestEditorState !== e.props.editorState) {
    if (e._blockSelectEvents) {
      var t = e.props.editorState,
        r = t.getSelection();
      xT.logBlockedSelectionEvent({
        anonymizedDom: "N/A",
        extraParams: JSON.stringify({ stacktrace: new Error().stack }),
        selectionState: JSON.stringify(r.toJS()),
      });
    }
    return;
  }
  var n = e.props.editorState,
    i = _T(n, wT(e)),
    o = i.selectionState;
  o !== n.getSelection() &&
    (i.needsRecovery
      ? (n = Km.forceSelection(n, o))
      : (n = Km.acceptSelection(n, o)),
    e.update(n));
}
var Dx = ST;
function ET(e) {
  return e != null && e != "";
}
var Lx = { notEmptyKey: ET },
  kT = Lx,
  CT = kT.notEmptyKey;
function bT(e, t) {
  var r;
  if (t.isCollapsed()) {
    var n = t.getAnchorKey(),
      i = t.getAnchorOffset();
    return i > 0
      ? ((r = e.getBlockForKey(n).getEntityAt(i - 1)),
        r !== e.getBlockForKey(n).getEntityAt(i)
          ? null
          : zm(e.getEntityMap(), r))
      : null;
  }
  var o = t.getStartKey(),
    l = t.getStartOffset(),
    s = e.getBlockForKey(o);
  return (
    (r = l === s.getLength() ? null : s.getEntityAt(l)), zm(e.getEntityMap(), r)
  );
}
function zm(e, t) {
  if (CT(t)) {
    var r = e.__get(t);
    return r.getMutability() === "MUTABLE" ? t : null;
  }
  return null;
}
var Pd = bT,
  NT = lT,
  OT = It,
  TT = Gr,
  wo = Me,
  Gu = Is,
  DT = At,
  LT = Dx,
  Bx = bx,
  BT = Tx,
  RT = Pd,
  MT = jt,
  IT = DT.isBrowser("IE"),
  jT = 20,
  Ju = !1,
  sl = !1,
  Ko = null;
function AT(e) {
  Ko || ((Ko = new NT(Bx(e))), Ko.start());
}
var _f = {
    onCompositionStart: function (t) {
      (sl = !0), AT(t);
    },
    onCompositionEnd: function (t) {
      (Ju = !1),
        (sl = !1),
        setTimeout(function () {
          Ju || _f.resolveComposition(t);
        }, jT);
    },
    onSelect: LT,
    onKeyDown: function (t, r) {
      if (!sl) {
        _f.resolveComposition(t), t._onKeyDown(r);
        return;
      }
      (r.which === Gu.RIGHT || r.which === Gu.LEFT) && r.preventDefault();
    },
    onKeyPress: function (t, r) {
      r.which === Gu.RETURN && r.preventDefault();
    },
    resolveComposition: function (t) {
      if (!sl) {
        var r = MT(Ko).stopAndFlushMutations();
        (Ko = null), (Ju = !0);
        var n = wo.set(t._latestEditorState, { inCompositionMode: !1 });
        if ((t.exitCurrentMode(), !r.size)) {
          t.update(n);
          return;
        }
        var i = n.getCurrentContent();
        r.forEach(function (c, f) {
          var h = TT.decode(f),
            g = h.blockKey,
            p = h.decoratorKey,
            x = h.leafKey,
            w = n.getBlockTree(g).getIn([p, "leaves", x]),
            k = w.start,
            b = w.end,
            S = n.getSelection().merge({
              anchorKey: g,
              focusKey: g,
              anchorOffset: k,
              focusOffset: b,
              isBackward: !1,
            }),
            _ = RT(i, S),
            E = i.getBlockForKey(g).getInlineStyleAt(k);
          (i = OT.replaceText(i, S, c, E, _)),
            (n = wo.set(n, { currentContent: i }));
        });
        var o = BT(n, Bx(t)),
          l = o.selectionState;
        t.restoreEditorDOM();
        var s = IT ? wo.forceSelection(n, l) : wo.acceptSelection(n, l);
        t.update(wo.push(s, i, "insert-characters"));
      }
    },
  },
  PT = _f,
  Yu,
  Um;
function FT() {
  if (Um) return Yu;
  Um = 1;
  var e = Xn;
  function t() {
    return (
      (t =
        e ||
        function (c) {
          for (var f = 1; f < arguments.length; f++) {
            var h = arguments[f];
            for (var g in h)
              Object.prototype.hasOwnProperty.call(h, g) && (c[g] = h[g]);
          }
          return c;
        }),
      t.apply(this, arguments)
    );
  }
  function r(c, f) {
    (c.prototype = Object.create(f.prototype)),
      (c.prototype.constructor = c),
      (c.__proto__ = f);
  }
  var n = Gr,
    i = U,
    o = Rd,
    l = Ls,
    s = (function (c) {
      r(f, c);
      function f() {
        return c.apply(this, arguments) || this;
      }
      var h = f.prototype;
      return (
        (h.render = function () {
          var p = this.props,
            x = p.block,
            w = p.children,
            k = p.contentState,
            b = p.decorator,
            S = p.decoratorKey,
            _ = p.direction,
            E = p.leafSet,
            N = p.text,
            L = x.getKey(),
            A = E.get("leaves"),
            K = b.getComponentForKey(S),
            F = b.getPropsForKey(S),
            H = n.encode(L, parseInt(S, 10), 0),
            P = N.slice(A.first().get("start"), A.last().get("end")),
            M = l.getHTMLDirIfDifferent(o.getDirection(P), _);
          return i.createElement(
            K,
            t({}, F, {
              contentState: k,
              decoratedText: P,
              dir: M,
              key: H,
              entityKey: x.getEntityAt(E.get("start")),
              offsetKey: H,
            }),
            w
          );
        }),
        f
      );
    })(i.Component);
  return (Yu = s), Yu;
}
function Hm(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function $T(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t);
}
function Wm(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var Vi = U,
  KT = At,
  zT = Ce,
  UT = Zn,
  Fd = KT.isBrowser("IE <= 11");
function HT(e) {
  return Fd
    ? e.textContent ===
        `
`
    : e.tagName === "BR";
}
var WT = function (t) {
    return Fd
      ? Vi.createElement(
          "span",
          { key: "A", "data-text": "true", ref: t },
          `
`
        )
      : Vi.createElement("br", { key: "A", "data-text": "true", ref: t });
  },
  qT = function (t) {
    return Fd
      ? Vi.createElement(
          "span",
          { key: "B", "data-text": "true", ref: t },
          `
`
        )
      : Vi.createElement("br", { key: "B", "data-text": "true", ref: t });
  },
  VT = (function (e) {
    $T(t, e);
    function t(n) {
      var i;
      return (
        (i = e.call(this, n) || this),
        Wm(Hm(i), "_forceFlag", void 0),
        Wm(Hm(i), "_node", void 0),
        (i._forceFlag = !1),
        i
      );
    }
    var r = t.prototype;
    return (
      (r.shouldComponentUpdate = function (i) {
        var o = this._node,
          l = i.children === "";
        UT(o) || zT(!1);
        var s = o;
        return l ? !HT(s) : s.textContent !== i.children;
      }),
      (r.componentDidMount = function () {
        this._forceFlag = !this._forceFlag;
      }),
      (r.componentDidUpdate = function () {
        this._forceFlag = !this._forceFlag;
      }),
      (r.render = function () {
        var i = this;
        return this.props.children === ""
          ? this._forceFlag
            ? WT(function (o) {
                return (i._node = o);
              })
            : qT(function (o) {
                return (i._node = o);
              })
          : Vi.createElement(
              "span",
              {
                key: this._forceFlag ? "A" : "B",
                "data-text": "true",
                ref: function (l) {
                  return (i._node = l);
                },
              },
              this.props.children
            );
      }),
      t
    );
  })(Vi.Component),
  GT = VT,
  JT = Zn;
function YT(e) {
  return !e || !e.ownerDocument ? !1 : JT(e) && e.nodeName === "BR";
}
var Rx = YT,
  Mx = { initODS: function () {}, handleExtensionCausedError: function () {} };
function QT(e) {
  var t = e ? e.ownerDocument || e : document,
    r = t.defaultView || window;
  return !!(
    e &&
    (typeof r.Node == "function"
      ? e instanceof r.Node
      : typeof e == "object" &&
        typeof e.nodeType == "number" &&
        typeof e.nodeName == "string")
  );
}
var XT = QT,
  ZT = XT;
function eD(e) {
  return ZT(e) && e.nodeType == 3;
}
var tD = eD,
  qm = tD;
function Ix(e, t) {
  return !e || !t
    ? !1
    : e === t
    ? !0
    : qm(e)
    ? !1
    : qm(t)
    ? Ix(e, t.parentNode)
    : "contains" in e
    ? e.contains(t)
    : e.compareDocumentPosition
    ? !!(e.compareDocumentPosition(t) & 16)
    : !1;
}
var $d = Ix;
function rD(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
var jx = rD,
  nD = Mx,
  Sf = Cx,
  iD = At,
  Ax = $d,
  oD = jx,
  Kd = Rs,
  aD = Ce,
  Px = Zn,
  lD = iD.isBrowser("IE");
function sD(e, t) {
  if (!e) return "[empty]";
  var r = Fx(e, t);
  if (r.nodeType === Node.TEXT_NODE) return r.textContent;
  Px(r) || aD(!1);
  var n = r;
  return n.outerHTML;
}
function Fx(e, t) {
  var r = t !== void 0 ? t(e) : [];
  if (e.nodeType === Node.TEXT_NODE) {
    var n = e.textContent.length;
    return Kd(e).createTextNode(
      "[text " + n + (r.length ? " | " + r.join(", ") : "") + "]"
    );
  }
  var i = e.cloneNode();
  i.nodeType === 1 && r.length && i.setAttribute("data-labels", r.join(", "));
  for (var o = e.childNodes, l = 0; l < o.length; l++)
    i.appendChild(Fx(o[l], t));
  return i;
}
function Ef(e, t) {
  for (var r = e, n = r; r; ) {
    if (Px(r) && n.hasAttribute("contenteditable")) return sD(r, t);
    (r = r.parentNode), (n = r);
  }
  return "Could not find contentEditable parent of node";
}
function $x(e) {
  return e.nodeValue === null ? e.childNodes.length : e.nodeValue.length;
}
function uD(e, t, r, n, i) {
  var o = Kd(t);
  if (Ax(o.documentElement, t)) {
    var l = o.defaultView.getSelection(),
      s = e.getAnchorKey(),
      c = e.getAnchorOffset(),
      f = e.getFocusKey(),
      h = e.getFocusOffset(),
      g = e.getIsBackward();
    if (!l.extend && g) {
      var p = s,
        x = c;
      (s = f), (c = h), (f = p), (h = x), (g = !1);
    }
    var w = s === r && n <= c && i >= c,
      k = f === r && n <= h && i >= h;
    if (w && k) {
      l.removeAllRanges(), ul(l, t, c - n, e), Bl(l, t, h - n, e);
      return;
    }
    if (!g)
      w && (l.removeAllRanges(), ul(l, t, c - n, e)), k && Bl(l, t, h - n, e);
    else if ((k && (l.removeAllRanges(), ul(l, t, h - n, e)), w)) {
      var b = l.focusNode,
        S = l.focusOffset;
      l.removeAllRanges(), ul(l, t, c - n, e), Bl(l, b, S, e);
    }
  }
}
function Bl(e, t, r, n) {
  var i = oD(),
    o = e.extend;
  if (o && t != null && Ax(i, t)) {
    r > $x(t) &&
      Sf.logSelectionStateFailure({
        anonymizedDom: Ef(t),
        extraParams: JSON.stringify({ offset: r }),
        selectionState: JSON.stringify(n.toJS()),
      });
    var l = t === e.focusNode;
    try {
      e.rangeCount > 0 && e.extend && e.extend(t, r);
    } catch (c) {
      throw (
        (Sf.logSelectionStateFailure({
          anonymizedDom: Ef(t, function (f) {
            var h = [];
            return (
              f === i && h.push("active element"),
              f === e.anchorNode && h.push("selection anchor node"),
              f === e.focusNode && h.push("selection focus node"),
              h
            );
          }),
          extraParams: JSON.stringify(
            {
              activeElementName: i ? i.nodeName : null,
              nodeIsFocus: t === e.focusNode,
              nodeWasFocus: l,
              selectionRangeCount: e.rangeCount,
              selectionAnchorNodeName: e.anchorNode
                ? e.anchorNode.nodeName
                : null,
              selectionAnchorOffset: e.anchorOffset,
              selectionFocusNodeName: e.focusNode ? e.focusNode.nodeName : null,
              selectionFocusOffset: e.focusOffset,
              message: c ? "" + c : null,
              offset: r,
            },
            null,
            2
          ),
          selectionState: JSON.stringify(n.toJS(), null, 2),
        }),
        c)
      );
    }
  } else if (t && e.rangeCount > 0) {
    var s = e.getRangeAt(0);
    s.setEnd(t, r), e.addRange(s.cloneRange());
  }
}
function ul(e, t, r, n) {
  var i = Kd(t).createRange();
  if (
    (r > $x(t) &&
      (Sf.logSelectionStateFailure({
        anonymizedDom: Ef(t),
        extraParams: JSON.stringify({ offset: r }),
        selectionState: JSON.stringify(n.toJS()),
      }),
      nD.handleExtensionCausedError()),
    i.setStart(t, r),
    lD)
  )
    try {
      e.addRange(i);
    } catch {}
  else e.addRange(i);
}
var cD = { setDraftEditorSelection: uD, addFocusToSelection: Bl },
  Vm = Xn;
function fD(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function dD(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t);
}
function pD(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var hD = GT,
  Qu = U,
  cl = Ce,
  mD = Rx,
  vD = cD.setDraftEditorSelection,
  gD = (function (e) {
    dD(t, e);
    function t() {
      for (var n, i = arguments.length, o = new Array(i), l = 0; l < i; l++)
        o[l] = arguments[l];
      return (
        (n = e.call.apply(e, [this].concat(o)) || this),
        pD(fD(n), "leaf", void 0),
        n
      );
    }
    var r = t.prototype;
    return (
      (r._setSelection = function () {
        var i = this.props.selection;
        if (!(i == null || !i.getHasFocus())) {
          var o = this.props,
            l = o.block,
            s = o.start,
            c = o.text,
            f = l.getKey(),
            h = s + c.length;
          if (i.hasEdgeWithin(f, s, h)) {
            var g = this.leaf;
            g || cl(!1);
            var p = g.firstChild;
            p || cl(!1);
            var x;
            p.nodeType === Node.TEXT_NODE
              ? (x = p)
              : mD(p)
              ? (x = g)
              : ((x = p.firstChild), x || cl(!1)),
              vD(i, x, f, s, h);
          }
        }
      }),
      (r.shouldComponentUpdate = function (i) {
        var o = this.leaf;
        o || cl(!1);
        var l =
          o.textContent !== i.text ||
          i.styleSet !== this.props.styleSet ||
          i.forceSelection;
        return l;
      }),
      (r.componentDidUpdate = function () {
        this._setSelection();
      }),
      (r.componentDidMount = function () {
        this._setSelection();
      }),
      (r.render = function () {
        var i = this,
          o = this.props.block,
          l = this.props.text;
        l.endsWith(`
`) &&
          this.props.isLast &&
          (l += `
`);
        var s = this.props,
          c = s.customStyleMap,
          f = s.customStyleFn,
          h = s.offsetKey,
          g = s.styleSet,
          p = g.reduce(function (w, k) {
            var b = {},
              S = c[k];
            return (
              S !== void 0 &&
                w.textDecoration !== S.textDecoration &&
                (b.textDecoration = [w.textDecoration, S.textDecoration]
                  .join(" ")
                  .trim()),
              Vm(w, S, b)
            );
          }, {});
        if (f) {
          var x = f(g, o);
          p = Vm(p, x);
        }
        return Qu.createElement(
          "span",
          {
            "data-offset-key": h,
            ref: function (k) {
              return (i.leaf = k);
            },
            style: p,
          },
          Qu.createElement(hD, null, l)
        );
      }),
      t
    );
  })(Qu.Component),
  Kx = gD,
  Xu,
  Gm;
function yD() {
  if (Gm) return Xu;
  Gm = 1;
  function e(c, f) {
    (c.prototype = Object.create(f.prototype)),
      (c.prototype.constructor = c),
      (c.__proto__ = f);
  }
  var t = FT(),
    r = Kx,
    n = Gr,
    i = Se,
    o = U,
    l = Qn;
  i.List;
  var s = (function (c) {
    e(f, c);
    function f() {
      return c.apply(this, arguments) || this;
    }
    var h = f.prototype;
    return (
      (h.render = function () {
        var p = this.props,
          x = p.block,
          w = p.contentState,
          k = p.customStyleFn,
          b = p.customStyleMap,
          S = p.decorator,
          _ = p.direction,
          E = p.forceSelection,
          N = p.hasSelection,
          L = p.selection,
          A = p.tree,
          K = x.getKey(),
          F = x.getText(),
          H = A.size - 1,
          P =
            this.props.children ||
            A.map(function (M, D) {
              var j = M.get("decoratorKey"),
                I = M.get("leaves"),
                G = I.size - 1,
                Z = I.map(function (ee, z) {
                  var q = n.encode(K, D, z),
                    V = ee.get("start"),
                    Y = ee.get("end");
                  return o.createElement(r, {
                    key: q,
                    offsetKey: q,
                    block: x,
                    start: V,
                    selection: N ? L : null,
                    forceSelection: E,
                    text: F.slice(V, Y),
                    styleSet: x.getInlineStyleAt(V),
                    customStyleMap: b,
                    customStyleFn: k,
                    isLast: j === H && z === G,
                  });
                }).toArray();
              return !j || !S
                ? Z
                : o.createElement(t, {
                    block: x,
                    children: Z,
                    contentState: w,
                    decorator: S,
                    decoratorKey: j,
                    direction: _,
                    leafSet: M,
                    text: F,
                    key: D,
                  });
            }).toArray();
        return o.createElement(
          "div",
          {
            "data-offset-key": n.encode(K, 0, 0),
            className: l({
              "public/DraftStyleDefault/block": !0,
              "public/DraftStyleDefault/ltr": _ === "LTR",
              "public/DraftStyleDefault/rtl": _ === "RTL",
            }),
          },
          P
        );
      }),
      f
    );
  })(o.Component);
  return (Xu = s), Xu;
}
function fl(e, t) {
  return !!t && (e === t.documentElement || e === t.body);
}
var xD = {
    getTop: function (t) {
      var r = t.ownerDocument;
      return fl(t, r)
        ? r.body.scrollTop || r.documentElement.scrollTop
        : t.scrollTop;
    },
    setTop: function (t, r) {
      var n = t.ownerDocument;
      fl(t, n)
        ? (n.body.scrollTop = n.documentElement.scrollTop = r)
        : (t.scrollTop = r);
    },
    getLeft: function (t) {
      var r = t.ownerDocument;
      return fl(t, r)
        ? r.body.scrollLeft || r.documentElement.scrollLeft
        : t.scrollLeft;
    },
    setLeft: function (t, r) {
      var n = t.ownerDocument;
      fl(t, n)
        ? (n.body.scrollLeft = n.documentElement.scrollLeft = r)
        : (t.scrollLeft = r);
    },
  },
  zd = xD,
  wD = /-(.)/g;
function _D(e) {
  return e.replace(wD, function (t, r) {
    return r.toUpperCase();
  });
}
var SD = _D,
  ED = /([A-Z])/g;
function kD(e) {
  return e.replace(ED, "-$1").toLowerCase();
}
var CD = kD,
  Jm = SD,
  Ym = CD;
function _o(e) {
  return e == null ? e : String(e);
}
function bD(e, t) {
  var r;
  if (window.getComputedStyle && ((r = window.getComputedStyle(e, null)), r))
    return _o(r.getPropertyValue(Ym(t)));
  if (document.defaultView && document.defaultView.getComputedStyle) {
    if (((r = document.defaultView.getComputedStyle(e, null)), r))
      return _o(r.getPropertyValue(Ym(t)));
    if (t === "display") return "none";
  }
  return e.currentStyle
    ? _o(
        t === "float"
          ? e.currentStyle.cssFloat || e.currentStyle.styleFloat
          : e.currentStyle[Jm(t)]
      )
    : _o(e.style && e.style[Jm(t)]);
}
var ND = bD,
  OD = ND;
function Zu(e, t) {
  var r = zx.get(e, t);
  return r === "auto" || r === "scroll";
}
var zx = {
    get: OD,
    getScrollParent: function (t) {
      if (!t) return null;
      for (var r = t.ownerDocument; t && t !== r.body; ) {
        if (Zu(t, "overflow") || Zu(t, "overflowY") || Zu(t, "overflowX"))
          return t;
        t = t.parentNode;
      }
      return r.defaultView || r.parentWindow;
    },
  },
  js = zx,
  TD = $d;
function DD(e) {
  var t = e.ownerDocument.documentElement;
  if (!("getBoundingClientRect" in e) || !TD(t, e))
    return { left: 0, right: 0, top: 0, bottom: 0 };
  var r = e.getBoundingClientRect();
  return {
    left: Math.round(r.left) - t.clientLeft,
    right: Math.round(r.right) - t.clientLeft,
    top: Math.round(r.top) - t.clientTop,
    bottom: Math.round(r.bottom) - t.clientTop,
  };
}
var LD = DD,
  BD = LD;
function RD(e) {
  var t = BD(e);
  return {
    x: t.left,
    y: t.top,
    width: t.right - t.left,
    height: t.bottom - t.top,
  };
}
var Ux = RD,
  MD =
    typeof navigator < "u" && navigator.userAgent.indexOf("AppleWebKit") > -1;
function ID(e) {
  return (
    (e = e || document),
    e.scrollingElement
      ? e.scrollingElement
      : !MD && e.compatMode === "CSS1Compat"
      ? e.documentElement
      : e.body
  );
}
var jD = ID;
function AD(e) {
  return e.Window && e instanceof e.Window
    ? {
        x: e.pageXOffset || e.document.documentElement.scrollLeft,
        y: e.pageYOffset || e.document.documentElement.scrollTop,
      }
    : { x: e.scrollLeft, y: e.scrollTop };
}
var PD = AD,
  FD = jD,
  $D = PD;
function KD(e) {
  var t = FD(e.ownerDocument || e.document);
  e.Window && e instanceof e.Window && (e = t);
  var r = $D(e),
    n = e === t ? e.ownerDocument.documentElement : e,
    i = e.scrollWidth - n.clientWidth,
    o = e.scrollHeight - n.clientHeight;
  return (
    (r.x = Math.max(0, Math.min(r.x, i))),
    (r.y = Math.max(0, Math.min(r.y, o))),
    r
  );
}
var As = KD;
function Hx() {
  var e;
  return (
    document.documentElement && (e = document.documentElement.clientWidth),
    !e && document.body && (e = document.body.clientWidth),
    e || 0
  );
}
function Wx() {
  var e;
  return (
    document.documentElement && (e = document.documentElement.clientHeight),
    !e && document.body && (e = document.body.clientHeight),
    e || 0
  );
}
function qx() {
  return {
    width: window.innerWidth || Hx(),
    height: window.innerHeight || Wx(),
  };
}
qx.withoutScrollbars = function () {
  return { width: Hx(), height: Wx() };
};
var Vx = qx,
  ec,
  Qm;
function zD() {
  if (Qm) return ec;
  Qm = 1;
  var e = Xn;
  function t() {
    return (
      (t =
        e ||
        function (H) {
          for (var P = 1; P < arguments.length; P++) {
            var M = arguments[P];
            for (var D in M)
              Object.prototype.hasOwnProperty.call(M, D) && (H[D] = M[D]);
          }
          return H;
        }),
      t.apply(this, arguments)
    );
  }
  function r(H) {
    if (H === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return H;
  }
  function n(H, P) {
    (H.prototype = Object.create(P.prototype)),
      (H.prototype.constructor = H),
      (H.__proto__ = P);
  }
  function i(H) {
    for (var P = 1; P < arguments.length; P++) {
      var M = arguments[P] != null ? arguments[P] : {},
        D = Object.keys(M);
      typeof Object.getOwnPropertySymbols == "function" &&
        (D = D.concat(
          Object.getOwnPropertySymbols(M).filter(function (j) {
            return Object.getOwnPropertyDescriptor(M, j).enumerable;
          })
        )),
        D.forEach(function (j) {
          o(H, j, M[j]);
        });
    }
    return H;
  }
  function o(H, P, M) {
    return (
      P in H
        ? Object.defineProperty(H, P, {
            value: M,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (H[P] = M),
      H
    );
  }
  var l = yD(),
    s = Gr,
    c = U,
    f = zd,
    h = js,
    g = Ux,
    p = As,
    x = Vx,
    w = Se,
    k = Ce,
    b = Sa,
    S = 10;
  w.List;
  var _ = function (P, M) {
      return P.getAnchorKey() === M || P.getFocusKey() === M;
    },
    E = function (P, M) {
      var D = P.getNextSiblingKey();
      return D ? M.getBlockForKey(D).getType() === P.getType() : !1;
    },
    N = function (P, M, D) {
      var j = [],
        I = !0,
        G = !1,
        Z = void 0;
      try {
        for (
          var ee = D.reverse()[Symbol.iterator](), z;
          !(I = (z = ee.next()).done);
          I = !0
        ) {
          var q = z.value;
          if (q.type !== M) break;
          j.push(q);
        }
      } catch (ae) {
        (G = !0), (Z = ae);
      } finally {
        try {
          !I && ee.return != null && ee.return();
        } finally {
          if (G) throw Z;
        }
      }
      D.splice(D.indexOf(j[0]), j.length + 1);
      var V = j.reverse(),
        Y = V[0].key;
      return (
        D.push(
          c.cloneElement(
            P,
            {
              key: "".concat(Y, "-wrap"),
              "data-offset-key": s.encode(Y, 0, 0),
            },
            V
          )
        ),
        D
      );
    },
    L = function (P, M) {
      var D = M.get(P.getType()) || M.get("unstyled"),
        j = D.wrapper,
        I = D.element || M.get("unstyled").element;
      return { Element: I, wrapperTemplate: j };
    },
    A = function (P, M) {
      var D = M(P);
      if (!D) return {};
      var j = D.component,
        I = D.props,
        G = D.editable;
      return { CustomComponent: j, customProps: I, customEditable: G };
    },
    K = function (P, M, D, j, I, G) {
      var Z = {
          "data-block": !0,
          "data-editor": M,
          "data-offset-key": D,
          key: P.getKey(),
          ref: G,
        },
        ee = j(P);
      return (
        ee && (Z.className = ee),
        I.customEditable !== void 0 &&
          (Z = i({}, Z, {
            contentEditable: I.customEditable,
            suppressContentEditableWarning: !0,
          })),
        Z
      );
    },
    F = (function (H) {
      n(P, H);
      function P() {
        for (var D, j = arguments.length, I = new Array(j), G = 0; G < j; G++)
          I[G] = arguments[G];
        return (
          (D = H.call.apply(H, [this].concat(I)) || this),
          o(r(D), "wrapperRef", c.createRef()),
          D
        );
      }
      var M = P.prototype;
      return (
        (M.shouldComponentUpdate = function (j) {
          var I = this.props,
            G = I.block,
            Z = I.direction,
            ee = I.tree,
            z = !G.getChildKeys().isEmpty(),
            q =
              G !== j.block ||
              ee !== j.tree ||
              Z !== j.direction ||
              (_(j.selection, j.block.getKey()) && j.forceSelection);
          return z || q;
        }),
        (M.componentDidMount = function () {
          var j = this.props.selection,
            I = j.getEndKey();
          if (!(!j.getHasFocus() || I !== this.props.block.getKey())) {
            var G = this.wrapperRef.current;
            if (G) {
              var Z = h.getScrollParent(G),
                ee = p(Z),
                z;
              if (Z === window) {
                var q = g(G),
                  V = q.y + q.height,
                  Y = x().height;
                (z = V - Y), z > 0 && window.scrollTo(ee.x, ee.y + z + S);
              } else {
                b(G) || k(!1);
                var ae = G,
                  Ee = ae.offsetHeight + ae.offsetTop,
                  ve = Z.offsetHeight + ee.y;
                (z = Ee - ve), z > 0 && f.setTop(Z, f.getTop(Z) + z + S);
              }
            }
          }
        }),
        (M.render = function () {
          var j = this,
            I = this.props,
            G = I.block,
            Z = I.blockRenderMap,
            ee = I.blockRendererFn,
            z = I.blockStyleFn,
            q = I.contentState,
            V = I.decorator,
            Y = I.editorKey,
            ae = I.editorState,
            Ee = I.customStyleFn,
            ve = I.customStyleMap,
            te = I.direction,
            ne = I.forceSelection,
            ue = I.selection,
            be = I.tree,
            Oe = null;
          G.children.size &&
            (Oe = G.children.reduce(function (Ue, ft) {
              var wt = s.encode(ft, 0, 0),
                Ve = q.getBlockForKey(ft),
                Be = A(Ve, ee),
                bt = Be.CustomComponent || P,
                Nt = L(Ve, Z),
                pe = Nt.Element,
                ge = Nt.wrapperTemplate,
                ce = K(Ve, Y, wt, z, Be, null),
                ke = i({}, j.props, {
                  tree: ae.getBlockTree(ft),
                  blockProps: Be.customProps,
                  offsetKey: wt,
                  block: Ve,
                });
              return (
                Ue.push(c.createElement(pe, ce, c.createElement(bt, ke))),
                !ge || E(Ve, q) || N(ge, pe, Ue),
                Ue
              );
            }, []));
          var ze = G.getKey(),
            et = s.encode(ze, 0, 0),
            Le = A(G, ee),
            le = Le.CustomComponent,
            oe =
              le != null
                ? c.createElement(
                    le,
                    t({}, this.props, {
                      tree: ae.getBlockTree(ze),
                      blockProps: Le.customProps,
                      offsetKey: et,
                      block: G,
                    })
                  )
                : c.createElement(l, {
                    block: G,
                    children: Oe,
                    contentState: q,
                    customStyleFn: Ee,
                    customStyleMap: ve,
                    decorator: V,
                    direction: te,
                    forceSelection: ne,
                    hasSelection: _(ue, ze),
                    selection: ue,
                    tree: be,
                  });
          if (G.getParentKey()) return oe;
          var fe = L(G, Z),
            Te = fe.Element,
            xt = K(G, Y, et, z, Le, this.wrapperRef);
          return c.createElement(Te, xt, oe);
        }),
        P
      );
    })(c.Component);
  return (ec = F), ec;
}
var tc, Xm;
function UD() {
  if (Xm) return tc;
  Xm = 1;
  var e = Xn;
  function t() {
    return (
      (t =
        e ||
        function (c) {
          for (var f = 1; f < arguments.length; f++) {
            var h = arguments[f];
            for (var g in h)
              Object.prototype.hasOwnProperty.call(h, g) && (c[g] = h[g]);
          }
          return c;
        }),
      t.apply(this, arguments)
    );
  }
  function r(c, f) {
    (c.prototype = Object.create(f.prototype)),
      (c.prototype.constructor = c),
      (c.__proto__ = f);
  }
  var n = zD(),
    i = Gr,
    o = U,
    l = jt,
    s = (function (c) {
      r(f, c);
      function f() {
        return c.apply(this, arguments) || this;
      }
      var h = f.prototype;
      return (
        (h.shouldComponentUpdate = function (p) {
          var x = this.props.editorState,
            w = p.editorState,
            k = x.getDirectionMap(),
            b = w.getDirectionMap();
          if (k !== b) return !0;
          var S = x.getSelection().getHasFocus(),
            _ = w.getSelection().getHasFocus();
          if (S !== _) return !0;
          var E = w.getNativelyRenderedContent(),
            N = x.isInCompositionMode(),
            L = w.isInCompositionMode();
          if (
            x === w ||
            (E !== null && w.getCurrentContent() === E) ||
            (N && L)
          )
            return !1;
          var A = x.getCurrentContent(),
            K = w.getCurrentContent(),
            F = x.getDecorator(),
            H = w.getDecorator();
          return N !== L || A !== K || F !== H || w.mustForceSelection();
        }),
        (h.render = function () {
          for (
            var p = this.props,
              x = p.blockRenderMap,
              w = p.blockRendererFn,
              k = p.blockStyleFn,
              b = p.customStyleMap,
              S = p.customStyleFn,
              _ = p.editorState,
              E = p.editorKey,
              N = p.textDirectionality,
              L = _.getCurrentContent(),
              A = _.getSelection(),
              K = _.mustForceSelection(),
              F = _.getDecorator(),
              H = l(_.getDirectionMap()),
              P = L.getBlocksAsArray(),
              M = P[0],
              D = [],
              j = M;
            j;

          ) {
            var I = j.getKey(),
              G = {
                blockRenderMap: x,
                blockRendererFn: w,
                blockStyleFn: k,
                contentState: L,
                customStyleFn: S,
                customStyleMap: b,
                decorator: F,
                editorKey: E,
                editorState: _,
                forceSelection: K,
                selection: A,
                block: j,
                direction: N || H.get(I),
                tree: _.getBlockTree(I),
              },
              Z = x.get(j.getType()) || x.get("unstyled"),
              ee = Z.wrapper;
            D.push({
              block: o.createElement(n, t({ key: I }, G)),
              wrapperTemplate: ee,
              key: I,
              offsetKey: i.encode(I, 0, 0),
            });
            var z = j.getNextSiblingKey();
            j = z ? L.getBlockForKey(z) : null;
          }
          for (var q = [], V = 0; V < D.length; ) {
            var Y = D[V];
            if (Y.wrapperTemplate) {
              var ae = [];
              do ae.push(D[V].block), V++;
              while (
                V < D.length &&
                D[V].wrapperTemplate === Y.wrapperTemplate
              );
              var Ee = o.cloneElement(
                Y.wrapperTemplate,
                { key: Y.key + "-wrap", "data-offset-key": Y.offsetKey },
                ae
              );
              q.push(Ee);
            } else q.push(Y.block), V++;
          }
          return o.createElement("div", { "data-contents": "true" }, q);
        }),
        f
      );
    })(o.Component);
  return (tc = s), tc;
}
var HD = Xn;
function kf() {
  return (
    (kf =
      HD ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    kf.apply(this, arguments)
  );
}
function WD(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function qD(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t);
}
function VD(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var GD = Kx,
  Zm = Gr,
  dl = U,
  ev = zd,
  JD = js,
  YD = Rd,
  QD = Ls,
  XD = Qn,
  ZD = Ux,
  e2 = As,
  t2 = Vx,
  r2 = Ce,
  n2 = Sa,
  i2 = jt,
  tv = 10,
  rv = function (t, r) {
    return t.getAnchorKey() === r || t.getFocusKey() === r;
  },
  o2 = (function (e) {
    qD(t, e);
    function t() {
      for (var n, i = arguments.length, o = new Array(i), l = 0; l < i; l++)
        o[l] = arguments[l];
      return (
        (n = e.call.apply(e, [this].concat(o)) || this),
        VD(WD(n), "_node", void 0),
        n
      );
    }
    var r = t.prototype;
    return (
      (r.shouldComponentUpdate = function (i) {
        return (
          this.props.block !== i.block ||
          this.props.tree !== i.tree ||
          this.props.direction !== i.direction ||
          (rv(i.selection, i.block.getKey()) && i.forceSelection)
        );
      }),
      (r.componentDidMount = function () {
        if (!this.props.preventScroll) {
          var i = this.props.selection,
            o = i.getEndKey();
          if (!(!i.getHasFocus() || o !== this.props.block.getKey())) {
            var l = this._node;
            if (l != null) {
              var s = JD.getScrollParent(l),
                c = e2(s),
                f;
              if (s === window) {
                var h = ZD(l),
                  g = h.y + h.height,
                  p = t2().height;
                (f = g - p), f > 0 && window.scrollTo(c.x, c.y + f + tv);
              } else {
                n2(l) || r2(!1);
                var x = l.offsetHeight + l.offsetTop,
                  w = s.offsetTop + s.offsetHeight,
                  k = w + c.y;
                (f = x - k), f > 0 && ev.setTop(s, ev.getTop(s) + f + tv);
              }
            }
          }
        }
      }),
      (r._renderChildren = function () {
        var i = this,
          o = this.props.block,
          l = o.getKey(),
          s = o.getText(),
          c = this.props.tree.size - 1,
          f = rv(this.props.selection, l);
        return this.props.tree
          .map(function (h, g) {
            var p = h.get("leaves");
            if (p.size === 0) return null;
            var x = p.size - 1,
              w = p
                .map(function (P, M) {
                  var D = Zm.encode(l, g, M),
                    j = P.get("start"),
                    I = P.get("end");
                  return dl.createElement(GD, {
                    key: D,
                    offsetKey: D,
                    block: o,
                    start: j,
                    selection: f ? i.props.selection : null,
                    forceSelection: i.props.forceSelection,
                    text: s.slice(j, I),
                    styleSet: o.getInlineStyleAt(j),
                    customStyleMap: i.props.customStyleMap,
                    customStyleFn: i.props.customStyleFn,
                    isLast: g === c && M === x,
                  });
                })
                .toArray(),
              k = h.get("decoratorKey");
            if (k == null || !i.props.decorator) return w;
            var b = i2(i.props.decorator),
              S = b.getComponentForKey(k);
            if (!S) return w;
            var _ = b.getPropsForKey(k),
              E = Zm.encode(l, g, 0),
              N = p.first().get("start"),
              L = p.last().get("end"),
              A = s.slice(N, L),
              K = o.getEntityAt(h.get("start")),
              F = QD.getHTMLDirIfDifferent(
                YD.getDirection(A),
                i.props.direction
              ),
              H = {
                contentState: i.props.contentState,
                decoratedText: A,
                dir: F,
                start: N,
                end: L,
                blockKey: l,
                entityKey: K,
                offsetKey: E,
              };
            return dl.createElement(S, kf({}, _, H, { key: E }), w);
          })
          .toArray();
      }),
      (r.render = function () {
        var i = this,
          o = this.props,
          l = o.direction,
          s = o.offsetKey,
          c = XD({
            "public/DraftStyleDefault/block": !0,
            "public/DraftStyleDefault/ltr": l === "LTR",
            "public/DraftStyleDefault/rtl": l === "RTL",
          });
        return dl.createElement(
          "div",
          {
            "data-offset-key": s,
            className: c,
            ref: function (h) {
              return (i._node = h);
            },
          },
          this._renderChildren()
        );
      }),
      t
    );
  })(dl.Component),
  Gx = o2,
  rc,
  nv;
function a2() {
  if (nv) return rc;
  nv = 1;
  function e(t) {
    var r = t || "",
      n = arguments.length;
    if (n > 1)
      for (var i = 1; i < n; i++) {
        var o = arguments[i];
        o && (r = (r ? r + " " : "") + o);
      }
    return r;
  }
  return (rc = e), rc;
}
var nc, iv;
function l2() {
  if (iv) return nc;
  iv = 1;
  var e = Xn;
  function t() {
    return (
      (t =
        e ||
        function (x) {
          for (var w = 1; w < arguments.length; w++) {
            var k = arguments[w];
            for (var b in k)
              Object.prototype.hasOwnProperty.call(k, b) && (x[b] = k[b]);
          }
          return x;
        }),
      t.apply(this, arguments)
    );
  }
  function r(x) {
    for (var w = 1; w < arguments.length; w++) {
      var k = arguments[w] != null ? arguments[w] : {},
        b = Object.keys(k);
      typeof Object.getOwnPropertySymbols == "function" &&
        (b = b.concat(
          Object.getOwnPropertySymbols(k).filter(function (S) {
            return Object.getOwnPropertyDescriptor(k, S).enumerable;
          })
        )),
        b.forEach(function (S) {
          n(x, S, k[S]);
        });
    }
    return x;
  }
  function n(x, w, k) {
    return (
      w in x
        ? Object.defineProperty(x, w, {
            value: k,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (x[w] = k),
      x
    );
  }
  function i(x, w) {
    (x.prototype = Object.create(w.prototype)),
      (x.prototype.constructor = x),
      (x.__proto__ = w);
  }
  var o = Gx,
    l = Gr,
    s = U,
    c = Qn,
    f = a2(),
    h = jt,
    g = function (w, k, b, S) {
      return c({
        "public/DraftStyleDefault/unorderedListItem":
          w === "unordered-list-item",
        "public/DraftStyleDefault/orderedListItem": w === "ordered-list-item",
        "public/DraftStyleDefault/reset": b,
        "public/DraftStyleDefault/depth0": k === 0,
        "public/DraftStyleDefault/depth1": k === 1,
        "public/DraftStyleDefault/depth2": k === 2,
        "public/DraftStyleDefault/depth3": k === 3,
        "public/DraftStyleDefault/depth4": k >= 4,
        "public/DraftStyleDefault/listLTR": S === "LTR",
        "public/DraftStyleDefault/listRTL": S === "RTL",
      });
    },
    p = (function (x) {
      i(w, x);
      function w() {
        return x.apply(this, arguments) || this;
      }
      var k = w.prototype;
      return (
        (k.shouldComponentUpdate = function (S) {
          var _ = this.props.editorState,
            E = S.editorState,
            N = _.getDirectionMap(),
            L = E.getDirectionMap();
          if (N !== L) return !0;
          var A = _.getSelection().getHasFocus(),
            K = E.getSelection().getHasFocus();
          if (A !== K) return !0;
          var F = E.getNativelyRenderedContent(),
            H = _.isInCompositionMode(),
            P = E.isInCompositionMode();
          if (
            _ === E ||
            (F !== null && E.getCurrentContent() === F) ||
            (H && P)
          )
            return !1;
          var M = _.getCurrentContent(),
            D = E.getCurrentContent(),
            j = _.getDecorator(),
            I = E.getDecorator();
          return H !== P || M !== D || j !== I || E.mustForceSelection();
        }),
        (k.render = function () {
          for (
            var S = this.props,
              _ = S.blockRenderMap,
              E = S.blockRendererFn,
              N = S.blockStyleFn,
              L = S.customStyleMap,
              A = S.customStyleFn,
              K = S.editorState,
              F = S.editorKey,
              H = S.preventScroll,
              P = S.textDirectionality,
              M = K.getCurrentContent(),
              D = K.getSelection(),
              j = K.mustForceSelection(),
              I = K.getDecorator(),
              G = h(K.getDirectionMap()),
              Z = M.getBlocksAsArray(),
              ee = [],
              z = null,
              q = null,
              V = 0;
            V < Z.length;
            V++
          ) {
            var Y = Z[V],
              ae = Y.getKey(),
              Ee = Y.getType(),
              ve = E(Y),
              te = void 0,
              ne = void 0,
              ue = void 0;
            ve && ((te = ve.component), (ne = ve.props), (ue = ve.editable));
            var be = P || G.get(ae),
              Oe = l.encode(ae, 0, 0),
              ze = {
                contentState: M,
                block: Y,
                blockProps: ne,
                blockStyleFn: N,
                customStyleMap: L,
                customStyleFn: A,
                decorator: I,
                direction: be,
                forceSelection: j,
                offsetKey: Oe,
                preventScroll: H,
                selection: D,
                tree: K.getBlockTree(ae),
              },
              et = _.get(Ee) || _.get("unstyled"),
              Le = et.wrapper,
              le = et.element || _.get("unstyled").element,
              oe = Y.getDepth(),
              fe = "";
            if ((N && (fe = N(Y)), le === "li")) {
              var Te = q !== Le || z === null || oe > z;
              fe = f(fe, g(Ee, oe, Te, be));
            }
            var xt = te || o,
              Ue = {
                className: fe,
                "data-block": !0,
                "data-editor": F,
                "data-offset-key": Oe,
                key: ae,
              };
            ue !== void 0 &&
              (Ue = r({}, Ue, {
                contentEditable: ue,
                suppressContentEditableWarning: !0,
              }));
            var ft = s.createElement(
              le,
              Ue,
              s.createElement(xt, t({}, ze, { key: ae }))
            );
            ee.push({ block: ft, wrapperTemplate: Le, key: ae, offsetKey: Oe }),
              Le ? (z = Y.getDepth()) : (z = null),
              (q = Le);
          }
          for (var wt = [], Ve = 0; Ve < ee.length; ) {
            var Be = ee[Ve];
            if (Be.wrapperTemplate) {
              var bt = [];
              do bt.push(ee[Ve].block), Ve++;
              while (
                Ve < ee.length &&
                ee[Ve].wrapperTemplate === Be.wrapperTemplate
              );
              var Nt = s.cloneElement(
                Be.wrapperTemplate,
                { key: Be.key + "-wrap", "data-offset-key": Be.offsetKey },
                bt
              );
              wt.push(Nt);
            } else wt.push(Be.block), Ve++;
          }
          return s.createElement("div", { "data-contents": "true" }, wt);
        }),
        w
      );
    })(s.Component);
  return (nc = p), nc;
}
var s2 = bn,
  u2 = s2("draft_tree_data_support"),
  c2 = u2 ? UD() : l2(),
  Jx = {
    isImage: function (t) {
      return ov(t)[0] === "image";
    },
    isJpeg: function (t) {
      var r = ov(t);
      return Jx.isImage(t) && (r[1] === "jpeg" || r[1] === "pjpeg");
    },
  };
function ov(e) {
  return e.split("/");
}
var f2 = Jx,
  pl = Ce;
function d2(e) {
  var t = e.length;
  if (
    ((!Array.isArray(e) && (typeof e == "object" || typeof e == "function")) ||
      pl(!1),
    typeof t != "number" && pl(!1),
    t === 0 || t - 1 in e || pl(!1),
    typeof e.callee == "function" && pl(!1),
    e.hasOwnProperty)
  )
    try {
      return Array.prototype.slice.call(e);
    } catch {}
  for (var r = Array(t), n = 0; n < t; n++) r[n] = e[n];
  return r;
}
function p2(e) {
  return (
    !!e &&
    (typeof e == "object" || typeof e == "function") &&
    "length" in e &&
    !("setInterval" in e) &&
    typeof e.nodeType != "number" &&
    (Array.isArray(e) || "callee" in e || "item" in e)
  );
}
function h2(e) {
  return p2(e) ? (Array.isArray(e) ? e.slice() : d2(e)) : [e];
}
var m2 = h2;
function Ps(e) {
  return function () {
    return e;
  };
}
var ei = function () {};
ei.thatReturns = Ps;
ei.thatReturnsFalse = Ps(!1);
ei.thatReturnsTrue = Ps(!0);
ei.thatReturnsNull = Ps(null);
ei.thatReturnsThis = function () {
  return this;
};
ei.thatReturnsArgument = function (e) {
  return e;
};
var v2 = ei,
  g2 = f2,
  y2 = m2,
  x2 = v2,
  w2 = new RegExp(
    `\r
`,
    "g"
  ),
  _2 = `
`,
  S2 = { "text/rtf": 1, "text/html": 1 };
function E2(e) {
  if (e.kind == "file") return e.getAsFile();
}
var k2 = (function () {
    function e(r) {
      (this.data = r), (this.types = r.types ? y2(r.types) : []);
    }
    var t = e.prototype;
    return (
      (t.isRichText = function () {
        return this.getHTML() && this.getText()
          ? !0
          : this.isImage()
          ? !1
          : this.types.some(function (n) {
              return S2[n];
            });
      }),
      (t.getText = function () {
        var n;
        return (
          this.data.getData &&
            (this.types.length
              ? this.types.indexOf("text/plain") != -1 &&
                (n = this.data.getData("text/plain"))
              : (n = this.data.getData("Text"))),
          n ? n.replace(w2, _2) : null
        );
      }),
      (t.getHTML = function () {
        if (this.data.getData)
          if (this.types.length) {
            if (this.types.indexOf("text/html") != -1)
              return this.data.getData("text/html");
          } else return this.data.getData("Text");
      }),
      (t.isLink = function () {
        return this.types.some(function (n) {
          return (
            n.indexOf("Url") != -1 ||
            n.indexOf("text/uri-list") != -1 ||
            n.indexOf("text/x-moz-url")
          );
        });
      }),
      (t.getLink = function () {
        if (this.data.getData) {
          if (this.types.indexOf("text/x-moz-url") != -1) {
            var n = this.data.getData("text/x-moz-url").split(`
`);
            return n[0];
          }
          return this.types.indexOf("text/uri-list") != -1
            ? this.data.getData("text/uri-list")
            : this.data.getData("url");
        }
        return null;
      }),
      (t.isImage = function () {
        var n = this.types.some(function (s) {
          return s.indexOf("application/x-moz-file") != -1;
        });
        if (n) return !0;
        for (var i = this.getFiles(), o = 0; o < i.length; o++) {
          var l = i[o].type;
          if (!g2.isImage(l)) return !1;
        }
        return !0;
      }),
      (t.getCount = function () {
        return this.data.hasOwnProperty("items")
          ? this.data.items.length
          : this.data.hasOwnProperty("mozItemCount")
          ? this.data.mozItemCount
          : this.data.files
          ? this.data.files.length
          : null;
      }),
      (t.getFiles = function () {
        return this.data.items
          ? Array.prototype.slice
              .call(this.data.items)
              .map(E2)
              .filter(x2.thatReturnsArgument)
          : this.data.files
          ? Array.prototype.slice.call(this.data.files)
          : [];
      }),
      (t.hasFiles = function () {
        return this.getFiles().length > 0;
      }),
      e
    );
  })(),
  Yx = k2,
  C2 = Ce,
  av = /\.textClipping$/,
  b2 = { "text/plain": !0, "text/html": !0, "text/rtf": !0 },
  N2 = 5e3;
function O2(e, t) {
  var r = 0,
    n = [];
  e.forEach(function (i) {
    T2(i, function (o) {
      r++, o && n.push(o.slice(0, N2)), r == e.length && t(n.join("\r"));
    });
  });
}
function T2(e, t) {
  if (!$r.FileReader || (e.type && !(e.type in b2))) {
    t("");
    return;
  }
  if (e.type === "") {
    var r = "";
    av.test(e.name) && (r = e.name.replace(av, "")), t(r);
    return;
  }
  var n = new FileReader();
  (n.onload = function () {
    var i = n.result;
    typeof i != "string" && C2(!1), t(i);
  }),
    (n.onerror = function () {
      t("");
    }),
    n.readAsText(e);
}
var Qx = O2;
function D2(e) {
  return e === "handled" || e === !0;
}
var Fs = D2,
  L2 = Yx,
  Xx = It,
  Zx = Me,
  B2 = Ms,
  R2 = Rs,
  M2 = Qx,
  I2 = Nx,
  j2 = kx,
  lv = Fs,
  ic = jt;
function A2(e, t) {
  var r = null,
    n = null,
    i = R2(e.currentTarget);
  if (typeof i.caretRangeFromPoint == "function") {
    var o = i.caretRangeFromPoint(e.x, e.y);
    (r = o.startContainer), (n = o.startOffset);
  } else if (e.rangeParent) (r = e.rangeParent), (n = e.rangeOffset);
  else return null;
  (r = ic(r)), (n = ic(n));
  var l = ic(B2(r));
  return I2(t, l, n, l, n);
}
var P2 = {
  onDragEnd: function (t) {
    t.exitCurrentMode(), sv(t);
  },
  onDrop: function (t, r) {
    var n = new L2(r.nativeEvent.dataTransfer),
      i = t._latestEditorState,
      o = A2(r.nativeEvent, i);
    if (
      (r.preventDefault(), (t._dragCount = 0), t.exitCurrentMode(), o != null)
    ) {
      var l = n.getFiles();
      if (l.length > 0) {
        if (t.props.handleDroppedFiles && lv(t.props.handleDroppedFiles(o, l)))
          return;
        M2(l, function (c) {
          c && t.update(uv(i, o, c));
        });
        return;
      }
      var s = t._internalDrag ? "internal" : "external";
      (t.props.handleDrop && lv(t.props.handleDrop(o, n, s))) ||
        (t._internalDrag
          ? t.update(F2(i, o))
          : t.update(uv(i, o, n.getText()))),
        sv(t);
    }
  },
};
function sv(e) {
  e._internalDrag = !1;
  var t = e.editorContainer;
  if (t) {
    var r = new MouseEvent("mouseup", {
      view: j2(t),
      bubbles: !0,
      cancelable: !0,
    });
    t.dispatchEvent(r);
  }
}
function F2(e, t) {
  var r = Xx.moveText(e.getCurrentContent(), e.getSelection(), t);
  return Zx.push(e, r, "insert-fragment");
}
function uv(e, t, r) {
  var n = Xx.insertText(e.getCurrentContent(), t, r, e.getCurrentInlineStyle());
  return Zx.push(e, n, "insert-fragment");
}
var $2 = P2;
function K2(e) {
  var t = e.getSelection(),
    r = t.getAnchorKey(),
    n = e.getBlockTree(r),
    i = t.getStartOffset(),
    o = !1;
  return (
    n.some(function (l) {
      return i === l.get("start")
        ? ((o = !0), !0)
        : i < l.get("end")
        ? l.get("leaves").some(function (s) {
            var c = s.get("start");
            return i === c ? ((o = !0), !0) : !1;
          })
        : !1;
    }),
    o
  );
}
var z2 = K2;
(function (e, t) {
  if (e.setImmediate) return;
  var r = 1,
    n = {},
    i = !1,
    o = e.document,
    l;
  function s(_) {
    typeof _ != "function" && (_ = new Function("" + _));
    for (var E = new Array(arguments.length - 1), N = 0; N < E.length; N++)
      E[N] = arguments[N + 1];
    var L = { callback: _, args: E };
    return (n[r] = L), l(r), r++;
  }
  function c(_) {
    delete n[_];
  }
  function f(_) {
    var E = _.callback,
      N = _.args;
    switch (N.length) {
      case 0:
        E();
        break;
      case 1:
        E(N[0]);
        break;
      case 2:
        E(N[0], N[1]);
        break;
      case 3:
        E(N[0], N[1], N[2]);
        break;
      default:
        E.apply(t, N);
        break;
    }
  }
  function h(_) {
    if (i) setTimeout(h, 0, _);
    else {
      var E = n[_];
      if (E) {
        i = !0;
        try {
          f(E);
        } finally {
          c(_), (i = !1);
        }
      }
    }
  }
  function g() {
    l = function (_) {
      process.nextTick(function () {
        h(_);
      });
    };
  }
  function p() {
    if (e.postMessage && !e.importScripts) {
      var _ = !0,
        E = e.onmessage;
      return (
        (e.onmessage = function () {
          _ = !1;
        }),
        e.postMessage("", "*"),
        (e.onmessage = E),
        _
      );
    }
  }
  function x() {
    var _ = "setImmediate$" + Math.random() + "$",
      E = function (N) {
        N.source === e &&
          typeof N.data == "string" &&
          N.data.indexOf(_) === 0 &&
          h(+N.data.slice(_.length));
      };
    e.addEventListener
      ? e.addEventListener("message", E, !1)
      : e.attachEvent("onmessage", E),
      (l = function (N) {
        e.postMessage(_ + N, "*");
      });
  }
  function w() {
    var _ = new MessageChannel();
    (_.port1.onmessage = function (E) {
      var N = E.data;
      h(N);
    }),
      (l = function (E) {
        _.port2.postMessage(E);
      });
  }
  function k() {
    var _ = o.documentElement;
    l = function (E) {
      var N = o.createElement("script");
      (N.onreadystatechange = function () {
        h(E), (N.onreadystatechange = null), _.removeChild(N), (N = null);
      }),
        _.appendChild(N);
    };
  }
  function b() {
    l = function (_) {
      setTimeout(h, 0, _);
    };
  }
  var S = Object.getPrototypeOf && Object.getPrototypeOf(e);
  (S = S && S.setTimeout ? S : e),
    {}.toString.call(e.process) === "[object process]"
      ? g()
      : p()
      ? x()
      : e.MessageChannel
      ? w()
      : o && "onreadystatechange" in o.createElement("script")
      ? k()
      : b(),
    (S.setImmediate = s),
    (S.clearImmediate = c);
})(typeof self > "u" ? $r : self);
var U2 = $r.setImmediate,
  H2 = It,
  Cf = Me,
  W2 = At,
  cv = Pd,
  q2 = Fs,
  V2 = z2,
  fv = jt,
  G2 = U2,
  J2 = "'",
  Y2 = "/",
  Q2 = W2.isBrowser("Firefox");
function X2(e) {
  return Q2 && (e == J2 || e == Y2);
}
function dv(e, t, r, n, i) {
  var o = H2.replaceText(e.getCurrentContent(), e.getSelection(), t, r, n);
  return Cf.push(e, o, "insert-characters", i);
}
function Z2(e, t) {
  e._pendingStateFromBeforeInput !== void 0 &&
    (e.update(e._pendingStateFromBeforeInput),
    (e._pendingStateFromBeforeInput = void 0));
  var r = e._latestEditorState,
    n = t.data;
  if (n) {
    if (
      e.props.handleBeforeInput &&
      q2(e.props.handleBeforeInput(n, r, t.timeStamp))
    ) {
      t.preventDefault();
      return;
    }
    var i = r.getSelection(),
      o = i.getStartOffset(),
      l = i.getAnchorKey();
    if (!i.isCollapsed()) {
      t.preventDefault(),
        e.update(
          dv(
            r,
            n,
            r.getCurrentInlineStyle(),
            cv(r.getCurrentContent(), r.getSelection()),
            !0
          )
        );
      return;
    }
    var s = dv(
        r,
        n,
        r.getCurrentInlineStyle(),
        cv(r.getCurrentContent(), r.getSelection()),
        !1
      ),
      c = !1;
    if ((c || (c = V2(e._latestCommittedEditorState)), !c)) {
      var f = r.getBlockTree(l),
        h = s.getBlockTree(l);
      c =
        f.size !== h.size ||
        f.zip(h).some(function (g) {
          var p = g[0],
            x = g[1],
            w = p.get("start"),
            k = w + (w >= o ? n.length : 0),
            b = p.get("end"),
            S = b + (b >= o ? n.length : 0),
            _ = x.get("start"),
            E = x.get("end"),
            N = x.get("decoratorKey");
          return (
            p.get("decoratorKey") !== N ||
            p.get("leaves").size !== x.get("leaves").size ||
            k !== _ ||
            S !== E ||
            (N != null && E - _ !== b - w)
          );
        });
    }
    if (
      (c || (c = X2(n)),
      c ||
        (c = fv(s.getDirectionMap()).get(l) !== fv(r.getDirectionMap()).get(l)),
      c)
    ) {
      t.preventDefault(), (s = Cf.set(s, { forceSelection: !0 })), e.update(s);
      return;
    }
    (s = Cf.set(s, { nativelyRenderedContent: s.getCurrentContent() })),
      (e._pendingStateFromBeforeInput = s),
      G2(function () {
        e._pendingStateFromBeforeInput !== void 0 &&
          (e.update(e._pendingStateFromBeforeInput),
          (e._pendingStateFromBeforeInput = void 0));
      });
  }
}
var eL = Z2,
  tL = Me,
  pv = $d,
  rL = jx;
function nL(e, t) {
  var r = t.currentTarget.ownerDocument;
  if (!e.props.preserveSelectionOnBlur && rL(r) === r.body) {
    var n = r.defaultView.getSelection(),
      i = e.editor;
    n.rangeCount === 1 &&
      pv(i, n.anchorNode) &&
      pv(i, n.focusNode) &&
      n.removeAllRanges();
  }
  var o = e._latestEditorState,
    l = o.getSelection();
  if (l.getHasFocus()) {
    var s = l.set("hasFocus", !1);
    e.props.onBlur && e.props.onBlur(t), e.update(tL.acceptSelection(o, s));
  }
}
var iL = nL,
  oL = Me;
function aL(e, t) {
  e.setMode("composite"),
    e.update(oL.set(e._latestEditorState, { inCompositionMode: !0 })),
    e._onCompositionStart(t);
}
var lL = aL,
  sL = Ns;
function uL(e) {
  var t = e.getSelection();
  return t.isCollapsed() ? null : sL(e.getCurrentContent(), t);
}
var ew = uL,
  cL = ew;
function fL(e, t) {
  var r = e._latestEditorState,
    n = r.getSelection();
  if (n.isCollapsed()) {
    t.preventDefault();
    return;
  }
  e.setClipboard(cL(e._latestEditorState));
}
var dL = fL;
function pL(e) {
  if (!e || !("ownerDocument" in e)) return !1;
  if ("ownerDocument" in e) {
    var t = e;
    if (!t.ownerDocument.defaultView) return t instanceof Node;
    if (t instanceof t.ownerDocument.defaultView.Node) return !0;
  }
  return !1;
}
var hL = pL,
  mL = It,
  vL = Me,
  gL = js,
  yL = ew,
  xL = As,
  wL = hL;
function _L(e, t) {
  var r = e._latestEditorState,
    n = r.getSelection(),
    i = t.target,
    o;
  if (n.isCollapsed()) {
    t.preventDefault();
    return;
  }
  if (wL(i)) {
    var l = i;
    o = xL(gL.getScrollParent(l));
  }
  var s = yL(r);
  e.setClipboard(s),
    e.setMode("cut"),
    setTimeout(function () {
      e.restoreEditorDOM(o), e.exitCurrentMode(), e.update(SL(r));
    }, 0);
}
function SL(e) {
  var t = mL.removeRange(e.getCurrentContent(), e.getSelection(), "forward");
  return vL.push(e, t, "remove-range");
}
var EL = _L;
function kL(e, t) {
  e.setMode("drag"), t.preventDefault();
}
var CL = kL;
function bL(e) {
  (e._internalDrag = !0), e.setMode("drag");
}
var NL = bL,
  hv = Me,
  OL = At;
function TL(e, t) {
  var r = e._latestEditorState,
    n = r.getSelection();
  if (!n.getHasFocus()) {
    var i = n.set("hasFocus", !0);
    e.props.onFocus && e.props.onFocus(t),
      OL.isBrowser("Chrome < 60.0.3081.0")
        ? e.update(hv.forceSelection(r, i))
        : e.update(hv.acceptSelection(r, i));
  }
}
var DL = TL,
  LL = Ce,
  tw = 55296,
  BL = 56319,
  RL = 56320,
  rw = 57343,
  ML = /[\uD800-\uDFFF]/;
function nw(e) {
  return tw <= e && e <= rw;
}
function IL(e, t) {
  if (((0 <= t && t < e.length) || LL(!1), t + 1 === e.length)) return !1;
  var r = e.charCodeAt(t),
    n = e.charCodeAt(t + 1);
  return tw <= r && r <= BL && RL <= n && n <= rw;
}
function Ud(e) {
  return ML.test(e);
}
function Pi(e, t) {
  return 1 + nw(e.charCodeAt(t));
}
function jL(e) {
  if (!Ud(e)) return e.length;
  for (var t = 0, r = 0; r < e.length; r += Pi(e, r)) t++;
  return t;
}
function iw(e, t, r) {
  if (((t = t || 0), (r = r === void 0 ? 1 / 0 : r || 0), !Ud(e)))
    return e.substr(t, r);
  var n = e.length;
  if (n <= 0 || t > n || r <= 0) return "";
  var i = 0;
  if (t > 0) {
    for (; t > 0 && i < n; t--) i += Pi(e, i);
    if (i >= n) return "";
  } else if (t < 0) {
    for (i = n; t < 0 && 0 < i; t++) i -= Pi(e, i - 1);
    i < 0 && (i = 0);
  }
  var o = n;
  if (r < n) for (o = i; r > 0 && o < n; r--) o += Pi(e, o);
  return e.substring(i, o);
}
function AL(e, t, r) {
  (t = t || 0),
    (r = r === void 0 ? 1 / 0 : r || 0),
    t < 0 && (t = 0),
    r < 0 && (r = 0);
  var n = Math.abs(r - t);
  return (t = t < r ? t : r), iw(e, t, n);
}
function PL(e) {
  for (var t = [], r = 0; r < e.length; r += Pi(e, r)) t.push(e.codePointAt(r));
  return t;
}
var FL = {
    getCodePoints: PL,
    getUTF16Length: Pi,
    hasSurrogateUnit: Ud,
    isCodeUnitInSurrogateRange: nw,
    isSurrogatePair: IL,
    strlen: jL,
    substring: AL,
    substr: iw,
  },
  ti = FL;
function $L(e, t) {
  var r = e.getSelection(),
    n = e.getCurrentContent(),
    i = r.getStartKey(),
    o = r.getStartOffset(),
    l = i,
    s = 0;
  if (t > o) {
    var c = n.getKeyBefore(i);
    if (c == null) l = i;
    else {
      l = c;
      var f = n.getBlockForKey(c);
      s = f.getText().length;
    }
  } else s = o - t;
  return r.merge({ focusKey: l, focusOffset: s, isBackward: !0 });
}
var Hd = $L,
  KL = It,
  zL = bn,
  mv = zL("draft_tree_data_support");
function UL(e, t, r) {
  var n = e.getSelection(),
    i = e.getCurrentContent(),
    o = n,
    l = n.getAnchorKey(),
    s = n.getFocusKey(),
    c = i.getBlockForKey(l);
  if (mv && r === "forward" && l !== s) return i;
  if (n.isCollapsed()) {
    if (r === "forward") {
      if (e.isSelectionAtEndOfContent()) return i;
      if (mv) {
        var f = n.getAnchorOffset() === i.getBlockForKey(l).getLength();
        if (f) {
          var h = i.getBlockForKey(c.nextSibling);
          if (!h || h.getLength() === 0) return i;
        }
      }
    } else if (e.isSelectionAtStartOfContent()) return i;
    if (((o = t(e)), o === n)) return i;
  }
  return KL.removeRange(i, o, r);
}
var Ea = UL,
  HL = Me,
  WL = ti,
  qL = Hd,
  VL = Ea;
function GL(e) {
  var t = VL(
    e,
    function (n) {
      var i = n.getSelection(),
        o = n.getCurrentContent(),
        l = i.getAnchorKey(),
        s = i.getAnchorOffset(),
        c = o.getBlockForKey(l).getText()[s - 1];
      return qL(n, c ? WL.getUTF16Length(c, 0) : 1);
    },
    "backward"
  );
  if (t === e.getCurrentContent()) return e;
  var r = e.getSelection();
  return HL.push(
    e,
    t.set("selectionBefore", r),
    r.isCollapsed() ? "backspace-character" : "remove-range"
  );
}
var ow = GL,
  JL = It,
  YL = Gr,
  QL = Me,
  XL = At,
  ZL = Lx,
  eB = ZL.notEmptyKey,
  tB = Ms,
  rB = ow,
  nB = jt,
  iB = XL.isEngine("Gecko"),
  oB = `

`;
function aB(e, t) {
  switch (e) {
    case "deleteContentBackward":
      return rB(t);
  }
  return t;
}
function lB(e, t) {
  e._pendingStateFromBeforeInput !== void 0 &&
    (e.update(e._pendingStateFromBeforeInput),
    (e._pendingStateFromBeforeInput = void 0));
  var r = e.editor,
    n = r.ownerDocument.defaultView.getSelection(),
    i = n.anchorNode,
    o = n.isCollapsed,
    l =
      (i == null ? void 0 : i.nodeType) !== Node.TEXT_NODE &&
      (i == null ? void 0 : i.nodeType) !== Node.ELEMENT_NODE;
  if (!(i == null || l)) {
    if (
      i.nodeType === Node.TEXT_NODE &&
      (i.previousSibling !== null || i.nextSibling !== null)
    ) {
      var s = i.parentNode;
      if (s == null) return;
      i.nodeValue = s.textContent;
      for (var c = s.firstChild; c != null; c = c.nextSibling)
        c !== i && s.removeChild(c);
    }
    var f = i.textContent,
      h = e._latestEditorState,
      g = nB(tB(i)),
      p = YL.decode(g),
      x = p.blockKey,
      w = p.decoratorKey,
      k = p.leafKey,
      b = h.getBlockTree(x).getIn([w, "leaves", k]),
      S = b.start,
      _ = b.end,
      E = h.getCurrentContent(),
      N = E.getBlockForKey(x),
      L = N.getText().slice(S, _);
    if ((f.endsWith(oB) && (f = f.slice(0, -1)), f === L)) {
      var A = t.nativeEvent.inputType;
      if (A) {
        var K = aB(A, h);
        if (K !== h) {
          e.restoreEditorDOM(), e.update(K);
          return;
        }
      }
      return;
    }
    var F = h.getSelection(),
      H = F.merge({ anchorOffset: S, focusOffset: _, isBackward: !1 }),
      P = N.getEntityAt(S),
      M = eB(P) ? E.getEntity(P) : null,
      D = M != null ? M.getMutability() : null,
      j = D === "MUTABLE",
      I = j ? "spellcheck-change" : "apply-entity",
      G = JL.replaceText(
        E,
        H,
        f,
        N.getInlineStyleAt(S),
        j ? N.getEntityAt(S) : null
      ),
      Z,
      ee,
      z,
      q;
    if (iB)
      (Z = n.anchorOffset),
        (ee = n.focusOffset),
        (z = S + Math.min(Z, ee)),
        (q = z + Math.abs(Z - ee)),
        (Z = z),
        (ee = q);
    else {
      var V = f.length - L.length;
      (z = F.getStartOffset()),
        (q = F.getEndOffset()),
        (Z = o ? q + V : z),
        (ee = q + V);
    }
    var Y = G.merge({
      selectionBefore: E.getSelectionAfter(),
      selectionAfter: F.merge({ anchorOffset: Z, focusOffset: ee }),
    });
    e.update(QL.push(h, Y, I));
  }
}
var sB = lB,
  uB = Is;
function cB(e) {
  return (
    e.which === uB.RETURN &&
    (e.getModifierState("Shift") ||
      e.getModifierState("Alt") ||
      e.getModifierState("Control"))
  );
}
var fB = cB,
  dB = At,
  pB = fB,
  oc = dB.isPlatform("Mac OS X"),
  aw = {
    isCtrlKeyCommand: function (t) {
      return !!t.ctrlKey && !t.altKey;
    },
    isOptionKeyCommand: function (t) {
      return oc && t.altKey;
    },
    usesMacOSHeuristics: function () {
      return oc;
    },
    hasCommandModifier: function (t) {
      return oc ? !!t.metaKey && !t.altKey : aw.isCtrlKeyCommand(t);
    },
    isSoftNewlineEvent: pB,
  },
  Wd = aw,
  vv = It,
  gv = Me,
  hB = Ns,
  mB = jt,
  ac = null,
  vB = {
    cut: function (t) {
      var r = t.getCurrentContent(),
        n = t.getSelection(),
        i = null;
      if (n.isCollapsed()) {
        var o = n.getAnchorKey(),
          l = r.getBlockForKey(o).getLength();
        if (l === n.getAnchorOffset()) {
          var s = r.getKeyAfter(o);
          if (s == null) return t;
          i = n.set("focusKey", s).set("focusOffset", 0);
        } else i = n.set("focusOffset", l);
      } else i = n;
      (i = mB(i)), (ac = hB(r, i));
      var c = vv.removeRange(r, i, "forward");
      return c === r ? t : gv.push(t, c, "remove-range");
    },
    paste: function (t) {
      if (!ac) return t;
      var r = vv.replaceWithFragment(
        t.getCurrentContent(),
        t.getSelection(),
        ac
      );
      return gv.push(t, r, "insert-fragment");
    },
  },
  gB = vB,
  yB = At,
  xB = Ce,
  wB = yB.isBrowser("Chrome");
function _B(e) {
  for (
    var t = e.cloneRange(), r = [], n = e.endContainer;
    n != null;
    n = n.parentNode
  ) {
    var i = n === e.commonAncestorContainer;
    i
      ? t.setStart(e.startContainer, e.startOffset)
      : t.setStart(t.endContainer, 0);
    var o = Array.from(t.getClientRects());
    if ((r.push(o), i)) {
      var l;
      return r.reverse(), (l = []).concat.apply(l, r);
    }
    t.setEndBefore(n);
  }
  xB(!1);
}
var SB = wB
    ? _B
    : function (e) {
        return Array.from(e.getClientRects());
      },
  lw = SB,
  EB = ti,
  kB = Rs,
  yv = lw,
  bf = Ce;
function CB(e) {
  var t = getComputedStyle(e),
    r = kB(e),
    n = r.createElement("div");
  (n.style.fontFamily = t.fontFamily),
    (n.style.fontSize = t.fontSize),
    (n.style.fontStyle = t.fontStyle),
    (n.style.fontWeight = t.fontWeight),
    (n.style.lineHeight = t.lineHeight),
    (n.style.position = "absolute"),
    (n.textContent = "M");
  var i = r.body;
  i || bf(!1), i.appendChild(n);
  var o = n.getBoundingClientRect();
  return i.removeChild(n), o.height;
}
function xv(e, t) {
  for (
    var r = 1 / 0, n = 1 / 0, i = -1 / 0, o = -1 / 0, l = 0;
    l < e.length;
    l++
  ) {
    var s = e[l];
    s.width === 0 ||
      s.width === 1 ||
      ((r = Math.min(r, s.top)),
      (n = Math.min(n, s.bottom)),
      (i = Math.max(i, s.top)),
      (o = Math.max(o, s.bottom)));
  }
  return i <= n && i - r < t && o - n < t;
}
function bB(e) {
  switch (e.nodeType) {
    case Node.DOCUMENT_TYPE_NODE:
      return 0;
    case Node.TEXT_NODE:
    case Node.PROCESSING_INSTRUCTION_NODE:
    case Node.COMMENT_NODE:
      return e.length;
    default:
      return e.childNodes.length;
  }
}
function NB(e) {
  e.collapsed || bf(!1), (e = e.cloneRange());
  var t = e.startContainer;
  t.nodeType !== 1 && (t = t.parentNode);
  var r = CB(t),
    n = e.endContainer,
    i = e.endOffset;
  for (
    e.setStart(e.startContainer, 0);
    xv(yv(e), r) &&
    ((n = e.startContainer),
    (i = e.startOffset),
    n.parentNode || bf(!1),
    e.setStartBefore(n),
    !(n.nodeType === 1 && getComputedStyle(n).display !== "inline"));

  );
  var o = n,
    l = i - 1;
  do {
    for (var s = o.nodeValue, c = l; c >= 0; c--)
      if (!(s != null && c > 0 && EB.isSurrogatePair(s, c - 1)))
        if ((e.setStart(o, c), xv(yv(e), r))) (n = o), (i = c);
        else break;
    if (c === -1 || o.childNodes.length === 0) break;
    (o = o.childNodes[c]), (l = bB(o));
  } while (!0);
  return e.setStart(n, i), e;
}
var OB = NB,
  TB = Me,
  DB = OB,
  LB = Ox,
  BB = Hd,
  RB = Ea;
function MB(e, t) {
  var r = RB(
    e,
    function (n) {
      var i = n.getSelection();
      if (i.isCollapsed() && i.getAnchorOffset() === 0) return BB(n, 1);
      var o = t.currentTarget.ownerDocument,
        l = o.defaultView.getSelection(),
        s = l.getRangeAt(0);
      return (
        (s = DB(s)),
        LB(
          n,
          null,
          s.endContainer,
          s.endOffset,
          s.startContainer,
          s.startOffset
        ).selectionState
      );
    },
    "backward"
  );
  return r === e.getCurrentContent() ? e : TB.push(e, r, "remove-range");
}
var IB = MB,
  jB = `[.,+*?$|#{}()'\\^\\-\\[\\]\\\\\\/!@%"~=<>_:;・、。〈-】〔-〟：-？！-／［-｀｛-･⸮؟٪-٬؛،؍﴾﴿᠁।၊။‐-‧‰-⁞¡-±´-¸º»¿]`,
  AB = {
    getPunctuation: function () {
      return jB;
    },
  },
  PB = AB,
  FB = PB.getPunctuation(),
  sw = "['‘’]",
  Fi = "\\s|(?![_])" + FB,
  $B = "^(?:" + Fi + ")*(?:" + sw + "|(?!" + Fi + ").)*(?:(?!" + Fi + ").)",
  KB = new RegExp($B),
  zB = "(?:(?!" + Fi + ").)(?:" + sw + "|(?!" + Fi + ").)*(?:" + Fi + ")*$",
  UB = new RegExp(zB);
function wv(e, t) {
  var r = t ? UB.exec(e) : KB.exec(e);
  return r ? r[0] : e;
}
var HB = {
    getBackward: function (t) {
      return wv(t, !0);
    },
    getForward: function (t) {
      return wv(t, !1);
    },
  },
  uw = HB,
  WB = uw,
  qB = Me,
  _v = Hd,
  VB = Ea;
function GB(e) {
  var t = VB(
    e,
    function (r) {
      var n = r.getSelection(),
        i = n.getStartOffset();
      if (i === 0) return _v(r, 1);
      var o = n.getStartKey(),
        l = r.getCurrentContent(),
        s = l.getBlockForKey(o).getText().slice(0, i),
        c = WB.getBackward(s);
      return _v(r, c.length || 1);
    },
    "backward"
  );
  return t === e.getCurrentContent() ? e : qB.push(e, t, "remove-range");
}
var JB = GB;
function YB(e, t) {
  var r = e.getSelection(),
    n = r.getStartKey(),
    i = r.getStartOffset(),
    o = e.getCurrentContent(),
    l = n,
    s,
    c = o.getBlockForKey(n);
  return (
    t > c.getText().length - i
      ? ((l = o.getKeyAfter(n)), (s = 0))
      : (s = i + t),
    r.merge({ focusKey: l, focusOffset: s })
  );
}
var cw = YB,
  QB = uw,
  XB = Me,
  ZB = cw,
  eR = Ea;
function tR(e) {
  var t = eR(
    e,
    function (r) {
      var n = r.getSelection(),
        i = n.getStartOffset(),
        o = n.getStartKey(),
        l = r.getCurrentContent(),
        s = l.getBlockForKey(o).getText().slice(i),
        c = QB.getForward(s);
      return ZB(r, c.length || 1);
    },
    "forward"
  );
  return t === e.getCurrentContent() ? e : XB.push(e, t, "remove-range");
}
var rR = tR,
  nR = It,
  iR = Me;
function oR(e) {
  var t = nR.splitBlock(e.getCurrentContent(), e.getSelection());
  return iR.push(e, t, "split-block");
}
var aR = oR,
  lR = Me;
function sR(e) {
  var t = e.getSelection(),
    r = t.getEndKey(),
    n = e.getCurrentContent(),
    i = n.getBlockForKey(r).getLength();
  return lR.set(e, {
    selection: t.merge({
      anchorKey: r,
      anchorOffset: i,
      focusKey: r,
      focusOffset: i,
      isBackward: !1,
    }),
    forceSelection: !0,
  });
}
var uR = sR,
  cR = Me;
function fR(e) {
  var t = e.getSelection(),
    r = t.getStartKey();
  return cR.set(e, {
    selection: t.merge({
      anchorKey: r,
      anchorOffset: 0,
      focusKey: r,
      focusOffset: 0,
      isBackward: !1,
    }),
    forceSelection: !0,
  });
}
var dR = fR,
  pR = Me,
  hR = ti,
  mR = cw,
  vR = Ea;
function gR(e) {
  var t = vR(
    e,
    function (n) {
      var i = n.getSelection(),
        o = n.getCurrentContent(),
        l = i.getAnchorKey(),
        s = i.getAnchorOffset(),
        c = o.getBlockForKey(l).getText()[s];
      return mR(n, c ? hR.getUTF16Length(c, 0) : 1);
    },
    "forward"
  );
  if (t === e.getCurrentContent()) return e;
  var r = e.getSelection();
  return pR.push(
    e,
    t.set("selectionBefore", r),
    r.isCollapsed() ? "delete-character" : "remove-range"
  );
}
var yR = gR,
  Sv = It,
  Ev = Me,
  xR = Ns;
function wR(e) {
  var t = e.getSelection();
  if (!t.isCollapsed()) return e;
  var r = t.getAnchorOffset();
  if (r === 0) return e;
  var n = t.getAnchorKey(),
    i = e.getCurrentContent(),
    o = i.getBlockForKey(n),
    l = o.getLength();
  if (l <= 1) return e;
  var s, c;
  r === l
    ? ((s = t.set("anchorOffset", r - 1)), (c = t))
    : ((s = t.set("focusOffset", r + 1)), (c = s.set("anchorOffset", r + 1)));
  var f = xR(i, s),
    h = Sv.removeRange(i, s, "backward"),
    g = h.getSelectionAfter(),
    p = g.getAnchorOffset() - 1,
    x = g.merge({ anchorOffset: p, focusOffset: p }),
    w = Sv.replaceWithFragment(h, x, f),
    k = Ev.push(e, w, "insert-fragment");
  return Ev.acceptSelection(k, c);
}
var _R = wR,
  lc = Me;
function SR(e, t, r) {
  var n = lc.undo(t);
  if (t.getLastChangeType() === "spellcheck-change") {
    var i = n.getCurrentContent();
    r(lc.set(n, { nativelyRenderedContent: i }));
    return;
  }
  if ((e.preventDefault(), !t.getNativelyRenderedContent())) {
    r(n);
    return;
  }
  r(lc.set(t, { nativelyRenderedContent: null })),
    setTimeout(function () {
      r(n);
    }, 0);
}
var ER = SR,
  kR = It,
  fw = Me,
  CR = Wd,
  Rr = Is,
  kv = gB,
  bR = At,
  Cv = Fs,
  NR = IB,
  OR = JB,
  TR = rR,
  DR = aR,
  LR = uR,
  BR = dR,
  RR = ow,
  MR = yR,
  IR = _R,
  jR = ER,
  bv = CR.isOptionKeyCommand,
  Nv = bR.isBrowser("Chrome");
function AR(e, t, r) {
  switch (e) {
    case "redo":
      return fw.redo(t);
    case "delete":
      return MR(t);
    case "delete-word":
      return TR(t);
    case "backspace":
      return RR(t);
    case "backspace-word":
      return OR(t);
    case "backspace-to-start-of-line":
      return NR(t, r);
    case "split-block":
      return DR(t);
    case "transpose-characters":
      return IR(t);
    case "move-selection-to-start-of-block":
      return BR(t);
    case "move-selection-to-end-of-block":
      return LR(t);
    case "secondary-cut":
      return kv.cut(t);
    case "secondary-paste":
      return kv.paste(t);
    default:
      return t;
  }
}
function PR(e, t) {
  var r = t.which,
    n = e._latestEditorState;
  function i(c) {
    var f = e.props[c];
    return f ? (f(t), !0) : !1;
  }
  switch (r) {
    case Rr.RETURN:
      if (
        (t.preventDefault(),
        e.props.handleReturn && Cv(e.props.handleReturn(t, n)))
      )
        return;
      break;
    case Rr.ESC:
      if ((t.preventDefault(), i("onEscape"))) return;
      break;
    case Rr.TAB:
      if (i("onTab")) return;
      break;
    case Rr.UP:
      if (i("onUpArrow")) return;
      break;
    case Rr.RIGHT:
      if (i("onRightArrow")) return;
      break;
    case Rr.DOWN:
      if (i("onDownArrow")) return;
      break;
    case Rr.LEFT:
      if (i("onLeftArrow")) return;
      break;
    case Rr.SPACE:
      Nv && bv(t) && t.preventDefault();
  }
  var o = e.props.keyBindingFn(t);
  if (o == null || o === "") {
    if (r === Rr.SPACE && Nv && bv(t)) {
      var l = kR.replaceText(n.getCurrentContent(), n.getSelection(), " ");
      e.update(fw.push(n, l, "insert-characters"));
    }
    return;
  }
  if (o === "undo") {
    jR(t, n, e.update);
    return;
  }
  if (
    (t.preventDefault(),
    !(
      e.props.handleKeyCommand &&
      Cv(e.props.handleKeyCommand(o, n, t.timeStamp))
    ))
  ) {
    var s = AR(o, n, t);
    s !== n && e.update(s);
  }
}
var FR = PR;
function $R(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var KR = (function () {
    function e(r) {
      $R(this, "_uri", void 0), (this._uri = r);
    }
    var t = e.prototype;
    return (
      (t.toString = function () {
        return this._uri;
      }),
      e
    );
  })(),
  zR = KR,
  UR = At,
  HR = Ce,
  WR = UR.isBrowser("IE <= 9");
function qR(e) {
  var t,
    r = null;
  return (
    !WR &&
      document.implementation &&
      document.implementation.createHTMLDocument &&
      ((t = document.implementation.createHTMLDocument("foo")),
      t.documentElement || HR(!1),
      (t.documentElement.innerHTML = e),
      (r = t.getElementsByTagName("body")[0])),
    r
  );
}
var dw = qR,
  VR = Zn;
function GR(e) {
  return !e || !e.ownerDocument ? !1 : VR(e) && e.nodeName === "A";
}
var JR = GR,
  YR = Zn;
function QR(e) {
  return !e || !e.ownerDocument ? !1 : YR(e) && e.nodeName === "IMG";
}
var XR = QR,
  Tn;
function sc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {},
      n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" &&
      (n = n.concat(
        Object.getOwnPropertySymbols(r).filter(function (i) {
          return Object.getOwnPropertyDescriptor(r, i).enumerable;
        })
      )),
      n.forEach(function (i) {
        st(e, i, r[i]);
      });
  }
  return e;
}
function st(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var ZR = or,
  eM = Yn,
  tM = ar,
  rM = jd,
  Ov = Os,
  pw = zR,
  So = Qn,
  Tv = Dr,
  nM = dw,
  hw = bn,
  qd = Se,
  Zr = qd.List,
  mw = qd.Map,
  iM = qd.OrderedSet,
  vw = JR,
  oM = Rx,
  Vd = Sa,
  gw = XR,
  Dv = hw("draft_tree_data_support"),
  aM = "&nbsp;",
  yw = " ",
  lM = new RegExp("\r", "g"),
  sM = new RegExp(
    `
`,
    "g"
  ),
  uM = new RegExp(
    `^
`,
    "g"
  ),
  cM = new RegExp(aM, "g"),
  fM = new RegExp("&#13;?", "g"),
  dM = new RegExp("&#8203;?", "g"),
  pM = ["bold", "bolder", "500", "600", "700", "800", "900"],
  hM = ["light", "lighter", "normal", "100", "200", "300", "400"],
  mM = ["className", "href", "rel", "target", "title"],
  vM = ["alt", "className", "height", "src", "width"],
  Lv =
    ((Tn = {}),
    st(Tn, So("public/DraftStyleDefault/depth0"), 0),
    st(Tn, So("public/DraftStyleDefault/depth1"), 1),
    st(Tn, So("public/DraftStyleDefault/depth2"), 2),
    st(Tn, So("public/DraftStyleDefault/depth3"), 3),
    st(Tn, So("public/DraftStyleDefault/depth4"), 4),
    Tn),
  Bv = mw({
    b: "BOLD",
    code: "CODE",
    del: "STRIKETHROUGH",
    em: "ITALIC",
    i: "ITALIC",
    s: "STRIKETHROUGH",
    strike: "STRIKETHROUGH",
    strong: "BOLD",
    u: "UNDERLINE",
    mark: "HIGHLIGHT",
  }),
  gM = function (t) {
    var r = {};
    return (
      t.mapKeys(function (n, i) {
        var o = [i.element];
        i.aliasedElements !== void 0 && o.push.apply(o, i.aliasedElements),
          o.forEach(function (l) {
            r[l] === void 0
              ? (r[l] = n)
              : typeof r[l] == "string"
              ? (r[l] = [r[l], n])
              : r[l].push(n);
          });
      }),
      mw(r)
    );
  },
  yM = function (t) {
    if (Vd(t)) {
      var r = t;
      if (r.style.fontFamily.includes("monospace")) return "CODE";
    }
    return null;
  },
  xM = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return (
      Object.keys(Lv).some(function (n) {
        t.classList.contains(n) && (r = Lv[n]);
      }),
      r
    );
  },
  wM = function (t) {
    if (!vw(t)) return !1;
    var r = t;
    if (
      !r.href ||
      (r.protocol !== "http:" &&
        r.protocol !== "https:" &&
        r.protocol !== "mailto:" &&
        r.protocol !== "tel:")
    )
      return !1;
    try {
      var n = new pw(r.href);
      return !0;
    } catch {
      return !1;
    }
  },
  _M = function (t) {
    if (!gw(t)) return !1;
    var r = t;
    return !!(
      r.attributes.getNamedItem("src") && r.attributes.getNamedItem("src").value
    );
  },
  SM = function (t, r) {
    if (!Vd(t)) return r;
    var n = t,
      i = n.style.fontWeight,
      o = n.style.fontStyle,
      l = n.style.textDecoration;
    return r.withMutations(function (s) {
      pM.indexOf(i) >= 0
        ? s.add("BOLD")
        : hM.indexOf(i) >= 0 && s.remove("BOLD"),
        o === "italic" ? s.add("ITALIC") : o === "normal" && s.remove("ITALIC"),
        l === "underline" && s.add("UNDERLINE"),
        l === "line-through" && s.add("STRIKETHROUGH"),
        l === "none" && (s.remove("UNDERLINE"), s.remove("STRIKETHROUGH"));
    });
  },
  uc = function (t) {
    return t === "ul" || t === "ol";
  },
  EM = (function () {
    function e(r, n) {
      st(this, "characterList", Zr()),
        st(this, "currentBlockType", "unstyled"),
        st(this, "currentDepth", 0),
        st(this, "currentEntity", null),
        st(this, "currentText", ""),
        st(this, "wrapper", null),
        st(this, "blockConfigs", []),
        st(this, "contentBlocks", []),
        st(this, "entityMap", Ov),
        st(this, "blockTypeMap", void 0),
        st(this, "disambiguate", void 0),
        this.clear(),
        (this.blockTypeMap = r),
        (this.disambiguate = n);
    }
    var t = e.prototype;
    return (
      (t.clear = function () {
        (this.characterList = Zr()),
          (this.blockConfigs = []),
          (this.currentBlockType = "unstyled"),
          (this.currentDepth = 0),
          (this.currentEntity = null),
          (this.currentText = ""),
          (this.entityMap = Ov),
          (this.wrapper = null),
          (this.contentBlocks = []);
      }),
      (t.addDOMNode = function (n) {
        var i;
        return (
          (this.contentBlocks = []),
          (this.currentDepth = 0),
          (i = this.blockConfigs).push.apply(
            i,
            this._toBlockConfigs([n], iM())
          ),
          this._trimCurrentText(),
          this.currentText !== "" &&
            this.blockConfigs.push(this._makeBlockConfig()),
          this
        );
      }),
      (t.getContentBlocks = function () {
        return (
          this.contentBlocks.length === 0 &&
            (Dv
              ? this._toContentBlocks(this.blockConfigs)
              : this._toFlatContentBlocks(this.blockConfigs)),
          { contentBlocks: this.contentBlocks, entityMap: this.entityMap }
        );
      }),
      (t._makeBlockConfig = function () {
        var n =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          i = n.key || Tv(),
          o = sc(
            {
              key: i,
              type: this.currentBlockType,
              text: this.currentText,
              characterList: this.characterList,
              depth: this.currentDepth,
              parent: null,
              children: Zr(),
              prevSibling: null,
              nextSibling: null,
              childConfigs: [],
            },
            n
          );
        return (
          (this.characterList = Zr()),
          (this.currentBlockType = "unstyled"),
          (this.currentText = ""),
          o
        );
      }),
      (t._toBlockConfigs = function (n, i) {
        for (var o = [], l = 0; l < n.length; l++) {
          var s = n[l],
            c = s.nodeName.toLowerCase();
          if (c === "body" || uc(c)) {
            this._trimCurrentText(),
              this.currentText !== "" && o.push(this._makeBlockConfig());
            var f = this.currentDepth,
              h = this.wrapper;
            uc(c) && ((this.wrapper = c), uc(h) && this.currentDepth++),
              o.push.apply(
                o,
                this._toBlockConfigs(Array.from(s.childNodes), i)
              ),
              (this.currentDepth = f),
              (this.wrapper = h);
            continue;
          }
          var g = this.blockTypeMap.get(c);
          if (g !== void 0) {
            this._trimCurrentText(),
              this.currentText !== "" && o.push(this._makeBlockConfig());
            var p = this.currentDepth,
              x = this.wrapper;
            if (
              ((this.wrapper = c === "pre" ? "pre" : this.wrapper),
              typeof g != "string" &&
                (g = this.disambiguate(c, this.wrapper) || g[0] || "unstyled"),
              !Dv &&
                Vd(s) &&
                (g === "unordered-list-item" || g === "ordered-list-item"))
            ) {
              var w = s;
              this.currentDepth = xM(w, this.currentDepth);
            }
            var k = Tv(),
              b = this._toBlockConfigs(Array.from(s.childNodes), i);
            this._trimCurrentText(),
              o.push(
                this._makeBlockConfig({ key: k, childConfigs: b, type: g })
              ),
              (this.currentDepth = p),
              (this.wrapper = x);
            continue;
          }
          if (c === "#text") {
            this._addTextNode(s, i);
            continue;
          }
          if (c === "br") {
            this._addBreakNode(s, i);
            continue;
          }
          if (_M(s)) {
            this._addImgNode(s, i);
            continue;
          }
          if (wM(s)) {
            this._addAnchorNode(s, o, i);
            continue;
          }
          var S = i;
          Bv.has(c) && (S = S.add(Bv.get(c))), (S = SM(s, S));
          var _ = yM(s);
          _ != null && (S = S.add(_)),
            o.push.apply(o, this._toBlockConfigs(Array.from(s.childNodes), S));
        }
        return o;
      }),
      (t._appendText = function (n, i) {
        var o;
        this.currentText += n;
        var l = ZR.create({ style: i, entity: this.currentEntity });
        this.characterList = (o = this.characterList).push.apply(
          o,
          Array(n.length).fill(l)
        );
      }),
      (t._trimCurrentText = function () {
        var n = this.currentText.length,
          i = n - this.currentText.trimLeft().length,
          o = this.currentText.trimRight().length,
          l = this.characterList.findEntry(function (s) {
            return s.getEntity() !== null;
          });
        (i = l !== void 0 ? Math.min(i, l[0]) : i),
          (l = this.characterList.reverse().findEntry(function (s) {
            return s.getEntity() !== null;
          })),
          (o = l !== void 0 ? Math.max(o, n - l[0]) : o),
          i > o
            ? ((this.currentText = ""), (this.characterList = Zr()))
            : ((this.currentText = this.currentText.slice(i, o)),
              (this.characterList = this.characterList.slice(i, o)));
      }),
      (t._addTextNode = function (n, i) {
        var o = n.textContent,
          l = o.trim();
        l === "" && this.wrapper !== "pre" && (o = " "),
          this.wrapper !== "pre" &&
            ((o = o.replace(uM, "")), (o = o.replace(sM, yw))),
          this._appendText(o, i);
      }),
      (t._addBreakNode = function (n, i) {
        oM(n) &&
          this._appendText(
            `
`,
            i
          );
      }),
      (t._addImgNode = function (n, i) {
        if (gw(n)) {
          var o = n,
            l = {};
          vM.forEach(function (s) {
            var c = o.getAttribute(s);
            c && (l[s] = c);
          }),
            (this.currentEntity = this.entityMap.__create(
              "IMAGE",
              "IMMUTABLE",
              l
            )),
            hw("draftjs_fix_paste_for_img")
              ? o.getAttribute("role") !== "presentation" &&
                this._appendText("📷", i)
              : this._appendText("📷", i),
            (this.currentEntity = null);
        }
      }),
      (t._addAnchorNode = function (n, i, o) {
        if (vw(n)) {
          var l = n,
            s = {};
          mM.forEach(function (c) {
            var f = l.getAttribute(c);
            f && (s[c] = f);
          }),
            (s.url = new pw(l.href).toString()),
            (this.currentEntity = this.entityMap.__create(
              "LINK",
              "MUTABLE",
              s || {}
            )),
            i.push.apply(i, this._toBlockConfigs(Array.from(n.childNodes), o)),
            (this.currentEntity = null);
        }
      }),
      (t._toContentBlocks = function (n) {
        for (
          var i =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : null,
            o = n.length - 1,
            l = 0;
          l <= o;
          l++
        ) {
          var s = n[l];
          (s.parent = i),
            (s.prevSibling = l > 0 ? n[l - 1].key : null),
            (s.nextSibling = l < o ? n[l + 1].key : null),
            (s.children = Zr(
              s.childConfigs.map(function (c) {
                return c.key;
              })
            )),
            this.contentBlocks.push(new tM(sc({}, s))),
            this._toContentBlocks(s.childConfigs, s.key);
        }
      }),
      (t._hoistContainersInBlockConfigs = function (n) {
        var i = this,
          o = Zr(n).flatMap(function (l) {
            return l.type !== "unstyled" || l.text !== ""
              ? [l]
              : i._hoistContainersInBlockConfigs(l.childConfigs);
          });
        return o;
      }),
      (t._toFlatContentBlocks = function (n) {
        var i = this,
          o = this._hoistContainersInBlockConfigs(n);
        o.forEach(function (l) {
          var s = i._extractTextFromBlockConfigs(l.childConfigs),
            c = s.text,
            f = s.characterList;
          i.contentBlocks.push(
            new eM(
              sc({}, l, {
                text: l.text + c,
                characterList: l.characterList.concat(f),
              })
            )
          );
        });
      }),
      (t._extractTextFromBlockConfigs = function (n) {
        for (var i = n.length - 1, o = "", l = Zr(), s = 0; s <= i; s++) {
          var c = n[s];
          (o += c.text),
            (l = l.concat(c.characterList)),
            o !== "" &&
              c.type !== "unstyled" &&
              ((o += `
`),
              (l = l.push(l.last())));
          var f = this._extractTextFromBlockConfigs(c.childConfigs);
          (o += f.text), (l = l.concat(f.characterList));
        }
        return { text: o, characterList: l };
      }),
      e
    );
  })(),
  kM = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : nM,
      n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : rM;
    t = t
      .trim()
      .replace(lM, "")
      .replace(cM, yw)
      .replace(fM, "")
      .replace(dM, "");
    var i = r(t);
    if (!i) return null;
    var o = gM(n),
      l = function (c, f) {
        return c === "li"
          ? f === "ol"
            ? "ordered-list-item"
            : "unordered-list-item"
          : null;
      };
    return new EM(o, l).addDOMNode(i).getContentBlocks();
  },
  xw = kM;
function CM(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {},
      n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" &&
      (n = n.concat(
        Object.getOwnPropertySymbols(r).filter(function (i) {
          return Object.getOwnPropertyDescriptor(r, i).enumerable;
        })
      )),
      n.forEach(function (i) {
        bM(e, i, r[i]);
      });
  }
  return e;
}
function bM(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var NM = Yn,
  OM = ar,
  TM = xw,
  DM = Dr,
  LM = dw,
  BM = bn,
  ww = Se,
  RM = tx,
  MM = ww.List,
  IM = ww.Repeat,
  _w = BM("draft_tree_data_support"),
  jM = _w ? OM : NM,
  AM = {
    processHTML: function (t, r) {
      return TM(t, LM, r);
    },
    processText: function (t, r, n) {
      return t.reduce(function (i, o, l) {
        o = RM(o);
        var s = DM(),
          c = { key: s, type: n, text: o, characterList: MM(IM(r, o.length)) };
        if (_w && l !== 0) {
          var f = l - 1,
            h = (i[f] = i[f].merge({ nextSibling: s }));
          c = CM({}, c, { prevSibling: h.getKey() });
        }
        return i.push(new jM(c)), i;
      }, []);
    },
  },
  PM = AM;
function FM(e, t, r, n) {
  var i = t.getStartKey(),
    o = t.getEndKey(),
    l = e.getBlockMap(),
    s = l
      .toSeq()
      .skipUntil(function (c, f) {
        return f === i;
      })
      .takeUntil(function (c, f) {
        return f === o;
      })
      .concat([[o, l.get(o)]])
      .map(function (c) {
        var f = c.getDepth() + r;
        return (f = Math.max(0, Math.min(f, n))), c.set("depth", f);
      });
  return (
    (l = l.merge(s)),
    e.merge({ blockMap: l, selectionBefore: t, selectionAfter: t })
  );
}
var $M = FM,
  Dn = It,
  Sr = Me,
  KM = $M,
  zM = jt,
  Cr = {
    currentBlockContainsLink: function (t) {
      var r = t.getSelection(),
        n = t.getCurrentContent(),
        i = n.getEntityMap();
      return n
        .getBlockForKey(r.getAnchorKey())
        .getCharacterList()
        .slice(r.getStartOffset(), r.getEndOffset())
        .some(function (o) {
          var l = o.getEntity();
          return !!l && i.__get(l).getType() === "LINK";
        });
    },
    getCurrentBlockType: function (t) {
      var r = t.getSelection();
      return t.getCurrentContent().getBlockForKey(r.getStartKey()).getType();
    },
    getDataObjectForLinkURL: function (t) {
      return { url: t.toString() };
    },
    handleKeyCommand: function (t, r, n) {
      switch (r) {
        case "bold":
          return Cr.toggleInlineStyle(t, "BOLD");
        case "italic":
          return Cr.toggleInlineStyle(t, "ITALIC");
        case "underline":
          return Cr.toggleInlineStyle(t, "UNDERLINE");
        case "code":
          return Cr.toggleCode(t);
        case "backspace":
        case "backspace-word":
        case "backspace-to-start-of-line":
          return Cr.onBackspace(t);
        case "delete":
        case "delete-word":
        case "delete-to-end-of-block":
          return Cr.onDelete(t);
        default:
          return null;
      }
    },
    insertSoftNewline: function (t) {
      var r = Dn.insertText(
          t.getCurrentContent(),
          t.getSelection(),
          `
`,
          t.getCurrentInlineStyle(),
          null
        ),
        n = Sr.push(t, r, "insert-characters");
      return Sr.forceSelection(n, r.getSelectionAfter());
    },
    onBackspace: function (t) {
      var r = t.getSelection();
      if (!r.isCollapsed() || r.getAnchorOffset() || r.getFocusOffset())
        return null;
      var n = t.getCurrentContent(),
        i = r.getStartKey(),
        o = n.getBlockBefore(i);
      if (o && o.getType() === "atomic") {
        var l = n.getBlockMap().delete(o.getKey()),
          s = n.merge({ blockMap: l, selectionAfter: r });
        if (s !== n) return Sr.push(t, s, "remove-range");
      }
      var c = Cr.tryToRemoveBlockStyle(t);
      return c ? Sr.push(t, c, "change-block-type") : null;
    },
    onDelete: function (t) {
      var r = t.getSelection();
      if (!r.isCollapsed()) return null;
      var n = t.getCurrentContent(),
        i = r.getStartKey(),
        o = n.getBlockForKey(i),
        l = o.getLength();
      if (r.getStartOffset() < l) return null;
      var s = n.getBlockAfter(i);
      if (!s || s.getType() !== "atomic") return null;
      var c = r.merge({ focusKey: s.getKey(), focusOffset: s.getLength() }),
        f = Dn.removeRange(n, c, "forward");
      return f !== n ? Sr.push(t, f, "remove-range") : null;
    },
    onTab: function (t, r, n) {
      var i = r.getSelection(),
        o = i.getAnchorKey();
      if (o !== i.getFocusKey()) return r;
      var l = r.getCurrentContent(),
        s = l.getBlockForKey(o),
        c = s.getType();
      if (c !== "unordered-list-item" && c !== "ordered-list-item") return r;
      t.preventDefault();
      var f = s.getDepth();
      if (!t.shiftKey && f === n) return r;
      var h = KM(l, i, t.shiftKey ? -1 : 1, n);
      return Sr.push(r, h, "adjust-depth");
    },
    toggleBlockType: function (t, r) {
      var n = t.getSelection(),
        i = n.getStartKey(),
        o = n.getEndKey(),
        l = t.getCurrentContent(),
        s = n;
      if (i !== o && n.getEndOffset() === 0) {
        var c = zM(l.getBlockBefore(o));
        (o = c.getKey()),
          (s = s.merge({
            anchorKey: i,
            anchorOffset: n.getStartOffset(),
            focusKey: o,
            focusOffset: c.getLength(),
            isBackward: !1,
          }));
      }
      var f = l
        .getBlockMap()
        .skipWhile(function (g, p) {
          return p !== i;
        })
        .reverse()
        .skipWhile(function (g, p) {
          return p !== o;
        })
        .some(function (g) {
          return g.getType() === "atomic";
        });
      if (f) return t;
      var h = l.getBlockForKey(i).getType() === r ? "unstyled" : r;
      return Sr.push(t, Dn.setBlockType(l, s, h), "change-block-type");
    },
    toggleCode: function (t) {
      var r = t.getSelection(),
        n = r.getAnchorKey(),
        i = r.getFocusKey();
      return r.isCollapsed() || n !== i
        ? Cr.toggleBlockType(t, "code-block")
        : Cr.toggleInlineStyle(t, "CODE");
    },
    toggleInlineStyle: function (t, r) {
      var n = t.getSelection(),
        i = t.getCurrentInlineStyle();
      if (n.isCollapsed())
        return Sr.setInlineStyleOverride(t, i.has(r) ? i.remove(r) : i.add(r));
      var o = t.getCurrentContent(),
        l;
      return (
        i.has(r)
          ? (l = Dn.removeInlineStyle(o, n, r))
          : (l = Dn.applyInlineStyle(o, n, r)),
        Sr.push(t, l, "change-inline-style")
      );
    },
    toggleLink: function (t, r, n) {
      var i = Dn.applyEntity(t.getCurrentContent(), r, n);
      return Sr.push(t, i, "apply-entity");
    },
    tryToRemoveBlockStyle: function (t) {
      var r = t.getSelection(),
        n = r.getAnchorOffset();
      if (r.isCollapsed() && n === 0) {
        var i = r.getAnchorKey(),
          o = t.getCurrentContent(),
          l = o.getBlockForKey(i),
          s = l.getType(),
          c = o.getBlockBefore(i);
        if (
          s === "code-block" &&
          c &&
          c.getType() === "code-block" &&
          c.getLength() !== 0
        )
          return null;
        if (s !== "unstyled") return Dn.setBlockType(o, r, "unstyled");
      }
      return null;
    },
  },
  Sw = Cr,
  UM = /\r\n?|\n/g;
function HM(e) {
  return e.split(UM);
}
var WM = HM,
  cc = ma,
  Rv = or,
  qM = Yx,
  Ew = It,
  fc = PM,
  kw = Me,
  Mv = Sw,
  Iv = Pd,
  VM = Qx,
  jv = Fs,
  Av = WM;
function GM(e, t) {
  t.preventDefault();
  var r = new qM(t.clipboardData);
  if (!r.isRichText()) {
    var n = r.getFiles(),
      i = r.getText();
    if (n.length > 0) {
      if (e.props.handlePastedFiles && jv(e.props.handlePastedFiles(n))) return;
      VM(n, function (A) {
        if (((A = A || i), !!A)) {
          var K = e._latestEditorState,
            F = Av(A),
            H = Rv.create({
              style: K.getCurrentInlineStyle(),
              entity: Iv(K.getCurrentContent(), K.getSelection()),
            }),
            P = Mv.getCurrentBlockType(K),
            M = fc.processText(F, H, P),
            D = cc.createFromArray(M),
            j = Ew.replaceWithFragment(
              K.getCurrentContent(),
              K.getSelection(),
              D
            );
          e.update(kw.push(K, j, "insert-fragment"));
        }
      });
      return;
    }
  }
  var o = [],
    l = r.getText(),
    s = r.getHTML(),
    c = e._latestEditorState;
  if (e.props.formatPastedText) {
    var f = e.props.formatPastedText(l, s),
      h = f.text,
      g = f.html;
    (l = h), (s = g);
  }
  if (!(e.props.handlePastedText && jv(e.props.handlePastedText(l, s, c)))) {
    if ((l && (o = Av(l)), !e.props.stripPastedStyles)) {
      var p = e.getClipboard();
      if (!e.props.formatPastedText && r.isRichText() && p) {
        var x;
        if (
          ((x = s) === null || x === void 0
            ? void 0
            : x.indexOf(e.getEditorKey())) !== -1 ||
          (o.length === 1 && p.size === 1 && p.first().getText() === l)
        ) {
          e.update(hl(e._latestEditorState, p));
          return;
        }
      } else if (
        p &&
        r.types.includes("com.apple.webarchive") &&
        !r.types.includes("text/html") &&
        JM(o, p)
      ) {
        e.update(hl(e._latestEditorState, p));
        return;
      }
      if (s) {
        var w = fc.processHTML(s, e.props.blockRenderMap);
        if (w) {
          var k = w.contentBlocks,
            b = w.entityMap;
          if (k) {
            var S = cc.createFromArray(k);
            e.update(hl(e._latestEditorState, S, b));
            return;
          }
        }
      }
      e.setClipboard(null);
    }
    if (o.length) {
      var _ = Rv.create({
          style: c.getCurrentInlineStyle(),
          entity: Iv(c.getCurrentContent(), c.getSelection()),
        }),
        E = Mv.getCurrentBlockType(c),
        N = fc.processText(o, _, E),
        L = cc.createFromArray(N);
      e.update(hl(e._latestEditorState, L));
    }
  }
}
function hl(e, t, r) {
  var n = Ew.replaceWithFragment(e.getCurrentContent(), e.getSelection(), t);
  return kw.push(e, n.set("entityMap", r), "insert-fragment");
}
function JM(e, t) {
  return (
    e.length === t.size &&
    t.valueSeq().every(function (r, n) {
      return r.getText() === e[n];
    })
  );
}
var YM = GM,
  Cw = At,
  QM = eL,
  XM = iL,
  ZM = lL,
  eI = dL,
  tI = EL,
  rI = CL,
  nI = NL,
  iI = DL,
  oI = sB,
  aI = FR,
  lI = YM,
  bw = Dx,
  sI = Cw.isBrowser("Chrome"),
  uI = Cw.isBrowser("Firefox"),
  Pv = sI || uI ? bw : function (e) {},
  cI = {
    onBeforeInput: QM,
    onBlur: XM,
    onCompositionStart: ZM,
    onCopy: eI,
    onCut: tI,
    onDragOver: rI,
    onDragStart: nI,
    onFocus: iI,
    onInput: oI,
    onKeyDown: aI,
    onPaste: lI,
    onSelect: bw,
    onMouseUp: Pv,
    onKeyUp: Pv,
  },
  fI = cI,
  dI = x0,
  pI = dI.unstable_flushControlled,
  hI = pI;
function mI(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t);
}
var dc = U,
  Fv = Qn,
  vI = (function (e) {
    mI(t, e);
    function t() {
      return e.apply(this, arguments) || this;
    }
    var r = t.prototype;
    return (
      (r.shouldComponentUpdate = function (i) {
        return (
          this.props.text !== i.text ||
          this.props.editorState.getSelection().getHasFocus() !==
            i.editorState.getSelection().getHasFocus()
        );
      }),
      (r.render = function () {
        var i = this.props.editorState.getSelection().getHasFocus(),
          o = Fv({
            "public/DraftEditorPlaceholder/root": !0,
            "public/DraftEditorPlaceholder/hasFocus": i,
          }),
          l = { whiteSpace: "pre-wrap" };
        return dc.createElement(
          "div",
          { className: o },
          dc.createElement(
            "div",
            {
              className: Fv("public/DraftEditorPlaceholder/inner"),
              id: this.props.accessibilityID,
              style: l,
            },
            this.props.text
          )
        );
      }),
      t
    );
  })(dc.Component),
  gI = vI,
  Nw = Wd,
  Eo = Is,
  Ow = At,
  fn = Ow.isPlatform("Mac OS X"),
  $v = fn && Ow.isBrowser("Firefox < 29"),
  on = Nw.hasCommandModifier,
  Mr = Nw.isCtrlKeyCommand;
function Tw(e) {
  return (fn && e.altKey) || Mr(e);
}
function yI(e) {
  return on(e) ? (e.shiftKey ? "redo" : "undo") : null;
}
function xI(e) {
  return !fn && e.shiftKey ? null : Tw(e) ? "delete-word" : "delete";
}
function wI(e) {
  return on(e) && fn
    ? "backspace-to-start-of-line"
    : Tw(e)
    ? "backspace-word"
    : "backspace";
}
function _I(e) {
  switch (e.keyCode) {
    case 66:
      return on(e) ? "bold" : null;
    case 68:
      return Mr(e) ? "delete" : null;
    case 72:
      return Mr(e) ? "backspace" : null;
    case 73:
      return on(e) ? "italic" : null;
    case 74:
      return on(e) ? "code" : null;
    case 75:
      return fn && Mr(e) ? "secondary-cut" : null;
    case 77:
      return Mr(e) ? "split-block" : null;
    case 79:
      return Mr(e) ? "split-block" : null;
    case 84:
      return fn && Mr(e) ? "transpose-characters" : null;
    case 85:
      return on(e) ? "underline" : null;
    case 87:
      return fn && Mr(e) ? "backspace-word" : null;
    case 89:
      return Mr(e) ? (fn ? "secondary-paste" : "redo") : null;
    case 90:
      return yI(e) || null;
    case Eo.RETURN:
      return "split-block";
    case Eo.DELETE:
      return xI(e);
    case Eo.BACKSPACE:
      return wI(e);
    case Eo.LEFT:
      return $v && on(e) ? "move-selection-to-start-of-block" : null;
    case Eo.RIGHT:
      return $v && on(e) ? "move-selection-to-end-of-block" : null;
    default:
      return null;
  }
}
var Dw = _I,
  SI = Xn;
function Nf() {
  return (
    (Nf =
      SI ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Nf.apply(this, arguments)
  );
}
function pc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {},
      n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" &&
      (n = n.concat(
        Object.getOwnPropertySymbols(r).filter(function (i) {
          return Object.getOwnPropertyDescriptor(r, i).enumerable;
        })
      )),
      n.forEach(function (i) {
        re(e, i, r[i]);
      });
  }
  return e;
}
function ie(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function re(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Lw(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t);
}
var EI = jd,
  kI = vx,
  CI = PT,
  bI = c2,
  NI = $2,
  OI = fI,
  Kv = hI,
  TI = gI,
  DI = Mx,
  LI = Me,
  tn = U,
  BI = zd,
  RI = js,
  MI = At,
  hc = Qn,
  II = Dr,
  jI = Dw,
  AI = As,
  PI = bn,
  zv = Ce,
  Uv = Sa,
  FI = jt,
  Bw = MI.isBrowser("IE"),
  $I = !Bw,
  Hv = { edit: OI, composite: CI, drag: NI, cut: null, render: null },
  Wv = !1,
  KI = (function (e) {
    Lw(t, e);
    function t() {
      return e.apply(this, arguments) || this;
    }
    var r = t.prototype;
    return (
      (r.render = function () {
        return null;
      }),
      (r.componentDidMount = function () {
        this._update();
      }),
      (r.componentDidUpdate = function () {
        this._update();
      }),
      (r._update = function () {
        var i = this.props.editor;
        (i._latestEditorState = this.props.editorState),
          (i._blockSelectEvents = !0);
      }),
      t
    );
  })(tn.Component),
  Rw = (function (e) {
    Lw(t, e);
    function t(n) {
      var i;
      return (
        (i = e.call(this, n) || this),
        re(ie(i), "_blockSelectEvents", void 0),
        re(ie(i), "_clipboard", void 0),
        re(ie(i), "_handler", void 0),
        re(ie(i), "_dragCount", void 0),
        re(ie(i), "_internalDrag", void 0),
        re(ie(i), "_editorKey", void 0),
        re(ie(i), "_placeholderAccessibilityID", void 0),
        re(ie(i), "_latestEditorState", void 0),
        re(ie(i), "_latestCommittedEditorState", void 0),
        re(ie(i), "_pendingStateFromBeforeInput", void 0),
        re(ie(i), "_onBeforeInput", void 0),
        re(ie(i), "_onBlur", void 0),
        re(ie(i), "_onCharacterData", void 0),
        re(ie(i), "_onCompositionEnd", void 0),
        re(ie(i), "_onCompositionStart", void 0),
        re(ie(i), "_onCopy", void 0),
        re(ie(i), "_onCut", void 0),
        re(ie(i), "_onDragEnd", void 0),
        re(ie(i), "_onDragOver", void 0),
        re(ie(i), "_onDragStart", void 0),
        re(ie(i), "_onDrop", void 0),
        re(ie(i), "_onInput", void 0),
        re(ie(i), "_onFocus", void 0),
        re(ie(i), "_onKeyDown", void 0),
        re(ie(i), "_onKeyPress", void 0),
        re(ie(i), "_onKeyUp", void 0),
        re(ie(i), "_onMouseDown", void 0),
        re(ie(i), "_onMouseUp", void 0),
        re(ie(i), "_onPaste", void 0),
        re(ie(i), "_onSelect", void 0),
        re(ie(i), "editor", void 0),
        re(ie(i), "editorContainer", void 0),
        re(ie(i), "focus", void 0),
        re(ie(i), "blur", void 0),
        re(ie(i), "setMode", void 0),
        re(ie(i), "exitCurrentMode", void 0),
        re(ie(i), "restoreEditorDOM", void 0),
        re(ie(i), "setClipboard", void 0),
        re(ie(i), "getClipboard", void 0),
        re(ie(i), "getEditorKey", void 0),
        re(ie(i), "update", void 0),
        re(ie(i), "onDragEnter", void 0),
        re(ie(i), "onDragLeave", void 0),
        re(ie(i), "_handleEditorContainerRef", function (o) {
          (i.editorContainer = o),
            (i.editor = o !== null ? o.firstChild : null);
        }),
        re(ie(i), "focus", function (o) {
          var l = i.props.editorState,
            s = l.getSelection().getHasFocus(),
            c = i.editor;
          if (c) {
            var f = RI.getScrollParent(c),
              h = o || AI(f),
              g = h.x,
              p = h.y;
            Uv(c) || zv(!1),
              c.focus(),
              f === window ? window.scrollTo(g, p) : BI.setTop(f, p),
              s || i.update(LI.forceSelection(l, l.getSelection()));
          }
        }),
        re(ie(i), "blur", function () {
          var o = i.editor;
          o && (Uv(o) || zv(!1), o.blur());
        }),
        re(ie(i), "setMode", function (o) {
          var l = i.props,
            s = l.onPaste,
            c = l.onCut,
            f = l.onCopy,
            h = pc({}, Hv.edit);
          s && (h.onPaste = s), c && (h.onCut = c), f && (h.onCopy = f);
          var g = pc({}, Hv, { edit: h });
          i._handler = g[o];
        }),
        re(ie(i), "exitCurrentMode", function () {
          i.setMode("edit");
        }),
        re(ie(i), "restoreEditorDOM", function (o) {
          i.setState({ contentsKey: i.state.contentsKey + 1 }, function () {
            i.focus(o);
          });
        }),
        re(ie(i), "setClipboard", function (o) {
          i._clipboard = o;
        }),
        re(ie(i), "getClipboard", function () {
          return i._clipboard;
        }),
        re(ie(i), "update", function (o) {
          (i._latestEditorState = o), i.props.onChange(o);
        }),
        re(ie(i), "onDragEnter", function () {
          i._dragCount++;
        }),
        re(ie(i), "onDragLeave", function () {
          i._dragCount--, i._dragCount === 0 && i.exitCurrentMode();
        }),
        (i._blockSelectEvents = !1),
        (i._clipboard = null),
        (i._handler = null),
        (i._dragCount = 0),
        (i._editorKey = n.editorKey || II()),
        (i._placeholderAccessibilityID = "placeholder-" + i._editorKey),
        (i._latestEditorState = n.editorState),
        (i._latestCommittedEditorState = n.editorState),
        (i._onBeforeInput = i._buildHandler("onBeforeInput")),
        (i._onBlur = i._buildHandler("onBlur")),
        (i._onCharacterData = i._buildHandler("onCharacterData")),
        (i._onCompositionEnd = i._buildHandler("onCompositionEnd")),
        (i._onCompositionStart = i._buildHandler("onCompositionStart")),
        (i._onCopy = i._buildHandler("onCopy")),
        (i._onCut = i._buildHandler("onCut")),
        (i._onDragEnd = i._buildHandler("onDragEnd")),
        (i._onDragOver = i._buildHandler("onDragOver")),
        (i._onDragStart = i._buildHandler("onDragStart")),
        (i._onDrop = i._buildHandler("onDrop")),
        (i._onInput = i._buildHandler("onInput")),
        (i._onFocus = i._buildHandler("onFocus")),
        (i._onKeyDown = i._buildHandler("onKeyDown")),
        (i._onKeyPress = i._buildHandler("onKeyPress")),
        (i._onKeyUp = i._buildHandler("onKeyUp")),
        (i._onMouseDown = i._buildHandler("onMouseDown")),
        (i._onMouseUp = i._buildHandler("onMouseUp")),
        (i._onPaste = i._buildHandler("onPaste")),
        (i._onSelect = i._buildHandler("onSelect")),
        (i.getEditorKey = function () {
          return i._editorKey;
        }),
        (i.state = { contentsKey: 0 }),
        i
      );
    }
    var r = t.prototype;
    return (
      (r._buildHandler = function (i) {
        var o = this;
        return function (l) {
          if (!o.props.readOnly) {
            var s = o._handler && o._handler[i];
            s &&
              (Kv
                ? Kv(function () {
                    return s(o, l);
                  })
                : s(o, l));
          }
        };
      }),
      (r._showPlaceholder = function () {
        return (
          !!this.props.placeholder &&
          !this.props.editorState.isInCompositionMode() &&
          !this.props.editorState.getCurrentContent().hasText()
        );
      }),
      (r._renderPlaceholder = function () {
        if (this._showPlaceholder()) {
          var i = {
            text: FI(this.props.placeholder),
            editorState: this.props.editorState,
            textAlignment: this.props.textAlignment,
            accessibilityID: this._placeholderAccessibilityID,
          };
          return tn.createElement(TI, i);
        }
        return null;
      }),
      (r._renderARIADescribedBy = function () {
        var i = this.props.ariaDescribedBy || "",
          o = this._showPlaceholder() ? this._placeholderAccessibilityID : "";
        return i.replace("{{editor_id_placeholder}}", o) || void 0;
      }),
      (r.render = function () {
        var i = this.props,
          o = i.blockRenderMap,
          l = i.blockRendererFn,
          s = i.blockStyleFn,
          c = i.customStyleFn,
          f = i.customStyleMap,
          h = i.editorState,
          g = i.preventScroll,
          p = i.readOnly,
          x = i.textAlignment,
          w = i.textDirectionality,
          k = hc({
            "DraftEditor/root": !0,
            "DraftEditor/alignLeft": x === "left",
            "DraftEditor/alignRight": x === "right",
            "DraftEditor/alignCenter": x === "center",
          }),
          b = {
            outline: "none",
            userSelect: "text",
            WebkitUserSelect: "text",
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
          },
          S = this.props.role || "textbox",
          _ = S === "combobox" ? !!this.props.ariaExpanded : null,
          E = {
            blockRenderMap: o,
            blockRendererFn: l,
            blockStyleFn: s,
            customStyleMap: pc({}, kI, f),
            customStyleFn: c,
            editorKey: this._editorKey,
            editorState: h,
            preventScroll: g,
            textDirectionality: w,
          };
        return tn.createElement(
          "div",
          { className: k },
          this._renderPlaceholder(),
          tn.createElement(
            "div",
            {
              className: hc("DraftEditor/editorContainer"),
              ref: this._handleEditorContainerRef,
            },
            tn.createElement(
              "div",
              {
                "aria-activedescendant": p
                  ? null
                  : this.props.ariaActiveDescendantID,
                "aria-autocomplete": p ? null : this.props.ariaAutoComplete,
                "aria-controls": p ? null : this.props.ariaControls,
                "aria-describedby": this._renderARIADescribedBy(),
                "aria-expanded": p ? null : _,
                "aria-label": this.props.ariaLabel,
                "aria-labelledby": this.props.ariaLabelledBy,
                "aria-multiline": this.props.ariaMultiline,
                "aria-owns": p ? null : this.props.ariaOwneeID,
                autoCapitalize: this.props.autoCapitalize,
                autoComplete: this.props.autoComplete,
                autoCorrect: this.props.autoCorrect,
                className: hc({
                  notranslate: !p,
                  "public/DraftEditor/content": !0,
                }),
                contentEditable: !p,
                "data-testid": this.props.webDriverTestID,
                onBeforeInput: this._onBeforeInput,
                onBlur: this._onBlur,
                onCompositionEnd: this._onCompositionEnd,
                onCompositionStart: this._onCompositionStart,
                onCopy: this._onCopy,
                onCut: this._onCut,
                onDragEnd: this._onDragEnd,
                onDragEnter: this.onDragEnter,
                onDragLeave: this.onDragLeave,
                onDragOver: this._onDragOver,
                onDragStart: this._onDragStart,
                onDrop: this._onDrop,
                onFocus: this._onFocus,
                onInput: this._onInput,
                onKeyDown: this._onKeyDown,
                onKeyPress: this._onKeyPress,
                onKeyUp: this._onKeyUp,
                onMouseUp: this._onMouseUp,
                onPaste: this._onPaste,
                onSelect: this._onSelect,
                ref: this.props.editorRef,
                role: p ? null : S,
                spellCheck: $I && this.props.spellCheck,
                style: b,
                suppressContentEditableWarning: !0,
                tabIndex: this.props.tabIndex,
              },
              tn.createElement(KI, { editor: this, editorState: h }),
              tn.createElement(
                bI,
                Nf({}, E, { key: "contents" + this.state.contentsKey })
              )
            )
          )
        );
      }),
      (r.componentDidMount = function () {
        (this._blockSelectEvents = !1),
          !Wv && PI("draft_ods_enabled") && ((Wv = !0), DI.initODS()),
          this.setMode("edit"),
          Bw &&
            (this.editor
              ? this.editor.ownerDocument.execCommand("AutoUrlDetect", !1, !1)
              : $r.execCommand("AutoUrlDetect", !1, !1));
      }),
      (r.componentDidUpdate = function () {
        (this._blockSelectEvents = !1),
          (this._latestEditorState = this.props.editorState),
          (this._latestCommittedEditorState = this.props.editorState);
      }),
      t
    );
  })(tn.Component);
re(Rw, "defaultProps", {
  ariaDescribedBy: "{{editor_id_placeholder}}",
  blockRenderMap: EI,
  blockRendererFn: function () {
    return null;
  },
  blockStyleFn: function () {
    return "";
  },
  keyBindingFn: jI,
  readOnly: !1,
  spellCheck: !1,
  stripPastedStyles: !1,
});
var zI = Rw,
  UI = {},
  HI = {
    stringify: function (t) {
      return "_" + String(t);
    },
    unstringify: function (t) {
      return t.slice(1);
    },
  },
  Mw = HI,
  WI = Mw,
  qI = ti,
  qv = qI.strlen;
function VI(e, t) {
  var r = [];
  return (
    e.findEntityRanges(
      function (n) {
        return !!n.getEntity();
      },
      function (n, i) {
        var o = e.getText(),
          l = e.getEntityAt(n);
        r.push({
          offset: qv(o.slice(0, n)),
          length: qv(o.slice(n, i)),
          key: Number(t[WI.stringify(l)]),
        });
      }
    ),
    r
  );
}
var GI = VI,
  Vv = ti,
  JI = va,
  YI = function (t, r) {
    return t === r;
  },
  QI = function (t) {
    return !!t;
  },
  XI = [];
function ZI(e, t, r) {
  var n = [],
    i = t
      .map(function (o) {
        return o.has(r);
      })
      .toList();
  return (
    JI(i, YI, QI, function (o, l) {
      var s = e.getText();
      n.push({
        offset: Vv.strlen(s.slice(0, o)),
        length: Vv.strlen(s.slice(o, l)),
        style: r,
      });
    }),
    n
  );
}
function ej(e) {
  var t = e
      .getCharacterList()
      .map(function (n) {
        return n.getStyle();
      })
      .toList(),
    r = t
      .flatten()
      .toSet()
      .map(function (n) {
        return ZI(e, t, n);
      });
  return Array.prototype.concat.apply(XI, r.toJS());
}
var tj = ej;
function rj(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {},
      n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" &&
      (n = n.concat(
        Object.getOwnPropertySymbols(r).filter(function (i) {
          return Object.getOwnPropertyDescriptor(r, i).enumerable;
        })
      )),
      n.forEach(function (i) {
        nj(e, i, r[i]);
      });
  }
  return e;
}
function nj(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var ij = Yn,
  oj = ar,
  Iw = Mw,
  aj = GI,
  lj = tj,
  sj = Ce,
  Gv = function (t, r) {
    return {
      key: t.getKey(),
      text: t.getText(),
      type: t.getType(),
      depth: t.getDepth(),
      inlineStyleRanges: lj(t),
      entityRanges: aj(t, r),
      data: t.getData().toObject(),
    };
  },
  uj = function (t, r, n, i) {
    if (t instanceof ij) {
      n.push(Gv(t, r));
      return;
    }
    t instanceof oj || sj(!1);
    var o = t.getParentKey(),
      l = (i[t.getKey()] = rj({}, Gv(t, r), { children: [] }));
    if (o) {
      i[o].children.push(l);
      return;
    }
    n.push(l);
  },
  cj = function (t, r) {
    var n = r.entityMap,
      i = [],
      o = {},
      l = {},
      s = 0;
    return (
      t.getBlockMap().forEach(function (c) {
        c.findEntityRanges(
          function (f) {
            return f.getEntity() !== null;
          },
          function (f) {
            var h = c.getEntityAt(f),
              g = Iw.stringify(h);
            l[g] || ((l[g] = h), (n[g] = "".concat(s)), s++);
          }
        ),
          uj(c, n, i, o);
      }),
      { blocks: i, entityMap: n }
    );
  },
  fj = function (t, r) {
    var n = r.blocks,
      i = r.entityMap,
      o = {};
    return (
      Object.keys(i).forEach(function (l, s) {
        var c = t.getEntity(Iw.unstringify(l));
        o[s] = {
          type: c.getType(),
          mutability: c.getMutability(),
          data: c.getData(),
        };
      }),
      { blocks: n, entityMap: o }
    );
  },
  dj = function (t) {
    var r = { entityMap: {}, blocks: [] };
    return (r = cj(t, r)), (r = fj(t, r)), r;
  },
  pj = dj;
function To(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {},
      n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" &&
      (n = n.concat(
        Object.getOwnPropertySymbols(r).filter(function (i) {
          return Object.getOwnPropertyDescriptor(r, i).enumerable;
        })
      )),
      n.forEach(function (i) {
        hj(e, i, r[i]);
      });
  }
  return e;
}
function hj(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var mj = Dr,
  jw = Ce,
  vj = function (t, r) {
    for (var n = [].concat(t).reverse(); n.length; ) {
      var i = n.pop();
      r(i);
      var o = i.children;
      Array.isArray(o) || jw(!1), (n = n.concat([].concat(o.reverse())));
    }
  },
  Jv = function (t) {
    if (!(t && t.type)) return !1;
    var r = t.type;
    return r === "unordered-list-item" || r === "ordered-list-item";
  },
  gj = function (t) {
    Array.isArray(t.children) &&
      (t.children = t.children.map(function (r) {
        return r.type === t.type ? To({}, r, { depth: (t.depth || 0) + 1 }) : r;
      }));
  },
  yj = {
    fromRawTreeStateToRawState: function (t) {
      var r = t.blocks,
        n = [];
      return (
        Array.isArray(r) || jw(!1),
        !Array.isArray(r) || !r.length
          ? t
          : (vj(r, function (i) {
              var o = To({}, i);
              (Jv(i) &&
                ((o.depth = o.depth || 0),
                gj(i),
                i.children != null && i.children.length > 0)) ||
                (delete o.children, n.push(o));
            }),
            (t.blocks = n),
            To({}, t, { blocks: n }))
      );
    },
    fromRawStateToRawTreeState: function (t) {
      var r = [],
        n = [];
      return (
        t.blocks.forEach(function (i) {
          var o = Jv(i),
            l = i.depth || 0,
            s = To({}, i, { children: [] });
          if (!o) {
            r.push(s);
            return;
          }
          var c = n[0];
          if (c == null && l === 0) r.push(s);
          else if (c == null || c.depth < l - 1) {
            var f = {
              key: mj(),
              text: "",
              depth: l - 1,
              type: i.type,
              children: [],
              entityRanges: [],
              inlineStyleRanges: [],
            };
            n.unshift(f),
              l === 1 ? r.push(f) : c != null && c.children.push(f),
              f.children.push(s);
          } else if (c.depth === l - 1) c.children.push(s);
          else {
            for (; c != null && c.depth >= l; ) n.shift(), (c = n[0]);
            l > 0 ? c.children.push(s) : r.push(s);
          }
        }),
        To({}, t, { blocks: r })
      );
    },
  },
  xj = yj,
  wj = or,
  _j = Se,
  Sj = _j.List;
function Ej(e, t) {
  var r = e.map(function (n, i) {
    var o = t[i];
    return wj.create({ style: n, entity: o });
  });
  return Sj(r);
}
var kj = Ej,
  Cj = ti,
  Yv = Cj.substr;
function bj(e, t) {
  var r = Array(e.length).fill(null);
  return (
    t &&
      t.forEach(function (n) {
        for (
          var i = Yv(e, 0, n.offset).length,
            o = i + Yv(e, n.offset, n.length).length,
            l = i;
          l < o;
          l++
        )
          r[l] = n.key;
      }),
    r
  );
}
var Nj = bj,
  Oj = ti,
  Tj = Se,
  Dj = Tj.OrderedSet,
  Qv = Oj.substr,
  Lj = Dj();
function Bj(e, t) {
  var r = Array(e.length).fill(Lj);
  return (
    t &&
      t.forEach(function (n) {
        for (
          var i = Qv(e, 0, n.offset).length,
            o = i + Qv(e, n.offset, n.length).length;
          i < o;

        )
          (r[i] = r[i].add(n.style)), i++;
      }),
    r
  );
}
var Rj = Bj;
function la(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {},
      n = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" &&
      (n = n.concat(
        Object.getOwnPropertySymbols(r).filter(function (i) {
          return Object.getOwnPropertyDescriptor(r, i).enumerable;
        })
      )),
      n.forEach(function (i) {
        Mj(e, i, r[i]);
      });
  }
  return e;
}
function Mj(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var Ij = Yn,
  Xv = ar,
  jj = Ld,
  Aj = Os,
  Zv = xj,
  eg = Ts,
  Pj = kj,
  Fj = Nj,
  $j = Rj,
  Aw = Dr,
  Kj = bn,
  Gd = Se,
  Of = Ce,
  tg = Kj("draft_tree_data_support"),
  rg = Gd.List,
  zj = Gd.Map,
  Pw = Gd.OrderedMap,
  Tf = function (t, r) {
    var n = t.key,
      i = t.type,
      o = t.data,
      l = t.text,
      s = t.depth,
      c = {
        text: l,
        depth: s || 0,
        type: i || "unstyled",
        key: n || Aw(),
        data: zj(o),
        characterList: Uj(t, r),
      };
    return c;
  },
  Uj = function (t, r) {
    var n = t.text,
      i = t.entityRanges,
      o = t.inlineStyleRanges,
      l = i || [],
      s = o || [];
    return Pj(
      $j(n, s),
      Fj(
        n,
        l
          .filter(function (c) {
            return r.hasOwnProperty(c.key);
          })
          .map(function (c) {
            return la({}, c, { key: r[c.key] });
          })
      )
    );
  },
  mc = function (t) {
    return la({}, t, { key: t.key || Aw() });
  },
  ng = function (t, r, n) {
    var i = r.map(function (o) {
      return la({}, o, { parentRef: n });
    });
    return t.concat(i.reverse());
  },
  Hj = function (t, r) {
    return t.map(mc).reduce(function (n, i, o) {
      Array.isArray(i.children) || Of(!1);
      var l = i.children.map(mc),
        s = new Xv(
          la({}, Tf(i, r), {
            prevSibling: o === 0 ? null : t[o - 1].key,
            nextSibling: o === t.length - 1 ? null : t[o + 1].key,
            children: rg(
              l.map(function (b) {
                return b.key;
              })
            ),
          })
        );
      n = n.set(s.getKey(), s);
      for (var c = ng([], l, s); c.length > 0; ) {
        var f = c.pop(),
          h = f.parentRef,
          g = h.getChildKeys(),
          p = g.indexOf(f.key),
          x = Array.isArray(f.children);
        if (!x) {
          x || Of(!1);
          break;
        }
        var w = f.children.map(mc),
          k = new Xv(
            la({}, Tf(f, r), {
              parent: h.getKey(),
              children: rg(
                w.map(function (b) {
                  return b.key;
                })
              ),
              prevSibling: p === 0 ? null : g.get(p - 1),
              nextSibling: p === g.size - 1 ? null : g.get(p + 1),
            })
          );
        (n = n.set(k.getKey(), k)), (c = ng(c, w, k));
      }
      return n;
    }, Pw());
  },
  Wj = function (t, r) {
    return Pw(
      t.map(function (n) {
        var i = new Ij(Tf(n, r));
        return [i.getKey(), i];
      })
    );
  },
  qj = function (t, r) {
    var n = t.blocks.find(function (l) {
        return Array.isArray(l.children) && l.children.length > 0;
      }),
      i = tg && !n ? Zv.fromRawStateToRawTreeState(t).blocks : t.blocks;
    if (!tg) return Wj(n ? Zv.fromRawTreeStateToRawState(t).blocks : i, r);
    var o = Hj(i, r);
    return o;
  },
  Vj = function (t) {
    var r = t.entityMap,
      n = {};
    return (
      Object.keys(r).forEach(function (i) {
        var o = r[i],
          l = o.type,
          s = o.mutability,
          c = o.data;
        n[i] = Aj.__create(l, s, c || {});
      }),
      n
    );
  },
  Gj = function (t) {
    Array.isArray(t.blocks) || Of(!1);
    var r = Vj(t),
      n = qj(t, r),
      i = n.isEmpty() ? new eg() : eg.createEmpty(n.first().getKey());
    return new jj({
      blockMap: n,
      entityMap: r,
      selectionBefore: i,
      selectionAfter: i,
    });
  },
  Jj = Gj,
  Yj = lw;
function Qj(e) {
  var t = Yj(e),
    r = 0,
    n = 0,
    i = 0,
    o = 0;
  if (t.length) {
    if (t.length > 1 && t[0].width === 0) {
      var l = t[1];
      (r = l.top), (n = l.right), (i = l.bottom), (o = l.left);
    } else {
      var s = t[0];
      (r = s.top), (n = s.right), (i = s.bottom), (o = s.left);
    }
    for (var c = 1; c < t.length; c++) {
      var f = t[c];
      f.height !== 0 &&
        f.width !== 0 &&
        ((r = Math.min(r, f.top)),
        (n = Math.max(n, f.right)),
        (i = Math.max(i, f.bottom)),
        (o = Math.min(o, f.left)));
    }
  }
  return { top: r, right: n, bottom: i, left: o, width: n - o, height: i - r };
}
var Xj = Qj,
  Zj = Xj;
function eA(e) {
  var t = e.getSelection();
  if (!t.rangeCount) return null;
  var r = t.getRangeAt(0),
    n = Zj(r),
    i = n.top,
    o = n.right,
    l = n.bottom,
    s = n.left;
  return i === 0 && o === 0 && l === 0 && s === 0 ? null : n;
}
var tA = eA,
  rA = YN,
  nA = ma,
  iA = or,
  oA = nO,
  aA = Yn,
  lA = Ld,
  sA = jd,
  uA = vx,
  cA = zI,
  fA = Gx,
  dA = Os,
  pA = It,
  hA = ex,
  mA = Me,
  vA = Wd,
  gA = UI,
  yA = Sw,
  xA = Ts,
  wA = pj,
  _A = Jj,
  SA = Dr,
  EA = Dw,
  kA = tA,
  CA = xw,
  bA = {
    Editor: cA,
    EditorBlock: fA,
    EditorState: mA,
    CompositeDecorator: oA,
    Entity: dA,
    EntityInstance: hA,
    BlockMapBuilder: nA,
    CharacterMetadata: iA,
    ContentBlock: aA,
    ContentState: lA,
    RawDraftContentState: gA,
    SelectionState: xA,
    AtomicBlockUtils: rA,
    KeyBindingUtil: vA,
    Modifier: pA,
    RichUtils: yA,
    DefaultDraftBlockRenderMap: sA,
    DefaultDraftInlineStyle: uA,
    convertFromHTML: CA,
    convertFromRaw: _A,
    convertToRaw: wA,
    genKey: SA,
    getDefaultKeyBinding: EA,
    getVisibleSelectionRect: kA,
  },
  yi = bA,
  us = { LINK: "LINK", IMAGE: "IMAGE", EMBED: "embed" },
  ka = {
    BOLD: "BOLD",
    CODE: "CODE",
    ITALIC: "ITALIC",
    STRIKETHROUGH: "STRIKETHROUGH",
    UNDERLINE: "UNDERLINE",
  };
new Se.OrderedSet();
var Ln, ml, vl;
function Ar(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var NA = ka.BOLD,
  OA = ka.CODE,
  TA = ka.ITALIC,
  DA = ka.STRIKETHROUGH,
  LA = ka.UNDERLINE,
  ig = /^data-([a-z0-9-]+)$/;
(Ln = {}),
  Ar(Ln, NA, { element: "strong" }),
  Ar(Ln, OA, { element: "code" }),
  Ar(Ln, TA, { element: "em" }),
  Ar(Ln, DA, { element: "del" }),
  Ar(Ln, LA, { element: "u" });
var gl =
  ((ml = {}),
  Ar(ml, us.LINK, {
    url: "href",
    href: "href",
    rel: "rel",
    target: "target",
    title: "title",
    className: "class",
  }),
  Ar(ml, us.IMAGE, {
    src: "src",
    height: "height",
    width: "width",
    alt: "alt",
    className: "class",
  }),
  ml);
(vl = {}),
  Ar(vl, us.LINK, function (e, t) {
    for (
      var r = gl.hasOwnProperty(e) ? gl[e] : {},
        n = t.getData(),
        i = {},
        o = 0,
        l = Object.keys(n);
      o < l.length;
      o++
    ) {
      var s = l[o],
        c = n[s];
      if (r.hasOwnProperty(s)) {
        var f = r[s];
        i[f] = c;
      } else ig.test(s) && (i[s] = c);
    }
    return i;
  }),
  Ar(vl, us.IMAGE, function (e, t) {
    for (
      var r = gl.hasOwnProperty(e) ? gl[e] : {},
        n = t.getData(),
        i = {},
        o = 0,
        l = Object.keys(n);
      o < l.length;
      o++
    ) {
      var s = l[o],
        c = n[s];
      if (r.hasOwnProperty(s)) {
        var f = r[s];
        i[f] = c;
      } else ig.test(s) && (i[s] = c);
    }
    return i;
  });
const BA = () => {
  const [e, t] = U.useState({
      companyName: "",
      jobTitle: "",
      img: "",
      jobType: "",
      timeline: "",
      location: "",
      desc1: "",
      desc2: "",
      task: "",
      skills: "",
    }),
    r = (h) => {
      const { name: g, value: p } = h.target;
      t({ ...e, [g]: p });
    },
    [n, i] = U.useState(() => yi.EditorState.createEmpty()),
    o = (h) => {
      i(h);
      const g = h.getCurrentContent(),
        p = yi.convertToRaw(g);
      t({ ...e, task: JSON.stringify(p) });
    },
    [l, s] = U.useState(() => yi.EditorState.createEmpty()),
    c = (h) => {
      s(h);
      const g = h.getCurrentContent(),
        p = yi.convertToRaw(g);
      t({ ...e, skills: JSON.stringify(p) });
    },
    f = (h) => {
      h.preventDefault(), alert(JSON.stringify(e));
    };
  return v.jsxs("div", {
    className:
      "w-full bg-black/90 h-fit pt-[100px] flex flex-col justify-center items-center",
    children: [
      v.jsx("p", {
        className:
          "text-[40px] text-white font-poppins font-semibold text-center pb-10",
        children: "Upload A Job",
      }),
      v.jsxs("form", {
        onSubmit: f,
        className:
          "lg:w-[50%] md:w-[80%] w-[90%] mb-10 py-10 rounded-[20px] bg-white h-fit gap-y-5 flex flex-col items-center",
        children: [
          v.jsx("input", {
            placeholder: "Company Name",
            name: "companyName",
            id: "companyName",
            value: e.companyName,
            onChange: r,
            className:
              "w-[90%] h-[50px] px-4 placeholder:text-black bg-white border border-black rounded-[10px] ",
          }),
          v.jsx("input", {
            placeholder: "Job Title",
            name: "jobTitle",
            id: "jobTitle",
            value: e.jobTitle,
            onChange: r,
            className:
              "w-[90%] h-[50px] px-4 placeholder:text-black bg-white border border-black rounded-[10px] ",
          }),
          v.jsxs("div", {
            className: "flex gap-x-5",
            children: [
              v.jsx("label", { children: "Upload Company Image" }),
              v.jsx("input", {
                placeholder: "Image",
                name: "img",
                id: "img",
                value: e.img,
                type: "file",
                onChange: r,
              }),
            ],
          }),
          v.jsx("input", {
            placeholder: "Job Type",
            name: "jobType",
            id: "jobType",
            value: e.jobType,
            onChange: r,
            className:
              "w-[90%] h-[50px] px-4 placeholder:text-black bg-white border border-black rounded-[10px] ",
          }),
          v.jsx("input", {
            placeholder: "Timeline",
            name: "timeline",
            id: "timeline",
            value: e.timeline,
            onChange: r,
            className:
              "w-[90%] h-[50px] px-4 placeholder:text-black bg-white border border-black rounded-[10px] ",
          }),
          v.jsx("input", {
            placeholder: "Location",
            name: "location",
            id: "location",
            value: e.location,
            onChange: r,
            className:
              "w-[90%] h-[50px] px-4 placeholder:text-black bg-white border border-black rounded-[10px] ",
          }),
          v.jsx("input", {
            placeholder: "Description",
            name: "desc1",
            id: "desc1",
            value: e.desc1,
            onChange: r,
            className:
              "w-[90%] h-[80px] px-4 placeholder:text-black bg-white border border-black rounded-[10px] ",
          }),
          v.jsx("input", {
            placeholder: "Description 2",
            name: "desc2",
            id: "desc2",
            value: e.desc2,
            onChange: r,
            className:
              "w-[90%] h-[80px] px-4 placeholder:text-black bg-white border border-black rounded-[10px] ",
          }),
          v.jsx("p", {
            className: "font-medium text-black text-[20px] text-left ",
            children: "Task & Responsibilities",
          }),
          v.jsx("div", {
            className:
              "w-[90%] h-[80px] overflow-y-scroll px-4 placeholder:text-black bg-white border border-black rounded-[10px] ",
            children: v.jsx(yi.Editor, {
              toolbarClassName: "toolbarClassName",
              wrapperClassName: "wrapperClassName",
              editorClassName: "editorClassName",
              editorState: n,
              onChange: o,
            }),
          }),
          v.jsx("p", {
            className: "font-medium text-black text-[20px] text-left ",
            children: "Skills & Experience Required",
          }),
          v.jsx("div", {
            className:
              "w-[90%] h-[80px]  overflow-y-scroll px-4 placeholder:text-black bg-white border border-black rounded-[10px] ",
            children: v.jsx(yi.Editor, {
              toolbarClassName: "toolbarClassName",
              wrapperClassName: "wrapperClassName",
              editorClassName: "editorClassName",
              editorState: l,
              onChange: c,
            }),
          }),
          v.jsx("button", {
            className:
              "w-[50%] h-[50px] bg-black text-white text-[20px] font-medium ",
            children: "Submit",
          }),
        ],
      }),
    ],
  });
};
function RA() {
  return (
    U.useState(""),
    v.jsx(v.Fragment, {
      children: v.jsxs(jE, {
        children: [
          v.jsx(YE, {}),
          v.jsxs(TE, {
            children: [
              v.jsx(en, { path: "/", element: v.jsx(UE, {}) }),
              v.jsx(en, { path: "/recruitment", element: v.jsx(QE, {}) }),
              v.jsx(en, { path: "/hrservice", element: v.jsx(XE, {}) }),
              v.jsx(en, { path: "/searchjobs", element: v.jsx(ZE, {}) }),
              v.jsx(en, { path: "/getintouch", element: v.jsx(ek, {}) }),
              v.jsx(en, { path: "/dashboard", element: v.jsx(tk, {}) }),
              v.jsx(en, { path: "/uploadjob", element: v.jsx(BA, {}) }),
            ],
          }),
          v.jsx($S, {}),
        ],
      }),
    })
  );
}
vc.createRoot(document.getElementById("root")).render(
  v.jsx(vg.StrictMode, { children: v.jsx(RA, {}) })
);
