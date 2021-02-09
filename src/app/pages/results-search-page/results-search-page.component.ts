import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sneaker } from 'src/app/class/sneaker';
import { APISneakerDatabaseService } from 'src/app/services/apisneaker-database.service';

@Component({
  selector: 'app-results-search-page',
  templateUrl: './results-search-page.component.html',
  styleUrls: ['./results-search-page.component.scss']
})
export class ResultsSearchPageComponent implements OnInit {
  name: string;
  shoe: string;
  brand: string;
  year: string;
  results = [];

  constructor(
    private readonly APISneakerDatabase: APISneakerDatabaseService,
    private readonly route: ActivatedRoute
  ) { }

  async ngOnInit(): Promise<void> {
    this.name = (this.route.snapshot.paramMap.get('name')) ? this.createQueryParam('name') : '';
    this.shoe = (this.route.snapshot.paramMap.get('shoe')) ? this.createQueryParam('shoe') : '';
    this.brand = (this.route.snapshot.paramMap.get('brand')) ? this.createQueryParam('brand') : '';
    this.year = (this.route.snapshot.paramMap.get('year')) ? this.createQueryParam('year') : '';

    this.results = await this.APISneakerDatabase.getSneakers(this.name, this.shoe, this.brand, this.year);
  }

  createQueryParam(param: string): string {
    const paramValue = this.route.snapshot.paramMap.get(param);
    if (param === paramValue) {
      return '';
    } else {
      return `&${param}=${paramValue}`;
    }
  }

}
