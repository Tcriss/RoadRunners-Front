import { Routes } from '@angular/router';

import { loginGuard } from '../guards/login.guard';

export const routes: Routes = [
    {
      title: 'Explorar',
      path: 'explore',
      loadChildren: () => import('../../features/explore/explore.module').then(m => m.ExploreModule),
    },
    {
      title: 'Publicar',
      path: 'publish',
      loadChildren: () => import('../../features/publish/publish.module').then(m => m.PublishModule),
      canActivate: [loginGuard]
    },
    {
      title: 'Configuración',
      path: 'settings',
      loadChildren: () => import('../../features/settings/settings.module').then(m => m.SettingsModule),
      canActivate: [loginGuard]
    },
    {
      path: '**',
      redirectTo: '/explore/home',
      pathMatch: 'full'
    }
  ];