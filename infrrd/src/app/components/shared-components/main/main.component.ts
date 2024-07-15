import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectEmployeeFilterData, selectIsFilterOpen } from '../../../reducer/employee-details/selectors/employee-details.selector';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
   readonly isFilterOpen$: Observable<boolean> = this.store.select(selectIsFilterOpen);
  constructor(private store: Store) {}
}
