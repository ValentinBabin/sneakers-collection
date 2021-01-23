import { Component, Input, OnInit } from '@angular/core';
import { Sneaker } from 'src/app/class/sneaker';

@Component({
  selector: 'app-sneaker-component',
  templateUrl: './sneaker-component.component.html',
  styleUrls: ['./sneaker-component.component.scss']
})
export class SneakerComponentComponent implements OnInit {

  @Input() sneaker: Sneaker;

  constructor() { }

  ngOnInit(): void {
  }

}
