import {
    Component,
    OnInit,
    Input,
    trigger,
    state,
    style,
    transition,
    animate,
    keyframes
} from '@angular/core';

import { Commitment } from 'app/classes/program';

@Component({
    selector: 'app-program-card',
    templateUrl: './program-card.component.html',
    styleUrls: ['./program-card.component.scss'],
    animations: [
        trigger('cardState', [
            state('expanded', style({
                maxHeight: '500px'
            })),
            state('collapsed', style({
                maxHeight: '0'
            })),
            transition('collapsed => expanded', [
                animate(300, keyframes([
                    style({maxHeight: '0', offset: 0}),
                    style({maxHeight: '500px', offset: 0.5})
                ]))
            ]),
            transition('expanded => collapsed', [
                animate(300, keyframes([
                    style({maxHeight: '500px', offset: 0}),
                    style({maxHeight: '0', offset: 0.5})
                ]))
            ])
        ])
    ]
})
export class ProgramCardComponent implements OnInit {

    cardState: string = 'collapsed';

    @Input()
    commitment: Commitment;

    constructor() { }

    toggleCardState(): void {
        if (this.cardState === 'collapsed') {
            this.cardState = 'expanded';
        } else {
            this.cardState = 'collapsed';
        }
    }

    ngOnInit() {
    }

}
