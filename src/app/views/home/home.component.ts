import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { FirebaseListObservable } from "angularfire2/database";

import { LoadedAnimation } from "app/animations/loaded-animation";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  animations: [LoadedAnimation]
})
export class HomeComponent implements OnInit {
  public loaded: boolean = false;
  public homeMainPicUrl: string = "https://firebasestorage.googleapis.com/v0/b/website-d0a07.appspot.com/o/various%2Fphotosoiree.jpg?alt=media&token=03709f38-1d99-415f-bd3b-8178a84c3f59";

  public eventCard = {
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/website-d0a07.appspot.com/o/assets%2Fsoiree_home.jpg?alt=media&token=d886862a-2b93-4ace-ba89-50da973c3107",
    icon: "event",
    title: "ÉVÈNEMENTS",
    textContent:
      "En plus des quatre soirées de mars, juin, octobre et décembre, nous avons l’intention d‘organiser davantage de petits évènements aux thèmes divers et variés : une soirée détente par mois dans un bar privatisé, des sorties type paintball ou encore laser game et deux voyages : l’intégration et un voyage au ski en mars.",
    actionLabel: "ALLER VOIR",
    titleOverPicture: true
  };

  public dealCard = {
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/website-d0a07.appspot.com/o/assets%2Fbonsplans_home.jpg?alt=media&token=227e4f35-1836-4684-b327-a3a41a9fbe5e",
    icon: "lightbulb_outline",
    title: "BONS PLANS",
    textContent:
      "Ton BDE te négocie aussi pleins de bons plans pour agrémenter ton quotidien d'étudiant: pizzas, permis, lunettes, taxis de fin de soirée à prix réduits...",
    actionLabel: "J'EN PROFITE",
    titleOverPicture: true
  };

  public shopCard = {
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/website-d0a07.appspot.com/o/assets%2F42_pull.jpg?alt=media&token=405820aa-7a17-4587-8f11-a70c84fb4f5e",
    icon: "shopping_cart",
    title: "SHOP",
    textContent:
      "Ici tu pourras trouver des pulls, t-shirts accessoires et autres estampillés 42",
    actionLabel: "J'EN VEUX UN",
    titleOverPicture: true
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  ngOnInit() {}
}