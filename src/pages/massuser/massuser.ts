import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ModalController } from 'ionic-angular';

// ===============================================
import{MassuserP} from'../../providers/massuser/massuser';
import{SelectdronePage}from '../selectdrone/selectdrone';

@IonicPage()
@Component({
  selector: 'page-massuser',
  templateUrl: 'massuser.html',
  providers :[MassuserP]
})
export class MassuserPage {
  users_id: number;
  username_thedrone1: any;
  MassuserP: any;
  province: any;
  getdroneid : any;
  username_thedrone: string;
  users_types_id : number;
  province_id :[ {id : number}];
  userdroneid : [ {id : number}];


  constructor(public navCtrl: NavController,
    public params: NavParams ,
      public massuserP:MassuserP, 
      public loadingCtrl :LoadingController,
      public alertCtrl1: AlertController,
      public modalCtrl: ModalController ,) {
  }

 
  ionViewDidLoad() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
       spinner: 'dots'
    });
    loader.present();
      let promise;
      promise = this.massuserP.getProvince()
      promise.then((data: any) => {
        loader.dismiss();
        this.province = data.status;
      }, (error) => { 
        loader.dismiss();
      });
    }


  postsearch(){
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
       spinner: 'dots'
    });
    loader.present();
       let search = {
          province_id : this.province_id,
          users_types_id : 2,
       };  
   
       let promise;
       promise = this.massuserP.Postsearch1(search)

       promise.then((data: any) => {
       
        // console.log("ข้อมูลส่งเรียบร้อย");
        if(data.ok){
          loader.dismiss();
          this.username_thedrone = data.status;
          this.userdroneid =data.status.id
    
        }
        else{
          // console.log("ไม่มีรายชื่อผู้ให้บริการในจังหวัดนี้")
          loader.dismiss();
        }
       }, (error) => {
        loader.dismiss();
        //  console.log("ข้อมูลส่งไม่ได้");
       });
  }



  selectuser(id){
    this.users_id = id;
    this.navCtrl.push(SelectdronePage,this.users_id);
  }


}
