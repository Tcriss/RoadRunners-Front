import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TuiAlertModule, TuiDialogModule, TuiRootModule, TuiButtonModule, TuiThemeNightModule, TuiModeModule, TuiLoaderModule, TuiDropdownModule, TuiDataListModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiTabsModule, TuiCarouselModule, TuiPaginationModule, TuiIslandModule, TuiPushModule, TuiInputModule, TuiDataListWrapperModule, TuiInputYearModule, TuiComboBoxModule, TuiAvatarModule } from '@taiga-ui/kit';
import { TuiMoneyModule } from '@taiga-ui/addon-commerce';

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
import { LoaderInterceptor } from './shared/interceptors/spinner.interceptor';
import { SearchComponent } from './components/search/search.component';
import { CarouselComponent } from './components/carousel/carousel.component';

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
    TypesComponent,
    SearchComponent,
    CarouselComponent
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
    TuiPaginationModule,
    TuiButtonModule,
    TuiThemeNightModule, 
    TuiModeModule,
    TuiPushModule,
    TuiInputModule,
    TuiComboBoxModule,
    TuiDataListWrapperModule,
    TuiDropdownModule,
    TuiInputYearModule,
    TuiDataListModule,
    TuiLoaderModule,
    TuiTextfieldControllerModule,
    TuiMoneyModule,
    TuiCarouselModule,
    TuiIslandModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
