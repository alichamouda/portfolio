import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CornerPatternComponent } from './corner-pattern/corner-pattern.component';
import { AddCornersDirective } from './corner-pattern/add-corners.directive';
import { BannerComponent } from './banner/banner.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { SetBackgroundColor } from './set-background-color/set-background-color.directive';



@NgModule({
    declarations: [CornerPatternComponent, AddCornersDirective, BannerComponent, SetBackgroundColor],
  exports: [
    CornerPatternComponent,
    AddCornersDirective,
    BannerComponent
  ],
    imports: [
        CommonModule,
        FlexLayoutModule
    ]
})
export class LayoutModule { }
