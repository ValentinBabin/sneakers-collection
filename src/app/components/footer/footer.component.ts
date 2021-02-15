import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public dateNow: number;
  pu

  constructor() { }

  ngOnInit(): void {
    this.dateNow = new Date().getFullYear();
  }

}
