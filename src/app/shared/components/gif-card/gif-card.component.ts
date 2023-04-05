import { Component, Input, TemplateRef } from '@angular/core';
import { IGif } from '../../model';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-gif-card',
  templateUrl: './gif-card.component.html',
  styleUrls: ['./gif-card.component.scss'],
})
export class GifCardComponent {
  @Input() data!: IGif;
  isVisible = false;
  isLoading = false;

  constructor(private notify: NzNotificationService) {}

  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  copyLink(url: string, template: TemplateRef<{}>): void {
    this.notify.template(template);
    navigator.clipboard.writeText(url);
  }
}
