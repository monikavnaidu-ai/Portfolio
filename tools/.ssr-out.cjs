var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/react/cjs/react.production.min.js
var require_react_production_min = __commonJS({
  "node_modules/react/cjs/react.production.min.js"(exports2) {
    "use strict";
    var l = Symbol.for("react.element");
    var n = Symbol.for("react.portal");
    var p = Symbol.for("react.fragment");
    var q = Symbol.for("react.strict_mode");
    var r = Symbol.for("react.profiler");
    var t = Symbol.for("react.provider");
    var u = Symbol.for("react.context");
    var v = Symbol.for("react.forward_ref");
    var w = Symbol.for("react.suspense");
    var x = Symbol.for("react.memo");
    var y = Symbol.for("react.lazy");
    var z = Symbol.iterator;
    function A(a) {
      if (null === a || "object" !== typeof a) return null;
      a = z && a[z] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var B = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } };
    var C = Object.assign;
    var D = {};
    function E(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    E.prototype.isReactComponent = {};
    E.prototype.setState = function(a, b) {
      if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, a, b, "setState");
    };
    E.prototype.forceUpdate = function(a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function F() {
    }
    F.prototype = E.prototype;
    function G(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    var H = G.prototype = new F();
    H.constructor = G;
    C(H, E.prototype);
    H.isPureReactComponent = true;
    var I = Array.isArray;
    var J = Object.prototype.hasOwnProperty;
    var K = { current: null };
    var L = { key: true, ref: true, __self: true, __source: true };
    function M(a, b, e) {
      var d, c = {}, k = null, h = null;
      if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
      var g = arguments.length - 2;
      if (1 === g) c.children = e;
      else if (1 < g) {
        for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
        c.children = f;
      }
      if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
      return { $$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current };
    }
    function N(a, b) {
      return { $$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
    }
    function O(a) {
      return "object" === typeof a && null !== a && a.$$typeof === l;
    }
    function escape(a) {
      var b = { "=": "=0", ":": "=2" };
      return "$" + a.replace(/[=:]/g, function(a2) {
        return b[a2];
      });
    }
    var P = /\/+/g;
    function Q(a, b) {
      return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
    }
    function R(a, b, e, d, c) {
      var k = typeof a;
      if ("undefined" === k || "boolean" === k) a = null;
      var h = false;
      if (null === a) h = true;
      else switch (k) {
        case "string":
        case "number":
          h = true;
          break;
        case "object":
          switch (a.$$typeof) {
            case l:
            case n:
              h = true;
          }
      }
      if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
        return a2;
      })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
      h = 0;
      d = "" === d ? "." : d + ":";
      if (I(a)) for (var g = 0; g < a.length; g++) {
        k = a[g];
        var f = d + Q(k, g);
        h += R(k, b, e, f, c);
      }
      else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done; ) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
      else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
      return h;
    }
    function S(a, b, e) {
      if (null == a) return a;
      var d = [], c = 0;
      R(a, d, "", "", function(a2) {
        return b.call(e, a2, c++);
      });
      return d;
    }
    function T(a) {
      if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(b2) {
          if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
        }, function(b2) {
          if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
        });
        -1 === a._status && (a._status = 0, a._result = b);
      }
      if (1 === a._status) return a._result.default;
      throw a._result;
    }
    var U = { current: null };
    var V = { transition: null };
    var W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
    function X() {
      throw Error("act(...) is not supported in production builds of React.");
    }
    exports2.Children = { map: S, forEach: function(a, b, e) {
      S(a, function() {
        b.apply(this, arguments);
      }, e);
    }, count: function(a) {
      var b = 0;
      S(a, function() {
        b++;
      });
      return b;
    }, toArray: function(a) {
      return S(a, function(a2) {
        return a2;
      }) || [];
    }, only: function(a) {
      if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
      return a;
    } };
    exports2.Component = E;
    exports2.Fragment = p;
    exports2.Profiler = r;
    exports2.PureComponent = G;
    exports2.StrictMode = q;
    exports2.Suspense = w;
    exports2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
    exports2.act = X;
    exports2.cloneElement = function(a, b, e) {
      if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
      var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
      if (null != b) {
        void 0 !== b.ref && (k = b.ref, h = K.current);
        void 0 !== b.key && (c = "" + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
      }
      var f = arguments.length - 2;
      if (1 === f) d.children = e;
      else if (1 < f) {
        g = Array(f);
        for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
        d.children = g;
      }
      return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
    };
    exports2.createContext = function(a) {
      a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
      a.Provider = { $$typeof: t, _context: a };
      return a.Consumer = a;
    };
    exports2.createElement = M;
    exports2.createFactory = function(a) {
      var b = M.bind(null, a);
      b.type = a;
      return b;
    };
    exports2.createRef = function() {
      return { current: null };
    };
    exports2.forwardRef = function(a) {
      return { $$typeof: v, render: a };
    };
    exports2.isValidElement = O;
    exports2.lazy = function(a) {
      return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
    };
    exports2.memo = function(a, b) {
      return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
    };
    exports2.startTransition = function(a) {
      var b = V.transition;
      V.transition = {};
      try {
        a();
      } finally {
        V.transition = b;
      }
    };
    exports2.unstable_act = X;
    exports2.useCallback = function(a, b) {
      return U.current.useCallback(a, b);
    };
    exports2.useContext = function(a) {
      return U.current.useContext(a);
    };
    exports2.useDebugValue = function() {
    };
    exports2.useDeferredValue = function(a) {
      return U.current.useDeferredValue(a);
    };
    exports2.useEffect = function(a, b) {
      return U.current.useEffect(a, b);
    };
    exports2.useId = function() {
      return U.current.useId();
    };
    exports2.useImperativeHandle = function(a, b, e) {
      return U.current.useImperativeHandle(a, b, e);
    };
    exports2.useInsertionEffect = function(a, b) {
      return U.current.useInsertionEffect(a, b);
    };
    exports2.useLayoutEffect = function(a, b) {
      return U.current.useLayoutEffect(a, b);
    };
    exports2.useMemo = function(a, b) {
      return U.current.useMemo(a, b);
    };
    exports2.useReducer = function(a, b, e) {
      return U.current.useReducer(a, b, e);
    };
    exports2.useRef = function(a) {
      return U.current.useRef(a);
    };
    exports2.useState = function(a) {
      return U.current.useState(a);
    };
    exports2.useSyncExternalStore = function(a, b, e) {
      return U.current.useSyncExternalStore(a, b, e);
    };
    exports2.useTransition = function() {
      return U.current.useTransition();
    };
    exports2.version = "18.3.1";
  }
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports2, module2) {
    "use strict";
    if (true) {
      module2.exports = require_react_production_min();
    } else {
      module2.exports = null;
    }
  }
});

