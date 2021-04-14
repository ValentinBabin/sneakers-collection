import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sneaker } from '../class/sneaker';
import { RouterService } from './router.service';

@Injectable({
  providedIn: 'root'
})
export class APISneakerDatabaseService {

  apiBaseUrl = "https://api.thesneakerdatabase.com";

  constructor(
    private readonly httpClient: HttpClient,
    private readonly routerService: RouterService
  ) { }

  public getSneaker(id: string): Promise<Sneaker> {
    return new Promise((resolve, reject) => {
      this.httpClient.get(`${this.apiBaseUrl}/v1/sneakers/${id}`).subscribe(async (data: Object[]) => {
        const sneaker: Sneaker = data['results'][0];
        resolve(sneaker);
        // const sneakerWithPrice = await this.getSneakerPrices(sneaker);
        // resolve(sneakerWithPrice);
      }, (error: any) => {
        this.routerService.navigateTo('404');
        return reject(error);
      });
    });
  }

  private getSneakerPrices(sneaker: Sneaker): Promise<Sneaker> {
    return new Promise((resolve, reject) => {
      sneaker.description = "";
      sneaker.resellPrices = "";
      sneaker.lowestResellPrice = {};
      if (sneaker.styleId) {
        this.httpClient.get(`https://sneaks-api.azurewebsites.net/id/${sneaker.styleId}/prices`).subscribe((data: Sneaker) => {
          sneaker.description = (data.description) ? data.description : "";
          sneaker.resellPrices = (data.resellPrices) ? data.resellPrices : "";
          sneaker.lowestResellPrice = (data.lowestResellPrice) ? data.lowestResellPrice : {};
          return resolve(sneaker);
        }, (error: any) => {
          return reject(error);
        });
      } else {
        resolve(sneaker);
      }

    });
  }

  public getBrands(): Promise<string[]> {
    return new Promise((resolve, reject) => {
      this.httpClient.get(`${this.apiBaseUrl}/v1/brands`).subscribe((data: Object[]) => {
        const brands: string[] = data['results'];
        return resolve(brands);
      }, (error: any) => {
        return reject(error);
      });
    });
  }

  public getSneakersBrand(brandName: string): Promise<Sneaker[]> {
    return new Promise((resolve, reject) => {
      this.httpClient.get(`${this.apiBaseUrl}/v1/sneakers?limit=100&brand=${brandName}`).subscribe((data: Object[]) => {
        const sneakers: Sneaker[] = data['results'];
        return resolve(sneakers);
      }, (error: any) => {
        return reject(error);
      });
    });
  }

  public getSneakers(name: string, shoe: string, brand: string, year: string): Promise<Sneaker[]> {
    return new Promise((resolve, reject) => {
      this.httpClient.get(`${this.apiBaseUrl}/v1/sneakers?limit=100${name}${shoe}${brand}${year}`).subscribe((data: Object[]) => {
        const sneakers: Sneaker[] = data['results'];
        return resolve(sneakers);
      }, (error: any) => {
        return reject(error);
      });
    });
  }
}
