import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EmployeeDetailActions } from '../../../reducer/employee-details/actions/employee-details.actions-types';
import { Observable } from 'rxjs';
import { IEmployee } from '../../../models/employee.model';
import { selectEmployeeDataData } from '../../../reducer/employee-details/selectors/employee-details.selector';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent implements OnInit {
  readonly employeeData$: Observable<IEmployee[]> = this.store.select(selectEmployeeDataData);
  constructor(private store: Store) {}

    ngOnInit(): void {
        this.getEmployeeDataApi();
    }

    getEmployeeDataApi(): void {
      this.store.dispatch(EmployeeDetailActions.getEmployeeDataAPI())
    }
}
