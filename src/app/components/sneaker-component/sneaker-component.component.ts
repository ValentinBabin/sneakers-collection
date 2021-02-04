import { Component, Input, OnInit } from '@angular/core';
import { Sneaker } from 'src/app/class/sneaker';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-sneaker-component',
  templateUrl: './sneaker-component.component.html',
  styleUrls: ['./sneaker-component.component.scss']
})
export class SneakerComponentComponent implements OnInit {

  @Input() sneaker: Sneaker;

  constructor(private readonly routerService: RouterService) { }

  ngOnInit(): void {
  }

  public moveToSneakerPage(id, title): void {
    this.routerService.navigateTo(`/sneaker/${id}/${title}`);
  }

}
