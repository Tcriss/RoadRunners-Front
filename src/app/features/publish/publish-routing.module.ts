import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellCarPage } from './pages/sell-car/sell-car.page';

const routes: Routes = [
  {
    path: '**',
    component: SellCarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublishRoutingModule { }
