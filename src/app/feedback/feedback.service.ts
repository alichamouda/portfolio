import {Injectable} from "@angular/core";
import {FeedbackModule} from "./feedback.module";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {FeedbackFormModel} from "./feedback-form.model";
import {Observable} from "rxjs";
import {map, tap} from "rxjs/operators";


@Injectable({
  providedIn: FeedbackModule
})
export class FeedbackService {

  optionRequete = {
    headers: new HttpHeaders({
      // 'Access-Control-Allow-Origin':'*',
      'content-type': 'application/json',
    })
  };

  BASE_URL = "https://xhslnklr59.execute-api.us-east-1.amazonaws.com/Prod"
  userMessages = [
    {code: "200", message: "Thank you for your feedback !"},
    {code: "500", message: "Error has occurred. Please try later !"},
  ];

  constructor(private http: HttpClient) {
  }

  post(feedback: FeedbackFormModel): Observable<boolean> {
    return this.http.post(
      this.BASE_URL, feedback, this.optionRequete
    ).pipe(
      map((response) =>  response['statusCode'] < 299)
    );
  }
}
