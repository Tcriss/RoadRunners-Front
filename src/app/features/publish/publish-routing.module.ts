import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellCarView } from './views/sell-car/sell-car.view';

const routes: Routes = [
  {
    title: 'Publicar vehiculo',
    path: '**',
    component: SellCarView,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublishRoutingModule { }
