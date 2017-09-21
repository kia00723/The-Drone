"use strict";

var __decorate = this && this.__decorate || function(e, t, r, n) {
    var o, s = arguments.length, i = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n); else for (var u = e.length - 1; u >= 0; u--) (o = e[u]) && (i = (s < 3 ? o(i) : s > 3 ? o(t, r, i) : o(t, r)) || i);
    return s > 3 && i && Object.defineProperty(t, r, i), i;
}, __param = this && this.__param || function(e, t) {
    return function(r, n) {
        t(r, n, e);
    };
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var core_1 = require("@angular/core");

require("rxjs/add/operator/map");

var Resgi = function() {
    function e(e, t) {
        this.http = e, this.url = t;
    }
    return e.prototype.saveResgi = function(e) {
        var t = this;
        return console.log(e), new Promise(function(r, n) {
            var o = {
                username: e.username,
                password: e.password,
                email: e.email,
                usertype: e.usertype
            };
            t.http.post(t.url + "/user/register", o).map(function(e) {
                return e.json();
            }).subscribe(function(e) {
                r(e);
            }, function(e) {
                n(e);
            });
        });
    }, e.prototype.getusertype = function() {
        var e = this;
        return new Promise(function(t, r) {
            e.http.get(e.url + "/reference/userstype").map(function(e) {
                return e.json();
            }).subscribe(function(e) {
                t(e);
            }, function(e) {
                r(e);
            });
        });
    }, e = __decorate([ core_1.Injectable(), __param(1, core_1.Inject("API_URL")) ], e);
}();

exports.Resgi = Resgi;