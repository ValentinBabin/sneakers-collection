import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Sneaker, SneakerSQL } from '../class/sneaker';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {

  public static NAME_API_COLLECTION = 'api_collection';
  public static NAME_API_WISHLIST = 'api_wishlist';

  //base api url
  public baseUrl = environment.base_url;

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getSneakers(api: string) {
    return this.httpClient.get(this.setUrlApi(api) + 'view.php').pipe(map((data: any) => {
      const sneakers: Array<Sneaker> = [];
      data.forEach((element: SneakerSQL) => {
        const sneaker = new Sneaker(
          element.sku,
          element.brand,
          element.colorway,
          element.gender,
          JSON.parse(element.media),
          element.release_date,
          parseInt(element.retail_price, 10),
          element.style_id,
          element.shoe,
          element.name,
          element.title,
          element.year,
          element.description,
          JSON.parse(element.lowest_resell_price),
          JSON.parse(element.resell_prices)
        );
        sneakers.push(sneaker);
      });
      return sneakers;
    }));
  }

  checkIfSneakerIsIn(sku: string, api: string) {
    return this.httpClient.get(this.setUrlApi(api) + 'view_one.php?sku=' + sku).pipe(map((data: any) => {
      return data;
    }));
  }

  createSneaker(data: object, api: string) {
    const formData = new FormData();
    for (const property in data) {
      switch (property) {
        case 'id':
          formData.set('sku', `${data[property]}`);
          break;
        case 'media':
        case 'lowestResellPrice':
        case 'resellPrices':
          formData.set(`${property}`, `${JSON.stringify(data[property])}`);
          break;
        case 'retailPrice':
        case 'year':
          formData.set(`${property}`, `${parseInt(data[property], 10)}`);
          break;
        default:
          formData.set(`${property}`, `${data[property]}`);
          break;
      }
    }

    return this.httpClient.post(this.setUrlApi(api) + 'create.php', formData, {
      headers: { "mime-type": "multipart/form-data" }
    });
  }

  updateSneakers(data: object, api: string) {
    const formData = new FormData();
    for (const property in data) {
      switch (property) {
        case 'id':
          formData.set('sku', `${data[property]}`);
          break;
        case 'media':
        case 'lowestResellPrice':
        case 'resellPrices':
          formData.set(`${property}`, `${JSON.stringify(data[property])}`);
          break;
        case 'retailPrice':
        case 'year':
          formData.set(`${property}`, `${parseInt(data[property], 10)}`);
          break;
        default:
          formData.set(`${property}`, `${data[property]}`);
          break;
      }
    }
    return this.httpClient.post(this.setUrlApi(api) + 'update.php', formData, {
      headers: { "mime-type": "multipart/form-data" }
    });
  }

  public deleteSneaker(sku: string, api: string) {
    return this.httpClient.get(this.setUrlApi(api) + 'delete.php?sku=' + sku);
  }


  private setUrlApi(apiUrl: string): string {
    switch (apiUrl) {
      case WebApiService.NAME_API_COLLECTION:
        return this.baseUrl + '/api_collection/';
        break;
      case WebApiService.NAME_API_WISHLIST:
        return this.baseUrl + '/api_wishlist/';
        break;
    }
  }


}
