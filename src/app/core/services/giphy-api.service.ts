import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { IBaseGiphyResponse, IGif } from 'src/app/shared/model';
import { environment } from 'src/env/environment';

@Injectable({
  providedIn: 'root',
})
export class GiphyApiService {
  // trending gif
  private readonly _trendingGif$: BehaviorSubject<IGif[]> = new BehaviorSubject<
    IGif[]
  >([]);
  readonly trendingGif$ = this._trendingGif$.asObservable();

  constructor(private http: HttpClient) {}

  get trendingGif() {
    return this._trendingGif$.getValue();
  }

  set trendingGif(value: IGif[]) {
    this._trendingGif$.next(value);
  }

  getTrendingGif(): Observable<IGif[]> {
    return this.http
      .get<IBaseGiphyResponse>(`${environment.giphyApi}/trending`)
      .pipe(
        map((res) => res.data),
        tap((res) => (this.trendingGif = res))
      );
  }
}
