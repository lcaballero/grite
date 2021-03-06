/*!
 * Voca string library 1.4.0
 * https://vocajs.com
 *
 * Copyright Dmitri Pavlutin and other contributors
 * Released under the MIT license
 */
!(function(e, r) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = r())
    : 'function' == typeof define && define.amd
    ? define(r)
    : ((e = e || self).v = r());
})(this, function() {
  'use strict';
  function e() {
    return (e =
      Object.assign ||
      function(e) {
        for (var r = 1; r < arguments.length; r++) {
          var n = arguments[r];
          for (var u in n) Object.prototype.hasOwnProperty.call(n, u) && (e[u] = n[u]);
        }
        return e;
      }).apply(this, arguments);
  }
  function x(e, r) {
    return (
      (function(e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function(e, r) {
        if (!(Symbol.iterator in Object(e) || '[object Arguments]' === Object.prototype.toString.call(e))) return;
        var n = [],
          u = !0,
          t = !1,
          i = void 0;
        try {
          for (
            var a, o = e[Symbol.iterator]();
            !(u = (a = o.next()).done) && (n.push(a.value), !r || n.length !== r);
            u = !0
          );
        } catch (e) {
          (t = !0), (i = e);
        } finally {
          try {
            u || null == o.return || o.return();
          } finally {
            if (t) throw i;
          }
        }
        return n;
      })(e, r) ||
      (function() {
        throw new TypeError('Invalid attempt to destructure non-iterable instance');
      })()
    );
  }
  function n(e) {
    return (
      (function(e) {
        if (Array.isArray(e)) {
          for (var r = 0, n = new Array(e.length); r < e.length; r++) n[r] = e[r];
          return n;
        }
      })(e) ||
      (function(e) {
        if (Symbol.iterator in Object(e) || '[object Arguments]' === Object.prototype.toString.call(e))
          return Array.from(e);
      })(e) ||
      (function() {
        throw new TypeError('Invalid attempt to spread non-iterable instance');
      })()
    );
  }
  function h(e) {
    return null == e;
  }
  function g(e, r) {
    var n = 1 < arguments.length && void 0 !== r && r;
    return h(e) ? n : Boolean(e);
  }
  function y(e) {
    return 'string' == typeof e;
  }
  function F(e, r) {
    var n = 1 < arguments.length && void 0 !== r ? r : '';
    return h(e) ? n : y(e) ? e : String(e);
  }
  function i(e, r) {
    var n = F(e),
      u = g(r);
    return '' === n ? '' : (u && (n = n.toLowerCase()), n.substr(0, 1).toUpperCase() + n.substr(1));
  }
  function u(e) {
    return F(e, '').toLowerCase();
  }
  var r = '\\d',
    t = '\\s\\uFEFF\\xA0',
    a = '\\uD800-\\uDBFF',
    o = '\\uDC00-\\uDFFF',
    c = '\\u0300-\\u036F\\u1AB0-\\u1AFF\\u1DC0-\\u1DFF\\u20D0-\\u20FF\\uFE20-\\uFE2F',
    f = '\\0-\\u02FF\\u0370-\\u1AAF\\u1B00-\\u1DBF\\u1E00-\\u20CF\\u2100-\\uD7FF\\uE000-\\uFE1F\\uFE30-\\uFFFF',
    s = new RegExp(
      '([' + f + ']|[' + a + '][' + o + ']|[' + a + '](?![' + o + '])|(?:[^' + a + ']|^)[' + o + '])([' + c + ']+)',
      'g'
    ),
    l = new RegExp('([' + a + '])([' + o + '])', 'g'),
    p = new RegExp(
      '((?:[' +
        f +
        ']|[' +
        a +
        '][' +
        o +
        ']|[' +
        a +
        '](?![' +
        o +
        '])|(?:[^' +
        a +
        ']|^)[' +
        o +
        '])(?:[' +
        c +
        ']+))|([' +
        a +
        '][' +
        o +
        '])|([\\n\\r\\u2028\\u2029])|(.)',
      'g'
    ),
    v = new RegExp('[' + t + ']'),
    d = new RegExp('^[' + t + ']+'),
    b = new RegExp('[' + t + ']+$'),
    w = new RegExp('^\\d+$'),
    m = /[-[\]{}()*+!<=:?./\\^$|#,]/g,
    E = /[^A-Za-z0-9]/g,
    C = /[<>&"'`]/g,
    A = /(%{1,2})(?:(\d+)\$)?(\+)?([ 0]|'.{1})?(-)?(\d+)?(?:\.(\d+))?([bcdiouxXeEfgGs])?/g,
    D = /\.?0+$/g,
    k = /<([A-Za-z0-9]+)>/g,
    S =
      'a-z\\xB5\\xDF-\\xF6\\xF8-\\xFF\\u0101\\u0103\\u0105\\u0107\\u0109\\u010B\\u010D\\u010F\\u0111\\u0113\\u0115\\u0117\\u0119\\u011B\\u011D\\u011F\\u0121\\u0123\\u0125\\u0127\\u0129\\u012B\\u012D\\u012F\\u0131\\u0133\\u0135\\u0137\\u0138\\u013A\\u013C\\u013E\\u0140\\u0142\\u0144\\u0146\\u0148\\u0149\\u014B\\u014D\\u014F\\u0151\\u0153\\u0155\\u0157\\u0159\\u015B\\u015D\\u015F\\u0161\\u0163\\u0165\\u0167\\u0169\\u016B\\u016D\\u016F\\u0171\\u0173\\u0175\\u0177\\u017A\\u017C\\u017E-\\u0180\\u0183\\u0185\\u0188\\u018C\\u018D\\u0192\\u0195\\u0199-\\u019B\\u019E\\u01A1\\u01A3\\u01A5\\u01A8\\u01AA\\u01AB\\u01AD\\u01B0\\u01B4\\u01B6\\u01B9\\u01BA\\u01BD-\\u01BF\\u01C6\\u01C9\\u01CC\\u01CE\\u01D0\\u01D2\\u01D4\\u01D6\\u01D8\\u01DA\\u01DC\\u01DD\\u01DF\\u01E1\\u01E3\\u01E5\\u01E7\\u01E9\\u01EB\\u01ED\\u01EF\\u01F0\\u01F3\\u01F5\\u01F9\\u01FB\\u01FD\\u01FF\\u0201\\u0203\\u0205\\u0207\\u0209\\u020B\\u020D\\u020F\\u0211\\u0213\\u0215\\u0217\\u0219\\u021B\\u021D\\u021F\\u0221\\u0223\\u0225\\u0227\\u0229\\u022B\\u022D\\u022F\\u0231\\u0233-\\u0239\\u023C\\u023F\\u0240\\u0242\\u0247\\u0249\\u024B\\u024D\\u024F',
    O =
      '\\x41-\\x5a\\xc0-\\xd6\\xd8-\\xde\\u0100\\u0102\\u0104\\u0106\\u0108\\u010a\\u010c\\u010e\\u0110\\u0112\\u0114\\u0116\\u0118\\u011a\\u011c\\u011e\\u0120\\u0122\\u0124\\u0126\\u0128\\u012a\\u012c\\u012e\\u0130\\u0132\\u0134\\u0136\\u0139\\u013b\\u013d\\u013f\\u0141\\u0143\\u0145\\u0147\\u014a\\u014c\\u014e\\u0150\\u0152\\u0154\\u0156\\u0158\\u015a\\u015c\\u015e\\u0160\\u0162\\u0164\\u0166\\u0168\\u016a\\u016c\\u016e\\u0170\\u0172\\u0174\\u0176\\u0178\\u0179\\u017b\\u017d\\u0181\\u0182\\u0184\\u0186\\u0187\\u0189-\\u018b\\u018e-\\u0191\\u0193\\u0194\\u0196-\\u0198\\u019c\\u019d\\u019f\\u01a0\\u01a2\\u01a4\\u01a6\\u01a7\\u01a9\\u01ac\\u01ae\\u01af\\u01b1-\\u01b3\\u01b5\\u01b7\\u01b8\\u01bc\\u01c4\\u01c5\\u01c7\\u01c8\\u01ca\\u01cb\\u01cd\\u01cf\\u01d1\\u01d3\\u01d5\\u01d7\\u01d9\\u01db\\u01de\\u01e0\\u01e2\\u01e4\\u01e6\\u01e8\\u01ea\\u01ec\\u01ee\\u01f1\\u01f2\\u01f4\\u01f6-\\u01f8\\u01fa\\u01fc\\u01fe\\u0200\\u0202\\u0204\\u0206\\u0208\\u020a\\u020c\\u020e\\u0210\\u0212\\u0214\\u0216\\u0218\\u021a\\u021c\\u021e\\u0220\\u0222\\u0224\\u0226\\u0228\\u022a\\u022c\\u022e\\u0230\\u0232\\u023a\\u023b\\u023d\\u023e\\u0241\\u0243-\\u0246\\u0248\\u024a\\u024c\\u024e',
    B = new RegExp(
      '(?:[' +
        O +
        '][' +
        c +
        ']*)?(?:[' +
        S +
        '][' +
        c +
        ']*)+|(?:[' +
        O +
        '][' +
        c +
        ']*)+(?![' +
        S +
        '])|[' +
        r +
        ']+|[\\u2700-\\u27BF]|[^\\x00-\\x2F\\x3A-\\x40\\x5B-\\x60\\x7b-\\xBF\\xD7\\xF7\\u2000-\\u206F' +
        t +
        ']+',
      'g'
    ),
    j = /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g,
    L = new RegExp('^(?:[' + S + O + '][' + c + ']*)+$'),
    R = new RegExp('^((?:[' + S + O + '][' + c + ']*)|[' + r + '])+$'),
    N = /^[\x01-\xFF]*$/;
  function P(e, r) {
    return null == e ? r : e;
  }
  function z(e) {
    return h(e) ? null : y(e) ? e : String(e);
  }
  function I(e, r, n) {
    var u,
      t = F(e);
    if (h(r)) u = N.test(t) ? j : B;
    else if (r instanceof RegExp) u = r;
    else {
      var i = z(P(n, ''));
      u = new RegExp(z(r), i);
    }
    return P(t.match(u), []);
  }
  function U(e, r) {
    return 0 === r ? u(e) : i(e, !0);
  }
  function $(e) {
    var r = F(e);
    return '' === r
      ? ''
      : I(r)
          .map(u)
          .join('-');
  }
  function _(e, r) {
    var n = r.toLowerCase(),
      u = r.toUpperCase();
    return e + (r === n ? u : n);
  }
  function T(e, r, n) {
    return e <= r ? r : n <= e ? n : e;
  }
  var Z = 9007199254740991;
  function V(e) {
    return e === 1 / 0 ? Z : e === -1 / 0 ? -Z : ~~e;
  }
  function W(e, r, n) {
    var u = F(e),
      t = h(r) ? u.length : T(V(r), 0, Z),
      i = F(n, '...');
    return t >= u.length ? u : u.substr(0, r - i.length) + i;
  }
  var Y = 55296,
    G = 56319,
    H = 56320,
    J = 57343;
  function q(e, r) {
    var n = 1 < arguments.length && void 0 !== r ? r : 0;
    return h(e) ? n : 'number' == typeof e ? e : Number(e);
  }
  function X(e, r) {
    return e != e ? r : e;
  }
  function K(e, r) {
    var n = F(e),
      u = n.length,
      t = q(r);
    if (!((t = X(t, 0)) < 0 || u <= t)) {
      var i,
        a,
        o,
        c = n.charCodeAt(t);
      return Y <= (o = c) && o <= G && t + 1 < u && ((i = n.charCodeAt(t + 1)), H <= (a = i) && a <= J)
        ? 1024 * (c - Y) + i - H + 65536
        : c;
    }
  }
  var M = Array.prototype.reduce;
  function Q() {
    this.index = 0;
  }
  (Q.prototype.increment = function() {
    this.index++;
  }),
    (Q.prototype.incrementOnEmptyPosition = function(e) {
      h(e) && this.increment();
    }),
    (Q.prototype.getIndexByPosition = function(e) {
      return h(e) ? this.index : e - 1;
    });
  var ee = 'i',
    re = 'b',
    ne = 'c',
    ue = 'd',
    te = 'o',
    ie = 'u',
    ae = 'x',
    oe = 'X',
    ce = 'e',
    fe = 'E',
    se = 'f',
    le = 'g',
    pe = 'G',
    he = 's',
    ge = '+',
    ve = '-',
    de = 2,
    be = 8,
    xe = 16;
  function ye(e, r) {
    for (var n = F(e), u = h(r) ? 1 : T(V(r), 0, Z), t = ''; u; ) 1 & u && (t += n), 1 < u && (n += n), (u >>= 1);
    return t;
  }
  function Fe(e, r) {
    return ye(e, V(r / e.length) + (r % e.length)).substr(0, r);
  }
  function we(e, r, n) {
    var u = F(e),
      t = h(r) ? 0 : T(V(r), 0, Z),
      i = F(n, ' ');
    return t <= u.length ? u : Fe(i, t - u.length) + u;
  }
  function me(e, r, n) {
    var u = F(e),
      t = h(r) ? 0 : T(V(r), 0, Z),
      i = F(n, ' ');
    return t <= u.length ? u : u + Fe(i, t - u.length);
  }
  function Ee(e, r, n) {
    return n.signSpecifier === ge && 0 <= e && (r = ge + r), r;
  }
  function Ce(e, r) {
    var n,
      u = parseFloat(e);
    isNaN(u) && (u = 0);
    var t = q(r.precision, 6);
    switch (r.typeSpecifier) {
      case se:
        n = u.toFixed(t);
        break;
      case ce:
        n = u.toExponential(t);
        break;
      case fe:
        n = u.toExponential(t).toUpperCase();
        break;
      case le:
      case pe:
        n = (function(e, r, n) {
          if (0 === e) return '0';
          var u = 0 === r ? 1 : r,
            t = e.toPrecision(u).replace(D, '');
          n.typeSpecifier === pe && (t = t.toUpperCase());
          return t;
        })(u, t, r);
    }
    return F((n = Ee(u, n, r)));
  }
  function Ae(e, r) {
    var n = parseInt(e);
    switch ((isNaN(n) && (n = 0), (n >>>= 0), r.typeSpecifier)) {
      case ne:
        n = String.fromCharCode(n);
        break;
      case re:
        n = n.toString(de);
        break;
      case te:
        n = n.toString(be);
        break;
      case ae:
        n = n.toString(xe);
        break;
      case oe:
        n = n.toString(xe).toUpperCase();
    }
    return F(n);
  }
  function De(e, r) {
    var n = parseInt(e);
    return isNaN(n) && (n = 0), Ee(n, z(n), r);
  }
  function ke(e, r) {
    var n = e,
      u = r.precision;
    return !h(u) && n.length > u && (n = W(n, u, '')), n;
  }
  function Se(e, r) {
    var n;
    switch (r.typeSpecifier) {
      case he:
        n = ke;
        break;
      case ue:
      case ee:
        n = De;
        break;
      case ne:
      case re:
      case te:
      case ae:
      case oe:
      case ie:
        n = Ae;
        break;
      case se:
      case ce:
      case fe:
      case le:
      case pe:
        n = Ce;
    }
    var u,
      t,
      i,
      a = n(e, r);
    return (
      (u = a),
      h((i = (t = r).width)) || u.length >= i
        ? u
        : (t.alignmentSpecifier === ve ? me : we)(u, i, t.getPaddingCharacter())
    );
  }
  function Oe(e) {
    (this.percent = e.percent),
      (this.signSpecifier = e.signSpecifier),
      (this.paddingSpecifier = e.paddingSpecifier),
      (this.alignmentSpecifier = e.alignmentSpecifier),
      (this.width = e.width),
      (this.precision = e.precision),
      (this.typeSpecifier = e.typeSpecifier);
  }
  function Be(e, r, n, u, t, i, a, o, c, f, s) {
    var l = new Oe({
      percent: u,
      signSpecifier: i,
      paddingSpecifier: a,
      alignmentSpecifier: o,
      width: q(c, null),
      precision: q(f, null),
      typeSpecifier: s,
    });
    if (l.isPercentLiteral()) return n.slice(1);
    var p = e.getIndexByPosition(t);
    return (
      e.incrementOnEmptyPosition(t),
      (function(e, r, n) {
        if (h(n.typeSpecifier)) throw new Error('sprintf(): Unknown type specifier');
        if (r - 1 < e) throw new Error('sprintf(): Too few arguments');
        if (e < 0) throw new Error('sprintf(): Argument number must be greater than zero');
      })(p, r.length, l),
      Se(r[p], l)
    );
  }
  function je(e) {
    var r = F(e);
    if ('' === r) return r;
    for (var n = arguments.length, u = new Array(1 < n ? n - 1 : 0), t = 1; t < n; t++) u[t - 1] = arguments[t];
    var i = Be.bind(void 0, new Q(), u);
    return r.replace(A, i);
  }
  (Oe.prototype.isPercentLiteral = function() {
    return '%%' === this.percent;
  }),
    (Oe.prototype.getPaddingCharacter = function() {
      var e = P(this.paddingSpecifier, ' ');
      return 2 === e.length && "'" === e[0] && (e = e[1]), e;
    });
  var Le = { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&#x27;', '`': '&#x60;' };
  function Re(e) {
    return Le[e];
  }
  var Ne = {
      '<': /(&lt;)|(&#x0*3c;)|(&#0*60;)/gi,
      '>': /(&gt;)|(&#x0*3e;)|(&#0*62;)/gi,
      '&': /(&amp;)|(&#x0*26;)|(&#0*38;)/gi,
      '"': /(&quot;)|(&#x0*22;)|(&#0*34;)/gi,
      "'": /(&#x0*27;)|(&#0*39;)/gi,
      '`': /(&#x0*60;)|(&#0*96;)/gi,
    },
    Pe = Object.keys(Ne);
  function ze(e, r) {
    return e.replace(Ne[r], r);
  }
  var Ie = {
      3: '????',
      8: '????',
      A: 'A????????????????????????????????????????',
      B: 'B??????????',
      C: 'C????????????????',
      D: 'D????????????????',
      E: 'E????????????????????????????????????',
      F: 'F??????',
      G: 'G??????????????????????',
      H: 'H????????????',
      I: 'I????????????????????????????????????',
      J: 'J??????',
      K: 'K??????????',
      L: 'L????????????????',
      M: 'M??????',
      N: 'N??????????????????',
      O: 'O??????????????????????????????????????????????????',
      P: 'P??????',
      Q: 'Q??',
      R: 'R????????????????',
      S: 'S??????????????',
      T: 'T??????????????????',
      U: 'U??????????????????????????????????????????',
      V: 'V??????',
      W: 'W??????',
      X: 'X??',
      Y: 'Y????????????????????',
      Z: 'Z??????????????',
      a: 'a????????????????????????????????????????',
      b: 'b??????????',
      c: 'c????????????????',
      d: 'd????????????????',
      e: 'e??????????????????????????????????????',
      f: 'f??????',
      g: 'g??????????????????????',
      h: 'h??????????????',
      i: 'i??????????????????????????????????????',
      j: 'j????????',
      k: 'k??????????',
      l: 'l????????????????????',
      m: 'm????????',
      n: 'n????????????????????',
      o: 'o??????????????????????????????????????????????????',
      p: 'p??????',
      q: 'q??',
      r: 'r??????????????????',
      s: 's????????????????????',
      t: 't????????????????',
      u: 'u??????????????????????????????????????????',
      v: 'v??????',
      w: 'w??????',
      x: 'x??',
      y: 'y??????????????????????',
      z: 'z????????????????',
      OE: '????',
      oe: '????',
      AE: '??????',
      ae: '??????',
      hv: '??',
      OI: '??',
      oi: '??',
      DZ: '????',
      Dz: '????',
      dz: '????',
      LJ: '??',
      Lj: '??',
      lj: '??',
      NJ: '??',
      Nj: '??',
      nj: '??',
      OU: '??',
      ou: '??',
      TH: '??',
      th: '??',
      PS: '??',
      ps: '??',
      Yo: '??',
      Ye: '??',
      Yi: '??',
      Zh: '??',
      Ch: '??',
      Sh: '????',
      '': '??????',
      Yu: '??',
      Ya: '??',
      zh: '??',
      ch: '??',
      sh: '????',
      yu: '??',
      ya: '??',
      yo: '??',
      ye: '??',
      yi: '??',
    },
    Ue = null;
  function $e(e) {
    var r = (null !== Ue ||
      ((Ue = {}),
      Object.keys(Ie).forEach(function(e) {
        for (var r = Ie[e], n = 0; n < r.length; n++) {
          var u = r[n];
          Ue[u] = e;
        }
      })),
    Ue)[e];
    return r || e;
  }
  function _e(e, r) {
    return r;
  }
  function Te(e) {
    var r = F(e);
    return '' === r ? '' : r.replace(E, $e).replace(s, _e);
  }
  function Ze(e, r) {
    return e.length === r.length ? 0 : e.length < r.length ? 1 : -1;
  }
  function Ve(e, r, n) {
    var u = F(e),
      t = z(r);
    return null !== t && ('' === t || ((n = h(n) ? 0 : T(V(n), 0, u.length)), -1 !== u.indexOf(t, n)));
  }
  var We = Array.prototype.reduce;
  function Ye(e, r) {
    var n = F(e);
    if ('' === r || '' === n) return n;
    var u = z(r);
    if (h(u)) return n.replace(d, '');
    var t = !0;
    return We.call(
      n,
      function(e, r) {
        return t && Ve(u, r) ? e : ((t = !1), e + r);
      },
      ''
    );
  }
  var Ge = Array.prototype.reduceRight;
  function He(e, r) {
    var n = F(e);
    if ('' === r || '' === n) return n;
    var u = z(r);
    if (h(u)) return n.replace(b, '');
    var t = !0;
    return Ge.call(
      n,
      function(e, r) {
        return t && Ve(u, r) ? e : ((t = !1), r + e);
      },
      ''
    );
  }
  var Je = 'width',
    qe = 'newLine',
    Xe = 'indent',
    Ke = 'cut';
  function Me(e) {
    var r = F(e);
    return L.test(r);
  }
  var Qe = 0,
    er = 1,
    rr = 2;
  function nr(e) {
    for (var r = Qe, n = '', u = 0; r !== rr; ) {
      var t = e[u++].toLowerCase();
      switch (t) {
        case '<':
          break;
        case '>':
          r = rr;
          break;
        default:
          v.test(t) ? r === er && (r = rr) : (r === Qe && (r = er), '/' !== t && (n += t));
      }
    }
    return n;
  }
  var ur = null;
  var tr =
      null !== ur
        ? ur
        : (ur =
            'object' == typeof global && global.Object === Object
              ? global
              : 'object' == typeof self && self.Object === Object
              ? self
              : new Function('return this')()),
    ir = tr.v;
  var ar = {
    camelCase: function(e) {
      var r = F(e);
      return '' === r
        ? ''
        : I(r)
            .map(U)
            .join('');
    },
    capitalize: i,
    decapitalize: function(e) {
      var r = F(e);
      return '' === r ? '' : r.substr(0, 1).toLowerCase() + r.substr(1);
    },
    kebabCase: $,
    lowerCase: u,
    snakeCase: function(e) {
      var r = F(e);
      return '' === r
        ? ''
        : I(r)
            .map(u)
            .join('_');
    },
    swapCase: function(e) {
      return F(e)
        .split('')
        .reduce(_, '');
    },
    titleCase: function(e, r) {
      var n = F(e),
        u = Array.isArray(r) ? r : [],
        t = N.test(n) ? j : B;
      return n.replace(t, function(e, r) {
        return 0 < r && 0 <= u.indexOf(n[r - 1]) ? e.toLowerCase() : i(e, !0);
      });
    },
    upperCase: function(e) {
      return F(e).toUpperCase();
    },
    count: function(e) {
      return F(e).length;
    },
    countGraphemes: function(e) {
      return F(e)
        .replace(s, '*')
        .replace(l, '*').length;
    },
    countSubstrings: function(e, r) {
      var n = F(e),
        u = F(r),
        t = u.length,
        i = 0,
        a = 0;
      if ('' === n || '' === u) return i;
      for (; -1 !== (a = n.indexOf(u, a)) && (i++, (a += t)), -1 !== a; );
      return i;
    },
    countWhere: function(e, r, n) {
      var u = F(e);
      if ('' === u || 'function' != typeof r) return 0;
      var t = r.bind(n);
      return M.call(
        u,
        function(e, r, n) {
          return t(r, n, u) ? e + 1 : e;
        },
        0
      );
    },
    countWords: function(e, r, n) {
      return I(e, r, n).length;
    },
    escapeHtml: function(e) {
      return F(e).replace(C, Re);
    },
    escapeRegExp: function(e) {
      return F(e).replace(m, '\\$&');
    },
    unescapeHtml: function(e) {
      var r = F(e);
      return Pe.reduce(ze, r);
    },
    sprintf: je,
    vprintf: function(e, r) {
      return je.apply(void 0, [e].concat(n(P(r, []))));
    },
    indexOf: function(e, r, n) {
      return F(e).indexOf(r, n);
    },
    lastIndexOf: function(e, r, n) {
      return F(e).lastIndexOf(r, n);
    },
    search: function(e, r, n) {
      var u = F(e),
        t = h(n) ? 0 : T(V(n), 0, u.length),
        i = u.substr(t).search(r);
      return -1 === i || isNaN(t) || (i += t), i;
    },
    charAt: function(e, r) {
      return F(e).charAt(r);
    },
    codePointAt: K,
    first: function(e, r) {
      var n = F(e),
        u = h(r) ? 1 : T(V(r), 0, Z);
      return n.length <= u ? n : n.substr(0, u);
    },
    graphemeAt: function(e, r) {
      var n,
        u = F(e),
        t = q(r),
        i = 0;
      for (t = X(t, 0); null !== (n = p.exec(u)); ) {
        if (i === t) return n[(p.lastIndex = 0)];
        i++;
      }
      return '';
    },
    last: function(e, r) {
      var n = F(e),
        u = h(r) ? 1 : T(V(r), 0, Z);
      return n.length <= u ? n : n.substr(n.length - u, u);
    },
    prune: function(e, r, n) {
      var u = F(e),
        t = h(r) ? u.length : T(V(r), 0, Z),
        i = F(n, '...');
      if (t >= u.length) return u;
      var a = N.test(u) ? j : B,
        o = 0;
      return (
        u.replace(a, function(e, r) {
          var n = r + e.length;
          n <= t - i.length && (o = n);
        }),
        u.substr(0, o) + i
      );
    },
    slice: function(e, r, n) {
      return F(e).slice(r, n);
    },
    substr: function(e, r, n) {
      return F(e).substr(r, n);
    },
    substring: function(e, r, n) {
      return F(e).substring(r, n);
    },
    truncate: W,
    insert: function(e, r, n) {
      var u = F(e),
        t = F(r),
        i = q(n);
      return i < 0 || i > u.length || '' === t ? u : u.slice(0, i) + t + u.slice(i);
    },
    latinise: Te,
    pad: function(e, r, n) {
      var u = F(e),
        t = h(r) ? 0 : T(V(r), 0, Z),
        i = F(n, ' ');
      if (t <= u.length) return u;
      var a = t - u.length,
        o = V(a / 2),
        c = a % 2;
      return Fe(i, o) + u + Fe(i, o + c);
    },
    padLeft: we,
    padRight: me,
    repeat: ye,
    replace: function(e, r, n) {
      return F(e).replace(r, n);
    },
    replaceAll: function e(r, n, u) {
      var t = F(r);
      if (n instanceof RegExp) {
        if (-1 === n.flags.indexOf('g')) throw new TypeError('search argument is a non-global regular expression');
        return t.replace(n, u);
      }
      var i = F(n),
        a = 'function' == typeof u;
      a || (u = F(u));
      var o = i.length;
      if (0 === o) return e(r, /(?:)/g, u);
      for (var c = 1 < o ? o : 1, f = [], s = t.indexOf(i, 0); -1 !== s; ) f.push(s), (s = t.indexOf(i, s + c));
      for (var l = 0, p = '', h = 0; h < f.length; h++) {
        var g = f[h],
          v = u;
        a && (v = F(u.call(void 0, i, g, t))), (p += t.slice(l, g) + v), (l = g + o);
      }
      return l < t.length && (p += t.slice(l)), p;
    },
    reverse: function(e) {
      return F(e)
        .split('')
        .reverse()
        .join('');
    },
    reverseGrapheme: function u(e) {
      for (
        var r = F(e),
          n = '',
          t = (r = r
            .replace(s, function(e, r, n) {
              return u(n) + r;
            })
            .replace(l, '$2$1')).length;
        t--;

      )
        n += r.charAt(t);
      return n;
    },
    slugify: function(e) {
      var r = F(e);
      return '' === r ? '' : $(Te(r).replace(E, '-'));
    },
    splice: function(e, r, n, u) {
      var t = F(e),
        i = F(u),
        a = q(r);
      a < 0 ? (a = t.length + a) < 0 && (a = 0) : a > t.length && (a = t.length);
      var o = q(n, t.length - a);
      return o < 0 && (o = 0), t.slice(0, a) + i + t.slice(a + o);
    },
    tr: function(e, r, n) {
      var u,
        t,
        i,
        a,
        o,
        c = F(e);
      if (y(r) && y(n)) (u = r.split('')), (t = n.split(''));
      else {
        var f = x(
          ((i = P(r, {})),
          (a = Object.keys(i)),
          (o = a.sort(Ze).map(function(e) {
            return i[e];
          })),
          [a, o]),
          2
        );
        (u = f[0]), (t = f[1]);
      }
      var s = u.length;
      if (0 === s) return c;
      for (var l = '', p = t.length, h = 0; h < c.length; h++) {
        for (var g = !1, v = void 0, d = 0; d < s && d < p; d++) {
          var b = u[d];
          if (c.substr(h, b.length) === b) {
            (g = !0), (v = t[d]), (h = h + b.length - 1);
            break;
          }
        }
        l += g ? v : c[h];
      }
      return l;
    },
    trim: function(e, r) {
      var n = F(e);
      if ('' === r || '' === n) return n;
      var u = z(r);
      return h(u) ? n.trim() : He(Ye(n, u), u);
    },
    trimLeft: Ye,
    trimRight: He,
    wordWrap: function(e) {
      var r,
        n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
        u = F(e),
        t = { width: q((r = n)[Je], 75), newLine: F(r[qe], '\n'), indent: F(r[Xe], ''), cut: g(r[Ke], !1) },
        i = t.width,
        a = t.newLine,
        o = t.indent,
        c = t.cut;
      if ('' === u || i <= 0) return o;
      for (var f = u.length, s = u.substring.bind(u), l = 0, p = ''; i < f - l; )
        if (' ' !== u[l]) {
          var h = u.lastIndexOf(' ', i + l);
          l <= h
            ? ((p += o + s(l, h) + a), (l = h + 1))
            : c
            ? ((p += o + s(l, i + l) + a), (l += i))
            : (l = 0 <= (h = u.indexOf(' ', i + l)) ? ((p += o + s(l, h) + a), h + 1) : ((p += o + s(l)), f));
        } else l++;
      return l < f && (p += o + s(l)), p;
    },
    endsWith: function(e, r, n) {
      if (h(r)) return !1;
      var u = F(e),
        t = F(r);
      if ('' === t) return !0;
      (n = h(n) ? u.length : T(V(n), 0, u.length)), (n -= t.length);
      var i = u.indexOf(t, n);
      return -1 !== i && i === n;
    },
    includes: Ve,
    isAlpha: Me,
    isAlphaDigit: function(e) {
      var r = F(e);
      return R.test(r);
    },
    isBlank: function(e) {
      return 0 === F(e).trim().length;
    },
    isDigit: function(e) {
      var r = F(e);
      return w.test(r);
    },
    isEmpty: function(e) {
      return 0 === F(e).length;
    },
    isLowerCase: function(e) {
      var r = F(e);
      return Me(r) && r.toLowerCase() === r;
    },
    isNumeric: function(e) {
      var r = 'object' != typeof e || h(e) ? e : Number(e);
      return ('number' == typeof r || 'string' == typeof r) && !isNaN(r - parseFloat(r));
    },
    isString: y,
    isUpperCase: function(e) {
      var r = F(e);
      return Me(r) && r.toUpperCase() === r;
    },
    matches: function(e, r, n) {
      var u,
        t = F(e),
        i = F(n);
      if (!(r instanceof RegExp)) {
        if (null === (u = z(r))) return !1;
        r = new RegExp(u, i);
      }
      return r.test(t);
    },
    startsWith: function(e, r, n) {
      var u = F(e),
        t = z(r);
      return null !== t && ('' === t || ((n = h(n) ? 0 : T(V(n), 0, u.length)), u.substr(n, t.length) === t));
    },
    chars: function(e) {
      return F(e).split('');
    },
    codePoints: function(e) {
      for (var r, n = F(e), u = n.length, t = [], i = 0; i < u; ) (r = K(n, i)), t.push(r), (i += 65535 < r ? 2 : 1);
      return t;
    },
    graphemes: function(e) {
      return P(F(e).match(p), []);
    },
    split: function(e, r, n) {
      return F(e).split(r, n);
    },
    words: I,
    stripBom: function(e) {
      var r = F(e);
      return '' === r ? '' : '\ufeff' === r[0] ? r.substring(1) : r;
    },
    stripTags: function(e, r, n) {
      if ('' === (e = F(e))) return '';
      if (!Array.isArray(r)) {
        var u = F(r);
        r =
          '' === u
            ? []
            : (function(e) {
                for (var r, n = []; null !== (r = k.exec(e)); ) n.push(r[1]);
                return n;
              })(u);
      }
      for (
        var t = F(n),
          i = e.length,
          a = 0 < r.length,
          o = function(e, r, n) {
            var u = 0;
            return (
              (3 < arguments.length && void 0 !== arguments[3] && !arguments[3]) || (u = 1 - r.length),
              e.substr(n + u, r.length).toLowerCase() === r
            );
          }.bind(null, e),
          c = 0,
          f = 0,
          s = '',
          l = '',
          p = null,
          h = 0;
        h < i;
        h++
      ) {
        var g = e[h],
          v = !1;
        switch (g) {
          case '<':
            if (p) break;
            if (o('< ', h, !1)) {
              v = !0;
              break;
            }
            if (0 === c) {
              (v = !0), (c = 1);
              break;
            }
            if (1 === c) {
              f++;
              break;
            }
            v = !0;
            break;
          case '!':
            if (1 === c && o('<!', h)) {
              c = 2;
              break;
            }
            v = !0;
            break;
          case '-':
            if (2 === c && o('!--', h)) {
              c = 3;
              break;
            }
            v = !0;
            break;
          case '"':
          case "'":
            1 === c && (p = p === g ? null : p || g), (v = !0);
            break;
          case 'E':
          case 'e':
            if (2 === c && o('doctype', h)) {
              c = 1;
              break;
            }
            v = !0;
            break;
          case '>':
            if (0 < f) {
              f--;
              break;
            }
            if (p) break;
            if (1 === c) {
              if (((p = null), (c = 0), a)) {
                var d = nr((l += '>'));
                -1 !== r.indexOf(d.toLowerCase()) ? (s += l) : (s += t), (l = '');
              } else s += t;
              break;
            }
            if (2 === c || (3 === c && o('--\x3e', h))) {
              (p = null), (c = 0), (l = '');
              break;
            }
            v = !0;
            break;
          default:
            v = !0;
        }
        if (v)
          switch (c) {
            case 0:
              s += g;
              break;
            case 1:
              a && (l += g);
          }
      }
      return s;
    },
    noConflict: function() {
      return this === tr.v && (tr.v = ir), this;
    },
    version: '1.4.0',
  };
  function or(e, r) {
    (this._wrappedValue = e), (this._explicitChain = r);
  }
  function cr(e) {
    return new or(e, !1);
  }
  return (
    (or.prototype.value = function() {
      return this._wrappedValue;
    }),
    (or.prototype.valueOf = function() {
      return this.value();
    }),
    (or.prototype.toJSON = function() {
      return this.value();
    }),
    (or.prototype.toString = function() {
      return String(this.value());
    }),
    (or.prototype.chain = function() {
      return new or(this._wrappedValue, !0);
    }),
    (or.prototype.thru = function(e) {
      return 'function' == typeof e ? new or(e(this._wrappedValue), this._explicitChain) : this;
    }),
    (or.prototype._explicitChain = !0),
    Object.keys(ar).forEach(function(e) {
      var t;
      or.prototype[e] =
        ((t = ar[e]),
        function() {
          for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
          var u = t.apply(void 0, [this._wrappedValue].concat(r));
          return this._explicitChain || 'string' == typeof u ? new or(u, this._explicitChain) : u;
        });
    }),
    e(cr, ar, {
      chain: function(e) {
        return new or(e, !0);
      },
    }),
    cr
  );
});
