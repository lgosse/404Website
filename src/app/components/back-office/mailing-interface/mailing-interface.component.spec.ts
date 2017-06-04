import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailingInterfaceComponent } from './mailing-interface.component';

describe('MailingInterfaceComponent', () => {
  let component: MailingInterfaceComponent;
  let fixture: ComponentFixture<MailingInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailingInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailingInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
