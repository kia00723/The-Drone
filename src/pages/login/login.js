"use strict";

var __decorate = this && this.__decorate || function(e, t, o, r) {
    var i, n = arguments.length, a = n < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, o) : r;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, r); else for (var l = e.length - 1; l >= 0; l--) (i = e[l]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, o, a) : i(t, o)) || a);
    return n > 3 && a && Object.defineProperty(t, o, a), a;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var core_1 = require("@angular/core"), ionic_angular_1 = require("ionic-angular"), menu_1 = require("../menu/menu"), register_1 = require("../register/register"), login_1 = require("../../providers/login/login"), LoginPage = function() {
    function e(e, t, o, r) {
        this.navCtrl = e, this.navParams = t, this.alertCtrl = o, this.loginP = r;
    }
    return e.prototype.doLogin = function() {
        var e = this, t = {
            username: this.username,
            password: this.password
        };
        this.loginP.goLogin(t).then(function(t) {
            t.ok && (e.alertCtrl.create({
                title: "Login ",
                subTitle: "Login OK",
                buttons: [ "ok" ]
            }).present(), localStorage.setItem("userid", t.userid), localStorage.setItem("type", t.type), 
            e.navCtrl.push(menu_1.MenuPage));
        }, function(t) {
            e.alertCtrl.create({
                title: "Login ",
                subTitle: "Login failed",
                buttons: [ "ok" ]
            }).present();
        });
    }, e.prototype.doRegi = function() {
        this.navCtrl.push(register_1.RegisterPage);
    }, e.prototype.ionViewDidLoad = function() {
        console.log("ionViewDidLoad LoginPage");
    }, e = __decorate([ ionic_angular_1.IonicPage(), core_1.Component({
        selector: "page-login",
        templateUrl: "login.html",
        providers: [ login_1.LoginP ]
    }) ], e);
}();

exports.LoginPage = LoginPage;