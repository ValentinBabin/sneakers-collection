import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { BrandPageComponent } from './pages/brand-page/brand-page.component';
import { BrandComponentComponent } from './components/brand-component/brand-component.component';
import { SneakerComponentComponent } from './components/sneaker-component/sneaker-component.component';
import { PricePipe } from './pipes/price.pipe';
import { ResultsSearchPageComponent } from './pages/results-search-page/results-search-page.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { FormsModule } from '@angular/forms';
import { SneakerPageComponent } from './pages/sneaker-page/sneaker-page.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { WishlistPageComponent } from './pages/wishlist-page/wishlist-page.component';
import { CollectionPageComponent } from './pages/collection-page/collection-page.component';
import { PriceTableComponent } from './components/price-table/price-table.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchPageComponent,
    BrandPageComponent,
    BrandComponentComponent,
    SneakerComponentComponent,
    PricePipe,
    ResultsSearchPageComponent,
    SearchFormComponent,
    SneakerPageComponent,
    BackButtonComponent,
    WishlistPageComponent,
    CollectionPageComponent,
    PriceTableComponent,
    FooterComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
