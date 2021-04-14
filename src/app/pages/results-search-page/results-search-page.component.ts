import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results-search-page',
  templateUrl: './results-search-page.component.html',
  styleUrls: ['./results-search-page.component.scss']
})
export class ResultsSearchPageComponent implements OnInit {
  results = [];

  constructor(
    private readonly route: ActivatedRoute
  ) { }

  async ngOnInit(): Promise<void> {
    // Due to fix a scroll bug at the enter
    window.scroll(0, 0);
    this.results = this.route.snapshot.data.results;
  }

}
