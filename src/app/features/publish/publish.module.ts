import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublishRoutingModule } from './publish-routing.module';
import { PublishComponent } from './publish.component';
import { VehicleInfoFormComponent } from './components/vehicle-info-form/vehicle-info-form.component';
import { ContactInfoFormComponent } from './components/contact-info-form/contact-info-form.component';
import { TuiCarouselModule, TuiFieldErrorPipeModule, TuiInputFilesModule, TuiInputNumberModule, TuiInputPhoneModule, TuiMarkerIconModule, TuiToggleModule } from '@taiga-ui/kit';
import { TuiCurrencyPipeModule } from '@taiga-ui/addon-commerce';
import { VehicleImagesFormComponent } from './components/vehicle-images-form/vehicle-images-form.component';
import { SellCarView } from './views/sell-car/sell-car.view';
import { EditCarView } from './views/edit-car/edit-car.view';
import { SharedModule } from '../../shared/shared.module';
import { LoadingScreenComponent } from '../../core/components/loading-screen/loading-screen.component';
import { TuiErrorModule, TuiLinkModule } from '@taiga-ui/core';
import { TuiValidatorModule } from '@taiga-ui/cdk';

@NgModule({
  declarations: [
    PublishComponent,
    SellCarView,
    EditCarView,
    VehicleInfoFormComponent,
    ContactInfoFormComponent,
    VehicleImagesFormComponent,
  ],
  imports: [
    CommonModule,
    PublishRoutingModule,
    SharedModule,
    TuiCarouselModule,
    TuiInputNumberModule,
    TuiCurrencyPipeModule,
    LoadingScreenComponent,
    TuiInputPhoneModule,
    TuiToggleModule,
    TuiInputFilesModule,
    TuiValidatorModule,
    TuiErrorModule,
    TuiFieldErrorPipeModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PublishModule { }
