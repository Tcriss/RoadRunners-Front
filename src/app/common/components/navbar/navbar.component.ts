import { Component, Inject, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';
import { Link } from '../../../core/interfaces';
import { SideNavBarComponent } from '../side-nav-bar/side-nav-bar.component';

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [SharedModule, RouterLink, RouterLinkActive, SideNavBarComponent],
})
export class NavbarComponent {

  @ViewChild('navBar') navBar!: ElementRef;
  @ViewChild('img') img!: ElementRef<HTMLImageElement>;

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

  open: boolean = false;
  index: number = 0;
  user$ = this.auth.user$;

  constructor (
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService,
    private renderer: Renderer2,
  ) {}

	onClick(): void {
	  this.open = false;
	  this.index = 1;
	}

  @HostListener('document:scroll') onScroll() {
    if (document.body.scrollTop > 2 || document.documentElement.scrollTop > 2) {
      this.renderer.addClass(this.navBar.nativeElement, 'scrolled');
    } else if (document.body.scrollTop < 5 || document.documentElement.scrollTop < 5) {
      this.renderer.removeClass(this.navBar.nativeElement, 'scrolled');
    }
  }
}
