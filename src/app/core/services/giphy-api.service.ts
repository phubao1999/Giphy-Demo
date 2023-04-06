import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, finalize, map, tap } from 'rxjs';
import { apiConfig } from 'src/app/shared/constants';
import * as _ from 'lodash';
import {
  IBaseGiphyResponse,
  IBaseResponse,
  IGif,
  IGifTag,
  IGiphyDetailsResponse,
  IMeta,
  IUploadGif,
} from 'src/app/shared/model';
import { environment } from 'src/env/environment';
import { LoadingService } from './loading.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class GiphyApiService {
  // trending gif
  private readonly _trendingGif$: BehaviorSubject<IGif[]> = new BehaviorSubject<
    IGif[]
  >([]);
  readonly trendingGif$ = this._trendingGif$.asObservable();
  // searching gif
  private readonly _searchGif$: BehaviorSubject<IGif[]> = new BehaviorSubject<
    IGif[]
  >([]);
  readonly searchGif$ = this._searchGif$.asObservable();
  // Scroll Load More Flag
  private readonly _scrollFlg$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  readonly scrollFlg$ = this._scrollFlg$.asObservable();

  private offset = 0;

  constructor(
    private http: HttpClient,
    private loadingService: LoadingService,
    private localStorageService: LocalStorageService
  ) {}

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

  get scrollFlg() {
    return this._scrollFlg$.getValue();
  }

  set scrollFlg(value: boolean) {
    this._scrollFlg$.next(value);
  }

  get listFavorites(): string[] {
    return _.map(this.localStorageService.favorites, (item) => item.id);
  }

  getTrendingGif(): Observable<IGif[]> {
    this.offset = 0;
    this.loadingService.loading = true;
    return this.http
      .get<IBaseGiphyResponse>(`${environment.giphyApi}/trending`, {
        params: {
          offset: this.offset,
        },
      })
      .pipe(
        finalize(() => (this.loadingService.loading = false)),
        map((res) => this.mapGif(res)),
        tap((res) => (this.trendingGif = res))
      );
  }

  getSearchGif(q: string): Observable<any> {
    this.offset = 0;
    this.loadingService.loading = true;
    return this.http
      .get<IBaseGiphyResponse>(`${environment.giphyApi}/search`, {
        params: {
          offset: 0,
          lang: 'en',
          q,
        },
      })
      .pipe(
        finalize(() => (this.loadingService.loading = false)),
        map((res) => this.mapGif(res)),
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

  uploadGif(body: IUploadGif): Observable<IMeta> {
    let params = this.buildParamsUploadGif(body);
    return this.http.post<IMeta>(`${environment.giphyUpload}`, null, {
      params: params,
    });
  }

  loadMoreGif(): Observable<IGif[]> {
    this.offset += apiConfig.offset;
    this.loadingService.loadingMore = true;
    return this.http
      .get<IBaseGiphyResponse>(`${environment.giphyApi}/trending`, {
        params: {
          limit: apiConfig.limit,
          offset: this.offset,
        },
      })
      .pipe(
        finalize(() => (this.loadingService.loadingMore = false)),
        map((res) => this.mapGif(res)),
        tap((res) => (this.trendingGif = [...this.trendingGif, ...res]))
      );
  }

  loadMoreSearchGif(q: string): Observable<any> {
    this.offset += apiConfig.offset;
    this.loadingService.loadingMore = true;
    return this.http
      .get<IBaseGiphyResponse>(`${environment.giphyApi}/search`, {
        params: {
          offset: this.offset,
          lang: 'en',
          q,
        },
      })
      .pipe(
        finalize(() => (this.loadingService.loadingMore = false)),
        map((res) => this.mapGif(res)),
        tap((res) => (this.searchGif = [...this.searchGif, ...res]))
      );
  }

  private mapGif(data: IBaseGiphyResponse): IGif[] {
    return data.data.map((item) => {
      if (this.listFavorites.includes(item.id)) {
        item.isFavorite = true;
      }

      return item;
    });
  }

  private buildParamsUploadGif(body: IUploadGif): HttpParams {
    let params = new HttpParams();
    if (!_.isNil(body.username)) {
      params = params.append('username', body.username);
    }
    if (!_.isNil(body.tags)) {
      params = params.append('tags', body.tags);
    }
    if (!_.isNil(body.source_image_url)) {
      params = params.append('source_image_url', body.source_image_url);
    }
    if (!_.isNil(body.file)) {
      params = params.append('file', body.file);
    }

    return params;
  }
}
