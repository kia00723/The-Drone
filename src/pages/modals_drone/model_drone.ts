import { Component, } from '@angular/core';
import {  NavParams,} from 'ionic-angular';
import { Platform, ViewController } from 'ionic-angular';
import { LoadingController, ModalController } from 'ionic-angular';
// import { HttpModule,Http } from '@angular/http';
// import {ModelP} from '../../providers/model/model' ;
import {Drone_fixPage } from '../drone_fix/drone_fix';


// import { MenuPage } from '../../pages/menu/menu';

@Component({
  templateUrl: 'modal_drone.html',
  providers: [],
  
})
export class ModaldronePage {
    work;
    buttonClicked: boolean;


  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    // public ModelP:ModelP,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController) 
  {
   this.work = this.params.get('charNum');
  //  console.log(this.work);
  }
  modifydrone(work){

    let modal = this.modalCtrl.create(Drone_fixPage,this.work);
    modal.present();
  
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }


   ionViewDidLoad() {
  
  //  console.log(this.work)
   var  dronetypr = localStorage.getItem('type');

    // console.log(dronetypr);

    if(dronetypr=='2'){
      this.buttonClicked = !this.buttonClicked;
    }
   
 
   
  }
}