import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { ProfileView } from './views/profile/profile.view';
import { AccountView } from './views/account/account.view';
import { UserPostsView } from './views/posts/posts.view';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      {
        title: 'Perfil',
        path: 'profile',
        component: ProfileView
      },
      {
        title: 'Cuenta',
        path: 'account',
        component: AccountView
      },
      {
        title: 'Publicaciones',
        path: 'my-posts',
        component: UserPostsView
      },
      {
        path: '**',
        redirectTo: '/profile',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
