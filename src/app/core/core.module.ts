import { NgModule } from '@angular/core';
import { CategoryComponent } from './components/category/category.component';
import { SearchComponent } from './components/search/search.component';
import { SellFormComponent } from './components/sell-form/sell-form.component';
import { SharedModule } from '../shared/shared.module';
import { EmptyComponent } from './components/empty/empty.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';

@NgModule({
  declarations: [
    CategoryComponent,
    SearchComponent,
    SellFormComponent,
    EmptyComponent,
    ComingSoonComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    CategoryComponent,
    SearchComponent,
    SellFormComponent,
    EmptyComponent,
    ComingSoonComponent
  ]
})
export class CoreModule { }
