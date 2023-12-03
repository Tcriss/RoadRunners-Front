import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { VehiclesPage } from './pages/vehicles/vehicles.page';
import { VehicleDetailsPage } from './pages/vehicle-details/vehicle-details.page';
import { SearchPage } from './pages/search-page/search.page';
import { ExploreComponent } from './explore.component';

const routes: Routes = [
  {
    path: '',
    component: ExploreComponent,
    children: [
      {
        title: 'Inicio',
        path: 'home',
        component: HomePage
      },
      {
        title: 'Vehículos',
        path: 'vehicles',
        component: VehiclesPage
      },
      {
        title: 'Detalles del vehículo',
        path: 'vehicle/:id',
        component: VehicleDetailsPage
      },
      {
        title: 'Busqueda',
        path: 'search',
        component: SearchPage
      },
      {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreRoutingModule { }
