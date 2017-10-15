import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BaseModule } from "app/modules/base/base.module";

import { ContactCardComponent } from "app/components/helpers/contact-card/contact-card.component";
import { PictureCardComponent } from "app/components/helpers/picture-card/picture-card.component";
import { SidebarComponent } from "app/components/helpers/sidebar/sidebar.component";
import { VideoCardComponent } from "app/components/helpers/video-card/video-card.component";
import { DialogContactComponent } from "app/components/helpers/dialog-contact/dialog-contact.component";

@NgModule({
  imports: [CommonModule, BaseModule],
  declarations: [
    ContactCardComponent,
    PictureCardComponent,
    SidebarComponent,
    VideoCardComponent,
    DialogContactComponent
  ],
  exports: [
    ContactCardComponent,
    PictureCardComponent,
    SidebarComponent,
    VideoCardComponent,
    DialogContactComponent
  ],
  entryComponents: [DialogContactComponent]
})
export class HelpersModule {}
