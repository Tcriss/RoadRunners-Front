import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Link } from 'src/app/core/interfaces/link';
import { map, pipe } from 'rxjs';

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
      icon: 'fi fi-rr-settings',
      name: 'Configuración',
      path: '/settings/account'
    }
  ]
  user$ = this.auth.user$;
  code$ = this.user$.pipe(map((user) => JSON.stringify(user, null, 2)));
  title = 'Decoded ID Token';

  constructor( private auth: AuthService) {}
}
