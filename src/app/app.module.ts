import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCheckboxModule, MatExpansionModule, MatFormFieldModule, MatInputModule,
  MatListModule
} from '@angular/material';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import {ProjectService} from './service/project.service';
import {RouterModule, Routes} from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UnitStepComponent } from './unit-step/unit-step.component';
import { UnitStepListComponent } from './unit-step-list/unit-step-list.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormItemComponent } from './dynamic-form-item/dynamic-form-item.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DynamicFormControlService} from './service/dynamic-form.service';
import { DsModelComponent } from './ds-model/ds-model.component';


const appRoutes: Routes = [
  { path: 'project', component: ProjectsListComponent },
  { path: 'project/:id', component: ProjectComponent },
  { path: 'project/:id/clone', component: ProjectComponent, data: { clone: true }}
  ]

@NgModule({
  declarations: [
    AppComponent,
    ProjectsListComponent,
    ProjectComponent,
    NavigationComponent,
    UnitStepComponent,
    UnitStepListComponent,
    DynamicFormComponent,
    DynamicFormItemComponent,
    DsModelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ProjectService, DynamicFormControlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
