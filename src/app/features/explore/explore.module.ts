import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreComponent } from './explore.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { BrandsComponent } from './components/brands/brands.component';
import { ProcessComponent } from './components/process/process.component';
import { TypesComponent } from './components/types/types.component';
import { HomeView } from './views/home/home.view';
import { VehiclesView } from './views/vehicles/vehicles.view';
import { VehicleDetailsView } from './views/vehicle-details/details.view';
import { SharedModule } from '../../shared/shared.module';
import { LoadingScreenComponent } from '../../core/components/loading-screen/loading-screen.component';
import { ComingSoonComponent } from '../../core/components/coming-soon/coming-soon.component';

@NgModule({
  declarations: [
    ExploreComponent,
    HomeView,
    VehiclesView,
    VehicleDetailsView,
    ArticlesComponent,
    BrandsComponent,
    ProcessComponent,
    TypesComponent
  ],
  imports: [
    CommonModule,
    ExploreRoutingModule,
    SharedModule,
    LoadingScreenComponent,
    ComingSoonComponent
  ]
})
export class ExploreModule { }
