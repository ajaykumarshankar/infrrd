import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromEmployeeDetails from '../reducers/employee-details.reducer'


export const selectEmployeeDataState = createFeatureSelector<fromEmployeeDetails.EmployeeDetailState>(
    fromEmployeeDetails.employeeDetailsFeatureKey,
)

export const selectEmployeeDataData = createSelector(selectEmployeeDataState,
    (employeeDetailState: fromEmployeeDetails.EmployeeDetailState) => {
        return employeeDetailState.employeeData
    }
)

export const selectEmployeeFilterData = createSelector(selectEmployeeDataState,
    (employeeDetailState: fromEmployeeDetails.EmployeeDetailState) => {
        return employeeDetailState.employeeFilterData
    }
)

export const selectIsLoading = createSelector(selectEmployeeDataState,
    (employeeDetailState: fromEmployeeDetails.EmployeeDetailState) => {
        return employeeDetailState.isLoading
    }
)

export const selectFilterDate = createSelector(selectEmployeeDataState,
    (employeeDetailState: fromEmployeeDetails.EmployeeDetailState) => {
        return employeeDetailState.filterData
    }
)

export const selectIsFilterOpen = createSelector(selectEmployeeDataState,
    (employeeDetailState: fromEmployeeDetails.EmployeeDetailState) => {
        return employeeDetailState.isFilterOpen
    }
)