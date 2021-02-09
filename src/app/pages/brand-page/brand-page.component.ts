import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APISneakerDatabaseService } from 'src/app/services/apisneaker-database.service';
@Component({
  selector: 'app-brand-page',
  templateUrl: './brand-page.component.html',
  styleUrls: ['./brand-page.component.scss']
})
export class BrandPageComponent implements OnInit {

  sneakers = [];
  public brandName: string;

  constructor(
    private readonly APISneakerDatabaseService: APISneakerDatabaseService,
    private readonly route: ActivatedRoute,
  ) { }

  async ngOnInit(): Promise<void> {
    this.brandName = this.route.snapshot.paramMap.get('brandName');
    this.sneakers = await this.APISneakerDatabaseService.getSneakersBrand(this.brandName);
  }

}
