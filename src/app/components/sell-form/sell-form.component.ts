import { Component, ɵgetUnknownElementStrictMode } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TuiAppearance, tuiButtonOptionsProvider } from '@taiga-ui/core';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { ApiService } from 'src/app/services/api/api.service';
import { brands, types } from 'src/assets/brands';

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
  brands:Array<any> = brands;
  readonly type = types;
  readonly condition = ['Usado','Nuevo'];
  readonly fuel = ['Electrico','Gasolina','Gasoi'];

  sellVehicleForm: FormGroup;

  constructor(
    private api:ApiService,
    private fb:FormBuilder,
    private alerts:AlertsService
    ){
    this.sellVehicleForm = this.fb.group({
        owner_email: [''],
        location: [''],
        brand: [''],
        type: [''],
        model: [''],
        condition: [''],
        fuel: [''],
        year: [''],
        price: [''],
        img: ['']
    })
  }

  publish(){
    let form = {
      Owner_email: this.sellVehicleForm.value.owner_email,
      Location: this.sellVehicleForm.value.location,
      Brand: this.sellVehicleForm.value.brand,
      Type: this.sellVehicleForm.value.type,
      Model: this.sellVehicleForm.value.model,
      Condition: this.sellVehicleForm.value.condition,
      Fuel: this.sellVehicleForm.value.fuel,
      Year: this.sellVehicleForm.value.year,
      Price: this.sellVehicleForm.value.price,
      Img: this.sellVehicleForm.value.img
    };

    (this.api.postVehicle(form)).subscribe({
        next(res:unknown){
          console.log(res);
        },error(err){
          console.log(err.message);
        }
      });
  }
}
