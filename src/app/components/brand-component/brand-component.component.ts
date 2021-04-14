import { Component, Input, OnInit } from '@angular/core';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-brand-component',
  templateUrl: './brand-component.component.html',
  styleUrls: ['./brand-component.component.scss']
})
export class BrandComponentComponent implements OnInit {

  @Input() brand;

  constructor(private readonly routerService: RouterService) { }

  ngOnInit(): void {

  }

  /**
   * Call router service method to move in the brands page
   */
  public moveTo(): void {
    this.routerService.navigateTo(`/brands/${this.brand}`);
  }

}
