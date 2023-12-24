import { Component, ElementRef, ViewChild, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { AlertsService } from "../../../../core/services/alerts.service";

@Component({
  selector: 'app-vehicle-images-form',
  templateUrl: './vehicle-images-form.component.html',
  styleUrls: ['./vehicle-images-form.component.scss']
})
export class VehicleImagesFormComponent implements OnInit {

  @Input() formGroupName!: string;
  @Input({alias: 'images'}) images!: [];
  previewImages: unknown[] = [];
  form!: FormGroup;

  constructor(
    private rootForm: FormGroupDirective,
    private alerts: AlertsService,
  ) { }

  ngOnInit() {
    this.form = this.rootForm.control.get(this.formGroupName) as FormGroup;
    this.previewImages = this.images;
    console.log(this.previewImages)
  }

  previewImage(event: any) {
    if (event.target.files.length < 8) {
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
    } else {
      this.alerts.alertMe('Limite de imagenes', 'Solo es posible subir un máximo de 7 imagenes.', 'Aceptar');
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
    this.form.patchValue([...this.previewImages]);
  }
}
