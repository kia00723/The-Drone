import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
// import { LoginPage } from '../pages/login/login';
import { MenuPage } from '../pages/menu/menu';
// import { MassuserPage} from '../pages/massuser/massuser';
// import { ProfileaddPage } from '../pages/profileadd/profileadd';
// import { ProfilePage } from '../pages/profile/profile';
// import {AdddronePage} from '../pages/adddrone/adddrone';
// import { AddbookdronePage} from '../pages/addbookdrone/addbookdrone';
// import {SelectdronePage}from '../pages/selectdrone/selectdrone';
// import { AddbookdronenewPage} from '../pages/addbookdronenew/addbookdronenew';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any ;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.backgroundColorByHexString('#ca201f');
      splashScreen.hide();

      let token = localStorage.getItem('token');
      if(token) this.rootPage = HomePage;
      // =============แก้ไขหน้าแรก===============
      else this.rootPage=MenuPage;
    });
  }
}

