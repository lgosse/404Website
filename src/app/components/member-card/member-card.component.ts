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

import { Member } from 'app/classes/member';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss'],
  animations: [
    trigger('memberCardState', [
      state('front', style({
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        transform: 'rotateY(0deg)',
        transformStyle: 'preserve-3d'
      })),
      state('back', style({
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        transform: 'rotateY(180deg)',
        transformStyle: 'preserve-3d'
      })),
      transition('back => front', [ animate(250, keyframes([
            style({
              boxShadow: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
              transform: 'rotateY(180deg)',
              transformStyle: 'preserve-3d'
            }),
            style({
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
              transform: 'rotateY(90deg)',
              transformStyle: 'preserve-3d'
            }),
            style({
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
              transform: 'rotateY(0deg)',
              transformStyle: 'preserve-3d'
            }),
          ])
        )
      ]),
      transition('front => back', [ animate(250, keyframes([
            style({
              boxShadow: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
              transform: 'rotateY(0deg)',
              transformStyle: 'preserve-3d'
            }),
            style({
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
              transform: 'rotateY(90deg)',
              transformStyle: 'preserve-3d'
            }),
            style({
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
              transform: 'rotateY(180deg)',
              transition: '0.15s',
              transformStyle: 'preserve-3d'
            }),
          ])
        )
      ]),
    ])
  ]
})

export class MemberCardComponent implements OnInit {

  @Input()
  member: Member;
  state: string;
  front: boolean;

  constructor() { }

  ngOnInit() {
    this.state = 'front';
    this.front = true;
  }

  flipCard(): void {

    setTimeout(() => {
      if (this.front === true) {
        this.front = false;
      } else {
        this.front = true;
      }
    }, 125);

    if (this.state === 'front') {
      this.state = 'back';
    } else if (this.state === 'back') {
      this.state = 'front';
    }
  }

}
