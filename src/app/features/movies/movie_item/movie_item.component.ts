import { Component, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';
import { Movie } from "../movie.interface";

@Component({
  selector: 'mp-movie-item',
  templateUrl: './movie_item.component.html',
  styleUrls: ['./movie_item.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class MovieItemComponent{
  @Input() movie: Movie;
  @Input() likes: number;
  @Output() onMovieSelect: EventEmitter<Movie> = new EventEmitter<Movie>();
  @Output() onLikeChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() onChangeRate: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}
  selectMovie(movie: Movie) {
    this.onMovieSelect.emit(movie);
  }

  changeLikes(bool) {
    this.selectMovie(this.movie);
    this.onLikeChange.emit(bool);
  }

  changeRate(rate) {
    this.selectMovie(this.movie);
    this.onChangeRate.emit(rate);
  }
}
