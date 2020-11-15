import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appSetBackgroundColor]'
})
export class SetBackgroundColor implements OnInit {

  PREFIX="--";

  @Input('appSetBackgroundColor') backgroundColor: string;

  constructor(private el: ElementRef) {

  }

  ngOnInit(): void {
    const bodyStyles = window.getComputedStyle(document.body);
    // set color hex to background
    this.el.nativeElement.style.backgroundColor = bodyStyles.getPropertyValue(this.PREFIX +this.backgroundColor);
  }
}
