import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  routes:Array<{name: string, path:string}> = [
    { name: 'Inicio', path: '/home' },
    { name: 'Vehiculos', path: '/vehicles' },
    { name: 'Publica tu vehiculo', path: '/sell-car'}
  ];
}
