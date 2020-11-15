import {Component, Input, OnInit} from '@angular/core';
import {VolunteeringDescription} from "../_models/VolunteeringDescription";

@Component({
  selector: 'app-volunteering-card',
  templateUrl: './volunteering-card.component.html',
  styleUrls: ['./volunteering-card.component.scss']
})
export class VolunteeringCardComponent implements OnInit {

  @Input()
  activity: VolunteeringDescription;

  constructor() { }

  ngOnInit(): void {
  }

}
