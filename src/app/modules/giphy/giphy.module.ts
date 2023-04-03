import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiphyRoutingModule } from './giphy-routing.module';
import { GiphyComponent } from './giphy.component';

@NgModule({
  declarations: [GiphyComponent],
  imports: [CommonModule, GiphyRoutingModule],
})
export class GiphyModule {}
