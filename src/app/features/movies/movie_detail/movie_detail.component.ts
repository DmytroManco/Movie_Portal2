import {Component, ViewEncapsulation, Input} from '@angular/core';
import 'rxjs/Rx';
import { Movie } from '../movie.interface';

@Component({
  selector: 'mp-movies-detail',
  templateUrl: './movie_detail.component.html',
  styleUrls: ['./movie_detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class MovieDetailComponent{
  @Input() movie: Movie;
}
