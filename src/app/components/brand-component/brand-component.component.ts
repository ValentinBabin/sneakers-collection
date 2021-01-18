import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-brand-component',
  templateUrl: './brand-component.component.html',
  styleUrls: ['./brand-component.component.scss']
})
export class BrandComponentComponent implements OnInit {

  @Input() brand;

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

  }

  moveTo(): void{
    this.router.navigateByUrl(`/brands/${this.brand}`)
    
  }

}
