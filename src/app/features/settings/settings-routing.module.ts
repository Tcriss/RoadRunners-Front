import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePage } from './pages/profile/profile.page';
import { AccountPage } from './pages/account/account.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage,
    children: [
      {
        title: 'Perfil',
        path: 'profile',
        component: ProfilePage
      },
      {
        title: 'Cuenta',
        path: 'account',
        component: AccountPage
      },
      {
        path: '**',
        redirectTo: '/profile',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
