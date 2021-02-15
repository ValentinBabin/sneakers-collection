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
    private readonly location: Location) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects)
      }
    })
  }

  public navigateTo(url: string): void {
    // console.log(encodeURI(url));
    this.router.navigateByUrl(encodeURI(url));
  }

  public navigateToBackPage(): void {
    this.history.pop();
    if (this.history.length > 0) {
      this.location.back();
    } else {
      this.router.navigateByUrl('/home');
    }
  }
}
