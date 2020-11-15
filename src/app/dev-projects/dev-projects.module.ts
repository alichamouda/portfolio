import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectPresentationComponent } from './project-presentation/project-presentation.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { AllProjectsComponent } from './all-projects/all-projects.component';
import {LayoutModule} from "../layout/layout.module";



@NgModule({
    declarations: [ProjectPresentationComponent, AllProjectsComponent],
  exports: [
    ProjectPresentationComponent,
    AllProjectsComponent,
  ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        LayoutModule
    ]
})
export class DevProjectsModule { }
