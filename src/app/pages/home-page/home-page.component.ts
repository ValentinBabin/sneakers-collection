import { Component, OnInit } from '@angular/core';
import { Sneaker } from 'src/app/class/sneaker';
import { WebApiService } from 'src/app/services/web-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public collection: Array<Sneaker> = [];
  public wishlist: Array<Sneaker> = [];

  constructor(
    private readonly webApiService: WebApiService
  ) { }

  ngOnInit(): void {
    this.webApiService.getSneakers(WebApiService.NAME_API_COLLECTION).subscribe((data: Sneaker[]) => {
      // Random sort if has more 1 items
      if (data.length > 1)
        data = data.sort(() => Math.random() - 0.5);
      this.collection = data.splice(0, 3);
    });
    this.webApiService.getSneakers(WebApiService.NAME_API_WISHLIST).subscribe((data: Sneaker[]) => {
      // Random sort if has more 1 items
      if (data.length > 1)
        data = data.sort(() => Math.random() - 0.5);
      this.wishlist = data.splice(0, 3);
    });
  }

}
