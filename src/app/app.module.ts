import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TuiAlertModule, TuiDialogModule, TuiRootModule, TuiButtonModule, TuiThemeNightModule, TuiModeModule } from '@taiga-ui/core';
import { TuiTabsModule, TuiCarouselModule, TuiPaginationModule, TuiIslandModule } from '@taiga-ui/kit';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoryComponent } from './components/category/category.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AlertsComponent } from './services/alerts/alerts/alerts.component';
import { BackComponent } from './services/back/back/back.component';
import { SellCarComponent } from './components/sell-car/sell-car.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VehiclesComponent,
    BrandsComponent,
    CategoryComponent,
    ArticlesComponent,
    NavbarComponent,
    AlertsComponent,
    BackComponent,
    SellCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiAlertModule,
    TuiDialogModule,
    AppRoutingModule,
    TuiTabsModule,
    TuiCarouselModule,
    TuiPaginationModule,
    TuiIslandModule,
    TuiButtonModule,
    TuiThemeNightModule, 
    TuiModeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
