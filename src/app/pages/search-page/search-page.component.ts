import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from 'rxjs';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  brands = [];

  constructor(private readonly httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('https://api.thesneakerdatabase.com/v1/brands').subscribe(data => {
      this.brands = data['results'];
      console.log(this.brands);
      
    })
  }

}
