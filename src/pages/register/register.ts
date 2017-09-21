import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController  } from 'ionic-angular';
import { AlertController, LoadingController } from 'ionic-angular';

// ===============================================
import {LoginPage} from '../login/login';

import {Resgi} from '../../providers/resgi/resgi';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [Resgi]
})
export class RegisterPage {
  usertype: any;

  username  :string;
  password : string;
  email: string;
  usertype_id :[ {id : number}];
  re_password : string;
  
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public resgi:Resgi,
     public alertCtrl: AlertController,
     public toastCtrl: ToastController,
     public loadingCtrl: LoadingController ) {
  }

// =================================function re-password======================================
ionViewDidEnter(){
  let loader = this.loadingCtrl.create({
    content: "Please wait...",
     spinner: 'dots'
  });
  loader.present();
  let promise;
   promise = this.resgi.getusertype()
   promise.then((data: any) => {
    loader.dismiss();
    this.usertype = data.status;
  //  console.log(this.usertype);
   }, (error) => { 
   });
}

  repass(hidden){
    if (this.re_password == this.password) {
      document.getElementById("hidden").style.display = 'none';
      // console.log("Password OK");
  }else {
      document.getElementById("hidden").style.display = 'block';
  }
    
  }
// ====================================ck-email===============================================

va_email(hidden1){
  var emailFilter=/^.+@.+\..{2,3}$/;
  var x = this.email;
  
  //  console.log(x);

  
  if (!(emailFilter.test(x))) {
 
    document.getElementById("hidden1").style.display = 'block';
 
  return false;
  
  }else{
    document.getElementById("hidden1").style.display = 'none';
    // console.log("Email OK");
  
  }
 
  return true;
 
  }
  
    
  // ====================================save Username&Password===============================================

  save(){
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
       spinner: 'dots'
    });
    loader.present();
    let usre = {
      username : this.username,
      password : this.password,
      usertype: this.usertype_id,
      email : this.email,
    
    };  
      let promise;
   
      promise = this.resgi.saveResgi(usre)
  
    promise.then((data: any) => {
   
      if (data.ok) {
        loader.dismiss();
        let alert = this.alertCtrl.create({
          title: 'สมัครสมาชิก',
          subTitle: 'สมัครสมาชิกเสร็จสิ้น',
          buttons: ['ok']
      });
      alert.present();    
        this.navCtrl.pop();  
      }
      else{
        loader.dismiss();
        let alert = this.alertCtrl.create({
          title: 'สมัครสมาชิก',
          subTitle:data.status,
          buttons: ['ok']
      });
      alert.present();    

      }
    
    // ===================================

    
    }, (error) => {
      // console.log("Register failed");
    
    });
  }

  cancel(){
    this.navCtrl.push(LoginPage)
  }




}
