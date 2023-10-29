import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreComponent } from './explore.component';
import { HomePage } from './pages/home/home.page';
import { VehiclesPage } from './pages/vehicles/vehicles.page';
import { VehicleDetailsPage } from './pages/vehicle-details/vehicle-details.page';
import { SearchPage } from './pages/search-page/search.page';
import { ContactPage } from './pages/contact/contact.page';
import { ArticlesComponent } from './components/articles/articles.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProcessComponent } from './components/process/process.component';
import { TypesComponent } from './components/types/types.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    ExploreComponent,
    HomePage,
    VehiclesPage,
    VehicleDetailsPage,
    SearchPage,
    ContactPage,
    ArticlesComponent,
    BrandsComponent,
    CarouselComponent,
    ProcessComponent,
    TypesComponent
  ],
  imports: [
    CommonModule,
    ExploreRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class ExploreModule { }
