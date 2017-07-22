import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-picture-card',
    templateUrl: './picture-card.component.html',
    styleUrls: ['./picture-card.component.scss']
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
    @Output()
    private cardClickEvent  = new EventEmitter<string>();

    constructor() { }

    ngOnInit() {
    }

    public transmitEvent(): void {
        this.cardClickEvent.emit();
    }

}
