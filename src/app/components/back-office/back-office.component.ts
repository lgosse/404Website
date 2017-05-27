import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-back-office',
    templateUrl: './back-office.component.html',
    styleUrls: ['./back-office.component.scss']
})
export class BackOfficeComponent implements OnInit {

    selectedRoute: any = '';

    private routes: string[] = [
        'messages',
        'events-office',
        'subscriptions',
        'deals-office'
    ];

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
    }

    navigateTo(routeIndex): void {
        this.router.navigate([ 'back-office/' + this.routes[routeIndex.value - 1] ]);
    }

}
