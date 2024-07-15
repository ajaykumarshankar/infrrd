import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appCloseOutsideClick]'
})
export class CloseOutsideClickDirective {

  constructor(private elementRef: ElementRef) { }
   @Output() closeOutsideClick = new EventEmitter();


   @HostListener('document: click', ['$event'])
   clickout(event: Event): void {
     const targetElement = (this.elementRef.nativeElement as HTMLElement).contains(event.target as HTMLElement);
     if(!targetElement) {
       // this.closeOutsideClick.emit(null);
     }
   }

}
