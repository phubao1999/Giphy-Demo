import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { UploadGifComponent } from 'src/app/shared/components';
import { GiphyApiService } from '../../services';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
})
export class BaseLayoutComponent  {
  isCollapsed = false;
  menuItems = [
    {
      name: 'Giphy',
      icon: 'file-gif',
      subs: [
        { name: 'Trending', link: '/' },
        { name: 'Favorite', link: '/favorite' },
        { name: 'Search', link: '/search' },
      ],
    },
  ];

  constructor(
    private router: Router,
    private modal: NzModalService,
    private giphy: GiphyApiService
  ) {}

  navigate(item: any): void {
    this.router.navigate([`giphy/${item}`]);
  }

  onScroll(event: any) {
    if (
      event.target.offsetHeight + event.target.scrollTop >=
      event.target.scrollHeight
    ) {
      this.giphy.scrollFlg = true;
    } else {
      this.giphy.scrollFlg = false;
    }
  }

  uploadGif(): void {
    this.modal.create({
      nzContent: UploadGifComponent,
      nzFooter: null,
    });
  }
}
