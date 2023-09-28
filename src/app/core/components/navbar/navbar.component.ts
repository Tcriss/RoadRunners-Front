import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { NavBarLink } from 'src/app/core/interfaces/navbar-link';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [ 
    trigger('expansion', [
      state('close', style({
        transform: 'translateX(260px)', 
        opacity: 0.8,
        overflow: 'hidden',
      })),
      state('open', style({
        transform: 'translateX(0)',
        opacity: 1,
        overflow: 'visible',
      })),
      transition('close <=> open',
        animate('300ms ease')
      ),
    ])
  ]
})
export class NavbarComponent {
  
  @ViewChild('navBar') navBar!: ElementRef<any>;
  @ViewChild('img') img!: ElementRef<HTMLImageElement>;
  expanded: boolean = false;

  constructor ( private renderer: Renderer2) {}

  @HostListener('document:scroll') onScroll() {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
      this.renderer.addClass(this.navBar.nativeElement, 'scrolled');
    } else if (document.body.scrollTop < 5 || document.documentElement.scrollTop < 5) {
      this.renderer.removeClass(this.navBar.nativeElement, 'scrolled');
    }
  }
  
}
