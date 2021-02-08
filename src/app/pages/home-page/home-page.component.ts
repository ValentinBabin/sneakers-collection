import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  isInVisitMode: boolean = false;

  constructor(private readonly sessionService: SessionService) { }

  ngOnInit(): void {
    this.isInVisitMode = this.sessionService.getIsInVisitModeBool();
  }

}
