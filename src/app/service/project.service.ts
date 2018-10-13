import {Injectable, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs/index';
import {Project} from '../model/project';
import {UnitStep} from '../model/step';
import {DSModel} from '../model/ds-model';
import {Constraint} from '../model/constraint';

@Injectable()
export class ProjectService {

  p_dict: {};
  u_dict: {};

  constructor() {
    const p1 = new Project();
    p1.name = 'A';
    p1.id = 1;
    p1.description = 'Lorem Ipsum је једноставно модел текста који се користи у штампарској...';
    const p2 = new Project();
    p2.name = 'B';
    p2.id = 2;
    p2.description = 'Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. ' +
      'Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500, als ein unbekannter Schriftsteller ' +
      'eine Hand voll Wörter nahm und diese...';
    p2.parent = p1;
    this.p_dict = {
      1: p1,
      2: p2
    }

    const u1 = new UnitStep();
    u1.name = 'fermentation';
    u1.id = 1;
    const u2 = new UnitStep();
    u2.name = 'homogenization';
    u2.id = 2;

    const m1 = new DSModel();
    m1.name = 'ali_1';
    m1.id = 1;
    const c1 = new Constraint();
    c1.id = 1;
    c1.name = 'temp';
    c1.min = 10;
    c1.max = 12;
    const c2 = new Constraint();
    c2.id = 2;
    c2.name = 'do';
    c2.min = 10;
    c2.max = 120;
    m1.constraints = [c1, c2];
    const m2 = new DSModel();
    m2.name = 'ali_2';
    m2.id = 2;
    const c3 = new Constraint();
    c3.id = 3;
    c3.name = 'temp';
    c3.min = 0.04;
    c3.max = 1;
    const c4 = new Constraint();
    c4.id = 4;
    c4.name = 'feed';
    c4.min = 5.8;
    c4.max = 8;
    const c5 = new Constraint();
    c5.id = 5;
    c5.name = 'ph';
    c5.min = 5.8;
    c5.max = 8;
    m2.constraints = [c3, c4, c5];

    u1.supportedModels = [m1, m2];
    u2.supportedModels = [m1];

    this.u_dict = {
      1: [u1, u2],
      2: [u1]
    };
  }

  getProjects(): Observable<Project[]> {
    return of([this.p_dict[1], this.p_dict[2]]);
  }

  getProjectUnitSteps(projectId: number): Observable<UnitStep[]> {
    return of(this.u_dict[projectId]);
  }
  getProject(projectId: number): Observable<Project> {
    return of(this.p_dict[projectId]);
  }
}
