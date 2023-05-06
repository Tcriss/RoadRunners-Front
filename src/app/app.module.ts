import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TuiAlertModule, TuiDialogModule, TuiRootModule, TuiButtonModule, TuiThemeNightModule, TuiModeModule } from '@taiga-ui/core';
import { TuiTabsModule, TuiCarouselModule, TuiPaginationModule, TuiIslandModule, TuiPushModule } from '@taiga-ui/kit';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoryComponent } from './components/category/category.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { NavbarComponent } from './components/navbar/navbar.component';
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
    SellCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
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
    TuiModeModule,
    TuiPushModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
