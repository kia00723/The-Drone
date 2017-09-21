import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController,LoadingController } from 'ionic-angular';

// =========================================
import { ProfilePage } from '../profile/profile';
import { AdddroneP } from '../../providers/adddrone/adddrone';
import { DronesPage } from "../drones/drones";

@IonicPage()
@Component({
  selector: 'page-adddrone',
  templateUrl: 'adddrone.html',
  providers: [AdddroneP]
})
export class AdddronePage {
  adddrone :any;

  name : string;
  size :number;
  price :number;

  constructor(public navCtrl: NavController, public navParams: NavParams,public adddroneP : AdddroneP ,public alertCtrl1: AlertController,  public loadingCtrl : LoadingController ) {
  }

  

     savedrone(){
      let loader = this.loadingCtrl.create({
        content: "Please wait...",
         spinner: 'dots'
      });
          let drone ={
            users_id :localStorage.getItem('userid'),
            name : this.name,
            size : this.size,
            price : this.price,

          }
          loader.present();
              let promise;
              promise = this.adddroneP.saveDro(drone);
              // console.log(users_id);
              promise.then((data: any) => {
                // console.log(data);
                if (data.ok) {
                  let alert = this.alertCtrl1.create({
                    title: 'สมัครDrone',
                    subTitle: 'ข้อมูอDroneครบถ้วน',
                    buttons: ['ok']
                });
                alert.present();    
                loader.dismiss();
               this.navCtrl.setRoot(DronesPage)
                }
                else{               
                  loader.dismiss();
                }
              // ===================================
              }, (error) => {
                loader.dismiss();
                // console.log("ข้อมูอDrone failed");

              });                         
  }

   cancel(){
     this.navCtrl.setRoot(DronesPage);
   }

}
