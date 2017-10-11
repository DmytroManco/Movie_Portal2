import { Component, ViewEncapsulation, Input, OnInit, OnDestroy } from '@angular/core';
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
export class MovieDetailComponent implements OnInit, OnDestroy  {
  @Input() private movie: Movie;
  private subscriptions: Subscription;

  constructor(private service: MoviesService, private route: ActivatedRoute) {}

  public ngOnInit() {
    this.subscriptions = this.route.paramMap
      .switchMap((params: ParamMap) => this.service.getMovie(parseInt(params.get('id'), 10)))
      .subscribe(
        (movie) => this.movie = movie);
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private changeRate(rate: number): void {
    this.movie.stars = rate;
    this.service.updateMovie(this.movie);
  }

}
