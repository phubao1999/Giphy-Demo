import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { IconsProviderModule } from './icons-provider.module';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
  exports: [
    NzIconModule,
    NzNotificationModule,
    NzLayoutModule,
    NzMenuModule,
    NzInputModule,
    IconsProviderModule,
    NzButtonModule,
    NzModalModule,
  ],
})
export class NgZorroModule {}
