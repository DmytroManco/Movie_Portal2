import { NgModule } from '@angular/core';
import { MoviesModule } from './movies';
import { NoContentModule } from './no-content';
import { AddMovieModule } from './add-movie/index';

@NgModule({
  imports: [
    MoviesModule,
    NoContentModule,
    AddMovieModule
  ],
  exports: [
    MoviesModule,
    NoContentModule,
    AddMovieModule
  ]
})
export class FeaturesModule { }
