import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TuiAppearance, tuiButtonOptionsProvider } from '@taiga-ui/core';
import { ApiService } from 'src/app/services/api/api.service';
import { iForm } from './form';

@Component({
  selector: 'app-sell-form',
  templateUrl: './sell-form.component.html',
  styleUrls: ['./sell-form.component.scss'],
  providers: [
    tuiButtonOptionsProvider({
        shape: 'rounded',
        appearance: TuiAppearance.Primary,
        size: 'm',
    })]
})
export class SellFormComponent {
  readonly items = ['Black', 'Gold', 'Silver'];
  sellVehicleForm = new FormGroup({
    owner_email: new FormControl(''),
    location: new FormControl(''),
    brand: new FormControl(''),
    type: new FormControl(''),
    model: new FormControl(''),
    condition: new FormControl(''),
    fuel: new FormControl(''),
    year: new FormControl(''),
    price: new FormControl(''),
    img: new FormControl('')
  });

  form:{};

  constructor(private api:ApiService){
    this.form = {
      owner_email: this.sellVehicleForm.value.owner_email,
      location: this.sellVehicleForm.value.location,
      brand: this.sellVehicleForm.value.brand,
      type: this.sellVehicleForm.value.type,
      model: this.sellVehicleForm.value.model,
      condition: this.sellVehicleForm.value.condition,
      fuel: this.sellVehicleForm.value.fuel,
      year: this.sellVehicleForm.value.year,
      price: this.sellVehicleForm.value.price,
      img: this.sellVehicleForm.value.img
    }
  }

  async publish(){
    await this.api.postVehicle(this.form);
  }
}
