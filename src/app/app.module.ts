import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';


// =================Pages=================================
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MainPage} from '../pages/main/main';
import { MenuPage } from '../pages/menu/menu';
import { ProfilePage } from '../pages/profile/profile';
import { ProfileaddPage } from '../pages/profileadd/profileadd';
import { RegisterPage } from '../pages/register/register';
import { MassuserPage} from '../pages/massuser/massuser';
import {AdddronePage} from '../pages/adddrone/adddrone';
import {SelectdronePage}from '../pages/selectdrone/selectdrone';
import { AddbookdronePage} from '../pages/addbookdrone/addbookdrone';
import { AddbookdronenewPage}from '../pages/addbookdronenew/addbookdronenew'
import { ModalContentPage } from '../pages/modals/model';
import { DronesPage } from '../pages/drones/drones';
import {ModaldronePage}from'../pages/modals_drone/model_drone';
import {Drone_fixPage}from'../pages/drone_fix/drone_fix';
// ================Provider===============================
import { MainP } from '../providers/main/main';
import { ModelP} from '../providers/model/model';
import { LoginP } from '../providers/login/login';
import { Resgi } from '../providers/resgi/resgi';
import { ProfileP } from '../providers/profile/profile';
import { ProfileaddP } from '../providers/profileadd/profileadd';
import { LogoutP } from '../providers/logout/logout';
import { AdddroneP } from '../providers/adddrone/adddrone';
import { MassuserP } from '../providers/massuser/massuser';
import { SelectdroneP } from '../providers/selectdrone/selectdrone';
import { AddbookdroneP } from '../providers/addbookdrone/addbookdrone';
import { AddbookdronenewP } from '../providers/addbookdronenew/addbookdronenew';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    MainPage,
    MenuPage,
    ProfilePage ,
    RegisterPage,
    MassuserPage,
    ProfileaddPage ,
    AdddronePage,
    SelectdronePage,
    AddbookdronePage,
    AddbookdronenewPage,
    ModalContentPage,
    DronesPage,
    ModaldronePage,
    Drone_fixPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    MainPage,
    MenuPage,
    ProfilePage ,
    RegisterPage,
    MassuserPage,
    ProfileaddPage ,
    AdddronePage,
    SelectdronePage,
    AddbookdronePage,
    AddbookdronenewPage,
    ModalContentPage,
    DronesPage,
    ModaldronePage,
    Drone_fixPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: 'API_URL',useValue:'https://apithedrone.herokuapp.com'},
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginP,
    Resgi,
    ProfileP,
    ProfileaddP,
    LogoutP,
    AdddroneP,
    MassuserP,
    SelectdroneP,
    AddbookdroneP,
    AddbookdronenewP,
    MainP,
    ModelP,
    
    
    
    
  ]
})
export class AppModule {}
