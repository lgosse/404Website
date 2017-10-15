import { NgModule } from "@angular/core";

import { HashLocationStrategy, LocationStrategy } from "@angular/common";

import { AppComponent } from "app/app.component";

/* Application Modules */
import { ViewsModule } from "app/modules/views/views.module";
import { HelpersModule } from "app/components/helpers/helpers.module";
import { LayoutModule } from "app/modules/layout/layout.module";
import { BaseModule } from "app/modules/base/base.module";

/* Services */
import { UserService } from "app/services/shared/user.service";
import { ShopService } from "app/views/shop/services/shop.service";
import { SnacksService } from "app/services/snacks.service";
import { LayoutService } from "./services/shared/layout.service";

import { LoggerService } from "./services/shared/logger.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    /* Application Module */
    ViewsModule,
    LayoutModule,
    HelpersModule,
    BaseModule
  ],
  providers: [
    UserService,
    ShopService,
    SnacksService,
    LayoutService,
    LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
