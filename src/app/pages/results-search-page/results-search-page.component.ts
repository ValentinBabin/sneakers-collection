import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    private readonly route: ActivatedRoute,
    private readonly httpClient: HttpClient) { }

  ngOnInit(): void {
    this.name = (this.route.snapshot.paramMap.get('name')) ? this.createQueryParam('name') : '';
    this.shoe = (this.route.snapshot.paramMap.get('shoe')) ? this.createQueryParam('shoe') : '';
    this.brand = (this.route.snapshot.paramMap.get('brand')) ? this.createQueryParam('brand') : '';
    this.year = (this.route.snapshot.paramMap.get('year')) ? this.createQueryParam('year') : '';

    this.httpClient.get(`https://api.thesneakerdatabase.com/v1/sneakers?limit=100${this.name}${this.shoe}${this.brand}${this.year}`).subscribe(data => {
      // console.log(data);
      this.results = data['results'];
    })
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
