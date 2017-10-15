import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailingAddressBarComponent } from './mailing-address-bar.component';

describe('MailingAddressBarComponent', () => {
  let component: MailingAddressBarComponent;
  let fixture: ComponentFixture<MailingAddressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailingAddressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailingAddressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
