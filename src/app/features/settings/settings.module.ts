import { NgModule } from '@angular/core';
import { SettingsComponent } from './settings.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SettingsRoutingModule } from './settings-routing.module';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ComingSoonComponent } from 'src/app/core/components/coming-soon/coming-soon.component';
import { AccountView } from './views/account/account.view';
import { UserPostsView } from './views/posts/posts.view';
import { ProfileView } from './views/profile/profile.view';

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
