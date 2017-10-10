import { Component, ViewEncapsulation, Output, EventEmitter, Input } from '@angular/core';
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

  @Input() public movie: any;
  @Input() public className: string = 'star';

  @Output() public onChangeRate: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    let i: number = 0;
    while (i < this.starsNumber) {
      this.stars.push({rate: i + 1});
      i++;
    }
  }

  private changeRate(star: Star): void {
    this.onChangeRate.emit(star.rate);
  }
}
