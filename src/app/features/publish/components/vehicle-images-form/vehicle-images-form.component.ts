import {Component, ElementRef, Renderer2, ViewChild, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-vehicle-images-form',
  templateUrl: './vehicle-images-form.component.html',
  styleUrls: ['./vehicle-images-form.component.scss']
})
export class VehicleImagesFormComponent implements OnInit{

  @ViewChild('label') label!: ElementRef<any>;
  @Input() formGroupName!: string;
  previewImages: unknown[] = [];
  form!: FormGroup;
  constructor(private rootForm: FormGroupDirective ) {
  }

  ngOnInit() {
      this.form = this.rootForm.control.get(this.formGroupName) as FormGroup;
  }

  previewImage(event: any) {
    for (let i = 0; i < event.target.files.length; i++) {
      const file: File = event.target.files[i];
      this.form.patchValue([...event.target.files]);
        const reader = new FileReader();
        reader.onload = (e: any) => {
          const imageDataUrl = e.target.result;
          this.previewImages.push(imageDataUrl);
        };
        reader.readAsDataURL(file);
    }
  }

  // dataURItoBlob(file: File): Blob {
  //   const byteString = atob(dataURI.split(',')[1]);
  //   const arrayBuffer = new ArrayBuffer(byteString.length);
  //   const int8Array = new Uint8Array(arrayBuffer);
  //   for (let i = 0; i < byteString.length; i++) {
  //     int8Array[i] = byteString.charCodeAt(i);
  //   }
  //   return new Blob([int8Array], { type: 'image/jpeg' });
  // }

  deletePreview(index: number) {
    this.previewImages.splice(index, 1);
  }
}
