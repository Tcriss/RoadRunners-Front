import { Routes } from '@angular/router';
import { loginGuard } from '../guards/login.guard';
import { authGuardFn } from '@auth0/auth0-angular';

export const routes: Routes = [
    {
      title: 'Explorar',
      path: 'explore',
      loadChildren: () => import('../../../app/features/explore/explore.module').then(m => m.ExploreModule),
    },
    {
      title: 'Publicar',
      path: 'publish',
      loadChildren: () => import('../../../app/features/publish/publish.module').then(m => m.PublishModule),
      canActivate: [loginGuard]
    },
    {
      title: 'Configuración',
      path: 'settings',
      loadChildren: () => import('../../../app/features/settings/settings.module').then(m => m.SettingsModule),
      canActivate: [loginGuard]
    },
    {
      path: '**',
      redirectTo: '/explore/home',
      pathMatch: 'full'
    }
  ];