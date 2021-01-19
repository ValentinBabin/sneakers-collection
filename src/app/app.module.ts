import { BrowserModule } from '@angular/platform-browser';
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

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchPageComponent,
    BrandPageComponent,
    BrandComponentComponent,
    SneakerComponentComponent,
    PricePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
