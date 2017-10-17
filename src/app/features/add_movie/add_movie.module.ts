import { NgModule } from '@angular/core';
import { AddMovieComponent } from './add_movie.component';
import { SharedModule } from '../../shared/index';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AddMovieComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  exports: [
    AddMovieComponent
  ]
})
export class AddMovieModule { }
