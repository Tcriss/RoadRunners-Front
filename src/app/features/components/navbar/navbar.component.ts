import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavBarLink } from 'src/app/core/interfaces/navbar-link';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('expansion', [
      state('close', style({
        transform: 'translateX(260px)', 
        opacity: 0.8,
        overflow: 'hidden',
      })),
      state('open', style({
        transform: 'translateX(0)',
        opacity: 1,
        overflow: 'visible',
      })),
      transition('close <=> open',
        animate('300ms ease')
      ),
    ])
  ]
})
export class NavbarComponent {

  @ViewChild('img') img!: ElementRef<HTMLImageElement>;
  routes: NavBarLink[] = [
    { 
      name: 'Inicio', 
      path: '/home' 
    },
    { 
      name: 'Vehiculos', 
      path: '/vehicles/all' 
    },
    { 
      name: 'Publica tu vehiculo', 
      path: '/sell-car'
    }
  ];
  expanded: boolean = false;
}
