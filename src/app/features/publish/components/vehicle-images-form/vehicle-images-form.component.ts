import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { TuiFileLike } from '@taiga-ui/kit';
import { maxFilesLength } from '../../validators/max-file.validator';

@Component({
  selector: 'app-vehicle-images-form',
  templateUrl: './vehicle-images-form.component.html',
  styleUrls: ['./vehicle-images-form.component.scss']
})
export class VehicleImagesFormComponent implements OnInit {

  @Input() formGroupName!: string;
  previewImages: unknown[] = [];
  form!: FormGroup;

  constructor(private rootForm: FormGroupDirective) {}

  ngOnInit(): void {
    this.form = this.rootForm.control.get(this.formGroupName) as FormGroup;
    this.form.statusChanges.subscribe(response => {
      console.info('STATUS', response);
      console.info('ERRORS', this.form.errors, '\n');
    });
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
}
