import { Component, OnInit, Input } from '@angular/core';

import { Article } from 'app/classes/article';
import { Basket } from 'app/classes/basket';
import { FadeInOutAnimation } from 'app/animations/fade-in-out.animation';

import { SnacksService } from 'app/services/snacks.service';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
  animations: [ FadeInOutAnimation ]
})
export class ArticleCardComponent implements OnInit {

    @Input()
    private article: Article;
    @Input()
    private basket: Basket;
    private imgIndex: number = 0;
    private mouseHover: string = 'nothovered';

    constructor(
        private snacksService: SnacksService
    ) { }

    ngOnInit() {
    }

    /**
     * Adds an article to the basket
     * 
     * @param {Article} article 
     * 
     * @memberOf ArticleCardComponent
     */
    public addToBasket(article: Article): void {
        this.basket.addArticle(article);
        this.basket.updateFirebase();
        this.snacksService.openSnackBar(
            `${article.quantity} ${article.getTitle()} taille ${article.selectedSize} ajouté(s) au panier!`
        );
        delete(this.article.selectedSize);
        delete(this.article.quantity);
    }

    /**
     * Switch img to the previous one
     * 
     * 
     * @memberOf ArticleCardComponent
     */
    public previousImg(): void {
        if (this.imgIndex === 0) {
            this.imgIndex = this.article.getImgUrls().length - 1;
        } else {
            this.imgIndex--;
        }
    }

    /**
     * Switch img to the next one
     * 
     * 
     * @memberOf ArticleCardComponent
     */
    public nextImg(): void {
        if (this.imgIndex === (this.article.getImgUrls().length - 1)) {
            this.imgIndex = 0;
        } else {
            this.imgIndex++;
        }
    }

}
