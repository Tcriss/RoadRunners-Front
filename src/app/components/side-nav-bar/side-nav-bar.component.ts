import { Component, inject } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

import { SharedModule } from '../../shared/shared.module';
import { Link } from '../../core/interfaces';

@Component({
  selector: 'app-side-nav-bar',
  standalone: true,
  imports: [SharedModule, RouterLink, RouterLinkActive],
  templateUrl: './side-nav-bar.component.html',
  styleUrl: './side-nav-bar.component.scss',
  animations: [
    trigger('expansion', [
      state('close', style({
        transform: 'translateX(-300px)',
        opacity: 0.8,
      })),
      state('open', style({
        transform: 'translateX(0)',
        opacity: 1,
      })),
      transition('close <=> open',
        animate('400ms ease')
      ),
    ])
  ]
})
export class SideNavBarComponent {

  links: Link[] = [
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
      icon: 'fi fi-rr-megaphone',
      name: 'Publicar',
      path: '/publish/sell'
    },
  ];
  optionLinks: Link[] = [
    {
      icon: 'fi fi-rr-user',
      name: 'Pérfil',
      path: '/settings/profile'
    },
    {
      icon: 'fi fi-rr-car',
      name: 'Vehículos publicados',
      path: '/settings/my-posts'
    },
  ];

  expanded: boolean = false;
  open: boolean = false;
  index: number = 0;
  auth = inject(AuthService);
  user$ = this.auth.user$;

  onClick(): void {
	  this.open = false;
	  this.index = 1;
	}
}
