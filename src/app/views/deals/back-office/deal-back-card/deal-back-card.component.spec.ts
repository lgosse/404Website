import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealBackCardComponent } from './deal-back-card.component';

describe('DealBackCardComponent', () => {
  let component: DealBackCardComponent;
  let fixture: ComponentFixture<DealBackCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealBackCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealBackCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
