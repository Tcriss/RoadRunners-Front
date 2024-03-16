import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChangeDetectionStrategy } from '@angular/core';
import { Params } from '@angular/router';

import { types } from '../../../../common/utils/types.list';
import { brands } from '../../../../common/utils/brands.list';
import { Brand } from '../../../../common/interfaces';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterBarComponent implements OnInit {

  @Input({alias: 'urlParams', required: true}) params: Params = {};
  @Output() filterParams = new EventEmitter<Params>;
  readonly type = types;
  readonly brands: Brand[] = brands;
  max: number = 5000000;
  min: number = 0;
  quantum: number = 0.00;
  filter: FormGroup;

  constructor(private fb: FormBuilder) {
    this.filter = this.fb.group({
      model: '',
      fuel: '',
      condition: '',
      type: '',
      location: '',
      brand: '',
      year: '',
      price: undefined,
    });
  }

  ngOnInit(): void {
    if(this.params) {
      this.filter.patchValue({
        type: this.params['type'],
        brand: this.params['brand']
      });
    }
  }

  search(): void {
    const filtered: Params = this.filter.value;
    for(let key in filtered) {
      if ( filtered[key] == '' || filtered[key] == undefined) {
        delete filtered[key];
      }
    }
    this.filterParams.emit(filtered);
  }
}
