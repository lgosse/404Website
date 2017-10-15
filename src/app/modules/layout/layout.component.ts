import { Component, OnInit } from '@angular/core';

import { LayoutService } from 'app/services/shared/layout.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    public sidenavMode = 'side';
    public sidenavOpen = true;
    public showFab     = false;

    constructor(
        private layoutService: LayoutService
    ) { }

    ngOnInit() {
        this.handleLayout();
    }

    private handleLayout(): void {
        this.layoutService.layout.subscribe(layout => {
            if (layout === 'xs' || layout === 'sm') {
                this.sidenavOpen = false;
                this.sidenavMode = 'over';
                this.showFab     = true;
            } else {
                this.sidenavOpen = true;
                this.sidenavMode = 'side';
                this.showFab     = false;
            }
        });
    }

}
