import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolunteeringCardComponent } from './volunteering-card/volunteering-card.component';
import { AllVolunteeringCardsComponent } from './all-volunteering-cards/all-volunteering-cards.component';
import {FlexLayoutModule} from "@angular/flex-layout";



@NgModule({
    declarations: [VolunteeringCardComponent, AllVolunteeringCardsComponent],
    exports: [
        AllVolunteeringCardsComponent
    ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ]
})
export class VolunteeringModule { }
