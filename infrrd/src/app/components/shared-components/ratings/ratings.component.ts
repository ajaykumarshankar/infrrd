import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Ratings } from '../../constants/ratings.constants';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrl: './ratings.component.scss'
})
export class RatingsComponent  {
  @ViewChild('rating', { static: false })  rating!: ElementRef;
  @Input() ratings = 0;
  ratingStatus = Ratings;
}
