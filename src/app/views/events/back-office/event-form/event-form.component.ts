import { Component, OnInit } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";
import { FirebaseObjectObservable } from "angularfire2/database";

import { EventBde } from "app/models/eventBde";
import { EventsService } from "app/views/events/services/events.service";

@Component({
  selector: "app-event-form",
  templateUrl: "./event-form.component.html",
  styleUrls: ["./event-form.component.scss"],
  providers: [EventsService]
})
export class EventFormComponent implements OnInit {
  key: string;
  eventObservable: FirebaseObjectObservable<EventBde>;
  event: EventBde;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventsService: EventsService
  ) {}

  ngOnInit() {
    this.key = this.route.snapshot.params["id"];

    this.eventObservable = this.eventsService.getItem(this.key);
    this.eventObservable.subscribe(event => {
      this.event = event;
    });
  }

  update(): void {
    var update: EventBde = {
      date: this.event.date,
      title: this.event.title,
      imgUrl: this.event.imgUrl,
      location: this.event.location,
      description: this.event.description,
      subscription: this.event.subscription,
      isParty: this.event.isParty,
      hasTickets: this.event.hasTickets,
      tickets: this.event.tickets !== undefined ? this.event.tickets : " "
    };

    if (this.event.archived) {
      update.archived = this.event.archived;
    }

    this.eventObservable.update(update);
  }

  onSubmit(event): void {
    event.preventDefault();
    this.update();
    this.router.navigate(["back-office/events-office"]);
  }
}
