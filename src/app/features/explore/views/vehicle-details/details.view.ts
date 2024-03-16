import { ChangeDetectionStrategy, Component, DestroyRef, Inject, TemplateRef, ViewChild, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { TuiDialogContext, TuiDialogService, TuiDialogSize } from '@taiga-ui/core';
import { TuiPreviewDialogService } from '@taiga-ui/addon-preview';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { TuiSwipe, tuiClamp } from '@taiga-ui/cdk';

import { Vehicle } from '../../../../core/interfaces';
import { BackendService } from '../../../../core/services/backend.service';
import { SpinnerService } from '../../../../core/services/spinner.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './details.view.html',
  styleUrls: ['./details.view.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleDetailsView {

  @ViewChild('preview') readonly preview?: TemplateRef<TuiDialogContext>;
  @ViewChild('contentSample') readonly contentSample?: TemplateRef<Record<string, unknown>>;
  index = 0;
  length = 2;
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
  isLoading$: Subject<boolean> = this.loading.getStatus();
  private params = this.route.snapshot.paramMap;
  private id: string = String(this.params.get('id'));
  private distroyRef = inject(DestroyRef);

  constructor(
    @Inject(TuiDialogService) 
    private readonly dialog: TuiDialogService,
    @Inject(TuiPreviewDialogService) 
    private readonly previewService: TuiPreviewDialogService,
    private route: ActivatedRoute,
    private data: BackendService,
    private location: Location,
    private loading: SpinnerService
  ) {
    this.data.getVehicle(this.id)
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

  getTitle(): string {
    return this.index === 0 ? 'Transaction cert.jpg' : 'My face.jpg';
  }

  getPreviewContent(): PolymorpheusContent {
    return 'https://avatars.githubusercontent.com/u/10106368';
  }

  show(): void {
    this.previewService.open(this.preview || '').subscribe({
      complete: () => console.info('complete'),
    });
  }

  onSwipe(swipe: TuiSwipe): void {
    if (swipe.direction === 'left') {
      this.index = tuiClamp(this.index + 1, 0, this.length - 1);
    }

    if (swipe.direction === 'right') {
      this.index = tuiClamp(this.index - 1, 0, this.length - 1);
    }
  }
}
