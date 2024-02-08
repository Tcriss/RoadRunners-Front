import { Component } from '@angular/core';
import { Link } from './core/interfaces/link';

@Component({
  selector: 'app-root',
  template: `
  <tui-root>
    <app-navbar>
        <ng-template #links let-link>
            @for (route of routes; track route.name) {
            <a class="link-item" [routerLink]='[route.path]' routerLinkActive="active">{{route.name}}</a>
            }
        </ng-template>
        <ng-template #linksSideNavBar let-link>
            @for (route of routes; track route.name) {
            <div class="nav-item" [routerLink]='[route.path]' routerLinkActive="nav-link-item-active">
                <i class="icon {{route.icon}}"></i>
                <a class="nav-link-item">{{route.name}}</a>
            </div>
            }
        </ng-template>
        <ng-template #optionLink let-link>
            @for (route of optionLinks; track route.name) {
            <a class="option-link" [routerLink]='[route.path]' routerLinkActive="active">
                <i class="icon {{route.icon}}"></i>
                {{route.name}}
            </a>
            }
        </ng-template>
    </app-navbar>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  </tui-root>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {

  routes: Link[] = [
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
    // {
    //   icon: 'fi fi-br-search',
    //   name: 'Acerca de',
    //   path: '/'
    // },
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
    {
      icon: 'fi fi-rr-settings',
      name: 'Cuenta',
      path: '/settings/account'
    },
  ];
}