import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationComponent } from 'ng-zorro-antd/notification';
import { UploadGifComponent } from 'src/app/shared/components';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
})
export class BaseLayoutComponent implements OnInit {
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

  constructor(private router: Router, private modal: NzModalService) {}

  ngOnInit(): void {
    // this.modal.create({
    //   nzContent: UploadGifComponent,
    //   nzFooter: null,
    // });
  }

  navigate(item: any): void {
    this.router.navigate([`giphy/${item}`]);
  }
}
