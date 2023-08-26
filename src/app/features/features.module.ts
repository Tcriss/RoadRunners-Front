import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';
import { HomePage } from './pages/home/home.page';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { SellCarPage } from './pages/sell-car/sell-car.page';
import { VehiclesPage } from './pages/vehicles/vehicles.page';
import { VehicleDetailsPage } from './pages/vehicle-details/vehicle-details.page';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TypesComponent } from './components/types/types.component';
import { FeaturesComponent } from './features.component';
import { ProcessComponent } from './components/process/process.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from '../shared/interceptors/spinner.interceptor';

@NgModule({
  declarations: [
    FeaturesComponent,
    HomePage,
    SellCarPage,
    VehiclesPage,
    VehicleDetailsPage,
    NavbarComponent,
    ArticlesComponent,
    CarouselComponent,
    TypesComponent,
    ProcessComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    CoreModule,
    SharedModule,
  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: LoaderInterceptor, 
      multi: true
    }
  ]
})
export class FeaturesModule { }
