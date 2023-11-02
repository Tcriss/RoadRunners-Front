import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellCarPage } from './pages/sell-car/sell-car.page';
import { VehicleInfoFormComponent } from './components/vehicle-info-form/vehicle-info-form.component';
import { VehicleImagesFormComponent } from './components/vehicle-images-form/vehicle-images-form.component';
import { ContactInfoFormComponent } from './components/contact-info-form/contact-info-form.component';

const routes: Routes = [
  {
    title: 'Publicar vehiculo',
    path: '**',
    component: SellCarPage,
    children: [
      {
        path: 'vehicle-info',
        component: VehicleInfoFormComponent
      },
      {
        path: 'vehicle-images',
        component: VehicleImagesFormComponent
      },
      {
        path: 'vehicle-contact',
        component: ContactInfoFormComponent
      },
      {
        path: '**',
        redirectTo: '/vehicle-info'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublishRoutingModule { }
