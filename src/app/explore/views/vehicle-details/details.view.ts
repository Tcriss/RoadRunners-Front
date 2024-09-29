import { ChangeDetectionStrategy, Component, DestroyRef, Inject, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { TuiDialogContext, TuiDialogService, TuiDialogSize } from '@taiga-ui/core';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';

import { Vehicle } from '../../../core/interfaces';
import { ConnectionService } from '../../../common/services/connection.service';
import { LoaderService } from '../../../common/services/loader.service';
import { showHide } from '../../../core/animations/show-hide.animation';
import { reveal } from '../../../core/animations/reveal.animation';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './details.view.html',
  styleUrls: ['./details.view.scss'],
  animations: [showHide, reveal],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleDetailsView {

  private params = this.route.snapshot.paramMap;
  private id: string = String(this.params.get('id'));
  private distroyRef = inject(DestroyRef);
  index: number = 0;

  isGalleryOpen: boolean = false;
  isLoading$: Subject<boolean> = this.loading.getStatus();
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

  toggleGallery(value: boolean, index?: number): void {
    if (index) this.index = index;

    this.isGalleryOpen = value;
  }
}
