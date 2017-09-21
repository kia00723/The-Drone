"use strict";

var __decorate = this && this.__decorate || function(e, r, o, i) {
    var a, n = arguments.length, p = n < 3 ? r : null === i ? i = Object.getOwnPropertyDescriptor(r, o) : i;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) p = Reflect.decorate(e, r, o, i); else for (var s = e.length - 1; s >= 0; s--) (a = e[s]) && (p = (n < 3 ? a(p) : n > 3 ? a(r, o, p) : a(r, o)) || p);
    return n > 3 && p && Object.defineProperty(r, o, p), p;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var platform_browser_1 = require("@angular/platform-browser"), core_1 = require("@angular/core"), ionic_angular_1 = require("ionic-angular"), splash_screen_1 = require("@ionic-native/splash-screen"), status_bar_1 = require("@ionic-native/status-bar"), http_1 = require("@angular/http"), app_component_1 = require("./app.component"), home_1 = require("../pages/home/home"), login_1 = require("../pages/login/login"), main_1 = require("../pages/main/main"), menu_1 = require("../pages/menu/menu"), profile_1 = require("../pages/profile/profile"), profileadd_1 = require("../pages/profileadd/profileadd"), register_1 = require("../pages/register/register"), massuser_1 = require("../pages/massuser/massuser"), adddrone_1 = require("../pages/adddrone/adddrone"), login_2 = require("../providers/login/login"), resgi_1 = require("../providers/resgi/resgi"), profile_2 = require("../providers/profile/profile"), profileadd_2 = require("../providers/profileadd/profileadd"), logout_1 = require("../providers/logout/logout"), AppModule = function() {
    function e() {}
    return e = __decorate([ core_1.NgModule({
        declarations: [ app_component_1.MyApp, home_1.HomePage, login_1.LoginPage, main_1.MainPage, menu_1.MenuPage, profile_1.ProfilePage, register_1.RegisterPage, massuser_1.MassuserPage, profileadd_1.ProfileaddPage, adddrone_1.AdddronePage ],
        imports: [ platform_browser_1.BrowserModule, ionic_angular_1.IonicModule.forRoot(app_component_1.MyApp), http_1.HttpModule ],
        bootstrap: [ ionic_angular_1.IonicApp ],
        entryComponents: [ app_component_1.MyApp, home_1.HomePage, login_1.LoginPage, main_1.MainPage, menu_1.MenuPage, profile_1.ProfilePage, register_1.RegisterPage, massuser_1.MassuserPage, profileadd_1.ProfileaddPage, adddrone_1.AdddronePage ],
        providers: [ status_bar_1.StatusBar, splash_screen_1.SplashScreen, {
            provide: "API_URL",
            useValue: "https://apithedrone.herokuapp.com"
        }, {
            provide: core_1.ErrorHandler,
            useClass: ionic_angular_1.IonicErrorHandler
        }, login_2.LoginP, resgi_1.Resgi, profile_2.ProfileP, profileadd_2.ProfileaddP, logout_1.LogoutP ]
    }) ], e);
}();

exports.AppModule = AppModule;