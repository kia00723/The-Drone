import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,LoadingController } from 'ionic-angular';


import { MenuPage } from '../menu/menu';
import { RegisterPage } from '../register/register';
import { LoginP } from '../../providers/login/login'; 

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers :[LoginP]
})
export class LoginPage {
  


  username  :string;
  password : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public loginP :LoginP,public loadingCtrl: LoadingController,
  ) {
 
    
  }

  doLogin(){
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
       spinner: 'dots'
    });
    loader.present();
    let usre_id = {
      username : this.username,
      password : this.password,
    };  
        
    let promise;
    
       promise = this.loginP.goLogin(usre_id)
  
     promise.then((data: any) => {
       if (data.ok) {
        loader.dismiss();
          localStorage.setItem('userid',data.userid);
          localStorage.setItem('type',data.type);
         this.navCtrl.setRoot(MenuPage);
       }
       else{
        let alert = this.alertCtrl.create({
          title: 'Login ',
          subTitle: data.status,
          buttons: ['ok']
        });
        alert.present();
        loader.dismiss();
       }
     }, (error) => {
      loader.dismiss();
     
     });
      
     
     
  }




  doRegi(){
    this.navCtrl.push(RegisterPage)
  }



}
