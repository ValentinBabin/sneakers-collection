import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sneaker } from 'src/app/class/sneaker';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-sneaker-page',
  templateUrl: './sneaker-page.component.html',
  styleUrls: ['./sneaker-page.component.scss']
})
export class SneakerPageComponent implements OnInit {

  sneaker: Sneaker;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly route: ActivatedRoute,
    private readonly routerService: RouterService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.httpClient.get(`https://api.thesneakerdatabase.com/v1/sneakers/${id}`).subscribe(data => {
      this.sneaker = data['results'][0];
      console.log(this.sneaker);
    })
  }

  back() {
    this.routerService.navigateToBackPage();
  }
}
