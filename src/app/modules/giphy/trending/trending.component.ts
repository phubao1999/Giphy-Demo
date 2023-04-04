import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GiphyApiService } from 'src/app/core/services';
import { IGif } from 'src/app/shared/model';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss'],
})
export class TrendingComponent implements OnInit {
  trendingGif$!: Observable<IGif[]>;
  constructor(private giphyApiService: GiphyApiService) {}

  ngOnInit(): void {
    this.trendingGif$ = this.giphyApiService.trendingGif$;
    this.giphyApiService.getTrendingGif().subscribe();
  }
}
