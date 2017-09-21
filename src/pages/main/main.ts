import { Component,ViewChild,ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ModalController,AlertController } from 'ionic-angular';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
// import { HttpModule,Http } from '@angular/http';

// import { MenuPage } from '../../pages/menu/menu';
import { MainP } from '../../providers/main/main';
import { ModalContentPage } from '../modals/model';
import { LoginPage } from "../login/login";


import {LogoutP} from '../../providers/logout/logout'

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
   providers: [MainP,Push]
 
})
export class MainPage {
  @ViewChild('click') fileInput:ElementRef;

  work :any;
  users_id_service : any;
  users_id_ranter : any;
  status:any;
  characterNum;
 

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public MainP : MainP,
    public loadingCtrl: LoadingController,
     public modalCtrl: ModalController,
     public alertCtrl1 :AlertController,
     public logout1 : LogoutP,
     public app  :App,
     public Push: Push

  ) {


  }

 presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
       spinner: 'dots'
    });
    loader.present();
    var userid = localStorage.getItem('userid');
    this.MainP.getWork(userid)
    .then((data : any) => {
         if (data.ok) {
            this.work = data.status;
         }
      loader.dismiss();
    }, (error) => {
       loader.dismiss();
    });
  }
  openModal(work) {

    let modal = this.modalCtrl.create(ModalContentPage,work);
    modal.present();
  }

  ionViewWillEnter() {
      this.presentLoading();
          let loader = this.loadingCtrl.create({
      content: "Please wait...",
       spinner: 'dots'
      });
    // loader.present();
      var push=this.Push.init({
          android: {
          senderID: '835143597576'
           },
           ios: {
       alert: 'true',
       badge: true,
       sound: 'false'
       },
     windows: {}
      });
     push.on('registration').subscribe((registration: any) => {
      //  console.log('Device registered', registration)
       let token = registration.registrationId;
    var userid = localStorage.getItem('userid');
    this.MainP.addToken(userid,token)
    .then((data : any) => { 
         if (data.ok) {
         }
      loader.dismiss();
    }, (error) => {
       loader.dismiss();
    });

    });

  }

  setColor(btn, value) {
    // console.log("sadada");
        var property = document.getElementById(btn);
        if (value == 1) {
            property.style.backgroundColor = "#ff0000"
            value = 1;
        }
        else {
            property.style.backgroundColor = "#66ff33"
            value = 0;
        }
  }

 logout(){
     let loader = this.loadingCtrl.create({
      content: "Please wait...",
       spinner: 'dots'
      });
    loader.present();
    let logout={
      userid : localStorage.getItem('userid'),
    }
    let promise;
    promise = this.logout1.doLogout(logout)
    // console.log(promise);
    promise.then((data: any) => {
      console.log(data);
      if (data.ok) {
          loader.dismiss();
        let alert = this.alertCtrl1.create({
          title: 'LOGOUT',
          // subTitle: 'ข้อมูอครบถ้วน',
          buttons: ['ok']
      });
  
      alert.present();    
        // this.navCtrl.setRoot(LoginPage);
          this.app.getRootNav().setRoot(LoginPage);
        localStorage.removeItem('userid');
        localStorage.removeItem('type');
      }
      else{
        loader.dismiss();
      }
    
    // ===================================

    
    }, (error) => {
      console.log("ข้อมูอ failed");
    
    });
      
  }

}



