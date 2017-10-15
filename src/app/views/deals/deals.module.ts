import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BaseModule } from "app/modules/base/base.module";
import { HelpersModule } from "app/components/helpers/helpers.module";

/* Website Components */
import { DealsComponent } from "app/views/deals/deals.component";
import { PictureCardComponent } from "app/components/helpers/picture-card/picture-card.component";

/* Back-Office Components */
import { DealFormComponent } from "app/views/deals/back-office/deal-form/deal-form.component";
import { DealsOfficeComponent } from "app/views/deals/back-office/deals-office/deals-office.component";
import { NewDealFormComponent } from "app/views/deals/back-office/new-deal-form/new-deal-form.component";
import { DealBackCardComponent } from "app/views/deals/back-office/deal-back-card/deal-back-card.component";

@NgModule({
  imports: [CommonModule, BaseModule, HelpersModule],
  declarations: [
    DealsComponent,
    DealFormComponent,
    DealsOfficeComponent,
    NewDealFormComponent,
    DealBackCardComponent
  ]
})
export class DealsModule {}
