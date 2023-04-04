import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgZorroModule } from '../ng-zorro.module';
import { components } from './components';
import { pages } from './pages';

@NgModule({
  declarations: [pages, components],
  imports: [CommonModule, RouterModule, NgZorroModule],
  exports: [pages, components],
})
export class SharedModule {}
