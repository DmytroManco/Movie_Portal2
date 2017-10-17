import { Component, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';
import { Movie } from '../../../shared/movie-model/movie.model';

@Component({
  selector: 'mp-movie-item',
  templateUrl: 'movie-item.component.html',
  styleUrls: ['movie-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MovieItemComponent {
  @Input() private movie: Movie;
  @Output() private onMovieSelect: EventEmitter<Movie> = new EventEmitter<Movie>();
  @Output() private onLikeChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() private changeRate: EventEmitter<number> = new EventEmitter<number>();
  @Output() private onGotoDetail: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  private gotoDetail(id: number) {
    this.onGotoDetail.emit(id);
  }

  private changeLikes(bool: boolean): void {
    this.onMovieSelect.emit(this.movie);
    this.onLikeChange.emit(bool);
  }

  private onChangeRate(rate: number): void {
    this.onMovieSelect.emit(this.movie);
    this.changeRate.emit(rate);
  }
}
