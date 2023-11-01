import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { maxFilesLength } from '../../validators/max-file.validator';

@Component({
  selector: 'app-sell-car',
  templateUrl: './sell-car.page.html',
  styleUrls: ['./sell-car.page.scss']
})
export class SellCarPage {

  sellVehicleForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.sellVehicleForm = this.fb.group({
      info: this.fb.group({
        brand: [''],
        type: [''],
        model: [''],
        condition: [''],
        fuel: [''],
        year: ['']
      }),
      images: this.fb.group({
        images: []
      }),
      contact: this.fb.group({
        ownerEmail: [''],
        location: [''],
        price: []
      }),
    });
  }
}
