import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BaseModule } from "app/modules/base/base.module";

import { LoginComponent } from "app/views/login/login.component";

@NgModule({
  imports: [CommonModule, BaseModule],
  declarations: [LoginComponent]
})
export class LoginModule {}
