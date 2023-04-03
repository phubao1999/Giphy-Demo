import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GiphyApiService } from 'src/app/core/services';
import { IGif } from 'src/app/shared/model';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.scss'],
})
export class GiphyComponent implements OnInit {
  trendingGif$!: Observable<IGif[]>;
  constructor(private giphyApiService: GiphyApiService) {}

  ngOnInit(): void {
    this.trendingGif$ = this.giphyApiService.trendingGif$;
    this.giphyApiService.getTrendingGif().subscribe();
  }
}
