import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from 'rxjs';
import { APISneakerDatabaseService } from 'src/app/services/apisneaker-database.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  brands = [];

  constructor(
    private readonly APISneakerDatabaseService: APISneakerDatabaseService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.brands = this.route.snapshot.data.brands;
  }

}
