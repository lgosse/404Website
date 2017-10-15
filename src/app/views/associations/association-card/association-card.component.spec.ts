import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationCardComponent } from './association-card.component';

describe('AssociationCardComponent', () => {
  let component: AssociationCardComponent;
  let fixture: ComponentFixture<AssociationCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociationCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
