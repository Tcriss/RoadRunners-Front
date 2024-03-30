import { animate, style, transition, trigger } from "@angular/animations";

export const reveal: unknown = trigger('reveal', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms ease-out', style({ opacity: 1 }))
    ]),
    transition(':leave', [
        style({ opacity: 1 }),
        animate('600ms ease-in', style({ opacity: 0 }))
    ])
]);