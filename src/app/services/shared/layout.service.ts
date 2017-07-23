import { Injectable, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'; 
import { Subscription } from "rxjs/Subscription";
import { MediaChange, ObservableMedia } from "@angular/flex-layout";

@Injectable()
export class LayoutService {
    public layoutChangeSource = new BehaviorSubject<any>(0);
    public layout             : Observable<string> = this.layoutChangeSource.asObservable();
    public watcher            : Subscription;
    public activeMediaQuery   = "";

    constructor(media: ObservableMedia) {
        this.watcher = media.subscribe((change: MediaChange) => {
            console.log(change.mqAlias);
            this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : "";
            this.layoutChangeSource.next(change.mqAlias);
        });
    }

    ngOnDestroy() {
        this.watcher.unsubscribe();
    }
}
