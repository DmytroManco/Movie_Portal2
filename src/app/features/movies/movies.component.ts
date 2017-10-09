import { Component, ViewEncapsulation, OnInit, Input, OnDestroy } from '@angular/core';
import { MoviesService } from '../../core/services/movies.service';
import 'rxjs/Rx';
import { Movie } from './movie.model';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'mp-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MoviesComponent implements OnInit, OnDestroy {
  public movies: Movie[];
  public selectedMovie: Movie;
  @Input() public likes: number;
  private subscriptions: Subscription;

  public constructor(public service: MoviesService, public router: Router) {}

  public ngOnInit() {
    this.subscriptions = this.service.fetchData().subscribe(
      (data) => {
        this.movies = data;
        this.selectedMovie = data[0];
      }
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private movieSelect(movie: Movie): void {
      this.selectedMovie = movie;
  }

  private changeLikes(bool: boolean): void {
    (bool === true) ? this.selectedMovie.likes += 1 : this.selectedMovie.likes -= 1;
    this.service.updateMovie(this.selectedMovie);
  }

  private sortMovies(param: string) {
    this.service.sortMovies(param).subscribe(
      (data) => this.movies = data
    );
  }

  private searchMovie(filter: string | number) {
   this.service.filterMovie(filter).subscribe(
     (data) => this.movies = data
   );
  }

  private changeRate(rate: number): void {
    this.selectedMovie.stars = rate;
    this.service.updateMovie(this.selectedMovie);
  }

  private gotoDetail(id: number) {
    this.router.navigate(['/movie/' + id]);
  }

}
