import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title: string = 'T_ERROR 404';

    constructor (
        private router: Router
    ) {}

    navigateTo(route: string): void {
        this.router.navigate([route]);
    }
}
