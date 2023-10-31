import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Link } from 'src/app/core/interfaces/link';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  links: Link[] = [
    {
      icon: 'fi fi-rr-user',
      name: 'Perfil',
      path: '/settings/profile'
    },
    {
      icon: 'fi fi-rr-car',
      name: 'Mis publicados',
      path: '/settings/my-posts'
    },
    {
      icon: 'fi fi-rr-settings',
      name: 'Configuración',
      path: '/settings/account'
    }
  ];

  constructor() {}
}
