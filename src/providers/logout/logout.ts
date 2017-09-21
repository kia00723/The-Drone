import { Injectable,Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LogoutP {

  constructor(public http: Http, @Inject('API_URL') public url: string) { 
    
  }
  doLogout(logout : any){
    return new Promise((resolve, reject) => {
      
      let body = {
        userid : logout.userid,
    
      };
      // console.log(body);
      this.http.post(`${this.url}/user/logout`,body)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data)
        }, err => {
          reject(err)
        });
    });
  }
}
