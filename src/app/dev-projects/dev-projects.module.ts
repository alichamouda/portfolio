import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectPresentationComponent } from './project-presentation/project-presentation.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { MyProjectsBannerComponent } from './my-projects-banner/my-projects-banner.component';



@NgModule({
    declarations: [ProjectPresentationComponent, AllProjectsComponent, MyProjectsBannerComponent],
  exports: [
    ProjectPresentationComponent,
    AllProjectsComponent,
    MyProjectsBannerComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ]
})
export class DevProjectsModule { }
