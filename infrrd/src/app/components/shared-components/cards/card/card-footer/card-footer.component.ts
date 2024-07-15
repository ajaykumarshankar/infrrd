import { Component, Input } from '@angular/core';
import { IEmployee } from '../../../../../models/employee.model';

@Component({
  selector: 'app-card-footer',
  templateUrl: './card-footer.component.html',
  styleUrl: './card-footer.component.scss'
})
export class CardFooterComponent {
  @Input() employee = {} as IEmployee;
}
