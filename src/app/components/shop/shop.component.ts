import { Component, OnInit } from '@angular/core';

import { ShopService } from 'app/services/shop.service';
import { UserService } from 'app/services/shared/user.service';

import { Article } from 'app/classes/article';
import { Basket } from 'app/classes/basket';
import { User } from 'app/classes/user';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

    private articles:    Article[];
    private basket:      Basket;
    private user:        User;
    private testArticle: Article =
        new Article({
            title: 'test article',
            description: 'lorem ipsum dolor sit amet',
            price: 45,
            imgUrls: [
                'https://s-media-cache-ak0.pinimg.com/736x/55/8a/49/558a4916a26c10a1b548a876cc1efcb2--loose-sweater-green-sweater.jpg',
                'https://cdn.shopify.com/s/files/1/0209/1522/products/sweatshirts-watermelon-sweater-1_1024x1024.jpg?v=1496810964',
                'https://uniqlo.scene7.com/is/image/UNIQLO/goods_08_400621?$prod$'
            ]
        });

    constructor(
        private shopService: ShopService,
        private userService: UserService
    ) { }

    ngOnInit() {
        this.userService.user
            .subscribe(user => {
                this.user = user;
                this.shopService.getArticles()
                    .subscribe(articles => this.articles = articles);
                this.basket = new Basket(this.shopService.getCustomerBasket(this.user.login));
            })
    }

    getBasketLabel(): string {
        let articles = this.basket.getArticles();

        return articles && articles.length ? `PANIER (${articles.length})` : 'PANIER';
    }

}
