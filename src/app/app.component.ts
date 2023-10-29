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
      icon: 'tuiIconUser',
      name: 'Pérfil', 
      path: '/settings/profile' 
    },
    { 
      icon: 'tuiIconSettings',
      name: 'Cuenta', 
      path: '/settings/account' 
    },
  ]
}
