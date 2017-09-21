import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController } from 'ionic-angular';
import { ModalController, AlertController } from 'ionic-angular';


import { SelectdroneP } from '../../providers/selectdrone/selectdrone';
import { AddbookdronePage } from '../addbookdrone/addbookdrone'

@IonicPage()
@Component({
  selector: 'page-selectdrone',
  templateUrl: 'selectdrone.html',
  providers:[SelectdroneP],
})
export class SelectdronePage {

  userdroneid : any;

  droneid : any;
  constructor(public navCtrl: NavController,public params: NavParams,
    public selectdroneP:SelectdroneP,public loadingCtrl :LoadingController,
    public modalCtrl: ModalController,public alertCtrl: AlertController,  ) {
  }

  ionViewDidLoad() {
    
    // console.log(this.params.get('id'));
    let loader = this.loadingCtrl.create({
             content: "Please wait...",
              spinner: 'dots'
           });
           loader.present();
    let droneid ={
      users_id : this.params.get('id'),
    }
   

 let promise;
 promise = this.selectdroneP.getDrone1(droneid);
 promise.then((data: any) => {
  // console.log("ข้อมูลส่งเรียบร้อย");
  if(data.ok){
    // console.log("ข้อมูลส่งได้");
    this.droneid = data.status
    loader.dismiss();
  }
  else{
    let alert = this.alertCtrl.create({
      title: 'แจ้งเตือน ',
      subTitle: data.status,
      buttons: ['ok']
    });
    alert.present();
    // console.log("ไม่มีรายชื่อDrone")
    loader.dismiss();
  }
 }, (error) => {
  loader.dismiss();
  //  console.log("ข้อมูลส่งไม่ได้");
 });
  }




  selectdronr(id){
    this.navCtrl.push(AddbookdronePage,id);
  }



}
