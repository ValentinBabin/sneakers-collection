import { Component } from '@angular/core';
import { MediaSneaker, Sneaker } from 'src/app/class/sneaker';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {

  mediaSneaker: MediaSneaker = {
    imageUrl: '',
    smallImageUrl: '',
    thumbUrl: ''
  }
  actualYear = new Date().getUTCFullYear();
  model = new Sneaker('', '', '', '', this.mediaSneaker, '', 0, '', '', '', '', this.actualYear);
  submitted = false;

  constructor(private readonly routerService: RouterService) { }

  onSubmit() {
    this.submitted = true;
    this.model.name = (this.model.name) ? this.model.name : "name";
    this.model.shoe = (this.model.shoe) ? this.model.shoe : "shoe";
    this.model.brand = (this.model.brand) ? this.model.brand : "brand";
    this.model.year = (this.model.year) ? this.model.year : new Date().getUTCFullYear();

    this.routerService.navigateTo(`/results-search/${this.model.name}/${this.model.shoe}/${this.model.brand}/${this.model.year}`)

  }

}
