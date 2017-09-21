import { Injectable,Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MassuserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MassuserP {

  constructor(public http: Http, @Inject('API_URL') public url: string) { 
    // console.log('Hello MassuserProvider Provider');
  }

  getProvince() {
    
        return new Promise((resolve, reject) => {
          
          this.http.get(`${this.url}/reference/province`)
            .map(res => res.json())
            .subscribe(data => {
              resolve(data)
            }, err => {
              reject(err)
            });
        });
      }


      Postsearch1( search: any) {
        
        return new Promise((resolve, reject) => {
          
          let body = {
           province_id : search.province_id,
           users_types_id: search.users_types_id,

          };
          // console.log(body);
          this.http.post(`${this.url}/user/getuser`,body)
            .map(res => res.json())
            .subscribe(data => {
              resolve(data)
            }, err => {
              reject(err)
            });
        });
      
}
}
