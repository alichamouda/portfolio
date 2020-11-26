import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup} from "@angular/forms";
import {FeedbackFormModel} from "../feedback-form.model";
import {FeedbackService} from "../feedback.service";

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent implements OnInit {

  feedbackForm = new FormGroup({
    name: new FormControl(),
    stars: new FormControl(),
    message: new FormControl(),
  });

  starCount = 5;

  constructor(private feedbackService: FeedbackService) {
  }

  ngOnInit(): void {
  }

  async sendFeedback() {
    const feedback = this.feedbackForm.value as FeedbackFormModel;
    feedback.stars = "" + this.starCount;
    const responseStatus = await this.feedbackService.post(feedback).toPromise();
    // show and hide message banner
  }

  updateStarCount(starCount: any) {
    this.starCount = starCount;
  }
}
