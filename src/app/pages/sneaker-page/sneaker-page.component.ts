import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sneaker } from 'src/app/class/sneaker';
import { APISneakerDatabaseService } from 'src/app/services/apisneaker-database.service';
import { RouterService } from 'src/app/services/router.service';
// import puppeteer from 'puppeteer';

@Component({
  selector: 'app-sneaker-page',
  templateUrl: './sneaker-page.component.html',
  styleUrls: ['./sneaker-page.component.scss']
})
export class SneakerPageComponent implements OnInit {

  sneaker: Sneaker;
  resellPrice: string;

  constructor(
    private readonly APISneakerDatabaseService: APISneakerDatabaseService,
    private readonly route: ActivatedRoute
  ) { }

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');
    this.sneaker = await this.APISneakerDatabaseService.getSneaker(id);

    console.log(this.sneaker);
  }

}
