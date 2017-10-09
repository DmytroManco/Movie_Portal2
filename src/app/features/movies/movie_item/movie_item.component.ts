import { Component, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';
import { Movie } from '../movie.model';

@Component({
  selector: 'mp-movie-item',
  templateUrl: './movie_item.component.html',
  styleUrls: ['./movie_item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MovieItemComponent {
  @Input() public movie: Movie;
  @Input() public likes: number;
  @Output() public onMovieSelect: EventEmitter<Movie> = new EventEmitter<Movie>();
  @Output() public onLikeChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public onChangeRate: EventEmitter<number> = new EventEmitter<number>();
  @Output() public onGotoDetail: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  gotoDetail(id) {
    this.onGotoDetail.emit(id);
  }

  public changeLikes(bool): void {
    this.onMovieSelect.emit(this.movie);
    this.onLikeChange.emit(bool);
  }

  public changeRate(rate): void {
    this.onMovieSelect.emit(this.movie);
    this.onChangeRate.emit(rate);
  }
}
