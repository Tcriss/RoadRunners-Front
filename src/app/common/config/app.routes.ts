import { Routes } from '@angular/router';
import { loginGuard } from '../guards/login.guard';

export const routes: Routes = [
    {
      title: 'Explorar',
      path: 'explore',
      loadChildren: () => import('../../../app/modules/explore/explore.module').then(m => m.ExploreModule)
    },
    {
      title: 'Publicar',
      path: 'publish',
      loadChildren: () => import('../../../app/modules/publish/publish.module').then(m => m.PublishModule),
      canActivate: [loginGuard]
    },
    {
      title: 'Configuración',
      path: 'settings',
      loadChildren: () => import('../../../app/modules/settings/settings.module').then(m => m.SettingsModule),
      canActivate: [loginGuard]
    },
    {
      path: '**',
      redirectTo: '/explore/home',
      pathMatch: 'full'
    }
  ];