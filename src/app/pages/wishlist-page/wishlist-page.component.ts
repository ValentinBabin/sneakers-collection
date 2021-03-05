import { Component, OnInit } from '@angular/core';
import { Sneaker } from 'src/app/class/sneaker';
import { SessionService } from 'src/app/services/session.service';
import { WebApiService } from 'src/app/services/web-api.service';

@Component({
  selector: 'app-wishlist-page',
  templateUrl: './wishlist-page.component.html',
  styleUrls: ['./wishlist-page.component.scss']
})
export class WishlistPageComponent implements OnInit {

  wishlist: Array<Sneaker> = [];

  constructor(
    private readonly sessionService: SessionService,
    private readonly webApiService: WebApiService
  ) { }

  ngOnInit(): void {
    this.webApiService.getSneakers(WebApiService.NAME_API_WISHLIST).subscribe((data: Sneaker[]) => {
      this.wishlist = data;
    });
  }

}
