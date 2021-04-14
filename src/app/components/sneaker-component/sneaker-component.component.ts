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
  @Input() isInHomePage: boolean = false;

  constructor(private readonly routerService: RouterService) { }

  ngOnInit(): void { }

  /**
   * Call router service method to move in sneaker page
   * (using regex to "clean" url) 
   * @param id sneaker id
   * @param title title id
   */
  public moveToSneakerPage(id: string, title: string): void {
    const regex = /[()/]/g;
    title = title.replace(regex, '');
    this.routerService.navigateTo(`/sneaker/${id}/${title}`);
  }

}
