import { Component, Input } from '@angular/core';
import { IEmployee } from '../../../models/employee.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  @Input() employeeData = [] as IEmployee[];
}
