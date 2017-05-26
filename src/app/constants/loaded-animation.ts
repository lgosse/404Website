import { animate, transition, state, trigger, style } from '@angular/core';

export const LoadedAnimation = 
    trigger('loadedState', [
        state('loaded', style({
            transform: 'translateY(0)',
            opacity: 1
        })),
        state('loading', style({
            transform: 'translateY(50px)',
            opacity: 0
        })),
        transition('loading => loaded', [
            animate('300ms ease-out')
        ])
    ]);