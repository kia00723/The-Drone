import { Injectable,Inject } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';


  
@Injectable()
export class Resgi{

  constructor(public http: Http, @Inject('API_URL') public url: string) { 
    
  }


  saveResgi( user: any) {
    // console.log(user);
    return new Promise((resolve, reject) => {
      // let headers = new Headers({
      //   'Content-Type': 'application/x-www-form-urlencoded', 
      // });
      // let options = new RequestOptions({ headers: headers });
      let body = {
        username : user.username,
        password : user.password,
        email : user.email,
        usertype: user.usertype,
      };
      this.http.post(`${this.url}/user/register`,body)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data)
        }, err => {
          reject(err)
        });
    });
  }

  getusertype(){
    
        return new Promise((resolve, reject) => {
          
          this.http.get(`${this.url}/reference/userstype`)
            .map(res => res.json())
            .subscribe(data => {
              resolve(data)
            }, err => {
              reject(err)
            });
        });
      }
}
