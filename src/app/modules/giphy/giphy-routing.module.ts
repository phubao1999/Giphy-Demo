import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchingComponent } from './searching/searching.component';
import { TrendingComponent } from './trending/trending.component';

const routes: Routes = [
  { path: '', component: TrendingComponent },
  { path: 'search', component: SearchingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiphyRoutingModule {}
