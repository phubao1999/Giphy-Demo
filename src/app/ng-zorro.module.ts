import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { IconsProviderModule } from './icons-provider.module';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';

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
    NzToolTipModule,
    NzAutocompleteModule,
  ],
})
export class NgZorroModule {}
