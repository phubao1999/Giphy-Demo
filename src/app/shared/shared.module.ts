import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { pages } from './pages';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [pages],
  imports: [CommonModule, RouterModule],
  exports: [pages],
})
export class SharedModule {}
