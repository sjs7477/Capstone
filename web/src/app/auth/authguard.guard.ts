import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from "../services/login.service";

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private router:Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean{
    const user = localStorage.getItem('currentUser');
    console.log(user);
    if(user==null){
      alert("You are not allowed to view this page");
      this.router.navigateByUrl("/login");
      return false;
    }
    else{
      return true;
    }
  }

}
