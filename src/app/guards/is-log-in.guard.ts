import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RouterService } from '../services/router.service';
import { SessionService } from '../services/session.service';

@Injectable({
  providedIn: 'root'
})
export class IsLogInGuard implements CanActivate {

  constructor(
    private readonly sessionService: SessionService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // const isLogIn = this.sessionService.getIsLogInBool();
    // const isInVisitMode = this.sessionService.getIsInVisitModeBool();
    // if (isLogIn) {
    //   return true;
    // } else {
    //   if (isInVisitMode) {
    //     if (state.url === "/collection" || state.url === "/wishlist") {
    //       return false;
    //     } else {
    //       return true;
    //     }
    //   }
    //   else {
    //     return false;
    //   }
    // };
    return true

  }

}
