import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    public autService: AuthService,
    public router : Router
  ){

  }

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot){
      if(!this.autService.user && !this.autService.token){
        this.router.navigate(["/auth/login"]);
        return false;

      }
      let token = this.autService.token;
      let expiracion = (JSON.parse(atob(token.split('.')[1]))).exp;
      if(Math.floor((new Date).getTime() /1000)>=expiracion){
        this.autService.logout();
        return false;

      }
      return true;


    }




}
