import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-brand-page',
  templateUrl: './brand-page.component.html',
  styleUrls: ['./brand-page.component.scss']
})
export class BrandPageComponent implements OnInit {

  sneakers = [];
  public brandName: string;

  constructor(
    private readonly route: ActivatedRoute,
  ) { }

  async ngOnInit(): Promise<void> {
    this.brandName = this.route.snapshot.paramMap.get('brandName');
    // Due to fix a scroll bug at the enter
    window.scroll(0, 0);
    this.sneakers = this.route.snapshot.data.sneakers;
  }

}
