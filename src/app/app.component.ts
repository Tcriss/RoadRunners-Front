import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TuiAlertModule, TuiDialogModule, TuiRootModule } from '@taiga-ui/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TuiPromptModule } from '@taiga-ui/kit';

import { FooterComponent } from './common/components/footer/footer.component';
import { NavbarComponent } from './common/components/navbar/navbar.component';
import { Link } from './common/interfaces';

@Component({
  standalone: true,
  imports: [
    TuiRootModule,
    NavbarComponent,
    FooterComponent,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    TuiAlertModule,
    TuiPromptModule,
    TuiDialogModule,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  routes: Link[] = [
    {
      icon: 'fi fi-bs-home',
      name: 'Inicio',
      path: '/explore/home'
    },
    {
      icon: 'fi fi-rr-car',
      name: 'Vehiculos',
      path: '/explore/vehicles'
    },
    {
      icon: 'fi fi-rr-megaphone',
      name: 'Publicar',
      path: '/publish/sell'
    },
    // {
    //   icon: 'fi fi-br-search',
    //   name: 'Acerca de',
    //   path: '/'
    // },
  ];
  
  optionLinks: Link[] = [
    {
      icon: 'fi fi-rr-user',
      name: 'Pérfil',
      path: '/settings/profile'
    },
    {
      icon: 'fi fi-rr-car',
      name: 'Vehículos publicados',
      path: '/settings/my-posts'
    },
    // {
    //   icon: 'fi fi-rr-settings',
    //   name: 'Cuenta',
    //   path: '/settings/account'
    // },
  ];
}