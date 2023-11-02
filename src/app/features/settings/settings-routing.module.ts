import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePage } from './pages/profile/profile.page';
import { AccountPage } from './pages/account/account.page';
import { SettingsComponent } from './settings.component';
import { UserPostsPage } from './pages/posts/user-posts.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
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
        title: 'Publicaciones',
        path: 'my-posts',
        component: UserPostsPage
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
