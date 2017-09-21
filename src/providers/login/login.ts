import { Injectable,Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class LoginP {
 

  constructor(public http: Http, @Inject('API_URL') public url: string) { 
  
  }

  goLogin( user_id: any) {
    // console.log(user_id);
    return new Promise((resolve, reject) => {
      // let headers = new Headers({
      //   'Content-Type': 'application/x-www-form-urlencoded', 
      // });
      // let options = new RequestOptions({ headers: headers });
      let body = {
        username : user_id.username,
        password : user_id.password,
      };
      this.http.post(`${this.url}/user/login`,body)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data)
        }, err => {
          reject(err)
        });
    });
  }

 
}
