import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  routes:Array<{name: string, path:string}> = [
    { name: 'Home', path: '/home' },
    { name: 'Vehicles', path: '/vehicles' },
    { name: 'Sell your vehicle', path: '/sell-car'}
  ];
}