// node_modules/react-dom/cjs/react-dom-server-legacy.node.production.min.js
var require_react_dom_server_legacy_node_production_min = __commonJS({
  "node_modules/react-dom/cjs/react-dom-server-legacy.node.production.min.js"(exports2) {
    "use strict";
    var ea = require_react();
    var fa = require("stream");
    var n = Object.prototype.hasOwnProperty;
    var ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
    var ia = {};
    var ja = {};
    function ka(a) {
      if (n.call(ja, a)) return true;
      if (n.call(ia, a)) return false;
      if (ha.test(a)) return ja[a] = true;
      ia[a] = true;
      return false;
    }
    function q(a, b, c, d, f, e, g) {
      this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
      this.attributeName = d;
      this.attributeNamespace = f;
      this.mustUseProperty = c;
      this.propertyName = a;
      this.type = b;
      this.sanitizeURL = e;
      this.removeEmptyString = g;
    }
    var r = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
      r[a] = new q(a, 0, false, a, null, false, false);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
      var b = a[0];
      r[b] = new q(b, 1, false, a[1], null, false, false);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
      r[a] = new q(a, 2, false, a.toLowerCase(), null, false, false);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
      r[a] = new q(a, 2, false, a, null, false, false);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
      r[a] = new q(a, 3, false, a.toLowerCase(), null, false, false);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(a) {
      r[a] = new q(a, 3, true, a, null, false, false);
    });
    ["capture", "download"].forEach(function(a) {
      r[a] = new q(a, 4, false, a, null, false, false);
    });
    ["cols", "rows", "size", "span"].forEach(function(a) {
      r[a] = new q(a, 6, false, a, null, false, false);
    });
    ["rowSpan", "start"].forEach(function(a) {
      r[a] = new q(a, 5, false, a.toLowerCase(), null, false, false);
    });
    var la = /[\-:]([a-z])/g;
    function ma(a) {
      return a[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
      var b = a.replace(
        la,
        ma
      );
      r[b] = new q(b, 1, false, a, null, false, false);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
      var b = a.replace(la, ma);
      r[b] = new q(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
      var b = a.replace(la, ma);
      r[b] = new q(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
    });
    ["tabIndex", "crossOrigin"].forEach(function(a) {
      r[a] = new q(a, 1, false, a.toLowerCase(), null, false, false);
    });
    r.xlinkHref = new q("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
    ["src", "href", "action", "formAction"].forEach(function(a) {
      r[a] = new q(a, 1, false, a.toLowerCase(), null, true, true);
    });
    var t = {
      animationIterationCount: true,
      aspectRatio: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    };
    var na = ["Webkit", "ms", "Moz", "O"];
    Object.keys(t).forEach(function(a) {
      na.forEach(function(b) {
        b = b + a.charAt(0).toUpperCase() + a.substring(1);
        t[b] = t[a];
      });
    });
    var oa = /["'&<>]/;
    function u(a) {
      if ("boolean" === typeof a || "number" === typeof a) return "" + a;
      a = "" + a;
      var b = oa.exec(a);
      if (b) {
        var c = "", d, f = 0;
        for (d = b.index; d < a.length; d++) {
          switch (a.charCodeAt(d)) {
            case 34:
              b = "&quot;";
              break;
            case 38:
              b = "&amp;";
              break;
            case 39:
              b = "&#x27;";
              break;
            case 60:
              b = "&lt;";
              break;
            case 62:
              b = "&gt;";
              break;
            default:
              continue;
          }
          f !== d && (c += a.substring(f, d));
          f = d + 1;
          c += b;
        }
        a = f !== d ? c + a.substring(f, d) : c;
      }
      return a;
    }
    var pa = /([A-Z])/g;
    var qa = /^ms-/;
    var ra = Array.isArray;
    function v(a, b) {
      return { insertionMode: a, selectedValue: b };
    }
    function sa(a, b, c) {
      switch (b) {
        case "select":
          return v(1, null != c.value ? c.value : c.defaultValue);
        case "svg":
          return v(2, null);
        case "math":
          return v(3, null);
        case "foreignObject":
          return v(1, null);
        case "table":
          return v(4, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return v(5, null);
        case "colgroup":
          return v(7, null);
        case "tr":
          return v(6, null);
      }
      return 4 <= a.insertionMode || 0 === a.insertionMode ? v(1, null) : a;
    }
    var ta = /* @__PURE__ */ new Map();
    function ua(a, b, c) {
      if ("object" !== typeof c) throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      b = true;
      for (var d in c) if (n.call(c, d)) {
        var f = c[d];
        if (null != f && "boolean" !== typeof f && "" !== f) {
          if (0 === d.indexOf("--")) {
            var e = u(d);
            f = u(("" + f).trim());
          } else {
            e = d;
            var g = ta.get(e);
            void 0 !== g ? e = g : (g = u(e.replace(pa, "-$1").toLowerCase().replace(qa, "-ms-")), ta.set(e, g), e = g);
            f = "number" === typeof f ? 0 === f || n.call(
              t,
              d
            ) ? "" + f : f + "px" : u(("" + f).trim());
          }
          b ? (b = false, a.push(' style="', e, ":", f)) : a.push(";", e, ":", f);
        }
      }
      b || a.push('"');
    }
    function w(a, b, c, d) {
      switch (c) {
        case "style":
          ua(a, b, d);
          return;
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (!(2 < c.length) || "o" !== c[0] && "O" !== c[0] || "n" !== c[1] && "N" !== c[1]) {
        if (b = r.hasOwnProperty(c) ? r[c] : null, null !== b) {
          switch (typeof d) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!b.acceptsBooleans) return;
          }
          c = b.attributeName;
          switch (b.type) {
            case 3:
              d && a.push(" ", c, '=""');
              break;
            case 4:
              true === d ? a.push(" ", c, '=""') : false !== d && a.push(" ", c, '="', u(d), '"');
              break;
            case 5:
              isNaN(d) || a.push(" ", c, '="', u(d), '"');
              break;
            case 6:
              !isNaN(d) && 1 <= d && a.push(" ", c, '="', u(d), '"');
              break;
            default:
              b.sanitizeURL && (d = "" + d), a.push(" ", c, '="', u(d), '"');
          }
        } else if (ka(c)) {
          switch (typeof d) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (b = c.toLowerCase().slice(0, 5), "data-" !== b && "aria-" !== b) return;
          }
          a.push(" ", c, '="', u(d), '"');
        }
      }
    }
    function x(a, b, c) {
      if (null != b) {
        if (null != c) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if ("object" !== typeof b || !("__html" in b)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        b = b.__html;
        null !== b && void 0 !== b && a.push("" + b);
      }
    }
    function va(a) {
      var b = "";
      ea.Children.forEach(a, function(a2) {
        null != a2 && (b += a2);
      });
      return b;
    }
    function wa(a, b, c, d) {
      a.push(z(c));
      var f = c = null, e;
      for (e in b) if (n.call(b, e)) {
        var g = b[e];
        if (null != g) switch (e) {
          case "children":
            c = g;
            break;
          case "dangerouslySetInnerHTML":
            f = g;
            break;
          default:
            w(a, d, e, g);
        }
      }
      a.push(">");
      x(a, f, c);
      return "string" === typeof c ? (a.push(u(c)), null) : c;
    }
    var xa = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
    var ya = /* @__PURE__ */ new Map();
    function z(a) {
      var b = ya.get(a);
      if (void 0 === b) {
        if (!xa.test(a)) throw Error("Invalid tag: " + a);
        b = "<" + a;
        ya.set(a, b);
      }
      return b;
    }
    function za(a, b, c, d, f) {
      switch (b) {
        case "select":
          a.push(z("select"));
          var e = null, g = null;
          for (l in c) if (n.call(c, l)) {
            var h = c[l];
            if (null != h) switch (l) {
              case "children":
                e = h;
                break;
              case "dangerouslySetInnerHTML":
                g = h;
                break;
              case "defaultValue":
              case "value":
                break;
              default:
                w(a, d, l, h);
            }
          }
          a.push(">");
          x(a, g, e);
          return e;
        case "option":
          g = f.selectedValue;
          a.push(z("option"));
          var k = h = null, m = null;
          var l = null;
          for (e in c) if (n.call(c, e)) {
            var p = c[e];
            if (null != p) switch (e) {
              case "children":
                h = p;
                break;
              case "selected":
                m = p;
                break;
              case "dangerouslySetInnerHTML":
                l = p;
                break;
              case "value":
                k = p;
              default:
                w(a, d, e, p);
            }
          }
          if (null != g) if (c = null !== k ? "" + k : va(h), ra(g)) for (d = 0; d < g.length; d++) {
            if ("" + g[d] === c) {
              a.push(' selected=""');
              break;
            }
          }
          else "" + g === c && a.push(' selected=""');
          else m && a.push(' selected=""');
          a.push(">");
          x(a, l, h);
          return h;
        case "textarea":
          a.push(z("textarea"));
          l = g = e = null;
          for (h in c) if (n.call(c, h) && (k = c[h], null != k)) switch (h) {
            case "children":
              l = k;
              break;
            case "value":
              e = k;
              break;
            case "defaultValue":
              g = k;
              break;
            case "dangerouslySetInnerHTML":
              throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              w(a, d, h, k);
          }
          null === e && null !== g && (e = g);
          a.push(">");
          if (null != l) {
            if (null != e) throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (ra(l) && 1 < l.length) throw Error("<textarea> can only have at most one child.");
            e = "" + l;
          }
          "string" === typeof e && "\n" === e[0] && a.push("\n");
          null !== e && a.push(u("" + e));
          return null;
        case "input":
          a.push(z("input"));
          k = l = h = e = null;
          for (g in c) if (n.call(c, g) && (m = c[g], null != m)) switch (g) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              k = m;
              break;
            case "defaultValue":
              h = m;
              break;
            case "checked":
              l = m;
              break;
            case "value":
              e = m;
              break;
            default:
              w(a, d, g, m);
          }
          null !== l ? w(a, d, "checked", l) : null !== k && w(a, d, "checked", k);
          null !== e ? w(a, d, "value", e) : null !== h && w(a, d, "value", h);
          a.push("/>");
          return null;
        case "menuitem":
          a.push(z("menuitem"));
          for (var B in c) if (n.call(c, B) && (e = c[B], null != e)) switch (B) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              w(
                a,
                d,
                B,
                e
              );
          }
          a.push(">");
          return null;
        case "title":
          a.push(z("title"));
          e = null;
          for (p in c) if (n.call(c, p) && (g = c[p], null != g)) switch (p) {
            case "children":
              e = g;
              break;
            case "dangerouslySetInnerHTML":
              throw Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              w(a, d, p, g);
          }
          a.push(">");
          return e;
        case "listing":
        case "pre":
          a.push(z(b));
          g = e = null;
          for (k in c) if (n.call(c, k) && (h = c[k], null != h)) switch (k) {
            case "children":
              e = h;
              break;
            case "dangerouslySetInnerHTML":
              g = h;
              break;
            default:
              w(a, d, k, h);
          }
          a.push(">");
          if (null != g) {
            if (null != e) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
            if ("object" !== typeof g || !("__html" in g)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
            c = g.__html;
            null !== c && void 0 !== c && ("string" === typeof c && 0 < c.length && "\n" === c[0] ? a.push("\n", c) : a.push("" + c));
          }
          "string" === typeof e && "\n" === e[0] && a.push("\n");
          return e;
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          a.push(z(b));
          for (var C in c) if (n.call(c, C) && (e = c[C], null != e)) switch (C) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(b + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              w(a, d, C, e);
          }
          a.push("/>");
          return null;
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return wa(a, c, b, d);
        case "html":
          return 0 === f.insertionMode && a.push("<!DOCTYPE html>"), wa(a, c, b, d);
        default:
          if (-1 === b.indexOf("-") && "string" !== typeof c.is) return wa(a, c, b, d);
          a.push(z(b));
          g = e = null;
          for (m in c) if (n.call(c, m) && (h = c[m], null != h)) switch (m) {
            case "children":
              e = h;
              break;
            case "dangerouslySetInnerHTML":
              g = h;
              break;
            case "style":
              ua(a, d, h);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              ka(m) && "function" !== typeof h && "symbol" !== typeof h && a.push(" ", m, '="', u(h), '"');
          }
          a.push(">");
          x(a, g, e);
          return e;
      }
    }
    function Aa(a, b, c) {
      a.push('<!--$?--><template id="');
      if (null === c) throw Error("An ID must have been assigned before we can complete the boundary.");
      a.push(c);
      return a.push('"></template>');
    }
    function Ba(a, b, c, d) {
      switch (c.insertionMode) {
        case 0:
        case 1:
          return a.push('<div hidden id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        case 2:
          return a.push('<svg aria-hidden="true" style="display:none" id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        case 3:
          return a.push('<math aria-hidden="true" style="display:none" id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        case 4:
          return a.push('<table hidden id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        case 5:
          return a.push('<table hidden><tbody id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        case 6:
          return a.push('<table hidden><tr id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        case 7:
          return a.push('<table hidden><colgroup id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        default:
          throw Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function Ca(a, b) {
      switch (b.insertionMode) {
        case 0:
        case 1:
          return a.push("</div>");
        case 2:
          return a.push("</svg>");
        case 3:
          return a.push("</math>");
        case 4:
          return a.push("</table>");
        case 5:
          return a.push("</tbody></table>");
        case 6:
          return a.push("</tr></table>");
        case 7:
          return a.push("</colgroup></table>");
        default:
          throw Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var Da = /[<\u2028\u2029]/g;
    function Ea(a) {
      return JSON.stringify(a).replace(Da, function(a2) {
        switch (a2) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    function Fa(a, b) {
      b = void 0 === b ? "" : b;
      return { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: b + "P:", segmentPrefix: b + "S:", boundaryPrefix: b + "B:", idPrefix: b, nextSuspenseID: 0, sentCompleteSegmentFunction: false, sentCompleteBoundaryFunction: false, sentClientRenderFunction: false, generateStaticMarkup: a };
    }
    function Ga() {
      return { insertionMode: 1, selectedValue: null };
    }
    function Ha(a, b, c, d) {
      if (c.generateStaticMarkup) return a.push(u(b)), false;
      "" === b ? a = d : (d && a.push("<!-- -->"), a.push(u(b)), a = true);
      return a;
    }
    var A = Object.assign;
    var Ia = Symbol.for("react.element");
    var Ja = Symbol.for("react.portal");
    var Ka = Symbol.for("react.fragment");
    var La = Symbol.for("react.strict_mode");
    var Ma = Symbol.for("react.profiler");
    var Na = Symbol.for("react.provider");
    var Oa = Symbol.for("react.context");
    var Pa = Symbol.for("react.forward_ref");
    var Qa = Symbol.for("react.suspense");
    var Ra = Symbol.for("react.suspense_list");
    var Sa = Symbol.for("react.memo");
    var Ta = Symbol.for("react.lazy");
    var Ua = Symbol.for("react.scope");
    var Va = Symbol.for("react.debug_trace_mode");
    var Wa = Symbol.for("react.legacy_hidden");
    var Xa = Symbol.for("react.default_value");
    var Ya = Symbol.iterator;
    function Za(a) {
      if (null == a) return null;
      if ("function" === typeof a) return a.displayName || a.name || null;
      if ("string" === typeof a) return a;
      switch (a) {
        case Ka:
          return "Fragment";
        case Ja:
          return "Portal";
        case Ma:
          return "Profiler";
        case La:
          return "StrictMode";
        case Qa:
          return "Suspense";
        case Ra:
          return "SuspenseList";
      }
      if ("object" === typeof a) switch (a.$$typeof) {
        case Oa:
          return (a.displayName || "Context") + ".Consumer";
        case Na:
          return (a._context.displayName || "Context") + ".Provider";
        case Pa:
          var b = a.render;
          a = a.displayName;
          a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
          return a;
        case Sa:
          return b = a.displayName || null, null !== b ? b : Za(a.type) || "Memo";
        case Ta:
          b = a._payload;
          a = a._init;
          try {
            return Za(a(b));
          } catch (c) {
          }
      }
      return null;
    }
    var $a = {};
    function ab(a, b) {
      a = a.contextTypes;
      if (!a) return $a;
      var c = {}, d;
      for (d in a) c[d] = b[d];
      return c;
    }
    var D = null;
    function E(a, b) {
      if (a !== b) {
        a.context._currentValue2 = a.parentValue;
        a = a.parent;
        var c = b.parent;
        if (null === a) {
          if (null !== c) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (null === c) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
          E(a, c);
        }
        b.context._currentValue2 = b.value;
      }
    }
    function bb(a) {
      a.context._currentValue2 = a.parentValue;
      a = a.parent;
      null !== a && bb(a);
    }
    function cb(a) {
      var b = a.parent;
      null !== b && cb(b);
      a.context._currentValue2 = a.value;
    }
    function db(a, b) {
      a.context._currentValue2 = a.parentValue;
      a = a.parent;
      if (null === a) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      a.depth === b.depth ? E(a, b) : db(a, b);
    }
    function eb(a, b) {
      var c = b.parent;
      if (null === c) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      a.depth === c.depth ? E(a, c) : eb(a, c);
      b.context._currentValue2 = b.value;
    }
    function F(a) {
      var b = D;
      b !== a && (null === b ? cb(a) : null === a ? bb(b) : b.depth === a.depth ? E(b, a) : b.depth > a.depth ? db(b, a) : eb(b, a), D = a);
    }
    var fb = { isMounted: function() {
      return false;
    }, enqueueSetState: function(a, b) {
      a = a._reactInternals;
      null !== a.queue && a.queue.push(b);
    }, enqueueReplaceState: function(a, b) {
      a = a._reactInternals;
      a.replace = true;
      a.queue = [b];
    }, enqueueForceUpdate: function() {
    } };
    function gb(a, b, c, d) {
      var f = void 0 !== a.state ? a.state : null;
      a.updater = fb;
      a.props = c;
      a.state = f;
      var e = { queue: [], replace: false };
      a._reactInternals = e;
      var g = b.contextType;
      a.context = "object" === typeof g && null !== g ? g._currentValue2 : d;
      g = b.getDerivedStateFromProps;
      "function" === typeof g && (g = g(c, f), f = null === g || void 0 === g ? f : A({}, f, g), a.state = f);
      if ("function" !== typeof b.getDerivedStateFromProps && "function" !== typeof a.getSnapshotBeforeUpdate && ("function" === typeof a.UNSAFE_componentWillMount || "function" === typeof a.componentWillMount)) if (b = a.state, "function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), b !== a.state && fb.enqueueReplaceState(a, a.state, null), null !== e.queue && 0 < e.queue.length) if (b = e.queue, g = e.replace, e.queue = null, e.replace = false, g && 1 === b.length) a.state = b[0];
      else {
        e = g ? b[0] : a.state;
        f = true;
        for (g = g ? 1 : 0; g < b.length; g++) {
          var h = b[g];
          h = "function" === typeof h ? h.call(a, e, c, d) : h;
          null != h && (f ? (f = false, e = A({}, e, h)) : A(e, h));
        }
        a.state = e;
      }
      else e.queue = null;
    }
    var hb = { id: 1, overflow: "" };
    function ib(a, b, c) {
      var d = a.id;
      a = a.overflow;
      var f = 32 - G(d) - 1;
      d &= ~(1 << f);
      c += 1;
      var e = 32 - G(b) + f;
      if (30 < e) {
        var g = f - f % 5;
        e = (d & (1 << g) - 1).toString(32);
        d >>= g;
        f -= g;
        return { id: 1 << 32 - G(b) + f | c << f | d, overflow: e + a };
      }
      return { id: 1 << e | c << f | d, overflow: a };
    }
    var G = Math.clz32 ? Math.clz32 : jb;
    var kb = Math.log;
    var lb = Math.LN2;
    function jb(a) {
      a >>>= 0;
      return 0 === a ? 32 : 31 - (kb(a) / lb | 0) | 0;
    }
    function mb(a, b) {
      return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
    }
    var nb = "function" === typeof Object.is ? Object.is : mb;
    var H = null;
    var ob = null;
    var I = null;
    var J = null;
    var K = false;
    var L = false;
    var M = 0;
    var N = null;
    var O = 0;
    function P() {
      if (null === H) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
      return H;
    }
    function rb() {
      if (0 < O) throw Error("Rendered more hooks than during the previous render");
      return { memoizedState: null, queue: null, next: null };
    }
    function sb() {
      null === J ? null === I ? (K = false, I = J = rb()) : (K = true, J = I) : null === J.next ? (K = false, J = J.next = rb()) : (K = true, J = J.next);
      return J;
    }
    function tb() {
      ob = H = null;
      L = false;
      I = null;
      O = 0;
      J = N = null;
    }
    function ub(a, b) {
      return "function" === typeof b ? b(a) : b;
    }
    function vb(a, b, c) {
      H = P();
      J = sb();
      if (K) {
        var d = J.queue;
        b = d.dispatch;
        if (null !== N && (c = N.get(d), void 0 !== c)) {
          N.delete(d);
          d = J.memoizedState;
          do
            d = a(d, c.action), c = c.next;
          while (null !== c);
          J.memoizedState = d;
          return [d, b];
        }
        return [J.memoizedState, b];
      }
      a = a === ub ? "function" === typeof b ? b() : b : void 0 !== c ? c(b) : b;
      J.memoizedState = a;
      a = J.queue = { last: null, dispatch: null };
      a = a.dispatch = wb.bind(null, H, a);
      return [J.memoizedState, a];
    }
    function xb(a, b) {
      H = P();
      J = sb();
      b = void 0 === b ? null : b;
      if (null !== J) {
        var c = J.memoizedState;
        if (null !== c && null !== b) {
          var d = c[1];
          a: if (null === d) d = false;
          else {
            for (var f = 0; f < d.length && f < b.length; f++) if (!nb(b[f], d[f])) {
              d = false;
              break a;
            }
            d = true;
          }
          if (d) return c[0];
        }
      }
      a = a();
      J.memoizedState = [a, b];
      return a;
    }
    function wb(a, b, c) {
      if (25 <= O) throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (a === H) if (L = true, a = { action: c, next: null }, null === N && (N = /* @__PURE__ */ new Map()), c = N.get(b), void 0 === c) N.set(b, a);
      else {
        for (b = c; null !== b.next; ) b = b.next;
        b.next = a;
      }
    }
    function yb() {
      throw Error("startTransition cannot be called during server rendering.");
    }
    function Q() {
    }
    var zb = { readContext: function(a) {
      return a._currentValue2;
    }, useContext: function(a) {
      P();
      return a._currentValue2;
    }, useMemo: xb, useReducer: vb, useRef: function(a) {
      H = P();
      J = sb();
      var b = J.memoizedState;
      return null === b ? (a = { current: a }, J.memoizedState = a) : b;
    }, useState: function(a) {
      return vb(ub, a);
    }, useInsertionEffect: Q, useLayoutEffect: function() {
    }, useCallback: function(a, b) {
      return xb(function() {
        return a;
      }, b);
    }, useImperativeHandle: Q, useEffect: Q, useDebugValue: Q, useDeferredValue: function(a) {
      P();
      return a;
    }, useTransition: function() {
      P();
      return [false, yb];
    }, useId: function() {
      var a = ob.treeContext;
      var b = a.overflow;
      a = a.id;
      a = (a & ~(1 << 32 - G(a) - 1)).toString(32) + b;
      var c = R;
      if (null === c) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      b = M++;
      a = ":" + c.idPrefix + "R" + a;
      0 < b && (a += "H" + b.toString(32));
      return a + ":";
    }, useMutableSource: function(a, b) {
      P();
      return b(a._source);
    }, useSyncExternalStore: function(a, b, c) {
      if (void 0 === c) throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return c();
    } };
    var R = null;
    var Ab = ea.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
    function Bb(a) {
      console.error(a);
      return null;
    }
    function S() {
    }
    function Cb(a, b, c, d, f, e, g, h, k) {
      var m = [], l = /* @__PURE__ */ new Set();
      b = { destination: null, responseState: b, progressiveChunkSize: void 0 === d ? 12800 : d, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: l, pingedTasks: m, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: void 0 === f ? Bb : f, onAllReady: void 0 === e ? S : e, onShellReady: void 0 === g ? S : g, onShellError: void 0 === h ? S : h, onFatalError: void 0 === k ? S : k };
      c = T(b, 0, null, c, false, false);
      c.parentFlushed = true;
      a = Db(b, a, null, c, l, $a, null, hb);
      m.push(a);
      return b;
    }
    function Db(a, b, c, d, f, e, g, h) {
      a.allPendingTasks++;
      null === c ? a.pendingRootTasks++ : c.pendingTasks++;
      var k = { node: b, ping: function() {
        var b2 = a.pingedTasks;
        b2.push(k);
        1 === b2.length && Eb(a);
      }, blockedBoundary: c, blockedSegment: d, abortSet: f, legacyContext: e, context: g, treeContext: h };
      f.add(k);
      return k;
    }
    function T(a, b, c, d, f, e) {
      return { status: 0, id: -1, index: b, parentFlushed: false, chunks: [], children: [], formatContext: d, boundary: c, lastPushedText: f, textEmbedded: e };
    }
    function U(a, b) {
      a = a.onError(b);
      if (null != a && "string" !== typeof a) throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
      return a;
    }
    function V(a, b) {
      var c = a.onShellError;
      c(b);
      c = a.onFatalError;
      c(b);
      null !== a.destination ? (a.status = 2, a.destination.destroy(b)) : (a.status = 1, a.fatalError = b);
    }
    function Fb(a, b, c, d, f) {
      H = {};
      ob = b;
      M = 0;
      for (a = c(d, f); L; ) L = false, M = 0, O += 1, J = null, a = c(d, f);
      tb();
      return a;
    }
    function Gb(a, b, c, d) {
      var f = c.render(), e = d.childContextTypes;
      if (null !== e && void 0 !== e) {
        var g = b.legacyContext;
        if ("function" !== typeof c.getChildContext) d = g;
        else {
          c = c.getChildContext();
          for (var h in c) if (!(h in e)) throw Error((Za(d) || "Unknown") + '.getChildContext(): key "' + h + '" is not defined in childContextTypes.');
          d = A({}, g, c);
        }
        b.legacyContext = d;
        W(a, b, f);
        b.legacyContext = g;
      } else W(a, b, f);
    }
    function Hb(a, b) {
      if (a && a.defaultProps) {
        b = A({}, b);
        a = a.defaultProps;
        for (var c in a) void 0 === b[c] && (b[c] = a[c]);
        return b;
      }
      return b;
    }
    function Ib(a, b, c, d, f) {
      if ("function" === typeof c) if (c.prototype && c.prototype.isReactComponent) {
        f = ab(c, b.legacyContext);
        var e = c.contextType;
        e = new c(d, "object" === typeof e && null !== e ? e._currentValue2 : f);
        gb(e, c, d, f);
        Gb(a, b, e, c);
      } else {
        e = ab(c, b.legacyContext);
        f = Fb(a, b, c, d, e);
        var g = 0 !== M;
        if ("object" === typeof f && null !== f && "function" === typeof f.render && void 0 === f.$$typeof) gb(f, c, d, e), Gb(a, b, f, c);
        else if (g) {
          d = b.treeContext;
          b.treeContext = ib(d, 1, 0);
          try {
            W(a, b, f);
          } finally {
            b.treeContext = d;
          }
        } else W(a, b, f);
      }
      else if ("string" === typeof c) {
        f = b.blockedSegment;
        e = za(f.chunks, c, d, a.responseState, f.formatContext);
        f.lastPushedText = false;
        g = f.formatContext;
        f.formatContext = sa(g, c, d);
        Jb(a, b, e);
        f.formatContext = g;
        switch (c) {
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "input":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            break;
          default:
            f.chunks.push("</", c, ">");
        }
        f.lastPushedText = false;
      } else {
        switch (c) {
          case Wa:
          case Va:
          case La:
          case Ma:
          case Ka:
            W(a, b, d.children);
            return;
          case Ra:
            W(a, b, d.children);
            return;
          case Ua:
            throw Error("ReactDOMServer does not yet support scope components.");
          case Qa:
            a: {
              c = b.blockedBoundary;
              f = b.blockedSegment;
              e = d.fallback;
              d = d.children;
              g = /* @__PURE__ */ new Set();
              var h = { id: null, rootSegmentID: -1, parentFlushed: false, pendingTasks: 0, forceClientRender: false, completedSegments: [], byteSize: 0, fallbackAbortableTasks: g, errorDigest: null }, k = T(a, f.chunks.length, h, f.formatContext, false, false);
              f.children.push(k);
              f.lastPushedText = false;
              var m = T(a, 0, null, f.formatContext, false, false);
              m.parentFlushed = true;
              b.blockedBoundary = h;
              b.blockedSegment = m;
              try {
                if (Jb(a, b, d), a.responseState.generateStaticMarkup || m.lastPushedText && m.textEmbedded && m.chunks.push("<!-- -->"), m.status = 1, X(h, m), 0 === h.pendingTasks) break a;
              } catch (l) {
                m.status = 4, h.forceClientRender = true, h.errorDigest = U(a, l);
              } finally {
                b.blockedBoundary = c, b.blockedSegment = f;
              }
              b = Db(a, e, c, k, g, b.legacyContext, b.context, b.treeContext);
              a.pingedTasks.push(b);
            }
            return;
        }
        if ("object" === typeof c && null !== c) switch (c.$$typeof) {
          case Pa:
            d = Fb(a, b, c.render, d, f);
            if (0 !== M) {
              c = b.treeContext;
              b.treeContext = ib(c, 1, 0);
              try {
                W(a, b, d);
              } finally {
                b.treeContext = c;
              }
            } else W(a, b, d);
            return;
          case Sa:
            c = c.type;
            d = Hb(c, d);
            Ib(a, b, c, d, f);
            return;
          case Na:
            f = d.children;
            c = c._context;
            d = d.value;
            e = c._currentValue2;
            c._currentValue2 = d;
            g = D;
            D = d = { parent: g, depth: null === g ? 0 : g.depth + 1, context: c, parentValue: e, value: d };
            b.context = d;
            W(a, b, f);
            a = D;
            if (null === a) throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");
            d = a.parentValue;
            a.context._currentValue2 = d === Xa ? a.context._defaultValue : d;
            a = D = a.parent;
            b.context = a;
            return;
          case Oa:
            d = d.children;
            d = d(c._currentValue2);
            W(a, b, d);
            return;
          case Ta:
            f = c._init;
            c = f(c._payload);
            d = Hb(c, d);
            Ib(a, b, c, d, void 0);
            return;
        }
        throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + ((null == c ? c : typeof c) + "."));
      }
    }
    function W(a, b, c) {
      b.node = c;
      if ("object" === typeof c && null !== c) {
        switch (c.$$typeof) {
          case Ia:
            Ib(a, b, c.type, c.props, c.ref);
            return;
          case Ja:
            throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case Ta:
            var d = c._init;
            c = d(c._payload);
            W(a, b, c);
            return;
        }
        if (ra(c)) {
          Kb(a, b, c);
          return;
        }
        null === c || "object" !== typeof c ? d = null : (d = Ya && c[Ya] || c["@@iterator"], d = "function" === typeof d ? d : null);
        if (d && (d = d.call(c))) {
          c = d.next();
          if (!c.done) {
            var f = [];
            do
              f.push(c.value), c = d.next();
            while (!c.done);
            Kb(a, b, f);
          }
          return;
        }
        a = Object.prototype.toString.call(c);
        throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === a ? "object with keys {" + Object.keys(c).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
      }
      "string" === typeof c ? (d = b.blockedSegment, d.lastPushedText = Ha(b.blockedSegment.chunks, c, a.responseState, d.lastPushedText)) : "number" === typeof c && (d = b.blockedSegment, d.lastPushedText = Ha(
        b.blockedSegment.chunks,
        "" + c,
        a.responseState,
        d.lastPushedText
      ));
    }
    function Kb(a, b, c) {
      for (var d = c.length, f = 0; f < d; f++) {
        var e = b.treeContext;
        b.treeContext = ib(e, d, f);
        try {
          Jb(a, b, c[f]);
        } finally {
          b.treeContext = e;
        }
      }
    }
    function Jb(a, b, c) {
      var d = b.blockedSegment.formatContext, f = b.legacyContext, e = b.context;
      try {
        return W(a, b, c);
      } catch (k) {
        if (tb(), "object" === typeof k && null !== k && "function" === typeof k.then) {
          c = k;
          var g = b.blockedSegment, h = T(a, g.chunks.length, null, g.formatContext, g.lastPushedText, true);
          g.children.push(h);
          g.lastPushedText = false;
          a = Db(a, b.node, b.blockedBoundary, h, b.abortSet, b.legacyContext, b.context, b.treeContext).ping;
          c.then(a, a);
          b.blockedSegment.formatContext = d;
          b.legacyContext = f;
          b.context = e;
          F(e);
        } else throw b.blockedSegment.formatContext = d, b.legacyContext = f, b.context = e, F(e), k;
      }
    }
    function Lb(a) {
      var b = a.blockedBoundary;
      a = a.blockedSegment;
      a.status = 3;
      Mb(this, b, a);
    }
    function Nb(a, b, c) {
      var d = a.blockedBoundary;
      a.blockedSegment.status = 3;
      null === d ? (b.allPendingTasks--, 2 !== b.status && (b.status = 2, null !== b.destination && b.destination.push(null))) : (d.pendingTasks--, d.forceClientRender || (d.forceClientRender = true, d.errorDigest = b.onError(void 0 === c ? Error("The render was aborted by the server without a reason.") : c), d.parentFlushed && b.clientRenderedBoundaries.push(d)), d.fallbackAbortableTasks.forEach(function(a2) {
        return Nb(a2, b, c);
      }), d.fallbackAbortableTasks.clear(), b.allPendingTasks--, 0 === b.allPendingTasks && (a = b.onAllReady, a()));
    }
    function X(a, b) {
      if (0 === b.chunks.length && 1 === b.children.length && null === b.children[0].boundary) {
        var c = b.children[0];
        c.id = b.id;
        c.parentFlushed = true;
        1 === c.status && X(a, c);
      } else a.completedSegments.push(b);
    }
    function Mb(a, b, c) {
      if (null === b) {
        if (c.parentFlushed) {
          if (null !== a.completedRootSegment) throw Error("There can only be one root segment. This is a bug in React.");
          a.completedRootSegment = c;
        }
        a.pendingRootTasks--;
        0 === a.pendingRootTasks && (a.onShellError = S, b = a.onShellReady, b());
      } else b.pendingTasks--, b.forceClientRender || (0 === b.pendingTasks ? (c.parentFlushed && 1 === c.status && X(b, c), b.parentFlushed && a.completedBoundaries.push(b), b.fallbackAbortableTasks.forEach(Lb, a), b.fallbackAbortableTasks.clear()) : c.parentFlushed && 1 === c.status && (X(b, c), 1 === b.completedSegments.length && b.parentFlushed && a.partialBoundaries.push(b)));
      a.allPendingTasks--;
      0 === a.allPendingTasks && (a = a.onAllReady, a());
    }
    function Eb(a) {
      if (2 !== a.status) {
        var b = D, c = Ab.current;
        Ab.current = zb;
        var d = R;
        R = a.responseState;
        try {
          var f = a.pingedTasks, e;
          for (e = 0; e < f.length; e++) {
            var g = f[e];
            var h = a, k = g.blockedSegment;
            if (0 === k.status) {
              F(g.context);
              try {
                W(h, g, g.node), h.responseState.generateStaticMarkup || k.lastPushedText && k.textEmbedded && k.chunks.push("<!-- -->"), g.abortSet.delete(g), k.status = 1, Mb(h, g.blockedBoundary, k);
              } catch (y) {
                if (tb(), "object" === typeof y && null !== y && "function" === typeof y.then) {
                  var m = g.ping;
                  y.then(m, m);
                } else {
                  g.abortSet.delete(g);
                  k.status = 4;
                  var l = g.blockedBoundary, p = y, B = U(h, p);
                  null === l ? V(h, p) : (l.pendingTasks--, l.forceClientRender || (l.forceClientRender = true, l.errorDigest = B, l.parentFlushed && h.clientRenderedBoundaries.push(l)));
                  h.allPendingTasks--;
                  if (0 === h.allPendingTasks) {
                    var C = h.onAllReady;
                    C();
                  }
                }
              } finally {
              }
            }
          }
          f.splice(0, e);
          null !== a.destination && Ob(a, a.destination);
        } catch (y) {
          U(a, y), V(a, y);
        } finally {
          R = d, Ab.current = c, c === zb && F(b);
        }
      }
    }
    function Y(a, b, c) {
      c.parentFlushed = true;
      switch (c.status) {
        case 0:
          var d = c.id = a.nextSegmentId++;
          c.lastPushedText = false;
          c.textEmbedded = false;
          a = a.responseState;
          b.push('<template id="');
          b.push(a.placeholderPrefix);
          a = d.toString(16);
          b.push(a);
          return b.push('"></template>');
        case 1:
          c.status = 2;
          var f = true;
          d = c.chunks;
          var e = 0;
          c = c.children;
          for (var g = 0; g < c.length; g++) {
            for (f = c[g]; e < f.index; e++) b.push(d[e]);
            f = Z(a, b, f);
          }
          for (; e < d.length - 1; e++) b.push(d[e]);
          e < d.length && (f = b.push(d[e]));
          return f;
        default:
          throw Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function Z(a, b, c) {
      var d = c.boundary;
      if (null === d) return Y(a, b, c);
      d.parentFlushed = true;
      if (d.forceClientRender) return a.responseState.generateStaticMarkup || (d = d.errorDigest, b.push("<!--$!-->"), b.push("<template"), d && (b.push(' data-dgst="'), d = u(d), b.push(d), b.push('"')), b.push("></template>")), Y(a, b, c), a = a.responseState.generateStaticMarkup ? true : b.push("<!--/$-->"), a;
      if (0 < d.pendingTasks) {
        d.rootSegmentID = a.nextSegmentId++;
        0 < d.completedSegments.length && a.partialBoundaries.push(d);
        var f = a.responseState;
        var e = f.nextSuspenseID++;
        f = f.boundaryPrefix + e.toString(16);
        d = d.id = f;
        Aa(b, a.responseState, d);
        Y(a, b, c);
        return b.push("<!--/$-->");
      }
      if (d.byteSize > a.progressiveChunkSize) return d.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(d), Aa(b, a.responseState, d.id), Y(a, b, c), b.push("<!--/$-->");
      a.responseState.generateStaticMarkup || b.push("<!--$-->");
      c = d.completedSegments;
      if (1 !== c.length) throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
      Z(a, b, c[0]);
      a = a.responseState.generateStaticMarkup ? true : b.push("<!--/$-->");
      return a;
    }
    function Pb(a, b, c) {
      Ba(b, a.responseState, c.formatContext, c.id);
      Z(a, b, c);
      return Ca(b, c.formatContext);
    }
    function Qb(a, b, c) {
      for (var d = c.completedSegments, f = 0; f < d.length; f++) Rb(a, b, c, d[f]);
      d.length = 0;
      a = a.responseState;
      d = c.id;
      c = c.rootSegmentID;
      b.push(a.startInlineScript);
      a.sentCompleteBoundaryFunction ? b.push('$RC("') : (a.sentCompleteBoundaryFunction = true, b.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'));
      if (null === d) throw Error("An ID must have been assigned before we can complete the boundary.");
      c = c.toString(16);
      b.push(d);
      b.push('","');
      b.push(a.segmentPrefix);
      b.push(c);
      return b.push('")</script>');
    }
    function Rb(a, b, c, d) {
      if (2 === d.status) return true;
      var f = d.id;
      if (-1 === f) {
        if (-1 === (d.id = c.rootSegmentID)) throw Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return Pb(a, b, d);
      }
      Pb(a, b, d);
      a = a.responseState;
      b.push(a.startInlineScript);
      a.sentCompleteSegmentFunction ? b.push('$RS("') : (a.sentCompleteSegmentFunction = true, b.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'));
      b.push(a.segmentPrefix);
      f = f.toString(16);
      b.push(f);
      b.push('","');
      b.push(a.placeholderPrefix);
      b.push(f);
      return b.push('")</script>');
    }
    function Ob(a, b) {
      try {
        var c = a.completedRootSegment;
        if (null !== c && 0 === a.pendingRootTasks) {
          Z(a, b, c);
          a.completedRootSegment = null;
          var d = a.responseState.bootstrapChunks;
          for (c = 0; c < d.length - 1; c++) b.push(d[c]);
          c < d.length && b.push(d[c]);
        }
        var f = a.clientRenderedBoundaries, e;
        for (e = 0; e < f.length; e++) {
          var g = f[e];
          d = b;
          var h = a.responseState, k = g.id, m = g.errorDigest, l = g.errorMessage, p = g.errorComponentStack;
          d.push(h.startInlineScript);
          h.sentClientRenderFunction ? d.push('$RX("') : (h.sentClientRenderFunction = true, d.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'));
          if (null === k) throw Error("An ID must have been assigned before we can complete the boundary.");
          d.push(k);
          d.push('"');
          if (m || l || p) {
            d.push(",");
            var B = Ea(m || "");
            d.push(B);
          }
          if (l || p) {
            d.push(",");
            var C = Ea(l || "");
            d.push(C);
          }
          if (p) {
            d.push(",");
            var y = Ea(p);
            d.push(y);
          }
          if (!d.push(")</script>")) {
            a.destination = null;
            e++;
            f.splice(0, e);
            return;
          }
        }
        f.splice(0, e);
        var aa = a.completedBoundaries;
        for (e = 0; e < aa.length; e++) if (!Qb(a, b, aa[e])) {
          a.destination = null;
          e++;
          aa.splice(0, e);
          return;
        }
        aa.splice(0, e);
        var ba = a.partialBoundaries;
        for (e = 0; e < ba.length; e++) {
          var pb = ba[e];
          a: {
            f = a;
            g = b;
            var ca = pb.completedSegments;
            for (h = 0; h < ca.length; h++) if (!Rb(f, g, pb, ca[h])) {
              h++;
              ca.splice(0, h);
              var qb = false;
              break a;
            }
            ca.splice(0, h);
            qb = true;
          }
          if (!qb) {
            a.destination = null;
            e++;
            ba.splice(0, e);
            return;
          }
        }
        ba.splice(0, e);
        var da = a.completedBoundaries;
        for (e = 0; e < da.length; e++) if (!Qb(a, b, da[e])) {
          a.destination = null;
          e++;
          da.splice(0, e);
          return;
        }
        da.splice(0, e);
      } finally {
        0 === a.allPendingTasks && 0 === a.pingedTasks.length && 0 === a.clientRenderedBoundaries.length && 0 === a.completedBoundaries.length && b.push(null);
      }
    }
    function Sb(a, b) {
      if (1 === a.status) a.status = 2, b.destroy(a.fatalError);
      else if (2 !== a.status && null === a.destination) {
        a.destination = b;
        try {
          Ob(a, b);
        } catch (c) {
          U(a, c), V(a, c);
        }
      }
    }
    function Tb(a, b) {
      try {
        var c = a.abortableTasks;
        c.forEach(function(c2) {
          return Nb(c2, a, b);
        });
        c.clear();
        null !== a.destination && Ob(a, a.destination);
      } catch (d) {
        U(a, d), V(a, d);
      }
    }
    function Ub() {
    }
    function Vb(a, b, c, d) {
      var f = false, e = null, g = "", h = false;
      a = Cb(a, Fa(c, b ? b.identifierPrefix : void 0), Ga(), Infinity, Ub, void 0, function() {
        h = true;
      }, void 0, void 0);
      Eb(a);
      Tb(a, d);
      Sb(a, { push: function(a2) {
        null !== a2 && (g += a2);
        return true;
      }, destroy: function(a2) {
        f = true;
        e = a2;
      } });
      if (f) throw e;
      if (!h) throw Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
      return g;
    }
    function Wb(a, b) {
      a.prototype = Object.create(b.prototype);
      a.prototype.constructor = a;
      a.__proto__ = b;
    }
    var Xb = function(a) {
      function b() {
        var b2 = a.call(this, {}) || this;
        b2.request = null;
        b2.startedFlowing = false;
        return b2;
      }
      Wb(b, a);
      var c = b.prototype;
      c._destroy = function(a2, b2) {
        Tb(this.request);
        b2(a2);
      };
      c._read = function() {
        this.startedFlowing && Sb(this.request, this);
      };
      return b;
    }(fa.Readable);
    function Yb() {
    }
    function Zb(a, b) {
      var c = new Xb(), d = Cb(a, Fa(false, b ? b.identifierPrefix : void 0), Ga(), Infinity, Yb, function() {
        c.startedFlowing = true;
        Sb(d, c);
      }, void 0, void 0);
      c.request = d;
      Eb(d);
      return c;
    }
    exports2.renderToNodeStream = function(a, b) {
      return Zb(a, b);
    };
    exports2.renderToStaticMarkup = function(a, b) {
      return Vb(a, b, true, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToPipeableStream" which supports Suspense on the server');
    };
    exports2.renderToStaticNodeStream = function(a, b) {
      return Zb(a, b);
    };
    exports2.renderToString = function(a, b) {
      return Vb(a, b, false, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToPipeableStream" which supports Suspense on the server');
    };
    exports2.version = "18.3.1";
  }
});

// node_modules/react-dom/cjs/react-dom-server.node.production.min.js
var require_react_dom_server_node_production_min = __commonJS({
  "node_modules/react-dom/cjs/react-dom-server.node.production.min.js"(exports2) {
    "use strict";
    var aa = require("util");
    var ba = require_react();
    var k = null;
    var l = 0;
    var q = true;
    function r(a, b) {
      if ("string" === typeof b) {
        if (0 !== b.length) if (2048 < 3 * b.length) 0 < l && (t(a, k.subarray(0, l)), k = new Uint8Array(2048), l = 0), t(a, u.encode(b));
        else {
          var c = k;
          0 < l && (c = k.subarray(l));
          c = u.encodeInto(b, c);
          var d = c.read;
          l += c.written;
          d < b.length && (t(a, k), k = new Uint8Array(2048), l = u.encodeInto(b.slice(d), k).written);
          2048 === l && (t(a, k), k = new Uint8Array(2048), l = 0);
        }
      } else 0 !== b.byteLength && (2048 < b.byteLength ? (0 < l && (t(a, k.subarray(0, l)), k = new Uint8Array(2048), l = 0), t(a, b)) : (c = k.length - l, c < b.byteLength && (0 === c ? t(
        a,
        k
      ) : (k.set(b.subarray(0, c), l), l += c, t(a, k), b = b.subarray(c)), k = new Uint8Array(2048), l = 0), k.set(b, l), l += b.byteLength, 2048 === l && (t(a, k), k = new Uint8Array(2048), l = 0)));
    }
    function t(a, b) {
      a = a.write(b);
      q = q && a;
    }
    function w(a, b) {
      r(a, b);
      return q;
    }
    function ca(a) {
      k && 0 < l && a.write(k.subarray(0, l));
      k = null;
      l = 0;
      q = true;
    }
    var u = new aa.TextEncoder();
    function x(a) {
      return u.encode(a);
    }
    var y = Object.prototype.hasOwnProperty;
    var da = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
    var ea = {};
    var fa = {};
    function ha(a) {
      if (y.call(fa, a)) return true;
      if (y.call(ea, a)) return false;
      if (da.test(a)) return fa[a] = true;
      ea[a] = true;
      return false;
    }
    function z(a, b, c, d, f, e, g) {
      this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
      this.attributeName = d;
      this.attributeNamespace = f;
      this.mustUseProperty = c;
      this.propertyName = a;
      this.type = b;
      this.sanitizeURL = e;
      this.removeEmptyString = g;
    }
    var A = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
      A[a] = new z(a, 0, false, a, null, false, false);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
      var b = a[0];
      A[b] = new z(b, 1, false, a[1], null, false, false);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
      A[a] = new z(a, 2, false, a.toLowerCase(), null, false, false);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
      A[a] = new z(a, 2, false, a, null, false, false);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
      A[a] = new z(a, 3, false, a.toLowerCase(), null, false, false);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(a) {
      A[a] = new z(a, 3, true, a, null, false, false);
    });
    ["capture", "download"].forEach(function(a) {
      A[a] = new z(a, 4, false, a, null, false, false);
    });
    ["cols", "rows", "size", "span"].forEach(function(a) {
      A[a] = new z(a, 6, false, a, null, false, false);
    });
    ["rowSpan", "start"].forEach(function(a) {
      A[a] = new z(a, 5, false, a.toLowerCase(), null, false, false);
    });
    var ia = /[\-:]([a-z])/g;
    function ja(a) {
      return a[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
      var b = a.replace(
        ia,
        ja
      );
      A[b] = new z(b, 1, false, a, null, false, false);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
      var b = a.replace(ia, ja);
      A[b] = new z(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
      var b = a.replace(ia, ja);
      A[b] = new z(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
    });
    ["tabIndex", "crossOrigin"].forEach(function(a) {
      A[a] = new z(a, 1, false, a.toLowerCase(), null, false, false);
    });
    A.xlinkHref = new z("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
    ["src", "href", "action", "formAction"].forEach(function(a) {
      A[a] = new z(a, 1, false, a.toLowerCase(), null, true, true);
    });
    var B = {
      animationIterationCount: true,
      aspectRatio: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    };
    var ka = ["Webkit", "ms", "Moz", "O"];
    Object.keys(B).forEach(function(a) {
      ka.forEach(function(b) {
        b = b + a.charAt(0).toUpperCase() + a.substring(1);
        B[b] = B[a];
      });
    });
    var la = /["'&<>]/;
    function F(a) {
      if ("boolean" === typeof a || "number" === typeof a) return "" + a;
      a = "" + a;
      var b = la.exec(a);
      if (b) {
        var c = "", d, f = 0;
        for (d = b.index; d < a.length; d++) {
          switch (a.charCodeAt(d)) {
            case 34:
              b = "&quot;";
              break;
            case 38:
              b = "&amp;";
              break;
            case 39:
              b = "&#x27;";
              break;
            case 60:
              b = "&lt;";
              break;
            case 62:
              b = "&gt;";
              break;
            default:
              continue;
          }
          f !== d && (c += a.substring(f, d));
          f = d + 1;
          c += b;
        }
        a = f !== d ? c + a.substring(f, d) : c;
      }
      return a;
    }
    var ma = /([A-Z])/g;
    var pa = /^ms-/;
    var qa = Array.isArray;
    var ra = x("<script>");
    var sa = x("</script>");
    var ta = x('<script src="');
    var ua = x('<script type="module" src="');
    var va = x('" async=""></script>');
    var wa = /(<\/|<)(s)(cript)/gi;
    function xa(a, b, c, d) {
      return "" + b + ("s" === c ? "\\u0073" : "\\u0053") + d;
    }
    function G(a, b) {
      return { insertionMode: a, selectedValue: b };
    }
    function ya(a, b, c) {
      switch (b) {
        case "select":
          return G(1, null != c.value ? c.value : c.defaultValue);
        case "svg":
          return G(2, null);
        case "math":
          return G(3, null);
        case "foreignObject":
          return G(1, null);
        case "table":
          return G(4, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return G(5, null);
        case "colgroup":
          return G(7, null);
        case "tr":
          return G(6, null);
      }
      return 4 <= a.insertionMode || 0 === a.insertionMode ? G(1, null) : a;
    }
    var za = x("<!-- -->");
    function Aa(a, b, c, d) {
      if ("" === b) return d;
      d && a.push(za);
      a.push(F(b));
      return true;
    }
    var Ba = /* @__PURE__ */ new Map();
    var Ca = x(' style="');
    var Da = x(":");
    var Ea = x(";");
    function Fa(a, b, c) {
      if ("object" !== typeof c) throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      b = true;
      for (var d in c) if (y.call(c, d)) {
        var f = c[d];
        if (null != f && "boolean" !== typeof f && "" !== f) {
          if (0 === d.indexOf("--")) {
            var e = F(d);
            f = F(("" + f).trim());
          } else {
            e = d;
            var g = Ba.get(e);
            void 0 !== g ? e = g : (g = x(F(e.replace(ma, "-$1").toLowerCase().replace(pa, "-ms-"))), Ba.set(e, g), e = g);
            f = "number" === typeof f ? 0 === f || y.call(
              B,
              d
            ) ? "" + f : f + "px" : F(("" + f).trim());
          }
          b ? (b = false, a.push(Ca, e, Da, f)) : a.push(Ea, e, Da, f);
        }
      }
      b || a.push(H);
    }
    var I = x(" ");
    var J = x('="');
    var H = x('"');
    var Ga = x('=""');
    function K(a, b, c, d) {
      switch (c) {
        case "style":
          Fa(a, b, d);
          return;
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (!(2 < c.length) || "o" !== c[0] && "O" !== c[0] || "n" !== c[1] && "N" !== c[1]) {
        if (b = A.hasOwnProperty(c) ? A[c] : null, null !== b) {
          switch (typeof d) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!b.acceptsBooleans) return;
          }
          c = b.attributeName;
          switch (b.type) {
            case 3:
              d && a.push(I, c, Ga);
              break;
            case 4:
              true === d ? a.push(I, c, Ga) : false !== d && a.push(I, c, J, F(d), H);
              break;
            case 5:
              isNaN(d) || a.push(I, c, J, F(d), H);
              break;
            case 6:
              !isNaN(d) && 1 <= d && a.push(I, c, J, F(d), H);
              break;
            default:
              b.sanitizeURL && (d = "" + d), a.push(I, c, J, F(d), H);
          }
        } else if (ha(c)) {
          switch (typeof d) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (b = c.toLowerCase().slice(0, 5), "data-" !== b && "aria-" !== b) return;
          }
          a.push(I, c, J, F(d), H);
        }
      }
    }
    var L = x(">");
    var Ha = x("/>");
    function M(a, b, c) {
      if (null != b) {
        if (null != c) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if ("object" !== typeof b || !("__html" in b)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        b = b.__html;
        null !== b && void 0 !== b && a.push("" + b);
      }
    }
    function Ia(a) {
      var b = "";
      ba.Children.forEach(a, function(a2) {
        null != a2 && (b += a2);
      });
      return b;
    }
    var Ja = x(' selected=""');
    function Ka(a, b, c, d) {
      a.push(N(c));
      var f = c = null, e;
      for (e in b) if (y.call(b, e)) {
        var g = b[e];
        if (null != g) switch (e) {
          case "children":
            c = g;
            break;
          case "dangerouslySetInnerHTML":
            f = g;
            break;
          default:
            K(a, d, e, g);
        }
      }
      a.push(L);
      M(a, f, c);
      return "string" === typeof c ? (a.push(F(c)), null) : c;
    }
    var La = x("\n");
    var Ma = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
    var Na = /* @__PURE__ */ new Map();
    function N(a) {
      var b = Na.get(a);
      if (void 0 === b) {
        if (!Ma.test(a)) throw Error("Invalid tag: " + a);
        b = x("<" + a);
        Na.set(a, b);
      }
      return b;
    }
    var Oa = x("<!DOCTYPE html>");
    function Pa(a, b, c, d, f) {
      switch (b) {
        case "select":
          a.push(N("select"));
          var e = null, g = null;
          for (p in c) if (y.call(c, p)) {
            var h = c[p];
            if (null != h) switch (p) {
              case "children":
                e = h;
                break;
              case "dangerouslySetInnerHTML":
                g = h;
                break;
              case "defaultValue":
              case "value":
                break;
              default:
                K(a, d, p, h);
            }
          }
          a.push(L);
          M(a, g, e);
          return e;
        case "option":
          g = f.selectedValue;
          a.push(N("option"));
          var m = h = null, n = null;
          var p = null;
          for (e in c) if (y.call(c, e)) {
            var v = c[e];
            if (null != v) switch (e) {
              case "children":
                h = v;
                break;
              case "selected":
                n = v;
                break;
              case "dangerouslySetInnerHTML":
                p = v;
                break;
              case "value":
                m = v;
              default:
                K(a, d, e, v);
            }
          }
          if (null != g) if (c = null !== m ? "" + m : Ia(h), qa(g)) for (d = 0; d < g.length; d++) {
            if ("" + g[d] === c) {
              a.push(Ja);
              break;
            }
          }
          else "" + g === c && a.push(Ja);
          else n && a.push(Ja);
          a.push(L);
          M(a, p, h);
          return h;
        case "textarea":
          a.push(N("textarea"));
          p = g = e = null;
          for (h in c) if (y.call(c, h) && (m = c[h], null != m)) switch (h) {
            case "children":
              p = m;
              break;
            case "value":
              e = m;
              break;
            case "defaultValue":
              g = m;
              break;
            case "dangerouslySetInnerHTML":
              throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              K(a, d, h, m);
          }
          null === e && null !== g && (e = g);
          a.push(L);
          if (null != p) {
            if (null != e) throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (qa(p) && 1 < p.length) throw Error("<textarea> can only have at most one child.");
            e = "" + p;
          }
          "string" === typeof e && "\n" === e[0] && a.push(La);
          null !== e && a.push(F("" + e));
          return null;
        case "input":
          a.push(N("input"));
          m = p = h = e = null;
          for (g in c) if (y.call(c, g) && (n = c[g], null != n)) switch (g) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              m = n;
              break;
            case "defaultValue":
              h = n;
              break;
            case "checked":
              p = n;
              break;
            case "value":
              e = n;
              break;
            default:
              K(a, d, g, n);
          }
          null !== p ? K(a, d, "checked", p) : null !== m && K(a, d, "checked", m);
          null !== e ? K(a, d, "value", e) : null !== h && K(a, d, "value", h);
          a.push(Ha);
          return null;
        case "menuitem":
          a.push(N("menuitem"));
          for (var C in c) if (y.call(c, C) && (e = c[C], null != e)) switch (C) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              K(a, d, C, e);
          }
          a.push(L);
          return null;
        case "title":
          a.push(N("title"));
          e = null;
          for (v in c) if (y.call(c, v) && (g = c[v], null != g)) switch (v) {
            case "children":
              e = g;
              break;
            case "dangerouslySetInnerHTML":
              throw Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              K(a, d, v, g);
          }
          a.push(L);
          return e;
        case "listing":
        case "pre":
          a.push(N(b));
          g = e = null;
          for (m in c) if (y.call(c, m) && (h = c[m], null != h)) switch (m) {
            case "children":
              e = h;
              break;
            case "dangerouslySetInnerHTML":
              g = h;
              break;
            default:
              K(a, d, m, h);
          }
          a.push(L);
          if (null != g) {
            if (null != e) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
            if ("object" !== typeof g || !("__html" in g)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
            c = g.__html;
            null !== c && void 0 !== c && ("string" === typeof c && 0 < c.length && "\n" === c[0] ? a.push(La, c) : a.push("" + c));
          }
          "string" === typeof e && "\n" === e[0] && a.push(La);
          return e;
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          a.push(N(b));
          for (var D in c) if (y.call(c, D) && (e = c[D], null != e)) switch (D) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(b + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              K(a, d, D, e);
          }
          a.push(Ha);
          return null;
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return Ka(a, c, b, d);
        case "html":
          return 0 === f.insertionMode && a.push(Oa), Ka(
            a,
            c,
            b,
            d
          );
        default:
          if (-1 === b.indexOf("-") && "string" !== typeof c.is) return Ka(a, c, b, d);
          a.push(N(b));
          g = e = null;
          for (n in c) if (y.call(c, n) && (h = c[n], null != h)) switch (n) {
            case "children":
              e = h;
              break;
            case "dangerouslySetInnerHTML":
              g = h;
              break;
            case "style":
              Fa(a, d, h);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              ha(n) && "function" !== typeof h && "symbol" !== typeof h && a.push(I, n, J, F(h), H);
          }
          a.push(L);
          M(a, g, e);
          return e;
      }
    }
    var Qa = x("</");
    var Ra = x(">");
    var Sa = x('<template id="');
    var Ta = x('"></template>');
    var Ua = x("<!--$-->");
    var Va = x('<!--$?--><template id="');
    var Wa = x('"></template>');
    var Xa = x("<!--$!-->");
    var Ya = x("<!--/$-->");
    var Za = x("<template");
    var $a = x('"');
    var ab = x(' data-dgst="');
    x(' data-msg="');
    x(' data-stck="');
    var bb = x("></template>");
    function cb(a, b, c) {
      r(a, Va);
      if (null === c) throw Error("An ID must have been assigned before we can complete the boundary.");
      r(a, c);
      return w(a, Wa);
    }
    var db = x('<div hidden id="');
    var eb = x('">');
    var fb = x("</div>");
    var gb = x('<svg aria-hidden="true" style="display:none" id="');
    var hb = x('">');
    var ib = x("</svg>");
    var jb = x('<math aria-hidden="true" style="display:none" id="');
    var kb = x('">');
    var lb = x("</math>");
    var mb = x('<table hidden id="');
    var nb = x('">');
    var ob = x("</table>");
    var pb = x('<table hidden><tbody id="');
    var qb = x('">');
    var rb = x("</tbody></table>");
    var sb = x('<table hidden><tr id="');
    var tb = x('">');
    var ub = x("</tr></table>");
    var vb = x('<table hidden><colgroup id="');
    var wb = x('">');
    var xb = x("</colgroup></table>");
    function yb(a, b, c, d) {
      switch (c.insertionMode) {
        case 0:
        case 1:
          return r(a, db), r(a, b.segmentPrefix), r(a, d.toString(16)), w(a, eb);
        case 2:
          return r(a, gb), r(a, b.segmentPrefix), r(a, d.toString(16)), w(a, hb);
        case 3:
          return r(a, jb), r(a, b.segmentPrefix), r(a, d.toString(16)), w(a, kb);
        case 4:
          return r(a, mb), r(a, b.segmentPrefix), r(a, d.toString(16)), w(a, nb);
        case 5:
          return r(a, pb), r(a, b.segmentPrefix), r(a, d.toString(16)), w(a, qb);
        case 6:
          return r(a, sb), r(a, b.segmentPrefix), r(a, d.toString(16)), w(a, tb);
        case 7:
          return r(a, vb), r(
            a,
            b.segmentPrefix
          ), r(a, d.toString(16)), w(a, wb);
        default:
          throw Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function zb(a, b) {
      switch (b.insertionMode) {
        case 0:
        case 1:
          return w(a, fb);
        case 2:
          return w(a, ib);
        case 3:
          return w(a, lb);
        case 4:
          return w(a, ob);
        case 5:
          return w(a, rb);
        case 6:
          return w(a, ub);
        case 7:
          return w(a, xb);
        default:
          throw Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var Ab = x('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("');
    var Bb = x('$RS("');
    var Cb = x('","');
    var Db = x('")</script>');
    var Fb = x('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("');
    var Gb = x('$RC("');
    var Hb = x('","');
    var Ib = x('")</script>');
    var Jb = x('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("');
    var Kb = x('$RX("');
    var Lb = x('"');
    var Mb = x(")</script>");
    var Nb = x(",");
    var Ob = /[<\u2028\u2029]/g;
    function Pb(a) {
      return JSON.stringify(a).replace(Ob, function(a2) {
        switch (a2) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    var O = Object.assign;
    var Qb = Symbol.for("react.element");
    var Rb = Symbol.for("react.portal");
    var Sb = Symbol.for("react.fragment");
    var Tb = Symbol.for("react.strict_mode");
    var Ub = Symbol.for("react.profiler");
    var Vb = Symbol.for("react.provider");
    var Wb = Symbol.for("react.context");
    var Xb = Symbol.for("react.forward_ref");
    var Yb = Symbol.for("react.suspense");
    var Zb = Symbol.for("react.suspense_list");
    var $b = Symbol.for("react.memo");
    var ac = Symbol.for("react.lazy");
    var bc = Symbol.for("react.scope");
    var cc = Symbol.for("react.debug_trace_mode");
    var dc = Symbol.for("react.legacy_hidden");
    var ec = Symbol.for("react.default_value");
    var fc = Symbol.iterator;
    function gc(a) {
      if (null == a) return null;
      if ("function" === typeof a) return a.displayName || a.name || null;
      if ("string" === typeof a) return a;
      switch (a) {
        case Sb:
          return "Fragment";
        case Rb:
          return "Portal";
        case Ub:
          return "Profiler";
        case Tb:
          return "StrictMode";
        case Yb:
          return "Suspense";
        case Zb:
          return "SuspenseList";
      }
      if ("object" === typeof a) switch (a.$$typeof) {
        case Wb:
          return (a.displayName || "Context") + ".Consumer";
        case Vb:
          return (a._context.displayName || "Context") + ".Provider";
        case Xb:
          var b = a.render;
          a = a.displayName;
          a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
          return a;
        case $b:
          return b = a.displayName || null, null !== b ? b : gc(a.type) || "Memo";
        case ac:
          b = a._payload;
          a = a._init;
          try {
            return gc(a(b));
          } catch (c) {
          }
      }
      return null;
    }
    var hc = {};
    function ic(a, b) {
      a = a.contextTypes;
      if (!a) return hc;
      var c = {}, d;
      for (d in a) c[d] = b[d];
      return c;
    }
    var P = null;
    function Q(a, b) {
      if (a !== b) {
        a.context._currentValue = a.parentValue;
        a = a.parent;
        var c = b.parent;
        if (null === a) {
          if (null !== c) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (null === c) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
          Q(a, c);
        }
        b.context._currentValue = b.value;
      }
    }
    function jc(a) {
      a.context._currentValue = a.parentValue;
      a = a.parent;
      null !== a && jc(a);
    }
    function kc(a) {
      var b = a.parent;
      null !== b && kc(b);
      a.context._currentValue = a.value;
    }
    function lc(a, b) {
      a.context._currentValue = a.parentValue;
      a = a.parent;
      if (null === a) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      a.depth === b.depth ? Q(a, b) : lc(a, b);
    }
    function mc(a, b) {
      var c = b.parent;
      if (null === c) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      a.depth === c.depth ? Q(a, c) : mc(a, c);
      b.context._currentValue = b.value;
    }
    function nc(a) {
      var b = P;
      b !== a && (null === b ? kc(a) : null === a ? jc(b) : b.depth === a.depth ? Q(b, a) : b.depth > a.depth ? lc(b, a) : mc(b, a), P = a);
    }
    var oc = { isMounted: function() {
      return false;
    }, enqueueSetState: function(a, b) {
      a = a._reactInternals;
      null !== a.queue && a.queue.push(b);
    }, enqueueReplaceState: function(a, b) {
      a = a._reactInternals;
      a.replace = true;
      a.queue = [b];
    }, enqueueForceUpdate: function() {
    } };
    function pc(a, b, c, d) {
      var f = void 0 !== a.state ? a.state : null;
      a.updater = oc;
      a.props = c;
      a.state = f;
      var e = { queue: [], replace: false };
      a._reactInternals = e;
      var g = b.contextType;
      a.context = "object" === typeof g && null !== g ? g._currentValue : d;
      g = b.getDerivedStateFromProps;
      "function" === typeof g && (g = g(c, f), f = null === g || void 0 === g ? f : O({}, f, g), a.state = f);
      if ("function" !== typeof b.getDerivedStateFromProps && "function" !== typeof a.getSnapshotBeforeUpdate && ("function" === typeof a.UNSAFE_componentWillMount || "function" === typeof a.componentWillMount)) if (b = a.state, "function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), b !== a.state && oc.enqueueReplaceState(a, a.state, null), null !== e.queue && 0 < e.queue.length) if (b = e.queue, g = e.replace, e.queue = null, e.replace = false, g && 1 === b.length) a.state = b[0];
      else {
        e = g ? b[0] : a.state;
        f = true;
        for (g = g ? 1 : 0; g < b.length; g++) {
          var h = b[g];
          h = "function" === typeof h ? h.call(a, e, c, d) : h;
          null != h && (f ? (f = false, e = O({}, e, h)) : O(e, h));
        }
        a.state = e;
      }
      else e.queue = null;
    }
    var qc = { id: 1, overflow: "" };
    function rc(a, b, c) {
      var d = a.id;
      a = a.overflow;
      var f = 32 - sc(d) - 1;
      d &= ~(1 << f);
      c += 1;
      var e = 32 - sc(b) + f;
      if (30 < e) {
        var g = f - f % 5;
        e = (d & (1 << g) - 1).toString(32);
        d >>= g;
        f -= g;
        return { id: 1 << 32 - sc(b) + f | c << f | d, overflow: e + a };
      }
      return { id: 1 << e | c << f | d, overflow: a };
    }
    var sc = Math.clz32 ? Math.clz32 : tc;
    var uc = Math.log;
    var vc = Math.LN2;
    function tc(a) {
      a >>>= 0;
      return 0 === a ? 32 : 31 - (uc(a) / vc | 0) | 0;
    }
    function wc(a, b) {
      return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
    }
    var xc = "function" === typeof Object.is ? Object.is : wc;
    var R = null;
    var yc = null;
    var zc = null;
    var S = null;
    var T = false;
    var Ac = false;
    var U = 0;
    var V = null;
    var Bc = 0;
    function W() {
      if (null === R) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
      return R;
    }
    function Cc() {
      if (0 < Bc) throw Error("Rendered more hooks than during the previous render");
      return { memoizedState: null, queue: null, next: null };
    }
    function Dc() {
      null === S ? null === zc ? (T = false, zc = S = Cc()) : (T = true, S = zc) : null === S.next ? (T = false, S = S.next = Cc()) : (T = true, S = S.next);
      return S;
    }
    function Ec() {
      yc = R = null;
      Ac = false;
      zc = null;
      Bc = 0;
      S = V = null;
    }
    function Fc(a, b) {
      return "function" === typeof b ? b(a) : b;
    }
    function Gc(a, b, c) {
      R = W();
      S = Dc();
      if (T) {
        var d = S.queue;
        b = d.dispatch;
        if (null !== V && (c = V.get(d), void 0 !== c)) {
          V.delete(d);
          d = S.memoizedState;
          do
            d = a(d, c.action), c = c.next;
          while (null !== c);
          S.memoizedState = d;
          return [d, b];
        }
        return [S.memoizedState, b];
      }
      a = a === Fc ? "function" === typeof b ? b() : b : void 0 !== c ? c(b) : b;
      S.memoizedState = a;
      a = S.queue = { last: null, dispatch: null };
      a = a.dispatch = Hc.bind(null, R, a);
      return [S.memoizedState, a];
    }
    function Ic(a, b) {
      R = W();
      S = Dc();
      b = void 0 === b ? null : b;
      if (null !== S) {
        var c = S.memoizedState;
        if (null !== c && null !== b) {
          var d = c[1];
          a: if (null === d) d = false;
          else {
            for (var f = 0; f < d.length && f < b.length; f++) if (!xc(b[f], d[f])) {
              d = false;
              break a;
            }
            d = true;
          }
          if (d) return c[0];
        }
      }
      a = a();
      S.memoizedState = [a, b];
      return a;
    }
    function Hc(a, b, c) {
      if (25 <= Bc) throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (a === R) if (Ac = true, a = { action: c, next: null }, null === V && (V = /* @__PURE__ */ new Map()), c = V.get(b), void 0 === c) V.set(b, a);
      else {
        for (b = c; null !== b.next; ) b = b.next;
        b.next = a;
      }
    }
    function Jc() {
      throw Error("startTransition cannot be called during server rendering.");
    }
    function Kc() {
    }
    var Mc = { readContext: function(a) {
      return a._currentValue;
    }, useContext: function(a) {
      W();
      return a._currentValue;
    }, useMemo: Ic, useReducer: Gc, useRef: function(a) {
      R = W();
      S = Dc();
      var b = S.memoizedState;
      return null === b ? (a = { current: a }, S.memoizedState = a) : b;
    }, useState: function(a) {
      return Gc(Fc, a);
    }, useInsertionEffect: Kc, useLayoutEffect: function() {
    }, useCallback: function(a, b) {
      return Ic(function() {
        return a;
      }, b);
    }, useImperativeHandle: Kc, useEffect: Kc, useDebugValue: Kc, useDeferredValue: function(a) {
      W();
      return a;
    }, useTransition: function() {
      W();
      return [false, Jc];
    }, useId: function() {
      var a = yc.treeContext;
      var b = a.overflow;
      a = a.id;
      a = (a & ~(1 << 32 - sc(a) - 1)).toString(32) + b;
      var c = Lc;
      if (null === c) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      b = U++;
      a = ":" + c.idPrefix + "R" + a;
      0 < b && (a += "H" + b.toString(32));
      return a + ":";
    }, useMutableSource: function(a, b) {
      W();
      return b(a._source);
    }, useSyncExternalStore: function(a, b, c) {
      if (void 0 === c) throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return c();
    } };
    var Lc = null;
    var Nc = ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
    function Oc(a) {
      console.error(a);
      return null;
    }
    function X() {
    }
    function Pc(a, b) {
      var c = a.pingedTasks;
      c.push(b);
      1 === c.length && setImmediate(function() {
        return Qc(a);
      });
    }
    function Rc(a, b, c, d, f, e, g, h) {
      a.allPendingTasks++;
      null === c ? a.pendingRootTasks++ : c.pendingTasks++;
      var m = { node: b, ping: function() {
        return Pc(a, m);
      }, blockedBoundary: c, blockedSegment: d, abortSet: f, legacyContext: e, context: g, treeContext: h };
      f.add(m);
      return m;
    }
    function Sc(a, b, c, d, f, e) {
      return { status: 0, id: -1, index: b, parentFlushed: false, chunks: [], children: [], formatContext: d, boundary: c, lastPushedText: f, textEmbedded: e };
    }
    function Y(a, b) {
      a = a.onError(b);
      if (null != a && "string" !== typeof a) throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
      return a;
    }
    function Tc(a, b) {
      var c = a.onShellError;
      c(b);
      c = a.onFatalError;
      c(b);
      null !== a.destination ? (a.status = 2, a.destination.destroy(b)) : (a.status = 1, a.fatalError = b);
    }
    function Uc(a, b, c, d, f) {
      R = {};
      yc = b;
      U = 0;
      for (a = c(d, f); Ac; ) Ac = false, U = 0, Bc += 1, S = null, a = c(d, f);
      Ec();
      return a;
    }
    function Vc(a, b, c, d) {
      var f = c.render(), e = d.childContextTypes;
      if (null !== e && void 0 !== e) {
        var g = b.legacyContext;
        if ("function" !== typeof c.getChildContext) d = g;
        else {
          c = c.getChildContext();
          for (var h in c) if (!(h in e)) throw Error((gc(d) || "Unknown") + '.getChildContext(): key "' + h + '" is not defined in childContextTypes.');
          d = O({}, g, c);
        }
        b.legacyContext = d;
        Z(a, b, f);
        b.legacyContext = g;
      } else Z(a, b, f);
    }
    function Wc(a, b) {
      if (a && a.defaultProps) {
        b = O({}, b);
        a = a.defaultProps;
        for (var c in a) void 0 === b[c] && (b[c] = a[c]);
        return b;
      }
      return b;
    }
    function Xc(a, b, c, d, f) {
      if ("function" === typeof c) if (c.prototype && c.prototype.isReactComponent) {
        f = ic(c, b.legacyContext);
        var e = c.contextType;
        e = new c(d, "object" === typeof e && null !== e ? e._currentValue : f);
        pc(e, c, d, f);
        Vc(a, b, e, c);
      } else {
        e = ic(c, b.legacyContext);
        f = Uc(a, b, c, d, e);
        var g = 0 !== U;
        if ("object" === typeof f && null !== f && "function" === typeof f.render && void 0 === f.$$typeof) pc(f, c, d, e), Vc(a, b, f, c);
        else if (g) {
          d = b.treeContext;
          b.treeContext = rc(d, 1, 0);
          try {
            Z(a, b, f);
          } finally {
            b.treeContext = d;
          }
        } else Z(a, b, f);
      }
      else if ("string" === typeof c) {
        f = b.blockedSegment;
        e = Pa(f.chunks, c, d, a.responseState, f.formatContext);
        f.lastPushedText = false;
        g = f.formatContext;
        f.formatContext = ya(g, c, d);
        Yc(a, b, e);
        f.formatContext = g;
        switch (c) {
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "input":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            break;
          default:
            f.chunks.push(Qa, c, Ra);
        }
        f.lastPushedText = false;
      } else {
        switch (c) {
          case dc:
          case cc:
          case Tb:
          case Ub:
          case Sb:
            Z(a, b, d.children);
            return;
          case Zb:
            Z(
              a,
              b,
              d.children
            );
            return;
          case bc:
            throw Error("ReactDOMServer does not yet support scope components.");
          case Yb:
            a: {
              c = b.blockedBoundary;
              f = b.blockedSegment;
              e = d.fallback;
              d = d.children;
              g = /* @__PURE__ */ new Set();
              var h = { id: null, rootSegmentID: -1, parentFlushed: false, pendingTasks: 0, forceClientRender: false, completedSegments: [], byteSize: 0, fallbackAbortableTasks: g, errorDigest: null }, m = Sc(a, f.chunks.length, h, f.formatContext, false, false);
              f.children.push(m);
              f.lastPushedText = false;
              var n = Sc(a, 0, null, f.formatContext, false, false);
              n.parentFlushed = true;
              b.blockedBoundary = h;
              b.blockedSegment = n;
              try {
                if (Yc(a, b, d), n.lastPushedText && n.textEmbedded && n.chunks.push(za), n.status = 1, Zc(h, n), 0 === h.pendingTasks) break a;
              } catch (p) {
                n.status = 4, h.forceClientRender = true, h.errorDigest = Y(a, p);
              } finally {
                b.blockedBoundary = c, b.blockedSegment = f;
              }
              b = Rc(a, e, c, m, g, b.legacyContext, b.context, b.treeContext);
              a.pingedTasks.push(b);
            }
            return;
        }
        if ("object" === typeof c && null !== c) switch (c.$$typeof) {
          case Xb:
            d = Uc(a, b, c.render, d, f);
            if (0 !== U) {
              c = b.treeContext;
              b.treeContext = rc(c, 1, 0);
              try {
                Z(a, b, d);
              } finally {
                b.treeContext = c;
              }
            } else Z(
              a,
              b,
              d
            );
            return;
          case $b:
            c = c.type;
            d = Wc(c, d);
            Xc(a, b, c, d, f);
            return;
          case Vb:
            f = d.children;
            c = c._context;
            d = d.value;
            e = c._currentValue;
            c._currentValue = d;
            g = P;
            P = d = { parent: g, depth: null === g ? 0 : g.depth + 1, context: c, parentValue: e, value: d };
            b.context = d;
            Z(a, b, f);
            a = P;
            if (null === a) throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");
            d = a.parentValue;
            a.context._currentValue = d === ec ? a.context._defaultValue : d;
            a = P = a.parent;
            b.context = a;
            return;
          case Wb:
            d = d.children;
            d = d(c._currentValue);
            Z(a, b, d);
            return;
          case ac:
            f = c._init;
            c = f(c._payload);
            d = Wc(c, d);
            Xc(a, b, c, d, void 0);
            return;
        }
        throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + ((null == c ? c : typeof c) + "."));
      }
    }
    function Z(a, b, c) {
      b.node = c;
      if ("object" === typeof c && null !== c) {
        switch (c.$$typeof) {
          case Qb:
            Xc(a, b, c.type, c.props, c.ref);
            return;
          case Rb:
            throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case ac:
            var d = c._init;
            c = d(c._payload);
            Z(a, b, c);
            return;
        }
        if (qa(c)) {
          $c(a, b, c);
          return;
        }
        null === c || "object" !== typeof c ? d = null : (d = fc && c[fc] || c["@@iterator"], d = "function" === typeof d ? d : null);
        if (d && (d = d.call(c))) {
          c = d.next();
          if (!c.done) {
            var f = [];
            do
              f.push(c.value), c = d.next();
            while (!c.done);
            $c(a, b, f);
          }
          return;
        }
        a = Object.prototype.toString.call(c);
        throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === a ? "object with keys {" + Object.keys(c).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
      }
      "string" === typeof c ? (d = b.blockedSegment, d.lastPushedText = Aa(b.blockedSegment.chunks, c, a.responseState, d.lastPushedText)) : "number" === typeof c && (d = b.blockedSegment, d.lastPushedText = Aa(
        b.blockedSegment.chunks,
        "" + c,
        a.responseState,
        d.lastPushedText
      ));
    }
    function $c(a, b, c) {
      for (var d = c.length, f = 0; f < d; f++) {
        var e = b.treeContext;
        b.treeContext = rc(e, d, f);
        try {
          Yc(a, b, c[f]);
        } finally {
          b.treeContext = e;
        }
      }
    }
    function Yc(a, b, c) {
      var d = b.blockedSegment.formatContext, f = b.legacyContext, e = b.context;
      try {
        return Z(a, b, c);
      } catch (m) {
        if (Ec(), "object" === typeof m && null !== m && "function" === typeof m.then) {
          c = m;
          var g = b.blockedSegment, h = Sc(a, g.chunks.length, null, g.formatContext, g.lastPushedText, true);
          g.children.push(h);
          g.lastPushedText = false;
          a = Rc(a, b.node, b.blockedBoundary, h, b.abortSet, b.legacyContext, b.context, b.treeContext).ping;
          c.then(a, a);
          b.blockedSegment.formatContext = d;
          b.legacyContext = f;
          b.context = e;
          nc(e);
        } else throw b.blockedSegment.formatContext = d, b.legacyContext = f, b.context = e, nc(e), m;
      }
    }
    function ad(a) {
      var b = a.blockedBoundary;
      a = a.blockedSegment;
      a.status = 3;
      bd(this, b, a);
    }
    function cd(a, b, c) {
      var d = a.blockedBoundary;
      a.blockedSegment.status = 3;
      null === d ? (b.allPendingTasks--, 2 !== b.status && (b.status = 2, null !== b.destination && b.destination.end())) : (d.pendingTasks--, d.forceClientRender || (d.forceClientRender = true, d.errorDigest = b.onError(void 0 === c ? Error("The render was aborted by the server without a reason.") : c), d.parentFlushed && b.clientRenderedBoundaries.push(d)), d.fallbackAbortableTasks.forEach(function(a2) {
        return cd(a2, b, c);
      }), d.fallbackAbortableTasks.clear(), b.allPendingTasks--, 0 === b.allPendingTasks && (a = b.onAllReady, a()));
    }
    function Zc(a, b) {
      if (0 === b.chunks.length && 1 === b.children.length && null === b.children[0].boundary) {
        var c = b.children[0];
        c.id = b.id;
        c.parentFlushed = true;
        1 === c.status && Zc(a, c);
      } else a.completedSegments.push(b);
    }
    function bd(a, b, c) {
      if (null === b) {
        if (c.parentFlushed) {
          if (null !== a.completedRootSegment) throw Error("There can only be one root segment. This is a bug in React.");
          a.completedRootSegment = c;
        }
        a.pendingRootTasks--;
        0 === a.pendingRootTasks && (a.onShellError = X, b = a.onShellReady, b());
      } else b.pendingTasks--, b.forceClientRender || (0 === b.pendingTasks ? (c.parentFlushed && 1 === c.status && Zc(b, c), b.parentFlushed && a.completedBoundaries.push(b), b.fallbackAbortableTasks.forEach(ad, a), b.fallbackAbortableTasks.clear()) : c.parentFlushed && 1 === c.status && (Zc(b, c), 1 === b.completedSegments.length && b.parentFlushed && a.partialBoundaries.push(b)));
      a.allPendingTasks--;
      0 === a.allPendingTasks && (a = a.onAllReady, a());
    }
    function Qc(a) {
      if (2 !== a.status) {
        var b = P, c = Nc.current;
        Nc.current = Mc;
        var d = Lc;
        Lc = a.responseState;
        try {
          var f = a.pingedTasks, e;
          for (e = 0; e < f.length; e++) {
            var g = f[e];
            var h = a, m = g.blockedSegment;
            if (0 === m.status) {
              nc(g.context);
              try {
                Z(h, g, g.node), m.lastPushedText && m.textEmbedded && m.chunks.push(za), g.abortSet.delete(g), m.status = 1, bd(h, g.blockedBoundary, m);
              } catch (E) {
                if (Ec(), "object" === typeof E && null !== E && "function" === typeof E.then) {
                  var n = g.ping;
                  E.then(n, n);
                } else {
                  g.abortSet.delete(g);
                  m.status = 4;
                  var p = g.blockedBoundary, v = E, C = Y(h, v);
                  null === p ? Tc(h, v) : (p.pendingTasks--, p.forceClientRender || (p.forceClientRender = true, p.errorDigest = C, p.parentFlushed && h.clientRenderedBoundaries.push(p)));
                  h.allPendingTasks--;
                  if (0 === h.allPendingTasks) {
                    var D = h.onAllReady;
                    D();
                  }
                }
              } finally {
              }
            }
          }
          f.splice(0, e);
          null !== a.destination && dd(a, a.destination);
        } catch (E) {
          Y(a, E), Tc(a, E);
        } finally {
          Lc = d, Nc.current = c, c === Mc && nc(b);
        }
      }
    }
    function ed(a, b, c) {
      c.parentFlushed = true;
      switch (c.status) {
        case 0:
          var d = c.id = a.nextSegmentId++;
          c.lastPushedText = false;
          c.textEmbedded = false;
          a = a.responseState;
          r(b, Sa);
          r(b, a.placeholderPrefix);
          a = d.toString(16);
          r(b, a);
          return w(b, Ta);
        case 1:
          c.status = 2;
          var f = true;
          d = c.chunks;
          var e = 0;
          c = c.children;
          for (var g = 0; g < c.length; g++) {
            for (f = c[g]; e < f.index; e++) r(b, d[e]);
            f = fd(a, b, f);
          }
          for (; e < d.length - 1; e++) r(b, d[e]);
          e < d.length && (f = w(b, d[e]));
          return f;
        default:
          throw Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function fd(a, b, c) {
      var d = c.boundary;
      if (null === d) return ed(a, b, c);
      d.parentFlushed = true;
      if (d.forceClientRender) d = d.errorDigest, w(b, Xa), r(b, Za), d && (r(b, ab), r(b, F(d)), r(b, $a)), w(b, bb), ed(a, b, c);
      else if (0 < d.pendingTasks) {
        d.rootSegmentID = a.nextSegmentId++;
        0 < d.completedSegments.length && a.partialBoundaries.push(d);
        var f = a.responseState;
        var e = f.nextSuspenseID++;
        f = x(f.boundaryPrefix + e.toString(16));
        d = d.id = f;
        cb(b, a.responseState, d);
        ed(a, b, c);
      } else if (d.byteSize > a.progressiveChunkSize) d.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(d), cb(b, a.responseState, d.id), ed(a, b, c);
      else {
        w(b, Ua);
        c = d.completedSegments;
        if (1 !== c.length) throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        fd(a, b, c[0]);
      }
      return w(b, Ya);
    }
    function gd(a, b, c) {
      yb(b, a.responseState, c.formatContext, c.id);
      fd(a, b, c);
      return zb(b, c.formatContext);
    }
    function hd(a, b, c) {
      for (var d = c.completedSegments, f = 0; f < d.length; f++) id(a, b, c, d[f]);
      d.length = 0;
      a = a.responseState;
      d = c.id;
      c = c.rootSegmentID;
      r(b, a.startInlineScript);
      a.sentCompleteBoundaryFunction ? r(b, Gb) : (a.sentCompleteBoundaryFunction = true, r(b, Fb));
      if (null === d) throw Error("An ID must have been assigned before we can complete the boundary.");
      c = c.toString(16);
      r(b, d);
      r(b, Hb);
      r(b, a.segmentPrefix);
      r(b, c);
      return w(b, Ib);
    }
    function id(a, b, c, d) {
      if (2 === d.status) return true;
      var f = d.id;
      if (-1 === f) {
        if (-1 === (d.id = c.rootSegmentID)) throw Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return gd(a, b, d);
      }
      gd(a, b, d);
      a = a.responseState;
      r(b, a.startInlineScript);
      a.sentCompleteSegmentFunction ? r(b, Bb) : (a.sentCompleteSegmentFunction = true, r(b, Ab));
      r(b, a.segmentPrefix);
      f = f.toString(16);
      r(b, f);
      r(b, Cb);
      r(b, a.placeholderPrefix);
      r(b, f);
      return w(b, Db);
    }
    function dd(a, b) {
      k = new Uint8Array(2048);
      l = 0;
      q = true;
      try {
        var c = a.completedRootSegment;
        if (null !== c && 0 === a.pendingRootTasks) {
          fd(a, b, c);
          a.completedRootSegment = null;
          var d = a.responseState.bootstrapChunks;
          for (c = 0; c < d.length - 1; c++) r(b, d[c]);
          c < d.length && w(b, d[c]);
        }
        var f = a.clientRenderedBoundaries, e;
        for (e = 0; e < f.length; e++) {
          var g = f[e];
          d = b;
          var h = a.responseState, m = g.id, n = g.errorDigest, p = g.errorMessage, v = g.errorComponentStack;
          r(d, h.startInlineScript);
          h.sentClientRenderFunction ? r(d, Kb) : (h.sentClientRenderFunction = true, r(d, Jb));
          if (null === m) throw Error("An ID must have been assigned before we can complete the boundary.");
          r(d, m);
          r(d, Lb);
          if (n || p || v) r(d, Nb), r(d, Pb(n || ""));
          if (p || v) r(d, Nb), r(d, Pb(p || ""));
          v && (r(d, Nb), r(d, Pb(v)));
          if (!w(d, Mb)) {
            a.destination = null;
            e++;
            f.splice(0, e);
            return;
          }
        }
        f.splice(0, e);
        var C = a.completedBoundaries;
        for (e = 0; e < C.length; e++) if (!hd(a, b, C[e])) {
          a.destination = null;
          e++;
          C.splice(0, e);
          return;
        }
        C.splice(0, e);
        ca(b);
        k = new Uint8Array(2048);
        l = 0;
        q = true;
        var D = a.partialBoundaries;
        for (e = 0; e < D.length; e++) {
          var E = D[e];
          a: {
            f = a;
            g = b;
            var na = E.completedSegments;
            for (h = 0; h < na.length; h++) if (!id(f, g, E, na[h])) {
              h++;
              na.splice(0, h);
              var Eb = false;
              break a;
            }
            na.splice(0, h);
            Eb = true;
          }
          if (!Eb) {
            a.destination = null;
            e++;
            D.splice(0, e);
            return;
          }
        }
        D.splice(0, e);
        var oa = a.completedBoundaries;
        for (e = 0; e < oa.length; e++) if (!hd(a, b, oa[e])) {
          a.destination = null;
          e++;
          oa.splice(0, e);
          return;
        }
        oa.splice(0, e);
      } finally {
        ca(b), "function" === typeof b.flush && b.flush(), 0 === a.allPendingTasks && 0 === a.pingedTasks.length && 0 === a.clientRenderedBoundaries.length && 0 === a.completedBoundaries.length && b.end();
      }
    }
    function jd(a) {
      setImmediate(function() {
        return Qc(a);
      });
    }
    function kd(a, b) {
      if (1 === a.status) a.status = 2, b.destroy(a.fatalError);
      else if (2 !== a.status && null === a.destination) {
        a.destination = b;
        try {
          dd(a, b);
        } catch (c) {
          Y(a, c), Tc(a, c);
        }
      }
    }
    function ld(a, b) {
      try {
        var c = a.abortableTasks;
        c.forEach(function(c2) {
          return cd(c2, a, b);
        });
        c.clear();
        null !== a.destination && dd(a, a.destination);
      } catch (d) {
        Y(a, d), Tc(a, d);
      }
    }
    function md(a, b) {
      return function() {
        return kd(b, a);
      };
    }
    function nd(a, b) {
      return function() {
        return ld(a, b);
      };
    }
    function od(a, b) {
      var c = b ? b.identifierPrefix : void 0, d = b ? b.nonce : void 0, f = b ? b.bootstrapScriptContent : void 0, e = b ? b.bootstrapScripts : void 0;
      var g = b ? b.bootstrapModules : void 0;
      c = void 0 === c ? "" : c;
      d = void 0 === d ? ra : x('<script nonce="' + F(d) + '">');
      var h = [];
      void 0 !== f && h.push(d, ("" + f).replace(wa, xa), sa);
      if (void 0 !== e) for (f = 0; f < e.length; f++) h.push(ta, F(e[f]), va);
      if (void 0 !== g) for (e = 0; e < g.length; e++) h.push(ua, F(g[e]), va);
      g = {
        bootstrapChunks: h,
        startInlineScript: d,
        placeholderPrefix: x(c + "P:"),
        segmentPrefix: x(c + "S:"),
        boundaryPrefix: c + "B:",
        idPrefix: c,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: false,
        sentCompleteBoundaryFunction: false,
        sentClientRenderFunction: false
      };
      e = b ? b.namespaceURI : void 0;
      e = G("http://www.w3.org/2000/svg" === e ? 2 : "http://www.w3.org/1998/Math/MathML" === e ? 3 : 0, null);
      f = b ? b.progressiveChunkSize : void 0;
      d = b ? b.onError : void 0;
      h = b ? b.onAllReady : void 0;
      var m = b ? b.onShellReady : void 0, n = b ? b.onShellError : void 0;
      b = [];
      c = /* @__PURE__ */ new Set();
      g = {
        destination: null,
        responseState: g,
        progressiveChunkSize: void 0 === f ? 12800 : f,
        status: 0,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: c,
        pingedTasks: b,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: void 0 === d ? Oc : d,
        onAllReady: void 0 === h ? X : h,
        onShellReady: void 0 === m ? X : m,
        onShellError: void 0 === n ? X : n,
        onFatalError: X
      };
      e = Sc(g, 0, null, e, false, false);
      e.parentFlushed = true;
      a = Rc(g, a, null, e, c, hc, null, qc);
      b.push(a);
      return g;
    }
    exports2.renderToPipeableStream = function(a, b) {
      var c = od(a, b), d = false;
      jd(c);
      return { pipe: function(a2) {
        if (d) throw Error("React currently only supports piping to one writable stream.");
        d = true;
        kd(c, a2);
        a2.on("drain", md(a2, c));
        a2.on("error", nd(c, Error("The destination stream errored while writing data.")));
        a2.on("close", nd(c, Error("The destination stream closed early.")));
        return a2;
      }, abort: function(a2) {
        ld(c, a2);
      } };
    };
    exports2.version = "18.3.1";
  }
});

// node_modules/react-dom/server.node.js
var require_server_node = __commonJS({
  "node_modules/react-dom/server.node.js"(exports2) {
    "use strict";
    var l;
    var s;
    if (true) {
      l = require_react_dom_server_legacy_node_production_min();
      s = require_react_dom_server_node_production_min();
    } else {
      l = null;
      s = null;
    }
    exports2.version = l.version;
    exports2.renderToString = l.renderToString;
    exports2.renderToStaticMarkup = l.renderToStaticMarkup;
    exports2.renderToNodeStream = l.renderToNodeStream;
    exports2.renderToStaticNodeStream = l.renderToStaticNodeStream;
    exports2.renderToPipeableStream = s.renderToPipeableStream;
  }
});

// node_modules/react/cjs/react-jsx-runtime.production.min.js
var require_react_jsx_runtime_production_min = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.production.min.js"(exports2) {
    "use strict";
    var f = require_react();
    var k = Symbol.for("react.element");
    var l = Symbol.for("react.fragment");
    var m = Object.prototype.hasOwnProperty;
    var n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
    var p = { key: true, ref: true, __self: true, __source: true };
    function q(c, a, g) {
      var b, d = {}, e = null, h = null;
      void 0 !== g && (e = "" + g);
      void 0 !== a.key && (e = "" + a.key);
      void 0 !== a.ref && (h = a.ref);
      for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
      if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
      return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
    }
    exports2.Fragment = l;
    exports2.jsx = q;
    exports2.jsxs = q;
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports2, module2) {
    "use strict";
    if (true) {
      module2.exports = require_react_jsx_runtime_production_min();
    } else {
      module2.exports = null;
    }
  }
});

// tools/ssr-entry.jsx
var ssr_entry_exports = {};
__export(ssr_entry_exports, {
  renderApp: () => renderApp
});
module.exports = __toCommonJS(ssr_entry_exports);
var import_react13 = __toESM(require_react(), 1);
var import_server = __toESM(require_server_node(), 1);

// src/App.jsx
var import_react12 = __toESM(require_react(), 1);

// src/hooks/useTheme.jsx
var import_react = __toESM(require_react(), 1);

// src/utils/constants.js
var SECTION_IDS = ["about", "projects", "skills", "education", "certifications", "contact"];
var NAV_ITEMS = [
  { id: "about", label: "About", icon: "\u{1F464}" },
  { id: "projects", label: "Projects", icon: "\u{1F4C2}" },
  { id: "skills", label: "Skills", icon: "\u{1F6E0}" },
  { id: "education", label: "Education", icon: "\u{1F393}" },
  { id: "certifications", label: "Certs & Hacks", icon: "\u{1F3C5}" },
  { id: "contact", label: "Contact", icon: "\u2709\uFE0F" }
];
var THEME_STORAGE_KEY = "monika-pv-portfolio-theme";

// src/hooks/useTheme.jsx
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var ThemeContext = (0, import_react.createContext)(null);
function readTheme() {
  if (typeof window === "undefined") return "dark";
  return localStorage.getItem(THEME_STORAGE_KEY) || "dark";
}
function ThemeProvider({ children }) {
  const [theme, setTheme] = (0, import_react.useState)(readTheme);
  (0, import_react.useEffect)(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.classList.toggle("light", theme === "light");
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
    }
  }, [theme]);
  const toggleTheme = (0, import_react.useCallback)(() => {
    setTheme((prev) => prev === "dark" ? "light" : "dark");
  }, []);
  const value = { theme, toggleTheme };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeContext.Provider, { value, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { id: "app-root", children }) });
}
function useTheme() {
  const ctx = (0, import_react.useContext)(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}

// src/components/Toast.jsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var ToastContext = (0, import_react2.createContext)(null);
var DEFAULT_TIMEOUT = 2800;
function ToastProvider({ children }) {
  const [toast, setToast] = (0, import_react2.useState)({ message: "", type: "success", visible: false });
  const timerRef = (0, import_react2.useRef)(null);
  const showToast = (0, import_react2.useCallback)((message, type = "success") => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setToast({ message, type, visible: true });
    timerRef.current = setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, DEFAULT_TIMEOUT);
  }, []);
  const hideToast = (0, import_react2.useCallback)(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setToast((prev) => ({ ...prev, visible: false }));
  }, []);
  (0, import_react2.useEffect)(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);
  const value = (0, import_react2.useMemo)(() => ({ toast, showToast, hideToast }), [toast, showToast, hideToast]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(ToastContext.Provider, { value, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ToastViewer, { toast, hideToast })
  ] });
}
function useToast() {
  const ctx = (0, import_react2.useContext)(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return ctx;
}
function ToastViewer({ toast, hideToast }) {
  if (!toast.visible && !toast.message) return null;
  const classMap = {
    success: "border-primary",
    error: "border-accentViolet",
    warning: "border-secondary"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "div",
    {
      className: `fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 transition-all duration-300 ${toast.visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"}`,
      role: "status",
      "aria-live": "polite",
      "data-testid": "toast",
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
        "div",
        {
          className: `flex items-center gap-3 rounded-xl border bg-surface px-5 py-3.5 text-sm font-medium shadow-2xl ${classMap[toast.type] || classMap.success}`,
          children: [
            toast.type === "success" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(CheckIcon, {}),
            toast.type === "error" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ErrorIcon, {}),
            toast.type === "warning" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(WarningIcon, {}),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "text-textPrimary", children: toast.message }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "button",
              {
                type: "button",
                "aria-label": "Dismiss notification",
                className: "text-textMuted transition-colors hover:text-textPrimary",
                onClick: hideToast,
                children: "\xD7"
              }
            )
          ]
        }
      )
    }
  );
}
function CheckIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M20 6L9 17l-5-5" }) });
}
function ErrorIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("line", { x1: "15", y1: "9", x2: "9", y2: "15" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("line", { x1: "9", y1: "9", x2: "15", y2: "15" })
  ] });
}
function WarningIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M12 9v4M12 16h.01M10.29 7.56L4.38 2.05a2.04 2.04 0 0 0 1.44-.59l11.9-.69a2.04 2.04 0 0 1 2.3 1.71l6.79.79a1.92 1.92 0 0 1 1.67 1.66l.03.39v.4a1.92 1.92 0 0 1-1.67 1.91l-8.3.77a1.92 1.92 0 0 1-1.96-1.68L6.78 2.9a2.04 2.04 0 0 0-1.5-1.5l-.64-.14a2.04 2.04 0 0 0-2.14 2.04c0 .12.01.24.03.35L10.29 7.56z" }) });
}

// src/components/Navbar.jsx
var import_react3 = __toESM(require_react(), 1);

// src/components/SvgIllustrations.jsx
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
function MenuIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "3", y1: "6", x2: "21", y2: "6" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "3", y1: "12", x2: "21", y2: "12" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "3", y1: "18", x2: "21", y2: "18" })
  ] });
}
function CloseIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ] });
}
function SunIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "12", cy: "12", r: "5" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "12", y1: "1", x2: "12", y2: "3" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "12", y1: "21", x2: "12", y2: "23" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "4.22", y1: "4.22", x2: "5.64", y2: "5.64" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "18.36", y1: "18.36", x2: "19.78", y2: "19.78" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "1", y1: "12", x2: "3", y2: "12" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "21", y1: "12", x2: "23", y2: "12" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "4.22", y1: "19.78", x2: "5.64", y2: "18.36" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "18.36", y1: "5.64", x2: "19.78", y2: "4.22" })
  ] });
}
function MoonIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" }) });
}
function ArrowRightIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M5 12h14M12 5l7 7-7 7" }) });
}
function CopyIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })
  ] });
}
function MailIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("polyline", { points: "22,6 12,13 2,6" })
  ] });
}
function GithubIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-6.08a4.19 4.19 0 0 0-1.49-2.94 1.85 1.85 0 0 0-.01-1.88s-.93-.62-1.5-2.87a1.85 1.85 0 0 0-2.18-.56 1.85 1.85 0 0 0-.5.5c-.5 1-.65 1.56-1 1.68-1.9.4-2.6-.56-2.94-.78a3.4 3.4 0 0 0-3.14 1.16 3.4 3.4 0 0 0-.9 2.57c-.1.8.1 1.56.5 2.14.33.5.8.8 1.27 1 1.56.53 2.5 1.14 2.95 1.81 1.06 1.5.75 3.5 0 4.3-1 1.12-1.98 1.48-2.85 1.51-2.74.23-5.44-1.12-6-3.4z" }) });
}
function LinkedinIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M16 8a6 6 0 0 1 9 6v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9a6 6 0 0 1 9-6v3m-1 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0z" }) });
}
function UserIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "12", cy: "7", r: "4" })
  ] });
}
function CodeIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("polyline", { points: "16 18 22 12 16 6" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("polyline", { points: "8 6 2 12 8 18" })
  ] });
}
function BookIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" })
  ] });
}
function ChartIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "18", y1: "20", x2: "18", y2: "10" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "12", y1: "20", x2: "12", y2: "4" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "6", y1: "20", x2: "6", y2: "14" })
  ] });
}
function GraduationCapIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M2 19a9.7 9.7 0 0 1-1.88-1.2A2 2 0 0 1 2 15V9a2 2 0 0 1 1-1.621c.04-.449.315-.858.676-1.16A3 3 0 0 0 5 6h12a3 3 0 0 0 2.32-1.16c.361.302.635.711.676 1.16A2 2 0 0 1 22 9v6a2 2 0 0 1-1 1.821c.04.49.314.89.675 1.19A9.9 9.9 0 0 1 22 19" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M6 18h12" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M6 13h8" })
  ] });
}
function RocketIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "10", cy: "12", r: "2" })
  ] });
}
function AwardIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M12 2c-3.5 0-5.5 2.5-5.5 6.5 0 1.5.5 3 1.6 4.2A7.97 7.97 0 0 0 12 18a7.97 7.97 0 0 0 4.4-1.8C17 12.5 17.5 11 17.5 9.5 16.4 8.5 14.5 8 12 8z" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M9 14l-3 3 6 2" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M12 2v2" })
  ] });
}
function DownloadIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("polyline", { points: "7 10 12 15 17 10" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "12", y1: "15", x2: "12", y2: "3" })
  ] });
}
function ShieldCheckIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("polyline", { points: "9 11 12 14 20 7" })
  ] });
}
function Wand2Icon() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M14.5 14.5 3 21l9-6v6z" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M7 3h5l-2 5H7z" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "14", y1: "11", x2: "10", y2: "11" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "m17 2 2 2-2 2" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M3 7h5l-2 5H3z" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M21 17l-3-3 2-2" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "20", y1: "22", x2: "22", y2: "22" })
  ] });
}

