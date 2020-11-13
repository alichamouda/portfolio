import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CornerPatternComponent } from './corner-pattern/corner-pattern.component';
import { AddCornersDirective } from './corner-pattern/add-corners.directive';



@NgModule({
    declarations: [CornerPatternComponent, AddCornersDirective],
  exports: [
    CornerPatternComponent,
    AddCornersDirective
  ],
    imports: [
        CommonModule
    ]
})
export class LayoutModule { }
