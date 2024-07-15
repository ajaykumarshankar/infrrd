import { Component, ViewEncapsulation } from '@angular/core';
import { Choose_Team_Config } from '../../constants/choose-team.constants';
import { ISelect } from '../../../models/select.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  chooseTeamConfig = Choose_Team_Config; 
}
