import { Component } from '@angular/core';
import { Options } from 'src/app/core/interfaces/options';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  links: Options[] = [
    {
      icon: 'fi fi-rr-user',
      name: 'Perfil',
      path: '/profile'
    },
    {
      icon: 'fi fi-rr-settings',
      name: 'Configuración',
      path: '/account'
    }
  ]
}
