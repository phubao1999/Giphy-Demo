import { Component } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
})
export class BaseLayoutComponent {
  isCollapsed = false;
  menuItems = [
    {
      name: 'Giphy',
      icon: 'file-gif',
      subs: [
        { name: 'Trending', link: '/' },
        { name: 'Random', link: '/random' },
        { name: 'Favorite', link: '/favorite' },
      ],
    },
  ];
}
