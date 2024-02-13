import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { brands } from '../../../../core/utils/brands.list';
import { types } from '../../../../core/utils/types.list';
import { fuel } from '../../../../core/utils/fuel.list';
import { condition } from '../../../../core/utils/condition.list';
import { TuiIdentityMatcher } from '@taiga-ui/cdk';

@Component({
  selector: 'app-vehicle-info-form',
  templateUrl: './vehicle-info-form.component.html',
  styleUrls: ['./vehicle-info-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleInfoFormComponent implements OnInit {

  @Input() formGroupName!: string;
  form!: FormGroup;
  readonly brandsList = brands;
  readonly vehicleTypes = types;
  readonly condition: string[] = condition;
  readonly fuel: string[] = fuel;

  constructor(private rootForm: FormGroupDirective) { }

  ngOnInit(): void {
    this.form = this.rootForm.control.get(this.formGroupName) as FormGroup;
  }

  readonly identityMatcher: TuiIdentityMatcher<readonly string[]> = (items1, items2) =>
    items1.length === items2.length && items1.every(item => items2.includes(item));

  
}
