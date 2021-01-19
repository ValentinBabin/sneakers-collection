import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(price: number, ...args: unknown[]): string {
    if (price <= 0) {
      return 'Prix inconnu';
    } else {
      return `${price} €`;
    }
  }

}