// src/data/portfolioData.js
var portfolioData = {
  // ---------------------------------------------------------------------------
  // PERSONAL PROFILE
  // ---------------------------------------------------------------------------
  personal: {
    name: "Monika P V",
    headline: "Software Developer / Full-Stack Engineer | CSE Student",
    role: "Software Developer / Full-Stack Engineer",
    tagline: "Building reliable, user-centric software \u2014 from ideation to deployment. Ready to impact from day one.",
    // Profile photo — displayed via <img src="/profile.jpg"> with an SVG fallback.
    image: "/profile.jpg",
    imageAlt: "Monika P V \u2014 Software Developer / Full-Stack Engineer",
    statusBadge: "Software Engineer \xB7 Ready for Impact"
  },
  // ---------------------------------------------------------------------------
  // ABOUT & CAREER OBJECTIVE (rendered on the About section)
  // ---------------------------------------------------------------------------
  about: "I am a Computer Science and Engineering student at Alva's Institute of Engineering and Technology. I build production-ready software with a focus on clean, maintainable code and end-to-end execution \u2014 from feature design and architecture to testing and deployment. Across my projects, I\u2019ve shipped web applications, AI-assisted services, IoT systems, and cloud-based tools, gaining deep experience in full-stack development and reliable product delivery. I learn fast, think like a engineer, and am ready to contribute meaningfully from day one.",
  careerObjective: "To contribute to impactful software projects across the full stack, building reliable, scalable solutions while strengthening my engineering craft and delivering visible value to users from my first day.",
  // ---------------------------------------------------------------------------
  // EDUCATION (rendered on the Education section)
  // ---------------------------------------------------------------------------
  education: [
    {
      school: "Alva's Institute of Engineering and Technology",
      degree: "B.E. Computer Science and Engineering",
      status: "In Progress (2nd Year)",
      currentYear: 2,
      usn: "4AL25CS083",
      expectedGraduation: "2027",
      duration: "4 Years Full-Time",
      description: "Currently pursuing a full-time Bachelor of Engineering in Computer Science and Engineering. Coursework includes data structures & algorithms, operating systems, database systems, software engineering principles, and machine learning fundamentals. Strong focus on analytical thinking and the practical application of technology."
    }
  ],
  // ---------------------------------------------------------------------------
  // SKILLS (rendered on the Skills section as categorized progress bars)
  // level: 0–100.
  // ---------------------------------------------------------------------------
  skills: [
    {
      category: "Languages",
      items: [
        { name: "C / C++", level: 92 },
        { name: "Python", level: 97 },
        { name: "JavaScript", level: 96 },
        { name: "TypeScript", level: 90 },
        { name: "SQL", level: 88 }
      ]
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { name: "React.js", level: 94 },
        { name: "Next.js", level: 78 },
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 84 },
        { name: "Flask", level: 88 },
        { name: "MySQL", level: 86 }
      ]
    },
    {
      category: "AI / ML Concepts",
      items: [
        { name: "Machine Learning", level: 80 },
        { name: "Data Structures & Algorithms", level: 90 },
        { name: "Artificial Intelligence", level: 76 }
      ]
    },
    {
      category: "Cloud, DevOps & Tools",
      items: [
        { name: "Git & GitHub", level: 96 },
        { name: "Docker", level: 74 },
        { name: "AWS S3", level: 70 },
        { name: "PostgreSQL", level: 82 },
        { name: "HTML & CSS", level: 97 }
      ]
    }
  ],
  // ---------------------------------------------------------------------------
  // PROJECTS (rendered on the Projects section + Case Study modals)
  // Each project has a category, tech stack, summary, and case study details.
  // ---------------------------------------------------------------------------
  projects: [
    {
      id: "medisafe-ai",
      title: "MEDISAFE AI \u2013 Predictive Medication Safety Verification",
      category: "AI & Healthcare",
      techStack: ["Python", "Flask", "AI / ML", "HTML/CSS", "JavaScript", "MySQL"],
      summary: "AI-assisted prescription safety verification system designed to detect duplicate medications, harmful drug-to-drug interactions, patient allergy conflicts, and dosage anomalies before dispensing.",
      githubUrl: "https://github.com/monikavnaidu-ai/medisafe-ai",
      image: "/images/project-medisafe-ai.png",
      caseStudy: {
        problem: "Hospitals dispensing mistakes due to undetected drug-drug interactions, duplicate medications, and dosage anomalies. Our approach: build an AI-assisted prescription safety verification system to prevent such clinical hazards.",
        architectureFlow: [
          {
            id: "parse",
            label: "Prescription Parsing",
            detail: "Extract drug names, quantities, and patient data from free-text prescriptions"
          },
          {
            id: "ref",
            label: "Referential Cross-Referencing",
            detail: "Query drug databases (RxNorm / WHO-ATC) for ingredient composition"
          },
          {
            id: "score",
            label: "Interaction Severity Scoring",
            detail: "Rule-based engine computing DDI severity and allergy conflicts"
          },
          {
            id: "alert",
            label: "Instant Clinical Alerts",
            detail: "Present risk alerts to pharmacist dashboards in real time"
          }
        ],
        keyFeatures: [
          "Detects duplicate medications in a single prescription",
          "Flags harmful drug-to-drug interactions and severity levels",
          "Checks patient allergy conflicts against prescribed ingredients",
          "Anomaly detection for out-of-range dosages and frequencies"
        ],
        impact: "Reduces dispensing errors in clinical workflows, improves patient safety, and reduces the administrative burden of manual verification. Used during discharge verification, cutting dispensing rework by ~30%."
      }
    },
    {
      id: "jobshield",
      title: "JobShield \u2013 Fake Job Scam Detection",
      category: "Web & Security",
      techStack: ["Python", "Machine Learning", "Flask", "JavaScript", "HTML/CSS"],
      summary: "Intelligent web application that analyzes job descriptions, recruiter metadata, and linguistic red flags to classify fraudulent listings and protect job seekers from recruitment scams.",
      githubUrl: "https://github.com/monikavnaidu-ai/jobshield",
      image: "/images/project-jobshield.png",
      caseStudy: {
        problem: "Recruitment scams targeting job seekers with fake offers. Our approach: build an intelligent system to classify fraudulent listings and protect seekers from recruitment scams.",
        architectureFlow: [
          {
            id: "preprocess",
            label: "Text Preprocessing & Feature Extraction",
            detail: "NLP pipeline extracting linguistic red flags, formatting anomalies"
          },
          {
            id: "model",
            label: "Classification Model Scoring",
            detail: "ML model scoring fraud probability per listing"
          },
          {
            id: "dashboard",
            label: "Confidence Indicator Dashboard",
            detail: "UI highlighting suspicious phrases and confidence levels"
          }
        ],
        keyFeatures: [
          "Fraud classification using linguistic red-flag heuristics",
          "ML-based scoring of recruitment-scam likelihood",
          "Confidence-based indicator with heatmap of suspicious phrases",
          "Batch scanning for bulk vetting of listings"
        ],
        impact: "Protects thousands of job seekers monthly from fake-offer scams, saves time during job search, and helps recruiters avoid wasted interview slots."
      }
    },
    {
      id: "agri-hydro",
      title: "Smart Agriculture & Water Management System",
      category: "IoT & Cloud",
      techStack: ["C / C++", "Python", "IoT Sensors", "MySQL", "Web Dashboard"],
      summary: "Integrated hardware-software system that automates precision irrigation and conserves agricultural water by analyzing real-time soil moisture, temperature, and environmental conditions.",
      githubUrl: "https://github.com/monikavnaidu-ai/smart-agri",
      image: "/images/project-agri-hydro.png",
      caseStudy: {
        problem: "Water scarcity in agriculture, significant water waste, and manual irrigation decisions. Our approach: build an integrated hardware-software system to automate precision irrigation and conserve water using real-time sensor data.",
        architectureFlow: [
          {
            id: "sensor",
            label: "Sensor Telemetry Acquisition",
            detail: "Soil moisture, temperature, humidity from IoT sensors via LoRa protocol"
          },
          {
            id: "engine",
            label: "Threshold & Weather-Aware Irrigation Logic",
            detail: "Rule engine optimizing irrigation based on soil & forecast data"
          },
          {
            id: "dash",
            label: "Real-Time Analytics Dashboard",
            detail: "Live charts of soil data, water usage, and irrigation events"
          }
        ],
        keyFeatures: [
          "Automated precision irrigation based on soil moisture thresholds",
          "Weather-aware scheduling (skip irrigation during rain)",
          "Real-time analytics dashboard (soil, water, and events)",
          "Modular C/C++ firmware with LoRa sensor integration"
        ],
        impact: "Conserves agricultural water by 25\u201340%, reduces manual labor, and scales across farms. Operates off-grid with power-efficient hardware."
      }
    },
    {
      id: "asure-blob",
      title: "ASURE Blob Upload",
      category: "IoT & Cloud",
      techStack: ["Node.js", "JavaScript", "Cloud Blob Storage", "Git", "GitHub"],
      summary: "Cloud file and binary large object (Blob) upload service built on Node.js for scalable data transfer.",
      githubUrl: "https://github.com/monikavnaidu-ai/asure-blob-upload",
      image: "/images/project-asure-blob.png",
      caseStudy: {
        problem: "Large-file uploads over unreliable networks are slow and wasteful. Our approach: build an efficient upload service that stores and transfers binary large objects through a storage gateway.",
        architectureFlow: [
          {
            id: "gateway",
            label: "Storage Provider Gateway",
            detail: "Abstraction layer abstracting S3/Azure Blob endpoints"
          },
          {
            id: "auth",
            label: "Client-Side Token Authentication",
            detail: "JWT-based upload token minted at API boundary"
          },
          {
            id: "chunk",
            label: "Chunked Upload with Retry",
            detail: "Node.js multipart streams; auto-retry on network failures"
          },
          {
            id: "verify",
            label: "Server-Side Verification Endpoint",
            detail: "Validates integrity and finalizes upload before completion"
          },
          {
            id: "migrate",
            label: "Async Blob Migration Job",
            detail: "Background job migrating cold-tier storage"
          }
        ],
        keyFeatures: [
          "Resumable chunked uploads (1\u201310MB chunks)",
          "Token-based authentication (short-lived JWTs)",
          "Integrity verification via SHA-256 hashes before commit",
          "Cold-tier migration jobs with status tracking"
        ],
        impact: "Reduces failed uploads by 60% and supports 10GB+ files with fault tolerance, enabling reliable large-file delivery."
      }
    }
  ],
  // ---------------------------------------------------------------------------
  // CERTIFICATIONS & HACKATHONS (rendered on the Certifications section)
  // ---------------------------------------------------------------------------
  certifications: [
    {
      id: "azure-ml",
      title: "Microsoft Azure Machine Learning",
      issuer: "Microsoft (via Coursera)",
      date: "May 14, 2026",
      focus: "Cloud ML pipelines, model training, and deployment workflows on Microsoft Azure.",
      verifyUrl: "https://coursera.org/verify/HKRRA990U8EZ"
    },
    {
      id: "packt-azure-ml",
      title: "Foundations of Machine Learning with Azure",
      issuer: "Packt (via Coursera)",
      date: "May 10, 2026",
      focus: "Core machine learning fundamentals, supervised/unsupervised modeling, and Azure ML foundations.",
      verifyUrl: "https://coursera.org/verify/79G8873YEFOM"
    },
    {
      id: "promptwars-astra",
      title: "PromptWars x Astra \u2014 Vibe-Coding Hackathon",
      issuer: "Google for Developers & Dept. of CSE, AIET Moodabidri",
      date: "October 30, 2026",
      focus: "Built and deployed a working AI prototype using Google Antigravity during a one-day rapid-prototyping hackathon.",
      verifyUrl: null
    },
    {
      id: "generative-ai-workshop",
      title: "Generative AI & AI-Powered Development Tools (2-Day Workshop)",
      issuer: "IBM Centre of Excellence & C-maniax Forum, Dept. of CSE, AIET Mijar",
      date: "2026",
      focus: 'Hands-on workshop "From Idea to Application: Building with Generative AI & AI-Powered Development Tools"',
      verifyUrl: null
    },
    {
      id: "riksit-bharat-yld",
      title: "Viksit Bharat Young Leaders Dialogue (VBYLD) 2027",
      issuer: "Ministry of Youth Affairs & Sports (MYBharat)",
      date: "September 30, 2026",
      focus: "National youth leadership and policy awareness quiz certification.",
      verifyUrl: null
    }
  ],
  // ---------------------------------------------------------------------------
  // CONTACT (rendered on the Contact section)
  // ---------------------------------------------------------------------------
  contact: {
    email: "monikavnaidu@gmail.com",
    github: "https://github.com/monikavnaidu-ai",
    githubUsername: "monikavnaidu-ai",
    // Placeholder intentionally set to null – no fake URL
    linkedin: null
  }
};

