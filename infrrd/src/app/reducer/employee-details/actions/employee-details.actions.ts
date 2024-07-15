import { createAction, props } from "@ngrx/store";
import { IEmployee } from "../../../models/employee.model";
import { ISelect } from "../../../models/select.model";


export const setEmployeeData = createAction('[Infrrd App] Set employee details', props<{
    employeeData: IEmployee[]
}>());

export const getEmployeeDataAPI = createAction('[Infrrd App] Get employee details data api');

export const setIsloading = createAction('[Infrrd App] Set is loading status', props<{
    isLoading: boolean
}>());

export const setFilterData = createAction('[Infrrd App] Set is filter Data', props<{
    filterData: ISelect[]
}>());

export const setEmployeeFilterData = createAction('[Infrrd App] Set filtered employee details', props<{
    employeeFilterData: IEmployee[]
}>());

export const setIsFilterOpen = createAction('[Infrrd App] Set is open filter status', props<{
    isFilterOpen: boolean
}>());

