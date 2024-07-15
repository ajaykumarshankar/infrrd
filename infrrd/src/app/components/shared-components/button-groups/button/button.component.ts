import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() type  = 'primary';
   @Input() label  = 'Submit';
   @Input() width  = 80;

   @Output() buttonEvent = new EventEmitter<string>();

   onClick(label: string): void {
      this.buttonEvent.emit(label);
   }
}
