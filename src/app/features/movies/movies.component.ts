import { Component, ViewEncapsulation, OnInit, Input} from '@angular/core';
import { MoviesService } from "../../core/services/movies.service";
import 'rxjs/Rx';
import { Movie } from './movie.Interface';

@Component({
  selector: 'mp-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class MoviesComponent implements OnInit{
  public movies: Movie[];
  // @Input() public movie: Movie;

  public constructor(public service: MoviesService) {}

  ngOnInit(){
    this.service.fetchData().subscribe(
      (data) => this.movies = data
    )
  }

}
