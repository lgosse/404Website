import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BaseModule } from "app/modules/base/base.module";

/* Website Components */
import { AssociationsComponent } from "app/views/associations/associations.component";
import { AssociationCardComponent } from "app/views/associations/association-card/association-card.component";

/* Back Office Components */
import { AssociationFormComponent } from "app/views/associations/back-office/association-form/association-form.component";
import { AssociationContactFormComponent } from "app/views/associations/back-office/modify-association/association-contact-form/association-contact-form.component";
import { ModifyAssociationComponent } from "app/views/associations/back-office/modify-association/modify-association.component";

@NgModule({
  imports: [CommonModule, BaseModule],
  exports: [],
  declarations: [
    AssociationsComponent,
    AssociationCardComponent,
    AssociationFormComponent,
    ModifyAssociationComponent,
    AssociationContactFormComponent
  ]
})
export class AssociationsModule {}
