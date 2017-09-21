import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
// ===============Router==============
import { MainPage} from '../main/main';
import { MassuserPage} from '../massuser/massuser';
import { ProfilePage } from '../profile/profile';
import { LogoutP } from '../../providers/logout/logout';
import { LoginPage } from '../login/login';
import { DronesPage } from '../drones/drones';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})


export class MenuPage {
  tabMain: any;
  tabMessage: any;
  tabProfile: any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,  
    public alertCtrl1: AlertController,
    public logout1 : LogoutP ) {
    this.tabMain = MainPage;
    var  dronetypr = localStorage.getItem('type');

    // console.log(dronetypr);

    if(dronetypr=='2'){
       this.tabMessage = DronesPage;
    }
    else{
      this.tabMessage = MassuserPage;
    }
   
    this.tabProfile = ProfilePage;
  }

  logout(){
    let logout={
      userid : localStorage.getItem('userid'),
    }
    let promise;
    promise = this.logout1.doLogout(logout)
    // console.log(promise);
    promise.then((data: any) => {
      // console.log(data);
      if (data.ok) {

        let alert = this.alertCtrl1.create({
          title: 'LOGOUT',
          // subTitle: 'ข้อมูอครบถ้วน',
          buttons: ['ok']
      });
      alert.present();    
        this.navCtrl.setRoot(LoginPage);  
        localStorage.removeItem('userid');
        localStorage.removeItem('type');
      }
      else{
      
      }
    
    // ===================================

    
    }, (error) => {
      // console.log("ข้อมูอ failed");
    
    });
      
  }
  // }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad MenuPage');
  }

}
