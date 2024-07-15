import { Injectable } from '@angular/core';
import {
  SELECT_DROPDOWN_CLASSNAME,
  SELECT_OPEN_CLASSNAME,
} from '../../components/constants/select.constants';

@Injectable({
  providedIn: 'root',
})
export class SelectService {
  constructor() {}

  openSelectDropdown(target: HTMLElement): void {
    const select = target as HTMLElement;
    if (select.classList.contains(SELECT_DROPDOWN_CLASSNAME)) {
      select.classList.add(SELECT_OPEN_CLASSNAME);
    } else {
      const closestSelect = select.closest(
        `.${SELECT_DROPDOWN_CLASSNAME}`
      ) as HTMLElement;
      closestSelect.classList.add(SELECT_OPEN_CLASSNAME);
    }
  }

  closeSelectDropdown(): void {
    const selectAll = document.querySelectorAll(
      `.${SELECT_DROPDOWN_CLASSNAME}`
    ) as NodeListOf<Element>;
    selectAll.forEach((element) => {
      element.classList.remove(SELECT_OPEN_CLASSNAME);
    });
  }

  getAllSelectedValues(): void {
    const selectAll = document.querySelectorAll(
      `.${SELECT_DROPDOWN_CLASSNAME}`
    ) as NodeListOf<Element>;
  }

  resetSelectFields(selectArr: any[]): void {
     selectArr.forEach((select) => {
        const selectEle = document.querySelector(`#${select.id}`);
        const initEle = selectEle?.nextElementSibling?.querySelector('.initial-value');
        if(initEle) {
          initEle.innerHTML = select?.initValue;;
        }        
     })
  }
}
