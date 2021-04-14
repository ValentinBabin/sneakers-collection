import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent implements OnInit {

  constructor(private readonly routerService: RouterService) { }

  ngOnInit(): void {
  }

  public moveToHome(): void {
    this.routerService.navigateTo(`/home`);
  }

}
