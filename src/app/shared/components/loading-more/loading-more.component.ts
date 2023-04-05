import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-loading-more',
  templateUrl: './loading-more.component.html',
  styleUrls: ['./loading-more.component.scss'],
})
export class LoadingMoreComponent {
  loadingMore$!: Observable<boolean>;
  constructor(private loading: LoadingService) {}

  ngOnInit(): void {
    this.loadingMore$ = this.loading.loadingMore$;
  }
}
