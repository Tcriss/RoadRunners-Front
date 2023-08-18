import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { RouterStateSnapshot, TitleStrategy } from "@angular/router";

@Injectable({ providedIn: 'root'})
export class UpdatePageTitle extends TitleStrategy {

     constructor( private title: Title ) {
        super();
     }

     updateTitle( routeState: RouterStateSnapshot ) {
        const title = this.buildTitle(routeState);
        if (title !== undefined) {
            this.title.setTitle(`RoadRunners | ${title}`);
        }
     }
}