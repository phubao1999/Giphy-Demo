import { Component, Input } from '@angular/core';
import { IGif } from '../../model';

@Component({
  selector: 'app-gif-card',
  templateUrl: './gif-card.component.html',
  styleUrls: ['./gif-card.component.scss'],
})
export class GifCardComponent {
  @Input() data!: IGif;
}
