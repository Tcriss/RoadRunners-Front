import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Vehicle } from '../../../../core/interfaces/vehicle';
import { BackendService } from '../../../../core/services/backend.service';
import { SpinnerService } from '../../../../core/services/spinner.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './details.view.html',
  styleUrls: ['./details.view.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleDetailsView {

  index: number = 0;
  vehicle: Vehicle = {
    _id: '',
    owner: '',
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
  private params = this.route.snapshot.paramMap;
  private id: string = String(this.params.get('id'));
  private distroyRef = inject(DestroyRef);

  constructor(
    private route: ActivatedRoute,
    private data: BackendService,
    private location: Location,
    private loading: SpinnerService
  ) {
    this.data.getVehicle(this.id)
    .pipe(takeUntilDestroyed(this.distroyRef))
    .subscribe(data => this.vehicle = data);
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
