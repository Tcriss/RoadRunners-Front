import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Brand } from 'src/app/core/interfaces/brand';
import { brands } from 'src/app/core/utils/brands.list';
import { types } from 'src/app/core/utils/types.list';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

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
  readonly condition = ['Usado','Nuevo'];
  readonly fuel = ['Electrico','Gasolina','Gasoi'];

  constructor(private rootForm: FormGroupDirective) {}

  ngOnInit(): void {
    this.form = this.rootForm.control.get(this.formGroupName) as FormGroup;
  }
}
