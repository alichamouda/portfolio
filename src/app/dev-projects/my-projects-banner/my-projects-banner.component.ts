import { Component, OnInit } from '@angular/core';
import {CornerPatternComponent} from "../../layout/corner-pattern/corner-pattern.component";

@Component({
  selector: 'app-my-projects-banner',
  templateUrl: './my-projects-banner.component.html',
  styleUrls: ['./my-projects-banner.component.scss'],
  entryComponents: [CornerPatternComponent],
})
export class MyProjectsBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
