import { Directive,HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTestColor]'
})
export class TestColorDirective {

  constructor(private el:ElementRef) { }
  @HostListener('mouseenter')OnMouseEnter(){
  	this.el.nativeElement.style.boxShadow="1px 5px 5px rgba(0,0,0,.5)"

  }
  @HostListener('mouseleave')OnMouseLeave(){
	this.el.nativeElement.style.boxShadow="0px 0px 0px rgba(0,0,0,.5)"  	
  }


}
