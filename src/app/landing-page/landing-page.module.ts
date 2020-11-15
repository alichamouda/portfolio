import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MainComponent } from './main/main.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { GeneralPresentationComponent } from './general-presentation/general-presentation.component';
import {DevProjectsModule} from "../dev-projects/dev-projects.module";
import {LayoutModule} from "../layout/layout.module";
import {CertificatesModule} from "../certificates/certificates.module";
import {VolunteeringModule} from "../volunteering/volunteering.module";
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [NavBarComponent, WelcomeComponent, MainComponent, GeneralPresentationComponent, FooterComponent],
  exports: [
    MainComponent
  ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        DevProjectsModule,
        LayoutModule,
        CertificatesModule,
        VolunteeringModule,
    ]
})
export class LandingPageModule { }
