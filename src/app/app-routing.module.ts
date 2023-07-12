import { NgModule } from '@angular/core';
import { RouterModule, Routes, TitleStrategy } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { SellCarComponent } from './components/sell-car/sell-car.component';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';
import { UpdatePageTitle } from './shared/pageTitleStrategy';

const routes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent, 
    title: 'Inicio' 
  },
  { 
    path: 'vehicles' , 
    component: VehiclesComponent, 
    title: 'Vehiculos' 
  },
  { 
    path: 'sell-car', 
    component: SellCarComponent, 
    title: 'Publicar' 
  },
  { 
    path: 'vehicle/:id' , 
    component: VehicleDetailsComponent, 
    title: 'Detalles' 
  },
  { 
    path: '**', 
    redirectTo: '/home', 
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: TitleStrategy, useClass: UpdatePageTitle },
  ]
})
export class AppRoutingModule { }