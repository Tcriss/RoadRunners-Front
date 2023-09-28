import { Component } from '@angular/core';
import { NavBarLink } from './core/interfaces/navbar-link';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  routes: NavBarLink[] = [
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
}
