import { NgModule } from '@angular/core';
import { MoviesModule } from './movies';

@NgModule({
  imports: [
    MoviesModule
  ],
  exports: [
    MoviesModule
  ]
})
export class FeaturesModule { }
