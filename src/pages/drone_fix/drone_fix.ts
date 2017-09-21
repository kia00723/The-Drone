import { Component, } from '@angular/core';
import {  NavParams,} from 'ionic-angular';
import { Platform, ViewController } from 'ionic-angular';
import { LoadingController, ModalController } from 'ionic-angular';
import {ModelP} from '../../providers/model/model' ;



@Component({
    templateUrl: 'drone_fix.html',
    providers: [ModelP]
    
  })
  export class Drone_fixPage {
      work;
      buttonClicked: boolean;
  
  
    constructor(
      public platform: Platform,
      public params: NavParams,
      public viewCtrl: ViewController,
      public ModelP:ModelP,
      public modalCtrl: ModalController,
      public loadingCtrl: LoadingController) 
    {
     this.work = this.work ;
    }
    ionViewDidload() {
        console.log(this.work);
    }
    // modifydrone(){
  
    //   // let modal = this.modalCtrl.create(ModaldronefixPage);
    //   // modal.present();
    
    // }
    // dismiss() {
    //   this.viewCtrl.dismiss();
    // }
  
   
  }