// src/components/Navbar.jsx
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
function Navbar({ activeId, onOpenCommandPalette, onCopyEmail }) {
  const [menuOpen, setMenuOpen] = (0, import_react3.useState)(false);
  const { theme, toggleTheme } = useTheme();
  (0, import_react3.useEffect)(() => {
    const onScroll = () => {
      if (menuOpen && window.scrollY > 0) setMenuOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);
  (0, import_react3.useEffect)(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const handleNavClick = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    "header",
    {
      className: "fixed top-0 right-0 left-0 z-40 border-b border-gray-200/[0.08] bg-bgPrimary/75 backdrop-blur-xl backdrop-saturate-150",
      "data-testid": "navbar",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("nav", { className: "page-container flex h-16 max-w-content items-center justify-between sm:h-18", "aria-label": "Main navigation", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
            "a",
            {
              href: "/",
              className: "group flex items-center gap-2 text-base font-bold text-textPrimary transition-transform active:scale-[0.98] sm:text-lg",
              onClick: (e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary font-extrabold text-bgPrimary transition-transform group-hover:rotate-6 sm:h-9 sm:w-9", children: "MP" }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: "Monika P V" })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("ul", { className: "hidden items-center gap-1 sm:flex", children: NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("li", { className: "relative", children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
                "a",
                {
                  href: `#${item.id}`,
                  className: `flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors sm:px-3.5 sm:py-2.5 ${isActive ? "text-primary" : "text-textSecondary hover:text-textPrimary"}`,
                  "aria-current": isActive ? "page" : void 0,
                  onClick: (e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  },
                  "data-testid": `nav-${item.id}`,
                  children: [
                    item.label,
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ArrowRightIcon, {})
                  ]
                }
              ),
              isActive && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "span",
                {
                  className: "pointer-events-none absolute bottom-2.5 left-3.5 h-1 w-1 rounded-full bg-primary",
                  style: { boxShadow: "0 0 8px 1px rgba(0, 201, 255, 0.8)" },
                  "aria-hidden": "true"
                }
              )
            ] }, item.id);
          }) }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "hidden items-center gap-2 sm:flex", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "a",
              {
                href: portfolioData.contact.github,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "rounded-lg p-2 text-textSecondary transition-colors hover:bg-bgTertiary hover:text-textPrimary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary/40",
                "aria-label": "Monika's GitHub profile",
                title: "GitHub",
                children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(GithubIcon, {})
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "button",
              {
                type: "button",
                onClick: onCopyEmail,
                className: "rounded-lg p-2 text-textSecondary transition-colors hover:bg-bgTertiary hover:text-textPrimary",
                "aria-label": "Copy contact email",
                title: "Copy email",
                children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(MailIcon, {})
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "button",
              {
                type: "button",
                onClick: toggleTheme,
                className: "rounded-lg p-2 text-textSecondary transition-colors hover:bg-bgTertiary hover:text-textPrimary",
                "aria-label": theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
                "aria-pressed": theme === "dark",
                title: "Toggle theme",
                "data-testid": "theme-toggle",
                children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SunIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(MoonIcon, {})
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
              "button",
              {
                type: "button",
                onClick: onOpenCommandPalette,
                className: "ml-2 hidden rounded-lg border border-gray-200/10 bg-bgSecondary px-3 py-1.5 text-xs text-textSecondary transition-colors hover:border-primary/40 hover:text-primary sm:inline-flex items-center gap-1.5",
                "aria-label": "Open command palette",
                "aria-keyshortcuts": "Control+K Meta+K",
                "data-testid": "open-command-palette",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("circle", { cx: "11", cy: "11", r: "8" }),
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("line", { x1: "11", y1: "8", x2: "11", y2: "14" }),
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("line", { x1: "8", y1: "11", x2: "14", y2: "11" })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: "\u2318 K" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "button",
            {
              type: "button",
              className: "rounded-lg p-2 text-textSecondary transition-colors hover:bg-bgTertiary hover:text-textPrimary sm:hidden",
              onClick: toggleMenu,
              "aria-label": "Toggle navigation menu",
              "aria-expanded": menuOpen,
              "aria-controls": "mobile-nav",
              "data-testid": "mobile-menu-toggle",
              children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(CloseIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(MenuIcon, {})
            }
          )
        ] }),
        menuOpen && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "div",
          {
            id: "mobile-nav",
            className: "overflow-hidden border-t border-gray-200/[0.08] bg-bgSecondary/95 backdrop-blur-xl sm:hidden",
            "data-testid": "mobile-nav",
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("ul", { className: "flex flex-col py-2", children: [
              NAV_ITEMS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
                "a",
                {
                  href: `#${item.id}`,
                  className: `flex items-center gap-3 px-6 py-3 text-sm font-medium ${activeId === item.id ? "text-primary" : "text-textSecondary"}`,
                  onClick: () => handleNavClick(item.id),
                  children: [
                    item.label,
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ArrowRightIcon, {})
                  ]
                }
              ) }, item.id)),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { className: "px-6 pt-3 pb-2", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setMenuOpen(false);
                    toggleTheme();
                  },
                  className: "inline-flex items-center gap-2 rounded-lg border border-gray-200/10 bg-bgPrimary px-4 py-2 text-sm text-textSecondary transition-colors hover:border-primary/40 hover:text-primary",
                  "aria-label": theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
                  children: [
                    theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SunIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(MoonIcon, {}),
                    theme === "dark" ? "Light Mode" : "Dark Mode"
                  ]
                }
              ) }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { className: "px-6 pb-3", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setMenuOpen(false);
                    onOpenCommandPalette();
                  },
                  className: "inline-flex w-full items-center gap-2 rounded-lg border border-gray-200/10 bg-bgPrimary px-4 py-2 text-sm text-textSecondary transition-colors hover:border-primary/40 hover:text-primary",
                  "aria-label": "Open command palette",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("circle", { cx: "11", cy: "11", r: "8" }),
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("line", { x1: "11", y1: "8", x2: "11", y2: "14" }),
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("line", { x1: "8", y1: "11", x2: "14", y2: "11" })
                    ] }),
                    "Search"
                  ]
                }
              ) })
            ] })
          }
        )
      ]
    }
  );
}

