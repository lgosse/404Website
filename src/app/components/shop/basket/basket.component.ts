import { Component, OnInit, Input } from "@angular/core";

import { OrderDialogComponent } from "app/components/shop/basket/order-dialog/order-dialog.component";
import { Basket } from "app/classes/basket";
import { Order } from "app/classes/order";

import { ShopService } from "app/services/shop.service";
import { SnacksService } from "app/services/snacks.service";

import { MatDialog } from "@angular/material";

@Component({
  selector: "app-basket",
  templateUrl: "./basket.component.html",
  styleUrls: ["./basket.component.scss"]
})
export class BasketComponent implements OnInit {
  @Input() public basket: Basket;
  public order: Order;

  constructor(
    private dialog: MatDialog,
    public shopService: ShopService,
    private snacksService: SnacksService
  ) {}

  ngOnInit() {}

  openOrderDialog() {
    let dialogRef = this.dialog.open(OrderDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result === "validate order") {
        this.order = new Order(this.basket, this.shopService);
        this.shopService.sendOrder(this.order);
        this.basket.removeArticles();
        this.basket.updateFirebase();
      }
    });
  }

  public deleteItem(index: number): void {
    this.basket.removeArticles(index);
    this.basket.updateFirebase();
    this.snacksService.openSnackBar("Article retiré du panier.");
  }
}
