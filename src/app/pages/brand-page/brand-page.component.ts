import { HttpClient } from '@angular/common/http';
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
    private readonly httpClient: HttpClient,
    private readonly route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.brandName = this.route.snapshot.paramMap.get('brandName');

    this.httpClient.get(`https://api.thesneakerdatabase.com/v1/sneakers?limit=100&brand=${this.brandName}`).subscribe(data => {
      this.sneakers = data['results'];
    })
  }

}
