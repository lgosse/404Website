import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealFormComponent } from './deal-form.component';

describe('DealFormComponent', () => {
  let component: DealFormComponent;
  let fixture: ComponentFixture<DealFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
