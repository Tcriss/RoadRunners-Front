import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublishRoutingModule } from './publish-routing.module';
import { PublishComponent } from './publish.component';
import { SellCarPage } from './pages/sell-car/sell-car.page';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { VehicleInfoFormComponent } from './components/vehicle-info-form/vehicle-info-form.component';
import { ContactInfoFormComponent } from './components/contact-info-form/contact-info-form.component';
import { VehicleImagesFormComponent } from './components/vehicle-images-form/vehicle-images-form.component';

@NgModule({
  declarations: [
    PublishComponent,
    SellCarPage,
    VehicleInfoFormComponent,
    ContactInfoFormComponent,
    VehicleImagesFormComponent
  ],
  imports: [
    CommonModule,
    PublishRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class PublishModule { }
