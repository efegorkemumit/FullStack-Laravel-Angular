import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs';
import { URL_SERVICE } from 'src/config/config';
import {of} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:any;
  token:any='';

  constructor(
    private http: HttpClient,
    private router: Router,


  ) { 

    this.loadStorage()
  }

  loadStorage(){
    if(localStorage.getItem("token"))
    {
      this.token= localStorage.getItem("token");
      this.user = JSON.parse(localStorage.getItem("user") ?? '');
    }
    else{
      this.token = '';
      this.user = null;
    }


  }

  login(email : string, password : string){
    let URL = URL_SERVICE + '/login';
    return this.http.post(URL, {email,password}).pipe(
      map((resp:any)=>{
        if(resp.access_token){
           return this.saveLocalStorageResponse(resp);
        }
        else{
          return resp;
        }


      }),
      catchError((err:any)=>{
        return of(err);
      })
    )
  }

  saveLocalStorageResponse(resp:any){
    if(resp.access_token && resp.user){
      localStorage.setItem("token", resp.access_token);
      localStorage.setItem("user", JSON.stringify(resp.user));
      this.user = resp.user;
      this.token = resp.access_token
      return true;

    }
    return false;

  }


  register(data:any){
    let URL = URL_SERVICE+ '/register';
    return this.http.post(URL,data);
  }



  logout(){
    this.user=null;
    this.token = '';
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(["auth/login"])

  }



}
