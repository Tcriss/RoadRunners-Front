import { ChangeDetectionStrategy, Component, DestroyRef, Inject, TemplateRef, ViewChild, inject } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TuiDialogContext, TuiDialogService, TuiDialogSize } from '@taiga-ui/core';
import { Vehicle } from '../../../../core/interfaces';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { BackendService } from '../../../../core/services/backend.service';
import { SpinnerService } from '../../../../core/services/spinner.service';
import { TuiPreviewDialogService } from '@taiga-ui/addon-preview';
import { TuiSwipe, tuiClamp } from '@taiga-ui/cdk';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './details.view.html',
  styleUrls: ['./details.view.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleDetailsView {

  @ViewChild('preview')
  readonly preview?: TemplateRef<TuiDialogContext>;

  @ViewChild('contentSample')
  readonly contentSample?: TemplateRef<Record<string, unknown>>;

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
    @Inject(TuiDialogService) private readonly dialog: TuiDialogService,
    @Inject(TuiPreviewDialogService) private readonly previewService: TuiPreviewDialogService,
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

  toBase64(buffer: any): string {
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

  get title(): string {
    return this.index === 0 ? 'Transaction cert.jpg' : 'My face.jpg';
  }

  get previewContent(): PolymorpheusContent {
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
