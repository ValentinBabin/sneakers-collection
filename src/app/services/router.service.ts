import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(
    private readonly router: Router
  ) { }

  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }
}
