import { Injectable, Injector } from "@angular/core";

import { FirebaseWrapperService } from "app/services/firebase-wrapper.service";
import { Member } from "app/models/member";

@Injectable()
export class TeamService extends FirebaseWrapperService<Member> {
  constructor(injector: Injector) {
    super(injector);
    this.firebaseReference = "/bdeMembers";
  }
}
