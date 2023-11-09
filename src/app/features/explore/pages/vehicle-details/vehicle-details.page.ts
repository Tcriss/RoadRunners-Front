import { Component, Inject, ViewChild, TemplateRef } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from 'src/app/core/interfaces/vehicle';
import { VehicleDataService } from 'src/app/core/services/vehicle-data/vehicle-data.service';
import { TuiAppearance, TuiDialogContext, tuiButtonOptionsProvider } from '@taiga-ui/core';
import { TuiPreviewDialogService } from '@taiga-ui/addon-preview';

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

  @ViewChild('preview') readonly preview?: TemplateRef<TuiDialogContext>;
  @ViewChild('contentSample') readonly contentSample?: TemplateRef<Record<string, unknown>>;
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

  constructor(
    private route: ActivatedRoute,
    private data: VehicleDataService,
    private location: Location,
    @Inject(TuiPreviewDialogService) private readonly previewService: TuiPreviewDialogService
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

  show(): void {
    this.previewService.open(this.preview || 'No hay preview').subscribe({
        complete: () => console.info('complete'),
    });
  }

  goBack(): void {
    this.location.back();
  }
}
