import { Component, ViewEncapsulation, OnInit, Input} from '@angular/core';
import { MoviesService } from "../../core/services/movies.service";
import 'rxjs/Rx';
import { Movie } from './movie.interface';


@Component({
  selector: 'mp-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class MoviesComponent implements OnInit{
  public movies: Movie[];
  public selectedMovie: Movie;
  public filter;
  @Input() likes: number;
  public constructor(public service: MoviesService) {}

  ngOnInit(){
    this.service.fetchData().subscribe(
      (data) => {
        this.movies = data;
        this.selectedMovie = data[0];
      }
    )
  }

  movieSelect(movie) {
      this.selectedMovie = movie;
  }

  changeLikes(bool) {
    (bool === true) ? this.selectedMovie.likes +=1 : this.selectedMovie.likes -=1;
    this.service.updateMovie(this.selectedMovie);
  }

  sortMovies(param) {
    (param === 'likes') ? this.movies.sort((movie1, movie2) => movie2.likes - movie1.likes)
      : this.movies.sort((movie1, movie2) => movie2.stars - movie1.stars)
    ;
  }

  searchMovie(filter) {
   this.filter = filter.toLowerCase();
  }

}
