import { AnimationTriggerMetadata, transition, animate, animateChild, group, query, style, trigger } from "@angular/animations";

export const slideInAnimation: AnimationTriggerMetadata = trigger('routeAnimations', [
    transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
            style({
                'z-index': 2,
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
            })
        ]),
        query(':enter', [style({ opacity: 1 })]),
        query(':leave', animateChild(), { optional: true }),
        group([
            query(':leave', [animate('400ms ease-out', style({ opacity: 0 }))], { optional: true }),
            query(':enter', [animate('400ms ease-out', style({ opacity: 1 }))]),
        ]),
        query(':enter', animateChild()),
    ]),
]);