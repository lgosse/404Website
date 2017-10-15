import { Injectable, Injector } from "@angular/core";
import {
  AngularFireDatabase,
  FirebaseListObservable,
  FirebaseObjectObservable
} from "angularfire2/database";

@Injectable()
export class FirebaseWrapperService<T> {
  public firebaseReference: string;
  private af: AngularFireDatabase;

  constructor(injector: Injector) {
    this.af = injector.get(AngularFireDatabase);
  }

  public getList(): FirebaseListObservable<T[]> {
    return this.af.list(this.firebaseReference);
  }

  public getItem(itemKey: string): FirebaseObjectObservable<T> {
    return this.af.object(`${this.firebaseReference}/${itemKey})`);
  }

  public addItem(item: Partial<T>): void {
    this.af.list(this.firebaseReference).push(item);
  }

  public updateItem(item: any): void {
    this.af.list(`${this.firebaseReference}`).update(item.$key, item);
  }

  public removeItem(itemKey: string): void {
    this.af.object(`${this.firebaseReference}/${itemKey}`);
  }

  public getSubList(listKey: string): FirebaseListObservable<any> {
    return this.af.list(`${this.firebaseReference}/${listKey}`);
  }

  public getSubListItem(listKey, itemKey): FirebaseObjectObservable<any> {
    return this.af.object(`${this.firebaseReference}/${listKey}/${itemKey}`);
  }
}
