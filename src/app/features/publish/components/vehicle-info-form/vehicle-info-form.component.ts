import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { brands } from '../../../../core/utils/brands.list';
import { types } from '../../../../core/utils/types.list';

@Component({
  selector: 'app-vehicle-info-form',
  templateUrl: './vehicle-info-form.component.html',
  styleUrls: ['./vehicle-info-form.component.scss']
})
export class VehicleInfoFormComponent implements OnInit {

  @Input() formGroupName!: string;
  form!: FormGroup;
  brandsList = brands;
  readonly type = types;
  readonly condition = [
    'Usado',
    'Nuevo'
  ];
  readonly fuel = [
    'Eléctrico',
    'Gasolina',
    'Gasoil',
    'Híbrido'
  ];

  constructor(private rootForm: FormGroupDirective) {}

  ngOnInit(): void {
    this.form = this.rootForm.control.get(this.formGroupName) as FormGroup;
  }
}
