import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IEmployee } from '../../../models/employee.model';
import { Subscription } from 'rxjs';
import { ISelect } from '../../../models/select.model';
import { selectFilterDate, selectEmployeeDataData, selectEmployeeFilterData } from '../../../reducer/employee-details/selectors/employee-details.selector';
import { Store } from '@ngrx/store';
import { filterEmployeeResultsForCheckbox, filterEmployeeResultsForSelect } from '../../../utils/filter.utils';
import { setEmployeeFilterData } from '../../../reducer/employee-details/actions/employee-details.actions';

@Component({
  selector: 'app-results-filter',
  templateUrl: './results-filter.component.html',
  styleUrl: './results-filter.component.scss'
})
export class ResultsFilterComponent implements OnInit, OnDestroy {
  @Input() employeeData = [] as IEmployee[];

  constructor(private store: Store) {}
  
  subscriptions = [] as Subscription[];
  filterData = [] as ISelect[];
  employeeFilterData = [] as IEmployee[];

  ngOnInit(): void {
    this.subscribeToFilterDate();
    this.subscribeToEmployeeFilterData();
  }

  subscribeToFilterDate(): void {
    this.subscriptions.push(
      this.store.select(selectFilterDate).subscribe((filterData: ISelect[]) => {
        this.filterData = filterData;
      })
    );
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

  onChangeCheckbox(event: Event): void {
    const isChecked = (<HTMLInputElement>event.target).checked
    if(isChecked) {
      const filterEmployeeData = filterEmployeeResultsForCheckbox(
        'location',
        'Bangalore',
        this.employeeData
      ) as IEmployee[];
      this.setFilteredEmployeeDate(filterEmployeeData);
    } else {
      this.setFilteredEmployeeDate(this.employeeData);
    }
  }

  setFilteredEmployeeDate(filterEmployeeData: IEmployee[]): void {
    this.store.dispatch(setEmployeeFilterData({ employeeFilterData: filterEmployeeData }));
  }

  

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
