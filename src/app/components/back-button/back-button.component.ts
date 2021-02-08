import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent implements OnInit {

  constructor(
    private readonly routerService: RouterService) { }

  ngOnInit(): void {
  }

  back() {
    this.routerService.navigateToBackPage();
  }

}
