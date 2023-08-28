import { NgModule } from '@angular/core';
import { CategoryComponent } from './components/category/category.component';
import { SearchComponent } from './components/search/search.component';
import { SellFormComponent } from './components/sell-form/sell-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CategoryComponent,
    SearchComponent,
    SellFormComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    CategoryComponent,
    SearchComponent,
    SellFormComponent
  ]
})
export class CoreModule { }
