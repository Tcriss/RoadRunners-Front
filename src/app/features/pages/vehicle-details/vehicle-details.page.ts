import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from 'src/app/core/interfaces/api';
import { ApiService } from 'src/app/core/services/api/api.service';
import { TuiAppearance, tuiButtonOptionsProvider } from '@taiga-ui/core';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.page.html',
  styleUrls: ['./vehicle-details.page.scss'],
  providers: [
    tuiButtonOptionsProvider({
        shape: 'rounded',
        appearance: TuiAppearance.Primary,
        size: 'l',
    })]
})
export class VehicleDetailsPage {
  details: Api[];
  product: Api = {
    _id: '',
    owner_email: '',
    location: '',
    brand: '',
    type: '',
    model: '',
    condition: '',
    fuel: '',
    year: '',
    price: 0,
    img: ''
  };

  constructor(
    private route:ActivatedRoute,
    private data:ApiService
    ){
      this.details = [];
      const params = this.route.snapshot.paramMap;
      const id: string = String(params.get('id'));
      this.data.getVehicle(id).subscribe(data => {
        this.product = data;
      });
    }
}