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
    private readonly APISneakerDatabaseService: APISneakerDatabaseService,
    private readonly route: ActivatedRoute
  ) { }

  async ngOnInit(): Promise<void> {
    window.scroll(0, 0);
    this.results = this.route.snapshot.data.results;
  }

}
