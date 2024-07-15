import { createReducer, on } from "@ngrx/store";
import { IEmployee } from "../../../models/employee.model";
import { EmployeeDetailActions } from "../actions/employee-details.actions-types";
import { ISelect } from "../../../models/select.model";


export const employeeDetailsFeatureKey = 'employeeDetail';

export interface EmployeeDetailState {
    employeeData: IEmployee[];
    isLoading: boolean;
    filterData: ISelect[];
    employeeFilterData: IEmployee[];
    isFilterOpen: boolean;
}

export const initEmployeeDetailState: EmployeeDetailState = {
    employeeData: [],
    isLoading: false,
    filterData: [],
    employeeFilterData: [],
    isFilterOpen: false
}


export const employeeDetailReducer = createReducer(
    initEmployeeDetailState,
    on(EmployeeDetailActions.setEmployeeData, (state: EmployeeDetailState, { employeeData }) => {
        return  {...state, employeeData}
    }),
    on(EmployeeDetailActions.setIsloading, (state: EmployeeDetailState, { isLoading }) => {
        return  {...state, isLoading}
    }),
    on(EmployeeDetailActions.setFilterData, (state: EmployeeDetailState, { filterData }) => {
        return  {...state, filterData }
    }),
    on(EmployeeDetailActions.setEmployeeFilterData, (state: EmployeeDetailState, { employeeFilterData }) => {
        return  {...state, employeeFilterData }
    }),
    on(EmployeeDetailActions.setIsFilterOpen, (state: EmployeeDetailState, { isFilterOpen }) => {
        return  {...state, isFilterOpen }
    })
)