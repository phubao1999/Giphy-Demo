import {
  Component,
  Input,
  OnInit,
  TemplateRef
} from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { IGif } from '../../model';

@Component({
  selector: 'app-gif-card',
  templateUrl: './gif-card.component.html',
  styleUrls: ['./gif-card.component.scss'],
})
export class GifCardComponent implements OnInit {
  @Input() data!: IGif;
  isVisible = false;
  isLoading = false;
  randomColor!: string;

  constructor(
    private notify: NzNotificationService,
  ) {}
  ngOnInit(): void {
    this.randomColor = this.randomRgba();
  }

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

  randomRgba() {
    let o = Math.round,
      r = Math.random,
      s = 255;
    return (
      'rgba(' +
      o(r() * s) +
      ',' +
      o(r() * s) +
      ',' +
      o(r() * s) +
      ',' +
      r().toFixed(1) +
      ')'
    );
  }
}
// [ngStyle]="{background: rgb(255, 243, 92)}"
