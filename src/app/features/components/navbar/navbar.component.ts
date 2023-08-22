import { Component } from '@angular/core';
import { NavBarLink } from 'src/app/core/interfaces/navbar-link';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('expansion', [
      state('close', style({
        width: '0', 
        overflow: 'hidden',
      })),
      state('open', style({
        overflow: 'visible',
      })),
      transition('close <=> open',
        animate('400ms')
      ),
    ])
  ]
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

  expanded: boolean = false;
}
