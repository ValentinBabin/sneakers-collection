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
