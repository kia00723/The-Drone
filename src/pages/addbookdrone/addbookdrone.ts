import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, Platform, ViewController,LoadingController } from 'ionic-angular';

import {MassuserPage } from '../massuser/massuser'
import { AddbookdronenewPage}from '../addbookdronenew/addbookdronenew'
@IonicPage()
@Component({
  selector: 'page-addbookdrone',
  templateUrl: 'addbookdrone.html',
})
export class AddbookdronePage {
  book = [];
  id ;
  user_id_rentar : string;
  drone_id : number ;
  price : number ; 
  address : string;
  area_size : string ;
  name_plant : number;
  size_plants : string;
  month : Date;
  constructor(public navCtrl: NavController,public params: NavParams, public platform: Platform,
        public viewCtrl: ViewController, public modalCtrl: ModalController,public loadingCtrl :LoadingController,)
        {
     this.user_id_rentar = this.params.get('users_id');
     this.drone_id = this.params.get('drones_detail_id');
     this.price = this.params.get('price');
      
        }
 
        

saveAddBook(){
  let loader = this.loadingCtrl.create({
    content: "Please wait...",
     spinner: 'dots'
  });
  let book = { 
    user_id_rentar : this.params.get('users_id'),
    drone_id :       this.params.get('drones_detail_id'),
    price :          this.params.get('price'),
    address :        this.address,
    area_size :      this.area_size,
    name_plant :     this.name_plant,
    size_plants :    this.size_plants,
    date :           this.month ,
  }
  loader.dismiss();
  this.navCtrl.push(AddbookdronenewPage,book);
 
}

}
