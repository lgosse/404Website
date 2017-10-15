import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BaseModule } from "app/modules/base/base.module";

import { ShopComponent } from "app/views/shop/shop.component";
import { ArticleCardComponent } from "app/views/shop/article-card/article-card.component";
import { ArticleAddFormComponent } from "app/views/shop/article-card/article-add-form/article-add-form.component";
import { BasketComponent } from "app/views/shop/basket/basket.component";
import { OrdersComponent } from "app/views/shop/orders/orders.component";
import { OrderDialogComponent } from "app/views/shop/basket/order-dialog/order-dialog.component";

@NgModule({
  imports: [CommonModule, BaseModule],
  declarations: [
    ShopComponent,
    ArticleAddFormComponent,
    ArticleCardComponent,
    BasketComponent,
    OrdersComponent,
    OrderDialogComponent
  ],
  entryComponents: [OrderDialogComponent]
})
export class ShopModule {}
