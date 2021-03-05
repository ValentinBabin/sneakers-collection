import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sneaker } from 'src/app/class/sneaker';
import { APISneakerDatabaseService } from 'src/app/services/apisneaker-database.service';
import { RouterService } from 'src/app/services/router.service';
import { WebApiService } from 'src/app/services/web-api.service';
// import puppeteer from 'puppeteer';

@Component({
  selector: 'app-sneaker-page',
  templateUrl: './sneaker-page.component.html',
  styleUrls: ['./sneaker-page.component.scss']
})
export class SneakerPageComponent implements OnInit {

  sneaker: Sneaker;
  resellPrice: string;
  isInCollection: boolean;
  isInWishlist: boolean;

  constructor(
    private readonly APISneakerDatabaseService: APISneakerDatabaseService,
    private readonly route: ActivatedRoute,
    private readonly webApiService: WebApiService
  ) { }

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');
    this.sneaker = await this.APISneakerDatabaseService.getSneaker(id);
    this.webApiService.checkIfSneakerIsIn(id, WebApiService.NAME_API_COLLECTION).subscribe(res => {
      this.isInCollection = (!res) ? false : true;
      // console.log(this.isInCollection);
    });
    this.webApiService.checkIfSneakerIsIn(id, WebApiService.NAME_API_WISHLIST).subscribe(res => {
      this.isInWishlist = (!res) ? false : true;
      // console.log(this.isInWishlist);
    });

    console.log(this.sneaker);

  }

  public addSneakerToCollection(): void {
    this.isInCollection = true;
    if (this.isInWishlist) {
      this.isInWishlist = false;
      this.webApiService.deleteSneaker(this.sneaker.id, WebApiService.NAME_API_WISHLIST).subscribe(data => {
        // TODO: BUG PARSING
        console.log(JSON.stringify(data));
      });
    }

    this.webApiService.createSneaker(this.sneaker, WebApiService.NAME_API_COLLECTION).subscribe(data => {
      // TODO: BUG PARSING
      console.log(JSON.stringify(data));
    });
  }

  public addSneakerToWishlist(): void {
    this.isInWishlist = true;
    this.webApiService.createSneaker(this.sneaker, WebApiService.NAME_API_WISHLIST).subscribe(data => {
      // TODO: BUG PARSING
      console.log(JSON.stringify(data));
    });
  }

  public deleteSneakerToCollection(): void {
    this.isInCollection = false;
    this.webApiService.deleteSneaker(this.sneaker.id, WebApiService.NAME_API_COLLECTION).subscribe(data => {
      // TODO: BUG PARSING
      console.log(JSON.stringify(data));
    });
  }

  public deleteSneakerToWishlist(): void {
    this.isInWishlist = false;
    this.webApiService.deleteSneaker(this.sneaker.id, WebApiService.NAME_API_WISHLIST).subscribe(data => {
      // TODO: BUG PARSING
      console.log(JSON.stringify(data));
    });
  }

}
