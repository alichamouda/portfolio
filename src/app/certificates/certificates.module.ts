import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificateCardComponent } from './certificate-card/certificate-card.component';
import { AllCertificateCardsComponent } from './all-certificate-cards/all-certificate-cards.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {LayoutModule} from "../layout/layout.module";



@NgModule({
  declarations: [ CertificateCardComponent, AllCertificateCardsComponent],
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
