// Build: 2025/3/30 17:50:34
(() => {
  var Ar = Object.defineProperty;
  var jr = (l, e, t) => e in l ? Ar(l, e, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
  }) : l[e] = t;
  var ce = (l, e, t) => (jr(l, typeof e != "symbol" ? e + "" : e, t), t);
  (function(l) {
      function e() {}

      function t() {}
      var n = String.fromCharCode,
          i = {}.toString,
          r = i.call(l.SharedArrayBuffer),
          c = i(),
          a = l.Uint8Array,
          o = a || Array,
          s = a ? ArrayBuffer : o,
          d = s.isView || function(B) {
              return B && "length" in B
          },
          g = i.call(s.prototype);
      s = t.prototype;
      var b = l.TextEncoder,
          m = new(a ? Uint16Array : o)(32);
      e.prototype.decode = function(B) {
          if (!d(B)) {
              var D = i.call(B);
              if (D !== g && D !== r && D !== c) throw TypeError("Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");
              B = a ? new o(B) : B || []
          }
          for (var S = D = "", k = 0, T = B.length | 0, le = T - 32 | 0, C, x, L = 0, _ = 0, A, $ = 0, j = -1; k < T;) {
              for (C = k <= le ? 32 : T - k | 0; $ < C; k = k + 1 | 0, $ = $ + 1 | 0) {
                  switch (x = B[k] & 255, x >> 4) {
                      case 15:
                          if (A = B[k = k + 1 | 0] & 255, A >> 6 !== 2 || 247 < x) {
                              k = k - 1 | 0;
                              break
                          }
                          L = (x & 7) << 6 | A & 63, _ = 5, x = 256;
                      case 14:
                          A = B[k = k + 1 | 0] & 255, L <<= 6, L |= (x & 15) << 6 | A & 63, _ = A >> 6 === 2 ? _ + 4 | 0 : 24, x = x + 256 & 768;
                      case 13:
                      case 12:
                          A = B[k = k + 1 | 0] & 255, L <<= 6, L |= (x & 31) << 6 | A & 63, _ = _ + 7 | 0, k < T && A >> 6 === 2 && L >> _ && 1114112 > L ? (x = L, L = L - 65536 | 0, 0 <= L && (j = (L >> 10) + 55296 | 0, x = (L & 1023) + 56320 | 0, 31 > $ ? (m[$] = j, $ = $ + 1 | 0, j = -1) : (A = j, j = x, x = A))) : (x >>= 8, k = k - x - 1 | 0, x = 65533), L = _ = 0, C = k <= le ? 32 : T - k | 0;
                      default:
                          m[$] = x;
                          continue;
                      case 11:
                      case 10:
                      case 9:
                      case 8:
                  }
                  m[$] = 65533
              }
              if (S += n(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15], m[16], m[17], m[18], m[19], m[20], m[21], m[22], m[23], m[24], m[25], m[26], m[27], m[28], m[29], m[30], m[31]), 32 > $ && (S = S.slice(0, $ - 32 | 0)), k < T) {
                  if (m[0] = j, $ = ~j >>> 31, j = -1, S.length < D.length) continue
              } else j !== -1 && (S += n(j));
              D += S, S = ""
          }
          return D
      }, s.encode = function(B) {
          B = B === void 0 ? "" : "" + B;
          var D = B.length | 0,
              S = new o((D << 1) + 8 | 0),
              k, T = 0,
              le = !a;
          for (k = 0; k < D; k = k + 1 | 0, T = T + 1 | 0) {
              var C = B.charCodeAt(k) | 0;
              if (127 >= C) S[T] = C;
              else {
                  if (2047 >= C) S[T] = 192 | C >> 6;
                  else {
                      e: {
                          if (55296 <= C)
                              if (56319 >= C) {
                                  var x = B.charCodeAt(k = k + 1 | 0) | 0;
                                  if (56320 <= x && 57343 >= x) {
                                      if (C = (C << 10) + x - 56613888 | 0, 65535 < C) {
                                          S[T] = 240 | C >> 18, S[T = T + 1 | 0] = 128 | C >> 12 & 63, S[T = T + 1 | 0] = 128 | C >> 6 & 63, S[T = T + 1 | 0] = 128 | C & 63;
                                          continue
                                      }
                                      break e
                                  }
                                  C = 65533
                              } else 57343 >= C && (C = 65533);!le && k << 1 < T && k << 1 < (T - 7 | 0) && (le = !0, x = new o(3 * D), x.set(S), S = x)
                      }
                      S[T] = 224 | C >> 12,
                      S[T = T + 1 | 0] = 128 | C >> 6 & 63
                  }
                  S[T = T + 1 | 0] = 128 | C & 63
              }
          }
          return a ? S.subarray(0, T) : S.slice(0, T)
      }, b || (l.TextDecoder = e, l.TextEncoder = t)
  })(globalThis);

  function ke(l) {
      let e = typeof l;
      if (e == "object") {
          if (Array.isArray(l)) return "array";
          if (l === null) return "null"
      }
      return e
  }

  function lr(l) {
      return l !== null && typeof l == "object" && !Array.isArray(l)
  }
  var M = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
      Re = [];
  for (let l = 0; l < M.length; l++) Re[M[l].charCodeAt(0)] = l;
  Re["-".charCodeAt(0)] = M.indexOf("+");
  Re["_".charCodeAt(0)] = M.indexOf("/");

  function cr(l) {
      let e = l.length * 3 / 4;
      l[l.length - 2] == "=" ? e -= 2 : l[l.length - 1] == "=" && (e -= 1);
      let t = new Uint8Array(e),
          n = 0,
          i = 0,
          r, c = 0;
      for (let a = 0; a < l.length; a++) {
          if (r = Re[l.charCodeAt(a)], r === void 0) switch (l[a]) {
              case "=":
                  i = 0;
              case `
`:
              case "\r":
              case "	":
              case " ":
                  continue;
              default:
                  throw Error("invalid base64 string.")
          }
          switch (i) {
              case 0:
                  c = r, i = 1;
                  break;
              case 1:
                  t[n++] = c << 2 | (r & 48) >> 4, c = r, i = 2;
                  break;
              case 2:
                  t[n++] = (c & 15) << 4 | (r & 60) >> 2, c = r, i = 3;
                  break;
              case 3:
                  t[n++] = (c & 3) << 6 | r, i = 0;
                  break
          }
      }
      if (i == 1) throw Error("invalid base64 string.");
      return t.subarray(0, n)
  }

  function dr(l) {
      let e = "",
          t = 0,
          n, i = 0;
      for (let r = 0; r < l.length; r++) switch (n = l[r], t) {
          case 0:
              e += M[n >> 2], i = (n & 3) << 4, t = 1;
              break;
          case 1:
              e += M[i | n >> 4], i = (n & 15) << 2, t = 2;
              break;
          case 2:
              e += M[i | n >> 6], e += M[n & 63], t = 0;
              break
      }
      return t && (e += M[i], e += "=", t == 1 && (e += "=")), e
  }
  var f;
  (function(l) {
      l.symbol = Symbol.for("protobuf-ts/unknown"), l.onRead = (t, n, i, r, c) => {
          (e(n) ? n[l.symbol] : n[l.symbol] = []).push({
              no: i,
              wireType: r,
              data: c
          })
      }, l.onWrite = (t, n, i) => {
          for (let {
                  no: r,
                  wireType: c,
                  data: a
              }
              of l.list(n)) i.tag(r, c).raw(a)
      }, l.list = (t, n) => {
          if (e(t)) {
              let i = t[l.symbol];
              return n ? i.filter(r => r.no == n) : i
          }
          return []
      }, l.last = (t, n) => l.list(t, n).slice(-1)[0];
      let e = t => t && Array.isArray(t[l.symbol])
  })(f || (f = {}));
  var u;
  (function(l) {
      l[l.Varint = 0] = "Varint", l[l.Bit64 = 1] = "Bit64", l[l.LengthDelimited = 2] = "LengthDelimited", l[l.StartGroup = 3] = "StartGroup", l[l.EndGroup = 4] = "EndGroup", l[l.Bit32 = 5] = "Bit32"
  })(u || (u = {}));

  function ur() {
      let l = 0,
          e = 0;
      for (let n = 0; n < 28; n += 7) {
          let i = this.buf[this.pos++];
          if (l |= (i & 127) << n, !(i & 128)) return this.assertBounds(), [l, e]
      }
      let t = this.buf[this.pos++];
      if (l |= (t & 15) << 28, e = (t & 112) >> 4, !(t & 128)) return this.assertBounds(), [l, e];
      for (let n = 3; n <= 31; n += 7) {
          let i = this.buf[this.pos++];
          if (e |= (i & 127) << n, !(i & 128)) return this.assertBounds(), [l, e]
      }
      throw new Error("invalid varint")
  }

  function Be(l, e, t) {
      for (let r = 0; r < 28; r = r + 7) {
          let c = l >>> r,
              a = !(!(c >>> 7) && e == 0),
              o = (a ? c | 128 : c) & 255;
          if (t.push(o), !a) return
      }
      let n = l >>> 28 & 15 | (e & 7) << 4,
          i = !!(e >> 3);
      if (t.push((i ? n | 128 : n) & 255), !!i) {
          for (let r = 3; r < 31; r = r + 7) {
              let c = e >>> r,
                  a = !!(c >>> 7),
                  o = (a ? c | 128 : c) & 255;
              if (t.push(o), !a) return
          }
          t.push(e >>> 31 & 1)
      }
  }
  var we = (1 << 16) * (1 << 16);

  function ve(l) {
      let e = l[0] == "-";
      e && (l = l.slice(1));
      let t = 1e6,
          n = 0,
          i = 0;

      function r(c, a) {
          let o = Number(l.slice(c, a));
          i *= t, n = n * t + o, n >= we && (i = i + (n / we | 0), n = n % we)
      }
      return r(-24, -18), r(-18, -12), r(-12, -6), r(-6), [e, n, i]
  }

  function Ie(l, e) {
      if (e >>> 0 <= 2097151) return "" + (we * e + (l >>> 0));
      let t = l & 16777215,
          n = (l >>> 24 | e << 8) >>> 0 & 16777215,
          i = e >> 16 & 65535,
          r = t + n * 6777216 + i * 6710656,
          c = n + i * 8147497,
          a = i * 2,
          o = 1e7;
      r >= o && (c += Math.floor(r / o), r %= o), c >= o && (a += Math.floor(c / o), c %= o);

      function s(d, g) {
          let b = d ? String(d) : "";
          return g ? "0000000".slice(b.length) + b : b
      }
      return s(a, 0) + s(c, a) + s(r, 1)
  }

  function Ge(l, e) {
      if (l >= 0) {
          for (; l > 127;) e.push(l & 127 | 128), l = l >>> 7;
          e.push(l)
      } else {
          for (let t = 0; t < 9; t++) e.push(l & 127 | 128), l = l >> 7;
          e.push(1)
      }
  }

  function fr() {
      let l = this.buf[this.pos++],
          e = l & 127;
      if (!(l & 128)) return this.assertBounds(), e;
      if (l = this.buf[this.pos++], e |= (l & 127) << 7, !(l & 128)) return this.assertBounds(), e;
      if (l = this.buf[this.pos++], e |= (l & 127) << 14, !(l & 128)) return this.assertBounds(), e;
      if (l = this.buf[this.pos++], e |= (l & 127) << 21, !(l & 128)) return this.assertBounds(), e;
      l = this.buf[this.pos++], e |= (l & 15) << 28;
      for (let t = 5; l & 128 && t < 10; t++) l = this.buf[this.pos++];
      if (l & 128) throw new Error("invalid varint");
      return this.assertBounds(), e >>> 0
  }
  var N;

  function Mr() {
      let l = new DataView(new ArrayBuffer(8));
      N = globalThis.BigInt !== void 0 && typeof l.getBigInt64 == "function" && typeof l.getBigUint64 == "function" && typeof l.setBigInt64 == "function" && typeof l.setBigUint64 == "function" ? {
          MIN: BigInt("-9223372036854775808"),
          MAX: BigInt("9223372036854775807"),
          UMIN: BigInt("0"),
          UMAX: BigInt("18446744073709551615"),
          C: BigInt,
          V: l
      } : void 0
  }
  Mr();

  function pr(l) {
      if (!l) throw new Error("BigInt unavailable, see https://github.com/timostamm/protobuf-ts/blob/v1.0.8/MANUAL.md#bigint-support")
  }
  var hr = /^-?[0-9]+$/,
      Ne = 4294967296,
      Te = 2147483648,
      We = class {
          constructor(e, t) {
              this.lo = e | 0, this.hi = t | 0
          }
          isZero() {
              return this.lo == 0 && this.hi == 0
          }
          toNumber() {
              let e = this.hi * Ne + (this.lo >>> 0);
              if (!Number.isSafeInteger(e)) throw new Error("cannot convert to safe number");
              return e
          }
      },
      O = class extends We {
          static from(e) {
              if (N) switch (typeof e) {
                  case "string":
                      if (e == "0") return this.ZERO;
                      if (e == "") throw new Error("string is no integer");
                      e = N.C(e);
                  case "number":
                      if (e === 0) return this.ZERO;
                      e = N.C(e);
                  case "bigint":
                      if (!e) return this.ZERO;
                      if (e < N.UMIN) throw new Error("signed value for ulong");
                      if (e > N.UMAX) throw new Error("ulong too large");
                      return N.V.setBigUint64(0, e, !0), new O(N.V.getInt32(0, !0), N.V.getInt32(4, !0))
              } else switch (typeof e) {
                  case "string":
                      if (e == "0") return this.ZERO;
                      if (e = e.trim(), !hr.test(e)) throw new Error("string is no integer");
                      let [t, n, i] = ve(e);
                      if (t) throw new Error("signed value for ulong");
                      return new O(n, i);
                  case "number":
                      if (e == 0) return this.ZERO;
                      if (!Number.isSafeInteger(e)) throw new Error("number is no integer");
                      if (e < 0) throw new Error("signed value for ulong");
                      return new O(e, e / Ne)
              }
              throw new Error("unknown value " + typeof e)
          }
          toString() {
              return N ? this.toBigInt().toString() : Ie(this.lo, this.hi)
          }
          toBigInt() {
              return pr(N), N.V.setInt32(0, this.lo, !0), N.V.setInt32(4, this.hi, !0), N.V.getBigUint64(0, !0)
          }
      };
  O.ZERO = new O(0, 0);
  var I = class extends We {
      static from(e) {
          if (N) switch (typeof e) {
              case "string":
                  if (e == "0") return this.ZERO;
                  if (e == "") throw new Error("string is no integer");
                  e = N.C(e);
              case "number":
                  if (e === 0) return this.ZERO;
                  e = N.C(e);
              case "bigint":
                  if (!e) return this.ZERO;
                  if (e < N.MIN) throw new Error("signed long too small");
                  if (e > N.MAX) throw new Error("signed long too large");
                  return N.V.setBigInt64(0, e, !0), new I(N.V.getInt32(0, !0), N.V.getInt32(4, !0))
          } else switch (typeof e) {
              case "string":
                  if (e == "0") return this.ZERO;
                  if (e = e.trim(), !hr.test(e)) throw new Error("string is no integer");
                  let [t, n, i] = ve(e);
                  if (t) {
                      if (i > Te || i == Te && n != 0) throw new Error("signed long too small")
                  } else if (i >= Te) throw new Error("signed long too large");
                  let r = new I(n, i);
                  return t ? r.negate() : r;
              case "number":
                  if (e == 0) return this.ZERO;
                  if (!Number.isSafeInteger(e)) throw new Error("number is no integer");
                  return e > 0 ? new I(e, e / Ne) : new I(-e, -e / Ne).negate()
          }
          throw new Error("unknown value " + typeof e)
      }
      isNegative() {
          return (this.hi & Te) !== 0
      }
      negate() {
          let e = ~this.hi,
              t = this.lo;
          return t ? t = ~t + 1 : e += 1, new I(t, e)
      }
      toString() {
          if (N) return this.toBigInt().toString();
          if (this.isNegative()) {
              let e = this.negate();
              return "-" + Ie(e.lo, e.hi)
          }
          return Ie(this.lo, this.hi)
      }
      toBigInt() {
          return pr(N), N.V.setInt32(0, this.lo, !0), N.V.setInt32(4, this.hi, !0), N.V.getBigInt64(0, !0)
      }
  };
  I.ZERO = new I(0, 0);
  var yr = {
      readUnknownField: !0,
      readerFactory: l => new Ke(l)
  };

  function mr(l) {
      return l ? Object.assign(Object.assign({}, yr), l) : yr
  }
  var Ke = class {
      constructor(e, t) {
          this.varint64 = ur, this.uint32 = fr, this.buf = e, this.len = e.length, this.pos = 0, this.view = new DataView(e.buffer, e.byteOffset, e.byteLength), this.textDecoder = t ?? new TextDecoder("utf-8", {
              fatal: !0,
              ignoreBOM: !0
          })
      }
      tag() {
          let e = this.uint32(),
              t = e >>> 3,
              n = e & 7;
          if (t <= 0 || n < 0 || n > 5) throw new Error("illegal tag: field no " + t + " wire type " + n);
          return [t, n]
      }
      skip(e) {
          let t = this.pos;
          switch (e) {
              case u.Varint:
                  for (; this.buf[this.pos++] & 128;);
                  break;
              case u.Bit64:
                  this.pos += 4;
              case u.Bit32:
                  this.pos += 4;
                  break;
              case u.LengthDelimited:
                  let n = this.uint32();
                  this.pos += n;
                  break;
              case u.StartGroup:
                  let i;
                  for (;
                      (i = this.tag()[1]) !== u.EndGroup;) this.skip(i);
                  break;
              default:
                  throw new Error("cant skip wire type " + e)
          }
          return this.assertBounds(), this.buf.subarray(t, this.pos)
      }
      assertBounds() {
          if (this.pos > this.len) throw new RangeError("premature EOF")
      }
      int32() {
          return this.uint32() | 0
      }
      sint32() {
          let e = this.uint32();
          return e >>> 1 ^ -(e & 1)
      }
      int64() {
          return new I(...this.varint64())
      }
      uint64() {
          return new O(...this.varint64())
      }
      sint64() {
          let [e, t] = this.varint64(), n = -(e & 1);
          return e = (e >>> 1 | (t & 1) << 31) ^ n, t = t >>> 1 ^ n, new I(e, t)
      }
      bool() {
          let [e, t] = this.varint64();
          return e !== 0 || t !== 0
      }
      fixed32() {
          return this.view.getUint32((this.pos += 4) - 4, !0)
      }
      sfixed32() {
          return this.view.getInt32((this.pos += 4) - 4, !0)
      }
      fixed64() {
          return new O(this.sfixed32(), this.sfixed32())
      }
      sfixed64() {
          return new I(this.sfixed32(), this.sfixed32())
      }
      float() {
          return this.view.getFloat32((this.pos += 4) - 4, !0)
      }
      double() {
          return this.view.getFloat64((this.pos += 8) - 8, !0)
      }
      bytes() {
          let e = this.uint32(),
              t = this.pos;
          return this.pos += e, this.assertBounds(), this.buf.subarray(t, t + e)
      }
      string() {
          return this.textDecoder.decode(this.bytes())
      }
  };

  function R(l, e) {
      if (!l) throw new Error(e)
  }
  var Vr = 34028234663852886e22,
      vr = -34028234663852886e22,
      Gr = 4294967295,
      Kr = 2147483647,
      Jr = -2147483648;

  function K(l) {
      if (typeof l != "number") throw new Error("invalid int 32: " + typeof l);
      if (!Number.isInteger(l) || l > Kr || l < Jr) throw new Error("invalid int 32: " + l)
  }

  function X(l) {
      if (typeof l != "number") throw new Error("invalid uint 32: " + typeof l);
      if (!Number.isInteger(l) || l > Gr || l < 0) throw new Error("invalid uint 32: " + l)
  }

  function z(l) {
      if (typeof l != "number") throw new Error("invalid float 32: " + typeof l);
      if (Number.isFinite(l) && (l > Vr || l < vr)) throw new Error("invalid float 32: " + l)
  }
  var gr = {
      writeUnknownFields: !0,
      writerFactory: () => new Je
  };

  function br(l) {
      return l ? Object.assign(Object
