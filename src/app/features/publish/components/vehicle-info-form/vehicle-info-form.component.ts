import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { brands, types } from 'src/app/core/interfaces/brand';

@Component({
  selector: 'app-vehicle-info-form',
  templateUrl: './vehicle-info-form.component.html',
  styleUrls: ['./vehicle-info-form.component.scss']
})
export class VehicleInfoFormComponent implements OnInit {

  @Input() formGroupName!: string;
  form!: FormGroup;
  brands:Array<any> = brands;
  readonly type = types;
  readonly condition = ['Usado','Nuevo'];
  readonly fuel = ['Electrico','Gasolina','Gasoi'];

  constructor(private rootForm: FormGroupDirective) {}

  ngOnInit(): void {
    this.form = this.rootForm.control.get(this.formGroupName) as FormGroup;
  }

}
