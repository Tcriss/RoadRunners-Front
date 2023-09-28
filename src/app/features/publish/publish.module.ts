import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublishRoutingModule } from './publish-routing.module';
import { PublishComponent } from './publish.component';
import { SellCarPage } from './pages/sell-car/sell-car.page';
import { SellFormComponent } from './components/sell-form/sell-form.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PublishComponent,
    SellCarPage,
    SellFormComponent
  ],
  imports: [
    CommonModule,
    PublishRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class PublishModule { }
