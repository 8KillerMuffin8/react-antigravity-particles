import lf, { useRef as js, useEffect as Cf, useMemo as lh } from "react";
import df from "react-dom";
var sf = { exports: {} }, $s = {};
var mf;
function ih() {
  if (mf) return $s;
  mf = 1;
  var A = Symbol.for("react.transitional.element"), P = Symbol.for("react.fragment");
  function E(U, j, q) {
    var de = null;
    if (q !== void 0 && (de = "" + q), j.key !== void 0 && (de = "" + j.key), "key" in j) {
      q = {};
      for (var Te in j)
        Te !== "key" && (q[Te] = j[Te]);
    } else q = j;
    return j = q.ref, {
      $$typeof: A,
      type: U,
      key: de,
      ref: j !== void 0 ? j : null,
      props: q
    };
  }
  return $s.Fragment = P, $s.jsx = E, $s.jsxs = E, $s;
}
var ef = {};
var Df;
function ah() {
  return Df || (Df = 1, process.env.NODE_ENV !== "production" && (function() {
    function A(M) {
      if (M == null) return null;
      if (typeof M == "function")
        return M.$$typeof === ya ? null : M.displayName || M.name || null;
      if (typeof M == "string") return M;
      switch (M) {
        case Qn:
          return "Fragment";
        case zr:
          return "Profiler";
        case Vl:
          return "StrictMode";
        case Ce:
          return "Suspense";
        case _n:
          return "SuspenseList";
        case at:
          return "Activity";
      }
      if (typeof M == "object")
        switch (typeof M.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), M.$$typeof) {
          case Z:
            return "Portal";
          case Sr:
            return M.displayName || "Context";
          case $r:
            return (M._context.displayName || "Context") + ".Consumer";
          case ut:
            var be = M.render;
            return M = M.displayName, M || (M = be.displayName || be.name || "", M = M !== "" ? "ForwardRef(" + M + ")" : "ForwardRef"), M;
          case mn:
            return be = M.displayName || null, be !== null ? be : A(M.type) || "Memo";
          case tn:
            be = M._payload, M = M._init;
            try {
              return A(M(be));
            } catch {
            }
        }
      return null;
    }
    function P(M) {
      return "" + M;
    }
    function E(M) {
      try {
        P(M);
        var be = !1;
      } catch {
        be = !0;
      }
      if (be) {
        be = console;
        var Ge = be.error, we = typeof Symbol == "function" && Symbol.toStringTag && M[Symbol.toStringTag] || M.constructor.name || "Object";
        return Ge.call(
          be,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          we
        ), P(M);
      }
    }
    function U(M) {
      if (M === Qn) return "<>";
      if (typeof M == "object" && M !== null && M.$$typeof === tn)
        return "<...>";
      try {
        var be = A(M);
        return be ? "<" + be + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function j() {
      var M = Jl.A;
      return M === null ? null : M.getOwner();
    }
    function q() {
      return Error("react-stack-top-frame");
    }
    function de(M) {
      if (Ot.call(M, "key")) {
        var be = Object.getOwnPropertyDescriptor(M, "key").get;
        if (be && be.isReactWarning) return !1;
      }
      return M.key !== void 0;
    }
    function Te(M, be) {
      function Ge() {
        K || (K = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          be
        ));
      }
      Ge.isReactWarning = !0, Object.defineProperty(M, "key", {
        get: Ge,
        configurable: !0
      });
    }
    function Ae() {
      var M = A(this.type);
      return ce[M] || (ce[M] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), M = this.props.ref, M !== void 0 ? M : null;
    }
    function _e(M, be, Ge, we, Ie, Bn) {
      var Xe = Ge.ref;
      return M = {
        $$typeof: re,
        type: M,
        key: be,
        props: Ge,
        _owner: we
      }, (Xe !== void 0 ? Xe : null) !== null ? Object.defineProperty(M, "ref", {
        enumerable: !1,
        get: Ae
      }) : Object.defineProperty(M, "ref", { enumerable: !1, value: null }), M._store = {}, Object.defineProperty(M._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(M, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(M, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Ie
      }), Object.defineProperty(M, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Bn
      }), Object.freeze && (Object.freeze(M.props), Object.freeze(M)), M;
    }
    function $e(M, be, Ge, we, Ie, Bn) {
      var Xe = be.children;
      if (Xe !== void 0)
        if (we)
          if (Kn(Xe)) {
            for (we = 0; we < Xe.length; we++)
              N(Xe[we]);
            Object.freeze && Object.freeze(Xe);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else N(Xe);
      if (Ot.call(be, "key")) {
        Xe = A(M);
        var Al = Object.keys(be).filter(function(Nt) {
          return Nt !== "key";
        });
        we = 0 < Al.length ? "{key: someKey, " + Al.join(": ..., ") + ": ...}" : "{key: someKey}", oe[Xe + we] || (Al = 0 < Al.length ? "{" + Al.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          we,
          Xe,
          Al,
          Xe
        ), oe[Xe + we] = !0);
      }
      if (Xe = null, Ge !== void 0 && (E(Ge), Xe = "" + Ge), de(be) && (E(be.key), Xe = "" + be.key), "key" in be) {
        Ge = {};
        for (var Br in be)
          Br !== "key" && (Ge[Br] = be[Br]);
      } else Ge = be;
      return Xe && Te(
        Ge,
        typeof M == "function" ? M.displayName || M.name || "Unknown" : M
      ), _e(
        M,
        Xe,
        Ge,
        j(),
        Ie,
        Bn
      );
    }
    function N(M) {
      Re(M) ? M._store && (M._store.validated = 1) : typeof M == "object" && M !== null && M.$$typeof === tn && (M._payload.status === "fulfilled" ? Re(M._payload.value) && M._payload.value._store && (M._payload.value._store.validated = 1) : M._store && (M._store.validated = 1));
    }
    function Re(M) {
      return typeof M == "object" && M !== null && M.$$typeof === re;
    }
    var ot = lf, re = Symbol.for("react.transitional.element"), Z = Symbol.for("react.portal"), Qn = Symbol.for("react.fragment"), Vl = Symbol.for("react.strict_mode"), zr = Symbol.for("react.profiler"), $r = Symbol.for("react.consumer"), Sr = Symbol.for("react.context"), ut = Symbol.for("react.forward_ref"), Ce = Symbol.for("react.suspense"), _n = Symbol.for("react.suspense_list"), mn = Symbol.for("react.memo"), tn = Symbol.for("react.lazy"), at = Symbol.for("react.activity"), ya = Symbol.for("react.client.reference"), Jl = ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ot = Object.prototype.hasOwnProperty, Kn = Array.isArray, xe = console.createTask ? console.createTask : function() {
      return null;
    };
    ot = {
      react_stack_bottom_frame: function(M) {
        return M();
      }
    };
    var K, ce = {}, el = ot.react_stack_bottom_frame.bind(
      ot,
      q
    )(), Vt = xe(U(q)), oe = {};
    ef.Fragment = Qn, ef.jsx = function(M, be, Ge) {
      var we = 1e4 > Jl.recentlyCreatedOwnerStacks++;
      return $e(
        M,
        be,
        Ge,
        !1,
        we ? Error("react-stack-top-frame") : el,
        we ? xe(U(M)) : Vt
      );
    }, ef.jsxs = function(M, be, Ge) {
      var we = 1e4 > Jl.recentlyCreatedOwnerStacks++;
      return $e(
        M,
        be,
        Ge,
        !0,
        we ? Error("react-stack-top-frame") : el,
        we ? xe(U(M)) : Vt
      );
    };
  })()), ef;
}
var Lf;
function oh() {
  return Lf || (Lf = 1, process.env.NODE_ENV === "production" ? sf.exports = ih() : sf.exports = ah()), sf.exports;
}
var uh = oh(), Bs = {}, nf = {};
var Hf;
function ch() {
  if (Hf) return nf;
  Hf = 1;
  var A = lf, P = df;
  function E(i) {
    var o = "https://react.dev/errors/" + i;
    if (1 < arguments.length) {
      o += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var f = 2; f < arguments.length; f++)
        o += "&args[]=" + encodeURIComponent(arguments[f]);
    }
    return "Minified React error #" + i + "; visit " + o + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var U = Symbol.for("react.transitional.element"), j = Symbol.for("react.portal"), q = Symbol.for("react.fragment"), de = Symbol.for("react.strict_mode"), Te = Symbol.for("react.profiler"), Ae = Symbol.for("react.consumer"), _e = Symbol.for("react.context"), $e = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), Re = Symbol.for("react.suspense_list"), ot = Symbol.for("react.memo"), re = Symbol.for("react.lazy"), Z = Symbol.for("react.scope"), Qn = Symbol.for("react.activity"), Vl = Symbol.for("react.legacy_hidden"), zr = Symbol.for("react.memo_cache_sentinel"), $r = Symbol.for("react.view_transition"), Sr = Symbol.iterator;
  function ut(i) {
    return i === null || typeof i != "object" ? null : (i = Sr && i[Sr] || i["@@iterator"], typeof i == "function" ? i : null);
  }
  var Ce = Array.isArray;
  function _n(i, o) {
    var f = i.length & 3, g = i.length - f, T = o;
    for (o = 0; o < g; ) {
      var k = i.charCodeAt(o) & 255 | (i.charCodeAt(++o) & 255) << 8 | (i.charCodeAt(++o) & 255) << 16 | (i.charCodeAt(++o) & 255) << 24;
      ++o, k = 3432918353 * (k & 65535) + ((3432918353 * (k >>> 16) & 65535) << 16) & 4294967295, k = k << 15 | k >>> 17, k = 461845907 * (k & 65535) + ((461845907 * (k >>> 16) & 65535) << 16) & 4294967295, T ^= k, T = T << 13 | T >>> 19, T = 5 * (T & 65535) + ((5 * (T >>> 16) & 65535) << 16) & 4294967295, T = (T & 65535) + 27492 + (((T >>> 16) + 58964 & 65535) << 16);
    }
    switch (k = 0, f) {
      case 3:
        k ^= (i.charCodeAt(o + 2) & 255) << 16;
      case 2:
        k ^= (i.charCodeAt(o + 1) & 255) << 8;
      case 1:
        k ^= i.charCodeAt(o) & 255, k = 3432918353 * (k & 65535) + ((3432918353 * (k >>> 16) & 65535) << 16) & 4294967295, k = k << 15 | k >>> 17, T ^= 461845907 * (k & 65535) + ((461845907 * (k >>> 16) & 65535) << 16) & 4294967295;
    }
    return T ^= i.length, T ^= T >>> 16, T = 2246822507 * (T & 65535) + ((2246822507 * (T >>> 16) & 65535) << 16) & 4294967295, T ^= T >>> 13, T = 3266489909 * (T & 65535) + ((3266489909 * (T >>> 16) & 65535) << 16) & 4294967295, (T ^ T >>> 16) >>> 0;
  }
  var mn = Object.assign, tn = Object.prototype.hasOwnProperty, at = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), ya = {}, Jl = {};
  function Ot(i) {
    return tn.call(Jl, i) ? !0 : tn.call(ya, i) ? !1 : at.test(i) ? Jl[i] = !0 : (ya[i] = !0, !1);
  }
  var Kn = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  ), xe = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), K = /["'&<>]/;
  function ce(i) {
    if (typeof i == "boolean" || typeof i == "number" || typeof i == "bigint")
      return "" + i;
    i = "" + i;
    var o = K.exec(i);
    if (o) {
      var f = "", g, T = 0;
      for (g = o.index; g < i.length; g++) {
        switch (i.charCodeAt(g)) {
          case 34:
            o = "&quot;";
            break;
          case 38:
            o = "&amp;";
            break;
          case 39:
            o = "&#x27;";
            break;
          case 60:
            o = "&lt;";
            break;
          case 62:
            o = "&gt;";
            break;
          default:
            continue;
        }
        T !== g && (f += i.slice(T, g)), T = g + 1, f += o;
      }
      i = T !== g ? f + i.slice(T, g) : f;
    }
    return i;
  }
  var el = /([A-Z])/g, Vt = /^ms-/, oe = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function M(i) {
    return oe.test("" + i) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : i;
  }
  var be = A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ge = P.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, we = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Ie = Ge.d;
  Ge.d = {
    f: Ie.f,
    r: Ie.r,
    D: Ol,
    C: Qt,
    L: ka,
    m: Iu,
    X: $c,
    S: or,
    M: Ec
  };
  var Bn = [], Xe = null, Al = /(<\/|<)(s)(cript)/gi;
  function Br(i, o, f, g) {
    return "" + o + (f === "s" ? "\\u0073" : "\\u0053") + g;
  }
  function Nt(i, o, f, g, T) {
    return {
      idPrefix: i === void 0 ? "" : i,
      nextFormID: 0,
      streamingFormat: 0,
      bootstrapScriptContent: f,
      bootstrapScripts: g,
      bootstrapModules: T,
      instructions: 0,
      hasBody: !1,
      hasHtml: !1,
      unknownResources: {},
      dnsResources: {},
      connectResources: { default: {}, anonymous: {}, credentials: {} },
      imageResources: {},
      styleResources: {},
      scriptResources: {},
      moduleUnknownResources: {},
      moduleScriptResources: {}
    };
  }
  function vt(i, o, f, g) {
    return {
      insertionMode: i,
      selectedValue: o,
      tagScope: f,
      viewTransition: g
    };
  }
  function pu(i, o, f) {
    var g = i.tagScope & -25;
    switch (o) {
      case "noscript":
        return vt(2, null, g | 1, null);
      case "select":
        return vt(
          2,
          f.value != null ? f.value : f.defaultValue,
          g,
          null
        );
      case "svg":
        return vt(4, null, g, null);
      case "picture":
        return vt(2, null, g | 2, null);
      case "math":
        return vt(5, null, g, null);
      case "foreignObject":
        return vt(2, null, g, null);
      case "table":
        return vt(6, null, g, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return vt(7, null, g, null);
      case "colgroup":
        return vt(9, null, g, null);
      case "tr":
        return vt(8, null, g, null);
      case "head":
        if (2 > i.insertionMode)
          return vt(3, null, g, null);
        break;
      case "html":
        if (i.insertionMode === 0)
          return vt(1, null, g, null);
    }
    return 6 <= i.insertionMode || 2 > i.insertionMode ? vt(2, null, g, null) : i.tagScope !== g ? vt(
      i.insertionMode,
      i.selectedValue,
      g,
      null
    ) : i;
  }
  function ze(i) {
    return i === null ? null : {
      update: i.update,
      enter: "none",
      exit: "none",
      share: i.update,
      name: i.autoName,
      autoName: i.autoName,
      nameIdx: 0
    };
  }
  function bt(i, o) {
    return o.tagScope & 32 && (i.instructions |= 128), vt(
      o.insertionMode,
      o.selectedValue,
      o.tagScope | 12,
      ze(o.viewTransition)
    );
  }
  function wn(i, o) {
    i = ze(o.viewTransition);
    var f = o.tagScope | 16;
    return i !== null && i.share !== "none" && (f |= 64), vt(
      o.insertionMode,
      o.selectedValue,
      f,
      i
    );
  }
  var _t = /* @__PURE__ */ new Map();
  function wa(i, o) {
    if (typeof o != "object") throw Error(E(62));
    var f = !0, g;
    for (g in o)
      if (tn.call(o, g)) {
        var T = o[g];
        if (T != null && typeof T != "boolean" && T !== "") {
          if (g.indexOf("--") === 0) {
            var k = ce(g);
            T = ce(("" + T).trim());
          } else
            k = _t.get(g), k === void 0 && (k = ce(
              g.replace(el, "-$1").toLowerCase().replace(Vt, "-ms-")
            ), _t.set(g, k)), T = typeof T == "number" ? T === 0 || Kn.has(g) ? "" + T : T + "px" : ce(("" + T).trim());
          f ? (f = !1, i.push(' style="', k, ":", T)) : i.push(";", k, ":", T);
        }
      }
    f || i.push('"');
  }
  function Ui(i, o, f) {
    f && typeof f != "function" && typeof f != "symbol" && i.push(" ", o, '=""');
  }
  function Wt(i, o, f) {
    typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && i.push(" ", o, '="', ce(f), '"');
  }
  var Pr = ce(
    "javascript:throw new Error('React form unexpectedly submitted.')"
  );
  function Ml(i, o) {
    this.push('<input type="hidden"'), Ft(i), Wt(this, "name", o), Wt(this, "value", i), this.push("/>");
  }
  function Ft(i) {
    if (typeof i != "string") throw Error(E(480));
  }
  function Il(i, o) {
    if (typeof o.$$FORM_ACTION == "function") {
      var f = i.nextFormID++;
      i = i.idPrefix + f;
      try {
        var g = o.$$FORM_ACTION(i);
        if (g) {
          var T = g.data;
          T?.forEach(Ft);
        }
        return g;
      } catch (k) {
        if (typeof k == "object" && k !== null && typeof k.then == "function")
          throw k;
      }
    }
    return null;
  }
  function Au(i, o, f, g, T, k, p, X) {
    var m = null;
    if (typeof g == "function") {
      var Y = Il(o, g);
      Y !== null ? (X = Y.name, g = Y.action || "", T = Y.encType, k = Y.method, p = Y.target, m = Y.data) : (i.push(" ", "formAction", '="', Pr, '"'), p = k = T = g = X = null, Qc(o, f));
    }
    return X != null && on(i, "name", X), g != null && on(i, "formAction", g), T != null && on(i, "formEncType", T), k != null && on(i, "formMethod", k), p != null && on(i, "formTarget", p), m;
  }
  function on(i, o, f) {
    switch (o) {
      case "className":
        Wt(i, "class", f);
        break;
      case "tabIndex":
        Wt(i, "tabindex", f);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Wt(i, o, f);
        break;
      case "style":
        wa(i, f);
        break;
      case "src":
      case "href":
        if (f === "") break;
      case "action":
      case "formAction":
        if (f == null || typeof f == "function" || typeof f == "symbol" || typeof f == "boolean")
          break;
        f = M("" + f), i.push(" ", o, '="', ce(f), '"');
        break;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "ref":
        break;
      case "autoFocus":
      case "multiple":
      case "muted":
        Ui(i, o.toLowerCase(), f);
        break;
      case "xlinkHref":
        if (typeof f == "function" || typeof f == "symbol" || typeof f == "boolean")
          break;
        f = M("" + f), i.push(" ", "xlink:href", '="', ce(f), '"');
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        typeof f != "function" && typeof f != "symbol" && i.push(" ", o, '="', ce(f), '"');
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        f && typeof f != "function" && typeof f != "symbol" && i.push(" ", o, '=""');
        break;
      case "capture":
      case "download":
        f === !0 ? i.push(" ", o, '=""') : f !== !1 && typeof f != "function" && typeof f != "symbol" && i.push(" ", o, '="', ce(f), '"');
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        typeof f != "function" && typeof f != "symbol" && !isNaN(f) && 1 <= f && i.push(" ", o, '="', ce(f), '"');
        break;
      case "rowSpan":
      case "start":
        typeof f == "function" || typeof f == "symbol" || isNaN(f) || i.push(" ", o, '="', ce(f), '"');
        break;
      case "xlinkActuate":
        Wt(i, "xlink:actuate", f);
        break;
      case "xlinkArcrole":
        Wt(i, "xlink:arcrole", f);
        break;
      case "xlinkRole":
        Wt(i, "xlink:role", f);
        break;
      case "xlinkShow":
        Wt(i, "xlink:show", f);
        break;
      case "xlinkTitle":
        Wt(i, "xlink:title", f);
        break;
      case "xlinkType":
        Wt(i, "xlink:type", f);
        break;
      case "xmlBase":
        Wt(i, "xml:base", f);
        break;
      case "xmlLang":
        Wt(i, "xml:lang", f);
        break;
      case "xmlSpace":
        Wt(i, "xml:space", f);
        break;
      default:
        if ((!(2 < o.length) || o[0] !== "o" && o[0] !== "O" || o[1] !== "n" && o[1] !== "N") && (o = xe.get(o) || o, Ot(o))) {
          switch (typeof f) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              var g = o.toLowerCase().slice(0, 5);
              if (g !== "data-" && g !== "aria-") return;
          }
          i.push(" ", o, '="', ce(f), '"');
        }
    }
  }
  function ar(i, o, f) {
    if (o != null) {
      if (f != null) throw Error(E(60));
      if (typeof o != "object" || !("__html" in o))
        throw Error(E(61));
      o = o.__html, o != null && i.push("" + o);
    }
  }
  function In(i) {
    var o = "";
    return A.Children.forEach(i, function(f) {
      f != null && (o += f);
    }), o;
  }
  function Qc(i, o) {
    if ((i.instructions & 16) === 0) {
      i.instructions |= 16;
      var f = o.preamble, g = o.bootstrapChunks;
      (f.htmlChunks || f.headChunks) && g.length === 0 ? (g.push(o.startInlineScript), Vo(g, i), g.push(
        ">",
        `addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});`,
        "<\/script>"
      )) : g.unshift(
        o.startInlineScript,
        ">",
        `addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});`,
        "<\/script>"
      );
    }
  }
  function ht(i, o) {
    i.push(qn("link"));
    for (var f in o)
      if (tn.call(o, f)) {
        var g = o[f];
        if (g != null)
          switch (f) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(E(399, "link"));
            default:
              on(i, f, g);
          }
      }
    return i.push("/>"), null;
  }
  var yc = /(<\/|<)(s)(tyle)/gi;
  function wc(i, o, f, g) {
    return "" + o + (f === "s" ? "\\73 " : "\\53 ") + g;
  }
  function wi(i, o, f) {
    i.push(qn(f));
    for (var g in o)
      if (tn.call(o, g)) {
        var T = o[g];
        if (T != null)
          switch (g) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(E(399, f));
            default:
              on(i, g, T);
          }
      }
    return i.push("/>"), null;
  }
  function Tc(i, o) {
    i.push(qn("title"));
    var f = null, g = null, T;
    for (T in o)
      if (tn.call(o, T)) {
        var k = o[T];
        if (k != null)
          switch (T) {
            case "children":
              f = k;
              break;
            case "dangerouslySetInnerHTML":
              g = k;
              break;
            default:
              on(i, T, k);
          }
      }
    return i.push(">"), o = Array.isArray(f) ? 2 > f.length ? f[0] : null : f, typeof o != "function" && typeof o != "symbol" && o !== null && o !== void 0 && i.push(ce("" + o)), ar(i, g, f), i.push(Ea("title")), null;
  }
  function Uo(i, o) {
    i.push(qn("script"));
    var f = null, g = null, T;
    for (T in o)
      if (tn.call(o, T)) {
        var k = o[T];
        if (k != null)
          switch (T) {
            case "children":
              f = k;
              break;
            case "dangerouslySetInnerHTML":
              g = k;
              break;
            default:
              on(i, T, k);
          }
      }
    return i.push(">"), ar(i, g, f), typeof f == "string" && i.push(("" + f).replace(Al, Br)), i.push(Ea("script")), null;
  }
  function Ta(i, o, f) {
    i.push(qn(f));
    var g = f = null, T;
    for (T in o)
      if (tn.call(o, T)) {
        var k = o[T];
        if (k != null)
          switch (T) {
            case "children":
              f = k;
              break;
            case "dangerouslySetInnerHTML":
              g = k;
              break;
            default:
              on(i, T, k);
          }
      }
    return i.push(">"), ar(i, g, f), f;
  }
  function Yi(i, o, f) {
    i.push(qn(f));
    var g = f = null, T;
    for (T in o)
      if (tn.call(o, T)) {
        var k = o[T];
        if (k != null)
          switch (T) {
            case "children":
              f = k;
              break;
            case "dangerouslySetInnerHTML":
              g = k;
              break;
            default:
              on(i, T, k);
          }
      }
    return i.push(">"), ar(i, g, f), typeof f == "string" ? (i.push(ce(f)), null) : f;
  }
  var xa = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Yo = /* @__PURE__ */ new Map();
  function qn(i) {
    var o = Yo.get(i);
    if (o === void 0) {
      if (!xa.test(i))
        throw Error(E(65, i));
      o = "<" + i, Yo.set(i, o);
    }
    return o;
  }
  function Nn(i, o, f, g, T, k, p, X, m) {
    switch (o) {
      case "div":
      case "span":
      case "svg":
      case "path":
        break;
      case "a":
        i.push(qn("a"));
        var Y = null, ne = null, $;
        for ($ in f)
          if (tn.call(f, $)) {
            var fe = f[$];
            if (fe != null)
              switch ($) {
                case "children":
                  Y = fe;
                  break;
                case "dangerouslySetInnerHTML":
                  ne = fe;
                  break;
                case "href":
                  fe === "" ? Wt(i, "href", "") : on(i, $, fe);
                  break;
                default:
                  on(i, $, fe);
              }
          }
        if (i.push(">"), ar(i, ne, Y), typeof Y == "string") {
          i.push(ce(Y));
          var ke = null;
        } else ke = Y;
        return ke;
      case "g":
      case "p":
      case "li":
        break;
      case "select":
        i.push(qn("select"));
        var Ze = null, De = null, pe;
        for (pe in f)
          if (tn.call(f, pe)) {
            var Be = f[pe];
            if (Be != null)
              switch (pe) {
                case "children":
                  Ze = Be;
                  break;
                case "dangerouslySetInnerHTML":
                  De = Be;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  on(
                    i,
                    pe,
                    Be
                  );
              }
          }
        return i.push(">"), ar(i, De, Ze), Ze;
      case "option":
        var me = X.selectedValue;
        i.push(qn("option"));
        var Gn = null, Ve = null, rn = null, bn = null, Ue;
        for (Ue in f)
          if (tn.call(f, Ue)) {
            var $n = f[Ue];
            if ($n != null)
              switch (Ue) {
                case "children":
                  Gn = $n;
                  break;
                case "selected":
                  rn = $n;
                  break;
                case "dangerouslySetInnerHTML":
                  bn = $n;
                  break;
                case "value":
                  Ve = $n;
                default:
                  on(
                    i,
                    Ue,
                    $n
                  );
              }
          }
        if (me != null) {
          var fn = Ve !== null ? "" + Ve : In(Gn);
          if (Ce(me)) {
            for (var ur = 0; ur < me.length; ur++)
              if ("" + me[ur] === fn) {
                i.push(' selected=""');
                break;
              }
          } else
            "" + me === fn && i.push(' selected=""');
        } else rn && i.push(' selected=""');
        return i.push(">"), ar(i, bn, Gn), Gn;
      case "textarea":
        i.push(qn("textarea"));
        var Tn = null, an = null, hn = null, Ne;
        for (Ne in f)
          if (tn.call(f, Ne)) {
            var dn = f[Ne];
            if (dn != null)
              switch (Ne) {
                case "children":
                  hn = dn;
                  break;
                case "value":
                  Tn = dn;
                  break;
                case "defaultValue":
                  an = dn;
                  break;
                case "dangerouslySetInnerHTML":
                  throw Error(E(91));
                default:
                  on(
                    i,
                    Ne,
                    dn
                  );
              }
          }
        if (Tn === null && an !== null && (Tn = an), i.push(">"), hn != null) {
          if (Tn != null) throw Error(E(92));
          if (Ce(hn)) {
            if (1 < hn.length)
              throw Error(E(93));
            Tn = "" + hn[0];
          }
          Tn = "" + hn;
        }
        return typeof Tn == "string" && Tn[0] === `
` && i.push(`
`), Tn !== null && i.push(ce("" + Tn)), null;
      case "input":
        i.push(qn("input"));
        var Lt = null, Qe = null, ta = null, Mi = null, cr = null, dl = null, gl = null, vl = null, ii = null, Ii;
        for (Ii in f)
          if (tn.call(f, Ii)) {
            var Mt = f[Ii];
            if (Mt != null)
              switch (Ii) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(E(399, "input"));
                case "name":
                  Lt = Mt;
                  break;
                case "formAction":
                  Qe = Mt;
                  break;
                case "formEncType":
                  ta = Mt;
                  break;
                case "formMethod":
                  Mi = Mt;
                  break;
                case "formTarget":
                  cr = Mt;
                  break;
                case "defaultChecked":
                  ii = Mt;
                  break;
                case "defaultValue":
                  gl = Mt;
                  break;
                case "checked":
                  vl = Mt;
                  break;
                case "value":
                  dl = Mt;
                  break;
                default:
                  on(
                    i,
                    Ii,
                    Mt
                  );
              }
          }
        var La = Au(
          i,
          g,
          T,
          Qe,
          ta,
          Mi,
          cr,
          Lt
        );
        return vl !== null ? Ui(i, "checked", vl) : ii !== null && Ui(i, "checked", ii), dl !== null ? on(i, "value", dl) : gl !== null && on(i, "value", gl), i.push("/>"), La?.forEach(Ml, i), null;
      case "button":
        i.push(qn("button"));
        var Ha = null, ou = null, Yu = null, xo = null, ra = null, sr = null, uu = null, fr;
        for (fr in f)
          if (tn.call(f, fr)) {
            var ol = f[fr];
            if (ol != null)
              switch (fr) {
                case "children":
                  Ha = ol;
                  break;
                case "dangerouslySetInnerHTML":
                  ou = ol;
                  break;
                case "name":
                  Yu = ol;
                  break;
                case "formAction":
                  xo = ol;
                  break;
                case "formEncType":
                  ra = ol;
                  break;
                case "formMethod":
                  sr = ol;
                  break;
                case "formTarget":
                  uu = ol;
                  break;
                default:
                  on(
                    i,
                    fr,
                    ol
                  );
              }
          }
        var Oi = Au(
          i,
          g,
          T,
          xo,
          ra,
          sr,
          uu,
          Yu
        );
        if (i.push(">"), Oi?.forEach(Ml, i), ar(i, ou, Ha), typeof Ha == "string") {
          i.push(ce(Ha));
          var cu = null;
        } else cu = Ha;
        return cu;
      case "form":
        i.push(qn("form"));
        var _i = null, Gu = null, xt = null, su = null, la = null, Eo = null, za;
        for (za in f)
          if (tn.call(f, za)) {
            var dt = f[za];
            if (dt != null)
              switch (za) {
                case "children":
                  _i = dt;
                  break;
                case "dangerouslySetInnerHTML":
                  Gu = dt;
                  break;
                case "action":
                  xt = dt;
                  break;
                case "encType":
                  su = dt;
                  break;
                case "method":
                  la = dt;
                  break;
                case "target":
                  Eo = dt;
                  break;
                default:
                  on(
                    i,
                    za,
                    dt
                  );
              }
          }
        var ul = null, Je = null;
        if (typeof xt == "function") {
          var mi = Il(
            g,
            xt
          );
          mi !== null ? (xt = mi.action || "", su = mi.encType, la = mi.method, Eo = mi.target, ul = mi.data, Je = mi.name) : (i.push(
            " ",
            "action",
            '="',
            Pr,
            '"'
          ), Eo = la = su = xt = null, Qc(g, T));
        }
        if (xt != null && on(i, "action", xt), su != null && on(i, "encType", su), la != null && on(i, "method", la), Eo != null && on(i, "target", Eo), i.push(">"), Je !== null && (i.push('<input type="hidden"'), Wt(i, "name", Je), i.push("/>"), ul?.forEach(Ml, i)), ar(i, Gu, _i), typeof _i == "string") {
          i.push(ce(_i));
          var Ro = null;
        } else Ro = _i;
        return Ro;
      case "menuitem":
        i.push(qn("menuitem"));
        for (var ia in f)
          if (tn.call(f, ia)) {
            var et = f[ia];
            if (et != null)
              switch (ia) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(E(400));
                default:
                  on(
                    i,
                    ia,
                    et
                  );
              }
          }
        return i.push(">"), null;
      case "object":
        i.push(qn("object"));
        var Or = null, aa = null, Ba;
        for (Ba in f)
          if (tn.call(f, Ba)) {
            var bl = f[Ba];
            if (bl != null)
              switch (Ba) {
                case "children":
                  Or = bl;
                  break;
                case "dangerouslySetInnerHTML":
                  aa = bl;
                  break;
                case "data":
                  var jt = M("" + bl);
                  if (jt === "") break;
                  i.push(
                    " ",
                    "data",
                    '="',
                    ce(jt),
                    '"'
                  );
                  break;
                default:
                  on(
                    i,
                    Ba,
                    bl
                  );
              }
          }
        if (i.push(">"), ar(i, aa, Or), typeof Or == "string") {
          i.push(ce(Or));
          var Co = null;
        } else Co = Or;
        return Co;
      case "title":
        var hr = X.tagScope & 1, Oc = X.tagScope & 4;
        if (X.insertionMode === 4 || hr || f.itemProp != null)
          var Na = Tc(
            i,
            f
          );
        else
          Oc ? Na = null : (Tc(T.hoistableChunks, f), Na = void 0);
        return Na;
      case "link":
        var fu = X.tagScope & 1, Xu = X.tagScope & 4, Zu = f.rel, ai = f.href, Wa = f.precedence;
        if (X.insertionMode === 4 || fu || f.itemProp != null || typeof Zu != "string" || typeof ai != "string" || ai === "") {
          ht(i, f);
          var Ua = null;
        } else if (f.rel === "stylesheet")
          if (typeof Wa != "string" || f.disabled != null || f.onLoad || f.onError)
            Ua = ht(
              i,
              f
            );
          else {
            var dr = T.styles.get(Wa), hu = g.styleResources.hasOwnProperty(ai) ? g.styleResources[ai] : void 0;
            if (hu !== null) {
              g.styleResources[ai] = null, dr || (dr = {
                precedence: ce(Wa),
                rules: [],
                hrefs: [],
                sheets: /* @__PURE__ */ new Map()
              }, T.styles.set(Wa, dr));
              var du = {
                state: 0,
                props: mn({}, f, {
                  "data-precedence": f.precedence,
                  precedence: null
                })
              };
              if (hu) {
                hu.length === 2 && Ou(du.props, hu);
                var _c = T.preloads.stylesheets.get(ai);
                _c && 0 < _c.length ? _c.length = 0 : du.state = 1;
              }
              dr.sheets.set(ai, du), p && p.stylesheets.add(du);
            } else if (dr) {
              var mc = dr.sheets.get(ai);
              mc && p && p.stylesheets.add(mc);
            }
            m && i.push("<!-- -->"), Ua = null;
          }
        else
          f.onLoad || f.onError ? Ua = ht(
            i,
            f
          ) : (m && i.push("<!-- -->"), Ua = Xu ? null : ht(T.hoistableChunks, f));
        return Ua;
      case "script":
        var Vu = X.tagScope & 1, Dc = f.async;
        if (typeof f.src != "string" || !f.src || !Dc || typeof Dc == "function" || typeof Dc == "symbol" || f.onLoad || f.onError || X.insertionMode === 4 || Vu || f.itemProp != null)
          var Lc = Uo(
            i,
            f
          );
        else {
          var Et = f.src;
          if (f.type === "module")
            var Ju = g.moduleScriptResources, gu = T.preloads.moduleScripts;
          else
            Ju = g.scriptResources, gu = T.preloads.scripts;
          var vu = Ju.hasOwnProperty(Et) ? Ju[Et] : void 0;
          if (vu !== null) {
            Ju[Et] = null;
            var Qu = f;
            if (vu) {
              vu.length === 2 && (Qu = mn({}, f), Ou(Qu, vu));
              var Hc = gu.get(Et);
              Hc && (Hc.length = 0);
            }
            var Ku = [];
            T.scripts.add(Ku), Uo(Ku, Qu);
          }
          m && i.push("<!-- -->"), Lc = null;
        }
        return Lc;
      case "style":
        var qu = X.tagScope & 1, oa = f.precedence, yl = f.href, as = f.nonce;
        if (X.insertionMode === 4 || qu || f.itemProp != null || typeof oa != "string" || typeof yl != "string" || yl === "") {
          i.push(qn("style"));
          var Ya = null, bu = null, Nl;
          for (Nl in f)
            if (tn.call(f, Nl)) {
              var ko = f[Nl];
              if (ko != null)
                switch (Nl) {
                  case "children":
                    Ya = ko;
                    break;
                  case "dangerouslySetInnerHTML":
                    bu = ko;
                    break;
                  default:
                    on(
                      i,
                      Nl,
                      ko
                    );
                }
            }
          i.push(">");
          var ua = Array.isArray(Ya) ? 2 > Ya.length ? Ya[0] : null : Ya;
          typeof ua != "function" && typeof ua != "symbol" && ua !== null && ua !== void 0 && i.push(("" + ua).replace(yc, wc)), ar(i, bu, Ya), i.push(Ea("style"));
          var yu = null;
        } else {
          var ca = T.styles.get(oa);
          if ((g.styleResources.hasOwnProperty(yl) ? g.styleResources[yl] : void 0) !== null) {
            g.styleResources[yl] = null, ca || (ca = {
              precedence: ce(oa),
              rules: [],
              hrefs: [],
              sheets: /* @__PURE__ */ new Map()
            }, T.styles.set(oa, ca));
            var os = T.nonce.style;
            if (!os || os === as) {
              ca.hrefs.push(ce(yl));
              var us = ca.rules, Wl = null, So = null, cl;
              for (cl in f)
                if (tn.call(f, cl)) {
                  var sa = f[cl];
                  if (sa != null)
                    switch (cl) {
                      case "children":
                        Wl = sa;
                        break;
                      case "dangerouslySetInnerHTML":
                        So = sa;
                    }
                }
              var Ga = Array.isArray(Wl) ? 2 > Wl.length ? Wl[0] : null : Wl;
              typeof Ga != "function" && typeof Ga != "symbol" && Ga !== null && Ga !== void 0 && us.push(
                ("" + Ga).replace(yc, wc)
              ), ar(us, So, Wl);
            }
          }
          ca && p && p.styles.add(ca), m && i.push("<!-- -->"), yu = void 0;
        }
        return yu;
      case "meta":
        var wl = X.tagScope & 1, zc = X.tagScope & 4;
        if (X.insertionMode === 4 || wl || f.itemProp != null)
          var cs = wi(
            i,
            f,
            "meta"
          );
        else
          m && i.push("<!-- -->"), cs = zc ? null : typeof f.charSet == "string" ? wi(T.charsetChunks, f, "meta") : f.name === "viewport" ? wi(T.viewportChunks, f, "meta") : wi(T.hoistableChunks, f, "meta");
        return cs;
      case "listing":
      case "pre":
        i.push(qn(o));
        var Po = null, l = null, a;
        for (a in f)
          if (tn.call(f, a)) {
            var s = f[a];
            if (s != null)
              switch (a) {
                case "children":
                  Po = s;
                  break;
                case "dangerouslySetInnerHTML":
                  l = s;
                  break;
                default:
                  on(
                    i,
                    a,
                    s
                  );
              }
          }
        if (i.push(">"), l != null) {
          if (Po != null) throw Error(E(60));
          if (typeof l != "object" || !("__html" in l))
            throw Error(E(61));
          var v = l.__html;
          v != null && (typeof v == "string" && 0 < v.length && v[0] === `
` ? i.push(`
`, v) : i.push("" + v));
        }
        return typeof Po == "string" && Po[0] === `
` && i.push(`
`), Po;
      case "img":
        var w = X.tagScope & 3, C = f.src, S = f.srcSet;
        if (!(f.loading === "lazy" || !C && !S || typeof C != "string" && C != null || typeof S != "string" && S != null || f.fetchPriority === "low" || w) && (typeof C != "string" || C[4] !== ":" || C[0] !== "d" && C[0] !== "D" || C[1] !== "a" && C[1] !== "A" || C[2] !== "t" && C[2] !== "T" || C[3] !== "a" && C[3] !== "A") && (typeof S != "string" || S[4] !== ":" || S[0] !== "d" && S[0] !== "D" || S[1] !== "a" && S[1] !== "A" || S[2] !== "t" && S[2] !== "T" || S[3] !== "a" && S[3] !== "A")) {
          p !== null && X.tagScope & 64 && (p.suspenseyImages = !0);
          var H = typeof f.sizes == "string" ? f.sizes : void 0, O = S ? S + `
` + (H || "") : C, z = T.preloads.images, G = z.get(O);
          if (G)
            (f.fetchPriority === "high" || 10 > T.highImagePreloads.size) && (z.delete(O), T.highImagePreloads.add(G));
          else if (!g.imageResources.hasOwnProperty(O)) {
            g.imageResources[O] = Bn;
            var J = f.crossOrigin, ve = typeof J == "string" ? J === "use-credentials" ? J : "" : void 0, ge = T.headers, en;
            ge && 0 < ge.remainingCapacity && typeof f.srcSet != "string" && (f.fetchPriority === "high" || 500 > ge.highImagePreloads.length) && (en = Wn(C, "image", {
              imageSrcSet: f.srcSet,
              imageSizes: f.sizes,
              crossOrigin: ve,
              integrity: f.integrity,
              nonce: f.nonce,
              type: f.type,
              fetchPriority: f.fetchPriority,
              referrerPolicy: f.refererPolicy
            }), 0 <= (ge.remainingCapacity -= en.length + 2)) ? (T.resets.image[O] = Bn, ge.highImagePreloads && (ge.highImagePreloads += ", "), ge.highImagePreloads += en) : (G = [], ht(G, {
              rel: "preload",
              as: "image",
              href: S ? void 0 : C,
              imageSrcSet: S,
              imageSizes: H,
              crossOrigin: ve,
              integrity: f.integrity,
              type: f.type,
              fetchPriority: f.fetchPriority,
              referrerPolicy: f.referrerPolicy
            }), f.fetchPriority === "high" || 10 > T.highImagePreloads.size ? T.highImagePreloads.add(G) : (T.bulkPreloads.add(G), z.set(O, G)));
          }
        }
        return wi(i, f, "img");
      case "base":
      case "area":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "param":
      case "source":
      case "track":
      case "wbr":
        return wi(i, f, o);
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        break;
      case "head":
        if (2 > X.insertionMode) {
          var Le = k || T.preamble;
          if (Le.headChunks)
            throw Error(E(545, "`<head>`"));
          k !== null && i.push("<!--head-->"), Le.headChunks = [];
          var nn = Ta(
            Le.headChunks,
            f,
            "head"
          );
        } else
          nn = Yi(
            i,
            f,
            "head"
          );
        return nn;
      case "body":
        if (2 > X.insertionMode) {
          var nt = k || T.preamble;
          if (nt.bodyChunks)
            throw Error(E(545, "`<body>`"));
          k !== null && i.push("<!--body-->"), nt.bodyChunks = [];
          var Hn = Ta(
            nt.bodyChunks,
            f,
            "body"
          );
        } else
          Hn = Yi(
            i,
            f,
            "body"
          );
        return Hn;
      case "html":
        if (X.insertionMode === 0) {
          var $t = k || T.preamble;
          if ($t.htmlChunks)
            throw Error(E(545, "`<html>`"));
          k !== null && i.push("<!--html-->"), $t.htmlChunks = [""];
          var Ur = Ta(
            $t.htmlChunks,
            f,
            "html"
          );
        } else
          Ur = Yi(
            i,
            f,
            "html"
          );
        return Ur;
      default:
        if (o.indexOf("-") !== -1) {
          i.push(qn(o));
          var Tl = null, He = null, gr;
          for (gr in f)
            if (tn.call(f, gr)) {
              var gt = f[gr];
              if (gt != null) {
                var _r = gr;
                switch (gr) {
                  case "children":
                    Tl = gt;
                    break;
                  case "dangerouslySetInnerHTML":
                    He = gt;
                    break;
                  case "style":
                    wa(i, gt);
                    break;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "ref":
                    break;
                  case "className":
                    _r = "class";
                  default:
                    if (Ot(gr) && typeof gt != "function" && typeof gt != "symbol" && gt !== !1) {
                      if (gt === !0) gt = "";
                      else if (typeof gt == "object") continue;
                      i.push(
                        " ",
                        _r,
                        '="',
                        ce(gt),
                        '"'
                      );
                    }
                }
              }
            }
          return i.push(">"), ar(i, He, Tl), Tl;
        }
    }
    return Yi(i, f, o);
  }
  var Mu = /* @__PURE__ */ new Map();
  function Ea(i) {
    var o = Mu.get(i);
    return o === void 0 && (o = "</" + i + ">", Mu.set(i, o)), o;
  }
  function Kc(i, o) {
    i = i.preamble, i.htmlChunks === null && o.htmlChunks && (i.htmlChunks = o.htmlChunks), i.headChunks === null && o.headChunks && (i.headChunks = o.headChunks), i.bodyChunks === null && o.bodyChunks && (i.bodyChunks = o.bodyChunks);
  }
  function xc(i, o) {
    o = o.bootstrapChunks;
    for (var f = 0; f < o.length - 1; f++)
      i.push(o[f]);
    return f < o.length ? (f = o[f], o.length = 0, i.push(f)) : !0;
  }
  function hl(i, o, f) {
    if (i.push('<!--$?--><template id="'), f === null) throw Error(E(395));
    return i.push(o.boundaryPrefix), o = f.toString(16), i.push(o), i.push('"></template>');
  }
  function Ql(i, o, f, g) {
    switch (f.insertionMode) {
      case 0:
      case 1:
      case 3:
      case 2:
        return i.push('<div hidden id="'), i.push(o.segmentPrefix), o = g.toString(16), i.push(o), i.push('">');
      case 4:
        return i.push('<svg aria-hidden="true" style="display:none" id="'), i.push(o.segmentPrefix), o = g.toString(16), i.push(o), i.push('">');
      case 5:
        return i.push('<math aria-hidden="true" style="display:none" id="'), i.push(o.segmentPrefix), o = g.toString(16), i.push(o), i.push('">');
      case 6:
        return i.push('<table hidden id="'), i.push(o.segmentPrefix), o = g.toString(16), i.push(o), i.push('">');
      case 7:
        return i.push('<table hidden><tbody id="'), i.push(o.segmentPrefix), o = g.toString(16), i.push(o), i.push('">');
      case 8:
        return i.push('<table hidden><tr id="'), i.push(o.segmentPrefix), o = g.toString(16), i.push(o), i.push('">');
      case 9:
        return i.push('<table hidden><colgroup id="'), i.push(o.segmentPrefix), o = g.toString(16), i.push(o), i.push('">');
      default:
        throw Error(E(397));
    }
  }
  function qc(i, o) {
    switch (o.insertionMode) {
      case 0:
      case 1:
      case 3:
      case 2:
        return i.push("</div>");
      case 4:
        return i.push("</svg>");
      case 5:
        return i.push("</math>");
      case 6:
        return i.push("</table>");
      case 7:
        return i.push("</tbody></table>");
      case 8:
        return i.push("</tr></table>");
      case 9:
        return i.push("</colgroup></table>");
      default:
        throw Error(E(397));
    }
  }
  var Ra = /[<\u2028\u2029]/g;
  function ct(i) {
    return JSON.stringify(i).replace(
      Ra,
      function(o) {
        switch (o) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw Error(
              "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
            );
        }
      }
    );
  }
  var Gi = /[&><\u2028\u2029]/g;
  function Xi(i) {
    return JSON.stringify(i).replace(
      Gi,
      function(o) {
        switch (o) {
          case "&":
            return "\\u0026";
          case ">":
            return "\\u003e";
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw Error(
              "escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
            );
        }
      }
    );
  }
  var Ca = !1, Jt = !0;
  function Nr(i) {
    var o = i.rules, f = i.hrefs, g = 0;
    if (f.length) {
      for (this.push(Xe.startInlineStyle), this.push(' media="not all" data-precedence="'), this.push(i.precedence), this.push('" data-href="'); g < f.length - 1; g++)
        this.push(f[g]), this.push(" ");
      for (this.push(f[g]), this.push('">'), g = 0; g < o.length; g++) this.push(o[g]);
      Jt = this.push("</style>"), Ca = !0, o.length = 0, f.length = 0;
    }
  }
  function Pn(i) {
    return i.state !== 2 ? Ca = !0 : !1;
  }
  function Go(i, o, f) {
    return Ca = !1, Jt = !0, Xe = f, o.styles.forEach(Nr, i), Xe = null, o.stylesheets.forEach(Pn), Ca && (f.stylesToHoist = !0), Jt;
  }
  function nl(i) {
    for (var o = 0; o < i.length; o++) this.push(i[o]);
    i.length = 0;
  }
  var un = [];
  function jc(i) {
    ht(un, i.props);
    for (var o = 0; o < un.length; o++)
      this.push(un[o]);
    un.length = 0, i.state = 2;
  }
  function je(i) {
    var o = 0 < i.sheets.size;
    i.sheets.forEach(jc, this), i.sheets.clear();
    var f = i.rules, g = i.hrefs;
    if (!o || g.length) {
      if (this.push(Xe.startInlineStyle), this.push(' data-precedence="'), this.push(i.precedence), i = 0, g.length) {
        for (this.push('" data-href="'); i < g.length - 1; i++)
          this.push(g[i]), this.push(" ");
        this.push(g[i]);
      }
      for (this.push('">'), i = 0; i < f.length; i++)
        this.push(f[i]);
      this.push("</style>"), f.length = 0, g.length = 0;
    }
  }
  function Xo(i) {
    if (i.state === 0) {
      i.state = 1;
      var o = i.props;
      for (ht(un, {
        rel: "preload",
        as: "style",
        href: i.props.href,
        crossOrigin: o.crossOrigin,
        fetchPriority: o.fetchPriority,
        integrity: o.integrity,
        media: o.media,
        hrefLang: o.hrefLang,
        referrerPolicy: o.referrerPolicy
      }), i = 0; i < un.length; i++)
        this.push(un[i]);
      un.length = 0;
    }
  }
  function Zo(i) {
    i.sheets.forEach(Xo, this), i.sheets.clear();
  }
  function Vo(i, o) {
    (o.instructions & 32) === 0 && (o.instructions |= 32, i.push(
      ' id="',
      ce("_" + o.idPrefix + "R_"),
      '"'
    ));
  }
  function Kl(i, o) {
    i.push("[");
    var f = "[";
    o.stylesheets.forEach(function(g) {
      if (g.state !== 2)
        if (g.state === 3)
          i.push(f), g = Xi(
            "" + g.props.href
          ), i.push(g), i.push("]"), f = ",[";
        else {
          i.push(f);
          var T = g.props["data-precedence"], k = g.props, p = M("" + g.props.href);
          p = Xi(p), i.push(p), T = "" + T, i.push(","), T = Xi(T), i.push(T);
          for (var X in k)
            if (tn.call(k, X) && (T = k[X], T != null))
              switch (X) {
                case "href":
                case "rel":
                case "precedence":
                case "data-precedence":
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(E(399, "link"));
                default:
                  En(
                    i,
                    X,
                    T
                  );
              }
          i.push("]"), f = ",[", g.state = 3;
        }
    }), i.push("]");
  }
  function En(i, o, f) {
    var g = o.toLowerCase();
    switch (typeof f) {
      case "function":
      case "symbol":
        return;
    }
    switch (o) {
      case "innerHTML":
      case "dangerouslySetInnerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "style":
      case "ref":
        return;
      case "className":
        g = "class", o = "" + f;
        break;
      case "hidden":
        if (f === !1) return;
        o = "";
        break;
      case "src":
      case "href":
        f = M(f), o = "" + f;
        break;
      default:
        if (2 < o.length && (o[0] === "o" || o[0] === "O") && (o[1] === "n" || o[1] === "N") || !Ot(o))
          return;
        o = "" + f;
    }
    i.push(","), g = Xi(g), i.push(g), i.push(","), g = Xi(o), i.push(g);
  }
  function cn() {
    return { styles: /* @__PURE__ */ new Set(), stylesheets: /* @__PURE__ */ new Set(), suspenseyImages: !1 };
  }
  function Ol(i) {
    var o = Tt || null;
    if (o) {
      var f = o.resumableState, g = o.renderState;
      if (typeof i == "string" && i) {
        if (!f.dnsResources.hasOwnProperty(i)) {
          f.dnsResources[i] = null, f = g.headers;
          var T, k;
          (k = f && 0 < f.remainingCapacity) && (k = (T = "<" + ("" + i).replace(
            _u,
            ao
          ) + ">; rel=dns-prefetch", 0 <= (f.remainingCapacity -= T.length + 2))), k ? (g.resets.dns[i] = null, f.preconnects && (f.preconnects += ", "), f.preconnects += T) : (T = [], ht(T, { href: i, rel: "dns-prefetch" }), g.preconnects.add(T));
        }
        To(o);
      }
    } else Ie.D(i);
  }
  function Qt(i, o) {
    var f = Tt || null;
    if (f) {
      var g = f.resumableState, T = f.renderState;
      if (typeof i == "string" && i) {
        var k = o === "use-credentials" ? "credentials" : typeof o == "string" ? "anonymous" : "default";
        if (!g.connectResources[k].hasOwnProperty(i)) {
          g.connectResources[k][i] = null, g = T.headers;
          var p, X;
          if (X = g && 0 < g.remainingCapacity) {
            if (X = "<" + ("" + i).replace(
              _u,
              ao
            ) + ">; rel=preconnect", typeof o == "string") {
              var m = ("" + o).replace(
                tl,
                Sa
              );
              X += '; crossorigin="' + m + '"';
            }
            X = (p = X, 0 <= (g.remainingCapacity -= p.length + 2));
          }
          X ? (T.resets.connect[k][i] = null, g.preconnects && (g.preconnects += ", "), g.preconnects += p) : (k = [], ht(k, {
            rel: "preconnect",
            href: i,
            crossOrigin: o
          }), T.preconnects.add(k));
        }
        To(f);
      }
    } else Ie.C(i, o);
  }
  function ka(i, o, f) {
    var g = Tt || null;
    if (g) {
      var T = g.resumableState, k = g.renderState;
      if (o && i) {
        switch (o) {
          case "image":
            if (f)
              var p = f.imageSrcSet, X = f.imageSizes, m = f.fetchPriority;
            var Y = p ? p + `
` + (X || "") : i;
            if (T.imageResources.hasOwnProperty(Y)) return;
            T.imageResources[Y] = Bn, T = k.headers;
            var ne;
            T && 0 < T.remainingCapacity && typeof p != "string" && m === "high" && (ne = Wn(i, o, f), 0 <= (T.remainingCapacity -= ne.length + 2)) ? (k.resets.image[Y] = Bn, T.highImagePreloads && (T.highImagePreloads += ", "), T.highImagePreloads += ne) : (T = [], ht(
              T,
              mn(
                { rel: "preload", href: p ? void 0 : i, as: o },
                f
              )
            ), m === "high" ? k.highImagePreloads.add(T) : (k.bulkPreloads.add(T), k.preloads.images.set(Y, T)));
            break;
          case "style":
            if (T.styleResources.hasOwnProperty(i)) return;
            p = [], ht(
              p,
              mn({ rel: "preload", href: i, as: o }, f)
            ), T.styleResources[i] = !f || typeof f.crossOrigin != "string" && typeof f.integrity != "string" ? Bn : [f.crossOrigin, f.integrity], k.preloads.stylesheets.set(i, p), k.bulkPreloads.add(p);
            break;
          case "script":
            if (T.scriptResources.hasOwnProperty(i)) return;
            p = [], k.preloads.scripts.set(i, p), k.bulkPreloads.add(p), ht(
              p,
              mn({ rel: "preload", href: i, as: o }, f)
            ), T.scriptResources[i] = !f || typeof f.crossOrigin != "string" && typeof f.integrity != "string" ? Bn : [f.crossOrigin, f.integrity];
            break;
          default:
            if (T.unknownResources.hasOwnProperty(o)) {
              if (p = T.unknownResources[o], p.hasOwnProperty(i))
                return;
            } else
              p = {}, T.unknownResources[o] = p;
            if (p[i] = Bn, (T = k.headers) && 0 < T.remainingCapacity && o === "font" && (Y = Wn(i, o, f), 0 <= (T.remainingCapacity -= Y.length + 2)))
              k.resets.font[i] = Bn, T.fontPreloads && (T.fontPreloads += ", "), T.fontPreloads += Y;
            else
              switch (T = [], i = mn({ rel: "preload", href: i, as: o }, f), ht(T, i), o) {
                case "font":
                  k.fontPreloads.add(T);
                  break;
                default:
                  k.bulkPreloads.add(T);
              }
        }
        To(g);
      }
    } else Ie.L(i, o, f);
  }
  function Iu(i, o) {
    var f = Tt || null;
    if (f) {
      var g = f.resumableState, T = f.renderState;
      if (i) {
        var k = o && typeof o.as == "string" ? o.as : "script";
        switch (k) {
          case "script":
            if (g.moduleScriptResources.hasOwnProperty(i)) return;
            k = [], g.moduleScriptResources[i] = !o || typeof o.crossOrigin != "string" && typeof o.integrity != "string" ? Bn : [o.crossOrigin, o.integrity], T.preloads.moduleScripts.set(i, k);
            break;
          default:
            if (g.moduleUnknownResources.hasOwnProperty(k)) {
              var p = g.unknownResources[k];
              if (p.hasOwnProperty(i)) return;
            } else
              p = {}, g.moduleUnknownResources[k] = p;
            k = [], p[i] = Bn;
        }
        ht(k, mn({ rel: "modulepreload", href: i }, o)), T.bulkPreloads.add(k), To(f);
      }
    } else Ie.m(i, o);
  }
  function or(i, o, f) {
    var g = Tt || null;
    if (g) {
      var T = g.resumableState, k = g.renderState;
      if (i) {
        o = o || "default";
        var p = k.styles.get(o), X = T.styleResources.hasOwnProperty(i) ? T.styleResources[i] : void 0;
        X !== null && (T.styleResources[i] = null, p || (p = {
          precedence: ce(o),
          rules: [],
          hrefs: [],
          sheets: /* @__PURE__ */ new Map()
        }, k.styles.set(o, p)), o = {
          state: 0,
          props: mn(
            { rel: "stylesheet", href: i, "data-precedence": o },
            f
          )
        }, X && (X.length === 2 && Ou(o.props, X), (k = k.preloads.stylesheets.get(i)) && 0 < k.length ? k.length = 0 : o.state = 1), p.sheets.set(i, o), To(g));
      }
    } else Ie.S(i, o, f);
  }
  function $c(i, o) {
    var f = Tt || null;
    if (f) {
      var g = f.resumableState, T = f.renderState;
      if (i) {
        var k = g.scriptResources.hasOwnProperty(i) ? g.scriptResources[i] : void 0;
        k !== null && (g.scriptResources[i] = null, o = mn({ src: i, async: !0 }, o), k && (k.length === 2 && Ou(o, k), i = T.preloads.scripts.get(i)) && (i.length = 0), i = [], T.scripts.add(i), Uo(i, o), To(f));
      }
    } else Ie.X(i, o);
  }
  function Ec(i, o) {
    var f = Tt || null;
    if (f) {
      var g = f.resumableState, T = f.renderState;
      if (i) {
        var k = g.moduleScriptResources.hasOwnProperty(
          i
        ) ? g.moduleScriptResources[i] : void 0;
        k !== null && (g.moduleScriptResources[i] = null, o = mn({ src: i, type: "module", async: !0 }, o), k && (k.length === 2 && Ou(o, k), i = T.preloads.moduleScripts.get(i)) && (i.length = 0), i = [], T.scripts.add(i), Uo(i, o), To(f));
      }
    } else Ie.M(i, o);
  }
  function Ou(i, o) {
    i.crossOrigin == null && (i.crossOrigin = o[0]), i.integrity == null && (i.integrity = o[1]);
  }
  function Wn(i, o, f) {
    i = ("" + i).replace(
      _u,
      ao
    ), o = ("" + o).replace(
      tl,
      Sa
    ), o = "<" + i + '>; rel=preload; as="' + o + '"';
    for (var g in f)
      tn.call(f, g) && (i = f[g], typeof i == "string" && (o += "; " + g.toLowerCase() + '="' + ("" + i).replace(
        tl,
        Sa
      ) + '"'));
    return o;
  }
  var _u = /[<>\r\n]/g;
  function ao(i) {
    switch (i) {
      case "<":
        return "%3C";
      case ">":
        return "%3E";
      case `
`:
        return "%0A";
      case "\r":
        return "%0D";
      default:
        throw Error(
          "escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
        );
    }
  }
  var tl = /["';,\r\n]/g;
  function Sa(i) {
    switch (i) {
      case '"':
        return "%22";
      case "'":
        return "%27";
      case ";":
        return "%3B";
      case ",":
        return "%2C";
      case `
`:
        return "%0A";
      case "\r":
        return "%0D";
      default:
        throw Error(
          "escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
        );
    }
  }
  function es(i) {
    this.styles.add(i);
  }
  function ns(i) {
    this.stylesheets.add(i);
  }
  function oo(i, o) {
    o.styles.forEach(es, i), o.stylesheets.forEach(ns, i), o.suspenseyImages && (i.suspenseyImages = !0);
  }
  function uo(i, o) {
    var f = i.idPrefix, g = [], T = i.bootstrapScriptContent, k = i.bootstrapScripts, p = i.bootstrapModules;
    T !== void 0 && (g.push("<script"), Vo(g, i), g.push(
      ">",
      ("" + T).replace(Al, Br),
      "<\/script>"
    )), T = f + "P:";
    var X = f + "S:";
    f += "B:";
    var m = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set(), ne = /* @__PURE__ */ new Set(), $ = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Set(), ke = /* @__PURE__ */ new Set(), Ze = /* @__PURE__ */ new Set(), De = {
      images: /* @__PURE__ */ new Map(),
      stylesheets: /* @__PURE__ */ new Map(),
      scripts: /* @__PURE__ */ new Map(),
      moduleScripts: /* @__PURE__ */ new Map()
    };
    if (k !== void 0)
      for (var pe = 0; pe < k.length; pe++) {
        var Be = k[pe], me, Gn = void 0, Ve = void 0, rn = {
          rel: "preload",
          as: "script",
          fetchPriority: "low",
          nonce: void 0
        };
        typeof Be == "string" ? rn.href = me = Be : (rn.href = me = Be.src, rn.integrity = Ve = typeof Be.integrity == "string" ? Be.integrity : void 0, rn.crossOrigin = Gn = typeof Be == "string" || Be.crossOrigin == null ? void 0 : Be.crossOrigin === "use-credentials" ? "use-credentials" : ""), Be = i;
        var bn = me;
        Be.scriptResources[bn] = null, Be.moduleScriptResources[bn] = null, Be = [], ht(Be, rn), fe.add(Be), g.push('<script src="', ce(me), '"'), typeof Ve == "string" && g.push(
          ' integrity="',
          ce(Ve),
          '"'
        ), typeof Gn == "string" && g.push(
          ' crossorigin="',
          ce(Gn),
          '"'
        ), Vo(g, i), g.push(' async=""><\/script>');
      }
    if (p !== void 0)
      for (k = 0; k < p.length; k++)
        rn = p[k], Gn = me = void 0, Ve = {
          rel: "modulepreload",
          fetchPriority: "low",
          nonce: void 0
        }, typeof rn == "string" ? Ve.href = pe = rn : (Ve.href = pe = rn.src, Ve.integrity = Gn = typeof rn.integrity == "string" ? rn.integrity : void 0, Ve.crossOrigin = me = typeof rn == "string" || rn.crossOrigin == null ? void 0 : rn.crossOrigin === "use-credentials" ? "use-credentials" : ""), rn = i, Be = pe, rn.scriptResources[Be] = null, rn.moduleScriptResources[Be] = null, rn = [], ht(rn, Ve), fe.add(rn), g.push(
          '<script type="module" src="',
          ce(pe),
          '"'
        ), typeof Gn == "string" && g.push(
          ' integrity="',
          ce(Gn),
          '"'
        ), typeof me == "string" && g.push(
          ' crossorigin="',
          ce(me),
          '"'
        ), Vo(g, i), g.push(' async=""><\/script>');
    return {
      placeholderPrefix: T,
      segmentPrefix: X,
      boundaryPrefix: f,
      startInlineScript: "<script",
      startInlineStyle: "<style",
      preamble: { htmlChunks: null, headChunks: null, bodyChunks: null },
      externalRuntimeScript: null,
      bootstrapChunks: g,
      importMapChunks: [],
      onHeaders: void 0,
      headers: null,
      resets: {
        font: {},
        dns: {},
        connect: { default: {}, anonymous: {}, credentials: {} },
        image: {},
        style: {}
      },
      charsetChunks: [],
      viewportChunks: [],
      hoistableChunks: [],
      preconnects: m,
      fontPreloads: Y,
      highImagePreloads: ne,
      styles: $,
      bootstrapScripts: fe,
      scripts: ke,
      bulkPreloads: Ze,
      preloads: De,
      nonce: { script: void 0, style: void 0 },
      stylesToHoist: !1,
      generateStaticMarkup: o
    };
  }
  function ql(i, o, f, g) {
    return f.generateStaticMarkup ? (i.push(ce(o)), !1) : (o === "" ? i = g : (g && i.push("<!-- -->"), i.push(ce(o)), i = !0), i);
  }
  function jl(i, o, f, g) {
    o.generateStaticMarkup || f && g && i.push("<!-- -->");
  }
  var mu = Function.prototype.bind, Jo = Symbol.for("react.client.reference");
  function Qo(i) {
    if (i == null) return null;
    if (typeof i == "function")
      return i.$$typeof === Jo ? null : i.displayName || i.name || null;
    if (typeof i == "string") return i;
    switch (i) {
      case q:
        return "Fragment";
      case Te:
        return "Profiler";
      case de:
        return "StrictMode";
      case N:
        return "Suspense";
      case Re:
        return "SuspenseList";
      case Qn:
        return "Activity";
    }
    if (typeof i == "object")
      switch (i.$$typeof) {
        case j:
          return "Portal";
        case _e:
          return i.displayName || "Context";
        case Ae:
          return (i._context.displayName || "Context") + ".Consumer";
        case $e:
          var o = i.render;
          return i = i.displayName, i || (i = o.displayName || o.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
        case ot:
          return o = i.displayName || null, o !== null ? o : Qo(i.type) || "Memo";
        case re:
          o = i._payload, i = i._init;
          try {
            return Qo(i(o));
          } catch {
          }
      }
    return null;
  }
  var pt = {}, co = null;
  function Ko(i, o) {
    if (i !== o) {
      i.context._currentValue2 = i.parentValue, i = i.parent;
      var f = o.parent;
      if (i === null) {
        if (f !== null) throw Error(E(401));
      } else {
        if (f === null) throw Error(E(401));
        Ko(i, f);
      }
      o.context._currentValue2 = o.value;
    }
  }
  function Du(i) {
    i.context._currentValue2 = i.parentValue, i = i.parent, i !== null && Du(i);
  }
  function $l(i) {
    var o = i.parent;
    o !== null && $l(o), i.context._currentValue2 = i.value;
  }
  function qo(i, o) {
    if (i.context._currentValue2 = i.parentValue, i = i.parent, i === null) throw Error(E(402));
    i.depth === o.depth ? Ko(i, o) : qo(i, o);
  }
  function Fr(i, o) {
    var f = o.parent;
    if (f === null) throw Error(E(402));
    i.depth === f.depth ? Ko(i, f) : Fr(i, f), o.context._currentValue2 = o.value;
  }
  function _l(i) {
    var o = co;
    o !== i && (o === null ? $l(i) : i === null ? Du(o) : o.depth === i.depth ? Ko(o, i) : o.depth > i.depth ? qo(o, i) : Fr(o, i), co = i);
  }
  var Rc = {
    enqueueSetState: function(i, o) {
      i = i._reactInternals, i.queue !== null && i.queue.push(o);
    },
    enqueueReplaceState: function(i, o) {
      i = i._reactInternals, i.replace = !0, i.queue = [o];
    },
    enqueueForceUpdate: function() {
    }
  }, jo = { id: 1, overflow: "" };
  function pr(i, o, f) {
    var g = i.id;
    i = i.overflow;
    var T = 32 - $o(g) - 1;
    g &= ~(1 << T), f += 1;
    var k = 32 - $o(o) + T;
    if (30 < k) {
      var p = T - T % 5;
      return k = (g & (1 << p) - 1).toString(32), g >>= p, T -= p, {
        id: 1 << 32 - $o(o) + T | f << T | g,
        overflow: k + i
      };
    }
    return {
      id: 1 << k | f << T | g,
      overflow: i
    };
  }
  var $o = Math.clz32 ? Math.clz32 : Ar, Zi = Math.log, so = Math.LN2;
  function Ar(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (Zi(i) / so | 0) | 0;
  }
  function mt() {
  }
  var Dn = Error(E(460));
  function Cc(i, o, f) {
    switch (f = i[f], f === void 0 ? i.push(o) : f !== o && (o.then(mt, mt), o = f), o.status) {
      case "fulfilled":
        return o.value;
      case "rejected":
        throw o.reason;
      default:
        switch (typeof o.status == "string" ? o.then(mt, mt) : (i = o, i.status = "pending", i.then(
          function(g) {
            if (o.status === "pending") {
              var T = o;
              T.status = "fulfilled", T.value = g;
            }
          },
          function(g) {
            if (o.status === "pending") {
              var T = o;
              T.status = "rejected", T.reason = g;
            }
          }
        )), o.status) {
          case "fulfilled":
            return o.value;
          case "rejected":
            throw o.reason;
        }
        throw Ti = o, Dn;
    }
  }
  var Ti = null;
  function ml() {
    if (Ti === null) throw Error(E(459));
    var i = Ti;
    return Ti = null, i;
  }
  function kc(i, o) {
    return i === o && (i !== 0 || 1 / i === 1 / o) || i !== i && o !== o;
  }
  var xi = typeof Object.is == "function" ? Object.is : kc, ei = null, fo = null, Ei = null, Ri = null, ho = null, We = null, Dl = !1, yt = !1, ni = 0, At = 0, Vi = -1, Pa = 0, ti = null, Ci = null, wt = 0;
  function ki() {
    if (ei === null)
      throw Error(E(321));
    return ei;
  }
  function Si() {
    if (0 < wt) throw Error(E(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Fa() {
    return We === null ? ho === null ? (Dl = !1, ho = We = Si()) : (Dl = !0, We = ho) : We.next === null ? (Dl = !1, We = We.next = Si()) : (Dl = !0, We = We.next), We;
  }
  function Ji() {
    var i = ti;
    return ti = null, i;
  }
  function pa() {
    Ri = Ei = fo = ei = null, yt = !1, ho = null, wt = 0, We = Ci = null;
  }
  function Mr(i, o) {
    return typeof o == "function" ? o(i) : o;
  }
  function Aa(i, o, f) {
    if (ei = ki(), We = Fa(), Dl) {
      var g = We.queue;
      if (o = g.dispatch, Ci !== null && (f = Ci.get(g), f !== void 0)) {
        Ci.delete(g), g = We.memoizedState;
        do
          g = i(g, f.action), f = f.next;
        while (f !== null);
        return We.memoizedState = g, [g, o];
      }
      return [We.memoizedState, o];
    }
    return i = i === Mr ? typeof o == "function" ? o() : o : f !== void 0 ? f(o) : o, We.memoizedState = i, i = We.queue = { last: null, dispatch: null }, i = i.dispatch = Sc.bind(
      null,
      ei,
      i
    ), [We.memoizedState, i];
  }
  function Ll(i, o) {
    if (ei = ki(), We = Fa(), o = o === void 0 ? null : o, We !== null) {
      var f = We.memoizedState;
      if (f !== null && o !== null) {
        var g = f[1];
        e: if (g === null) g = !1;
        else {
          for (var T = 0; T < g.length && T < o.length; T++)
            if (!xi(o[T], g[T])) {
              g = !1;
              break e;
            }
          g = !0;
        }
        if (g) return f[0];
      }
    }
    return i = i(), We.memoizedState = [i, o], i;
  }
  function Sc(i, o, f) {
    if (25 <= wt) throw Error(E(301));
    if (i === ei)
      if (yt = !0, i = { action: f, next: null }, Ci === null && (Ci = /* @__PURE__ */ new Map()), f = Ci.get(o), f === void 0)
        Ci.set(o, i);
      else {
        for (o = f; o.next !== null; ) o = o.next;
        o.next = i;
      }
  }
  function Pc() {
    throw Error(E(440));
  }
  function Fc() {
    throw Error(E(394));
  }
  function go() {
    throw Error(E(479));
  }
  function vo(i, o, f) {
    ki();
    var g = At++, T = Ei;
    if (typeof i.$$FORM_ACTION == "function") {
      var k = null, p = Ri;
      T = T.formState;
      var X = i.$$IS_SIGNATURE_EQUAL;
      if (T !== null && typeof X == "function") {
        var m = T[1];
        X.call(i, T[2], T[3]) && (k = f !== void 0 ? "p" + f : "k" + _n(
          JSON.stringify([p, null, g]),
          0
        ), m === k && (Vi = g, o = T[0]));
      }
      var Y = i.bind(null, o);
      return i = function($) {
        Y($);
      }, typeof Y.$$FORM_ACTION == "function" && (i.$$FORM_ACTION = function($) {
        $ = Y.$$FORM_ACTION($), f !== void 0 && (f += "", $.action = f);
        var fe = $.data;
        return fe && (k === null && (k = f !== void 0 ? "p" + f : "k" + _n(
          JSON.stringify([
            p,
            null,
            g
          ]),
          0
        )), fe.append("$ACTION_KEY", k)), $;
      }), [o, i, !1];
    }
    var ne = i.bind(null, o);
    return [
      o,
      function($) {
        ne($);
      },
      !1
    ];
  }
  function bo(i) {
    var o = Pa;
    return Pa += 1, ti === null && (ti = []), Cc(ti, i, o);
  }
  function Dt() {
    throw Error(E(393));
  }
  var ts = {
    readContext: function(i) {
      return i._currentValue2;
    },
    use: function(i) {
      if (i !== null && typeof i == "object") {
        if (typeof i.then == "function") return bo(i);
        if (i.$$typeof === _e)
          return i._currentValue2;
      }
      throw Error(E(438, String(i)));
    },
    useContext: function(i) {
      return ki(), i._currentValue2;
    },
    useMemo: Ll,
    useReducer: Aa,
    useRef: function(i) {
      ei = ki(), We = Fa();
      var o = We.memoizedState;
      return o === null ? (i = { current: i }, We.memoizedState = i) : o;
    },
    useState: function(i) {
      return Aa(Mr, i);
    },
    useInsertionEffect: mt,
    useLayoutEffect: mt,
    useCallback: function(i, o) {
      return Ll(function() {
        return i;
      }, o);
    },
    useImperativeHandle: mt,
    useEffect: mt,
    useDebugValue: mt,
    useDeferredValue: function(i, o) {
      return ki(), o !== void 0 ? o : i;
    },
    useTransition: function() {
      return ki(), [!1, Fc];
    },
    useId: function() {
      var i = fo.treeContext, o = i.overflow;
      i = i.id, i = (i & ~(1 << 32 - $o(i) - 1)).toString(32) + o;
      var f = Qi;
      if (f === null) throw Error(E(404));
      return o = ni++, i = "_" + f.idPrefix + "R_" + i, 0 < o && (i += "H" + o.toString(32)), i + "_";
    },
    useSyncExternalStore: function(i, o, f) {
      if (f === void 0)
        throw Error(E(407));
      return f();
    },
    useOptimistic: function(i) {
      return ki(), [i, go];
    },
    useActionState: vo,
    useFormState: vo,
    useHostTransitionStatus: function() {
      return ki(), we;
    },
    useMemoCache: function(i) {
      for (var o = Array(i), f = 0; f < i; f++)
        o[f] = zr;
      return o;
    },
    useCacheRefresh: function() {
      return Dt;
    },
    useEffectEvent: function() {
      return Pc;
    }
  }, Qi = null, eu = {
    getCacheForType: function() {
      throw Error(E(248));
    },
    cacheSignal: function() {
      throw Error(E(248));
    }
  }, Lu, Pi;
  function Ki(i) {
    if (Lu === void 0)
      try {
        throw Error();
      } catch (f) {
        var o = f.stack.trim().match(/\n( *(at )?)/);
        Lu = o && o[1] || "", Pi = -1 < f.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < f.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Lu + i + Pi;
  }
  var yo = !1;
  function Hl(i, o) {
    if (!i || yo) return "";
    yo = !0;
    var f = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var g = {
        DetermineComponentFrameRoot: function() {
          try {
            if (o) {
              var $ = function() {
                throw Error();
              };
              if (Object.defineProperty($.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct($, []);
                } catch (ke) {
                  var fe = ke;
                }
                Reflect.construct(i, [], $);
              } else {
                try {
                  $.call();
                } catch (ke) {
                  fe = ke;
                }
                i.call($.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (ke) {
                fe = ke;
              }
              ($ = i()) && typeof $.catch == "function" && $.catch(function() {
              });
            }
          } catch (ke) {
            if (ke && fe && typeof ke.stack == "string")
              return [ke.stack, fe.stack];
          }
          return [null, null];
        }
      };
      g.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var T = Object.getOwnPropertyDescriptor(
        g.DetermineComponentFrameRoot,
        "name"
      );
      T && T.configurable && Object.defineProperty(
        g.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var k = g.DetermineComponentFrameRoot(), p = k[0], X = k[1];
      if (p && X) {
        var m = p.split(`
`), Y = X.split(`
`);
        for (T = g = 0; g < m.length && !m[g].includes("DetermineComponentFrameRoot"); )
          g++;
        for (; T < Y.length && !Y[T].includes(
          "DetermineComponentFrameRoot"
        ); )
          T++;
        if (g === m.length || T === Y.length)
          for (g = m.length - 1, T = Y.length - 1; 1 <= g && 0 <= T && m[g] !== Y[T]; )
            T--;
        for (; 1 <= g && 0 <= T; g--, T--)
          if (m[g] !== Y[T]) {
            if (g !== 1 || T !== 1)
              do
                if (g--, T--, 0 > T || m[g] !== Y[T]) {
                  var ne = `
` + m[g].replace(" at new ", " at ");
                  return i.displayName && ne.includes("<anonymous>") && (ne = ne.replace("<anonymous>", i.displayName)), ne;
                }
              while (1 <= g && 0 <= T);
            break;
          }
      }
    } finally {
      yo = !1, Error.prepareStackTrace = f;
    }
    return (f = i ? i.displayName || i.name : "") ? Ki(f) : "";
  }
  function qi(i) {
    if (typeof i == "string") return Ki(i);
    if (typeof i == "function")
      return i.prototype && i.prototype.isReactComponent ? Hl(i, !0) : Hl(i, !1);
    if (typeof i == "object" && i !== null) {
      switch (i.$$typeof) {
        case $e:
          return Hl(i.render, !1);
        case ot:
          return Hl(i.type, !1);
        case re:
          var o = i, f = o._payload;
          o = o._init;
          try {
            i = o(f);
          } catch {
            return Ki("Lazy");
          }
          return qi(i);
      }
      if (typeof i.name == "string") {
        e: {
          f = i.name, o = i.env;
          var g = i.debugLocation;
          if (g != null && (i = Error.prepareStackTrace, Error.prepareStackTrace = void 0, g = g.stack, Error.prepareStackTrace = i, g.startsWith(`Error: react-stack-top-frame
`) && (g = g.slice(29)), i = g.indexOf(`
`), i !== -1 && (g = g.slice(i + 1)), i = g.indexOf("react_stack_bottom_frame"), i !== -1 && (i = g.lastIndexOf(`
`, i)), i = i !== -1 ? g = g.slice(0, i) : "", g = i.lastIndexOf(`
`), i = g === -1 ? i : i.slice(g + 1), i.indexOf(f) !== -1)) {
            f = `
` + i;
            break e;
          }
          f = Ki(
            f + (o ? " [" + o + "]" : "")
          );
        }
        return f;
      }
    }
    switch (i) {
      case Re:
        return Ki("SuspenseList");
      case N:
        return Ki("Suspense");
    }
    return "";
  }
  function ji(i, o) {
    return (500 < o.byteSize || !1) && o.contentPreamble === null;
  }
  function pc(i) {
    if (typeof i == "object" && i !== null && typeof i.environmentName == "string") {
      var o = i.environmentName;
      i = [i].slice(0), typeof i[0] == "string" ? i.splice(
        0,
        1,
        "[%s] " + i[0],
        " " + o + " "
      ) : i.splice(0, 0, "[%s]", " " + o + " "), i.unshift(console), o = mu.apply(console.error, i), o();
    } else console.error(i);
    return null;
  }
  function xs(i, o, f, g, T, k, p, X, m, Y, ne) {
    var $ = /* @__PURE__ */ new Set();
    this.destination = null, this.flushScheduled = !1, this.resumableState = i, this.renderState = o, this.rootFormatContext = f, this.progressiveChunkSize = g === void 0 ? 12800 : g, this.status = 10, this.fatalError = null, this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0, this.completedPreambleSegments = this.completedRootSegment = null, this.byteSize = 0, this.abortableTasks = $, this.pingedTasks = [], this.clientRenderedBoundaries = [], this.completedBoundaries = [], this.partialBoundaries = [], this.trackedPostpones = null, this.onError = T === void 0 ? pc : T, this.onPostpone = Y === void 0 ? mt : Y, this.onAllReady = k === void 0 ? mt : k, this.onShellReady = p === void 0 ? mt : p, this.onShellError = X === void 0 ? mt : X, this.onFatalError = m === void 0 ? mt : m, this.formState = ne === void 0 ? null : ne;
  }
  function Ma(i, o, f, g, T, k, p, X, m, Y, ne, $) {
    return o = new xs(
      o,
      f,
      g,
      T,
      k,
      p,
      X,
      m,
      Y,
      ne,
      $
    ), f = rl(
      o,
      0,
      null,
      g,
      !1,
      !1
    ), f.parentFlushed = !0, i = tu(
      o,
      null,
      i,
      -1,
      null,
      f,
      null,
      null,
      o.abortableTasks,
      null,
      g,
      null,
      jo,
      null,
      null
    ), ll(i), o.pingedTasks.push(i), o;
  }
  var Tt = null;
  function ri(i, o) {
    i.pingedTasks.push(o), i.pingedTasks.length === 1 && (i.flushScheduled = i.destination !== null, ls(i));
  }
  function nu(i, o, f, g, T) {
    return f = {
      status: 0,
      rootSegmentID: -1,
      parentFlushed: !1,
      pendingTasks: 0,
      row: o,
      completedSegments: [],
      byteSize: 0,
      fallbackAbortableTasks: f,
      errorDigest: null,
      contentState: cn(),
      fallbackState: cn(),
      contentPreamble: g,
      fallbackPreamble: T,
      trackedContentKeyPath: null,
      trackedFallbackNode: null
    }, o !== null && (o.pendingTasks++, g = o.boundaries, g !== null && (i.allPendingTasks++, f.pendingTasks++, g.push(f)), i = o.inheritedHoistables, i !== null && oo(f.contentState, i)), f;
  }
  function tu(i, o, f, g, T, k, p, X, m, Y, ne, $, fe, ke, Ze) {
    i.allPendingTasks++, T === null ? i.pendingRootTasks++ : T.pendingTasks++, ke !== null && ke.pendingTasks++;
    var De = {
      replay: null,
      node: f,
      childIndex: g,
      ping: function() {
        return ri(i, De);
      },
      blockedBoundary: T,
      blockedSegment: k,
      blockedPreamble: p,
      hoistableState: X,
      abortSet: m,
      keyPath: Y,
      formatContext: ne,
      context: $,
      treeContext: fe,
      row: ke,
      componentStack: Ze,
      thenableState: o
    };
    return m.add(De), De;
  }
  function Hu(i, o, f, g, T, k, p, X, m, Y, ne, $, fe, ke) {
    i.allPendingTasks++, k === null ? i.pendingRootTasks++ : k.pendingTasks++, fe !== null && fe.pendingTasks++, f.pendingTasks++;
    var Ze = {
      replay: f,
      node: g,
      childIndex: T,
      ping: function() {
        return ri(i, Ze);
      },
      blockedBoundary: k,
      blockedSegment: null,
      blockedPreamble: null,
      hoistableState: p,
      abortSet: X,
      keyPath: m,
      formatContext: Y,
      context: ne,
      treeContext: $,
      row: fe,
      componentStack: ke,
      thenableState: o
    };
    return X.add(Ze), Ze;
  }
  function rl(i, o, f, g, T, k) {
    return {
      status: 0,
      parentFlushed: !1,
      id: -1,
      index: o,
      chunks: [],
      children: [],
      preambleChildren: [],
      parentFormatContext: g,
      boundary: f,
      lastPushedText: T,
      textEmbedded: k
    };
  }
  function ll(i) {
    var o = i.node;
    if (typeof o == "object" && o !== null)
      switch (o.$$typeof) {
        case U:
          i.componentStack = { parent: i.componentStack, type: o.type };
      }
  }
  function Wr(i) {
    return i === null ? null : { parent: i.parent, type: "Suspense Fallback" };
  }
  function il(i) {
    var o = {};
    return i && Object.defineProperty(o, "componentStack", {
      configurable: !0,
      enumerable: !0,
      get: function() {
        try {
          var f = "", g = i;
          do
            f += qi(g.type), g = g.parent;
          while (g);
          var T = f;
        } catch (k) {
          T = `
Error generating stack: ` + k.message + `
` + k.stack;
        }
        return Object.defineProperty(o, "componentStack", {
          value: T
        }), T;
      }
    }), o;
  }
  function Fn(i, o, f) {
    if (i = i.onError, o = i(o, f), o == null || typeof o == "string") return o;
  }
  function al(i, o) {
    var f = i.onShellError, g = i.onFatalError;
    f(o), g(o), i.destination !== null ? (i.status = 14, i.destination.destroy(o)) : (i.status = 13, i.fatalError = o);
  }
  function Un(i, o) {
    zl(i, o.next, o.hoistables);
  }
  function zl(i, o, f) {
    for (; o !== null; ) {
      f !== null && (oo(o.hoistables, f), o.inheritedHoistables = f);
      var g = o.boundaries;
      if (g !== null) {
        o.boundaries = null;
        for (var T = 0; T < g.length; T++) {
          var k = g[T];
          f !== null && oo(k.contentState, f), pi(i, k, null, null);
        }
      }
      if (o.pendingTasks--, 0 < o.pendingTasks) break;
      f = o.hoistables, o = o.next;
    }
  }
  function zu(i, o) {
    var f = o.boundaries;
    if (f !== null && o.pendingTasks === f.length) {
      for (var g = !0, T = 0; T < f.length; T++) {
        var k = f[T];
        if (k.pendingTasks !== 1 || k.parentFlushed || ji(i, k)) {
          g = !1;
          break;
        }
      }
      g && zl(i, o, o.hoistables);
    }
  }
  function Bu(i) {
    var o = {
      pendingTasks: 1,
      boundaries: null,
      hoistables: cn(),
      inheritedHoistables: null,
      together: !1,
      next: null
    };
    return i !== null && 0 < i.pendingTasks && (o.pendingTasks++, o.boundaries = [], i.next = o), o;
  }
  function Nu(i, o, f, g, T) {
    var k = o.keyPath, p = o.treeContext, X = o.row;
    o.keyPath = f, f = g.length;
    var m = null;
    if (o.replay !== null) {
      var Y = o.replay.slots;
      if (Y !== null && typeof Y == "object")
        for (var ne = 0; ne < f; ne++) {
          var $ = T !== "backwards" && T !== "unstable_legacy-backwards" ? ne : f - 1 - ne, fe = g[$];
          o.row = m = Bu(
            m
          ), o.treeContext = pr(p, f, $);
          var ke = Y[$];
          typeof ke == "number" ? (iu(i, o, ke, fe, $), delete Y[$]) : Ut(i, o, fe, $), --m.pendingTasks === 0 && Un(i, m);
        }
      else
        for (Y = 0; Y < f; Y++)
          ne = T !== "backwards" && T !== "unstable_legacy-backwards" ? Y : f - 1 - Y, $ = g[ne], o.row = m = Bu(m), o.treeContext = pr(p, f, ne), Ut(i, o, $, ne), --m.pendingTasks === 0 && Un(i, m);
    } else if (T !== "backwards" && T !== "unstable_legacy-backwards")
      for (T = 0; T < f; T++)
        Y = g[T], o.row = m = Bu(m), o.treeContext = pr(
          p,
          f,
          T
        ), Ut(i, o, Y, T), --m.pendingTasks === 0 && Un(i, m);
    else {
      for (T = o.blockedSegment, Y = T.children.length, ne = T.chunks.length, $ = f - 1; 0 <= $; $--) {
        fe = g[$], o.row = m = Bu(
          m
        ), o.treeContext = pr(p, f, $), ke = rl(
          i,
          ne,
          null,
          o.formatContext,
          $ === 0 ? T.lastPushedText : !0,
          !0
        ), T.children.splice(Y, 0, ke), o.blockedSegment = ke;
        try {
          Ut(i, o, fe, $), jl(
            ke.chunks,
            i.renderState,
            ke.lastPushedText,
            ke.textEmbedded
          ), ke.status = 1, --m.pendingTasks === 0 && Un(i, m);
        } catch (Ze) {
          throw ke.status = i.status === 12 ? 3 : 4, Ze;
        }
      }
      o.blockedSegment = T, T.lastPushedText = !1;
    }
    X !== null && m !== null && 0 < m.pendingTasks && (X.pendingTasks++, m.next = X), o.treeContext = p, o.row = X, o.keyPath = k;
  }
  function ru(i, o, f, g, T, k) {
    var p = o.thenableState;
    for (o.thenableState = null, ei = {}, fo = o, Ei = i, Ri = f, At = ni = 0, Vi = -1, Pa = 0, ti = p, i = g(T, k); yt; )
      yt = !1, At = ni = 0, Vi = -1, Pa = 0, wt += 1, We = null, i = g(T, k);
    return pa(), i;
  }
  function Fi(i, o, f, g, T, k, p) {
    var X = !1;
    if (k !== 0 && i.formState !== null) {
      var m = o.blockedSegment;
      if (m !== null) {
        X = !0, m = m.chunks;
        for (var Y = 0; Y < k; Y++)
          Y === p ? m.push("<!--F!-->") : m.push("<!--F-->");
      }
    }
    k = o.keyPath, o.keyPath = f, T ? (f = o.treeContext, o.treeContext = pr(f, 1, 0), Ut(i, o, g, -1), o.treeContext = f) : X ? Ut(i, o, g, -1) : Ir(i, o, g, -1), o.keyPath = k;
  }
  function lu(i, o, f, g, T, k) {
    if (typeof g == "function")
      if (g.prototype && g.prototype.isReactComponent) {
        var p = T;
        if ("ref" in T) {
          p = {};
          for (var X in T)
            X !== "ref" && (p[X] = T[X]);
        }
        var m = g.defaultProps;
        if (m) {
          p === T && (p = mn({}, p, T));
          for (var Y in m)
            p[Y] === void 0 && (p[Y] = m[Y]);
        }
        T = p, p = pt, m = g.contextType, typeof m == "object" && m !== null && (p = m._currentValue2), p = new g(T, p);
        var ne = p.state !== void 0 ? p.state : null;
        if (p.updater = Rc, p.props = T, p.state = ne, m = { queue: [], replace: !1 }, p._reactInternals = m, k = g.contextType, p.context = typeof k == "object" && k !== null ? k._currentValue2 : pt, k = g.getDerivedStateFromProps, typeof k == "function" && (k = k(T, ne), ne = k == null ? ne : mn({}, ne, k), p.state = ne), typeof g.getDerivedStateFromProps != "function" && typeof p.getSnapshotBeforeUpdate != "function" && (typeof p.UNSAFE_componentWillMount == "function" || typeof p.componentWillMount == "function"))
          if (g = p.state, typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), g !== p.state && Rc.enqueueReplaceState(
            p,
            p.state,
            null
          ), m.queue !== null && 0 < m.queue.length)
            if (g = m.queue, k = m.replace, m.queue = null, m.replace = !1, k && g.length === 1)
              p.state = g[0];
            else {
              for (m = k ? g[0] : p.state, ne = !0, k = k ? 1 : 0; k < g.length; k++)
                Y = g[k], Y = typeof Y == "function" ? Y.call(p, m, T, void 0) : Y, Y != null && (ne ? (ne = !1, m = mn({}, m, Y)) : mn(m, Y));
              p.state = m;
            }
          else m.queue = null;
        if (g = p.render(), i.status === 12) throw null;
        T = o.keyPath, o.keyPath = f, Ir(i, o, g, -1), o.keyPath = T;
      } else {
        if (g = ru(i, o, f, g, T, void 0), i.status === 12) throw null;
        Fi(
          i,
          o,
          f,
          g,
          ni !== 0,
          At,
          Vi
        );
      }
    else if (typeof g == "string")
      if (p = o.blockedSegment, p === null)
        p = T.children, m = o.formatContext, ne = o.keyPath, o.formatContext = pu(m, g, T), o.keyPath = f, Ut(i, o, p, -1), o.formatContext = m, o.keyPath = ne;
      else {
        if (ne = Nn(
          p.chunks,
          g,
          T,
          i.resumableState,
          i.renderState,
          o.blockedPreamble,
          o.hoistableState,
          o.formatContext,
          p.lastPushedText
        ), p.lastPushedText = !1, m = o.formatContext, k = o.keyPath, o.keyPath = f, (o.formatContext = pu(m, g, T)).insertionMode === 3) {
          f = rl(
            i,
            0,
            null,
            o.formatContext,
            !1,
            !1
          ), p.preambleChildren.push(f), o.blockedSegment = f;
          try {
            f.status = 6, Ut(i, o, ne, -1), jl(
              f.chunks,
              i.renderState,
              f.lastPushedText,
              f.textEmbedded
            ), f.status = 1;
          } finally {
            o.blockedSegment = p;
          }
        } else Ut(i, o, ne, -1);
        o.formatContext = m, o.keyPath = k;
        e: {
          switch (o = p.chunks, i = i.resumableState, g) {
            case "title":
            case "style":
            case "script":
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
              break e;
            case "body":
              if (1 >= m.insertionMode) {
                i.hasBody = !0;
                break e;
              }
              break;
            case "html":
              if (m.insertionMode === 0) {
                i.hasHtml = !0;
                break e;
              }
              break;
            case "head":
              if (1 >= m.insertionMode) break e;
          }
          o.push(Ea(g));
        }
        p.lastPushedText = !1;
      }
    else {
      switch (g) {
        case Vl:
        case de:
        case Te:
        case q:
          g = o.keyPath, o.keyPath = f, Ir(i, o, T.children, -1), o.keyPath = g;
          return;
        case Qn:
          g = o.blockedSegment, g === null ? T.mode !== "hidden" && (g = o.keyPath, o.keyPath = f, Ut(i, o, T.children, -1), o.keyPath = g) : T.mode !== "hidden" && (i.renderState.generateStaticMarkup || g.chunks.push("<!--&-->"), g.lastPushedText = !1, p = o.keyPath, o.keyPath = f, Ut(i, o, T.children, -1), o.keyPath = p, i.renderState.generateStaticMarkup || g.chunks.push("<!--/&-->"), g.lastPushedText = !1);
          return;
        case Re:
          e: {
            if (g = T.children, T = T.revealOrder, T === "forwards" || T === "backwards" || T === "unstable_legacy-backwards") {
              if (Ce(g)) {
                Nu(i, o, f, g, T);
                break e;
              }
              if ((p = ut(g)) && (p = p.call(g))) {
                if (m = p.next(), !m.done) {
                  do
                    m = p.next();
                  while (!m.done);
                  Nu(i, o, f, g, T);
                }
                break e;
              }
            }
            T === "together" ? (T = o.keyPath, p = o.row, m = o.row = Bu(null), m.boundaries = [], m.together = !0, o.keyPath = f, Ir(i, o, g, -1), --m.pendingTasks === 0 && Un(i, m), o.keyPath = T, o.row = p, p !== null && 0 < m.pendingTasks && (p.pendingTasks++, m.next = p)) : (T = o.keyPath, o.keyPath = f, Ir(i, o, g, -1), o.keyPath = T);
          }
          return;
        case $r:
        case Z:
          throw Error(E(343));
        case N:
          e: if (o.replay !== null) {
            g = o.keyPath, p = o.formatContext, m = o.row, o.keyPath = f, o.formatContext = wn(
              i.resumableState,
              p
            ), o.row = null, f = T.children;
            try {
              Ut(i, o, f, -1);
            } finally {
              o.keyPath = g, o.formatContext = p, o.row = m;
            }
          } else {
            g = o.keyPath, k = o.formatContext;
            var $ = o.row, fe = o.blockedBoundary;
            Y = o.blockedPreamble;
            var ke = o.hoistableState;
            X = o.blockedSegment;
            var Ze = T.fallback;
            T = T.children;
            var De = /* @__PURE__ */ new Set(), pe = nu(
              i,
              o.row,
              De,
              null,
              null
            );
            i.trackedPostpones !== null && (pe.trackedContentKeyPath = f);
            var Be = rl(
              i,
              X.chunks.length,
              pe,
              o.formatContext,
              !1,
              !1
            );
            X.children.push(Be), X.lastPushedText = !1;
            var me = rl(
              i,
              0,
              null,
              o.formatContext,
              !1,
              !1
            );
            if (me.parentFlushed = !0, i.trackedPostpones !== null) {
              p = o.componentStack, m = [f[0], "Suspense Fallback", f[2]], ne = [m[1], m[2], [], null], i.trackedPostpones.workingMap.set(m, ne), pe.trackedFallbackNode = ne, o.blockedSegment = Be, o.blockedPreamble = pe.fallbackPreamble, o.keyPath = m, o.formatContext = bt(
                i.resumableState,
                k
              ), o.componentStack = Wr(p), Be.status = 6;
              try {
                Ut(i, o, Ze, -1), jl(
                  Be.chunks,
                  i.renderState,
                  Be.lastPushedText,
                  Be.textEmbedded
                ), Be.status = 1;
              } catch (Gn) {
                throw Be.status = i.status === 12 ? 3 : 4, Gn;
              } finally {
                o.blockedSegment = X, o.blockedPreamble = Y, o.keyPath = g, o.formatContext = k;
              }
              o = tu(
                i,
                null,
                T,
                -1,
                pe,
                me,
                pe.contentPreamble,
                pe.contentState,
                o.abortSet,
                f,
                wn(
                  i.resumableState,
                  o.formatContext
                ),
                o.context,
                o.treeContext,
                null,
                p
              ), ll(o), i.pingedTasks.push(o);
            } else {
              o.blockedBoundary = pe, o.blockedPreamble = pe.contentPreamble, o.hoistableState = pe.contentState, o.blockedSegment = me, o.keyPath = f, o.formatContext = wn(
                i.resumableState,
                k
              ), o.row = null, me.status = 6;
              try {
                if (Ut(i, o, T, -1), jl(
                  me.chunks,
                  i.renderState,
                  me.lastPushedText,
                  me.textEmbedded
                ), me.status = 1, Kt(pe, me), pe.pendingTasks === 0 && pe.status === 0) {
                  if (pe.status = 1, !ji(i, pe)) {
                    $ !== null && --$.pendingTasks === 0 && Un(i, $), i.pendingRootTasks === 0 && o.blockedPreamble && ma(i);
                    break e;
                  }
                } else
                  $ !== null && $.together && zu(i, $);
              } catch (Gn) {
                pe.status = 4, i.status === 12 ? (me.status = 3, p = i.fatalError) : (me.status = 4, p = Gn), m = il(o.componentStack), ne = Fn(
                  i,
                  p,
                  m
                ), pe.errorDigest = ne, Oa(i, pe);
              } finally {
                o.blockedBoundary = fe, o.blockedPreamble = Y, o.hoistableState = ke, o.blockedSegment = X, o.keyPath = g, o.formatContext = k, o.row = $;
              }
              o = tu(
                i,
                null,
                Ze,
                -1,
                fe,
                Be,
                pe.fallbackPreamble,
                pe.fallbackState,
                De,
                [f[0], "Suspense Fallback", f[2]],
                bt(
                  i.resumableState,
                  o.formatContext
                ),
                o.context,
                o.treeContext,
                o.row,
                Wr(
                  o.componentStack
                )
              ), ll(o), i.pingedTasks.push(o);
            }
          }
          return;
      }
      if (typeof g == "object" && g !== null)
        switch (g.$$typeof) {
          case $e:
            if ("ref" in T)
              for (Ze in p = {}, T)
                Ze !== "ref" && (p[Ze] = T[Ze]);
            else p = T;
            g = ru(
              i,
              o,
              f,
              g.render,
              p,
              k
            ), Fi(
              i,
              o,
              f,
              g,
              ni !== 0,
              At,
              Vi
            );
            return;
          case ot:
            lu(i, o, f, g.type, T, k);
            return;
          case _e:
            if (m = T.children, p = o.keyPath, T = T.value, ne = g._currentValue2, g._currentValue2 = T, k = co, co = g = {
              parent: k,
              depth: k === null ? 0 : k.depth + 1,
              context: g,
              parentValue: ne,
              value: T
            }, o.context = g, o.keyPath = f, Ir(i, o, m, -1), i = co, i === null) throw Error(E(403));
            i.context._currentValue2 = i.parentValue, i = co = i.parent, o.context = i, o.keyPath = p;
            return;
          case Ae:
            T = T.children, g = T(g._context._currentValue2), T = o.keyPath, o.keyPath = f, Ir(i, o, g, -1), o.keyPath = T;
            return;
          case re:
            if (p = g._init, g = p(g._payload), i.status === 12) throw null;
            lu(i, o, f, g, T, k);
            return;
        }
      throw Error(
        E(130, g == null ? g : typeof g, "")
      );
    }
  }
  function iu(i, o, f, g, T) {
    var k = o.replay, p = o.blockedBoundary, X = rl(
      i,
      0,
      null,
      o.formatContext,
      !1,
      !1
    );
    X.id = f, X.parentFlushed = !0;
    try {
      o.replay = null, o.blockedSegment = X, Ut(i, o, g, T), X.status = 1, p === null ? i.completedRootSegment = X : (Kt(p, X), p.parentFlushed && i.partialBoundaries.push(p));
    } finally {
      o.replay = k, o.blockedSegment = null;
    }
  }
  function Ir(i, o, f, g) {
    o.replay !== null && typeof o.replay.slots == "number" ? iu(i, o, o.replay.slots, f, g) : (o.node = f, o.childIndex = g, f = o.componentStack, ll(o), Yn(i, o), o.componentStack = f);
  }
  function Yn(i, o) {
    var f = o.node, g = o.childIndex;
    if (f !== null) {
      if (typeof f == "object") {
        switch (f.$$typeof) {
          case U:
            var T = f.type, k = f.key, p = f.props;
            f = p.ref;
            var X = f !== void 0 ? f : null, m = Qo(T), Y = k ?? (g === -1 ? 0 : g);
            if (k = [o.keyPath, m, Y], o.replay !== null)
              e: {
                var ne = o.replay;
                for (g = ne.nodes, f = 0; f < g.length; f++) {
                  var $ = g[f];
                  if (Y === $[1]) {
                    if ($.length === 4) {
                      if (m !== null && m !== $[0])
                        throw Error(
                          E(490, $[0], m)
                        );
                      var fe = $[2];
                      m = $[3], Y = o.node, o.replay = {
                        nodes: fe,
                        slots: m,
                        pendingTasks: 1
                      };
                      try {
                        if (lu(i, o, k, T, p, X), o.replay.pendingTasks === 1 && 0 < o.replay.nodes.length)
                          throw Error(E(488));
                        o.replay.pendingTasks--;
                      } catch (bn) {
                        if (typeof bn == "object" && bn !== null && (bn === Dn || typeof bn.then == "function"))
                          throw o.node === Y ? o.replay = ne : g.splice(f, 1), bn;
                        o.replay.pendingTasks--, p = il(o.componentStack), k = i, i = o.blockedBoundary, T = bn, p = Fn(k, T, p), Bl(
                          k,
                          i,
                          fe,
                          m,
                          T,
                          p
                        );
                      }
                      o.replay = ne;
                    } else {
                      if (T !== N)
                        throw Error(
                          E(
                            490,
                            "Suspense",
                            Qo(T) || "Unknown"
                          )
                        );
                      n: {
                        ne = void 0, T = $[5], X = $[2], m = $[3], Y = $[4] === null ? [] : $[4][2], $ = $[4] === null ? null : $[4][3];
                        var ke = o.keyPath, Ze = o.formatContext, De = o.row, pe = o.replay, Be = o.blockedBoundary, me = o.hoistableState, Gn = p.children, Ve = p.fallback, rn = /* @__PURE__ */ new Set();
                        p = nu(
                          i,
                          o.row,
                          rn,
                          null,
                          null
                        ), p.parentFlushed = !0, p.rootSegmentID = T, o.blockedBoundary = p, o.hoistableState = p.contentState, o.keyPath = k, o.formatContext = wn(
                          i.resumableState,
                          Ze
                        ), o.row = null, o.replay = {
                          nodes: X,
                          slots: m,
                          pendingTasks: 1
                        };
                        try {
                          if (Ut(i, o, Gn, -1), o.replay.pendingTasks === 1 && 0 < o.replay.nodes.length)
                            throw Error(E(488));
                          if (o.replay.pendingTasks--, p.pendingTasks === 0 && p.status === 0) {
                            p.status = 1, i.completedBoundaries.push(p);
                            break n;
                          }
                        } catch (bn) {
                          p.status = 4, fe = il(o.componentStack), ne = Fn(
                            i,
                            bn,
                            fe
                          ), p.errorDigest = ne, o.replay.pendingTasks--, i.clientRenderedBoundaries.push(p);
                        } finally {
                          o.blockedBoundary = Be, o.hoistableState = me, o.replay = pe, o.keyPath = ke, o.formatContext = Ze, o.row = De;
                        }
                        fe = Hu(
                          i,
                          null,
                          {
                            nodes: Y,
                            slots: $,
                            pendingTasks: 0
                          },
                          Ve,
                          -1,
                          Be,
                          p.fallbackState,
                          rn,
                          [k[0], "Suspense Fallback", k[2]],
                          bt(
                            i.resumableState,
                            o.formatContext
                          ),
                          o.context,
                          o.treeContext,
                          o.row,
                          Wr(
                            o.componentStack
                          )
                        ), ll(fe), i.pingedTasks.push(fe);
                      }
                    }
                    g.splice(f, 1);
                    break e;
                  }
                }
              }
            else lu(i, o, k, T, p, X);
            return;
          case j:
            throw Error(E(257));
          case re:
            if (fe = f._init, f = fe(f._payload), i.status === 12) throw null;
            Ir(i, o, f, g);
            return;
        }
        if (Ce(f)) {
          sn(i, o, f, g);
          return;
        }
        if ((fe = ut(f)) && (fe = fe.call(f))) {
          if (f = fe.next(), !f.done) {
            p = [];
            do
              p.push(f.value), f = fe.next();
            while (!f.done);
            sn(i, o, p, g);
          }
          return;
        }
        if (typeof f.then == "function")
          return o.thenableState = null, Ir(i, o, bo(f), g);
        if (f.$$typeof === _e)
          return Ir(
            i,
            o,
            f._currentValue2,
            g
          );
        throw g = Object.prototype.toString.call(f), Error(
          E(
            31,
            g === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : g
          )
        );
      }
      typeof f == "string" ? (g = o.blockedSegment, g !== null && (g.lastPushedText = ql(
        g.chunks,
        f,
        i.renderState,
        g.lastPushedText
      ))) : (typeof f == "number" || typeof f == "bigint") && (g = o.blockedSegment, g !== null && (g.lastPushedText = ql(
        g.chunks,
        "" + f,
        i.renderState,
        g.lastPushedText
      )));
    }
  }
  function sn(i, o, f, g) {
    var T = o.keyPath;
    if (g !== -1 && (o.keyPath = [o.keyPath, "Fragment", g], o.replay !== null)) {
      for (var k = o.replay, p = k.nodes, X = 0; X < p.length; X++) {
        var m = p[X];
        if (m[1] === g) {
          g = m[2], m = m[3], o.replay = { nodes: g, slots: m, pendingTasks: 1 };
          try {
            if (sn(i, o, f, -1), o.replay.pendingTasks === 1 && 0 < o.replay.nodes.length)
              throw Error(E(488));
            o.replay.pendingTasks--;
          } catch ($) {
            if (typeof $ == "object" && $ !== null && ($ === Dn || typeof $.then == "function"))
              throw $;
            o.replay.pendingTasks--, f = il(o.componentStack);
            var Y = o.blockedBoundary, ne = $;
            f = Fn(i, ne, f), Bl(
              i,
              Y,
              g,
              m,
              ne,
              f
            );
          }
          o.replay = k, p.splice(X, 1);
          break;
        }
      }
      o.keyPath = T;
      return;
    }
    if (k = o.treeContext, p = f.length, o.replay !== null && (X = o.replay.slots, X !== null && typeof X == "object")) {
      for (g = 0; g < p; g++)
        m = f[g], o.treeContext = pr(k, p, g), Y = X[g], typeof Y == "number" ? (iu(i, o, Y, m, g), delete X[g]) : Ut(i, o, m, g);
      o.treeContext = k, o.keyPath = T;
      return;
    }
    for (X = 0; X < p; X++)
      g = f[X], o.treeContext = pr(k, p, X), Ut(i, o, g, X);
    o.treeContext = k, o.keyPath = T;
  }
  function $i(i, o, f) {
    if (f.status = 5, f.rootSegmentID = i.nextSegmentId++, i = f.trackedContentKeyPath, i === null) throw Error(E(486));
    var g = f.trackedFallbackNode, T = [], k = o.workingMap.get(i);
    return k === void 0 ? (f = [
      i[1],
      i[2],
      T,
      null,
      g,
      f.rootSegmentID
    ], o.workingMap.set(i, f), jn(f, i[0], o), f) : (k[4] = g, k[5] = f.rootSegmentID, k);
  }
  function Ia(i, o, f, g) {
    g.status = 5;
    var T = f.keyPath, k = f.blockedBoundary;
    if (k === null)
      g.id = i.nextSegmentId++, o.rootSlots = g.id, i.completedRootSegment !== null && (i.completedRootSegment.status = 5);
    else {
      if (k !== null && k.status === 0) {
        var p = $i(
          i,
          o,
          k
        );
        if (k.trackedContentKeyPath === T && f.childIndex === -1) {
          g.id === -1 && (g.id = g.parentFlushed ? k.rootSegmentID : i.nextSegmentId++), p[3] = g.id;
          return;
        }
      }
      if (g.id === -1 && (g.id = g.parentFlushed && k !== null ? k.rootSegmentID : i.nextSegmentId++), f.childIndex === -1)
        T === null ? o.rootSlots = g.id : (f = o.workingMap.get(T), f === void 0 ? (f = [T[1], T[2], [], g.id], jn(f, T[0], o)) : f[3] = g.id);
      else {
        if (T === null) {
          if (i = o.rootSlots, i === null)
            i = o.rootSlots = {};
          else if (typeof i == "number")
            throw Error(E(491));
        } else if (k = o.workingMap, p = k.get(T), p === void 0)
          i = {}, p = [T[1], T[2], [], i], k.set(T, p), jn(p, T[0], o);
        else if (i = p[3], i === null)
          i = p[3] = {};
        else if (typeof i == "number")
          throw Error(E(491));
        i[f.childIndex] = g.id;
      }
    }
  }
  function Oa(i, o) {
    i = i.trackedPostpones, i !== null && (o = o.trackedContentKeyPath, o !== null && (o = i.workingMap.get(o), o !== void 0 && (o.length = 4, o[2] = [], o[3] = null)));
  }
  function ea(i, o, f) {
    return Hu(
      i,
      f,
      o.replay,
      o.node,
      o.childIndex,
      o.blockedBoundary,
      o.hoistableState,
      o.abortSet,
      o.keyPath,
      o.formatContext,
      o.context,
      o.treeContext,
      o.row,
      o.componentStack
    );
  }
  function Ac(i, o, f) {
    var g = o.blockedSegment, T = rl(
      i,
      g.chunks.length,
      null,
      o.formatContext,
      g.lastPushedText,
      !0
    );
    return g.children.push(T), g.lastPushedText = !1, tu(
      i,
      f,
      o.node,
      o.childIndex,
      o.blockedBoundary,
      T,
      o.blockedPreamble,
      o.hoistableState,
      o.abortSet,
      o.keyPath,
      o.formatContext,
      o.context,
      o.treeContext,
      o.row,
      o.componentStack
    );
  }
  function Ut(i, o, f, g) {
    var T = o.formatContext, k = o.context, p = o.keyPath, X = o.treeContext, m = o.componentStack, Y = o.blockedSegment;
    if (Y === null) {
      Y = o.replay;
      try {
        return Ir(i, o, f, g);
      } catch (fe) {
        if (pa(), f = fe === Dn ? ml() : fe, i.status !== 12 && typeof f == "object" && f !== null) {
          if (typeof f.then == "function") {
            g = fe === Dn ? Ji() : null, i = ea(i, o, g).ping, f.then(i, i), o.formatContext = T, o.context = k, o.keyPath = p, o.treeContext = X, o.componentStack = m, o.replay = Y, _l(k);
            return;
          }
          if (f.message === "Maximum call stack size exceeded") {
            f = fe === Dn ? Ji() : null, f = ea(i, o, f), i.pingedTasks.push(f), o.formatContext = T, o.context = k, o.keyPath = p, o.treeContext = X, o.componentStack = m, o.replay = Y, _l(k);
            return;
          }
        }
      }
    } else {
      var ne = Y.children.length, $ = Y.chunks.length;
      try {
        return Ir(i, o, f, g);
      } catch (fe) {
        if (pa(), Y.children.length = ne, Y.chunks.length = $, f = fe === Dn ? ml() : fe, i.status !== 12 && typeof f == "object" && f !== null) {
          if (typeof f.then == "function") {
            Y = f, f = fe === Dn ? Ji() : null, i = Ac(i, o, f).ping, Y.then(i, i), o.formatContext = T, o.context = k, o.keyPath = p, o.treeContext = X, o.componentStack = m, _l(k);
            return;
          }
          if (f.message === "Maximum call stack size exceeded") {
            Y = fe === Dn ? Ji() : null, Y = Ac(i, o, Y), i.pingedTasks.push(Y), o.formatContext = T, o.context = k, o.keyPath = p, o.treeContext = X, o.componentStack = m, _l(k);
            return;
          }
        }
      }
    }
    throw o.formatContext = T, o.context = k, o.keyPath = p, o.treeContext = X, _l(k), f;
  }
  function Es(i) {
    var o = i.blockedBoundary, f = i.blockedSegment;
    f !== null && (f.status = 3, pi(this, o, i.row, f));
  }
  function Bl(i, o, f, g, T, k) {
    for (var p = 0; p < f.length; p++) {
      var X = f[p];
      if (X.length === 4)
        Bl(
          i,
          o,
          X[2],
          X[3],
          T,
          k
        );
      else {
        X = X[5];
        var m = i, Y = k, ne = nu(
          m,
          null,
          /* @__PURE__ */ new Set(),
          null,
          null
        );
        ne.parentFlushed = !0, ne.rootSegmentID = X, ne.status = 4, ne.errorDigest = Y, ne.parentFlushed && m.clientRenderedBoundaries.push(ne);
      }
    }
    if (f.length = 0, g !== null) {
      if (o === null) throw Error(E(487));
      if (o.status !== 4 && (o.status = 4, o.errorDigest = k, o.parentFlushed && i.clientRenderedBoundaries.push(o)), typeof g == "object") for (var $ in g) delete g[$];
    }
  }
  function rs(i, o, f) {
    var g = i.blockedBoundary, T = i.blockedSegment;
    if (T !== null) {
      if (T.status === 6) return;
      T.status = 3;
    }
    var k = il(i.componentStack);
    if (g === null) {
      if (o.status !== 13 && o.status !== 14) {
        if (g = i.replay, g === null) {
          o.trackedPostpones !== null && T !== null ? (g = o.trackedPostpones, Fn(o, f, k), Ia(o, g, i, T), pi(o, null, i.row, T)) : (Fn(o, f, k), al(o, f));
          return;
        }
        g.pendingTasks--, g.pendingTasks === 0 && 0 < g.nodes.length && (T = Fn(o, f, k), Bl(
          o,
          null,
          g.nodes,
          g.slots,
          f,
          T
        )), o.pendingRootTasks--, o.pendingRootTasks === 0 && li(o);
      }
    } else {
      var p = o.trackedPostpones;
      if (g.status !== 4) {
        if (p !== null && T !== null)
          return Fn(o, f, k), Ia(o, p, i, T), g.fallbackAbortableTasks.forEach(function(X) {
            return rs(X, o, f);
          }), g.fallbackAbortableTasks.clear(), pi(o, g, i.row, T);
        g.status = 4, T = Fn(o, f, k), g.status = 4, g.errorDigest = T, Oa(o, g), g.parentFlushed && o.clientRenderedBoundaries.push(g);
      }
      g.pendingTasks--, T = g.row, T !== null && --T.pendingTasks === 0 && Un(o, T), g.fallbackAbortableTasks.forEach(function(X) {
        return rs(X, o, f);
      }), g.fallbackAbortableTasks.clear();
    }
    i = i.row, i !== null && --i.pendingTasks === 0 && Un(o, i), o.allPendingTasks--, o.allPendingTasks === 0 && au(o);
  }
  function Mc(i, o) {
    try {
      var f = i.renderState, g = f.onHeaders;
      if (g) {
        var T = f.headers;
        if (T) {
          f.headers = null;
          var k = T.preconnects;
          if (T.fontPreloads && (k && (k += ", "), k += T.fontPreloads), T.highImagePreloads && (k && (k += ", "), k += T.highImagePreloads), !o) {
            var p = f.styles.values(), X = p.next();
            e: for (; 0 < T.remainingCapacity && !X.done; X = p.next())
              for (var m = X.value.sheets.values(), Y = m.next(); 0 < T.remainingCapacity && !Y.done; Y = m.next()) {
                var ne = Y.value, $ = ne.props, fe = $.href, ke = ne.props, Ze = Wn(ke.href, "style", {
                  crossOrigin: ke.crossOrigin,
                  integrity: ke.integrity,
                  nonce: ke.nonce,
                  type: ke.type,
                  fetchPriority: ke.fetchPriority,
                  referrerPolicy: ke.referrerPolicy,
                  media: ke.media
                });
                if (0 <= (T.remainingCapacity -= Ze.length + 2))
                  f.resets.style[fe] = Bn, k && (k += ", "), k += Ze, f.resets.style[fe] = typeof $.crossOrigin == "string" || typeof $.integrity == "string" ? [$.crossOrigin, $.integrity] : Bn;
                else break e;
              }
          }
          g(k ? { Link: k } : {});
        }
      }
    } catch (De) {
      Fn(i, De, {});
    }
  }
  function li(i) {
    i.trackedPostpones === null && Mc(i, !0), i.trackedPostpones === null && ma(i), i.onShellError = mt, i = i.onShellReady, i();
  }
  function au(i) {
    Mc(
      i,
      i.trackedPostpones === null ? !0 : i.completedRootSegment === null || i.completedRootSegment.status !== 5
    ), ma(i), i = i.onAllReady, i();
  }
  function Kt(i, o) {
    if (o.chunks.length === 0 && o.children.length === 1 && o.children[0].boundary === null && o.children[0].id === -1) {
      var f = o.children[0];
      f.id = o.id, f.parentFlushed = !0, f.status !== 1 && f.status !== 3 && f.status !== 4 || Kt(i, f);
    } else i.completedSegments.push(o);
  }
  function pi(i, o, f, g) {
    if (f !== null && (--f.pendingTasks === 0 ? Un(i, f) : f.together && zu(i, f)), i.allPendingTasks--, o === null) {
      if (g !== null && g.parentFlushed) {
        if (i.completedRootSegment !== null)
          throw Error(E(389));
        i.completedRootSegment = g;
      }
      i.pendingRootTasks--, i.pendingRootTasks === 0 && li(i);
    } else if (o.pendingTasks--, o.status !== 4)
      if (o.pendingTasks === 0) {
        if (o.status === 0 && (o.status = 1), g !== null && g.parentFlushed && (g.status === 1 || g.status === 3) && Kt(o, g), o.parentFlushed && i.completedBoundaries.push(o), o.status === 1)
          f = o.row, f !== null && oo(f.hoistables, o.contentState), ji(i, o) || (o.fallbackAbortableTasks.forEach(Es, i), o.fallbackAbortableTasks.clear(), f !== null && --f.pendingTasks === 0 && Un(i, f)), i.pendingRootTasks === 0 && i.trackedPostpones === null && o.contentPreamble !== null && ma(i);
        else if (o.status === 5 && (o = o.row, o !== null)) {
          if (i.trackedPostpones !== null) {
            f = i.trackedPostpones;
            var T = o.next;
            if (T !== null && (g = T.boundaries, g !== null))
              for (T.boundaries = null, T = 0; T < g.length; T++) {
                var k = g[T];
                $i(i, f, k), pi(i, k, null, null);
              }
          }
          --o.pendingTasks === 0 && Un(i, o);
        }
      } else
        g === null || !g.parentFlushed || g.status !== 1 && g.status !== 3 || (Kt(o, g), o.completedSegments.length === 1 && o.parentFlushed && i.partialBoundaries.push(o)), o = o.row, o !== null && o.together && zu(i, o);
    i.allPendingTasks === 0 && au(i);
  }
  function ls(i) {
    if (i.status !== 14 && i.status !== 13) {
      var o = co, f = be.H;
      be.H = ts;
      var g = be.A;
      be.A = eu;
      var T = Tt;
      Tt = i;
      var k = Qi;
      Qi = i.resumableState;
      try {
        var p = i.pingedTasks, X;
        for (X = 0; X < p.length; X++) {
          var m = p[X], Y = i, ne = m.blockedSegment;
          if (ne === null) {
            var $ = Y;
            if (m.replay.pendingTasks !== 0) {
              _l(m.context);
              try {
                if (typeof m.replay.slots == "number" ? iu(
                  $,
                  m,
                  m.replay.slots,
                  m.node,
                  m.childIndex
                ) : Yn($, m), m.replay.pendingTasks === 1 && 0 < m.replay.nodes.length)
                  throw Error(E(488));
                m.replay.pendingTasks--, m.abortSet.delete(m), pi(
                  $,
                  m.blockedBoundary,
                  m.row,
                  null
                );
              } catch (Ne) {
                pa();
                var fe = Ne === Dn ? ml() : Ne;
                if (typeof fe == "object" && fe !== null && typeof fe.then == "function") {
                  var ke = m.ping;
                  fe.then(ke, ke), m.thenableState = Ne === Dn ? Ji() : null;
                } else {
                  m.replay.pendingTasks--, m.abortSet.delete(m);
                  var Ze = il(m.componentStack);
                  Y = void 0;
                  var De = $, pe = m.blockedBoundary, Be = $.status === 12 ? $.fatalError : fe, me = m.replay.nodes, Gn = m.replay.slots;
                  Y = Fn(
                    De,
                    Be,
                    Ze
                  ), Bl(
                    De,
                    pe,
                    me,
                    Gn,
                    Be,
                    Y
                  ), $.pendingRootTasks--, $.pendingRootTasks === 0 && li($), $.allPendingTasks--, $.allPendingTasks === 0 && au($);
                }
              } finally {
              }
            }
          } else if ($ = void 0, De = ne, De.status === 0) {
            De.status = 6, _l(m.context);
            var Ve = De.children.length, rn = De.chunks.length;
            try {
              Yn(Y, m), jl(
                De.chunks,
                Y.renderState,
                De.lastPushedText,
                De.textEmbedded
              ), m.abortSet.delete(m), De.status = 1, pi(
                Y,
                m.blockedBoundary,
                m.row,
                De
              );
            } catch (Ne) {
              pa(), De.children.length = Ve, De.chunks.length = rn;
              var bn = Ne === Dn ? ml() : Y.status === 12 ? Y.fatalError : Ne;
              if (Y.status === 12 && Y.trackedPostpones !== null) {
                var Ue = Y.trackedPostpones, $n = il(m.componentStack);
                m.abortSet.delete(m), Fn(Y, bn, $n), Ia(Y, Ue, m, De), pi(
                  Y,
                  m.blockedBoundary,
                  m.row,
                  De
                );
              } else if (typeof bn == "object" && bn !== null && typeof bn.then == "function") {
                De.status = 0, m.thenableState = Ne === Dn ? Ji() : null;
                var fn = m.ping;
                bn.then(fn, fn);
              } else {
                var ur = il(m.componentStack);
                m.abortSet.delete(m), De.status = 4;
                var Tn = m.blockedBoundary, an = m.row;
                if (an !== null && --an.pendingTasks === 0 && Un(Y, an), Y.allPendingTasks--, $ = Fn(
                  Y,
                  bn,
                  ur
                ), Tn === null) al(Y, bn);
                else if (Tn.pendingTasks--, Tn.status !== 4) {
                  Tn.status = 4, Tn.errorDigest = $, Oa(Y, Tn);
                  var hn = Tn.row;
                  hn !== null && --hn.pendingTasks === 0 && Un(Y, hn), Tn.parentFlushed && Y.clientRenderedBoundaries.push(Tn), Y.pendingRootTasks === 0 && Y.trackedPostpones === null && Tn.contentPreamble !== null && ma(Y);
                }
                Y.allPendingTasks === 0 && au(Y);
              }
            } finally {
            }
          }
        }
        p.splice(0, X), i.destination !== null && Uu(i, i.destination);
      } catch (Ne) {
        Fn(i, Ne, {}), al(i, Ne);
      } finally {
        Qi = k, be.H = f, be.A = g, f === ts && _l(o), Tt = T;
      }
    }
  }
  function _a(i, o, f) {
    o.preambleChildren.length && f.push(o.preambleChildren);
    for (var g = !1, T = 0; T < o.children.length; T++)
      g = Wu(
        i,
        o.children[T],
        f
      ) || g;
    return g;
  }
  function Wu(i, o, f) {
    var g = o.boundary;
    if (g === null)
      return _a(
        i,
        o,
        f
      );
    var T = g.contentPreamble, k = g.fallbackPreamble;
    if (T === null || k === null) return !1;
    switch (g.status) {
      case 1:
        if (Kc(i.renderState, T), i.byteSize += g.byteSize, o = g.completedSegments[0], !o) throw Error(E(391));
        return _a(
          i,
          o,
          f
        );
      case 5:
        if (i.trackedPostpones !== null) return !0;
      case 4:
        if (o.status === 1)
          return Kc(i.renderState, k), _a(
            i,
            o,
            f
          );
      default:
        return !0;
    }
  }
  function ma(i) {
    if (i.completedRootSegment && i.completedPreambleSegments === null) {
      var o = [], f = i.byteSize, g = Wu(
        i,
        i.completedRootSegment,
        o
      ), T = i.renderState.preamble;
      g === !1 || T.headChunks && T.bodyChunks ? i.completedPreambleSegments = o : i.byteSize = f;
    }
  }
  function qt(i, o, f, g) {
    switch (f.parentFlushed = !0, f.status) {
      case 0:
        f.id = i.nextSegmentId++;
      case 5:
        return g = f.id, f.lastPushedText = !1, f.textEmbedded = !1, i = i.renderState, o.push('<template id="'), o.push(i.placeholderPrefix), i = g.toString(16), o.push(i), o.push('"></template>');
      case 1:
        f.status = 2;
        var T = !0, k = f.chunks, p = 0;
        f = f.children;
        for (var X = 0; X < f.length; X++) {
          for (T = f[X]; p < T.index; p++)
            o.push(k[p]);
          T = na(i, o, T, g);
        }
        for (; p < k.length - 1; p++)
          o.push(k[p]);
        return p < k.length && (T = o.push(k[p])), T;
      case 3:
        return !0;
      default:
        throw Error(E(390));
    }
  }
  var Yt = 0;
  function na(i, o, f, g) {
    var T = f.boundary;
    if (T === null)
      return qt(i, o, f, g);
    if (T.parentFlushed = !0, T.status === 4) {
      var k = T.row;
      return k !== null && --k.pendingTasks === 0 && Un(i, k), i.renderState.generateStaticMarkup || (T = T.errorDigest, o.push("<!--$!-->"), o.push("<template"), T && (o.push(' data-dgst="'), T = ce(T), o.push(T), o.push('"')), o.push("></template>")), qt(i, o, f, g), i = i.renderState.generateStaticMarkup ? !0 : o.push("<!--/$-->"), i;
    }
    if (T.status !== 1)
      return T.status === 0 && (T.rootSegmentID = i.nextSegmentId++), 0 < T.completedSegments.length && i.partialBoundaries.push(T), hl(
        o,
        i.renderState,
        T.rootSegmentID
      ), g && oo(g, T.fallbackState), qt(i, o, f, g), o.push("<!--/$-->");
    if (!wo && ji(i, T) && Yt + T.byteSize > i.progressiveChunkSize)
      return T.rootSegmentID = i.nextSegmentId++, i.completedBoundaries.push(T), hl(
        o,
        i.renderState,
        T.rootSegmentID
      ), qt(i, o, f, g), o.push("<!--/$-->");
    if (Yt += T.byteSize, g && oo(g, T.contentState), f = T.row, f !== null && ji(i, T) && --f.pendingTasks === 0 && Un(i, f), i.renderState.generateStaticMarkup || o.push("<!--$-->"), f = T.completedSegments, f.length !== 1) throw Error(E(391));
    return na(i, o, f[0], g), i = i.renderState.generateStaticMarkup ? !0 : o.push("<!--/$-->"), i;
  }
  function Ln(i, o, f, g) {
    return Ql(
      o,
      i.renderState,
      f.parentFormatContext,
      f.id
    ), na(i, o, f, g), qc(o, f.parentFormatContext);
  }
  function Rn(i, o, f) {
    Yt = f.byteSize;
    for (var g = f.completedSegments, T = 0; T < g.length; T++)
      Da(
        i,
        o,
        f,
        g[T]
      );
    g.length = 0, g = f.row, g !== null && ji(i, f) && --g.pendingTasks === 0 && Un(i, g), Go(
      o,
      f.contentState,
      i.renderState
    ), g = i.resumableState, i = i.renderState, T = f.rootSegmentID, f = f.contentState;
    var k = i.stylesToHoist;
    return i.stylesToHoist = !1, o.push(i.startInlineScript), o.push(">"), k ? ((g.instructions & 4) === 0 && (g.instructions |= 4, o.push(
      '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};'
    )), (g.instructions & 2) === 0 && (g.instructions |= 2, o.push(
      `$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d||"/&"===d)if(0===h)break;else h--;else"$"!==d&&"$?"!==d&&"$~"!==d&&"$!"!==d&&"&"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data="$";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};
$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data="$~",$RB.push(a,b),2===$RB.length&&("number"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};`
    )), (g.instructions & 8) === 0 ? (g.instructions |= 8, o.push(
      `$RM=new Map;$RR=function(n,w,p){function u(q){this._p=null;q()}for(var r=new Map,t=document,h,b,e=t.querySelectorAll("link[data-precedence],style[data-precedence]"),v=[],k=0;b=e[k++];)"not all"===b.getAttribute("media")?v.push(b):("LINK"===b.tagName&&$RM.set(b.getAttribute("href"),b),r.set(b.dataset.precedence,h=b));e=0;b=[];var l,a;for(k=!0;;){if(k){var f=p[e++];if(!f){k=!1;e=0;continue}var c=!1,m=0;var d=f[m++];if(a=$RM.get(d)){var g=a._p;c=!0}else{a=t.createElement("link");a.href=d;a.rel=
"stylesheet";for(a.dataset.precedence=l=f[m++];g=f[m++];)a.setAttribute(g,f[m++]);g=a._p=new Promise(function(q,x){a.onload=u.bind(a,q);a.onerror=u.bind(a,x)});$RM.set(d,a)}d=a.getAttribute("media");!g||d&&!matchMedia(d).matches||b.push(g);if(c)continue}else{a=v[e++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=r.get(l)||h;c===h&&(h=a);r.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=t.head,c.insertBefore(a,c.firstChild))}if(p=document.getElementById(n))p.previousSibling.data=
"$~";Promise.all(b).then($RC.bind(null,n,w),$RX.bind(null,n,"CSS failed to load"))};$RR("`
    )) : o.push('$RR("')) : ((g.instructions & 2) === 0 && (g.instructions |= 2, o.push(
      `$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d||"/&"===d)if(0===h)break;else h--;else"$"!==d&&"$?"!==d&&"$~"!==d&&"$!"!==d&&"&"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data="$";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};
$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data="$~",$RB.push(a,b),2===$RB.length&&("number"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};`
    )), o.push('$RC("')), g = T.toString(16), o.push(i.boundaryPrefix), o.push(g), o.push('","'), o.push(i.segmentPrefix), o.push(g), k ? (o.push('",'), Kl(o, f)) : o.push('"'), f = o.push(")<\/script>"), xc(o, i) && f;
  }
  function Da(i, o, f, g) {
    if (g.status === 2) return !0;
    var T = f.contentState, k = g.id;
    if (k === -1) {
      if ((g.id = f.rootSegmentID) === -1)
        throw Error(E(392));
      return Ln(i, o, g, T);
    }
    return k === f.rootSegmentID ? Ln(i, o, g, T) : (Ln(i, o, g, T), f = i.resumableState, i = i.renderState, o.push(i.startInlineScript), o.push(">"), (f.instructions & 1) === 0 ? (f.instructions |= 1, o.push(
      '$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'
    )) : o.push('$RS("'), o.push(i.segmentPrefix), k = k.toString(16), o.push(k), o.push('","'), o.push(i.placeholderPrefix), o.push(k), o = o.push('")<\/script>'), o);
  }
  var wo = !1;
  function Uu(i, o) {
    try {
      if (!(0 < i.pendingRootTasks)) {
        var f, g = i.completedRootSegment;
        if (g !== null) {
          if (g.status === 5) return;
          var T = i.completedPreambleSegments;
          if (T === null) return;
          Yt = i.byteSize;
          var k = i.resumableState, p = i.renderState, X = p.preamble, m = X.htmlChunks, Y = X.headChunks, ne;
          if (m) {
            for (ne = 0; ne < m.length; ne++)
              o.push(m[ne]);
            if (Y)
              for (ne = 0; ne < Y.length; ne++)
                o.push(Y[ne]);
            else {
              var $ = qn("head");
              o.push($), o.push(">");
            }
          } else if (Y)
            for (ne = 0; ne < Y.length; ne++)
              o.push(Y[ne]);
          var fe = p.charsetChunks;
          for (ne = 0; ne < fe.length; ne++)
            o.push(fe[ne]);
          fe.length = 0, p.preconnects.forEach(nl, o), p.preconnects.clear();
          var ke = p.viewportChunks;
          for (ne = 0; ne < ke.length; ne++)
            o.push(ke[ne]);
          ke.length = 0, p.fontPreloads.forEach(nl, o), p.fontPreloads.clear(), p.highImagePreloads.forEach(nl, o), p.highImagePreloads.clear(), Xe = p, p.styles.forEach(je, o), Xe = null;
          var Ze = p.importMapChunks;
          for (ne = 0; ne < Ze.length; ne++)
            o.push(Ze[ne]);
          Ze.length = 0, p.bootstrapScripts.forEach(nl, o), p.scripts.forEach(nl, o), p.scripts.clear(), p.bulkPreloads.forEach(nl, o), p.bulkPreloads.clear(), k.instructions |= 32;
          var De = p.hoistableChunks;
          for (ne = 0; ne < De.length; ne++)
            o.push(De[ne]);
          for (k = De.length = 0; k < T.length; k++) {
            var pe = T[k];
            for (p = 0; p < pe.length; p++)
              na(i, o, pe[p], null);
          }
          var Be = i.renderState.preamble, me = Be.headChunks;
          if (Be.htmlChunks || me) {
            var Gn = Ea("head");
            o.push(Gn);
          }
          var Ve = Be.bodyChunks;
          if (Ve)
            for (T = 0; T < Ve.length; T++)
              o.push(Ve[T]);
          na(i, o, g, null), i.completedRootSegment = null;
          var rn = i.renderState;
          if (i.allPendingTasks !== 0 || i.clientRenderedBoundaries.length !== 0 || i.completedBoundaries.length !== 0 || i.trackedPostpones !== null && (i.trackedPostpones.rootNodes.length !== 0 || i.trackedPostpones.rootSlots !== null)) {
            var bn = i.resumableState;
            if ((bn.instructions & 64) === 0) {
              if (bn.instructions |= 64, o.push(rn.startInlineScript), (bn.instructions & 32) === 0) {
                bn.instructions |= 32;
                var Ue = "_" + bn.idPrefix + "R_";
                o.push(' id="');
                var $n = ce(Ue);
                o.push($n), o.push('"');
              }
              o.push(">"), o.push(
                "requestAnimationFrame(function(){$RT=performance.now()});"
              ), o.push("<\/script>");
            }
          }
          xc(o, rn);
        }
        var fn = i.renderState;
        g = 0;
        var ur = fn.viewportChunks;
        for (g = 0; g < ur.length; g++)
          o.push(ur[g]);
        ur.length = 0, fn.preconnects.forEach(nl, o), fn.preconnects.clear(), fn.fontPreloads.forEach(nl, o), fn.fontPreloads.clear(), fn.highImagePreloads.forEach(
          nl,
          o
        ), fn.highImagePreloads.clear(), fn.styles.forEach(Zo, o), fn.scripts.forEach(nl, o), fn.scripts.clear(), fn.bulkPreloads.forEach(nl, o), fn.bulkPreloads.clear();
        var Tn = fn.hoistableChunks;
        for (g = 0; g < Tn.length; g++)
          o.push(Tn[g]);
        Tn.length = 0;
        var an = i.clientRenderedBoundaries;
        for (f = 0; f < an.length; f++) {
          var hn = an[f];
          fn = o;
          var Ne = i.resumableState, dn = i.renderState, Lt = hn.rootSegmentID, Qe = hn.errorDigest;
          fn.push(dn.startInlineScript), fn.push(">"), (Ne.instructions & 4) === 0 ? (Ne.instructions |= 4, fn.push(
            '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("'
          )) : fn.push('$RX("'), fn.push(dn.boundaryPrefix);
          var ta = Lt.toString(16);
          if (fn.push(ta), fn.push('"'), Qe) {
            fn.push(",");
            var Mi = ct(
              Qe || ""
            );
            fn.push(Mi);
          }
          var cr = fn.push(")<\/script>");
          if (!cr) {
            i.destination = null, f++, an.splice(0, f);
            return;
          }
        }
        an.splice(0, f);
        var dl = i.completedBoundaries;
        for (f = 0; f < dl.length; f++)
          if (!Rn(i, o, dl[f])) {
            i.destination = null, f++, dl.splice(0, f);
            return;
          }
        dl.splice(0, f), wo = !0;
        var gl = i.partialBoundaries;
        for (f = 0; f < gl.length; f++) {
          var vl = gl[f];
          e: {
            an = i, hn = o, Yt = vl.byteSize;
            var ii = vl.completedSegments;
            for (cr = 0; cr < ii.length; cr++)
              if (!Da(
                an,
                hn,
                vl,
                ii[cr]
              )) {
                cr++, ii.splice(0, cr);
                var Ii = !1;
                break e;
              }
            ii.splice(0, cr);
            var Mt = vl.row;
            Mt !== null && Mt.together && vl.pendingTasks === 1 && (Mt.pendingTasks === 1 ? zl(
              an,
              Mt,
              Mt.hoistables
            ) : Mt.pendingTasks--), Ii = Go(
              hn,
              vl.contentState,
              an.renderState
            );
          }
          if (!Ii) {
            i.destination = null, f++, gl.splice(0, f);
            return;
          }
        }
        gl.splice(0, f), wo = !1;
        var La = i.completedBoundaries;
        for (f = 0; f < La.length; f++)
          if (!Rn(i, o, La[f])) {
            i.destination = null, f++, La.splice(0, f);
            return;
          }
        La.splice(0, f);
      }
    } finally {
      wo = !1, i.allPendingTasks === 0 && i.clientRenderedBoundaries.length === 0 && i.completedBoundaries.length === 0 && (i.flushScheduled = !1, f = i.resumableState, f.hasBody && (gl = Ea("body"), o.push(gl)), f.hasHtml && (f = Ea("html"), o.push(f)), i.status = 14, o.push(null), i.destination = null);
    }
  }
  function To(i) {
    if (i.flushScheduled === !1 && i.pingedTasks.length === 0 && i.destination !== null) {
      i.flushScheduled = !0;
      var o = i.destination;
      o ? Uu(i, o) : i.flushScheduled = !1;
    }
  }
  function Ic(i, o) {
    if (i.status === 13)
      i.status = 14, o.destroy(i.fatalError);
    else if (i.status !== 14 && i.destination === null) {
      i.destination = o;
      try {
        Uu(i, o);
      } catch (f) {
        Fn(i, f, {}), al(i, f);
      }
    }
  }
  function Rs(i, o) {
    (i.status === 11 || i.status === 10) && (i.status = 12);
    try {
      var f = i.abortableTasks;
      if (0 < f.size) {
        var g = o === void 0 ? Error(E(432)) : typeof o == "object" && o !== null && typeof o.then == "function" ? Error(E(530)) : o;
        i.fatalError = g, f.forEach(function(T) {
          return rs(T, i, g);
        }), f.clear();
      }
      i.destination !== null && Uu(i, i.destination);
    } catch (T) {
      Fn(i, T, {}), al(i, T);
    }
  }
  function jn(i, o, f) {
    if (o === null) f.rootNodes.push(i);
    else {
      var g = f.workingMap, T = g.get(o);
      T === void 0 && (T = [o[1], o[2], [], null], g.set(o, T), jn(T, o[0], f)), T[2].push(i);
    }
  }
  function Ai() {
  }
  function is(i, o, f, g) {
    var T = !1, k = null, p = "", X = !1;
    if (o = Nt(o ? o.identifierPrefix : void 0), i = Ma(
      i,
      o,
      uo(o, f),
      vt(0, null, 0, null),
      1 / 0,
      Ai,
      void 0,
      function() {
        X = !0;
      },
      void 0,
      void 0,
      void 0
    ), i.flushScheduled = i.destination !== null, ls(i), i.status === 10 && (i.status = 11), i.trackedPostpones === null && Mc(i, i.pendingRootTasks === 0), Rs(i, g), Ic(i, {
      push: function(m) {
        return m !== null && (p += m), !0;
      },
      destroy: function(m) {
        T = !0, k = m;
      }
    }), T && k !== g) throw k;
    if (!X) throw Error(E(426));
    return p;
  }
  return nf.renderToStaticMarkup = function(i, o) {
    return is(
      i,
      o,
      !0,
      'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server'
    );
  }, nf.renderToString = function(i, o) {
    return is(
      i,
      o,
      !1,
      'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server'
    );
  }, nf.version = "19.2.0", nf;
}
var Ns = {};
var zf;
function sh() {
  if (zf) return Ns;
  zf = 1;
  var A = lf, P = df;
  function E(l) {
    var a = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      a += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var s = 2; s < arguments.length; s++)
        a += "&args[]=" + encodeURIComponent(arguments[s]);
    }
    return "Minified React error #" + l + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var U = Symbol.for("react.transitional.element"), j = Symbol.for("react.portal"), q = Symbol.for("react.fragment"), de = Symbol.for("react.strict_mode"), Te = Symbol.for("react.profiler"), Ae = Symbol.for("react.consumer"), _e = Symbol.for("react.context"), $e = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), Re = Symbol.for("react.suspense_list"), ot = Symbol.for("react.memo"), re = Symbol.for("react.lazy"), Z = Symbol.for("react.scope"), Qn = Symbol.for("react.activity"), Vl = Symbol.for("react.legacy_hidden"), zr = Symbol.for("react.memo_cache_sentinel"), $r = Symbol.for("react.view_transition"), Sr = Symbol.iterator;
  function ut(l) {
    return l === null || typeof l != "object" ? null : (l = Sr && l[Sr] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Ce = Array.isArray;
  function _n(l, a) {
    var s = l.length & 3, v = l.length - s, w = a;
    for (a = 0; a < v; ) {
      var C = l.charCodeAt(a) & 255 | (l.charCodeAt(++a) & 255) << 8 | (l.charCodeAt(++a) & 255) << 16 | (l.charCodeAt(++a) & 255) << 24;
      ++a, C = 3432918353 * (C & 65535) + ((3432918353 * (C >>> 16) & 65535) << 16) & 4294967295, C = C << 15 | C >>> 17, C = 461845907 * (C & 65535) + ((461845907 * (C >>> 16) & 65535) << 16) & 4294967295, w ^= C, w = w << 13 | w >>> 19, w = 5 * (w & 65535) + ((5 * (w >>> 16) & 65535) << 16) & 4294967295, w = (w & 65535) + 27492 + (((w >>> 16) + 58964 & 65535) << 16);
    }
    switch (C = 0, s) {
      case 3:
        C ^= (l.charCodeAt(a + 2) & 255) << 16;
      case 2:
        C ^= (l.charCodeAt(a + 1) & 255) << 8;
      case 1:
        C ^= l.charCodeAt(a) & 255, C = 3432918353 * (C & 65535) + ((3432918353 * (C >>> 16) & 65535) << 16) & 4294967295, C = C << 15 | C >>> 17, w ^= 461845907 * (C & 65535) + ((461845907 * (C >>> 16) & 65535) << 16) & 4294967295;
    }
    return w ^= l.length, w ^= w >>> 16, w = 2246822507 * (w & 65535) + ((2246822507 * (w >>> 16) & 65535) << 16) & 4294967295, w ^= w >>> 13, w = 3266489909 * (w & 65535) + ((3266489909 * (w >>> 16) & 65535) << 16) & 4294967295, (w ^ w >>> 16) >>> 0;
  }
  var mn = new MessageChannel(), tn = [];
  mn.port1.onmessage = function() {
    var l = tn.shift();
    l && l();
  };
  function at(l) {
    tn.push(l), mn.port2.postMessage(null);
  }
  function ya(l) {
    setTimeout(function() {
      throw l;
    });
  }
  var Jl = Promise, Ot = typeof queueMicrotask == "function" ? queueMicrotask : function(l) {
    Jl.resolve(null).then(l).catch(ya);
  }, Kn = null, xe = 0;
  function K(l, a) {
    if (a.byteLength !== 0)
      if (2048 < a.byteLength)
        0 < xe && (l.enqueue(
          new Uint8Array(Kn.buffer, 0, xe)
        ), Kn = new Uint8Array(2048), xe = 0), l.enqueue(a);
      else {
        var s = Kn.length - xe;
        s < a.byteLength && (s === 0 ? l.enqueue(Kn) : (Kn.set(a.subarray(0, s), xe), l.enqueue(Kn), a = a.subarray(s)), Kn = new Uint8Array(2048), xe = 0), Kn.set(a, xe), xe += a.byteLength;
      }
  }
  function ce(l, a) {
    return K(l, a), !0;
  }
  function el(l) {
    Kn && 0 < xe && (l.enqueue(new Uint8Array(Kn.buffer, 0, xe)), Kn = null, xe = 0);
  }
  var Vt = new TextEncoder();
  function oe(l) {
    return Vt.encode(l);
  }
  function M(l) {
    return Vt.encode(l);
  }
  function be(l) {
    return l.byteLength;
  }
  function Ge(l, a) {
    typeof l.error == "function" ? l.error(a) : l.close();
  }
  var we = Object.assign, Ie = Object.prototype.hasOwnProperty, Bn = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Xe = {}, Al = {};
  function Br(l) {
    return Ie.call(Al, l) ? !0 : Ie.call(Xe, l) ? !1 : Bn.test(l) ? Al[l] = !0 : (Xe[l] = !0, !1);
  }
  var Nt = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  ), vt = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), pu = /["'&<>]/;
  function ze(l) {
    if (typeof l == "boolean" || typeof l == "number" || typeof l == "bigint")
      return "" + l;
    l = "" + l;
    var a = pu.exec(l);
    if (a) {
      var s = "", v, w = 0;
      for (v = a.index; v < l.length; v++) {
        switch (l.charCodeAt(v)) {
          case 34:
            a = "&quot;";
            break;
          case 38:
            a = "&amp;";
            break;
          case 39:
            a = "&#x27;";
            break;
          case 60:
            a = "&lt;";
            break;
          case 62:
            a = "&gt;";
            break;
          default:
            continue;
        }
        w !== v && (s += l.slice(w, v)), w = v + 1, s += a;
      }
      l = w !== v ? s + l.slice(w, v) : s;
    }
    return l;
  }
  var bt = /([A-Z])/g, wn = /^ms-/, _t = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function wa(l) {
    return _t.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var Ui = A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Wt = P.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Pr = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Ml = Wt.d;
  Wt.d = {
    f: Ml.f,
    r: Ml.r,
    D: rs,
    C: Mc,
    L: li,
    m: au,
    X: pi,
    S: Kt,
    M: ls
  };
  var Ft = [], Il = null;
  M('"></template>');
  var Au = M("<script"), on = M("<\/script>"), ar = M('<script src="'), In = M('<script type="module" src="'), Qc = M(' nonce="'), ht = M(' integrity="'), yc = M(' crossorigin="'), wc = M(' async=""><\/script>'), wi = M("<style"), Tc = /(<\/|<)(s)(cript)/gi;
  function Uo(l, a, s, v) {
    return "" + a + (s === "s" ? "\\u0073" : "\\u0053") + v;
  }
  var Ta = M(
    '<script type="importmap">'
  ), Yi = M("<\/script>");
  function xa(l, a, s, v, w, C) {
    s = typeof a == "string" ? a : a && a.script;
    var S = s === void 0 ? Au : M(
      '<script nonce="' + ze(s) + '"'
    ), H = typeof a == "string" ? void 0 : a && a.style, O = H === void 0 ? wi : M(
      '<style nonce="' + ze(H) + '"'
    ), z = l.idPrefix, G = [], J = l.bootstrapScriptContent, ve = l.bootstrapScripts, ge = l.bootstrapModules;
    if (J !== void 0 && (G.push(S), $i(G, l), G.push(
      cn,
      oe(
        ("" + J).replace(Tc, Uo)
      ),
      on
    )), J = [], v !== void 0 && (J.push(Ta), J.push(
      oe(
        ("" + JSON.stringify(v)).replace(Tc, Uo)
      )
    ), J.push(Yi)), v = w ? {
      preconnects: "",
      fontPreloads: "",
      highImagePreloads: "",
      remainingCapacity: 2 + (typeof C == "number" ? C : 2e3)
    } : null, w = {
      placeholderPrefix: M(z + "P:"),
      segmentPrefix: M(z + "S:"),
      boundaryPrefix: M(z + "B:"),
      startInlineScript: S,
      startInlineStyle: O,
      preamble: qn(),
      externalRuntimeScript: null,
      bootstrapChunks: G,
      importMapChunks: J,
      onHeaders: w,
      headers: v,
      resets: {
        font: {},
        dns: {},
        connect: { default: {}, anonymous: {}, credentials: {} },
        image: {},
        style: {}
      },
      charsetChunks: [],
      viewportChunks: [],
      hoistableChunks: [],
      preconnects: /* @__PURE__ */ new Set(),
      fontPreloads: /* @__PURE__ */ new Set(),
      highImagePreloads: /* @__PURE__ */ new Set(),
      styles: /* @__PURE__ */ new Map(),
      bootstrapScripts: /* @__PURE__ */ new Set(),
      scripts: /* @__PURE__ */ new Set(),
      bulkPreloads: /* @__PURE__ */ new Set(),
      preloads: {
        images: /* @__PURE__ */ new Map(),
        stylesheets: /* @__PURE__ */ new Map(),
        scripts: /* @__PURE__ */ new Map(),
        moduleScripts: /* @__PURE__ */ new Map()
      },
      nonce: { script: s, style: H },
      hoistableState: null,
      stylesToHoist: !1
    }, ve !== void 0)
      for (v = 0; v < ve.length; v++)
        z = ve[v], H = S = void 0, O = {
          rel: "preload",
          as: "script",
          fetchPriority: "low",
          nonce: a
        }, typeof z == "string" ? O.href = C = z : (O.href = C = z.src, O.integrity = H = typeof z.integrity == "string" ? z.integrity : void 0, O.crossOrigin = S = typeof z == "string" || z.crossOrigin == null ? void 0 : z.crossOrigin === "use-credentials" ? "use-credentials" : ""), z = l, J = C, z.scriptResources[J] = null, z.moduleScriptResources[J] = null, z = [], Wn(z, O), w.bootstrapScripts.add(z), G.push(
          ar,
          oe(ze(C)),
          Pn
        ), s && G.push(
          Qc,
          oe(ze(s)),
          Pn
        ), typeof H == "string" && G.push(
          ht,
          oe(ze(H)),
          Pn
        ), typeof S == "string" && G.push(
          yc,
          oe(ze(S)),
          Pn
        ), $i(G, l), G.push(wc);
    if (ge !== void 0)
      for (a = 0; a < ge.length; a++)
        H = ge[a], C = v = void 0, S = {
          rel: "modulepreload",
          fetchPriority: "low",
          nonce: s
        }, typeof H == "string" ? S.href = ve = H : (S.href = ve = H.src, S.integrity = C = typeof H.integrity == "string" ? H.integrity : void 0, S.crossOrigin = v = typeof H == "string" || H.crossOrigin == null ? void 0 : H.crossOrigin === "use-credentials" ? "use-credentials" : ""), H = l, O = ve, H.scriptResources[O] = null, H.moduleScriptResources[O] = null, H = [], Wn(H, S), w.bootstrapScripts.add(H), G.push(
          In,
          oe(ze(ve)),
          Pn
        ), s && G.push(
          Qc,
          oe(ze(s)),
          Pn
        ), typeof C == "string" && G.push(
          ht,
          oe(ze(C)),
          Pn
        ), typeof v == "string" && G.push(
          yc,
          oe(ze(v)),
          Pn
        ), $i(G, l), G.push(wc);
    return w;
  }
  function Yo(l, a, s, v, w) {
    return {
      idPrefix: l === void 0 ? "" : l,
      nextFormID: 0,
      streamingFormat: 0,
      bootstrapScriptContent: s,
      bootstrapScripts: v,
      bootstrapModules: w,
      instructions: 0,
      hasBody: !1,
      hasHtml: !1,
      unknownResources: {},
      dnsResources: {},
      connectResources: { default: {}, anonymous: {}, credentials: {} },
      imageResources: {},
      styleResources: {},
      scriptResources: {},
      moduleUnknownResources: {},
      moduleScriptResources: {}
    };
  }
  function qn() {
    return { htmlChunks: null, headChunks: null, bodyChunks: null };
  }
  function Nn(l, a, s, v) {
    return {
      insertionMode: l,
      selectedValue: a,
      tagScope: s,
      viewTransition: v
    };
  }
  function Mu(l) {
    return Nn(
      l === "http://www.w3.org/2000/svg" ? 4 : l === "http://www.w3.org/1998/Math/MathML" ? 5 : 0,
      null,
      0,
      null
    );
  }
  function Ea(l, a, s) {
    var v = l.tagScope & -25;
    switch (a) {
      case "noscript":
        return Nn(2, null, v | 1, null);
      case "select":
        return Nn(
          2,
          s.value != null ? s.value : s.defaultValue,
          v,
          null
        );
      case "svg":
        return Nn(4, null, v, null);
      case "picture":
        return Nn(2, null, v | 2, null);
      case "math":
        return Nn(5, null, v, null);
      case "foreignObject":
        return Nn(2, null, v, null);
      case "table":
        return Nn(6, null, v, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return Nn(7, null, v, null);
      case "colgroup":
        return Nn(9, null, v, null);
      case "tr":
        return Nn(8, null, v, null);
      case "head":
        if (2 > l.insertionMode)
          return Nn(3, null, v, null);
        break;
      case "html":
        if (l.insertionMode === 0)
          return Nn(1, null, v, null);
    }
    return 6 <= l.insertionMode || 2 > l.insertionMode ? Nn(2, null, v, null) : l.tagScope !== v ? Nn(
      l.insertionMode,
      l.selectedValue,
      v,
      null
    ) : l;
  }
  function Kc(l) {
    return l === null ? null : {
      update: l.update,
      enter: "none",
      exit: "none",
      share: l.update,
      name: l.autoName,
      autoName: l.autoName,
      nameIdx: 0
    };
  }
  function xc(l, a) {
    return a.tagScope & 32 && (l.instructions |= 128), Nn(
      a.insertionMode,
      a.selectedValue,
      a.tagScope | 12,
      Kc(a.viewTransition)
    );
  }
  function hl(l, a) {
    l = Kc(a.viewTransition);
    var s = a.tagScope | 16;
    return l !== null && l.share !== "none" && (s |= 64), Nn(
      a.insertionMode,
      a.selectedValue,
      s,
      l
    );
  }
  var Ql = M("<!-- -->");
  function qc(l, a, s, v) {
    return a === "" ? v : (v && l.push(Ql), l.push(oe(ze(a))), !0);
  }
  var Ra = /* @__PURE__ */ new Map(), ct = M(' style="'), Gi = M(":"), Xi = M(";");
  function Ca(l, a) {
    if (typeof a != "object") throw Error(E(62));
    var s = !0, v;
    for (v in a)
      if (Ie.call(a, v)) {
        var w = a[v];
        if (w != null && typeof w != "boolean" && w !== "") {
          if (v.indexOf("--") === 0) {
            var C = oe(ze(v));
            w = oe(
              ze(("" + w).trim())
            );
          } else
            C = Ra.get(v), C === void 0 && (C = M(
              ze(
                v.replace(bt, "-$1").toLowerCase().replace(wn, "-ms-")
              )
            ), Ra.set(v, C)), w = typeof w == "number" ? w === 0 || Nt.has(v) ? oe("" + w) : oe(w + "px") : oe(
              ze(("" + w).trim())
            );
          s ? (s = !1, l.push(
            ct,
            C,
            Gi,
            w
          )) : l.push(Xi, C, Gi, w);
        }
      }
    s || l.push(Pn);
  }
  var Jt = M(" "), Nr = M('="'), Pn = M('"'), Go = M('=""');
  function nl(l, a, s) {
    s && typeof s != "function" && typeof s != "symbol" && l.push(Jt, oe(a), Go);
  }
  function un(l, a, s) {
    typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && l.push(
      Jt,
      oe(a),
      Nr,
      oe(ze(s)),
      Pn
    );
  }
  var jc = M(
    ze(
      "javascript:throw new Error('React form unexpectedly submitted.')"
    )
  ), je = M('<input type="hidden"');
  function Xo(l, a) {
    this.push(je), Zo(l), un(this, "name", a), un(this, "value", l), this.push(Ol);
  }
  function Zo(l) {
    if (typeof l != "string") throw Error(E(480));
  }
  function Vo(l, a) {
    if (typeof a.$$FORM_ACTION == "function") {
      var s = l.nextFormID++;
      l = l.idPrefix + s;
      try {
        var v = a.$$FORM_ACTION(l);
        if (v) {
          var w = v.data;
          w?.forEach(Zo);
        }
        return v;
      } catch (C) {
        if (typeof C == "object" && C !== null && typeof C.then == "function")
          throw C;
      }
    }
    return null;
  }
  function Kl(l, a, s, v, w, C, S, H) {
    var O = null;
    if (typeof v == "function") {
      var z = Vo(a, v);
      z !== null ? (H = z.name, v = z.action || "", w = z.encType, C = z.method, S = z.target, O = z.data) : (l.push(
        Jt,
        oe("formAction"),
        Nr,
        jc,
        Pn
      ), S = C = w = v = H = null, $c(a, s));
    }
    return H != null && En(l, "name", H), v != null && En(l, "formAction", v), w != null && En(l, "formEncType", w), C != null && En(l, "formMethod", C), S != null && En(l, "formTarget", S), O;
  }
  function En(l, a, s) {
    switch (a) {
      case "className":
        un(l, "class", s);
        break;
      case "tabIndex":
        un(l, "tabindex", s);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        un(l, a, s);
        break;
      case "style":
        Ca(l, s);
        break;
      case "src":
      case "href":
        if (s === "") break;
      case "action":
      case "formAction":
        if (s == null || typeof s == "function" || typeof s == "symbol" || typeof s == "boolean")
          break;
        s = wa("" + s), l.push(
          Jt,
          oe(a),
          Nr,
          oe(ze(s)),
          Pn
        );
        break;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "ref":
        break;
      case "autoFocus":
      case "multiple":
      case "muted":
        nl(l, a.toLowerCase(), s);
        break;
      case "xlinkHref":
        if (typeof s == "function" || typeof s == "symbol" || typeof s == "boolean")
          break;
        s = wa("" + s), l.push(
          Jt,
          oe("xlink:href"),
          Nr,
          oe(ze(s)),
          Pn
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        typeof s != "function" && typeof s != "symbol" && l.push(
          Jt,
          oe(a),
          Nr,
          oe(ze(s)),
          Pn
        );
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        s && typeof s != "function" && typeof s != "symbol" && l.push(
          Jt,
          oe(a),
          Go
        );
        break;
      case "capture":
      case "download":
        s === !0 ? l.push(
          Jt,
          oe(a),
          Go
        ) : s !== !1 && typeof s != "function" && typeof s != "symbol" && l.push(
          Jt,
          oe(a),
          Nr,
          oe(ze(s)),
          Pn
        );
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        typeof s != "function" && typeof s != "symbol" && !isNaN(s) && 1 <= s && l.push(
          Jt,
          oe(a),
          Nr,
          oe(ze(s)),
          Pn
        );
        break;
      case "rowSpan":
      case "start":
        typeof s == "function" || typeof s == "symbol" || isNaN(s) || l.push(
          Jt,
          oe(a),
          Nr,
          oe(ze(s)),
          Pn
        );
        break;
      case "xlinkActuate":
        un(l, "xlink:actuate", s);
        break;
      case "xlinkArcrole":
        un(l, "xlink:arcrole", s);
        break;
      case "xlinkRole":
        un(l, "xlink:role", s);
        break;
      case "xlinkShow":
        un(l, "xlink:show", s);
        break;
      case "xlinkTitle":
        un(l, "xlink:title", s);
        break;
      case "xlinkType":
        un(l, "xlink:type", s);
        break;
      case "xmlBase":
        un(l, "xml:base", s);
        break;
      case "xmlLang":
        un(l, "xml:lang", s);
        break;
      case "xmlSpace":
        un(l, "xml:space", s);
        break;
      default:
        if ((!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = vt.get(a) || a, Br(a))) {
          switch (typeof s) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              var v = a.toLowerCase().slice(0, 5);
              if (v !== "data-" && v !== "aria-") return;
          }
          l.push(
            Jt,
            oe(a),
            Nr,
            oe(ze(s)),
            Pn
          );
        }
    }
  }
  var cn = M(">"), Ol = M("/>");
  function Qt(l, a, s) {
    if (a != null) {
      if (s != null) throw Error(E(60));
      if (typeof a != "object" || !("__html" in a))
        throw Error(E(61));
      a = a.__html, a != null && l.push(oe("" + a));
    }
  }
  function ka(l) {
    var a = "";
    return A.Children.forEach(l, function(s) {
      s != null && (a += s);
    }), a;
  }
  var Iu = M(' selected=""'), or = M(
    `addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});`
  );
  function $c(l, a) {
    if ((l.instructions & 16) === 0) {
      l.instructions |= 16;
      var s = a.preamble, v = a.bootstrapChunks;
      (s.htmlChunks || s.headChunks) && v.length === 0 ? (v.push(a.startInlineScript), $i(v, l), v.push(
        cn,
        or,
        on
      )) : v.unshift(
        a.startInlineScript,
        cn,
        or,
        on
      );
    }
  }
  var Ec = M("<!--F!-->"), Ou = M("<!--F-->");
  function Wn(l, a) {
    l.push(pt("link"));
    for (var s in a)
      if (Ie.call(a, s)) {
        var v = a[s];
        if (v != null)
          switch (s) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(E(399, "link"));
            default:
              En(l, s, v);
          }
      }
    return l.push(Ol), null;
  }
  var _u = /(<\/|<)(s)(tyle)/gi;
  function ao(l, a, s, v) {
    return "" + a + (s === "s" ? "\\73 " : "\\53 ") + v;
  }
  function tl(l, a, s) {
    l.push(pt(s));
    for (var v in a)
      if (Ie.call(a, v)) {
        var w = a[v];
        if (w != null)
          switch (v) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(E(399, s));
            default:
              En(l, v, w);
          }
      }
    return l.push(Ol), null;
  }
  function Sa(l, a) {
    l.push(pt("title"));
    var s = null, v = null, w;
    for (w in a)
      if (Ie.call(a, w)) {
        var C = a[w];
        if (C != null)
          switch (w) {
            case "children":
              s = C;
              break;
            case "dangerouslySetInnerHTML":
              v = C;
              break;
            default:
              En(l, w, C);
          }
      }
    return l.push(cn), a = Array.isArray(s) ? 2 > s.length ? s[0] : null : s, typeof a != "function" && typeof a != "symbol" && a !== null && a !== void 0 && l.push(oe(ze("" + a))), Qt(l, v, s), l.push($l("title")), null;
  }
  var es = M("<!--head-->"), ns = M("<!--body-->"), oo = M("<!--html-->");
  function uo(l, a) {
    l.push(pt("script"));
    var s = null, v = null, w;
    for (w in a)
      if (Ie.call(a, w)) {
        var C = a[w];
        if (C != null)
          switch (w) {
            case "children":
              s = C;
              break;
            case "dangerouslySetInnerHTML":
              v = C;
              break;
            default:
              En(l, w, C);
          }
      }
    return l.push(cn), Qt(l, v, s), typeof s == "string" && l.push(
      oe(("" + s).replace(Tc, Uo))
    ), l.push($l("script")), null;
  }
  function ql(l, a, s) {
    l.push(pt(s));
    var v = s = null, w;
    for (w in a)
      if (Ie.call(a, w)) {
        var C = a[w];
        if (C != null)
          switch (w) {
            case "children":
              s = C;
              break;
            case "dangerouslySetInnerHTML":
              v = C;
              break;
            default:
              En(l, w, C);
          }
      }
    return l.push(cn), Qt(l, v, s), s;
  }
  function jl(l, a, s) {
    l.push(pt(s));
    var v = s = null, w;
    for (w in a)
      if (Ie.call(a, w)) {
        var C = a[w];
        if (C != null)
          switch (w) {
            case "children":
              s = C;
              break;
            case "dangerouslySetInnerHTML":
              v = C;
              break;
            default:
              En(l, w, C);
          }
      }
    return l.push(cn), Qt(l, v, s), typeof s == "string" ? (l.push(oe(ze(s))), null) : s;
  }
  var mu = M(`
`), Jo = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Qo = /* @__PURE__ */ new Map();
  function pt(l) {
    var a = Qo.get(l);
    if (a === void 0) {
      if (!Jo.test(l))
        throw Error(E(65, l));
      a = M("<" + l), Qo.set(l, a);
    }
    return a;
  }
  var co = M("<!DOCTYPE html>");
  function Ko(l, a, s, v, w, C, S, H, O) {
    switch (a) {
      case "div":
      case "span":
      case "svg":
      case "path":
        break;
      case "a":
        l.push(pt("a"));
        var z = null, G = null, J;
        for (J in s)
          if (Ie.call(s, J)) {
            var ve = s[J];
            if (ve != null)
              switch (J) {
                case "children":
                  z = ve;
                  break;
                case "dangerouslySetInnerHTML":
                  G = ve;
                  break;
                case "href":
                  ve === "" ? un(l, "href", "") : En(l, J, ve);
                  break;
                default:
                  En(l, J, ve);
              }
          }
        if (l.push(cn), Qt(l, G, z), typeof z == "string") {
          l.push(oe(ze(z)));
          var ge = null;
        } else ge = z;
        return ge;
      case "g":
      case "p":
      case "li":
        break;
      case "select":
        l.push(pt("select"));
        var en = null, Le = null, nn;
        for (nn in s)
          if (Ie.call(s, nn)) {
            var nt = s[nn];
            if (nt != null)
              switch (nn) {
                case "children":
                  en = nt;
                  break;
                case "dangerouslySetInnerHTML":
                  Le = nt;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  En(
                    l,
                    nn,
                    nt
                  );
              }
          }
        return l.push(cn), Qt(l, Le, en), en;
      case "option":
        var Hn = H.selectedValue;
        l.push(pt("option"));
        var $t = null, Ur = null, Tl = null, He = null, gr;
        for (gr in s)
          if (Ie.call(s, gr)) {
            var gt = s[gr];
            if (gt != null)
              switch (gr) {
                case "children":
                  $t = gt;
                  break;
                case "selected":
                  Tl = gt;
                  break;
                case "dangerouslySetInnerHTML":
                  He = gt;
                  break;
                case "value":
                  Ur = gt;
                default:
                  En(
                    l,
                    gr,
                    gt
                  );
              }
          }
        if (Hn != null) {
          var _r = Ur !== null ? "" + Ur : ka($t);
          if (Ce(Hn)) {
            for (var Di = 0; Di < Hn.length; Di++)
              if ("" + Hn[Di] === _r) {
                l.push(Iu);
                break;
              }
          } else
            "" + Hn === _r && l.push(Iu);
        } else Tl && l.push(Iu);
        return l.push(cn), Qt(l, He, $t), $t;
      case "textarea":
        l.push(pt("textarea"));
        var tt = null, Xa = null, xl = null, vr;
        for (vr in s)
          if (Ie.call(s, vr)) {
            var Ul = s[vr];
            if (Ul != null)
              switch (vr) {
                case "children":
                  xl = Ul;
                  break;
                case "value":
                  tt = Ul;
                  break;
                case "defaultValue":
                  Xa = Ul;
                  break;
                case "dangerouslySetInnerHTML":
                  throw Error(E(91));
                default:
                  En(
                    l,
                    vr,
                    Ul
                  );
              }
          }
        if (tt === null && Xa !== null && (tt = Xa), l.push(cn), xl != null) {
          if (tt != null) throw Error(E(92));
          if (Ce(xl)) {
            if (1 < xl.length)
              throw Error(E(93));
            tt = "" + xl[0];
          }
          tt = "" + xl;
        }
        return typeof tt == "string" && tt[0] === `
` && l.push(mu), tt !== null && l.push(
          oe(ze("" + tt))
        ), null;
      case "input":
        l.push(pt("input"));
        var br = null, Za = null, Fo = null, mr = null, po = null, yr = null, Va = null, Bc = null, Xn = null, Ao;
        for (Ao in s)
          if (Ie.call(s, Ao)) {
            var Yl = s[Ao];
            if (Yl != null)
              switch (Ao) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(E(399, "input"));
                case "name":
                  br = Yl;
                  break;
                case "formAction":
                  Za = Yl;
                  break;
                case "formEncType":
                  Fo = Yl;
                  break;
                case "formMethod":
                  mr = Yl;
                  break;
                case "formTarget":
                  po = Yl;
                  break;
                case "defaultChecked":
                  Xn = Yl;
                  break;
                case "defaultValue":
                  Va = Yl;
                  break;
                case "checked":
                  Bc = Yl;
                  break;
                case "value":
                  yr = Yl;
                  break;
                default:
                  En(
                    l,
                    Ao,
                    Yl
                  );
              }
          }
        var ju = Kl(
          l,
          v,
          w,
          Za,
          Fo,
          mr,
          po,
          br
        );
        return Bc !== null ? nl(l, "checked", Bc) : Xn !== null && nl(l, "checked", Xn), yr !== null ? En(l, "value", yr) : Va !== null && En(l, "value", Va), l.push(Ol), ju?.forEach(Xo, l), null;
      case "button":
        l.push(pt("button"));
        var Ja = null, $u = null, ec = null, Mo = null, fa = null, nc = null, oi = null, Qa;
        for (Qa in s)
          if (Ie.call(s, Qa)) {
            var Ka = s[Qa];
            if (Ka != null)
              switch (Qa) {
                case "children":
                  Ja = Ka;
                  break;
                case "dangerouslySetInnerHTML":
                  $u = Ka;
                  break;
                case "name":
                  ec = Ka;
                  break;
                case "formAction":
                  Mo = Ka;
                  break;
                case "formEncType":
                  fa = Ka;
                  break;
                case "formMethod":
                  nc = Ka;
                  break;
                case "formTarget":
                  oi = Ka;
                  break;
                default:
                  En(
                    l,
                    Qa,
                    Ka
                  );
              }
          }
        var ss = Kl(
          l,
          v,
          w,
          Mo,
          fa,
          nc,
          oi,
          ec
        );
        if (l.push(cn), ss?.forEach(Xo, l), Qt(l, $u, Ja), typeof Ja == "string") {
          l.push(
            oe(ze(Ja))
          );
          var El = null;
        } else El = Ja;
        return El;
      case "form":
        l.push(pt("form"));
        var fs = null, sl = null, ha = null, Li = null, tc = null, rc = null, lc;
        for (lc in s)
          if (Ie.call(s, lc)) {
            var qa = s[lc];
            if (qa != null)
              switch (lc) {
                case "children":
                  fs = qa;
                  break;
                case "dangerouslySetInnerHTML":
                  sl = qa;
                  break;
                case "action":
                  ha = qa;
                  break;
                case "encType":
                  Li = qa;
                  break;
                case "method":
                  tc = qa;
                  break;
                case "target":
                  rc = qa;
                  break;
                default:
                  En(
                    l,
                    lc,
                    qa
                  );
              }
          }
        var hs = null, Nc = null;
        if (typeof ha == "function") {
          var Io = Vo(
            v,
            ha
          );
          Io !== null ? (ha = Io.action || "", Li = Io.encType, tc = Io.method, rc = Io.target, hs = Io.data, Nc = Io.name) : (l.push(
            Jt,
            oe("action"),
            Nr,
            jc,
            Pn
          ), rc = tc = Li = ha = null, $c(v, w));
        }
        if (ha != null && En(l, "action", ha), Li != null && En(l, "encType", Li), tc != null && En(l, "method", tc), rc != null && En(l, "target", rc), l.push(cn), Nc !== null && (l.push(je), un(l, "name", Nc), l.push(Ol), hs?.forEach(Xo, l)), Qt(l, sl, fs), typeof fs == "string") {
          l.push(
            oe(ze(fs))
          );
          var ds = null;
        } else ds = fs;
        return ds;
      case "menuitem":
        l.push(pt("menuitem"));
        for (var ic in s)
          if (Ie.call(s, ic)) {
            var Cs = s[ic];
            if (Cs != null)
              switch (ic) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(E(400));
                default:
                  En(
                    l,
                    ic,
                    Cs
                  );
              }
          }
        return l.push(cn), null;
      case "object":
        l.push(pt("object"));
        var Wc = null, ks = null, ac;
        for (ac in s)
          if (Ie.call(s, ac)) {
            var Oo = s[ac];
            if (Oo != null)
              switch (ac) {
                case "children":
                  Wc = Oo;
                  break;
                case "dangerouslySetInnerHTML":
                  ks = Oo;
                  break;
                case "data":
                  var Ms = wa("" + Oo);
                  if (Ms === "") break;
                  l.push(
                    Jt,
                    oe("data"),
                    Nr,
                    oe(ze(Ms)),
                    Pn
                  );
                  break;
                default:
                  En(
                    l,
                    ac,
                    Oo
                  );
              }
          }
        if (l.push(cn), Qt(l, ks, Wc), typeof Wc == "string") {
          l.push(
            oe(ze(Wc))
          );
          var Is = null;
        } else Is = Wc;
        return Is;
      case "title":
        var ui = H.tagScope & 1, gs = H.tagScope & 4;
        if (H.insertionMode === 4 || ui || s.itemProp != null)
          var Os = Sa(
            l,
            s
          );
        else
          gs ? Os = null : (Sa(w.hoistableChunks, s), Os = void 0);
        return Os;
      case "link":
        var Gt = H.tagScope & 1, Hi = H.tagScope & 4, wr = s.rel, da = s.href, Rl = s.precedence;
        if (H.insertionMode === 4 || Gt || s.itemProp != null || typeof wr != "string" || typeof da != "string" || da === "") {
          Wn(l, s);
          var xn = null;
        } else if (s.rel === "stylesheet")
          if (typeof Rl != "string" || s.disabled != null || s.onLoad || s.onError)
            xn = Wn(
              l,
              s
            );
          else {
            var Yr = w.styles.get(Rl), zi = v.styleResources.hasOwnProperty(da) ? v.styleResources[da] : void 0;
            if (zi !== null) {
              v.styleResources[da] = null, Yr || (Yr = {
                precedence: oe(ze(Rl)),
                rules: [],
                hrefs: [],
                sheets: /* @__PURE__ */ new Map()
              }, w.styles.set(Rl, Yr));
              var Rt = {
                state: 0,
                props: we({}, s, {
                  "data-precedence": s.precedence,
                  precedence: null
                })
              };
              if (zi) {
                zi.length === 2 && _a(Rt.props, zi);
                var wu = w.preloads.stylesheets.get(da);
                wu && 0 < wu.length ? wu.length = 0 : Rt.state = 1;
              }
              Yr.sheets.set(da, Rt), S && S.stylesheets.add(Rt);
            } else if (Yr) {
              var oc = Yr.sheets.get(da);
              oc && S && S.stylesheets.add(oc);
            }
            O && l.push(Ql), xn = null;
          }
        else
          s.onLoad || s.onError ? xn = Wn(
            l,
            s
          ) : (O && l.push(Ql), xn = Hi ? null : Wn(w.hoistableChunks, s));
        return xn;
      case "script":
        var vs = H.tagScope & 1, _o = s.async;
        if (typeof s.src != "string" || !s.src || !_o || typeof _o == "function" || typeof _o == "symbol" || s.onLoad || s.onError || H.insertionMode === 4 || vs || s.itemProp != null)
          var ja = uo(
            l,
            s
          );
        else {
          var Tu = s.src;
          if (s.type === "module")
            var Gl = v.moduleScriptResources, $a = w.preloads.moduleScripts;
          else
            Gl = v.scriptResources, $a = w.preloads.scripts;
          var xu = Gl.hasOwnProperty(Tu) ? Gl[Tu] : void 0;
          if (xu !== null) {
            Gl[Tu] = null;
            var n = s;
            if (xu) {
              xu.length === 2 && (n = we({}, s), _a(n, xu));
              var r = $a.get(Tu);
              r && (r.length = 0);
            }
            var c = [];
            w.scripts.add(c), uo(c, n);
          }
          O && l.push(Ql), ja = null;
        }
        return ja;
      case "style":
        var d = H.tagScope & 1, y = s.precedence, R = s.href, I = s.nonce;
        if (H.insertionMode === 4 || d || s.itemProp != null || typeof y != "string" || typeof R != "string" || R === "") {
          l.push(pt("style"));
          var D = null, ee = null, B;
          for (B in s)
            if (Ie.call(s, B)) {
              var Q = s[B];
              if (Q != null)
                switch (B) {
                  case "children":
                    D = Q;
                    break;
                  case "dangerouslySetInnerHTML":
                    ee = Q;
                    break;
                  default:
                    En(
                      l,
                      B,
                      Q
                    );
                }
            }
          l.push(cn);
          var se = Array.isArray(D) ? 2 > D.length ? D[0] : null : D;
          typeof se != "function" && typeof se != "symbol" && se !== null && se !== void 0 && l.push(
            oe(("" + se).replace(_u, ao))
          ), Qt(l, ee, D), l.push($l("style"));
          var ye = null;
        } else {
          var he = w.styles.get(y);
          if ((v.styleResources.hasOwnProperty(R) ? v.styleResources[R] : void 0) !== null) {
            v.styleResources[R] = null, he || (he = {
              precedence: oe(
                ze(y)
              ),
              rules: [],
              hrefs: [],
              sheets: /* @__PURE__ */ new Map()
            }, w.styles.set(y, he));
            var le = w.nonce.style;
            if (!le || le === I) {
              he.hrefs.push(
                oe(ze(R))
              );
              var Ke = he.rules, On = null, Oe = null, gn;
              for (gn in s)
                if (Ie.call(s, gn)) {
                  var er = s[gn];
                  if (er != null)
                    switch (gn) {
                      case "children":
                        On = er;
                        break;
                      case "dangerouslySetInnerHTML":
                        Oe = er;
                    }
                }
              var nr = Array.isArray(On) ? 2 > On.length ? On[0] : null : On;
              typeof nr != "function" && typeof nr != "symbol" && nr !== null && nr !== void 0 && Ke.push(
                oe(
                  ("" + nr).replace(_u, ao)
                )
              ), Qt(Ke, Oe, On);
            }
          }
          he && S && S.styles.add(he), O && l.push(Ql), ye = void 0;
        }
        return ye;
      case "meta":
        var yn = H.tagScope & 1, Ht = H.tagScope & 4;
        if (H.insertionMode === 4 || yn || s.itemProp != null)
          var ci = tl(
            l,
            s,
            "meta"
          );
        else
          O && l.push(Ql), ci = Ht ? null : typeof s.charSet == "string" ? tl(w.charsetChunks, s, "meta") : s.name === "viewport" ? tl(w.viewportChunks, s, "meta") : tl(w.hoistableChunks, s, "meta");
        return ci;
      case "listing":
      case "pre":
        l.push(pt(a));
        var Dr = null, Ee = null, Cn;
        for (Cn in s)
          if (Ie.call(s, Cn)) {
            var kn = s[Cn];
            if (kn != null)
              switch (Cn) {
                case "children":
                  Dr = kn;
                  break;
                case "dangerouslySetInnerHTML":
                  Ee = kn;
                  break;
                default:
                  En(
                    l,
                    Cn,
                    kn
                  );
              }
          }
        if (l.push(cn), Ee != null) {
          if (Dr != null) throw Error(E(60));
          if (typeof Ee != "object" || !("__html" in Ee))
            throw Error(E(61));
          var pn = Ee.__html;
          pn != null && (typeof pn == "string" && 0 < pn.length && pn[0] === `
` ? l.push(mu, oe(pn)) : l.push(oe("" + pn)));
        }
        return typeof Dr == "string" && Dr[0] === `
` && l.push(mu), Dr;
      case "img":
        var rt = H.tagScope & 3, ln = s.src, Ye = s.srcSet;
        if (!(s.loading === "lazy" || !ln && !Ye || typeof ln != "string" && ln != null || typeof Ye != "string" && Ye != null || s.fetchPriority === "low" || rt) && (typeof ln != "string" || ln[4] !== ":" || ln[0] !== "d" && ln[0] !== "D" || ln[1] !== "a" && ln[1] !== "A" || ln[2] !== "t" && ln[2] !== "T" || ln[3] !== "a" && ln[3] !== "A") && (typeof Ye != "string" || Ye[4] !== ":" || Ye[0] !== "d" && Ye[0] !== "D" || Ye[1] !== "a" && Ye[1] !== "A" || Ye[2] !== "t" && Ye[2] !== "T" || Ye[3] !== "a" && Ye[3] !== "A")) {
          S !== null && H.tagScope & 64 && (S.suspenseyImages = !0);
          var Tr = typeof s.sizes == "string" ? s.sizes : void 0, Sn = Ye ? Ye + `
` + (Tr || "") : ln, tr = w.preloads.images, Zn = tr.get(Sn);
          if (Zn)
            (s.fetchPriority === "high" || 10 > w.highImagePreloads.size) && (tr.delete(Sn), w.highImagePreloads.add(Zn));
          else if (!v.imageResources.hasOwnProperty(Sn)) {
            v.imageResources[Sn] = Ft;
            var Gr = s.crossOrigin, mo = typeof Gr == "string" ? Gr === "use-credentials" ? Gr : "" : void 0, Xr = w.headers, si;
            Xr && 0 < Xr.remainingCapacity && typeof s.srcSet != "string" && (s.fetchPriority === "high" || 500 > Xr.highImagePreloads.length) && (si = Wu(ln, "image", {
              imageSrcSet: s.srcSet,
              imageSizes: s.sizes,
              crossOrigin: mo,
              integrity: s.integrity,
              nonce: s.nonce,
              type: s.type,
              fetchPriority: s.fetchPriority,
              referrerPolicy: s.refererPolicy
            }), 0 <= (Xr.remainingCapacity -= si.length + 2)) ? (w.resets.image[Sn] = Ft, Xr.highImagePreloads && (Xr.highImagePreloads += ", "), Xr.highImagePreloads += si) : (Zn = [], Wn(Zn, {
              rel: "preload",
              as: "image",
              href: Ye ? void 0 : ln,
              imageSrcSet: Ye,
              imageSizes: Tr,
              crossOrigin: mo,
              integrity: s.integrity,
              type: s.type,
              fetchPriority: s.fetchPriority,
              referrerPolicy: s.referrerPolicy
            }), s.fetchPriority === "high" || 10 > w.highImagePreloads.size ? w.highImagePreloads.add(Zn) : (w.bulkPreloads.add(Zn), tr.set(Sn, Zn)));
          }
        }
        return tl(l, s, "img");
      case "base":
      case "area":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "param":
      case "source":
      case "track":
      case "wbr":
        return tl(l, s, a);
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        break;
      case "head":
        if (2 > H.insertionMode) {
          var fi = C || w.preamble;
          if (fi.headChunks)
            throw Error(E(545, "`<head>`"));
          C !== null && l.push(es), fi.headChunks = [];
          var hi = ql(
            fi.headChunks,
            s,
            "head"
          );
        } else
          hi = jl(
            l,
            s,
            "head"
          );
        return hi;
      case "body":
        if (2 > H.insertionMode) {
          var Xt = C || w.preamble;
          if (Xt.bodyChunks)
            throw Error(E(545, "`<body>`"));
          C !== null && l.push(ns), Xt.bodyChunks = [];
          var e = ql(
            Xt.bodyChunks,
            s,
            "body"
          );
        } else
          e = jl(
            l,
            s,
            "body"
          );
        return e;
      case "html":
        if (H.insertionMode === 0) {
          var t = C || w.preamble;
          if (t.htmlChunks)
            throw Error(E(545, "`<html>`"));
          C !== null && l.push(oo), t.htmlChunks = [co];
          var u = ql(
            t.htmlChunks,
            s,
            "html"
          );
        } else
          u = jl(
            l,
            s,
            "html"
          );
        return u;
      default:
        if (a.indexOf("-") !== -1) {
          l.push(pt(a));
          var h = null, b = null, x;
          for (x in s)
            if (Ie.call(s, x)) {
              var F = s[x];
              if (F != null) {
                var _ = x;
                switch (x) {
                  case "children":
                    h = F;
                    break;
                  case "dangerouslySetInnerHTML":
                    b = F;
                    break;
                  case "style":
                    Ca(l, F);
                    break;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "ref":
                    break;
                  case "className":
                    _ = "class";
                  default:
                    if (Br(x) && typeof F != "function" && typeof F != "symbol" && F !== !1) {
                      if (F === !0) F = "";
                      else if (typeof F == "object") continue;
                      l.push(
                        Jt,
                        oe(_),
                        Nr,
                        oe(ze(F)),
                        Pn
                      );
                    }
                }
              }
            }
          return l.push(cn), Qt(l, b, h), h;
        }
    }
    return jl(l, s, a);
  }
  var Du = /* @__PURE__ */ new Map();
  function $l(l) {
    var a = Du.get(l);
    return a === void 0 && (a = M("</" + l + ">"), Du.set(l, a)), a;
  }
  function qo(l, a) {
    l = l.preamble, l.htmlChunks === null && a.htmlChunks && (l.htmlChunks = a.htmlChunks), l.headChunks === null && a.headChunks && (l.headChunks = a.headChunks), l.bodyChunks === null && a.bodyChunks && (l.bodyChunks = a.bodyChunks);
  }
  function Fr(l, a) {
    a = a.bootstrapChunks;
    for (var s = 0; s < a.length - 1; s++)
      K(l, a[s]);
    return s < a.length ? (s = a[s], a.length = 0, ce(l, s)) : !0;
  }
  var _l = M(
    "requestAnimationFrame(function(){$RT=performance.now()});"
  ), Rc = M('<template id="'), jo = M('"></template>'), pr = M("<!--&-->"), $o = M("<!--/&-->"), Zi = M("<!--$-->"), so = M(
    '<!--$?--><template id="'
  ), Ar = M('"></template>'), mt = M("<!--$!-->"), Dn = M("<!--/$-->"), Cc = M("<template"), Ti = M('"'), ml = M(' data-dgst="');
  M(' data-msg="'), M(' data-stck="'), M(' data-cstck="');
  var kc = M("></template>");
  function xi(l, a, s) {
    if (K(l, so), s === null) throw Error(E(395));
    return K(l, a.boundaryPrefix), K(l, oe(s.toString(16))), ce(l, Ar);
  }
  var ei = M('<div hidden id="'), fo = M('">'), Ei = M("</div>"), Ri = M(
    '<svg aria-hidden="true" style="display:none" id="'
  ), ho = M('">'), We = M("</svg>"), Dl = M(
    '<math aria-hidden="true" style="display:none" id="'
  ), yt = M('">'), ni = M("</math>"), At = M('<table hidden id="'), Vi = M('">'), Pa = M("</table>"), ti = M('<table hidden><tbody id="'), Ci = M('">'), wt = M("</tbody></table>"), ki = M('<table hidden><tr id="'), Si = M('">'), Fa = M("</tr></table>"), Ji = M(
    '<table hidden><colgroup id="'
  ), pa = M('">'), Mr = M("</colgroup></table>");
  function Aa(l, a, s, v) {
    switch (s.insertionMode) {
      case 0:
      case 1:
      case 3:
      case 2:
        return K(l, ei), K(l, a.segmentPrefix), K(l, oe(v.toString(16))), ce(l, fo);
      case 4:
        return K(l, Ri), K(l, a.segmentPrefix), K(l, oe(v.toString(16))), ce(l, ho);
      case 5:
        return K(l, Dl), K(l, a.segmentPrefix), K(l, oe(v.toString(16))), ce(l, yt);
      case 6:
        return K(l, At), K(l, a.segmentPrefix), K(l, oe(v.toString(16))), ce(l, Vi);
      case 7:
        return K(l, ti), K(l, a.segmentPrefix), K(l, oe(v.toString(16))), ce(l, Ci);
      case 8:
        return K(l, ki), K(l, a.segmentPrefix), K(l, oe(v.toString(16))), ce(l, Si);
      case 9:
        return K(l, Ji), K(l, a.segmentPrefix), K(l, oe(v.toString(16))), ce(l, pa);
      default:
        throw Error(E(397));
    }
  }
  function Ll(l, a) {
    switch (a.insertionMode) {
      case 0:
      case 1:
      case 3:
      case 2:
        return ce(l, Ei);
      case 4:
        return ce(l, We);
      case 5:
        return ce(l, ni);
      case 6:
        return ce(l, Pa);
      case 7:
        return ce(l, wt);
      case 8:
        return ce(l, Fa);
      case 9:
        return ce(l, Mr);
      default:
        throw Error(E(397));
    }
  }
  var Sc = M(
    '$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'
  ), Pc = M('$RS("'), Fc = M('","'), go = M('")<\/script>');
  M('<template data-rsi="" data-sid="'), M('" data-pid="');
  var vo = M(
    `$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d||"/&"===d)if(0===h)break;else h--;else"$"!==d&&"$?"!==d&&"$~"!==d&&"$!"!==d&&"&"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data="$";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};
$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data="$~",$RB.push(a,b),2===$RB.length&&("number"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};`
  );
  oe(
    `$RV=function(A,g){function k(a,b){var e=a.getAttribute(b);e&&(b=a.style,l.push(a,b.viewTransitionName,b.viewTransitionClass),"auto"!==e&&(b.viewTransitionClass=e),(a=a.getAttribute("vt-name"))||(a="_T_"+K++ +"_"),b.viewTransitionName=a,B=!0)}var B=!1,K=0,l=[];try{var f=document.__reactViewTransition;if(f){f.finished.finally($RV.bind(null,g));return}var m=new Map;for(f=1;f<g.length;f+=2)for(var h=g[f].querySelectorAll("[vt-share]"),d=0;d<h.length;d++){var c=h[d];m.set(c.getAttribute("vt-name"),c)}var u=[];for(h=0;h<g.length;h+=2){var C=g[h],x=C.parentNode;if(x){var v=x.getBoundingClientRect();if(v.left||v.top||v.width||v.height){c=C;for(f=0;c;){if(8===c.nodeType){var r=c.data;if("/$"===r)if(0===f)break;else f--;else"$"!==r&&"$?"!==r&&"$~"!==r&&"$!"!==r||f++}else if(1===c.nodeType){d=c;var D=d.getAttribute("vt-name"),y=m.get(D);k(d,y?"vt-share":"vt-exit");y&&(k(y,"vt-share"),m.set(D,null));var E=d.querySelectorAll("[vt-share]");for(d=0;d<E.length;d++){var F=E[d],G=F.getAttribute("vt-name"),
H=m.get(G);H&&(k(F,"vt-share"),k(H,"vt-share"),m.set(G,null))}}c=c.nextSibling}for(var I=g[h+1],t=I.firstElementChild;t;)null!==m.get(t.getAttribute("vt-name"))&&k(t,"vt-enter"),t=t.nextElementSibling;c=x;do for(var n=c.firstElementChild;n;){var J=n.getAttribute("vt-update");J&&"none"!==J&&!l.includes(n)&&k(n,"vt-update");n=n.nextElementSibling}while((c=c.parentNode)&&1===c.nodeType&&"none"!==c.getAttribute("vt-update"));u.push.apply(u,I.querySelectorAll('img[src]:not([loading="lazy"])'))}}}if(B){var z=
document.__reactViewTransition=document.startViewTransition({update:function(){A(g);for(var a=[document.documentElement.clientHeight,document.fonts.ready],b={},e=0;e<u.length;b={g:b.g},e++)if(b.g=u[e],!b.g.complete){var p=b.g.getBoundingClientRect();0<p.bottom&&0<p.right&&p.top<window.innerHeight&&p.left<window.innerWidth&&(p=new Promise(function(w){return function(q){w.g.addEventListener("load",q);w.g.addEventListener("error",q)}}(b)),a.push(p))}return Promise.race([Promise.all(a),new Promise(function(w){var q=
performance.now();setTimeout(w,2300>q&&2E3<q?2300-q:500)})])},types:[]});z.ready.finally(function(){for(var a=l.length-3;0<=a;a-=3){var b=l[a],e=b.style;e.viewTransitionName=l[a+1];e.viewTransitionClass=l[a+1];""===b.getAttribute("style")&&b.removeAttribute("style")}});z.finished.finally(function(){document.__reactViewTransition===z&&(document.__reactViewTransition=null)});$RB=[];return}}catch(a){}A(g)}.bind(null,$RV);`
  );
  var bo = M('$RC("'), Dt = M(
    `$RM=new Map;$RR=function(n,w,p){function u(q){this._p=null;q()}for(var r=new Map,t=document,h,b,e=t.querySelectorAll("link[data-precedence],style[data-precedence]"),v=[],k=0;b=e[k++];)"not all"===b.getAttribute("media")?v.push(b):("LINK"===b.tagName&&$RM.set(b.getAttribute("href"),b),r.set(b.dataset.precedence,h=b));e=0;b=[];var l,a;for(k=!0;;){if(k){var f=p[e++];if(!f){k=!1;e=0;continue}var c=!1,m=0;var d=f[m++];if(a=$RM.get(d)){var g=a._p;c=!0}else{a=t.createElement("link");a.href=d;a.rel=
"stylesheet";for(a.dataset.precedence=l=f[m++];g=f[m++];)a.setAttribute(g,f[m++]);g=a._p=new Promise(function(q,x){a.onload=u.bind(a,q);a.onerror=u.bind(a,x)});$RM.set(d,a)}d=a.getAttribute("media");!g||d&&!matchMedia(d).matches||b.push(g);if(c)continue}else{a=v[e++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=r.get(l)||h;c===h&&(h=a);r.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=t.head,c.insertBefore(a,c.firstChild))}if(p=document.getElementById(n))p.previousSibling.data=
"$~";Promise.all(b).then($RC.bind(null,n,w),$RX.bind(null,n,"CSS failed to load"))};$RR("`
  ), ts = M('$RR("'), Qi = M('","'), eu = M('",'), Lu = M('"'), Pi = M(")<\/script>");
  M('<template data-rci="" data-bid="'), M('<template data-rri="" data-bid="'), M('" data-sid="'), M('" data-sty="');
  var Ki = M(
    '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};'
  ), yo = M(
    '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("'
  ), Hl = M('$RX("'), qi = M('"'), ji = M(","), pc = M(")<\/script>");
  M('<template data-rxi="" data-bid="'), M('" data-dgst="'), M('" data-msg="'), M('" data-stck="'), M('" data-cstck="');
  var xs = /[<\u2028\u2029]/g;
  function Ma(l) {
    return JSON.stringify(l).replace(
      xs,
      function(a) {
        switch (a) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw Error(
              "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
            );
        }
      }
    );
  }
  var Tt = /[&><\u2028\u2029]/g;
  function ri(l) {
    return JSON.stringify(l).replace(
      Tt,
      function(a) {
        switch (a) {
          case "&":
            return "\\u0026";
          case ">":
            return "\\u003e";
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw Error(
              "escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
            );
        }
      }
    );
  }
  var nu = M(
    ' media="not all" data-precedence="'
  ), tu = M('" data-href="'), Hu = M('">'), rl = M("</style>"), ll = !1, Wr = !0;
  function il(l) {
    var a = l.rules, s = l.hrefs, v = 0;
    if (s.length) {
      for (K(this, Il.startInlineStyle), K(this, nu), K(this, l.precedence), K(this, tu); v < s.length - 1; v++)
        K(this, s[v]), K(this, ru);
      for (K(this, s[v]), K(this, Hu), v = 0; v < a.length; v++) K(this, a[v]);
      Wr = ce(
        this,
        rl
      ), ll = !0, a.length = 0, s.length = 0;
    }
  }
  function Fn(l) {
    return l.state !== 2 ? ll = !0 : !1;
  }
  function al(l, a, s) {
    return ll = !1, Wr = !0, Il = s, a.styles.forEach(il, l), Il = null, a.stylesheets.forEach(Fn), ll && (s.stylesToHoist = !0), Wr;
  }
  function Un(l) {
    for (var a = 0; a < l.length; a++) K(this, l[a]);
    l.length = 0;
  }
  var zl = [];
  function zu(l) {
    Wn(zl, l.props);
    for (var a = 0; a < zl.length; a++)
      K(this, zl[a]);
    zl.length = 0, l.state = 2;
  }
  var Bu = M(' data-precedence="'), Nu = M('" data-href="'), ru = M(" "), Fi = M('">'), lu = M("</style>");
  function iu(l) {
    var a = 0 < l.sheets.size;
    l.sheets.forEach(zu, this), l.sheets.clear();
    var s = l.rules, v = l.hrefs;
    if (!a || v.length) {
      if (K(this, Il.startInlineStyle), K(this, Bu), K(this, l.precedence), l = 0, v.length) {
        for (K(this, Nu); l < v.length - 1; l++)
          K(this, v[l]), K(this, ru);
        K(this, v[l]);
      }
      for (K(this, Fi), l = 0; l < s.length; l++)
        K(this, s[l]);
      K(this, lu), s.length = 0, v.length = 0;
    }
  }
  function Ir(l) {
    if (l.state === 0) {
      l.state = 1;
      var a = l.props;
      for (Wn(zl, {
        rel: "preload",
        as: "style",
        href: l.props.href,
        crossOrigin: a.crossOrigin,
        fetchPriority: a.fetchPriority,
        integrity: a.integrity,
        media: a.media,
        hrefLang: a.hrefLang,
        referrerPolicy: a.referrerPolicy
      }), l = 0; l < zl.length; l++)
        K(this, zl[l]);
      zl.length = 0;
    }
  }
  function Yn(l) {
    l.sheets.forEach(Ir, this), l.sheets.clear();
  }
  M('<link rel="expect" href="#'), M('" blocking="render"/>');
  var sn = M(' id="');
  function $i(l, a) {
    (a.instructions & 32) === 0 && (a.instructions |= 32, l.push(
      sn,
      oe(ze("_" + a.idPrefix + "R_")),
      Pn
    ));
  }
  var Ia = M("["), Oa = M(",["), ea = M(","), Ac = M("]");
  function Ut(l, a) {
    K(l, Ia);
    var s = Ia;
    a.stylesheets.forEach(function(v) {
      if (v.state !== 2)
        if (v.state === 3)
          K(l, s), K(
            l,
            oe(
              ri("" + v.props.href)
            )
          ), K(l, Ac), s = Oa;
        else {
          K(l, s);
          var w = v.props["data-precedence"], C = v.props, S = wa("" + v.props.href);
          K(
            l,
            oe(ri(S))
          ), w = "" + w, K(l, ea), K(
            l,
            oe(ri(w))
          );
          for (var H in C)
            if (Ie.call(C, H) && (w = C[H], w != null))
              switch (H) {
                case "href":
                case "rel":
                case "precedence":
                case "data-precedence":
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(E(399, "link"));
                default:
                  Es(
                    l,
                    H,
                    w
                  );
              }
          K(l, Ac), s = Oa, v.state = 3;
        }
    }), K(l, Ac);
  }
  function Es(l, a, s) {
    var v = a.toLowerCase();
    switch (typeof s) {
      case "function":
      case "symbol":
        return;
    }
    switch (a) {
      case "innerHTML":
      case "dangerouslySetInnerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "style":
      case "ref":
        return;
      case "className":
        v = "class", a = "" + s;
        break;
      case "hidden":
        if (s === !1) return;
        a = "";
        break;
      case "src":
      case "href":
        s = wa(s), a = "" + s;
        break;
      default:
        if (2 < a.length && (a[0] === "o" || a[0] === "O") && (a[1] === "n" || a[1] === "N") || !Br(a))
          return;
        a = "" + s;
    }
    K(l, ea), K(
      l,
      oe(ri(v))
    ), K(l, ea), K(
      l,
      oe(ri(a))
    );
  }
  function Bl() {
    return { styles: /* @__PURE__ */ new Set(), stylesheets: /* @__PURE__ */ new Set(), suspenseyImages: !1 };
  }
  function rs(l) {
    var a = Je || null;
    if (a) {
      var s = a.resumableState, v = a.renderState;
      if (typeof l == "string" && l) {
        if (!s.dnsResources.hasOwnProperty(l)) {
          s.dnsResources[l] = null, s = v.headers;
          var w, C;
          (C = s && 0 < s.remainingCapacity) && (C = (w = "<" + ("" + l).replace(
            ma,
            qt
          ) + ">; rel=dns-prefetch", 0 <= (s.remainingCapacity -= w.length + 2))), C ? (v.resets.dns[l] = null, s.preconnects && (s.preconnects += ", "), s.preconnects += w) : (w = [], Wn(w, { href: l, rel: "dns-prefetch" }), v.preconnects.add(w));
        }
        sa(a);
      }
    } else Ml.D(l);
  }
  function Mc(l, a) {
    var s = Je || null;
    if (s) {
      var v = s.resumableState, w = s.renderState;
      if (typeof l == "string" && l) {
        var C = a === "use-credentials" ? "credentials" : typeof a == "string" ? "anonymous" : "default";
        if (!v.connectResources[C].hasOwnProperty(l)) {
          v.connectResources[C][l] = null, v = w.headers;
          var S, H;
          if (H = v && 0 < v.remainingCapacity) {
            if (H = "<" + ("" + l).replace(
              ma,
              qt
            ) + ">; rel=preconnect", typeof a == "string") {
              var O = ("" + a).replace(
                Yt,
                na
              );
              H += '; crossorigin="' + O + '"';
            }
            H = (S = H, 0 <= (v.remainingCapacity -= S.length + 2));
          }
          H ? (w.resets.connect[C][l] = null, v.preconnects && (v.preconnects += ", "), v.preconnects += S) : (C = [], Wn(C, {
            rel: "preconnect",
            href: l,
            crossOrigin: a
          }), w.preconnects.add(C));
        }
        sa(s);
      }
    } else Ml.C(l, a);
  }
  function li(l, a, s) {
    var v = Je || null;
    if (v) {
      var w = v.resumableState, C = v.renderState;
      if (a && l) {
        switch (a) {
          case "image":
            if (s)
              var S = s.imageSrcSet, H = s.imageSizes, O = s.fetchPriority;
            var z = S ? S + `
` + (H || "") : l;
            if (w.imageResources.hasOwnProperty(z)) return;
            w.imageResources[z] = Ft, w = C.headers;
            var G;
            w && 0 < w.remainingCapacity && typeof S != "string" && O === "high" && (G = Wu(l, a, s), 0 <= (w.remainingCapacity -= G.length + 2)) ? (C.resets.image[z] = Ft, w.highImagePreloads && (w.highImagePreloads += ", "), w.highImagePreloads += G) : (w = [], Wn(
              w,
              we(
                { rel: "preload", href: S ? void 0 : l, as: a },
                s
              )
            ), O === "high" ? C.highImagePreloads.add(w) : (C.bulkPreloads.add(w), C.preloads.images.set(z, w)));
            break;
          case "style":
            if (w.styleResources.hasOwnProperty(l)) return;
            S = [], Wn(
              S,
              we({ rel: "preload", href: l, as: a }, s)
            ), w.styleResources[l] = !s || typeof s.crossOrigin != "string" && typeof s.integrity != "string" ? Ft : [s.crossOrigin, s.integrity], C.preloads.stylesheets.set(l, S), C.bulkPreloads.add(S);
            break;
          case "script":
            if (w.scriptResources.hasOwnProperty(l)) return;
            S = [], C.preloads.scripts.set(l, S), C.bulkPreloads.add(S), Wn(
              S,
              we({ rel: "preload", href: l, as: a }, s)
            ), w.scriptResources[l] = !s || typeof s.crossOrigin != "string" && typeof s.integrity != "string" ? Ft : [s.crossOrigin, s.integrity];
            break;
          default:
            if (w.unknownResources.hasOwnProperty(a)) {
              if (S = w.unknownResources[a], S.hasOwnProperty(l))
                return;
            } else
              S = {}, w.unknownResources[a] = S;
            if (S[l] = Ft, (w = C.headers) && 0 < w.remainingCapacity && a === "font" && (z = Wu(l, a, s), 0 <= (w.remainingCapacity -= z.length + 2)))
              C.resets.font[l] = Ft, w.fontPreloads && (w.fontPreloads += ", "), w.fontPreloads += z;
            else
              switch (w = [], l = we({ rel: "preload", href: l, as: a }, s), Wn(w, l), a) {
                case "font":
                  C.fontPreloads.add(w);
                  break;
                default:
                  C.bulkPreloads.add(w);
              }
        }
        sa(v);
      }
    } else Ml.L(l, a, s);
  }
  function au(l, a) {
    var s = Je || null;
    if (s) {
      var v = s.resumableState, w = s.renderState;
      if (l) {
        var C = a && typeof a.as == "string" ? a.as : "script";
        switch (C) {
          case "script":
            if (v.moduleScriptResources.hasOwnProperty(l)) return;
            C = [], v.moduleScriptResources[l] = !a || typeof a.crossOrigin != "string" && typeof a.integrity != "string" ? Ft : [a.crossOrigin, a.integrity], w.preloads.moduleScripts.set(l, C);
            break;
          default:
            if (v.moduleUnknownResources.hasOwnProperty(C)) {
              var S = v.unknownResources[C];
              if (S.hasOwnProperty(l)) return;
            } else
              S = {}, v.moduleUnknownResources[C] = S;
            C = [], S[l] = Ft;
        }
        Wn(C, we({ rel: "modulepreload", href: l }, a)), w.bulkPreloads.add(C), sa(s);
      }
    } else Ml.m(l, a);
  }
  function Kt(l, a, s) {
    var v = Je || null;
    if (v) {
      var w = v.resumableState, C = v.renderState;
      if (l) {
        a = a || "default";
        var S = C.styles.get(a), H = w.styleResources.hasOwnProperty(l) ? w.styleResources[l] : void 0;
        H !== null && (w.styleResources[l] = null, S || (S = {
          precedence: oe(ze(a)),
          rules: [],
          hrefs: [],
          sheets: /* @__PURE__ */ new Map()
        }, C.styles.set(a, S)), a = {
          state: 0,
          props: we(
            { rel: "stylesheet", href: l, "data-precedence": a },
            s
          )
        }, H && (H.length === 2 && _a(a.props, H), (C = C.preloads.stylesheets.get(l)) && 0 < C.length ? C.length = 0 : a.state = 1), S.sheets.set(l, a), sa(v));
      }
    } else Ml.S(l, a, s);
  }
  function pi(l, a) {
    var s = Je || null;
    if (s) {
      var v = s.resumableState, w = s.renderState;
      if (l) {
        var C = v.scriptResources.hasOwnProperty(l) ? v.scriptResources[l] : void 0;
        C !== null && (v.scriptResources[l] = null, a = we({ src: l, async: !0 }, a), C && (C.length === 2 && _a(a, C), l = w.preloads.scripts.get(l)) && (l.length = 0), l = [], w.scripts.add(l), uo(l, a), sa(s));
      }
    } else Ml.X(l, a);
  }
  function ls(l, a) {
    var s = Je || null;
    if (s) {
      var v = s.resumableState, w = s.renderState;
      if (l) {
        var C = v.moduleScriptResources.hasOwnProperty(
          l
        ) ? v.moduleScriptResources[l] : void 0;
        C !== null && (v.moduleScriptResources[l] = null, a = we({ src: l, type: "module", async: !0 }, a), C && (C.length === 2 && _a(a, C), l = w.preloads.moduleScripts.get(l)) && (l.length = 0), l = [], w.scripts.add(l), uo(l, a), sa(s));
      }
    } else Ml.M(l, a);
  }
  function _a(l, a) {
    l.crossOrigin == null && (l.crossOrigin = a[0]), l.integrity == null && (l.integrity = a[1]);
  }
  function Wu(l, a, s) {
    l = ("" + l).replace(
      ma,
      qt
    ), a = ("" + a).replace(
      Yt,
      na
    ), a = "<" + l + '>; rel=preload; as="' + a + '"';
    for (var v in s)
      Ie.call(s, v) && (l = s[v], typeof l == "string" && (a += "; " + v.toLowerCase() + '="' + ("" + l).replace(
        Yt,
        na
      ) + '"'));
    return a;
  }
  var ma = /[<>\r\n]/g;
  function qt(l) {
    switch (l) {
      case "<":
        return "%3C";
      case ">":
        return "%3E";
      case `
`:
        return "%0A";
      case "\r":
        return "%0D";
      default:
        throw Error(
          "escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
        );
    }
  }
  var Yt = /["';,\r\n]/g;
  function na(l) {
    switch (l) {
      case '"':
        return "%22";
      case "'":
        return "%27";
      case ";":
        return "%3B";
      case ",":
        return "%2C";
      case `
`:
        return "%0A";
      case "\r":
        return "%0D";
      default:
        throw Error(
          "escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
        );
    }
  }
  function Ln(l) {
    this.styles.add(l);
  }
  function Rn(l) {
    this.stylesheets.add(l);
  }
  function Da(l, a) {
    a.styles.forEach(Ln, l), a.stylesheets.forEach(Rn, l), a.suspenseyImages && (l.suspenseyImages = !0);
  }
  function wo(l) {
    return 0 < l.stylesheets.size || l.suspenseyImages;
  }
  var Uu = Function.prototype.bind, To = Symbol.for("react.client.reference");
  function Ic(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === To ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case q:
        return "Fragment";
      case Te:
        return "Profiler";
      case de:
        return "StrictMode";
      case N:
        return "Suspense";
      case Re:
        return "SuspenseList";
      case Qn:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case j:
          return "Portal";
        case _e:
          return l.displayName || "Context";
        case Ae:
          return (l._context.displayName || "Context") + ".Consumer";
        case $e:
          var a = l.render;
          return l = l.displayName, l || (l = a.displayName || a.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case ot:
          return a = l.displayName || null, a !== null ? a : Ic(l.type) || "Memo";
        case re:
          a = l._payload, l = l._init;
          try {
            return Ic(l(a));
          } catch {
          }
      }
    return null;
  }
  var Rs = {}, jn = null;
  function Ai(l, a) {
    if (l !== a) {
      l.context._currentValue = l.parentValue, l = l.parent;
      var s = a.parent;
      if (l === null) {
        if (s !== null) throw Error(E(401));
      } else {
        if (s === null) throw Error(E(401));
        Ai(l, s);
      }
      a.context._currentValue = a.value;
    }
  }
  function is(l) {
    l.context._currentValue = l.parentValue, l = l.parent, l !== null && is(l);
  }
  function i(l) {
    var a = l.parent;
    a !== null && i(a), l.context._currentValue = l.value;
  }
  function o(l, a) {
    if (l.context._currentValue = l.parentValue, l = l.parent, l === null) throw Error(E(402));
    l.depth === a.depth ? Ai(l, a) : o(l, a);
  }
  function f(l, a) {
    var s = a.parent;
    if (s === null) throw Error(E(402));
    l.depth === s.depth ? Ai(l, s) : f(l, s), a.context._currentValue = a.value;
  }
  function g(l) {
    var a = jn;
    a !== l && (a === null ? i(l) : l === null ? is(a) : a.depth === l.depth ? Ai(a, l) : a.depth > l.depth ? o(a, l) : f(a, l), jn = l);
  }
  var T = {
    enqueueSetState: function(l, a) {
      l = l._reactInternals, l.queue !== null && l.queue.push(a);
    },
    enqueueReplaceState: function(l, a) {
      l = l._reactInternals, l.replace = !0, l.queue = [a];
    },
    enqueueForceUpdate: function() {
    }
  }, k = { id: 1, overflow: "" };
  function p(l, a, s) {
    var v = l.id;
    l = l.overflow;
    var w = 32 - X(v) - 1;
    v &= ~(1 << w), s += 1;
    var C = 32 - X(a) + w;
    if (30 < C) {
      var S = w - w % 5;
      return C = (v & (1 << S) - 1).toString(32), v >>= S, w -= S, {
        id: 1 << 32 - X(a) + w | s << w | v,
        overflow: C + l
      };
    }
    return {
      id: 1 << C | s << w | v,
      overflow: l
    };
  }
  var X = Math.clz32 ? Math.clz32 : ne, m = Math.log, Y = Math.LN2;
  function ne(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (m(l) / Y | 0) | 0;
  }
  function $() {
  }
  var fe = Error(E(460));
  function ke(l, a, s) {
    switch (s = l[s], s === void 0 ? l.push(a) : s !== a && (a.then($, $), a = s), a.status) {
      case "fulfilled":
        return a.value;
      case "rejected":
        throw a.reason;
      default:
        switch (typeof a.status == "string" ? a.then($, $) : (l = a, l.status = "pending", l.then(
          function(v) {
            if (a.status === "pending") {
              var w = a;
              w.status = "fulfilled", w.value = v;
            }
          },
          function(v) {
            if (a.status === "pending") {
              var w = a;
              w.status = "rejected", w.reason = v;
            }
          }
        )), a.status) {
          case "fulfilled":
            return a.value;
          case "rejected":
            throw a.reason;
        }
        throw Ze = a, fe;
    }
  }
  var Ze = null;
  function De() {
    if (Ze === null) throw Error(E(459));
    var l = Ze;
    return Ze = null, l;
  }
  function pe(l, a) {
    return l === a && (l !== 0 || 1 / l === 1 / a) || l !== l && a !== a;
  }
  var Be = typeof Object.is == "function" ? Object.is : pe, me = null, Gn = null, Ve = null, rn = null, bn = null, Ue = null, $n = !1, fn = !1, ur = 0, Tn = 0, an = -1, hn = 0, Ne = null, dn = null, Lt = 0;
  function Qe() {
    if (me === null)
      throw Error(E(321));
    return me;
  }
  function ta() {
    if (0 < Lt) throw Error(E(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Mi() {
    return Ue === null ? bn === null ? ($n = !1, bn = Ue = ta()) : ($n = !0, Ue = bn) : Ue.next === null ? ($n = !1, Ue = Ue.next = ta()) : ($n = !0, Ue = Ue.next), Ue;
  }
  function cr() {
    var l = Ne;
    return Ne = null, l;
  }
  function dl() {
    rn = Ve = Gn = me = null, fn = !1, bn = null, Lt = 0, Ue = dn = null;
  }
  function gl(l, a) {
    return typeof a == "function" ? a(l) : a;
  }
  function vl(l, a, s) {
    if (me = Qe(), Ue = Mi(), $n) {
      var v = Ue.queue;
      if (a = v.dispatch, dn !== null && (s = dn.get(v), s !== void 0)) {
        dn.delete(v), v = Ue.memoizedState;
        do
          v = l(v, s.action), s = s.next;
        while (s !== null);
        return Ue.memoizedState = v, [v, a];
      }
      return [Ue.memoizedState, a];
    }
    return l = l === gl ? typeof a == "function" ? a() : a : s !== void 0 ? s(a) : a, Ue.memoizedState = l, l = Ue.queue = { last: null, dispatch: null }, l = l.dispatch = Ii.bind(
      null,
      me,
      l
    ), [Ue.memoizedState, l];
  }
  function ii(l, a) {
    if (me = Qe(), Ue = Mi(), a = a === void 0 ? null : a, Ue !== null) {
      var s = Ue.memoizedState;
      if (s !== null && a !== null) {
        var v = s[1];
        e: if (v === null) v = !1;
        else {
          for (var w = 0; w < v.length && w < a.length; w++)
            if (!Be(a[w], v[w])) {
              v = !1;
              break e;
            }
          v = !0;
        }
        if (v) return s[0];
      }
    }
    return l = l(), Ue.memoizedState = [l, a], l;
  }
  function Ii(l, a, s) {
    if (25 <= Lt) throw Error(E(301));
    if (l === me)
      if (fn = !0, l = { action: s, next: null }, dn === null && (dn = /* @__PURE__ */ new Map()), s = dn.get(a), s === void 0)
        dn.set(a, l);
      else {
        for (a = s; a.next !== null; ) a = a.next;
        a.next = l;
      }
  }
  function Mt() {
    throw Error(E(440));
  }
  function La() {
    throw Error(E(394));
  }
  function Ha() {
    throw Error(E(479));
  }
  function ou(l, a, s) {
    Qe();
    var v = Tn++, w = Ve;
    if (typeof l.$$FORM_ACTION == "function") {
      var C = null, S = rn;
      w = w.formState;
      var H = l.$$IS_SIGNATURE_EQUAL;
      if (w !== null && typeof H == "function") {
        var O = w[1];
        H.call(l, w[2], w[3]) && (C = s !== void 0 ? "p" + s : "k" + _n(
          JSON.stringify([S, null, v]),
          0
        ), O === C && (an = v, a = w[0]));
      }
      var z = l.bind(null, a);
      return l = function(J) {
        z(J);
      }, typeof z.$$FORM_ACTION == "function" && (l.$$FORM_ACTION = function(J) {
        J = z.$$FORM_ACTION(J), s !== void 0 && (s += "", J.action = s);
        var ve = J.data;
        return ve && (C === null && (C = s !== void 0 ? "p" + s : "k" + _n(
          JSON.stringify([
            S,
            null,
            v
          ]),
          0
        )), ve.append("$ACTION_KEY", C)), J;
      }), [a, l, !1];
    }
    var G = l.bind(null, a);
    return [
      a,
      function(J) {
        G(J);
      },
      !1
    ];
  }
  function Yu(l) {
    var a = hn;
    return hn += 1, Ne === null && (Ne = []), ke(Ne, l, a);
  }
  function xo() {
    throw Error(E(393));
  }
  var ra = {
    readContext: function(l) {
      return l._currentValue;
    },
    use: function(l) {
      if (l !== null && typeof l == "object") {
        if (typeof l.then == "function") return Yu(l);
        if (l.$$typeof === _e) return l._currentValue;
      }
      throw Error(E(438, String(l)));
    },
    useContext: function(l) {
      return Qe(), l._currentValue;
    },
    useMemo: ii,
    useReducer: vl,
    useRef: function(l) {
      me = Qe(), Ue = Mi();
      var a = Ue.memoizedState;
      return a === null ? (l = { current: l }, Ue.memoizedState = l) : a;
    },
    useState: function(l) {
      return vl(gl, l);
    },
    useInsertionEffect: $,
    useLayoutEffect: $,
    useCallback: function(l, a) {
      return ii(function() {
        return l;
      }, a);
    },
    useImperativeHandle: $,
    useEffect: $,
    useDebugValue: $,
    useDeferredValue: function(l, a) {
      return Qe(), a !== void 0 ? a : l;
    },
    useTransition: function() {
      return Qe(), [!1, La];
    },
    useId: function() {
      var l = Gn.treeContext, a = l.overflow;
      l = l.id, l = (l & ~(1 << 32 - X(l) - 1)).toString(32) + a;
      var s = sr;
      if (s === null) throw Error(E(404));
      return a = ur++, l = "_" + s.idPrefix + "R_" + l, 0 < a && (l += "H" + a.toString(32)), l + "_";
    },
    useSyncExternalStore: function(l, a, s) {
      if (s === void 0)
        throw Error(E(407));
      return s();
    },
    useOptimistic: function(l) {
      return Qe(), [l, Ha];
    },
    useActionState: ou,
    useFormState: ou,
    useHostTransitionStatus: function() {
      return Qe(), Pr;
    },
    useMemoCache: function(l) {
      for (var a = Array(l), s = 0; s < l; s++)
        a[s] = zr;
      return a;
    },
    useCacheRefresh: function() {
      return xo;
    },
    useEffectEvent: function() {
      return Mt;
    }
  }, sr = null, uu = {
    getCacheForType: function() {
      throw Error(E(248));
    },
    cacheSignal: function() {
      throw Error(E(248));
    }
  }, fr, ol;
  function Oi(l) {
    if (fr === void 0)
      try {
        throw Error();
      } catch (s) {
        var a = s.stack.trim().match(/\n( *(at )?)/);
        fr = a && a[1] || "", ol = -1 < s.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < s.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + fr + l + ol;
  }
  var cu = !1;
  function _i(l, a) {
    if (!l || cu) return "";
    cu = !0;
    var s = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var v = {
        DetermineComponentFrameRoot: function() {
          try {
            if (a) {
              var J = function() {
                throw Error();
              };
              if (Object.defineProperty(J.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(J, []);
                } catch (ge) {
                  var ve = ge;
                }
                Reflect.construct(l, [], J);
              } else {
                try {
                  J.call();
                } catch (ge) {
                  ve = ge;
                }
                l.call(J.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (ge) {
                ve = ge;
              }
              (J = l()) && typeof J.catch == "function" && J.catch(function() {
              });
            }
          } catch (ge) {
            if (ge && ve && typeof ge.stack == "string")
              return [ge.stack, ve.stack];
          }
          return [null, null];
        }
      };
      v.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var w = Object.getOwnPropertyDescriptor(
        v.DetermineComponentFrameRoot,
        "name"
      );
      w && w.configurable && Object.defineProperty(
        v.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var C = v.DetermineComponentFrameRoot(), S = C[0], H = C[1];
      if (S && H) {
        var O = S.split(`
`), z = H.split(`
`);
        for (w = v = 0; v < O.length && !O[v].includes("DetermineComponentFrameRoot"); )
          v++;
        for (; w < z.length && !z[w].includes(
          "DetermineComponentFrameRoot"
        ); )
          w++;
        if (v === O.length || w === z.length)
          for (v = O.length - 1, w = z.length - 1; 1 <= v && 0 <= w && O[v] !== z[w]; )
            w--;
        for (; 1 <= v && 0 <= w; v--, w--)
          if (O[v] !== z[w]) {
            if (v !== 1 || w !== 1)
              do
                if (v--, w--, 0 > w || O[v] !== z[w]) {
                  var G = `
` + O[v].replace(" at new ", " at ");
                  return l.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", l.displayName)), G;
                }
              while (1 <= v && 0 <= w);
            break;
          }
      }
    } finally {
      cu = !1, Error.prepareStackTrace = s;
    }
    return (s = l ? l.displayName || l.name : "") ? Oi(s) : "";
  }
  function Gu(l) {
    if (typeof l == "string") return Oi(l);
    if (typeof l == "function")
      return l.prototype && l.prototype.isReactComponent ? _i(l, !0) : _i(l, !1);
    if (typeof l == "object" && l !== null) {
      switch (l.$$typeof) {
        case $e:
          return _i(l.render, !1);
        case ot:
          return _i(l.type, !1);
        case re:
          var a = l, s = a._payload;
          a = a._init;
          try {
            l = a(s);
          } catch {
            return Oi("Lazy");
          }
          return Gu(l);
      }
      if (typeof l.name == "string") {
        e: {
          s = l.name, a = l.env;
          var v = l.debugLocation;
          if (v != null && (l = Error.prepareStackTrace, Error.prepareStackTrace = void 0, v = v.stack, Error.prepareStackTrace = l, v.startsWith(`Error: react-stack-top-frame
`) && (v = v.slice(29)), l = v.indexOf(`
`), l !== -1 && (v = v.slice(l + 1)), l = v.indexOf("react_stack_bottom_frame"), l !== -1 && (l = v.lastIndexOf(`
`, l)), l = l !== -1 ? v = v.slice(0, l) : "", v = l.lastIndexOf(`
`), l = v === -1 ? l : l.slice(v + 1), l.indexOf(s) !== -1)) {
            s = `
` + l;
            break e;
          }
          s = Oi(
            s + (a ? " [" + a + "]" : "")
          );
        }
        return s;
      }
    }
    switch (l) {
      case Re:
        return Oi("SuspenseList");
      case N:
        return Oi("Suspense");
    }
    return "";
  }
  function xt(l, a) {
    return (500 < a.byteSize || wo(a.contentState)) && a.contentPreamble === null;
  }
  function su(l) {
    if (typeof l == "object" && l !== null && typeof l.environmentName == "string") {
      var a = l.environmentName;
      l = [l].slice(0), typeof l[0] == "string" ? l.splice(
        0,
        1,
        "%c%s%c " + l[0],
        "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",
        " " + a + " ",
        ""
      ) : l.splice(
        0,
        0,
        "%c%s%c",
        "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",
        " " + a + " ",
        ""
      ), l.unshift(console), a = Uu.apply(console.error, l), a();
    } else console.error(l);
    return null;
  }
  function la(l, a, s, v, w, C, S, H, O, z, G) {
    var J = /* @__PURE__ */ new Set();
    this.destination = null, this.flushScheduled = !1, this.resumableState = l, this.renderState = a, this.rootFormatContext = s, this.progressiveChunkSize = v === void 0 ? 12800 : v, this.status = 10, this.fatalError = null, this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0, this.completedPreambleSegments = this.completedRootSegment = null, this.byteSize = 0, this.abortableTasks = J, this.pingedTasks = [], this.clientRenderedBoundaries = [], this.completedBoundaries = [], this.partialBoundaries = [], this.trackedPostpones = null, this.onError = w === void 0 ? su : w, this.onPostpone = z === void 0 ? $ : z, this.onAllReady = C === void 0 ? $ : C, this.onShellReady = S === void 0 ? $ : S, this.onShellError = H === void 0 ? $ : H, this.onFatalError = O === void 0 ? $ : O, this.formState = G === void 0 ? null : G;
  }
  function Eo(l, a, s, v, w, C, S, H, O, z, G, J) {
    return a = new la(
      a,
      s,
      v,
      w,
      C,
      S,
      H,
      O,
      z,
      G,
      J
    ), s = Or(
      a,
      0,
      null,
      v,
      !1,
      !1
    ), s.parentFlushed = !0, l = ia(
      a,
      null,
      l,
      -1,
      null,
      s,
      null,
      null,
      a.abortableTasks,
      null,
      v,
      null,
      k,
      null,
      null
    ), aa(l), a.pingedTasks.push(l), a;
  }
  function za(l, a, s, v, w, C, S, H, O, z, G) {
    return l = Eo(
      l,
      a,
      s,
      v,
      w,
      C,
      S,
      H,
      O,
      z,
      G,
      void 0
    ), l.trackedPostpones = {
      workingMap: /* @__PURE__ */ new Map(),
      rootNodes: [],
      rootSlots: null
    }, l;
  }
  function dt(l, a, s, v, w, C, S, H, O) {
    return s = new la(
      a.resumableState,
      s,
      a.rootFormatContext,
      a.progressiveChunkSize,
      v,
      w,
      C,
      S,
      H,
      O,
      null
    ), s.nextSegmentId = a.nextSegmentId, typeof a.replaySlots == "number" ? (v = Or(
      s,
      0,
      null,
      a.rootFormatContext,
      !1,
      !1
    ), v.parentFlushed = !0, l = ia(
      s,
      null,
      l,
      -1,
      null,
      v,
      null,
      null,
      s.abortableTasks,
      null,
      a.rootFormatContext,
      null,
      k,
      null,
      null
    ), aa(l), s.pingedTasks.push(l), s) : (l = et(
      s,
      null,
      {
        nodes: a.replayNodes,
        slots: a.replaySlots,
        pendingTasks: 0
      },
      l,
      -1,
      null,
      null,
      s.abortableTasks,
      null,
      a.rootFormatContext,
      null,
      k,
      null,
      null
    ), aa(l), s.pingedTasks.push(l), s);
  }
  function ul(l, a, s, v, w, C, S, H, O) {
    return l = dt(
      l,
      a,
      s,
      v,
      w,
      C,
      S,
      H,
      O
    ), l.trackedPostpones = {
      workingMap: /* @__PURE__ */ new Map(),
      rootNodes: [],
      rootSlots: null
    }, l;
  }
  var Je = null;
  function mi(l, a) {
    l.pingedTasks.push(a), l.pingedTasks.length === 1 && (l.flushScheduled = l.destination !== null, l.trackedPostpones !== null || l.status === 10 ? Ot(function() {
      return as(l);
    }) : at(function() {
      return as(l);
    }));
  }
  function Ro(l, a, s, v, w) {
    return s = {
      status: 0,
      rootSegmentID: -1,
      parentFlushed: !1,
      pendingTasks: 0,
      row: a,
      completedSegments: [],
      byteSize: 0,
      fallbackAbortableTasks: s,
      errorDigest: null,
      contentState: Bl(),
      fallbackState: Bl(),
      contentPreamble: v,
      fallbackPreamble: w,
      trackedContentKeyPath: null,
      trackedFallbackNode: null
    }, a !== null && (a.pendingTasks++, v = a.boundaries, v !== null && (l.allPendingTasks++, s.pendingTasks++, v.push(s)), l = a.inheritedHoistables, l !== null && Da(s.contentState, l)), s;
  }
  function ia(l, a, s, v, w, C, S, H, O, z, G, J, ve, ge, en) {
    l.allPendingTasks++, w === null ? l.pendingRootTasks++ : w.pendingTasks++, ge !== null && ge.pendingTasks++;
    var Le = {
      replay: null,
      node: s,
      childIndex: v,
      ping: function() {
        return mi(l, Le);
      },
      blockedBoundary: w,
      blockedSegment: C,
      blockedPreamble: S,
      hoistableState: H,
      abortSet: O,
      keyPath: z,
      formatContext: G,
      context: J,
      treeContext: ve,
      row: ge,
      componentStack: en,
      thenableState: a
    };
    return O.add(Le), Le;
  }
  function et(l, a, s, v, w, C, S, H, O, z, G, J, ve, ge) {
    l.allPendingTasks++, C === null ? l.pendingRootTasks++ : C.pendingTasks++, ve !== null && ve.pendingTasks++, s.pendingTasks++;
    var en = {
      replay: s,
      node: v,
      childIndex: w,
      ping: function() {
        return mi(l, en);
      },
      blockedBoundary: C,
      blockedSegment: null,
      blockedPreamble: null,
      hoistableState: S,
      abortSet: H,
      keyPath: O,
      formatContext: z,
      context: G,
      treeContext: J,
      row: ve,
      componentStack: ge,
      thenableState: a
    };
    return H.add(en), en;
  }
  function Or(l, a, s, v, w, C) {
    return {
      status: 0,
      parentFlushed: !1,
      id: -1,
      index: a,
      chunks: [],
      children: [],
      preambleChildren: [],
      parentFormatContext: v,
      boundary: s,
      lastPushedText: w,
      textEmbedded: C
    };
  }
  function aa(l) {
    var a = l.node;
    if (typeof a == "object" && a !== null)
      switch (a.$$typeof) {
        case U:
          l.componentStack = { parent: l.componentStack, type: a.type };
      }
  }
  function Ba(l) {
    return l === null ? null : { parent: l.parent, type: "Suspense Fallback" };
  }
  function bl(l) {
    var a = {};
    return l && Object.defineProperty(a, "componentStack", {
      configurable: !0,
      enumerable: !0,
      get: function() {
        try {
          var s = "", v = l;
          do
            s += Gu(v.type), v = v.parent;
          while (v);
          var w = s;
        } catch (C) {
          w = `
Error generating stack: ` + C.message + `
` + C.stack;
        }
        return Object.defineProperty(a, "componentStack", {
          value: w
        }), w;
      }
    }), a;
  }
  function jt(l, a, s) {
    if (l = l.onError, a = l(a, s), a == null || typeof a == "string") return a;
  }
  function Co(l, a) {
    var s = l.onShellError, v = l.onFatalError;
    s(a), v(a), l.destination !== null ? (l.status = 14, Ge(l.destination, a)) : (l.status = 13, l.fatalError = a);
  }
  function hr(l, a) {
    Oc(l, a.next, a.hoistables);
  }
  function Oc(l, a, s) {
    for (; a !== null; ) {
      s !== null && (Da(a.hoistables, s), a.inheritedHoistables = s);
      var v = a.boundaries;
      if (v !== null) {
        a.boundaries = null;
        for (var w = 0; w < v.length; w++) {
          var C = v[w];
          s !== null && Da(C.contentState, s), yl(l, C, null, null);
        }
      }
      if (a.pendingTasks--, 0 < a.pendingTasks) break;
      s = a.hoistables, a = a.next;
    }
  }
  function Na(l, a) {
    var s = a.boundaries;
    if (s !== null && a.pendingTasks === s.length) {
      for (var v = !0, w = 0; w < s.length; w++) {
        var C = s[w];
        if (C.pendingTasks !== 1 || C.parentFlushed || xt(l, C)) {
          v = !1;
          break;
        }
      }
      v && Oc(l, a, a.hoistables);
    }
  }
  function fu(l) {
    var a = {
      pendingTasks: 1,
      boundaries: null,
      hoistables: Bl(),
      inheritedHoistables: null,
      together: !1,
      next: null
    };
    return l !== null && 0 < l.pendingTasks && (a.pendingTasks++, a.boundaries = [], l.next = a), a;
  }
  function Xu(l, a, s, v, w) {
    var C = a.keyPath, S = a.treeContext, H = a.row;
    a.keyPath = s, s = v.length;
    var O = null;
    if (a.replay !== null) {
      var z = a.replay.slots;
      if (z !== null && typeof z == "object")
        for (var G = 0; G < s; G++) {
          var J = w !== "backwards" && w !== "unstable_legacy-backwards" ? G : s - 1 - G, ve = v[J];
          a.row = O = fu(
            O
          ), a.treeContext = p(S, s, J);
          var ge = z[J];
          typeof ge == "number" ? (Ua(l, a, ge, ve, J), delete z[J]) : Et(l, a, ve, J), --O.pendingTasks === 0 && hr(l, O);
        }
      else
        for (z = 0; z < s; z++)
          G = w !== "backwards" && w !== "unstable_legacy-backwards" ? z : s - 1 - z, J = v[G], a.row = O = fu(O), a.treeContext = p(S, s, G), Et(l, a, J, G), --O.pendingTasks === 0 && hr(l, O);
    } else if (w !== "backwards" && w !== "unstable_legacy-backwards")
      for (w = 0; w < s; w++)
        z = v[w], a.row = O = fu(O), a.treeContext = p(
          S,
          s,
          w
        ), Et(l, a, z, w), --O.pendingTasks === 0 && hr(l, O);
    else {
      for (w = a.blockedSegment, z = w.children.length, G = w.chunks.length, J = s - 1; 0 <= J; J--) {
        ve = v[J], a.row = O = fu(
          O
        ), a.treeContext = p(S, s, J), ge = Or(
          l,
          G,
          null,
          a.formatContext,
          J === 0 ? w.lastPushedText : !0,
          !0
        ), w.children.splice(z, 0, ge), a.blockedSegment = ge;
        try {
          Et(l, a, ve, J), ge.lastPushedText && ge.textEmbedded && ge.chunks.push(Ql), ge.status = 1, oa(l, a.blockedBoundary, ge), --O.pendingTasks === 0 && hr(l, O);
        } catch (en) {
          throw ge.status = l.status === 12 ? 3 : 4, en;
        }
      }
      a.blockedSegment = w, w.lastPushedText = !1;
    }
    H !== null && O !== null && 0 < O.pendingTasks && (H.pendingTasks++, O.next = H), a.treeContext = S, a.row = H, a.keyPath = C;
  }
  function Zu(l, a, s, v, w, C) {
    var S = a.thenableState;
    for (a.thenableState = null, me = {}, Gn = a, Ve = l, rn = s, Tn = ur = 0, an = -1, hn = 0, Ne = S, l = v(w, C); fn; )
      fn = !1, Tn = ur = 0, an = -1, hn = 0, Lt += 1, Ue = null, l = v(w, C);
    return dl(), l;
  }
  function ai(l, a, s, v, w, C, S) {
    var H = !1;
    if (C !== 0 && l.formState !== null) {
      var O = a.blockedSegment;
      if (O !== null) {
        H = !0, O = O.chunks;
        for (var z = 0; z < C; z++)
          z === S ? O.push(Ec) : O.push(Ou);
      }
    }
    C = a.keyPath, a.keyPath = s, w ? (s = a.treeContext, a.treeContext = p(s, 1, 0), Et(l, a, v, -1), a.treeContext = s) : H ? Et(l, a, v, -1) : dr(l, a, v, -1), a.keyPath = C;
  }
  function Wa(l, a, s, v, w, C) {
    if (typeof v == "function")
      if (v.prototype && v.prototype.isReactComponent) {
        var S = w;
        if ("ref" in w) {
          S = {};
          for (var H in w)
            H !== "ref" && (S[H] = w[H]);
        }
        var O = v.defaultProps;
        if (O) {
          S === w && (S = we({}, S, w));
          for (var z in O)
            S[z] === void 0 && (S[z] = O[z]);
        }
        w = S, S = Rs, O = v.contextType, typeof O == "object" && O !== null && (S = O._currentValue), S = new v(w, S);
        var G = S.state !== void 0 ? S.state : null;
        if (S.updater = T, S.props = w, S.state = G, O = { queue: [], replace: !1 }, S._reactInternals = O, C = v.contextType, S.context = typeof C == "object" && C !== null ? C._currentValue : Rs, C = v.getDerivedStateFromProps, typeof C == "function" && (C = C(w, G), G = C == null ? G : we({}, G, C), S.state = G), typeof v.getDerivedStateFromProps != "function" && typeof S.getSnapshotBeforeUpdate != "function" && (typeof S.UNSAFE_componentWillMount == "function" || typeof S.componentWillMount == "function"))
          if (v = S.state, typeof S.componentWillMount == "function" && S.componentWillMount(), typeof S.UNSAFE_componentWillMount == "function" && S.UNSAFE_componentWillMount(), v !== S.state && T.enqueueReplaceState(
            S,
            S.state,
            null
          ), O.queue !== null && 0 < O.queue.length)
            if (v = O.queue, C = O.replace, O.queue = null, O.replace = !1, C && v.length === 1)
              S.state = v[0];
            else {
              for (O = C ? v[0] : S.state, G = !0, C = C ? 1 : 0; C < v.length; C++)
                z = v[C], z = typeof z == "function" ? z.call(S, O, w, void 0) : z, z != null && (G ? (G = !1, O = we({}, O, z)) : we(O, z));
              S.state = O;
            }
          else O.queue = null;
        if (v = S.render(), l.status === 12) throw null;
        w = a.keyPath, a.keyPath = s, dr(l, a, v, -1), a.keyPath = w;
      } else {
        if (v = Zu(l, a, s, v, w, void 0), l.status === 12) throw null;
        ai(
          l,
          a,
          s,
          v,
          ur !== 0,
          Tn,
          an
        );
      }
    else if (typeof v == "string")
      if (S = a.blockedSegment, S === null)
        S = w.children, O = a.formatContext, G = a.keyPath, a.formatContext = Ea(O, v, w), a.keyPath = s, Et(l, a, S, -1), a.formatContext = O, a.keyPath = G;
      else {
        if (G = Ko(
          S.chunks,
          v,
          w,
          l.resumableState,
          l.renderState,
          a.blockedPreamble,
          a.hoistableState,
          a.formatContext,
          S.lastPushedText
        ), S.lastPushedText = !1, O = a.formatContext, C = a.keyPath, a.keyPath = s, (a.formatContext = Ea(O, v, w)).insertionMode === 3) {
          s = Or(
            l,
            0,
            null,
            a.formatContext,
            !1,
            !1
          ), S.preambleChildren.push(s), a.blockedSegment = s;
          try {
            s.status = 6, Et(l, a, G, -1), s.lastPushedText && s.textEmbedded && s.chunks.push(Ql), s.status = 1, oa(l, a.blockedBoundary, s);
          } finally {
            a.blockedSegment = S;
          }
        } else Et(l, a, G, -1);
        a.formatContext = O, a.keyPath = C;
        e: {
          switch (a = S.chunks, l = l.resumableState, v) {
            case "title":
            case "style":
            case "script":
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
              break e;
            case "body":
              if (1 >= O.insertionMode) {
                l.hasBody = !0;
                break e;
              }
              break;
            case "html":
              if (O.insertionMode === 0) {
                l.hasHtml = !0;
                break e;
              }
              break;
            case "head":
              if (1 >= O.insertionMode) break e;
          }
          a.push($l(v));
        }
        S.lastPushedText = !1;
      }
    else {
      switch (v) {
        case Vl:
        case de:
        case Te:
        case q:
          v = a.keyPath, a.keyPath = s, dr(l, a, w.children, -1), a.keyPath = v;
          return;
        case Qn:
          v = a.blockedSegment, v === null ? w.mode !== "hidden" && (v = a.keyPath, a.keyPath = s, Et(l, a, w.children, -1), a.keyPath = v) : w.mode !== "hidden" && (v.chunks.push(pr), v.lastPushedText = !1, S = a.keyPath, a.keyPath = s, Et(l, a, w.children, -1), a.keyPath = S, v.chunks.push($o), v.lastPushedText = !1);
          return;
        case Re:
          e: {
            if (v = w.children, w = w.revealOrder, w === "forwards" || w === "backwards" || w === "unstable_legacy-backwards") {
              if (Ce(v)) {
                Xu(l, a, s, v, w);
                break e;
              }
              if ((S = ut(v)) && (S = S.call(v))) {
                if (O = S.next(), !O.done) {
                  do
                    O = S.next();
                  while (!O.done);
                  Xu(l, a, s, v, w);
                }
                break e;
              }
            }
            w === "together" ? (w = a.keyPath, S = a.row, O = a.row = fu(null), O.boundaries = [], O.together = !0, a.keyPath = s, dr(l, a, v, -1), --O.pendingTasks === 0 && hr(l, O), a.keyPath = w, a.row = S, S !== null && 0 < O.pendingTasks && (S.pendingTasks++, O.next = S)) : (w = a.keyPath, a.keyPath = s, dr(l, a, v, -1), a.keyPath = w);
          }
          return;
        case $r:
        case Z:
          throw Error(E(343));
        case N:
          e: if (a.replay !== null) {
            v = a.keyPath, S = a.formatContext, O = a.row, a.keyPath = s, a.formatContext = hl(
              l.resumableState,
              S
            ), a.row = null, s = w.children;
            try {
              Et(l, a, s, -1);
            } finally {
              a.keyPath = v, a.formatContext = S, a.row = O;
            }
          } else {
            v = a.keyPath, C = a.formatContext;
            var J = a.row;
            z = a.blockedBoundary, H = a.blockedPreamble;
            var ve = a.hoistableState, ge = a.blockedSegment, en = w.fallback;
            w = w.children;
            var Le = /* @__PURE__ */ new Set(), nn = 2 > a.formatContext.insertionMode ? Ro(
              l,
              a.row,
              Le,
              qn(),
              qn()
            ) : Ro(
              l,
              a.row,
              Le,
              null,
              null
            );
            l.trackedPostpones !== null && (nn.trackedContentKeyPath = s);
            var nt = Or(
              l,
              ge.chunks.length,
              nn,
              a.formatContext,
              !1,
              !1
            );
            ge.children.push(nt), ge.lastPushedText = !1;
            var Hn = Or(
              l,
              0,
              null,
              a.formatContext,
              !1,
              !1
            );
            if (Hn.parentFlushed = !0, l.trackedPostpones !== null) {
              S = a.componentStack, O = [s[0], "Suspense Fallback", s[2]], G = [O[1], O[2], [], null], l.trackedPostpones.workingMap.set(O, G), nn.trackedFallbackNode = G, a.blockedSegment = nt, a.blockedPreamble = nn.fallbackPreamble, a.keyPath = O, a.formatContext = xc(
                l.resumableState,
                C
              ), a.componentStack = Ba(S), nt.status = 6;
              try {
                Et(l, a, en, -1), nt.lastPushedText && nt.textEmbedded && nt.chunks.push(Ql), nt.status = 1, oa(l, z, nt);
              } catch ($t) {
                throw nt.status = l.status === 12 ? 3 : 4, $t;
              } finally {
                a.blockedSegment = ge, a.blockedPreamble = H, a.keyPath = v, a.formatContext = C;
              }
              a = ia(
                l,
                null,
                w,
                -1,
                nn,
                Hn,
                nn.contentPreamble,
                nn.contentState,
                a.abortSet,
                s,
                hl(
                  l.resumableState,
                  a.formatContext
                ),
                a.context,
                a.treeContext,
                null,
                S
              ), aa(a), l.pingedTasks.push(a);
            } else {
              a.blockedBoundary = nn, a.blockedPreamble = nn.contentPreamble, a.hoistableState = nn.contentState, a.blockedSegment = Hn, a.keyPath = s, a.formatContext = hl(
                l.resumableState,
                C
              ), a.row = null, Hn.status = 6;
              try {
                if (Et(l, a, w, -1), Hn.lastPushedText && Hn.textEmbedded && Hn.chunks.push(Ql), Hn.status = 1, oa(l, nn, Hn), qu(nn, Hn), nn.pendingTasks === 0 && nn.status === 0) {
                  if (nn.status = 1, !xt(l, nn)) {
                    J !== null && --J.pendingTasks === 0 && hr(l, J), l.pendingRootTasks === 0 && a.blockedPreamble && Nl(l);
                    break e;
                  }
                } else
                  J !== null && J.together && Na(l, J);
              } catch ($t) {
                nn.status = 4, l.status === 12 ? (Hn.status = 3, S = l.fatalError) : (Hn.status = 4, S = $t), O = bl(a.componentStack), G = jt(
                  l,
                  S,
                  O
                ), nn.errorDigest = G, Vu(l, nn);
              } finally {
                a.blockedBoundary = z, a.blockedPreamble = H, a.hoistableState = ve, a.blockedSegment = ge, a.keyPath = v, a.formatContext = C, a.row = J;
              }
              a = ia(
                l,
                null,
                en,
                -1,
                z,
                nt,
                nn.fallbackPreamble,
                nn.fallbackState,
                Le,
                [s[0], "Suspense Fallback", s[2]],
                xc(
                  l.resumableState,
                  a.formatContext
                ),
                a.context,
                a.treeContext,
                a.row,
                Ba(
                  a.componentStack
                )
              ), aa(a), l.pingedTasks.push(a);
            }
          }
          return;
      }
      if (typeof v == "object" && v !== null)
        switch (v.$$typeof) {
          case $e:
            if ("ref" in w)
              for (ge in S = {}, w)
                ge !== "ref" && (S[ge] = w[ge]);
            else S = w;
            v = Zu(
              l,
              a,
              s,
              v.render,
              S,
              C
            ), ai(
              l,
              a,
              s,
              v,
              ur !== 0,
              Tn,
              an
            );
            return;
          case ot:
            Wa(l, a, s, v.type, w, C);
            return;
          case _e:
            if (O = w.children, S = a.keyPath, w = w.value, G = v._currentValue, v._currentValue = w, C = jn, jn = v = {
              parent: C,
              depth: C === null ? 0 : C.depth + 1,
              context: v,
              parentValue: G,
              value: w
            }, a.context = v, a.keyPath = s, dr(l, a, O, -1), l = jn, l === null) throw Error(E(403));
            l.context._currentValue = l.parentValue, l = jn = l.parent, a.context = l, a.keyPath = S;
            return;
          case Ae:
            w = w.children, v = w(v._context._currentValue), w = a.keyPath, a.keyPath = s, dr(l, a, v, -1), a.keyPath = w;
            return;
          case re:
            if (S = v._init, v = S(v._payload), l.status === 12) throw null;
            Wa(l, a, s, v, w, C);
            return;
        }
      throw Error(
        E(130, v == null ? v : typeof v, "")
      );
    }
  }
  function Ua(l, a, s, v, w) {
    var C = a.replay, S = a.blockedBoundary, H = Or(
      l,
      0,
      null,
      a.formatContext,
      !1,
      !1
    );
    H.id = s, H.parentFlushed = !0;
    try {
      a.replay = null, a.blockedSegment = H, Et(l, a, v, w), H.status = 1, oa(l, S, H), S === null ? l.completedRootSegment = H : (qu(S, H), S.parentFlushed && l.partialBoundaries.push(S));
    } finally {
      a.replay = C, a.blockedSegment = null;
    }
  }
  function dr(l, a, s, v) {
    a.replay !== null && typeof a.replay.slots == "number" ? Ua(l, a, a.replay.slots, s, v) : (a.node = s, a.childIndex = v, s = a.componentStack, aa(a), hu(l, a), a.componentStack = s);
  }
  function hu(l, a) {
    var s = a.node, v = a.childIndex;
    if (s !== null) {
      if (typeof s == "object") {
        switch (s.$$typeof) {
          case U:
            var w = s.type, C = s.key, S = s.props;
            s = S.ref;
            var H = s !== void 0 ? s : null, O = Ic(w), z = C ?? (v === -1 ? 0 : v);
            if (C = [a.keyPath, O, z], a.replay !== null)
              e: {
                var G = a.replay;
                for (v = G.nodes, s = 0; s < v.length; s++) {
                  var J = v[s];
                  if (z === J[1]) {
                    if (J.length === 4) {
                      if (O !== null && O !== J[0])
                        throw Error(
                          E(490, J[0], O)
                        );
                      var ve = J[2];
                      O = J[3], z = a.node, a.replay = {
                        nodes: ve,
                        slots: O,
                        pendingTasks: 1
                      };
                      try {
                        if (Wa(l, a, C, w, S, H), a.replay.pendingTasks === 1 && 0 < a.replay.nodes.length)
                          throw Error(E(488));
                        a.replay.pendingTasks--;
                      } catch (He) {
                        if (typeof He == "object" && He !== null && (He === fe || typeof He.then == "function"))
                          throw a.node === z ? a.replay = G : v.splice(s, 1), He;
                        a.replay.pendingTasks--, S = bl(a.componentStack), C = l, l = a.blockedBoundary, w = He, S = jt(C, w, S), gu(
                          C,
                          l,
                          ve,
                          O,
                          w,
                          S
                        );
                      }
                      a.replay = G;
                    } else {
                      if (w !== N)
                        throw Error(
                          E(
                            490,
                            "Suspense",
                            Ic(w) || "Unknown"
                          )
                        );
                      n: {
                        G = void 0, w = J[5], H = J[2], O = J[3], z = J[4] === null ? [] : J[4][2], J = J[4] === null ? null : J[4][3];
                        var ge = a.keyPath, en = a.formatContext, Le = a.row, nn = a.replay, nt = a.blockedBoundary, Hn = a.hoistableState, $t = S.children, Ur = S.fallback, Tl = /* @__PURE__ */ new Set();
                        S = 2 > a.formatContext.insertionMode ? Ro(
                          l,
                          a.row,
                          Tl,
                          qn(),
                          qn()
                        ) : Ro(
                          l,
                          a.row,
                          Tl,
                          null,
                          null
                        ), S.parentFlushed = !0, S.rootSegmentID = w, a.blockedBoundary = S, a.hoistableState = S.contentState, a.keyPath = C, a.formatContext = hl(
                          l.resumableState,
                          en
                        ), a.row = null, a.replay = {
                          nodes: H,
                          slots: O,
                          pendingTasks: 1
                        };
                        try {
                          if (Et(l, a, $t, -1), a.replay.pendingTasks === 1 && 0 < a.replay.nodes.length)
                            throw Error(E(488));
                          if (a.replay.pendingTasks--, S.pendingTasks === 0 && S.status === 0) {
                            S.status = 1, l.completedBoundaries.push(S);
                            break n;
                          }
                        } catch (He) {
                          S.status = 4, ve = bl(a.componentStack), G = jt(
                            l,
                            He,
                            ve
                          ), S.errorDigest = G, a.replay.pendingTasks--, l.clientRenderedBoundaries.push(S);
                        } finally {
                          a.blockedBoundary = nt, a.hoistableState = Hn, a.replay = nn, a.keyPath = ge, a.formatContext = en, a.row = Le;
                        }
                        ve = et(
                          l,
                          null,
                          {
                            nodes: z,
                            slots: J,
                            pendingTasks: 0
                          },
                          Ur,
                          -1,
                          nt,
                          S.fallbackState,
                          Tl,
                          [C[0], "Suspense Fallback", C[2]],
                          xc(
                            l.resumableState,
                            a.formatContext
                          ),
                          a.context,
                          a.treeContext,
                          a.row,
                          Ba(
                            a.componentStack
                          )
                        ), aa(ve), l.pingedTasks.push(ve);
                      }
                    }
                    v.splice(s, 1);
                    break e;
                  }
                }
              }
            else Wa(l, a, C, w, S, H);
            return;
          case j:
            throw Error(E(257));
          case re:
            if (ve = s._init, s = ve(s._payload), l.status === 12) throw null;
            dr(l, a, s, v);
            return;
        }
        if (Ce(s)) {
          du(l, a, s, v);
          return;
        }
        if ((ve = ut(s)) && (ve = ve.call(s))) {
          if (s = ve.next(), !s.done) {
            S = [];
            do
              S.push(s.value), s = ve.next();
            while (!s.done);
            du(l, a, S, v);
          }
          return;
        }
        if (typeof s.then == "function")
          return a.thenableState = null, dr(l, a, Yu(s), v);
        if (s.$$typeof === _e)
          return dr(
            l,
            a,
            s._currentValue,
            v
          );
        throw v = Object.prototype.toString.call(s), Error(
          E(
            31,
            v === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : v
          )
        );
      }
      typeof s == "string" ? (v = a.blockedSegment, v !== null && (v.lastPushedText = qc(
        v.chunks,
        s,
        l.renderState,
        v.lastPushedText
      ))) : (typeof s == "number" || typeof s == "bigint") && (v = a.blockedSegment, v !== null && (v.lastPushedText = qc(
        v.chunks,
        "" + s,
        l.renderState,
        v.lastPushedText
      )));
    }
  }
  function du(l, a, s, v) {
    var w = a.keyPath;
    if (v !== -1 && (a.keyPath = [a.keyPath, "Fragment", v], a.replay !== null)) {
      for (var C = a.replay, S = C.nodes, H = 0; H < S.length; H++) {
        var O = S[H];
        if (O[1] === v) {
          v = O[2], O = O[3], a.replay = { nodes: v, slots: O, pendingTasks: 1 };
          try {
            if (du(l, a, s, -1), a.replay.pendingTasks === 1 && 0 < a.replay.nodes.length)
              throw Error(E(488));
            a.replay.pendingTasks--;
          } catch (J) {
            if (typeof J == "object" && J !== null && (J === fe || typeof J.then == "function"))
              throw J;
            a.replay.pendingTasks--, s = bl(a.componentStack);
            var z = a.blockedBoundary, G = J;
            s = jt(l, G, s), gu(
              l,
              z,
              v,
              O,
              G,
              s
            );
          }
          a.replay = C, S.splice(H, 1);
          break;
        }
      }
      a.keyPath = w;
      return;
    }
    if (C = a.treeContext, S = s.length, a.replay !== null && (H = a.replay.slots, H !== null && typeof H == "object")) {
      for (v = 0; v < S; v++)
        O = s[v], a.treeContext = p(C, S, v), z = H[v], typeof z == "number" ? (Ua(l, a, z, O, v), delete H[v]) : Et(l, a, O, v);
      a.treeContext = C, a.keyPath = w;
      return;
    }
    for (H = 0; H < S; H++)
      v = s[H], a.treeContext = p(C, S, H), Et(l, a, v, H);
    a.treeContext = C, a.keyPath = w;
  }
  function _c(l, a, s) {
    if (s.status = 5, s.rootSegmentID = l.nextSegmentId++, l = s.trackedContentKeyPath, l === null) throw Error(E(486));
    var v = s.trackedFallbackNode, w = [], C = a.workingMap.get(l);
    return C === void 0 ? (s = [
      l[1],
      l[2],
      w,
      null,
      v,
      s.rootSegmentID
    ], a.workingMap.set(l, s), zc(s, l[0], a), s) : (C[4] = v, C[5] = s.rootSegmentID, C);
  }
  function mc(l, a, s, v) {
    v.status = 5;
    var w = s.keyPath, C = s.blockedBoundary;
    if (C === null)
      v.id = l.nextSegmentId++, a.rootSlots = v.id, l.completedRootSegment !== null && (l.completedRootSegment.status = 5);
    else {
      if (C !== null && C.status === 0) {
        var S = _c(
          l,
          a,
          C
        );
        if (C.trackedContentKeyPath === w && s.childIndex === -1) {
          v.id === -1 && (v.id = v.parentFlushed ? C.rootSegmentID : l.nextSegmentId++), S[3] = v.id;
          return;
        }
      }
      if (v.id === -1 && (v.id = v.parentFlushed && C !== null ? C.rootSegmentID : l.nextSegmentId++), s.childIndex === -1)
        w === null ? a.rootSlots = v.id : (s = a.workingMap.get(w), s === void 0 ? (s = [w[1], w[2], [], v.id], zc(s, w[0], a)) : s[3] = v.id);
      else {
        if (w === null) {
          if (l = a.rootSlots, l === null)
            l = a.rootSlots = {};
          else if (typeof l == "number")
            throw Error(E(491));
        } else if (C = a.workingMap, S = C.get(w), S === void 0)
          l = {}, S = [w[1], w[2], [], l], C.set(w, S), zc(S, w[0], a);
        else if (l = S[3], l === null)
          l = S[3] = {};
        else if (typeof l == "number")
          throw Error(E(491));
        l[s.childIndex] = v.id;
      }
    }
  }
  function Vu(l, a) {
    l = l.trackedPostpones, l !== null && (a = a.trackedContentKeyPath, a !== null && (a = l.workingMap.get(a), a !== void 0 && (a.length = 4, a[2] = [], a[3] = null)));
  }
  function Dc(l, a, s) {
    return et(
      l,
      s,
      a.replay,
      a.node,
      a.childIndex,
      a.blockedBoundary,
      a.hoistableState,
      a.abortSet,
      a.keyPath,
      a.formatContext,
      a.context,
      a.treeContext,
      a.row,
      a.componentStack
    );
  }
  function Lc(l, a, s) {
    var v = a.blockedSegment, w = Or(
      l,
      v.chunks.length,
      null,
      a.formatContext,
      v.lastPushedText,
      !0
    );
    return v.children.push(w), v.lastPushedText = !1, ia(
      l,
      s,
      a.node,
      a.childIndex,
      a.blockedBoundary,
      w,
      a.blockedPreamble,
      a.hoistableState,
      a.abortSet,
      a.keyPath,
      a.formatContext,
      a.context,
      a.treeContext,
      a.row,
      a.componentStack
    );
  }
  function Et(l, a, s, v) {
    var w = a.formatContext, C = a.context, S = a.keyPath, H = a.treeContext, O = a.componentStack, z = a.blockedSegment;
    if (z === null) {
      z = a.replay;
      try {
        return dr(l, a, s, v);
      } catch (ve) {
        if (dl(), s = ve === fe ? De() : ve, l.status !== 12 && typeof s == "object" && s !== null) {
          if (typeof s.then == "function") {
            v = ve === fe ? cr() : null, l = Dc(l, a, v).ping, s.then(l, l), a.formatContext = w, a.context = C, a.keyPath = S, a.treeContext = H, a.componentStack = O, a.replay = z, g(C);
            return;
          }
          if (s.message === "Maximum call stack size exceeded") {
            s = ve === fe ? cr() : null, s = Dc(l, a, s), l.pingedTasks.push(s), a.formatContext = w, a.context = C, a.keyPath = S, a.treeContext = H, a.componentStack = O, a.replay = z, g(C);
            return;
          }
        }
      }
    } else {
      var G = z.children.length, J = z.chunks.length;
      try {
        return dr(l, a, s, v);
      } catch (ve) {
        if (dl(), z.children.length = G, z.chunks.length = J, s = ve === fe ? De() : ve, l.status !== 12 && typeof s == "object" && s !== null) {
          if (typeof s.then == "function") {
            z = s, s = ve === fe ? cr() : null, l = Lc(l, a, s).ping, z.then(l, l), a.formatContext = w, a.context = C, a.keyPath = S, a.treeContext = H, a.componentStack = O, g(C);
            return;
          }
          if (s.message === "Maximum call stack size exceeded") {
            z = ve === fe ? cr() : null, z = Lc(l, a, z), l.pingedTasks.push(z), a.formatContext = w, a.context = C, a.keyPath = S, a.treeContext = H, a.componentStack = O, g(C);
            return;
          }
        }
      }
    }
    throw a.formatContext = w, a.context = C, a.keyPath = S, a.treeContext = H, g(C), s;
  }
  function Ju(l) {
    var a = l.blockedBoundary, s = l.blockedSegment;
    s !== null && (s.status = 3, yl(this, a, l.row, s));
  }
  function gu(l, a, s, v, w, C) {
    for (var S = 0; S < s.length; S++) {
      var H = s[S];
      if (H.length === 4)
        gu(
          l,
          a,
          H[2],
          H[3],
          w,
          C
        );
      else {
        H = H[5];
        var O = l, z = C, G = Ro(
          O,
          null,
          /* @__PURE__ */ new Set(),
          null,
          null
        );
        G.parentFlushed = !0, G.rootSegmentID = H, G.status = 4, G.errorDigest = z, G.parentFlushed && O.clientRenderedBoundaries.push(G);
      }
    }
    if (s.length = 0, v !== null) {
      if (a === null) throw Error(E(487));
      if (a.status !== 4 && (a.status = 4, a.errorDigest = C, a.parentFlushed && l.clientRenderedBoundaries.push(a)), typeof v == "object") for (var J in v) delete v[J];
    }
  }
  function vu(l, a, s) {
    var v = l.blockedBoundary, w = l.blockedSegment;
    if (w !== null) {
      if (w.status === 6) return;
      w.status = 3;
    }
    var C = bl(l.componentStack);
    if (v === null) {
      if (a.status !== 13 && a.status !== 14) {
        if (v = l.replay, v === null) {
          a.trackedPostpones !== null && w !== null ? (v = a.trackedPostpones, jt(a, s, C), mc(a, v, l, w), yl(a, null, l.row, w)) : (jt(a, s, C), Co(a, s));
          return;
        }
        v.pendingTasks--, v.pendingTasks === 0 && 0 < v.nodes.length && (w = jt(a, s, C), gu(
          a,
          null,
          v.nodes,
          v.slots,
          s,
          w
        )), a.pendingRootTasks--, a.pendingRootTasks === 0 && Hc(a);
      }
    } else {
      var S = a.trackedPostpones;
      if (v.status !== 4) {
        if (S !== null && w !== null)
          return jt(a, s, C), mc(a, S, l, w), v.fallbackAbortableTasks.forEach(function(H) {
            return vu(H, a, s);
          }), v.fallbackAbortableTasks.clear(), yl(a, v, l.row, w);
        v.status = 4, w = jt(a, s, C), v.status = 4, v.errorDigest = w, Vu(a, v), v.parentFlushed && a.clientRenderedBoundaries.push(v);
      }
      v.pendingTasks--, w = v.row, w !== null && --w.pendingTasks === 0 && hr(a, w), v.fallbackAbortableTasks.forEach(function(H) {
        return vu(H, a, s);
      }), v.fallbackAbortableTasks.clear();
    }
    l = l.row, l !== null && --l.pendingTasks === 0 && hr(a, l), a.allPendingTasks--, a.allPendingTasks === 0 && Ku(a);
  }
  function Qu(l, a) {
    try {
      var s = l.renderState, v = s.onHeaders;
      if (v) {
        var w = s.headers;
        if (w) {
          s.headers = null;
          var C = w.preconnects;
          if (w.fontPreloads && (C && (C += ", "), C += w.fontPreloads), w.highImagePreloads && (C && (C += ", "), C += w.highImagePreloads), !a) {
            var S = s.styles.values(), H = S.next();
            e: for (; 0 < w.remainingCapacity && !H.done; H = S.next())
              for (var O = H.value.sheets.values(), z = O.next(); 0 < w.remainingCapacity && !z.done; z = O.next()) {
                var G = z.value, J = G.props, ve = J.href, ge = G.props, en = Wu(ge.href, "style", {
                  crossOrigin: ge.crossOrigin,
                  integrity: ge.integrity,
                  nonce: ge.nonce,
                  type: ge.type,
                  fetchPriority: ge.fetchPriority,
                  referrerPolicy: ge.referrerPolicy,
                  media: ge.media
                });
                if (0 <= (w.remainingCapacity -= en.length + 2))
                  s.resets.style[ve] = Ft, C && (C += ", "), C += en, s.resets.style[ve] = typeof J.crossOrigin == "string" || typeof J.integrity == "string" ? [J.crossOrigin, J.integrity] : Ft;
                else break e;
              }
          }
          v(C ? { Link: C } : {});
        }
      }
    } catch (Le) {
      jt(l, Le, {});
    }
  }
  function Hc(l) {
    l.trackedPostpones === null && Qu(l, !0), l.trackedPostpones === null && Nl(l), l.onShellError = $, l = l.onShellReady, l();
  }
  function Ku(l) {
    Qu(
      l,
      l.trackedPostpones === null ? !0 : l.completedRootSegment === null || l.completedRootSegment.status !== 5
    ), Nl(l), l = l.onAllReady, l();
  }
  function qu(l, a) {
    if (a.chunks.length === 0 && a.children.length === 1 && a.children[0].boundary === null && a.children[0].id === -1) {
      var s = a.children[0];
      s.id = a.id, s.parentFlushed = !0, s.status !== 1 && s.status !== 3 && s.status !== 4 || qu(l, s);
    } else l.completedSegments.push(a);
  }
  function oa(l, a, s) {
    if (be !== null) {
      s = s.chunks;
      for (var v = 0, w = 0; w < s.length; w++)
        v += s[w].byteLength;
      a === null ? l.byteSize += v : a.byteSize += v;
    }
  }
  function yl(l, a, s, v) {
    if (s !== null && (--s.pendingTasks === 0 ? hr(l, s) : s.together && Na(l, s)), l.allPendingTasks--, a === null) {
      if (v !== null && v.parentFlushed) {
        if (l.completedRootSegment !== null)
          throw Error(E(389));
        l.completedRootSegment = v;
      }
      l.pendingRootTasks--, l.pendingRootTasks === 0 && Hc(l);
    } else if (a.pendingTasks--, a.status !== 4)
      if (a.pendingTasks === 0) {
        if (a.status === 0 && (a.status = 1), v !== null && v.parentFlushed && (v.status === 1 || v.status === 3) && qu(a, v), a.parentFlushed && l.completedBoundaries.push(a), a.status === 1)
          s = a.row, s !== null && Da(s.hoistables, a.contentState), xt(l, a) || (a.fallbackAbortableTasks.forEach(Ju, l), a.fallbackAbortableTasks.clear(), s !== null && --s.pendingTasks === 0 && hr(l, s)), l.pendingRootTasks === 0 && l.trackedPostpones === null && a.contentPreamble !== null && Nl(l);
        else if (a.status === 5 && (a = a.row, a !== null)) {
          if (l.trackedPostpones !== null) {
            s = l.trackedPostpones;
            var w = a.next;
            if (w !== null && (v = w.boundaries, v !== null))
              for (w.boundaries = null, w = 0; w < v.length; w++) {
                var C = v[w];
                _c(l, s, C), yl(l, C, null, null);
              }
          }
          --a.pendingTasks === 0 && hr(l, a);
        }
      } else
        v === null || !v.parentFlushed || v.status !== 1 && v.status !== 3 || (qu(a, v), a.completedSegments.length === 1 && a.parentFlushed && l.partialBoundaries.push(a)), a = a.row, a !== null && a.together && Na(l, a);
    l.allPendingTasks === 0 && Ku(l);
  }
  function as(l) {
    if (l.status !== 14 && l.status !== 13) {
      var a = jn, s = Ui.H;
      Ui.H = ra;
      var v = Ui.A;
      Ui.A = uu;
      var w = Je;
      Je = l;
      var C = sr;
      sr = l.resumableState;
      try {
        var S = l.pingedTasks, H;
        for (H = 0; H < S.length; H++) {
          var O = S[H], z = l, G = O.blockedSegment;
          if (G === null) {
            var J = z;
            if (O.replay.pendingTasks !== 0) {
              g(O.context);
              try {
                if (typeof O.replay.slots == "number" ? Ua(
                  J,
                  O,
                  O.replay.slots,
                  O.node,
                  O.childIndex
                ) : hu(J, O), O.replay.pendingTasks === 1 && 0 < O.replay.nodes.length)
                  throw Error(E(488));
                O.replay.pendingTasks--, O.abortSet.delete(O), yl(
                  J,
                  O.blockedBoundary,
                  O.row,
                  null
                );
              } catch (vr) {
                dl();
                var ve = vr === fe ? De() : vr;
                if (typeof ve == "object" && ve !== null && typeof ve.then == "function") {
                  var ge = O.ping;
                  ve.then(ge, ge), O.thenableState = vr === fe ? cr() : null;
                } else {
                  O.replay.pendingTasks--, O.abortSet.delete(O);
                  var en = bl(O.componentStack);
                  z = void 0;
                  var Le = J, nn = O.blockedBoundary, nt = J.status === 12 ? J.fatalError : ve, Hn = O.replay.nodes, $t = O.replay.slots;
                  z = jt(
                    Le,
                    nt,
                    en
                  ), gu(
                    Le,
                    nn,
                    Hn,
                    $t,
                    nt,
                    z
                  ), J.pendingRootTasks--, J.pendingRootTasks === 0 && Hc(J), J.allPendingTasks--, J.allPendingTasks === 0 && Ku(J);
                }
              } finally {
              }
            }
          } else if (J = void 0, Le = G, Le.status === 0) {
            Le.status = 6, g(O.context);
            var Ur = Le.children.length, Tl = Le.chunks.length;
            try {
              hu(z, O), Le.lastPushedText && Le.textEmbedded && Le.chunks.push(Ql), O.abortSet.delete(O), Le.status = 1, oa(z, O.blockedBoundary, Le), yl(
                z,
                O.blockedBoundary,
                O.row,
                Le
              );
            } catch (vr) {
              dl(), Le.children.length = Ur, Le.chunks.length = Tl;
              var He = vr === fe ? De() : z.status === 12 ? z.fatalError : vr;
              if (z.status === 12 && z.trackedPostpones !== null) {
                var gr = z.trackedPostpones, gt = bl(O.componentStack);
                O.abortSet.delete(O), jt(z, He, gt), mc(z, gr, O, Le), yl(
                  z,
                  O.blockedBoundary,
                  O.row,
                  Le
                );
              } else if (typeof He == "object" && He !== null && typeof He.then == "function") {
                Le.status = 0, O.thenableState = vr === fe ? cr() : null;
                var _r = O.ping;
                He.then(_r, _r);
              } else {
                var Di = bl(O.componentStack);
                O.abortSet.delete(O), Le.status = 4;
                var tt = O.blockedBoundary, Xa = O.row;
                if (Xa !== null && --Xa.pendingTasks === 0 && hr(z, Xa), z.allPendingTasks--, J = jt(
                  z,
                  He,
                  Di
                ), tt === null) Co(z, He);
                else if (tt.pendingTasks--, tt.status !== 4) {
                  tt.status = 4, tt.errorDigest = J, Vu(z, tt);
                  var xl = tt.row;
                  xl !== null && --xl.pendingTasks === 0 && hr(z, xl), tt.parentFlushed && z.clientRenderedBoundaries.push(tt), z.pendingRootTasks === 0 && z.trackedPostpones === null && tt.contentPreamble !== null && Nl(z);
                }
                z.allPendingTasks === 0 && Ku(z);
              }
            } finally {
            }
          }
        }
        S.splice(0, H), l.destination !== null && So(l, l.destination);
      } catch (vr) {
        jt(l, vr, {}), Co(l, vr);
      } finally {
        sr = C, Ui.H = s, Ui.A = v, s === ra && g(a), Je = w;
      }
    }
  }
  function Ya(l, a, s) {
    a.preambleChildren.length && s.push(a.preambleChildren);
    for (var v = !1, w = 0; w < a.children.length; w++)
      v = bu(
        l,
        a.children[w],
        s
      ) || v;
    return v;
  }
  function bu(l, a, s) {
    var v = a.boundary;
    if (v === null)
      return Ya(
        l,
        a,
        s
      );
    var w = v.contentPreamble, C = v.fallbackPreamble;
    if (w === null || C === null) return !1;
    switch (v.status) {
      case 1:
        if (qo(l.renderState, w), l.byteSize += v.byteSize, a = v.completedSegments[0], !a) throw Error(E(391));
        return Ya(
          l,
          a,
          s
        );
      case 5:
        if (l.trackedPostpones !== null) return !0;
      case 4:
        if (a.status === 1)
          return qo(l.renderState, C), Ya(
            l,
            a,
            s
          );
      default:
        return !0;
    }
  }
  function Nl(l) {
    if (l.completedRootSegment && l.completedPreambleSegments === null) {
      var a = [], s = l.byteSize, v = bu(
        l,
        l.completedRootSegment,
        a
      ), w = l.renderState.preamble;
      v === !1 || w.headChunks && w.bodyChunks ? l.completedPreambleSegments = a : l.byteSize = s;
    }
  }
  function ko(l, a, s, v) {
    switch (s.parentFlushed = !0, s.status) {
      case 0:
        s.id = l.nextSegmentId++;
      case 5:
        return v = s.id, s.lastPushedText = !1, s.textEmbedded = !1, l = l.renderState, K(a, Rc), K(a, l.placeholderPrefix), l = oe(v.toString(16)), K(a, l), ce(a, jo);
      case 1:
        s.status = 2;
        var w = !0, C = s.chunks, S = 0;
        s = s.children;
        for (var H = 0; H < s.length; H++) {
          for (w = s[H]; S < w.index; S++)
            K(a, C[S]);
          w = yu(l, a, w, v);
        }
        for (; S < C.length - 1; S++)
          K(a, C[S]);
        return S < C.length && (w = ce(a, C[S])), w;
      case 3:
        return !0;
      default:
        throw Error(E(390));
    }
  }
  var ua = 0;
  function yu(l, a, s, v) {
    var w = s.boundary;
    if (w === null)
      return ko(l, a, s, v);
    if (w.parentFlushed = !0, w.status === 4) {
      var C = w.row;
      C !== null && --C.pendingTasks === 0 && hr(l, C), w = w.errorDigest, ce(a, mt), K(a, Cc), w && (K(a, ml), K(a, oe(ze(w))), K(
        a,
        Ti
      )), ce(a, kc), ko(l, a, s, v);
    } else if (w.status !== 1)
      w.status === 0 && (w.rootSegmentID = l.nextSegmentId++), 0 < w.completedSegments.length && l.partialBoundaries.push(w), xi(
        a,
        l.renderState,
        w.rootSegmentID
      ), v && Da(v, w.fallbackState), ko(l, a, s, v);
    else if (!Wl && xt(l, w) && (ua + w.byteSize > l.progressiveChunkSize || wo(w.contentState)))
      w.rootSegmentID = l.nextSegmentId++, l.completedBoundaries.push(w), xi(
        a,
        l.renderState,
        w.rootSegmentID
      ), ko(l, a, s, v);
    else {
      if (ua += w.byteSize, v && Da(v, w.contentState), s = w.row, s !== null && xt(l, w) && --s.pendingTasks === 0 && hr(l, s), ce(a, Zi), s = w.completedSegments, s.length !== 1) throw Error(E(391));
      yu(l, a, s[0], v);
    }
    return ce(a, Dn);
  }
  function ca(l, a, s, v) {
    return Aa(
      a,
      l.renderState,
      s.parentFormatContext,
      s.id
    ), yu(l, a, s, v), Ll(a, s.parentFormatContext);
  }
  function os(l, a, s) {
    ua = s.byteSize;
    for (var v = s.completedSegments, w = 0; w < v.length; w++)
      us(
        l,
        a,
        s,
        v[w]
      );
    v.length = 0, v = s.row, v !== null && xt(l, s) && --v.pendingTasks === 0 && hr(l, v), al(
      a,
      s.contentState,
      l.renderState
    ), v = l.resumableState, l = l.renderState, w = s.rootSegmentID, s = s.contentState;
    var C = l.stylesToHoist;
    return l.stylesToHoist = !1, K(a, l.startInlineScript), K(a, cn), C ? ((v.instructions & 4) === 0 && (v.instructions |= 4, K(a, Ki)), (v.instructions & 2) === 0 && (v.instructions |= 2, K(a, vo)), (v.instructions & 8) === 0 ? (v.instructions |= 8, K(a, Dt)) : K(a, ts)) : ((v.instructions & 2) === 0 && (v.instructions |= 2, K(a, vo)), K(a, bo)), v = oe(w.toString(16)), K(a, l.boundaryPrefix), K(a, v), K(a, Qi), K(a, l.segmentPrefix), K(a, v), C ? (K(a, eu), Ut(a, s)) : K(a, Lu), s = ce(a, Pi), Fr(a, l) && s;
  }
  function us(l, a, s, v) {
    if (v.status === 2) return !0;
    var w = s.contentState, C = v.id;
    if (C === -1) {
      if ((v.id = s.rootSegmentID) === -1)
        throw Error(E(392));
      return ca(l, a, v, w);
    }
    return C === s.rootSegmentID ? ca(l, a, v, w) : (ca(l, a, v, w), s = l.resumableState, l = l.renderState, K(a, l.startInlineScript), K(a, cn), (s.instructions & 1) === 0 ? (s.instructions |= 1, K(a, Sc)) : K(a, Pc), K(a, l.segmentPrefix), C = oe(C.toString(16)), K(a, C), K(a, Fc), K(a, l.placeholderPrefix), K(a, C), a = ce(a, go), a);
  }
  var Wl = !1;
  function So(l, a) {
    Kn = new Uint8Array(2048), xe = 0;
    try {
      if (!(0 < l.pendingRootTasks)) {
        var s, v = l.completedRootSegment;
        if (v !== null) {
          if (v.status === 5) return;
          var w = l.completedPreambleSegments;
          if (w === null) return;
          ua = l.byteSize;
          var C = l.resumableState, S = l.renderState, H = S.preamble, O = H.htmlChunks, z = H.headChunks, G;
          if (O) {
            for (G = 0; G < O.length; G++)
              K(a, O[G]);
            if (z)
              for (G = 0; G < z.length; G++)
                K(a, z[G]);
            else
              K(a, pt("head")), K(a, cn);
          } else if (z)
            for (G = 0; G < z.length; G++)
              K(a, z[G]);
          var J = S.charsetChunks;
          for (G = 0; G < J.length; G++)
            K(a, J[G]);
          J.length = 0, S.preconnects.forEach(Un, a), S.preconnects.clear();
          var ve = S.viewportChunks;
          for (G = 0; G < ve.length; G++)
            K(a, ve[G]);
          ve.length = 0, S.fontPreloads.forEach(Un, a), S.fontPreloads.clear(), S.highImagePreloads.forEach(Un, a), S.highImagePreloads.clear(), Il = S, S.styles.forEach(iu, a), Il = null;
          var ge = S.importMapChunks;
          for (G = 0; G < ge.length; G++)
            K(a, ge[G]);
          ge.length = 0, S.bootstrapScripts.forEach(Un, a), S.scripts.forEach(Un, a), S.scripts.clear(), S.bulkPreloads.forEach(Un, a), S.bulkPreloads.clear(), O || z || (C.instructions |= 32);
          var en = S.hoistableChunks;
          for (G = 0; G < en.length; G++)
            K(a, en[G]);
          for (C = en.length = 0; C < w.length; C++) {
            var Le = w[C];
            for (S = 0; S < Le.length; S++)
              yu(l, a, Le[S], null);
          }
          var nn = l.renderState.preamble, nt = nn.headChunks;
          (nn.htmlChunks || nt) && K(a, $l("head"));
          var Hn = nn.bodyChunks;
          if (Hn)
            for (w = 0; w < Hn.length; w++)
              K(a, Hn[w]);
          yu(l, a, v, null), l.completedRootSegment = null;
          var $t = l.renderState;
          if (l.allPendingTasks !== 0 || l.clientRenderedBoundaries.length !== 0 || l.completedBoundaries.length !== 0 || l.trackedPostpones !== null && (l.trackedPostpones.rootNodes.length !== 0 || l.trackedPostpones.rootSlots !== null)) {
            var Ur = l.resumableState;
            if ((Ur.instructions & 64) === 0) {
              if (Ur.instructions |= 64, K(a, $t.startInlineScript), (Ur.instructions & 32) === 0) {
                Ur.instructions |= 32;
                var Tl = "_" + Ur.idPrefix + "R_";
                K(a, sn), K(
                  a,
                  oe(ze(Tl))
                ), K(a, Pn);
              }
              K(a, cn), K(a, _l), ce(a, on);
            }
          }
          Fr(a, $t);
        }
        var He = l.renderState;
        v = 0;
        var gr = He.viewportChunks;
        for (v = 0; v < gr.length; v++)
          K(a, gr[v]);
        gr.length = 0, He.preconnects.forEach(Un, a), He.preconnects.clear(), He.fontPreloads.forEach(Un, a), He.fontPreloads.clear(), He.highImagePreloads.forEach(
          Un,
          a
        ), He.highImagePreloads.clear(), He.styles.forEach(Yn, a), He.scripts.forEach(Un, a), He.scripts.clear(), He.bulkPreloads.forEach(Un, a), He.bulkPreloads.clear();
        var gt = He.hoistableChunks;
        for (v = 0; v < gt.length; v++)
          K(a, gt[v]);
        gt.length = 0;
        var _r = l.clientRenderedBoundaries;
        for (s = 0; s < _r.length; s++) {
          var Di = _r[s];
          He = a;
          var tt = l.resumableState, Xa = l.renderState, xl = Di.rootSegmentID, vr = Di.errorDigest;
          K(
            He,
            Xa.startInlineScript
          ), K(He, cn), (tt.instructions & 4) === 0 ? (tt.instructions |= 4, K(He, yo)) : K(He, Hl), K(He, Xa.boundaryPrefix), K(He, oe(xl.toString(16))), K(He, qi), vr && (K(
            He,
            ji
          ), K(
            He,
            oe(
              Ma(vr || "")
            )
          ));
          var Ul = ce(
            He,
            pc
          );
          if (!Ul) {
            l.destination = null, s++, _r.splice(0, s);
            return;
          }
        }
        _r.splice(0, s);
        var br = l.completedBoundaries;
        for (s = 0; s < br.length; s++)
          if (!os(l, a, br[s])) {
            l.destination = null, s++, br.splice(0, s);
            return;
          }
        br.splice(0, s), el(a), Kn = new Uint8Array(2048), xe = 0, Wl = !0;
        var Za = l.partialBoundaries;
        for (s = 0; s < Za.length; s++) {
          var Fo = Za[s];
          e: {
            _r = l, Di = a, ua = Fo.byteSize;
            var mr = Fo.completedSegments;
            for (Ul = 0; Ul < mr.length; Ul++)
              if (!us(
                _r,
                Di,
                Fo,
                mr[Ul]
              )) {
                Ul++, mr.splice(0, Ul);
                var po = !1;
                break e;
              }
            mr.splice(0, Ul);
            var yr = Fo.row;
            yr !== null && yr.together && Fo.pendingTasks === 1 && (yr.pendingTasks === 1 ? Oc(
              _r,
              yr,
              yr.hoistables
            ) : yr.pendingTasks--), po = al(
              Di,
              Fo.contentState,
              _r.renderState
            );
          }
          if (!po) {
            l.destination = null, s++, Za.splice(0, s);
            return;
          }
        }
        Za.splice(0, s), Wl = !1;
        var Va = l.completedBoundaries;
        for (s = 0; s < Va.length; s++)
          if (!os(l, a, Va[s])) {
            l.destination = null, s++, Va.splice(0, s);
            return;
          }
        Va.splice(0, s);
      }
    } finally {
      Wl = !1, l.allPendingTasks === 0 && l.clientRenderedBoundaries.length === 0 && l.completedBoundaries.length === 0 ? (l.flushScheduled = !1, s = l.resumableState, s.hasBody && K(a, $l("body")), s.hasHtml && K(a, $l("html")), el(a), l.status = 14, a.close(), l.destination = null) : el(a);
    }
  }
  function cl(l) {
    l.flushScheduled = l.destination !== null, Ot(function() {
      return as(l);
    }), at(function() {
      l.status === 10 && (l.status = 11), l.trackedPostpones === null && Qu(l, l.pendingRootTasks === 0);
    });
  }
  function sa(l) {
    l.flushScheduled === !1 && l.pingedTasks.length === 0 && l.destination !== null && (l.flushScheduled = !0, at(function() {
      var a = l.destination;
      a ? So(l, a) : l.flushScheduled = !1;
    }));
  }
  function Ga(l, a) {
    if (l.status === 13)
      l.status = 14, Ge(a, l.fatalError);
    else if (l.status !== 14 && l.destination === null) {
      l.destination = a;
      try {
        So(l, a);
      } catch (s) {
        jt(l, s, {}), Co(l, s);
      }
    }
  }
  function wl(l, a) {
    (l.status === 11 || l.status === 10) && (l.status = 12);
    try {
      var s = l.abortableTasks;
      if (0 < s.size) {
        var v = a === void 0 ? Error(E(432)) : typeof a == "object" && a !== null && typeof a.then == "function" ? Error(E(530)) : a;
        l.fatalError = v, s.forEach(function(w) {
          return vu(w, l, v);
        }), s.clear();
      }
      l.destination !== null && So(l, l.destination);
    } catch (w) {
      jt(l, w, {}), Co(l, w);
    }
  }
  function zc(l, a, s) {
    if (a === null) s.rootNodes.push(l);
    else {
      var v = s.workingMap, w = v.get(a);
      w === void 0 && (w = [a[1], a[2], [], null], v.set(a, w), zc(w, a[0], s)), w[2].push(l);
    }
  }
  function cs(l) {
    var a = l.trackedPostpones;
    if (a === null || a.rootNodes.length === 0 && a.rootSlots === null)
      return l.trackedPostpones = null;
    if (l.completedRootSegment === null || l.completedRootSegment.status !== 5 && l.completedPreambleSegments !== null) {
      var s = l.nextSegmentId, v = a.rootSlots, w = l.resumableState;
      w.bootstrapScriptContent = void 0, w.bootstrapScripts = void 0, w.bootstrapModules = void 0;
    } else {
      s = 0, v = -1, w = l.resumableState;
      var C = l.renderState;
      w.nextFormID = 0, w.hasBody = !1, w.hasHtml = !1, w.unknownResources = { font: C.resets.font }, w.dnsResources = C.resets.dns, w.connectResources = C.resets.connect, w.imageResources = C.resets.image, w.styleResources = C.resets.style, w.scriptResources = {}, w.moduleUnknownResources = {}, w.moduleScriptResources = {}, w.instructions = 0;
    }
    return {
      nextSegmentId: s,
      rootFormatContext: l.rootFormatContext,
      progressiveChunkSize: l.progressiveChunkSize,
      resumableState: l.resumableState,
      replayNodes: a.rootNodes,
      replaySlots: v
    };
  }
  function Po() {
    var l = A.version;
    if (l !== "19.2.0")
      throw Error(
        E(
          527,
          l,
          "19.2.0"
        )
      );
  }
  return Po(), Po(), Ns.prerender = function(l, a) {
    return new Promise(function(s, v) {
      var w = a ? a.onHeaders : void 0, C;
      w && (C = function(G) {
        w(new Headers(G));
      });
      var S = Yo(
        a ? a.identifierPrefix : void 0,
        a ? a.unstable_externalRuntimeSrc : void 0,
        a ? a.bootstrapScriptContent : void 0,
        a ? a.bootstrapScripts : void 0,
        a ? a.bootstrapModules : void 0
      ), H = za(
        l,
        S,
        xa(
          S,
          void 0,
          a ? a.unstable_externalRuntimeSrc : void 0,
          a ? a.importMap : void 0,
          C,
          a ? a.maxHeadersLength : void 0
        ),
        Mu(a ? a.namespaceURI : void 0),
        a ? a.progressiveChunkSize : void 0,
        a ? a.onError : void 0,
        function() {
          var G = new ReadableStream(
            {
              type: "bytes",
              pull: function(J) {
                Ga(H, J);
              },
              cancel: function(J) {
                H.destination = null, wl(H, J);
              }
            },
            { highWaterMark: 0 }
          );
          G = { postponed: cs(H), prelude: G }, s(G);
        },
        void 0,
        void 0,
        v,
        a ? a.onPostpone : void 0
      );
      if (a && a.signal) {
        var O = a.signal;
        if (O.aborted) wl(H, O.reason);
        else {
          var z = function() {
            wl(H, O.reason), O.removeEventListener("abort", z);
          };
          O.addEventListener("abort", z);
        }
      }
      cl(H);
    });
  }, Ns.renderToReadableStream = function(l, a) {
    return new Promise(function(s, v) {
      var w, C, S = new Promise(function(ge, en) {
        C = ge, w = en;
      }), H = a ? a.onHeaders : void 0, O;
      H && (O = function(ge) {
        H(new Headers(ge));
      });
      var z = Yo(
        a ? a.identifierPrefix : void 0,
        a ? a.unstable_externalRuntimeSrc : void 0,
        a ? a.bootstrapScriptContent : void 0,
        a ? a.bootstrapScripts : void 0,
        a ? a.bootstrapModules : void 0
      ), G = Eo(
        l,
        z,
        xa(
          z,
          a ? a.nonce : void 0,
          a ? a.unstable_externalRuntimeSrc : void 0,
          a ? a.importMap : void 0,
          O,
          a ? a.maxHeadersLength : void 0
        ),
        Mu(a ? a.namespaceURI : void 0),
        a ? a.progressiveChunkSize : void 0,
        a ? a.onError : void 0,
        C,
        function() {
          var ge = new ReadableStream(
            {
              type: "bytes",
              pull: function(en) {
                Ga(G, en);
              },
              cancel: function(en) {
                G.destination = null, wl(G, en);
              }
            },
            { highWaterMark: 0 }
          );
          ge.allReady = S, s(ge);
        },
        function(ge) {
          S.catch(function() {
          }), v(ge);
        },
        w,
        a ? a.onPostpone : void 0,
        a ? a.formState : void 0
      );
      if (a && a.signal) {
        var J = a.signal;
        if (J.aborted) wl(G, J.reason);
        else {
          var ve = function() {
            wl(G, J.reason), J.removeEventListener("abort", ve);
          };
          J.addEventListener("abort", ve);
        }
      }
      cl(G);
    });
  }, Ns.resume = function(l, a, s) {
    return new Promise(function(v, w) {
      var C, S, H = new Promise(function(J, ve) {
        S = J, C = ve;
      }), O = dt(
        l,
        a,
        xa(
          a.resumableState,
          s ? s.nonce : void 0,
          void 0,
          void 0,
          void 0,
          void 0
        ),
        s ? s.onError : void 0,
        S,
        function() {
          var J = new ReadableStream(
            {
              type: "bytes",
              pull: function(ve) {
                Ga(O, ve);
              },
              cancel: function(ve) {
                O.destination = null, wl(O, ve);
              }
            },
            { highWaterMark: 0 }
          );
          J.allReady = H, v(J);
        },
        function(J) {
          H.catch(function() {
          }), w(J);
        },
        C,
        s ? s.onPostpone : void 0
      );
      if (s && s.signal) {
        var z = s.signal;
        if (z.aborted) wl(O, z.reason);
        else {
          var G = function() {
            wl(O, z.reason), z.removeEventListener("abort", G);
          };
          z.addEventListener("abort", G);
        }
      }
      cl(O);
    });
  }, Ns.resumeAndPrerender = function(l, a, s) {
    return new Promise(function(v, w) {
      var C = ul(
        l,
        a,
        xa(
          a.resumableState,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0
        ),
        s ? s.onError : void 0,
        function() {
          var O = new ReadableStream(
            {
              type: "bytes",
              pull: function(z) {
                Ga(C, z);
              },
              cancel: function(z) {
                C.destination = null, wl(C, z);
              }
            },
            { highWaterMark: 0 }
          );
          O = { postponed: cs(C), prelude: O }, v(O);
        },
        void 0,
        void 0,
        w,
        s ? s.onPostpone : void 0
      );
      if (s && s.signal) {
        var S = s.signal;
        if (S.aborted) wl(C, S.reason);
        else {
          var H = function() {
            wl(C, S.reason), S.removeEventListener("abort", H);
          };
          S.addEventListener("abort", H);
        }
      }
      cl(C);
    });
  }, Ns.version = "19.2.0", Ns;
}
var tf = {};
var Bf;
function fh() {
  return Bf || (Bf = 1, process.env.NODE_ENV !== "production" && (function() {
    function A(n, r, c, d) {
      return "" + r + (c === "s" ? "\\73 " : "\\53 ") + d;
    }
    function P(n, r, c, d) {
      return "" + r + (c === "s" ? "\\u0073" : "\\u0053") + d;
    }
    function E(n) {
      return n === null || typeof n != "object" ? null : (n = ru && n[ru] || n["@@iterator"], typeof n == "function" ? n : null);
    }
    function U(n) {
      return n = Object.prototype.toString.call(n), n.slice(8, n.length - 1);
    }
    function j(n) {
      var r = JSON.stringify(n);
      return '"' + n + '"' === r ? n : r;
    }
    function q(n) {
      switch (typeof n) {
        case "string":
          return JSON.stringify(
            10 >= n.length ? n : n.slice(0, 10) + "..."
          );
        case "object":
          return Fi(n) ? "[...]" : n !== null && n.$$typeof === Ir ? "client" : (n = U(n), n === "Object" ? "{...}" : n);
        case "function":
          return n.$$typeof === Ir ? "client" : (n = n.displayName || n.name) ? "function " + n : "function";
        default:
          return String(n);
      }
    }
    function de(n) {
      if (typeof n == "string") return n;
      switch (n) {
        case Wr:
          return "Suspense";
        case il:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case ll:
            return de(n.render);
          case Fn:
            return de(n.type);
          case al:
            var r = n._payload;
            n = n._init;
            try {
              return de(n(r));
            } catch {
            }
        }
      return "";
    }
    function Te(n, r) {
      var c = U(n);
      if (c !== "Object" && c !== "Array") return c;
      var d = -1, y = 0;
      if (Fi(n))
        if (iu.has(n)) {
          var R = iu.get(n);
          c = "<" + de(R) + ">";
          for (var I = 0; I < n.length; I++) {
            var D = n[I];
            D = typeof D == "string" ? D : typeof D == "object" && D !== null ? "{" + Te(D) + "}" : "{" + q(D) + "}", "" + I === r ? (d = c.length, y = D.length, c += D) : c = 15 > D.length && 40 > c.length + D.length ? c + D : c + "{...}";
          }
          c += "</" + de(R) + ">";
        } else {
          for (c = "[", R = 0; R < n.length; R++)
            0 < R && (c += ", "), I = n[R], I = typeof I == "object" && I !== null ? Te(I) : q(I), "" + R === r ? (d = c.length, y = I.length, c += I) : c = 10 > I.length && 40 > c.length + I.length ? c + I : c + "...";
          c += "]";
        }
      else if (n.$$typeof === Ma)
        c = "<" + de(n.type) + "/>";
      else {
        if (n.$$typeof === Ir) return "client";
        if (lu.has(n)) {
          for (c = lu.get(n), c = "<" + (de(c) || "..."), R = Object.keys(n), I = 0; I < R.length; I++) {
            c += " ", D = R[I], c += j(D) + "=";
            var ee = n[D], B = D === r && typeof ee == "object" && ee !== null ? Te(ee) : q(ee);
            typeof ee != "string" && (B = "{" + B + "}"), D === r ? (d = c.length, y = B.length, c += B) : c = 10 > B.length && 40 > c.length + B.length ? c + B : c + "...";
          }
          c += ">";
        } else {
          for (c = "{", R = Object.keys(n), I = 0; I < R.length; I++)
            0 < I && (c += ", "), D = R[I], c += j(D) + ": ", ee = n[D], ee = typeof ee == "object" && ee !== null ? Te(ee) : q(ee), D === r ? (d = c.length, y = ee.length, c += ee) : c = 10 > ee.length && 40 > c.length + ee.length ? c + ee : c + "...";
          c += "}";
        }
      }
      return r === void 0 ? c : -1 < d && 0 < y ? (n = " ".repeat(d) + "^".repeat(y), `
  ` + c + `
  ` + n) : `
  ` + c;
    }
    function Ae(n, r) {
      var c = n.length & 3, d = n.length - c, y = r;
      for (r = 0; r < d; ) {
        var R = n.charCodeAt(r) & 255 | (n.charCodeAt(++r) & 255) << 8 | (n.charCodeAt(++r) & 255) << 16 | (n.charCodeAt(++r) & 255) << 24;
        ++r, R = 3432918353 * (R & 65535) + ((3432918353 * (R >>> 16) & 65535) << 16) & 4294967295, R = R << 15 | R >>> 17, R = 461845907 * (R & 65535) + ((461845907 * (R >>> 16) & 65535) << 16) & 4294967295, y ^= R, y = y << 13 | y >>> 19, y = 5 * (y & 65535) + ((5 * (y >>> 16) & 65535) << 16) & 4294967295, y = (y & 65535) + 27492 + (((y >>> 16) + 58964 & 65535) << 16);
      }
      switch (R = 0, c) {
        case 3:
          R ^= (n.charCodeAt(r + 2) & 255) << 16;
        case 2:
          R ^= (n.charCodeAt(r + 1) & 255) << 8;
        case 1:
          R ^= n.charCodeAt(r) & 255, R = 3432918353 * (R & 65535) + ((3432918353 * (R >>> 16) & 65535) << 16) & 4294967295, R = R << 15 | R >>> 17, y ^= 461845907 * (R & 65535) + ((461845907 * (R >>> 16) & 65535) << 16) & 4294967295;
      }
      return y ^= n.length, y ^= y >>> 16, y = 2246822507 * (y & 65535) + ((2246822507 * (y >>> 16) & 65535) << 16) & 4294967295, y ^= y >>> 13, y = 3266489909 * (y & 65535) + ((3266489909 * (y >>> 16) & 65535) << 16) & 4294967295, (y ^ y >>> 16) >>> 0;
    }
    function _e(n) {
      return typeof Symbol == "function" && Symbol.toStringTag && n[Symbol.toStringTag] || n.constructor.name || "Object";
    }
    function $e(n) {
      try {
        return N(n), !1;
      } catch {
        return !0;
      }
    }
    function N(n) {
      return "" + n;
    }
    function Re(n, r) {
      if ($e(n))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          r,
          _e(n)
        ), N(n);
    }
    function ot(n, r) {
      if ($e(n))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          r,
          _e(n)
        ), N(n);
    }
    function re(n) {
      if ($e(n))
        return console.error(
          "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
          _e(n)
        ), N(n);
    }
    function Z(n) {
      return sn.call(Oa, n) ? !0 : sn.call(Ia, n) ? !1 : $i.test(n) ? Oa[n] = !0 : (Ia[n] = !0, console.error("Invalid attribute name: `%s`", n), !1);
    }
    function Qn(n, r) {
      Ut[r.type] || r.onChange || r.onInput || r.readOnly || r.disabled || r.value == null || console.error(
        n === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), r.onChange || r.readOnly || r.disabled || r.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function Vl(n, r) {
      if (sn.call(Bl, r) && Bl[r])
        return !0;
      if (Mc.test(r)) {
        if (n = "aria-" + r.slice(4).toLowerCase(), n = Es.hasOwnProperty(n) ? n : null, n == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            r
          ), Bl[r] = !0;
        if (r !== n)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            r,
            n
          ), Bl[r] = !0;
      }
      if (rs.test(r)) {
        if (n = r.toLowerCase(), n = Es.hasOwnProperty(n) ? n : null, n == null) return Bl[r] = !0, !1;
        r !== n && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          r,
          n
        ), Bl[r] = !0);
      }
      return !0;
    }
    function zr(n, r) {
      var c = [], d;
      for (d in r)
        Vl(n, d) || c.push(d);
      r = c.map(function(y) {
        return "`" + y + "`";
      }).join(", "), c.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        r,
        n
      ) : 1 < c.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        r,
        n
      );
    }
    function $r(n, r, c, d) {
      if (sn.call(Kt, r) && Kt[r])
        return !0;
      var y = r.toLowerCase();
      if (y === "onfocusin" || y === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), Kt[r] = !0;
      if (typeof c == "function" && (n === "form" && r === "action" || n === "input" && r === "formAction" || n === "button" && r === "formAction"))
        return !0;
      if (pi.test(r))
        return ls.test(r) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          r
        ), Kt[r] = !0;
      if (_a.test(r) || Wu.test(r)) return !0;
      if (y === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), Kt[r] = !0;
      if (y === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), Kt[r] = !0;
      if (y === "is" && c !== null && c !== void 0 && typeof c != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof c
        ), Kt[r] = !0;
      if (typeof c == "number" && isNaN(c))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          r
        ), Kt[r] = !0;
      if (au.hasOwnProperty(y)) {
        if (y = au[y], y !== r)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            r,
            y
          ), Kt[r] = !0;
      } else if (r !== y)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          r,
          y
        ), Kt[r] = !0;
      switch (r) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof c) {
        case "boolean":
          switch (r) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return y = r.toLowerCase().slice(0, 5), y === "data-" || y === "aria-" ? !0 : (c ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                c,
                r,
                r,
                c,
                r
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                c,
                r,
                r,
                c,
                r,
                r,
                r
              ), Kt[r] = !0);
          }
        case "function":
        case "symbol":
          return Kt[r] = !0, !1;
        case "string":
          if (c === "false" || c === "true") {
            switch (r) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
              case "allowFullScreen":
              case "async":
              case "autoPlay":
              case "controls":
              case "default":
              case "defer":
              case "disabled":
              case "disablePictureInPicture":
              case "disableRemotePlayback":
              case "formNoValidate":
              case "hidden":
              case "loop":
              case "noModule":
              case "noValidate":
              case "open":
              case "playsInline":
              case "readOnly":
              case "required":
              case "reversed":
              case "scoped":
              case "seamless":
              case "itemScope":
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              c,
              r,
              c === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              r,
              c
            ), Kt[r] = !0;
          }
      }
      return !0;
    }
    function Sr(n, r, c) {
      var d = [], y;
      for (y in r)
        $r(n, y, r[y]) || d.push(y);
      r = d.map(function(R) {
        return "`" + R + "`";
      }).join(", "), d.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        r,
        n
      ) : 1 < d.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        r,
        n
      );
    }
    function ut(n) {
      return n.replace(Yt, function(r, c) {
        return c.toUpperCase();
      });
    }
    function Ce(n) {
      if (typeof n == "boolean" || typeof n == "number" || typeof n == "bigint")
        return "" + n;
      re(n), n = "" + n;
      var r = Uu.exec(n);
      if (r) {
        var c = "", d, y = 0;
        for (d = r.index; d < n.length; d++) {
          switch (n.charCodeAt(d)) {
            case 34:
              r = "&quot;";
              break;
            case 38:
              r = "&amp;";
              break;
            case 39:
              r = "&#x27;";
              break;
            case 60:
              r = "&lt;";
              break;
            case 62:
              r = "&gt;";
              break;
            default:
              continue;
          }
          y !== d && (c += n.slice(y, d)), y = d + 1, c += r;
        }
        n = y !== d ? c + n.slice(y, d) : c;
      }
      return n;
    }
    function _n(n) {
      return Rs.test("" + n) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : n;
    }
    function mn(n) {
      return re(n), ("" + n).replace(fe, P);
    }
    function tn(n, r, c, d, y) {
      return {
        idPrefix: n === void 0 ? "" : n,
        nextFormID: 0,
        streamingFormat: 0,
        bootstrapScriptContent: c,
        bootstrapScripts: d,
        bootstrapModules: y,
        instructions: o,
        hasBody: !1,
        hasHtml: !1,
        unknownResources: {},
        dnsResources: {},
        connectResources: { default: {}, anonymous: {}, credentials: {} },
        imageResources: {},
        styleResources: {},
        scriptResources: {},
        moduleUnknownResources: {},
        moduleScriptResources: {}
      };
    }
    function at(n, r, c, d) {
      return {
        insertionMode: n,
        selectedValue: r,
        tagScope: c,
        viewTransition: d
      };
    }
    function ya(n, r, c) {
      var d = n.tagScope & -25;
      switch (r) {
        case "noscript":
          return at(pe, null, d | 1, null);
        case "select":
          return at(
            pe,
            c.value != null ? c.value : c.defaultValue,
            d,
            null
          );
        case "svg":
          return at(me, null, d, null);
        case "picture":
          return at(pe, null, d | 2, null);
        case "math":
          return at(Gn, null, d, null);
        case "foreignObject":
          return at(pe, null, d, null);
        case "table":
          return at(Ve, null, d, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return at(
            rn,
            null,
            d,
            null
          );
        case "colgroup":
          return at(
            Ue,
            null,
            d,
            null
          );
        case "tr":
          return at(
            bn,
            null,
            d,
            null
          );
        case "head":
          if (n.insertionMode < pe)
            return at(
              Be,
              null,
              d,
              null
            );
          break;
        case "html":
          if (n.insertionMode === Ze)
            return at(
              De,
              null,
              d,
              null
            );
      }
      return n.insertionMode >= Ve || n.insertionMode < pe ? at(pe, null, d, null) : n.tagScope !== d ? at(
        n.insertionMode,
        n.selectedValue,
        d,
        null
      ) : n;
    }
    function Jl(n) {
      return n === null ? null : {
        update: n.update,
        enter: "none",
        exit: "none",
        share: n.update,
        name: n.autoName,
        autoName: n.autoName,
        nameIdx: 0
      };
    }
    function Ot(n, r) {
      return r.tagScope & 32 && (n.instructions |= 128), at(
        r.insertionMode,
        r.selectedValue,
        r.tagScope | 12,
        Jl(r.viewTransition)
      );
    }
    function Kn(n, r) {
      n = Jl(r.viewTransition);
      var c = r.tagScope | 16;
      return n !== null && n.share !== "none" && (c |= 64), at(
        r.insertionMode,
        r.selectedValue,
        c,
        n
      );
    }
    function xe(n, r) {
      if (typeof r != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      var c = !0, d;
      for (d in r)
        if (sn.call(r, d)) {
          var y = r[d];
          if (y != null && typeof y != "boolean" && y !== "") {
            if (d.indexOf("--") === 0) {
              var R = Ce(d);
              ot(y, d), y = Ce(("" + y).trim());
            } else {
              R = d;
              var I = y;
              if (-1 < R.indexOf("-")) {
                var D = R;
                Ln.hasOwnProperty(D) && Ln[D] || (Ln[D] = !0, console.error(
                  "Unsupported style property %s. Did you mean %s?",
                  D,
                  ut(D.replace(qt, "ms-"))
                ));
              } else if (ma.test(R))
                D = R, Ln.hasOwnProperty(D) && Ln[D] || (Ln[D] = !0, console.error(
                  "Unsupported vendor-prefixed style property %s. Did you mean %s?",
                  D,
                  D.charAt(0).toUpperCase() + D.slice(1)
                ));
              else if (na.test(I)) {
                D = R;
                var ee = I;
                Rn.hasOwnProperty(ee) && Rn[ee] || (Rn[ee] = !0, console.error(
                  `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
                  D,
                  ee.replace(
                    na,
                    ""
                  )
                ));
              }
              typeof I == "number" && (isNaN(I) ? Da || (Da = !0, console.error(
                "`NaN` is an invalid value for the `%s` css style property.",
                R
              )) : isFinite(I) || wo || (wo = !0, console.error(
                "`Infinity` is an invalid value for the `%s` css style property.",
                R
              ))), R = d, I = $n.get(R), I !== void 0 || (I = Ce(
                R.replace(To, "-$1").toLowerCase().replace(Ic, "-ms-")
              ), $n.set(R, I)), R = I, typeof y == "number" ? y = y === 0 || ea.has(d) ? "" + y : y + "px" : (ot(y, d), y = Ce(
                ("" + y).trim()
              ));
            }
            c ? (c = !1, n.push(
              fn,
              R,
              ur,
              y
            )) : n.push(Tn, R, ur, y);
          }
        }
      c || n.push(Ne);
    }
    function K(n, r, c) {
      c && typeof c != "function" && typeof c != "symbol" && n.push(an, r, dn);
    }
    function ce(n, r, c) {
      typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && n.push(
        an,
        r,
        hn,
        Ce(c),
        Ne
      );
    }
    function el(n, r) {
      this.push('<input type="hidden"'), Vt(n), ce(this, "name", r), ce(this, "value", n), this.push(ta);
    }
    function Vt(n) {
      if (typeof n != "string")
        throw Error(
          "File/Blob fields are not yet supported in progressive forms. Will fallback to client hydration."
        );
    }
    function oe(n, r) {
      if (typeof r.$$FORM_ACTION == "function") {
        var c = n.nextFormID++;
        n = n.idPrefix + c;
        try {
          var d = r.$$FORM_ACTION(n);
          if (d) {
            var y = d.data;
            y?.forEach(Vt);
          }
          return d;
        } catch (R) {
          if (typeof R == "object" && R !== null && typeof R.then == "function")
            throw R;
          console.error(
            `Failed to serialize an action for progressive enhancement:
%s`,
            R
          );
        }
      }
      return null;
    }
    function M(n, r, c, d, y, R, I, D) {
      var ee = null;
      if (typeof d == "function") {
        D === null || La || (La = !0, console.error(
          'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
        )), y === null && R === null || ou || (ou = !0, console.error(
          "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
        )), I === null || Ha || (Ha = !0, console.error(
          "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
        ));
        var B = oe(r, d);
        B !== null ? (D = B.name, d = B.action || "", y = B.encType, R = B.method, I = B.target, ee = B.data) : (n.push(
          an,
          "formAction",
          hn,
          Lt,
          Ne
        ), I = R = y = d = D = null, Bn(r, c));
      }
      return D != null && be(n, "name", D), d != null && be(n, "formAction", d), y != null && be(n, "formEncType", y), R != null && be(n, "formMethod", R), I != null && be(n, "formTarget", I), ee;
    }
    function be(n, r, c) {
      switch (r) {
        case "className":
          ce(n, "class", c);
          break;
        case "tabIndex":
          ce(n, "tabindex", c);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          ce(n, r, c);
          break;
        case "style":
          xe(n, c);
          break;
        case "src":
        case "href":
          if (c === "") {
            console.error(
              r === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              r,
              r
            );
            break;
          }
        case "action":
        case "formAction":
          if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean")
            break;
          Re(c, r), c = _n("" + c), n.push(
            an,
            r,
            hn,
            Ce(c),
            Ne
          );
          break;
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "ref":
          break;
        case "autoFocus":
        case "multiple":
        case "muted":
          K(n, r.toLowerCase(), c);
          break;
        case "xlinkHref":
          if (typeof c == "function" || typeof c == "symbol" || typeof c == "boolean")
            break;
          Re(c, r), c = _n("" + c), n.push(
            an,
            "xlink:href",
            hn,
            Ce(c),
            Ne
          );
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          typeof c != "function" && typeof c != "symbol" && n.push(
            an,
            r,
            hn,
            Ce(c),
            Ne
          );
          break;
        case "inert":
          c !== "" || ke[r] || (ke[r] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            r
          ));
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          c && typeof c != "function" && typeof c != "symbol" && n.push(an, r, dn);
          break;
        case "capture":
        case "download":
          c === !0 ? n.push(an, r, dn) : c !== !1 && typeof c != "function" && typeof c != "symbol" && n.push(
            an,
            r,
            hn,
            Ce(c),
            Ne
          );
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c && n.push(
            an,
            r,
            hn,
            Ce(c),
            Ne
          );
          break;
        case "rowSpan":
        case "start":
          typeof c == "function" || typeof c == "symbol" || isNaN(c) || n.push(
            an,
            r,
            hn,
            Ce(c),
            Ne
          );
          break;
        case "xlinkActuate":
          ce(n, "xlink:actuate", c);
          break;
        case "xlinkArcrole":
          ce(n, "xlink:arcrole", c);
          break;
        case "xlinkRole":
          ce(n, "xlink:role", c);
          break;
        case "xlinkShow":
          ce(n, "xlink:show", c);
          break;
        case "xlinkTitle":
          ce(n, "xlink:title", c);
          break;
        case "xlinkType":
          ce(n, "xlink:type", c);
          break;
        case "xmlBase":
          ce(n, "xml:base", c);
          break;
        case "xmlLang":
          ce(n, "xml:lang", c);
          break;
        case "xmlSpace":
          ce(n, "xml:space", c);
          break;
        default:
          if ((!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (r = Ac.get(r) || r, Z(r))) {
            switch (typeof c) {
              case "function":
              case "symbol":
                return;
              case "boolean":
                var d = r.toLowerCase().slice(0, 5);
                if (d !== "data-" && d !== "aria-") return;
            }
            n.push(
              an,
              r,
              hn,
              Ce(c),
              Ne
            );
          }
      }
    }
    function Ge(n, r, c) {
      if (r != null) {
        if (c != null)
          throw Error(
            "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
          );
        if (typeof r != "object" || !("__html" in r))
          throw Error(
            "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
          );
        r = r.__html, r != null && (re(r), n.push("" + r));
      }
    }
    function we(n, r) {
      var c = n[r];
      c != null && (c = Fi(c), n.multiple && !c ? console.error(
        "The `%s` prop supplied to <select> must be an array if `multiple` is true.",
        r
      ) : !n.multiple && c && console.error(
        "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.",
        r
      ));
    }
    function Ie(n) {
      var r = "";
      return pc.Children.forEach(n, function(c) {
        c != null && (r += c, vl || typeof c == "string" || typeof c == "number" || typeof c == "bigint" || (vl = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        )));
      }), r;
    }
    function Bn(n, r) {
      if ((n.instructions & 16) === o) {
        n.instructions |= 16;
        var c = r.preamble, d = r.bootstrapChunks;
        (c.htmlChunks || c.headChunks) && d.length === 0 ? (d.push(r.startInlineScript), wi(d, n), d.push(
          Qe,
          Yu,
          $
        )) : d.unshift(
          r.startInlineScript,
          Qe,
          Yu,
          $
        );
      }
    }
    function Xe(n, r) {
      n.push(bt("link"));
      for (var c in r)
        if (sn.call(r, c)) {
          var d = r[c];
          if (d != null)
            switch (c) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(
                  "link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                );
              default:
                be(n, c, d);
            }
        }
      return n.push(ta), null;
    }
    function Al(n) {
      return re(n), ("" + n).replace(xo, A);
    }
    function Br(n, r, c) {
      n.push(bt(c));
      for (var d in r)
        if (sn.call(r, d)) {
          var y = r[d];
          if (y != null)
            switch (d) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(
                  c + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                );
              default:
                be(n, d, y);
            }
        }
      return n.push(ta), null;
    }
    function Nt(n, r) {
      n.push(bt("title"));
      var c = null, d = null, y;
      for (y in r)
        if (sn.call(r, y)) {
          var R = r[y];
          if (R != null)
            switch (y) {
              case "children":
                c = R;
                break;
              case "dangerouslySetInnerHTML":
                d = R;
                break;
              default:
                be(n, y, R);
            }
        }
      return n.push(Qe), r = Array.isArray(c) ? 2 > c.length ? c[0] : null : c, typeof r != "function" && typeof r != "symbol" && r !== null && r !== void 0 && n.push(Ce("" + r)), Ge(n, d, c), n.push(_t("title")), null;
    }
    function vt(n, r) {
      n.push(bt("script"));
      var c = null, d = null, y;
      for (y in r)
        if (sn.call(r, y)) {
          var R = r[y];
          if (R != null)
            switch (y) {
              case "children":
                c = R;
                break;
              case "dangerouslySetInnerHTML":
                d = R;
                break;
              default:
                be(n, y, R);
            }
        }
      return n.push(Qe), c != null && typeof c != "string" && (r = typeof c == "number" ? "a number for children" : Array.isArray(c) ? "an array for children" : "something unexpected for children", console.error(
        "A script element was rendered with %s. If script element has children it must be a single string. Consider using dangerouslySetInnerHTML or passing a plain string as children.",
        r
      )), Ge(n, d, c), typeof c == "string" && n.push(mn(c)), n.push(_t("script")), null;
    }
    function pu(n, r, c) {
      n.push(bt(c));
      var d = c = null, y;
      for (y in r)
        if (sn.call(r, y)) {
          var R = r[y];
          if (R != null)
            switch (y) {
              case "children":
                c = R;
                break;
              case "dangerouslySetInnerHTML":
                d = R;
                break;
              default:
                be(n, y, R);
            }
        }
      return n.push(Qe), Ge(n, d, c), c;
    }
    function ze(n, r, c) {
      n.push(bt(c));
      var d = c = null, y;
      for (y in r)
        if (sn.call(r, y)) {
          var R = r[y];
          if (R != null)
            switch (y) {
              case "children":
                c = R;
                break;
              case "dangerouslySetInnerHTML":
                d = R;
                break;
              default:
                be(n, y, R);
            }
        }
      return n.push(Qe), Ge(n, d, c), typeof c == "string" ? (n.push(Ce(c)), null) : c;
    }
    function bt(n) {
      var r = uu.get(n);
      if (r === void 0) {
        if (!sr.test(n)) throw Error("Invalid tag: " + n);
        r = "<" + n, uu.set(n, r);
      }
      return r;
    }
    function wn(n, r, c, d, y, R, I, D, ee) {
      zr(r, c), r !== "input" && r !== "textarea" && r !== "select" || c == null || c.value !== null || li || (li = !0, r === "select" && c.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        r
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        r
      ));
      e: if (r.indexOf("-") === -1) var B = !1;
      else
        switch (r) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            B = !1;
            break e;
          default:
            B = !0;
        }
      switch (B || typeof c.is == "string" || Sr(r, c), !c.suppressContentEditableWarning && c.contentEditable && c.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      ), D.insertionMode !== me && D.insertionMode !== Gn && r.indexOf("-") === -1 && r.toLowerCase() !== r && console.error(
        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
        r
      ), r) {
        case "div":
        case "span":
        case "svg":
        case "path":
          break;
        case "a":
          n.push(bt("a"));
          var Q = null, se = null, ye;
          for (ye in c)
            if (sn.call(c, ye)) {
              var he = c[ye];
              if (he != null)
                switch (ye) {
                  case "children":
                    Q = he;
                    break;
                  case "dangerouslySetInnerHTML":
                    se = he;
                    break;
                  case "href":
                    he === "" ? ce(n, "href", "") : be(n, ye, he);
                    break;
                  default:
                    be(n, ye, he);
                }
            }
          if (n.push(Qe), Ge(n, se, Q), typeof Q == "string") {
            n.push(Ce(Q));
            var le = null;
          } else le = Q;
          return le;
        case "g":
        case "p":
        case "li":
          break;
        case "select":
          Qn("select", c), we(c, "value"), we(c, "defaultValue"), c.value === void 0 || c.defaultValue === void 0 || dl || (console.error(
            "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
          ), dl = !0), n.push(bt("select"));
          var Ke = null, On = null, Oe;
          for (Oe in c)
            if (sn.call(c, Oe)) {
              var gn = c[Oe];
              if (gn != null)
                switch (Oe) {
                  case "children":
                    Ke = gn;
                    break;
                  case "dangerouslySetInnerHTML":
                    On = gn;
                    break;
                  case "defaultValue":
                  case "value":
                    break;
                  default:
                    be(
                      n,
                      Oe,
                      gn
                    );
                }
            }
          return n.push(Qe), Ge(n, On, Ke), Ke;
        case "option":
          var er = D.selectedValue;
          n.push(bt("option"));
          var nr = null, yn = null, Ht = null, ci = null, Dr;
          for (Dr in c)
            if (sn.call(c, Dr)) {
              var Ee = c[Dr];
              if (Ee != null)
                switch (Dr) {
                  case "children":
                    nr = Ee;
                    break;
                  case "selected":
                    Ht = Ee, Ii || (console.error(
                      "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
                    ), Ii = !0);
                    break;
                  case "dangerouslySetInnerHTML":
                    ci = Ee;
                    break;
                  case "value":
                    yn = Ee;
                  default:
                    be(
                      n,
                      Dr,
                      Ee
                    );
                }
            }
          if (er != null) {
            if (yn !== null) {
              Re(yn, "value");
              var Cn = "" + yn;
            } else
              ci === null || ii || (ii = !0, console.error(
                "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
              )), Cn = Ie(nr);
            if (Fi(er)) {
              for (var kn = 0; kn < er.length; kn++)
                if (Re(er[kn], "value"), "" + er[kn] === Cn) {
                  n.push(' selected=""');
                  break;
                }
            } else
              Re(er, "select.value"), "" + er === Cn && n.push(' selected=""');
          } else Ht && n.push(' selected=""');
          return n.push(Qe), Ge(n, ci, nr), nr;
        case "textarea":
          Qn("textarea", c), c.value === void 0 || c.defaultValue === void 0 || gl || (console.error(
            "Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components"
          ), gl = !0), n.push(bt("textarea"));
          var pn = null, rt = null, ln = null, Ye;
          for (Ye in c)
            if (sn.call(c, Ye)) {
              var Tr = c[Ye];
              if (Tr != null)
                switch (Ye) {
                  case "children":
                    ln = Tr;
                    break;
                  case "value":
                    pn = Tr;
                    break;
                  case "defaultValue":
                    rt = Tr;
                    break;
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  default:
                    be(
                      n,
                      Ye,
                      Tr
                    );
                }
            }
          if (pn === null && rt !== null && (pn = rt), n.push(Qe), ln != null) {
            if (console.error(
              "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
            ), pn != null)
              throw Error(
                "If you supply `defaultValue` on a <textarea>, do not pass children."
              );
            if (Fi(ln)) {
              if (1 < ln.length)
                throw Error("<textarea> can only have at most one child.");
              re(ln[0]), pn = "" + ln[0];
            }
            re(ln), pn = "" + ln;
          }
          return typeof pn == "string" && pn[0] === `
` && n.push(ra), pn !== null && (Re(pn, "value"), n.push(Ce("" + pn))), null;
        case "input":
          Qn("input", c), n.push(bt("input"));
          var Sn = null, tr = null, Zn = null, Gr = null, mo = null, Xr = null, si = null, fi = null, hi = null, Xt;
          for (Xt in c)
            if (sn.call(c, Xt)) {
              var e = c[Xt];
              if (e != null)
                switch (Xt) {
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      "input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  case "name":
                    Sn = e;
                    break;
                  case "formAction":
                    tr = e;
                    break;
                  case "formEncType":
                    Zn = e;
                    break;
                  case "formMethod":
                    Gr = e;
                    break;
                  case "formTarget":
                    mo = e;
                    break;
                  case "defaultChecked":
                    hi = e;
                    break;
                  case "defaultValue":
                    si = e;
                    break;
                  case "checked":
                    fi = e;
                    break;
                  case "value":
                    Xr = e;
                    break;
                  default:
                    be(
                      n,
                      Xt,
                      e
                    );
                }
            }
          tr === null || c.type === "image" || c.type === "submit" || Mt || (Mt = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          ));
          var t = M(
            n,
            d,
            y,
            tr,
            Zn,
            Gr,
            mo,
            Sn
          );
          return fi === null || hi === null || cr || (console.error(
            "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
            "A component",
            c.type
          ), cr = !0), Xr === null || si === null || Mi || (console.error(
            "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
            "A component",
            c.type
          ), Mi = !0), fi !== null ? K(n, "checked", fi) : hi !== null && K(n, "checked", hi), Xr !== null ? be(n, "value", Xr) : si !== null && be(n, "value", si), n.push(ta), t?.forEach(el, n), null;
        case "button":
          n.push(bt("button"));
          var u = null, h = null, b = null, x = null, F = null, _ = null, V = null, L;
          for (L in c)
            if (sn.call(c, L)) {
              var W = c[L];
              if (W != null)
                switch (L) {
                  case "children":
                    u = W;
                    break;
                  case "dangerouslySetInnerHTML":
                    h = W;
                    break;
                  case "name":
                    b = W;
                    break;
                  case "formAction":
                    x = W;
                    break;
                  case "formEncType":
                    F = W;
                    break;
                  case "formMethod":
                    _ = W;
                    break;
                  case "formTarget":
                    V = W;
                    break;
                  default:
                    be(
                      n,
                      L,
                      W
                    );
                }
            }
          x === null || c.type == null || c.type === "submit" || Mt || (Mt = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          ));
          var ie = M(
            n,
            d,
            y,
            x,
            F,
            _,
            V,
            b
          );
          if (n.push(Qe), ie?.forEach(el, n), Ge(n, h, u), typeof u == "string") {
            n.push(Ce(u));
            var ue = null;
          } else ue = u;
          return ue;
        case "form":
          n.push(bt("form"));
          var ae = null, te = null, Me = null, An = null, Fe = null, qe = null, st;
          for (st in c)
            if (sn.call(c, st)) {
              var Ct = c[st];
              if (Ct != null)
                switch (st) {
                  case "children":
                    ae = Ct;
                    break;
                  case "dangerouslySetInnerHTML":
                    te = Ct;
                    break;
                  case "action":
                    Me = Ct;
                    break;
                  case "encType":
                    An = Ct;
                    break;
                  case "method":
                    Fe = Ct;
                    break;
                  case "target":
                    qe = Ct;
                    break;
                  default:
                    be(
                      n,
                      st,
                      Ct
                    );
                }
            }
          var vn = null, Se = null;
          if (typeof Me == "function") {
            An === null && Fe === null || ou || (ou = !0, console.error(
              "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
            )), qe === null || Ha || (Ha = !0, console.error(
              "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
            ));
            var kt = oe(
              d,
              Me
            );
            kt !== null ? (Me = kt.action || "", An = kt.encType, Fe = kt.method, qe = kt.target, vn = kt.data, Se = kt.name) : (n.push(
              an,
              "action",
              hn,
              Lt,
              Ne
            ), qe = Fe = An = Me = null, Bn(d, y));
          }
          if (Me != null && be(n, "action", Me), An != null && be(n, "encType", An), Fe != null && be(n, "method", Fe), qe != null && be(n, "target", qe), n.push(Qe), Se !== null && (n.push('<input type="hidden"'), ce(n, "name", Se), n.push(ta), vn?.forEach(
            el,
            n
          )), Ge(n, te, ae), typeof ae == "string") {
            n.push(Ce(ae));
            var xr = null;
          } else xr = ae;
          return xr;
        case "menuitem":
          n.push(bt("menuitem"));
          for (var Mn in c)
            if (sn.call(c, Mn)) {
              var Vn = c[Mn];
              if (Vn != null)
                switch (Mn) {
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      "menuitems cannot have `children` nor `dangerouslySetInnerHTML`."
                    );
                  default:
                    be(
                      n,
                      Mn,
                      Vn
                    );
                }
            }
          return n.push(Qe), null;
        case "object":
          n.push(bt("object"));
          var Zr = null, rr = null, zt;
          for (zt in c)
            if (sn.call(c, zt)) {
              var Jn = c[zt];
              if (Jn != null)
                switch (zt) {
                  case "children":
                    Zr = Jn;
                    break;
                  case "dangerouslySetInnerHTML":
                    rr = Jn;
                    break;
                  case "data":
                    Re(Jn, "data");
                    var It = _n("" + Jn);
                    if (It === "") {
                      console.error(
                        'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                        zt,
                        zt
                      );
                      break;
                    }
                    n.push(
                      an,
                      "data",
                      hn,
                      Ce(It),
                      Ne
                    );
                    break;
                  default:
                    be(
                      n,
                      zt,
                      Jn
                    );
                }
            }
          if (n.push(Qe), Ge(n, rr, Zr), typeof Zr == "string") {
            n.push(Ce(Zr));
            var Vr = null;
          } else Vr = Zr;
          return Vr;
        case "title":
          var fl = D.tagScope & 1, Bt = D.tagScope & 4;
          if (sn.call(c, "children")) {
            var lt = c.children, Er = Array.isArray(lt) ? 2 > lt.length ? lt[0] : null : lt;
            Array.isArray(lt) && 1 < lt.length ? console.error(
              "React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an Array with length %s instead. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert `children` of <title> tags to a single string value which is why Arrays of length greater than 1 are not supported. When using JSX it can be common to combine text nodes and value nodes. For example: <title>hello {nameOfUser}</title>. While not immediately apparent, `children` in this case is an Array with length 2. If your `children` prop is using this form try rewriting it using a template string: <title>{`hello ${nameOfUser}`}</title>.",
              lt.length
            ) : typeof Er == "function" || typeof Er == "symbol" ? console.error(
              "React expect children of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found %s instead. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value.",
              typeof Er == "function" ? "a Function" : "a Sybmol"
            ) : Er && Er.toString === {}.toString && (Er.$$typeof != null ? console.error(
              "React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an object that appears to be a React element which never implements a suitable `toString` method. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value which is why rendering React elements is not supported. If the `children` of <title> is a React Component try moving the <title> tag into that component. If the `children` of <title> is some HTML markup change it to be Text only to be valid HTML."
            ) : console.error(
              "React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an object that does not implement a suitable `toString` method. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value. Using the default `toString` method available on every object is almost certainly an error. Consider whether the `children` of this <title> is an object in error and change it to a string or number value if so. Otherwise implement a `toString` method that React can use to produce a valid <title>."
            ));
          }
          if (D.insertionMode === me || fl || c.itemProp != null)
            var Jr = Nt(
              n,
              c
            );
          else
            Bt ? Jr = null : (Nt(y.hoistableChunks, c), Jr = void 0);
          return Jr;
        case "link":
          var Rr = D.tagScope & 1, Bi = D.tagScope & 4, Qr = c.rel, St = c.href, Cl = c.precedence;
          if (D.insertionMode === me || Rr || c.itemProp != null || typeof Qr != "string" || typeof St != "string" || St === "") {
            Qr === "stylesheet" && typeof c.precedence == "string" && (typeof St == "string" && St || console.error(
              'React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and expected the `href` prop to be a non-empty string but ecountered %s instead. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop ensure there is a non-empty string `href` prop as well, otherwise remove the `precedence` prop.',
              St === null ? "`null`" : St === void 0 ? "`undefined`" : St === "" ? "an empty string" : 'something with type "' + typeof St + '"'
            )), Xe(n, c);
            var Zt = null;
          } else if (c.rel === "stylesheet")
            if (typeof Cl != "string" || c.disabled != null || c.onLoad || c.onError) {
              if (typeof Cl == "string") {
                if (c.disabled != null)
                  console.error(
                    'React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and a `disabled` prop. The presence of the `disabled` prop indicates an intent to manage the stylesheet active state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the `disabled` prop, otherwise remove the `precedence` prop.'
                  );
                else if (c.onLoad || c.onError) {
                  var Uc = c.onLoad && c.onError ? "`onLoad` and `onError` props" : c.onLoad ? "`onLoad` prop" : "`onError` prop";
                  console.error(
                    'React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                    Uc,
                    Uc
                  );
                }
              }
              Zt = Xe(
                n,
                c
              );
            } else {
              var di = y.styles.get(Cl), ft = d.styleResources.hasOwnProperty(
                St
              ) ? d.styleResources[St] : void 0;
              if (ft !== m) {
                d.styleResources[St] = m, di || (di = {
                  precedence: Ce(Cl),
                  rules: [],
                  hrefs: [],
                  sheets: /* @__PURE__ */ new Map()
                }, y.styles.set(Cl, di));
                var kl = {
                  state: w,
                  props: Yn({}, c, {
                    "data-precedence": c.precedence,
                    precedence: null
                  })
                };
                if (ft) {
                  ft.length === 2 && xa(kl.props, ft);
                  var Cr = y.preloads.stylesheets.get(St);
                  Cr && 0 < Cr.length ? Cr.length = 0 : kl.state = C;
                }
                di.sheets.set(St, kl), I && I.stylesheets.add(kl);
              } else if (di) {
                var Eu = di.sheets.get(St);
                Eu && I && I.stylesheets.add(Eu);
              }
              ee && n.push("<!-- -->"), Zt = null;
            }
          else
            c.onLoad || c.onError ? Zt = Xe(
              n,
              c
            ) : (ee && n.push("<!-- -->"), Zt = Bi ? null : Xe(y.hoistableChunks, c));
          return Zt;
        case "script":
          var Do = D.tagScope & 1, Xl = c.async;
          if (typeof c.src != "string" || !c.src || !Xl || typeof Xl == "function" || typeof Xl == "symbol" || c.onLoad || c.onError || D.insertionMode === me || Do || c.itemProp != null)
            var Lo = vt(
              n,
              c
            );
          else {
            var Kr = c.src;
            if (c.type === "module")
              var Ru = d.moduleScriptResources, Yc = y.preloads.moduleScripts;
            else
              Ru = d.scriptResources, Yc = y.preloads.scripts;
            var Sl = Ru.hasOwnProperty(Kr) ? Ru[Kr] : void 0;
            if (Sl !== m) {
              Ru[Kr] = m;
              var Cu = c;
              if (Sl) {
                Sl.length === 2 && (Cu = Yn({}, c), xa(Cu, Sl));
                var kr = Yc.get(Kr);
                kr && (kr.length = 0);
              }
              var Ho = [];
              y.scripts.add(Ho), vt(Ho, Cu);
            }
            ee && n.push("<!-- -->"), Lo = null;
          }
          return Lo;
        case "style":
          var eo = D.tagScope & 1;
          if (sn.call(c, "children")) {
            var ga = c.children, Pl = Array.isArray(ga) ? 2 > ga.length ? ga[0] : null : ga;
            (typeof Pl == "function" || typeof Pl == "symbol" || Array.isArray(Pl)) && console.error(
              "React expect children of <style> tags to be a string, number, or object with a `toString` method but found %s instead. In browsers style Elements can only have `Text` Nodes as children.",
              typeof Pl == "function" ? "a Function" : typeof Pl == "symbol" ? "a Sybmol" : "an Array"
            );
          }
          var Fl = c.precedence, gi = c.href, qr = c.nonce;
          if (D.insertionMode === me || eo || c.itemProp != null || typeof Fl != "string" || typeof gi != "string" || gi === "") {
            n.push(bt("style"));
            var lr = null, va = null, vi;
            for (vi in c)
              if (sn.call(c, vi)) {
                var no = c[vi];
                if (no != null)
                  switch (vi) {
                    case "children":
                      lr = no;
                      break;
                    case "dangerouslySetInnerHTML":
                      va = no;
                      break;
                    default:
                      be(
                        n,
                        vi,
                        no
                      );
                  }
              }
            n.push(Qe);
            var Ni = Array.isArray(lr) ? 2 > lr.length ? lr[0] : null : lr;
            typeof Ni != "function" && typeof Ni != "symbol" && Ni !== null && Ni !== void 0 && n.push(Al(Ni)), Ge(
              n,
              va,
              lr
            ), n.push(_t("style"));
            var bs = null;
          } else {
            gi.includes(" ") && console.error(
              'React expected the `href` prop for a <style> tag opting into hoisting semantics using the `precedence` prop to not have any spaces but ecountered spaces instead. using spaces in this prop will cause hydration of this style to fail on the client. The href for the <style> where this ocurred is "%s".',
              gi
            );
            var Lr = y.styles.get(Fl), Zl = d.styleResources.hasOwnProperty(gi) ? d.styleResources[gi] : void 0;
            if (Zl !== m) {
              d.styleResources[gi] = m, Zl && console.error(
                'React encountered a hoistable style tag for the same href as a preload: "%s". When using a style tag to inline styles you should not also preload it as a stylsheet.',
                gi
              ), Lr || (Lr = {
                precedence: Ce(Fl),
                rules: [],
                hrefs: [],
                sheets: /* @__PURE__ */ new Map()
              }, y.styles.set(
                Fl,
                Lr
              ));
              var ku = y.nonce.style;
              if (ku && ku !== qr)
                console.error(
                  'React encountered a style tag with `precedence` "%s" and `nonce` "%s". When React manages style rules using `precedence` it will only include rules if the nonce matches the style nonce "%s" that was included with this render.',
                  Fl,
                  qr,
                  ku
                );
              else {
                !ku && qr && console.error(
                  'React encountered a style tag with `precedence` "%s" and `nonce` "%s". When React manages style rules using `precedence` it will only include a nonce attributes if you also provide the same style nonce value as a render option.',
                  Fl,
                  qr
                ), Lr.hrefs.push(
                  Ce(gi)
                );
                var uc = Lr.rules, cc = null, Us = null, to;
                for (to in c)
                  if (sn.call(c, to)) {
                    var zo = c[to];
                    if (zo != null)
                      switch (to) {
                        case "children":
                          cc = zo;
                          break;
                        case "dangerouslySetInnerHTML":
                          Us = zo;
                      }
                  }
                var ro = Array.isArray(cc) ? 2 > cc.length ? cc[0] : null : cc;
                typeof ro != "function" && typeof ro != "symbol" && ro !== null && ro !== void 0 && uc.push(Al(ro)), Ge(uc, Us, cc);
              }
            }
            Lr && I && I.styles.add(Lr), ee && n.push("<!-- -->"), bs = void 0;
          }
          return bs;
        case "meta":
          var sc = D.tagScope & 1, _s = D.tagScope & 4;
          if (D.insertionMode === me || sc || c.itemProp != null)
            var Ss = Br(
              n,
              c,
              "meta"
            );
          else
            ee && n.push("<!-- -->"), Ss = _s ? null : typeof c.charSet == "string" ? Br(y.charsetChunks, c, "meta") : c.name === "viewport" ? Br(y.viewportChunks, c, "meta") : Br(
              y.hoistableChunks,
              c,
              "meta"
            );
          return Ss;
        case "listing":
        case "pre":
          n.push(bt(r));
          var Hr = null, bi = null, lo;
          for (lo in c)
            if (sn.call(c, lo)) {
              var Gc = c[lo];
              if (Gc != null)
                switch (lo) {
                  case "children":
                    Hr = Gc;
                    break;
                  case "dangerouslySetInnerHTML":
                    bi = Gc;
                    break;
                  default:
                    be(
                      n,
                      lo,
                      Gc
                    );
                }
            }
          if (n.push(Qe), bi != null) {
            if (Hr != null)
              throw Error(
                "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
              );
            if (typeof bi != "object" || !("__html" in bi))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            var pl = bi.__html;
            pl != null && (typeof pl == "string" && 0 < pl.length && pl[0] === `
` ? n.push(ra, pl) : (re(pl), n.push("" + pl)));
          }
          return typeof Hr == "string" && Hr[0] === `
` && n.push(ra), Hr;
        case "img":
          var Pt = D.tagScope & 3, it = c.src, zn = c.srcSet;
          if (!(c.loading === "lazy" || !it && !zn || typeof it != "string" && it != null || typeof zn != "string" && zn != null || c.fetchPriority === "low" || Pt) && (typeof it != "string" || it[4] !== ":" || it[0] !== "d" && it[0] !== "D" || it[1] !== "a" && it[1] !== "A" || it[2] !== "t" && it[2] !== "T" || it[3] !== "a" && it[3] !== "A") && (typeof zn != "string" || zn[4] !== ":" || zn[0] !== "d" && zn[0] !== "D" || zn[1] !== "a" && zn[1] !== "A" || zn[2] !== "t" && zn[2] !== "T" || zn[3] !== "a" && zn[3] !== "A")) {
            I !== null && D.tagScope & 64 && (I.suspenseyImages = !0);
            var Ps = typeof c.sizes == "string" ? c.sizes : void 0, Bo = zn ? zn + `
` + (Ps || "") : it, Xc = y.preloads.images, No = Xc.get(Bo);
            if (No)
              (c.fetchPriority === "high" || 10 > y.highImagePreloads.size) && (Xc.delete(Bo), y.highImagePreloads.add(No));
            else if (!d.imageResources.hasOwnProperty(Bo)) {
              d.imageResources[Bo] = Y;
              var Su = c.crossOrigin, Zc = typeof Su == "string" ? Su === "use-credentials" ? Su : "" : void 0, Pu = y.headers, fc;
              Pu && 0 < Pu.remainingCapacity && typeof c.srcSet != "string" && (c.fetchPriority === "high" || 500 > Pu.highImagePreloads.length) && (fc = Yo(it, "image", {
                imageSrcSet: c.srcSet,
                imageSizes: c.sizes,
                crossOrigin: Zc,
                integrity: c.integrity,
                nonce: c.nonce,
                type: c.type,
                fetchPriority: c.fetchPriority,
                referrerPolicy: c.refererPolicy
              }), 0 <= (Pu.remainingCapacity -= fc.length + 2)) ? (y.resets.image[Bo] = Y, Pu.highImagePreloads && (Pu.highImagePreloads += ", "), Pu.highImagePreloads += fc) : (No = [], Xe(No, {
                rel: "preload",
                as: "image",
                href: zn ? void 0 : it,
                imageSrcSet: zn,
                imageSizes: Ps,
                crossOrigin: Zc,
                integrity: c.integrity,
                type: c.type,
                fetchPriority: c.fetchPriority,
                referrerPolicy: c.referrerPolicy
              }), c.fetchPriority === "high" || 10 > y.highImagePreloads.size ? y.highImagePreloads.add(No) : (y.bulkPreloads.add(No), Xc.set(Bo, No)));
            }
          }
          return Br(n, c, "img");
        case "base":
        case "area":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "param":
        case "source":
        case "track":
        case "wbr":
          return Br(n, c, r);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          break;
        case "head":
          if (D.insertionMode < pe) {
            var hc = R || y.preamble;
            if (hc.headChunks)
              throw Error("The `<head>` tag may only be rendered once.");
            R !== null && n.push("<!--head-->"), hc.headChunks = [];
            var ys = pu(
              hc.headChunks,
              c,
              "head"
            );
          } else
            ys = ze(
              n,
              c,
              "head"
            );
          return ys;
        case "body":
          if (D.insertionMode < pe) {
            var Fs = R || y.preamble;
            if (Fs.bodyChunks)
              throw Error("The `<body>` tag may only be rendered once.");
            R !== null && n.push("<!--body-->"), Fs.bodyChunks = [];
            var ms = pu(
              Fs.bodyChunks,
              c,
              "body"
            );
          } else
            ms = ze(
              n,
              c,
              "body"
            );
          return ms;
        case "html":
          if (D.insertionMode === Ze) {
            var Vc = R || y.preamble;
            if (Vc.htmlChunks)
              throw Error("The `<html>` tag may only be rendered once.");
            R !== null && n.push("<!--html-->"), Vc.htmlChunks = [G];
            var Jc = pu(
              Vc.htmlChunks,
              c,
              "html"
            );
          } else
            Jc = ze(
              n,
              c,
              "html"
            );
          return Jc;
        default:
          if (r.indexOf("-") !== -1) {
            n.push(bt(r));
            var Fu = null, io = null, ba;
            for (ba in c)
              if (sn.call(c, ba)) {
                var jr = c[ba];
                if (jr != null) {
                  var dc = ba;
                  switch (ba) {
                    case "children":
                      Fu = jr;
                      break;
                    case "dangerouslySetInnerHTML":
                      io = jr;
                      break;
                    case "style":
                      xe(n, jr);
                      break;
                    case "suppressContentEditableWarning":
                    case "suppressHydrationWarning":
                    case "ref":
                      break;
                    case "className":
                      dc = "class";
                    default:
                      if (Z(ba) && typeof jr != "function" && typeof jr != "symbol" && jr !== !1) {
                        if (jr === !0)
                          jr = "";
                        else if (typeof jr == "object")
                          continue;
                        n.push(
                          an,
                          dc,
                          hn,
                          Ce(jr),
                          Ne
                        );
                      }
                  }
                }
              }
            return n.push(Qe), Ge(
              n,
              io,
              Fu
            ), Fu;
          }
      }
      return ze(n, c, r);
    }
    function _t(n) {
      var r = fr.get(n);
      return r === void 0 && (r = "</" + n + ">", fr.set(n, r)), r;
    }
    function wa(n, r) {
      n = n.preamble, n.htmlChunks === null && r.htmlChunks && (n.htmlChunks = r.htmlChunks), n.headChunks === null && r.headChunks && (n.headChunks = r.headChunks), n.bodyChunks === null && r.bodyChunks && (n.bodyChunks = r.bodyChunks);
    }
    function Ui(n, r) {
      r = r.bootstrapChunks;
      for (var c = 0; c < r.length - 1; c++)
        n.push(r[c]);
      return c < r.length ? (c = r[c], r.length = 0, n.push(c)) : !0;
    }
    function Wt(n, r, c) {
      if (n.push(Gu), c === null)
        throw Error(
          "An ID must have been assigned before we can complete the boundary."
        );
      return n.push(r.boundaryPrefix), r = c.toString(16), n.push(r), n.push(xt);
    }
    function Pr(n, r, c, d) {
      switch (c.insertionMode) {
        case Ze:
        case De:
        case Be:
        case pe:
          return n.push(ia), n.push(r.segmentPrefix), r = d.toString(16), n.push(r), n.push(et);
        case me:
          return n.push(aa), n.push(r.segmentPrefix), r = d.toString(16), n.push(r), n.push(Ba);
        case Gn:
          return n.push(jt), n.push(r.segmentPrefix), r = d.toString(16), n.push(r), n.push(Co);
        case Ve:
          return n.push(Oc), n.push(r.segmentPrefix), r = d.toString(16), n.push(r), n.push(Na);
        case rn:
          return n.push(Xu), n.push(r.segmentPrefix), r = d.toString(16), n.push(r), n.push(Zu);
        case bn:
          return n.push(Wa), n.push(r.segmentPrefix), r = d.toString(16), n.push(r), n.push(Ua);
        case Ue:
          return n.push(hu), n.push(r.segmentPrefix), r = d.toString(16), n.push(r), n.push(du);
        default:
          throw Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function Ml(n, r) {
      switch (r.insertionMode) {
        case Ze:
        case De:
        case Be:
        case pe:
          return n.push(Or);
        case me:
          return n.push(bl);
        case Gn:
          return n.push(hr);
        case Ve:
          return n.push(fu);
        case rn:
          return n.push(ai);
        case bn:
          return n.push(dr);
        case Ue:
          return n.push(_c);
        default:
          throw Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function Ft(n) {
      return JSON.stringify(n).replace(
        ko,
        function(r) {
          switch (r) {
            case "<":
              return "\\u003c";
            case "\u2028":
              return "\\u2028";
            case "\u2029":
              return "\\u2029";
            default:
              throw Error(
                "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
              );
          }
        }
      );
    }
    function Il(n) {
      return JSON.stringify(n).replace(
        ua,
        function(r) {
          switch (r) {
            case "&":
              return "\\u0026";
            case ">":
              return "\\u003e";
            case "<":
              return "\\u003c";
            case "\u2028":
              return "\\u2028";
            case "\u2029":
              return "\\u2029";
            default:
              throw Error(
                "escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
              );
          }
        }
      );
    }
    function Au(n) {
      var r = n.rules, c = n.hrefs;
      0 < r.length && c.length === 0 && console.error(
        "React expected to have at least one href for an a hoistable style but found none. This is a bug in React."
      );
      var d = 0;
      if (c.length) {
        for (this.push(ne.startInlineStyle), this.push(yu), this.push(n.precedence), this.push(ca); d < c.length - 1; d++)
          this.push(c[d]), this.push(wl);
        for (this.push(c[d]), this.push(os), d = 0; d < r.length; d++) this.push(r[d]);
        So = this.push(us), Wl = !0, r.length = 0, c.length = 0;
      }
    }
    function on(n) {
      return n.state !== S ? Wl = !0 : !1;
    }
    function ar(n, r, c) {
      return Wl = !1, So = !0, ne = c, r.styles.forEach(Au, n), ne = null, r.stylesheets.forEach(on), Wl && (c.stylesToHoist = !0), So;
    }
    function In(n) {
      for (var r = 0; r < n.length; r++) this.push(n[r]);
      n.length = 0;
    }
    function Qc(n) {
      Xe(cl, n.props);
      for (var r = 0; r < cl.length; r++)
        this.push(cl[r]);
      cl.length = 0, n.state = S;
    }
    function ht(n) {
      var r = 0 < n.sheets.size;
      n.sheets.forEach(Qc, this), n.sheets.clear();
      var c = n.rules, d = n.hrefs;
      if (!r || d.length) {
        if (this.push(ne.startInlineStyle), this.push(sa), this.push(n.precedence), n = 0, d.length) {
          for (this.push(Ga); n < d.length - 1; n++)
            this.push(d[n]), this.push(wl);
          this.push(d[n]);
        }
        for (this.push(zc), n = 0; n < c.length; n++)
          this.push(c[n]);
        this.push(cs), c.length = 0, d.length = 0;
      }
    }
    function yc(n) {
      if (n.state === w) {
        n.state = C;
        var r = n.props;
        for (Xe(cl, {
          rel: "preload",
          as: "style",
          href: n.props.href,
          crossOrigin: r.crossOrigin,
          fetchPriority: r.fetchPriority,
          integrity: r.integrity,
          media: r.media,
          hrefLang: r.hrefLang,
          referrerPolicy: r.referrerPolicy
        }), n = 0; n < cl.length; n++)
          this.push(cl[n]);
        cl.length = 0;
      }
    }
    function wc(n) {
      n.sheets.forEach(yc, this), n.sheets.clear();
    }
    function wi(n, r) {
      (r.instructions & p) === o && (r.instructions |= p, n.push(
        Po,
        Ce("_" + r.idPrefix + "R_"),
        Ne
      ));
    }
    function Tc(n, r) {
      n.push(l);
      var c = l;
      r.stylesheets.forEach(function(d) {
        if (d.state !== S)
          if (d.state === H)
            n.push(c), d = d.props.href, Re(d, "href"), d = Il("" + d), n.push(d), n.push(v), c = a;
          else {
            n.push(c);
            var y = d.props["data-precedence"], R = d.props, I = _n("" + d.props.href);
            I = Il(I), n.push(I), Re(y, "precedence"), y = "" + y, n.push(s), y = Il(y), n.push(y);
            for (var D in R)
              if (sn.call(R, D) && (y = R[D], y != null))
                switch (D) {
                  case "href":
                  case "rel":
                  case "precedence":
                  case "data-precedence":
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      "link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    Uo(
                      n,
                      D,
                      y
                    );
                }
            n.push(v), c = a, d.state = H;
          }
      }), n.push(v);
    }
    function Uo(n, r, c) {
      var d = r.toLowerCase();
      switch (typeof c) {
        case "function":
        case "symbol":
          return;
      }
      switch (r) {
        case "innerHTML":
        case "dangerouslySetInnerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "style":
        case "ref":
          return;
        case "className":
          d = "class", Re(c, d), r = "" + c;
          break;
        case "hidden":
          if (c === !1) return;
          r = "";
          break;
        case "src":
        case "href":
          c = _n(c), Re(c, d), r = "" + c;
          break;
        default:
          if (2 < r.length && (r[0] === "o" || r[0] === "O") && (r[1] === "n" || r[1] === "N") || !Z(r))
            return;
          Re(c, d), r = "" + c;
      }
      n.push(s), d = Il(d), n.push(d), n.push(s), d = Il(r), n.push(d);
    }
    function Ta() {
      return { styles: /* @__PURE__ */ new Set(), stylesheets: /* @__PURE__ */ new Set(), suspenseyImages: !1 };
    }
    function Yi(n, r, c, d) {
      (n.scriptResources.hasOwnProperty(c) || n.moduleScriptResources.hasOwnProperty(c)) && console.error(
        'Internal React Error: React expected bootstrap script or module with src "%s" to not have been preloaded already. please file an issue',
        c
      ), n.scriptResources[c] = m, n.moduleScriptResources[c] = m, n = [], Xe(n, d), r.bootstrapScripts.add(n);
    }
    function xa(n, r) {
      n.crossOrigin == null && (n.crossOrigin = r[0]), n.integrity == null && (n.integrity = r[1]);
    }
    function Yo(n, r, c) {
      n = qn(n), r = Mu(r, "as"), r = "<" + n + '>; rel=preload; as="' + r + '"';
      for (var d in c)
        sn.call(c, d) && (n = c[d], typeof n == "string" && (r += "; " + d.toLowerCase() + '="' + Mu(
          n,
          d
        ) + '"'));
      return r;
    }
    function qn(n) {
      return Re(n, "href"), ("" + n).replace(
        O,
        Nn
      );
    }
    function Nn(n) {
      switch (n) {
        case "<":
          return "%3C";
        case ">":
          return "%3E";
        case `
`:
          return "%0A";
        case "\r":
          return "%0D";
        default:
          throw Error(
            "escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
          );
      }
    }
    function Mu(n, r) {
      return $e(n) && (console.error(
        "The provided `%s` option is an unsupported type %s. This value must be coerced to a string before using it here.",
        r,
        _e(n)
      ), N(n)), ("" + n).replace(
        z,
        Ea
      );
    }
    function Ea(n) {
      switch (n) {
        case '"':
          return "%22";
        case "'":
          return "%27";
        case ";":
          return "%3B";
        case ",":
          return "%2C";
        case `
`:
          return "%0A";
        case "\r":
          return "%0D";
        default:
          throw Error(
            "escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
          );
      }
    }
    function Kc(n) {
      this.styles.add(n);
    }
    function xc(n) {
      this.stylesheets.add(n);
    }
    function hl(n, r) {
      r.styles.forEach(Kc, n), r.stylesheets.forEach(xc, n), r.suspenseyImages && (n.suspenseyImages = !0);
    }
    function Ql(n, r) {
      var c = n.idPrefix, d = [], y = n.bootstrapScriptContent, R = n.bootstrapScripts, I = n.bootstrapModules;
      if (y !== void 0 && (d.push("<script"), wi(d, n), d.push(
        Qe,
        mn(y),
        $
      )), c = {
        placeholderPrefix: c + "P:",
        segmentPrefix: c + "S:",
        boundaryPrefix: c + "B:",
        startInlineScript: "<script",
        startInlineStyle: "<style",
        preamble: { htmlChunks: null, headChunks: null, bodyChunks: null },
        externalRuntimeScript: null,
        bootstrapChunks: d,
        importMapChunks: [],
        onHeaders: void 0,
        headers: null,
        resets: {
          font: {},
          dns: {},
          connect: { default: {}, anonymous: {}, credentials: {} },
          image: {},
          style: {}
        },
        charsetChunks: [],
        viewportChunks: [],
        hoistableChunks: [],
        preconnects: /* @__PURE__ */ new Set(),
        fontPreloads: /* @__PURE__ */ new Set(),
        highImagePreloads: /* @__PURE__ */ new Set(),
        styles: /* @__PURE__ */ new Map(),
        bootstrapScripts: /* @__PURE__ */ new Set(),
        scripts: /* @__PURE__ */ new Set(),
        bulkPreloads: /* @__PURE__ */ new Set(),
        preloads: {
          images: /* @__PURE__ */ new Map(),
          stylesheets: /* @__PURE__ */ new Map(),
          scripts: /* @__PURE__ */ new Map(),
          moduleScripts: /* @__PURE__ */ new Map()
        },
        nonce: { script: void 0, style: void 0 },
        hoistableState: null,
        stylesToHoist: !1
      }, R !== void 0)
        for (y = 0; y < R.length; y++) {
          var D = R[y], ee, B = void 0, Q = void 0, se = {
            rel: "preload",
            as: "script",
            fetchPriority: "low",
            nonce: void 0
          };
          typeof D == "string" ? se.href = ee = D : (se.href = ee = D.src, se.integrity = Q = typeof D.integrity == "string" ? D.integrity : void 0, se.crossOrigin = B = typeof D == "string" || D.crossOrigin == null ? void 0 : D.crossOrigin === "use-credentials" ? "use-credentials" : ""), Yi(n, c, ee, se), d.push(
            '<script src="',
            Ce(ee),
            Ne
          ), typeof Q == "string" && d.push(
            ' integrity="',
            Ce(Q),
            Ne
          ), typeof B == "string" && d.push(
            ' crossorigin="',
            Ce(B),
            Ne
          ), wi(d, n), d.push(' async=""><\/script>');
        }
      if (I !== void 0)
        for (R = 0; R < I.length; R++)
          y = I[R], B = ee = void 0, Q = {
            rel: "modulepreload",
            fetchPriority: "low",
            nonce: void 0
          }, typeof y == "string" ? Q.href = D = y : (Q.href = D = y.src, Q.integrity = B = typeof y.integrity == "string" ? y.integrity : void 0, Q.crossOrigin = ee = typeof y == "string" || y.crossOrigin == null ? void 0 : y.crossOrigin === "use-credentials" ? "use-credentials" : ""), Yi(
            n,
            c,
            D,
            Q
          ), d.push(
            '<script type="module" src="',
            Ce(D),
            Ne
          ), typeof B == "string" && d.push(
            ' integrity="',
            Ce(B),
            Ne
          ), typeof ee == "string" && d.push(
            ' crossorigin="',
            Ce(ee),
            Ne
          ), wi(d, n), d.push(' async=""><\/script>');
      return {
        placeholderPrefix: c.placeholderPrefix,
        segmentPrefix: c.segmentPrefix,
        boundaryPrefix: c.boundaryPrefix,
        startInlineScript: c.startInlineScript,
        startInlineStyle: c.startInlineStyle,
        preamble: c.preamble,
        externalRuntimeScript: c.externalRuntimeScript,
        bootstrapChunks: c.bootstrapChunks,
        importMapChunks: c.importMapChunks,
        onHeaders: c.onHeaders,
        headers: c.headers,
        resets: c.resets,
        charsetChunks: c.charsetChunks,
        viewportChunks: c.viewportChunks,
        hoistableChunks: c.hoistableChunks,
        preconnects: c.preconnects,
        fontPreloads: c.fontPreloads,
        highImagePreloads: c.highImagePreloads,
        styles: c.styles,
        bootstrapScripts: c.bootstrapScripts,
        scripts: c.scripts,
        bulkPreloads: c.bulkPreloads,
        preloads: c.preloads,
        nonce: c.nonce,
        stylesToHoist: c.stylesToHoist,
        generateStaticMarkup: r
      };
    }
    function qc(n, r, c, d) {
      return c.generateStaticMarkup ? (n.push(Ce(r)), !1) : (r === "" ? n = d : (d && n.push("<!-- -->"), n.push(Ce(r)), n = !0), n);
    }
    function Ra(n, r, c, d) {
      r.generateStaticMarkup || c && d && n.push("<!-- -->");
    }
    function ct(n) {
      if (n == null) return null;
      if (typeof n == "function")
        return n.$$typeof === ve ? null : n.displayName || n.name || null;
      if (typeof n == "string") return n;
      switch (n) {
        case ri:
          return "Fragment";
        case tu:
          return "Profiler";
        case nu:
          return "StrictMode";
        case Wr:
          return "Suspense";
        case il:
          return "SuspenseList";
        case zl:
          return "Activity";
      }
      if (typeof n == "object")
        switch (typeof n.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), n.$$typeof) {
          case Tt:
            return "Portal";
          case rl:
            return n.displayName || "Context";
          case Hu:
            return (n._context.displayName || "Context") + ".Consumer";
          case ll:
            var r = n.render;
            return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
          case Fn:
            return r = n.displayName || null, r !== null ? r : ct(n.type) || "Memo";
          case al:
            r = n._payload, n = n._init;
            try {
              return ct(n(r));
            } catch {
            }
        }
      return null;
    }
    function Gi(n, r) {
      if (n !== r) {
        n.context._currentValue2 = n.parentValue, n = n.parent;
        var c = r.parent;
        if (n === null) {
          if (c !== null)
            throw Error(
              "The stacks must reach the root at the same time. This is a bug in React."
            );
        } else {
          if (c === null)
            throw Error(
              "The stacks must reach the root at the same time. This is a bug in React."
            );
          Gi(n, c);
        }
        r.context._currentValue2 = r.value;
      }
    }
    function Xi(n) {
      n.context._currentValue2 = n.parentValue, n = n.parent, n !== null && Xi(n);
    }
    function Ca(n) {
      var r = n.parent;
      r !== null && Ca(r), n.context._currentValue2 = n.value;
    }
    function Jt(n, r) {
      if (n.context._currentValue2 = n.parentValue, n = n.parent, n === null)
        throw Error(
          "The depth must equal at least at zero before reaching the root. This is a bug in React."
        );
      n.depth === r.depth ? Gi(n, r) : Jt(n, r);
    }
    function Nr(n, r) {
      var c = r.parent;
      if (c === null)
        throw Error(
          "The depth must equal at least at zero before reaching the root. This is a bug in React."
        );
      n.depth === c.depth ? Gi(n, c) : Nr(n, c), r.context._currentValue2 = r.value;
    }
    function Pn(n) {
      var r = Le;
      r !== n && (r === null ? Ca(n) : n === null ? Xi(r) : r.depth === n.depth ? Gi(r, n) : r.depth > n.depth ? Jt(r, n) : Nr(r, n), Le = n);
    }
    function Go(n) {
      if (n !== null && typeof n != "function") {
        var r = String(n);
        Di.has(r) || (Di.add(r), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          n
        ));
      }
    }
    function nl(n, r) {
      n = (n = n.constructor) && ct(n) || "ReactClass";
      var c = n + "." + r;
      nn[c] || (console.error(
        `Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`,
        r,
        n
      ), nn[c] = !0);
    }
    function un(n, r, c) {
      var d = n.id;
      n = n.overflow;
      var y = 32 - xl(d) - 1;
      d &= ~(1 << y), c += 1;
      var R = 32 - xl(r) + y;
      if (30 < R) {
        var I = y - y % 5;
        return R = (d & (1 << I) - 1).toString(32), d >>= I, y -= I, {
          id: 1 << 32 - xl(r) + y | c << y | d,
          overflow: R + n
        };
      }
      return {
        id: 1 << R | c << y | d,
        overflow: n
      };
    }
    function jc(n) {
      return n >>>= 0, n === 0 ? 32 : 31 - (vr(n) / Ul | 0) | 0;
    }
    function je() {
    }
    function Xo(n, r, c) {
      switch (c = n[c], c === void 0 ? n.push(r) : c !== r && (r.then(je, je), r = c), r.status) {
        case "fulfilled":
          return r.value;
        case "rejected":
          throw r.reason;
        default:
          switch (typeof r.status == "string" ? r.then(je, je) : (n = r, n.status = "pending", n.then(
            function(d) {
              if (r.status === "pending") {
                var y = r;
                y.status = "fulfilled", y.value = d;
              }
            },
            function(d) {
              if (r.status === "pending") {
                var y = r;
                y.status = "rejected", y.reason = d;
              }
            }
          )), r.status) {
            case "fulfilled":
              return r.value;
            case "rejected":
              throw r.reason;
          }
          throw Za = r, br;
      }
    }
    function Zo() {
      if (Za === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var n = Za;
      return Za = null, n;
    }
    function Vo(n, r) {
      return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
    }
    function Kl() {
      if (mr === null)
        throw Error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        );
      return oi && console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      ), mr;
    }
    function En() {
      if (0 < nc)
        throw Error("Rendered more hooks than during the previous render");
      return { memoizedState: null, queue: null, next: null };
    }
    function cn() {
      return Xn === null ? Bc === null ? (Ao = !1, Bc = Xn = En()) : (Ao = !0, Xn = Bc) : Xn.next === null ? (Ao = !1, Xn = Xn.next = En()) : (Ao = !0, Xn = Xn.next), Xn;
    }
    function Ol() {
      var n = Mo;
      return Mo = null, n;
    }
    function Qt() {
      oi = !1, Va = yr = po = mr = null, Yl = !1, Bc = null, nc = 0, Xn = fa = null;
    }
    function ka(n) {
      return oi && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), n._currentValue2;
    }
    function Iu(n, r) {
      return typeof r == "function" ? r(n) : r;
    }
    function or(n, r, c) {
      if (n !== Iu && (Qa = "useReducer"), mr = Kl(), Xn = cn(), Ao) {
        if (c = Xn.queue, r = c.dispatch, fa !== null) {
          var d = fa.get(c);
          if (d !== void 0) {
            fa.delete(c), c = Xn.memoizedState;
            do {
              var y = d.action;
              oi = !0, c = n(c, y), oi = !1, d = d.next;
            } while (d !== null);
            return Xn.memoizedState = c, [c, r];
          }
        }
        return [Xn.memoizedState, r];
      }
      return oi = !0, n = n === Iu ? typeof r == "function" ? r() : r : c !== void 0 ? c(r) : r, oi = !1, Xn.memoizedState = n, n = Xn.queue = { last: null, dispatch: null }, n = n.dispatch = Ec.bind(
        null,
        mr,
        n
      ), [Xn.memoizedState, n];
    }
    function $c(n, r) {
      if (mr = Kl(), Xn = cn(), r = r === void 0 ? null : r, Xn !== null) {
        var c = Xn.memoizedState;
        if (c !== null && r !== null) {
          e: {
            var d = c[1];
            if (d === null)
              console.error(
                "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
                Qa
              ), d = !1;
            else {
              r.length !== d.length && console.error(
                `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
                Qa,
                "[" + r.join(", ") + "]",
                "[" + d.join(", ") + "]"
              );
              for (var y = 0; y < d.length && y < r.length; y++)
                if (!Fo(r[y], d[y])) {
                  d = !1;
                  break e;
                }
              d = !0;
            }
          }
          if (d) return c[0];
        }
      }
      return oi = !0, n = n(), oi = !1, Xn.memoizedState = [n, r], n;
    }
    function Ec(n, r, c) {
      if (25 <= nc)
        throw Error(
          "Too many re-renders. React limits the number of renders to prevent an infinite loop."
        );
      if (n === mr)
        if (Yl = !0, n = { action: c, next: null }, fa === null && (fa = /* @__PURE__ */ new Map()), c = fa.get(r), c === void 0)
          fa.set(r, n);
        else {
          for (r = c; r.next !== null; ) r = r.next;
          r.next = n;
        }
    }
    function Ou() {
      throw Error(
        "A function wrapped in useEffectEvent can't be called during rendering."
      );
    }
    function Wn() {
      throw Error("startTransition cannot be called during server rendering.");
    }
    function _u() {
      throw Error("Cannot update optimistic state while rendering.");
    }
    function ao(n, r, c) {
      Kl();
      var d = Ja++, y = yr;
      if (typeof n.$$FORM_ACTION == "function") {
        var R = null, I = Va;
        y = y.formState;
        var D = n.$$IS_SIGNATURE_EQUAL;
        if (y !== null && typeof D == "function") {
          var ee = y[1];
          D.call(n, y[2], y[3]) && (R = c !== void 0 ? "p" + c : "k" + Ae(
            JSON.stringify([
              I,
              null,
              d
            ]),
            0
          ), ee === R && ($u = d, r = y[0]));
        }
        var B = n.bind(null, r);
        return n = function(se) {
          B(se);
        }, typeof B.$$FORM_ACTION == "function" && (n.$$FORM_ACTION = function(se) {
          se = B.$$FORM_ACTION(se), c !== void 0 && (Re(c, "target"), c += "", se.action = c);
          var ye = se.data;
          return ye && (R === null && (R = c !== void 0 ? "p" + c : "k" + Ae(
            JSON.stringify([
              I,
              null,
              d
            ]),
            0
          )), ye.append("$ACTION_KEY", R)), se;
        }), [r, n, !1];
      }
      var Q = n.bind(null, r);
      return [
        r,
        function(se) {
          Q(se);
        },
        !1
      ];
    }
    function tl(n) {
      var r = ec;
      return ec += 1, Mo === null && (Mo = []), Xo(Mo, n, r);
    }
    function Sa() {
      throw Error("Cache cannot be refreshed during server rendering.");
    }
    function es() {
    }
    function ns() {
      if (sl === 0) {
        ha = console.log, Li = console.info, tc = console.warn, rc = console.error, lc = console.group, qa = console.groupCollapsed, hs = console.groupEnd;
        var n = {
          configurable: !0,
          enumerable: !0,
          value: es,
          writable: !0
        };
        Object.defineProperties(console, {
          info: n,
          log: n,
          warn: n,
          error: n,
          group: n,
          groupCollapsed: n,
          groupEnd: n
        });
      }
      sl++;
    }
    function oo() {
      if (sl--, sl === 0) {
        var n = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: Yn({}, n, { value: ha }),
          info: Yn({}, n, { value: Li }),
          warn: Yn({}, n, { value: tc }),
          error: Yn({}, n, { value: rc }),
          group: Yn({}, n, { value: lc }),
          groupCollapsed: Yn({}, n, { value: qa }),
          groupEnd: Yn({}, n, { value: hs })
        });
      }
      0 > sl && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function uo(n) {
      var r = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, n = n.stack, Error.prepareStackTrace = r, n.startsWith(`Error: react-stack-top-frame
`) && (n = n.slice(29)), r = n.indexOf(`
`), r !== -1 && (n = n.slice(r + 1)), r = n.indexOf("react_stack_bottom_frame"), r !== -1 && (r = n.lastIndexOf(
        `
`,
        r
      )), r !== -1)
        n = n.slice(0, r);
      else return "";
      return n;
    }
    function ql(n) {
      if (Nc === void 0)
        try {
          throw Error();
        } catch (c) {
          var r = c.stack.trim().match(/\n( *(at )?)/);
          Nc = r && r[1] || "", Io = -1 < c.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < c.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + Nc + n + Io;
    }
    function jl(n, r) {
      if (!n || ds) return "";
      var c = ic.get(n);
      if (c !== void 0) return c;
      ds = !0, c = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var d = null;
      d = jn.H, jn.H = null, ns();
      try {
        var y = {
          DetermineComponentFrameRoot: function() {
            try {
              if (r) {
                var ye = function() {
                  throw Error();
                };
                if (Object.defineProperty(ye.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(ye, []);
                  } catch (le) {
                    var he = le;
                  }
                  Reflect.construct(n, [], ye);
                } else {
                  try {
                    ye.call();
                  } catch (le) {
                    he = le;
                  }
                  n.call(ye.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (le) {
                  he = le;
                }
                (ye = n()) && typeof ye.catch == "function" && ye.catch(function() {
                });
              }
            } catch (le) {
              if (le && he && typeof le.stack == "string")
                return [le.stack, he.stack];
            }
            return [null, null];
          }
        };
        y.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var R = Object.getOwnPropertyDescriptor(
          y.DetermineComponentFrameRoot,
          "name"
        );
        R && R.configurable && Object.defineProperty(
          y.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var I = y.DetermineComponentFrameRoot(), D = I[0], ee = I[1];
        if (D && ee) {
          var B = D.split(`
`), Q = ee.split(`
`);
          for (I = R = 0; R < B.length && !B[R].includes(
            "DetermineComponentFrameRoot"
          ); )
            R++;
          for (; I < Q.length && !Q[I].includes(
            "DetermineComponentFrameRoot"
          ); )
            I++;
          if (R === B.length || I === Q.length)
            for (R = B.length - 1, I = Q.length - 1; 1 <= R && 0 <= I && B[R] !== Q[I]; )
              I--;
          for (; 1 <= R && 0 <= I; R--, I--)
            if (B[R] !== Q[I]) {
              if (R !== 1 || I !== 1)
                do
                  if (R--, I--, 0 > I || B[R] !== Q[I]) {
                    var se = `
` + B[R].replace(
                      " at new ",
                      " at "
                    );
                    return n.displayName && se.includes("<anonymous>") && (se = se.replace("<anonymous>", n.displayName)), typeof n == "function" && ic.set(n, se), se;
                  }
                while (1 <= R && 0 <= I);
              break;
            }
        }
      } finally {
        ds = !1, jn.H = d, oo(), Error.prepareStackTrace = c;
      }
      return B = (B = n ? n.displayName || n.name : "") ? ql(B) : "", typeof n == "function" && ic.set(n, B), B;
    }
    function mu(n) {
      if (typeof n == "string") return ql(n);
      if (typeof n == "function")
        return n.prototype && n.prototype.isReactComponent ? jl(n, !0) : jl(n, !1);
      if (typeof n == "object" && n !== null) {
        switch (n.$$typeof) {
          case ll:
            return jl(n.render, !1);
          case Fn:
            return jl(n.type, !1);
          case al:
            var r = n, c = r._payload;
            r = r._init;
            try {
              n = r(c);
            } catch {
              return ql("Lazy");
            }
            return mu(n);
        }
        if (typeof n.name == "string") {
          e: {
            if (c = n.name, r = n.env, n = n.debugLocation, n != null) {
              n = uo(n);
              var d = n.lastIndexOf(`
`);
              if (n = d === -1 ? n : n.slice(d + 1), n.indexOf(c) !== -1) {
                c = `
` + n;
                break e;
              }
            }
            c = ql(
              c + (r ? " [" + r + "]" : "")
            );
          }
          return c;
        }
      }
      switch (n) {
        case il:
          return ql("SuspenseList");
        case Wr:
          return ql("Suspense");
      }
      return "";
    }
    function Jo(n, r) {
      return (500 < r.byteSize || !1) && r.contentPreamble === null;
    }
    function Qo(n) {
      if (typeof n == "object" && n !== null && typeof n.environmentName == "string") {
        var r = n.environmentName;
        n = [n].slice(0), typeof n[0] == "string" ? n.splice(
          0,
          1,
          "[%s] " + n[0],
          " " + r + " "
        ) : n.splice(0, 0, "[%s]", " " + r + " "), n.unshift(console), r = J.apply(console.error, n), r();
      } else console.error(n);
      return null;
    }
    function pt(n, r, c, d, y, R, I, D, ee, B, Q) {
      var se = /* @__PURE__ */ new Set();
      this.destination = null, this.flushScheduled = !1, this.resumableState = n, this.renderState = r, this.rootFormatContext = c, this.progressiveChunkSize = d === void 0 ? 12800 : d, this.status = 10, this.fatalError = null, this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0, this.completedPreambleSegments = this.completedRootSegment = null, this.byteSize = 0, this.abortableTasks = se, this.pingedTasks = [], this.clientRenderedBoundaries = [], this.completedBoundaries = [], this.partialBoundaries = [], this.trackedPostpones = null, this.onError = y === void 0 ? Qo : y, this.onPostpone = B === void 0 ? je : B, this.onAllReady = R === void 0 ? je : R, this.onShellReady = I === void 0 ? je : I, this.onShellError = D === void 0 ? je : D, this.onFatalError = ee === void 0 ? je : ee, this.formState = Q === void 0 ? null : Q, this.didWarnForKey = null;
    }
    function co(n, r, c, d, y, R, I, D, ee, B, Q, se) {
      var ye = gs();
      return 1e3 < ye - Is && (jn.recentlyCreatedOwnerStacks = 0, Is = ye), r = new pt(
        r,
        c,
        d,
        y,
        R,
        I,
        D,
        ee,
        B,
        Q,
        se
      ), c = Fr(
        r,
        0,
        null,
        d,
        !1,
        !1
      ), c.parentFlushed = !0, n = $l(
        r,
        null,
        n,
        -1,
        null,
        c,
        null,
        null,
        r.abortableTasks,
        null,
        d,
        null,
        Xa,
        null,
        null,
        ge,
        null
      ), pr(n), r.pingedTasks.push(n), r;
    }
    function Ko(n, r) {
      n.pingedTasks.push(r), n.pingedTasks.length === 1 && (n.flushScheduled = n.destination !== null, Sc(n));
    }
    function Du(n, r, c, d, y) {
      return c = {
        status: Hi,
        rootSegmentID: -1,
        parentFlushed: !1,
        pendingTasks: 0,
        row: r,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks: c,
        errorDigest: null,
        contentState: Ta(),
        fallbackState: Ta(),
        contentPreamble: d,
        fallbackPreamble: y,
        trackedContentKeyPath: null,
        trackedFallbackNode: null,
        errorMessage: null,
        errorStack: null,
        errorComponentStack: null
      }, r !== null && (r.pendingTasks++, d = r.boundaries, d !== null && (n.allPendingTasks++, c.pendingTasks++, d.push(c)), n = r.inheritedHoistables, n !== null && hl(c.contentState, n)), c;
    }
    function $l(n, r, c, d, y, R, I, D, ee, B, Q, se, ye, he, le, Ke, On) {
      n.allPendingTasks++, y === null ? n.pendingRootTasks++ : y.pendingTasks++, he !== null && he.pendingTasks++;
      var Oe = {
        replay: null,
        node: c,
        childIndex: d,
        ping: function() {
          return Ko(n, Oe);
        },
        blockedBoundary: y,
        blockedSegment: R,
        blockedPreamble: I,
        hoistableState: D,
        abortSet: ee,
        keyPath: B,
        formatContext: Q,
        context: se,
        treeContext: ye,
        row: he,
        componentStack: le,
        thenableState: r
      };
      return Oe.debugTask = On, ee.add(Oe), Oe;
    }
    function qo(n, r, c, d, y, R, I, D, ee, B, Q, se, ye, he, le, Ke) {
      n.allPendingTasks++, R === null ? n.pendingRootTasks++ : R.pendingTasks++, ye !== null && ye.pendingTasks++, c.pendingTasks++;
      var On = {
        replay: c,
        node: d,
        childIndex: y,
        ping: function() {
          return Ko(n, On);
        },
        blockedBoundary: R,
        blockedSegment: null,
        blockedPreamble: null,
        hoistableState: I,
        abortSet: D,
        keyPath: ee,
        formatContext: B,
        context: Q,
        treeContext: se,
        row: ye,
        componentStack: he,
        thenableState: r
      };
      return On.debugTask = Ke, D.add(On), On;
    }
    function Fr(n, r, c, d, y, R) {
      return {
        status: Hi,
        parentFlushed: !1,
        id: -1,
        index: r,
        chunks: [],
        children: [],
        preambleChildren: [],
        parentFormatContext: d,
        boundary: c,
        lastPushedText: y,
        textEmbedded: R
      };
    }
    function _l() {
      if (El === null || El.componentStack === null)
        return "";
      var n = El.componentStack;
      try {
        var r = "";
        if (typeof n.type == "string")
          r += ql(n.type);
        else if (typeof n.type == "function") {
          if (!n.owner) {
            var c = r, d = n.type, y = d ? d.displayName || d.name : "", R = y ? ql(y) : "";
            r = c + R;
          }
        } else
          n.owner || (r += mu(n.type));
        for (; n; )
          c = null, n.debugStack != null ? c = uo(
            n.debugStack
          ) : (R = n, R.stack != null && (c = typeof R.stack != "string" ? R.stack = uo(
            R.stack
          ) : R.stack)), (n = n.owner) && c && (r += `
` + c);
        var I = r;
      } catch (D) {
        I = `
Error generating stack: ` + D.message + `
` + D.stack;
      }
      return I;
    }
    function Rc(n, r) {
      if (r != null)
        for (var c = r.length - 1; 0 <= c; c--) {
          var d = r[c];
          if (typeof d.name == "string" || typeof d.time == "number") break;
          if (d.awaited != null) {
            var y = d.debugStack == null ? d.awaited : d;
            if (y.debugStack !== void 0) {
              n.componentStack = {
                parent: n.componentStack,
                type: d,
                owner: y.owner,
                stack: y.debugStack
              }, n.debugTask = y.debugTask;
              break;
            }
          }
        }
    }
    function jo(n, r) {
      if (r != null)
        for (var c = 0; c < r.length; c++) {
          var d = r[c];
          typeof d.name == "string" && d.debugStack !== void 0 && (n.componentStack = {
            parent: n.componentStack,
            type: d,
            owner: d.owner,
            stack: d.debugStack
          }, n.debugTask = d.debugTask);
        }
    }
    function pr(n) {
      var r = n.node;
      if (typeof r == "object" && r !== null)
        switch (r.$$typeof) {
          case Ma:
            var c = r.type, d = r._owner, y = r._debugStack;
            jo(n, r._debugInfo), n.debugTask = r._debugTask, n.componentStack = {
              parent: n.componentStack,
              type: c,
              owner: d,
              stack: y
            };
            break;
          case al:
            jo(n, r._debugInfo);
            break;
          default:
            typeof r.then == "function" && jo(n, r._debugInfo);
        }
    }
    function $o(n) {
      return n === null ? null : {
        parent: n.parent,
        type: "Suspense Fallback",
        owner: n.owner,
        stack: n.stack
      };
    }
    function Zi(n) {
      var r = {};
      return n && Object.defineProperty(r, "componentStack", {
        configurable: !0,
        enumerable: !0,
        get: function() {
          try {
            var c = "", d = n;
            do
              c += mu(d.type), d = d.parent;
            while (d);
            var y = c;
          } catch (R) {
            y = `
Error generating stack: ` + R.message + `
` + R.stack;
          }
          return Object.defineProperty(r, "componentStack", {
            value: y
          }), y;
        }
      }), r;
    }
    function so(n, r, c, d, y) {
      n.errorDigest = r, c instanceof Error ? (r = String(c.message), c = String(c.stack)) : (r = typeof c == "object" && c !== null ? Te(c) : String(c), c = null), y = y ? `Switched to client rendering because the server rendering aborted due to:

` : `Switched to client rendering because the server rendering errored:

`, n.errorMessage = y + r, n.errorStack = c !== null ? y + c : null, n.errorComponentStack = d.componentStack;
    }
    function Ar(n, r, c, d) {
      if (n = n.onError, r = d ? d.run(n.bind(null, r, c)) : n(r, c), r != null && typeof r != "string")
        console.error(
          'onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "%s" instead',
          typeof r
        );
      else return r;
    }
    function mt(n, r, c, d) {
      c = n.onShellError;
      var y = n.onFatalError;
      d ? (d.run(c.bind(null, r)), d.run(y.bind(null, r))) : (c(r), y(r)), n.destination !== null ? (n.status = zi, n.destination.destroy(r)) : (n.status = 13, n.fatalError = r);
    }
    function Dn(n, r) {
      Cc(n, r.next, r.hoistables);
    }
    function Cc(n, r, c) {
      for (; r !== null; ) {
        c !== null && (hl(r.hoistables, c), r.inheritedHoistables = c);
        var d = r.boundaries;
        if (d !== null) {
          r.boundaries = null;
          for (var y = 0; y < d.length; y++) {
            var R = d[y];
            c !== null && hl(
              R.contentState,
              c
            ), Ll(n, R, null, null);
          }
        }
        if (r.pendingTasks--, 0 < r.pendingTasks) break;
        c = r.hoistables, r = r.next;
      }
    }
    function Ti(n, r) {
      var c = r.boundaries;
      if (c !== null && r.pendingTasks === c.length) {
        for (var d = !0, y = 0; y < c.length; y++) {
          var R = c[y];
          if (R.pendingTasks !== 1 || R.parentFlushed || Jo(n, R)) {
            d = !1;
            break;
          }
        }
        d && Cc(n, r, r.hoistables);
      }
    }
    function ml(n) {
      var r = {
        pendingTasks: 1,
        boundaries: null,
        hoistables: Ta(),
        inheritedHoistables: null,
        together: !1,
        next: null
      };
      return n !== null && 0 < n.pendingTasks && (r.pendingTasks++, r.boundaries = [], n.next = r), r;
    }
    function kc(n, r, c, d, y) {
      var R = r.keyPath, I = r.treeContext, D = r.row, ee = r.componentStack, B = r.debugTask;
      jo(r, r.node.props.children._debugInfo), r.keyPath = c, c = d.length;
      var Q = null;
      if (r.replay !== null) {
        var se = r.replay.slots;
        if (se !== null && typeof se == "object")
          for (var ye = 0; ye < c; ye++) {
            var he = y !== "backwards" && y !== "unstable_legacy-backwards" ? ye : c - 1 - ye, le = d[he];
            r.row = Q = ml(
              Q
            ), r.treeContext = un(I, c, he);
            var Ke = se[he];
            typeof Ke == "number" ? (Ei(n, r, Ke, le, he), delete se[he]) : wt(n, r, le, he), --Q.pendingTasks === 0 && Dn(n, Q);
          }
        else
          for (se = 0; se < c; se++)
            ye = y !== "backwards" && y !== "unstable_legacy-backwards" ? se : c - 1 - se, he = d[ye], yt(n, r, he), r.row = Q = ml(Q), r.treeContext = un(I, c, ye), wt(n, r, he, ye), --Q.pendingTasks === 0 && Dn(n, Q);
      } else if (y !== "backwards" && y !== "unstable_legacy-backwards")
        for (y = 0; y < c; y++)
          se = d[y], yt(n, r, se), r.row = Q = ml(Q), r.treeContext = un(
            I,
            c,
            y
          ), wt(n, r, se, y), --Q.pendingTasks === 0 && Dn(n, Q);
      else {
        for (y = r.blockedSegment, se = y.children.length, ye = y.chunks.length, he = c - 1; 0 <= he; he--) {
          le = d[he], r.row = Q = ml(
            Q
          ), r.treeContext = un(I, c, he), Ke = Fr(
            n,
            ye,
            null,
            r.formatContext,
            he === 0 ? y.lastPushedText : !0,
            !0
          ), y.children.splice(se, 0, Ke), r.blockedSegment = Ke, yt(n, r, le);
          try {
            wt(n, r, le, he), Ra(
              Ke.chunks,
              n.renderState,
              Ke.lastPushedText,
              Ke.textEmbedded
            ), Ke.status = wr, --Q.pendingTasks === 0 && Dn(n, Q);
          } catch (On) {
            throw Ke.status = n.status === 12 ? Rl : xn, On;
          }
        }
        r.blockedSegment = y, y.lastPushedText = !1;
      }
      D !== null && Q !== null && 0 < Q.pendingTasks && (D.pendingTasks++, Q.next = D), r.treeContext = I, r.row = D, r.keyPath = R, r.componentStack = ee, r.debugTask = B;
    }
    function xi(n, r, c, d, y, R) {
      var I = r.thenableState;
      for (r.thenableState = null, mr = {}, po = r, yr = n, Va = c, oi = !1, Ja = ju = 0, $u = -1, ec = 0, Mo = I, n = Wc(d, y, R); Yl; )
        Yl = !1, Ja = ju = 0, $u = -1, ec = 0, nc += 1, Xn = null, n = d(y, R);
      return Qt(), n;
    }
    function ei(n, r, c, d, y, R, I) {
      var D = !1;
      if (R !== 0 && n.formState !== null) {
        var ee = r.blockedSegment;
        if (ee !== null) {
          D = !0, ee = ee.chunks;
          for (var B = 0; B < R; B++)
            B === I ? ee.push("<!--F!-->") : ee.push("<!--F-->");
        }
      }
      R = r.keyPath, r.keyPath = c, y ? (c = r.treeContext, r.treeContext = un(c, 1, 0), wt(n, r, d, -1), r.treeContext = c) : D ? wt(n, r, d, -1) : We(n, r, d, -1), r.keyPath = R;
    }
    function fo(n, r, c, d, y, R) {
      if (typeof d == "function")
        if (d.prototype && d.prototype.isReactComponent) {
          var I = y;
          if ("ref" in y) {
            I = {};
            for (var D in y)
              D !== "ref" && (I[D] = y[D]);
          }
          var ee = d.defaultProps;
          if (ee) {
            I === y && (I = Yn({}, I, y));
            for (var B in ee)
              I[B] === void 0 && (I[B] = ee[B]);
          }
          var Q = I, se = ge, ye = d.contextType;
          if ("contextType" in d && ye !== null && (ye === void 0 || ye.$$typeof !== rl) && !_r.has(d)) {
            _r.add(d);
            var he = ye === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof ye != "object" ? " However, it is set to a " + typeof ye + "." : ye.$$typeof === Hu ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(ye).join(", ") + "}.";
            console.error(
              "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
              ct(d) || "Component",
              he
            );
          }
          typeof ye == "object" && ye !== null && (se = ye._currentValue2);
          var le = new d(Q, se);
          if (typeof d.getDerivedStateFromProps == "function" && (le.state === null || le.state === void 0)) {
            var Ke = ct(d) || "Component";
            Hn.has(Ke) || (Hn.add(Ke), console.error(
              "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
              Ke,
              le.state === null ? "null" : "undefined",
              Ke
            ));
          }
          if (typeof d.getDerivedStateFromProps == "function" || typeof le.getSnapshotBeforeUpdate == "function") {
            var On = null, Oe = null, gn = null;
            if (typeof le.componentWillMount == "function" && le.componentWillMount.__suppressDeprecationWarning !== !0 ? On = "componentWillMount" : typeof le.UNSAFE_componentWillMount == "function" && (On = "UNSAFE_componentWillMount"), typeof le.componentWillReceiveProps == "function" && le.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? Oe = "componentWillReceiveProps" : typeof le.UNSAFE_componentWillReceiveProps == "function" && (Oe = "UNSAFE_componentWillReceiveProps"), typeof le.componentWillUpdate == "function" && le.componentWillUpdate.__suppressDeprecationWarning !== !0 ? gn = "componentWillUpdate" : typeof le.UNSAFE_componentWillUpdate == "function" && (gn = "UNSAFE_componentWillUpdate"), On !== null || Oe !== null || gn !== null) {
              var er = ct(d) || "Component", nr = typeof d.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
              Ur.has(er) || (Ur.add(
                er
              ), console.error(
                `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
                er,
                nr,
                On !== null ? `
  ` + On : "",
                Oe !== null ? `
  ` + Oe : "",
                gn !== null ? `
  ` + gn : ""
              ));
            }
          }
          var yn = ct(d) || "Component";
          le.render || (d.prototype && typeof d.prototype.render == "function" ? console.error(
            "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
            yn
          ) : console.error(
            "No `render` method found on the %s instance: you may have forgotten to define `render`.",
            yn
          )), !le.getInitialState || le.getInitialState.isReactClassApproved || le.state || console.error(
            "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
            yn
          ), le.getDefaultProps && !le.getDefaultProps.isReactClassApproved && console.error(
            "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
            yn
          ), le.contextType && console.error(
            "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
            yn
          ), d.childContextTypes && !gt.has(d) && (gt.add(d), console.error(
            "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
            yn
          )), d.contextTypes && !gr.has(d) && (gr.add(d), console.error(
            "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
            yn
          )), typeof le.componentShouldUpdate == "function" && console.error(
            "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
            yn
          ), d.prototype && d.prototype.isPureReactComponent && typeof le.shouldComponentUpdate < "u" && console.error(
            "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
            ct(d) || "A pure component"
          ), typeof le.componentDidUnmount == "function" && console.error(
            "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
            yn
          ), typeof le.componentDidReceiveProps == "function" && console.error(
            "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
            yn
          ), typeof le.componentWillRecieveProps == "function" && console.error(
            "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
            yn
          ), typeof le.UNSAFE_componentWillRecieveProps == "function" && console.error(
            "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
            yn
          );
          var Ht = le.props !== Q;
          le.props !== void 0 && Ht && console.error(
            "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
            yn
          ), le.defaultProps && console.error(
            "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
            yn,
            yn
          ), typeof le.getSnapshotBeforeUpdate != "function" || typeof le.componentDidUpdate == "function" || $t.has(d) || ($t.add(d), console.error(
            "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
            ct(d)
          )), typeof le.getDerivedStateFromProps == "function" && console.error(
            "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
            yn
          ), typeof le.getDerivedStateFromError == "function" && console.error(
            "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
            yn
          ), typeof d.getSnapshotBeforeUpdate == "function" && console.error(
            "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
            yn
          );
          var ci = le.state;
          ci && (typeof ci != "object" || Fi(ci)) && console.error("%s.state: must be set to an object or null", yn), typeof le.getChildContext == "function" && typeof d.childContextTypes != "object" && console.error(
            "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
            yn
          );
          var Dr = le.state !== void 0 ? le.state : null;
          le.updater = tt, le.props = Q, le.state = Dr;
          var Ee = { queue: [], replace: !1 };
          le._reactInternals = Ee;
          var Cn = d.contextType;
          if (le.context = typeof Cn == "object" && Cn !== null ? Cn._currentValue2 : ge, le.state === Q) {
            var kn = ct(d) || "Component";
            Tl.has(
              kn
            ) || (Tl.add(
              kn
            ), console.error(
              "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
              kn
            ));
          }
          var pn = d.getDerivedStateFromProps;
          if (typeof pn == "function") {
            var rt = pn(
              Q,
              Dr
            );
            if (rt === void 0) {
              var ln = ct(d) || "Component";
              He.has(ln) || (He.add(ln), console.error(
                "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
                ln
              ));
            }
            var Ye = rt == null ? Dr : Yn({}, Dr, rt);
            le.state = Ye;
          }
          if (typeof d.getDerivedStateFromProps != "function" && typeof le.getSnapshotBeforeUpdate != "function" && (typeof le.UNSAFE_componentWillMount == "function" || typeof le.componentWillMount == "function")) {
            var Tr = le.state;
            if (typeof le.componentWillMount == "function") {
              if (le.componentWillMount.__suppressDeprecationWarning !== !0) {
                var Sn = ct(d) || "Unknown";
                nt[Sn] || (console.warn(
                  `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
                  Sn
                ), nt[Sn] = !0);
              }
              le.componentWillMount();
            }
            if (typeof le.UNSAFE_componentWillMount == "function" && le.UNSAFE_componentWillMount(), Tr !== le.state && (console.error(
              "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
              ct(d) || "Component"
            ), tt.enqueueReplaceState(
              le,
              le.state,
              null
            )), Ee.queue !== null && 0 < Ee.queue.length) {
              var tr = Ee.queue, Zn = Ee.replace;
              if (Ee.queue = null, Ee.replace = !1, Zn && tr.length === 1)
                le.state = tr[0];
              else {
                for (var Gr = Zn ? tr[0] : le.state, mo = !0, Xr = Zn ? 1 : 0; Xr < tr.length; Xr++) {
                  var si = tr[Xr], fi = typeof si == "function" ? si.call(
                    le,
                    Gr,
                    Q,
                    void 0
                  ) : si;
                  fi != null && (mo ? (mo = !1, Gr = Yn(
                    {},
                    Gr,
                    fi
                  )) : Yn(Gr, fi));
                }
                le.state = Gr;
              }
            } else Ee.queue = null;
          }
          var hi = ac(le);
          if (n.status === 12) throw null;
          le.props !== Q && (ja || console.error(
            "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
            ct(d) || "a component"
          ), ja = !0);
          var Xt = r.keyPath;
          r.keyPath = c, We(n, r, hi, -1), r.keyPath = Xt;
        } else {
          if (d.prototype && typeof d.prototype.render == "function") {
            var e = ct(d) || "Unknown";
            wu[e] || (console.error(
              "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
              e,
              e
            ), wu[e] = !0);
          }
          var t = xi(
            n,
            r,
            c,
            d,
            y,
            void 0
          );
          if (n.status === 12) throw null;
          var u = ju !== 0, h = Ja, b = $u;
          if (d.contextTypes) {
            var x = ct(d) || "Unknown";
            oc[x] || (oc[x] = !0, console.error(
              "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
              x
            ));
          }
          if (d && d.childContextTypes && console.error(
            `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
            d.displayName || d.name || "Component"
          ), typeof d.getDerivedStateFromProps == "function") {
            var F = ct(d) || "Unknown";
            _o[F] || (console.error(
              "%s: Function components do not support getDerivedStateFromProps.",
              F
            ), _o[F] = !0);
          }
          if (typeof d.contextType == "object" && d.contextType !== null) {
            var _ = ct(d) || "Unknown";
            vs[_] || (console.error(
              "%s: Function components do not support contextType.",
              _
            ), vs[_] = !0);
          }
          ei(
            n,
            r,
            c,
            t,
            u,
            h,
            b
          );
        }
      else if (typeof d == "string") {
        var V = r.blockedSegment;
        if (V === null) {
          var L = y.children, W = r.formatContext, ie = r.keyPath;
          r.formatContext = ya(W, d, y), r.keyPath = c, wt(n, r, L, -1), r.formatContext = W, r.keyPath = ie;
        } else {
          var ue = wn(
            V.chunks,
            d,
            y,
            n.resumableState,
            n.renderState,
            r.blockedPreamble,
            r.hoistableState,
            r.formatContext,
            V.lastPushedText
          );
          V.lastPushedText = !1;
          var ae = r.formatContext, te = r.keyPath;
          if (r.keyPath = c, (r.formatContext = ya(
            ae,
            d,
            y
          )).insertionMode === Be) {
            var Me = Fr(
              n,
              0,
              null,
              r.formatContext,
              !1,
              !1
            );
            V.preambleChildren.push(Me), r.blockedSegment = Me;
            try {
              Me.status = 6, wt(n, r, ue, -1), Ra(
                Me.chunks,
                n.renderState,
                Me.lastPushedText,
                Me.textEmbedded
              ), Me.status = wr;
            } finally {
              r.blockedSegment = V;
            }
          } else wt(n, r, ue, -1);
          r.formatContext = ae, r.keyPath = te;
          e: {
            var An = V.chunks, Fe = n.resumableState;
            switch (d) {
              case "title":
              case "style":
              case "script":
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
                break e;
              case "body":
                if (ae.insertionMode <= De) {
                  Fe.hasBody = !0;
                  break e;
                }
                break;
              case "html":
                if (ae.insertionMode === Ze) {
                  Fe.hasHtml = !0;
                  break e;
                }
                break;
              case "head":
                if (ae.insertionMode <= De) break e;
            }
            An.push(_t(d));
          }
          V.lastPushedText = !1;
        }
      } else {
        switch (d) {
          case zu:
          case nu:
          case tu:
          case ri:
            var qe = r.keyPath;
            r.keyPath = c, We(n, r, y.children, -1), r.keyPath = qe;
            return;
          case zl:
            var st = r.blockedSegment;
            if (st === null) {
              if (y.mode !== "hidden") {
                var Ct = r.keyPath;
                r.keyPath = c, wt(n, r, y.children, -1), r.keyPath = Ct;
              }
            } else if (y.mode !== "hidden") {
              n.renderState.generateStaticMarkup || st.chunks.push("<!--&-->"), st.lastPushedText = !1;
              var vn = r.keyPath;
              r.keyPath = c, wt(n, r, y.children, -1), r.keyPath = vn, n.renderState.generateStaticMarkup || st.chunks.push("<!--/&-->"), st.lastPushedText = !1;
            }
            return;
          case il:
            e: {
              var Se = y.children, kt = y.revealOrder;
              if (kt === "forwards" || kt === "backwards" || kt === "unstable_legacy-backwards") {
                if (Fi(Se)) {
                  kc(
                    n,
                    r,
                    c,
                    Se,
                    kt
                  );
                  break e;
                }
                var xr = E(Se);
                if (xr) {
                  var Mn = xr.call(Se);
                  if (Mn) {
                    ho(
                      r,
                      Se,
                      -1,
                      Mn,
                      xr
                    );
                    var Vn = Mn.next();
                    if (!Vn.done) {
                      var Zr = [];
                      do
                        Zr.push(Vn.value), Vn = Mn.next();
                      while (!Vn.done);
                      kc(
                        n,
                        r,
                        c,
                        Se,
                        kt
                      );
                    }
                    break e;
                  }
                }
              }
              if (kt === "together") {
                var rr = r.keyPath, zt = r.row, Jn = r.row = ml(null);
                Jn.boundaries = [], Jn.together = !0, r.keyPath = c, We(n, r, Se, -1), --Jn.pendingTasks === 0 && Dn(n, Jn), r.keyPath = rr, r.row = zt, zt !== null && 0 < Jn.pendingTasks && (zt.pendingTasks++, Jn.next = zt);
              } else {
                var It = r.keyPath;
                r.keyPath = c, We(n, r, Se, -1), r.keyPath = It;
              }
            }
            return;
          case Nu:
          case Un:
            throw Error(
              "ReactDOMServer does not yet support scope components."
            );
          case Wr:
            e: if (r.replay !== null) {
              var Vr = r.keyPath, fl = r.formatContext, Bt = r.row;
              r.keyPath = c, r.formatContext = Kn(
                n.resumableState,
                fl
              ), r.row = null;
              var lt = y.children;
              try {
                wt(n, r, lt, -1);
              } finally {
                r.keyPath = Vr, r.formatContext = fl, r.row = Bt;
              }
            } else {
              var Er = r.keyPath, Jr = r.formatContext, Rr = r.row, Bi = r.blockedBoundary, Qr = r.blockedPreamble, St = r.hoistableState, Cl = r.blockedSegment, Zt = y.fallback, Uc = y.children, di = /* @__PURE__ */ new Set(), ft = Du(
                n,
                r.row,
                di,
                null,
                null
              );
              n.trackedPostpones !== null && (ft.trackedContentKeyPath = c);
              var kl = Fr(
                n,
                Cl.chunks.length,
                ft,
                r.formatContext,
                !1,
                !1
              );
              Cl.children.push(kl), Cl.lastPushedText = !1;
              var Cr = Fr(
                n,
                0,
                null,
                r.formatContext,
                !1,
                !1
              );
              if (Cr.parentFlushed = !0, n.trackedPostpones !== null) {
                var Eu = r.componentStack, Do = [
                  c[0],
                  "Suspense Fallback",
                  c[2]
                ], Xl = [
                  Do[1],
                  Do[2],
                  [],
                  null
                ];
                n.trackedPostpones.workingMap.set(
                  Do,
                  Xl
                ), ft.trackedFallbackNode = Xl, r.blockedSegment = kl, r.blockedPreamble = ft.fallbackPreamble, r.keyPath = Do, r.formatContext = Ot(
                  n.resumableState,
                  Jr
                ), r.componentStack = $o(
                  Eu
                ), kl.status = 6;
                try {
                  wt(n, r, Zt, -1), Ra(
                    kl.chunks,
                    n.renderState,
                    kl.lastPushedText,
                    kl.textEmbedded
                  ), kl.status = wr;
                } catch (uc) {
                  throw kl.status = n.status === 12 ? Rl : xn, uc;
                } finally {
                  r.blockedSegment = Cl, r.blockedPreamble = Qr, r.keyPath = Er, r.formatContext = Jr;
                }
                var Lo = $l(
                  n,
                  null,
                  Uc,
                  -1,
                  ft,
                  Cr,
                  ft.contentPreamble,
                  ft.contentState,
                  r.abortSet,
                  c,
                  Kn(
                    n.resumableState,
                    r.formatContext
                  ),
                  r.context,
                  r.treeContext,
                  null,
                  Eu,
                  ge,
                  r.debugTask
                );
                pr(Lo), n.pingedTasks.push(Lo);
              } else {
                r.blockedBoundary = ft, r.blockedPreamble = ft.contentPreamble, r.hoistableState = ft.contentState, r.blockedSegment = Cr, r.keyPath = c, r.formatContext = Kn(
                  n.resumableState,
                  Jr
                ), r.row = null, Cr.status = 6;
                try {
                  if (wt(n, r, Uc, -1), Ra(
                    Cr.chunks,
                    n.renderState,
                    Cr.lastPushedText,
                    Cr.textEmbedded
                  ), Cr.status = wr, Aa(ft, Cr), ft.pendingTasks === 0 && ft.status === Hi) {
                    if (ft.status = wr, !Jo(n, ft)) {
                      Rr !== null && --Rr.pendingTasks === 0 && Dn(n, Rr), n.pendingRootTasks === 0 && r.blockedPreamble && go(n);
                      break e;
                    }
                  } else
                    Rr !== null && Rr.together && Ti(n, Rr);
                } catch (uc) {
                  if (ft.status = Gt, n.status === 12) {
                    Cr.status = Rl;
                    var Kr = n.fatalError;
                  } else
                    Cr.status = xn, Kr = uc;
                  var Ru = Zi(r.componentStack), Yc = Ar(
                    n,
                    Kr,
                    Ru,
                    r.debugTask
                  );
                  so(
                    ft,
                    Yc,
                    Kr,
                    Ru,
                    !1
                  ), Pa(n, ft);
                } finally {
                  r.blockedBoundary = Bi, r.blockedPreamble = Qr, r.hoistableState = St, r.blockedSegment = Cl, r.keyPath = Er, r.formatContext = Jr, r.row = Rr;
                }
                var Sl = $l(
                  n,
                  null,
                  Zt,
                  -1,
                  Bi,
                  kl,
                  ft.fallbackPreamble,
                  ft.fallbackState,
                  di,
                  [c[0], "Suspense Fallback", c[2]],
                  Ot(
                    n.resumableState,
                    r.formatContext
                  ),
                  r.context,
                  r.treeContext,
                  r.row,
                  $o(
                    r.componentStack
                  ),
                  ge,
                  r.debugTask
                );
                pr(Sl), n.pingedTasks.push(Sl);
              }
            }
            return;
        }
        if (typeof d == "object" && d !== null)
          switch (d.$$typeof) {
            case ll:
              if ("ref" in y) {
                var Cu = {};
                for (var kr in y)
                  kr !== "ref" && (Cu[kr] = y[kr]);
              } else Cu = y;
              var Ho = xi(
                n,
                r,
                c,
                d.render,
                Cu,
                R
              );
              ei(
                n,
                r,
                c,
                Ho,
                ju !== 0,
                Ja,
                $u
              );
              return;
            case Fn:
              fo(n, r, c, d.type, y, R);
              return;
            case rl:
              var eo = y.value, ga = y.children, Pl = r.context, Fl = r.keyPath, gi = d._currentValue2;
              d._currentValue2 = eo, d._currentRenderer2 !== void 0 && d._currentRenderer2 !== null && d._currentRenderer2 !== en && console.error(
                "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
              ), d._currentRenderer2 = en;
              var qr = Le, lr = {
                parent: qr,
                depth: qr === null ? 0 : qr.depth + 1,
                context: d,
                parentValue: gi,
                value: eo
              };
              Le = lr, r.context = lr, r.keyPath = c, We(n, r, ga, -1);
              var va = Le;
              if (va === null)
                throw Error(
                  "Tried to pop a Context at the root of the app. This is a bug in React."
                );
              va.context !== d && console.error(
                "The parent context is not the expected context. This is probably a bug in React."
              ), va.context._currentValue2 = va.parentValue, d._currentRenderer2 !== void 0 && d._currentRenderer2 !== null && d._currentRenderer2 !== en && console.error(
                "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
              ), d._currentRenderer2 = en;
              var vi = Le = va.parent;
              r.context = vi, r.keyPath = Fl, Pl !== r.context && console.error(
                "Popping the context provider did not return back to the original snapshot. This is a bug in React."
              );
              return;
            case Hu:
              var no = d._context, Ni = y.children;
              typeof Ni != "function" && console.error(
                "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
              );
              var bs = Ni(no._currentValue2), Lr = r.keyPath;
              r.keyPath = c, We(n, r, bs, -1), r.keyPath = Lr;
              return;
            case al:
              var Zl = Ms(d);
              if (n.status === 12) throw null;
              fo(n, r, c, Zl, y, R);
              return;
          }
        var ku = "";
        throw (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (ku += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), Error(
          "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + ((d == null ? d : typeof d) + "." + ku)
        );
      }
    }
    function Ei(n, r, c, d, y) {
      var R = r.replay, I = r.blockedBoundary, D = Fr(
        n,
        0,
        null,
        r.formatContext,
        !1,
        !1
      );
      D.id = c, D.parentFlushed = !0;
      try {
        r.replay = null, r.blockedSegment = D, wt(n, r, d, y), D.status = wr, I === null ? n.completedRootSegment = D : (Aa(I, D), I.parentFlushed && n.partialBoundaries.push(I));
      } finally {
        r.replay = R, r.blockedSegment = null;
      }
    }
    function Ri(n, r, c, d, y, R, I, D, ee, B) {
      R = B.nodes;
      for (var Q = 0; Q < R.length; Q++) {
        var se = R[Q];
        if (y === se[1]) {
          if (se.length === 4) {
            if (d !== null && d !== se[0])
              throw Error(
                "Expected the resume to render <" + se[0] + "> in this slot but instead it rendered <" + d + ">. The tree doesn't match so React will fallback to client rendering."
              );
            var ye = se[2];
            d = se[3], y = r.node, r.replay = { nodes: ye, slots: d, pendingTasks: 1 };
            try {
              if (fo(n, r, c, I, D, ee), r.replay.pendingTasks === 1 && 0 < r.replay.nodes.length)
                throw Error(
                  "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
                );
              r.replay.pendingTasks--;
            } catch (Ht) {
              if (typeof Ht == "object" && Ht !== null && (Ht === br || typeof Ht.then == "function"))
                throw r.node === y ? r.replay = B : R.splice(Q, 1), Ht;
              r.replay.pendingTasks--, I = Zi(r.componentStack), D = n, n = r.blockedBoundary, c = Ht, ee = d, d = Ar(D, c, I, r.debugTask), Si(
                D,
                n,
                ye,
                ee,
                c,
                d,
                I,
                !1
              );
            }
            r.replay = B;
          } else {
            if (I !== Wr)
              throw Error(
                "Expected the resume to render <Suspense> in this slot but instead it rendered <" + (ct(I) || "Unknown") + ">. The tree doesn't match so React will fallback to client rendering."
              );
            e: {
              B = void 0, d = se[5], I = se[2], ee = se[3], y = se[4] === null ? [] : se[4][2], se = se[4] === null ? null : se[4][3];
              var he = r.keyPath, le = r.formatContext, Ke = r.row, On = r.replay, Oe = r.blockedBoundary, gn = r.hoistableState, er = D.children, nr = D.fallback, yn = /* @__PURE__ */ new Set();
              D = Du(
                n,
                r.row,
                yn,
                null,
                null
              ), D.parentFlushed = !0, D.rootSegmentID = d, r.blockedBoundary = D, r.hoistableState = D.contentState, r.keyPath = c, r.formatContext = Kn(
                n.resumableState,
                le
              ), r.row = null, r.replay = { nodes: I, slots: ee, pendingTasks: 1 };
              try {
                if (wt(n, r, er, -1), r.replay.pendingTasks === 1 && 0 < r.replay.nodes.length)
                  throw Error(
                    "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
                  );
                if (r.replay.pendingTasks--, D.pendingTasks === 0 && D.status === Hi) {
                  D.status = wr, n.completedBoundaries.push(D);
                  break e;
                }
              } catch (Ht) {
                D.status = Gt, ye = Zi(r.componentStack), B = Ar(
                  n,
                  Ht,
                  ye,
                  r.debugTask
                ), so(D, B, Ht, ye, !1), r.replay.pendingTasks--, n.clientRenderedBoundaries.push(D);
              } finally {
                r.blockedBoundary = Oe, r.hoistableState = gn, r.replay = On, r.keyPath = he, r.formatContext = le, r.row = Ke;
              }
              D = qo(
                n,
                null,
                { nodes: y, slots: se, pendingTasks: 0 },
                nr,
                -1,
                Oe,
                D.fallbackState,
                yn,
                [c[0], "Suspense Fallback", c[2]],
                Ot(
                  n.resumableState,
                  r.formatContext
                ),
                r.context,
                r.treeContext,
                r.row,
                $o(
                  r.componentStack
                ),
                ge,
                r.debugTask
              ), pr(D), n.pingedTasks.push(D);
            }
          }
          R.splice(Q, 1);
          break;
        }
      }
    }
    function ho(n, r, c, d, y) {
      d === r ? (c !== -1 || n.componentStack === null || typeof n.componentStack.type != "function" || Object.prototype.toString.call(n.componentStack.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(d) !== "[object Generator]") && (Tu || console.error(
        "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
      ), Tu = !0) : r.entries !== y || Gl || (console.error(
        "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
      ), Gl = !0);
    }
    function We(n, r, c, d) {
      r.replay !== null && typeof r.replay.slots == "number" ? Ei(n, r, r.replay.slots, c, d) : (r.node = c, r.childIndex = d, c = r.componentStack, d = r.debugTask, pr(r), Dl(n, r), r.componentStack = c, r.debugTask = d);
    }
    function Dl(n, r) {
      var c = r.node, d = r.childIndex;
      if (c !== null) {
        if (typeof c == "object") {
          switch (c.$$typeof) {
            case Ma:
              var y = c.type, R = c.key;
              c = c.props;
              var I = c.ref;
              I = I !== void 0 ? I : null;
              var D = r.debugTask, ee = ct(y);
              R = R ?? (d === -1 ? 0 : d);
              var B = [r.keyPath, ee, R];
              r.replay !== null ? D ? D.run(
                Ri.bind(
                  null,
                  n,
                  r,
                  B,
                  ee,
                  R,
                  d,
                  y,
                  c,
                  I,
                  r.replay
                )
              ) : Ri(
                n,
                r,
                B,
                ee,
                R,
                d,
                y,
                c,
                I,
                r.replay
              ) : D ? D.run(
                fo.bind(
                  null,
                  n,
                  r,
                  B,
                  y,
                  c,
                  I
                )
              ) : fo(n, r, B, y, c, I);
              return;
            case Tt:
              throw Error(
                "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render."
              );
            case al:
              if (y = Ms(c), n.status === 12) throw null;
              We(n, r, y, d);
              return;
          }
          if (Fi(c)) {
            ni(n, r, c, d);
            return;
          }
          if ((R = E(c)) && (y = R.call(c))) {
            if (ho(r, c, d, y, R), c = y.next(), !c.done) {
              R = [];
              do
                R.push(c.value), c = y.next();
              while (!c.done);
              ni(n, r, R, d);
            }
            return;
          }
          if (typeof c.then == "function")
            return r.thenableState = null, We(
              n,
              r,
              tl(c),
              d
            );
          if (c.$$typeof === rl)
            return We(
              n,
              r,
              c._currentValue2,
              d
            );
          throw n = Object.prototype.toString.call(c), Error(
            "Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        typeof c == "string" ? (r = r.blockedSegment, r !== null && (r.lastPushedText = qc(
          r.chunks,
          c,
          n.renderState,
          r.lastPushedText
        ))) : typeof c == "number" || typeof c == "bigint" ? (r = r.blockedSegment, r !== null && (r.lastPushedText = qc(
          r.chunks,
          "" + c,
          n.renderState,
          r.lastPushedText
        ))) : (typeof c == "function" && (n = c.displayName || c.name || "Component", console.error(
          "Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.",
          n,
          n
        )), typeof c == "symbol" && console.error(
          `Symbols are not valid as a React child.
  %s`,
          String(c)
        ));
      }
    }
    function yt(n, r, c) {
      if (c !== null && typeof c == "object" && (c.$$typeof === Ma || c.$$typeof === Tt) && c._store && (!c._store.validated && c.key == null || c._store.validated === 2)) {
        if (typeof c._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        c._store.validated = 1;
        var d = n.didWarnForKey;
        if (d == null && (d = n.didWarnForKey = /* @__PURE__ */ new WeakSet()), n = r.componentStack, n !== null && !d.has(n)) {
          d.add(n);
          var y = ct(c.type);
          d = c._owner;
          var R = n.owner;
          if (n = "", R && typeof R.type < "u") {
            var I = ct(R.type);
            I && (n = `

Check the render method of \`` + I + "`.");
          }
          n || y && (n = `

Check the top-level render call using <` + y + ">."), y = "", d != null && R !== d && (R = null, typeof d.type < "u" ? R = ct(d.type) : typeof d.name == "string" && (R = d.name), R && (y = " It was passed a child from " + R + ".")), d = r.componentStack, r.componentStack = {
            parent: r.componentStack,
            type: c.type,
            owner: c._owner,
            stack: c._debugStack
          }, console.error(
            'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
            n,
            y
          ), r.componentStack = d;
        }
      }
    }
    function ni(n, r, c, d) {
      var y = r.keyPath, R = r.componentStack, I = r.debugTask;
      if (jo(r, r.node._debugInfo), d !== -1 && (r.keyPath = [r.keyPath, "Fragment", d], r.replay !== null)) {
        for (var D = r.replay, ee = D.nodes, B = 0; B < ee.length; B++) {
          var Q = ee[B];
          if (Q[1] === d) {
            d = Q[2], Q = Q[3], r.replay = { nodes: d, slots: Q, pendingTasks: 1 };
            try {
              if (ni(n, r, c, -1), r.replay.pendingTasks === 1 && 0 < r.replay.nodes.length)
                throw Error(
                  "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
                );
              r.replay.pendingTasks--;
            } catch (le) {
              if (typeof le == "object" && le !== null && (le === br || typeof le.then == "function"))
                throw le;
              r.replay.pendingTasks--;
              var se = Zi(r.componentStack);
              c = r.blockedBoundary;
              var ye = le, he = Q;
              Q = Ar(
                n,
                ye,
                se,
                r.debugTask
              ), Si(
                n,
                c,
                d,
                he,
                ye,
                Q,
                se,
                !1
              );
            }
            r.replay = D, ee.splice(B, 1);
            break;
          }
        }
        r.keyPath = y, r.componentStack = R, r.debugTask = I;
        return;
      }
      if (D = r.treeContext, ee = c.length, r.replay !== null && (B = r.replay.slots, B !== null && typeof B == "object")) {
        for (d = 0; d < ee; d++)
          Q = c[d], r.treeContext = un(
            D,
            ee,
            d
          ), ye = B[d], typeof ye == "number" ? (Ei(n, r, ye, Q, d), delete B[d]) : wt(n, r, Q, d);
        r.treeContext = D, r.keyPath = y, r.componentStack = R, r.debugTask = I;
        return;
      }
      for (B = 0; B < ee; B++)
        d = c[B], yt(n, r, d), r.treeContext = un(D, ee, B), wt(n, r, d, B);
      r.treeContext = D, r.keyPath = y, r.componentStack = R, r.debugTask = I;
    }
    function At(n, r, c) {
      if (c.status = Yr, c.rootSegmentID = n.nextSegmentId++, n = c.trackedContentKeyPath, n === null)
        throw Error(
          "It should not be possible to postpone at the root. This is a bug in React."
        );
      var d = c.trackedFallbackNode, y = [], R = r.workingMap.get(n);
      return R === void 0 ? (c = [
        n[1],
        n[2],
        y,
        null,
        d,
        c.rootSegmentID
      ], r.workingMap.set(n, c), Hl(c, n[0], r), c) : (R[4] = d, R[5] = c.rootSegmentID, R);
    }
    function Vi(n, r, c, d) {
      d.status = Yr;
      var y = c.keyPath, R = c.blockedBoundary;
      if (R === null)
        d.id = n.nextSegmentId++, r.rootSlots = d.id, n.completedRootSegment !== null && (n.completedRootSegment.status = Yr);
      else {
        if (R !== null && R.status === Hi) {
          var I = At(
            n,
            r,
            R
          );
          if (R.trackedContentKeyPath === y && c.childIndex === -1) {
            d.id === -1 && (d.id = d.parentFlushed ? R.rootSegmentID : n.nextSegmentId++), I[3] = d.id;
            return;
          }
        }
        if (d.id === -1 && (d.id = d.parentFlushed && R !== null ? R.rootSegmentID : n.nextSegmentId++), c.childIndex === -1)
          y === null ? r.rootSlots = d.id : (c = r.workingMap.get(y), c === void 0 ? (c = [y[1], y[2], [], d.id], Hl(c, y[0], r)) : c[3] = d.id);
        else {
          if (y === null) {
            if (n = r.rootSlots, n === null)
              n = r.rootSlots = {};
            else if (typeof n == "number")
              throw Error(
                "It should not be possible to postpone both at the root of an element as well as a slot below. This is a bug in React."
              );
          } else if (R = r.workingMap, I = R.get(y), I === void 0)
            n = {}, I = [y[1], y[2], [], n], R.set(y, I), Hl(I, y[0], r);
          else if (n = I[3], n === null)
            n = I[3] = {};
          else if (typeof n == "number")
            throw Error(
              "It should not be possible to postpone both at the root of an element as well as a slot below. This is a bug in React."
            );
          n[c.childIndex] = d.id;
        }
      }
    }
    function Pa(n, r) {
      n = n.trackedPostpones, n !== null && (r = r.trackedContentKeyPath, r !== null && (r = n.workingMap.get(r), r !== void 0 && (r.length = 4, r[2] = [], r[3] = null)));
    }
    function ti(n, r, c) {
      return qo(
        n,
        c,
        r.replay,
        r.node,
        r.childIndex,
        r.blockedBoundary,
        r.hoistableState,
        r.abortSet,
        r.keyPath,
        r.formatContext,
        r.context,
        r.treeContext,
        r.row,
        r.componentStack,
        ge,
        r.debugTask
      );
    }
    function Ci(n, r, c) {
      var d = r.blockedSegment, y = Fr(
        n,
        d.chunks.length,
        null,
        r.formatContext,
        d.lastPushedText,
        !0
      );
      return d.children.push(y), d.lastPushedText = !1, $l(
        n,
        c,
        r.node,
        r.childIndex,
        r.blockedBoundary,
        y,
        r.blockedPreamble,
        r.hoistableState,
        r.abortSet,
        r.keyPath,
        r.formatContext,
        r.context,
        r.treeContext,
        r.row,
        r.componentStack,
        ge,
        r.debugTask
      );
    }
    function wt(n, r, c, d) {
      var y = r.formatContext, R = r.context, I = r.keyPath, D = r.treeContext, ee = r.componentStack, B = r.debugTask, Q = r.blockedSegment;
      if (Q === null) {
        Q = r.replay;
        try {
          return We(n, r, c, d);
        } catch (he) {
          if (Qt(), c = he === br ? Zo() : he, n.status !== 12 && typeof c == "object" && c !== null) {
            if (typeof c.then == "function") {
              d = he === br ? Ol() : null, n = ti(
                n,
                r,
                d
              ).ping, c.then(n, n), r.formatContext = y, r.context = R, r.keyPath = I, r.treeContext = D, r.componentStack = ee, r.replay = Q, r.debugTask = B, Pn(R);
              return;
            }
            if (c.message === "Maximum call stack size exceeded") {
              c = he === br ? Ol() : null, c = ti(n, r, c), n.pingedTasks.push(c), r.formatContext = y, r.context = R, r.keyPath = I, r.treeContext = D, r.componentStack = ee, r.replay = Q, r.debugTask = B, Pn(R);
              return;
            }
          }
        }
      } else {
        var se = Q.children.length, ye = Q.chunks.length;
        try {
          return We(n, r, c, d);
        } catch (he) {
          if (Qt(), Q.children.length = se, Q.chunks.length = ye, c = he === br ? Zo() : he, n.status !== 12 && typeof c == "object" && c !== null) {
            if (typeof c.then == "function") {
              Q = c, c = he === br ? Ol() : null, n = Ci(n, r, c).ping, Q.then(n, n), r.formatContext = y, r.context = R, r.keyPath = I, r.treeContext = D, r.componentStack = ee, r.debugTask = B, Pn(R);
              return;
            }
            if (c.message === "Maximum call stack size exceeded") {
              Q = he === br ? Ol() : null, Q = Ci(n, r, Q), n.pingedTasks.push(Q), r.formatContext = y, r.context = R, r.keyPath = I, r.treeContext = D, r.componentStack = ee, r.debugTask = B, Pn(R);
              return;
            }
          }
        }
      }
      throw r.formatContext = y, r.context = R, r.keyPath = I, r.treeContext = D, Pn(R), c;
    }
    function ki(n) {
      var r = n.blockedBoundary, c = n.blockedSegment;
      c !== null && (c.status = Rl, Ll(this, r, n.row, c));
    }
    function Si(n, r, c, d, y, R, I, D) {
      for (var ee = 0; ee < c.length; ee++) {
        var B = c[ee];
        if (B.length === 4)
          Si(
            n,
            r,
            B[2],
            B[3],
            y,
            R,
            I,
            D
          );
        else {
          var Q = n;
          B = B[5];
          var se = y, ye = R, he = I, le = D, Ke = Du(
            Q,
            null,
            /* @__PURE__ */ new Set(),
            null,
            null
          );
          Ke.parentFlushed = !0, Ke.rootSegmentID = B, Ke.status = Gt, so(
            Ke,
            ye,
            se,
            he,
            le
          ), Ke.parentFlushed && Q.clientRenderedBoundaries.push(Ke);
        }
      }
      if (c.length = 0, d !== null) {
        if (r === null)
          throw Error(
            "We should not have any resumable nodes in the shell. This is a bug in React."
          );
        if (r.status !== Gt && (r.status = Gt, so(
          r,
          R,
          y,
          I,
          D
        ), r.parentFlushed && n.clientRenderedBoundaries.push(r)), typeof d == "object")
          for (var On in d) delete d[On];
      }
    }
    function Fa(n, r, c) {
      var d = n.blockedBoundary, y = n.blockedSegment;
      if (y !== null) {
        if (y.status === 6) return;
        y.status = Rl;
      }
      var R = Zi(n.componentStack), I = n.node;
      if (I !== null && typeof I == "object" && Rc(n, I._debugInfo), d === null) {
        if (r.status !== 13 && r.status !== zi) {
          if (d = n.replay, d === null) {
            r.trackedPostpones !== null && y !== null ? (d = r.trackedPostpones, Ar(r, c, R, n.debugTask), Vi(r, d, n, y), Ll(r, null, n.row, y)) : (Ar(r, c, R, n.debugTask), mt(r, c, R, n.debugTask));
            return;
          }
          d.pendingTasks--, d.pendingTasks === 0 && 0 < d.nodes.length && (y = Ar(r, c, R, null), Si(
            r,
            null,
            d.nodes,
            d.slots,
            c,
            y,
            R,
            !0
          )), r.pendingRootTasks--, r.pendingRootTasks === 0 && pa(r);
        }
      } else {
        if (I = r.trackedPostpones, d.status !== Gt) {
          if (I !== null && y !== null)
            return Ar(r, c, R, n.debugTask), Vi(r, I, n, y), d.fallbackAbortableTasks.forEach(function(D) {
              return Fa(D, r, c);
            }), d.fallbackAbortableTasks.clear(), Ll(r, d, n.row, y);
          d.status = Gt, y = Ar(
            r,
            c,
            R,
            n.debugTask
          ), d.status = Gt, so(d, y, c, R, !0), Pa(r, d), d.parentFlushed && r.clientRenderedBoundaries.push(d);
        }
        d.pendingTasks--, R = d.row, R !== null && --R.pendingTasks === 0 && Dn(r, R), d.fallbackAbortableTasks.forEach(function(D) {
          return Fa(D, r, c);
        }), d.fallbackAbortableTasks.clear();
      }
      n = n.row, n !== null && --n.pendingTasks === 0 && Dn(r, n), r.allPendingTasks--, r.allPendingTasks === 0 && Mr(r);
    }
    function Ji(n, r) {
      try {
        var c = n.renderState, d = c.onHeaders;
        if (d) {
          var y = c.headers;
          if (y) {
            c.headers = null;
            var R = y.preconnects;
            if (y.fontPreloads && (R && (R += ", "), R += y.fontPreloads), y.highImagePreloads && (R && (R += ", "), R += y.highImagePreloads), !r) {
              var I = c.styles.values(), D = I.next();
              e: for (; 0 < y.remainingCapacity && !D.done; D = I.next())
                for (var ee = D.value.sheets.values(), B = ee.next(); 0 < y.remainingCapacity && !B.done; B = ee.next()) {
                  var Q = B.value, se = Q.props, ye = se.href, he = Q.props, le = Yo(
                    he.href,
                    "style",
                    {
                      crossOrigin: he.crossOrigin,
                      integrity: he.integrity,
                      nonce: he.nonce,
                      type: he.type,
                      fetchPriority: he.fetchPriority,
                      referrerPolicy: he.referrerPolicy,
                      media: he.media
                    }
                  );
                  if (0 <= (y.remainingCapacity -= le.length + 2))
                    c.resets.style[ye] = Y, R && (R += ", "), R += le, c.resets.style[ye] = typeof se.crossOrigin == "string" || typeof se.integrity == "string" ? [se.crossOrigin, se.integrity] : Y;
                  else break e;
                }
            }
            d(R ? { Link: R } : {});
          }
        }
      } catch (Ke) {
        Ar(n, Ke, {}, null);
      }
    }
    function pa(n) {
      n.trackedPostpones === null && Ji(n, !0), n.trackedPostpones === null && go(n), n.onShellError = je, n = n.onShellReady, n();
    }
    function Mr(n) {
      Ji(
        n,
        n.trackedPostpones === null ? !0 : n.completedRootSegment === null || n.completedRootSegment.status !== Yr
      ), go(n), n = n.onAllReady, n();
    }
    function Aa(n, r) {
      if (r.chunks.length === 0 && r.children.length === 1 && r.children[0].boundary === null && r.children[0].id === -1) {
        var c = r.children[0];
        c.id = r.id, c.parentFlushed = !0, c.status !== wr && c.status !== Rl && c.status !== xn || Aa(n, c);
      } else n.completedSegments.push(r);
    }
    function Ll(n, r, c, d) {
      if (c !== null && (--c.pendingTasks === 0 ? Dn(n, c) : c.together && Ti(n, c)), n.allPendingTasks--, r === null) {
        if (d !== null && d.parentFlushed) {
          if (n.completedRootSegment !== null)
            throw Error(
              "There can only be one root segment. This is a bug in React."
            );
          n.completedRootSegment = d;
        }
        n.pendingRootTasks--, n.pendingRootTasks === 0 && pa(n);
      } else if (r.pendingTasks--, r.status !== Gt)
        if (r.pendingTasks === 0) {
          if (r.status === Hi && (r.status = wr), d !== null && d.parentFlushed && (d.status === wr || d.status === Rl) && Aa(r, d), r.parentFlushed && n.completedBoundaries.push(r), r.status === wr)
            c = r.row, c !== null && hl(c.hoistables, r.contentState), Jo(n, r) || (r.fallbackAbortableTasks.forEach(
              ki,
              n
            ), r.fallbackAbortableTasks.clear(), c !== null && --c.pendingTasks === 0 && Dn(n, c)), n.pendingRootTasks === 0 && n.trackedPostpones === null && r.contentPreamble !== null && go(n);
          else if (r.status === Yr && (r = r.row, r !== null)) {
            if (n.trackedPostpones !== null) {
              c = n.trackedPostpones;
              var y = r.next;
              if (y !== null && (d = y.boundaries, d !== null))
                for (y.boundaries = null, y = 0; y < d.length; y++) {
                  var R = d[y];
                  At(n, c, R), Ll(n, R, null, null);
                }
            }
            --r.pendingTasks === 0 && Dn(n, r);
          }
        } else
          d === null || !d.parentFlushed || d.status !== wr && d.status !== Rl || (Aa(r, d), r.completedSegments.length === 1 && r.parentFlushed && n.partialBoundaries.push(r)), r = r.row, r !== null && r.together && Ti(n, r);
      n.allPendingTasks === 0 && Mr(n);
    }
    function Sc(n) {
      if (n.status !== zi && n.status !== 13) {
        var r = Le, c = jn.H;
        jn.H = Ka;
        var d = jn.A;
        jn.A = fs;
        var y = Rt;
        Rt = n;
        var R = jn.getCurrentStack;
        jn.getCurrentStack = _l;
        var I = ss;
        ss = n.resumableState;
        try {
          var D = n.pingedTasks, ee;
          for (ee = 0; ee < D.length; ee++) {
            var B = n, Q = D[ee], se = Q.blockedSegment;
            if (se === null) {
              var ye = void 0, he = B;
              if (B = Q, B.replay.pendingTasks !== 0) {
                Pn(B.context), ye = El, El = B;
                try {
                  if (typeof B.replay.slots == "number" ? Ei(
                    he,
                    B,
                    B.replay.slots,
                    B.node,
                    B.childIndex
                  ) : Dl(he, B), B.replay.pendingTasks === 1 && 0 < B.replay.nodes.length)
                    throw Error(
                      "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
                    );
                  B.replay.pendingTasks--, B.abortSet.delete(B), Ll(
                    he,
                    B.blockedBoundary,
                    B.row,
                    null
                  );
                } catch (Zn) {
                  Qt();
                  var le = Zn === br ? Zo() : Zn;
                  if (typeof le == "object" && le !== null && typeof le.then == "function") {
                    var Ke = B.ping;
                    le.then(Ke, Ke), B.thenableState = Zn === br ? Ol() : null;
                  } else {
                    B.replay.pendingTasks--, B.abortSet.delete(B);
                    var On = Zi(B.componentStack), Oe = void 0, gn = he, er = B.blockedBoundary, nr = he.status === 12 ? he.fatalError : le, yn = On, Ht = B.replay.nodes, ci = B.replay.slots;
                    Oe = Ar(
                      gn,
                      nr,
                      yn,
                      B.debugTask
                    ), Si(
                      gn,
                      er,
                      Ht,
                      ci,
                      nr,
                      Oe,
                      yn,
                      !1
                    ), he.pendingRootTasks--, he.pendingRootTasks === 0 && pa(he), he.allPendingTasks--, he.allPendingTasks === 0 && Mr(he);
                  }
                } finally {
                  El = ye;
                }
              }
            } else if (he = ye = void 0, Oe = Q, gn = se, gn.status === Hi) {
              gn.status = 6, Pn(Oe.context), he = El, El = Oe;
              var Dr = gn.children.length, Ee = gn.chunks.length;
              try {
                Dl(B, Oe), Ra(
                  gn.chunks,
                  B.renderState,
                  gn.lastPushedText,
                  gn.textEmbedded
                ), Oe.abortSet.delete(Oe), gn.status = wr, Ll(
                  B,
                  Oe.blockedBoundary,
                  Oe.row,
                  gn
                );
              } catch (Zn) {
                Qt(), gn.children.length = Dr, gn.chunks.length = Ee;
                var Cn = Zn === br ? Zo() : B.status === 12 ? B.fatalError : Zn;
                if (B.status === 12 && B.trackedPostpones !== null) {
                  var kn = B.trackedPostpones, pn = Zi(Oe.componentStack);
                  Oe.abortSet.delete(Oe), Ar(
                    B,
                    Cn,
                    pn,
                    Oe.debugTask
                  ), Vi(
                    B,
                    kn,
                    Oe,
                    gn
                  ), Ll(
                    B,
                    Oe.blockedBoundary,
                    Oe.row,
                    gn
                  );
                } else if (typeof Cn == "object" && Cn !== null && typeof Cn.then == "function") {
                  gn.status = Hi, Oe.thenableState = Zn === br ? Ol() : null;
                  var rt = Oe.ping;
                  Cn.then(rt, rt);
                } else {
                  var ln = Zi(
                    Oe.componentStack
                  );
                  Oe.abortSet.delete(Oe), gn.status = xn;
                  var Ye = Oe.blockedBoundary, Tr = Oe.row, Sn = Oe.debugTask;
                  if (Tr !== null && --Tr.pendingTasks === 0 && Dn(B, Tr), B.allPendingTasks--, ye = Ar(
                    B,
                    Cn,
                    ln,
                    Sn
                  ), Ye === null)
                    mt(
                      B,
                      Cn,
                      ln,
                      Sn
                    );
                  else if (Ye.pendingTasks--, Ye.status !== Gt) {
                    Ye.status = Gt, so(
                      Ye,
                      ye,
                      Cn,
                      ln,
                      !1
                    ), Pa(B, Ye);
                    var tr = Ye.row;
                    tr !== null && --tr.pendingTasks === 0 && Dn(B, tr), Ye.parentFlushed && B.clientRenderedBoundaries.push(Ye), B.pendingRootTasks === 0 && B.trackedPostpones === null && Ye.contentPreamble !== null && go(B);
                  }
                  B.allPendingTasks === 0 && Mr(B);
                }
              } finally {
                El = he;
              }
            }
          }
          D.splice(0, ee), n.destination !== null && eu(
            n,
            n.destination
          );
        } catch (Zn) {
          D = {}, Ar(n, Zn, D, null), mt(n, Zn, D, null);
        } finally {
          ss = I, jn.H = c, jn.A = d, jn.getCurrentStack = R, c === Ka && Pn(r), Rt = y;
        }
      }
    }
    function Pc(n, r, c) {
      r.preambleChildren.length && c.push(r.preambleChildren);
      for (var d = !1, y = 0; y < r.children.length; y++)
        d = Fc(
          n,
          r.children[y],
          c
        ) || d;
      return d;
    }
    function Fc(n, r, c) {
      var d = r.boundary;
      if (d === null)
        return Pc(
          n,
          r,
          c
        );
      var y = d.contentPreamble, R = d.fallbackPreamble;
      if (y === null || R === null) return !1;
      switch (d.status) {
        case wr:
          if (wa(n.renderState, y), n.byteSize += d.byteSize, r = d.completedSegments[0], !r)
            throw Error(
              "A previously unvisited boundary must have exactly one root segment. This is a bug in React."
            );
          return Pc(
            n,
            r,
            c
          );
        case Yr:
          if (n.trackedPostpones !== null) return !0;
        case Gt:
          if (r.status === wr)
            return wa(n.renderState, R), Pc(
              n,
              r,
              c
            );
        default:
          return !0;
      }
    }
    function go(n) {
      if (n.completedRootSegment && n.completedPreambleSegments === null) {
        var r = [], c = n.byteSize, d = Fc(
          n,
          n.completedRootSegment,
          r
        ), y = n.renderState.preamble;
        d === !1 || y.headChunks && y.bodyChunks ? n.completedPreambleSegments = r : n.byteSize = c;
      }
    }
    function vo(n, r, c, d) {
      switch (c.parentFlushed = !0, c.status) {
        case Hi:
          c.id = n.nextSegmentId++;
        case Yr:
          return d = c.id, c.lastPushedText = !1, c.textEmbedded = !1, n = n.renderState, r.push(Oi), r.push(n.placeholderPrefix), n = d.toString(16), r.push(n), r.push(cu);
        case wr:
          c.status = da;
          var y = !0, R = c.chunks, I = 0;
          c = c.children;
          for (var D = 0; D < c.length; D++) {
            for (y = c[D]; I < y.index; I++)
              r.push(R[I]);
            y = bo(n, r, y, d);
          }
          for (; I < R.length - 1; I++)
            r.push(R[I]);
          return I < R.length && (y = r.push(R[I])), y;
        case Rl:
          return !0;
        default:
          throw Error(
            "Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React."
          );
      }
    }
    function bo(n, r, c, d) {
      var y = c.boundary;
      if (y === null)
        return vo(n, r, c, d);
      if (y.parentFlushed = !0, y.status === Gt) {
        var R = y.row;
        if (R !== null && --R.pendingTasks === 0 && Dn(n, R), !n.renderState.generateStaticMarkup) {
          var I = y.errorDigest, D = y.errorMessage;
          R = y.errorStack, y = y.errorComponentStack, r.push(su), r.push(Eo), I && (r.push(dt), I = Ce(I), r.push(I), r.push(
            za
          )), D && (r.push(ul), D = Ce(D), r.push(D), r.push(
            za
          )), R && (r.push(Je), R = Ce(R), r.push(R), r.push(
            za
          )), y && (r.push(mi), R = Ce(y), r.push(R), r.push(
            za
          )), r.push(Ro);
        }
        return vo(n, r, c, d), n = n.renderState.generateStaticMarkup ? !0 : r.push(la), n;
      }
      if (y.status !== wr)
        return y.status === Hi && (y.rootSegmentID = n.nextSegmentId++), 0 < y.completedSegments.length && n.partialBoundaries.push(y), Wt(
          r,
          n.renderState,
          y.rootSegmentID
        ), d && hl(d, y.fallbackState), vo(n, r, c, d), r.push(la);
      if (!xu && Jo(n, y) && $a + y.byteSize > n.progressiveChunkSize)
        return y.rootSegmentID = n.nextSegmentId++, n.completedBoundaries.push(y), Wt(
          r,
          n.renderState,
          y.rootSegmentID
        ), vo(n, r, c, d), r.push(la);
      if ($a += y.byteSize, d && hl(d, y.contentState), c = y.row, c !== null && Jo(n, y) && --c.pendingTasks === 0 && Dn(n, c), n.renderState.generateStaticMarkup || r.push(_i), c = y.completedSegments, c.length !== 1)
        throw Error(
          "A previously unvisited boundary must have exactly one root segment. This is a bug in React."
        );
      return bo(n, r, c[0], d), n = n.renderState.generateStaticMarkup ? !0 : r.push(la), n;
    }
    function Dt(n, r, c, d) {
      return Pr(
        r,
        n.renderState,
        c.parentFormatContext,
        c.id
      ), bo(n, r, c, d), Ml(r, c.parentFormatContext);
    }
    function ts(n, r, c) {
      $a = c.byteSize;
      for (var d = c.completedSegments, y = 0; y < d.length; y++)
        Qi(
          n,
          r,
          c,
          d[y]
        );
      d.length = 0, d = c.row, d !== null && Jo(n, c) && --d.pendingTasks === 0 && Dn(n, d), ar(
        r,
        c.contentState,
        n.renderState
      ), d = n.resumableState, n = n.renderState, y = c.rootSegmentID, c = c.contentState;
      var R = n.stylesToHoist;
      return n.stylesToHoist = !1, r.push(n.startInlineScript), r.push(Qe), R ? ((d.instructions & T) === o && (d.instructions |= T, r.push(oa)), (d.instructions & g) === o && (d.instructions |= g, r.push(Et)), (d.instructions & k) === o ? (d.instructions |= k, r.push(gu)) : r.push(vu)) : ((d.instructions & g) === o && (d.instructions |= g, r.push(Et)), r.push(Ju)), d = y.toString(16), r.push(n.boundaryPrefix), r.push(d), r.push(Qu), r.push(n.segmentPrefix), r.push(d), R ? (r.push(Hc), Tc(r, c)) : r.push(Ku), c = r.push(qu), Ui(r, n) && c;
    }
    function Qi(n, r, c, d) {
      if (d.status === da) return !0;
      var y = c.contentState, R = d.id;
      if (R === -1) {
        if ((d.id = c.rootSegmentID) === -1)
          throw Error(
            "A root segment ID must have been assigned by now. This is a bug in React."
          );
        return Dt(
          n,
          r,
          d,
          y
        );
      }
      return R === c.rootSegmentID ? Dt(
        n,
        r,
        d,
        y
      ) : (Dt(n, r, d, y), c = n.resumableState, n = n.renderState, r.push(n.startInlineScript), r.push(Qe), (c.instructions & f) === o ? (c.instructions |= f, r.push(mc)) : r.push(Vu), r.push(n.segmentPrefix), R = R.toString(16), r.push(R), r.push(Dc), r.push(n.placeholderPrefix), r.push(R), r = r.push(Lc), r);
    }
    function eu(n, r) {
      try {
        if (!(0 < n.pendingRootTasks)) {
          var c, d = n.completedRootSegment;
          if (d !== null) {
            if (d.status === Yr) return;
            var y = n.completedPreambleSegments;
            if (y === null) return;
            $a = n.byteSize;
            var R = n.resumableState, I = n.renderState, D = I.preamble, ee = D.htmlChunks, B = D.headChunks, Q;
            if (ee) {
              for (Q = 0; Q < ee.length; Q++)
                r.push(ee[Q]);
              if (B)
                for (Q = 0; Q < B.length; Q++)
                  r.push(B[Q]);
              else {
                var se = bt("head");
                r.push(se), r.push(Qe);
              }
            } else if (B)
              for (Q = 0; Q < B.length; Q++)
                r.push(B[Q]);
            var ye = I.charsetChunks;
            for (Q = 0; Q < ye.length; Q++)
              r.push(ye[Q]);
            ye.length = 0, I.preconnects.forEach(In, r), I.preconnects.clear();
            var he = I.viewportChunks;
            for (Q = 0; Q < he.length; Q++)
              r.push(he[Q]);
            he.length = 0, I.fontPreloads.forEach(In, r), I.fontPreloads.clear(), I.highImagePreloads.forEach(In, r), I.highImagePreloads.clear(), ne = I, I.styles.forEach(ht, r), ne = null;
            var le = I.importMapChunks;
            for (Q = 0; Q < le.length; Q++)
              r.push(le[Q]);
            le.length = 0, I.bootstrapScripts.forEach(In, r), I.scripts.forEach(In, r), I.scripts.clear(), I.bulkPreloads.forEach(In, r), I.bulkPreloads.clear(), R.instructions |= p;
            var Ke = I.hoistableChunks;
            for (Q = 0; Q < Ke.length; Q++)
              r.push(Ke[Q]);
            for (R = Ke.length = 0; R < y.length; R++) {
              var On = y[R];
              for (I = 0; I < On.length; I++)
                bo(n, r, On[I], null);
            }
            var Oe = n.renderState.preamble, gn = Oe.headChunks;
            if (Oe.htmlChunks || gn) {
              var er = _t("head");
              r.push(er);
            }
            var nr = Oe.bodyChunks;
            if (nr)
              for (y = 0; y < nr.length; y++)
                r.push(nr[y]);
            bo(n, r, d, null), n.completedRootSegment = null;
            var yn = n.renderState;
            if (n.allPendingTasks !== 0 || n.clientRenderedBoundaries.length !== 0 || n.completedBoundaries.length !== 0 || n.trackedPostpones !== null && (n.trackedPostpones.rootNodes.length !== 0 || n.trackedPostpones.rootSlots !== null)) {
              var Ht = n.resumableState;
              if ((Ht.instructions & X) === o) {
                if (Ht.instructions |= X, r.push(yn.startInlineScript), (Ht.instructions & p) === o) {
                  Ht.instructions |= p;
                  var ci = "_" + Ht.idPrefix + "R_";
                  r.push(Po);
                  var Dr = Ce(ci);
                  r.push(Dr), r.push(Ne);
                }
                r.push(Qe), r.push(ol), r.push($);
              }
            }
            Ui(r, yn);
          }
          var Ee = n.renderState;
          d = 0;
          var Cn = Ee.viewportChunks;
          for (d = 0; d < Cn.length; d++)
            r.push(Cn[d]);
          Cn.length = 0, Ee.preconnects.forEach(In, r), Ee.preconnects.clear(), Ee.fontPreloads.forEach(In, r), Ee.fontPreloads.clear(), Ee.highImagePreloads.forEach(
            In,
            r
          ), Ee.highImagePreloads.clear(), Ee.styles.forEach(wc, r), Ee.scripts.forEach(In, r), Ee.scripts.clear(), Ee.bulkPreloads.forEach(In, r), Ee.bulkPreloads.clear();
          var kn = Ee.hoistableChunks;
          for (d = 0; d < kn.length; d++)
            r.push(kn[d]);
          kn.length = 0;
          var pn = n.clientRenderedBoundaries;
          for (c = 0; c < pn.length; c++) {
            var rt = pn[c];
            Ee = r;
            var ln = n.resumableState, Ye = n.renderState, Tr = rt.rootSegmentID, Sn = rt.errorDigest, tr = rt.errorMessage, Zn = rt.errorStack, Gr = rt.errorComponentStack;
            Ee.push(Ye.startInlineScript), Ee.push(Qe), (ln.instructions & T) === o ? (ln.instructions |= T, Ee.push(yl)) : Ee.push(as), Ee.push(Ye.boundaryPrefix);
            var mo = Tr.toString(16);
            if (Ee.push(mo), Ee.push(Ya), Sn || tr || Zn || Gr) {
              Ee.push(bu);
              var Xr = Ft(
                Sn || ""
              );
              Ee.push(Xr);
            }
            if (tr || Zn || Gr) {
              Ee.push(bu);
              var si = Ft(
                tr || ""
              );
              Ee.push(si);
            }
            if (Zn || Gr) {
              Ee.push(bu);
              var fi = Ft(
                Zn || ""
              );
              Ee.push(fi);
            }
            if (Gr) {
              Ee.push(bu);
              var hi = Ft(Gr);
              Ee.push(hi);
            }
            var Xt = Ee.push(
              Nl
            );
            if (!Xt) {
              n.destination = null, c++, pn.splice(0, c);
              return;
            }
          }
          pn.splice(0, c);
          var e = n.completedBoundaries;
          for (c = 0; c < e.length; c++)
            if (!ts(
              n,
              r,
              e[c]
            )) {
              n.destination = null, c++, e.splice(0, c);
              return;
            }
          e.splice(0, c), xu = !0;
          var t = n.partialBoundaries;
          for (c = 0; c < t.length; c++) {
            e: {
              pn = n, rt = r;
              var u = t[c];
              $a = u.byteSize;
              var h = u.completedSegments;
              for (Xt = 0; Xt < h.length; Xt++)
                if (!Qi(
                  pn,
                  rt,
                  u,
                  h[Xt]
                )) {
                  Xt++, h.splice(0, Xt);
                  var b = !1;
                  break e;
                }
              h.splice(0, Xt);
              var x = u.row;
              x !== null && x.together && u.pendingTasks === 1 && (x.pendingTasks === 1 ? Cc(
                pn,
                x,
                x.hoistables
              ) : x.pendingTasks--), b = ar(
                rt,
                u.contentState,
                pn.renderState
              );
            }
            if (!b) {
              n.destination = null, c++, t.splice(0, c);
              return;
            }
          }
          t.splice(0, c), xu = !1;
          var F = n.completedBoundaries;
          for (c = 0; c < F.length; c++)
            if (!ts(n, r, F[c])) {
              n.destination = null, c++, F.splice(0, c);
              return;
            }
          F.splice(0, c);
        }
      } finally {
        xu = !1, n.allPendingTasks === 0 && n.clientRenderedBoundaries.length === 0 && n.completedBoundaries.length === 0 && (n.flushScheduled = !1, c = n.resumableState, c.hasBody && (t = _t("body"), r.push(t)), c.hasHtml && (c = _t("html"), r.push(c)), n.abortableTasks.size !== 0 && console.error(
          "There was still abortable task at the root when we closed. This is a bug in React."
        ), n.status = zi, r.push(null), n.destination = null);
      }
    }
    function Lu(n) {
      n.flushScheduled = n.destination !== null, Sc(n), n.status === 10 && (n.status = 11), n.trackedPostpones === null && Ji(n, n.pendingRootTasks === 0);
    }
    function Pi(n) {
      if (n.flushScheduled === !1 && n.pingedTasks.length === 0 && n.destination !== null) {
        n.flushScheduled = !0;
        var r = n.destination;
        r ? eu(n, r) : n.flushScheduled = !1;
      }
    }
    function Ki(n, r) {
      if (n.status === 13)
        n.status = zi, r.destroy(n.fatalError);
      else if (n.status !== zi && n.destination === null) {
        n.destination = r;
        try {
          eu(n, r);
        } catch (c) {
          r = {}, Ar(n, c, r, null), mt(n, c, r, null);
        }
      }
    }
    function yo(n, r) {
      (n.status === 11 || n.status === 10) && (n.status = 12);
      try {
        var c = n.abortableTasks;
        if (0 < c.size) {
          var d = r === void 0 ? Error("The render was aborted by the server without a reason.") : typeof r == "object" && r !== null && typeof r.then == "function" ? Error("The render was aborted by the server with a promise.") : r;
          n.fatalError = d, c.forEach(function(y) {
            var R = El, I = jn.getCurrentStack;
            El = y, jn.getCurrentStack = _l;
            try {
              Fa(y, n, d);
            } finally {
              El = R, jn.getCurrentStack = I;
            }
          }), c.clear();
        }
        n.destination !== null && eu(n, n.destination);
      } catch (y) {
        r = {}, Ar(n, y, r, null), mt(n, y, r, null);
      }
    }
    function Hl(n, r, c) {
      if (r === null) c.rootNodes.push(n);
      else {
        var d = c.workingMap, y = d.get(r);
        y === void 0 && (y = [r[1], r[2], [], null], d.set(r, y), Hl(y, r[0], c)), y[2].push(n);
      }
    }
    function qi() {
    }
    function ji(n, r, c, d) {
      var y = !1, R = null, I = "", D = !1;
      if (r = tn(
        r ? r.identifierPrefix : void 0
      ), n = co(
        n,
        r,
        Ql(r, c),
        at(Ze, null, 0, null),
        1 / 0,
        qi,
        void 0,
        function() {
          D = !0;
        },
        void 0,
        void 0,
        void 0
      ), Lu(n), yo(n, d), Ki(n, {
        push: function(ee) {
          return ee !== null && (I += ee), !0;
        },
        destroy: function(ee) {
          y = !0, R = ee;
        }
      }), y && R !== d) throw R;
      if (!D)
        throw Error(
          "A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition."
        );
      return I;
    }
    var pc = lf, xs = df, Ma = Symbol.for("react.transitional.element"), Tt = Symbol.for("react.portal"), ri = Symbol.for("react.fragment"), nu = Symbol.for("react.strict_mode"), tu = Symbol.for("react.profiler"), Hu = Symbol.for("react.consumer"), rl = Symbol.for("react.context"), ll = Symbol.for("react.forward_ref"), Wr = Symbol.for("react.suspense"), il = Symbol.for("react.suspense_list"), Fn = Symbol.for("react.memo"), al = Symbol.for("react.lazy"), Un = Symbol.for("react.scope"), zl = Symbol.for("react.activity"), zu = Symbol.for("react.legacy_hidden"), Bu = Symbol.for("react.memo_cache_sentinel"), Nu = Symbol.for("react.view_transition"), ru = Symbol.iterator, Fi = Array.isArray, lu = /* @__PURE__ */ new WeakMap(), iu = /* @__PURE__ */ new WeakMap(), Ir = Symbol.for("react.client.reference"), Yn = Object.assign, sn = Object.prototype.hasOwnProperty, $i = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Ia = {}, Oa = {}, ea = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), Ac = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]), Ut = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, Es = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0,
      "aria-braillelabel": 0,
      "aria-brailleroledescription": 0,
      "aria-colindextext": 0,
      "aria-rowindextext": 0
    }, Bl = {}, rs = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Mc = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), li = !1, au = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Kt = {}, pi = /^on./, ls = /^on[^A-Z]/, _a = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Wu = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), ma = /^(?:webkit|moz|o)[A-Z]/, qt = /^-ms-/, Yt = /-(.)/g, na = /;\s*$/, Ln = {}, Rn = {}, Da = !1, wo = !1, Uu = /["'&<>]/, To = /([A-Z])/g, Ic = /^ms-/, Rs = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, jn = pc.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ai = xs.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, is = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), i = Ai.d;
    Ai.d = {
      f: i.f,
      r: i.r,
      D: function(n) {
        var r = Rt || null;
        if (r) {
          var c = r.resumableState, d = r.renderState;
          if (typeof n == "string" && n) {
            if (!c.dnsResources.hasOwnProperty(n)) {
              c.dnsResources[n] = m, c = d.headers;
              var y, R;
              (R = c && 0 < c.remainingCapacity) && (R = (y = "<" + qn(n) + ">; rel=dns-prefetch", 0 <= (c.remainingCapacity -= y.length + 2))), R ? (d.resets.dns[n] = m, c.preconnects && (c.preconnects += ", "), c.preconnects += y) : (y = [], Xe(y, { href: n, rel: "dns-prefetch" }), d.preconnects.add(y));
            }
            Pi(r);
          }
        } else i.D(n);
      },
      C: function(n, r) {
        var c = Rt || null;
        if (c) {
          var d = c.resumableState, y = c.renderState;
          if (typeof n == "string" && n) {
            var R = r === "use-credentials" ? "credentials" : typeof r == "string" ? "anonymous" : "default";
            if (!d.connectResources[R].hasOwnProperty(n)) {
              d.connectResources[R][n] = m, d = y.headers;
              var I, D;
              if (D = d && 0 < d.remainingCapacity) {
                if (D = "<" + qn(n) + ">; rel=preconnect", typeof r == "string") {
                  var ee = Mu(
                    r,
                    "crossOrigin"
                  );
                  D += '; crossorigin="' + ee + '"';
                }
                D = (I = D, 0 <= (d.remainingCapacity -= I.length + 2));
              }
              D ? (y.resets.connect[R][n] = m, d.preconnects && (d.preconnects += ", "), d.preconnects += I) : (R = [], Xe(R, {
                rel: "preconnect",
                href: n,
                crossOrigin: r
              }), y.preconnects.add(R));
            }
            Pi(c);
          }
        } else i.C(n, r);
      },
      L: function(n, r, c) {
        var d = Rt || null;
        if (d) {
          var y = d.resumableState, R = d.renderState;
          if (r && n) {
            switch (r) {
              case "image":
                if (c)
                  var I = c.imageSrcSet, D = c.imageSizes, ee = c.fetchPriority;
                var B = I ? I + `
` + (D || "") : n;
                if (y.imageResources.hasOwnProperty(B)) return;
                y.imageResources[B] = Y, y = R.headers;
                var Q;
                y && 0 < y.remainingCapacity && typeof I != "string" && ee === "high" && (Q = Yo(n, r, c), 0 <= (y.remainingCapacity -= Q.length + 2)) ? (R.resets.image[B] = Y, y.highImagePreloads && (y.highImagePreloads += ", "), y.highImagePreloads += Q) : (y = [], Xe(
                  y,
                  Yn(
                    {
                      rel: "preload",
                      href: I ? void 0 : n,
                      as: r
                    },
                    c
                  )
                ), ee === "high" ? R.highImagePreloads.add(y) : (R.bulkPreloads.add(y), R.preloads.images.set(B, y)));
                break;
              case "style":
                if (y.styleResources.hasOwnProperty(n)) return;
                I = [], Xe(
                  I,
                  Yn({ rel: "preload", href: n, as: r }, c)
                ), y.styleResources[n] = !c || typeof c.crossOrigin != "string" && typeof c.integrity != "string" ? Y : [c.crossOrigin, c.integrity], R.preloads.stylesheets.set(n, I), R.bulkPreloads.add(I);
                break;
              case "script":
                if (y.scriptResources.hasOwnProperty(n)) return;
                I = [], R.preloads.scripts.set(n, I), R.bulkPreloads.add(I), Xe(
                  I,
                  Yn({ rel: "preload", href: n, as: r }, c)
                ), y.scriptResources[n] = !c || typeof c.crossOrigin != "string" && typeof c.integrity != "string" ? Y : [c.crossOrigin, c.integrity];
                break;
              default:
                if (y.unknownResources.hasOwnProperty(r)) {
                  if (I = y.unknownResources[r], I.hasOwnProperty(n))
                    return;
                } else
                  I = {}, y.unknownResources[r] = I;
                if (I[n] = Y, (y = R.headers) && 0 < y.remainingCapacity && r === "font" && (B = Yo(n, r, c), 0 <= (y.remainingCapacity -= B.length + 2)))
                  R.resets.font[n] = Y, y.fontPreloads && (y.fontPreloads += ", "), y.fontPreloads += B;
                else
                  switch (y = [], n = Yn(
                    { rel: "preload", href: n, as: r },
                    c
                  ), Xe(y, n), r) {
                    case "font":
                      R.fontPreloads.add(y);
                      break;
                    default:
                      R.bulkPreloads.add(y);
                  }
            }
            Pi(d);
          }
        } else i.L(n, r, c);
      },
      m: function(n, r) {
        var c = Rt || null;
        if (c) {
          var d = c.resumableState, y = c.renderState;
          if (n) {
            var R = r && typeof r.as == "string" ? r.as : "script";
            switch (R) {
              case "script":
                if (d.moduleScriptResources.hasOwnProperty(n))
                  return;
                R = [], d.moduleScriptResources[n] = !r || typeof r.crossOrigin != "string" && typeof r.integrity != "string" ? Y : [r.crossOrigin, r.integrity], y.preloads.moduleScripts.set(n, R);
                break;
              default:
                if (d.moduleUnknownResources.hasOwnProperty(R)) {
                  var I = d.unknownResources[R];
                  if (I.hasOwnProperty(n)) return;
                } else
                  I = {}, d.moduleUnknownResources[R] = I;
                R = [], I[n] = Y;
            }
            Xe(
              R,
              Yn({ rel: "modulepreload", href: n }, r)
            ), y.bulkPreloads.add(R), Pi(c);
          }
        } else i.m(n, r);
      },
      X: function(n, r) {
        var c = Rt || null;
        if (c) {
          var d = c.resumableState, y = c.renderState;
          if (n) {
            var R = d.scriptResources.hasOwnProperty(
              n
            ) ? d.scriptResources[n] : void 0;
            R !== m && (d.scriptResources[n] = m, r = Yn({ src: n, async: !0 }, r), R && (R.length === 2 && xa(r, R), n = y.preloads.scripts.get(n)) && (n.length = 0), n = [], y.scripts.add(n), vt(n, r), Pi(c));
          }
        } else i.X(n, r);
      },
      S: function(n, r, c) {
        var d = Rt || null;
        if (d) {
          var y = d.resumableState, R = d.renderState;
          if (n) {
            r = r || "default";
            var I = R.styles.get(r), D = y.styleResources.hasOwnProperty(n) ? y.styleResources[n] : void 0;
            D !== m && (y.styleResources[n] = m, I || (I = {
              precedence: Ce(r),
              rules: [],
              hrefs: [],
              sheets: /* @__PURE__ */ new Map()
            }, R.styles.set(r, I)), r = {
              state: w,
              props: Yn(
                {
                  rel: "stylesheet",
                  href: n,
                  "data-precedence": r
                },
                c
              )
            }, D && (D.length === 2 && xa(r.props, D), (R = R.preloads.stylesheets.get(n)) && 0 < R.length ? R.length = 0 : r.state = C), I.sheets.set(n, r), Pi(d));
          }
        } else i.S(n, r, c);
      },
      M: function(n, r) {
        var c = Rt || null;
        if (c) {
          var d = c.resumableState, y = c.renderState;
          if (n) {
            var R = d.moduleScriptResources.hasOwnProperty(n) ? d.moduleScriptResources[n] : void 0;
            R !== m && (d.moduleScriptResources[n] = m, r = Yn(
              { src: n, type: "module", async: !0 },
              r
            ), R && (R.length === 2 && xa(r, R), n = y.preloads.moduleScripts.get(n)) && (n.length = 0), n = [], y.scripts.add(n), vt(n, r), Pi(c));
          }
        } else i.M(n, r);
      }
    };
    var o = 0, f = 1, g = 2, T = 4, k = 8, p = 32, X = 64, m = null, Y = [];
    Object.freeze(Y);
    var ne = null, $ = "<\/script>", fe = /(<\/|<)(s)(cript)/gi, ke = {}, Ze = 0, De = 1, pe = 2, Be = 3, me = 4, Gn = 5, Ve = 6, rn = 7, bn = 8, Ue = 9, $n = /* @__PURE__ */ new Map(), fn = ' style="', ur = ":", Tn = ";", an = " ", hn = '="', Ne = '"', dn = '=""', Lt = Ce(
      "javascript:throw new Error('React form unexpectedly submitted.')"
    ), Qe = ">", ta = "/>", Mi = !1, cr = !1, dl = !1, gl = !1, vl = !1, ii = !1, Ii = !1, Mt = !1, La = !1, Ha = !1, ou = !1, Yu = `addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});`, xo = /(<\/|<)(s)(tyle)/gi, ra = `
`, sr = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, uu = /* @__PURE__ */ new Map(), fr = /* @__PURE__ */ new Map(), ol = "requestAnimationFrame(function(){$RT=performance.now()});", Oi = '<template id="', cu = '"></template>', _i = "<!--$-->", Gu = '<!--$?--><template id="', xt = '"></template>', su = "<!--$!-->", la = "<!--/$-->", Eo = "<template", za = '"', dt = ' data-dgst="', ul = ' data-msg="', Je = ' data-stck="', mi = ' data-cstck="', Ro = "></template>", ia = '<div hidden id="', et = '">', Or = "</div>", aa = '<svg aria-hidden="true" style="display:none" id="', Ba = '">', bl = "</svg>", jt = '<math aria-hidden="true" style="display:none" id="', Co = '">', hr = "</math>", Oc = '<table hidden id="', Na = '">', fu = "</table>", Xu = '<table hidden><tbody id="', Zu = '">', ai = "</tbody></table>", Wa = '<table hidden><tr id="', Ua = '">', dr = "</tr></table>", hu = '<table hidden><colgroup id="', du = '">', _c = "</colgroup></table>", mc = '$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("', Vu = '$RS("', Dc = '","', Lc = '")<\/script>', Et = `$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d||"/&"===d)if(0===h)break;else h--;else"$"!==d&&"$?"!==d&&"$~"!==d&&"$!"!==d&&"&"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data="$";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};
$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data="$~",$RB.push(a,b),2===$RB.length&&("number"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};`, Ju = '$RC("', gu = `$RM=new Map;$RR=function(n,w,p){function u(q){this._p=null;q()}for(var r=new Map,t=document,h,b,e=t.querySelectorAll("link[data-precedence],style[data-precedence]"),v=[],k=0;b=e[k++];)"not all"===b.getAttribute("media")?v.push(b):("LINK"===b.tagName&&$RM.set(b.getAttribute("href"),b),r.set(b.dataset.precedence,h=b));e=0;b=[];var l,a;for(k=!0;;){if(k){var f=p[e++];if(!f){k=!1;e=0;continue}var c=!1,m=0;var d=f[m++];if(a=$RM.get(d)){var g=a._p;c=!0}else{a=t.createElement("link");a.href=d;a.rel=
"stylesheet";for(a.dataset.precedence=l=f[m++];g=f[m++];)a.setAttribute(g,f[m++]);g=a._p=new Promise(function(q,x){a.onload=u.bind(a,q);a.onerror=u.bind(a,x)});$RM.set(d,a)}d=a.getAttribute("media");!g||d&&!matchMedia(d).matches||b.push(g);if(c)continue}else{a=v[e++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=r.get(l)||h;c===h&&(h=a);r.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=t.head,c.insertBefore(a,c.firstChild))}if(p=document.getElementById(n))p.previousSibling.data=
"$~";Promise.all(b).then($RC.bind(null,n,w),$RX.bind(null,n,"CSS failed to load"))};$RR("`, vu = '$RR("', Qu = '","', Hc = '",', Ku = '"', qu = ")<\/script>", oa = '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};', yl = '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("', as = '$RX("', Ya = '"', bu = ",", Nl = ")<\/script>", ko = /[<\u2028\u2029]/g, ua = /[&><\u2028\u2029]/g, yu = ' media="not all" data-precedence="', ca = '" data-href="', os = '">', us = "</style>", Wl = !1, So = !0, cl = [], sa = ' data-precedence="', Ga = '" data-href="', wl = " ", zc = '">', cs = "</style>", Po = ' id="', l = "[", a = ",[", s = ",", v = "]", w = 0, C = 1, S = 2, H = 3, O = /[<>\r\n]/g, z = /["';,\r\n]/g, G = "", J = Function.prototype.bind, ve = Symbol.for("react.client.reference"), ge = {};
    Object.freeze(ge);
    var en = {}, Le = null, nn = {}, nt = {}, Hn = /* @__PURE__ */ new Set(), $t = /* @__PURE__ */ new Set(), Ur = /* @__PURE__ */ new Set(), Tl = /* @__PURE__ */ new Set(), He = /* @__PURE__ */ new Set(), gr = /* @__PURE__ */ new Set(), gt = /* @__PURE__ */ new Set(), _r = /* @__PURE__ */ new Set(), Di = /* @__PURE__ */ new Set(), tt = {
      enqueueSetState: function(n, r, c) {
        var d = n._reactInternals;
        d.queue === null ? nl(n, "setState") : (d.queue.push(r), c != null && Go(c));
      },
      enqueueReplaceState: function(n, r, c) {
        n = n._reactInternals, n.replace = !0, n.queue = [r], c != null && Go(c);
      },
      enqueueForceUpdate: function(n, r) {
        n._reactInternals.queue === null ? nl(n, "forceUpdate") : r != null && Go(r);
      }
    }, Xa = { id: 1, overflow: "" }, xl = Math.clz32 ? Math.clz32 : jc, vr = Math.log, Ul = Math.LN2, br = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), Za = null, Fo = typeof Object.is == "function" ? Object.is : Vo, mr = null, po = null, yr = null, Va = null, Bc = null, Xn = null, Ao = !1, Yl = !1, ju = 0, Ja = 0, $u = -1, ec = 0, Mo = null, fa = null, nc = 0, oi = !1, Qa, Ka = {
      readContext: ka,
      use: function(n) {
        if (n !== null && typeof n == "object") {
          if (typeof n.then == "function")
            return tl(n);
          if (n.$$typeof === rl)
            return ka(n);
        }
        throw Error(
          "An unsupported type was passed to use(): " + String(n)
        );
      },
      useContext: function(n) {
        return Qa = "useContext", Kl(), n._currentValue2;
      },
      useMemo: $c,
      useReducer: or,
      useRef: function(n) {
        mr = Kl(), Xn = cn();
        var r = Xn.memoizedState;
        return r === null ? (n = { current: n }, Object.seal(n), Xn.memoizedState = n) : r;
      },
      useState: function(n) {
        return Qa = "useState", or(Iu, n);
      },
      useInsertionEffect: je,
      useLayoutEffect: je,
      useCallback: function(n, r) {
        return $c(function() {
          return n;
        }, r);
      },
      useImperativeHandle: je,
      useEffect: je,
      useDebugValue: je,
      useDeferredValue: function(n, r) {
        return Kl(), r !== void 0 ? r : n;
      },
      useTransition: function() {
        return Kl(), [!1, Wn];
      },
      useId: function() {
        var n = po.treeContext, r = n.overflow;
        n = n.id, n = (n & ~(1 << 32 - xl(n) - 1)).toString(32) + r;
        var c = ss;
        if (c === null)
          throw Error(
            "Invalid hook call. Hooks can only be called inside of the body of a function component."
          );
        return r = ju++, n = "_" + c.idPrefix + "R_" + n, 0 < r && (n += "H" + r.toString(32)), n + "_";
      },
      useSyncExternalStore: function(n, r, c) {
        if (c === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        return c();
      },
      useOptimistic: function(n) {
        return Kl(), [n, _u];
      },
      useActionState: ao,
      useFormState: ao,
      useHostTransitionStatus: function() {
        return Kl(), is;
      },
      useMemoCache: function(n) {
        for (var r = Array(n), c = 0; c < n; c++)
          r[c] = Bu;
        return r;
      },
      useCacheRefresh: function() {
        return Sa;
      },
      useEffectEvent: function() {
        return Ou;
      }
    }, ss = null, El = null, fs = {
      getCacheForType: function() {
        throw Error("Not implemented.");
      },
      cacheSignal: function() {
        throw Error("Not implemented.");
      },
      getOwner: function() {
        return El === null ? null : El.componentStack;
      }
    }, sl = 0, ha, Li, tc, rc, lc, qa, hs;
    es.__reactDisabledLog = !0;
    var Nc, Io, ds = !1, ic = new (typeof WeakMap == "function" ? WeakMap : Map)(), Cs = {
      react_stack_bottom_frame: function(n, r, c) {
        return n(r, c);
      }
    }, Wc = Cs.react_stack_bottom_frame.bind(Cs), ks = {
      react_stack_bottom_frame: function(n) {
        return n.render();
      }
    }, ac = ks.react_stack_bottom_frame.bind(ks), Oo = {
      react_stack_bottom_frame: function(n) {
        var r = n._init;
        return r(n._payload);
      }
    }, Ms = Oo.react_stack_bottom_frame.bind(Oo), Is = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var ui = performance, gs = function() {
        return ui.now();
      };
    else {
      var Os = Date;
      gs = function() {
        return Os.now();
      };
    }
    var Gt = 4, Hi = 0, wr = 1, da = 2, Rl = 3, xn = 4, Yr = 5, zi = 14, Rt = null, wu = {}, oc = {}, vs = {}, _o = {}, ja = !1, Tu = !1, Gl = !1, $a = 0, xu = !1;
    tf.renderToStaticMarkup = function(n, r) {
      return ji(
        n,
        r,
        !0,
        'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server'
      );
    }, tf.renderToString = function(n, r) {
      return ji(
        n,
        r,
        !1,
        'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server'
      );
    }, tf.version = "19.2.0";
  })()), tf;
}
var Ws = {};
var Nf;
function hh() {
  return Nf || (Nf = 1, process.env.NODE_ENV !== "production" && (function() {
    function A(e, t, u, h) {
      return "" + t + (u === "s" ? "\\73 " : "\\53 ") + h;
    }
    function P(e, t, u, h) {
      return "" + t + (u === "s" ? "\\u0073" : "\\u0053") + h;
    }
    function E(e) {
      return e === null || typeof e != "object" ? null : (e = Mc && e[Mc] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function U(e) {
      return e = Object.prototype.toString.call(e), e.slice(8, e.length - 1);
    }
    function j(e) {
      var t = JSON.stringify(e);
      return '"' + e + '"' === t ? e : t;
    }
    function q(e) {
      switch (typeof e) {
        case "string":
          return JSON.stringify(
            10 >= e.length ? e : e.slice(0, 10) + "..."
          );
        case "object":
          return li(e) ? "[...]" : e !== null && e.$$typeof === pi ? "client" : (e = U(e), e === "Object" ? "{...}" : e);
        case "function":
          return e.$$typeof === pi ? "client" : (e = e.displayName || e.name) ? "function " + e : "function";
        default:
          return String(e);
      }
    }
    function de(e) {
      if (typeof e == "string") return e;
      switch (e) {
        case $i:
          return "Suspense";
        case Ia:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case sn:
            return de(e.render);
          case Oa:
            return de(e.type);
          case ea:
            var t = e._payload;
            e = e._init;
            try {
              return de(e(t));
            } catch {
            }
        }
      return "";
    }
    function Te(e, t) {
      var u = U(e);
      if (u !== "Object" && u !== "Array") return u;
      var h = -1, b = 0;
      if (li(e))
        if (Kt.has(e)) {
          var x = Kt.get(e);
          u = "<" + de(x) + ">";
          for (var F = 0; F < e.length; F++) {
            var _ = e[F];
            _ = typeof _ == "string" ? _ : typeof _ == "object" && _ !== null ? "{" + Te(_) + "}" : "{" + q(_) + "}", "" + F === t ? (h = u.length, b = _.length, u += _) : u = 15 > _.length && 40 > u.length + _.length ? u + _ : u + "{...}";
          }
          u += "</" + de(x) + ">";
        } else {
          for (u = "[", x = 0; x < e.length; x++)
            0 < x && (u += ", "), F = e[x], F = typeof F == "object" && F !== null ? Te(F) : q(F), "" + x === t ? (h = u.length, b = F.length, u += F) : u = 10 > F.length && 40 > u.length + F.length ? u + F : u + "...";
          u += "]";
        }
      else if (e.$$typeof === Nu)
        u = "<" + de(e.type) + "/>";
      else {
        if (e.$$typeof === pi) return "client";
        if (au.has(e)) {
          for (u = au.get(e), u = "<" + (de(u) || "..."), x = Object.keys(e), F = 0; F < x.length; F++) {
            u += " ", _ = x[F], u += j(_) + "=";
            var V = e[_], L = _ === t && typeof V == "object" && V !== null ? Te(V) : q(V);
            typeof V != "string" && (L = "{" + L + "}"), _ === t ? (h = u.length, b = L.length, u += L) : u = 10 > L.length && 40 > u.length + L.length ? u + L : u + "...";
          }
          u += ">";
        } else {
          for (u = "{", x = Object.keys(e), F = 0; F < x.length; F++)
            0 < F && (u += ", "), _ = x[F], u += j(_) + ": ", V = e[_], V = typeof V == "object" && V !== null ? Te(V) : q(V), _ === t ? (h = u.length, b = V.length, u += V) : u = 10 > V.length && 40 > u.length + V.length ? u + V : u + "...";
          u += "}";
        }
      }
      return t === void 0 ? u : -1 < h && 0 < b ? (e = " ".repeat(h) + "^".repeat(b), `
  ` + u + `
  ` + e) : `
  ` + u;
    }
    function Ae(e, t) {
      var u = e.length & 3, h = e.length - u, b = t;
      for (t = 0; t < h; ) {
        var x = e.charCodeAt(t) & 255 | (e.charCodeAt(++t) & 255) << 8 | (e.charCodeAt(++t) & 255) << 16 | (e.charCodeAt(++t) & 255) << 24;
        ++t, x = 3432918353 * (x & 65535) + ((3432918353 * (x >>> 16) & 65535) << 16) & 4294967295, x = x << 15 | x >>> 17, x = 461845907 * (x & 65535) + ((461845907 * (x >>> 16) & 65535) << 16) & 4294967295, b ^= x, b = b << 13 | b >>> 19, b = 5 * (b & 65535) + ((5 * (b >>> 16) & 65535) << 16) & 4294967295, b = (b & 65535) + 27492 + (((b >>> 16) + 58964 & 65535) << 16);
      }
      switch (x = 0, u) {
        case 3:
          x ^= (e.charCodeAt(t + 2) & 255) << 16;
        case 2:
          x ^= (e.charCodeAt(t + 1) & 255) << 8;
        case 1:
          x ^= e.charCodeAt(t) & 255, x = 3432918353 * (x & 65535) + ((3432918353 * (x >>> 16) & 65535) << 16) & 4294967295, x = x << 15 | x >>> 17, b ^= 461845907 * (x & 65535) + ((461845907 * (x >>> 16) & 65535) << 16) & 4294967295;
      }
      return b ^= e.length, b ^= b >>> 16, b = 2246822507 * (b & 65535) + ((2246822507 * (b >>> 16) & 65535) << 16) & 4294967295, b ^= b >>> 13, b = 3266489909 * (b & 65535) + ((3266489909 * (b >>> 16) & 65535) << 16) & 4294967295, (b ^ b >>> 16) >>> 0;
    }
    function _e(e) {
      _a.push(e), ls.port2.postMessage(null);
    }
    function $e(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function N(e, t) {
      if (t.byteLength !== 0)
        if (2048 < t.byteLength)
          0 < Yt && (e.enqueue(
            new Uint8Array(qt.buffer, 0, Yt)
          ), qt = new Uint8Array(2048), Yt = 0), e.enqueue(t);
        else {
          var u = qt.length - Yt;
          u < t.byteLength && (u === 0 ? e.enqueue(qt) : (qt.set(
            t.subarray(0, u),
            Yt
          ), e.enqueue(qt), t = t.subarray(u)), qt = new Uint8Array(2048), Yt = 0), qt.set(t, Yt), Yt += t.byteLength;
        }
    }
    function Re(e, t) {
      return N(e, t), !0;
    }
    function ot(e) {
      qt && 0 < Yt && (e.enqueue(
        new Uint8Array(qt.buffer, 0, Yt)
      ), qt = null, Yt = 0);
    }
    function re(e) {
      return na.encode(e);
    }
    function Z(e) {
      return e = na.encode(e), 2048 < e.byteLength && console.error(
        "precomputed chunks must be smaller than the view size configured for this host. This is a bug in React."
      ), e;
    }
    function Qn(e) {
      return e.byteLength;
    }
    function Vl(e, t) {
      typeof e.error == "function" ? e.error(t) : e.close();
    }
    function zr(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function $r(e) {
      try {
        return Sr(e), !1;
      } catch {
        return !0;
      }
    }
    function Sr(e) {
      return "" + e;
    }
    function ut(e, t) {
      if ($r(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          zr(e)
        ), Sr(e);
    }
    function Ce(e, t) {
      if ($r(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          zr(e)
        ), Sr(e);
    }
    function _n(e) {
      if ($r(e))
        return console.error(
          "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
          zr(e)
        ), Sr(e);
    }
    function mn(e) {
      return Rn.call(Uu, e) ? !0 : Rn.call(wo, e) ? !1 : Da.test(e) ? Uu[e] = !0 : (wo[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function tn(e, t) {
      Rs[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function at(e, t) {
      if (Rn.call(Ai, t) && Ai[t])
        return !0;
      if (i.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = jn.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            t
          ), Ai[t] = !0;
        if (t !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            t,
            e
          ), Ai[t] = !0;
      }
      if (is.test(t)) {
        if (e = t.toLowerCase(), e = jn.hasOwnProperty(e) ? e : null, e == null) return Ai[t] = !0, !1;
        t !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          t,
          e
        ), Ai[t] = !0);
      }
      return !0;
    }
    function ya(e, t) {
      var u = [], h;
      for (h in t)
        at(e, h) || u.push(h);
      t = u.map(function(b) {
        return "`" + b + "`";
      }).join(", "), u.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      ) : 1 < u.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      );
    }
    function Jl(e, t, u, h) {
      if (Rn.call(g, t) && g[t])
        return !0;
      var b = t.toLowerCase();
      if (b === "onfocusin" || b === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), g[t] = !0;
      if (typeof u == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction"))
        return !0;
      if (T.test(t))
        return k.test(t) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          t
        ), g[t] = !0;
      if (p.test(t) || X.test(t)) return !0;
      if (b === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), g[t] = !0;
      if (b === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), g[t] = !0;
      if (b === "is" && u !== null && u !== void 0 && typeof u != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof u
        ), g[t] = !0;
      if (typeof u == "number" && isNaN(u))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          t
        ), g[t] = !0;
      if (f.hasOwnProperty(b)) {
        if (b = f[b], b !== t)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            t,
            b
          ), g[t] = !0;
      } else if (t !== b)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          t,
          b
        ), g[t] = !0;
      switch (t) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof u) {
        case "boolean":
          switch (t) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return b = t.toLowerCase().slice(0, 5), b === "data-" || b === "aria-" ? !0 : (u ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                u,
                t,
                t,
                u,
                t
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                u,
                t,
                t,
                u,
                t,
                t,
                t
              ), g[t] = !0);
          }
        case "function":
        case "symbol":
          return g[t] = !0, !1;
        case "string":
          if (u === "false" || u === "true") {
            switch (t) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
              case "allowFullScreen":
              case "async":
              case "autoPlay":
              case "controls":
              case "default":
              case "defer":
              case "disabled":
              case "disablePictureInPicture":
              case "disableRemotePlayback":
              case "formNoValidate":
              case "hidden":
              case "loop":
              case "noModule":
              case "noValidate":
              case "open":
              case "playsInline":
              case "readOnly":
              case "required":
              case "reversed":
              case "scoped":
              case "seamless":
              case "itemScope":
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              u,
              t,
              u === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              t,
              u
            ), g[t] = !0;
          }
      }
      return !0;
    }
    function Ot(e, t, u) {
      var h = [], b;
      for (b in t)
        Jl(e, b, t[b]) || h.push(b);
      t = h.map(function(x) {
        return "`" + x + "`";
      }).join(", "), h.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      ) : 1 < h.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      );
    }
    function Kn(e) {
      return e.replace(ne, function(t, u) {
        return u.toUpperCase();
      });
    }
    function xe(e) {
      if (typeof e == "boolean" || typeof e == "number" || typeof e == "bigint")
        return "" + e;
      _n(e), e = "" + e;
      var t = pe.exec(e);
      if (t) {
        var u = "", h, b = 0;
        for (h = t.index; h < e.length; h++) {
          switch (e.charCodeAt(h)) {
            case 34:
              t = "&quot;";
              break;
            case 38:
              t = "&amp;";
              break;
            case 39:
              t = "&#x27;";
              break;
            case 60:
              t = "&lt;";
              break;
            case 62:
              t = "&gt;";
              break;
            default:
              continue;
          }
          b !== h && (u += e.slice(b, h)), b = h + 1, u += t;
        }
        e = b !== h ? u + e.slice(b, h) : u;
      }
      return e;
    }
    function K(e) {
      return Gn.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function ce(e) {
      return _n(e), ("" + e).replace(La, P);
    }
    function el(e, t, u, h, b, x) {
      u = typeof t == "string" ? t : t && t.script;
      var F = u === void 0 ? ta : Z(
        '<script nonce="' + xe(u) + '"'
      ), _ = typeof t == "string" ? void 0 : t && t.style, V = _ === void 0 ? Mt : Z(
        '<style nonce="' + xe(_) + '"'
      ), L = e.idPrefix, W = [], ie = e.bootstrapScriptContent, ue = e.bootstrapScripts, ae = e.bootstrapModules;
      if (ie !== void 0 && (W.push(F), hl(W, e), W.push(
        et,
        re(
          ce(ie)
        ),
        Mi
      )), ie = [], h !== void 0 && (ie.push(Ha), ie.push(
        re(
          ce(JSON.stringify(h))
        )
      ), ie.push(ou)), b && typeof x == "number" && 0 >= x && console.error(
        "React expected a positive non-zero `maxHeadersLength` option but found %s instead. When using the `onHeaders` option you may supply an optional `maxHeadersLength` option as well however, when setting this value to zero or less no headers will be captured.",
        x === 0 ? "zero" : x
      ), h = b ? {
        preconnects: "",
        fontPreloads: "",
        highImagePreloads: "",
        remainingCapacity: 2 + (typeof x == "number" ? x : 2e3)
      } : null, b = {
        placeholderPrefix: Z(L + "P:"),
        segmentPrefix: Z(L + "S:"),
        boundaryPrefix: Z(L + "B:"),
        startInlineScript: F,
        startInlineStyle: V,
        preamble: oe(),
        externalRuntimeScript: null,
        bootstrapChunks: W,
        importMapChunks: ie,
        onHeaders: b,
        headers: h,
        resets: {
          font: {},
          dns: {},
          connect: { default: {}, anonymous: {}, credentials: {} },
          image: {},
          style: {}
        },
        charsetChunks: [],
        viewportChunks: [],
        hoistableChunks: [],
        preconnects: /* @__PURE__ */ new Set(),
        fontPreloads: /* @__PURE__ */ new Set(),
        highImagePreloads: /* @__PURE__ */ new Set(),
        styles: /* @__PURE__ */ new Map(),
        bootstrapScripts: /* @__PURE__ */ new Set(),
        scripts: /* @__PURE__ */ new Set(),
        bulkPreloads: /* @__PURE__ */ new Set(),
        preloads: {
          images: /* @__PURE__ */ new Map(),
          stylesheets: /* @__PURE__ */ new Map(),
          scripts: /* @__PURE__ */ new Map(),
          moduleScripts: /* @__PURE__ */ new Map()
        },
        nonce: { script: u, style: _ },
        hoistableState: null,
        stylesToHoist: !1
      }, ue !== void 0)
        for (h = 0; h < ue.length; h++)
          x = ue[h], V = _ = void 0, L = {
            rel: "preload",
            as: "script",
            fetchPriority: "low",
            nonce: t
          }, typeof x == "string" ? L.href = F = x : (L.href = F = x.src, L.integrity = V = typeof x.integrity == "string" ? x.integrity : void 0, L.crossOrigin = _ = typeof x == "string" || x.crossOrigin == null ? void 0 : x.crossOrigin === "use-credentials" ? "use-credentials" : ""), ct(
            e,
            b,
            F,
            L
          ), W.push(
            cr,
            re(xe(F)),
            Je
          ), u && W.push(
            gl,
            re(xe(u)),
            Je
          ), typeof V == "string" && W.push(
            vl,
            re(xe(V)),
            Je
          ), typeof _ == "string" && W.push(
            ii,
            re(xe(_)),
            Je
          ), hl(W, e), W.push(Ii);
      if (ae !== void 0)
        for (t = 0; t < ae.length; t++)
          ue = ae[t], F = x = void 0, _ = {
            rel: "modulepreload",
            fetchPriority: "low",
            nonce: u
          }, typeof ue == "string" ? _.href = h = ue : (_.href = h = ue.src, _.integrity = F = typeof ue.integrity == "string" ? ue.integrity : void 0, _.crossOrigin = x = typeof ue == "string" || ue.crossOrigin == null ? void 0 : ue.crossOrigin === "use-credentials" ? "use-credentials" : ""), ct(
            e,
            b,
            h,
            _
          ), W.push(
            dl,
            re(xe(h)),
            Je
          ), u && W.push(
            gl,
            re(xe(u)),
            Je
          ), typeof F == "string" && W.push(
            vl,
            re(xe(F)),
            Je
          ), typeof x == "string" && W.push(
            ii,
            re(xe(x)),
            Je
          ), hl(W, e), W.push(Ii);
      return b;
    }
    function Vt(e, t, u, h, b) {
      return {
        idPrefix: e === void 0 ? "" : e,
        nextFormID: 0,
        streamingFormat: 0,
        bootstrapScriptContent: u,
        bootstrapScripts: h,
        bootstrapModules: b,
        instructions: $n,
        hasBody: !1,
        hasHtml: !1,
        unknownResources: {},
        dnsResources: {},
        connectResources: { default: {}, anonymous: {}, credentials: {} },
        imageResources: {},
        styleResources: {},
        scriptResources: {},
        moduleUnknownResources: {},
        moduleScriptResources: {}
      };
    }
    function oe() {
      return { htmlChunks: null, headChunks: null, bodyChunks: null };
    }
    function M(e, t, u, h) {
      return {
        insertionMode: e,
        selectedValue: t,
        tagScope: u,
        viewTransition: h
      };
    }
    function be(e) {
      return M(
        e === "http://www.w3.org/2000/svg" ? fr : e === "http://www.w3.org/1998/Math/MathML" ? ol : xo,
        null,
        0,
        null
      );
    }
    function Ge(e, t, u) {
      var h = e.tagScope & -25;
      switch (t) {
        case "noscript":
          return M(sr, null, h | 1, null);
        case "select":
          return M(
            sr,
            u.value != null ? u.value : u.defaultValue,
            h,
            null
          );
        case "svg":
          return M(fr, null, h, null);
        case "picture":
          return M(sr, null, h | 2, null);
        case "math":
          return M(ol, null, h, null);
        case "foreignObject":
          return M(sr, null, h, null);
        case "table":
          return M(Oi, null, h, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return M(
            cu,
            null,
            h,
            null
          );
        case "colgroup":
          return M(
            Gu,
            null,
            h,
            null
          );
        case "tr":
          return M(
            _i,
            null,
            h,
            null
          );
        case "head":
          if (e.insertionMode < sr)
            return M(
              uu,
              null,
              h,
              null
            );
          break;
        case "html":
          if (e.insertionMode === xo)
            return M(
              ra,
              null,
              h,
              null
            );
      }
      return e.insertionMode >= Oi || e.insertionMode < sr ? M(sr, null, h, null) : e.tagScope !== h ? M(
        e.insertionMode,
        e.selectedValue,
        h,
        null
      ) : e;
    }
    function we(e) {
      return e === null ? null : {
        update: e.update,
        enter: "none",
        exit: "none",
        share: e.update,
        name: e.autoName,
        autoName: e.autoName,
        nameIdx: 0
      };
    }
    function Ie(e, t) {
      return t.tagScope & 32 && (e.instructions |= 128), M(
        t.insertionMode,
        t.selectedValue,
        t.tagScope | 12,
        we(t.viewTransition)
      );
    }
    function Bn(e, t) {
      e = we(t.viewTransition);
      var u = t.tagScope | 16;
      return e !== null && e.share !== "none" && (u |= 64), M(
        t.insertionMode,
        t.selectedValue,
        u,
        e
      );
    }
    function Xe(e, t, u, h) {
      return t === "" ? h : (h && e.push(xt), e.push(re(xe(t))), !0);
    }
    function Al(e, t) {
      if (typeof t != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      var u = !0, h;
      for (h in t)
        if (Rn.call(t, h)) {
          var b = t[h];
          if (b != null && typeof b != "boolean" && b !== "") {
            if (h.indexOf("--") === 0) {
              var x = re(xe(h));
              Ce(b, h), b = re(
                xe(("" + b).trim())
              );
            } else {
              x = h;
              var F = b;
              if (-1 < x.indexOf("-")) {
                var _ = x;
                fe.hasOwnProperty(_) && fe[_] || (fe[_] = !0, console.error(
                  "Unsupported style property %s. Did you mean %s?",
                  _,
                  Kn(_.replace(Y, "ms-"))
                ));
              } else if (m.test(x))
                _ = x, fe.hasOwnProperty(_) && fe[_] || (fe[_] = !0, console.error(
                  "Unsupported vendor-prefixed style property %s. Did you mean %s?",
                  _,
                  _.charAt(0).toUpperCase() + _.slice(1)
                ));
              else if ($.test(F)) {
                _ = x;
                var V = F;
                ke.hasOwnProperty(V) && ke[V] || (ke[V] = !0, console.error(
                  `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
                  _,
                  V.replace(
                    $,
                    ""
                  )
                ));
              }
              typeof F == "number" && (isNaN(F) ? Ze || (Ze = !0, console.error(
                "`NaN` is an invalid value for the `%s` css style property.",
                x
              )) : isFinite(F) || De || (De = !0, console.error(
                "`Infinity` is an invalid value for the `%s` css style property.",
                x
              ))), x = h, F = su.get(x), F !== void 0 || (F = Z(
                xe(
                  x.replace(Be, "-$1").toLowerCase().replace(me, "-ms-")
                )
              ), su.set(x, F)), x = F, typeof b == "number" ? b = b === 0 || To.has(h) ? re("" + b) : re(b + "px") : (Ce(b, h), b = re(
                xe(("" + b).trim())
              ));
            }
            u ? (u = !1, e.push(
              la,
              x,
              Eo,
              b
            )) : e.push(za, x, Eo, b);
          }
        }
      u || e.push(Je);
    }
    function Br(e, t, u) {
      u && typeof u != "function" && typeof u != "symbol" && e.push(
        dt,
        re(t),
        mi
      );
    }
    function Nt(e, t, u) {
      typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && e.push(
        dt,
        re(t),
        ul,
        re(xe(u)),
        Je
      );
    }
    function vt(e, t) {
      this.push(ia), pu(e), Nt(this, "name", t), Nt(this, "value", e), this.push(Or);
    }
    function pu(e) {
      if (typeof e != "string")
        throw Error(
          "File/Blob fields are not yet supported in progressive forms. Will fallback to client hydration."
        );
    }
    function ze(e, t) {
      if (typeof t.$$FORM_ACTION == "function") {
        var u = e.nextFormID++;
        e = e.idPrefix + u;
        try {
          var h = t.$$FORM_ACTION(e);
          if (h) {
            var b = h.data;
            b?.forEach(pu);
          }
          return h;
        } catch (x) {
          if (typeof x == "object" && x !== null && typeof x.then == "function")
            throw x;
          console.error(
            `Failed to serialize an action for progressive enhancement:
%s`,
            x
          );
        }
      }
      return null;
    }
    function bt(e, t, u, h, b, x, F, _) {
      var V = null;
      if (typeof h == "function") {
        _ === null || fu || (fu = !0, console.error(
          'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
        )), b === null && x === null || Zu || (Zu = !0, console.error(
          "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
        )), F === null || Xu || (Xu = !0, console.error(
          "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
        ));
        var L = ze(t, h);
        L !== null ? (_ = L.name, h = L.action || "", b = L.encType, x = L.method, F = L.target, V = L.data) : (e.push(
          dt,
          re("formAction"),
          ul,
          Ro,
          Je
        ), F = x = b = h = _ = null, Wt(t, u));
      }
      return _ != null && wn(e, "name", _), h != null && wn(e, "formAction", h), b != null && wn(e, "formEncType", b), x != null && wn(e, "formMethod", x), F != null && wn(e, "formTarget", F), V;
    }
    function wn(e, t, u) {
      switch (t) {
        case "className":
          Nt(e, "class", u);
          break;
        case "tabIndex":
          Nt(e, "tabindex", u);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          Nt(e, t, u);
          break;
        case "style":
          Al(e, u);
          break;
        case "src":
        case "href":
          if (u === "") {
            console.error(
              t === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              t,
              t
            );
            break;
          }
        case "action":
        case "formAction":
          if (u == null || typeof u == "function" || typeof u == "symbol" || typeof u == "boolean")
            break;
          ut(u, t), u = K("" + u), e.push(
            dt,
            re(t),
            ul,
            re(xe(u)),
            Je
          );
          break;
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "ref":
          break;
        case "autoFocus":
        case "multiple":
        case "muted":
          Br(e, t.toLowerCase(), u);
          break;
        case "xlinkHref":
          if (typeof u == "function" || typeof u == "symbol" || typeof u == "boolean")
            break;
          ut(u, t), u = K("" + u), e.push(
            dt,
            re("xlink:href"),
            ul,
            re(xe(u)),
            Je
          );
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          typeof u != "function" && typeof u != "symbol" && e.push(
            dt,
            re(t),
            ul,
            re(xe(u)),
            Je
          );
          break;
        case "inert":
          u !== "" || Yu[t] || (Yu[t] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            t
          ));
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          u && typeof u != "function" && typeof u != "symbol" && e.push(
            dt,
            re(t),
            mi
          );
          break;
        case "capture":
        case "download":
          u === !0 ? e.push(
            dt,
            re(t),
            mi
          ) : u !== !1 && typeof u != "function" && typeof u != "symbol" && e.push(
            dt,
            re(t),
            ul,
            re(xe(u)),
            Je
          );
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          typeof u != "function" && typeof u != "symbol" && !isNaN(u) && 1 <= u && e.push(
            dt,
            re(t),
            ul,
            re(xe(u)),
            Je
          );
          break;
        case "rowSpan":
        case "start":
          typeof u == "function" || typeof u == "symbol" || isNaN(u) || e.push(
            dt,
            re(t),
            ul,
            re(xe(u)),
            Je
          );
          break;
        case "xlinkActuate":
          Nt(e, "xlink:actuate", u);
          break;
        case "xlinkArcrole":
          Nt(e, "xlink:arcrole", u);
          break;
        case "xlinkRole":
          Nt(e, "xlink:role", u);
          break;
        case "xlinkShow":
          Nt(e, "xlink:show", u);
          break;
        case "xlinkTitle":
          Nt(e, "xlink:title", u);
          break;
        case "xlinkType":
          Nt(e, "xlink:type", u);
          break;
        case "xmlBase":
          Nt(e, "xml:base", u);
          break;
        case "xmlLang":
          Nt(e, "xml:lang", u);
          break;
        case "xmlSpace":
          Nt(e, "xml:space", u);
          break;
        default:
          if ((!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (t = Ic.get(t) || t, mn(t))) {
            switch (typeof u) {
              case "function":
              case "symbol":
                return;
              case "boolean":
                var h = t.toLowerCase().slice(0, 5);
                if (h !== "data-" && h !== "aria-") return;
            }
            e.push(
              dt,
              re(t),
              ul,
              re(xe(u)),
              Je
            );
          }
      }
    }
    function _t(e, t, u) {
      if (t != null) {
        if (u != null)
          throw Error(
            "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
          );
        if (typeof t != "object" || !("__html" in t))
          throw Error(
            "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
          );
        t = t.__html, t != null && (_n(t), e.push(re("" + t)));
      }
    }
    function wa(e, t) {
      var u = e[t];
      u != null && (u = li(u), e.multiple && !u ? console.error(
        "The `%s` prop supplied to <select> must be an array if `multiple` is true.",
        t
      ) : !e.multiple && u && console.error(
        "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.",
        t
      ));
    }
    function Ui(e) {
      var t = "";
      return zu.Children.forEach(e, function(u) {
        u != null && (t += u, Co || typeof u == "string" || typeof u == "number" || typeof u == "bigint" || (Co = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        )));
      }), t;
    }
    function Wt(e, t) {
      if ((e.instructions & 16) === $n) {
        e.instructions |= 16;
        var u = t.preamble, h = t.bootstrapChunks;
        (u.htmlChunks || u.headChunks) && h.length === 0 ? (h.push(t.startInlineScript), hl(h, e), h.push(
          et,
          Wa,
          Mi
        )) : h.unshift(
          t.startInlineScript,
          et,
          Wa,
          Mi
        );
      }
    }
    function Pr(e, t) {
      e.push(In("link"));
      for (var u in t)
        if (Rn.call(t, u)) {
          var h = t[u];
          if (h != null)
            switch (u) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(
                  "link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                );
              default:
                wn(e, u, h);
            }
        }
      return e.push(Or), null;
    }
    function Ml(e) {
      return _n(e), ("" + e).replace(hu, A);
    }
    function Ft(e, t, u) {
      e.push(In(u));
      for (var h in t)
        if (Rn.call(t, h)) {
          var b = t[h];
          if (b != null)
            switch (h) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(
                  u + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                );
              default:
                wn(e, h, b);
            }
        }
      return e.push(Or), null;
    }
    function Il(e, t) {
      e.push(In("title"));
      var u = null, h = null, b;
      for (b in t)
        if (Rn.call(t, b)) {
          var x = t[b];
          if (x != null)
            switch (b) {
              case "children":
                u = x;
                break;
              case "dangerouslySetInnerHTML":
                h = x;
                break;
              default:
                wn(e, b, x);
            }
        }
      return e.push(et), t = Array.isArray(u) ? 2 > u.length ? u[0] : null : u, typeof t != "function" && typeof t != "symbol" && t !== null && t !== void 0 && e.push(re(xe("" + t))), _t(e, h, u), e.push(ht("title")), null;
    }
    function Au(e, t) {
      e.push(In("script"));
      var u = null, h = null, b;
      for (b in t)
        if (Rn.call(t, b)) {
          var x = t[b];
          if (x != null)
            switch (b) {
              case "children":
                u = x;
                break;
              case "dangerouslySetInnerHTML":
                h = x;
                break;
              default:
                wn(e, b, x);
            }
        }
      return e.push(et), u != null && typeof u != "string" && (t = typeof u == "number" ? "a number for children" : Array.isArray(u) ? "an array for children" : "something unexpected for children", console.error(
        "A script element was rendered with %s. If script element has children it must be a single string. Consider using dangerouslySetInnerHTML or passing a plain string as children.",
        t
      )), _t(e, h, u), typeof u == "string" && e.push(re(ce(u))), e.push(ht("script")), null;
    }
    function on(e, t, u) {
      e.push(In(u));
      var h = u = null, b;
      for (b in t)
        if (Rn.call(t, b)) {
          var x = t[b];
          if (x != null)
            switch (b) {
              case "children":
                u = x;
                break;
              case "dangerouslySetInnerHTML":
                h = x;
                break;
              default:
                wn(e, b, x);
            }
        }
      return e.push(et), _t(e, h, u), u;
    }
    function ar(e, t, u) {
      e.push(In(u));
      var h = u = null, b;
      for (b in t)
        if (Rn.call(t, b)) {
          var x = t[b];
          if (x != null)
            switch (b) {
              case "children":
                u = x;
                break;
              case "dangerouslySetInnerHTML":
                h = x;
                break;
              default:
                wn(e, b, x);
            }
        }
      return e.push(et), _t(e, h, u), typeof u == "string" ? (e.push(re(xe(u))), null) : u;
    }
    function In(e) {
      var t = Lc.get(e);
      if (t === void 0) {
        if (!Dc.test(e)) throw Error("Invalid tag: " + e);
        t = Z("<" + e), Lc.set(e, t);
      }
      return t;
    }
    function Qc(e, t, u, h, b, x, F, _, V) {
      ya(t, u), t !== "input" && t !== "textarea" && t !== "select" || u == null || u.value !== null || o || (o = !0, t === "select" && u.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        t
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        t
      ));
      e: if (t.indexOf("-") === -1) var L = !1;
      else
        switch (t) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            L = !1;
            break e;
          default:
            L = !0;
        }
      switch (L || typeof u.is == "string" || Ot(t, u), !u.suppressContentEditableWarning && u.contentEditable && u.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      ), _.insertionMode !== fr && _.insertionMode !== ol && t.indexOf("-") === -1 && t.toLowerCase() !== t && console.error(
        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
        t
      ), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
          break;
        case "a":
          e.push(In("a"));
          var W = null, ie = null, ue;
          for (ue in u)
            if (Rn.call(u, ue)) {
              var ae = u[ue];
              if (ae != null)
                switch (ue) {
                  case "children":
                    W = ae;
                    break;
                  case "dangerouslySetInnerHTML":
                    ie = ae;
                    break;
                  case "href":
                    ae === "" ? Nt(e, "href", "") : wn(e, ue, ae);
                    break;
                  default:
                    wn(e, ue, ae);
                }
            }
          if (e.push(et), _t(e, ie, W), typeof W == "string") {
            e.push(re(xe(W)));
            var te = null;
          } else te = W;
          return te;
        case "g":
        case "p":
        case "li":
          break;
        case "select":
          tn("select", u), wa(u, "value"), wa(u, "defaultValue"), u.value === void 0 || u.defaultValue === void 0 || bl || (console.error(
            "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
          ), bl = !0), e.push(In("select"));
          var Me = null, An = null, Fe;
          for (Fe in u)
            if (Rn.call(u, Fe)) {
              var qe = u[Fe];
              if (qe != null)
                switch (Fe) {
                  case "children":
                    Me = qe;
                    break;
                  case "dangerouslySetInnerHTML":
                    An = qe;
                    break;
                  case "defaultValue":
                  case "value":
                    break;
                  default:
                    wn(
                      e,
                      Fe,
                      qe
                    );
                }
            }
          return e.push(et), _t(e, An, Me), Me;
        case "option":
          var st = _.selectedValue;
          e.push(In("option"));
          var Ct = null, vn = null, Se = null, kt = null, xr;
          for (xr in u)
            if (Rn.call(u, xr)) {
              var Mn = u[xr];
              if (Mn != null)
                switch (xr) {
                  case "children":
                    Ct = Mn;
                    break;
                  case "selected":
                    Se = Mn, Oc || (console.error(
                      "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
                    ), Oc = !0);
                    break;
                  case "dangerouslySetInnerHTML":
                    kt = Mn;
                    break;
                  case "value":
                    vn = Mn;
                  default:
                    wn(
                      e,
                      xr,
                      Mn
                    );
                }
            }
          if (st != null) {
            if (vn !== null) {
              ut(vn, "value");
              var Vn = "" + vn;
            } else
              kt === null || hr || (hr = !0, console.error(
                "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
              )), Vn = Ui(Ct);
            if (li(st)) {
              for (var Zr = 0; Zr < st.length; Zr++)
                if (ut(st[Zr], "value"), "" + st[Zr] === Vn) {
                  e.push(ai);
                  break;
                }
            } else
              ut(st, "select.value"), "" + st === Vn && e.push(ai);
          } else Se && e.push(ai);
          return e.push(et), _t(e, kt, Ct), Ct;
        case "textarea":
          tn("textarea", u), u.value === void 0 || u.defaultValue === void 0 || jt || (console.error(
            "Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components"
          ), jt = !0), e.push(In("textarea"));
          var rr = null, zt = null, Jn = null, It;
          for (It in u)
            if (Rn.call(u, It)) {
              var Vr = u[It];
              if (Vr != null)
                switch (It) {
                  case "children":
                    Jn = Vr;
                    break;
                  case "value":
                    rr = Vr;
                    break;
                  case "defaultValue":
                    zt = Vr;
                    break;
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  default:
                    wn(
                      e,
                      It,
                      Vr
                    );
                }
            }
          if (rr === null && zt !== null && (rr = zt), e.push(et), Jn != null) {
            if (console.error(
              "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
            ), rr != null)
              throw Error(
                "If you supply `defaultValue` on a <textarea>, do not pass children."
              );
            if (li(Jn)) {
              if (1 < Jn.length)
                throw Error("<textarea> can only have at most one child.");
              _n(Jn[0]), rr = "" + Jn[0];
            }
            _n(Jn), rr = "" + Jn;
          }
          return typeof rr == "string" && rr[0] === `
` && e.push(Vu), rr !== null && (ut(rr, "value"), e.push(
            re(xe("" + rr))
          )), null;
        case "input":
          tn("input", u), e.push(In("input"));
          var fl = null, Bt = null, lt = null, Er = null, Jr = null, Rr = null, Bi = null, Qr = null, St = null, Cl;
          for (Cl in u)
            if (Rn.call(u, Cl)) {
              var Zt = u[Cl];
              if (Zt != null)
                switch (Cl) {
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      "input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  case "name":
                    fl = Zt;
                    break;
                  case "formAction":
                    Bt = Zt;
                    break;
                  case "formEncType":
                    lt = Zt;
                    break;
                  case "formMethod":
                    Er = Zt;
                    break;
                  case "formTarget":
                    Jr = Zt;
                    break;
                  case "defaultChecked":
                    St = Zt;
                    break;
                  case "defaultValue":
                    Bi = Zt;
                    break;
                  case "checked":
                    Qr = Zt;
                    break;
                  case "value":
                    Rr = Zt;
                    break;
                  default:
                    wn(
                      e,
                      Cl,
                      Zt
                    );
                }
            }
          Bt === null || u.type === "image" || u.type === "submit" || Na || (Na = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          ));
          var Uc = bt(
            e,
            h,
            b,
            Bt,
            lt,
            Er,
            Jr,
            fl
          );
          return Qr === null || St === null || Ba || (console.error(
            "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
            "A component",
            u.type
          ), Ba = !0), Rr === null || Bi === null || aa || (console.error(
            "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
            "A component",
            u.type
          ), aa = !0), Qr !== null ? Br(e, "checked", Qr) : St !== null && Br(e, "checked", St), Rr !== null ? wn(e, "value", Rr) : Bi !== null && wn(e, "value", Bi), e.push(Or), Uc?.forEach(vt, e), null;
        case "button":
          e.push(In("button"));
          var di = null, ft = null, kl = null, Cr = null, Eu = null, Do = null, Xl = null, Lo;
          for (Lo in u)
            if (Rn.call(u, Lo)) {
              var Kr = u[Lo];
              if (Kr != null)
                switch (Lo) {
                  case "children":
                    di = Kr;
                    break;
                  case "dangerouslySetInnerHTML":
                    ft = Kr;
                    break;
                  case "name":
                    kl = Kr;
                    break;
                  case "formAction":
                    Cr = Kr;
                    break;
                  case "formEncType":
                    Eu = Kr;
                    break;
                  case "formMethod":
                    Do = Kr;
                    break;
                  case "formTarget":
                    Xl = Kr;
                    break;
                  default:
                    wn(
                      e,
                      Lo,
                      Kr
                    );
                }
            }
          Cr === null || u.type == null || u.type === "submit" || Na || (Na = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          ));
          var Ru = bt(
            e,
            h,
            b,
            Cr,
            Eu,
            Do,
            Xl,
            kl
          );
          if (e.push(et), Ru?.forEach(vt, e), _t(e, ft, di), typeof di == "string") {
            e.push(
              re(xe(di))
            );
            var Yc = null;
          } else Yc = di;
          return Yc;
        case "form":
          e.push(In("form"));
          var Sl = null, Cu = null, kr = null, Ho = null, eo = null, ga = null, Pl;
          for (Pl in u)
            if (Rn.call(u, Pl)) {
              var Fl = u[Pl];
              if (Fl != null)
                switch (Pl) {
                  case "children":
                    Sl = Fl;
                    break;
                  case "dangerouslySetInnerHTML":
                    Cu = Fl;
                    break;
                  case "action":
                    kr = Fl;
                    break;
                  case "encType":
                    Ho = Fl;
                    break;
                  case "method":
                    eo = Fl;
                    break;
                  case "target":
                    ga = Fl;
                    break;
                  default:
                    wn(
                      e,
                      Pl,
                      Fl
                    );
                }
            }
          var gi = null, qr = null;
          if (typeof kr == "function") {
            Ho === null && eo === null || Zu || (Zu = !0, console.error(
              "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
            )), ga === null || Xu || (Xu = !0, console.error(
              "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
            ));
            var lr = ze(
              h,
              kr
            );
            lr !== null ? (kr = lr.action || "", Ho = lr.encType, eo = lr.method, ga = lr.target, gi = lr.data, qr = lr.name) : (e.push(
              dt,
              re("action"),
              ul,
              Ro,
              Je
            ), ga = eo = Ho = kr = null, Wt(h, b));
          }
          if (kr != null && wn(e, "action", kr), Ho != null && wn(e, "encType", Ho), eo != null && wn(e, "method", eo), ga != null && wn(e, "target", ga), e.push(et), qr !== null && (e.push(ia), Nt(e, "name", qr), e.push(Or), gi?.forEach(
            vt,
            e
          )), _t(e, Cu, Sl), typeof Sl == "string") {
            e.push(
              re(xe(Sl))
            );
            var va = null;
          } else va = Sl;
          return va;
        case "menuitem":
          e.push(In("menuitem"));
          for (var vi in u)
            if (Rn.call(u, vi)) {
              var no = u[vi];
              if (no != null)
                switch (vi) {
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      "menuitems cannot have `children` nor `dangerouslySetInnerHTML`."
                    );
                  default:
                    wn(
                      e,
                      vi,
                      no
                    );
                }
            }
          return e.push(et), null;
        case "object":
          e.push(In("object"));
          var Ni = null, bs = null, Lr;
          for (Lr in u)
            if (Rn.call(u, Lr)) {
              var Zl = u[Lr];
              if (Zl != null)
                switch (Lr) {
                  case "children":
                    Ni = Zl;
                    break;
                  case "dangerouslySetInnerHTML":
                    bs = Zl;
                    break;
                  case "data":
                    ut(Zl, "data");
                    var ku = K("" + Zl);
                    if (ku === "") {
                      console.error(
                        'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                        Lr,
                        Lr
                      );
                      break;
                    }
                    e.push(
                      dt,
                      re("data"),
                      ul,
                      re(xe(ku)),
                      Je
                    );
                    break;
                  default:
                    wn(
                      e,
                      Lr,
                      Zl
                    );
                }
            }
          if (e.push(et), _t(e, bs, Ni), typeof Ni == "string") {
            e.push(
              re(xe(Ni))
            );
            var uc = null;
          } else uc = Ni;
          return uc;
        case "title":
          var cc = _.tagScope & 1, Us = _.tagScope & 4;
          if (Rn.call(u, "children")) {
            var to = u.children, zo = Array.isArray(to) ? 2 > to.length ? to[0] : null : to;
            Array.isArray(to) && 1 < to.length ? console.error(
              "React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an Array with length %s instead. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert `children` of <title> tags to a single string value which is why Arrays of length greater than 1 are not supported. When using JSX it can be common to combine text nodes and value nodes. For example: <title>hello {nameOfUser}</title>. While not immediately apparent, `children` in this case is an Array with length 2. If your `children` prop is using this form try rewriting it using a template string: <title>{`hello ${nameOfUser}`}</title>.",
              to.length
            ) : typeof zo == "function" || typeof zo == "symbol" ? console.error(
              "React expect children of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found %s instead. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value.",
              typeof zo == "function" ? "a Function" : "a Sybmol"
            ) : zo && zo.toString === {}.toString && (zo.$$typeof != null ? console.error(
              "React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an object that appears to be a React element which never implements a suitable `toString` method. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value which is why rendering React elements is not supported. If the `children` of <title> is a React Component try moving the <title> tag into that component. If the `children` of <title> is some HTML markup change it to be Text only to be valid HTML."
            ) : console.error(
              "React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an object that does not implement a suitable `toString` method. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value. Using the default `toString` method available on every object is almost certainly an error. Consider whether the `children` of this <title> is an object in error and change it to a string or number value if so. Otherwise implement a `toString` method that React can use to produce a valid <title>."
            ));
          }
          if (_.insertionMode === fr || cc || u.itemProp != null)
            var ro = Il(
              e,
              u
            );
          else
            Us ? ro = null : (Il(b.hoistableChunks, u), ro = void 0);
          return ro;
        case "link":
          var sc = _.tagScope & 1, _s = _.tagScope & 4, Ss = u.rel, Hr = u.href, bi = u.precedence;
          if (_.insertionMode === fr || sc || u.itemProp != null || typeof Ss != "string" || typeof Hr != "string" || Hr === "") {
            Ss === "stylesheet" && typeof u.precedence == "string" && (typeof Hr == "string" && Hr || console.error(
              'React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and expected the `href` prop to be a non-empty string but ecountered %s instead. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop ensure there is a non-empty string `href` prop as well, otherwise remove the `precedence` prop.',
              Hr === null ? "`null`" : Hr === void 0 ? "`undefined`" : Hr === "" ? "an empty string" : 'something with type "' + typeof Hr + '"'
            )), Pr(e, u);
            var lo = null;
          } else if (u.rel === "stylesheet")
            if (typeof bi != "string" || u.disabled != null || u.onLoad || u.onError) {
              if (typeof bi == "string") {
                if (u.disabled != null)
                  console.error(
                    'React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and a `disabled` prop. The presence of the `disabled` prop indicates an intent to manage the stylesheet active state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the `disabled` prop, otherwise remove the `precedence` prop.'
                  );
                else if (u.onLoad || u.onError) {
                  var Gc = u.onLoad && u.onError ? "`onLoad` and `onError` props" : u.onLoad ? "`onLoad` prop" : "`onError` prop";
                  console.error(
                    'React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                    Gc,
                    Gc
                  );
                }
              }
              lo = Pr(
                e,
                u
              );
            } else {
              var pl = b.styles.get(bi), Pt = h.styleResources.hasOwnProperty(
                Hr
              ) ? h.styleResources[Hr] : void 0;
              if (Pt !== dn) {
                h.styleResources[Hr] = dn, pl || (pl = {
                  precedence: re(xe(bi)),
                  rules: [],
                  hrefs: [],
                  sheets: /* @__PURE__ */ new Map()
                }, b.styles.set(bi, pl));
                var it = {
                  state: fa,
                  props: Ln({}, u, {
                    "data-precedence": u.precedence,
                    precedence: null
                  })
                };
                if (Pt) {
                  Pt.length === 2 && Gi(it.props, Pt);
                  var zn = b.preloads.stylesheets.get(Hr);
                  zn && 0 < zn.length ? zn.length = 0 : it.state = nc;
                }
                pl.sheets.set(Hr, it), F && F.stylesheets.add(it);
              } else if (pl) {
                var Ps = pl.sheets.get(Hr);
                Ps && F && F.stylesheets.add(Ps);
              }
              V && e.push(xt), lo = null;
            }
          else
            u.onLoad || u.onError ? lo = Pr(
              e,
              u
            ) : (V && e.push(xt), lo = _s ? null : Pr(b.hoistableChunks, u));
          return lo;
        case "script":
          var Bo = _.tagScope & 1, Xc = u.async;
          if (typeof u.src != "string" || !u.src || !Xc || typeof Xc == "function" || typeof Xc == "symbol" || u.onLoad || u.onError || _.insertionMode === fr || Bo || u.itemProp != null)
            var No = Au(
              e,
              u
            );
          else {
            var Su = u.src;
            if (u.type === "module")
              var Zc = h.moduleScriptResources, Pu = b.preloads.moduleScripts;
            else
              Zc = h.scriptResources, Pu = b.preloads.scripts;
            var fc = Zc.hasOwnProperty(Su) ? Zc[Su] : void 0;
            if (fc !== dn) {
              Zc[Su] = dn;
              var hc = u;
              if (fc) {
                fc.length === 2 && (hc = Ln({}, u), Gi(hc, fc));
                var ys = Pu.get(Su);
                ys && (ys.length = 0);
              }
              var Fs = [];
              b.scripts.add(Fs), Au(Fs, hc);
            }
            V && e.push(xt), No = null;
          }
          return No;
        case "style":
          var ms = _.tagScope & 1;
          if (Rn.call(u, "children")) {
            var Vc = u.children, Jc = Array.isArray(Vc) ? 2 > Vc.length ? Vc[0] : null : Vc;
            (typeof Jc == "function" || typeof Jc == "symbol" || Array.isArray(Jc)) && console.error(
              "React expect children of <style> tags to be a string, number, or object with a `toString` method but found %s instead. In browsers style Elements can only have `Text` Nodes as children.",
              typeof Jc == "function" ? "a Function" : typeof Jc == "symbol" ? "a Sybmol" : "an Array"
            );
          }
          var Fu = u.precedence, io = u.href, ba = u.nonce;
          if (_.insertionMode === fr || ms || u.itemProp != null || typeof Fu != "string" || typeof io != "string" || io === "") {
            e.push(In("style"));
            var jr = null, dc = null, Ds;
            for (Ds in u)
              if (Rn.call(u, Ds)) {
                var Ys = u[Ds];
                if (Ys != null)
                  switch (Ds) {
                    case "children":
                      jr = Ys;
                      break;
                    case "dangerouslySetInnerHTML":
                      dc = Ys;
                      break;
                    default:
                      wn(
                        e,
                        Ds,
                        Ys
                      );
                  }
              }
            e.push(et);
            var ps = Array.isArray(jr) ? 2 > jr.length ? jr[0] : null : jr;
            typeof ps != "function" && typeof ps != "symbol" && ps !== null && ps !== void 0 && e.push(
              re(Ml(ps))
            ), _t(
              e,
              dc,
              jr
            ), e.push(ht("style"));
            var af = null;
          } else {
            io.includes(" ") && console.error(
              'React expected the `href` prop for a <style> tag opting into hoisting semantics using the `precedence` prop to not have any spaces but ecountered spaces instead. using spaces in this prop will cause hydration of this style to fail on the client. The href for the <style> where this ocurred is "%s".',
              io
            );
            var ws = b.styles.get(Fu), of = h.styleResources.hasOwnProperty(io) ? h.styleResources[io] : void 0;
            if (of !== dn) {
              h.styleResources[io] = dn, of && console.error(
                'React encountered a hoistable style tag for the same href as a preload: "%s". When using a style tag to inline styles you should not also preload it as a stylsheet.',
                io
              ), ws || (ws = {
                precedence: re(
                  xe(Fu)
                ),
                rules: [],
                hrefs: [],
                sheets: /* @__PURE__ */ new Map()
              }, b.styles.set(
                Fu,
                ws
              ));
              var Ls = b.nonce.style;
              if (Ls && Ls !== ba)
                console.error(
                  'React encountered a style tag with `precedence` "%s" and `nonce` "%s". When React manages style rules using `precedence` it will only include rules if the nonce matches the style nonce "%s" that was included with this render.',
                  Fu,
                  ba,
                  Ls
                );
              else {
                !Ls && ba && console.error(
                  'React encountered a style tag with `precedence` "%s" and `nonce` "%s". When React manages style rules using `precedence` it will only include a nonce attributes if you also provide the same style nonce value as a render option.',
                  Fu,
                  ba
                ), ws.hrefs.push(
                  re(xe(io))
                );
                var Gs = ws.rules, Xs = null, Sf = null, uf;
                for (uf in u)
                  if (Rn.call(u, uf)) {
                    var vf = u[uf];
                    if (vf != null)
                      switch (uf) {
                        case "children":
                          Xs = vf;
                          break;
                        case "dangerouslySetInnerHTML":
                          Sf = vf;
                      }
                  }
                var Js = Array.isArray(Xs) ? 2 > Xs.length ? Xs[0] : null : Xs;
                typeof Js != "function" && typeof Js != "symbol" && Js !== null && Js !== void 0 && Gs.push(
                  re(Ml(Js))
                ), _t(Gs, Sf, Xs);
              }
            }
            ws && F && F.styles.add(ws), V && e.push(xt), af = void 0;
          }
          return af;
        case "meta":
          var nh = _.tagScope & 1, th = _.tagScope & 4;
          if (_.insertionMode === fr || nh || u.itemProp != null)
            var Pf = Ft(
              e,
              u,
              "meta"
            );
          else
            V && e.push(xt), Pf = th ? null : typeof u.charSet == "string" ? Ft(b.charsetChunks, u, "meta") : u.name === "viewport" ? Ft(b.viewportChunks, u, "meta") : Ft(
              b.hoistableChunks,
              u,
              "meta"
            );
          return Pf;
        case "listing":
        case "pre":
          e.push(In(t));
          var Qs = null, Ks = null, qs;
          for (qs in u)
            if (Rn.call(u, qs)) {
              var cf = u[qs];
              if (cf != null)
                switch (qs) {
                  case "children":
                    Qs = cf;
                    break;
                  case "dangerouslySetInnerHTML":
                    Ks = cf;
                    break;
                  default:
                    wn(
                      e,
                      qs,
                      cf
                    );
                }
            }
          if (e.push(et), Ks != null) {
            if (Qs != null)
              throw Error(
                "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
              );
            if (typeof Ks != "object" || !("__html" in Ks))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            var As = Ks.__html;
            As != null && (typeof As == "string" && 0 < As.length && As[0] === `
` ? e.push(Vu, re(As)) : (_n(As), e.push(re("" + As))));
          }
          return typeof Qs == "string" && Qs[0] === `
` && e.push(Vu), Qs;
        case "img":
          var rh = _.tagScope & 3, Wi = u.src, yi = u.srcSet;
          if (!(u.loading === "lazy" || !Wi && !yi || typeof Wi != "string" && Wi != null || typeof yi != "string" && yi != null || u.fetchPriority === "low" || rh) && (typeof Wi != "string" || Wi[4] !== ":" || Wi[0] !== "d" && Wi[0] !== "D" || Wi[1] !== "a" && Wi[1] !== "A" || Wi[2] !== "t" && Wi[2] !== "T" || Wi[3] !== "a" && Wi[3] !== "A") && (typeof yi != "string" || yi[4] !== ":" || yi[0] !== "d" && yi[0] !== "D" || yi[1] !== "a" && yi[1] !== "A" || yi[2] !== "t" && yi[2] !== "T" || yi[3] !== "a" && yi[3] !== "A")) {
            F !== null && _.tagScope & 64 && (F.suspenseyImages = !0);
            var Ff = typeof u.sizes == "string" ? u.sizes : void 0, Zs = yi ? yi + `
` + (Ff || "") : Wi, bf = b.preloads.images, Hs = bf.get(Zs);
            if (Hs)
              (u.fetchPriority === "high" || 10 > b.highImagePreloads.size) && (bf.delete(Zs), b.highImagePreloads.add(Hs));
            else if (!h.imageResources.hasOwnProperty(Zs)) {
              h.imageResources[Zs] = Lt;
              var yf = u.crossOrigin, pf = typeof yf == "string" ? yf === "use-credentials" ? yf : "" : void 0, zs = b.headers, wf;
              zs && 0 < zs.remainingCapacity && typeof u.srcSet != "string" && (u.fetchPriority === "high" || 500 > zs.highImagePreloads.length) && (wf = Xi(Wi, "image", {
                imageSrcSet: u.srcSet,
                imageSizes: u.sizes,
                crossOrigin: pf,
                integrity: u.integrity,
                nonce: u.nonce,
                type: u.type,
                fetchPriority: u.fetchPriority,
                referrerPolicy: u.refererPolicy
              }), 0 <= (zs.remainingCapacity -= wf.length + 2)) ? (b.resets.image[Zs] = Lt, zs.highImagePreloads && (zs.highImagePreloads += ", "), zs.highImagePreloads += wf) : (Hs = [], Pr(Hs, {
                rel: "preload",
                as: "image",
                href: yi ? void 0 : Wi,
                imageSrcSet: yi,
                imageSizes: Ff,
                crossOrigin: pf,
                integrity: u.integrity,
                type: u.type,
                fetchPriority: u.fetchPriority,
                referrerPolicy: u.referrerPolicy
              }), u.fetchPriority === "high" || 10 > b.highImagePreloads.size ? b.highImagePreloads.add(Hs) : (b.bulkPreloads.add(Hs), bf.set(Zs, Hs)));
            }
          }
          return Ft(e, u, "img");
        case "base":
        case "area":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "param":
        case "source":
        case "track":
        case "wbr":
          return Ft(e, u, t);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          break;
        case "head":
          if (_.insertionMode < sr) {
            var Tf = x || b.preamble;
            if (Tf.headChunks)
              throw Error("The `<head>` tag may only be rendered once.");
            x !== null && e.push(du), Tf.headChunks = [];
            var Af = on(
              Tf.headChunks,
              u,
              "head"
            );
          } else
            Af = ar(
              e,
              u,
              "head"
            );
          return Af;
        case "body":
          if (_.insertionMode < sr) {
            var xf = x || b.preamble;
            if (xf.bodyChunks)
              throw Error("The `<body>` tag may only be rendered once.");
            x !== null && e.push(_c), xf.bodyChunks = [];
            var Mf = on(
              xf.bodyChunks,
              u,
              "body"
            );
          } else
            Mf = ar(
              e,
              u,
              "body"
            );
          return Mf;
        case "html":
          if (_.insertionMode === xo) {
            var Ef = x || b.preamble;
            if (Ef.htmlChunks)
              throw Error("The `<html>` tag may only be rendered once.");
            x !== null && e.push(mc), Ef.htmlChunks = [Et];
            var If = on(
              Ef.htmlChunks,
              u,
              "html"
            );
          } else
            If = ar(
              e,
              u,
              "html"
            );
          return If;
        default:
          if (t.indexOf("-") !== -1) {
            e.push(In(t));
            var Rf = null, Of = null, Vs;
            for (Vs in u)
              if (Rn.call(u, Vs)) {
                var gc = u[Vs];
                if (gc != null) {
                  var _f = Vs;
                  switch (Vs) {
                    case "children":
                      Rf = gc;
                      break;
                    case "dangerouslySetInnerHTML":
                      Of = gc;
                      break;
                    case "style":
                      Al(e, gc);
                      break;
                    case "suppressContentEditableWarning":
                    case "suppressHydrationWarning":
                    case "ref":
                      break;
                    case "className":
                      _f = "class";
                    default:
                      if (mn(Vs) && typeof gc != "function" && typeof gc != "symbol" && gc !== !1) {
                        if (gc === !0)
                          gc = "";
                        else if (typeof gc == "object")
                          continue;
                        e.push(
                          dt,
                          re(_f),
                          ul,
                          re(
                            xe(gc)
                          ),
                          Je
                        );
                      }
                  }
                }
              }
            return e.push(et), _t(
              e,
              Of,
              Rf
            ), Rf;
          }
      }
      return ar(e, u, t);
    }
    function ht(e) {
      var t = Ju.get(e);
      return t === void 0 && (t = Z("</" + e + ">"), Ju.set(e, t)), t;
    }
    function yc(e, t) {
      e = e.preamble, e.htmlChunks === null && t.htmlChunks && (e.htmlChunks = t.htmlChunks), e.headChunks === null && t.headChunks && (e.headChunks = t.headChunks), e.bodyChunks === null && t.bodyChunks && (e.bodyChunks = t.bodyChunks);
    }
    function wc(e, t) {
      t = t.bootstrapChunks;
      for (var u = 0; u < t.length - 1; u++)
        N(e, t[u]);
      return u < t.length ? (u = t[u], t.length = 0, Re(e, u)) : !0;
    }
    function wi(e, t, u) {
      if (N(e, oa), u === null)
        throw Error(
          "An ID must have been assigned before we can complete the boundary."
        );
      return N(e, t.boundaryPrefix), N(e, re(u.toString(16))), Re(e, yl);
    }
    function Tc(e, t, u, h) {
      switch (u.insertionMode) {
        case xo:
        case ra:
        case uu:
        case sr:
          return N(e, us), N(e, t.segmentPrefix), N(e, re(h.toString(16))), Re(e, Wl);
        case fr:
          return N(e, cl), N(e, t.segmentPrefix), N(e, re(h.toString(16))), Re(e, sa);
        case ol:
          return N(e, wl), N(e, t.segmentPrefix), N(e, re(h.toString(16))), Re(e, zc);
        case Oi:
          return N(e, Po), N(e, t.segmentPrefix), N(e, re(h.toString(16))), Re(e, l);
        case cu:
          return N(e, s), N(e, t.segmentPrefix), N(e, re(h.toString(16))), Re(e, v);
        case _i:
          return N(e, C), N(e, t.segmentPrefix), N(e, re(h.toString(16))), Re(e, S);
        case Gu:
          return N(e, O), N(e, t.segmentPrefix), N(e, re(h.toString(16))), Re(e, z);
        default:
          throw Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function Uo(e, t) {
      switch (t.insertionMode) {
        case xo:
        case ra:
        case uu:
        case sr:
          return Re(e, So);
        case fr:
          return Re(e, Ga);
        case ol:
          return Re(e, cs);
        case Oi:
          return Re(e, a);
        case cu:
          return Re(e, w);
        case _i:
          return Re(e, H);
        case Gu:
          return Re(e, G);
        default:
          throw Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function Ta(e) {
      return JSON.stringify(e).replace(
        xl,
        function(t) {
          switch (t) {
            case "<":
              return "\\u003c";
            case "\u2028":
              return "\\u2028";
            case "\u2029":
              return "\\u2029";
            default:
              throw Error(
                "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
              );
          }
        }
      );
    }
    function Yi(e) {
      return JSON.stringify(e).replace(
        vr,
        function(t) {
          switch (t) {
            case "&":
              return "\\u0026";
            case ">":
              return "\\u003e";
            case "<":
              return "\\u003c";
            case "\u2028":
              return "\\u2028";
            case "\u2029":
              return "\\u2029";
            default:
              throw Error(
                "escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
              );
          }
        }
      );
    }
    function xa(e) {
      var t = e.rules, u = e.hrefs;
      0 < t.length && u.length === 0 && console.error(
        "React expected to have at least one href for an a hoistable style but found none. This is a bug in React."
      );
      var h = 0;
      if (u.length) {
        for (N(this, Qe.startInlineStyle), N(this, Ul), N(this, e.precedence), N(this, br); h < u.length - 1; h++)
          N(this, u[h]), N(this, Xn);
        for (N(this, u[h]), N(this, Za), h = 0; h < t.length; h++) N(this, t[h]);
        po = Re(
          this,
          Fo
        ), mr = !0, t.length = 0, u.length = 0;
      }
    }
    function Yo(e) {
      return e.state !== oi ? mr = !0 : !1;
    }
    function qn(e, t, u) {
      return mr = !1, po = !0, Qe = u, t.styles.forEach(xa, e), Qe = null, t.stylesheets.forEach(Yo), mr && (u.stylesToHoist = !0), po;
    }
    function Nn(e) {
      for (var t = 0; t < e.length; t++) N(this, e[t]);
      e.length = 0;
    }
    function Mu(e) {
      Pr(yr, e.props);
      for (var t = 0; t < yr.length; t++)
        N(this, yr[t]);
      yr.length = 0, e.state = oi;
    }
    function Ea(e) {
      var t = 0 < e.sheets.size;
      e.sheets.forEach(Mu, this), e.sheets.clear();
      var u = e.rules, h = e.hrefs;
      if (!t || h.length) {
        if (N(this, Qe.startInlineStyle), N(this, Va), N(this, e.precedence), e = 0, h.length) {
          for (N(this, Bc); e < h.length - 1; e++)
            N(this, h[e]), N(this, Xn);
          N(this, h[e]);
        }
        for (N(this, Ao), e = 0; e < u.length; e++)
          N(this, u[e]);
        N(this, Yl), u.length = 0, h.length = 0;
      }
    }
    function Kc(e) {
      if (e.state === fa) {
        e.state = nc;
        var t = e.props;
        for (Pr(yr, {
          rel: "preload",
          as: "style",
          href: e.props.href,
          crossOrigin: t.crossOrigin,
          fetchPriority: t.fetchPriority,
          integrity: t.integrity,
          media: t.media,
          hrefLang: t.hrefLang,
          referrerPolicy: t.referrerPolicy
        }), e = 0; e < yr.length; e++)
          N(this, yr[e]);
        yr.length = 0;
      }
    }
    function xc(e) {
      e.sheets.forEach(Kc, this), e.sheets.clear();
    }
    function hl(e, t) {
      (t.instructions & hn) === $n && (t.instructions |= hn, e.push(
        ju,
        re(
          xe("_" + t.idPrefix + "R_")
        ),
        Je
      ));
    }
    function Ql(e, t) {
      N(e, Ja);
      var u = Ja;
      t.stylesheets.forEach(function(h) {
        if (h.state !== oi)
          if (h.state === Qa)
            N(e, u), h = h.props.href, ut(h, "href"), N(
              e,
              re(
                Yi("" + h)
              )
            ), N(e, Mo), u = $u;
          else {
            N(e, u);
            var b = h.props["data-precedence"], x = h.props, F = K("" + h.props.href);
            N(
              e,
              re(Yi(F))
            ), ut(b, "precedence"), b = "" + b, N(e, ec), N(
              e,
              re(Yi(b))
            );
            for (var _ in x)
              if (Rn.call(x, _) && (b = x[_], b != null))
                switch (_) {
                  case "href":
                  case "rel":
                  case "precedence":
                  case "data-precedence":
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      "link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    qc(
                      e,
                      _,
                      b
                    );
                }
            N(e, Mo), u = $u, h.state = Qa;
          }
      }), N(e, Mo);
    }
    function qc(e, t, u) {
      var h = t.toLowerCase();
      switch (typeof u) {
        case "function":
        case "symbol":
          return;
      }
      switch (t) {
        case "innerHTML":
        case "dangerouslySetInnerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "style":
        case "ref":
          return;
        case "className":
          h = "class", ut(u, h), t = "" + u;
          break;
        case "hidden":
          if (u === !1) return;
          t = "";
          break;
        case "src":
        case "href":
          u = K(u), ut(u, h), t = "" + u;
          break;
        default:
          if (2 < t.length && (t[0] === "o" || t[0] === "O") && (t[1] === "n" || t[1] === "N") || !mn(t))
            return;
          ut(u, h), t = "" + u;
      }
      N(e, ec), N(
        e,
        re(Yi(h))
      ), N(e, ec), N(
        e,
        re(Yi(t))
      );
    }
    function Ra() {
      return { styles: /* @__PURE__ */ new Set(), stylesheets: /* @__PURE__ */ new Set(), suspenseyImages: !1 };
    }
    function ct(e, t, u, h) {
      (e.scriptResources.hasOwnProperty(u) || e.moduleScriptResources.hasOwnProperty(u)) && console.error(
        'Internal React Error: React expected bootstrap script or module with src "%s" to not have been preloaded already. please file an issue',
        u
      ), e.scriptResources[u] = dn, e.moduleScriptResources[u] = dn, e = [], Pr(e, h), t.bootstrapScripts.add(e);
    }
    function Gi(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t[0]), e.integrity == null && (e.integrity = t[1]);
    }
    function Xi(e, t, u) {
      e = Ca(e), t = Nr(t, "as"), t = "<" + e + '>; rel=preload; as="' + t + '"';
      for (var h in u)
        Rn.call(u, h) && (e = u[h], typeof e == "string" && (t += "; " + h.toLowerCase() + '="' + Nr(
          e,
          h
        ) + '"'));
      return t;
    }
    function Ca(e) {
      return ut(e, "href"), ("" + e).replace(
        Ka,
        Jt
      );
    }
    function Jt(e) {
      switch (e) {
        case "<":
          return "%3C";
        case ">":
          return "%3E";
        case `
`:
          return "%0A";
        case "\r":
          return "%0D";
        default:
          throw Error(
            "escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
          );
      }
    }
    function Nr(e, t) {
      return $r(e) && (console.error(
        "The provided `%s` option is an unsupported type %s. This value must be coerced to a string before using it here.",
        t,
        zr(e)
      ), Sr(e)), ("" + e).replace(
        ss,
        Pn
      );
    }
    function Pn(e) {
      switch (e) {
        case '"':
          return "%22";
        case "'":
          return "%27";
        case ";":
          return "%3B";
        case ",":
          return "%2C";
        case `
`:
          return "%0A";
        case "\r":
          return "%0D";
        default:
          throw Error(
            "escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
          );
      }
    }
    function Go(e) {
      this.styles.add(e);
    }
    function nl(e) {
      this.stylesheets.add(e);
    }
    function un(e, t) {
      t.styles.forEach(Go, e), t.stylesheets.forEach(nl, e), t.suspenseyImages && (e.suspenseyImages = !0);
    }
    function jc(e) {
      return 0 < e.stylesheets.size || e.suspenseyImages;
    }
    function je(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === fs ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case Fi:
          return "Fragment";
        case iu:
          return "Profiler";
        case lu:
          return "StrictMode";
        case $i:
          return "Suspense";
        case Ia:
          return "SuspenseList";
        case Ut:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case ru:
            return "Portal";
          case Yn:
            return e.displayName || "Context";
          case Ir:
            return (e._context.displayName || "Context") + ".Consumer";
          case sn:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Oa:
            return t = e.displayName || null, t !== null ? t : je(e.type) || "Memo";
          case ea:
            t = e._payload, e = e._init;
            try {
              return je(e(t));
            } catch {
            }
        }
      return null;
    }
    function Xo(e, t) {
      if (e !== t) {
        e.context._currentValue = e.parentValue, e = e.parent;
        var u = t.parent;
        if (e === null) {
          if (u !== null)
            throw Error(
              "The stacks must reach the root at the same time. This is a bug in React."
            );
        } else {
          if (u === null)
            throw Error(
              "The stacks must reach the root at the same time. This is a bug in React."
            );
          Xo(e, u);
        }
        t.context._currentValue = t.value;
      }
    }
    function Zo(e) {
      e.context._currentValue = e.parentValue, e = e.parent, e !== null && Zo(e);
    }
    function Vo(e) {
      var t = e.parent;
      t !== null && Vo(t), e.context._currentValue = e.value;
    }
    function Kl(e, t) {
      if (e.context._currentValue = e.parentValue, e = e.parent, e === null)
        throw Error(
          "The depth must equal at least at zero before reaching the root. This is a bug in React."
        );
      e.depth === t.depth ? Xo(e, t) : Kl(e, t);
    }
    function En(e, t) {
      var u = t.parent;
      if (u === null)
        throw Error(
          "The depth must equal at least at zero before reaching the root. This is a bug in React."
        );
      e.depth === u.depth ? Xo(e, u) : En(e, u), t.context._currentValue = t.value;
    }
    function cn(e) {
      var t = Li;
      t !== e && (t === null ? Vo(e) : e === null ? Zo(t) : t.depth === e.depth ? Xo(t, e) : t.depth > e.depth ? Kl(t, e) : En(t, e), Li = e);
    }
    function Ol(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        Wc.has(t) || (Wc.add(t), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function Qt(e, t) {
      e = (e = e.constructor) && je(e) || "ReactClass";
      var u = e + "." + t;
      tc[u] || (console.error(
        `Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`,
        t,
        e
      ), tc[u] = !0);
    }
    function ka(e, t, u) {
      var h = e.id;
      e = e.overflow;
      var b = 32 - Oo(h) - 1;
      h &= ~(1 << b), u += 1;
      var x = 32 - Oo(t) + b;
      if (30 < x) {
        var F = b - b % 5;
        return x = (h & (1 << F) - 1).toString(32), h >>= F, b -= F, {
          id: 1 << 32 - Oo(t) + b | u << b | h,
          overflow: x + e
        };
      }
      return {
        id: 1 << x | u << b | h,
        overflow: e
      };
    }
    function Iu(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (Ms(e) / Is | 0) | 0;
    }
    function or() {
    }
    function $c(e, t, u) {
      switch (u = e[u], u === void 0 ? e.push(t) : u !== t && (t.then(or, or), t = u), t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw t.reason;
        default:
          switch (typeof t.status == "string" ? t.then(or, or) : (e = t, e.status = "pending", e.then(
            function(h) {
              if (t.status === "pending") {
                var b = t;
                b.status = "fulfilled", b.value = h;
              }
            },
            function(h) {
              if (t.status === "pending") {
                var b = t;
                b.status = "rejected", b.reason = h;
              }
            }
          )), t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw t.reason;
          }
          throw gs = t, ui;
      }
    }
    function Ec() {
      if (gs === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = gs;
      return gs = null, e;
    }
    function Ou(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function Wn() {
      if (Gt === null)
        throw Error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        );
      return Gl && console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      ), Gt;
    }
    function _u() {
      if (0 < Tu)
        throw Error("Rendered more hooks than during the previous render");
      return { memoizedState: null, queue: null, next: null };
    }
    function ao() {
      return xn === null ? Rl === null ? (Yr = !1, Rl = xn = _u()) : (Yr = !0, xn = Rl) : xn.next === null ? (Yr = !1, xn = xn.next = _u()) : (Yr = !0, xn = xn.next), xn;
    }
    function tl() {
      var e = _o;
      return _o = null, e;
    }
    function Sa() {
      Gl = !1, da = wr = Hi = Gt = null, zi = !1, Rl = null, Tu = 0, xn = ja = null;
    }
    function es(e) {
      return Gl && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), e._currentValue;
    }
    function ns(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function oo(e, t, u) {
      if (e !== ns && ($a = "useReducer"), Gt = Wn(), xn = ao(), Yr) {
        if (u = xn.queue, t = u.dispatch, ja !== null) {
          var h = ja.get(u);
          if (h !== void 0) {
            ja.delete(u), u = xn.memoizedState;
            do {
              var b = h.action;
              Gl = !0, u = e(u, b), Gl = !1, h = h.next;
            } while (h !== null);
            return xn.memoizedState = u, [u, t];
          }
        }
        return [xn.memoizedState, t];
      }
      return Gl = !0, e = e === ns ? typeof t == "function" ? t() : t : u !== void 0 ? u(t) : t, Gl = !1, xn.memoizedState = e, e = xn.queue = { last: null, dispatch: null }, e = e.dispatch = ql.bind(
        null,
        Gt,
        e
      ), [xn.memoizedState, e];
    }
    function uo(e, t) {
      if (Gt = Wn(), xn = ao(), t = t === void 0 ? null : t, xn !== null) {
        var u = xn.memoizedState;
        if (u !== null && t !== null) {
          e: {
            var h = u[1];
            if (h === null)
              console.error(
                "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
                $a
              ), h = !1;
            else {
              t.length !== h.length && console.error(
                `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
                $a,
                "[" + t.join(", ") + "]",
                "[" + h.join(", ") + "]"
              );
              for (var b = 0; b < h.length && b < t.length; b++)
                if (!Os(t[b], h[b])) {
                  h = !1;
                  break e;
                }
              h = !0;
            }
          }
          if (h) return u[0];
        }
      }
      return Gl = !0, e = e(), Gl = !1, xn.memoizedState = [e, t], e;
    }
    function ql(e, t, u) {
      if (25 <= Tu)
        throw Error(
          "Too many re-renders. React limits the number of renders to prevent an infinite loop."
        );
      if (e === Gt)
        if (zi = !0, e = { action: u, next: null }, ja === null && (ja = /* @__PURE__ */ new Map()), u = ja.get(t), u === void 0)
          ja.set(t, e);
        else {
          for (t = u; t.next !== null; ) t = t.next;
          t.next = e;
        }
    }
    function jl() {
      throw Error(
        "A function wrapped in useEffectEvent can't be called during rendering."
      );
    }
    function mu() {
      throw Error("startTransition cannot be called during server rendering.");
    }
    function Jo() {
      throw Error("Cannot update optimistic state while rendering.");
    }
    function Qo(e, t, u) {
      Wn();
      var h = wu++, b = wr;
      if (typeof e.$$FORM_ACTION == "function") {
        var x = null, F = da;
        b = b.formState;
        var _ = e.$$IS_SIGNATURE_EQUAL;
        if (b !== null && typeof _ == "function") {
          var V = b[1];
          _.call(e, b[2], b[3]) && (x = u !== void 0 ? "p" + u : "k" + Ae(
            JSON.stringify([
              F,
              null,
              h
            ]),
            0
          ), V === x && (oc = h, t = b[0]));
        }
        var L = e.bind(null, t);
        return e = function(ie) {
          L(ie);
        }, typeof L.$$FORM_ACTION == "function" && (e.$$FORM_ACTION = function(ie) {
          ie = L.$$FORM_ACTION(ie), u !== void 0 && (ut(u, "target"), u += "", ie.action = u);
          var ue = ie.data;
          return ue && (x === null && (x = u !== void 0 ? "p" + u : "k" + Ae(
            JSON.stringify([
              F,
              null,
              h
            ]),
            0
          )), ue.append("$ACTION_KEY", x)), ie;
        }), [t, e, !1];
      }
      var W = e.bind(null, t);
      return [
        t,
        function(ie) {
          W(ie);
        },
        !1
      ];
    }
    function pt(e) {
      var t = vs;
      return vs += 1, _o === null && (_o = []), $c(_o, e, t);
    }
    function co() {
      throw Error("Cache cannot be refreshed during server rendering.");
    }
    function Ko() {
    }
    function Du() {
      if (d === 0) {
        y = console.log, R = console.info, I = console.warn, D = console.error, ee = console.group, B = console.groupCollapsed, Q = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: Ko,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      d++;
    }
    function $l() {
      if (d--, d === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: Ln({}, e, { value: y }),
          info: Ln({}, e, { value: R }),
          warn: Ln({}, e, { value: I }),
          error: Ln({}, e, { value: D }),
          group: Ln({}, e, { value: ee }),
          groupCollapsed: Ln({}, e, { value: B }),
          groupEnd: Ln({}, e, { value: Q })
        });
      }
      0 > d && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function qo(e) {
      var t = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, e = e.stack, Error.prepareStackTrace = t, e.startsWith(`Error: react-stack-top-frame
`) && (e = e.slice(29)), t = e.indexOf(`
`), t !== -1 && (e = e.slice(t + 1)), t = e.indexOf("react_stack_bottom_frame"), t !== -1 && (t = e.lastIndexOf(
        `
`,
        t
      )), t !== -1)
        e = e.slice(0, t);
      else return "";
      return e;
    }
    function Fr(e) {
      if (se === void 0)
        try {
          throw Error();
        } catch (u) {
          var t = u.stack.trim().match(/\n( *(at )?)/);
          se = t && t[1] || "", ye = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + se + e + ye;
    }
    function _l(e, t) {
      if (!e || he) return "";
      var u = le.get(e);
      if (u !== void 0) return u;
      he = !0, u = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var h = null;
      h = Ve.H, Ve.H = null, Du();
      try {
        var b = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var ue = function() {
                  throw Error();
                };
                if (Object.defineProperty(ue.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(ue, []);
                  } catch (te) {
                    var ae = te;
                  }
                  Reflect.construct(e, [], ue);
                } else {
                  try {
                    ue.call();
                  } catch (te) {
                    ae = te;
                  }
                  e.call(ue.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (te) {
                  ae = te;
                }
                (ue = e()) && typeof ue.catch == "function" && ue.catch(function() {
                });
              }
            } catch (te) {
              if (te && ae && typeof te.stack == "string")
                return [te.stack, ae.stack];
            }
            return [null, null];
          }
        };
        b.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var x = Object.getOwnPropertyDescriptor(
          b.DetermineComponentFrameRoot,
          "name"
        );
        x && x.configurable && Object.defineProperty(
          b.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var F = b.DetermineComponentFrameRoot(), _ = F[0], V = F[1];
        if (_ && V) {
          var L = _.split(`
`), W = V.split(`
`);
          for (F = x = 0; x < L.length && !L[x].includes(
            "DetermineComponentFrameRoot"
          ); )
            x++;
          for (; F < W.length && !W[F].includes(
            "DetermineComponentFrameRoot"
          ); )
            F++;
          if (x === L.length || F === W.length)
            for (x = L.length - 1, F = W.length - 1; 1 <= x && 0 <= F && L[x] !== W[F]; )
              F--;
          for (; 1 <= x && 0 <= F; x--, F--)
            if (L[x] !== W[F]) {
              if (x !== 1 || F !== 1)
                do
                  if (x--, F--, 0 > F || L[x] !== W[F]) {
                    var ie = `
` + L[x].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && ie.includes("<anonymous>") && (ie = ie.replace("<anonymous>", e.displayName)), typeof e == "function" && le.set(e, ie), ie;
                  }
                while (1 <= x && 0 <= F);
              break;
            }
        }
      } finally {
        he = !1, Ve.H = h, $l(), Error.prepareStackTrace = u;
      }
      return L = (L = e ? e.displayName || e.name : "") ? Fr(L) : "", typeof e == "function" && le.set(e, L), L;
    }
    function Rc(e) {
      if (typeof e == "string") return Fr(e);
      if (typeof e == "function")
        return e.prototype && e.prototype.isReactComponent ? _l(e, !0) : _l(e, !1);
      if (typeof e == "object" && e !== null) {
        switch (e.$$typeof) {
          case sn:
            return _l(e.render, !1);
          case Oa:
            return _l(e.type, !1);
          case ea:
            var t = e, u = t._payload;
            t = t._init;
            try {
              e = t(u);
            } catch {
              return Fr("Lazy");
            }
            return Rc(e);
        }
        if (typeof e.name == "string") {
          e: {
            if (u = e.name, t = e.env, e = e.debugLocation, e != null) {
              e = qo(e);
              var h = e.lastIndexOf(`
`);
              if (e = h === -1 ? e : e.slice(h + 1), e.indexOf(u) !== -1) {
                u = `
` + e;
                break e;
              }
            }
            u = Fr(
              u + (t ? " [" + t + "]" : "")
            );
          }
          return u;
        }
      }
      switch (e) {
        case Ia:
          return Fr("SuspenseList");
        case $i:
          return Fr("Suspense");
      }
      return "";
    }
    function jo() {
      var e = ci();
      1e3 < e - yn && (Ve.recentlyCreatedOwnerStacks = 0, yn = e);
    }
    function pr(e, t) {
      return (500 < t.byteSize || jc(t.contentState)) && t.contentPreamble === null;
    }
    function $o(e) {
      if (typeof e == "object" && e !== null && typeof e.environmentName == "string") {
        var t = e.environmentName;
        e = [e].slice(0), typeof e[0] == "string" ? e.splice(
          0,
          1,
          "%c%s%c " + e[0],
          "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",
          " " + t + " ",
          ""
        ) : e.splice(
          0,
          0,
          "%c%s%c",
          "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",
          " " + t + " ",
          ""
        ), e.unshift(console), t = El.apply(console.error, e), t();
      } else console.error(e);
      return null;
    }
    function Zi(e, t, u, h, b, x, F, _, V, L, W) {
      var ie = /* @__PURE__ */ new Set();
      this.destination = null, this.flushScheduled = !1, this.resumableState = e, this.renderState = t, this.rootFormatContext = u, this.progressiveChunkSize = h === void 0 ? 12800 : h, this.status = 10, this.fatalError = null, this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0, this.completedPreambleSegments = this.completedRootSegment = null, this.byteSize = 0, this.abortableTasks = ie, this.pingedTasks = [], this.clientRenderedBoundaries = [], this.completedBoundaries = [], this.partialBoundaries = [], this.trackedPostpones = null, this.onError = b === void 0 ? $o : b, this.onPostpone = L === void 0 ? or : L, this.onAllReady = x === void 0 ? or : x, this.onShellReady = F === void 0 ? or : F, this.onShellError = _ === void 0 ? or : _, this.onFatalError = V === void 0 ? or : V, this.formState = W === void 0 ? null : W, this.didWarnForKey = null;
    }
    function so(e, t, u, h, b, x, F, _, V, L, W, ie) {
      return jo(), t = new Zi(
        t,
        u,
        h,
        b,
        x,
        F,
        _,
        V,
        L,
        W,
        ie
      ), u = xi(
        t,
        0,
        null,
        h,
        !1,
        !1
      ), u.parentFlushed = !0, e = ml(
        t,
        null,
        e,
        -1,
        null,
        u,
        null,
        null,
        t.abortableTasks,
        null,
        h,
        null,
        ac,
        null,
        null,
        sl,
        null
      ), Ri(e), t.pingedTasks.push(e), t;
    }
    function Ar(e, t, u, h, b, x, F, _, V, L, W) {
      return e = so(
        e,
        t,
        u,
        h,
        b,
        x,
        F,
        _,
        V,
        L,
        W,
        void 0
      ), e.trackedPostpones = {
        workingMap: /* @__PURE__ */ new Map(),
        rootNodes: [],
        rootSlots: null
      }, e;
    }
    function mt(e, t, u, h, b, x, F, _, V) {
      return jo(), u = new Zi(
        t.resumableState,
        u,
        t.rootFormatContext,
        t.progressiveChunkSize,
        h,
        b,
        x,
        F,
        _,
        V,
        null
      ), u.nextSegmentId = t.nextSegmentId, typeof t.replaySlots == "number" ? (h = xi(
        u,
        0,
        null,
        t.rootFormatContext,
        !1,
        !1
      ), h.parentFlushed = !0, e = ml(
        u,
        null,
        e,
        -1,
        null,
        h,
        null,
        null,
        u.abortableTasks,
        null,
        t.rootFormatContext,
        null,
        ac,
        null,
        null,
        sl,
        null
      ), Ri(e), u.pingedTasks.push(e), u) : (e = kc(
        u,
        null,
        {
          nodes: t.replayNodes,
          slots: t.replaySlots,
          pendingTasks: 0
        },
        e,
        -1,
        null,
        null,
        u.abortableTasks,
        null,
        t.rootFormatContext,
        null,
        ac,
        null,
        null,
        sl,
        null
      ), Ri(e), u.pingedTasks.push(e), u);
    }
    function Dn(e, t, u, h, b, x, F, _, V) {
      return e = mt(
        e,
        t,
        u,
        h,
        b,
        x,
        F,
        _,
        V
      ), e.trackedPostpones = {
        workingMap: /* @__PURE__ */ new Map(),
        rootNodes: [],
        rootSlots: null
      }, e;
    }
    function Cc(e, t) {
      e.pingedTasks.push(t), e.pingedTasks.length === 1 && (e.flushScheduled = e.destination !== null, e.trackedPostpones !== null || e.status === 10 ? ma(function() {
        return ji(e);
      }) : _e(function() {
        return ji(e);
      }));
    }
    function Ti(e, t, u, h, b) {
      return u = {
        status: Cn,
        rootSegmentID: -1,
        parentFlushed: !1,
        pendingTasks: 0,
        row: t,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks: u,
        errorDigest: null,
        contentState: Ra(),
        fallbackState: Ra(),
        contentPreamble: h,
        fallbackPreamble: b,
        trackedContentKeyPath: null,
        trackedFallbackNode: null,
        errorMessage: null,
        errorStack: null,
        errorComponentStack: null
      }, t !== null && (t.pendingTasks++, h = t.boundaries, h !== null && (e.allPendingTasks++, u.pendingTasks++, h.push(u)), e = t.inheritedHoistables, e !== null && un(u.contentState, e)), u;
    }
    function ml(e, t, u, h, b, x, F, _, V, L, W, ie, ue, ae, te, Me, An) {
      e.allPendingTasks++, b === null ? e.pendingRootTasks++ : b.pendingTasks++, ae !== null && ae.pendingTasks++;
      var Fe = {
        replay: null,
        node: u,
        childIndex: h,
        ping: function() {
          return Cc(e, Fe);
        },
        blockedBoundary: b,
        blockedSegment: x,
        blockedPreamble: F,
        hoistableState: _,
        abortSet: V,
        keyPath: L,
        formatContext: W,
        context: ie,
        treeContext: ue,
        row: ae,
        componentStack: te,
        thenableState: t
      };
      return Fe.debugTask = An, V.add(Fe), Fe;
    }
    function kc(e, t, u, h, b, x, F, _, V, L, W, ie, ue, ae, te, Me) {
      e.allPendingTasks++, x === null ? e.pendingRootTasks++ : x.pendingTasks++, ue !== null && ue.pendingTasks++, u.pendingTasks++;
      var An = {
        replay: u,
        node: h,
        childIndex: b,
        ping: function() {
          return Cc(e, An);
        },
        blockedBoundary: x,
        blockedSegment: null,
        blockedPreamble: null,
        hoistableState: F,
        abortSet: _,
        keyPath: V,
        formatContext: L,
        context: W,
        treeContext: ie,
        row: ue,
        componentStack: ae,
        thenableState: t
      };
      return An.debugTask = Me, _.add(An), An;
    }
    function xi(e, t, u, h, b, x) {
      return {
        status: Cn,
        parentFlushed: !1,
        id: -1,
        index: t,
        chunks: [],
        children: [],
        preambleChildren: [],
        parentFormatContext: h,
        boundary: u,
        lastPushedText: b,
        textEmbedded: x
      };
    }
    function ei() {
      if (r === null || r.componentStack === null)
        return "";
      var e = r.componentStack;
      try {
        var t = "";
        if (typeof e.type == "string")
          t += Fr(e.type);
        else if (typeof e.type == "function") {
          if (!e.owner) {
            var u = t, h = e.type, b = h ? h.displayName || h.name : "", x = b ? Fr(b) : "";
            t = u + x;
          }
        } else
          e.owner || (t += Rc(e.type));
        for (; e; )
          u = null, e.debugStack != null ? u = qo(
            e.debugStack
          ) : (x = e, x.stack != null && (u = typeof x.stack != "string" ? x.stack = qo(
            x.stack
          ) : x.stack)), (e = e.owner) && u && (t += `
` + u);
        var F = t;
      } catch (_) {
        F = `
Error generating stack: ` + _.message + `
` + _.stack;
      }
      return F;
    }
    function fo(e, t) {
      if (t != null)
        for (var u = t.length - 1; 0 <= u; u--) {
          var h = t[u];
          if (typeof h.name == "string" || typeof h.time == "number") break;
          if (h.awaited != null) {
            var b = h.debugStack == null ? h.awaited : h;
            if (b.debugStack !== void 0) {
              e.componentStack = {
                parent: e.componentStack,
                type: h,
                owner: b.owner,
                stack: b.debugStack
              }, e.debugTask = b.debugTask;
              break;
            }
          }
        }
    }
    function Ei(e, t) {
      if (t != null)
        for (var u = 0; u < t.length; u++) {
          var h = t[u];
          typeof h.name == "string" && h.debugStack !== void 0 && (e.componentStack = {
            parent: e.componentStack,
            type: h,
            owner: h.owner,
            stack: h.debugStack
          }, e.debugTask = h.debugTask);
        }
    }
    function Ri(e) {
      var t = e.node;
      if (typeof t == "object" && t !== null)
        switch (t.$$typeof) {
          case Nu:
            var u = t.type, h = t._owner, b = t._debugStack;
            Ei(e, t._debugInfo), e.debugTask = t._debugTask, e.componentStack = {
              parent: e.componentStack,
              type: u,
              owner: h,
              stack: b
            };
            break;
          case ea:
            Ei(e, t._debugInfo);
            break;
          default:
            typeof t.then == "function" && Ei(e, t._debugInfo);
        }
    }
    function ho(e) {
      return e === null ? null : {
        parent: e.parent,
        type: "Suspense Fallback",
        owner: e.owner,
        stack: e.stack
      };
    }
    function We(e) {
      var t = {};
      return e && Object.defineProperty(t, "componentStack", {
        configurable: !0,
        enumerable: !0,
        get: function() {
          try {
            var u = "", h = e;
            do
              u += Rc(h.type), h = h.parent;
            while (h);
            var b = u;
          } catch (x) {
            b = `
Error generating stack: ` + x.message + `
` + x.stack;
          }
          return Object.defineProperty(t, "componentStack", {
            value: b
          }), b;
        }
      }), t;
    }
    function Dl(e, t, u, h, b) {
      e.errorDigest = t, u instanceof Error ? (t = String(u.message), u = String(u.stack)) : (t = typeof u == "object" && u !== null ? Te(u) : String(u), u = null), b = b ? `Switched to client rendering because the server rendering aborted due to:

` : `Switched to client rendering because the server rendering errored:

`, e.errorMessage = b + t, e.errorStack = u !== null ? b + u : null, e.errorComponentStack = h.componentStack;
    }
    function yt(e, t, u, h) {
      if (e = e.onError, t = h ? h.run(e.bind(null, t, u)) : e(t, u), t != null && typeof t != "string")
        console.error(
          'onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "%s" instead',
          typeof t
        );
      else return t;
    }
    function ni(e, t, u, h) {
      u = e.onShellError;
      var b = e.onFatalError;
      h ? (h.run(u.bind(null, t)), h.run(b.bind(null, t))) : (u(t), b(t)), e.destination !== null ? (e.status = Tr, Vl(e.destination, t)) : (e.status = 13, e.fatalError = t);
    }
    function At(e, t) {
      Vi(e, t.next, t.hoistables);
    }
    function Vi(e, t, u) {
      for (; t !== null; ) {
        u !== null && (un(t.hoistables, u), t.inheritedHoistables = u);
        var h = t.boundaries;
        if (h !== null) {
          t.boundaries = null;
          for (var b = 0; b < h.length; b++) {
            var x = h[b];
            u !== null && un(
              x.contentState,
              u
            ), qi(e, x, null, null);
          }
        }
        if (t.pendingTasks--, 0 < t.pendingTasks) break;
        u = t.hoistables, t = t.next;
      }
    }
    function Pa(e, t) {
      var u = t.boundaries;
      if (u !== null && t.pendingTasks === u.length) {
        for (var h = !0, b = 0; b < u.length; b++) {
          var x = u[b];
          if (x.pendingTasks !== 1 || x.parentFlushed || pr(e, x)) {
            h = !1;
            break;
          }
        }
        h && Vi(e, t, t.hoistables);
      }
    }
    function ti(e) {
      var t = {
        pendingTasks: 1,
        boundaries: null,
        hoistables: Ra(),
        inheritedHoistables: null,
        together: !1,
        next: null
      };
      return e !== null && 0 < e.pendingTasks && (t.pendingTasks++, t.boundaries = [], e.next = t), t;
    }
    function Ci(e, t, u, h, b) {
      var x = t.keyPath, F = t.treeContext, _ = t.row, V = t.componentStack, L = t.debugTask;
      Ei(t, t.node.props.children._debugInfo), t.keyPath = u, u = h.length;
      var W = null;
      if (t.replay !== null) {
        var ie = t.replay.slots;
        if (ie !== null && typeof ie == "object")
          for (var ue = 0; ue < u; ue++) {
            var ae = b !== "backwards" && b !== "unstable_legacy-backwards" ? ue : u - 1 - ue, te = h[ae];
            t.row = W = ti(
              W
            ), t.treeContext = ka(F, u, ae);
            var Me = ie[ae];
            typeof Me == "number" ? (Fa(e, t, Me, te, ae), delete ie[ae]) : Dt(e, t, te, ae), --W.pendingTasks === 0 && At(e, W);
          }
        else
          for (ie = 0; ie < u; ie++)
            ue = b !== "backwards" && b !== "unstable_legacy-backwards" ? ie : u - 1 - ie, ae = h[ue], Ll(e, t, ae), t.row = W = ti(W), t.treeContext = ka(F, u, ue), Dt(e, t, ae, ue), --W.pendingTasks === 0 && At(e, W);
      } else if (b !== "backwards" && b !== "unstable_legacy-backwards")
        for (b = 0; b < u; b++)
          ie = h[b], Ll(e, t, ie), t.row = W = ti(W), t.treeContext = ka(
            F,
            u,
            b
          ), Dt(e, t, ie, b), --W.pendingTasks === 0 && At(e, W);
      else {
        for (b = t.blockedSegment, ie = b.children.length, ue = b.chunks.length, ae = u - 1; 0 <= ae; ae--) {
          te = h[ae], t.row = W = ti(
            W
          ), t.treeContext = ka(F, u, ae), Me = xi(
            e,
            ue,
            null,
            t.formatContext,
            ae === 0 ? b.lastPushedText : !0,
            !0
          ), b.children.splice(ie, 0, Me), t.blockedSegment = Me, Ll(e, t, te);
          try {
            Dt(e, t, te, ae), Me.lastPushedText && Me.textEmbedded && Me.chunks.push(xt), Me.status = kn, Hl(e, t.blockedBoundary, Me), --W.pendingTasks === 0 && At(e, W);
          } catch (An) {
            throw Me.status = e.status === 12 ? rt : ln, An;
          }
        }
        t.blockedSegment = b, b.lastPushedText = !1;
      }
      _ !== null && W !== null && 0 < W.pendingTasks && (_.pendingTasks++, W.next = _), t.treeContext = F, t.row = _, t.keyPath = x, t.componentStack = V, t.debugTask = L;
    }
    function wt(e, t, u, h, b, x) {
      var F = t.thenableState;
      for (t.thenableState = null, Gt = {}, Hi = t, wr = e, da = u, Gl = !1, wu = Rt = 0, oc = -1, vs = 0, _o = F, e = On(h, b, x); zi; )
        zi = !1, wu = Rt = 0, oc = -1, vs = 0, Tu += 1, xn = null, e = h(b, x);
      return Sa(), e;
    }
    function ki(e, t, u, h, b, x, F) {
      var _ = !1;
      if (x !== 0 && e.formState !== null) {
        var V = t.blockedSegment;
        if (V !== null) {
          _ = !0, V = V.chunks;
          for (var L = 0; L < x; L++)
            L === F ? V.push(Ua) : V.push(dr);
        }
      }
      x = t.keyPath, t.keyPath = u, b ? (u = t.treeContext, t.treeContext = ka(u, 1, 0), Dt(e, t, h, -1), t.treeContext = u) : _ ? Dt(e, t, h, -1) : Mr(e, t, h, -1), t.keyPath = x;
    }
    function Si(e, t, u, h, b, x) {
      if (typeof h == "function")
        if (h.prototype && h.prototype.isReactComponent) {
          var F = b;
          if ("ref" in b) {
            F = {};
            for (var _ in b)
              _ !== "ref" && (F[_] = b[_]);
          }
          var V = h.defaultProps;
          if (V) {
            F === b && (F = Ln({}, F, b));
            for (var L in V)
              F[L] === void 0 && (F[L] = V[L]);
          }
          var W = F, ie = sl, ue = h.contextType;
          if ("contextType" in h && ue !== null && (ue === void 0 || ue.$$typeof !== Yn) && !Cs.has(h)) {
            Cs.add(h);
            var ae = ue === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof ue != "object" ? " However, it is set to a " + typeof ue + "." : ue.$$typeof === Ir ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(ue).join(", ") + "}.";
            console.error(
              "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
              je(h) || "Component",
              ae
            );
          }
          typeof ue == "object" && ue !== null && (ie = ue._currentValue);
          var te = new h(W, ie);
          if (typeof h.getDerivedStateFromProps == "function" && (te.state === null || te.state === void 0)) {
            var Me = je(h) || "Component";
            lc.has(Me) || (lc.add(Me), console.error(
              "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
              Me,
              te.state === null ? "null" : "undefined",
              Me
            ));
          }
          if (typeof h.getDerivedStateFromProps == "function" || typeof te.getSnapshotBeforeUpdate == "function") {
            var An = null, Fe = null, qe = null;
            if (typeof te.componentWillMount == "function" && te.componentWillMount.__suppressDeprecationWarning !== !0 ? An = "componentWillMount" : typeof te.UNSAFE_componentWillMount == "function" && (An = "UNSAFE_componentWillMount"), typeof te.componentWillReceiveProps == "function" && te.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? Fe = "componentWillReceiveProps" : typeof te.UNSAFE_componentWillReceiveProps == "function" && (Fe = "UNSAFE_componentWillReceiveProps"), typeof te.componentWillUpdate == "function" && te.componentWillUpdate.__suppressDeprecationWarning !== !0 ? qe = "componentWillUpdate" : typeof te.UNSAFE_componentWillUpdate == "function" && (qe = "UNSAFE_componentWillUpdate"), An !== null || Fe !== null || qe !== null) {
              var st = je(h) || "Component", Ct = typeof h.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
              hs.has(st) || (hs.add(
                st
              ), console.error(
                `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
                st,
                Ct,
                An !== null ? `
  ` + An : "",
                Fe !== null ? `
  ` + Fe : "",
                qe !== null ? `
  ` + qe : ""
              ));
            }
          }
          var vn = je(h) || "Component";
          te.render || (h.prototype && typeof h.prototype.render == "function" ? console.error(
            "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
            vn
          ) : console.error(
            "No `render` method found on the %s instance: you may have forgotten to define `render`.",
            vn
          )), !te.getInitialState || te.getInitialState.isReactClassApproved || te.state || console.error(
            "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
            vn
          ), te.getDefaultProps && !te.getDefaultProps.isReactClassApproved && console.error(
            "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
            vn
          ), te.contextType && console.error(
            "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
            vn
          ), h.childContextTypes && !ic.has(h) && (ic.add(h), console.error(
            "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
            vn
          )), h.contextTypes && !ds.has(h) && (ds.add(h), console.error(
            "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
            vn
          )), typeof te.componentShouldUpdate == "function" && console.error(
            "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
            vn
          ), h.prototype && h.prototype.isPureReactComponent && typeof te.shouldComponentUpdate < "u" && console.error(
            "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
            je(h) || "A pure component"
          ), typeof te.componentDidUnmount == "function" && console.error(
            "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
            vn
          ), typeof te.componentDidReceiveProps == "function" && console.error(
            "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
            vn
          ), typeof te.componentWillRecieveProps == "function" && console.error(
            "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
            vn
          ), typeof te.UNSAFE_componentWillRecieveProps == "function" && console.error(
            "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
            vn
          );
          var Se = te.props !== W;
          te.props !== void 0 && Se && console.error(
            "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
            vn
          ), te.defaultProps && console.error(
            "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
            vn,
            vn
          ), typeof te.getSnapshotBeforeUpdate != "function" || typeof te.componentDidUpdate == "function" || qa.has(h) || (qa.add(h), console.error(
            "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
            je(h)
          )), typeof te.getDerivedStateFromProps == "function" && console.error(
            "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
            vn
          ), typeof te.getDerivedStateFromError == "function" && console.error(
            "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
            vn
          ), typeof h.getSnapshotBeforeUpdate == "function" && console.error(
            "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
            vn
          );
          var kt = te.state;
          kt && (typeof kt != "object" || li(kt)) && console.error("%s.state: must be set to an object or null", vn), typeof te.getChildContext == "function" && typeof h.childContextTypes != "object" && console.error(
            "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
            vn
          );
          var xr = te.state !== void 0 ? te.state : null;
          te.updater = ks, te.props = W, te.state = xr;
          var Mn = { queue: [], replace: !1 };
          te._reactInternals = Mn;
          var Vn = h.contextType;
          if (te.context = typeof Vn == "object" && Vn !== null ? Vn._currentValue : sl, te.state === W) {
            var Zr = je(h) || "Component";
            Nc.has(
              Zr
            ) || (Nc.add(
              Zr
            ), console.error(
              "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
              Zr
            ));
          }
          var rr = h.getDerivedStateFromProps;
          if (typeof rr == "function") {
            var zt = rr(
              W,
              xr
            );
            if (zt === void 0) {
              var Jn = je(h) || "Component";
              Io.has(Jn) || (Io.add(Jn), console.error(
                "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
                Jn
              ));
            }
            var It = zt == null ? xr : Ln({}, xr, zt);
            te.state = It;
          }
          if (typeof h.getDerivedStateFromProps != "function" && typeof te.getSnapshotBeforeUpdate != "function" && (typeof te.UNSAFE_componentWillMount == "function" || typeof te.componentWillMount == "function")) {
            var Vr = te.state;
            if (typeof te.componentWillMount == "function") {
              if (te.componentWillMount.__suppressDeprecationWarning !== !0) {
                var fl = je(h) || "Unknown";
                rc[fl] || (console.warn(
                  `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
                  fl
                ), rc[fl] = !0);
              }
              te.componentWillMount();
            }
            if (typeof te.UNSAFE_componentWillMount == "function" && te.UNSAFE_componentWillMount(), Vr !== te.state && (console.error(
              "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
              je(h) || "Component"
            ), ks.enqueueReplaceState(
              te,
              te.state,
              null
            )), Mn.queue !== null && 0 < Mn.queue.length) {
              var Bt = Mn.queue, lt = Mn.replace;
              if (Mn.queue = null, Mn.replace = !1, lt && Bt.length === 1)
                te.state = Bt[0];
              else {
                for (var Er = lt ? Bt[0] : te.state, Jr = !0, Rr = lt ? 1 : 0; Rr < Bt.length; Rr++) {
                  var Bi = Bt[Rr], Qr = typeof Bi == "function" ? Bi.call(
                    te,
                    Er,
                    W,
                    void 0
                  ) : Bi;
                  Qr != null && (Jr ? (Jr = !1, Er = Ln(
                    {},
                    Er,
                    Qr
                  )) : Ln(Er, Qr));
                }
                te.state = Er;
              }
            } else Mn.queue = null;
          }
          var St = gn(te);
          if (e.status === 12) throw null;
          te.props !== W && (Xr || console.error(
            "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
            je(h) || "a component"
          ), Xr = !0);
          var Cl = t.keyPath;
          t.keyPath = u, Mr(e, t, St, -1), t.keyPath = Cl;
        } else {
          if (h.prototype && typeof h.prototype.render == "function") {
            var Zt = je(h) || "Unknown";
            tr[Zt] || (console.error(
              "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
              Zt,
              Zt
            ), tr[Zt] = !0);
          }
          var Uc = wt(
            e,
            t,
            u,
            h,
            b,
            void 0
          );
          if (e.status === 12) throw null;
          var di = Rt !== 0, ft = wu, kl = oc;
          if (h.contextTypes) {
            var Cr = je(h) || "Unknown";
            Zn[Cr] || (Zn[Cr] = !0, console.error(
              "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
              Cr
            ));
          }
          if (h && h.childContextTypes && console.error(
            `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
            h.displayName || h.name || "Component"
          ), typeof h.getDerivedStateFromProps == "function") {
            var Eu = je(h) || "Unknown";
            mo[Eu] || (console.error(
              "%s: Function components do not support getDerivedStateFromProps.",
              Eu
            ), mo[Eu] = !0);
          }
          if (typeof h.contextType == "object" && h.contextType !== null) {
            var Do = je(h) || "Unknown";
            Gr[Do] || (console.error(
              "%s: Function components do not support contextType.",
              Do
            ), Gr[Do] = !0);
          }
          ki(
            e,
            t,
            u,
            Uc,
            di,
            ft,
            kl
          );
        }
      else if (typeof h == "string") {
        var Xl = t.blockedSegment;
        if (Xl === null) {
          var Lo = b.children, Kr = t.formatContext, Ru = t.keyPath;
          t.formatContext = Ge(Kr, h, b), t.keyPath = u, Dt(e, t, Lo, -1), t.formatContext = Kr, t.keyPath = Ru;
        } else {
          var Yc = Qc(
            Xl.chunks,
            h,
            b,
            e.resumableState,
            e.renderState,
            t.blockedPreamble,
            t.hoistableState,
            t.formatContext,
            Xl.lastPushedText
          );
          Xl.lastPushedText = !1;
          var Sl = t.formatContext, Cu = t.keyPath;
          if (t.keyPath = u, (t.formatContext = Ge(
            Sl,
            h,
            b
          )).insertionMode === uu) {
            var kr = xi(
              e,
              0,
              null,
              t.formatContext,
              !1,
              !1
            );
            Xl.preambleChildren.push(kr), t.blockedSegment = kr;
            try {
              kr.status = 6, Dt(e, t, Yc, -1), kr.lastPushedText && kr.textEmbedded && kr.chunks.push(xt), kr.status = kn, Hl(e, t.blockedBoundary, kr);
            } finally {
              t.blockedSegment = Xl;
            }
          } else Dt(e, t, Yc, -1);
          t.formatContext = Sl, t.keyPath = Cu;
          e: {
            var Ho = Xl.chunks, eo = e.resumableState;
            switch (h) {
              case "title":
              case "style":
              case "script":
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
                break e;
              case "body":
                if (Sl.insertionMode <= ra) {
                  eo.hasBody = !0;
                  break e;
                }
                break;
              case "html":
                if (Sl.insertionMode === xo) {
                  eo.hasHtml = !0;
                  break e;
                }
                break;
              case "head":
                if (Sl.insertionMode <= ra) break e;
            }
            Ho.push(ht(h));
          }
          Xl.lastPushedText = !1;
        }
      } else {
        switch (h) {
          case Es:
          case lu:
          case iu:
          case Fi:
            var ga = t.keyPath;
            t.keyPath = u, Mr(e, t, b.children, -1), t.keyPath = ga;
            return;
          case Ut:
            var Pl = t.blockedSegment;
            if (Pl === null) {
              if (b.mode !== "hidden") {
                var Fl = t.keyPath;
                t.keyPath = u, Dt(e, t, b.children, -1), t.keyPath = Fl;
              }
            } else if (b.mode !== "hidden") {
              Pl.chunks.push(Hc), Pl.lastPushedText = !1;
              var gi = t.keyPath;
              t.keyPath = u, Dt(e, t, b.children, -1), t.keyPath = gi, Pl.chunks.push(Ku), Pl.lastPushedText = !1;
            }
            return;
          case Ia:
            e: {
              var qr = b.children, lr = b.revealOrder;
              if (lr === "forwards" || lr === "backwards" || lr === "unstable_legacy-backwards") {
                if (li(qr)) {
                  Ci(
                    e,
                    t,
                    u,
                    qr,
                    lr
                  );
                  break e;
                }
                var va = E(qr);
                if (va) {
                  var vi = va.call(qr);
                  if (vi) {
                    pa(
                      t,
                      qr,
                      -1,
                      vi,
                      va
                    );
                    var no = vi.next();
                    if (!no.done) {
                      var Ni = [];
                      do
                        Ni.push(no.value), no = vi.next();
                      while (!no.done);
                      Ci(
                        e,
                        t,
                        u,
                        qr,
                        lr
                      );
                    }
                    break e;
                  }
                }
              }
              if (lr === "together") {
                var bs = t.keyPath, Lr = t.row, Zl = t.row = ti(null);
                Zl.boundaries = [], Zl.together = !0, t.keyPath = u, Mr(e, t, qr, -1), --Zl.pendingTasks === 0 && At(e, Zl), t.keyPath = bs, t.row = Lr, Lr !== null && 0 < Zl.pendingTasks && (Lr.pendingTasks++, Zl.next = Lr);
              } else {
                var ku = t.keyPath;
                t.keyPath = u, Mr(e, t, qr, -1), t.keyPath = ku;
              }
            }
            return;
          case rs:
          case Ac:
            throw Error(
              "ReactDOMServer does not yet support scope components."
            );
          case $i:
            e: if (t.replay !== null) {
              var uc = t.keyPath, cc = t.formatContext, Us = t.row;
              t.keyPath = u, t.formatContext = Bn(
                e.resumableState,
                cc
              ), t.row = null;
              var to = b.children;
              try {
                Dt(e, t, to, -1);
              } finally {
                t.keyPath = uc, t.formatContext = cc, t.row = Us;
              }
            } else {
              var zo = t.keyPath, ro = t.formatContext, sc = t.row, _s = t.blockedBoundary, Ss = t.blockedPreamble, Hr = t.hoistableState, bi = t.blockedSegment, lo = b.fallback, Gc = b.children, pl = /* @__PURE__ */ new Set(), Pt = t.formatContext.insertionMode < sr ? Ti(
                e,
                t.row,
                pl,
                oe(),
                oe()
              ) : Ti(
                e,
                t.row,
                pl,
                null,
                null
              );
              e.trackedPostpones !== null && (Pt.trackedContentKeyPath = u);
              var it = xi(
                e,
                bi.chunks.length,
                Pt,
                t.formatContext,
                !1,
                !1
              );
              bi.children.push(it), bi.lastPushedText = !1;
              var zn = xi(
                e,
                0,
                null,
                t.formatContext,
                !1,
                !1
              );
              if (zn.parentFlushed = !0, e.trackedPostpones !== null) {
                var Ps = t.componentStack, Bo = [
                  u[0],
                  "Suspense Fallback",
                  u[2]
                ], Xc = [
                  Bo[1],
                  Bo[2],
                  [],
                  null
                ];
                e.trackedPostpones.workingMap.set(
                  Bo,
                  Xc
                ), Pt.trackedFallbackNode = Xc, t.blockedSegment = it, t.blockedPreamble = Pt.fallbackPreamble, t.keyPath = Bo, t.formatContext = Ie(
                  e.resumableState,
                  ro
                ), t.componentStack = ho(
                  Ps
                ), it.status = 6;
                try {
                  Dt(e, t, lo, -1), it.lastPushedText && it.textEmbedded && it.chunks.push(xt), it.status = kn, Hl(e, _s, it);
                } catch (Gs) {
                  throw it.status = e.status === 12 ? rt : ln, Gs;
                } finally {
                  t.blockedSegment = bi, t.blockedPreamble = Ss, t.keyPath = zo, t.formatContext = ro;
                }
                var No = ml(
                  e,
                  null,
                  Gc,
                  -1,
                  Pt,
                  zn,
                  Pt.contentPreamble,
                  Pt.contentState,
                  t.abortSet,
                  u,
                  Bn(
                    e.resumableState,
                    t.formatContext
                  ),
                  t.context,
                  t.treeContext,
                  null,
                  Ps,
                  sl,
                  t.debugTask
                );
                Ri(No), e.pingedTasks.push(No);
              } else {
                t.blockedBoundary = Pt, t.blockedPreamble = Pt.contentPreamble, t.hoistableState = Pt.contentState, t.blockedSegment = zn, t.keyPath = u, t.formatContext = Bn(
                  e.resumableState,
                  ro
                ), t.row = null, zn.status = 6;
                try {
                  if (Dt(e, t, Gc, -1), zn.lastPushedText && zn.textEmbedded && zn.chunks.push(xt), zn.status = kn, Hl(e, Pt, zn), yo(Pt, zn), Pt.pendingTasks === 0 && Pt.status === Cn) {
                    if (Pt.status = kn, !pr(e, Pt)) {
                      sc !== null && --sc.pendingTasks === 0 && At(e, sc), e.pendingRootTasks === 0 && t.blockedPreamble && Ma(e);
                      break e;
                    }
                  } else
                    sc !== null && sc.together && Pa(e, sc);
                } catch (Gs) {
                  if (Pt.status = Ee, e.status === 12) {
                    zn.status = rt;
                    var Su = e.fatalError;
                  } else
                    zn.status = ln, Su = Gs;
                  var Zc = We(t.componentStack), Pu = yt(
                    e,
                    Su,
                    Zc,
                    t.debugTask
                  );
                  Dl(
                    Pt,
                    Pu,
                    Su,
                    Zc,
                    !1
                  ), go(e, Pt);
                } finally {
                  t.blockedBoundary = _s, t.blockedPreamble = Ss, t.hoistableState = Hr, t.blockedSegment = bi, t.keyPath = zo, t.formatContext = ro, t.row = sc;
                }
                var fc = ml(
                  e,
                  null,
                  lo,
                  -1,
                  _s,
                  it,
                  Pt.fallbackPreamble,
                  Pt.fallbackState,
                  pl,
                  [u[0], "Suspense Fallback", u[2]],
                  Ie(
                    e.resumableState,
                    t.formatContext
                  ),
                  t.context,
                  t.treeContext,
                  t.row,
                  ho(
                    t.componentStack
                  ),
                  sl,
                  t.debugTask
                );
                Ri(fc), e.pingedTasks.push(fc);
              }
            }
            return;
        }
        if (typeof h == "object" && h !== null)
          switch (h.$$typeof) {
            case sn:
              if ("ref" in b) {
                var hc = {};
                for (var ys in b)
                  ys !== "ref" && (hc[ys] = b[ys]);
              } else hc = b;
              var Fs = wt(
                e,
                t,
                u,
                h.render,
                hc,
                x
              );
              ki(
                e,
                t,
                u,
                Fs,
                Rt !== 0,
                wu,
                oc
              );
              return;
            case Oa:
              Si(e, t, u, h.type, b, x);
              return;
            case Yn:
              var ms = b.value, Vc = b.children, Jc = t.context, Fu = t.keyPath, io = h._currentValue;
              h._currentValue = ms, h._currentRenderer !== void 0 && h._currentRenderer !== null && h._currentRenderer !== ha && console.error(
                "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
              ), h._currentRenderer = ha;
              var ba = Li, jr = {
                parent: ba,
                depth: ba === null ? 0 : ba.depth + 1,
                context: h,
                parentValue: io,
                value: ms
              };
              Li = jr, t.context = jr, t.keyPath = u, Mr(e, t, Vc, -1);
              var dc = Li;
              if (dc === null)
                throw Error(
                  "Tried to pop a Context at the root of the app. This is a bug in React."
                );
              dc.context !== h && console.error(
                "The parent context is not the expected context. This is probably a bug in React."
              ), dc.context._currentValue = dc.parentValue, h._currentRenderer !== void 0 && h._currentRenderer !== null && h._currentRenderer !== ha && console.error(
                "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
              ), h._currentRenderer = ha;
              var Ds = Li = dc.parent;
              t.context = Ds, t.keyPath = Fu, Jc !== t.context && console.error(
                "Popping the context provider did not return back to the original snapshot. This is a bug in React."
              );
              return;
            case Ir:
              var Ys = h._context, ps = b.children;
              typeof ps != "function" && console.error(
                "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
              );
              var af = ps(Ys._currentValue), ws = t.keyPath;
              t.keyPath = u, Mr(e, t, af, -1), t.keyPath = ws;
              return;
            case ea:
              var of = nr(h);
              if (e.status === 12) throw null;
              Si(e, t, u, of, b, x);
              return;
          }
        var Ls = "";
        throw (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (Ls += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), Error(
          "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + ((h == null ? h : typeof h) + "." + Ls)
        );
      }
    }
    function Fa(e, t, u, h, b) {
      var x = t.replay, F = t.blockedBoundary, _ = xi(
        e,
        0,
        null,
        t.formatContext,
        !1,
        !1
      );
      _.id = u, _.parentFlushed = !0;
      try {
        t.replay = null, t.blockedSegment = _, Dt(e, t, h, b), _.status = kn, Hl(e, F, _), F === null ? e.completedRootSegment = _ : (yo(F, _), F.parentFlushed && e.partialBoundaries.push(F));
      } finally {
        t.replay = x, t.blockedSegment = null;
      }
    }
    function Ji(e, t, u, h, b, x, F, _, V, L) {
      x = L.nodes;
      for (var W = 0; W < x.length; W++) {
        var ie = x[W];
        if (b === ie[1]) {
          if (ie.length === 4) {
            if (h !== null && h !== ie[0])
              throw Error(
                "Expected the resume to render <" + ie[0] + "> in this slot but instead it rendered <" + h + ">. The tree doesn't match so React will fallback to client rendering."
              );
            var ue = ie[2];
            h = ie[3], b = t.node, t.replay = { nodes: ue, slots: h, pendingTasks: 1 };
            try {
              if (Si(e, t, u, F, _, V), t.replay.pendingTasks === 1 && 0 < t.replay.nodes.length)
                throw Error(
                  "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
                );
              t.replay.pendingTasks--;
            } catch (Se) {
              if (typeof Se == "object" && Se !== null && (Se === ui || typeof Se.then == "function"))
                throw t.node === b ? t.replay = L : x.splice(W, 1), Se;
              t.replay.pendingTasks--, F = We(t.componentStack), _ = e, e = t.blockedBoundary, u = Se, V = h, h = yt(_, u, F, t.debugTask), Qi(
                _,
                e,
                ue,
                V,
                u,
                h,
                F,
                !1
              );
            }
            t.replay = L;
          } else {
            if (F !== $i)
              throw Error(
                "Expected the resume to render <Suspense> in this slot but instead it rendered <" + (je(F) || "Unknown") + ">. The tree doesn't match so React will fallback to client rendering."
              );
            e: {
              L = void 0, h = ie[5], F = ie[2], V = ie[3], b = ie[4] === null ? [] : ie[4][2], ie = ie[4] === null ? null : ie[4][3];
              var ae = t.keyPath, te = t.formatContext, Me = t.row, An = t.replay, Fe = t.blockedBoundary, qe = t.hoistableState, st = _.children, Ct = _.fallback, vn = /* @__PURE__ */ new Set();
              _ = t.formatContext.insertionMode < sr ? Ti(
                e,
                t.row,
                vn,
                oe(),
                oe()
              ) : Ti(
                e,
                t.row,
                vn,
                null,
                null
              ), _.parentFlushed = !0, _.rootSegmentID = h, t.blockedBoundary = _, t.hoistableState = _.contentState, t.keyPath = u, t.formatContext = Bn(
                e.resumableState,
                te
              ), t.row = null, t.replay = { nodes: F, slots: V, pendingTasks: 1 };
              try {
                if (Dt(e, t, st, -1), t.replay.pendingTasks === 1 && 0 < t.replay.nodes.length)
                  throw Error(
                    "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
                  );
                if (t.replay.pendingTasks--, _.pendingTasks === 0 && _.status === Cn) {
                  _.status = kn, e.completedBoundaries.push(_);
                  break e;
                }
              } catch (Se) {
                _.status = Ee, ue = We(t.componentStack), L = yt(
                  e,
                  Se,
                  ue,
                  t.debugTask
                ), Dl(_, L, Se, ue, !1), t.replay.pendingTasks--, e.clientRenderedBoundaries.push(_);
              } finally {
                t.blockedBoundary = Fe, t.hoistableState = qe, t.replay = An, t.keyPath = ae, t.formatContext = te, t.row = Me;
              }
              _ = kc(
                e,
                null,
                { nodes: b, slots: ie, pendingTasks: 0 },
                Ct,
                -1,
                Fe,
                _.fallbackState,
                vn,
                [u[0], "Suspense Fallback", u[2]],
                Ie(
                  e.resumableState,
                  t.formatContext
                ),
                t.context,
                t.treeContext,
                t.row,
                ho(
                  t.componentStack
                ),
                sl,
                t.debugTask
              ), Ri(_), e.pingedTasks.push(_);
            }
          }
          x.splice(W, 1);
          break;
        }
      }
    }
    function pa(e, t, u, h, b) {
      h === t ? (u !== -1 || e.componentStack === null || typeof e.componentStack.type != "function" || Object.prototype.toString.call(e.componentStack.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(h) !== "[object Generator]") && (si || console.error(
        "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
      ), si = !0) : t.entries !== b || fi || (console.error(
        "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
      ), fi = !0);
    }
    function Mr(e, t, u, h) {
      t.replay !== null && typeof t.replay.slots == "number" ? Fa(e, t, t.replay.slots, u, h) : (t.node = u, t.childIndex = h, u = t.componentStack, h = t.debugTask, Ri(t), Aa(e, t), t.componentStack = u, t.debugTask = h);
    }
    function Aa(e, t) {
      var u = t.node, h = t.childIndex;
      if (u !== null) {
        if (typeof u == "object") {
          switch (u.$$typeof) {
            case Nu:
              var b = u.type, x = u.key;
              u = u.props;
              var F = u.ref;
              F = F !== void 0 ? F : null;
              var _ = t.debugTask, V = je(b);
              x = x ?? (h === -1 ? 0 : h);
              var L = [t.keyPath, V, x];
              t.replay !== null ? _ ? _.run(
                Ji.bind(
                  null,
                  e,
                  t,
                  L,
                  V,
                  x,
                  h,
                  b,
                  u,
                  F,
                  t.replay
                )
              ) : Ji(
                e,
                t,
                L,
                V,
                x,
                h,
                b,
                u,
                F,
                t.replay
              ) : _ ? _.run(
                Si.bind(
                  null,
                  e,
                  t,
                  L,
                  b,
                  u,
                  F
                )
              ) : Si(e, t, L, b, u, F);
              return;
            case ru:
              throw Error(
                "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render."
              );
            case ea:
              if (b = nr(u), e.status === 12) throw null;
              Mr(e, t, b, h);
              return;
          }
          if (li(u)) {
            Sc(e, t, u, h);
            return;
          }
          if ((x = E(u)) && (b = x.call(u))) {
            if (pa(t, u, h, b, x), u = b.next(), !u.done) {
              x = [];
              do
                x.push(u.value), u = b.next();
              while (!u.done);
              Sc(e, t, x, h);
            }
            return;
          }
          if (typeof u.then == "function")
            return t.thenableState = null, Mr(
              e,
              t,
              pt(u),
              h
            );
          if (u.$$typeof === Yn)
            return Mr(
              e,
              t,
              u._currentValue,
              h
            );
          throw e = Object.prototype.toString.call(u), Error(
            "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(u).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        typeof u == "string" ? (t = t.blockedSegment, t !== null && (t.lastPushedText = Xe(
          t.chunks,
          u,
          e.renderState,
          t.lastPushedText
        ))) : typeof u == "number" || typeof u == "bigint" ? (t = t.blockedSegment, t !== null && (t.lastPushedText = Xe(
          t.chunks,
          "" + u,
          e.renderState,
          t.lastPushedText
        ))) : (typeof u == "function" && (e = u.displayName || u.name || "Component", console.error(
          "Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.",
          e,
          e
        )), typeof u == "symbol" && console.error(
          `Symbols are not valid as a React child.
  %s`,
          String(u)
        ));
      }
    }
    function Ll(e, t, u) {
      if (u !== null && typeof u == "object" && (u.$$typeof === Nu || u.$$typeof === ru) && u._store && (!u._store.validated && u.key == null || u._store.validated === 2)) {
        if (typeof u._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        u._store.validated = 1;
        var h = e.didWarnForKey;
        if (h == null && (h = e.didWarnForKey = /* @__PURE__ */ new WeakSet()), e = t.componentStack, e !== null && !h.has(e)) {
          h.add(e);
          var b = je(u.type);
          h = u._owner;
          var x = e.owner;
          if (e = "", x && typeof x.type < "u") {
            var F = je(x.type);
            F && (e = `

Check the render method of \`` + F + "`.");
          }
          e || b && (e = `

Check the top-level render call using <` + b + ">."), b = "", h != null && x !== h && (x = null, typeof h.type < "u" ? x = je(h.type) : typeof h.name == "string" && (x = h.name), x && (b = " It was passed a child from " + x + ".")), h = t.componentStack, t.componentStack = {
            parent: t.componentStack,
            type: u.type,
            owner: u._owner,
            stack: u._debugStack
          }, console.error(
            'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
            e,
            b
          ), t.componentStack = h;
        }
      }
    }
    function Sc(e, t, u, h) {
      var b = t.keyPath, x = t.componentStack, F = t.debugTask;
      if (Ei(t, t.node._debugInfo), h !== -1 && (t.keyPath = [t.keyPath, "Fragment", h], t.replay !== null)) {
        for (var _ = t.replay, V = _.nodes, L = 0; L < V.length; L++) {
          var W = V[L];
          if (W[1] === h) {
            h = W[2], W = W[3], t.replay = { nodes: h, slots: W, pendingTasks: 1 };
            try {
              if (Sc(e, t, u, -1), t.replay.pendingTasks === 1 && 0 < t.replay.nodes.length)
                throw Error(
                  "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
                );
              t.replay.pendingTasks--;
            } catch (te) {
              if (typeof te == "object" && te !== null && (te === ui || typeof te.then == "function"))
                throw te;
              t.replay.pendingTasks--;
              var ie = We(t.componentStack);
              u = t.blockedBoundary;
              var ue = te, ae = W;
              W = yt(
                e,
                ue,
                ie,
                t.debugTask
              ), Qi(
                e,
                u,
                h,
                ae,
                ue,
                W,
                ie,
                !1
              );
            }
            t.replay = _, V.splice(L, 1);
            break;
          }
        }
        t.keyPath = b, t.componentStack = x, t.debugTask = F;
        return;
      }
      if (_ = t.treeContext, V = u.length, t.replay !== null && (L = t.replay.slots, L !== null && typeof L == "object")) {
        for (h = 0; h < V; h++)
          W = u[h], t.treeContext = ka(
            _,
            V,
            h
          ), ue = L[h], typeof ue == "number" ? (Fa(e, t, ue, W, h), delete L[h]) : Dt(e, t, W, h);
        t.treeContext = _, t.keyPath = b, t.componentStack = x, t.debugTask = F;
        return;
      }
      for (L = 0; L < V; L++)
        h = u[L], Ll(e, t, h), t.treeContext = ka(_, V, L), Dt(e, t, h, L);
      t.treeContext = _, t.keyPath = b, t.componentStack = x, t.debugTask = F;
    }
    function Pc(e, t, u) {
      if (u.status = Ye, u.rootSegmentID = e.nextSegmentId++, e = u.trackedContentKeyPath, e === null)
        throw Error(
          "It should not be possible to postpone at the root. This is a bug in React."
        );
      var h = u.trackedFallbackNode, b = [], x = t.workingMap.get(e);
      return x === void 0 ? (u = [
        e[1],
        e[2],
        b,
        null,
        h,
        u.rootSegmentID
      ], t.workingMap.set(e, u), al(u, e[0], t), u) : (x[4] = h, x[5] = u.rootSegmentID, x);
    }
    function Fc(e, t, u, h) {
      h.status = Ye;
      var b = u.keyPath, x = u.blockedBoundary;
      if (x === null)
        h.id = e.nextSegmentId++, t.rootSlots = h.id, e.completedRootSegment !== null && (e.completedRootSegment.status = Ye);
      else {
        if (x !== null && x.status === Cn) {
          var F = Pc(
            e,
            t,
            x
          );
          if (x.trackedContentKeyPath === b && u.childIndex === -1) {
            h.id === -1 && (h.id = h.parentFlushed ? x.rootSegmentID : e.nextSegmentId++), F[3] = h.id;
            return;
          }
        }
        if (h.id === -1 && (h.id = h.parentFlushed && x !== null ? x.rootSegmentID : e.nextSegmentId++), u.childIndex === -1)
          b === null ? t.rootSlots = h.id : (u = t.workingMap.get(b), u === void 0 ? (u = [b[1], b[2], [], h.id], al(u, b[0], t)) : u[3] = h.id);
        else {
          if (b === null) {
            if (e = t.rootSlots, e === null)
              e = t.rootSlots = {};
            else if (typeof e == "number")
              throw Error(
                "It should not be possible to postpone both at the root of an element as well as a slot below. This is a bug in React."
              );
          } else if (x = t.workingMap, F = x.get(b), F === void 0)
            e = {}, F = [b[1], b[2], [], e], x.set(b, F), al(F, b[0], t);
          else if (e = F[3], e === null)
            e = F[3] = {};
          else if (typeof e == "number")
            throw Error(
              "It should not be possible to postpone both at the root of an element as well as a slot below. This is a bug in React."
            );
          e[u.childIndex] = h.id;
        }
      }
    }
    function go(e, t) {
      e = e.trackedPostpones, e !== null && (t = t.trackedContentKeyPath, t !== null && (t = e.workingMap.get(t), t !== void 0 && (t.length = 4, t[2] = [], t[3] = null)));
    }
    function vo(e, t, u) {
      return kc(
        e,
        u,
        t.replay,
        t.node,
        t.childIndex,
        t.blockedBoundary,
        t.hoistableState,
        t.abortSet,
        t.keyPath,
        t.formatContext,
        t.context,
        t.treeContext,
        t.row,
        t.componentStack,
        sl,
        t.debugTask
      );
    }
    function bo(e, t, u) {
      var h = t.blockedSegment, b = xi(
        e,
        h.chunks.length,
        null,
        t.formatContext,
        h.lastPushedText,
        !0
      );
      return h.children.push(b), h.lastPushedText = !1, ml(
        e,
        u,
        t.node,
        t.childIndex,
        t.blockedBoundary,
        b,
        t.blockedPreamble,
        t.hoistableState,
        t.abortSet,
        t.keyPath,
        t.formatContext,
        t.context,
        t.treeContext,
        t.row,
        t.componentStack,
        sl,
        t.debugTask
      );
    }
    function Dt(e, t, u, h) {
      var b = t.formatContext, x = t.context, F = t.keyPath, _ = t.treeContext, V = t.componentStack, L = t.debugTask, W = t.blockedSegment;
      if (W === null) {
        W = t.replay;
        try {
          return Mr(e, t, u, h);
        } catch (ae) {
          if (Sa(), u = ae === ui ? Ec() : ae, e.status !== 12 && typeof u == "object" && u !== null) {
            if (typeof u.then == "function") {
              h = ae === ui ? tl() : null, e = vo(
                e,
                t,
                h
              ).ping, u.then(e, e), t.formatContext = b, t.context = x, t.keyPath = F, t.treeContext = _, t.componentStack = V, t.replay = W, t.debugTask = L, cn(x);
              return;
            }
            if (u.message === "Maximum call stack size exceeded") {
              u = ae === ui ? tl() : null, u = vo(e, t, u), e.pingedTasks.push(u), t.formatContext = b, t.context = x, t.keyPath = F, t.treeContext = _, t.componentStack = V, t.replay = W, t.debugTask = L, cn(x);
              return;
            }
          }
        }
      } else {
        var ie = W.children.length, ue = W.chunks.length;
        try {
          return Mr(e, t, u, h);
        } catch (ae) {
          if (Sa(), W.children.length = ie, W.chunks.length = ue, u = ae === ui ? Ec() : ae, e.status !== 12 && typeof u == "object" && u !== null) {
            if (typeof u.then == "function") {
              W = u, u = ae === ui ? tl() : null, e = bo(e, t, u).ping, W.then(e, e), t.formatContext = b, t.context = x, t.keyPath = F, t.treeContext = _, t.componentStack = V, t.debugTask = L, cn(x);
              return;
            }
            if (u.message === "Maximum call stack size exceeded") {
              W = ae === ui ? tl() : null, W = bo(e, t, W), e.pingedTasks.push(W), t.formatContext = b, t.context = x, t.keyPath = F, t.treeContext = _, t.componentStack = V, t.debugTask = L, cn(x);
              return;
            }
          }
        }
      }
      throw t.formatContext = b, t.context = x, t.keyPath = F, t.treeContext = _, cn(x), u;
    }
    function ts(e) {
      var t = e.blockedBoundary, u = e.blockedSegment;
      u !== null && (u.status = rt, qi(this, t, e.row, u));
    }
    function Qi(e, t, u, h, b, x, F, _) {
      for (var V = 0; V < u.length; V++) {
        var L = u[V];
        if (L.length === 4)
          Qi(
            e,
            t,
            L[2],
            L[3],
            b,
            x,
            F,
            _
          );
        else {
          var W = e;
          L = L[5];
          var ie = b, ue = x, ae = F, te = _, Me = Ti(
            W,
            null,
            /* @__PURE__ */ new Set(),
            null,
            null
          );
          Me.parentFlushed = !0, Me.rootSegmentID = L, Me.status = Ee, Dl(
            Me,
            ue,
            ie,
            ae,
            te
          ), Me.parentFlushed && W.clientRenderedBoundaries.push(Me);
        }
      }
      if (u.length = 0, h !== null) {
        if (t === null)
          throw Error(
            "We should not have any resumable nodes in the shell. This is a bug in React."
          );
        if (t.status !== Ee && (t.status = Ee, Dl(
          t,
          x,
          b,
          F,
          _
        ), t.parentFlushed && e.clientRenderedBoundaries.push(t)), typeof h == "object")
          for (var An in h) delete h[An];
      }
    }
    function eu(e, t, u) {
      var h = e.blockedBoundary, b = e.blockedSegment;
      if (b !== null) {
        if (b.status === 6) return;
        b.status = rt;
      }
      var x = We(e.componentStack), F = e.node;
      if (F !== null && typeof F == "object" && fo(e, F._debugInfo), h === null) {
        if (t.status !== 13 && t.status !== Tr) {
          if (h = e.replay, h === null) {
            t.trackedPostpones !== null && b !== null ? (h = t.trackedPostpones, yt(t, u, x, e.debugTask), Fc(t, h, e, b), qi(t, null, e.row, b)) : (yt(t, u, x, e.debugTask), ni(t, u, x, e.debugTask));
            return;
          }
          h.pendingTasks--, h.pendingTasks === 0 && 0 < h.nodes.length && (b = yt(t, u, x, null), Qi(
            t,
            null,
            h.nodes,
            h.slots,
            u,
            b,
            x,
            !0
          )), t.pendingRootTasks--, t.pendingRootTasks === 0 && Pi(t);
        }
      } else {
        if (F = t.trackedPostpones, h.status !== Ee) {
          if (F !== null && b !== null)
            return yt(t, u, x, e.debugTask), Fc(t, F, e, b), h.fallbackAbortableTasks.forEach(function(_) {
              return eu(_, t, u);
            }), h.fallbackAbortableTasks.clear(), qi(t, h, e.row, b);
          h.status = Ee, b = yt(
            t,
            u,
            x,
            e.debugTask
          ), h.status = Ee, Dl(h, b, u, x, !0), go(t, h), h.parentFlushed && t.clientRenderedBoundaries.push(h);
        }
        h.pendingTasks--, x = h.row, x !== null && --x.pendingTasks === 0 && At(t, x), h.fallbackAbortableTasks.forEach(function(_) {
          return eu(_, t, u);
        }), h.fallbackAbortableTasks.clear();
      }
      e = e.row, e !== null && --e.pendingTasks === 0 && At(t, e), t.allPendingTasks--, t.allPendingTasks === 0 && Ki(t);
    }
    function Lu(e, t) {
      try {
        var u = e.renderState, h = u.onHeaders;
        if (h) {
          var b = u.headers;
          if (b) {
            u.headers = null;
            var x = b.preconnects;
            if (b.fontPreloads && (x && (x += ", "), x += b.fontPreloads), b.highImagePreloads && (x && (x += ", "), x += b.highImagePreloads), !t) {
              var F = u.styles.values(), _ = F.next();
              e: for (; 0 < b.remainingCapacity && !_.done; _ = F.next())
                for (var V = _.value.sheets.values(), L = V.next(); 0 < b.remainingCapacity && !L.done; L = V.next()) {
                  var W = L.value, ie = W.props, ue = ie.href, ae = W.props, te = Xi(
                    ae.href,
                    "style",
                    {
                      crossOrigin: ae.crossOrigin,
                      integrity: ae.integrity,
                      nonce: ae.nonce,
                      type: ae.type,
                      fetchPriority: ae.fetchPriority,
                      referrerPolicy: ae.referrerPolicy,
                      media: ae.media
                    }
                  );
                  if (0 <= (b.remainingCapacity -= te.length + 2))
                    u.resets.style[ue] = Lt, x && (x += ", "), x += te, u.resets.style[ue] = typeof ie.crossOrigin == "string" || typeof ie.integrity == "string" ? [ie.crossOrigin, ie.integrity] : Lt;
                  else break e;
                }
            }
            h(x ? { Link: x } : {});
          }
        }
      } catch (Me) {
        yt(e, Me, {}, null);
      }
    }
    function Pi(e) {
      e.trackedPostpones === null && Lu(e, !0), e.trackedPostpones === null && Ma(e), e.onShellError = or, e = e.onShellReady, e();
    }
    function Ki(e) {
      Lu(
        e,
        e.trackedPostpones === null ? !0 : e.completedRootSegment === null || e.completedRootSegment.status !== Ye
      ), Ma(e), e = e.onAllReady, e();
    }
    function yo(e, t) {
      if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null && t.children[0].id === -1) {
        var u = t.children[0];
        u.id = t.id, u.parentFlushed = !0, u.status !== kn && u.status !== rt && u.status !== ln || yo(e, u);
      } else e.completedSegments.push(t);
    }
    function Hl(e, t, u) {
      if (Qn !== null) {
        u = u.chunks;
        for (var h = 0, b = 0; b < u.length; b++)
          h += u[b].byteLength;
        t === null ? e.byteSize += h : t.byteSize += h;
      }
    }
    function qi(e, t, u, h) {
      if (u !== null && (--u.pendingTasks === 0 ? At(e, u) : u.together && Pa(e, u)), e.allPendingTasks--, t === null) {
        if (h !== null && h.parentFlushed) {
          if (e.completedRootSegment !== null)
            throw Error(
              "There can only be one root segment. This is a bug in React."
            );
          e.completedRootSegment = h;
        }
        e.pendingRootTasks--, e.pendingRootTasks === 0 && Pi(e);
      } else if (t.pendingTasks--, t.status !== Ee)
        if (t.pendingTasks === 0) {
          if (t.status === Cn && (t.status = kn), h !== null && h.parentFlushed && (h.status === kn || h.status === rt) && yo(t, h), t.parentFlushed && e.completedBoundaries.push(t), t.status === kn)
            u = t.row, u !== null && un(u.hoistables, t.contentState), pr(e, t) || (t.fallbackAbortableTasks.forEach(
              ts,
              e
            ), t.fallbackAbortableTasks.clear(), u !== null && --u.pendingTasks === 0 && At(e, u)), e.pendingRootTasks === 0 && e.trackedPostpones === null && t.contentPreamble !== null && Ma(e);
          else if (t.status === Ye && (t = t.row, t !== null)) {
            if (e.trackedPostpones !== null) {
              u = e.trackedPostpones;
              var b = t.next;
              if (b !== null && (h = b.boundaries, h !== null))
                for (b.boundaries = null, b = 0; b < h.length; b++) {
                  var x = h[b];
                  Pc(e, u, x), qi(e, x, null, null);
                }
            }
            --t.pendingTasks === 0 && At(e, t);
          }
        } else
          h === null || !h.parentFlushed || h.status !== kn && h.status !== rt || (yo(t, h), t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t)), t = t.row, t !== null && t.together && Pa(e, t);
      e.allPendingTasks === 0 && Ki(e);
    }
    function ji(e) {
      if (e.status !== Tr && e.status !== 13) {
        var t = Li, u = Ve.H;
        Ve.H = xu;
        var h = Ve.A;
        Ve.A = c;
        var b = Sn;
        Sn = e;
        var x = Ve.getCurrentStack;
        Ve.getCurrentStack = ei;
        var F = n;
        n = e.resumableState;
        try {
          var _ = e.pingedTasks, V;
          for (V = 0; V < _.length; V++) {
            var L = e, W = _[V], ie = W.blockedSegment;
            if (ie === null) {
              var ue = void 0, ae = L;
              if (L = W, L.replay.pendingTasks !== 0) {
                cn(L.context), ue = r, r = L;
                try {
                  if (typeof L.replay.slots == "number" ? Fa(
                    ae,
                    L,
                    L.replay.slots,
                    L.node,
                    L.childIndex
                  ) : Aa(ae, L), L.replay.pendingTasks === 1 && 0 < L.replay.nodes.length)
                    throw Error(
                      "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
                    );
                  L.replay.pendingTasks--, L.abortSet.delete(L), qi(
                    ae,
                    L.blockedBoundary,
                    L.row,
                    null
                  );
                } catch (lt) {
                  Sa();
                  var te = lt === ui ? Ec() : lt;
                  if (typeof te == "object" && te !== null && typeof te.then == "function") {
                    var Me = L.ping;
                    te.then(Me, Me), L.thenableState = lt === ui ? tl() : null;
                  } else {
                    L.replay.pendingTasks--, L.abortSet.delete(L);
                    var An = We(L.componentStack), Fe = void 0, qe = ae, st = L.blockedBoundary, Ct = ae.status === 12 ? ae.fatalError : te, vn = An, Se = L.replay.nodes, kt = L.replay.slots;
                    Fe = yt(
                      qe,
                      Ct,
                      vn,
                      L.debugTask
                    ), Qi(
                      qe,
                      st,
                      Se,
                      kt,
                      Ct,
                      Fe,
                      vn,
                      !1
                    ), ae.pendingRootTasks--, ae.pendingRootTasks === 0 && Pi(ae), ae.allPendingTasks--, ae.allPendingTasks === 0 && Ki(ae);
                  }
                } finally {
                  r = ue;
                }
              }
            } else if (ae = ue = void 0, Fe = W, qe = ie, qe.status === Cn) {
              qe.status = 6, cn(Fe.context), ae = r, r = Fe;
              var xr = qe.children.length, Mn = qe.chunks.length;
              try {
                Aa(L, Fe), qe.lastPushedText && qe.textEmbedded && qe.chunks.push(xt), Fe.abortSet.delete(Fe), qe.status = kn, Hl(
                  L,
                  Fe.blockedBoundary,
                  qe
                ), qi(
                  L,
                  Fe.blockedBoundary,
                  Fe.row,
                  qe
                );
              } catch (lt) {
                Sa(), qe.children.length = xr, qe.chunks.length = Mn;
                var Vn = lt === ui ? Ec() : L.status === 12 ? L.fatalError : lt;
                if (L.status === 12 && L.trackedPostpones !== null) {
                  var Zr = L.trackedPostpones, rr = We(Fe.componentStack);
                  Fe.abortSet.delete(Fe), yt(
                    L,
                    Vn,
                    rr,
                    Fe.debugTask
                  ), Fc(
                    L,
                    Zr,
                    Fe,
                    qe
                  ), qi(
                    L,
                    Fe.blockedBoundary,
                    Fe.row,
                    qe
                  );
                } else if (typeof Vn == "object" && Vn !== null && typeof Vn.then == "function") {
                  qe.status = Cn, Fe.thenableState = lt === ui ? tl() : null;
                  var zt = Fe.ping;
                  Vn.then(zt, zt);
                } else {
                  var Jn = We(
                    Fe.componentStack
                  );
                  Fe.abortSet.delete(Fe), qe.status = ln;
                  var It = Fe.blockedBoundary, Vr = Fe.row, fl = Fe.debugTask;
                  if (Vr !== null && --Vr.pendingTasks === 0 && At(L, Vr), L.allPendingTasks--, ue = yt(
                    L,
                    Vn,
                    Jn,
                    fl
                  ), It === null)
                    ni(
                      L,
                      Vn,
                      Jn,
                      fl
                    );
                  else if (It.pendingTasks--, It.status !== Ee) {
                    It.status = Ee, Dl(
                      It,
                      ue,
                      Vn,
                      Jn,
                      !1
                    ), go(L, It);
                    var Bt = It.row;
                    Bt !== null && --Bt.pendingTasks === 0 && At(L, Bt), It.parentFlushed && L.clientRenderedBoundaries.push(It), L.pendingRootTasks === 0 && L.trackedPostpones === null && It.contentPreamble !== null && Ma(L);
                  }
                  L.allPendingTasks === 0 && Ki(L);
                }
              } finally {
                r = ae;
              }
            }
          }
          _.splice(0, V), e.destination !== null && rl(
            e,
            e.destination
          );
        } catch (lt) {
          _ = {}, yt(e, lt, _, null), ni(e, lt, _, null);
        } finally {
          n = F, Ve.H = u, Ve.A = h, Ve.getCurrentStack = x, u === xu && cn(t), Sn = b;
        }
      }
    }
    function pc(e, t, u) {
      t.preambleChildren.length && u.push(t.preambleChildren);
      for (var h = !1, b = 0; b < t.children.length; b++)
        h = xs(
          e,
          t.children[b],
          u
        ) || h;
      return h;
    }
    function xs(e, t, u) {
      var h = t.boundary;
      if (h === null)
        return pc(
          e,
          t,
          u
        );
      var b = h.contentPreamble, x = h.fallbackPreamble;
      if (b === null || x === null) return !1;
      switch (h.status) {
        case kn:
          if (yc(e.renderState, b), e.byteSize += h.byteSize, t = h.completedSegments[0], !t)
            throw Error(
              "A previously unvisited boundary must have exactly one root segment. This is a bug in React."
            );
          return pc(
            e,
            t,
            u
          );
        case Ye:
          if (e.trackedPostpones !== null) return !0;
        case Ee:
          if (t.status === kn)
            return yc(e.renderState, x), pc(
              e,
              t,
              u
            );
        default:
          return !0;
      }
    }
    function Ma(e) {
      if (e.completedRootSegment && e.completedPreambleSegments === null) {
        var t = [], u = e.byteSize, h = xs(
          e,
          e.completedRootSegment,
          t
        ), b = e.renderState.preamble;
        h === !1 || b.headChunks && b.bodyChunks ? e.completedPreambleSegments = t : e.byteSize = u;
      }
    }
    function Tt(e, t, u, h) {
      switch (u.parentFlushed = !0, u.status) {
        case Cn:
          u.id = e.nextSegmentId++;
        case Ye:
          return h = u.id, u.lastPushedText = !1, u.textEmbedded = !1, e = e.renderState, N(t, vu), N(t, e.placeholderPrefix), e = re(h.toString(16)), N(t, e), Re(t, Qu);
        case kn:
          u.status = pn;
          var b = !0, x = u.chunks, F = 0;
          u = u.children;
          for (var _ = 0; _ < u.length; _++) {
            for (b = u[_]; F < b.index; F++)
              N(t, x[F]);
            b = ri(e, t, b, h);
          }
          for (; F < x.length - 1; F++)
            N(t, x[F]);
          return F < x.length && (b = Re(t, x[F])), b;
        case rt:
          return !0;
        default:
          throw Error(
            "Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React."
          );
      }
    }
    function ri(e, t, u, h) {
      var b = u.boundary;
      if (b === null)
        return Tt(e, t, u, h);
      if (b.parentFlushed = !0, b.status === Ee) {
        var x = b.row;
        x !== null && --x.pendingTasks === 0 && At(e, x), x = b.errorDigest;
        var F = b.errorMessage, _ = b.errorStack;
        b = b.errorComponentStack, Re(t, as), N(t, bu), x && (N(t, ko), N(t, re(xe(x))), N(
          t,
          Nl
        )), F && (N(t, ua), N(
          t,
          re(xe(F))
        ), N(
          t,
          Nl
        )), _ && (N(t, yu), N(
          t,
          re(xe(_))
        ), N(
          t,
          Nl
        )), b && (N(t, ca), N(
          t,
          re(xe(b))
        ), N(
          t,
          Nl
        )), Re(t, os), Tt(e, t, u, h);
      } else if (b.status !== kn)
        b.status === Cn && (b.rootSegmentID = e.nextSegmentId++), 0 < b.completedSegments.length && e.partialBoundaries.push(b), wi(
          t,
          e.renderState,
          b.rootSegmentID
        ), h && un(h, b.fallbackState), Tt(e, t, u, h);
      else if (!Xt && pr(e, b) && (hi + b.byteSize > e.progressiveChunkSize || jc(b.contentState)))
        b.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(b), wi(
          t,
          e.renderState,
          b.rootSegmentID
        ), Tt(e, t, u, h);
      else {
        if (hi += b.byteSize, h && un(h, b.contentState), u = b.row, u !== null && pr(e, b) && --u.pendingTasks === 0 && At(e, u), Re(t, qu), u = b.completedSegments, u.length !== 1)
          throw Error(
            "A previously unvisited boundary must have exactly one root segment. This is a bug in React."
          );
        ri(e, t, u[0], h);
      }
      return Re(t, Ya);
    }
    function nu(e, t, u, h) {
      return Tc(
        t,
        e.renderState,
        u.parentFormatContext,
        u.id
      ), ri(e, t, u, h), Uo(t, u.parentFormatContext);
    }
    function tu(e, t, u) {
      hi = u.byteSize;
      for (var h = u.completedSegments, b = 0; b < h.length; b++)
        Hu(
          e,
          t,
          u,
          h[b]
        );
      h.length = 0, h = u.row, h !== null && pr(e, u) && --h.pendingTasks === 0 && At(e, h), qn(
        t,
        u.contentState,
        e.renderState
      ), h = e.resumableState, e = e.renderState, b = u.rootSegmentID, u = u.contentState;
      var x = e.stylesToHoist;
      return e.stylesToHoist = !1, N(t, e.startInlineScript), N(t, et), x ? ((h.instructions & Tn) === $n && (h.instructions |= Tn, N(t, gr)), (h.instructions & ur) === $n && (h.instructions |= ur, N(t, Le)), (h.instructions & an) === $n ? (h.instructions |= an, N(
        t,
        nt
      )) : N(t, Hn)) : ((h.instructions & ur) === $n && (h.instructions |= ur, N(t, Le)), N(t, nn)), h = re(b.toString(16)), N(t, e.boundaryPrefix), N(t, h), N(t, $t), N(t, e.segmentPrefix), N(t, h), x ? (N(t, Ur), Ql(t, u)) : N(t, Tl), u = Re(t, He), wc(t, e) && u;
    }
    function Hu(e, t, u, h) {
      if (h.status === pn) return !0;
      var b = u.contentState, x = h.id;
      if (x === -1) {
        if ((h.id = u.rootSegmentID) === -1)
          throw Error(
            "A root segment ID must have been assigned by now. This is a bug in React."
          );
        return nu(
          e,
          t,
          h,
          b
        );
      }
      return x === u.rootSegmentID ? nu(
        e,
        t,
        h,
        b
      ) : (nu(e, t, h, b), u = e.resumableState, e = e.renderState, N(t, e.startInlineScript), N(t, et), (u.instructions & fn) === $n ? (u.instructions |= fn, N(t, J)) : N(t, ve), N(t, e.segmentPrefix), x = re(x.toString(16)), N(t, x), N(t, ge), N(t, e.placeholderPrefix), N(t, x), t = Re(t, en), t);
    }
    function rl(e, t) {
      qt = new Uint8Array(2048), Yt = 0;
      try {
        if (!(0 < e.pendingRootTasks)) {
          var u, h = e.completedRootSegment;
          if (h !== null) {
            if (h.status === Ye) return;
            var b = e.completedPreambleSegments;
            if (b === null) return;
            hi = e.byteSize;
            var x = e.resumableState, F = e.renderState, _ = F.preamble, V = _.htmlChunks, L = _.headChunks, W;
            if (V) {
              for (W = 0; W < V.length; W++)
                N(t, V[W]);
              if (L)
                for (W = 0; W < L.length; W++)
                  N(t, L[W]);
              else
                N(t, In("head")), N(t, et);
            } else if (L)
              for (W = 0; W < L.length; W++)
                N(t, L[W]);
            var ie = F.charsetChunks;
            for (W = 0; W < ie.length; W++)
              N(t, ie[W]);
            ie.length = 0, F.preconnects.forEach(Nn, t), F.preconnects.clear();
            var ue = F.viewportChunks;
            for (W = 0; W < ue.length; W++)
              N(t, ue[W]);
            ue.length = 0, F.fontPreloads.forEach(Nn, t), F.fontPreloads.clear(), F.highImagePreloads.forEach(Nn, t), F.highImagePreloads.clear(), Qe = F, F.styles.forEach(Ea, t), Qe = null;
            var ae = F.importMapChunks;
            for (W = 0; W < ae.length; W++)
              N(t, ae[W]);
            ae.length = 0, F.bootstrapScripts.forEach(Nn, t), F.scripts.forEach(Nn, t), F.scripts.clear(), F.bulkPreloads.forEach(Nn, t), F.bulkPreloads.clear(), V || L || (x.instructions |= hn);
            var te = F.hoistableChunks;
            for (W = 0; W < te.length; W++)
              N(t, te[W]);
            for (x = te.length = 0; x < b.length; x++) {
              var Me = b[x];
              for (F = 0; F < Me.length; F++)
                ri(e, t, Me[F], null);
            }
            var An = e.renderState.preamble, Fe = An.headChunks;
            (An.htmlChunks || Fe) && N(t, ht("head"));
            var qe = An.bodyChunks;
            if (qe)
              for (b = 0; b < qe.length; b++)
                N(t, qe[b]);
            ri(e, t, h, null), e.completedRootSegment = null;
            var st = e.renderState;
            if (e.allPendingTasks !== 0 || e.clientRenderedBoundaries.length !== 0 || e.completedBoundaries.length !== 0 || e.trackedPostpones !== null && (e.trackedPostpones.rootNodes.length !== 0 || e.trackedPostpones.rootSlots !== null)) {
              var Ct = e.resumableState;
              if ((Ct.instructions & Ne) === $n) {
                if (Ct.instructions |= Ne, N(t, st.startInlineScript), (Ct.instructions & hn) === $n) {
                  Ct.instructions |= hn;
                  var vn = "_" + Ct.idPrefix + "R_";
                  N(t, ju), N(
                    t,
                    re(xe(vn))
                  ), N(t, Je);
                }
                N(t, et), N(t, gu), Re(t, Mi);
              }
            }
            wc(t, st);
          }
          var Se = e.renderState;
          h = 0;
          var kt = Se.viewportChunks;
          for (h = 0; h < kt.length; h++)
            N(
              t,
              kt[h]
            );
          kt.length = 0, Se.preconnects.forEach(Nn, t), Se.preconnects.clear(), Se.fontPreloads.forEach(Nn, t), Se.fontPreloads.clear(), Se.highImagePreloads.forEach(
            Nn,
            t
          ), Se.highImagePreloads.clear(), Se.styles.forEach(xc, t), Se.scripts.forEach(Nn, t), Se.scripts.clear(), Se.bulkPreloads.forEach(Nn, t), Se.bulkPreloads.clear();
          var xr = Se.hoistableChunks;
          for (h = 0; h < xr.length; h++)
            N(
              t,
              xr[h]
            );
          xr.length = 0;
          var Mn = e.clientRenderedBoundaries;
          for (u = 0; u < Mn.length; u++) {
            var Vn = Mn[u];
            Se = t;
            var Zr = e.resumableState, rr = e.renderState, zt = Vn.rootSegmentID, Jn = Vn.errorDigest, It = Vn.errorMessage, Vr = Vn.errorStack, fl = Vn.errorComponentStack;
            N(
              Se,
              rr.startInlineScript
            ), N(Se, et), (Zr.instructions & Tn) === $n ? (Zr.instructions |= Tn, N(Se, gt)) : N(Se, _r), N(
              Se,
              rr.boundaryPrefix
            ), N(Se, re(zt.toString(16))), N(Se, Di), (Jn || It || Vr || fl) && (N(
              Se,
              tt
            ), N(
              Se,
              re(
                Ta(Jn || "")
              )
            )), (It || Vr || fl) && (N(
              Se,
              tt
            ), N(
              Se,
              re(
                Ta(It || "")
              )
            )), (Vr || fl) && (N(
              Se,
              tt
            ), N(
              Se,
              re(
                Ta(Vr || "")
              )
            )), fl && (N(
              Se,
              tt
            ), N(
              Se,
              re(
                Ta(fl)
              )
            ));
            var Bt = Re(
              Se,
              Xa
            );
            if (!Bt) {
              e.destination = null, u++, Mn.splice(0, u);
              return;
            }
          }
          Mn.splice(0, u);
          var lt = e.completedBoundaries;
          for (u = 0; u < lt.length; u++)
            if (!tu(
              e,
              t,
              lt[u]
            )) {
              e.destination = null, u++, lt.splice(0, u);
              return;
            }
          lt.splice(0, u), ot(t), qt = new Uint8Array(2048), Yt = 0, Xt = !0;
          var Er = e.partialBoundaries;
          for (u = 0; u < Er.length; u++) {
            e: {
              Mn = e, Vn = t;
              var Jr = Er[u];
              hi = Jr.byteSize;
              var Rr = Jr.completedSegments;
              for (Bt = 0; Bt < Rr.length; Bt++)
                if (!Hu(
                  Mn,
                  Vn,
                  Jr,
                  Rr[Bt]
                )) {
                  Bt++, Rr.splice(0, Bt);
                  var Bi = !1;
                  break e;
                }
              Rr.splice(0, Bt);
              var Qr = Jr.row;
              Qr !== null && Qr.together && Jr.pendingTasks === 1 && (Qr.pendingTasks === 1 ? Vi(
                Mn,
                Qr,
                Qr.hoistables
              ) : Qr.pendingTasks--), Bi = qn(
                Vn,
                Jr.contentState,
                Mn.renderState
              );
            }
            if (!Bi) {
              e.destination = null, u++, Er.splice(0, u);
              return;
            }
          }
          Er.splice(0, u), Xt = !1;
          var St = e.completedBoundaries;
          for (u = 0; u < St.length; u++)
            if (!tu(e, t, St[u])) {
              e.destination = null, u++, St.splice(0, u);
              return;
            }
          St.splice(0, u);
        }
      } finally {
        Xt = !1, e.allPendingTasks === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 ? (e.flushScheduled = !1, u = e.resumableState, u.hasBody && N(t, ht("body")), u.hasHtml && N(t, ht("html")), ot(t), e.abortableTasks.size !== 0 && console.error(
          "There was still abortable task at the root when we closed. This is a bug in React."
        ), e.status = Tr, t.close(), e.destination = null) : ot(t);
      }
    }
    function ll(e) {
      e.flushScheduled = e.destination !== null, ma(function() {
        return ji(e);
      }), _e(function() {
        e.status === 10 && (e.status = 11), e.trackedPostpones === null && Lu(e, e.pendingRootTasks === 0);
      });
    }
    function Wr(e) {
      e.flushScheduled === !1 && e.pingedTasks.length === 0 && e.destination !== null && (e.flushScheduled = !0, _e(function() {
        var t = e.destination;
        t ? rl(e, t) : e.flushScheduled = !1;
      }));
    }
    function il(e, t) {
      if (e.status === 13)
        e.status = Tr, Vl(t, e.fatalError);
      else if (e.status !== Tr && e.destination === null) {
        e.destination = t;
        try {
          rl(e, t);
        } catch (u) {
          t = {}, yt(e, u, t, null), ni(e, u, t, null);
        }
      }
    }
    function Fn(e, t) {
      (e.status === 11 || e.status === 10) && (e.status = 12);
      try {
        var u = e.abortableTasks;
        if (0 < u.size) {
          var h = t === void 0 ? Error("The render was aborted by the server without a reason.") : typeof t == "object" && t !== null && typeof t.then == "function" ? Error("The render was aborted by the server with a promise.") : t;
          e.fatalError = h, u.forEach(function(b) {
            var x = r, F = Ve.getCurrentStack;
            r = b, Ve.getCurrentStack = ei;
            try {
              eu(b, e, h);
            } finally {
              r = x, Ve.getCurrentStack = F;
            }
          }), u.clear();
        }
        e.destination !== null && rl(e, e.destination);
      } catch (b) {
        t = {}, yt(e, b, t, null), ni(e, b, t, null);
      }
    }
    function al(e, t, u) {
      if (t === null) u.rootNodes.push(e);
      else {
        var h = u.workingMap, b = h.get(t);
        b === void 0 && (b = [t[1], t[2], [], null], h.set(t, b), al(b, t[0], u)), b[2].push(e);
      }
    }
    function Un(e) {
      var t = e.trackedPostpones;
      if (t === null || t.rootNodes.length === 0 && t.rootSlots === null)
        return e.trackedPostpones = null;
      if (e.completedRootSegment === null || e.completedRootSegment.status !== Ye && e.completedPreambleSegments !== null) {
        var u = e.nextSegmentId, h = t.rootSlots, b = e.resumableState;
        b.bootstrapScriptContent = void 0, b.bootstrapScripts = void 0, b.bootstrapModules = void 0;
      } else {
        u = 0, h = -1, b = e.resumableState;
        var x = e.renderState;
        b.nextFormID = 0, b.hasBody = !1, b.hasHtml = !1, b.unknownResources = { font: x.resets.font }, b.dnsResources = x.resets.dns, b.connectResources = x.resets.connect, b.imageResources = x.resets.image, b.styleResources = x.resets.style, b.scriptResources = {}, b.moduleUnknownResources = {}, b.moduleScriptResources = {}, b.instructions = $n;
      }
      return {
        nextSegmentId: u,
        rootFormatContext: e.rootFormatContext,
        progressiveChunkSize: e.progressiveChunkSize,
        resumableState: e.resumableState,
        replayNodes: t.rootNodes,
        replaySlots: h
      };
    }
    function zl() {
      var e = zu.version;
      if (e !== "19.2.0")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.2.0
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    }
    var zu = lf, Bu = df, Nu = Symbol.for("react.transitional.element"), ru = Symbol.for("react.portal"), Fi = Symbol.for("react.fragment"), lu = Symbol.for("react.strict_mode"), iu = Symbol.for("react.profiler"), Ir = Symbol.for("react.consumer"), Yn = Symbol.for("react.context"), sn = Symbol.for("react.forward_ref"), $i = Symbol.for("react.suspense"), Ia = Symbol.for("react.suspense_list"), Oa = Symbol.for("react.memo"), ea = Symbol.for("react.lazy"), Ac = Symbol.for("react.scope"), Ut = Symbol.for("react.activity"), Es = Symbol.for("react.legacy_hidden"), Bl = Symbol.for("react.memo_cache_sentinel"), rs = Symbol.for("react.view_transition"), Mc = Symbol.iterator, li = Array.isArray, au = /* @__PURE__ */ new WeakMap(), Kt = /* @__PURE__ */ new WeakMap(), pi = Symbol.for("react.client.reference"), ls = new MessageChannel(), _a = [];
    ls.port1.onmessage = function() {
      var e = _a.shift();
      e && e();
    };
    var Wu = Promise, ma = typeof queueMicrotask == "function" ? queueMicrotask : function(e) {
      Wu.resolve(null).then(e).catch($e);
    }, qt = null, Yt = 0, na = new TextEncoder(), Ln = Object.assign, Rn = Object.prototype.hasOwnProperty, Da = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), wo = {}, Uu = {}, To = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), Ic = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]), Rs = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, jn = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0,
      "aria-braillelabel": 0,
      "aria-brailleroledescription": 0,
      "aria-colindextext": 0,
      "aria-rowindextext": 0
    }, Ai = {}, is = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), i = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), o = !1, f = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, g = {}, T = /^on./, k = /^on[^A-Z]/, p = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), X = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), m = /^(?:webkit|moz|o)[A-Z]/, Y = /^-ms-/, ne = /-(.)/g, $ = /;\s*$/, fe = {}, ke = {}, Ze = !1, De = !1, pe = /["'&<>]/, Be = /([A-Z])/g, me = /^ms-/, Gn = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, Ve = zu.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, rn = Bu.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, bn = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), Ue = rn.d;
    rn.d = {
      f: Ue.f,
      r: Ue.r,
      D: function(e) {
        var t = Sn || null;
        if (t) {
          var u = t.resumableState, h = t.renderState;
          if (typeof e == "string" && e) {
            if (!u.dnsResources.hasOwnProperty(e)) {
              u.dnsResources[e] = dn, u = h.headers;
              var b, x;
              (x = u && 0 < u.remainingCapacity) && (x = (b = "<" + Ca(e) + ">; rel=dns-prefetch", 0 <= (u.remainingCapacity -= b.length + 2))), x ? (h.resets.dns[e] = dn, u.preconnects && (u.preconnects += ", "), u.preconnects += b) : (b = [], Pr(b, { href: e, rel: "dns-prefetch" }), h.preconnects.add(b));
            }
            Wr(t);
          }
        } else Ue.D(e);
      },
      C: function(e, t) {
        var u = Sn || null;
        if (u) {
          var h = u.resumableState, b = u.renderState;
          if (typeof e == "string" && e) {
            var x = t === "use-credentials" ? "credentials" : typeof t == "string" ? "anonymous" : "default";
            if (!h.connectResources[x].hasOwnProperty(e)) {
              h.connectResources[x][e] = dn, h = b.headers;
              var F, _;
              if (_ = h && 0 < h.remainingCapacity) {
                if (_ = "<" + Ca(e) + ">; rel=preconnect", typeof t == "string") {
                  var V = Nr(
                    t,
                    "crossOrigin"
                  );
                  _ += '; crossorigin="' + V + '"';
                }
                _ = (F = _, 0 <= (h.remainingCapacity -= F.length + 2));
              }
              _ ? (b.resets.connect[x][e] = dn, h.preconnects && (h.preconnects += ", "), h.preconnects += F) : (x = [], Pr(x, {
                rel: "preconnect",
                href: e,
                crossOrigin: t
              }), b.preconnects.add(x));
            }
            Wr(u);
          }
        } else Ue.C(e, t);
      },
      L: function(e, t, u) {
        var h = Sn || null;
        if (h) {
          var b = h.resumableState, x = h.renderState;
          if (t && e) {
            switch (t) {
              case "image":
                if (u)
                  var F = u.imageSrcSet, _ = u.imageSizes, V = u.fetchPriority;
                var L = F ? F + `
` + (_ || "") : e;
                if (b.imageResources.hasOwnProperty(L)) return;
                b.imageResources[L] = Lt, b = x.headers;
                var W;
                b && 0 < b.remainingCapacity && typeof F != "string" && V === "high" && (W = Xi(e, t, u), 0 <= (b.remainingCapacity -= W.length + 2)) ? (x.resets.image[L] = Lt, b.highImagePreloads && (b.highImagePreloads += ", "), b.highImagePreloads += W) : (b = [], Pr(
                  b,
                  Ln(
                    {
                      rel: "preload",
                      href: F ? void 0 : e,
                      as: t
                    },
                    u
                  )
                ), V === "high" ? x.highImagePreloads.add(b) : (x.bulkPreloads.add(b), x.preloads.images.set(L, b)));
                break;
              case "style":
                if (b.styleResources.hasOwnProperty(e)) return;
                F = [], Pr(
                  F,
                  Ln({ rel: "preload", href: e, as: t }, u)
                ), b.styleResources[e] = !u || typeof u.crossOrigin != "string" && typeof u.integrity != "string" ? Lt : [u.crossOrigin, u.integrity], x.preloads.stylesheets.set(e, F), x.bulkPreloads.add(F);
                break;
              case "script":
                if (b.scriptResources.hasOwnProperty(e)) return;
                F = [], x.preloads.scripts.set(e, F), x.bulkPreloads.add(F), Pr(
                  F,
                  Ln({ rel: "preload", href: e, as: t }, u)
                ), b.scriptResources[e] = !u || typeof u.crossOrigin != "string" && typeof u.integrity != "string" ? Lt : [u.crossOrigin, u.integrity];
                break;
              default:
                if (b.unknownResources.hasOwnProperty(t)) {
                  if (F = b.unknownResources[t], F.hasOwnProperty(e))
                    return;
                } else
                  F = {}, b.unknownResources[t] = F;
                if (F[e] = Lt, (b = x.headers) && 0 < b.remainingCapacity && t === "font" && (L = Xi(e, t, u), 0 <= (b.remainingCapacity -= L.length + 2)))
                  x.resets.font[e] = Lt, b.fontPreloads && (b.fontPreloads += ", "), b.fontPreloads += L;
                else
                  switch (b = [], e = Ln(
                    { rel: "preload", href: e, as: t },
                    u
                  ), Pr(b, e), t) {
                    case "font":
                      x.fontPreloads.add(b);
                      break;
                    default:
                      x.bulkPreloads.add(b);
                  }
            }
            Wr(h);
          }
        } else Ue.L(e, t, u);
      },
      m: function(e, t) {
        var u = Sn || null;
        if (u) {
          var h = u.resumableState, b = u.renderState;
          if (e) {
            var x = t && typeof t.as == "string" ? t.as : "script";
            switch (x) {
              case "script":
                if (h.moduleScriptResources.hasOwnProperty(e))
                  return;
                x = [], h.moduleScriptResources[e] = !t || typeof t.crossOrigin != "string" && typeof t.integrity != "string" ? Lt : [t.crossOrigin, t.integrity], b.preloads.moduleScripts.set(e, x);
                break;
              default:
                if (h.moduleUnknownResources.hasOwnProperty(x)) {
                  var F = h.unknownResources[x];
                  if (F.hasOwnProperty(e)) return;
                } else
                  F = {}, h.moduleUnknownResources[x] = F;
                x = [], F[e] = Lt;
            }
            Pr(
              x,
              Ln({ rel: "modulepreload", href: e }, t)
            ), b.bulkPreloads.add(x), Wr(u);
          }
        } else Ue.m(e, t);
      },
      X: function(e, t) {
        var u = Sn || null;
        if (u) {
          var h = u.resumableState, b = u.renderState;
          if (e) {
            var x = h.scriptResources.hasOwnProperty(
              e
            ) ? h.scriptResources[e] : void 0;
            x !== dn && (h.scriptResources[e] = dn, t = Ln({ src: e, async: !0 }, t), x && (x.length === 2 && Gi(t, x), e = b.preloads.scripts.get(e)) && (e.length = 0), e = [], b.scripts.add(e), Au(e, t), Wr(u));
          }
        } else Ue.X(e, t);
      },
      S: function(e, t, u) {
        var h = Sn || null;
        if (h) {
          var b = h.resumableState, x = h.renderState;
          if (e) {
            t = t || "default";
            var F = x.styles.get(t), _ = b.styleResources.hasOwnProperty(e) ? b.styleResources[e] : void 0;
            _ !== dn && (b.styleResources[e] = dn, F || (F = {
              precedence: re(xe(t)),
              rules: [],
              hrefs: [],
              sheets: /* @__PURE__ */ new Map()
            }, x.styles.set(t, F)), t = {
              state: fa,
              props: Ln(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                u
              )
            }, _ && (_.length === 2 && Gi(t.props, _), (x = x.preloads.stylesheets.get(e)) && 0 < x.length ? x.length = 0 : t.state = nc), F.sheets.set(e, t), Wr(h));
          }
        } else Ue.S(e, t, u);
      },
      M: function(e, t) {
        var u = Sn || null;
        if (u) {
          var h = u.resumableState, b = u.renderState;
          if (e) {
            var x = h.moduleScriptResources.hasOwnProperty(e) ? h.moduleScriptResources[e] : void 0;
            x !== dn && (h.moduleScriptResources[e] = dn, t = Ln(
              { src: e, type: "module", async: !0 },
              t
            ), x && (x.length === 2 && Gi(t, x), e = b.preloads.moduleScripts.get(e)) && (e.length = 0), e = [], b.scripts.add(e), Au(e, t), Wr(u));
          }
        } else Ue.M(e, t);
      }
    };
    var $n = 0, fn = 1, ur = 2, Tn = 4, an = 8, hn = 32, Ne = 64, dn = null, Lt = [];
    Object.freeze(Lt);
    var Qe = null;
    Z('"></template>');
    var ta = Z("<script"), Mi = Z("<\/script>"), cr = Z('<script src="'), dl = Z('<script type="module" src="'), gl = Z(' nonce="'), vl = Z(' integrity="'), ii = Z(' crossorigin="'), Ii = Z(' async=""><\/script>'), Mt = Z("<style"), La = /(<\/|<)(s)(cript)/gi, Ha = Z(
      '<script type="importmap">'
    ), ou = Z("<\/script>"), Yu = {}, xo = 0, ra = 1, sr = 2, uu = 3, fr = 4, ol = 5, Oi = 6, cu = 7, _i = 8, Gu = 9, xt = Z("<!-- -->"), su = /* @__PURE__ */ new Map(), la = Z(' style="'), Eo = Z(":"), za = Z(";"), dt = Z(" "), ul = Z('="'), Je = Z('"'), mi = Z('=""'), Ro = Z(
      xe(
        "javascript:throw new Error('React form unexpectedly submitted.')"
      )
    ), ia = Z('<input type="hidden"'), et = Z(">"), Or = Z("/>"), aa = !1, Ba = !1, bl = !1, jt = !1, Co = !1, hr = !1, Oc = !1, Na = !1, fu = !1, Xu = !1, Zu = !1, ai = Z(' selected=""'), Wa = Z(
      `addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});`
    ), Ua = Z("<!--F!-->"), dr = Z("<!--F-->"), hu = /(<\/|<)(s)(tyle)/gi, du = Z("<!--head-->"), _c = Z("<!--body-->"), mc = Z("<!--html-->"), Vu = Z(`
`), Dc = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Lc = /* @__PURE__ */ new Map(), Et = Z("<!DOCTYPE html>"), Ju = /* @__PURE__ */ new Map(), gu = Z(
      "requestAnimationFrame(function(){$RT=performance.now()});"
    ), vu = Z('<template id="'), Qu = Z('"></template>'), Hc = Z("<!--&-->"), Ku = Z("<!--/&-->"), qu = Z("<!--$-->"), oa = Z(
      '<!--$?--><template id="'
    ), yl = Z('"></template>'), as = Z("<!--$!-->"), Ya = Z("<!--/$-->"), bu = Z("<template"), Nl = Z('"'), ko = Z(' data-dgst="'), ua = Z(' data-msg="'), yu = Z(' data-stck="'), ca = Z(' data-cstck="'), os = Z("></template>"), us = Z('<div hidden id="'), Wl = Z('">'), So = Z("</div>"), cl = Z(
      '<svg aria-hidden="true" style="display:none" id="'
    ), sa = Z('">'), Ga = Z("</svg>"), wl = Z(
      '<math aria-hidden="true" style="display:none" id="'
    ), zc = Z('">'), cs = Z("</math>"), Po = Z('<table hidden id="'), l = Z('">'), a = Z("</table>"), s = Z(
      '<table hidden><tbody id="'
    ), v = Z('">'), w = Z("</tbody></table>"), C = Z('<table hidden><tr id="'), S = Z('">'), H = Z("</tr></table>"), O = Z(
      '<table hidden><colgroup id="'
    ), z = Z('">'), G = Z("</colgroup></table>"), J = Z(
      '$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'
    ), ve = Z('$RS("'), ge = Z('","'), en = Z('")<\/script>');
    Z('<template data-rsi="" data-sid="'), Z('" data-pid="');
    var Le = Z(
      `$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d||"/&"===d)if(0===h)break;else h--;else"$"!==d&&"$?"!==d&&"$~"!==d&&"$!"!==d&&"&"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data="$";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};
$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data="$~",$RB.push(a,b),2===$RB.length&&("number"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};`
    );
    re(
      `$RV=function(A,g){function k(a,b){var e=a.getAttribute(b);e&&(b=a.style,l.push(a,b.viewTransitionName,b.viewTransitionClass),"auto"!==e&&(b.viewTransitionClass=e),(a=a.getAttribute("vt-name"))||(a="_T_"+K++ +"_"),b.viewTransitionName=a,B=!0)}var B=!1,K=0,l=[];try{var f=document.__reactViewTransition;if(f){f.finished.finally($RV.bind(null,g));return}var m=new Map;for(f=1;f<g.length;f+=2)for(var h=g[f].querySelectorAll("[vt-share]"),d=0;d<h.length;d++){var c=h[d];m.set(c.getAttribute("vt-name"),c)}var u=[];for(h=0;h<g.length;h+=2){var C=g[h],x=C.parentNode;if(x){var v=x.getBoundingClientRect();if(v.left||v.top||v.width||v.height){c=C;for(f=0;c;){if(8===c.nodeType){var r=c.data;if("/$"===r)if(0===f)break;else f--;else"$"!==r&&"$?"!==r&&"$~"!==r&&"$!"!==r||f++}else if(1===c.nodeType){d=c;var D=d.getAttribute("vt-name"),y=m.get(D);k(d,y?"vt-share":"vt-exit");y&&(k(y,"vt-share"),m.set(D,null));var E=d.querySelectorAll("[vt-share]");for(d=0;d<E.length;d++){var F=E[d],G=F.getAttribute("vt-name"),
H=m.get(G);H&&(k(F,"vt-share"),k(H,"vt-share"),m.set(G,null))}}c=c.nextSibling}for(var I=g[h+1],t=I.firstElementChild;t;)null!==m.get(t.getAttribute("vt-name"))&&k(t,"vt-enter"),t=t.nextElementSibling;c=x;do for(var n=c.firstElementChild;n;){var J=n.getAttribute("vt-update");J&&"none"!==J&&!l.includes(n)&&k(n,"vt-update");n=n.nextElementSibling}while((c=c.parentNode)&&1===c.nodeType&&"none"!==c.getAttribute("vt-update"));u.push.apply(u,I.querySelectorAll('img[src]:not([loading="lazy"])'))}}}if(B){var z=
document.__reactViewTransition=document.startViewTransition({update:function(){A(g);for(var a=[document.documentElement.clientHeight,document.fonts.ready],b={},e=0;e<u.length;b={g:b.g},e++)if(b.g=u[e],!b.g.complete){var p=b.g.getBoundingClientRect();0<p.bottom&&0<p.right&&p.top<window.innerHeight&&p.left<window.innerWidth&&(p=new Promise(function(w){return function(q){w.g.addEventListener("load",q);w.g.addEventListener("error",q)}}(b)),a.push(p))}return Promise.race([Promise.all(a),new Promise(function(w){var q=
performance.now();setTimeout(w,2300>q&&2E3<q?2300-q:500)})])},types:[]});z.ready.finally(function(){for(var a=l.length-3;0<=a;a-=3){var b=l[a],e=b.style;e.viewTransitionName=l[a+1];e.viewTransitionClass=l[a+1];""===b.getAttribute("style")&&b.removeAttribute("style")}});z.finished.finally(function(){document.__reactViewTransition===z&&(document.__reactViewTransition=null)});$RB=[];return}}catch(a){}A(g)}.bind(null,$RV);`
    );
    var nn = Z('$RC("'), nt = Z(
      `$RM=new Map;$RR=function(n,w,p){function u(q){this._p=null;q()}for(var r=new Map,t=document,h,b,e=t.querySelectorAll("link[data-precedence],style[data-precedence]"),v=[],k=0;b=e[k++];)"not all"===b.getAttribute("media")?v.push(b):("LINK"===b.tagName&&$RM.set(b.getAttribute("href"),b),r.set(b.dataset.precedence,h=b));e=0;b=[];var l,a;for(k=!0;;){if(k){var f=p[e++];if(!f){k=!1;e=0;continue}var c=!1,m=0;var d=f[m++];if(a=$RM.get(d)){var g=a._p;c=!0}else{a=t.createElement("link");a.href=d;a.rel=
"stylesheet";for(a.dataset.precedence=l=f[m++];g=f[m++];)a.setAttribute(g,f[m++]);g=a._p=new Promise(function(q,x){a.onload=u.bind(a,q);a.onerror=u.bind(a,x)});$RM.set(d,a)}d=a.getAttribute("media");!g||d&&!matchMedia(d).matches||b.push(g);if(c)continue}else{a=v[e++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=r.get(l)||h;c===h&&(h=a);r.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=t.head,c.insertBefore(a,c.firstChild))}if(p=document.getElementById(n))p.previousSibling.data=
"$~";Promise.all(b).then($RC.bind(null,n,w),$RX.bind(null,n,"CSS failed to load"))};$RR("`
    ), Hn = Z('$RR("'), $t = Z('","'), Ur = Z('",'), Tl = Z('"'), He = Z(")<\/script>");
    Z('<template data-rci="" data-bid="'), Z('<template data-rri="" data-bid="'), Z('" data-sid="'), Z('" data-sty="');
    var gr = Z(
      '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};'
    ), gt = Z(
      '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("'
    ), _r = Z('$RX("'), Di = Z('"'), tt = Z(","), Xa = Z(")<\/script>");
    Z('<template data-rxi="" data-bid="'), Z('" data-dgst="'), Z('" data-msg="'), Z('" data-stck="'), Z('" data-cstck="');
    var xl = /[<\u2028\u2029]/g, vr = /[&><\u2028\u2029]/g, Ul = Z(
      ' media="not all" data-precedence="'
    ), br = Z('" data-href="'), Za = Z('">'), Fo = Z("</style>"), mr = !1, po = !0, yr = [], Va = Z(' data-precedence="'), Bc = Z('" data-href="'), Xn = Z(" "), Ao = Z('">'), Yl = Z("</style>");
    Z('<link rel="expect" href="#'), Z('" blocking="render"/>');
    var ju = Z(' id="'), Ja = Z("["), $u = Z(",["), ec = Z(","), Mo = Z("]"), fa = 0, nc = 1, oi = 2, Qa = 3, Ka = /[<>\r\n]/g, ss = /["';,\r\n]/g, El = Function.prototype.bind, fs = Symbol.for("react.client.reference"), sl = {};
    Object.freeze(sl);
    var ha = {}, Li = null, tc = {}, rc = {}, lc = /* @__PURE__ */ new Set(), qa = /* @__PURE__ */ new Set(), hs = /* @__PURE__ */ new Set(), Nc = /* @__PURE__ */ new Set(), Io = /* @__PURE__ */ new Set(), ds = /* @__PURE__ */ new Set(), ic = /* @__PURE__ */ new Set(), Cs = /* @__PURE__ */ new Set(), Wc = /* @__PURE__ */ new Set(), ks = {
      enqueueSetState: function(e, t, u) {
        var h = e._reactInternals;
        h.queue === null ? Qt(e, "setState") : (h.queue.push(t), u != null && Ol(u));
      },
      enqueueReplaceState: function(e, t, u) {
        e = e._reactInternals, e.replace = !0, e.queue = [t], u != null && Ol(u);
      },
      enqueueForceUpdate: function(e, t) {
        e._reactInternals.queue === null ? Qt(e, "forceUpdate") : t != null && Ol(t);
      }
    }, ac = { id: 1, overflow: "" }, Oo = Math.clz32 ? Math.clz32 : Iu, Ms = Math.log, Is = Math.LN2, ui = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), gs = null, Os = typeof Object.is == "function" ? Object.is : Ou, Gt = null, Hi = null, wr = null, da = null, Rl = null, xn = null, Yr = !1, zi = !1, Rt = 0, wu = 0, oc = -1, vs = 0, _o = null, ja = null, Tu = 0, Gl = !1, $a, xu = {
      readContext: es,
      use: function(e) {
        if (e !== null && typeof e == "object") {
          if (typeof e.then == "function")
            return pt(e);
          if (e.$$typeof === Yn)
            return es(e);
        }
        throw Error(
          "An unsupported type was passed to use(): " + String(e)
        );
      },
      useContext: function(e) {
        return $a = "useContext", Wn(), e._currentValue;
      },
      useMemo: uo,
      useReducer: oo,
      useRef: function(e) {
        Gt = Wn(), xn = ao();
        var t = xn.memoizedState;
        return t === null ? (e = { current: e }, Object.seal(e), xn.memoizedState = e) : t;
      },
      useState: function(e) {
        return $a = "useState", oo(ns, e);
      },
      useInsertionEffect: or,
      useLayoutEffect: or,
      useCallback: function(e, t) {
        return uo(function() {
          return e;
        }, t);
      },
      useImperativeHandle: or,
      useEffect: or,
      useDebugValue: or,
      useDeferredValue: function(e, t) {
        return Wn(), t !== void 0 ? t : e;
      },
      useTransition: function() {
        return Wn(), [!1, mu];
      },
      useId: function() {
        var e = Hi.treeContext, t = e.overflow;
        e = e.id, e = (e & ~(1 << 32 - Oo(e) - 1)).toString(32) + t;
        var u = n;
        if (u === null)
          throw Error(
            "Invalid hook call. Hooks can only be called inside of the body of a function component."
          );
        return t = Rt++, e = "_" + u.idPrefix + "R_" + e, 0 < t && (e += "H" + t.toString(32)), e + "_";
      },
      useSyncExternalStore: function(e, t, u) {
        if (u === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        return u();
      },
      useOptimistic: function(e) {
        return Wn(), [e, Jo];
      },
      useActionState: Qo,
      useFormState: Qo,
      useHostTransitionStatus: function() {
        return Wn(), bn;
      },
      useMemoCache: function(e) {
        for (var t = Array(e), u = 0; u < e; u++)
          t[u] = Bl;
        return t;
      },
      useCacheRefresh: function() {
        return co;
      },
      useEffectEvent: function() {
        return jl;
      }
    }, n = null, r = null, c = {
      getCacheForType: function() {
        throw Error("Not implemented.");
      },
      cacheSignal: function() {
        throw Error("Not implemented.");
      },
      getOwner: function() {
        return r === null ? null : r.componentStack;
      }
    }, d = 0, y, R, I, D, ee, B, Q;
    Ko.__reactDisabledLog = !0;
    var se, ye, he = !1, le = new (typeof WeakMap == "function" ? WeakMap : Map)(), Ke = {
      react_stack_bottom_frame: function(e, t, u) {
        return e(t, u);
      }
    }, On = Ke.react_stack_bottom_frame.bind(Ke), Oe = {
      react_stack_bottom_frame: function(e) {
        return e.render();
      }
    }, gn = Oe.react_stack_bottom_frame.bind(Oe), er = {
      react_stack_bottom_frame: function(e) {
        var t = e._init;
        return t(e._payload);
      }
    }, nr = er.react_stack_bottom_frame.bind(er), yn = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var Ht = performance, ci = function() {
        return Ht.now();
      };
    else {
      var Dr = Date;
      ci = function() {
        return Dr.now();
      };
    }
    var Ee = 4, Cn = 0, kn = 1, pn = 2, rt = 3, ln = 4, Ye = 5, Tr = 14, Sn = null, tr = {}, Zn = {}, Gr = {}, mo = {}, Xr = !1, si = !1, fi = !1, hi = 0, Xt = !1;
    zl(), zl(), Ws.prerender = function(e, t) {
      return new Promise(function(u, h) {
        var b = t ? t.onHeaders : void 0, x;
        b && (x = function(W) {
          b(new Headers(W));
        });
        var F = Vt(
          t ? t.identifierPrefix : void 0,
          t ? t.unstable_externalRuntimeSrc : void 0,
          t ? t.bootstrapScriptContent : void 0,
          t ? t.bootstrapScripts : void 0,
          t ? t.bootstrapModules : void 0
        ), _ = Ar(
          e,
          F,
          el(
            F,
            void 0,
            t ? t.unstable_externalRuntimeSrc : void 0,
            t ? t.importMap : void 0,
            x,
            t ? t.maxHeadersLength : void 0
          ),
          be(t ? t.namespaceURI : void 0),
          t ? t.progressiveChunkSize : void 0,
          t ? t.onError : void 0,
          function() {
            var W = new ReadableStream(
              {
                type: "bytes",
                pull: function(ie) {
                  il(_, ie);
                },
                cancel: function(ie) {
                  _.destination = null, Fn(_, ie);
                }
              },
              { highWaterMark: 0 }
            );
            W = {
              postponed: Un(_),
              prelude: W
            }, u(W);
          },
          void 0,
          void 0,
          h,
          t ? t.onPostpone : void 0
        );
        if (t && t.signal) {
          var V = t.signal;
          if (V.aborted) Fn(_, V.reason);
          else {
            var L = function() {
              Fn(_, V.reason), V.removeEventListener("abort", L);
            };
            V.addEventListener("abort", L);
          }
        }
        ll(_);
      });
    }, Ws.renderToReadableStream = function(e, t) {
      return new Promise(function(u, h) {
        var b, x, F = new Promise(function(ae, te) {
          x = ae, b = te;
        }), _ = t ? t.onHeaders : void 0, V;
        _ && (V = function(ae) {
          _(new Headers(ae));
        });
        var L = Vt(
          t ? t.identifierPrefix : void 0,
          t ? t.unstable_externalRuntimeSrc : void 0,
          t ? t.bootstrapScriptContent : void 0,
          t ? t.bootstrapScripts : void 0,
          t ? t.bootstrapModules : void 0
        ), W = so(
          e,
          L,
          el(
            L,
            t ? t.nonce : void 0,
            t ? t.unstable_externalRuntimeSrc : void 0,
            t ? t.importMap : void 0,
            V,
            t ? t.maxHeadersLength : void 0
          ),
          be(t ? t.namespaceURI : void 0),
          t ? t.progressiveChunkSize : void 0,
          t ? t.onError : void 0,
          x,
          function() {
            var ae = new ReadableStream(
              {
                type: "bytes",
                pull: function(te) {
                  il(W, te);
                },
                cancel: function(te) {
                  W.destination = null, Fn(W, te);
                }
              },
              { highWaterMark: 0 }
            );
            ae.allReady = F, u(ae);
          },
          function(ae) {
            F.catch(function() {
            }), h(ae);
          },
          b,
          t ? t.onPostpone : void 0,
          t ? t.formState : void 0
        );
        if (t && t.signal) {
          var ie = t.signal;
          if (ie.aborted) Fn(W, ie.reason);
          else {
            var ue = function() {
              Fn(W, ie.reason), ie.removeEventListener("abort", ue);
            };
            ie.addEventListener("abort", ue);
          }
        }
        ll(W);
      });
    }, Ws.resume = function(e, t, u) {
      return new Promise(function(h, b) {
        var x, F, _ = new Promise(function(ie, ue) {
          F = ie, x = ue;
        }), V = mt(
          e,
          t,
          el(
            t.resumableState,
            u ? u.nonce : void 0,
            void 0,
            void 0,
            void 0,
            void 0
          ),
          u ? u.onError : void 0,
          F,
          function() {
            var ie = new ReadableStream(
              {
                type: "bytes",
                pull: function(ue) {
                  il(V, ue);
                },
                cancel: function(ue) {
                  V.destination = null, Fn(V, ue);
                }
              },
              { highWaterMark: 0 }
            );
            ie.allReady = _, h(ie);
          },
          function(ie) {
            _.catch(function() {
            }), b(ie);
          },
          x,
          u ? u.onPostpone : void 0
        );
        if (u && u.signal) {
          var L = u.signal;
          if (L.aborted) Fn(V, L.reason);
          else {
            var W = function() {
              Fn(V, L.reason), L.removeEventListener("abort", W);
            };
            L.addEventListener("abort", W);
          }
        }
        ll(V);
      });
    }, Ws.resumeAndPrerender = function(e, t, u) {
      return new Promise(function(h, b) {
        var x = Dn(
          e,
          t,
          el(
            t.resumableState,
            void 0,
            void 0,
            void 0,
            void 0,
            void 0
          ),
          u ? u.onError : void 0,
          function() {
            var V = new ReadableStream(
              {
                type: "bytes",
                pull: function(L) {
                  il(x, L);
                },
                cancel: function(L) {
                  x.destination = null, Fn(x, L);
                }
              },
              { highWaterMark: 0 }
            );
            V = { postponed: Un(x), prelude: V }, h(V);
          },
          void 0,
          void 0,
          b,
          u ? u.onPostpone : void 0
        );
        if (u && u.signal) {
          var F = u.signal;
          if (F.aborted) Fn(x, F.reason);
          else {
            var _ = function() {
              Fn(x, F.reason), F.removeEventListener("abort", _);
            };
            F.addEventListener("abort", _);
          }
        }
        ll(x);
      });
    }, Ws.version = "19.2.0";
  })()), Ws;
}
var Wf;
function dh() {
  if (Wf) return Bs;
  Wf = 1;
  var A, P;
  return process.env.NODE_ENV === "production" ? (A = ch(), P = sh()) : (A = fh(), P = hh()), Bs.version = A.version, Bs.renderToString = A.renderToString, Bs.renderToStaticMarkup = A.renderToStaticMarkup, Bs.renderToReadableStream = P.renderToReadableStream, Bs.resume = P.resume, Bs;
}
var gh = dh();
function hf(A) {
  "@babel/helpers - typeof";
  return hf = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(P) {
    return typeof P;
  } : function(P) {
    return P && typeof Symbol == "function" && P.constructor === Symbol && P !== Symbol.prototype ? "symbol" : typeof P;
  }, hf(A);
}
var vh = /^\s+/, bh = /\s+$/;
function Pe(A, P) {
  if (A = A || "", P = P || {}, A instanceof Pe)
    return A;
  if (!(this instanceof Pe))
    return new Pe(A, P);
  var E = yh(A);
  this._originalInput = A, this._r = E.r, this._g = E.g, this._b = E.b, this._a = E.a, this._roundA = Math.round(100 * this._a) / 100, this._format = P.format || E.format, this._gradientType = P.gradientType, this._r < 1 && (this._r = Math.round(this._r)), this._g < 1 && (this._g = Math.round(this._g)), this._b < 1 && (this._b = Math.round(this._b)), this._ok = E.ok;
}
Pe.prototype = {
  isDark: function() {
    return this.getBrightness() < 128;
  },
  isLight: function() {
    return !this.isDark();
  },
  isValid: function() {
    return this._ok;
  },
  getOriginalInput: function() {
    return this._originalInput;
  },
  getFormat: function() {
    return this._format;
  },
  getAlpha: function() {
    return this._a;
  },
  getBrightness: function() {
    var P = this.toRgb();
    return (P.r * 299 + P.g * 587 + P.b * 114) / 1e3;
  },
  getLuminance: function() {
    var P = this.toRgb(), E, U, j, q, de, Te;
    return E = P.r / 255, U = P.g / 255, j = P.b / 255, E <= 0.03928 ? q = E / 12.92 : q = Math.pow((E + 0.055) / 1.055, 2.4), U <= 0.03928 ? de = U / 12.92 : de = Math.pow((U + 0.055) / 1.055, 2.4), j <= 0.03928 ? Te = j / 12.92 : Te = Math.pow((j + 0.055) / 1.055, 2.4), 0.2126 * q + 0.7152 * de + 0.0722 * Te;
  },
  setAlpha: function(P) {
    return this._a = $f(P), this._roundA = Math.round(100 * this._a) / 100, this;
  },
  toHsv: function() {
    var P = Yf(this._r, this._g, this._b);
    return {
      h: P.h * 360,
      s: P.s,
      v: P.v,
      a: this._a
    };
  },
  toHsvString: function() {
    var P = Yf(this._r, this._g, this._b), E = Math.round(P.h * 360), U = Math.round(P.s * 100), j = Math.round(P.v * 100);
    return this._a == 1 ? "hsv(" + E + ", " + U + "%, " + j + "%)" : "hsva(" + E + ", " + U + "%, " + j + "%, " + this._roundA + ")";
  },
  toHsl: function() {
    var P = Uf(this._r, this._g, this._b);
    return {
      h: P.h * 360,
      s: P.s,
      l: P.l,
      a: this._a
    };
  },
  toHslString: function() {
    var P = Uf(this._r, this._g, this._b), E = Math.round(P.h * 360), U = Math.round(P.s * 100), j = Math.round(P.l * 100);
    return this._a == 1 ? "hsl(" + E + ", " + U + "%, " + j + "%)" : "hsla(" + E + ", " + U + "%, " + j + "%, " + this._roundA + ")";
  },
  toHex: function(P) {
    return Gf(this._r, this._g, this._b, P);
  },
  toHexString: function(P) {
    return "#" + this.toHex(P);
  },
  toHex8: function(P) {
    return Eh(this._r, this._g, this._b, this._a, P);
  },
  toHex8String: function(P) {
    return "#" + this.toHex8(P);
  },
  toRgb: function() {
    return {
      r: Math.round(this._r),
      g: Math.round(this._g),
      b: Math.round(this._b),
      a: this._a
    };
  },
  toRgbString: function() {
    return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
  },
  toPercentageRgb: function() {
    return {
      r: Math.round(ir(this._r, 255) * 100) + "%",
      g: Math.round(ir(this._g, 255) * 100) + "%",
      b: Math.round(ir(this._b, 255) * 100) + "%",
      a: this._a
    };
  },
  toPercentageRgbString: function() {
    return this._a == 1 ? "rgb(" + Math.round(ir(this._r, 255) * 100) + "%, " + Math.round(ir(this._g, 255) * 100) + "%, " + Math.round(ir(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(ir(this._r, 255) * 100) + "%, " + Math.round(ir(this._g, 255) * 100) + "%, " + Math.round(ir(this._b, 255) * 100) + "%, " + this._roundA + ")";
  },
  toName: function() {
    return this._a === 0 ? "transparent" : this._a < 1 ? !1 : _h[Gf(this._r, this._g, this._b, !0)] || !1;
  },
  toFilter: function(P) {
    var E = "#" + Xf(this._r, this._g, this._b, this._a), U = E, j = this._gradientType ? "GradientType = 1, " : "";
    if (P) {
      var q = Pe(P);
      U = "#" + Xf(q._r, q._g, q._b, q._a);
    }
    return "progid:DXImageTransform.Microsoft.gradient(" + j + "startColorstr=" + E + ",endColorstr=" + U + ")";
  },
  toString: function(P) {
    var E = !!P;
    P = P || this._format;
    var U = !1, j = this._a < 1 && this._a >= 0, q = !E && j && (P === "hex" || P === "hex6" || P === "hex3" || P === "hex4" || P === "hex8" || P === "name");
    return q ? P === "name" && this._a === 0 ? this.toName() : this.toRgbString() : (P === "rgb" && (U = this.toRgbString()), P === "prgb" && (U = this.toPercentageRgbString()), (P === "hex" || P === "hex6") && (U = this.toHexString()), P === "hex3" && (U = this.toHexString(!0)), P === "hex4" && (U = this.toHex8String(!0)), P === "hex8" && (U = this.toHex8String()), P === "name" && (U = this.toName()), P === "hsl" && (U = this.toHslString()), P === "hsv" && (U = this.toHsvString()), U || this.toHexString());
  },
  clone: function() {
    return Pe(this.toString());
  },
  _applyModification: function(P, E) {
    var U = P.apply(null, [this].concat([].slice.call(E)));
    return this._r = U._r, this._g = U._g, this._b = U._b, this.setAlpha(U._a), this;
  },
  lighten: function() {
    return this._applyModification(Sh, arguments);
  },
  brighten: function() {
    return this._applyModification(Ph, arguments);
  },
  darken: function() {
    return this._applyModification(Fh, arguments);
  },
  desaturate: function() {
    return this._applyModification(Rh, arguments);
  },
  saturate: function() {
    return this._applyModification(Ch, arguments);
  },
  greyscale: function() {
    return this._applyModification(kh, arguments);
  },
  spin: function() {
    return this._applyModification(ph, arguments);
  },
  _applyCombination: function(P, E) {
    return P.apply(null, [this].concat([].slice.call(E)));
  },
  analogous: function() {
    return this._applyCombination(Ih, arguments);
  },
  complement: function() {
    return this._applyCombination(Ah, arguments);
  },
  monochromatic: function() {
    return this._applyCombination(Oh, arguments);
  },
  splitcomplement: function() {
    return this._applyCombination(Mh, arguments);
  },
  // Disabled until https://github.com/bgrins/TinyColor/issues/254
  // polyad: function (number) {
  //   return this._applyCombination(polyad, [number]);
  // },
  triad: function() {
    return this._applyCombination(Zf, [3]);
  },
  tetrad: function() {
    return this._applyCombination(Zf, [4]);
  }
};
Pe.fromRatio = function(A, P) {
  if (hf(A) == "object") {
    var E = {};
    for (var U in A)
      A.hasOwnProperty(U) && (U === "a" ? E[U] = A[U] : E[U] = rf(A[U]));
    A = E;
  }
  return Pe(A, P);
};
function yh(A) {
  var P = {
    r: 0,
    g: 0,
    b: 0
  }, E = 1, U = null, j = null, q = null, de = !1, Te = !1;
  return typeof A == "string" && (A = Hh(A)), hf(A) == "object" && (Ts(A.r) && Ts(A.g) && Ts(A.b) ? (P = wh(A.r, A.g, A.b), de = !0, Te = String(A.r).substr(-1) === "%" ? "prgb" : "rgb") : Ts(A.h) && Ts(A.s) && Ts(A.v) ? (U = rf(A.s), j = rf(A.v), P = xh(A.h, U, j), de = !0, Te = "hsv") : Ts(A.h) && Ts(A.s) && Ts(A.l) && (U = rf(A.s), q = rf(A.l), P = Th(A.h, U, q), de = !0, Te = "hsl"), A.hasOwnProperty("a") && (E = A.a)), E = $f(E), {
    ok: de,
    format: A.format || Te,
    r: Math.min(255, Math.max(P.r, 0)),
    g: Math.min(255, Math.max(P.g, 0)),
    b: Math.min(255, Math.max(P.b, 0)),
    a: E
  };
}
function wh(A, P, E) {
  return {
    r: ir(A, 255) * 255,
    g: ir(P, 255) * 255,
    b: ir(E, 255) * 255
  };
}
function Uf(A, P, E) {
  A = ir(A, 255), P = ir(P, 255), E = ir(E, 255);
  var U = Math.max(A, P, E), j = Math.min(A, P, E), q, de, Te = (U + j) / 2;
  if (U == j)
    q = de = 0;
  else {
    var Ae = U - j;
    switch (de = Te > 0.5 ? Ae / (2 - U - j) : Ae / (U + j), U) {
      case A:
        q = (P - E) / Ae + (P < E ? 6 : 0);
        break;
      case P:
        q = (E - A) / Ae + 2;
        break;
      case E:
        q = (A - P) / Ae + 4;
        break;
    }
    q /= 6;
  }
  return {
    h: q,
    s: de,
    l: Te
  };
}
function Th(A, P, E) {
  var U, j, q;
  A = ir(A, 360), P = ir(P, 100), E = ir(E, 100);
  function de(_e, $e, N) {
    return N < 0 && (N += 1), N > 1 && (N -= 1), N < 1 / 6 ? _e + ($e - _e) * 6 * N : N < 1 / 2 ? $e : N < 2 / 3 ? _e + ($e - _e) * (2 / 3 - N) * 6 : _e;
  }
  if (P === 0)
    U = j = q = E;
  else {
    var Te = E < 0.5 ? E * (1 + P) : E + P - E * P, Ae = 2 * E - Te;
    U = de(Ae, Te, A + 1 / 3), j = de(Ae, Te, A), q = de(Ae, Te, A - 1 / 3);
  }
  return {
    r: U * 255,
    g: j * 255,
    b: q * 255
  };
}
function Yf(A, P, E) {
  A = ir(A, 255), P = ir(P, 255), E = ir(E, 255);
  var U = Math.max(A, P, E), j = Math.min(A, P, E), q, de, Te = U, Ae = U - j;
  if (de = U === 0 ? 0 : Ae / U, U == j)
    q = 0;
  else {
    switch (U) {
      case A:
        q = (P - E) / Ae + (P < E ? 6 : 0);
        break;
      case P:
        q = (E - A) / Ae + 2;
        break;
      case E:
        q = (A - P) / Ae + 4;
        break;
    }
    q /= 6;
  }
  return {
    h: q,
    s: de,
    v: Te
  };
}
function xh(A, P, E) {
  A = ir(A, 360) * 6, P = ir(P, 100), E = ir(E, 100);
  var U = Math.floor(A), j = A - U, q = E * (1 - P), de = E * (1 - j * P), Te = E * (1 - (1 - j) * P), Ae = U % 6, _e = [E, de, q, q, Te, E][Ae], $e = [Te, E, E, de, q, q][Ae], N = [q, q, Te, E, E, de][Ae];
  return {
    r: _e * 255,
    g: $e * 255,
    b: N * 255
  };
}
function Gf(A, P, E, U) {
  var j = [bc(Math.round(A).toString(16)), bc(Math.round(P).toString(16)), bc(Math.round(E).toString(16))];
  return U && j[0].charAt(0) == j[0].charAt(1) && j[1].charAt(0) == j[1].charAt(1) && j[2].charAt(0) == j[2].charAt(1) ? j[0].charAt(0) + j[1].charAt(0) + j[2].charAt(0) : j.join("");
}
function Eh(A, P, E, U, j) {
  var q = [bc(Math.round(A).toString(16)), bc(Math.round(P).toString(16)), bc(Math.round(E).toString(16)), bc(eh(U))];
  return j && q[0].charAt(0) == q[0].charAt(1) && q[1].charAt(0) == q[1].charAt(1) && q[2].charAt(0) == q[2].charAt(1) && q[3].charAt(0) == q[3].charAt(1) ? q[0].charAt(0) + q[1].charAt(0) + q[2].charAt(0) + q[3].charAt(0) : q.join("");
}
function Xf(A, P, E, U) {
  var j = [bc(eh(U)), bc(Math.round(A).toString(16)), bc(Math.round(P).toString(16)), bc(Math.round(E).toString(16))];
  return j.join("");
}
Pe.equals = function(A, P) {
  return !A || !P ? !1 : Pe(A).toRgbString() == Pe(P).toRgbString();
};
Pe.random = function() {
  return Pe.fromRatio({
    r: Math.random(),
    g: Math.random(),
    b: Math.random()
  });
};
function Rh(A, P) {
  P = P === 0 ? 0 : P || 10;
  var E = Pe(A).toHsl();
  return E.s -= P / 100, E.s = gf(E.s), Pe(E);
}
function Ch(A, P) {
  P = P === 0 ? 0 : P || 10;
  var E = Pe(A).toHsl();
  return E.s += P / 100, E.s = gf(E.s), Pe(E);
}
function kh(A) {
  return Pe(A).desaturate(100);
}
function Sh(A, P) {
  P = P === 0 ? 0 : P || 10;
  var E = Pe(A).toHsl();
  return E.l += P / 100, E.l = gf(E.l), Pe(E);
}
function Ph(A, P) {
  P = P === 0 ? 0 : P || 10;
  var E = Pe(A).toRgb();
  return E.r = Math.max(0, Math.min(255, E.r - Math.round(255 * -(P / 100)))), E.g = Math.max(0, Math.min(255, E.g - Math.round(255 * -(P / 100)))), E.b = Math.max(0, Math.min(255, E.b - Math.round(255 * -(P / 100)))), Pe(E);
}
function Fh(A, P) {
  P = P === 0 ? 0 : P || 10;
  var E = Pe(A).toHsl();
  return E.l -= P / 100, E.l = gf(E.l), Pe(E);
}
function ph(A, P) {
  var E = Pe(A).toHsl(), U = (E.h + P) % 360;
  return E.h = U < 0 ? 360 + U : U, Pe(E);
}
function Ah(A) {
  var P = Pe(A).toHsl();
  return P.h = (P.h + 180) % 360, Pe(P);
}
function Zf(A, P) {
  if (isNaN(P) || P <= 0)
    throw new Error("Argument to polyad must be a positive number");
  for (var E = Pe(A).toHsl(), U = [Pe(A)], j = 360 / P, q = 1; q < P; q++)
    U.push(Pe({
      h: (E.h + q * j) % 360,
      s: E.s,
      l: E.l
    }));
  return U;
}
function Mh(A) {
  var P = Pe(A).toHsl(), E = P.h;
  return [Pe(A), Pe({
    h: (E + 72) % 360,
    s: P.s,
    l: P.l
  }), Pe({
    h: (E + 216) % 360,
    s: P.s,
    l: P.l
  })];
}
function Ih(A, P, E) {
  P = P || 6, E = E || 30;
  var U = Pe(A).toHsl(), j = 360 / E, q = [Pe(A)];
  for (U.h = (U.h - (j * P >> 1) + 720) % 360; --P; )
    U.h = (U.h + j) % 360, q.push(Pe(U));
  return q;
}
function Oh(A, P) {
  P = P || 6;
  for (var E = Pe(A).toHsv(), U = E.h, j = E.s, q = E.v, de = [], Te = 1 / P; P--; )
    de.push(Pe({
      h: U,
      s: j,
      v: q
    })), q = (q + Te) % 1;
  return de;
}
Pe.mix = function(A, P, E) {
  E = E === 0 ? 0 : E || 50;
  var U = Pe(A).toRgb(), j = Pe(P).toRgb(), q = E / 100, de = {
    r: (j.r - U.r) * q + U.r,
    g: (j.g - U.g) * q + U.g,
    b: (j.b - U.b) * q + U.b,
    a: (j.a - U.a) * q + U.a
  };
  return Pe(de);
};
Pe.readability = function(A, P) {
  var E = Pe(A), U = Pe(P);
  return (Math.max(E.getLuminance(), U.getLuminance()) + 0.05) / (Math.min(E.getLuminance(), U.getLuminance()) + 0.05);
};
Pe.isReadable = function(A, P, E) {
  var U = Pe.readability(A, P), j, q;
  switch (q = !1, j = zh(E), j.level + j.size) {
    case "AAsmall":
    case "AAAlarge":
      q = U >= 4.5;
      break;
    case "AAlarge":
      q = U >= 3;
      break;
    case "AAAsmall":
      q = U >= 7;
      break;
  }
  return q;
};
Pe.mostReadable = function(A, P, E) {
  var U = null, j = 0, q, de, Te, Ae;
  E = E || {}, de = E.includeFallbackColors, Te = E.level, Ae = E.size;
  for (var _e = 0; _e < P.length; _e++)
    q = Pe.readability(A, P[_e]), q > j && (j = q, U = Pe(P[_e]));
  return Pe.isReadable(A, U, {
    level: Te,
    size: Ae
  }) || !de ? U : (E.includeFallbackColors = !1, Pe.mostReadable(A, ["#fff", "#000"], E));
};
var kf = Pe.names = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
}, _h = Pe.hexNames = mh(kf);
function mh(A) {
  var P = {};
  for (var E in A)
    A.hasOwnProperty(E) && (P[A[E]] = E);
  return P;
}
function $f(A) {
  return A = parseFloat(A), (isNaN(A) || A < 0 || A > 1) && (A = 1), A;
}
function ir(A, P) {
  Dh(A) && (A = "100%");
  var E = Lh(A);
  return A = Math.min(P, Math.max(0, parseFloat(A))), E && (A = parseInt(A * P, 10) / 100), Math.abs(A - P) < 1e-6 ? 1 : A % P / parseFloat(P);
}
function gf(A) {
  return Math.min(1, Math.max(0, A));
}
function Wo(A) {
  return parseInt(A, 16);
}
function Dh(A) {
  return typeof A == "string" && A.indexOf(".") != -1 && parseFloat(A) === 1;
}
function Lh(A) {
  return typeof A == "string" && A.indexOf("%") != -1;
}
function bc(A) {
  return A.length == 1 ? "0" + A : "" + A;
}
function rf(A) {
  return A <= 1 && (A = A * 100 + "%"), A;
}
function eh(A) {
  return Math.round(parseFloat(A) * 255).toString(16);
}
function Vf(A) {
  return Wo(A) / 255;
}
var vc = (function() {
  var A = "[-\\+]?\\d+%?", P = "[-\\+]?\\d*\\.\\d+%?", E = "(?:" + P + ")|(?:" + A + ")", U = "[\\s|\\(]+(" + E + ")[,|\\s]+(" + E + ")[,|\\s]+(" + E + ")\\s*\\)?", j = "[\\s|\\(]+(" + E + ")[,|\\s]+(" + E + ")[,|\\s]+(" + E + ")[,|\\s]+(" + E + ")\\s*\\)?";
  return {
    CSS_UNIT: new RegExp(E),
    rgb: new RegExp("rgb" + U),
    rgba: new RegExp("rgba" + j),
    hsl: new RegExp("hsl" + U),
    hsla: new RegExp("hsla" + j),
    hsv: new RegExp("hsv" + U),
    hsva: new RegExp("hsva" + j),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
})();
function Ts(A) {
  return !!vc.CSS_UNIT.exec(A);
}
function Hh(A) {
  A = A.replace(vh, "").replace(bh, "").toLowerCase();
  var P = !1;
  if (kf[A])
    A = kf[A], P = !0;
  else if (A == "transparent")
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
      format: "name"
    };
  var E;
  return (E = vc.rgb.exec(A)) ? {
    r: E[1],
    g: E[2],
    b: E[3]
  } : (E = vc.rgba.exec(A)) ? {
    r: E[1],
    g: E[2],
    b: E[3],
    a: E[4]
  } : (E = vc.hsl.exec(A)) ? {
    h: E[1],
    s: E[2],
    l: E[3]
  } : (E = vc.hsla.exec(A)) ? {
    h: E[1],
    s: E[2],
    l: E[3],
    a: E[4]
  } : (E = vc.hsv.exec(A)) ? {
    h: E[1],
    s: E[2],
    v: E[3]
  } : (E = vc.hsva.exec(A)) ? {
    h: E[1],
    s: E[2],
    v: E[3],
    a: E[4]
  } : (E = vc.hex8.exec(A)) ? {
    r: Wo(E[1]),
    g: Wo(E[2]),
    b: Wo(E[3]),
    a: Vf(E[4]),
    format: P ? "name" : "hex8"
  } : (E = vc.hex6.exec(A)) ? {
    r: Wo(E[1]),
    g: Wo(E[2]),
    b: Wo(E[3]),
    format: P ? "name" : "hex"
  } : (E = vc.hex4.exec(A)) ? {
    r: Wo(E[1] + "" + E[1]),
    g: Wo(E[2] + "" + E[2]),
    b: Wo(E[3] + "" + E[3]),
    a: Vf(E[4] + "" + E[4]),
    format: P ? "name" : "hex8"
  } : (E = vc.hex3.exec(A)) ? {
    r: Wo(E[1] + "" + E[1]),
    g: Wo(E[2] + "" + E[2]),
    b: Wo(E[3] + "" + E[3]),
    format: P ? "name" : "hex"
  } : !1;
}
function zh(A) {
  var P, E;
  return A = A || {
    level: "AA",
    size: "small"
  }, P = (A.level || "AA").toUpperCase(), E = (A.size || "small").toLowerCase(), P !== "AA" && P !== "AAA" && (P = "AA"), E !== "small" && E !== "large" && (E = "small"), {
    level: P,
    size: E
  };
}
const Jf = 500, Qf = 500, Kf = 0.95, ff = 0.5;
class qf {
  constructor(P, E, U, j, q, de, Te, Ae, _e, $e) {
    this.x = P, this.y = E, this.vx = U, this.vy = j, this.bornAt = q, this.lifespan = de, this.size = 1, this.defaultSize = 1, this.mass = 1, this.age = 0, this.width = Te, this.height = Ae, this.defaultColor = Pe(_e), this.color = Pe(_e), this.defaultSize = $e, this.size = $e;
  }
  isOutOfBounds() {
    return this.x <= 0 || this.x >= this.width || this.y <= 0 || this.y >= this.height;
  }
  update(P) {
    this.x = this.x + this.vx, this.y = this.y + this.vy, this.vx = this.vx * Kf, this.vy = this.vy * Kf, this.vx = Math.max(Math.min(this.vx, ff), -ff), this.vy = Math.max(Math.min(this.vy, ff), -ff), this.age = P - this.bornAt, this.x <= 0 && (this.vx = -this.vx, this.x = 1), this.x >= this.width && (this.vx = -this.vx, this.x = this.width - 1), this.y <= 0 && (this.vy = -this.vy, this.y = 1), this.y >= this.height && (this.vy = -this.vy, this.y = this.height - 1);
  }
  draw(P) {
    P.beginPath(), P.rect(this.x, this.y, this.size, this.size);
    let E = 1;
    this.age < Jf ? E = Math.min(this.age / Jf, 1) : this.age > this.lifespan - Qf && (E = Math.max((this.lifespan - this.age) / Qf, 0)), this.color.setAlpha(E), P.fillStyle = this.color.toRgbString(), P.fill();
  }
  dist(P) {
    return Math.sqrt((this.x - P.x) ** 2 + (this.y - P.y) ** 2);
  }
  applyForce(P) {
    this.vx += P.x / this.mass, this.vy += P.y / this.mass;
  }
}
const jf = 1e-3;
class Bh {
  constructor(P, E, U, j, q) {
    this.x = P, this.y = E, this.radius = U, this.bornAt = j, this.lifespan = q, this.age = 0, this.strength = 0;
  }
  update(P) {
    this.radius += 10, this.age = P - this.bornAt, this.strength = Math.max(0, (this.lifespan - this.age) / this.age);
  }
  draw(P) {
  }
  pushParticles(P) {
    P.forEach((E) => {
      const U = E.dist({ x: this.x, y: this.y });
      Math.abs(U - this.radius) < 10 && E.applyForce({ x: (E.x - this.x) * jf * this.strength, y: (E.y - this.y) * jf * this.strength });
    });
  }
}
class Nh {
  constructor(P, E, U, j, q, de) {
    this.x = P, this.y = E, this.shapeMatrix = [], this.matrixWidth = 0, this.matrixHeight = 0, this.matrixHalfWidth = 0, this.matrixHalfHeight = 0, this.nearestX = null, this.nearestY = null, this.debugImage = null, this.nearestCollisionPoints = /* @__PURE__ */ new Map(), this.force = 2, this.attractorColor = j, this.attractorColorObj = Pe(j), this.backgroundColor = q, this.loadingColor = de;
    const Te = typeof U == "string" ? this.parseSVGString(U) : U;
    Te && this.createShapeMatrix(Te);
  }
  parseSVGString(P) {
    const j = new DOMParser().parseFromString(P, "image/svg+xml").documentElement;
    return j instanceof SVGElement ? j : (console.error("Failed to parse SVG string"), null);
  }
  getSVGDimensions(P) {
    const E = P.getAttribute("width"), U = P.getAttribute("height");
    let j = 0, q = 0;
    if (E && U && (j = parseFloat(E), q = parseFloat(U)), !j || !q) {
      const de = P.getAttribute("viewBox");
      if (de) {
        const Te = de.split(/\s+/);
        Te.length >= 4 && (j = parseFloat(Te[2]) || 0, q = parseFloat(Te[3]) || 0);
      }
    }
    return (!j || !q) && (j = 1e3, q = 1e3), { width: j, height: q };
  }
  createShapeMatrix(P) {
    let { width: E, height: U } = this.getSVGDimensions(P);
    const j = P.getAttribute("viewBox");
    let q = E, de = U;
    if (j) {
      const Qn = j.split(/\s+/);
      Qn.length >= 4 && (q = parseFloat(Qn[2]) || E, de = parseFloat(Qn[3]) || U);
    }
    const Te = Math.max(q, de, 100), Ae = Math.max(1, Math.floor(400 / Te));
    E = Te * Ae, U = Te * Ae;
    const _e = document.createElement("canvas");
    _e.width = E, _e.height = U;
    const $e = _e.getContext("2d");
    if (!$e) {
      console.error("Failed to get 2d context");
      return;
    }
    $e.fillStyle = this.backgroundColor, $e.fillRect(0, 0, E, U);
    const N = P.cloneNode(!0), Re = new XMLSerializer().serializeToString(N), ot = new Blob([Re], {
      type: "image/svg+xml;charset=utf-8"
    }), re = URL.createObjectURL(ot), Z = new Image();
    Z.onload = () => {
      $e.drawImage(Z, 0, 0, E, U), this.debugImage = Z;
      const Vl = $e.getImageData(0, 0, E, U).data;
      this.matrixWidth = E, this.matrixHeight = U, this.matrixHalfWidth = E / 2, this.matrixHalfHeight = U / 2, this.shapeMatrix = [];
      for (let zr = 0; zr < U; zr++) {
        this.shapeMatrix[zr] = [];
        for (let $r = 0; $r < E; $r++) {
          const Sr = (zr * E + $r) * 4, ut = Vl[Sr], Ce = Vl[Sr + 1], _n = Vl[Sr + 2], mn = ut < 128 && Ce < 128 && _n < 128;
          this.shapeMatrix[zr][$r] = mn;
        }
      }
      this.shapeMatrix.flat().filter(Boolean).length, this.computeNearestNeighborField(E, U);
    }, Z.onerror = (Qn) => {
      console.error("Error loading SVG:", Qn), URL.revokeObjectURL(re);
    }, Z.src = re;
  }
  // Helper method to check if a point is inside the shape
  isPointInside(P, E) {
    if (this.shapeMatrix.length === 0)
      return !1;
    const U = Math.floor(P - this.x + this.matrixHalfWidth), j = Math.floor(E - this.y + this.matrixHalfHeight);
    return U < 0 || U >= this.matrixWidth || j < 0 || j >= this.matrixHeight ? !1 : this.shapeMatrix[j][U];
  }
  draw(P) {
    this.debugImage && this.matrixWidth > 0 && this.matrixHeight > 0 ? (this.x - this.matrixHalfWidth, this.y - this.matrixHalfHeight, P.save(), P.globalAlpha = 0.7, P.restore()) : (P.save(), P.fillStyle = this.loadingColor, P.font = "20px Arial", P.fillText("Loading SVG...", this.x - 50, this.y), P.restore());
  }
  computeNearestNeighborField(P, E) {
    this.nearestX = new Int16Array(P * E).fill(-1), this.nearestY = new Int16Array(P * E).fill(-1);
    const U = new Int32Array(P * E);
    let j = 0, q = 0;
    for (let de = 0; de < E; de++) {
      const Te = this.shapeMatrix[de];
      for (let Ae = 0; Ae < P; Ae++)
        if (Te[Ae]) {
          const _e = de * P + Ae;
          this.nearestX[_e] = Ae, this.nearestY[_e] = de, U[q++] = _e;
        }
    }
    for (; j < q; ) {
      const de = U[j++], Te = this.nearestX[de], Ae = this.nearestY[de], _e = de % P, $e = de / P | 0, N = [0, 0, -1, 1, -1, 1, -1, 1], Re = [-1, 1, 0, 0, -1, -1, 1, 1];
      for (let ot = 0; ot < 8; ot++) {
        const re = _e + N[ot], Z = $e + Re[ot];
        if (re >= 0 && re < P && Z >= 0 && Z < E) {
          const Qn = Z * P + re;
          this.nearestX[Qn] === -1 && (this.nearestX[Qn] = Te, this.nearestY[Qn] = Ae, U[q++] = Qn);
        }
      }
    }
  }
  findNearestCollisionPoint(P) {
    if (!this.nearestX || !this.nearestY) return null;
    const E = Math.floor(P.x - this.x + this.matrixHalfWidth), U = Math.floor(P.y - this.y + this.matrixHalfHeight), j = Math.max(0, Math.min(this.matrixWidth - 1, E)), de = Math.max(0, Math.min(this.matrixHeight - 1, U)) * this.matrixWidth + j, Te = this.nearestX[de], Ae = this.nearestY[de];
    if (Te === -1) return null;
    const _e = this.x - this.matrixHalfWidth + Te, $e = this.y - this.matrixHalfHeight + Ae, N = P.x - _e, Re = P.y - $e;
    return {
      x: _e,
      y: $e,
      distance: Math.sqrt(N * N + Re * Re)
    };
  }
  applyForce(P) {
    const E = this.findNearestCollisionPoint(P);
    if (E) {
      const U = E.distance, j = Math.min(1, 1 / (1 + U / 10)), q = P.defaultColor.toRgb(), de = this.attractorColorObj.toRgb(), Te = q.r + (de.r - q.r) * j, Ae = q.g + (de.g - q.g) * j, _e = q.b + (de.b - q.b) * j;
      if (P.color = Pe({ r: Te, g: Ae, b: _e }), P.size = 1 + j, this.isPointInside(P.x, P.y)) {
        P.vx *= 0.5, P.vy *= 0.5;
        return;
      }
      const $e = this.force / Math.max(U, 1) ** 2;
      P.applyForce({
        x: (E.x - P.x) * $e,
        y: (E.y - P.y) * $e
      });
    }
  }
}
const Yh = ({
  width: A = window.innerWidth / 1.5,
  height: P = window.innerHeight / 1.5,
  edgeExtension: E = 50,
  gridSize: U = 30,
  resolution: j = 15,
  posRandomOffset: q = 6,
  attractorForce: de = 5e-4,
  windForce: Te = 0.05,
  particleDefaultColor: Ae = "black",
  particleDefaultSize: _e = 1,
  attractorColor: $e = "#3492eb",
  attractorBackgroundColor: N = "white",
  attractorLoadingColor: Re = "rgba(255, 255, 0, 0.5)",
  svgElement: ot,
  particleLifespan: re = 2e4,
  waveLifespan: Z = 1e3,
  isActive: Qn = !1
}) => {
  const Vl = js(null), zr = js([]), $r = js([]), Sr = js(Qn), ut = js(null);
  Cf(() => {
    Sr.current = Qn, Qn && ($r.current.push(
      new Bh(
        E + A / 2,
        E + P / 2,
        10,
        performance.now(),
        Z
      )
    ), zr.current.forEach((_n) => {
      _n.color = _n.defaultColor.clone(), _n.size = 1;
    }));
  }, [Qn, A, P, E, Z]);
  const Ce = lh(() => ot ? gh.renderToStaticMarkup(ot) : null, [ot]);
  return Cf(() => {
    Ce ? ut.current = new Nh(
      E + A / 2,
      E + P / 2,
      Ce,
      $e,
      N,
      Re
    ) : ut.current = null;
  }, [
    Ce,
    A,
    P,
    E,
    $e,
    N,
    Re
  ]), Cf(() => {
    const _n = Vl.current;
    if (!_n) return;
    const mn = A + E * 2, tn = P + E * 2, at = Math.ceil(mn / U), ya = Math.ceil(tn / U), Jl = new Array(at * ya).fill(null).map(() => []), Ot = zr.current;
    Ot.length = 0;
    const Kn = $r.current, xe = [];
    let K;
    for (let Vt = 0; Vt < mn / j; Vt++)
      for (let oe = 0; oe < tn / j; oe++) {
        const M = Vt * j + (Math.random() * q - q / 2) + (oe % 2 === 0 ? mn % j / 2 : 0), be = oe * j + (Math.random() * q - q / 2);
        xe.push({
          x: M,
          y: be
        }), Ot.push(
          new qf(
            M,
            be,
            0,
            0,
            performance.now(),
            re * Math.random(),
            mn,
            tn,
            Ae,
            _e
          )
        );
      }
    _n.width = A, _n.height = P;
    const ce = _n.getContext("2d");
    if (!ce) return;
    const el = (Vt) => {
      const oe = Vt * 1e-3, M = Math.sin(oe * 0.5) * Math.cos(oe * 0.3) * Te, be = Math.cos(oe * 0.4) * Math.sin(oe * 0.2) * Te;
      if (Kn.length > 0) {
        Kn.forEach((we) => {
          we.update(Vt), we.pushParticles(Ot);
        });
        for (let we = Kn.length - 1; we >= 0; we--)
          Vt - Kn[we].bornAt > Z && Kn.splice(we, 1);
      }
      for (let we = 0; we < xe.length; we++)
        if (Vt - Ot[we]?.bornAt > Ot[we]?.lifespan || Ot[we]?.isOutOfBounds()) {
          const Ie = new qf(
            xe[we].x,
            xe[we].y,
            0,
            0,
            Vt,
            re * Math.random(),
            mn,
            tn,
            Ae,
            _e
          );
          Ot[we] = Ie;
        }
      ce.clearRect(0, 0, _n.width, _n.height);
      for (let we = 0; we < Jl.length; we++)
        Jl[we].length = 0;
      Ot.forEach((we) => {
        const Ie = Math.floor(we.x / U), Bn = Math.floor(we.y / U);
        Ie >= 0 && Ie < at && Bn >= 0 && Bn < ya && Jl[Bn * at + Ie].push(we);
      }), ce.save(), ce.translate(-E, -E);
      const Ge = ut.current;
      Ot.forEach((we, Ie) => {
        const Bn = we.dist(xe[Ie]);
        we.applyForce({
          x: (xe[Ie].x - we.x) * (de * Bn) + M,
          y: (xe[Ie].y - we.y) * (de * Bn) + be
        }), Sr.current ? Ge?.applyForce(we) : (we.color = we.defaultColor.clone(), we.size = we.defaultSize), we.update(Vt);
      }), Ge?.draw(ce), Ot.forEach((we) => we.draw(ce)), Kn.length > 0 && Kn.forEach((we) => we.draw(ce)), ce.restore(), K = requestAnimationFrame(el);
    };
    return el(0), () => {
      cancelAnimationFrame(K);
    };
  }, [
    A,
    P,
    E,
    U,
    j,
    q,
    de,
    Te,
    Ae,
    re,
    Z
    // Attractor dependencies are moved to separate effect, and reference is used here
    // SVG element is no longer a dependency here to avoid reload
  ]), /* @__PURE__ */ uh.jsx("canvas", { ref: Vl });
};
export {
  Yh as ParticleAnimation
};
