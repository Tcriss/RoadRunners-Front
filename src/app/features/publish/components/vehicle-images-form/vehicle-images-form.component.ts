import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-vehicle-images-form',
  templateUrl: './vehicle-images-form.component.html',
  styleUrls: ['./vehicle-images-form.component.scss']
})
export class VehicleImagesFormComponent implements OnInit, AfterViewInit {

  @Input() formGroupName!: string;
  @ViewChild('label') label!: ElementRef<any>;
  previewImages: unknown[] = [];
  form!: FormGroup;

  constructor(
    private rootForm: FormGroupDirective,
    private renderer: Renderer2
  ) {
    console.log(this.previewImages.length);
  }

  ngOnInit(): void {
    this.form = this.rootForm.control.get(this.formGroupName) as FormGroup;
    this.form.statusChanges.subscribe(response => {
      console.info('STATUS', response);
      console.info('ERRORS', this.form.errors, '\n');
    });
  }

  ngAfterViewInit(): void {
    this.imagesLimit();
  }

  previewImage(event: any) {
    if (event.target.files) {
      for (let i = 0; i < event.target.files.length; i++) {
        const file = event.target.files[i];
        const reader = new FileReader();
        reader.onload = (e: any) => {
          const imageDataUrl = e.target.result;
          this.previewImages.push(imageDataUrl);
        };
        reader.readAsDataURL(file);
      }
    }
  }
  
  deletePreview(index: number) {
    this.previewImages.splice(index, 1);
  }

  imagesLimit() {
    if(this.previewImages.length >= 7) {
      console.log('limite alcanzado');
      this.previewImages.splice(8,1);
      this.renderer.addClass(this.label.nativeElement, 'hidden');
    } else {
      this.renderer.removeClass(this.label.nativeElement, 'hidden');
    }
  }
}
