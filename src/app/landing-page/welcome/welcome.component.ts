import { Component, OnInit } from '@angular/core';
import {CornerPatternComponent} from "../../layout/corner-pattern/corner-pattern.component";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  entryComponents: [CornerPatternComponent],
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
