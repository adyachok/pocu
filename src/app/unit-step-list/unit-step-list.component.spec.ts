import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitStepListComponent } from './unit-step-list.component';

describe('UnitStepListComponent', () => {
  let component: UnitStepListComponent;
  let fixture: ComponentFixture<UnitStepListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitStepListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitStepListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
