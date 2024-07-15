import { Component, Input, OnInit } from '@angular/core';
import { ISelect } from '../../../models/select.model';
import { IFilterFields } from '../../../models/filter-fields.model';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IEmployee } from '../../../models/employee.model';
import { selectFilterDate, selectEmployeeFilterData, selectEmployeeDataData } from '../../../reducer/employee-details/selectors/employee-details.selector';
import { filterEmployeeResultsForSelect } from '../../../utils/filter.utils';
import { setEmployeeFilterData } from '../../../reducer/employee-details/actions/employee-details.actions';

@Component({
  selector: 'app-choose-team',
  templateUrl: './choose-team.component.html',
  styleUrl: './choose-team.component.scss'
})
export class ChooseTeamComponent implements OnInit {
  @Input() config = [] as IFilterFields[];

  constructor(private store: Store) {}
  
  subscriptions = [] as Subscription[];
  filterData = [] as ISelect[];
  employeeFilterData = [] as IEmployee[];
  employeeData = [] as IEmployee[];

  ngOnInit(): void {
    this.subscribeToEmployeeData();
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

  subscribeToEmployeeData(): void {
    this.subscriptions.push(
      this.store
        .select(selectEmployeeDataData)
        .subscribe((employeeData: IEmployee[]) => {
          this.employeeData = employeeData;
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


  onSelect(select: ISelect): void {
    const isFilterExist = this.filterData.find(
      (condition) => condition.value === select.value
    );
    if (!isFilterExist) {
      this.filterData = this.getFilterDataList(select);
    }
    this.setFilteredEmployeeDataByTeam();
  }
  getFilterDataList(select: ISelect): ISelect[] {
    this.filterData = this.filterData.filter((item) => item.key !== select.key);
    return [...this.filterData, select];
  }

  setFilteredEmployeeDataByTeam(): void {
    const filterEmployeeData = filterEmployeeResultsForSelect(
      this.filterData,
      this.employeeData
    ) as IEmployee[];
    this.setFilteredEmployeeDate(filterEmployeeData);
  }

  setFilteredEmployeeDate(filterEmployeeData: IEmployee[]): void {
    this.store.dispatch(setEmployeeFilterData({ employeeFilterData: filterEmployeeData }));
  }
  
}
