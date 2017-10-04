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

  onMovieSelect(movie, e) {
    if(e.target.classList.contains('movie-item__link')){
      this.selectedMovie = movie;
    }
  }

  onAddLike(){
    console.log(this.likes);
  }
}
