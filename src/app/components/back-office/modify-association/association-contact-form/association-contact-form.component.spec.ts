import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationContactFormComponent } from './association-contact-form.component';

describe('AssociationContactFormComponent', () => {
  let component: AssociationContactFormComponent;
  let fixture: ComponentFixture<AssociationContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociationContactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociationContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
