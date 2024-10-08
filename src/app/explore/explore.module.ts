import { NgModule } from '@angular/core';
import { TuiCheckboxModule, TuiInputRangeModule, TuiRadioLabeledModule } from '@taiga-ui/kit';
import { RouterModule } from '@angular/router';

import { ExploreComponent } from './explore.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { BrandsComponent } from './components/brands/brands.component';
import { ProcessComponent } from './components/process/process.component';
import { TypesComponent } from './components/types/types.component';
import { LoadingScreenComponent } from '../common/components/loading-screen/loading-screen.component';
import { ComingSoonComponent } from '../common/components/coming-soon/coming-soon.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { HomeView } from './views/home/home.view';
import { VehiclesView } from './views/vehicles/vehicles.view';
import { VehicleDetailsView } from './views/vehicle-details/details.view';
import { SharedModule } from '../shared/shared.module';
import { routes } from './config/routes.config';
import { ImageGalleryComponent } from '../common/components/image-gallery/image-gallery.component';
import { CloudinaryRelativePath } from '../common/pipes/cloudinary-relative-path.pipe';

@NgModule({
  declarations: [
    ExploreComponent,
    HomeView,
    VehiclesView,
    VehicleDetailsView,
    ArticlesComponent,
    BrandsComponent,
    ProcessComponent,
    TypesComponent,
    FilterBarComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    LoadingScreenComponent,
    ComingSoonComponent,
    TuiCheckboxModule,
    TuiRadioLabeledModule,
    TuiInputRangeModule,
    ImageGalleryComponent,
    CloudinaryRelativePath
  ]
})
export class ExploreModule { }
