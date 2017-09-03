import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyAssociationComponent } from './modify-association.component';

describe('ModifyAssociationComponent', () => {
  let component: ModifyAssociationComponent;
  let fixture: ComponentFixture<ModifyAssociationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyAssociationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
