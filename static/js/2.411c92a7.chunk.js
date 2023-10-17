/*! For license information please see 2.411c92a7.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-chat"] = this["webpackJsonpreact-chat"] || []).push([
	[2],
	[function(t, e, n) {
		"use strict";
		n.r(e), n.d(e, "__extends", (function() {
			return i
		})), n.d(e, "__assign", (function() {
			return o
		})), n.d(e, "__rest", (function() {
			return a
		})), n.d(e, "__decorate", (function() {
			return u
		})), n.d(e, "__param", (function() {
			return s
		})), n.d(e, "__metadata", (function() {
			return c
		})), n.d(e, "__awaiter", (function() {
			return l
		})), n.d(e, "__generator", (function() {
			return f
		})), n.d(e, "__createBinding", (function() {
			return h
		})), n.d(e, "__exportStar", (function() {
			return p
		})), n.d(e, "__values", (function() {
			return d
		})), n.d(e, "__read", (function() {
			return v
		})), n.d(e, "__spread", (function() {
			return m
		})), n.d(e, "__spreadArrays", (function() {
			return y
		})), n.d(e, "__await", (function() {
			return g
		})), n.d(e, "__asyncGenerator", (function() {
			return b
		})), n.d(e, "__asyncDelegator", (function() {
			return w
		})), n.d(e, "__asyncValues", (function() {
			return _
		})), n.d(e, "__makeTemplateObject", (function() {
			return E
		})), n.d(e, "__importStar", (function() {
			return I
		})), n.d(e, "__importDefault", (function() {
			return T
		})), n.d(e, "__classPrivateFieldGet", (function() {
			return S
		})), n.d(e, "__classPrivateFieldSet", (function() {
			return k
		}));
		var r = function(t, e) {
			return (r = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(t, e) {
					t.__proto__ = e
				} || function(t, e) {
					for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
				})(t, e)
		};

		function i(t, e) {
			function n() {
				this.constructor = t
			}
			r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
		}
		var o = function() {
			return (o = Object.assign || function(t) {
				for (var e, n = 1, r = arguments.length; n < r; n++)
					for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
				return t
			}).apply(this, arguments)
		};

		function a(t, e) {
			var n = {};
			for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
			if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
				var i = 0;
				for (r = Object.getOwnPropertySymbols(t); i < r.length; i++) e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]])
			}
			return n
		}

		function u(t, e, n, r) {
			var i, o = arguments.length,
				a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
			if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r);
			else
				for (var u = t.length - 1; u >= 0; u--)(i = t[u]) && (a = (o < 3 ? i(a) : o > 3 ? i(e, n, a) : i(e, n)) || a);
			return o > 3 && a && Object.defineProperty(e, n, a), a
		}

		function s(t, e) {
			return function(n, r) {
				e(n, r, t)
			}
		}

		function c(t, e) {
			if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(t, e)
		}

		function l(t, e, n, r) {
			return new(n || (n = Promise))((function(i, o) {
				function a(t) {
					try {
						s(r.next(t))
					} catch (e) {
						o(e)
					}
				}

				function u(t) {
					try {
						s(r.throw(t))
					} catch (e) {
						o(e)
					}
				}

				function s(t) {
					var e;
					t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
						t(e)
					}))).then(a, u)
				}
				s((r = r.apply(t, e || [])).next())
			}))
		}

		function f(t, e) {
			var n, r, i, o, a = {
				label: 0,
				sent: function() {
					if (1 & i[0]) throw i[1];
					return i[1]
				},
				trys: [],
				ops: []
			};
			return o = {
				next: u(0),
				throw: u(1),
				return: u(2)
			}, "function" === typeof Symbol && (o[Symbol.iterator] = function() {
				return this
			}), o;

			function u(o) {
				return function(u) {
					return function(o) {
						if (n) throw new TypeError("Generator is already executing.");
						for (; a;) try {
							if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
							switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
								case 0:
								case 1:
									i = o;
									break;
								case 4:
									return a.label++, {
										value: o[1],
										done: !1
									};
								case 5:
									a.label++, r = o[1], o = [0];
									continue;
								case 7:
									o = a.ops.pop(), a.trys.pop();
									continue;
								default:
									if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
										a = 0;
										continue
									}
									if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
										a.label = o[1];
										break
									}
									if (6 === o[0] && a.label < i[1]) {
										a.label = i[1], i = o;
										break
									}
									if (i && a.label < i[2]) {
										a.label = i[2], a.ops.push(o);
										break
									}
									i[2] && a.ops.pop(), a.trys.pop();
									continue
							}
							o = e.call(t, a)
						} catch (u) {
							o = [6, u], r = 0
						} finally {
							n = i = 0
						}
						if (5 & o[0]) throw o[1];
						return {
							value: o[0] ? o[1] : void 0,
							done: !0
						}
					}([o, u])
				}
			}
		}

		function h(t, e, n, r) {
			void 0 === r && (r = n), t[r] = e[n]
		}

		function p(t, e) {
			for (var n in t) "default" === n || e.hasOwnProperty(n) || (e[n] = t[n])
		}

		function d(t) {
			var e = "function" === typeof Symbol && Symbol.iterator,
				n = e && t[e],
				r = 0;
			if (n) return n.call(t);
			if (t && "number" === typeof t.length) return {
				next: function() {
					return t && r >= t.length && (t = void 0), {
						value: t && t[r++],
						done: !t
					}
				}
			};
			throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
		}

		function v(t, e) {
			var n = "function" === typeof Symbol && t[Symbol.iterator];
			if (!n) return t;
			var r, i, o = n.call(t),
				a = [];
			try {
				for (;
					(void 0 === e || e-- > 0) && !(r = o.next()).done;) a.push(r.value)
			} catch (u) {
				i = {
					error: u
				}
			} finally {
				try {
					r && !r.done && (n = o.return) && n.call(o)
				} finally {
					if (i) throw i.error
				}
			}
			return a
		}

		function m() {
			for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(v(arguments[e]));
			return t
		}

		function y() {
			for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
			var r = Array(t),
				i = 0;
			for (e = 0; e < n; e++)
				for (var o = arguments[e], a = 0, u = o.length; a < u; a++, i++) r[i] = o[a];
			return r
		}

		function g(t) {
			return this instanceof g ? (this.v = t, this) : new g(t)
		}

		function b(t, e, n) {
			if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
			var r, i = n.apply(t, e || []),
				o = [];
			return r = {}, a("next"), a("throw"), a("return"), r[Symbol.asyncIterator] = function() {
				return this
			}, r;

			function a(t) {
				i[t] && (r[t] = function(e) {
					return new Promise((function(n, r) {
						o.push([t, e, n, r]) > 1 || u(t, e)
					}))
				})
			}

			function u(t, e) {
				try {
					(n = i[t](e)).value instanceof g ? Promise.resolve(n.value.v).then(s, c) : l(o[0][2], n)
				} catch (r) {
					l(o[0][3], r)
				}
				var n
			}

			function s(t) {
				u("next", t)
			}

			function c(t) {
				u("throw", t)
			}

			function l(t, e) {
				t(e), o.shift(), o.length && u(o[0][0], o[0][1])
			}
		}

		function w(t) {
			var e, n;
			return e = {}, r("next"), r("throw", (function(t) {
				throw t
			})), r("return"), e[Symbol.iterator] = function() {
				return this
			}, e;

			function r(r, i) {
				e[r] = t[r] ? function(e) {
					return (n = !n) ? {
						value: g(t[r](e)),
						done: "return" === r
					} : i ? i(e) : e
				} : i
			}
		}

		function _(t) {
			if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
			var e, n = t[Symbol.asyncIterator];
			return n ? n.call(t) : (t = d(t), e = {}, r("next"), r("throw"), r("return"), e[Symbol.asyncIterator] = function() {
				return this
			}, e);

			function r(n) {
				e[n] = t[n] && function(e) {
					return new Promise((function(r, i) {
						(function(t, e, n, r) {
							Promise.resolve(r).then((function(e) {
								t({
									value: e,
									done: n
								})
							}), e)
						})(r, i, (e = t[n](e)).done, e.value)
					}))
				}
			}
		}

		function E(t, e) {
			return Object.defineProperty ? Object.defineProperty(t, "raw", {
				value: e
			}) : t.raw = e, t
		}

		function I(t) {
			if (t && t.__esModule) return t;
			var e = {};
			if (null != t)
				for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
			return e.default = t, e
		}

		function T(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function S(t, e) {
			if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
			return e.get(t)
		}

		function k(t, e, n) {
			if (!e.has(t)) throw new TypeError("attempted to set private field on non-instance");
			return e.set(t, n), n
		}
	}, function(t, e, n) {
		"use strict";
		t.exports = n(17)
	}, function(t, e, n) {
		"use strict";
		(function(t) {
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var r = n(0),
				i = {
					NODE_CLIENT: !1,
					NODE_ADMIN: !1,
					SDK_VERSION: "${JSCORE_VERSION}"
				},
				o = function(t, e) {
					if (!t) throw a(e)
				},
				a = function(t) {
					return new Error("Firebase Database (" + i.SDK_VERSION + ") INTERNAL ASSERT FAILED: " + t)
				},
				u = function(t) {
					for (var e = [], n = 0, r = 0; r < t.length; r++) {
						var i = t.charCodeAt(r);
						i < 128 ? e[n++] = i : i < 2048 ? (e[n++] = i >> 6 | 192, e[n++] = 63 & i | 128) : 55296 === (64512 & i) && r + 1 < t.length && 56320 === (64512 & t.charCodeAt(r + 1)) ? (i = 65536 + ((1023 & i) << 10) + (1023 & t.charCodeAt(++r)), e[n++] = i >> 18 | 240, e[n++] = i >> 12 & 63 | 128, e[n++] = i >> 6 & 63 | 128, e[n++] = 63 & i | 128) : (e[n++] = i >> 12 | 224, e[n++] = i >> 6 & 63 | 128, e[n++] = 63 & i | 128)
					}
					return e
				},
				s = {
					byteToCharMap_: null,
					charToByteMap_: null,
					byteToCharMapWebSafe_: null,
					charToByteMapWebSafe_: null,
					ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
					get ENCODED_VALS() {
						return this.ENCODED_VALS_BASE + "+/="
					},
					get ENCODED_VALS_WEBSAFE() {
						return this.ENCODED_VALS_BASE + "-_."
					},
					HAS_NATIVE_SUPPORT: "function" === typeof atob,
					encodeByteArray: function(t, e) {
						if (!Array.isArray(t)) throw Error("encodeByteArray takes an array as a parameter");
						this.init_();
						for (var n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, r = [], i = 0; i < t.length; i += 3) {
							var o = t[i],
								a = i + 1 < t.length,
								u = a ? t[i + 1] : 0,
								s = i + 2 < t.length,
								c = s ? t[i + 2] : 0,
								l = o >> 2,
								f = (3 & o) << 4 | u >> 4,
								h = (15 & u) << 2 | c >> 6,
								p = 63 & c;
							s || (p = 64, a || (h = 64)), r.push(n[l], n[f], n[h], n[p])
						}
						return r.join("")
					},
					encodeString: function(t, e) {
						return this.HAS_NATIVE_SUPPORT && !e ? btoa(t) : this.encodeByteArray(u(t), e)
					},
					decodeString: function(t, e) {
						return this.HAS_NATIVE_SUPPORT && !e ? atob(t) : function(t) {
							for (var e = [], n = 0, r = 0; n < t.length;) {
								var i = t[n++];
								if (i < 128) e[r++] = String.fromCharCode(i);
								else if (i > 191 && i < 224) {
									var o = t[n++];
									e[r++] = String.fromCharCode((31 & i) << 6 | 63 & o)
								} else if (i > 239 && i < 365) {
									var a = ((7 & i) << 18 | (63 & (o = t[n++])) << 12 | (63 & (u = t[n++])) << 6 | 63 & t[n++]) - 65536;
									e[r++] = String.fromCharCode(55296 + (a >> 10)), e[r++] = String.fromCharCode(56320 + (1023 & a))
								} else {
									o = t[n++];
									var u = t[n++];
									e[r++] = String.fromCharCode((15 & i) << 12 | (63 & o) << 6 | 63 & u)
								}
							}
							return e.join("")
						}(this.decodeStringToByteArray(t, e))
					},
					decodeStringToByteArray: function(t, e) {
						this.init_();
						for (var n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_, r = [], i = 0; i < t.length;) {
							var o = n[t.charAt(i++)],
								a = i < t.length ? n[t.charAt(i)] : 0,
								u = ++i < t.length ? n[t.charAt(i)] : 64,
								s = ++i < t.length ? n[t.charAt(i)] : 64;
							if (++i, null == o || null == a || null == u || null == s) throw Error();
							var c = o << 2 | a >> 4;
							if (r.push(c), 64 !== u) {
								var l = a << 4 & 240 | u >> 2;
								if (r.push(l), 64 !== s) {
									var f = u << 6 & 192 | s;
									r.push(f)
								}
							}
						}
						return r
					},
					init_: function() {
						if (!this.byteToCharMap_) {
							this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
							for (var t = 0; t < this.ENCODED_VALS.length; t++) this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t), this.charToByteMap_[this.byteToCharMap_[t]] = t, this.byteToCharMapWebSafe_[t] = this.ENCODED_VALS_WEBSAFE.charAt(t), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t, t >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t)
						}
					}
				},
				c = function(t) {
					try {
						return s.decodeString(t, !0)
					} catch (e) {
						console.error("base64Decode failed: ", e)
					}
					return null
				};

			function l(t, e) {
				if (!(e instanceof Object)) return e;
				switch (e.constructor) {
					case Date:
						return new Date(e.getTime());
					case Object:
						void 0 === t && (t = {});
						break;
					case Array:
						t = [];
						break;
					default:
						return e
				}
				for (var n in e) e.hasOwnProperty(n) && (t[n] = l(t[n], e[n]));
				return t
			}
			var f = function() {
				function t() {
					var t = this;
					this.reject = function() {}, this.resolve = function() {}, this.promise = new Promise((function(e, n) {
						t.resolve = e, t.reject = n
					}))
				}
				return t.prototype.wrapCallback = function(t) {
					var e = this;
					return function(n, r) {
						n ? e.reject(n) : e.resolve(r), "function" === typeof t && (e.promise.catch((function() {})), 1 === t.length ? t(n) : t(n, r))
					}
				}, t
			}();

			function h() {
				return "undefined" !== typeof navigator && "string" === typeof navigator.userAgent ? navigator.userAgent : ""
			}

			function p() {
				try {
					return "[object process]" === Object.prototype.toString.call(t.process)
				} catch (e) {
					return !1
				}
			}
			var d = function(t) {
					function e(n, r) {
						var i = t.call(this, r) || this;
						return i.code = n, i.name = "FirebaseError", Object.setPrototypeOf(i, e.prototype), Error.captureStackTrace && Error.captureStackTrace(i, v.prototype.create), i
					}
					return r.__extends(e, t), e
				}(Error),
				v = function() {
					function t(t, e, n) {
						this.service = t, this.serviceName = e, this.errors = n
					}
					return t.prototype.create = function(t) {
						for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
						for (var r = e[0] || {}, i = this.service + "/" + t, o = this.errors[t], a = o ? m(o, r) : "Error", u = this.serviceName + ": " + a + " (" + i + ").", s = new d(i, u), c = 0, l = Object.keys(r); c < l.length; c++) {
							var f = l[c];
							"_" !== f.slice(-1) && (f in s && console.warn('Overwriting FirebaseError base field "' + f + '" can cause unexpected behavior.'), s[f] = r[f])
						}
						return s
					}, t
				}();

			function m(t, e) {
				return t.replace(y, (function(t, n) {
					var r = e[n];
					return null != r ? String(r) : "<" + n + "?>"
				}))
			}
			var y = /\{\$([^}]+)}/g;

			function g(t) {
				return JSON.parse(t)
			}
			var b = function(t) {
				var e = {},
					n = {},
					r = {},
					i = "";
				try {
					var o = t.split(".");
					e = g(c(o[0]) || ""), n = g(c(o[1]) || ""), i = o[2], r = n.d || {}, delete n.d
				} catch (a) {}
				return {
					header: e,
					claims: n,
					data: r,
					signature: i
				}
			};
			var w = function() {
				function t() {
					this.chain_ = [], this.buf_ = [], this.W_ = [], this.pad_ = [], this.inbuf_ = 0, this.total_ = 0, this.blockSize = 64, this.pad_[0] = 128;
					for (var t = 1; t < this.blockSize; ++t) this.pad_[t] = 0;
					this.reset()
				}
				return t.prototype.reset = function() {
					this.chain_[0] = 1732584193, this.chain_[1] = 4023233417, this.chain_[2] = 2562383102, this.chain_[3] = 271733878, this.chain_[4] = 3285377520, this.inbuf_ = 0, this.total_ = 0
				}, t.prototype.compress_ = function(t, e) {
					e || (e = 0);
					var n = this.W_;
					if ("string" === typeof t)
						for (var r = 0; r < 16; r++) n[r] = t.charCodeAt(e) << 24 | t.charCodeAt(e + 1) << 16 | t.charCodeAt(e + 2) << 8 | t.charCodeAt(e + 3), e += 4;
					else
						for (r = 0; r < 16; r++) n[r] = t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3], e += 4;
					for (r = 16; r < 80; r++) {
						var i = n[r - 3] ^ n[r - 8] ^ n[r - 14] ^ n[r - 16];
						n[r] = 4294967295 & (i << 1 | i >>> 31)
					}
					var o, a, u = this.chain_[0],
						s = this.chain_[1],
						c = this.chain_[2],
						l = this.chain_[3],
						f = this.chain_[4];
					for (r = 0; r < 80; r++) {
						r < 40 ? r < 20 ? (o = l ^ s & (c ^ l), a = 1518500249) : (o = s ^ c ^ l, a = 1859775393) : r < 60 ? (o = s & c | l & (s | c), a = 2400959708) : (o = s ^ c ^ l, a = 3395469782);
						i = (u << 5 | u >>> 27) + o + f + a + n[r] & 4294967295;
						f = l, l = c, c = 4294967295 & (s << 30 | s >>> 2), s = u, u = i
					}
					this.chain_[0] = this.chain_[0] + u & 4294967295, this.chain_[1] = this.chain_[1] + s & 4294967295, this.chain_[2] = this.chain_[2] + c & 4294967295, this.chain_[3] = this.chain_[3] + l & 4294967295, this.chain_[4] = this.chain_[4] + f & 4294967295
				}, t.prototype.update = function(t, e) {
					if (null != t) {
						void 0 === e && (e = t.length);
						for (var n = e - this.blockSize, r = 0, i = this.buf_, o = this.inbuf_; r < e;) {
							if (0 === o)
								for (; r <= n;) this.compress_(t, r), r += this.blockSize;
							if ("string" === typeof t) {
								for (; r < e;)
									if (i[o] = t.charCodeAt(r), ++r, ++o === this.blockSize) {
										this.compress_(i), o = 0;
										break
									}
							} else
								for (; r < e;)
									if (i[o] = t[r], ++r, ++o === this.blockSize) {
										this.compress_(i), o = 0;
										break
									}
						}
						this.inbuf_ = o, this.total_ += e
					}
				}, t.prototype.digest = function() {
					var t = [],
						e = 8 * this.total_;
					this.inbuf_ < 56 ? this.update(this.pad_, 56 - this.inbuf_) : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
					for (var n = this.blockSize - 1; n >= 56; n--) this.buf_[n] = 255 & e, e /= 256;
					this.compress_(this.buf_);
					var r = 0;
					for (n = 0; n < 5; n++)
						for (var i = 24; i >= 0; i -= 8) t[r] = this.chain_[n] >> i & 255, ++r;
					return t
				}, t
			}();
			var _ = function() {
				function t(t, e) {
					var n = this;
					this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = e, this.task.then((function() {
						t(n)
					})).catch((function(t) {
						n.error(t)
					}))
				}
				return t.prototype.next = function(t) {
					this.forEachObserver((function(e) {
						e.next(t)
					}))
				}, t.prototype.error = function(t) {
					this.forEachObserver((function(e) {
						e.error(t)
					})), this.close(t)
				}, t.prototype.complete = function() {
					this.forEachObserver((function(t) {
						t.complete()
					})), this.close()
				}, t.prototype.subscribe = function(t, e, n) {
					var r, i = this;
					if (void 0 === t && void 0 === e && void 0 === n) throw new Error("Missing Observer.");
					void 0 === (r = function(t, e) {
						if ("object" !== typeof t || null === t) return !1;
						for (var n = 0, r = e; n < r.length; n++) {
							var i = r[n];
							if (i in t && "function" === typeof t[i]) return !0
						}
						return !1
					}(t, ["next", "error", "complete"]) ? t : {
						next: t,
						error: e,
						complete: n
					}).next && (r.next = E), void 0 === r.error && (r.error = E), void 0 === r.complete && (r.complete = E);
					var o = this.unsubscribeOne.bind(this, this.observers.length);
					return this.finalized && this.task.then((function() {
						try {
							i.finalError ? r.error(i.finalError) : r.complete()
						} catch (t) {}
					})), this.observers.push(r), o
				}, t.prototype.unsubscribeOne = function(t) {
					void 0 !== this.observers && void 0 !== this.observers[t] && (delete this.observers[t], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
				}, t.prototype.forEachObserver = function(t) {
					if (!this.finalized)
						for (var e = 0; e < this.observers.length; e++) this.sendOne(e, t)
				}, t.prototype.sendOne = function(t, e) {
					var n = this;
					this.task.then((function() {
						if (void 0 !== n.observers && void 0 !== n.observers[t]) try {
							e(n.observers[t])
						} catch (r) {
							"undefined" !== typeof console && console.error && console.error(r)
						}
					}))
				}, t.prototype.close = function(t) {
					var e = this;
					this.finalized || (this.finalized = !0, void 0 !== t && (this.finalError = t), this.task.then((function() {
						e.observers = void 0, e.onNoObservers = void 0
					})))
				}, t
			}();

			function E() {}

			function I(t, e, n) {
				var r = "";
				switch (e) {
					case 1:
						r = n ? "first" : "First";
						break;
					case 2:
						r = n ? "second" : "Second";
						break;
					case 3:
						r = n ? "third" : "Third";
						break;
					case 4:
						r = n ? "fourth" : "Fourth";
						break;
					default:
						throw new Error("errorPrefix called with argumentNumber > 4.  Need to update it?")
				}
				var i = t + " failed: ";
				return i += r + " argument "
			}
			e.CONSTANTS = i, e.Deferred = f, e.ErrorFactory = v, e.FirebaseError = d, e.MAX_VALUE_MILLIS = 144e5, e.RANDOM_FACTOR = .5, e.Sha1 = w, e.areCookiesEnabled = function() {
				return !(!navigator || !navigator.cookieEnabled)
			}, e.assert = o, e.assertionError = a, e.async = function(t, e) {
				return function() {
					for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
					Promise.resolve(!0).then((function() {
						t.apply(void 0, n)
					})).catch((function(t) {
						e && e(t)
					}))
				}
			}, e.base64 = s, e.base64Decode = c, e.base64Encode = function(t) {
				var e = u(t);
				return s.encodeByteArray(e, !0)
			}, e.calculateBackoffMillis = function(t, e, n) {
				void 0 === e && (e = 1e3), void 0 === n && (n = 2);
				var r = e * Math.pow(n, t),
					i = Math.round(.5 * r * (Math.random() - .5) * 2);
				return Math.min(144e5, r + i)
			}, e.contains = function(t, e) {
				return Object.prototype.hasOwnProperty.call(t, e)
			}, e.createSubscribe = function(t, e) {
				var n = new _(t, e);
				return n.subscribe.bind(n)
			}, e.decode = b, e.deepCopy = function(t) {
				return l(void 0, t)
			}, e.deepExtend = l, e.errorPrefix = I, e.getUA = h, e.isAdmin = function(t) {
				var e = b(t).claims;
				return "object" === typeof e && !0 === e.admin
			}, e.isBrowser = function() {
				return "object" === typeof self && self.self === self
			}, e.isBrowserExtension = function() {
				var t = "object" === typeof chrome ? chrome.runtime : "object" === typeof browser ? browser.runtime : void 0;
				return "object" === typeof t && void 0 !== t.id
			}, e.isElectron = function() {
				return h().indexOf("Electron/") >= 0
			}, e.isEmpty = function(t) {
				for (var e in t)
					if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
				return !0
			}, e.isIE = function() {
				var t = h();
				return t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0
			}, e.isIndexedDBAvailable = function() {
				return "indexedDB" in self && null != indexedDB
			}, e.isMobileCordova = function() {
				return "undefined" !== typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(h())
			}, e.isNode = p, e.isNodeSdk = function() {
				return !0 === i.NODE_CLIENT || !0 === i.NODE_ADMIN
			}, e.isReactNative = function() {
				return "object" === typeof navigator && "ReactNative" === navigator.product
			}, e.isSafari = function() {
				return !p() && navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome")
			}, e.isUWP = function() {
				return h().indexOf("MSAppHost/") >= 0
			}, e.isValidFormat = function(t) {
				var e = b(t).claims;
				return !!e && "object" === typeof e && e.hasOwnProperty("iat")
			}, e.isValidTimestamp = function(t) {
				var e = b(t).claims,
					n = Math.floor((new Date).getTime() / 1e3),
					r = 0,
					i = 0;
				return "object" === typeof e && (e.hasOwnProperty("nbf") ? r = e.nbf : e.hasOwnProperty("iat") && (r = e.iat), i = e.hasOwnProperty("exp") ? e.exp : r + 86400), !!n && !!r && !!i && n >= r && n <= i
			}, e.issuedAtTime = function(t) {
				var e = b(t).claims;
				return "object" === typeof e && e.hasOwnProperty("iat") ? e.iat : null
			}, e.jsonEval = g, e.map = function(t, e, n) {
				var r = {};
				for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[i] = e.call(n, t[i], i, t));
				return r
			}, e.querystring = function(t) {
				for (var e = [], n = function(t, n) {
						Array.isArray(n) ? n.forEach((function(n) {
							e.push(encodeURIComponent(t) + "=" + encodeURIComponent(n))
						})) : e.push(encodeURIComponent(t) + "=" + encodeURIComponent(n))
					}, r = 0, i = Object.entries(t); r < i.length; r++) {
					var o = i[r];
					n(o[0], o[1])
				}
				return e.length ? "&" + e.join("&") : ""
			}, e.querystringDecode = function(t) {
				var e = {};
				return t.replace(/^\?/, "").split("&").forEach((function(t) {
					if (t) {
						var n = t.split("=");
						e[n[0]] = n[1]
					}
				})), e
			}, e.safeGet = function(t, e) {
				return Object.prototype.hasOwnProperty.call(t, e) ? t[e] : void 0
			}, e.stringLength = function(t) {
				for (var e = 0, n = 0; n < t.length; n++) {
					var r = t.charCodeAt(n);
					r < 128 ? e++ : r < 2048 ? e += 2 : r >= 55296 && r <= 56319 ? (e += 4, n++) : e += 3
				}
				return e
			}, e.stringToByteArray = function(t) {
				for (var e = [], n = 0, r = 0; r < t.length; r++) {
					var i = t.charCodeAt(r);
					if (i >= 55296 && i <= 56319) {
						var a = i - 55296;
						r++, o(r < t.length, "Surrogate pair missing trail surrogate."), i = 65536 + (a << 10) + (t.charCodeAt(r) - 56320)
					}
					i < 128 ? e[n++] = i : i < 2048 ? (e[n++] = i >> 6 | 192, e[n++] = 63 & i | 128) : i < 65536 ? (e[n++] = i >> 12 | 224, e[n++] = i >> 6 & 63 | 128, e[n++] = 63 & i | 128) : (e[n++] = i >> 18 | 240, e[n++] = i >> 12 & 63 | 128, e[n++] = i >> 6 & 63 | 128, e[n++] = 63 & i | 128)
				}
				return e
			}, e.stringify = function(t) {
				return JSON.stringify(t)
			}, e.validateArgCount = function(t, e, n, r) {
				var i;
				if (r < e ? i = "at least " + e : r > n && (i = 0 === n ? "none" : "no more than " + n), i) throw new Error(t + " failed: Was called with " + r + (1 === r ? " argument." : " arguments.") + " Expects " + i + ".")
			}, e.validateCallback = function(t, e, n, r) {
				if ((!r || n) && "function" !== typeof n) throw new Error(I(t, e, r) + "must be a valid function.")
			}, e.validateContextObject = function(t, e, n, r) {
				if ((!r || n) && ("object" !== typeof n || null === n)) throw new Error(I(t, e, r) + "must be a valid context object.")
			}, e.validateIndexedDBOpenable = function() {
				return new Promise((function(t, e) {
					try {
						var n = !0,
							r = "validate-browser-context-for-indexeddb-analytics-module",
							i = window.indexedDB.open(r);
						i.onsuccess = function() {
							i.result.close(), n || window.indexedDB.deleteDatabase(r), t(!0)
						}, i.onupgradeneeded = function() {
							n = !1
						}, i.onerror = function() {
							var t;
							e((null === (t = i.error) || void 0 === t ? void 0 : t.message) || "")
						}
					} catch (o) {
						e(o)
					}
				}))
			}, e.validateNamespace = function(t, e, n, r) {
				if ((!r || n) && "string" !== typeof n) throw new Error(I(t, e, r) + "must be a valid firebase namespace.")
			}
		}).call(this, n(8))
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r, i, o = n(0),
			a = n(2),
			u = n(4),
			s = n(6),
			c = ((r = {})["no-app"] = "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()", r["bad-app-name"] = "Illegal App name: '{$appName}", r["duplicate-app"] = "Firebase App named '{$appName}' already exists", r["app-deleted"] = "Firebase App named '{$appName}' already deleted", r["invalid-app-argument"] = "firebase.{$appName}() takes either no argument or a Firebase App instance.", r["invalid-log-argument"] = "First argument to `onLog` must be null or a function.", r),
			l = new a.ErrorFactory("app", "Firebase", c),
			f = ((i = {})["@firebase/app"] = "fire-core", i["@firebase/analytics"] = "fire-analytics", i["@firebase/auth"] = "fire-auth", i["@firebase/database"] = "fire-rtdb", i["@firebase/functions"] = "fire-fn", i["@firebase/installations"] = "fire-iid", i["@firebase/messaging"] = "fire-fcm", i["@firebase/performance"] = "fire-perf", i["@firebase/remote-config"] = "fire-rc", i["@firebase/storage"] = "fire-gcs", i["@firebase/firestore"] = "fire-fst", i["fire-js"] = "fire-js", i["firebase-wrapper"] = "fire-js-all", i),
			h = new s.Logger("@firebase/app"),
			p = function() {
				function t(t, e, n) {
					var r, i, s = this;
					this.firebase_ = n, this.isDeleted_ = !1, this.name_ = e.name, this.automaticDataCollectionEnabled_ = e.automaticDataCollectionEnabled || !1, this.options_ = a.deepCopy(t), this.container = new u.ComponentContainer(e.name), this._addComponent(new u.Component("app", (function() {
						return s
					}), "PUBLIC"));
					try {
						for (var c = o.__values(this.firebase_.INTERNAL.components.values()), l = c.next(); !l.done; l = c.next()) {
							var f = l.value;
							this._addComponent(f)
						}
					} catch (h) {
						r = {
							error: h
						}
					} finally {
						try {
							l && !l.done && (i = c.return) && i.call(c)
						} finally {
							if (r) throw r.error
						}
					}
				}
				return Object.defineProperty(t.prototype, "automaticDataCollectionEnabled", {
					get: function() {
						return this.checkDestroyed_(), this.automaticDataCollectionEnabled_
					},
					set: function(t) {
						this.checkDestroyed_(), this.automaticDataCollectionEnabled_ = t
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "name", {
					get: function() {
						return this.checkDestroyed_(), this.name_
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "options", {
					get: function() {
						return this.checkDestroyed_(), this.options_
					},
					enumerable: !1,
					configurable: !0
				}), t.prototype.delete = function() {
					var t = this;
					return new Promise((function(e) {
						t.checkDestroyed_(), e()
					})).then((function() {
						return t.firebase_.INTERNAL.removeApp(t.name_), Promise.all(t.container.getProviders().map((function(t) {
							return t.delete()
						})))
					})).then((function() {
						t.isDeleted_ = !0
					}))
				}, t.prototype._getService = function(t, e) {
					return void 0 === e && (e = "[DEFAULT]"), this.checkDestroyed_(), this.container.getProvider(t).getImmediate({
						identifier: e
					})
				}, t.prototype._removeServiceInstance = function(t, e) {
					void 0 === e && (e = "[DEFAULT]"), this.container.getProvider(t).clearInstance(e)
				}, t.prototype._addComponent = function(t) {
					try {
						this.container.addComponent(t)
					} catch (e) {
						h.debug("Component " + t.name + " failed to register with FirebaseApp " + this.name, e)
					}
				}, t.prototype._addOrOverwriteComponent = function(t) {
					this.container.addOrOverwriteComponent(t)
				}, t.prototype.checkDestroyed_ = function() {
					if (this.isDeleted_) throw l.create("app-deleted", {
						appName: this.name_
					})
				}, t
			}();
		p.prototype.name && p.prototype.options || p.prototype.delete || console.log("dc");
		var d = function t() {
				var e = function(t) {
					var e = {},
						n = new Map,
						r = {
							__esModule: !0,
							initializeApp: function(n, i) {
								void 0 === i && (i = {});
								if ("object" !== typeof i || null === i) {
									i = {
										name: i
									}
								}
								var o = i;
								void 0 === o.name && (o.name = "[DEFAULT]");
								var u = o.name;
								if ("string" !== typeof u || !u) throw l.create("bad-app-name", {
									appName: String(u)
								});
								if (a.contains(e, u)) throw l.create("duplicate-app", {
									appName: u
								});
								var s = new t(n, o, r);
								return e[u] = s, s
							},
							app: i,
							registerVersion: function(t, e, n) {
								var r, i = null !== (r = f[t]) && void 0 !== r ? r : t;
								n && (i += "-" + n);
								var o = i.match(/\s|\//),
									a = e.match(/\s|\//);
								if (o || a) {
									var s = ['Unable to register library "' + i + '" with version "' + e + '":'];
									return o && s.push('library name "' + i + '" contains illegal characters (whitespace or "/")'), o && a && s.push("and"), a && s.push('version name "' + e + '" contains illegal characters (whitespace or "/")'), void h.warn(s.join(" "))
								}
								c(new u.Component(i + "-version", (function() {
									return {
										library: i,
										version: e
									}
								}), "VERSION"))
							},
							setLogLevel: s.setLogLevel,
							onLog: function(t, e) {
								if (null !== t && "function" !== typeof t) throw l.create("invalid-log-argument", {
									appName: name
								});
								s.setUserLogHandler(t, e)
							},
							apps: null,
							SDK_VERSION: "7.20.0",
							INTERNAL: {
								registerComponent: c,
								removeApp: function(t) {
									delete e[t]
								},
								components: n,
								useAsService: function(t, e) {
									if ("serverAuth" === e) return null;
									return e
								}
							}
						};

					function i(t) {
						if (t = t || "[DEFAULT]", !a.contains(e, t)) throw l.create("no-app", {
							appName: t
						});
						return e[t]
					}

					function c(u) {
						var s, c, f = u.name;
						if (n.has(f)) return h.debug("There were multiple attempts to register component " + f + "."), "PUBLIC" === u.type ? r[f] : null;
						if (n.set(f, u), "PUBLIC" === u.type) {
							var p = function(t) {
								if (void 0 === t && (t = i()), "function" !== typeof t[f]) throw l.create("invalid-app-argument", {
									appName: f
								});
								return t[f]()
							};
							void 0 !== u.serviceProps && a.deepExtend(p, u.serviceProps), r[f] = p, t.prototype[f] = function() {
								for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
								var n = this._getService.bind(this, f);
								return n.apply(this, u.multipleInstances ? t : [])
							}
						}
						try {
							for (var d = o.__values(Object.keys(e)), v = d.next(); !v.done; v = d.next()) {
								var m = v.value;
								e[m]._addComponent(u)
							}
						} catch (y) {
							s = {
								error: y
							}
						} finally {
							try {
								v && !v.done && (c = d.return) && c.call(d)
							} finally {
								if (s) throw s.error
							}
						}
						return "PUBLIC" === u.type ? r[f] : null
					}
					return r.default = r, Object.defineProperty(r, "apps", {
						get: function() {
							return Object.keys(e).map((function(t) {
								return e[t]
							}))
						}
					}), i.App = t, r
				}(p);
				return e.INTERNAL = o.__assign(o.__assign({}, e.INTERNAL), {
					createFirebaseNamespace: t,
					extendNamespace: function(t) {
						a.deepExtend(e, t)
					},
					createSubscribe: a.createSubscribe,
					ErrorFactory: a.ErrorFactory,
					deepExtend: a.deepExtend
				}), e
			}(),
			v = function() {
				function t(t) {
					this.container = t
				}
				return t.prototype.getPlatformInfoString = function() {
					return this.container.getProviders().map((function(t) {
						if (function(t) {
								var e = t.getComponent();
								return "VERSION" === (null === e || void 0 === e ? void 0 : e.type)
							}(t)) {
							var e = t.getImmediate();
							return e.library + "/" + e.version
						}
						return null
					})).filter((function(t) {
						return t
					})).join(" ")
				}, t
			}();
		if (a.isBrowser() && void 0 !== self.firebase) {
			h.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");
			var m = self.firebase.SDK_VERSION;
			m && m.indexOf("LITE") >= 0 && h.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")
		}
		var y = d.initializeApp;
		d.initializeApp = function() {
			for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
			return a.isNode() && h.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      '), y.apply(void 0, t)
		};
		var g = d;
		! function(t, e) {
			t.INTERNAL.registerComponent(new u.Component("platform-logger", (function(t) {
				return new v(t)
			}), "PRIVATE")), t.registerVersion("@firebase/app", "0.6.11", e), t.registerVersion("fire-js", "")
		}(g), e.default = g, e.firebase = g
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = n(0),
			i = n(2),
			o = function() {
				function t(t, e, n) {
					this.name = t, this.instanceFactory = e, this.type = n, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY"
				}
				return t.prototype.setInstantiationMode = function(t) {
					return this.instantiationMode = t, this
				}, t.prototype.setMultipleInstances = function(t) {
					return this.multipleInstances = t, this
				}, t.prototype.setServiceProps = function(t) {
					return this.serviceProps = t, this
				}, t
			}(),
			a = function() {
				function t(t, e) {
					this.name = t, this.container = e, this.component = null, this.instances = new Map, this.instancesDeferred = new Map
				}
				return t.prototype.get = function(t) {
					void 0 === t && (t = "[DEFAULT]");
					var e = this.normalizeInstanceIdentifier(t);
					if (!this.instancesDeferred.has(e)) {
						var n = new i.Deferred;
						this.instancesDeferred.set(e, n);
						try {
							var r = this.getOrInitializeService(e);
							r && n.resolve(r)
						} catch (o) {}
					}
					return this.instancesDeferred.get(e).promise
				}, t.prototype.getImmediate = function(t) {
					var e = r.__assign({
							identifier: "[DEFAULT]",
							optional: !1
						}, t),
						n = e.identifier,
						i = e.optional,
						o = this.normalizeInstanceIdentifier(n);
					try {
						var a = this.getOrInitializeService(o);
						if (!a) {
							if (i) return null;
							throw Error("Service " + this.name + " is not available")
						}
						return a
					} catch (u) {
						if (i) return null;
						throw u
					}
				}, t.prototype.getComponent = function() {
					return this.component
				}, t.prototype.setComponent = function(t) {
					var e, n;
					if (t.name !== this.name) throw Error("Mismatching Component " + t.name + " for Provider " + this.name + ".");
					if (this.component) throw Error("Component for " + this.name + " has already been provided");
					if (this.component = t, function(t) {
							return "EAGER" === t.instantiationMode
						}(t)) try {
						this.getOrInitializeService("[DEFAULT]")
					} catch (f) {}
					try {
						for (var i = r.__values(this.instancesDeferred.entries()), o = i.next(); !o.done; o = i.next()) {
							var a = r.__read(o.value, 2),
								u = a[0],
								s = a[1],
								c = this.normalizeInstanceIdentifier(u);
							try {
								var l = this.getOrInitializeService(c);
								s.resolve(l)
							} catch (f) {}
						}
					} catch (h) {
						e = {
							error: h
						}
					} finally {
						try {
							o && !o.done && (n = i.return) && n.call(i)
						} finally {
							if (e) throw e.error
						}
					}
				}, t.prototype.clearInstance = function(t) {
					void 0 === t && (t = "[DEFAULT]"), this.instancesDeferred.delete(t), this.instances.delete(t)
				}, t.prototype.delete = function() {
					return r.__awaiter(this, void 0, void 0, (function() {
						var t;
						return r.__generator(this, (function(e) {
							switch (e.label) {
								case 0:
									return t = Array.from(this.instances.values()), [4, Promise.all(r.__spread(t.filter((function(t) {
										return "INTERNAL" in t
									})).map((function(t) {
										return t.INTERNAL.delete()
									})), t.filter((function(t) {
										return "_delete" in t
									})).map((function(t) {
										return t._delete()
									}))))];
								case 1:
									return e.sent(), [2]
							}
						}))
					}))
				}, t.prototype.isComponentSet = function() {
					return null != this.component
				}, t.prototype.getOrInitializeService = function(t) {
					var e = this.instances.get(t);
					return !e && this.component && (e = this.component.instanceFactory(this.container, function(t) {
						return "[DEFAULT]" === t ? void 0 : t
					}(t)), this.instances.set(t, e)), e || null
				}, t.prototype.normalizeInstanceIdentifier = function(t) {
					return this.component ? this.component.multipleInstances ? t : "[DEFAULT]" : t
				}, t
			}();
		var u = function() {
			function t(t) {
				this.name = t, this.providers = new Map
			}
			return t.prototype.addComponent = function(t) {
				var e = this.getProvider(t.name);
				if (e.isComponentSet()) throw new Error("Component " + t.name + " has already been registered with " + this.name);
				e.setComponent(t)
			}, t.prototype.addOrOverwriteComponent = function(t) {
				this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name), this.addComponent(t)
			}, t.prototype.getProvider = function(t) {
				if (this.providers.has(t)) return this.providers.get(t);
				var e = new a(t, this);
				return this.providers.set(t, e), e
			}, t.prototype.getProviders = function() {
				return Array.from(this.providers.values())
			}, t
		}();
		e.Component = o, e.ComponentContainer = u, e.Provider = a
	}, function(t, e, n) {
		"use strict";

		function r(t) {
			return t && "object" === typeof t && "default" in t ? t : {
				default: t
			}
		}
		var i = r(n(3));
		i.default.registerVersion("firebase", "7.20.0", "app"), t.exports = i.default
	}, function(t, e, n) {
		"use strict";

		function r() {
			for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
			var r = Array(t),
				i = 0;
			for (e = 0; e < n; e++)
				for (var o = arguments[e], a = 0, u = o.length; a < u; a++, i++) r[i] = o[a];
			return r
		}
		var i;
		n.r(e), n.d(e, "LogLevel", (function() {
			return o
		})), n.d(e, "Logger", (function() {
			return f
		})), n.d(e, "setLogLevel", (function() {
			return h
		})), n.d(e, "setUserLogHandler", (function() {
			return p
		}));
		var o, a = [];
		! function(t) {
			t[t.DEBUG = 0] = "DEBUG", t[t.VERBOSE = 1] = "VERBOSE", t[t.INFO = 2] = "INFO", t[t.WARN = 3] = "WARN", t[t.ERROR = 4] = "ERROR", t[t.SILENT = 5] = "SILENT"
		}(o || (o = {}));
		var u = {
				debug: o.DEBUG,
				verbose: o.VERBOSE,
				info: o.INFO,
				warn: o.WARN,
				error: o.ERROR,
				silent: o.SILENT
			},
			s = o.INFO,
			c = ((i = {})[o.DEBUG] = "log", i[o.VERBOSE] = "log", i[o.INFO] = "info", i[o.WARN] = "warn", i[o.ERROR] = "error", i),
			l = function(t, e) {
				for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
				if (!(e < t.logLevel)) {
					var o = (new Date).toISOString(),
						a = c[e];
					if (!a) throw new Error("Attempted to log a message with an invalid logType (value: " + e + ")");
					console[a].apply(console, r(["[" + o + "]  " + t.name + ":"], n))
				}
			},
			f = function() {
				function t(t) {
					this.name = t, this._logLevel = s, this._logHandler = l, this._userLogHandler = null, a.push(this)
				}
				return Object.defineProperty(t.prototype, "logLevel", {
					get: function() {
						return this._logLevel
					},
					set: function(t) {
						if (!(t in o)) throw new TypeError('Invalid value "' + t + '" assigned to `logLevel`');
						this._logLevel = t
					},
					enumerable: !1,
					configurable: !0
				}), t.prototype.setLogLevel = function(t) {
					this._logLevel = "string" === typeof t ? u[t] : t
				}, Object.defineProperty(t.prototype, "logHandler", {
					get: function() {
						return this._logHandler
					},
					set: function(t) {
						if ("function" !== typeof t) throw new TypeError("Value assigned to `logHandler` must be a function");
						this._logHandler = t
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "userLogHandler", {
					get: function() {
						return this._userLogHandler
					},
					set: function(t) {
						this._userLogHandler = t
					},
					enumerable: !1,
					configurable: !0
				}), t.prototype.debug = function() {
					for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
					this._userLogHandler && this._userLogHandler.apply(this, r([this, o.DEBUG], t)), this._logHandler.apply(this, r([this, o.DEBUG], t))
				}, t.prototype.log = function() {
					for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
					this._userLogHandler && this._userLogHandler.apply(this, r([this, o.VERBOSE], t)), this._logHandler.apply(this, r([this, o.VERBOSE], t))
				}, t.prototype.info = function() {
					for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
					this._userLogHandler && this._userLogHandler.apply(this, r([this, o.INFO], t)), this._logHandler.apply(this, r([this, o.INFO], t))
				}, t.prototype.warn = function() {
					for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
					this._userLogHandler && this._userLogHandler.apply(this, r([this, o.WARN], t)), this._logHandler.apply(this, r([this, o.WARN], t))
				}, t.prototype.error = function() {
					for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
					this._userLogHandler && this._userLogHandler.apply(this, r([this, o.ERROR], t)), this._logHandler.apply(this, r([this, o.ERROR], t))
				}, t
			}();

		function h(t) {
			a.forEach((function(e) {
				e.setLogLevel(t)
			}))
		}

		function p(t, e) {
			for (var n = function(n) {
					var r = null;
					e && e.level && (r = u[e.level]), n.userLogHandler = null === t ? null : function(e, n) {
						for (var i = [], a = 2; a < arguments.length; a++) i[a - 2] = arguments[a];
						var u = i.map((function(t) {
							if (null == t) return null;
							if ("string" === typeof t) return t;
							if ("number" === typeof t || "boolean" === typeof t) return t.toString();
							if (t instanceof Error) return t.message;
							try {
								return JSON.stringify(t)
							} catch (e) {
								return null
							}
						})).filter((function(t) {
							return t
						})).join(" ");
						n >= (null !== r && void 0 !== r ? r : e.logLevel) && t({
							level: o[n].toLowerCase(),
							message: u,
							args: i,
							type: e.name
						})
					}
				}, r = 0, i = a; r < i.length; r++) {
				n(i[r])
			}
		}
	}, function(t, e, n) {
		"use strict";

		function r(t, e) {
			(null == e || e > t.length) && (e = t.length);
			for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
			return r
		}

		function i(t, e) {
			return function(t) {
				if (Array.isArray(t)) return t
			}(t) || function(t, e) {
				if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) {
					var n = [],
						r = !0,
						i = !1,
						o = void 0;
					try {
						for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
					} catch (s) {
						i = !0, o = s
					} finally {
						try {
							r || null == u.return || u.return()
						} finally {
							if (i) throw o
						}
					}
					return n
				}
			}(t, e) || function(t, e) {
				if (t) {
					if ("string" === typeof t) return r(t, e);
					var n = Object.prototype.toString.call(t).slice(8, -1);
					return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(t, e) : void 0
				}
			}(t, e) || function() {
				throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}()
		}
		n.d(e, "a", (function() {
			return i
		}))
	}, function(t, e) {
		var n;
		n = function() {
			return this
		}();
		try {
			n = n || new Function("return this")()
		} catch (r) {
			"object" === typeof window && (n = window)
		}
		t.exports = n
	}, function(t, e, n) {
		t.exports = n(22)
	}, function(t, e, n) {
		"use strict";
		var r = Object.getOwnPropertySymbols,
			i = Object.prototype.hasOwnProperty,
			o = Object.prototype.propertyIsEnumerable;

		function a(t) {
			if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
			return Object(t)
		}
		t.exports = function() {
			try {
				if (!Object.assign) return !1;
				var t = new String("abc");
				if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
				for (var e = {}, n = 0; n < 10; n++) e["_" + String.fromCharCode(n)] = n;
				if ("0123456789" !== Object.getOwnPropertyNames(e).map((function(t) {
						return e[t]
					})).join("")) return !1;
				var r = {};
				return "abcdefghijklmnopqrst".split("").forEach((function(t) {
					r[t] = t
				})), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
			} catch (i) {
				return !1
			}
		}() ? Object.assign : function(t, e) {
			for (var n, u, s = a(t), c = 1; c < arguments.length; c++) {
				for (var l in n = Object(arguments[c])) i.call(n, l) && (s[l] = n[l]);
				if (r) {
					u = r(n);
					for (var f = 0; f < u.length; f++) o.call(n, u[f]) && (s[u[f]] = n[u[f]])
				}
			}
			return s
		}
	}, function(t, e, n) {
		"use strict";
		! function t() {
			if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) {
				0;
				try {
					__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
				} catch (e) {
					console.error(e)
				}
			}
		}(), t.exports = n(18)
	}, function(t, e, n) {
		"use strict";

		function r(t, e, n, r, i, o, a) {
			try {
				var u = t[o](a),
					s = u.value
			} catch (c) {
				return void n(c)
			}
			u.done ? e(s) : Promise.resolve(s).then(r, i)
		}

		function i(t) {
			return function() {
				var e = this,
					n = arguments;
				return new Promise((function(i, o) {
					var a = t.apply(e, n);

					function u(t) {
						r(a, i, o, u, s, "next", t)
					}

					function s(t) {
						r(a, i, o, u, s, "throw", t)
					}
					u(void 0)
				}))
			}
		}
		n.d(e, "a", (function() {
			return i
		}))
	}, function(t, e, n) {
		! function(t) {
			"use strict";

			function e(t) {
				return Array.prototype.slice.call(t)
			}

			function n(t) {
				return new Promise((function(e, n) {
					t.onsuccess = function() {
						e(t.result)
					}, t.onerror = function() {
						n(t.error)
					}
				}))
			}

			function r(t, e, r) {
				var i, o = new Promise((function(o, a) {
					n(i = t[e].apply(t, r)).then(o, a)
				}));
				return o.request = i, o
			}

			function i(t, e, n) {
				var i = r(t, e, n);
				return i.then((function(t) {
					if (t) return new l(t, i.request)
				}))
			}

			function o(t, e, n) {
				n.forEach((function(n) {
					Object.defineProperty(t.prototype, n, {
						get: function() {
							return this[e][n]
						},
						set: function(t) {
							this[e][n] = t
						}
					})
				}))
			}

			function a(t, e, n, i) {
				i.forEach((function(i) {
					i in n.prototype && (t.prototype[i] = function() {
						return r(this[e], i, arguments)
					})
				}))
			}

			function u(t, e, n, r) {
				r.forEach((function(r) {
					r in n.prototype && (t.prototype[r] = function() {
						return this[e][r].apply(this[e], arguments)
					})
				}))
			}

			function s(t, e, n, r) {
				r.forEach((function(r) {
					r in n.prototype && (t.prototype[r] = function() {
						return i(this[e], r, arguments)
					})
				}))
			}

			function c(t) {
				this._index = t
			}

			function l(t, e) {
				this._cursor = t, this._request = e
			}

			function f(t) {
				this._store = t
			}

			function h(t) {
				this._tx = t, this.complete = new Promise((function(e, n) {
					t.oncomplete = function() {
						e()
					}, t.onerror = function() {
						n(t.error)
					}, t.onabort = function() {
						n(t.error)
					}
				}))
			}

			function p(t, e, n) {
				this._db = t, this.oldVersion = e, this.transaction = new h(n)
			}

			function d(t) {
				this._db = t
			}
			o(c, "_index", ["name", "keyPath", "multiEntry", "unique"]), a(c, "_index", IDBIndex, ["get", "getKey", "getAll", "getAllKeys", "count"]), s(c, "_index", IDBIndex, ["openCursor", "openKeyCursor"]), o(l, "_cursor", ["direction", "key", "primaryKey", "value"]), a(l, "_cursor", IDBCursor, ["update", "delete"]), ["advance", "continue", "continuePrimaryKey"].forEach((function(t) {
				t in IDBCursor.prototype && (l.prototype[t] = function() {
					var e = this,
						r = arguments;
					return Promise.resolve().then((function() {
						return e._cursor[t].apply(e._cursor, r), n(e._request).then((function(t) {
							if (t) return new l(t, e._request)
						}))
					}))
				})
			})), f.prototype.createIndex = function() {
				return new c(this._store.createIndex.apply(this._store, arguments))
			}, f.prototype.index = function() {
				return new c(this._store.index.apply(this._store, arguments))
			}, o(f, "_store", ["name", "keyPath", "indexNames", "autoIncrement"]), a(f, "_store", IDBObjectStore, ["put", "add", "delete", "clear", "get", "getAll", "getKey", "getAllKeys", "count"]), s(f, "_store", IDBObjectStore, ["openCursor", "openKeyCursor"]), u(f, "_store", IDBObjectStore, ["deleteIndex"]), h.prototype.objectStore = function() {
				return new f(this._tx.objectStore.apply(this._tx, arguments))
			}, o(h, "_tx", ["objectStoreNames", "mode"]), u(h, "_tx", IDBTransaction, ["abort"]), p.prototype.createObjectStore = function() {
				return new f(this._db.createObjectStore.apply(this._db, arguments))
			}, o(p, "_db", ["name", "version", "objectStoreNames"]), u(p, "_db", IDBDatabase, ["deleteObjectStore", "close"]), d.prototype.transaction = function() {
				return new h(this._db.transaction.apply(this._db, arguments))
			}, o(d, "_db", ["name", "version", "objectStoreNames"]), u(d, "_db", IDBDatabase, ["close"]), ["openCursor", "openKeyCursor"].forEach((function(t) {
				[f, c].forEach((function(n) {
					t in n.prototype && (n.prototype[t.replace("open", "iterate")] = function() {
						var n = e(arguments),
							r = n[n.length - 1],
							i = this._store || this._index,
							o = i[t].apply(i, n.slice(0, -1));
						o.onsuccess = function() {
							r(o.result)
						}
					})
				}))
			})), [c, f].forEach((function(t) {
				t.prototype.getAll || (t.prototype.getAll = function(t, e) {
					var n = this,
						r = [];
					return new Promise((function(i) {
						n.iterateCursor(t, (function(t) {
							t ? (r.push(t.value), void 0 === e || r.length != e ? t.continue() : i(r)) : i(r)
						}))
					}))
				})
			})), t.openDb = function(t, e, n) {
				var i = r(indexedDB, "open", [t, e]),
					o = i.request;
				return o && (o.onupgradeneeded = function(t) {
					n && n(new p(o.result, t.oldVersion, o.transaction))
				}), i.then((function(t) {
					return new d(t)
				}))
			}, t.deleteDb = function(t) {
				return r(indexedDB, "deleteDatabase", [t])
			}, Object.defineProperty(t, "__esModule", {
				value: !0
			})
		}(e)
	}, function(t, e, n) {
		"use strict";
		n.d(e, "a", (function() {
			return u
		}));
		var r = n(1),
			i = function() {
				return (i = Object.assign || function(t) {
					for (var e, n = 1, r = arguments.length; n < r; n++)
						for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
					return t
				}).apply(this, arguments)
			},
			o = function(t) {
				return {
					loading: void 0 === t || null === t,
					value: t
				}
			},
			a = function(t) {
				var e = t ? t() : void 0,
					n = Object(r.useReducer)((function(t, e) {
						switch (e.type) {
							case "error":
								return i({}, t, {
									error: e.error,
									loading: !1,
									value: void 0
								});
							case "reset":
								return o(e.defaultValue);
							case "value":
								return i({}, t, {
									error: void 0,
									loading: !1,
									value: e.value
								});
							default:
								return t
						}
					}), o(e)),
					a = n[0],
					u = n[1];
				return {
					error: a.error,
					loading: a.loading,
					reset: function() {
						var e = t ? t() : void 0;
						u({
							type: "reset",
							defaultValue: e
						})
					},
					setError: function(t) {
						u({
							type: "error",
							error: t
						})
					},
					setValue: function(t) {
						u({
							type: "value",
							value: t
						})
					},
					value: a.value
				}
			},
			u = function(t) {
				var e = a((function() {
						return t.currentUser
					})),
					n = e.error,
					i = e.loading,
					o = e.setError,
					u = e.setValue,
					s = e.value;
				return Object(r.useEffect)((function() {
					var e = t.onAuthStateChanged(u, o);
					return function() {
						e()
					}
				}), [t]), [s, i, n]
			}
	}, function(t, e, n) {
		"use strict";
		n.d(e, "a", (function() {
			return l
		}));
		var r = n(1),
			i = function() {
				return (i = Object.assign || function(t) {
					for (var e, n = 1, r = arguments.length; n < r; n++)
						for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
					return t
				}).apply(this, arguments)
			},
			o = function(t, e) {
				var n;
				if (t.exists) return i({}, t.data(), e ? ((n = {})[e] = t.id, n) : null)
			},
			a = function(t) {
				return {
					loading: void 0 === t || null === t,
					value: t
				}
			},
			u = function(t) {
				var e = t ? t() : void 0,
					n = Object(r.useReducer)((function(t, e) {
						switch (e.type) {
							case "error":
								return i({}, t, {
									error: e.error,
									loading: !1,
									value: void 0
								});
							case "reset":
								return a(e.defaultValue);
							case "value":
								return i({}, t, {
									error: void 0,
									loading: !1,
									value: e.value
								});
							default:
								return t
						}
					}), a(e)),
					o = n[0],
					u = n[1];
				return {
					error: o.error,
					loading: o.loading,
					reset: function() {
						var e = t ? t() : void 0;
						u({
							type: "reset",
							defaultValue: e
						})
					},
					setError: function(t) {
						u({
							type: "error",
							error: t
						})
					},
					setValue: function(t) {
						u({
							type: "value",
							value: t
						})
					},
					value: o.value
				}
			},
			s = function(t, e) {
				var n = !t && !e,
					r = !!t && !!e && t.isEqual(e);
				return n || r
			},
			c = function(t, e) {
				return function(t, e, n) {
					var i = Object(r.useRef)(t);
					return Object(r.useEffect)((function() {
						e(t, i.current) || (i.current = t, n && n())
					})), i
				}(t, s, e)
			},
			l = function(t, e) {
				var n = e ? e.idField : void 0,
					i = function(t, e) {
						var n = u(),
							i = n.error,
							o = n.loading,
							a = n.reset,
							s = n.setError,
							l = n.setValue,
							f = n.value,
							h = c(t, a);
						return Object(r.useEffect)((function() {
							if (h.current) {
								var t = e && e.snapshotListenOptions ? h.current.onSnapshot(e.snapshotListenOptions, l, s) : h.current.onSnapshot(l, s);
								return function() {
									t()
								}
							}
							l(void 0)
						}), [h.current]), [f, o, i]
					}(t, {
						snapshotListenOptions: e ? e.snapshotListenOptions : void 0
					}),
					a = i[0],
					s = i[1],
					l = i[2];
				return [Object(r.useMemo)((function() {
					return a ? a.docs.map((function(t) {
						return o(t, n)
					})) : void 0
				}), [a, n]), s, l]
			}
	}, , function(t, e, n) {
		"use strict";
		var r = n(10),
			i = "function" === typeof Symbol && Symbol.for,
			o = i ? Symbol.for("react.element") : 60103,
			a = i ? Symbol.for("react.portal") : 60106,
			u = i ? Symbol.for("react.fragment") : 60107,
			s = i ? Symbol.for("react.strict_mode") : 60108,
			c = i ? Symbol.for("react.profiler") : 60114,
			l = i ? Symbol.for("react.provider") : 60109,
			f = i ? Symbol.for("react.context") : 60110,
			h = i ? Symbol.for("react.forward_ref") : 60112,
			p = i ? Symbol.for("react.suspense") : 60113,
			d = i ? Symbol.for("react.memo") : 60115,
			v = i ? Symbol.for("react.lazy") : 60116,
			m = "function" === typeof Symbol && Symbol.iterator;

		function y(t) {
			for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
			return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
		}
		var g = {
				isMounted: function() {
					return !1
				},
				enqueueForceUpdate: function() {},
				enqueueReplaceState: function() {},
				enqueueSetState: function() {}
			},
			b = {};

		function w(t, e, n) {
			this.props = t, this.context = e, this.refs = b, this.updater = n || g
		}

		function _() {}

		function E(t, e, n) {
			this.props = t, this.context = e, this.refs = b, this.updater = n || g
		}
		w.prototype.isReactComponent = {}, w.prototype.setState = function(t, e) {
			if ("object" !== typeof t && "function" !== typeof t && null != t) throw Error(y(85));
			this.updater.enqueueSetState(this, t, e, "setState")
		}, w.prototype.forceUpdate = function(t) {
			this.updater.enqueueForceUpdate(this, t, "forceUpdate")
		}, _.prototype = w.prototype;
		var I = E.prototype = new _;
		I.constructor = E, r(I, w.prototype), I.isPureReactComponent = !0;
		var T = {
				current: null
			},
			S = Object.prototype.hasOwnProperty,
			k = {
				key: !0,
				ref: !0,
				__self: !0,
				__source: !0
			};

		function N(t, e, n) {
			var r, i = {},
				a = null,
				u = null;
			if (null != e)
				for (r in void 0 !== e.ref && (u = e.ref), void 0 !== e.key && (a = "" + e.key), e) S.call(e, r) && !k.hasOwnProperty(r) && (i[r] = e[r]);
			var s = arguments.length - 2;
			if (1 === s) i.children = n;
			else if (1 < s) {
				for (var c = Array(s), l = 0; l < s; l++) c[l] = arguments[l + 2];
				i.children = c
			}
			if (t && t.defaultProps)
				for (r in s = t.defaultProps) void 0 === i[r] && (i[r] = s[r]);
			return {
				$$typeof: o,
				type: t,
				key: a,
				ref: u,
				props: i,
				_owner: T.current
			}
		}

		function A(t) {
			return "object" === typeof t && null !== t && t.$$typeof === o
		}
		var x = /\/+/g,
			O = [];

		function C(t, e, n, r) {
			if (O.length) {
				var i = O.pop();
				return i.result = t, i.keyPrefix = e, i.func = n, i.context = r, i.count = 0, i
			}
			return {
				result: t,
				keyPrefix: e,
				func: n,
				context: r,
				count: 0
			}
		}

		function D(t) {
			t.result = null, t.keyPrefix = null, t.func = null, t.context = null, t.count = 0, 10 > O.length && O.push(t)
		}

		function P(t, e, n) {
			return null == t ? 0 : function t(e, n, r, i) {
				var u = typeof e;
				"undefined" !== u && "boolean" !== u || (e = null);
				var s = !1;
				if (null === e) s = !0;
				else switch (u) {
					case "string":
					case "number":
						s = !0;
						break;
					case "object":
						switch (e.$$typeof) {
							case o:
							case a:
								s = !0
						}
				}
				if (s) return r(i, e, "" === n ? "." + R(e, 0) : n), 1;
				if (s = 0, n = "" === n ? "." : n + ":", Array.isArray(e))
					for (var c = 0; c < e.length; c++) {
						var l = n + R(u = e[c], c);
						s += t(u, l, r, i)
					} else if (null === e || "object" !== typeof e ? l = null : l = "function" === typeof(l = m && e[m] || e["@@iterator"]) ? l : null, "function" === typeof l)
						for (e = l.call(e), c = 0; !(u = e.next()).done;) s += t(u = u.value, l = n + R(u, c++), r, i);
					else if ("object" === u) throw r = "" + e, Error(y(31, "[object Object]" === r ? "object with keys {" + Object.keys(e).join(", ") + "}" : r, ""));
				return s
			}(t, "", e, n)
		}

		function R(t, e) {
			return "object" === typeof t && null !== t && null != t.key ? function(t) {
				var e = {
					"=": "=0",
					":": "=2"
				};
				return "$" + ("" + t).replace(/[=:]/g, (function(t) {
					return e[t]
				}))
			}(t.key) : e.toString(36)
		}

		function L(t, e) {
			t.func.call(t.context, e, t.count++)
		}

		function M(t, e, n) {
			var r = t.result,
				i = t.keyPrefix;
			t = t.func.call(t.context, e, t.count++), Array.isArray(t) ? j(t, r, n, (function(t) {
				return t
			})) : null != t && (A(t) && (t = function(t, e) {
				return {
					$$typeof: o,
					type: t.type,
					key: e,
					ref: t.ref,
					props: t.props,
					_owner: t._owner
				}
			}(t, i + (!t.key || e && e.key === t.key ? "" : ("" + t.key).replace(x, "$&/") + "/") + n)), r.push(t))
		}

		function j(t, e, n, r, i) {
			var o = "";
			null != n && (o = ("" + n).replace(x, "$&/") + "/"), P(t, M, e = C(e, o, r, i)), D(e)
		}
		var U = {
			current: null
		};

		function F() {
			var t = U.current;
			if (null === t) throw Error(y(321));
			return t
		}
		var V = {
			ReactCurrentDispatcher: U,
			ReactCurrentBatchConfig: {
				suspense: null
			},
			ReactCurrentOwner: T,
			IsSomeRendererActing: {
				current: !1
			},
			assign: r
		};
		e.Children = {
			map: function(t, e, n) {
				if (null == t) return t;
				var r = [];
				return j(t, r, null, e, n), r
			},
			forEach: function(t, e, n) {
				if (null == t) return t;
				P(t, L, e = C(null, null, e, n)), D(e)
			},
			count: function(t) {
				return P(t, (function() {
					return null
				}), null)
			},
			toArray: function(t) {
				var e = [];
				return j(t, e, null, (function(t) {
					return t
				})), e
			},
			only: function(t) {
				if (!A(t)) throw Error(y(143));
				return t
			}
		}, e.Component = w, e.Fragment = u, e.Profiler = c, e.PureComponent = E, e.StrictMode = s, e.Suspense = p, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = V, e.cloneElement = function(t, e, n) {
			if (null === t || void 0 === t) throw Error(y(267, t));
			var i = r({}, t.props),
				a = t.key,
				u = t.ref,
				s = t._owner;
			if (null != e) {
				if (void 0 !== e.ref && (u = e.ref, s = T.current), void 0 !== e.key && (a = "" + e.key), t.type && t.type.defaultProps) var c = t.type.defaultProps;
				for (l in e) S.call(e, l) && !k.hasOwnProperty(l) && (i[l] = void 0 === e[l] && void 0 !== c ? c[l] : e[l])
			}
			var l = arguments.length - 2;
			if (1 === l) i.children = n;
			else if (1 < l) {
				c = Array(l);
				for (var f = 0; f < l; f++) c[f] = arguments[f + 2];
				i.children = c
			}
			return {
				$$typeof: o,
				type: t.type,
				key: a,
				ref: u,
				props: i,
				_owner: s
			}
		}, e.createContext = function(t, e) {
			return void 0 === e && (e = null), (t = {
				$$typeof: f,
				_calculateChangedBits: e,
				_currentValue: t,
				_currentValue2: t,
				_threadCount: 0,
				Provider: null,
				Consumer: null
			}).Provider = {
				$$typeof: l,
				_context: t
			}, t.Consumer = t
		}, e.createElement = N, e.createFactory = function(t) {
			var e = N.bind(null, t);
			return e.type = t, e
		}, e.createRef = function() {
			return {
				current: null
			}
		}, e.forwardRef = function(t) {
			return {
				$$typeof: h,
				render: t
			}
		}, e.isValidElement = A, e.lazy = function(t) {
			return {
				$$typeof: v,
				_ctor: t,
				_status: -1,
				_result: null
			}
		}, e.memo = function(t, e) {
			return {
				$$typeof: d,
				type: t,
				compare: void 0 === e ? null : e
			}
		}, e.useCallback = function(t, e) {
			return F().useCallback(t, e)
		}, e.useContext = function(t, e) {
			return F().useContext(t, e)
		}, e.useDebugValue = function() {}, e.useEffect = function(t, e) {
			return F().useEffect(t, e)
		}, e.useImperativeHandle = function(t, e, n) {
			return F().useImperativeHandle(t, e, n)
		}, e.useLayoutEffect = function(t, e) {
			return F().useLayoutEffect(t, e)
		}, e.useMemo = function(t, e) {
			return F().useMemo(t, e)
		}, e.useReducer = function(t, e, n) {
			return F().useReducer(t, e, n)
		}, e.useRef = function(t) {
			return F().useRef(t)
		}, e.useState = function(t) {
			return F().useState(t)
		}, e.version = "16.13.1"
	}, function(t, e, n) {
		"use strict";
		var r = n(1),
			i = n(10),
			o = n(19);

		function a(t) {
			for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
			return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
		}
		if (!r) throw Error(a(227));

		function u(t, e, n, r, i, o, a, u, s) {
			var c = Array.prototype.slice.call(arguments, 3);
			try {
				e.apply(n, c)
			} catch (l) {
				this.onError(l)
			}
		}
		var s = !1,
			c = null,
			l = !1,
			f = null,
			h = {
				onError: function(t) {
					s = !0, c = t
				}
			};

		function p(t, e, n, r, i, o, a, l, f) {
			s = !1, c = null, u.apply(h, arguments)
		}
		var d = null,
			v = null,
			m = null;

		function y(t, e, n) {
			var r = t.type || "unknown-event";
			t.currentTarget = m(n),
				function(t, e, n, r, i, o, u, h, d) {
					if (p.apply(this, arguments), s) {
						if (!s) throw Error(a(198));
						var v = c;
						s = !1, c = null, l || (l = !0, f = v)
					}
				}(r, e, void 0, t), t.currentTarget = null
		}
		var g = null,
			b = {};

		function w() {
			if (g)
				for (var t in b) {
					var e = b[t],
						n = g.indexOf(t);
					if (!(-1 < n)) throw Error(a(96, t));
					if (!E[n]) {
						if (!e.extractEvents) throw Error(a(97, t));
						for (var r in E[n] = e, n = e.eventTypes) {
							var i = void 0,
								o = n[r],
								u = e,
								s = r;
							if (I.hasOwnProperty(s)) throw Error(a(99, s));
							I[s] = o;
							var c = o.phasedRegistrationNames;
							if (c) {
								for (i in c) c.hasOwnProperty(i) && _(c[i], u, s);
								i = !0
							} else o.registrationName ? (_(o.registrationName, u, s), i = !0) : i = !1;
							if (!i) throw Error(a(98, r, t))
						}
					}
				}
		}

		function _(t, e, n) {
			if (T[t]) throw Error(a(100, t));
			T[t] = e, S[t] = e.eventTypes[n].dependencies
		}
		var E = [],
			I = {},
			T = {},
			S = {};

		function k(t) {
			var e, n = !1;
			for (e in t)
				if (t.hasOwnProperty(e)) {
					var r = t[e];
					if (!b.hasOwnProperty(e) || b[e] !== r) {
						if (b[e]) throw Error(a(102, e));
						b[e] = r, n = !0
					}
				} n && w()
		}
		var N = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
			A = null,
			x = null,
			O = null;

		function C(t) {
			if (t = v(t)) {
				if ("function" !== typeof A) throw Error(a(280));
				var e = t.stateNode;
				e && (e = d(e), A(t.stateNode, t.type, e))
			}
		}

		function D(t) {
			x ? O ? O.push(t) : O = [t] : x = t
		}

		function P() {
			if (x) {
				var t = x,
					e = O;
				if (O = x = null, C(t), e)
					for (t = 0; t < e.length; t++) C(e[t])
			}
		}

		function R(t, e) {
			return t(e)
		}

		function L(t, e, n, r, i) {
			return t(e, n, r, i)
		}

		function M() {}
		var j = R,
			U = !1,
			F = !1;

		function V() {
			null === x && null === O || (M(), P())
		}

		function z(t, e, n) {
			if (F) return t(e, n);
			F = !0;
			try {
				return j(t, e, n)
			} finally {
				F = !1, V()
			}
		}
		var B = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
			q = Object.prototype.hasOwnProperty,
			G = {},
			W = {};

		function H(t, e, n, r, i, o) {
			this.acceptsBooleans = 2 === e || 3 === e || 4 === e, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = t, this.type = e, this.sanitizeURL = o
		}
		var K = {};
		"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(t) {
			K[t] = new H(t, 0, !1, t, null, !1)
		})), [
			["acceptCharset", "accept-charset"],
			["className", "class"],
			["htmlFor", "for"],
			["httpEquiv", "http-equiv"]
		].forEach((function(t) {
			var e = t[0];
			K[e] = new H(e, 1, !1, t[1], null, !1)
		})), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(t) {
			K[t] = new H(t, 2, !1, t.toLowerCase(), null, !1)
		})), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(t) {
			K[t] = new H(t, 2, !1, t, null, !1)
		})), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(t) {
			K[t] = new H(t, 3, !1, t.toLowerCase(), null, !1)
		})), ["checked", "multiple", "muted", "selected"].forEach((function(t) {
			K[t] = new H(t, 3, !0, t, null, !1)
		})), ["capture", "download"].forEach((function(t) {
			K[t] = new H(t, 4, !1, t, null, !1)
		})), ["cols", "rows", "size", "span"].forEach((function(t) {
			K[t] = new H(t, 6, !1, t, null, !1)
		})), ["rowSpan", "start"].forEach((function(t) {
			K[t] = new H(t, 5, !1, t.toLowerCase(), null, !1)
		}));
		var Q = /[\-:]([a-z])/g;

		function X(t) {
			return t[1].toUpperCase()
		}
		"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(t) {
			var e = t.replace(Q, X);
			K[e] = new H(e, 1, !1, t, null, !1)
		})), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(t) {
			var e = t.replace(Q, X);
			K[e] = new H(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1)
		})), ["xml:base", "xml:lang", "xml:space"].forEach((function(t) {
			var e = t.replace(Q, X);
			K[e] = new H(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1)
		})), ["tabIndex", "crossOrigin"].forEach((function(t) {
			K[t] = new H(t, 1, !1, t.toLowerCase(), null, !1)
		})), K.xlinkHref = new H("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0), ["src", "href", "action", "formAction"].forEach((function(t) {
			K[t] = new H(t, 1, !1, t.toLowerCase(), null, !0)
		}));
		var Y = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

		function $(t, e, n, r) {
			var i = K.hasOwnProperty(e) ? K[e] : null;
			(null !== i ? 0 === i.type : !r && (2 < e.length && ("o" === e[0] || "O" === e[0]) && ("n" === e[1] || "N" === e[1]))) || (function(t, e, n, r) {
				if (null === e || "undefined" === typeof e || function(t, e, n, r) {
						if (null !== n && 0 === n.type) return !1;
						switch (typeof e) {
							case "function":
							case "symbol":
								return !0;
							case "boolean":
								return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (t = t.toLowerCase().slice(0, 5)) && "aria-" !== t);
							default:
								return !1
						}
					}(t, e, n, r)) return !0;
				if (r) return !1;
				if (null !== n) switch (n.type) {
					case 3:
						return !e;
					case 4:
						return !1 === e;
					case 5:
						return isNaN(e);
					case 6:
						return isNaN(e) || 1 > e
				}
				return !1
			}(e, n, i, r) && (n = null), r || null === i ? function(t) {
				return !!q.call(W, t) || !q.call(G, t) && (B.test(t) ? W[t] = !0 : (G[t] = !0, !1))
			}(e) && (null === n ? t.removeAttribute(e) : t.setAttribute(e, "" + n)) : i.mustUseProperty ? t[i.propertyName] = null === n ? 3 !== i.type && "" : n : (e = i.attributeName, r = i.attributeNamespace, null === n ? t.removeAttribute(e) : (n = 3 === (i = i.type) || 4 === i && !0 === n ? "" : "" + n, r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))))
		}
		Y.hasOwnProperty("ReactCurrentDispatcher") || (Y.ReactCurrentDispatcher = {
			current: null
		}), Y.hasOwnProperty("ReactCurrentBatchConfig") || (Y.ReactCurrentBatchConfig = {
			suspense: null
		});
		var J = /^(.*)[\\\/]/,
			Z = "function" === typeof Symbol && Symbol.for,
			tt = Z ? Symbol.for("react.element") : 60103,
			et = Z ? Symbol.for("react.portal") : 60106,
			nt = Z ? Symbol.for("react.fragment") : 60107,
			rt = Z ? Symbol.for("react.strict_mode") : 60108,
			it = Z ? Symbol.for("react.profiler") : 60114,
			ot = Z ? Symbol.for("react.provider") : 60109,
			at = Z ? Symbol.for("react.context") : 60110,
			ut = Z ? Symbol.for("react.concurrent_mode") : 60111,
			st = Z ? Symbol.for("react.forward_ref") : 60112,
			ct = Z ? Symbol.for("react.suspense") : 60113,
			lt = Z ? Symbol.for("react.suspense_list") : 60120,
			ft = Z ? Symbol.for("react.memo") : 60115,
			ht = Z ? Symbol.for("react.lazy") : 60116,
			pt = Z ? Symbol.for("react.block") : 60121,
			dt = "function" === typeof Symbol && Symbol.iterator;

		function vt(t) {
			return null === t || "object" !== typeof t ? null : "function" === typeof(t = dt && t[dt] || t["@@iterator"]) ? t : null
		}

		function mt(t) {
			if (null == t) return null;
			if ("function" === typeof t) return t.displayName || t.name || null;
			if ("string" === typeof t) return t;
			switch (t) {
				case nt:
					return "Fragment";
				case et:
					return "Portal";
				case it:
					return "Profiler";
				case rt:
					return "StrictMode";
				case ct:
					return "Suspense";
				case lt:
					return "SuspenseList"
			}
			if ("object" === typeof t) switch (t.$$typeof) {
				case at:
					return "Context.Consumer";
				case ot:
					return "Context.Provider";
				case st:
					var e = t.render;
					return e = e.displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
				case ft:
					return mt(t.type);
				case pt:
					return mt(t.render);
				case ht:
					if (t = 1 === t._status ? t._result : null) return mt(t)
			}
			return null
		}

		function yt(t) {
			var e = "";
			do {
				t: switch (t.tag) {
					case 3:
					case 4:
					case 6:
					case 7:
					case 10:
					case 9:
						var n = "";
						break t;
					default:
						var r = t._debugOwner,
							i = t._debugSource,
							o = mt(t.type);
						n = null, r && (n = mt(r.type)), r = o, o = "", i ? o = " (at " + i.fileName.replace(J, "") + ":" + i.lineNumber + ")" : n && (o = " (created by " + n + ")"), n = "\n    in " + (r || "Unknown") + o
				}
				e += n,
				t = t.return
			} while (t);
			return e
		}

		function gt(t) {
			switch (typeof t) {
				case "boolean":
				case "number":
				case "object":
				case "string":
				case "undefined":
					return t;
				default:
					return ""
			}
		}

		function bt(t) {
			var e = t.type;
			return (t = t.nodeName) && "input" === t.toLowerCase() && ("checkbox" === e || "radio" === e)
		}

		function wt(t) {
			t._valueTracker || (t._valueTracker = function(t) {
				var e = bt(t) ? "checked" : "value",
					n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
					r = "" + t[e];
				if (!t.hasOwnProperty(e) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
					var i = n.get,
						o = n.set;
					return Object.defineProperty(t, e, {
						configurable: !0,
						get: function() {
							return i.call(this)
						},
						set: function(t) {
							r = "" + t, o.call(this, t)
						}
					}), Object.defineProperty(t, e, {
						enumerable: n.enumerable
					}), {
						getValue: function() {
							return r
						},
						setValue: function(t) {
							r = "" + t
						},
						stopTracking: function() {
							t._valueTracker = null, delete t[e]
						}
					}
				}
			}(t))
		}

		function _t(t) {
			if (!t) return !1;
			var e = t._valueTracker;
			if (!e) return !0;
			var n = e.getValue(),
				r = "";
			return t && (r = bt(t) ? t.checked ? "true" : "false" : t.value), (t = r) !== n && (e.setValue(t), !0)
		}

		function Et(t, e) {
			var n = e.checked;
			return i({}, e, {
				defaultChecked: void 0,
				defaultValue: void 0,
				value: void 0,
				checked: null != n ? n : t._wrapperState.initialChecked
			})
		}

		function It(t, e) {
			var n = null == e.defaultValue ? "" : e.defaultValue,
				r = null != e.checked ? e.checked : e.defaultChecked;
			n = gt(null != e.value ? e.value : n), t._wrapperState = {
				initialChecked: r,
				initialValue: n,
				controlled: "checkbox" === e.type || "radio" === e.type ? null != e.checked : null != e.value
			}
		}

		function Tt(t, e) {
			null != (e = e.checked) && $(t, "checked", e, !1)
		}

		function St(t, e) {
			Tt(t, e);
			var n = gt(e.value),
				r = e.type;
			if (null != n) "number" === r ? (0 === n && "" === t.value || t.value != n) && (t.value = "" + n) : t.value !== "" + n && (t.value = "" + n);
			else if ("submit" === r || "reset" === r) return void t.removeAttribute("value");
			e.hasOwnProperty("value") ? Nt(t, e.type, n) : e.hasOwnProperty("defaultValue") && Nt(t, e.type, gt(e.defaultValue)), null == e.checked && null != e.defaultChecked && (t.defaultChecked = !!e.defaultChecked)
		}

		function kt(t, e, n) {
			if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
				var r = e.type;
				if (!("submit" !== r && "reset" !== r || void 0 !== e.value && null !== e.value)) return;
				e = "" + t._wrapperState.initialValue, n || e === t.value || (t.value = e), t.defaultValue = e
			}
			"" !== (n = t.name) && (t.name = ""), t.defaultChecked = !!t._wrapperState.initialChecked, "" !== n && (t.name = n)
		}

		function Nt(t, e, n) {
			"number" === e && t.ownerDocument.activeElement === t || (null == n ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + n && (t.defaultValue = "" + n))
		}

		function At(t, e) {
			return t = i({
				children: void 0
			}, e), (e = function(t) {
				var e = "";
				return r.Children.forEach(t, (function(t) {
					null != t && (e += t)
				})), e
			}(e.children)) && (t.children = e), t
		}

		function xt(t, e, n, r) {
			if (t = t.options, e) {
				e = {};
				for (var i = 0; i < n.length; i++) e["$" + n[i]] = !0;
				for (n = 0; n < t.length; n++) i = e.hasOwnProperty("$" + t[n].value), t[n].selected !== i && (t[n].selected = i), i && r && (t[n].defaultSelected = !0)
			} else {
				for (n = "" + gt(n), e = null, i = 0; i < t.length; i++) {
					if (t[i].value === n) return t[i].selected = !0, void(r && (t[i].defaultSelected = !0));
					null !== e || t[i].disabled || (e = t[i])
				}
				null !== e && (e.selected = !0)
			}
		}

		function Ot(t, e) {
			if (null != e.dangerouslySetInnerHTML) throw Error(a(91));
			return i({}, e, {
				value: void 0,
				defaultValue: void 0,
				children: "" + t._wrapperState.initialValue
			})
		}

		function Ct(t, e) {
			var n = e.value;
			if (null == n) {
				if (n = e.children, e = e.defaultValue, null != n) {
					if (null != e) throw Error(a(92));
					if (Array.isArray(n)) {
						if (!(1 >= n.length)) throw Error(a(93));
						n = n[0]
					}
					e = n
				}
				null == e && (e = ""), n = e
			}
			t._wrapperState = {
				initialValue: gt(n)
			}
		}

		function Dt(t, e) {
			var n = gt(e.value),
				r = gt(e.defaultValue);
			null != n && ((n = "" + n) !== t.value && (t.value = n), null == e.defaultValue && t.defaultValue !== n && (t.defaultValue = n)), null != r && (t.defaultValue = "" + r)
		}

		function Pt(t) {
			var e = t.textContent;
			e === t._wrapperState.initialValue && "" !== e && null !== e && (t.value = e)
		}
		var Rt = "http://www.w3.org/1999/xhtml",
			Lt = "http://www.w3.org/2000/svg";

		function Mt(t) {
			switch (t) {
				case "svg":
					return "http://www.w3.org/2000/svg";
				case "math":
					return "http://www.w3.org/1998/Math/MathML";
				default:
					return "http://www.w3.org/1999/xhtml"
			}
		}

		function jt(t, e) {
			return null == t || "http://www.w3.org/1999/xhtml" === t ? Mt(e) : "http://www.w3.org/2000/svg" === t && "foreignObject" === e ? "http://www.w3.org/1999/xhtml" : t
		}
		var Ut, Ft = function(t) {
			return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, n, r, i) {
				MSApp.execUnsafeLocalFunction((function() {
					return t(e, n)
				}))
			} : t
		}((function(t, e) {
			if (t.namespaceURI !== Lt || "innerHTML" in t) t.innerHTML = e;
			else {
				for ((Ut = Ut || document.createElement("div")).innerHTML = "<svg>" + e.valueOf().toString() + "</svg>", e = Ut.firstChild; t.firstChild;) t.removeChild(t.firstChild);
				for (; e.firstChild;) t.appendChild(e.firstChild)
			}
		}));

		function Vt(t, e) {
			if (e) {
				var n = t.firstChild;
				if (n && n === t.lastChild && 3 === n.nodeType) return void(n.nodeValue = e)
			}
			t.textContent = e
		}

		function zt(t, e) {
			var n = {};
			return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n
		}
		var Bt = {
				animationend: zt("Animation", "AnimationEnd"),
				animationiteration: zt("Animation", "AnimationIteration"),
				animationstart: zt("Animation", "AnimationStart"),
				transitionend: zt("Transition", "TransitionEnd")
			},
			qt = {},
			Gt = {};

		function Wt(t) {
			if (qt[t]) return qt[t];
			if (!Bt[t]) return t;
			var e, n = Bt[t];
			for (e in n)
				if (n.hasOwnProperty(e) && e in Gt) return qt[t] = n[e];
			return t
		}
		N && (Gt = document.createElement("div").style, "AnimationEvent" in window || (delete Bt.animationend.animation, delete Bt.animationiteration.animation, delete Bt.animationstart.animation), "TransitionEvent" in window || delete Bt.transitionend.transition);
		var Ht = Wt("animationend"),
			Kt = Wt("animationiteration"),
			Qt = Wt("animationstart"),
			Xt = Wt("transitionend"),
			Yt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
			$t = new("function" === typeof WeakMap ? WeakMap : Map);

		function Jt(t) {
			var e = $t.get(t);
			return void 0 === e && (e = new Map, $t.set(t, e)), e
		}

		function Zt(t) {
			var e = t,
				n = t;
			if (t.alternate)
				for (; e.return;) e = e.return;
			else {
				t = e;
				do {
					0 !== (1026 & (e = t).effectTag) && (n = e.return), t = e.return
				} while (t)
			}
			return 3 === e.tag ? n : null
		}

		function te(t) {
			if (13 === t.tag) {
				var e = t.memoizedState;
				if (null === e && (null !== (t = t.alternate) && (e = t.memoizedState)), null !== e) return e.dehydrated
			}
			return null
		}

		function ee(t) {
			if (Zt(t) !== t) throw Error(a(188))
		}

		function ne(t) {
			if (!(t = function(t) {
					var e = t.alternate;
					if (!e) {
						if (null === (e = Zt(t))) throw Error(a(188));
						return e !== t ? null : t
					}
					for (var n = t, r = e;;) {
						var i = n.return;
						if (null === i) break;
						var o = i.alternate;
						if (null === o) {
							if (null !== (r = i.return)) {
								n = r;
								continue
							}
							break
						}
						if (i.child === o.child) {
							for (o = i.child; o;) {
								if (o === n) return ee(i), t;
								if (o === r) return ee(i), e;
								o = o.sibling
							}
							throw Error(a(188))
						}
						if (n.return !== r.return) n = i, r = o;
						else {
							for (var u = !1, s = i.child; s;) {
								if (s === n) {
									u = !0, n = i, r = o;
									break
								}
								if (s === r) {
									u = !0, r = i, n = o;
									break
								}
								s = s.sibling
							}
							if (!u) {
								for (s = o.child; s;) {
									if (s === n) {
										u = !0, n = o, r = i;
										break
									}
									if (s === r) {
										u = !0, r = o, n = i;
										break
									}
									s = s.sibling
								}
								if (!u) throw Error(a(189))
							}
						}
						if (n.alternate !== r) throw Error(a(190))
					}
					if (3 !== n.tag) throw Error(a(188));
					return n.stateNode.current === n ? t : e
				}(t))) return null;
			for (var e = t;;) {
				if (5 === e.tag || 6 === e.tag) return e;
				if (e.child) e.child.return = e, e = e.child;
				else {
					if (e === t) break;
					for (; !e.sibling;) {
						if (!e.return || e.return === t) return null;
						e = e.return
					}
					e.sibling.return = e.return, e = e.sibling
				}
			}
			return null
		}

		function re(t, e) {
			if (null == e) throw Error(a(30));
			return null == t ? e : Array.isArray(t) ? Array.isArray(e) ? (t.push.apply(t, e), t) : (t.push(e), t) : Array.isArray(e) ? [t].concat(e) : [t, e]
		}

		function ie(t, e, n) {
			Array.isArray(t) ? t.forEach(e, n) : t && e.call(n, t)
		}
		var oe = null;

		function ae(t) {
			if (t) {
				var e = t._dispatchListeners,
					n = t._dispatchInstances;
				if (Array.isArray(e))
					for (var r = 0; r < e.length && !t.isPropagationStopped(); r++) y(t, e[r], n[r]);
				else e && y(t, e, n);
				t._dispatchListeners = null, t._dispatchInstances = null, t.isPersistent() || t.constructor.release(t)
			}
		}

		function ue(t) {
			if (null !== t && (oe = re(oe, t)), t = oe, oe = null, t) {
				if (ie(t, ae), oe) throw Error(a(95));
				if (l) throw t = f, l = !1, f = null, t
			}
		}

		function se(t) {
			return (t = t.target || t.srcElement || window).correspondingUseElement && (t = t.correspondingUseElement), 3 === t.nodeType ? t.parentNode : t
		}

		function ce(t) {
			if (!N) return !1;
			var e = (t = "on" + t) in document;
			return e || ((e = document.createElement("div")).setAttribute(t, "return;"), e = "function" === typeof e[t]), e
		}
		var le = [];

		function fe(t) {
			t.topLevelType = null, t.nativeEvent = null, t.targetInst = null, t.ancestors.length = 0, 10 > le.length && le.push(t)
		}

		function he(t, e, n, r) {
			if (le.length) {
				var i = le.pop();
				return i.topLevelType = t, i.eventSystemFlags = r, i.nativeEvent = e, i.targetInst = n, i
			}
			return {
				topLevelType: t,
				eventSystemFlags: r,
				nativeEvent: e,
				targetInst: n,
				ancestors: []
			}
		}

		function pe(t) {
			var e = t.targetInst,
				n = e;
			do {
				if (!n) {
					t.ancestors.push(n);
					break
				}
				var r = n;
				if (3 === r.tag) r = r.stateNode.containerInfo;
				else {
					for (; r.return;) r = r.return;
					r = 3 !== r.tag ? null : r.stateNode.containerInfo
				}
				if (!r) break;
				5 !== (e = n.tag) && 6 !== e || t.ancestors.push(n), n = Nn(r)
			} while (n);
			for (n = 0; n < t.ancestors.length; n++) {
				e = t.ancestors[n];
				var i = se(t.nativeEvent);
				r = t.topLevelType;
				var o = t.nativeEvent,
					a = t.eventSystemFlags;
				0 === n && (a |= 64);
				for (var u = null, s = 0; s < E.length; s++) {
					var c = E[s];
					c && (c = c.extractEvents(r, e, o, i, a)) && (u = re(u, c))
				}
				ue(u)
			}
		}

		function de(t, e, n) {
			if (!n.has(t)) {
				switch (t) {
					case "scroll":
						Qe(e, "scroll", !0);
						break;
					case "focus":
					case "blur":
						Qe(e, "focus", !0), Qe(e, "blur", !0), n.set("blur", null), n.set("focus", null);
						break;
					case "cancel":
					case "close":
						ce(t) && Qe(e, t, !0);
						break;
					case "invalid":
					case "submit":
					case "reset":
						break;
					default:
						-1 === Yt.indexOf(t) && Ke(t, e)
				}
				n.set(t, null)
			}
		}
		var ve, me, ye, ge = !1,
			be = [],
			we = null,
			_e = null,
			Ee = null,
			Ie = new Map,
			Te = new Map,
			Se = [],
			ke = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),
			Ne = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");

		function Ae(t, e, n, r, i) {
			return {
				blockedOn: t,
				topLevelType: e,
				eventSystemFlags: 32 | n,
				nativeEvent: i,
				container: r
			}
		}

		function xe(t, e) {
			switch (t) {
				case "focus":
				case "blur":
					we = null;
					break;
				case "dragenter":
				case "dragleave":
					_e = null;
					break;
				case "mouseover":
				case "mouseout":
					Ee = null;
					break;
				case "pointerover":
				case "pointerout":
					Ie.delete(e.pointerId);
					break;
				case "gotpointercapture":
				case "lostpointercapture":
					Te.delete(e.pointerId)
			}
		}

		function Oe(t, e, n, r, i, o) {
			return null === t || t.nativeEvent !== o ? (t = Ae(e, n, r, i, o), null !== e && (null !== (e = An(e)) && me(e)), t) : (t.eventSystemFlags |= r, t)
		}

		function Ce(t) {
			var e = Nn(t.target);
			if (null !== e) {
				var n = Zt(e);
				if (null !== n)
					if (13 === (e = n.tag)) {
						if (null !== (e = te(n))) return t.blockedOn = e, void o.unstable_runWithPriority(t.priority, (function() {
							ye(n)
						}))
					} else if (3 === e && n.stateNode.hydrate) return void(t.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
			}
			t.blockedOn = null
		}

		function De(t) {
			if (null !== t.blockedOn) return !1;
			var e = Je(t.topLevelType, t.eventSystemFlags, t.container, t.nativeEvent);
			if (null !== e) {
				var n = An(e);
				return null !== n && me(n), t.blockedOn = e, !1
			}
			return !0
		}

		function Pe(t, e, n) {
			De(t) && n.delete(e)
		}

		function Re() {
			for (ge = !1; 0 < be.length;) {
				var t = be[0];
				if (null !== t.blockedOn) {
					null !== (t = An(t.blockedOn)) && ve(t);
					break
				}
				var e = Je(t.topLevelType, t.eventSystemFlags, t.container, t.nativeEvent);
				null !== e ? t.blockedOn = e : be.shift()
			}
			null !== we && De(we) && (we = null), null !== _e && De(_e) && (_e = null), null !== Ee && De(Ee) && (Ee = null), Ie.forEach(Pe), Te.forEach(Pe)
		}

		function Le(t, e) {
			t.blockedOn === e && (t.blockedOn = null, ge || (ge = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, Re)))
		}

		function Me(t) {
			function e(e) {
				return Le(e, t)
			}
			if (0 < be.length) {
				Le(be[0], t);
				for (var n = 1; n < be.length; n++) {
					var r = be[n];
					r.blockedOn === t && (r.blockedOn = null)
				}
			}
			for (null !== we && Le(we, t), null !== _e && Le(_e, t), null !== Ee && Le(Ee, t), Ie.forEach(e), Te.forEach(e), n = 0; n < Se.length; n++)(r = Se[n]).blockedOn === t && (r.blockedOn = null);
			for (; 0 < Se.length && null === (n = Se[0]).blockedOn;) Ce(n), null === n.blockedOn && Se.shift()
		}
		var je = {},
			Ue = new Map,
			Fe = new Map,
			Ve = ["abort", "abort", Ht, "animationEnd", Kt, "animationIteration", Qt, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", Xt, "transitionEnd", "waiting", "waiting"];

		function ze(t, e) {
			for (var n = 0; n < t.length; n += 2) {
				var r = t[n],
					i = t[n + 1],
					o = "on" + (i[0].toUpperCase() + i.slice(1));
				o = {
					phasedRegistrationNames: {
						bubbled: o,
						captured: o + "Capture"
					},
					dependencies: [r],
					eventPriority: e
				}, Fe.set(r, e), Ue.set(r, o), je[i] = o
			}
		}
		ze("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0), ze("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1), ze(Ve, 2);
		for (var Be = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), qe = 0; qe < Be.length; qe++) Fe.set(Be[qe], 0);
		var Ge = o.unstable_UserBlockingPriority,
			We = o.unstable_runWithPriority,
			He = !0;

		function Ke(t, e) {
			Qe(e, t, !1)
		}

		function Qe(t, e, n) {
			var r = Fe.get(e);
			switch (void 0 === r ? 2 : r) {
				case 0:
					r = Xe.bind(null, e, 1, t);
					break;
				case 1:
					r = Ye.bind(null, e, 1, t);
					break;
				default:
					r = $e.bind(null, e, 1, t)
			}
			n ? t.addEventListener(e, r, !0) : t.addEventListener(e, r, !1)
		}

		function Xe(t, e, n, r) {
			U || M();
			var i = $e,
				o = U;
			U = !0;
			try {
				L(i, t, e, n, r)
			} finally {
				(U = o) || V()
			}
		}

		function Ye(t, e, n, r) {
			We(Ge, $e.bind(null, t, e, n, r))
		}

		function $e(t, e, n, r) {
			if (He)
				if (0 < be.length && -1 < ke.indexOf(t)) t = Ae(null, t, e, n, r), be.push(t);
				else {
					var i = Je(t, e, n, r);
					if (null === i) xe(t, r);
					else if (-1 < ke.indexOf(t)) t = Ae(i, t, e, n, r), be.push(t);
					else if (! function(t, e, n, r, i) {
							switch (e) {
								case "focus":
									return we = Oe(we, t, e, n, r, i), !0;
								case "dragenter":
									return _e = Oe(_e, t, e, n, r, i), !0;
								case "mouseover":
									return Ee = Oe(Ee, t, e, n, r, i), !0;
								case "pointerover":
									var o = i.pointerId;
									return Ie.set(o, Oe(Ie.get(o) || null, t, e, n, r, i)), !0;
								case "gotpointercapture":
									return o = i.pointerId, Te.set(o, Oe(Te.get(o) || null, t, e, n, r, i)), !0
							}
							return !1
						}(i, t, e, n, r)) {
						xe(t, r), t = he(t, r, null, e);
						try {
							z(pe, t)
						} finally {
							fe(t)
						}
					}
				}
		}

		function Je(t, e, n, r) {
			if (null !== (n = Nn(n = se(r)))) {
				var i = Zt(n);
				if (null === i) n = null;
				else {
					var o = i.tag;
					if (13 === o) {
						if (null !== (n = te(i))) return n;
						n = null
					} else if (3 === o) {
						if (i.stateNode.hydrate) return 3 === i.tag ? i.stateNode.containerInfo : null;
						n = null
					} else i !== n && (n = null)
				}
			}
			t = he(t, r, n, e);
			try {
				z(pe, t)
			} finally {
				fe(t)
			}
			return null
		}
		var Ze = {
				animationIterationCount: !0,
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
				strokeWidth: !0
			},
			tn = ["Webkit", "ms", "Moz", "O"];

		function en(t, e, n) {
			return null == e || "boolean" === typeof e || "" === e ? "" : n || "number" !== typeof e || 0 === e || Ze.hasOwnProperty(t) && Ze[t] ? ("" + e).trim() : e + "px"
		}

		function nn(t, e) {
			for (var n in t = t.style, e)
				if (e.hasOwnProperty(n)) {
					var r = 0 === n.indexOf("--"),
						i = en(n, e[n], r);
					"float" === n && (n = "cssFloat"), r ? t.setProperty(n, i) : t[n] = i
				}
		}
		Object.keys(Ze).forEach((function(t) {
			tn.forEach((function(e) {
				e = e + t.charAt(0).toUpperCase() + t.substring(1), Ze[e] = Ze[t]
			}))
		}));
		var rn = i({
			menuitem: !0
		}, {
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
			wbr: !0
		});

		function on(t, e) {
			if (e) {
				if (rn[t] && (null != e.children || null != e.dangerouslySetInnerHTML)) throw Error(a(137, t, ""));
				if (null != e.dangerouslySetInnerHTML) {
					if (null != e.children) throw Error(a(60));
					if ("object" !== typeof e.dangerouslySetInnerHTML || !("__html" in e.dangerouslySetInnerHTML)) throw Error(a(61))
				}
				if (null != e.style && "object" !== typeof e.style) throw Error(a(62, ""))
			}
		}

		function an(t, e) {
			if (-1 === t.indexOf("-")) return "string" === typeof e.is;
			switch (t) {
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
					return !0
			}
		}
		var un = Rt;

		function sn(t, e) {
			var n = Jt(t = 9 === t.nodeType || 11 === t.nodeType ? t : t.ownerDocument);
			e = S[e];
			for (var r = 0; r < e.length; r++) de(e[r], t, n)
		}

		function cn() {}

		function ln(t) {
			if ("undefined" === typeof(t = t || ("undefined" !== typeof document ? document : void 0))) return null;
			try {
				return t.activeElement || t.body
			} catch (e) {
				return t.body
			}
		}

		function fn(t) {
			for (; t && t.firstChild;) t = t.firstChild;
			return t
		}

		function hn(t, e) {
			var n, r = fn(t);
			for (t = 0; r;) {
				if (3 === r.nodeType) {
					if (n = t + r.textContent.length, t <= e && n >= e) return {
						node: r,
						offset: e - t
					};
					t = n
				}
				t: {
					for (; r;) {
						if (r.nextSibling) {
							r = r.nextSibling;
							break t
						}
						r = r.parentNode
					}
					r = void 0
				}
				r = fn(r)
			}
		}

		function pn() {
			for (var t = window, e = ln(); e instanceof t.HTMLIFrameElement;) {
				try {
					var n = "string" === typeof e.contentWindow.location.href
				} catch (r) {
					n = !1
				}
				if (!n) break;
				e = ln((t = e.contentWindow).document)
			}
			return e
		}

		function dn(t) {
			var e = t && t.nodeName && t.nodeName.toLowerCase();
			return e && ("input" === e && ("text" === t.type || "search" === t.type || "tel" === t.type || "url" === t.type || "password" === t.type) || "textarea" === e || "true" === t.contentEditable)
		}
		var vn = null,
			mn = null;

		function yn(t, e) {
			switch (t) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					return !!e.autoFocus
			}
			return !1
		}

		function gn(t, e) {
			return "textarea" === t || "option" === t || "noscript" === t || "string" === typeof e.children || "number" === typeof e.children || "object" === typeof e.dangerouslySetInnerHTML && null !== e.dangerouslySetInnerHTML && null != e.dangerouslySetInnerHTML.__html
		}
		var bn = "function" === typeof setTimeout ? setTimeout : void 0,
			wn = "function" === typeof clearTimeout ? clearTimeout : void 0;

		function _n(t) {
			for (; null != t; t = t.nextSibling) {
				var e = t.nodeType;
				if (1 === e || 3 === e) break
			}
			return t
		}

		function En(t) {
			t = t.previousSibling;
			for (var e = 0; t;) {
				if (8 === t.nodeType) {
					var n = t.data;
					if ("$" === n || "$!" === n || "$?" === n) {
						if (0 === e) return t;
						e--
					} else "/$" === n && e++
				}
				t = t.previousSibling
			}
			return null
		}
		var In = Math.random().toString(36).slice(2),
			Tn = "__reactInternalInstance$" + In,
			Sn = "__reactEventHandlers$" + In,
			kn = "__reactContainere$" + In;

		function Nn(t) {
			var e = t[Tn];
			if (e) return e;
			for (var n = t.parentNode; n;) {
				if (e = n[kn] || n[Tn]) {
					if (n = e.alternate, null !== e.child || null !== n && null !== n.child)
						for (t = En(t); null !== t;) {
							if (n = t[Tn]) return n;
							t = En(t)
						}
					return e
				}
				n = (t = n).parentNode
			}
			return null
		}

		function An(t) {
			return !(t = t[Tn] || t[kn]) || 5 !== t.tag && 6 !== t.tag && 13 !== t.tag && 3 !== t.tag ? null : t
		}

		function xn(t) {
			if (5 === t.tag || 6 === t.tag) return t.stateNode;
			throw Error(a(33))
		}

		function On(t) {
			return t[Sn] || null
		}

		function Cn(t) {
			do {
				t = t.return
			} while (t && 5 !== t.tag);
			return t || null
		}

		function Dn(t, e) {
			var n = t.stateNode;
			if (!n) return null;
			var r = d(n);
			if (!r) return null;
			n = r[e];
			t: switch (e) {
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
					(r = !r.disabled) || (r = !("button" === (t = t.type) || "input" === t || "select" === t || "textarea" === t)), t = !r;
					break t;
				default:
					t = !1
			}
			if (t) return null;
			if (n && "function" !== typeof n) throw Error(a(231, e, typeof n));
			return n
		}

		function Pn(t, e, n) {
			(e = Dn(t, n.dispatchConfig.phasedRegistrationNames[e])) && (n._dispatchListeners = re(n._dispatchListeners, e), n._dispatchInstances = re(n._dispatchInstances, t))
		}

		function Rn(t) {
			if (t && t.dispatchConfig.phasedRegistrationNames) {
				for (var e = t._targetInst, n = []; e;) n.push(e), e = Cn(e);
				for (e = n.length; 0 < e--;) Pn(n[e], "captured", t);
				for (e = 0; e < n.length; e++) Pn(n[e], "bubbled", t)
			}
		}

		function Ln(t, e, n) {
			t && n && n.dispatchConfig.registrationName && (e = Dn(t, n.dispatchConfig.registrationName)) && (n._dispatchListeners = re(n._dispatchListeners, e), n._dispatchInstances = re(n._dispatchInstances, t))
		}

		function Mn(t) {
			t && t.dispatchConfig.registrationName && Ln(t._targetInst, null, t)
		}

		function jn(t) {
			ie(t, Rn)
		}
		var Un = null,
			Fn = null,
			Vn = null;

		function zn() {
			if (Vn) return Vn;
			var t, e, n = Fn,
				r = n.length,
				i = "value" in Un ? Un.value : Un.textContent,
				o = i.length;
			for (t = 0; t < r && n[t] === i[t]; t++);
			var a = r - t;
			for (e = 1; e <= a && n[r - e] === i[o - e]; e++);
			return Vn = i.slice(t, 1 < e ? 1 - e : void 0)
		}

		function Bn() {
			return !0
		}

		function qn() {
			return !1
		}

		function Gn(t, e, n, r) {
			for (var i in this.dispatchConfig = t, this._targetInst = e, this.nativeEvent = n, t = this.constructor.Interface) t.hasOwnProperty(i) && ((e = t[i]) ? this[i] = e(n) : "target" === i ? this.target = r : this[i] = n[i]);
			return this.isDefaultPrevented = (null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue) ? Bn : qn, this.isPropagationStopped = qn, this
		}

		function Wn(t, e, n, r) {
			if (this.eventPool.length) {
				var i = this.eventPool.pop();
				return this.call(i, t, e, n, r), i
			}
			return new this(t, e, n, r)
		}

		function Hn(t) {
			if (!(t instanceof this)) throw Error(a(279));
			t.destructor(), 10 > this.eventPool.length && this.eventPool.push(t)
		}

		function Kn(t) {
			t.eventPool = [], t.getPooled = Wn, t.release = Hn
		}
		i(Gn.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var t = this.nativeEvent;
				t && (t.preventDefault ? t.preventDefault() : "unknown" !== typeof t.returnValue && (t.returnValue = !1), this.isDefaultPrevented = Bn)
			},
			stopPropagation: function() {
				var t = this.nativeEvent;
				t && (t.stopPropagation ? t.stopPropagation() : "unknown" !== typeof t.cancelBubble && (t.cancelBubble = !0), this.isPropagationStopped = Bn)
			},
			persist: function() {
				this.isPersistent = Bn
			},
			isPersistent: qn,
			destructor: function() {
				var t, e = this.constructor.Interface;
				for (t in e) this[t] = null;
				this.nativeEvent = this._targetInst = this.dispatchConfig = null, this.isPropagationStopped = this.isDefaultPrevented = qn, this._dispatchInstances = this._dispatchListeners = null
			}
		}), Gn.Interface = {
			type: null,
			target: null,
			currentTarget: function() {
				return null
			},
			eventPhase: null,
			bubbles: null,
			cancelable: null,
			timeStamp: function(t) {
				return t.timeStamp || Date.now()
			},
			defaultPrevented: null,
			isTrusted: null
		}, Gn.extend = function(t) {
			function e() {}

			function n() {
				return r.apply(this, arguments)
			}
			var r = this;
			e.prototype = r.prototype;
			var o = new e;
			return i(o, n.prototype), n.prototype = o, n.prototype.constructor = n, n.Interface = i({}, r.Interface, t), n.extend = r.extend, Kn(n), n
		}, Kn(Gn);
		var Qn = Gn.extend({
				data: null
			}),
			Xn = Gn.extend({
				data: null
			}),
			Yn = [9, 13, 27, 32],
			$n = N && "CompositionEvent" in window,
			Jn = null;
		N && "documentMode" in document && (Jn = document.documentMode);
		var Zn = N && "TextEvent" in window && !Jn,
			tr = N && (!$n || Jn && 8 < Jn && 11 >= Jn),
			er = String.fromCharCode(32),
			nr = {
				beforeInput: {
					phasedRegistrationNames: {
						bubbled: "onBeforeInput",
						captured: "onBeforeInputCapture"
					},
					dependencies: ["compositionend", "keypress", "textInput", "paste"]
				},
				compositionEnd: {
					phasedRegistrationNames: {
						bubbled: "onCompositionEnd",
						captured: "onCompositionEndCapture"
					},
					dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
				},
				compositionStart: {
					phasedRegistrationNames: {
						bubbled: "onCompositionStart",
						captured: "onCompositionStartCapture"
					},
					dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
				},
				compositionUpdate: {
					phasedRegistrationNames: {
						bubbled: "onCompositionUpdate",
						captured: "onCompositionUpdateCapture"
					},
					dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
				}
			},
			rr = !1;

		function ir(t, e) {
			switch (t) {
				case "keyup":
					return -1 !== Yn.indexOf(e.keyCode);
				case "keydown":
					return 229 !== e.keyCode;
				case "keypress":
				case "mousedown":
				case "blur":
					return !0;
				default:
					return !1
			}
		}

		function or(t) {
			return "object" === typeof(t = t.detail) && "data" in t ? t.data : null
		}
		var ar = !1;
		var ur = {
				eventTypes: nr,
				extractEvents: function(t, e, n, r) {
					var i;
					if ($n) t: {
						switch (t) {
							case "compositionstart":
								var o = nr.compositionStart;
								break t;
							case "compositionend":
								o = nr.compositionEnd;
								break t;
							case "compositionupdate":
								o = nr.compositionUpdate;
								break t
						}
						o = void 0
					}
					else ar ? ir(t, n) && (o = nr.compositionEnd) : "keydown" === t && 229 === n.keyCode && (o = nr.compositionStart);
					return o ? (tr && "ko" !== n.locale && (ar || o !== nr.compositionStart ? o === nr.compositionEnd && ar && (i = zn()) : (Fn = "value" in (Un = r) ? Un.value : Un.textContent, ar = !0)), o = Qn.getPooled(o, e, n, r), i ? o.data = i : null !== (i = or(n)) && (o.data = i), jn(o), i = o) : i = null, (t = Zn ? function(t, e) {
						switch (t) {
							case "compositionend":
								return or(e);
							case "keypress":
								return 32 !== e.which ? null : (rr = !0, er);
							case "textInput":
								return (t = e.data) === er && rr ? null : t;
							default:
								return null
						}
					}(t, n) : function(t, e) {
						if (ar) return "compositionend" === t || !$n && ir(t, e) ? (t = zn(), Vn = Fn = Un = null, ar = !1, t) : null;
						switch (t) {
							case "paste":
								return null;
							case "keypress":
								if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
									if (e.char && 1 < e.char.length) return e.char;
									if (e.which) return String.fromCharCode(e.which)
								}
								return null;
							case "compositionend":
								return tr && "ko" !== e.locale ? null : e.data;
							default:
								return null
						}
					}(t, n)) ? ((e = Xn.getPooled(nr.beforeInput, e, n, r)).data = t, jn(e)) : e = null, null === i ? e : null === e ? i : [i, e]
				}
			},
			sr = {
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
				week: !0
			};

		function cr(t) {
			var e = t && t.nodeName && t.nodeName.toLowerCase();
			return "input" === e ? !!sr[t.type] : "textarea" === e
		}
		var lr = {
			change: {
				phasedRegistrationNames: {
					bubbled: "onChange",
					captured: "onChangeCapture"
				},
				dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
			}
		};

		function fr(t, e, n) {
			return (t = Gn.getPooled(lr.change, t, e, n)).type = "change", D(n), jn(t), t
		}
		var hr = null,
			pr = null;

		function dr(t) {
			ue(t)
		}

		function vr(t) {
			if (_t(xn(t))) return t
		}

		function mr(t, e) {
			if ("change" === t) return e
		}
		var yr = !1;

		function gr() {
			hr && (hr.detachEvent("onpropertychange", br), pr = hr = null)
		}

		function br(t) {
			if ("value" === t.propertyName && vr(pr))
				if (t = fr(pr, t, se(t)), U) ue(t);
				else {
					U = !0;
					try {
						R(dr, t)
					} finally {
						U = !1, V()
					}
				}
		}

		function wr(t, e, n) {
			"focus" === t ? (gr(), pr = n, (hr = e).attachEvent("onpropertychange", br)) : "blur" === t && gr()
		}

		function _r(t) {
			if ("selectionchange" === t || "keyup" === t || "keydown" === t) return vr(pr)
		}

		function Er(t, e) {
			if ("click" === t) return vr(e)
		}

		function Ir(t, e) {
			if ("input" === t || "change" === t) return vr(e)
		}
		N && (yr = ce("input") && (!document.documentMode || 9 < document.documentMode));
		var Tr = {
				eventTypes: lr,
				_isInputEventSupported: yr,
				extractEvents: function(t, e, n, r) {
					var i = e ? xn(e) : window,
						o = i.nodeName && i.nodeName.toLowerCase();
					if ("select" === o || "input" === o && "file" === i.type) var a = mr;
					else if (cr(i))
						if (yr) a = Ir;
						else {
							a = _r;
							var u = wr
						}
					else(o = i.nodeName) && "input" === o.toLowerCase() && ("checkbox" === i.type || "radio" === i.type) && (a = Er);
					if (a && (a = a(t, e))) return fr(a, n, r);
					u && u(t, i, e), "blur" === t && (t = i._wrapperState) && t.controlled && "number" === i.type && Nt(i, "number", i.value)
				}
			},
			Sr = Gn.extend({
				view: null,
				detail: null
			}),
			kr = {
				Alt: "altKey",
				Control: "ctrlKey",
				Meta: "metaKey",
				Shift: "shiftKey"
			};

		function Nr(t) {
			var e = this.nativeEvent;
			return e.getModifierState ? e.getModifierState(t) : !!(t = kr[t]) && !!e[t]
		}

		function Ar() {
			return Nr
		}
		var xr = 0,
			Or = 0,
			Cr = !1,
			Dr = !1,
			Pr = Sr.extend({
				screenX: null,
				screenY: null,
				clientX: null,
				clientY: null,
				pageX: null,
				pageY: null,
				ctrlKey: null,
				shiftKey: null,
				altKey: null,
				metaKey: null,
				getModifierState: Ar,
				button: null,
				buttons: null,
				relatedTarget: function(t) {
					return t.relatedTarget || (t.fromElement === t.srcElement ? t.toElement : t.fromElement)
				},
				movementX: function(t) {
					if ("movementX" in t) return t.movementX;
					var e = xr;
					return xr = t.screenX, Cr ? "mousemove" === t.type ? t.screenX - e : 0 : (Cr = !0, 0)
				},
				movementY: function(t) {
					if ("movementY" in t) return t.movementY;
					var e = Or;
					return Or = t.screenY, Dr ? "mousemove" === t.type ? t.screenY - e : 0 : (Dr = !0, 0)
				}
			}),
			Rr = Pr.extend({
				pointerId: null,
				width: null,
				height: null,
				pressure: null,
				tangentialPressure: null,
				tiltX: null,
				tiltY: null,
				twist: null,
				pointerType: null,
				isPrimary: null
			}),
			Lr = {
				mouseEnter: {
					registrationName: "onMouseEnter",
					dependencies: ["mouseout", "mouseover"]
				},
				mouseLeave: {
					registrationName: "onMouseLeave",
					dependencies: ["mouseout", "mouseover"]
				},
				pointerEnter: {
					registrationName: "onPointerEnter",
					dependencies: ["pointerout", "pointerover"]
				},
				pointerLeave: {
					registrationName: "onPointerLeave",
					dependencies: ["pointerout", "pointerover"]
				}
			},
			Mr = {
				eventTypes: Lr,
				extractEvents: function(t, e, n, r, i) {
					var o = "mouseover" === t || "pointerover" === t,
						a = "mouseout" === t || "pointerout" === t;
					if (o && 0 === (32 & i) && (n.relatedTarget || n.fromElement) || !a && !o) return null;
					(o = r.window === r ? r : (o = r.ownerDocument) ? o.defaultView || o.parentWindow : window, a) ? (a = e, null !== (e = (e = n.relatedTarget || n.toElement) ? Nn(e) : null) && (e !== Zt(e) || 5 !== e.tag && 6 !== e.tag) && (e = null)) : a = null;
					if (a === e) return null;
					if ("mouseout" === t || "mouseover" === t) var u = Pr,
						s = Lr.mouseLeave,
						c = Lr.mouseEnter,
						l = "mouse";
					else "pointerout" !== t && "pointerover" !== t || (u = Rr, s = Lr.pointerLeave, c = Lr.pointerEnter, l = "pointer");
					if (t = null == a ? o : xn(a), o = null == e ? o : xn(e), (s = u.getPooled(s, a, n, r)).type = l + "leave", s.target = t, s.relatedTarget = o, (n = u.getPooled(c, e, n, r)).type = l + "enter", n.target = o, n.relatedTarget = t, l = e, (r = a) && l) t: {
						for (c = l, a = 0, t = u = r; t; t = Cn(t)) a++;
						for (t = 0, e = c; e; e = Cn(e)) t++;
						for (; 0 < a - t;) u = Cn(u),
						a--;
						for (; 0 < t - a;) c = Cn(c),
						t--;
						for (; a--;) {
							if (u === c || u === c.alternate) break t;
							u = Cn(u), c = Cn(c)
						}
						u = null
					}
					else u = null;
					for (c = u, u = []; r && r !== c && (null === (a = r.alternate) || a !== c);) u.push(r), r = Cn(r);
					for (r = []; l && l !== c && (null === (a = l.alternate) || a !== c);) r.push(l), l = Cn(l);
					for (l = 0; l < u.length; l++) Ln(u[l], "bubbled", s);
					for (l = r.length; 0 < l--;) Ln(r[l], "captured", n);
					return 0 === (64 & i) ? [s] : [s, n]
				}
			};
		var jr = "function" === typeof Object.is ? Object.is : function(t, e) {
				return t === e && (0 !== t || 1 / t === 1 / e) || t !== t && e !== e
			},
			Ur = Object.prototype.hasOwnProperty;

		function Fr(t, e) {
			if (jr(t, e)) return !0;
			if ("object" !== typeof t || null === t || "object" !== typeof e || null === e) return !1;
			var n = Object.keys(t),
				r = Object.keys(e);
			if (n.length !== r.length) return !1;
			for (r = 0; r < n.length; r++)
				if (!Ur.call(e, n[r]) || !jr(t[n[r]], e[n[r]])) return !1;
			return !0
		}
		var Vr = N && "documentMode" in document && 11 >= document.documentMode,
			zr = {
				select: {
					phasedRegistrationNames: {
						bubbled: "onSelect",
						captured: "onSelectCapture"
					},
					dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
				}
			},
			Br = null,
			qr = null,
			Gr = null,
			Wr = !1;

		function Hr(t, e) {
			var n = e.window === e ? e.document : 9 === e.nodeType ? e : e.ownerDocument;
			return Wr || null == Br || Br !== ln(n) ? null : ("selectionStart" in (n = Br) && dn(n) ? n = {
				start: n.selectionStart,
				end: n.selectionEnd
			} : n = {
				anchorNode: (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection()).anchorNode,
				anchorOffset: n.anchorOffset,
				focusNode: n.focusNode,
				focusOffset: n.focusOffset
			}, Gr && Fr(Gr, n) ? null : (Gr = n, (t = Gn.getPooled(zr.select, qr, t, e)).type = "select", t.target = Br, jn(t), t))
		}
		var Kr = {
				eventTypes: zr,
				extractEvents: function(t, e, n, r, i, o) {
					if (!(o = !(i = o || (r.window === r ? r.document : 9 === r.nodeType ? r : r.ownerDocument)))) {
						t: {
							i = Jt(i),
							o = S.onSelect;
							for (var a = 0; a < o.length; a++)
								if (!i.has(o[a])) {
									i = !1;
									break t
								} i = !0
						}
						o = !i
					}
					if (o) return null;
					switch (i = e ? xn(e) : window, t) {
						case "focus":
							(cr(i) || "true" === i.contentEditable) && (Br = i, qr = e, Gr = null);
							break;
						case "blur":
							Gr = qr = Br = null;
							break;
						case "mousedown":
							Wr = !0;
							break;
						case "contextmenu":
						case "mouseup":
						case "dragend":
							return Wr = !1, Hr(n, r);
						case "selectionchange":
							if (Vr) break;
						case "keydown":
						case "keyup":
							return Hr(n, r)
					}
					return null
				}
			},
			Qr = Gn.extend({
				animationName: null,
				elapsedTime: null,
				pseudoElement: null
			}),
			Xr = Gn.extend({
				clipboardData: function(t) {
					return "clipboardData" in t ? t.clipboardData : window.clipboardData
				}
			}),
			Yr = Sr.extend({
				relatedTarget: null
			});

		function $r(t) {
			var e = t.keyCode;
			return "charCode" in t ? 0 === (t = t.charCode) && 13 === e && (t = 13) : t = e, 10 === t && (t = 13), 32 <= t || 13 === t ? t : 0
		}
		var Jr = {
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
				MozPrintableKey: "Unidentified"
			},
			Zr = {
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
				224: "Meta"
			},
			ti = Sr.extend({
				key: function(t) {
					if (t.key) {
						var e = Jr[t.key] || t.key;
						if ("Unidentified" !== e) return e
					}
					return "keypress" === t.type ? 13 === (t = $r(t)) ? "Enter" : String.fromCharCode(t) : "keydown" === t.type || "keyup" === t.type ? Zr[t.keyCode] || "Unidentified" : ""
				},
				location: null,
				ctrlKey: null,
				shiftKey: null,
				altKey: null,
				metaKey: null,
				repeat: null,
				locale: null,
				getModifierState: Ar,
				charCode: function(t) {
					return "keypress" === t.type ? $r(t) : 0
				},
				keyCode: function(t) {
					return "keydown" === t.type || "keyup" === t.type ? t.keyCode : 0
				},
				which: function(t) {
					return "keypress" === t.type ? $r(t) : "keydown" === t.type || "keyup" === t.type ? t.keyCode : 0
				}
			}),
			ei = Pr.extend({
				dataTransfer: null
			}),
			ni = Sr.extend({
				touches: null,
				targetTouches: null,
				changedTouches: null,
				altKey: null,
				metaKey: null,
				ctrlKey: null,
				shiftKey: null,
				getModifierState: Ar
			}),
			ri = Gn.extend({
				propertyName: null,
				elapsedTime: null,
				pseudoElement: null
			}),
			ii = Pr.extend({
				deltaX: function(t) {
					return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
				},
				deltaY: function(t) {
					return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
				},
				deltaZ: null,
				deltaMode: null
			}),
			oi = {
				eventTypes: je,
				extractEvents: function(t, e, n, r) {
					var i = Ue.get(t);
					if (!i) return null;
					switch (t) {
						case "keypress":
							if (0 === $r(n)) return null;
						case "keydown":
						case "keyup":
							t = ti;
							break;
						case "blur":
						case "focus":
							t = Yr;
							break;
						case "click":
							if (2 === n.button) return null;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							t = Pr;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							t = ei;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							t = ni;
							break;
						case Ht:
						case Kt:
						case Qt:
							t = Qr;
							break;
						case Xt:
							t = ri;
							break;
						case "scroll":
							t = Sr;
							break;
						case "wheel":
							t = ii;
							break;
						case "copy":
						case "cut":
						case "paste":
							t = Xr;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							t = Rr;
							break;
						default:
							t = Gn
					}
					return jn(e = t.getPooled(i, e, n, r)), e
				}
			};
		if (g) throw Error(a(101));
		g = Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")), w(), d = On, v = An, m = xn, k({
			SimpleEventPlugin: oi,
			EnterLeaveEventPlugin: Mr,
			ChangeEventPlugin: Tr,
			SelectEventPlugin: Kr,
			BeforeInputEventPlugin: ur
		});
		var ai = [],
			ui = -1;

		function si(t) {
			0 > ui || (t.current = ai[ui], ai[ui] = null, ui--)
		}

		function ci(t, e) {
			ui++, ai[ui] = t.current, t.current = e
		}
		var li = {},
			fi = {
				current: li
			},
			hi = {
				current: !1
			},
			pi = li;

		function di(t, e) {
			var n = t.type.contextTypes;
			if (!n) return li;
			var r = t.stateNode;
			if (r && r.__reactInternalMemoizedUnmaskedChildContext === e) return r.__reactInternalMemoizedMaskedChildContext;
			var i, o = {};
			for (i in n) o[i] = e[i];
			return r && ((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = e, t.__reactInternalMemoizedMaskedChildContext = o), o
		}

		function vi(t) {
			return null !== (t = t.childContextTypes) && void 0 !== t
		}

		function mi() {
			si(hi), si(fi)
		}

		function yi(t, e, n) {
			if (fi.current !== li) throw Error(a(168));
			ci(fi, e), ci(hi, n)
		}

		function gi(t, e, n) {
			var r = t.stateNode;
			if (t = e.childContextTypes, "function" !== typeof r.getChildContext) return n;
			for (var o in r = r.getChildContext())
				if (!(o in t)) throw Error(a(108, mt(e) || "Unknown", o));
			return i({}, n, {}, r)
		}

		function bi(t) {
			return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || li, pi = fi.current, ci(fi, t), ci(hi, hi.current), !0
		}

		function wi(t, e, n) {
			var r = t.stateNode;
			if (!r) throw Error(a(169));
			n ? (t = gi(t, e, pi), r.__reactInternalMemoizedMergedChildContext = t, si(hi), si(fi), ci(fi, t)) : si(hi), ci(hi, n)
		}
		var _i = o.unstable_runWithPriority,
			Ei = o.unstable_scheduleCallback,
			Ii = o.unstable_cancelCallback,
			Ti = o.unstable_requestPaint,
			Si = o.unstable_now,
			ki = o.unstable_getCurrentPriorityLevel,
			Ni = o.unstable_ImmediatePriority,
			Ai = o.unstable_UserBlockingPriority,
			xi = o.unstable_NormalPriority,
			Oi = o.unstable_LowPriority,
			Ci = o.unstable_IdlePriority,
			Di = {},
			Pi = o.unstable_shouldYield,
			Ri = void 0 !== Ti ? Ti : function() {},
			Li = null,
			Mi = null,
			ji = !1,
			Ui = Si(),
			Fi = 1e4 > Ui ? Si : function() {
				return Si() - Ui
			};

		function Vi() {
			switch (ki()) {
				case Ni:
					return 99;
				case Ai:
					return 98;
				case xi:
					return 97;
				case Oi:
					return 96;
				case Ci:
					return 95;
				default:
					throw Error(a(332))
			}
		}

		function zi(t) {
			switch (t) {
				case 99:
					return Ni;
				case 98:
					return Ai;
				case 97:
					return xi;
				case 96:
					return Oi;
				case 95:
					return Ci;
				default:
					throw Error(a(332))
			}
		}

		function Bi(t, e) {
			return t = zi(t), _i(t, e)
		}

		function qi(t, e, n) {
			return t = zi(t), Ei(t, e, n)
		}

		function Gi(t) {
			return null === Li ? (Li = [t], Mi = Ei(Ni, Hi)) : Li.push(t), Di
		}

		function Wi() {
			if (null !== Mi) {
				var t = Mi;
				Mi = null, Ii(t)
			}
			Hi()
		}

		function Hi() {
			if (!ji && null !== Li) {
				ji = !0;
				var t = 0;
				try {
					var e = Li;
					Bi(99, (function() {
						for (; t < e.length; t++) {
							var n = e[t];
							do {
								n = n(!0)
							} while (null !== n)
						}
					})), Li = null
				} catch (n) {
					throw null !== Li && (Li = Li.slice(t + 1)), Ei(Ni, Wi), n
				} finally {
					ji = !1
				}
			}
		}

		function Ki(t, e, n) {
			return 1073741821 - (1 + ((1073741821 - t + e / 10) / (n /= 10) | 0)) * n
		}

		function Qi(t, e) {
			if (t && t.defaultProps)
				for (var n in e = i({}, e), t = t.defaultProps) void 0 === e[n] && (e[n] = t[n]);
			return e
		}
		var Xi = {
				current: null
			},
			Yi = null,
			$i = null,
			Ji = null;

		function Zi() {
			Ji = $i = Yi = null
		}

		function to(t) {
			var e = Xi.current;
			si(Xi), t.type._context._currentValue = e
		}

		function eo(t, e) {
			for (; null !== t;) {
				var n = t.alternate;
				if (t.childExpirationTime < e) t.childExpirationTime = e, null !== n && n.childExpirationTime < e && (n.childExpirationTime = e);
				else {
					if (!(null !== n && n.childExpirationTime < e)) break;
					n.childExpirationTime = e
				}
				t = t.return
			}
		}

		function no(t, e) {
			Yi = t, Ji = $i = null, null !== (t = t.dependencies) && null !== t.firstContext && (t.expirationTime >= e && (Oa = !0), t.firstContext = null)
		}

		function ro(t, e) {
			if (Ji !== t && !1 !== e && 0 !== e)
				if ("number" === typeof e && 1073741823 !== e || (Ji = t, e = 1073741823), e = {
						context: t,
						observedBits: e,
						next: null
					}, null === $i) {
					if (null === Yi) throw Error(a(308));
					$i = e, Yi.dependencies = {
						expirationTime: 0,
						firstContext: e,
						responders: null
					}
				} else $i = $i.next = e;
			return t._currentValue
		}
		var io = !1;

		function oo(t) {
			t.updateQueue = {
				baseState: t.memoizedState,
				baseQueue: null,
				shared: {
					pending: null
				},
				effects: null
			}
		}

		function ao(t, e) {
			t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
				baseState: t.baseState,
				baseQueue: t.baseQueue,
				shared: t.shared,
				effects: t.effects
			})
		}

		function uo(t, e) {
			return (t = {
				expirationTime: t,
				suspenseConfig: e,
				tag: 0,
				payload: null,
				callback: null,
				next: null
			}).next = t
		}

		function so(t, e) {
			if (null !== (t = t.updateQueue)) {
				var n = (t = t.shared).pending;
				null === n ? e.next = e : (e.next = n.next, n.next = e), t.pending = e
			}
		}

		function co(t, e) {
			var n = t.alternate;
			null !== n && ao(n, t), null === (n = (t = t.updateQueue).baseQueue) ? (t.baseQueue = e.next = e, e.next = e) : (e.next = n.next, n.next = e)
		}

		function lo(t, e, n, r) {
			var o = t.updateQueue;
			io = !1;
			var a = o.baseQueue,
				u = o.shared.pending;
			if (null !== u) {
				if (null !== a) {
					var s = a.next;
					a.next = u.next, u.next = s
				}
				a = u, o.shared.pending = null, null !== (s = t.alternate) && (null !== (s = s.updateQueue) && (s.baseQueue = u))
			}
			if (null !== a) {
				s = a.next;
				var c = o.baseState,
					l = 0,
					f = null,
					h = null,
					p = null;
				if (null !== s)
					for (var d = s;;) {
						if ((u = d.expirationTime) < r) {
							var v = {
								expirationTime: d.expirationTime,
								suspenseConfig: d.suspenseConfig,
								tag: d.tag,
								payload: d.payload,
								callback: d.callback,
								next: null
							};
							null === p ? (h = p = v, f = c) : p = p.next = v, u > l && (l = u)
						} else {
							null !== p && (p = p.next = {
								expirationTime: 1073741823,
								suspenseConfig: d.suspenseConfig,
								tag: d.tag,
								payload: d.payload,
								callback: d.callback,
								next: null
							}), os(u, d.suspenseConfig);
							t: {
								var m = t,
									y = d;
								switch (u = e, v = n, y.tag) {
									case 1:
										if ("function" === typeof(m = y.payload)) {
											c = m.call(v, c, u);
											break t
										}
										c = m;
										break t;
									case 3:
										m.effectTag = -4097 & m.effectTag | 64;
									case 0:
										if (null === (u = "function" === typeof(m = y.payload) ? m.call(v, c, u) : m) || void 0 === u) break t;
										c = i({}, c, u);
										break t;
									case 2:
										io = !0
								}
							}
							null !== d.callback && (t.effectTag |= 32, null === (u = o.effects) ? o.effects = [d] : u.push(d))
						}
						if (null === (d = d.next) || d === s) {
							if (null === (u = o.shared.pending)) break;
							d = a.next = u.next, u.next = s, o.baseQueue = a = u, o.shared.pending = null
						}
					}
				null === p ? f = c : p.next = h, o.baseState = f, o.baseQueue = p, as(l), t.expirationTime = l, t.memoizedState = c
			}
		}

		function fo(t, e, n) {
			if (t = e.effects, e.effects = null, null !== t)
				for (e = 0; e < t.length; e++) {
					var r = t[e],
						i = r.callback;
					if (null !== i) {
						if (r.callback = null, r = i, i = n, "function" !== typeof r) throw Error(a(191, r));
						r.call(i)
					}
				}
		}
		var ho = Y.ReactCurrentBatchConfig,
			po = (new r.Component).refs;

		function vo(t, e, n, r) {
			n = null === (n = n(r, e = t.memoizedState)) || void 0 === n ? e : i({}, e, n), t.memoizedState = n, 0 === t.expirationTime && (t.updateQueue.baseState = n)
		}
		var mo = {
			isMounted: function(t) {
				return !!(t = t._reactInternalFiber) && Zt(t) === t
			},
			enqueueSetState: function(t, e, n) {
				t = t._reactInternalFiber;
				var r = Hu(),
					i = ho.suspense;
				(i = uo(r = Ku(r, t, i), i)).payload = e, void 0 !== n && null !== n && (i.callback = n), so(t, i), Qu(t, r)
			},
			enqueueReplaceState: function(t, e, n) {
				t = t._reactInternalFiber;
				var r = Hu(),
					i = ho.suspense;
				(i = uo(r = Ku(r, t, i), i)).tag = 1, i.payload = e, void 0 !== n && null !== n && (i.callback = n), so(t, i), Qu(t, r)
			},
			enqueueForceUpdate: function(t, e) {
				t = t._reactInternalFiber;
				var n = Hu(),
					r = ho.suspense;
				(r = uo(n = Ku(n, t, r), r)).tag = 2, void 0 !== e && null !== e && (r.callback = e), so(t, r), Qu(t, n)
			}
		};

		function yo(t, e, n, r, i, o, a) {
			return "function" === typeof(t = t.stateNode).shouldComponentUpdate ? t.shouldComponentUpdate(r, o, a) : !e.prototype || !e.prototype.isPureReactComponent || (!Fr(n, r) || !Fr(i, o))
		}

		function go(t, e, n) {
			var r = !1,
				i = li,
				o = e.contextType;
			return "object" === typeof o && null !== o ? o = ro(o) : (i = vi(e) ? pi : fi.current, o = (r = null !== (r = e.contextTypes) && void 0 !== r) ? di(t, i) : li), e = new e(n, o), t.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, e.updater = mo, t.stateNode = e, e._reactInternalFiber = t, r && ((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = i, t.__reactInternalMemoizedMaskedChildContext = o), e
		}

		function bo(t, e, n, r) {
			t = e.state, "function" === typeof e.componentWillReceiveProps && e.componentWillReceiveProps(n, r), "function" === typeof e.UNSAFE_componentWillReceiveProps && e.UNSAFE_componentWillReceiveProps(n, r), e.state !== t && mo.enqueueReplaceState(e, e.state, null)
		}

		function wo(t, e, n, r) {
			var i = t.stateNode;
			i.props = n, i.state = t.memoizedState, i.refs = po, oo(t);
			var o = e.contextType;
			"object" === typeof o && null !== o ? i.context = ro(o) : (o = vi(e) ? pi : fi.current, i.context = di(t, o)), lo(t, n, i, r), i.state = t.memoizedState, "function" === typeof(o = e.getDerivedStateFromProps) && (vo(t, e, o, n), i.state = t.memoizedState), "function" === typeof e.getDerivedStateFromProps || "function" === typeof i.getSnapshotBeforeUpdate || "function" !== typeof i.UNSAFE_componentWillMount && "function" !== typeof i.componentWillMount || (e = i.state, "function" === typeof i.componentWillMount && i.componentWillMount(), "function" === typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(), e !== i.state && mo.enqueueReplaceState(i, i.state, null), lo(t, n, i, r), i.state = t.memoizedState), "function" === typeof i.componentDidMount && (t.effectTag |= 4)
		}
		var _o = Array.isArray;

		function Eo(t, e, n) {
			if (null !== (t = n.ref) && "function" !== typeof t && "object" !== typeof t) {
				if (n._owner) {
					if (n = n._owner) {
						if (1 !== n.tag) throw Error(a(309));
						var r = n.stateNode
					}
					if (!r) throw Error(a(147, t));
					var i = "" + t;
					return null !== e && null !== e.ref && "function" === typeof e.ref && e.ref._stringRef === i ? e.ref : ((e = function(t) {
						var e = r.refs;
						e === po && (e = r.refs = {}), null === t ? delete e[i] : e[i] = t
					})._stringRef = i, e)
				}
				if ("string" !== typeof t) throw Error(a(284));
				if (!n._owner) throw Error(a(290, t))
			}
			return t
		}

		function Io(t, e) {
			if ("textarea" !== t.type) throw Error(a(31, "[object Object]" === Object.prototype.toString.call(e) ? "object with keys {" + Object.keys(e).join(", ") + "}" : e, ""))
		}

		function To(t) {
			function e(e, n) {
				if (t) {
					var r = e.lastEffect;
					null !== r ? (r.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n, n.nextEffect = null, n.effectTag = 8
				}
			}

			function n(n, r) {
				if (!t) return null;
				for (; null !== r;) e(n, r), r = r.sibling;
				return null
			}

			function r(t, e) {
				for (t = new Map; null !== e;) null !== e.key ? t.set(e.key, e) : t.set(e.index, e), e = e.sibling;
				return t
			}

			function i(t, e) {
				return (t = ks(t, e)).index = 0, t.sibling = null, t
			}

			function o(e, n, r) {
				return e.index = r, t ? null !== (r = e.alternate) ? (r = r.index) < n ? (e.effectTag = 2, n) : r : (e.effectTag = 2, n) : n
			}

			function u(e) {
				return t && null === e.alternate && (e.effectTag = 2), e
			}

			function s(t, e, n, r) {
				return null === e || 6 !== e.tag ? ((e = xs(n, t.mode, r)).return = t, e) : ((e = i(e, n)).return = t, e)
			}

			function c(t, e, n, r) {
				return null !== e && e.elementType === n.type ? ((r = i(e, n.props)).ref = Eo(t, e, n), r.return = t, r) : ((r = Ns(n.type, n.key, n.props, null, t.mode, r)).ref = Eo(t, e, n), r.return = t, r)
			}

			function l(t, e, n, r) {
				return null === e || 4 !== e.tag || e.stateNode.containerInfo !== n.containerInfo || e.stateNode.implementation !== n.implementation ? ((e = Os(n, t.mode, r)).return = t, e) : ((e = i(e, n.children || [])).return = t, e)
			}

			function f(t, e, n, r, o) {
				return null === e || 7 !== e.tag ? ((e = As(n, t.mode, r, o)).return = t, e) : ((e = i(e, n)).return = t, e)
			}

			function h(t, e, n) {
				if ("string" === typeof e || "number" === typeof e) return (e = xs("" + e, t.mode, n)).return = t, e;
				if ("object" === typeof e && null !== e) {
					switch (e.$$typeof) {
						case tt:
							return (n = Ns(e.type, e.key, e.props, null, t.mode, n)).ref = Eo(t, null, e), n.return = t, n;
						case et:
							return (e = Os(e, t.mode, n)).return = t, e
					}
					if (_o(e) || vt(e)) return (e = As(e, t.mode, n, null)).return = t, e;
					Io(t, e)
				}
				return null
			}

			function p(t, e, n, r) {
				var i = null !== e ? e.key : null;
				if ("string" === typeof n || "number" === typeof n) return null !== i ? null : s(t, e, "" + n, r);
				if ("object" === typeof n && null !== n) {
					switch (n.$$typeof) {
						case tt:
							return n.key === i ? n.type === nt ? f(t, e, n.props.children, r, i) : c(t, e, n, r) : null;
						case et:
							return n.key === i ? l(t, e, n, r) : null
					}
					if (_o(n) || vt(n)) return null !== i ? null : f(t, e, n, r, null);
					Io(t, n)
				}
				return null
			}

			function d(t, e, n, r, i) {
				if ("string" === typeof r || "number" === typeof r) return s(e, t = t.get(n) || null, "" + r, i);
				if ("object" === typeof r && null !== r) {
					switch (r.$$typeof) {
						case tt:
							return t = t.get(null === r.key ? n : r.key) || null, r.type === nt ? f(e, t, r.props.children, i, r.key) : c(e, t, r, i);
						case et:
							return l(e, t = t.get(null === r.key ? n : r.key) || null, r, i)
					}
					if (_o(r) || vt(r)) return f(e, t = t.get(n) || null, r, i, null);
					Io(e, r)
				}
				return null
			}

			function v(i, a, u, s) {
				for (var c = null, l = null, f = a, v = a = 0, m = null; null !== f && v < u.length; v++) {
					f.index > v ? (m = f, f = null) : m = f.sibling;
					var y = p(i, f, u[v], s);
					if (null === y) {
						null === f && (f = m);
						break
					}
					t && f && null === y.alternate && e(i, f), a = o(y, a, v), null === l ? c = y : l.sibling = y, l = y, f = m
				}
				if (v === u.length) return n(i, f), c;
				if (null === f) {
					for (; v < u.length; v++) null !== (f = h(i, u[v], s)) && (a = o(f, a, v), null === l ? c = f : l.sibling = f, l = f);
					return c
				}
				for (f = r(i, f); v < u.length; v++) null !== (m = d(f, i, v, u[v], s)) && (t && null !== m.alternate && f.delete(null === m.key ? v : m.key), a = o(m, a, v), null === l ? c = m : l.sibling = m, l = m);
				return t && f.forEach((function(t) {
					return e(i, t)
				})), c
			}

			function m(i, u, s, c) {
				var l = vt(s);
				if ("function" !== typeof l) throw Error(a(150));
				if (null == (s = l.call(s))) throw Error(a(151));
				for (var f = l = null, v = u, m = u = 0, y = null, g = s.next(); null !== v && !g.done; m++, g = s.next()) {
					v.index > m ? (y = v, v = null) : y = v.sibling;
					var b = p(i, v, g.value, c);
					if (null === b) {
						null === v && (v = y);
						break
					}
					t && v && null === b.alternate && e(i, v), u = o(b, u, m), null === f ? l = b : f.sibling = b, f = b, v = y
				}
				if (g.done) return n(i, v), l;
				if (null === v) {
					for (; !g.done; m++, g = s.next()) null !== (g = h(i, g.value, c)) && (u = o(g, u, m), null === f ? l = g : f.sibling = g, f = g);
					return l
				}
				for (v = r(i, v); !g.done; m++, g = s.next()) null !== (g = d(v, i, m, g.value, c)) && (t && null !== g.alternate && v.delete(null === g.key ? m : g.key), u = o(g, u, m), null === f ? l = g : f.sibling = g, f = g);
				return t && v.forEach((function(t) {
					return e(i, t)
				})), l
			}
			return function(t, r, o, s) {
				var c = "object" === typeof o && null !== o && o.type === nt && null === o.key;
				c && (o = o.props.children);
				var l = "object" === typeof o && null !== o;
				if (l) switch (o.$$typeof) {
					case tt:
						t: {
							for (l = o.key, c = r; null !== c;) {
								if (c.key === l) {
									switch (c.tag) {
										case 7:
											if (o.type === nt) {
												n(t, c.sibling), (r = i(c, o.props.children)).return = t, t = r;
												break t
											}
											break;
										default:
											if (c.elementType === o.type) {
												n(t, c.sibling), (r = i(c, o.props)).ref = Eo(t, c, o), r.return = t, t = r;
												break t
											}
									}
									n(t, c);
									break
								}
								e(t, c), c = c.sibling
							}
							o.type === nt ? ((r = As(o.props.children, t.mode, s, o.key)).return = t, t = r) : ((s = Ns(o.type, o.key, o.props, null, t.mode, s)).ref = Eo(t, r, o), s.return = t, t = s)
						}
						return u(t);
					case et:
						t: {
							for (c = o.key; null !== r;) {
								if (r.key === c) {
									if (4 === r.tag && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
										n(t, r.sibling), (r = i(r, o.children || [])).return = t, t = r;
										break t
									}
									n(t, r);
									break
								}
								e(t, r), r = r.sibling
							}(r = Os(o, t.mode, s)).return = t,
							t = r
						}
						return u(t)
				}
				if ("string" === typeof o || "number" === typeof o) return o = "" + o, null !== r && 6 === r.tag ? (n(t, r.sibling), (r = i(r, o)).return = t, t = r) : (n(t, r), (r = xs(o, t.mode, s)).return = t, t = r), u(t);
				if (_o(o)) return v(t, r, o, s);
				if (vt(o)) return m(t, r, o, s);
				if (l && Io(t, o), "undefined" === typeof o && !c) switch (t.tag) {
					case 1:
					case 0:
						throw t = t.type, Error(a(152, t.displayName || t.name || "Component"))
				}
				return n(t, r)
			}
		}
		var So = To(!0),
			ko = To(!1),
			No = {},
			Ao = {
				current: No
			},
			xo = {
				current: No
			},
			Oo = {
				current: No
			};

		function Co(t) {
			if (t === No) throw Error(a(174));
			return t
		}

		function Do(t, e) {
			switch (ci(Oo, e), ci(xo, t), ci(Ao, No), t = e.nodeType) {
				case 9:
				case 11:
					e = (e = e.documentElement) ? e.namespaceURI : jt(null, "");
					break;
				default:
					e = jt(e = (t = 8 === t ? e.parentNode : e).namespaceURI || null, t = t.tagName)
			}
			si(Ao), ci(Ao, e)
		}

		function Po() {
			si(Ao), si(xo), si(Oo)
		}

		function Ro(t) {
			Co(Oo.current);
			var e = Co(Ao.current),
				n = jt(e, t.type);
			e !== n && (ci(xo, t), ci(Ao, n))
		}

		function Lo(t) {
			xo.current === t && (si(Ao), si(xo))
		}
		var Mo = {
			current: 0
		};

		function jo(t) {
			for (var e = t; null !== e;) {
				if (13 === e.tag) {
					var n = e.memoizedState;
					if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return e
				} else if (19 === e.tag && void 0 !== e.memoizedProps.revealOrder) {
					if (0 !== (64 & e.effectTag)) return e
				} else if (null !== e.child) {
					e.child.return = e, e = e.child;
					continue
				}
				if (e === t) break;
				for (; null === e.sibling;) {
					if (null === e.return || e.return === t) return null;
					e = e.return
				}
				e.sibling.return = e.return, e = e.sibling
			}
			return null
		}

		function Uo(t, e) {
			return {
				responder: t,
				props: e
			}
		}
		var Fo = Y.ReactCurrentDispatcher,
			Vo = Y.ReactCurrentBatchConfig,
			zo = 0,
			Bo = null,
			qo = null,
			Go = null,
			Wo = !1;

		function Ho() {
			throw Error(a(321))
		}

		function Ko(t, e) {
			if (null === e) return !1;
			for (var n = 0; n < e.length && n < t.length; n++)
				if (!jr(t[n], e[n])) return !1;
			return !0
		}

		function Qo(t, e, n, r, i, o) {
			if (zo = o, Bo = e, e.memoizedState = null, e.updateQueue = null, e.expirationTime = 0, Fo.current = null === t || null === t.memoizedState ? ya : ga, t = n(r, i), e.expirationTime === zo) {
				o = 0;
				do {
					if (e.expirationTime = 0, !(25 > o)) throw Error(a(301));
					o += 1, Go = qo = null, e.updateQueue = null, Fo.current = ba, t = n(r, i)
				} while (e.expirationTime === zo)
			}
			if (Fo.current = ma, e = null !== qo && null !== qo.next, zo = 0, Go = qo = Bo = null, Wo = !1, e) throw Error(a(300));
			return t
		}

		function Xo() {
			var t = {
				memoizedState: null,
				baseState: null,
				baseQueue: null,
				queue: null,
				next: null
			};
			return null === Go ? Bo.memoizedState = Go = t : Go = Go.next = t, Go
		}

		function Yo() {
			if (null === qo) {
				var t = Bo.alternate;
				t = null !== t ? t.memoizedState : null
			} else t = qo.next;
			var e = null === Go ? Bo.memoizedState : Go.next;
			if (null !== e) Go = e, qo = t;
			else {
				if (null === t) throw Error(a(310));
				t = {
					memoizedState: (qo = t).memoizedState,
					baseState: qo.baseState,
					baseQueue: qo.baseQueue,
					queue: qo.queue,
					next: null
				}, null === Go ? Bo.memoizedState = Go = t : Go = Go.next = t
			}
			return Go
		}

		function $o(t, e) {
			return "function" === typeof e ? e(t) : e
		}

		function Jo(t) {
			var e = Yo(),
				n = e.queue;
			if (null === n) throw Error(a(311));
			n.lastRenderedReducer = t;
			var r = qo,
				i = r.baseQueue,
				o = n.pending;
			if (null !== o) {
				if (null !== i) {
					var u = i.next;
					i.next = o.next, o.next = u
				}
				r.baseQueue = i = o, n.pending = null
			}
			if (null !== i) {
				i = i.next, r = r.baseState;
				var s = u = o = null,
					c = i;
				do {
					var l = c.expirationTime;
					if (l < zo) {
						var f = {
							expirationTime: c.expirationTime,
							suspenseConfig: c.suspenseConfig,
							action: c.action,
							eagerReducer: c.eagerReducer,
							eagerState: c.eagerState,
							next: null
						};
						null === s ? (u = s = f, o = r) : s = s.next = f, l > Bo.expirationTime && (Bo.expirationTime = l, as(l))
					} else null !== s && (s = s.next = {
						expirationTime: 1073741823,
						suspenseConfig: c.suspenseConfig,
						action: c.action,
						eagerReducer: c.eagerReducer,
						eagerState: c.eagerState,
						next: null
					}), os(l, c.suspenseConfig), r = c.eagerReducer === t ? c.eagerState : t(r, c.action);
					c = c.next
				} while (null !== c && c !== i);
				null === s ? o = r : s.next = u, jr(r, e.memoizedState) || (Oa = !0), e.memoizedState = r, e.baseState = o, e.baseQueue = s, n.lastRenderedState = r
			}
			return [e.memoizedState, n.dispatch]
		}

		function Zo(t) {
			var e = Yo(),
				n = e.queue;
			if (null === n) throw Error(a(311));
			n.lastRenderedReducer = t;
			var r = n.dispatch,
				i = n.pending,
				o = e.memoizedState;
			if (null !== i) {
				n.pending = null;
				var u = i = i.next;
				do {
					o = t(o, u.action), u = u.next
				} while (u !== i);
				jr(o, e.memoizedState) || (Oa = !0), e.memoizedState = o, null === e.baseQueue && (e.baseState = o), n.lastRenderedState = o
			}
			return [o, r]
		}

		function ta(t) {
			var e = Xo();
			return "function" === typeof t && (t = t()), e.memoizedState = e.baseState = t, t = (t = e.queue = {
				pending: null,
				dispatch: null,
				lastRenderedReducer: $o,
				lastRenderedState: t
			}).dispatch = va.bind(null, Bo, t), [e.memoizedState, t]
		}

		function ea(t, e, n, r) {
			return t = {
				tag: t,
				create: e,
				destroy: n,
				deps: r,
				next: null
			}, null === (e = Bo.updateQueue) ? (e = {
				lastEffect: null
			}, Bo.updateQueue = e, e.lastEffect = t.next = t) : null === (n = e.lastEffect) ? e.lastEffect = t.next = t : (r = n.next, n.next = t, t.next = r, e.lastEffect = t), t
		}

		function na() {
			return Yo().memoizedState
		}

		function ra(t, e, n, r) {
			var i = Xo();
			Bo.effectTag |= t, i.memoizedState = ea(1 | e, n, void 0, void 0 === r ? null : r)
		}

		function ia(t, e, n, r) {
			var i = Yo();
			r = void 0 === r ? null : r;
			var o = void 0;
			if (null !== qo) {
				var a = qo.memoizedState;
				if (o = a.destroy, null !== r && Ko(r, a.deps)) return void ea(e, n, o, r)
			}
			Bo.effectTag |= t, i.memoizedState = ea(1 | e, n, o, r)
		}

		function oa(t, e) {
			return ra(516, 4, t, e)
		}

		function aa(t, e) {
			return ia(516, 4, t, e)
		}

		function ua(t, e) {
			return ia(4, 2, t, e)
		}

		function sa(t, e) {
			return "function" === typeof e ? (t = t(), e(t), function() {
				e(null)
			}) : null !== e && void 0 !== e ? (t = t(), e.current = t, function() {
				e.current = null
			}) : void 0
		}

		function ca(t, e, n) {
			return n = null !== n && void 0 !== n ? n.concat([t]) : null, ia(4, 2, sa.bind(null, e, t), n)
		}

		function la() {}

		function fa(t, e) {
			return Xo().memoizedState = [t, void 0 === e ? null : e], t
		}

		function ha(t, e) {
			var n = Yo();
			e = void 0 === e ? null : e;
			var r = n.memoizedState;
			return null !== r && null !== e && Ko(e, r[1]) ? r[0] : (n.memoizedState = [t, e], t)
		}

		function pa(t, e) {
			var n = Yo();
			e = void 0 === e ? null : e;
			var r = n.memoizedState;
			return null !== r && null !== e && Ko(e, r[1]) ? r[0] : (t = t(), n.memoizedState = [t, e], t)
		}

		function da(t, e, n) {
			var r = Vi();
			Bi(98 > r ? 98 : r, (function() {
				t(!0)
			})), Bi(97 < r ? 97 : r, (function() {
				var r = Vo.suspense;
				Vo.suspense = void 0 === e ? null : e;
				try {
					t(!1), n()
				} finally {
					Vo.suspense = r
				}
			}))
		}

		function va(t, e, n) {
			var r = Hu(),
				i = ho.suspense;
			i = {
				expirationTime: r = Ku(r, t, i),
				suspenseConfig: i,
				action: n,
				eagerReducer: null,
				eagerState: null,
				next: null
			};
			var o = e.pending;
			if (null === o ? i.next = i : (i.next = o.next, o.next = i), e.pending = i, o = t.alternate, t === Bo || null !== o && o === Bo) Wo = !0, i.expirationTime = zo, Bo.expirationTime = zo;
			else {
				if (0 === t.expirationTime && (null === o || 0 === o.expirationTime) && null !== (o = e.lastRenderedReducer)) try {
					var a = e.lastRenderedState,
						u = o(a, n);
					if (i.eagerReducer = o, i.eagerState = u, jr(u, a)) return
				} catch (s) {}
				Qu(t, r)
			}
		}
		var ma = {
				readContext: ro,
				useCallback: Ho,
				useContext: Ho,
				useEffect: Ho,
				useImperativeHandle: Ho,
				useLayoutEffect: Ho,
				useMemo: Ho,
				useReducer: Ho,
				useRef: Ho,
				useState: Ho,
				useDebugValue: Ho,
				useResponder: Ho,
				useDeferredValue: Ho,
				useTransition: Ho
			},
			ya = {
				readContext: ro,
				useCallback: fa,
				useContext: ro,
				useEffect: oa,
				useImperativeHandle: function(t, e, n) {
					return n = null !== n && void 0 !== n ? n.concat([t]) : null, ra(4, 2, sa.bind(null, e, t), n)
				},
				useLayoutEffect: function(t, e) {
					return ra(4, 2, t, e)
				},
				useMemo: function(t, e) {
					var n = Xo();
					return e = void 0 === e ? null : e, t = t(), n.memoizedState = [t, e], t
				},
				useReducer: function(t, e, n) {
					var r = Xo();
					return e = void 0 !== n ? n(e) : e, r.memoizedState = r.baseState = e, t = (t = r.queue = {
						pending: null,
						dispatch: null,
						lastRenderedReducer: t,
						lastRenderedState: e
					}).dispatch = va.bind(null, Bo, t), [r.memoizedState, t]
				},
				useRef: function(t) {
					return t = {
						current: t
					}, Xo().memoizedState = t
				},
				useState: ta,
				useDebugValue: la,
				useResponder: Uo,
				useDeferredValue: function(t, e) {
					var n = ta(t),
						r = n[0],
						i = n[1];
					return oa((function() {
						var n = Vo.suspense;
						Vo.suspense = void 0 === e ? null : e;
						try {
							i(t)
						} finally {
							Vo.suspense = n
						}
					}), [t, e]), r
				},
				useTransition: function(t) {
					var e = ta(!1),
						n = e[0];
					return e = e[1], [fa(da.bind(null, e, t), [e, t]), n]
				}
			},
			ga = {
				readContext: ro,
				useCallback: ha,
				useContext: ro,
				useEffect: aa,
				useImperativeHandle: ca,
				useLayoutEffect: ua,
				useMemo: pa,
				useReducer: Jo,
				useRef: na,
				useState: function() {
					return Jo($o)
				},
				useDebugValue: la,
				useResponder: Uo,
				useDeferredValue: function(t, e) {
					var n = Jo($o),
						r = n[0],
						i = n[1];
					return aa((function() {
						var n = Vo.suspense;
						Vo.suspense = void 0 === e ? null : e;
						try {
							i(t)
						} finally {
							Vo.suspense = n
						}
					}), [t, e]), r
				},
				useTransition: function(t) {
					var e = Jo($o),
						n = e[0];
					return e = e[1], [ha(da.bind(null, e, t), [e, t]), n]
				}
			},
			ba = {
				readContext: ro,
				useCallback: ha,
				useContext: ro,
				useEffect: aa,
				useImperativeHandle: ca,
				useLayoutEffect: ua,
				useMemo: pa,
				useReducer: Zo,
				useRef: na,
				useState: function() {
					return Zo($o)
				},
				useDebugValue: la,
				useResponder: Uo,
				useDeferredValue: function(t, e) {
					var n = Zo($o),
						r = n[0],
						i = n[1];
					return aa((function() {
						var n = Vo.suspense;
						Vo.suspense = void 0 === e ? null : e;
						try {
							i(t)
						} finally {
							Vo.suspense = n
						}
					}), [t, e]), r
				},
				useTransition: function(t) {
					var e = Zo($o),
						n = e[0];
					return e = e[1], [ha(da.bind(null, e, t), [e, t]), n]
				}
			},
			wa = null,
			_a = null,
			Ea = !1;

		function Ia(t, e) {
			var n = Ts(5, null, null, 0);
			n.elementType = "DELETED", n.type = "DELETED", n.stateNode = e, n.return = t, n.effectTag = 8, null !== t.lastEffect ? (t.lastEffect.nextEffect = n, t.lastEffect = n) : t.firstEffect = t.lastEffect = n
		}

		function Ta(t, e) {
			switch (t.tag) {
				case 5:
					var n = t.type;
					return null !== (e = 1 !== e.nodeType || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e) && (t.stateNode = e, !0);
				case 6:
					return null !== (e = "" === t.pendingProps || 3 !== e.nodeType ? null : e) && (t.stateNode = e, !0);
				case 13:
				default:
					return !1
			}
		}

		function Sa(t) {
			if (Ea) {
				var e = _a;
				if (e) {
					var n = e;
					if (!Ta(t, e)) {
						if (!(e = _n(n.nextSibling)) || !Ta(t, e)) return t.effectTag = -1025 & t.effectTag | 2, Ea = !1, void(wa = t);
						Ia(wa, n)
					}
					wa = t, _a = _n(e.firstChild)
				} else t.effectTag = -1025 & t.effectTag | 2, Ea = !1, wa = t
			}
		}

		function ka(t) {
			for (t = t.return; null !== t && 5 !== t.tag && 3 !== t.tag && 13 !== t.tag;) t = t.return;
			wa = t
		}

		function Na(t) {
			if (t !== wa) return !1;
			if (!Ea) return ka(t), Ea = !0, !1;
			var e = t.type;
			if (5 !== t.tag || "head" !== e && "body" !== e && !gn(e, t.memoizedProps))
				for (e = _a; e;) Ia(t, e), e = _n(e.nextSibling);
			if (ka(t), 13 === t.tag) {
				if (!(t = null !== (t = t.memoizedState) ? t.dehydrated : null)) throw Error(a(317));
				t: {
					for (t = t.nextSibling, e = 0; t;) {
						if (8 === t.nodeType) {
							var n = t.data;
							if ("/$" === n) {
								if (0 === e) {
									_a = _n(t.nextSibling);
									break t
								}
								e--
							} else "$" !== n && "$!" !== n && "$?" !== n || e++
						}
						t = t.nextSibling
					}
					_a = null
				}
			} else _a = wa ? _n(t.stateNode.nextSibling) : null;
			return !0
		}

		function Aa() {
			_a = wa = null, Ea = !1
		}
		var xa = Y.ReactCurrentOwner,
			Oa = !1;

		function Ca(t, e, n, r) {
			e.child = null === t ? ko(e, null, n, r) : So(e, t.child, n, r)
		}

		function Da(t, e, n, r, i) {
			n = n.render;
			var o = e.ref;
			return no(e, i), r = Qo(t, e, n, r, o, i), null === t || Oa ? (e.effectTag |= 1, Ca(t, e, r, i), e.child) : (e.updateQueue = t.updateQueue, e.effectTag &= -517, t.expirationTime <= i && (t.expirationTime = 0), Qa(t, e, i))
		}

		function Pa(t, e, n, r, i, o) {
			if (null === t) {
				var a = n.type;
				return "function" !== typeof a || Ss(a) || void 0 !== a.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((t = Ns(n.type, null, r, null, e.mode, o)).ref = e.ref, t.return = e, e.child = t) : (e.tag = 15, e.type = a, Ra(t, e, a, r, i, o))
			}
			return a = t.child, i < o && (i = a.memoizedProps, (n = null !== (n = n.compare) ? n : Fr)(i, r) && t.ref === e.ref) ? Qa(t, e, o) : (e.effectTag |= 1, (t = ks(a, r)).ref = e.ref, t.return = e, e.child = t)
		}

		function Ra(t, e, n, r, i, o) {
			return null !== t && Fr(t.memoizedProps, r) && t.ref === e.ref && (Oa = !1, i < o) ? (e.expirationTime = t.expirationTime, Qa(t, e, o)) : Ma(t, e, n, r, o)
		}

		function La(t, e) {
			var n = e.ref;
			(null === t && null !== n || null !== t && t.ref !== n) && (e.effectTag |= 128)
		}

		function Ma(t, e, n, r, i) {
			var o = vi(n) ? pi : fi.current;
			return o = di(e, o), no(e, i), n = Qo(t, e, n, r, o, i), null === t || Oa ? (e.effectTag |= 1, Ca(t, e, n, i), e.child) : (e.updateQueue = t.updateQueue, e.effectTag &= -517, t.expirationTime <= i && (t.expirationTime = 0), Qa(t, e, i))
		}

		function ja(t, e, n, r, i) {
			if (vi(n)) {
				var o = !0;
				bi(e)
			} else o = !1;
			if (no(e, i), null === e.stateNode) null !== t && (t.alternate = null, e.alternate = null, e.effectTag |= 2), go(e, n, r), wo(e, n, r, i), r = !0;
			else if (null === t) {
				var a = e.stateNode,
					u = e.memoizedProps;
				a.props = u;
				var s = a.context,
					c = n.contextType;
				"object" === typeof c && null !== c ? c = ro(c) : c = di(e, c = vi(n) ? pi : fi.current);
				var l = n.getDerivedStateFromProps,
					f = "function" === typeof l || "function" === typeof a.getSnapshotBeforeUpdate;
				f || "function" !== typeof a.UNSAFE_componentWillReceiveProps && "function" !== typeof a.componentWillReceiveProps || (u !== r || s !== c) && bo(e, a, r, c), io = !1;
				var h = e.memoizedState;
				a.state = h, lo(e, r, a, i), s = e.memoizedState, u !== r || h !== s || hi.current || io ? ("function" === typeof l && (vo(e, n, l, r), s = e.memoizedState), (u = io || yo(e, n, u, r, h, s, c)) ? (f || "function" !== typeof a.UNSAFE_componentWillMount && "function" !== typeof a.componentWillMount || ("function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()), "function" === typeof a.componentDidMount && (e.effectTag |= 4)) : ("function" === typeof a.componentDidMount && (e.effectTag |= 4), e.memoizedProps = r, e.memoizedState = s), a.props = r, a.state = s, a.context = c, r = u) : ("function" === typeof a.componentDidMount && (e.effectTag |= 4), r = !1)
			} else a = e.stateNode, ao(t, e), u = e.memoizedProps, a.props = e.type === e.elementType ? u : Qi(e.type, u), s = a.context, "object" === typeof(c = n.contextType) && null !== c ? c = ro(c) : c = di(e, c = vi(n) ? pi : fi.current), (f = "function" === typeof(l = n.getDerivedStateFromProps) || "function" === typeof a.getSnapshotBeforeUpdate) || "function" !== typeof a.UNSAFE_componentWillReceiveProps && "function" !== typeof a.componentWillReceiveProps || (u !== r || s !== c) && bo(e, a, r, c), io = !1, s = e.memoizedState, a.state = s, lo(e, r, a, i), h = e.memoizedState, u !== r || s !== h || hi.current || io ? ("function" === typeof l && (vo(e, n, l, r), h = e.memoizedState), (l = io || yo(e, n, u, r, s, h, c)) ? (f || "function" !== typeof a.UNSAFE_componentWillUpdate && "function" !== typeof a.componentWillUpdate || ("function" === typeof a.componentWillUpdate && a.componentWillUpdate(r, h, c), "function" === typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(r, h, c)), "function" === typeof a.componentDidUpdate && (e.effectTag |= 4), "function" === typeof a.getSnapshotBeforeUpdate && (e.effectTag |= 256)) : ("function" !== typeof a.componentDidUpdate || u === t.memoizedProps && s === t.memoizedState || (e.effectTag |= 4), "function" !== typeof a.getSnapshotBeforeUpdate || u === t.memoizedProps && s === t.memoizedState || (e.effectTag |= 256), e.memoizedProps = r, e.memoizedState = h), a.props = r, a.state = h, a.context = c, r = l) : ("function" !== typeof a.componentDidUpdate || u === t.memoizedProps && s === t.memoizedState || (e.effectTag |= 4), "function" !== typeof a.getSnapshotBeforeUpdate || u === t.memoizedProps && s === t.memoizedState || (e.effectTag |= 256), r = !1);
			return Ua(t, e, n, r, o, i)
		}

		function Ua(t, e, n, r, i, o) {
			La(t, e);
			var a = 0 !== (64 & e.effectTag);
			if (!r && !a) return i && wi(e, n, !1), Qa(t, e, o);
			r = e.stateNode, xa.current = e;
			var u = a && "function" !== typeof n.getDerivedStateFromError ? null : r.render();
			return e.effectTag |= 1, null !== t && a ? (e.child = So(e, t.child, null, o), e.child = So(e, null, u, o)) : Ca(t, e, u, o), e.memoizedState = r.state, i && wi(e, n, !0), e.child
		}

		function Fa(t) {
			var e = t.stateNode;
			e.pendingContext ? yi(0, e.pendingContext, e.pendingContext !== e.context) : e.context && yi(0, e.context, !1), Do(t, e.containerInfo)
		}
		var Va, za, Ba, qa = {
			dehydrated: null,
			retryTime: 0
		};

		function Ga(t, e, n) {
			var r, i = e.mode,
				o = e.pendingProps,
				a = Mo.current,
				u = !1;
			if ((r = 0 !== (64 & e.effectTag)) || (r = 0 !== (2 & a) && (null === t || null !== t.memoizedState)), r ? (u = !0, e.effectTag &= -65) : null !== t && null === t.memoizedState || void 0 === o.fallback || !0 === o.unstable_avoidThisFallback || (a |= 1), ci(Mo, 1 & a), null === t) {
				if (void 0 !== o.fallback && Sa(e), u) {
					if (u = o.fallback, (o = As(null, i, 0, null)).return = e, 0 === (2 & e.mode))
						for (t = null !== e.memoizedState ? e.child.child : e.child, o.child = t; null !== t;) t.return = o, t = t.sibling;
					return (n = As(u, i, n, null)).return = e, o.sibling = n, e.memoizedState = qa, e.child = o, n
				}
				return i = o.children, e.memoizedState = null, e.child = ko(e, null, i, n)
			}
			if (null !== t.memoizedState) {
				if (i = (t = t.child).sibling, u) {
					if (o = o.fallback, (n = ks(t, t.pendingProps)).return = e, 0 === (2 & e.mode) && (u = null !== e.memoizedState ? e.child.child : e.child) !== t.child)
						for (n.child = u; null !== u;) u.return = n, u = u.sibling;
					return (i = ks(i, o)).return = e, n.sibling = i, n.childExpirationTime = 0, e.memoizedState = qa, e.child = n, i
				}
				return n = So(e, t.child, o.children, n), e.memoizedState = null, e.child = n
			}
			if (t = t.child, u) {
				if (u = o.fallback, (o = As(null, i, 0, null)).return = e, o.child = t, null !== t && (t.return = o), 0 === (2 & e.mode))
					for (t = null !== e.memoizedState ? e.child.child : e.child, o.child = t; null !== t;) t.return = o, t = t.sibling;
				return (n = As(u, i, n, null)).return = e, o.sibling = n, n.effectTag |= 2, o.childExpirationTime = 0, e.memoizedState = qa, e.child = o, n
			}
			return e.memoizedState = null, e.child = So(e, t, o.children, n)
		}

		function Wa(t, e) {
			t.expirationTime < e && (t.expirationTime = e);
			var n = t.alternate;
			null !== n && n.expirationTime < e && (n.expirationTime = e), eo(t.return, e)
		}

		function Ha(t, e, n, r, i, o) {
			var a = t.memoizedState;
			null === a ? t.memoizedState = {
				isBackwards: e,
				rendering: null,
				renderingStartTime: 0,
				last: r,
				tail: n,
				tailExpiration: 0,
				tailMode: i,
				lastEffect: o
			} : (a.isBackwards = e, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailExpiration = 0, a.tailMode = i, a.lastEffect = o)
		}

		function Ka(t, e, n) {
			var r = e.pendingProps,
				i = r.revealOrder,
				o = r.tail;
			if (Ca(t, e, r.children, n), 0 !== (2 & (r = Mo.current))) r = 1 & r | 2, e.effectTag |= 64;
			else {
				if (null !== t && 0 !== (64 & t.effectTag)) t: for (t = e.child; null !== t;) {
					if (13 === t.tag) null !== t.memoizedState && Wa(t, n);
					else if (19 === t.tag) Wa(t, n);
					else if (null !== t.child) {
						t.child.return = t, t = t.child;
						continue
					}
					if (t === e) break t;
					for (; null === t.sibling;) {
						if (null === t.return || t.return === e) break t;
						t = t.return
					}
					t.sibling.return = t.return, t = t.sibling
				}
				r &= 1
			}
			if (ci(Mo, r), 0 === (2 & e.mode)) e.memoizedState = null;
			else switch (i) {
				case "forwards":
					for (n = e.child, i = null; null !== n;) null !== (t = n.alternate) && null === jo(t) && (i = n), n = n.sibling;
					null === (n = i) ? (i = e.child, e.child = null) : (i = n.sibling, n.sibling = null), Ha(e, !1, i, n, o, e.lastEffect);
					break;
				case "backwards":
					for (n = null, i = e.child, e.child = null; null !== i;) {
						if (null !== (t = i.alternate) && null === jo(t)) {
							e.child = i;
							break
						}
						t = i.sibling, i.sibling = n, n = i, i = t
					}
					Ha(e, !0, n, null, o, e.lastEffect);
					break;
				case "together":
					Ha(e, !1, null, null, void 0, e.lastEffect);
					break;
				default:
					e.memoizedState = null
			}
			return e.child
		}

		function Qa(t, e, n) {
			null !== t && (e.dependencies = t.dependencies);
			var r = e.expirationTime;
			if (0 !== r && as(r), e.childExpirationTime < n) return null;
			if (null !== t && e.child !== t.child) throw Error(a(153));
			if (null !== e.child) {
				for (n = ks(t = e.child, t.pendingProps), e.child = n, n.return = e; null !== t.sibling;) t = t.sibling, (n = n.sibling = ks(t, t.pendingProps)).return = e;
				n.sibling = null
			}
			return e.child
		}

		function Xa(t, e) {
			switch (t.tailMode) {
				case "hidden":
					e = t.tail;
					for (var n = null; null !== e;) null !== e.alternate && (n = e), e = e.sibling;
					null === n ? t.tail = null : n.sibling = null;
					break;
				case "collapsed":
					n = t.tail;
					for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
					null === r ? e || null === t.tail ? t.tail = null : t.tail.sibling = null : r.sibling = null
			}
		}

		function Ya(t, e, n) {
			var r = e.pendingProps;
			switch (e.tag) {
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
					return null;
				case 1:
					return vi(e.type) && mi(), null;
				case 3:
					return Po(), si(hi), si(fi), (n = e.stateNode).pendingContext && (n.context = n.pendingContext, n.pendingContext = null), null !== t && null !== t.child || !Na(e) || (e.effectTag |= 4), null;
				case 5:
					Lo(e), n = Co(Oo.current);
					var o = e.type;
					if (null !== t && null != e.stateNode) za(t, e, o, r, n), t.ref !== e.ref && (e.effectTag |= 128);
					else {
						if (!r) {
							if (null === e.stateNode) throw Error(a(166));
							return null
						}
						if (t = Co(Ao.current), Na(e)) {
							r = e.stateNode, o = e.type;
							var u = e.memoizedProps;
							switch (r[Tn] = e, r[Sn] = u, o) {
								case "iframe":
								case "object":
								case "embed":
									Ke("load", r);
									break;
								case "video":
								case "audio":
									for (t = 0; t < Yt.length; t++) Ke(Yt[t], r);
									break;
								case "source":
									Ke("error", r);
									break;
								case "img":
								case "image":
								case "link":
									Ke("error", r), Ke("load", r);
									break;
								case "form":
									Ke("reset", r), Ke("submit", r);
									break;
								case "details":
									Ke("toggle", r);
									break;
								case "input":
									It(r, u), Ke("invalid", r), sn(n, "onChange");
									break;
								case "select":
									r._wrapperState = {
										wasMultiple: !!u.multiple
									}, Ke("invalid", r), sn(n, "onChange");
									break;
								case "textarea":
									Ct(r, u), Ke("invalid", r), sn(n, "onChange")
							}
							for (var s in on(o, u), t = null, u)
								if (u.hasOwnProperty(s)) {
									var c = u[s];
									"children" === s ? "string" === typeof c ? r.textContent !== c && (t = ["children", c]) : "number" === typeof c && r.textContent !== "" + c && (t = ["children", "" + c]) : T.hasOwnProperty(s) && null != c && sn(n, s)
								} switch (o) {
								case "input":
									wt(r), kt(r, u, !0);
									break;
								case "textarea":
									wt(r), Pt(r);
									break;
								case "select":
								case "option":
									break;
								default:
									"function" === typeof u.onClick && (r.onclick = cn)
							}
							n = t, e.updateQueue = n, null !== n && (e.effectTag |= 4)
						} else {
							switch (s = 9 === n.nodeType ? n : n.ownerDocument, t === un && (t = Mt(o)), t === un ? "script" === o ? ((t = s.createElement("div")).innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : "string" === typeof r.is ? t = s.createElement(o, {
									is: r.is
								}) : (t = s.createElement(o), "select" === o && (s = t, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : t = s.createElementNS(t, o), t[Tn] = e, t[Sn] = r, Va(t, e), e.stateNode = t, s = an(o, r), o) {
								case "iframe":
								case "object":
								case "embed":
									Ke("load", t), c = r;
									break;
								case "video":
								case "audio":
									for (c = 0; c < Yt.length; c++) Ke(Yt[c], t);
									c = r;
									break;
								case "source":
									Ke("error", t), c = r;
									break;
								case "img":
								case "image":
								case "link":
									Ke("error", t), Ke("load", t), c = r;
									break;
								case "form":
									Ke("reset", t), Ke("submit", t), c = r;
									break;
								case "details":
									Ke("toggle", t), c = r;
									break;
								case "input":
									It(t, r), c = Et(t, r), Ke("invalid", t), sn(n, "onChange");
									break;
								case "option":
									c = At(t, r);
									break;
								case "select":
									t._wrapperState = {
										wasMultiple: !!r.multiple
									}, c = i({}, r, {
										value: void 0
									}), Ke("invalid", t), sn(n, "onChange");
									break;
								case "textarea":
									Ct(t, r), c = Ot(t, r), Ke("invalid", t), sn(n, "onChange");
									break;
								default:
									c = r
							}
							on(o, c);
							var l = c;
							for (u in l)
								if (l.hasOwnProperty(u)) {
									var f = l[u];
									"style" === u ? nn(t, f) : "dangerouslySetInnerHTML" === u ? null != (f = f ? f.__html : void 0) && Ft(t, f) : "children" === u ? "string" === typeof f ? ("textarea" !== o || "" !== f) && Vt(t, f) : "number" === typeof f && Vt(t, "" + f) : "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && "autoFocus" !== u && (T.hasOwnProperty(u) ? null != f && sn(n, u) : null != f && $(t, u, f, s))
								} switch (o) {
								case "input":
									wt(t), kt(t, r, !1);
									break;
								case "textarea":
									wt(t), Pt(t);
									break;
								case "option":
									null != r.value && t.setAttribute("value", "" + gt(r.value));
									break;
								case "select":
									t.multiple = !!r.multiple, null != (n = r.value) ? xt(t, !!r.multiple, n, !1) : null != r.defaultValue && xt(t, !!r.multiple, r.defaultValue, !0);
									break;
								default:
									"function" === typeof c.onClick && (t.onclick = cn)
							}
							yn(o, r) && (e.effectTag |= 4)
						}
						null !== e.ref && (e.effectTag |= 128)
					}
					return null;
				case 6:
					if (t && null != e.stateNode) Ba(0, e, t.memoizedProps, r);
					else {
						if ("string" !== typeof r && null === e.stateNode) throw Error(a(166));
						n = Co(Oo.current), Co(Ao.current), Na(e) ? (n = e.stateNode, r = e.memoizedProps, n[Tn] = e, n.nodeValue !== r && (e.effectTag |= 4)) : ((n = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Tn] = e, e.stateNode = n)
					}
					return null;
				case 13:
					return si(Mo), r = e.memoizedState, 0 !== (64 & e.effectTag) ? (e.expirationTime = n, e) : (n = null !== r, r = !1, null === t ? void 0 !== e.memoizedProps.fallback && Na(e) : (r = null !== (o = t.memoizedState), n || null === o || null !== (o = t.child.sibling) && (null !== (u = e.firstEffect) ? (e.firstEffect = o, o.nextEffect = u) : (e.firstEffect = e.lastEffect = o, o.nextEffect = null), o.effectTag = 8)), n && !r && 0 !== (2 & e.mode) && (null === t && !0 !== e.memoizedProps.unstable_avoidThisFallback || 0 !== (1 & Mo.current) ? Nu === wu && (Nu = _u) : (Nu !== wu && Nu !== _u || (Nu = Eu), 0 !== Du && null !== Tu && (Ps(Tu, ku), Rs(Tu, Du)))), (n || r) && (e.effectTag |= 4), null);
				case 4:
					return Po(), null;
				case 10:
					return to(e), null;
				case 17:
					return vi(e.type) && mi(), null;
				case 19:
					if (si(Mo), null === (r = e.memoizedState)) return null;
					if (o = 0 !== (64 & e.effectTag), null === (u = r.rendering)) {
						if (o) Xa(r, !1);
						else if (Nu !== wu || null !== t && 0 !== (64 & t.effectTag))
							for (u = e.child; null !== u;) {
								if (null !== (t = jo(u))) {
									for (e.effectTag |= 64, Xa(r, !1), null !== (o = t.updateQueue) && (e.updateQueue = o, e.effectTag |= 4), null === r.lastEffect && (e.firstEffect = null), e.lastEffect = r.lastEffect, r = e.child; null !== r;) u = n, (o = r).effectTag &= 2, o.nextEffect = null, o.firstEffect = null, o.lastEffect = null, null === (t = o.alternate) ? (o.childExpirationTime = 0, o.expirationTime = u, o.child = null, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null) : (o.childExpirationTime = t.childExpirationTime, o.expirationTime = t.expirationTime, o.child = t.child, o.memoizedProps = t.memoizedProps, o.memoizedState = t.memoizedState, o.updateQueue = t.updateQueue, u = t.dependencies, o.dependencies = null === u ? null : {
										expirationTime: u.expirationTime,
										firstContext: u.firstContext,
										responders: u.responders
									}), r = r.sibling;
									return ci(Mo, 1 & Mo.current | 2), e.child
								}
								u = u.sibling
							}
					} else {
						if (!o)
							if (null !== (t = jo(u))) {
								if (e.effectTag |= 64, o = !0, null !== (n = t.updateQueue) && (e.updateQueue = n, e.effectTag |= 4), Xa(r, !0), null === r.tail && "hidden" === r.tailMode && !u.alternate) return null !== (e = e.lastEffect = r.lastEffect) && (e.nextEffect = null), null
							} else 2 * Fi() - r.renderingStartTime > r.tailExpiration && 1 < n && (e.effectTag |= 64, o = !0, Xa(r, !1), e.expirationTime = e.childExpirationTime = n - 1);
						r.isBackwards ? (u.sibling = e.child, e.child = u) : (null !== (n = r.last) ? n.sibling = u : e.child = u, r.last = u)
					}
					return null !== r.tail ? (0 === r.tailExpiration && (r.tailExpiration = Fi() + 500), n = r.tail, r.rendering = n, r.tail = n.sibling, r.lastEffect = e.lastEffect, r.renderingStartTime = Fi(), n.sibling = null, e = Mo.current, ci(Mo, o ? 1 & e | 2 : 1 & e), n) : null
			}
			throw Error(a(156, e.tag))
		}

		function $a(t) {
			switch (t.tag) {
				case 1:
					vi(t.type) && mi();
					var e = t.effectTag;
					return 4096 & e ? (t.effectTag = -4097 & e | 64, t) : null;
				case 3:
					if (Po(), si(hi), si(fi), 0 !== (64 & (e = t.effectTag))) throw Error(a(285));
					return t.effectTag = -4097 & e | 64, t;
				case 5:
					return Lo(t), null;
				case 13:
					return si(Mo), 4096 & (e = t.effectTag) ? (t.effectTag = -4097 & e | 64, t) : null;
				case 19:
					return si(Mo), null;
				case 4:
					return Po(), null;
				case 10:
					return to(t), null;
				default:
					return null
			}
		}

		function Ja(t, e) {
			return {
				value: t,
				source: e,
				stack: yt(e)
			}
		}
		Va = function(t, e) {
			for (var n = e.child; null !== n;) {
				if (5 === n.tag || 6 === n.tag) t.appendChild(n.stateNode);
				else if (4 !== n.tag && null !== n.child) {
					n.child.return = n, n = n.child;
					continue
				}
				if (n === e) break;
				for (; null === n.sibling;) {
					if (null === n.return || n.return === e) return;
					n = n.return
				}
				n.sibling.return = n.return, n = n.sibling
			}
		}, za = function(t, e, n, r, o) {
			var a = t.memoizedProps;
			if (a !== r) {
				var u, s, c = e.stateNode;
				switch (Co(Ao.current), t = null, n) {
					case "input":
						a = Et(c, a), r = Et(c, r), t = [];
						break;
					case "option":
						a = At(c, a), r = At(c, r), t = [];
						break;
					case "select":
						a = i({}, a, {
							value: void 0
						}), r = i({}, r, {
							value: void 0
						}), t = [];
						break;
					case "textarea":
						a = Ot(c, a), r = Ot(c, r), t = [];
						break;
					default:
						"function" !== typeof a.onClick && "function" === typeof r.onClick && (c.onclick = cn)
				}
				for (u in on(n, r), n = null, a)
					if (!r.hasOwnProperty(u) && a.hasOwnProperty(u) && null != a[u])
						if ("style" === u)
							for (s in c = a[u]) c.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
						else "dangerouslySetInnerHTML" !== u && "children" !== u && "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && "autoFocus" !== u && (T.hasOwnProperty(u) ? t || (t = []) : (t = t || []).push(u, null));
				for (u in r) {
					var l = r[u];
					if (c = null != a ? a[u] : void 0, r.hasOwnProperty(u) && l !== c && (null != l || null != c))
						if ("style" === u)
							if (c) {
								for (s in c) !c.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
								for (s in l) l.hasOwnProperty(s) && c[s] !== l[s] && (n || (n = {}), n[s] = l[s])
							} else n || (t || (t = []), t.push(u, n)), n = l;
					else "dangerouslySetInnerHTML" === u ? (l = l ? l.__html : void 0, c = c ? c.__html : void 0, null != l && c !== l && (t = t || []).push(u, l)) : "children" === u ? c === l || "string" !== typeof l && "number" !== typeof l || (t = t || []).push(u, "" + l) : "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && (T.hasOwnProperty(u) ? (null != l && sn(o, u), t || c === l || (t = [])) : (t = t || []).push(u, l))
				}
				n && (t = t || []).push("style", n), o = t, (e.updateQueue = o) && (e.effectTag |= 4)
			}
		}, Ba = function(t, e, n, r) {
			n !== r && (e.effectTag |= 4)
		};
		var Za = "function" === typeof WeakSet ? WeakSet : Set;

		function tu(t, e) {
			var n = e.source,
				r = e.stack;
			null === r && null !== n && (r = yt(n)), null !== n && mt(n.type), e = e.value, null !== t && 1 === t.tag && mt(t.type);
			try {
				console.error(e)
			} catch (i) {
				setTimeout((function() {
					throw i
				}))
			}
		}

		function eu(t) {
			var e = t.ref;
			if (null !== e)
				if ("function" === typeof e) try {
					e(null)
				} catch (n) {
					gs(t, n)
				} else e.current = null
		}

		function nu(t, e) {
			switch (e.tag) {
				case 0:
				case 11:
				case 15:
				case 22:
					return;
				case 1:
					if (256 & e.effectTag && null !== t) {
						var n = t.memoizedProps,
							r = t.memoizedState;
						e = (t = e.stateNode).getSnapshotBeforeUpdate(e.elementType === e.type ? n : Qi(e.type, n), r), t.__reactInternalSnapshotBeforeUpdate = e
					}
					return;
				case 3:
				case 5:
				case 6:
				case 4:
				case 17:
					return
			}
			throw Error(a(163))
		}

		function ru(t, e) {
			if (null !== (e = null !== (e = e.updateQueue) ? e.lastEffect : null)) {
				var n = e = e.next;
				do {
					if ((n.tag & t) === t) {
						var r = n.destroy;
						n.destroy = void 0, void 0 !== r && r()
					}
					n = n.next
				} while (n !== e)
			}
		}

		function iu(t, e) {
			if (null !== (e = null !== (e = e.updateQueue) ? e.lastEffect : null)) {
				var n = e = e.next;
				do {
					if ((n.tag & t) === t) {
						var r = n.create;
						n.destroy = r()
					}
					n = n.next
				} while (n !== e)
			}
		}

		function ou(t, e, n) {
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
				case 22:
					return void iu(3, n);
				case 1:
					if (t = n.stateNode, 4 & n.effectTag)
						if (null === e) t.componentDidMount();
						else {
							var r = n.elementType === n.type ? e.memoizedProps : Qi(n.type, e.memoizedProps);
							t.componentDidUpdate(r, e.memoizedState, t.__reactInternalSnapshotBeforeUpdate)
						} return void(null !== (e = n.updateQueue) && fo(n, e, t));
				case 3:
					if (null !== (e = n.updateQueue)) {
						if (t = null, null !== n.child) switch (n.child.tag) {
							case 5:
								t = n.child.stateNode;
								break;
							case 1:
								t = n.child.stateNode
						}
						fo(n, e, t)
					}
					return;
				case 5:
					return t = n.stateNode, void(null === e && 4 & n.effectTag && yn(n.type, n.memoizedProps) && t.focus());
				case 6:
				case 4:
				case 12:
					return;
				case 13:
					return void(null === n.memoizedState && (n = n.alternate, null !== n && (n = n.memoizedState, null !== n && (n = n.dehydrated, null !== n && Me(n)))));
				case 19:
				case 17:
				case 20:
				case 21:
					return
			}
			throw Error(a(163))
		}

		function au(t, e, n) {
			switch ("function" === typeof Es && Es(e), e.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
				case 22:
					if (null !== (t = e.updateQueue) && null !== (t = t.lastEffect)) {
						var r = t.next;
						Bi(97 < n ? 97 : n, (function() {
							var t = r;
							do {
								var n = t.destroy;
								if (void 0 !== n) {
									var i = e;
									try {
										n()
									} catch (o) {
										gs(i, o)
									}
								}
								t = t.next
							} while (t !== r)
						}))
					}
					break;
				case 1:
					eu(e), "function" === typeof(n = e.stateNode).componentWillUnmount && function(t, e) {
						try {
							e.props = t.memoizedProps, e.state = t.memoizedState, e.componentWillUnmount()
						} catch (n) {
							gs(t, n)
						}
					}(e, n);
					break;
				case 5:
					eu(e);
					break;
				case 4:
					lu(t, e, n)
			}
		}

		function uu(t) {
			var e = t.alternate;
			t.return = null, t.child = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.alternate = null, t.firstEffect = null, t.lastEffect = null, t.pendingProps = null, t.memoizedProps = null, t.stateNode = null, null !== e && uu(e)
		}

		function su(t) {
			return 5 === t.tag || 3 === t.tag || 4 === t.tag
		}

		function cu(t) {
			t: {
				for (var e = t.return; null !== e;) {
					if (su(e)) {
						var n = e;
						break t
					}
					e = e.return
				}
				throw Error(a(160))
			}
			switch (e = n.stateNode, n.tag) {
				case 5:
					var r = !1;
					break;
				case 3:
				case 4:
					e = e.containerInfo, r = !0;
					break;
				default:
					throw Error(a(161))
			}
			16 & n.effectTag && (Vt(e, ""), n.effectTag &= -17);t: e: for (n = t;;) {
				for (; null === n.sibling;) {
					if (null === n.return || su(n.return)) {
						n = null;
						break t
					}
					n = n.return
				}
				for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag;) {
					if (2 & n.effectTag) continue e;
					if (null === n.child || 4 === n.tag) continue e;
					n.child.return = n, n = n.child
				}
				if (!(2 & n.effectTag)) {
					n = n.stateNode;
					break t
				}
			}
			r ? function t(e, n, r) {
				var i = e.tag,
					o = 5 === i || 6 === i;
				if (o) e = o ? e.stateNode : e.stateNode.instance, n ? 8 === r.nodeType ? r.parentNode.insertBefore(e, n) : r.insertBefore(e, n) : (8 === r.nodeType ? (n = r.parentNode).insertBefore(e, r) : (n = r).appendChild(e), null !== (r = r._reactRootContainer) && void 0 !== r || null !== n.onclick || (n.onclick = cn));
				else if (4 !== i && null !== (e = e.child))
					for (t(e, n, r), e = e.sibling; null !== e;) t(e, n, r), e = e.sibling
			}(t, n, e) : function t(e, n, r) {
				var i = e.tag,
					o = 5 === i || 6 === i;
				if (o) e = o ? e.stateNode : e.stateNode.instance, n ? r.insertBefore(e, n) : r.appendChild(e);
				else if (4 !== i && null !== (e = e.child))
					for (t(e, n, r), e = e.sibling; null !== e;) t(e, n, r), e = e.sibling
			}(t, n, e)
		}

		function lu(t, e, n) {
			for (var r, i, o = e, u = !1;;) {
				if (!u) {
					u = o.return;
					t: for (;;) {
						if (null === u) throw Error(a(160));
						switch (r = u.stateNode, u.tag) {
							case 5:
								i = !1;
								break t;
							case 3:
							case 4:
								r = r.containerInfo, i = !0;
								break t
						}
						u = u.return
					}
					u = !0
				}
				if (5 === o.tag || 6 === o.tag) {
					t: for (var s = t, c = o, l = n, f = c;;)
						if (au(s, f, l), null !== f.child && 4 !== f.tag) f.child.return = f, f = f.child;
						else {
							if (f === c) break t;
							for (; null === f.sibling;) {
								if (null === f.return || f.return === c) break t;
								f = f.return
							}
							f.sibling.return = f.return, f = f.sibling
						}i ? (s = r, c = o.stateNode, 8 === s.nodeType ? s.parentNode.removeChild(c) : s.removeChild(c)) : r.removeChild(o.stateNode)
				}
				else if (4 === o.tag) {
					if (null !== o.child) {
						r = o.stateNode.containerInfo, i = !0, o.child.return = o, o = o.child;
						continue
					}
				} else if (au(t, o, n), null !== o.child) {
					o.child.return = o, o = o.child;
					continue
				}
				if (o === e) break;
				for (; null === o.sibling;) {
					if (null === o.return || o.return === e) return;
					4 === (o = o.return).tag && (u = !1)
				}
				o.sibling.return = o.return, o = o.sibling
			}
		}

		function fu(t, e) {
			switch (e.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
				case 22:
					return void ru(3, e);
				case 1:
					return;
				case 5:
					var n = e.stateNode;
					if (null != n) {
						var r = e.memoizedProps,
							i = null !== t ? t.memoizedProps : r;
						t = e.type;
						var o = e.updateQueue;
						if (e.updateQueue = null, null !== o) {
							for (n[Sn] = r, "input" === t && "radio" === r.type && null != r.name && Tt(n, r), an(t, i), e = an(t, r), i = 0; i < o.length; i += 2) {
								var u = o[i],
									s = o[i + 1];
								"style" === u ? nn(n, s) : "dangerouslySetInnerHTML" === u ? Ft(n, s) : "children" === u ? Vt(n, s) : $(n, u, s, e)
							}
							switch (t) {
								case "input":
									St(n, r);
									break;
								case "textarea":
									Dt(n, r);
									break;
								case "select":
									e = n._wrapperState.wasMultiple, n._wrapperState.wasMultiple = !!r.multiple, null != (t = r.value) ? xt(n, !!r.multiple, t, !1) : e !== !!r.multiple && (null != r.defaultValue ? xt(n, !!r.multiple, r.defaultValue, !0) : xt(n, !!r.multiple, r.multiple ? [] : "", !1))
							}
						}
					}
					return;
				case 6:
					if (null === e.stateNode) throw Error(a(162));
					return void(e.stateNode.nodeValue = e.memoizedProps);
				case 3:
					return void((e = e.stateNode).hydrate && (e.hydrate = !1, Me(e.containerInfo)));
				case 12:
					return;
				case 13:
					if (n = e, null === e.memoizedState ? r = !1 : (r = !0, n = e.child, Ru = Fi()), null !== n) t: for (t = n;;) {
						if (5 === t.tag) o = t.stateNode, r ? "function" === typeof(o = o.style).setProperty ? o.setProperty("display", "none", "important") : o.display = "none" : (o = t.stateNode, i = void 0 !== (i = t.memoizedProps.style) && null !== i && i.hasOwnProperty("display") ? i.display : null, o.style.display = en("display", i));
						else if (6 === t.tag) t.stateNode.nodeValue = r ? "" : t.memoizedProps;
						else {
							if (13 === t.tag && null !== t.memoizedState && null === t.memoizedState.dehydrated) {
								(o = t.child.sibling).return = t, t = o;
								continue
							}
							if (null !== t.child) {
								t.child.return = t, t = t.child;
								continue
							}
						}
						if (t === n) break;
						for (; null === t.sibling;) {
							if (null === t.return || t.return === n) break t;
							t = t.return
						}
						t.sibling.return = t.return, t = t.sibling
					}
					return void hu(e);
				case 19:
					return void hu(e);
				case 17:
					return
			}
			throw Error(a(163))
		}

		function hu(t) {
			var e = t.updateQueue;
			if (null !== e) {
				t.updateQueue = null;
				var n = t.stateNode;
				null === n && (n = t.stateNode = new Za), e.forEach((function(e) {
					var r = ws.bind(null, t, e);
					n.has(e) || (n.add(e), e.then(r, r))
				}))
			}
		}
		var pu = "function" === typeof WeakMap ? WeakMap : Map;

		function du(t, e, n) {
			(n = uo(n, null)).tag = 3, n.payload = {
				element: null
			};
			var r = e.value;
			return n.callback = function() {
				Mu || (Mu = !0, ju = r), tu(t, e)
			}, n
		}

		function vu(t, e, n) {
			(n = uo(n, null)).tag = 3;
			var r = t.type.getDerivedStateFromError;
			if ("function" === typeof r) {
				var i = e.value;
				n.payload = function() {
					return tu(t, e), r(i)
				}
			}
			var o = t.stateNode;
			return null !== o && "function" === typeof o.componentDidCatch && (n.callback = function() {
				"function" !== typeof r && (null === Uu ? Uu = new Set([this]) : Uu.add(this), tu(t, e));
				var n = e.stack;
				this.componentDidCatch(e.value, {
					componentStack: null !== n ? n : ""
				})
			}), n
		}
		var mu, yu = Math.ceil,
			gu = Y.ReactCurrentDispatcher,
			bu = Y.ReactCurrentOwner,
			wu = 0,
			_u = 3,
			Eu = 4,
			Iu = 0,
			Tu = null,
			Su = null,
			ku = 0,
			Nu = wu,
			Au = null,
			xu = 1073741823,
			Ou = 1073741823,
			Cu = null,
			Du = 0,
			Pu = !1,
			Ru = 0,
			Lu = null,
			Mu = !1,
			ju = null,
			Uu = null,
			Fu = !1,
			Vu = null,
			zu = 90,
			Bu = null,
			qu = 0,
			Gu = null,
			Wu = 0;

		function Hu() {
			return 0 !== (48 & Iu) ? 1073741821 - (Fi() / 10 | 0) : 0 !== Wu ? Wu : Wu = 1073741821 - (Fi() / 10 | 0)
		}

		function Ku(t, e, n) {
			if (0 === (2 & (e = e.mode))) return 1073741823;
			var r = Vi();
			if (0 === (4 & e)) return 99 === r ? 1073741823 : 1073741822;
			if (0 !== (16 & Iu)) return ku;
			if (null !== n) t = Ki(t, 0 | n.timeoutMs || 5e3, 250);
			else switch (r) {
				case 99:
					t = 1073741823;
					break;
				case 98:
					t = Ki(t, 150, 100);
					break;
				case 97:
				case 96:
					t = Ki(t, 5e3, 250);
					break;
				case 95:
					t = 2;
					break;
				default:
					throw Error(a(326))
			}
			return null !== Tu && t === ku && --t, t
		}

		function Qu(t, e) {
			if (50 < qu) throw qu = 0, Gu = null, Error(a(185));
			if (null !== (t = Xu(t, e))) {
				var n = Vi();
				1073741823 === e ? 0 !== (8 & Iu) && 0 === (48 & Iu) ? Zu(t) : ($u(t), 0 === Iu && Wi()) : $u(t), 0 === (4 & Iu) || 98 !== n && 99 !== n || (null === Bu ? Bu = new Map([
					[t, e]
				]) : (void 0 === (n = Bu.get(t)) || n > e) && Bu.set(t, e))
			}
		}

		function Xu(t, e) {
			t.expirationTime < e && (t.expirationTime = e);
			var n = t.alternate;
			null !== n && n.expirationTime < e && (n.expirationTime = e);
			var r = t.return,
				i = null;
			if (null === r && 3 === t.tag) i = t.stateNode;
			else
				for (; null !== r;) {
					if (n = r.alternate, r.childExpirationTime < e && (r.childExpirationTime = e), null !== n && n.childExpirationTime < e && (n.childExpirationTime = e), null === r.return && 3 === r.tag) {
						i = r.stateNode;
						break
					}
					r = r.return
				}
			return null !== i && (Tu === i && (as(e), Nu === Eu && Ps(i, ku)), Rs(i, e)), i
		}

		function Yu(t) {
			var e = t.lastExpiredTime;
			if (0 !== e) return e;
			if (!Ds(t, e = t.firstPendingTime)) return e;
			var n = t.lastPingedTime;
			return 2 >= (t = n > (t = t.nextKnownPendingLevel) ? n : t) && e !== t ? 0 : t
		}

		function $u(t) {
			if (0 !== t.lastExpiredTime) t.callbackExpirationTime = 1073741823, t.callbackPriority = 99, t.callbackNode = Gi(Zu.bind(null, t));
			else {
				var e = Yu(t),
					n = t.callbackNode;
				if (0 === e) null !== n && (t.callbackNode = null, t.callbackExpirationTime = 0, t.callbackPriority = 90);
				else {
					var r = Hu();
					if (1073741823 === e ? r = 99 : 1 === e || 2 === e ? r = 95 : r = 0 >= (r = 10 * (1073741821 - e) - 10 * (1073741821 - r)) ? 99 : 250 >= r ? 98 : 5250 >= r ? 97 : 95, null !== n) {
						var i = t.callbackPriority;
						if (t.callbackExpirationTime === e && i >= r) return;
						n !== Di && Ii(n)
					}
					t.callbackExpirationTime = e, t.callbackPriority = r, e = 1073741823 === e ? Gi(Zu.bind(null, t)) : qi(r, Ju.bind(null, t), {
						timeout: 10 * (1073741821 - e) - Fi()
					}), t.callbackNode = e
				}
			}
		}

		function Ju(t, e) {
			if (Wu = 0, e) return Ls(t, e = Hu()), $u(t), null;
			var n = Yu(t);
			if (0 !== n) {
				if (e = t.callbackNode, 0 !== (48 & Iu)) throw Error(a(327));
				if (vs(), t === Tu && n === ku || ns(t, n), null !== Su) {
					var r = Iu;
					Iu |= 16;
					for (var i = is();;) try {
						ss();
						break
					} catch (s) {
						rs(t, s)
					}
					if (Zi(), Iu = r, gu.current = i, 1 === Nu) throw e = Au, ns(t, n), Ps(t, n), $u(t), e;
					if (null === Su) switch (i = t.finishedWork = t.current.alternate, t.finishedExpirationTime = n, r = Nu, Tu = null, r) {
						case wu:
						case 1:
							throw Error(a(345));
						case 2:
							Ls(t, 2 < n ? 2 : n);
							break;
						case _u:
							if (Ps(t, n), n === (r = t.lastSuspendedTime) && (t.nextKnownPendingLevel = fs(i)), 1073741823 === xu && 10 < (i = Ru + 500 - Fi())) {
								if (Pu) {
									var o = t.lastPingedTime;
									if (0 === o || o >= n) {
										t.lastPingedTime = n, ns(t, n);
										break
									}
								}
								if (0 !== (o = Yu(t)) && o !== n) break;
								if (0 !== r && r !== n) {
									t.lastPingedTime = r;
									break
								}
								t.timeoutHandle = bn(hs.bind(null, t), i);
								break
							}
							hs(t);
							break;
						case Eu:
							if (Ps(t, n), n === (r = t.lastSuspendedTime) && (t.nextKnownPendingLevel = fs(i)), Pu && (0 === (i = t.lastPingedTime) || i >= n)) {
								t.lastPingedTime = n, ns(t, n);
								break
							}
							if (0 !== (i = Yu(t)) && i !== n) break;
							if (0 !== r && r !== n) {
								t.lastPingedTime = r;
								break
							}
							if (1073741823 !== Ou ? r = 10 * (1073741821 - Ou) - Fi() : 1073741823 === xu ? r = 0 : (r = 10 * (1073741821 - xu) - 5e3, 0 > (r = (i = Fi()) - r) && (r = 0), (n = 10 * (1073741821 - n) - i) < (r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * yu(r / 1960)) - r) && (r = n)), 10 < r) {
								t.timeoutHandle = bn(hs.bind(null, t), r);
								break
							}
							hs(t);
							break;
						case 5:
							if (1073741823 !== xu && null !== Cu) {
								o = xu;
								var u = Cu;
								if (0 >= (r = 0 | u.busyMinDurationMs) ? r = 0 : (i = 0 | u.busyDelayMs, r = (o = Fi() - (10 * (1073741821 - o) - (0 | u.timeoutMs || 5e3))) <= i ? 0 : i + r - o), 10 < r) {
									Ps(t, n), t.timeoutHandle = bn(hs.bind(null, t), r);
									break
								}
							}
							hs(t);
							break;
						default:
							throw Error(a(329))
					}
					if ($u(t), t.callbackNode === e) return Ju.bind(null, t)
				}
			}
			return null
		}

		function Zu(t) {
			var e = t.lastExpiredTime;
			if (e = 0 !== e ? e : 1073741823, 0 !== (48 & Iu)) throw Error(a(327));
			if (vs(), t === Tu && e === ku || ns(t, e), null !== Su) {
				var n = Iu;
				Iu |= 16;
				for (var r = is();;) try {
					us();
					break
				} catch (i) {
					rs(t, i)
				}
				if (Zi(), Iu = n, gu.current = r, 1 === Nu) throw n = Au, ns(t, e), Ps(t, e), $u(t), n;
				if (null !== Su) throw Error(a(261));
				t.finishedWork = t.current.alternate, t.finishedExpirationTime = e, Tu = null, hs(t), $u(t)
			}
			return null
		}

		function ts(t, e) {
			var n = Iu;
			Iu |= 1;
			try {
				return t(e)
			} finally {
				0 === (Iu = n) && Wi()
			}
		}

		function es(t, e) {
			var n = Iu;
			Iu &= -2, Iu |= 8;
			try {
				return t(e)
			} finally {
				0 === (Iu = n) && Wi()
			}
		}

		function ns(t, e) {
			t.finishedWork = null, t.finishedExpirationTime = 0;
			var n = t.timeoutHandle;
			if (-1 !== n && (t.timeoutHandle = -1, wn(n)), null !== Su)
				for (n = Su.return; null !== n;) {
					var r = n;
					switch (r.tag) {
						case 1:
							null !== (r = r.type.childContextTypes) && void 0 !== r && mi();
							break;
						case 3:
							Po(), si(hi), si(fi);
							break;
						case 5:
							Lo(r);
							break;
						case 4:
							Po();
							break;
						case 13:
						case 19:
							si(Mo);
							break;
						case 10:
							to(r)
					}
					n = n.return
				}
			Tu = t, Su = ks(t.current, null), ku = e, Nu = wu, Au = null, Ou = xu = 1073741823, Cu = null, Du = 0, Pu = !1
		}

		function rs(t, e) {
			for (;;) {
				try {
					if (Zi(), Fo.current = ma, Wo)
						for (var n = Bo.memoizedState; null !== n;) {
							var r = n.queue;
							null !== r && (r.pending = null), n = n.next
						}
					if (zo = 0, Go = qo = Bo = null, Wo = !1, null === Su || null === Su.return) return Nu = 1, Au = e, Su = null;
					t: {
						var i = t,
							o = Su.return,
							a = Su,
							u = e;
						if (e = ku, a.effectTag |= 2048, a.firstEffect = a.lastEffect = null, null !== u && "object" === typeof u && "function" === typeof u.then) {
							var s = u;
							if (0 === (2 & a.mode)) {
								var c = a.alternate;
								c ? (a.updateQueue = c.updateQueue, a.memoizedState = c.memoizedState, a.expirationTime = c.expirationTime) : (a.updateQueue = null, a.memoizedState = null)
							}
							var l = 0 !== (1 & Mo.current),
								f = o;
							do {
								var h;
								if (h = 13 === f.tag) {
									var p = f.memoizedState;
									if (null !== p) h = null !== p.dehydrated;
									else {
										var d = f.memoizedProps;
										h = void 0 !== d.fallback && (!0 !== d.unstable_avoidThisFallback || !l)
									}
								}
								if (h) {
									var v = f.updateQueue;
									if (null === v) {
										var m = new Set;
										m.add(s), f.updateQueue = m
									} else v.add(s);
									if (0 === (2 & f.mode)) {
										if (f.effectTag |= 64, a.effectTag &= -2981, 1 === a.tag)
											if (null === a.alternate) a.tag = 17;
											else {
												var y = uo(1073741823, null);
												y.tag = 2, so(a, y)
											} a.expirationTime = 1073741823;
										break t
									}
									u = void 0, a = e;
									var g = i.pingCache;
									if (null === g ? (g = i.pingCache = new pu, u = new Set, g.set(s, u)) : void 0 === (u = g.get(s)) && (u = new Set, g.set(s, u)), !u.has(a)) {
										u.add(a);
										var b = bs.bind(null, i, s, a);
										s.then(b, b)
									}
									f.effectTag |= 4096, f.expirationTime = e;
									break t
								}
								f = f.return
							} while (null !== f);
							u = Error((mt(a.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + yt(a))
						}
						5 !== Nu && (Nu = 2),
						u = Ja(u, a),
						f = o;do {
							switch (f.tag) {
								case 3:
									s = u, f.effectTag |= 4096, f.expirationTime = e, co(f, du(f, s, e));
									break t;
								case 1:
									s = u;
									var w = f.type,
										_ = f.stateNode;
									if (0 === (64 & f.effectTag) && ("function" === typeof w.getDerivedStateFromError || null !== _ && "function" === typeof _.componentDidCatch && (null === Uu || !Uu.has(_)))) {
										f.effectTag |= 4096, f.expirationTime = e, co(f, vu(f, s, e));
										break t
									}
							}
							f = f.return
						} while (null !== f)
					}
					Su = ls(Su)
				} catch (E) {
					e = E;
					continue
				}
				break
			}
		}

		function is() {
			var t = gu.current;
			return gu.current = ma, null === t ? ma : t
		}

		function os(t, e) {
			t < xu && 2 < t && (xu = t), null !== e && t < Ou && 2 < t && (Ou = t, Cu = e)
		}

		function as(t) {
			t > Du && (Du = t)
		}

		function us() {
			for (; null !== Su;) Su = cs(Su)
		}

		function ss() {
			for (; null !== Su && !Pi();) Su = cs(Su)
		}

		function cs(t) {
			var e = mu(t.alternate, t, ku);
			return t.memoizedProps = t.pendingProps, null === e && (e = ls(t)), bu.current = null, e
		}

		function ls(t) {
			Su = t;
			do {
				var e = Su.alternate;
				if (t = Su.return, 0 === (2048 & Su.effectTag)) {
					if (e = Ya(e, Su, ku), 1 === ku || 1 !== Su.childExpirationTime) {
						for (var n = 0, r = Su.child; null !== r;) {
							var i = r.expirationTime,
								o = r.childExpirationTime;
							i > n && (n = i), o > n && (n = o), r = r.sibling
						}
						Su.childExpirationTime = n
					}
					if (null !== e) return e;
					null !== t && 0 === (2048 & t.effectTag) && (null === t.firstEffect && (t.firstEffect = Su.firstEffect), null !== Su.lastEffect && (null !== t.lastEffect && (t.lastEffect.nextEffect = Su.firstEffect), t.lastEffect = Su.lastEffect), 1 < Su.effectTag && (null !== t.lastEffect ? t.lastEffect.nextEffect = Su : t.firstEffect = Su, t.lastEffect = Su))
				} else {
					if (null !== (e = $a(Su))) return e.effectTag &= 2047, e;
					null !== t && (t.firstEffect = t.lastEffect = null, t.effectTag |= 2048)
				}
				if (null !== (e = Su.sibling)) return e;
				Su = t
			} while (null !== Su);
			return Nu === wu && (Nu = 5), null
		}

		function fs(t) {
			var e = t.expirationTime;
			return e > (t = t.childExpirationTime) ? e : t
		}

		function hs(t) {
			var e = Vi();
			return Bi(99, ps.bind(null, t, e)), null
		}

		function ps(t, e) {
			do {
				vs()
			} while (null !== Vu);
			if (0 !== (48 & Iu)) throw Error(a(327));
			var n = t.finishedWork,
				r = t.finishedExpirationTime;
			if (null === n) return null;
			if (t.finishedWork = null, t.finishedExpirationTime = 0, n === t.current) throw Error(a(177));
			t.callbackNode = null, t.callbackExpirationTime = 0, t.callbackPriority = 90, t.nextKnownPendingLevel = 0;
			var i = fs(n);
			if (t.firstPendingTime = i, r <= t.lastSuspendedTime ? t.firstSuspendedTime = t.lastSuspendedTime = t.nextKnownPendingLevel = 0 : r <= t.firstSuspendedTime && (t.firstSuspendedTime = r - 1), r <= t.lastPingedTime && (t.lastPingedTime = 0), r <= t.lastExpiredTime && (t.lastExpiredTime = 0), t === Tu && (Su = Tu = null, ku = 0), 1 < n.effectTag ? null !== n.lastEffect ? (n.lastEffect.nextEffect = n, i = n.firstEffect) : i = n : i = n.firstEffect, null !== i) {
				var o = Iu;
				Iu |= 32, bu.current = null, vn = He;
				var u = pn();
				if (dn(u)) {
					if ("selectionStart" in u) var s = {
						start: u.selectionStart,
						end: u.selectionEnd
					};
					else t: {
						var c = (s = (s = u.ownerDocument) && s.defaultView || window).getSelection && s.getSelection();
						if (c && 0 !== c.rangeCount) {
							s = c.anchorNode;
							var l = c.anchorOffset,
								f = c.focusNode;
							c = c.focusOffset;
							try {
								s.nodeType, f.nodeType
							} catch (k) {
								s = null;
								break t
							}
							var h = 0,
								p = -1,
								d = -1,
								v = 0,
								m = 0,
								y = u,
								g = null;
							e: for (;;) {
								for (var b; y !== s || 0 !== l && 3 !== y.nodeType || (p = h + l), y !== f || 0 !== c && 3 !== y.nodeType || (d = h + c), 3 === y.nodeType && (h += y.nodeValue.length), null !== (b = y.firstChild);) g = y, y = b;
								for (;;) {
									if (y === u) break e;
									if (g === s && ++v === l && (p = h), g === f && ++m === c && (d = h), null !== (b = y.nextSibling)) break;
									g = (y = g).parentNode
								}
								y = b
							}
							s = -1 === p || -1 === d ? null : {
								start: p,
								end: d
							}
						} else s = null
					}
					s = s || {
						start: 0,
						end: 0
					}
				} else s = null;
				mn = {
					activeElementDetached: null,
					focusedElem: u,
					selectionRange: s
				}, He = !1, Lu = i;
				do {
					try {
						ds()
					} catch (k) {
						if (null === Lu) throw Error(a(330));
						gs(Lu, k), Lu = Lu.nextEffect
					}
				} while (null !== Lu);
				Lu = i;
				do {
					try {
						for (u = t, s = e; null !== Lu;) {
							var w = Lu.effectTag;
							if (16 & w && Vt(Lu.stateNode, ""), 128 & w) {
								var _ = Lu.alternate;
								if (null !== _) {
									var E = _.ref;
									null !== E && ("function" === typeof E ? E(null) : E.current = null)
								}
							}
							switch (1038 & w) {
								case 2:
									cu(Lu), Lu.effectTag &= -3;
									break;
								case 6:
									cu(Lu), Lu.effectTag &= -3, fu(Lu.alternate, Lu);
									break;
								case 1024:
									Lu.effectTag &= -1025;
									break;
								case 1028:
									Lu.effectTag &= -1025, fu(Lu.alternate, Lu);
									break;
								case 4:
									fu(Lu.alternate, Lu);
									break;
								case 8:
									lu(u, l = Lu, s), uu(l)
							}
							Lu = Lu.nextEffect
						}
					} catch (k) {
						if (null === Lu) throw Error(a(330));
						gs(Lu, k), Lu = Lu.nextEffect
					}
				} while (null !== Lu);
				if (E = mn, _ = pn(), w = E.focusedElem, s = E.selectionRange, _ !== w && w && w.ownerDocument && function t(e, n) {
						return !(!e || !n) && (e === n || (!e || 3 !== e.nodeType) && (n && 3 === n.nodeType ? t(e, n.parentNode) : "contains" in e ? e.contains(n) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(n))))
					}(w.ownerDocument.documentElement, w)) {
					null !== s && dn(w) && (_ = s.start, void 0 === (E = s.end) && (E = _), "selectionStart" in w ? (w.selectionStart = _, w.selectionEnd = Math.min(E, w.value.length)) : (E = (_ = w.ownerDocument || document) && _.defaultView || window).getSelection && (E = E.getSelection(), l = w.textContent.length, u = Math.min(s.start, l), s = void 0 === s.end ? u : Math.min(s.end, l), !E.extend && u > s && (l = s, s = u, u = l), l = hn(w, u), f = hn(w, s), l && f && (1 !== E.rangeCount || E.anchorNode !== l.node || E.anchorOffset !== l.offset || E.focusNode !== f.node || E.focusOffset !== f.offset) && ((_ = _.createRange()).setStart(l.node, l.offset), E.removeAllRanges(), u > s ? (E.addRange(_), E.extend(f.node, f.offset)) : (_.setEnd(f.node, f.offset), E.addRange(_))))), _ = [];
					for (E = w; E = E.parentNode;) 1 === E.nodeType && _.push({
						element: E,
						left: E.scrollLeft,
						top: E.scrollTop
					});
					for ("function" === typeof w.focus && w.focus(), w = 0; w < _.length; w++)(E = _[w]).element.scrollLeft = E.left, E.element.scrollTop = E.top
				}
				He = !!vn, mn = vn = null, t.current = n, Lu = i;
				do {
					try {
						for (w = t; null !== Lu;) {
							var I = Lu.effectTag;
							if (36 & I && ou(w, Lu.alternate, Lu), 128 & I) {
								_ = void 0;
								var T = Lu.ref;
								if (null !== T) {
									var S = Lu.stateNode;
									switch (Lu.tag) {
										case 5:
											_ = S;
											break;
										default:
											_ = S
									}
									"function" === typeof T ? T(_) : T.current = _
								}
							}
							Lu = Lu.nextEffect
						}
					} catch (k) {
						if (null === Lu) throw Error(a(330));
						gs(Lu, k), Lu = Lu.nextEffect
					}
				} while (null !== Lu);
				Lu = null, Ri(), Iu = o
			} else t.current = n;
			if (Fu) Fu = !1, Vu = t, zu = e;
			else
				for (Lu = i; null !== Lu;) e = Lu.nextEffect, Lu.nextEffect = null, Lu = e;
			if (0 === (e = t.firstPendingTime) && (Uu = null), 1073741823 === e ? t === Gu ? qu++ : (qu = 0, Gu = t) : qu = 0, "function" === typeof _s && _s(n.stateNode, r), $u(t), Mu) throw Mu = !1, t = ju, ju = null, t;
			return 0 !== (8 & Iu) || Wi(), null
		}

		function ds() {
			for (; null !== Lu;) {
				var t = Lu.effectTag;
				0 !== (256 & t) && nu(Lu.alternate, Lu), 0 === (512 & t) || Fu || (Fu = !0, qi(97, (function() {
					return vs(), null
				}))), Lu = Lu.nextEffect
			}
		}

		function vs() {
			if (90 !== zu) {
				var t = 97 < zu ? 97 : zu;
				return zu = 90, Bi(t, ms)
			}
		}

		function ms() {
			if (null === Vu) return !1;
			var t = Vu;
			if (Vu = null, 0 !== (48 & Iu)) throw Error(a(331));
			var e = Iu;
			for (Iu |= 32, t = t.current.firstEffect; null !== t;) {
				try {
					var n = t;
					if (0 !== (512 & n.effectTag)) switch (n.tag) {
						case 0:
						case 11:
						case 15:
						case 22:
							ru(5, n), iu(5, n)
					}
				} catch (r) {
					if (null === t) throw Error(a(330));
					gs(t, r)
				}
				n = t.nextEffect, t.nextEffect = null, t = n
			}
			return Iu = e, Wi(), !0
		}

		function ys(t, e, n) {
			so(t, e = du(t, e = Ja(n, e), 1073741823)), null !== (t = Xu(t, 1073741823)) && $u(t)
		}

		function gs(t, e) {
			if (3 === t.tag) ys(t, t, e);
			else
				for (var n = t.return; null !== n;) {
					if (3 === n.tag) {
						ys(n, t, e);
						break
					}
					if (1 === n.tag) {
						var r = n.stateNode;
						if ("function" === typeof n.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === Uu || !Uu.has(r))) {
							so(n, t = vu(n, t = Ja(e, t), 1073741823)), null !== (n = Xu(n, 1073741823)) && $u(n);
							break
						}
					}
					n = n.return
				}
		}

		function bs(t, e, n) {
			var r = t.pingCache;
			null !== r && r.delete(e), Tu === t && ku === n ? Nu === Eu || Nu === _u && 1073741823 === xu && Fi() - Ru < 500 ? ns(t, ku) : Pu = !0 : Ds(t, n) && (0 !== (e = t.lastPingedTime) && e < n || (t.lastPingedTime = n, $u(t)))
		}

		function ws(t, e) {
			var n = t.stateNode;
			null !== n && n.delete(e), 0 === (e = 0) && (e = Ku(e = Hu(), t, null)), null !== (t = Xu(t, e)) && $u(t)
		}
		mu = function(t, e, n) {
			var r = e.expirationTime;
			if (null !== t) {
				var i = e.pendingProps;
				if (t.memoizedProps !== i || hi.current) Oa = !0;
				else {
					if (r < n) {
						switch (Oa = !1, e.tag) {
							case 3:
								Fa(e), Aa();
								break;
							case 5:
								if (Ro(e), 4 & e.mode && 1 !== n && i.hidden) return e.expirationTime = e.childExpirationTime = 1, null;
								break;
							case 1:
								vi(e.type) && bi(e);
								break;
							case 4:
								Do(e, e.stateNode.containerInfo);
								break;
							case 10:
								r = e.memoizedProps.value, i = e.type._context, ci(Xi, i._currentValue), i._currentValue = r;
								break;
							case 13:
								if (null !== e.memoizedState) return 0 !== (r = e.child.childExpirationTime) && r >= n ? Ga(t, e, n) : (ci(Mo, 1 & Mo.current), null !== (e = Qa(t, e, n)) ? e.sibling : null);
								ci(Mo, 1 & Mo.current);
								break;
							case 19:
								if (r = e.childExpirationTime >= n, 0 !== (64 & t.effectTag)) {
									if (r) return Ka(t, e, n);
									e.effectTag |= 64
								}
								if (null !== (i = e.memoizedState) && (i.rendering = null, i.tail = null), ci(Mo, Mo.current), !r) return null
						}
						return Qa(t, e, n)
					}
					Oa = !1
				}
			} else Oa = !1;
			switch (e.expirationTime = 0, e.tag) {
				case 2:
					if (r = e.type, null !== t && (t.alternate = null, e.alternate = null, e.effectTag |= 2), t = e.pendingProps, i = di(e, fi.current), no(e, n), i = Qo(null, e, r, t, i, n), e.effectTag |= 1, "object" === typeof i && null !== i && "function" === typeof i.render && void 0 === i.$$typeof) {
						if (e.tag = 1, e.memoizedState = null, e.updateQueue = null, vi(r)) {
							var o = !0;
							bi(e)
						} else o = !1;
						e.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null, oo(e);
						var u = r.getDerivedStateFromProps;
						"function" === typeof u && vo(e, r, u, t), i.updater = mo, e.stateNode = i, i._reactInternalFiber = e, wo(e, r, t, n), e = Ua(null, e, r, !0, o, n)
					} else e.tag = 0, Ca(null, e, i, n), e = e.child;
					return e;
				case 16:
					t: {
						if (i = e.elementType, null !== t && (t.alternate = null, e.alternate = null, e.effectTag |= 2), t = e.pendingProps, function(t) {
								if (-1 === t._status) {
									t._status = 0;
									var e = t._ctor;
									e = e(), t._result = e, e.then((function(e) {
										0 === t._status && (e = e.default, t._status = 1, t._result = e)
									}), (function(e) {
										0 === t._status && (t._status = 2, t._result = e)
									}))
								}
							}(i), 1 !== i._status) throw i._result;
						switch (i = i._result, e.type = i, o = e.tag = function(t) {
								if ("function" === typeof t) return Ss(t) ? 1 : 0;
								if (void 0 !== t && null !== t) {
									if ((t = t.$$typeof) === st) return 11;
									if (t === ft) return 14
								}
								return 2
							}(i), t = Qi(i, t), o) {
							case 0:
								e = Ma(null, e, i, t, n);
								break t;
							case 1:
								e = ja(null, e, i, t, n);
								break t;
							case 11:
								e = Da(null, e, i, t, n);
								break t;
							case 14:
								e = Pa(null, e, i, Qi(i.type, t), r, n);
								break t
						}
						throw Error(a(306, i, ""))
					}
					return e;
				case 0:
					return r = e.type, i = e.pendingProps, Ma(t, e, r, i = e.elementType === r ? i : Qi(r, i), n);
				case 1:
					return r = e.type, i = e.pendingProps, ja(t, e, r, i = e.elementType === r ? i : Qi(r, i), n);
				case 3:
					if (Fa(e), r = e.updateQueue, null === t || null === r) throw Error(a(282));
					if (r = e.pendingProps, i = null !== (i = e.memoizedState) ? i.element : null, ao(t, e), lo(e, r, null, n), (r = e.memoizedState.element) === i) Aa(), e = Qa(t, e, n);
					else {
						if ((i = e.stateNode.hydrate) && (_a = _n(e.stateNode.containerInfo.firstChild), wa = e, i = Ea = !0), i)
							for (n = ko(e, null, r, n), e.child = n; n;) n.effectTag = -3 & n.effectTag | 1024, n = n.sibling;
						else Ca(t, e, r, n), Aa();
						e = e.child
					}
					return e;
				case 5:
					return Ro(e), null === t && Sa(e), r = e.type, i = e.pendingProps, o = null !== t ? t.memoizedProps : null, u = i.children, gn(r, i) ? u = null : null !== o && gn(r, o) && (e.effectTag |= 16), La(t, e), 4 & e.mode && 1 !== n && i.hidden ? (e.expirationTime = e.childExpirationTime = 1, e = null) : (Ca(t, e, u, n), e = e.child), e;
				case 6:
					return null === t && Sa(e), null;
				case 13:
					return Ga(t, e, n);
				case 4:
					return Do(e, e.stateNode.containerInfo), r = e.pendingProps, null === t ? e.child = So(e, null, r, n) : Ca(t, e, r, n), e.child;
				case 11:
					return r = e.type, i = e.pendingProps, Da(t, e, r, i = e.elementType === r ? i : Qi(r, i), n);
				case 7:
					return Ca(t, e, e.pendingProps, n), e.child;
				case 8:
				case 12:
					return Ca(t, e, e.pendingProps.children, n), e.child;
				case 10:
					t: {
						r = e.type._context,
						i = e.pendingProps,
						u = e.memoizedProps,
						o = i.value;
						var s = e.type._context;
						if (ci(Xi, s._currentValue), s._currentValue = o, null !== u)
							if (s = u.value, 0 === (o = jr(s, o) ? 0 : 0 | ("function" === typeof r._calculateChangedBits ? r._calculateChangedBits(s, o) : 1073741823))) {
								if (u.children === i.children && !hi.current) {
									e = Qa(t, e, n);
									break t
								}
							} else
								for (null !== (s = e.child) && (s.return = e); null !== s;) {
									var c = s.dependencies;
									if (null !== c) {
										u = s.child;
										for (var l = c.firstContext; null !== l;) {
											if (l.context === r && 0 !== (l.observedBits & o)) {
												1 === s.tag && ((l = uo(n, null)).tag = 2, so(s, l)), s.expirationTime < n && (s.expirationTime = n), null !== (l = s.alternate) && l.expirationTime < n && (l.expirationTime = n), eo(s.return, n), c.expirationTime < n && (c.expirationTime = n);
												break
											}
											l = l.next
										}
									} else u = 10 === s.tag && s.type === e.type ? null : s.child;
									if (null !== u) u.return = s;
									else
										for (u = s; null !== u;) {
											if (u === e) {
												u = null;
												break
											}
											if (null !== (s = u.sibling)) {
												s.return = u.return, u = s;
												break
											}
											u = u.return
										}
									s = u
								}
						Ca(t, e, i.children, n),
						e = e.child
					}
					return e;
				case 9:
					return i = e.type, r = (o = e.pendingProps).children, no(e, n), r = r(i = ro(i, o.unstable_observedBits)), e.effectTag |= 1, Ca(t, e, r, n), e.child;
				case 14:
					return o = Qi(i = e.type, e.pendingProps), Pa(t, e, i, o = Qi(i.type, o), r, n);
				case 15:
					return Ra(t, e, e.type, e.pendingProps, r, n);
				case 17:
					return r = e.type, i = e.pendingProps, i = e.elementType === r ? i : Qi(r, i), null !== t && (t.alternate = null, e.alternate = null, e.effectTag |= 2), e.tag = 1, vi(r) ? (t = !0, bi(e)) : t = !1, no(e, n), go(e, r, i), wo(e, r, i, n), Ua(null, e, r, !0, t, n);
				case 19:
					return Ka(t, e, n)
			}
			throw Error(a(156, e.tag))
		};
		var _s = null,
			Es = null;

		function Is(t, e, n, r) {
			this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.effectTag = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childExpirationTime = this.expirationTime = 0, this.alternate = null
		}

		function Ts(t, e, n, r) {
			return new Is(t, e, n, r)
		}

		function Ss(t) {
			return !(!(t = t.prototype) || !t.isReactComponent)
		}

		function ks(t, e) {
			var n = t.alternate;
			return null === n ? ((n = Ts(t.tag, e, t.key, t.mode)).elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.effectTag = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childExpirationTime = t.childExpirationTime, n.expirationTime = t.expirationTime, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = null === e ? null : {
				expirationTime: e.expirationTime,
				firstContext: e.firstContext,
				responders: e.responders
			}, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n
		}

		function Ns(t, e, n, r, i, o) {
			var u = 2;
			if (r = t, "function" === typeof t) Ss(t) && (u = 1);
			else if ("string" === typeof t) u = 5;
			else t: switch (t) {
				case nt:
					return As(n.children, i, o, e);
				case ut:
					u = 8, i |= 7;
					break;
				case rt:
					u = 8, i |= 1;
					break;
				case it:
					return (t = Ts(12, n, e, 8 | i)).elementType = it, t.type = it, t.expirationTime = o, t;
				case ct:
					return (t = Ts(13, n, e, i)).type = ct, t.elementType = ct, t.expirationTime = o, t;
				case lt:
					return (t = Ts(19, n, e, i)).elementType = lt, t.expirationTime = o, t;
				default:
					if ("object" === typeof t && null !== t) switch (t.$$typeof) {
						case ot:
							u = 10;
							break t;
						case at:
							u = 9;
							break t;
						case st:
							u = 11;
							break t;
						case ft:
							u = 14;
							break t;
						case ht:
							u = 16, r = null;
							break t;
						case pt:
							u = 22;
							break t
					}
					throw Error(a(130, null == t ? t : typeof t, ""))
			}
			return (e = Ts(u, n, e, i)).elementType = t, e.type = r, e.expirationTime = o, e
		}

		function As(t, e, n, r) {
			return (t = Ts(7, t, r, e)).expirationTime = n, t
		}

		function xs(t, e, n) {
			return (t = Ts(6, t, null, e)).expirationTime = n, t
		}

		function Os(t, e, n) {
			return (e = Ts(4, null !== t.children ? t.children : [], t.key, e)).expirationTime = n, e.stateNode = {
				containerInfo: t.containerInfo,
				pendingChildren: null,
				implementation: t.implementation
			}, e
		}

		function Cs(t, e, n) {
			this.tag = e, this.current = null, this.containerInfo = t, this.pingCache = this.pendingChildren = null, this.finishedExpirationTime = 0, this.finishedWork = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = n, this.callbackNode = null, this.callbackPriority = 90, this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0
		}

		function Ds(t, e) {
			var n = t.firstSuspendedTime;
			return t = t.lastSuspendedTime, 0 !== n && n >= e && t <= e
		}

		function Ps(t, e) {
			var n = t.firstSuspendedTime,
				r = t.lastSuspendedTime;
			n < e && (t.firstSuspendedTime = e), (r > e || 0 === n) && (t.lastSuspendedTime = e), e <= t.lastPingedTime && (t.lastPingedTime = 0), e <= t.lastExpiredTime && (t.lastExpiredTime = 0)
		}

		function Rs(t, e) {
			e > t.firstPendingTime && (t.firstPendingTime = e);
			var n = t.firstSuspendedTime;
			0 !== n && (e >= n ? t.firstSuspendedTime = t.lastSuspendedTime = t.nextKnownPendingLevel = 0 : e >= t.lastSuspendedTime && (t.lastSuspendedTime = e + 1), e > t.nextKnownPendingLevel && (t.nextKnownPendingLevel = e))
		}

		function Ls(t, e) {
			var n = t.lastExpiredTime;
			(0 === n || n > e) && (t.lastExpiredTime = e)
		}

		function Ms(t, e, n, r) {
			var i = e.current,
				o = Hu(),
				u = ho.suspense;
			o = Ku(o, i, u);
			t: if (n) {
				e: {
					if (Zt(n = n._reactInternalFiber) !== n || 1 !== n.tag) throw Error(a(170));
					var s = n;do {
						switch (s.tag) {
							case 3:
								s = s.stateNode.context;
								break e;
							case 1:
								if (vi(s.type)) {
									s = s.stateNode.__reactInternalMemoizedMergedChildContext;
									break e
								}
						}
						s = s.return
					} while (null !== s);
					throw Error(a(171))
				}
				if (1 === n.tag) {
					var c = n.type;
					if (vi(c)) {
						n = gi(n, c, s);
						break t
					}
				}
				n = s
			}
			else n = li;
			return null === e.context ? e.context = n : e.pendingContext = n, (e = uo(o, u)).payload = {
				element: t
			}, null !== (r = void 0 === r ? null : r) && (e.callback = r), so(i, e), Qu(i, o), o
		}

		function js(t) {
			if (!(t = t.current).child) return null;
			switch (t.child.tag) {
				case 5:
				default:
					return t.child.stateNode
			}
		}

		function Us(t, e) {
			null !== (t = t.memoizedState) && null !== t.dehydrated && t.retryTime < e && (t.retryTime = e)
		}

		function Fs(t, e) {
			Us(t, e), (t = t.alternate) && Us(t, e)
		}

		function Vs(t, e, n) {
			var r = new Cs(t, e, n = null != n && !0 === n.hydrate),
				i = Ts(3, null, null, 2 === e ? 7 : 1 === e ? 3 : 0);
			r.current = i, i.stateNode = r, oo(i), t[kn] = r.current, n && 0 !== e && function(t, e) {
				var n = Jt(e);
				ke.forEach((function(t) {
					de(t, e, n)
				})), Ne.forEach((function(t) {
					de(t, e, n)
				}))
			}(0, 9 === t.nodeType ? t : t.ownerDocument), this._internalRoot = r
		}

		function zs(t) {
			return !(!t || 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType && (8 !== t.nodeType || " react-mount-point-unstable " !== t.nodeValue))
		}

		function Bs(t, e, n, r, i) {
			var o = n._reactRootContainer;
			if (o) {
				var a = o._internalRoot;
				if ("function" === typeof i) {
					var u = i;
					i = function() {
						var t = js(a);
						u.call(t)
					}
				}
				Ms(e, a, t, i)
			} else {
				if (o = n._reactRootContainer = function(t, e) {
						if (e || (e = !(!(e = t ? 9 === t.nodeType ? t.documentElement : t.firstChild : null) || 1 !== e.nodeType || !e.hasAttribute("data-reactroot"))), !e)
							for (var n; n = t.lastChild;) t.removeChild(n);
						return new Vs(t, 0, e ? {
							hydrate: !0
						} : void 0)
					}(n, r), a = o._internalRoot, "function" === typeof i) {
					var s = i;
					i = function() {
						var t = js(a);
						s.call(t)
					}
				}
				es((function() {
					Ms(e, a, t, i)
				}))
			}
			return js(a)
		}

		function qs(t, e, n) {
			var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
			return {
				$$typeof: et,
				key: null == r ? null : "" + r,
				children: t,
				containerInfo: e,
				implementation: n
			}
		}

		function Gs(t, e) {
			var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
			if (!zs(e)) throw Error(a(200));
			return qs(t, e, null, n)
		}
		Vs.prototype.render = function(t) {
			Ms(t, this._internalRoot, null, null)
		}, Vs.prototype.unmount = function() {
			var t = this._internalRoot,
				e = t.containerInfo;
			Ms(null, t, null, (function() {
				e[kn] = null
			}))
		}, ve = function(t) {
			if (13 === t.tag) {
				var e = Ki(Hu(), 150, 100);
				Qu(t, e), Fs(t, e)
			}
		}, me = function(t) {
			13 === t.tag && (Qu(t, 3), Fs(t, 3))
		}, ye = function(t) {
			if (13 === t.tag) {
				var e = Hu();
				Qu(t, e = Ku(e, t, null)), Fs(t, e)
			}
		}, A = function(t, e, n) {
			switch (e) {
				case "input":
					if (St(t, n), e = n.name, "radio" === n.type && null != e) {
						for (n = t; n.parentNode;) n = n.parentNode;
						for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'), e = 0; e < n.length; e++) {
							var r = n[e];
							if (r !== t && r.form === t.form) {
								var i = On(r);
								if (!i) throw Error(a(90));
								_t(r), St(r, i)
							}
						}
					}
					break;
				case "textarea":
					Dt(t, n);
					break;
				case "select":
					null != (e = n.value) && xt(t, !!n.multiple, e, !1)
			}
		}, R = ts, L = function(t, e, n, r, i) {
			var o = Iu;
			Iu |= 4;
			try {
				return Bi(98, t.bind(null, e, n, r, i))
			} finally {
				0 === (Iu = o) && Wi()
			}
		}, M = function() {
			0 === (49 & Iu) && (function() {
				if (null !== Bu) {
					var t = Bu;
					Bu = null, t.forEach((function(t, e) {
						Ls(e, t), $u(e)
					})), Wi()
				}
			}(), vs())
		}, j = function(t, e) {
			var n = Iu;
			Iu |= 2;
			try {
				return t(e)
			} finally {
				0 === (Iu = n) && Wi()
			}
		};
		var Ws = {
			Events: [An, xn, On, k, I, jn, function(t) {
				ie(t, Mn)
			}, D, P, $e, ue, vs, {
				current: !1
			}]
		};
		! function(t) {
			var e = t.findFiberByHostInstance;
			(function(t) {
				if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
				var e = __REACT_DEVTOOLS_GLOBAL_HOOK__;
				if (e.isDisabled || !e.supportsFiber) return !0;
				try {
					var n = e.inject(t);
					_s = function(t) {
						try {
							e.onCommitFiberRoot(n, t, void 0, 64 === (64 & t.current.effectTag))
						} catch (r) {}
					}, Es = function(t) {
						try {
							e.onCommitFiberUnmount(n, t)
						} catch (r) {}
					}
				} catch (r) {}
			})(i({}, t, {
				overrideHookState: null,
				overrideProps: null,
				setSuspenseHandler: null,
				scheduleUpdate: null,
				currentDispatcherRef: Y.ReactCurrentDispatcher,
				findHostInstanceByFiber: function(t) {
					return null === (t = ne(t)) ? null : t.stateNode
				},
				findFiberByHostInstance: function(t) {
					return e ? e(t) : null
				},
				findHostInstancesForRefresh: null,
				scheduleRefresh: null,
				scheduleRoot: null,
				setRefreshHandler: null,
				getCurrentFiber: null
			}))
		}({
			findFiberByHostInstance: Nn,
			bundleType: 0,
			version: "16.13.1",
			rendererPackageName: "react-dom"
		}), e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ws, e.createPortal = Gs, e.findDOMNode = function(t) {
			if (null == t) return null;
			if (1 === t.nodeType) return t;
			var e = t._reactInternalFiber;
			if (void 0 === e) {
				if ("function" === typeof t.render) throw Error(a(188));
				throw Error(a(268, Object.keys(t)))
			}
			return t = null === (t = ne(e)) ? null : t.stateNode
		}, e.flushSync = function(t, e) {
			if (0 !== (48 & Iu)) throw Error(a(187));
			var n = Iu;
			Iu |= 1;
			try {
				return Bi(99, t.bind(null, e))
			} finally {
				Iu = n, Wi()
			}
		}, e.hydrate = function(t, e, n) {
			if (!zs(e)) throw Error(a(200));
			return Bs(null, t, e, !0, n)
		}, e.render = function(t, e, n) {
			if (!zs(e)) throw Error(a(200));
			return Bs(null, t, e, !1, n)
		}, e.unmountComponentAtNode = function(t) {
			if (!zs(t)) throw Error(a(40));
			return !!t._reactRootContainer && (es((function() {
				Bs(null, null, t, !1, (function() {
					t._reactRootContainer = null, t[kn] = null
				}))
			})), !0)
		}, e.unstable_batchedUpdates = ts, e.unstable_createPortal = function(t, e) {
			return Gs(t, e, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null)
		}, e.unstable_renderSubtreeIntoContainer = function(t, e, n, r) {
			if (!zs(n)) throw Error(a(200));
			if (null == t || void 0 === t._reactInternalFiber) throw Error(a(38));
			return Bs(t, e, n, !1, r)
		}, e.version = "16.13.1"
	}, function(t, e, n) {
		"use strict";
		t.exports = n(20)
	}, function(t, e, n) {
		"use strict";
		var r, i, o, a, u;
		if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
			var s = null,
				c = null,
				l = function t() {
					if (null !== s) try {
						var n = e.unstable_now();
						s(!0, n), s = null
					} catch (r) {
						throw setTimeout(t, 0), r
					}
				},
				f = Date.now();
			e.unstable_now = function() {
				return Date.now() - f
			}, r = function(t) {
				null !== s ? setTimeout(r, 0, t) : (s = t, setTimeout(l, 0))
			}, i = function(t, e) {
				c = setTimeout(t, e)
			}, o = function() {
				clearTimeout(c)
			}, a = function() {
				return !1
			}, u = e.unstable_forceFrameRate = function() {}
		} else {
			var h = window.performance,
				p = window.Date,
				d = window.setTimeout,
				v = window.clearTimeout;
			if ("undefined" !== typeof console) {
				var m = window.cancelAnimationFrame;
				"function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" !== typeof m && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")
			}
			if ("object" === typeof h && "function" === typeof h.now) e.unstable_now = function() {
				return h.now()
			};
			else {
				var y = p.now();
				e.unstable_now = function() {
					return p.now() - y
				}
			}
			var g = !1,
				b = null,
				w = -1,
				_ = 5,
				E = 0;
			a = function() {
				return e.unstable_now() >= E
			}, u = function() {}, e.unstable_forceFrameRate = function(t) {
				0 > t || 125 < t ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : _ = 0 < t ? Math.floor(1e3 / t) : 5
			};
			var I = new MessageChannel,
				T = I.port2;
			I.port1.onmessage = function() {
				if (null !== b) {
					var t = e.unstable_now();
					E = t + _;
					try {
						b(!0, t) ? T.postMessage(null) : (g = !1, b = null)
					} catch (n) {
						throw T.postMessage(null), n
					}
				} else g = !1
			}, r = function(t) {
				b = t, g || (g = !0, T.postMessage(null))
			}, i = function(t, n) {
				w = d((function() {
					t(e.unstable_now())
				}), n)
			}, o = function() {
				v(w), w = -1
			}
		}

		function S(t, e) {
			var n = t.length;
			t.push(e);
			t: for (;;) {
				var r = n - 1 >>> 1,
					i = t[r];
				if (!(void 0 !== i && 0 < A(i, e))) break t;
				t[r] = e, t[n] = i, n = r
			}
		}

		function k(t) {
			return void 0 === (t = t[0]) ? null : t
		}

		function N(t) {
			var e = t[0];
			if (void 0 !== e) {
				var n = t.pop();
				if (n !== e) {
					t[0] = n;
					t: for (var r = 0, i = t.length; r < i;) {
						var o = 2 * (r + 1) - 1,
							a = t[o],
							u = o + 1,
							s = t[u];
						if (void 0 !== a && 0 > A(a, n)) void 0 !== s && 0 > A(s, a) ? (t[r] = s, t[u] = n, r = u) : (t[r] = a, t[o] = n, r = o);
						else {
							if (!(void 0 !== s && 0 > A(s, n))) break t;
							t[r] = s, t[u] = n, r = u
						}
					}
				}
				return e
			}
			return null
		}

		function A(t, e) {
			var n = t.sortIndex - e.sortIndex;
			return 0 !== n ? n : t.id - e.id
		}
		var x = [],
			O = [],
			C = 1,
			D = null,
			P = 3,
			R = !1,
			L = !1,
			M = !1;

		function j(t) {
			for (var e = k(O); null !== e;) {
				if (null === e.callback) N(O);
				else {
					if (!(e.startTime <= t)) break;
					N(O), e.sortIndex = e.expirationTime, S(x, e)
				}
				e = k(O)
			}
		}

		function U(t) {
			if (M = !1, j(t), !L)
				if (null !== k(x)) L = !0, r(F);
				else {
					var e = k(O);
					null !== e && i(U, e.startTime - t)
				}
		}

		function F(t, n) {
			L = !1, M && (M = !1, o()), R = !0;
			var r = P;
			try {
				for (j(n), D = k(x); null !== D && (!(D.expirationTime > n) || t && !a());) {
					var u = D.callback;
					if (null !== u) {
						D.callback = null, P = D.priorityLevel;
						var s = u(D.expirationTime <= n);
						n = e.unstable_now(), "function" === typeof s ? D.callback = s : D === k(x) && N(x), j(n)
					} else N(x);
					D = k(x)
				}
				if (null !== D) var c = !0;
				else {
					var l = k(O);
					null !== l && i(U, l.startTime - n), c = !1
				}
				return c
			} finally {
				D = null, P = r, R = !1
			}
		}

		function V(t) {
			switch (t) {
				case 1:
					return -1;
				case 2:
					return 250;
				case 5:
					return 1073741823;
				case 4:
					return 1e4;
				default:
					return 5e3
			}
		}
		var z = u;
		e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(t) {
			t.callback = null
		}, e.unstable_continueExecution = function() {
			L || R || (L = !0, r(F))
		}, e.unstable_getCurrentPriorityLevel = function() {
			return P
		}, e.unstable_getFirstCallbackNode = function() {
			return k(x)
		}, e.unstable_next = function(t) {
			switch (P) {
				case 1:
				case 2:
				case 3:
					var e = 3;
					break;
				default:
					e = P
			}
			var n = P;
			P = e;
			try {
				return t()
			} finally {
				P = n
			}
		}, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = z, e.unstable_runWithPriority = function(t, e) {
			switch (t) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					t = 3
			}
			var n = P;
			P = t;
			try {
				return e()
			} finally {
				P = n
			}
		}, e.unstable_scheduleCallback = function(t, n, a) {
			var u = e.unstable_now();
			if ("object" === typeof a && null !== a) {
				var s = a.delay;
				s = "number" === typeof s && 0 < s ? u + s : u, a = "number" === typeof a.timeout ? a.timeout : V(t)
			} else a = V(t), s = u;
			return t = {
				id: C++,
				callback: n,
				priorityLevel: t,
				startTime: s,
				expirationTime: a = s + a,
				sortIndex: -1
			}, s > u ? (t.sortIndex = s, S(O, t), null === k(x) && t === k(O) && (M ? o() : M = !0, i(U, s - u))) : (t.sortIndex = a, S(x, t), L || R || (L = !0, r(F))), t
		}, e.unstable_shouldYield = function() {
			var t = e.unstable_now();
			j(t);
			var n = k(x);
			return n !== D && null !== D && null !== n && null !== n.callback && n.startTime <= t && n.expirationTime < D.expirationTime || a()
		}, e.unstable_wrapCallback = function(t) {
			var e = P;
			return function() {
				var n = P;
				P = e;
				try {
					return t.apply(this, arguments)
				} finally {
					P = n
				}
			}
		}
	}, , function(t, e, n) {
		var r = function(t) {
			"use strict";
			var e = Object.prototype,
				n = e.hasOwnProperty,
				r = "function" === typeof Symbol ? Symbol : {},
				i = r.iterator || "@@iterator",
				o = r.asyncIterator || "@@asyncIterator",
				a = r.toStringTag || "@@toStringTag";

			function u(t, e, n) {
				return Object.defineProperty(t, e, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}), t[e]
			}
			try {
				u({}, "")
			} catch (k) {
				u = function(t, e, n) {
					return t[e] = n
				}
			}

			function s(t, e, n, r) {
				var i = e && e.prototype instanceof f ? e : f,
					o = Object.create(i.prototype),
					a = new I(r || []);
				return o._invoke = function(t, e, n) {
					var r = "suspendedStart";
					return function(i, o) {
						if ("executing" === r) throw new Error("Generator is already running");
						if ("completed" === r) {
							if ("throw" === i) throw o;
							return S()
						}
						for (n.method = i, n.arg = o;;) {
							var a = n.delegate;
							if (a) {
								var u = w(a, n);
								if (u) {
									if (u === l) continue;
									return u
								}
							}
							if ("next" === n.method) n.sent = n._sent = n.arg;
							else if ("throw" === n.method) {
								if ("suspendedStart" === r) throw r = "completed", n.arg;
								n.dispatchException(n.arg)
							} else "return" === n.method && n.abrupt("return", n.arg);
							r = "executing";
							var s = c(t, e, n);
							if ("normal" === s.type) {
								if (r = n.done ? "completed" : "suspendedYield", s.arg === l) continue;
								return {
									value: s.arg,
									done: n.done
								}
							}
							"throw" === s.type && (r = "completed", n.method = "throw", n.arg = s.arg)
						}
					}
				}(t, n, a), o
			}

			function c(t, e, n) {
				try {
					return {
						type: "normal",
						arg: t.call(e, n)
					}
				} catch (k) {
					return {
						type: "throw",
						arg: k
					}
				}
			}
			t.wrap = s;
			var l = {};

			function f() {}

			function h() {}

			function p() {}
			var d = {};
			d[i] = function() {
				return this
			};
			var v = Object.getPrototypeOf,
				m = v && v(v(T([])));
			m && m !== e && n.call(m, i) && (d = m);
			var y = p.prototype = f.prototype = Object.create(d);

			function g(t) {
				["next", "throw", "return"].forEach((function(e) {
					u(t, e, (function(t) {
						return this._invoke(e, t)
					}))
				}))
			}

			function b(t, e) {
				var r;
				this._invoke = function(i, o) {
					function a() {
						return new e((function(r, a) {
							! function r(i, o, a, u) {
								var s = c(t[i], t, o);
								if ("throw" !== s.type) {
									var l = s.arg,
										f = l.value;
									return f && "object" === typeof f && n.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
										r("next", t, a, u)
									}), (function(t) {
										r("throw", t, a, u)
									})) : e.resolve(f).then((function(t) {
										l.value = t, a(l)
									}), (function(t) {
										return r("throw", t, a, u)
									}))
								}
								u(s.arg)
							}(i, o, r, a)
						}))
					}
					return r = r ? r.then(a, a) : a()
				}
			}

			function w(t, e) {
				var n = t.iterator[e.method];
				if (void 0 === n) {
					if (e.delegate = null, "throw" === e.method) {
						if (t.iterator.return && (e.method = "return", e.arg = void 0, w(t, e), "throw" === e.method)) return l;
						e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
					}
					return l
				}
				var r = c(n, t.iterator, e.arg);
				if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, l;
				var i = r.arg;
				return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l)
			}

			function _(t) {
				var e = {
					tryLoc: t[0]
				};
				1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
			}

			function E(t) {
				var e = t.completion || {};
				e.type = "normal", delete e.arg, t.completion = e
			}

			function I(t) {
				this.tryEntries = [{
					tryLoc: "root"
				}], t.forEach(_, this), this.reset(!0)
			}

			function T(t) {
				if (t) {
					var e = t[i];
					if (e) return e.call(t);
					if ("function" === typeof t.next) return t;
					if (!isNaN(t.length)) {
						var r = -1,
							o = function e() {
								for (; ++r < t.length;)
									if (n.call(t, r)) return e.value = t[r], e.done = !1, e;
								return e.value = void 0, e.done = !0, e
							};
						return o.next = o
					}
				}
				return {
					next: S
				}
			}

			function S() {
				return {
					value: void 0,
					done: !0
				}
			}
			return h.prototype = y.constructor = p, p.constructor = h, h.displayName = u(p, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
				var e = "function" === typeof t && t.constructor;
				return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
			}, t.mark = function(t) {
				return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, u(t, a, "GeneratorFunction")), t.prototype = Object.create(y), t
			}, t.awrap = function(t) {
				return {
					__await: t
				}
			}, g(b.prototype), b.prototype[o] = function() {
				return this
			}, t.AsyncIterator = b, t.async = function(e, n, r, i, o) {
				void 0 === o && (o = Promise);
				var a = new b(s(e, n, r, i), o);
				return t.isGeneratorFunction(n) ? a : a.next().then((function(t) {
					return t.done ? t.value : a.next()
				}))
			}, g(y), u(y, a, "Generator"), y[i] = function() {
				return this
			}, y.toString = function() {
				return "[object Generator]"
			}, t.keys = function(t) {
				var e = [];
				for (var n in t) e.push(n);
				return e.reverse(),
					function n() {
						for (; e.length;) {
							var r = e.pop();
							if (r in t) return n.value = r, n.done = !1, n
						}
						return n.done = !0, n
					}
			}, t.values = T, I.prototype = {
				constructor: I,
				reset: function(t) {
					if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !t)
						for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
				},
				stop: function() {
					this.done = !0;
					var t = this.tryEntries[0].completion;
					if ("throw" === t.type) throw t.arg;
					return this.rval
				},
				dispatchException: function(t) {
					if (this.done) throw t;
					var e = this;

					function r(n, r) {
						return a.type = "throw", a.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), !!r
					}
					for (var i = this.tryEntries.length - 1; i >= 0; --i) {
						var o = this.tryEntries[i],
							a = o.completion;
						if ("root" === o.tryLoc) return r("end");
						if (o.tryLoc <= this.prev) {
							var u = n.call(o, "catchLoc"),
								s = n.call(o, "finallyLoc");
							if (u && s) {
								if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
								if (this.prev < o.finallyLoc) return r(o.finallyLoc)
							} else if (u) {
								if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
							} else {
								if (!s) throw new Error("try statement without catch or finally");
								if (this.prev < o.finallyLoc) return r(o.finallyLoc)
							}
						}
					}
				},
				abrupt: function(t, e) {
					for (var r = this.tryEntries.length - 1; r >= 0; --r) {
						var i = this.tryEntries[r];
						if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
							var o = i;
							break
						}
					}
					o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
					var a = o ? o.completion : {};
					return a.type = t, a.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, l) : this.complete(a)
				},
				complete: function(t, e) {
					if ("throw" === t.type) throw t.arg;
					return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
				},
				finish: function(t) {
					for (var e = this.tryEntries.length - 1; e >= 0; --e) {
						var n = this.tryEntries[e];
						if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), E(n), l
					}
				},
				catch: function(t) {
					for (var e = this.tryEntries.length - 1; e >= 0; --e) {
						var n = this.tryEntries[e];
						if (n.tryLoc === t) {
							var r = n.completion;
							if ("throw" === r.type) {
								var i = r.arg;
								E(n)
							}
							return i
						}
					}
					throw new Error("illegal catch attempt")
				},
				delegateYield: function(t, e, n) {
					return this.delegate = {
						iterator: T(t),
						resultName: e,
						nextLoc: n
					}, "next" === this.method && (this.arg = void 0), l
				}
			}, t
		}(t.exports);
		try {
			regeneratorRuntime = r
		} catch (i) {
			Function("r", "regeneratorRuntime = r")(r)
		}
	}, , function(t, e, n) {
		"use strict";
		n(25)
	}, function(t, e, n) {
		"use strict";
		(function(t) {
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var r = n(0),
				i = n(3),
				o = n(6),
				a = n(2),
				u = n(27),
				s = n(4);
			var c = function(t) {
					return t && "object" == typeof t && "default" in t ? t : {
						default: t
					}
				}(i),
				l = {
					OK: "ok",
					CANCELLED: "cancelled",
					UNKNOWN: "unknown",
					INVALID_ARGUMENT: "invalid-argument",
					DEADLINE_EXCEEDED: "deadline-exceeded",
					NOT_FOUND: "not-found",
					ALREADY_EXISTS: "already-exists",
					PERMISSION_DENIED: "permission-denied",
					UNAUTHENTICATED: "unauthenticated",
					RESOURCE_EXHAUSTED: "resource-exhausted",
					FAILED_PRECONDITION: "failed-precondition",
					ABORTED: "aborted",
					OUT_OF_RANGE: "out-of-range",
					UNIMPLEMENTED: "unimplemented",
					INTERNAL: "internal",
					UNAVAILABLE: "unavailable",
					DATA_LOSS: "data-loss"
				},
				f = function(t) {
					function e(e, n) {
						var r = this;
						return (r = t.call(this, n) || this).code = e, r.message = n, r.name = "FirebaseError", r.toString = function() {
							return r.name + ": [code=" + r.code + "]: " + r.message
						}, r
					}
					return r.__extends(e, t), e
				}(Error),
				h = new o.Logger("@firebase/firestore");

			function p() {
				return h.logLevel
			}

			function d(t) {
				for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
				if (h.logLevel <= o.LogLevel.DEBUG) {
					var i = e.map(y);
					h.debug.apply(h, r.__spreadArrays(["Firestore (7.20.0): " + t], i))
				}
			}

			function v(t) {
				for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
				if (h.logLevel <= o.LogLevel.ERROR) {
					var i = e.map(y);
					h.error.apply(h, r.__spreadArrays(["Firestore (7.20.0): " + t], i))
				}
			}

			function m(t) {
				for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
				if (h.logLevel <= o.LogLevel.WARN) {
					var i = e.map(y);
					h.warn.apply(h, r.__spreadArrays(["Firestore (7.20.0): " + t], i))
				}
			}

			function y(t) {
				if ("string" == typeof t) return t;
				try {
					return e = t, JSON.stringify(e)
				} catch (e) {
					return t
				}
				var e
			}

			function g(t) {
				void 0 === t && (t = "Unexpected state");
				var e = "FIRESTORE (7.20.0) INTERNAL ASSERTION FAILED: " + t;
				throw v(e), new Error(e)
			}

			function b(t, e) {
				t || g()
			}

			function w(t, e) {
				return t
			}

			function _(t) {
				var e = 0;
				for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
				return e
			}

			function E(t, e) {
				for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n])
			}

			function I(t) {
				for (var e in t)
					if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
				return !0
			}
			var T = function() {
					function t(t, e, n) {
						void 0 === e ? e = 0 : e > t.length && g(), void 0 === n ? n = t.length - e : n > t.length - e && g(), this.segments = t, this.offset = e, this.t = n
					}
					return Object.defineProperty(t.prototype, "length", {
						get: function() {
							return this.t
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.isEqual = function(e) {
						return 0 === t.i(this, e)
					}, t.prototype.child = function(e) {
						var n = this.segments.slice(this.offset, this.limit());
						return e instanceof t ? e.forEach((function(t) {
							n.push(t)
						})) : n.push(e), this.o(n)
					}, t.prototype.limit = function() {
						return this.offset + this.length
					}, t.prototype.u = function(t) {
						return t = void 0 === t ? 1 : t, this.o(this.segments, this.offset + t, this.length - t)
					}, t.prototype.h = function() {
						return this.o(this.segments, this.offset, this.length - 1)
					}, t.prototype.l = function() {
						return this.segments[this.offset]
					}, t.prototype._ = function() {
						return this.get(this.length - 1)
					}, t.prototype.get = function(t) {
						return this.segments[this.offset + t]
					}, t.prototype.m = function() {
						return 0 === this.length
					}, t.prototype.T = function(t) {
						if (t.length < this.length) return !1;
						for (var e = 0; e < this.length; e++)
							if (this.get(e) !== t.get(e)) return !1;
						return !0
					}, t.prototype.I = function(t) {
						if (this.length + 1 !== t.length) return !1;
						for (var e = 0; e < this.length; e++)
							if (this.get(e) !== t.get(e)) return !1;
						return !0
					}, t.prototype.forEach = function(t) {
						for (var e = this.offset, n = this.limit(); e < n; e++) t(this.segments[e])
					}, t.prototype.A = function() {
						return this.segments.slice(this.offset, this.limit())
					}, t.i = function(t, e) {
						for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
							var i = t.get(r),
								o = e.get(r);
							if (i < o) return -1;
							if (i > o) return 1
						}
						return t.length < e.length ? -1 : t.length > e.length ? 1 : 0
					}, t
				}(),
				S = function(t) {
					function e() {
						return null !== t && t.apply(this, arguments) || this
					}
					return r.__extends(e, t), e.prototype.o = function(t, n, r) {
						return new e(t, n, r)
					}, e.prototype.R = function() {
						return this.A().join("/")
					}, e.prototype.toString = function() {
						return this.R()
					}, e.P = function(t) {
						if (t.indexOf("//") >= 0) throw new f(l.INVALID_ARGUMENT, "Invalid path (" + t + "). Paths must not contain // in them.");
						return new e(t.split("/").filter((function(t) {
							return t.length > 0
						})))
					}, e.g = function() {
						return new e([])
					}, e
				}(T),
				k = /^[_a-zA-Z][_a-zA-Z0-9]*$/,
				N = function(t) {
					function e() {
						return null !== t && t.apply(this, arguments) || this
					}
					return r.__extends(e, t), e.prototype.o = function(t, n, r) {
						return new e(t, n, r)
					}, e.V = function(t) {
						return k.test(t)
					}, e.prototype.R = function() {
						return this.A().map((function(t) {
							return t = t.replace("\\", "\\\\").replace("`", "\\`"), e.V(t) || (t = "`" + t + "`"), t
						})).join(".")
					}, e.prototype.toString = function() {
						return this.R()
					}, e.prototype.p = function() {
						return 1 === this.length && "__name__" === this.get(0)
					}, e.v = function() {
						return new e(["__name__"])
					}, e.S = function(t) {
						for (var n = [], r = "", i = 0, o = function() {
								if (0 === r.length) throw new f(l.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
								n.push(r), r = ""
							}, a = !1; i < t.length;) {
							var u = t[i];
							if ("\\" === u) {
								if (i + 1 === t.length) throw new f(l.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
								var s = t[i + 1];
								if ("\\" !== s && "." !== s && "`" !== s) throw new f(l.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
								r += s, i += 2
							} else "`" === u ? (a = !a, i++) : "." !== u || a ? (r += u, i++) : (o(), i++)
						}
						if (o(), a) throw new f(l.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
						return new e(n)
					}, e.g = function() {
						return new e([])
					}, e
				}(T),
				A = function() {
					function t(t) {
						this.path = t
					}
					return t.D = function(e) {
						return new t(S.P(e))
					}, t.C = function(e) {
						return new t(S.P(e).u(5))
					}, t.prototype.N = function(t) {
						return this.path.length >= 2 && this.path.get(this.path.length - 2) === t
					}, t.prototype.isEqual = function(t) {
						return null !== t && 0 === S.i(this.path, t.path)
					}, t.prototype.toString = function() {
						return this.path.toString()
					}, t.i = function(t, e) {
						return S.i(t.path, e.path)
					}, t.F = function(t) {
						return t.length % 2 == 0
					}, t.$ = function(e) {
						return new t(new S(e.slice()))
					}, t
				}();

			function x(t, e) {
				if (0 !== e.length) throw new f(l.INVALID_ARGUMENT, "Function " + t + "() does not support arguments, but was called with " + K(e.length, "argument") + ".")
			}

			function O(t, e, n) {
				if (e.length !== n) throw new f(l.INVALID_ARGUMENT, "Function " + t + "() requires " + K(n, "argument") + ", but was called with " + K(e.length, "argument") + ".")
			}

			function C(t, e, n) {
				if (e.length < n) throw new f(l.INVALID_ARGUMENT, "Function " + t + "() requires at least " + K(n, "argument") + ", but was called with " + K(e.length, "argument") + ".")
			}

			function D(t, e, n, r) {
				if (e.length < n || e.length > r) throw new f(l.INVALID_ARGUMENT, "Function " + t + "() requires between " + n + " and " + r + " arguments, but was called with " + K(e.length, "argument") + ".")
			}

			function P(t, e, n, r) {
				F(t, e, H(n) + " argument", r)
			}

			function R(t, e, n, r) {
				void 0 !== r && P(t, e, n, r)
			}

			function L(t, e, n, r) {
				F(t, e, n + " option", r)
			}

			function M(t, e, n, r) {
				void 0 !== r && L(t, e, n, r)
			}

			function j(t, e, n, r, i) {
				void 0 !== r && function(t, e, n, r, i) {
					for (var o = [], a = 0, u = i; a < u.length; a++) {
						var s = u[a];
						if (s === r) return;
						o.push(z(s))
					}
					var c = z(r);
					throw new f(l.INVALID_ARGUMENT, "Invalid value " + c + " provided to function " + t + '() for option "' + n + '". Acceptable values: ' + o.join(", "))
				}(t, 0, n, r, i)
			}

			function U(t, e, n, r) {
				if (!e.some((function(t) {
						return t === r
					}))) throw new f(l.INVALID_ARGUMENT, "Invalid value " + z(r) + " provided to function " + t + "() for its " + H(n) + " argument. Acceptable values: " + e.join(", "));
				return r
			}

			function F(t, e, n, r) {
				if (!("object" === e ? V(r) : "non-empty string" === e ? "string" == typeof r && "" !== r : typeof r === e)) {
					var i = z(r);
					throw new f(l.INVALID_ARGUMENT, "Function " + t + "() requires its " + n + " to be of type " + e + ", but it was: " + i)
				}
			}

			function V(t) {
				return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t))
			}

			function z(t) {
				if (void 0 === t) return "undefined";
				if (null === t) return "null";
				if ("string" == typeof t) return t.length > 20 && (t = t.substring(0, 20) + "..."), JSON.stringify(t);
				if ("number" == typeof t || "boolean" == typeof t) return "" + t;
				if ("object" == typeof t) {
					if (t instanceof Array) return "an array";
					var e = function(t) {
						if (t.constructor) {
							var e = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());
							if (e && e.length > 1) return e[1]
						}
						return null
					}(t);
					return e ? "a custom " + e + " object" : "an object"
				}
				return "function" == typeof t ? "a function" : g()
			}

			function B(t, e, n) {
				if (void 0 === n) throw new f(l.INVALID_ARGUMENT, "Function " + t + "() requires a valid " + H(e) + " argument, but it was undefined.")
			}

			function q(t, e, n) {
				E(e, (function(e, r) {
					if (n.indexOf(e) < 0) throw new f(l.INVALID_ARGUMENT, "Unknown option '" + e + "' passed to function " + t + "(). Available options: " + n.join(", "))
				}))
			}

			function G(t, e, n, r) {
				var i = z(r);
				return new f(l.INVALID_ARGUMENT, "Function " + t + "() requires its " + H(n) + " argument to be a " + e + ", but it was: " + i)
			}

			function W(t, e, n) {
				if (n <= 0) throw new f(l.INVALID_ARGUMENT, "Function " + t + "() requires its " + H(e) + " argument to be a positive number, but it was: " + n + ".")
			}

			function H(t) {
				switch (t) {
					case 1:
						return "first";
					case 2:
						return "second";
					case 3:
						return "third";
					default:
						return t + "th"
				}
			}

			function K(t, e) {
				return t + " " + e + (1 === t ? "" : "s")
			}

			function Q(t) {
				var e = "undefined" != typeof self && (self.crypto || self.msCrypto),
					n = new Uint8Array(t);
				if (e && "function" == typeof e.getRandomValues) e.getRandomValues(n);
				else
					for (var r = 0; r < t; r++) n[r] = Math.floor(256 * Math.random());
				return n
			}
			var X = function() {
				function t() {}
				return t.k = function() {
					for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t.length) * t.length, n = ""; n.length < 20;)
						for (var r = Q(40), i = 0; i < r.length; ++i) n.length < 20 && r[i] < e && (n += t.charAt(r[i] % t.length));
					return n
				}, t
			}();

			function Y(t, e) {
				return t < e ? -1 : t > e ? 1 : 0
			}

			function $(t, e, n) {
				return t.length === e.length && t.every((function(t, r) {
					return n(t, e[r])
				}))
			}

			function J(t) {
				return t + "\0"
			}
			var Z = function() {
				function t(t) {
					this.M = t
				}
				return t.fromBase64String = function(e) {
					return new t(atob(e))
				}, t.fromUint8Array = function(e) {
					return new t(function(t) {
						for (var e = "", n = 0; n < t.length; ++n) e += String.fromCharCode(t[n]);
						return e
					}(e))
				}, t.prototype.toBase64 = function() {
					return t = this.M, btoa(t);
					var t
				}, t.prototype.toUint8Array = function() {
					return function(t) {
						for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
						return e
					}(this.M)
				}, t.prototype.O = function() {
					return 2 * this.M.length
				}, t.prototype.L = function(t) {
					return Y(this.M, t.M)
				}, t.prototype.isEqual = function(t) {
					return this.M === t.M
				}, t
			}();
			Z.B = new Z("");
			var tt = function() {
				function t(t) {
					this.q = t
				}
				return t.fromBase64String = function(e) {
					try {
						return new t(Z.fromBase64String(e))
					} catch (e) {
						throw new f(l.INVALID_ARGUMENT, "Failed to construct Bytes from Base64 string: " + e)
					}
				}, t.fromUint8Array = function(e) {
					return new t(Z.fromUint8Array(e))
				}, t.prototype.toBase64 = function() {
					return this.q.toBase64()
				}, t.prototype.toUint8Array = function() {
					return this.q.toUint8Array()
				}, t.prototype.toString = function() {
					return "Bytes(base64: " + this.toBase64() + ")"
				}, t.prototype.isEqual = function(t) {
					return this.q.isEqual(t.q)
				}, t
			}();

			function et() {
				if ("undefined" == typeof Uint8Array) throw new f(l.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.")
			}

			function nt() {
				if ("undefined" == typeof atob) throw new f(l.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.")
			}
			var rt = function(t) {
					function e() {
						return null !== t && t.apply(this, arguments) || this
					}
					return r.__extends(e, t), e.fromBase64String = function(t) {
						O("Blob.fromBase64String", arguments, 1), P("Blob.fromBase64String", "string", 1, t), nt();
						try {
							return new e(Z.fromBase64String(t))
						} catch (t) {
							throw new f(l.INVALID_ARGUMENT, "Failed to construct Blob from Base64 string: " + t)
						}
					}, e.fromUint8Array = function(t) {
						if (O("Blob.fromUint8Array", arguments, 1), et(), !(t instanceof Uint8Array)) throw G("Blob.fromUint8Array", "Uint8Array", 1, t);
						return new e(Z.fromUint8Array(t))
					}, e.prototype.toBase64 = function() {
						return O("Blob.toBase64", arguments, 0), nt(), t.prototype.toBase64.call(this)
					}, e.prototype.toUint8Array = function() {
						return O("Blob.toUint8Array", arguments, 0), et(), t.prototype.toUint8Array.call(this)
					}, e.prototype.toString = function() {
						return "Blob(base64: " + this.toBase64() + ")"
					}, e
				}(tt),
				it = function(t, e, n, r, i) {
					this.U = t, this.persistenceKey = e, this.host = n, this.ssl = r, this.forceLongPolling = i
				},
				ot = function() {
					function t(t, e) {
						this.projectId = t, this.database = e || "(default)"
					}
					return Object.defineProperty(t.prototype, "W", {
						get: function() {
							return "(default)" === this.database
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.isEqual = function(e) {
						return e instanceof t && e.projectId === this.projectId && e.database === this.database
					}, t.prototype.L = function(t) {
						return Y(this.projectId, t.projectId) || Y(this.database, t.database)
					}, t
				}(),
				at = function() {
					function t(t, e) {
						this.j = t, this.K = e, this.G = {}
					}
					return t.prototype.get = function(t) {
						var e = this.j(t),
							n = this.G[e];
						if (void 0 !== n)
							for (var r = 0, i = n; r < i.length; r++) {
								var o = i[r],
									a = o[0],
									u = o[1];
								if (this.K(a, t)) return u
							}
					}, t.prototype.has = function(t) {
						return void 0 !== this.get(t)
					}, t.prototype.set = function(t, e) {
						var n = this.j(t),
							r = this.G[n];
						if (void 0 !== r) {
							for (var i = 0; i < r.length; i++)
								if (this.K(r[i][0], t)) return void(r[i] = [t, e]);
							r.push([t, e])
						} else this.G[n] = [
							[t, e]
						]
					}, t.prototype.delete = function(t) {
						var e = this.j(t),
							n = this.G[e];
						if (void 0 === n) return !1;
						for (var r = 0; r < n.length; r++)
							if (this.K(n[r][0], t)) return 1 === n.length ? delete this.G[e] : n.splice(r, 1), !0;
						return !1
					}, t.prototype.forEach = function(t) {
						E(this.G, (function(e, n) {
							for (var r = 0, i = n; r < i.length; r++) {
								var o = i[r],
									a = o[0],
									u = o[1];
								t(a, u)
							}
						}))
					}, t.prototype.m = function() {
						return I(this.G)
					}, t
				}(),
				ut = function() {
					function t(t, e) {
						if (this.seconds = t, this.nanoseconds = e, e < 0) throw new f(l.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
						if (e >= 1e9) throw new f(l.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
						if (t < -62135596800) throw new f(l.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
						if (t >= 253402300800) throw new f(l.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t)
					}
					return t.now = function() {
						return t.fromMillis(Date.now())
					}, t.fromDate = function(e) {
						return t.fromMillis(e.getTime())
					}, t.fromMillis = function(e) {
						var n = Math.floor(e / 1e3);
						return new t(n, 1e6 * (e - 1e3 * n))
					}, t.prototype.toDate = function() {
						return new Date(this.toMillis())
					}, t.prototype.toMillis = function() {
						return 1e3 * this.seconds + this.nanoseconds / 1e6
					}, t.prototype.H = function(t) {
						return this.seconds === t.seconds ? Y(this.nanoseconds, t.nanoseconds) : Y(this.seconds, t.seconds)
					}, t.prototype.isEqual = function(t) {
						return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds
					}, t.prototype.toString = function() {
						return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")"
					}, t.prototype.toJSON = function() {
						return {
							seconds: this.seconds,
							nanoseconds: this.nanoseconds
						}
					}, t.prototype.valueOf = function() {
						var t = this.seconds - -62135596800;
						return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0")
					}, t
				}(),
				st = function() {
					function t(t) {
						this.timestamp = t
					}
					return t.Y = function(e) {
						return new t(e)
					}, t.min = function() {
						return new t(new ut(0, 0))
					}, t.prototype.L = function(t) {
						return this.timestamp.H(t.timestamp)
					}, t.prototype.isEqual = function(t) {
						return this.timestamp.isEqual(t.timestamp)
					}, t.prototype.J = function() {
						return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3
					}, t.prototype.toString = function() {
						return "SnapshotVersion(" + this.timestamp.toString() + ")"
					}, t.prototype.X = function() {
						return this.timestamp
					}, t
				}();

			function ct(t) {
				return null == t
			}

			function lt(t) {
				return -0 === t && 1 / t == -1 / 0
			}

			function ft(t) {
				return "number" == typeof t && Number.isInteger(t) && !lt(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER
			}
			var ht = function(t, e, n, r, i, o, a) {
				void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = null), void 0 === a && (a = null), this.path = t, this.collectionGroup = e, this.orderBy = n, this.filters = r, this.limit = i, this.startAt = o, this.endAt = a, this.Z = null
			};

			function pt(t, e, n, r, i, o, a) {
				return void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = null), void 0 === a && (a = null), new ht(t, e, n, r, i, o, a)
			}

			function dt(t) {
				var e = w(t);
				if (null === e.Z) {
					var n = e.path.R();
					null !== e.collectionGroup && (n += "|cg:" + e.collectionGroup), n += "|f:", n += e.filters.map((function(t) {
						return function(t) {
							return t.field.R() + t.op.toString() + ie(t.value)
						}(t)
					})).join(","), n += "|ob:", n += e.orderBy.map((function(t) {
						return (e = t).field.R() + e.dir;
						var e
					})).join(","), ct(e.limit) || (n += "|l:", n += e.limit), e.startAt && (n += "|lb:", n += ur(e.startAt)), e.endAt && (n += "|ub:", n += ur(e.endAt)), e.Z = n
				}
				return e.Z
			}

			function vt(t, e) {
				if (t.limit !== e.limit) return !1;
				if (t.orderBy.length !== e.orderBy.length) return !1;
				for (var n = 0; n < t.orderBy.length; n++)
					if (!hr(t.orderBy[n], e.orderBy[n])) return !1;
				if (t.filters.length !== e.filters.length) return !1;
				for (var r = 0; r < t.filters.length; r++)
					if (i = t.filters[r], o = e.filters[r], i.op !== o.op || !i.field.isEqual(o.field) || !te(i.value, o.value)) return !1;
				var i, o;
				return t.collectionGroup === e.collectionGroup && !!t.path.isEqual(e.path) && !!cr(t.startAt, e.startAt) && cr(t.endAt, e.endAt)
			}

			function mt(t) {
				return A.F(t.path) && null === t.collectionGroup && 0 === t.filters.length
			}
			var yt, gt, bt = function() {
					function t(t, e, n, r, i, o, a) {
						void 0 === i && (i = st.min()), void 0 === o && (o = st.min()), void 0 === a && (a = Z.B), this.target = t, this.targetId = e, this.tt = n, this.sequenceNumber = r, this.et = i, this.lastLimboFreeSnapshotVersion = o, this.resumeToken = a
					}
					return t.prototype.nt = function(e) {
						return new t(this.target, this.targetId, this.tt, e, this.et, this.lastLimboFreeSnapshotVersion, this.resumeToken)
					}, t.prototype.st = function(e, n) {
						return new t(this.target, this.targetId, this.tt, this.sequenceNumber, n, this.lastLimboFreeSnapshotVersion, e)
					}, t.prototype.it = function(e) {
						return new t(this.target, this.targetId, this.tt, this.sequenceNumber, this.et, e, this.resumeToken)
					}, t
				}(),
				wt = function(t) {
					this.count = t
				};

			function _t(t) {
				switch (t) {
					case l.OK:
						return g();
					case l.CANCELLED:
					case l.UNKNOWN:
					case l.DEADLINE_EXCEEDED:
					case l.RESOURCE_EXHAUSTED:
					case l.INTERNAL:
					case l.UNAVAILABLE:
					case l.UNAUTHENTICATED:
						return !1;
					case l.INVALID_ARGUMENT:
					case l.NOT_FOUND:
					case l.ALREADY_EXISTS:
					case l.PERMISSION_DENIED:
					case l.FAILED_PRECONDITION:
					case l.ABORTED:
					case l.OUT_OF_RANGE:
					case l.UNIMPLEMENTED:
					case l.DATA_LOSS:
						return !0;
					default:
						return g()
				}
			}

			function Et(t) {
				if (void 0 === t) return v("GRPC error has no .code"), l.UNKNOWN;
				switch (t) {
					case yt.OK:
						return l.OK;
					case yt.CANCELLED:
						return l.CANCELLED;
					case yt.UNKNOWN:
						return l.UNKNOWN;
					case yt.DEADLINE_EXCEEDED:
						return l.DEADLINE_EXCEEDED;
					case yt.RESOURCE_EXHAUSTED:
						return l.RESOURCE_EXHAUSTED;
					case yt.INTERNAL:
						return l.INTERNAL;
					case yt.UNAVAILABLE:
						return l.UNAVAILABLE;
					case yt.UNAUTHENTICATED:
						return l.UNAUTHENTICATED;
					case yt.INVALID_ARGUMENT:
						return l.INVALID_ARGUMENT;
					case yt.NOT_FOUND:
						return l.NOT_FOUND;
					case yt.ALREADY_EXISTS:
						return l.ALREADY_EXISTS;
					case yt.PERMISSION_DENIED:
						return l.PERMISSION_DENIED;
					case yt.FAILED_PRECONDITION:
						return l.FAILED_PRECONDITION;
					case yt.ABORTED:
						return l.ABORTED;
					case yt.OUT_OF_RANGE:
						return l.OUT_OF_RANGE;
					case yt.UNIMPLEMENTED:
						return l.UNIMPLEMENTED;
					case yt.DATA_LOSS:
						return l.DATA_LOSS;
					default:
						return g()
				}
			}(gt = yt || (yt = {}))[gt.OK = 0] = "OK", gt[gt.CANCELLED = 1] = "CANCELLED", gt[gt.UNKNOWN = 2] = "UNKNOWN", gt[gt.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", gt[gt.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", gt[gt.NOT_FOUND = 5] = "NOT_FOUND", gt[gt.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", gt[gt.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", gt[gt.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", gt[gt.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", gt[gt.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", gt[gt.ABORTED = 10] = "ABORTED", gt[gt.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", gt[gt.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", gt[gt.INTERNAL = 13] = "INTERNAL", gt[gt.UNAVAILABLE = 14] = "UNAVAILABLE", gt[gt.DATA_LOSS = 15] = "DATA_LOSS";
			var It = function() {
					function t(t, e) {
						this.i = t, this.root = e || St.EMPTY
					}
					return t.prototype.rt = function(e, n) {
						return new t(this.i, this.root.rt(e, n, this.i).copy(null, null, St.ot, null, null))
					}, t.prototype.remove = function(e) {
						return new t(this.i, this.root.remove(e, this.i).copy(null, null, St.ot, null, null))
					}, t.prototype.get = function(t) {
						for (var e = this.root; !e.m();) {
							var n = this.i(t, e.key);
							if (0 === n) return e.value;
							n < 0 ? e = e.left : n > 0 && (e = e.right)
						}
						return null
					}, t.prototype.indexOf = function(t) {
						for (var e = 0, n = this.root; !n.m();) {
							var r = this.i(t, n.key);
							if (0 === r) return e + n.left.size;
							r < 0 ? n = n.left : (e += n.left.size + 1, n = n.right)
						}
						return -1
					}, t.prototype.m = function() {
						return this.root.m()
					}, Object.defineProperty(t.prototype, "size", {
						get: function() {
							return this.root.size
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.at = function() {
						return this.root.at()
					}, t.prototype.ct = function() {
						return this.root.ct()
					}, t.prototype.ut = function(t) {
						return this.root.ut(t)
					}, t.prototype.forEach = function(t) {
						this.ut((function(e, n) {
							return t(e, n), !1
						}))
					}, t.prototype.toString = function() {
						var t = [];
						return this.ut((function(e, n) {
							return t.push(e + ":" + n), !1
						})), "{" + t.join(", ") + "}"
					}, t.prototype.ht = function(t) {
						return this.root.ht(t)
					}, t.prototype.lt = function() {
						return new Tt(this.root, null, this.i, !1)
					}, t.prototype._t = function(t) {
						return new Tt(this.root, t, this.i, !1)
					}, t.prototype.ft = function() {
						return new Tt(this.root, null, this.i, !0)
					}, t.prototype.dt = function(t) {
						return new Tt(this.root, t, this.i, !0)
					}, t
				}(),
				Tt = function() {
					function t(t, e, n, r) {
						this.wt = r, this.Tt = [];
						for (var i = 1; !t.m();)
							if (i = e ? n(t.key, e) : 1, r && (i *= -1), i < 0) t = this.wt ? t.left : t.right;
							else {
								if (0 === i) {
									this.Tt.push(t);
									break
								}
								this.Tt.push(t), t = this.wt ? t.right : t.left
							}
					}
					return t.prototype.Et = function() {
						var t = this.Tt.pop(),
							e = {
								key: t.key,
								value: t.value
							};
						if (this.wt)
							for (t = t.left; !t.m();) this.Tt.push(t), t = t.right;
						else
							for (t = t.right; !t.m();) this.Tt.push(t), t = t.left;
						return e
					}, t.prototype.It = function() {
						return this.Tt.length > 0
					}, t.prototype.At = function() {
						if (0 === this.Tt.length) return null;
						var t = this.Tt[this.Tt.length - 1];
						return {
							key: t.key,
							value: t.value
						}
					}, t
				}(),
				St = function() {
					function t(e, n, r, i, o) {
						this.key = e, this.value = n, this.color = null != r ? r : t.RED, this.left = null != i ? i : t.EMPTY, this.right = null != o ? o : t.EMPTY, this.size = this.left.size + 1 + this.right.size
					}
					return t.prototype.copy = function(e, n, r, i, o) {
						return new t(null != e ? e : this.key, null != n ? n : this.value, null != r ? r : this.color, null != i ? i : this.left, null != o ? o : this.right)
					}, t.prototype.m = function() {
						return !1
					}, t.prototype.ut = function(t) {
						return this.left.ut(t) || t(this.key, this.value) || this.right.ut(t)
					}, t.prototype.ht = function(t) {
						return this.right.ht(t) || t(this.key, this.value) || this.left.ht(t)
					}, t.prototype.min = function() {
						return this.left.m() ? this : this.left.min()
					}, t.prototype.at = function() {
						return this.min().key
					}, t.prototype.ct = function() {
						return this.right.m() ? this.key : this.right.ct()
					}, t.prototype.rt = function(t, e, n) {
						var r = this,
							i = n(t, r.key);
						return (r = i < 0 ? r.copy(null, null, null, r.left.rt(t, e, n), null) : 0 === i ? r.copy(null, e, null, null, null) : r.copy(null, null, null, null, r.right.rt(t, e, n))).Rt()
					}, t.prototype.Pt = function() {
						if (this.left.m()) return t.EMPTY;
						var e = this;
						return e.left.gt() || e.left.left.gt() || (e = e.yt()), (e = e.copy(null, null, null, e.left.Pt(), null)).Rt()
					}, t.prototype.remove = function(e, n) {
						var r, i = this;
						if (n(e, i.key) < 0) i.left.m() || i.left.gt() || i.left.left.gt() || (i = i.yt()), i = i.copy(null, null, null, i.left.remove(e, n), null);
						else {
							if (i.left.gt() && (i = i.Vt()), i.right.m() || i.right.gt() || i.right.left.gt() || (i = i.bt()), 0 === n(e, i.key)) {
								if (i.right.m()) return t.EMPTY;
								r = i.right.min(), i = i.copy(r.key, r.value, null, null, i.right.Pt())
							}
							i = i.copy(null, null, null, null, i.right.remove(e, n))
						}
						return i.Rt()
					}, t.prototype.gt = function() {
						return this.color
					}, t.prototype.Rt = function() {
						var t = this;
						return t.right.gt() && !t.left.gt() && (t = t.vt()), t.left.gt() && t.left.left.gt() && (t = t.Vt()), t.left.gt() && t.right.gt() && (t = t.St()), t
					}, t.prototype.yt = function() {
						var t = this.St();
						return t.right.left.gt() && (t = (t = (t = t.copy(null, null, null, null, t.right.Vt())).vt()).St()), t
					}, t.prototype.bt = function() {
						var t = this.St();
						return t.left.left.gt() && (t = (t = t.Vt()).St()), t
					}, t.prototype.vt = function() {
						var e = this.copy(null, null, t.RED, null, this.right.left);
						return this.right.copy(null, null, this.color, e, null)
					}, t.prototype.Vt = function() {
						var e = this.copy(null, null, t.RED, this.left.right, null);
						return this.left.copy(null, null, this.color, null, e)
					}, t.prototype.St = function() {
						var t = this.left.copy(null, null, !this.left.color, null, null),
							e = this.right.copy(null, null, !this.right.color, null, null);
						return this.copy(null, null, !this.color, t, e)
					}, t.prototype.Dt = function() {
						var t = this.Ct();
						return Math.pow(2, t) <= this.size + 1
					}, t.prototype.Ct = function() {
						if (this.gt() && this.left.gt()) throw g();
						if (this.right.gt()) throw g();
						var t = this.left.Ct();
						if (t !== this.right.Ct()) throw g();
						return t + (this.gt() ? 0 : 1)
					}, t
				}();
			St.EMPTY = null, St.RED = !0, St.ot = !1, St.EMPTY = new(function() {
				function t() {
					this.size = 0
				}
				return Object.defineProperty(t.prototype, "key", {
					get: function() {
						throw g()
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "value", {
					get: function() {
						throw g()
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "color", {
					get: function() {
						throw g()
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "left", {
					get: function() {
						throw g()
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "right", {
					get: function() {
						throw g()
					},
					enumerable: !1,
					configurable: !0
				}), t.prototype.copy = function(t, e, n, r, i) {
					return this
				}, t.prototype.rt = function(t, e, n) {
					return new St(t, e)
				}, t.prototype.remove = function(t, e) {
					return this
				}, t.prototype.m = function() {
					return !0
				}, t.prototype.ut = function(t) {
					return !1
				}, t.prototype.ht = function(t) {
					return !1
				}, t.prototype.at = function() {
					return null
				}, t.prototype.ct = function() {
					return null
				}, t.prototype.gt = function() {
					return !1
				}, t.prototype.Dt = function() {
					return !0
				}, t.prototype.Ct = function() {
					return 0
				}, t
			}());
			var kt = function() {
					function t(t) {
						this.i = t, this.data = new It(this.i)
					}
					return t.prototype.has = function(t) {
						return null !== this.data.get(t)
					}, t.prototype.first = function() {
						return this.data.at()
					}, t.prototype.last = function() {
						return this.data.ct()
					}, Object.defineProperty(t.prototype, "size", {
						get: function() {
							return this.data.size
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.indexOf = function(t) {
						return this.data.indexOf(t)
					}, t.prototype.forEach = function(t) {
						this.data.ut((function(e, n) {
							return t(e), !1
						}))
					}, t.prototype.Nt = function(t, e) {
						for (var n = this.data._t(t[0]); n.It();) {
							var r = n.Et();
							if (this.i(r.key, t[1]) >= 0) return;
							e(r.key)
						}
					}, t.prototype.Ft = function(t, e) {
						var n;
						for (n = void 0 !== e ? this.data._t(e) : this.data.lt(); n.It();)
							if (!t(n.Et().key)) return
					}, t.prototype.$t = function(t) {
						var e = this.data._t(t);
						return e.It() ? e.Et().key : null
					}, t.prototype.lt = function() {
						return new Nt(this.data.lt())
					}, t.prototype._t = function(t) {
						return new Nt(this.data._t(t))
					}, t.prototype.add = function(t) {
						return this.copy(this.data.remove(t).rt(t, !0))
					}, t.prototype.delete = function(t) {
						return this.has(t) ? this.copy(this.data.remove(t)) : this
					}, t.prototype.m = function() {
						return this.data.m()
					}, t.prototype.xt = function(t) {
						var e = this;
						return e.size < t.size && (e = t, t = this), t.forEach((function(t) {
							e = e.add(t)
						})), e
					}, t.prototype.isEqual = function(e) {
						if (!(e instanceof t)) return !1;
						if (this.size !== e.size) return !1;
						for (var n = this.data.lt(), r = e.data.lt(); n.It();) {
							var i = n.Et().key,
								o = r.Et().key;
							if (0 !== this.i(i, o)) return !1
						}
						return !0
					}, t.prototype.A = function() {
						var t = [];
						return this.forEach((function(e) {
							t.push(e)
						})), t
					}, t.prototype.toString = function() {
						var t = [];
						return this.forEach((function(e) {
							return t.push(e)
						})), "SortedSet(" + t.toString() + ")"
					}, t.prototype.copy = function(e) {
						var n = new t(this.i);
						return n.data = e, n
					}, t
				}(),
				Nt = function() {
					function t(t) {
						this.kt = t
					}
					return t.prototype.Et = function() {
						return this.kt.Et().key
					}, t.prototype.It = function() {
						return this.kt.It()
					}, t
				}(),
				At = new It(A.i);

			function xt() {
				return At
			}

			function Ot() {
				return xt()
			}
			var Ct = new It(A.i);

			function Dt() {
				return Ct
			}
			var Pt = new It(A.i),
				Rt = new kt(A.i);

			function Lt() {
				for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
				for (var n = Rt, r = 0, i = t; r < i.length; r++) {
					var o = i[r];
					n = n.add(o)
				}
				return n
			}
			var Mt = new kt(Y);

			function jt() {
				return Mt
			}
			var Ut = function() {
					function t(t) {
						this.i = t ? function(e, n) {
							return t(e, n) || A.i(e.key, n.key)
						} : function(t, e) {
							return A.i(t.key, e.key)
						}, this.Mt = Dt(), this.Ot = new It(this.i)
					}
					return t.Lt = function(e) {
						return new t(e.i)
					}, t.prototype.has = function(t) {
						return null != this.Mt.get(t)
					}, t.prototype.get = function(t) {
						return this.Mt.get(t)
					}, t.prototype.first = function() {
						return this.Ot.at()
					}, t.prototype.last = function() {
						return this.Ot.ct()
					}, t.prototype.m = function() {
						return this.Ot.m()
					}, t.prototype.indexOf = function(t) {
						var e = this.Mt.get(t);
						return e ? this.Ot.indexOf(e) : -1
					}, Object.defineProperty(t.prototype, "size", {
						get: function() {
							return this.Ot.size
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.forEach = function(t) {
						this.Ot.ut((function(e, n) {
							return t(e), !1
						}))
					}, t.prototype.add = function(t) {
						var e = this.delete(t.key);
						return e.copy(e.Mt.rt(t.key, t), e.Ot.rt(t, null))
					}, t.prototype.delete = function(t) {
						var e = this.get(t);
						return e ? this.copy(this.Mt.remove(t), this.Ot.remove(e)) : this
					}, t.prototype.isEqual = function(e) {
						if (!(e instanceof t)) return !1;
						if (this.size !== e.size) return !1;
						for (var n = this.Ot.lt(), r = e.Ot.lt(); n.It();) {
							var i = n.Et().key,
								o = r.Et().key;
							if (!i.isEqual(o)) return !1
						}
						return !0
					}, t.prototype.toString = function() {
						var t = [];
						return this.forEach((function(e) {
							t.push(e.toString())
						})), 0 === t.length ? "DocumentSet ()" : "DocumentSet (\n  " + t.join("  \n") + "\n)"
					}, t.prototype.copy = function(e, n) {
						var r = new t;
						return r.i = this.i, r.Mt = e, r.Ot = n, r
					}, t
				}(),
				Ft = function() {
					function t() {
						this.Bt = new It(A.i)
					}
					return t.prototype.track = function(t) {
						var e = t.doc.key,
							n = this.Bt.get(e);
						n ? 0 !== t.type && 3 === n.type ? this.Bt = this.Bt.rt(e, t) : 3 === t.type && 1 !== n.type ? this.Bt = this.Bt.rt(e, {
							type: n.type,
							doc: t.doc
						}) : 2 === t.type && 2 === n.type ? this.Bt = this.Bt.rt(e, {
							type: 2,
							doc: t.doc
						}) : 2 === t.type && 0 === n.type ? this.Bt = this.Bt.rt(e, {
							type: 0,
							doc: t.doc
						}) : 1 === t.type && 0 === n.type ? this.Bt = this.Bt.remove(e) : 1 === t.type && 2 === n.type ? this.Bt = this.Bt.rt(e, {
							type: 1,
							doc: n.doc
						}) : 0 === t.type && 1 === n.type ? this.Bt = this.Bt.rt(e, {
							type: 2,
							doc: t.doc
						}) : g() : this.Bt = this.Bt.rt(e, t)
					}, t.prototype.qt = function() {
						var t = [];
						return this.Bt.ut((function(e, n) {
							t.push(n)
						})), t
					}, t
				}(),
				Vt = function() {
					function t(t, e, n, r, i, o, a, u) {
						this.query = t, this.docs = e, this.Ut = n, this.docChanges = r, this.Qt = i, this.fromCache = o, this.Wt = a, this.jt = u
					}
					return t.Kt = function(e, n, r, i) {
						var o = [];
						return n.forEach((function(t) {
							o.push({
								type: 0,
								doc: t
							})
						})), new t(e, n, Ut.Lt(n), o, r, i, !0, !1)
					}, Object.defineProperty(t.prototype, "hasPendingWrites", {
						get: function() {
							return !this.Qt.m()
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.isEqual = function(t) {
						if (!(this.fromCache === t.fromCache && this.Wt === t.Wt && this.Qt.isEqual(t.Qt) && Hn(this.query, t.query) && this.docs.isEqual(t.docs) && this.Ut.isEqual(t.Ut))) return !1;
						var e = this.docChanges,
							n = t.docChanges;
						if (e.length !== n.length) return !1;
						for (var r = 0; r < e.length; r++)
							if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc)) return !1;
						return !0
					}, t
				}(),
				zt = function() {
					function t(t, e, n, r, i) {
						this.et = t, this.Gt = e, this.zt = n, this.Ht = r, this.Yt = i
					}
					return t.Jt = function(e, n) {
						var r = new Map;
						return r.set(e, Bt.Xt(e, n)), new t(st.min(), r, jt(), xt(), Lt())
					}, t
				}(),
				Bt = function() {
					function t(t, e, n, r, i) {
						this.resumeToken = t, this.Zt = e, this.te = n, this.ee = r, this.ne = i
					}
					return t.Xt = function(e, n) {
						return new t(Z.B, n, Lt(), Lt(), Lt())
					}, t
				}(),
				qt = function(t, e, n, r) {
					this.se = t, this.removedTargetIds = e, this.key = n, this.ie = r
				},
				Gt = function(t, e) {
					this.targetId = t, this.re = e
				},
				Wt = function(t, e, n, r) {
					void 0 === n && (n = Z.B), void 0 === r && (r = null), this.state = t, this.targetIds = e, this.resumeToken = n, this.cause = r
				},
				Ht = function() {
					function t() {
						this.oe = 0, this.ae = Xt(), this.ce = Z.B, this.ue = !1, this.he = !0
					}
					return Object.defineProperty(t.prototype, "Zt", {
						get: function() {
							return this.ue
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "resumeToken", {
						get: function() {
							return this.ce
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "le", {
						get: function() {
							return 0 !== this.oe
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "_e", {
						get: function() {
							return this.he
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.fe = function(t) {
						t.O() > 0 && (this.he = !0, this.ce = t)
					}, t.prototype.de = function() {
						var t = Lt(),
							e = Lt(),
							n = Lt();
						return this.ae.forEach((function(r, i) {
							switch (i) {
								case 0:
									t = t.add(r);
									break;
								case 2:
									e = e.add(r);
									break;
								case 1:
									n = n.add(r);
									break;
								default:
									g()
							}
						})), new Bt(this.ce, this.ue, t, e, n)
					}, t.prototype.we = function() {
						this.he = !1, this.ae = Xt()
					}, t.prototype.me = function(t, e) {
						this.he = !0, this.ae = this.ae.rt(t, e)
					}, t.prototype.Te = function(t) {
						this.he = !0, this.ae = this.ae.remove(t)
					}, t.prototype.Ee = function() {
						this.oe += 1
					}, t.prototype.Ie = function() {
						this.oe -= 1
					}, t.prototype.Ae = function() {
						this.he = !0, this.ue = !0
					}, t
				}(),
				Kt = function() {
					function t(t) {
						this.Re = t, this.Pe = new Map, this.ge = xt(), this.ye = Qt(), this.Ve = new kt(Y)
					}
					return t.prototype.pe = function(t) {
						for (var e = 0, n = t.se; e < n.length; e++) {
							var r = n[e];
							t.ie instanceof xn ? this.be(r, t.ie) : t.ie instanceof On && this.ve(r, t.key, t.ie)
						}
						for (var i = 0, o = t.removedTargetIds; i < o.length; i++) {
							var a = o[i];
							this.ve(a, t.key, t.ie)
						}
					}, t.prototype.Se = function(t) {
						var e = this;
						this.De(t, (function(n) {
							var r = e.Ce(n);
							switch (t.state) {
								case 0:
									e.Ne(n) && r.fe(t.resumeToken);
									break;
								case 1:
									r.Ie(), r.le || r.we(), r.fe(t.resumeToken);
									break;
								case 2:
									r.Ie(), r.le || e.removeTarget(n);
									break;
								case 3:
									e.Ne(n) && (r.Ae(), r.fe(t.resumeToken));
									break;
								case 4:
									e.Ne(n) && (e.Fe(n), r.fe(t.resumeToken));
									break;
								default:
									g()
							}
						}))
					}, t.prototype.De = function(t, e) {
						var n = this;
						t.targetIds.length > 0 ? t.targetIds.forEach(e) : this.Pe.forEach((function(t, r) {
							n.Ne(r) && e(r)
						}))
					}, t.prototype.$e = function(t) {
						var e = t.targetId,
							n = t.re.count,
							r = this.xe(e);
						if (r) {
							var i = r.target;
							if (mt(i))
								if (0 === n) {
									var o = new A(i.path);
									this.ve(e, o, new On(o, st.min()))
								} else b(1 === n);
							else this.ke(e) !== n && (this.Fe(e), this.Ve = this.Ve.add(e))
						}
					}, t.prototype.Me = function(t) {
						var e = this,
							n = new Map;
						this.Pe.forEach((function(r, i) {
							var o = e.xe(i);
							if (o) {
								if (r.Zt && mt(o.target)) {
									var a = new A(o.target.path);
									null !== e.ge.get(a) || e.Oe(i, a) || e.ve(i, a, new On(a, t))
								}
								r._e && (n.set(i, r.de()), r.we())
							}
						}));
						var r = Lt();
						this.ye.forEach((function(t, n) {
							var i = !0;
							n.Ft((function(t) {
								var n = e.xe(t);
								return !n || 2 === n.tt || (i = !1, !1)
							})), i && (r = r.add(t))
						}));
						var i = new zt(t, n, this.Ve, this.ge, r);
						return this.ge = xt(), this.ye = Qt(), this.Ve = new kt(Y), i
					}, t.prototype.be = function(t, e) {
						if (this.Ne(t)) {
							var n = this.Oe(t, e.key) ? 2 : 0;
							this.Ce(t).me(e.key, n), this.ge = this.ge.rt(e.key, e), this.ye = this.ye.rt(e.key, this.Le(e.key).add(t))
						}
					}, t.prototype.ve = function(t, e, n) {
						if (this.Ne(t)) {
							var r = this.Ce(t);
							this.Oe(t, e) ? r.me(e, 1) : r.Te(e), this.ye = this.ye.rt(e, this.Le(e).delete(t)), n && (this.ge = this.ge.rt(e, n))
						}
					}, t.prototype.removeTarget = function(t) {
						this.Pe.delete(t)
					}, t.prototype.ke = function(t) {
						var e = this.Ce(t).de();
						return this.Re.Be(t).size + e.te.size - e.ne.size
					}, t.prototype.Ee = function(t) {
						this.Ce(t).Ee()
					}, t.prototype.Ce = function(t) {
						var e = this.Pe.get(t);
						return e || (e = new Ht, this.Pe.set(t, e)), e
					}, t.prototype.Le = function(t) {
						var e = this.ye.get(t);
						return e || (e = new kt(Y), this.ye = this.ye.rt(t, e)), e
					}, t.prototype.Ne = function(t) {
						var e = null !== this.xe(t);
						return e || d("WatchChangeAggregator", "Detected inactive target", t), e
					}, t.prototype.xe = function(t) {
						var e = this.Pe.get(t);
						return e && e.le ? null : this.Re.qe(t)
					}, t.prototype.Fe = function(t) {
						var e = this;
						this.Pe.set(t, new Ht), this.Re.Be(t).forEach((function(n) {
							e.ve(t, n, null)
						}))
					}, t.prototype.Oe = function(t, e) {
						return this.Re.Be(t).has(e)
					}, t
				}();

			function Qt() {
				return new It(A.i)
			}

			function Xt() {
				return new It(A.i)
			}

			function Yt(t) {
				var e, n;
				return "server_timestamp" === (null === (n = ((null === (e = null == t ? void 0 : t.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue)
			}

			function $t(t) {
				var e = oe(t.mapValue.fields.__local_write_time__.timestampValue);
				return new ut(e.seconds, e.nanos)
			}
			var Jt = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

			function Zt(t) {
				return "nullValue" in t ? 0 : "booleanValue" in t ? 1 : "integerValue" in t || "doubleValue" in t ? 2 : "timestampValue" in t ? 3 : "stringValue" in t ? 5 : "bytesValue" in t ? 6 : "referenceValue" in t ? 7 : "geoPointValue" in t ? 8 : "arrayValue" in t ? 9 : "mapValue" in t ? Yt(t) ? 4 : 10 : g()
			}

			function te(t, e) {
				var n = Zt(t);
				if (n !== Zt(e)) return !1;
				switch (n) {
					case 0:
						return !0;
					case 1:
						return t.booleanValue === e.booleanValue;
					case 4:
						return $t(t).isEqual($t(e));
					case 3:
						return function(t, e) {
							if ("string" == typeof t.timestampValue && "string" == typeof e.timestampValue && t.timestampValue.length === e.timestampValue.length) return t.timestampValue === e.timestampValue;
							var n = oe(t.timestampValue),
								r = oe(e.timestampValue);
							return n.seconds === r.seconds && n.nanos === r.nanos
						}(t, e);
					case 5:
						return t.stringValue === e.stringValue;
					case 6:
						return function(t, e) {
							return ue(t.bytesValue).isEqual(ue(e.bytesValue))
						}(t, e);
					case 7:
						return t.referenceValue === e.referenceValue;
					case 8:
						return function(t, e) {
							return ae(t.geoPointValue.latitude) === ae(e.geoPointValue.latitude) && ae(t.geoPointValue.longitude) === ae(e.geoPointValue.longitude)
						}(t, e);
					case 2:
						return function(t, e) {
							if ("integerValue" in t && "integerValue" in e) return ae(t.integerValue) === ae(e.integerValue);
							if ("doubleValue" in t && "doubleValue" in e) {
								var n = ae(t.doubleValue),
									r = ae(e.doubleValue);
								return n === r ? lt(n) === lt(r) : isNaN(n) && isNaN(r)
							}
							return !1
						}(t, e);
					case 9:
						return $(t.arrayValue.values || [], e.arrayValue.values || [], te);
					case 10:
						return function(t, e) {
							var n = t.mapValue.fields || {},
								r = e.mapValue.fields || {};
							if (_(n) !== _(r)) return !1;
							for (var i in n)
								if (n.hasOwnProperty(i) && (void 0 === r[i] || !te(n[i], r[i]))) return !1;
							return !0
						}(t, e);
					default:
						return g()
				}
			}

			function ee(t, e) {
				return void 0 !== (t.values || []).find((function(t) {
					return te(t, e)
				}))
			}

			function ne(t, e) {
				var n = Zt(t),
					r = Zt(e);
				if (n !== r) return Y(n, r);
				switch (n) {
					case 0:
						return 0;
					case 1:
						return Y(t.booleanValue, e.booleanValue);
					case 2:
						return function(t, e) {
							var n = ae(t.integerValue || t.doubleValue),
								r = ae(e.integerValue || e.doubleValue);
							return n < r ? -1 : n > r ? 1 : n === r ? 0 : isNaN(n) ? isNaN(r) ? 0 : -1 : 1
						}(t, e);
					case 3:
						return re(t.timestampValue, e.timestampValue);
					case 4:
						return re($t(t), $t(e));
					case 5:
						return Y(t.stringValue, e.stringValue);
					case 6:
						return function(t, e) {
							var n = ue(t),
								r = ue(e);
							return n.L(r)
						}(t.bytesValue, e.bytesValue);
					case 7:
						return function(t, e) {
							for (var n = t.split("/"), r = e.split("/"), i = 0; i < n.length && i < r.length; i++) {
								var o = Y(n[i], r[i]);
								if (0 !== o) return o
							}
							return Y(n.length, r.length)
						}(t.referenceValue, e.referenceValue);
					case 8:
						return function(t, e) {
							var n = Y(ae(t.latitude), ae(e.latitude));
							return 0 !== n ? n : Y(ae(t.longitude), ae(e.longitude))
						}(t.geoPointValue, e.geoPointValue);
					case 9:
						return function(t, e) {
							for (var n = t.values || [], r = e.values || [], i = 0; i < n.length && i < r.length; ++i) {
								var o = ne(n[i], r[i]);
								if (o) return o
							}
							return Y(n.length, r.length)
						}(t.arrayValue, e.arrayValue);
					case 10:
						return function(t, e) {
							var n = t.fields || {},
								r = Object.keys(n),
								i = e.fields || {},
								o = Object.keys(i);
							r.sort(), o.sort();
							for (var a = 0; a < r.length && a < o.length; ++a) {
								var u = Y(r[a], o[a]);
								if (0 !== u) return u;
								var s = ne(n[r[a]], i[o[a]]);
								if (0 !== s) return s
							}
							return Y(r.length, o.length)
						}(t.mapValue, e.mapValue);
					default:
						throw g()
				}
			}

			function re(t, e) {
				if ("string" == typeof t && "string" == typeof e && t.length === e.length) return Y(t, e);
				var n = oe(t),
					r = oe(e),
					i = Y(n.seconds, r.seconds);
				return 0 !== i ? i : Y(n.nanos, r.nanos)
			}

			function ie(t) {
				return function t(e) {
					return "nullValue" in e ? "null" : "booleanValue" in e ? "" + e.booleanValue : "integerValue" in e ? "" + e.integerValue : "doubleValue" in e ? "" + e.doubleValue : "timestampValue" in e ? function(t) {
						var e = oe(t);
						return "time(" + e.seconds + "," + e.nanos + ")"
					}(e.timestampValue) : "stringValue" in e ? e.stringValue : "bytesValue" in e ? ue(e.bytesValue).toBase64() : "referenceValue" in e ? (r = e.referenceValue, A.C(r).toString()) : "geoPointValue" in e ? "geo(" + (n = e.geoPointValue).latitude + "," + n.longitude + ")" : "arrayValue" in e ? function(e) {
						for (var n = "[", r = !0, i = 0, o = e.values || []; i < o.length; i++) {
							var a = o[i];
							r ? r = !1 : n += ",", n += t(a)
						}
						return n + "]"
					}(e.arrayValue) : "mapValue" in e ? function(e) {
						for (var n = "{", r = !0, i = 0, o = Object.keys(e.fields || {}).sort(); i < o.length; i++) {
							var a = o[i];
							r ? r = !1 : n += ",", n += a + ":" + t(e.fields[a])
						}
						return n + "}"
					}(e.mapValue) : g();
					var n, r
				}(t)
			}

			function oe(t) {
				if (b(!!t), "string" == typeof t) {
					var e = 0,
						n = Jt.exec(t);
					if (b(!!n), n[1]) {
						var r = n[1];
						r = (r + "000000000").substr(0, 9), e = Number(r)
					}
					var i = new Date(t);
					return {
						seconds: Math.floor(i.getTime() / 1e3),
						nanos: e
					}
				}
				return {
					seconds: ae(t.seconds),
					nanos: ae(t.nanos)
				}
			}

			function ae(t) {
				return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0
			}

			function ue(t) {
				return "string" == typeof t ? Z.fromBase64String(t) : Z.fromUint8Array(t)
			}

			function se(t, e) {
				return {
					referenceValue: "projects/" + t.projectId + "/databases/" + t.database + "/documents/" + e.path.R()
				}
			}

			function ce(t) {
				return !!t && "integerValue" in t
			}

			function le(t) {
				return !!t && "arrayValue" in t
			}

			function fe(t) {
				return !!t && "nullValue" in t
			}

			function he(t) {
				return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue))
			}

			function pe(t) {
				return !!t && "mapValue" in t
			}
			var de = {
					asc: "ASCENDING",
					desc: "DESCENDING"
				},
				ve = {
					"<": "LESS_THAN",
					"<=": "LESS_THAN_OR_EQUAL",
					">": "GREATER_THAN",
					">=": "GREATER_THAN_OR_EQUAL",
					"==": "EQUAL",
					"!=": "NOT_EQUAL",
					"array-contains": "ARRAY_CONTAINS",
					in: "IN",
					"not-in": "NOT_IN",
					"array-contains-any": "ARRAY_CONTAINS_ANY"
				},
				me = function(t, e) {
					this.U = t, this.Ue = e
				};

			function ye(t) {
				return {
					integerValue: "" + t
				}
			}

			function ge(t, e) {
				if (t.Ue) {
					if (isNaN(e)) return {
						doubleValue: "NaN"
					};
					if (e === 1 / 0) return {
						doubleValue: "Infinity"
					};
					if (e === -1 / 0) return {
						doubleValue: "-Infinity"
					}
				}
				return {
					doubleValue: lt(e) ? "-0" : e
				}
			}

			function be(t, e) {
				return ft(e) ? ye(e) : ge(t, e)
			}

			function we(t, e) {
				return t.Ue ? new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "") + "." + ("000000000" + e.nanoseconds).slice(-9) + "Z" : {
					seconds: "" + e.seconds,
					nanos: e.nanoseconds
				}
			}

			function _e(t, e) {
				return t.Ue ? e.toBase64() : e.toUint8Array()
			}

			function Ee(t, e) {
				return we(t, e.X())
			}

			function Ie(t) {
				return b(!!t), st.Y(function(t) {
					var e = oe(t);
					return new ut(e.seconds, e.nanos)
				}(t))
			}

			function Te(t, e) {
				return function(t) {
					return new S(["projects", t.projectId, "databases", t.database])
				}(t).child("documents").child(e).R()
			}

			function Se(t) {
				var e = S.P(t);
				return b(He(e)), e
			}

			function ke(t, e) {
				return Te(t.U, e.path)
			}

			function Ne(t, e) {
				var n = Se(e);
				return b(n.get(1) === t.U.projectId), b(!n.get(3) && !t.U.database || n.get(3) === t.U.database), new A(Ce(n))
			}

			function Ae(t, e) {
				return Te(t.U, e)
			}

			function xe(t) {
				var e = Se(t);
				return 4 === e.length ? S.g() : Ce(e)
			}

			function Oe(t) {
				return new S(["projects", t.U.projectId, "databases", t.U.database]).R()
			}

			function Ce(t) {
				return b(t.length > 4 && "documents" === t.get(4)), t.u(5)
			}

			function De(t, e, n) {
				return {
					name: ke(t, e),
					fields: n.proto.mapValue.fields
				}
			}

			function Pe(t, e) {
				var n;
				if (e instanceof yn) n = {
					update: De(t, e.key, e.value)
				};
				else if (e instanceof In) n = {
					delete: ke(t, e.key)
				};
				else if (e instanceof gn) n = {
					update: De(t, e.key, e.data),
					updateMask: We(e.Qe)
				};
				else if (e instanceof wn) n = {
					transform: {
						document: ke(t, e.key),
						fieldTransforms: e.fieldTransforms.map((function(t) {
							return function(t, e) {
								var n = e.transform;
								if (n instanceof $e) return {
									fieldPath: e.field.R(),
									setToServerValue: "REQUEST_TIME"
								};
								if (n instanceof Je) return {
									fieldPath: e.field.R(),
									appendMissingElements: {
										values: n.elements
									}
								};
								if (n instanceof tn) return {
									fieldPath: e.field.R(),
									removeAllFromArray: {
										values: n.elements
									}
								};
								if (n instanceof nn) return {
									fieldPath: e.field.R(),
									increment: n.We
								};
								throw g()
							}(0, t)
						}))
					}
				};
				else {
					if (!(e instanceof Tn)) return g();
					n = {
						verify: ke(t, e.key)
					}
				}
				return e.Ke.je || (n.currentDocument = function(t, e) {
					return void 0 !== e.updateTime ? {
						updateTime: Ee(t, e.updateTime)
					} : void 0 !== e.exists ? {
						exists: e.exists
					} : g()
				}(t, e.Ke)), n
			}

			function Re(t, e) {
				var n = e.currentDocument ? function(t) {
					return void 0 !== t.updateTime ? cn.updateTime(Ie(t.updateTime)) : void 0 !== t.exists ? cn.exists(t.exists) : cn.Ge()
				}(e.currentDocument) : cn.Ge();
				if (e.update) {
					e.update.name;
					var r = Ne(t, e.update.name),
						i = new Sn({
							mapValue: {
								fields: e.update.fields
							}
						});
					if (e.updateMask) {
						var o = function(t) {
							var e = t.fieldPaths || [];
							return new an(e.map((function(t) {
								return N.S(t)
							})))
						}(e.updateMask);
						return new gn(r, i, o, n)
					}
					return new yn(r, i, n)
				}
				if (e.delete) {
					var a = Ne(t, e.delete);
					return new In(a, n)
				}
				if (e.transform) {
					var u = Ne(t, e.transform.document),
						s = e.transform.fieldTransforms.map((function(e) {
							return function(t, e) {
								var n = null;
								if ("setToServerValue" in e) b("REQUEST_TIME" === e.setToServerValue), n = new $e;
								else if ("appendMissingElements" in e) {
									var r = e.appendMissingElements.values || [];
									n = new Je(r)
								} else if ("removeAllFromArray" in e) {
									var i = e.removeAllFromArray.values || [];
									n = new tn(i)
								} else "increment" in e ? n = new nn(t, e.increment) : g();
								var o = N.S(e.fieldPath);
								return new un(o, n)
							}(t, e)
						}));
					return b(!0 === n.exists), new wn(u, s)
				}
				if (e.verify) {
					var c = Ne(t, e.verify);
					return new Tn(c, n)
				}
				return g()
			}

			function Le(t, e) {
				return {
					documents: [Ae(t, e.path)]
				}
			}

			function Me(t, e) {
				var n = {
						structuredQuery: {}
					},
					r = e.path;
				null !== e.collectionGroup ? (n.parent = Ae(t, r), n.structuredQuery.from = [{
					collectionId: e.collectionGroup,
					allDescendants: !0
				}]) : (n.parent = Ae(t, r.h()), n.structuredQuery.from = [{
					collectionId: r._()
				}]);
				var i = function(t) {
					if (0 !== t.length) {
						var e = t.map((function(t) {
							return function(t) {
								if ("==" === t.op) {
									if (he(t.value)) return {
										unaryFilter: {
											field: ze(t.field),
											op: "IS_NAN"
										}
									};
									if (fe(t.value)) return {
										unaryFilter: {
											field: ze(t.field),
											op: "IS_NULL"
										}
									}
								} else if ("!=" === t.op) {
									if (he(t.value)) return {
										unaryFilter: {
											field: ze(t.field),
											op: "IS_NOT_NAN"
										}
									};
									if (fe(t.value)) return {
										unaryFilter: {
											field: ze(t.field),
											op: "IS_NOT_NULL"
										}
									}
								}
								return {
									fieldFilter: {
										field: ze(t.field),
										op: Ve(t.op),
										value: t.value
									}
								}
							}(t)
						}));
						return 1 === e.length ? e[0] : {
							compositeFilter: {
								op: "AND",
								filters: e
							}
						}
					}
				}(e.filters);
				i && (n.structuredQuery.where = i);
				var o = function(t) {
					if (0 !== t.length) return t.map((function(t) {
						return function(t) {
							return {
								field: ze(t.field),
								direction: Fe(t.dir)
							}
						}(t)
					}))
				}(e.orderBy);
				o && (n.structuredQuery.orderBy = o);
				var a = function(t, e) {
					return t.Ue || ct(e) ? e : {
						value: e
					}
				}(t, e.limit);
				return null !== a && (n.structuredQuery.limit = a), e.startAt && (n.structuredQuery.startAt = je(e.startAt)), e.endAt && (n.structuredQuery.endAt = je(e.endAt)), n
			}

			function je(t) {
				return {
					before: t.before,
					values: t.position
				}
			}

			function Ue(t) {
				var e = !!t.before,
					n = t.values || [];
				return new ar(n, e)
			}

			function Fe(t) {
				return de[t]
			}

			function Ve(t) {
				return ve[t]
			}

			function ze(t) {
				return {
					fieldPath: t.R()
				}
			}

			function Be(t) {
				return N.S(t.fieldPath)
			}

			function qe(t) {
				return $n.create(Be(t.fieldFilter.field), function(t) {
					switch (t) {
						case "EQUAL":
							return "==";
						case "NOT_EQUAL":
							return "!=";
						case "GREATER_THAN":
							return ">";
						case "GREATER_THAN_OR_EQUAL":
							return ">=";
						case "LESS_THAN":
							return "<";
						case "LESS_THAN_OR_EQUAL":
							return "<=";
						case "ARRAY_CONTAINS":
							return "array-contains";
						case "IN":
							return "in";
						case "NOT_IN":
							return "not-in";
						case "ARRAY_CONTAINS_ANY":
							return "array-contains-any";
						case "OPERATOR_UNSPECIFIED":
						default:
							return g()
					}
				}(t.fieldFilter.op), t.fieldFilter.value)
			}

			function Ge(t) {
				switch (t.unaryFilter.op) {
					case "IS_NAN":
						var e = Be(t.unaryFilter.field);
						return $n.create(e, "==", {
							doubleValue: NaN
						});
					case "IS_NULL":
						var n = Be(t.unaryFilter.field);
						return $n.create(n, "==", {
							nullValue: "NULL_VALUE"
						});
					case "IS_NOT_NAN":
						var r = Be(t.unaryFilter.field);
						return $n.create(r, "!=", {
							doubleValue: NaN
						});
					case "IS_NOT_NULL":
						var i = Be(t.unaryFilter.field);
						return $n.create(i, "!=", {
							nullValue: "NULL_VALUE"
						});
					case "OPERATOR_UNSPECIFIED":
					default:
						return g()
				}
			}

			function We(t) {
				var e = [];
				return t.fields.forEach((function(t) {
					return e.push(t.R())
				})), {
					fieldPaths: e
				}
			}

			function He(t) {
				return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2)
			}
			var Ke = function() {
				this.ze = void 0
			};

			function Qe(t, e, n) {
				return t instanceof $e ? function(t, e) {
					var n = {
						fields: {
							__type__: {
								stringValue: "server_timestamp"
							},
							__local_write_time__: {
								timestampValue: {
									seconds: t.seconds,
									nanos: t.nanoseconds
								}
							}
						}
					};
					return e && (n.fields.__previous_value__ = e), {
						mapValue: n
					}
				}(n, e) : t instanceof Je ? Ze(t, e) : t instanceof tn ? en(t, e) : function(t, e) {
					var n = Ye(t, e),
						r = rn(n) + rn(t.We);
					return ce(n) && ce(t.We) ? ye(r) : ge(t.serializer, r)
				}(t, e)
			}

			function Xe(t, e, n) {
				return t instanceof Je ? Ze(t, e) : t instanceof tn ? en(t, e) : n
			}

			function Ye(t, e) {
				return t instanceof nn ? ce(n = e) || function(t) {
					return !!t && "doubleValue" in t
				}(n) ? e : {
					integerValue: 0
				} : null;
				var n
			}
			var $e = function(t) {
					function e() {
						return null !== t && t.apply(this, arguments) || this
					}
					return r.__extends(e, t), e
				}(Ke),
				Je = function(t) {
					function e(e) {
						var n = this;
						return (n = t.call(this) || this).elements = e, n
					}
					return r.__extends(e, t), e
				}(Ke);

			function Ze(t, e) {
				for (var n = on(e), r = function(t) {
						n.some((function(e) {
							return te(e, t)
						})) || n.push(t)
					}, i = 0, o = t.elements; i < o.length; i++) r(o[i]);
				return {
					arrayValue: {
						values: n
					}
				}
			}
			var tn = function(t) {
				function e(e) {
					var n = this;
					return (n = t.call(this) || this).elements = e, n
				}
				return r.__extends(e, t), e
			}(Ke);

			function en(t, e) {
				for (var n = on(e), r = function(t) {
						n = n.filter((function(e) {
							return !te(e, t)
						}))
					}, i = 0, o = t.elements; i < o.length; i++) r(o[i]);
				return {
					arrayValue: {
						values: n
					}
				}
			}
			var nn = function(t) {
				function e(e, n) {
					var r = this;
					return (r = t.call(this) || this).serializer = e, r.We = n, r
				}
				return r.__extends(e, t), e
			}(Ke);

			function rn(t) {
				return ae(t.integerValue || t.doubleValue)
			}

			function on(t) {
				return le(t) && t.arrayValue.values ? t.arrayValue.values.slice() : []
			}
			var an = function() {
					function t(t) {
						this.fields = t, t.sort(N.i)
					}
					return t.prototype.He = function(t) {
						for (var e = 0, n = this.fields; e < n.length; e++)
							if (n[e].T(t)) return !0;
						return !1
					}, t.prototype.isEqual = function(t) {
						return $(this.fields, t.fields, (function(t, e) {
							return t.isEqual(e)
						}))
					}, t
				}(),
				un = function(t, e) {
					this.field = t, this.transform = e
				},
				sn = function(t, e) {
					this.version = t, this.transformResults = e
				},
				cn = function() {
					function t(t, e) {
						this.updateTime = t, this.exists = e
					}
					return t.Ge = function() {
						return new t
					}, t.exists = function(e) {
						return new t(void 0, e)
					}, t.updateTime = function(e) {
						return new t(e)
					}, Object.defineProperty(t.prototype, "je", {
						get: function() {
							return void 0 === this.updateTime && void 0 === this.exists
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.isEqual = function(t) {
						return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime)
					}, t
				}();

			function ln(t, e) {
				return void 0 !== t.updateTime ? e instanceof xn && e.version.isEqual(t.updateTime) : void 0 === t.exists || t.exists === e instanceof xn
			}
			var fn = function() {};

			function hn(t, e, n) {
				return t instanceof yn ? function(t, e, n) {
					return new xn(t.key, n.version, t.value, {
						hasCommittedMutations: !0
					})
				}(t, 0, n) : t instanceof gn ? function(t, e, n) {
					if (!ln(t.Ke, e)) return new Cn(t.key, n.version);
					var r = bn(t, e);
					return new xn(t.key, n.version, r, {
						hasCommittedMutations: !0
					})
				}(t, e, n) : t instanceof wn ? function(t, e, n) {
					if (b(null != n.transformResults), !ln(t.Ke, e)) return new Cn(t.key, n.version);
					var r = _n(t, e),
						i = function(t, e, n) {
							var r = [];
							b(t.length === n.length);
							for (var i = 0; i < n.length; i++) {
								var o = t[i],
									a = o.transform,
									u = null;
								e instanceof xn && (u = e.field(o.field)), r.push(Xe(a, u, n[i]))
							}
							return r
						}(t.fieldTransforms, e, n.transformResults),
						o = n.version,
						a = En(t, r.data(), i);
					return new xn(t.key, o, a, {
						hasCommittedMutations: !0
					})
				}(t, e, n) : function(t, e, n) {
					return new On(t.key, n.version, {
						hasCommittedMutations: !0
					})
				}(t, 0, n)
			}

			function pn(t, e, n, r) {
				return t instanceof yn ? function(t, e) {
					if (!ln(t.Ke, e)) return e;
					var n = mn(e);
					return new xn(t.key, n, t.value, {
						Ye: !0
					})
				}(t, e) : t instanceof gn ? function(t, e) {
					if (!ln(t.Ke, e)) return e;
					var n = mn(e),
						r = bn(t, e);
					return new xn(t.key, n, r, {
						Ye: !0
					})
				}(t, e) : t instanceof wn ? function(t, e, n, r) {
					if (!ln(t.Ke, e)) return e;
					var i = _n(t, e),
						o = function(t, e, n, r) {
							for (var i = [], o = 0, a = t; o < a.length; o++) {
								var u = a[o],
									s = u.transform,
									c = null;
								n instanceof xn && (c = n.field(u.field)), null === c && r instanceof xn && (c = r.field(u.field)), i.push(Qe(s, c, e))
							}
							return i
						}(t.fieldTransforms, n, e, r),
						a = En(t, i.data(), o);
					return new xn(t.key, i.version, a, {
						Ye: !0
					})
				}(t, e, r, n) : function(t, e) {
					return ln(t.Ke, e) ? new On(t.key, st.min()) : e
				}(t, e)
			}

			function dn(t, e) {
				return t instanceof wn ? function(t, e) {
					for (var n = null, r = 0, i = t.fieldTransforms; r < i.length; r++) {
						var o = i[r],
							a = e instanceof xn ? e.field(o.field) : void 0,
							u = Ye(o.transform, a || null);
						null != u && (n = null == n ? (new kn).set(o.field, u) : n.set(o.field, u))
					}
					return n ? n.Je() : null
				}(t, e) : null
			}

			function vn(t, e) {
				return t.type === e.type && !!t.key.isEqual(e.key) && !!t.Ke.isEqual(e.Ke) && (0 === t.type ? t.value.isEqual(e.value) : 1 === t.type ? t.data.isEqual(e.data) && t.Qe.isEqual(e.Qe) : 2 !== t.type || $(t.fieldTransforms, t.fieldTransforms, (function(t, e) {
					return function(t, e) {
						return t.field.isEqual(e.field) && function(t, e) {
							return t instanceof Je && e instanceof Je || t instanceof tn && e instanceof tn ? $(t.elements, e.elements, te) : t instanceof nn && e instanceof nn ? te(t.We, e.We) : t instanceof $e && e instanceof $e
						}(t.transform, e.transform)
					}(t, e)
				})))
			}

			function mn(t) {
				return t instanceof xn ? t.version : st.min()
			}
			var yn = function(t) {
					function e(e, n, r) {
						var i = this;
						return (i = t.call(this) || this).key = e, i.value = n, i.Ke = r, i.type = 0, i
					}
					return r.__extends(e, t), e
				}(fn),
				gn = function(t) {
					function e(e, n, r, i) {
						var o = this;
						return (o = t.call(this) || this).key = e, o.data = n, o.Qe = r, o.Ke = i, o.type = 1, o
					}
					return r.__extends(e, t), e
				}(fn);

			function bn(t, e) {
				return function(t, e) {
					var n = new kn(e);
					return t.Qe.fields.forEach((function(e) {
						if (!e.m()) {
							var r = t.data.field(e);
							null !== r ? n.set(e, r) : n.delete(e)
						}
					})), n.Je()
				}(t, e instanceof xn ? e.data() : Sn.empty())
			}
			var wn = function(t) {
				function e(e, n) {
					var r = this;
					return (r = t.call(this) || this).key = e, r.fieldTransforms = n, r.type = 2, r.Ke = cn.exists(!0), r
				}
				return r.__extends(e, t), e
			}(fn);

			function _n(t, e) {
				return e
			}

			function En(t, e, n) {
				for (var r = new kn(e), i = 0; i < t.fieldTransforms.length; i++) {
					var o = t.fieldTransforms[i];
					r.set(o.field, n[i])
				}
				return r.Je()
			}
			var In = function(t) {
					function e(e, n) {
						var r = this;
						return (r = t.call(this) || this).key = e, r.Ke = n, r.type = 3, r
					}
					return r.__extends(e, t), e
				}(fn),
				Tn = function(t) {
					function e(e, n) {
						var r = this;
						return (r = t.call(this) || this).key = e, r.Ke = n, r.type = 4, r
					}
					return r.__extends(e, t), e
				}(fn),
				Sn = function() {
					function t(t) {
						this.proto = t
					}
					return t.empty = function() {
						return new t({
							mapValue: {}
						})
					}, t.prototype.field = function(t) {
						if (t.m()) return this.proto;
						for (var e = this.proto, n = 0; n < t.length - 1; ++n) {
							if (!e.mapValue.fields) return null;
							if (!pe(e = e.mapValue.fields[t.get(n)])) return null
						}
						return (e = (e.mapValue.fields || {})[t._()]) || null
					}, t.prototype.isEqual = function(t) {
						return te(this.proto, t.proto)
					}, t
				}(),
				kn = function() {
					function t(t) {
						void 0 === t && (t = Sn.empty()), this.Xe = t, this.Ze = new Map
					}
					return t.prototype.set = function(t, e) {
						return this.tn(t, e), this
					}, t.prototype.delete = function(t) {
						return this.tn(t, null), this
					}, t.prototype.tn = function(t, e) {
						for (var n = this.Ze, r = 0; r < t.length - 1; ++r) {
							var i = t.get(r),
								o = n.get(i);
							o instanceof Map ? n = o : o && 10 === Zt(o) ? (o = new Map(Object.entries(o.mapValue.fields || {})), n.set(i, o), n = o) : (o = new Map, n.set(i, o), n = o)
						}
						n.set(t._(), e)
					}, t.prototype.Je = function() {
						var t = this.en(N.g(), this.Ze);
						return null != t ? new Sn(t) : this.Xe
					}, t.prototype.en = function(t, e) {
						var n = this,
							r = !1,
							i = this.Xe.field(t),
							o = pe(i) ? Object.assign({}, i.mapValue.fields) : {};
						return e.forEach((function(e, i) {
							if (e instanceof Map) {
								var a = n.en(t.child(i), e);
								null != a && (o[i] = a, r = !0)
							} else null !== e ? (o[i] = e, r = !0) : o.hasOwnProperty(i) && (delete o[i], r = !0)
						})), r ? {
							mapValue: {
								fields: o
							}
						} : null
					}, t
				}();

			function Nn(t) {
				var e = [];
				return E(t.fields || {}, (function(t, n) {
					var r = new N([t]);
					if (pe(n)) {
						var i = Nn(n.mapValue).fields;
						if (0 === i.length) e.push(r);
						else
							for (var o = 0, a = i; o < a.length; o++) {
								var u = a[o];
								e.push(r.child(u))
							}
					} else e.push(r)
				})), new an(e)
			}
			var An = function(t, e) {
					this.key = t, this.version = e
				},
				xn = function(t) {
					function e(e, n, r, i) {
						var o = this;
						return (o = t.call(this, e, n) || this).nn = r, o.Ye = !!i.Ye, o.hasCommittedMutations = !!i.hasCommittedMutations, o
					}
					return r.__extends(e, t), e.prototype.field = function(t) {
						return this.nn.field(t)
					}, e.prototype.data = function() {
						return this.nn
					}, e.prototype.sn = function() {
						return this.nn.proto
					}, e.prototype.isEqual = function(t) {
						return t instanceof e && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.Ye === t.Ye && this.hasCommittedMutations === t.hasCommittedMutations && this.nn.isEqual(t.nn)
					}, e.prototype.toString = function() {
						return "Document(" + this.key + ", " + this.version + ", " + this.nn.toString() + ", {hasLocalMutations: " + this.Ye + "}), {hasCommittedMutations: " + this.hasCommittedMutations + "})"
					}, Object.defineProperty(e.prototype, "hasPendingWrites", {
						get: function() {
							return this.Ye || this.hasCommittedMutations
						},
						enumerable: !1,
						configurable: !0
					}), e
				}(An),
				On = function(t) {
					function e(e, n, r) {
						var i = this;
						return (i = t.call(this, e, n) || this).hasCommittedMutations = !(!r || !r.hasCommittedMutations), i
					}
					return r.__extends(e, t), e.prototype.toString = function() {
						return "NoDocument(" + this.key + ", " + this.version + ")"
					}, Object.defineProperty(e.prototype, "hasPendingWrites", {
						get: function() {
							return this.hasCommittedMutations
						},
						enumerable: !1,
						configurable: !0
					}), e.prototype.isEqual = function(t) {
						return t instanceof e && t.hasCommittedMutations === this.hasCommittedMutations && t.version.isEqual(this.version) && t.key.isEqual(this.key)
					}, e
				}(An),
				Cn = function(t) {
					function e() {
						return null !== t && t.apply(this, arguments) || this
					}
					return r.__extends(e, t), e.prototype.toString = function() {
						return "UnknownDocument(" + this.key + ", " + this.version + ")"
					}, Object.defineProperty(e.prototype, "hasPendingWrites", {
						get: function() {
							return !0
						},
						enumerable: !1,
						configurable: !0
					}), e.prototype.isEqual = function(t) {
						return t instanceof e && t.version.isEqual(this.version) && t.key.isEqual(this.key)
					}, e
				}(An);

			function Dn(t, e) {
				if (!(t instanceof e)) throw e.name === t.constructor.name ? new f(l.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass '" + e.name + "' from a different Firestore SDK?") : new f(l.INVALID_ARGUMENT, "Expected type '" + e.name + "', but was '" + t.constructor.name + "'");
				return t
			}
			var Pn = function(t, e, n, r, i, o, a, u) {
				void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = "F"), void 0 === a && (a = null), void 0 === u && (u = null), this.path = t, this.collectionGroup = e, this.rn = n, this.filters = r, this.limit = i, this.on = o, this.startAt = a, this.endAt = u, this.an = null, this.cn = null, this.startAt, this.endAt
			};

			function Rn(t, e, n, r, i, o, a, u) {
				return new Pn(t, e, n, r, i, o, a, u)
			}

			function Ln(t) {
				return new Pn(t)
			}

			function Mn(t) {
				return !ct(t.limit) && "F" === t.on
			}

			function jn(t) {
				return !ct(t.limit) && "L" === t.on
			}

			function Un(t) {
				return t.rn.length > 0 ? t.rn[0].field : null
			}

			function Fn(t) {
				for (var e = 0, n = t.filters; e < n.length; e++) {
					var r = n[e];
					if (r.un()) return r.field
				}
				return null
			}

			function Vn(t) {
				return null !== t.collectionGroup
			}

			function zn(t) {
				var e = Dn(t, Pn);
				if (null === e.an) {
					e.an = [];
					var n = Fn(e),
						r = Un(e);
					if (null !== n && null === r) n.p() || e.an.push(new lr(n)), e.an.push(new lr(N.v(), "asc"));
					else {
						for (var i = !1, o = 0, a = e.rn; o < a.length; o++) {
							var u = a[o];
							e.an.push(u), u.field.p() && (i = !0)
						}
						if (!i) {
							var s = e.rn.length > 0 ? e.rn[e.rn.length - 1].dir : "asc";
							e.an.push(new lr(N.v(), s))
						}
					}
				}
				return e.an
			}

			function Bn(t) {
				var e = Dn(t, Pn);
				if (!e.cn)
					if ("F" === e.on) e.cn = pt(e.path, e.collectionGroup, zn(e), e.filters, e.limit, e.startAt, e.endAt);
					else {
						for (var n = [], r = 0, i = zn(e); r < i.length; r++) {
							var o = i[r],
								a = "desc" === o.dir ? "asc" : "desc";
							n.push(new lr(o.field, a))
						}
						var u = e.endAt ? new ar(e.endAt.position, !e.endAt.before) : null,
							s = e.startAt ? new ar(e.startAt.position, !e.startAt.before) : null;
						e.cn = pt(e.path, e.collectionGroup, n, e.filters, e.limit, u, s)
					} return e.cn
			}

			function qn(t, e, n) {
				return new Pn(t.path, t.collectionGroup, t.rn.slice(), t.filters.slice(), e, n, t.startAt, t.endAt)
			}

			function Gn(t, e) {
				return new Pn(t.path, t.collectionGroup, t.rn.slice(), t.filters.slice(), t.limit, t.on, e, t.endAt)
			}

			function Wn(t, e) {
				return new Pn(t.path, t.collectionGroup, t.rn.slice(), t.filters.slice(), t.limit, t.on, t.startAt, e)
			}

			function Hn(t, e) {
				return vt(Bn(t), Bn(e)) && t.on === e.on
			}

			function Kn(t) {
				return dt(Bn(t)) + "|lt:" + t.on
			}

			function Qn(t) {
				return "Query(target=" + function(t) {
					var e = t.path.R();
					return null !== t.collectionGroup && (e += " collectionGroup=" + t.collectionGroup), t.filters.length > 0 && (e += ", filters: [" + t.filters.map((function(t) {
						return (e = t).field.R() + " " + e.op + " " + ie(e.value);
						var e
					})).join(", ") + "]"), ct(t.limit) || (e += ", limit: " + t.limit), t.orderBy.length > 0 && (e += ", orderBy: [" + t.orderBy.map((function(t) {
						return (e = t).field.R() + " (" + e.dir + ")";
						var e
					})).join(", ") + "]"), t.startAt && (e += ", startAt: " + ur(t.startAt)), t.endAt && (e += ", endAt: " + ur(t.endAt)), "Target(" + e + ")"
				}(Bn(t)) + "; limitType=" + t.on + ")"
			}

			function Xn(t, e) {
				return function(t, e) {
					var n = e.key.path;
					return null !== t.collectionGroup ? e.key.N(t.collectionGroup) && t.path.T(n) : A.F(t.path) ? t.path.isEqual(n) : t.path.I(n)
				}(t, e) && function(t, e) {
					for (var n = 0, r = t.rn; n < r.length; n++) {
						var i = r[n];
						if (!i.field.p() && null === e.field(i.field)) return !1
					}
					return !0
				}(t, e) && function(t, e) {
					for (var n = 0, r = t.filters; n < r.length; n++)
						if (!r[n].matches(e)) return !1;
					return !0
				}(t, e) && function(t, e) {
					return !(t.startAt && !sr(t.startAt, zn(t), e)) && (!t.endAt || !sr(t.endAt, zn(t), e))
				}(t, e)
			}

			function Yn(t) {
				return function(e, n) {
					for (var r = !1, i = 0, o = zn(t); i < o.length; i++) {
						var a = o[i],
							u = fr(a, e, n);
						if (0 !== u) return u;
						r = r || a.field.p()
					}
					return 0
				}
			}
			var $n = function(t) {
					function e(e, n, r) {
						var i = this;
						return (i = t.call(this) || this).field = e, i.op = n, i.value = r, i
					}
					return r.__extends(e, t), e.create = function(t, n, r) {
						if (t.p()) return "in" === n || "not-in" === n ? this.hn(t, n, r) : new Jn(t, n, r);
						if (fe(r)) {
							if ("==" !== n && "!=" !== n) throw new f(l.INVALID_ARGUMENT, "Invalid query. Null supports only equality comparisons.");
							return new e(t, n, r)
						}
						if (he(r)) {
							if ("==" !== n && "!=" !== n) throw new f(l.INVALID_ARGUMENT, "Invalid query. NaN supports only equality comparisons.");
							return new e(t, n, r)
						}
						return "array-contains" === n ? new nr(t, r) : "in" === n ? new rr(t, r) : "not-in" === n ? new ir(t, r) : "array-contains-any" === n ? new or(t, r) : new e(t, n, r)
					}, e.hn = function(t, e, n) {
						return "in" === e ? new Zn(t, n) : new tr(t, n)
					}, e.prototype.matches = function(t) {
						var e = t.field(this.field);
						return "!=" === this.op ? null !== e && this.ln(ne(e, this.value)) : null !== e && Zt(this.value) === Zt(e) && this.ln(ne(e, this.value))
					}, e.prototype.ln = function(t) {
						switch (this.op) {
							case "<":
								return t < 0;
							case "<=":
								return t <= 0;
							case "==":
								return 0 === t;
							case "!=":
								return 0 !== t;
							case ">":
								return t > 0;
							case ">=":
								return t >= 0;
							default:
								return g()
						}
					}, e.prototype.un = function() {
						return ["<", "<=", ">", ">=", "!="].indexOf(this.op) >= 0
					}, e
				}((function() {})),
				Jn = function(t) {
					function e(e, n, r) {
						var i = this;
						return (i = t.call(this, e, n, r) || this).key = A.C(r.referenceValue), i
					}
					return r.__extends(e, t), e.prototype.matches = function(t) {
						var e = A.i(t.key, this.key);
						return this.ln(e)
					}, e
				}($n),
				Zn = function(t) {
					function e(e, n) {
						var r = this;
						return (r = t.call(this, e, "in", n) || this).keys = er("in", n), r
					}
					return r.__extends(e, t), e.prototype.matches = function(t) {
						return this.keys.some((function(e) {
							return e.isEqual(t.key)
						}))
					}, e
				}($n),
				tr = function(t) {
					function e(e, n) {
						var r = this;
						return (r = t.call(this, e, "not-in", n) || this).keys = er("not-in", n), r
					}
					return r.__extends(e, t), e.prototype.matches = function(t) {
						return !this.keys.some((function(e) {
							return e.isEqual(t.key)
						}))
					}, e
				}($n);

			function er(t, e) {
				var n;
				return ((null === (n = e.arrayValue) || void 0 === n ? void 0 : n.values) || []).map((function(t) {
					return A.C(t.referenceValue)
				}))
			}
			var nr = function(t) {
					function e(e, n) {
						return t.call(this, e, "array-contains", n) || this
					}
					return r.__extends(e, t), e.prototype.matches = function(t) {
						var e = t.field(this.field);
						return le(e) && ee(e.arrayValue, this.value)
					}, e
				}($n),
				rr = function(t) {
					function e(e, n) {
						return t.call(this, e, "in", n) || this
					}
					return r.__extends(e, t), e.prototype.matches = function(t) {
						var e = t.field(this.field);
						return null !== e && ee(this.value.arrayValue, e)
					}, e
				}($n),
				ir = function(t) {
					function e(e, n) {
						return t.call(this, e, "not-in", n) || this
					}
					return r.__extends(e, t), e.prototype.matches = function(t) {
						var e = t.field(this.field);
						return null !== e && !ee(this.value.arrayValue, e)
					}, e
				}($n),
				or = function(t) {
					function e(e, n) {
						return t.call(this, e, "array-contains-any", n) || this
					}
					return r.__extends(e, t), e.prototype.matches = function(t) {
						var e = this,
							n = t.field(this.field);
						return !(!le(n) || !n.arrayValue.values) && n.arrayValue.values.some((function(t) {
							return ee(e.value.arrayValue, t)
						}))
					}, e
				}($n),
				ar = function(t, e) {
					this.position = t, this.before = e
				};

			function ur(t) {
				return (t.before ? "b" : "a") + ":" + t.position.map((function(t) {
					return ie(t)
				})).join(",")
			}

			function sr(t, e, n) {
				for (var r = 0, i = 0; i < t.position.length; i++) {
					var o = e[i],
						a = t.position[i];
					if (r = o.field.p() ? A.i(A.C(a.referenceValue), n.key) : ne(a, n.field(o.field)), "desc" === o.dir && (r *= -1), 0 !== r) break
				}
				return t.before ? r <= 0 : r < 0
			}

			function cr(t, e) {
				if (null === t) return null === e;
				if (null === e) return !1;
				if (t.before !== e.before || t.position.length !== e.position.length) return !1;
				for (var n = 0; n < t.position.length; n++)
					if (!te(t.position[n], e.position[n])) return !1;
				return !0
			}
			var lr = function(t, e) {
				void 0 === e && (e = "asc"), this.field = t, this.dir = e
			};

			function fr(t, e, n) {
				var r = t.field.p() ? A.i(e.key, n.key) : function(t, e, n) {
					var r = e.field(t),
						i = n.field(t);
					return null !== r && null !== i ? ne(r, i) : g()
				}(t.field, e, n);
				switch (t.dir) {
					case "asc":
						return r;
					case "desc":
						return -1 * r;
					default:
						return g()
				}
			}

			function hr(t, e) {
				return t.dir === e.dir && t.field.isEqual(e.field)
			}
			var pr = function() {
					var t = this;
					this.promise = new Promise((function(e, n) {
						t.resolve = e, t.reject = n
					}))
				},
				dr = function() {
					function t(t, e, n, r, i) {
						void 0 === n && (n = 1e3), void 0 === r && (r = 1.5), void 0 === i && (i = 6e4), this._n = t, this.fn = e, this.dn = n, this.wn = r, this.mn = i, this.Tn = 0, this.En = null, this.In = Date.now(), this.reset()
					}
					return t.prototype.reset = function() {
						this.Tn = 0
					}, t.prototype.An = function() {
						this.Tn = this.mn
					}, t.prototype.Rn = function(t) {
						var e = this;
						this.cancel();
						var n = Math.floor(this.Tn + this.Pn()),
							r = Math.max(0, Date.now() - this.In),
							i = Math.max(0, n - r);
						i > 0 && d("ExponentialBackoff", "Backing off for " + i + " ms (base delay: " + this.Tn + " ms, delay with jitter: " + n + " ms, last attempt: " + r + " ms ago)"), this.En = this._n.gn(this.fn, i, (function() {
							return e.In = Date.now(), t()
						})), this.Tn *= this.wn, this.Tn < this.dn && (this.Tn = this.dn), this.Tn > this.mn && (this.Tn = this.mn)
					}, t.prototype.yn = function() {
						null !== this.En && (this.En.Vn(), this.En = null)
					}, t.prototype.cancel = function() {
						null !== this.En && (this.En.cancel(), this.En = null)
					}, t.prototype.Pn = function() {
						return (Math.random() - .5) * this.Tn
					}, t
				}(),
				vr = function() {
					function t(t) {
						var e = this;
						this.pn = null, this.bn = null, this.result = void 0, this.error = void 0, this.vn = !1, this.Sn = !1, t((function(t) {
							e.vn = !0, e.result = t, e.pn && e.pn(t)
						}), (function(t) {
							e.vn = !0, e.error = t, e.bn && e.bn(t)
						}))
					}
					return t.prototype.catch = function(t) {
						return this.next(void 0, t)
					}, t.prototype.next = function(e, n) {
						var r = this;
						return this.Sn && g(), this.Sn = !0, this.vn ? this.error ? this.Dn(n, this.error) : this.Cn(e, this.result) : new t((function(t, i) {
							r.pn = function(n) {
								r.Cn(e, n).next(t, i)
							}, r.bn = function(e) {
								r.Dn(n, e).next(t, i)
							}
						}))
					}, t.prototype.Nn = function() {
						var t = this;
						return new Promise((function(e, n) {
							t.next(e, n)
						}))
					}, t.prototype.Fn = function(e) {
						try {
							var n = e();
							return n instanceof t ? n : t.resolve(n)
						} catch (e) {
							return t.reject(e)
						}
					}, t.prototype.Cn = function(e, n) {
						return e ? this.Fn((function() {
							return e(n)
						})) : t.resolve(n)
					}, t.prototype.Dn = function(e, n) {
						return e ? this.Fn((function() {
							return e(n)
						})) : t.reject(n)
					}, t.resolve = function(e) {
						return new t((function(t, n) {
							t(e)
						}))
					}, t.reject = function(e) {
						return new t((function(t, n) {
							n(e)
						}))
					}, t.$n = function(e) {
						return new t((function(t, n) {
							var r = 0,
								i = 0,
								o = !1;
							e.forEach((function(e) {
								++r, e.next((function() {
									++i, o && i === r && t()
								}), (function(t) {
									return n(t)
								}))
							})), o = !0, i === r && t()
						}))
					}, t.xn = function(e) {
						for (var n = t.resolve(!1), r = function(e) {
								n = n.next((function(n) {
									return n ? t.resolve(n) : e()
								}))
							}, i = 0, o = e; i < o.length; i++) r(o[i]);
						return n
					}, t.forEach = function(t, e) {
						var n = this,
							r = [];
						return t.forEach((function(t, i) {
							r.push(e.call(n, t, i))
						})), this.$n(r)
					}, t
				}(),
				mr = function() {
					function e(t, n, r) {
						this.name = t, this.version = n, this.kn = r, 12.2 === e.Mn(a.getUA()) && v("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")
					}
					return e.delete = function(t) {
						return d("SimpleDb", "Removing database:", t), Er(window.indexedDB.deleteDatabase(t)).Nn()
					}, e.On = function() {
						if ("undefined" == typeof indexedDB) return !1;
						if (e.Ln()) return !0;
						var t = a.getUA(),
							n = e.Mn(t),
							r = 0 < n && n < 10,
							i = e.Bn(t),
							o = 0 < i && i < 4.5;
						return !(t.indexOf("MSIE ") > 0 || t.indexOf("Trident/") > 0 || t.indexOf("Edge/") > 0 || r || o)
					}, e.Ln = function() {
						var e;
						return "undefined" != typeof t && "YES" === (null === (e = Object({
							NODE_ENV: "production",
							PUBLIC_URL: "",
							WDS_SOCKET_HOST: void 0,
							WDS_SOCKET_PATH: void 0,
							WDS_SOCKET_PORT: void 0
						})) || void 0 === e ? void 0 : e.qn)
					}, e.Un = function(t, e) {
						return t.store(e)
					}, e.Mn = function(t) {
						var e = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),
							n = e ? e[1].split("_").slice(0, 2).join(".") : "-1";
						return Number(n)
					}, e.Bn = function(t) {
						var e = t.match(/Android ([\d.]+)/i),
							n = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
						return Number(n)
					}, e.prototype.Qn = function() {
						return r.__awaiter(this, void 0, void 0, (function() {
							var t, e = this;
							return r.__generator(this, (function(n) {
								switch (n.label) {
									case 0:
										return this.db ? [3, 2] : (d("SimpleDb", "Opening database:", this.name), t = this, [4, new Promise((function(t, n) {
											var r = indexedDB.open(e.name, e.version);
											r.onsuccess = function(e) {
												var n = e.target.result;
												t(n)
											}, r.onblocked = function() {
												n(new gr("Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))
											}, r.onerror = function(t) {
												var e = t.target.error;
												"VersionError" === e.name ? n(new f(l.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : n(new gr(e))
											}, r.onupgradeneeded = function(t) {
												d("SimpleDb", 'Database "' + e.name + '" requires upgrade from version:', t.oldVersion);
												var n = t.target.result;
												e.kn.createOrUpgrade(n, r.transaction, t.oldVersion, e.version).next((function() {
													d("SimpleDb", "Database upgrade to version " + e.version + " complete")
												}))
											}
										}))]);
									case 1:
										t.db = n.sent(), n.label = 2;
									case 2:
										return [2, (this.Wn && (this.db.onversionchange = function(t) {
											return e.Wn(t)
										}), this.db)]
								}
							}))
						}))
					}, e.prototype.jn = function(t) {
						this.Wn = t, this.db && (this.db.onversionchange = function(e) {
							return t(e)
						})
					}, e.prototype.runTransaction = function(t, e, n) {
						return r.__awaiter(this, void 0, void 0, (function() {
							var i, o, a, u, s;
							return r.__generator(this, (function(c) {
								switch (c.label) {
									case 0:
										i = "readonly" === t, o = 0, a = function() {
											var t, a, s, c, l;
											return r.__generator(this, (function(r) {
												switch (r.label) {
													case 0:
														++o, r.label = 1;
													case 1:
														return r.trys.push([1, 4, , 5]), [4, u.Qn()];
													case 2:
														return u.db = r.sent(), t = wr.open(u.db, i ? "readonly" : "readwrite", e), a = n(t).catch((function(e) {
															return t.abort(e), vr.reject(e)
														})).Nn(), s = {}, a.catch((function() {})), [4, t.Kn];
													case 3:
														return [2, (s.value = (r.sent(), a), s)];
													case 4:
														return c = r.sent(), l = "FirebaseError" !== c.name && o < 3, d("SimpleDb", "Transaction failed with error: %s. Retrying: %s.", c.message, l), u.close(), l ? [3, 5] : [2, {
															value: Promise.reject(c)
														}];
													case 5:
														return [2]
												}
											}))
										}, u = this, c.label = 1;
									case 1:
										return [5, a()];
									case 2:
										if ("object" == typeof(s = c.sent())) return [2, s.value];
										c.label = 3;
									case 3:
										return [3, 1];
									case 4:
										return [2]
								}
							}))
						}))
					}, e.prototype.close = function() {
						this.db && this.db.close(), this.db = void 0
					}, e
				}(),
				yr = function() {
					function t(t) {
						this.Gn = t, this.zn = !1, this.Hn = null
					}
					return Object.defineProperty(t.prototype, "vn", {
						get: function() {
							return this.zn
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "Yn", {
						get: function() {
							return this.Hn
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "cursor", {
						set: function(t) {
							this.Gn = t
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.done = function() {
						this.zn = !0
					}, t.prototype.Jn = function(t) {
						this.Hn = t
					}, t.prototype.delete = function() {
						return Er(this.Gn.delete())
					}, t
				}(),
				gr = function(t) {
					function e(e) {
						var n = this;
						return (n = t.call(this, l.UNAVAILABLE, "IndexedDB transaction failed: " + e) || this).name = "IndexedDbTransactionError", n
					}
					return r.__extends(e, t), e
				}(f);

			function br(t) {
				return "IndexedDbTransactionError" === t.name
			}
			var wr = function() {
					function t(t) {
						var e = this;
						this.transaction = t, this.aborted = !1, this.Xn = new pr, this.transaction.oncomplete = function() {
							e.Xn.resolve()
						}, this.transaction.onabort = function() {
							t.error ? e.Xn.reject(new gr(t.error)) : e.Xn.resolve()
						}, this.transaction.onerror = function(t) {
							var n = Tr(t.target.error);
							e.Xn.reject(new gr(n))
						}
					}
					return t.open = function(e, n, r) {
						try {
							return new t(e.transaction(r, n))
						} catch (e) {
							throw new gr(e)
						}
					}, Object.defineProperty(t.prototype, "Kn", {
						get: function() {
							return this.Xn.promise
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.abort = function(t) {
						t && this.Xn.reject(t), this.aborted || (d("SimpleDb", "Aborting transaction:", t ? t.message : "Client-initiated abort"), this.aborted = !0, this.transaction.abort())
					}, t.prototype.store = function(t) {
						var e = this.transaction.objectStore(t);
						return new _r(e)
					}, t
				}(),
				_r = function() {
					function t(t) {
						this.store = t
					}
					return t.prototype.put = function(t, e) {
						var n;
						return void 0 !== e ? (d("SimpleDb", "PUT", this.store.name, t, e), n = this.store.put(e, t)) : (d("SimpleDb", "PUT", this.store.name, "<auto-key>", t), n = this.store.put(t)), Er(n)
					}, t.prototype.add = function(t) {
						return d("SimpleDb", "ADD", this.store.name, t, t), Er(this.store.add(t))
					}, t.prototype.get = function(t) {
						var e = this;
						return Er(this.store.get(t)).next((function(n) {
							return void 0 === n && (n = null), d("SimpleDb", "GET", e.store.name, t, n), n
						}))
					}, t.prototype.delete = function(t) {
						return d("SimpleDb", "DELETE", this.store.name, t), Er(this.store.delete(t))
					}, t.prototype.count = function() {
						return d("SimpleDb", "COUNT", this.store.name), Er(this.store.count())
					}, t.prototype.Zn = function(t, e) {
						var n = this.cursor(this.options(t, e)),
							r = [];
						return this.ts(n, (function(t, e) {
							r.push(e)
						})).next((function() {
							return r
						}))
					}, t.prototype.es = function(t, e) {
						d("SimpleDb", "DELETE ALL", this.store.name);
						var n = this.options(t, e);
						n.ns = !1;
						var r = this.cursor(n);
						return this.ts(r, (function(t, e, n) {
							return n.delete()
						}))
					}, t.prototype.ss = function(t, e) {
						var n;
						e ? n = t : (n = {}, e = t);
						var r = this.cursor(n);
						return this.ts(r, e)
					}, t.prototype.rs = function(t) {
						var e = this.cursor({});
						return new vr((function(n, r) {
							e.onerror = function(t) {
								var e = Tr(t.target.error);
								r(e)
							}, e.onsuccess = function(e) {
								var r = e.target.result;
								r ? t(r.primaryKey, r.value).next((function(t) {
									t ? r.continue() : n()
								})) : n()
							}
						}))
					}, t.prototype.ts = function(t, e) {
						var n = [];
						return new vr((function(r, i) {
							t.onerror = function(t) {
								i(t.target.error)
							}, t.onsuccess = function(t) {
								var i = t.target.result;
								if (i) {
									var o = new yr(i),
										a = e(i.primaryKey, i.value, o);
									if (a instanceof vr) {
										var u = a.catch((function(t) {
											return o.done(), vr.reject(t)
										}));
										n.push(u)
									}
									o.vn ? r() : null === o.Yn ? i.continue() : i.continue(o.Yn)
								} else r()
							}
						})).next((function() {
							return vr.$n(n)
						}))
					}, t.prototype.options = function(t, e) {
						var n = void 0;
						return void 0 !== t && ("string" == typeof t ? n = t : e = t), {
							index: n,
							range: e
						}
					}, t.prototype.cursor = function(t) {
						var e = "next";
						if (t.reverse && (e = "prev"), t.index) {
							var n = this.store.index(t.index);
							return t.ns ? n.openKeyCursor(t.range, e) : n.openCursor(t.range, e)
						}
						return this.store.openCursor(t.range, e)
					}, t
				}();

			function Er(t) {
				return new vr((function(e, n) {
					t.onsuccess = function(t) {
						var n = t.target.result;
						e(n)
					}, t.onerror = function(t) {
						var e = Tr(t.target.error);
						n(e)
					}
				}))
			}
			var Ir = !1;

			function Tr(t) {
				var e = mr.Mn(a.getUA());
				if (e >= 12.2 && e < 13) {
					var n = "An internal error was encountered in the Indexed Database server";
					if (t.message.indexOf(n) >= 0) {
						var r = new f("internal", "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" + n + "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
						return Ir || (Ir = !0, setTimeout((function() {
							throw r
						}), 0)), r
					}
				}
				return t
			}

			function Sr() {
				return "undefined" != typeof window ? window : null
			}

			function kr() {
				return "undefined" != typeof document ? document : null
			}
			var Nr = function() {
					function t(t, e, n, r, i) {
						this.os = t, this.fn = e, this.cs = n, this.op = r, this.us = i, this.hs = new pr, this.then = this.hs.promise.then.bind(this.hs.promise), this.hs.promise.catch((function(t) {}))
					}
					return t.ls = function(e, n, r, i, o) {
						var a = new t(e, n, Date.now() + r, i, o);
						return a.start(r), a
					}, t.prototype.start = function(t) {
						var e = this;
						this._s = setTimeout((function() {
							return e.fs()
						}), t)
					}, t.prototype.Vn = function() {
						return this.fs()
					}, t.prototype.cancel = function(t) {
						null !== this._s && (this.clearTimeout(), this.hs.reject(new f(l.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))))
					}, t.prototype.fs = function() {
						var t = this;
						this.os.ds((function() {
							return null !== t._s ? (t.clearTimeout(), t.op().then((function(e) {
								return t.hs.resolve(e)
							}))) : Promise.resolve()
						}))
					}, t.prototype.clearTimeout = function() {
						null !== this._s && (this.us(this), clearTimeout(this._s), this._s = null)
					}, t
				}(),
				Ar = function() {
					function t() {
						var t = this;
						this.ws = Promise.resolve(), this.Ts = [], this.Es = !1, this.Is = [], this.As = null, this.Rs = !1, this.Ps = [], this.gs = new dr(this, "async_queue_retry"), this.ys = function() {
							var e = kr();
							e && d("AsyncQueue", "Visibility state changed to  ", e.visibilityState), t.gs.yn()
						};
						var e = kr();
						e && "function" == typeof e.addEventListener && e.addEventListener("visibilitychange", this.ys)
					}
					return Object.defineProperty(t.prototype, "Vs", {
						get: function() {
							return this.Es
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.ds = function(t) {
						this.enqueue(t)
					}, t.prototype.ps = function(t) {
						this.bs(), this.vs(t)
					}, t.prototype.Ss = function() {
						if (!this.Es) {
							this.Es = !0;
							var t = kr();
							t && "function" == typeof t.removeEventListener && t.removeEventListener("visibilitychange", this.ys)
						}
					}, t.prototype.enqueue = function(t) {
						return this.bs(), this.Es ? new Promise((function(t) {})) : this.vs(t)
					}, t.prototype.Ds = function(t) {
						var e = this;
						this.Ts.push(t), this.ds((function() {
							return e.Cs()
						}))
					}, t.prototype.Cs = function() {
						return r.__awaiter(this, void 0, void 0, (function() {
							var t, e = this;
							return r.__generator(this, (function(n) {
								switch (n.label) {
									case 0:
										if (0 === this.Ts.length) return [3, 5];
										n.label = 1;
									case 1:
										return n.trys.push([1, 3, , 4]), [4, this.Ts[0]()];
									case 2:
										return n.sent(), this.Ts.shift(), this.gs.reset(), [3, 4];
									case 3:
										if (!br(t = n.sent())) throw t;
										return d("AsyncQueue", "Operation failed with retryable error: " + t), [3, 4];
									case 4:
										this.Ts.length > 0 && this.gs.Rn((function() {
											return e.Cs()
										})), n.label = 5;
									case 5:
										return [2]
								}
							}))
						}))
					}, t.prototype.vs = function(t) {
						var e = this,
							n = this.ws.then((function() {
								return e.Rs = !0, t().catch((function(t) {
									throw e.As = t, e.Rs = !1, v("INTERNAL UNHANDLED ERROR: ", function(t) {
										var e = t.message || "";
										return t.stack && (e = t.stack.includes(t.message) ? t.stack : t.message + "\n" + t.stack), e
									}(t)), t
								})).then((function(t) {
									return e.Rs = !1, t
								}))
							}));
						return this.ws = n, n
					}, t.prototype.gn = function(t, e, n) {
						var r = this;
						this.bs(), this.Ps.indexOf(t) > -1 && (e = 0);
						var i = Nr.ls(this, t, e, n, (function(t) {
							return r.Ns(t)
						}));
						return this.Is.push(i), i
					}, t.prototype.bs = function() {
						this.As && g()
					}, t.prototype.Fs = function() {}, t.prototype.$s = function() {
						return r.__awaiter(this, void 0, void 0, (function() {
							var t;
							return r.__generator(this, (function(e) {
								switch (e.label) {
									case 0:
										return [4, t = this.ws];
									case 1:
										e.sent(), e.label = 2;
									case 2:
										if (t !== this.ws) return [3, 0];
										e.label = 3;
									case 3:
										return [2]
								}
							}))
						}))
					}, t.prototype.xs = function(t) {
						for (var e = 0, n = this.Is; e < n.length; e++)
							if (n[e].fn === t) return !0;
						return !1
					}, t.prototype.ks = function(t) {
						var e = this;
						return this.$s().then((function() {
							e.Is.sort((function(t, e) {
								return t.cs - e.cs
							}));
							for (var n = 0, r = e.Is; n < r.length; n++) {
								var i = r[n];
								if (i.Vn(), "all" !== t && i.fn === t) break
							}
							return e.$s()
						}))
					}, t.prototype.Ms = function(t) {
						this.Ps.push(t)
					}, t.prototype.Ns = function(t) {
						var e = this.Is.indexOf(t);
						this.Is.splice(e, 1)
					}, t
				}();

			function xr(t, e) {
				if (v("AsyncQueue", e + ": " + t), br(t)) return new f(l.UNAVAILABLE, e + ": " + t);
				throw t
			}
			var Or = function() {
					this.Os = void 0, this.listeners = []
				},
				Cr = function() {
					this.Ls = new at((function(t) {
						return Kn(t)
					}), Hn), this.onlineState = "Unknown", this.Bs = new Set
				};

			function Dr(t, e) {
				return r.__awaiter(this, void 0, void 0, (function() {
					var n, i, o, a, u, s, c;
					return r.__generator(this, (function(r) {
						switch (r.label) {
							case 0:
								if (n = w(t), i = e.query, o = !1, (a = n.Ls.get(i)) || (o = !0, a = new Or), !o) return [3, 4];
								r.label = 1;
							case 1:
								return r.trys.push([1, 3, , 4]), u = a, [4, n.qs(i)];
							case 2:
								return u.Os = r.sent(), [3, 4];
							case 3:
								return s = r.sent(), c = xr(s, "Initialization of query '" + Qn(e.query) + "' failed"), [2, void e.onError(c)];
							case 4:
								return n.Ls.set(i, a), a.listeners.push(e), e.Us(n.onlineState), a.Os && e.Qs(a.Os) && jr(n), [2]
						}
					}))
				}))
			}

			function Pr(t, e) {
				return r.__awaiter(this, void 0, void 0, (function() {
					var n, i, o, a, u;
					return r.__generator(this, (function(r) {
						return n = w(t), i = e.query, o = !1, (a = n.Ls.get(i)) && (u = a.listeners.indexOf(e)) >= 0 && (a.listeners.splice(u, 1), o = 0 === a.listeners.length), o ? [2, (n.Ls.delete(i), n.Ws(i))] : [2]
					}))
				}))
			}

			function Rr(t, e) {
				for (var n = w(t), r = !1, i = 0, o = e; i < o.length; i++) {
					var a = o[i],
						u = a.query,
						s = n.Ls.get(u);
					if (s) {
						for (var c = 0, l = s.listeners; c < l.length; c++) l[c].Qs(a) && (r = !0);
						s.Os = a
					}
				}
				r && jr(n)
			}

			function Lr(t, e, n) {
				var r = w(t),
					i = r.Ls.get(e);
				if (i)
					for (var o = 0, a = i.listeners; o < a.length; o++) a[o].onError(n);
				r.Ls.delete(e)
			}

			function Mr(t, e) {
				var n = w(t);
				n.onlineState = e;
				var r = !1;
				n.Ls.forEach((function(t, n) {
					for (var i = 0, o = n.listeners; i < o.length; i++) o[i].Us(e) && (r = !0)
				})), r && jr(n)
			}

			function jr(t) {
				t.Bs.forEach((function(t) {
					t.next()
				}))
			}
			var Ur = function() {
					function t(t, e, n) {
						this.query = t, this.js = e, this.Ks = !1, this.Gs = null, this.onlineState = "Unknown", this.options = n || {}
					}
					return t.prototype.Qs = function(t) {
						if (!this.options.includeMetadataChanges) {
							for (var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
								var i = r[n];
								3 !== i.type && e.push(i)
							}
							t = new Vt(t.query, t.docs, t.Ut, e, t.Qt, t.fromCache, t.Wt, !0)
						}
						var o = !1;
						return this.Ks ? this.zs(t) && (this.js.next(t), o = !0) : this.Hs(t, this.onlineState) && (this.Ys(t), o = !0), this.Gs = t, o
					}, t.prototype.onError = function(t) {
						this.js.error(t)
					}, t.prototype.Us = function(t) {
						this.onlineState = t;
						var e = !1;
						return this.Gs && !this.Ks && this.Hs(this.Gs, t) && (this.Ys(this.Gs), e = !0), e
					}, t.prototype.Hs = function(t, e) {
						if (!t.fromCache) return !0;
						var n = "Offline" !== e;
						return !(this.options.Js && n || t.docs.m() && "Offline" !== e)
					}, t.prototype.zs = function(t) {
						if (t.docChanges.length > 0) return !0;
						var e = this.Gs && this.Gs.hasPendingWrites !== t.hasPendingWrites;
						return !(!t.Wt && !e) && !0 === this.options.includeMetadataChanges
					}, t.prototype.Ys = function(t) {
						t = Vt.Kt(t.query, t.docs, t.Qt, t.fromCache), this.Ks = !0, this.js.next(t)
					}, t
				}(),
				Fr = function() {
					function t(t) {
						this.uid = t
					}
					return t.prototype.Xs = function() {
						return null != this.uid
					}, t.prototype.Zs = function() {
						return this.Xs() ? "uid:" + this.uid : "anonymous-user"
					}, t.prototype.isEqual = function(t) {
						return t.uid === this.uid
					}, t
				}();
			Fr.UNAUTHENTICATED = new Fr(null), Fr.ti = new Fr("google-credentials-uid"), Fr.ei = new Fr("first-party-uid");
			var Vr = function() {
				function t(t, e) {
					var n = this;
					this.previousValue = t, e && (e.ni = function(t) {
						return n.si(t)
					}, this.ii = function(t) {
						return e.ri(t)
					})
				}
				return t.prototype.si = function(t) {
					return this.previousValue = Math.max(t, this.previousValue), this.previousValue
				}, t.prototype.next = function() {
					var t = ++this.previousValue;
					return this.ii && this.ii(t), t
				}, t
			}();

			function zr(t, e) {
				return "firestore_clients_" + t + "_" + e
			}

			function Br(t, e, n) {
				var r = "firestore_mutations_" + t + "_" + n;
				return e.Xs() && (r += "_" + e.uid), r
			}

			function qr(t, e) {
				return "firestore_targets_" + t + "_" + e
			}
			Vr.oi = -1;
			var Gr = function() {
					function t(t, e, n, r) {
						this.user = t, this.batchId = e, this.state = n, this.error = r
					}
					return t.ai = function(e, n, r) {
						var i = JSON.parse(r),
							o = "object" == typeof i && -1 !== ["pending", "acknowledged", "rejected"].indexOf(i.state) && (void 0 === i.error || "object" == typeof i.error),
							a = void 0;
						return o && i.error && (o = "string" == typeof i.error.message && "string" == typeof i.error.code) && (a = new f(i.error.code, i.error.message)), o ? new t(e, n, i.state, a) : (v("SharedClientState", "Failed to parse mutation state for ID '" + n + "': " + r), null)
					}, t.prototype.ci = function() {
						var t = {
							state: this.state,
							updateTimeMs: Date.now()
						};
						return this.error && (t.error = {
							code: this.error.code,
							message: this.error.message
						}), JSON.stringify(t)
					}, t
				}(),
				Wr = function() {
					function t(t, e, n) {
						this.targetId = t, this.state = e, this.error = n
					}
					return t.ai = function(e, n) {
						var r = JSON.parse(n),
							i = "object" == typeof r && -1 !== ["not-current", "current", "rejected"].indexOf(r.state) && (void 0 === r.error || "object" == typeof r.error),
							o = void 0;
						return i && r.error && (i = "string" == typeof r.error.message && "string" == typeof r.error.code) && (o = new f(r.error.code, r.error.message)), i ? new t(e, r.state, o) : (v("SharedClientState", "Failed to parse target state for ID '" + e + "': " + n), null)
					}, t.prototype.ci = function() {
						var t = {
							state: this.state,
							updateTimeMs: Date.now()
						};
						return this.error && (t.error = {
							code: this.error.code,
							message: this.error.message
						}), JSON.stringify(t)
					}, t
				}(),
				Hr = function() {
					function t(t, e) {
						this.clientId = t, this.activeTargetIds = e
					}
					return t.ai = function(e, n) {
						for (var r = JSON.parse(n), i = "object" == typeof r && r.activeTargetIds instanceof Array, o = jt(), a = 0; i && a < r.activeTargetIds.length; ++a) i = ft(r.activeTargetIds[a]), o = o.add(r.activeTargetIds[a]);
						return i ? new t(e, o) : (v("SharedClientState", "Failed to parse client data for instance '" + e + "': " + n), null)
					}, t
				}(),
				Kr = function() {
					function t(t, e) {
						this.clientId = t, this.onlineState = e
					}
					return t.ai = function(e) {
						var n = JSON.parse(e);
						return "object" == typeof n && -1 !== ["Unknown", "Online", "Offline"].indexOf(n.onlineState) && "string" == typeof n.clientId ? new t(n.clientId, n.onlineState) : (v("SharedClientState", "Failed to parse online state: " + e), null)
					}, t
				}(),
				Qr = function() {
					function t() {
						this.activeTargetIds = jt()
					}
					return t.prototype.ui = function(t) {
						this.activeTargetIds = this.activeTargetIds.add(t)
					}, t.prototype.hi = function(t) {
						this.activeTargetIds = this.activeTargetIds.delete(t)
					}, t.prototype.ci = function() {
						var t = {
							activeTargetIds: this.activeTargetIds.A(),
							updateTimeMs: Date.now()
						};
						return JSON.stringify(t)
					}, t
				}(),
				Xr = function() {
					function t(t, e, n, r, i) {
						this.window = t, this._n = e, this.persistenceKey = n, this.li = r, this._i = null, this.fi = null, this.ni = null, this.di = this.wi.bind(this), this.mi = new It(Y), this.Ti = !1, this.Ei = [];
						var o = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
						this.storage = this.window.localStorage, this.currentUser = i, this.Ii = zr(this.persistenceKey, this.li), this.Ai = function(t) {
							return "firestore_sequence_number_" + t
						}(this.persistenceKey), this.mi = this.mi.rt(this.li, new Qr), this.Ri = new RegExp("^firestore_clients_" + o + "_([^_]*)$"), this.Pi = new RegExp("^firestore_mutations_" + o + "_(\\d+)(?:_(.*))?$"), this.gi = new RegExp("^firestore_targets_" + o + "_(\\d+)$"), this.yi = function(t) {
							return "firestore_online_state_" + t
						}(this.persistenceKey), this.window.addEventListener("storage", this.di)
					}
					return t.On = function(t) {
						return !(!t || !t.localStorage)
					}, t.prototype.start = function() {
						return r.__awaiter(this, void 0, void 0, (function() {
							var t, e, n, i, o, a, u, s, c, l, f, h = this;
							return r.__generator(this, (function(r) {
								switch (r.label) {
									case 0:
										return [4, this._i.Vi()];
									case 1:
										for (t = r.sent(), e = 0, n = t; e < n.length; e++)(i = n[e]) !== this.li && (o = this.getItem(zr(this.persistenceKey, i))) && (a = Hr.ai(i, o)) && (this.mi = this.mi.rt(a.clientId, a));
										for (this.pi(), (u = this.storage.getItem(this.yi)) && (s = this.bi(u)) && this.vi(s), c = 0, l = this.Ei; c < l.length; c++) f = l[c], this.wi(f);
										return this.Ei = [], this.window.addEventListener("unload", (function() {
											return h.Si()
										})), this.Ti = !0, [2]
								}
							}))
						}))
					}, t.prototype.ri = function(t) {
						this.setItem(this.Ai, JSON.stringify(t))
					}, t.prototype.Di = function() {
						return this.Ci(this.mi)
					}, t.prototype.Ni = function(t) {
						var e = !1;
						return this.mi.forEach((function(n, r) {
							r.activeTargetIds.has(t) && (e = !0)
						})), e
					}, t.prototype.Fi = function(t) {
						this.$i(t, "pending")
					}, t.prototype.xi = function(t, e, n) {
						this.$i(t, e, n), this.ki(t)
					}, t.prototype.Mi = function(t) {
						var e = "not-current";
						if (this.Ni(t)) {
							var n = this.storage.getItem(qr(this.persistenceKey, t));
							if (n) {
								var r = Wr.ai(t, n);
								r && (e = r.state)
							}
						}
						return this.Oi.ui(t), this.pi(), e
					}, t.prototype.Li = function(t) {
						this.Oi.hi(t), this.pi()
					}, t.prototype.Bi = function(t) {
						return this.Oi.activeTargetIds.has(t)
					}, t.prototype.qi = function(t) {
						this.removeItem(qr(this.persistenceKey, t))
					}, t.prototype.Ui = function(t, e, n) {
						this.Qi(t, e, n)
					}, t.prototype.Wi = function(t, e, n) {
						var r = this;
						e.forEach((function(t) {
							r.ki(t)
						})), this.currentUser = t, n.forEach((function(t) {
							r.Fi(t)
						}))
					}, t.prototype.ji = function(t) {
						this.Ki(t)
					}, t.prototype.Si = function() {
						this.Ti && (this.window.removeEventListener("storage", this.di), this.removeItem(this.Ii), this.Ti = !1)
					}, t.prototype.getItem = function(t) {
						var e = this.storage.getItem(t);
						return d("SharedClientState", "READ", t, e), e
					}, t.prototype.setItem = function(t, e) {
						d("SharedClientState", "SET", t, e), this.storage.setItem(t, e)
					}, t.prototype.removeItem = function(t) {
						d("SharedClientState", "REMOVE", t), this.storage.removeItem(t)
					}, t.prototype.wi = function(t) {
						var e = this,
							n = t;
						if (n.storageArea === this.storage) {
							if (d("SharedClientState", "EVENT", n.key, n.newValue), n.key === this.Ii) return void v("Received WebStorage notification for local change. Another client might have garbage-collected our state");
							this._n.Ds((function() {
								return r.__awaiter(e, void 0, void 0, (function() {
									var t, e, i, o, a, u;
									return r.__generator(this, (function(r) {
										if (this.Ti) {
											if (null !== n.key)
												if (this.Ri.test(n.key)) {
													if (null == n.newValue) return t = this.Gi(n.key), [2, this.zi(t, null)];
													if (e = this.Hi(n.key, n.newValue)) return [2, this.zi(e.clientId, e)]
												} else if (this.Pi.test(n.key)) {
												if (null !== n.newValue && (i = this.Yi(n.key, n.newValue))) return [2, this.Ji(i)]
											} else if (this.gi.test(n.key)) {
												if (null !== n.newValue && (o = this.Xi(n.key, n.newValue))) return [2, this.Zi(o)]
											} else if (n.key === this.yi) {
												if (null !== n.newValue && (a = this.bi(n.newValue))) return [2, this.vi(a)]
											} else n.key === this.Ai && (u = function(t) {
												var e = Vr.oi;
												if (null != t) try {
													var n = JSON.parse(t);
													b("number" == typeof n), e = n
												} catch (t) {
													v("SharedClientState", "Failed to read sequence number from WebStorage", t)
												}
												return e
											}(n.newValue)) !== Vr.oi && this.ni(u)
										} else this.Ei.push(n);
										return [2]
									}))
								}))
							}))
						}
					}, Object.defineProperty(t.prototype, "Oi", {
						get: function() {
							return this.mi.get(this.li)
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.pi = function() {
						this.setItem(this.Ii, this.Oi.ci())
					}, t.prototype.$i = function(t, e, n) {
						var r = new Gr(this.currentUser, t, e, n),
							i = Br(this.persistenceKey, this.currentUser, t);
						this.setItem(i, r.ci())
					}, t.prototype.ki = function(t) {
						var e = Br(this.persistenceKey, this.currentUser, t);
						this.removeItem(e)
					}, t.prototype.Ki = function(t) {
						var e = {
							clientId: this.li,
							onlineState: t
						};
						this.storage.setItem(this.yi, JSON.stringify(e))
					}, t.prototype.Qi = function(t, e, n) {
						var r = qr(this.persistenceKey, t),
							i = new Wr(t, e, n);
						this.setItem(r, i.ci())
					}, t.prototype.Gi = function(t) {
						var e = this.Ri.exec(t);
						return e ? e[1] : null
					}, t.prototype.Hi = function(t, e) {
						var n = this.Gi(t);
						return Hr.ai(n, e)
					}, t.prototype.Yi = function(t, e) {
						var n = this.Pi.exec(t),
							r = Number(n[1]),
							i = void 0 !== n[2] ? n[2] : null;
						return Gr.ai(new Fr(i), r, e)
					}, t.prototype.Xi = function(t, e) {
						var n = this.gi.exec(t),
							r = Number(n[1]);
						return Wr.ai(r, e)
					}, t.prototype.bi = function(t) {
						return Kr.ai(t)
					}, t.prototype.Ji = function(t) {
						return r.__awaiter(this, void 0, void 0, (function() {
							return r.__generator(this, (function(e) {
								return t.user.uid === this.currentUser.uid ? [2, this._i.tr(t.batchId, t.state, t.error)] : (d("SharedClientState", "Ignoring mutation for non-active user " + t.user.uid), [2])
							}))
						}))
					}, t.prototype.Zi = function(t) {
						return this._i.er(t.targetId, t.state, t.error)
					}, t.prototype.zi = function(t, e) {
						var n = this,
							r = e ? this.mi.rt(t, e) : this.mi.remove(t),
							i = this.Ci(this.mi),
							o = this.Ci(r),
							a = [],
							u = [];
						return o.forEach((function(t) {
							i.has(t) || a.push(t)
						})), i.forEach((function(t) {
							o.has(t) || u.push(t)
						})), this._i.nr(a, u).then((function() {
							n.mi = r
						}))
					}, t.prototype.vi = function(t) {
						this.mi.get(t.clientId) && this.fi(t.onlineState)
					}, t.prototype.Ci = function(t) {
						var e = jt();
						return t.forEach((function(t, n) {
							e = e.xt(n.activeTargetIds)
						})), e
					}, t
				}(),
				Yr = function() {
					function t() {
						this.sr = new Qr, this.ir = {}, this.fi = null, this.ni = null
					}
					return t.prototype.Fi = function(t) {}, t.prototype.xi = function(t, e, n) {}, t.prototype.Mi = function(t) {
						return this.sr.ui(t), this.ir[t] || "not-current"
					}, t.prototype.Ui = function(t, e, n) {
						this.ir[t] = e
					}, t.prototype.Li = function(t) {
						this.sr.hi(t)
					}, t.prototype.Bi = function(t) {
						return this.sr.activeTargetIds.has(t)
					}, t.prototype.qi = function(t) {
						delete this.ir[t]
					}, t.prototype.Di = function() {
						return this.sr.activeTargetIds
					}, t.prototype.Ni = function(t) {
						return this.sr.activeTargetIds.has(t)
					}, t.prototype.start = function() {
						return this.sr = new Qr, Promise.resolve()
					}, t.prototype.Wi = function(t, e, n) {}, t.prototype.ji = function(t) {}, t.prototype.Si = function() {}, t.prototype.ri = function(t) {}, t
				}(),
				$r = function() {
					function t(t, e, n, r) {
						this.batchId = t, this.rr = e, this.baseMutations = n, this.mutations = r
					}
					return t.prototype.ar = function(t, e, n) {
						for (var r = n.cr, i = 0; i < this.mutations.length; i++) {
							var o = this.mutations[i];
							o.key.isEqual(t) && (e = hn(o, e, r[i]))
						}
						return e
					}, t.prototype.ur = function(t, e) {
						for (var n = 0, r = this.baseMutations; n < r.length; n++) {
							var i = r[n];
							i.key.isEqual(t) && (e = pn(i, e, e, this.rr))
						}
						for (var o = e, a = 0, u = this.mutations; a < u.length; a++) {
							var s = u[a];
							s.key.isEqual(t) && (e = pn(s, e, o, this.rr))
						}
						return e
					}, t.prototype.hr = function(t) {
						var e = this,
							n = t;
						return this.mutations.forEach((function(r) {
							var i = e.ur(r.key, t.get(r.key));
							i && (n = n.rt(r.key, i))
						})), n
					}, t.prototype.keys = function() {
						return this.mutations.reduce((function(t, e) {
							return t.add(e.key)
						}), Lt())
					}, t.prototype.isEqual = function(t) {
						return this.batchId === t.batchId && $(this.mutations, t.mutations, (function(t, e) {
							return vn(t, e)
						})) && $(this.baseMutations, t.baseMutations, (function(t, e) {
							return vn(t, e)
						}))
					}, t
				}(),
				Jr = function() {
					function t(t, e, n, r) {
						this.batch = t, this.lr = e, this.cr = n, this._r = r
					}
					return t.from = function(e, n, r) {
						b(e.mutations.length === r.length);
						for (var i = Pt, o = e.mutations, a = 0; a < o.length; a++) i = i.rt(o[a].key, r[a].version);
						return new t(e, n, r, i)
					}, t
				}(),
				Zr = function() {
					function t() {
						this.dr = new at((function(t) {
							return t.toString()
						}), (function(t, e) {
							return t.isEqual(e)
						})), this.wr = !1
					}
					return Object.defineProperty(t.prototype, "readTime", {
						get: function() {
							return this.mr
						},
						set: function(t) {
							this.mr = t
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.Tr = function(t, e) {
						this.Er(), this.readTime = e, this.dr.set(t.key, t)
					}, t.prototype.Ir = function(t, e) {
						this.Er(), e && (this.readTime = e), this.dr.set(t, null)
					}, t.prototype.Ar = function(t, e) {
						this.Er();
						var n = this.dr.get(e);
						return void 0 !== n ? vr.resolve(n) : this.Rr(t, e)
					}, t.prototype.getEntries = function(t, e) {
						return this.Pr(t, e)
					}, t.prototype.apply = function(t) {
						return this.Er(), this.wr = !0, this.gr(t)
					}, t.prototype.Er = function() {}, t
				}(),
				ti = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",
				ei = function() {
					function t() {
						this.yr = []
					}
					return t.prototype.Vr = function(t) {
						this.yr.push(t)
					}, t.prototype.pr = function() {
						this.yr.forEach((function(t) {
							return t()
						}))
					}, t
				}(),
				ni = function() {
					function t(t, e, n) {
						this.br = t, this.vr = e, this.Sr = n
					}
					return t.prototype.Dr = function(t, e) {
						var n = this;
						return this.vr.Cr(t, e).next((function(r) {
							return n.Nr(t, e, r)
						}))
					}, t.prototype.Nr = function(t, e, n) {
						return this.br.Ar(t, e).next((function(t) {
							for (var r = 0, i = n; r < i.length; r++) t = i[r].ur(e, t);
							return t
						}))
					}, t.prototype.Fr = function(t, e, n) {
						var r = Ot();
						return e.forEach((function(t, e) {
							for (var i = 0, o = n; i < o.length; i++) e = o[i].ur(t, e);
							r = r.rt(t, e)
						})), r
					}, t.prototype.$r = function(t, e) {
						var n = this;
						return this.br.getEntries(t, e).next((function(e) {
							return n.kr(t, e)
						}))
					}, t.prototype.kr = function(t, e) {
						var n = this;
						return this.vr.Mr(t, e).next((function(r) {
							var i = n.Fr(t, e, r),
								o = xt();
							return i.forEach((function(t, e) {
								e || (e = new On(t, st.min())), o = o.rt(t, e)
							})), o
						}))
					}, t.prototype.Or = function(t, e, n) {
						return function(t) {
							return A.F(t.path) && null === t.collectionGroup && 0 === t.filters.length
						}(e) ? this.Lr(t, e.path) : Vn(e) ? this.Br(t, e, n) : this.qr(t, e, n)
					}, t.prototype.Lr = function(t, e) {
						return this.Dr(t, new A(e)).next((function(t) {
							var e = Dt();
							return t instanceof xn && (e = e.rt(t.key, t)), e
						}))
					}, t.prototype.Br = function(t, e, n) {
						var r = this,
							i = e.collectionGroup,
							o = Dt();
						return this.Sr.Ur(t, i).next((function(a) {
							return vr.forEach(a, (function(a) {
								var u = function(t, e) {
									return new Pn(e, null, t.rn.slice(), t.filters.slice(), t.limit, t.on, t.startAt, t.endAt)
								}(e, a.child(i));
								return r.qr(t, u, n).next((function(t) {
									t.forEach((function(t, e) {
										o = o.rt(t, e)
									}))
								}))
							})).next((function() {
								return o
							}))
						}))
					}, t.prototype.qr = function(t, e, n) {
						var r, i, o = this;
						return this.br.Or(t, e, n).next((function(n) {
							return r = n, o.vr.Qr(t, e)
						})).next((function(e) {
							return i = e, o.Wr(t, i, r).next((function(t) {
								r = t;
								for (var e = 0, n = i; e < n.length; e++)
									for (var o = n[e], a = 0, u = o.mutations; a < u.length; a++) {
										var s = u[a],
											c = s.key,
											l = r.get(c),
											f = pn(s, l, l, o.rr);
										r = f instanceof xn ? r.rt(c, f) : r.remove(c)
									}
							}))
						})).next((function() {
							return r.forEach((function(t, n) {
								Xn(e, n) || (r = r.remove(t))
							})), r
						}))
					}, t.prototype.Wr = function(t, e, n) {
						for (var r = Lt(), i = 0, o = e; i < o.length; i++)
							for (var a = 0, u = o[i].mutations; a < u.length; a++) {
								var s = u[a];
								s instanceof gn && null === n.get(s.key) && (r = r.add(s.key))
							}
						var c = n;
						return this.br.getEntries(t, r).next((function(t) {
							return t.forEach((function(t, e) {
								null !== e && e instanceof xn && (c = c.rt(t, e))
							})), c
						}))
					}, t
				}(),
				ri = function() {
					function t(t, e, n, r) {
						this.targetId = t, this.fromCache = e, this.jr = n, this.Kr = r
					}
					return t.Gr = function(e, n) {
						for (var r = Lt(), i = Lt(), o = 0, a = n.docChanges; o < a.length; o++) {
							var u = a[o];
							switch (u.type) {
								case 0:
									r = r.add(u.doc.key);
									break;
								case 1:
									i = i.add(u.doc.key)
							}
						}
						return new t(e, n.fromCache, r, i)
					}, t
				}();

			function ii(t, e) {
				var n = t[0],
					r = t[1],
					i = e[0],
					o = e[1],
					a = Y(n, i);
				return 0 === a ? Y(r, o) : a
			}
			var oi = function() {
					function t(t) {
						this.zr = t, this.buffer = new kt(ii), this.Hr = 0
					}
					return t.prototype.Yr = function() {
						return ++this.Hr
					}, t.prototype.Jr = function(t) {
						var e = [t, this.Yr()];
						if (this.buffer.size < this.zr) this.buffer = this.buffer.add(e);
						else {
							var n = this.buffer.last();
							ii(e, n) < 0 && (this.buffer = this.buffer.delete(n).add(e))
						}
					}, Object.defineProperty(t.prototype, "maxValue", {
						get: function() {
							return this.buffer.last()[0]
						},
						enumerable: !1,
						configurable: !0
					}), t
				}(),
				ai = {
					Xr: !1,
					Zr: 0,
					eo: 0,
					no: 0
				},
				ui = function() {
					function t(t, e, n) {
						this.so = t, this.io = e, this.ro = n
					}
					return t.oo = function(e) {
						return new t(e, t.ao, t.co)
					}, t
				}();
			ui.uo = -1, ui.ho = 1048576, ui.lo = 41943040, ui.ao = 10, ui.co = 1e3, ui._o = new ui(ui.lo, ui.ao, ui.co), ui.fo = new ui(ui.uo, 0, 0);
			var si = function() {
					function t(t, e) {
						this.do = t, this.os = e, this.wo = !1, this.mo = null
					}
					return t.prototype.start = function(t) {
						this.do.params.so !== ui.uo && this.To(t)
					}, t.prototype.stop = function() {
						this.mo && (this.mo.cancel(), this.mo = null)
					}, Object.defineProperty(t.prototype, "Ti", {
						get: function() {
							return null !== this.mo
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.To = function(t) {
						var e = this,
							n = this.wo ? 3e5 : 6e4;
						d("LruGarbageCollector", "Garbage collection scheduled in " + n + "ms"), this.mo = this.os.gn("lru_garbage_collection", n, (function() {
							return r.__awaiter(e, void 0, void 0, (function() {
								var e;
								return r.__generator(this, (function(n) {
									switch (n.label) {
										case 0:
											this.mo = null, this.wo = !0, n.label = 1;
										case 1:
											return n.trys.push([1, 3, , 7]), [4, t.Eo(this.do)];
										case 2:
											return n.sent(), [3, 7];
										case 3:
											return br(e = n.sent()) ? (d("LruGarbageCollector", "Ignoring IndexedDB error during garbage collection: ", e), [3, 6]) : [3, 4];
										case 4:
											return [4, So(e)];
										case 5:
											n.sent(), n.label = 6;
										case 6:
											return [3, 7];
										case 7:
											return [4, this.To(t)];
										case 8:
											return n.sent(), [2]
									}
								}))
							}))
						}))
					}, t
				}(),
				ci = function() {
					function t(t, e) {
						this.Io = t, this.params = e
					}
					return t.prototype.Ao = function(t, e) {
						return this.Io.Ro(t).next((function(t) {
							return Math.floor(e / 100 * t)
						}))
					}, t.prototype.Po = function(t, e) {
						var n = this;
						if (0 === e) return vr.resolve(Vr.oi);
						var r = new oi(e);
						return this.Io.De(t, (function(t) {
							return r.Jr(t.sequenceNumber)
						})).next((function() {
							return n.Io.yo(t, (function(t) {
								return r.Jr(t)
							}))
						})).next((function() {
							return r.maxValue
						}))
					}, t.prototype.Vo = function(t, e, n) {
						return this.Io.Vo(t, e, n)
					}, t.prototype.po = function(t, e) {
						return this.Io.po(t, e)
					}, t.prototype.bo = function(t, e) {
						var n = this;
						return this.params.so === ui.uo ? (d("LruGarbageCollector", "Garbage collection skipped; disabled"), vr.resolve(ai)) : this.vo(t).next((function(r) {
							return r < n.params.so ? (d("LruGarbageCollector", "Garbage collection skipped; Cache size " + r + " is lower than threshold " + n.params.so), ai) : n.So(t, e)
						}))
					}, t.prototype.vo = function(t) {
						return this.Io.vo(t)
					}, t.prototype.So = function(t, e) {
						var n, r, i, a, u, s, c, l = this,
							f = Date.now();
						return this.Ao(t, this.params.io).next((function(e) {
							return e > l.params.ro ? (d("LruGarbageCollector", "Capping sequence numbers to collect down to the maximum of " + l.params.ro + " from " + e), r = l.params.ro) : r = e, a = Date.now(), l.Po(t, r)
						})).next((function(r) {
							return n = r, u = Date.now(), l.Vo(t, n, e)
						})).next((function(e) {
							return i = e, s = Date.now(), l.po(t, n)
						})).next((function(t) {
							return c = Date.now(), p() <= o.LogLevel.DEBUG && d("LruGarbageCollector", "LRU Garbage Collection\n\tCounted targets in " + (a - f) + "ms\n\tDetermined least recently used " + r + " in " + (u - a) + "ms\n\tRemoved " + i + " targets in " + (s - u) + "ms\n\tRemoved " + t + " documents in " + (c - s) + "ms\nTotal Duration: " + (c - f) + "ms"), vr.resolve({
								Xr: !0,
								Zr: r,
								eo: i,
								no: t
							})
						}))
					}, t
				}();

			function li(t) {
				for (var e = "", n = 0; n < t.length; n++) e.length > 0 && (e = hi(e)), e = fi(t.get(n), e);
				return hi(e)
			}

			function fi(t, e) {
				for (var n = e, r = t.length, i = 0; i < r; i++) {
					var o = t.charAt(i);
					switch (o) {
						case "\0":
							n += "\x01\x10";
							break;
						case "\x01":
							n += "\x01\x11";
							break;
						default:
							n += o
					}
				}
				return n
			}

			function hi(t) {
				return t + "\x01\x01"
			}

			function pi(t) {
				var e = t.length;
				if (b(e >= 2), 2 === e) return b("\x01" === t.charAt(0) && "\x01" === t.charAt(1)), S.g();
				for (var n = e - 2, r = [], i = "", o = 0; o < e;) {
					var a = t.indexOf("\x01", o);
					switch ((a < 0 || a > n) && g(), t.charAt(a + 1)) {
						case "\x01":
							var u = t.substring(o, a),
								s = void 0;
							0 === i.length ? s = u : (s = i += u, i = ""), r.push(s);
							break;
						case "\x10":
							i += t.substring(o, a), i += "\0";
							break;
						case "\x11":
							i += t.substring(o, a + 1);
							break;
						default:
							g()
					}
					o = a + 2
				}
				return new S(r)
			}
			var di = function(t) {
				this.Do = t
			};

			function vi(t, e) {
				if (e.document) return function(t, e, n) {
					var r = Ne(t, e.name),
						i = Ie(e.updateTime),
						o = new Sn({
							mapValue: {
								fields: e.fields
							}
						});
					return new xn(r, i, o, {
						hasCommittedMutations: !!n
					})
				}(t.Do, e.document, !!e.hasCommittedMutations);
				if (e.noDocument) {
					var n = A.$(e.noDocument.path),
						r = wi(e.noDocument.readTime);
					return new On(n, r, {
						hasCommittedMutations: !!e.hasCommittedMutations
					})
				}
				if (e.unknownDocument) {
					var i = A.$(e.unknownDocument.path),
						o = wi(e.unknownDocument.version);
					return new Cn(i, o)
				}
				return g()
			}

			function mi(t, e, n) {
				var r = yi(n),
					i = e.key.path.h().A();
				if (e instanceof xn) {
					var o = function(t, e) {
							return {
								name: ke(t, e.key),
								fields: e.sn().mapValue.fields,
								updateTime: we(t, e.version.X())
							}
						}(t.Do, e),
						a = e.hasCommittedMutations;
					return new Wi(null, null, o, a, r, i)
				}
				if (e instanceof On) {
					var u = e.key.path.A(),
						s = bi(e.version),
						c = e.hasCommittedMutations;
					return new Wi(null, new qi(u, s), null, c, r, i)
				}
				if (e instanceof Cn) {
					var l = e.key.path.A(),
						f = bi(e.version);
					return new Wi(new Gi(l, f), null, null, !0, r, i)
				}
				return g()
			}

			function yi(t) {
				var e = t.X();
				return [e.seconds, e.nanoseconds]
			}

			function gi(t) {
				var e = new ut(t[0], t[1]);
				return st.Y(e)
			}

			function bi(t) {
				var e = t.X();
				return new Ui(e.seconds, e.nanoseconds)
			}

			function wi(t) {
				var e = new ut(t.seconds, t.nanoseconds);
				return st.Y(e)
			}

			function _i(t, e) {
				var n = (e.baseMutations || []).map((function(e) {
						return Re(t.Do, e)
					})),
					r = e.mutations.map((function(e) {
						return Re(t.Do, e)
					})),
					i = ut.fromMillis(e.localWriteTimeMs);
				return new $r(e.batchId, i, n, r)
			}

			function Ei(t) {
				var e, n, r = wi(t.readTime),
					i = void 0 !== t.lastLimboFreeSnapshotVersion ? wi(t.lastLimboFreeSnapshotVersion) : st.min();
				return void 0 !== t.query.documents ? (b(1 === (n = t.query).documents.length), e = Bn(Ln(xe(n.documents[0])))) : e = function(t) {
					var e = xe(t.parent),
						n = t.structuredQuery,
						r = n.from ? n.from.length : 0,
						i = null;
					if (r > 0) {
						b(1 === r);
						var o = n.from[0];
						o.allDescendants ? i = o.collectionId : e = e.child(o.collectionId)
					}
					var a = [];
					n.where && (a = function t(e) {
						return e ? void 0 !== e.unaryFilter ? [Ge(e)] : void 0 !== e.fieldFilter ? [qe(e)] : void 0 !== e.compositeFilter ? e.compositeFilter.filters.map((function(e) {
							return t(e)
						})).reduce((function(t, e) {
							return t.concat(e)
						})) : g() : []
					}(n.where));
					var u = [];
					n.orderBy && (u = n.orderBy.map((function(t) {
						return function(t) {
							return new lr(Be(t.field), function(t) {
								switch (t) {
									case "ASCENDING":
										return "asc";
									case "DESCENDING":
										return "desc";
									default:
										return
								}
							}(t.direction))
						}(t)
					})));
					var s = null;
					n.limit && (s = function(t) {
						var e;
						return ct(e = "object" == typeof t ? t.value : t) ? null : e
					}(n.limit));
					var c = null;
					n.startAt && (c = Ue(n.startAt));
					var l = null;
					return n.endAt && (l = Ue(n.endAt)), Bn(Rn(e, i, u, a, s, "F", c, l))
				}(t.query), new bt(e, t.targetId, 0, t.lastListenSequenceNumber, r, i, Z.fromBase64String(t.resumeToken))
			}

			function Ii(t, e) {
				var n, r = bi(e.et),
					i = bi(e.lastLimboFreeSnapshotVersion);
				n = mt(e.target) ? Le(t.Do, e.target) : Me(t.Do, e.target);
				var o = e.resumeToken.toBase64();
				return new Ki(e.targetId, dt(e.target), r, o, e.sequenceNumber, i, n)
			}
			var Ti = function() {
				function t(t, e, n, r) {
					this.userId = t, this.serializer = e, this.Sr = n, this.Co = r, this.No = {}
				}
				return t.Fo = function(e, n, r, i) {
					return b("" !== e.uid), new t(e.Xs() ? e.uid : "", n, r, i)
				}, t.prototype.$o = function(t) {
					var e = !0,
						n = IDBKeyRange.bound([this.userId, Number.NEGATIVE_INFINITY], [this.userId, Number.POSITIVE_INFINITY]);
					return Ni(t).ss({
						index: zi.userMutationsIndex,
						range: n
					}, (function(t, n, r) {
						e = !1, r.done()
					})).next((function() {
						return e
					}))
				}, t.prototype.xo = function(t, e, n, r) {
					var i = this,
						o = Ai(t),
						a = Ni(t);
					return a.add({}).next((function(u) {
						b("number" == typeof u);
						for (var s = new $r(u, e, n, r), c = function(t, e, n) {
								var r = n.baseMutations.map((function(e) {
										return Pe(t.Do, e)
									})),
									i = n.mutations.map((function(e) {
										return Pe(t.Do, e)
									}));
								return new zi(e, n.batchId, n.rr.toMillis(), r, i)
							}(i.serializer, i.userId, s), l = [], f = new kt((function(t, e) {
								return Y(t.R(), e.R())
							})), h = 0, p = r; h < p.length; h++) {
							var d = p[h],
								v = Bi.key(i.userId, d.key.path, u);
							f = f.add(d.key.path.h()), l.push(a.put(c)), l.push(o.put(v, Bi.PLACEHOLDER))
						}
						return f.forEach((function(e) {
							l.push(i.Sr.ko(t, e))
						})), t.Vr((function() {
							i.No[u] = s.keys()
						})), vr.$n(l).next((function() {
							return s
						}))
					}))
				}, t.prototype.Mo = function(t, e) {
					var n = this;
					return Ni(t).get(e).next((function(t) {
						return t ? (b(t.userId === n.userId), _i(n.serializer, t)) : null
					}))
				}, t.prototype.Oo = function(t, e) {
					var n = this;
					return this.No[e] ? vr.resolve(this.No[e]) : this.Mo(t, e).next((function(t) {
						if (t) {
							var r = t.keys();
							return n.No[e] = r, r
						}
						return null
					}))
				}, t.prototype.Lo = function(t, e) {
					var n = this,
						r = e + 1,
						i = IDBKeyRange.lowerBound([this.userId, r]),
						o = null;
					return Ni(t).ss({
						index: zi.userMutationsIndex,
						range: i
					}, (function(t, e, i) {
						e.userId === n.userId && (b(e.batchId >= r), o = _i(n.serializer, e)), i.done()
					})).next((function() {
						return o
					}))
				}, t.prototype.Bo = function(t) {
					var e = IDBKeyRange.upperBound([this.userId, Number.POSITIVE_INFINITY]),
						n = -1;
					return Ni(t).ss({
						index: zi.userMutationsIndex,
						range: e,
						reverse: !0
					}, (function(t, e, r) {
						n = e.batchId, r.done()
					})).next((function() {
						return n
					}))
				}, t.prototype.qo = function(t) {
					var e = this,
						n = IDBKeyRange.bound([this.userId, -1], [this.userId, Number.POSITIVE_INFINITY]);
					return Ni(t).Zn(zi.userMutationsIndex, n).next((function(t) {
						return t.map((function(t) {
							return _i(e.serializer, t)
						}))
					}))
				}, t.prototype.Cr = function(t, e) {
					var n = this,
						r = Bi.prefixForPath(this.userId, e.path),
						i = IDBKeyRange.lowerBound(r),
						o = [];
					return Ai(t).ss({
						range: i
					}, (function(r, i, a) {
						var u = r[0],
							s = r[1],
							c = r[2],
							l = pi(s);
						if (u === n.userId && e.path.isEqual(l)) return Ni(t).get(c).next((function(t) {
							if (!t) throw g();
							b(t.userId === n.userId), o.push(_i(n.serializer, t))
						}));
						a.done()
					})).next((function() {
						return o
					}))
				}, t.prototype.Mr = function(t, e) {
					var n = this,
						r = new kt(Y),
						i = [];
					return e.forEach((function(e) {
						var o = Bi.prefixForPath(n.userId, e.path),
							a = IDBKeyRange.lowerBound(o),
							u = Ai(t).ss({
								range: a
							}, (function(t, i, o) {
								var a = t[0],
									u = t[1],
									s = t[2],
									c = pi(u);
								a === n.userId && e.path.isEqual(c) ? r = r.add(s) : o.done()
							}));
						i.push(u)
					})), vr.$n(i).next((function() {
						return n.Uo(t, r)
					}))
				}, t.prototype.Qr = function(t, e) {
					var n = this,
						r = e.path,
						i = r.length + 1,
						o = Bi.prefixForPath(this.userId, r),
						a = IDBKeyRange.lowerBound(o),
						u = new kt(Y);
					return Ai(t).ss({
						range: a
					}, (function(t, e, o) {
						var a = t[0],
							s = t[1],
							c = t[2],
							l = pi(s);
						a === n.userId && r.T(l) ? l.length === i && (u = u.add(c)) : o.done()
					})).next((function() {
						return n.Uo(t, u)
					}))
				}, t.prototype.Uo = function(t, e) {
					var n = this,
						r = [],
						i = [];
					return e.forEach((function(e) {
						i.push(Ni(t).get(e).next((function(t) {
							if (null === t) throw g();
							b(t.userId === n.userId), r.push(_i(n.serializer, t))
						})))
					})), vr.$n(i).next((function() {
						return r
					}))
				}, t.prototype.Qo = function(t, e) {
					var n = this;
					return ki(t.Wo, this.userId, e).next((function(r) {
						return t.Vr((function() {
							n.jo(e.batchId)
						})), vr.forEach(r, (function(e) {
							return n.Co.Ko(t, e)
						}))
					}))
				}, t.prototype.jo = function(t) {
					delete this.No[t]
				}, t.prototype.Go = function(t) {
					var e = this;
					return this.$o(t).next((function(n) {
						if (!n) return vr.resolve();
						var r = IDBKeyRange.lowerBound(Bi.prefixForUser(e.userId)),
							i = [];
						return Ai(t).ss({
							range: r
						}, (function(t, n, r) {
							if (t[0] === e.userId) {
								var o = pi(t[1]);
								i.push(o)
							} else r.done()
						})).next((function() {
							b(0 === i.length)
						}))
					}))
				}, t.prototype.zo = function(t, e) {
					return Si(t, this.userId, e)
				}, t.prototype.Ho = function(t) {
					var e = this;
					return xi(t).get(this.userId).next((function(t) {
						return t || new Vi(e.userId, -1, "")
					}))
				}, t
			}();

			function Si(t, e, n) {
				var r = Bi.prefixForPath(e, n.path),
					i = r[1],
					o = IDBKeyRange.lowerBound(r),
					a = !1;
				return Ai(t).ss({
					range: o,
					ns: !0
				}, (function(t, n, r) {
					var o = t[0],
						u = t[1];
					t[2], o === e && u === i && (a = !0), r.done()
				})).next((function() {
					return a
				}))
			}

			function ki(t, e, n) {
				var r = t.store(zi.store),
					i = t.store(Bi.store),
					o = [],
					a = IDBKeyRange.only(n.batchId),
					u = 0,
					s = r.ss({
						range: a
					}, (function(t, e, n) {
						return u++, n.delete()
					}));
				o.push(s.next((function() {
					b(1 === u)
				})));
				for (var c = [], l = 0, f = n.mutations; l < f.length; l++) {
					var h = f[l],
						p = Bi.key(e, h.key.path, n.batchId);
					o.push(i.delete(p)), c.push(h.key)
				}
				return vr.$n(o).next((function() {
					return c
				}))
			}

			function Ni(t) {
				return co.Un(t, zi.store)
			}

			function Ai(t) {
				return co.Un(t, Bi.store)
			}

			function xi(t) {
				return co.Un(t, Vi.store)
			}
			var Oi = function() {
				function t(t, e) {
					this.serializer = t, this.Sr = e
				}
				return t.prototype.Tr = function(t, e, n) {
					return Di(t).put(Pi(e), n)
				}, t.prototype.Ir = function(t, e) {
					var n = Di(t),
						r = Pi(e);
					return n.delete(r)
				}, t.prototype.updateMetadata = function(t, e) {
					var n = this;
					return this.getMetadata(t).next((function(r) {
						return r.byteSize += e, n.Yo(t, r)
					}))
				}, t.prototype.Ar = function(t, e) {
					var n = this;
					return Di(t).get(Pi(e)).next((function(t) {
						return n.Jo(t)
					}))
				}, t.prototype.Xo = function(t, e) {
					var n = this;
					return Di(t).get(Pi(e)).next((function(t) {
						var e = n.Jo(t);
						return e ? {
							Zo: e,
							size: Ri(t)
						} : null
					}))
				}, t.prototype.getEntries = function(t, e) {
					var n = this,
						r = Ot();
					return this.ta(t, e, (function(t, e) {
						var i = n.Jo(e);
						r = r.rt(t, i)
					})).next((function() {
						return r
					}))
				}, t.prototype.ea = function(t, e) {
					var n = this,
						r = Ot(),
						i = new It(A.i);
					return this.ta(t, e, (function(t, e) {
						var o = n.Jo(e);
						o ? (r = r.rt(t, o), i = i.rt(t, Ri(e))) : (r = r.rt(t, null), i = i.rt(t, 0))
					})).next((function() {
						return {
							na: r,
							sa: i
						}
					}))
				}, t.prototype.ta = function(t, e, n) {
					if (e.m()) return vr.resolve();
					var r = IDBKeyRange.bound(e.first().path.A(), e.last().path.A()),
						i = e.lt(),
						o = i.Et();
					return Di(t).ss({
						range: r
					}, (function(t, e, r) {
						for (var a = A.$(t); o && A.i(o, a) < 0;) n(o, null), o = i.Et();
						o && o.isEqual(a) && (n(o, e), o = i.It() ? i.Et() : null), o ? r.Jn(o.path.A()) : r.done()
					})).next((function() {
						for (; o;) n(o, null), o = i.It() ? i.Et() : null
					}))
				}, t.prototype.Or = function(t, e, n) {
					var r = this,
						i = Dt(),
						o = e.path.length + 1,
						a = {};
					if (n.isEqual(st.min())) {
						var u = e.path.A();
						a.range = IDBKeyRange.lowerBound(u)
					} else {
						var s = e.path.A(),
							c = yi(n);
						a.range = IDBKeyRange.lowerBound([s, c], !0), a.index = Wi.collectionReadTimeIndex
					}
					return Di(t).ss(a, (function(t, n, a) {
						if (t.length === o) {
							var u = vi(r.serializer, n);
							e.path.T(u.key.path) ? u instanceof xn && Xn(e, u) && (i = i.rt(u.key, u)) : a.done()
						}
					})).next((function() {
						return i
					}))
				}, t.prototype.ia = function(t, e) {
					var n = this,
						r = xt(),
						i = yi(e),
						o = Di(t),
						a = IDBKeyRange.lowerBound(i, !0);
					return o.ss({
						index: Wi.readTimeIndex,
						range: a
					}, (function(t, e) {
						var o = vi(n.serializer, e);
						r = r.rt(o.key, o), i = e.readTime
					})).next((function() {
						return {
							ra: r,
							readTime: gi(i)
						}
					}))
				}, t.prototype.oa = function(t) {
					var e = Di(t),
						n = st.min();
					return e.ss({
						index: Wi.readTimeIndex,
						reverse: !0
					}, (function(t, e, r) {
						e.readTime && (n = gi(e.readTime)), r.done()
					})).next((function() {
						return n
					}))
				}, t.prototype.aa = function(e) {
					return new t.ca(this, !!e && e.ua)
				}, t.prototype.ha = function(t) {
					return this.getMetadata(t).next((function(t) {
						return t.byteSize
					}))
				}, t.prototype.getMetadata = function(t) {
					return Ci(t).get(Hi.key).next((function(t) {
						return b(!!t), t
					}))
				}, t.prototype.Yo = function(t, e) {
					return Ci(t).put(Hi.key, e)
				}, t.prototype.Jo = function(t) {
					if (t) {
						var e = vi(this.serializer, t);
						return e instanceof On && e.version.isEqual(st.min()) ? null : e
					}
					return null
				}, t
			}();

			function Ci(t) {
				return co.Un(t, Hi.store)
			}

			function Di(t) {
				return co.Un(t, Wi.store)
			}

			function Pi(t) {
				return t.path.A()
			}

			function Ri(t) {
				var e;
				if (t.document) e = t.document;
				else if (t.unknownDocument) e = t.unknownDocument;
				else {
					if (!t.noDocument) throw g();
					e = t.noDocument
				}
				return JSON.stringify(e).length
			}
			Oi.ca = function(t) {
				function e(e, n) {
					var r = this;
					return (r = t.call(this) || this).la = e, r.ua = n, r._a = new at((function(t) {
						return t.toString()
					}), (function(t, e) {
						return t.isEqual(e)
					})), r
				}
				return r.__extends(e, t), e.prototype.gr = function(t) {
					var e = this,
						n = [],
						r = 0,
						i = new kt((function(t, e) {
							return Y(t.R(), e.R())
						}));
					return this.dr.forEach((function(o, a) {
						var u = e._a.get(o);
						if (a) {
							var s = mi(e.la.serializer, a, e.readTime);
							i = i.add(o.path.h());
							var c = Ri(s);
							r += c - u, n.push(e.la.Tr(t, o, s))
						} else if (r -= u, e.ua) {
							var l = mi(e.la.serializer, new On(o, st.min()), e.readTime);
							n.push(e.la.Tr(t, o, l))
						} else n.push(e.la.Ir(t, o))
					})), i.forEach((function(r) {
						n.push(e.la.Sr.ko(t, r))
					})), n.push(this.la.updateMetadata(t, r)), vr.$n(n)
				}, e.prototype.Rr = function(t, e) {
					var n = this;
					return this.la.Xo(t, e).next((function(t) {
						return null === t ? (n._a.set(e, 0), null) : (n._a.set(e, t.size), t.Zo)
					}))
				}, e.prototype.Pr = function(t, e) {
					var n = this;
					return this.la.ea(t, e).next((function(t) {
						var e = t.na;
						return t.sa.forEach((function(t, e) {
							n._a.set(t, e)
						})), e
					}))
				}, e
			}(Zr);
			var Li = function() {
					function t() {
						this.fa = new Mi
					}
					return t.prototype.ko = function(t, e) {
						return this.fa.add(e), vr.resolve()
					}, t.prototype.Ur = function(t, e) {
						return vr.resolve(this.fa.getEntries(e))
					}, t
				}(),
				Mi = function() {
					function t() {
						this.index = {}
					}
					return t.prototype.add = function(t) {
						var e = t._(),
							n = t.h(),
							r = this.index[e] || new kt(S.i),
							i = !r.has(n);
						return this.index[e] = r.add(n), i
					}, t.prototype.has = function(t) {
						var e = t._(),
							n = t.h(),
							r = this.index[e];
						return r && r.has(n)
					}, t.prototype.getEntries = function(t) {
						return (this.index[t] || new kt(S.i)).A()
					}, t
				}(),
				ji = function() {
					function t(t) {
						this.serializer = t
					}
					return t.prototype.createOrUpgrade = function(t, e, n, r) {
						var i = this;
						b(n < r && n >= 0 && r <= 10);
						var o = new wr(e);
						n < 1 && r >= 1 && (function(t) {
							t.createObjectStore(Fi.store)
						}(t), function(t) {
							t.createObjectStore(Vi.store, {
								keyPath: Vi.keyPath
							}), t.createObjectStore(zi.store, {
								keyPath: zi.keyPath,
								autoIncrement: !0
							}).createIndex(zi.userMutationsIndex, zi.userMutationsKeyPath, {
								unique: !0
							}), t.createObjectStore(Bi.store)
						}(t), $i(t), function(t) {
							t.createObjectStore(Wi.store)
						}(t));
						var a = vr.resolve();
						return n < 3 && r >= 3 && (0 !== n && (function(t) {
							t.deleteObjectStore(Qi.store), t.deleteObjectStore(Ki.store), t.deleteObjectStore(Xi.store)
						}(t), $i(t)), a = a.next((function() {
							return function(t) {
								var e = t.store(Xi.store),
									n = new Xi(0, 0, st.min().X(), 0);
								return e.put(Xi.key, n)
							}(o)
						}))), n < 4 && r >= 4 && (0 !== n && (a = a.next((function() {
							return function(t, e) {
								return e.store(zi.store).Zn().next((function(n) {
									t.deleteObjectStore(zi.store), t.createObjectStore(zi.store, {
										keyPath: zi.keyPath,
										autoIncrement: !0
									}).createIndex(zi.userMutationsIndex, zi.userMutationsKeyPath, {
										unique: !0
									});
									var r = e.store(zi.store),
										i = n.map((function(t) {
											return r.put(t)
										}));
									return vr.$n(i)
								}))
							}(t, o)
						}))), a = a.next((function() {
							! function(t) {
								t.createObjectStore(Ji.store, {
									keyPath: Ji.keyPath
								})
							}(t)
						}))), n < 5 && r >= 5 && (a = a.next((function() {
							return i.removeAcknowledgedMutations(o)
						}))), n < 6 && r >= 6 && (a = a.next((function() {
							return function(t) {
								t.createObjectStore(Hi.store)
							}(t), i.addDocumentGlobal(o)
						}))), n < 7 && r >= 7 && (a = a.next((function() {
							return i.ensureSequenceNumbers(o)
						}))), n < 8 && r >= 8 && (a = a.next((function() {
							return i.createCollectionParentIndex(t, o)
						}))), n < 9 && r >= 9 && (a = a.next((function() {
							! function(t) {
								t.objectStoreNames.contains("remoteDocumentChanges") && t.deleteObjectStore("remoteDocumentChanges")
							}(t),
							function(t) {
								var e = t.objectStore(Wi.store);
								e.createIndex(Wi.readTimeIndex, Wi.readTimeIndexPath, {
									unique: !1
								}), e.createIndex(Wi.collectionReadTimeIndex, Wi.collectionReadTimeIndexPath, {
									unique: !1
								})
							}(e)
						}))), n < 10 && r >= 10 && (a = a.next((function() {
							return i.rewriteCanonicalIds(o)
						}))), a
					}, t.prototype.addDocumentGlobal = function(t) {
						var e = 0;
						return t.store(Wi.store).ss((function(t, n) {
							e += Ri(n)
						})).next((function() {
							var n = new Hi(e);
							return t.store(Hi.store).put(Hi.key, n)
						}))
					}, t.prototype.removeAcknowledgedMutations = function(t) {
						var e = this,
							n = t.store(Vi.store),
							r = t.store(zi.store);
						return n.Zn().next((function(n) {
							return vr.forEach(n, (function(n) {
								var i = IDBKeyRange.bound([n.userId, -1], [n.userId, n.lastAcknowledgedBatchId]);
								return r.Zn(zi.userMutationsIndex, i).next((function(r) {
									return vr.forEach(r, (function(r) {
										b(r.userId === n.userId);
										var i = _i(e.serializer, r);
										return ki(t, n.userId, i).next((function() {}))
									}))
								}))
							}))
						}))
					}, t.prototype.ensureSequenceNumbers = function(t) {
						var e = t.store(Qi.store),
							n = t.store(Wi.store);
						return t.store(Xi.store).get(Xi.key).next((function(t) {
							var r = [];
							return n.ss((function(n, i) {
								var o = new S(n),
									a = function(t) {
										return [0, li(t)]
									}(o);
								r.push(e.get(a).next((function(n) {
									return n ? vr.resolve() : function(n) {
										return e.put(new Qi(0, li(n), t.highestListenSequenceNumber))
									}(o)
								})))
							})).next((function() {
								return vr.$n(r)
							}))
						}))
					}, t.prototype.createCollectionParentIndex = function(t, e) {
						t.createObjectStore(Yi.store, {
							keyPath: Yi.keyPath
						});
						var n = e.store(Yi.store),
							r = new Mi,
							i = function(t) {
								if (r.add(t)) {
									var e = t._(),
										i = t.h();
									return n.put({
										collectionId: e,
										parent: li(i)
									})
								}
							};
						return e.store(Wi.store).ss({
							ns: !0
						}, (function(t, e) {
							var n = new S(t);
							return i(n.h())
						})).next((function() {
							return e.store(Bi.store).ss({
								ns: !0
							}, (function(t, e) {
								t[0];
								var n = t[1],
									r = (t[2], pi(n));
								return i(r.h())
							}))
						}))
					}, t.prototype.rewriteCanonicalIds = function(t) {
						var e = this,
							n = t.store(Ki.store);
						return n.ss((function(t, r) {
							var i = Ei(r),
								o = Ii(e.serializer, i);
							return n.put(o)
						}))
					}, t
				}(),
				Ui = function(t, e) {
					this.seconds = t, this.nanoseconds = e
				},
				Fi = function(t, e, n) {
					this.ownerId = t, this.allowTabSynchronization = e, this.leaseTimestampMs = n
				};
			Fi.store = "owner", Fi.key = "owner";
			var Vi = function(t, e, n) {
				this.userId = t, this.lastAcknowledgedBatchId = e, this.lastStreamToken = n
			};
			Vi.store = "mutationQueues", Vi.keyPath = "userId";
			var zi = function(t, e, n, r, i) {
				this.userId = t, this.batchId = e, this.localWriteTimeMs = n, this.baseMutations = r, this.mutations = i
			};
			zi.store = "mutations", zi.keyPath = "batchId", zi.userMutationsIndex = "userMutationsIndex", zi.userMutationsKeyPath = ["userId", "batchId"];
			var Bi = function() {
				function t() {}
				return t.prefixForUser = function(t) {
					return [t]
				}, t.prefixForPath = function(t, e) {
					return [t, li(e)]
				}, t.key = function(t, e, n) {
					return [t, li(e), n]
				}, t
			}();
			Bi.store = "documentMutations", Bi.PLACEHOLDER = new Bi;
			var qi = function(t, e) {
					this.path = t, this.readTime = e
				},
				Gi = function(t, e) {
					this.path = t, this.version = e
				},
				Wi = function(t, e, n, r, i, o) {
					this.unknownDocument = t, this.noDocument = e, this.document = n, this.hasCommittedMutations = r, this.readTime = i, this.parentPath = o
				};
			Wi.store = "remoteDocuments", Wi.readTimeIndex = "readTimeIndex", Wi.readTimeIndexPath = "readTime", Wi.collectionReadTimeIndex = "collectionReadTimeIndex", Wi.collectionReadTimeIndexPath = ["parentPath", "readTime"];
			var Hi = function(t) {
				this.byteSize = t
			};
			Hi.store = "remoteDocumentGlobal", Hi.key = "remoteDocumentGlobalKey";
			var Ki = function(t, e, n, r, i, o, a) {
				this.targetId = t, this.canonicalId = e, this.readTime = n, this.resumeToken = r, this.lastListenSequenceNumber = i, this.lastLimboFreeSnapshotVersion = o, this.query = a
			};
			Ki.store = "targets", Ki.keyPath = "targetId", Ki.queryTargetsIndexName = "queryTargetsIndex", Ki.queryTargetsKeyPath = ["canonicalId", "targetId"];
			var Qi = function(t, e, n) {
				this.targetId = t, this.path = e, this.sequenceNumber = n
			};
			Qi.store = "targetDocuments", Qi.keyPath = ["targetId", "path"], Qi.documentTargetsIndex = "documentTargetsIndex", Qi.documentTargetsKeyPath = ["path", "targetId"];
			var Xi = function(t, e, n, r) {
				this.highestTargetId = t, this.highestListenSequenceNumber = e, this.lastRemoteSnapshotVersion = n, this.targetCount = r
			};
			Xi.key = "targetGlobalKey", Xi.store = "targetGlobal";
			var Yi = function(t, e) {
				this.collectionId = t, this.parent = e
			};

			function $i(t) {
				t.createObjectStore(Qi.store, {
					keyPath: Qi.keyPath
				}).createIndex(Qi.documentTargetsIndex, Qi.documentTargetsKeyPath, {
					unique: !0
				}), t.createObjectStore(Ki.store, {
					keyPath: Ki.keyPath
				}).createIndex(Ki.queryTargetsIndexName, Ki.queryTargetsKeyPath, {
					unique: !0
				}), t.createObjectStore(Xi.store)
			}
			Yi.store = "collectionParents", Yi.keyPath = ["collectionId", "parent"];
			var Ji = function(t, e, n, r) {
				this.clientId = t, this.updateTimeMs = e, this.networkEnabled = n, this.inForeground = r
			};
			Ji.store = "clientMetadata", Ji.keyPath = "clientId";
			var Zi = r.__spreadArrays(r.__spreadArrays(r.__spreadArrays([Vi.store, zi.store, Bi.store, Wi.store, Ki.store, Fi.store, Xi.store, Qi.store], [Ji.store]), [Hi.store]), [Yi.store]),
				to = function() {
					function t() {
						this.da = new Mi
					}
					return t.prototype.ko = function(t, e) {
						var n = this;
						if (!this.da.has(e)) {
							var r = e._(),
								i = e.h();
							t.Vr((function() {
								n.da.add(e)
							}));
							var o = {
								collectionId: r,
								parent: li(i)
							};
							return eo(t).put(o)
						}
						return vr.resolve()
					}, t.prototype.Ur = function(t, e) {
						var n = [],
							r = IDBKeyRange.bound([e, ""], [J(e), ""], !1, !0);
						return eo(t).Zn(r).next((function(t) {
							for (var r = 0, i = t; r < i.length; r++) {
								var o = i[r];
								if (o.collectionId !== e) break;
								n.push(pi(o.parent))
							}
							return n
						}))
					}, t
				}();

			function eo(t) {
				return co.Un(t, Yi.store)
			}
			var no = function() {
					function t(t) {
						this.wa = t
					}
					return t.prototype.next = function() {
						return this.wa += 2, this.wa
					}, t.ma = function() {
						return new t(0)
					}, t.Ta = function() {
						return new t(-1)
					}, t
				}(),
				ro = function() {
					function t(t, e) {
						this.Co = t, this.serializer = e
					}
					return t.prototype.Ea = function(t) {
						var e = this;
						return this.Ia(t).next((function(n) {
							var r = new no(n.highestTargetId);
							return n.highestTargetId = r.next(), e.Aa(t, n).next((function() {
								return n.highestTargetId
							}))
						}))
					}, t.prototype.Ra = function(t) {
						return this.Ia(t).next((function(t) {
							return st.Y(new ut(t.lastRemoteSnapshotVersion.seconds, t.lastRemoteSnapshotVersion.nanoseconds))
						}))
					}, t.prototype.Pa = function(t) {
						return this.Ia(t).next((function(t) {
							return t.highestListenSequenceNumber
						}))
					}, t.prototype.ga = function(t, e, n) {
						var r = this;
						return this.Ia(t).next((function(i) {
							return i.highestListenSequenceNumber = e, n && (i.lastRemoteSnapshotVersion = n.X()), e > i.highestListenSequenceNumber && (i.highestListenSequenceNumber = e), r.Aa(t, i)
						}))
					}, t.prototype.ya = function(t, e) {
						var n = this;
						return this.Va(t, e).next((function() {
							return n.Ia(t).next((function(r) {
								return r.targetCount += 1, n.pa(e, r), n.Aa(t, r)
							}))
						}))
					}, t.prototype.ba = function(t, e) {
						return this.Va(t, e)
					}, t.prototype.va = function(t, e) {
						var n = this;
						return this.Sa(t, e.targetId).next((function() {
							return io(t).delete(e.targetId)
						})).next((function() {
							return n.Ia(t)
						})).next((function(e) {
							return b(e.targetCount > 0), e.targetCount -= 1, n.Aa(t, e)
						}))
					}, t.prototype.Vo = function(t, e, n) {
						var r = this,
							i = 0,
							o = [];
						return io(t).ss((function(a, u) {
							var s = Ei(u);
							s.sequenceNumber <= e && null === n.get(s.targetId) && (i++, o.push(r.va(t, s)))
						})).next((function() {
							return vr.$n(o)
						})).next((function() {
							return i
						}))
					}, t.prototype.De = function(t, e) {
						return io(t).ss((function(t, n) {
							var r = Ei(n);
							e(r)
						}))
					}, t.prototype.Ia = function(t) {
						return oo(t).get(Xi.key).next((function(t) {
							return b(null !== t), t
						}))
					}, t.prototype.Aa = function(t, e) {
						return oo(t).put(Xi.key, e)
					}, t.prototype.Va = function(t, e) {
						return io(t).put(Ii(this.serializer, e))
					}, t.prototype.pa = function(t, e) {
						var n = !1;
						return t.targetId > e.highestTargetId && (e.highestTargetId = t.targetId, n = !0), t.sequenceNumber > e.highestListenSequenceNumber && (e.highestListenSequenceNumber = t.sequenceNumber, n = !0), n
					}, t.prototype.Da = function(t) {
						return this.Ia(t).next((function(t) {
							return t.targetCount
						}))
					}, t.prototype.Ca = function(t, e) {
						var n = dt(e),
							r = IDBKeyRange.bound([n, Number.NEGATIVE_INFINITY], [n, Number.POSITIVE_INFINITY]),
							i = null;
						return io(t).ss({
							range: r,
							index: Ki.queryTargetsIndexName
						}, (function(t, n, r) {
							var o = Ei(n);
							vt(e, o.target) && (i = o, r.done())
						})).next((function() {
							return i
						}))
					}, t.prototype.Na = function(t, e, n) {
						var r = this,
							i = [],
							o = ao(t);
						return e.forEach((function(e) {
							var a = li(e.path);
							i.push(o.put(new Qi(n, a))), i.push(r.Co.Fa(t, n, e))
						})), vr.$n(i)
					}, t.prototype.$a = function(t, e, n) {
						var r = this,
							i = ao(t);
						return vr.forEach(e, (function(e) {
							var o = li(e.path);
							return vr.$n([i.delete([n, o]), r.Co.xa(t, n, e)])
						}))
					}, t.prototype.Sa = function(t, e) {
						var n = ao(t),
							r = IDBKeyRange.bound([e], [e + 1], !1, !0);
						return n.delete(r)
					}, t.prototype.ka = function(t, e) {
						var n = IDBKeyRange.bound([e], [e + 1], !1, !0),
							r = ao(t),
							i = Lt();
						return r.ss({
							range: n,
							ns: !0
						}, (function(t, e, n) {
							var r = pi(t[1]),
								o = new A(r);
							i = i.add(o)
						})).next((function() {
							return i
						}))
					}, t.prototype.zo = function(t, e) {
						var n = li(e.path),
							r = IDBKeyRange.bound([n], [J(n)], !1, !0),
							i = 0;
						return ao(t).ss({
							index: Qi.documentTargetsIndex,
							ns: !0,
							range: r
						}, (function(t, e, n) {
							var r = t[0];
							t[1], 0 !== r && (i++, n.done())
						})).next((function() {
							return i > 0
						}))
					}, t.prototype.qe = function(t, e) {
						return io(t).get(e).next((function(t) {
							return t ? Ei(t) : null
						}))
					}, t
				}();

			function io(t) {
				return co.Un(t, Ki.store)
			}

			function oo(t) {
				return co.Un(t, Xi.store)
			}

			function ao(t) {
				return co.Un(t, Qi.store)
			}
			var uo = "Failed to obtain exclusive access to the persistence layer. To allow shared access, make sure to invoke `enablePersistence()` with `synchronizeTabs:true` in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",
				so = function(t) {
					function e(e, n) {
						var r = this;
						return (r = t.call(this) || this).Wo = e, r.Ma = n, r
					}
					return r.__extends(e, t), e
				}(ei),
				co = function() {
					function t(e, n, r, i, o, a, u, s, c, h) {
						if (this.allowTabSynchronization = e, this.persistenceKey = n, this.clientId = r, this._n = o, this.window = a, this.document = u, this.Oa = c, this.La = h, this.Ba = null, this.qa = !1, this.isPrimary = !1, this.networkEnabled = !0, this.Ua = null, this.inForeground = !1, this.Qa = null, this.Wa = null, this.ja = Number.NEGATIVE_INFINITY, this.Ka = function(t) {
								return Promise.resolve()
							}, !t.On()) throw new f(l.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
						this.Co = new ho(this, i), this.Ga = n + "main", this.serializer = new di(s), this.za = new mr(this.Ga, 10, new ji(this.serializer)), this.Ha = new ro(this.Co, this.serializer), this.Sr = new to, this.br = new Oi(this.serializer, this.Sr), this.window && this.window.localStorage ? this.Ya = this.window.localStorage : (this.Ya = null, !1 === h && v("IndexedDbPersistence", "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))
					}
					return t.Un = function(t, e) {
						if (t instanceof so) return mr.Un(t.Wo, e);
						throw g()
					}, t.prototype.start = function() {
						var t = this;
						return this.Ja().then((function() {
							if (!t.isPrimary && !t.allowTabSynchronization) throw new f(l.FAILED_PRECONDITION, uo);
							return t.Xa(), t.Za(), t.tc(), t.runTransaction("getHighestListenSequenceNumber", "readonly", (function(e) {
								return t.Ha.Pa(e)
							}))
						})).then((function(e) {
							t.Ba = new Vr(e, t.Oa)
						})).then((function() {
							t.qa = !0
						})).catch((function(e) {
							return t.za && t.za.close(), Promise.reject(e)
						}))
					}, t.prototype.ec = function(t) {
						var e = this;
						return this.Ka = function(n) {
							return r.__awaiter(e, void 0, void 0, (function() {
								return r.__generator(this, (function(e) {
									return this.Ti ? [2, t(n)] : [2]
								}))
							}))
						}, t(this.isPrimary)
					}, t.prototype.nc = function(t) {
						var e = this;
						this.za.jn((function(n) {
							return r.__awaiter(e, void 0, void 0, (function() {
								return r.__generator(this, (function(e) {
									switch (e.label) {
										case 0:
											return null === n.newVersion ? [4, t()] : [3, 2];
										case 1:
											e.sent(), e.label = 2;
										case 2:
											return [2]
									}
								}))
							}))
						}))
					}, t.prototype.sc = function(t) {
						var e = this;
						this.networkEnabled !== t && (this.networkEnabled = t, this._n.ds((function() {
							return r.__awaiter(e, void 0, void 0, (function() {
								return r.__generator(this, (function(t) {
									switch (t.label) {
										case 0:
											return this.Ti ? [4, this.Ja()] : [3, 2];
										case 1:
											t.sent(), t.label = 2;
										case 2:
											return [2]
									}
								}))
							}))
						})))
					}, t.prototype.Ja = function() {
						var t = this;
						return this.runTransaction("updateClientMetadataAndTryBecomePrimary", "readwrite", (function(e) {
							return fo(e).put(new Ji(t.clientId, Date.now(), t.networkEnabled, t.inForeground)).next((function() {
								if (t.isPrimary) return t.ic(e).next((function(e) {
									e || (t.isPrimary = !1, t._n.Ds((function() {
										return t.Ka(!1)
									})))
								}))
							})).next((function() {
								return t.rc(e)
							})).next((function(n) {
								return t.isPrimary && !n ? t.oc(e).next((function() {
									return !1
								})) : !!n && t.ac(e).next((function() {
									return !0
								}))
							}))
						})).catch((function(e) {
							if (br(e)) return d("IndexedDbPersistence", "Failed to extend owner lease: ", e), t.isPrimary;
							if (!t.allowTabSynchronization) throw e;
							return d("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", e), !1
						})).then((function(e) {
							t.isPrimary !== e && t._n.Ds((function() {
								return t.Ka(e)
							})), t.isPrimary = e
						}))
					}, t.prototype.ic = function(t) {
						var e = this;
						return lo(t).get(Fi.key).next((function(t) {
							return vr.resolve(e.cc(t))
						}))
					}, t.prototype.uc = function(t) {
						return fo(t).delete(this.clientId)
					}, t.prototype.hc = function() {
						return r.__awaiter(this, void 0, void 0, (function() {
							var e, n, i, o, a = this;
							return r.__generator(this, (function(r) {
								switch (r.label) {
									case 0:
										return !this.isPrimary || this.lc(this.ja, 18e5) ? [3, 2] : (this.ja = Date.now(), [4, this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", (function(e) {
											var n = t.Un(e, Ji.store);
											return n.Zn().next((function(t) {
												var e = a._c(t, 18e5),
													r = t.filter((function(t) {
														return -1 === e.indexOf(t)
													}));
												return vr.forEach(r, (function(t) {
													return n.delete(t.clientId)
												})).next((function() {
													return r
												}))
											}))
										})).catch((function() {
											return []
										}))]);
									case 1:
										if (e = r.sent(), this.Ya)
											for (n = 0, i = e; n < i.length; n++) o = i[n], this.Ya.removeItem(this.fc(o.clientId));
										r.label = 2;
									case 2:
										return [2]
								}
							}))
						}))
					}, t.prototype.tc = function() {
						var t = this;
						this.Wa = this._n.gn("client_metadata_refresh", 4e3, (function() {
							return t.Ja().then((function() {
								return t.hc()
							})).then((function() {
								return t.tc()
							}))
						}))
					}, t.prototype.cc = function(t) {
						return !!t && t.ownerId === this.clientId
					}, t.prototype.rc = function(t) {
						var e = this;
						return this.La ? vr.resolve(!0) : lo(t).get(Fi.key).next((function(n) {
							if (null !== n && e.lc(n.leaseTimestampMs, 5e3) && !e.dc(n.ownerId)) {
								if (e.cc(n) && e.networkEnabled) return !0;
								if (!e.cc(n)) {
									if (!n.allowTabSynchronization) throw new f(l.FAILED_PRECONDITION, uo);
									return !1
								}
							}
							return !(!e.networkEnabled || !e.inForeground) || fo(t).Zn().next((function(t) {
								return void 0 === e._c(t, 5e3).find((function(t) {
									if (e.clientId !== t.clientId) {
										var n = !e.networkEnabled && t.networkEnabled,
											r = !e.inForeground && t.inForeground,
											i = e.networkEnabled === t.networkEnabled;
										if (n || r && i) return !0
									}
									return !1
								}))
							}))
						})).next((function(t) {
							return e.isPrimary !== t && d("IndexedDbPersistence", "Client " + (t ? "is" : "is not") + " eligible for a primary lease."), t
						}))
					}, t.prototype.Si = function() {
						return r.__awaiter(this, void 0, void 0, (function() {
							var t = this;
							return r.__generator(this, (function(e) {
								switch (e.label) {
									case 0:
										return this.qa = !1, this.wc(), this.Wa && (this.Wa.cancel(), this.Wa = null), this.mc(), this.Tc(), [4, this.za.runTransaction("readwrite", [Fi.store, Ji.store], (function(e) {
											var n = new so(e, Vr.oi);
											return t.oc(n).next((function() {
												return t.uc(n)
											}))
										}))];
									case 1:
										return e.sent(), this.za.close(), this.Ec(), [2]
								}
							}))
						}))
					}, t.prototype._c = function(t, e) {
						var n = this;
						return t.filter((function(t) {
							return n.lc(t.updateTimeMs, e) && !n.dc(t.clientId)
						}))
					}, t.prototype.Vi = function() {
						var t = this;
						return this.runTransaction("getActiveClients", "readonly", (function(e) {
							return fo(e).Zn().next((function(e) {
								return t._c(e, 18e5).map((function(t) {
									return t.clientId
								}))
							}))
						}))
					}, Object.defineProperty(t.prototype, "Ti", {
						get: function() {
							return this.qa
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.Ic = function(t) {
						return Ti.Fo(t, this.serializer, this.Sr, this.Co)
					}, t.prototype.Ac = function() {
						return this.Ha
					}, t.prototype.Rc = function() {
						return this.br
					}, t.prototype.Pc = function() {
						return this.Sr
					}, t.prototype.runTransaction = function(t, e, n) {
						var r = this;
						d("IndexedDbPersistence", "Starting transaction:", t);
						var i, o = "readonly" === e ? "readonly" : "readwrite";
						return this.za.runTransaction(o, Zi, (function(o) {
							return i = new so(o, r.Ba ? r.Ba.next() : Vr.oi), "readwrite-primary" === e ? r.ic(i).next((function(t) {
								return !!t || r.rc(i)
							})).next((function(e) {
								if (!e) throw v("Failed to obtain primary lease for action '" + t + "'."), r.isPrimary = !1, r._n.Ds((function() {
									return r.Ka(!1)
								})), new f(l.FAILED_PRECONDITION, ti);
								return n(i)
							})).next((function(t) {
								return r.ac(i).next((function() {
									return t
								}))
							})) : r.gc(i).next((function() {
								return n(i)
							}))
						})).then((function(t) {
							return i.pr(), t
						}))
					}, t.prototype.gc = function(t) {
						var e = this;
						return lo(t).get(Fi.key).next((function(t) {
							if (null !== t && e.lc(t.leaseTimestampMs, 5e3) && !e.dc(t.ownerId) && !e.cc(t) && !(e.La || e.allowTabSynchronization && t.allowTabSynchronization)) throw new f(l.FAILED_PRECONDITION, uo)
						}))
					}, t.prototype.ac = function(t) {
						var e = new Fi(this.clientId, this.allowTabSynchronization, Date.now());
						return lo(t).put(Fi.key, e)
					}, t.On = function() {
						return mr.On()
					}, t.prototype.oc = function(t) {
						var e = this,
							n = lo(t);
						return n.get(Fi.key).next((function(t) {
							return e.cc(t) ? (d("IndexedDbPersistence", "Releasing primary lease."), n.delete(Fi.key)) : vr.resolve()
						}))
					}, t.prototype.lc = function(t, e) {
						var n = Date.now();
						return !(t < n - e || t > n && (v("Detected an update time that is in the future: " + t + " > " + n), 1))
					}, t.prototype.Xa = function() {
						var t = this;
						null !== this.document && "function" == typeof this.document.addEventListener && (this.Qa = function() {
							t._n.ds((function() {
								return t.inForeground = "visible" === t.document.visibilityState, t.Ja()
							}))
						}, this.document.addEventListener("visibilitychange", this.Qa), this.inForeground = "visible" === this.document.visibilityState)
					}, t.prototype.mc = function() {
						this.Qa && (this.document.removeEventListener("visibilitychange", this.Qa), this.Qa = null)
					}, t.prototype.Za = function() {
						var t, e = this;
						"function" == typeof(null === (t = this.window) || void 0 === t ? void 0 : t.addEventListener) && (this.Ua = function() {
							e.wc(), e._n.ds((function() {
								return e.Si()
							}))
						}, this.window.addEventListener("unload", this.Ua))
					}, t.prototype.Tc = function() {
						this.Ua && (this.window.removeEventListener("unload", this.Ua), this.Ua = null)
					}, t.prototype.dc = function(t) {
						var e;
						try {
							var n = null !== (null === (e = this.Ya) || void 0 === e ? void 0 : e.getItem(this.fc(t)));
							return d("IndexedDbPersistence", "Client '" + t + "' " + (n ? "is" : "is not") + " zombied in LocalStorage"), n
						} catch (t) {
							return v("IndexedDbPersistence", "Failed to get zombied client id.", t), !1
						}
					}, t.prototype.wc = function() {
						if (this.Ya) try {
							this.Ya.setItem(this.fc(this.clientId), String(Date.now()))
						} catch (r) {
							v("Failed to set zombie client id.", r)
						}
					}, t.prototype.Ec = function() {
						if (this.Ya) try {
							this.Ya.removeItem(this.fc(this.clientId))
						} catch (r) {}
					}, t.prototype.fc = function(t) {
						return "firestore_zombie_" + this.persistenceKey + "_" + t
					}, t
				}();

			function lo(t) {
				return co.Un(t, Fi.store)
			}

			function fo(t) {
				return co.Un(t, Ji.store)
			}
			var ho = function() {
				function t(t, e) {
					this.db = t, this.do = new ci(this, e)
				}
				return t.prototype.Ro = function(t) {
					var e = this.yc(t);
					return this.db.Ac().Da(t).next((function(t) {
						return e.next((function(e) {
							return t + e
						}))
					}))
				}, t.prototype.yc = function(t) {
					var e = 0;
					return this.yo(t, (function(t) {
						e++
					})).next((function() {
						return e
					}))
				}, t.prototype.De = function(t, e) {
					return this.db.Ac().De(t, e)
				}, t.prototype.yo = function(t, e) {
					return this.Vc(t, (function(t, n) {
						return e(n)
					}))
				}, t.prototype.Fa = function(t, e, n) {
					return po(t, n)
				}, t.prototype.xa = function(t, e, n) {
					return po(t, n)
				}, t.prototype.Vo = function(t, e, n) {
					return this.db.Ac().Vo(t, e, n)
				}, t.prototype.Ko = function(t, e) {
					return po(t, e)
				}, t.prototype.bc = function(t, e) {
					return function(t, e) {
						var n = !1;
						return xi(t).rs((function(r) {
							return Si(t, r, e).next((function(t) {
								return t && (n = !0), vr.resolve(!t)
							}))
						})).next((function() {
							return n
						}))
					}(t, e)
				}, t.prototype.po = function(t, e) {
					var n = this,
						r = this.db.Rc().aa(),
						i = [],
						o = 0;
					return this.Vc(t, (function(a, u) {
						if (u <= e) {
							var s = n.bc(t, a).next((function(e) {
								if (!e) return o++, r.Ar(t, a).next((function() {
									return r.Ir(a), ao(t).delete([0, li(a.path)])
								}))
							}));
							i.push(s)
						}
					})).next((function() {
						return vr.$n(i)
					})).next((function() {
						return r.apply(t)
					})).next((function() {
						return o
					}))
				}, t.prototype.removeTarget = function(t, e) {
					var n = e.nt(t.Ma);
					return this.db.Ac().ba(t, n)
				}, t.prototype.vc = function(t, e) {
					return po(t, e)
				}, t.prototype.Vc = function(t, e) {
					var n, r = ao(t),
						i = Vr.oi;
					return r.ss({
						index: Qi.documentTargetsIndex
					}, (function(t, r) {
						var o = t[0],
							a = (t[1], r.path),
							u = r.sequenceNumber;
						0 === o ? (i !== Vr.oi && e(new A(pi(n)), i), i = u, n = a) : i = Vr.oi
					})).next((function() {
						i !== Vr.oi && e(new A(pi(n)), i)
					}))
				}, t.prototype.vo = function(t) {
					return this.db.Rc().ha(t)
				}, t
			}();

			function po(t, e) {
				return ao(t).put(function(t, e) {
					return new Qi(0, li(t.path), e)
				}(e, t.Ma))
			}

			function vo(t, e) {
				var n = t.projectId;
				return t.W || (n += "." + t.database), "firestore/" + e + "/" + n + "/"
			}
			var mo = function() {
				function t(t, e, n) {
					this.persistence = t, this.Sc = e, this.Dc = new It(Y), this.Cc = new at((function(t) {
						return dt(t)
					}), vt), this.Nc = st.min(), this.vr = t.Ic(n), this.Fc = t.Rc(), this.Ha = t.Ac(), this.$c = new ni(this.Fc, this.vr, this.persistence.Pc()), this.Sc.xc(this.$c)
				}
				return t.prototype.Eo = function(t) {
					var e = this;
					return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (function(n) {
						return t.bo(n, e.Dc)
					}))
				}, t
			}();

			function yo(t, e) {
				var n = w(t);
				return n.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (function(t) {
					var r = e.batch.keys(),
						i = n.Fc.aa({
							ua: !0
						});
					return function(t, e, n, r) {
						var i = n.batch,
							o = i.keys(),
							a = vr.resolve();
						return o.forEach((function(t) {
							a = a.next((function() {
								return r.Ar(e, t)
							})).next((function(e) {
								var o = e,
									a = n._r.get(t);
								b(null !== a), (!o || o.version.L(a) < 0) && (o = i.ar(t, o, n)) && r.Tr(o, n.lr)
							}))
						})), a.next((function() {
							return t.vr.Qo(e, i)
						}))
					}(n, t, e, i).next((function() {
						return i.apply(t)
					})).next((function() {
						return n.vr.Go(t)
					})).next((function() {
						return n.$c.$r(t, r)
					}))
				}))
			}

			function go(t) {
				var e = w(t);
				return e.persistence.runTransaction("Get last remote snapshot version", "readonly", (function(t) {
					return e.Ha.Ra(t)
				}))
			}

			function bo(t, e) {
				var n = w(t),
					r = e.et,
					i = n.Dc;
				return n.persistence.runTransaction("Apply remote event", "readwrite-primary", (function(t) {
					var o = n.Fc.aa({
						ua: !0
					});
					i = n.Dc;
					var a = [];
					e.Gt.forEach((function(e, o) {
						var u = i.get(o);
						if (u) {
							a.push(n.Ha.$a(t, e.ne, o).next((function() {
								return n.Ha.Na(t, e.te, o)
							})));
							var s = e.resumeToken;
							if (s.O() > 0) {
								var c = u.st(s, r).nt(t.Ma);
								i = i.rt(o, c),
									function(t, e, n) {
										return b(e.resumeToken.O() > 0), 0 === t.resumeToken.O() || e.et.J() - t.et.J() >= 3e8 || n.te.size + n.ee.size + n.ne.size > 0
									}(u, c, e) && a.push(n.Ha.ba(t, c))
							}
						}
					}));
					var u = xt(),
						s = Lt();
					if (e.Ht.forEach((function(t, e) {
							s = s.add(t)
						})), a.push(o.getEntries(t, s).next((function(i) {
							e.Ht.forEach((function(s, c) {
								var l = i.get(s);
								c instanceof On && c.version.isEqual(st.min()) ? (o.Ir(s, r), u = u.rt(s, c)) : null == l || c.version.L(l.version) > 0 || 0 === c.version.L(l.version) && l.hasPendingWrites ? (o.Tr(c, r), u = u.rt(s, c)) : d("LocalStore", "Ignoring outdated watch update for ", s, ". Current version:", l.version, " Watch version:", c.version), e.Yt.has(s) && a.push(n.persistence.Co.vc(t, s))
							}))
						}))), !r.isEqual(st.min())) {
						var c = n.Ha.Ra(t).next((function(e) {
							return n.Ha.ga(t, t.Ma, r)
						}));
						a.push(c)
					}
					return vr.$n(a).next((function() {
						return o.apply(t)
					})).next((function() {
						return n.$c.kr(t, u)
					}))
				})).then((function(t) {
					return n.Dc = i, t
				}))
			}

			function wo(t, e) {
				var n = w(t);
				return n.persistence.runTransaction("Get next mutation batch", "readonly", (function(t) {
					return void 0 === e && (e = -1), n.vr.Lo(t, e)
				}))
			}

			function _o(t, e) {
				var n = w(t);
				return n.persistence.runTransaction("Allocate target", "readwrite", (function(t) {
					var r;
					return n.Ha.Ca(t, e).next((function(i) {
						return i ? (r = i, vr.resolve(r)) : n.Ha.Ea(t).next((function(i) {
							return r = new bt(e, i, 0, t.Ma), n.Ha.ya(t, r).next((function() {
								return r
							}))
						}))
					}))
				})).then((function(t) {
					var r = n.Dc.get(t.targetId);
					return (null === r || t.et.L(r.et) > 0) && (n.Dc = n.Dc.rt(t.targetId, t), n.Cc.set(e, t.targetId)), t
				}))
			}

			function Eo(t, e, n) {
				return r.__awaiter(this, void 0, void 0, (function() {
					var i, o, a, u;
					return r.__generator(this, (function(r) {
						switch (r.label) {
							case 0:
								i = w(t), o = i.Dc.get(e), a = n ? "readwrite" : "readwrite-primary", r.label = 1;
							case 1:
								return r.trys.push([1, 4, , 5]), n ? [3, 3] : [4, i.persistence.runTransaction("Release target", a, (function(t) {
									return i.persistence.Co.removeTarget(t, o)
								}))];
							case 2:
								r.sent(), r.label = 3;
							case 3:
								return [3, 5];
							case 4:
								if (!br(u = r.sent())) throw u;
								return d("LocalStore", "Failed to update sequence numbers for target " + e + ": " + u), [3, 5];
							case 5:
								return i.Dc = i.Dc.remove(e), i.Cc.delete(o.target), [2]
						}
					}))
				}))
			}

			function Io(t, e, n) {
				var r = w(t),
					i = st.min(),
					o = Lt();
				return r.persistence.runTransaction("Execute query", "readonly", (function(t) {
					return function(t, e, n) {
						var r = w(t),
							i = r.Cc.get(n);
						return void 0 !== i ? vr.resolve(r.Dc.get(i)) : r.Ha.Ca(e, n)
					}(r, t, Bn(e)).next((function(e) {
						if (e) return i = e.lastLimboFreeSnapshotVersion, r.Ha.ka(t, e.targetId).next((function(t) {
							o = t
						}))
					})).next((function() {
						return r.Sc.Or(t, e, n ? i : st.min(), n ? o : Lt())
					})).next((function(t) {
						return {
							documents: t,
							kc: o
						}
					}))
				}))
			}

			function To(t, e) {
				var n = w(t),
					r = w(n.Ha),
					i = n.Dc.get(e);
				return i ? Promise.resolve(i.target) : n.persistence.runTransaction("Get target data", "readonly", (function(t) {
					return r.qe(t, e).next((function(t) {
						return t ? t.target : null
					}))
				}))
			}

			function So(t) {
				return r.__awaiter(this, void 0, void 0, (function() {
					return r.__generator(this, (function(e) {
						if (t.code !== l.FAILED_PRECONDITION || t.message !== ti) throw t;
						return d("LocalStore", "Unexpectedly lost primary lease"), [2]
					}))
				}))
			}
			var ko = function() {
					function t() {
						this.Mc = new kt(No.Oc), this.Lc = new kt(No.Bc)
					}
					return t.prototype.m = function() {
						return this.Mc.m()
					}, t.prototype.Fa = function(t, e) {
						var n = new No(t, e);
						this.Mc = this.Mc.add(n), this.Lc = this.Lc.add(n)
					}, t.prototype.qc = function(t, e) {
						var n = this;
						t.forEach((function(t) {
							return n.Fa(t, e)
						}))
					}, t.prototype.xa = function(t, e) {
						this.Uc(new No(t, e))
					}, t.prototype.Qc = function(t, e) {
						var n = this;
						t.forEach((function(t) {
							return n.xa(t, e)
						}))
					}, t.prototype.Wc = function(t) {
						var e = this,
							n = new A(new S([])),
							r = new No(n, t),
							i = new No(n, t + 1),
							o = [];
						return this.Lc.Nt([r, i], (function(t) {
							e.Uc(t), o.push(t.key)
						})), o
					}, t.prototype.jc = function() {
						var t = this;
						this.Mc.forEach((function(e) {
							return t.Uc(e)
						}))
					}, t.prototype.Uc = function(t) {
						this.Mc = this.Mc.delete(t), this.Lc = this.Lc.delete(t)
					}, t.prototype.Kc = function(t) {
						var e = new A(new S([])),
							n = new No(e, t),
							r = new No(e, t + 1),
							i = Lt();
						return this.Lc.Nt([n, r], (function(t) {
							i = i.add(t.key)
						})), i
					}, t.prototype.zo = function(t) {
						var e = new No(t, 0),
							n = this.Mc.$t(e);
						return null !== n && t.isEqual(n.key)
					}, t
				}(),
				No = function() {
					function t(t, e) {
						this.key = t, this.Gc = e
					}
					return t.Oc = function(t, e) {
						return A.i(t.key, e.key) || Y(t.Gc, e.Gc)
					}, t.Bc = function(t, e) {
						return Y(t.Gc, e.Gc) || A.i(t.key, e.key)
					}, t
				}(),
				Ao = function(t, e) {
					this.user = e, this.type = "OAuth", this.zc = {}, this.zc.Authorization = "Bearer " + t
				},
				xo = function() {
					function t() {
						this.Hc = null
					}
					return t.prototype.getToken = function() {
						return Promise.resolve(null)
					}, t.prototype.Yc = function() {}, t.prototype.Jc = function(t) {
						this.Hc = t, t(Fr.UNAUTHENTICATED)
					}, t.prototype.Xc = function() {
						this.Hc = null
					}, t
				}(),
				Oo = function() {
					function t(t) {
						var e = this;
						this.Zc = null, this.currentUser = Fr.UNAUTHENTICATED, this.tu = !1, this.eu = 0, this.Hc = null, this.forceRefresh = !1, this.Zc = function() {
							e.eu++, e.currentUser = e.nu(), e.tu = !0, e.Hc && e.Hc(e.currentUser)
						}, this.eu = 0, this.auth = t.getImmediate({
							optional: !0
						}), this.auth ? this.auth.addAuthTokenListener(this.Zc) : (this.Zc(null), t.get().then((function(t) {
							e.auth = t, e.Zc && e.auth.addAuthTokenListener(e.Zc)
						}), (function() {})))
					}
					return t.prototype.getToken = function() {
						var t = this,
							e = this.eu,
							n = this.forceRefresh;
						return this.forceRefresh = !1, this.auth ? this.auth.getToken(n).then((function(n) {
							return t.eu !== e ? (d("FirebaseCredentialsProvider", "getToken aborted due to token change."), t.getToken()) : n ? (b("string" == typeof n.accessToken), new Ao(n.accessToken, t.currentUser)) : null
						})) : Promise.resolve(null)
					}, t.prototype.Yc = function() {
						this.forceRefresh = !0
					}, t.prototype.Jc = function(t) {
						this.Hc = t, this.tu && t(this.currentUser)
					}, t.prototype.Xc = function() {
						this.auth && this.auth.removeAuthTokenListener(this.Zc), this.Zc = null, this.Hc = null
					}, t.prototype.nu = function() {
						var t = this.auth && this.auth.getUid();
						return b(null === t || "string" == typeof t), new Fr(t)
					}, t
				}(),
				Co = function() {
					function t(t, e) {
						this.su = t, this.iu = e, this.type = "FirstParty", this.user = Fr.ei
					}
					return Object.defineProperty(t.prototype, "zc", {
						get: function() {
							var t = {
									"X-Goog-AuthUser": this.iu
								},
								e = this.su.auth.ru([]);
							return e && (t.Authorization = e), t
						},
						enumerable: !1,
						configurable: !0
					}), t
				}(),
				Do = function() {
					function t(t, e) {
						this.su = t, this.iu = e
					}
					return t.prototype.getToken = function() {
						return Promise.resolve(new Co(this.su, this.iu))
					}, t.prototype.Jc = function(t) {
						t(Fr.ei)
					}, t.prototype.Xc = function() {}, t.prototype.Yc = function() {}, t
				}(),
				Po = function() {
					function t(t, e, n, r, i, o) {
						this._n = t, this.ou = n, this.au = r, this.cu = i, this.listener = o, this.state = 0, this.uu = 0, this.hu = null, this.stream = null, this.gs = new dr(t, e)
					}
					return t.prototype.lu = function() {
						return 1 === this.state || 2 === this.state || 4 === this.state
					}, t.prototype._u = function() {
						return 2 === this.state
					}, t.prototype.start = function() {
						3 !== this.state ? this.auth() : this.fu()
					}, t.prototype.stop = function() {
						return r.__awaiter(this, void 0, void 0, (function() {
							return r.__generator(this, (function(t) {
								switch (t.label) {
									case 0:
										return this.lu() ? [4, this.close(0)] : [3, 2];
									case 1:
										t.sent(), t.label = 2;
									case 2:
										return [2]
								}
							}))
						}))
					}, t.prototype.du = function() {
						this.state = 0, this.gs.reset()
					}, t.prototype.wu = function() {
						var t = this;
						this._u() && null === this.hu && (this.hu = this._n.gn(this.ou, 6e4, (function() {
							return t.mu()
						})))
					}, t.prototype.Tu = function(t) {
						this.Eu(), this.stream.send(t)
					}, t.prototype.mu = function() {
						return r.__awaiter(this, void 0, void 0, (function() {
							return r.__generator(this, (function(t) {
								return this._u() ? [2, this.close(0)] : [2]
							}))
						}))
					}, t.prototype.Eu = function() {
						this.hu && (this.hu.cancel(), this.hu = null)
					}, t.prototype.close = function(t, e) {
						return r.__awaiter(this, void 0, void 0, (function() {
							return r.__generator(this, (function(n) {
								switch (n.label) {
									case 0:
										return this.Eu(), this.gs.cancel(), this.uu++, 3 !== t ? this.gs.reset() : e && e.code === l.RESOURCE_EXHAUSTED ? (v(e.toString()), v("Using maximum backoff delay to prevent overloading the backend."), this.gs.An()) : e && e.code === l.UNAUTHENTICATED && this.cu.Yc(), null !== this.stream && (this.Iu(), this.stream.close(), this.stream = null), this.state = t, [4, this.listener.Au(e)];
									case 1:
										return n.sent(), [2]
								}
							}))
						}))
					}, t.prototype.Iu = function() {}, t.prototype.auth = function() {
						var t = this;
						this.state = 1;
						var e = this.Ru(this.uu),
							n = this.uu;
						this.cu.getToken().then((function(e) {
							t.uu === n && t.Pu(e)
						}), (function(n) {
							e((function() {
								var e = new f(l.UNKNOWN, "Fetching auth token failed: " + n.message);
								return t.gu(e)
							}))
						}))
					}, t.prototype.Pu = function(t) {
						var e = this,
							n = this.Ru(this.uu);
						this.stream = this.yu(t), this.stream.Vu((function() {
							n((function() {
								return e.state = 2, e.listener.Vu()
							}))
						})), this.stream.Au((function(t) {
							n((function() {
								return e.gu(t)
							}))
						})), this.stream.onMessage((function(t) {
							n((function() {
								return e.onMessage(t)
							}))
						}))
					}, t.prototype.fu = function() {
						var t = this;
						this.state = 4, this.gs.Rn((function() {
							return r.__awaiter(t, void 0, void 0, (function() {
								return r.__generator(this, (function(t) {
									return this.state = 0, this.start(), [2]
								}))
							}))
						}))
					}, t.prototype.gu = function(t) {
						return d("PersistentStream", "close with error: " + t), this.stream = null, this.close(3, t)
					}, t.prototype.Ru = function(t) {
						var e = this;
						return function(n) {
							e._n.ds((function() {
								return e.uu === t ? n() : (d("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve())
							}))
						}
					}, t
				}(),
				Ro = function(t) {
					function e(e, n, r, i, o) {
						var a = this;
						return (a = t.call(this, e, "listen_stream_connection_backoff", "listen_stream_idle", n, r, o) || this).serializer = i, a
					}
					return r.__extends(e, t), e.prototype.yu = function(t) {
						return this.au.pu("Listen", t)
					}, e.prototype.onMessage = function(t) {
						this.gs.reset();
						var e = function(t, e) {
								var n;
								if ("targetChange" in e) {
									e.targetChange;
									var r = function(t) {
											return "NO_CHANGE" === t ? 0 : "ADD" === t ? 1 : "REMOVE" === t ? 2 : "CURRENT" === t ? 3 : "RESET" === t ? 4 : g()
										}(e.targetChange.targetChangeType || "NO_CHANGE"),
										i = e.targetChange.targetIds || [],
										o = function(t, e) {
											return t.Ue ? (b(void 0 === e || "string" == typeof e), Z.fromBase64String(e || "")) : (b(void 0 === e || e instanceof Uint8Array), Z.fromUint8Array(e || new Uint8Array))
										}(t, e.targetChange.resumeToken),
										a = e.targetChange.cause,
										u = a && function(t) {
											var e = void 0 === t.code ? l.UNKNOWN : Et(t.code);
											return new f(e, t.message || "")
										}(a);
									n = new Wt(r, i, o, u || null)
								} else if ("documentChange" in e) {
									e.documentChange;
									var s = e.documentChange;
									s.document, s.document.name, s.document.updateTime;
									var c = Ne(t, s.document.name),
										h = Ie(s.document.updateTime),
										p = new Sn({
											mapValue: {
												fields: s.document.fields
											}
										}),
										d = new xn(c, h, p, {}),
										v = s.targetIds || [],
										m = s.removedTargetIds || [];
									n = new qt(v, m, d.key, d)
								} else if ("documentDelete" in e) {
									e.documentDelete;
									var y = e.documentDelete;
									y.document;
									var w = Ne(t, y.document),
										_ = y.readTime ? Ie(y.readTime) : st.min(),
										E = new On(w, _),
										I = y.removedTargetIds || [];
									n = new qt([], I, E.key, E)
								} else if ("documentRemove" in e) {
									e.documentRemove;
									var T = e.documentRemove;
									T.document;
									var S = Ne(t, T.document),
										k = T.removedTargetIds || [];
									n = new qt([], k, S, null)
								} else {
									if (!("filter" in e)) return g();
									e.filter;
									var N = e.filter;
									N.targetId;
									var A = N.count || 0,
										x = new wt(A),
										O = N.targetId;
									n = new Gt(O, x)
								}
								return n
							}(this.serializer, t),
							n = function(t) {
								if (!("targetChange" in t)) return st.min();
								var e = t.targetChange;
								return e.targetIds && e.targetIds.length ? st.min() : e.readTime ? Ie(e.readTime) : st.min()
							}(t);
						return this.listener.bu(e, n)
					}, e.prototype.vu = function(t) {
						var e = {};
						e.database = Oe(this.serializer), e.addTarget = function(t, e) {
							var n, r = e.target;
							return (n = mt(r) ? {
								documents: Le(t, r)
							} : {
								query: Me(t, r)
							}).targetId = e.targetId, e.resumeToken.O() > 0 && (n.resumeToken = _e(t, e.resumeToken)), n
						}(this.serializer, t);
						var n = function(t, e) {
							var n = function(t, e) {
								switch (e) {
									case 0:
										return null;
									case 1:
										return "existence-filter-mismatch";
									case 2:
										return "limbo-document";
									default:
										return g()
								}
							}(0, e.tt);
							return null == n ? null : {
								"goog-listen-tags": n
							}
						}(this.serializer, t);
						n && (e.labels = n), this.Tu(e)
					}, e.prototype.Su = function(t) {
						var e = {};
						e.database = Oe(this.serializer), e.removeTarget = t, this.Tu(e)
					}, e
				}(Po),
				Lo = function(t) {
					function e(e, n, r, i, o) {
						var a = this;
						return (a = t.call(this, e, "write_stream_connection_backoff", "write_stream_idle", n, r, o) || this).serializer = i, a.Du = !1, a
					}
					return r.__extends(e, t), Object.defineProperty(e.prototype, "Cu", {
						get: function() {
							return this.Du
						},
						enumerable: !1,
						configurable: !0
					}), e.prototype.start = function() {
						this.Du = !1, this.lastStreamToken = void 0, t.prototype.start.call(this)
					}, e.prototype.Iu = function() {
						this.Du && this.Nu([])
					}, e.prototype.yu = function(t) {
						return this.au.pu("Write", t)
					}, e.prototype.onMessage = function(t) {
						if (b(!!t.streamToken), this.lastStreamToken = t.streamToken, this.Du) {
							this.gs.reset();
							var e = function(t, e) {
									return t && t.length > 0 ? (b(void 0 !== e), t.map((function(t) {
										return function(t, e) {
											var n = t.updateTime ? Ie(t.updateTime) : Ie(e);
											n.isEqual(st.min()) && (n = Ie(e));
											var r = null;
											return t.transformResults && t.transformResults.length > 0 && (r = t.transformResults), new sn(n, r)
										}(t, e)
									}))) : []
								}(t.writeResults, t.commitTime),
								n = Ie(t.commitTime);
							return this.listener.Fu(n, e)
						}
						return b(!t.writeResults || 0 === t.writeResults.length), this.Du = !0, this.listener.$u()
					}, e.prototype.xu = function() {
						var t = {};
						t.database = Oe(this.serializer), this.Tu(t)
					}, e.prototype.Nu = function(t) {
						var e = this,
							n = {
								streamToken: this.lastStreamToken,
								writes: t.map((function(t) {
									return Pe(e.serializer, t)
								}))
							};
						this.Tu(n)
					}, e
				}(Po),
				Mo = function(t) {
					function e(e, n, r) {
						var i = this;
						return (i = t.call(this) || this).credentials = e, i.au = n, i.serializer = r, i.ku = !1, i
					}
					return r.__extends(e, t), e.prototype.Mu = function() {
						if (this.ku) throw new f(l.FAILED_PRECONDITION, "The client has already been terminated.")
					}, e.prototype.Ou = function(t, e, n) {
						var r = this;
						return this.Mu(), this.credentials.getToken().then((function(i) {
							return r.au.Ou(t, e, n, i)
						})).catch((function(t) {
							throw t.code === l.UNAUTHENTICATED && r.credentials.Yc(), t
						}))
					}, e.prototype.Lu = function(t, e, n) {
						var r = this;
						return this.Mu(), this.credentials.getToken().then((function(i) {
							return r.au.Lu(t, e, n, i)
						})).catch((function(t) {
							throw t.code === l.UNAUTHENTICATED && r.credentials.Yc(), t
						}))
					}, e.prototype.terminate = function() {
						this.ku = !1
					}, e
				}((function() {})),
				jo = function() {
					function t(t, e) {
						this.os = t, this.fi = e, this.state = "Unknown", this.Bu = 0, this.qu = null, this.Uu = !0
					}
					return t.prototype.Qu = function() {
						var t = this;
						0 === this.Bu && (this.Wu("Unknown"), this.qu = this.os.gn("online_state_timeout", 1e4, (function() {
							return t.qu = null, t.ju("Backend didn't respond within 10 seconds."), t.Wu("Offline"), Promise.resolve()
						})))
					}, t.prototype.Ku = function(t) {
						"Online" === this.state ? this.Wu("Unknown") : (this.Bu++, this.Bu >= 1 && (this.Gu(), this.ju("Connection failed 1 times. Most recent error: " + t.toString()), this.Wu("Offline")))
					}, t.prototype.set = function(t) {
						this.Gu(), this.Bu = 0, "Online" === t && (this.Uu = !1), this.Wu(t)
					}, t.prototype.Wu = function(t) {
						t !== this.state && (this.state = t, this.fi(t))
					}, t.prototype.ju = function(t) {
						var e = "Could not reach Cloud Firestore backend. " + t + "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
						this.Uu ? (v(e), this.Uu = !1) : d("OnlineStateTracker", e)
					}, t.prototype.Gu = function() {
						null !== this.qu && (this.qu.cancel(), this.qu = null)
					}, t
				}(),
				Uo = function() {
					function t(t, e, n, i, o) {
						var a = this;
						this.zu = t, this.Hu = e, this.os = n, this.Yu = [], this.Ju = new Map, this.Xu = null, this.Zu = new Set, this.th = {}, this.eh = o, this.eh.nh((function(t) {
							n.ds((function() {
								return r.__awaiter(a, void 0, void 0, (function() {
									return r.__generator(this, (function(t) {
										switch (t.label) {
											case 0:
												return Xo(this) ? (d("RemoteStore", "Restarting streams for network reachability change."), [4, function(t) {
													return r.__awaiter(this, void 0, void 0, (function() {
														var e;
														return r.__generator(this, (function(n) {
															switch (n.label) {
																case 0:
																	return (e = w(t)).Zu.add(4), [4, zo(e)];
																case 1:
																	return n.sent(), e.sh.du(), e.ih.du(), e.rh.set("Unknown"), e.Zu.delete(4), [4, Vo(e)];
																case 2:
																	return n.sent(), [2]
															}
														}))
													}))
												}(this)]) : [3, 2];
											case 1:
												t.sent(), t.label = 2;
											case 2:
												return [2]
										}
									}))
								}))
							}))
						})), this.rh = new jo(n, i), this.ih = function(t, e, n) {
							var r = w(t);
							return r.Mu(), new Ro(e, r.au, r.credentials, r.serializer, n)
						}(this.Hu, n, {
							Vu: $o.bind(null, this),
							Au: Jo.bind(null, this),
							bu: Zo.bind(null, this)
						}), this.sh = function(t, e, n) {
							var r = w(t);
							return r.Mu(), new Lo(e, r.au, r.credentials, r.serializer, n)
						}(this.Hu, n, {
							Vu: oa.bind(null, this),
							Au: sa.bind(null, this),
							$u: aa.bind(null, this),
							Fu: ua.bind(null, this)
						})
					}
					return t.prototype.start = function() {
						return Fo(this)
					}, t
				}();

			function Fo(t) {
				var e = w(t);
				return e.Zu.delete(0), Vo(e)
			}

			function Vo(t) {
				return r.__awaiter(this, void 0, void 0, (function() {
					return r.__generator(this, (function(e) {
						switch (e.label) {
							case 0:
								return Xo(t) ? (Qo(t) ? Ko(t) : t.rh.set("Unknown"), [4, na(t)]) : [3, 2];
							case 1:
								e.sent(), e.label = 2;
							case 2:
								return [2]
						}
					}))
				}))
			}

			function zo(t) {
				return r.__awaiter(this, void 0, void 0, (function() {
					return r.__generator(this, (function(e) {
						switch (e.label) {
							case 0:
								return [4, t.sh.stop()];
							case 1:
								return e.sent(), [4, t.ih.stop()];
							case 2:
								return e.sent(), t.Yu.length > 0 && (d("RemoteStore", "Stopping write stream with " + t.Yu.length + " pending writes"), t.Yu = []), Yo(t), [2]
						}
					}))
				}))
			}

			function Bo(t) {
				return r.__awaiter(this, void 0, void 0, (function() {
					var e;
					return r.__generator(this, (function(n) {
						switch (n.label) {
							case 0:
								return e = w(t), d("RemoteStore", "RemoteStore shutting down."), e.Zu.add(5), [4, zo(e)];
							case 1:
								return n.sent(), e.eh.Si(), e.rh.set("Unknown"), [2]
						}
					}))
				}))
			}

			function qo(t, e) {
				var n = w(t);
				n.Ju.has(e.targetId) || (n.Ju.set(e.targetId, e), Qo(n) ? Ko(n) : n.ih._u() && Wo(n, e))
			}

			function Go(t, e) {
				var n = w(t);
				n.Ju.delete(e), n.ih._u() && Ho(n, e), 0 === n.Ju.size && (n.ih._u() ? n.ih.wu() : Xo(n) && n.rh.set("Unknown"))
			}

			function Wo(t, e) {
				t.Xu.Ee(e.targetId), t.ih.vu(e)
			}

			function Ho(t, e) {
				t.Xu.Ee(e), t.ih.Su(e)
			}

			function Ko(t) {
				t.Xu = new Kt({
					Be: function(e) {
						return t.th.Be(e)
					},
					qe: function(e) {
						return t.Ju.get(e) || null
					}
				}), t.ih.start(), t.rh.Qu()
			}

			function Qo(t) {
				return Xo(t) && !t.ih.lu() && t.Ju.size > 0
			}

			function Xo(t) {
				return 0 === w(t).Zu.size
			}

			function Yo(t) {
				t.Xu = null
			}

			function $o(t) {
				return r.__awaiter(this, void 0, void 0, (function() {
					return r.__generator(this, (function(e) {
						return t.Ju.forEach((function(e, n) {
							Wo(t, e)
						})), [2]
					}))
				}))
			}

			function Jo(t, e) {
				return r.__awaiter(this, void 0, void 0, (function() {
					return r.__generator(this, (function(n) {
						return Yo(t), Qo(t) ? (t.rh.Ku(e), Ko(t)) : t.rh.set("Unknown"), [2]
					}))
				}))
			}

			function Zo(t, e, n) {
				return r.__awaiter(this, void 0, void 0, (function() {
					var i, o, a;
					return r.__generator(this, (function(u) {
						switch (u.label) {
							case 0:
								if (t.rh.set("Online"), !(e instanceof Wt && 2 === e.state && e.cause)) return [3, 6];
								u.label = 1;
							case 1:
								return u.trys.push([1, 3, , 5]), [4, function(t, e) {
									return r.__awaiter(this, void 0, void 0, (function() {
										var n, i, o, a;
										return r.__generator(this, (function(r) {
											switch (r.label) {
												case 0:
													n = e.cause, i = 0, o = e.targetIds, r.label = 1;
												case 1:
													return i < o.length ? (a = o[i], t.Ju.has(a) ? [4, t.th.oh(a, n)] : [3, 3]) : [3, 5];
												case 2:
													r.sent(), t.Ju.delete(a), t.Xu.removeTarget(a), r.label = 3;
												case 3:
													r.label = 4;
												case 4:
													return i++, [3, 1];
												case 5:
													return [2]
											}
										}))
									}))
								}(t, e)];
							case 2:
								return u.sent(), [3, 5];
							case 3:
								return i = u.sent(), d("RemoteStore", "Failed to remove targets %s: %s ", e.targetIds.join(","), i), [4, ta(t, i)];
							case 4:
								return u.sent(), [3, 5];
							case 5:
								return [3, 13];
							case 6:
								if (e instanceof qt ? t.Xu.pe(e) : e instanceof Gt ? t.Xu.$e(e) : t.Xu.Se(e), n.isEqual(st.min())) return [3, 13];
								u.label = 7;
							case 7:
								return u.trys.push([7, 11, , 13]), [4, go(t.zu)];
							case 8:
								return o = u.sent(), n.L(o) >= 0 ? [4, function(t, e) {
									var n = t.Xu.Me(e);
									return n.Gt.forEach((function(n, r) {
										if (n.resumeToken.O() > 0) {
											var i = t.Ju.get(r);
											i && t.Ju.set(r, i.st(n.resumeToken, e))
										}
									})), n.zt.forEach((function(e) {
										var n = t.Ju.get(e);
										if (n) {
											t.Ju.set(e, n.st(Z.B, n.et)), Ho(t, e);
											var r = new bt(n.target, e, 1, n.sequenceNumber);
											Wo(t, r)
										}
									})), t.th.ah(n)
								}(t, n)] : [3, 10];
							case 9:
								u.sent(), u.label = 10;
							case 10:
								return [3, 13];
							case 11:
								return d("RemoteStore", "Failed to raise snapshot:", a = u.sent()), [4, ta(t, a)];
							case 12:
								return u.sent(), [3, 13];
							case 13:
								return [2]
						}
					}))
				}))
			}

			function ta(t, e, n) {
				return r.__awaiter(this, void 0, void 0, (function() {
					var i = this;
					return r.__generator(this, (function(o) {
						switch (o.label) {
							case 0:
								if (!br(e)) throw e;
								return t.Zu.add(1), [4, zo(t)];
							case 1:
								return o.sent(), t.rh.set("Offline"), n || (n = function() {
									return go(t.zu)
								}), t.os.Ds((function() {
									return r.__awaiter(i, void 0, void 0, (function() {
										return r.__generator(this, (function(e) {
											switch (e.label) {
												case 0:
													return d("RemoteStore", "Retrying IndexedDB access"), [4, n()];
												case 1:
													return e.sent(), t.Zu.delete(1), [4, Vo(t)];
												case 2:
													return e.sent(), [2]
											}
										}))
									}))
								})), [2]
						}
					}))
				}))
			}

			function ea(t, e) {
				return e().catch((function(n) {
					return ta(t, n, e)
				}))
			}

			function na(t) {
				return r.__awaiter(this, void 0, void 0, (function() {
					var e, n, i, o;
					return r.__generator(this, (function(r) {
						switch (r.label) {
							case 0:
								e = w(t), n = e.Yu.length > 0 ? e.Yu[e.Yu.length - 1].batchId : -1, r.label = 1;
							case 1:
								if (! function(t) {
										return Xo(t) && t.Yu.length < 10
									}(e)) return [3, 7];
								r.label = 2;
							case 2:
								return r.trys.push([2, 4, , 6]), [4, wo(e.zu, n)];
							case 3:
								return null === (i = r.sent()) ? (0 === e.Yu.length && e.sh.wu(), [3, 7]) : (n = i.batchId, function(t, e) {
									t.Yu.push(e), t.sh._u() && t.sh.Cu && t.sh.Nu(e.mutations)
								}(e, i), [3, 6]);
							case 4:
								return o = r.sent(), [4, ta(e, o)];
							case 5:
								return r.sent(), [3, 6];
							case 6:
								return [3, 1];
							case 7:
								return ra(e) && ia(e), [2]
						}
					}))
				}))
			}

			function ra(t) {
				return Xo(t) && !t.sh.lu() && t.Yu.length > 0
			}

			function ia(t) {
				t.sh.start()
			}

			function oa(t) {
				return r.__awaiter(this, void 0, void 0, (function() {
					return r.__generator(this, (function(e) {
						return t.sh.xu(), [2]
					}))
				}))
			}

			function aa(t) {
				return r.__awaiter(this, void 0, void 0, (function() {
					var e, n, i;
					return r.__generator(this, (function(r) {
						for (e = 0, n = t.Yu; e < n.length; e++) i = n[e], t.sh.Nu(i.mutations);
						return [2]
					}))
				}))
			}

			function ua(t, e, n) {
				return r.__awaiter(this, void 0, void 0, (function() {
					var i, o;
					return r.__generator(this, (function(r) {
						switch (r.label) {
							case 0:
								return i = t.Yu.shift(), o = Jr.from(i, e, n), [4, ea(t, (function() {
									return t.th.uh(o)
								}))];
							case 1:
								return r.sent(), [4, na(t)];
							case 2:
								return r.sent(), [2]
						}
					}))
				}))
			}

			function sa(t, e) {
				return r.__awaiter(this, void 0, void 0, (function() {
					return r.__generator(this, (function(n) {
						switch (n.label) {
							case 0:
								return e && t.sh.Cu ? [4, function(t, e) {
									return r.__awaiter(this, void 0, void 0, (function() {
										var n, i;
										return r.__generator(this, (function(r) {
											switch (r.label) {
												case 0:
													return _t(i = e.code) && i !== l.ABORTED ? (n = t.Yu.shift(), t.sh.du(), [4, ea(t, (function() {
														return t.th.hh(n.batchId, e)
													}))]) : [3, 3];
												case 1:
													return r.sent(), [4, na(t)];
												case 2:
													r.sent(), r.label = 3;
												case 3:
													return [2]
											}
										}))
									}))
								}(t, e)] : [3, 2];
							case 1:
								n.sent(), n.label = 2;
							case 2:
								return ra(t) && ia(t), [2]
						}
					}))
				}))
			}

			function ca(t, e) {
				return r.__awaiter(this, void 0, void 0, (function() {
					var n;
					return r.__generator(this, (function(r) {
						switch (r.label) {
							case 0:
								return n = w(t), e ? (n.Zu.delete(2), [4, Vo(n)]) : [3, 2];
							case 1:
								return r.sent(), [3, 5];
							case 2:
								return e ? [3, 4] : (n.Zu.add(2), [4, zo(n)]);
							case 3:
								r.sent(), n.rh.set("Unknown"), r.label = 4;
							case 4:
								r.label = 5;
							case 5:
								return [2]
						}
					}))
				}))
			}
			var la = function(t) {
					this.key = t
				},
				fa = function(t) {
					this.key = t
				},
				ha = function() {
					function t(t, e) {
						this.query = t, this.lh = e, this._h = null, this.Zt = !1, this.fh = Lt(), this.Qt = Lt(), this.dh = Yn(t), this.wh = new Ut(this.dh)
					}
					return Object.defineProperty(t.prototype, "mh", {
						get: function() {
							return this.lh
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.Th = function(t, e) {
						var n = this,
							r = e ? e.Eh : new Ft,
							i = e ? e.wh : this.wh,
							o = e ? e.Qt : this.Qt,
							a = i,
							u = !1,
							s = Mn(this.query) && i.size === this.query.limit ? i.last() : null,
							c = jn(this.query) && i.size === this.query.limit ? i.first() : null;
						if (t.ut((function(t, e) {
								var l = i.get(t),
									f = e instanceof xn ? e : null;
								f && (f = Xn(n.query, f) ? f : null);
								var h = !!l && n.Qt.has(l.key),
									p = !!f && (f.Ye || n.Qt.has(f.key) && f.hasCommittedMutations),
									d = !1;
								l && f ? l.data().isEqual(f.data()) ? h !== p && (r.track({
									type: 3,
									doc: f
								}), d = !0) : n.Ih(l, f) || (r.track({
									type: 2,
									doc: f
								}), d = !0, (s && n.dh(f, s) > 0 || c && n.dh(f, c) < 0) && (u = !0)) : !l && f ? (r.track({
									type: 0,
									doc: f
								}), d = !0) : l && !f && (r.track({
									type: 1,
									doc: l
								}), d = !0, (s || c) && (u = !0)), d && (f ? (a = a.add(f), o = p ? o.add(t) : o.delete(t)) : (a = a.delete(t), o = o.delete(t)))
							})), Mn(this.query) || jn(this.query))
							for (; a.size > this.query.limit;) {
								var l = Mn(this.query) ? a.last() : a.first();
								a = a.delete(l.key), o = o.delete(l.key), r.track({
									type: 1,
									doc: l
								})
							}
						return {
							wh: a,
							Eh: r,
							Ah: u,
							Qt: o
						}
					}, t.prototype.Ih = function(t, e) {
						return t.Ye && e.hasCommittedMutations && !e.Ye
					}, t.prototype.gr = function(t, e, n) {
						var r = this,
							i = this.wh;
						this.wh = t.wh, this.Qt = t.Qt;
						var o = t.Eh.qt();
						o.sort((function(t, e) {
							return function(t, e) {
								var n = function(t) {
									switch (t) {
										case 0:
											return 1;
										case 2:
										case 3:
											return 2;
										case 1:
											return 0;
										default:
											return g()
									}
								};
								return n(t) - n(e)
							}(t.type, e.type) || r.dh(t.doc, e.doc)
						})), this.Rh(n);
						var a = e ? this.Ph() : [],
							u = 0 === this.fh.size && this.Zt ? 1 : 0,
							s = u !== this._h;
						return this._h = u, 0 !== o.length || s ? {
							snapshot: new Vt(this.query, t.wh, i, o, t.Qt, 0 === u, s, !1),
							gh: a
						} : {
							gh: a
						}
					}, t.prototype.Us = function(t) {
						return this.Zt && "Offline" === t ? (this.Zt = !1, this.gr({
							wh: this.wh,
							Eh: new Ft,
							Qt: this.Qt,
							Ah: !1
						}, !1)) : {
							gh: []
						}
					}, t.prototype.yh = function(t) {
						return !this.lh.has(t) && !!this.wh.has(t) && !this.wh.get(t).Ye
					}, t.prototype.Rh = function(t) {
						var e = this;
						t && (t.te.forEach((function(t) {
							return e.lh = e.lh.add(t)
						})), t.ee.forEach((function(t) {})), t.ne.forEach((function(t) {
							return e.lh = e.lh.delete(t)
						})), this.Zt = t.Zt)
					}, t.prototype.Ph = function() {
						var t = this;
						if (!this.Zt) return [];
						var e = this.fh;
						this.fh = Lt(), this.wh.forEach((function(e) {
							t.yh(e.key) && (t.fh = t.fh.add(e.key))
						}));
						var n = [];
						return e.forEach((function(e) {
							t.fh.has(e) || n.push(new fa(e))
						})), this.fh.forEach((function(t) {
							e.has(t) || n.push(new la(t))
						})), n
					}, t.prototype.Vh = function(t) {
						this.lh = t.kc, this.fh = Lt();
						var e = this.Th(t.documents);
						return this.gr(e, !0)
					}, t.prototype.ph = function() {
						return Vt.Kt(this.query, this.wh, this.Qt, 0 === this._h)
					}, t
				}(),
				pa = function(t, e, n) {
					this.query = t, this.targetId = e, this.view = n
				},
				da = function(t) {
					this.key = t, this.bh = !1
				},
				va = function() {
					function t(t, e, n, r, i) {
						this.zu = t, this.Sh = e, this.Dh = n, this.currentUser = r, this.Ch = i, this.Nh = null, this.Fh = new at((function(t) {
							return Kn(t)
						}), Hn), this.$h = new Map, this.xh = [], this.kh = new It(A.i), this.Mh = new Map, this.Oh = new ko, this.Lh = {}, this.Bh = new Map, this.qh = no.Ta(), this.onlineState = "Unknown", this.Uh = void 0
					}
					return Object.defineProperty(t.prototype, "Qh", {
						get: function() {
							return !0 === this.Uh
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.subscribe = function(t) {
						this.Nh = t
					}, t.prototype.Wh = function(t) {}, t
				}();

			function ma(t, e) {
				return r.__awaiter(this, void 0, void 0, (function() {
					var n, i, o, a, u, s;
					return r.__generator(this, (function(r) {
						switch (r.label) {
							case 0:
								return (n = Ba(t)).Wh("listen()"), (a = n.Fh.get(e)) ? (i = a.targetId, n.Dh.Mi(i), o = a.view.ph(), [3, 4]) : [3, 1];
							case 1:
								return [4, _o(n.zu, Bn(e))];
							case 2:
								return u = r.sent(), s = n.Dh.Mi(u.targetId), i = u.targetId, [4, ya(n, e, i, "current" === s)];
							case 3:
								o = r.sent(), n.Qh && qo(n.Sh, u), r.label = 4;
							case 4:
								return [2, o]
						}
					}))
				}))
			}

			function ya(t, e, n, i) {
				return r.__awaiter(this, void 0, void 0, (function() {
					var o, a, u, s, c, l;
					return r.__generator(this, (function(f) {
						switch (f.label) {
							case 0:
								return t.jh = function(e, n, i) {
									return function(t, e, n, i) {
										return r.__awaiter(this, void 0, void 0, (function() {
											var o, a, u;
											return r.__generator(this, (function(r) {
												switch (r.label) {
													case 0:
														return (o = e.view.Th(n)).Ah ? [4, Io(t.zu, e.query, !1).then((function(t) {
															var n = t.documents;
															return e.view.Th(n, o)
														}))] : [3, 2];
													case 1:
														o = r.sent(), r.label = 2;
													case 2:
														return a = i && i.Gt.get(e.targetId), u = e.view.gr(o, t.Qh, a), [2, (Aa(t, e.targetId, u.gh), u.snapshot)]
												}
											}))
										}))
									}(t, e, n, i)
								}, [4, Io(t.zu, e, !0)];
							case 1:
								return o = f.sent(), a = new ha(e, o.kc), u = a.Th(o.documents), s = Bt.Xt(n, i && "Offline" !== t.onlineState), c = a.gr(u, t.Qh, s), Aa(t, n, c.gh), l = new pa(e, n, a), [2, (t.Fh.set(e, l), t.$h.has(n) ? t.$h.get(n).push(e) : t.$h.set(n, [e]), c.snapshot)]
						}
					}))
				}))
			}

			function ga(t, e) {
				return r.__awaiter(this, void 0, void 0, (function() {
					var n, i, o;
					return r.__generator(this, (function(r) {
						switch (r.label) {
							case 0:
								return (n = w(t)).Wh("unlisten()"), i = n.Fh.get(e), (o = n.$h.get(i.targetId)).length > 1 ? [2, (n.$h.set(i.targetId, o.filter((function(t) {
									return !Hn(t, e)
								}))), void n.Fh.delete(e))] : n.Qh ? (n.Dh.Li(i.targetId), n.Dh.Ni(i.targetId) ? [3, 2] : [4, Eo(n.zu, i.targetId, !1).then((function() {
									n.Dh.qi(i.targetId), Go(n.Sh, i.targetId), ka(n, i.targetId)
								})).catch(So)]) : [3, 3];
							case 1:
								r.sent(), r.label = 2;
							case 2:
								return [3, 5];
							case 3:
								return ka(n, i.targetId), [4, Eo(n.zu, i.targetId, !0)];
							case 4:
								r.sent(), r.label = 5;
							case 5:
								return [2]
						}
					}))
				}))
			}

			function ba(t, e) {
				return r.__awaiter(this, void 0, void 0, (function() {
					var n, i;
					return r.__generator(this, (function(r) {
						switch (r.label) {
							case 0:
								(n = w(t)).Wh("applyRemoteEvent()"), r.label = 1;
							case 1:
								return r.trys.push([1, 4, , 6]), [4, bo(n.zu, e)];
							case 2:
								return i = r.sent(), e.Gt.forEach((function(t, e) {
									var r = n.Mh.get(e);
									r && (b(t.te.size + t.ee.size + t.ne.size <= 1), t.te.size > 0 ? r.bh = !0 : t.ee.size > 0 ? b(r.bh) : t.ne.size > 0 && (b(r.bh), r.bh = !1))
								})), [4, Ca(n, i, e)];
							case 3:
								return r.sent(), [3, 6];
							case 4:
								return [4, So(r.sent())];
							case 5:
								return r.sent(), [3, 6];
							case 6:
								return [2]
						}
					}))
				}))
			}

			function wa(t, e, n) {
				var r = w(t);
				if (r.Qh && 0 === n || !r.Qh && 1 === n) {
					r.Wh("applyOnlineStateChange()");
					var i = [];
					r.Fh.forEach((function(t, n) {
						var r = n.view.Us(e);
						r.snapshot && i.push(r.snapshot)
					})), r.Nh.Kh(e), r.Nh.bu(i), r.onlineState = e, r.Qh && r.Dh.ji(e)
				}
			}

			function _a(t, e, n) {
				return r.__awaiter(this, void 0, void 0, (function() {
					var i, o, a, u, s, c;
					return r.__generator(this, (function(r) {
						switch (r.label) {
							case 0:
								return (i = w(t)).Wh("rejectListens()"), i.Dh.Ui(e, "rejected", n), o = i.Mh.get(e), (a = o && o.key) ? (u = (u = new It(A.i)).rt(a, new On(a, st.min())), s = Lt().add(a), c = new zt(st.min(), new Map, new kt(Y), u, s), [4, ba(i, c)]) : [3, 2];
							case 1:
								return r.sent(), i.kh = i.kh.remove(a), i.Mh.delete(e), Oa(i), [3, 4];
							case 2:
								return [4, Eo(i.zu, e, !1).then((function() {
									return ka(i, e, n)
								})).catch(So)];
							case 3:
								r.sent(), r.label = 4;
							case 4:
								return [2]
						}
					}))
				}))
			}

			function Ea(t, e) {
				return r.__awaiter(this, void 0, void 0, (function() {
					var n, i, o;
					return r.__generator(this, (function(r) {
						switch (r.label) {
							case 0:
								(n = w(t)).Wh("applySuccessfulWrite()"), i = e.batch.batchId, r.label = 1;
							case 1:
								return r.trys.push([1, 4, , 6]), [4, yo(n.zu, e)];
							case 2:
								return o = r.sent(), Sa(n, i, null), Ta(n, i), n.Dh.xi(i, "acknowledged"), [4, Ca(n, o)];
							case 3:
								return r.sent(), [3, 6];
							case 4:
								return [4, So(r.sent())];
							case 5:
								return r.sent(), [3, 6];
							case 6:
								return [2]
						}
					}))
				}))
			}

			function Ia(t, e, n) {
				return r.__awaiter(this, void 0, void 0, (function() {
					var i, o;
					return r.__generator(this, (function(r) {
						switch (r.label) {
							case 0:
								(i = w(t)).Wh("rejectFailedWrite()"), r.label = 1;
							case 1:
								return r.trys.push([1, 4, , 6]), [4, function(t, e) {
									var n = w(t);
									return n.persistence.runTransaction("Reject batch", "readwrite-primary", (function(t) {
										var r;
										return n.vr.Mo(t, e).next((function(e) {
											return b(null !== e), r = e.keys(), n.vr.Qo(t, e)
										})).next((function() {
											return n.vr.Go(t)
										})).next((function() {
											return n.$c.$r(t, r)
										}))
									}))
								}(i.zu, e)];
							case 2:
								return o = r.sent(), Sa(i, e, n), Ta(i, e), i.Dh.xi(e, "rejected", n), [4, Ca(i, o)];
							case 3:
								return r.sent(), [3, 6];
							case 4:
								return [4, So(r.sent())];
							case 5:
								return r.sent(), [3, 6];
							case 6:
								return [2]
						}
					}))
				}))
			}

			function Ta(t, e) {
				(t.Bh.get(e) || []).forEach((function(t) {
					t.resolve()
				})), t.Bh.delete(e)
			}

			function Sa(t, e, n) {
				var r = w(t),
					i = r.Lh[r.currentUser.Zs()];
				if (i) {
					var o = i.get(e);
					o && (n ? o.reject(n) : o.resolve(), i = i.remove(e)), r.Lh[r.currentUser.Zs()] = i
				}
			}

			function ka(t, e, n) {
				void 0 === n && (n = null), t.Dh.Li(e);
				for (var r = 0, i = t.$h.get(e); r < i.length; r++) {
					var o = i[r];
					t.Fh.delete(o), n && t.Nh.Gh(o, n)
				}
				t.$h.delete(e), t.Qh && t.Oh.Wc(e).forEach((function(e) {
					t.Oh.zo(e) || Na(t, e)
				}))
			}

			function Na(t, e) {
				var n = t.kh.get(e);
				null !== n && (Go(t.Sh, n), t.kh = t.kh.remove(e), t.Mh.delete(n), Oa(t))
			}

			function Aa(t, e, n) {
				for (var r = 0, i = n; r < i.length; r++) {
					var o = i[r];
					o instanceof la ? (t.Oh.Fa(o.key, e), xa(t, o)) : o instanceof fa ? (d("SyncEngine", "Document no longer in limbo: " + o.key), t.Oh.xa(o.key, e), t.Oh.zo(o.key) || Na(t, o.key)) : g()
				}
			}

			function xa(t, e) {
				var n = e.key;
				t.kh.get(n) || (d("SyncEngine", "New document in limbo: " + n), t.xh.push(n), Oa(t))
			}

			function Oa(t) {
				for (; t.xh.length > 0 && t.kh.size < t.Ch;) {
					var e = t.xh.shift(),
						n = t.qh.next();
					t.Mh.set(n, new da(e)), t.kh = t.kh.rt(e, n), qo(t.Sh, new bt(Bn(Ln(e.path)), n, 2, Vr.oi))
				}
			}

			function Ca(t, e, n) {
				return r.__awaiter(this, void 0, void 0, (function() {
					var i, o, a, u;
					return r.__generator(this, (function(s) {
						switch (s.label) {
							case 0:
								return i = w(t), o = [], a = [], u = [], i.Fh.forEach((function(t, r) {
									u.push(i.jh(r, e, n).then((function(t) {
										if (t) {
											i.Qh && i.Dh.Ui(r.targetId, t.fromCache ? "not-current" : "current"), o.push(t);
											var e = ri.Gr(r.targetId, t);
											a.push(e)
										}
									})))
								})), [4, Promise.all(u)];
							case 1:
								return s.sent(), i.Nh.bu(o), [4, function(t, e) {
									return r.__awaiter(this, void 0, void 0, (function() {
										var n, i, o, a, u, s, c, l, f;
										return r.__generator(this, (function(r) {
											switch (r.label) {
												case 0:
													n = w(t), r.label = 1;
												case 1:
													return r.trys.push([1, 3, , 4]), [4, n.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (function(t) {
														return vr.forEach(e, (function(e) {
															return vr.forEach(e.jr, (function(r) {
																return n.persistence.Co.Fa(t, e.targetId, r)
															})).next((function() {
																return vr.forEach(e.Kr, (function(r) {
																	return n.persistence.Co.xa(t, e.targetId, r)
																}))
															}))
														}))
													}))];
												case 2:
													return r.sent(), [3, 4];
												case 3:
													if (!br(i = r.sent())) throw i;
													return d("LocalStore", "Failed to update sequence numbers: " + i), [3, 4];
												case 4:
													for (o = 0, a = e; o < a.length; o++) u = a[o], s = u.targetId, u.fromCache || (c = n.Dc.get(s), l = c.et, f = c.it(l), n.Dc = n.Dc.rt(s, f));
													return [2]
											}
										}))
									}))
								}(i.zu, a)];
							case 2:
								return s.sent(), [2]
						}
					}))
				}))
			}

			function Da(t, e) {
				return r.__awaiter(this, void 0, void 0, (function() {
					var n, i;
					return r.__generator(this, (function(o) {
						switch (o.label) {
							case 0:
								return (n = w(t)).currentUser.isEqual(e) ? [3, 3] : (d("SyncEngine", "User change. New user:", e.Zs()), [4, function(t, e) {
									return r.__awaiter(this, void 0, void 0, (function() {
										var n, i, o, a;
										return r.__generator(this, (function(r) {
											switch (r.label) {
												case 0:
													return n = w(t), i = n.vr, o = n.$c, [4, n.persistence.runTransaction("Handle user change", "readonly", (function(t) {
														var r;
														return n.vr.qo(t).next((function(a) {
															return r = a, i = n.persistence.Ic(e), o = new ni(n.Fc, i, n.persistence.Pc()), i.qo(t)
														})).next((function(e) {
															for (var n = [], i = [], a = Lt(), u = 0, s = r; u < s.length; u++) {
																var c = s[u];
																n.push(c.batchId);
																for (var l = 0, f = c.mutations; l < f.length; l++) {
																	var h = f[l];
																	a = a.add(h.key)
																}
															}
															for (var p = 0, d = e; p < d.length; p++) {
																var v = d[p];
																i.push(v.batchId);
																for (var m = 0, y = v.mutations; m < y.length; m++) {
																	var g = y[m];
																	a = a.add(g.key)
																}
															}
															return o.$r(t, a).next((function(t) {
																return {
																	zh: t,
																	Hh: n,
																	Yh: i
																}
															}))
														}))
													}))];
												case 1:
													return a = r.sent(), [2, (n.vr = i, n.$c = o, n.Sc.xc(n.$c), a)]
											}
										}))
									}))
								}(n.zu, e)]);
							case 1:
								return i = o.sent(), n.currentUser = e,
									function(t, e) {
										t.Bh.forEach((function(t) {
											t.forEach((function(t) {
												t.reject(new f(l.CANCELLED, "'waitForPendingWrites' promise is rejected due to a user change."))
											}))
										})), t.Bh.clear()
									}(n), n.Dh.Wi(e, i.Hh, i.Yh), [4, Ca(n, i.zh)];
							case 2:
								o.sent(), o.label = 3;
							case 3:
								return [2]
						}
					}))
				}))
			}

			function Pa(t, e) {
				var n = w(t),
					r = n.Mh.get(e);
				if (r && r.bh) return Lt().add(r.key);
				var i = Lt(),
					o = n.$h.get(e);
				if (!o) return i;
				for (var a = 0, u = o; a < u.length; a++) {
					var s = u[a],
						c = n.Fh.get(s);
					i = i.xt(c.view.mh)
				}
				return i
			}

			function Ra(t, e) {
				return r.__awaiter(this, void 0, void 0, (function() {
					var n, i, o;
					return r.__generator(this, (function(r) {
						switch (r.label) {
							case 0:
								return [4, Io((n = w(t)).zu, e.query, !0)];
							case 1:
								return i = r.sent(), o = e.view.Vh(i), [2, (n.Qh && Aa(n, e.targetId, o.gh), o)]
						}
					}))
				}))
			}

			function La(t, e, n, i) {
				return r.__awaiter(this, void 0, void 0, (function() {
					var o, a;
					return r.__generator(this, (function(r) {
						switch (r.label) {
							case 0:
								return (o = w(t)).Wh("applyBatchState()"), [4, function(t, e) {
									var n = w(t),
										r = w(n.vr);
									return n.persistence.runTransaction("Lookup mutation documents", "readonly", (function(t) {
										return r.Oo(t, e).next((function(e) {
											return e ? n.$c.$r(t, e) : vr.resolve(null)
										}))
									}))
								}(o.zu, e)];
							case 1:
								return null === (a = r.sent()) ? [3, 6] : "pending" !== n ? [3, 3] : [4, na(o.Sh)];
							case 2:
								return r.sent(), [3, 4];
							case 3:
								"acknowledged" === n || "rejected" === n ? (Sa(o, e, i || null), function(t, e) {
									w(w(t).vr).jo(e)
								}(o.zu, e)) : g(), r.label = 4;
							case 4:
								return [4, Ca(o, a)];
							case 5:
								return r.sent(), [3, 7];
							case 6:
								d("SyncEngine", "Cannot apply mutation batch with id: " + e), r.label = 7;
							case 7:
								return [2]
						}
					}))
				}))
			}

			function Ma(t, e) {
				return r.__awaiter(this, void 0, void 0, (function() {
					var n, i, o, a, u, s, c, l;
					return r.__generator(this, (function(r) {
						switch (r.label) {
							case 0:
								return Ba(n = w(t)), qa(n), !0 !== e || !0 === n.Uh ? [3, 3] : (i = n.Dh.Di(), [4, ja(n, i.A())]);
							case 1:
								return o = r.sent(), n.Uh = !0, [4, ca(n.Sh, !0)];
							case 2:
								for (r.sent(), a = 0, u = o; a < u.length; a++) s = u[a], qo(n.Sh, s);
								return [3, 7];
							case 3:
								return !1 !== e || !1 === n.Uh ? [3, 7] : (c = [], l = Promise.resolve(), n.$h.forEach((function(t, e) {
									n.Dh.Bi(e) ? c.push(e) : l = l.then((function() {
										return ka(n, e), Eo(n.zu, e, !0)
									})), Go(n.Sh, e)
								})), [4, l]);
							case 4:
								return r.sent(), [4, ja(n, c)];
							case 5:
								return r.sent(),
									function(t) {
										var e = w(t);
										e.Mh.forEach((function(t, n) {
											Go(e.Sh, n)
										})), e.Oh.jc(), e.Mh = new Map, e.kh = new It(A.i)
									}(n), n.Uh = !1, [4, ca(n.Sh, !1)];
							case 6:
								r.sent(), r.label = 7;
							case 7:
								return [2]
						}
					}))
				}))
			}

			function ja(t, e, n) {
				return r.__awaiter(this, void 0, void 0, (function() {
					var n, i, o, a, u, s, c, l, f, h, p, d, v, m;
					return r.__generator(this, (function(r) {
						switch (r.label) {
							case 0:
								n = w(t), i = [], o = [], a = 0, u = e, r.label = 1;
							case 1:
								return a < u.length ? (s = u[a], c = void 0, (l = n.$h.get(s)) && 0 !== l.length ? [4, _o(n.zu, Bn(l[0]))] : [3, 7]) : [3, 13];
							case 2:
								c = r.sent(), f = 0, h = l, r.label = 3;
							case 3:
								return f < h.length ? (p = h[f], d = n.Fh.get(p), [4, Ra(n, d)]) : [3, 6];
							case 4:
								(v = r.sent()).snapshot && o.push(v.snapshot), r.label = 5;
							case 5:
								return f++, [3, 3];
							case 6:
								return [3, 11];
							case 7:
								return [4, To(n.zu, s)];
							case 8:
								return m = r.sent(), [4, _o(n.zu, m)];
							case 9:
								return c = r.sent(), [4, ya(n, Ua(m), s, !1)];
							case 10:
								r.sent(), r.label = 11;
							case 11:
								i.push(c), r.label = 12;
							case 12:
								return a++, [3, 1];
							case 13:
								return [2, (n.Nh.bu(o), i)]
						}
					}))
				}))
			}

			function Ua(t) {
				return Rn(t.path, t.collectionGroup, t.orderBy, t.filters, t.limit, "F", t.startAt, t.endAt)
			}

			function Fa(t) {
				var e = w(t);
				return w(w(e.zu).persistence).Vi()
			}

			function Va(t, e, n, i) {
				return r.__awaiter(this, void 0, void 0, (function() {
					var o, a, u;
					return r.__generator(this, (function(r) {
						switch (r.label) {
							case 0:
								return (o = w(t)).Uh ? (d("SyncEngine", "Ignoring unexpected query state notification."), [3, 8]) : [3, 1];
							case 1:
								if (!o.$h.has(e)) return [3, 8];
								switch (n) {
									case "current":
									case "not-current":
										return [3, 2];
									case "rejected":
										return [3, 5]
								}
								return [3, 7];
							case 2:
								return [4, function(t) {
									var e = w(t),
										n = w(e.Fc);
									return e.persistence.runTransaction("Get new document changes", "readonly", (function(t) {
										return n.ia(t, e.Nc)
									})).then((function(t) {
										var n = t.ra,
											r = t.readTime;
										return e.Nc = r, n
									}))
								}(o.zu)];
							case 3:
								return a = r.sent(), u = zt.Jt(e, "current" === n), [4, Ca(o, a, u)];
							case 4:
								return r.sent(), [3, 8];
							case 5:
								return [4, Eo(o.zu, e, !0)];
							case 6:
								return r.sent(), ka(o, e, i), [3, 8];
							case 7:
								g(), r.label = 8;
							case 8:
								return [2]
						}
					}))
				}))
			}

			function za(t, e, n) {
				return r.__awaiter(this, void 0, void 0, (function() {
					var i, o, a, u, s, c, l, f, h, p;
					return r.__generator(this, (function(v) {
						switch (v.label) {
							case 0:
								if (!(i = Ba(t)).Uh) return [3, 10];
								o = 0, a = e, v.label = 1;
							case 1:
								return o < a.length ? (u = a[o], i.$h.has(u) ? (d("SyncEngine", "Adding an already active target " + u), [3, 5]) : [4, To(i.zu, u)]) : [3, 6];
							case 2:
								return s = v.sent(), [4, _o(i.zu, s)];
							case 3:
								return c = v.sent(), [4, ya(i, Ua(s), c.targetId, !1)];
							case 4:
								v.sent(), qo(i.Sh, c), v.label = 5;
							case 5:
								return o++, [3, 1];
							case 6:
								l = function(t) {
									return r.__generator(this, (function(e) {
										switch (e.label) {
											case 0:
												return i.$h.has(t) ? [4, Eo(i.zu, t, !1).then((function() {
													Go(i.Sh, t), ka(i, t)
												})).catch(So)] : [3, 2];
											case 1:
												e.sent(), e.label = 2;
											case 2:
												return [2]
										}
									}))
								}, f = 0, h = n, v.label = 7;
							case 7:
								return f < h.length ? (p = h[f], [5, l(p)]) : [3, 10];
							case 8:
								v.sent(), v.label = 9;
							case 9:
								return f++, [3, 7];
							case 10:
								return [2]
						}
					}))
				}))
			}

			function Ba(t) {
				var e = w(t);
				return e.Sh.th.ah = ba.bind(null, e), e.Sh.th.Be = Pa.bind(null, e), e.Sh.th.oh = _a.bind(null, e), e
			}

			function qa(t) {
				var e = w(t);
				return e.Sh.th.uh = Ea.bind(null, e), e.Sh.th.hh = Ia.bind(null, e), e
			}
			var Ga = function() {
					function t() {}
					return t.prototype.xc = function(t) {
						this.Jh = t
					}, t.prototype.Or = function(t, e, n, r) {
						var i = this;
						return function(t) {
							return 0 === t.filters.length && null === t.limit && null == t.startAt && null == t.endAt && (0 === t.rn.length || 1 === t.rn.length && t.rn[0].field.p())
						}(e) || n.isEqual(st.min()) ? this.Xh(t, e) : this.Jh.$r(t, r).next((function(a) {
							var u = i.Zh(e, a);
							return (Mn(e) || jn(e)) && i.Ah(e.on, u, r, n) ? i.Xh(t, e) : (p() <= o.LogLevel.DEBUG && d("IndexFreeQueryEngine", "Re-using previous result from %s to execute query: %s", n.toString(), Qn(e)), i.Jh.Or(t, e, n).next((function(t) {
								return u.forEach((function(e) {
									t = t.rt(e.key, e)
								})), t
							})))
						}))
					}, t.prototype.Zh = function(t, e) {
						var n = new kt(Yn(t));
						return e.forEach((function(e, r) {
							r instanceof xn && Xn(t, r) && (n = n.add(r))
						})), n
					}, t.prototype.Ah = function(t, e, n, r) {
						if (n.size !== e.size) return !0;
						var i = "F" === t ? e.last() : e.first();
						return !!i && (i.hasPendingWrites || i.version.L(r) > 0)
					}, t.prototype.Xh = function(t, e) {
						return p() <= o.LogLevel.DEBUG && d("IndexFreeQueryEngine", "Using full collection scan to execute query:", Qn(e)), this.Jh.Or(t, e, st.min())
					}, t
				}(),
				Wa = function() {
					function t(t, e) {
						this.Sr = t, this.Co = e, this.vr = [], this.tl = 1, this.el = new kt(No.Oc)
					}
					return t.prototype.$o = function(t) {
						return vr.resolve(0 === this.vr.length)
					}, t.prototype.xo = function(t, e, n, r) {
						var i = this.tl;
						this.tl++, this.vr.length > 0 && this.vr[this.vr.length - 1];
						var o = new $r(i, e, n, r);
						this.vr.push(o);
						for (var a = 0, u = r; a < u.length; a++) {
							var s = u[a];
							this.el = this.el.add(new No(s.key, i)), this.Sr.ko(t, s.key.path.h())
						}
						return vr.resolve(o)
					}, t.prototype.Mo = function(t, e) {
						return vr.resolve(this.nl(e))
					}, t.prototype.Lo = function(t, e) {
						var n = e + 1,
							r = this.sl(n),
							i = r < 0 ? 0 : r;
						return vr.resolve(this.vr.length > i ? this.vr[i] : null)
					}, t.prototype.Bo = function() {
						return vr.resolve(0 === this.vr.length ? -1 : this.tl - 1)
					}, t.prototype.qo = function(t) {
						return vr.resolve(this.vr.slice())
					}, t.prototype.Cr = function(t, e) {
						var n = this,
							r = new No(e, 0),
							i = new No(e, Number.POSITIVE_INFINITY),
							o = [];
						return this.el.Nt([r, i], (function(t) {
							var e = n.nl(t.Gc);
							o.push(e)
						})), vr.resolve(o)
					}, t.prototype.Mr = function(t, e) {
						var n = this,
							r = new kt(Y);
						return e.forEach((function(t) {
							var e = new No(t, 0),
								i = new No(t, Number.POSITIVE_INFINITY);
							n.el.Nt([e, i], (function(t) {
								r = r.add(t.Gc)
							}))
						})), vr.resolve(this.il(r))
					}, t.prototype.Qr = function(t, e) {
						var n = e.path,
							r = n.length + 1,
							i = n;
						A.F(i) || (i = i.child(""));
						var o = new No(new A(i), 0),
							a = new kt(Y);
						return this.el.Ft((function(t) {
							var e = t.key.path;
							return !!n.T(e) && (e.length === r && (a = a.add(t.Gc)), !0)
						}), o), vr.resolve(this.il(a))
					}, t.prototype.il = function(t) {
						var e = this,
							n = [];
						return t.forEach((function(t) {
							var r = e.nl(t);
							null !== r && n.push(r)
						})), n
					}, t.prototype.Qo = function(t, e) {
						var n = this;
						b(0 === this.rl(e.batchId, "removed")), this.vr.shift();
						var r = this.el;
						return vr.forEach(e.mutations, (function(i) {
							var o = new No(i.key, e.batchId);
							return r = r.delete(o), n.Co.Ko(t, i.key)
						})).next((function() {
							n.el = r
						}))
					}, t.prototype.jo = function(t) {}, t.prototype.zo = function(t, e) {
						var n = new No(e, 0),
							r = this.el.$t(n);
						return vr.resolve(e.isEqual(r && r.key))
					}, t.prototype.Go = function(t) {
						return this.vr.length, vr.resolve()
					}, t.prototype.rl = function(t, e) {
						return this.sl(t)
					}, t.prototype.sl = function(t) {
						return 0 === this.vr.length ? 0 : t - this.vr[0].batchId
					}, t.prototype.nl = function(t) {
						var e = this.sl(t);
						return e < 0 || e >= this.vr.length ? null : this.vr[e]
					}, t
				}(),
				Ha = function() {
					function t(t, e) {
						this.Sr = t, this.ol = e, this.docs = new It(A.i), this.size = 0
					}
					return t.prototype.Tr = function(t, e, n) {
						var r = e.key,
							i = this.docs.get(r),
							o = i ? i.size : 0,
							a = this.ol(e);
						return this.docs = this.docs.rt(r, {
							Zo: e,
							size: a,
							readTime: n
						}), this.size += a - o, this.Sr.ko(t, r.path.h())
					}, t.prototype.Ir = function(t) {
						var e = this.docs.get(t);
						e && (this.docs = this.docs.remove(t), this.size -= e.size)
					}, t.prototype.Ar = function(t, e) {
						var n = this.docs.get(e);
						return vr.resolve(n ? n.Zo : null)
					}, t.prototype.getEntries = function(t, e) {
						var n = this,
							r = Ot();
						return e.forEach((function(t) {
							var e = n.docs.get(t);
							r = r.rt(t, e ? e.Zo : null)
						})), vr.resolve(r)
					}, t.prototype.Or = function(t, e, n) {
						for (var r = Dt(), i = new A(e.path.child("")), o = this.docs._t(i); o.It();) {
							var a = o.Et(),
								u = a.key,
								s = a.value,
								c = s.Zo,
								l = s.readTime;
							if (!e.path.T(u.path)) break;
							l.L(n) <= 0 || c instanceof xn && Xn(e, c) && (r = r.rt(c.key, c))
						}
						return vr.resolve(r)
					}, t.prototype.al = function(t, e) {
						return vr.forEach(this.docs, (function(t) {
							return e(t)
						}))
					}, t.prototype.aa = function(e) {
						return new t.ca(this)
					}, t.prototype.ha = function(t) {
						return vr.resolve(this.size)
					}, t
				}();
			Ha.ca = function(t) {
				function e(e) {
					var n = this;
					return (n = t.call(this) || this).la = e, n
				}
				return r.__extends(e, t), e.prototype.gr = function(t) {
					var e = this,
						n = [];
					return this.dr.forEach((function(r, i) {
						i ? n.push(e.la.Tr(t, i, e.readTime)) : e.la.Ir(r)
					})), vr.$n(n)
				}, e.prototype.Rr = function(t, e) {
					return this.la.Ar(t, e)
				}, e.prototype.Pr = function(t, e) {
					return this.la.getEntries(t, e)
				}, e
			}(Zr);
			var Ka = function() {
					function t(t) {
						this.persistence = t, this.cl = new at((function(t) {
							return dt(t)
						}), vt), this.lastRemoteSnapshotVersion = st.min(), this.highestTargetId = 0, this.ul = 0, this.hl = new ko, this.targetCount = 0, this.ll = no.ma()
					}
					return t.prototype.De = function(t, e) {
						return this.cl.forEach((function(t, n) {
							return e(n)
						})), vr.resolve()
					}, t.prototype.Ra = function(t) {
						return vr.resolve(this.lastRemoteSnapshotVersion)
					}, t.prototype.Pa = function(t) {
						return vr.resolve(this.ul)
					}, t.prototype.Ea = function(t) {
						return this.highestTargetId = this.ll.next(), vr.resolve(this.highestTargetId)
					}, t.prototype.ga = function(t, e, n) {
						return n && (this.lastRemoteSnapshotVersion = n), e > this.ul && (this.ul = e), vr.resolve()
					}, t.prototype.Va = function(t) {
						this.cl.set(t.target, t);
						var e = t.targetId;
						e > this.highestTargetId && (this.ll = new no(e), this.highestTargetId = e), t.sequenceNumber > this.ul && (this.ul = t.sequenceNumber)
					}, t.prototype.ya = function(t, e) {
						return this.Va(e), this.targetCount += 1, vr.resolve()
					}, t.prototype.ba = function(t, e) {
						return this.Va(e), vr.resolve()
					}, t.prototype.va = function(t, e) {
						return this.cl.delete(e.target), this.hl.Wc(e.targetId), this.targetCount -= 1, vr.resolve()
					}, t.prototype.Vo = function(t, e, n) {
						var r = this,
							i = 0,
							o = [];
						return this.cl.forEach((function(a, u) {
							u.sequenceNumber <= e && null === n.get(u.targetId) && (r.cl.delete(a), o.push(r.Sa(t, u.targetId)), i++)
						})), vr.$n(o).next((function() {
							return i
						}))
					}, t.prototype.Da = function(t) {
						return vr.resolve(this.targetCount)
					}, t.prototype.Ca = function(t, e) {
						var n = this.cl.get(e) || null;
						return vr.resolve(n)
					}, t.prototype.Na = function(t, e, n) {
						return this.hl.qc(e, n), vr.resolve()
					}, t.prototype.$a = function(t, e, n) {
						this.hl.Qc(e, n);
						var r = this.persistence.Co,
							i = [];
						return r && e.forEach((function(e) {
							i.push(r.Ko(t, e))
						})), vr.$n(i)
					}, t.prototype.Sa = function(t, e) {
						return this.hl.Wc(e), vr.resolve()
					}, t.prototype.ka = function(t, e) {
						var n = this.hl.Kc(e);
						return vr.resolve(n)
					}, t.prototype.zo = function(t, e) {
						return vr.resolve(this.hl.zo(e))
					}, t
				}(),
				Qa = function() {
					function t(t) {
						var e = this;
						this._l = {}, this.Ba = new Vr(0), this.qa = !1, this.qa = !0, this.Co = t(this), this.Ha = new Ka(this), this.Sr = new Li, this.br = new Ha(this.Sr, (function(t) {
							return e.Co.fl(t)
						}))
					}
					return t.prototype.start = function() {
						return Promise.resolve()
					}, t.prototype.Si = function() {
						return this.qa = !1, Promise.resolve()
					}, Object.defineProperty(t.prototype, "Ti", {
						get: function() {
							return this.qa
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.nc = function() {}, t.prototype.sc = function() {}, t.prototype.Pc = function() {
						return this.Sr
					}, t.prototype.Ic = function(t) {
						var e = this._l[t.Zs()];
						return e || (e = new Wa(this.Sr, this.Co), this._l[t.Zs()] = e), e
					}, t.prototype.Ac = function() {
						return this.Ha
					}, t.prototype.Rc = function() {
						return this.br
					}, t.prototype.runTransaction = function(t, e, n) {
						var r = this;
						d("MemoryPersistence", "Starting transaction:", t);
						var i = new Xa(this.Ba.next());
						return this.Co.dl(), n(i).next((function(t) {
							return r.Co.wl(i).next((function() {
								return t
							}))
						})).Nn().then((function(t) {
							return i.pr(), t
						}))
					}, t.prototype.ml = function(t, e) {
						return vr.xn(Object.values(this._l).map((function(n) {
							return function() {
								return n.zo(t, e)
							}
						})))
					}, t
				}(),
				Xa = function(t) {
					function e(e) {
						var n = this;
						return (n = t.call(this) || this).Ma = e, n
					}
					return r.__extends(e, t), e
				}(ei),
				Ya = function() {
					function t(t) {
						this.persistence = t, this.Tl = new ko, this.El = null
					}
					return t.Il = function(e) {
						return new t(e)
					}, Object.defineProperty(t.prototype, "Al", {
						get: function() {
							if (this.El) return this.El;
							throw g()
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.Fa = function(t, e, n) {
						return this.Tl.Fa(n, e), this.Al.delete(n.toString()), vr.resolve()
					}, t.prototype.xa = function(t, e, n) {
						return this.Tl.xa(n, e), this.Al.add(n.toString()), vr.resolve()
					}, t.prototype.Ko = function(t, e) {
						return this.Al.add(e.toString()), vr.resolve()
					}, t.prototype.removeTarget = function(t, e) {
						var n = this;
						this.Tl.Wc(e.targetId).forEach((function(t) {
							return n.Al.add(t.toString())
						}));
						var r = this.persistence.Ac();
						return r.ka(t, e.targetId).next((function(t) {
							t.forEach((function(t) {
								return n.Al.add(t.toString())
							}))
						})).next((function() {
							return r.va(t, e)
						}))
					}, t.prototype.dl = function() {
						this.El = new Set
					}, t.prototype.wl = function(t) {
						var e = this,
							n = this.persistence.Rc().aa();
						return vr.forEach(this.Al, (function(r) {
							var i = A.D(r);
							return e.Rl(t, i).next((function(t) {
								t || n.Ir(i)
							}))
						})).next((function() {
							return e.El = null, n.apply(t)
						}))
					}, t.prototype.vc = function(t, e) {
						var n = this;
						return this.Rl(t, e).next((function(t) {
							t ? n.Al.delete(e.toString()) : n.Al.add(e.toString())
						}))
					}, t.prototype.fl = function(t) {
						return 0
					}, t.prototype.Rl = function(t, e) {
						var n = this;
						return vr.xn([function() {
							return vr.resolve(n.Tl.zo(e))
						}, function() {
							return n.persistence.Ac().zo(t, e)
						}, function() {
							return n.persistence.ml(t, e)
						}])
					}, t
				}(),
				$a = function() {
					function t(t) {
						this.Pl = t.Pl, this.gl = t.gl
					}
					return t.prototype.Vu = function(t) {
						this.yl = t
					}, t.prototype.Au = function(t) {
						this.Vl = t
					}, t.prototype.onMessage = function(t) {
						this.pl = t
					}, t.prototype.close = function() {
						this.gl()
					}, t.prototype.send = function(t) {
						this.Pl(t)
					}, t.prototype.bl = function() {
						this.yl()
					}, t.prototype.vl = function(t) {
						this.Vl(t)
					}, t.prototype.Sl = function(t) {
						this.pl(t)
					}, t
				}(),
				Ja = {
					BatchGetDocuments: "batchGet",
					Commit: "commit",
					RunQuery: "runQuery"
				},
				Za = function(t) {
					function e(e) {
						var n = this;
						return (n = t.call(this, e) || this).forceLongPolling = e.forceLongPolling, n
					}
					return r.__extends(e, t), e.prototype.xl = function(t, e, n, r) {
						return new Promise((function(i, o) {
							var a = new u.XhrIo;
							a.listenOnce(u.EventType.COMPLETE, (function() {
								try {
									switch (a.getLastErrorCode()) {
										case u.ErrorCode.NO_ERROR:
											var e = a.getResponseJson();
											d("Connection", "XHR received:", JSON.stringify(e)), i(e);
											break;
										case u.ErrorCode.TIMEOUT:
											d("Connection", 'RPC "' + t + '" timed out'), o(new f(l.DEADLINE_EXCEEDED, "Request time out"));
											break;
										case u.ErrorCode.HTTP_ERROR:
											var n = a.getStatus();
											if (d("Connection", 'RPC "' + t + '" failed with status:', n, "response text:", a.getResponseText()), n > 0) {
												var r = a.getResponseJson().error;
												if (r && r.status && r.message) {
													var s = function(t) {
														var e = t.toLowerCase().replace("_", "-");
														return Object.values(l).indexOf(e) >= 0 ? e : l.UNKNOWN
													}(r.status);
													o(new f(s, r.message))
												} else o(new f(l.UNKNOWN, "Server responded with status " + a.getStatus()))
											} else o(new f(l.UNAVAILABLE, "Connection failed."));
											break;
										default:
											g()
									}
								} finally {
									d("Connection", 'RPC "' + t + '" completed.')
								}
							}));
							var s = JSON.stringify(r);
							a.send(e, "POST", s, n, 15)
						}))
					}, e.prototype.pu = function(t, e) {
						var n = [this.Cl, "/", "google.firestore.v1.Firestore", "/", t, "/channel"],
							r = u.createWebChannelTransport(),
							i = {
								httpSessionIdParam: "gsessionid",
								initMessageHeaders: {},
								messageUrlParams: {
									database: "projects/" + this.U.projectId + "/databases/" + this.U.database
								},
								sendRawJson: !0,
								supportsCrossDomainXhr: !0,
								internalChannelParams: {
									forwardChannelRequestTimeoutMs: 6e5
								},
								forceLongPolling: this.forceLongPolling
							};
						this.$l(i.initMessageHeaders, e), a.isMobileCordova() || a.isReactNative() || a.isElectron() || a.isIE() || a.isUWP() || a.isBrowserExtension() || (i.httpHeadersOverwriteParam = "$httpHeaders");
						var o = n.join("");
						d("Connection", "Creating WebChannel: " + o, i);
						var s = r.createWebChannel(o, i),
							c = !1,
							h = !1,
							p = new $a({
								Pl: function(t) {
									h ? d("Connection", "Not sending because WebChannel is closed:", t) : (c || (d("Connection", "Opening WebChannel transport."), s.open(), c = !0), d("Connection", "WebChannel sending:", t), s.send(t))
								},
								gl: function() {
									return s.close()
								}
							}),
							v = function(t, e) {
								s.listen(t, (function(t) {
									try {
										e(t)
									} catch (t) {
										setTimeout((function() {
											throw t
										}), 0)
									}
								}))
							};
						return v(u.WebChannel.EventType.OPEN, (function() {
							h || d("Connection", "WebChannel transport opened.")
						})), v(u.WebChannel.EventType.CLOSE, (function() {
							h || (h = !0, d("Connection", "WebChannel transport closed"), p.vl())
						})), v(u.WebChannel.EventType.ERROR, (function(t) {
							h || (h = !0, m("Connection", "WebChannel transport errored:", t), p.vl(new f(l.UNAVAILABLE, "The operation could not be completed")))
						})), v(u.WebChannel.EventType.MESSAGE, (function(t) {
							var e;
							if (!h) {
								var n = t.data[0];
								b(!!n);
								var r = n,
									i = r.error || (null === (e = r[0]) || void 0 === e ? void 0 : e.error);
								if (i) {
									d("Connection", "WebChannel received error:", i);
									var o = i.status,
										a = function(t) {
											var e = yt[t];
											if (void 0 !== e) return Et(e)
										}(o),
										u = i.message;
									void 0 === a && (a = l.INTERNAL, u = "Unknown error status: " + o + " with message " + i.message), h = !0, p.vl(new f(a, u)), s.close()
								} else d("Connection", "WebChannel received:", n), p.Sl(n)
							}
						})), setTimeout((function() {
							p.bl()
						}), 0), p
					}, e
				}(function() {
					function t(t) {
						this.Dl = t, this.U = t.U;
						var e = t.ssl ? "https" : "http";
						this.Cl = e + "://" + t.host, this.Nl = "projects/" + this.U.projectId + "/databases/" + this.U.database + "/documents"
					}
					return t.prototype.Ou = function(t, e, n, r) {
						var i = this.Fl(t, e);
						d("RestConnection", "Sending: ", i, n);
						var o = {};
						return this.$l(o, r), this.xl(t, i, o, n).then((function(t) {
							return d("RestConnection", "Received: ", t), t
						}), (function(e) {
							throw m("RestConnection", t + " failed with error: ", e, "url: ", i, "request:", n), e
						}))
					}, t.prototype.Lu = function(t, e, n, r) {
						return this.Ou(t, e, n, r)
					}, t.prototype.$l = function(t, e) {
						if (t["X-Goog-Api-Client"] = "gl-js/ fire/7.20.0", t["Content-Type"] = "text/plain", e)
							for (var n in e.zc) e.zc.hasOwnProperty(n) && (t[n] = e.zc[n])
					}, t.prototype.Fl = function(t, e) {
						var n = Ja[t];
						return this.Cl + "/v1/" + e + ":" + n
					}, t
				}()),
				tu = function() {
					function t() {
						var t = this;
						this.kl = function() {
							return t.Ml()
						}, this.Ol = function() {
							return t.Ll()
						}, this.Bl = [], this.ql()
					}
					return t.prototype.nh = function(t) {
						this.Bl.push(t)
					}, t.prototype.Si = function() {
						window.removeEventListener("online", this.kl), window.removeEventListener("offline", this.Ol)
					}, t.prototype.ql = function() {
						window.addEventListener("online", this.kl), window.addEventListener("offline", this.Ol)
					}, t.prototype.Ml = function() {
						d("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
						for (var t = 0, e = this.Bl; t < e.length; t++)(0, e[t])(0)
					}, t.prototype.Ll = function() {
						d("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
						for (var t = 0, e = this.Bl; t < e.length; t++)(0, e[t])(1)
					}, t.On = function() {
						return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener
					}, t
				}(),
				eu = function() {
					function t() {}
					return t.prototype.nh = function(t) {}, t.prototype.Si = function() {}, t
				}();

			function nu(t) {
				return new me(t, !0)
			}
			var ru = "You are using the memory-only build of Firestore. Persistence support is only available via the @firebase/firestore bundle or the firebase-firestore.js build.",
				iu = function() {
					function t() {}
					return t.prototype.initialize = function(t) {
						return r.__awaiter(this, void 0, void 0, (function() {
							return r.__generator(this, (function(e) {
								switch (e.label) {
									case 0:
										return this.Dh = this.Ul(t), this.persistence = this.Ql(t), [4, this.persistence.start()];
									case 1:
										return e.sent(), this.Wl = this.jl(t), this.zu = this.Kl(t), [2]
								}
							}))
						}))
					}, t.prototype.jl = function(t) {
						return null
					}, t.prototype.Kl = function(t) {
						return e = this.persistence, n = new Ga, r = t.Gl, new mo(e, n, r);
						var e, n, r
					}, t.prototype.Ql = function(t) {
						if (t.Hl.zl) throw new f(l.FAILED_PRECONDITION, ru);
						return new Qa(Ya.Il)
					}, t.prototype.Ul = function(t) {
						return new Yr
					}, t.prototype.terminate = function() {
						return r.__awaiter(this, void 0, void 0, (function() {
							return r.__generator(this, (function(t) {
								switch (t.label) {
									case 0:
										return this.Wl && this.Wl.stop(), [4, this.Dh.Si()];
									case 1:
										return t.sent(), [4, this.persistence.Si()];
									case 2:
										return t.sent(), [2]
								}
							}))
						}))
					}, t.prototype.clearPersistence = function(t, e) {
						throw new f(l.FAILED_PRECONDITION, ru)
					}, t
				}(),
				ou = function(t) {
					function e(e) {
						var n = this;
						return (n = t.call(this) || this).Yl = e, n
					}
					return r.__extends(e, t), e.prototype.initialize = function(e) {
						return r.__awaiter(this, void 0, void 0, (function() {
							var n, i = this;
							return r.__generator(this, (function(o) {
								switch (o.label) {
									case 0:
										return [4, t.prototype.initialize.call(this, e)];
									case 1:
										return o.sent(), [4, this.Yl.initialize(this, e)];
									case 2:
										return o.sent(), n = this.Yl._i, this.Dh instanceof Xr ? (this.Dh._i = {
											tr: La.bind(null, n),
											er: Va.bind(null, n),
											nr: za.bind(null, n),
											Vi: Fa.bind(null, n)
										}, [4, this.Dh.start()]) : [3, 4];
									case 3:
										o.sent(), o.label = 4;
									case 4:
										return [4, this.persistence.ec((function(t) {
											return r.__awaiter(i, void 0, void 0, (function() {
												return r.__generator(this, (function(e) {
													switch (e.label) {
														case 0:
															return [4, Ma(this.Yl._i, t)];
														case 1:
															return e.sent(), this.Wl && (t && !this.Wl.Ti ? this.Wl.start(this.zu) : t || this.Wl.stop()), [2]
													}
												}))
											}))
										}))];
									case 5:
										return o.sent(), [2]
								}
							}))
						}))
					}, e.prototype.Ul = function(t) {
						if (t.Hl.zl && t.Hl.synchronizeTabs) {
							var e = Sr();
							if (!Xr.On(e)) throw new f(l.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
							var n = vo(t.Dl.U, t.Dl.persistenceKey);
							return new Xr(e, t.os, n, t.clientId, t.Gl)
						}
						return new Yr
					}, e
				}(function(t) {
					function e() {
						return null !== t && t.apply(this, arguments) || this
					}
					return r.__extends(e, t), e.prototype.initialize = function(e) {
						return r.__awaiter(this, void 0, void 0, (function() {
							return r.__generator(this, (function(n) {
								switch (n.label) {
									case 0:
										return [4, t.prototype.initialize.call(this, e)];
									case 1:
										return n.sent(), [4, function(t) {
											return r.__awaiter(this, void 0, void 0, (function() {
												var e, n;
												return r.__generator(this, (function(r) {
													return e = w(t), n = w(e.Fc), [2, e.persistence.runTransaction("Synchronize last document change read time", "readonly", (function(t) {
														return n.oa(t)
													})).then((function(t) {
														e.Nc = t
													}))]
												}))
											}))
										}(this.zu)];
									case 2:
										return n.sent(), [2]
								}
							}))
						}))
					}, e.prototype.jl = function(t) {
						var e = this.persistence.Co.do;
						return new si(e, t.os)
					}, e.prototype.Ql = function(t) {
						var e = vo(t.Dl.U, t.Dl.persistenceKey),
							n = nu(t.Dl.U);
						return new co(t.Hl.synchronizeTabs, e, t.clientId, ui.oo(t.Hl.cacheSizeBytes), t.os, Sr(), kr(), n, this.Dh, t.Hl.La)
					}, e.prototype.Ul = function(t) {
						return new Yr
					}, e.prototype.clearPersistence = function(t, e) {
						return function(t) {
							return r.__awaiter(this, void 0, void 0, (function() {
								var e;
								return r.__generator(this, (function(n) {
									switch (n.label) {
										case 0:
											return mr.On() ? (e = t + "main", [4, mr.delete(e)]) : [2, Promise.resolve()];
										case 1:
											return n.sent(), [2]
									}
								}))
							}))
						}(vo(t, e))
					}, e
				}(iu)),
				au = function() {
					function t() {}
					return t.prototype.initialize = function(t, e) {
						return r.__awaiter(this, void 0, void 0, (function() {
							var n = this;
							return r.__generator(this, (function(r) {
								switch (r.label) {
									case 0:
										return this.zu ? [3, 2] : (this.zu = t.zu, this.Dh = t.Dh, this.Hu = this.Jl(e), this.Sh = this.Xl(e), this._i = this.Zl(e), this.t_ = this.e_(e), this._i.subscribe({
											bu: Rr.bind(null, this.t_),
											Gh: Lr.bind(null, this.t_),
											Kh: Mr.bind(null, this.t_)
										}), this.Dh.fi = function(t) {
											return wa(n._i, t, 1)
										}, this.Sh.th.n_ = Da.bind(null, this._i), [4, ca(this.Sh, this._i.Qh)]);
									case 1:
										r.sent(), r.label = 2;
									case 2:
										return [2]
								}
							}))
						}))
					}, t.prototype.e_ = function(t) {
						return new Cr
					}, t.prototype.Jl = function(t) {
						var e, n = nu(t.Dl.U),
							r = (e = t.Dl, new Za(e));
						return function(t, e, n) {
							return new Mo(t, e, n)
						}(t.credentials, r, n)
					}, t.prototype.Xl = function(t) {
						var e, n, r, i, o, a = this;
						return e = this.zu, n = this.Hu, r = t.os, i = function(t) {
							return wa(a._i, t, 0)
						}, o = tu.On() ? new tu : new eu, new Uo(e, n, r, i, o)
					}, t.prototype.Zl = function(t) {
						return function(t, e, n, r, i, o) {
							var a = new va(t, e, n, r, i);
							return o && (a.Uh = !0), a
						}(this.zu, this.Sh, this.Dh, t.Gl, t.Ch, !t.Hl.zl || !t.Hl.synchronizeTabs)
					}, t.prototype.terminate = function() {
						return Bo(this.Sh)
					}, t
				}();

			function uu(t) {
				return function(t, e) {
					if ("object" != typeof t || null === t) return !1;
					for (var n = t, r = 0, i = ["next", "error", "complete"]; r < i.length; r++) {
						var o = i[r];
						if (o in n && "function" == typeof n[o]) return !0
					}
					return !1
				}(t)
			}
			var su = function() {
					function t(t) {
						this.observer = t, this.muted = !1
					}
					return t.prototype.next = function(t) {
						this.observer.next && this.s_(this.observer.next, t)
					}, t.prototype.error = function(t) {
						this.observer.error ? this.s_(this.observer.error, t) : console.error("Uncaught Error in snapshot listener:", t)
					}, t.prototype.i_ = function() {
						this.muted = !0
					}, t.prototype.s_ = function(t, e) {
						var n = this;
						this.muted || setTimeout((function() {
							n.muted || t(e)
						}), 0)
					}, t
				}(),
				cu = function(t) {
					! function(t, e, n, r) {
						if (!(e instanceof Array) || e.length < 1) throw new f(l.INVALID_ARGUMENT, "Function FieldPath() requires its fieldNames argument to be an array with at least " + K(1, "element") + ".")
					}(0, t);
					for (var e = 0; e < t.length; ++e)
						if (P("FieldPath", "string", e, t[e]), 0 === t[e].length) throw new f(l.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
					this.r_ = new N(t)
				},
				lu = function(t) {
					function e() {
						for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
						return t.call(this, e) || this
					}
					return r.__extends(e, t), e.documentId = function() {
						return new e(N.v().R())
					}, e.prototype.isEqual = function(t) {
						if (!(t instanceof e)) throw G("isEqual", "FieldPath", 1, t);
						return this.r_.isEqual(t.r_)
					}, e
				}(cu),
				fu = new RegExp("[~\\*/\\[\\]]"),
				hu = function() {
					this.o_ = this
				},
				pu = function(t) {
					function e(e) {
						var n = this;
						return (n = t.call(this) || this).a_ = e, n
					}
					return r.__extends(e, t), e.prototype.c_ = function(t) {
						if (2 !== t.u_) throw 1 === t.u_ ? t.h_(this.a_ + "() can only appear at the top level of your update data") : t.h_(this.a_ + "() cannot be used with set() unless you pass {merge:true}");
						return t.Qe.push(t.path), null
					}, e.prototype.isEqual = function(t) {
						return t instanceof e
					}, e
				}(hu);

			function du(t, e, n) {
				return new Nu({
					u_: 3,
					l_: e.settings.l_,
					methodName: t.a_,
					__: n
				}, e.U, e.serializer, e.ignoreUndefinedProperties)
			}
			var vu = function(t) {
					function e(e) {
						var n = this;
						return (n = t.call(this) || this).a_ = e, n
					}
					return r.__extends(e, t), e.prototype.c_ = function(t) {
						return new un(t.path, new $e)
					}, e.prototype.isEqual = function(t) {
						return t instanceof e
					}, e
				}(hu),
				mu = function(t) {
					function e(e, n) {
						var r = this;
						return (r = t.call(this) || this).a_ = e, r.f_ = n, r
					}
					return r.__extends(e, t), e.prototype.c_ = function(t) {
						var e = du(this, t, !0),
							n = this.f_.map((function(t) {
								return Pu(t, e)
							})),
							r = new Je(n);
						return new un(t.path, r)
					}, e.prototype.isEqual = function(t) {
						return this === t
					}, e
				}(hu),
				yu = function(t) {
					function e(e, n) {
						var r = this;
						return (r = t.call(this) || this).a_ = e, r.f_ = n, r
					}
					return r.__extends(e, t), e.prototype.c_ = function(t) {
						var e = du(this, t, !0),
							n = this.f_.map((function(t) {
								return Pu(t, e)
							})),
							r = new tn(n);
						return new un(t.path, r)
					}, e.prototype.isEqual = function(t) {
						return this === t
					}, e
				}(hu),
				gu = function(t) {
					function e(e, n) {
						var r = this;
						return (r = t.call(this) || this).a_ = e, r.d_ = n, r
					}
					return r.__extends(e, t), e.prototype.c_ = function(t) {
						var e = new nn(t.serializer, be(t.serializer, this.d_));
						return new un(t.path, e)
					}, e.prototype.isEqual = function(t) {
						return this === t
					}, e
				}(hu),
				bu = function(t) {
					function e() {
						return t.call(this) || this
					}
					return r.__extends(e, t), e.delete = function() {
						return x("FieldValue.delete", arguments), new wu(new pu("FieldValue.delete"))
					}, e.serverTimestamp = function() {
						return x("FieldValue.serverTimestamp", arguments), new wu(new vu("FieldValue.serverTimestamp"))
					}, e.arrayUnion = function() {
						for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
						return C("FieldValue.arrayUnion", arguments, 1), new wu(new mu("FieldValue.arrayUnion", t))
					}, e.arrayRemove = function() {
						for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
						return C("FieldValue.arrayRemove", arguments, 1), new wu(new yu("FieldValue.arrayRemove", t))
					}, e.increment = function(t) {
						return P("FieldValue.increment", "number", 1, t), O("FieldValue.increment", arguments, 1), new wu(new gu("FieldValue.increment", t))
					}, e
				}(hu),
				wu = function(t) {
					function e(e) {
						var n = this;
						return (n = t.call(this) || this).o_ = e, n.a_ = e.a_, n
					}
					return r.__extends(e, t), e.prototype.c_ = function(t) {
						return this.o_.c_(t)
					}, e.prototype.isEqual = function(t) {
						return t instanceof e && this.o_.isEqual(t.o_)
					}, e
				}(bu),
				_u = function() {
					function t(t, e) {
						if (O("GeoPoint", arguments, 2), P("GeoPoint", "number", 1, t), P("GeoPoint", "number", 2, e), !isFinite(t) || t < -90 || t > 90) throw new f(l.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
						if (!isFinite(e) || e < -180 || e > 180) throw new f(l.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
						this.w_ = t, this.m_ = e
					}
					return Object.defineProperty(t.prototype, "latitude", {
						get: function() {
							return this.w_
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "longitude", {
						get: function() {
							return this.m_
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.isEqual = function(t) {
						return this.w_ === t.w_ && this.m_ === t.m_
					}, t.prototype.toJSON = function() {
						return {
							latitude: this.w_,
							longitude: this.m_
						}
					}, t.prototype.H = function(t) {
						return Y(this.w_, t.w_) || Y(this.m_, t.m_)
					}, t
				}(),
				Eu = /^__.*__$/,
				Iu = function(t, e, n) {
					this.T_ = t, this.E_ = e, this.I_ = n
				},
				Tu = function() {
					function t(t, e, n) {
						this.data = t, this.Qe = e, this.fieldTransforms = n
					}
					return t.prototype.A_ = function(t, e) {
						var n = [];
						return null !== this.Qe ? n.push(new gn(t, this.data, this.Qe, e)) : n.push(new yn(t, this.data, e)), this.fieldTransforms.length > 0 && n.push(new wn(t, this.fieldTransforms)), n
					}, t
				}(),
				Su = function() {
					function t(t, e, n) {
						this.data = t, this.Qe = e, this.fieldTransforms = n
					}
					return t.prototype.A_ = function(t, e) {
						var n = [new gn(t, this.data, this.Qe, e)];
						return this.fieldTransforms.length > 0 && n.push(new wn(t, this.fieldTransforms)), n
					}, t
				}();

			function ku(t) {
				switch (t) {
					case 0:
					case 2:
					case 1:
						return !0;
					case 3:
					case 4:
						return !1;
					default:
						throw g()
				}
			}
			var Nu = function() {
					function t(t, e, n, r, i, o) {
						this.settings = t, this.U = e, this.serializer = n, this.ignoreUndefinedProperties = r, void 0 === i && this.R_(), this.fieldTransforms = i || [], this.Qe = o || []
					}
					return Object.defineProperty(t.prototype, "path", {
						get: function() {
							return this.settings.path
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "u_", {
						get: function() {
							return this.settings.u_
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.P_ = function(e) {
						return new t(Object.assign(Object.assign({}, this.settings), e), this.U, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.Qe)
					}, t.prototype.g_ = function(t) {
						var e, n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
							r = this.P_({
								path: n,
								__: !1
							});
						return r.y_(t), r
					}, t.prototype.V_ = function(t) {
						var e, n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
							r = this.P_({
								path: n,
								__: !1
							});
						return r.R_(), r
					}, t.prototype.p_ = function(t) {
						return this.P_({
							path: void 0,
							__: !0
						})
					}, t.prototype.h_ = function(t) {
						return Fu(t, this.settings.methodName, this.settings.b_ || !1, this.path, this.settings.l_)
					}, t.prototype.contains = function(t) {
						return void 0 !== this.Qe.find((function(e) {
							return t.T(e)
						})) || void 0 !== this.fieldTransforms.find((function(e) {
							return t.T(e.field)
						}))
					}, t.prototype.R_ = function() {
						if (this.path)
							for (var t = 0; t < this.path.length; t++) this.y_(this.path.get(t))
					}, t.prototype.y_ = function(t) {
						if (0 === t.length) throw this.h_("Document fields must not be empty");
						if (ku(this.u_) && Eu.test(t)) throw this.h_('Document fields cannot begin and end with "__"')
					}, t
				}(),
				Au = function() {
					function t(t, e, n) {
						this.U = t, this.ignoreUndefinedProperties = e, this.serializer = n || nu(t)
					}
					return t.prototype.v_ = function(t, e, n, r) {
						return void 0 === r && (r = !1), new Nu({
							u_: t,
							methodName: e,
							l_: n,
							path: N.g(),
							__: !1,
							b_: r
						}, this.U, this.serializer, this.ignoreUndefinedProperties)
					}, t
				}();

			function xu(t, e, n, r, i, o) {
				void 0 === o && (o = {});
				var a = t.v_(o.merge || o.mergeFields ? 2 : 0, e, n, i);
				Mu("Data must be an object, but it was:", a, r);
				var u, s, c = Ru(r, a);
				if (o.merge) u = new an(a.Qe), s = a.fieldTransforms;
				else if (o.mergeFields) {
					for (var h = [], p = 0, d = o.mergeFields; p < d.length; p++) {
						var v = d[p],
							m = void 0;
						if (v instanceof cu) m = v.r_;
						else {
							if ("string" != typeof v) throw g();
							m = Uu(e, v, n)
						}
						if (!a.contains(m)) throw new f(l.INVALID_ARGUMENT, "Field '" + m + "' is specified in your field mask but missing from your input data.");
						Vu(h, m) || h.push(m)
					}
					u = new an(h), s = a.fieldTransforms.filter((function(t) {
						return u.He(t.field)
					}))
				} else u = null, s = a.fieldTransforms;
				return new Tu(new Sn(c), u, s)
			}

			function Ou(t, e, n, r) {
				var i = t.v_(1, e, n);
				Mu("Data must be an object, but it was:", i, r);
				var o = [],
					a = new kn;
				E(r, (function(t, r) {
					var u = Uu(e, t, n),
						s = i.V_(u);
					if (r instanceof hu && r.o_ instanceof pu) o.push(u);
					else {
						var c = Pu(r, s);
						null != c && (o.push(u), a.set(u, c))
					}
				}));
				var u = new an(o);
				return new Su(a.Je(), u, i.fieldTransforms)
			}

			function Cu(t, e, n, r, i, o) {
				var a = t.v_(1, e, n),
					u = [ju(e, r, n)],
					s = [i];
				if (o.length % 2 != 0) throw new f(l.INVALID_ARGUMENT, "Function " + e + "() needs to be called with an even number of arguments that alternate between field names and values.");
				for (var c = 0; c < o.length; c += 2) u.push(ju(e, o[c])), s.push(o[c + 1]);
				for (var h = [], p = new kn, d = u.length - 1; d >= 0; --d)
					if (!Vu(h, u[d])) {
						var v = u[d],
							m = s[d],
							y = a.V_(v);
						if (m instanceof hu && m.o_ instanceof pu) h.push(v);
						else {
							var g = Pu(m, y);
							null != g && (h.push(v), p.set(v, g))
						}
					} var b = new an(h);
				return new Su(p.Je(), b, a.fieldTransforms)
			}

			function Du(t, e, n, r) {
				return void 0 === r && (r = !1), Pu(n, t.v_(r ? 4 : 3, e))
			}

			function Pu(t, e) {
				if (Lu(t)) return Mu("Unsupported field value:", e, t), Ru(t, e);
				if (t instanceof hu) return function(t, e) {
					if (!ku(e.u_)) throw e.h_(t.a_ + "() can only be used with update() and set()");
					if (!e.path) throw e.h_(t.a_ + "() is not currently supported inside arrays");
					var n = t.c_(e);
					n && e.fieldTransforms.push(n)
				}(t, e), null;
				if (e.path && e.Qe.push(e.path), t instanceof Array) {
					if (e.settings.__ && 4 !== e.u_) throw e.h_("Nested arrays are not supported");
					return function(t, e) {
						for (var n = [], r = 0, i = 0, o = t; i < o.length; i++) {
							var a = Pu(o[i], e.p_(r));
							null == a && (a = {
								nullValue: "NULL_VALUE"
							}), n.push(a), r++
						}
						return {
							arrayValue: {
								values: n
							}
						}
					}(t, e)
				}
				return function(t, e) {
					if (null === t) return {
						nullValue: "NULL_VALUE"
					};
					if ("number" == typeof t) return be(e.serializer, t);
					if ("boolean" == typeof t) return {
						booleanValue: t
					};
					if ("string" == typeof t) return {
						stringValue: t
					};
					if (t instanceof Date) {
						var n = ut.fromDate(t);
						return {
							timestampValue: we(e.serializer, n)
						}
					}
					if (t instanceof ut) {
						var r = new ut(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3));
						return {
							timestampValue: we(e.serializer, r)
						}
					}
					if (t instanceof _u) return {
						geoPointValue: {
							latitude: t.latitude,
							longitude: t.longitude
						}
					};
					if (t instanceof tt) return {
						bytesValue: _e(e.serializer, t.q)
					};
					if (t instanceof Iu) {
						var i = e.U,
							o = t.T_;
						if (!o.isEqual(i)) throw e.h_("Document reference is for database " + o.projectId + "/" + o.database + " but should be for database " + i.projectId + "/" + i.database);
						return {
							referenceValue: Te(t.T_ || e.U, t.E_.path)
						}
					}
					if (void 0 === t && e.ignoreUndefinedProperties) return null;
					throw e.h_("Unsupported field value: " + z(t))
				}(t, e)
			}

			function Ru(t, e) {
				var n = {};
				return I(t) ? e.path && e.path.length > 0 && e.Qe.push(e.path) : E(t, (function(t, r) {
					var i = Pu(r, e.g_(t));
					null != i && (n[t] = i)
				})), {
					mapValue: {
						fields: n
					}
				}
			}

			function Lu(t) {
				return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof ut || t instanceof _u || t instanceof tt || t instanceof Iu || t instanceof hu)
			}

			function Mu(t, e, n) {
				if (!Lu(n) || !V(n)) {
					var r = z(n);
					throw "an object" === r ? e.h_(t + " a custom object") : e.h_(t + " " + r)
				}
			}

			function ju(t, e, n) {
				if (e instanceof cu) return e.r_;
				if ("string" == typeof e) return Uu(t, e);
				throw Fu("Field path arguments must be of type string or FieldPath.", t, !1, void 0, n)
			}

			function Uu(t, e, n) {
				try {
					return function(t) {
						if (t.search(fu) >= 0) throw new f(l.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not contain '~', '*', '/', '[', or ']'");
						try {
							return new(lu.bind.apply(lu, r.__spreadArrays([void 0], t.split("."))))
						} catch (r) {
							throw new f(l.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'")
						}
					}(e).r_
				} catch (e) {
					throw Fu((i = e) instanceof Error ? i.message : i.toString(), t, !1, void 0, n)
				}
				var i
			}

			function Fu(t, e, n, r, i) {
				var o = r && !r.m(),
					a = void 0 !== i,
					u = "Function " + e + "() called with invalid data";
				n && (u += " (via `toFirestore()`)");
				var s = "";
				return (o || a) && (s += " (found", o && (s += " in field " + r), a && (s += " in document " + i), s += ")"), new f(l.INVALID_ARGUMENT, (u += ". ") + t + s)
			}

			function Vu(t, e) {
				return t.some((function(t) {
					return t.isEqual(e)
				}))
			}
			var zu = function() {
					function t(t) {
						this.Hu = t, this.S_ = new Map, this.mutations = [], this.D_ = !1, this.C_ = null, this.N_ = new Set
					}
					return t.prototype.F_ = function(t) {
						return r.__awaiter(this, void 0, void 0, (function() {
							var e, n = this;
							return r.__generator(this, (function(i) {
								switch (i.label) {
									case 0:
										if (this.x_(), this.mutations.length > 0) throw new f(l.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
										return [4, function(t, e) {
											return r.__awaiter(this, void 0, void 0, (function() {
												var n, i, o, a, u, s;
												return r.__generator(this, (function(r) {
													switch (r.label) {
														case 0:
															return n = w(t), i = Oe(n.serializer) + "/documents", o = {
																documents: e.map((function(t) {
																	return ke(n.serializer, t)
																}))
															}, [4, n.Lu("BatchGetDocuments", i, o)];
														case 1:
															return a = r.sent(), u = new Map, a.forEach((function(t) {
																var e = function(t, e) {
																	return "found" in e ? function(t, e) {
																		b(!!e.found), e.found.name, e.found.updateTime;
																		var n = Ne(t, e.found.name),
																			r = Ie(e.found.updateTime),
																			i = new Sn({
																				mapValue: {
																					fields: e.found.fields
																				}
																			});
																		return new xn(n, r, i, {})
																	}(t, e) : "missing" in e ? function(t, e) {
																		b(!!e.missing), b(!!e.readTime);
																		var n = Ne(t, e.missing),
																			r = Ie(e.readTime);
																		return new On(n, r)
																	}(t, e) : g()
																}(n.serializer, t);
																u.set(e.key.toString(), e)
															})), s = [], [2, (e.forEach((function(t) {
																var e = u.get(t.toString());
																b(!!e), s.push(e)
															})), s)]
													}
												}))
											}))
										}(this.Hu, t)];
									case 1:
										return [2, ((e = i.sent()).forEach((function(t) {
											t instanceof On || t instanceof xn ? n.k_(t) : g()
										})), e)]
								}
							}))
						}))
					}, t.prototype.set = function(t, e) {
						this.write(e.A_(t, this.Ke(t))), this.N_.add(t.toString())
					}, t.prototype.update = function(t, e) {
						try {
							this.write(e.A_(t, this.M_(t)))
						} catch (t) {
							this.C_ = t
						}
						this.N_.add(t.toString())
					}, t.prototype.delete = function(t) {
						this.write([new In(t, this.Ke(t))]), this.N_.add(t.toString())
					}, t.prototype.commit = function() {
						return r.__awaiter(this, void 0, void 0, (function() {
							var t, e = this;
							return r.__generator(this, (function(n) {
								switch (n.label) {
									case 0:
										if (this.x_(), this.C_) throw this.C_;
										return t = this.S_, this.mutations.forEach((function(e) {
											t.delete(e.key.toString())
										})), t.forEach((function(t, n) {
											var r = A.D(n);
											e.mutations.push(new Tn(r, e.Ke(r)))
										})), [4, function(t, e) {
											return r.__awaiter(this, void 0, void 0, (function() {
												var n, i, o;
												return r.__generator(this, (function(r) {
													switch (r.label) {
														case 0:
															return n = w(t), i = Oe(n.serializer) + "/documents", o = {
																writes: e.map((function(t) {
																	return Pe(n.serializer, t)
																}))
															}, [4, n.Ou("Commit", i, o)];
														case 1:
															return r.sent(), [2]
													}
												}))
											}))
										}(this.Hu, this.mutations)];
									case 1:
										return n.sent(), this.D_ = !0, [2]
								}
							}))
						}))
					}, t.prototype.k_ = function(t) {
						var e;
						if (t instanceof xn) e = t.version;
						else {
							if (!(t instanceof On)) throw g();
							e = st.min()
						}
						var n = this.S_.get(t.key.toString());
						if (n) {
							if (!e.isEqual(n)) throw new f(l.ABORTED, "Document version changed between two reads.")
						} else this.S_.set(t.key.toString(), e)
					}, t.prototype.Ke = function(t) {
						var e = this.S_.get(t.toString());
						return !this.N_.has(t.toString()) && e ? cn.updateTime(e) : cn.Ge()
					}, t.prototype.M_ = function(t) {
						var e = this.S_.get(t.toString());
						if (!this.N_.has(t.toString()) && e) {
							if (e.isEqual(st.min())) throw new f(l.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
							return cn.updateTime(e)
						}
						return cn.exists(!0)
					}, t.prototype.write = function(t) {
						this.x_(), this.mutations = this.mutations.concat(t)
					}, t.prototype.x_ = function() {}, t
				}(),
				Bu = function() {
					function t(t, e, n, r) {
						this.os = t, this.Hu = e, this.updateFunction = n, this.hs = r, this.O_ = 5, this.gs = new dr(this.os, "transaction_retry")
					}
					return t.prototype.run = function() {
						this.L_()
					}, t.prototype.L_ = function() {
						var t = this;
						this.gs.Rn((function() {
							return r.__awaiter(t, void 0, void 0, (function() {
								var t, e, n = this;
								return r.__generator(this, (function(r) {
									return t = new zu(this.Hu), (e = this.B_(t)) && e.then((function(e) {
										n.os.ds((function() {
											return t.commit().then((function() {
												n.hs.resolve(e)
											})).catch((function(t) {
												n.q_(t)
											}))
										}))
									})).catch((function(t) {
										n.q_(t)
									})), [2]
								}))
							}))
						}))
					}, t.prototype.B_ = function(t) {
						try {
							var e = this.updateFunction(t);
							return !ct(e) && e.catch && e.then ? e : (this.hs.reject(Error("Transaction callback must return a Promise")), null)
						} catch (t) {
							return this.hs.reject(t), null
						}
					}, t.prototype.q_ = function(t) {
						var e = this;
						this.O_ > 0 && this.U_(t) ? (this.O_ -= 1, this.os.ds((function() {
							return e.L_(), Promise.resolve()
						}))) : this.hs.reject(t)
					}, t.prototype.U_ = function(t) {
						if ("FirebaseError" === t.name) {
							var e = t.code;
							return "aborted" === e || "failed-precondition" === e || !_t(e)
						}
						return !1
					}, t
				}(),
				qu = function() {
					function t(t, e) {
						this.credentials = t, this.os = e, this.clientId = X.k(), this.Q_ = new pr
					}
					return t.prototype.start = function(t, e, n, i) {
						var o = this;
						this.W_(), this.Dl = t;
						var a = new pr,
							u = !1;
						return this.credentials.Jc((function(t) {
							if (!u) return u = !0, d("FirestoreClient", "Initializing. user=", t.uid), o.j_(e, n, i, t, a).then(o.Q_.resolve, o.Q_.reject);
							o.os.Ds((function() {
								return function(t, e) {
									return r.__awaiter(this, void 0, void 0, (function() {
										var n, i;
										return r.__generator(this, (function(r) {
											switch (r.label) {
												case 0:
													return (n = w(t)).os.Fs(), d("RemoteStore", "RemoteStore received new credentials"), i = Xo(n), n.Zu.add(3), [4, zo(n)];
												case 1:
													return r.sent(), i && n.rh.set("Unknown"), [4, n.th.n_(e)];
												case 2:
													return r.sent(), n.Zu.delete(3), [4, Vo(n)];
												case 3:
													return r.sent(), [2]
											}
										}))
									}))
								}(o.Sh, t)
							}))
						})), this.os.ds((function() {
							return o.Q_.promise
						})), a.promise
					}, t.prototype.enableNetwork = function() {
						var t = this;
						return this.W_(), this.os.enqueue((function() {
							return t.persistence.sc(!0), Fo(t.Sh)
						}))
					}, t.prototype.j_ = function(t, e, n, i, o) {
						return r.__awaiter(this, void 0, void 0, (function() {
							var a, u, s = this;
							return r.__generator(this, (function(c) {
								switch (c.label) {
									case 0:
										return c.trys.push([0, 3, , 4]), a = {
											os: this.os,
											Dl: this.Dl,
											clientId: this.clientId,
											credentials: this.credentials,
											Gl: i,
											Ch: 100,
											Hl: n
										}, [4, t.initialize(a)];
									case 1:
										return c.sent(), [4, e.initialize(t, a)];
									case 2:
										return c.sent(), this.persistence = t.persistence, this.Dh = t.Dh, this.zu = t.zu, this.Wl = t.Wl, this.Hu = e.Hu, this.Sh = e.Sh, this._i = e._i, this.K_ = e.t_, this.K_.qs = ma.bind(null, this._i), this.K_.Ws = ga.bind(null, this._i), this.persistence.nc((function() {
											return r.__awaiter(s, void 0, void 0, (function() {
												return r.__generator(this, (function(t) {
													switch (t.label) {
														case 0:
															return [4, this.terminate()];
														case 1:
															return t.sent(), [2]
													}
												}))
											}))
										})), o.resolve(), [3, 4];
									case 3:
										if (u = c.sent(), o.reject(u), !this.G_(u)) throw u;
										return [2, (console.warn("Error enabling offline persistence. Falling back to persistence disabled: " + u), this.j_(new iu, new au, {
											zl: !1
										}, i, o))];
									case 4:
										return [2]
								}
							}))
						}))
					}, t.prototype.G_ = function(t) {
						return "FirebaseError" === t.name ? t.code === l.FAILED_PRECONDITION || t.code === l.UNIMPLEMENTED : !("undefined" != typeof DOMException && t instanceof DOMException) || 22 === t.code || 20 === t.code || 11 === t.code
					}, t.prototype.W_ = function() {
						if (this.os.Vs) throw new f(l.FAILED_PRECONDITION, "The client has already been terminated.")
					}, t.prototype.disableNetwork = function() {
						var t = this;
						return this.W_(), this.os.enqueue((function() {
							return t.persistence.sc(!1),
								function(t) {
									return r.__awaiter(this, void 0, void 0, (function() {
										var e;
										return r.__generator(this, (function(n) {
											switch (n.label) {
												case 0:
													return (e = w(t)).Zu.add(0), [4, zo(e)];
												case 1:
													return n.sent(), e.rh.set("Offline"), [2]
											}
										}))
									}))
								}(t.Sh)
						}))
					}, t.prototype.terminate = function() {
						var t = this;
						this.os.Ss();
						var e = new pr;
						return this.os.ps((function() {
							return r.__awaiter(t, void 0, void 0, (function() {
								var t, n;
								return r.__generator(this, (function(r) {
									switch (r.label) {
										case 0:
											return r.trys.push([0, 4, , 5]), this.Wl && this.Wl.stop(), [4, Bo(this.Sh)];
										case 1:
											return r.sent(), [4, this.Dh.Si()];
										case 2:
											return r.sent(), [4, this.persistence.Si()];
										case 3:
											return r.sent(), this.credentials.Xc(), e.resolve(), [3, 5];
										case 4:
											return t = r.sent(), n = xr(t, "Failed to shutdown persistence"), e.reject(n), [3, 5];
										case 5:
											return [2]
									}
								}))
							}))
						})), e.promise
					}, t.prototype.waitForPendingWrites = function() {
						var t = this;
						this.W_();
						var e = new pr;
						return this.os.ds((function() {
							return function(t, e) {
								return r.__awaiter(this, void 0, void 0, (function() {
									var n, i, o, a, u;
									return r.__generator(this, (function(r) {
										switch (r.label) {
											case 0:
												Xo((n = w(t)).Sh) || d("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."), r.label = 1;
											case 1:
												return r.trys.push([1, 3, , 4]), [4, function(t) {
													var e = w(t);
													return e.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", (function(t) {
														return e.vr.Bo(t)
													}))
												}(n.zu)];
											case 2:
												return -1 === (i = r.sent()) ? [2, void e.resolve()] : ((o = n.Bh.get(i) || []).push(e), n.Bh.set(i, o), [3, 4]);
											case 3:
												return a = r.sent(), u = xr(a, "Initialization of waitForPendingWrites() operation failed"), e.reject(u), [3, 4];
											case 4:
												return [2]
										}
									}))
								}))
							}(t._i, e)
						})), e.promise
					}, t.prototype.listen = function(t, e, n) {
						var r = this;
						this.W_();
						var i = new su(n),
							o = new Ur(t, i, e);
						return this.os.ds((function() {
								return Dr(r.K_, o)
							})),
							function() {
								i.i_(), r.os.ds((function() {
									return Pr(r.K_, o)
								}))
							}
					}, t.prototype.z_ = function(t) {
						return r.__awaiter(this, void 0, void 0, (function() {
							return r.__generator(this, (function(e) {
								switch (e.label) {
									case 0:
										return this.W_(), [4, this.Q_.promise];
									case 1:
										return [2, (e.sent(), function(t, e, n) {
											return r.__awaiter(this, void 0, void 0, (function() {
												var i, o = this;
												return r.__generator(this, (function(a) {
													switch (a.label) {
														case 0:
															return i = new pr, [4, t.enqueue((function() {
																return r.__awaiter(o, void 0, void 0, (function() {
																	var t, o, a;
																	return r.__generator(this, (function(r) {
																		switch (r.label) {
																			case 0:
																				return r.trys.push([0, 2, , 3]), [4, function(t, e) {
																					var n = w(t);
																					return n.persistence.runTransaction("read document", "readonly", (function(t) {
																						return n.$c.Dr(t, e)
																					}))
																				}(e, n)];
																			case 1:
																				return (t = r.sent()) instanceof xn ? i.resolve(t) : t instanceof On ? i.resolve(null) : i.reject(new f(l.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")), [3, 3];
																			case 2:
																				return o = r.sent(), a = xr(o, "Failed to get document '" + n + " from cache"), i.reject(a), [3, 3];
																			case 3:
																				return [2]
																		}
																	}))
																}))
															}))];
														case 1:
															return [2, (a.sent(), i.promise)]
													}
												}))
											}))
										}(this.os, this.zu, t))]
								}
							}))
						}))
					}, t.prototype.H_ = function(t, e) {
						return r.__awaiter(this, void 0, void 0, (function() {
							return r.__generator(this, (function(n) {
								switch (n.label) {
									case 0:
										return this.W_(), [4, this.Q_.promise];
									case 1:
										return [2, (n.sent(), function(t, e, n, r) {
											var i = new pr,
												o = Gu(t, e, Ln(n.path), {
													includeMetadataChanges: !0,
													Js: !0
												}, {
													next: function(t) {
														o();
														var e = t.docs.has(n);
														!e && t.fromCache ? i.reject(new f(l.UNAVAILABLE, "Failed to get document because the client is offline.")) : e && t.fromCache && r && "server" === r.source ? i.reject(new f(l.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : i.resolve(t)
													},
													error: function(t) {
														return i.reject(t)
													}
												});
											return i.promise
										}(this.os, this.K_, t, e))]
								}
							}))
						}))
					}, t.prototype.Y_ = function(t) {
						return r.__awaiter(this, void 0, void 0, (function() {
							return r.__generator(this, (function(e) {
								switch (e.label) {
									case 0:
										return this.W_(), [4, this.Q_.promise];
									case 1:
										return [2, (e.sent(), function(t, e, n) {
											return r.__awaiter(this, void 0, void 0, (function() {
												var i, o = this;
												return r.__generator(this, (function(a) {
													switch (a.label) {
														case 0:
															return i = new pr, [4, t.enqueue((function() {
																return r.__awaiter(o, void 0, void 0, (function() {
																	var t, o, a, u, s, c;
																	return r.__generator(this, (function(r) {
																		switch (r.label) {
																			case 0:
																				return r.trys.push([0, 2, , 3]), [4, Io(e, n, !0)];
																			case 1:
																				return t = r.sent(), o = new ha(n, t.kc), a = o.Th(t.documents), u = o.gr(a, !1), i.resolve(u.snapshot), [3, 3];
																			case 2:
																				return s = r.sent(), c = xr(s, "Failed to execute query '" + n + " against cache"), i.reject(c), [3, 3];
																			case 3:
																				return [2]
																		}
																	}))
																}))
															}))];
														case 1:
															return [2, (a.sent(), i.promise)]
													}
												}))
											}))
										}(this.os, this.zu, t))]
								}
							}))
						}))
					}, t.prototype.J_ = function(t, e) {
						return r.__awaiter(this, void 0, void 0, (function() {
							return r.__generator(this, (function(n) {
								switch (n.label) {
									case 0:
										return this.W_(), [4, this.Q_.promise];
									case 1:
										return [2, (n.sent(), function(t, e, n, r) {
											var i = new pr,
												o = Gu(t, e, n, {
													includeMetadataChanges: !0,
													Js: !0
												}, {
													next: function(t) {
														o(), t.fromCache && r && "server" === r.source ? i.reject(new f(l.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : i.resolve(t)
													},
													error: function(t) {
														return i.reject(t)
													}
												});
											return i.promise
										}(this.os, this.K_, t, e))]
								}
							}))
						}))
					}, t.prototype.write = function(t) {
						var e = this;
						this.W_();
						var n = new pr;
						return this.os.ds((function() {
							return function(t, e, n) {
								return r.__awaiter(this, void 0, void 0, (function() {
									var i, o, a, u;
									return r.__generator(this, (function(r) {
										switch (r.label) {
											case 0:
												(i = qa(t)).Wh("write()"), r.label = 1;
											case 1:
												return r.trys.push([1, 5, , 6]), [4, function(t, e) {
													var n, r = w(t),
														i = ut.now(),
														o = e.reduce((function(t, e) {
															return t.add(e.key)
														}), Lt());
													return r.persistence.runTransaction("Locally write mutations", "readwrite", (function(t) {
														return r.$c.$r(t, o).next((function(o) {
															n = o;
															for (var a = [], u = 0, s = e; u < s.length; u++) {
																var c = s[u],
																	l = dn(c, n.get(c.key));
																null != l && a.push(new gn(c.key, l, Nn(l.proto.mapValue), cn.exists(!0)))
															}
															return r.vr.xo(t, i, a, e)
														}))
													})).then((function(t) {
														var e = t.hr(n);
														return {
															batchId: t.batchId,
															dr: e
														}
													}))
												}(i.zu, e)];
											case 2:
												return o = r.sent(), i.Dh.Fi(o.batchId),
													function(t, e, n) {
														var r = t.Lh[t.currentUser.Zs()];
														r || (r = new It(Y)), r = r.rt(e, n), t.Lh[t.currentUser.Zs()] = r
													}(i, o.batchId, n), [4, Ca(i, o.dr)];
											case 3:
												return r.sent(), [4, na(i.Sh)];
											case 4:
												return r.sent(), [3, 6];
											case 5:
												return a = r.sent(), u = xr(a, "Failed to persist write"), n.reject(u), [3, 6];
											case 6:
												return [2]
										}
									}))
								}))
							}(e._i, t, n)
						})), n.promise
					}, t.prototype.U = function() {
						return this.Dl.U
					}, t.prototype.X_ = function(t) {
						var e = this;
						this.W_();
						var n = new su(t);
						return this.os.ds((function() {
								return r.__awaiter(e, void 0, void 0, (function() {
									return r.__generator(this, (function(t) {
										return [2, function(t, e) {
											w(t).Bs.add(e), e.next()
										}(this.K_, n)]
									}))
								}))
							})),
							function() {
								n.i_(), e.os.ds((function() {
									return r.__awaiter(e, void 0, void 0, (function() {
										return r.__generator(this, (function(t) {
											return [2, function(t, e) {
												w(t).Bs.delete(e)
											}(this.K_, n)]
										}))
									}))
								}))
							}
					}, Object.defineProperty(t.prototype, "Z_", {
						get: function() {
							return this.os.Vs
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.transaction = function(t) {
						var e = this;
						this.W_();
						var n = new pr;
						return this.os.ds((function() {
							return new Bu(e.os, e.Hu, t, n).run(), Promise.resolve()
						})), n.promise
					}, t
				}();

			function Gu(t, e, n, r, i) {
				var o = new su(i),
					a = new Ur(n, o, r);
				return t.ds((function() {
						return Dr(e, a)
					})),
					function() {
						o.i_(), t.ds((function() {
							return Pr(e, a)
						}))
					}
			}
			var Wu = function() {
					function t(t, e, n, r, i) {
						this.U = t, this.timestampsInSnapshots = e, this.tf = n, this.ef = r, this.nf = i
					}
					return t.prototype.sf = function(t) {
						switch (Zt(t)) {
							case 0:
								return null;
							case 1:
								return t.booleanValue;
							case 2:
								return ae(t.integerValue || t.doubleValue);
							case 3:
								return this.if(t.timestampValue);
							case 4:
								return this.rf(t);
							case 5:
								return t.stringValue;
							case 6:
								return this.nf(ue(t.bytesValue));
							case 7:
								return this.af(t.referenceValue);
							case 8:
								return this.cf(t.geoPointValue);
							case 9:
								return this.uf(t.arrayValue);
							case 10:
								return this.hf(t.mapValue);
							default:
								throw g()
						}
					}, t.prototype.hf = function(t) {
						var e = this,
							n = {};
						return E(t.fields || {}, (function(t, r) {
							n[t] = e.sf(r)
						})), n
					}, t.prototype.cf = function(t) {
						return new _u(ae(t.latitude), ae(t.longitude))
					}, t.prototype.uf = function(t) {
						var e = this;
						return (t.values || []).map((function(t) {
							return e.sf(t)
						}))
					}, t.prototype.rf = function(t) {
						switch (this.tf) {
							case "previous":
								var e = function t(e) {
									var n = e.mapValue.fields.__previous_value__;
									return Yt(n) ? t(n) : n
								}(t);
								return null == e ? null : this.sf(e);
							case "estimate":
								return this.if($t(t));
							default:
								return null
						}
					}, t.prototype.if = function(t) {
						var e = oe(t),
							n = new ut(e.seconds, e.nanos);
						return this.timestampsInSnapshots ? n : n.toDate()
					}, t.prototype.af = function(t) {
						var e = S.P(t);
						b(He(e));
						var n = new ot(e.get(1), e.get(3)),
							r = new A(e.u(5));
						return n.isEqual(this.U) || v("Document " + r + " contains a document reference within a different database (" + n.projectId + "/" + n.database + ") which is not supported. It will be treated as a reference in the current database (" + this.U.projectId + "/" + this.U.database + ") instead."), this.ef(r)
					}, t
				}(),
				Hu = ui.uo,
				Ku = function() {
					function t(t) {
						var e, n, r, i;
						if (void 0 === t.host) {
							if (void 0 !== t.ssl) throw new f(l.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
							this.host = "firestore.googleapis.com", this.ssl = !0
						} else L("settings", "non-empty string", "host", t.host), this.host = t.host, M("settings", "boolean", "ssl", t.ssl), this.ssl = null === (e = t.ssl) || void 0 === e || e;
						if (q("settings", t, ["host", "ssl", "credentials", "timestampsInSnapshots", "cacheSizeBytes", "experimentalForceLongPolling", "ignoreUndefinedProperties"]), M("settings", "object", "credentials", t.credentials), this.credentials = t.credentials, M("settings", "boolean", "timestampsInSnapshots", t.timestampsInSnapshots), M("settings", "boolean", "ignoreUndefinedProperties", t.ignoreUndefinedProperties), !0 === t.timestampsInSnapshots ? v("The setting 'timestampsInSnapshots: true' is no longer required and should be removed.") : !1 === t.timestampsInSnapshots && v("Support for 'timestampsInSnapshots: false' will be removed soon. You must update your code to handle Timestamp objects."), this.timestampsInSnapshots = null === (n = t.timestampsInSnapshots) || void 0 === n || n, this.ignoreUndefinedProperties = null !== (r = t.ignoreUndefinedProperties) && void 0 !== r && r, M("settings", "number", "cacheSizeBytes", t.cacheSizeBytes), void 0 === t.cacheSizeBytes) this.cacheSizeBytes = ui.lo;
						else {
							if (t.cacheSizeBytes !== Hu && t.cacheSizeBytes < ui.ho) throw new f(l.INVALID_ARGUMENT, "cacheSizeBytes must be at least " + ui.ho);
							this.cacheSizeBytes = t.cacheSizeBytes
						}
						M("settings", "boolean", "experimentalForceLongPolling", t.experimentalForceLongPolling), this.experimentalForceLongPolling = null !== (i = t.experimentalForceLongPolling) && void 0 !== i && i
					}
					return t.prototype.isEqual = function(t) {
						return this.host === t.host && this.ssl === t.ssl && this.timestampsInSnapshots === t.timestampsInSnapshots && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.experimentalForceLongPolling === t.experimentalForceLongPolling && this.ignoreUndefinedProperties === t.ignoreUndefinedProperties
					}, t
				}(),
				Qu = function() {
					function t(e, n, i, o) {
						var a = this;
						if (void 0 === i && (i = new iu), void 0 === o && (o = new au), this.lf = i, this._f = o, this.ff = null, this.df = new Ar, this.INTERNAL = {
								delete: function() {
									return r.__awaiter(a, void 0, void 0, (function() {
										return r.__generator(this, (function(t) {
											switch (t.label) {
												case 0:
													return this.wf(), [4, this.mf.terminate()];
												case 1:
													return t.sent(), [2]
											}
										}))
									}))
								}
							}, "object" == typeof e.options) {
							var u = e;
							this.ff = u, this.T_ = t.Tf(u), this.Ef = u.name, this.If = new Oo(n)
						} else {
							var s = e;
							if (!s.projectId) throw new f(l.INVALID_ARGUMENT, "Must provide projectId");
							this.T_ = new ot(s.projectId, s.database), this.Ef = "[DEFAULT]", this.If = new xo
						}
						this.Af = new Ku({})
					}
					return Object.defineProperty(t.prototype, "Rf", {
						get: function() {
							return this.Pf || (this.Pf = new Au(this.T_, this.Af.ignoreUndefinedProperties)), this.Pf
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.settings = function(t) {
						O("Firestore.settings", arguments, 1), P("Firestore.settings", "object", 1, t), t.merge && delete(t = Object.assign(Object.assign({}, this.Af), t)).merge;
						var e = new Ku(t);
						if (this.mf && !this.Af.isEqual(e)) throw new f(l.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only call settings() before calling any other methods on a Firestore object.");
						this.Af = e, void 0 !== e.credentials && (this.If = function(t) {
							if (!t) return new xo;
							switch (t.type) {
								case "gapi":
									var e = t.gf;
									return b(!("object" != typeof e || null === e || !e.auth || !e.auth.getAuthHeaderValueForFirstParty)), new Do(e, t.iu || "0");
								case "provider":
									return t.gf;
								default:
									throw new f(l.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type")
							}
						}(e.credentials))
					}, t.prototype.enableNetwork = function() {
						return this.wf(), this.mf.enableNetwork()
					}, t.prototype.disableNetwork = function() {
						return this.wf(), this.mf.disableNetwork()
					}, t.prototype.enablePersistence = function(t) {
						var e, n;
						if (this.mf) throw new f(l.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object.");
						var r = !1,
							i = !1;
						if (t && (void 0 !== t.experimentalTabSynchronization && v("The 'experimentalTabSynchronization' setting will be removed. Use 'synchronizeTabs' instead."), r = null !== (n = null !== (e = t.synchronizeTabs) && void 0 !== e ? e : t.experimentalTabSynchronization) && void 0 !== n && n, i = !!t.experimentalForceOwningTab && t.experimentalForceOwningTab, r && i)) throw new f(l.INVALID_ARGUMENT, "The 'experimentalForceOwningTab' setting cannot be used with 'synchronizeTabs'.");
						return this.yf(this.lf, this._f, {
							zl: !0,
							cacheSizeBytes: this.Af.cacheSizeBytes,
							synchronizeTabs: r,
							La: i
						})
					}, t.prototype.clearPersistence = function() {
						return r.__awaiter(this, void 0, void 0, (function() {
							var t, e = this;
							return r.__generator(this, (function(n) {
								if (void 0 !== this.mf && !this.mf.Z_) throw new f(l.FAILED_PRECONDITION, "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");
								return t = new pr, [2, (this.df.ps((function() {
									return r.__awaiter(e, void 0, void 0, (function() {
										var e;
										return r.__generator(this, (function(n) {
											switch (n.label) {
												case 0:
													return n.trys.push([0, 2, , 3]), [4, this.lf.clearPersistence(this.T_, this.Ef)];
												case 1:
													return n.sent(), t.resolve(), [3, 3];
												case 2:
													return e = n.sent(), t.reject(e), [3, 3];
												case 3:
													return [2]
											}
										}))
									}))
								})), t.promise)]
							}))
						}))
					}, t.prototype.terminate = function() {
						return this.app._removeServiceInstance("firestore"), this.INTERNAL.delete()
					}, Object.defineProperty(t.prototype, "Vf", {
						get: function() {
							return this.wf(), this.mf.Z_
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.waitForPendingWrites = function() {
						return this.wf(), this.mf.waitForPendingWrites()
					}, t.prototype.onSnapshotsInSync = function(t) {
						if (this.wf(), uu(t)) return this.mf.X_(t);
						P("Firestore.onSnapshotsInSync", "function", 1, t);
						var e = {
							next: t
						};
						return this.mf.X_(e)
					}, t.prototype.wf = function() {
						return this.mf || this.yf(new iu, new au, {
							zl: !1
						}), this.mf
					}, t.prototype.pf = function() {
						return new it(this.T_, this.Ef, this.Af.host, this.Af.ssl, this.Af.experimentalForceLongPolling)
					}, t.prototype.yf = function(t, e, n) {
						var r = this.pf();
						return this.mf = new qu(this.If, this.df), this.mf.start(r, t, e, n)
					}, t.Tf = function(t) {
						if (e = t.options, !Object.prototype.hasOwnProperty.call(e, "projectId")) throw new f(l.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
						var e, n = t.options.projectId;
						if (!n || "string" != typeof n) throw new f(l.INVALID_ARGUMENT, "projectId must be a string in FirebaseApp.options");
						return new ot(n)
					}, Object.defineProperty(t.prototype, "app", {
						get: function() {
							if (!this.ff) throw new f(l.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
							return this.ff
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.collection = function(t) {
						return O("Firestore.collection", arguments, 1), P("Firestore.collection", "non-empty string", 1, t), this.wf(), new cs(S.P(t), this, null)
					}, t.prototype.doc = function(t) {
						return O("Firestore.doc", arguments, 1), P("Firestore.doc", "non-empty string", 1, t), this.wf(), $u.bf(S.P(t), this, null)
					}, t.prototype.collectionGroup = function(t) {
						if (O("Firestore.collectionGroup", arguments, 1), P("Firestore.collectionGroup", "non-empty string", 1, t), t.indexOf("/") >= 0) throw new f(l.INVALID_ARGUMENT, "Invalid collection ID '" + t + "' passed to function Firestore.collectionGroup(). Collection IDs must not contain '/'.");
						return this.wf(), new us(function(t) {
							return new Pn(S.g(), t)
						}(t), this, null)
					}, t.prototype.runTransaction = function(t) {
						var e = this;
						return O("Firestore.runTransaction", arguments, 1), P("Firestore.runTransaction", "function", 1, t), this.wf().transaction((function(n) {
							return t(new Xu(e, n))
						}))
					}, t.prototype.batch = function() {
						return this.wf(), new Yu(this)
					}, Object.defineProperty(t, "logLevel", {
						get: function() {
							switch (p()) {
								case o.LogLevel.DEBUG:
									return "debug";
								case o.LogLevel.ERROR:
									return "error";
								case o.LogLevel.SILENT:
									return "silent";
								case o.LogLevel.WARN:
									return "warn";
								case o.LogLevel.INFO:
									return "info";
								case o.LogLevel.VERBOSE:
									return "verbose";
								default:
									return "error"
							}
						},
						enumerable: !1,
						configurable: !0
					}), t.setLogLevel = function(t) {
						var e;
						O("Firestore.setLogLevel", arguments, 1), U("setLogLevel", ["debug", "error", "silent", "warn", "info", "verbose"], 1, t), e = t, h.setLogLevel(e)
					}, t.prototype.vf = function() {
						return this.Af.timestampsInSnapshots
					}, t.prototype.Sf = function() {
						return this.Af
					}, t
				}(),
				Xu = function() {
					function t(t, e) {
						this.Df = t, this.Cf = e
					}
					return t.prototype.get = function(t) {
						var e = this;
						O("Transaction.get", arguments, 1);
						var n = ps("Transaction.get", t, this.Df);
						return this.Cf.F_([n.E_]).then((function(t) {
							if (!t || 1 !== t.length) return g();
							var r = t[0];
							if (r instanceof On) return new Zu(e.Df, n.E_, null, !1, !1, n.I_);
							if (r instanceof xn) return new Zu(e.Df, n.E_, r, !1, !1, n.I_);
							throw g()
						}))
					}, t.prototype.set = function(t, e, n) {
						D("Transaction.set", arguments, 2, 3);
						var r = ps("Transaction.set", t, this.Df);
						n = ls("Transaction.set", n);
						var i = vs(r.I_, e, n),
							o = xu(this.Df.Rf, "Transaction.set", r.E_, i, null !== r.I_, n);
						return this.Cf.set(r.E_, o), this
					}, t.prototype.update = function(t, e, n) {
						for (var r, i, o = [], a = 3; a < arguments.length; a++) o[a - 3] = arguments[a];
						return "string" == typeof e || e instanceof lu ? (C("Transaction.update", arguments, 3), r = ps("Transaction.update", t, this.Df), i = Cu(this.Df.Rf, "Transaction.update", r.E_, e, n, o)) : (O("Transaction.update", arguments, 2), r = ps("Transaction.update", t, this.Df), i = Ou(this.Df.Rf, "Transaction.update", r.E_, e)), this.Cf.update(r.E_, i), this
					}, t.prototype.delete = function(t) {
						O("Transaction.delete", arguments, 1);
						var e = ps("Transaction.delete", t, this.Df);
						return this.Cf.delete(e.E_), this
					}, t
				}(),
				Yu = function() {
					function t(t) {
						this.Df = t, this.Nf = [], this.Ff = !1
					}
					return t.prototype.set = function(t, e, n) {
						D("WriteBatch.set", arguments, 2, 3), this.$f();
						var r = ps("WriteBatch.set", t, this.Df);
						n = ls("WriteBatch.set", n);
						var i = vs(r.I_, e, n),
							o = xu(this.Df.Rf, "WriteBatch.set", r.E_, i, null !== r.I_, n);
						return this.Nf = this.Nf.concat(o.A_(r.E_, cn.Ge())), this
					}, t.prototype.update = function(t, e, n) {
						for (var r, i, o = [], a = 3; a < arguments.length; a++) o[a - 3] = arguments[a];
						return this.$f(), "string" == typeof e || e instanceof lu ? (C("WriteBatch.update", arguments, 3), r = ps("WriteBatch.update", t, this.Df), i = Cu(this.Df.Rf, "WriteBatch.update", r.E_, e, n, o)) : (O("WriteBatch.update", arguments, 2), r = ps("WriteBatch.update", t, this.Df), i = Ou(this.Df.Rf, "WriteBatch.update", r.E_, e)), this.Nf = this.Nf.concat(i.A_(r.E_, cn.exists(!0))), this
					}, t.prototype.delete = function(t) {
						O("WriteBatch.delete", arguments, 1), this.$f();
						var e = ps("WriteBatch.delete", t, this.Df);
						return this.Nf = this.Nf.concat(new In(e.E_, cn.Ge())), this
					}, t.prototype.commit = function() {
						return this.$f(), this.Ff = !0, this.Nf.length > 0 ? this.Df.wf().write(this.Nf) : Promise.resolve()
					}, t.prototype.$f = function() {
						if (this.Ff) throw new f(l.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.")
					}, t
				}(),
				$u = function(t) {
					function e(e, n, r) {
						var i = this;
						return (i = t.call(this, n.T_, e, r) || this).E_ = e, i.firestore = n, i.I_ = r, i.mf = i.firestore.wf(), i
					}
					return r.__extends(e, t), e.bf = function(t, n, r) {
						if (t.length % 2 != 0) throw new f(l.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t.R() + " has " + t.length);
						return new e(new A(t), n, r)
					}, Object.defineProperty(e.prototype, "id", {
						get: function() {
							return this.E_.path._()
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "parent", {
						get: function() {
							return new cs(this.E_.path.h(), this.firestore, this.I_)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "path", {
						get: function() {
							return this.E_.path.R()
						},
						enumerable: !1,
						configurable: !0
					}), e.prototype.collection = function(t) {
						if (O("DocumentReference.collection", arguments, 1), P("DocumentReference.collection", "non-empty string", 1, t), !t) throw new f(l.INVALID_ARGUMENT, "Must provide a non-empty collection name to collection()");
						var e = S.P(t);
						return new cs(this.E_.path.child(e), this.firestore, null)
					}, e.prototype.isEqual = function(t) {
						if (!(t instanceof e)) throw G("isEqual", "DocumentReference", 1, t);
						return this.firestore === t.firestore && this.E_.isEqual(t.E_) && this.I_ === t.I_
					}, e.prototype.set = function(t, e) {
						D("DocumentReference.set", arguments, 1, 2), e = ls("DocumentReference.set", e);
						var n = vs(this.I_, t, e),
							r = xu(this.firestore.Rf, "DocumentReference.set", this.E_, n, null !== this.I_, e);
						return this.mf.write(r.A_(this.E_, cn.Ge()))
					}, e.prototype.update = function(t, e) {
						for (var n, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
						return "string" == typeof t || t instanceof lu ? (C("DocumentReference.update", arguments, 2), n = Cu(this.firestore.Rf, "DocumentReference.update", this.E_, t, e, r)) : (O("DocumentReference.update", arguments, 1), n = Ou(this.firestore.Rf, "DocumentReference.update", this.E_, t)), this.mf.write(n.A_(this.E_, cn.exists(!0)))
					}, e.prototype.delete = function() {
						return O("DocumentReference.delete", arguments, 0), this.mf.write([new In(this.E_, cn.Ge())])
					}, e.prototype.onSnapshot = function() {
						for (var t, e, n, r = this, i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
						D("DocumentReference.onSnapshot", arguments, 1, 4);
						var a = {
								includeMetadataChanges: !1
							},
							u = 0;
						"object" != typeof i[u] || uu(i[u]) || (q("DocumentReference.onSnapshot", a = i[u], ["includeMetadataChanges"]), M("DocumentReference.onSnapshot", "boolean", "includeMetadataChanges", a.includeMetadataChanges), u++);
						var s = {
							includeMetadataChanges: a.includeMetadataChanges
						};
						if (uu(i[u])) {
							var c = i[u];
							i[u] = null === (t = c.next) || void 0 === t ? void 0 : t.bind(c), i[u + 1] = null === (e = c.error) || void 0 === e ? void 0 : e.bind(c), i[u + 2] = null === (n = c.complete) || void 0 === n ? void 0 : n.bind(c)
						} else P("DocumentReference.onSnapshot", "function", u, i[u]), R("DocumentReference.onSnapshot", "function", u + 1, i[u + 1]), R("DocumentReference.onSnapshot", "function", u + 2, i[u + 2]);
						var l = {
							next: function(t) {
								i[u] && i[u](r.xf(t))
							},
							error: i[u + 1],
							complete: i[u + 2]
						};
						return this.mf.listen(Ln(this.E_.path), s, l)
					}, e.prototype.get = function(t) {
						var e = this;
						D("DocumentReference.get", arguments, 0, 1), hs("DocumentReference.get", t);
						var n = this.firestore.wf();
						return t && "cache" === t.source ? n.z_(this.E_).then((function(t) {
							return new Zu(e.firestore, e.E_, t, !0, t instanceof xn && t.Ye, e.I_)
						})) : n.H_(this.E_, t).then((function(t) {
							return e.xf(t)
						}))
					}, e.prototype.withConverter = function(t) {
						return new e(this.E_, this.firestore, t)
					}, e.prototype.xf = function(t) {
						var e = t.docs.get(this.E_);
						return new Zu(this.firestore, this.E_, e, t.fromCache, t.hasPendingWrites, this.I_)
					}, e
				}(Iu),
				Ju = function() {
					function t(t, e) {
						this.hasPendingWrites = t, this.fromCache = e
					}
					return t.prototype.isEqual = function(t) {
						return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache
					}, t
				}(),
				Zu = function() {
					function t(t, e, n, r, i, o) {
						this.Df = t, this.E_ = e, this.kf = n, this.Mf = r, this.Of = i, this.I_ = o
					}
					return t.prototype.data = function(t) {
						var e = this;
						if (D("DocumentSnapshot.data", arguments, 0, 1), t = fs("DocumentSnapshot.data", t), this.kf) {
							if (this.I_) {
								var n = new ts(this.Df, this.E_, this.kf, this.Mf, this.Of, null);
								return this.I_.fromFirestore(n, t)
							}
							return new Wu(this.Df.T_, this.Df.vf(), t.serverTimestamps || "none", (function(t) {
								return new $u(t, e.Df, null)
							}), (function(t) {
								return new rt(t)
							})).sf(this.kf.sn())
						}
					}, t.prototype.get = function(t, e) {
						var n = this;
						if (D("DocumentSnapshot.get", arguments, 1, 2), e = fs("DocumentSnapshot.get", e), this.kf) {
							var r = this.kf.data().field(ju("DocumentSnapshot.get", t, this.E_));
							if (null !== r) return new Wu(this.Df.T_, this.Df.vf(), e.serverTimestamps || "none", (function(t) {
								return new $u(t, n.Df, n.I_)
							}), (function(t) {
								return new rt(t)
							})).sf(r)
						}
					}, Object.defineProperty(t.prototype, "id", {
						get: function() {
							return this.E_.path._()
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "ref", {
						get: function() {
							return new $u(this.E_, this.Df, this.I_)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "exists", {
						get: function() {
							return null !== this.kf
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "metadata", {
						get: function() {
							return new Ju(this.Of, this.Mf)
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.isEqual = function(e) {
						if (!(e instanceof t)) throw G("isEqual", "DocumentSnapshot", 1, e);
						return this.Df === e.Df && this.Mf === e.Mf && this.E_.isEqual(e.E_) && (null === this.kf ? null === e.kf : this.kf.isEqual(e.kf)) && this.I_ === e.I_
					}, t
				}(),
				ts = function(t) {
					function e() {
						return null !== t && t.apply(this, arguments) || this
					}
					return r.__extends(e, t), e.prototype.data = function(e) {
						return t.prototype.data.call(this, e)
					}, e
				}(Zu);

			function es(t, e, n, r, i, o, a) {
				var u;
				if (i.p()) {
					if ("array-contains" === o || "array-contains-any" === o) throw new f(l.INVALID_ARGUMENT, "Invalid Query. You can't perform '" + o + "' queries on FieldPath.documentId().");
					if ("in" === o || "not-in" === o) {
						is(a, o);
						for (var s = [], c = 0, h = a; c < h.length; c++) {
							var p = h[c];
							s.push(rs(r, t, p))
						}
						u = {
							arrayValue: {
								values: s
							}
						}
					} else u = rs(r, t, a)
				} else "in" !== o && "not-in" !== o && "array-contains-any" !== o || is(a, o), u = Du(n, e, a, "in" === o || "not-in" === o);
				var d = $n.create(i, o, u);
				return function(t, e) {
					if (e.un()) {
						var n = Fn(t);
						if (null !== n && !n.isEqual(e.field)) throw new f(l.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '" + n.toString() + "' and '" + e.field.toString() + "'");
						var r = Un(t);
						null !== r && os(t, e.field, r)
					}
					var i = function(t, e) {
						for (var n = 0, r = t.filters; n < r.length; n++) {
							var i = r[n];
							if (e.indexOf(i.op) >= 0) return i.op
						}
						return null
					}(t, function(t) {
						switch (t) {
							case "!=":
								return ["!=", "not-in"];
							case "array-contains":
								return ["array-contains", "array-contains-any", "not-in"];
							case "in":
								return ["array-contains-any", "in", "not-in"];
							case "array-contains-any":
								return ["array-contains", "array-contains-any", "in", "not-in"];
							case "not-in":
								return ["array-contains", "array-contains-any", "in", "not-in", "!="];
							default:
								return []
						}
					}(e.op));
					if (null !== i) throw i === e.op ? new f(l.INVALID_ARGUMENT, "Invalid query. You cannot use more than one '" + e.op.toString() + "' filter.") : new f(l.INVALID_ARGUMENT, "Invalid query. You cannot use '" + e.op.toString() + "' filters with '" + i.toString() + "' filters.")
				}(t, d), d
			}

			function ns(t, e, n) {
				if (null !== t.startAt) throw new f(l.INVALID_ARGUMENT, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
				if (null !== t.endAt) throw new f(l.INVALID_ARGUMENT, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
				var r = new lr(e, n);
				return function(t, e) {
					if (null === Un(t)) {
						var n = Fn(t);
						null !== n && os(t, n, e.field)
					}
				}(t, r), r
			}

			function rs(t, e, n) {
				if ("string" == typeof n) {
					if ("" === n) throw new f(l.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
					if (!Vn(e) && -1 !== n.indexOf("/")) throw new f(l.INVALID_ARGUMENT, "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" + n + "' contains a '/' character.");
					var r = e.path.child(S.P(n));
					if (!A.F(r)) throw new f(l.INVALID_ARGUMENT, "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" + r + "' is not because it has an odd number of segments (" + r.length + ").");
					return se(t, new A(r))
				}
				if (n instanceof Iu) return se(t, n.E_);
				throw new f(l.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " + z(n) + ".")
			}

			function is(t, e) {
				if (!Array.isArray(t) || 0 === t.length) throw new f(l.INVALID_ARGUMENT, "Invalid Query. A non-empty array is required for '" + e.toString() + "' filters.");
				if (t.length > 10) throw new f(l.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters support a maximum of 10 elements in the value array.");
				if ("in" === e || "array-contains-any" === e) {
					if (t.indexOf(null) >= 0) throw new f(l.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'null' in the value array.");
					if (t.filter((function(t) {
							return Number.isNaN(t)
						})).length > 0) throw new f(l.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'NaN' in the value array.")
				}
			}

			function os(t, e, n) {
				if (!n.isEqual(e)) throw new f(l.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '" + e.toString() + "' and so you must also use '" + e.toString() + "' as your first orderBy(), but your first orderBy() is on field '" + n.toString() + "' instead.")
			}

			function as(t) {
				if (jn(t) && 0 === t.rn.length) throw new f(l.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause")
			}
			var us = function() {
					function t(t, e, n) {
						this.Lf = t, this.firestore = e, this.I_ = n
					}
					return t.prototype.where = function(e, n, r) {
						var i;
						O("Query.where", arguments, 3), B("Query.where", 3, r), i = "not-in" === n || "!=" === n ? n : U("Query.where", ["<", "<=", "==", ">=", ">", "array-contains", "in", "array-contains-any"], 2, n);
						var o = ju("Query.where", e),
							a = es(this.Lf, "Query.where", this.firestore.Rf, this.firestore.T_, o, i, r);
						return new t(function(t, e) {
							var n = t.filters.concat([e]);
							return new Pn(t.path, t.collectionGroup, t.rn.slice(), n, t.limit, t.on, t.startAt, t.endAt)
						}(this.Lf, a), this.firestore, this.I_)
					}, t.prototype.orderBy = function(e, n) {
						var r;
						if (D("Query.orderBy", arguments, 1, 2), R("Query.orderBy", "non-empty string", 2, n), void 0 === n || "asc" === n) r = "asc";
						else {
							if ("desc" !== n) throw new f(l.INVALID_ARGUMENT, "Function Query.orderBy() has unknown direction '" + n + "', expected 'asc' or 'desc'.");
							r = "desc"
						}
						var i = ju("Query.orderBy", e),
							o = ns(this.Lf, i, r);
						return new t(function(t, e) {
							var n = t.rn.concat([e]);
							return new Pn(t.path, t.collectionGroup, n, t.filters.slice(), t.limit, t.on, t.startAt, t.endAt)
						}(this.Lf, o), this.firestore, this.I_)
					}, t.prototype.limit = function(e) {
						return O("Query.limit", arguments, 1), P("Query.limit", "number", 1, e), W("Query.limit", 1, e), new t(qn(this.Lf, e, "F"), this.firestore, this.I_)
					}, t.prototype.limitToLast = function(e) {
						return O("Query.limitToLast", arguments, 1), P("Query.limitToLast", "number", 1, e), W("Query.limitToLast", 1, e), new t(qn(this.Lf, e, "L"), this.firestore, this.I_)
					}, t.prototype.startAt = function(e) {
						for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
						C("Query.startAt", arguments, 1);
						var i = this.Bf("Query.startAt", e, n, !0);
						return new t(Gn(this.Lf, i), this.firestore, this.I_)
					}, t.prototype.startAfter = function(e) {
						for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
						C("Query.startAfter", arguments, 1);
						var i = this.Bf("Query.startAfter", e, n, !1);
						return new t(Gn(this.Lf, i), this.firestore, this.I_)
					}, t.prototype.endBefore = function(e) {
						for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
						C("Query.endBefore", arguments, 1);
						var i = this.Bf("Query.endBefore", e, n, !0);
						return new t(Wn(this.Lf, i), this.firestore, this.I_)
					}, t.prototype.endAt = function(e) {
						for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
						C("Query.endAt", arguments, 1);
						var i = this.Bf("Query.endAt", e, n, !1);
						return new t(Wn(this.Lf, i), this.firestore, this.I_)
					}, t.prototype.isEqual = function(e) {
						if (!(e instanceof t)) throw G("isEqual", "Query", 1, e);
						return this.firestore === e.firestore && Hn(this.Lf, e.Lf) && this.I_ === e.I_
					}, t.prototype.withConverter = function(e) {
						return new t(this.Lf, this.firestore, e)
					}, t.prototype.Bf = function(t, e, n, i) {
						if (B(t, 1, e), e instanceof Zu) return O(t, r.__spreadArrays([e], n), 1),
							function(t, e, n, r, i) {
								if (!r) throw new f(l.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + n + "().");
								for (var o = [], a = 0, u = zn(t); a < u.length; a++) {
									var s = u[a];
									if (s.field.p()) o.push(se(e, r.key));
									else {
										var c = r.field(s.field);
										if (Yt(c)) throw new f(l.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + s.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
										if (null === c) {
											var h = s.field.R();
											throw new f(l.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + h + "' (used as the orderBy) does not exist.")
										}
										o.push(c)
									}
								}
								return new ar(o, i)
							}(this.Lf, this.firestore.T_, t, e.kf, i);
						var o = [e].concat(n);
						return function(t, e, n, r, i, o) {
							var a = t.rn;
							if (i.length > a.length) throw new f(l.INVALID_ARGUMENT, "Too many arguments provided to " + r + "(). The number of arguments must be less than or equal to the number of orderBy() clauses");
							for (var u = [], s = 0; s < i.length; s++) {
								var c = i[s];
								if (a[s].field.p()) {
									if ("string" != typeof c) throw new f(l.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + r + "(), but got a " + typeof c);
									if (!Vn(t) && -1 !== c.indexOf("/")) throw new f(l.INVALID_ARGUMENT, "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " + r + "() must be a plain document ID, but '" + c + "' contains a slash.");
									var h = t.path.child(S.P(c));
									if (!A.F(h)) throw new f(l.INVALID_ARGUMENT, "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " + r + "() must result in a valid document path, but '" + h + "' is not because it contains an odd number of segments.");
									var p = new A(h);
									u.push(se(e, p))
								} else {
									var d = Du(n, r, c);
									u.push(d)
								}
							}
							return new ar(u, o)
						}(this.Lf, this.firestore.T_, this.firestore.Rf, t, o, i)
					}, t.prototype.onSnapshot = function() {
						for (var t, e, n, r = this, i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
						D("Query.onSnapshot", arguments, 1, 4);
						var a = {},
							u = 0;
						if ("object" != typeof i[u] || uu(i[u]) || (q("Query.onSnapshot", a = i[u], ["includeMetadataChanges"]), M("Query.onSnapshot", "boolean", "includeMetadataChanges", a.includeMetadataChanges), u++), uu(i[u])) {
							var s = i[u];
							i[u] = null === (t = s.next) || void 0 === t ? void 0 : t.bind(s), i[u + 1] = null === (e = s.error) || void 0 === e ? void 0 : e.bind(s), i[u + 2] = null === (n = s.complete) || void 0 === n ? void 0 : n.bind(s)
						} else P("Query.onSnapshot", "function", u, i[u]), R("Query.onSnapshot", "function", u + 1, i[u + 1]), R("Query.onSnapshot", "function", u + 2, i[u + 2]);
						var c = {
							next: function(t) {
								i[u] && i[u](new ss(r.firestore, r.Lf, t, r.I_))
							},
							error: i[u + 1],
							complete: i[u + 2]
						};
						return as(this.Lf), this.firestore.wf().listen(this.Lf, a, c)
					}, t.prototype.get = function(t) {
						var e = this;
						D("Query.get", arguments, 0, 1), hs("Query.get", t), as(this.Lf);
						var n = this.firestore.wf();
						return (t && "cache" === t.source ? n.Y_(this.Lf) : n.J_(this.Lf, t)).then((function(t) {
							return new ss(e.firestore, e.Lf, t, e.I_)
						}))
					}, t
				}(),
				ss = function() {
					function t(t, e, n, r) {
						this.Df = t, this.qf = e, this.Uf = n, this.I_ = r, this.Qf = null, this.Wf = null, this.metadata = new Ju(n.hasPendingWrites, n.fromCache)
					}
					return Object.defineProperty(t.prototype, "docs", {
						get: function() {
							var t = [];
							return this.forEach((function(e) {
								return t.push(e)
							})), t
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "empty", {
						get: function() {
							return this.Uf.docs.m()
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "size", {
						get: function() {
							return this.Uf.docs.size
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.forEach = function(t, e) {
						var n = this;
						D("QuerySnapshot.forEach", arguments, 1, 2), P("QuerySnapshot.forEach", "function", 1, t), this.Uf.docs.forEach((function(r) {
							t.call(e, n.jf(r, n.metadata.fromCache, n.Uf.Qt.has(r.key)))
						}))
					}, Object.defineProperty(t.prototype, "query", {
						get: function() {
							return new us(this.qf, this.Df, this.I_)
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.docChanges = function(t) {
						t && (q("QuerySnapshot.docChanges", t, ["includeMetadataChanges"]), M("QuerySnapshot.docChanges", "boolean", "includeMetadataChanges", t.includeMetadataChanges));
						var e = !(!t || !t.includeMetadataChanges);
						if (e && this.Uf.jt) throw new f(l.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
						return this.Qf && this.Wf === e || (this.Qf = function(t, e, n) {
							if (t.Ut.m()) {
								var r = 0;
								return t.docChanges.map((function(e) {
									var i = n(e.doc, t.fromCache, t.Qt.has(e.doc.key));
									return e.doc, {
										type: "added",
										doc: i,
										oldIndex: -1,
										newIndex: r++
									}
								}))
							}
							var i = t.Ut;
							return t.docChanges.filter((function(t) {
								return e || 3 !== t.type
							})).map((function(e) {
								var r = n(e.doc, t.fromCache, t.Qt.has(e.doc.key)),
									o = -1,
									a = -1;
								return 0 !== e.type && (o = i.indexOf(e.doc.key), i = i.delete(e.doc.key)), 1 !== e.type && (a = (i = i.add(e.doc)).indexOf(e.doc.key)), {
									type: ds(e.type),
									doc: r,
									oldIndex: o,
									newIndex: a
								}
							}))
						}(this.Uf, e, this.jf.bind(this)), this.Wf = e), this.Qf
					}, t.prototype.isEqual = function(e) {
						if (!(e instanceof t)) throw G("isEqual", "QuerySnapshot", 1, e);
						return this.Df === e.Df && Hn(this.qf, e.qf) && this.Uf.isEqual(e.Uf) && this.I_ === e.I_
					}, t.prototype.jf = function(t, e, n) {
						return new ts(this.Df, t.key, t, e, n, this.I_)
					}, t
				}(),
				cs = function(t) {
					function e(e, n, r) {
						var i = this;
						if ((i = t.call(this, Ln(e), n, r) || this).Kf = e, e.length % 2 != 1) throw new f(l.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + e.R() + " has " + e.length);
						return i
					}
					return r.__extends(e, t), Object.defineProperty(e.prototype, "id", {
						get: function() {
							return this.Lf.path._()
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "parent", {
						get: function() {
							var t = this.Lf.path.h();
							return t.m() ? null : new $u(new A(t), this.firestore, null)
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "path", {
						get: function() {
							return this.Lf.path.R()
						},
						enumerable: !1,
						configurable: !0
					}), e.prototype.doc = function(t) {
						D("CollectionReference.doc", arguments, 0, 1), 0 === arguments.length && (t = X.k()), P("CollectionReference.doc", "non-empty string", 1, t);
						var e = S.P(t);
						return $u.bf(this.Lf.path.child(e), this.firestore, this.I_)
					}, e.prototype.add = function(t) {
						O("CollectionReference.add", arguments, 1), P("CollectionReference.add", "object", 1, this.I_ ? this.I_.toFirestore(t) : t);
						var e = this.doc();
						return e.set(t).then((function() {
							return e
						}))
					}, e.prototype.withConverter = function(t) {
						return new e(this.Kf, this.firestore, t)
					}, e
				}(us);

			function ls(t, e) {
				if (void 0 === e) return {
					merge: !1
				};
				if (q(t, e, ["merge", "mergeFields"]), M(t, "boolean", "merge", e.merge), function(t, e, n, r, i) {
						void 0 !== r && function(t, e, n, r, i) {
							if (!(r instanceof Array)) throw new f(l.INVALID_ARGUMENT, "Function " + t + "() requires its " + e + " option to be an array, but it was: " + z(r));
							for (var o = 0; o < r.length; ++o)
								if (!i(r[o])) throw new f(l.INVALID_ARGUMENT, "Function " + t + "() requires all " + e + " elements to be a string or a FieldPath, but the value at index " + o + " was: " + z(r[o]))
						}(t, "mergeFields", 0, r, (function(t) {
							return "string" == typeof t || t instanceof lu
						}))
					}(t, 0, 0, e.mergeFields), void 0 !== e.mergeFields && void 0 !== e.merge) throw new f(l.INVALID_ARGUMENT, "Invalid options passed to function " + t + '(): You cannot specify both "merge" and "mergeFields".');
				return e
			}

			function fs(t, e) {
				return void 0 === e ? {} : (q(t, e, ["serverTimestamps"]), j(t, 0, "serverTimestamps", e.serverTimestamps, ["estimate", "previous", "none"]), e)
			}

			function hs(t, e) {
				R(t, "object", 1, e), e && (q(t, e, ["source"]), j(t, 0, "source", e.source, ["default", "server", "cache"]))
			}

			function ps(t, e, n) {
				if (e instanceof Iu) {
					if (e.firestore !== n) throw new f(l.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
					return e
				}
				throw G(t, "DocumentReference", 1, e)
			}

			function ds(t) {
				switch (t) {
					case 0:
						return "added";
					case 2:
					case 3:
						return "modified";
					case 1:
						return "removed";
					default:
						return g()
				}
			}

			function vs(t, e, n) {
				return t ? n && (n.merge || n.mergeFields) ? t.toFirestore(e, n) : t.toFirestore(e) : e
			}
			var ms = {
				Firestore: Qu,
				GeoPoint: _u,
				Timestamp: ut,
				Blob: rt,
				Transaction: Xu,
				WriteBatch: Yu,
				DocumentReference: $u,
				DocumentSnapshot: Zu,
				Query: us,
				QueryDocumentSnapshot: ts,
				QuerySnapshot: ss,
				CollectionReference: cs,
				FieldPath: lu,
				FieldValue: bu,
				setLogLevel: Qu.setLogLevel,
				CACHE_SIZE_UNLIMITED: Hu
			};

			function ys(t) {
				! function(t, e) {
					t.INTERNAL.registerComponent(new s.Component("firestore", (function(t) {
						return function(t, e) {
							var n = new au,
								r = new ou(n);
							return new Qu(t, e, r, n)
						}(t.getProvider("app").getImmediate(), t.getProvider("auth-internal"))
					}), "PUBLIC").setServiceProps(Object.assign({}, ms)))
				}(t), t.registerVersion("@firebase/firestore", "1.16.7")
			}
			ys(c.default), e.__PRIVATE_registerFirestore = ys
		}).call(this, n(26))
	}, function(t, e) {
		var n, r, i = t.exports = {};

		function o() {
			throw new Error("setTimeout has not been defined")
		}

		function a() {
			throw new Error("clearTimeout has not been defined")
		}

		function u(t) {
			if (n === setTimeout) return setTimeout(t, 0);
			if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
			try {
				return n(t, 0)
			} catch (e) {
				try {
					return n.call(null, t, 0)
				} catch (e) {
					return n.call(this, t, 0)
				}
			}
		}! function() {
			try {
				n = "function" === typeof setTimeout ? setTimeout : o
			} catch (t) {
				n = o
			}
			try {
				r = "function" === typeof clearTimeout ? clearTimeout : a
			} catch (t) {
				r = a
			}
		}();
		var s, c = [],
			l = !1,
			f = -1;

		function h() {
			l && s && (l = !1, s.length ? c = s.concat(c) : f = -1, c.length && p())
		}

		function p() {
			if (!l) {
				var t = u(h);
				l = !0;
				for (var e = c.length; e;) {
					for (s = c, c = []; ++f < e;) s && s[f].run();
					f = -1, e = c.length
				}
				s = null, l = !1,
					function(t) {
						if (r === clearTimeout) return clearTimeout(t);
						if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
						try {
							r(t)
						} catch (e) {
							try {
								return r.call(null, t)
							} catch (e) {
								return r.call(this, t)
							}
						}
					}(t)
			}
		}

		function d(t, e) {
			this.fun = t, this.array = e
		}

		function v() {}
		i.nextTick = function(t) {
			var e = new Array(arguments.length - 1);
			if (arguments.length > 1)
				for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
			c.push(new d(t, e)), 1 !== c.length || l || u(p)
		}, d.prototype.run = function() {
			this.fun.apply(null, this.array)
		}, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = v, i.addListener = v, i.once = v, i.off = v, i.removeListener = v, i.removeAllListeners = v, i.emit = v, i.prependListener = v, i.prependOnceListener = v, i.listeners = function(t) {
			return []
		}, i.binding = function(t) {
			throw new Error("process.binding is not supported")
		}, i.cwd = function() {
			return "/"
		}, i.chdir = function(t) {
			throw new Error("process.chdir is not supported")
		}, i.umask = function() {
			return 0
		}
	}, function(t, e, n) {
		"use strict";
		n.r(e),
			function(t) {
				n.d(e, "ErrorCode", (function() {
					return er
				})), n.d(e, "EventType", (function() {
					return nr
				})), n.d(e, "WebChannel", (function() {
					return rr
				})), n.d(e, "XhrIo", (function() {
					return ir
				})), n.d(e, "createWebChannelTransport", (function() {
					return tr
				}));
				var r = function(t, e) {
					return (r = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(t, e) {
							t.__proto__ = e
						} || function(t, e) {
							for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
						})(t, e)
				};

				function i(t) {
					var e = "function" === typeof Symbol && Symbol.iterator,
						n = e && t[e],
						r = 0;
					if (n) return n.call(t);
					if (t && "number" === typeof t.length) return {
						next: function() {
							return t && r >= t.length && (t = void 0), {
								value: t && t[r++],
								done: !t
							}
						}
					};
					throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
				}
				var o, a = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof t ? t : "undefined" !== typeof self ? self : {},
					u = u || {},
					s = a || self;

				function c() {}

				function l(t) {
					var e = typeof t;
					return "object" != e ? e : t ? Array.isArray(t) ? "array" : e : "null"
				}

				function f(t) {
					var e = l(t);
					return "array" == e || "object" == e && "number" == typeof t.length
				}

				function h(t) {
					var e = typeof t;
					return "object" == e && null != t || "function" == e
				}
				var p = "closure_uid_" + (1e9 * Math.random() >>> 0),
					d = 0;

				function v(t, e, n) {
					return t.call.apply(t.bind, arguments)
				}

				function m(t, e, n) {
					if (!t) throw Error();
					if (2 < arguments.length) {
						var r = Array.prototype.slice.call(arguments, 2);
						return function() {
							var n = Array.prototype.slice.call(arguments);
							return Array.prototype.unshift.apply(n, r), t.apply(e, n)
						}
					}
					return function() {
						return t.apply(e, arguments)
					}
				}

				function y(t, e, n) {
					return (y = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? v : m).apply(null, arguments)
				}

				function g(t, e) {
					var n = Array.prototype.slice.call(arguments, 1);
					return function() {
						var e = n.slice();
						return e.push.apply(e, arguments), t.apply(this, e)
					}
				}
				var b = Date.now;

				function w(t, e) {
					function n() {}
					n.prototype = e.prototype, t.S = e.prototype, t.prototype = new n, t.prototype.constructor = t
				}

				function _() {
					this.j = this.j, this.i = this.i
				}
				_.prototype.j = !1, _.prototype.ja = function() {
					if (!this.j && (this.j = !0, this.G(), 0))(function(t) {
						Object.prototype.hasOwnProperty.call(t, p) && t[p] || (t[p] = ++d)
					})(this)
				}, _.prototype.G = function() {
					if (this.i)
						for (; this.i.length;) this.i.shift()()
				};
				var E = Array.prototype.indexOf ? function(t, e) {
						return Array.prototype.indexOf.call(t, e, void 0)
					} : function(t, e) {
						if ("string" === typeof t) return "string" !== typeof e || 1 != e.length ? -1 : t.indexOf(e, 0);
						for (var n = 0; n < t.length; n++)
							if (n in t && t[n] === e) return n;
						return -1
					},
					I = Array.prototype.forEach ? function(t, e, n) {
						Array.prototype.forEach.call(t, e, n)
					} : function(t, e, n) {
						for (var r = t.length, i = "string" === typeof t ? t.split("") : t, o = 0; o < r; o++) o in i && e.call(n, i[o], o, t)
					};

				function T(t) {
					return Array.prototype.concat.apply([], arguments)
				}

				function S(t) {
					var e = t.length;
					if (0 < e) {
						for (var n = Array(e), r = 0; r < e; r++) n[r] = t[r];
						return n
					}
					return []
				}

				function k(t) {
					return /^[\s\xa0]*$/.test(t)
				}
				var N, A = String.prototype.trim ? function(t) {
					return t.trim()
				} : function(t) {
					return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]
				};

				function x(t, e) {
					return -1 != t.indexOf(e)
				}

				function O(t, e) {
					return t < e ? -1 : t > e ? 1 : 0
				}
				t: {
					var C = s.navigator;
					if (C) {
						var D = C.userAgent;
						if (D) {
							N = D;
							break t
						}
					}
					N = ""
				}

				function P(t, e, n) {
					for (var r in t) e.call(n, t[r], r, t)
				}

				function R(t) {
					var e = {};
					for (var n in t) e[n] = t[n];
					return e
				}
				var L = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

				function M(t, e) {
					for (var n, r, i = 1; i < arguments.length; i++) {
						for (n in r = arguments[i]) t[n] = r[n];
						for (var o = 0; o < L.length; o++) n = L[o], Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
					}
				}

				function j(t) {
					return j[" "](t), t
				}
				j[" "] = c;
				var U, F = x(N, "Opera"),
					V = x(N, "Trident") || x(N, "MSIE"),
					z = x(N, "Edge"),
					B = z || V,
					q = x(N, "Gecko") && !(x(N.toLowerCase(), "webkit") && !x(N, "Edge")) && !(x(N, "Trident") || x(N, "MSIE")) && !x(N, "Edge"),
					G = x(N.toLowerCase(), "webkit") && !x(N, "Edge");

				function W() {
					var t = s.document;
					return t ? t.documentMode : void 0
				}
				t: {
					var H = "",
						K = function() {
							var t = N;
							return q ? /rv:([^\);]+)(\)|;)/.exec(t) : z ? /Edge\/([\d\.]+)/.exec(t) : V ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t) : G ? /WebKit\/(\S+)/.exec(t) : F ? /(?:Version)[ \/]?(\S+)/.exec(t) : void 0
						}();
					if (K && (H = K ? K[1] : ""), V) {
						var Q = W();
						if (null != Q && Q > parseFloat(H)) {
							U = String(Q);
							break t
						}
					}
					U = H
				}
				var X, Y = {};

				function $(t) {
					return function(t, e) {
						var n = Y;
						return Object.prototype.hasOwnProperty.call(n, t) ? n[t] : n[t] = e(t)
					}(t, (function() {
						for (var e = 0, n = A(String(U)).split("."), r = A(String(t)).split("."), i = Math.max(n.length, r.length), o = 0; 0 == e && o < i; o++) {
							var a = n[o] || "",
								u = r[o] || "";
							do {
								if (a = /(\d*)(\D*)(.*)/.exec(a) || ["", "", "", ""], u = /(\d*)(\D*)(.*)/.exec(u) || ["", "", "", ""], 0 == a[0].length && 0 == u[0].length) break;
								e = O(0 == a[1].length ? 0 : parseInt(a[1], 10), 0 == u[1].length ? 0 : parseInt(u[1], 10)) || O(0 == a[2].length, 0 == u[2].length) || O(a[2], u[2]), a = a[3], u = u[3]
							} while (0 == e)
						}
						return 0 <= e
					}))
				}
				if (s.document && V) {
					var J = W();
					X = J || (parseInt(U, 10) || void 0)
				} else X = void 0;
				var Z = X,
					tt = !V || 9 <= Number(Z),
					et = V && !$("9"),
					nt = function() {
						if (!s.addEventListener || !Object.defineProperty) return !1;
						var t = !1,
							e = Object.defineProperty({}, "passive", {
								get: function() {
									t = !0
								}
							});
						try {
							s.addEventListener("test", c, e), s.removeEventListener("test", c, e)
						} catch (n) {}
						return t
					}();

				function rt(t, e) {
					this.type = t, this.a = this.target = e, this.defaultPrevented = !1
				}

				function it(t, e) {
					if (rt.call(this, t ? t.type : ""), this.relatedTarget = this.a = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0, this.key = "", this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.pointerId = 0, this.pointerType = "", this.c = null, t) {
						var n = this.type = t.type,
							r = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : null;
						if (this.target = t.target || t.srcElement, this.a = e, e = t.relatedTarget) {
							if (q) {
								t: {
									try {
										j(e.nodeName);
										var i = !0;
										break t
									} catch (o) {}
									i = !1
								}
								i || (e = null)
							}
						} else "mouseover" == n ? e = t.fromElement : "mouseout" == n && (e = t.toElement);
						this.relatedTarget = e, r ? (this.clientX = void 0 !== r.clientX ? r.clientX : r.pageX, this.clientY = void 0 !== r.clientY ? r.clientY : r.pageY, this.screenX = r.screenX || 0, this.screenY = r.screenY || 0) : (this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX, this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY, this.screenX = t.screenX || 0, this.screenY = t.screenY || 0), this.button = t.button, this.key = t.key || "", this.ctrlKey = t.ctrlKey, this.altKey = t.altKey, this.shiftKey = t.shiftKey, this.metaKey = t.metaKey, this.pointerId = t.pointerId || 0, this.pointerType = "string" === typeof t.pointerType ? t.pointerType : ot[t.pointerType] || "", this.c = t, t.defaultPrevented && this.b()
					}
				}
				rt.prototype.b = function() {
					this.defaultPrevented = !0
				}, w(it, rt);
				var ot = {
					2: "touch",
					3: "pen",
					4: "mouse"
				};
				it.prototype.b = function() {
					it.S.b.call(this);
					var t = this.c;
					if (t.preventDefault) t.preventDefault();
					else if (t.returnValue = !1, et) try {
						(t.ctrlKey || 112 <= t.keyCode && 123 >= t.keyCode) && (t.keyCode = -1)
					} catch (e) {}
				};
				var at = "closure_listenable_" + (1e6 * Math.random() | 0),
					ut = 0;

				function st(t, e, n, r, i) {
					this.listener = t, this.proxy = null, this.src = e, this.type = n, this.capture = !!r, this.ca = i, this.key = ++ut, this.Y = this.Z = !1
				}

				function ct(t) {
					t.Y = !0, t.listener = null, t.proxy = null, t.src = null, t.ca = null
				}

				function lt(t) {
					this.src = t, this.a = {}, this.b = 0
				}

				function ft(t, e) {
					var n = e.type;
					if (n in t.a) {
						var r, i = t.a[n],
							o = E(i, e);
						(r = 0 <= o) && Array.prototype.splice.call(i, o, 1), r && (ct(e), 0 == t.a[n].length && (delete t.a[n], t.b--))
					}
				}

				function ht(t, e, n, r) {
					for (var i = 0; i < t.length; ++i) {
						var o = t[i];
						if (!o.Y && o.listener == e && o.capture == !!n && o.ca == r) return i
					}
					return -1
				}
				lt.prototype.add = function(t, e, n, r, i) {
					var o = t.toString();
					(t = this.a[o]) || (t = this.a[o] = [], this.b++);
					var a = ht(t, e, r, i);
					return -1 < a ? (e = t[a], n || (e.Z = !1)) : ((e = new st(e, this.src, o, !!r, i)).Z = n, t.push(e)), e
				};
				var pt = "closure_lm_" + (1e6 * Math.random() | 0),
					dt = {};

				function vt(t, e, n, r, i) {
					if (r && r.once) return function t(e, n, r, i, o) {
						if (Array.isArray(n)) {
							for (var a = 0; a < n.length; a++) t(e, n[a], r, i, o);
							return null
						}
						return r = It(r), e && e[at] ? e.wa(n, r, h(i) ? !!i.capture : !!i, o) : mt(e, n, r, !0, i, o)
					}(t, e, n, r, i);
					if (Array.isArray(e)) {
						for (var o = 0; o < e.length; o++) vt(t, e[o], n, r, i);
						return null
					}
					return n = It(n), t && t[at] ? t.va(e, n, h(r) ? !!r.capture : !!r, i) : mt(t, e, n, !1, r, i)
				}

				function mt(t, e, n, r, i, o) {
					if (!e) throw Error("Invalid event type");
					var a = h(i) ? !!i.capture : !!i;
					if (a && !tt) return null;
					var u = _t(t);
					if (u || (t[pt] = u = new lt(t)), (n = u.add(e, n, r, a, o)).proxy) return n;
					if (r = function() {
							var t = wt,
								e = tt ? function(n) {
									return t.call(e.src, e.listener, n)
								} : function(n) {
									if (!(n = t.call(e.src, e.listener, n))) return n
								};
							return e
						}(), n.proxy = r, r.src = t, r.listener = n, t.addEventListener) nt || (i = a), void 0 === i && (i = !1), t.addEventListener(e.toString(), r, i);
					else if (t.attachEvent) t.attachEvent(gt(e.toString()), r);
					else {
						if (!t.addListener || !t.removeListener) throw Error("addEventListener and attachEvent are unavailable.");
						t.addListener(r)
					}
					return n
				}

				function yt(t) {
					if ("number" !== typeof t && t && !t.Y) {
						var e = t.src;
						if (e && e[at]) ft(e.c, t);
						else {
							var n = t.type,
								r = t.proxy;
							e.removeEventListener ? e.removeEventListener(n, r, t.capture) : e.detachEvent ? e.detachEvent(gt(n), r) : e.addListener && e.removeListener && e.removeListener(r), (n = _t(e)) ? (ft(n, t), 0 == n.b && (n.src = null, e[pt] = null)) : ct(t)
						}
					}
				}

				function gt(t) {
					return t in dt ? dt[t] : dt[t] = "on" + t
				}

				function bt(t, e) {
					var n = t.listener,
						r = t.ca || t.src;
					return t.Z && yt(t), n.call(r, e)
				}

				function wt(t, e) {
					if (t.Y) return !0;
					if (!tt) {
						if (!e) t: {
							e = ["window", "event"];
							for (var n = s, r = 0; r < e.length; r++)
								if (null == (n = n[e[r]])) {
									e = null;
									break t
								} e = n
						}
						return bt(t, e = new it(e, this))
					}
					return bt(t, new it(e, this))
				}

				function _t(t) {
					return (t = t[pt]) instanceof lt ? t : null
				}
				var Et = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);

				function It(t) {
					return "function" == l(t) ? t : (t[Et] || (t[Et] = function(e) {
						return t.handleEvent(e)
					}), t[Et])
				}

				function Tt() {
					_.call(this), this.c = new lt(this), this.J = this, this.C = null
				}

				function St(t, e, n, r) {
					if (!(e = t.c.a[String(e)])) return !0;
					e = e.concat();
					for (var i = !0, o = 0; o < e.length; ++o) {
						var a = e[o];
						if (a && !a.Y && a.capture == n) {
							var u = a.listener,
								s = a.ca || a.src;
							a.Z && ft(t.c, a), i = !1 !== u.call(s, r) && i
						}
					}
					return i && !r.defaultPrevented
				}
				w(Tt, _), Tt.prototype[at] = !0, (o = Tt.prototype).addEventListener = function(t, e, n, r) {
					vt(this, t, e, n, r)
				}, o.removeEventListener = function(t, e, n, r) {
					! function t(e, n, r, i, o) {
						if (Array.isArray(n))
							for (var a = 0; a < n.length; a++) t(e, n[a], r, i, o);
						else i = h(i) ? !!i.capture : !!i, r = It(r), e && e[at] ? (e = e.c, (n = String(n).toString()) in e.a && (-1 < (r = ht(a = e.a[n], r, i, o)) && (ct(a[r]), Array.prototype.splice.call(a, r, 1), 0 == a.length && (delete e.a[n], e.b--)))) : e && (e = _t(e)) && (n = e.a[n.toString()], e = -1, n && (e = ht(n, r, i, o)), (r = -1 < e ? n[e] : null) && yt(r))
					}(this, t, e, n, r)
				}, o.dispatchEvent = function(t) {
					var e, n = this.C;
					if (n)
						for (e = []; n; n = n.C) e.push(n);
					n = this.J;
					var r = t.type || t;
					if ("string" === typeof t) t = new rt(t, n);
					else if (t instanceof rt) t.target = t.target || n;
					else {
						var i = t;
						M(t = new rt(r, n), i)
					}
					if (i = !0, e)
						for (var o = e.length - 1; 0 <= o; o--) {
							var a = t.a = e[o];
							i = St(a, r, !0, t) && i
						}
					if (i = St(a = t.a = n, r, !0, t) && i, i = St(a, r, !1, t) && i, e)
						for (o = 0; o < e.length; o++) i = St(a = t.a = e[o], r, !1, t) && i;
					return i
				}, o.G = function() {
					if (Tt.S.G.call(this), this.c) {
						var t, e = this.c;
						for (t in e.a) {
							for (var n = e.a[t], r = 0; r < n.length; r++) ct(n[r]);
							delete e.a[t], e.b--
						}
					}
					this.C = null
				}, o.va = function(t, e, n, r) {
					return this.c.add(String(t), e, !1, n, r)
				}, o.wa = function(t, e, n, r) {
					return this.c.add(String(t), e, !0, n, r)
				};
				var kt = s.JSON.stringify;

				function Nt() {
					this.b = this.a = null
				}
				var At, xt = new(function() {
					function t(t, e, n) {
						this.f = n, this.c = t, this.g = e, this.b = 0, this.a = null
					}
					return t.prototype.get = function() {
						var t;
						return 0 < this.b ? (this.b--, t = this.a, this.a = t.next, t.next = null) : t = this.c(), t
					}, t
				}())((function() {
					return new Ct
				}), (function(t) {
					t.reset()
				}), 100);

				function Ot() {
					var t = Lt,
						e = null;
					return t.a && (e = t.a, t.a = t.a.next, t.a || (t.b = null), e.next = null), e
				}

				function Ct() {
					this.next = this.b = this.a = null
				}

				function Dt(t) {
					s.setTimeout((function() {
						throw t
					}), 0)
				}

				function Pt(t, e) {
					At || function() {
						var t = s.Promise.resolve(void 0);
						At = function() {
							t.then(Mt)
						}
					}(), Rt || (At(), Rt = !0), Lt.add(t, e)
				}
				Nt.prototype.add = function(t, e) {
					var n = xt.get();
					n.set(t, e), this.b ? this.b.next = n : this.a = n, this.b = n
				}, Ct.prototype.set = function(t, e) {
					this.a = t, this.b = e, this.next = null
				}, Ct.prototype.reset = function() {
					this.next = this.b = this.a = null
				};
				var Rt = !1,
					Lt = new Nt;

				function Mt() {
					for (var t; t = Ot();) {
						try {
							t.a.call(t.b)
						} catch (n) {
							Dt(n)
						}
						var e = xt;
						e.g(t), e.b < e.f && (e.b++, t.next = e.a, e.a = t)
					}
					Rt = !1
				}

				function jt(t, e) {
					Tt.call(this), this.b = t || 1, this.a = e || s, this.f = y(this.Ya, this), this.g = b()
				}

				function Ut(t) {
					t.aa = !1, t.M && (t.a.clearTimeout(t.M), t.M = null)
				}

				function Ft(t, e, n) {
					if ("function" == l(t)) n && (t = y(t, n));
					else {
						if (!t || "function" != typeof t.handleEvent) throw Error("Invalid listener argument");
						t = y(t.handleEvent, t)
					}
					return 2147483647 < Number(e) ? -1 : s.setTimeout(t, e || 0)
				}

				function Vt(t) {
					t.a = Ft((function() {
						t.a = null, t.c && (t.c = !1, Vt(t))
					}), t.h);
					var e = t.b;
					t.b = null, t.g.apply(null, e)
				}
				w(jt, Tt), (o = jt.prototype).aa = !1, o.M = null, o.Ya = function() {
					if (this.aa) {
						var t = b() - this.g;
						0 < t && t < .8 * this.b ? this.M = this.a.setTimeout(this.f, this.b - t) : (this.M && (this.a.clearTimeout(this.M), this.M = null), this.dispatchEvent("tick"), this.aa && (Ut(this), this.start()))
					}
				}, o.start = function() {
					this.aa = !0, this.M || (this.M = this.a.setTimeout(this.f, this.b), this.g = b())
				}, o.G = function() {
					jt.S.G.call(this), Ut(this), delete this.a
				};
				var zt = function(t) {
					function e(e, n, r) {
						var i = t.call(this) || this;
						return i.g = null != r ? e.bind(r) : e, i.h = n, i.b = null, i.c = !1, i.a = null, i
					}
					return function(t, e) {
						function n() {
							this.constructor = t
						}
						r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
					}(e, t), e.prototype.f = function(t) {
						this.b = arguments, this.a ? this.c = !0 : Vt(this)
					}, e.prototype.G = function() {
						t.prototype.G.call(this), this.a && (s.clearTimeout(this.a), this.a = null, this.c = !1, this.b = null)
					}, e
				}(_);

				function Bt(t) {
					_.call(this), this.b = t, this.a = {}
				}
				w(Bt, _);
				var qt = [];

				function Gt(t, e, n, r) {
					Array.isArray(n) || (n && (qt[0] = n.toString()), n = qt);
					for (var i = 0; i < n.length; i++) {
						var o = vt(e, n[i], r || t.handleEvent, !1, t.b || t);
						if (!o) break;
						t.a[o.key] = o
					}
				}

				function Wt(t) {
					P(t.a, (function(t, e) {
						this.a.hasOwnProperty(e) && yt(t)
					}), t), t.a = {}
				}

				function Ht() {
					this.a = !0
				}

				function Kt(t, e, n, r) {
					t.info((function() {
						return "XMLHTTP TEXT (" + e + "): " + function(t, e) {
							if (!t.a) return e;
							if (!e) return null;
							try {
								var n = JSON.parse(e);
								if (n)
									for (t = 0; t < n.length; t++)
										if (Array.isArray(n[t])) {
											var r = n[t];
											if (!(2 > r.length)) {
												var i = r[1];
												if (Array.isArray(i) && !(1 > i.length)) {
													var o = i[0];
													if ("noop" != o && "stop" != o && "close" != o)
														for (var a = 1; a < i.length; a++) i[a] = ""
												}
											}
										} return kt(n)
							} catch (u) {
								return e
							}
						}(t, n) + (r ? " " + r : "")
					}))
				}
				Bt.prototype.G = function() {
					Bt.S.G.call(this), Wt(this)
				}, Bt.prototype.handleEvent = function() {
					throw Error("EventHandler.handleEvent not implemented")
				}, Ht.prototype.info = function() {};
				var Qt = null;

				function Xt() {
					return Qt = Qt || new Tt
				}

				function Yt(t) {
					rt.call(this, "serverreachability", t)
				}

				function $t(t) {
					var e = Xt();
					e.dispatchEvent(new Yt(e, t))
				}

				function Jt(t) {
					rt.call(this, "statevent", t)
				}

				function Zt(t) {
					var e = Xt();
					e.dispatchEvent(new Jt(e, t))
				}

				function te(t) {
					rt.call(this, "timingevent", t)
				}

				function ee(t, e) {
					if ("function" != l(t)) throw Error("Fn must not be null and must be a function");
					return s.setTimeout((function() {
						t()
					}), e)
				}
				w(Yt, rt), w(Jt, rt), w(te, rt);
				var ne = {
						NO_ERROR: 0,
						Za: 1,
						gb: 2,
						fb: 3,
						bb: 4,
						eb: 5,
						hb: 6,
						Da: 7,
						TIMEOUT: 8,
						kb: 9
					},
					re = {
						ab: "complete",
						ob: "success",
						Ea: "error",
						Da: "abort",
						mb: "ready",
						nb: "readystatechange",
						TIMEOUT: "timeout",
						ib: "incrementaldata",
						lb: "progress",
						cb: "downloadprogress",
						pb: "uploadprogress"
					};

				function ie() {}

				function oe(t) {
					var e;
					return (e = t.a) || (e = t.a = {}), e
				}

				function ae() {}
				ie.prototype.a = null;
				var ue, se = {
					OPEN: "a",
					$a: "b",
					Ea: "c",
					jb: "d"
				};

				function ce() {
					rt.call(this, "d")
				}

				function le() {
					rt.call(this, "c")
				}

				function fe() {}

				function he(t, e, n, r) {
					this.g = t, this.c = e, this.f = n, this.T = r || 1, this.J = new Bt(this), this.P = pe, t = B ? 125 : void 0, this.R = new jt(t), this.B = null, this.b = !1, this.j = this.l = this.i = this.H = this.u = this.U = this.o = null, this.s = [], this.a = null, this.D = 0, this.h = this.m = null, this.N = -1, this.A = !1, this.O = 0, this.F = null, this.W = this.C = this.V = this.I = !1
				}
				w(ce, rt), w(le, rt), w(fe, ie), ue = new fe;
				var pe = 45e3,
					de = {},
					ve = {};

				function me(t, e, n) {
					t.H = 1, t.i = Ue(De(e)), t.j = n, t.I = !0, ye(t, null)
				}

				function ye(t, e) {
					t.u = b(), we(t), t.l = De(t.i);
					var n = t.l,
						r = t.T;
					Array.isArray(r) || (r = [String(r)]), $e(n.b, "t", r), t.D = 0, t.a = Hn(t.g, t.g.C ? e : null), 0 < t.O && (t.F = new zt(y(t.Ca, t, t.a), t.O)), Gt(t.J, t.a, "readystatechange", t.Wa), e = t.B ? R(t.B) : {}, t.j ? (t.m || (t.m = "POST"), e["Content-Type"] = "application/x-www-form-urlencoded", t.a.ba(t.l, t.m, t.j, e)) : (t.m = "GET", t.a.ba(t.l, t.m, null, e)), $t(1),
						function(t, e, n, r, i, o) {
							t.info((function() {
								if (t.a)
									if (o)
										for (var a = "", u = o.split("&"), s = 0; s < u.length; s++) {
											var c = u[s].split("=");
											if (1 < c.length) {
												var l = c[0];
												c = c[1];
												var f = l.split("_");
												a = 2 <= f.length && "type" == f[1] ? a + (l + "=") + c + "&" : a + (l + "=redacted&")
											}
										} else a = null;
									else a = o;
								return "XMLHTTP REQ (" + r + ") [attempt " + i + "]: " + e + "\n" + n + "\n" + a
							}))
						}(t.c, t.m, t.l, t.f, t.T, t.j)
				}

				function ge(t, e, n) {
					for (var r = !0; !t.A && t.D < n.length;) {
						var i = be(t, n);
						if (i == ve) {
							4 == e && (t.h = 4, Zt(14), r = !1), Kt(t.c, t.f, null, "[Incomplete Response]");
							break
						}
						if (i == de) {
							t.h = 4, Zt(15), Kt(t.c, t.f, n, "[Invalid Chunk]"), r = !1;
							break
						}
						Kt(t.c, t.f, i, null), Se(t, i)
					}
					4 == e && 0 == n.length && (t.h = 1, Zt(16), r = !1), t.b = t.b && r, r ? 0 < n.length && !t.W && (t.W = !0, (e = t.g).a == t && e.V && !e.F && (e.c.info("Great, no buffering proxy detected. Bytes received: " + n.length), Un(e), e.F = !0)) : (Kt(t.c, t.f, n, "[Invalid Chunked Response]"), Te(t), Ie(t))
				}

				function be(t, e) {
					var n = t.D,
						r = e.indexOf("\n", n);
					return -1 == r ? ve : (n = Number(e.substring(n, r)), isNaN(n) ? de : (r += 1) + n > e.length ? ve : (e = e.substr(r, n), t.D = r + n, e))
				}

				function we(t) {
					t.U = b() + t.P, _e(t, t.P)
				}

				function _e(t, e) {
					if (null != t.o) throw Error("WatchDog timer not null");
					t.o = ee(y(t.Ua, t), e)
				}

				function Ee(t) {
					t.o && (s.clearTimeout(t.o), t.o = null)
				}

				function Ie(t) {
					0 == t.g.v || t.A || zn(t.g, t)
				}

				function Te(t) {
					Ee(t);
					var e = t.F;
					e && "function" == typeof e.ja && e.ja(), t.F = null, Ut(t.R), Wt(t.J), t.a && (e = t.a, t.a = null, e.abort(), e.ja())
				}

				function Se(t, e) {
					try {
						var n = t.g;
						if (0 != n.v && (n.a == t || on(n.b, t)))
							if (n.I = t.N, !t.C && on(n.b, t) && 3 == n.v) {
								try {
									var r = n.ka.a.parse(e)
								} catch (m) {
									r = null
								}
								if (Array.isArray(r) && 3 == r.length) {
									var i = r;
									if (0 == i[0]) {
										t: if (!n.j) {
											if (n.a) {
												if (!(n.a.u + 3e3 < t.u)) break t;
												Vn(n), xn(n)
											}
											jn(n), Zt(18)
										}
									}
									else n.oa = i[1], 0 < n.oa - n.P && 37500 > i[2] && n.H && 0 == n.o && !n.m && (n.m = ee(y(n.Ra, n), 6e3));
									if (1 >= rn(n.b) && n.ea) {
										try {
											n.ea()
										} catch (m) {}
										n.ea = void 0
									}
								} else qn(n, 11)
							} else if ((t.C || n.a == t) && Vn(n), !k(e))
							for (e = r = n.ka.a.parse(e), r = 0; r < e.length; r++)
								if (i = e[r], n.P = i[0], i = i[1], 2 == n.v)
									if ("c" == i[0]) {
										n.J = i[1], n.ga = i[2];
										var o = i[3];
										null != o && (n.ha = o, n.c.info("VER=" + n.ha));
										var a = i[4];
										null != a && (n.pa = a, n.c.info("SVER=" + n.pa));
										var u = i[5];
										if (null != u && "number" === typeof u && 0 < u) {
											var s = 1.5 * u;
											n.D = s, n.c.info("backChannelRequestTimeoutMs_=" + s)
										}
										s = n;
										var c = t.a;
										if (c) {
											var l = c.a ? c.a.getResponseHeader("X-Client-Wire-Protocol") : null;
											if (l) {
												var f = s.b;
												!f.a && (x(l, "spdy") || x(l, "quic") || x(l, "h2")) && (f.f = f.g, f.a = new Set, f.b && (an(f, f.b), f.b = null))
											}
											if (s.A) {
												var h = c.a ? c.a.getResponseHeader("X-HTTP-Session-Id") : null;
												h && (s.na = h, je(s.B, s.A, h))
											}
										}
										n.v = 3, n.f && n.f.ta(), n.V && (n.N = b() - t.u, n.c.info("Handshake RTT: " + n.N + "ms"));
										var p = t;
										if ((s = n).la = Wn(s, s.C ? s.ga : null, s.fa), p.C) {
											un(s.b, p);
											var d = p,
												v = s.D;
											v && d.setTimeout(v), d.o && (Ee(d), we(d)), s.a = p
										} else Mn(s);
										0 < n.g.length && Dn(n)
									} else "stop" != i[0] && "close" != i[0] || qn(n, 7);
						else 3 == n.v && ("stop" == i[0] || "close" == i[0] ? "stop" == i[0] ? qn(n, 7) : An(n) : "noop" != i[0] && n.f && n.f.sa(i), n.o = 0);
						$t(4)
					} catch (m) {}
				}

				function ke(t, e) {
					if (t.forEach && "function" == typeof t.forEach) t.forEach(e, void 0);
					else if (f(t) || "string" === typeof t) I(t, e, void 0);
					else {
						if (t.L && "function" == typeof t.L) var n = t.L();
						else if (t.K && "function" == typeof t.K) n = void 0;
						else if (f(t) || "string" === typeof t) {
							n = [];
							for (var r = t.length, i = 0; i < r; i++) n.push(i)
						} else
							for (i in n = [], r = 0, t) n[r++] = i;
						i = (r = function(t) {
							if (t.K && "function" == typeof t.K) return t.K();
							if ("string" === typeof t) return t.split("");
							if (f(t)) {
								for (var e = [], n = t.length, r = 0; r < n; r++) e.push(t[r]);
								return e
							}
							for (r in e = [], n = 0, t) e[n++] = t[r];
							return e
						}(t)).length;
						for (var o = 0; o < i; o++) e.call(void 0, r[o], n && n[o], t)
					}
				}

				function Ne(t, e) {
					this.b = {}, this.a = [], this.c = 0;
					var n = arguments.length;
					if (1 < n) {
						if (n % 2) throw Error("Uneven number of arguments");
						for (var r = 0; r < n; r += 2) this.set(arguments[r], arguments[r + 1])
					} else if (t)
						if (t instanceof Ne)
							for (n = t.L(), r = 0; r < n.length; r++) this.set(n[r], t.get(n[r]));
						else
							for (r in t) this.set(r, t[r])
				}

				function Ae(t) {
					if (t.c != t.a.length) {
						for (var e = 0, n = 0; e < t.a.length;) {
							var r = t.a[e];
							xe(t.b, r) && (t.a[n++] = r), e++
						}
						t.a.length = n
					}
					if (t.c != t.a.length) {
						var i = {};
						for (n = e = 0; e < t.a.length;) xe(i, r = t.a[e]) || (t.a[n++] = r, i[r] = 1), e++;
						t.a.length = n
					}
				}

				function xe(t, e) {
					return Object.prototype.hasOwnProperty.call(t, e)
				}(o = he.prototype).setTimeout = function(t) {
					this.P = t
				}, o.Wa = function(t) {
					t = t.target;
					var e = this.F;
					e && 3 == Tn(t) ? e.f() : this.Ca(t)
				}, o.Ca = function(t) {
					try {
						if (t == this.a) t: {
							var e = Tn(this.a),
								n = this.a.ua(),
								r = this.a.X();
							if (!(3 > e || 3 == e && !B && !this.a.$())) {
								this.A || 4 != e || 7 == n || $t(8 == n || 0 >= r ? 3 : 2), Ee(this);
								var i = this.a.X();
								this.N = i;
								var o = this.a.$();
								if (this.b = 200 == i, function(t, e, n, r, i, o, a) {
										t.info((function() {
											return "XMLHTTP RESP (" + r + ") [ attempt " + i + "]: " + e + "\n" + n + "\n" + o + " " + a
										}))
									}(this.c, this.m, this.l, this.f, this.T, e, i), this.b) {
									if (this.V && !this.C) {
										e: {
											if (this.a) {
												var a, u = this.a;
												if ((a = u.a ? u.a.getResponseHeader("X-HTTP-Initial-Response") : null) && !k(a)) {
													var s = a;
													break e
												}
											}
											s = null
										}
										if (!s) {
											this.b = !1, this.h = 3, Zt(12), Te(this), Ie(this);
											break t
										}
										Kt(this.c, this.f, s, "Initial handshake response via X-HTTP-Initial-Response"),
										this.C = !0,
										Se(this, s)
									}
									this.I ? (ge(this, e, o), B && this.b && 3 == e && (Gt(this.J, this.R, "tick", this.Va), this.R.start())) : (Kt(this.c, this.f, o, null), Se(this, o)), 4 == e && Te(this), this.b && !this.A && (4 == e ? zn(this.g, this) : (this.b = !1, we(this)))
								} else 400 == i && 0 < o.indexOf("Unknown SID") ? (this.h = 3, Zt(12)) : (this.h = 0, Zt(13)), Te(this), Ie(this)
							}
						}
					} catch (c) {}
				}, o.Va = function() {
					if (this.a) {
						var t = Tn(this.a),
							e = this.a.$();
						this.D < e.length && (Ee(this), ge(this, t, e), this.b && 4 != t && we(this))
					}
				}, o.cancel = function() {
					this.A = !0, Te(this)
				}, o.Ua = function() {
					this.o = null;
					var t = b();
					0 <= t - this.U ? (function(t, e) {
						t.info((function() {
							return "TIMEOUT: " + e
						}))
					}(this.c, this.l), 2 != this.H && ($t(3), Zt(17)), Te(this), this.h = 2, Ie(this)) : _e(this, this.U - t)
				}, (o = Ne.prototype).K = function() {
					Ae(this);
					for (var t = [], e = 0; e < this.a.length; e++) t.push(this.b[this.a[e]]);
					return t
				}, o.L = function() {
					return Ae(this), this.a.concat()
				}, o.get = function(t, e) {
					return xe(this.b, t) ? this.b[t] : e
				}, o.set = function(t, e) {
					xe(this.b, t) || (this.c++, this.a.push(t)), this.b[t] = e
				}, o.forEach = function(t, e) {
					for (var n = this.L(), r = 0; r < n.length; r++) {
						var i = n[r],
							o = this.get(i);
						t.call(e, o, i, this)
					}
				};
				var Oe = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

				function Ce(t, e) {
					if (this.c = this.j = this.f = "", this.h = null, this.i = this.g = "", this.a = !1, t instanceof Ce) {
						this.a = void 0 !== e ? e : t.a, Pe(this, t.f), this.j = t.j, Re(this, t.c), Le(this, t.h), this.g = t.g, e = t.b;
						var n = new Ke;
						n.c = e.c, e.a && (n.a = new Ne(e.a), n.b = e.b), Me(this, n), this.i = t.i
					} else t && (n = String(t).match(Oe)) ? (this.a = !!e, Pe(this, n[1] || "", !0), this.j = Fe(n[2] || ""), Re(this, n[3] || "", !0), Le(this, n[4]), this.g = Fe(n[5] || "", !0), Me(this, n[6] || "", !0), this.i = Fe(n[7] || "")) : (this.a = !!e, this.b = new Ke(null, this.a))
				}

				function De(t) {
					return new Ce(t)
				}

				function Pe(t, e, n) {
					t.f = n ? Fe(e, !0) : e, t.f && (t.f = t.f.replace(/:$/, ""))
				}

				function Re(t, e, n) {
					t.c = n ? Fe(e, !0) : e
				}

				function Le(t, e) {
					if (e) {
						if (e = Number(e), isNaN(e) || 0 > e) throw Error("Bad port number " + e);
						t.h = e
					} else t.h = null
				}

				function Me(t, e, n) {
					e instanceof Ke ? (t.b = e, function(t, e) {
						e && !t.f && (Qe(t), t.c = null, t.a.forEach((function(t, e) {
							var n = e.toLowerCase();
							e != n && (Xe(this, e), $e(this, n, t))
						}), t)), t.f = e
					}(t.b, t.a)) : (n || (e = Ve(e, We)), t.b = new Ke(e, t.a))
				}

				function je(t, e, n) {
					t.b.set(e, n)
				}

				function Ue(t) {
					return je(t, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ b()).toString(36)), t
				}

				function Fe(t, e) {
					return t ? e ? decodeURI(t.replace(/%25/g, "%2525")) : decodeURIComponent(t) : ""
				}

				function Ve(t, e, n) {
					return "string" === typeof t ? (t = encodeURI(t).replace(e, ze), n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), t) : null
				}

				function ze(t) {
					return "%" + ((t = t.charCodeAt(0)) >> 4 & 15).toString(16) + (15 & t).toString(16)
				}
				Ce.prototype.toString = function() {
					var t = [],
						e = this.f;
					e && t.push(Ve(e, Be, !0), ":");
					var n = this.c;
					return (n || "file" == e) && (t.push("//"), (e = this.j) && t.push(Ve(e, Be, !0), "@"), t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), null != (n = this.h) && t.push(":", String(n))), (n = this.g) && (this.c && "/" != n.charAt(0) && t.push("/"), t.push(Ve(n, "/" == n.charAt(0) ? Ge : qe, !0))), (n = this.b.toString()) && t.push("?", n), (n = this.i) && t.push("#", Ve(n, He)), t.join("")
				};
				var Be = /[#\/\?@]/g,
					qe = /[#\?:]/g,
					Ge = /[#\?]/g,
					We = /[#\?@]/g,
					He = /#/g;

				function Ke(t, e) {
					this.b = this.a = null, this.c = t || null, this.f = !!e
				}

				function Qe(t) {
					t.a || (t.a = new Ne, t.b = 0, t.c && function(t, e) {
						if (t) {
							t = t.split("&");
							for (var n = 0; n < t.length; n++) {
								var r = t[n].indexOf("="),
									i = null;
								if (0 <= r) {
									var o = t[n].substring(0, r);
									i = t[n].substring(r + 1)
								} else o = t[n];
								e(o, i ? decodeURIComponent(i.replace(/\+/g, " ")) : "")
							}
						}
					}(t.c, (function(e, n) {
						t.add(decodeURIComponent(e.replace(/\+/g, " ")), n)
					})))
				}

				function Xe(t, e) {
					Qe(t), e = Je(t, e), xe(t.a.b, e) && (t.c = null, t.b -= t.a.get(e).length, xe((t = t.a).b, e) && (delete t.b[e], t.c--, t.a.length > 2 * t.c && Ae(t)))
				}

				function Ye(t, e) {
					return Qe(t), e = Je(t, e), xe(t.a.b, e)
				}

				function $e(t, e, n) {
					Xe(t, e), 0 < n.length && (t.c = null, t.a.set(Je(t, e), S(n)), t.b += n.length)
				}

				function Je(t, e) {
					return e = String(e), t.f && (e = e.toLowerCase()), e
				}

				function Ze(t, e) {
					this.b = t, this.a = e
				}

				function tn(t) {
					this.g = t || en, s.PerformanceNavigationTiming ? t = 0 < (t = s.performance.getEntriesByType("navigation")).length && ("hq" == t[0].nextHopProtocol || "h2" == t[0].nextHopProtocol) : t = !!(s.ia && s.ia.ya && s.ia.ya() && s.ia.ya().qb), this.f = t ? this.g : 1, this.a = null, 1 < this.f && (this.a = new Set), this.b = null, this.c = []
				}(o = Ke.prototype).add = function(t, e) {
					Qe(this), this.c = null, t = Je(this, t);
					var n = this.a.get(t);
					return n || this.a.set(t, n = []), n.push(e), this.b += 1, this
				}, o.forEach = function(t, e) {
					Qe(this), this.a.forEach((function(n, r) {
						I(n, (function(n) {
							t.call(e, n, r, this)
						}), this)
					}), this)
				}, o.L = function() {
					Qe(this);
					for (var t = this.a.K(), e = this.a.L(), n = [], r = 0; r < e.length; r++)
						for (var i = t[r], o = 0; o < i.length; o++) n.push(e[r]);
					return n
				}, o.K = function(t) {
					Qe(this);
					var e = [];
					if ("string" === typeof t) Ye(this, t) && (e = T(e, this.a.get(Je(this, t))));
					else {
						t = this.a.K();
						for (var n = 0; n < t.length; n++) e = T(e, t[n])
					}
					return e
				}, o.set = function(t, e) {
					return Qe(this), this.c = null, Ye(this, t = Je(this, t)) && (this.b -= this.a.get(t).length), this.a.set(t, [e]), this.b += 1, this
				}, o.get = function(t, e) {
					return t && 0 < (t = this.K(t)).length ? String(t[0]) : e
				}, o.toString = function() {
					if (this.c) return this.c;
					if (!this.a) return "";
					for (var t = [], e = this.a.L(), n = 0; n < e.length; n++) {
						var r = e[n],
							i = encodeURIComponent(String(r));
						r = this.K(r);
						for (var o = 0; o < r.length; o++) {
							var a = i;
							"" !== r[o] && (a += "=" + encodeURIComponent(String(r[o]))), t.push(a)
						}
					}
					return this.c = t.join("&")
				};
				var en = 10;

				function nn(t) {
					return !!t.b || !!t.a && t.a.size >= t.f
				}

				function rn(t) {
					return t.b ? 1 : t.a ? t.a.size : 0
				}

				function on(t, e) {
					return t.b ? t.b == e : !!t.a && t.a.has(e)
				}

				function an(t, e) {
					t.a ? t.a.add(e) : t.b = e
				}

				function un(t, e) {
					t.b && t.b == e ? t.b = null : t.a && t.a.has(e) && t.a.delete(e)
				}

				function sn(t) {
					var e, n;
					if (null != t.b) return t.c.concat(t.b.s);
					if (null != t.a && 0 !== t.a.size) {
						var r = t.c;
						try {
							for (var o = i(t.a.values()), a = o.next(); !a.done; a = o.next()) {
								var u = a.value;
								r = r.concat(u.s)
							}
						} catch (s) {
							e = {
								error: s
							}
						} finally {
							try {
								a && !a.done && (n = o.return) && n.call(o)
							} finally {
								if (e) throw e.error
							}
						}
						return r
					}
					return S(t.c)
				}

				function cn() {}

				function ln() {
					this.a = new cn
				}

				function fn(t, e, n) {
					var r = n || "";
					try {
						ke(t, (function(t, n) {
							var i = t;
							h(t) && (i = kt(t)), e.push(r + n + "=" + encodeURIComponent(i))
						}))
					} catch (i) {
						throw e.push(r + "type=" + encodeURIComponent("_badmap")), i
					}
				}

				function hn(t, e, n, r, i) {
					try {
						e.onload = null, e.onerror = null, e.onabort = null, e.ontimeout = null, i(r)
					} catch (o) {}
				}
				tn.prototype.cancel = function() {
					var t, e;
					if (this.c = sn(this), this.b) this.b.cancel(), this.b = null;
					else if (this.a && 0 !== this.a.size) {
						try {
							for (var n = i(this.a.values()), r = n.next(); !r.done; r = n.next()) {
								r.value.cancel()
							}
						} catch (o) {
							t = {
								error: o
							}
						} finally {
							try {
								r && !r.done && (e = n.return) && e.call(n)
							} finally {
								if (t) throw t.error
							}
						}
						this.a.clear()
					}
				}, cn.prototype.stringify = function(t) {
					return s.JSON.stringify(t, void 0)
				}, cn.prototype.parse = function(t) {
					return s.JSON.parse(t, void 0)
				};
				var pn = s.JSON.parse;

				function dn(t) {
					Tt.call(this), this.headers = new Ne, this.H = t || null, this.b = !1, this.s = this.a = null, this.B = "", this.h = 0, this.f = "", this.g = this.A = this.l = this.u = !1, this.o = 0, this.m = null, this.I = vn, this.D = this.F = !1
				}
				w(dn, Tt);
				var vn = "",
					mn = /^https?$/i,
					yn = ["POST", "PUT"];

				function gn(t) {
					return "content-type" == t.toLowerCase()
				}

				function bn(t, e) {
					t.b = !1, t.a && (t.g = !0, t.a.abort(), t.g = !1), t.f = e, t.h = 5, wn(t), En(t)
				}

				function wn(t) {
					t.u || (t.u = !0, t.dispatchEvent("complete"), t.dispatchEvent("error"))
				}

				function _n(t) {
					if (t.b && "undefined" != typeof u && (!t.s[1] || 4 != Tn(t) || 2 != t.X()))
						if (t.l && 4 == Tn(t)) Ft(t.za, 0, t);
						else if (t.dispatchEvent("readystatechange"), 4 == Tn(t)) {
						t.b = !1;
						try {
							var e, n = t.X();
							t: switch (n) {
								case 200:
								case 201:
								case 202:
								case 204:
								case 206:
								case 304:
								case 1223:
									var r = !0;
									break t;
								default:
									r = !1
							}
							if (!(e = r)) {
								var i;
								if (i = 0 === n) {
									var o = String(t.B).match(Oe)[1] || null;
									if (!o && s.self && s.self.location) {
										var a = s.self.location.protocol;
										o = a.substr(0, a.length - 1)
									}
									i = !mn.test(o ? o.toLowerCase() : "")
								}
								e = i
							}
							if (e) t.dispatchEvent("complete"), t.dispatchEvent("success");
							else {
								t.h = 6;
								try {
									var c = 2 < Tn(t) ? t.a.statusText : ""
								} catch (l) {
									c = ""
								}
								t.f = c + " [" + t.X() + "]", wn(t)
							}
						} finally {
							En(t)
						}
					}
				}

				function En(t, e) {
					if (t.a) {
						In(t);
						var n = t.a,
							r = t.s[0] ? c : null;
						t.a = null, t.s = null, e || t.dispatchEvent("ready");
						try {
							n.onreadystatechange = r
						} catch (i) {}
					}
				}

				function In(t) {
					t.a && t.D && (t.a.ontimeout = null), t.m && (s.clearTimeout(t.m), t.m = null)
				}

				function Tn(t) {
					return t.a ? t.a.readyState : 0
				}

				function Sn(t, e, n) {
					t: {
						for (r in n) {
							var r = !1;
							break t
						}
						r = !0
					}
					r || (n = function(t) {
						var e = "";
						return P(t, (function(t, n) {
							e += n, e += ":", e += t, e += "\r\n"
						})), e
					}(n), "string" === typeof t ? null != n && encodeURIComponent(String(n)) : je(t, e, n))
				}

				function kn(t, e, n) {
					return n && n.internalChannelParams && n.internalChannelParams[t] || e
				}

				function Nn(t) {
					this.pa = 0, this.g = [], this.c = new Ht, this.ga = this.la = this.B = this.fa = this.a = this.na = this.A = this.W = this.i = this.O = this.l = null, this.La = this.R = 0, this.Ia = kn("failFast", !1, t), this.H = this.m = this.j = this.h = this.f = null, this.T = !0, this.I = this.oa = this.P = -1, this.U = this.o = this.u = 0, this.Fa = kn("baseRetryDelayMs", 5e3, t), this.Ma = kn("retryDelaySeedMs", 1e4, t), this.Ja = kn("forwardChannelMaxRetries", 2, t), this.ma = kn("forwardChannelRequestTimeoutMs", 2e4, t), this.Ka = t && t.g || void 0, this.D = void 0, this.C = t && t.supportsCrossDomainXhr || !1, this.J = "", this.b = new tn(t && t.concurrentRequestLimit), this.ka = new ln, this.da = t && t.fastHandshake || !1, this.Ga = t && t.b || !1, t && t.f && (this.c.a = !1), t && t.forceLongPolling && (this.T = !1), this.V = !this.da && this.T && t && t.c || !1, this.ea = void 0, this.N = 0, this.F = !1, this.s = null
				}

				function An(t) {
					if (On(t), 3 == t.v) {
						var e = t.R++,
							n = De(t.B);
						je(n, "SID", t.J), je(n, "RID", e), je(n, "TYPE", "terminate"), Rn(t, n), (e = new he(t, t.c, e, void 0)).H = 2, e.i = Ue(De(n)), n = !1, s.navigator && s.navigator.sendBeacon && (n = s.navigator.sendBeacon(e.i.toString(), "")), !n && s.Image && ((new Image).src = e.i, n = !0), n || (e.a = Hn(e.g, null), e.a.ba(e.i)), e.u = b(), we(e)
					}
					Gn(t)
				}

				function xn(t) {
					t.a && (Un(t), t.a.cancel(), t.a = null)
				}

				function On(t) {
					xn(t), t.j && (s.clearTimeout(t.j), t.j = null), Vn(t), t.b.cancel(), t.h && ("number" === typeof t.h && s.clearTimeout(t.h), t.h = null)
				}

				function Cn(t, e) {
					t.g.push(new Ze(t.La++, e)), 3 == t.v && Dn(t)
				}

				function Dn(t) {
					nn(t.b) || t.h || (t.h = !0, Pt(t.Ba, t), t.u = 0)
				}

				function Pn(t, e) {
					var n;
					n = e ? e.f : t.R++;
					var r = De(t.B);
					je(r, "SID", t.J), je(r, "RID", n), je(r, "AID", t.P), Rn(t, r), t.i && t.l && Sn(r, t.i, t.l), n = new he(t, t.c, n, t.u + 1), null === t.i && (n.B = t.l), e && (t.g = e.s.concat(t.g)), e = Ln(t, n, 1e3), n.setTimeout(Math.round(.5 * t.ma) + Math.round(.5 * t.ma * Math.random())), an(t.b, n), me(n, r, e)
				}

				function Rn(t, e) {
					t.f && ke({}, (function(t, n) {
						je(e, n, t)
					}))
				}

				function Ln(t, e, n) {
					n = Math.min(t.g.length, n);
					var r = t.f ? y(t.f.Ha, t.f, t) : null;
					t: for (var i = t.g, o = -1;;) {
						var a = ["count=" + n]; - 1 == o ? 0 < n ? (o = i[0].b, a.push("ofs=" + o)) : o = 0 : a.push("ofs=" + o);
						for (var u = !0, s = 0; s < n; s++) {
							var c = i[s].b,
								l = i[s].a;
							if (0 > (c -= o)) o = Math.max(0, i[s].b - 100), u = !1;
							else try {
								fn(l, a, "req" + c + "_")
							} catch (f) {
								r && r(l)
							}
						}
						if (u) {
							r = a.join("&");
							break t
						}
					}
					return t = t.g.splice(0, n), e.s = t, r
				}

				function Mn(t) {
					t.a || t.j || (t.U = 1, Pt(t.Aa, t), t.o = 0)
				}

				function jn(t) {
					return !(t.a || t.j || 3 <= t.o) && (t.U++, t.j = ee(y(t.Aa, t), Bn(t, t.o)), t.o++, !0)
				}

				function Un(t) {
					null != t.s && (s.clearTimeout(t.s), t.s = null)
				}

				function Fn(t) {
					t.a = new he(t, t.c, "rpc", t.U), null === t.i && (t.a.B = t.l), t.a.O = 0;
					var e = De(t.la);
					je(e, "RID", "rpc"), je(e, "SID", t.J), je(e, "CI", t.H ? "0" : "1"), je(e, "AID", t.P), Rn(t, e), je(e, "TYPE", "xmlhttp"), t.i && t.l && Sn(e, t.i, t.l), t.D && t.a.setTimeout(t.D);
					var n = t.a;
					t = t.ga, n.H = 1, n.i = Ue(De(e)), n.j = null, n.I = !0, ye(n, t)
				}

				function Vn(t) {
					null != t.m && (s.clearTimeout(t.m), t.m = null)
				}

				function zn(t, e) {
					var n = null;
					if (t.a == e) {
						Vn(t), Un(t), t.a = null;
						var r = 2
					} else {
						if (!on(t.b, e)) return;
						n = e.s, un(t.b, e), r = 1
					}
					if (t.I = e.N, 0 != t.v)
						if (e.b)
							if (1 == r) {
								n = e.j ? e.j.length : 0, e = b() - e.u;
								var i = t.u;
								(r = Xt()).dispatchEvent(new te(r, n, e, i)), Dn(t)
							} else Mn(t);
					else if (3 == (i = e.h) || 0 == i && 0 < t.I || !(1 == r && function(t, e) {
							return !(rn(t.b) >= t.b.f - (t.h ? 1 : 0)) && (t.h ? (t.g = e.s.concat(t.g), !0) : !(1 == t.v || 2 == t.v || t.u >= (t.Ia ? 0 : t.Ja)) && (t.h = ee(y(t.Ba, t, e), Bn(t, t.u)), t.u++, !0))
						}(t, e) || 2 == r && jn(t))) switch (n && 0 < n.length && (e = t.b, e.c = e.c.concat(n)), i) {
						case 1:
							qn(t, 5);
							break;
						case 4:
							qn(t, 10);
							break;
						case 3:
							qn(t, 6);
							break;
						default:
							qn(t, 2)
					}
				}

				function Bn(t, e) {
					var n = t.Fa + Math.floor(Math.random() * t.Ma);
					return t.f || (n *= 2), n * e
				}

				function qn(t, e) {
					if (t.c.info("Error code " + e), 2 == e) {
						var n = null;
						t.f && (n = null);
						var r = y(t.Xa, t);
						n || (n = new Ce("//www.google.com/images/cleardot.gif"), s.location && "http" == s.location.protocol || Pe(n, "https"), Ue(n)),
							function(t, e) {
								var n = new Ht;
								if (s.Image) {
									var r = new Image;
									r.onload = g(hn, n, r, "TestLoadImage: loaded", !0, e), r.onerror = g(hn, n, r, "TestLoadImage: error", !1, e), r.onabort = g(hn, n, r, "TestLoadImage: abort", !1, e), r.ontimeout = g(hn, n, r, "TestLoadImage: timeout", !1, e), s.setTimeout((function() {
										r.ontimeout && r.ontimeout()
									}), 1e4), r.src = t
								} else e(!1)
							}(n.toString(), r)
					} else Zt(2);
					t.v = 0, t.f && t.f.ra(e), Gn(t), On(t)
				}

				function Gn(t) {
					t.v = 0, t.I = -1, t.f && (0 == sn(t.b).length && 0 == t.g.length || (t.b.c.length = 0, S(t.g), t.g.length = 0), t.f.qa())
				}

				function Wn(t, e, n) {
					var r = function(t) {
						return t instanceof Ce ? De(t) : new Ce(t, void 0)
					}(n);
					if ("" != r.c) e && Re(r, e + "." + r.c), Le(r, r.h);
					else {
						var i = s.location;
						r = function(t, e, n, r) {
							var i = new Ce(null, void 0);
							return t && Pe(i, t), e && Re(i, e), n && Le(i, n), r && (i.g = r), i
						}(i.protocol, e ? e + "." + i.hostname : i.hostname, +i.port, n)
					}
					return t.W && P(t.W, (function(t, e) {
						je(r, e, t)
					})), e = t.A, n = t.na, e && n && je(r, e, n), je(r, "VER", t.ha), Rn(t, r), r
				}

				function Hn(t, e) {
					if (e && !t.C) throw Error("Can't create secondary domain capable XhrIo object.");
					return (e = new dn(t.Ka)).F = t.C, e
				}

				function Kn() {}

				function Qn() {
					if (V && !(10 <= Number(Z))) throw Error("Environmental error: no available transport.")
				}

				function Xn(t, e) {
					Tt.call(this), this.a = new Nn(e), this.l = t, this.b = e && e.messageUrlParams || null, t = e && e.messageHeaders || null, e && e.clientProtocolHeaderRequired && (t ? t["X-Client-Protocol"] = "webchannel" : t = {
						"X-Client-Protocol": "webchannel"
					}), this.a.l = t, t = e && e.initMessageHeaders || null, e && e.messageContentType && (t ? t["X-WebChannel-Content-Type"] = e.messageContentType : t = {
						"X-WebChannel-Content-Type": e.messageContentType
					}), e && e.a && (t ? t["X-WebChannel-Client-Profile"] = e.a : t = {
						"X-WebChannel-Client-Profile": e.a
					}), this.a.O = t, (t = e && e.httpHeadersOverwriteParam) && !k(t) && (this.a.i = t), this.h = e && e.supportsCrossDomainXhr || !1, this.g = e && e.sendRawJson || !1, (e = e && e.httpSessionIdParam) && !k(e) && (this.a.A = e, null !== (t = this.b) && e in t && (e in (t = this.b) && delete t[e])), this.f = new Jn(this)
				}

				function Yn(t) {
					ce.call(this);
					var e = t.__sm__;
					if (e) {
						t: {
							for (var n in e) {
								t = n;
								break t
							}
							t = void 0
						}(this.c = t) ? (t = this.c, this.data = null !== e && t in e ? e[t] : void 0) : this.data = e
					}
					else this.data = t
				}

				function $n() {
					le.call(this), this.status = 1
				}

				function Jn(t) {
					this.a = t
				}(o = dn.prototype).ba = function(t, e, n, r) {
					if (this.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.B + "; newUri=" + t);
					e = e ? e.toUpperCase() : "GET", this.B = t, this.f = "", this.h = 0, this.u = !1, this.b = !0, this.a = new XMLHttpRequest, this.s = this.H ? oe(this.H) : oe(ue), this.a.onreadystatechange = y(this.za, this);
					try {
						this.A = !0, this.a.open(e, String(t), !0), this.A = !1
					} catch (o) {
						return void bn(this, o)
					}
					t = n || "";
					var i = new Ne(this.headers);
					r && ke(r, (function(t, e) {
						i.set(e, t)
					})), r = function(t) {
						t: {
							for (var e = gn, n = t.length, r = "string" === typeof t ? t.split("") : t, i = 0; i < n; i++)
								if (i in r && e.call(void 0, r[i], i, t)) {
									e = i;
									break t
								} e = -1
						}
						return 0 > e ? null : "string" === typeof t ? t.charAt(e) : t[e]
					}(i.L()), n = s.FormData && t instanceof s.FormData, !(0 <= E(yn, e)) || r || n || i.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"), i.forEach((function(t, e) {
						this.a.setRequestHeader(e, t)
					}), this), this.I && (this.a.responseType = this.I), "withCredentials" in this.a && this.a.withCredentials !== this.F && (this.a.withCredentials = this.F);
					try {
						In(this), 0 < this.o && ((this.D = function(t) {
							return V && $(9) && "number" === typeof t.timeout && void 0 !== t.ontimeout
						}(this.a)) ? (this.a.timeout = this.o, this.a.ontimeout = y(this.xa, this)) : this.m = Ft(this.xa, this.o, this)), this.l = !0, this.a.send(t), this.l = !1
					} catch (o) {
						bn(this, o)
					}
				}, o.xa = function() {
					"undefined" != typeof u && this.a && (this.f = "Timed out after " + this.o + "ms, aborting", this.h = 8, this.dispatchEvent("timeout"), this.abort(8))
				}, o.abort = function(t) {
					this.a && this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1, this.h = t || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), En(this))
				}, o.G = function() {
					this.a && (this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1), En(this, !0)), dn.S.G.call(this)
				}, o.za = function() {
					this.j || (this.A || this.l || this.g ? _n(this) : this.Ta())
				}, o.Ta = function() {
					_n(this)
				}, o.X = function() {
					try {
						return 2 < Tn(this) ? this.a.status : -1
					} catch (t) {
						return -1
					}
				}, o.$ = function() {
					try {
						return this.a ? this.a.responseText : ""
					} catch (t) {
						return ""
					}
				}, o.Na = function(t) {
					if (this.a) {
						var e = this.a.responseText;
						return t && 0 == e.indexOf(t) && (e = e.substring(t.length)), pn(e)
					}
				}, o.ua = function() {
					return this.h
				}, o.Qa = function() {
					return "string" === typeof this.f ? this.f : String(this.f)
				}, (o = Nn.prototype).ha = 8, o.v = 1, o.Ba = function(t) {
					if (this.h)
						if (this.h = null, 1 == this.v) {
							if (!t) {
								this.R = Math.floor(1e5 * Math.random()), t = this.R++;
								var e, n = new he(this, this.c, t, void 0),
									r = this.l;
								if (this.O && (r ? M(r = R(r), this.O) : r = this.O), null === this.i && (n.B = r), this.da) t: {
									for (var i = e = 0; i < this.g.length; i++) {
										var o = this.g[i];
										if (void 0 === (o = "__data__" in o.a && "string" === typeof(o = o.a.__data__) ? o.length : void 0)) break;
										if (4096 < (e += o)) {
											e = i;
											break t
										}
										if (4096 === e || i === this.g.length - 1) {
											e = i + 1;
											break t
										}
									}
									e = 1e3
								}
								else e = 1e3;
								e = Ln(this, n, e), je(i = De(this.B), "RID", t), je(i, "CVER", 22), this.A && je(i, "X-HTTP-Session-Id", this.A), Rn(this, i), this.i && r && Sn(i, this.i, r), an(this.b, n), this.Ga && je(i, "TYPE", "init"), this.da ? (je(i, "$req", e), je(i, "SID", "null"), n.V = !0, me(n, i, null)) : me(n, i, e), this.v = 2
							}
						} else 3 == this.v && (t ? Pn(this, t) : 0 == this.g.length || nn(this.b) || Pn(this))
				}, o.Aa = function() {
					if (this.j = null, Fn(this), this.V && !(this.F || null == this.a || 0 >= this.N)) {
						var t = 2 * this.N;
						this.c.info("BP detection timer enabled: " + t), this.s = ee(y(this.Sa, this), t)
					}
				}, o.Sa = function() {
					this.s && (this.s = null, this.c.info("BP detection timeout reached."), this.c.info("Buffering proxy detected and switch to long-polling!"), this.H = !1, this.F = !0, xn(this), Fn(this))
				}, o.Ra = function() {
					null != this.m && (this.m = null, xn(this), jn(this), Zt(19))
				}, o.Xa = function(t) {
					t ? (this.c.info("Successfully pinged google.com"), Zt(2)) : (this.c.info("Failed to ping google.com"), Zt(1))
				}, (o = Kn.prototype).ta = function() {}, o.sa = function() {}, o.ra = function() {}, o.qa = function() {}, o.Ha = function() {}, Qn.prototype.a = function(t, e) {
					return new Xn(t, e)
				}, w(Xn, Tt), (o = Xn.prototype).addEventListener = function(t, e, n, r) {
					Xn.S.addEventListener.call(this, t, e, n, r)
				}, o.removeEventListener = function(t, e, n, r) {
					Xn.S.removeEventListener.call(this, t, e, n, r)
				}, o.Oa = function() {
					this.a.f = this.f, this.h && (this.a.C = !0);
					var t = this.a,
						e = this.l,
						n = this.b || void 0;
					Zt(0), t.fa = e, t.W = n || {}, t.H = t.T, t.B = Wn(t, null, t.fa), Dn(t)
				}, o.close = function() {
					An(this.a)
				}, o.Pa = function(t) {
					if ("string" === typeof t) {
						var e = {};
						e.__data__ = t, Cn(this.a, e)
					} else this.g ? ((e = {}).__data__ = kt(t), Cn(this.a, e)) : Cn(this.a, t)
				}, o.G = function() {
					this.a.f = null, delete this.f, An(this.a), delete this.a, Xn.S.G.call(this)
				}, w(Yn, ce), w($n, le), w(Jn, Kn), Jn.prototype.ta = function() {
					this.a.dispatchEvent("a")
				}, Jn.prototype.sa = function(t) {
					this.a.dispatchEvent(new Yn(t))
				}, Jn.prototype.ra = function(t) {
					this.a.dispatchEvent(new $n(t))
				}, Jn.prototype.qa = function() {
					this.a.dispatchEvent("b")
				}, Qn.prototype.createWebChannel = Qn.prototype.a, Xn.prototype.send = Xn.prototype.Pa, Xn.prototype.open = Xn.prototype.Oa, Xn.prototype.close = Xn.prototype.close, ne.NO_ERROR = 0, ne.TIMEOUT = 8, ne.HTTP_ERROR = 6, re.COMPLETE = "complete", ae.EventType = se, se.OPEN = "a", se.CLOSE = "b", se.ERROR = "c", se.MESSAGE = "d", Tt.prototype.listen = Tt.prototype.va, dn.prototype.listenOnce = dn.prototype.wa, dn.prototype.getLastError = dn.prototype.Qa, dn.prototype.getLastErrorCode = dn.prototype.ua, dn.prototype.getStatus = dn.prototype.X, dn.prototype.getResponseJson = dn.prototype.Na, dn.prototype.getResponseText = dn.prototype.$, dn.prototype.send = dn.prototype.ba;
				var Zn = {
						createWebChannelTransport: function() {
							return new Qn
						},
						ErrorCode: ne,
						EventType: re,
						WebChannel: ae,
						XhrIo: dn
					},
					tr = Zn.createWebChannelTransport,
					er = Zn.ErrorCode,
					nr = Zn.EventType,
					rr = Zn.WebChannel,
					ir = Zn.XhrIo;
				e.default = Zn
			}.call(this, n(8))
	}, function(t, e, n) {
		"use strict";
		n(29)
	}, function(t, e, n) {
		(function(t) {
			(function() {
				var e, r = n(3).default,
					i = "function" == typeof Object.defineProperties ? Object.defineProperty : function(t, e, n) {
						t != Array.prototype && t != Object.prototype && (t[e] = n.value)
					};
				var o = function(e) {
					e = ["object" == typeof window && window, "object" == typeof self && self, "object" == typeof t && t, e];
					for (var n = 0; n < e.length; ++n) {
						var r = e[n];
						if (r && r.Math == Math) return r
					}
					return globalThis
				}(this);

				function a(t) {
					var e = 0;
					return function() {
						return e < t.length ? {
							done: !1,
							value: t[e++]
						} : {
							done: !0
						}
					}
				}

				function u(t) {
					var e = "undefined" != typeof Symbol && Symbol.iterator && t[Symbol.iterator];
					return e ? e.call(t) : {
						next: a(t)
					}
				}! function(t, e) {
					if (e) {
						var n = o;
						t = t.split(".");
						for (var r = 0; r < t.length - 1; r++) {
							var a = t[r];
							a in n || (n[a] = {}), n = n[a]
						}(e = e(r = n[t = t[t.length - 1]])) != r && null != e && i(n, t, {
							configurable: !0,
							writable: !0,
							value: e
						})
					}
				}("Promise", (function(t) {
					function e(t) {
						this.b = 0, this.c = void 0, this.a = [];
						var e = this.f();
						try {
							t(e.resolve, e.reject)
						} catch (n) {
							e.reject(n)
						}
					}

					function n() {
						this.a = null
					}

					function r(t) {
						return t instanceof e ? t : new e((function(e) {
							e(t)
						}))
					}
					if (t) return t;
					n.prototype.b = function(t) {
						if (null == this.a) {
							this.a = [];
							var e = this;
							this.c((function() {
								e.g()
							}))
						}
						this.a.push(t)
					};
					var i = o.setTimeout;
					n.prototype.c = function(t) {
						i(t, 0)
					}, n.prototype.g = function() {
						for (; this.a && this.a.length;) {
							var t = this.a;
							this.a = [];
							for (var e = 0; e < t.length; ++e) {
								var n = t[e];
								t[e] = null;
								try {
									n()
								} catch (r) {
									this.f(r)
								}
							}
						}
						this.a = null
					}, n.prototype.f = function(t) {
						this.c((function() {
							throw t
						}))
					}, e.prototype.f = function() {
						function t(t) {
							return function(r) {
								n || (n = !0, t.call(e, r))
							}
						}
						var e = this,
							n = !1;
						return {
							resolve: t(this.m),
							reject: t(this.g)
						}
					}, e.prototype.m = function(t) {
						if (t === this) this.g(new TypeError("A Promise cannot resolve to itself"));
						else if (t instanceof e) this.s(t);
						else {
							t: switch (typeof t) {
								case "object":
									var n = null != t;
									break t;
								case "function":
									n = !0;
									break t;
								default:
									n = !1
							}
							n ? this.u(t) : this.h(t)
						}
					}, e.prototype.u = function(t) {
						var e = void 0;
						try {
							e = t.then
						} catch (n) {
							return void this.g(n)
						}
						"function" == typeof e ? this.w(e, t) : this.h(t)
					}, e.prototype.g = function(t) {
						this.i(2, t)
					}, e.prototype.h = function(t) {
						this.i(1, t)
					}, e.prototype.i = function(t, e) {
						if (0 != this.b) throw Error("Cannot settle(" + t + ", " + e + "): Promise already settled in state" + this.b);
						this.b = t, this.c = e, this.l()
					}, e.prototype.l = function() {
						if (null != this.a) {
							for (var t = 0; t < this.a.length; ++t) a.b(this.a[t]);
							this.a = null
						}
					};
					var a = new n;
					return e.prototype.s = function(t) {
						var e = this.f();
						t.Oa(e.resolve, e.reject)
					}, e.prototype.w = function(t, e) {
						var n = this.f();
						try {
							t.call(e, n.resolve, n.reject)
						} catch (r) {
							n.reject(r)
						}
					}, e.prototype.then = function(t, n) {
						function r(t, e) {
							return "function" == typeof t ? function(e) {
								try {
									i(t(e))
								} catch (n) {
									o(n)
								}
							} : e
						}
						var i, o, a = new e((function(t, e) {
							i = t, o = e
						}));
						return this.Oa(r(t, i), r(n, o)), a
					}, e.prototype.catch = function(t) {
						return this.then(void 0, t)
					}, e.prototype.Oa = function(t, e) {
						function n() {
							switch (r.b) {
								case 1:
									t(r.c);
									break;
								case 2:
									e(r.c);
									break;
								default:
									throw Error("Unexpected state: " + r.b)
							}
						}
						var r = this;
						null == this.a ? a.b(n) : this.a.push(n)
					}, e.resolve = r, e.reject = function(t) {
						return new e((function(e, n) {
							n(t)
						}))
					}, e.race = function(t) {
						return new e((function(e, n) {
							for (var i = u(t), o = i.next(); !o.done; o = i.next()) r(o.value).Oa(e, n)
						}))
					}, e.all = function(t) {
						var n = u(t),
							i = n.next();
						return i.done ? r([]) : new e((function(t, e) {
							function o(e) {
								return function(n) {
									a[e] = n, 0 == --u && t(a)
								}
							}
							var a = [],
								u = 0;
							do {
								a.push(void 0), u++, r(i.value).Oa(o(a.length - 1), e), i = n.next()
							} while (!i.done)
						}))
					}, e
				}));
				var s = s || {},
					c = this || self,
					l = /^[\w+/_-]+[=]{0,2}$/,
					f = null;

				function h() {}

				function p(t) {
					var e = typeof t;
					if ("object" == e) {
						if (!t) return "null";
						if (t instanceof Array) return "array";
						if (t instanceof Object) return e;
						var n = Object.prototype.toString.call(t);
						if ("[object Window]" == n) return "object";
						if ("[object Array]" == n || "number" == typeof t.length && "undefined" != typeof t.splice && "undefined" != typeof t.propertyIsEnumerable && !t.propertyIsEnumerable("splice")) return "array";
						if ("[object Function]" == n || "undefined" != typeof t.call && "undefined" != typeof t.propertyIsEnumerable && !t.propertyIsEnumerable("call")) return "function"
					} else if ("function" == e && "undefined" == typeof t.call) return "object";
					return e
				}

				function d(t) {
					var e = p(t);
					return "array" == e || "object" == e && "number" == typeof t.length
				}

				function v(t) {
					return "function" == p(t)
				}

				function m(t) {
					var e = typeof t;
					return "object" == e && null != t || "function" == e
				}

				function y(t) {
					return Object.prototype.hasOwnProperty.call(t, g) && t[g] || (t[g] = ++b)
				}
				var g = "closure_uid_" + (1e9 * Math.random() >>> 0),
					b = 0;

				function w(t, e, n) {
					return t.call.apply(t.bind, arguments)
				}

				function _(t, e, n) {
					if (!t) throw Error();
					if (2 < arguments.length) {
						var r = Array.prototype.slice.call(arguments, 2);
						return function() {
							var n = Array.prototype.slice.call(arguments);
							return Array.prototype.unshift.apply(n, r), t.apply(e, n)
						}
					}
					return function() {
						return t.apply(e, arguments)
					}
				}

				function E(t, e, n) {
					return (E = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? w : _).apply(null, arguments)
				}

				function I(t, e) {
					var n = Array.prototype.slice.call(arguments, 1);
					return function() {
						var e = n.slice();
						return e.push.apply(e, arguments), t.apply(this, e)
					}
				}
				var T = Date.now || function() {
					return +new Date
				};

				function S(t, e) {
					function n() {}
					n.prototype = e.prototype, t.Za = e.prototype, t.prototype = new n, t.prototype.constructor = t
				}

				function k(t, e, n) {
					this.code = x + t, this.message = e || O[t] || "", this.a = n || null
				}

				function N(t) {
					var e = t && t.code;
					return e ? new k(e.substring(x.length), t.message, t.serverResponse) : null
				}
				S(k, Error), k.prototype.v = function() {
					var t = {
						code: this.code,
						message: this.message
					};
					return this.a && (t.serverResponse = this.a), t
				}, k.prototype.toJSON = function() {
					return this.v()
				};
				var A, x = "auth/",
					O = {
						"admin-restricted-operation": "This operation is restricted to administrators only.",
						"argument-error": "",
						"app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
						"app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
						"captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
						"code-expired": "The SMS code has expired. Please re-send the verification code to try again.",
						"cordova-not-ready": "Cordova framework is not ready.",
						"cors-unsupported": "This browser is not supported.",
						"credential-already-in-use": "This credential is already associated with a different user account.",
						"custom-token-mismatch": "The custom token corresponds to a different audience.",
						"requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
						"dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
						"email-change-needs-verification": "Multi-factor users must always have a verified email.",
						"email-already-in-use": "The email address is already in use by another account.",
						"expired-action-code": "The action code has expired. ",
						"cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.",
						"internal-error": "An internal error has occurred.",
						"invalid-app-credential": "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
						"invalid-app-id": "The mobile app identifier is not registed for the current project.",
						"invalid-user-token": "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
						"invalid-auth-event": "An internal error has occurred.",
						"invalid-verification-code": "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.",
						"invalid-continue-uri": "The continue URL provided in the request is invalid.",
						"invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
						"invalid-custom-token": "The custom token format is incorrect. Please check the documentation.",
						"invalid-dynamic-link-domain": "The provided dynamic link domain is not configured or authorized for the current project.",
						"invalid-email": "The email address is badly formatted.",
						"invalid-api-key": "Your API key is invalid, please check you have copied it correctly.",
						"invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.",
						"invalid-credential": "The supplied auth credential is malformed or has expired.",
						"invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
						"invalid-multi-factor-session": "The request does not contain a valid proof of first factor successful sign-in.",
						"invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
						"invalid-oauth-client-id": "The OAuth client ID provided is either invalid or does not match the specified API key.",
						"unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
						"invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
						"wrong-password": "The password is invalid or the user does not have a password.",
						"invalid-persistence-type": "The specified persistence type is invalid. It can only be local, session or none.",
						"invalid-phone-number": "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
						"invalid-provider-id": "The specified provider ID is invalid.",
						"invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
						"invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
						"invalid-verification-id": "The verification ID used to create the phone auth credential is invalid.",
						"invalid-tenant-id": "The Auth instance's tenant ID is invalid.",
						"multi-factor-info-not-found": "The user does not have a second factor matching the identifier provided.",
						"multi-factor-auth-required": "Proof of ownership of a second factor is required to complete sign-in.",
						"missing-android-pkg-name": "An Android Package Name must be provided if the Android App is required to be installed.",
						"auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
						"missing-app-credential": "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
						"missing-verification-code": "The phone auth credential was created with an empty SMS verification code.",
						"missing-continue-uri": "A continue URL must be provided in the request.",
						"missing-iframe-start": "An internal error has occurred.",
						"missing-ios-bundle-id": "An iOS Bundle ID must be provided if an App Store ID is provided.",
						"missing-multi-factor-info": "No second factor identifier is provided.",
						"missing-multi-factor-session": "The request is missing proof of first factor successful sign-in.",
						"missing-or-invalid-nonce": "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
						"missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
						"missing-verification-id": "The phone auth credential was created with an empty verification ID.",
						"app-deleted": "This instance of FirebaseApp has been deleted.",
						"account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
						"network-request-failed": "A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
						"no-auth-event": "An internal error has occurred.",
						"no-such-provider": "User was not linked to an account with the given provider.",
						"null-user": "A null user object was provided as the argument for an operation which requires a non-null user object.",
						"operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
						"operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
						"popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
						"popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
						"provider-already-linked": "User can only be linked to one identity for the given provider.",
						"quota-exceeded": "The project's quota for this operation has been exceeded.",
						"redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.",
						"redirect-operation-pending": "A redirect sign-in operation is already pending.",
						"rejected-credential": "The request contains malformed or mismatching credentials.",
						"second-factor-already-in-use": "The second factor is already enrolled on this account.",
						"maximum-second-factor-count-exceeded": "The maximum allowed number of second factors on a user has been exceeded.",
						"tenant-id-mismatch": "The provided tenant ID does not match the Auth instance's tenant ID",
						timeout: "The operation has timed out.",
						"user-token-expired": "The user's credential is no longer valid. The user must sign in again.",
						"too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.",
						"unauthorized-continue-uri": "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
						"unsupported-first-factor": "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
						"unsupported-persistence-type": "The current environment does not support the specified persistence type.",
						"unsupported-tenant-operation": "This operation is not supported in a multi-tenant context.",
						"unverified-email": "The operation requires a verified email.",
						"user-cancelled": "The user did not grant your application the permissions it requested.",
						"user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
						"user-disabled": "The user account has been disabled by an administrator.",
						"user-mismatch": "The supplied credentials do not correspond to the previously signed in user.",
						"user-signed-out": "",
						"weak-password": "The password must be 6 characters long or more.",
						"web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled."
					},
					C = {
						hd: {
							Ra: "https://staging-identitytoolkit.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
							Xa: "https://staging-securetoken.sandbox.googleapis.com/v1/token",
							Ua: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/",
							id: "b"
						},
						pd: {
							Ra: "https://www.googleapis.com/identitytoolkit/v3/relyingparty/",
							Xa: "https://securetoken.googleapis.com/v1/token",
							Ua: "https://identitytoolkit.googleapis.com/v2/",
							id: "p"
						},
						rd: {
							Ra: "https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
							Xa: "https://staging-securetoken.sandbox.googleapis.com/v1/token",
							Ua: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/",
							id: "s"
						},
						sd: {
							Ra: "https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",
							Xa: "https://test-securetoken.sandbox.googleapis.com/v1/token",
							Ua: "https://test-identitytoolkit.sandbox.googleapis.com/v2/",
							id: "t"
						}
					};

				function D(t) {
					for (var e in C)
						if (C[e].id === t) return {
							firebaseEndpoint: (t = C[e]).Ra,
							secureTokenEndpoint: t.Xa,
							identityPlatformEndpoint: t.Ua
						};
					return null
				}

				function P(t) {
					if (!t) return !1;
					try {
						return !!t.$goog_Thenable
					} catch (e) {
						return !1
					}
				}

				function R(t) {
					if (Error.captureStackTrace) Error.captureStackTrace(this, R);
					else {
						var e = Error().stack;
						e && (this.stack = e)
					}
					t && (this.message = String(t))
				}

				function L(t, e) {
					for (var n = "", r = (t = t.split("%s")).length - 1, i = 0; i < r; i++) n += t[i] + (i < e.length ? e[i] : "%s");
					R.call(this, n + t[r])
				}

				function M(t, e) {
					throw new L("Failure" + (t ? ": " + t : ""), Array.prototype.slice.call(arguments, 1))
				}

				function j(t, e) {
					this.c = t, this.f = e, this.b = 0, this.a = null
				}

				function U(t, e) {
					t.f(e), 100 > t.b && (t.b++, e.next = t.a, t.a = e)
				}

				function F() {
					this.b = this.a = null
				}
				A = D("__EID__") ? "__EID__" : void 0, S(R, Error), R.prototype.name = "CustomError", S(L, R), L.prototype.name = "AssertionError", j.prototype.get = function() {
					if (0 < this.b) {
						this.b--;
						var t = this.a;
						this.a = t.next, t.next = null
					} else t = this.c();
					return t
				};
				var V = new j((function() {
					return new B
				}), (function(t) {
					t.reset()
				}));

				function z() {
					var t = ge,
						e = null;
					return t.a && (e = t.a, t.a = t.a.next, t.a || (t.b = null), e.next = null), e
				}

				function B() {
					this.next = this.b = this.a = null
				}
				F.prototype.add = function(t, e) {
					var n = V.get();
					n.set(t, e), this.b ? this.b.next = n : this.a = n, this.b = n
				}, B.prototype.set = function(t, e) {
					this.a = t, this.b = e, this.next = null
				}, B.prototype.reset = function() {
					this.next = this.b = this.a = null
				};
				var q = Array.prototype.indexOf ? function(t, e) {
						return Array.prototype.indexOf.call(t, e, void 0)
					} : function(t, e) {
						if ("string" === typeof t) return "string" !== typeof e || 1 != e.length ? -1 : t.indexOf(e, 0);
						for (var n = 0; n < t.length; n++)
							if (n in t && t[n] === e) return n;
						return -1
					},
					G = Array.prototype.forEach ? function(t, e, n) {
						Array.prototype.forEach.call(t, e, n)
					} : function(t, e, n) {
						for (var r = t.length, i = "string" === typeof t ? t.split("") : t, o = 0; o < r; o++) o in i && e.call(n, i[o], o, t)
					};
				var W = Array.prototype.filter ? function(t, e) {
						return Array.prototype.filter.call(t, e, void 0)
					} : function(t, e) {
						for (var n = t.length, r = [], i = 0, o = "string" === typeof t ? t.split("") : t, a = 0; a < n; a++)
							if (a in o) {
								var u = o[a];
								e.call(void 0, u, a, t) && (r[i++] = u)
							} return r
					},
					H = Array.prototype.map ? function(t, e) {
						return Array.prototype.map.call(t, e, void 0)
					} : function(t, e) {
						for (var n = t.length, r = Array(n), i = "string" === typeof t ? t.split("") : t, o = 0; o < n; o++) o in i && (r[o] = e.call(void 0, i[o], o, t));
						return r
					},
					K = Array.prototype.some ? function(t, e) {
						return Array.prototype.some.call(t, e, void 0)
					} : function(t, e) {
						for (var n = t.length, r = "string" === typeof t ? t.split("") : t, i = 0; i < n; i++)
							if (i in r && e.call(void 0, r[i], i, t)) return !0;
						return !1
					};

				function Q(t, e) {
					return 0 <= q(t, e)
				}

				function X(t, e) {
					var n;
					return (n = 0 <= (e = q(t, e))) && Array.prototype.splice.call(t, e, 1), n
				}

				function Y(t, e) {
					! function(t, e) {
						for (var n = "string" === typeof t ? t.split("") : t, r = t.length - 1; 0 <= r; --r) r in n && e.call(void 0, n[r], r, t)
					}(t, (function(n, r) {
						e.call(void 0, n, r, t) && 1 == Array.prototype.splice.call(t, r, 1).length && 0
					}))
				}

				function $(t) {
					return Array.prototype.concat.apply([], arguments)
				}

				function J(t) {
					var e = t.length;
					if (0 < e) {
						for (var n = Array(e), r = 0; r < e; r++) n[r] = t[r];
						return n
					}
					return []
				}
				var Z, tt = String.prototype.trim ? function(t) {
						return t.trim()
					} : function(t) {
						return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]
					},
					et = /&/g,
					nt = /</g,
					rt = />/g,
					it = /"/g,
					ot = /'/g,
					at = /\x00/g,
					ut = /[\x00&<>"']/;

				function st(t, e) {
					return -1 != t.indexOf(e)
				}

				function ct(t, e) {
					return t < e ? -1 : t > e ? 1 : 0
				}
				t: {
					var lt = c.navigator;
					if (lt) {
						var ft = lt.userAgent;
						if (ft) {
							Z = ft;
							break t
						}
					}
					Z = ""
				}

				function ht(t) {
					return st(Z, t)
				}

				function pt(t, e) {
					for (var n in t) e.call(void 0, t[n], n, t)
				}

				function dt(t) {
					for (var e in t) return !1;
					return !0
				}

				function vt(t) {
					var e, n = {};
					for (e in t) n[e] = t[e];
					return n
				}
				var mt = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

				function yt(t, e) {
					for (var n, r, i = 1; i < arguments.length; i++) {
						for (n in r = arguments[i]) t[n] = r[n];
						for (var o = 0; o < mt.length; o++) n = mt[o], Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
					}
				}

				function gt(t, e) {
					t: {
						try {
							var n = t && t.ownerDocument,
								r = n && (n.defaultView || n.parentWindow);
							if ((r = r || c).Element && r.Location) {
								var i = r;
								break t
							}
						} catch (a) {}
						i = null
					}
					if (i && "undefined" != typeof i[e] && (!t || !(t instanceof i[e]) && (t instanceof i.Location || t instanceof i.Element))) {
						if (m(t)) try {
							var o = t.constructor.displayName || t.constructor.name || Object.prototype.toString.call(t)
						} catch (a) {
							o = "<object could not be stringified>"
						} else o = void 0 === t ? "undefined" : null === t ? "null" : typeof t;
						M("Argument is not a %s (or a non-Element, non-Location mock); got: %s", e, o)
					}
				}

				function bt(t, e) {
					this.a = t === Et && e || "", this.b = _t
				}

				function wt(t) {
					return t instanceof bt && t.constructor === bt && t.b === _t ? t.a : (M("expected object of type Const, got '" + t + "'"), "type_error:Const")
				}
				bt.prototype.ra = !0, bt.prototype.qa = function() {
					return this.a
				}, bt.prototype.toString = function() {
					return "Const{" + this.a + "}"
				};
				var _t = {},
					Et = {},
					It = new bt(Et, "");

				function Tt(t, e) {
					this.a = t === Ot && e || "", this.b = xt
				}

				function St(t) {
					return t instanceof Tt && t.constructor === Tt && t.b === xt ? t.a : (M("expected object of type TrustedResourceUrl, got '" + t + "' of type " + p(t)), "type_error:TrustedResourceUrl")
				}

				function kt(t, e) {
					var n = wt(t);
					if (!At.test(n)) throw Error("Invalid TrustedResourceUrl format: " + n);
					return t = n.replace(Nt, (function(t, r) {
						if (!Object.prototype.hasOwnProperty.call(e, r)) throw Error('Found marker, "' + r + '", in format string, "' + n + '", but no valid label mapping found in args: ' + JSON.stringify(e));
						return (t = e[r]) instanceof bt ? wt(t) : encodeURIComponent(String(t))
					})), new Tt(Ot, t)
				}
				Tt.prototype.ra = !0, Tt.prototype.qa = function() {
					return this.a.toString()
				}, Tt.prototype.toString = function() {
					return "TrustedResourceUrl{" + this.a + "}"
				};
				var Nt = /%{(\w+)}/g,
					At = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
					xt = {},
					Ot = {};

				function Ct(t, e) {
					this.a = t === Mt && e || "", this.b = Lt
				}

				function Dt(t) {
					return t instanceof Ct && t.constructor === Ct && t.b === Lt ? t.a : (M("expected object of type SafeUrl, got '" + t + "' of type " + p(t)), "type_error:SafeUrl")
				}
				Ct.prototype.ra = !0, Ct.prototype.qa = function() {
					return this.a.toString()
				}, Ct.prototype.toString = function() {
					return "SafeUrl{" + this.a + "}"
				};
				var Pt = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

				function Rt(t) {
					return t instanceof Ct ? t : (t = "object" == typeof t && t.ra ? t.qa() : String(t), Pt.test(t) || (t = "about:invalid#zClosurez"), new Ct(Mt, t))
				}
				var Lt = {},
					Mt = {};

				function jt() {
					this.a = "", this.b = Ft
				}

				function Ut(t) {
					return t instanceof jt && t.constructor === jt && t.b === Ft ? t.a : (M("expected object of type SafeHtml, got '" + t + "' of type " + p(t)), "type_error:SafeHtml")
				}
				jt.prototype.ra = !0, jt.prototype.qa = function() {
					return this.a.toString()
				}, jt.prototype.toString = function() {
					return "SafeHtml{" + this.a + "}"
				};
				var Ft = {};

				function Vt(t) {
					var e = new jt;
					return e.a = t, e
				}
				Vt("<!DOCTYPE html>");
				var zt = Vt("");

				function Bt(t, e) {
					for (var n = t.split("%s"), r = "", i = Array.prototype.slice.call(arguments, 1); i.length && 1 < n.length;) r += n.shift() + i.shift();
					return r + n.join("%s")
				}

				function qt(t) {
					return ut.test(t) && (-1 != t.indexOf("&") && (t = t.replace(et, "&amp;")), -1 != t.indexOf("<") && (t = t.replace(nt, "&lt;")), -1 != t.indexOf(">") && (t = t.replace(rt, "&gt;")), -1 != t.indexOf('"') && (t = t.replace(it, "&quot;")), -1 != t.indexOf("'") && (t = t.replace(ot, "&#39;")), -1 != t.indexOf("\0") && (t = t.replace(at, "&#0;"))), t
				}

				function Gt(t) {
					return Gt[" "](t), t
				}
				Vt("<br>"), Gt[" "] = h;
				var Wt, Ht = ht("Opera"),
					Kt = ht("Trident") || ht("MSIE"),
					Qt = ht("Edge"),
					Xt = Qt || Kt,
					Yt = ht("Gecko") && !(st(Z.toLowerCase(), "webkit") && !ht("Edge")) && !(ht("Trident") || ht("MSIE")) && !ht("Edge"),
					$t = st(Z.toLowerCase(), "webkit") && !ht("Edge");

				function Jt() {
					var t = c.document;
					return t ? t.documentMode : void 0
				}
				t: {
					var Zt = "",
						te = function() {
							var t = Z;
							return Yt ? /rv:([^\);]+)(\)|;)/.exec(t) : Qt ? /Edge\/([\d\.]+)/.exec(t) : Kt ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t) : $t ? /WebKit\/(\S+)/.exec(t) : Ht ? /(?:Version)[ \/]?(\S+)/.exec(t) : void 0
						}();
					if (te && (Zt = te ? te[1] : ""), Kt) {
						var ee = Jt();
						if (null != ee && ee > parseFloat(Zt)) {
							Wt = String(ee);
							break t
						}
					}
					Wt = Zt
				}
				var ne, re = {};

				function ie(t) {
					return function(t, e) {
						var n = re;
						return Object.prototype.hasOwnProperty.call(n, t) ? n[t] : n[t] = e(t)
					}(t, (function() {
						for (var e = 0, n = tt(String(Wt)).split("."), r = tt(String(t)).split("."), i = Math.max(n.length, r.length), o = 0; 0 == e && o < i; o++) {
							var a = n[o] || "",
								u = r[o] || "";
							do {
								if (a = /(\d*)(\D*)(.*)/.exec(a) || ["", "", "", ""], u = /(\d*)(\D*)(.*)/.exec(u) || ["", "", "", ""], 0 == a[0].length && 0 == u[0].length) break;
								e = ct(0 == a[1].length ? 0 : parseInt(a[1], 10), 0 == u[1].length ? 0 : parseInt(u[1], 10)) || ct(0 == a[2].length, 0 == u[2].length) || ct(a[2], u[2]), a = a[3], u = u[3]
							} while (0 == e)
						}
						return 0 <= e
					}))
				}
				ne = c.document && Kt ? Jt() : void 0;
				try {
					new self.OffscreenCanvas(0, 0).getContext("2d")
				} catch (aa) {}
				var oe = !Kt || 9 <= Number(ne);

				function ae(t) {
					var e = document;
					return "string" === typeof t ? e.getElementById(t) : t
				}

				function ue(t, e) {
					pt(e, (function(e, n) {
						e && "object" == typeof e && e.ra && (e = e.qa()), "style" == n ? t.style.cssText = e : "class" == n ? t.className = e : "for" == n ? t.htmlFor = e : le.hasOwnProperty(n) ? t.setAttribute(le[n], e) : 0 == n.lastIndexOf("aria-", 0) || 0 == n.lastIndexOf("data-", 0) ? t.setAttribute(n, e) : t[n] = e
					}))
				}
				var se, ce, le = {
					cellpadding: "cellPadding",
					cellspacing: "cellSpacing",
					colspan: "colSpan",
					frameborder: "frameBorder",
					height: "height",
					maxlength: "maxLength",
					nonce: "nonce",
					role: "role",
					rowspan: "rowSpan",
					type: "type",
					usemap: "useMap",
					valign: "vAlign",
					width: "width"
				};

				function fe(t, e, n) {
					function r(n) {
						n && e.appendChild("string" === typeof n ? t.createTextNode(n) : n)
					}
					for (var i = 2; i < n.length; i++) {
						var o = n[i];
						!d(o) || m(o) && 0 < o.nodeType ? r(o) : G(pe(o) ? J(o) : o, r)
					}
				}

				function he(t, e) {
					return e = String(e), "application/xhtml+xml" === t.contentType && (e = e.toLowerCase()), t.createElement(e)
				}

				function pe(t) {
					if (t && "number" == typeof t.length) {
						if (m(t)) return "function" == typeof t.item || "string" == typeof t.item;
						if (v(t)) return "function" == typeof t.item
					}
					return !1
				}

				function de(t) {
					c.setTimeout((function() {
						throw t
					}), 0)
				}

				function ve() {
					var t = c.MessageChannel;
					if ("undefined" === typeof t && "undefined" !== typeof window && window.postMessage && window.addEventListener && !ht("Presto") && (t = function() {
							var t = he(document, "IFRAME");
							t.style.display = "none",
								function(t) {
									var e = new Tt(Ot, wt(It));
									gt(t, "HTMLIFrameElement"), t.src = St(e).toString()
								}(t), document.documentElement.appendChild(t);
							var e = t.contentWindow;
							(t = e.document).open(), t.write(Ut(zt)), t.close();
							var n = "callImmediate" + Math.random(),
								r = "file:" == e.location.protocol ? "*" : e.location.protocol + "//" + e.location.host;
							t = E((function(t) {
								"*" != r && t.origin != r || t.data != n || this.port1.onmessage()
							}), this), e.addEventListener("message", t, !1), this.port1 = {}, this.port2 = {
								postMessage: function() {
									e.postMessage(n, r)
								}
							}
						}), "undefined" !== typeof t && !ht("Trident") && !ht("MSIE")) {
						var e = new t,
							n = {},
							r = n;
						return e.port1.onmessage = function() {
								if (void 0 !== n.next) {
									var t = (n = n.next).Db;
									n.Db = null, t()
								}
							},
							function(t) {
								r.next = {
									Db: t
								}, r = r.next, e.port2.postMessage(0)
							}
					}
					return function(t) {
						c.setTimeout(t, 0)
					}
				}

				function me(t, e) {
					ce || function() {
						if (c.Promise && c.Promise.resolve) {
							var t = c.Promise.resolve(void 0);
							ce = function() {
								t.then(be)
							}
						} else ce = function() {
							var t = be;
							!v(c.setImmediate) || c.Window && c.Window.prototype && !ht("Edge") && c.Window.prototype.setImmediate == c.setImmediate ? (se || (se = ve()), se(t)) : c.setImmediate(t)
						}
					}(), ye || (ce(), ye = !0), ge.add(t, e)
				}
				var ye = !1,
					ge = new F;

				function be() {
					for (var t; t = z();) {
						try {
							t.a.call(t.b)
						} catch (e) {
							de(e)
						}
						U(V, t)
					}
					ye = !1
				}

				function we(t, e) {
					if (this.a = _e, this.i = void 0, this.f = this.b = this.c = null, this.g = this.h = !1, t != h) try {
						var n = this;
						t.call(e, (function(t) {
							Pe(n, Ee, t)
						}), (function(t) {
							if (!(t instanceof Ve)) try {
								if (t instanceof Error) throw t;
								throw Error("Promise rejected.")
							} catch (e) {}
							Pe(n, Ie, t)
						}))
					} catch (r) {
						Pe(this, Ie, r)
					}
				}
				var _e = 0,
					Ee = 2,
					Ie = 3;

				function Te() {
					this.next = this.f = this.b = this.g = this.a = null, this.c = !1
				}
				Te.prototype.reset = function() {
					this.f = this.b = this.g = this.a = null, this.c = !1
				};
				var Se = new j((function() {
					return new Te
				}), (function(t) {
					t.reset()
				}));

				function ke(t, e, n) {
					var r = Se.get();
					return r.g = t, r.b = e, r.f = n, r
				}

				function Ne(t) {
					if (t instanceof we) return t;
					var e = new we(h);
					return Pe(e, Ee, t), e
				}

				function Ae(t) {
					return new we((function(e, n) {
						n(t)
					}))
				}

				function xe(t, e, n) {
					Re(t, e, n, null) || me(I(e, t))
				}

				function Oe(t) {
					return new we((function(e) {
						var n = t.length,
							r = [];
						if (n)
							for (var i = function(t, i, o) {
									n--, r[t] = i ? {
										Mb: !0,
										value: o
									} : {
										Mb: !1,
										reason: o
									}, 0 == n && e(r)
								}, o = 0; o < t.length; o++) xe(t[o], I(i, o, !0), I(i, o, !1));
						else e(r)
					}))
				}

				function Ce(t, e) {
					t.b || t.a != Ee && t.a != Ie || Le(t), t.f ? t.f.next = e : t.b = e, t.f = e
				}

				function De(t, e, n, r) {
					var i = ke(null, null, null);
					return i.a = new we((function(t, o) {
						i.g = e ? function(n) {
							try {
								var i = e.call(r, n);
								t(i)
							} catch (a) {
								o(a)
							}
						} : t, i.b = n ? function(e) {
							try {
								var i = n.call(r, e);
								void 0 === i && e instanceof Ve ? o(e) : t(i)
							} catch (a) {
								o(a)
							}
						} : o
					})), i.a.c = t, Ce(t, i), i.a
				}

				function Pe(t, e, n) {
					t.a == _e && (t === n && (e = Ie, n = new TypeError("Promise cannot resolve to itself")), t.a = 1, Re(n, t.Yc, t.Zc, t) || (t.i = n, t.a = e, t.c = null, Le(t), e != Ie || n instanceof Ve || function(t, e) {
						t.g = !0, me((function() {
							t.g && Fe.call(null, e)
						}))
					}(t, n)))
				}

				function Re(t, e, n, r) {
					if (t instanceof we) return Ce(t, ke(e || h, n || null, r)), !0;
					if (P(t)) return t.then(e, n, r), !0;
					if (m(t)) try {
						var i = t.then;
						if (v(i)) return function(t, e, n, r, i) {
							function o(t) {
								a || (a = !0, r.call(i, t))
							}
							var a = !1;
							try {
								e.call(t, (function(t) {
									a || (a = !0, n.call(i, t))
								}), o)
							} catch (u) {
								o(u)
							}
						}(t, i, e, n, r), !0
					} catch (o) {
						return n.call(r, o), !0
					}
					return !1
				}

				function Le(t) {
					t.h || (t.h = !0, me(t.ec, t))
				}

				function Me(t) {
					var e = null;
					return t.b && (e = t.b, t.b = e.next, e.next = null), t.b || (t.f = null), e
				}

				function je(t, e, n, r) {
					if (n == Ie && e.b && !e.c)
						for (; t && t.g; t = t.c) t.g = !1;
					if (e.a) e.a.c = null, Ue(e, n, r);
					else try {
						e.c ? e.g.call(e.f) : Ue(e, n, r)
					} catch (i) {
						Fe.call(null, i)
					}
					U(Se, e)
				}

				function Ue(t, e, n) {
					e == Ee ? t.g.call(t.f, n) : t.b && t.b.call(t.f, n)
				}
				we.prototype.then = function(t, e, n) {
					return De(this, v(t) ? t : null, v(e) ? e : null, n)
				}, we.prototype.$goog_Thenable = !0, (e = we.prototype).ma = function(t, e) {
					return (t = ke(t, t, e)).c = !0, Ce(this, t), this
				}, e.o = function(t, e) {
					return De(this, null, t, e)
				}, e.cancel = function(t) {
					if (this.a == _e) {
						var e = new Ve(t);
						me((function() {
							! function t(e, n) {
								if (e.a == _e)
									if (e.c) {
										var r = e.c;
										if (r.b) {
											for (var i = 0, o = null, a = null, u = r.b; u && (u.c || (i++, u.a == e && (o = u), !(o && 1 < i))); u = u.next) o || (a = u);
											o && (r.a == _e && 1 == i ? t(r, n) : (a ? ((i = a).next == r.f && (r.f = i), i.next = i.next.next) : Me(r), je(r, o, Ie, n)))
										}
										e.c = null
									} else Pe(e, Ie, n)
							}(this, e)
						}), this)
					}
				}, e.Yc = function(t) {
					this.a = _e, Pe(this, Ee, t)
				}, e.Zc = function(t) {
					this.a = _e, Pe(this, Ie, t)
				}, e.ec = function() {
					for (var t; t = Me(this);) je(this, t, this.a, this.i);
					this.h = !1
				};
				var Fe = de;

				function Ve(t) {
					R.call(this, t)
				}

				function ze() {
					0 != Be && (qe[y(this)] = this), this.wa = this.wa, this.na = this.na
				}
				S(Ve, R), Ve.prototype.name = "cancel";
				var Be = 0,
					qe = {};

				function Ge(t) {
					if (!t.wa && (t.wa = !0, t.Ba(), 0 != Be)) {
						var e = y(t);
						if (0 != Be && t.na && 0 < t.na.length) throw Error(t + " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");
						delete qe[e]
					}
				}
				ze.prototype.wa = !1, ze.prototype.Ba = function() {
					if (this.na)
						for (; this.na.length;) this.na.shift()()
				};
				var We = Object.freeze || function(t) {
						return t
					},
					He = !Kt || 9 <= Number(ne),
					Ke = Kt && !ie("9"),
					Qe = function() {
						if (!c.addEventListener || !Object.defineProperty) return !1;
						var t = !1,
							e = Object.defineProperty({}, "passive", {
								get: function() {
									t = !0
								}
							});
						try {
							c.addEventListener("test", h, e), c.removeEventListener("test", h, e)
						} catch (n) {}
						return t
					}();

				function Xe(t, e) {
					this.type = t, this.b = this.target = e, this.defaultPrevented = !1
				}

				function Ye(t, e) {
					if (Xe.call(this, t ? t.type : ""), this.relatedTarget = this.b = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0, this.key = "", this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.pointerId = 0, this.pointerType = "", this.a = null, t) {
						var n = this.type = t.type,
							r = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : null;
						if (this.target = t.target || t.srcElement, this.b = e, e = t.relatedTarget) {
							if (Yt) {
								t: {
									try {
										Gt(e.nodeName);
										var i = !0;
										break t
									} catch (o) {}
									i = !1
								}
								i || (e = null)
							}
						} else "mouseover" == n ? e = t.fromElement : "mouseout" == n && (e = t.toElement);
						this.relatedTarget = e, r ? (this.clientX = void 0 !== r.clientX ? r.clientX : r.pageX, this.clientY = void 0 !== r.clientY ? r.clientY : r.pageY, this.screenX = r.screenX || 0, this.screenY = r.screenY || 0) : (this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX, this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY, this.screenX = t.screenX || 0, this.screenY = t.screenY || 0), this.button = t.button, this.key = t.key || "", this.ctrlKey = t.ctrlKey, this.altKey = t.altKey, this.shiftKey = t.shiftKey, this.metaKey = t.metaKey, this.pointerId = t.pointerId || 0, this.pointerType = "string" === typeof t.pointerType ? t.pointerType : $e[t.pointerType] || "", this.a = t, t.defaultPrevented && this.preventDefault()
					}
				}
				Xe.prototype.preventDefault = function() {
					this.defaultPrevented = !0
				}, S(Ye, Xe);
				var $e = We({
					2: "touch",
					3: "pen",
					4: "mouse"
				});
				Ye.prototype.preventDefault = function() {
					Ye.Za.preventDefault.call(this);
					var t = this.a;
					if (t.preventDefault) t.preventDefault();
					else if (t.returnValue = !1, Ke) try {
						(t.ctrlKey || 112 <= t.keyCode && 123 >= t.keyCode) && (t.keyCode = -1)
					} catch (e) {}
				}, Ye.prototype.f = function() {
					return this.a
				};
				var Je = "closure_listenable_" + (1e6 * Math.random() | 0),
					Ze = 0;

				function tn(t, e, n, r, i) {
					this.listener = t, this.proxy = null, this.src = e, this.type = n, this.capture = !!r, this.Ta = i, this.key = ++Ze, this.ua = this.Na = !1
				}

				function en(t) {
					t.ua = !0, t.listener = null, t.proxy = null, t.src = null, t.Ta = null
				}

				function nn(t) {
					this.src = t, this.a = {}, this.b = 0
				}

				function rn(t, e) {
					var n = e.type;
					n in t.a && X(t.a[n], e) && (en(e), 0 == t.a[n].length && (delete t.a[n], t.b--))
				}

				function on(t, e, n, r) {
					for (var i = 0; i < t.length; ++i) {
						var o = t[i];
						if (!o.ua && o.listener == e && o.capture == !!n && o.Ta == r) return i
					}
					return -1
				}
				nn.prototype.add = function(t, e, n, r, i) {
					var o = t.toString();
					(t = this.a[o]) || (t = this.a[o] = [], this.b++);
					var a = on(t, e, r, i);
					return -1 < a ? (e = t[a], n || (e.Na = !1)) : ((e = new tn(e, this.src, o, !!r, i)).Na = n, t.push(e)), e
				};
				var an = "closure_lm_" + (1e6 * Math.random() | 0),
					un = {};

				function sn(t, e, n, r, i) {
					if (r && r.once) ln(t, e, n, r, i);
					else if (Array.isArray(e))
						for (var o = 0; o < e.length; o++) sn(t, e[o], n, r, i);
					else n = bn(n), t && t[Je] ? _n(t, e, n, m(r) ? !!r.capture : !!r, i) : cn(t, e, n, !1, r, i)
				}

				function cn(t, e, n, r, i, o) {
					if (!e) throw Error("Invalid event type");
					var a = m(i) ? !!i.capture : !!i,
						u = yn(t);
					if (u || (t[an] = u = new nn(t)), !(n = u.add(e, n, r, a, o)).proxy) {
						if (r = function() {
								var t = mn,
									e = He ? function(n) {
										return t.call(e.src, e.listener, n)
									} : function(n) {
										if (!(n = t.call(e.src, e.listener, n))) return n
									};
								return e
							}(), n.proxy = r, r.src = t, r.listener = n, t.addEventListener) Qe || (i = a), void 0 === i && (i = !1), t.addEventListener(e.toString(), r, i);
						else if (t.attachEvent) t.attachEvent(pn(e.toString()), r);
						else {
							if (!t.addListener || !t.removeListener) throw Error("addEventListener and attachEvent are unavailable.");
							t.addListener(r)
						}
						0
					}
				}

				function ln(t, e, n, r, i) {
					if (Array.isArray(e))
						for (var o = 0; o < e.length; o++) ln(t, e[o], n, r, i);
					else n = bn(n), t && t[Je] ? En(t, e, n, m(r) ? !!r.capture : !!r, i) : cn(t, e, n, !0, r, i)
				}

				function fn(t, e, n, r, i) {
					if (Array.isArray(e))
						for (var o = 0; o < e.length; o++) fn(t, e[o], n, r, i);
					else r = m(r) ? !!r.capture : !!r, n = bn(n), t && t[Je] ? (t = t.u, (e = String(e).toString()) in t.a && (-1 < (n = on(o = t.a[e], n, r, i)) && (en(o[n]), Array.prototype.splice.call(o, n, 1), 0 == o.length && (delete t.a[e], t.b--)))) : t && (t = yn(t)) && (e = t.a[e.toString()], t = -1, e && (t = on(e, n, r, i)), (n = -1 < t ? e[t] : null) && hn(n))
				}

				function hn(t) {
					if ("number" !== typeof t && t && !t.ua) {
						var e = t.src;
						if (e && e[Je]) rn(e.u, t);
						else {
							var n = t.type,
								r = t.proxy;
							e.removeEventListener ? e.removeEventListener(n, r, t.capture) : e.detachEvent ? e.detachEvent(pn(n), r) : e.addListener && e.removeListener && e.removeListener(r), (n = yn(e)) ? (rn(n, t), 0 == n.b && (n.src = null, e[an] = null)) : en(t)
						}
					}
				}

				function pn(t) {
					return t in un ? un[t] : un[t] = "on" + t
				}

				function dn(t, e, n, r) {
					var i = !0;
					if ((t = yn(t)) && (e = t.a[e.toString()]))
						for (e = e.concat(), t = 0; t < e.length; t++) {
							var o = e[t];
							o && o.capture == n && !o.ua && (o = vn(o, r), i = i && !1 !== o)
						}
					return i
				}

				function vn(t, e) {
					var n = t.listener,
						r = t.Ta || t.src;
					return t.Na && hn(t), n.call(r, e)
				}

				function mn(t, e) {
					if (t.ua) return !0;
					if (!He) {
						if (!e) t: {
							e = ["window", "event"];
							for (var n = c, r = 0; r < e.length; r++)
								if (null == (n = n[e[r]])) {
									e = null;
									break t
								} e = n
						}
						if (e = new Ye(r = e, this), n = !0, !(0 > r.keyCode || void 0 != r.returnValue)) {
							t: {
								var i = !1;
								if (0 == r.keyCode) try {
									r.keyCode = -1;
									break t
								} catch (a) {
									i = !0
								}(i || void 0 == r.returnValue) && (r.returnValue = !0)
							}
							for (r = [], i = e.b; i; i = i.parentNode) r.push(i);
							for (t = t.type, i = r.length - 1; 0 <= i; i--) {
								e.b = r[i];
								var o = dn(r[i], t, !0, e);
								n = n && o
							}
							for (i = 0; i < r.length; i++) e.b = r[i],
							o = dn(r[i], t, !1, e),
							n = n && o
						}
						return n
					}
					return vn(t, new Ye(e, this))
				}

				function yn(t) {
					return (t = t[an]) instanceof nn ? t : null
				}
				var gn = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);

				function bn(t) {
					return v(t) ? t : (t[gn] || (t[gn] = function(e) {
						return t.handleEvent(e)
					}), t[gn])
				}

				function wn() {
					ze.call(this), this.u = new nn(this), this.Yb = this, this.eb = null
				}

				function _n(t, e, n, r, i) {
					t.u.add(String(e), n, !1, r, i)
				}

				function En(t, e, n, r, i) {
					t.u.add(String(e), n, !0, r, i)
				}

				function In(t, e, n, r) {
					if (!(e = t.u.a[String(e)])) return !0;
					e = e.concat();
					for (var i = !0, o = 0; o < e.length; ++o) {
						var a = e[o];
						if (a && !a.ua && a.capture == n) {
							var u = a.listener,
								s = a.Ta || a.src;
							a.Na && rn(t.u, a), i = !1 !== u.call(s, r) && i
						}
					}
					return i && !r.defaultPrevented
				}

				function Tn(t, e, n) {
					if (v(t)) n && (t = E(t, n));
					else {
						if (!t || "function" != typeof t.handleEvent) throw Error("Invalid listener argument");
						t = E(t.handleEvent, t)
					}
					return 2147483647 < Number(e) ? -1 : c.setTimeout(t, e || 0)
				}

				function Sn(t) {
					var e = null;
					return new we((function(n, r) {
						-1 == (e = Tn((function() {
							n(void 0)
						}), t)) && r(Error("Failed to schedule timer."))
					})).o((function(t) {
						throw c.clearTimeout(e), t
					}))
				}

				function kn(t) {
					if (t.V && "function" == typeof t.V) return t.V();
					if ("string" === typeof t) return t.split("");
					if (d(t)) {
						for (var e = [], n = t.length, r = 0; r < n; r++) e.push(t[r]);
						return e
					}
					for (r in e = [], n = 0, t) e[n++] = t[r];
					return e
				}

				function Nn(t) {
					if (t.X && "function" == typeof t.X) return t.X();
					if (!t.V || "function" != typeof t.V) {
						if (d(t) || "string" === typeof t) {
							var e = [];
							t = t.length;
							for (var n = 0; n < t; n++) e.push(n);
							return e
						}
						for (var r in e = [], n = 0, t) e[n++] = r;
						return e
					}
				}

				function An(t, e) {
					this.b = {}, this.a = [], this.c = 0;
					var n = arguments.length;
					if (1 < n) {
						if (n % 2) throw Error("Uneven number of arguments");
						for (var r = 0; r < n; r += 2) this.set(arguments[r], arguments[r + 1])
					} else if (t)
						if (t instanceof An)
							for (n = t.X(), r = 0; r < n.length; r++) this.set(n[r], t.get(n[r]));
						else
							for (r in t) this.set(r, t[r])
				}

				function xn(t) {
					if (t.c != t.a.length) {
						for (var e = 0, n = 0; e < t.a.length;) {
							var r = t.a[e];
							On(t.b, r) && (t.a[n++] = r), e++
						}
						t.a.length = n
					}
					if (t.c != t.a.length) {
						var i = {};
						for (n = e = 0; e < t.a.length;) On(i, r = t.a[e]) || (t.a[n++] = r, i[r] = 1), e++;
						t.a.length = n
					}
				}

				function On(t, e) {
					return Object.prototype.hasOwnProperty.call(t, e)
				}
				S(wn, ze), wn.prototype[Je] = !0, wn.prototype.addEventListener = function(t, e, n, r) {
					sn(this, t, e, n, r)
				}, wn.prototype.removeEventListener = function(t, e, n, r) {
					fn(this, t, e, n, r)
				}, wn.prototype.dispatchEvent = function(t) {
					var e, n = this.eb;
					if (n)
						for (e = []; n; n = n.eb) e.push(n);
					n = this.Yb;
					var r = t.type || t;
					if ("string" === typeof t) t = new Xe(t, n);
					else if (t instanceof Xe) t.target = t.target || n;
					else {
						var i = t;
						yt(t = new Xe(r, n), i)
					}
					if (i = !0, e)
						for (var o = e.length - 1; 0 <= o; o--) {
							var a = t.b = e[o];
							i = In(a, r, !0, t) && i
						}
					if (i = In(a = t.b = n, r, !0, t) && i, i = In(a, r, !1, t) && i, e)
						for (o = 0; o < e.length; o++) i = In(a = t.b = e[o], r, !1, t) && i;
					return i
				}, wn.prototype.Ba = function() {
					if (wn.Za.Ba.call(this), this.u) {
						var t, e = this.u;
						for (t in e.a) {
							for (var n = e.a[t], r = 0; r < n.length; r++) en(n[r]);
							delete e.a[t], e.b--
						}
					}
					this.eb = null
				}, (e = An.prototype).V = function() {
					xn(this);
					for (var t = [], e = 0; e < this.a.length; e++) t.push(this.b[this.a[e]]);
					return t
				}, e.X = function() {
					return xn(this), this.a.concat()
				}, e.clear = function() {
					this.b = {}, this.c = this.a.length = 0
				}, e.get = function(t, e) {
					return On(this.b, t) ? this.b[t] : e
				}, e.set = function(t, e) {
					On(this.b, t) || (this.c++, this.a.push(t)), this.b[t] = e
				}, e.forEach = function(t, e) {
					for (var n = this.X(), r = 0; r < n.length; r++) {
						var i = n[r],
							o = this.get(i);
						t.call(e, o, i, this)
					}
				};
				var Cn = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/\\#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

				function Dn(t, e) {
					var n;
					this.b = this.i = this.f = "", this.l = null, this.g = this.c = "", this.h = !1, t instanceof Dn ? (this.h = void 0 !== e ? e : t.h, Pn(this, t.f), this.i = t.i, this.b = t.b, Rn(this, t.l), this.c = t.c, Ln(this, tr(t.a)), this.g = t.g) : t && (n = String(t).match(Cn)) ? (this.h = !!e, Pn(this, n[1] || "", !0), this.i = Vn(n[2] || ""), this.b = Vn(n[3] || "", !0), Rn(this, n[4]), this.c = Vn(n[5] || "", !0), Ln(this, n[6] || "", !0), this.g = Vn(n[7] || "")) : (this.h = !!e, this.a = new Qn(null, this.h))
				}

				function Pn(t, e, n) {
					t.f = n ? Vn(e, !0) : e, t.f && (t.f = t.f.replace(/:$/, ""))
				}

				function Rn(t, e) {
					if (e) {
						if (e = Number(e), isNaN(e) || 0 > e) throw Error("Bad port number " + e);
						t.l = e
					} else t.l = null
				}

				function Ln(t, e, n) {
					e instanceof Qn ? (t.a = e, function(t, e) {
						e && !t.f && (Xn(t), t.c = null, t.a.forEach((function(t, e) {
							var n = e.toLowerCase();
							e != n && ($n(this, e), Zn(this, n, t))
						}), t)), t.f = e
					}(t.a, t.h)) : (n || (e = zn(e, Hn)), t.a = new Qn(e, t.h))
				}

				function Mn(t, e, n) {
					t.a.set(e, n)
				}

				function jn(t, e) {
					return t.a.get(e)
				}

				function Un(t) {
					return t instanceof Dn ? new Dn(t) : new Dn(t, void 0)
				}

				function Fn(t, e) {
					var n = new Dn(null, void 0);
					return Pn(n, "https"), t && (n.b = t), e && (n.c = e), n
				}

				function Vn(t, e) {
					return t ? e ? decodeURI(t.replace(/%25/g, "%2525")) : decodeURIComponent(t) : ""
				}

				function zn(t, e, n) {
					return "string" === typeof t ? (t = encodeURI(t).replace(e, Bn), n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), t) : null
				}

				function Bn(t) {
					return "%" + ((t = t.charCodeAt(0)) >> 4 & 15).toString(16) + (15 & t).toString(16)
				}
				Dn.prototype.toString = function() {
					var t = [],
						e = this.f;
					e && t.push(zn(e, qn, !0), ":");
					var n = this.b;
					return (n || "file" == e) && (t.push("//"), (e = this.i) && t.push(zn(e, qn, !0), "@"), t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), null != (n = this.l) && t.push(":", String(n))), (n = this.c) && (this.b && "/" != n.charAt(0) && t.push("/"), t.push(zn(n, "/" == n.charAt(0) ? Wn : Gn, !0))), (n = this.a.toString()) && t.push("?", n), (n = this.g) && t.push("#", zn(n, Kn)), t.join("")
				}, Dn.prototype.resolve = function(t) {
					var e = new Dn(this),
						n = !!t.f;
					n ? Pn(e, t.f) : n = !!t.i, n ? e.i = t.i : n = !!t.b, n ? e.b = t.b : n = null != t.l;
					var r = t.c;
					if (n) Rn(e, t.l);
					else if (n = !!t.c) {
						if ("/" != r.charAt(0))
							if (this.b && !this.c) r = "/" + r;
							else {
								var i = e.c.lastIndexOf("/"); - 1 != i && (r = e.c.substr(0, i + 1) + r)
							} if (".." == (i = r) || "." == i) r = "";
						else if (st(i, "./") || st(i, "/.")) {
							r = 0 == i.lastIndexOf("/", 0), i = i.split("/");
							for (var o = [], a = 0; a < i.length;) {
								var u = i[a++];
								"." == u ? r && a == i.length && o.push("") : ".." == u ? ((1 < o.length || 1 == o.length && "" != o[0]) && o.pop(), r && a == i.length && o.push("")) : (o.push(u), r = !0)
							}
							r = o.join("/")
						} else r = i
					}
					return n ? e.c = r : n = "" !== t.a.toString(), n ? Ln(e, tr(t.a)) : n = !!t.g, n && (e.g = t.g), e
				};
				var qn = /[#\/\?@]/g,
					Gn = /[#\?:]/g,
					Wn = /[#\?]/g,
					Hn = /[#\?@]/g,
					Kn = /#/g;

				function Qn(t, e) {
					this.b = this.a = null, this.c = t || null, this.f = !!e
				}

				function Xn(t) {
					t.a || (t.a = new An, t.b = 0, t.c && function(t, e) {
						if (t) {
							t = t.split("&");
							for (var n = 0; n < t.length; n++) {
								var r = t[n].indexOf("="),
									i = null;
								if (0 <= r) {
									var o = t[n].substring(0, r);
									i = t[n].substring(r + 1)
								} else o = t[n];
								e(o, i ? decodeURIComponent(i.replace(/\+/g, " ")) : "")
							}
						}
					}(t.c, (function(e, n) {
						t.add(decodeURIComponent(e.replace(/\+/g, " ")), n)
					})))
				}

				function Yn(t) {
					var e = Nn(t);
					if ("undefined" == typeof e) throw Error("Keys are undefined");
					var n = new Qn(null, void 0);
					t = kn(t);
					for (var r = 0; r < e.length; r++) {
						var i = e[r],
							o = t[r];
						Array.isArray(o) ? Zn(n, i, o) : n.add(i, o)
					}
					return n
				}

				function $n(t, e) {
					Xn(t), e = er(t, e), On(t.a.b, e) && (t.c = null, t.b -= t.a.get(e).length, On((t = t.a).b, e) && (delete t.b[e], t.c--, t.a.length > 2 * t.c && xn(t)))
				}

				function Jn(t, e) {
					return Xn(t), e = er(t, e), On(t.a.b, e)
				}

				function Zn(t, e, n) {
					$n(t, e), 0 < n.length && (t.c = null, t.a.set(er(t, e), J(n)), t.b += n.length)
				}

				function tr(t) {
					var e = new Qn;
					return e.c = t.c, t.a && (e.a = new An(t.a), e.b = t.b), e
				}

				function er(t, e) {
					return e = String(e), t.f && (e = e.toLowerCase()), e
				}

				function nr(t) {
					var e = [];
					return function t(e, n, r) {
						if (null == n) r.push("null");
						else {
							if ("object" == typeof n) {
								if (Array.isArray(n)) {
									var i = n;
									n = i.length, r.push("[");
									for (var o = "", a = 0; a < n; a++) r.push(o), t(e, i[a], r), o = ",";
									return void r.push("]")
								}
								if (!(n instanceof String || n instanceof Number || n instanceof Boolean)) {
									for (i in r.push("{"), o = "", n) Object.prototype.hasOwnProperty.call(n, i) && ("function" != typeof(a = n[i]) && (r.push(o), ar(i, r), r.push(":"), t(e, a, r), o = ","));
									return void r.push("}")
								}
								n = n.valueOf()
							}
							switch (typeof n) {
								case "string":
									ar(n, r);
									break;
								case "number":
									r.push(isFinite(n) && !isNaN(n) ? String(n) : "null");
									break;
								case "boolean":
									r.push(String(n));
									break;
								case "function":
									r.push("null");
									break;
								default:
									throw Error("Unknown type: " + typeof n)
							}
						}
					}(new rr, t, e), e.join("")
				}

				function rr() {}(e = Qn.prototype).add = function(t, e) {
					Xn(this), this.c = null, t = er(this, t);
					var n = this.a.get(t);
					return n || this.a.set(t, n = []), n.push(e), this.b += 1, this
				}, e.clear = function() {
					this.a = this.c = null, this.b = 0
				}, e.forEach = function(t, e) {
					Xn(this), this.a.forEach((function(n, r) {
						G(n, (function(n) {
							t.call(e, n, r, this)
						}), this)
					}), this)
				}, e.X = function() {
					Xn(this);
					for (var t = this.a.V(), e = this.a.X(), n = [], r = 0; r < e.length; r++)
						for (var i = t[r], o = 0; o < i.length; o++) n.push(e[r]);
					return n
				}, e.V = function(t) {
					Xn(this);
					var e = [];
					if ("string" === typeof t) Jn(this, t) && (e = $(e, this.a.get(er(this, t))));
					else {
						t = this.a.V();
						for (var n = 0; n < t.length; n++) e = $(e, t[n])
					}
					return e
				}, e.set = function(t, e) {
					return Xn(this), this.c = null, Jn(this, t = er(this, t)) && (this.b -= this.a.get(t).length), this.a.set(t, [e]), this.b += 1, this
				}, e.get = function(t, e) {
					return t && 0 < (t = this.V(t)).length ? String(t[0]) : e
				}, e.toString = function() {
					if (this.c) return this.c;
					if (!this.a) return "";
					for (var t = [], e = this.a.X(), n = 0; n < e.length; n++) {
						var r = e[n],
							i = encodeURIComponent(String(r));
						r = this.V(r);
						for (var o = 0; o < r.length; o++) {
							var a = i;
							"" !== r[o] && (a += "=" + encodeURIComponent(String(r[o]))), t.push(a)
						}
					}
					return this.c = t.join("&")
				};
				var ir = {
						'"': '\\"',
						"\\": "\\\\",
						"/": "\\/",
						"\b": "\\b",
						"\f": "\\f",
						"\n": "\\n",
						"\r": "\\r",
						"\t": "\\t",
						"\v": "\\u000b"
					},
					or = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;

				function ar(t, e) {
					e.push('"', t.replace(or, (function(t) {
						var e = ir[t];
						return e || (e = "\\u" + (65536 | t.charCodeAt(0)).toString(16).substr(1), ir[t] = e), e
					})), '"')
				}

				function ur() {
					var t = kr();
					return Kt && !!ne && 11 == ne || /Edge\/\d+/.test(t)
				}

				function sr() {
					return c.window && c.window.location.href || self && self.location && self.location.href || ""
				}

				function cr(t, e) {
					e = e || c.window;
					var n = "about:blank";
					t && (n = Dt(Rt(t))), e.location.href = n
				}

				function lr(t) {
					return !!((t = (t || kr()).toLowerCase()).match(/android/) || t.match(/webos/) || t.match(/iphone|ipad|ipod/) || t.match(/blackberry/) || t.match(/windows phone/) || t.match(/iemobile/))
				}

				function fr(t) {
					t = t || c.window;
					try {
						t.close()
					} catch (e) {}
				}

				function hr(t, e, n) {
					var r = Math.floor(1e9 * Math.random()).toString();
					e = e || 500, n = n || 600;
					var i = (window.screen.availHeight - n) / 2,
						o = (window.screen.availWidth - e) / 2;
					for (a in e = {
							width: e,
							height: n,
							top: 0 < i ? i : 0,
							left: 0 < o ? o : 0,
							location: !0,
							resizable: !0,
							statusbar: !0,
							toolbar: !1
						}, n = kr().toLowerCase(), r && (e.target = r, st(n, "crios/") && (e.target = "_blank")), Ir(kr()) == _r && (t = t || "http://localhost", e.scrollbars = !0), n = t || "", (t = e) || (t = {}), r = window, e = n instanceof Ct ? n : Rt("undefined" != typeof n.href ? n.href : String(n)), n = t.target || n.target, i = [], t) switch (a) {
						case "width":
						case "height":
						case "top":
						case "left":
							i.push(a + "=" + t[a]);
							break;
						case "target":
						case "noopener":
						case "noreferrer":
							break;
						default:
							i.push(a + "=" + (t[a] ? 1 : 0))
					}
					var a = i.join(",");
					if ((ht("iPhone") && !ht("iPod") && !ht("iPad") || ht("iPad") || ht("iPod")) && r.navigator && r.navigator.standalone && n && "_self" != n ? (gt(a = he(document, "A"), "HTMLAnchorElement"), e instanceof Ct || e instanceof Ct || (e = "object" == typeof e && e.ra ? e.qa() : String(e), Pt.test(e) || (e = "about:invalid#zClosurez"), e = new Ct(Mt, e)), a.href = Dt(e), a.setAttribute("target", n), t.noreferrer && a.setAttribute("rel", "noreferrer"), (t = document.createEvent("MouseEvent")).initMouseEvent("click", !0, !0, r, 1), a.dispatchEvent(t), a = {}) : t.noreferrer ? (a = r.open("", n, a), t = Dt(e), a && (Xt && st(t, ";") && (t = "'" + t.replace(/'/g, "%27") + "'"), a.opener = null, t = Vt('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + qt(t) + '">'), r = a.document) && (r.write(Ut(t)), r.close())) : (a = r.open(Dt(e), n, a)) && t.noopener && (a.opener = null), a) try {
						a.focus()
					} catch (u) {}
					return a
				}
				var pr = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
					dr = /^[^@]+@[^@]+$/;

				function vr() {
					var t = null;
					return new we((function(e) {
						"complete" == c.document.readyState ? e() : (t = function() {
							e()
						}, ln(window, "load", t))
					})).o((function(e) {
						throw fn(window, "load", t), e
					}))
				}

				function mr(t) {
					return t = t || kr(), !("file:" !== Cr() && "ionic:" !== Cr() || !t.toLowerCase().match(/iphone|ipad|ipod|android/))
				}

				function yr() {
					var t = c.window;
					try {
						return !(!t || t == t.top)
					} catch (e) {
						return !1
					}
				}

				function gr() {
					return "undefined" !== typeof c.WorkerGlobalScope && "function" === typeof c.importScripts
				}

				function br() {
					return r.INTERNAL.hasOwnProperty("reactNative") ? "ReactNative" : r.INTERNAL.hasOwnProperty("node") ? "Node" : gr() ? "Worker" : "Browser"
				}

				function wr() {
					var t = br();
					return "ReactNative" === t || "Node" === t
				}
				var _r = "Firefox",
					Er = "Chrome";

				function Ir(t) {
					var e = t.toLowerCase();
					return st(e, "opera/") || st(e, "opr/") || st(e, "opios/") ? "Opera" : st(e, "iemobile") ? "IEMobile" : st(e, "msie") || st(e, "trident/") ? "IE" : st(e, "edge/") ? "Edge" : st(e, "firefox/") ? _r : st(e, "silk/") ? "Silk" : st(e, "blackberry") ? "Blackberry" : st(e, "webos") ? "Webos" : !st(e, "safari/") || st(e, "chrome/") || st(e, "crios/") || st(e, "android") ? !st(e, "chrome/") && !st(e, "crios/") || st(e, "edge/") ? st(e, "android") ? "Android" : (t = t.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && 2 == t.length ? t[1] : "Other" : Er : "Safari"
				}
				var Tr = {
					jd: "FirebaseCore-web",
					ld: "FirebaseUI-web"
				};

				function Sr(t, e) {
					e = e || [];
					var n, r = [],
						i = {};
					for (n in Tr) i[Tr[n]] = !0;
					for (n = 0; n < e.length; n++) "undefined" !== typeof i[e[n]] && (delete i[e[n]], r.push(e[n]));
					return r.sort(), (e = r).length || (e = ["FirebaseCore-web"]), "Browser" === (r = br()) ? r = Ir(i = kr()) : "Worker" === r && (r = Ir(i = kr()) + "-" + r), r + "/JsCore/" + t + "/" + e.join(",")
				}

				function kr() {
					return c.navigator && c.navigator.userAgent || ""
				}

				function Nr(t, e) {
					t = t.split("."), e = e || c;
					for (var n = 0; n < t.length && "object" == typeof e && null != e; n++) e = e[t[n]];
					return n != t.length && (e = void 0), e
				}

				function Ar() {
					try {
						var t = c.localStorage,
							e = Mr();
						if (t) return t.setItem(e, "1"), t.removeItem(e), !ur() || !!c.indexedDB
					} catch (n) {
						return gr() && !!c.indexedDB
					}
					return !1
				}

				function xr() {
					return (Or() || "chrome-extension:" === Cr() || mr()) && !wr() && Ar() && !gr()
				}

				function Or() {
					return "http:" === Cr() || "https:" === Cr()
				}

				function Cr() {
					return c.location && c.location.protocol || null
				}

				function Dr(t) {
					return !lr(t = t || kr()) && Ir(t) != _r
				}

				function Pr(t) {
					return "undefined" === typeof t ? null : nr(t)
				}

				function Rr(t) {
					var e, n = {};
					for (e in t) t.hasOwnProperty(e) && null !== t[e] && void 0 !== t[e] && (n[e] = t[e]);
					return n
				}

				function Lr(t) {
					if (null !== t) return JSON.parse(t)
				}

				function Mr(t) {
					return t || Math.floor(1e9 * Math.random()).toString()
				}

				function jr(t) {
					return "Safari" != Ir(t = t || kr()) && !t.toLowerCase().match(/iphone|ipad|ipod/)
				}

				function Ur() {
					var t = c.___jsl;
					if (t && t.H)
						for (var e in t.H)
							if (t.H[e].r = t.H[e].r || [], t.H[e].L = t.H[e].L || [], t.H[e].r = t.H[e].L.concat(), t.CP)
								for (var n = 0; n < t.CP.length; n++) t.CP[n] = null
				}

				function Fr(t, e) {
					if (t > e) throw Error("Short delay should be less than long delay!");
					this.a = t, this.c = e, t = kr(), e = br(), this.b = lr(t) || "ReactNative" === e
				}

				function Vr() {
					var t = c.document;
					return !t || "undefined" === typeof t.visibilityState || "visible" == t.visibilityState
				}

				function zr(t) {
					try {
						var e = new Date(parseInt(t, 10));
						if (!isNaN(e.getTime()) && !/[^0-9]/.test(t)) return e.toUTCString()
					} catch (n) {}
					return null
				}

				function Br() {
					return !(!Nr("fireauth.oauthhelper", c) && !Nr("fireauth.iframe", c))
				}
				Fr.prototype.get = function() {
					var t = c.navigator;
					return !t || "boolean" !== typeof t.onLine || !Or() && "chrome-extension:" !== Cr() && "undefined" === typeof t.connection || t.onLine ? this.b ? this.c : this.a : Math.min(5e3, this.a)
				};
				var qr, Gr = {};

				function Wr(t) {
					Gr[t] || (Gr[t] = !0, "undefined" !== typeof console && "function" === typeof console.warn && console.warn(t))
				}
				try {
					var Hr = {};
					Object.defineProperty(Hr, "abcd", {
						configurable: !0,
						enumerable: !0,
						value: 1
					}), Object.defineProperty(Hr, "abcd", {
						configurable: !0,
						enumerable: !0,
						value: 2
					}), qr = 2 == Hr.abcd
				} catch (aa) {
					qr = !1
				}

				function Kr(t, e, n) {
					qr ? Object.defineProperty(t, e, {
						configurable: !0,
						enumerable: !0,
						value: n
					}) : t[e] = n
				}

				function Qr(t, e) {
					if (e)
						for (var n in e) e.hasOwnProperty(n) && Kr(t, n, e[n])
				}

				function Xr(t) {
					var e = {};
					return Qr(e, t), e
				}

				function Yr(t) {
					var e = t;
					if ("object" == typeof t && null != t)
						for (var n in e = "length" in t ? [] : {}, t) Kr(e, n, Yr(t[n]));
					return e
				}

				function $r(t) {
					var e = t && (t[ni] ? "phone" : null);
					if (!(e && t && t[ei])) throw new k("internal-error", "Internal assert: invalid MultiFactorInfo object");
					Kr(this, "uid", t[ei]), Kr(this, "displayName", t[Zr] || null);
					var n = null;
					t[ti] && (n = new Date(t[ti]).toUTCString()), Kr(this, "enrollmentTime", n), Kr(this, "factorId", e)
				}

				function Jr(t) {
					try {
						var e = new ri(t)
					} catch (n) {
						e = null
					}
					return e
				}
				$r.prototype.v = function() {
					return {
						uid: this.uid,
						displayName: this.displayName,
						factorId: this.factorId,
						enrollmentTime: this.enrollmentTime
					}
				};
				var Zr = "displayName",
					ti = "enrolledAt",
					ei = "mfaEnrollmentId",
					ni = "phoneInfo";

				function ri(t) {
					$r.call(this, t), Kr(this, "phoneNumber", t[ni])
				}

				function ii(t) {
					var e = {},
						n = t[si],
						r = t[li],
						i = t[fi];
					if (t = Jr(t[ci]), !i || i != ai && i != ui && !n || i == ui && !r || i == oi && !t) throw Error("Invalid checkActionCode response!");
					i == ui ? (e[pi] = n || null, e[vi] = n || null, e[hi] = r) : (e[pi] = r || null, e[vi] = r || null, e[hi] = n || null), e[di] = t || null, Kr(this, yi, i), Kr(this, mi, Yr(e))
				}
				S(ri, $r), ri.prototype.v = function() {
					var t = ri.Za.v.call(this);
					return t.phoneNumber = this.phoneNumber, t
				};
				var oi = "REVERT_SECOND_FACTOR_ADDITION",
					ai = "EMAIL_SIGNIN",
					ui = "VERIFY_AND_CHANGE_EMAIL",
					si = "email",
					ci = "mfaInfo",
					li = "newEmail",
					fi = "requestType",
					hi = "email",
					pi = "fromEmail",
					di = "multiFactorInfo",
					vi = "previousEmail",
					mi = "data",
					yi = "operation";

				function gi(t) {
					var e = jn(t = Un(t), bi) || null,
						n = jn(t, wi) || null,
						r = jn(t, Ii) || null;
					if (r = r && Si[r] || null, !e || !n || !r) throw new k("argument-error", bi + ", " + wi + "and " + Ii + " are required in a valid action code URL.");
					Qr(this, {
						apiKey: e,
						operation: r,
						code: n,
						continueUrl: jn(t, _i) || null,
						languageCode: jn(t, Ei) || null,
						tenantId: jn(t, Ti) || null
					})
				}
				var bi = "apiKey",
					wi = "oobCode",
					_i = "continueUrl",
					Ei = "languageCode",
					Ii = "mode",
					Ti = "tenantId",
					Si = {
						recoverEmail: "RECOVER_EMAIL",
						resetPassword: "PASSWORD_RESET",
						revertSecondFactorAddition: oi,
						signIn: ai,
						verifyAndChangeEmail: ui,
						verifyEmail: "VERIFY_EMAIL"
					};

				function ki(t) {
					try {
						return new gi(t)
					} catch (e) {
						return null
					}
				}

				function Ni(t) {
					var e = t[Di];
					if ("undefined" === typeof e) throw new k("missing-continue-uri");
					if ("string" !== typeof e || "string" === typeof e && !e.length) throw new k("invalid-continue-uri");
					this.h = e, this.b = this.a = null, this.g = !1;
					var n = t[Ai];
					if (n && "object" === typeof n) {
						e = n[Li];
						var r = n[Pi];
						if (n = n[Ri], "string" === typeof e && e.length) {
							if (this.a = e, "undefined" !== typeof r && "boolean" !== typeof r) throw new k("argument-error", Pi + " property must be a boolean when specified.");
							if (this.g = !!r, "undefined" !== typeof n && ("string" !== typeof n || "string" === typeof n && !n.length)) throw new k("argument-error", Ri + " property must be a non empty string when specified.");
							this.b = n || null
						} else {
							if ("undefined" !== typeof e) throw new k("argument-error", Li + " property must be a non empty string when specified.");
							if ("undefined" !== typeof r || "undefined" !== typeof n) throw new k("missing-android-pkg-name")
						}
					} else if ("undefined" !== typeof n) throw new k("argument-error", Ai + " property must be a non null object when specified.");
					if (this.f = null, (e = t[Ci]) && "object" === typeof e) {
						if ("string" === typeof(e = e[Mi]) && e.length) this.f = e;
						else if ("undefined" !== typeof e) throw new k("argument-error", Mi + " property must be a non empty string when specified.")
					} else if ("undefined" !== typeof e) throw new k("argument-error", Ci + " property must be a non null object when specified.");
					if ("undefined" !== typeof(e = t[Oi]) && "boolean" !== typeof e) throw new k("argument-error", Oi + " property must be a boolean when specified.");
					if (this.c = !!e, "undefined" !== typeof(t = t[xi]) && ("string" !== typeof t || "string" === typeof t && !t.length)) throw new k("argument-error", xi + " property must be a non empty string when specified.");
					this.i = t || null
				}
				var Ai = "android",
					xi = "dynamicLinkDomain",
					Oi = "handleCodeInApp",
					Ci = "iOS",
					Di = "url",
					Pi = "installApp",
					Ri = "minimumVersion",
					Li = "packageName",
					Mi = "bundleId";

				function ji(t) {
					var e = {};
					for (var n in e.continueUrl = t.h, e.canHandleCodeInApp = t.c, (e.androidPackageName = t.a) && (e.androidMinimumVersion = t.b, e.androidInstallApp = t.g), e.iOSBundleId = t.f, e.dynamicLinkDomain = t.i, e) null === e[n] && delete e[n];
					return e
				}
				var Ui = null;

				function Fi(t) {
					var e = "";
					return function(t, e) {
						function n(e) {
							for (; r < t.length;) {
								var n = t.charAt(r++),
									i = Ui[n];
								if (null != i) return i;
								if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n)
							}
							return e
						}! function() {
							if (!Ui) {
								Ui = {};
								for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), e = ["+/=", "+/", "-_=", "-_.", "-_"], n = 0; 5 > n; n++)
									for (var r = t.concat(e[n].split("")), i = 0; i < r.length; i++) {
										var o = r[i];
										void 0 === Ui[o] && (Ui[o] = i)
									}
							}
						}();
						for (var r = 0;;) {
							var i = n(-1),
								o = n(0),
								a = n(64),
								u = n(64);
							if (64 === u && -1 === i) break;
							e(i << 2 | o >> 4), 64 != a && (e(o << 4 & 240 | a >> 2), 64 != u && e(a << 6 & 192 | u))
						}
					}(t, (function(t) {
						e += String.fromCharCode(t)
					})), e
				}

				function Vi(t) {
					var e = Bi(t);
					if (!(e && e.sub && e.iss && e.aud && e.exp)) throw Error("Invalid JWT");
					this.g = t, this.c = e.exp, this.h = e.sub, T(), this.a = e.provider_id || e.firebase && e.firebase.sign_in_provider || null, this.f = e.firebase && e.firebase.tenant || null, this.b = !!e.is_anonymous || "anonymous" == this.a
				}

				function zi(t) {
					try {
						return new Vi(t)
					} catch (e) {
						return null
					}
				}

				function Bi(t) {
					if (!t) return null;
					if (3 != (t = t.split(".")).length) return null;
					for (var e = (4 - (t = t[1]).length % 4) % 4, n = 0; n < e; n++) t += ".";
					try {
						return JSON.parse(Fi(t))
					} catch (r) {}
					return null
				}
				Vi.prototype.S = function() {
					return this.f
				}, Vi.prototype.i = function() {
					return this.b
				}, Vi.prototype.toString = function() {
					return this.g
				};
				var qi = "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),
					Gi = ["client_id", "response_type", "scope", "redirect_uri", "state"],
					Wi = {
						kd: {
							Ha: "locale",
							ta: 700,
							sa: 600,
							ea: "facebook.com",
							Va: Gi
						},
						md: {
							Ha: null,
							ta: 500,
							sa: 750,
							ea: "github.com",
							Va: Gi
						},
						nd: {
							Ha: "hl",
							ta: 515,
							sa: 680,
							ea: "google.com",
							Va: Gi
						},
						td: {
							Ha: "lang",
							ta: 485,
							sa: 705,
							ea: "twitter.com",
							Va: qi
						},
						gd: {
							Ha: "locale",
							ta: 640,
							sa: 600,
							ea: "apple.com",
							Va: []
						}
					};

				function Hi(t) {
					for (var e in Wi)
						if (Wi[e].ea == t) return Wi[e];
					return null
				}

				function Ki(t) {
					var e = {};
					e["facebook.com"] = Ji, e["google.com"] = to, e["github.com"] = Zi, e["twitter.com"] = eo;
					var n = t && t[Xi];
					try {
						if (n) return e[n] ? new e[n](t) : new $i(t);
						if ("undefined" !== typeof t[Qi]) return new Yi(t)
					} catch (r) {}
					return null
				}
				var Qi = "idToken",
					Xi = "providerId";

				function Yi(t) {
					var e = t[Xi];
					if (!e && t[Qi]) {
						var n = zi(t[Qi]);
						n && n.a && (e = n.a)
					}
					if (!e) throw Error("Invalid additional user info!");
					"anonymous" != e && "custom" != e || (e = null), n = !1, "undefined" !== typeof t.isNewUser ? n = !!t.isNewUser : "identitytoolkit#SignupNewUserResponse" === t.kind && (n = !0), Kr(this, "providerId", e), Kr(this, "isNewUser", n)
				}

				function $i(t) {
					Yi.call(this, t), Kr(this, "profile", Yr((t = Lr(t.rawUserInfo || "{}")) || {}))
				}

				function Ji(t) {
					if ($i.call(this, t), "facebook.com" != this.providerId) throw Error("Invalid provider ID!")
				}

				function Zi(t) {
					if ($i.call(this, t), "github.com" != this.providerId) throw Error("Invalid provider ID!");
					Kr(this, "username", this.profile && this.profile.login || null)
				}

				function to(t) {
					if ($i.call(this, t), "google.com" != this.providerId) throw Error("Invalid provider ID!")
				}

				function eo(t) {
					if ($i.call(this, t), "twitter.com" != this.providerId) throw Error("Invalid provider ID!");
					Kr(this, "username", t.screenName || null)
				}

				function no(t) {
					var e = Un(t),
						n = jn(e, "link"),
						r = jn(Un(n), "link");
					return e = jn(e, "deep_link_id"), jn(Un(e), "link") || e || r || n || t
				}

				function ro(t, e) {
					if (!t && !e) throw new k("internal-error", "Internal assert: no raw session string available");
					if (t && e) throw new k("internal-error", "Internal assert: unable to determine the session type");
					this.a = t || null, this.b = e || null, this.type = this.a ? io : oo
				}
				S($i, Yi), S(Ji, $i), S(Zi, $i), S(to, $i), S(eo, $i);
				var io = "enroll",
					oo = "signin";

				function ao() {}

				function uo(t, e) {
					return t.then((function(t) {
						if (t[Ya]) {
							var n = zi(t[Ya]);
							if (!n || e != n.h) throw new k("user-mismatch");
							return t
						}
						throw new k("user-mismatch")
					})).o((function(t) {
						throw t && t.code && t.code == x + "user-not-found" ? new k("user-mismatch") : t
					}))
				}

				function so(t, e) {
					if (!e) throw new k("internal-error", "failed to construct a credential");
					this.a = e, Kr(this, "providerId", t), Kr(this, "signInMethod", t)
				}

				function co(t) {
					return {
						pendingToken: t.a,
						requestUri: "http://localhost"
					}
				}

				function lo(t) {
					if (t && t.providerId && t.signInMethod && 0 == t.providerId.indexOf("saml.") && t.pendingToken) try {
						return new so(t.providerId, t.pendingToken)
					} catch (e) {}
					return null
				}

				function fo(t, e, n) {
					if (this.a = null, e.idToken || e.accessToken) e.idToken && Kr(this, "idToken", e.idToken), e.accessToken && Kr(this, "accessToken", e.accessToken), e.nonce && !e.pendingToken && Kr(this, "nonce", e.nonce), e.pendingToken && (this.a = e.pendingToken);
					else {
						if (!e.oauthToken || !e.oauthTokenSecret) throw new k("internal-error", "failed to construct a credential");
						Kr(this, "accessToken", e.oauthToken), Kr(this, "secret", e.oauthTokenSecret)
					}
					Kr(this, "providerId", t), Kr(this, "signInMethod", n)
				}

				function ho(t) {
					var e = {};
					return t.idToken && (e.id_token = t.idToken), t.accessToken && (e.access_token = t.accessToken), t.secret && (e.oauth_token_secret = t.secret), e.providerId = t.providerId, t.nonce && !t.a && (e.nonce = t.nonce), e = {
						postBody: Yn(e).toString(),
						requestUri: "http://localhost"
					}, t.a && (delete e.postBody, e.pendingToken = t.a), e
				}

				function po(t) {
					if (t && t.providerId && t.signInMethod) {
						var e = {
							idToken: t.oauthIdToken,
							accessToken: t.oauthTokenSecret ? null : t.oauthAccessToken,
							oauthTokenSecret: t.oauthTokenSecret,
							oauthToken: t.oauthTokenSecret && t.oauthAccessToken,
							nonce: t.nonce,
							pendingToken: t.pendingToken
						};
						try {
							return new fo(t.providerId, e, t.signInMethod)
						} catch (n) {}
					}
					return null
				}

				function vo(t, e) {
					this.Oc = e || [], Qr(this, {
						providerId: t,
						isOAuthProvider: !0
					}), this.Fb = {}, this.lb = (Hi(t) || {}).Ha || null, this.kb = null
				}

				function mo(t) {
					if ("string" !== typeof t || 0 != t.indexOf("saml.")) throw new k("argument-error", 'SAML provider IDs must be prefixed with "saml."');
					vo.call(this, t, [])
				}

				function yo(t) {
					vo.call(this, t, Gi), this.a = []
				}

				function go() {
					yo.call(this, "facebook.com")
				}

				function bo(t) {
					if (!t) throw new k("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
					var e = t;
					return m(t) && (e = t.accessToken), (new go).credential({
						accessToken: e
					})
				}

				function wo() {
					yo.call(this, "github.com")
				}

				function _o(t) {
					if (!t) throw new k("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
					var e = t;
					return m(t) && (e = t.accessToken), (new wo).credential({
						accessToken: e
					})
				}

				function Eo() {
					yo.call(this, "google.com"), this.Aa("profile")
				}

				function Io(t, e) {
					var n = t;
					return m(t) && (n = t.idToken, e = t.accessToken), (new Eo).credential({
						idToken: n,
						accessToken: e
					})
				}

				function To() {
					vo.call(this, "twitter.com", qi)
				}

				function So(t, e) {
					var n = t;
					if (m(n) || (n = {
							oauthToken: t,
							oauthTokenSecret: e
						}), !n.oauthToken || !n.oauthTokenSecret) throw new k("argument-error", "credential failed: expected 2 arguments (the OAuth access token and secret).");
					return new fo("twitter.com", n, "twitter.com")
				}

				function ko(t, e, n) {
					this.a = t, this.f = e, Kr(this, "providerId", "password"), Kr(this, "signInMethod", n === Ao.EMAIL_LINK_SIGN_IN_METHOD ? Ao.EMAIL_LINK_SIGN_IN_METHOD : Ao.EMAIL_PASSWORD_SIGN_IN_METHOD)
				}

				function No(t) {
					return t && t.email && t.password ? new ko(t.email, t.password, t.signInMethod) : null
				}

				function Ao() {
					Qr(this, {
						providerId: "password",
						isOAuthProvider: !1
					})
				}

				function xo(t, e) {
					if (!(e = Oo(e))) throw new k("argument-error", "Invalid email link!");
					return new ko(t, e.code, Ao.EMAIL_LINK_SIGN_IN_METHOD)
				}

				function Oo(t) {
					return (t = ki(t = no(t))) && t.operation === ai ? t : null
				}

				function Co(t) {
					if (!(t.bb && t.ab || t.Ja && t.da)) throw new k("internal-error");
					this.a = t, Kr(this, "providerId", "phone"), this.ea = "phone", Kr(this, "signInMethod", "phone")
				}

				function Do(t) {
					if (t && "phone" === t.providerId && (t.verificationId && t.verificationCode || t.temporaryProof && t.phoneNumber)) {
						var e = {};
						return G(["verificationId", "verificationCode", "temporaryProof", "phoneNumber"], (function(n) {
							t[n] && (e[n] = t[n])
						})), new Co(e)
					}
					return null
				}

				function Po(t) {
					return t.a.Ja && t.a.da ? {
						temporaryProof: t.a.Ja,
						phoneNumber: t.a.da
					} : {
						sessionInfo: t.a.bb,
						code: t.a.ab
					}
				}

				function Ro(t) {
					try {
						this.a = t || r.auth()
					} catch (e) {
						throw new k("argument-error", "Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().")
					}
					Qr(this, {
						providerId: "phone",
						isOAuthProvider: !1
					})
				}

				function Lo(t, e) {
					if (!t) throw new k("missing-verification-id");
					if (!e) throw new k("missing-verification-code");
					return new Co({
						bb: t,
						ab: e
					})
				}

				function Mo(t) {
					if (t.temporaryProof && t.phoneNumber) return new Co({
						Ja: t.temporaryProof,
						da: t.phoneNumber
					});
					var e = t && t.providerId;
					if (!e || "password" === e) return null;
					var n = t && t.oauthAccessToken,
						r = t && t.oauthTokenSecret,
						i = t && t.nonce,
						o = t && t.oauthIdToken,
						a = t && t.pendingToken;
					try {
						switch (e) {
							case "google.com":
								return Io(o, n);
							case "facebook.com":
								return bo(n);
							case "github.com":
								return _o(n);
							case "twitter.com":
								return So(n, r);
							default:
								return n || r || o || a ? a ? 0 == e.indexOf("saml.") ? new so(e, a) : new fo(e, {
									pendingToken: a,
									idToken: t.oauthIdToken,
									accessToken: t.oauthAccessToken
								}, e) : new yo(e).credential({
									idToken: o,
									accessToken: n,
									rawNonce: i
								}) : null
						}
					} catch (u) {
						return null
					}
				}

				function jo(t) {
					if (!t.isOAuthProvider) throw new k("invalid-oauth-provider")
				}

				function Uo(t, e, n, r, i, o, a) {
					if (this.c = t, this.b = e || null, this.g = n || null, this.f = r || null, this.i = o || null, this.h = a || null, this.a = i || null, !this.g && !this.a) throw new k("invalid-auth-event");
					if (this.g && this.a) throw new k("invalid-auth-event");
					if (this.g && !this.f) throw new k("invalid-auth-event")
				}

				function Fo(t) {
					return (t = t || {}).type ? new Uo(t.type, t.eventId, t.urlResponse, t.sessionId, t.error && N(t.error), t.postBody, t.tenantId) : null
				}

				function Vo() {
					this.b = null, this.a = []
				}
				ro.prototype.Fa = function() {
					return this.a ? Ne(this.a) : Ne(this.b)
				}, ro.prototype.v = function() {
					return this.type == io ? {
						multiFactorSession: {
							idToken: this.a
						}
					} : {
						multiFactorSession: {
							pendingCredential: this.b
						}
					}
				}, ao.prototype.ia = function() {}, ao.prototype.b = function() {}, ao.prototype.c = function() {}, ao.prototype.v = function() {}, so.prototype.ia = function(t) {
					return mu(t, co(this))
				}, so.prototype.b = function(t, e) {
					var n = co(this);
					return n.idToken = e, yu(t, n)
				}, so.prototype.c = function(t, e) {
					return uo(gu(t, co(this)), e)
				}, so.prototype.v = function() {
					return {
						providerId: this.providerId,
						signInMethod: this.signInMethod,
						pendingToken: this.a
					}
				}, fo.prototype.ia = function(t) {
					return mu(t, ho(this))
				}, fo.prototype.b = function(t, e) {
					var n = ho(this);
					return n.idToken = e, yu(t, n)
				}, fo.prototype.c = function(t, e) {
					return uo(gu(t, ho(this)), e)
				}, fo.prototype.v = function() {
					var t = {
						providerId: this.providerId,
						signInMethod: this.signInMethod
					};
					return this.idToken && (t.oauthIdToken = this.idToken), this.accessToken && (t.oauthAccessToken = this.accessToken), this.secret && (t.oauthTokenSecret = this.secret), this.nonce && (t.nonce = this.nonce), this.a && (t.pendingToken = this.a), t
				}, vo.prototype.Ia = function(t) {
					return this.Fb = vt(t), this
				}, S(mo, vo), S(yo, vo), yo.prototype.Aa = function(t) {
					return Q(this.a, t) || this.a.push(t), this
				}, yo.prototype.Nb = function() {
					return J(this.a)
				}, yo.prototype.credential = function(t, e) {
					var n;
					if (!(n = m(t) ? {
							idToken: t.idToken || null,
							accessToken: t.accessToken || null,
							nonce: t.rawNonce || null
						} : {
							idToken: t || null,
							accessToken: e || null
						}).idToken && !n.accessToken) throw new k("argument-error", "credential failed: must provide the ID token and/or the access token.");
					return new fo(this.providerId, n, this.providerId)
				}, S(go, yo), Kr(go, "PROVIDER_ID", "facebook.com"), Kr(go, "FACEBOOK_SIGN_IN_METHOD", "facebook.com"), S(wo, yo), Kr(wo, "PROVIDER_ID", "github.com"), Kr(wo, "GITHUB_SIGN_IN_METHOD", "github.com"), S(Eo, yo), Kr(Eo, "PROVIDER_ID", "google.com"), Kr(Eo, "GOOGLE_SIGN_IN_METHOD", "google.com"), S(To, vo), Kr(To, "PROVIDER_ID", "twitter.com"), Kr(To, "TWITTER_SIGN_IN_METHOD", "twitter.com"), ko.prototype.ia = function(t) {
					return this.signInMethod == Ao.EMAIL_LINK_SIGN_IN_METHOD ? Zu(t, ku, {
						email: this.a,
						oobCode: this.f
					}) : Zu(t, Qu, {
						email: this.a,
						password: this.f
					})
				}, ko.prototype.b = function(t, e) {
					return this.signInMethod == Ao.EMAIL_LINK_SIGN_IN_METHOD ? Zu(t, Nu, {
						idToken: e,
						email: this.a,
						oobCode: this.f
					}) : Zu(t, Vu, {
						idToken: e,
						email: this.a,
						password: this.f
					})
				}, ko.prototype.c = function(t, e) {
					return uo(this.ia(t), e)
				}, ko.prototype.v = function() {
					return {
						email: this.a,
						password: this.f,
						signInMethod: this.signInMethod
					}
				}, Qr(Ao, {
					PROVIDER_ID: "password"
				}), Qr(Ao, {
					EMAIL_LINK_SIGN_IN_METHOD: "emailLink"
				}), Qr(Ao, {
					EMAIL_PASSWORD_SIGN_IN_METHOD: "password"
				}), Co.prototype.ia = function(t) {
					return t.cb(Po(this))
				}, Co.prototype.b = function(t, e) {
					var n = Po(this);
					return n.idToken = e, Zu(t, Yu, n)
				}, Co.prototype.c = function(t, e) {
					var n = Po(this);
					return n.operation = "REAUTH", uo(t = Zu(t, $u, n), e)
				}, Co.prototype.v = function() {
					var t = {
						providerId: "phone"
					};
					return this.a.bb && (t.verificationId = this.a.bb), this.a.ab && (t.verificationCode = this.a.ab), this.a.Ja && (t.temporaryProof = this.a.Ja), this.a.da && (t.phoneNumber = this.a.da), t
				}, Ro.prototype.cb = function(t, e) {
					var n = this.a.b;
					return Ne(e.verify()).then((function(r) {
						if ("string" !== typeof r) throw new k("argument-error", "An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");
						switch (e.type) {
							case "recaptcha":
								var i = m(t) ? t.session : null,
									o = m(t) ? t.phoneNumber : t;
								return (i && i.type == io ? i.Fa().then((function(t) {
									return function(t, e) {
										return Zu(t, Bu, e).then((function(t) {
											return t.phoneSessionInfo.sessionInfo
										}))
									}(n, {
										idToken: t,
										phoneEnrollmentInfo: {
											phoneNumber: o,
											recaptchaToken: r
										}
									})
								})) : i && i.type == oo ? i.Fa().then((function(e) {
									return function(t, e) {
										return Zu(t, qu, e).then((function(t) {
											return t.phoneResponseInfo.sessionInfo
										}))
									}(n, {
										mfaPendingCredential: e,
										mfaEnrollmentId: t.multiFactorHint && t.multiFactorHint.uid || t.multiFactorUid,
										phoneSignInInfo: {
											recaptchaToken: r
										}
									})
								})) : function(t, e) {
									return Zu(t, Uu, e)
								}(n, {
									phoneNumber: o,
									recaptchaToken: r
								})).then((function(t) {
									return "function" === typeof e.reset && e.reset(), t
								}), (function(t) {
									throw "function" === typeof e.reset && e.reset(), t
								}));
							default:
								throw new k("argument-error", 'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.')
						}
					}))
				}, Qr(Ro, {
					PROVIDER_ID: "phone"
				}), Qr(Ro, {
					PHONE_SIGN_IN_METHOD: "phone"
				}), Uo.prototype.getUid = function() {
					var t = [];
					return t.push(this.c), this.b && t.push(this.b), this.f && t.push(this.f), this.h && t.push(this.h), t.join("-")
				}, Uo.prototype.S = function() {
					return this.h
				}, Uo.prototype.v = function() {
					return {
						type: this.c,
						eventId: this.b,
						urlResponse: this.g,
						sessionId: this.f,
						postBody: this.i,
						tenantId: this.h,
						error: this.a && this.a.v()
					}
				};
				var zo, Bo = null;

				function qo(t) {
					var e = "unauthorized-domain",
						n = void 0,
						r = Un(t);
					t = r.b, "chrome-extension" == (r = r.f) ? n = Bt("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", t) : "http" == r || "https" == r ? n = Bt("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", t) : e = "operation-not-supported-in-this-environment", k.call(this, e, n)
				}

				function Go(t, e, n) {
					k.call(this, t, n), (t = e || {}).Gb && Kr(this, "email", t.Gb), t.da && Kr(this, "phoneNumber", t.da), t.credential && Kr(this, "credential", t.credential), t.Wb && Kr(this, "tenantId", t.Wb)
				}

				function Wo(t) {
					if (t.code) {
						var e = t.code || "";
						0 == e.indexOf(x) && (e = e.substring(x.length));
						var n = {
							credential: Mo(t),
							Wb: t.tenantId
						};
						if (t.email) n.Gb = t.email;
						else if (t.phoneNumber) n.da = t.phoneNumber;
						else if (!n.credential) return new k(e, t.message || void 0);
						return new Go(e, n, t.message)
					}
					return null
				}

				function Ho() {}

				function Ko(t) {
					return t.c || (t.c = t.b())
				}

				function Qo() {}

				function Xo(t) {
					if (!t.f && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
						for (var e = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], n = 0; n < e.length; n++) {
							var r = e[n];
							try {
								return new ActiveXObject(r), t.f = r
							} catch (i) {}
						}
						throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed")
					}
					return t.f
				}

				function Yo() {}

				function $o() {
					this.a = new XDomainRequest, this.readyState = 0, this.onreadystatechange = null, this.responseType = this.responseText = this.response = "", this.status = -1, this.statusText = "", this.a.onload = E(this.oc, this), this.a.onerror = E(this.Pb, this), this.a.onprogress = E(this.pc, this), this.a.ontimeout = E(this.tc, this)
				}

				function Jo(t, e) {
					t.readyState = e, t.onreadystatechange && t.onreadystatechange()
				}

				function Zo(t, e, n) {
					this.reset(t, e, n, void 0, void 0)
				}
				S(qo, k), S(Go, k), Go.prototype.v = function() {
					var t = {
						code: this.code,
						message: this.message
					};
					this.email && (t.email = this.email), this.phoneNumber && (t.phoneNumber = this.phoneNumber), this.tenantId && (t.tenantId = this.tenantId);
					var e = this.credential && this.credential.v();
					return e && yt(t, e), t
				}, Go.prototype.toJSON = function() {
					return this.v()
				}, Ho.prototype.c = null, S(Qo, Ho), Qo.prototype.a = function() {
					var t = Xo(this);
					return t ? new ActiveXObject(t) : new XMLHttpRequest
				}, Qo.prototype.b = function() {
					var t = {};
					return Xo(this) && (t[0] = !0, t[1] = !0), t
				}, zo = new Qo, S(Yo, Ho), Yo.prototype.a = function() {
					var t = new XMLHttpRequest;
					if ("withCredentials" in t) return t;
					if ("undefined" != typeof XDomainRequest) return new $o;
					throw Error("Unsupported browser")
				}, Yo.prototype.b = function() {
					return {}
				}, (e = $o.prototype).open = function(t, e, n) {
					if (null != n && !n) throw Error("Only async requests are supported.");
					this.a.open(t, e)
				}, e.send = function(t) {
					if (t) {
						if ("string" != typeof t) throw Error("Only string data is supported");
						this.a.send(t)
					} else this.a.send()
				}, e.abort = function() {
					this.a.abort()
				}, e.setRequestHeader = function() {}, e.getResponseHeader = function(t) {
					return "content-type" == t.toLowerCase() ? this.a.contentType : ""
				}, e.oc = function() {
					this.status = 200, this.response = this.responseText = this.a.responseText, Jo(this, 4)
				}, e.Pb = function() {
					this.status = 500, this.response = this.responseText = "", Jo(this, 4)
				}, e.tc = function() {
					this.Pb()
				}, e.pc = function() {
					this.status = 200, Jo(this, 1)
				}, e.getAllResponseHeaders = function() {
					return "content-type: " + this.a.contentType
				}, Zo.prototype.a = null;

				function ta(t) {
					this.f = t, this.b = this.c = this.a = null
				}

				function ea(t, e) {
					this.name = t, this.value = e
				}
				Zo.prototype.reset = function(t, e, n, r, i) {
					"number" == typeof i || 0, r || T(), delete this.a
				}, ea.prototype.toString = function() {
					return this.name
				};
				var na = new ea("SEVERE", 1e3),
					ra = new ea("WARNING", 900),
					ia = new ea("CONFIG", 700),
					oa = new ea("FINE", 500);
				ta.prototype.log = function(t, e, n) {
					if (t.value >= function t(e) {
							return e.c ? e.c : e.a ? t(e.a) : (M("Root logger has no level set."), null)
						}(this).value)
						for (v(e) && (e = e()), t = new Zo(t, String(e), this.f), n && (t.a = n), n = this; n;) n = n.a
				};
				var aa, ua = {},
					sa = null;

				function ca(t) {
					var e;
					if (sa || (sa = new ta(""), ua[""] = sa, sa.c = ia), !(e = ua[t])) {
						e = new ta(t);
						var n = t.lastIndexOf("."),
							r = t.substr(n + 1);
						(n = ca(t.substr(0, n))).b || (n.b = {}), n.b[r] = e, e.a = n, ua[t] = e
					}
					return e
				}

				function la(t, e) {
					t && t.log(oa, e, void 0)
				}

				function fa(t) {
					this.f = t
				}

				function ha(t) {
					wn.call(this), this.s = t, this.readyState = pa, this.status = 0, this.responseType = this.responseText = this.response = this.statusText = "", this.onreadystatechange = null, this.i = new Headers, this.b = null, this.m = "GET", this.g = "", this.a = !1, this.h = ca("goog.net.FetchXmlHttp"), this.l = this.c = this.f = null
				}
				S(fa, Ho), fa.prototype.a = function() {
					return new ha(this.f)
				}, fa.prototype.b = (aa = {}, function() {
					return aa
				}), S(ha, wn);
				var pa = 0;

				function da(t) {
					t.c.read().then(t.nc.bind(t)).catch(t.Sa.bind(t))
				}

				function va(t, e) {
					e && t.f && (t.status = t.f.status, t.statusText = t.f.statusText), t.readyState = 4, t.f = null, t.c = null, t.l = null, ma(t)
				}

				function ma(t) {
					t.onreadystatechange && t.onreadystatechange.call(t)
				}

				function ya(t) {
					wn.call(this), this.headers = new An, this.D = t || null, this.c = !1, this.B = this.a = null, this.h = this.P = this.l = "", this.f = this.O = this.i = this.N = !1, this.g = 0, this.s = null, this.m = ga, this.w = this.R = !1
				}(e = ha.prototype).open = function(t, e) {
					if (this.readyState != pa) throw this.abort(), Error("Error reopening a connection");
					this.m = t, this.g = e, this.readyState = 1, ma(this)
				}, e.send = function(t) {
					if (1 != this.readyState) throw this.abort(), Error("need to call open() first. ");
					this.a = !0;
					var e = {
						headers: this.i,
						method: this.m,
						credentials: void 0,
						cache: void 0
					};
					t && (e.body = t), this.s.fetch(new Request(this.g, e)).then(this.sc.bind(this), this.Sa.bind(this))
				}, e.abort = function() {
					this.response = this.responseText = "", this.i = new Headers, this.status = 0, this.c && this.c.cancel("Request was aborted."), 1 <= this.readyState && this.a && 4 != this.readyState && (this.a = !1, va(this, !1)), this.readyState = pa
				}, e.sc = function(t) {
					this.a && (this.f = t, this.b || (this.b = t.headers, this.readyState = 2, ma(this)), this.a && (this.readyState = 3, ma(this), this.a && ("arraybuffer" === this.responseType ? t.arrayBuffer().then(this.qc.bind(this), this.Sa.bind(this)) : "undefined" !== typeof c.ReadableStream && "body" in t ? (this.response = this.responseText = "", this.c = t.body.getReader(), this.l = new TextDecoder, da(this)) : t.text().then(this.rc.bind(this), this.Sa.bind(this)))))
				}, e.nc = function(t) {
					if (this.a) {
						var e = this.l.decode(t.value ? t.value : new Uint8Array(0), {
							stream: !t.done
						});
						e && (this.response = this.responseText += e), t.done ? va(this, !0) : ma(this), 3 == this.readyState && da(this)
					}
				}, e.rc = function(t) {
					this.a && (this.response = this.responseText = t, va(this, !0))
				}, e.qc = function(t) {
					this.a && (this.response = t, va(this, !0))
				}, e.Sa = function(t) {
					var e = this.h;
					e && e.log(ra, "Failed to fetch url " + this.g, t instanceof Error ? t : Error(t)), this.a && va(this, !0)
				}, e.setRequestHeader = function(t, e) {
					this.i.append(t, e)
				}, e.getResponseHeader = function(t) {
					return this.b ? this.b.get(t.toLowerCase()) || "" : ((t = this.h) && t.log(ra, "Attempting to get response header but no headers have been received for url: " + this.g, void 0), "")
				}, e.getAllResponseHeaders = function() {
					if (!this.b) {
						var t = this.h;
						return t && t.log(ra, "Attempting to get all response headers but no headers have been received for url: " + this.g, void 0), ""
					}
					t = [];
					for (var e = this.b.entries(), n = e.next(); !n.done;) n = n.value, t.push(n[0] + ": " + n[1]), n = e.next();
					return t.join("\r\n")
				}, S(ya, wn);
				var ga = "";
				ya.prototype.b = ca("goog.net.XhrIo");
				var ba = /^https?$/i,
					wa = ["POST", "PUT"];

				function _a(t, e, n, r, i) {
					if (t.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + t.l + "; newUri=" + e);
					n = n ? n.toUpperCase() : "GET", t.l = e, t.h = "", t.P = n, t.N = !1, t.c = !0, t.a = t.D ? t.D.a() : zo.a(), t.B = t.D ? Ko(t.D) : Ko(zo), t.a.onreadystatechange = E(t.Sb, t);
					try {
						la(t.b, Oa(t, "Opening Xhr")), t.O = !0, t.a.open(n, String(e), !0), t.O = !1
					} catch (a) {
						return la(t.b, Oa(t, "Error opening Xhr: " + a.message)), void Ia(t, a)
					}
					e = r || "";
					var o = new An(t.headers);
					i && function(t, e) {
						if (t.forEach && "function" == typeof t.forEach) t.forEach(e, void 0);
						else if (d(t) || "string" === typeof t) G(t, e, void 0);
						else
							for (var n = Nn(t), r = kn(t), i = r.length, o = 0; o < i; o++) e.call(void 0, r[o], n && n[o], t)
					}(i, (function(t, e) {
						o.set(e, t)
					})), i = function(t) {
						t: {
							for (var e = Ea, n = t.length, r = "string" === typeof t ? t.split("") : t, i = 0; i < n; i++)
								if (i in r && e.call(void 0, r[i], i, t)) {
									e = i;
									break t
								} e = -1
						}
						return 0 > e ? null : "string" === typeof t ? t.charAt(e) : t[e]
					}(o.X()), r = c.FormData && e instanceof c.FormData, !Q(wa, n) || i || r || o.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"), o.forEach((function(t, e) {
						this.a.setRequestHeader(e, t)
					}), t), t.m && (t.a.responseType = t.m), "withCredentials" in t.a && t.a.withCredentials !== t.R && (t.a.withCredentials = t.R);
					try {
						Na(t), 0 < t.g && (t.w = function(t) {
							return Kt && ie(9) && "number" === typeof t.timeout && void 0 !== t.ontimeout
						}(t.a), la(t.b, Oa(t, "Will abort after " + t.g + "ms if incomplete, xhr2 " + t.w)), t.w ? (t.a.timeout = t.g, t.a.ontimeout = E(t.Ka, t)) : t.s = Tn(t.Ka, t.g, t)), la(t.b, Oa(t, "Sending request")), t.i = !0, t.a.send(e), t.i = !1
					} catch (a) {
						la(t.b, Oa(t, "Send error: " + a.message)), Ia(t, a)
					}
				}

				function Ea(t) {
					return "content-type" == t.toLowerCase()
				}

				function Ia(t, e) {
					t.c = !1, t.a && (t.f = !0, t.a.abort(), t.f = !1), t.h = e, Ta(t), ka(t)
				}

				function Ta(t) {
					t.N || (t.N = !0, t.dispatchEvent("complete"), t.dispatchEvent("error"))
				}

				function Sa(t) {
					if (t.c && "undefined" != typeof s)
						if (t.B[1] && 4 == Aa(t) && 2 == xa(t)) la(t.b, Oa(t, "Local request error detected and ignored"));
						else if (t.i && 4 == Aa(t)) Tn(t.Sb, 0, t);
					else if (t.dispatchEvent("readystatechange"), 4 == Aa(t)) {
						la(t.b, Oa(t, "Request complete")), t.c = !1;
						try {
							var e, n = xa(t);
							t: switch (n) {
								case 200:
								case 201:
								case 202:
								case 204:
								case 206:
								case 304:
								case 1223:
									var r = !0;
									break t;
								default:
									r = !1
							}
							if (!(e = r)) {
								var i;
								if (i = 0 === n) {
									var o = String(t.l).match(Cn)[1] || null;
									if (!o && c.self && c.self.location) {
										var a = c.self.location.protocol;
										o = a.substr(0, a.length - 1)
									}
									i = !ba.test(o ? o.toLowerCase() : "")
								}
								e = i
							}
							if (e) t.dispatchEvent("complete"), t.dispatchEvent("success");
							else {
								try {
									var u = 2 < Aa(t) ? t.a.statusText : ""
								} catch (l) {
									la(t.b, "Can not get status: " + l.message), u = ""
								}
								t.h = u + " [" + xa(t) + "]", Ta(t)
							}
						} finally {
							ka(t)
						}
					}
				}

				function ka(t, e) {
					if (t.a) {
						Na(t);
						var n = t.a,
							r = t.B[0] ? h : null;
						t.a = null, t.B = null, e || t.dispatchEvent("ready");
						try {
							n.onreadystatechange = r
						} catch (i) {
							(t = t.b) && t.log(na, "Problem encountered resetting onreadystatechange: " + i.message, void 0)
						}
					}
				}

				function Na(t) {
					t.a && t.w && (t.a.ontimeout = null), t.s && (c.clearTimeout(t.s), t.s = null)
				}

				function Aa(t) {
					return t.a ? t.a.readyState : 0
				}

				function xa(t) {
					try {
						return 2 < Aa(t) ? t.a.status : -1
					} catch (e) {
						return -1
					}
				}

				function Oa(t, e) {
					return e + " [" + t.P + " " + t.l + " " + xa(t) + "]"
				}

				function Ca(t) {
					var e = Ba;
					this.g = [], this.w = e, this.s = t || null, this.f = this.a = !1, this.c = void 0, this.u = this.B = this.i = !1, this.h = 0, this.b = null, this.l = 0
				}

				function Da(t, e, n) {
					t.a = !0, t.c = n, t.f = !e, Ma(t)
				}

				function Pa(t) {
					if (t.a) {
						if (!t.u) throw new ja(t);
						t.u = !1
					}
				}

				function Ra(t, e, n, r) {
					t.g.push([e, n, r]), t.a && Ma(t)
				}

				function La(t) {
					return K(t.g, (function(t) {
						return v(t[1])
					}))
				}

				function Ma(t) {
					if (t.h && t.a && La(t)) {
						var e = t.h,
							n = Va[e];
						n && (c.clearTimeout(n.a), delete Va[e]), t.h = 0
					}
					t.b && (t.b.l--, delete t.b), e = t.c;
					for (var r = n = !1; t.g.length && !t.i;) {
						var i = t.g.shift(),
							o = i[0],
							a = i[1];
						if (i = i[2], o = t.f ? a : o) try {
							var u = o.call(i || t.s, e);
							void 0 !== u && (t.f = t.f && (u == e || u instanceof Error), t.c = e = u), (P(e) || "function" === typeof c.Promise && e instanceof c.Promise) && (r = !0, t.i = !0)
						} catch (s) {
							e = s, t.f = !0, La(t) || (n = !0)
						}
					}
					t.c = e, r && (u = E(t.m, t, !0), r = E(t.m, t, !1), e instanceof Ca ? (Ra(e, u, r), e.B = !0) : e.then(u, r)), n && (e = new Fa(e), Va[e.a] = e, t.h = e.a)
				}

				function ja() {
					R.call(this)
				}

				function Ua() {
					R.call(this)
				}

				function Fa(t) {
					this.a = c.setTimeout(E(this.c, this), 0), this.b = t
				}(e = ya.prototype).Ka = function() {
					"undefined" != typeof s && this.a && (this.h = "Timed out after " + this.g + "ms, aborting", la(this.b, Oa(this, this.h)), this.dispatchEvent("timeout"), this.abort(8))
				}, e.abort = function() {
					this.a && this.c && (la(this.b, Oa(this, "Aborting")), this.c = !1, this.f = !0, this.a.abort(), this.f = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), ka(this))
				}, e.Ba = function() {
					this.a && (this.c && (this.c = !1, this.f = !0, this.a.abort(), this.f = !1), ka(this, !0)), ya.Za.Ba.call(this)
				}, e.Sb = function() {
					this.wa || (this.O || this.i || this.f ? Sa(this) : this.Hc())
				}, e.Hc = function() {
					Sa(this)
				}, e.getResponse = function() {
					try {
						if (!this.a) return null;
						if ("response" in this.a) return this.a.response;
						switch (this.m) {
							case ga:
							case "text":
								return this.a.responseText;
							case "arraybuffer":
								if ("mozResponseArrayBuffer" in this.a) return this.a.mozResponseArrayBuffer
						}
						var t = this.b;
						return t && t.log(na, "Response type " + this.m + " is not supported on this browser", void 0), null
					} catch (e) {
						return la(this.b, "Can not get response: " + e.message), null
					}
				}, Ca.prototype.cancel = function(t) {
					if (this.a) this.c instanceof Ca && this.c.cancel();
					else {
						if (this.b) {
							var e = this.b;
							delete this.b, t ? e.cancel(t) : (e.l--, 0 >= e.l && e.cancel())
						}
						this.w ? this.w.call(this.s, this) : this.u = !0, this.a || (t = new Ua(this), Pa(this), Da(this, !1, t))
					}
				}, Ca.prototype.m = function(t, e) {
					this.i = !1, Da(this, t, e)
				}, Ca.prototype.then = function(t, e, n) {
					var r, i, o = new we((function(t, e) {
						r = t, i = e
					}));
					return Ra(this, r, (function(t) {
						t instanceof Ua ? o.cancel() : i(t)
					})), o.then(t, e, n)
				}, Ca.prototype.$goog_Thenable = !0, S(ja, R), ja.prototype.message = "Deferred has already fired", ja.prototype.name = "AlreadyCalledError", S(Ua, R), Ua.prototype.message = "Deferred was canceled", Ua.prototype.name = "CanceledError", Fa.prototype.c = function() {
					throw delete Va[this.a], this.b
				};
				var Va = {};

				function za(t) {
					var e = {},
						n = e.document || document,
						r = St(t).toString(),
						i = he(document, "SCRIPT"),
						o = {
							Tb: i,
							Ka: void 0
						},
						a = new Ca(o),
						u = null,
						s = null != e.timeout ? e.timeout : 5e3;
					return 0 < s && (u = window.setTimeout((function() {
							qa(i, !0);
							var t = new Ha(Wa, "Timeout reached for loading script " + r);
							Pa(a), Da(a, !1, t)
						}), s), o.Ka = u), i.onload = i.onreadystatechange = function() {
							i.readyState && "loaded" != i.readyState && "complete" != i.readyState || (qa(i, e.ud || !1, u), Pa(a), Da(a, !0, null))
						}, i.onerror = function() {
							qa(i, !0, u);
							var t = new Ha(Ga, "Error while loading script " + r);
							Pa(a), Da(a, !1, t)
						}, yt(o = e.attributes || {}, {
							type: "text/javascript",
							charset: "UTF-8"
						}), ue(i, o),
						function(t, e) {
							gt(t, "HTMLScriptElement"), t.src = St(e), null === f && (f = (e = (e = c.document).querySelector && e.querySelector("script[nonce]")) && (e = e.nonce || e.getAttribute("nonce")) && l.test(e) ? e : ""), (e = f) && t.setAttribute("nonce", e)
						}(i, t),
						function(t) {
							var e;
							return (e = (t || document).getElementsByTagName("HEAD")) && 0 != e.length ? e[0] : t.documentElement
						}(n).appendChild(i), a
				}

				function Ba() {
					if (this && this.Tb) {
						var t = this.Tb;
						t && "SCRIPT" == t.tagName && qa(t, !0, this.Ka)
					}
				}

				function qa(t, e, n) {
					null != n && c.clearTimeout(n), t.onload = h, t.onerror = h, t.onreadystatechange = h, e && window.setTimeout((function() {
						t && t.parentNode && t.parentNode.removeChild(t)
					}), 0)
				}
				var Ga = 0,
					Wa = 1;

				function Ha(t, e) {
					var n = "Jsloader error (code #" + t + ")";
					e && (n += ": " + e), R.call(this, n), this.code = t
				}

				function Ka(t) {
					this.f = t
				}

				function Qa(t, e, n) {
					if (this.c = t, t = e || {}, this.u = t.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token", this.m = t.secureTokenTimeout || $a, this.g = vt(t.secureTokenHeaders || Ja), this.h = t.firebaseEndpoint || "https://www.googleapis.com/identitytoolkit/v3/relyingparty/", this.l = t.identityPlatformEndpoint || "https://identitytoolkit.googleapis.com/v2/", this.i = t.firebaseTimeout || Za, this.a = vt(t.firebaseHeaders || tu), n && (this.a["X-Client-Version"] = n, this.g["X-Client-Version"] = n), n = "Node" == br(), !(n = c.XMLHttpRequest || n && r.INTERNAL.node && r.INTERNAL.node.XMLHttpRequest) && !gr()) throw new k("internal-error", "The XMLHttpRequest compatibility library was not found.");
					this.f = void 0, gr() ? this.f = new fa(self) : wr() ? this.f = new Ka(n) : this.f = new Yo, this.b = null
				}
				S(Ha, R), S(Ka, Ho), Ka.prototype.a = function() {
					return new this.f
				}, Ka.prototype.b = function() {
					return {}
				};
				var Xa, Ya = "idToken",
					$a = new Fr(3e4, 6e4),
					Ja = {
						"Content-Type": "application/x-www-form-urlencoded"
					},
					Za = new Fr(3e4, 6e4),
					tu = {
						"Content-Type": "application/json"
					};

				function eu(t, e) {
					e ? t.a["X-Firebase-Locale"] = e : delete t.a["X-Firebase-Locale"]
				}

				function nu(t, e) {
					e ? (t.a["X-Client-Version"] = e, t.g["X-Client-Version"] = e) : (delete t.a["X-Client-Version"], delete t.g["X-Client-Version"])
				}

				function ru(t, e, n, r, i, o, a) {
					(function() {
						var t = kr();
						return !((t = Ir(t) != Er ? null : (t = t.match(/\sChrome\/(\d+)/i)) && 2 == t.length ? parseInt(t[1], 10) : null) && 30 > t) && (!Kt || !ne || 9 < ne)
					})() || gr() ? t = E(t.w, t) : (Xa || (Xa = new we((function(t, e) {
						! function(t, e) {
							if (((window.gapi || {}).client || {}).request) t();
							else {
								c[ou] = function() {
										((window.gapi || {}).client || {}).request ? t() : e(Error("CORS_UNSUPPORTED"))
									},
									function(t, e) {
										Ra(t, null, e, void 0)
									}(za(kt(iu, {
										onload: ou
									})), (function() {
										e(Error("CORS_UNSUPPORTED"))
									}))
							}
						}(t, e)
					}))), t = E(t.s, t)), t(e, n, r, i, o, a)
				}
				Qa.prototype.S = function() {
					return this.b
				}, Qa.prototype.w = function(t, e, n, r, i, o) {
					if (gr() && ("undefined" === typeof c.fetch || "undefined" === typeof c.Headers || "undefined" === typeof c.Request)) throw new k("operation-not-supported-in-this-environment", "fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.");
					var a = new ya(this.f);
					if (o) {
						a.g = Math.max(0, o);
						var u = setTimeout((function() {
							a.dispatchEvent("timeout")
						}), o)
					}
					_n(a, "complete", (function() {
						u && clearTimeout(u);
						var t = null;
						try {
							t = JSON.parse(function(t) {
								try {
									return t.a ? t.a.responseText : ""
								} catch (e) {
									return la(t.b, "Can not get responseText: " + e.message), ""
								}
							}(this)) || null
						} catch (n) {
							t = null
						}
						e && e(t)
					})), En(a, "ready", (function() {
						u && clearTimeout(u), Ge(this)
					})), En(a, "timeout", (function() {
						u && clearTimeout(u), Ge(this), e && e(null)
					})), _a(a, t, n, r, i)
				};
				var iu = new bt(Et, "https://apis.google.com/js/client.js?onload=%{onload}"),
					ou = "__fcb" + Math.floor(1e6 * Math.random()).toString();

				function au(t, e, n, r, i, o, a) {
					var u = Un(e + n);
					Mn(u, "key", t.c), a && Mn(u, "cb", T().toString());
					var s = "GET" == r;
					if (s)
						for (var c in i) i.hasOwnProperty(c) && Mn(u, c, i[c]);
					return new we((function(e, n) {
						ru(t, u.toString(), (function(t) {
							t ? t.error ? n(es(t, o || {})) : e(t) : n(new k("network-request-failed"))
						}), r, s ? void 0 : nr(Rr(i)), t.a, t.i.get())
					}))
				}

				function uu(t) {
					if ("string" !== typeof(t = t.email) || !dr.test(t)) throw new k("invalid-email")
				}

				function su(t) {
					"email" in t && uu(t)
				}

				function cu(t) {
					if (!t[Ya]) {
						if (t.mfaPendingCredential) throw new k("multi-factor-auth-required", null, vt(t));
						throw new k("internal-error")
					}
				}

				function lu(t) {
					if (t.phoneNumber || t.temporaryProof) {
						if (!t.phoneNumber || !t.temporaryProof) throw new k("internal-error")
					} else {
						if (!t.sessionInfo) throw new k("missing-verification-id");
						if (!t.code) throw new k("missing-verification-code")
					}
				}
				Qa.prototype.s = function(t, e, n, r, i) {
					var o = this;
					Xa.then((function() {
						window.gapi.client.setApiKey(o.c);
						var a = window.gapi.auth.getToken();
						window.gapi.auth.setToken(null), window.gapi.client.request({
							path: t,
							method: n,
							body: r,
							headers: i,
							authType: "none",
							callback: function(t) {
								window.gapi.auth.setToken(a), e && e(t)
							}
						})
					})).o((function(t) {
						e && e({
							error: {
								message: t && t.message || "CORS_UNSUPPORTED"
							}
						})
					}))
				}, Qa.prototype.vb = function() {
					return Zu(this, zu, {})
				}, Qa.prototype.xb = function(t, e) {
					return Zu(this, Fu, {
						idToken: t,
						email: e
					})
				}, Qa.prototype.yb = function(t, e) {
					return Zu(this, Vu, {
						idToken: t,
						password: e
					})
				};
				var fu = {
					displayName: "DISPLAY_NAME",
					photoUrl: "PHOTO_URL"
				};

				function hu(t) {
					if (!t.phoneVerificationInfo) throw new k("internal-error");
					if (!t.phoneVerificationInfo.sessionInfo) throw new k("missing-verification-id");
					if (!t.phoneVerificationInfo.code) throw new k("missing-verification-code")
				}

				function pu(t) {
					if (!t.requestUri || !t.sessionId && !t.postBody && !t.pendingToken) throw new k("internal-error")
				}

				function du(t, e) {
					return e.oauthIdToken && e.providerId && 0 == e.providerId.indexOf("oidc.") && !e.pendingToken && (t.sessionId ? e.nonce = t.sessionId : t.postBody && (Jn(t = new Qn(t.postBody), "nonce") && (e.nonce = t.get("nonce")))), e
				}

				function vu(t) {
					var e = null;
					if (t.needConfirmation ? (t.code = "account-exists-with-different-credential", e = Wo(t)) : "FEDERATED_USER_ID_ALREADY_LINKED" == t.errorMessage ? (t.code = "credential-already-in-use", e = Wo(t)) : "EMAIL_EXISTS" == t.errorMessage ? (t.code = "email-already-in-use", e = Wo(t)) : t.errorMessage && (e = ts(t.errorMessage)), e) throw e;
					cu(t)
				}

				function mu(t, e) {
					return e.returnIdpCredential = !0, Zu(t, Gu, e)
				}

				function yu(t, e) {
					return e.returnIdpCredential = !0, Zu(t, Hu, e)
				}

				function gu(t, e) {
					return e.returnIdpCredential = !0, e.autoCreate = !1, Zu(t, Wu, e)
				}

				function bu(t) {
					if (!t.oobCode) throw new k("invalid-action-code")
				}(e = Qa.prototype).zb = function(t, e) {
					var n = {
							idToken: t
						},
						r = [];
					return pt(fu, (function(t, i) {
						var o = e[i];
						null === o ? r.push(t) : i in e && (n[i] = o)
					})), r.length && (n.deleteAttribute = r), Zu(this, Fu, n)
				}, e.rb = function(t, e) {
					return yt(t = {
						requestType: "PASSWORD_RESET",
						email: t
					}, e), Zu(this, Ru, t)
				}, e.sb = function(t, e) {
					return yt(t = {
						requestType: "EMAIL_SIGNIN",
						email: t
					}, e), Zu(this, Cu, t)
				}, e.qb = function(t, e) {
					return yt(t = {
						requestType: "VERIFY_EMAIL",
						idToken: t
					}, e), Zu(this, Du, t)
				}, e.Ab = function(t, e, n) {
					return yt(t = {
						requestType: "VERIFY_AND_CHANGE_EMAIL",
						idToken: t,
						newEmail: e
					}, n), Zu(this, Pu, t)
				}, e.cb = function(t) {
					return Zu(this, Xu, t)
				}, e.jb = function(t, e) {
					return Zu(this, ju, {
						oobCode: t,
						newPassword: e
					})
				}, e.Pa = function(t) {
					return Zu(this, _u, {
						oobCode: t
					})
				}, e.fb = function(t) {
					return Zu(this, wu, {
						oobCode: t
					})
				};
				var wu = {
						endpoint: "setAccountInfo",
						A: bu,
						Y: "email",
						C: !0
					},
					_u = {
						endpoint: "resetPassword",
						A: bu,
						G: function(t) {
							var e = t.requestType;
							if (!e || !t.email && "EMAIL_SIGNIN" != e && "VERIFY_AND_CHANGE_EMAIL" != e) throw new k("internal-error")
						},
						C: !0
					},
					Eu = {
						endpoint: "signupNewUser",
						A: function(t) {
							if (uu(t), !t.password) throw new k("weak-password")
						},
						G: cu,
						U: !0,
						C: !0
					},
					Iu = {
						endpoint: "createAuthUri",
						C: !0
					},
					Tu = {
						endpoint: "deleteAccount",
						M: ["idToken"]
					},
					Su = {
						endpoint: "setAccountInfo",
						M: ["idToken", "deleteProvider"],
						A: function(t) {
							if ("array" != p(t.deleteProvider)) throw new k("internal-error")
						}
					},
					ku = {
						endpoint: "emailLinkSignin",
						M: ["email", "oobCode"],
						A: uu,
						G: cu,
						U: !0,
						C: !0
					},
					Nu = {
						endpoint: "emailLinkSignin",
						M: ["idToken", "email", "oobCode"],
						A: uu,
						G: cu,
						U: !0
					},
					Au = {
						endpoint: "accounts/mfaEnrollment:finalize",
						M: ["idToken", "phoneVerificationInfo"],
						A: hu,
						G: cu,
						C: !0,
						La: !0
					},
					xu = {
						endpoint: "accounts/mfaSignIn:finalize",
						M: ["mfaPendingCredential", "phoneVerificationInfo"],
						A: hu,
						G: cu,
						C: !0,
						La: !0
					},
					Ou = {
						endpoint: "getAccountInfo"
					},
					Cu = {
						endpoint: "getOobConfirmationCode",
						M: ["requestType"],
						A: function(t) {
							if ("EMAIL_SIGNIN" != t.requestType) throw new k("internal-error");
							uu(t)
						},
						Y: "email",
						C: !0
					},
					Du = {
						endpoint: "getOobConfirmationCode",
						M: ["idToken", "requestType"],
						A: function(t) {
							if ("VERIFY_EMAIL" != t.requestType) throw new k("internal-error")
						},
						Y: "email",
						C: !0
					},
					Pu = {
						endpoint: "getOobConfirmationCode",
						M: ["idToken", "newEmail", "requestType"],
						A: function(t) {
							if ("VERIFY_AND_CHANGE_EMAIL" != t.requestType) throw new k("internal-error")
						},
						Y: "email",
						C: !0
					},
					Ru = {
						endpoint: "getOobConfirmationCode",
						M: ["requestType"],
						A: function(t) {
							if ("PASSWORD_RESET" != t.requestType) throw new k("internal-error");
							uu(t)
						},
						Y: "email",
						C: !0
					},
					Lu = {
						hb: !0,
						endpoint: "getProjectConfig",
						Rb: "GET"
					},
					Mu = {
						hb: !0,
						endpoint: "getRecaptchaParam",
						Rb: "GET",
						G: function(t) {
							if (!t.recaptchaSiteKey) throw new k("internal-error")
						}
					},
					ju = {
						endpoint: "resetPassword",
						A: bu,
						Y: "email",
						C: !0
					},
					Uu = {
						endpoint: "sendVerificationCode",
						M: ["phoneNumber", "recaptchaToken"],
						Y: "sessionInfo",
						C: !0
					},
					Fu = {
						endpoint: "setAccountInfo",
						M: ["idToken"],
						A: su,
						U: !0
					},
					Vu = {
						endpoint: "setAccountInfo",
						M: ["idToken"],
						A: function(t) {
							if (su(t), !t.password) throw new k("weak-password")
						},
						G: cu,
						U: !0
					},
					zu = {
						endpoint: "signupNewUser",
						G: cu,
						U: !0,
						C: !0
					},
					Bu = {
						endpoint: "accounts/mfaEnrollment:start",
						M: ["idToken", "phoneEnrollmentInfo"],
						A: function(t) {
							if (!t.phoneEnrollmentInfo) throw new k("internal-error");
							if (!t.phoneEnrollmentInfo.phoneNumber) throw new k("missing-phone-number");
							if (!t.phoneEnrollmentInfo.recaptchaToken) throw new k("missing-app-credential")
						},
						G: function(t) {
							if (!t.phoneSessionInfo || !t.phoneSessionInfo.sessionInfo) throw new k("internal-error")
						},
						C: !0,
						La: !0
					},
					qu = {
						endpoint: "accounts/mfaSignIn:start",
						M: ["mfaPendingCredential", "mfaEnrollmentId", "phoneSignInInfo"],
						A: function(t) {
							if (!t.phoneSignInInfo || !t.phoneSignInInfo.recaptchaToken) throw new k("missing-app-credential")
						},
						G: function(t) {
							if (!t.phoneResponseInfo || !t.phoneResponseInfo.sessionInfo) throw new k("internal-error")
						},
						C: !0,
						La: !0
					},
					Gu = {
						endpoint: "verifyAssertion",
						A: pu,
						Wa: du,
						G: vu,
						U: !0,
						C: !0
					},
					Wu = {
						endpoint: "verifyAssertion",
						A: pu,
						Wa: du,
						G: function(t) {
							if (t.errorMessage && "USER_NOT_FOUND" == t.errorMessage) throw new k("user-not-found");
							if (t.errorMessage) throw ts(t.errorMessage);
							cu(t)
						},
						U: !0,
						C: !0
					},
					Hu = {
						endpoint: "verifyAssertion",
						A: function(t) {
							if (pu(t), !t.idToken) throw new k("internal-error")
						},
						Wa: du,
						G: vu,
						U: !0
					},
					Ku = {
						endpoint: "verifyCustomToken",
						A: function(t) {
							if (!t.token) throw new k("invalid-custom-token")
						},
						G: cu,
						U: !0,
						C: !0
					},
					Qu = {
						endpoint: "verifyPassword",
						A: function(t) {
							if (uu(t), !t.password) throw new k("wrong-password")
						},
						G: cu,
						U: !0,
						C: !0
					},
					Xu = {
						endpoint: "verifyPhoneNumber",
						A: lu,
						G: cu,
						C: !0
					},
					Yu = {
						endpoint: "verifyPhoneNumber",
						A: function(t) {
							if (!t.idToken) throw new k("internal-error");
							lu(t)
						},
						G: function(t) {
							if (t.temporaryProof) throw t.code = "credential-already-in-use", Wo(t);
							cu(t)
						}
					},
					$u = {
						Eb: {
							USER_NOT_FOUND: "user-not-found"
						},
						endpoint: "verifyPhoneNumber",
						A: lu,
						G: cu,
						C: !0
					},
					Ju = {
						endpoint: "accounts/mfaEnrollment:withdraw",
						M: ["idToken", "mfaEnrollmentId"],
						G: function(t) {
							if (!!t[Ya] ^ !!t.refreshToken) throw new k("internal-error")
						},
						C: !0,
						La: !0
					};

				function Zu(t, e, n) {
					if (! function(t, e) {
							if (!e || !e.length) return !0;
							if (!t) return !1;
							for (var n = 0; n < e.length; n++) {
								var r = t[e[n]];
								if (void 0 === r || null === r || "" === r) return !1
							}
							return !0
						}(n, e.M)) return Ae(new k("internal-error"));
					var r, i = !!e.La,
						o = e.Rb || "POST";
					return Ne(n).then(e.A).then((function() {
						return e.U && (n.returnSecureToken = !0), e.C && t.b && "undefined" === typeof n.tenantId && (n.tenantId = t.b), au(t, i ? t.l : t.h, e.endpoint, o, n, e.Eb, e.hb || !1)
					})).then((function(t) {
						return r = t, e.Wa ? e.Wa(n, r) : r
					})).then(e.G).then((function() {
						if (!e.Y) return r;
						if (!(e.Y in r)) throw new k("internal-error");
						return r[e.Y]
					}))
				}

				function ts(t) {
					return es({
						error: {
							errors: [{
								message: t
							}],
							code: 400,
							message: t
						}
					})
				}

				function es(t, e) {
					var n = (t.error && t.error.errors && t.error.errors[0] || {}).reason || "",
						r = {
							keyInvalid: "invalid-api-key",
							ipRefererBlocked: "app-not-authorized"
						};
					if (n = r[n] ? new k(r[n]) : null) return n;
					for (var i in n = t.error && t.error.message || "", yt(r = {
							INVALID_CUSTOM_TOKEN: "invalid-custom-token",
							CREDENTIAL_MISMATCH: "custom-token-mismatch",
							MISSING_CUSTOM_TOKEN: "internal-error",
							INVALID_IDENTIFIER: "invalid-email",
							MISSING_CONTINUE_URI: "internal-error",
							INVALID_EMAIL: "invalid-email",
							INVALID_PASSWORD: "wrong-password",
							USER_DISABLED: "user-disabled",
							MISSING_PASSWORD: "internal-error",
							EMAIL_EXISTS: "email-already-in-use",
							PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
							INVALID_IDP_RESPONSE: "invalid-credential",
							INVALID_PENDING_TOKEN: "invalid-credential",
							FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
							MISSING_OR_INVALID_NONCE: "missing-or-invalid-nonce",
							INVALID_MESSAGE_PAYLOAD: "invalid-message-payload",
							INVALID_RECIPIENT_EMAIL: "invalid-recipient-email",
							INVALID_SENDER: "invalid-sender",
							EMAIL_NOT_FOUND: "user-not-found",
							RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
							EXPIRED_OOB_CODE: "expired-action-code",
							INVALID_OOB_CODE: "invalid-action-code",
							MISSING_OOB_CODE: "internal-error",
							INVALID_PROVIDER_ID: "invalid-provider-id",
							CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
							INVALID_ID_TOKEN: "invalid-user-token",
							TOKEN_EXPIRED: "user-token-expired",
							USER_NOT_FOUND: "user-token-expired",
							CORS_UNSUPPORTED: "cors-unsupported",
							DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated",
							INVALID_APP_ID: "invalid-app-id",
							TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
							WEAK_PASSWORD: "weak-password",
							OPERATION_NOT_ALLOWED: "operation-not-allowed",
							USER_CANCELLED: "user-cancelled",
							CAPTCHA_CHECK_FAILED: "captcha-check-failed",
							INVALID_APP_CREDENTIAL: "invalid-app-credential",
							INVALID_CODE: "invalid-verification-code",
							INVALID_PHONE_NUMBER: "invalid-phone-number",
							INVALID_SESSION_INFO: "invalid-verification-id",
							INVALID_TEMPORARY_PROOF: "invalid-credential",
							MISSING_APP_CREDENTIAL: "missing-app-credential",
							MISSING_CODE: "missing-verification-code",
							MISSING_PHONE_NUMBER: "missing-phone-number",
							MISSING_SESSION_INFO: "missing-verification-id",
							QUOTA_EXCEEDED: "quota-exceeded",
							SESSION_EXPIRED: "code-expired",
							REJECTED_CREDENTIAL: "rejected-credential",
							INVALID_CONTINUE_URI: "invalid-continue-uri",
							MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
							MISSING_IOS_BUNDLE_ID: "missing-ios-bundle-id",
							UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
							INVALID_DYNAMIC_LINK_DOMAIN: "invalid-dynamic-link-domain",
							INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
							INVALID_CERT_HASH: "invalid-cert-hash",
							UNSUPPORTED_TENANT_OPERATION: "unsupported-tenant-operation",
							INVALID_TENANT_ID: "invalid-tenant-id",
							TENANT_ID_MISMATCH: "tenant-id-mismatch",
							ADMIN_ONLY_OPERATION: "admin-restricted-operation",
							INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
							MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
							MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
							MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
							EMAIL_CHANGE_NEEDS_VERIFICATION: "email-change-needs-verification",
							SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
							SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
							UNSUPPORTED_FIRST_FACTOR: "unsupported-first-factor",
							UNVERIFIED_EMAIL: "unverified-email"
						}, e || {}), e = (e = n.match(/^[^\s]+\s*:\s*([\s\S]*)$/)) && 1 < e.length ? e[1] : void 0, r)
						if (0 === n.indexOf(i)) return new k(r[i], e);
					return !e && t && (e = Pr(t)), new k("internal-error", e)
				}

				function ns(t) {
					this.b = t, this.a = null, this.nb = function(t) {
						return (as || (as = new we((function(t, e) {
							function n() {
								Ur(), Nr("gapi.load")("gapi.iframes", {
									callback: t,
									ontimeout: function() {
										Ur(), e(Error("Network Error"))
									},
									timeout: is.get()
								})
							}
							if (Nr("gapi.iframes.Iframe")) t();
							else if (Nr("gapi.load")) n();
							else {
								var r = "__iframefcb" + Math.floor(1e6 * Math.random()).toString();
								c[r] = function() {
									Nr("gapi.load") ? n() : e(Error("Network Error"))
								}, Ne(za(r = kt(rs, {
									onload: r
								}))).o((function() {
									e(Error("Network Error"))
								}))
							}
						})).o((function(t) {
							throw as = null, t
						})))).then((function() {
							return new we((function(e, n) {
								Nr("gapi.iframes.getContext")().open({
									where: document.body,
									url: t.b,
									messageHandlersFilter: Nr("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),
									attributes: {
										style: {
											position: "absolute",
											top: "-100px",
											width: "1px",
											height: "1px"
										}
									},
									dontclear: !0
								}, (function(r) {
									function i() {
										clearTimeout(o), e()
									}
									t.a = r, t.a.restyle({
										setHideOnLeave: !1
									});
									var o = setTimeout((function() {
										n(Error("Network Error"))
									}), os.get());
									r.ping(i).then(i, (function() {
										n(Error("Network Error"))
									}))
								}))
							}))
						}))
					}(this)
				}
				var rs = new bt(Et, "https://apis.google.com/js/api.js?onload=%{onload}"),
					is = new Fr(3e4, 6e4),
					os = new Fr(5e3, 15e3),
					as = null;

				function us(t, e, n) {
					this.i = t, this.g = e, this.h = n, this.f = null, this.a = Fn(this.i, "/__/auth/iframe"), Mn(this.a, "apiKey", this.g), Mn(this.a, "appName", this.h), this.b = null, this.c = []
				}

				function ss(t, e, n, r, i) {
					this.s = t, this.m = e, this.c = n, this.u = r, this.i = this.g = this.l = null, this.a = i, this.h = this.f = null
				}

				function cs(t) {
					try {
						return r.app(t).auth().Ea()
					} catch (e) {
						return []
					}
				}

				function ls(t, e, n, r, i) {
					this.u = t, this.f = e, this.b = n, this.c = r || null, this.h = i || null, this.m = this.s = this.w = null, this.g = [], this.l = this.a = null
				}

				function fs(t) {
					var e = sr();
					return function(t) {
						return Zu(t, Lu, {}).then((function(t) {
							return t.authorizedDomains || []
						}))
					}(t).then((function(t) {
						t: {
							var n = Un(e),
								r = n.f;n = n.b;
							for (var i = 0; i < t.length; i++) {
								var o = t[i],
									a = n,
									u = r;
								if (0 == o.indexOf("chrome-extension://") ? a = Un(o).b == a && "chrome-extension" == u : "http" != u && "https" != u ? a = !1 : pr.test(o) ? a = a == o : (o = o.split(".").join("\\."), a = new RegExp("^(.+\\." + o + "|" + o + ")$", "i").test(a)), a) {
									t = !0;
									break t
								}
							}
							t = !1
						}
						if (!t) throw new qo(sr())
					}))
				}

				function hs(t) {
					return t.l || (t.l = vr().then((function() {
						if (!t.s) {
							var e = t.c,
								n = t.h,
								r = cs(t.b),
								i = new us(t.u, t.f, t.b);
							i.f = e, i.b = n, i.c = J(r || []), t.s = i.toString()
						}
						t.i = new ns(t.s),
							function(t) {
								if (!t.i) throw Error("IfcHandler must be initialized!");
								! function(t, e) {
									t.nb.then((function() {
										t.a.register("authEvent", e, Nr("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))
									}))
								}(t.i, (function(e) {
									var n = {};
									if (e && e.authEvent) {
										var r = !1;
										for (e = Fo(e.authEvent), n = 0; n < t.g.length; n++) r = t.g[n](e) || r;
										return (n = {}).status = r ? "ACK" : "ERROR", Ne(n)
									}
									return n.status = "ERROR", Ne(n)
								}))
							}(t)
					}))), t.l
				}

				function ps(t) {
					return t.m || (t.w = t.c ? Sr(t.c, cs(t.b)) : null, t.m = new Qa(t.f, D(t.h), t.w)), t.m
				}

				function ds(t, e, n, r, i, o, a, u, s, c, l) {
					return (t = new ss(t, e, n, r, i)).l = o, t.g = a, t.i = u, t.b = vt(s || null), t.f = c, t.ub(l).toString()
				}

				function vs(t) {
					if (this.a = t || r.INTERNAL.reactNative && r.INTERNAL.reactNative.AsyncStorage, !this.a) throw new k("internal-error", "The React Native compatibility library was not found.");
					this.type = "asyncStorage"
				}

				function ms(t) {
					this.b = t, this.a = {}, this.f = E(this.c, this)
				}
				us.prototype.toString = function() {
					return this.f ? Mn(this.a, "v", this.f) : $n(this.a.a, "v"), this.b ? Mn(this.a, "eid", this.b) : $n(this.a.a, "eid"), this.c.length ? Mn(this.a, "fw", this.c.join(",")) : $n(this.a.a, "fw"), this.a.toString()
				}, ss.prototype.ub = function(t) {
					return this.h = t, this
				}, ss.prototype.toString = function() {
					var t = Fn(this.s, "/__/auth/handler");
					if (Mn(t, "apiKey", this.m), Mn(t, "appName", this.c), Mn(t, "authType", this.u), this.a.isOAuthProvider) {
						var e = this.a;
						try {
							var n = r.app(this.c).auth().ja()
						} catch (s) {
							n = null
						}
						for (var i in e.kb = n, Mn(t, "providerId", this.a.providerId), n = Rr((e = this.a).Fb)) n[i] = n[i].toString();
						i = e.Oc, n = vt(n);
						for (var o = 0; o < i.length; o++) {
							var a = i[o];
							a in n && delete n[a]
						}
						e.lb && e.kb && !n[e.lb] && (n[e.lb] = e.kb), dt(n) || Mn(t, "customParameters", Pr(n))
					}
					if ("function" === typeof this.a.Nb && ((e = this.a.Nb()).length && Mn(t, "scopes", e.join(","))), this.l ? Mn(t, "redirectUrl", this.l) : $n(t.a, "redirectUrl"), this.g ? Mn(t, "eventId", this.g) : $n(t.a, "eventId"), this.i ? Mn(t, "v", this.i) : $n(t.a, "v"), this.b)
						for (var u in this.b) this.b.hasOwnProperty(u) && !jn(t, u) && Mn(t, u, this.b[u]);
					return this.h ? Mn(t, "tid", this.h) : $n(t.a, "tid"), this.f ? Mn(t, "eid", this.f) : $n(t.a, "eid"), (u = cs(this.c)).length && Mn(t, "fw", u.join(",")), t.toString()
				}, (e = ls.prototype).Lb = function(t, e, n) {
					var r = new k("popup-closed-by-user"),
						i = new k("web-storage-unsupported"),
						o = this,
						a = !1;
					return this.ka().then((function() {
						(function(t) {
							var e = {
								type: "webStorageSupport"
							};
							return hs(t).then((function() {
								return function(t, e) {
									return t.nb.then((function() {
										return new we((function(n) {
											t.a.send(e.type, e, n, Nr("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))
										}))
									}))
								}(t.i, e)
							})).then((function(t) {
								if (t && t.length && "undefined" !== typeof t[0].webStorageSupport) return t[0].webStorageSupport;
								throw Error()
							}))
						})(o).then((function(n) {
							n || (t && fr(t), e(i), a = !0)
						}))
					})).o((function() {})).then((function() {
						if (!a) return function(t) {
							return new we((function(e) {
								return function n() {
									Sn(2e3).then((function() {
										if (t && !t.closed) return n();
										e()
									}))
								}()
							}))
						}(t)
					})).then((function() {
						if (!a) return Sn(n).then((function() {
							e(r)
						}))
					}))
				}, e.Ub = function() {
					var t = kr();
					return !Dr(t) && !jr(t)
				}, e.Qb = function() {
					return !1
				}, e.Jb = function(t, e, n, r, i, o, a, u) {
					if (!t) return Ae(new k("popup-blocked"));
					if (a && !Dr()) return this.ka().o((function(e) {
						fr(t), i(e)
					})), r(), Ne();
					this.a || (this.a = fs(ps(this)));
					var s = this;
					return this.a.then((function() {
						var e = s.ka().o((function(e) {
							throw fr(t), i(e), e
						}));
						return r(), e
					})).then((function() {
						(jo(n), a) || cr(ds(s.u, s.f, s.b, e, n, null, o, s.c, void 0, s.h, u), t)
					})).o((function(t) {
						throw "auth/network-request-failed" == t.code && (s.a = null), t
					}))
				}, e.Kb = function(t, e, n, r) {
					this.a || (this.a = fs(ps(this)));
					var i = this;
					return this.a.then((function() {
						jo(e), cr(ds(i.u, i.f, i.b, t, e, sr(), n, i.c, void 0, i.h, r))
					})).o((function(t) {
						throw "auth/network-request-failed" == t.code && (i.a = null), t
					}))
				}, e.ka = function() {
					var t = this;
					return hs(this).then((function() {
						return t.i.nb
					})).o((function() {
						throw t.a = null, new k("network-request-failed")
					}))
				}, e.Xb = function() {
					return !0
				}, e.Ca = function(t) {
					this.g.push(t)
				}, e.Qa = function(t) {
					Y(this.g, (function(e) {
						return e == t
					}))
				}, (e = vs.prototype).get = function(t) {
					return Ne(this.a.getItem(t)).then((function(t) {
						return t && Lr(t)
					}))
				}, e.set = function(t, e) {
					return Ne(this.a.setItem(t, Pr(e)))
				}, e.T = function(t) {
					return Ne(this.a.removeItem(t))
				}, e.ba = function() {}, e.ha = function() {};
				var ys, gs = [];

				function bs(t, e, n) {
					dt(t.a) && t.b.addEventListener("message", t.f), "undefined" === typeof t.a[e] && (t.a[e] = []), t.a[e].push(n)
				}

				function ws(t) {
					this.a = t
				}

				function _s(t) {
					this.c = t, this.b = !1, this.a = []
				}

				function Es(t, e, n, r) {
					var i, o, a, u, s = n || {},
						c = null;
					if (t.b) return Ae(Error("connection_unavailable"));
					var l = r ? 800 : 50,
						f = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
					return new we((function(n, r) {
						f ? (i = Math.floor(Math.random() * Math.pow(10, 20)).toString(), f.port1.start(), a = setTimeout((function() {
							r(Error("unsupported_event"))
						}), l), c = {
							messageChannel: f,
							onMessage: o = function(t) {
								t.data.eventId === i && ("ack" === t.data.status ? (clearTimeout(a), u = setTimeout((function() {
									r(Error("timeout"))
								}), 3e3)) : "done" === t.data.status ? (clearTimeout(u), "undefined" !== typeof t.data.response ? n(t.data.response) : r(Error("unknown_error"))) : (clearTimeout(a), clearTimeout(u), r(Error("invalid_response"))))
							}
						}, t.a.push(c), f.port1.addEventListener("message", o), t.c.postMessage({
							eventType: e,
							eventId: i,
							data: s
						}, [f.port2])) : r(Error("connection_unavailable"))
					})).then((function(e) {
						return Is(t, c), e
					})).o((function(e) {
						throw Is(t, c), e
					}))
				}

				function Is(t, e) {
					if (e) {
						var n = e.messageChannel,
							r = e.onMessage;
						n && (n.port1.removeEventListener("message", r), n.port1.close()), Y(t.a, (function(t) {
							return t == e
						}))
					}
				}

				function Ts() {
					if (!Ns()) throw new k("web-storage-unsupported");
					this.c = {}, this.a = [], this.b = 0, this.u = c.indexedDB, this.type = "indexedDB", this.g = this.l = this.f = this.i = null, this.s = !1, this.h = null;
					var t = this;
					gr() && self ? (this.l = function() {
						var t = gr() ? self : null;
						if (G(gs, (function(n) {
								n.b == t && (e = n)
							})), !e) {
							var e = new ms(t);
							gs.push(e)
						}
						return e
					}(), bs(this.l, "keyChanged", (function(e, n) {
						return Ds(t).then((function(e) {
							return 0 < e.length && G(t.a, (function(t) {
								t(e)
							})), {
								keyProcessed: Q(e, n.key)
							}
						}))
					})), bs(this.l, "ping", (function() {
						return Ne(["keyChanged"])
					}))) : function() {
						var t = c.navigator;
						return t && t.serviceWorker ? Ne().then((function() {
							return t.serviceWorker.ready
						})).then((function(t) {
							return t.active || null
						})).o((function() {
							return null
						})) : Ne(null)
					}().then((function(e) {
						(t.h = e) && (t.g = new _s(new ws(e)), Es(t.g, "ping", null, !0).then((function(e) {
							e[0].fulfilled && Q(e[0].value, "keyChanged") && (t.s = !0)
						})).o((function() {})))
					}))
				}

				function Ss(t) {
					return new we((function(e, n) {
						var r = t.u.open("firebaseLocalStorageDb", 1);
						r.onerror = function(t) {
							try {
								t.preventDefault()
							} catch (e) {}
							n(Error(t.target.error))
						}, r.onupgradeneeded = function(t) {
							t = t.target.result;
							try {
								t.createObjectStore("firebaseLocalStorage", {
									keyPath: "fbase_key"
								})
							} catch (e) {
								n(e)
							}
						}, r.onsuccess = function(r) {
							(r = r.target.result).objectStoreNames.contains("firebaseLocalStorage") ? e(r) : function(t) {
								return new we((function(e, n) {
									var r = t.u.deleteDatabase("firebaseLocalStorageDb");
									r.onsuccess = function() {
										e()
									}, r.onerror = function(t) {
										n(Error(t.target.error))
									}
								}))
							}(t).then((function() {
								return Ss(t)
							})).then((function(t) {
								e(t)
							})).o((function(t) {
								n(t)
							}))
						}
					}))
				}

				function ks(t) {
					return t.m || (t.m = Ss(t)), t.m
				}

				function Ns() {
					try {
						return !!c.indexedDB
					} catch (aa) {
						return !1
					}
				}

				function As(t) {
					return t.objectStore("firebaseLocalStorage")
				}

				function xs(t, e) {
					return t.transaction(["firebaseLocalStorage"], e ? "readwrite" : "readonly")
				}

				function Os(t) {
					return new we((function(e, n) {
						t.onsuccess = function(t) {
							t && t.target ? e(t.target.result) : e()
						}, t.onerror = function(t) {
							n(t.target.error)
						}
					}))
				}

				function Cs(t, e) {
					return t.g && t.h && function() {
						var t = c.navigator;
						return t && t.serviceWorker && t.serviceWorker.controller || null
					}() === t.h ? Es(t.g, "keyChanged", {
						key: e
					}, t.s).then((function() {})).o((function() {})) : Ne()
				}

				function Ds(t) {
					return ks(t).then((function(t) {
						var e = As(xs(t, !1));
						return e.getAll ? Os(e.getAll()) : new we((function(t, n) {
							var r = [],
								i = e.openCursor();
							i.onsuccess = function(e) {
								(e = e.target.result) ? (r.push(e.value), e.continue()) : t(r)
							}, i.onerror = function(t) {
								n(t.target.error)
							}
						}))
					})).then((function(e) {
						var n = {},
							r = [];
						if (0 == t.b) {
							for (r = 0; r < e.length; r++) n[e[r].fbase_key] = e[r].value;
							r = function t(e, n) {
								var r, i = [];
								for (r in e) r in n ? typeof e[r] != typeof n[r] ? i.push(r) : "object" == typeof e[r] && null != e[r] && null != n[r] ? 0 < t(e[r], n[r]).length && i.push(r) : e[r] !== n[r] && i.push(r) : i.push(r);
								for (r in n) r in e || i.push(r);
								return i
							}(t.c, n), t.c = n
						}
						return r
					}))
				}

				function Ps(t) {
					t.i && t.i.cancel("STOP_EVENT"), t.f && (clearTimeout(t.f), t.f = null)
				}

				function Rs(t) {
					var e = this,
						n = null;
					this.a = [], this.type = "indexedDB", this.c = t, this.b = Ne().then((function() {
						if (Ns()) {
							var t = Mr(),
								r = "__sak" + t;
							return ys || (ys = new Ts), (n = ys).set(r, t).then((function() {
								return n.get(r)
							})).then((function(e) {
								if (e !== t) throw Error("indexedDB not supported!");
								return n.T(r)
							})).then((function() {
								return n
							})).o((function() {
								return e.c
							}))
						}
						return e.c
					})).then((function(t) {
						return e.type = t.type, t.ba((function(t) {
							G(e.a, (function(e) {
								e(t)
							}))
						})), t
					}))
				}

				function Ls() {
					this.a = {}, this.type = "inMemory"
				}

				function Ms() {
					if (! function() {
							var t = "Node" == br();
							if (!(t = js() || t && r.INTERNAL.node && r.INTERNAL.node.localStorage)) return !1;
							try {
								return t.setItem("__sak", "1"), t.removeItem("__sak"), !0
							} catch (e) {
								return !1
							}
						}()) {
						if ("Node" == br()) throw new k("internal-error", "The LocalStorage compatibility library was not found.");
						throw new k("web-storage-unsupported")
					}
					this.a = js() || r.INTERNAL.node.localStorage, this.type = "localStorage"
				}

				function js() {
					try {
						var t = c.localStorage,
							e = Mr();
						return t && (t.setItem(e, "1"), t.removeItem(e)), t
					} catch (n) {
						return null
					}
				}

				function Us() {
					this.type = "nullStorage"
				}

				function Fs() {
					if (! function() {
							var t = "Node" == br();
							if (!(t = Vs() || t && r.INTERNAL.node && r.INTERNAL.node.sessionStorage)) return !1;
							try {
								return t.setItem("__sak", "1"), t.removeItem("__sak"), !0
							} catch (e) {
								return !1
							}
						}()) {
						if ("Node" == br()) throw new k("internal-error", "The SessionStorage compatibility library was not found.");
						throw new k("web-storage-unsupported")
					}
					this.a = Vs() || r.INTERNAL.node.sessionStorage, this.type = "sessionStorage"
				}

				function Vs() {
					try {
						var t = c.sessionStorage,
							e = Mr();
						return t && (t.setItem(e, "1"), t.removeItem(e)), t
					} catch (n) {
						return null
					}
				}

				function zs() {
					var t = {};
					t.Browser = Gs, t.Node = Ws, t.ReactNative = Hs, t.Worker = Ks, this.a = t[br()]
				}
				ms.prototype.c = function(t) {
					var e = t.data.eventType,
						n = t.data.eventId,
						r = this.a[e];
					if (r && 0 < r.length) {
						t.ports[0].postMessage({
							status: "ack",
							eventId: n,
							eventType: e,
							response: null
						});
						var i = [];
						G(r, (function(e) {
							i.push(Ne().then((function() {
								return e(t.origin, t.data.data)
							})))
						})), Oe(i).then((function(r) {
							var i = [];
							G(r, (function(t) {
								i.push({
									fulfilled: t.Mb,
									value: t.value,
									reason: t.reason ? t.reason.message : void 0
								})
							})), G(i, (function(t) {
								for (var e in t) "undefined" === typeof t[e] && delete t[e]
							})), t.ports[0].postMessage({
								status: "done",
								eventId: n,
								eventType: e,
								response: i
							})
						}))
					}
				}, ws.prototype.postMessage = function(t, e) {
					this.a.postMessage(t, e)
				}, _s.prototype.close = function() {
					for (; 0 < this.a.length;) Is(this, this.a[0]);
					this.b = !0
				}, (e = Ts.prototype).set = function(t, e) {
					var n, r = !1,
						i = this;
					return ks(this).then((function(e) {
						return Os((e = As(xs(n = e, !0))).get(t))
					})).then((function(o) {
						var a = As(xs(n, !0));
						return o ? (o.value = e, Os(a.put(o))) : (i.b++, r = !0, (o = {}).fbase_key = t, o.value = e, Os(a.add(o)))
					})).then((function() {
						return i.c[t] = e, Cs(i, t)
					})).ma((function() {
						r && i.b--
					}))
				}, e.get = function(t) {
					return ks(this).then((function(e) {
						return Os(As(xs(e, !1)).get(t))
					})).then((function(t) {
						return t && t.value
					}))
				}, e.T = function(t) {
					var e = !1,
						n = this;
					return ks(this).then((function(r) {
						return e = !0, n.b++, Os(As(xs(r, !0)).delete(t))
					})).then((function() {
						return delete n.c[t], Cs(n, t)
					})).ma((function() {
						e && n.b--
					}))
				}, e.ba = function(t) {
					0 == this.a.length && function(t) {
						Ps(t),
							function e() {
								t.f = setTimeout((function() {
									t.i = Ds(t).then((function(e) {
										0 < e.length && G(t.a, (function(t) {
											t(e)
										}))
									})).then((function() {
										e()
									})).o((function(t) {
										"STOP_EVENT" != t.message && e()
									}))
								}), 800)
							}()
					}(this), this.a.push(t)
				}, e.ha = function(t) {
					Y(this.a, (function(e) {
						return e == t
					})), 0 == this.a.length && Ps(this)
				}, (e = Rs.prototype).get = function(t) {
					return this.b.then((function(e) {
						return e.get(t)
					}))
				}, e.set = function(t, e) {
					return this.b.then((function(n) {
						return n.set(t, e)
					}))
				}, e.T = function(t) {
					return this.b.then((function(e) {
						return e.T(t)
					}))
				}, e.ba = function(t) {
					this.a.push(t)
				}, e.ha = function(t) {
					Y(this.a, (function(e) {
						return e == t
					}))
				}, (e = Ls.prototype).get = function(t) {
					return Ne(this.a[t])
				}, e.set = function(t, e) {
					return this.a[t] = e, Ne()
				}, e.T = function(t) {
					return delete this.a[t], Ne()
				}, e.ba = function() {}, e.ha = function() {}, (e = Ms.prototype).get = function(t) {
					var e = this;
					return Ne().then((function() {
						return Lr(e.a.getItem(t))
					}))
				}, e.set = function(t, e) {
					var n = this;
					return Ne().then((function() {
						var r = Pr(e);
						null === r ? n.T(t) : n.a.setItem(t, r)
					}))
				}, e.T = function(t) {
					var e = this;
					return Ne().then((function() {
						e.a.removeItem(t)
					}))
				}, e.ba = function(t) {
					c.window && sn(c.window, "storage", t)
				}, e.ha = function(t) {
					c.window && fn(c.window, "storage", t)
				}, (e = Us.prototype).get = function() {
					return Ne(null)
				}, e.set = function() {
					return Ne()
				}, e.T = function() {
					return Ne()
				}, e.ba = function() {}, e.ha = function() {}, (e = Fs.prototype).get = function(t) {
					var e = this;
					return Ne().then((function() {
						return Lr(e.a.getItem(t))
					}))
				}, e.set = function(t, e) {
					var n = this;
					return Ne().then((function() {
						var r = Pr(e);
						null === r ? n.T(t) : n.a.setItem(t, r)
					}))
				}, e.T = function(t) {
					var e = this;
					return Ne().then((function() {
						e.a.removeItem(t)
					}))
				}, e.ba = function() {}, e.ha = function() {};
				var Bs, qs, Gs = {
						F: Ms,
						$a: Fs
					},
					Ws = {
						F: Ms,
						$a: Fs
					},
					Hs = {
						F: vs,
						$a: Us
					},
					Ks = {
						F: Ms,
						$a: Us
					},
					Qs = {
						od: "local",
						NONE: "none",
						qd: "session"
					};

				function Xs() {
					var t = !(jr(kr()) || !yr()),
						e = Dr(),
						n = Ar();
					this.m = t, this.h = e, this.l = n, this.a = {}, Bs || (Bs = new zs), t = Bs;
					try {
						this.g = !ur() && Br() || !c.indexedDB ? new t.a.F : new Rs(gr() ? new Ls : new t.a.F)
					} catch (r) {
						this.g = new Ls, this.h = !0
					}
					try {
						this.i = new t.a.$a
					} catch (r) {
						this.i = new Ls
					}
					this.u = new Ls, this.f = E(this.Vb, this), this.b = {}
				}

				function Ys() {
					return qs || (qs = new Xs), qs
				}

				function $s(t, e) {
					switch (e) {
						case "session":
							return t.i;
						case "none":
							return t.u;
						default:
							return t.g
					}
				}

				function Js(t, e) {
					return "firebase:" + t.name + (e ? ":" + e : "")
				}

				function Zs(t, e, n) {
					return n = Js(e, n), "local" == e.F && (t.b[n] = null), $s(t, e.F).T(n)
				}

				function tc(t) {
					t.c && (clearInterval(t.c), t.c = null)
				}

				function ec(t) {
					this.a = t, this.b = Ys()
				}(e = Xs.prototype).get = function(t, e) {
					return $s(this, t.F).get(Js(t, e))
				}, e.set = function(t, e, n) {
					var r = Js(t, n),
						i = this,
						o = $s(this, t.F);
					return o.set(r, e).then((function() {
						return o.get(r)
					})).then((function(e) {
						"local" == t.F && (i.b[r] = e)
					}))
				}, e.addListener = function(t, e, n) {
					t = Js(t, e), this.l && (this.b[t] = c.localStorage.getItem(t)), dt(this.a) && ($s(this, "local").ba(this.f), this.h || (ur() || !Br()) && c.indexedDB || !this.l || function(t) {
						tc(t), t.c = setInterval((function() {
							for (var e in t.a) {
								var n = c.localStorage.getItem(e),
									r = t.b[e];
								n != r && (t.b[e] = n, n = new Ye({
									type: "storage",
									key: e,
									target: window,
									oldValue: r,
									newValue: n,
									a: !0
								}), t.Vb(n))
							}
						}), 1e3)
					}(this)), this.a[t] || (this.a[t] = []), this.a[t].push(n)
				}, e.removeListener = function(t, e, n) {
					t = Js(t, e), this.a[t] && (Y(this.a[t], (function(t) {
						return t == n
					})), 0 == this.a[t].length && delete this.a[t]), dt(this.a) && ($s(this, "local").ha(this.f), tc(this))
				}, e.Vb = function(t) {
					if (t && t.f) {
						var e = t.a.key;
						if (null == e)
							for (var n in this.a) {
								var r = this.b[n];
								"undefined" === typeof r && (r = null);
								var i = c.localStorage.getItem(n);
								i !== r && (this.b[n] = i, this.ib(n))
							} else if (0 == e.indexOf("firebase:") && this.a[e]) {
								if ("undefined" !== typeof t.a.a ? $s(this, "local").ha(this.f) : tc(this), this.m)
									if (n = c.localStorage.getItem(e), (r = t.a.newValue) !== n) null !== r ? c.localStorage.setItem(e, r) : c.localStorage.removeItem(e);
									else if (this.b[e] === r && "undefined" === typeof t.a.a) return;
								var o = this;
								n = function() {
									"undefined" === typeof t.a.a && o.b[e] === c.localStorage.getItem(e) || (o.b[e] = c.localStorage.getItem(e), o.ib(e))
								}, Kt && ne && 10 == ne && c.localStorage.getItem(e) !== t.a.newValue && t.a.newValue !== t.a.oldValue ? setTimeout(n, 10) : n()
							}
					} else G(t, E(this.ib, this))
				}, e.ib = function(t) {
					this.a[t] && G(this.a[t], (function(t) {
						t()
					}))
				};
				var nc, rc = {
					name: "authEvent",
					F: "local"
				};

				function ic() {
					this.a = Ys()
				}

				function oc(t, e) {
					this.b = ac, this.f = c.Uint8Array ? new Uint8Array(this.b) : Array(this.b), this.g = this.c = 0, this.a = [], this.i = t, this.h = e, this.l = c.Int32Array ? new Int32Array(64) : Array(64), void 0 === nc && (nc = c.Int32Array ? new Int32Array(pc) : pc), this.reset()
				}
				S(oc, (function() {
					this.b = -1
				}));
				for (var ac = 64, uc = ac - 1, sc = [], cc = 0; cc < uc; cc++) sc[cc] = 0;
				var lc = $(128, sc);

				function fc(t) {
					for (var e = t.f, n = t.l, r = 0, i = 0; i < e.length;) n[r++] = e[i] << 24 | e[i + 1] << 16 | e[i + 2] << 8 | e[i + 3], i = 4 * r;
					for (e = 16; 64 > e; e++) {
						i = 0 | n[e - 15], r = 0 | n[e - 2];
						var o = (0 | n[e - 16]) + ((i >>> 7 | i << 25) ^ (i >>> 18 | i << 14) ^ i >>> 3) | 0,
							a = (0 | n[e - 7]) + ((r >>> 17 | r << 15) ^ (r >>> 19 | r << 13) ^ r >>> 10) | 0;
						n[e] = o + a | 0
					}
					r = 0 | t.a[0], i = 0 | t.a[1];
					var u = 0 | t.a[2],
						s = 0 | t.a[3],
						c = 0 | t.a[4],
						l = 0 | t.a[5],
						f = 0 | t.a[6];
					for (o = 0 | t.a[7], e = 0; 64 > e; e++) {
						var h = ((r >>> 2 | r << 30) ^ (r >>> 13 | r << 19) ^ (r >>> 22 | r << 10)) + (r & i ^ r & u ^ i & u) | 0;
						a = (o = o + ((c >>> 6 | c << 26) ^ (c >>> 11 | c << 21) ^ (c >>> 25 | c << 7)) | 0) + ((a = (a = c & l ^ ~c & f) + (0 | nc[e]) | 0) + (0 | n[e]) | 0) | 0, o = f, f = l, l = c, c = s + a | 0, s = u, u = i, i = r, r = a + h | 0
					}
					t.a[0] = t.a[0] + r | 0, t.a[1] = t.a[1] + i | 0, t.a[2] = t.a[2] + u | 0, t.a[3] = t.a[3] + s | 0, t.a[4] = t.a[4] + c | 0, t.a[5] = t.a[5] + l | 0, t.a[6] = t.a[6] + f | 0, t.a[7] = t.a[7] + o | 0
				}

				function hc(t, e, n) {
					void 0 === n && (n = e.length);
					var r = 0,
						i = t.c;
					if ("string" === typeof e)
						for (; r < n;) t.f[i++] = e.charCodeAt(r++), i == t.b && (fc(t), i = 0);
					else {
						if (!d(e)) throw Error("message must be string or array");
						for (; r < n;) {
							var o = e[r++];
							if (!("number" == typeof o && 0 <= o && 255 >= o && o == (0 | o))) throw Error("message must be a byte array");
							t.f[i++] = o, i == t.b && (fc(t), i = 0)
						}
					}
					t.c = i, t.g += n
				}
				oc.prototype.reset = function() {
					this.g = this.c = 0, this.a = c.Int32Array ? new Int32Array(this.h) : J(this.h)
				};
				var pc = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

				function dc() {
					oc.call(this, 8, vc)
				}
				S(dc, oc);
				var vc = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];

				function mc(t, e, n, r, i) {
					this.u = t, this.i = e, this.l = n, this.m = r || null, this.s = i || null, this.h = e + ":" + n, this.w = new ic, this.g = new ec(this.h), this.f = null, this.b = [], this.a = this.c = null
				}

				function yc(t) {
					return new k("invalid-cordova-configuration", t)
				}

				function gc(t) {
					var e = new dc;
					hc(e, t), t = [];
					var n = 8 * e.g;
					56 > e.c ? hc(e, lc, 56 - e.c) : hc(e, lc, e.b - (e.c - 56));
					for (var r = 63; 56 <= r; r--) e.f[r] = 255 & n, n /= 256;
					for (fc(e), r = n = 0; r < e.i; r++)
						for (var i = 24; 0 <= i; i -= 8) t[n++] = e.a[r] >> i & 255;
					return function(t) {
						return H(t, (function(t) {
							return 1 < (t = t.toString(16)).length ? t : "0" + t
						})).join("")
					}(t)
				}

				function bc(t, e) {
					for (var n = 0; n < t.b.length; n++) try {
						t.b[n](e)
					} catch (r) {}
				}

				function wc(t) {
					return t.f || (t.f = t.ka().then((function() {
						return new we((function(e) {
							t.Ca((function n(r) {
									return e(r), t.Qa(n), !1
								})),
								function(t) {
									function e(e) {
										r = !0, i && i.cancel(), _c(t).then((function(r) {
											var i = n;
											if (r && e && e.url) {
												var o = null; - 1 != (i = no(e.url)).indexOf("/__/auth/callback") && (o = (o = "object" === typeof(o = Lr(jn(o = Un(i), "firebaseError") || null)) ? N(o) : null) ? new Uo(r.c, r.b, null, null, o, null, r.S()) : new Uo(r.c, r.b, i, r.f, null, null, r.S())), i = o || n
											}
											bc(t, i)
										}))
									}
									var n = new Uo("unknown", null, null, null, new k("no-auth-event")),
										r = !1,
										i = Sn(500).then((function() {
											return _c(t).then((function() {
												r || bc(t, n)
											}))
										})),
										o = c.handleOpenURL;
									c.handleOpenURL = function(t) {
											if (0 == t.toLowerCase().indexOf(Nr("BuildInfo.packageName", c).toLowerCase() + "://") && e({
													url: t
												}), "function" === typeof o) try {
												o(t)
											} catch (n) {
												console.error(n)
											}
										}, Bo || (Bo = new Vo),
										function(t) {
											var e = Bo;
											e.a.push(t), e.b || (e.b = function(t) {
												for (var n = 0; n < e.a.length; n++) e.a[n](t)
											}, "function" === typeof(t = Nr("universalLinks.subscribe", c)) && t(null, e.b))
										}(e)
								}(t)
						}))
					}))), t.f
				}

				function _c(t) {
					var e = null;
					return function(t) {
						return t.b.get(rc, t.a).then((function(t) {
							return Fo(t)
						}))
					}(t.g).then((function(n) {
						return e = n, Zs((n = t.g).b, rc, n.a)
					})).then((function() {
						return e
					}))
				}

				function Ec(t) {
					this.a = t, this.b = Ys()
				}(e = mc.prototype).ka = function() {
					return this.Ga ? this.Ga : this.Ga = (mr(void 0) ? vr().then((function() {
						return new we((function(t, e) {
							var n = c.document,
								r = setTimeout((function() {
									e(Error("Cordova framework is not ready."))
								}), 1e3);
							n.addEventListener("deviceready", (function() {
								clearTimeout(r), t()
							}), !1)
						}))
					})) : Ae(Error("Cordova must run in an Android or iOS file scheme."))).then((function() {
						if ("function" !== typeof Nr("universalLinks.subscribe", c)) throw yc("cordova-universal-links-plugin-fix is not installed");
						if ("undefined" === typeof Nr("BuildInfo.packageName", c)) throw yc("cordova-plugin-buildinfo is not installed");
						if ("function" !== typeof Nr("cordova.plugins.browsertab.openUrl", c)) throw yc("cordova-plugin-browsertab is not installed");
						if ("function" !== typeof Nr("cordova.InAppBrowser.open", c)) throw yc("cordova-plugin-inappbrowser is not installed")
					}), (function() {
						throw new k("cordova-not-ready")
					}))
				}, e.Lb = function(t, e) {
					return e(new k("operation-not-supported-in-this-environment")), Ne()
				}, e.Jb = function() {
					return Ae(new k("operation-not-supported-in-this-environment"))
				}, e.Xb = function() {
					return !1
				}, e.Ub = function() {
					return !0
				}, e.Qb = function() {
					return !0
				}, e.Kb = function(t, e, n, r) {
					if (this.c) return Ae(new k("redirect-operation-pending"));
					var i = this,
						o = c.document,
						a = null,
						u = null,
						s = null,
						l = null;
					return this.c = Ne().then((function() {
						return jo(e), wc(i)
					})).then((function() {
						return function(t, e, n, r, i) {
							var o = function() {
									for (var t = 20, e = []; 0 < t;) e.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), t--;
									return e.join("")
								}(),
								a = new Uo(e, r, null, o, new k("no-auth-event"), null, i),
								u = Nr("BuildInfo.packageName", c);
							if ("string" !== typeof u) throw new k("invalid-cordova-configuration");
							var s = Nr("BuildInfo.displayName", c),
								l = {};
							if (kr().toLowerCase().match(/iphone|ipad|ipod/)) l.ibi = u;
							else {
								if (!kr().toLowerCase().match(/android/)) return Ae(new k("operation-not-supported-in-this-environment"));
								l.apn = u
							}
							s && (l.appDisplayName = s), o = gc(o), l.sessionId = o;
							var f = ds(t.u, t.i, t.l, e, n, null, r, t.m, l, t.s, i);
							return t.ka().then((function() {
								var e = t.h;
								return t.w.a.set(rc, a.v(), e)
							})).then((function() {
								var e = Nr("cordova.plugins.browsertab.isAvailable", c);
								if ("function" !== typeof e) throw new k("invalid-cordova-configuration");
								var n = null;
								e((function(e) {
									if (e) {
										if ("function" !== typeof(n = Nr("cordova.plugins.browsertab.openUrl", c))) throw new k("invalid-cordova-configuration");
										n(f)
									} else {
										if ("function" !== typeof(n = Nr("cordova.InAppBrowser.open", c))) throw new k("invalid-cordova-configuration");
										e = kr(), t.a = n(f, e.match(/(iPad|iPhone|iPod).*OS 7_\d/i) || e.match(/(iPad|iPhone|iPod).*OS 8_\d/i) ? "_blank" : "_system", "location=yes")
									}
								}))
							}))
						}(i, t, e, n, r)
					})).then((function() {
						return new we((function(t, e) {
							u = function() {
								var e = Nr("cordova.plugins.browsertab.close", c);
								return t(), "function" === typeof e && e(), i.a && "function" === typeof i.a.close && (i.a.close(), i.a = null), !1
							}, i.Ca(u), s = function() {
								a || (a = Sn(2e3).then((function() {
									e(new k("redirect-cancelled-by-user"))
								})))
							}, l = function() {
								Vr() && s()
							}, o.addEventListener("resume", s, !1), kr().toLowerCase().match(/android/) || o.addEventListener("visibilitychange", l, !1)
						})).o((function(t) {
							return _c(i).then((function() {
								throw t
							}))
						}))
					})).ma((function() {
						s && o.removeEventListener("resume", s, !1), l && o.removeEventListener("visibilitychange", l, !1), a && a.cancel(), u && i.Qa(u), i.c = null
					}))
				}, e.Ca = function(t) {
					this.b.push(t), wc(this).o((function(e) {
						"auth/invalid-cordova-configuration" === e.code && (e = new Uo("unknown", null, null, null, new k("no-auth-event")), t(e))
					}))
				}, e.Qa = function(t) {
					Y(this.b, (function(e) {
						return e == t
					}))
				};
				var Ic = {
					name: "pendingRedirect",
					F: "session"
				};

				function Tc(t) {
					return Zs(t.b, Ic, t.a)
				}

				function Sc(t, e, n) {
					this.i = {}, this.w = 0, this.D = t, this.u = e, this.m = n, this.h = [], this.f = !1, this.l = E(this.s, this), this.b = new Fc, this.B = new Gc, this.g = new Ec(this.u + ":" + this.m), this.c = {}, this.c.unknown = this.b, this.c.signInViaRedirect = this.b, this.c.linkViaRedirect = this.b, this.c.reauthViaRedirect = this.b, this.c.signInViaPopup = this.B, this.c.linkViaPopup = this.B, this.c.reauthViaPopup = this.B, this.a = kc(this.D, this.u, this.m, A)
				}

				function kc(t, e, n, i) {
					var o = r.SDK_VERSION || null;
					return mr() ? new mc(t, e, n, o, i) : new ls(t, e, n, o, i)
				}

				function Nc(t) {
					t.f || (t.f = !0, t.a.Ca(t.l));
					var e = t.a;
					return t.a.ka().o((function(n) {
						throw t.a == e && t.reset(), n
					}))
				}

				function Ac(t) {
					t.a.Ub() && Nc(t).o((function(e) {
						var n = new Uo("unknown", null, null, null, new k("operation-not-supported-in-this-environment"));
						Rc(e) && t.s(n)
					})), t.a.Qb() || Vc(t.b)
				}

				function xc(t, e) {
					Q(t.h, e) || t.h.push(e), t.f || function(t) {
						return t.b.get(Ic, t.a).then((function(t) {
							return "pending" == t
						}))
					}(t.g).then((function(e) {
						e ? Tc(t.g).then((function() {
							Nc(t).o((function(e) {
								var n = new Uo("unknown", null, null, null, new k("operation-not-supported-in-this-environment"));
								Rc(e) && t.s(n)
							}))
						})) : Ac(t)
					})).o((function() {
						Ac(t)
					}))
				}

				function Oc(t, e) {
					Y(t.h, (function(t) {
						return t == e
					}))
				}
				Sc.prototype.reset = function() {
					this.f = !1, this.a.Qa(this.l), this.a = kc(this.D, this.u, this.m), this.i = {}
				}, Sc.prototype.s = function(t) {
					if (!t) throw new k("invalid-auth-event");
					if (6e5 <= T() - this.w && (this.i = {}, this.w = 0), t && t.getUid() && this.i.hasOwnProperty(t.getUid())) return !1;
					for (var e = !1, n = 0; n < this.h.length; n++) {
						var r = this.h[n];
						if (r.Cb(t.c, t.b)) {
							(e = this.c[t.c]) && (e.h(t, r), t && (t.f || t.b) && (this.i[t.getUid()] = !0, this.w = T())), e = !0;
							break
						}
					}
					return Vc(this.b), e
				};
				var Cc = new Fr(2e3, 1e4),
					Dc = new Fr(3e4, 6e4);

				function Pc(t, e, n, r, i, o, a) {
					return t.a.Jb(e, n, r, (function() {
						t.f || (t.f = !0, t.a.Ca(t.l))
					}), (function() {
						t.reset()
					}), i, o, a)
				}

				function Rc(t) {
					return !(!t || "auth/cordova-not-ready" != t.code)
				}

				function Lc(t, e, n, r, i) {
					var o;
					return function(t) {
						return t.b.set(Ic, "pending", t.a)
					}(t.g).then((function() {
						return t.a.Kb(e, n, r, i).o((function(e) {
							if (Rc(e)) throw new k("operation-not-supported-in-this-environment");
							return o = e, Tc(t.g).then((function() {
								throw o
							}))
						})).then((function() {
							return t.a.Xb() ? new we((function() {})) : Tc(t.g).then((function() {
								return t.pa()
							})).then((function() {})).o((function() {}))
						}))
					}))
				}

				function Mc(t, e, n, r, i) {
					return t.a.Lb(r, (function(t) {
						e.la(n, null, t, i)
					}), Cc.get())
				}
				Sc.prototype.pa = function() {
					return this.b.pa()
				};
				var jc = {};

				function Uc(t, e, n) {
					var r = e + ":" + n;
					return jc[r] || (jc[r] = new Sc(t, e, n)), jc[r]
				}

				function Fc() {
					this.b = null, this.f = [], this.c = [], this.a = null, this.i = this.g = !1
				}

				function Vc(t) {
					t.g || (t.g = !0, qc(t, !1, null, null))
				}

				function zc(t) {
					t.g && !t.i && qc(t, !1, null, null)
				}

				function Bc(t, e) {
					if (t.b = function() {
							return Ne(e)
						}, t.f.length)
						for (var n = 0; n < t.f.length; n++) t.f[n](e)
				}

				function qc(t, e, n, r) {
					e ? r ? function(t, e) {
						if (t.b = function() {
								return Ae(e)
							}, t.c.length)
							for (var n = 0; n < t.c.length; n++) t.c[n](e)
					}(t, r) : Bc(t, n) : Bc(t, {
						user: null
					}), t.f = [], t.c = []
				}

				function Gc() {}

				function Wc() {
					this.Bb = !1, Object.defineProperty(this, "appVerificationDisabled", {
						get: function() {
							return this.Bb
						},
						set: function(t) {
							this.Bb = t
						},
						enumerable: !1
					})
				}

				function Hc(t, e) {
					this.a = e, Kr(this, "verificationId", t)
				}

				function Kc(t, e, n, r) {
					return new Ro(t).cb(e, n).then((function(t) {
						return new Hc(t, r)
					}))
				}

				function Qc(t) {
					var e = Bi(t);
					if (!(e && e.exp && e.auth_time && e.iat)) throw new k("internal-error", "An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.");
					Qr(this, {
						token: t,
						expirationTime: zr(1e3 * e.exp),
						authTime: zr(1e3 * e.auth_time),
						issuedAtTime: zr(1e3 * e.iat),
						signInProvider: e.firebase && e.firebase.sign_in_provider ? e.firebase.sign_in_provider : null,
						signInSecondFactor: e.firebase && e.firebase.sign_in_second_factor ? e.firebase.sign_in_second_factor : null,
						claims: e
					})
				}

				function Xc(t, e, n) {
					var r = e && e[$c];
					if (!r) throw new k("argument-error", "Internal assert: Invalid MultiFactorResolver");
					this.a = t, this.f = vt(e), this.g = n, this.c = new ro(null, r), this.b = [];
					var i = this;
					G(e[Yc] || [], (function(t) {
						(t = Jr(t)) && i.b.push(t)
					})), Kr(this, "auth", this.a), Kr(this, "session", this.c), Kr(this, "hints", this.b)
				}
				Fc.prototype.reset = function() {
					this.b = null, this.a && (this.a.cancel(), this.a = null)
				}, Fc.prototype.h = function(t, e) {
					if (t) {
						this.reset(), this.g = !0;
						var n = t.c,
							r = t.b,
							i = t.a && "auth/web-storage-unsupported" == t.a.code,
							o = t.a && "auth/operation-not-supported-in-this-environment" == t.a.code;
						this.i = !(!i && !o), "unknown" != n || i || o ? t.a ? (qc(this, !0, null, t.a), Ne()) : e.Da(n, r) ? function(t, e, n) {
							n = n.Da(e.c, e.b);
							var r = e.g,
								i = e.f,
								o = e.i,
								a = e.S(),
								u = !!e.c.match(/Redirect$/);
							n(r, i, a, o).then((function(e) {
								qc(t, u, e, null)
							})).o((function(e) {
								qc(t, u, null, e)
							}))
						}(this, t, e) : Ae(new k("invalid-auth-event")) : (qc(this, !1, null, null), Ne())
					} else Ae(new k("invalid-auth-event"))
				}, Fc.prototype.pa = function() {
					var t = this;
					return new we((function(e, n) {
						t.b ? t.b().then(e, n) : (t.f.push(e), t.c.push(n), function(t) {
							var e = new k("timeout");
							t.a && t.a.cancel(), t.a = Sn(Dc.get()).then((function() {
								t.b || (t.g = !0, qc(t, !0, null, e))
							}))
						}(t))
					}))
				}, Gc.prototype.h = function(t, e) {
					if (t) {
						var n = t.c,
							r = t.b;
						t.a ? (e.la(t.c, null, t.a, t.b), Ne()) : e.Da(n, r) ? function(t, e) {
							var n = t.b,
								r = t.c;
							e.Da(r, n)(t.g, t.f, t.S(), t.i).then((function(t) {
								e.la(r, t, null, n)
							})).o((function(t) {
								e.la(r, null, t, n)
							}))
						}(t, e) : Ae(new k("invalid-auth-event"))
					} else Ae(new k("invalid-auth-event"))
				}, Hc.prototype.confirm = function(t) {
					return t = Lo(this.verificationId, t), this.a(t)
				};
				var Yc = "mfaInfo",
					$c = "mfaPendingCredential";

				function Jc(t, e, n, r) {
					k.call(this, "multi-factor-auth-required", r, e), this.b = new Xc(t, e, n), Kr(this, "resolver", this.b)
				}

				function Zc(t, e, n) {
					if (t && m(t.serverResponse) && "auth/multi-factor-auth-required" === t.code) try {
						return new Jc(e, t.serverResponse, n, t.message)
					} catch (r) {}
					return null
				}

				function tl() {}

				function el(t) {
					Kr(this, "factorId", t.ea), this.a = t
				}

				function nl(t) {
					if (el.call(this, t), this.a.ea != Ro.PROVIDER_ID) throw new k("argument-error", "firebase.auth.PhoneMultiFactorAssertion requires a valid firebase.auth.PhoneAuthCredential")
				}

				function rl(t, e) {
					for (var n in Xe.call(this, t), e) this[n] = e[n]
				}

				function il(t, e) {
					this.a = t, this.b = [], this.c = E(this.wc, this), sn(this.a, "userReloaded", this.c);
					var n = [];
					e && e.multiFactor && e.multiFactor.enrolledFactors && G(e.multiFactor.enrolledFactors, (function(t) {
						var e = null,
							r = {};
						if (t) {
							t.uid && (r[ei] = t.uid), t.displayName && (r[Zr] = t.displayName), t.enrollmentTime && (r[ti] = new Date(t.enrollmentTime).toISOString()), t.phoneNumber && (r[ni] = t.phoneNumber);
							try {
								e = new ri(r)
							} catch (i) {}
							t = e
						} else t = null;
						t && n.push(t)
					})), ol(this, n)
				}

				function ol(t, e) {
					t.b = e, Kr(t, "enrolledFactors", e)
				}

				function al(t, e, n) {
					if (this.h = t, this.i = e, this.g = n, this.c = 3e4, this.f = 96e4, this.b = null, this.a = this.c, this.f < this.c) throw Error("Proactive refresh lower bound greater than upper bound!")
				}

				function ul(t) {
					this.c = t, this.b = this.a = null
				}

				function sl(t) {
					return t.b && 1e3 * t.b.c || 0
				}

				function cl(t, e) {
					var n = e.refreshToken;
					t.b = zi(e[Ya] || ""), t.a = n
				}

				function ll(t, e) {
					return function(t, e) {
						return new we((function(n, r) {
							"refresh_token" == e.grant_type && e.refresh_token || "authorization_code" == e.grant_type && e.code ? ru(t, t.u + "?key=" + encodeURIComponent(t.c), (function(t) {
								t ? t.error ? r(es(t)) : t.access_token && t.refresh_token ? n(t) : r(new k("internal-error")) : r(new k("network-request-failed"))
							}), "POST", Yn(e).toString(), t.g, t.m.get()) : r(new k("internal-error"))
						}))
					}(t.c, e).then((function(e) {
						return t.b = zi(e.access_token), t.a = e.refresh_token, {
							accessToken: t.b.toString(),
							refreshToken: t.a
						}
					})).o((function(e) {
						throw "auth/user-token-expired" == e.code && (t.a = null), e
					}))
				}

				function fl(t, e) {
					this.a = t || null, this.b = e || null, Qr(this, {
						lastSignInTime: zr(e || null),
						creationTime: zr(t || null)
					})
				}

				function hl(t, e, n, r, i, o) {
					Qr(this, {
						uid: t,
						displayName: r || null,
						photoURL: i || null,
						email: n || null,
						phoneNumber: o || null,
						providerId: e
					})
				}

				function pl(t, e, n) {
					this.N = [], this.l = t.apiKey, this.m = t.appName, this.s = t.authDomain || null, t = r.SDK_VERSION ? Sr(r.SDK_VERSION) : null, this.a = new Qa(this.l, D(A), t), this.b = new ul(this.a), wl(this, e[Ya]), cl(this.b, e), Kr(this, "refreshToken", this.b.a), Il(this, n || {}), wn.call(this), this.P = !1, this.s && xr() && (this.i = Uc(this.s, this.l, this.m)), this.R = [], this.h = null, this.B = function(t) {
						return new al((function() {
							return t.I(!0)
						}), (function(t) {
							return !(!t || "auth/network-request-failed" != t.code)
						}), (function() {
							var e = sl(t.b) - T() - 3e5;
							return 0 < e ? e : 0
						}))
					}(this), this.Z = E(this.Ma, this);
					var i = this;
					this.oa = null, this.za = function(t) {
						i.va(t.g)
					}, this.aa = null, this.W = [], this.ya = function(t) {
						vl(i, t.c)
					}, this.$ = null, this.O = new il(this, n), Kr(this, "multiFactor", this.O)
				}

				function dl(t, e) {
					t.aa && fn(t.aa, "languageCodeChanged", t.za), (t.aa = e) && sn(e, "languageCodeChanged", t.za)
				}

				function vl(t, e) {
					t.W = e, nu(t.a, r.SDK_VERSION ? Sr(r.SDK_VERSION, t.W) : null)
				}

				function ml(t, e) {
					t.$ && fn(t.$, "frameworkChanged", t.ya), (t.$ = e) && sn(e, "frameworkChanged", t.ya)
				}

				function yl(t) {
					try {
						return r.app(t.m).auth()
					} catch (e) {
						throw new k("internal-error", "No firebase.auth.Auth instance is available for the Firebase App '" + t.m + "'!")
					}
				}

				function gl(t) {
					t.D || t.B.b || (t.B.start(), fn(t, "tokenChanged", t.Z), sn(t, "tokenChanged", t.Z))
				}

				function bl(t) {
					fn(t, "tokenChanged", t.Z), t.B.stop()
				}

				function wl(t, e) {
					t.xa = e, Kr(t, "_lat", e)
				}

				function _l(t) {
					for (var e = [], n = 0; n < t.R.length; n++) e.push(t.R[n](t));
					return Oe(e).then((function() {
						return t
					}))
				}

				function El(t) {
					t.i && !t.P && (t.P = !0, xc(t.i, t))
				}

				function Il(t, e) {
					Qr(t, {
						uid: e.uid,
						displayName: e.displayName || null,
						photoURL: e.photoURL || null,
						email: e.email || null,
						emailVerified: e.emailVerified || !1,
						phoneNumber: e.phoneNumber || null,
						isAnonymous: e.isAnonymous || !1,
						tenantId: e.tenantId || null,
						metadata: new fl(e.createdAt, e.lastLoginAt),
						providerData: []
					}), t.a.b = t.tenantId
				}

				function Tl() {}

				function Sl(t) {
					return Ne().then((function() {
						if (t.D) throw new k("app-deleted")
					}))
				}

				function kl(t) {
					return H(t.providerData, (function(t) {
						return t.providerId
					}))
				}

				function Nl(t, e) {
					e && (Al(t, e.providerId), t.providerData.push(e))
				}

				function Al(t, e) {
					Y(t.providerData, (function(t) {
						return t.providerId == e
					}))
				}

				function xl(t, e, n) {
					("uid" != e || n) && t.hasOwnProperty(e) && Kr(t, e, n)
				}

				function Ol(t, e) {
					t != e && (Qr(t, {
						uid: e.uid,
						displayName: e.displayName,
						photoURL: e.photoURL,
						email: e.email,
						emailVerified: e.emailVerified,
						phoneNumber: e.phoneNumber,
						isAnonymous: e.isAnonymous,
						tenantId: e.tenantId,
						providerData: []
					}), e.metadata ? Kr(t, "metadata", function(t) {
						return new fl(t.a, t.b)
					}(e.metadata)) : Kr(t, "metadata", new fl), G(e.providerData, (function(e) {
						Nl(t, e)
					})), function(t, e) {
						t.b = e.b, t.a = e.a
					}(t.b, e.b), Kr(t, "refreshToken", t.b.a), ol(t.O, e.O.b))
				}

				function Cl(t) {
					return t.I().then((function(e) {
						var n = t.isAnonymous;
						return function(t, e) {
							return Zu(t.a, Ou, {
								idToken: e
							}).then(E(t.Ic, t))
						}(t, e).then((function() {
							return n || xl(t, "isAnonymous", !1), e
						}))
					}))
				}

				function Dl(t, e) {
					e[Ya] && t.xa != e[Ya] && (cl(t.b, e), t.dispatchEvent(new rl("tokenChanged")), wl(t, e[Ya]), xl(t, "refreshToken", t.b.a))
				}

				function Pl(t, e) {
					return Cl(t).then((function() {
						if (Q(kl(t), e)) return _l(t).then((function() {
							throw new k("provider-already-linked")
						}))
					}))
				}

				function Rl(t, e, n) {
					return Xr({
						user: t,
						credential: Mo(e),
						additionalUserInfo: e = Ki(e),
						operationType: n
					})
				}

				function Ll(t, e) {
					return Dl(t, e), t.reload().then((function() {
						return t
					}))
				}

				function Ml(t, e, n, i, o) {
					if (!xr()) return Ae(new k("operation-not-supported-in-this-environment"));
					if (t.h && !o) return Ae(t.h);
					var a = Hi(n.providerId),
						u = Mr(t.uid + ":::"),
						s = null;
					(!Dr() || yr()) && t.s && n.isOAuthProvider && (s = ds(t.s, t.l, t.m, e, n, null, u, r.SDK_VERSION || null, null, null, t.tenantId));
					var c = hr(s, a && a.ta, a && a.sa);
					return i = i().then((function() {
						if (Ul(t), !o) return t.I().then((function() {}))
					})).then((function() {
						return Pc(t.i, c, e, n, u, !!s, t.tenantId)
					})).then((function() {
						return new we((function(n, r) {
							t.la(e, null, new k("cancelled-popup-request"), t.g || null), t.f = n, t.w = r, t.g = u, t.c = Mc(t.i, t, e, c, u)
						}))
					})).then((function(t) {
						return c && fr(c), t ? Xr(t) : null
					})).o((function(t) {
						throw c && fr(c), t
					})), Fl(t, i, o)
				}

				function jl(t, e, n, r, i) {
					if (!xr()) return Ae(new k("operation-not-supported-in-this-environment"));
					if (t.h && !i) return Ae(t.h);
					var o = null,
						a = Mr(t.uid + ":::");
					return r = r().then((function() {
						if (Ul(t), !i) return t.I().then((function() {}))
					})).then((function() {
						return t.fa = a, _l(t)
					})).then((function(e) {
						return t.ga && (e = (e = t.ga).b.set(Bl, t.v(), e.a)), e
					})).then((function() {
						return Lc(t.i, e, n, a, t.tenantId)
					})).o((function(e) {
						if (o = e, t.ga) return ql(t.ga);
						throw o
					})).then((function() {
						if (o) throw o
					})), Fl(t, r, i)
				}

				function Ul(t) {
					if (!t.i || !t.P) {
						if (t.i && !t.P) throw new k("internal-error");
						throw new k("auth-domain-config-required")
					}
				}

				function Fl(t, e, n) {
					var r = function(t, e, n) {
						return t.h && !n ? (e.cancel(), Ae(t.h)) : e.o((function(e) {
							throw !e || "auth/user-disabled" != e.code && "auth/user-token-expired" != e.code || (t.h || t.dispatchEvent(new rl("userInvalidated")), t.h = e), e
						}))
					}(t, e, n);
					return t.N.push(r), r.ma((function() {
						X(t.N, r)
					})), r.o((function(e) {
						var n = null;
						throw e && "auth/multi-factor-auth-required" === e.code && (n = Zc(e.v(), yl(t), E(t.hc, t))), n || e
					}))
				}

				function Vl(t) {
					if (!t.apiKey) return null;
					var e = {
							apiKey: t.apiKey,
							authDomain: t.authDomain,
							appName: t.appName
						},
						n = {};
					if (!t.stsTokenManager || !t.stsTokenManager.accessToken) return null;
					n[Ya] = t.stsTokenManager.accessToken, n.refreshToken = t.stsTokenManager.refreshToken || null;
					var r = new pl(e, n, t);
					return t.providerData && G(t.providerData, (function(t) {
						t && Nl(r, Xr(t))
					})), t.redirectEventId && (r.fa = t.redirectEventId), r
				}

				function zl(t) {
					this.a = t, this.b = Ys()
				}
				Xc.prototype.Pc = function(t) {
					var e = this;
					return t.ob(this.a.b, this.c).then((function(t) {
						var n = vt(e.f);
						return delete n[Yc], delete n[$c], yt(n, t), e.g(n)
					}))
				}, S(Jc, k), tl.prototype.ob = function(t, e, n) {
					return e.type == io ? function(t, e, n, r) {
						return n.Fa().then((function(n) {
							return n = {
								idToken: n
							}, "undefined" !== typeof r && (n.displayName = r), yt(n, {
								phoneVerificationInfo: Po(t.a)
							}), Zu(e, Au, n)
						}))
					}(this, t, e, n) : function(t, e, n) {
						return n.Fa().then((function(n) {
							return yt(n = {
								mfaPendingCredential: n
							}, {
								phoneVerificationInfo: Po(t.a)
							}), Zu(e, xu, n)
						}))
					}(this, t, e)
				}, S(el, tl), S(nl, el), S(rl, Xe), (e = il.prototype).wc = function(t) {
					ol(this, function(t) {
						var e = [];
						return G(t.mfaInfo || [], (function(t) {
							(t = Jr(t)) && e.push(t)
						})), e
					}(t.ed))
				}, e.Ob = function() {
					return this.a.I().then((function(t) {
						return new ro(t, null)
					}))
				}, e.dc = function(t, e) {
					var n = this,
						r = this.a.a;
					return this.Ob().then((function(n) {
						return t.ob(r, n, e)
					})).then((function(t) {
						return Dl(n.a, t), n.a.reload()
					}))
				}, e.$c = function(t) {
					var e = this,
						n = "string" === typeof t ? t : t.uid,
						r = this.a.a;
					return this.a.I().then((function(t) {
						return Zu(r, Ju, {
							idToken: t,
							mfaEnrollmentId: n
						})
					})).then((function(t) {
						var r = W(e.b, (function(t) {
							return t.uid != n
						}));
						return ol(e, r), Dl(e.a, t), e.a.reload().o((function(t) {
							if ("auth/user-token-expired" != t.code) throw t
						}))
					}))
				}, e.v = function() {
					return {
						multiFactor: {
							enrolledFactors: H(this.b, (function(t) {
								return t.v()
							}))
						}
					}
				}, al.prototype.start = function() {
					this.a = this.c,
						function t(e, n) {
							e.stop(), e.b = Sn(function(t, e) {
								return e ? (t.a = t.c, t.g()) : (e = t.a, t.a *= 2, t.a > t.f && (t.a = t.f), e)
							}(e, n)).then((function() {
								return function() {
									var t = c.document,
										e = null;
									return Vr() || !t ? Ne() : new we((function(n) {
										e = function() {
											Vr() && (t.removeEventListener("visibilitychange", e, !1), n())
										}, t.addEventListener("visibilitychange", e, !1)
									})).o((function(n) {
										throw t.removeEventListener("visibilitychange", e, !1), n
									}))
								}()
							})).then((function() {
								return e.h()
							})).then((function() {
								t(e, !0)
							})).o((function(n) {
								e.i(n) && t(e, !1)
							}))
						}(this, !0)
				}, al.prototype.stop = function() {
					this.b && (this.b.cancel(), this.b = null)
				}, ul.prototype.v = function() {
					return {
						apiKey: this.c.c,
						refreshToken: this.a,
						accessToken: this.b && this.b.toString(),
						expirationTime: sl(this)
					}
				}, ul.prototype.getToken = function(t) {
					return t = !!t, this.b && !this.a ? Ae(new k("user-token-expired")) : t || !this.b || T() > sl(this) - 3e4 ? this.a ? ll(this, {
						grant_type: "refresh_token",
						refresh_token: this.a
					}) : Ne(null) : Ne({
						accessToken: this.b.toString(),
						refreshToken: this.a
					})
				}, fl.prototype.v = function() {
					return {
						lastLoginAt: this.b,
						createdAt: this.a
					}
				}, S(pl, wn), pl.prototype.va = function(t) {
					this.oa = t, eu(this.a, t)
				}, pl.prototype.ja = function() {
					return this.oa
				}, pl.prototype.Ea = function() {
					return J(this.W)
				}, pl.prototype.Ma = function() {
					this.B.b && (this.B.stop(), this.B.start())
				}, Kr(pl.prototype, "providerId", "firebase"), (e = pl.prototype).reload = function() {
					var t = this;
					return Fl(this, Sl(this).then((function() {
						return Cl(t).then((function() {
							return _l(t)
						})).then(Tl)
					})))
				}, e.mc = function(t) {
					return this.I(t).then((function(t) {
						return new Qc(t)
					}))
				}, e.I = function(t) {
					var e = this;
					return Fl(this, Sl(this).then((function() {
						return e.b.getToken(t)
					})).then((function(t) {
						if (!t) throw new k("internal-error");
						return t.accessToken != e.xa && (wl(e, t.accessToken), e.dispatchEvent(new rl("tokenChanged"))), xl(e, "refreshToken", t.refreshToken), t.accessToken
					})))
				}, e.Ic = function(t) {
					if (!(t = t.users) || !t.length) throw new k("internal-error");
					Il(this, {
						uid: (t = t[0]).localId,
						displayName: t.displayName,
						photoURL: t.photoUrl,
						email: t.email,
						emailVerified: !!t.emailVerified,
						phoneNumber: t.phoneNumber,
						lastLoginAt: t.lastLoginAt,
						createdAt: t.createdAt,
						tenantId: t.tenantId
					});
					for (var e = function(t) {
							return (t = t.providerUserInfo) && t.length ? H(t, (function(t) {
								return new hl(t.rawId, t.providerId, t.email, t.displayName, t.photoUrl, t.phoneNumber)
							})) : []
						}(t), n = 0; n < e.length; n++) Nl(this, e[n]);
					xl(this, "isAnonymous", !(this.email && t.passwordHash) && !(this.providerData && this.providerData.length)), this.dispatchEvent(new rl("userReloaded", {
						ed: t
					}))
				}, e.Jc = function(t) {
					return Wr("firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead."), this.pb(t)
				}, e.pb = function(t) {
					var e = this,
						n = null;
					return Fl(this, t.c(this.a, this.uid).then((function(t) {
						return Dl(e, t), n = Rl(e, t, "reauthenticate"), e.h = null, e.reload()
					})).then((function() {
						return n
					})), !0)
				}, e.Ac = function(t) {
					return Wr("firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead."), this.mb(t)
				}, e.mb = function(t) {
					var e = this,
						n = null;
					return Fl(this, Pl(this, t.providerId).then((function() {
						return e.I()
					})).then((function(n) {
						return t.b(e.a, n)
					})).then((function(t) {
						return n = Rl(e, t, "link"), Ll(e, t)
					})).then((function() {
						return n
					})))
				}, e.Bc = function(t, e) {
					var n = this;
					return Fl(this, Pl(this, "phone").then((function() {
						return Kc(yl(n), t, e, E(n.mb, n))
					})))
				}, e.Kc = function(t, e) {
					var n = this;
					return Fl(this, Ne().then((function() {
						return Kc(yl(n), t, e, E(n.pb, n))
					})), !0)
				}, e.xb = function(t) {
					var e = this;
					return Fl(this, this.I().then((function(n) {
						return e.a.xb(n, t)
					})).then((function(t) {
						return Dl(e, t), e.reload()
					})))
				}, e.cd = function(t) {
					var e = this;
					return Fl(this, this.I().then((function(n) {
						return t.b(e.a, n)
					})).then((function(t) {
						return Dl(e, t), e.reload()
					})))
				}, e.yb = function(t) {
					var e = this;
					return Fl(this, this.I().then((function(n) {
						return e.a.yb(n, t)
					})).then((function(t) {
						return Dl(e, t), e.reload()
					})))
				}, e.zb = function(t) {
					if (void 0 === t.displayName && void 0 === t.photoURL) return Sl(this);
					var e = this;
					return Fl(this, this.I().then((function(n) {
						return e.a.zb(n, {
							displayName: t.displayName,
							photoUrl: t.photoURL
						})
					})).then((function(t) {
						return Dl(e, t), xl(e, "displayName", t.displayName || null), xl(e, "photoURL", t.photoUrl || null), G(e.providerData, (function(t) {
							"password" === t.providerId && (Kr(t, "displayName", e.displayName), Kr(t, "photoURL", e.photoURL))
						})), _l(e)
					})).then(Tl))
				}, e.ad = function(t) {
					var e = this;
					return Fl(this, Cl(this).then((function(n) {
						return Q(kl(e), t) ? function(t, e, n) {
							return Zu(t, Su, {
								idToken: e,
								deleteProvider: n
							})
						}(e.a, n, [t]).then((function(t) {
							var n = {};
							return G(t.providerUserInfo || [], (function(t) {
								n[t.providerId] = !0
							})), G(kl(e), (function(t) {
								n[t] || Al(e, t)
							})), n[Ro.PROVIDER_ID] || Kr(e, "phoneNumber", null), _l(e)
						})) : _l(e).then((function() {
							throw new k("no-such-provider")
						}))
					})))
				}, e.delete = function() {
					var t = this;
					return Fl(this, this.I().then((function(e) {
						return Zu(t.a, Tu, {
							idToken: e
						})
					})).then((function() {
						t.dispatchEvent(new rl("userDeleted"))
					}))).then((function() {
						for (var e = 0; e < t.N.length; e++) t.N[e].cancel("app-deleted");
						dl(t, null), ml(t, null), t.N = [], t.D = !0, bl(t), Kr(t, "refreshToken", null), t.i && Oc(t.i, t)
					}))
				}, e.Cb = function(t, e) {
					return !!("linkViaPopup" == t && (this.g || null) == e && this.f || "reauthViaPopup" == t && (this.g || null) == e && this.f || "linkViaRedirect" == t && (this.fa || null) == e || "reauthViaRedirect" == t && (this.fa || null) == e)
				}, e.la = function(t, e, n, r) {
					"linkViaPopup" != t && "reauthViaPopup" != t || r != (this.g || null) || (n && this.w ? this.w(n) : e && !n && this.f && this.f(e), this.c && (this.c.cancel(), this.c = null), delete this.f, delete this.w)
				}, e.Da = function(t, e) {
					return "linkViaPopup" == t && e == (this.g || null) ? E(this.Hb, this) : "reauthViaPopup" == t && e == (this.g || null) ? E(this.Ib, this) : "linkViaRedirect" == t && (this.fa || null) == e ? E(this.Hb, this) : "reauthViaRedirect" == t && (this.fa || null) == e ? E(this.Ib, this) : null
				}, e.Cc = function(t) {
					var e = this;
					return Ml(this, "linkViaPopup", t, (function() {
						return Pl(e, t.providerId).then((function() {
							return _l(e)
						}))
					}), !1)
				}, e.Lc = function(t) {
					return Ml(this, "reauthViaPopup", t, (function() {
						return Ne()
					}), !0)
				}, e.Dc = function(t) {
					var e = this;
					return jl(this, "linkViaRedirect", t, (function() {
						return Pl(e, t.providerId)
					}), !1)
				}, e.Mc = function(t) {
					return jl(this, "reauthViaRedirect", t, (function() {
						return Ne()
					}), !0)
				}, e.Hb = function(t, e, n, r) {
					var i = this;
					this.c && (this.c.cancel(), this.c = null);
					var o = null;
					return Fl(this, this.I().then((function(n) {
						return yu(i.a, {
							requestUri: t,
							postBody: r,
							sessionId: e,
							idToken: n
						})
					})).then((function(t) {
						return o = Rl(i, t, "link"), Ll(i, t)
					})).then((function() {
						return o
					})))
				}, e.Ib = function(t, e, n, r) {
					var i = this;
					this.c && (this.c.cancel(), this.c = null);
					var o = null;
					return Fl(this, Ne().then((function() {
						return uo(gu(i.a, {
							requestUri: t,
							sessionId: e,
							postBody: r,
							tenantId: n
						}), i.uid)
					})).then((function(t) {
						return o = Rl(i, t, "reauthenticate"), Dl(i, t), i.h = null, i.reload()
					})).then((function() {
						return o
					})), !0)
				}, e.qb = function(t) {
					var e = this,
						n = null;
					return Fl(this, this.I().then((function(e) {
						return n = e, "undefined" === typeof t || dt(t) ? {} : ji(new Ni(t))
					})).then((function(t) {
						return e.a.qb(n, t)
					})).then((function(t) {
						if (e.email != t) return e.reload()
					})).then((function() {})))
				}, e.Ab = function(t, e) {
					var n = this,
						r = null;
					return Fl(this, this.I().then((function(t) {
						return r = t, "undefined" === typeof e || dt(e) ? {} : ji(new Ni(e))
					})).then((function(e) {
						return n.a.Ab(r, t, e)
					})).then((function(t) {
						if (n.email != t) return n.reload()
					})).then((function() {})))
				}, e.hc = function(t) {
					var e = null,
						n = this;
					return Fl(this, t = uo(Ne(t), n.uid).then((function(t) {
						return e = Rl(n, t, "reauthenticate"), Dl(n, t), n.h = null, n.reload()
					})).then((function() {
						return e
					})), !0)
				}, e.toJSON = function() {
					return this.v()
				}, e.v = function() {
					var t = {
						uid: this.uid,
						displayName: this.displayName,
						photoURL: this.photoURL,
						email: this.email,
						emailVerified: this.emailVerified,
						phoneNumber: this.phoneNumber,
						isAnonymous: this.isAnonymous,
						tenantId: this.tenantId,
						providerData: [],
						apiKey: this.l,
						appName: this.m,
						authDomain: this.s,
						stsTokenManager: this.b.v(),
						redirectEventId: this.fa || null
					};
					return this.metadata && yt(t, this.metadata.v()), G(this.providerData, (function(e) {
						t.providerData.push(function(t) {
							var e, n = {};
							for (e in t) t.hasOwnProperty(e) && (n[e] = t[e]);
							return n
						}(e))
					})), yt(t, this.O.v()), t
				};
				var Bl = {
					name: "redirectUser",
					F: "session"
				};

				function ql(t) {
					return Zs(t.b, Bl, t.a)
				}

				function Gl(t) {
					this.a = t, this.b = Ys(), this.c = null, this.f = function(t) {
						var e = Kl("local"),
							n = Kl("session"),
							r = Kl("none");
						return function(t, e, n) {
							var r = Js(e, n),
								i = $s(t, e.F);
							return t.get(e, n).then((function(o) {
								var a = null;
								try {
									a = Lr(c.localStorage.getItem(r))
								} catch (u) {}
								if (a && !o) return c.localStorage.removeItem(r), t.set(e, a, n);
								a && o && "localStorage" != i.type && c.localStorage.removeItem(r)
							}))
						}(t.b, e, t.a).then((function() {
							return t.b.get(n, t.a)
						})).then((function(i) {
							return i ? n : t.b.get(r, t.a).then((function(n) {
								return n ? r : t.b.get(e, t.a).then((function(n) {
									return n ? e : t.b.get(Hl, t.a).then((function(t) {
										return t ? Kl(t) : e
									}))
								}))
							}))
						})).then((function(e) {
							return t.c = e, Wl(t, e.F)
						})).o((function() {
							t.c || (t.c = e)
						}))
					}(this), this.b.addListener(Kl("local"), this.a, E(this.g, this))
				}

				function Wl(t, e) {
					var n, r = [];
					for (n in Qs) Qs[n] !== e && r.push(Zs(t.b, Kl(Qs[n]), t.a));
					return r.push(Zs(t.b, Hl, t.a)),
						function(t) {
							return new we((function(e, n) {
								var r = t.length,
									i = [];
								if (r)
									for (var o = function(t, n) {
											r--, i[t] = n, 0 == r && e(i)
										}, a = function(t) {
											n(t)
										}, u = 0; u < t.length; u++) xe(t[u], I(o, u), a);
								else e(i)
							}))
						}(r)
				}
				Gl.prototype.g = function() {
					var t = this,
						e = Kl("local");
					$l(this, (function() {
						return Ne().then((function() {
							return t.c && "local" != t.c.F ? t.b.get(e, t.a) : null
						})).then((function(n) {
							if (n) return Wl(t, "local").then((function() {
								t.c = e
							}))
						}))
					}))
				};
				var Hl = {
					name: "persistence",
					F: "session"
				};

				function Kl(t) {
					return {
						name: "authUser",
						F: t
					}
				}

				function Ql(t, e) {
					return $l(t, (function() {
						return t.b.set(t.c, e.v(), t.a)
					}))
				}

				function Xl(t) {
					return $l(t, (function() {
						return Zs(t.b, t.c, t.a)
					}))
				}

				function Yl(t, e) {
					return $l(t, (function() {
						return t.b.get(t.c, t.a).then((function(t) {
							return t && e && (t.authDomain = e), Vl(t || {})
						}))
					}))
				}

				function $l(t, e) {
					return t.f = t.f.then(e, e), t.f
				}

				function Jl(t) {
					if (this.l = !1, Kr(this, "settings", new Wc), Kr(this, "app", t), !uf(this).options || !uf(this).options.apiKey) throw new k("invalid-api-key");
					t = r.SDK_VERSION ? Sr(r.SDK_VERSION) : null, this.b = new Qa(uf(this).options && uf(this).options.apiKey, D(A), t), this.P = [], this.m = [], this.O = [], this.$b = r.INTERNAL.createSubscribe(E(this.xc, this)), this.W = void 0, this.ac = r.INTERNAL.createSubscribe(E(this.yc, this)), of(this, null), this.i = new Gl(uf(this).options.apiKey + ":" + uf(this).name), this.B = new zl(uf(this).options.apiKey + ":" + uf(this).name), this.Z = ff(this, function(t) {
							var e = uf(t).options.authDomain,
								n = function(t) {
									var e = function(t, e) {
										return t.b.get(Bl, t.a).then((function(t) {
											return t && e && (t.authDomain = e), Vl(t || {})
										}))
									}(t.B, uf(t).options.authDomain).then((function(e) {
										return (t.D = e) && (e.ga = t.B), ql(t.B)
									}));
									return ff(t, e)
								}(t).then((function() {
									return Yl(t.i, e)
								})).then((function(e) {
									return e ? (e.ga = t.B, t.D && (t.D.fa || null) == (e.fa || null) ? e : e.reload().then((function() {
										return Ql(t.i, e).then((function() {
											return e
										}))
									})).o((function(n) {
										return "auth/network-request-failed" == n.code ? e : Xl(t.i)
									}))) : null
								})).then((function(e) {
									of(t, e || null)
								}));
							return ff(t, n)
						}(this)), this.h = ff(this, function(t) {
							return t.Z.then((function() {
								return nf(t)
							})).o((function() {})).then((function() {
								if (!t.l) return t.oa()
							})).o((function() {})).then((function() {
								if (!t.l) {
									t.aa = !0;
									var e = t.i;
									e.b.addListener(Kl("local"), e.a, t.oa)
								}
							}))
						}(this)), this.aa = !1, this.oa = E(this.Xc, this), this.Ma = E(this.ca, this), this.xa = E(this.jc, this), this.ya = E(this.uc, this), this.za = E(this.vc, this), this.a = null,
						function(t) {
							var e = uf(t).options.authDomain,
								n = uf(t).options.apiKey;
							e && xr() && (t.Zb = t.Z.then((function() {
								if (!t.l) {
									if (t.a = Uc(e, n, uf(t).name), xc(t.a, t), sf(t) && El(sf(t)), t.D) {
										El(t.D);
										var r = t.D;
										r.va(t.ja()), dl(r, t), vl(r = t.D, t.N), ml(r, t), t.D = null
									}
									return t.a
								}
							})))
						}(this), this.INTERNAL = {}, this.INTERNAL.delete = E(this.delete, this), this.INTERNAL.logFramework = E(this.Ec, this), this.s = 0, wn.call(this),
						function(t) {
							Object.defineProperty(t, "lc", {
								get: function() {
									return this.ja()
								},
								set: function(t) {
									this.va(t)
								},
								enumerable: !1
							}), t.$ = null, Object.defineProperty(t, "ti", {
								get: function() {
									return this.S()
								},
								set: function(t) {
									this.ub(t)
								},
								enumerable: !1
							}), t.R = null
						}(this), this.N = []
				}

				function Zl(t) {
					Xe.call(this, "languageCodeChanged"), this.g = t
				}

				function tf(t) {
					Xe.call(this, "frameworkChanged"), this.c = t
				}

				function ef(t) {
					return t.Zb || Ae(new k("auth-domain-config-required"))
				}

				function nf(t) {
					if (!xr()) return Ae(new k("operation-not-supported-in-this-environment"));
					var e = ef(t).then((function() {
						return t.a.pa()
					})).then((function(t) {
						return t ? Xr(t) : null
					}));
					return ff(t, e)
				}

				function rf(t, e) {
					var n = {};
					return n.apiKey = uf(t).options.apiKey, n.authDomain = uf(t).options.authDomain, n.appName = uf(t).name, t.Z.then((function() {
						return function(t, e, n, r) {
							var i = new pl(t, e);
							return n && (i.ga = n), r && vl(i, r), i.reload().then((function() {
								return i
							}))
						}(n, e, t.B, t.Ea())
					})).then((function(e) {
						return sf(t) && e.uid == sf(t).uid ? (Ol(sf(t), e), t.ca(e)) : (of(t, e), El(e), t.ca(e))
					})).then((function() {
						lf(t)
					}))
				}

				function of(t, e) {
					sf(t) && (function(t, e) {
						Y(t.R, (function(t) {
							return t == e
						}))
					}(sf(t), t.Ma), fn(sf(t), "tokenChanged", t.xa), fn(sf(t), "userDeleted", t.ya), fn(sf(t), "userInvalidated", t.za), bl(sf(t))), e && (e.R.push(t.Ma), sn(e, "tokenChanged", t.xa), sn(e, "userDeleted", t.ya), sn(e, "userInvalidated", t.za), 0 < t.s && gl(e)), Kr(t, "currentUser", e), e && (e.va(t.ja()), dl(e, t), vl(e, t.N), ml(e, t))
				}

				function af(t, e) {
					var n = null,
						r = null;
					return ff(t, e.then((function(e) {
						return n = Mo(e), r = Ki(e), rf(t, e)
					}), (function(e) {
						var n = null;
						throw e && "auth/multi-factor-auth-required" === e.code && (n = Zc(e.v(), t, E(t.ic, t))), n || e
					})).then((function() {
						return Xr({
							user: sf(t),
							credential: n,
							additionalUserInfo: r,
							operationType: "signIn"
						})
					})))
				}

				function uf(t) {
					return t.app
				}

				function sf(t) {
					return t.currentUser
				}

				function cf(t) {
					return sf(t) && sf(t)._lat || null
				}

				function lf(t) {
					if (t.aa) {
						for (var e = 0; e < t.m.length; e++) t.m[e] && t.m[e](cf(t));
						if (t.W !== t.getUid() && t.O.length)
							for (t.W = t.getUid(), e = 0; e < t.O.length; e++) t.O[e] && t.O[e](cf(t))
					}
				}

				function ff(t, e) {
					return t.P.push(e), e.ma((function() {
						X(t.P, e)
					})), e
				}

				function hf() {}

				function pf() {
					this.a = {}, this.b = 1e12
				}
				Gl.prototype.tb = function(t) {
					var e = null,
						n = this;
					return function(t) {
						var e = new k("invalid-persistence-type"),
							n = new k("unsupported-persistence-type");
						t: {
							for (r in Qs)
								if (Qs[r] == t) {
									var r = !0;
									break t
								} r = !1
						}
						if (!r || "string" !== typeof t) throw e;
						switch (br()) {
							case "ReactNative":
								if ("session" === t) throw n;
								break;
							case "Node":
								if ("none" !== t) throw n;
								break;
							case "Worker":
								if ("session" === t || !Ns() && "none" !== t) throw n;
								break;
							default:
								if (!Ar() && "none" !== t) throw n
						}
					}(t), $l(this, (function() {
						return t != n.c.F ? n.b.get(n.c, n.a).then((function(r) {
							return e = r, Wl(n, t)
						})).then((function() {
							if (n.c = Kl(t), e) return n.b.set(n.c, e, n.a)
						})) : Ne()
					}))
				}, S(Jl, wn), S(Zl, Xe), S(tf, Xe), (e = Jl.prototype).tb = function(t) {
					return ff(this, t = this.i.tb(t))
				}, e.va = function(t) {
					this.$ === t || this.l || (this.$ = t, eu(this.b, this.$), this.dispatchEvent(new Zl(this.ja())))
				}, e.ja = function() {
					return this.$
				}, e.dd = function() {
					var t = c.navigator;
					this.va(t && (t.languages && t.languages[0] || t.language || t.userLanguage) || null)
				}, e.Ec = function(t) {
					this.N.push(t), nu(this.b, r.SDK_VERSION ? Sr(r.SDK_VERSION, this.N) : null), this.dispatchEvent(new tf(this.N))
				}, e.Ea = function() {
					return J(this.N)
				}, e.ub = function(t) {
					this.R === t || this.l || (this.R = t, this.b.b = this.R)
				}, e.S = function() {
					return this.R
				}, e.toJSON = function() {
					return {
						apiKey: uf(this).options.apiKey,
						authDomain: uf(this).options.authDomain,
						appName: uf(this).name,
						currentUser: sf(this) && sf(this).v()
					}
				}, e.Cb = function(t, e) {
					switch (t) {
						case "unknown":
						case "signInViaRedirect":
							return !0;
						case "signInViaPopup":
							return this.g == e && !!this.f;
						default:
							return !1
					}
				}, e.la = function(t, e, n, r) {
					"signInViaPopup" == t && this.g == r && (n && this.w ? this.w(n) : e && !n && this.f && this.f(e), this.c && (this.c.cancel(), this.c = null), delete this.f, delete this.w)
				}, e.Da = function(t, e) {
					return "signInViaRedirect" == t || "signInViaPopup" == t && this.g == e && this.f ? E(this.gc, this) : null
				}, e.gc = function(t, e, n, r) {
					var i = this,
						o = {
							requestUri: t,
							postBody: r,
							sessionId: e,
							tenantId: n
						};
					return this.c && (this.c.cancel(), this.c = null), i.Z.then((function() {
						return af(i, mu(i.b, o))
					}))
				}, e.Vc = function(t) {
					if (!xr()) return Ae(new k("operation-not-supported-in-this-environment"));
					var e = this,
						n = Hi(t.providerId),
						i = Mr(),
						o = null;
					(!Dr() || yr()) && uf(this).options.authDomain && t.isOAuthProvider && (o = ds(uf(this).options.authDomain, uf(this).options.apiKey, uf(this).name, "signInViaPopup", t, null, i, r.SDK_VERSION || null, null, null, this.S()));
					var a = hr(o, n && n.ta, n && n.sa);
					return ff(this, n = ef(this).then((function(n) {
						return Pc(n, a, "signInViaPopup", t, i, !!o, e.S())
					})).then((function() {
						return new we((function(t, n) {
							e.la("signInViaPopup", null, new k("cancelled-popup-request"), e.g), e.f = t, e.w = n, e.g = i, e.c = Mc(e.a, e, "signInViaPopup", a, i)
						}))
					})).then((function(t) {
						return a && fr(a), t ? Xr(t) : null
					})).o((function(t) {
						throw a && fr(a), t
					})))
				}, e.Wc = function(t) {
					if (!xr()) return Ae(new k("operation-not-supported-in-this-environment"));
					var e = this;
					return ff(this, ef(this).then((function() {
						return function(t) {
							return $l(t, (function() {
								return t.b.set(Hl, t.c.F, t.a)
							}))
						}(e.i)
					})).then((function() {
						return Lc(e.a, "signInViaRedirect", t, void 0, e.S())
					})))
				}, e.pa = function() {
					var t = this;
					return nf(this).then((function(e) {
						return t.a && zc(t.a.b), e
					})).o((function(e) {
						throw t.a && zc(t.a.b), e
					}))
				}, e.bd = function(t) {
					if (!t) return Ae(new k("null-user"));
					if (this.R != t.tenantId) return Ae(new k("tenant-id-mismatch"));
					var e = this,
						n = {};
					n.apiKey = uf(this).options.apiKey, n.authDomain = uf(this).options.authDomain, n.appName = uf(this).name;
					var r = function(t, e, n, r) {
						var i = t.b,
							o = {};
						return o[Ya] = i.b && i.b.toString(), o.refreshToken = i.a, e = new pl(e || {
							apiKey: t.l,
							authDomain: t.s,
							appName: t.m
						}, o), n && (e.ga = n), r && vl(e, r), Ol(e, t), e
					}(t, n, e.B, e.Ea());
					return ff(this, this.h.then((function() {
						if (uf(e).options.apiKey != t.l) return r.reload()
					})).then((function() {
						return sf(e) && t.uid == sf(e).uid ? (Ol(sf(e), t), e.ca(t)) : (of(e, r), El(r), e.ca(r))
					})).then((function() {
						lf(e)
					})))
				}, e.wb = function() {
					var t = this;
					return ff(this, this.h.then((function() {
						return t.a && zc(t.a.b), sf(t) ? (of(t, null), Xl(t.i).then((function() {
							lf(t)
						}))) : Ne()
					})))
				}, e.Xc = function() {
					var t = this;
					return Yl(this.i, uf(this).options.authDomain).then((function(e) {
						if (!t.l) {
							var n;
							if (n = sf(t) && e) {
								n = sf(t).uid;
								var r = e.uid;
								n = void 0 !== n && null !== n && "" !== n && void 0 !== r && null !== r && "" !== r && n == r
							}
							if (n) return Ol(sf(t), e), sf(t).I();
							(sf(t) || e) && (of(t, e), e && (El(e), e.ga = t.B), t.a && xc(t.a, t), lf(t))
						}
					}))
				}, e.ca = function(t) {
					return Ql(this.i, t)
				}, e.jc = function() {
					lf(this), this.ca(sf(this))
				}, e.uc = function() {
					this.wb()
				}, e.vc = function() {
					this.wb()
				}, e.ic = function(t) {
					var e = this;
					return this.h.then((function() {
						return af(e, Ne(t))
					}))
				}, e.xc = function(t) {
					var e = this;
					this.addAuthTokenListener((function() {
						t.next(sf(e))
					}))
				}, e.yc = function(t) {
					var e = this;
					! function(t, e) {
						t.O.push(e), ff(t, t.h.then((function() {
							!t.l && Q(t.O, e) && t.W !== t.getUid() && (t.W = t.getUid(), e(cf(t)))
						})))
					}(this, (function() {
						t.next(sf(e))
					}))
				}, e.Gc = function(t, e, n) {
					var r = this;
					return this.aa && Promise.resolve().then((function() {
						"function" === typeof t ? t(sf(r)) : "function" === typeof t.next && t.next(sf(r))
					})), this.$b(t, e, n)
				}, e.Fc = function(t, e, n) {
					var r = this;
					return this.aa && Promise.resolve().then((function() {
						r.W = r.getUid(), "function" === typeof t ? t(sf(r)) : "function" === typeof t.next && t.next(sf(r))
					})), this.ac(t, e, n)
				}, e.kc = function(t) {
					var e = this;
					return ff(this, this.h.then((function() {
						return sf(e) ? sf(e).I(t).then((function(t) {
							return {
								accessToken: t
							}
						})) : null
					})))
				}, e.Rc = function(t) {
					var e = this;
					return this.h.then((function() {
						return af(e, Zu(e.b, Ku, {
							token: t
						}))
					})).then((function(t) {
						var n = t.user;
						return xl(n, "isAnonymous", !1), e.ca(n), t
					}))
				}, e.Sc = function(t, e) {
					var n = this;
					return this.h.then((function() {
						return af(n, Zu(n.b, Qu, {
							email: t,
							password: e
						}))
					}))
				}, e.cc = function(t, e) {
					var n = this;
					return this.h.then((function() {
						return af(n, Zu(n.b, Eu, {
							email: t,
							password: e
						}))
					}))
				}, e.Ya = function(t) {
					var e = this;
					return this.h.then((function() {
						return af(e, t.ia(e.b))
					}))
				}, e.Qc = function(t) {
					return Wr("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead."), this.Ya(t)
				}, e.vb = function() {
					var t = this;
					return this.h.then((function() {
						var e = sf(t);
						if (e && e.isAnonymous) {
							var n = Xr({
								providerId: null,
								isNewUser: !1
							});
							return Xr({
								user: e,
								credential: null,
								additionalUserInfo: n,
								operationType: "signIn"
							})
						}
						return af(t, t.b.vb()).then((function(e) {
							var n = e.user;
							return xl(n, "isAnonymous", !0), t.ca(n), e
						}))
					}))
				}, e.getUid = function() {
					return sf(this) && sf(this).uid || null
				}, e.bc = function(t) {
					this.addAuthTokenListener(t), this.s++, 0 < this.s && sf(this) && gl(sf(this))
				}, e.Nc = function(t) {
					var e = this;
					G(this.m, (function(n) {
						n == t && e.s--
					})), 0 > this.s && (this.s = 0), 0 == this.s && sf(this) && bl(sf(this)), this.removeAuthTokenListener(t)
				}, e.addAuthTokenListener = function(t) {
					var e = this;
					this.m.push(t), ff(this, this.h.then((function() {
						e.l || Q(e.m, t) && t(cf(e))
					})))
				}, e.removeAuthTokenListener = function(t) {
					Y(this.m, (function(e) {
						return e == t
					}))
				}, e.delete = function() {
					this.l = !0;
					for (var t = 0; t < this.P.length; t++) this.P[t].cancel("app-deleted");
					return this.P = [], this.i && (t = this.i).b.removeListener(Kl("local"), t.a, this.oa), this.a && (Oc(this.a, this), zc(this.a.b)), Promise.resolve()
				}, e.fc = function(t) {
					return ff(this, function(t, e) {
						return Zu(t, Iu, {
							identifier: e,
							continueUri: Or() ? sr() : "http://localhost"
						}).then((function(t) {
							return t.signinMethods || []
						}))
					}(this.b, t))
				}, e.zc = function(t) {
					return !!Oo(t)
				}, e.sb = function(t, e) {
					var n = this;
					return ff(this, Ne().then((function() {
						var t = new Ni(e);
						if (!t.c) throw new k("argument-error", Oi + " must be true when sending sign in link to email");
						return ji(t)
					})).then((function(e) {
						return n.b.sb(t, e)
					})).then((function() {})))
				}, e.fd = function(t) {
					return this.Pa(t).then((function(t) {
						return t.data.email
					}))
				}, e.jb = function(t, e) {
					return ff(this, this.b.jb(t, e).then((function() {})))
				}, e.Pa = function(t) {
					return ff(this, this.b.Pa(t).then((function(t) {
						return new ii(t)
					})))
				}, e.fb = function(t) {
					return ff(this, this.b.fb(t).then((function() {})))
				}, e.rb = function(t, e) {
					var n = this;
					return ff(this, Ne().then((function() {
						return "undefined" === typeof e || dt(e) ? {} : ji(new Ni(e))
					})).then((function(e) {
						return n.b.rb(t, e)
					})).then((function() {})))
				}, e.Uc = function(t, e) {
					return ff(this, Kc(this, t, e, E(this.Ya, this)))
				}, e.Tc = function(t, e) {
					var n = this;
					return ff(this, Ne().then((function() {
						var r = e || sr(),
							i = xo(t, r);
						if (!(r = Oo(r))) throw new k("argument-error", "Invalid email link!");
						if (r.tenantId !== n.S()) throw new k("tenant-id-mismatch");
						return n.Ya(i)
					})))
				}, hf.prototype.render = function() {}, hf.prototype.reset = function() {}, hf.prototype.getResponse = function() {}, hf.prototype.execute = function() {};
				var df = null;

				function vf(t, e) {
					return (e = mf(e)) && t.a[e] || null
				}

				function mf(t) {
					return (t = "undefined" === typeof t ? 1e12 : t) ? t.toString() : null
				}

				function yf(t, e) {
					this.g = !1, this.c = e, this.a = this.b = null, this.h = "invisible" !== this.c.size, this.f = ae(t);
					var n = this;
					this.i = function() {
						n.execute()
					}, this.h ? this.execute() : sn(this.f, "click", this.i)
				}

				function gf(t) {
					if (t.g) throw Error("reCAPTCHA mock was already deleted!")
				}

				function bf() {}

				function wf() {}
				pf.prototype.render = function(t, e) {
					return this.a[this.b.toString()] = new yf(t, e), this.b++
				}, pf.prototype.reset = function(t) {
					var e = vf(this, t);
					t = mf(t), e && t && (e.delete(), delete this.a[t])
				}, pf.prototype.getResponse = function(t) {
					return (t = vf(this, t)) ? t.getResponse() : null
				}, pf.prototype.execute = function(t) {
					(t = vf(this, t)) && t.execute()
				}, yf.prototype.getResponse = function() {
					return gf(this), this.b
				}, yf.prototype.execute = function() {
					gf(this);
					var t = this;
					this.a || (this.a = setTimeout((function() {
						t.b = function() {
							for (var t = 50, e = []; 0 < t;) e.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), t--;
							return e.join("")
						}();
						var e = t.c.callback,
							n = t.c["expired-callback"];
						if (e) try {
							e(t.b)
						} catch (r) {}
						t.a = setTimeout((function() {
							if (t.a = null, t.b = null, n) try {
								n()
							} catch (r) {}
							t.h && t.execute()
						}), 6e4)
					}), 500))
				}, yf.prototype.delete = function() {
					gf(this), this.g = !0, clearTimeout(this.a), this.a = null, fn(this.f, "click", this.i)
				}, Kr(bf, "FACTOR_ID", "phone"), wf.prototype.g = function() {
					return df || (df = new pf), Ne(df)
				}, wf.prototype.c = function() {};
				var _f = null;

				function Ef() {
					this.b = c.grecaptcha ? 1 / 0 : 0, this.f = null, this.a = "__rcb" + Math.floor(1e6 * Math.random()).toString()
				}
				var If = new bt(Et, "https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),
					Tf = new Fr(3e4, 6e4);
				Ef.prototype.g = function(t) {
					var e = this;
					return new we((function(n, r) {
						var i = setTimeout((function() {
							r(new k("network-request-failed"))
						}), Tf.get());
						!c.grecaptcha || t !== e.f && !e.b ? (c[e.a] = function() {
							if (c.grecaptcha) {
								e.f = t;
								var o = c.grecaptcha.render;
								c.grecaptcha.render = function(t, n) {
									return t = o(t, n), e.b++, t
								}, clearTimeout(i), n(c.grecaptcha)
							} else clearTimeout(i), r(new k("internal-error"));
							delete c[e.a]
						}, Ne(za(kt(If, {
							onload: e.a,
							hl: t || ""
						}))).o((function() {
							clearTimeout(i), r(new k("internal-error", "Unable to load external reCAPTCHA dependencies!"))
						}))) : (clearTimeout(i), n(c.grecaptcha))
					}))
				}, Ef.prototype.c = function() {
					this.b--
				};
				var Sf = null;

				function kf(t, e, n, r, i, o, a) {
					if (Kr(this, "type", "recaptcha"), this.c = this.f = null, this.D = !1, this.u = e, this.g = null, a ? (_f || (_f = new wf), a = _f) : (Sf || (Sf = new Ef), a = Sf), this.m = a, this.a = n || {
							theme: "light",
							type: "image"
						}, this.h = [], this.a[xf]) throw new k("argument-error", "sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");
					if (this.i = "invisible" === this.a[Of], !c.document) throw new k("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.");
					if (!ae(e) || !this.i && ae(e).hasChildNodes()) throw new k("argument-error", "reCAPTCHA container is either not found or already contains inner elements!");
					this.s = new Qa(t, o || null, i || null), this.w = r || function() {
						return null
					};
					var u = this;
					this.l = [];
					var s = this.a[Nf];
					this.a[Nf] = function(t) {
						if (Cf(u, t), "function" === typeof s) s(t);
						else if ("string" === typeof s) {
							var e = Nr(s, c);
							"function" === typeof e && e(t)
						}
					};
					var l = this.a[Af];
					this.a[Af] = function() {
						if (Cf(u, null), "function" === typeof l) l();
						else if ("string" === typeof l) {
							var t = Nr(l, c);
							"function" === typeof t && t()
						}
					}
				}
				var Nf = "callback",
					Af = "expired-callback",
					xf = "sitekey",
					Of = "size";

				function Cf(t, e) {
					for (var n = 0; n < t.l.length; n++) try {
						t.l[n](e)
					} catch (r) {}
				}

				function Df(t, e) {
					return t.h.push(e), e.ma((function() {
						X(t.h, e)
					})), e
				}

				function Pf(t) {
					if (t.D) throw new k("internal-error", "RecaptchaVerifier instance has been destroyed.")
				}

				function Rf(t, e, n) {
					var i = !1;
					try {
						this.b = n || r.app()
					} catch (u) {
						throw new k("argument-error", "No firebase.app.App instance is currently initialized.")
					}
					if (!this.b.options || !this.b.options.apiKey) throw new k("invalid-api-key");
					n = this.b.options.apiKey;
					var o = this,
						a = null;
					try {
						a = this.b.auth().Ea()
					} catch (u) {}
					try {
						i = this.b.auth().settings.appVerificationDisabledForTesting
					} catch (u) {}
					a = r.SDK_VERSION ? Sr(r.SDK_VERSION, a) : null, kf.call(this, n, t, e, (function() {
						try {
							var t = o.b.auth().ja()
						} catch (e) {
							t = null
						}
						return t
					}), a, D(A), i)
				}

				function Lf(t, e, n, r) {
					t: {
						n = Array.prototype.slice.call(n);
						for (var i = 0, o = !1, a = 0; a < e.length; a++)
							if (e[a].optional) o = !0;
							else {
								if (o) throw new k("internal-error", "Argument validator encountered a required argument after an optional argument.");
								i++
							} if (o = e.length, n.length < i || o < n.length) r = "Expected " + (i == o ? 1 == i ? "1 argument" : i + " arguments" : i + "-" + o + " arguments") + " but got " + n.length + ".";
						else {
							for (i = 0; i < n.length; i++)
								if (o = e[i].optional && void 0 === n[i], !e[i].K(n[i]) && !o) {
									if (e = e[i], 0 > i || i >= Mf.length) throw new k("internal-error", "Argument validator received an unsupported number of arguments.");
									n = Mf[i], r = (r ? "" : n + " argument ") + (e.name ? '"' + e.name + '" ' : "") + "must be " + e.J + ".";
									break t
								} r = null
						}
					}
					if (r) throw new k("argument-error", t + " failed: " + r)
				}(e = kf.prototype).Ga = function() {
					var t = this;
					return this.f ? this.f : this.f = Df(this, Ne().then((function() {
						if (Or() && !gr()) return vr();
						throw new k("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.")
					})).then((function() {
						return t.m.g(t.w())
					})).then((function(e) {
						return t.g = e, Zu(t.s, Mu, {})
					})).then((function(e) {
						t.a[xf] = e.recaptchaSiteKey
					})).o((function(e) {
						throw t.f = null, e
					})))
				}, e.render = function() {
					Pf(this);
					var t = this;
					return Df(this, this.Ga().then((function() {
						if (null === t.c) {
							var e = t.u;
							if (!t.i) {
								var n = ae(e);
								e = function(t, e, n) {
									var r = arguments,
										i = document,
										o = String(r[0]),
										a = r[1];
									if (!oe && a && (a.name || a.type)) {
										if (o = ["<", o], a.name && o.push(' name="', qt(a.name), '"'), a.type) {
											o.push(' type="', qt(a.type), '"');
											var u = {};
											yt(u, a), delete u.type, a = u
										}
										o.push(">"), o = o.join("")
									}
									return o = he(i, o), a && ("string" === typeof a ? o.className = a : Array.isArray(a) ? o.className = a.join(" ") : ue(o, a)), 2 < r.length && fe(i, o, r), o
								}("DIV"), n.appendChild(e)
							}
							t.c = t.g.render(e, t.a)
						}
						return t.c
					})))
				}, e.verify = function() {
					Pf(this);
					var t = this;
					return Df(this, this.render().then((function(e) {
						return new we((function(n) {
							var r = t.g.getResponse(e);
							if (r) n(r);
							else {
								t.l.push((function e(r) {
									r && (function(t, e) {
										Y(t.l, (function(t) {
											return t == e
										}))
									}(t, e), n(r))
								})), t.i && t.g.execute(t.c)
							}
						}))
					})))
				}, e.reset = function() {
					Pf(this), null !== this.c && this.g.reset(this.c)
				}, e.clear = function() {
					Pf(this), this.D = !0, this.m.c();
					for (var t = 0; t < this.h.length; t++) this.h[t].cancel("RecaptchaVerifier instance has been destroyed.");
					if (!this.i) {
						t = ae(this.u);
						for (var e; e = t.firstChild;) t.removeChild(e)
					}
				}, S(Rf, kf);
				var Mf = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ");

				function jf(t, e) {
					return {
						name: t || "",
						J: "a valid string",
						optional: !!e,
						K: function(t) {
							return "string" === typeof t
						}
					}
				}

				function Uf(t, e) {
					return {
						name: t || "",
						J: "a boolean",
						optional: !!e,
						K: function(t) {
							return "boolean" === typeof t
						}
					}
				}

				function Ff(t, e) {
					return {
						name: t || "",
						J: "a valid object",
						optional: !!e,
						K: m
					}
				}

				function Vf(t, e) {
					return {
						name: t || "",
						J: "a function",
						optional: !!e,
						K: function(t) {
							return "function" === typeof t
						}
					}
				}

				function zf(t, e) {
					return {
						name: t || "",
						J: "null",
						optional: !!e,
						K: function(t) {
							return null === t
						}
					}
				}

				function Bf(t) {
					return {
						name: t ? t + "Credential" : "credential",
						J: t ? "a valid " + t + " credential" : "a valid credential",
						optional: !1,
						K: function(e) {
							if (!e) return !1;
							var n = !t || e.providerId === t;
							return !(!e.ia || !n)
						}
					}
				}

				function qf(t, e) {
					return m(t) && "string" === typeof t.type && t.type === e && "function" === typeof t.Fa
				}

				function Gf(t) {
					return m(t) && "string" === typeof t.uid
				}

				function Wf(t, e, n, r) {
					return {
						name: n || "",
						J: t.J + " or " + e.J,
						optional: !!r,
						K: function(n) {
							return t.K(n) || e.K(n)
						}
					}
				}

				function Hf(t, e) {
					for (var n in e) {
						var r = e[n].name;
						t[r] = Xf(r, t[n], e[n].j)
					}
				}

				function Kf(t, e) {
					for (var n in e) {
						var r = e[n].name;
						r !== n && Object.defineProperty(t, r, {
							get: I((function(t) {
								return this[t]
							}), n),
							set: I((function(t, e, n, r) {
								Lf(t, [n], [r], !0), this[e] = r
							}), r, n, e[n].gb),
							enumerable: !0
						})
					}
				}

				function Qf(t, e, n, r) {
					t[e] = Xf(e, n, r)
				}

				function Xf(t, e, n) {
					function r() {
						var t = Array.prototype.slice.call(arguments);
						return Lf(o, n, t), e.apply(this, t)
					}
					if (!n) return e;
					var i, o = function(t) {
						return (t = t.split("."))[t.length - 1]
					}(t);
					for (i in e) r[i] = e[i];
					for (i in e.prototype) r.prototype[i] = e.prototype[i];
					return r
				}
				Hf(Jl.prototype, {
						fb: {
							name: "applyActionCode",
							j: [jf("code")]
						},
						Pa: {
							name: "checkActionCode",
							j: [jf("code")]
						},
						jb: {
							name: "confirmPasswordReset",
							j: [jf("code"), jf("newPassword")]
						},
						cc: {
							name: "createUserWithEmailAndPassword",
							j: [jf("email"), jf("password")]
						},
						fc: {
							name: "fetchSignInMethodsForEmail",
							j: [jf("email")]
						},
						pa: {
							name: "getRedirectResult",
							j: []
						},
						zc: {
							name: "isSignInWithEmailLink",
							j: [jf("emailLink")]
						},
						Fc: {
							name: "onAuthStateChanged",
							j: [Wf(Ff(), Vf(), "nextOrObserver"), Vf("opt_error", !0), Vf("opt_completed", !0)]
						},
						Gc: {
							name: "onIdTokenChanged",
							j: [Wf(Ff(), Vf(), "nextOrObserver"), Vf("opt_error", !0), Vf("opt_completed", !0)]
						},
						rb: {
							name: "sendPasswordResetEmail",
							j: [jf("email"), Wf(Ff("opt_actionCodeSettings", !0), zf(null, !0), "opt_actionCodeSettings", !0)]
						},
						sb: {
							name: "sendSignInLinkToEmail",
							j: [jf("email"), Ff("actionCodeSettings")]
						},
						tb: {
							name: "setPersistence",
							j: [jf("persistence")]
						},
						Qc: {
							name: "signInAndRetrieveDataWithCredential",
							j: [Bf()]
						},
						vb: {
							name: "signInAnonymously",
							j: []
						},
						Ya: {
							name: "signInWithCredential",
							j: [Bf()]
						},
						Rc: {
							name: "signInWithCustomToken",
							j: [jf("token")]
						},
						Sc: {
							name: "signInWithEmailAndPassword",
							j: [jf("email"), jf("password")]
						},
						Tc: {
							name: "signInWithEmailLink",
							j: [jf("email"), jf("emailLink", !0)]
						},
						Uc: {
							name: "signInWithPhoneNumber",
							j: [jf("phoneNumber"), {
								name: "applicationVerifier",
								J: "an implementation of firebase.auth.ApplicationVerifier",
								optional: !1,
								K: function(t) {
									return !(!t || "string" !== typeof t.type || "function" !== typeof t.verify)
								}
							}]
						},
						Vc: {
							name: "signInWithPopup",
							j: [{
								name: "authProvider",
								J: "a valid Auth provider",
								optional: !1,
								K: function(t) {
									return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider"))
								}
							}]
						},
						Wc: {
							name: "signInWithRedirect",
							j: [{
								name: "authProvider",
								J: "a valid Auth provider",
								optional: !1,
								K: function(t) {
									return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider"))
								}
							}]
						},
						bd: {
							name: "updateCurrentUser",
							j: [Wf({
								name: "user",
								J: "an instance of Firebase User",
								optional: !1,
								K: function(t) {
									return !!(t && t instanceof pl)
								}
							}, zf(), "user")]
						},
						wb: {
							name: "signOut",
							j: []
						},
						toJSON: {
							name: "toJSON",
							j: [jf(null, !0)]
						},
						dd: {
							name: "useDeviceLanguage",
							j: []
						},
						fd: {
							name: "verifyPasswordResetCode",
							j: [jf("code")]
						}
					}), Kf(Jl.prototype, {
						lc: {
							name: "languageCode",
							gb: Wf(jf(), zf(), "languageCode")
						},
						ti: {
							name: "tenantId",
							gb: Wf(jf(), zf(), "tenantId")
						}
					}), Jl.Persistence = Qs, Jl.Persistence.LOCAL = "local", Jl.Persistence.SESSION = "session", Jl.Persistence.NONE = "none", Hf(pl.prototype, {
						delete: {
							name: "delete",
							j: []
						},
						mc: {
							name: "getIdTokenResult",
							j: [Uf("opt_forceRefresh", !0)]
						},
						I: {
							name: "getIdToken",
							j: [Uf("opt_forceRefresh", !0)]
						},
						Ac: {
							name: "linkAndRetrieveDataWithCredential",
							j: [Bf()]
						},
						mb: {
							name: "linkWithCredential",
							j: [Bf()]
						},
						Bc: {
							name: "linkWithPhoneNumber",
							j: [jf("phoneNumber"), {
								name: "applicationVerifier",
								J: "an implementation of firebase.auth.ApplicationVerifier",
								optional: !1,
								K: function(t) {
									return !(!t || "string" !== typeof t.type || "function" !== typeof t.verify)
								}
							}]
						},
						Cc: {
							name: "linkWithPopup",
							j: [{
								name: "authProvider",
								J: "a valid Auth provider",
								optional: !1,
								K: function(t) {
									return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider"))
								}
							}]
						},
						Dc: {
							name: "linkWithRedirect",
							j: [{
								name: "authProvider",
								J: "a valid Auth provider",
								optional: !1,
								K: function(t) {
									return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider"))
								}
							}]
						},
						Jc: {
							name: "reauthenticateAndRetrieveDataWithCredential",
							j: [Bf()]
						},
						pb: {
							name: "reauthenticateWithCredential",
							j: [Bf()]
						},
						Kc: {
							name: "reauthenticateWithPhoneNumber",
							j: [jf("phoneNumber"), {
								name: "applicationVerifier",
								J: "an implementation of firebase.auth.ApplicationVerifier",
								optional: !1,
								K: function(t) {
									return !(!t || "string" !== typeof t.type || "function" !== typeof t.verify)
								}
							}]
						},
						Lc: {
							name: "reauthenticateWithPopup",
							j: [{
								name: "authProvider",
								J: "a valid Auth provider",
								optional: !1,
								K: function(t) {
									return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider"))
								}
							}]
						},
						Mc: {
							name: "reauthenticateWithRedirect",
							j: [{
								name: "authProvider",
								J: "a valid Auth provider",
								optional: !1,
								K: function(t) {
									return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider"))
								}
							}]
						},
						reload: {
							name: "reload",
							j: []
						},
						qb: {
							name: "sendEmailVerification",
							j: [Wf(Ff("opt_actionCodeSettings", !0), zf(null, !0), "opt_actionCodeSettings", !0)]
						},
						toJSON: {
							name: "toJSON",
							j: [jf(null, !0)]
						},
						ad: {
							name: "unlink",
							j: [jf("provider")]
						},
						xb: {
							name: "updateEmail",
							j: [jf("email")]
						},
						yb: {
							name: "updatePassword",
							j: [jf("password")]
						},
						cd: {
							name: "updatePhoneNumber",
							j: [Bf("phone")]
						},
						zb: {
							name: "updateProfile",
							j: [Ff("profile")]
						},
						Ab: {
							name: "verifyBeforeUpdateEmail",
							j: [jf("email"), Wf(Ff("opt_actionCodeSettings", !0), zf(null, !0), "opt_actionCodeSettings", !0)]
						}
					}), Hf(pf.prototype, {
						execute: {
							name: "execute"
						},
						render: {
							name: "render"
						},
						reset: {
							name: "reset"
						},
						getResponse: {
							name: "getResponse"
						}
					}), Hf(hf.prototype, {
						execute: {
							name: "execute"
						},
						render: {
							name: "render"
						},
						reset: {
							name: "reset"
						},
						getResponse: {
							name: "getResponse"
						}
					}), Hf(we.prototype, {
						ma: {
							name: "finally"
						},
						o: {
							name: "catch"
						},
						then: {
							name: "then"
						}
					}), Kf(Wc.prototype, {
						appVerificationDisabled: {
							name: "appVerificationDisabledForTesting",
							gb: Uf("appVerificationDisabledForTesting")
						}
					}), Hf(Hc.prototype, {
						confirm: {
							name: "confirm",
							j: [jf("verificationCode")]
						}
					}), Qf(ao, "fromJSON", (function(t) {
						t = "string" === typeof t ? JSON.parse(t) : t;
						for (var e, n = [po, No, Do, lo], r = 0; r < n.length; r++)
							if (e = n[r](t)) return e;
						return null
					}), [Wf(jf(), Ff(), "json")]), Qf(Ao, "credential", (function(t, e) {
						return new ko(t, e)
					}), [jf("email"), jf("password")]), Hf(ko.prototype, {
						v: {
							name: "toJSON",
							j: [jf(null, !0)]
						}
					}), Hf(go.prototype, {
						Aa: {
							name: "addScope",
							j: [jf("scope")]
						},
						Ia: {
							name: "setCustomParameters",
							j: [Ff("customOAuthParameters")]
						}
					}), Qf(go, "credential", bo, [Wf(jf(), Ff(), "token")]), Qf(Ao, "credentialWithLink", xo, [jf("email"), jf("emailLink")]), Hf(wo.prototype, {
						Aa: {
							name: "addScope",
							j: [jf("scope")]
						},
						Ia: {
							name: "setCustomParameters",
							j: [Ff("customOAuthParameters")]
						}
					}), Qf(wo, "credential", _o, [Wf(jf(), Ff(), "token")]), Hf(Eo.prototype, {
						Aa: {
							name: "addScope",
							j: [jf("scope")]
						},
						Ia: {
							name: "setCustomParameters",
							j: [Ff("customOAuthParameters")]
						}
					}), Qf(Eo, "credential", Io, [Wf(jf(), Wf(Ff(), zf()), "idToken"), Wf(jf(), zf(), "accessToken", !0)]), Hf(To.prototype, {
						Ia: {
							name: "setCustomParameters",
							j: [Ff("customOAuthParameters")]
						}
					}), Qf(To, "credential", So, [Wf(jf(), Ff(), "token"), jf("secret", !0)]), Hf(yo.prototype, {
						Aa: {
							name: "addScope",
							j: [jf("scope")]
						},
						credential: {
							name: "credential",
							j: [Wf(jf(), Wf(Ff(), zf()), "optionsOrIdToken"), Wf(jf(), zf(), "accessToken", !0)]
						},
						Ia: {
							name: "setCustomParameters",
							j: [Ff("customOAuthParameters")]
						}
					}), Hf(fo.prototype, {
						v: {
							name: "toJSON",
							j: [jf(null, !0)]
						}
					}), Hf(so.prototype, {
						v: {
							name: "toJSON",
							j: [jf(null, !0)]
						}
					}), Qf(Ro, "credential", Lo, [jf("verificationId"), jf("verificationCode")]), Hf(Ro.prototype, {
						cb: {
							name: "verifyPhoneNumber",
							j: [Wf(jf(), {
								name: "phoneInfoOptions",
								J: "valid phone info options",
								optional: !1,
								K: function(t) {
									return !!t && (t.session && t.phoneNumber ? qf(t.session, io) && "string" === typeof t.phoneNumber : t.session && t.multiFactorHint ? qf(t.session, oo) && Gf(t.multiFactorHint) : t.session && t.multiFactorUid ? qf(t.session, oo) && "string" === typeof t.multiFactorUid : !!t.phoneNumber && "string" === typeof t.phoneNumber)
								}
							}, "phoneInfoOptions"), {
								name: "applicationVerifier",
								J: "an implementation of firebase.auth.ApplicationVerifier",
								optional: !1,
								K: function(t) {
									return !(!t || "string" !== typeof t.type || "function" !== typeof t.verify)
								}
							}]
						}
					}), Hf(Co.prototype, {
						v: {
							name: "toJSON",
							j: [jf(null, !0)]
						}
					}), Hf(k.prototype, {
						toJSON: {
							name: "toJSON",
							j: [jf(null, !0)]
						}
					}), Hf(Go.prototype, {
						toJSON: {
							name: "toJSON",
							j: [jf(null, !0)]
						}
					}), Hf(qo.prototype, {
						toJSON: {
							name: "toJSON",
							j: [jf(null, !0)]
						}
					}), Hf(Jc.prototype, {
						toJSON: {
							name: "toJSON",
							j: [jf(null, !0)]
						}
					}), Hf(Xc.prototype, {
						Pc: {
							name: "resolveSignIn",
							j: [{
								name: "multiFactorAssertion",
								J: "a valid multiFactorAssertion",
								optional: !1,
								K: function(t) {
									return !!t && !!t.ob
								}
							}]
						}
					}), Hf(il.prototype, {
						Ob: {
							name: "getSession",
							j: []
						},
						dc: {
							name: "enroll",
							j: [{
								name: "multiFactorAssertion",
								J: "a valid multiFactorAssertion",
								optional: !1,
								K: function(t) {
									return !!t && !!t.ob
								}
							}, jf("displayName", !0)]
						},
						$c: {
							name: "unenroll",
							j: [Wf({
								name: "multiFactorInfo",
								J: "a valid multiFactorInfo",
								optional: !1,
								K: Gf
							}, jf(), "multiFactorInfoIdentifier")]
						}
					}), Hf(Rf.prototype, {
						clear: {
							name: "clear",
							j: []
						},
						render: {
							name: "render",
							j: []
						},
						verify: {
							name: "verify",
							j: []
						}
					}), Qf(gi, "parseLink", ki, [jf("link")]), Qf(bf, "assertion", (function(t) {
						return new nl(t)
					}), [Bf("phone")]),
					function() {
						if ("undefined" === typeof r || !r.INTERNAL || !r.INTERNAL.registerComponent) throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");
						var t = {
							ActionCodeInfo: {
								Operation: {
									EMAIL_SIGNIN: ai,
									PASSWORD_RESET: "PASSWORD_RESET",
									RECOVER_EMAIL: "RECOVER_EMAIL",
									REVERT_SECOND_FACTOR_ADDITION: oi,
									VERIFY_AND_CHANGE_EMAIL: ui,
									VERIFY_EMAIL: "VERIFY_EMAIL"
								}
							},
							Auth: Jl,
							AuthCredential: ao,
							Error: k
						};
						Qf(t, "EmailAuthProvider", Ao, []), Qf(t, "FacebookAuthProvider", go, []), Qf(t, "GithubAuthProvider", wo, []), Qf(t, "GoogleAuthProvider", Eo, []), Qf(t, "TwitterAuthProvider", To, []), Qf(t, "OAuthProvider", yo, [jf("providerId")]), Qf(t, "SAMLAuthProvider", mo, [jf("providerId")]), Qf(t, "PhoneAuthProvider", Ro, [{
							name: "auth",
							J: "an instance of Firebase Auth",
							optional: !0,
							K: function(t) {
								return !!(t && t instanceof Jl)
							}
						}]), Qf(t, "RecaptchaVerifier", Rf, [Wf(jf(), {
							name: "",
							J: "an HTML element",
							optional: !1,
							K: function(t) {
								return !!(t && t instanceof Element)
							}
						}, "recaptchaContainer"), Ff("recaptchaParameters", !0), {
							name: "app",
							J: "an instance of Firebase App",
							optional: !0,
							K: function(t) {
								return !!(t && t instanceof r.app.App)
							}
						}]), Qf(t, "ActionCodeURL", gi, []), Qf(t, "PhoneMultiFactorGenerator", bf, []), r.INTERNAL.registerComponent({
							name: "auth",
							instanceFactory: function(t) {
								return new Jl(t = t.getProvider("app").getImmediate())
							},
							multipleInstances: !1,
							serviceProps: t,
							instantiationMode: "LAZY",
							type: "PUBLIC"
						}), r.INTERNAL.registerComponent({
							name: "auth-internal",
							instanceFactory: function(t) {
								return {
									getUid: E((t = t.getProvider("auth").getImmediate()).getUid, t),
									getToken: E(t.kc, t),
									addAuthTokenListener: E(t.bc, t),
									removeAuthTokenListener: E(t.Nc, t)
								}
							},
							multipleInstances: !1,
							instantiationMode: "LAZY",
							type: "PRIVATE"
						}), r.registerVersion("@firebase/auth", "0.14.9"), r.INTERNAL.extendNamespace({
							User: pl
						})
					}()
			}).apply("undefined" !== typeof t ? t : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
		}).call(this, n(8))
	}, , function(t, e, n) {
		"use strict";
		var r, i = n(0),
			o = n(3),
			a = n.n(o),
			u = n(4),
			s = n(2),
			c = n(13),
			l = ((r = {})["missing-app-config-values"] = 'Missing App configuration value: "{$valueName}"', r["not-registered"] = "Firebase Installation is not registered.", r["installation-not-found"] = "Firebase Installation not found.", r["request-failed"] = '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"', r["app-offline"] = "Could not process request. Application offline.", r["delete-pending-registration"] = "Can't delete installation while there is a pending registration request.", r),
			f = new s.ErrorFactory("installations", "Installations", l);

		function h(t) {
			return t instanceof s.FirebaseError && t.code.includes("request-failed")
		}

		function p(t) {
			return "https://firebaseinstallations.googleapis.com/v1/projects/" + t.projectId + "/installations"
		}

		function d(t) {
			return {
				token: t.token,
				requestStatus: 2,
				expiresIn: (e = t.expiresIn, Number(e.replace("s", "000"))),
				creationTime: Date.now()
			};
			var e
		}

		function v(t, e) {
			return Object(i.__awaiter)(this, void 0, void 0, (function() {
				var n, r;
				return Object(i.__generator)(this, (function(i) {
					switch (i.label) {
						case 0:
							return [4, e.json()];
						case 1:
							return n = i.sent(), r = n.error, [2, f.create("request-failed", {
								requestName: t,
								serverCode: r.code,
								serverMessage: r.message,
								serverStatus: r.status
							})]
					}
				}))
			}))
		}

		function m(t) {
			var e = t.apiKey;
			return new Headers({
				"Content-Type": "application/json",
				Accept: "application/json",
				"x-goog-api-key": e
			})
		}

		function y(t, e) {
			var n = e.refreshToken,
				r = m(t);
			return r.append("Authorization", function(t) {
				return "FIS_v2 " + t
			}(n)), r
		}

		function g(t) {
			return Object(i.__awaiter)(this, void 0, void 0, (function() {
				var e;
				return Object(i.__generator)(this, (function(n) {
					switch (n.label) {
						case 0:
							return [4, t()];
						case 1:
							return (e = n.sent()).status >= 500 && e.status < 600 ? [2, t()] : [2, e]
					}
				}))
			}))
		}

		function b(t, e) {
			var n = e.fid;
			return Object(i.__awaiter)(this, void 0, void 0, (function() {
				var e, r, o, a, u, s;
				return Object(i.__generator)(this, (function(i) {
					switch (i.label) {
						case 0:
							return e = p(t), r = m(t), o = {
								fid: n,
								authVersion: "FIS_v2",
								appId: t.appId,
								sdkVersion: "w:0.4.17"
							}, a = {
								method: "POST",
								headers: r,
								body: JSON.stringify(o)
							}, [4, g((function() {
								return fetch(e, a)
							}))];
						case 1:
							return (u = i.sent()).ok ? [4, u.json()] : [3, 3];
						case 2:
							return s = i.sent(), [2, {
								fid: s.fid || n,
								registrationStatus: 2,
								refreshToken: s.refreshToken,
								authToken: d(s.authToken)
							}];
						case 3:
							return [4, v("Create Installation", u)];
						case 4:
							throw i.sent()
					}
				}))
			}))
		}

		function w(t) {
			return new Promise((function(e) {
				setTimeout(e, t)
			}))
		}
		var _ = /^[cdef][\w-]{21}$/;

		function E() {
			try {
				var t = new Uint8Array(17);
				(self.crypto || self.msCrypto).getRandomValues(t), t[0] = 112 + t[0] % 16;
				var e = function(t) {
					return (e = t, btoa(String.fromCharCode.apply(String, Object(i.__spread)(e))).replace(/\+/g, "-").replace(/\//g, "_")).substr(0, 22);
					var e
				}(t);
				return _.test(e) ? e : ""
			} catch (n) {
				return ""
			}
		}

		function I(t) {
			return t.appName + "!" + t.appId
		}
		var T = new Map;

		function S(t, e) {
			var n = I(t);
			k(n, e),
				function(t, e) {
					var n = A();
					n && n.postMessage({
						key: t,
						fid: e
					});
					x()
				}(n, e)
		}

		function k(t, e) {
			var n, r, o = T.get(t);
			if (o) try {
				for (var a = Object(i.__values)(o), u = a.next(); !u.done; u = a.next()) {
					(0, u.value)(e)
				}
			} catch (s) {
				n = {
					error: s
				}
			} finally {
				try {
					u && !u.done && (r = a.return) && r.call(a)
				} finally {
					if (n) throw n.error
				}
			}
		}
		var N = null;

		function A() {
			return !N && "BroadcastChannel" in self && ((N = new BroadcastChannel("[Firebase] FID Change")).onmessage = function(t) {
				k(t.data.key, t.data.fid)
			}), N
		}

		function x() {
			0 === T.size && N && (N.close(), N = null)
		}
		var O, C = "firebase-installations-store",
			D = null;

		function P() {
			return D || (D = Object(c.openDb)("firebase-installations-database", 1, (function(t) {
				switch (t.oldVersion) {
					case 0:
						t.createObjectStore(C)
				}
			}))), D
		}

		function R(t, e) {
			return Object(i.__awaiter)(this, void 0, void 0, (function() {
				var n, r, o, a, u;
				return Object(i.__generator)(this, (function(i) {
					switch (i.label) {
						case 0:
							return n = I(t), [4, P()];
						case 1:
							return r = i.sent(), o = r.transaction(C, "readwrite"), [4, (a = o.objectStore(C)).get(n)];
						case 2:
							return u = i.sent(), [4, a.put(e, n)];
						case 3:
							return i.sent(), [4, o.complete];
						case 4:
							return i.sent(), u && u.fid === e.fid || S(t, e.fid), [2, e]
					}
				}))
			}))
		}

		function L(t) {
			return Object(i.__awaiter)(this, void 0, void 0, (function() {
				var e, n, r;
				return Object(i.__generator)(this, (function(i) {
					switch (i.label) {
						case 0:
							return e = I(t), [4, P()];
						case 1:
							return n = i.sent(), [4, (r = n.transaction(C, "readwrite")).objectStore(C).delete(e)];
						case 2:
							return i.sent(), [4, r.complete];
						case 3:
							return i.sent(), [2]
					}
				}))
			}))
		}

		function M(t, e) {
			return Object(i.__awaiter)(this, void 0, void 0, (function() {
				var n, r, o, a, u, s;
				return Object(i.__generator)(this, (function(i) {
					switch (i.label) {
						case 0:
							return n = I(t), [4, P()];
						case 1:
							return r = i.sent(), o = r.transaction(C, "readwrite"), [4, (a = o.objectStore(C)).get(n)];
						case 2:
							return u = i.sent(), void 0 !== (s = e(u)) ? [3, 4] : [4, a.delete(n)];
						case 3:
							return i.sent(), [3, 6];
						case 4:
							return [4, a.put(s, n)];
						case 5:
							i.sent(), i.label = 6;
						case 6:
							return [4, o.complete];
						case 7:
							return i.sent(), !s || u && u.fid === s.fid || S(t, s.fid), [2, s]
					}
				}))
			}))
		}

		function j(t) {
			return Object(i.__awaiter)(this, void 0, void 0, (function() {
				var e, n, r;
				return Object(i.__generator)(this, (function(o) {
					switch (o.label) {
						case 0:
							return [4, M(t, (function(n) {
								var r = function(t) {
										return V(t || {
											fid: E(),
											registrationStatus: 0
										})
									}(n),
									o = function(t, e) {
										if (0 === e.registrationStatus) {
											if (!navigator.onLine) {
												var n = Promise.reject(f.create("app-offline"));
												return {
													installationEntry: e,
													registrationPromise: n
												}
											}
											var r = {
													fid: e.fid,
													registrationStatus: 1,
													registrationTime: Date.now()
												},
												o = function(t, e) {
													return Object(i.__awaiter)(this, void 0, void 0, (function() {
														var n, r;
														return Object(i.__generator)(this, (function(i) {
															switch (i.label) {
																case 0:
																	return i.trys.push([0, 2, , 7]), [4, b(t, e)];
																case 1:
																	return n = i.sent(), [2, R(t, n)];
																case 2:
																	return h(r = i.sent()) && 409 === r.serverCode ? [4, L(t)] : [3, 4];
																case 3:
																	return i.sent(), [3, 6];
																case 4:
																	return [4, R(t, {
																		fid: e.fid,
																		registrationStatus: 0
																	})];
																case 5:
																	i.sent(), i.label = 6;
																case 6:
																	throw r;
																case 7:
																	return [2]
															}
														}))
													}))
												}(t, r);
											return {
												installationEntry: r,
												registrationPromise: o
											}
										}
										return 1 === e.registrationStatus ? {
											installationEntry: e,
											registrationPromise: U(t)
										} : {
											installationEntry: e
										}
									}(t, r);
								return e = o.registrationPromise, o.installationEntry
							}))];
						case 1:
							return "" !== (n = o.sent()).fid ? [3, 3] : (r = {}, [4, e]);
						case 2:
							return [2, (r.installationEntry = o.sent(), r)];
						case 3:
							return [2, {
								installationEntry: n,
								registrationPromise: e
							}]
					}
				}))
			}))
		}

		function U(t) {
			return Object(i.__awaiter)(this, void 0, void 0, (function() {
				var e, n, r, o;
				return Object(i.__generator)(this, (function(i) {
					switch (i.label) {
						case 0:
							return [4, F(t)];
						case 1:
							e = i.sent(), i.label = 2;
						case 2:
							return 1 !== e.registrationStatus ? [3, 5] : [4, w(100)];
						case 3:
							return i.sent(), [4, F(t)];
						case 4:
							return e = i.sent(), [3, 2];
						case 5:
							return 0 !== e.registrationStatus ? [3, 7] : [4, j(t)];
						case 6:
							return n = i.sent(), r = n.installationEntry, (o = n.registrationPromise) ? [2, o] : [2, r];
						case 7:
							return [2, e]
					}
				}))
			}))
		}

		function F(t) {
			return M(t, (function(t) {
				if (!t) throw f.create("installation-not-found");
				return V(t)
			}))
		}

		function V(t) {
			return 1 === (e = t).registrationStatus && e.registrationTime + 1e4 < Date.now() ? {
				fid: t.fid,
				registrationStatus: 0
			} : t;
			var e
		}

		function z(t, e) {
			var n = t.appConfig,
				r = t.platformLoggerProvider;
			return Object(i.__awaiter)(this, void 0, void 0, (function() {
				var t, o, a, u, s, c, l;
				return Object(i.__generator)(this, (function(i) {
					switch (i.label) {
						case 0:
							return t = function(t, e) {
								var n = e.fid;
								return p(t) + "/" + n + "/authTokens:generate"
							}(n, e), o = y(n, e), (a = r.getImmediate({
								optional: !0
							})) && o.append("x-firebase-client", a.getPlatformInfoString()), u = {
								installation: {
									sdkVersion: "w:0.4.17"
								}
							}, s = {
								method: "POST",
								headers: o,
								body: JSON.stringify(u)
							}, [4, g((function() {
								return fetch(t, s)
							}))];
						case 1:
							return (c = i.sent()).ok ? [4, c.json()] : [3, 3];
						case 2:
							return l = i.sent(), [2, d(l)];
						case 3:
							return [4, v("Generate Auth Token", c)];
						case 4:
							throw i.sent()
					}
				}))
			}))
		}

		function B(t, e) {
			return void 0 === e && (e = !1), Object(i.__awaiter)(this, void 0, void 0, (function() {
				var n, r, o;
				return Object(i.__generator)(this, (function(a) {
					switch (a.label) {
						case 0:
							return [4, M(t.appConfig, (function(r) {
								if (!G(r)) throw f.create("not-registered");
								var o = r.authToken;
								if (!e && function(t) {
										return 2 === t.requestStatus && ! function(t) {
											var e = Date.now();
											return e < t.creationTime || t.creationTime + t.expiresIn < e + 36e5
										}(t)
									}(o)) return r;
								if (1 === o.requestStatus) return n = function(t, e) {
									return Object(i.__awaiter)(this, void 0, void 0, (function() {
										var n, r;
										return Object(i.__generator)(this, (function(i) {
											switch (i.label) {
												case 0:
													return [4, q(t.appConfig)];
												case 1:
													n = i.sent(), i.label = 2;
												case 2:
													return 1 !== n.authToken.requestStatus ? [3, 5] : [4, w(100)];
												case 3:
													return i.sent(), [4, q(t.appConfig)];
												case 4:
													return n = i.sent(), [3, 2];
												case 5:
													return 0 === (r = n.authToken).requestStatus ? [2, B(t, e)] : [2, r]
											}
										}))
									}))
								}(t, e), r;
								if (!navigator.onLine) throw f.create("app-offline");
								var a = function(t) {
									var e = {
										requestStatus: 1,
										requestTime: Date.now()
									};
									return Object(i.__assign)(Object(i.__assign)({}, t), {
										authToken: e
									})
								}(r);
								return n = function(t, e) {
									return Object(i.__awaiter)(this, void 0, void 0, (function() {
										var n, r, o;
										return Object(i.__generator)(this, (function(a) {
											switch (a.label) {
												case 0:
													return a.trys.push([0, 3, , 8]), [4, z(t, e)];
												case 1:
													return n = a.sent(), o = Object(i.__assign)(Object(i.__assign)({}, e), {
														authToken: n
													}), [4, R(t.appConfig, o)];
												case 2:
													return a.sent(), [2, n];
												case 3:
													return !h(r = a.sent()) || 401 !== r.serverCode && 404 !== r.serverCode ? [3, 5] : [4, L(t.appConfig)];
												case 4:
													return a.sent(), [3, 7];
												case 5:
													return o = Object(i.__assign)(Object(i.__assign)({}, e), {
														authToken: {
															requestStatus: 0
														}
													}), [4, R(t.appConfig, o)];
												case 6:
													a.sent(), a.label = 7;
												case 7:
													throw r;
												case 8:
													return [2]
											}
										}))
									}))
								}(t, a), a
							}))];
						case 1:
							return r = a.sent(), n ? [4, n] : [3, 3];
						case 2:
							return o = a.sent(), [3, 4];
						case 3:
							o = r.authToken, a.label = 4;
						case 4:
							return [2, o]
					}
				}))
			}))
		}

		function q(t) {
			return M(t, (function(t) {
				if (!G(t)) throw f.create("not-registered");
				var e, n = t.authToken;
				return 1 === (e = n).requestStatus && e.requestTime + 1e4 < Date.now() ? Object(i.__assign)(Object(i.__assign)({}, t), {
					authToken: {
						requestStatus: 0
					}
				}) : t
			}))
		}

		function G(t) {
			return void 0 !== t && 2 === t.registrationStatus
		}

		function W(t) {
			return Object(i.__awaiter)(this, void 0, void 0, (function() {
				var e;
				return Object(i.__generator)(this, (function(n) {
					switch (n.label) {
						case 0:
							return [4, j(t)];
						case 1:
							return (e = n.sent().registrationPromise) ? [4, e] : [3, 3];
						case 2:
							n.sent(), n.label = 3;
						case 3:
							return [2]
					}
				}))
			}))
		}

		function H(t, e) {
			return Object(i.__awaiter)(this, void 0, void 0, (function() {
				var n, r, o, a;
				return Object(i.__generator)(this, (function(i) {
					switch (i.label) {
						case 0:
							return n = function(t, e) {
								var n = e.fid;
								return p(t) + "/" + n
							}(t, e), r = y(t, e), o = {
								method: "DELETE",
								headers: r
							}, [4, g((function() {
								return fetch(n, o)
							}))];
						case 1:
							return (a = i.sent()).ok ? [3, 3] : [4, v("Delete Installation", a)];
						case 2:
							throw i.sent();
						case 3:
							return [2]
					}
				}))
			}))
		}

		function K(t, e) {
			var n = t.appConfig;
			return function(t, e) {
					A();
					var n = I(t),
						r = T.get(n);
					r || (r = new Set, T.set(n, r)), r.add(e)
				}(n, e),
				function() {
					! function(t, e) {
						var n = I(t),
							r = T.get(n);
						r && (r.delete(e), 0 === r.size && T.delete(n), x())
					}(n, e)
				}
		}

		function Q(t) {
			return f.create("missing-app-config-values", {
				valueName: t
			})
		}(O = a.a).INTERNAL.registerComponent(new u.Component("installations", (function(t) {
			var e = t.getProvider("app").getImmediate(),
				n = {
					appConfig: function(t) {
						var e, n;
						if (!t || !t.options) throw Q("App Configuration");
						if (!t.name) throw Q("App Name");
						try {
							for (var r = Object(i.__values)(["projectId", "apiKey", "appId"]), o = r.next(); !o.done; o = r.next()) {
								var a = o.value;
								if (!t.options[a]) throw Q(a)
							}
						} catch (u) {
							e = {
								error: u
							}
						} finally {
							try {
								o && !o.done && (n = r.return) && n.call(r)
							} finally {
								if (e) throw e.error
							}
						}
						return {
							appName: t.name,
							projectId: t.options.projectId,
							apiKey: t.options.apiKey,
							appId: t.options.appId
						}
					}(e),
					platformLoggerProvider: t.getProvider("platform-logger")
				};
			return {
				app: e,
				getId: function() {
					return function(t) {
						return Object(i.__awaiter)(this, void 0, void 0, (function() {
							var e, n, r;
							return Object(i.__generator)(this, (function(i) {
								switch (i.label) {
									case 0:
										return [4, j(t.appConfig)];
									case 1:
										return e = i.sent(), n = e.installationEntry, (r = e.registrationPromise) ? r.catch(console.error) : B(t).catch(console.error), [2, n.fid]
								}
							}))
						}))
					}(n)
				},
				getToken: function(t) {
					return function(t, e) {
						return void 0 === e && (e = !1), Object(i.__awaiter)(this, void 0, void 0, (function() {
							return Object(i.__generator)(this, (function(n) {
								switch (n.label) {
									case 0:
										return [4, W(t.appConfig)];
									case 1:
										return n.sent(), [4, B(t, e)];
									case 2:
										return [2, n.sent().token]
								}
							}))
						}))
					}(n, t)
				},
				delete: function() {
					return function(t) {
						return Object(i.__awaiter)(this, void 0, void 0, (function() {
							var e, n;
							return Object(i.__generator)(this, (function(r) {
								switch (r.label) {
									case 0:
										return [4, M(e = t.appConfig, (function(t) {
											if (!t || 0 !== t.registrationStatus) return t
										}))];
									case 1:
										if (!(n = r.sent())) return [3, 6];
										if (1 !== n.registrationStatus) return [3, 2];
										throw f.create("delete-pending-registration");
									case 2:
										if (2 !== n.registrationStatus) return [3, 6];
										if (navigator.onLine) return [3, 3];
										throw f.create("app-offline");
									case 3:
										return [4, H(e, n)];
									case 4:
										return r.sent(), [4, L(e)];
									case 5:
										r.sent(), r.label = 6;
									case 6:
										return [2]
								}
							}))
						}))
					}(n)
				},
				onIdChange: function(t) {
					return K(n, t)
				}
			}
		}), "PUBLIC")), O.registerVersion("@firebase/installations", "0.4.17");
		var X, Y, $ = n(6),
			J = "https://www.googletagmanager.com/gtag/js";
		! function(t) {
			t.EVENT = "event", t.SET = "set", t.CONFIG = "config"
		}(X || (X = {})),
		function(t) {
			t.ADD_SHIPPING_INFO = "add_shipping_info", t.ADD_PAYMENT_INFO = "add_payment_info", t.ADD_TO_CART = "add_to_cart", t.ADD_TO_WISHLIST = "add_to_wishlist", t.BEGIN_CHECKOUT = "begin_checkout", t.CHECKOUT_PROGRESS = "checkout_progress", t.EXCEPTION = "exception", t.GENERATE_LEAD = "generate_lead", t.LOGIN = "login", t.PAGE_VIEW = "page_view", t.PURCHASE = "purchase", t.REFUND = "refund", t.REMOVE_FROM_CART = "remove_from_cart", t.SCREEN_VIEW = "screen_view", t.SEARCH = "search", t.SELECT_CONTENT = "select_content", t.SELECT_ITEM = "select_item", t.SELECT_PROMOTION = "select_promotion", t.SET_CHECKOUT_OPTION = "set_checkout_option", t.SHARE = "share", t.SIGN_UP = "sign_up", t.TIMING_COMPLETE = "timing_complete", t.VIEW_CART = "view_cart", t.VIEW_ITEM = "view_item", t.VIEW_ITEM_LIST = "view_item_list", t.VIEW_PROMOTION = "view_promotion", t.VIEW_SEARCH_RESULTS = "view_search_results"
		}(Y || (Y = {}));
		var Z, tt = new $.Logger("@firebase/analytics");

		function et(t, e, n, r, o, a) {
			return Object(i.__awaiter)(this, void 0, void 0, (function() {
				var u, s, c, l;
				return Object(i.__generator)(this, (function(i) {
					switch (i.label) {
						case 0:
							u = r[o], i.label = 1;
						case 1:
							return i.trys.push([1, 7, , 8]), u ? [4, e[u]] : [3, 3];
						case 2:
							return i.sent(), [3, 6];
						case 3:
							return [4, Promise.all(n)];
						case 4:
							return s = i.sent(), (c = s.find((function(t) {
								return t.measurementId === o
							}))) ? [4, e[c.appId]] : [3, 6];
						case 5:
							i.sent(), i.label = 6;
						case 6:
							return [3, 8];
						case 7:
							return l = i.sent(), tt.error(l), [3, 8];
						case 8:
							return t(X.CONFIG, o, a), [2]
					}
				}))
			}))
		}

		function nt(t, e, n, r, o) {
			return Object(i.__awaiter)(this, void 0, void 0, (function() {
				var a, u, s, c, l, f, h, p;
				return Object(i.__generator)(this, (function(i) {
					switch (i.label) {
						case 0:
							return i.trys.push([0, 4, , 5]), a = [], o && o.send_to ? (u = o.send_to, Array.isArray(u) || (u = [u]), [4, Promise.all(n)]) : [3, 2];
						case 1:
							for (s = i.sent(), c = function(t) {
									var n = s.find((function(e) {
											return e.measurementId === t
										})),
										r = n && e[n.appId];
									if (!r) return a = [], "break";
									a.push(r)
								}, l = 0, f = u; l < f.length && (h = f[l], "break" !== c(h)); l++);
							i.label = 2;
						case 2:
							return 0 === a.length && (a = Object.values(e)), [4, Promise.all(a)];
						case 3:
							return i.sent(), t(X.EVENT, r, o || {}), [3, 5];
						case 4:
							return p = i.sent(), tt.error(p), [3, 5];
						case 5:
							return [2]
					}
				}))
			}))
		}

		function rt(t, e, n, r, o) {
			var a = function() {
				for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
				window[r].push(arguments)
			};
			return window[o] && "function" === typeof window[o] && (a = window[o]), window[o] = function(t, e, n, r) {
				return function(o, a, u) {
					return Object(i.__awaiter)(this, void 0, void 0, (function() {
						var s;
						return Object(i.__generator)(this, (function(i) {
							switch (i.label) {
								case 0:
									return i.trys.push([0, 6, , 7]), o !== X.EVENT ? [3, 2] : [4, nt(t, e, n, a, u)];
								case 1:
									return i.sent(), [3, 5];
								case 2:
									return o !== X.CONFIG ? [3, 4] : [4, et(t, e, n, r, a, u)];
								case 3:
									return i.sent(), [3, 5];
								case 4:
									t(X.SET, a), i.label = 5;
								case 5:
									return [3, 7];
								case 6:
									return s = i.sent(), tt.error(s), [3, 7];
								case 7:
									return [2]
							}
						}))
					}))
				}
			}(a, t, e, n), {
				gtagCore: a,
				wrappedGtag: window[o]
			}
		}
		var it = ((Z = {})["already-exists"] = "A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.", Z["already-initialized"] = "Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.", Z["interop-component-reg-failed"] = "Firebase Analytics Interop Component failed to instantiate: {$reason}", Z["indexedDB-unsupported"] = "IndexedDB is not supported by current browswer", Z["invalid-indexedDB-context"] = "Environment doesn't support IndexedDB: {$errorInfo}. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments", Z["cookies-not-enabled"] = "Cookies are not enabled in this browser environment. Analytics requires cookies to be enabled.", Z["invalid-analytics-context"] = "Firebase Analytics is not supported in browser extensions.", Z["fetch-throttle"] = "The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.", Z["config-fetch-failed"] = "Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}", Z["no-api-key"] = 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.', Z["no-app-id"] = 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.', Z["indexedDB-unsupported"] = "IndexedDB is not supported by current browswer", Z["invalid-indexedDB-context"] = "Environment doesn't support IndexedDB: {$errorInfo}. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments", Z["cookies-not-enabled"] = "Cookies are not enabled in this browser environment. Analytics requires cookies to be enabled.", Z),
			ot = new s.ErrorFactory("analytics", "Analytics", it),
			at = new(function() {
				function t(t, e) {
					void 0 === t && (t = {}), void 0 === e && (e = 1e3), this.throttleMetadata = t, this.intervalMillis = e
				}
				return t.prototype.getThrottleMetadata = function(t) {
					return this.throttleMetadata[t]
				}, t.prototype.setThrottleMetadata = function(t, e) {
					this.throttleMetadata[t] = e
				}, t.prototype.deleteThrottleMetadata = function(t) {
					delete this.throttleMetadata[t]
				}, t
			}());

		function ut(t) {
			return new Headers({
				Accept: "application/json",
				"x-goog-api-key": t
			})
		}

		function st(t) {
			var e;
			return Object(i.__awaiter)(this, void 0, void 0, (function() {
				var n, r, o, a, u, s, c;
				return Object(i.__generator)(this, (function(i) {
					switch (i.label) {
						case 0:
							return n = t.appId, r = t.apiKey, o = {
								method: "GET",
								headers: ut(r)
							}, a = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", n), [4, fetch(a, o)];
						case 1:
							if (200 === (u = i.sent()).status || 304 === u.status) return [3, 6];
							s = "", i.label = 2;
						case 2:
							return i.trys.push([2, 4, , 5]), [4, u.json()];
						case 3:
							return c = i.sent(), (null === (e = c.error) || void 0 === e ? void 0 : e.message) && (s = c.error.message), [3, 5];
						case 4:
							return i.sent(), [3, 5];
						case 5:
							throw ot.create("config-fetch-failed", {
								httpStatus: u.status,
								responseMessage: s
							});
						case 6:
							return [2, u.json()]
					}
				}))
			}))
		}

		function ct(t, e, n, r) {
			var o = e.throttleEndTimeMillis,
				a = e.backoffCount;
			return void 0 === r && (r = at), Object(i.__awaiter)(this, void 0, void 0, (function() {
				var e, u, c, l, f, h, p;
				return Object(i.__generator)(this, (function(i) {
					switch (i.label) {
						case 0:
							e = t.appId, u = t.measurementId, i.label = 1;
						case 1:
							return i.trys.push([1, 3, , 4]), [4, lt(n, o)];
						case 2:
							return i.sent(), [3, 4];
						case 3:
							if (c = i.sent(), u) return tt.warn("Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID " + u + ' provided in the "measurementId" field in the local Firebase config. [' + c.message + "]"), [2, {
								appId: e,
								measurementId: u
							}];
							throw c;
						case 4:
							return i.trys.push([4, 6, , 7]), [4, st(t)];
						case 5:
							return l = i.sent(), r.deleteThrottleMetadata(e), [2, l];
						case 6:
							if (! function(t) {
									if (!(t instanceof s.FirebaseError)) return !1;
									var e = Number(t.httpStatus);
									return 429 === e || 500 === e || 503 === e || 504 === e
								}(f = i.sent())) {
								if (r.deleteThrottleMetadata(e), u) return tt.warn("Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID " + u + ' provided in the "measurementId" field in the local Firebase config. [' + f.message + "]"), [2, {
									appId: e,
									measurementId: u
								}];
								throw f
							}
							return h = 503 === Number(f.httpStatus) ? Object(s.calculateBackoffMillis)(a, r.intervalMillis, 30) : Object(s.calculateBackoffMillis)(a, r.intervalMillis), p = {
								throttleEndTimeMillis: Date.now() + h,
								backoffCount: a + 1
							}, r.setThrottleMetadata(e, p), tt.debug("Calling attemptFetch again in " + h + " millis"), [2, ct(t, p, n, r)];
						case 7:
							return [2]
					}
				}))
			}))
		}

		function lt(t, e) {
			return new Promise((function(n, r) {
				var i = Math.max(e - Date.now(), 0),
					o = setTimeout(n, i);
				t.addEventListener((function() {
					clearTimeout(o), r(ot.create("fetch-throttle", {
						throttleEndTimeMillis: e
					}))
				}))
			}))
		}
		var ft = function() {
			function t() {
				this.listeners = []
			}
			return t.prototype.addEventListener = function(t) {
				this.listeners.push(t)
			}, t.prototype.abort = function() {
				this.listeners.forEach((function(t) {
					return t()
				}))
			}, t
		}();

		function ht(t, e, n, r, o) {
			return Object(i.__awaiter)(this, void 0, void 0, (function() {
				var a, u, s, c, l;
				return Object(i.__generator)(this, (function(f) {
					switch (f.label) {
						case 0:
							return (a = function(t, e, n) {
								return void 0 === e && (e = at), Object(i.__awaiter)(this, void 0, void 0, (function() {
									var r, o, a, u, s, c, l = this;
									return Object(i.__generator)(this, (function(f) {
										if (r = t.options, o = r.appId, a = r.apiKey, u = r.measurementId, !o) throw ot.create("no-app-id");
										if (!a) {
											if (u) return [2, {
												measurementId: u,
												appId: o
											}];
											throw ot.create("no-api-key")
										}
										return s = e.getThrottleMetadata(o) || {
											backoffCount: 0,
											throttleEndTimeMillis: Date.now()
										}, c = new ft, setTimeout((function() {
											return Object(i.__awaiter)(l, void 0, void 0, (function() {
												return Object(i.__generator)(this, (function(t) {
													return c.abort(), [2]
												}))
											}))
										}), void 0 !== n ? n : 6e4), [2, ct({
											appId: o,
											apiKey: a,
											measurementId: u
										}, s, c, e)]
									}))
								}))
							}(t)).then((function(e) {
								n[e.measurementId] = e.appId, t.options.measurementId && e.measurementId !== t.options.measurementId && tt.warn("The measurement ID in the local Firebase config (" + t.options.measurementId + ") does not match the measurement ID fetched from the server (" + e.measurementId + "). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.")
							})).catch((function(t) {
								return tt.error(t)
							})), e.push(a), [4, Promise.all([a, r.getId()])];
						case 1:
							return u = f.sent(), s = u[0], c = u[1], o("js", new Date), o(X.CONFIG, s.measurementId, ((l = {}).firebase_id = c, l.origin = "firebase", l.update = !0, l)), [2, s.measurementId]
					}
				}))
			}))
		}
		var pt, dt, vt = {},
			mt = [],
			yt = {},
			gt = "dataLayer",
			bt = "gtag",
			wt = !1;

		function _t(t) {
			if (wt) throw ot.create("already-initialized");
			t.dataLayerName && (gt = t.dataLayerName), t.gtagName && (bt = t.gtagName)
		}

		function Et(t, e) {
			if (Object(s.isBrowserExtension)()) throw ot.create("invalid-analytics-context");
			if (!Object(s.areCookiesEnabled)()) throw ot.create("cookies-not-enabled");
			if (!Object(s.isIndexedDBAvailable)()) throw ot.create("indexedDB-unsupported");
			Object(s.validateIndexedDBOpenable)().catch((function(t) {
				var e = ot.create("invalid-indexedDB-context", {
					errorInfo: t
				});
				tt.warn(e.message)
			}));
			var n = t.options.appId;
			if (!n) throw ot.create("no-app-id");
			if (!t.options.apiKey) {
				if (!t.options.measurementId) throw ot.create("no-api-key");
				tt.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ' + t.options.measurementId + ' provided in the "measurementId" field in the local Firebase config.')
			}
			if (null != vt[n]) throw ot.create("already-exists", {
				id: n
			});
			if (!wt) {
				(function() {
					for (var t = window.document.getElementsByTagName("script"), e = 0, n = Object.values(t); e < n.length; e++) {
						var r = n[e];
						if (r.src && r.src.includes(J)) return r
					}
					return null
				})() || function(t) {
					var e = document.createElement("script");
					e.src = J + "?l=" + t, e.async = !0, document.head.appendChild(e)
				}(gt),
				function(t) {
					var e = [];
					Array.isArray(window[t]) ? e = window[t] : window[t] = e
				}(gt);
				var r = rt(vt, mt, yt, gt, bt),
					o = r.wrappedGtag,
					a = r.gtagCore;
				dt = o, pt = a, wt = !0
			}
			return vt[n] = ht(t, mt, yt, e, pt), {
				app: t,
				logEvent: function(t, e, r) {
					(function(t, e, n, r, o) {
						return Object(i.__awaiter)(this, void 0, void 0, (function() {
							var a, u;
							return Object(i.__generator)(this, (function(s) {
								switch (s.label) {
									case 0:
										return o && o.global ? (t(X.EVENT, n, r), [2]) : [3, 1];
									case 1:
										return [4, e];
									case 2:
										a = s.sent(), u = Object(i.__assign)(Object(i.__assign)({}, r), {
											send_to: a
										}), t(X.EVENT, n, u), s.label = 3;
									case 3:
										return [2]
								}
							}))
						}))
					})(dt, vt[n], t, e, r).catch((function(t) {
						return tt.error(t)
					}))
				},
				setCurrentScreen: function(t, e) {
					(function(t, e, n, r) {
						return Object(i.__awaiter)(this, void 0, void 0, (function() {
							var o;
							return Object(i.__generator)(this, (function(i) {
								switch (i.label) {
									case 0:
										return r && r.global ? (t(X.SET, {
											screen_name: n
										}), [2, Promise.resolve()]) : [3, 1];
									case 1:
										return [4, e];
									case 2:
										o = i.sent(), t(X.CONFIG, o, {
											update: !0,
											screen_name: n
										}), i.label = 3;
									case 3:
										return [2]
								}
							}))
						}))
					})(dt, vt[n], t, e).catch((function(t) {
						return tt.error(t)
					}))
				},
				setUserId: function(t, e) {
					(function(t, e, n, r) {
						return Object(i.__awaiter)(this, void 0, void 0, (function() {
							var o;
							return Object(i.__generator)(this, (function(i) {
								switch (i.label) {
									case 0:
										return r && r.global ? (t(X.SET, {
											user_id: n
										}), [2, Promise.resolve()]) : [3, 1];
									case 1:
										return [4, e];
									case 2:
										o = i.sent(), t(X.CONFIG, o, {
											update: !0,
											user_id: n
										}), i.label = 3;
									case 3:
										return [2]
								}
							}))
						}))
					})(dt, vt[n], t, e).catch((function(t) {
						return tt.error(t)
					}))
				},
				setUserProperties: function(t, e) {
					(function(t, e, n, r) {
						return Object(i.__awaiter)(this, void 0, void 0, (function() {
							var o, a, u, s, c;
							return Object(i.__generator)(this, (function(i) {
								switch (i.label) {
									case 0:
										if (!r || !r.global) return [3, 1];
										for (o = {}, a = 0, u = Object.keys(n); a < u.length; a++) s = u[a], o["user_properties." + s] = n[s];
										return t(X.SET, o), [2, Promise.resolve()];
									case 1:
										return [4, e];
									case 2:
										c = i.sent(), t(X.CONFIG, c, {
											update: !0,
											user_properties: n
										}), i.label = 3;
									case 3:
										return [2]
								}
							}))
						}))
					})(dt, vt[n], t, e).catch((function(t) {
						return tt.error(t)
					}))
				},
				setAnalyticsCollectionEnabled: function(t) {
					(function(t, e) {
						return Object(i.__awaiter)(this, void 0, void 0, (function() {
							var n;
							return Object(i.__generator)(this, (function(r) {
								switch (r.label) {
									case 0:
										return [4, t];
									case 1:
										return n = r.sent(), window["ga-disable-" + n] = !e, [2]
								}
							}))
						}))
					})(vt[n], t).catch((function(t) {
						return tt.error(t)
					}))
				},
				INTERNAL: {
					delete: function() {
						return delete vt[n], Promise.resolve()
					}
				}
			}
		}

		function It() {
			return Object(i.__awaiter)(this, void 0, void 0, (function() {
				return Object(i.__generator)(this, (function(t) {
					switch (t.label) {
						case 0:
							if (Object(s.isBrowserExtension)()) return [2, !1];
							if (!Object(s.areCookiesEnabled)()) return [2, !1];
							if (!Object(s.isIndexedDBAvailable)()) return [2, !1];
							t.label = 1;
						case 1:
							return t.trys.push([1, 3, , 4]), [4, Object(s.validateIndexedDBOpenable)()];
						case 2:
							return [2, t.sent()];
						case 3:
							return t.sent(), [2, !1];
						case 4:
							return [2]
					}
				}))
			}))
		}! function(t) {
			t.INTERNAL.registerComponent(new u.Component("analytics", (function(t) {
				return Et(t.getProvider("app").getImmediate(), t.getProvider("installations").getImmediate())
			}), "PUBLIC").setServiceProps({
				settings: _t,
				EventName: Y,
				isSupported: It
			})), t.INTERNAL.registerComponent(new u.Component("analytics-internal", (function(t) {
				try {
					return {
						logEvent: t.getProvider("analytics").getImmediate().logEvent
					}
				} catch (e) {
					throw ot.create("interop-component-reg-failed", {
						reason: e
					})
				}
			}), "PRIVATE")), t.registerVersion("@firebase/analytics", "0.5.0")
		}(a.a)
	}]
]);
//# sourceMappingURL=2.411c92a7.chunk.js.map