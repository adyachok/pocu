import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../service/project.service';
import {Project} from '../model/project';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  projects: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe(
      projects => this.projects = projects,
      error2 => console.log(error2)
    );
    for (const p of  this.projects) {
      console.log(p.parent);
      console.log(typeof p.parent);
    }
  }

}
