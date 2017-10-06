import { Component, ViewEncapsulation, Output, EventEmitter, Input} from '@angular/core';
import { Star } from './star.model';

@Component({
  selector: 'mp-stars',
  templateUrl: 'stars.component.html',
  styleUrls: ['stars.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class StarsComponent {
  public stars: Star[] = [];
  public starsNumber: number = 5;

  @Input() public movie:any;
  @Input() className: string = 'star';

  @Output() onChangeRate: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    let i = 0;
    while(i < this.starsNumber){
      this.stars.push({rate: i+1});
      i++;
    }
  }

  changeRate(star) {
    this.onChangeRate.emit(star.rate);
  }
}
