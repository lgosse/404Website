import { Basket } from "app/models/basket";
import { FirebaseArticle } from "app/models/article";

import { ShopService } from "app/views/shop/services/shop.service";

import { FirebaseListObservable } from "angularfire2/database";

export class FirebaseOrder {
  dateOrdered: Date;
  articles: FirebaseArticle[];
  customerId: string;
  delivered: boolean;
  paid: boolean;
  amount: number;

  /**
     * Creates an instance of FirebaseOrder.
     * @param {Order} order 
     * 
     * @memberOf FirebaseOrder
     */
  constructor(order: Order) {
    this.dateOrdered = order.getDateOrdered();
    this.articles = order.getArticles();
    this.customerId = order.getCustomerId();
    this.delivered = order.getDelivered();
    this.paid = order.getPaid();
    this.amount = order.getAmount();
  }
}

export class Order {
  private $key?: string;
  private orders: FirebaseListObservable<FirebaseOrder[]>;
  private dateOrdered: Date;
  private articles: FirebaseArticle[];
  private customerId: string;
  private delivered: boolean;
  private paid: boolean;
  private amount: number;

  /**
     * Creates an instance of Order.
     * @param {Basket} basket 
     * @param {ShopService} shopService 
     * 
     * @memberOf Order
     */
  constructor(
    basket: Basket,
    private shopService: ShopService,
    delivered: boolean = false,
    paid: boolean = false
  ) {
    this.$key = basket.get$key();
    this.orders = this.shopService.getCustomerOrders(this.$key);
    this.dateOrdered = new Date();
    this.customerId = this.$key;
    this.delivered = delivered;
    this.paid = paid;
    this.amount = 0;

    this.articles = [];
    let articles = basket.getArticles();
    for (let article of articles) {
      this.amount += article.getPrice() * article.quantity;
      this.articles.push(new FirebaseArticle(article));
    }
  }

  /**
     * $key getter
     * 
     * @returns {string} 
     * 
     * @memberOf Order
     */
  public get$key(): string {
    return this.$key;
  }

  /**
     * $key setter
     * 
     * @param {string} $key 
     * @returns {Order} 
     * 
     * @memberOf Order
     */
  public set$key($key: string): Order {
    this.$key = $key;

    return this;
  }

  /**
     * dateOrdered getter
     * 
     * @returns {Date} 
     * 
     * @memberOf Order
     */
  public getDateOrdered(): Date {
    return this.dateOrdered;
  }

  /**
     * dateOrdered setter
     * 
     * @param {Date} dateOrdered 
     * @returns {Order} 
     * 
     * @memberOf Order
     */
  public setDateOrdered(dateOrdered: Date): Order {
    this.dateOrdered = dateOrdered;

    return this;
  }

  /**
     * articles getter
     * 
     * @returns {FirebaseArticle[]} 
     * 
     * @memberOf Order
     */
  public getArticles(): FirebaseArticle[] {
    return this.articles;
  }

  /**
     * customerId getter
     * 
     * @returns {string} 
     * 
     * @memberOf Order
     */
  public getCustomerId(): string {
    return this.customerId;
  }

  /**
     * customerId setter
     * 
     * @param {string} customerId 
     * @returns {Order} 
     * 
     * @memberOf Order
     */
  public setCustomerId(customerId: string): Order {
    this.customerId = customerId;

    return this;
  }

  /**
     * delivered getter
     * 
     * @returns {boolean} 
     * 
     * @memberOf Order
     */
  public getDelivered(): boolean {
    return this.delivered;
  }

  /**
     * delivered setter
     * 
     * @param {boolean} delivered 
     * @returns {Order} 
     * 
     * @memberOf Order
     */
  public setDelivered(delivered: boolean): Order {
    this.delivered = delivered;

    return this;
  }

  /**
     * paid getter
     * 
     * @returns {boolean} 
     * 
     * @memberOf Order
     */
  public getPaid(): boolean {
    return this.paid;
  }

  /**
     * paid setter
     * 
     * @param {boolean} paid 
     * @returns {Order} 
     * 
     * @memberOf Order
     */
  public setPaid(paid: boolean): Order {
    this.paid = paid;

    return this;
  }

  /**
     * amount getter
     * 
     * @returns {number} 
     * 
     * @memberOf Order
     */
  public getAmount(): number {
    return this.amount;
  }

  /**
     * amount setter
     * 
     * @param {number} amount 
     * @returns {Order} 
     * 
     * @memberOf Order
     */
  public setAmount(amount: number): Order {
    this.amount = amount;

    return this;
  }
}
