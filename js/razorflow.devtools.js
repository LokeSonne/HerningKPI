! function(e, t) {
    "function" == typeof _dfn && _dfn.amd ? _dfn([], t) : e.Bar = t()
}(this, function() {
    var requirejs, _rqr, _dfn;
    return function(e) {
            function t(e, t) {
                return _.call(e, t)
            }

            function n(e, t) {
                var n, r, i, o, a, s, l, u, c, d, f = t && t.split("/"),
                    p = g.map,
                    h = p && p["*"] || {};
                if (e && "." === e.charAt(0))
                    if (t) {
                        for (f = f.slice(0, f.length - 1), e = f.concat(e.split("/")), u = 0; u < e.length; u += 1)
                            if (d = e[u], "." === d) e.splice(u, 1), u -= 1;
                            else if (".." === d) {
                            if (1 === u && (".." === e[2] || ".." === e[0])) break;
                            u > 0 && (e.splice(u - 1, 2), u -= 2)
                        }
                        e = e.join("/")
                    } else 0 === e.indexOf("./") && (e = e.substring(2));
                if ((f || h) && p) {
                    for (n = e.split("/"), u = n.length; u > 0; u -= 1) {
                        if (r = n.slice(0, u).join("/"), f)
                            for (c = f.length; c > 0; c -= 1)
                                if (i = p[f.slice(0, c).join("/")], i && (i = i[r])) {
                                    o = i, a = u;
                                    break
                                }
                        if (o) break;
                        !s && h && h[r] && (s = h[r], l = u)
                    }!o && s && (o = s, a = l), o && (n.splice(0, a, o), e = n.join("/"))
                }
                return e
            }

            function r(t, n) {
                return function() {
                    return c.apply(e, v.call(arguments, 0).concat([t, n]))
                }
            }

            function i(e) {
                return function(t) {
                    return n(t, e)
                }
            }

            function o(e) {
                return function(t) {
                    p[e] = t
                }
            }

            function a(n) {
                if (t(h, n)) {
                    var r = h[n];
                    delete h[n], m[n] = !0, u.apply(e, r)
                }
                if (!t(p, n) && !t(m, n)) throw new Error("No " + n);
                return p[n]
            }

            function s(e) {
                var t, n = e ? e.indexOf("!") : -1;
                return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
            }

            function l(e) {
                return function() {
                    return g && g.config && g.config[e] || {}
                }
            }
            var u, c, d, f, p = {},
                h = {},
                g = {},
                m = {},
                _ = Object.prototype.hasOwnProperty,
                v = [].slice;
            d = function(e, t) {
                var r, o = s(e),
                    l = o[0];
                return e = o[1], l && (l = n(l, t), r = a(l)), l ? e = r && r.normalize ? r.normalize(e, i(t)) : n(e, t) : (e = n(e, t), o = s(e), l = o[0], e = o[1], l && (r = a(l))), {
                    f: l ? l + "!" + e : e,
                    n: e,
                    pr: l,
                    p: r
                }
            }, f = {
                _rqr: function(e) {
                    return r(e)
                },
                exports: function(e) {
                    var t = p[e];
                    return "undefined" != typeof t ? t : p[e] = {}
                },
                module: function(e) {
                    return {
                        id: e,
                        uri: "",
                        exports: p[e],
                        config: l(e)
                    }
                }
            }, u = function(n, i, s, l) {
                var u, c, g, _, v, y, b = [];
                if (l = l || n, "function" == typeof s) {
                    for (i = !i.length && s.length ? ["_rqr", "exports", "module"] : i, v = 0; v < i.length; v += 1)
                        if (_ = d(i[v], l), c = _.f, "_rqr" === c) b[v] = f._rqr(n);
                        else if ("exports" === c) b[v] = f.exports(n), y = !0;
                    else if ("module" === c) u = b[v] = f.module(n);
                    else if (t(p, c) || t(h, c) || t(m, c)) b[v] = a(c);
                    else {
                        if (!_.p) throw new Error(n + " missing " + c);
                        _.p.load(_.n, r(l, !0), o(c), {}), b[v] = p[c]
                    }
                    g = s.apply(p[n], b), n && (u && u.exports !== e && u.exports !== p[n] ? p[n] = u.exports : g === e && y || (p[n] = g))
                } else n && (p[n] = s)
            }, requirejs = _rqr = c = function(t, n, r, i, o) {
                return "string" == typeof t ? f[t] ? f[t](n) : a(d(t, n).f) : (t.splice || (g = t, n.splice ? (t = n, n = r, r = null) : t = e), n = n || function() {}, "function" == typeof r && (r = i, i = o), i ? u(e, t, n, r) : setTimeout(function() {
                    u(e, t, n, r)
                }, 4), c)
            }, c.config = function(e) {
                return g = e, g.deps && c(g.deps, g.callback), c
            }, requirejs._defined = p, _dfn = function(e, n, r) {
                n.splice || (r = n, n = []), t(p, e) || t(h, e) || (h[e] = [e, n, r])
            }, _dfn.amd = {
                jQuery: !0
            }
        }(), _dfn("buildutils/almond", function() {}),
        function(e, t) {
            t("kendo/kendo.core", [], e)
        }(function() {
            return function(e, t) {
                function n() {}

                function r(e, t) {
                    if (t) return "'" + e.split("'").join("\\'").split('\\"').join('\\\\\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t") + "'";
                    var n = e.charAt(0),
                        r = e.substring(1);
                    return "=" === n ? "+(" + r + ")+" : ":" === n ? "+e(" + r + ")+" : ";" + e + ";o+="
                }

                function i(e, t, n) {
                    return e += "", t = t || 2, n = t - e.length, n ? ut[t].substring(0, n) + e : e
                }

                function o(e) {
                    var t = e.css(z.support.transitions.css + "box-shadow") || e.css("box-shadow"),
                        n = t ? t.match(R) || [0, 0, 0, 0, 0] : [0, 0, 0, 0, 0],
                        r = I.max(+n[3], +(n[4] || 0));
                    return {
                        left: -n[1] + r,
                        right: +n[1] + r,
                        bottom: +n[2] + r
                    }
                }

                function a(t, n) {
                    var r, i = H.browser,
                        a = "rtl" == t.css("direction");
                    if (t.parent().hasClass("k-animation-container")) {
                        var s = t.parent(".k-animation-container"),
                            l = s[0].style;
                        s.is(":hidden") && s.show(), r = F.test(l.width) || F.test(l.height), r || s.css({
                            width: t.outerWidth(),
                            height: t.outerHeight(),
                            boxSizing: "content-box",
                            mozBoxSizing: "content-box",
                            webkitBoxSizing: "content-box"
                        })
                    } else {
                        var u = o(t),
                            c = t[0].style.width,
                            d = t[0].style.height,
                            f = F.test(c),
                            p = F.test(d);
                        i.opera && (u.left = u.right = u.bottom = 5), r = f || p, !f && (!n || n && c) && (c = t.outerWidth()), !p && (!n || n && d) && (d = t.outerHeight()), t.wrap(e("<div/>").addClass("k-animation-container").css({
                            width: c,
                            height: d,
                            marginLeft: u.left * (a ? 1 : -1),
                            paddingLeft: u.left,
                            paddingRight: u.right,
                            paddingBottom: u.bottom
                        })), r && t.css({
                            width: "100%",
                            height: "100%",
                            boxSizing: "border-box",
                            mozBoxSizing: "border-box",
                            webkitBoxSizing: "border-box"
                        })
                    }
                    return i.msie && I.floor(i.version) <= 7 && (t.css({
                        zoom: 1
                    }), t.children(".k-menu").width(t.width())), t.parent()
                }

                function s(e) {
                    var t = 1,
                        n = arguments.length;
                    for (t = 1; n > t; t++) l(e, arguments[t]);
                    return e
                }

                function l(e, t) {
                    var n, r, i, o, a = z.data.ObservableArray,
                        s = z.data.DataSource,
                        u = z.data.HierarchicalDataSource;
                    for (n in t) r = t[n], i = typeof r, i === G && null !== r && r.constructor !== Array && r.constructor !== a && r.constructor !== s && r.constructor !== u ? r instanceof Date ? e[n] = new Date(r.getTime()) : Z(r.clone) ? e[n] = r.clone() : (o = e[n], e[n] = typeof o === G ? o || {} : {}, l(e[n], r)) : i !== V && (e[n] = r);
                    return e
                }

                function u(e, n, r) {
                    for (var i in n)
                        if (n.hasOwnProperty(i) && n[i].test(e)) return i;
                    return r !== t ? r : e
                }

                function c(e) {
                    return e.replace(/([a-z][A-Z])/g, function(e) {
                        return e.charAt(0) + "-" + e.charAt(1).toLowerCase()
                    })
                }

                function d(e) {
                    return e.replace(/\-(\w)/g, function(e, t) {
                        return t.toUpperCase()
                    })
                }

                function f(t, n) {
                    var r, i = {};
                    return document.defaultView && document.defaultView.getComputedStyle ? (r = document.defaultView.getComputedStyle(t, ""), n && e.each(n, function(e, t) {
                        i[t] = r.getPropertyValue(t)
                    })) : (r = t.currentStyle, n && e.each(n, function(e, t) {
                        i[t] = r[d(t)]
                    })), z.size(i) || (i = r), i
                }

                function p(e) {
                    var t, n = 0;
                    for (t in e) e.hasOwnProperty(t) && "toJSON" != t && n++;
                    return n
                }

                function h(e, t, n) {
                    t || (t = "offset"); {
                        var r = e[t]();
                        H.mobileOS
                    }
                    return H.browser.msie && (H.pointers || H.msPointers) && !n && (r.top -= window.pageYOffset - document.documentElement.scrollTop, r.left -= window.pageXOffset - document.documentElement.scrollLeft), r
                }

                function g(e) {
                    var t = {};
                    return O("string" == typeof e ? e.split(" ") : e, function(e) {
                        t[e] = this
                    }), t
                }

                function m(e) {
                    return new z.effects.Element(e)
                }

                function _(e, t, n, r) {
                    return typeof e === U && (Z(t) && (r = t, t = 400, n = !1), Z(n) && (r = n, n = !1), typeof t === J && (n = t, t = 400), e = {
                        effects: e,
                        duration: t,
                        reverse: n,
                        complete: r
                    }), E({
                        effects: {},
                        duration: 400,
                        reverse: !1,
                        init: A,
                        teardown: A,
                        hide: !1
                    }, e, {
                        completeCallback: e.complete,
                        complete: A
                    })
                }

                function v(t, n, r, i, o) {
                    for (var a, s = 0, l = t.length; l > s; s++) a = e(t[s]), a.queue(function() {
                        dt.promise(a, _(n, r, i, o))
                    });
                    return t
                }

                function y(e, t, n, r) {
                    return t && (t = t.split(" "), O(t, function(t, n) {
                        e.toggleClass(n, r)
                    })), e
                }

                function b(e) {
                    return ("" + e).replace(ft, "&amp;").replace(pt, "&lt;").replace(mt, "&gt;").replace(ht, "&quot;").replace(gt, "&#39;")
                }

                function w(e, n) {
                    var r;
                    return 0 === n.indexOf("data") && (n = n.substring(4), n = n.charAt(0).toLowerCase() + n.substring(1)), n = n.replace(Tt, "-$1"), r = e.getAttribute("data-" + z.ns + n), null === r ? r = t : "null" === r ? r = null : "true" === r ? r = !0 : "false" === r ? r = !1 : q.test(r) ? r = parseFloat(r) : kt.test(r) && !xt.test(r) && (r = new Function("return (" + r + ")")()), r
                }

                function k(n, r) {
                    var i, o, a = {};
                    for (i in r) o = w(n, i), o !== t && (wt.test(i) && (o = z.template(e("#" + o).html())), a[i] = o);
                    return a
                }

                function x(t, n) {
                    return e.contains(t, n) ? -1 : 1
                }

                function T() {
                    var t = e(this);
                    return e.inArray(t.attr("data-role"), ["slider", "rangeslider"]) > 0 || t.is(":visible")
                }

                function S(e, t) {
                    var n = e.nodeName.toLowerCase();
                    return (/input|select|textarea|button|object/.test(n) ? !e.disabled : "a" === n ? e.href || t : t) && C(e)
                }

                function C(t) {
                    return !e(t).parents().addBack().filter(function() {
                        return "hidden" === e.css(this, "visibility") || e.expr.filters.hidden(this)
                    }).length
                }

                function M(e, t) {
                    return new M.fn.init(e, t)
                }
                var j, z = window.kendo = window.kendo || {
                        cultures: {}
                    },
                    E = e.extend,
                    O = e.each,
                    D = e.isArray,
                    P = e.proxy,
                    A = e.noop,
                    I = Math,
                    N = window.JSON || {},
                    H = {},
                    F = /%/,
                    L = /\{(\d+)(:[^\}]+)?\}/g,
                    R = /(\d+(?:\.?)\d*)px\s*(\d+(?:\.?)\d*)px\s*(\d+(?:\.?)\d*)px\s*(\d+)?/i,
                    q = /^(\+|-?)\d+(\.?)\d*$/,
                    W = "function",
                    U = "string",
                    B = "number",
                    G = "object",
                    $ = "null",
                    J = "boolean",
                    V = "undefined",
                    K = {},
                    Y = {},
                    Q = [].slice,
                    X = window.Globalize;
                z.version = "$KENDO_VERSION", n.extend = function(e) {
                    var t, n, r = function() {},
                        i = this,
                        o = e && e.init ? e.init : function() {
                            i.apply(this, arguments)
                        };
                    r.prototype = i.prototype, n = o.fn = o.prototype = new r;
                    for (t in e) n[t] = null != e[t] && e[t].constructor === Object ? E(!0, {}, r.prototype[t], e[t]) : e[t];
                    return n.constructor = o, o.extend = i.extend, o
                }, n.prototype._initOptions = function(e) {
                    this.options = s({}, this.options, e)
                };
                var Z = z.isFunction = function(e) {
                        return "function" == typeof e
                    },
                    et = function() {
                        this._defaultPrevented = !0
                    },
                    tt = function() {
                        return this._defaultPrevented === !0
                    },
                    nt = n.extend({
                        init: function() {
                            this._events = {}
                        },
                        bind: function(e, n, r) {
                            var i, o, a, s, l, u = this,
                                c = typeof e === U ? [e] : e,
                                d = typeof n === W;
                            if (n === t) {
                                for (i in e) u.bind(i, e[i]);
                                return u
                            }
                            for (i = 0, o = c.length; o > i; i++) e = c[i], s = d ? n : n[e], s && (r && (a = s, s = function() {
                                u.unbind(e, s), a.apply(u, arguments)
                            }, s.original = a), l = u._events[e] = u._events[e] || [], l.push(s));
                            return u
                        },
                        one: function(e, t) {
                            return this.bind(e, t, !0)
                        },
                        first: function(e, t) {
                            var n, r, i, o, a = this,
                                s = typeof e === U ? [e] : e,
                                l = typeof t === W;
                            for (n = 0, r = s.length; r > n; n++) e = s[n], i = l ? t : t[e], i && (o = a._events[e] = a._events[e] || [], o.unshift(i));
                            return a
                        },
                        trigger: function(e, t) {
                            var n, r, i = this,
                                o = i._events[e];
                            if (o) {
                                for (t = t || {}, t.sender = i, t._defaultPrevented = !1, t.preventDefault = et, t.isDefaultPrevented = tt, o = o.slice(), n = 0, r = o.length; r > n; n++) o[n].call(i, t);
                                return t._defaultPrevented === !0
                            }
                            return !1
                        },
                        unbind: function(e, n) {
                            var r, i = this,
                                o = i._events[e];
                            if (e === t) i._events = {};
                            else if (o)
                                if (n)
                                    for (r = o.length - 1; r >= 0; r--)(o[r] === n || o[r].original === n) && o.splice(r, 1);
                                else i._events[e] = [];
                            return i
                        }
                    }),
                    rt = /^\w+/,
                    it = /\$\{([^}]*)\}/g,
                    ot = /\\\}/g,
                    at = /__CURLY__/g,
                    st = /\\#/g,
                    lt = /__SHARP__/g,
                    ut = ["", "0", "00", "000", "0000"];
                j = {
                        paramName: "data",
                        useWithBlock: !0,
                        render: function(e, t) {
                            var n, r, i = "";
                            for (n = 0, r = t.length; r > n; n++) i += e(t[n]);
                            return i
                        },
                        compile: function(t, n) {
                            var i, o, a, s = E({}, this, n),
                                l = s.paramName,
                                u = l.match(rt)[0],
                                c = s.useWithBlock,
                                d = "var o,e=kendo.htmlEncode;";
                            if (Z(t)) return 2 === t.length ? function(n) {
                                return t(e, {
                                    data: n
                                }).join("")
                            } : t;
                            for (d += c ? "with(" + l + "){" : "", d += "o=", o = t.replace(ot, "__CURLY__").replace(it, "#=e($1)#").replace(at, "}").replace(st, "__SHARP__").split("#"), a = 0; a < o.length; a++) d += r(o[a], a % 2 === 0);
                            d += c ? ";}" : ";", d += "return o;", d = d.replace(lt, "#");
                            try {
                                return i = new Function(u, d), i._slotCount = Math.floor(o.length / 2), i
                            } catch (f) {
                                throw new Error(z.format("Invalid template:'{0}' Generated code:'{1}'", t, d))
                            }
                        }
                    },
                    function() {
                        function e(e) {
                            return a.lastIndex = 0, a.test(e) ? '"' + e.replace(a, function(e) {
                                var t = s[e];
                                return typeof t === U ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                            }) + '"' : '"' + e + '"'
                        }

                        function t(i, a) {
                            var s, u, c, d, f, p, h = n,
                                g = a[i];
                            if (g && typeof g === G && typeof g.toJSON === W && (g = g.toJSON(i)), typeof o === W && (g = o.call(a, i, g)), p = typeof g, p === U) return e(g);
                            if (p === B) return isFinite(g) ? String(g) : $;
                            if (p === J || p === $) return String(g);
                            if (p === G) {
                                if (!g) return $;
                                if (n += r, f = [], "[object Array]" === l.apply(g)) {
                                    for (d = g.length, s = 0; d > s; s++) f[s] = t(s, g) || $;
                                    return c = 0 === f.length ? "[]" : n ? "[\n" + n + f.join(",\n" + n) + "\n" + h + "]" : "[" + f.join(",") + "]", n = h, c
                                }
                                if (o && typeof o === G)
                                    for (d = o.length, s = 0; d > s; s++) typeof o[s] === U && (u = o[s], c = t(u, g), c && f.push(e(u) + (n ? ": " : ":") + c));
                                else
                                    for (u in g) Object.hasOwnProperty.call(g, u) && (c = t(u, g), c && f.push(e(u) + (n ? ": " : ":") + c));
                                return c = 0 === f.length ? "{}" : n ? "{\n" + n + f.join(",\n" + n) + "\n" + h + "}" : "{" + f.join(",") + "}", n = h, c
                            }
                        }
                        var n, r, o, a = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                            s = {
                                "\b": "\\b",
                                "	": "\\t",
                                "\n": "\\n",
                                "\f": "\\f",
                                "\r": "\\r",
                                '"': '\\"',
                                "\\": "\\\\"
                            },
                            l = {}.toString;
                        typeof Date.prototype.toJSON !== W && (Date.prototype.toJSON = function() {
                            var e = this;
                            return isFinite(e.valueOf()) ? i(e.getUTCFullYear(), 4) + "-" + i(e.getUTCMonth() + 1) + "-" + i(e.getUTCDate()) + "T" + i(e.getUTCHours()) + ":" + i(e.getUTCMinutes()) + ":" + i(e.getUTCSeconds()) + "Z" : null
                        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
                            return this.valueOf()
                        }), typeof N.stringify !== W && (N.stringify = function(e, i, a) {
                            var s;
                            if (n = "", r = "", typeof a === B)
                                for (s = 0; a > s; s += 1) r += " ";
                            else typeof a === U && (r = a);
                            if (o = i, i && typeof i !== W && (typeof i !== G || typeof i.length !== B)) throw new Error("JSON.stringify");
                            return t("", {
                                "": e
                            })
                        })
                    }(),
                    function() {
                        function n(e) {
                            if (e) {
                                if (e.numberFormat) return e;
                                if (typeof e === U) {
                                    var t = z.cultures;
                                    return t[e] || t[e.split("-")[0]] || null
                                }
                                return null
                            }
                            return null
                        }

                        function r(e) {
                            return e && (e = n(e)), e || z.cultures.current
                        }

                        function o(e) {
                            e.groupSizes = e.groupSize, e.percent.groupSizes = e.percent.groupSize, e.currency.groupSizes = e.currency.groupSize
                        }

                        function a(e, n, o) {
                            o = r(o);
                            var a = o.calendars.standard,
                                s = a.days,
                                u = a.months;
                            return n = a.patterns[n] || n, n.replace(l, function(n) {
                                var r;
                                return "d" === n ? r = e.getDate() : "dd" === n ? r = i(e.getDate()) : "ddd" === n ? r = s.namesAbbr[e.getDay()] : "dddd" === n ? r = s.names[e.getDay()] : "M" === n ? r = e.getMonth() + 1 : "MM" === n ? r = i(e.getMonth() + 1) : "MMM" === n ? r = u.namesAbbr[e.getMonth()] : "MMMM" === n ? r = u.names[e.getMonth()] : "yy" === n ? r = i(e.getFullYear() % 100) : "yyyy" === n ? r = i(e.getFullYear(), 4) : "h" === n ? r = e.getHours() % 12 || 12 : "hh" === n ? r = i(e.getHours() % 12 || 12) : "H" === n ? r = e.getHours() : "HH" === n ? r = i(e.getHours()) : "m" === n ? r = e.getMinutes() : "mm" === n ? r = i(e.getMinutes()) : "s" === n ? r = e.getSeconds() : "ss" === n ? r = i(e.getSeconds()) : "f" === n ? r = I.floor(e.getMilliseconds() / 100) : "ff" === n ? (r = e.getMilliseconds(), r > 99 && (r = I.floor(r / 10)), r = i(r)) : "fff" === n ? r = i(e.getMilliseconds(), 3) : "tt" === n && (r = e.getHours() < 12 ? a.AM[0] : a.PM[0]), r !== t ? r : n.slice(1, n.length - 1)
                            })
                        }

                        function s(e, n, i) {
                            i = r(i);
                            var o, a, s, l, v, y, w, k, x, T, S, C, M, j, z, E, O, D, P, A, I, N, H, F = i.numberFormat,
                                L = F.groupSize[0],
                                R = F[h],
                                q = F[p],
                                W = F.decimals,
                                U = F.pattern[0],
                                B = [],
                                G = 0 > e,
                                $ = f,
                                J = f,
                                V = -1;
                            if (e === t) return f;
                            if (!isFinite(e)) return e;
                            if (!n) return i.name.length ? e.toLocaleString() : e.toString();
                            if (v = u.exec(n)) {
                                if (n = v[1].toLowerCase(), a = "c" === n, s = "p" === n, (a || s) && (F = a ? F.currency : F.percent, L = F.groupSize[0], R = F[h], q = F[p], W = F.decimals, o = F.symbol, U = F.pattern[G ? 0 : 1]), l = v[2], l && (W = +l), "e" === n) return l ? e.toExponential(W) : e.toExponential();
                                if (s && (e *= 100), e = b(e, W), G = 0 > e, e = e.split(p), y = e[0], w = e[1], G && (y = y.substring(1)), J = y, k = y.length, k >= L)
                                    for (J = f, T = 0; k > T; T++) T > 0 && (k - T) % L === 0 && (J += R), J += y.charAt(T);
                                if (w && (J += q + w), "n" === n && !G) return J;
                                for (e = f, T = 0, S = U.length; S > T; T++) C = U.charAt(T), e += "n" === C ? J : "$" === C || "%" === C ? o : C;
                                return e
                            }
                            if (G && (e = -e), (n.indexOf("'") > -1 || n.indexOf('"') > -1 || n.indexOf("\\") > -1) && (n = n.replace(c, function(e) {
                                    var t = e.charAt(0).replace("\\", ""),
                                        n = e.slice(1).replace(t, "");
                                    return B.push(n), _
                                })), n = n.split(";"), G && n[1]) n = n[1], j = !0;
                            else if (0 === e) {
                                if (n = n[2] || n[0], -1 == n.indexOf(g) && -1 == n.indexOf(m)) return n
                            } else n = n[0];
                            if (A = n.indexOf("%"), I = n.indexOf("$"), s = -1 != A, a = -1 != I, s && (e *= 100), a && "\\" === n[I - 1] && (n = n.split("\\").join(""), a = !1), (a || s) && (F = a ? F.currency : F.percent, L = F.groupSize[0], R = F[h], q = F[p], W = F.decimals, o = F.symbol), M = n.indexOf(h) > -1, M && (n = n.replace(d, f)), z = n.indexOf(p), S = n.length, -1 != z ? (w = e.toString().split("e"), w = w[1] ? b(e, Math.abs(w[1])) : w[0], w = w.split(p)[1] || f, O = n.lastIndexOf(m) - z, E = n.lastIndexOf(g) - z, D = O > -1, P = E > -1, T = w.length, D || P || (n = n.substring(0, z) + n.substring(z + 1), S = n.length, z = -1, T = 0), D && O > E ? T = O : E > O && (P && T > E ? T = E : D && O > T && (T = O)), T > -1 && (e = b(e, T))) : e = b(e), E = n.indexOf(g), N = O = n.indexOf(m), V = -1 == E && -1 != O ? O : -1 != E && -1 == O ? E : E > O ? O : E, E = n.lastIndexOf(g), O = n.lastIndexOf(m), H = -1 == E && -1 != O ? O : -1 != E && -1 == O ? E : E > O ? E : O, V == S && (H = V), -1 != V) {
                                if (J = e.toString().split(p), y = J[0], w = J[1] || f, k = y.length, x = w.length, G && -1 * e >= 0 && (G = !1), M)
                                    if (k === L && z - N > k) y = R + y;
                                    else if (k > L) {
                                    for (J = f, T = 0; k > T; T++) T > 0 && (k - T) % L === 0 && (J += R), J += y.charAt(T);
                                    y = J
                                }
                                for (e = n.substring(0, V), G && !j && (e += "-"), T = V; S > T; T++) {
                                    if (C = n.charAt(T), -1 == z) {
                                        if (k > H - T) {
                                            e += y;
                                            break
                                        }
                                    } else if (-1 != O && T > O && ($ = f), k >= z - T && z - T > -1 && (e += y, T = z), z === T) {
                                        e += (w ? q : f) + w, T += H - z + 1;
                                        continue
                                    }
                                    C === m ? (e += C, $ = C) : C === g && (e += $)
                                }
                                if (H >= V && (e += n.substring(H + 1)), a || s) {
                                    for (J = f, T = 0, S = e.length; S > T; T++) C = e.charAt(T), J += "$" === C || "%" === C ? o : C;
                                    e = J
                                }
                                if (S = B.length)
                                    for (T = 0; S > T; T++) e = e.replace(_, B[T])
                            }
                            return e
                        }
                        var l = /dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|HH|H|hh|h|mm|m|fff|ff|f|tt|ss|s|"[^"]*"|'[^']*'/g,
                            u = /^(n|c|p|e)(\d*)$/i,
                            c = /(\\.)|(['][^']*[']?)|(["][^"]*["]?)/g,
                            d = /\,/g,
                            f = "",
                            p = ".",
                            h = ",",
                            g = "#",
                            m = "0",
                            _ = "??",
                            v = "en-US",
                            y = {}.toString;
                        z.cultures["en-US"] = {
                            name: v,
                            numberFormat: {
                                pattern: ["-n"],
                                decimals: 2,
                                ",": ",",
                                ".": ".",
                                groupSize: [3],
                                percent: {
                                    pattern: ["-n %", "n %"],
                                    decimals: 2,
                                    ",": ",",
                                    ".": ".",
                                    groupSize: [3],
                                    symbol: "%"
                                },
                                currency: {
                                    pattern: ["($n)", "$n"],
                                    decimals: 2,
                                    ",": ",",
                                    ".": ".",
                                    groupSize: [3],
                                    symbol: "$"
                                }
                            },
                            calendars: {
                                standard: {
                                    days: {
                                        names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                        namesAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                                        namesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
                                    },
                                    months: {
                                        names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                                        namesAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
                                    },
                                    AM: ["AM", "am", "AM"],
                                    PM: ["PM", "pm", "PM"],
                                    patterns: {
                                        d: "M/d/yyyy",
                                        D: "dddd, MMMM dd, yyyy",
                                        F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                                        g: "M/d/yyyy h:mm tt",
                                        G: "M/d/yyyy h:mm:ss tt",
                                        m: "MMMM dd",
                                        M: "MMMM dd",
                                        s: "yyyy'-'MM'-'ddTHH':'mm':'ss",
                                        t: "h:mm tt",
                                        T: "h:mm:ss tt",
                                        u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                                        y: "MMMM, yyyy",
                                        Y: "MMMM, yyyy"
                                    },
                                    "/": "/",
                                    ":": ":",
                                    firstDay: 0,
                                    twoDigitYearMax: 2029
                                }
                            }
                        }, z.culture = function(e) {
                            var r, i = z.cultures;
                            return e === t ? i.current : (r = n(e) || i[v], r.calendar = r.calendars.standard, i.current = r, X && o(r.numberFormat), void 0)
                        }, z.findCulture = n, z.getCulture = r, z.culture(v);
                        var b = function(e, t) {
                                return t = t || 0, e = e.toString().split("e"), e = Math.round(+(e[0] + "e" + (e[1] ? +e[1] + t : t))), e = e.toString().split("e"), e = +(e[0] + "e" + (e[1] ? +e[1] - t : -t)), e.toFixed(t)
                            },
                            w = function(e, n, r) {
                                if (n) {
                                    if ("[object Date]" === y.call(e)) return a(e, n, r);
                                    if (typeof e === B) return s(e, n, r)
                                }
                                return e !== t ? e : ""
                            };
                        X && (w = function(t, n, r) {
                            return e.isPlainObject(r) && (r = r.name), X.format(t, n, r)
                        }), z.format = function(e) {
                            var t = arguments;
                            return e.replace(L, function(e, n, r) {
                                var i = t[parseInt(n, 10) + 1];
                                return w(i, r ? r.substring(1) : "")
                            })
                        }, z._extractFormat = function(e) {
                            return "{0:" === e.slice(0, 3) && (e = e.slice(3, e.length - 1)), e
                        }, z._activeElement = function() {
                            try {
                                return document.activeElement
                            } catch (e) {
                                return document.documentElement.activeElement
                            }
                        }, z._round = b, z.toString = w
                    }(),
                    function() {
                        function n(e, t, n) {
                            return !(e >= t && n >= e)
                        }

                        function r(e) {
                            return e.charAt(0)
                        }

                        function i(t) {
                            return e.map(t, r)
                        }

                        function o(e, t) {
                            t || 23 !== e.getHours() || e.setHours(e.getHours() + 2)
                        }

                        function a(e) {
                            for (var t = 0, n = e.length, r = []; n > t; t++) r[t] = (e[t] + "").toLowerCase();
                            return r
                        }

                        function s(e) {
                            var t, n = {};
                            for (t in e) n[t] = a(e[t]);
                            return n
                        }

                        function l(e, r, a) {
                            if (!e) return null;
                            var l, u, c, d, h, g, m, v, y, b, w, k, x, T, S = function(e) {
                                    for (var t = 0; r[H] === e;) t++, H++;
                                    return t > 0 && (H -= 1), t
                                },
                                C = function(t) {
                                    var n = _[t] || new RegExp("^\\d{1," + t + "}"),
                                        r = e.substr(F, t).match(n);
                                    return r ? (r = r[0], F += r.length, parseInt(r, 10)) : null
                                },
                                M = function(t, n) {
                                    for (var r, i, o, a = 0, s = t.length; s > a; a++)
                                        if (r = t[a], i = r.length, o = e.substr(F, i), n && (o = o.toLowerCase()), o == r) return F += i, a + 1;
                                    return null
                                },
                                j = function() {
                                    var t = !1;
                                    return e.charAt(F) === r[H] && (F++, t = !0), t
                                },
                                z = a.calendars.standard,
                                E = null,
                                O = null,
                                D = null,
                                P = null,
                                A = null,
                                I = null,
                                N = null,
                                H = 0,
                                F = 0,
                                L = !1,
                                R = new Date,
                                q = z.twoDigitYearMax || 2029,
                                W = R.getFullYear();
                            for (r || (r = "d"), d = z.patterns[r], d && (r = d), r = r.split(""), c = r.length; c > H; H++)
                                if (l = r[H], L) "'" === l ? L = !1 : j();
                                else if ("d" === l) {
                                if (u = S("d"), z._lowerDays || (z._lowerDays = s(z.days)), D = 3 > u ? C(2) : M(z._lowerDays[3 == u ? "namesAbbr" : "names"], !0), null === D || n(D, 1, 31)) return null
                            } else if ("M" === l) {
                                if (u = S("M"), z._lowerMonths || (z._lowerMonths = s(z.months)), O = 3 > u ? C(2) : M(z._lowerMonths[3 == u ? "namesAbbr" : "names"], !0), null === O || n(O, 1, 12)) return null;
                                O -= 1
                            } else if ("y" === l) {
                                if (u = S("y"), E = C(u), null === E) return null;
                                2 == u && ("string" == typeof q && (q = W + parseInt(q, 10)), E = W - W % 100 + E, E > q && (E -= 100))
                            } else if ("h" === l) {
                                if (S("h"), P = C(2), 12 == P && (P = 0), null === P || n(P, 0, 11)) return null
                            } else if ("H" === l) {
                                if (S("H"), P = C(2), null === P || n(P, 0, 23)) return null
                            } else if ("m" === l) {
                                if (S("m"), A = C(2), null === A || n(A, 0, 59)) return null
                            } else if ("s" === l) {
                                if (S("s"), I = C(2), null === I || n(I, 0, 59)) return null
                            } else if ("f" === l) {
                                if (u = S("f"), T = e.substr(F, u).match(_[3]), N = C(u), null !== N && (T = T[0].length, 3 > T && (N *= Math.pow(10, 3 - T)), u > 3 && (N = parseInt(N.toString().substring(0, 3), 10))), null === N || n(N, 0, 999)) return null
                            } else if ("t" === l) {
                                if (u = S("t"), y = z.AM, b = z.PM, 1 === u && (y = i(y), b = i(b)), h = M(b), !h && !M(y)) return null
                            } else if ("z" === l) {
                                if (g = !0, u = S("z"), "Z" === e.substr(F, 1)) {
                                    if (!m) return null;
                                    j();
                                    continue
                                }
                                if (v = e.substr(F, 6).match(u > 2 ? p : f), !v) return null;
                                if (v = v[0], F = v.length, v = v.split(":"), w = parseInt(v[0], 10), n(w, -12, 13)) return null;
                                if (u > 2 && (k = parseInt(v[1], 10), isNaN(k) || n(k, 0, 59))) return null
                            } else if ("T" === l) m = j();
                            else if ("'" === l) L = !0, j();
                            else if (!j()) return null;
                            return x = null !== P || null !== A || I || null, null === E && null === O && null === D && x ? (E = W, O = R.getMonth(), D = R.getDate()) : (null === E && (E = W), null === D && (D = 1)), h && 12 > P && (P += 12), g ? (w && (P += -w), k && (A += -k), e = new Date(Date.UTC(E, O, D, P, A, I, N))) : (e = new Date(E, O, D, P, A, I, N), o(e, P)), 100 > E && e.setFullYear(E), e.getDate() !== D && g === t ? null : e
                        }

                        function u(e) {
                            var t = "-" === e.substr(0, 1) ? -1 : 1;
                            return e = e.substring(1), e = 60 * parseInt(e.substr(0, 2), 10) + parseInt(e.substring(2), 10), t * e
                        }
                        var c = /\u00A0/g,
                            d = /[eE][\-+]?[0-9]+/,
                            f = /[+|\-]\d{1,2}/,
                            p = /[+|\-]\d{1,2}:\d{2}/,
                            h = /^\/Date\((.*?)\)\/$/,
                            g = /[+-]\d*/,
                            m = ["G", "g", "d", "F", "D", "y", "m", "T", "t"],
                            _ = {
                                2: /^\d{1,2}/,
                                3: /^\d{1,3}/,
                                4: /^\d{4}/
                            },
                            v = {}.toString;
                        z.parseDate = function(e, t, n) {
                            if ("[object Date]" === v.call(e)) return e;
                            var r, i, o, a = 0,
                                s = null;
                            if (e && 0 === e.indexOf("/D") && (s = h.exec(e))) return s = s[1], o = g.exec(s.substring(1)), s = new Date(parseInt(s, 10)), o && (o = u(o[0]), s = z.timezone.apply(s, 0), s = z.timezone.convert(s, 0, -1 * o)), s;
                            if (n = z.getCulture(n), !t) {
                                for (t = [], i = n.calendar.patterns, r = m.length; r > a; a++) t[a] = i[m[a]];
                                a = 0, t = ["yyyy/MM/dd HH:mm:ss", "yyyy/MM/dd HH:mm", "yyyy/MM/dd", "ddd MMM dd yyyy HH:mm:ss", "yyyy-MM-ddTHH:mm:ss.fffffffzzz", "yyyy-MM-ddTHH:mm:ss.fffzzz", "yyyy-MM-ddTHH:mm:sszzz", "yyyy-MM-ddTHH:mmzzz", "yyyy-MM-ddTHH:mmzz", "yyyy-MM-ddTHH:mm:ss", "yyyy-MM-ddTHH:mm", "yyyy-MM-dd HH:mm:ss", "yyyy-MM-dd HH:mm", "yyyy-MM-dd", "HH:mm:ss", "HH:mm"].concat(t)
                            }
                            for (t = D(t) ? t : [t], r = t.length; r > a; a++)
                                if (s = l(e, t[a], n)) return s;
                            return s
                        }, z.parseInt = function(e, t) {
                            var n = z.parseFloat(e, t);
                            return n && (n = 0 | n), n
                        }, z.parseFloat = function(e, t, n) {
                            if (!e && 0 !== e) return null;
                            if (typeof e === B) return e;
                            e = e.toString(), t = z.getCulture(t);
                            var r, i, o = t.numberFormat,
                                a = o.percent,
                                s = o.currency,
                                l = s.symbol,
                                u = a.symbol,
                                f = e.indexOf("-");
                            return d.test(e) ? (e = parseFloat(e.replace(o["."], ".")), isNaN(e) && (e = null), e) : f > 0 ? null : (f = f > -1, e.indexOf(l) > -1 || n && n.toLowerCase().indexOf("c") > -1 ? (o = s, r = o.pattern[0].replace("$", l).split("n"), e.indexOf(r[0]) > -1 && e.indexOf(r[1]) > -1 && (e = e.replace(r[0], "").replace(r[1], ""), f = !0)) : e.indexOf(u) > -1 && (i = !0, o = a, l = u), e = e.replace("-", "").replace(l, "").replace(c, " ").split(o[","].replace(c, " ")).join("").replace(o["."], "."), e = parseFloat(e), isNaN(e) ? e = null : f && (e *= -1), e && i && (e /= 100), e)
                        }, X && (z.parseDate = function(e, t, n) {
                            return "[object Date]" === v.call(e) ? e : X.parseDate(e, t, n)
                        }, z.parseFloat = function(n, r) {
                            return typeof n === B ? n : n === t || null === n ? null : (e.isPlainObject(r) && (r = r.name), n = X.parseFloat(n, r), isNaN(n) ? null : n)
                        })
                    }(),
                    function() {
                        H.scrollbar = function() {
                            var e, t = document.createElement("div");
                            return t.style.cssText = "overflow:scroll;overflow-x:hidden;zoom:1;clear:both", t.innerHTML = "&nbsp;", document.body.appendChild(t), e = t.offsetWidth - t.scrollWidth, document.body.removeChild(t), e
                        }, H.isRtl = function(t) {
                            return e(t).closest(".k-rtl").length > 0
                        };
                        var n = document.createElement("table");
                        try {
                            n.innerHTML = "<tr><td></td></tr>", H.tbodyInnerHtml = !0
                        } catch (r) {
                            H.tbodyInnerHtml = !1
                        }
                        H.touch = "ontouchstart" in window, H.msPointers = window.MSPointerEvent, H.pointers = window.PointerEvent;
                        var i = H.transitions = !1,
                            o = H.transforms = !1,
                            a = "HTMLElement" in window ? HTMLElement.prototype : [];
                        H.hasHW3D = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix || "MozPerspective" in document.documentElement.style || "msPerspective" in document.documentElement.style, O(["Moz", "webkit", "O", "ms"], function() {
                            var e = this.toString(),
                                t = typeof n.style[e + "Transition"] === U;
                            if (t || typeof n.style[e + "Transform"] === U) {
                                var r = e.toLowerCase();
                                return o = {
                                    css: "ms" != r ? "-" + r + "-" : "",
                                    prefix: e,
                                    event: "o" === r || "webkit" === r ? r : ""
                                }, t && (i = o, i.event = i.event ? i.event + "TransitionEnd" : "transitionend"), !1
                            }
                        }), n = null, H.transforms = o, H.transitions = i, H.devicePixelRatio = window.devicePixelRatio === t ? 1 : window.devicePixelRatio;
                        try {
                            H.screenWidth = window.outerWidth || window.screen ? window.screen.availWidth : window.innerWidth, H.screenHeight = window.outerHeight || window.screen ? window.screen.availHeight : window.innerHeight
                        } catch (r) {
                            H.screenWidth = window.screen.availWidth, H.screenHeight = window.screen.availHeight
                        }
                        H.detectOS = function(e) {
                            var t, n = !1,
                                r = [],
                                i = !/mobile safari/i.test(e),
                                o = {
                                    fire: /(Silk)\/(\d+)\.(\d+(\.\d+)?)/,
                                    android: /(Android|Android.*(?:Opera|Firefox).*?\/)\s*(\d+)\.(\d+(\.\d+)?)/,
                                    iphone: /(iPhone|iPod).*OS\s+(\d+)[\._]([\d\._]+)/,
                                    ipad: /(iPad).*OS\s+(\d+)[\._]([\d_]+)/,
                                    meego: /(MeeGo).+NokiaBrowser\/(\d+)\.([\d\._]+)/,
                                    webos: /(webOS)\/(\d+)\.(\d+(\.\d+)?)/,
                                    blackberry: /(BlackBerry|BB10).*?Version\/(\d+)\.(\d+(\.\d+)?)/,
                                    playbook: /(PlayBook).*?Tablet\s*OS\s*(\d+)\.(\d+(\.\d+)?)/,
                                    wp: /(Windows Phone(?: OS)?)\s(\d+)\.(\d+(\.\d+)?)/,
                                    windows: /(MSIE)\s+(\d+)\.(\d+(\.\d+)?)/,
                                    tizen: /(tizen).*?Version\/(\d+)\.(\d+(\.\d+)?)/i,
                                    sailfish: /(sailfish).*rv:(\d+)\.(\d+(\.\d+)?).*firefox/i,
                                    ffos: /(Mobile).*rv:(\d+)\.(\d+(\.\d+)?).*Firefox/
                                },
                                a = {
                                    ios: /^i(phone|pad|pod)$/i,
                                    android: /^android|fire$/i,
                                    blackberry: /^blackberry|playbook/i,
                                    windows: /windows/,
                                    wp: /wp/,
                                    flat: /sailfish|ffos|tizen/i,
                                    meego: /meego/
                                },
                                s = {
                                    tablet: /playbook|ipad|fire/i
                                },
                                l = {
                                    omini: /Opera\sMini/i,
                                    omobile: /Opera\sMobi/i,
                                    firefox: /Firefox|Fennec/i,
                                    mobilesafari: /version\/.*safari/i,
                                    chrome: /chrome|crios/i,
                                    webkit: /webkit/i,
                                    ie: /MSIE|Windows\sPhone/i
                                };
                            for (var c in o)
                                if (o.hasOwnProperty(c) && (r = e.match(o[c]))) {
                                    if ("windows" == c && "plugins" in navigator) return !1;
                                    n = {}, n.device = c, n.tablet = u(c, s, !1), n.browser = u(e, l, "default"), n.name = u(c, a), n[n.name] = !0, n.majorVersion = r[2], n.minorVersion = r[3].replace("_", "."), t = n.minorVersion.replace(".", "").substr(0, 2), n.flatVersion = n.majorVersion + t + new Array(3 - (t.length < 3 ? t.length : 2)).join("0"), n.cordova = typeof window.PhoneGap !== V || typeof window.cordova !== V, n.appMode = window.navigator.standalone || /file|local|wmapp/.test(window.location.protocol) || n.cordova, n.android && (H.devicePixelRatio < 1.5 && n.flatVersion < 400 || i) && (H.screenWidth > 800 || H.screenHeight > 800) && (n.tablet = c);
                                    break
                                }
                            return n
                        };
                        var s = H.mobileOS = H.detectOS(navigator.userAgent);
                        H.wpDevicePixelRatio = s.wp ? screen.width / 320 : 0, H.kineticScrollNeeded = s && (H.touch || H.msPointers || H.pointers), H.hasNativeScrolling = !1, (s.ios || s.android && s.majorVersion > 2 || s.wp) && (H.hasNativeScrolling = s), H.mouseAndTouchPresent = H.touch && !(H.mobileOS.ios || H.mobileOS.android), H.detectBrowser = function(e) {
                                var t = !1,
                                    n = [],
                                    r = {
                                        webkit: /(chrome)[ \/]([\w.]+)/i,
                                        safari: /(webkit)[ \/]([\w.]+)/i,
                                        opera: /(opera)(?:.*version|)[ \/]([\w.]+)/i,
                                        msie: /(msie\s|trident.*? rv:)([\w.]+)/i,
                                        mozilla: /(mozilla)(?:.*? rv:([\w.]+)|)/i
                                    };
                                for (var i in r)
                                    if (r.hasOwnProperty(i) && (n = e.match(r[i]))) {
                                        t = {}, t[i] = !0, t[n[1].toLowerCase()] = !0, t.version = parseInt(document.documentMode || n[2], 10);
                                        break
                                    }
                                return t
                            }, H.browser = H.detectBrowser(navigator.userAgent), H.zoomLevel = function() {
                                try {
                                    return H.touch ? document.documentElement.clientWidth / window.innerWidth : H.browser.msie && H.browser.version >= 10 ? (top || window).document.documentElement.offsetWidth / (top || window).innerWidth : 1
                                } catch (e) {
                                    return 1
                                }
                            }, H.cssBorderSpacing = "undefined" != typeof document.documentElement.style.borderSpacing && !(H.browser.msie && H.browser.version < 8),
                            function(t) {
                                var n = "",
                                    r = e(document.documentElement),
                                    i = parseInt(t.version, 10);
                                t.msie ? n = "ie" : t.mozilla ? n = "ff" : t.safari ? n = "safari" : t.webkit ? n = "webkit" : t.opera && (n = "opera"), n && (n = "k-" + n + " k-" + n + i), H.mobileOS && (n += " k-mobile"), r.addClass(n)
                            }(H.browser), H.eventCapture = document.documentElement.addEventListener;
                        var l = document.createElement("input");
                        H.placeholder = "placeholder" in l, H.propertyChangeEvent = "onpropertychange" in l, H.input = function() {
                            for (var e, t = ["number", "date", "time", "month", "week", "datetime", "datetime-local"], n = t.length, r = "test", i = {}, o = 0; n > o; o++) e = t[o], l.setAttribute("type", e), l.value = r, i[e.replace("-", "")] = "text" !== l.type && l.value !== r;
                            return i
                        }(), l.style.cssText = "float:left;", H.cssFloat = !!l.style.cssFloat, l = null, H.stableSort = function() {
                            for (var e = 513, t = [{
                                    index: 0,
                                    field: "b"
                                }], n = 1; e > n; n++) t.push({
                                index: n,
                                field: "a"
                            });
                            return t.sort(function(e, t) {
                                return e.field > t.field ? 1 : e.field < t.field ? -1 : 0
                            }), 1 === t[0].index
                        }(), H.matchesSelector = a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector || a.matchesSelector || function(t) {
                            for (var n = document.querySelectorAll ? (this.parentNode || document).querySelectorAll(t) || [] : e(t), r = n.length; r--;)
                                if (n[r] == this) return !0;
                            return !1
                        }, H.pushState = window.history && window.history.pushState;
                        var c = document.documentMode;
                        H.hashChange = "onhashchange" in window && !(H.browser.msie && (!c || 8 >= c))
                    }();
                var ct = {
                        left: {
                            reverse: "right"
                        },
                        right: {
                            reverse: "left"
                        },
                        down: {
                            reverse: "up"
                        },
                        up: {
                            reverse: "down"
                        },
                        top: {
                            reverse: "bottom"
                        },
                        bottom: {
                            reverse: "top"
                        },
                        "in": {
                            reverse: "out"
                        },
                        out: {
                            reverse: "in"
                        }
                    },
                    dt = {};
                e.extend(dt, {
                    enabled: !0,
                    Element: function(t) {
                        this.element = e(t)
                    },
                    promise: function(e, t) {
                        e.is(":visible") || e.css({
                            display: e.data("olddisplay") || "block"
                        }).css("display"), t.hide && e.data("olddisplay", e.css("display")).hide(), t.init && t.init(), t.completeCallback && t.completeCallback(e), e.dequeue()
                    },
                    disable: function() {
                        this.enabled = !1, this.promise = this.promiseShim
                    },
                    enable: function() {
                        this.enabled = !0, this.promise = this.animatedPromise
                    }
                }), dt.promiseShim = dt.promise, "kendoAnimate" in e.fn || E(e.fn, {
                    kendoStop: function(e, t) {
                        return this.stop(e, t)
                    },
                    kendoAnimate: function(e, t, n, r) {
                        return v(this, e, t, n, r)
                    },
                    kendoAddClass: function(e, t) {
                        return z.toggleClass(this, e, t, !0)
                    },
                    kendoRemoveClass: function(e, t) {
                        return z.toggleClass(this, e, t, !1)
                    },
                    kendoToggleClass: function(e, t, n) {
                        return z.toggleClass(this, e, t, n)
                    }
                });
                var ft = /&/g,
                    pt = /</g,
                    ht = /"/g,
                    gt = /'/g,
                    mt = />/g,
                    _t = function(e) {
                        return e.target
                    };
                H.touch && (_t = function(e) {
                    var t = "originalEvent" in e ? e.originalEvent.changedTouches : "changedTouches" in e ? e.changedTouches : null;
                    return t ? document.elementFromPoint(t[0].clientX, t[0].clientY) : e.target
                }, O(["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap"], function(t, n) {
                    e.fn[n] = function(e) {
                        return this.bind(n, e)
                    }
                })), H.touch ? H.mobileOS ? (H.mousedown = "touchstart", H.mouseup = "touchend", H.mousemove = "touchmove", H.mousecancel = "touchcancel", H.click = "touchend", H.resize = "orientationchange") : (H.mousedown = "mousedown touchstart", H.mouseup = "mouseup touchend", H.mousemove = "mousemove touchmove", H.mousecancel = "mouseleave touchcancel", H.click = "click", H.resize = "resize") : H.pointers ? (H.mousemove = "pointermove", H.mousedown = "pointerdown", H.mouseup = "pointerup", H.mousecancel = "pointercancel", H.click = "pointerup", H.resize = "orientationchange resize") : H.msPointers ? (H.mousemove = "MSPointerMove", H.mousedown = "MSPointerDown", H.mouseup = "MSPointerUp", H.mousecancel = "MSPointerCancel", H.click = "MSPointerUp", H.resize = "orientationchange resize") : (H.mousemove = "mousemove", H.mousedown = "mousedown", H.mouseup = "mouseup", H.mousecancel = "mouseleave", H.click = "click", H.resize = "resize");
                var vt = function(e, t) {
                        var n, r, i, o, a = t || "d",
                            s = 1;
                        for (r = 0, i = e.length; i > r; r++) o = e[r], "" !== o && (n = o.indexOf("["), 0 !== n && (-1 == n ? o = "." + o : (s++, o = "." + o.substring(0, n) + " || {})" + o.substring(n))), s++, a += o + (i - 1 > r ? " || {})" : ")"));
                        return new Array(s).join("(") + a
                    },
                    yt = /^([a-z]+:)?\/\//i;
                E(z, {
                    ui: z.ui || {},
                    fx: z.fx || m,
                    effects: z.effects || dt,
                    mobile: z.mobile || {},
                    data: z.data || {},
                    dataviz: z.dataviz || {
                        ui: {
                            roles: {}
                        }
                    },
                    keys: {
                        INSERT: 45,
                        DELETE: 46,
                        BACKSPACE: 8,
                        TAB: 9,
                        ENTER: 13,
                        ESC: 27,
                        LEFT: 37,
                        UP: 38,
                        RIGHT: 39,
                        DOWN: 40,
                        END: 35,
                        HOME: 36,
                        SPACEBAR: 32,
                        PAGEUP: 33,
                        PAGEDOWN: 34,
                        F2: 113,
                        F10: 121,
                        F12: 123,
                        NUMPAD_PLUS: 107,
                        NUMPAD_MINUS: 109,
                        NUMPAD_DOT: 110
                    },
                    support: z.support || H,
                    animate: z.animate || v,
                    ns: "",
                    attr: function(e) {
                        return "data-" + z.ns + e
                    },
                    getShadows: o,
                    wrap: a,
                    deepExtend: s,
                    getComputedStyles: f,
                    size: p,
                    toCamelCase: d,
                    toHyphens: c,
                    getOffset: z.getOffset || h,
                    parseEffects: z.parseEffects || g,
                    toggleClass: z.toggleClass || y,
                    directions: z.directions || ct,
                    Observable: nt,
                    Class: n,
                    Template: j,
                    template: P(j.compile, j),
                    render: P(j.render, j),
                    stringify: P(N.stringify, N),
                    eventTarget: _t,
                    htmlEncode: b,
                    isLocalUrl: function(e) {
                        return e && !yt.test(e)
                    },
                    expr: function(e, t, n) {
                        return e = e || "", typeof t == U && (n = t, t = !1), n = n || "d", e && "[" !== e.charAt(0) && (e = "." + e), e = t ? vt(e.split("."), n) : n + e
                    },
                    getter: function(e, t) {
                        return K[e] = K[e] || new Function("d", "return " + z.expr(e, t))
                    },
                    setter: function(e) {
                        return Y[e] = Y[e] || new Function("d,value", z.expr(e) + "=value")
                    },
                    accessor: function(e) {
                        return {
                            get: z.getter(e),
                            set: z.setter(e)
                        }
                    },
                    guid: function() {
                        var e, t, n = "";
                        for (e = 0; 32 > e; e++) t = 16 * I.random() | 0, (8 == e || 12 == e || 16 == e || 20 == e) && (n += "-"), n += (12 == e ? 4 : 16 == e ? 3 & t | 8 : t).toString(16);
                        return n
                    },
                    roleSelector: function(e) {
                        return e.replace(/(\S+)/g, "[" + z.attr("role") + "=$1],").slice(0, -1)
                    },
                    triggeredByInput: function(e) {
                        return /^(label|input|textarea|select)$/i.test(e.target.tagName)
                    },
                    logToConsole: function(e) {
                        var t = window.console;
                        "undefined" != typeof t && t.log && t.log(e)
                    }
                });
                var bt = nt.extend({
                    init: function(e, t) {
                        var n = this;
                        n.element = z.jQuery(e).handler(n), nt.fn.init.call(n), t = n.options = E(!0, {}, n.options, t), n.element.attr(z.attr("role")) || n.element.attr(z.attr("role"), (t.name || "").toLowerCase()), n.element.data("kendo" + t.prefix + t.name, n), n.bind(n.events, t)
                    },
                    events: [],
                    options: {
                        prefix: ""
                    },
                    _hasBindingTarget: function() {
                        return !!this.element[0].kendoBindingTarget
                    },
                    _tabindex: function(e) {
                        e = e || this.wrapper;
                        var t = this.element,
                            n = "tabindex",
                            r = e.attr(n) || t.attr(n);
                        t.removeAttr(n), e.attr(n, isNaN(r) ? 0 : r)
                    },
                    setOptions: function(t) {
                        this._setEvents(t), e.extend(this.options, t)
                    },
                    _setEvents: function(e) {
                        for (var t, n = this, r = 0, i = n.events.length; i > r; r++) t = n.events[r], n.options[t] && e[t] && n.unbind(t, n.options[t]);
                        n.bind(n.events, e)
                    },
                    resize: function(e) {
                        var t = this.getSize(),
                            n = this._size;
                        (e || !n || t.width !== n.width || t.height !== n.height) && (this._resize(t), this.trigger("resize", t), this._size = t)
                    },
                    getSize: function() {
                        return z.dimensions(this.element)
                    },
                    size: function(e) {
                        return e ? void this.setSize(e) : this.getSize()
                    },
                    setSize: e.noop,
                    _resize: e.noop,
                    destroy: function() {
                        var e = this;
                        e.element.removeData("kendo" + e.options.prefix + e.options.name), e.element.removeData("handler"), e.unbind()
                    }
                });
                z.dimensions = function(e, t) {
                    var n = e[0];
                    return t && e.css(t), {
                        width: n.offsetWidth,
                        height: n.offsetHeight
                    }
                }, z.notify = A;
                var wt = /template$/i,
                    kt = /^\s*(?:\{(?:.|\r\n|\n)*\}|\[(?:.|\r\n|\n)*\])\s*$/,
                    xt = /^\{(\d+)(:[^\}]+)?\}|^\[[A-Za-z_]*\]$/,
                    Tt = /([A-Z])/g;
                z.initWidget = function(n, r, i) {
                    var o, a, s, l, u, c, d, f;
                    if (i ? i.roles && (i = i.roles) : i = z.ui.roles, n = n.nodeType ? n : n[0], c = n.getAttribute("data-" + z.ns + "role"), c && (s = -1 === c.indexOf(".") ? i[c] : z.getter(c)(window))) {
                        for (f = w(n, "dataSource"), r = e.extend({}, k(n, s.fn.options), r), f && (r.dataSource = typeof f === U ? z.getter(f)(window) : f), l = 0, u = s.fn.events.length; u > l; l++) a = s.fn.events[l], d = w(n, a), d !== t && (r[a] = z.getter(d)(window));
                        return o = e(n).data("kendo" + s.fn.options.prefix + s.fn.options.name), o ? o.setOptions(r) : o = new s(n, r), o
                    }
                }, z.rolesFromNamespaces = function(e) {
                    var t, n, r = [];
                    for (e[0] || (e = [z.ui, z.dataviz.ui]), t = 0, n = e.length; n > t; t++) r[t] = e[t].roles;
                    return E.apply(null, [{}].concat(r.reverse()))
                }, z.init = function(t) {
                    var n = z.rolesFromNamespaces(Q.call(arguments, 1));
                    e(t).find("[data-" + z.ns + "role]").addBack().each(function() {
                        z.initWidget(this, {}, n)
                    })
                }, z.destroy = function(t) {
                    e(t).find("[data-" + z.ns + "role]").addBack().each(function() {
                        var t = z.widgetInstance(e(this));
                        t && t.destroy()
                    })
                }, z.resize = function(t) {
                    var n = e(t).find("[data-" + z.ns + "role]").addBack().filter(T);
                    if (n.length) {
                        var r = e.makeArray(n);
                        r.sort(x), e.each(r, function() {
                            var t = z.widgetInstance(e(this));
                            t && t.resize()
                        })
                    }
                }, z.parseOptions = k, E(z.ui, {
                    Widget: bt,
                    roles: {},
                    progress: function(t, n) {
                        var r, i, o, a, s = t.find(".k-loading-mask"),
                            l = z.support,
                            u = l.browser;
                        n ? s.length || (r = l.isRtl(t), i = r ? "right" : "left", a = t.scrollLeft(), o = u.webkit && r ? t[0].scrollWidth - t.width() - 2 * a : 0, s = e("<div class='k-loading-mask'><span class='k-loading-text'>Loading...</span><div class='k-loading-image'/><div class='k-loading-color'/></div>").width("100%").height("100%").css("top", t.scrollTop()).css(i, Math.abs(a) + o).prependTo(t)) : s && s.remove()
                    },
                    plugin: function(n, r, i) {
                        var o, a = n.fn.options.name;
                        r = r || z.ui, i = i || "", r[a] = n, r.roles[a.toLowerCase()] = n, o = "getKendo" + i + a, a = "kendo" + i + a, e.fn[a] = function(r) {
                            var i, o = this;
                            return typeof r === U ? (i = Q.call(arguments, 1), this.each(function() {
                                var n, s, l = e.data(this, a);
                                if (!l) throw new Error(z.format("Cannot call method '{0}' of {1} before it is initialized", r, a));
                                if (n = l[r], typeof n !== W) throw new Error(z.format("Cannot find method '{0}' of {1}", r, a));
                                return s = n.apply(l, i), s !== t ? (o = s, !1) : void 0
                            })) : this.each(function() {
                                new n(this, r)
                            }), o
                        }, e.fn[o] = function() {
                            return this.data(a)
                        }
                    }
                });
                var St = {
                        bind: function() {
                            return this
                        },
                        nullObject: !0
                    },
                    Ct = bt.extend({
                        init: function(e, t) {
                            bt.fn.init.call(this, e, t), this.element.autoApplyNS(), this.wrapper = this.element, this.element.addClass("km-widget")
                        },
                        destroy: function() {
                            bt.fn.destroy.call(this), this.element.kendoDestroy()
                        },
                        options: {
                            prefix: "Mobile"
                        },
                        events: [],
                        view: function() {
                            var e = this.element.closest(z.roleSelector("view splitview modalview drawer"));
                            return z.widgetInstance(e, z.mobile.ui) || St
                        },
                        viewHasNativeScrolling: function() {
                            var e = this.view();
                            return e && e.options.useNativeScrolling
                        },
                        container: function() {
                            var e = this.element.closest(z.roleSelector("view layout modalview drawer"));
                            return z.widgetInstance(e, z.mobile.ui) || St
                        }
                    });
                E(z.mobile, {
                    init: function(e) {
                        z.init(e, z.mobile.ui, z.ui, z.dataviz.ui)
                    },
                    appLevelNativeScrolling: function() {
                        return z.mobile.application && z.mobile.application.options && z.mobile.application.options.useNativeScrolling
                    },
                    ui: {
                        Widget: Ct,
                        roles: {},
                        plugin: function(e) {
                            z.ui.plugin(e, z.mobile.ui, "Mobile")
                        }
                    }
                }), z.touchScroller = function(t, n) {
                    return e(t).map(function(t, r) {
                        return r = e(r), H.kineticScrollNeeded && z.mobile.ui.Scroller && !r.data("kendoMobileScroller") ? (r.kendoMobileScroller(n), r.data("kendoMobileScroller")) : !1
                    })[0]
                }, z.preventDefault = function(e) {
                    e.preventDefault()
                }, z.widgetInstance = function(e, t) {
                    var n, r, i = e.data(z.ns + "role"),
                        o = [];
                    if (i) {
                        if ("content" === i && (i = "scroller"), t)
                            if (t[0])
                                for (n = 0, r = t.length; r > n; n++) o.push(t[n].roles[i]);
                            else o.push(t.roles[i]);
                        else o = [z.ui.roles[i], z.dataviz.ui.roles[i], z.mobile.ui.roles[i]];
                        for (i.indexOf(".") >= 0 && (o = [z.getter(i)(window)]), n = 0, r = o.length; r > n; n++) {
                            var a = o[n];
                            if (a) {
                                var s = e.data("kendo" + a.fn.options.prefix + a.fn.options.name);
                                if (s) return s
                            }
                        }
                    }
                }, z.onResize = function(t) {
                    var n = t;
                    return H.mobileOS.android && (n = function() {
                        setTimeout(t, 600)
                    }), e(window).on(H.resize, n), n
                }, z.unbindResize = function(t) {
                    e(window).off(H.resize, t)
                }, z.attrValue = function(e, t) {
                    return e.data(z.ns + t)
                }, z.days = {
                    Sunday: 0,
                    Monday: 1,
                    Tuesday: 2,
                    Wednesday: 3,
                    Thursday: 4,
                    Friday: 5,
                    Saturday: 6
                }, e.extend(e.expr[":"], {
                    kendoFocusable: function(t) {
                        var n = e.attr(t, "tabindex");
                        return S(t, !isNaN(n) && n > -1)
                    }
                });
                var Mt = ["mousedown", "mousemove", "mouseenter", "mouseleave", "mouseover", "mouseout", "mouseup", "click"],
                    jt = "label, input, [data-rel=external]",
                    zt = {
                        setupMouseMute: function() {
                            var t = 0,
                                n = Mt.length,
                                r = document.documentElement;
                            if (!zt.mouseTrap && H.eventCapture) {
                                zt.mouseTrap = !0, zt.bustClick = !1, zt.captureMouse = !1;
                                for (var i = function(t) {
                                        zt.captureMouse && ("click" === t.type ? zt.bustClick && !e(t.target).is(jt) && (t.preventDefault(), t.stopPropagation()) : t.stopPropagation())
                                    }; n > t; t++) r.addEventListener(Mt[t], i, !0)
                            }
                        },
                        muteMouse: function(e) {
                            zt.captureMouse = !0, e.data.bustClick && (zt.bustClick = !0), clearTimeout(zt.mouseTrapTimeoutID)
                        },
                        unMuteMouse: function() {
                            clearTimeout(zt.mouseTrapTimeoutID), zt.mouseTrapTimeoutID = setTimeout(function() {
                                zt.captureMouse = !1, zt.bustClick = !1
                            }, 400)
                        }
                    },
                    Et = {
                        down: "touchstart mousedown",
                        move: "mousemove touchmove",
                        up: "mouseup touchend touchcancel",
                        cancel: "mouseleave touchcancel"
                    };
                H.touch && (H.mobileOS.ios || H.mobileOS.android) ? Et = {
                    down: "touchstart",
                    move: "touchmove",
                    up: "touchend touchcancel",
                    cancel: "touchcancel"
                } : H.pointers ? Et = {
                    down: "pointerdown",
                    move: "pointermove",
                    up: "pointerup",
                    cancel: "pointercancel pointerleave"
                } : H.msPointers && (Et = {
                    down: "MSPointerDown",
                    move: "MSPointerMove",
                    up: "MSPointerUp",
                    cancel: "MSPointerCancel MSPointerLeave"
                }), !H.msPointers || "onmspointerenter" in window || e.each({
                    MSPointerEnter: "MSPointerOver",
                    MSPointerLeave: "MSPointerOut"
                }, function(t, n) {
                    e.event.special[t] = {
                        delegateType: n,
                        bindType: n,
                        handle: function(t) {
                            var r, i = this,
                                o = t.relatedTarget,
                                a = t.handleObj;
                            return (!o || o !== i && !e.contains(i, o)) && (t.type = a.origType, r = a.handler.apply(this, arguments), t.type = n), r
                        }
                    }
                });
                var Ot = function(e) {
                        return Et[e] || e
                    },
                    Dt = /([^ ]+)/g;
                z.applyEventMap = function(e, t) {
                    return e = e.replace(Dt, Ot), t && (e = e.replace(Dt, "$1." + t)), e
                };
                var Pt = e.fn.on;
                E(!0, M, e), M.fn = M.prototype = new e, M.fn.constructor = M, M.fn.init = function(t, n) {
                    return n && n instanceof e && !(n instanceof M) && (n = M(n)), e.fn.init.call(this, t, n, At)
                }, M.fn.init.prototype = M.fn;
                var At = M(document);
                E(M.fn, {
                    handler: function(e) {
                        return this.data("handler", e), this
                    },
                    autoApplyNS: function(e) {
                        return this.data("kendoNS", e || z.guid()), this
                    },
                    on: function() {
                        var e = this,
                            t = e.data("kendoNS");
                        if (1 === arguments.length) return Pt.call(e, arguments[0]);
                        var n = e,
                            r = Q.call(arguments);
                        typeof r[r.length - 1] === V && r.pop();
                        var i = r[r.length - 1],
                            o = z.applyEventMap(r[0], t);
                        if (H.mouseAndTouchPresent && o.search(/mouse|click/) > -1 && this[0] !== document.documentElement) {
                            zt.setupMouseMute();
                            var a = 2 === r.length ? null : r[1],
                                s = o.indexOf("click") > -1 && o.indexOf("touchend") > -1;
                            Pt.call(this, {
                                touchstart: zt.muteMouse,
                                touchend: zt.unMuteMouse
                            }, a, {
                                bustClick: s
                            })
                        }
                        return typeof i === U && (n = e.data("handler"), i = n[i], r[r.length - 1] = function(e) {
                            i.call(n, e)
                        }), r[0] = o, Pt.apply(e, r), e
                    },
                    kendoDestroy: function(e) {
                        return e = e || this.data("kendoNS"), e && this.off("." + e), this
                    }
                }), z.jQuery = M, z.eventMap = Et, z.timezone = function() {
                    function e(e, t) {
                        var n, r, i, o = t[3],
                            a = t[4],
                            s = t[5],
                            l = t[8];
                        return l || (t[8] = l = {}), l[e] ? l[e] : (isNaN(a) ? 0 === a.indexOf("last") ? (n = new Date(Date.UTC(e, c[o] + 1, 1, s[0] - 24, s[1], s[2], 0)), r = d[a.substr(4, 3)], i = n.getUTCDay(), n.setUTCDate(n.getUTCDate() + r - i - (r > i ? 7 : 0))) : a.indexOf(">=") >= 0 && (n = new Date(Date.UTC(e, c[o], a.substr(5), s[0], s[1], s[2], 0)), r = d[a.substr(0, 3)], i = n.getUTCDay(), n.setUTCDate(n.getUTCDate() + r - i + (i > r ? 7 : 0))) : n = new Date(Date.UTC(e, c[o], a, s[0], s[1], s[2], 0)), l[e] = n)
                    }

                    function t(t, n, r) {
                        if (n = n[r], !n) {
                            var i = r.split(":"),
                                o = 0;
                            return i.length > 1 && (o = 60 * i[0] + Number(i[1])), [-1e6, "max", "-", "Jan", 1, [0, 0, 0], o, "-"]
                        }
                        var a = new Date(t).getUTCFullYear();
                        n = jQuery.grep(n, function(e) {
                            var t = e[0],
                                n = e[1];
                            return a >= t && (n >= a || t == a && "only" == n || "max" == n)
                        }), n.push(t), n.sort(function(t, n) {
                            return "number" != typeof t && (t = Number(e(a, t))), "number" != typeof n && (n = Number(e(a, n))), t - n
                        });
                        var s = n[jQuery.inArray(t, n) - 1] || n[n.length - 1];
                        return isNaN(s) ? s : null
                    }

                    function n(e, t, n) {
                        var r = t[n];
                        if ("string" == typeof r && (r = t[r]), !r) throw new Error('Timezone "' + n + '" is either incorrect, or kendo.timezones.min.js is not included.');
                        for (var i = r.length - 1; i >= 0; i--) {
                            var o = r[i][3];
                            if (o && e > o) break
                        }
                        var a = r[i + 1];
                        if (!a) throw new Error('Timezone "' + n + '" not found on ' + e + ".");
                        return a
                    }

                    function r(e, r, i, o) {
                        typeof e != B && (e = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
                        var a = n(e, r, o);
                        return {
                            zone: a,
                            rule: t(e, i, a[1])
                        }
                    }

                    function i(e, t) {
                        if ("Etc/UTC" == t || "Etc/GMT" == t) return 0;
                        var n = r(e, this.zones, this.rules, t),
                            i = n.zone,
                            o = n.rule;
                        return o ? i[0] - o[6] : i[0]
                    }

                    function o(e, t) {
                        var n = r(e, this.zones, this.rules, t),
                            i = n.zone,
                            o = n.rule,
                            a = i[2];
                        return a.indexOf("/") >= 0 ? a.split("/")[o && +o[6] ? 1 : 0] : a.indexOf("%s") >= 0 ? a.replace("%s", o && "-" != o[7] ? o[7] : "") : a
                    }

                    function a(e, t, n) {
                        typeof t == U && (t = this.offset(e, t)), typeof n == U && (n = this.offset(e, n));
                        var r = e.getTimezoneOffset();
                        e = new Date(e.getTime() + 6e4 * (t - n));
                        var i = e.getTimezoneOffset();
                        return new Date(e.getTime() + 6e4 * (i - r))
                    }

                    function s(e, t) {
                        return this.convert(e, e.getTimezoneOffset(), t)
                    }

                    function l(e, t) {
                        return this.convert(e, t, e.getTimezoneOffset())
                    }

                    function u(e) {
                        return this.apply(new Date(e), "Etc/UTC")
                    }
                    var c = {
                            Jan: 0,
                            Feb: 1,
                            Mar: 2,
                            Apr: 3,
                            May: 4,
                            Jun: 5,
                            Jul: 6,
                            Aug: 7,
                            Sep: 8,
                            Oct: 9,
                            Nov: 10,
                            Dec: 11
                        },
                        d = {
                            Sun: 0,
                            Mon: 1,
                            Tue: 2,
                            Wed: 3,
                            Thu: 4,
                            Fri: 5,
                            Sat: 6
                        };
                    return {
                        zones: {},
                        rules: {},
                        offset: i,
                        convert: a,
                        apply: s,
                        remove: l,
                        abbr: o,
                        toLocalDate: u
                    }
                }(), z.date = function() {
                    function e(e, t) {
                        return 0 === t && 23 === e.getHours() ? (e.setHours(e.getHours() + 2), !0) : !1
                    }

                    function t(t, n, r) {
                        var i = t.getHours();
                        r = r || 1, n = (n - t.getDay() + 7 * r) % 7, t.setDate(t.getDate() + n), e(t, i)
                    }

                    function n(e, n, r) {
                        return e = new Date(e), t(e, n, r), e
                    }

                    function r(e) {
                        return new Date(e.getFullYear(), e.getMonth(), 1)
                    }

                    function i(e) {
                        var t = new Date(e.getFullYear(), e.getMonth() + 1, 0),
                            n = r(e),
                            i = Math.abs(t.getTimezoneOffset() - n.getTimezoneOffset());
                        return i && t.setHours(n.getHours() + i / 60), t
                    }

                    function o(t) {
                        return t = new Date(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0, 0), e(t, 0), t
                    }

                    function a(e) {
                        return Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds())
                    }

                    function s(e) {
                        return e.getTime() - o(e)
                    }

                    function l(e, t, n) {
                        var r, i = s(t),
                            o = s(n);
                        return e && i != o ? (t >= n && (n += m), r = s(e), i > r && (r += m), i > o && (o += m), r >= i && o >= r) : !0
                    }

                    function u(e, t, n) {
                        var r, i = t.getTime(),
                            o = n.getTime();
                        return i >= o && (o += m), r = e.getTime(), r >= i && o >= r
                    }

                    function c(t, n) {
                        var r = t.getHours();
                        return t = new Date(t), d(t, n * m), e(t, r), t
                    }

                    function d(e, t, n) {
                        var r, i = e.getTimezoneOffset();
                        e.setTime(e.getTime() + t), n || (r = e.getTimezoneOffset() - i, e.setTime(e.getTime() + r * g))
                    }

                    function f() {
                        return o(new Date)
                    }

                    function p(e) {
                        return o(e).getTime() == f().getTime()
                    }

                    function h(e) {
                        var t = new Date(1980, 1, 1, 0, 0, 0);
                        return e && t.setHours(e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()), t
                    }
                    var g = 6e4,
                        m = 864e5;
                    return {
                        adjustDST: e,
                        dayOfWeek: n,
                        setDayOfWeek: t,
                        getDate: o,
                        isInDateRange: u,
                        isInTimeRange: l,
                        isToday: p,
                        nextDay: function(e) {
                            return c(e, 1)
                        },
                        previousDay: function(e) {
                            return c(e, -1)
                        },
                        toUtcTime: a,
                        MS_PER_DAY: m,
                        MS_PER_HOUR: 60 * g,
                        MS_PER_MINUTE: g,
                        setTime: d,
                        addDays: c,
                        today: f,
                        toInvariantTime: h,
                        firstDayOfMonth: r,
                        lastDayOfMonth: i,
                        getMilliseconds: s
                    }
                }(), z.stripWhitespace = function(e) {
                    if (document.createNodeIterator)
                        for (var t = document.createNodeIterator(e, NodeFilter.SHOW_TEXT, function(t) {
                                return t.parentNode == e ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
                            }, !1); t.nextNode();) t.referenceNode && !t.referenceNode.textContent.trim() && t.referenceNode.parentNode.removeChild(t.referenceNode);
                    else
                        for (var n = 0; n < e.childNodes.length; n++) {
                            var r = e.childNodes[n];
                            3 != r.nodeType || /\S/.test(r.nodeValue) || (e.removeChild(r), n--), 1 == r.nodeType && z.stripWhitespace(r)
                        }
                };
                var It = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
                    setTimeout(e, 1e3 / 60)
                };
                z.animationFrame = function(e) {
                    It.call(window, e)
                };
                var Nt = [];
                z.queueAnimation = function(e) {
                    Nt[Nt.length] = e, 1 === Nt.length && z.runNextAnimation()
                }, z.runNextAnimation = function() {
                    z.animationFrame(function() {
                        Nt[0] && (Nt.shift()(), Nt[0] && z.runNextAnimation())
                    })
                }, z.parseQueryStringParams = function(e) {
                    for (var t = e.split("?")[1] || "", n = {}, r = t.split(/&|=/), i = r.length, o = 0; i > o; o += 2) "" !== r[o] && (n[decodeURIComponent(r[o])] = decodeURIComponent(r[o + 1]));
                    return n
                }, z.elementUnderCursor = function(e) {
                    return document.elementFromPoint(e.x.client, e.y.client)
                }, z.wheelDeltaY = function(e) {
                    var n, r = e.originalEvent,
                        i = r.wheelDeltaY;
                    return r.wheelDelta ? (i === t || i) && (n = r.wheelDelta) : r.detail && r.axis === r.VERTICAL_AXIS && (n = 10 * -r.detail), n
                }, z.caret = function(n, r, i) {
                    var o, a = r !== t;
                    if (i === t && (i = r), n[0] && (n = n[0]), !a || !n.disabled) {
                        try {
                            if (n.selectionStart !== t) a ? (n.focus(), n.setSelectionRange(r, i)) : r = [n.selectionStart, n.selectionEnd];
                            else if (document.selection)
                                if (e(n).is(":visible") && n.focus(), o = n.createTextRange(), a) o.collapse(!0), o.moveStart("character", r), o.moveEnd("character", i - r), o.select();
                                else {
                                    var s, l, u = o.duplicate();
                                    o.moveToBookmark(document.selection.createRange().getBookmark()), u.setEndPoint("EndToStart", o), s = u.text.length, l = s + o.text.length, r = [s, l]
                                }
                        } catch (c) {
                            r = []
                        }
                        return r
                    }
                }
            }(jQuery), window.kendo
        }, "function" == typeof _dfn && _dfn.amd ? _dfn : function(e, t) {
            t()
        }),
        function(e, t) {
            t("kendo/kendo.userevents", ["./kendo.core"], e)
        }(function() {
            return function(e) {
                function t(e, t) {
                    var n = e.x.location,
                        r = e.y.location,
                        i = t.x.location,
                        o = t.y.location,
                        a = n - i,
                        s = r - o;
                    return {
                        center: {
                            x: (n + i) / 2,
                            y: (r + o) / 2
                        },
                        distance: Math.sqrt(a * a + s * s)
                    }
                }

                function n(e) {
                    var t, n, r, i = [],
                        o = e.originalEvent,
                        s = e.currentTarget,
                        l = 0;
                    if (e.api) i.push({
                        id: 2,
                        event: e,
                        target: e.target,
                        currentTarget: e.target,
                        location: e
                    });
                    else if (e.type.match(/touch/))
                        for (n = o ? o.changedTouches : [], t = n.length; t > l; l++) r = n[l], i.push({
                            location: r,
                            event: e,
                            target: r.target,
                            currentTarget: s,
                            id: r.identifier
                        });
                    else i.push(a.pointers || a.msPointers ? {
                        location: o,
                        event: e,
                        target: e.target,
                        currentTarget: s,
                        id: o.pointerId
                    } : {
                        id: 1,
                        event: e,
                        target: e.target,
                        currentTarget: s,
                        location: e
                    });
                    return i
                }

                function r(t) {
                    t.preventDefault();
                    var n = e(t.data.root),
                        r = n.closest(".k-widget").parent();
                    r[0] || (r = n.parent());
                    var i = e.extend(!0, {}, t, {
                        target: n[0]
                    });
                    r.trigger(e.Event(t.type, i))
                }

                function i(e) {
                    for (var t = o.eventMap.up.split(" "), n = 0, r = t.length; r > n; n++) e(t[n])
                }
                var o = window.kendo,
                    a = o.support,
                    s = window.document,
                    l = o.Class,
                    u = o.Observable,
                    c = e.now,
                    d = e.extend,
                    f = a.mobileOS,
                    p = f && f.android,
                    h = 800,
                    g = a.browser.msie ? 5 : 0,
                    m = "press",
                    _ = "hold",
                    v = "select",
                    y = "start",
                    b = "move",
                    w = "end",
                    k = "cancel",
                    x = "tap",
                    T = "release",
                    S = "gesturestart",
                    C = "gesturechange",
                    M = "gestureend",
                    j = "gesturetap",
                    z = l.extend({
                        init: function(e, t) {
                            var n = this;
                            n.axis = e, n._updateLocationData(t), n.startLocation = n.location, n.velocity = n.delta = 0, n.timeStamp = c()
                        },
                        move: function(e) {
                            var t = this,
                                n = e["page" + t.axis],
                                r = c(),
                                i = r - t.timeStamp || 1;
                            (n || !p) && (t.delta = n - t.location, t._updateLocationData(e), t.initialDelta = n - t.startLocation, t.velocity = t.delta / i, t.timeStamp = r)
                        },
                        _updateLocationData: function(e) {
                            var t = this,
                                n = t.axis;
                            t.location = e["page" + n], t.client = e["client" + n], t.screen = e["screen" + n]
                        }
                    }),
                    E = l.extend({
                        init: function(e, t, n) {
                            d(this, {
                                x: new z("X", n.location),
                                y: new z("Y", n.location),
                                userEvents: e,
                                target: t,
                                currentTarget: n.currentTarget,
                                initialTouch: n.target,
                                id: n.id,
                                pressEvent: n,
                                _moved: !1,
                                _finished: !1
                            })
                        },
                        press: function() {
                            this._holdTimeout = setTimeout(e.proxy(this, "_hold"), this.userEvents.minHold), this._trigger(m, this.pressEvent)
                        },
                        _hold: function() {
                            this._trigger(_, this.pressEvent)
                        },
                        move: function(e) {
                            var t = this;
                            if (!t._finished) {
                                if (t.x.move(e.location), t.y.move(e.location), !t._moved) {
                                    if (t._withinIgnoreThreshold()) return;
                                    if (O.current && O.current !== t.userEvents) return t.dispose();
                                    t._start(e)
                                }
                                t._finished || t._trigger(b, e)
                            }
                        },
                        end: function(e) {
                            var t = this;
                            t.endTime = c(), t._finished || (t._finished = !0, t._moved ? t._trigger(w, e) : t._trigger(x, e), clearTimeout(t._holdTimeout), t._trigger(T, e), t.dispose())
                        },
                        dispose: function() {
                            var t = this.userEvents,
                                n = t.touches;
                            this._finished = !0, this.pressEvent = null, clearTimeout(this._holdTimeout), n.splice(e.inArray(this, n), 1)
                        },
                        skip: function() {
                            this.dispose()
                        },
                        cancel: function() {
                            this.dispose()
                        },
                        isMoved: function() {
                            return this._moved
                        },
                        _start: function(e) {
                            clearTimeout(this._holdTimeout), this.startTime = c(), this._moved = !0, this._trigger(y, e)
                        },
                        _trigger: function(e, t) {
                            var n = this,
                                r = t.event,
                                i = {
                                    touch: n,
                                    x: n.x,
                                    y: n.y,
                                    target: n.target,
                                    event: r
                                };
                            n.userEvents.notify(e, i) && r.preventDefault()
                        },
                        _withinIgnoreThreshold: function() {
                            var e = this.x.initialDelta,
                                t = this.y.initialDelta;
                            return Math.sqrt(e * e + t * t) <= this.userEvents.threshold
                        }
                    }),
                    O = u.extend({
                        init: function(t, n) {
                            var r, l = this,
                                c = o.guid();
                            if (n = n || {}, r = l.filter = n.filter, l.threshold = n.threshold || g, l.minHold = n.minHold || h, l.touches = [], l._maxTouches = n.multiTouch ? 2 : 1, l.allowSelection = n.allowSelection, l.captureUpIfMoved = n.captureUpIfMoved, l.eventNS = c, t = e(t).handler(l), u.fn.init.call(l), d(l, {
                                    element: t,
                                    surface: e(n.global ? s.documentElement : n.surface || t),
                                    stopPropagation: n.stopPropagation,
                                    pressed: !1
                                }), l.surface.handler(l).on(o.applyEventMap("move", c), "_move").on(o.applyEventMap("up cancel", c), "_end"), t.on(o.applyEventMap("down", c), r, "_start"), (a.pointers || a.msPointers) && t.css("-ms-touch-action", "pinch-zoom double-tap-zoom"), n.preventDragEvent && t.on(o.applyEventMap("dragstart", c), o.preventDefault), t.on(o.applyEventMap("mousedown selectstart", c), r, {
                                    root: t
                                }, "_select"), l.captureUpIfMoved && a.eventCapture) {
                                var f = l.surface[0],
                                    p = e.proxy(l.preventIfMoving, l);
                                i(function(e) {
                                    f.addEventListener(e, p, !0)
                                })
                            }
                            l.bind([m, _, x, y, b, w, T, k, S, C, M, j, v], n)
                        },
                        preventIfMoving: function(e) {
                            this._isMoved() && e.preventDefault()
                        },
                        destroy: function() {
                            var e = this;
                            if (!e._destroyed) {
                                if (e._destroyed = !0, e.captureUpIfMoved && a.eventCapture) {
                                    var t = e.surface[0];
                                    i(function(n) {
                                        t.removeEventListener(n, e.preventIfMoving)
                                    })
                                }
                                e.element.kendoDestroy(e.eventNS), e.surface.kendoDestroy(e.eventNS), e.element.removeData("handler"), e.surface.removeData("handler"), e._disposeAll(), e.unbind(), delete e.surface, delete e.element, delete e.currentTarget
                            }
                        },
                        capture: function() {
                            O.current = this
                        },
                        cancel: function() {
                            this._disposeAll(), this.trigger(k)
                        },
                        notify: function(e, n) {
                            var r = this,
                                i = r.touches;
                            if (this._isMultiTouch()) {
                                switch (e) {
                                    case b:
                                        e = C;
                                        break;
                                    case w:
                                        e = M;
                                        break;
                                    case x:
                                        e = j
                                }
                                d(n, {
                                    touches: i
                                }, t(i[0], i[1]))
                            }
                            return this.trigger(e, n)
                        },
                        press: function(e, t, n) {
                            this._apiCall("_start", e, t, n)
                        },
                        move: function(e, t) {
                            this._apiCall("_move", e, t)
                        },
                        end: function(e, t) {
                            this._apiCall("_end", e, t)
                        },
                        _isMultiTouch: function() {
                            return this.touches.length > 1
                        },
                        _maxTouchesReached: function() {
                            return this.touches.length >= this._maxTouches
                        },
                        _disposeAll: function() {
                            for (var e = this.touches; e.length > 0;) e.pop().dispose()
                        },
                        _isMoved: function() {
                            return e.grep(this.touches, function(e) {
                                return e.isMoved()
                            }).length
                        },
                        _select: function(e) {
                            (!this.allowSelection || this.trigger(v, {
                                event: e
                            })) && r(e)
                        },
                        _start: function(t) {
                            var r, i, o = this,
                                a = 0,
                                s = o.filter,
                                l = n(t),
                                u = l.length,
                                c = t.which;
                            if (!(c && c > 1 || o._maxTouchesReached()))
                                for (O.current = null, o.currentTarget = t.currentTarget, o.stopPropagation && t.stopPropagation(); u > a && !o._maxTouchesReached(); a++) i = l[a], r = s ? e(i.currentTarget) : o.element, r.length && (i = new E(o, r, i), o.touches.push(i), i.press(), o._isMultiTouch() && o.notify("gesturestart", {}))
                        },
                        _move: function(e) {
                            this._eachTouch("move", e)
                        },
                        _end: function(e) {
                            this._eachTouch("end", e)
                        },
                        _eachTouch: function(e, t) {
                            var r, i, o, a, s = this,
                                l = {},
                                u = n(t),
                                c = s.touches;
                            for (r = 0; r < c.length; r++) i = c[r], l[i.id] = i;
                            for (r = 0; r < u.length; r++) o = u[r], a = l[o.id], a && a[e](o)
                        },
                        _apiCall: function(t, n, r, i) {
                            this[t]({
                                api: !0,
                                pageX: n,
                                pageY: r,
                                clientX: n,
                                clientY: r,
                                target: e(i || this.element)[0],
                                stopPropagation: e.noop,
                                preventDefault: e.noop
                            })
                        }
                    });
                O.minHold = function(e) {
                    h = e
                }, o.getTouches = n, o.touchDelta = t, o.UserEvents = O
            }(window.kendo.jQuery), window.kendo
        }, "function" == typeof _dfn && _dfn.amd ? _dfn : function(e, t) {
            t()
        }),
        function(e, t) {
            t("kendo/kendo.draganddrop", ["./kendo.core", "./kendo.userevents"], e)
        }(function() {
            return function(e, t) {
                function n(t, n) {
                    try {
                        return e.contains(t, n) || t == n
                    } catch (r) {
                        return !1
                    }
                }

                function r(e, t) {
                    return parseInt(e.css(t), 10) || 0
                }

                function i(e, t) {
                    return Math.min(Math.max(e, t.min), t.max)
                }

                function o(e, t) {
                    var n = v(e),
                        i = n.left + r(e, "borderLeftWidth") + r(e, "paddingLeft"),
                        o = n.top + r(e, "borderTopWidth") + r(e, "paddingTop"),
                        a = i + e.width() - t.outerWidth(!0),
                        s = o + e.height() - t.outerHeight(!0);
                    return {
                        x: {
                            min: i,
                            max: a
                        },
                        y: {
                            min: o,
                            max: s
                        }
                    }
                }

                function a(e, n, r) {
                    for (var i, o, a = 0, s = n && n.length, l = r && r.length; e && e.parentNode;) {
                        for (a = 0; s > a; a++)
                            if (i = n[a], i.element[0] === e) return {
                                target: i,
                                targetElement: e
                            };
                        for (a = 0; l > a; a++)
                            if (o = r[a], c.matchesSelector.call(e, o.options.filter)) return {
                                target: o,
                                targetElement: e
                            };
                        e = e.parentNode
                    }
                    return t
                }
                var s, l, u = window.kendo,
                    c = u.support,
                    d = window.document,
                    f = u.Class,
                    p = u.ui.Widget,
                    h = u.Observable,
                    g = u.UserEvents,
                    m = e.proxy,
                    _ = e.extend,
                    v = u.getOffset,
                    y = {},
                    b = {},
                    w = {},
                    k = u.elementUnderCursor,
                    x = "keyup",
                    T = "change",
                    S = "dragstart",
                    C = "hold",
                    M = "drag",
                    j = "dragend",
                    z = "dragcancel",
                    E = "dragenter",
                    O = "dragleave",
                    D = "drop",
                    P = h.extend({
                        init: function(t, n) {
                            var r = this,
                                i = t[0];
                            r.capture = !1, i.addEventListener ? (e.each(u.eventMap.down.split(" "), function() {
                                i.addEventListener(this, m(r._press, r), !0)
                            }), e.each(u.eventMap.up.split(" "), function() {
                                i.addEventListener(this, m(r._release, r), !0)
                            })) : (e.each(u.eventMap.down.split(" "), function() {
                                i.attachEvent(this, m(r._press, r))
                            }), e.each(u.eventMap.up.split(" "), function() {
                                i.attachEvent(this, m(r._release, r))
                            })), h.fn.init.call(r), r.bind(["press", "release"], n || {})
                        },
                        captureNext: function() {
                            this.capture = !0
                        },
                        cancelCapture: function() {
                            this.capture = !1
                        },
                        _press: function(e) {
                            var t = this;
                            t.trigger("press"), t.capture && e.preventDefault()
                        },
                        _release: function(e) {
                            var t = this;
                            t.trigger("release"), t.capture && (e.preventDefault(), t.cancelCapture())
                        }
                    }),
                    A = h.extend({
                        init: function(t) {
                            var n = this;
                            h.fn.init.call(n), n.forcedEnabled = !1, e.extend(n, t), n.scale = 1, n.horizontal ? (n.measure = "offsetWidth", n.scrollSize = "scrollWidth", n.axis = "x") : (n.measure = "offsetHeight", n.scrollSize = "scrollHeight", n.axis = "y")
                        },
                        makeVirtual: function() {
                            e.extend(this, {
                                virtual: !0,
                                forcedEnabled: !0,
                                _virtualMin: 0,
                                _virtualMax: 0
                            })
                        },
                        virtualSize: function(e, t) {
                            (this._virtualMin !== e || this._virtualMax !== t) && (this._virtualMin = e, this._virtualMax = t, this.update())
                        },
                        outOfBounds: function(e) {
                            return e > this.max || e < this.min
                        },
                        forceEnabled: function() {
                            this.forcedEnabled = !0
                        },
                        getSize: function() {
                            return this.container[0][this.measure]
                        },
                        getTotal: function() {
                            return this.element[0][this.scrollSize]
                        },
                        rescale: function(e) {
                            this.scale = e
                        },
                        update: function(e) {
                            var t = this,
                                n = t.virtual ? t._virtualMax : t.getTotal(),
                                r = n * t.scale,
                                i = t.getSize();
                            t.max = t.virtual ? -t._virtualMin : 0, t.size = i, t.total = r, t.min = Math.min(t.max, i - r), t.minScale = i / n, t.centerOffset = (r - i) / 2, t.enabled = t.forcedEnabled || r > i, e || t.trigger(T, t)
                        }
                    }),
                    I = h.extend({
                        init: function(e) {
                            var t = this;
                            h.fn.init.call(t), t.x = new A(_({
                                horizontal: !0
                            }, e)), t.y = new A(_({
                                horizontal: !1
                            }, e)), t.container = e.container, t.forcedMinScale = e.minScale, t.maxScale = e.maxScale || 100, t.bind(T, e)
                        },
                        rescale: function(e) {
                            this.x.rescale(e), this.y.rescale(e), this.refresh()
                        },
                        centerCoordinates: function() {
                            return {
                                x: Math.min(0, -this.x.centerOffset),
                                y: Math.min(0, -this.y.centerOffset)
                            }
                        },
                        refresh: function() {
                            var e = this;
                            e.x.update(), e.y.update(), e.enabled = e.x.enabled || e.y.enabled, e.minScale = e.forcedMinScale || Math.min(e.x.minScale, e.y.minScale), e.fitScale = Math.max(e.x.minScale, e.y.minScale), e.trigger(T)
                        }
                    }),
                    N = h.extend({
                        init: function(e) {
                            var t = this;
                            _(t, e), h.fn.init.call(t)
                        },
                        outOfBounds: function() {
                            return this.dimension.outOfBounds(this.movable[this.axis])
                        },
                        dragMove: function(e) {
                            var t = this,
                                n = t.dimension,
                                r = t.axis,
                                i = t.movable,
                                o = i[r] + e;
                            n.enabled && ((o < n.min && 0 > e || o > n.max && e > 0) && (e *= t.resistance), i.translateAxis(r, e), t.trigger(T, t))
                        }
                    }),
                    H = f.extend({
                        init: function(e) {
                            var t, n, r, i, o = this;
                            _(o, {
                                elastic: !0
                            }, e), r = o.elastic ? .5 : 0, i = o.movable, o.x = t = new N({
                                axis: "x",
                                dimension: o.dimensions.x,
                                resistance: r,
                                movable: i
                            }), o.y = n = new N({
                                axis: "y",
                                dimension: o.dimensions.y,
                                resistance: r,
                                movable: i
                            }), o.userEvents.bind(["move", "end", "gesturestart", "gesturechange"], {
                                gesturestart: function(e) {
                                    o.gesture = e, o.offset = o.dimensions.container.offset()
                                },
                                gesturechange: function(e) {
                                    var r, a = o.gesture,
                                        s = a.center,
                                        l = e.center,
                                        u = e.distance / a.distance,
                                        c = o.dimensions.minScale,
                                        d = o.dimensions.maxScale;
                                    i.scale <= c && 1 > u && (u += .8 * (1 - u)), i.scale * u >= d && (u = d / i.scale);
                                    var f = i.x + o.offset.left,
                                        p = i.y + o.offset.top;
                                    r = {
                                        x: (f - s.x) * u + l.x - f,
                                        y: (p - s.y) * u + l.y - p
                                    }, i.scaleWith(u), t.dragMove(r.x), n.dragMove(r.y), o.dimensions.rescale(i.scale), o.gesture = e, e.preventDefault()
                                },
                                move: function(e) {
                                    e.event.target.tagName.match(/textarea|input/i) || (t.dimension.enabled || n.dimension.enabled ? (t.dragMove(e.x.delta), n.dragMove(e.y.delta), e.preventDefault()) : e.touch.skip())
                                },
                                end: function(e) {
                                    e.preventDefault()
                                }
                            })
                        }
                    }),
                    F = c.transitions.prefix + "Transform";
                l = c.hasHW3D ? function(e, t, n) {
                    return "translate3d(" + e + "px," + t + "px,0) scale(" + n + ")"
                } : function(e, t, n) {
                    return "translate(" + e + "px," + t + "px) scale(" + n + ")"
                };
                var L = h.extend({
                        init: function(t) {
                            var n = this;
                            h.fn.init.call(n), n.element = e(t), n.element[0].style.webkitTransformOrigin = "left top", n.x = 0, n.y = 0, n.scale = 1, n._saveCoordinates(l(n.x, n.y, n.scale))
                        },
                        translateAxis: function(e, t) {
                            this[e] += t, this.refresh()
                        },
                        scaleTo: function(e) {
                            this.scale = e, this.refresh()
                        },
                        scaleWith: function(e) {
                            this.scale *= e, this.refresh()
                        },
                        translate: function(e) {
                            this.x += e.x, this.y += e.y, this.refresh()
                        },
                        moveAxis: function(e, t) {
                            this[e] = t, this.refresh()
                        },
                        moveTo: function(e) {
                            _(this, e), this.refresh()
                        },
                        refresh: function() {
                            var e, t = this,
                                n = t.x,
                                r = t.y;
                            t.round && (n = Math.round(n), r = Math.round(r)), e = l(n, r, t.scale), e != t.coordinates && (u.support.browser.msie && u.support.browser.version < 10 ? (t.element[0].style.position = "absolute", t.element[0].style.left = t.x + "px", t.element[0].style.top = t.y + "px") : t.element[0].style[F] = e, t._saveCoordinates(e), t.trigger(T))
                        },
                        _saveCoordinates: function(e) {
                            this.coordinates = e
                        }
                    }),
                    R = p.extend({
                        init: function(e, t) {
                            var n = this;
                            p.fn.init.call(n, e, t);
                            var r = n.options.group;
                            r in b ? b[r].push(n) : b[r] = [n]
                        },
                        events: [E, O, D],
                        options: {
                            name: "DropTarget",
                            group: "default"
                        },
                        destroy: function() {
                            var e, t = this.options.group,
                                n = b[t] || w[t];
                            if (n.length > 1) {
                                for (p.fn.destroy.call(this), e = 0; e < n.length; e++)
                                    if (n[e] == this) {
                                        n.splice(e, 1);
                                        break
                                    }
                            } else R.destroyGroup(t)
                        },
                        _trigger: function(e, t) {
                            var n = this,
                                r = y[n.options.group];
                            return r ? n.trigger(e, _({}, t.event, {
                                draggable: r,
                                dropTarget: t.dropTarget
                            })) : void 0
                        },
                        _over: function(e) {
                            this._trigger(E, e)
                        },
                        _out: function(e) {
                            this._trigger(O, e)
                        },
                        _drop: function(e) {
                            var t = this,
                                n = y[t.options.group];
                            n && (n.dropped = !t._trigger(D, e))
                        }
                    });
                R.destroyGroup = function(e) {
                    var t, n = b[e] || w[e];
                    if (n) {
                        for (t = 0; t < n.length; t++) p.fn.destroy.call(n[t]);
                        n.length = 0, delete b[e], delete w[e]
                    }
                }, R._cache = b;
                var q = R.extend({
                        init: function(e, t) {
                            var n = this;
                            p.fn.init.call(n, e, t);
                            var r = n.options.group;
                            r in w ? w[r].push(n) : w[r] = [n]
                        },
                        options: {
                            name: "DropTargetArea",
                            group: "default",
                            filter: null
                        }
                    }),
                    W = p.extend({
                        init: function(e, t) {
                            var n = this;
                            p.fn.init.call(n, e, t), n._activated = !1, n.userEvents = new g(n.element, {
                                global: !0,
                                allowSelection: !0,
                                stopPropagation: !0,
                                filter: n.options.filter,
                                threshold: n.options.distance,
                                start: m(n._start, n),
                                hold: m(n._hold, n),
                                move: m(n._drag, n),
                                end: m(n._end, n),
                                cancel: m(n._cancel, n),
                                select: m(n._select, n)
                            }), n._afterEndHandler = m(n._afterEnd, n), n.captureEscape = function(e) {
                                e.keyCode === u.keys.ESC && (n._trigger(z, {
                                    event: e
                                }), n.userEvents.cancel())
                            }
                        },
                        events: [C, S, M, j, z],
                        options: {
                            name: "Draggable",
                            distance: 5,
                            group: "default",
                            cursorOffset: null,
                            axis: null,
                            container: null,
                            filter: null,
                            ignore: null,
                            holdToDrag: !1,
                            dropped: !1
                        },
                        cancelHold: function() {
                            this._activated = !1
                        },
                        _updateHint: function(t) {
                            var n, r = this,
                                o = r.options,
                                a = r.boundaries,
                                s = o.axis,
                                l = r.options.cursorOffset;
                            l ? n = {
                                left: t.x.location + l.left,
                                top: t.y.location + l.top
                            } : (r.hintOffset.left += t.x.delta, r.hintOffset.top += t.y.delta, n = e.extend({}, r.hintOffset)), a && (n.top = i(n.top, a.y), n.left = i(n.left, a.x)), "x" === s ? delete n.top : "y" === s && delete n.left, r.hint.css(n)
                        },
                        _shouldIgnoreTarget: function(t) {
                            var n = this.options.ignore;
                            return n && e(t).is(n)
                        },
                        _select: function(e) {
                            this._shouldIgnoreTarget(e.event.target) || e.preventDefault()
                        },
                        _start: function(t) {
                            var n = this,
                                r = n.options,
                                i = r.container,
                                a = r.hint;
                            if (this._shouldIgnoreTarget(t.touch.initialTouch) || r.holdToDrag && !n._activated) return void n.userEvents.cancel();
                            if (n.currentTarget = t.target, n.currentTargetOffset = v(n.currentTarget), a) {
                                n.hint && n.hint.stop(!0, !0).remove(), n.hint = u.isFunction(a) ? e(a.call(n, n.currentTarget)) : a;
                                var s = v(n.currentTarget);
                                n.hintOffset = s, n.hint.css({
                                    position: "absolute",
                                    zIndex: 2e4,
                                    left: s.left,
                                    top: s.top
                                }).appendTo(d.body)
                            }
                            y[r.group] = n, n.dropped = !1, i && (n.boundaries = o(i, n.hint)), n._trigger(S, t) && (n.userEvents.cancel(), n._afterEnd()), e(d).on(x, n.captureEscape)
                        },
                        _hold: function(e) {
                            this.currentTarget = e.target, this._trigger(C, e) ? this.userEvents.cancel() : this._activated = !0
                        },
                        _drag: function(t) {
                            var n = this;
                            t.preventDefault(), n._withDropTarget(t, function(n, r) {
                                if (!n) return void(s && (s._trigger(O, _(t, {
                                    dropTarget: e(s.targetElement)
                                })), s = null));
                                if (s) {
                                    if (r === s.targetElement) return;
                                    s._trigger(O, _(t, {
                                        dropTarget: e(s.targetElement)
                                    }))
                                }
                                n._trigger(E, _(t, {
                                    dropTarget: e(r)
                                })), s = _(n, {
                                    targetElement: r
                                })
                            }), n._trigger(M, t), n.hint && n._updateHint(t)
                        },
                        _end: function(t) {
                            var n = this;
                            n._withDropTarget(t, function(n, r) {
                                n && (n._drop(_({}, t, {
                                    dropTarget: e(r)
                                })), s = null)
                            }), n._trigger(j, t), n._cancel(t.event)
                        },
                        _cancel: function() {
                            var e = this;
                            e._activated = !1, e.hint && !e.dropped ? setTimeout(function() {
                                e.hint.stop(!0, !0).animate(e.currentTargetOffset, "fast", e._afterEndHandler)
                            }, 0) : e._afterEnd()
                        },
                        _trigger: function(e, t) {
                            var n = this;
                            return n.trigger(e, _({}, t.event, {
                                x: t.x,
                                y: t.y,
                                currentTarget: n.currentTarget,
                                dropTarget: t.dropTarget
                            }))
                        },
                        _withDropTarget: function(e, t) {
                            var r, i, o = this,
                                s = o.options,
                                l = b[s.group],
                                u = w[s.group];
                            (l && l.length || u && u.length) && (r = k(e), o.hint && n(o.hint[0], r) && (o.hint.hide(), r = k(e), r || (r = k(e)), o.hint.show()), i = a(r, l, u), i ? t(i.target, i.targetElement) : t())
                        },
                        destroy: function() {
                            var e = this;
                            p.fn.destroy.call(e), e._afterEnd(), e.userEvents.destroy(), e.currentTarget = null
                        },
                        _afterEnd: function() {
                            var t = this;
                            t.hint && t.hint.remove(), delete y[t.options.group], t.trigger("destroy"), e(d).off(x, t.captureEscape)
                        }
                    });
                u.ui.plugin(R), u.ui.plugin(q), u.ui.plugin(W), u.TapCapture = P, u.containerBoundaries = o, _(u.ui, {
                    Pane: H,
                    PaneDimensions: I,
                    Movable: L
                })
            }(window.kendo.jQuery), window.kendo
        }, "function" == typeof _dfn && _dfn.amd ? _dfn : function(e, t) {
            t()
        }),
        function(e, t) {
            t("kendo/kendo.window", ["./kendo.draganddrop"], e)
        }(function() {
            return function(e, t) {
                function n(e) {
                    return "undefined" != typeof e
                }

                function r(e, t, n) {
                    return Math.max(Math.min(parseInt(e, 10), 1 / 0 === n ? n : parseInt(n, 10)), parseInt(t, 10))
                }

                function i(e, t) {
                    return function() {
                        var n = this,
                            r = n.wrapper,
                            i = r[0].style,
                            o = n.options;
                        if (!o.isMaximized && !o.isMinimized) return n.restoreOptions = {
                            width: i.width,
                            height: i.height
                        }, r.children(T).hide().end().children(k).find(G).parent().hide().eq(0).before(l.action({
                            name: "Restore"
                        })), t.call(n), "maximize" == e ? n.wrapper.children(k).find(V).parent().hide() : n.wrapper.children(k).find(V).parent().show(), n
                    }
                }

                function o() {
                    return !this.type || this.type.toLowerCase().indexOf("script") >= 0
                }

                function a(e) {
                    this.owner = e, this._draggable = new d(e.wrapper, {
                        filter: T,
                        group: e.wrapper.id + "-resizing",
                        dragstart: h(this.dragstart, this),
                        drag: h(this.drag, this),
                        dragend: h(this.dragend, this)
                    })
                }

                function s(e, t) {
                    this.owner = e, this._draggable = new d(e.wrapper, {
                        filter: t,
                        group: e.wrapper.id + "-moving",
                        dragstart: h(this.dragstart, this),
                        drag: h(this.drag, this),
                        dragend: h(this.dragend, this),
                        dragcancel: h(this.dragcancel, this)
                    }), this._draggable.userEvents.stopPropagation = !1
                }
                var l, u = window.kendo,
                    c = u.ui.Widget,
                    d = u.ui.Draggable,
                    f = e.isPlainObject,
                    p = u._activeElement,
                    h = e.proxy,
                    g = e.extend,
                    m = e.each,
                    _ = u.template,
                    v = "body",
                    y = ".kendoWindow",
                    b = ".k-window",
                    w = ".k-window-title",
                    k = w + "bar",
                    x = ".k-window-content",
                    T = ".k-resize-handle",
                    S = ".k-overlay",
                    C = "k-content-frame",
                    M = "k-loading",
                    j = "k-state-hover",
                    z = "k-state-focused",
                    E = "k-window-maximized",
                    O = ":visible",
                    D = "hidden",
                    P = "cursor",
                    A = "open",
                    I = "activate",
                    N = "deactivate",
                    H = "close",
                    F = "refresh",
                    L = "resize",
                    R = "dragstart",
                    q = "dragend",
                    W = "error",
                    U = "overflow",
                    B = "zIndex",
                    G = ".k-window-actions .k-i-minimize,.k-window-actions .k-i-maximize",
                    $ = ".k-i-pin",
                    J = ".k-i-unpin",
                    V = $ + "," + J,
                    K = ".k-window-titlebar .k-window-action",
                    Y = ".k-window-titlebar .k-i-refresh",
                    Q = u.isLocalUrl,
                    X = c.extend({
                        init: function(r, i) {
                            var a, s, l, d, p, g, m, _ = this,
                                v = {},
                                T = !1,
                                S = i && i.actions && !i.actions.length;
                            c.fn.init.call(_, r, i), i = _.options, d = i.position, r = _.element, p = i.content, S && (i.actions = []), _.appendTo = e(i.appendTo), _._animations(), p && !f(p) && (p = i.content = {
                                url: p
                            }), r.find("script").filter(o).remove(), r.parent().is(_.appendTo) || d.top !== t && d.left !== t || (r.is(O) ? (v = r.offset(), T = !0) : (s = r.css("visibility"), l = r.css("display"), r.css({
                                visibility: D,
                                display: ""
                            }), v = r.offset(), r.css({
                                visibility: s,
                                display: l
                            })), d.top === t && (d.top = v.top), d.left === t && (d.left = v.left)), n(i.visible) && null !== i.visible || (i.visible = r.is(O)), a = _.wrapper = r.closest(b), r.is(".k-content") && a[0] || (r.addClass("k-window-content k-content"), _._createWindow(r, i), a = _.wrapper = r.closest(b), _._dimensions()), _._position(), i.pinned && _.pin(!0), p && _.refresh(p), i.visible && _.toFront(), g = a.children(x), _._tabindex(g), i.visible && i.modal && _._overlay(a.is(O)).css({
                                opacity: .5
                            }), a.on("mouseenter" + y, K, h(_._buttonEnter, _)).on("mouseleave" + y, K, h(_._buttonLeave, _)).on("click" + y, "> " + K, h(_._windowActionHandler, _)), g.on("keydown" + y, h(_._keydown, _)).on("focus" + y, h(_._focus, _)).on("blur" + y, h(_._blur, _)), this._resizable(), this._draggable(), m = r.attr("id"), m && (m += "_wnd_title", a.children(k).children(w).attr("id", m), g.attr({
                                role: "dialog",
                                "aria-labelledby": m
                            })), a.add(a.children(".k-resize-handle," + k)).on("mousedown" + y, h(_.toFront, _)), _.touchScroller = u.touchScroller(r), _._resizeHandler = h(_._onDocumentResize, _), e(window).on("resize", _._resizeHandler), i.visible && (_.trigger(A), _.trigger(I)), u.notify(_)
                        },
                        _buttonEnter: function() {
                            e(this).addClass(j)
                        },
                        _buttonLeave: function() {
                            e(this).removeClass(j)
                        },
                        _focus: function() {
                            this.wrapper.addClass(z)
                        },
                        _blur: function() {
                            this.wrapper.removeClass(z)
                        },
                        _dimensions: function() {
                            var e = this.wrapper,
                                t = this.options,
                                n = t.width,
                                i = t.height,
                                o = t.maxHeight,
                                a = ["minWidth", "minHeight", "maxWidth", "maxHeight"];
                            this.title(t.title);
                            for (var s = 0; s < a.length; s++) {
                                var l = t[a[s]];
                                l && 1 / 0 != l && e.css(a[s], l)
                            }
                            o && 1 / 0 != o && this.element.css("maxHeight", o), n && e.width(n.toString().indexOf("%") > 0 ? n : r(n, t.minWidth, t.maxWidth)), i && e.height(i.toString().indexOf("%") > 0 ? i : r(i, t.minHeight, t.maxHeight)), t.visible || e.hide()
                        },
                        _position: function() {
                            var e = this.wrapper,
                                t = this.options.position;
                            0 === t.top && (t.top = t.top.toString()), 0 === t.left && (t.left = t.left.toString()), e.css({
                                top: t.top || "",
                                left: t.left || ""
                            })
                        },
                        _animations: function() {
                            var e = this.options;
                            e.animation === !1 && (e.animation = {
                                open: {
                                    effects: {}
                                },
                                close: {
                                    hide: !0,
                                    effects: {}
                                }
                            })
                        },
                        _resize: function() {
                            u.resize(this.element.children())
                        },
                        _resizable: function() {
                            var t = this.options.resizable,
                                n = this.wrapper;
                            this.resizing && (n.off("dblclick" + y).children(T).remove(), this.resizing.destroy(), this.resizing = null), t && (n.on("dblclick" + y, k, h(function(t) {
                                e(t.target).closest(".k-window-action").length || this.toggleMaximization()
                            }, this)), m("n e s w se sw ne nw".split(" "), function(e, t) {
                                n.append(l.resizeHandle(t))
                            }), this.resizing = new a(this)), n = null
                        },
                        _draggable: function() {
                            var e = this.options.draggable;
                            this.dragging && (this.dragging.destroy(), this.dragging = null), e && (this.dragging = new s(this, e.dragHandle || k))
                        },
                        setOptions: function(e) {
                            c.fn.setOptions.call(this, e), this._animations(), this._dimensions(), this._position(), this._resizable(), this._draggable()
                        },
                        events: [A, I, N, H, F, L, R, q, W],
                        options: {
                            name: "Window",
                            animation: {
                                open: {
                                    effects: {
                                        zoom: {
                                            direction: "in"
                                        },
                                        fade: {
                                            direction: "in"
                                        }
                                    },
                                    duration: 350
                                },
                                close: {
                                    effects: {
                                        zoom: {
                                            direction: "out",
                                            properties: {
                                                scale: .7
                                            }
                                        },
                                        fade: {
                                            direction: "out"
                                        }
                                    },
                                    duration: 350,
                                    hide: !0
                                }
                            },
                            title: "",
                            actions: ["Close"],
                            autoFocus: !0,
                            modal: !1,
                            resizable: !0,
                            draggable: !0,
                            minWidth: 90,
                            minHeight: 50,
                            maxWidth: 1 / 0,
                            maxHeight: 1 / 0,
                            pinned: !1,
                            position: {},
                            content: null,
                            visible: null,
                            height: null,
                            width: null,
                            appendTo: "body"
                        },
                        _closable: function() {
                            return e.inArray("close", e.map(this.options.actions, function(e) {
                                return e.toLowerCase()
                            })) > -1
                        },
                        _keydown: function(e) {
                            var t, n, i, o, a, s, l = this,
                                c = l.options,
                                d = u.keys,
                                f = e.keyCode,
                                p = l.wrapper,
                                h = 10,
                                g = l.options.isMaximized;
                            e.target != e.currentTarget || l._closing || (f == d.ESC && l._closable() && l._close(!1), !c.draggable || e.ctrlKey || g || (t = u.getOffset(p), f == d.UP ? n = p.css("top", t.top - h) : f == d.DOWN ? n = p.css("top", t.top + h) : f == d.LEFT ? n = p.css("left", t.left - h) : f == d.RIGHT && (n = p.css("left", t.left + h))), c.resizable && e.ctrlKey && !g && (f == d.UP ? (n = !0, o = p.height() - h) : f == d.DOWN && (n = !0, o = p.height() + h), f == d.LEFT ? (n = !0, i = p.width() - h) : f == d.RIGHT && (n = !0, i = p.width() + h), n && (a = r(i, c.minWidth, c.maxWidth), s = r(o, c.minHeight, c.maxHeight), isNaN(a) || (p.width(a), l.options.width = a + "px"), isNaN(s) || (p.height(s), l.options.height = s + "px"), l.resize())), n && e.preventDefault())
                        },
                        _overlay: function(t) {
                            var n = this.appendTo.children(S),
                                r = this.wrapper;
                            return n.length || (n = e("<div class='k-overlay' />")), n.insertBefore(r[0]).toggle(t).css(B, parseInt(r.css(B), 10) - 1), n
                        },
                        _actionForIcon: function(e) {
                            var t = /\bk-i-\w+\b/.exec(e[0].className)[0];
                            return {
                                "k-i-close": "_close",
                                "k-i-maximize": "maximize",
                                "k-i-minimize": "minimize",
                                "k-i-restore": "restore",
                                "k-i-refresh": "refresh",
                                "k-i-pin": "pin",
                                "k-i-unpin": "unpin"
                            }[t]
                        },
                        _windowActionHandler: function(t) {
                            if (!this._closing) {
                                var n = e(t.target).closest(".k-window-action").find(".k-icon"),
                                    r = this._actionForIcon(n);
                                return r ? (t.preventDefault(), this[r](), !1) : void 0
                            }
                        },
                        _modals: function() {
                            var t = this,
                                n = e(b).filter(function() {
                                    var n = e(this),
                                        r = t._object(n),
                                        i = r && r.options;
                                    return i && i.modal && i.visible && n.is(O)
                                }).sort(function(t, n) {
                                    return +e(t).css("zIndex") - +e(n).css("zIndex")
                                });
                            return t = null, n
                        },
                        _object: function(e) {
                            var t = e.children(x);
                            return t.data("kendoWindow") || t.data("kendo" + this.options.name)
                        },
                        center: function() {
                            var t, n, r = this,
                                i = r.options.position,
                                o = r.wrapper,
                                a = e(window),
                                s = 0,
                                l = 0;
                            return r.options.isMaximized ? r : (r.options.pinned || (s = a.scrollTop(), l = a.scrollLeft()), n = l + Math.max(0, (a.width() - o.width()) / 2), t = s + Math.max(0, (a.height() - o.height() - parseInt(o.css("paddingTop"), 10)) / 2), o.css({
                                left: n,
                                top: t
                            }), i.top = t, i.left = n, r)
                        },
                        title: function(e) {
                            var t = this,
                                n = t.wrapper,
                                r = t.options,
                                i = n.children(k),
                                o = i.children(w),
                                a = i.outerHeight();
                            return arguments.length ? (e === !1 ? (n.addClass("k-window-titleless"), i.remove()) : (i.length || n.prepend(l.titlebar(g(l, r))), n.css("padding-top", a), i.css("margin-top", -a)), o.text(e), t.options.title = e, t) : o.text()
                        },
                        content: function(e) {
                            var t = this.wrapper.children(x),
                                r = t.children(".km-scroll-container");
                            return t = r[0] ? r : t, n(e) ? (u.destroy(this.element.children()), t.empty().html(e), this) : t.html()
                        },
                        open: function() {
                            var t, n = this,
                                r = n.wrapper,
                                i = n.options,
                                o = i.animation.open,
                                a = r.children(x);
                            if (!n.trigger(A)) {
                                if (n._closing && r.kendoStop(!0, !0), n._closing = !1, n.toFront(), i.autoFocus && n.element.focus(), i.visible = !0, i.modal) {
                                    if (t = n._overlay(!1), t.kendoStop(!0, !0), o.duration && u.effects.Fade) {
                                        var s = u.fx(t).fadeIn();
                                        s.duration(o.duration || 0), s.endValue(.5), s.play()
                                    } else t.css("opacity", .5);
                                    t.show()
                                }
                                r.is(O) || (a.css(U, D), r.show().kendoStop().kendoAnimate({
                                    effects: o.effects,
                                    duration: o.duration,
                                    complete: h(this._activate, this)
                                }))
                            }
                            return i.isMaximized && (n._documentScrollTop = e(document).scrollTop(), e("html, body").css(U, D)), n
                        },
                        _activate: function() {
                            this.options.autoFocus && this.element.focus(), this.trigger(I), this.wrapper.children(x).css(U, "")
                        },
                        _removeOverlay: function(n) {
                            var r = this._modals(),
                                i = this.options,
                                o = i.modal && !r.length,
                                a = i.modal ? this._overlay(!0) : e(t),
                                s = i.animation.close;
                            if (o)
                                if (!n && s.duration && u.effects.Fade) {
                                    var l = u.fx(a).fadeOut();
                                    l.duration(s.duration || 0), l.startValue(.5), l.play()
                                } else this._overlay(!1).remove();
                            else r.length && this._object(r.last())._overlay(!0)
                        },
                        _close: function(t) {
                            var n = this,
                                r = n.wrapper,
                                i = n.options,
                                o = i.animation.open,
                                a = i.animation.close;
                            r.is(O) && !n.trigger(H, {
                                userTriggered: !t
                            }) && (n._closing = !0, i.visible = !1, e(b).each(function(t, n) {
                                var i = e(n).children(x);
                                n != r && i.find("> ." + C).length > 0 && i.children(S).remove()
                            }), this._removeOverlay(), r.kendoStop().kendoAnimate({
                                effects: a.effects || o.effects,
                                reverse: a.reverse === !0,
                                duration: a.duration,
                                complete: h(this._deactivate, this)
                            })), n.options.isMaximized && (e("html, body").css(U, ""), n._documentScrollTop && n._documentScrollTop > 0 && e(document).scrollTop(n._documentScrollTop))
                        },
                        _deactivate: function() {
                            this.wrapper.hide().css("opacity", ""), this.trigger(N);
                            var e = this._object(this._modals().last());
                            e && e.toFront()
                        },
                        close: function() {
                            return this._close(!0), this
                        },
                        _actionable: function(t) {
                            return e(t).is(K + "," + K + " .k-icon,:input,a")
                        },
                        _shouldFocus: function(t) {
                            var n = p(),
                                r = this.element;
                            return !(!this.options.autoFocus || e(n).is(r) || this._actionable(t) || r.find(n).length && r.find(t).length)
                        },
                        toFront: function(t) {
                            var n = this,
                                r = n.wrapper,
                                i = r[0],
                                o = +r.css(B),
                                a = o,
                                s = t && t.target || null;
                            if (e(b).each(function(t, n) {
                                    var r = e(n),
                                        a = r.css(B),
                                        s = r.children(x);
                                    isNaN(a) || (o = Math.max(+a, o)), n != i && s.find("> ." + C).length > 0 && s.append(l.overlay)
                                }), (!r[0].style.zIndex || o > a) && r.css(B, o + 2), n.element.find("> .k-overlay").remove(), n._shouldFocus(s)) {
                                n.element.focus();
                                var u = e(window).scrollTop(),
                                    c = parseInt(r.position().top, 10);
                                c > 0 && u > c && (u > 0 ? e(window).scrollTop(c) : r.css("top", u))
                            }
                            return r = null, n
                        },
                        toggleMaximization: function() {
                            return this._closing ? this : this[this.options.isMaximized ? "restore" : "maximize"]()
                        },
                        restore: function() {
                            var t = this,
                                n = t.options,
                                r = n.minHeight,
                                i = t.restoreOptions;
                            return n.isMaximized || n.isMinimized ? (r && 1 / 0 != r && t.wrapper.css("min-height", r), t.wrapper.css({
                                position: n.pinned ? "fixed" : "absolute",
                                left: i.left,
                                top: i.top,
                                width: i.width,
                                height: i.height
                            }).removeClass(E).find(".k-window-content,.k-resize-handle").show().end().find(".k-window-titlebar .k-i-restore").parent().remove().end().end().find(G).parent().show().end().end().find(V).parent().show(), t.options.width = i.width, t.options.height = i.height, e("html, body").css(U, ""), this._documentScrollTop && this._documentScrollTop > 0 && e(document).scrollTop(this._documentScrollTop), n.isMaximized = n.isMinimized = !1, t.resize(), t) : t
                        },
                        maximize: i("maximize", function() {
                            var t = this,
                                n = t.wrapper,
                                r = n.position();
                            g(t.restoreOptions, {
                                left: r.left,
                                top: r.top
                            }), n.css({
                                left: 0,
                                top: 0,
                                position: "fixed"
                            }).addClass(E), this._documentScrollTop = e(document).scrollTop(), e("html, body").css(U, D), t.options.isMaximized = !0, t._onDocumentResize()
                        }),
                        minimize: i("minimize", function() {
                            var e = this;
                            e.wrapper.css({
                                height: "",
                                minHeight: ""
                            }), e.element.hide(), e.options.isMinimized = !0
                        }),
                        pin: function(t) {
                            var n = this,
                                r = e(window),
                                i = n.wrapper,
                                o = parseInt(i.css("top"), 10),
                                a = parseInt(i.css("left"), 10);
                            (t || !n.options.pinned && !n.options.isMaximized) && (i.css({
                                position: "fixed",
                                top: o - r.scrollTop(),
                                left: a - r.scrollLeft()
                            }), i.children(k).find($).addClass("k-i-unpin").removeClass("k-i-pin"), n.options.pinned = !0)
                        },
                        unpin: function() {
                            var t = this,
                                n = e(window),
                                r = t.wrapper,
                                i = parseInt(r.css("top"), 10),
                                o = parseInt(r.css("left"), 10);
                            t.options.pinned && !t.options.isMaximized && (r.css({
                                position: "",
                                top: i + n.scrollTop(),
                                left: o + n.scrollLeft()
                            }), r.children(k).find(J).addClass("k-i-pin").removeClass("k-i-unpin"), t.options.pinned = !1)
                        },
                        _onDocumentResize: function() {
                            var t, n, r = this,
                                i = r.wrapper,
                                o = e(window);
                            r.options.isMaximized && (t = o.width(), n = o.height() - parseInt(i.css("padding-top"), 10), i.css({
                                width: t,
                                height: n
                            }), r.options.width = t, r.options.height = n, r.resize())
                        },
                        refresh: function(t) {
                            var r, i, o, a = this,
                                s = a.options,
                                u = e(a.element);
                            return f(t) || (t = {
                                url: t
                            }), t = g({}, s.content, t), i = n(s.iframe) ? s.iframe : t.iframe, o = t.url, o ? (n(i) || (i = !Q(o)), i ? (r = u.find("." + C)[0], r ? r.src = o || r.src : u.html(l.contentFrame(g({}, s, {
                                content: t
                            }))), u.find("." + C).unbind("load" + y).on("load" + y, h(this._triggerRefresh, this))) : a._ajaxRequest(t)) : (t.template && a.content(_(t.template)({})), a.trigger(F)), u.toggleClass("k-window-iframecontent", i), a
                        },
                        _triggerRefresh: function() {
                            this.trigger(F)
                        },
                        _ajaxComplete: function() {
                            clearTimeout(this._loadingIconTimeout), this.wrapper.find(Y).removeClass(M)
                        },
                        _ajaxError: function(e, t) {
                            this.trigger(W, {
                                status: t,
                                xhr: e
                            })
                        },
                        _ajaxSuccess: function(e) {
                            return function(t) {
                                e && (t = _(e)(t || {})), this.content(t), this.element.prop("scrollTop", 0), this.trigger(F)
                            }
                        },
                        _showLoading: function() {
                            this.wrapper.find(Y).addClass(M)
                        },
                        _ajaxRequest: function(t) {
                            this._loadingIconTimeout = setTimeout(h(this._showLoading, this), 100), e.ajax(g({
                                type: "GET",
                                dataType: "html",
                                cache: !1,
                                error: h(this._ajaxError, this),
                                complete: h(this._ajaxComplete, this),
                                success: h(this._ajaxSuccess(t.template), this)
                            }, t))
                        },
                        destroy: function() {
                            this.resizing && this.resizing.destroy(), this.dragging && this.dragging.destroy(), this.wrapper.off(y).children(x).off(y).end().find(".k-resize-handle,.k-window-titlebar").off(y), e(window).off("resize", this._resizeHandler), clearTimeout(this._loadingIconTimeout), c.fn.destroy.call(this), this.unbind(t), u.destroy(this.wrapper), this._removeOverlay(!0), this.wrapper.empty().remove(), this.wrapper = this.appendTo = this.element = e()
                        },
                        _createWindow: function() {
                            var t, n, r = this.element,
                                i = this.options,
                                o = u.support.isRtl(r);
                            i.scrollable === !1 && r.attr("style", "overflow:hidden;"), n = e(l.wrapper(i)), i.title !== !1 && n.append(l.titlebar(g(l, i))), t = r.find("iframe:not(.k-content)").map(function() {
                                var e = this.getAttribute("src");
                                return this.src = "", e
                            }), n.toggleClass("k-rtl", o).appendTo(this.appendTo).append(r).find("iframe:not(.k-content)").each(function(e) {
                                this.src = t[e]
                            }), n.find(".k-window-title").css(o ? "left" : "right", n.find(".k-window-actions").outerWidth() + 10), r.show(), r.find("[data-role=editor]").each(function() {
                                var t = e(this).data("kendoEditor");
                                t && t.refresh()
                            }), n = r = null
                        }
                    });
                l = {
                    wrapper: _("<div class='k-widget k-window' />"),
                    action: _("<a role='button' href='\\#' class='k-window-action k-link'><span role='presentation' class='k-icon k-i-#= name.toLowerCase() #'>#= name #</span></a>"),
                    titlebar: _("<div class='k-window-titlebar k-header'>&nbsp;<span class='k-window-title'>#= title #</span><div class='k-window-actions'># for (var i = 0; i < actions.length; i++) { ##= action({ name: actions[i] }) ## } #</div></div>"),
                    overlay: "<div class='k-overlay' />",
                    contentFrame: _("<iframe frameborder='0' title='#= title #' class='" + C + "' src='#= content.url #'>This page requires frames in order to show content</iframe>"),
                    resizeHandle: _("<div class='k-resize-handle k-resize-#= data #'></div>")
                }, a.prototype = {
                    dragstart: function(t) {
                        var n = this.owner,
                            r = n.wrapper;
                        this.elementPadding = parseInt(n.wrapper.css("padding-top"), 10), this.initialCursorPosition = u.getOffset(r, "position"), this.resizeDirection = t.currentTarget.prop("className").replace("k-resize-handle k-resize-", ""), this.initialSize = {
                            width: r.width(),
                            height: r.height()
                        }, this.containerOffset = u.getOffset(n.appendTo), r.append(l.overlay).children(T).not(t.currentTarget).hide(), e(v).css(P, t.currentTarget.css(P))
                    },
                    drag: function(e) {
                        var t, n, i, o, a = this,
                            s = a.owner,
                            l = s.wrapper,
                            u = s.options,
                            c = a.resizeDirection,
                            d = a.containerOffset,
                            f = a.initialCursorPosition,
                            p = a.initialSize,
                            h = Math.max(e.x.location, d.left),
                            g = Math.max(e.y.location, d.top);
                        c.indexOf("e") >= 0 ? (t = h - f.left, l.width(r(t, u.minWidth, u.maxWidth))) : c.indexOf("w") >= 0 && (o = f.left + p.width, t = r(o - h, u.minWidth, u.maxWidth), l.css({
                            left: o - t - d.left,
                            width: t
                        })), c.indexOf("s") >= 0 ? (n = g - f.top - a.elementPadding, l.height(r(n, u.minHeight, u.maxHeight))) : c.indexOf("n") >= 0 && (i = f.top + p.height, n = r(i - g, u.minHeight, u.maxHeight), l.css({
                            top: i - n - d.top,
                            height: n
                        })), t && (s.options.width = t + "px"), n && (s.options.height = n + "px"), s.resize()
                    },
                    dragend: function(t) {
                        var n = this,
                            r = n.owner,
                            i = r.wrapper;
                        return i.find(S).remove().end().children(T).not(t.currentTarget).show(), e(v).css(P, ""), r.touchScroller && r.touchScroller.reset(), 27 == t.keyCode && i.css(n.initialCursorPosition).css(n.initialSize), !1
                    },
                    destroy: function() {
                        this._draggable && this._draggable.destroy(), this._draggable = this.owner = null
                    }
                }, s.prototype = {
                    dragstart: function(t) {
                        var n = this.owner,
                            r = n.element,
                            i = r.find(".k-window-actions"),
                            o = u.getOffset(n.appendTo);
                        n.trigger(R), n.initialWindowPosition = u.getOffset(n.wrapper, "position"), n.startPosition = {
                            left: t.x.client - n.initialWindowPosition.left,
                            top: t.y.client - n.initialWindowPosition.top
                        }, n.minLeftPosition = i.length > 0 ? i.outerWidth() + parseInt(i.css("right"), 10) - r.outerWidth() : 20 - r.outerWidth(), n.minLeftPosition -= o.left, n.minTopPosition = -o.top, n.wrapper.append(l.overlay).children(T).hide(), e(v).css(P, t.currentTarget.css(P))
                    },
                    drag: function(t) {
                        var n = this.owner,
                            r = n.options.position,
                            i = Math.max(t.y.client - n.startPosition.top, n.minTopPosition),
                            o = Math.max(t.x.client - n.startPosition.left, n.minLeftPosition),
                            a = {
                                left: o,
                                top: i
                            };
                        e(n.wrapper).css(a), r.top = i, r.left = o
                    },
                    _finishDrag: function() {
                        var t = this.owner;
                        t.wrapper.children(T).toggle(!t.options.isMinimized).end().find(S).remove(), e(v).css(P, "")
                    },
                    dragcancel: function(e) {
                        this._finishDrag(), e.currentTarget.closest(b).css(this.owner.initialWindowPosition)
                    },
                    dragend: function() {
                        return this._finishDrag(), this.owner.trigger(q), !1
                    },
                    destroy: function() {
                        this._draggable && this._draggable.destroy(), this._draggable = this.owner = null
                    }
                }, u.ui.plugin(X)
            }(window.kendo.jQuery), window.kendo
        }, "function" == typeof _dfn && _dfn.amd ? _dfn : function(e, t) {
            t()
        }),
        function(e, t) {
            t("kendo/kendo.data.odata", ["./kendo.core"], e)
        }(function() {
            return function(e, t) {
                function n(i) {
                    var a, s, l, u, c, d, f, p, h = [],
                        g = i.logic || "and",
                        m = i.filters;
                    for (a = 0, s = m.length; s > a; a++) i = m[a], l = i.field, f = i.value, d = i.operator, i.filters ? i = n(i) : (p = i.ignoreCase, l = l.replace(/\./g, "/"), i = o[d], i && f !== t && (u = e.type(f), "string" === u ? (c = "'{1}'", f = f.replace(/'/g, "''"), p === !0 && (l = "tolower(" + l + ")")) : c = "date" === u ? "datetime'{1:yyyy-MM-ddTHH:mm:ss}'" : "{1}", i.length > 3 ? "substringof" !== i ? c = "{0}({2}," + c + ")" : (c = "{0}(" + c + ",{2})", "doesnotcontain" === d && (c += " eq false")) : c = "{2} {0} " + c, i = r.format(c, i, f, l))), h.push(i);
                    return i = h.join(" " + g + " "), h.length > 1 && (i = "(" + i + ")"), i
                }
                var r = window.kendo,
                    i = e.extend,
                    o = {
                        eq: "eq",
                        neq: "ne",
                        gt: "gt",
                        gte: "ge",
                        lt: "lt",
                        lte: "le",
                        contains: "substringof",
                        doesnotcontain: "substringof",
                        endswith: "endswith",
                        startswith: "startswith"
                    },
                    a = {
                        pageSize: e.noop,
                        page: e.noop,
                        filter: function(e, t) {
                            t && (e.$filter = n(t))
                        },
                        sort: function(t, n) {
                            var r = e.map(n, function(e) {
                                var t = e.field.replace(/\./g, "/");
                                return "desc" === e.dir && (t += " desc"), t
                            }).join(",");
                            r && (t.$orderby = r)
                        },
                        skip: function(e, t) {
                            t && (e.$skip = t)
                        },
                        take: function(e, t) {
                            t && (e.$top = t)
                        }
                    },
                    s = {
                        read: {
                            dataType: "jsonp"
                        }
                    };
                i(!0, r.data, {
                    schemas: {
                        odata: {
                            type: "json",
                            data: function(e) {
                                return e.d.results || [e.d]
                            },
                            total: "d.__count"
                        }
                    },
                    transports: {
                        odata: {
                            read: {
                                cache: !0,
                                dataType: "jsonp",
                                jsonp: "$callback"
                            },
                            update: {
                                cache: !0,
                                dataType: "json",
                                contentType: "application/json",
                                type: "PUT"
                            },
                            create: {
                                cache: !0,
                                dataType: "json",
                                contentType: "application/json",
                                type: "POST"
                            },
                            destroy: {
                                cache: !0,
                                dataType: "json",
                                type: "DELETE"
                            },
                            parameterMap: function(e, t) {
                                var n, i, o, l;
                                if (e = e || {}, t = t || "read", l = (this.options || s)[t], l = l ? l.dataType : "json", "read" === t) {
                                    n = {
                                        $inlinecount: "allpages"
                                    }, "json" != l && (n.$format = "json");
                                    for (o in e) a[o] ? a[o](n, e[o]) : n[o] = e[o]
                                } else {
                                    if ("json" !== l) throw new Error("Only json dataType can be used for " + t + " operation.");
                                    if ("destroy" !== t) {
                                        for (o in e) i = e[o], "number" == typeof i && (e[o] = i + "");
                                        n = r.stringify(e)
                                    }
                                }
                                return n
                            }
                        }
                    }
                })
            }(window.kendo.jQuery), window.kendo
        }, "function" == typeof _dfn && _dfn.amd ? _dfn : function(e, t) {
            t()
        }),
        function(e, t) {
            t("kendo/kendo.data.xml", ["./kendo.core"], e)
        }(function() {
            return function(e, t) {
                var n = window.kendo,
                    r = e.isArray,
                    i = e.isPlainObject,
                    o = e.map,
                    a = e.each,
                    s = e.extend,
                    l = n.getter,
                    u = n.Class,
                    c = u.extend({
                        init: function(e) {
                            var t = this,
                                l = e.total,
                                u = e.model,
                                c = e.parse,
                                d = e.errors,
                                f = e.serialize,
                                p = e.data;
                            if (u) {
                                if (i(u)) {
                                    var h = e.modelBase || n.data.Model;
                                    u.fields && a(u.fields, function(e, n) {
                                        n = i(n) && n.field ? s(n, {
                                            field: t.getter(n.field)
                                        }) : {
                                            field: t.getter(n)
                                        }, u.fields[e] = n
                                    });
                                    var g = u.id;
                                    if (g) {
                                        var m = {};
                                        m[t.xpathToMember(g, !0)] = {
                                            field: t.getter(g)
                                        }, u.fields = s(m, u.fields), u.id = t.xpathToMember(g)
                                    }
                                    u = h._dfn(u)
                                }
                                t.model = u
                            }
                            if (l && ("string" == typeof l ? (l = t.getter(l), t.total = function(e) {
                                    return parseInt(l(e), 10)
                                }) : "function" == typeof l && (t.total = l)), d && ("string" == typeof d ? (d = t.getter(d), t.errors = function(e) {
                                    return d(e) || null
                                }) : "function" == typeof d && (t.errors = d)), p && ("string" == typeof p ? (p = t.xpathToMember(p), t.data = function(e) {
                                    var n, i = t.evaluate(e, p);
                                    return i = r(i) ? i : [i], t.model && u.fields ? (n = new t.model, o(i, function(e) {
                                        if (e) {
                                            var t, r = {};
                                            for (t in u.fields) r[t] = n._parse(t, u.fields[t].field(e));
                                            return r
                                        }
                                    })) : i
                                }) : "function" == typeof p && (t.data = p)), "function" == typeof c) {
                                var _ = t.parse;
                                t.parse = function(e) {
                                    var n = c.call(t, e);
                                    return _.call(t, n)
                                }
                            }
                            "function" == typeof f && (t.serialize = f)
                        },
                        total: function(e) {
                            return this.data(e).length
                        },
                        errors: function(e) {
                            return e ? e.errors : null
                        },
                        serialize: function(e) {
                            return e
                        },
                        parseDOM: function(e) {
                            var n, i, o, a, s, l, u, c = {},
                                d = e.attributes,
                                f = d.length;
                            for (u = 0; f > u; u++) l = d[u], c["@" + l.nodeName] = l.nodeValue;
                            for (i = e.firstChild; i; i = i.nextSibling) o = i.nodeType, 3 === o || 4 === o ? c["#text"] = i.nodeValue : 1 === o && (n = this.parseDOM(i), a = i.nodeName, s = c[a], r(s) ? s.push(n) : s = s !== t ? [s, n] : n, c[a] = s);
                            return c
                        },
                        evaluate: function(e, t) {
                            for (var n, i, o, a, s, l = t.split("."); n = l.shift();)
                                if (e = e[n], r(e)) {
                                    for (i = [], t = l.join("."), s = 0, o = e.length; o > s; s++) a = this.evaluate(e[s], t), a = r(a) ? a : [a], i.push.apply(i, a);
                                    return i
                                }
                            return e
                        },
                        parse: function(t) {
                            var n, r, i = {};
                            return n = t.documentElement || e.parseXML(t).documentElement, r = this.parseDOM(n), i[n.nodeName] = r, i
                        },
                        xpathToMember: function(e, t) {
                            return e ? (e = e.replace(/^\//, "").replace(/\//g, "."), e.indexOf("@") >= 0 ? e.replace(/\.?(@.*)/, t ? "$1" : '["$1"]') : e.indexOf("text()") >= 0 ? e.replace(/(\.?text\(\))/, t ? "#text" : '["#text"]') : e) : ""
                        },
                        getter: function(e) {
                            return l(this.xpathToMember(e), !0)
                        }
                    });
                e.extend(!0, n.data, {
                    XmlDataReader: c,
                    readers: {
                        xml: c
                    }
                })
            }(window.kendo.jQuery), window.kendo
        }, "function" == typeof _dfn && _dfn.amd ? _dfn : function(e, t) {
            t()
        }),
        function(e, t) {
            t("kendo/kendo.data", ["./kendo.core", "./kendo.data.odata", "./kendo.data.xml"], e)
        }(function() {
            return function(e, t) {
                function n(e, t, n, r) {
                    return function(i) {
                        var o, a = {};
                        for (o in i) a[o] = i[o];
                        a.field = r ? n + "." + i.field : n, t == q && e._notifyChange && e._notifyChange(a), e.trigger(t, a)
                    }
                }

                function r(t, n) {
                    if (t === n) return !0;
                    var i, o = e.type(t),
                        a = e.type(n);
                    if (o !== a) return !1;
                    if ("date" === o) return t.getTime() === n.getTime();
                    if ("object" !== o && "array" !== o) return !1;
                    for (i in t)
                        if (!r(t[i], n[i])) return !1;
                    return !0
                }

                function i(e, t) {
                    var n, r;
                    for (r in e) {
                        if (n = e[r], z(n) && n.field && n.field === t) return n;
                        if (n === t) return n
                    }
                    return null
                }

                function o(e) {
                    this.data = e || []
                }

                function a(e, n) {
                    if (e) {
                        var r = typeof e === L ? {
                                field: e,
                                dir: n
                            } : e,
                            i = O(r) ? r : r !== t ? [r] : [];
                        return D(i, function(e) {
                            return !!e.dir
                        })
                    }
                }

                function s(e) {
                    var t, n, r, i, o = e.filters;
                    if (o)
                        for (t = 0, n = o.length; n > t; t++) r = o[t], i = r.operator, i && typeof i === L && (r.operator = _t[i.toLowerCase()] || i), s(r)
                }

                function l(e) {
                    return e && !E(e) ? ((O(e) || !e.filters) && (e = {
                        logic: "and",
                        filters: O(e) ? e : [e]
                    }), s(e), e) : void 0
                }

                function u(e) {
                    return O(e) ? e : [e]
                }

                function c(e, n) {
                    var r = typeof e === L ? {
                            field: e,
                            dir: n
                        } : e,
                        i = O(r) ? r : r !== t ? [r] : [];
                    return C(i, function(e) {
                        return {
                            field: e.field,
                            dir: e.dir || "asc",
                            aggregates: e.aggregates
                        }
                    })
                }

                function d(e, t) {
                    return e && e.getTime && t && t.getTime ? e.getTime() === t.getTime() : e === t
                }

                function f(e, t, n, r, i, o) {
                    t = t || [];
                    var a, s, l, u = t.length;
                    for (a = 0; u > a; a++) {
                        s = t[a], l = s.aggregate;
                        var c = s.field;
                        e[c] = e[c] || {}, o[c] = o[c] || {}, o[c][l] = o[c][l] || {}, e[c][l] = vt[l.toLowerCase()](e[c][l], n, I.accessor(c), r, i, o[c][l])
                    }
                }

                function p(e) {
                    return "number" == typeof e && !isNaN(e)
                }

                function h(e) {
                    var t, n = e.length,
                        r = new Array(n);
                    for (t = 0; n > t; t++) r[t] = e[t].toJSON();
                    return r
                }

                function g(e, t) {
                    t = t || {};
                    var n = new o(e),
                        r = t.aggregate,
                        i = t.filter;
                    return i && (n = n.filter(i)), n.aggregate(r)
                }

                function m(e, t) {
                    var n, r;
                    for (n = 0, r = e.length; r > n; n++)
                        if (e[n].hasSubgroups) {
                            if (m(e[n].items, t)) return !0
                        } else if (t(e[n].items, e[n])) return !0
                }

                function _(e, t) {
                    var n, r;
                    for (n = 0, r = e.length; r > n; n++)
                        if (e[n].uid == t.uid) return t = e[n], e.splice(n, 1), t
                }

                function v(e, t) {
                    var n, r, i, o;
                    for (i = e.length - 1, o = 0; i >= o; i--) r = e[i], n = {
                        value: t.get(r.field),
                        field: r.field,
                        items: n ? [n] : [t],
                        hasSubgroups: !!n,
                        aggregates: {}
                    };
                    return n
                }

                function y(e, t) {
                    return t ? w(e, function(e) {
                        return e[t.idField] === t.id
                    }) : -1
                }

                function b(e, t) {
                    return t ? w(e, function(e) {
                        return e.uid == t.uid
                    }) : -1
                }

                function w(e, t) {
                    var n, r;
                    for (n = 0, r = e.length; r > n; n++)
                        if (t(e[n])) return n;
                    return -1
                }

                function k(e, t) {
                    if (e && !E(e)) {
                        var n, r = e[t];
                        return n = z(r) ? r.from || r.field || t : e[t] || t, N(n) ? t : n
                    }
                    return t
                }

                function x(e, t) {
                    var n, r, i = {};
                    for (var o in e) "filters" !== o && (i[o] = e[o]);
                    if (e.filters)
                        for (i.filters = [], n = 0, r = e.filters.length; r > n; n++) i.filters[n] = x(e.filters[n], t);
                    else i.field = k(t.fields, i.field);
                    return i
                }

                function T(e, t) {
                    var n, r, i, o, a = [];
                    for (n = 0, r = e.length; r > n; n++) {
                        i = {}, o = e[n];
                        for (var s in o) i[s] = o[s];
                        i.field = k(t.fields, i.field), i.aggregates && O(i.aggregates) && (i.aggregates = T(i.aggregates, t)), a.push(i)
                    }
                    return a
                }

                function S(t, n) {
                    var r, i, o, a, s, l = e(t)[0].children,
                        u = [],
                        c = n[0],
                        d = n[1];
                    for (r = 0, i = l.length; i > r; r++) o = {}, s = l[r], s.disabled || (o[c.field] = s.text, a = s.attributes.value, a = a && a.specified ? s.value : s.text, o[d.field] = a, u.push(o));
                    return u
                }
                var C, M = e.extend,
                    j = e.proxy,
                    z = e.isPlainObject,
                    E = e.isEmptyObject,
                    O = e.isArray,
                    D = e.grep,
                    P = (e.ajax, e.each),
                    A = e.noop,
                    I = window.kendo,
                    N = I.isFunction,
                    H = I.Observable,
                    F = I.Class,
                    L = "string",
                    R = "function",
                    q = "change",
                    W = "sync",
                    U = "get",
                    B = "error",
                    G = "requestStart",
                    $ = "progress",
                    J = "requestEnd",
                    V = function(e) {
                        return e
                    },
                    K = I.getter,
                    Y = (I.stringify, Math),
                    Q = [].push,
                    X = [].join,
                    Z = [].pop,
                    et = [].splice,
                    tt = [].shift,
                    nt = [].slice,
                    rt = [].unshift,
                    it = {}.toString,
                    ot = I.support.stableSort,
                    at = /^\/Date\((.*?)\)\/$/,
                    st = /(\r+|\n+)/g,
                    lt = /(?=['\\])/g,
                    ut = H.extend({
                        init: function(e, t) {
                            var n = this;
                            n.type = t || ct, H.fn.init.call(n), n.length = e.length, n.wrapAll(e, n)
                        },
                        toJSON: function() {
                            var e, t, n = this.length,
                                r = new Array(n);
                            for (e = 0; n > e; e++) t = this[e], t instanceof ct && (t = t.toJSON()), r[e] = t;
                            return r
                        },
                        parent: A,
                        wrapAll: function(e, t) {
                            var n, r, i = this,
                                o = function() {
                                    return i
                                };
                            for (t = t || [], n = 0, r = e.length; r > n; n++) t[n] = i.wrap(e[n], o);
                            return t
                        },
                        wrap: function(e, t) {
                            var n, r = this;
                            return null !== e && "[object Object]" === it.call(e) && (n = e instanceof r.type || e instanceof pt, n || (e = e instanceof ct ? e.toJSON() : e, e = new r.type(e)), e.parent = t, e.bind(q, function(e) {
                                r.trigger(q, {
                                    field: e.field,
                                    node: e.node,
                                    index: e.index,
                                    items: e.items || [this],
                                    action: e.node ? e.action || "itemchange" : "itemchange"
                                })
                            })), e
                        },
                        push: function() {
                            var e, t = this.length,
                                n = this.wrapAll(arguments);
                            return e = Q.apply(this, n), this.trigger(q, {
                                action: "add",
                                index: t,
                                items: n
                            }), e
                        },
                        slice: nt,
                        join: X,
                        pop: function() {
                            var e = this.length,
                                t = Z.apply(this);
                            return e && this.trigger(q, {
                                action: "remove",
                                index: e - 1,
                                items: [t]
                            }), t
                        },
                        splice: function(e, t, n) {
                            var r, i, o, a = this.wrapAll(nt.call(arguments, 2));
                            if (r = et.apply(this, [e, t].concat(a)), r.length)
                                for (this.trigger(q, {
                                        action: "remove",
                                        index: e,
                                        items: r
                                    }), i = 0, o = r.length; o > i; i++) r[i].children && r[i].unbind(q);
                            return n && this.trigger(q, {
                                action: "add",
                                index: e,
                                items: a
                            }), r
                        },
                        shift: function() {
                            var e = this.length,
                                t = tt.apply(this);
                            return e && this.trigger(q, {
                                action: "remove",
                                index: 0,
                                items: [t]
                            }), t
                        },
                        unshift: function() {
                            var e, t = this.wrapAll(arguments);
                            return e = rt.apply(this, t), this.trigger(q, {
                                action: "add",
                                index: 0,
                                items: t
                            }), e
                        },
                        indexOf: function(e) {
                            var t, n, r = this;
                            for (t = 0, n = r.length; n > t; t++)
                                if (r[t] === e) return t;
                            return -1
                        },
                        forEach: function(e) {
                            for (var t = 0, n = this.length; n > t; t++) e(this[t], t, this)
                        },
                        map: function(e) {
                            for (var t = 0, n = [], r = this.length; r > t; t++) n[t] = e(this[t], t, this);
                            return n
                        },
                        filter: function(e) {
                            for (var t, n = 0, r = [], i = this.length; i > n; n++) t = this[n], e(t, n, this) && (r[r.length] = t);
                            return r
                        },
                        find: function(e) {
                            for (var t, n = 0, r = this.length; r > n; n++)
                                if (t = this[n], e(t, n, this)) return t
                        },
                        every: function(e) {
                            for (var t, n = 0, r = this.length; r > n; n++)
                                if (t = this[n], !e(t, n, this)) return !1;
                            return !0
                        },
                        some: function(e) {
                            for (var t, n = 0, r = this.length; r > n; n++)
                                if (t = this[n], e(t, n, this)) return !0;
                            return !1
                        },
                        remove: function(e) {
                            this.splice(this.indexOf(e), 1)
                        },
                        empty: function() {
                            this.splice(0, this.length)
                        }
                    }),
                    ct = H.extend({
                        init: function(e) {
                            var t, n, r = this,
                                i = function() {
                                    return r
                                };
                            H.fn.init.call(this);
                            for (n in e) t = e[n], "_" != n.charAt(0) && (t = r.wrap(t, n, i)), r[n] = t;
                            r.uid = I.guid()
                        },
                        shouldSerialize: function(e) {
                            return this.hasOwnProperty(e) && "_events" !== e && typeof this[e] !== R && "uid" !== e
                        },
                        forEach: function(e) {
                            for (var t in this) this.shouldSerialize(t) && e(this[t], t)
                        },
                        toJSON: function() {
                            var e, t, n = {};
                            for (t in this) this.shouldSerialize(t) && (e = this[t], (e instanceof ct || e instanceof ut) && (e = e.toJSON()), n[t] = e);
                            return n
                        },
                        get: function(e) {
                            var t, n = this;
                            return n.trigger(U, {
                                field: e
                            }), t = "this" === e ? n : I.getter(e, !0)(n)
                        },
                        _set: function(e, t) {
                            var n = this,
                                r = e.indexOf(".") >= 0;
                            if (r)
                                for (var i = e.split("."), o = ""; i.length > 1;) {
                                    o += i.shift();
                                    var a = I.getter(o, !0)(n);
                                    if (a instanceof ct) return a.set(i.join("."), t), r;
                                    o += "."
                                }
                            return I.setter(e)(n, t), r
                        },
                        set: function(e, t) {
                            var n = this,
                                r = e.indexOf(".") >= 0,
                                i = I.getter(e, !0)(n);
                            i !== t && (n.trigger("set", {
                                field: e,
                                value: t
                            }) || (r || (t = n.wrap(t, e, function() {
                                return n
                            })), (!n._set(e, t) || e.indexOf("(") >= 0 || e.indexOf("[") >= 0) && n.trigger(q, {
                                field: e
                            })))
                        },
                        parent: A,
                        wrap: function(e, t, r) {
                            var i = this,
                                o = it.call(e);
                            if (null != e && ("[object Object]" === o || "[object Array]" === o)) {
                                var a = e instanceof ut,
                                    s = e instanceof wt;
                                "[object Object]" !== o || s || a ? ("[object Array]" === o || a || s) && (a || s || (e = new ut(e)), e.parent() != r() && e.bind(q, n(i, q, t, !1))) : (e instanceof ct || (e = new ct(e)), e.parent() != r() && (e.bind(U, n(i, U, t, !0)), e.bind(q, n(i, q, t, !0)))), e.parent = r
                            }
                            return e
                        }
                    }),
                    dt = {
                        number: function(e) {
                            return I.parseFloat(e)
                        },
                        date: function(e) {
                            return I.parseDate(e)
                        },
                        "boolean": function(e) {
                            return typeof e === L ? "true" === e.toLowerCase() : null != e ? !!e : e
                        },
                        string: function(e) {
                            return null != e ? e + "" : e
                        },
                        "default": function(e) {
                            return e
                        }
                    },
                    ft = {
                        string: "",
                        number: 0,
                        date: new Date,
                        "boolean": !1,
                        "default": ""
                    },
                    pt = ct.extend({
                        init: function(n) {
                            var r = this;
                            (!n || e.isEmptyObject(n)) && (n = e.extend({}, r.defaults, n)), ct.fn.init.call(r, n), r.dirty = !1, r.idField && (r.id = r.get(r.idField), r.id === t && (r.id = r._defaultId))
                        },
                        shouldSerialize: function(e) {
                            return ct.fn.shouldSerialize.call(this, e) && "uid" !== e && !("id" !== this.idField && "id" === e) && "dirty" !== e && "_accessors" !== e
                        },
                        _parse: function(e, t) {
                            var n, r = this,
                                o = e,
                                a = r.fields || {};
                            return e = a[e], e || (e = i(a, o)), e && (n = e.parse, !n && e.type && (n = dt[e.type.toLowerCase()])), n ? n(t) : t
                        },
                        _notifyChange: function(e) {
                            var t = e.action;
                            ("add" == t || "remove" == t) && (this.dirty = !0)
                        },
                        editable: function(e) {
                            return e = (this.fields || {})[e], e ? e.editable !== !1 : !0
                        },
                        set: function(e, t, n) {
                            var i = this;
                            i.editable(e) && (t = i._parse(e, t), r(t, i.get(e)) || (i.dirty = !0, ct.fn.set.call(i, e, t, n)))
                        },
                        accept: function(e) {
                            var t, n = this,
                                r = function() {
                                    return n
                                };
                            for (t in e) {
                                var i = e[t];
                                "_" != t.charAt(0) && (i = n.wrap(e[t], t, r)), n._set(t, i)
                            }
                            n.idField && (n.id = n.get(n.idField)), n.dirty = !1
                        },
                        isNew: function() {
                            return this.id === this._defaultId
                        }
                    });
                pt._dfn = function(e, n) {
                    n === t && (n = e, e = pt);
                    var r, i, o, a, s, l, u, c, d = M({
                            defaults: {}
                        }, n),
                        f = {},
                        p = d.id;
                    if (p && (d.idField = p), d.id && delete d.id, p && (d.defaults[p] = d._defaultId = ""), "[object Array]" === it.call(d.fields)) {
                        for (l = 0, u = d.fields.length; u > l; l++) o = d.fields[l], typeof o === L ? f[o] = {} : o.field && (f[o.field] = o);
                        d.fields = f
                    }
                    for (i in d.fields) o = d.fields[i], a = o.type || "default", s = null, c = i, i = typeof o.field === L ? o.field : i, o.nullable || (s = d.defaults[c !== i ? c : i] = o.defaultValue !== t ? o.defaultValue : ft[a.toLowerCase()]), n.id === i && (d._defaultId = s), d.defaults[c !== i ? c : i] = s, o.parse = o.parse || dt[a];
                    return r = e.extend(d), r._dfn = function(e) {
                        return pt._dfn(r, e)
                    }, d.fields && (r.fields = d.fields, r.idField = d.idField), r
                };
                var ht = {
                        selector: function(e) {
                            return N(e) ? e : K(e)
                        },
                        compare: function(e) {
                            var t = this.selector(e);
                            return function(e, n) {
                                return e = t(e), n = t(n), null == e && null == n ? 0 : null == e ? -1 : null == n ? 1 : e.localeCompare ? e.localeCompare(n) : e > n ? 1 : n > e ? -1 : 0
                            }
                        },
                        create: function(e) {
                            var t = e.compare || this.compare(e.field);
                            return "desc" == e.dir ? function(e, n) {
                                return t(n, e, !0)
                            } : t
                        },
                        combine: function(e) {
                            return function(t, n) {
                                var r, i, o = e[0](t, n);
                                for (r = 1, i = e.length; i > r; r++) o = o || e[r](t, n);
                                return o
                            }
                        }
                    },
                    gt = M({}, ht, {
                        asc: function(e) {
                            var t = this.selector(e);
                            return function(e, n) {
                                var r = t(e),
                                    i = t(n);
                                return r && r.getTime && i && i.getTime && (r = r.getTime(), i = i.getTime()), r === i ? e.__position - n.__position : null == r ? -1 : null == i ? 1 : r.localeCompare ? r.localeCompare(i) : r > i ? 1 : -1
                            }
                        },
                        desc: function(e) {
                            var t = this.selector(e);
                            return function(e, n) {
                                var r = t(e),
                                    i = t(n);
                                return r && r.getTime && i && i.getTime && (r = r.getTime(), i = i.getTime()), r === i ? e.__position - n.__position : null == r ? 1 : null == i ? -1 : i.localeCompare ? i.localeCompare(r) : i > r ? 1 : -1
                            }
                        },
                        create: function(e) {
                            return this[e.dir](e.field)
                        }
                    });
                C = function(e, t) {
                    var n, r = e.length,
                        i = new Array(r);
                    for (n = 0; r > n; n++) i[n] = t(e[n], n, e);
                    return i
                };
                var mt = function() {
                    function e(e) {
                        return e.replace(lt, "\\").replace(st, "")
                    }

                    function t(t, n, r, i) {
                        var o;
                        return null != r && (typeof r === L && (r = e(r), o = at.exec(r), o ? r = new Date(+o[1]) : i ? (r = "'" + r.toLowerCase() + "'", n = "(" + n + " || '').toLowerCase()") : r = "'" + r + "'"), r.getTime && (n = "(" + n + "?" + n + ".getTime():" + n + ")", r = r.getTime())), n + " " + t + " " + r
                    }
                    return {
                        eq: function(e, n, r) {
                            return t("==", e, n, r)
                        },
                        neq: function(e, n, r) {
                            return t("!=", e, n, r)
                        },
                        gt: function(e, n, r) {
                            return t(">", e, n, r)
                        },
                        gte: function(e, n, r) {
                            return t(">=", e, n, r)
                        },
                        lt: function(e, n, r) {
                            return t("<", e, n, r)
                        },
                        lte: function(e, n, r) {
                            return t("<=", e, n, r)
                        },
                        startswith: function(t, n, r) {
                            return r && (t = "(" + t + " || '').toLowerCase()", n && (n = n.toLowerCase())), n && (n = e(n)), t + ".lastIndexOf('" + n + "', 0) == 0"
                        },
                        endswith: function(t, n, r) {
                            return r && (t = "(" + t + " || '').toLowerCase()", n && (n = n.toLowerCase())), n && (n = e(n)), t + ".indexOf('" + n + "', " + t + ".length - " + (n || "").length + ") >= 0"
                        },
                        contains: function(t, n, r) {
                            return r && (t = "(" + t + " || '').toLowerCase()", n && (n = n.toLowerCase())), n && (n = e(n)), t + ".indexOf('" + n + "') >= 0"
                        },
                        doesnotcontain: function(t, n, r) {
                            return r && (t = "(" + t + " || '').toLowerCase()", n && (n = n.toLowerCase())), n && (n = e(n)), t + ".indexOf('" + n + "') == -1"
                        }
                    }
                }();
                o.filterExpr = function(e) {
                    var n, r, i, a, s, l, u = [],
                        c = {
                            and: " && ",
                            or: " || "
                        },
                        d = [],
                        f = [],
                        p = e.filters;
                    for (n = 0, r = p.length; r > n; n++) i = p[n], s = i.field, l = i.operator, i.filters ? (a = o.filterExpr(i), i = a.expression.replace(/__o\[(\d+)\]/g, function(e, t) {
                        return t = +t, "__o[" + (f.length + t) + "]"
                    }).replace(/__f\[(\d+)\]/g, function(e, t) {
                        return t = +t, "__f[" + (d.length + t) + "]"
                    }), f.push.apply(f, a.operators), d.push.apply(d, a.fields)) : (typeof s === R ? (a = "__f[" + d.length + "](d)", d.push(s)) : a = I.expr(s), typeof l === R ? (i = "__o[" + f.length + "](" + a + ", " + i.value + ")", f.push(l)) : i = mt[(l || "eq").toLowerCase()](a, i.value, i.ignoreCase !== t ? i.ignoreCase : !0)), u.push(i);
                    return {
                        expression: "(" + u.join(c[e.logic]) + ")",
                        fields: d,
                        operators: f
                    }
                };
                var _t = {
                    "==": "eq",
                    equals: "eq",
                    isequalto: "eq",
                    equalto: "eq",
                    equal: "eq",
                    "!=": "neq",
                    ne: "neq",
                    notequals: "neq",
                    isnotequalto: "neq",
                    notequalto: "neq",
                    notequal: "neq",
                    "<": "lt",
                    islessthan: "lt",
                    lessthan: "lt",
                    less: "lt",
                    "<=": "lte",
                    le: "lte",
                    islessthanorequalto: "lte",
                    lessthanequal: "lte",
                    ">": "gt",
                    isgreaterthan: "gt",
                    greaterthan: "gt",
                    greater: "gt",
                    ">=": "gte",
                    isgreaterthanorequalto: "gte",
                    greaterthanequal: "gte",
                    ge: "gte",
                    notsubstringof: "doesnotcontain"
                };
                o.normalizeFilter = l, o.prototype = {
                    toArray: function() {
                        return this.data
                    },
                    range: function(e, t) {
                        return new o(this.data.slice(e, e + t))
                    },
                    skip: function(e) {
                        return new o(this.data.slice(e))
                    },
                    take: function(e) {
                        return new o(this.data.slice(0, e))
                    },
                    select: function(e) {
                        return new o(C(this.data, e))
                    },
                    order: function(e, t) {
                        var n = {
                            dir: t
                        };
                        return e && (e.compare ? n.compare = e.compare : n.field = e), new o(this.data.slice(0).sort(ht.create(n)))
                    },
                    orderBy: function(e) {
                        return this.order(e, "asc")
                    },
                    orderByDescending: function(e) {
                        return this.order(e, "desc")
                    },
                    sort: function(e, t, n) {
                        var r, i, o = a(e, t),
                            s = [];
                        if (n = n || ht, o.length) {
                            for (r = 0, i = o.length; i > r; r++) s.push(n.create(o[r]));
                            return this.orderBy({
                                compare: n.combine(s)
                            })
                        }
                        return this
                    },
                    filter: function(e) {
                        var t, n, r, i, a, s, u, c, d = this.data,
                            f = [];
                        if (e = l(e), !e || 0 === e.filters.length) return this;
                        for (i = o.filterExpr(e), s = i.fields, u = i.operators, a = c = new Function("d, __f, __o", "return " + i.expression), (s.length || u.length) && (c = function(e) {
                                return a(e, s, u)
                            }), t = 0, r = d.length; r > t; t++) n = d[t], c(n) && f.push(n);
                        return new o(f)
                    },
                    group: function(e, t) {
                        e = c(e || []), t = t || this.data;
                        var n, r = this,
                            i = new o(r.data);
                        return e.length > 0 && (n = e[0], i = i.groupBy(n).select(function(r) {
                            var i = new o(t).filter([{
                                field: r.field,
                                operator: "eq",
                                value: r.value,
                                ignoreCase: !1
                            }]);
                            return {
                                field: r.field,
                                value: r.value,
                                items: e.length > 1 ? new o(r.items).group(e.slice(1), i.toArray()).toArray() : r.items,
                                hasSubgroups: e.length > 1,
                                aggregates: i.aggregate(n.aggregates)
                            }
                        })), i
                    },
                    groupBy: function(e) {
                        if (E(e) || !this.data.length) return new o([]);
                        var t, n, r, i, a = e.field,
                            s = this._sortForGrouping(a, e.dir || "asc"),
                            l = I.accessor(a),
                            u = l.get(s[0], a),
                            c = {
                                field: a,
                                value: u,
                                items: []
                            },
                            f = [c];
                        for (r = 0, i = s.length; i > r; r++) t = s[r], n = l.get(t, a), d(u, n) || (u = n, c = {
                            field: a,
                            value: u,
                            items: []
                        }, f.push(c)), c.items.push(t);
                        return new o(f)
                    },
                    _sortForGrouping: function(e, t) {
                        var n, r, i = this.data;
                        if (!ot) {
                            for (n = 0, r = i.length; r > n; n++) i[n].__position = n;
                            for (i = new o(i).sort(e, t, gt).toArray(), n = 0, r = i.length; r > n; n++) delete i[n].__position;
                            return i
                        }
                        return this.sort(e, t).toArray()
                    },
                    aggregate: function(e) {
                        var t, n, r = {},
                            i = {};
                        if (e && e.length)
                            for (t = 0, n = this.data.length; n > t; t++) f(r, e, this.data[t], t, n, i);
                        return r
                    }
                };
                var vt = {
                    sum: function(e, t, n) {
                        var r = n.get(t);
                        return p(e) ? p(r) && (e += r) : e = r, e
                    },
                    count: function(e) {
                        return (e || 0) + 1
                    },
                    average: function(e, n, r, i, o, a) {
                        var s = r.get(n);
                        return a.count === t && (a.count = 0), p(e) ? p(s) && (e += s) : e = s, p(s) && a.count++, i == o - 1 && p(e) && (e /= a.count), e
                    },
                    max: function(e, t, n) {
                        var r = n.get(t);
                        return p(e) || (e = r), r > e && p(r) && (e = r), e
                    },
                    min: function(e, t, n) {
                        var r = n.get(t);
                        return p(e) || (e = r), e > r && p(r) && (e = r), e
                    }
                };
                o.process = function(e, n) {
                    n = n || {};
                    var r, i = new o(e),
                        s = n.group,
                        l = c(s || []).concat(a(n.sort || [])),
                        u = n.filter,
                        d = n.skip,
                        f = n.take;
                    return u && (i = i.filter(u), r = i.toArray().length), l && (i = i.sort(l), s && (e = i.toArray())), d !== t && f !== t && (i = i.range(d, f)), s && (i = i.group(s, e)), {
                        total: r,
                        data: i.toArray()
                    }
                };
                var yt = F.extend({
                        init: function(e) {
                            this.data = e.data
                        },
                        read: function(e) {
                            e.success(this.data)
                        },
                        update: function(e) {
                            e.success(e.data)
                        },
                        create: function(e) {
                            e.success(e.data)
                        },
                        destroy: function(e) {
                            e.success(e.data)
                        }
                    }),
                    bt = F.extend({
                        init: function(e) {
                            var t, n, r, i, o = this;
                            e = e || {};
                            for (t in e) n = e[t], o[t] = typeof n === L ? K(n) : n;
                            if (i = e.modelBase || pt, z(o.model) && (o.model = r = i._dfn(o.model)), o.model) {
                                var a, s = j(o.data, o),
                                    l = j(o.groups, o),
                                    u = j(o.serialize, o),
                                    c = {},
                                    d = {},
                                    f = {},
                                    p = {},
                                    h = !1;
                                r = o.model, r.fields && (P(r.fields, function(e, t) {
                                    var n;
                                    a = e, z(t) && t.field ? a = t.field : typeof t === L && (a = t), z(t) && t.from && (n = t.from), h = h || n && n !== e || a !== e, d[e] = K(n || a), f[e] = K(e), c[n || a] = e, p[e] = n || a
                                }), !e.serialize && h && (o.serialize = wrapDataAccess(u, r, serializeRecords, f, c, p))), o._dataAccessFunction = s, o.data = wrapDataAccess(s, r, convertRecords, d, c, p), o.groups = wrapDataAccess(l, r, convertGroup, d, c, p)
                            }
                        },
                        errors: function(e) {
                            return e ? e.errors : null
                        },
                        parse: V,
                        data: V,
                        total: function(e) {
                            return e.length
                        },
                        groups: V,
                        aggregates: function() {
                            return {}
                        },
                        serialize: function(e) {
                            return e
                        }
                    }),
                    wt = H.extend({
                        init: function(e) {
                            var n, r, i = this;
                            e && (r = e.data), e = i.options = M({}, i.options, e), i._map = {}, i._prefetch = {}, i._data = [], i._pristineData = [], i._ranges = [], i._view = [], i._pristineTotal = 0, i._destroyed = [], i._pageSize = e.pageSize, i._page = e.page || (e.pageSize ? 1 : t), i._sort = a(e.sort), i._filter = l(e.filter), i._group = c(e.group), i._aggregate = e.aggregate, i._total = e.total, H.fn.init.call(i), i.transport = kt.create(e, r), N(i.transport.push) && i.transport.push({
                                pushCreate: j(i._pushCreate, i),
                                pushUpdate: j(i._pushUpdate, i),
                                pushDestroy: j(i._pushDestroy, i)
                            }), i.reader = new I.data.readers[e.schema.type || "json"](e.schema), n = i.reader.model || {}, i._data = i._observe(i._data), i.bind(["push", B, q, G, W, J, $], e)
                        },
                        options: {
                            data: [],
                            schema: {
                                modelBase: pt
                            },
                            serverSorting: !1,
                            serverPaging: !1,
                            serverFiltering: !1,
                            serverGrouping: !1,
                            serverAggregates: !1,
                            batch: !1
                        },
                        _isServerGrouped: function() {
                            var e = this.group() || [];
                            return this.options.serverGrouping && e.length
                        },
                        _pushCreate: function(e) {
                            this._push(e, "pushCreate")
                        },
                        _pushUpdate: function(e) {
                            this._push(e, "pushUpdate")
                        },
                        _pushDestroy: function(e) {
                            this._push(e, "pushDestroy")
                        },
                        _push: function(e, t) {
                            var n = this._readData(e);
                            n || (n = e), this[t](n)
                        },
                        _flatData: function(e) {
                            return this._isServerGrouped() ? flattenGroups(e) : e
                        },
                        parent: A,
                        get: function(e) {
                            var t, n, r = this._flatData(this._data);
                            for (t = 0, n = r.length; n > t; t++)
                                if (r[t].id == e) return r[t]
                        },
                        getByUid: function(e) {
                            var t, n, r = this._flatData(this._data);
                            if (r)
                                for (t = 0, n = r.length; n > t; t++)
                                    if (r[t].uid == e) return r[t]
                        },
                        indexOf: function(e) {
                            return b(this._data, e)
                        },
                        at: function(e) {
                            return this._data[e]
                        },
                        data: function(e) {
                            var n = this;
                            return e === t ? n._data : (n._data = this._observe(e), n._pristineData = e.slice(0), n._ranges = [], n._addRange(n._data), n._total = n._data.length, n._pristineTotal = n._total, n._process(n._data), void 0)
                        },
                        view: function() {
                            return this._view
                        },
                        add: function(e) {
                            return this.insert(this._data.length, e)
                        },
                        _createNewModel: function(e) {
                            return this.reader.model ? new this.reader.model(e) : new ct(e)
                        },
                        insert: function(e, t) {
                            return t || (t = e, e = 0), t instanceof pt || (t = this._createNewModel(t)), this._isServerGrouped() ? this._data.splice(e, 0, v(this.group(), t)) : this._data.splice(e, 0, t), t
                        },
                        _updatePristineForModel: function(e, t) {
                            this._executeOnPristineForModel(e, function(e, n) {
                                I.deepExtend(n[e], t)
                            })
                        },
                        _executeOnPristineForModel: function(e, t) {
                            this._eachPristineItem(function(n) {
                                var r = y(n, e);
                                return r > -1 ? (t(r, n), !0) : void 0
                            })
                        },
                        _removePristineForModel: function(e) {
                            this._executeOnPristineForModel(e, function(e, t) {
                                t.splice(e, 1)
                            })
                        },
                        _readData: function(e) {
                            var t = this._isServerGrouped() ? this.reader.groups : this.reader.data;
                            return t(e)
                        },
                        _eachPristineItem: function(e) {
                            this._eachItem(this._pristineData, e)
                        },
                        _eachItem: function(e, t) {
                            e && e.length && (this._isServerGrouped() ? m(e, t) : t(e))
                        },
                        _pristineForModel: function(e) {
                            var t, n, r = function(r) {
                                return n = y(r, e), n > -1 ? (t = r[n], !0) : void 0
                            };
                            return this._eachPristineItem(r), t
                        },
                        _cancelModel: function(e) {
                            var t, n = this._pristineForModel(e);
                            this._eachItem(this._data, function(r) {
                                t = b(r, e), -1 != t && (!e.isNew() && n ? r[t].accept(n) : r.splice(t, 1))
                            })
                        },
                        _promise: function(t, n, r) {
                            var i = this,
                                o = i.transport;
                            return e.Deferred(function(e) {
                                i.trigger(G, {
                                    type: r
                                }), o[r].call(o, M({
                                    success: function(t) {
                                        e.resolve({
                                            response: t,
                                            models: n,
                                            type: r
                                        })
                                    },
                                    error: function(t, n, r) {
                                        e.reject(t), i.error(t, n, r)
                                    }
                                }, t))
                            }).promise()
                        },
                        _send: function(e, t) {
                            var n, r, i = this,
                                o = [],
                                a = i.reader.serialize(h(t));
                            if (i.options.batch) t.length && o.push(i._promise({
                                data: {
                                    models: a
                                }
                            }, t, e));
                            else
                                for (n = 0, r = t.length; r > n; n++) o.push(i._promise({
                                    data: a[n]
                                }, [t[n]], e));
                            return o
                        },
                        read: function(e) {
                            var t = this,
                                n = t._params(e);
                            t._queueRequest(n, function() {
                                t.trigger(G, {
                                    type: "read"
                                }) ? t._dequeueRequest() : (t.trigger($), t._ranges = [], t.transport.read({
                                    data: n,
                                    success: j(t.success, t),
                                    error: j(t.error, t)
                                }))
                            })
                        },
                        success: function(e) {
                            var t = this,
                                n = t.options;
                            return t.trigger(J, {
                                response: e,
                                type: "read"
                            }), e = t.reader.parse(e), t._handleCustomErrors(e) ? void t._dequeueRequest() : (t._total = t.reader.total(e), t._pristineTotal = t._total, t._aggregate && n.serverAggregates && (t._aggregateResult = t.reader.aggregates(e)), e = t._readData(e), t._pristineData = e.slice(0), t._data = t._observe(e), t._addRange(t._data), t._process(t._data), void t._dequeueRequest())
                        },
                        _addRange: function(e) {
                            var t = this,
                                n = t._skip || 0,
                                r = n + t._flatData(e).length;
                            t._ranges.push({
                                start: n,
                                end: r,
                                data: e
                            }), t._ranges.sort(function(e, t) {
                                return e.start - t.start
                            })
                        },
                        error: function(e, t, n) {
                            this._dequeueRequest(), this.trigger(J, {}), this.trigger(B, {
                                xhr: e,
                                status: t,
                                errorThrown: n
                            })
                        },
                        _params: function(e) {
                            var t = this,
                                n = M({
                                    take: t.take(),
                                    skip: t.skip(),
                                    page: t.page(),
                                    pageSize: t.pageSize(),
                                    sort: t._sort,
                                    filter: t._filter,
                                    group: t._group,
                                    aggregate: t._aggregate
                                }, e);
                            return t.options.serverPaging || (delete n.take, delete n.skip, delete n.page, delete n.pageSize), t.options.serverGrouping ? t.reader.model && n.group && (n.group = T(n.group, t.reader.model)) : delete n.group, t.options.serverFiltering ? t.reader.model && n.filter && (n.filter = x(n.filter, t.reader.model)) : delete n.filter, t.options.serverSorting ? t.reader.model && n.sort && (n.sort = T(n.sort, t.reader.model)) : delete n.sort, t.options.serverAggregates ? t.reader.model && n.aggregate && (n.aggregate = T(n.aggregate, t.reader.model)) : delete n.aggregate, n
                        },
                        _queueRequest: function(e, n) {
                            var r = this;
                            r._requestInProgress ? r._pending = {
                                callback: j(n, r),
                                options: e
                            } : (r._requestInProgress = !0, r._pending = t, n())
                        },
                        _dequeueRequest: function() {
                            var e = this;
                            e._requestInProgress = !1, e._pending && e._queueRequest(e._pending.options, e._pending.callback)
                        },
                        _handleCustomErrors: function(e) {
                            if (this.reader.errors) {
                                var t = this.reader.errors(e);
                                if (t) return this.trigger(B, {
                                    xhr: null,
                                    status: "customerror",
                                    errorThrown: "custom error",
                                    errors: t
                                }), !0
                            }
                            return !1
                        },
                        _observe: function(e) {
                            var t = this,
                                n = t.reader.model,
                                r = !1;
                            return n && e.length && (r = !(e[0] instanceof n)), e instanceof ut ? r && (e.type = t.reader.model, e.wrapAll(e, e)) : (e = new ut(e, t.reader.model), e.parent = function() {
                                return t.parent()
                            }), t._isServerGrouped() && wrapGroupItems(e, n), t._changeHandler && t._data && t._data instanceof ut ? t._data.unbind(q, t._changeHandler) : t._changeHandler = j(t._change, t), e.bind(q, t._changeHandler)
                        },
                        _change: function(e) {
                            var t, n, r = this,
                                i = e ? e.action : "";
                            if ("remove" === i)
                                for (t = 0, n = e.items.length; n > t; t++) e.items[t].isNew && e.items[t].isNew() || r._destroyed.push(e.items[t]);
                            if (!r.options.autoSync || "add" !== i && "remove" !== i && "itemchange" !== i) {
                                var o = parseInt(r._total || r._pristineTotal, 10);
                                "add" === i ? o += e.items.length : "remove" === i ? o -= e.items.length : "itemchange" === i || "sync" === i || r.options.serverPaging ? "sync" === i && (o = r._pristineTotal = parseInt(r._total, 10)) : o = r._pristineTotal, r._total = o, r._process(r._data, e)
                            } else r.sync()
                        },
                        _process: function(e, n) {
                            var r, i = this,
                                a = {};
                            i.options.serverPaging !== !0 && (a.skip = i._skip, a.take = i._take || i._pageSize, a.skip === t && i._page !== t && i._pageSize !== t && (a.skip = (i._page - 1) * i._pageSize)), i.options.serverSorting !== !0 && (a.sort = i._sort), i.options.serverFiltering !== !0 && (a.filter = i._filter), i.options.serverGrouping !== !0 && (a.group = i._group), i.options.serverAggregates !== !0 && (a.aggregate = i._aggregate, i._aggregateResult = g(e, a)), r = o.process(e, a), i._view = r.data, r.total === t || i.options.serverFiltering || (i._total = r.total), n = n || {}, n.items = n.items || i._view, i.trigger(q, n)
                        },
                        _mergeState: function(e) {
                            var n = this;
                            return e !== t && (n._pageSize = e.pageSize, n._page = e.page, n._sort = e.sort, n._filter = e.filter, n._group = e.group, n._aggregate = e.aggregate, n._skip = e.skip, n._take = e.take, n._skip === t && (n._skip = n.skip(), e.skip = n.skip()), n._take === t && n._pageSize !== t && (n._take = n._pageSize, e.take = n._take), e.sort && (n._sort = e.sort = a(e.sort)), e.filter && (n._filter = e.filter = l(e.filter)), e.group && (n._group = e.group = c(e.group)), e.aggregate && (n._aggregate = e.aggregate = u(e.aggregate))), e
                        },
                        query: function(e) {
                            var n, r = this,
                                i = r.options.serverSorting || r.options.serverPaging || r.options.serverFiltering || r.options.serverGrouping || r.options.serverAggregates;
                            i || (r._data === t || 0 === r._data.length) && !r._destroyed.length ? r.read(r._mergeState(e)) : r.trigger(G, {
                                type: "read"
                            }) || (r.trigger($), n = o.process(r._data, r._mergeState(e)), r.options.serverFiltering || (r._total = n.total !== t ? n.total : r._data.length), r._view = n.data, r._aggregateResult = g(r._data, e), r.trigger(J, {}), r.trigger(q, {
                                items: n.data
                            }))
                        },
                        fetch: function(t) {
                            var n = this;
                            return e.Deferred(function(e) {
                                var r = function(r) {
                                        n.unbind(B, i), e.resolve(), t && t.call(n, r)
                                    },
                                    i = function(t) {
                                        e.reject(t)
                                    };
                                n.one(q, r), n.one(B, i), n._query()
                            }).promise()
                        },
                        _query: function(e) {
                            var t = this;
                            t.query(M({}, {
                                page: t.page(),
                                pageSize: t.pageSize(),
                                sort: t.sort(),
                                filter: t.filter(),
                                group: t.group(),
                                aggregate: t.aggregate()
                            }, e))
                        },
                        next: function(e) {
                            var t = this,
                                n = t.page(),
                                r = t.total();
                            return e = e || {}, !n || r && n + 1 > t.totalPages() ? void 0 : (t._skip = n * t.take(), n += 1, e.page = n, t._query(e), n)
                        },
                        prev: function(e) {
                            var t = this,
                                n = t.page();
                            return e = e || {}, n && 1 !== n ? (t._skip = t._skip - t.take(), n -= 1, e.page = n, t._query(e), n) : void 0
                        },
                        page: function(e) {
                            var n, r = this;
                            return e !== t ? (e = Y.max(Y.min(Y.max(e, 1), r.totalPages()), 1), void r._query({
                                page: e
                            })) : (n = r.skip(), n !== t ? Y.round((n || 0) / (r.take() || 1)) + 1 : t)
                        },
                        pageSize: function(e) {
                            var n = this;
                            return e !== t ? void n._query({
                                pageSize: e,
                                page: 1
                            }) : n.take()
                        },
                        sort: function(e) {
                            var n = this;
                            return e !== t ? void n._query({
                                sort: e
                            }) : n._sort
                        },
                        filter: function(e) {
                            var n = this;
                            return e === t ? n._filter : void n._query({
                                filter: e,
                                page: 1
                            })
                        },
                        group: function(e) {
                            var n = this;
                            return e !== t ? void n._query({
                                group: e
                            }) : n._group
                        },
                        total: function() {
                            return parseInt(this._total || 0, 10)
                        },
                        aggregate: function(e) {
                            var n = this;
                            return e !== t ? void n._query({
                                aggregate: e
                            }) : n._aggregate
                        },
                        aggregates: function() {
                            return this._aggregateResult
                        },
                        totalPages: function() {
                            var e = this,
                                t = e.pageSize() || e.total();
                            return Y.ceil((e.total() || 0) / t)
                        },
                        inRange: function(e, t) {
                            var n = this,
                                r = Y.min(e + t, n.total());
                            return !n.options.serverPaging && n._data.length > 0 ? !0 : n._findRange(e, r).length > 0
                        },
                        lastRange: function() {
                            var e = this._ranges;
                            return e[e.length - 1] || {
                                start: 0,
                                end: 0,
                                data: []
                            }
                        },
                        firstItemUid: function() {
                            var e = this._ranges;
                            return e.length && e[0].data.length && e[0].data[0].uid
                        },
                        range: function(e, n) {
                            e = Y.min(e || 0, this.total());
                            var r, i = this,
                                o = Y.max(Y.floor(e / n), 0) * n,
                                a = Y.min(o + n, i.total());
                            if (r = i._findRange(e, Y.min(e + n, i.total())), r.length) {
                                i._skip = e > i.skip() ? Y.min(a, (i.totalPages() - 1) * i.take()) : o, i._take = n;
                                var s = i.options.serverPaging,
                                    l = i.options.serverSorting,
                                    u = i.options.serverFiltering,
                                    c = i.options.serverAggregates;
                                try {
                                    i.options.serverPaging = !0, i._isServerGrouped() || i.group() && i.group().length || (i.options.serverSorting = !0), i.options.serverFiltering = !0, i.options.serverPaging = !0, i.options.serverAggregates = !0, s && (i._data = r = i._observe(r)), i._process(r)
                                } finally {
                                    i.options.serverPaging = s, i.options.serverSorting = l, i.options.serverFiltering = u, i.options.serverAggregates = c
                                }
                            } else n !== t && (i._rangeExists(o, a) ? e > o && i.prefetch(a, n, function() {
                                i.range(e, n)
                            }) : i.prefetch(o, n, function() {
                                e > o && a < i.total() && !i._rangeExists(a, Y.min(a + n, i.total())) ? i.prefetch(a, n, function() {
                                    i.range(e, n)
                                }) : i.range(e, n)
                            }))
                        },
                        _findRange: function(e, n) {
                            var r, i, s, l, u, d, f, p, h, g, m, _ = this,
                                v = _._ranges,
                                y = [],
                                b = _.options,
                                w = b.serverSorting || b.serverPaging || b.serverFiltering || b.serverGrouping || b.serverAggregates;
                            for (i = 0, m = v.length; m > i; i++)
                                if (r = v[i], e >= r.start && e <= r.end) {
                                    for (g = 0, s = i; m > s; s++)
                                        if (r = v[s], h = _._flatData(r.data), h.length && e + g >= r.start) {
                                            if (d = r.data, f = r.end, !w) {
                                                var k = c(_.group() || []).concat(a(_.sort() || []));
                                                p = o.process(r.data, {
                                                    sort: k,
                                                    filter: _.filter()
                                                }), h = d = p.data, p.total !== t && (f = p.total)
                                            }
                                            if (l = 0, e + g > r.start && (l = e + g - r.start), u = h.length, f > n && (u -= f - n), g += u - l, y = _._mergeGroups(y, d, l, u), n <= r.end && g == n - e) return y
                                        }
                                    break
                                }
                            return []
                        },
                        _mergeGroups: function(e, t, n, r) {
                            if (this._isServerGrouped()) {
                                var i, o = t.toJSON();
                                return e.length && (i = e[e.length - 1]), mergeGroups(i, o, n, r), e.concat(o)
                            }
                            return e.concat(t.slice(n, r))
                        },
                        skip: function() {
                            var e = this;
                            return e._skip === t ? e._page !== t ? (e._page - 1) * (e.take() || 1) : t : e._skip
                        },
                        take: function() {
                            return this._take || this._pageSize
                        },
                        _prefetchSuccessHandler: function(e, t, n) {
                            var r = this;
                            return function(i) {
                                var o, a, s, l = !1,
                                    u = {
                                        start: e,
                                        end: t,
                                        data: []
                                    };
                                if (r._dequeueRequest(), r.trigger(J, {
                                        response: i,
                                        type: "read"
                                    }), i = r.reader.parse(i), s = r._readData(i), s.length) {
                                    for (o = 0, a = r._ranges.length; a > o; o++)
                                        if (r._ranges[o].start === e) {
                                            l = !0, u = r._ranges[o];
                                            break
                                        }
                                    l || r._ranges.push(u)
                                }
                                u.data = r._observe(s), u.end = u.start + r._flatData(u.data).length, r._ranges.sort(function(e, t) {
                                    return e.start - t.start
                                }), r._total = r.reader.total(i), n && s.length ? n() : r.trigger(q, {})
                            }
                        },
                        prefetch: function(e, t, n) {
                            var r = this,
                                i = Y.min(e + t, r.total()),
                                o = {
                                    take: t,
                                    skip: e,
                                    page: e / t + 1,
                                    pageSize: t,
                                    sort: r._sort,
                                    filter: r._filter,
                                    group: r._group,
                                    aggregate: r._aggregate
                                };
                            r._rangeExists(e, i) ? n && n() : (clearTimeout(r._timeout), r._timeout = setTimeout(function() {
                                r._queueRequest(o, function() {
                                    r.trigger(G, {
                                        type: "read"
                                    }) ? r._dequeueRequest() : r.transport.read({
                                        data: r._params(o),
                                        success: r._prefetchSuccessHandler(e, i, n)
                                    })
                                })
                            }, 100))
                        },
                        _rangeExists: function(e, t) {
                            var n, r, i = this,
                                o = i._ranges;
                            for (n = 0, r = o.length; r > n; n++)
                                if (o[n].start <= e && o[n].end >= t) return !0;
                            return !1
                        },
                        _removeModelFromRanges: function(e) {
                            for (var t, n, r, i = 0, o = this._ranges.length; o > i && (r = this._ranges[i], this._eachItem(r.data, function(r) {
                                    t = _(r, e), t && (n = !0)
                                }), !n); i++);
                        },
                        _updateRangesLength: function() {
                            for (var e, t, n = 0, r = 0, i = this._ranges.length; i > r; r++) e = this._ranges[r], e.start = e.start - n, t = this._flatData(e.data).length, n = e.end - t, e.end = e.start + t
                        }
                    }),
                    kt = {};
                kt.create = function(e, t) {
                    var n, r = e.transport;
                    return r ? (r.read = typeof r.read === L ? {
                        url: r.read
                    } : r.read, e.type && (I.data.transports[e.type] && !z(I.data.transports[e.type]) ? n = new I.data.transports[e.type](M(r, {
                        data: t
                    })) : r = M(!0, {}, I.data.transports[e.type], r), e.schema = M(!0, {}, I.data.schemas[e.type], e.schema)), n || (n = N(r.read) ? r : new RemoteTransport(r))) : n = new yt({
                        data: e.data
                    }), n
                }, wt.create = function(e) {
                    (O(e) || e instanceof ut) && (e = {
                        data: e
                    });
                    var t, n, r, i = e || {},
                        o = i.data,
                        a = i.fields,
                        s = i.table,
                        l = i.select,
                        u = {};
                    if (o || !a || i.transport || (s ? o = inferTable(s, a) : l && (o = S(l, a))), I.data.Model && a && (!i.schema || !i.schema.model)) {
                        for (t = 0, n = a.length; n > t; t++) r = a[t], r.type && (u[r.field] = r);
                        E(u) || (i.schema = M(!0, i.schema, {
                            model: {
                                fields: u
                            }
                        }))
                    }
                    return i.data = o, s = null, i.table = null, i instanceof wt ? i : new wt(i)
                }, M(!0, I.data, {
                    readers: {
                        json: bt
                    },
                    Query: o,
                    DataSource: wt,
                    ObservableObject: ct,
                    ObservableArray: ut,
                    LocalTransport: yt,
                    DataReader: bt,
                    Model: pt
                })
            }(window.kendo.jQuery), window.kendo
        }, "function" == typeof _dfn && _dfn.amd ? _dfn : function(e, t) {
            t()
        }),
        function(e, t) {
            t("kendo/kendo.tabstrip", ["./kendo.data"], e)
        }(function() {
            return function(e, t) {
                function n(t) {
                    t.children(g).addClass(x), t.children("a").addClass(v).children(g).addClass(x), t.filter(":not([disabled]):not([class*=k-state-disabled])").addClass(P), t.filter("li[disabled]").addClass(D).removeAttr("disabled"), t.filter(":not([class*=k-state])").children("a").filter(":focus").parent().addClass(A + " " + H), t.attr("role", "tab"), t.filter("." + A).attr("aria-selected", !0), t.each(function() {
                        var t = e(this);
                        t.children("." + v).length || t.contents().filter(function() {
                            return !(this.nodeName.match(p) || 3 == this.nodeType && !u(this.nodeValue))
                        }).wrapAll("<a class='" + v + "'/>")
                    })
                }

                function r(e) {
                    var t = e.children(".k-item");
                    t.filter(".k-first:not(:first-child)").removeClass(T), t.filter(".k-last:not(:last-child)").removeClass(y), t.filter(":first-child").addClass(T), t.filter(":last-child").addClass(y)
                }
                var i = window.kendo,
                    o = i.ui,
                    a = i.keys,
                    s = e.map,
                    l = e.each,
                    u = e.trim,
                    c = e.extend,
                    d = i.template,
                    f = o.Widget,
                    p = /^(a|div)$/i,
                    h = ".kendoTabStrip",
                    g = "img",
                    m = "href",
                    _ = "prev",
                    v = "k-link",
                    y = "k-last",
                    b = "click",
                    w = "error",
                    k = ":empty",
                    x = "k-image",
                    T = "k-first",
                    S = "select",
                    C = "activate",
                    M = "k-content",
                    j = "contentUrl",
                    z = "mouseenter",
                    E = "mouseleave",
                    O = "contentLoad",
                    D = "k-state-disabled",
                    P = "k-state-default",
                    A = "k-state-active",
                    I = "k-state-focused",
                    N = "k-state-hover",
                    H = "k-tab-on-top",
                    F = ".k-item:not(." + D + ")",
                    L = ".k-tabstrip-items > " + F + ":not(." + A + ")",
                    R = {
                        content: d("<div class='k-content'#= contentAttributes(data) # role='tabpanel'>#= content(item) #</div>"),
                        itemWrapper: d("<#= tag(item) # class='k-link'#= contentUrl(item) ##= textAttributes(item) #>#= image(item) ##= sprite(item) ##= text(item) #</#= tag(item) #>"),
                        item: d("<li class='#= wrapperCssClass(group, item) #' role='tab' #=item.active ? \"aria-selected='true'\" : ''#>#= itemWrapper(data) #</li>"),
                        image: d("<img class='k-image' alt='' src='#= imageUrl #' />"),
                        sprite: d("<span class='k-sprite #= spriteCssClass #'></span>"),
                        empty: d("")
                    },
                    q = {
                        wrapperCssClass: function(e, t) {
                            var n = "k-item",
                                r = t.index;
                            return n += t.enabled === !1 ? " k-state-disabled" : " k-state-default", 0 === r && (n += " k-first"), r == e.length - 1 && (n += " k-last"), n
                        },
                        textAttributes: function(e) {
                            return e.url ? " href='" + e.url + "'" : ""
                        },
                        text: function(e) {
                            return e.encoded === !1 ? e.text : i.htmlEncode(e.text)
                        },
                        tag: function(e) {
                            return e.url ? "a" : "span"
                        },
                        contentAttributes: function(e) {
                            return e.active !== !0 ? " style='display:none' aria-hidden='true' aria-expanded='false'" : ""
                        },
                        content: function(e) {
                            return e.content ? e.content : e.contentUrl ? "" : "&nbsp;"
                        },
                        contentUrl: function(e) {
                            return e.contentUrl ? i.attr("content-url") + '="' + e.contentUrl + '"' : ""
                        }
                    },
                    W = f.extend({
                        init: function(t, n) {
                            var r = this;
                            f.fn.init.call(r, t, n), r._animations(r.options), r.wrapper = r.element.is("ul") ? r.element.wrapAll("<div />").parent() : r.element, n = r.options, r._isRtl = i.support.isRtl(r.wrapper), r._tabindex(), r._updateClasses(), r._dataSource(), n.dataSource && r.dataSource.fetch(), r.options.contentUrls && r.wrapper.find(".k-tabstrip-items > .k-item").each(function(t, n) {
                                e(n).find(">." + v).data(j, r.options.contentUrls[t])
                            }), r.wrapper.on(z + h + " " + E + h, L, r._toggleHover).on("keydown" + h, e.proxy(r._keydown, r)).on("focus" + h, e.proxy(r._active, r)).on("blur" + h, function() {
                                r._current(null)
                            }), r.wrapper.children(".k-tabstrip-items").on(b + h, ".k-state-disabled .k-link", !1).on(b + h, " > " + F, function(t) {
                                r.wrapper[0] !== document.activeElement && r.wrapper.focus(), r._click(e(t.currentTarget)) && t.preventDefault()
                            });
                            var o = r.tabGroup.children("li." + A),
                                a = r.contentHolder(o.index());
                            o[0] && a.length > 0 && 0 === a[0].childNodes.length && r.activateTab(o.eq(0)), r.element.attr("role", "tablist"), r.element[0].id && (r._ariaId = r.element[0].id + "_ts_active"), i.notify(r)
                        },
                        _active: function() {
                            var e = this.tabGroup.children().filter("." + A);
                            e = e[0] ? e : this._endItem("first"), e[0] && this._current(e)
                        },
                        _endItem: function(e) {
                            return this.tabGroup.children(F)[e]()
                        },
                        _item: function(e, t) {
                            var n;
                            return n = t === _ ? "last" : "first", e ? (e = e[t](), e[0] || (e = this._endItem(n)), e.hasClass(D) && (e = this._item(e, t)), e) : this._endItem(n)
                        },
                        _current: function(e) {
                            var n = this,
                                r = n._focused,
                                i = n._ariaId;
                            return e === t ? r : (r && (r[0].id === i && r.removeAttr("id"), r.removeClass(I)), e && (e.hasClass(A) || e.addClass(I), n.element.removeAttr("aria-activedescendant"), i = e[0].id || i, i && (e.attr("id", i), n.element.attr("aria-activedescendant", i))), void(n._focused = e))
                        },
                        _keydown: function(e) {
                            var t, n = this,
                                r = e.keyCode,
                                i = n._current(),
                                o = n._isRtl;
                            if (e.target == e.currentTarget) {
                                if (r == a.DOWN || r == a.RIGHT) t = o ? _ : "next";
                                else if (r == a.UP || r == a.LEFT) t = o ? "next" : _;
                                else if (r == a.ENTER || r == a.SPACEBAR) n._click(i), e.preventDefault();
                                else {
                                    if (r == a.HOME) return n._click(n._endItem("first")), void e.preventDefault();
                                    if (r == a.END) return n._click(n._endItem("last")), void e.preventDefault()
                                }
                                t && (n._click(n._item(i, t)), e.preventDefault())
                            }
                        },
                        _dataSource: function() {
                            var t = this;
                            t.dataSource && t._refreshHandler ? t.dataSource.unbind("change", t._refreshHandler) : t._refreshHandler = e.proxy(t.refresh, t), t.dataSource = i.data.DataSource.create(t.options.dataSource).bind("change", t._refreshHandler)
                        },
                        setDataSource: function(e) {
                            this.options.dataSource = e, this._dataSource(), e.fetch()
                        },
                        _animations: function(e) {
                            e && "animation" in e && !e.animation && (e.animation = {
                                open: {
                                    effects: {}
                                },
                                close: {
                                    effects: {}
                                }
                            })
                        },
                        refresh: function(e) {
                            var t, n, r, o, a = this,
                                s = a.options,
                                l = i.getter(s.dataTextField),
                                u = i.getter(s.dataContentField),
                                c = i.getter(s.dataContentUrlField),
                                d = i.getter(s.dataImageUrlField),
                                f = i.getter(s.dataUrlField),
                                p = i.getter(s.dataSpriteCssClass),
                                h = [],
                                g = a.dataSource.view();
                            for (e = e || {}, r = e.action, r && (g = e.items), t = 0, o = g.length; o > t; t++) n = {
                                text: l(g[t])
                            }, s.dataContentField && (n.content = u(g[t])), s.dataContentUrlField && (n.contentUrl = c(g[t])), s.dataUrlField && (n.url = f(g[t])), s.dataImageUrlField && (n.imageUrl = d(g[t])), s.dataSpriteCssClass && (n.spriteCssClass = p(g[t])), h[t] = n;
                            if ("add" == e.action) e.index < a.tabGroup.children().length ? a.insertBefore(h, a.tabGroup.children().eq(e.index)) : a.append(h);
                            else if ("remove" == e.action)
                                for (t = 0; t < g.length; t++) a.remove(e.index);
                            else "itemchange" == e.action ? (t = a.dataSource.view().indexOf(g[0]), e.field === s.dataTextField && a.tabGroup.children().eq(t).find(".k-link").text(g[0].get(e.field))) : (a.trigger("dataBinding"), a.remove("li"), a.append(h), a.trigger("dataBound"))
                        },
                        value: function(n) {
                            var r = this;
                            return n === t ? r.select().text() : void(n != r.value() && r.tabGroup.children().each(function() {
                                e.trim(e(this).text()) == n && r.select(this)
                            }))
                        },
                        items: function() {
                            return this.tabGroup[0].children
                        },
                        setOptions: function(e) {
                            var t = this.options.animation;
                            this._animations(e), e.animation = c(!0, t, e.animation), f.fn.setOptions.call(this, e)
                        },
                        events: [S, C, w, O, "change", "dataBinding", "dataBound"],
                        options: {
                            name: "TabStrip",
                            dataTextField: "",
                            dataContentField: "",
                            dataImageUrlField: "",
                            dataUrlField: "",
                            dataSpriteCssClass: "",
                            dataContentUrlField: "",
                            animation: {
                                open: {
                                    effects: "expand:vertical fadeIn",
                                    duration: 200
                                },
                                close: {
                                    duration: 200
                                }
                            },
                            collapsible: !1
                        },
                        destroy: function() {
                            var e = this;
                            f.fn.destroy.call(e), e._refreshHandler && e.dataSource.unbind("change", e._refreshHandler), e.wrapper.off(h), e.wrapper.children(".k-tabstrip-items").off(h), i.destroy(e.wrapper)
                        },
                        select: function(t) {
                            var n = this;
                            return 0 === arguments.length ? n.tabGroup.children("li." + A) : (isNaN(t) || (t = n.tabGroup.children().get(t)), t = n.tabGroup.find(t), e(t).each(function(t, r) {
                                r = e(r), r.hasClass(A) || n.trigger(S, {
                                    item: r[0],
                                    contentElement: n.contentHolder(r.index())[0]
                                }) || n.activateTab(r)
                            }), n)
                        },
                        enable: function(e, t) {
                            return this._toggleDisabled(e, t !== !1), this
                        },
                        disable: function(e) {
                            return this._toggleDisabled(e, !1), this
                        },
                        reload: function(t) {
                            t = this.tabGroup.find(t);
                            var n = this;
                            return t.each(function() {
                                var t = e(this),
                                    r = t.find("." + v).data(j),
                                    i = n.contentHolder(t.index());
                                r && n.ajaxRequest(t, i, null, r)
                            }), n
                        },
                        append: function(e) {
                            var t = this,
                                n = t._create(e);
                            return l(n.tabs, function(e) {
                                t.tabGroup.append(this), t.wrapper.append(n.contents[e])
                            }), r(t.tabGroup), t._updateContentElements(), t
                        },
                        insertBefore: function(t, n) {
                            n = this.tabGroup.find(n);
                            var i = this,
                                o = i._create(t),
                                a = e(i.contentElement(n.index()));
                            return l(o.tabs, function(e) {
                                n.before(this), a.before(o.contents[e])
                            }), r(i.tabGroup), i._updateContentElements(), i
                        },
                        insertAfter: function(t, n) {
                            n = this.tabGroup.find(n);
                            var i = this,
                                o = i._create(t),
                                a = e(i.contentElement(n.index()));
                            return l(o.tabs, function(e) {
                                n.after(this), a.after(o.contents[e])
                            }), r(i.tabGroup), i._updateContentElements(), i
                        },
                        remove: function(t) {
                            var n = this,
                                r = typeof t,
                                i = e();
                            return "string" === r ? t = n.tabGroup.find(t) : "number" === r && (t = n.tabGroup.children().eq(t)), t.each(function() {
                                i.push(n.contentElement(e(this).index()))
                            }), t.remove(), i.remove(), n._updateContentElements(), n
                        },
                        _create: function(t) {
                            var r, i, o, a = e.isPlainObject(t),
                                l = this;
                            return a || e.isArray(t) ? (t = e.isArray(t) ? t : [t], r = s(t, function(t, n) {
                                return e(W.renderItem({
                                    group: l.tabGroup,
                                    item: c(t, {
                                        index: n
                                    })
                                }))
                            }), i = s(t, function(t, n) {
                                return t.content || t.contentUrl ? e(W.renderContent({
                                    item: c(t, {
                                        index: n
                                    })
                                })) : void 0
                            })) : (r = "string" == typeof t && "<" != t[0] ? l.element.find(t) : e(t), i = e(), r.each(function() {
                                if (o = e("<div class='" + M + "'/>"), /k-tabstrip-items/.test(this.parentNode.className)) {
                                    var t = parseInt(this.getAttribute("aria-controls").replace(/^.*-/, ""), 10) - 1;
                                    o = e(l.contentElement(t))
                                }
                                i = i.add(o)
                            }), n(r)), {
                                tabs: r,
                                contents: i
                            }
                        },
                        _toggleDisabled: function(t, n) {
                            t = this.tabGroup.find(t), t.each(function() {
                                e(this).toggleClass(P, n).toggleClass(D, !n)
                            })
                        },
                        _updateClasses: function() {
                            var i, o, a, s = this;
                            s.wrapper.addClass("k-widget k-header k-tabstrip"), s.tabGroup = s.wrapper.children("ul").addClass("k-tabstrip-items k-reset"), s.tabGroup[0] || (s.tabGroup = e("<ul class='k-tabstrip-items k-reset'/>").appendTo(s.wrapper)), i = s.tabGroup.find("li").addClass("k-item"), i.length && (o = i.filter("." + A).index(), a = o >= 0 ? o : t, s.tabGroup.contents().filter(function() {
                                return 3 == this.nodeType && !u(this.nodeValue)
                            }).remove()), o >= 0 && i.eq(o).addClass(H), s.contentElements = s.wrapper.children("div"), s.contentElements.addClass(M).eq(a).addClass(A).css({
                                display: "block"
                            }), i.length && (n(i), r(s.tabGroup), s._updateContentElements())
                        },
                        _updateContentElements: function() {
                            var t = this,
                                n = t.options.contentUrls || [],
                                r = t.tabGroup.find(".k-item"),
                                o = (t.element.attr("id") || i.guid()) + "-",
                                a = t.wrapper.children("div");
                            a.length && r.length > a.length ? (a.each(function(e) {
                                var t = parseInt(this.id.replace(o, ""), 10),
                                    n = r.filter("[aria-controls=" + o + t + "]"),
                                    i = o + (e + 1);
                                n.data("aria", i), this.setAttribute("id", i)
                            }), r.each(function() {
                                var t = e(this);
                                this.setAttribute("aria-controls", t.data("aria")), t.removeData("aria")
                            })) : r.each(function(r) {
                                var i = a.eq(r),
                                    s = o + (r + 1);
                                this.setAttribute("aria-controls", s), !i.length && n[r] ? e("<div class='" + M + "'/>").appendTo(t.wrapper).attr("id", s) : (i.attr("id", s), e(this).children(".k-loading")[0] || n[r] || e("<span class='k-loading k-complete'/>").prependTo(this)), i.attr("role", "tabpanel"), i.filter(":not(." + A + ")").attr("aria-hidden", !0).attr("aria-expanded", !1), i.filter("." + A).attr("aria-expanded", !0)
                            }), t.contentElements = t.contentAnimators = t.wrapper.children("div"), i.kineticScrollNeeded && i.mobile.ui.Scroller && (i.touchScroller(t.contentElements), t.contentElements = t.contentElements.children(".km-scroll-container"))
                        },
                        _toggleHover: function(t) {
                            e(t.currentTarget).toggleClass(N, t.type == z)
                        },
                        _click: function(e) {
                            var t, n, r = this,
                                i = e.find("." + v),
                                o = i.attr(m),
                                a = r.options.collapsible,
                                s = r.contentHolder(e.index());
                            if (e.closest(".k-widget")[0] == r.wrapper[0]) {
                                if (e.is("." + D + (a ? "" : ",." + A))) return !0;
                                if (n = i.data(j) || o && ("#" == o.charAt(o.length - 1) || -1 != o.indexOf("#" + r.element[0].id + "-")), t = !o || n, r.tabGroup.children("[data-animating]").length) return t;
                                if (r.trigger(S, {
                                        item: e[0],
                                        contentElement: s[0]
                                    })) return !0;
                                if (t !== !1) return a && e.is("." + A) ? (r.deactivateTab(e), !0) : (r.activateTab(e) && (t = !0), t)
                            }
                        },
                        deactivateTab: function(e) {
                            var t = this,
                                n = t.options.animation,
                                r = n.open,
                                o = c({}, n.close),
                                a = o && "effects" in o;
                            e = t.tabGroup.find(e), o = c(a ? o : c({
                                reverse: !0
                            }, r), {
                                hide: !0
                            }), i.size(r.effects) ? (e.kendoAddClass(P, {
                                duration: r.duration
                            }), e.kendoRemoveClass(A, {
                                duration: r.duration
                            })) : (e.addClass(P), e.removeClass(A)), e.removeAttr("aria-selected"), t.contentAnimators.filter("." + A).kendoStop(!0, !0).kendoAnimate(o).removeClass(A).attr("aria-hidden", !0)
                        },
                        activateTab: function(e) {
                            e = this.tabGroup.find(e);
                            var t = this,
                                n = t.options.animation,
                                r = n.open,
                                o = c({}, n.close),
                                a = o && "effects" in o,
                                s = e.parent().children(),
                                l = s.filter("." + A),
                                u = s.index(e);
                            o = c(a ? o : c({
                                reverse: !0
                            }, r), {
                                hide: !0
                            }), i.size(r.effects) ? (l.kendoRemoveClass(A, {
                                duration: o.duration
                            }), e.kendoRemoveClass(N, {
                                duration: o.duration
                            })) : (l.removeClass(A), e.removeClass(N));
                            var d = t.contentAnimators;
                            if (t.inRequest && (t.xhr.abort(), t.inRequest = !1), 0 === d.length) return l.removeClass(H), e.addClass(H).css("z-index"), e.addClass(A), t._current(e), t.trigger("change"), !1;
                            var f = d.filter("." + A),
                                p = t.contentHolder(u),
                                h = p.closest(".k-content");
                            if (0 === p.length) return f.removeClass(A).attr("aria-hidden", !0).kendoStop(!0, !0).kendoAnimate(o), !1;
                            e.attr("data-animating", !0);
                            var g = (e.children("." + v).data(j) || !1) && p.is(k),
                                m = function() {
                                    l.removeClass(H), e.addClass(H).css("z-index"), i.size(r.effects) ? (l.kendoAddClass(P, {
                                        duration: r.duration
                                    }), e.kendoAddClass(A, {
                                        duration: r.duration
                                    })) : (l.addClass(P), e.addClass(A)), l.removeAttr("aria-selected"), e.attr("aria-selected", !0), t._current(e), h.addClass(A).removeAttr("aria-hidden").kendoStop(!0, !0).attr("aria-expanded", !0).kendoAnimate(c({
                                        init: function() {
                                            t.trigger(C, {
                                                item: e[0],
                                                contentElement: p[0]
                                            })
                                        }
                                    }, r, {
                                        complete: function() {
                                            e.removeAttr("data-animating")
                                        }
                                    }))
                                },
                                _ = function() {
                                    g ? (e.removeAttr("data-animating"), t.ajaxRequest(e, p, function() {
                                        e.attr("data-animating", !0), m(), t.trigger("change")
                                    })) : (m(), t.trigger("change"))
                                };
                            return f.removeClass(A), f.attr("aria-hidden", !0), f.attr("aria-expanded", !1), f.length ? f.kendoStop(!0, !0).kendoAnimate(c({
                                complete: _
                            }, o)) : _(), !0
                        },
                        contentElement: function(e) {
                            if (isNaN(e - 0)) return t;
                            var n = this.contentElements && this.contentElements[0] && !i.kineticScrollNeeded ? this.contentElements : this.contentAnimators;
                            e = n && 0 > e ? n.length + e : e;
                            var r = new RegExp("-" + (e + 1) + "$");
                            if (n)
                                for (var o = 0, a = n.length; a > o; o++)
                                    if (r.test(n.eq(o).closest(".k-content")[0].id)) return n[o];
                            return t
                        },
                        contentHolder: function(t) {
                            var n = e(this.contentElement(t)),
                                r = n.children(".km-scroll-container");
                            return i.support.touch && r[0] ? r : n
                        },
                        ajaxRequest: function(t, n, r, o) {
                            t = this.tabGroup.find(t);
                            var a = this,
                                s = e.ajaxSettings.xhr,
                                l = t.find("." + v),
                                u = {},
                                c = t.width() / 2,
                                d = !1,
                                f = t.find(".k-loading").removeClass("k-complete");
                            f[0] || (f = e("<span class='k-loading'/>").prependTo(t));
                            var p = 2 * c - f.width(),
                                h = function() {
                                    f.animate({
                                        marginLeft: (parseInt(f.css("marginLeft"), 10) || 0) < c ? p : 0
                                    }, 500, h)
                                };
                            i.support.browser.msie && i.support.browser.version < 10 && setTimeout(h, 40), o = o || l.data(j) || l.attr(m), a.inRequest = !0, a.xhr = e.ajax({
                                type: "GET",
                                cache: !1,
                                url: o,
                                dataType: "html",
                                data: u,
                                xhr: function() {
                                    var t = this,
                                        n = s(),
                                        r = t.progressUpload ? "progressUpload" : t.progress ? "progress" : !1;
                                    return n && e.each([n, n.upload], function() {
                                        this.addEventListener && this.addEventListener("progress", function(e) {
                                            r && t[r](e)
                                        }, !1)
                                    }), t.noProgress = !(window.XMLHttpRequest && "upload" in new XMLHttpRequest), n
                                },
                                progress: function(e) {
                                    if (e.lengthComputable) {
                                        var t = parseInt(e.loaded / e.total * 100, 10) + "%";
                                        f.stop(!0).addClass("k-progress").css({
                                            width: t,
                                            marginLeft: 0
                                        })
                                    }
                                },
                                error: function(e, t) {
                                    a.trigger("error", {
                                        xhr: e,
                                        status: t
                                    }) && this.complete()
                                },
                                stopProgress: function() {
                                    clearInterval(d), f.stop(!0).addClass("k-progress")[0].style.cssText = ""
                                },
                                complete: function(e) {
                                    a.inRequest = !1, this.noProgress ? setTimeout(this.stopProgress, 500) : this.stopProgress(), "abort" == e.statusText && f.remove()
                                },
                                success: function(e) {
                                    f.addClass("k-complete");
                                    try {
                                        var i = this,
                                            s = 10;
                                        i.noProgress && (f.width(s + "%"), d = setInterval(function() {
                                            i.progress({
                                                lengthComputable: !0,
                                                loaded: Math.min(s, 100),
                                                total: 100
                                            }), s += 10
                                        }, 40)), n.html(e)
                                    } catch (l) {
                                        var u = window.console;
                                        u && u.error && u.error(l.name + ": " + l.message + " in " + o), this.error(this.xhr, "error")
                                    }
                                    r && r.call(a, n), a.trigger(O, {
                                        item: t[0],
                                        contentElement: n[0]
                                    })
                                }
                            })
                        }
                    });
                c(W, {
                    renderItem: function(e) {
                        e = c({
                            tabStrip: {},
                            group: {}
                        }, e);
                        var t = R.empty,
                            n = e.item;
                        return R.item(c(e, {
                            image: n.imageUrl ? R.image : t,
                            sprite: n.spriteCssClass ? R.sprite : t,
                            itemWrapper: R.itemWrapper
                        }, q))
                    },
                    renderContent: function(e) {
                        return R.content(c(e, q))
                    }
                }), i.ui.plugin(W)
            }(window.kendo.jQuery), window.kendo
        }, "function" == typeof _dfn && _dfn.amd ? _dfn : function(e, t) {
            t()
        }),
        function() {
            function e(e, t, n) {
                n = (n || 0) - 1;
                for (var r = e ? e.length : 0; ++n < r;)
                    if (e[n] === t) return n;
                return -1
            }

            function t(t, n) {
                var r = typeof n;
                if (t = t.l, "boolean" == r || null == n) return t[n] ? 0 : -1;
                "number" != r && "string" != r && (r = "object");
                var i = "number" == r ? n : y + n;
                return t = (t = t[r]) && t[i], "object" == r ? t && -1 < e(t, n) ? 0 : -1 : t ? 0 : -1
            }

            function n(e) {
                var t = this.l,
                    n = typeof e;
                if ("boolean" == n || null == e) t[e] = !0;
                else {
                    "number" != n && "string" != n && (n = "object");
                    var r = "number" == n ? e : y + e,
                        t = t[n] || (t[n] = {});
                    "object" == n ? (t[r] || (t[r] = [])).push(e) : t[r] = !0
                }
            }

            function r(e) {
                return e.charCodeAt(0)
            }

            function i(e, t) {
                for (var n = e.m, r = t.m, i = -1, o = n.length; ++i < o;) {
                    var a = n[i],
                        s = r[i];
                    if (a !== s) {
                        if (a > s || "undefined" == typeof a) return 1;
                        if (s > a || "undefined" == typeof s) return -1
                    }
                }
                return e.n - t.n
            }

            function o(e) {
                var t = -1,
                    r = e.length,
                    i = e[0],
                    o = e[r / 2 | 0],
                    a = e[r - 1];
                if (i && "object" == typeof i && o && "object" == typeof o && a && "object" == typeof a) return !1;
                for (i = l(), i["false"] = i["null"] = i["true"] = i.undefined = !1, o = l(), o.k = e, o.l = i, o.push = n; ++t < r;) o.push(e[t]);
                return o
            }

            function a(e) {
                return "\\" + X[e]
            }

            function s() {
                return g.pop() || []
            }

            function l() {
                return m.pop() || {
                    k: null,
                    l: null,
                    m: null,
                    "false": !1,
                    n: 0,
                    "null": !1,
                    number: null,
                    object: null,
                    push: null,
                    string: null,
                    "true": !1,
                    undefined: !1,
                    o: null
                }
            }

            function u(e) {
                return "function" != typeof e.toString && "string" == typeof(e + "")
            }

            function c(e) {
                e.length = 0, g.length < w && g.push(e)
            }

            function d(e) {
                var t = e.l;
                t && d(t), e.k = e.l = e.m = e.object = e.number = e.string = e.o = null, m.length < w && m.push(e)
            }

            function f(e, t, n) {
                t || (t = 0), "undefined" == typeof n && (n = e ? e.length : 0);
                var r = -1;
                n = n - t || 0;
                for (var i = Array(0 > n ? 0 : n); ++r < n;) i[r] = e[t + r];
                return i
            }

            function p(n) {
                function g(e) {
                    return e && "object" == typeof e && !Wn(e) && kn.call(e, "__wrapped__") ? e : new m(e)
                }

                function m(e, t) {
                    this.__chain__ = !!t, this.__wrapped__ = e
                }

                function w(e) {
                    function t() {
                        if (r) {
                            var e = f(r);
                            xn.apply(e, arguments)
                        }
                        if (this instanceof t) {
                            var o = et(n.prototype),
                                e = n.apply(o, e || arguments);
                            return xt(e) ? e : o
                        }
                        return n.apply(i, e || arguments)
                    }
                    var n = e[0],
                        r = e[2],
                        i = e[4];
                    return qn(t, e), t
                }

                function X(e, t, n, r, i) {
                    if (n) {
                        var o = n(e);
                        if ("undefined" != typeof o) return o
                    }
                    if (!xt(e)) return e;
                    var a = gn.call(e);
                    if (!J[a] || !Rn.nodeClass && u(e)) return e;
                    var l = Fn[a];
                    switch (a) {
                        case L:
                        case R:
                            return new l(+e);
                        case U:
                        case $:
                            return new l(e);
                        case G:
                            return o = l(e.source, j.exec(e)), o.lastIndex = e.lastIndex, o
                    }
                    if (a = Wn(e), t) {
                        var d = !r;
                        r || (r = s()), i || (i = s());
                        for (var p = r.length; p--;)
                            if (r[p] == e) return i[p];
                        o = a ? l(e.length) : {}
                    } else o = a ? f(e) : Zn({}, e);
                    return a && (kn.call(e, "index") && (o.index = e.index), kn.call(e, "input") && (o.input = e.input)), t ? (r.push(e), i.push(o), (a ? Xn : nr)(e, function(e, a) {
                        o[a] = X(e, t, n, r, i)
                    }), d && (c(r), c(i)), o) : o
                }

                function et(e) {
                    return xt(e) ? zn(e) : {}
                }

                function nt(e, t, n) {
                    if ("function" != typeof e) return Vt;
                    if ("undefined" == typeof t || !("prototype" in e)) return e;
                    var r = e.__bindData__;
                    if ("undefined" == typeof r && (Rn.funcNames && (r = !e.name), r = r || !Rn.funcDecomp, !r)) {
                        var i = bn.call(e);
                        Rn.funcNames || (r = !z.test(i)), r || (r = P.test(i), qn(e, r))
                    }
                    if (!1 === r || !0 !== r && 1 & r[1]) return e;
                    switch (n) {
                        case 1:
                            return function(n) {
                                return e.call(t, n)
                            };
                        case 2:
                            return function(n, r) {
                                return e.call(t, n, r)
                            };
                        case 3:
                            return function(n, r, i) {
                                return e.call(t, n, r, i)
                            };
                        case 4:
                            return function(n, r, i, o) {
                                return e.call(t, n, r, i, o)
                            }
                    }
                    return $t(e, t)
                }

                function rt(e) {
                    function t() {
                        var e = l ? a : this;
                        if (i) {
                            var h = f(i);
                            xn.apply(h, arguments)
                        }
                        return (o || c) && (h || (h = f(arguments)), o && xn.apply(h, o), c && h.length < s) ? (r |= 16, rt([n, d ? r : -4 & r, h, null, a, s])) : (h || (h = arguments), u && (n = e[p]), this instanceof t ? (e = et(n.prototype), h = n.apply(e, h), xt(h) ? h : e) : n.apply(e, h))
                    }
                    var n = e[0],
                        r = e[1],
                        i = e[2],
                        o = e[3],
                        a = e[4],
                        s = e[5],
                        l = 1 & r,
                        u = 2 & r,
                        c = 4 & r,
                        d = 8 & r,
                        p = n;
                    return qn(t, e), t
                }

                function it(n, r) {
                    var i = -1,
                        a = ht(),
                        s = n ? n.length : 0,
                        l = s >= b && a === e,
                        u = [];
                    if (l) {
                        var c = o(r);
                        c ? (a = t, r = c) : l = !1
                    }
                    for (; ++i < s;) c = n[i], 0 > a(r, c) && u.push(c);
                    return l && d(r), u
                }

                function ot(e, t, n, r) {
                    r = (r || 0) - 1;
                    for (var i = e ? e.length : 0, o = []; ++r < i;) {
                        var a = e[r];
                        if (a && "object" == typeof a && "number" == typeof a.length && (Wn(a) || vt(a))) {
                            t || (a = ot(a, t, n));
                            var s = -1,
                                l = a.length,
                                u = o.length;
                            for (o.length += l; ++s < l;) o[u++] = a[s]
                        } else n || o.push(a)
                    }
                    return o
                }

                function at(e, t, n, r, i, o) {
                    if (n) {
                        var a = n(e, t);
                        if ("undefined" != typeof a) return !!a
                    }
                    if (e === t) return 0 !== e || 1 / e == 1 / t;
                    if (e === e && !(e && Q[typeof e] || t && Q[typeof t])) return !1;
                    if (null == e || null == t) return e === t;
                    var l = gn.call(e),
                        d = gn.call(t);
                    if (l == H && (l = B), d == H && (d = B), l != d) return !1;
                    switch (l) {
                        case L:
                        case R:
                            return +e == +t;
                        case U:
                            return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
                        case G:
                        case $:
                            return e == ln(t)
                    }
                    if (d = l == F, !d) {
                        var f = kn.call(e, "__wrapped__"),
                            p = kn.call(t, "__wrapped__");
                        if (f || p) return at(f ? e.__wrapped__ : e, p ? t.__wrapped__ : t, n, r, i, o);
                        if (l != B || !Rn.nodeClass && (u(e) || u(t))) return !1;
                        if (l = !Rn.argsObject && vt(e) ? an : e.constructor, f = !Rn.argsObject && vt(t) ? an : t.constructor, l != f && !(kt(l) && l instanceof l && kt(f) && f instanceof f) && "constructor" in e && "constructor" in t) return !1
                    }
                    for (l = !i, i || (i = s()), o || (o = s()), f = i.length; f--;)
                        if (i[f] == e) return o[f] == t;
                    var h = 0,
                        a = !0;
                    if (i.push(e), o.push(t), d) {
                        if (f = e.length, h = t.length, (a = h == f) || r)
                            for (; h--;)
                                if (d = f, p = t[h], r)
                                    for (; d-- && !(a = at(e[d], p, n, r, i, o)););
                                else if (!(a = at(e[h], p, n, r, i, o))) break
                    } else tr(t, function(t, s, l) {
                        return kn.call(l, s) ? (h++, a = kn.call(e, s) && at(e[s], t, n, r, i, o)) : void 0
                    }), a && !r && tr(e, function(e, t, n) {
                        return kn.call(n, t) ? a = -1 < --h : void 0
                    });
                    return i.pop(), o.pop(), l && (c(i), c(o)), a
                }

                function st(e, t, n, r, i) {
                    (Wn(t) ? Ot : nr)(t, function(t, o) {
                        var a, s, l = t,
                            u = e[o];
                        if (t && ((s = Wn(t)) || rr(t))) {
                            for (l = r.length; l--;)
                                if (a = r[l] == t) {
                                    u = i[l];
                                    break
                                }
                            if (!a) {
                                var c;
                                n && (l = n(u, t), c = "undefined" != typeof l) && (u = l), c || (u = s ? Wn(u) ? u : [] : rr(u) ? u : {}), r.push(t), i.push(u), c || st(u, t, n, r, i)
                            }
                        } else n && (l = n(u, t), "undefined" == typeof l && (l = t)), "undefined" != typeof l && (u = l);
                        e[o] = u
                    })
                }

                function lt(e, t) {
                    return e + yn(Hn() * (t - e + 1))
                }

                function ut(n, r, i) {
                    var a = -1,
                        l = ht(),
                        u = n ? n.length : 0,
                        f = [],
                        p = !r && u >= b && l === e,
                        h = i || p ? s() : f;
                    for (p && (h = o(h), l = t); ++a < u;) {
                        var g = n[a],
                            m = i ? i(g, a, n) : g;
                        (r ? !a || h[h.length - 1] !== m : 0 > l(h, m)) && ((i || p) && h.push(m), f.push(g))
                    }
                    return p ? (c(h.k), d(h)) : i && c(h), f
                }

                function ct(e) {
                    return function(t, n, r) {
                        var i = {};
                        if (n = g.createCallback(n, r, 3), Wn(t)) {
                            r = -1;
                            for (var o = t.length; ++r < o;) {
                                var a = t[r];
                                e(i, a, n(a, r, t), t)
                            }
                        } else Xn(t, function(t, r, o) {
                            e(i, t, n(t, r, o), o)
                        });
                        return i
                    }
                }

                function dt(e, t, n, r, i, o) {
                    var a = 1 & t,
                        s = 4 & t,
                        l = 16 & t,
                        u = 32 & t;
                    if (!(2 & t || kt(e))) throw new un;
                    l && !n.length && (t &= -17, l = n = !1), u && !r.length && (t &= -33, u = r = !1);
                    var c = e && e.__bindData__;
                    return c && !0 !== c ? (c = f(c), c[2] && (c[2] = f(c[2])), c[3] && (c[3] = f(c[3])), !a || 1 & c[1] || (c[4] = i), !a && 1 & c[1] && (t |= 8), !s || 4 & c[1] || (c[5] = o), l && xn.apply(c[2] || (c[2] = []), n), u && Mn.apply(c[3] || (c[3] = []), r), c[1] |= t, dt.apply(null, c)) : (1 == t || 17 === t ? w : rt)([e, t, n, r, i, o])
                }

                function ft() {
                    Y.h = N, Y.b = Y.c = Y.g = Y.i = "", Y.e = "t", Y.j = !0;
                    for (var e, t = 0; e = arguments[t]; t++)
                        for (var n in e) Y[n] = e[n];
                    t = Y.a, Y.d = /^[^,]+/.exec(t)[0], e = nn, t = "return function(" + t + "){", n = Y;
                    var r = "var n,t=" + n.d + ",E=" + n.e + ";if(!t)return E;" + n.i + ";";
                    n.b ? (r += "var u=t.length;n=-1;if(" + n.b + "){", Rn.unindexedChars && (r += "if(s(t)){t=t.split('')}"), r += "while(++n<u){" + n.g + ";}}else{") : Rn.nonEnumArgs && (r += "var u=t.length;n=-1;if(u&&p(t)){while(++n<u){n+='';" + n.g + ";}}else{"), Rn.enumPrototypes && (r += "var G=typeof t=='function';"), Rn.enumErrorProps && (r += "var F=t===k||t instanceof Error;");
                    var i = [];
                    if (Rn.enumPrototypes && i.push('!(G&&n=="prototype")'), Rn.enumErrorProps && i.push('!(F&&(n=="message"||n=="name"))'), n.j && n.f) r += "var C=-1,D=B[typeof t]&&v(t),u=D?D.length:0;while(++C<u){n=D[C];", i.length && (r += "if(" + i.join("&&") + "){"), r += n.g + ";", i.length && (r += "}"), r += "}";
                    else if (r += "for(n in t){", n.j && i.push("m.call(t, n)"), i.length && (r += "if(" + i.join("&&") + "){"), r += n.g + ";", i.length && (r += "}"), r += "}", Rn.nonEnumShadows) {
                        for (r += "if(t!==A){var i=t.constructor,r=t===(i&&i.prototype),f=t===J?I:t===k?j:L.call(t),x=y[f];", k = 0; 7 > k; k++) r += "n='" + n.h[k] + "';if((!(r&&x[n])&&m.call(t,n))", n.j || (r += "||(!x[n]&&t[n]!==A[n])"), r += "){" + n.g + "}";
                        r += "}"
                    }
                    return (n.b || Rn.nonEnumArgs) && (r += "}"), r += n.c + ";return E", e("d,j,k,m,o,p,q,s,v,A,B,y,I,J,L", t + r + "}")(nt, q, dn, kn, v, vt, Wn, St, Y.f, fn, Q, Ln, $, pn, gn)
                }

                function pt(e) {
                    return Vn[e]
                }

                function ht() {
                    var t = (t = g.indexOf) === Rt ? e : t;
                    return t
                }

                function gt(e) {
                    return "function" == typeof e && mn.test(e)
                }

                function mt(e) {
                    var t, n;
                    return !e || gn.call(e) != B || (t = e.constructor, kt(t) && !(t instanceof t)) || !Rn.argsClass && vt(e) || !Rn.nodeClass && u(e) ? !1 : Rn.ownLast ? (tr(e, function(e, t, r) {
                        return n = kn.call(r, t), !1
                    }), !1 !== n) : (tr(e, function(e, t) {
                        n = t
                    }), "undefined" == typeof n || kn.call(e, n))
                }

                function _t(e) {
                    return Kn[e]
                }

                function vt(e) {
                    return e && "object" == typeof e && "number" == typeof e.length && gn.call(e) == H || !1
                }

                function yt(e, t, n) {
                    var r = Bn(e),
                        i = r.length;
                    for (t = nt(t, n, 3); i-- && (n = r[i], !1 !== t(e[n], n, e)););
                    return e
                }

                function bt(e) {
                    var t = [];
                    return tr(e, function(e, n) {
                        kt(e) && t.push(n)
                    }), t.sort()
                }

                function wt(e) {
                    for (var t = -1, n = Bn(e), r = n.length, i = {}; ++t < r;) {
                        var o = n[t];
                        i[e[o]] = o
                    }
                    return i
                }

                function kt(e) {
                    return "function" == typeof e
                }

                function xt(e) {
                    return !(!e || !Q[typeof e])
                }

                function Tt(e) {
                    return "number" == typeof e || e && "object" == typeof e && gn.call(e) == U || !1
                }

                function St(e) {
                    return "string" == typeof e || e && "object" == typeof e && gn.call(e) == $ || !1
                }

                function Ct(e) {
                    for (var t = -1, n = Bn(e), r = n.length, i = Zt(r); ++t < r;) i[t] = e[n[t]];
                    return i
                }

                function Mt(e, t, n) {
                    var r = -1,
                        i = ht(),
                        o = e ? e.length : 0,
                        a = !1;
                    return n = (0 > n ? An(0, o + n) : n) || 0, Wn(e) ? a = -1 < i(e, t, n) : "number" == typeof o ? a = -1 < (St(e) ? e.indexOf(t, n) : i(e, t, n)) : Xn(e, function(e) {
                        return ++r < n ? void 0 : !(a = e === t)
                    }), a
                }

                function jt(e, t, n) {
                    var r = !0;
                    if (t = g.createCallback(t, n, 3), Wn(e)) {
                        n = -1;
                        for (var i = e.length; ++n < i && (r = !!t(e[n], n, e)););
                    } else Xn(e, function(e, n, i) {
                        return r = !!t(e, n, i)
                    });
                    return r
                }

                function zt(e, t, n) {
                    var r = [];
                    if (t = g.createCallback(t, n, 3), Wn(e)) {
                        n = -1;
                        for (var i = e.length; ++n < i;) {
                            var o = e[n];
                            t(o, n, e) && r.push(o)
                        }
                    } else Xn(e, function(e, n, i) {
                        t(e, n, i) && r.push(e)
                    });
                    return r
                }

                function Et(e, t, n) {
                    if (t = g.createCallback(t, n, 3), !Wn(e)) {
                        var r;
                        return Xn(e, function(e, n, i) {
                            return t(e, n, i) ? (r = e, !1) : void 0
                        }), r
                    }
                    n = -1;
                    for (var i = e.length; ++n < i;) {
                        var o = e[n];
                        if (t(o, n, e)) return o
                    }
                }

                function Ot(e, t, n) {
                    if (t && "undefined" == typeof n && Wn(e)) {
                        n = -1;
                        for (var r = e.length; ++n < r && !1 !== t(e[n], n, e););
                    } else Xn(e, t, n);
                    return e
                }

                function Dt(e, t, n) {
                    var r = e,
                        i = e ? e.length : 0;
                    if (t = t && "undefined" == typeof n ? t : nt(t, n, 3), Wn(e))
                        for (; i-- && !1 !== t(e[i], i, e););
                    else {
                        if ("number" != typeof i) var o = Bn(e),
                            i = o.length;
                        else Rn.unindexedChars && St(e) && (r = e.split(""));
                        Xn(e, function(e, n, a) {
                            return n = o ? o[--i] : --i, t(r[n], n, a)
                        })
                    }
                    return e
                }

                function Pt(e, t, n) {
                    var r = -1,
                        i = e ? e.length : 0,
                        o = Zt("number" == typeof i ? i : 0);
                    if (t = g.createCallback(t, n, 3), Wn(e))
                        for (; ++r < i;) o[r] = t(e[r], r, e);
                    else Xn(e, function(e, n, i) {
                        o[++r] = t(e, n, i)
                    });
                    return o
                }

                function At(e, t, n) {
                    var i = -1 / 0,
                        o = i;
                    if ("function" != typeof t && n && n[t] === e && (t = null), null == t && Wn(e)) {
                        n = -1;
                        for (var a = e.length; ++n < a;) {
                            var s = e[n];
                            s > o && (o = s)
                        }
                    } else t = null == t && St(e) ? r : g.createCallback(t, n, 3), Xn(e, function(e, n, r) {
                        n = t(e, n, r), n > i && (i = n, o = e)
                    });
                    return o
                }

                function It(e, t, n, r) {
                    var i = 3 > arguments.length;
                    if (t = g.createCallback(t, r, 4), Wn(e)) {
                        var o = -1,
                            a = e.length;
                        for (i && (n = e[++o]); ++o < a;) n = t(n, e[o], o, e)
                    } else Xn(e, function(e, r, o) {
                        n = i ? (i = !1, e) : t(n, e, r, o)
                    });
                    return n
                }

                function Nt(e, t, n, r) {
                    var i = 3 > arguments.length;
                    return t = g.createCallback(t, r, 4), Dt(e, function(e, r, o) {
                        n = i ? (i = !1, e) : t(n, e, r, o)
                    }), n
                }

                function Ht(e) {
                    var t = -1,
                        n = e ? e.length : 0,
                        r = Zt("number" == typeof n ? n : 0);
                    return Ot(e, function(e) {
                        var n = lt(0, ++t);
                        r[t] = r[n], r[n] = e
                    }), r
                }

                function Ft(e, t, n) {
                    var r;
                    if (t = g.createCallback(t, n, 3), Wn(e)) {
                        n = -1;
                        for (var i = e.length; ++n < i && !(r = t(e[n], n, e)););
                    } else Xn(e, function(e, n, i) {
                        return !(r = t(e, n, i))
                    });
                    return !!r
                }

                function Lt(e, t, n) {
                    var r = 0,
                        i = e ? e.length : 0;
                    if ("number" != typeof t && null != t) {
                        var o = -1;
                        for (t = g.createCallback(t, n, 3); ++o < i && t(e[o], o, e);) r++
                    } else if (r = t, null == r || n) return e ? e[0] : h;
                    return f(e, 0, In(An(0, r), i))
                }

                function Rt(t, n, r) {
                    if ("number" == typeof r) {
                        var i = t ? t.length : 0;
                        r = 0 > r ? An(0, i + r) : r || 0
                    } else if (r) return r = Wt(t, n), t[r] === n ? r : -1;
                    return e(t, n, r)
                }

                function qt(e, t, n) {
                    if ("number" != typeof t && null != t) {
                        var r = 0,
                            i = -1,
                            o = e ? e.length : 0;
                        for (t = g.createCallback(t, n, 3); ++i < o && t(e[i], i, e);) r++
                    } else r = null == t || n ? 1 : An(0, t);
                    return f(e, r)
                }

                function Wt(e, t, n, r) {
                    var i = 0,
                        o = e ? e.length : i;
                    for (n = n ? g.createCallback(n, r, 1) : Vt, t = n(t); o > i;) r = i + o >>> 1, n(e[r]) < t ? i = r + 1 : o = r;
                    return i
                }

                function Ut(e, t, n, r) {
                    return "boolean" != typeof t && null != t && (r = n, n = "function" != typeof t && r && r[t] === e ? null : t, t = !1), null != n && (n = g.createCallback(n, r, 3)), ut(e, t, n)
                }

                function Bt() {
                    for (var e = 1 < arguments.length ? arguments : arguments[0], t = -1, n = e ? At(sr(e, "length")) : 0, r = Zt(0 > n ? 0 : n); ++t < n;) r[t] = sr(e, t);
                    return r
                }

                function Gt(e, t) {
                    var n = -1,
                        r = e ? e.length : 0,
                        i = {};
                    for (t || !r || Wn(e[0]) || (t = []); ++n < r;) {
                        var o = e[n];
                        t ? i[o] = t[n] : o && (i[o[0]] = o[1])
                    }
                    return i
                }

                function $t(e, t) {
                    return 2 < arguments.length ? dt(e, 17, f(arguments, 2), null, t) : dt(e, 1, null, null, t)
                }

                function Jt(e, t, n) {
                    var r, i, o, a, s, l, u, c = 0,
                        d = !1,
                        f = !0;
                    if (!kt(e)) throw new un;
                    if (t = An(0, t) || 0, !0 === n) var p = !0,
                        f = !1;
                    else xt(n) && (p = n.leading, d = "maxWait" in n && (An(t, n.maxWait) || 0), f = "trailing" in n ? n.trailing : f);
                    var g = function() {
                            var n = t - (lr() - a);
                            n > 0 ? l = Sn(g, n) : (i && vn(i), n = u, i = l = u = h, n && (c = lr(), o = e.apply(s, r), l || i || (r = s = null)))
                        },
                        m = function() {
                            l && vn(l), i = l = u = h, (f || d !== t) && (c = lr(), o = e.apply(s, r), l || i || (r = s = null))
                        };
                    return function() {
                        if (r = arguments, a = lr(), s = this, u = f && (l || !p), !1 === d) var n = p && !l;
                        else {
                            i || p || (c = a);
                            var h = d - (a - c),
                                _ = 0 >= h;
                            _ ? (i && (i = vn(i)), c = a, o = e.apply(s, r)) : i || (i = Sn(m, h))
                        }
                        return _ && l ? l = vn(l) : l || t === d || (l = Sn(g, t)), n && (_ = !0, o = e.apply(s, r)), !_ || l || i || (r = s = null), o
                    }
                }

                function Vt(e) {
                    return e
                }

                function Kt(e, t, n) {
                    var r = !0,
                        i = t && bt(t);
                    t && (n || i.length) || (null == n && (n = t), o = m, t = e, e = g, i = bt(t)), !1 === n ? r = !1 : xt(n) && "chain" in n && (r = n.chain);
                    var o = e,
                        a = kt(o);
                    Ot(i, function(n) {
                        var i = e[n] = t[n];
                        a && (o.prototype[n] = function() {
                            var t = this.__chain__,
                                n = this.__wrapped__,
                                a = [n];
                            if (xn.apply(a, arguments), a = i.apply(e, a), r || t) {
                                if (n === a && xt(a)) return this;
                                a = new o(a), a.__chain__ = t
                            }
                            return a
                        })
                    })
                }

                function Yt() {}

                function Qt(e) {
                    return function(t) {
                        return t[e]
                    }
                }

                function Xt() {
                    return this.__wrapped__
                }
                n = n ? tt.defaults(Z.Object(), n, tt.pick(Z, I)) : Z;
                var Zt = n.Array,
                    en = n.Boolean,
                    tn = n.Date,
                    nn = n.Function,
                    rn = n.Math,
                    on = n.Number,
                    an = n.Object,
                    sn = n.RegExp,
                    ln = n.String,
                    un = n.TypeError,
                    cn = [],
                    dn = n.Error.prototype,
                    fn = an.prototype,
                    pn = ln.prototype,
                    hn = n._,
                    gn = fn.toString,
                    mn = sn("^" + ln(gn).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"),
                    _n = rn.ceil,
                    vn = n.clearTimeout,
                    yn = rn.floor,
                    bn = nn.prototype.toString,
                    wn = gt(wn = an.getPrototypeOf) && wn,
                    kn = fn.hasOwnProperty,
                    xn = cn.push,
                    Tn = fn.propertyIsEnumerable,
                    Sn = n.setTimeout,
                    Cn = cn.splice,
                    Mn = cn.unshift,
                    jn = function() {
                        try {
                            var e = {},
                                t = gt(t = an.defineProperty) && t,
                                n = t(e, e, e) && t
                        } catch (r) {}
                        return n
                    }(),
                    zn = gt(zn = an.create) && zn,
                    En = gt(En = Zt.isArray) && En,
                    On = n.isFinite,
                    Dn = n.isNaN,
                    Pn = gt(Pn = an.keys) && Pn,
                    An = rn.max,
                    In = rn.min,
                    Nn = n.parseInt,
                    Hn = rn.random,
                    Fn = {};
                Fn[F] = Zt, Fn[L] = en, Fn[R] = tn, Fn[W] = nn, Fn[B] = an, Fn[U] = on, Fn[G] = sn, Fn[$] = ln;
                var Ln = {};
                Ln[F] = Ln[R] = Ln[U] = {
                        constructor: !0,
                        toLocaleString: !0,
                        toString: !0,
                        valueOf: !0
                    }, Ln[L] = Ln[$] = {
                        constructor: !0,
                        toString: !0,
                        valueOf: !0
                    }, Ln[q] = Ln[W] = Ln[G] = {
                        constructor: !0,
                        toString: !0
                    }, Ln[B] = {
                        constructor: !0
                    },
                    function() {
                        for (var e = N.length; e--;) {
                            var t, n = N[e];
                            for (t in Ln) kn.call(Ln, t) && !kn.call(Ln[t], n) && (Ln[t][n] = !1)
                        }
                    }(), m.prototype = g.prototype;
                var Rn = g.support = {};
                ! function() {
                    var e = function() {
                            this.x = 1
                        },
                        t = {
                            0: 1,
                            length: 1
                        },
                        r = [];
                    e.prototype = {
                        valueOf: 1,
                        y: 1
                    };
                    for (var i in new e) r.push(i);
                    for (i in arguments);
                    Rn.argsClass = gn.call(arguments) == H, Rn.argsObject = arguments.constructor == an && !(arguments instanceof Zt), Rn.enumErrorProps = Tn.call(dn, "message") || Tn.call(dn, "name"), Rn.enumPrototypes = Tn.call(e, "prototype"), Rn.funcDecomp = !gt(n.WinRTError) && P.test(p), Rn.funcNames = "string" == typeof nn.name, Rn.nonEnumArgs = 0 != i, Rn.nonEnumShadows = !/valueOf/.test(r), Rn.ownLast = "x" != r[0], Rn.spliceObjects = (cn.splice.call(t, 0, 1), !t[0]), Rn.unindexedChars = "xx" != "x" [0] + an("x")[0];
                    try {
                        Rn.nodeClass = !(gn.call(document) == B && !({
                            toString: 0
                        } + ""))
                    } catch (o) {
                        Rn.nodeClass = !0
                    }
                }(1), g.templateSettings = {
                    escape: /<%-([\s\S]+?)%>/g,
                    evaluate: /<%([\s\S]+?)%>/g,
                    interpolate: E,
                    variable: "",
                    imports: {
                        _: g
                    }
                }, zn || (et = function() {
                    function e() {}
                    return function(t) {
                        if (xt(t)) {
                            e.prototype = t;
                            var r = new e;
                            e.prototype = null
                        }
                        return r || n.Object()
                    }
                }());
                var qn = jn ? function(e, t) {
                    K.value = t, jn(e, "__bindData__", K)
                } : Yt;
                Rn.argsClass || (vt = function(e) {
                    return e && "object" == typeof e && "number" == typeof e.length && kn.call(e, "callee") && !Tn.call(e, "callee") || !1
                });
                var Wn = En || function(e) {
                        return e && "object" == typeof e && "number" == typeof e.length && gn.call(e) == F || !1
                    },
                    Un = ft({
                        a: "z",
                        e: "[]",
                        i: "if(!(B[typeof z]))return E",
                        g: "E.push(n)"
                    }),
                    Bn = Pn ? function(e) {
                        return xt(e) ? Rn.enumPrototypes && "function" == typeof e || Rn.nonEnumArgs && e.length && vt(e) ? Un(e) : Pn(e) : []
                    } : Un,
                    Gn = {
                        a: "g,e,K",
                        i: "e=e&&typeof K=='undefined'?e:d(e,K,3)",
                        b: "typeof u=='number'",
                        v: Bn,
                        g: "if(e(t[n],n,g)===false)return E"
                    },
                    $n = {
                        a: "z,H,l",
                        i: "var a=arguments,b=0,c=typeof l=='number'?2:a.length;while(++b<c){t=a[b];if(t&&B[typeof t]){",
                        v: Bn,
                        g: "if(typeof E[n]=='undefined')E[n]=t[n]",
                        c: "}}"
                    },
                    Jn = {
                        i: "if(!B[typeof t])return E;" + Gn.i,
                        b: !1
                    },
                    Vn = {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;"
                    },
                    Kn = wt(Vn),
                    Yn = sn("(" + Bn(Kn).join("|") + ")", "g"),
                    Qn = sn("[" + Bn(Vn).join("") + "]", "g"),
                    Xn = ft(Gn),
                    Zn = ft($n, {
                        i: $n.i.replace(";", ";if(c>3&&typeof a[c-2]=='function'){var e=d(a[--c-1],a[c--],2)}else if(c>2&&typeof a[c-1]=='function'){e=a[--c]}"),
                        g: "E[n]=e?e(E[n],t[n]):t[n]"
                    }),
                    er = ft($n),
                    tr = ft(Gn, Jn, {
                        j: !1
                    }),
                    nr = ft(Gn, Jn);
                kt(/x/) && (kt = function(e) {
                    return "function" == typeof e && gn.call(e) == W
                });
                var rr = wn ? function(e) {
                        if (!e || gn.call(e) != B || !Rn.argsClass && vt(e)) return !1;
                        var t = e.valueOf,
                            n = gt(t) && (n = wn(t)) && wn(n);
                        return n ? e == n || wn(e) == n : mt(e)
                    } : mt,
                    ir = ct(function(e, t, n) {
                        kn.call(e, n) ? e[n]++ : e[n] = 1
                    }),
                    or = ct(function(e, t, n) {
                        (kn.call(e, n) ? e[n] : e[n] = []).push(t)
                    }),
                    ar = ct(function(e, t, n) {
                        e[n] = t
                    }),
                    sr = Pt,
                    lr = gt(lr = tn.now) && lr || function() {
                        return (new tn).getTime()
                    },
                    ur = 8 == Nn(x + "08") ? Nn : function(e, t) {
                        return Nn(St(e) ? e.replace(O, "") : e, t || 0)
                    };
                return g.after = function(e, t) {
                    if (!kt(t)) throw new un;
                    return function() {
                        return 1 > --e ? t.apply(this, arguments) : void 0
                    }
                }, g.assign = Zn, g.at = function(e) {
                    var t = arguments,
                        n = -1,
                        r = ot(t, !0, !1, 1),
                        t = t[2] && t[2][t[1]] === e ? 1 : r.length,
                        i = Zt(t);
                    for (Rn.unindexedChars && St(e) && (e = e.split("")); ++n < t;) i[n] = e[r[n]];
                    return i
                }, g.bind = $t, g.bindAll = function(e) {
                    for (var t = 1 < arguments.length ? ot(arguments, !0, !1, 1) : bt(e), n = -1, r = t.length; ++n < r;) {
                        var i = t[n];
                        e[i] = dt(e[i], 1, null, null, e)
                    }
                    return e
                }, g.bindKey = function(e, t) {
                    return 2 < arguments.length ? dt(t, 19, f(arguments, 2), null, e) : dt(t, 3, null, null, e)
                }, g.chain = function(e) {
                    return e = new m(e), e.__chain__ = !0, e
                }, g.compact = function(e) {
                    for (var t = -1, n = e ? e.length : 0, r = []; ++t < n;) {
                        var i = e[t];
                        i && r.push(i)
                    }
                    return r
                }, g.compose = function() {
                    for (var e = arguments, t = e.length; t--;)
                        if (!kt(e[t])) throw new un;
                    return function() {
                        for (var t = arguments, n = e.length; n--;) t = [e[n].apply(this, t)];
                        return t[0]
                    }
                }, g.constant = function(e) {
                    return function() {
                        return e
                    }
                }, g.countBy = ir, g.create = function(e, t) {
                    var n = et(e);
                    return t ? Zn(n, t) : n
                }, g.createCallback = function(e, t, n) {
                    var r = typeof e;
                    if (null == e || "function" == r) return nt(e, t, n);
                    if ("object" != r) return Qt(e);
                    var i = Bn(e),
                        o = i[0],
                        a = e[o];
                    return 1 != i.length || a !== a || xt(a) ? function(t) {
                        for (var n = i.length, r = !1; n-- && (r = at(t[i[n]], e[i[n]], null, !0)););
                        return r
                    } : function(e) {
                        return e = e[o], a === e && (0 !== a || 1 / a == 1 / e)
                    }
                }, g.curry = function(e, t) {
                    return t = "number" == typeof t ? t : +t || e.length, dt(e, 4, null, null, null, t)
                }, g.debounce = Jt, g.defaults = er, g.defer = function(e) {
                    if (!kt(e)) throw new un;
                    var t = f(arguments, 1);
                    return Sn(function() {
                        e.apply(h, t)
                    }, 1)
                }, g.delay = function(e, t) {
                    if (!kt(e)) throw new un;
                    var n = f(arguments, 2);
                    return Sn(function() {
                        e.apply(h, n)
                    }, t)
                }, g.difference = function(e) {
                    return it(e, ot(arguments, !0, !0, 1))
                }, g.filter = zt, g.flatten = function(e, t, n, r) {
                    return "boolean" != typeof t && null != t && (r = n, n = "function" != typeof t && r && r[t] === e ? null : t, t = !1), null != n && (e = Pt(e, n, r)), ot(e, t)
                }, g.forEach = Ot, g.forEachRight = Dt, g.forIn = tr, g.forInRight = function(e, t, n) {
                    var r = [];
                    tr(e, function(e, t) {
                        r.push(t, e)
                    });
                    var i = r.length;
                    for (t = nt(t, n, 3); i-- && !1 !== t(r[i--], r[i], e););
                    return e
                }, g.forOwn = nr, g.forOwnRight = yt, g.functions = bt, g.groupBy = or, g.indexBy = ar, g.initial = function(e, t, n) {
                    var r = 0,
                        i = e ? e.length : 0;
                    if ("number" != typeof t && null != t) {
                        var o = i;
                        for (t = g.createCallback(t, n, 3); o-- && t(e[o], o, e);) r++
                    } else r = null == t || n ? 1 : t || r;
                    return f(e, 0, In(An(0, i - r), i))
                }, g.intersection = function() {
                    for (var n = [], r = -1, i = arguments.length, a = s(), l = ht(), u = l === e, f = s(); ++r < i;) {
                        var p = arguments[r];
                        (Wn(p) || vt(p)) && (n.push(p), a.push(u && p.length >= b && o(r ? n[r] : f)))
                    }
                    var u = n[0],
                        h = -1,
                        g = u ? u.length : 0,
                        m = [];
                    e: for (; ++h < g;) {
                        var _ = a[0],
                            p = u[h];
                        if (0 > (_ ? t(_, p) : l(f, p))) {
                            for (r = i, (_ || f).push(p); --r;)
                                if (_ = a[r], 0 > (_ ? t(_, p) : l(n[r], p))) continue e;
                            m.push(p)
                        }
                    }
                    for (; i--;)(_ = a[i]) && d(_);
                    return c(a), c(f), m
                }, g.invert = wt, g.invoke = function(e, t) {
                    var n = f(arguments, 2),
                        r = -1,
                        i = "function" == typeof t,
                        o = e ? e.length : 0,
                        a = Zt("number" == typeof o ? o : 0);
                    return Ot(e, function(e) {
                        a[++r] = (i ? t : e[t]).apply(e, n)
                    }), a
                }, g.keys = Bn, g.map = Pt, g.mapValues = function(e, t, n) {
                    var r = {};
                    return t = g.createCallback(t, n, 3), nr(e, function(e, n, i) {
                        r[n] = t(e, n, i)
                    }), r
                }, g.max = At, g.memoize = function(e, t) {
                    if (!kt(e)) throw new un;
                    var n = function() {
                        var r = n.cache,
                            i = t ? t.apply(this, arguments) : y + arguments[0];
                        return kn.call(r, i) ? r[i] : r[i] = e.apply(this, arguments)
                    };
                    return n.cache = {}, n
                }, g.merge = function(e) {
                    var t = arguments,
                        n = 2;
                    if (!xt(e)) return e;
                    if ("number" != typeof t[2] && (n = t.length), n > 3 && "function" == typeof t[n - 2]) var r = nt(t[--n - 1], t[n--], 2);
                    else n > 2 && "function" == typeof t[n - 1] && (r = t[--n]);
                    for (var t = f(arguments, 1, n), i = -1, o = s(), a = s(); ++i < n;) st(e, t[i], r, o, a);
                    return c(o), c(a), e
                }, g.min = function(e, t, n) {
                    var i = 1 / 0,
                        o = i;
                    if ("function" != typeof t && n && n[t] === e && (t = null), null == t && Wn(e)) {
                        n = -1;
                        for (var a = e.length; ++n < a;) {
                            var s = e[n];
                            o > s && (o = s)
                        }
                    } else t = null == t && St(e) ? r : g.createCallback(t, n, 3), Xn(e, function(e, n, r) {
                        n = t(e, n, r), i > n && (i = n, o = e)
                    });
                    return o
                }, g.omit = function(e, t, n) {
                    var r = {};
                    if ("function" != typeof t) {
                        var i = [];
                        tr(e, function(e, t) {
                            i.push(t)
                        });
                        for (var i = it(i, ot(arguments, !0, !1, 1)), o = -1, a = i.length; ++o < a;) {
                            var s = i[o];
                            r[s] = e[s]
                        }
                    } else t = g.createCallback(t, n, 3), tr(e, function(e, n, i) {
                        t(e, n, i) || (r[n] = e)
                    });
                    return r
                }, g.once = function(e) {
                    var t, n;
                    if (!kt(e)) throw new un;
                    return function() {
                        return t ? n : (t = !0, n = e.apply(this, arguments), e = null, n)
                    }
                }, g.pairs = function(e) {
                    for (var t = -1, n = Bn(e), r = n.length, i = Zt(r); ++t < r;) {
                        var o = n[t];
                        i[t] = [o, e[o]]
                    }
                    return i
                }, g.partial = function(e) {
                    return dt(e, 16, f(arguments, 1))
                }, g.partialRight = function(e) {
                    return dt(e, 32, null, f(arguments, 1))
                }, g.pick = function(e, t, n) {
                    var r = {};
                    if ("function" != typeof t)
                        for (var i = -1, o = ot(arguments, !0, !1, 1), a = xt(e) ? o.length : 0; ++i < a;) {
                            var s = o[i];
                            s in e && (r[s] = e[s])
                        } else t = g.createCallback(t, n, 3), tr(e, function(e, n, i) {
                            t(e, n, i) && (r[n] = e)
                        });
                    return r
                }, g.pluck = sr, g.property = Qt, g.pull = function(e) {
                    for (var t = arguments, n = 0, r = t.length, i = e ? e.length : 0; ++n < r;)
                        for (var o = -1, a = t[n]; ++o < i;) e[o] === a && (Cn.call(e, o--, 1), i--);
                    return e
                }, g.range = function(e, t, n) {
                    e = +e || 0, n = "number" == typeof n ? n : +n || 1, null == t && (t = e, e = 0);
                    var r = -1;
                    t = An(0, _n((t - e) / (n || 1)));
                    for (var i = Zt(t); ++r < t;) i[r] = e, e += n;
                    return i
                }, g.reject = function(e, t, n) {
                    return t = g.createCallback(t, n, 3), zt(e, function(e, n, r) {
                        return !t(e, n, r)
                    })
                }, g.remove = function(e, t, n) {
                    var r = -1,
                        i = e ? e.length : 0,
                        o = [];
                    for (t = g.createCallback(t, n, 3); ++r < i;) n = e[r], t(n, r, e) && (o.push(n), Cn.call(e, r--, 1), i--);
                    return o
                }, g.rest = qt, g.shuffle = Ht, g.sortBy = function(e, t, n) {
                    var r = -1,
                        o = Wn(t),
                        a = e ? e.length : 0,
                        u = Zt("number" == typeof a ? a : 0);
                    for (o || (t = g.createCallback(t, n, 3)), Ot(e, function(e, n, i) {
                            var a = u[++r] = l();
                            o ? a.m = Pt(t, function(t) {
                                return e[t]
                            }) : (a.m = s())[0] = t(e, n, i), a.n = r, a.o = e
                        }), a = u.length, u.sort(i); a--;) e = u[a], u[a] = e.o, o || c(e.m), d(e);
                    return u
                }, g.tap = function(e, t) {
                    return t(e), e
                }, g.throttle = function(e, t, n) {
                    var r = !0,
                        i = !0;
                    if (!kt(e)) throw new un;
                    return !1 === n ? r = !1 : xt(n) && (r = "leading" in n ? n.leading : r, i = "trailing" in n ? n.trailing : i), V.leading = r, V.maxWait = t, V.trailing = i, Jt(e, t, V)
                }, g.times = function(e, t, n) {
                    e = -1 < (e = +e) ? e : 0;
                    var r = -1,
                        i = Zt(e);
                    for (t = nt(t, n, 1); ++r < e;) i[r] = t(r);
                    return i
                }, g.toArray = function(e) {
                    return e && "number" == typeof e.length ? Rn.unindexedChars && St(e) ? e.split("") : f(e) : Ct(e)
                }, g.transform = function(e, t, n, r) {
                    var i = Wn(e);
                    if (null == n)
                        if (i) n = [];
                        else {
                            var o = e && e.constructor;
                            n = et(o && o.prototype)
                        }
                    return t && (t = g.createCallback(t, r, 4), (i ? Xn : nr)(e, function(e, r, i) {
                        return t(n, e, r, i)
                    })), n
                }, g.union = function() {
                    return ut(ot(arguments, !0, !0))
                }, g.uniq = Ut, g.values = Ct, g.where = zt, g.without = function(e) {
                    return it(e, f(arguments, 1))
                }, g.wrap = function(e, t) {
                    return dt(t, 16, [e])
                }, g.xor = function() {
                    for (var e = -1, t = arguments.length; ++e < t;) {
                        var n = arguments[e];
                        if (Wn(n) || vt(n)) var r = r ? ut(it(r, n).concat(it(n, r))) : n
                    }
                    return r || []
                }, g.zip = Bt, g.zipObject = Gt, g.collect = Pt, g.drop = qt, g.each = Ot, g.eachRight = Dt, g.extend = Zn, g.methods = bt, g.object = Gt, g.select = zt, g.tail = qt, g.unique = Ut, g.unzip = Bt, Kt(g), g.clone = function(e, t, n, r) {
                    return "boolean" != typeof t && null != t && (r = n, n = t, t = !1), X(e, t, "function" == typeof n && nt(n, r, 1))
                }, g.cloneDeep = function(e, t, n) {
                    return X(e, !0, "function" == typeof t && nt(t, n, 1))
                }, g.contains = Mt, g.escape = function(e) {
                    return null == e ? "" : ln(e).replace(Qn, pt)
                }, g.every = jt, g.find = Et, g.findIndex = function(e, t, n) {
                    var r = -1,
                        i = e ? e.length : 0;
                    for (t = g.createCallback(t, n, 3); ++r < i;)
                        if (t(e[r], r, e)) return r;
                    return -1
                }, g.findKey = function(e, t, n) {
                    var r;
                    return t = g.createCallback(t, n, 3), nr(e, function(e, n, i) {
                        return t(e, n, i) ? (r = n, !1) : void 0
                    }), r
                }, g.findLast = function(e, t, n) {
                    var r;
                    return t = g.createCallback(t, n, 3), Dt(e, function(e, n, i) {
                        return t(e, n, i) ? (r = e, !1) : void 0
                    }), r
                }, g.findLastIndex = function(e, t, n) {
                    var r = e ? e.length : 0;
                    for (t = g.createCallback(t, n, 3); r--;)
                        if (t(e[r], r, e)) return r;
                    return -1
                }, g.findLastKey = function(e, t, n) {
                    var r;
                    return t = g.createCallback(t, n, 3), yt(e, function(e, n, i) {
                        return t(e, n, i) ? (r = n, !1) : void 0
                    }), r
                }, g.has = function(e, t) {
                    return e ? kn.call(e, t) : !1
                }, g.identity = Vt, g.indexOf = Rt, g.isArguments = vt, g.isArray = Wn, g.isBoolean = function(e) {
                    return !0 === e || !1 === e || e && "object" == typeof e && gn.call(e) == L || !1
                }, g.isDate = function(e) {
                    return e && "object" == typeof e && gn.call(e) == R || !1
                }, g.isElement = function(e) {
                    return e && 1 === e.nodeType || !1
                }, g.isEmpty = function(e) {
                    var t = !0;
                    if (!e) return t;
                    var n = gn.call(e),
                        r = e.length;
                    return n == F || n == $ || (Rn.argsClass ? n == H : vt(e)) || n == B && "number" == typeof r && kt(e.splice) ? !r : (nr(e, function() {
                        return t = !1
                    }), t)
                }, g.isEqual = function(e, t, n, r) {
                    return at(e, t, "function" == typeof n && nt(n, r, 2))
                }, g.isFinite = function(e) {
                    return On(e) && !Dn(parseFloat(e))
                }, g.isFunction = kt, g.isNaN = function(e) {
                    return Tt(e) && e != +e
                }, g.isNull = function(e) {
                    return null === e
                }, g.isNumber = Tt, g.isObject = xt, g.isPlainObject = rr, g.isRegExp = function(e) {
                    return e && Q[typeof e] && gn.call(e) == G || !1
                }, g.isString = St, g.isUndefined = function(e) {
                    return "undefined" == typeof e
                }, g.lastIndexOf = function(e, t, n) {
                    var r = e ? e.length : 0;
                    for ("number" == typeof n && (r = (0 > n ? An(0, r + n) : In(n, r - 1)) + 1); r--;)
                        if (e[r] === t) return r;
                    return -1
                }, g.mixin = Kt, g.noConflict = function() {
                    return n._ = hn, this
                }, g.noop = Yt, g.now = lr, g.parseInt = ur, g.random = function(e, t, n) {
                    var r = null == e,
                        i = null == t;
                    return null == n && ("boolean" == typeof e && i ? (n = e, e = 1) : i || "boolean" != typeof t || (n = t, i = !0)), r && i && (t = 1), e = +e || 0, i ? (t = e, e = 0) : t = +t || 0, n || e % 1 || t % 1 ? (n = Hn(), In(e + n * (t - e + parseFloat("1e-" + ((n + "").length - 1))), t)) : lt(e, t)
                }, g.reduce = It, g.reduceRight = Nt, g.result = function(e, t) {
                    if (e) {
                        var n = e[t];
                        return kt(n) ? e[t]() : n
                    }
                }, g.runInContext = p, g.size = function(e) {
                    var t = e ? e.length : 0;
                    return "number" == typeof t ? t : Bn(e).length
                }, g.some = Ft, g.sortedIndex = Wt, g.template = function(e, t, n) {
                    var r = g.templateSettings;
                    e = ln(e || ""), n = er({}, n, r);
                    var i, o = er({}, n.imports, r.imports),
                        r = Bn(o),
                        o = Ct(o),
                        s = 0,
                        l = n.interpolate || D,
                        u = "__p+='",
                        l = sn((n.escape || D).source + "|" + l.source + "|" + (l === E ? M : D).source + "|" + (n.evaluate || D).source + "|$", "g");
                    e.replace(l, function(t, n, r, o, l, c) {
                        return r || (r = o), u += e.slice(s, c).replace(A, a), n && (u += "'+__e(" + n + ")+'"), l && (i = !0, u += "';" + l + ";\n__p+='"), r && (u += "'+((__t=(" + r + "))==null?'':__t)+'"), s = c + t.length, t
                    }), u += "';", l = n = n.variable, l || (n = "obj", u = "with(" + n + "){" + u + "}"), u = (i ? u.replace(T, "") : u).replace(S, "$1").replace(C, "$1;"), u = "function(" + n + "){" + (l ? "" : n + "||(" + n + "={});") + "var __t,__p='',__e=_.escape" + (i ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : ";") + u + "return __p}";
                    try {
                        var c = nn(r, "return " + u).apply(h, o)
                    } catch (d) {
                        throw d.source = u, d
                    }
                    return t ? c(t) : (c.source = u, c)
                }, g.unescape = function(e) {
                    return null == e ? "" : ln(e).replace(Yn, _t)
                }, g.uniqueId = function(e) {
                    var t = ++_;
                    return ln(null == e ? "" : e) + t
                }, g.all = jt, g.any = Ft, g.detect = Et, g.findWhere = Et, g.foldl = It, g.foldr = Nt, g.include = Mt, g.inject = It, Kt(function() {
                    var e = {};
                    return nr(g, function(t, n) {
                        g.prototype[n] || (e[n] = t)
                    }), e
                }(), !1), g.first = Lt, g.last = function(e, t, n) {
                    var r = 0,
                        i = e ? e.length : 0;
                    if ("number" != typeof t && null != t) {
                        var o = i;
                        for (t = g.createCallback(t, n, 3); o-- && t(e[o], o, e);) r++
                    } else if (r = t, null == r || n) return e ? e[i - 1] : h;
                    return f(e, An(0, i - r))
                }, g.sample = function(e, t, n) {
                    return e && "number" != typeof e.length ? e = Ct(e) : Rn.unindexedChars && St(e) && (e = e.split("")), null == t || n ? e ? e[lt(0, e.length - 1)] : h : (e = Ht(e), e.length = In(An(0, t), e.length), e)
                }, g.take = Lt, g.head = Lt, nr(g, function(e, t) {
                    var n = "sample" !== t;
                    g.prototype[t] || (g.prototype[t] = function(t, r) {
                        var i = this.__chain__,
                            o = e(this.__wrapped__, t, r);
                        return i || null != t && (!r || n && "function" == typeof t) ? new m(o, i) : o
                    })
                }), g.VERSION = "2.4.1", g.prototype.chain = function() {
                    return this.__chain__ = !0, this
                }, g.prototype.toString = function() {
                    return ln(this.__wrapped__)
                }, g.prototype.value = Xt, g.prototype.valueOf = Xt, Xn(["join", "pop", "shift"], function(e) {
                    var t = cn[e];
                    g.prototype[e] = function() {
                        var e = this.__chain__,
                            n = t.apply(this.__wrapped__, arguments);
                        return e ? new m(n, e) : n
                    }
                }), Xn(["push", "reverse", "sort", "unshift"], function(e) {
                    var t = cn[e];
                    g.prototype[e] = function() {
                        return t.apply(this.__wrapped__, arguments), this
                    }
                }), Xn(["concat", "slice", "splice"], function(e) {
                    var t = cn[e];
                    g.prototype[e] = function() {
                        return new m(t.apply(this.__wrapped__, arguments), this.__chain__)
                    }
                }), Rn.spliceObjects || Xn(["pop", "shift", "splice"], function(e) {
                    var t = cn[e],
                        n = "splice" == e;
                    g.prototype[e] = function() {
                        var e = this.__chain__,
                            r = this.__wrapped__,
                            i = t.apply(r, arguments);
                        return 0 === r.length && delete r[0], e || n ? new m(i, e) : i
                    }
                }), g
            }
            var h, g = [],
                m = [],
                _ = 0,
                v = {},
                y = +new Date + "",
                b = 75,
                w = 40,
                x = " 	\f ﻿\n\r\u2028\u2029 ᠎             　",
                T = /\b__p\+='';/g,
                S = /\b(__p\+=)''\+/g,
                C = /(__e\(.*?\)|\b__t\))\+'';/g,
                M = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                j = /\w*$/,
                z = /^\s*function[ \n\r\t]+\w/,
                E = /<%=([\s\S]+?)%>/g,
                O = RegExp("^[" + x + "]*0+(?=.$)"),
                D = /($^)/,
                P = /\bthis\b/,
                A = /['\n\r\t\u2028\u2029\\]/g,
                I = "Array Boolean Date Error Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setTimeout".split(" "),
                N = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
                H = "[object Arguments]",
                F = "[object Array]",
                L = "[object Boolean]",
                R = "[object Date]",
                q = "[object Error]",
                W = "[object Function]",
                U = "[object Number]",
                B = "[object Object]",
                G = "[object RegExp]",
                $ = "[object String]",
                J = {};
            J[W] = !1, J[H] = J[F] = J[L] = J[R] = J[U] = J[B] = J[G] = J[$] = !0;
            var V = {
                    leading: !1,
                    maxWait: 0,
                    trailing: !1
                },
                K = {
                    configurable: !1,
                    enumerable: !1,
                    value: null,
                    writable: !1
                },
                Y = {
                    a: "",
                    b: null,
                    c: "",
                    d: "",
                    e: "",
                    v: null,
                    g: "",
                    h: null,
                    support: null,
                    i: "",
                    j: !1
                },
                Q = {
                    "boolean": !1,
                    "function": !0,
                    object: !0,
                    number: !1,
                    string: !1,
                    undefined: !1
                },
                X = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "	": "t",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                Z = Q[typeof window] && window || this,
                et = Q[typeof global] && global;
            !et || et.global !== et && et.window !== et || (Z = et);
            var tt = p();
            "function" == typeof _dfn && "object" == typeof _dfn.amd && _dfn.amd && _dfn("vendor/lodash", [], function() {
                return tt
            })
        }.call(this), _dfn("generated/templates", ["vendor/lodash"], function(_) {
            var JST = {};
            return JST.bread_crumb = function(obj) {
                obj || (obj = {}); {
                    var __t, __p = "";
                    _.escape, Array.prototype.join
                }
                with(obj) {
                    __p += '<div class="rfBreadCrumb">\n    <ul>\n        <li data-index="0"><a>' + (null == (__t = startString) ? "" : __t) + "</a> </li>\n        ";
                    for (var i = -1; ++i < drillLabelList.length;) __p += '\n            <li data-index="' + (null == (__t = i + 1) ? "" : __t) + '">\n                <span class="rfIcon rfBCRight"></span> <a>' + (null == (__t = drillLabelList[i]) ? "" : __t) + "</a>\n            </li>\n        ";
                    __p += "\n\n    </ul>\n</div>"
                }
                return __p
            }, JST.browser_error = function(obj) {
                obj || (obj = {}); {
                    var __p = "";
                    _.escape
                }
                with(obj) __p += '<div class="notSupportedMessage">\n    <h3>Sorry, your browser cannot display this dashboard.</h3>\n</div>';
                return __p
            }, JST.chart_base = function(obj) {
                obj || (obj = {}); {
                    var __t, __p = "";
                    _.escape, Array.prototype.join
                }
                with(obj) {
                    if (legendVisible) {
                        __p += '\n<div class="rfLegendContainer">\n    <ul class="rfLegendContainerList ', "pie" === displayType && (__p += " rfPieLegend "), __p += '">\n    ';
                        for (var i = 0; i < series.length; i++) {
                            var item = series[i],
                                cls = "auto" !== item.seriesColor ? "" : "chart-color-" + (i + 1),
                                style = "auto" !== item.seriesColor ? "background: " + item.seriesColor : "";
                            __p += '\n        <li class="rfLegendKey ' + (null == (__t = item.seriesHiddenFlag === !0 ? "disabled" : "") ? "" : __t) + '" data-key="' + (null == (__t = item.key) ? "" : __t) + '">\n            <span class="legendColor ' + (null == (__t = cls) ? "" : __t) + '" style="' + (null == (__t = style) ? "" : __t) + '"></span>\n            <span class="legendCaption">' + (null == (__t = item.seriesName) ? "" : __t) + "</span>\n        </li>\n    "
                        }
                        __p += "\n    </ul>\n</div>\n"
                    }
                    __p += '\n<div class="chartCore">\n\n</div>\n'
                }
                return __p
            }, JST.component_chromeless = function(obj) {
                obj || (obj = {}); {
                    var __p = "";
                    _.escape
                }
                with(obj) __p += '<div class="rfWrapper rfChromeless">\n  <div class="rfCore">\n\n  </div>\n  <div class="rfLock">\n    <div class="rfLoadingText"></div>\n    <div class="rfSpinner"></div>\n  </div>\n  <div class="rfError">\n  	<div class="rfErrorMessageText"></div>\n  </div>\n</div>\n';
                return __p
            }, JST.component_wrapper = function(obj) {
                obj || (obj = {}); {
                    var __t, __p = "";
                    _.escape, Array.prototype.join
                }
                with(obj) __p += '<div class="rfWrapper rfChromed">\n    ', showCaption && !error && (__p += '\n        <div class="rfCaption">\n            <span class="rfCaptionIconContainer"></span>\n            <span class="rfCaptionText">' + (null == (__t = captionText) ? "" : __t) + "</span>\n            ", "undefined" != typeof formComponent && formComponent || (__p += "\n                ", mobile || (__p += '\n                    <span class="rfIcon rfMaximizeIcon"></span>\n                '), __p += "\n            "), __p += "\n        </div>\n    "), __p += '\n    <div class="rfHeader">\n    </div>\n    <div class="rfCore">\n\n    </div>\n    <div class="rfLock">\n      <div class="rfLoadingText"></div>\n      <div class="rfSpinner"></div>\n    </div>\n    <div class="rfFooter">\n        <div class="componentKPI">\n        </div>\n    </div>\n    <div class="rfError">\n        <div class="rfErrorMessageText"></div>\n    </div>\n</div>\n';
                return __p
            }, JST.dashboard_embedded = function(obj) {
                obj || (obj = {}); {
                    var __p = "";
                    _.escape, Array.prototype.join
                }
                with(obj) __p += '<div class="rfDashboardCore rfEmbedded">\n\n</div>\n<div class="rfDashboardHidden" style="display: none;">\n\n</div>\n<div class="rfDashboardNinja">\n\n</div>\n<div class="rfDashboardModals">\n</div>\n\n', tabbed || (__p += '\n<div class="rfNotification"></div>\n');
                return __p
            }, JST.dashboard_standalone = function(obj) {
                obj || (obj = {}); {
                    var __t, __p = "";
                    _.escape, Array.prototype.join
                }
                with(obj) title && (__p += '\n	<div class="rfDashboardHeader">\n	  <div class="rfHeaderContainer">\n	  	<h1 class="dbTitle">' + (null == (__t = title) ? "" : __t) + "</h1>\n	  </div>\n	</div>\n"), __p += '\n<div class="rfDashboardCore rfStandalone">\n\n</div>\n<div class="rfDashboardHidden" style="display: none;">\n\n</div>\n<div class="rfDashboardNinja">\n\n</div>\n<div class="rfDashboardModals">\n</div>\n\n<div class="rfNotification"></div>\n\n<div class="rfThemeModal">\n	\n</div>\n';
                return __p
            }, JST.date_picker = function(obj) {
                obj || (obj = {}); {
                    var __p = "";
                    _.escape
                }
                with(obj) __p += '<div class="rfDatePicker">\n</div>\n';
                return __p
            }, JST.error_list = function(obj) {
                obj || (obj = {}); {
                    var __t, __p = "";
                    _.escape, Array.prototype.join
                }
                with(obj) {
                    "xs" !== media && (__p += '\n	<span class="rfIcon rfErrorIcon"></span>\n'), __p += '\n<ul class="errorList">\n';
                    for (var i = 0; i < message.length; i++) __p += "\n	<li>" + (null == (__t = message[i].msg) ? "" : __t) + ".</li>\n";
                    __p += "\n</ul>\n"
                }
                return __p
            }, JST.form_base = function(obj) {
                obj || (obj = {}); {
                    var __p = "";
                    _.escape
                }
                with(obj) __p += '<div class="formContainer">\n  <div class="formItems">\n\n  </div>\n  <div class="dashed-divider"></div>\n  <div class="form-btn">\n    <button id="submit" data-role="button" class="k-button" role="button" aria-disabled="false" tabindex="0">Submit</button>\n  </div>\n</div>\n';
                return __p
            }, JST.form_item = function(obj) {
                obj || (obj = {}); {
                    var __t, __p = "";
                    _.escape, Array.prototype.join
                }
                with(obj) {
                    if (__p += '<div class="form-item">\n    <label for=\'' + (null == (__t = id) ? "" : __t) + '\' class=" control-label">' + (null == (__t = label) ? "" : __t) + "</label>\n    ", "checkbox" == type && (__p += '\n        <input type="checkbox" id=\'' + (null == (__t = id) ? "" : __t) + "' class=\"rfformItem checkBox\" data-key='" + (null == (__t = id) ? "" : __t) + "' \n        " + (null == (__t = options.value === !0 ? "checked" : "") ? "" : __t) + ">\n    "), __p += '\n    <div class="form-item-main">\n        ', "text" == type && (__p += '\n        <input type="text" class="form-control rfformItem textItem" data-key=\'' + (null == (__t = id) ? "" : __t) + "' value=\"" + (null == (__t = value) ? "" : __t) + '">\n        '), __p += "\n        \n        ", "select" == type || "multiSelect" == type) {
                        __p += '\n        <select id="' + (null == (__t = id) ? "" : __t) + '" ' + (null == (__t = multiple === !0 ? 'multiple="multiple"' : "") ? "" : __t) + ' class="form-control" data-key="' + (null == (__t = id) ? "" : __t) + '">\n            ';
                        for (var i = 0; i < list.length; i++) __p += "\n            <option " + (null == (__t = i === options.defaultSelectedIndex ? "selected" : "") ? "" : __t) + " \n                " + (null == (__t = multiple === !0 && isOptionSelected[i] === !0 ? "selected" : "") ? "" : __t) + '\n                data-index="' + (null == (__t = i) ? "" : __t) + '">' + (null == (__t = list[i]) ? "" : __t) + "</option>\n                ";
                        __p += "\n            </select>\n        "
                    }
                    __p += "\n        \n        ", "date" == type && (__p += '\n            <div class="short-box" style="display: inline-block;">\n                ', __p += touch === !0 ? '\n                    <input type="date" id=\'' + (null == (__t = id) ? "" : __t) + "' class=\"form-control rfformItem datepickerItem\" data-key='" + (null == (__t = id) ? "" : __t) + "' \n                    value=\"" + (null == (__t = options.defaultDate) ? "" : __t) + '" />\n                ' : '\n                    <input type="text" id=\'' + (null == (__t = id) ? "" : __t) + "' class=\"form-control rfformItem datepickerItem\" data-key='" + (null == (__t = id) ? "" : __t) + "' \n                    value=\"" + (null == (__t = options.defaultDate) ? "" : __t) + '" />\n                ', __p += "\n            </div>\n        "), __p += "\n        \n        ", "dateRange" == type && (__p += '\n            <div class="short-box datepickerRange" style="display: inline-block;">\n            ', __p += touch === !0 ? '\n                <input type="date" id=\'' + (null == (__t = id) ? "" : __t) + "' class=\"form-control rfformItem datepickerItem rangeStart\" data-key='" + (null == (__t = id) ? "" : __t) + "' \n                value=\"" + (null == (__t = options.defaultStartDate) ? "" : __t) + '">\n            ' : '\n                <input type="text" id=\'' + (null == (__t = id) ? "" : __t) + "' class=\"form-control rfformItem datepickerItem rangeStart\" data-key='" + (null == (__t = id) ? "" : __t) + "' \n                value=\"" + (null == (__t = options.defaultStartDate) ? "" : __t) + '">\n            ', __p += '\n            </div>    \n             <span class="to">to</span>\n            <div class="short-box datepickerRange" style="display: inline-block;">\n            ', __p += touch === !0 ? '\n                <input type="date" id=\'' + (null == (__t = id) ? "" : __t) + "' class=\"form-control rfformItem datepickerItem rangeEnd\" data-key='" + (null == (__t = id) ? "" : __t) + "' \n                value=\"" + (null == (__t = options.defaultEndDate) ? "" : __t) + '">    \n            ' : '\n                <input type="text" id=\'' + (null == (__t = id) ? "" : __t) + "' class=\"form-control rfformItem datepickerItem rangeEnd\" data-key='" + (null == (__t = id) ? "" : __t) + "' \n                value=\"" + (null == (__t = options.defaultEndDate) ? "" : __t) + '">    \n            ', __p += "\n            </div>\n        "), __p += "\n        \n        ", "numericRange" == type && (__p += '\n        <span class="rfNumericRangeText-' + (null == (__t = id) ? "" : __t) + '"></span>\n        <br />\n        <div id="rfRangeSlider-' + (null == (__t = id) ? "" : __t) + '">\n          ', __p += touch === !0 ? '\n            <div class="" style="width: 40%; display: inline-block;">\n                <input type="number" id=\'' + (null == (__t = id) ? "" : __t) + "' class=\"form-control rfformItem numberRangeItem rangeStart\" data-key='" + (null == (__t = id) ? "" : __t) + "' \n                value=\"" + (null == (__t = options.values[0]) ? "" : __t) + '">\n            </div>\n          <span class="to">to</span>\n            <div class="" style="width: 40%; display: inline-block;">\n                <input type="number" id=\'' + (null == (__t = id) ? "" : __t) + "' class=\"form-control rfformItem numberRangeItem rangeEnd\" data-key='" + (null == (__t = id) ? "" : __t) + "' \n                value=\"" + (null == (__t = options.values[1]) ? "" : __t) + '">\n            </div>\n          ' : "\n            <input id='" + (null == (__t = id) ? "" : __t) + "' data-key='" + (null == (__t = id) ? "" : __t) + "'/>\n            <input id='" + (null == (__t = id) ? "" : __t) + "' data-key='" + (null == (__t = id) ? "" : __t) + "'/>\n          ", __p += "\n        </div>\n        "), __p += "\n    </div>\n</div>\n"
                }
                return __p
            }, JST.icon = function(obj) {
                obj || (obj = {}); {
                    var __t, __p = "";
                    _.escape, Array.prototype.join
                }
                with(obj) __p += '<span class="icon">\n    <svg xmlns="http://www.w3.org/2000/svg" style="overflow: hidden; position: relative;" width="' + (null == (__t = width) ? "" : __t) + '" height="' + (null == (__t = height) ? "" : __t) + '">\n        ', "maximize" === name && (__p += '\n            <path transform="scale(0.4)" d="M22.646,19.307c0.96-1.583,1.523-3.435,1.524-5.421C24.169,8.093,19.478,3.401,13.688,3.399C7.897,3.401,3.204,8.093,3.204,13.885c0,5.789,4.693,10.481,10.484,10.481c1.987,0,3.839-0.563,5.422-1.523l7.128,7.127l3.535-3.537L22.646,19.307zM13.688,20.369c-3.582-0.008-6.478-2.904-6.484-6.484c0.006-3.582,2.903-6.478,6.484-6.486c3.579,0.008,6.478,2.904,6.484,6.486C20.165,17.465,17.267,20.361,13.688,20.369zM15.687,9.051h-4v2.833H8.854v4.001h2.833v2.833h4v-2.834h2.832v-3.999h-2.833V9.051z" stroke="#fff" fill="#000"\n            stroke-width="0.5px">\n            </path>\n        '), __p += "\n        ", "close" === name && (__p += '\n            <path transform="scale(0.8) translate(-7,-4)" d="M24.778,21.419 19.276,15.917 24.777,10.415 21.949,7.585 16.447,13.087 10.945,7.585 8.117,10.415 13.618,15.917 8.116,21.419 10.946,24.248 16.447,18.746 21.948,24.248z" fill="#fff">\n            </path>\n        '), __p += "\n    </svg>\n</span>";
                return __p
            }, JST.kpi_basic = function(obj) {
                obj || (obj = {}); {
                    var __t, __p = "";
                    _.escape
                }
                with(obj) __p += "<p>\n    The KPI's caption is <b>" + (null == (__t = kpiCaption) ? "" : __t) + '</b> and value is <span class="rfKPIValue"></span>\n</p>\n<p>\n    The dimensions are <span class="rfKpiDimensions"></span>\n</p>';
                return __p
            }, JST.kpigroup = function(obj) {
                obj || (obj = {}); {
                    var __t, __p = "";
                    _.escape, Array.prototype.join
                }
                with(obj) {
                    __p += '<div class="rfKPIGroupContainer">\n    ';
                    for (var i = -1; ++i < numKPIs;) __p += '\n        <div class="rfMiniKPIContainer" id="' + (null == (__t = keys[i]) ? "" : __t) + '">\n            <div class="rfMiniKPIContainerBorderContainer">\n            </div>\n        </div>\n    ';
                    __p += "\n</div>"
                }
                return __p
            }, JST.kpitable = function(obj) {
                obj || (obj = {}); {
                    var __t, __p = "";
                    _.escape, Array.prototype.join
                }
                with(obj) {
                    __p += '<div class="rfKPITableContainer">\n    <table class="rfTable">\n        ';
                    for (var i = -1; ++i < numKPIs;) __p += ' \n            <tr id="' + (null == (__t = keys[i]) ? "" : __t) + '">\n                <td class="rfKPITableCaption rfKPICaption">' + (null == (__t = kpis[i].caption) ? "" : __t) + '</td>\n                <td class="rfKPITableValue rfKPIValue">' + (null == (__t = kpis[i].value) ? "" : __t) + "</td>\n            </tr>\n        ";
                    __p += "\n    </table>\n</div>"
                }
                return __p
            }, JST.logging_base = function(obj) {
                obj || (obj = {}); {
                    var __p = "";
                    _.escape
                }
                with(obj) __p += '<div class="loggingBase">\n  <ul class="loggingItems"></ul>\n  <div class="logContent"></div>\n</div>';
                return __p
            }, JST.logging_links = function(obj) {
                obj || (obj = {}); {
                    var __t, __p = "";
                    _.escape
                }
                with(obj) __p += '<li id="' + (null == (__t = logID) ? "" : __t) + "\">\n	<span class='url'></span>\n	<span class='status'></span>\n</li>";
                return __p
            }, JST.logging_table = function(obj) {
                obj || (obj = {}); {
                    var __t, __p = "";
                    _.escape, Array.prototype.join
                }
                with(obj) {
                    __p += '<div id="' + (null == (__t = logID) ? "" : __t) + '" style="display:none;">\n  <table class="rfTable" style="width: auto;">\n    <thead>\n      <tr>\n        <th>Timestamp</th>\n        <th>Message</th>\n      </tr>      \n    </thead>\n    <tbody>\n      ';
                    for (var i = 0; i < logs.length; i++) __p += "\n        <tr>\n          <td>" + (null == (__t = new Date) ? "" : __t) + "</td>\n          <td>\n            " + (null == (__t = logs[i].message) ? "" : __t) + "\n            <p>" + (null == (__t = logs[i].log) ? "" : __t) + "</p>\n          </td>\n        </tr>\n      ";
                    __p += "\n    </tbody>\n  </table>\n</div>\n"
                }
                return __p
            }, JST.logs = function(obj) {
                obj || (obj = {}); {
                    var __p = "";
                    _.escape
                }
                with(obj) __p += '<div class="devTools">\n    <div class="devToolsInner">\n        <div id="tabstrip">\n            <ul>\n                <li class="k-state-active">Logs</li>\n            </ul>\n            <div class="rfLogs">\n                <div class="toolbar">\n                    <input type="checkbox" id="all" checked>All</input>\n                    <input type="checkbox" id="log" checked>Logs</input>\n                    <input type="checkbox" id="warn" checked>Warnings</input>\n                    <input type="checkbox" id="error" checked>Errors</input>\n                    <input type="checkbox" id="server" checked>Server</input>\n                    <input type="checkbox" id="client" checked>Client</input>\n                </div>\n                <ul class="rfLogList">\n                    \n                </ul>\n            </div>\n        </div>\n    </div>  \n</div>';
                return __p
            }, JST.mini_kpi = function(obj) {
                obj || (obj = {}); {
                    var __t, __p = "";
                    _.escape, Array.prototype.join
                }
                with(obj) {
                    __p += '<div class="rfMiniKPI">\n	';
                    for (var key in kpis) __p += '\n		<div class="' + (null == (__t = key) ? "" : __t) + '">\n			<div class="rfMiniKPICaption">\n				' + (null == (__t = kpis[key].caption) ? "" : __t) + '\n			</div>\n			<div class="rfMiniKPIValue">\n				' + (null == (__t = kpis[key].value) ? "" : __t) + "\n			</div>\n		</div>\n	";
                    __p += "\n</div>\n"
                }
                return __p
            }, JST.minikpi = function(obj) {
                obj || (obj = {}); {
                    var __t, __p = "";
                    _.escape
                }
                with(obj) __p += '<div class="rfMiniKPICore">\n    <div class="rfMiniKPIBorderContainer">\n    </div>        \n    <div class="rfMiniKPICaption rfKPICaption">\n        ' + (null == (__t = caption) ? "" : __t) + '\n    </div>\n    <div class="rfMiniKPIValue rfKPIValue">\n        ' + (null == (__t = value) ? "" : __t) + "\n    </div>\n</div>";
                return __p
            }, JST.notification_errors = function(obj) {
                obj || (obj = {}); {
                    var __t, __p = "";
                    _.escape
                }
                with(obj) __p += '<div class="rfNotificationErrors">\n    <p>' + (null == (__t = msg) ? "" : __t) + "</p>\n</div>";
                return __p
            }, JST.rfmodal = function(obj) {
                obj || (obj = {}); {
                    var __p = "";
                    _.escape
                }
                with(obj) __p += '<div class="rfModalBody">\n</div>\n';
                return __p
            }, JST.tabbeddashboard_standalone = function(obj) {
                obj || (obj = {}); {
                    var __t, __p = "";
                    _.escape, Array.prototype.join
                }
                with(obj) title && (__p += '\n	<div class="rfDashboardHeader">\n	  <div class="rfHeaderContainer">\n	  	<h1 class="dbTitle">' + (null == (__t = title) ? "" : __t) + "</h1>\n	  </div>\n	</div>\n"), __p += "\n", __p += mobile ? '\n    <div id="rfTabMobile" class="k-content">\n        <div id="mobile-tabstrip" data-role="tabstrip">\n        </div>\n        <div id="content-container">\n        </div>\n    </div>\n' : '\n    <div id="rfTabCore">\n        <ul class="tabLinks"></ul>\n    </div>\n', __p += '\n\n<div class="rfNotification"></div>\n<!-- \n<div class="rfServerLogBtnWrapper">\n  <button class="rfServerLogButton">Server Log</button>\n</div> -->';
                return __p
            }, JST.table_base = function(obj) {
                obj || (obj = {}); {
                    var __t, __p = "";
                    _.escape, Array.prototype.join
                }
                with(obj) {
                    __p += "<div class='rfTableContainer'>\n    <div class=\"rfTableHeader\">\n        <table class='rfTable'>\n            <thead>\n            <tr>\n                ";
                    for (var key in columns) {
                        var item = columns[key];
                        __p += "\n                ";
                        var thStyleClass = item.textAlign ? "rfTh-" + item.textAlign : null;
                        __p += "\n                <th data-id='" + (null == (__t = key) ? "" : __t) + "' class='" + (null == (__t = thStyleClass) ? "" : __t) + "'>\n                    <p>\n                        " + (null == (__t = item.name) ? "" : __t) + " ", item.subCaptionUnits && (__p += "(" + (null == (__t = item.subCaptionUnits) ? "" : __t) + ")"), __p += "\n                    </p>\n                </th>\n                "
                    }
                    __p += "\n            </tr>\n            </thead>\n        </table>\n    </div>\n    <div class=\"rfTableBody\">\n    </div>\n\n</div>\n    <div class='rfPaginationContainer'>\n    </div>\n"
                }
                return __p
            }, JST.table_body = function(obj) {
                obj || (obj = {}); {
                    var __t, __p = "";
                    _.escape, Array.prototype.join
                }
                with(obj) {
                    __p += '<table class="rfTable">\n    <tbody>\n    ';
                    for (var i = 0; i < data.length; i++) {
                        var row = data[i];
                        __p += "\n\n    <tr>\n        ";
                        for (var key in row) {
                            var item = row[key],
                                sClass = styleClass[key].style,
                                style = "";
                            cellStyle[key] && "undefined" != typeof cellStyle[key][i].cellBackgroundColor && "undefined" != typeof cellStyle[key][i].cellTextColor && (style = "background-color:" + cellStyle[key][i].cellBackgroundColor + "; color:" + cellStyle[key][i].cellTextColor + ";"), __p += '\n        <td class="' + (null == (__t = sClass) ? "" : __t) + '" data-id="' + (null == (__t = key) ? "" : __t) + '" id="rfTableCell-' + (null == (__t = key) ? "" : __t) + "-" + (null == (__t = i) ? "" : __t) + '" style="' + (null == (__t = style) ? "" : __t) + '">\n            <p>', __p += "icon" === columns[key].dataType ? '\n                <span class="rfIcon rfi-' + (null == (__t = item) ? "" : __t) + '"></span>\n                ' : null == (__t = item) ? "" : __t, __p += "</p>\n        </td>\n        "
                        }
                        __p += "\n    </tr>\n    "
                    }
                    __p += "\n    </tbody>\n</table>\n\n"
                }
                return __p
            }, JST.table_paginator = function(obj) {
                obj || (obj = {}); {
                    var __t, __p = "";
                    _.escape, Array.prototype.join
                }
                with(obj) {
                    if (__p += "<div class='rfPaginationCore'>\n	", media) __p += '\n		<div class="rfMobilePagination">\n		  <span class="rfPrevButton ', 0 === activePage && (__p += " disabled"), __p += ' rfMobileButton"><span class="rfIcon rfLeftArrowLarge"></span></span>\n		  <span class="paginationInfo">\n				Page ' + (null == (__t = activePage + 1) ? "" : __t) + " of " + (null == (__t = totalPages) ? "" : __t) + '\n			</span>\n			<span class="rfNextButton ', activePage === totalPages - 1 && (__p += " disabled"), __p += ' rfMobileButton"><span class="rfIcon rfRightArrowLarge"></span></span>\n		</div>\n	';
                    else {
                        __p += '\n		<p class="paginationInfo">\n			Page ' + (null == (__t = activePage + 1) ? "" : __t) + " of " + (null == (__t = totalPages) ? "" : __t) + '\n		</p>\n		<ul class="rfpagination">\n		  <li class="rfPrevButton ', 0 === activePage && (__p += " disabled"), __p += '"><a href="#"><span class="pagePrevArrow">&#866;</span> Prev</a></li>\n				';
                        for (var i = startPage; lastPage >= i; i++) __p += '\n					<li class="rfPageNumber', activePage === i && (__p += " active"), __p += '" data-page-number="' + (null == (__t = i) ? "" : __t) + '"><a href="#">' + (null == (__t = i + 1) ? "" : __t) + "</a></li>\n				";
                        __p += '\n				<li class="rfNextButton ', activePage === totalPages - 1 && (__p += " disabled"), __p += '"><a href="#">Next <span class="pageNextArrow">&#866;</span></a></li>\n		</ul>\n	'
                    }
                    __p += "\n</div>"
                }
                return __p
            }, JST.theme_builder = function(obj) {
                obj || (obj = {}); {
                    var __p = "";
                    _.escape
                }
                with(obj) __p += '<div id="themeWindow">\n	<div class="themepanelbarContainer">\n		<ul id="themepanelbar">\n    	</ul>\n	</div>\n	<div class="themeFooter">\n		<button class="doneBtn">Done</button>\n		<input type="text" style="display:none;" value="custom_theme" id="rfThemeFileName" class="k-textbox" />\n		<a class="getCSSBtn" style="display:none;" download="custom_theme.css">Get CSS</a>\n		<button class="updateBtn">Update</button>\n	</div>\n</div>';
                return __p
            }, JST.theme_table = function(obj) {
                obj || (obj = {}); {
                    var __t, __p = "";
                    _.escape, Array.prototype.join
                }
                with(obj) {
                    __p += "<table class='itemTable'>\n";
                    for (var i = 0; i < items.length; i++) __p += "\n	<tr>\n		<td>\n			<input data-id='" + (null == (__t = items[i].key) ? "" : __t) + "' class='picker' />\n		</td>\n		<td>\n			<span class='themeItem'>" + (null == (__t = items[i].desc) ? "" : __t) + "</span>\n		</td>\n		<td>\n			<span data-id='" + (null == (__t = items[i].key) ? "" : __t) + "' data-value='" + (null == (__t = DefaultTheme[items[i].key]) ? "" : __t) + "' class='rfIcon rfRefreshIcon resetTheme'></span>\n		</td>\n	</tr>\n";
                    __p += "\n</table>"
                }
                return __p
            }, JST.tooltip = function(obj) {
                obj || (obj = {}); {
                    var __p = "";
                    _.escape, Array.prototype.join
                }
                with(obj) __p += '<div class="rfTooltip">\n    <span class="rfTooltipMainLabel"></span>\n    <div class="rfTooltipValueRow">\n        <span class="rfTooltipLabel">\n        </span>\n        <span class="rfTooltipValue">\n        </span>\n    </div>\n    ', "top" === popupType ? __p += '\n        <span class="downArrow"></span>\n        <span class="downArrowBorder"></span>\n    ' : "left" === popupType && (__p += '\n        <span class="leftArrow"></span>\n        <span class="leftArrowBorder"></span>\n    '), __p += "\n</div>";
                return __p
            }, JST
        }), _dfn("utils/rflogger", ["kendo/kendo.window", "kendo/kendo.tabstrip", "generated/templates", "vendor/lodash"], function(e, t, n, r) {
            var i = [],
                o = $(n.logs({})),
                a = {
                    log: !0,
                    warn: !0,
                    error: !0,
                    server: !0,
                    client: !0
                },
                s = function(e) {
                    return $("<li/>").text(e.data.exception.stack)
                },
                l = {
                    debugMode: !0,
                    log: function(e, t) {
                        t = t || {};
                        var n = new Date,
                            o = {
                                type: "log",
                                source: "client",
                                timestamp: n
                            };
                        return i.push({
                            msg: e,
                            data: r.extend(o, t)
                        }), i.length - 1
                    },
                    error: function(e, t, n) {
                        return n = n || {}, l.log(e, r.extend({
                            type: "error",
                            extraInfo: t ? !0 : !1,
                            infoFormatter: s,
                            exception: t
                        }, n))
                    },
                    init: function() {
                        r.defer(function() {
                            o.kendoWindow({
                                width: 600,
                                height: 500,
                                title: "Razorflow Dev Tools",
                                visible: !1
                            }).data("kendoWindow"), o.find("#tabstrip").kendoTabStrip(), o.find(".toolbar input").on("change", function() {
                                var e = $(this).attr("id"),
                                    t = $(this).is(":checked");
                                if ("all" === e) t && o.find(".toolbar input").prop("checked", !0);
                                else if (t) {
                                    var n = !0;
                                    o.find(".toolbar input:not(#all)").each(function() {
                                        n = n && $(this).is(":checked")
                                    }), n && o.find(".toolbar input#all").prop("checked", !0)
                                } else o.find(".toolbar input#all").prop("checked", !1);
                                o.find(".toolbar input:not(#all)").each(function() {
                                    a[$(this).attr("id")] = $(this).is(":checked")
                                }), l.renderLogs()
                            })
                        })
                    },
                    renderLogs: function(e) {
                        var t, n = o.find(".rfLogs ul");
                        n.empty();
                        for (var s = r.filter(i, function(e) {
                                return a[e.data.type] && a[e.data.source]
                            }), l = -1; ++l < s.length;)
                            if (t = $("<li/>"), t.append($("<span/>").text("[" + s[l].data.source + "] " + s[l].msg)), t.addClass("rfLogItem " + s[l].data.type), t.attr("title", s[l].data.timestamp), t.attr("id", l), n.append(t), s[l].data.extraInfo) {
                                var u = s[l].data.infoFormatter(s[l]);
                                n.append(u), u.data("height", u.height()), u.hide(), u.addClass("extraInfo"), t.addClass("collapsable"), t.append($("<span/>").addClass("arrow right-arrow")), t.attr("data-state", "closed"), u.attr("id", l + "-info")
                            }
                        n.find(".collapsable").on("click", function() {
                            var e = $(this).attr("id"),
                                t = $(this).attr("data-state"),
                                r = o.find(".rfLogs"),
                                i = r.scrollTop();
                            "closed" === t ? (n.find("#" + e + "-info").slideDown(), $(this).attr("data-state", "open"), $(this).find(".arrow").removeClass("right-arrow").addClass("down-arrow"), o.find(".rfLogs").animate({
                                scrollTop: i + n.find("#" + e + "-info").data("height")
                            })) : (n.find("#" + e + "-info").slideUp(), $(this).find(".arrow").removeClass("down-arrow").addClass("right-arrow"), $(this).attr("data-state", "closed"))
                        }), e && (t = n.find("#" + e)[0], t.scrollIntoView(), $(t).addClass("shine").on("click.shine", function() {
                            $(this).removeClass("shine").off("click.shine")
                        }))
                    },
                    showLogs: function(e) {
                        o.data("kendoWindow").open(), l.renderLogs(e)
                    }
                };
            return l
        }),
        function(e, t) {
            t("kendo/kendo.popup", ["./kendo.core"], e)
        }(function() {
            return function(e) {
                function t(t, n) {
                    return t === n || e.contains(t, n)
                }
                var n = window.kendo,
                    r = n.ui,
                    i = r.Widget,
                    o = n.support,
                    a = n.getOffset,
                    s = n._activeElement,
                    l = "open",
                    u = "close",
                    c = "deactivate",
                    d = "activate",
                    f = "center",
                    p = "left",
                    h = "right",
                    g = "top",
                    m = "bottom",
                    _ = "absolute",
                    v = "hidden",
                    y = "body",
                    b = "location",
                    w = "position",
                    k = "visible",
                    x = "effects",
                    T = "k-state-active",
                    S = "k-state-border",
                    C = /k-state-border-(\w+)/,
                    M = ".k-picker-wrap, .k-dropdown-wrap, .k-link",
                    j = "down",
                    z = e(window),
                    E = e(document.documentElement),
                    O = "resize scroll",
                    D = o.transitions.css,
                    P = D + "transform",
                    A = e.extend,
                    I = ".kendoPopup",
                    N = ["font-size", "font-family", "font-stretch", "font-style", "font-weight", "line-height"],
                    H = i.extend({
                        init: function(t, r) {
                            var o, a = this;
                            r = r || {}, r.isRtl && (r.origin = r.origin || m + " " + h, r.position = r.position || g + " " + h), i.fn.init.call(a, t, r), t = a.element, r = a.options, a.collisions = r.collision ? r.collision.split(" ") : [], 1 === a.collisions.length && a.collisions.push(a.collisions[0]), o = e(a.options.anchor).closest(".k-popup,.k-group").filter(":not([class^=km-])"), r.appendTo = e(e(r.appendTo)[0] || o[0] || y), a.element.hide().addClass("k-popup k-group k-reset").toggleClass("k-rtl", !!r.isRtl).css({
                                position: _
                            }).appendTo(r.appendTo).on("mouseenter" + I, function() {
                                a._hovered = !0
                            }).on("mouseleave" + I, function() {
                                a._hovered = !1
                            }), a.wrapper = e(), r.animation === !1 && (r.animation = {
                                open: {
                                    effects: {}
                                },
                                close: {
                                    hide: !0,
                                    effects: {}
                                }
                            }), A(r.animation.open, {
                                complete: function() {
                                    a.wrapper.css({
                                        overflow: k
                                    }), a.trigger(d)
                                }
                            }), A(r.animation.close, {
                                complete: function() {
                                    a.wrapper.hide();
                                    var i, o, s = a.wrapper.data(b),
                                        l = e(r.anchor);
                                    s && a.wrapper.css(s), r.anchor != y && (i = (l[0].className.match(C) || ["", "down"])[1], o = S + "-" + i, l.removeClass(o).children(M).removeClass(T).removeClass(o), t.removeClass(S + "-" + n.directions[i].reverse)), a._closing = !1, a.trigger(c)
                                }
                            }), a._mousedownProxy = function(e) {
                                a._mousedown(e)
                            }, a._resizeProxy = function(e) {
                                a._resize(e)
                            }, r.toggleTarget && e(r.toggleTarget).on(r.toggleEvent + I, e.proxy(a.toggle, a))
                        },
                        events: [l, d, u, c],
                        options: {
                            name: "Popup",
                            toggleEvent: "click",
                            origin: m + " " + p,
                            position: g + " " + p,
                            anchor: y,
                            collision: "flip fit",
                            viewport: window,
                            copyAnchorStyles: !0,
                            autosize: !1,
                            modal: !1,
                            animation: {
                                open: {
                                    effects: "slideIn:down",
                                    transition: !0,
                                    duration: 200
                                },
                                close: {
                                    duration: 100,
                                    hide: !0
                                }
                            }
                        },
                        destroy: function() {
                            var t, r = this,
                                o = r.options,
                                a = r.element.off(I);
                            i.fn.destroy.call(r), o.toggleTarget && e(o.toggleTarget).off(I), o.modal || (E.unbind(j, r._mousedownProxy), z.unbind(O, r._resizeProxy)), n.destroy(r.element.children()), a.removeData(), o.appendTo[0] === document.body && (t = a.parent(".k-animation-container"), t[0] ? t.remove() : a.remove())
                        },
                        open: function(t, r) {
                            var i, a, s = this,
                                u = {
                                    isFixed: !isNaN(parseInt(r, 10)),
                                    x: t,
                                    y: r
                                },
                                c = s.element,
                                d = s.options,
                                f = "down",
                                p = e(d.anchor),
                                h = c[0] && c.hasClass("km-widget");
                            if (!s.visible()) {
                                if (d.copyAnchorStyles && (h && "font-size" == N[0] && N.shift(), c.css(n.getComputedStyles(p[0], N))), c.data("animating") || s.trigger(l)) return;
                                if (d.modal || (E.unbind(j, s._mousedownProxy).bind(j, s._mousedownProxy), o.mobileOS.ios || o.mobileOS.android || z.unbind(O, s._resizeProxy).bind(O, s._resizeProxy)), s.wrapper = a = n.wrap(c, d.autosize).css({
                                        overflow: v,
                                        display: "block",
                                        position: _
                                    }), o.mobileOS.android && a.add(p).css(P, "translatez(0)"), a.css(w), e(d.appendTo)[0] == document.body && a.css(g, "-10000px"), i = A(!0, {}, d.animation.open), s.flipped = s._position(u), i.effects = n.parseEffects(i.effects, s.flipped), f = i.effects.slideIn ? i.effects.slideIn.direction : f, d.anchor != y) {
                                    var m = S + "-" + f;
                                    c.addClass(S + "-" + n.directions[f].reverse), p.addClass(m).children(M).addClass(T).addClass(m)
                                }
                                c.data(x, i.effects).kendoStop(!0).kendoAnimate(i)
                            }
                        },
                        toggle: function() {
                            var e = this;
                            e[e.visible() ? u : l]()
                        },
                        visible: function() {
                            return this.element.is(":" + k)
                        },
                        close: function() {
                            var t, r, i, o, a = this,
                                s = a.options;
                            if (a.visible()) {
                                if (t = a.wrapper[0] ? a.wrapper : n.wrap(a.element).hide(), a._closing || a.trigger(u)) return;
                                a.element.find(".k-popup").each(function() {
                                    var t = e(this),
                                        n = t.data("kendoPopup");
                                    n && n.close()
                                }), E.unbind(j, a._mousedownProxy), z.unbind(O, a._resizeProxy), r = A(!0, {}, s.animation.close), i = a.element.data(x), o = r.effects, !o && !n.size(o) && i && n.size(i) && (r.effects = i, r.reverse = !0), a._closing = !0, a.element.kendoStop(!0), t.css({
                                    overflow: v
                                }), a.element.kendoAnimate(r)
                            }
                        },
                        _resize: function(e) {
                            var n = this;
                            "resize" === e.type ? (clearTimeout(n._resizeTimeout), n._resizeTimeout = setTimeout(function() {
                                n._position(), n._resizeTimeout = null
                            }, 50)) : n._hovered || t(n.element[0], s()) || n.close()
                        },
                        _mousedown: function(r) {
                            var i = this,
                                o = i.element[0],
                                a = i.options,
                                s = e(a.anchor)[0],
                                l = a.toggleTarget,
                                u = n.eventTarget(r),
                                c = e(u).closest(".k-popup"),
                                d = c.parent().parent(".km-shim").length;
                            c = c[0], (d || !c || c === i.element[0]) && "popover" !== e(r.target).closest("a").data("rel") && (t(o, u) || t(s, u) || l && t(e(l)[0], u) || i.close())
                        },
                        _fit: function(e, t, n) {
                            var r = 0;
                            return e + t > n && (r = n - (e + t)), 0 > e && (r = -e), r
                        },
                        _flip: function(e, t, n, r, i, o, a) {
                            var s = 0;
                            return a = a || t, o !== i && o !== f && i !== f && (e + a > r && (s += -(n + t)), 0 > e + s && (s += n + t)), s
                        },
                        _position: function(t) {
                            var n, r, i, s, l, u, c = this,
                                d = c.element.css(w, ""),
                                f = c.wrapper,
                                p = c.options,
                                h = e(p.viewport),
                                g = h.offset(),
                                m = e(p.anchor),
                                v = p.origin.toLowerCase().split(" "),
                                y = p.position.toLowerCase().split(" "),
                                k = c.collisions,
                                x = o.zoomLevel(),
                                T = 10002,
                                S = !!(h[0] == window && window.innerWidth && 1.02 >= x),
                                C = 0;
                            if (l = S ? window.innerWidth : h.width(), u = S ? window.innerHeight : h.height(), n = m.parents().filter(f.siblings()), n[0])
                                if (i = Number(e(n).css("zIndex"))) T = i + 1;
                                else
                                    for (r = m.parentsUntil(n), s = r.length; s > C; C++) i = Number(e(r[C]).css("zIndex")), i && i > T && (T = i + 1);
                            f.css("zIndex", T), f.css(t && t.isFixed ? {
                                left: t.x,
                                top: t.y
                            } : c._align(v, y));
                            var M = a(f, w, m[0] === f.offsetParent()[0]),
                                j = a(f),
                                z = m.offsetParent().parent(".k-animation-container,.k-popup,.k-group");
                            z.length && (M = a(f, w, !0), j = a(f)), h[0] === window ? (j.top -= window.pageYOffset || document.documentElement.scrollTop || 0, j.left -= window.pageXOffset || document.documentElement.scrollLeft || 0) : (j.top -= g.top, j.left -= g.left), c.wrapper.data(b) || f.data(b, A({}, M));
                            var E = A({}, j),
                                O = A({}, M);
                            "fit" === k[0] && (O.top += c._fit(E.top, f.outerHeight(), u / x)), "fit" === k[1] && (O.left += c._fit(E.left, f.outerWidth(), l / x));
                            var D = A({}, O);
                            return "flip" === k[0] && (O.top += c._flip(E.top, d.outerHeight(), m.outerHeight(), u / x, v[0], y[0], f.outerHeight())), "flip" === k[1] && (O.left += c._flip(E.left, d.outerWidth(), m.outerWidth(), l / x, v[1], y[1], f.outerWidth())), d.css(w, _), f.css(O), O.left != D.left || O.top != D.top
                        },
                        _align: function(t, n) {
                            var r, i = this,
                                o = i.wrapper,
                                s = e(i.options.anchor),
                                l = t[0],
                                u = t[1],
                                c = n[0],
                                d = n[1],
                                p = a(s),
                                g = e(i.options.appendTo),
                                _ = o.outerWidth(),
                                v = o.outerHeight(),
                                y = s.outerWidth(),
                                b = s.outerHeight(),
                                w = p.top,
                                k = p.left,
                                x = Math.round;
                            return g[0] != document.body && (r = a(g), w -= r.top, k -= r.left), l === m && (w += b), l === f && (w += x(b / 2)), c === m && (w -= v), c === f && (w -= x(v / 2)), u === h && (k += y), u === f && (k += x(y / 2)), d === h && (k -= _), d === f && (k -= x(_ / 2)), {
                                top: w,
                                left: k
                            }
                        }
                    });
                r.plugin(H)
            }(window.kendo.jQuery), window.kendo
        }, "function" == typeof _dfn && _dfn.amd ? _dfn : function(e, t) {
            t()
        }),
        function(e, t) {
            t("kendo/kendo.notification", ["./kendo.core", "./kendo.popup"], e)
        }(function() {
            return function(e, t) {
                var n = window.kendo,
                    r = n.ui.Widget,
                    i = e.proxy,
                    o = e.extend,
                    a = window.setTimeout,
                    s = "click",
                    l = "show",
                    u = "hide",
                    c = "k-notification",
                    d = ".k-notification-wrap .k-i-close",
                    f = "info",
                    p = "success",
                    h = "warning",
                    g = "error",
                    m = "top",
                    _ = "left",
                    v = "bottom",
                    y = "right",
                    b = "up",
                    w = ".kendoNotification",
                    k = '<div class="k-widget k-notification"></div>',
                    x = '<div class="k-notification-wrap"><span class="k-icon k-i-note">#=typeIcon#</span>#=content#<span class="k-icon k-i-close">Hide</span></div>',
                    T = r.extend({
                        init: function(t, i) {
                            var o = this;
                            r.fn.init.call(o, t, i), i = o.options, i.appendTo && e(i.appendTo).is(t) || o.element.hide(), o._compileTemplates(i.templates), o._guid = "_" + n.guid(), o._isRtl = n.support.isRtl(t), o._compileStacking(i.stacking, i.position.top), n.notify(o)
                        },
                        events: [l, u],
                        options: {
                            name: "Notification",
                            position: {
                                pinned: !0,
                                top: null,
                                left: null,
                                bottom: 20,
                                right: 20
                            },
                            stacking: "default",
                            hideOnClick: !0,
                            button: !1,
                            allowHideAfter: 0,
                            autoHideAfter: 5e3,
                            appendTo: null,
                            width: null,
                            height: null,
                            templates: [],
                            animation: {
                                open: {
                                    effects: "fade:in",
                                    duration: 300
                                },
                                close: {
                                    effects: "fade:out",
                                    duration: 600,
                                    hide: !0
                                }
                            },
                            handleClick: null
                        },
                        _compileTemplates: function(t) {
                            var r = this,
                                i = n.template;
                            r._compiled = {}, e.each(t, function(t, n) {
                                r._compiled[n.type] = i(n.template || e("#" + n.templateId).html())
                            }), r._defaultCompiled = i(x)
                        },
                        _getCompiled: function(e) {
                            var t = this,
                                n = t._defaultCompiled;
                            return e ? t._compiled[e] || n : n
                        },
                        _compileStacking: function(e, t) {
                            var n, r, i = this,
                                o = {
                                    paddingTop: 0,
                                    paddingRight: 0,
                                    paddingBottom: 0,
                                    paddingLeft: 0
                                };
                            switch (e) {
                                case "down":
                                    n = v + " " + _, r = m + " " + _, delete o.paddingBottom;
                                    break;
                                case y:
                                    n = m + " " + y, r = m + " " + _, delete o.paddingRight;
                                    break;
                                case _:
                                    n = m + " " + _, r = m + " " + y, delete o.paddingLeft;
                                    break;
                                case b:
                                    n = m + " " + _, r = v + " " + _, delete o.paddingTop;
                                    break;
                                default:
                                    null !== t ? (n = v + " " + _, r = m + " " + _, delete o.paddingBottom) : (n = m + " " + _, r = v + " " + _, delete o.paddingTop)
                            }
                            i._popupOrigin = n, i._popupPosition = r, i._popupPaddings = o
                        },
                        _attachPopupEvents: function(e, t) {
                            function n(n) {
                                n.on(s + w, function() {
                                    e.handleClick ? e.handleClick() : t.close()
                                })
                            }
                            var r, i = e.allowHideAfter,
                                o = !isNaN(i) && i > 0;
                            e.handleClick && t.bind("activate", function() {
                                n(t.element)
                            }), e.hideOnClick ? t.bind("activate", function() {
                                o ? a(function() {
                                    n(t.element)
                                }, i) : n(t.element)
                            }) : e.button && (r = t.element.find(d), o ? a(function() {
                                n(r)
                            }, i) : n(r))
                        },
                        _showPopup: function(t, r) {
                            {
                                var i, s, l = this,
                                    c = r.autoHideAfter,
                                    f = r.position.left,
                                    p = r.position.top;
                                r.allowHideAfter
                            }
                            s = e("." + l._guid).last(), i = new n.ui.Popup(t, {
                                anchor: s[0] ? s : document.body,
                                origin: l._popupOrigin,
                                position: l._popupPosition,
                                animation: r.animation,
                                modal: !0,
                                collision: "",
                                isRtl: l._isRtl,
                                close: function() {
                                    l.trigger(u, {
                                        element: this.element
                                    })
                                },
                                deactivate: function(e) {
                                    e.sender.element.off(w), e.sender.element.find(d).off(w), e.sender.destroy()
                                }
                            }), l._attachPopupEvents(r, i), s[0] ? i.open() : (null === f && (f = e(window).width() - t.width() - r.position.right), null === p && (p = e(window).height() - t.height() - r.position.bottom), i.open(f, p)), i.wrapper.addClass(l._guid).css(o({
                                margin: 0
                            }, l._popupPaddings)), r.position.pinned ? (i.wrapper.css("position", "fixed"), s[0] && l._togglePin(i.wrapper, !0)) : s[0] || l._togglePin(i.wrapper, !1), c > 0 && a(function() {
                                i.close()
                            }, c)
                        },
                        _togglePin: function(t, n) {
                            var r = e(window),
                                i = n ? -1 : 1;
                            t.css({
                                top: parseInt(t.css(m), 10) + i * r.scrollTop(),
                                left: parseInt(t.css(_), 10) + i * r.scrollLeft()
                            })
                        },
                        _attachStaticEvents: function(e, t) {
                            function n(e) {
                                e.on(s + w, i(r._hideStatic, r, t))
                            }
                            var r = this,
                                o = e.allowHideAfter,
                                l = !isNaN(o) && o > 0;
                            e.hideOnClick ? l ? a(function() {
                                n(t)
                            }, o) : n(t) : e.button && (l ? a(function() {
                                n(t.find(d))
                            }, o) : n(t.find(d)))
                        },
                        _showStatic: function(e, t) {
                            var n = this,
                                r = t.autoHideAfter,
                                i = t.animation,
                                o = t.stacking == b || t.stacking == _ ? "prependTo" : "appendTo";
                            e.addClass(n._guid)[o](t.appendTo).hide().kendoAnimate(i.open), n._attachStaticEvents(t, e), r > 0 && a(function() {
                                n._hideStatic(e)
                            }, r)
                        },
                        _hideStatic: function(e) {
                            e.kendoAnimate(o(this.options.animation.close, {
                                complete: function() {
                                    e.off(w).find(d).off(w), e.remove()
                                }
                            })), this.trigger(u, {
                                element: e
                            })
                        },
                        show: function(r, i) {
                            var a, s, u = this,
                                d = u.options,
                                p = e(k);
                            return i || (i = f), null !== r && r !== t && "" !== r && (n.isFunction(r) && (r = r()), s = {
                                typeIcon: i,
                                content: ""
                            }, a = e.isPlainObject(r) ? o(s, r) : o(s, {
                                content: r
                            }), p.addClass(c + "-" + i).toggleClass(c + "-button", d.button).attr("data-role", "alert").css({
                                width: d.width,
                                height: d.height
                            }).append(u._getCompiled(i)(a)), e(d.appendTo)[0] ? u._showStatic(p, d) : u._showPopup(p, d), u.trigger(l, {
                                element: p
                            })), u
                        },
                        info: function(e) {
                            return this.show(e, f)
                        },
                        success: function(e) {
                            return this.show(e, p)
                        },
                        warning: function(e) {
                            return this.show(e, h)
                        },
                        error: function(e) {
                            return this.show(e, g)
                        },
                        hide: function() {
                            var t = this,
                                n = t.getNotifications();
                            return n.each(t.options.appendTo ? function(n, r) {
                                t._hideStatic(e(r))
                            } : function(t, n) {
                                var r = e(n).data("kendoPopup");
                                r && r.close()
                            }), t
                        },
                        getNotifications: function() {
                            var t = this,
                                n = e("." + t._guid);
                            return t.options.appendTo ? n : n.children("." + c)
                        },
                        setOptions: function(e) {
                            var n, i = this;
                            r.fn.setOptions.call(i, e), n = i.options, e.templates !== t && i._compileTemplates(n.templates), (e.stacking !== t || e.position !== t) && i._compileStacking(n.stacking, n.position.top)
                        },
                        destroy: function() {
                            r.fn.destroy.call(this), this.getNotifications().off(w).find(d).off(w)
                        }
                    });
                n.ui.plugin(T)
            }(window.kendo.jQuery), window.kendo
        }, "function" == typeof _dfn && _dfn.amd ? _dfn : function(e, t) {
            t()
        }), _dfn("utils/rfnotification", ["kendo/kendo.notification", "generated/templates"], function(e, t) {
            var n = {
                create: function(e, n, r, i) {
                    var o = "undefined" == typeof i ? !0 : i,
                        a = $("<div/>").addClass("rfNotification");
                    $("body").append(a);
                    var s = t.notification_errors({
                        msg: e
                    });
                    a.append(s), a.kendoNotification({
                        allowHideAfter: 2e3,
                        position: {
                            stacking: "down",
                            top: 30,
                            right: 30
                        },
                        handleClick: function() {
                            o && rf.logger.showLogs(r)
                        }
                    }).data("kendoNotification"), a.data("kendoNotification").show(s, "error")
                }
            };
            return n
        }), _dfn("constants/debugconstants", [], function() {
            var e = {
                checkScriptURL: "http://www.razorflow.com/update/check.php",
                upgradeURL: "http://www.razorflow.com/update"
            };
            return e
        }), _dfn("utils/versionchecker", ["utils/rflogger", "utils/rfnotification", "constants/debugconstants"], function(e, t, n) {
            var r, i = window.__rfVersion,
                o = n.checkScriptURL,
                a = "dev",
                s = "rf.jsonp.versionCheckCallback",
                l = !1,
                u = {
                    init: function() {
                        l || f()
                    },
                    versionCallback: function(e) {
                        r = e, c()
                    },
                    disable: function() {
                        l = !0
                    }
                },
                c = function() {
                    return window.localStorage.setItem("__rf_update_last_checked", new Date), window.localStorage.setItem("__rf_update_user_id", r.user_id), h() ? (window.localStorage.setItem("__rf_latest_version", !1), void d()) : void window.localStorage.setItem("__rf_latest_version", !0)
                },
                d = function() {},
                f = function() {
                    if (p()) {
                        var e = localStorage.getItem("__rf_update_user_id"),
                            t = o + "?v=" + i.version + "&l=" + a + "&c=" + i.channel + "&id=" + e + "&callback=" + s;
                        $.ajax({
                            type: "get",
                            dataType: "jsonp",
                            url: t,
                            jsonp: !1
                        })
                    }
                },
                p = function() {
                    if (l) return !1;
                    if (window.localStorage) {
                        var e = window.localStorage.getItem("__rf_update_last_checked"),
                            t = window.localStorage.getItem("__rf_latest_version");
                        if (null === t) return !0;
                        if (t = JSON.parse(t), !t) return !0;
                        if (null === e) return !0;
                        var n = new Date,
                            r = new Date(e);
                        return 36e5 > n - r ? !1 : !0
                    }
                },
                h = function() {
                    var e;
                    return e = m() ? g(r.beta.versionString, i.version) : g(r.stable.versionString, i.version), !e
                },
                g = function(e, t) {
                    return t === e ? !0 : !1
                },
                m = function() {
                    return "beta" === i.channel ? !0 : !1
                };
            return u
        }), _dfn("utils/errorhandler", ["utils/rflogger", "utils/rfnotification"], function(e, t) {
            var n = {
                init: function() {
                    var e = function() {};
                    window.onerror && (e = window.onerror), window.onerror = function(n, r, i, o, a) {
                        var s = rf.logger.error(n, a);
                        return t.create(n, a, s), e(), !1
                    }
                }
            };
            return n
        }), _dfn("core/devtools.main", ["utils/rflogger", "utils/rfnotification", "utils/versionchecker", "utils/errorhandler"], function(e, t, n, r) {
            window.rf && (rf.logger = e, rf.jsonp = {}, rf.jsonp.versionCheckCallback = n.versionCallback), e.init(), window.__rfVersion && (rf.disableUpdateChecker = function() {
                n.disable()
            }, setTimeout(function() {
                n.init()
            }, 5e3)), r.init()
        }), _rqr(["core/devtools.main"]), _rqr("core/devtools.main")
});