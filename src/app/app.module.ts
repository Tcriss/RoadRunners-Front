import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TuiAlertModule, TuiDialogModule, TuiRootModule, TuiButtonModule, TuiThemeNightModule, TuiModeModule, TuiLoaderModule, TuiDropdownModule, TuiDataListModule } from '@taiga-ui/core';
import { TuiTabsModule, TuiCarouselModule, TuiPaginationModule, TuiIslandModule, TuiPushModule, TuiInputModule, TuiDataListWrapperModule, TuiInputYearModule, TuiComboBoxModule, TuiAvatarModule } from '@taiga-ui/kit';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoryComponent } from './components/category/category.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SellCarComponent } from './components/sell-car/sell-car.component';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';
import { SellFormComponent } from './components/sell-form/sell-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TypesComponent } from './components/types/types.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VehiclesComponent,
    BrandsComponent,
    CategoryComponent,
    ArticlesComponent,
    NavbarComponent,
    SellCarComponent,
    VehicleDetailsComponent,
    SellFormComponent,
    TypesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
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
    TuiPushModule,
    TuiLoaderModule,
    TuiInputModule,
    TuiComboBoxModule,
    TuiDataListWrapperModule,
    TuiDropdownModule,
    TuiInputYearModule,
    TuiDataListModule,
    TuiAvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
