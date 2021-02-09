import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from 'rxjs';
import { APISneakerDatabaseService } from 'src/app/services/apisneaker-database.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  brands = [];

  constructor(
    private readonly APISneakerDatabase: APISneakerDatabaseService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.brands = await this.APISneakerDatabase.getBrands();
  }

}
