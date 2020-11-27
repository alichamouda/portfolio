import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedbackFormComponent} from './feedback-form/feedback-form.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {ReactiveFormsModule} from "@angular/forms";
import {LayoutModule} from "../layout/layout.module";
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";
import {StarHandlerComponent} from './star-handler/star-handler.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";


@NgModule({
  declarations: [FeedbackFormComponent, StarHandlerComponent],
  exports: [
    FeedbackFormComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    LayoutModule,
    HttpClientModule,
    MatIconModule,
    MatProgressBarModule,
  ]
})
export class FeedbackModule {
}
