import { NgModule } from '@angular/core';
import { MoviesModule } from './movies';
import { NoContentModule } from './no-content';

@NgModule({
  imports: [
    MoviesModule,
    NoContentModule
  ],
  exports: [
    MoviesModule,
    NoContentModule
  ]
})
export class FeaturesModule { }
