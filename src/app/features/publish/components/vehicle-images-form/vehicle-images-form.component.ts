import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { AlertsService } from "../../../../core/services/alerts.service";

@Component({
  selector: 'app-vehicle-images-form',
  templateUrl: './vehicle-images-form.component.html',
  styleUrls: ['./vehicle-images-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleImagesFormComponent implements OnInit {

  @Input() formGroupName!: string;
  @Input({ alias: 'images' }) images!: [];
  previewImages: unknown[] = [];
  form!: FormGroup;

  constructor(
    private rootForm: FormGroupDirective,
    private alerts: AlertsService,
  ) { }

  ngOnInit() {
    this.form = this.rootForm.control.get(this.formGroupName) as FormGroup;
  }

  previewImage(event: any) {
    if (event.target.files.length > 7) {
      this.alerts.alertMe('Limite de imagenes', 'Solo es posible subir un máximo de 7 imagenes.', 'Aceptar');
      return;
    }

    this.form.patchValue([...event.target.files]);
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

  toBase64(buffer: any) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  deletePreview(index: number) {
    this.previewImages.splice(index, 1);
    this.form.patchValue([...this.previewImages]);
  }
}
