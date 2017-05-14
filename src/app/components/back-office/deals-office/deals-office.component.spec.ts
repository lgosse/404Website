import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsOfficeComponent } from './deals-office.component';

describe('DealsOfficeComponent', () => {
  let component: DealsOfficeComponent;
  let fixture: ComponentFixture<DealsOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealsOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealsOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
