import { Injectable } from '@angular/core';
import {
    AngularFireDatabase,
    FirebaseListObservable,
    FirebaseObjectObservable
} from 'angularfire2/database';

import { Article } from 'app/classes/article';
import { FirebaseOrder, Order } from 'app/classes/order'; 
import { FirebaseBasket, Basket } from 'app/classes/basket';

@Injectable()
export class ShopService {

    constructor(
        private af: AngularFireDatabase
    ) { }

    public getOrders(): FirebaseListObservable<Array<FirebaseOrder[]>> {
        return this.af.list('/orders');
    }

    public sendOrder(order: Order): void {
        let firebaseOrder = new FirebaseOrder(order);
        console.log(firebaseOrder);

        this.af.list(`/orders/${order.getCustomerId()}`)
            .push(firebaseOrder);
    }

    public getCustomerOrders(customerId: string): FirebaseListObservable<FirebaseOrder[]> {
        return this.af.list(`/orders/${customerId}`);
    }

    public getCustomerBasket(customerId: string): FirebaseObjectObservable<FirebaseBasket> {
        return this.af.object(`/baskets/${customerId}`);
    }

    public getArticles(): FirebaseListObservable<Article[]> {
        return this.af.list('/articles');
    }

}