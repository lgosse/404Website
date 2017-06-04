import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mailing-text-interface',
  templateUrl: './mailing-text-interface.component.html',
  styleUrls: ['./mailing-text-interface.component.scss']
})
export class MailingTextInterfaceComponent implements OnInit {

    @Output()
    updateMail = new EventEmitter<string>();
    mailBody: string;

    constructor() { }

    ngOnInit() {
    }

    onType(): void {
        this.updateMail.emit(this.mailBody);
    }

}
