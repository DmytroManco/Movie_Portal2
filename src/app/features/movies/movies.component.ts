import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../core/services/movies.service';
import 'rxjs/Rx';
import { Movie } from './movie.model';

@Component({
  selector: 'mp-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MoviesComponent implements OnInit {
  public movies: Movie[];
  public selectedMovie: Movie;
  @Input() public likes: number;

  public constructor(public service: MoviesService) {}

  public ngOnInit() {
    this.service.fetchData().subscribe(
      (data) => {
        this.movies = data;
        this.selectedMovie = data[0];
      }
    );
  }

  public movieSelect(movie): void {
      this.selectedMovie = movie;
  }

  public changeLikes(bool): void {
    (bool === true) ? this.selectedMovie.likes += 1 : this.selectedMovie.likes -= 1;
    this.service.updateMovie(this.selectedMovie);
  }

  public sortMovies(param) {
    this.service.sortMovies(param).subscribe(
      (data) => this.movies = data
    );
  }

  public searchMovie(filter) {
   this.service.filterMovie(filter).subscribe(
     (data) => this.movies = data
   );
  }

  public changeRate(rate): void {
    this.selectedMovie.stars = rate;
    this.service.updateMovie(this.selectedMovie);
  }

}
