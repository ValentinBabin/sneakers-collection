import { Component, OnInit } from '@angular/core';
import { Sneaker } from 'src/app/class/sneaker';
import { SessionService } from 'src/app/services/session.service';
import { WebApiService } from 'src/app/services/web-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  isInVisitMode: boolean = false;
  collection: Array<Sneaker> = [];
  wishlist: Array<Sneaker> = [];

  constructor(
    private readonly sessionService: SessionService,
    private readonly webApiService: WebApiService
  ) { }

  ngOnInit(): void {
    this.isInVisitMode = this.sessionService.getIsInVisitModeBool();
    this.webApiService.getSneakers(WebApiService.NAME_API_COLLECTION).subscribe((data: Sneaker[]) => {
      this.collection = data.splice(0, 3);
    });
    this.webApiService.getSneakers(WebApiService.NAME_API_WISHLIST).subscribe((data: Sneaker[]) => {
      this.wishlist = data.splice(0, 3);
    });
  }

}
