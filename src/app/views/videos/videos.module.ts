import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BaseModule } from "app/modules/base/base.module";

import { VideosComponent } from "app/views/videos/videos.component";

@NgModule({
  imports: [CommonModule, BaseModule],
  declarations: [VideosComponent]
})
export class VideosModule {}
