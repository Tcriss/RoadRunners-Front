import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from 'src/app/core/interfaces/vehicle';
import { VehicleDataService } from 'src/app/core/services/vehicle-data/vehicle-data.service';
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

  vehicle: Vehicle = {
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
    images: []
  };

  constructor(
    private route: ActivatedRoute,
    private data: VehicleDataService
  ) {
    const params = this.route.snapshot.paramMap;
    const id: string = String(params.get('id'));
    this.data.getVehicle(id).subscribe(data => {
      console.log(data);
      this.vehicle = data;
    });
  }

  toBase64(buffer: any) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }
}