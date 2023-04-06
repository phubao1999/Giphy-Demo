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
  @Input() isFavoritePage: boolean = false;
  isVisible = false;
  isConfirmVisible = false;
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

  showConfirmModal(): void {
    this.isConfirmVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  handleConfirmCancel(): void {
    this.isConfirmVisible = false;
  }

  handleOk($event: IGif, template: TemplateRef<{}>): void {
    this.isConfirmVisible = false;
    setTimeout(() => {
      this.addToFavorite($event, template);
    }, 1000);
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
      this.localStorage.updateFavoriteList($event, Action.add);
    } else {
      [set($event, 'isFavorite', false)];
      this.localStorage.updateFavoriteList($event, Action.remove);
    }
    this.notify.template(template);
  }
}
