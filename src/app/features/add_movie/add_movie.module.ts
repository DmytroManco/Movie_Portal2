import { NgModule } from '@angular/core';
import { AddMovieComponent } from './add_movie.component';
import { SharedModule } from '../../shared/index';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddMovieComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    AddMovieComponent
  ]
})
export class AddMovieModule { }
