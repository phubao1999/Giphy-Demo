import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private readonly _loading$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  readonly loading$ = this._loading$.asObservable();

  private readonly _loadingMore$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  readonly loadingMore$ = this._loadingMore$.asObservable();

  get loading() {
    return this._loading$.getValue();
  }

  set loading(value: boolean) {
    this._loading$.next(value);
  }

  get loadingMore() {
    return this._loadingMore$.getValue();
  }

  set loadingMore(value: boolean) {
    this._loadingMore$.next(value);
  }
}
