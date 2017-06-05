import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mailing-text-interface',
  templateUrl: './mailing-text-interface.component.html',
  styleUrls: ['./mailing-text-interface.component.scss']
})
export class MailingTextInterfaceComponent implements OnInit {

    @Output()
    updateMail = new EventEmitter<string>();
    @Input()
    mailBody: string;
    @Output()
    updateSubject = new EventEmitter<string>();
    @Input()
    subject: string;

    constructor() { }

    ngOnInit() {
    }

    onTypeBody(): void {
        this.updateMail.emit(this.mailBody);
    }

    onTypeSubject(): void {
        this.updateSubject.emit(this.subject);
    }

}