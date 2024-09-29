import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { UserPostsView } from './views/posts/posts.view';
import { ProfileView } from './views/profile/profile.view';
import { SharedModule } from '../shared/shared.module';
import { routes } from './config/routes.config';

@NgModule({
  declarations: [
    SettingsComponent,
    ProfileView,
    SideBarComponent,
    UserPostsView
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ],
})
export class SettingsModule { }
