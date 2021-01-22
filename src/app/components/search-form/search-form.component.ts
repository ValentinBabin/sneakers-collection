import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export class Hero {

  constructor(
    public name: string,
  ) {  }

}

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {

  constructor(private readonly router: Router) {}

  model = new Hero('Dr IQ');

  submitted = false;

  onSubmit() { 
    this.submitted = true; 
    this.router.navigateByUrl(`/results-search/${this.model.name}`)
  }

  newHero() {
    this.model = new Hero('');
  }

}
