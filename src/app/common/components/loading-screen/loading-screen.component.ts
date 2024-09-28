import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-loading-screen',
  template: `
    <div class="overlay" [style]="{height: componentHeight}">
      <img class="logo" src="./assets/images/RR-logo-dark.png">
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  `,
  styleUrls: ['./loading-screen.component.scss'],
})
export class LoadingScreenComponent {

  @Input() componentHeight: string = '';

  constructor() {}
}