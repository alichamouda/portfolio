import {Component, OnInit} from '@angular/core';
import {MyProjects} from "../_consts/my-projects";
import {ProjectDescription} from "../_models/project-description";

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.scss']
})
export class AllProjectsComponent implements OnInit {

  constructor() {
  }

  projects: ProjectDescription[];

  ngOnInit(): void {
    this.projects = MyProjects.filter((project) => project.displayOnMain);
  }

}
