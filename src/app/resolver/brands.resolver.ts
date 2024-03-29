import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

import { APISneakerDatabaseService } from 'src/app/services/apisneaker-database.service';

@Injectable({
  providedIn: 'root'
})
export class BrandsResolver implements Resolve<boolean> {
  constructor(
    private readonly APISneakerDatabaseService: APISneakerDatabaseService,
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<any> | any {
    return this.APISneakerDatabaseService.getBrands();
  }
}
