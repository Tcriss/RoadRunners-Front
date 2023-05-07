import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { SellCarComponent } from './components/sell-car/sell-car.component';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'vehicles' , component: VehiclesComponent},
  { path: 'sell-car', component: SellCarComponent },
  { path: 'vehicle/:id' , component: VehicleDetailsComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
