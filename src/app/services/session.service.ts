import { Injectable } from '@angular/core';
import { RouterService } from './router.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private static GOOD_PASSWORD = "1234";
  private static IS_LOG_IN_FLAG = 'is_log_in';
  private static IS_IN_VISITE_MODE_FLAG = 'is_in_visit_mode';

  constructor(private readonly routerService: RouterService) { }

  public checkPassword(pwd: string): void {
    if (pwd === SessionService.GOOD_PASSWORD) {
      sessionStorage.setItem(SessionService.IS_LOG_IN_FLAG, "true");
      this.routerService.navigateTo('home');
    } else {
      sessionStorage.setItem(SessionService.IS_LOG_IN_FLAG, "false");
    }
  }

  public goInVisitMode(): void {
    sessionStorage.setItem(SessionService.IS_IN_VISITE_MODE_FLAG, "true");
    this.routerService.navigateTo('home');
  }

  public getIsLogInBool(): boolean {
    return (sessionStorage.getItem(SessionService.IS_LOG_IN_FLAG)) ? true : false;
  }

  public getIsInVisitModeBool(): boolean {
    return (sessionStorage.getItem(SessionService.IS_IN_VISITE_MODE_FLAG)) ? true : false;
  }
}
