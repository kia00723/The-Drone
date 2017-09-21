import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';


import { ProfileP } from'../../providers/profile/profile';
import {ProfileaddPage} from '../profileadd/profileadd'
import {AdddronePage} from '../adddrone/adddrone';
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  providers: [ProfileP]
})
export class ProfilePage {
  firstname;
  lastname;
  phone;
  address;
  city;
  postcode;
  passport_number;
  email;
  constructor(public navCtrl: NavController,
              public navParams: NavParams ,
              public profileP : ProfileP,
              public loadingCtrl :LoadingController,
            ) {

  }


  updatepro(){
    this.navCtrl.push(ProfileaddPage);
  }
  adddrone(){
    this.navCtrl.push(AdddronePage);
  }


  ionViewWillEnter() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
       spinner: 'dots'
    });
    loader.present();
   var userid =localStorage.getItem('userid');

   let promise;
    promise = this.profileP.getUserdetail(userid)
    // console.log(promise);
    promise.then((data: any) => {
      if (data.ok) {
          loader.dismiss();
          this.firstname = data.status[0].firstname;
          this.lastname = data.status[0].lastname;
          this.phone = data.status[0].phone;
          this.address = data.status[0].address;
          this.city = data.status[0].city;
          this.postcode = data.status[0].postcode;
          this.passport_number = data.status[0].passport_number;
          this.email = data.status[0].email;
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
}




  // ==============End=====================
  
