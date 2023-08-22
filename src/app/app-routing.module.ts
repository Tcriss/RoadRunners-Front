import { NgModule } from '@angular/core';
import { RouterModule, Routes, TitleStrategy } from '@angular/router';
import { UpdatePageTitle } from './core/services/pageTitleStrategy';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { 
      provide: TitleStrategy, 
      useClass: UpdatePageTitle 
    },
  ]
})
export class AppRoutingModule { }