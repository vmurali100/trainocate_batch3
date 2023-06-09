import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appValid]'
})
export class ValidDirective {

  constructor(private el: ElementRef) { 
    console.log(this.el)
    this.el.nativeElement.style.color="red"
  }

}
