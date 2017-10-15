import { Injectable, Injector } from "@angular/core";
import { FirebaseWrapperService } from "app/services/firebase-wrapper.service";

import { Deal } from "app/models/deal";

@Injectable()
export class DealsService extends FirebaseWrapperService<Deal> {
  constructor(injector: Injector) {
    super(injector);
    this.firebaseReference = "/deals";
  }
}
