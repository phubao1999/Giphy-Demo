import { Component, Input } from '@angular/core';
import { IGif } from '../../model';

@Component({
  selector: 'app-gif-card',
  templateUrl: './gif-card.component.html',
  styleUrls: ['./gif-card.component.scss'],
})
export class GifCardComponent {
  @Input() data!: IGif;
  isVisible = false;
  isLoading = false;

  showModal(): void {
    console.log(this.data);

    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
