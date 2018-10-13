import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitStepComponent } from './unit-step.component';

describe('UnitStepComponent', () => {
  let component: UnitStepComponent;
  let fixture: ComponentFixture<UnitStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
