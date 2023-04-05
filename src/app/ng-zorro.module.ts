import { NgModule } from '@angular/core';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { IconsProviderModule } from './icons-provider.module';

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
    NzFormModule,
  ],
  providers: [NzMessageService]
})
export class NgZorroModule {}
