import { Component, OnInit } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { GiphyApiService } from 'src/app/core/services';
import { IGif } from 'src/app/shared/model';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
})
export class TrendingComponent implements OnInit {
  trendingGif$!: Observable<IGif[]>;
  constructor(private giphyApiService: GiphyApiService) {}

  ngOnInit(): void {
    this.trendingGif$ = this.giphyApiService.trendingGif$;
    this.giphyApiService.getTrendingGif().subscribe();
    this.giphyApiService.scrollFlg$
      .pipe(
        switchMap((res) => {
          if (res) {
            return this.giphyApiService.loadMoreGif();
          } else {
            return of(null);
          }
        })
      )
      .subscribe();
  }
}
