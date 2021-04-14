import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandPageComponent } from './pages/brand-page/brand-page.component';
import { CollectionPageComponent } from './pages/collection-page/collection-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ResultsSearchPageComponent } from './pages/results-search-page/results-search-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SneakerPageComponent } from './pages/sneaker-page/sneaker-page.component';
import { WishlistPageComponent } from './pages/wishlist-page/wishlist-page.component';
import { BrandsResolver } from './resolver/brands.resolver';
import { ResultResolver } from './resolver/result.resolver';
import { SneakersBrandResolver } from './resolver/sneakers-brand.resolver';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'search', component: SearchPageComponent, resolve: { brands: BrandsResolver } },
  { path: 'brands/:brandName', component: BrandPageComponent, resolve: { sneakers: SneakersBrandResolver } },
  { path: 'results-search/:name/:shoe/:brand/:releaseYear', component: ResultsSearchPageComponent, resolve: { results: ResultResolver } },
  { path: 'sneaker/:id/:name', component: SneakerPageComponent },
  { path: 'wishlist', component: WishlistPageComponent },
  { path: 'collection', component: CollectionPageComponent },
  { path: '404', component: NotFoundPageComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
