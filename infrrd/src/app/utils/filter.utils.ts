import { IEmployee } from "../models/employee.model"
import { ISelect } from "../models/select.model";

export const filterEmployeeResultsForSelect = (params: ISelect[], data: IEmployee[]): IEmployee[] => {
    let tempFilterArry = [] as IEmployee[]; 
    params.forEach((filterValue => {
           const items: IEmployee[]  = filterByKey(data, filterValue.value, filterValue.key);
           tempFilterArry = [...tempFilterArry, ...items];

    }));
    return tempFilterArry as IEmployee[];
}

export const filterEmployeeResultsForCheckbox = (key: string, value: string, data: IEmployee[]): IEmployee[] => {
    return [...data].filter((employee: IEmployee) => employee[key as keyof IEmployee] == value)
}

export const filterByKey = (data: IEmployee[], value: string | number, key: string | undefined): IEmployee[] =>   {
    return [...data].filter((employee) => employee[key as keyof IEmployee] == value);
}