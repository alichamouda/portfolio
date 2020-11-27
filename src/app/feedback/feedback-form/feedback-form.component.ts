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

  isSent = false;
  isSending = false;
  starCount = 5;

  constructor(private feedbackService: FeedbackService) {
  }

  ngOnInit(): void {
  }

  async sendFeedback() {
    this.isSending = true;
    const feedback = this.feedbackForm.value as FeedbackFormModel;
    feedback.stars = "" + this.starCount;
    try {
      this.isSent = await this.feedbackService.post(feedback).toPromise();
    } catch (e) {
      console.log("Error occurred");
      this.isSent = false;
    }
    this.isSending = false;
  }

  updateStarCount(starCount: any) {
    this.starCount = starCount;
  }
}

