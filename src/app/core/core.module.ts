import { NgModule } from '@angular/core';
import { CategoryComponent } from './components/category/category.component';
import { SearchComponent } from './components/search/search.component';
import { SellFormComponent } from './components/sell-form/sell-form.component';
import { SharedModule } from '../shared/shared.module';
import { EmptyComponent } from './components/empty/empty.component';

@NgModule({
  declarations: [
    CategoryComponent,
    SearchComponent,
    SellFormComponent,
    EmptyComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    CategoryComponent,
    SearchComponent,
    SellFormComponent,
    EmptyComponent
  ]
})
export class CoreModule { }
