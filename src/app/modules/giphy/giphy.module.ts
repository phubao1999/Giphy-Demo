import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiphyRoutingModule } from './giphy-routing.module';
import { GiphyComponent } from './giphy.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [GiphyComponent],
  imports: [CommonModule, GiphyRoutingModule, SharedModule],
})
export class GiphyModule {}
