import { Component } from '@angular/core';
import { Link } from './core/interfaces/link';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
      icon: 'fi fi-br-search',
      name: 'Buscar', 
      path: '/explore/search'
    },
    {
      icon: 'fi fi-rr-megaphone',
      name: 'Publicar',
      path: '/publish'
    }
  ];

  options: Link[] = [
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
    { 
      icon: 'fi fi-rr-settings',
      name: 'Cuenta', 
      path: '/settings/account' 
    },
  ]
}
