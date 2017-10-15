import { Component, OnInit } from "@angular/core";

import { FirebaseOrder } from "app/models/order";
import { User } from "app/models/user";

import { ShopService } from "app/views/shop/services/shop.service";
import { UserService } from "app/services/shared/user.service";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"]
})
export class OrdersComponent implements OnInit {
  public orders: FirebaseOrder[];
  public user: User;

  constructor(
    private shopService: ShopService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.user.subscribe(user => {
      this.user = user;
      if (this.user) {
        this.shopService
          .getCustomerOrders(this.user.login)
          .subscribe(orders => (this.orders = orders));
      }
    });
  }

  public getTotalAmount(order: FirebaseOrder): number {
    if (order.articles) {
      let amount = 0;

      for (let article of order.articles) {
        amount += article.quantity * article.price;
      }

      return amount;
    } else {
      return 0;
    }
  }
}
