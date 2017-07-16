import { FirebaseArticle, Article } from 'app/classes/article';

import { FirebaseObjectObservable } from 'angularfire2/database';

export interface FirebaseBasket {
    $key:       string;
    customerId: string;
    articles:   FirebaseArticle[];

    /**
     * set new firebaseBasket destructive way
     * 
     * @param {*} value 
     * 
     * @memberOf FirebaseBasket
     */
    set(value: any);

    /**
     * update firebaseBasket with specified values
     * 
     * @param {Object} value 
     * 
     * @memberOf FirebaseBasket
     */
    update(value: Object);

    /**
     * removes firebaseBasket from database
     * 
     * 
     * @memberOf FirebaseBasket
     */
    remove();
}

export class Basket {

    private firebaseBasket: FirebaseObjectObservable<FirebaseBasket>;
    private $key?:          string;
    private customerId:     string;
    private articles:       Article[];

    /**
     * Creates an instance of Basket.
     * @param {string} customerId 
     * 
     * @memberOf Basket
     */
    constructor(firebaseBasket: FirebaseObjectObservable<FirebaseBasket>) {
        this.firebaseBasket = firebaseBasket;
        this.firebaseBasket.subscribe(basket => {
            this.$key           = basket.$key;
            this.customerId     = basket.customerId ? basket.customerId : basket.$key;
            this.articles = [];
            if (basket.articles) {
                for (let article of basket.articles) {
                    this.addArticle(new Article(article));
                }
            }
        })
    }

    /**
     * $key getter
     * 
     * @returns {string} 
     * 
     * @memberOf Basket
     */
    public get$key(): string {
        return this.$key;
    }

    /**
     * $ket setter
     * 
     * @param {string} $key 
     * 
     * @memberOf Basket
     */
    public set$key($key: string) {
        this.$key = $key;
    }

    /**
     * customerId getter
     * 
     * @returns {string} 
     * 
     * @memberOf Basket
     */
    public getCustomerId(): string {
        return this.customerId;
    }

    /**
     * customerId setter
     * 
     * @param {string} customerId 
     * @returns {Basket} 
     * 
     * @memberOf Basket
     */
    public setCustomerId(customerId: string): Basket {
        this.customerId = customerId;

        return this;
    }

    /**
     * articles getter
     * 
     * @returns {Article[]} 
     * 
     * @memberOf Basket
     */
    public getArticles(): Article[] {
        return this.articles;
    }

    /**
     * adds an article to articles
     * 
     * @param {Article} article 
     * @returns {Basket} 
     * 
     * @memberOf Basket
     */
    public addArticle(article: Article): Basket {
        this.articles.push(article);

        return this;
    }

    public removeArticles(key?: number): Basket {
        if (key) {
            this.articles.splice(key, 1);
        } else {
            this.articles.splice(0, this.articles.length);
        }

        return this;
    }

    /**
     * set firebaseBasket with specified value or with current firebaseBasket
     * 
     * @param {Object} [object] 
     * @returns {Basket} 
     * 
     * @memberOf Basket
     */
    public setFirebase(object?: Object): Basket {
        if (!object) {
            let objectUpdate: any = {
                customerId : this.customerId
            }

            objectUpdate.articles = [];
            for (let article of this.articles) {
                objectUpdate.articles.push(new FirebaseArticle(article));
            }

            this.firebaseBasket.set(objectUpdate);
        } else {
            this.firebaseBasket.set(object);
        }

        return this;
    }

    /**
     * updates firebaseBasket with specified values or with current firebaseBasket
     * 
     * @param {Object} [object] 
     * @returns {Basket} 
     * 
     * @memberOf Basket
     */
    public updateFirebase(object?: Object): Basket {
        if (!object) {
            this.firebaseBasket.update({
                customerId : this.customerId,
                articles   : this.articles
            });
        } else {
            this.firebaseBasket.update(object);
        }

        return this;
    }

    /**
     * Removes basket from firebase
     * 
     * 
     * @memberOf Basket
     */
    public removeFirebase(): void {
        this.firebaseBasket.remove();
    }

}