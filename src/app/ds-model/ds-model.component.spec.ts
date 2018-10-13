import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsModelComponent } from './ds-model.component';

describe('DsModelComponent', () => {
  let component: DsModelComponent;
  let fixture: ComponentFixture<DsModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
