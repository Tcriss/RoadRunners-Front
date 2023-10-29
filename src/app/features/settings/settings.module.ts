import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfilePage } from './pages/profile/profile.page';
import { SettingsRoutingModule } from './settings-routing.module';

@NgModule({
  declarations: [
    SettingsComponent,
    ProfilePage,
  ],
  imports: [
    SettingsRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class SettingsModule { }
