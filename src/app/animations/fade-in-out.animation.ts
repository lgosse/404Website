import {style, state, animate, transition, trigger} from '@angular/core';

export const FadeInOutAnimation =
    trigger('fadeInOut', [
        state('hovered', style({
            opacity: 1
        })),
        state('nothovered', style({
            opacity: 0
        })),
        transition('hovered => nothovered', [
            animate('300ms ease-in-out')
        ]),
        transition('nothovered => hovered', [
            animate('300ms ease-in-out')
        ])
    ])