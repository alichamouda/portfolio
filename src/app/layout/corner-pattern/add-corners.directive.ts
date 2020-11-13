import {ComponentFactoryResolver, ComponentRef, Directive, ElementRef, ViewContainerRef} from '@angular/core';
import {CornerPatternComponent} from "./corner-pattern.component";

@Directive({
  selector: '[appAddCorners]',
})
export class AddCornersDirective {
  private decoratedCorner: ComponentRef<CornerPatternComponent>;
  constructor(
    private viewContainerRef: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
    private elRef: ElementRef
  ) { }

  ngOnInit() {
    let factory = this.resolver.resolveComponentFactory(CornerPatternComponent);
    this.decoratedCorner = this.viewContainerRef.createComponent(factory);
    this.elRef.nativeElement.appendChild(this.decoratedCorner.location.nativeElement);
  }

}
