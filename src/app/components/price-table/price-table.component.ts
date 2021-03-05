import { Component, Input, OnInit } from '@angular/core';
import { Sneaker } from 'src/app/class/sneaker';

@Component({
  selector: 'app-price-table',
  templateUrl: './price-table.component.html',
  styleUrls: ['./price-table.component.scss']
})
export class PriceTableComponent implements OnInit {

  @Input() sneaker: Sneaker;
  public resellPrices;
  private sizes = new Set([]);
  public shoeSizes;

  constructor() { }

  ngOnInit(): void {
    this.resellPrices = this.sneaker.resellPrices;
    if (this.resellPrices && this.resellPrices.goat) {
      for (var size in this.resellPrices.goat) {
        this.sizes.add(size);
      }
      this.shoeSizes = Array.from(this.sizes);
      this.shoeSizes = this.shoeSizes.sort((a, b) => a - b);
    }
  }

}
