import { Injectable,Inject } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class ProfileaddP {

  
  constructor(public http: Http, @Inject('API_URL') public url: string) { 
    
  }
// ========================get valur=============================================

  getNationality() {

    return new Promise((resolve, reject) => {
      
      this.http.get(`${this.url}/reference/nationality`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data)
        }, err => {
          reject(err)
        });
    });
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
// =====================================================================
  saveProfile( profile1: any) {
        
        return new Promise((resolve, reject) => {
          this.http.post(`${this.url}/user/updateuser`,profile1)
            .map(res => res.json())
            .subscribe(data => {
              resolve(data)
            }, err => {
              reject(err)
            });
        });
      }








}
