import { Injectable,Inject} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ProfileP {

  constructor(public http: Http,@Inject('API_URL') public url: string) {
    // console.log('Hello ProfileProvider Provider');
  }



  getUserdetail(user_id){
  	return new Promise((resolve, reject) => {
      
      let body = {
        usersid :  user_id
      
      };
      // console.log(body);
      this.http.post(`${this.url}/user/getuserdetail`,body)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data)
        }, err => {
          reject(err)
        });
    });
      }
}


