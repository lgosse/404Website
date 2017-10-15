import { Injectable } from "@angular/core";
import {
  AngularFireDatabase,
  FirebaseListObservable,
  FirebaseObjectObservable
} from "angularfire2/database";

import { Log } from "app/models/log";

@Injectable()
export class LoggerService {
  constructor(private af: AngularFireDatabase) {}

  public getLogs(query?: any): FirebaseListObservable<Log[]> {
    return query
      ? this.af.list("/logs", { query: query })
      : this.af.list("/logs");
  }

  public sendLog(level: string, action: string, verb: string): void {
    let log = new Log(level, action, verb);

    this.af.list("/logs").push(log);
  }

  public info(action: string, verb: string): void {
    this.sendLog("INFO", action, verb);
  }

  public warning(action: string, verb: string): void {
    this.sendLog("WARN", action, verb);
  }

  public alert(action: string, verb: string): void {
    this.sendLog("ALERT", action, verb);
  }

  public critical(action: string, verb: string): void {
    this.sendLog("CRITICAL", action, verb);
  }
}
