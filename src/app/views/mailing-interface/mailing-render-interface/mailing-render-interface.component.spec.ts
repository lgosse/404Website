import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailingRenderInterfaceComponent } from './mailing-render-interface.component';

describe('MailingRenderInterfaceComponent', () => {
  let component: MailingRenderInterfaceComponent;
  let fixture: ComponentFixture<MailingRenderInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailingRenderInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailingRenderInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
