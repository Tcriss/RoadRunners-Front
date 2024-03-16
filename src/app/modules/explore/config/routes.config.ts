import { Routes } from '@angular/router';

import { ExploreComponent } from '../explore.component';
import { HomeView } from '../views/home/home.view';
import { VehiclesView } from '../views/vehicles/vehicles.view';
import { VehicleDetailsView } from '../views/vehicle-details/details.view';

export const routes: Routes = [
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