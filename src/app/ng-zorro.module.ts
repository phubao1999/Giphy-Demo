import { NgModule } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { IconsProviderModule } from './icons-provider.module';

@NgModule({
  exports: [
    NzIconModule,
    NzNotificationModule,
    NzLayoutModule,
    NzMenuModule,
    NzInputModule,
    IconsProviderModule,
  ],
})
export class NgZorroModule {}
