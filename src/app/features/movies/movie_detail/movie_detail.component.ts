import { Component, ViewEncapsulation, Input, EventEmitter, Output, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { Movie } from '../movie.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MoviesService } from '../../../core/services/movies.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'mp-movies-detail',
  templateUrl: './movie_detail.component.html',
  styleUrls: ['./movie_detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MovieDetailComponent implements OnInit {
  @Input() public movie: Movie;
  @Output() public onChangeRate: EventEmitter<number> = new EventEmitter<number>();
  private subscriptions: Subscription;

  constructor(private service: MoviesService, private route: ActivatedRoute) {}

  public ngOnInit() {
    this.subscriptions = this.route.paramMap
      .switchMap((params: ParamMap) => this.service.getMovie(+params.get('id')))
      .subscribe((movie) => this.movie = movie);
  }

  public changeRate(rate) {
    this.onChangeRate.emit(rate);
  }
}
