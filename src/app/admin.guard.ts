import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/Services/data.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private serv:DataService, private rt:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.serv.CurrentUser){
        if(this.serv.CurrentUser.Role===1){
          return true;
        }
        this.rt.navigate([''])
        this.serv.logout(this.serv.CurrentUser)
        return false;
      }
      this.rt.navigate([''])
      this.serv.logout(this.serv.CurrentUser)
      return false;
  }
  
}
