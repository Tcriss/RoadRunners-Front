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
            }
          });
        },
        error: (err) => {
          switch (err.status) {
            case 401:
              this.alerts.notify('No autorizado', 'Hay error en el token de acceso o no estás autorizado.', 'error');
              break;
            case 404:
              this.alerts.notify('Error al editar vehículo', 'Error al guardar vehículo.', 'error');
              break;
            case 500:
              this.alerts.notify('Ooops', 'Ha ocurrido un error intentalo mas tarde, intentalo más tarde.', 'error');
              break;
            default:
              this.alerts.notify('Error', err.message, 'error');
              break;
          }
        },
      });
  }

  updateVehicle(uid: any) {
    let formData = new FormData();

    // checks what fields were changed to upload those who were changed
    formData.append('owner', uid);
    formData.append('owner_email', this.editVehicleForm.value.contact.ownerEmail);
    formData.append('location', this.editVehicleForm.value.contact.location);
    formData.append('brand', this.editVehicleForm.value.info.brand);
    formData.append('type', this.editVehicleForm.value.info.type);
    formData.append('model', this.editVehicleForm.value.info.model);
    formData.append('condition', this.editVehicleForm.value.info.condition);
    formData.append('fuel', this.editVehicleForm.value.info.fuel);
    formData.append('year', this.editVehicleForm.value.info.year);
    formData.append('price', this.editVehicleForm.value.contact.price);

    this.alerts.askMe('Guardar Cambios', `¿Deseas Guardar los cambios de este vehículo?`, 'Publicar', 'Cancelar')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(res => {
        if (res == true) {
          this.backend.putVehicle(this.id, formData)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
              next: (res) => {
                this.alerts.notify('Vehículo editado exitosamente', `${this.editVehicleForm.value.info.brand} ${this.editVehicleForm.value.info.model} editado.`, 'success');
                this.router.navigate(['/settings/my-posts']);
              },
              error: (err) => {
                switch (err.status) {
                  case 401:
                    this.alerts.notify('No autorizado', 'Hay error en el token de acceso o no estás autorizado.', 'error');
                    break;
                  case 404:
                    this.alerts.notify('Error al editar vehículo', 'Error al guardar vehículo.', 'error');
                    break;
                  case 500:
                    this.alerts.notify('Ooops', 'Ha ocurrido un error, intentalo mas tarde, intentalo más tarde.', 'error');
                    break;
                  default:
                    this.alerts.notify('Error al editar vehículo', err.message, 'error');
                    break;
                }
              },
            });
        }
      });
  }

}