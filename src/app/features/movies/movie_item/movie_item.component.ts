import { Component, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';
import { Movie } from '../movie.model';

@Component({
  selector: 'mp-movie-item',
  templateUrl: './movie_item.component.html',
  styleUrls: ['./movie_item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MovieItemComponent {
  @Input() private movie: Movie;
  @Output() private onMovieSelect: EventEmitter<Movie> = new EventEmitter<Movie>();
  @Output() private onLikeChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() private onChangeRate: EventEmitter<number> = new EventEmitter<number>();
  @Output() private onGotoDetail: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  private gotoDetail(id: number) {
    this.onGotoDetail.emit(id);
  }

  private changeLikes(bool: boolean): void {
    this.onMovieSelect.emit(this.movie);
    this.onLikeChange.emit(bool);
  }

  private changeRate(rate: number): void {
    this.onMovieSelect.emit(this.movie);
    this.onChangeRate.emit(rate);
  }
}