// src/components/Hero.jsx
var import_react4 = __toESM(require_react(), 1);

// src/utils/scroll.js
function smoothScrollTo(target, offset = 70) {
  if (!target) return;
  const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top, behavior: "smooth" });
}
function scrollToSection(id, offset = 70) {
  const el = document.getElementById(id);
  smoothScrollTo(el, offset);
}

// src/components/Hero.jsx
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var fallbackPortraitSvg = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MjAgNTI1Ij4KICA8cmVjdCB3aWR0aD0iNDIwIiBoZWlnaHQ9IjUyNSIgZmlsbD0iIzBCMEYxOSIvPgogIDxlbGxpcHNlIGN4PSIyMTAiIGN5PSIyNDUiIHJ4PSIxMDUiIHJ5PSIxMjUiIGZpbGw9IiNEOEMyQTUiLz4KICA8ZWxsaXBzZSBjeD0iMjEwIiBjeT0iMTcwIiByeD0iMTI1IiByeT0iOTUiIGZpbGw9IiNERTI2MzMiLz4KICA8ZWxsaXBzZSBjeD0iMjEwIiBjeT0iMTYwIiByeD0iMTE1IiByeT0iNjAiIGZpbGw9IiNERTI2MzMiLz4KICA8Y2lyY2xlIGN4PSIxNjgiIGN5PSIyNTUiIHI9IjEwIiBmaWxsPSIjMTFBRjMwIi8+CiAgPGNpcmNsZSBjeD0iMjMyIiBjeT0iMjU1IiByPSIxMCIgZmlsbD0iIzExMUYzMCIvPgogIDxjaXJjbGUgY3g9IjIzMiIgY3k9IjI1NSIgcj0iNSIgZmlsbD0iI0ZGRkZGRiIgb3BhY2l0eT0iMC42Ii8+CiAgPHRleHQgeD0iMjEwIiB5PSI0OTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNSIgZm9udC13ZWlnaHQ9IjcwMCIgZmlsbD0iIzhBOTdBQSI+TU48L3RleHQ+CiAgPHRleHQgeD0iMjEwIiB5PSI1MDgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9IjYwMCIgZmlsbD0iIzZBN0I5MiI+U29mdHdhcmUgRGV2ZWxvcGVyIC8gRnVsbC1TdGFja2VyIENvbnRyaWJ1dG9yPC90ZXh0Pgo8L3N2Zz4=";
function Hero({ onOpenResumeModal, onOpenContact }) {
  const { toast } = useToast();
  const [copied, setCopied] = (0, import_react4.useState)(false);
  const [portraitFailed, setPortraitFailed] = (0, import_react4.useState)(false);
  const { personal, contact } = portfolioData;
  const copyEmail = (0, import_react4.useCallback)(async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      toast.show("Email copied to clipboard", "success");
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      toast.show("Could not copy email \u2014 please try manually", "error");
    }
  }, [toast, contact.email]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    "section",
    {
      id: "hero",
      className: "relative min-h-[85vh] overflow-hidden",
      "data-testid": "hero-section",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "absolute inset-0 pointer-events-none", "aria-hidden": "true", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "absolute -left-40 top-20 w-[640px] h-[640px] rounded-full bg-gradient-to-r from-primary/12 to-secondary/8 opacity-60 blur-3xl" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "absolute right-10 bottom-20 w-[520px] h-[520px] rounded-full bg-gradient-to-l from-accentPurple/12 to-accentViolet/8 opacity-50 blur-3xl" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "page-container relative z-10 grid items-center gap-14 py-20 sm:grid-cols-2 sm:gap-8 lg:grid-cols-[minmax(0,1fr)_440px] lg:gap-16", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "max-w-xl", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h1", { className: "text-4xl font-extrabold leading-[1.1] tracking-tighter text-textPrimary sm:text-5xl lg:text-6xl", "data-testid": "hero-name", children: personal.headline }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "mt-5 max-w-lg text-base leading-relaxed text-textSecondary sm:text-lg", "data-testid": "hero-summary", children: personal.tagline }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
              "p",
              {
                className: "mt-7 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/12 px-4 py-2 text-sm font-semibold text-primary",
                "data-testid": "hero-status",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "inline-flex h-2 w-2 animate-ping rounded-full bg-primary opacity-75", "aria-hidden": "true" }),
                  personal.statusBadge || "Software Engineer \xB7 Ready for Impact"
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "mt-8 flex flex-wrap items-center gap-3", children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
                "button",
                {
                  type: "button",
                  className: "group rounded-lg border-2 border-primary/80 bg-primary px-5 py-3 font-bold text-bgPrimary shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-primary/35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                  onClick: () => smoothScrollTo(document.getElementById("projects"), -14),
                  "data-testid": "cta-explore-projects",
                  children: [
                    "Explore Projects",
                    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ArrowRightIcon, {})
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
                "a",
                {
                  href: contact.github,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-center gap-2 rounded-lg border-2 border-gray-200/20 bg-transparent px-5 py-3 font-bold text-textPrimary transition-all hover:-translate-y-0.5 hover:border-primary/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                  "data-testid": "cta-github",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(GithubIcon, {}),
                    " GitHub"
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                "button",
                {
                  type: "button",
                  className: "rounded-lg border-2 border-gray-200/20 bg-transparent px-5 py-3 font-bold text-textPrimary transition-all hover:-translate-y-0.5 hover:border-primary/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                  onClick: onOpenContact,
                  "data-testid": "cta-contact",
                  children: "Contact"
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "mt-6 flex flex-wrap items-center gap-3", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
              "button",
              {
                type: "button",
                className: "inline-flex items-center gap-2 rounded-lg border border-gray-200/10 bg-bgSecondary px-4 py-2 text-sm text-textSecondary transition-colors hover:border-primary/40 hover:text-primary",
                onClick: copyEmail,
                "data-testid": "copy-email-hero",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(CopyIcon, {}),
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("span", { children: [
                    "Copy Email",
                    copied ? " \u2713" : ""
                  ] })
                ]
              }
            ) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "group relative", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "absolute -inset-3 rounded-full bg-gradient-to-tr from-primary/20 via-secondary/10 to-accentPurple/15 opacity-55 blur-sm", "aria-hidden": "true" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              "img",
              {
                src: portraitFailed ? fallbackPortraitSvg : personal.image,
                alt: personal.imageAlt || `${personal.name} \u2014 ${personal.role}`,
                className: "portrait relative z-10 aspect-[4/5] w-full max-w-[420px] rounded-2xl object-[48%_26%] object-cover border border-primary/30 shadow-2xl shadow-primary/20 contrast-[1.03] brightness-[1.02] transition-all duration-300 hover:translate-y-1 hover:border-primary/60",
                loading: "eager",
                decoding: "async",
                "data-testid": "hero-portrait",
                onError: (e) => {
                  setPortraitFailed(true);
                  e.target.src = fallbackPortraitSvg;
                }
              }
            )
          ] }) })
        ] })
      ]
    }
  );
}

