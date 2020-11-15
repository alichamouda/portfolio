import {Component, OnInit} from '@angular/core';
import {VolunteeringDescription} from "../_models/VolunteeringDescription";
import {MyVolunteeringActivity} from "../_consts/MyVolunteeringActivity";

@Component({
  selector: 'app-all-volunteering-cards',
  templateUrl: './all-volunteering-cards.component.html',
  styleUrls: ['./all-volunteering-cards.component.scss']
})
export class AllVolunteeringCardsComponent implements OnInit {

  volunteeringActivities: VolunteeringDescription[];

  constructor() {
  }

  ngOnInit(): void {
    this.volunteeringActivities = MyVolunteeringActivity;
  }

}
