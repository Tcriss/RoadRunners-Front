import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreComponent } from './explore.component';
import { HomePage } from './pages/home/home.page';
import { VehiclesPage } from './pages/vehicles/vehicles.page';
import { VehicleDetailsPage } from './pages/vehicle-details/vehicle-details.page';
import { SearchPage } from './pages/search-page/search.page';
import { ArticlesComponent } from './components/articles/articles.component';
import { BrandsComponent } from './components/brands/brands.component';
import { ProcessComponent } from './components/process/process.component';
import { TypesComponent } from './components/types/types.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoadingScreenComponent } from 'src/app/core/components/loading-screen/loading-screen.component';
import { ComingSoonComponent } from 'src/app/core/components/coming-soon/coming-soon.component';

@NgModule({
  declarations: [
    ExploreComponent,
    HomePage,
    VehiclesPage,
    VehicleDetailsPage,
    SearchPage,
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
