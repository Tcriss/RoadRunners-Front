import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { SellCarComponent } from './components/sell-car/sell-car.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'vehicles' , component: VehiclesComponent},
  { path: 'sell-car', component: SellCarComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
