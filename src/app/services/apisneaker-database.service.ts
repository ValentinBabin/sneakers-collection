import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sneaker } from '../class/sneaker';

@Injectable({
  providedIn: 'root'
})
export class APISneakerDatabaseService {

  apiBaseUrl = "https://api.thesneakerdatabase.com";

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  public getSneaker(id: string): Promise<Sneaker> {
    return new Promise((resolve, reject) => {
      this.httpClient.get(`${this.apiBaseUrl}/v1/sneakers/${id}`).subscribe((data: Object[]) => {
        const sneaker: Sneaker = data['results'][0];
        return resolve(sneaker);
      }, (error: any) => {
        return reject(error);
      });
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
