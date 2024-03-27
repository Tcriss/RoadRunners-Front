import { ChangeDetectionStrategy, Component, DestroyRef, Inject, TemplateRef, ViewChild, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { TuiDialogContext, TuiDialogService, TuiDialogSize } from '@taiga-ui/core';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';

import { Vehicle } from '../../../../core/interfaces';
import { ConnectionService } from '../../../../services/connection.service';
import { LoaderService } from '../../../../services/loader.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './details.view.html',
  styleUrls: ['./details.view.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleDetailsView {

  @ViewChild('preview') readonly preview?: TemplateRef<TuiDialogContext>;
  @ViewChild('contentSample') readonly contentSample?: TemplateRef<Record<string, unknown>>;
  isGalleryOpen: boolean = false;
  isLoading$: Subject<boolean> = this.loading.getStatus();
  private params = this.route.snapshot.paramMap;
  private id: string = String(this.params.get('id'));
  private distroyRef = inject(DestroyRef);
  vehicle: Vehicle = {
    _id: '',
      owner: '',
      location: '',
      brand: '',
      type: '',
      model: '',
      condition: '',
      fuel: '',
      year: '',
      price: 0,
      seller: {
        picture: '',
        name: '',
        email: '',
        phone: '',
        whatsapp: '',
        telegram: '',
      },
      images: []
  };

  constructor(
    @Inject(TuiDialogService) 
    private readonly dialog: TuiDialogService,
    private route: ActivatedRoute,
    private data: ConnectionService,
    private location: Location,
    private loading: LoaderService
  ) {
    this.data.findOneVehicle(this.id)
      .pipe(takeUntilDestroyed(this.distroyRef))
      .subscribe(vehicle => { this.vehicle = vehicle });
  }

  onContact(content: PolymorpheusContent<TuiDialogContext>, header: PolymorpheusContent, size: TuiDialogSize,): void {
    this.dialog.open(content, {
      label: '¿Interesado en este vehículo?',
      header,
      size,
    }).subscribe();
  }

  getBack(): void {
    this.location.back();
  }

  toggleGallery(value: boolean): void {
    this.isGalleryOpen = value;
  }
}
