import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  private history: string[] = []

  constructor(
    private readonly router: Router,
    private readonly location: Location
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects)
      }
    })
  }

  /**
   * Method that allow to navigate between page
   * @param url Url to navigate
   */
  public navigateTo(url: string): void {
    this.router.navigateByUrl(encodeURI(url));
  }

  /**
   * Method that allow navigate back with listening router event
   * (use for back button)
   */
  public navigateToBackPage(): void {
    this.history.pop();
    if (this.history.length > 0) {
      if (
        this.history[this.history.length - 1].split('/')[1] &&
        typeof this.history[this.history.length - 1].split('/')[1] === "string" &&
        this.history[this.history.length - 1].split('/')[1] === "results-search"
      ) {
        this.router.navigateByUrl('/search');
      } else {
        this.location.back();
      }
    } else {
      // When doesn't have "history" return in home
      this.router.navigateByUrl('/home');
    }
  }
}
