"use strict";

var __decorate = this && this.__decorate || function(e, r, t, o) {
    var a, n = arguments.length, d = n < 3 ? r : null === o ? o = Object.getOwnPropertyDescriptor(r, t) : o;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) d = Reflect.decorate(e, r, t, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (d = (n < 3 ? a(d) : n > 3 ? a(r, t, d) : a(r, t)) || d);
    return n > 3 && d && Object.defineProperty(r, t, d), d;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var core_1 = require("@angular/core"), home_1 = require("../pages/home/home"), adddrone_1 = require("../pages/adddrone/adddrone"), MyApp = function() {
    function e(e, r, t) {
        var o = this;
        e.ready().then(function() {
            r.backgroundColorByHexString("#ca201f"), t.hide();
            var e = localStorage.getItem("token");
            o.rootPage = e ? home_1.HomePage : adddrone_1.AdddronePage;
        });
    }
    return e = __decorate([ core_1.Component({
        templateUrl: "app.html"
    }) ], e);
}();

exports.MyApp = MyApp;