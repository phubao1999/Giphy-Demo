import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  loading$!: Observable<boolean>;
  constructor(private loading: LoadingService) {}

  ngOnInit(): void {
    this.loading$ = this.loading.loading$;
  }
}
