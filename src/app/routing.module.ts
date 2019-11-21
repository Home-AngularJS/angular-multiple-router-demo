import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { DefaultOutletComponent } from './outlets/default-outlet/default-outlet.component';
import { Outlet1Component } from './outlets/outlet1/outlet1.component';
import { Outlet2Component } from './outlets/outlet2/outlet2.component';
import { ProductListComponent } from './layout/product-list/product-list.component';
import { ProductDetailComponent } from './layout/product-detail/product-detail.component';
import { HomeComponent } from './layout/home/home.component';

const routes: Routes = [
  { path: '', component: DefaultOutletComponent, outlet: 'outlet' }, // устанавливаем этот компонент для маршрутизатора ПО УМОЛЧАНИЮ
  { path: '1', component: Outlet1Component, outlet: 'outlet' }, // устанавливаем этот компонент ДЛЯ ПЕРВОГО маршрутизатора
  { path: '2', component: Outlet2Component, outlet: 'outlet' }, // устанавливаем этот компонент ДЛЯ ВТОРОГО маршрутизатора
  { path: 'home', component: HomeComponent },                /*   http://localhost:4200/home   http://localhost:4200/home(outlet:1)   http://localhost:4200/home(outlet:2)   */
  { path: 'products', component: ProductListComponent },     /*   http://localhost:4200/products   http://localhost:4200/products(outlet:1)   http://localhost:4200/products(outlet:2)   */
  { path: 'product/:id', component: ProductDetailComponent } /*   http://localhost:4200/product/1   http://localhost:4200/product/1(outlet:1)   http://localhost:4200/product/1(outlet:2)   */
];
export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
