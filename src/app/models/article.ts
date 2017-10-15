export class FirebaseArticle {
    title:          string;
    description:    string;
    price:          number;
    imgUrls:        string[];
    selectedSize?:  string;
    quantity?:      number;

    constructor(article: Article) {
        this.title          = article.getTitle();
        this.description    = article.getDescription();
        this.price          = article.getPrice();
        this.imgUrls        = article.getImgUrls() ? article.getImgUrls() : null;
        this.selectedSize   = article.selectedSize ? article.selectedSize : null;
        this.quantity       = article.quantity ? article.quantity : null;
    }
}

export class Article {

    private title:          string;
    private description:    string;
    private price:          number;
    private imgUrls:        string[];
    public  selectedSize:   string;
    public  quantity:       number;

    /**
     * Creates an instance of Article.
     * @param {FirebaseArticle} article 
     * 
     * @memberOf Article
     */
    constructor(article: FirebaseArticle) {
        this.title          = article.title;
        this.description    = article.description;
        this.price          = article.price;
        this.imgUrls        = article.imgUrls;
        this.selectedSize   = article.selectedSize;
        this.quantity       = article.quantity;
    }

    /**
     * title getter
     * 
     * @returns {string} 
     * 
     * @memberOf Article
     */
    public getTitle(): string {
        return this.title;
    }

    /**
     * title setter
     * 
     * @param {string} title 
     * @returns {Article} 
     * 
     * @memberOf Article
     */
    public setTitle(title: string): Article {
        this.title = title;

        return this;
    }

    /**
     * description getter
     * 
     * @returns {string} 
     * 
     * @memberOf Article
     */
    public getDescription(): string {
        return this.description;
    }

    /**
     * description setter
     * 
     * @param {string} description 
     * @returns {Article} 
     * 
     * @memberOf Article
     */
    public setDescription(description: string): Article {
        this.description = description;

        return this;
    }

    /**
     * price getter
     * 
     * @returns {number} 
     * 
     * @memberOf Article
     */
    public getPrice(): number {
        return this.price;
    }

    /**
     * price setter
     * 
     * @param {number} price 
     * @returns {Article} 
     * 
     * @memberOf Article
     */
    public setPrice(price: number): Article {
        this.price = price;

        return this;
    }

    /**
     * imgUrls getter
     * 
     * @returns {string} 
     * 
     * @memberOf Article
     */
    public getImgUrls(): string[] {
        return this.imgUrls;
    }

    /**
     * imgUrls setter
     * 
     * @param {string} imgUrl 
     * @returns {Article} 
     * 
     * @memberOf Article
     */
    public setImgUrls(imgUrls: string[]): Article {
        this.imgUrls = imgUrls;

        return this;
    }

}