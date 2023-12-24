import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { maxFilesLength } from '../../validators/max-file.validator';
import { AuthService } from '@auth0/auth0-angular';
import { BackendService } from '../../../../core/services/backend.service';
import { AlertsService } from '../../../../core/services/alerts.service';

@Component({
  selector: 'app-sell-car',
  templateUrl: './sell-car.view.html',
  styleUrls: ['./sell-car.view.scss']
})
export class SellCarView implements OnInit {

  user$ = this.auth.user$
  sellVehicleForm: FormGroup;
  previewImages: unknown[] = [];

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private backendService: BackendService,
    private alerts: AlertsService
  ) {
    this.sellVehicleForm = this.fb.group({
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
    this.user$.subscribe(user => {
      this.sellVehicleForm.patchValue({
        contact: {
          ownerEmail: user?.email
        }
      })
    });
  }

  publishVehicle(uid: any) {
    const formData = new FormData();

    formData.append('portrait', this.sellVehicleForm.value.images[0]);
    formData.append('owner', uid);
    formData.append('owner_email', this.sellVehicleForm.value.contact.ownerEmail);
    formData.append('location', this.sellVehicleForm.value.contact.location);
    formData.append('brand', this.sellVehicleForm.value.info.brand);
    formData.append('type', this.sellVehicleForm.value.info.type);
    formData.append('model', this.sellVehicleForm.value.info.model);
    formData.append('condition', this.sellVehicleForm.value.info.condition);
    formData.append('fuel', this.sellVehicleForm.value.info.fuel);
    formData.append('year', this.sellVehicleForm.value.info.year);
    formData.append('price', this.sellVehicleForm.value.contact.price);
    for (let i = 0; i < this.sellVehicleForm.value.images.length; i++) {
      formData.append('images', this.sellVehicleForm.value.images[i]);
    }
    this.alerts.askMe(
      'Publicar',
      `¿Deseas publicar a ${this.sellVehicleForm.value.info.brand} ${this.sellVehicleForm.value.info.model}?`,
      'Publicar','Cancelar'
    ).subscribe(res => {
      if (res == true) {
        this.backendService.postVehicle(formData).subscribe({
          next: (res) => {
            this.alerts.notify('Vehículo agregado exitosamente',`${this.sellVehicleForm.value.info.brand} ${this.sellVehicleForm.value.info.model} agregado.`,'success');
            this.sellVehicleForm.reset();
          },
          error: (err) => {
            switch(err.status) {
              case 401:
                this.alerts.notify('No autorizado', 'Hay error en el token de acceso o no estás autorizado.','error');
                break;
              case 404:
                this.alerts.notify('Error al agregar vehículo', 'Error al guardar vehículo.','error');
                break;
              case 500:
                this.alerts.notify('Ooops', 'Ha ocurrido un error en el servidor, intentalo más tarde.','error');
                break;
              default:
                this.alerts.notify('Error al agregar vehículo', err.message,'error');
                break;
            }
          }
        });
      }
    })
  }

}
