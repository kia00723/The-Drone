import { Injectable,Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SelectdroneP {

  constructor(public http: Http, @Inject('API_URL') public url: string) { 
    // console.log('Hello SelectdroneProvider Provider');
  }

  getDrone1(droneid : any) {
    
           
    return new Promise((resolve, reject) => {
      
      let body = {
        users_id : droneid.users_id,
      
      };
      // console.log(body);
      this.http.post(`${this.url}/drone/getdrone`,body)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data)
        }, err => {
          reject(err)
        });
    });
      }

        getDroneall(droneid : any) {
    
           
    return new Promise((resolve, reject) => {
      
      let body = {
        users_id : droneid.users_id,
      
      };
      // console.log(body);
      this.http.post(`${this.url}/drone/getdroneall`,body)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data)
        }, err => {
          reject(err)
        });
    });
      }
}
