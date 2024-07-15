import { Component, EventEmitter, Input, Output, output, ViewEncapsulation } from '@angular/core';
import { IFormFields } from '../../../constants/form.constants';
import { IFilterFields } from '../../../../models/filter-fields.model';
import { ISelect } from '../../../../models/select.model';
import { EmployeeService } from '../../../../services/employee.service';
import { SelectService } from '../../../../services/form-fields/select.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class DynamicFormComponent {  
  @Input() config = [] as IFilterFields[];
  @Output() selectOptionEvent = new EventEmitter<ISelect>();
  Field_Types = IFormFields; 

  constructor(private selectService: SelectService) {}

  onSelect(e: ISelect): void {
    this.selectOptionEvent.emit(e);
  }

  onClose(): void {
    this.selectService.closeSelectDropdown();
  }

}
