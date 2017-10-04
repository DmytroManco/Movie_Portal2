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
  @Output() onMovieSelect: EventEmitter<Movie> = new EventEmitter<Movie>();

  constructor() {}

  selectMovie(movie: Movie) {
    this.onMovieSelect.emit(movie);
  }
}
