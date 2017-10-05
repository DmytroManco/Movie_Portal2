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

  @Input() starCount: number;
  @Input() rating: number = this.movie.stars;
  @Output() rate = new EventEmitter();
  stars:number[] = [1,2,3,4,5];
  _rating = this.rating;

  constructor() {
    const count = this.starCount < 0 ? 5 : this.starCount;
  }

  selectMovie(movie: Movie) {
    this.onMovieSelect.emit(movie);
  }

  changeLikes(bool) {
    this.selectMovie(this.movie);
    this.onLikeChange.emit(bool);
  }

  onRate(star) {
    this.rate.emit(star);
    this._rating = star;
  }
}
