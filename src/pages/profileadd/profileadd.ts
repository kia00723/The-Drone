import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController, LoadingController } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';
import {ProfileaddP} from '../../providers/profileadd/profileadd';
import { ProfileP } from'../../providers/profile/profile';
// import { MenuPage } from "../menu/menu";
@IonicPage()
@Component({
  selector: 'page-profileadd',
  templateUrl: 'profileadd.html',
  providers: [ProfileaddP,ProfileP]
})
export class ProfileaddPage {
  alertCtrl: any;
  nationality : any;
  province : any;

  province_id :[ {id : number}];
  nationality_id :[ {id : number}];
  firstname: string
  lastname: string;
  phone: string;
  address: string;
  city: string;
  postcode: string;
  passport_number;
  // pathphoto : string;
 

  constructor(public profileP : ProfileP ,public navCtrl: NavController, public navParams: NavParams, public loadingCtrl :LoadingController,public profileaddP : ProfileaddP, public alertCtrl1: AlertController,) {
    
  }


  ionViewWillEnter() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
       spinner: 'dots'
    });
    loader.present();
    let promise;
     promise = this.profileaddP.getProvince()
     promise.then((data: any) => {
        this.province = data.status;
    //  console.log(this.province_id);
     }, (error) => { 
     });


     
   var userid =localStorage.getItem('userid');

   let promise1;
    promise1 = this.profileP.getUserdetail(userid)
    // console.log(promise);
    promise1.then((data: any) => {
      if (data.ok) {
          loader.dismiss();
          this.firstname = data.status[0].firstname;
          this.lastname = data.status[0].lastname;
          this.phone = data.status[0].phone;
          this.address = data.status[0].address;
          this.city = data.status[0].city;
          this.postcode = data.status[0].postcode;
          this.passport_number = data.status[0].passport_number;
          this.province_id = data.status[0].province_id;
          this.nationality_id = data.status[0].nationality_id;
          // console.log(data.status[0].passport_number);
      }
      else{
        loader.dismiss();
      }
    
    // ===================================

    
    }, (error) => {
      // console.log("ข้อมูอ failed");
    
    });
  }

  ionViewDidEnter() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
       spinner: 'dots'
    });
    
    let promise;
     promise = this.profileaddP.getNationality()
     promise.then((data: any) => {
        this.nationality = data.status;
    //  console.log(this.nationality_id);
     }, (error) => { 
     });
  }




  savepro(){
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
       spinner: 'dots'
    });
   loader.present();
    let profile1 = {
      userid :localStorage.getItem('userid') ,
      firstname: this.firstname,
      lastname: this.lastname,
      phone: this.phone,
      address: this.address,
      city: this.city,
      province_id : this.province_id,
      nationality_id : this.nationality_id,
      postcode: this.postcode,
      passport_number : this.passport_number,

    
    };  

    let promise;
    promise = this.profileaddP.saveProfile(profile1)
    // console.log(promise);
    promise.then((data: any) => {
    
      if (data.ok) {
        let alert = this.alertCtrl1.create({
          title: 'สมัครสมาชิก',
          subTitle: 'ข้อมูอครบถ้วน',
          buttons: ['ok']
      });
      alert.present();    
      loader.dismiss();
      this.navCtrl.setRoot(ProfilePage);
        // this.navCtrl.push(MenuPage);  
      }
      else{
        loader.dismiss();
      }
    
    // ===================================

    
    }, (error) => {
      loader.dismiss();
      // console.log("ข้อมูอ failed");
    
    });
      
  }

  cancel(){
 
    this.navCtrl.setRoot(ProfilePage);
  }


}
