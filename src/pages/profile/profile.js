"use strict";

var __decorate = this && this.__decorate || function(e, r, o, i) {
    var t, n = arguments.length, a = n < 3 ? r : null === i ? i = Object.getOwnPropertyDescriptor(r, o) : i;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, r, o, i); else for (var l = e.length - 1; l >= 0; l--) (t = e[l]) && (a = (n < 3 ? t(a) : n > 3 ? t(r, o, a) : t(r, o)) || a);
    return n > 3 && a && Object.defineProperty(r, o, a), a;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var core_1 = require("@angular/core"), ionic_angular_1 = require("ionic-angular"), profile_1 = require("../../providers/profile/profile"), ProfilePage = function() {
    function e(e, r, o) {
        this.navCtrl = e, this.navParams = r, this.profile = o, this.province_id = [], this.nationality_id = [];
    }
    return e.prototype.updatepro = function() {
        this.navCtrl.push(Pa);
    }, e.prototype.ionViewDidLoad = function() {
        console.log("ionViewDidLoad ProfilePage");
    }, e;
}();

ProfilePage = __decorate([ ionic_angular_1.IonicPage(), core_1.Component({
    selector: "page-profile",
    templateUrl: "profile.html",
    providers: [ profile_1.Profile ]
}) ], ProfilePage), exports.ProfilePage = ProfilePage;