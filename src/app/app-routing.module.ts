import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandPageComponent } from './pages/brand-page/brand-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ResultsSearchPageComponent } from './pages/results-search-page/results-search-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent, },
  { path: 'search', component: SearchPageComponent },
  { path: 'brands/:id', component: BrandPageComponent },
  { path: 'results-search/:name', component: ResultsSearchPageComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
