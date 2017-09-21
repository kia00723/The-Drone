import { Component, } from '@angular/core';
import {  NavParams,} from 'ionic-angular';
import { Platform, ViewController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
// import { HttpModule,Http } from '@angular/http';
import {ModelP} from '../../providers/model/model' ;


// import { MenuPage } from '../../pages/menu/menu';

@Component({
  templateUrl: 'modal-content.html',
  providers: [ModelP]
  
})
export class ModalContentPage {
    work;
    buttonClicked: boolean;


  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public ModelP:ModelP,
    public loadingCtrl: LoadingController) 
  {
   this.work = this.params.get('charNum');
  //  console.log(this.work);
  }
  savePayment(){
     let loader = this.loadingCtrl.create({
      content: "Please wait...",
       spinner: 'dots'
    });
    loader.present();
    let users_id_ranter = localStorage.getItem('userid')
     let promise;
     promise = this.ModelP.savePayment(this.work.drone_id,this.work.transaction_id,this.work.transaction_detail_id,users_id_ranter);
     promise.then((data: any) => {
       
       loader.dismiss();
        this.viewCtrl.dismiss();
      //  console.log(data);
    //  console.log(this.province_id);
     }, (error) => {
       loader.dismiss();
     });
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
   ionViewDidLoad() {
  
   var  dronetypr = localStorage.getItem('type');

    // console.log(dronetypr);

    if(dronetypr=='2'){
      this.buttonClicked = !this.buttonClicked;
    }
   
 
   
  }
}