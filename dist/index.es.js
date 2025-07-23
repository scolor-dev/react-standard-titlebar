import ne, { createContext as oe, useState as V, useEffect as ae, useContext as se } from "react";
var A = { exports: {} }, y = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var z;
function ce() {
  if (z) return y;
  z = 1;
  var n = Symbol.for("react.transitional.element"), m = Symbol.for("react.fragment");
  function u(c, s, l) {
    var f = null;
    if (l !== void 0 && (f = "" + l), s.key !== void 0 && (f = "" + s.key), "key" in s) {
      l = {};
      for (var i in s)
        i !== "key" && (l[i] = s[i]);
    } else l = s;
    return s = l.ref, {
      $$typeof: n,
      type: c,
      key: f,
      ref: s !== void 0 ? s : null,
      props: l
    };
  }
  return y.Fragment = m, y.jsx = u, y.jsxs = u, y;
}
var P = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var W;
function le() {
  return W || (W = 1, process.env.NODE_ENV !== "production" && function() {
    function n(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ee ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case k:
          return "Fragment";
        case J:
          return "Profiler";
        case j:
          return "StrictMode";
        case H:
          return "Suspense";
        case B:
          return "SuspenseList";
        case K:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case O:
            return "Portal";
          case X:
            return (e.displayName || "Context") + ".Provider";
          case G:
            return (e._context.displayName || "Context") + ".Consumer";
          case Z:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Q:
            return r = e.displayName || null, r !== null ? r : n(e.type) || "Memo";
          case Y:
            r = e._payload, e = e._init;
            try {
              return n(e(r));
            } catch {
            }
        }
      return null;
    }
    function m(e) {
      return "" + e;
    }
    function u(e) {
      try {
        m(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, o = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          o
        ), m(e);
      }
    }
    function c(e) {
      if (e === k) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === Y)
        return "<...>";
      try {
        var r = n(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var e = w.A;
      return e === null ? null : e.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function f(e) {
      if ($.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function i(e, r) {
      function t() {
        M || (M = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function b() {
      var e = n(this.type);
      return I[e] || (I[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function h(e, r, t, o, _, d, g, N) {
      return t = d.ref, e = {
        $$typeof: p,
        type: e,
        key: r,
        props: d,
        _owner: _
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: b
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: g
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: N
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function T(e, r, t, o, _, d, g, N) {
      var a = r.children;
      if (a !== void 0)
        if (o)
          if (re(a)) {
            for (o = 0; o < a.length; o++)
              v(a[o]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else v(a);
      if ($.call(r, "key")) {
        a = n(e);
        var x = Object.keys(r).filter(function(te) {
          return te !== "key";
        });
        o = 0 < x.length ? "{key: someKey, " + x.join(": ..., ") + ": ...}" : "{key: someKey}", L[a + o] || (x = 0 < x.length ? "{" + x.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          o,
          a,
          x,
          a
        ), L[a + o] = !0);
      }
      if (a = null, t !== void 0 && (u(t), a = "" + t), f(r) && (u(r.key), a = "" + r.key), "key" in r) {
        t = {};
        for (var C in r)
          C !== "key" && (t[C] = r[C]);
      } else t = r;
      return a && i(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), h(
        e,
        a,
        d,
        _,
        s(),
        t,
        g,
        N
      );
    }
    function v(e) {
      typeof e == "object" && e !== null && e.$$typeof === p && e._store && (e._store.validated = 1);
    }
    var E = ne, p = Symbol.for("react.transitional.element"), O = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), J = Symbol.for("react.profiler"), G = Symbol.for("react.consumer"), X = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), Q = Symbol.for("react.memo"), Y = Symbol.for("react.lazy"), K = Symbol.for("react.activity"), ee = Symbol.for("react.client.reference"), w = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = Object.prototype.hasOwnProperty, re = Array.isArray, S = console.createTask ? console.createTask : function() {
      return null;
    };
    E = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var M, I = {}, D = E["react-stack-bottom-frame"].bind(
      E,
      l
    )(), F = S(c(l)), L = {};
    P.Fragment = k, P.jsx = function(e, r, t, o, _) {
      var d = 1e4 > w.recentlyCreatedOwnerStacks++;
      return T(
        e,
        r,
        t,
        !1,
        o,
        _,
        d ? Error("react-stack-top-frame") : D,
        d ? S(c(e)) : F
      );
    }, P.jsxs = function(e, r, t, o, _) {
      var d = 1e4 > w.recentlyCreatedOwnerStacks++;
      return T(
        e,
        r,
        t,
        !0,
        o,
        _,
        d ? Error("react-stack-top-frame") : D,
        d ? S(c(e)) : F
      );
    };
  }()), P;
}
var U;
function ie() {
  return U || (U = 1, process.env.NODE_ENV === "production" ? A.exports = ce() : A.exports = le()), A.exports;
}
var R = ie();
const q = oe(void 0), me = ({
  theme: n = "system",
  headerBg: m,
  logoColor: u,
  buttons: c,
  children: s
}) => {
  const [l, f] = V("light");
  return ae(() => {
    let i = n;
    if (n === "system" && (i = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), f(i), document.documentElement.setAttribute("data-theme", i), i === "custom") {
      m && document.documentElement.style.setProperty("--header-bg", m), u && document.documentElement.style.setProperty("--logo-color", u);
      const b = (h, T) => {
        T && Object.entries(T).forEach(([v, E]) => {
          if (E) {
            const p = `--btn-${h}${v.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
            document.documentElement.style.setProperty(p, E);
          }
        });
      };
      b("", c?.base), b("min-", c?.min), b("max-", c?.max), b("exit-", c?.exit);
    }
  }, [n, m, u, c]), /* @__PURE__ */ R.jsx(
    q.Provider,
    {
      value: {
        theme: l,
        headerBg: m,
        logoColor: u,
        buttons: c
      },
      children: s
    }
  );
}, ue = () => {
  const n = se(q);
  if (!n) throw new Error("useTheme must be used within a ThemeProvider");
  return n;
}, de = ({
  onMinimize: n,
  onMaximizeToggle: m,
  onExit: u,
  title: c = "My App"
}) => {
  const { headerBg: s, logoColor: l, buttons: f } = ue(), i = f?.base, b = f?.min, h = f?.max, T = f?.exit, [v, E] = V(!1), p = () => {
    n?.();
  }, O = () => {
    const j = !v;
    E(j), m?.(j);
  }, k = () => {
    u?.();
  };
  return /* @__PURE__ */ R.jsxs(
    "div",
    {
      className: "titlebar",
      style: {
        background: s,
        color: l
      },
      children: [
        /* @__PURE__ */ R.jsx("div", { className: "titlebar__logo", children: c }),
        /* @__PURE__ */ R.jsxs("div", { className: "titlebar__controls", children: [
          /* @__PURE__ */ R.jsx(
            "button",
            {
              className: "titlebar__btn",
              style: { color: b?.color ?? i?.color },
              onClick: p,
              children: "_"
            }
          ),
          /* @__PURE__ */ R.jsx(
            "button",
            {
              className: "titlebar__btn",
              style: { color: h?.color ?? i?.color },
              onClick: O,
              children: v ? "🗗" : "☐"
            }
          ),
          /* @__PURE__ */ R.jsx(
            "button",
            {
              className: "titlebar__btn titlebar__btn--exit",
              style: { color: T?.color ?? i?.color },
              onClick: k,
              children: "✕"
            }
          )
        ] })
      ]
    }
  );
};
export {
  me as ThemeProvider,
  de as Titlebar
};
