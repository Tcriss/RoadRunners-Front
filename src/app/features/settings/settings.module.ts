import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfilePage } from './pages/profile/profile.page';
import { SettingsRoutingModule } from './settings-routing.module';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { UserPostsPage } from './pages/posts/user-posts.page';

@NgModule({
  declarations: [
    SettingsComponent,
    ProfilePage,
    SideBarComponent,
    UserPostsPage,
  ],
  imports: [
    SettingsRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class SettingsModule { }
