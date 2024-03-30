import { animate, style, transition, trigger } from "@angular/animations";

export const showHide: unknown = trigger('showHide', [
    transition(':enter', [
        style({ trannsform: 'scale(0.90)' }),
        animate('400ms ease-out', style({ transform: 'scale(1)' }))
    ]),
    transition(':leave', [
        style({ trannsform: 'scale(1)' }),
        animate('400ms ease-in', style({ transform: 'scale(0.90)' }))
    ])
]);