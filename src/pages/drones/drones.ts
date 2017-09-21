import { Component, } from '@angular/core';
import {  NavParams,} from 'ionic-angular';
import { Platform, ViewController,NavController,ModalController} from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
// import { HttpModule,Http } from '@angular/http';
// import {ModelP} from '../../providers/model/model' ;


// import { MenuPage } from '../../pages/menu/menu';
import {AdddronePage} from '../adddrone/adddrone';
import {SelectdroneP} from '../../providers/selectdrone/selectdrone';
import { ModaldronePage } from '../modals_drone/model_drone';

@Component({
  templateUrl: 'drones.html',
  providers: [SelectdroneP]
  
})
export class DronesPage {
    work;
    buttonClicked: boolean;


  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public loadingCtrl: LoadingController,
    public navCtrl : NavController,
    public modalCtrl: ModalController,
    public SelectdroneP : SelectdroneP) 
  {1
  }
   adddrone(){
    this.navCtrl.push(AdddronePage);
  }

   presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
       spinner: 'dots'
    });
    loader.present();
    var userid = localStorage.getItem('userid');
    let user= {
      users_id : userid
    }
    this.SelectdroneP.getDroneall(user)
    .then((data : any) => { 
       if (data.ok) {
            this.work = data.status;
         }
       loader.dismiss();

    }, (error) => {
       loader.dismiss();
    });
  }
  ionViewWillEnter() {
      this.presentLoading();
  }

  openModal(work) {
    
        let modal = this.modalCtrl.create(ModaldronePage,work);
        modal.present();
      }
 
}