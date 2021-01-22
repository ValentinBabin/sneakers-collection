import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-brand-page',
  templateUrl: './brand-page.component.html',
  styleUrls: ['./brand-page.component.scss']
})
export class BrandPageComponent implements OnInit {

  sneakers = [];

  constructor(
    private readonly httpClient: HttpClient,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const brandName = this.route.snapshot.paramMap.get('id');
    // console.log(this.route.snapshot);
    
    this.httpClient.get(`https://api.thesneakerdatabase.com/v1/sneakers?limit=100&brand=${brandName}&releaseYear=2020`).subscribe(data => {
      // console.log(data);
      this.sneakers = data['results'];
    })
  }

}
