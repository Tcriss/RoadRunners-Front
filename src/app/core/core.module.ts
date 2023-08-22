import { NgModule } from '@angular/core';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoryComponent } from './components/category/category.component';
import { SearchComponent } from './components/search/search.component';
import { SellFormComponent } from './components/sell-form/sell-form.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    BrandsComponent,
    CategoryComponent,
    SearchComponent,
    SellFormComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    BrandsComponent,
    CategoryComponent,
    SearchComponent,
    SellFormComponent
  ]
})
export class CoreModule { }
