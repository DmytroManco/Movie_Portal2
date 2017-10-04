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

  @Output() choose: EventEmitter<Movie> = new EventEmitter<Movie>();
  @Output() onAddLike: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  selectMovie(movie: Movie) {
    this.choose.emit(movie);
  }

  addLike() {
    this.onAddLike.emit(this.likes);
  }

}
