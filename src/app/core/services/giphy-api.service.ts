import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import {
  IBaseGiphyResponse,
  IBaseResponse,
  IGif,
  IGifTag,
  IGiphyDetailsResponse,
} from 'src/app/shared/model';
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
  private readonly _searchGif$: BehaviorSubject<IGif[]> = new BehaviorSubject<
    IGif[]
  >([]);
  readonly searchGif$ = this._searchGif$.asObservable();

  constructor(private http: HttpClient) {}

  get trendingGif() {
    return this._trendingGif$.getValue();
  }

  set trendingGif(value: IGif[]) {
    this._trendingGif$.next(value);
  }

  get searchGif() {
    return this._searchGif$.getValue();
  }

  set searchGif(value: IGif[]) {
    this._searchGif$.next(value);
  }

  getTrendingGif(): Observable<IGif[]> {
    return this.http
      .get<IBaseGiphyResponse>(`${environment.giphyApi}/trending`)
      .pipe(
        map((res) => res.data),
        tap((res) => (this.trendingGif = res))
      );
  }

  getSearchGif(q: string): Observable<any> {
    return this.http
      .get<IBaseGiphyResponse>(`${environment.giphyApi}/search`, {
        params: {
          offset: 0,
          lang: 'en',
          q,
        },
      })
      .pipe(
        map((res) => res.data),
        tap((res) => (this.searchGif = res))
      );
  }

  getGifDetails(id: string): Observable<IGif> {
    return this.http
      .get<IGiphyDetailsResponse>(`${environment.giphyApi}/${id}`)
      .pipe(map((res) => res.data));
  }

  getTags(q: string): Observable<IGifTag[]> {
    return this.http
      .get<IBaseResponse<IGifTag[]>>(`${environment.giphyTags}/related/${q}`)
      .pipe(map((res) => res.data));
  }
}
