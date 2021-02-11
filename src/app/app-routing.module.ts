import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsLogInGuard } from './guards/is-log-in.guard';
import { BrandPageComponent } from './pages/brand-page/brand-page.component';
import { CollectionPageComponent } from './pages/collection-page/collection-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ResultsSearchPageComponent } from './pages/results-search-page/results-search-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SneakerPageComponent } from './pages/sneaker-page/sneaker-page.component';
import { WishlistPageComponent } from './pages/wishlist-page/wishlist-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'home', component: HomePageComponent, canActivate: [IsLogInGuard] },
  { path: 'search', component: SearchPageComponent, canActivate: [IsLogInGuard] },
  { path: 'brands/:brandName', component: BrandPageComponent, canActivate: [IsLogInGuard] },
  { path: 'results-search/:name/:shoe/:brand/:releaseYear', component: ResultsSearchPageComponent, canActivate: [IsLogInGuard] },
  { path: 'sneaker/:id/:name', component: SneakerPageComponent, canActivate: [IsLogInGuard] },
  { path: 'wishlist', component: WishlistPageComponent, canActivate: [IsLogInGuard] },
  { path: 'collection', component: CollectionPageComponent, canActivate: [IsLogInGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
