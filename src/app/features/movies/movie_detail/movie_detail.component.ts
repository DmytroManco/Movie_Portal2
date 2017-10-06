import { Component, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';
import 'rxjs/Rx';
import { Movie } from '../movie.model';

@Component({
  selector: 'mp-movies-detail',
  templateUrl: './movie_detail.component.html',
  styleUrls: ['./movie_detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MovieDetailComponent {
  @Input() public movie: Movie;
  @Output() public onChangeRate: EventEmitter<number> = new EventEmitter<number>();
  public changeRate(rate) {
    this.onChangeRate.emit(rate);
  }
}
