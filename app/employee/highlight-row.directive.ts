import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightRow]'
})
export class HighlightRowDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('mousemove') applyMouseOver(){
    this.rowChange("grey");
  }
  @HostListener('mouseout') applyMouseOut(){
    this.rowChange("white");
  }

  public rowChange(color: string){
    this.elementRef.nativeElement.style.backgroundColor = color;
  }

}
