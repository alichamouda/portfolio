import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCertificateCardsComponent } from './all-certificate-cards/all-certificate-cards.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {LayoutModule} from "../layout/layout.module";



@NgModule({
  declarations: [ AllCertificateCardsComponent],
  exports: [
    AllCertificateCardsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    LayoutModule
  ]
})
export class CertificatesModule { }
