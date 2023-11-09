import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
    animations: [
        trigger('expansion', [
            state('close', style({
                transform: 'translateX(-120px)',
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
export class SettingsComponent {

  expanded: boolean = false;

  constructor() {}
}
