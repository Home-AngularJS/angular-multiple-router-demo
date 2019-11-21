import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routingModule } from './routing.module';

import { AppComponent } from './app.component';
import { DefaultOutletComponent } from './outlets/default-outlet/default-outlet.component';
import { Outlet1Component } from './outlets/outlet1/outlet1.component';
import { Outlet2Component } from './outlets/outlet2/outlet2.component';
import { HomeComponent } from './layout/home/home.component';
import { ProductListComponent } from './layout/product-list/product-list.component';
import { ProductDetailComponent } from './layout/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    Outlet1Component,
    Outlet2Component,
    ProductListComponent,
    ProductDetailComponent,
    HomeComponent,
    DefaultOutletComponent
  ],
  imports: [BrowserModule, routingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
