import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/core/services';
import { IGif } from 'src/app/shared/model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
})
export class FavoritesComponent implements OnInit {
  favoritesGif$!: Observable<IGif[]>;
  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.favoritesGif$ = this.localStorageService.favorites$;
  }
}
