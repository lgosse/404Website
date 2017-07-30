import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ExpandAnimation } from 'app/animations/expand.animation';

@Component({
    selector    : 'app-picture-card',
    templateUrl : './picture-card.component.html',
    styleUrls   : ['./picture-card.component.scss'],
    animations  : [ ExpandAnimation ]
})
export class PictureCardComponent implements OnInit {

    @Input()
    public imgUrl           : string = null;
    @Input()
    public icon             : string = null;
    @Input()
    public title            : string = null;
    @Input()
    public textContent      : string = null;
    @Input()
    public actionLabel      : string = null;
    @Input()
    public titleOverPicture : boolean = false;
    @Input()
    public links            : any = null;
    @Input()
    public expandable       : boolean = false;
    @Input()
    public expandState      : string = 'expanded';
    @Input()
    public isEvent          : boolean = false;
    @Input()
    public isPartner        : boolean = false;
    @Output()
    private cardClickEvent  = new EventEmitter<string>();

    public arrowIcon        : string = 'keyboard_arrow_down';

    constructor() { }

    ngOnInit() {
    }

    public transmitEvent(): void {
        this.cardClickEvent.emit();
    }

    public toggleCard(): void {
        if (this.expandState === 'collapsed') {
            this.expandState = 'expanded';
            this.arrowIcon  = 'keyboard_arrow_up';
        } else {
            this.expandState = 'collapsed';
            this.arrowIcon  = 'keyboard_arrow_down';
        }
    }

}
