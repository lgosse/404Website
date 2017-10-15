import { Injectable, Injector } from "@angular/core";
import { FirebaseWrapperService } from "app/services/firebase-wrapper.service";

import { Association } from "app/models/association";

@Injectable()
export class AssociationsService extends FirebaseWrapperService<Association> {
  constructor(injector: Injector) {
    super(injector);
    this.firebaseReference = "/associations";
  }
}
