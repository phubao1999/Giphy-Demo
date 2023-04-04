import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  of,
  Subject,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs';
import { GiphyApiService } from 'src/app/core/services';
import { IGif } from 'src/app/shared/model';

@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.scss'],
})
export class SearchingComponent implements OnInit, OnDestroy {
  searching = new FormControl('');
  searchGifResults$!: Observable<IGif[]>;
  showEmpty = false;
  private readonly destroy$ = new Subject();

  constructor(private giphyApiService: GiphyApiService) {}

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.searchGifResults$ = this.giphyApiService.searchGif$;
    this.searching.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        switchMap((val) => {
          if (!!val && val.length === 0) {
            return of(null);
          }
          return this.giphyApiService.getSearchGif(val!);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
}
