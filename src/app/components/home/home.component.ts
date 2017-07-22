import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FirebaseListObservable } from 'angularfire2/database';

import { LoadedAnimation } from 'app/constants/loaded-animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [ LoadedAnimation ]
})
export class HomeComponent implements OnInit {

    public testCard = {
        imgUrl: 'https://rokyroxane.com/wp-content/uploads/2016/12/events-heavenly-header.jpg',
        icon: 'person',
        title: 'THIS IS A TEST',
        textContent: 'Tu aimes les pizzas et tu aimes la bière ? Le 20 juin à partir de 18h, nous te proposons un afterwork-rencontre avec notre partenaire Side dans une ambiance chill et décontractée. Notre partenaire Gunnar sera aussi présent. Nous vous organisons un petit concours avec cadeaux à gagner alors ne manquez pas ça !',
        actionLabel: 'TEST CLICK',
        titleOverPicture: true,
        links: [
            {
                icon: 'event',
                name: '27 Mai 2017',
                href: 'testLink'
            },
            {
                icon: 'location_on',
                name: 'École 42',
                href: 'testLink'
            }
        ]
    };

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { }

    navigateTo(route: string): void {
        this.router.navigate([route]);
    }

    ngOnInit() {
    }

}
