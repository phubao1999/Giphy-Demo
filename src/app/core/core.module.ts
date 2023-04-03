import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { IconsProviderModule } from '../icons-provider.module';

@NgModule({
  declarations: [BaseLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    NzLayoutModule,
    NzMenuModule,
    IconsProviderModule,
  ],
  exports: [BaseLayoutComponent],
})
export class CoreModule {}
