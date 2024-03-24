import { Component } from '@angular/core';
import { TuiRootModule } from '@taiga-ui/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Link } from './core/interfaces';

@Component({
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    RouterModule,
    TuiRootModule
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
  ];
}