import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mailing-render-interface',
  templateUrl: './mailing-render-interface.component.html',
  styleUrls: ['./mailing-render-interface.component.scss']
})
export class MailingRenderInterfaceComponent implements OnInit {

    @Input()
    mailBody: string;

    constructor() { }

    ngOnInit() {
    }

}
