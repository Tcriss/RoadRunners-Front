import { NgModule } from '@angular/core';
import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { AccountView } from './views/account/account.view';
import { UserPostsView } from './views/posts/posts.view';
import { ProfileView } from './views/profile/profile.view';
import { SharedModule } from '../../shared/shared.module';
import { ComingSoonComponent } from '../../core/components/coming-soon/coming-soon.component';

@NgModule({
  declarations: [
    SettingsComponent,
    ProfileView,
    SideBarComponent,
    UserPostsView,
    AccountView
  ],
  imports: [
    SettingsRoutingModule,
    SharedModule,
    ComingSoonComponent
  ]
})
export class SettingsModule { }
