import { Injectable } from '@angular/core';
import { find, findIndex, isNil } from 'lodash';
import { BehaviorSubject } from 'rxjs';
import { Action, LocalStorage } from 'src/app/shared/constants';
import { IGif } from 'src/app/shared/model';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly _favorites$: BehaviorSubject<IGif[]> = new BehaviorSubject<
    IGif[]
  >([]);
  readonly favorites$ = this._favorites$.asObservable();

  constructor() {
    this.favorites = this.getItem(LocalStorage.favorites);
  }

  get favorites() {
    return this._favorites$.getValue();
  }

  set favorites(value: IGif[]) {
    this._favorites$.next(value);
  }

  getItem(key: string): any {
    const item = localStorage.getItem(key);
    return JSON.parse(item!);
  }

  saveState(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  updateFavoriteList(data: IGif, action: Action): void {
    const favorites = this.getItem(LocalStorage.favorites) as IGif[];
    if (action === Action.add) {
      if (isNil(favorites)) {
        this.saveState(LocalStorage.favorites, [data]);
        this.favorites = [data];
      } else {
        if (isNil(find(favorites, (item) => item.id === data.id))) {
          this.saveState(LocalStorage.favorites, [...favorites, data]);
          this.favorites = [...favorites, data];
        }
      }
    } else {
      const index = findIndex(favorites, (item) => item.id === data.id);
      if (index > -1) {
        favorites.splice(index, 1);
        this.saveState(LocalStorage.favorites, [...favorites]);
        this.favorites = [...favorites];
      }
    }
  }
}
