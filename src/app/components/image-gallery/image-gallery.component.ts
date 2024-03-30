import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TuiCarouselModule } from '@taiga-ui/kit';

import { Image } from '../../core/interfaces';
import { showHide } from '../../core/animations/show-hide.animation';
import { reveal } from '../../core/animations/reveal.animation';

@Component({
  selector: 'app-image-gallery',
  standalone: true,
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.scss',
  animations: [ showHide, reveal ],
  imports: [ TuiCarouselModule ],
})
export class ImageGalleryComponent {

  @Input({ alias: 'openAt', required: true}) index: number = 0;
  @Input() images: Image[] = [];
  @Output() isOpen = new EventEmitter<boolean>(true);
  currentIndex: number = 0;

  constructor() {
    console.log('index: ', this.index);
  }

  close(): void {
    this.isOpen.emit(false);
  }

  changeIndex(index: number): void {
    this.index = index;
  }

  trackIndex(value: number): void {
    this.currentIndex = value;
  }
}
