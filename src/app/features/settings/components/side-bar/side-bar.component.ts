import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Link } from 'src/app/core/interfaces/link';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
