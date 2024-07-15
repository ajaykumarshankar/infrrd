import { Component, Input } from '@angular/core';
import { IEmployee } from '../../../../../models/employee.model';

@Component({
  selector: 'app-card-main',
  templateUrl: './card-main.component.html',
  styleUrl: './card-main.component.scss'
})
export class CardMainComponent {
  @Input() employee = {} as IEmployee;
}
