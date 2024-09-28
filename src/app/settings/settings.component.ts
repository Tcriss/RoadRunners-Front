import { Component } from '@angular/core';

@Component({
    selector: 'app-settings',
    template: `
    <div class="settings">
        <app-side-bar class="side-bar" #sideBar></app-side-bar>
        <div class="toolbar">
            <app-side-bar></app-side-bar>
        </div>
        <div class="content">
            <router-outlet></router-outlet>
        </div>
    </div>
    `,
    styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {

    expanded: boolean = false;
}
