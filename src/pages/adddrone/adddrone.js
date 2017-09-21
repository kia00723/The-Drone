"use strict";

var __decorate = this && this.__decorate || function(e, r, o, t) {
    var n, a = arguments.length, d = a < 3 ? r : null === t ? t = Object.getOwnPropertyDescriptor(r, o) : t;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) d = Reflect.decorate(e, r, o, t); else for (var i = e.length - 1; i >= 0; i--) (n = e[i]) && (d = (a < 3 ? n(d) : a > 3 ? n(r, o, d) : n(r, o)) || d);
    return a > 3 && d && Object.defineProperty(r, o, d), d;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var core_1 = require("@angular/core"), ionic_angular_1 = require("ionic-angular"), AdddronePage = function() {
    function e(e, r) {
        this.navCtrl = e, this.navParams = r;
    }
    return e.prototype.ionViewDidLoad = function() {
        console.log("ionViewDidLoad AdddronePage");
    }, e = __decorate([ ionic_angular_1.IonicPage(), core_1.Component({
        selector: "page-adddrone",
        templateUrl: "adddrone.html"
    }) ], e);
}();

exports.AdddronePage = AdddronePage;