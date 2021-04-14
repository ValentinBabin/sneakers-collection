import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  private readonly baseUrl = environment.base_url;

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  /**
   * Get all sneakers from API
   * @param api Name of API
   * @returns sneakers arrays
   */
  public getSneakers(api: string) {
    return this.httpClient.get(this.setUrlApi(api) + 'view.php').pipe(map((data: any) => {
      const sneakers: Array<Sneaker> = [];
      data.forEach((element: SneakerSQL) => {
        // Some element need to parse
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
        // After data formatted push in Sneaker array
        sneakers.push(sneaker);
      });
      return sneakers;
    }));
  }

  /**
   * Get one sneaker with id
   * @param api Name of API
   * @param id sneaker id
   * @returns Sneaker object in observable
   */
  public getSneaker(api: string, id: string): Observable<Sneaker> {
    return this.httpClient.get(this.setUrlApi(api) + 'view_one.php?sku=' + id).pipe(map((data: SneakerSQL) => {
      const sneaker = new Sneaker(
        data.sku,
        data.brand,
        data.colorway,
        data.gender,
        JSON.parse(data.media),
        data.release_date,
        parseInt(data.retail_price, 10),
        data.style_id,
        data.shoe,
        data.name,
        data.title,
        data.year,
        data.description,
        JSON.parse(data.lowest_resell_price),
        JSON.parse(data.resell_prices)
      );
      return sneaker;
    }));
  }

  /**
   * Set the full Web API url with base_url and API name
   * @param apiUrl Name of API
   * @returns the full Web API url
   */
  private setUrlApi(apiUrl: string): string {
    switch (apiUrl) {
      case WebApiService.NAME_API_WISHLIST:
        return this.baseUrl + '/api_wishlist/';
      default:
        return this.baseUrl + '/api_collection/';
    }
  }


}
