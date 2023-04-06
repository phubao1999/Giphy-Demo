import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { IGif } from '../../model';
import { LocalStorageService } from 'src/app/core/services';
import { Action, LocalStorage } from '../../constants';
import { set } from 'lodash';

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
    private localStorage: LocalStorageService
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

  addToFavorite($event: IGif, template: TemplateRef<{}>): void {
    if (!$event.isFavorite) {
      set($event, 'isFavorite', true);
      this.notify.template(template);
      this.localStorage.updateFavoriteList($event, Action.add);
    } else {
      [set($event, 'isFavorite', false)];
      this.notify.template(template);
      this.localStorage.updateFavoriteList($event, Action.remove);
    }
  }
}
