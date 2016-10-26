function scrollTo(e, t) {
    var n = $("html, body");
    return n.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function() {
        n.stop()
    }), n.animate({
        scrollTop: e
    }, t, function() {
        n.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove")
    }), !1
}

function escape_reg_exp(e) {
    return e.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")
}

function replace_all(e, t, n) {
    return e.replace(new RegExp(escape_reg_exp(t), "g"), n)
}
var pointer_events = {
    body: document.body,
    timer: null
};
window.addEventListener("scroll", function() {
        clearTimeout(pointer_events.timer), pointer_events.body.classList.contains("disable-hover") || pointer_events.body.classList.add("disable-hover"), pointer_events.timer = setTimeout(function() {
            pointer_events.body.classList.remove("disable-hover")
        }, 100)
    }, !1), ! function(e) {
        var t = navigator.userAgent;
        e.HTMLPictureElement && /ecko/.test(t) && t.match(/rv\:(\d+)/) && RegExp.$1 < 41 && addEventListener("resize", function() {
            var t, n = document.createElement("source"),
                a = function(e) {
                    var t, a, i = e.parentNode;
                    "PICTURE" === i.nodeName.toUpperCase() ? (t = n.cloneNode(), i.insertBefore(t, i.firstElementChild), setTimeout(function() {
                        i.removeChild(t)
                    })) : (!e._pfLastSize || e.offsetWidth > e._pfLastSize) && (e._pfLastSize = e.offsetWidth, a = e.sizes, e.sizes += ",100vw", setTimeout(function() {
                        e.sizes = a
                    }))
                },
                i = function() {
                    var e, t = document.querySelectorAll("picture > img, img[srcset][sizes]");
                    for (e = 0; e < t.length; e++) a(t[e])
                },
                s = function() {
                    clearTimeout(t), t = setTimeout(i, 99)
                },
                r = e.matchMedia && matchMedia("(orientation: landscape)"),
                o = function() {
                    s(), r && r.addListener && r.addListener(s)
                };
            return n.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? o() : document.addEventListener("DOMContentLoaded", o), s
        }())
    }(window),
    function(e, t, n) {
        "use strict";

        function a(e) {
            return " " === e || "   " === e || "\n" === e || "\f" === e || "\r" === e
        }

        function i(t, n) {
            var a = new e.Image;
            return a.onerror = function() {
                k[t] = !1, ee()
            }, a.onload = function() {
                k[t] = 1 === a.width, ee()
            }, a.src = n, "pending"
        }

        function s() {
            W = !1, Q = e.devicePixelRatio, P = {}, H = {}, _.DPR = Q || 1, B.width = Math.max(e.innerWidth || 0, C.clientWidth), B.height = Math.max(e.innerHeight || 0, C.clientHeight), B.vw = B.width / 100, B.vh = B.height / 100, v = [B.height, B.width, Q].join("-"), B.em = _.getEmValue(), B.rem = B.em
        }

        function r(e, t, n, a) {
            var i, s, r, o;
            return "saveData" === S.algorithm ? e > 2.7 ? o = n + 1 : (s = t - n, i = Math.pow(e - .6, 1.5), r = s * i, a && (r += .1 * i), o = e + r) : o = n > 1 ? Math.sqrt(e * t) : e, o > n
        }

        function o(e) {
            var t, n = _.getSet(e),
                a = !1;
            "pending" !== n && (a = v, n && (t = _.setRes(n), _.applySetCandidate(t, e))), e[_.ns].evaled = a
        }

        function c(e, t) {
            return e.res - t.res
        }

        function l(e, t, n) {
            var a;
            return !n && t && (n = e[_.ns].sets, n = n && n[n.length - 1]), a = d(t, n), a && (t = _.makeUrl(t), e[_.ns].curSrc = t, e[_.ns].curCan = a, a.res || Z(a, a.set.sizes)), a
        }

        function d(e, t) {
            var n, a, i;
            if (e && t)
                for (i = _.parseSet(t), e = _.makeUrl(e), n = 0; n < i.length; n++)
                    if (e === _.makeUrl(i[n].url)) {
                        a = i[n];
                        break
                    }
            return a
        }

        function u(e, t) {
            var n, a, i, s, r = e.getElementsByTagName("source");
            for (n = 0, a = r.length; a > n; n++) i = r[n], i[_.ns] = !0, s = i.getAttribute("srcset"), s && t.push({
                srcset: s,
                media: i.getAttribute("media"),
                type: i.getAttribute("type"),
                sizes: i.getAttribute("sizes")
            })
        }

        function f(e, t) {
            function n(t) {
                var n, a = t.exec(e.substring(f));
                return a ? (n = a[0], f += n.length, n) : void 0
            }

            function i() {
                var e, n, a, i, s, c, l, d, u, f = !1,
                    m = {};
                for (i = 0; i < o.length; i++) s = o[i], c = s[s.length - 1], l = s.substring(0, s.length - 1), d = parseInt(l, 10), u = parseFloat(l), Y.test(l) && "w" === c ? ((e || n) && (f = !0), 0 === d ? f = !0 : e = d) : V.test(l) && "x" === c ? ((e || n || a) && (f = !0), 0 > u ? f = !0 : n = u) : Y.test(l) && "h" === c ? ((a || n) && (f = !0), 0 === d ? f = !0 : a = d) : f = !0;
                f || (m.url = r, e && (m.w = e), n && (m.d = n), a && (m.h = a), a || n || e || (m.d = 1), 1 === m.d && (t.has1x = !0), m.set = t, p.push(m))
            }

            function s() {
                for (n(F), c = "", l = "in descriptor";;) {
                    if (d = e.charAt(f), "in descriptor" === l)
                        if (a(d)) c && (o.push(c), c = "", l = "after descriptor");
                        else {
                            if ("," === d) return f += 1, c && o.push(c), void i();
                            if ("(" === d) c += d, l = "in parens";
                            else {
                                if ("" === d) return c && o.push(c), void i();
                                c += d
                            }
                        } else if ("in parens" === l)
                        if (")" === d) c += d, l = "in descriptor";
                        else {
                            if ("" === d) return o.push(c), void i();
                            c += d
                        } else if ("after descriptor" === l)
                        if (a(d));
                        else {
                            if ("" === d) return void i();
                            l = "in descriptor", f -= 1
                        }
                    f += 1
                }
            }
            for (var r, o, c, l, d, u = e.length, f = 0, p = [];;) {
                if (n(G), f >= u) return p;
                r = n(q), o = [], "," === r.slice(-1) ? (r = r.replace(X, ""), i()) : s()
            }
        }

        function p(e) {
            function t(e) {
                function t() {
                    r && (o.push(r), r = "")
                }

                function i() {
                    o[0] && (c.push(o), o = [])
                }
                for (var s, r = "", o = [], c = [], l = 0, d = 0, u = !1;;) {
                    if (s = e[d], s === n) return t(), i(), c;
                    if (u) {
                        if ("*" === s && "/" === e[d + 1]) {
                            u = !1, d += 2, t();
                            continue
                        }
                        d += 1
                    } else {
                        if (a(s)) {
                            if (e[d - 1] && a(e[d - 1]) || !r) {
                                d += 1;
                                continue
                            }
                            if (0 === l) {
                                t(), d += 1;
                                continue
                            }
                            s = " "
                        } else if ("(" === s) l += 1;
                        else if (")" === s) l -= 1;
                        else {
                            if ("," === s) {
                                t(), i(), d += 1;
                                continue
                            }
                            if ("/" === s && "*" === e[d + 1]) {
                                u = !0, d += 2;
                                continue
                            }
                        }
                        r += s, d += 1
                    }
                }
            }

            function i(e) {
                return u.test(e) && parseFloat(e) >= 0 ? !0 : f.test(e) ? !0 : "0" === e || "-0" === e || "+0" === e ? !0 : !1
            }
            var s, r, o, c, l, d, u = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
                f = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
            for (r = t(e), o = r.length, s = 0; o > s; s++)
                if (c = r[s], l = c[c.length - 1], i(l)) {
                    if (d = l, c.pop(), 0 === c.length) return d;
                    if (c = c.join(" "), _.matchesMedia(c)) return d
                }
            return "100vw"
        }
        t.createElement("picture");
        var m, h, g, v, _ = {},
            w = function() {},
            b = t.createElement("img"),
            y = b.getAttribute,
            A = b.setAttribute,
            x = b.removeAttribute,
            C = t.documentElement,
            k = {},
            S = {
                algorithm: ""
            },
            T = "data-pfsrc",
            z = T + "set",
            E = navigator.userAgent,
            M = /rident/.test(E) || /ecko/.test(E) && E.match(/rv\:(\d+)/) && RegExp.$1 > 35,
            L = "currentSrc",
            R = /\s+\+?\d+(e\d+)?w/,
            j = /(\([^)]+\))?\s*(.+)/,
            D = e.picturefillCFG,
            I = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",
            U = "font-size:100%!important;",
            W = !0,
            P = {},
            H = {},
            Q = e.devicePixelRatio,
            B = {
                px: 1,
                "in": 96
            },
            N = t.createElement("a"),
            O = !1,
            F = /^[ \t\n\r\u000c]+/,
            G = /^[, \t\n\r\u000c]+/,
            q = /^[^ \t\n\r\u000c]+/,
            X = /[,]+$/,
            Y = /^\d+$/,
            V = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
            J = function(e, t, n, a) {
                e.addEventListener ? e.addEventListener(t, n, a || !1) : e.attachEvent && e.attachEvent("on" + t, n)
            },
            K = function(e) {
                var t = {};
                return function(n) {
                    return n in t || (t[n] = e(n)), t[n]
                }
            },
            $ = function() {
                var e = /^([\d\.]+)(em|vw|px)$/,
                    t = function() {
                        for (var e = arguments, t = 0, n = e[0]; ++t in e;) n = n.replace(e[t], e[++t]);
                        return n
                    },
                    n = K(function(e) {
                        return "return " + t((e || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";"
                    });
                return function(t, a) {
                    var i;
                    if (!(t in P))
                        if (P[t] = !1, a && (i = t.match(e))) P[t] = i[1] * B[i[2]];
                        else try {
                            P[t] = new Function("e", n(t))(B)
                        } catch (s) {}
                        return P[t]
                }
            }(),
            Z = function(e, t) {
                return e.w ? (e.cWidth = _.calcListLength(t || "100vw"), e.res = e.w / e.cWidth) : e.res = e.d, e
            },
            ee = function(e) {
                var n, a, i, s = e || {};
                if (s.elements && 1 === s.elements.nodeType && ("IMG" === s.elements.nodeName.toUpperCase() ? s.elements = [s.elements] : (s.context = s.elements, s.elements = null)), n = s.elements || _.qsa(s.context || t, s.reevaluate || s.reselect ? _.sel : _.selShort), i = n.length) {
                    for (_.setupRun(s), O = !0, a = 0; i > a; a++) _.fillImg(n[a], s);
                    _.teardownRun(s)
                }
            };
        m = e.console && console.warn ? function(e) {
            console.warn(e)
        } : w, L in b || (L = "src"), k["image/jpeg"] = !0, k["image/gif"] = !0, k["image/png"] = !0, k["image/svg+xml"] = t.implementation.hasFeature("http://wwwindow.w3.org/TR/SVG11/feature#Image", "1.1"), _.ns = ("pf" + (new Date).getTime()).substr(0, 9), _.supSrcset = "srcset" in b, _.supSizes = "sizes" in b, _.selShort = "picture>img,img[srcset]", _.sel = _.selShort, _.cfg = S, _.supSrcset && (_.sel += ",img[" + z + "]"), _.DPR = Q || 1, _.u = B, _.types = k, g = _.supSrcset && !_.supSizes, _.setSize = w, _.makeUrl = K(function(e) {
            return N.href = e, N.href
        }), _.qsa = function(e, t) {
            return e.querySelectorAll(t)
        }, _.matchesMedia = function() {
            return e.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? _.matchesMedia = function(e) {
                return !e || matchMedia(e).matches
            } : _.matchesMedia = _.mMQ, _.matchesMedia.apply(this, arguments)
        }, _.mMQ = function(e) {
            return e ? $(e) : !0
        }, _.calcLength = function(e) {
            var t = $(e, !0) || !1;
            return 0 > t && (t = !1), t
        }, _.supportsType = function(e) {
            return e ? k[e] : !0
        }, _.parseSize = K(function(e) {
            var t = (e || "").match(j);
            return {
                media: t && t[1],
                length: t && t[2]
            }
        }), _.parseSet = function(e) {
            return e.cands || (e.cands = f(e.srcset, e)), e.cands
        }, _.getEmValue = function() {
            var e;
            if (!h && (e = t.body)) {
                var n = t.createElement("div"),
                    a = C.style.cssText,
                    i = e.style.cssText;
                n.style.cssText = I, C.style.cssText = U, e.style.cssText = U, e.appendChild(n), h = n.offsetWidth, e.removeChild(n), h = parseFloat(h, 10), C.style.cssText = a, e.style.cssText = i
            }
            return h || 16
        }, _.calcListLength = function(e) {
            if (!(e in H) || S.uT) {
                var t = _.calcLength(p(e));
                H[e] = t ? t : B.width
            }
            return H[e]
        }, _.setRes = function(e) {
            var t;
            if (e) {
                t = _.parseSet(e);
                for (var n = 0, a = t.length; a > n; n++) Z(t[n], e.sizes)
            }
            return t
        }, _.setRes.res = Z, _.applySetCandidate = function(e, t) {
            if (e.length) {
                var n, a, i, s, o, d, u, f, p, m, h = t[_.ns],
                    g = _.DPR;
                if (d = h.curSrc || t[L], u = h.curCan || l(t, d, e[0].set), u && u.set === e[0].set && (m = M && !t.complete && u.res - .1 > g, m || (u.cached = !0, u && f && u.res >= g && (o = u))), !o)
                    for (e.sort(c), s = e.length, o = e[s - 1], a = 0; s > a; a++)
                        if (n = e[a], n.res >= g) {
                            i = a - 1, o = e[i] && (m || d !== _.makeUrl(n.url)) && r(e[i].res, n.res, g, e[i].cached) ? e[i] : n;
                            break
                        }
                o && (p = _.makeUrl(o.url), h.curSrc = p, h.curCan = o, p !== d && _.setSrc(t, o), _.setSize(t))
            }
        }, _.setSrc = function(e, t) {
            var n;
            e.src = t.url, "image/svg+xml" === t.set.type && (n = e.style.width, e.style.width = e.offsetWidth + 1 + "px", e.offsetWidth + 1 && (e.style.width = n))
        }, _.getSet = function(e) {
            var t, n, a, i = !1,
                s = e[_.ns].sets;
            for (t = 0; t < s.length && !i; t++)
                if (n = s[t], n.srcset && _.matchesMedia(n.media) && (a = _.supportsType(n.type))) {
                    "pending" === a && (n = a), i = n;
                    break
                }
            return i
        }, _.parseSets = function(e, t, a) {
            var i, s, r, o, c = t && "PICTURE" === t.nodeName.toUpperCase(),
                l = e[_.ns];
            (l.src === n || a.src) && (l.src = y.call(e, "src"), l.src ? A.call(e, T, l.src) : x.call(e, T)), (l.srcset === n || a.srcset || !_.supSrcset || e.srcset) && (i = y.call(e, "srcset"), l.srcset = i, o = !0), l.sets = [], c && (l.pic = !0, u(t, l.sets)), l.srcset ? (s = {
                srcset: l.srcset,
                sizes: y.call(e, "sizes")
            }, l.sets.push(s), r = (g || l.src) && R.test(l.srcset || ""), r || !l.src || d(l.src, s) || s.has1x || (s.srcset += ", " + l.src, s.cands.push({
                url: l.src,
                d: 1,
                set: s
            }))) : l.src && l.sets.push({
                srcset: l.src,
                sizes: null
            }), l.curCan = null, l.curSrc = n, l.supported = !(c || s && !_.supSrcset || r), o && _.supSrcset && !l.supported && (i ? (A.call(e, z, i), e.srcset = "") : x.call(e, z)), l.supported && !l.srcset && (!l.src && e.src || e.src !== _.makeUrl(l.src)) && (null === l.src ? e.removeAttribute("src") : e.src = l.src), l.parsed = !0
        }, _.fillImg = function(e, t) {
            var n, a = t.reselect || t.reevaluate;
            e[_.ns] || (e[_.ns] = {}), n = e[_.ns], (a || n.evaled !== v) && ((!n.parsed || t.reevaluate) && _.parseSets(e, e.parentNode, t), n.supported ? n.evaled = v : o(e))
        }, _.setupRun = function() {
            (!O || W || Q !== e.devicePixelRatio) && s()
        }, e.HTMLPictureElement ? (ee = w, _.fillImg = w) : ! function() {
            var n, a = e.attachEvent ? /d$|^c/ : /d$|^c|^i/,
                s = function() {
                    var e = t.readyState || "";
                    r = setTimeout(s, "loading" === e ? 200 : 999), t.body && (_.fillImgs(), n = n || a.test(e), n && clearTimeout(r))
                },
                r = setTimeout(s, t.body ? 9 : 99),
                o = function(e, t) {
                    var n, a, i = function() {
                        var s = new Date - a;
                        t > s ? n = setTimeout(i, t - s) : (n = null, e())
                    };
                    return function() {
                        a = new Date, n || (n = setTimeout(i, t))
                    }
                },
                c = C.clientHeight,
                l = function() {
                    W = Math.max(e.innerWidth || 0, C.clientWidth) !== B.width || C.clientHeight !== c, c = C.clientHeight, W && _.fillImgs()
                };
            J(e, "resize", o(l, 99)), J(t, "readystatechange", s), k["image/webp"] = i("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==")
        }(), _.picturefill = ee, _.fillImgs = ee, _.teardownRun = w, ee._ = _, e.picturefillCFG = {
            pf: _,
            push: function(e) {
                var t = e.shift();
                "function" == typeof _[t] ? _[t].apply(_, e) : (S[t] = e[0], O && _.fillImgs({
                    reselect: !0
                }))
            }
        };
        for (; D && D.length;) e.picturefillCFG.push(D.shift());
        e.picturefill = ee, "object" == typeof module && "object" == typeof module.exports ? module.exports = ee : "function" == typeof define && define.amd && define("picturefill", function() {
            return ee
        })
    }(window, document), window.Î» = function e() {
        this.version = "1"
    }, Î».page_loaded = {}, Î».page_loaded.home = !1, Î».page_loaded.about = !1, Î».page_loaded.schedule = !1, Î».page_loaded.location = !1, Î».slick_loaded = !0, Î».confirm_slick_loaded = function() {
        function e() {
            var e = document.createElement("script");
            e.src = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.9/slick.min.js", document.body.appendChild(e)
        }
        if (Î».slick_loaded = "undefined" == typeof $.fn.slick, "undefined" == typeof $.fn.slick) {
            try {
                document.addEventListener("DOMContentLoaded", e, !1)
            } catch (t) {
                window.attachEvent("onload", e)
            }
            return setInterval(function() {
                Î».slick_loaded = "undefined" == typeof $.fn.slick
            }, 50)
        }
    }, Î».acceleration_updates = function(e, t, n, a, i) {
        $(".subtle-parallax").each(function() {
            var n = $(this).attr("data-parallax-dampening") ? $(this).attr("data-parallax-dampening") : 1,
                a = "abs" === $(this).attr("data-parallax-type") ? "px" : "%";
            "reverse" !== $(this).attr("data-parallax-dir") ? $(this).css("transform", "translateX( " + e / n / 100 + a + " )  translateY( " + t / n / 100 + a + " )") : $(this).css("transform", "translateX( " + e / n / 100 * -1 + a + " )  translateY( " + t / n / 100 * -1 + a + " )")
        }), $(".parallax-background").css("transform", "perspective(300px) rotateY( " + e / 600 + "deg )  rotateX( " + t / 200 + "deg ) translateZ(-100px) scale(1.5)"), $(".event-background").css("transform", "perspective(300px) rotateY( " + e / 100 + "deg )  rotateX( " + t / 800 + "deg ) translateY(-50%) translateZ(-100px) scale(1.5)")
    }, Î».mouse_and_gyro_parallax = function() {
        $(document).ready(function() {
            Modernizr.touch ? window.ondeviceorientation = function(e) {
                var t = Math.ceil(10 * e.gamma),
                    n = Math.ceil(10 * e.beta),
                    a = t - $("#center").offset().left + $(window).scrollLeft(),
                    i = n - $("#center").offset().top + $(window).scrollTop(),
                    s = -a > 0 ? 0 : a,
                    r = -i > 0 ? 0 : i;
                Î».acceleration_updates(a, i, s, r, e)
            } : $("html").mousemove(function(e) {
                var t = e.clientX - $("#center").offset().left + $(window).scrollLeft(),
                    n = e.clientY - $("#center").offset().top + $(window).scrollTop(),
                    a = -t > 0 ? -t : t,
                    i = -n > 0 ? -n : n;
                a = a / $(window).innerWidth() * 4e3, i = i / $(window).innerHeight() * 4e3, Î».acceleration_updates(t, n, a, i, e)
            })
        })
    }, Î».rebind_caf = function() {
        $(".caf").each(function() {
            "undefined" == typeof $._data($(this)[0], "events") && $(this).on("click", function(e) {
                e.preventDefault(), Î»[$(this).attr("data-func")](this)
            })
        })
    }, Î».rebind_magnific = function() {
        "undefined" != typeof $.fn.magnificPopup && $(".popup-vimeo").magnificPopup({
            type: "iframe"
        })
    }, Î».rebind_responsive_background_images = function() {
        $("[data-bgimg]").each(function() {
            var e = atob($(this).attr("data-bgimg")),
                e = replace_all(e, "'", '"'),
                t = this,
                n = JSON.parse(e);
            Î».reasses_background_images(n, t), $(window).off("resize.reasses_background_images"), $(window).on("resize.reasses_background_images", function() {
                Î».reasses_background_images(n, t)
            })
        })
    }, Î».reasses_background_images = function(e, t) {
        var n = e["default"];
        $.each(e, function(e, t) {
            e = "mobile" === e ? "(max-width: 640px)" : e, Modernizr.mq(e) && (n = t)
        }), $(t).css("background-image", 'url("' + n + '")')
    }, Î».check_for_progressive_images = function() {
        $(".progressive_image.js-not_loaded").each(function() {
            if ($(this).offset().top <= $(window).scrollTop() + 1.25 * $(window).innerHeight()) try {
                $(window).off("scroll.load_progressive_images"), $(this).removeClass("js-not_loaded");
                var e = this,
                    t = $(this).hasClass("has_zoom") ? 'data-action="zoom"' : "",
                    n = JSON.parse(atob($(".js-swap-for-picture", this).attr("data-image_info"))),
                    a, i = "";
                $.each(n, function(e, t) {
                    i += '<source srcset="' + t + '" media="' + e + '" />', a = t
                });
                var s = '<picture src="' + a + '">';
                s += i, s += '<img srcset="' + a + '" alt="â€¦" ' + t + " />", s += "</picture>", $(".js-swap-for-picture", this).replaceWith(s), $("picture img", this).bind("load", function() {
                    $(e).addClass("totally-loaded")
                }), Î».rebind_progressive_images()
            } catch (r) {
                Î».rebind_progressive_images()
            }
        })
    }, Î».rebind_progressive_images = function() {
        Î».check_for_progressive_images(), $(window).on("scroll.load_progressive_images", function() {
            Î».check_for_progressive_images()
        })
    }, Î».hide_scroll_params = {
        did_scroll: null,
        last_scroll_top: null,
        delta: null,
        navbar_height: null,
        interval: null
    }, Î».rebind_hide_navigation_on_scroll = function() {
        function e() {
            var e = $(this).scrollTop();
            Math.abs(Î».hide_scroll_params.last_scroll_top - e) <= Î».hide_scroll_params.delta || (e > Î».hide_scroll_params.last_scroll_top && e > Î».hide_scroll_params.navbar_height ? $("header").removeClass("nav-down").addClass("nav-up") : e + $(window).height() < $(document).height() && $("header").removeClass("nav-up").addClass("nav-down"), Î».hide_scroll_params.last_scroll_top = e)
        }
        $("header").removeClass("nav-up nav-down"), clearInterval(Î».hide_scroll_params.interval), Î».hide_scroll_params = {
            did_scroll: null,
            last_scroll_top: null,
            delta: null,
            navbar_height: null,
            interval: null
        }, $("body").hasClass("single-blog") ? (Î».hide_scroll_params.did_scroll, Î».hide_scroll_params.last_scroll_top = 0, Î».hide_scroll_params.delta = 5, Î».hide_scroll_params.navbar_height = $("header").outerHeight(), $(window).scroll(function(e) {
            Î».hide_scroll_params.did_scroll = !0
        }), Î».hide_scroll_params.interval = setInterval(function() {
            Î».hide_scroll_params.did_scroll && (e(), Î».hide_scroll_params.did_scroll = !1)
        }, 100)) : ($("header").removeClass("nav-up nav-down"), clearInterval(Î».hide_scroll_params.interval), Î».hide_scroll_params = {
            did_scroll: null,
            last_scroll_top: null,
            delta: null,
            navbar_height: null,
            interval: null
        })
    },
    function($) {
        var e = {
                common: {
                    init: function() {
                        Î».rebind_caf(), Î».rebind_responsive_background_images(), Î».rebind_progressive_images(), Î».mouse_and_gyro_parallax(), $(window).on("scroll", function() {
                            $(window).scrollTop() <= 45 ? $("header").removeClass("mini") : $("header").addClass("mini");
                            var e = $(window).scrollTop() / $(document).innerHeight();
                            $(".layer_1").css("transform", "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -" + 450 * e + ", 0, 1)"), $(".layer_2").css("transform", "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -" + 300 * e + ", 0, 1)"), $(".layer_3").css("transform", "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -" + 520 * e + ", 0, 1)"), $(window).innerWidth() >= 1024 && ($(".phases:nth-of-type(3n+1)").css("transform", "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -" + 3800 * e + ", 0, 1)"), $(".phases:nth-of-type(3n+2)").css("transform", "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -" + 2400 * e + ", 0, 1)"), $(".phases:nth-of-type(3n+3)").css("transform", "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -" + 1600 * e + ", 0, 1)"))
                        }), Î».toggle_navigation = function() {
                            $("body").hasClass("navigation-is-open") ? ($("body").removeClass("navigation-is-open").addClass("navigation-is-transitioning"), $("html").removeClass("navigation-is-open").addClass("navigation-is-transitioning"), Î».clean_nav_status = setTimeout(function() {
                                $("body").removeClass("navigation-is-transitioning"), $("html").removeClass("navigation-is-transitioning")
                            }, 500)) : ($("body").addClass("navigation-is-open"), $("html").addClass("navigation-is-open"))
                        }, Î».rebind_magnific()
                    },
                    finalize: function() {
                        $(".bo-nav-trigger").on("click", function(e) {
                            e.preventDefault(), Î».toggle_navigation()
                        }), $(document).on("keyup.bind_our_sidenav", function(e) {
                            27 == e.keyCode && Î».toggle_navigation()
                        }), picturefill()
                    }
                },
                home: {
                    init: function() {},
                    finalize: function() {}
                },
                about_us: {
                    init: function() {}
                }
            },
            t = {
                fire: function(t, n, a) {
                    var i, s = e;
                    n = void 0 === n ? "init" : n, i = "" !== t, i = i && s[t], i = i && "function" == typeof s[t][n], i && s[t][n](a)
                },
                loadEvents: function() {
                    t.fire("common"), $.each(document.body.className.replace(/-/g, "_").split(/\s+/), function(e, n) {
                        t.fire(n), t.fire(n, "finalize")
                    }), t.fire("common", "finalize")
                }
            };
        $(document).ready(t.loadEvents)
    }(jQuery), $(document).ready(function() {
        "function" == typeof $.fn.pjax && $(document).pjax("a.ajax", "#main", {
            maxCacheLength: 0,
            timeout: 4e3
        })
    }), $(document).on("pjax:send", function() {
        animate_loader(40), $(".dropdown-menu").removeClass("nav-opened"), $(".hamburger").hasClass("active") && $(".hamburger").click(), $(".search").hasClass("active") && $(".search").click()
    }), $(document).on("pjax:complete", function() {
        ga("send", "pageview"), fbq("track", "ViewContent"), $("meta[replace]", "head").remove(), $("meta", "#main").each(function() {
            $(this).detach().appendTo("head")
        }), $("link[replace]", "head").remove(), $("link", "#main").each(function() {
            $(this).detach().appendTo("head")
        })
    }), $(document).on("pjax:success", function() {
        animate_loader(70)
    }), $(document).on("pjax:end", function() {
        $("body").attr("class", $(".main").attr("data-theclass")), picturefill(), Î».rebind_caf(), Î».rebind_responsive_background_images(), Î».rebind_progressive_images(), Î».rebind_magnific(), animate_loader(100)
    }), $(document).on("pjax:click", function(e) {
        animate_loader(10), $(e.target).addClass("loading"), $("body").hasClass("navigation-is-open") && $(".bo-nav-trigger").click()
    }), $(document).on("pjax:timeout", function(e) {
        e.preventDefault()
    });
var animate_loader = function(e) {
    $("#loader-bar").css({
        width: e + "vw"
    }), 100 === e ? setTimeout(function() {
        $("#loader-bar").delay(750).fadeOut(250, function() {
            animate_loader(0)
        })
    }, 250) : $("#loader-bar").fadeIn(0)
};