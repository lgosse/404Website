import { Component, OnInit, Input } from '@angular/core';

import { Article } from 'app/models/article';

@Component({
  selector: 'app-article-add-form',
  templateUrl: './article-add-form.component.html',
  styleUrls: ['./article-add-form.component.scss', '../article-card.component.scss']
})
export class ArticleAddFormComponent implements OnInit {

    @Input()
    article: Article;
    sizes: string[] = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

    constructor() { }

    ngOnInit() {
    }

}
