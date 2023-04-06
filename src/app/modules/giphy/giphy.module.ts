import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/app/ng-zorro.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { GiphyRoutingModule } from './giphy-routing.module';
import { SearchingComponent } from './searching/searching.component';
import { TrendingComponent } from './trending/trending.component';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
  declarations: [SearchingComponent, TrendingComponent, FavoritesComponent],
  imports: [
    CommonModule,
    GiphyRoutingModule,
    SharedModule,
    NgZorroModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class GiphyModule {}
