import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { TuiCurrencyPipeModule } from '@taiga-ui/addon-commerce';
import { TuiErrorModule } from '@taiga-ui/core';
import { TuiCarouselModule, TuiFieldErrorPipeModule, TuiInputFilesModule, TuiInputNumberModule, TuiInputPhoneModule, TuiToggleModule } from '@taiga-ui/kit';
import { TuiValidatorModule } from '@taiga-ui/cdk';

import { PublishComponent } from './publish.component';
import { VehicleInfoFormComponent } from './components/vehicle-info-form/vehicle-info-form.component';
import { ContactInfoFormComponent } from './components/contact-info-form/contact-info-form.component';
import { VehicleImagesFormComponent } from './components/vehicle-images-form/vehicle-images-form.component';
import { LoadingScreenComponent } from '../../common/components/loading-screen/loading-screen.component';
import { SellCarView } from './views/sell-car/sell-car.view';
import { EditCarView } from './views/edit-car/edit-car.view';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { routes } from './config/routes.config';

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
    RouterModule.forChild(routes),
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
