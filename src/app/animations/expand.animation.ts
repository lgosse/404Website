import {style, state, animate, transition, trigger} from '@angular/core';

export const ExpandAnimation =
    trigger('expand', [
        state('collapsed', style({
            opacity      : 0,
            maxHeight    : 0
        })),
        state('expanded', style({
            opacity   : 0.54,
            maxHeight : '500px'
        })),
        transition('collapsed => expanded', [
            animate('300ms ease-in-out')
        ]),
        transition('expanded => collapsed', [
            animate('300ms ease-in-out')
        ])
    ])