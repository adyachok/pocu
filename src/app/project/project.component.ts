import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectService} from '../service/project.service';
import {UnitStep} from '../model/step';
import {Project} from '../model/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  private id: number;
  steps: UnitStep[];
  project: Project;

  constructor(private route: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.route.data.subscribe(data => {
        if (data['clone']) {
          console.log('----------------clone-----------------');
        } else {
          this.projectService.getProject(this.id).subscribe(
            project => this.project = project,
            error2 => console.log(error2)
          );
          this.projectService.getProjectUnitSteps(this.id).subscribe(
            steps => this.steps = steps,
            error2 => console.log(error2));
        }
      });
    });
  }

}
