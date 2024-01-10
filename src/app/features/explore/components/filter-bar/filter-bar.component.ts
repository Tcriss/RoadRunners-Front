import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { fuel } from '../../../../core/utils/fuel.list';
import { condition } from '../../../../core/utils/condition.list';
import { types } from '../../../../core/utils/types.list';
import { brands } from '../../../../core/utils/brands.list';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.scss'
})
export class FilterBarComponent {

  fuel: string[] = fuel;
  condition: string[] = condition;
  type: string[] = types;
  brands: string[] = brands;
  max: number = 5000000;
  min: number = 0;
  quantum: number = 0.00;
  filter: FormGroup;

  constructor(private fb: FormBuilder) {
    this.filter = this.fb.group({
      search: '',
      fuel: 'Todos',
      condition: 'Todos',
      type: 'Todos',
      location: 'Todas',
      brand: 'Todas',
      year: '',
      price: 250000,
    });
  }
}
