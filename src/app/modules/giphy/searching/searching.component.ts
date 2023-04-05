import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { isNil } from 'lodash';
import {
  Observable,
  ReplaySubject,
  Subject,
  debounceTime,
  distinctUntilChanged,
  of,
  switchMap,
  takeUntil,
} from 'rxjs';
import { GiphyApiService } from 'src/app/core/services';
import { IGif, IGifTag } from 'src/app/shared/model';

@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.scss'],
})
export class SearchingComponent implements OnInit, OnDestroy {
  searching = new FormControl('');
  searchGifResults$!: Observable<IGif[]>;
  showEmpty = false;
  tags$: ReplaySubject<IGifTag[] | null> = new ReplaySubject<
    IGifTag[] | null
  >();
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
          return this.giphyApiService.getTags(val!);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe((tags) => {
        this.tags$.next(tags);
      });
  }

  fieldSelected(event: any, text: string): void {
    if (event.isUserInput) {
      this.searchGif(text);
    }
  }

  searchGif(q: string): void {
    this.giphyApiService.getSearchGif(q).subscribe();
  }

  search() {
    const searchValue = this.searching.value;
    if (!isNil(searchValue) && searchValue.length > 0) {
      this.searchGif(searchValue);
    }
  }
}
