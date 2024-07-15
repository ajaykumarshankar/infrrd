import { Component, Input } from '@angular/core';
import { IEmployee } from '../../../../models/employee.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() employee = {} as IEmployee;
}
