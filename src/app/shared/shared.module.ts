import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { components } from './components';
import { pages } from './pages';

@NgModule({
  declarations: [pages, components],
  imports: [CommonModule, RouterModule, NzIconModule],
  exports: [pages, components],
})
export class SharedModule {}
