import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = "https://jmm-spring-api-h2-angular.herokuapp.com/";

const httpOpt = {
  headers: new HttpHeaders({ 'Content-type' : 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(username:string, password:string):Observable<any>{
    return this.http.post(AUTH_API + 'login', {
      username,
      password
    },httpOpt);
  }


  register(username:string, password:string):Observable<any>{
    return this.http.post(AUTH_API + 'users/', {
      username,password
    }, httpOpt);
  }

}
