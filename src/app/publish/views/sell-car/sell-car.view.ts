import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { ConnectionService } from '../../../common/services/connection.service';
import { AlertsService } from '../../../common/services/alerts.service';

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
  uid = new BehaviorSubject<string>('');

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private backendService: ConnectionService,
    private alerts: AlertsService,
    private router: Router
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
      user && user.sub && this.uid.next(user.sub);

      this.sellVehicleForm.patchValue({
        contact: {
          email: user?.email,
          picture: user?.picture
        }
      })
    });
  }

  loadData(): void {
    console.log('user: ', this.uid.value)
    const form: FormData = new FormData;
    form.append('owner', this.uid.value);
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
    for (let image of this.sellVehicleForm.value.images) {
      form.append('images', image);
    };

    this.alerts.askMe('Publicar', `¿Desea guardar los cambios?`, 'Publicar', 'Cancelar').subscribe(res => {
      if (res) this.publish(form);
    });
  }

  private publish(vehicle: FormData): void {
    this.backendService.createVehicle(vehicle).subscribe({
      next: (res) => {
        this.alerts.notify('Vehículo agregado exitosamente', `${this.sellVehicleForm.value.info.brand} ${this.sellVehicleForm.value.info.model} agregado.`, 'success');
        this.sellVehicleForm.reset();
        this.router.navigate(['/settings/my-posts']);
      },
      error: (err) => {
        switch (err.status) {
          case 201:
            this.alerts.notify('Vehículo agregado exitosamente', `${this.sellVehicleForm.value.info.brand} ${this.sellVehicleForm.value.info.model} agregado.`, 'success');
            this.sellVehicleForm.reset();
            this.router.navigate(['/settings/my-posts']);
            break;
          case 400:
            this.alerts.notify('Error de validación', err.error.message, 'error');
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
            this.alerts.notify('Error al agregar vehículo', err.error.message, 'error');
            break;
        }
      }
    });
  }

}
