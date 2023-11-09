import { Component, Inject, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('expansion', [
      state('close', style({
        transform: 'translateX(300px)',
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
export class NavbarComponent {

  @ViewChild('navBar') navBar!: ElementRef;
  @ViewChild('img') img!: ElementRef<HTMLImageElement>;
  expanded: boolean = false;
  open: boolean = false;
  mobileOpen: boolean = false;
  index: number = 0;
  user$ = this.auth.user$;

  constructor (
    public auth: AuthService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) public document: Document
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
