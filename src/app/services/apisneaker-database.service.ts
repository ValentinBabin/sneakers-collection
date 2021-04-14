import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sneaker } from '../class/sneaker';
import { RouterService } from './router.service';

@Injectable({
  providedIn: 'root'
})
export class APISneakerDatabaseService {

  // In this service, I use the the-sneaker-database API : https://app.swaggerhub.com/apis-docs/tg4solutions/the-sneaker-database/1.0.0#/sneakers
  private readonly apiBaseUrl = "https://api.thesneakerdatabase.com";

  constructor(
    private readonly httpClient: HttpClient,
    private readonly routerService: RouterService
  ) { }

  /**
   * Method that allow get a sneaker object
   * @getSneaker
   * @param id sneaker id
   * @returns Sneaker Object in Promise
   */
  public getSneaker(id: string): Promise<Sneaker> {
    return new Promise((resolve, reject) => {
      this.httpClient.get(`${this.apiBaseUrl}/v1/sneakers/${id}`).subscribe(async (data: Object[]) => {
        const sneaker: Sneaker = data['results'][0];
        resolve(sneaker);
        // Stand by, can get price
        // const sneakerWithPrice = await this.getSneakerPrices(sneaker);
        // resolve(sneakerWithPrice);
      }, (error: any) => {
        this.routerService.navigateTo('404');
        return reject(error);
      });
    });
  }

  /**
   * Method that allow get sneakers price
   * ( additional with @getSneaker )
   * @param sneaker Sneaker Object
   * @returns Sneaker Object in Promise
   */
  private getSneakerPrices(sneaker: Sneaker): Promise<Sneaker> {
    return new Promise((resolve, reject) => {
      sneaker.description = "";
      sneaker.resellPrices = "";
      sneaker.lowestResellPrice = {};
      if (sneaker.styleId) {
        // This API using "styleId" and not the "id"
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

  /**
   * Method that allow get all brands
   * @returns All brands (string) in array
   */
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

  /**
   * Method that allow get sneakers of a brand (in limit of 100)
   * @param brandName The name of brand wanted
   * @returns Sneaker array in Promise
   */
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

  /**
   * Method that allow get sneakers by search with optional parameters
   * @param name name of sneaker
   * @param shoe shoe of sneaker
   * @param brand brand of sneaker
   * @param year release year of sneaker
   * @returns Sneaker array in Promise
   */
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
