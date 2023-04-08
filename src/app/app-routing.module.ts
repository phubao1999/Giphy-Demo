import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseLayoutComponent } from './core/layouts/base-layout/base-layout.component';
import { PageNotFoundComponent } from './shared/pages';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/giphy' },
  {
    path: 'giphy',
    component: BaseLayoutComponent,
    loadChildren: () =>
      import('./modules/giphy/giphy.module').then((m) => m.GiphyModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
