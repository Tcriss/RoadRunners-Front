import { RouterModule, Routes, TitleStrategy } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomePage } from "./pages/home/home.page";
import { VehiclesPage } from "./pages/vehicles/vehicles.page";
import { VehicleDetailsPage } from "./pages/vehicle-details/vehicle-details.page";
import { SellCarPage } from "./pages/sell-car/sell-car.page";
import { UpdatePageTitle } from "../core/services/pageTitleStrategy";
import { FeaturesComponent } from "./features.component";

const routes: Routes = [
    {
        path: '',
        component: FeaturesComponent,
        children: [
            {
                path: 'home',
                component: HomePage,
                title: 'Inicio'
            },
            {
                path: 'vehicles/:brand',
                component: VehiclesPage,
                title: 'Vehiculos'
            },
            {
                path: 'vehicle/:id',
                component: VehicleDetailsPage,
                title: 'Información del vehículo'
            },
            {
                path: 'sell-car',
                component: SellCarPage,
                title: 'Vender vehículo'
            }
        ]
    }
];
@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
        {
            provide: TitleStrategy,
            useClass: UpdatePageTitle
        }
    ]
})
export class FeaturesRoutingModule {}
