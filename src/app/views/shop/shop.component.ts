import { Component, OnInit } from "@angular/core";

import { ShopService } from "app/views/shop/services/shop.service";
import { UserService } from "app/services/shared/user.service";

import { Article } from "app/models/article";
import { Basket } from "app/models/basket";
import { User } from "app/models/user";
import { environment } from "environments/environment";

@Component({
  selector: "app-shop",
  templateUrl: "./shop.component.html",
  styleUrls: ["./shop.component.scss"]
})
export class ShopComponent implements OnInit {
  public articles: Article[];
  public basket: Basket;
  public user: User;

  constructor(
    private shopService: ShopService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.user.subscribe(user => {
      this.user = user;
      if (this.user.isAuthenticated === false) {
        window.location.href = environment.intraRedirectUrl;
      }
      this.shopService
        .getArticles()
        .subscribe(articles => (this.articles = articles));
      this.basket = new Basket(
        this.shopService.getCustomerBasket(this.user.login)
      );
    });
  }

  getBasketLabel(): string {
    let articles = this.basket.getArticles();

    return articles && articles.length
      ? `PANIER (${articles.length})`
      : "PANIER";
  }
}