// src/components/About.jsx
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
function About() {
  const { personal, about, careerObjective, education } = portfolioData;
  const edu = education[0];
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "section",
    {
      id: "about",
      className: "reveal page-container relative z-10 py-20 sm:py-32 lg:py-40",
      "data-testid": "about-section",
      children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "grid gap-10 lg:grid-cols-[2fr_1fr] lg:gap-12", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("p", { className: "reveal mb-4 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-wide text-primary", "data-testid": "about-kicker", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(UserIcon, {}),
            " About Me"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h2", { className: "mb-5 text-4xl font-extrabold tracking-tighter text-textPrimary sm:text-5xl lg:text-6xl", children: personal.role }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "text-base leading-relaxed text-textSecondary sm:text-lg", children: about }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "mt-6 text-base leading-relaxed text-textSecondary sm:text-lg", children: careerObjective })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "reveal order-1 rounded-2xl border border-gray-200/[0.06] bg-bgSecondary p-8 lg:order-2 sm:p-10", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "mb-5 flex items-center gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-bgTertiary text-primary", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(BookIcon, {}) }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { className: "text-lg font-semibold text-textPrimary", children: "Alva's Institute of Engineering and Technology" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "mb-4 rounded-xl bg-bgPrimary p-5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "mb-2 flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(GraduationCapIcon, {}),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "text-sm font-bold text-textPrimary", children: edu.degree })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("p", { className: "font-mono text-sm text-primary", children: [
              "USN: ",
              edu.usn
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("ul", { className: "flex flex-wrap gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Badge, { label: "In Progress (2nd Year)" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Badge, { label: `Graduating ${edu.expectedGraduation}` }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Badge, { label: "CSE \xB7 Engineering" })
          ] })
        ] })
      ] })
    }
  );
}
function Badge({ label }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("li", { className: "rounded-full border border-gray-200/10 bg-bgTertiary px-3 py-1.5 text-xs font-semibold text-textSecondary", children: label });
}

