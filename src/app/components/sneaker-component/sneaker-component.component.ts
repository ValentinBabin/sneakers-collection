import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sneaker-component',
  templateUrl: './sneaker-component.component.html',
  styleUrls: ['./sneaker-component.component.scss']
})
export class SneakerComponentComponent implements OnInit {

  @Input() sneaker;

  constructor() { }

  ngOnInit(): void {
  }

}
