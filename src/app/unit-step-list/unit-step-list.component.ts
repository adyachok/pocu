import {Component, Input, OnInit} from '@angular/core';
import {ProjectService} from '../service/project.service';
import {UnitStep} from '../model/step';

@Component({
  selector: 'app-unit-step-list',
  templateUrl: './unit-step-list.component.html',
  styleUrls: ['./unit-step-list.component.css']
})
export class UnitStepListComponent implements OnInit {

  @Input()
  projectId: number;

  unitSteps: UnitStep[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getProjectUnitSteps(this.projectId).subscribe(
      steps => this.unitSteps = steps,
      error2 => console.log(error2)
    );
  }

}
