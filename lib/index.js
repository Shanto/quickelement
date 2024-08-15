"use strict";
require("core-js/modules/es.symbol"), require("core-js/modules/es.symbol.description"), require("core-js/modules/es.symbol.iterator"), require("core-js/modules/es.array.from"), require("core-js/modules/es.array.iterator"), require("core-js/modules/es.array.slice"), require("core-js/modules/es.function.name"), require("core-js/modules/es.object.keys"), require("core-js/modules/es.object.to-string"), require("core-js/modules/es.regexp.to-string"), require("core-js/modules/es.string.iterator"), require("core-js/modules/web.dom-collections.iterator"), Object.defineProperty(exports, "__esModule", { value: !0 }), exports.a = exports.img = exports.span = exports.div = exports.tr = exports.td = exports.el = void 0;

function _createForOfIteratorHelper(a, b) {
    var c;
    if ("undefined" == typeof Symbol || null == a[Symbol.iterator]) {
        if (Array.isArray(a) || (c = _unsupportedIterableToArray(a)) || b && a && "number" == typeof a.length) {
            c && (a = c);
            var d = 0,
                e = function() {};
            return {
                s: e,
                n: function n() {
                    return d >= a.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: a[d++]
                    }
                },
                e: function e(a) {
                    throw a
                },
                f: e
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var f, g = !0,
        h = !1;
    return {
        s: function s() {
            c = a[Symbol.iterator]()
        },
        n: function n() {
            var a = c.next();
            return g = a.done, a
        },
        e: function e(a) {
            h = !0, f = a
        },
        f: function f() {
            try {
                g || null == c["return"] || c["return"]()
            } finally {
                if (h) throw f
            }
        }
    }
}

function _typeof(a) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
        return typeof a
    } : function(a) {
        return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
    }, _typeof(a)
}

function _toConsumableArray(a) {
    return _arrayWithoutHoles(a) || _iterableToArray(a) || _unsupportedIterableToArray(a) || _nonIterableSpread()
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _unsupportedIterableToArray(a, b) {
    if (a) {
        if ("string" == typeof a) return _arrayLikeToArray(a, b);
        var c = Object.prototype.toString.call(a).slice(8, -1);
        return "Object" === c && a.constructor && (c = a.constructor.name), "Map" === c || "Set" === c ? Array.from(a) : "Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c) ? _arrayLikeToArray(a, b) : void 0
    }
}

function _iterableToArray(a) {
    if ("undefined" != typeof Symbol && Symbol.iterator in Object(a)) return Array.from(a)
}

function _arrayWithoutHoles(a) {
    if (Array.isArray(a)) return _arrayLikeToArray(a)
}

function _arrayLikeToArray(a, b) {
    (null == b || b > a.length) && (b = a.length);
    for (var c = 0, d = Array(b); c < b; c++) d[c] = a[c];
    return d
}
var isDictionary = function(a) {
        return a.constructor == Object
    },
    el = function(a, b, c, d) {
        var e = document.createElement(a);
        const sanitize = trustedTypes.createPolicy("htmlEscapePolicy", {
            createHTML: (string) => string.replace(/</g, "&lt;"),
        });
        if (c && c.className && e.classList.add(c.className), b && "string" == typeof b && e.classList.add(b), b && Array.isArray(b)) {
            var f;
            (f = e.classList).add.apply(f, _toConsumableArray(b))
        }
        if (c && isDictionary(c))
            for (var g, h = 0, i = Object.keys(c); h < i.length; h++)(g = i[h], "className" != g) && e.setAttribute(g, c[g]);
        if (c && (Array.isArray(c) || "string" == typeof c) && (d = c), !!d)
            if ("string" == typeof d) {
                var l = document.createElement("span");
                l.innerHTML = sanitize.createHTML(d), e.appendChild(l)
            } else if ("object" == _typeof(d) && d.length) {
            var j, k = _createForOfIteratorHelper(d);
            try {
                for (k.s(); !(j = k.n()).done;) {
                    var m = j.value;
                    m && "object" == _typeof(m) && e.appendChild(m)
                }
            } catch (a) {
                k.e(a)
            } finally {
                k.f()
            }
        }
        return e
    };
exports.el = el;
var td = function(a, b, c) {
    return el("td", a, b, c)
};
exports.td = td;
var tr = function(a, b, c) {
    return el("tr", a, b, c)
};
exports.tr = tr;
var div = function(a, b, c) {
    return el("div", a, b, c)
};
exports.div = div;
var span = function(a, b, c) {
    return el("span", a, b, c)
};
exports.span = span;
var img = function(a, b, c) {
    return el("img", a, b, c)
};
exports.img = img;
var a = function(a, b, c) {
    return el("a", a, b, c)
};
exports.a = a;