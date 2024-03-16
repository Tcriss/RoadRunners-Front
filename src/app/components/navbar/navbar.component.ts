import { Component, Inject, ElementRef, HostListener, Renderer2, ViewChild, TemplateRef, ContentChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { TuiDropdownHostModule } from '@taiga-ui/cdk';

import { SharedModule } from '../../../modules/shared/shared.module';

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [SharedModule],
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
export class NavbarComponent {

  @ViewChild('navBar') navBar!: ElementRef;
  @ViewChild('img') img!: ElementRef<HTMLImageElement>;
  @ContentChild('links') links!: TemplateRef<unknown>;
  @ContentChild('linksSideNavBar') navLinks!: TemplateRef<unknown>;
  @ContentChild('optionLink') optionLinks!: TemplateRef<unknown>;

  expanded: boolean = false;
  open: boolean = false;
  mobileOpen: boolean = false;
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