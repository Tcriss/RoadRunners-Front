import { Component } from '@angular/core';
import { NavBarLink } from 'src/app/core/interfaces/navbar-link';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  routes: NavBarLink[] = [
    { 
      name: 'Inicio', 
      path: '/home' 
    },
    { 
      name: 'Vehiculos', 
      path: '/vehicles' 
    },
    { 
      name: 'Publica tu vehiculo', 
      path: '/sell-car'
    }
  ];
}
