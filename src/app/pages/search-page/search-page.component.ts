import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  public brands = [];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Due to fix a scroll bug at the enter
    window.scroll(0, 0);
    this.brands = this.route.snapshot.data.brands;
  }

}
