import { Injectable,Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AdddroneProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AdddroneP {

  
  constructor(public http: Http, @Inject('API_URL') public url: string) { 

  }
      saveDro(drone : any)
    {
      return new Promise((resolve, reject) => {
        
        let body = {
         users_id : drone.users_id,
         name: drone.name,
         size: drone.size,
         price : drone.price,
        };
        // console.log(body);
        this.http.post(`${this.url}/drone/add`,body)
          .map(res => res.json())
          .subscribe(data => {
            resolve(data)
          }, err => {
            reject(err)
          });
      });
    }
        

    }