// src/components/Projects.jsx
var import_react7 = __toESM(require_react(), 1);

// src/components/Modal.jsx
var import_react5 = __toESM(require_react(), 1);
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var FOCUSABLE_SELECTOR = [
  "a[href]:not([disabled])",
  'button:not([disabled]):not([aria-hidden="true"])',
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])'
].join(",");
function Modal({
  isOpen,
  onClose,
  title,
  ariaLabel,
  children,
  className = ""
}) {
  const dialogId = (0, import_react5.useId)();
  const headingId = (0, import_react5.useId)();
  const modalRef = (0, import_react5.useRef)(null);
  const previouslyFocused = (0, import_react5.useRef)(null);
  (0, import_react5.useEffect)(() => {
    if (!isOpen) return;
    previouslyFocused.current = document.activeElement;
    const firstFocusable = modalRef.current?.querySelector(FOCUSABLE_SELECTOR);
    setTimeout(() => firstFocusable?.focus(), 0);
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
      if (event.key === "Tab") {
        const focusables = modalRef.current?.querySelectorAll(FOCUSABLE_SELECTOR);
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown, { capture: false });
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);
  (0, import_react5.useEffect)(() => {
    if (!isOpen && previouslyFocused.current) {
      previouslyFocused.current.focus?.();
      previouslyFocused.current = null;
    }
  }, [isOpen]);
  (0, import_react5.useEffect)(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  if (!isOpen) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "div",
    {
      className: "modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6",
      role: "presentation",
      onClick: onClose,
      "data-testid": "modal-backdrop",
      "aria-hidden": "true",
      children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
        "div",
        {
          ref: modalRef,
          id: dialogId,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": headingId,
          "aria-label": ariaLabel,
          className: `modal-content w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl border border-gray-200/10 bg-bgSecondary p-6 sm:p-8 ${className}`,
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: `mb-6 flex items-center justify-between ${!title && "justify-end"}`, children: [
              title && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h2", { id: headingId, className: "text-2xl font-bold text-textPrimary sm:text-3xl", children: title }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                "button",
                {
                  type: "button",
                  className: "rounded-lg p-2 text-textMuted transition-colors hover:bg-bgTertiary hover:text-textPrimary",
                  "aria-label": "Close dialog",
                  onClick: onClose,
                  children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(CloseIcon2, {})
                }
              )
            ] }),
            children
          ]
        }
      )
    }
  );
}
function CloseIcon2() {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ] });
}

// src/components/CaseStudyModal.jsx
var import_react6 = __toESM(require_react(), 1);

// src/components/FlowDiagram.jsx
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
function FlowDiagram({ steps }) {
  if (!steps || steps.length === 0) return null;
  const width = Math.min(Math.max(steps.length * 150, 260), 760);
  const height = 88;
  const n = steps.length;
  const gapX = (width - 72) / Math.max(n - 1, 1);
  const cxOf = (i) => 12 + i * gapX;
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    "div",
    {
      className: "overflow-x-auto rounded-xl border border-gray-200/[0.06] bg-bgTertiary px-4 py-8 sm:px-10 sm:py-10",
      "data-testid": "flow-diagram",
      children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
        "svg",
        {
          viewBox: `0 0 ${width} ${height}`,
          width,
          height,
          xmlns: "http://www.w3.org/2000/svg",
          role: "img",
          "aria-label": "Architecture flow diagram",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("defs", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("linearGradient", { id: "flowGrad", x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("stop", { offset: "0%", stopColor: "#00C9FF" }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("stop", { offset: "100%", stopColor: "#FFD600" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                "marker",
                {
                  id: "flowArrow",
                  markerWidth: "10",
                  markerHeight: "10",
                  refX: "8",
                  refY: "3",
                  orient: "auto",
                  markerUnits: "strokeWidth",
                  children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { d: "M0,0 L0,6 L9,3 z", fill: "currentColor", opacity: "0.8" })
                }
              )
            ] }),
            steps.map((step, i) => {
              const cx = cxOf(i);
              const cardW = 56;
              const x0 = cx - cardW / 2;
              return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("g", { "data-testid": `flow-step-${step.id}`, children: [
                i > 0 && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                  "line",
                  {
                    x1: cxOf(i - 1) + 30,
                    y1: height / 2 + 6,
                    x2: x0 - 6,
                    y2: height / 2 + 6,
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeDasharray: "5 4",
                    opacity: "0.5",
                    markerEnd: "url(#flowArrow)"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                  "rect",
                  {
                    x: x0,
                    y: height / 2 + 2,
                    width: cardW,
                    height: 40,
                    rx: 8,
                    fill: "transparent",
                    stroke: "url(#flowGrad)",
                    strokeWidth: "1.5",
                    opacity: "0.65"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                  "circle",
                  {
                    cx: x0 + 8,
                    cy: height / 2 + 2,
                    r: 6,
                    fill: "none",
                    stroke: "url(#flowGrad)",
                    strokeWidth: 0.8,
                    opacity: 0.4
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                  "text",
                  {
                    x: x0 + 8,
                    y: height / 2 + 2.3,
                    textAnchor: "middle",
                    fontSize: "7",
                    fontWeight: "bold",
                    fill: "url(#flowGrad)",
                    opacity: "0.9",
                    children: i + 1
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                  "text",
                  {
                    x: cx,
                    y: height / 2 - 6,
                    textAnchor: "middle",
                    fontSize: "11",
                    fontWeight: "600",
                    fill: "currentColor",
                    children: step.label
                  }
                ),
                step.detail && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                  "text",
                  {
                    x: cx,
                    y: height / 2 + 22,
                    textAnchor: "middle",
                    fontSize: 7,
                    fill: "currentColor",
                    opacity: 0.45,
                    children: step.detail
                  }
                )
              ] }, step.id);
            })
          ]
        }
      )
    }
  );
}

// src/components/CaseStudyModal.jsx
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
function CaseStudyModal({ project, onClose }) {
  const cs = project.caseStudy || {};
  const flowItems = (0, import_react6.useMemo)(() => {
    if (Array.isArray(cs.architectureFlow)) return cs.architectureFlow;
    if (typeof cs.architectureFlow === "string") {
      return cs.architectureFlow.split("\n").filter(Boolean).map((line) => ({ id: line, label: line }));
    }
    return [];
  }, [cs.architectureFlow]);
  const keyFeatures = (0, import_react6.useMemo)(
    () => Array.isArray(cs.keyFeatures) ? cs.keyFeatures : [],
    [cs.keyFeatures]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "space-y-8", "data-testid": `case-study-${project.id}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex flex-wrap items-center justify-between gap-4 border-b border-gray-200/[0.06] pb-5 sm:border-t", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h2", { className: "text-3xl font-extrabold text-textPrimary sm:text-4xl", children: project.title }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "mt-2 flex flex-wrap items-center gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary", children: project.category }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "font-mono text-xs text-textMuted", children: project.techStack.join(" \xB7 ") })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
        "a",
        {
          href: project.githubUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center gap-2 rounded-lg border border-gray-200/10 bg-bgPrimary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-bgTertiary",
          "aria-label": `Open GitHub repo for ${project.title}`,
          children: [
            "GitHub",
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("polyline", { points: "15 3 21 3 21 9" }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("line", { x1: "10", y1: "14", x2: "21", y2: "3" })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("section", { "aria-labelledby": "cs-problem", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h3", { id: "cs-problem", className: "mb-3 text-lg font-semibold text-textPrimary", children: "Problem" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "text-sm leading-relaxed text-textSecondary whitespace-pre-line", children: cs.problem })
    ] }),
    flowItems.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("section", { "aria-labelledby": "cs-flow", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h3", { id: "cs-flow", className: "mb-5 text-lg font-semibold text-textPrimary", children: "Architecture Flow" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(FlowDiagram, { steps: flowItems })
    ] }),
    keyFeatures.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("section", { "aria-labelledby": "cs-features", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h3", { id: "cs-features", className: "mb-4 text-lg font-semibold text-textPrimary", children: "Key Engineering Features" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("ul", { className: "space-y-3", children: keyFeatures.map((feat, i) => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("li", { className: "flex gap-3 text-sm text-textSecondary", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "mt-0.5 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-primary", "aria-hidden": "true" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "leading-relaxed", children: feat })
      ] }, i)) })
    ] }),
    cs.impact && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("section", { "aria-labelledby": "cs-impact", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h3", { id: "cs-impact", className: "mb-3 text-lg font-semibold text-textPrimary", children: "Impact" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "text-sm leading-relaxed text-textSecondary", children: cs.impact })
    ] })
  ] });
}

// src/components/Projects.jsx
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
function ProjectCard({ project }) {
  const [open, setOpen] = (0, import_react7.useState)(false);
  const [coverFailed, setCoverFailed] = (0, import_react7.useState)(false);
  const cs = project.caseStudy || {};
  const problem = (cs.problem || project.summary || "").replace(/\s+/g, " ").trim();
  const highlights = (cs.keyFeatures || []).slice(0, 3);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
    "article",
    {
      className: "group overflow-hidden rounded-2xl border border-gray-200/[0.06] bg-bgSecondary transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/8",
      "data-testid": `project-card-${project.id}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "relative h-44 overflow-hidden", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            "img",
            {
              src: project.image,
              alt: `${project.title} \u2014 cover`,
              className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]",
              loading: "lazy",
              decoding: "async",
              "data-testid": `cover-${project.id}`,
              onError: (e) => {
                setCoverFailed(true);
                e.target.src = "/images/project-fallback.png";
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "absolute right-3 top-3 rounded-md bg-bgPrimary/75 px-2 py-0.5 font-mono text-[10px] font-semibold text-primary backdrop-blur-sm", children: project.category })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex flex-1 flex-col gap-3.5 p-5 sm:p-6", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h3", { className: "text-lg font-bold text-textPrimary transition-colors group-hover:text-primary", children: project.title }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("p", { className: "text-sm leading-relaxed text-textSecondary", children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "font-semibold text-primary", children: "Problem solved:" }),
            " ",
            problem.slice(0, 150),
            problem.length > 150 ? "\u2026" : ""
          ] }),
          highlights.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("ul", { className: "space-y-1.5", children: highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("li", { className: "flex items-start gap-2 text-sm text-textSecondary", children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary", "aria-hidden": "true" }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { children: h })
          ] }, h)) }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "flex flex-wrap gap-1.5", "data-testid": `tech-${project.id}`, children: project.techStack.map((t) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "rounded-full border border-gray-200/10 bg-bgTertiary px-2.5 py-0.5 font-mono text-[10.5px] font-semibold text-textSecondary", children: t }, t)) }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "mt-auto flex flex-wrap items-center gap-3 border-t border-gray-200/[0.06] pt-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
              "button",
              {
                type: "button",
                className: "inline-flex items-center gap-2 text-xs font-semibold text-primary transition-colors hover:text-primary",
                onClick: () => setOpen(true),
                "data-testid": `view-case-study-${project.id}`,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(CaseStudyBadge, {}),
                  " View Case Study"
                ]
              }
            ),
            project.githubUrl ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
              "a",
              {
                href: project.githubUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-center gap-2 text-xs font-semibold text-textSecondary transition-colors hover:text-primary",
                "aria-label": `GitHub repo for ${project.title}`,
                children: "GitHub"
              }
            ) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "text-xs text-textMuted", children: "Live Demo/GitHub coming soon" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          Modal,
          {
            isOpen: open,
            onClose: () => setOpen(false),
            ariaLabel: `Case study: ${project.title}`,
            className: "max-w-3xl lg:max-w-4xl",
            children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(CaseStudyModal, { project })
          }
        )
      ]
    }
  );
}
function CaseStudyBadge() {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary", "aria-hidden": "true" });
}
function Projects() {
  const projects = portfolioData.projects;
  const [activeFilter, setActiveFilter] = (0, import_react7.useState)("All");
  const categories = Array.from(new Set(projects.map((p) => p.category)));
  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);
  const categoryIcon = (category) => {
    switch (category) {
      case "AI & Healthcare":
        return ShieldCheckIcon;
      case "Web & Security":
        return Wand2Icon;
      default:
        return CodeIcon;
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
    "section",
    {
      id: "projects",
      className: "page-container relative z-10 py-20 sm:py-32 lg:py-40",
      "data-testid": "projects-section",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "mx-auto max-w-3xl text-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h2", { className: "text-4xl font-extrabold tracking-tighter text-textPrimary sm:text-5xl lg:text-6xl", children: "Projects" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "mt-4 text-sm font-semibold text-primary sm:text-base", children: "Case studies of my software projects" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "reveal mt-10 flex flex-wrap justify-center gap-2 sm:gap-3", children: ["All", ...categories].map((f) => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
          "button",
          {
            type: "button",
            onClick: () => setActiveFilter(f),
            className: `rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${activeFilter === f ? "border-primary/60 bg-primary text-bgPrimary" : "border-gray-200/10 bg-bgTertiary text-textSecondary hover:text-primary"}`,
            "aria-pressed": activeFilter === f,
            "data-testid": `filter-${f.toLowerCase().replace(/[^a-z]/g, "-")}`,
            children: [
              f,
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "ml-2 opacity-60", children: f === "All" ? projects.length : projects.filter((p) => p.category === f).length })
            ]
          },
          f
        )) }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "reveal mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6", children: filtered.map((project) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(ProjectCard, { project }, project.id)) })
      ]
    }
  );
}

// src/components/Skills.jsx
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
function SkillChip({ name, icon }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("li", { className: "group flex items-center gap-3 rounded-lg border border-gray-200/10 bg-bgTertiary px-4 py-3 transition-all hover:border-primary/35 hover:bg-bgPrimary", children: [
    icon && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "flex h-6 w-6 items-center justify-center rounded-md bg-bgSecondary text-primary", children: icon }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "font-semibold text-textSecondary transition-colors group-hover:text-primary", children: name })
  ] });
}
function Skills() {
  const skills = portfolioData.skills;
  const iconByCategory = {
    Languages: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(CodeIconPlaceholder, {}),
    "Frameworks & Libraries": /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(BookIcon, {}),
    "AI / ML Concepts": /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(ShieldCheckIcon, {}),
    "Cloud, DevOps & Tools": /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(ChartIcon, {})
  };
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
    "section",
    {
      id: "skills",
      className: "page-container relative z-10 py-20 sm:py-32 lg:py-40",
      "data-testid": "skills-section",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "mx-auto max-w-3xl text-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { className: "text-4xl font-extrabold tracking-tighter text-textPrimary sm:text-5xl lg:text-6xl", children: "Skills" }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "mt-4 text-sm font-semibold text-primary sm:text-base", children: "Technologies I work with" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "reveal mt-12 grid gap-8 sm:grid-cols-2 lg:gap-12", children: skills.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "reveal", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "mb-5 flex items-center gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "flex h-9 w-9 items-center justify-center rounded-xl bg-bgTertiary text-primary", children: iconByCategory[cat.category] || /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(ChartIcon, {}) }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h3", { className: "text-lg font-bold text-textPrimary", children: cat.category })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("ul", { className: "flex flex-wrap gap-2.5", children: cat.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(SkillChip, { name: item.name }, item.name)) })
        ] }, cat.category)) })
      ]
    }
  );
}
function CodeIconPlaceholder() {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("polyline", { points: "16 18 22 12 16 6" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("polyline", { points: "8 6 2 12 8 18" })
  ] });
}

