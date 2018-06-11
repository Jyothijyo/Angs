import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
// import "rxjs/add/operator/map";
// import "rxjs/add/operator/toPromise";

@Injectable()
export class LoginService {

  constructor(private http: Http) { }
  login(data) {
   return  this.http.post(``, data)
   .toPromise()
   .then(res => res.json())
   .catch(err => err);
  }
}
