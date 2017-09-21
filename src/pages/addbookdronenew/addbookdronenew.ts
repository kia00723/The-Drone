import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, Platform, ViewController ,AlertController,LoadingController} from 'ionic-angular';


import { MassuserPage}from '../massuser/massuser'
import { MenuPage} from '../menu/menu';
import {AddbookdronenewP} from '../../providers/addbookdronenew/addbookdronenew'
@IonicPage()
@Component({
  selector: 'page-addbookdronenew',
  templateUrl: 'addbookdronenew.html',
  providers : [AddbookdronenewP]
})
export class AddbookdronenewPage {
  value = new Array;
  key1: string;
  data1: any;
  area_size: string;
  name_plant: string;
  size_plants: string;
  date: string;
  price: string;
  address: string;
  drone_id: string;
  user_id_rentar: string;
  data = new Array;
  bookp : any;
  p = 0;
  paymentchanalp :number;
  payment_chanal_id :number;
  amount : number ; 
  month: Date;
  detail : any ;
  date1: Date;
  key = new Array;
  public event = {
    month: '2017-01-01',
  }

  constructor(public navCtrl: NavController,public params: NavParams, public platform: Platform,
    public viewCtrl: ViewController, public modalCtrl: ModalController ,public alertCtrl : AlertController,
  public loadingCtrl : LoadingController ,public addbookdronenewP : AddbookdronenewP)
    {
      this.user_id_rentar = this.params.get('user_id_rentar');
      this.drone_id = this.params.get('drone_id');
      this.price = this.params.get('price');
      this.address = this.params.get('address') ;
      this.area_size = this.params.get('area_size');
      this.name_plant = this.params.get('name_plant');
      this.size_plants =this.params.get('size_plants');
      this.date =this.params.get('date') ;
     
      
  }

  
  ionViewDidEnter(){
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
       spinner: 'dots'
    });
    loader.present();
    let promise;
     promise = this.addbookdronenewP. getpaymentchanalp()
     promise.then((data: any) => {
      loader.dismiss();
      this.paymentchanalp = data.status;
    //  console.log(this.paymentchanalp);
     }, (error) => { 
     });
  }


  ionViewDidLoad(){
    var i = this.drone_id ;
    if (i !== i) {;
      // console.log("id ซ้ำกัน");
        }
        else{
           let book = { 
            users_id_ranter : this.params.get('user_id_rentar'),
            drones_id :       this.params.get('drone_id'),
            price :          this.params.get('price'),
            adress :        this.address,
            area_size :      this.area_size,
            name_plants :     this.name_plant,
            size_plants :    this.size_plants,
            date :           this.date ,
          }
          
         sessionStorage.setItem('book'+[this.drone_id],JSON.stringify(book));
        }
        var a = [];

        for(var x =0; x < sessionStorage.length; x++){
          this.data[x] = sessionStorage.getItem(sessionStorage.key(x));   
          this.key1 = sessionStorage.key(x);
        var b = JSON.parse(this.value[x] = sessionStorage.getItem(this.key1));
           this.key[x] = this.key1 ;
          a.push(b);
          this.p =this.p+ a[x].price;
          
  //  console.log( this.key[x]);
    
    } 
    
  }
  ionViewWillEnter(){
    
  }

  remodeBook(){
    sessionStorage.removeItem(this.key1);
    // console.log("kokokoko");
  }

  AddBook(){ 
  let modal = this.modalCtrl.create(MassuserPage);
  modal.present();
}
 

  saveAddBook(){

    let loader = this.loadingCtrl.create({
             content: "Please wait...",
              spinner: 'dots'
           });
           loader.present();

        
    var a = [];
          for(var x =0; x < sessionStorage.length; x++){
            this.data[x] = sessionStorage.getItem(sessionStorage.key(x));   
            this.key1 = sessionStorage.key(x);
          var b = JSON.parse(this.value[x] = sessionStorage.getItem(this.key1));
            
            a.push(b);
    //  console.log(a[x].price);

       } 
     

  let all = {
    payment_chanal_id : this.payment_chanal_id ,
    date1 :this.month ,
    amount : this.p ,
    a:a,
    }


 let promise;
 promise = this.addbookdronenewP.saveAddBook1(all);
 promise.then((data: any) => {
  // console.log(data);
  // console.log("ข้อมูลส่งเรียบร้อย");
  if(data.ok){
    // console.log("ข้อมูลส่งได้");
    
    loader.dismiss();
     sessionStorage.clear();  
  }
  else{
     loader.dismiss();
    // console.log("ไม่มีรายชื่อDrone")
  }
 }, (error) => {
  loader.dismiss();
  //  console.log("ข้อมูลส่งไม่ได้");
 });

 this.navCtrl.push(MenuPage);
  
  }









  
}
