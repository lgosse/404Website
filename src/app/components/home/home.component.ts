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

    public homeMainPicUrl : string = 'https://firebasestorage.googleapis.com/v0/b/website-d0a07.appspot.com/o/various%2Fphotosoiree.jpg?alt=media&token=03709f38-1d99-415f-bd3b-8178a84c3f59';

    public eventCard = {
        imgUrl           : 'https://firebasestorage.googleapis.com/v0/b/website-d0a07.appspot.com/o/various%2Fsoiree_home.jpg?alt=media&token=8935ad7d-e0ba-4fe0-8cd5-ba1bce86f2ed',
        icon             : 'event',
        title            : 'ÉVÈNEMENTS',
        textContent      : 'En plus des quatre soirées de mars, juin, octobre et décembre, nous avons l’intention d‘organiser davantage de petits évènements aux thèmes divers et variés : une soirée détente par mois dans un bar privatisé, des sorties type paintball ou encore laser game et deux voyages : l’intégration et un voyage au ski en mars.',
        actionLabel      : 'ALLER VOIR',
        titleOverPicture : true
    };

    public dealCard = {
        imgUrl           : 'https://firebasestorage.googleapis.com/v0/b/website-d0a07.appspot.com/o/various%2Fbonsplans_home.jpg?alt=media&token=3efa7b73-466d-4c51-bff5-b448c88baa4d',
        icon             : 'lightbulb_outline',
        title            : 'BONS PLANS',
        textContent      : 'Ton BDE te négocie aussi pleins de bons plans pour agrémenter ton quotidien d\'étudiant: pizzas, permis, lunettes, taxis de fin de soirée à prix réduits...',
        actionLabel      : 'J\'EN PROFITE',
        titleOverPicture : true
    }

    public shopCard = {
        imgUrl           : 'https://firebasestorage.googleapis.com/v0/b/website-d0a07.appspot.com/o/various%2F42_pull.jpg?alt=media&token=836a22d9-d588-4d88-8cfc-99a835f60ee6',
        icon             : 'shopping_cart',
        title            : 'SHOP',
        textContent      : 'Ici tu pourras trouver des pulls, t-shirts accessoires et autres estampillés 42',
        actionLabel      : 'J\'EN VEUX UN',
        titleOverPicture : true
     }

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
