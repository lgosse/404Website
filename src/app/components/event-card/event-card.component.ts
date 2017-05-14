import { Component, OnInit, Input } from '@angular/core';

import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';

import { EventBde } from 'app/classes/eventBde';
import { EventSubscribingComponent } from 'app/components/event-subscribing/event-subscribing.component';
import { SubscriptionService } from 'app/services/subscription.service';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
  providers: [SubscriptionService]
})

export class EventCardComponent implements OnInit {

    cardState: string = 'collapsed';

    @Input()
    event: EventBde;

    constructor(
        public dialog: MdDialog,
        public snackBar: MdSnackBar,
        public subscriptionService: SubscriptionService
    ) { }

    ngOnInit() {
    }

    showSubscriptionDialog(): void {
        let dialogRef = this.dialog.open(EventSubscribingComponent, {disableClose: true});
            dialogRef.afterClosed().subscribe(result => {
                if (result !== null) {
                    this.subscriptionService.subscribe(this.event.title, result);
                    this.openSnackBar('Merci ! Tu devrais recevoir un mail de confirmation pour ton inscription !', 'FERMER');
                }
        });
    }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 3000
        });
    }

    isPassed(date: Date): boolean {
        const now       = new Date();
        const eventDate = new Date(date);

        if (eventDate.getTime() < now.getTime()) {
            return true;
        } else {
            return false;
        }
    }

}
