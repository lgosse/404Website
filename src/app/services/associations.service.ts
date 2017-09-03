import { Injectable } from "@angular/core";
import {
  AngularFireDatabase,
  FirebaseListObservable,
  FirebaseObjectObservable
} from "angularfire2/database";

import { Association } from "app/classes/association";

@Injectable()
export class AssociationsService {
  constructor(private af: AngularFireDatabase) {}

  public getAssociations(): FirebaseListObservable<Association[]> {
    return this.af.list("/associations");
  }

  public getAssociation(key: string): FirebaseObjectObservable<Association> {
    return this.af.object(`/associations/${key}`);
  }

  public addAssociation(association: Association) {
    return this.af.list("/associations").push(association);
  }

  public updateAssociation(association: any) {
    this.af.object(`/associations/${association.$key}`).update(association);
  }

  public removeAssociation(association: any) {
    this.af.object(`/associations/${association.$key}`).remove();
  }
}
