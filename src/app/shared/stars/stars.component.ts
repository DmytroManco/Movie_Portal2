import { Component, ViewEncapsulation, Output, OnInit, EventEmitter, Input } from '@angular/core';
import { Star } from './star.model';
import { Movie } from '../../features/movies/movie.model';

@Component({
  selector: 'mp-stars',
  templateUrl: 'stars.component.html',
  styleUrls: ['stars.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StarsComponent implements OnInit {
  public stars: Star[] = [];
  public starsNumber: number = 5;

  @Input() public movie: Movie;
  @Input() public className: string = 'star';

  @Output() public onChangeRate: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  public ngOnInit() {
    this.makeStarsArray();
  }

  private changeRate(star: Star): void {
    this.onChangeRate.emit(star.rate);
  }

  private makeStarsArray(): Star[] {
    let i: number = 0;
    while (i < this.starsNumber) {
      this.stars.push({rate: i + 1});
      i++;
    }
    return this.stars;
  }
}
