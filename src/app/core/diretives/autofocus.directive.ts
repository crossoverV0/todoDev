import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[myAutofocus]',
  standalone: true
})
export class AutofocusDirective implements OnInit {

  constructor(private elementRef: ElementRef) { };

  ngOnInit(): void {
    this.elementRef.nativeElement.focus();
  }

}