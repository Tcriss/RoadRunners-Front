import { Component, ElementRef, Inject, Renderer2, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from "@angular/animations";

@Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
    animations: [
        trigger('expansion', [
            state('close', style({
                transform: 'translateX(-300px)',
                opacity: 0.5,
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

    constructor(private renderer: Renderer2) { }
}
