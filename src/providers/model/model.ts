import { Injectable,Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ModelP {
 

  constructor(public http: Http, @Inject('API_URL') public url: string) { 
  
  }

  savePayment(drone_id:any, transactionid: any,transaction_detail_id:any,users_id_ranter:any) {

    return new Promise((resolve, reject) => {
      // let headers = new Headers({
      //   'Content-Type': 'application/x-www-form-urlencoded', 
      // });
      // let options = new RequestOptions({ headers: headers });
      let body = {
        transactionid : transactionid,
        transaction_detail_id : transaction_detail_id,
        users_id_ranter : users_id_ranter,
        drone_id : drone_id
      };
      this.http.post(`${this.url}/payment/savepayment`,body)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data)
        }, err => {
          reject(err)
        });
    });
  }

 
}
