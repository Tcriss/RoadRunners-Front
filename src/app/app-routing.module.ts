import { NgModule } from '@angular/core';
import { RouterModule, Routes, TitleStrategy } from '@angular/router';
import { UpdatePageTitle } from './core/services/pageTitleStrategy';

const routes: Routes = [
  {
    title: 'Explorar',
    path: 'explore',
    loadChildren: () => import('./features/explore/explore.module').then(m => m.ExploreModule)
  },
  {
    title: 'Publicar',
    path: 'publish',
    loadChildren: () => import('./features/publish/publish.module').then(m => m.PublishModule)
  },
  {
    title: 'Sesión',
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    redirectTo: '/explore/home',
    pathMatch: 'full'
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