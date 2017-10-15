import { Injectable, Injector } from "@angular/core";

import { FirebaseWrapperService } from "app/services/firebase-wrapper.service";

import { Partner } from "app/models/partner";

@Injectable()
export class PartnersService extends FirebaseWrapperService<Partner> {
  constructor(injector: Injector) {
    super(injector);
    this.firebaseReference = "/partners";
  }
}
