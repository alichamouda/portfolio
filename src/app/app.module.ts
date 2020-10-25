import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MainContainerComponent } from './main-container/main-container.component';
import {FlexModule} from "@angular/flex-layout/typings/flex";
import { SocialMediaLinksComponent } from './social-media-links/social-media-links.component';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainContainerComponent,
    SocialMediaLinksComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NoopAnimationsModule,
        FlexModule,
        MatIconModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
