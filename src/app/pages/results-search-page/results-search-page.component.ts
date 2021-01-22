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
  results = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly httpClient: HttpClient) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name');

    this.httpClient.get(`https://api.thesneakerdatabase.com/v1/sneakers?limit=100&name=${this.name}0`).subscribe(data => {
      // console.log(data);
      this.results = data['results'];
    })
  }

}
