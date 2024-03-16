import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';

import { ConnectionService } from '../../../../services/connection.service';
import { AlertsService } from '../../../../services/alerts.service';

@Component({
  selector: 'app-sell-car',
  templateUrl: './sell-car.view.html',
  styleUrls: ['./sell-car.view.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SellCarView implements OnInit {

  user$ = this.auth.user$
  sellVehicleForm: FormGroup;
  previewImages: unknown[] = [];

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private backendService: ConnectionService,
    private alerts: AlertsService
  ) {
    this.sellVehicleForm = this.fb.group({
      info: this.fb.group({
        brand: ['', Validators.required],
        type: [null, Validators.required],
        model: ['', Validators.required],
        condition: [null,Validators.required],
        fuel: [null, Validators.required],
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
      images: [[], Validators.required],
    });
  }

  ngOnInit(): void {
    this.user$.subscribe(user => {
      this.sellVehicleForm.patchValue({
        contact: {
          email: user?.email,
          picture: user?.picture
        }
      })
    });
  }

  loadData(uid: any): void {
    const form: FormData = new FormData;
    form.append('owner', uid);
    form.append('location', this.sellVehicleForm.value.contact.location);
    form.append('brand', this.sellVehicleForm.value.info.brand);
    form.append('type', this.sellVehicleForm.value.info.type);
    form.append('model', this.sellVehicleForm.value.info.model);
    form.append('condition', this.sellVehicleForm.value.info.condition);
    form.append('fuel', this.sellVehicleForm.value.info.fuel);
    form.append('year', this.sellVehicleForm.value.info.year);
    form.append('price', this.sellVehicleForm.value.contact.price);
    form.append('picture', this.sellVehicleForm.value.contact.picture);
    form.append('name', this.sellVehicleForm.value.contact.name);
    form.append('email', this.sellVehicleForm.value.contact.email);
    form.append('phone', this.sellVehicleForm.value.contact.phone);
    if(this.sellVehicleForm.value.contact.whatsapp !== '') form.append('whatsapp', this.sellVehicleForm.value.contact.whatsapp);
    if(this.sellVehicleForm.value.contact.whatsapp !== '') form.append('telegram', this.sellVehicleForm.value.contact.telegram);
    for (let i = 0; i < this.sellVehicleForm.value.images.length; i++) {
      form.append('images', this.sellVehicleForm.value.images[i]);
    };

    this.publishVehicle(form);
  }

  private publishVehicle(data: FormData): void {
    this.alerts.askMe(
      'Publicar',
      `¿Deseas publicar a ${this.sellVehicleForm.value.info.brand} ${this.sellVehicleForm.value.info.model}?`,
      'Publicar', 'Cancelar'
    ).subscribe(res => {
      if (res == true) {
        this.backendService.postVehicle(data).subscribe({
          next: (res) => {
            this.alerts.notify('Vehículo agregado exitosamente', `${this.sellVehicleForm.value.info.brand} ${this.sellVehicleForm.value.info.model} agregado.`, 'success');
            this.sellVehicleForm.reset();
          },
          error: (err) => {
            switch (err.status) {
              case 201:
                this.alerts.notify('Vehículo agregado exitosamente', `${this.sellVehicleForm.value.info.brand} ${this.sellVehicleForm.value.info.model} agregado.`, 'success');
                this.sellVehicleForm.reset();
                break;
              case 401:
                this.alerts.notify('No autorizado', 'Hay error en el token de acceso o no estás autorizado.', 'error');
                break;
              case 404:
                this.alerts.notify('Error al agregar vehículo', 'Error al guardar vehículo.', 'error');
                break;
              case 500:
                this.alerts.notify('Ooops', 'Ha ocurrido un error en el servidor, intentalo más tarde.', 'error');
                break;
              default:
                this.alerts.notify('Error al agregar vehículo', err.message, 'error');
                break;
            }
          }
        });
      }
    })
  }

}