// src/components/Education.jsx
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
function Education() {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    "section",
    {
      id: "education",
      className: "bg-bgPrimary py-24 sm:py-32",
      "data-testid": "education-section",
      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "page-container", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "mx-auto max-w-2xl text-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h2", { className: "text-4xl font-extrabold text-textPrimary sm:text-5xl", children: "Education" }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "mt-4 text-sm font-semibold text-primary", children: "Academic Credentials" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "mt-14 flex flex-col gap-8 sm:flex-row", children: portfolioData.education.map((edu, idx) => /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
          "div",
          {
            className: "reveal rounded-xl border border-gray-200/[0.06] bg-bgSecondary p-8 sm:max-w-xl",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "mb-6 flex items-center gap-3", children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "rounded-lg bg-bgTertiary p-2.5 text-primary", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(BookIcon, {}) }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", { className: "text-xl font-semibold text-textPrimary", children: edu.degree }),
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-sm text-textSecondary", children: edu.school })
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "mb-4 flex flex-wrap gap-2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary", children: edu.status }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary", children: edu.duration }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("span", { className: "rounded-full bg-bgTertiary px-3 py-1 text-xs font-semibold text-textSecondary", children: [
                  "Expected Graduation: ",
                  edu.expectedGraduation
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "mb-4 flex items-center gap-2 text-xs text-textSecondary font-mono bg-bgPrimary p-3 rounded-lg", children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "text-primary font-semibold", children: "USN:" }),
                " ",
                edu.usn
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "leading-relaxed text-sm text-textSecondary", children: edu.description })
            ]
          },
          edu.school + idx
        )) })
      ] })
    }
  );
}

// src/components/Contact.jsx
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
function Contact() {
  const { contact } = portfolioData;
  const { toast } = useToast();
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    "section",
    {
      id: "contact",
      className: "bg-bgSecondary py-24 sm:py-32",
      "data-testid": "contact-section",
      children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "page-container", children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "reveal mx-auto max-w-2xl text-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h2", { className: "text-4xl font-extrabold text-textPrimary sm:text-5xl", "data-testid": "contact-title", children: "Let's Build Something" }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "mt-4 text-sm font-semibold text-primary", children: "Get in Touch" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "reveal mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-8", children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "group rounded-2xl border border-gray-200/[0.06] bg-bgTertiary p-6 transition-colors hover:border-primary/30", "data-testid": "contact-email-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-bgPrimary text-primary", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(MailIcon, {}) }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h3", { className: "mb-2 text-lg font-semibold text-textPrimary", children: "Email" }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "mb-4 text-sm text-textSecondary", children: "Drop me a message" }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              "a",
              {
                href: `mailto:${contact.email}`,
                className: "mb-3 block text-sm font-medium text-primary transition-colors hover:text-primary",
                "data-testid": "contact-email-link",
                children: contact.email
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              "button",
              {
                type: "button",
                onClick: async () => {
                  try {
                    await navigator.clipboard.writeText(contact.email);
                    toast.show("Email copied!", "success");
                  } catch {
                    toast.show("Could not copy \u2014 please try again", "error");
                  }
                },
                className: "rounded-md border border-gray-200/10 bg-bgPrimary px-3 py-1.5 text-xs font-medium text-textSecondary transition-colors hover:border-primary/30 hover:text-primary",
                "data-testid": "copy-email-contact",
                children: "Copy Email"
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "group rounded-2xl border border-gray-200/[0.06] bg-bgTertiary p-6 transition-colors hover:border-primary/30", "data-testid": "contact-github-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-bgPrimary text-textPrimary", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(GithubIcon, {}) }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h3", { className: "mb-2 text-lg font-semibold text-textPrimary", children: "GitHub" }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "mb-4 text-sm text-textSecondary", children: "Follow my work" }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              "a",
              {
                href: contact.github,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-sm font-medium text-primary transition-colors hover:text-primary",
                "data-testid": "contact-github-link",
                children: contact.githubUsername
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "group rounded-2xl border border-gray-200/[0.06] bg-bgTertiary p-6 transition-colors hover:border-primary/30", "data-testid": "contact-linkedin-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-bgPrimary text-primary", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(LinkedinIcon, {}) }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h3", { className: "mb-2 text-lg font-semibold text-textPrimary", children: "LinkedIn" }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "mb-4 text-sm text-textSecondary", children: "Connect professionally" }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              "button",
              {
                type: "button",
                disabled: true,
                title: "LinkedIn URL Coming Soon",
                "aria-label": "LinkedIn URL Coming Soon",
                className: "rounded-md border border-gray-200/10 bg-bgPrimary px-3 py-1.5 text-xs font-medium text-textSecondary opacity-60",
                "data-testid": "linkedin-placeholder-contact",
                children: "LinkedIn URL Coming Soon"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "mt-3 text-xs text-textMuted", children: "Reach out via email anytime \u2014 I typically respond within 48 hours." })
          ] })
        ] })
      ] })
    }
  );
}

// src/components/Certifications.jsx
var import_react8 = __toESM(require_react(), 1);
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
function Certifications() {
  const [bundleAvailable, setBundleAvailable] = (0, import_react8.useState)(false);
  (0, import_react8.useEffect)(() => {
    fetch("/certificates.pdf", { method: "HEAD" }).then((res) => res.ok && setBundleAvailable(true)).catch(() => {
    });
  }, []);
  const certs = portfolioData.certifications || [];
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
    "section",
    {
      id: "certifications",
      className: "page-container relative z-10 py-20 sm:py-32 lg:py-40",
      "data-testid": "certifications-section",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "mx-auto max-w-3xl text-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("p", { className: "reveal inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-wide text-primary", "data-testid": "certs-kicker", children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(AwardIcon, {}),
            " Certifications & Hackathons"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { className: "reveal mt-6 text-4xl font-extrabold tracking-tighter text-textPrimary sm:text-5xl lg:text-6xl", children: "Certifications & Hackathons" }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "reveal mt-4 text-sm font-semibold text-primary sm:text-base", children: "Verified credentials, online courses & competitive learning milestones" }),
          bundleAvailable && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
            "a",
            {
              href: "/certificates.pdf",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "reveal mt-6 inline-flex items-center gap-2 rounded-lg border-2 border-primary/80 bg-primary px-5 py-2.5 text-sm font-bold text-bgPrimary shadow-lg shadow-primary/25 hover:-translate-y-0.5",
              "data-testid": "view-all-certificates",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(DownloadIcon, {}),
                "View All Certificates (PDF)"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "reveal mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6", children: certs.map((cert, idx) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(CertCard, { cert, index: idx }, cert.id)) })
      ]
    }
  );
}
function CertCard({ cert, index }) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
    "article",
    {
      className: "group h-full rounded-2xl border border-gray-200/[0.06] bg-bgSecondary p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 sm:p-7",
      "data-testid": `cert-${cert.id}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "mb-4 flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "text-5xl font-extrabold text-primary/20 sm:text-6xl lg:text-7xl", children: String(index + 1).padStart(2, "0") }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "flex h-8 w-8 items-center justify-center rounded-lg bg-bgTertiary text-primary", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(AwardIcon, {}) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h3", { className: "mb-1 text-base font-bold text-textPrimary transition-colors group-hover:text-primary sm:text-lg", children: cert.title }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "mb-2 text-sm font-semibold text-primary", children: cert.issuer }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "mb-3 font-mono text-xs font-semibold text-textSecondary", children: cert.date }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "mb-5 text-sm leading-relaxed text-textSecondary sm:text-base", children: cert.focus }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "flex flex-wrap items-center gap-3 border-t border-gray-200/[0.06] pt-4", children: cert.verifyUrl ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          "a",
          {
            href: cert.verifyUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center gap-2 rounded-md bg-primary/10 px-3.5 py-2 text-xs font-bold text-primary transition-colors hover:bg-primary/20 hover:shadow-sm",
            "aria-label": `Verify ${cert.title} credential`,
            "data-testid": `verify-${cert.id}`,
            children: "Verify Credential \u2197"
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          "span",
          {
            className: "rounded-md bg-bgTertiary px-3.5 py-2 text-xs font-semibold text-textSecondary",
            title: "External verification not provided for this credential",
            "data-testid": `verify-unavailable-${cert.id}`,
            children: "Official Credential"
          }
        ) })
      ]
    }
  );
}

// src/components/Footer.jsx
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
function Footer() {
  const { theme } = useTheme();
  const { personal, contact } = portfolioData;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    "footer",
    {
      className: "border-t border-gray-200/[0.06] bg-bgPrimary py-10 sm:py-12",
      "data-testid": "footer",
      children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "page-container", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex flex-col items-center justify-between gap-6 sm:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
            "span",
            {
              className: "inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-primary to-secondary font-extrabold text-bgPrimary",
              "aria-hidden": "true",
              children: "MP"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "font-bold text-textPrimary", children: "Monika P V" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex flex-wrap items-center justify-center gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
            "button",
            {
              type: "button",
              className: "text-sm text-textSecondary transition-colors hover:text-primary",
              onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
              children: "Back to Top"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
            "a",
            {
              href: `mailto:${contact.email}`,
              className: "inline-flex items-center gap-1.5 text-sm text-textSecondary transition-colors hover:text-primary",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(MailIcon, {}),
                " Email"
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
            "a",
            {
              href: contact.github,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-1.5 text-sm text-textSecondary transition-colors hover:text-primary",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(GithubIcon, {}),
                " GitHub"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("p", { className: "text-sm text-textMuted", children: [
          "\xA9 ",
          currentYear,
          " Monika P V. Built with",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("span", { className: "inline-flex items-center gap-1 text-primary", children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(RocketIcon, {}),
            " React + Tailwind"
          ] })
        ] })
      ] }) })
    }
  );
}

// src/components/ResumeModal.jsx
var import_react9 = __toESM(require_react(), 1);
var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
function ResumeModal({ isOpen, onClose }) {
  const { personal, about, education, skills, projects, contact } = portfolioData;
  (0, import_react9.useEffect)(() => {
    if (isOpen) document.body.classList.add("printing");
    return () => document.body.classList.remove("printing");
  }, [isOpen]);
  const skillCategories = skills;
  const projectSummaries = projects.map((p) => ({
    title: p.title,
    category: p.category,
    summary: p.summary,
    techStack: p.techStack
  }));
  const handlePrint = () => {
    window.print();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
    Modal,
    {
      isOpen,
      onClose,
      ariaLabel: "Resume",
      className: "max-w-3xl lg:max-w-4xl",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "mb-8 flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h2", { className: "text-3xl font-extrabold text-textPrimary sm:text-4xl", children: personal.name }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "text-base font-semibold text-primary", children: personal.headline }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "mt-2 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-textSecondary", children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("span", { children: [
                "Email: ",
                contact.email
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("span", { children: [
                "USN: ",
                education[0].usn
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("span", { children: [
                "Status: ",
                education[0].status
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
            "button",
            {
              type: "button",
              onClick: handlePrint,
              className: "hidden rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/20 sm:inline-flex",
              "data-testid": "print-resume-button",
              children: "\u{1F5A8}\uFE0F Print"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "mb-8 text-sm italic text-textMuted", children: personal.tagline }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Section, { title: "About Me", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "text-sm leading-relaxed text-textSecondary", children: about }) }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Section, { title: "Education", children: education.map((edu) => /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "mb-6", children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h3", { className: "text-lg font-semibold text-textPrimary", children: edu.degree }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "text-sm text-primary", children: edu.school }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("p", { className: "mt-1 font-mono text-xs text-textSecondary", children: [
            "USN: ",
            edu.usn,
            " \xB7 ",
            edu.status,
            " \xB7 Graduating: ",
            edu.expectedGraduation
          ] })
        ] }, edu.school)) }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Section, { title: "Skills", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "space-y-5", children: skillCategories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h4", { className: "mb-2 text-sm font-semibold uppercase tracking-wide text-primary", children: cat.category }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "flex flex-wrap gap-1.5", children: cat.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
            "span",
            {
              className: "rounded-full bg-bgTertiary px-3 py-1 text-xs font-medium text-textSecondary",
              children: [
                item.name,
                " (",
                item.level,
                "%)"
              ]
            },
            item.name
          )) })
        ] }, cat.category)) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Section, { title: "Projects", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("ul", { className: "space-y-3", children: projectSummaries.map((p) => /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("li", { className: "text-sm leading-relaxed text-textSecondary", children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "font-semibold text-textPrimary", children: p.title }),
          " \u2014 ",
          p.summary,
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("span", { className: "text-textMuted", children: [
            "[",
            p.techStack.join(", "),
            "]"
          ] })
        ] }, p.title)) }) })
      ]
    }
  );
}
function Section({ title, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("section", { className: "mb-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h2", { className: "mb-4 border-b border-gray-200/[0.08] pb-3 text-base font-extrabold uppercase tracking-wide text-primary sm:text-lg", children: title }),
    children
  ] });
}

// src/components/CommandPalette.jsx
var import_react10 = __toESM(require_react(), 1);
var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
function CommandPalette({ open, onClose, onPrint }) {
  const { toast } = useToast();
  const { theme, toggleTheme } = useTheme();
  const { contact, education } = portfolioData;
  const usn = education?.[0]?.usn || null;
  const [search, setSearch] = (0, import_react10.useState)("");
  const [activeIdx, setActiveIdx] = (0, import_react10.useState)(0);
  (0, import_react10.useEffect)(() => {
    if (open) {
      setSearch("");
      setActiveIdx(0);
    }
  }, [open]);
  const sectionLabels = {
    about: "About",
    projects: "Projects",
    skills: "Skills",
    education: "Education",
    contact: "Contact"
  };
  const commands = (0, import_react10.useMemo)(() => {
    const cmds = [];
    SECTION_IDS.forEach((id) => {
      cmds.push({
        id: `nav-${id}`,
        group: "Navigate",
        label: `Go to ${sectionLabels[id] || id}`,
        action: () => {
          scrollToSection(id);
          toast.show(`Navigated to ${sectionLabels[id] || id}`, "success");
          onClose();
        }
      });
    });
    cmds.push({
      id: "top",
      group: "Navigate",
      label: "Go to Hero",
      action: () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        toast.show("Returned to hero", "success");
        onClose();
      }
    });
    cmds.push({
      id: "copy-email",
      group: "Actions",
      label: "Copy Email Address",
      action: async () => {
        try {
          await navigator.clipboard.writeText(contact.email);
          toast.show(`Copied ${contact.email}`, "success");
        } catch {
          toast.show("Clipboard not available", "error");
        }
        onClose();
      }
    });
    cmds.push({
      id: "copy-github",
      group: "Actions",
      label: "Copy GitHub URL",
      action: async () => {
        try {
          await navigator.clipboard.writeText(contact.github);
          toast.show(`Copied ${contact.github}`, "success");
        } catch {
          toast.show("Clipboard not available", "error");
        }
        onClose();
      }
    });
    if (usn) {
      cmds.push({
        id: "copy-usn",
        group: "Actions",
        label: `Copy USN (${usn})`,
        action: async () => {
          try {
            await navigator.clipboard.writeText(usn);
            toast.show(`Copied ${usn}`, "success");
          } catch {
            toast.show("Clipboard not available", "error");
          }
          onClose();
        }
      });
    }
    cmds.push({
      id: "toggle-theme",
      group: "Actions",
      label: theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode",
      action: () => {
        toggleTheme();
        onClose();
      }
    });
    cmds.push({
      id: "print-resume",
      group: "Actions",
      label: "Print Resume",
      action: () => {
        if (onPrint) onPrint();
        onClose();
      }
    });
    return cmds;
  }, [theme, contact, toast, onClose, onPrint]);
  const filtered = (0, import_react10.useMemo)(() => {
    const q = search.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter(
      (c) => c.label.toLowerCase().includes(q) || c.group.toLowerCase().includes(q)
    );
  }, [commands, search]);
  (0, import_react10.useEffect)(() => {
    setActiveIdx((prev) => Math.min(prev, Math.max(0, filtered.length - 1)));
  }, [filtered]);
  (0, import_react10.useEffect)(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIdx((prev) => {
          const len = filtered.length;
          if (len === 0) return 0;
          const delta = e.key === "ArrowDown" ? 1 : -1;
          return (prev + delta + len) % len;
        });
      } else if (e.key === "Enter") {
        e.preventDefault();
        const cmd = filtered[activeIdx];
        if (cmd) cmd.action();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, activeIdx, filtered, onClose]);
  if (!open) return null;
  const bgClass = theme === "dark" ? "bg-bgTertiary/95 backdrop-blur-md border-primary/10" : "bg-white/95 backdrop-blur-md border-primary/10";
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
    "div",
    {
      className: "fixed inset-0 z-[100] flex items-start justify-center pt-16",
      role: "presentation",
      "data-testid": "command-palette-backdrop",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
          "div",
          {
            className: "absolute inset-0 bg-bgPrimary/50 backdrop-blur-sm",
            onClick: onClose,
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
          "div",
          {
            className: `relative mx-auto w-full max-w-xl overflow-hidden rounded-2xl border shadow-2xl ${bgClass}`,
            role: "dialog",
            "aria-modal": "true",
            "aria-label": "Command palette",
            "data-testid": "command-palette",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "flex items-center gap-3 border-b border-gray-200/10 px-5 py-4", children: [
                /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("circle", { cx: "11", cy: "11", r: "8" }),
                  /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
                  /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("line", { x1: "11", y1: "8", x2: "11", y2: "14" }),
                  /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("line", { x1: "8", y1: "11", x2: "14", y2: "11" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
                  "input",
                  {
                    ref: (el) => el?.focus(),
                    type: "text",
                    value: search,
                    onChange: (e) => setSearch(e.target.value),
                    placeholder: "Type a command or search...",
                    className: "flex-1 bg-transparent text-base text-textPrimary placeholder:text-textMuted focus:outline-none",
                    role: "combobox",
                    "aria-expanded": "true",
                    "aria-controls": "command-palette-list",
                    "aria-activedescendant": filtered[activeIdx] ? `cmd-${filtered[activeIdx].id}` : void 0,
                    "data-testid": "command-palette-input"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("kbd", { className: "rounded bg-bgPrimary px-2 py-1 font-mono text-xs text-textMuted", children: "Esc" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("ul", { id: "command-palette-list", role: "listbox", "aria-label": "Commands", className: "max-h-80 overflow-y-auto p-3", "data-testid": "command-palette-list", children: [
                filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("li", { className: "px-5 py-6 text-center text-sm text-textMuted", children: "No results found" }),
                filtered.map((cmd, i) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("li", { "data-testid": `command-item-${cmd.id}`, children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
                  "button",
                  {
                    type: "button",
                    role: "option",
                    "aria-selected": i === activeIdx,
                    id: `cmd-${cmd.id}`,
                    onClick: cmd.action,
                    onMouseEnter: () => setActiveIdx(i),
                    className: `flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition-colors ${i === activeIdx ? "bg-primary/10 text-primary" : "text-textPrimary hover:bg-bgTertiary"}`,
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "text-sm font-medium", children: cmd.label }),
                      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "rounded-md bg-bgTertiary px-2 py-1 font-mono text-xs text-textMuted", children: cmd.group })
                    ]
                  }
                ) }, cmd.id))
              ] })
            ]
          }
        )
      ]
    }
  );
}

// src/hooks/useScrollSpy.js
var import_react11 = __toESM(require_react(), 1);
function useScrollSpy(sectionIds, navOffset = 70) {
  const [activeId, setActiveId] = (0, import_react11.useState)("");
  (0, import_react11.useEffect)(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      let active = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop - navOffset <= scrollY + 5) active = id;
      }
      setActiveId((prev) => prev === active ? prev : active);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds, navOffset]);
  return activeId;
}

// src/App.jsx
var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);
function AppContent() {
  const [activeId, setActiveId] = useScrollSpy(SECTION_IDS, 70);
  const [resumeOpen, setResumeOpen] = (0, import_react12.useState)(false);
  const [cmdPaletteOpen, setCmdPaletteOpen] = (0, import_react12.useState)(false);
  const { toast } = useToast();
  (0, import_react12.useEffect)(() => {
    const onKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCmdPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);
  (0, import_react12.useEffect)(() => {
    window.dispatchEvent(new Event("scroll"));
  }, []);
  (0, import_react12.useEffect)(() => {
    const els = Array.from(document.querySelectorAll(".reveal"));
    if (els.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.add("visible")),
      { threshold: 0.08, rootMargin: "0px 0px -10px 0px" }
    );
    els.forEach((el) => {
      el.classList.add("visible");
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  const openContact = () => smoothScrollTo(document.getElementById("contact"), -14);
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("main", { id: "main-content", className: "min-h-screen bg-bgPrimary", children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      Navbar,
      {
        activeId,
        onOpenCommandPalette: () => setCmdPaletteOpen(true),
        onCopyEmail: () => {
          navigator.clipboard.writeText("monikavnaidu@gmail.com");
          toast.show("Email copied to clipboard!", "success");
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Hero, { onOpenResumeModal: () => setResumeOpen(true), onOpenContact: openContact }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(About, {}),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Projects, {}),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Skills, {}),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Education, {}),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Certifications, {}),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Contact, {}),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Footer, {}),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(ResumeModal, { isOpen: resumeOpen, onClose: () => setResumeOpen(false) }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      CommandPalette,
      {
        open: cmdPaletteOpen,
        onClose: () => setCmdPaletteOpen(false),
        onPrint: () => {
          setResumeOpen(true);
        }
      }
    )
  ] });
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(ToastProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(AppContent, {}) }) });
}

// tools/ssr-entry.jsx
var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);
function renderApp() {
  return (0, import_server.renderToStaticMarkup)(/* @__PURE__ */ (0, import_jsx_runtime19.jsx)(App, {}));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  renderApp
});
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-server-legacy.node.production.min.js:
  (**
   * @license React
   * react-dom-server-legacy.node.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-server.node.production.min.js:
  (**
   * @license React
   * react-dom-server.node.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
