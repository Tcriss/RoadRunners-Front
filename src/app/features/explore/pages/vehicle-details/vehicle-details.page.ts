import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from 'src/app/core/interfaces/vehicle';
import { VehicleDataService } from 'src/app/core/services/vehicle-data/vehicle-data.service';
import { SpinnerService } from 'src/app/core/services/spinner/spinner.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.page.html',
  styleUrls: ['./vehicle-details.page.scss'],
})
export class VehicleDetailsPage {

  length: number = 0;
  index: number = 0;
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
  isLoading$: Subject<boolean> = this.loading.getStatus();

  constructor(
    private route: ActivatedRoute,
    private data: VehicleDataService,
    private location: Location,
    private loading: SpinnerService
  ) {
    const params = this.route.snapshot.paramMap;
    const id: string = String(params.get('id'));
    this.data.getVehicle(id).subscribe(data => {
      this.vehicle = data;
      this.length = this.vehicle.images.length;
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

  getBack(): void {
    this.location.back();
  }
}
