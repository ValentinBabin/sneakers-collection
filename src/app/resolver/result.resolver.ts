import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ActivatedRoute
} from '@angular/router';
import { Observable, of } from 'rxjs';

import { APISneakerDatabaseService } from 'src/app/services/apisneaker-database.service';

@Injectable({
  providedIn: 'root'
})
export class ResultResolver implements Resolve<boolean> {
  constructor(
    private readonly APISneakerDatabaseService: APISneakerDatabaseService
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<any> | any {
    const name = (route.paramMap.get('name')) ? this.createQueryParam('name', route) : '';
    const shoe = (route.paramMap.get('shoe')) ? this.createQueryParam('shoe', route) : '';
    const brand = (route.paramMap.get('brand')) ? this.createQueryParam('brand', route) : '';
    const year = (route.paramMap.get('releaseYear')) ? this.createQueryParam('releaseYear', route) : '';

    return this.APISneakerDatabaseService.getSneakers(name, shoe, brand, year);
  }

  private createQueryParam(param: string, route: ActivatedRouteSnapshot): string {
    const paramValue = route.paramMap.get(param);
    if (param === paramValue) {
      return '';
    } else {
      return `&${param}=${paramValue}`;
    }
  }
}
