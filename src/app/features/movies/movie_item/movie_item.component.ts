import { Component, ViewEncapsulation, Input } from '@angular/core';
import {Movie} from "../movie.Interface";


@Component({
  selector: 'mp-movie-item',
  templateUrl: './movie_item.component.html',
  styleUrls: ['./movie_item.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class MovieItemComponent {
  @Input movie: Movie;
}
