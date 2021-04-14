import { Component, OnInit } from '@angular/core';
import { Sneaker } from 'src/app/class/sneaker';
import { WebApiService } from 'src/app/services/web-api.service';

@Component({
  selector: 'app-collection-page',
  templateUrl: './collection-page.component.html',
  styleUrls: ['./collection-page.component.scss']
})
export class CollectionPageComponent implements OnInit {

  collection: Array<Sneaker> = [];

  constructor(
    private readonly webApiService: WebApiService
  ) { }

  ngOnInit(): void {
    this.webApiService.getSneakers(WebApiService.NAME_API_COLLECTION).subscribe((data: Sneaker[]) => {
      this.collection = data;
    });
  }

}
