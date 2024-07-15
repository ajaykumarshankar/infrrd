import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IEmployee } from '../../../models/employee.model';
import { EmployeeDetailActions } from '../../../reducer/employee-details/actions/employee-details.actions-types';
import {
  selectEmployeeDataData,
  selectEmployeeFilterData,
} from '../../../reducer/employee-details/selectors/employee-details.selector';
import { setIsFilterOpen } from '../../../reducer/employee-details/actions/employee-details.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnDestroy {
  subscriptions = [] as Subscription[];
  employeeFilterData = [] as IEmployee[];

  readonly employeeData$: Observable<IEmployee[]> = this.store.select(
    selectEmployeeDataData
  );
  
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.getEmployeeDataApi();
    this.subscribeToEmployeeFilterData();
    setTimeout(() => {
      this.store.dispatch(setIsFilterOpen({ isFilterOpen: true }));
    }, 0);
  }

  subscribeToEmployeeFilterData(): void {
    this.subscriptions.push(
      this.store
        .select(selectEmployeeFilterData)
        .subscribe((employeeFilterData: IEmployee[]) => {
          this.employeeFilterData = employeeFilterData;
        })
    );
  }

  getEmployeeDataApi(): void {
    this.store.dispatch(EmployeeDetailActions.getEmployeeDataAPI());
  }

  ngOnDestroy(): void {
    this.store.dispatch(setIsFilterOpen({ isFilterOpen: false }));
  }
 
}
