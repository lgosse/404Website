import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailingTextInterfaceComponent } from './mailing-text-interface.component';

describe('MailingTextInterfaceComponent', () => {
  let component: MailingTextInterfaceComponent;
  let fixture: ComponentFixture<MailingTextInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailingTextInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailingTextInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
