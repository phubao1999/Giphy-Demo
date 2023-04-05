import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
        { name: 'Favorite', link: '/favorite' },
        { name: 'Search', link: '/search' },
      ],
    },
  ];

  constructor(private router: Router) {}

  navigate(item: any): void {
    this.router.navigate([`giphy/${item}`]);
  }
}
