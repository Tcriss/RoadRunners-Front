import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SellCarView } from './views/sell-car/sell-car.view';
import { EditCarView } from './views/edit-car/edit-car.view';

const routes: Routes = [
  {
    title: 'Publicar vehiculo',
    path: 'sell',
    component: SellCarView,
  },
  {
    title: 'Editar vehiculo',
    path: 'edit/:id',
    component: EditCarView,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublishRoutingModule { }
