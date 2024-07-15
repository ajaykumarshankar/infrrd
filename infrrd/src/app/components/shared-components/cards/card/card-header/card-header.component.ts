import { Component, Input } from '@angular/core';
import { IEmployee } from '../../../../../models/employee.model';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrl: './card-header.component.scss'
})
export class CardHeaderComponent {
  @Input() employee = {} as IEmployee;
}
