import { Injectable,Inject } from '@angular/core';
import { Http,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AddbookdronenewP {

  constructor(public http: Http, @Inject('API_URL') public url: string) { 
    // console.log('Hello AddbookdronenewProvider Provider');
  }

  saveAddBook1(all : any) {
    return new Promise((resolve, reject) => {
      
      let body =
     
      {    users_id_service : localStorage.getItem('userid'),
           transaction_detail : all.a ,
           payment_chanal_id:all.payment_chanal_id,
           amount: all.amount,
           date :all.date1,
      };
      // console.log(body);
      var header = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers:header})
     
      this.http.post(`${this.url}/transaction/save`,body,options)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data)
        }, err => {
          reject(err)
        });
    });
      }


  getpaymentchanalp(){
    
        return new Promise((resolve, reject) => {
          
          this.http.get(`${this.url}/reference/paymentchanal`)
            .map(res => res.json())
            .subscribe(data => {
              resolve(data)
            }, err => {
              reject(err)
            });
        });
      }

}
