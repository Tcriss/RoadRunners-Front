import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

import { ConnectionService } from '../../../../services/connection.service';
import { AlertsService } from '../../../../services/alerts.service';
import { LoaderService } from '../../../../services/loader.service';
import { EditVehicle } from '../../../../common/interfaces';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.view.html',
  styleUrl: './edit-car.view.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditCarView {

  private params = this.route.snapshot.paramMap;
  private id: string = String(this.params.get('id'));
  private destroyRef = inject(DestroyRef);
  user$ = this.auth.user$
  editVehicleForm: FormGroup;
  previewImages: unknown[] = [];
  initialFormValue: any;
  isLoading$ = this.loader.getStatus();

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private backend: ConnectionService,
    private alerts: AlertsService,
    private router: Router,
    private route: ActivatedRoute,
    private loader: LoaderService
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
        location: ['', Validators.required],
        price: [null, Validators.required],
        picture: ['', Validators.required],
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required]],
        whatsapp: [''],
        telegram: [''],
      }),
      //images: [[], Validators.required],
    });
  }

  ngOnInit(): void {
    this.getVehicle();
  }

  private getVehicle(): void {
    this.backend.findOneVehicle(this.id)
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
              email: vehicle.seller.email,
              location: vehicle.location,
              price: vehicle.price,
              picture: vehicle.seller.picture,
              name: vehicle.seller.name,
              phone: vehicle.seller.phone,
              whatsapp: vehicle.seller.whatsapp,
              telegram: vehicle.seller.telegram
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

  updateVehicle(uid: any): void {
    const update: EditVehicle = {
      _id: this.id,
      owner: uid,
      location: this.editVehicleForm.value.contact.location,
      brand: this.editVehicleForm.value.info.brand,
      type: this.editVehicleForm.value.info.type,
      model: this.editVehicleForm.value.info.model,
      condition: this.editVehicleForm.value.info.condition,
      fuel: this.editVehicleForm.value.info.fuel,
      year: this.editVehicleForm.value.info.year,
      price: this.editVehicleForm.value.contact.price,
      email: this.editVehicleForm.value.contact.email,
      name: this.editVehicleForm.value.contact.name,
      phone: this.editVehicleForm.value.contact.phone,
      whatsapp: this.editVehicleForm.value.contact.whatsapp,
      telegram: this.editVehicleForm.value.contact.telegram
    };

    this.alerts.askMe('Guardado', `¿Desea guardar los cambios?`, 'Guardar', 'Cancelar').subscribe(res => {
      if (res == true) this.save(update);
    });
  }

  private save(vehicle: EditVehicle): void {
    this.backend.editVehicle(this.id, vehicle)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (res) => {
          this.alerts.notify('Vehículo editado exitosamente', `${this.editVehicleForm.value.info.brand} ${this.editVehicleForm.value.info.model} editado.`, 'success');
          this.router.navigate(['/settings/my-posts']);
        },
        error: (err) => {
          switch (err.status) {
            case 401:
              this.alerts.notify('Sin autorización', 'No tienes permisos para hacer esta acción.', 'error');
              break;
            case 404:
              this.alerts.notify('Error al editar vehículo', 'No existe.', 'error');
              console.log(err);
              break;
            case 500:
              this.alerts.notify('Ooops', 'Ha ocurrido un error, intentalo más tarde.', 'error');
              break;
            default:
              this.alerts.notify('Error al editar vehículo', err.message, 'error');
              break;
          }
        },
      });
  }

}