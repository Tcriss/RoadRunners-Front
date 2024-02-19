import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective } from '@angular/forms';
import { TuiFileLike } from '@taiga-ui/kit';
import { maxFilesLength } from '../../validators/max-file.validator';

@Component({
  selector: 'app-vehicle-images-form',
  templateUrl: './vehicle-images-form.component.html',
  styleUrls: ['./vehicle-images-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleImagesFormComponent implements OnInit {

  @Input() formGroupName!: string;
  @Input({ alias: 'images' }) images!: [];
  files: File[] = [];
  form: FormControl = new FormControl([], [maxFilesLength(7)]);
  readonly file: TuiFileLike = {
    name: 'custom.txt',
  };

  constructor(
    private rootForm: FormGroupDirective,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.form = this.rootForm.control.get(this.formGroupName) as FormControl;
  }

  upload(event: any): void {
    this.cdr.detectChanges();
    this.form.patchValue(this.files);
  }

  removeFile({name}: File): void {
    this.form.setValue(
        this.form.value?.filter((current: File) => current.name !== name) ?? [],
    );
  }
}
