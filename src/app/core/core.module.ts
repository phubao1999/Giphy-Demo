import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgZorroModule } from '../ng-zorro.module';
import {
  HttpErrorInterceptor,
  HttpParamsInterceptor,
} from './helpers/http-handle.interceptor';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';

@NgModule({
  declarations: [BaseLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    NgZorroModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpParamsInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
  ],
  exports: [BaseLayoutComponent],
})
export class CoreModule {}
