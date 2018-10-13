import {Component, Input, OnInit} from '@angular/core';
import {UnitStep} from '../model/step';
import {ConstraintItem} from '../utils/constraint-item';
import {DSModel} from '../model/ds-model';

@Component({
  selector: 'app-unit-step',
  templateUrl: './unit-step.component.html',
  styleUrls: ['./unit-step.component.css']
})
export class UnitStepComponent implements OnInit {

  @Input()
  step: UnitStep;

  constructor() { }

  ngOnInit() {
  }

}
