import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TuiCarouselModule } from '@taiga-ui/kit';
import { Image } from '../../core/interfaces';

@Component({
  selector: 'app-image-gallery',
  standalone: true,
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.scss',
  imports: [ TuiCarouselModule ],
})
export class ImageGalleryComponent {

  @Input() images: Image[] = [];
  @Output() isOpen = new EventEmitter<boolean>(true);

  constructor() {}

  close(): void {
    this.isOpen.emit(false);
  }
}
