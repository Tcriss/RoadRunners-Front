import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from './explore.component';
import { HomeView } from './views/home/home.view';
import { VehiclesView } from './views/vehicles/vehicles.view';
import { VehicleDetailsView } from './views/vehicle-details/details.view';

const routes: Routes = [
  {
    path: '',
    component: ExploreComponent,
    children: [
      {
        title: 'Inicio',
        path: 'home',
        component: HomeView
      },
      {
        title: 'Vehículos',
        path: 'vehicles',
        component: VehiclesView
      },
      {
        title: 'Detalles del vehículo',
        path: 'vehicle/:id',
        component: VehicleDetailsView
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
