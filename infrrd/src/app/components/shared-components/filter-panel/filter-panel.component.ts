import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { IFormFields } from '../../constants/form.constants';
import { Filter_Config } from '../../constants/filter-panel.constants';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  selectEmployeeDataData,
  selectEmployeeFilterData,
  selectFilterDate,
} from '../../../reducer/employee-details/selectors/employee-details.selector';
import {
  setEmployeeData,
  setEmployeeFilterData,
  setFilterData,
  setIsFilterOpen,
} from '../../../reducer/employee-details/actions/employee-details.actions';
import { filterEmployeeResultsForSelect } from '../../../utils/filter.utils';
import { IEmployee } from '../../../models/employee.model';
import { ISelect } from '../../../models/select.model';
import { SelectService } from '../../../services/form-fields/select.service';
import { IFilterFields } from '../../../models/filter-fields.model';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrl: './filter-panel.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class FilterPanelComponent implements OnInit, OnDestroy {
  @Input() isFilterOpen = false;
  filterFormConfig = [] as IFilterFields[];
  subscriptions = [] as Subscription[];
  filterData = [] as ISelect[];
  employeeData = [] as IEmployee[];
  employeeFilterData = [] as IEmployee[];
  

  constructor(private store: Store, private selectService:SelectService) {}

  ngOnInit(): void {
    this.subscribeToFilterDate();
    this.subscribeToEmployeeData();
    this.subscribeToEmployeeFilterData();
    this.setFilterFormFields(Filter_Config);
  }

  setFilterFormFields(flterConfig: IFilterFields[]): void {
    this.filterFormConfig = flterConfig;
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
        .subscribe((employeeDetail: IEmployee[]) => {
          this.employeeData = employeeDetail;
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
  }

  getFilterDataList(select: ISelect): ISelect[] {
    this.filterData = this.filterData.filter((item) => item.key !== select.key);
    return [...this.filterData, select];
  }

  onClick(label: string): void {
    if(!this.filterData.length) return
    const isSubmit = label === 'Submit' ? true : false;
    if (isSubmit) {
      const filterEmployeeData = filterEmployeeResultsForSelect(
        this.filterData,
        this.employeeData
      ) as IEmployee[];
      this.setFilteredEmployeeDate(filterEmployeeData);
    } else { 
       this.setFilterData([]);
       this.setFilterFormFields([...Filter_Config]);
       this.setFilteredEmployeeDate(this.employeeData)
    }
  }

  setFilteredEmployeeDate(filterEmployeeData: IEmployee[]): void {
    this.store.dispatch(setEmployeeFilterData({ employeeFilterData: filterEmployeeData }));
  }

  setFilterData(filterData: ISelect[]): void {
    this.store.dispatch(setFilterData({ filterData: filterData }));
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}

