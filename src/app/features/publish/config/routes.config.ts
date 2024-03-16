import { Routes } from "@angular/router";

import { EditCarView } from "../views/edit-car/edit-car.view";
import { SellCarView } from "../views/sell-car/sell-car.view";

export const routes: Routes = [
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