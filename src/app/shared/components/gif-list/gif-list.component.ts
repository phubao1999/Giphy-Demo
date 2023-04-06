import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IGif } from 'src/app/shared/model';

@Component({
  selector: 'app-gif-list',
  templateUrl: './gif-list.component.html',
  styleUrls: ['./gif-list.component.scss'],
})
export class GifListComponent {
  @Input() data!: Observable<IGif[]>;
  @Input() isFavoritePage: boolean = false;
}
