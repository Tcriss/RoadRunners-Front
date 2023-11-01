import { NgModule } from '@angular/core';
import { RouterModule, Routes, TitleStrategy } from '@angular/router';
import { UpdatePageTitle } from './core/services/pageTitleStrategy';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  {
    title: 'Explorar',
    path: 'explore',
    loadChildren: () => import('./features/explore/explore.module').then(m => m.ExploreModule)
  },
  {
    title: 'Publicar',
    path: 'publish',
    loadChildren: () => import('./features/publish/publish.module').then(m => m.PublishModule),
    canActivate: [AuthGuard]
  },
  {
    title: 'Configuración',
    path: 'settings',
    loadChildren: () => import('./features/settings/settings.module').then(m => m.SettingsModule),
    canActivate: [AuthGuard]
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