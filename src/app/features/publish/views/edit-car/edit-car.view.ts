import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { BackendService } from '../../../../core/services/backend.service';
import { AlertsService } from '../../../../core/services/alerts.service';
import { SpinnerService } from '../../../../core/services/spinner.service';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.view.html',
  styleUrl: './edit-car.view.scss'
})
export class EditCarView {

  private params = this.route.snapshot.paramMap;
  private id: string = String(this.params.get('id'));
  private destroyRef = inject(DestroyRef);
  user$ = this.auth.user$
  editVehicleForm: FormGroup;
  previewImages: unknown[] = [];
  initialFormValue: any;
  isLoading$ = this.loader.loading;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private backend: BackendService,
    private alerts: AlertsService,
    private router: Router,
    private route: ActivatedRoute,
    private loader: SpinnerService
  ) {
    this.editVehicleForm = this.fb.group({
      info: this.fb.group({
        brand: ['', Validators.required],
        type: ['', Validators.required],
        model: ['', Validators.required],
        condition: ['', Validators.required],
        fuel: ['', Validators.required],
        year: ['', Validators.required]
      }),
      contact: this.fb.group({
        ownerEmail: ['', Validators.required],
        location: ['', Validators.required],
        price: [null, Validators.required]
      }),
      images: [[], Validators.required],
    });
    this.initialFormValue = this.editVehicleForm.value;
  }

  ngOnInit(): void {
      this.backend.getVehicle(this.id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (vehicle) => {
          this.editVehicleForm.patchValue({
            info: {
              brand: vehicle.brand,
              type: vehicle.type,
              model: vehicle.model,
              condition: vehicle.condition,
              fuel: vehicle.fuel,
              year: vehicle.year,
            },
            contact: {
              ownerEmail: vehicle.owner_email,
              location: vehicle.location,
              price: vehicle.price
            },
            images: vehicle.images
          });
        },
        error: (err) => {
          switch(err.status) {
            case 401:
              this.alerts.notify('No autorizado', 'Hay error en el token de acceso o no estás autorizado.','error');
              break;
            case 404:
              this.alerts.notify('Error al editar vehículo', 'Error al guardar vehículo.','error');
              break;
            case 500:
              this.alerts.notify('Ooops', 'Ha ocurrido un error intentalo mas tarde, intentalo más tarde.','error');
              break;
            default:
              this.alerts.notify('Error', err.message,'error');
              break;
          }
        },
      });
  }

  updateVehicle(uid: any) {
    const formData = new FormData();
    const actualValue = this.editVehicleForm.value;

    // checks what fields were changed to upload those who were changed
    if(this.initialFormValue.owner !== actualValue.owner) formData.append('owner', actualValue.owner);
    if(this.initialFormValue.images[0] !== actualValue.images[0]) formData.append('portrait', actualValue.images[0]);
    if(this.initialFormValue.ownerEmail !== actualValue.owner_email) formData.append('owner_email', actualValue.ownerEmail);
    if(this.initialFormValue.location !== actualValue.location) formData.append('location', actualValue.location);
    if(this.initialFormValue.brand !== actualValue.brand) formData.append('brand', actualValue.brand);
    if(this.initialFormValue.type !== actualValue.type) formData.append('type', actualValue.type);
    if(this.initialFormValue.model !== actualValue.model) formData.append('model', actualValue.model);
    if(this.initialFormValue.condition !== actualValue.condition) formData.append('condition', actualValue.condition);
    if(this.initialFormValue.fuel !== actualValue.fuel) formData.append('fuel', actualValue.fuel);
    if(this.initialFormValue.year !== actualValue.year) formData.append('year', actualValue.year);
    if(this.initialFormValue.price !== actualValue.price) formData.append('price', actualValue.price);
    for (let i = 0; i < this.editVehicleForm.value.images.length; i++) {
      if(this.initialFormValue.images[i] !== actualValue.images[i]) formData.append('images', this.editVehicleForm.value.images[i]);
    }

    this.alerts.askMe('Guardar Cambios',`¿Deseas Guardar los cambios de este vehículo?`,'Publicar','Cancelar')
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe(res => {
      if (res == true) {
        this.backend.patchVehicle(this.id, formData)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe({
          next: (res) => {
            this.alerts.notify('Vehículo editado exitosamente',`${this.editVehicleForm.value.info.brand} ${this.editVehicleForm.value.info.model} editado.`,'success');
            this.router.navigate(['/settings/my-posts']);
          },
          error: (err) => {
            switch(err.status) {
              case 401:
                this.alerts.notify('No autorizado', 'Hay error en el token de acceso o no estás autorizado.','error');
                break;
              case 404:
                this.alerts.notify('Error al editar vehículo', 'Error al guardar vehículo.','error');
                break;
              case 500:
                this.alerts.notify('Ooops', 'Ha ocurrido un error, intentalo mas tarde, intentalo más tarde.','error');
                break;
              default:
                this.alerts.notify('Error al editar vehículo', err.message,'error');
                break;
            }
          },
        });
      }
    });
  }

}