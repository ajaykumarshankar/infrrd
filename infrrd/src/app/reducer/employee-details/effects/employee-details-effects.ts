import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EmployeeDetailActions } from '../actions/employee-details.actions-types';
import { catchError, map, ObservableInput, of, switchMap, pipe } from 'rxjs';
import { EmployeeService } from '../../../services/employee.service';
import { IEmployee, IEmployees } from '../../../models/employee.model';
import { ApiResponse } from '../../../models/api-response';

@Injectable()
export class EmployeeDetailEffects {
  getEmployeeDataAPI$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EmployeeDetailActions.getEmployeeDataAPI),
      switchMap(() =>
        this.employeeService.getEmployees().pipe(
          switchMap((response: IEmployee[]) => {
            const employeeData = response && response.length ? response as IEmployee[] : [];
            return [
              EmployeeDetailActions.setEmployeeData({ employeeData }),
              EmployeeDetailActions.setEmployeeFilterData({ employeeFilterData:  employeeData})
            ];
          }),
          catchError(() => {
            return [EmployeeDetailActions.setIsloading({ isLoading: false })];
          })
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private store: Store,
    private employeeService: EmployeeService
  ) {}
}
