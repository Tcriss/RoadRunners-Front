import { Routes } from "@angular/router";

import { SettingsComponent } from "../settings.component";
import { ProfileView } from "../views/profile/profile.view";
import { UserPostsView } from "../views/posts/posts.view";

export const routes: Routes = [
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
