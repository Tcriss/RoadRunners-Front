import { NgModule } from '@angular/core';
import { SearchComponent } from '../features/explore/components/search/search.component';
import { SharedModule } from '../shared/shared.module';
import { EmptyComponent } from './components/empty/empty.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    SearchComponent,
    EmptyComponent,
    ComingSoonComponent,
    FooterComponent,
    LoadingScreenComponent,
    NavbarComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    SearchComponent,
    EmptyComponent,
    ComingSoonComponent,
    FooterComponent,
    LoadingScreenComponent,
    NavbarComponent
  ]
})
export class CoreModule { }
