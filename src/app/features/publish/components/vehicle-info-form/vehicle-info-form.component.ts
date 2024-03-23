import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { TuiIdentityMatcher } from '@taiga-ui/cdk';

import { brands } from '../../../../common/utils/brands.list';
import { types } from '../../../../common/utils/types.list';
import { fuel } from '../../../../common/utils/fuel.list';
import { condition } from '../../../../common/utils/condition.list';
import { Brand } from '../../../../common/interfaces';

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
  search: string = 'hyundai';
  filtered: Brand[] = [];
  selectedBrand?: Brand = {
    name: '',
    logo: '',
    models: []
  };

  constructor(private rootForm: FormGroupDirective) { }

  ngOnInit(): void {
    this.form = this.rootForm.control.get(this.formGroupName) as FormGroup;
    this.form.get('brand')!.valueChanges.subscribe((selectedBrand) => {
      this.selectedBrand = this.brandsList.find(brand => brand.name === selectedBrand);
    });
  }

  readonly identityMatcher: TuiIdentityMatcher<readonly string[]> = (items1, items2) =>
    items1.length === items2.length && items1.every(item => items2.includes(item));
  
}
