import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { AdminModule } from './admin/admin.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth/auth.guard';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';
import {Outlet1Component} from './outlets/outlet1/outlet1.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/superheroes', pathMatch: 'full' },
  { path: 'crisis-center', loadChildren: () => import('./crisis-center/crisis-center.module').then(mod => mod.CrisisCenterModule), data: { preload: true } },
  { path: '1', component: Outlet1Component, outlet: 'outlet' },
  { path: 'compose', component: ComposeMessageComponent, outlet: 'popup' },
  // { path: 'admin', loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule), canLoad: [AuthGuard] },
  // { path: 'admin', loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule) },
  { path: 'admin', loadChildren: () => AdminModule },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategyService,
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
