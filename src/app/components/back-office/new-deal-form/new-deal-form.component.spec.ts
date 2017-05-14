import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDealFormComponent } from './new-deal-form.component';

describe('NewDealFormComponent', () => {
  let component: NewDealFormComponent;
  let fixture: ComponentFixture<NewDealFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDealFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDealFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
