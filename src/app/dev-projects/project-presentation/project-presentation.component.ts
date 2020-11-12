import {Component, Input, OnInit} from '@angular/core';
import {ProjectDescription} from "../_models/project-description";

@Component({
  selector: 'app-project-presentation',
  templateUrl: './project-presentation.component.html',
  styleUrls: ['./project-presentation.component.scss']
})
export class ProjectPresentationComponent implements OnInit {

  constructor() { }

  @Input()
  project: ProjectDescription;

  ngOnInit(): void {

  }

}
