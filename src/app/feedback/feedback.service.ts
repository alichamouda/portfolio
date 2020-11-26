import {Injectable} from "@angular/core";
import {FeedbackModule} from "./feedback.module";
import {HttpClient} from "@angular/common/http";
import {FeedbackFormModel} from "./feedback-form.model";
import {Observable} from "rxjs";


@Injectable({
  providedIn: FeedbackModule
})
export class FeedbackService {

  BASE_URL = "https://test.com"
  userMessages = [
    {code: "200", message:"Thank you for your feedback !"},
    {code: "500", message:"Error has occurred. Please try later !"},
  ];

  constructor(private http: HttpClient) {
  }

  post(feedback: FeedbackFormModel): Observable<Object>  {
    return this.http.post(
      this.BASE_URL, feedback
    );
  }
}
