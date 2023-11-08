import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { maxFilesLength } from '../../validators/max-file.validator';
import { VehicleDataService } from 'src/app/core/services/vehicle-data/vehicle-data.service';
import { AlertsService } from 'src/app/core/services/alerts/alerts.service';

@Component({
  selector: 'app-sell-car',
  templateUrl: './sell-car.page.html',
  styleUrls: ['./sell-car.page.scss']
})
export class SellCarPage {

  sellVehicleForm: FormGroup;
  previewImages: unknown[] = [];

  constructor(
    private fb: FormBuilder,
    private vehicleService: VehicleDataService,
    private alerts: AlertsService,
    private renderer: Renderer2
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

  publishVehicle() {
    const formData = new FormData();

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
    this.vehicleService.postVehicle(formData).subscribe({
      next: (res) => {
        this.alerts.alertMe(
          'Vehículo agregado exitosamente',
          `${this.sellVehicleForm.value.info.brand} ${this.sellVehicleForm.value.info.model} agregado.`,
          { button: 'Aceptar' });
        this.sellVehicleForm.reset();
      },
      error: (err) => this.alerts.alertMe(
        'Error al agregar vehículo', err.message,
        {
          button: 'Aceptar'
        }),
    });
  }

}
