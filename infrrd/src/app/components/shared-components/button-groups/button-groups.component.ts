import { Component } from '@angular/core';

@Component({
  selector: 'app-button-groups',
  styleUrl: './button-groups.component.scss',
  template: `
  <div class="button-groups">
     <ng-content></ng-content>
  </div>
  `,
})
export class ButtonGroupsComponent {}
