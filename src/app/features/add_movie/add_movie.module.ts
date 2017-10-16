import { NgModule } from '@angular/core';
import { AddMovieComponent } from './add_movie.component';
import { SharedModule } from '../../shared/index';

@NgModule({
  declarations: [
    AddMovieComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    AddMovieComponent
  ]
})
export class AddMovieModule { }
