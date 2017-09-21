"use strict";

var __decorate = this && this.__decorate || function(e, t, r, s) {
    var i, o = arguments.length, n = o < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, r) : s;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, r, s); else for (var l = e.length - 1; l >= 0; l--) (i = e[l]) && (n = (o < 3 ? i(n) : o > 3 ? i(t, r, n) : i(t, r)) || n);
    return o > 3 && n && Object.defineProperty(t, r, n), n;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var core_1 = require("@angular/core"), ionic_angular_1 = require("ionic-angular"), login_1 = require("../login/login"), resgi_1 = require("../../providers/resgi/resgi"), RegisterPage = function() {
    function e(e, t, r, s, i) {
        this.navCtrl = e, this.navParams = t, this.resgi = r, this.alertCtrl = s, this.toastCtrl = i;
    }
    return e.prototype.ionViewDidEnter = function() {
        var e = this;
        this.resgi.getusertype().then(function(t) {
            e.usertype = t.status, console.log(e.usertype);
        }, function(e) {});
    }, e.prototype.repass = function(e) {
        this.re_password == this.password ? (document.getElementById("hidden").style.display = "none", 
        console.log("Password OK")) : document.getElementById("hidden").style.display = "block";
    }, e.prototype.va_email = function(e) {
        var t = /^.+@.+\..{2,3}$/, r = this.email;
        return console.log(r), t.test(r) ? (document.getElementById("hidden1").style.display = "none", 
        console.log("Email OK"), !0) : (document.getElementById("hidden1").style.display = "block", 
        !1);
    }, e.prototype.save = function() {
        var e = this, t = {
            username: this.username,
            password: this.password,
            usertype: this.usertype,
            email: this.email
        };
        this.resgi.saveResgi(t).then(function(t) {
            if (t.ok) (r = e.alertCtrl.create({
                title: "สมัครสมาชิก",
                subTitle: "สมัครสมาชิกเสร็จสิ้น",
                buttons: [ "ok" ]
            })).present(), e.navCtrl.pop(); else {
                var r = e.alertCtrl.create({
                    title: "สมัครสมาชิก",
                    subTitle: t.status,
                    buttons: [ "ok" ]
                });
                r.present();
            }
        }, function(e) {
            console.log("Register failed");
        });
    }, e.prototype.cancel = function() {
        this.navCtrl.push(login_1.LoginPage);
    }, e = __decorate([ ionic_angular_1.IonicPage(), core_1.Component({
        selector: "page-register",
        templateUrl: "register.html",
        providers: [ resgi_1.Resgi ]
    }) ], e);
}();

exports.RegisterPage = RegisterPage;