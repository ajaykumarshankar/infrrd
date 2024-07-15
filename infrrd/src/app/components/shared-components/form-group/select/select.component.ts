import { Component, EventEmitter, Input, OnInit, ViewEncapsulation,Output, OnChanges, SimpleChanges, input } from '@angular/core';
import { ISelect } from '../../../../models/select.model';
import { SelectService } from '../../../../services/form-fields/select.service';
import { IFilterFields } from '../../../../models/filter-fields.model';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent implements OnInit  {
  @Input() width = 200;
  @Input() height = 80;
  @Input() initValue = 'Select';
  @Input() selectId = "select-dropdown";
  @Input() list = [] as ISelect[];
  @Input() label = '' as string | undefined;
  @Input() top!: number | undefined;
  @Output() selectOptionEvent = new EventEmitter<ISelect>();

  selectedValue = ''
  isSelectOpened = false;

  constructor(private selectService: SelectService) {}
 
  ngOnInit(): void {
      this.selectedValue = this.initValue;  
  }

  onSelectClick(event: Event): void {
    const select = event.target as HTMLElement;
    this.isSelectOpened = true;
    this.selectService.openSelectDropdown(select);   
  }

  onSelectOption(event: Event, item: ISelect): void {
    this.selectService.closeSelectDropdown();
    this.selectedValue =  item.displayValue;
    this.isSelectOpened = false;
    this.selectOptionEvent.emit(item);
  }
  
  getTopPostion(): number {
    return this.top ? this.top : this.height + 10;
  }

  onModalClick(): void {
    this.isSelectOpened = false;
    this.selectService.closeSelectDropdown();
  }

  generateDynamicId(id: string): string {
    return id.replace(/ /g,"_");
  }
}
