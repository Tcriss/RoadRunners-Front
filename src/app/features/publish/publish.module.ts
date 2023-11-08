import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublishRoutingModule } from './publish-routing.module';
import { PublishComponent } from './publish.component';
import { SellCarPage } from './pages/sell-car/sell-car.page';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { VehicleInfoFormComponent } from './components/vehicle-info-form/vehicle-info-form.component';
import { ContactInfoFormComponent } from './components/contact-info-form/contact-info-form.component';
import { TuiCarouselModule, TuiInputNumberModule } from '@taiga-ui/kit';
import { TuiCurrencyPipeModule } from '@taiga-ui/addon-commerce';
import { VehicleImagesFormComponent } from './components/vehicle-images-form/vehicle-images-form.component';

@NgModule({
  declarations: [
    PublishComponent,
    SellCarPage,
    VehicleInfoFormComponent,
    ContactInfoFormComponent,
    VehicleImagesFormComponent,
  ],
  imports: [
    CommonModule,
    PublishRoutingModule,
    CoreModule,
    SharedModule,
    TuiCarouselModule,
    TuiInputNumberModule,
    TuiCurrencyPipeModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PublishModule { }
